"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap30Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 30</span>
          <h1>Fenômenos Ondulatórios I: Reflexão, Refração, Difração</h1>
          <p>
            Domine os três fenômenos ondulatórios essenciais: a reflexão e suas leis, a refração e a lei de
            Snell-Descartes, o princípio de Huygens e a difração. Compreenda como cada fenômeno ocorre e
            suas aplicações práticas em fibra óptica, arco-íris e comunicações.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Reflexão</span>
        <h2>1. Reflexão: A Onda Retorna ao Mesmo Meio</h2>
        <p>
          A reflexão ocorre quando uma onda encontra uma interface entre dois meios e retorna, total ou
          parcialmente, ao meio original. A lei da reflexão estabelece que o ângulo de reflexão é sempre
          igual ao ângulo de incidência, ambos medidos em relação à <strong>normal</strong> à superfície.
        </p>
        <M block={true}>{"\\theta_i = \\theta_r"}</M>
        <p>
          Além disso, o raio incidente, a normal e o raio refletido são sempre coplanares (1ª lei da reflexão).
          Na reflexão, a frequência, o comprimento de onda e a velocidade da onda permanecem inalterados.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos de Reflexão</span>
        <h2>2. Reflexão Especular vs. Reflexão Difusa</h2>
        <div className="lesson-highlight">
          <h3>Reflexão Especular (Regular)</h3>
          <p>Ocorre em superfícies lisas e polidas (espelhos, água calma). Todos os raios paralelos incidentes
          refletem paralelamente, formando imagens nítidas. A lei θᵢ = θᵣ é satisfeita ponto a ponto com
          a mesma normal local.</p>
        </div>
        <div className="lesson-highlight">
          <h3>Reflexão Difusa</h3>
          <p>Ocorre em superfícies rugosas (papel, parede, roupa). Raios paralelos refletem em direções
          aleatórias pois cada pequena área tem normal diferente. É graças à reflexão difusa que enxergamos
          objetos que não emitem luz própria.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Refração</span>
        <h2>3. Refração: Mudança de Meio → Mudança de Velocidade e Direção</h2>
        <p>
          A refração ocorre quando uma onda passa de um meio para outro com velocidade de propagação
          diferente. A frequência permanece constante (determinada pela fonte), mas a velocidade v e o
          comprimento de onda λ mudam. Se a incidência for oblíqua, a direção de propagação muda.
        </p>
        <M block={true}>{"n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2 \\quad \\text{(Lei de Snell-Descartes)}"}</M>
        <div className="lesson-highlight">
          <h3>Regra prática de desvio</h3>
          <p>Ao ir para meio mais refringente (n maior, v menor): raio se aproxima da normal (θ₂ &lt; θ₁).
          Ao ir para meio menos refringente (n menor, v maior): raio se afasta da normal (θ₂ &gt; θ₁).</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Índice de Refração</span>
        <h2>4. Relação entre Índice de Refração e Velocidade</h2>
        <p>
          O índice de refração absoluto n de um meio é definido como a razão entre a velocidade da luz
          no vácuo c e a velocidade da luz nesse meio v:
        </p>
        <M block={true}>{"n = \\frac{c}{v} \\quad \\Rightarrow \\quad v = \\frac{c}{n}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead><tr><th>Meio</th><th>Índice de refração n</th><th>Velocidade da luz (m/s)</th></tr></thead>
            <tbody>
              <tr><td>Vácuo</td><td>1,000</td><td>3,00 × 10⁸</td></tr>
              <tr><td>Ar</td><td>1,0003</td><td>≈ 3,00 × 10⁸</td></tr>
              <tr><td>Água (20°C)</td><td>1,33</td><td>2,26 × 10⁸</td></tr>
              <tr><td>Vidro comum</td><td>1,50</td><td>2,00 × 10⁸</td></tr>
              <tr><td>Diamante</td><td>2,42</td><td>1,24 × 10⁸</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>5. Reflexão e Refração na Interface</h2>
        <p>
          O diagrama abaixo mostra um raio de luz incidindo numa interface plana entre dois meios (n₁ e n₂,
          com n₂ maior). O raio incidente se divide em raio refletido (mesmo ângulo θᵢ = θᵣ) e raio
          refratado (ângulo θₜ menor, pois n₂ &gt; n₁).
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 260" width="400" height="260" aria-label="Diagrama de reflexão e refração numa interface entre dois meios">
            {/* Interface */}
            <line x1="0" y1="130" x2="400" y2="130" stroke="#94a3b8" strokeWidth="2" strokeDasharray="8,4"/>
            {/* Normal */}
            <line x1="200" y1="20" x2="200" y2="240" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,4"/>
            {/* Incident ray */}
            <line x1="80" y1="30" x2="200" y2="130" stroke="#6366f1" strokeWidth="2.5"/>
            <polygon points="196,126 204,126 200,133" fill="#6366f1"/>
            {/* Reflected ray */}
            <line x1="200" y1="130" x2="320" y2="30" stroke="#10b981" strokeWidth="2.5"/>
            <polygon points="316,33 324,33 320,26" fill="#10b981"/>
            {/* Refracted ray */}
            <line x1="200" y1="130" x2="260" y2="240" stroke="#f59e0b" strokeWidth="2.5"/>
            <polygon points="256,237 264,237 260,244" fill="#f59e0b"/>
            {/* Angle arcs */}
            <path d="M190,130 A15,15 0 0,1 195,117" fill="none" stroke="#6366f1" strokeWidth="1.5"/>
            <path d="M205,117 A15,15 0 0,1 210,130" fill="none" stroke="#10b981" strokeWidth="1.5"/>
            <path d="M205,143 A20,20 0 0,0 215,130" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
            {/* Labels */}
            <text x="170" y="112" fill="#6366f1" fontSize="13">θᵢ</text>
            <text x="213" y="112" fill="#10b981" fontSize="13">θᵣ</text>
            <text x="218" y="155" fill="#f59e0b" fontSize="13">θₜ</text>
            <text x="55" y="28" fill="#6366f1" fontSize="12">Raio incidente</text>
            <text x="300" y="28" fill="#10b981" fontSize="12">Raio refletido</text>
            <text x="265" y="255" fill="#f59e0b" fontSize="12">Raio refratado</text>
            <text x="5" y="118" fill="#475569" fontSize="12">n₁</text>
            <text x="5" y="160" fill="#475569" fontSize="12">n₂ &gt; n₁</text>
            <text x="210" y="25" fill="#94a3b8" fontSize="11">Normal</text>
          </svg>
          <figcaption>Interface plana entre meios n₁ e n₂ (n₂ &gt; n₁): raio incidente (roxo) com θᵢ; raio refletido (verde) com θᵣ = θᵢ; raio refratado (laranja) com θₜ &lt; θᵢ (lei de Snell).</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Difração</span>
        <h2>6. Difração: Desvio ao Redor de Obstáculos e Aberturas</h2>
        <p>
          A difração é o fenômeno pelo qual uma onda contorna obstáculos ou se expande ao passar por aberturas.
          É uma propriedade exclusiva das ondas — partículas não se difratam. A difração é mais pronunciada
          quando o comprimento de onda λ é da mesma ordem de grandeza do tamanho do obstáculo ou abertura.
        </p>
        <div className="lesson-highlight">
          <h3>Condição para difração significativa</h3>
          <M block={true}>{"\\lambda \\gtrsim d \\quad \\text{(tamanho do obstáculo ou abertura)}"}</M>
          <p>Exemplo: som (λ ≈ 0,1–10 m) difrata facilmente ao redor de portas e paredes (d ≈ 1–3 m).
          Luz visível (λ ≈ 400–700 nm) exige fendas micrométricas para que a difração seja perceptível.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Difração por Fenda</span>
        <h2>7. Padrão de Difração por Fenda Simples</h2>
        <p>
          Uma onda plana passando por uma fenda de largura a produz um padrão de intensidade com um máximo
          central largo e máximos secundários menores. Os mínimos (franjas escuras) ocorrem em ângulos θ dados por:
        </p>
        <M block={true}>{"a \\sin\\theta = m\\lambda, \\quad m = \\pm 1, \\pm 2, \\ldots \\text{ (mínimos)}"}</M>
        <p>
          O máximo central tem largura angular <M>{"2\\lambda/a"}</M>. Quanto menor a fenda, mais larga a
          difração — esse é o princípio que limita a resolução de telescópios e microscópios.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Huygens</span>
        <h2>8. Princípio de Huygens</h2>
        <p>
          O princípio de Huygens (1678) afirma que <em>cada ponto de uma frente de onda atua como fonte
          pontual de ondas secundárias esféricas</em>. A nova frente de onda é a envolvente dessas ondas
          secundárias. Esse princípio explica geometricamente a reflexão, a refração e a difração.
        </p>
        <div className="lesson-highlight">
          <h3>Aplicação na difração</h3>
          <p>Quando uma frente de onda plana atinge uma fenda estreita, apenas os pontos na abertura
          geram ondas secundárias — que se espalham em semicírculos no espaço atrás da fenda, explicando
          a difração mesmo quando λ ≫ largura da fenda.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Absorção</span>
        <h2>9. Absorção: A Onda Perde Energia no Meio</h2>
        <p>
          À medida que uma onda se propaga em um meio real, parte de sua energia é convertida em calor
          (atrito interno, viscosidade). A amplitude decai exponencialmente com a distância percorrida:
        </p>
        <M block={true}>{"A(x) = A_0 \\, e^{-\\alpha x}"}</M>
        <p>
          onde α é o coeficiente de atenuação do meio. Isso explica por que o ultrassom médico de alta
          frequência penetra menos profundamente — absorção aumenta com a frequência.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>10. Aplicações dos Fenômenos Ondulatórios</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead><tr><th>Fenômeno</th><th>Aplicação</th><th>Princípio</th></tr></thead>
            <tbody>
              <tr><td>Reflexão total interna</td><td>Fibra óptica</td><td>Quando θ &gt; θ_crítico, luz não sai do núcleo</td></tr>
              <tr><td>Reflexão difusa</td><td>Telas de cinema, paredes brancas</td><td>Espalham luz em todas as direções</td></tr>
              <tr><td>Refração (dispersão)</td><td>Arco-íris, prisma</td><td>n depende de λ → cores separadas</td></tr>
              <tr><td>Difração</td><td>Antena de rádio AM</td><td>λ grande contorna obstáculos</td></tr>
              <tr><td>Difração</td><td>Resolução de telescópios</td><td>Limite de Rayleigh: θ_mín = 1,22λ/D</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>θ</span>
            <h3>Lei da Reflexão</h3>
            <M block={true}>{"\\theta_i = \\theta_r"}</M>
          </div>
          <div className="math-card">
            <span>n</span>
            <h3>Snell-Descartes</h3>
            <M block={true}>{"n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2"}</M>
          </div>
          <div className="math-card">
            <span>n</span>
            <h3>Índice de Refração</h3>
            <M block={true}>{"n = \\frac{c}{v}"}</M>
          </div>
          <div className="math-card">
            <span>λ</span>
            <h3>Condição de Difração</h3>
            <M block={true}>{"\\lambda \\sim d"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas Ondulatórios</span>
        <h2>Síntese Visual: Reflexão e Refração</h2>
        <p>
          Reflexão e refração têm leis geométricas simples — dominar os ângulos
          (incidência, reflexão e refração) resolve a maioria das questões do ENEM.
        </p>

        <svg viewBox="0 0 700 220" className="lesson-svg" aria-label="Reflexão e refração de onda numa superfície">
          <defs>
            <marker id="arr30a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
            <marker id="arr30b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
            <marker id="arr30c" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#16a34a" />
            </marker>
          </defs>
          {/* superfície */}
          <line x1="40" y1="110" x2="660" y2="110" stroke="#1e293b" strokeWidth="2" />
          <text x="670" y="114" textAnchor="start" fontSize="12" fill="#1e293b">superfície</text>
          {/* normal */}
          <line x1="350" y1="20" x2="350" y2="200" stroke="#64748b" strokeWidth="1" strokeDasharray="6 3" />
          <text x="362" y="22" textAnchor="start" fontSize="12" fill="#64748b">normal</text>
          {/* raio incidente */}
          <line x1="160" y1="20" x2="350" y2="110" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arr30a)" />
          <text x="230" y="45" textAnchor="middle" fontSize="13" fill="#2563eb">incidente</text>
          {/* ângulo incidência */}
          <text x="325" y="70" textAnchor="end" fontSize="12" fill="#2563eb">θi</text>
          {/* raio refletido */}
          <line x1="350" y1="110" x2="540" y2="20" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr30b)" />
          <text x="470" y="45" textAnchor="middle" fontSize="13" fill="#dc2626">refletido θr=θi</text>
          {/* raio refratado */}
          <line x1="350" y1="110" x2="460" y2="200" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arr30c)" />
          <text x="480" y="175" textAnchor="start" fontSize="13" fill="#16a34a">refratado θt</text>
          <text x="350" y="215" textAnchor="middle" fontSize="13" fill="#0f172a">Reflexão: θi = θr | Snell-Descartes: n₁·sen θi = n₂·sen θt</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Difração e interferência construtiva e destrutiva">
          {/* difração */}
          <rect x="60" y="30" width="270" height="130" rx="6" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
          <text x="195" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">Difração</text>
          <text x="195" y="75" textAnchor="middle" fontSize="12" fill="#1d4ed8">Onda contorna obstáculo</text>
          <text x="195" y="93" textAnchor="middle" fontSize="12" fill="#1d4ed8">ou abertura</text>
          <text x="195" y="111" textAnchor="middle" fontSize="12" fill="#1d4ed8">λ ≳ abertura → mais difração</text>
          <text x="195" y="130" textAnchor="middle" fontSize="12" fill="#1d4ed8">ex: som dobra esquinas</text>
          <text x="195" y="148" textAnchor="middle" fontSize="12" fill="#1d4ed8">luz difrata em fenda estreita</text>

          {/* interferência */}
          <rect x="370" y="30" width="270" height="130" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
          <text x="505" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">Interferência</text>
          <text x="505" y="75" textAnchor="middle" fontSize="12" fill="#166534">Construtiva: Δφ = 0 ou 2π</text>
          <text x="505" y="93" textAnchor="middle" fontSize="12" fill="#166534">→ amplitude aumenta</text>
          <text x="505" y="111" textAnchor="middle" fontSize="12" fill="#166534">Destrutiva: Δφ = π</text>
          <text x="505" y="130" textAnchor="middle" fontSize="12" fill="#166534">→ amplitude cancela</text>
          <text x="505" y="148" textAnchor="middle" fontSize="12" fill="#166534">ex: fones noise-cancelling</text>
          <text x="350" y="178" textAnchor="middle" fontSize="13" fill="#0f172a">Ondas superpostas: y = y₁ + y₂ (princípio da superposição)</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Lei da Reflexão"
          statement={<p>Um raio de luz incide em um espelho plano formando 35° com a normal à superfície. Qual é o ângulo de reflexão?</p>}
          options={[
            {letter:"a", text:"25°"},
            {letter:"b", text:"35°", correct:true},
            {letter:"c", text:"55°"},
            {letter:"d", text:"70°"},
          ]}
          resolution={<><p>Pela lei da reflexão: o ângulo de reflexão é sempre igual ao ângulo de incidência, ambos medidos em relação à normal.</p><M block={true}>{"\\theta_r = \\theta_i = 35°"}</M></>}
        />

        <Exercise
          level="Intermediário"
          title="2. Lei de Snell-Descartes"
          statement={<p>Um raio de luz passa do ar (n₁ = 1,00) para o vidro (n₂ = 1,50) com ângulo de incidência θ₁ = 30°. Qual é o ângulo de refração θ₂? (sen 30° = 0,500; sen 19,5° ≈ 0,333)</p>}
          options={[
            {letter:"a", text:"θ₂ ≈ 19,5°", correct:true},
            {letter:"b", text:"θ₂ = 30°"},
            {letter:"c", text:"θ₂ ≈ 45°"},
            {letter:"d", text:"θ₂ ≈ 48,6°"},
          ]}
          resolution={<><M block={true}>{"n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2"}</M><M block={true}>{"1{,}00 \\times 0{,}500 = 1{,}50 \\times \\sin\\theta_2"}</M><M block={true}>{"\\sin\\theta_2 = \\frac{0{,}500}{1{,}50} = 0{,}333 \\quad \\Rightarrow \\quad \\theta_2 \\approx 19{,}5°"}</M></>}
        />

        <Exercise
          level="Avançado"
          title="3. Ângulo Crítico para Reflexão Total Interna"
          statement={<p>Determine o ângulo crítico (ângulo limite) para a interface vidro (n = 1,50) → ar (n = 1,00). Acima desse ângulo, ocorre reflexão total interna. (sen 41,8° ≈ 0,667)</p>}
          options={[
            {letter:"a", text:"θ_c = 30°"},
            {letter:"b", text:"θ_c ≈ 41,8°", correct:true},
            {letter:"c", text:"θ_c ≈ 48,2°"},
            {letter:"d", text:"θ_c = 60°"},
          ]}
          resolution={<><p>No ângulo crítico, o raio refratado emerge rente à superfície (θ₂ = 90°):</p><M block={true}>{"n_1 \\sin\\theta_c = n_2 \\sin 90°"}</M><M block={true}>{"1{,}50 \\times \\sin\\theta_c = 1{,}00 \\times 1 \\quad \\Rightarrow \\quad \\sin\\theta_c = \\frac{1}{1{,}50} = 0{,}667"}</M><M block={true}>{"\\theta_c \\approx 41{,}8°"}</M></>}
        />

        <Exercise
          level="Contextualizado"
          title="4. Fibra Óptica: Ângulo Crítico e Confinamento da Luz"
          statement={<p>Uma fibra óptica tem núcleo com n_núcleo = 1,48 e revestimento com n_casca = 1,36. Calcule o ângulo crítico para a interface núcleo-casca e explique por que o sinal luminoso permanece confinado dentro da fibra.</p>}
          options={[
            {letter:"a", text:"θ_c ≈ 66,8° — luz confinada por reflexão total interna em ângulos maiores que θ_c", correct:true},
            {letter:"b", text:"θ_c ≈ 23,2° — luz confinada por refração"},
            {letter:"c", text:"θ_c ≈ 41,8° — luz confinada por difração"},
            {letter:"d", text:"θ_c ≈ 90° — sem confinamento"},
          ]}
          resolution={<><M block={true}>{"\\sin\\theta_c = \\frac{n_{casca}}{n_{n\\acute{u}cleo}} = \\frac{1{,}36}{1{,}48} = 0{,}919"}</M><M block={true}>{"\\theta_c = \\arcsin(0{,}919) \\approx 66{,}8°"}</M><p>Todo raio que viaja dentro do núcleo e incide na interface núcleo-casca com ângulo maior que 66,8° sofre reflexão total interna — não vaza para o revestimento. Isso mantém o sinal confinado mesmo em cabos com dezenas de quilômetros de comprimento, viabilizando a internet de alta velocidade.</p></>}
        />

        <Exercise
          level="Contextualizado"
          title="5. Brilho do Diamante"
          statement={<p>O diamante tem índice de refração n = 2,42. Calcule o ângulo crítico para a interface diamante-ar e compare com o do vidro (n = 1,50, θ_c ≈ 41,8°). Por que o diamante brilha mais que o vidro?</p>}
          options={[
            {letter:"a", text:"θ_c ≈ 24,4° — ângulo crítico menor → mais reflexão total → mais brilho", correct:true},
            {letter:"b", text:"θ_c ≈ 66,8° — ângulo crítico maior → mais refração → mais brilho"},
            {letter:"c", text:"θ_c ≈ 41,8° — igual ao vidro, mas lapidação explica o brilho"},
            {letter:"d", text:"θ_c ≈ 90° — sem reflexão total"},
          ]}
          resolution={<><M block={true}>{"\\sin\\theta_c = \\frac{1{,}00}{2{,}42} = 0{,}413 \\quad \\Rightarrow \\quad \\theta_c \\approx 24{,}4°"}</M><p>Com θ_c ≈ 24,4° (muito menor que o do vidro, 41,8°), qualquer raio que entra no diamante com ângulo interno maior que 24,4° sofre reflexão total interna. A lapidação "brilhante" é projetada para que a maioria dos raios internos supere esse ângulo, refletindo múltiplas vezes antes de sair — daí o brilho intenso e o "fogo" (dispersão das cores).</p></>}
        />
      </section>
    </article>
  );
}
