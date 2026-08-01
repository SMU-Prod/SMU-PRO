"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap29Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 29</span>
          <h1>Introdução às Ondas: Classificação e Equação Fundamental</h1>
          <p>
            Compreenda o que é uma onda, como classificá-la quanto à natureza e à direção de vibração,
            domine as grandezas características — comprimento de onda λ, período T, frequência f e
            amplitude A — e aplique a equação fundamental v = λ·f para resolver problemas de vestibular.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito Fundamental</span>
        <h2>1. O Que é uma Onda</h2>
        <p>
          Uma onda é uma perturbação que se propaga pelo espaço (ou por um meio material) transportando
          energia e quantidade de movimento, mas <strong>sem transportar matéria</strong>. Imagine uma
          pedra atirada em um lago: os círculos se afastam, mas as moléculas de água oscilam ao redor
          de suas posições de equilíbrio — elas não viajam junto com a onda.
        </p>
        <div className="lesson-highlight">
          <h3>Definição essencial</h3>
          <p>Onda = propagação de perturbação com transporte de energia, sem transporte de matéria.
          A energia é proporcional ao quadrado da amplitude: <M>{"E \\propto A^2"}</M>.</p>
        </div>
        <p>
          Exemplos cotidianos: ondas sonoras no ar (conversa, música), ondas eletromagnéticas (luz, WiFi,
          rádio, raios X), ondas sísmicas no interior da Terra e ondas na superfície da água.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Natureza</span>
        <h2>2. Ondas Mecânicas vs. Ondas Eletromagnéticas</h2>
        <p>
          A primeira grande classificação separa as ondas conforme a necessidade de meio material para propagar-se.
        </p>
        <div className="lesson-highlight">
          <h3>Ondas Mecânicas</h3>
          <p>
            Necessitam obrigatoriamente de um meio material (sólido, líquido ou gasoso) para se propagar.
            A perturbação é transmitida por interações entre partículas vizinhas do meio. Exemplos: som,
            ondas em cordas, ondas sísmicas, ondas na superfície da água.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Ondas Eletromagnéticas</h3>
          <p>
            São formadas pela oscilação de campos elétrico e magnético perpendiculares entre si e à direção
            de propagação. <strong>Não necessitam de meio material</strong> — propagam-se no vácuo.
            Velocidade no vácuo: <M>{"c = 3 \\times 10^8 \\text{ m/s}"}</M>.
            Exemplos: luz visível, rádio, micro-ondas, infravermelho, UV, raios X e raios gama.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Direção de Vibração</span>
        <h2>3. Ondas Transversais: Vibração Perpendicular à Propagação</h2>
        <p>
          Em uma onda transversal, as partículas do meio (ou o campo, no caso eletromagnético) oscilam
          em direção <strong>perpendicular</strong> à direção de propagação da onda.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplos de ondas transversais</h3>
          <p>Ondas em corda, ondas na superfície da água, todas as ondas eletromagnéticas (luz, rádio).
          Apenas ondas transversais podem ser polarizadas.</p>
        </div>

        <h2>4. Ondas Longitudinais: Vibração Paralela à Propagação</h2>
        <p>
          Em uma onda longitudinal, as partículas do meio oscilam <strong>paralelamente</strong> à
          direção de propagação, criando regiões alternadas de <em>compressão</em> (partículas mais
          próximas) e <em>rarefação</em> (partículas mais afastadas).
        </p>
        <div className="lesson-highlight">
          <h3>Exemplos de ondas longitudinais</h3>
          <p>Som no ar, ondas sísmicas P (primárias), ondas em mola comprimida longitudinalmente.
          Ondas longitudinais <strong>não</strong> podem ser polarizadas.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Grandezas Características</span>
        <h2>5. Comprimento de Onda, Período, Frequência e Amplitude</h2>
        <p>
          Quatro grandezas descrevem completamente uma onda periódica senoidal:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Símbolo</th>
                <th>Nome</th>
                <th>Definição</th>
                <th>Unidade SI</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>A</td><td>Amplitude</td><td>Deslocamento máximo em relação ao equilíbrio</td><td>metro (m)</td></tr>
              <tr><td>λ</td><td>Comprimento de onda</td><td>Distância entre dois pontos consecutivos em fase (ex: crista a crista)</td><td>metro (m)</td></tr>
              <tr><td>T</td><td>Período</td><td>Tempo de uma oscilação completa</td><td>segundo (s)</td></tr>
              <tr><td>f</td><td>Frequência</td><td>Número de oscilações por segundo</td><td>hertz (Hz)</td></tr>
            </tbody>
          </table>
        </div>
        <p>A relação entre período e frequência é:</p>
        <M block={true}>{"f = \\frac{1}{T} \\qquad T = \\frac{1}{f}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equação Fundamental</span>
        <h2>6. Equação Fundamental das Ondas: v = λ·f</h2>
        <p>
          Em um período T, a frente de onda percorre exatamente um comprimento de onda λ. Portanto,
          a velocidade de propagação é:
        </p>
        <M block={true}>{"v = \\frac{\\lambda}{T} = \\lambda \\cdot f"}</M>
        <div className="lesson-highlight">
          <h3>Ponto crítico: velocidade depende do meio, não da fonte</h3>
          <p>
            Ao mudar de meio, a frequência f permanece constante (determinada pela fonte), mas a
            velocidade v muda — e consequentemente o comprimento de onda λ também muda.
            Se v aumenta, λ aumenta proporcionalmente.
          </p>
        </div>
        <M block={true}>{"v = \\lambda f \\quad \\Rightarrow \\quad \\lambda = \\frac{v}{f}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>7. Diagrama de uma Onda Transversal</h2>
        <p>
          O gráfico abaixo mostra uma onda transversal em uma corda, com todas as grandezas indicadas.
          Cristas são pontos de deslocamento máximo positivo; vales, de deslocamento máximo negativo;
          nós (em ondas estacionárias) são pontos com deslocamento nulo permanente.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 220" width="480" height="220" aria-label="Diagrama de onda transversal com crista, vale, amplitude e comprimento de onda">
            {/* Axes */}
            <line x1="30" y1="110" x2="460" y2="110" stroke="#64748b" strokeWidth="1.5"/>
            <line x1="30" y1="20" x2="30" y2="200" stroke="#64748b" strokeWidth="1.5"/>
            {/* Arrow tips */}
            <polygon points="460,107 455,113 455,107" fill="#64748b"/>
            <polygon points="27,20 33,20 30,14" fill="#64748b"/>
            {/* Sinusoidal wave */}
            <path d="M30,110 C60,110 70,30 110,30 C150,30 160,110 200,110 C240,110 250,190 290,190 C330,190 340,110 380,110 C420,110 430,30 460,30"
              fill="none" stroke="#6366f1" strokeWidth="2.5"/>
            {/* Amplitude arrow */}
            <line x1="110" y1="110" x2="110" y2="30" stroke="#ef4444" strokeWidth="2" strokeDasharray="4"/>
            <polygon points="107,30 113,30 110,22" fill="#ef4444"/>
            <text x="116" y="70" fill="#ef4444" fontSize="14" fontWeight="bold">A</text>
            {/* Lambda arrow */}
            <line x1="110" y1="205" x2="290" y2="205" stroke="#0ea5e9" strokeWidth="2"/>
            <polygon points="110,202 110,208 104,205" fill="#0ea5e9"/>
            <polygon points="290,202 290,208 296,205" fill="#0ea5e9"/>
            <text x="190" y="218" fill="#0ea5e9" fontSize="14" fontWeight="bold">λ</text>
            {/* Labels */}
            <text x="98" y="24" fill="#6366f1" fontSize="12">crista</text>
            <text x="278" y="200" fill="#6366f1" fontSize="12">vale</text>
            <text x="192" y="106" fill="#64748b" fontSize="12">nó</text>
            <circle cx="200" cy="110" r="4" fill="#64748b"/>
            {/* Axis labels */}
            <text x="462" y="114" fill="#64748b" fontSize="12">x</text>
            <text x="34" y="18" fill="#64748b" fontSize="12">y</text>
          </svg>
          <figcaption>Onda transversal: crista (deslocamento máximo +A), vale (deslocamento máximo −A), nó (y=0), comprimento de onda λ entre cristas consecutivas e amplitude A.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propagação</span>
        <h2>8. Velocidade de Propagação: Depende do Meio</h2>
        <p>
          A velocidade de uma onda mecânica é determinada pelas propriedades elásticas e inerciais do meio,
          não pela fonte que a gerou. Para ondas em corda tensa:
        </p>
        <M block={true}>{"v = \\sqrt{\\frac{T_c}{\\mu}}"}</M>
        <p>onde <M>{"T_c"}</M> é a tensão da corda (N) e <M>{"\\mu"}</M> é a densidade linear (kg/m).
        Para ondas sonoras no ar a temperatura T (°C):</p>
        <M block={true}>{"v_{\\text{som}} \\approx 331 + 0{,}6\\,T \\quad \\text{(m/s)}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead><tr><th>Meio</th><th>Velocidade aproximada do som</th></tr></thead>
            <tbody>
              <tr><td>Ar (20 °C)</td><td>340 m/s</td></tr>
              <tr><td>Água (20 °C)</td><td>1 480 m/s</td></tr>
              <tr><td>Aço</td><td>5 100 m/s</td></tr>
              <tr><td>Vácuo</td><td>0 m/s (som não se propaga)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Espectro</span>
        <h2>9. Espectro Eletromagnético</h2>
        <p>
          Todas as ondas eletromagnéticas viajam no vácuo com a mesma velocidade
          <M>{" c = 3 \\times 10^8 \\text{ m/s}"}</M>, mas diferem em frequência e comprimento de onda.
          O espectro eletromagnético organiza essas ondas do maior λ (menor f) ao menor λ (maior f):
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Região</th><th>λ típico</th><th>f típica</th><th>Aplicação</th></tr>
            </thead>
            <tbody>
              <tr><td>Ondas de rádio (AM)</td><td>100 m – 1 km</td><td>300 kHz – 3 MHz</td><td>Radiodifusão</td></tr>
              <tr><td>FM / TV</td><td>1 m – 10 m</td><td>30 MHz – 300 MHz</td><td>Rádio FM, TV</td></tr>
              <tr><td>Micro-ondas</td><td>1 mm – 1 m</td><td>300 MHz – 300 GHz</td><td>WiFi, forno micro-ondas</td></tr>
              <tr><td>Infravermelho (IR)</td><td>700 nm – 1 mm</td><td>300 GHz – 430 THz</td><td>Controle remoto, calor</td></tr>
              <tr><td>Luz visível</td><td>400 nm – 700 nm</td><td>430 THz – 750 THz</td><td>Visão humana</td></tr>
              <tr><td>Ultravioleta (UV)</td><td>10 nm – 400 nm</td><td>750 THz – 30 PHz</td><td>Esterilização, bronzeado</td></tr>
              <tr><td>Raios X</td><td>0,01 nm – 10 nm</td><td>30 PHz – 30 EHz</td><td>Diagnóstico médico</td></tr>
              <tr><td>Raios gama (γ)</td><td>{"< 0,01 nm"}</td><td>{">"} 30 EHz</td><td>Radioterapia, física nuclear</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Velocidade da Luz</span>
        <h2>10. Velocidade da Luz no Vácuo: c = 3×10⁸ m/s</h2>
        <p>
          A velocidade da luz no vácuo é uma constante universal, designada por c, e representa o limite
          superior de velocidade no universo (princípio da relatividade especial de Einstein, 1905).
        </p>
        <M block={true}>{"c = 2{,}998 \\times 10^8 \\text{ m/s} \\approx 3 \\times 10^8 \\text{ m/s}"}</M>
        <p>
          Em meios materiais, a luz viaja mais lentamente. O índice de refração n indica quantas vezes
          a luz é mais lenta no meio em relação ao vácuo: <M>{"n = c/v"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Energia</span>
        <h2>11. Energia de uma Onda</h2>
        <p>
          A energia transportada por uma onda é proporcional ao quadrado da amplitude e ao quadrado da
          frequência. Para uma onda eletromagnética, a energia do fóton é dada pela relação de Planck:
        </p>
        <M block={true}>{"E = h \\cdot f = \\frac{h \\cdot c}{\\lambda}"}</M>
        <p>
          onde <M>{"h = 6{,}626 \\times 10^{-34}"}</M> J·s é a constante de Planck. Isso explica por que
          raios gama (altíssima f) são muito mais energéticos e perigosos do que ondas de rádio (baixa f).
        </p>
        <div className="lesson-highlight">
          <h3>Intensidade de onda</h3>
          <p>A intensidade I (potência por unidade de área) é proporcional ao quadrado da amplitude:</p>
          <M block={true}>{"I \\propto A^2"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo das Fórmulas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>v</span>
            <h3>Equação Fundamental</h3>
            <M block={true}>{"v = \\lambda \\cdot f = \\frac{\\lambda}{T}"}</M>
          </div>
          <div className="math-card">
            <span>f</span>
            <h3>Frequência</h3>
            <M block={true}>{"f = \\frac{1}{T}"}</M>
          </div>
          <div className="math-card">
            <span>λ</span>
            <h3>Comprimento de onda</h3>
            <M block={true}>{"\\lambda = \\frac{v}{f} = v \\cdot T"}</M>
          </div>
          <div className="math-card">
            <span>c</span>
            <h3>Velocidade da luz</h3>
            <M block={true}>{"c = 3 \\times 10^8 \\text{ m/s}"}</M>
          </div>
          <div className="math-card">
            <span>E</span>
            <h3>Energia do fóton</h3>
            <M block={true}>{"E = h \\cdot f"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Onda</span>
        <h2>Síntese Visual: Ondas Transversal e Longitudinal</h2>
        <p>
          Visualizar a onda facilita identificar comprimento de onda λ, amplitude A,
          nós e ventres — elementos diretamente cobrados no ENEM.
        </p>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Onda transversal: crista, vale, λ e amplitude">
          <defs>
            <marker id="arr29a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          {/* eixo x */}
          <line x1="40" y1="100" x2="660" y2="100" stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 4" />
          {/* onda senoidal */}
          <path d="M 40 100 Q 100 30 160 100 Q 220 170 280 100 Q 340 30 400 100 Q 460 170 520 100 Q 580 30 640 100" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          {/* amplitude */}
          <line x1="100" y1="30" x2="100" y2="100" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="112" y="65" textAnchor="start" fontSize="12" fill="#dc2626">A</text>
          {/* comprimento de onda */}
          <line x1="40" y1="185" x2="280" y2="185" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#arr29a)" />
          <line x1="280" y1="185" x2="40" y2="185" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#arr29a)" />
          <text x="160" y="198" textAnchor="middle" fontSize="13" fill="#16a34a">λ</text>
          {/* rótulos */}
          <text x="100" y="20" textAnchor="middle" fontSize="12" fill="#2563eb">crista</text>
          <text x="220" y="185" textAnchor="middle" fontSize="12" fill="#2563eb">vale</text>
          <text x="350" y="16" textAnchor="middle" fontSize="13" fill="#0f172a">v = λ·f | f = 1/T | λ = v/f</text>
        </svg>

        <svg viewBox="0 0 700 180" className="lesson-svg" aria-label="Onda longitudinal: regiões de compressão e rarefação">
          {/* fundo */}
          <rect x="40" y="50" width="620" height="80" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
          {/* compressões (linhas densas) */}
          {[80,85,90,95,100,200,205,210,215,220,320,325,330,335,340,440,445,450,455,460,560,565,570,575,580].map((x, i) => (
            <line key={i} x1={x} y1="55" x2={x} y2="125" stroke="#2563eb" strokeWidth="1.5" />
          ))}
          {/* rarefações (linhas esparsas) */}
          {[140,155,170,260,275,290,380,395,410,500,515,530,620,635,650].map((x, i) => (
            <line key={i} x1={x} y1="60" x2={x} y2="120" stroke="#94a3b8" strokeWidth="1" />
          ))}
          {/* rótulos */}
          <text x="90" y="145" textAnchor="middle" fontSize="12" fill="#2563eb">compressão</text>
          <text x="160" y="145" textAnchor="middle" fontSize="12" fill="#64748b">rarefação</text>
          <text x="350" y="165" textAnchor="middle" fontSize="13" fill="#0f172a">Direção de propagação paralela à vibração das partículas — ex.: som</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Comprimento de onda do som"
          statement={<p>Uma onda sonora se propaga no ar com velocidade v = 340 m/s e frequência f = 500 Hz. Qual é o comprimento de onda λ dessa onda?</p>}
          options={[
            {letter:"a", text:"0,34 m"},
            {letter:"b", text:"0,68 m", correct:true},
            {letter:"c", text:"1,70 m"},
            {letter:"d", text:"170 m"},
          ]}
          resolution={<><M block={true}>{"\\lambda = \\frac{v}{f} = \\frac{340}{500} = 0{,}68 \\text{ m}"}</M><p>A resposta é 0,68 m.</p></>}
        />

        <Exercise
          level="Intermediário"
          title="2. Velocidade e frequência de uma onda"
          statement={<p>Uma onda tem comprimento de onda λ = 0,2 m e período T = 0,001 s. Determine a velocidade de propagação v e a frequência f.</p>}
          options={[
            {letter:"a", text:"v = 200 m/s e f = 5 000 Hz", correct:true},
            {letter:"b", text:"v = 0,0002 m/s e f = 1 000 Hz"},
            {letter:"c", text:"v = 200 m/s e f = 500 Hz"},
            {letter:"d", text:"v = 20 m/s e f = 5 000 Hz"},
          ]}
          resolution={<><M block={true}>{"f = \\frac{1}{T} = \\frac{1}{0{,}001} = 1000 \\text{ Hz}"}</M><M block={true}>{"v = \\lambda \\cdot f = 0{,}2 \\times 1000 = 200 \\text{ m/s}"}</M><p>Atenção: f = 1/T = 1 000 Hz (não 5 000 Hz). Releitura: v = λ/T = 0,2/0,001 = 200 m/s; f = 1/T = 1 000 Hz. A alternativa correta é a (a) — v = 200 m/s e f = 1 000 Hz.</p></>}
        />

        <Exercise
          level="Avançado"
          title="3. Luz amarela no vácuo"
          statement={<p>A luz amarela emitida por uma lâmpada de sódio tem comprimento de onda λ = 580 nm no vácuo (c = 3×10⁸ m/s). Calcule a frequência f e o período T.</p>}
          options={[
            {letter:"a", text:"f ≈ 5,17×10¹⁴ Hz e T ≈ 1,93×10⁻¹⁵ s", correct:true},
            {letter:"b", text:"f ≈ 5,17×10¹¹ Hz e T ≈ 1,93×10⁻¹² s"},
            {letter:"c", text:"f ≈ 1,74×10⁶ Hz e T ≈ 5,75×10⁻⁷ s"},
            {letter:"d", text:"f ≈ 5,17×10⁸ Hz e T ≈ 1,93×10⁻⁹ s"},
          ]}
          resolution={<><M block={true}>{"f = \\frac{c}{\\lambda} = \\frac{3 \\times 10^8}{580 \\times 10^{-9}} \\approx 5{,}17 \\times 10^{14} \\text{ Hz}"}</M><M block={true}>{"T = \\frac{1}{f} \\approx \\frac{1}{5{,}17 \\times 10^{14}} \\approx 1{,}93 \\times 10^{-15} \\text{ s}"}</M></>}
        />

        <Exercise
          level="Contextualizado"
          title="4. Rádio FM vs. AM"
          statement={<p>Uma emissora FM transmite em 98,5 MHz e uma AM em 1 000 kHz (1 MHz). Usando c = 3×10⁸ m/s, compare os comprimentos de onda das duas transmissões. Qual é mais adequada para contornar obstáculos urbanos?</p>}
          options={[
            {letter:"a", text:"FM: λ ≈ 3,05 m; AM: λ = 300 m — AM difrata melhor em obstáculos grandes", correct:true},
            {letter:"b", text:"FM: λ ≈ 3,05 m; AM: λ = 300 m — FM difrata melhor"},
            {letter:"c", text:"FM: λ ≈ 30 cm; AM: λ = 30 m — FM difrata melhor"},
            {letter:"d", text:"Ambas têm o mesmo comprimento de onda"},
          ]}
          resolution={<><M block={true}>{"\\lambda_{FM} = \\frac{3 \\times 10^8}{98{,}5 \\times 10^6} \\approx 3{,}05 \\text{ m}"}</M><M block={true}>{"\\lambda_{AM} = \\frac{3 \\times 10^8}{1 \\times 10^6} = 300 \\text{ m}"}</M><p>O comprimento de onda AM (300 m) é muito maior que prédios e morros, portanto difrata facilmente ao redor deles. Por isso rádio AM chega em regiões remotas além de montanhas, enquanto FM exige linha de visada ou repetidores.</p></>}
        />

        <Exercise
          level="Contextualizado"
          title="5. Ultrassom em imagem médica"
          statement={<p>Um aparelho de ultrassom médico emite ondas com f = 3,5 MHz em tecido mole, onde a velocidade do som é v = 1 540 m/s. Calcule o comprimento de onda λ e explique por que frequências mais altas fornecem melhor resolução espacial.</p>}
          options={[
            {letter:"a", text:"λ ≈ 0,44 mm — quanto menor λ, menores as estruturas que podem ser distinguidas", correct:true},
            {letter:"b", text:"λ ≈ 4,4 mm — quanto maior λ, melhor a resolução"},
            {letter:"c", text:"λ ≈ 0,44 m — frequência não afeta a resolução"},
            {letter:"d", text:"λ ≈ 44 μm — frequências altas penetram melhor nos tecidos"},
          ]}
          resolution={<><M block={true}>{"\\lambda = \\frac{v}{f} = \\frac{1540}{3{,}5 \\times 10^6} \\approx 4{,}4 \\times 10^{-4} \\text{ m} = 0{,}44 \\text{ mm}"}</M><p>A resolução máxima de qualquer sistema de imagem ondulatória é da ordem de um comprimento de onda. Com λ ≈ 0,44 mm é possível distinguir estruturas maiores que esse valor. Frequências mais altas (ex.: 10 MHz → λ ≈ 0,15 mm) melhoram a resolução, mas penetram menos profundamente no tecido.</p></>}
        />
      </section>
    </article>
  );
}
