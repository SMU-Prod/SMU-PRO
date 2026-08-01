"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap35Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 35</span>
          <h1>Refração da Luz: Snell-Descartes e Reflexão Total</h1>
          <p>
            Domine o índice de refração e a lei de Snell-Descartes, entenda o ângulo limite e a reflexão
            total interna — princípio das fibras ópticas, do brilho do diamante e dos endoscópios —
            e compreenda a dispersão que forma o arco-íris e a profundidade aparente na água.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Índice de Refração</span>
        <h2>1. Índice de Refração: n = c/v</h2>
        <p>
          O índice de refração absoluto n de um meio transparent mede quanto a velocidade da luz é reduzida
          nesse meio em comparação ao vácuo. É adimensional e sempre maior ou igual a 1 (pois v ≤ c):
        </p>
        <M block={true}>{"n = \\frac{c}{v} \\qquad v = \\frac{c}{n}"}</M>
        <p>
          Quanto maior o índice n, mais o meio "freia" a luz — chamamos esses meios de <em>mais refringentes</em>.
          O comprimento de onda também muda no meio: <M>{"\\lambda_{meio} = \\lambda_{v\\acute{a}cuo}/n"}</M>,
          mas a frequência permanece constante.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead><tr><th>Meio</th><th>n (aprox.)</th><th>v da luz (m/s)</th></tr></thead>
            <tbody>
              <tr><td>Vácuo</td><td>1,000</td><td>3,00 × 10⁸</td></tr>
              <tr><td>Ar (CPN)</td><td>1,0003</td><td>≈ 3,00 × 10⁸</td></tr>
              <tr><td>Água (20°C)</td><td>1,33</td><td>2,26 × 10⁸</td></tr>
              <tr><td>Vidro borossilicato</td><td>1,47</td><td>2,04 × 10⁸</td></tr>
              <tr><td>Vidro comum</td><td>1,50</td><td>2,00 × 10⁸</td></tr>
              <tr><td>Diamante</td><td>2,42</td><td>1,24 × 10⁸</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Snell-Descartes</span>
        <h2>2. Lei de Snell-Descartes</h2>
        <p>
          Quando um raio de luz passa da interface entre dois meios com índices n₁ e n₂, o produto
          n·senθ é conservado. Isso implica que o raio muda de direção (exceto se θ₁ = 0°):
        </p>
        <M block={true}>{"n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2"}</M>
        <div className="lesson-highlight">
          <h3>Interpretação física</h3>
          <p>
            <strong>n₁ &lt; n₂ (vai para meio mais refringente):</strong> θ₂ &lt; θ₁ — raio se aproxima da normal.<br/>
            <strong>n₁ &gt; n₂ (vai para meio menos refringente):</strong> θ₂ &gt; θ₁ — raio se afasta da normal.<br/>
            <strong>θ₁ = 0° (incidência normal):</strong> sem desvio, independente dos meios.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama Refração</span>
        <h2>3. Diagrama da Refração na Interface</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 260" width="400" height="260" aria-label="Refração na interface plana entre dois meios n1 e n2">
            {/* Interface */}
            <line x1="0" y1="130" x2="400" y2="130" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="10,5"/>
            {/* Normal */}
            <line x1="200" y1="10" x2="200" y2="250" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="5,4"/>
            {/* Incident ray */}
            <line x1="60" y1="20" x2="200" y2="130" stroke="#6366f1" strokeWidth="2.5"/>
            <polygon points="196,126 204,126 200,133" fill="#6366f1"/>
            {/* Refracted ray */}
            <line x1="200" y1="130" x2="270" y2="250" stroke="#f59e0b" strokeWidth="2.5"/>
            <polygon points="266,246 274,246 270,253" fill="#f59e0b"/>
            {/* Angle θ1 arc */}
            <path d="M188,130 A18,18 0 0,1 193,114" fill="none" stroke="#6366f1" strokeWidth="1.8"/>
            <text x="167" y="118" fill="#6366f1" fontSize="14" fontWeight="bold">θ₁</text>
            {/* Angle θ2 arc */}
            <path d="M207,145 A22,22 0 0,0 220,132" fill="none" stroke="#f59e0b" strokeWidth="1.8"/>
            <text x="222" y="152" fill="#f59e0b" fontSize="14" fontWeight="bold">θ₂</text>
            {/* Medium labels */}
            <text x="10" y="80" fill="#475569" fontSize="14" fontWeight="bold">n₁</text>
            <text x="10" y="200" fill="#475569" fontSize="14" fontWeight="bold">n₂ &gt; n₁</text>
            {/* Ray labels */}
            <text x="45" y="18" fill="#6366f1" fontSize="12">Raio incidente</text>
            <text x="272" y="255" fill="#f59e0b" fontSize="12">Raio refratado</text>
            {/* Normal label */}
            <text x="204" y="12" fill="#94a3b8" fontSize="11">Normal</text>
            {/* Formula */}
            <text x="20" y="250" fill="#334155" fontSize="12">n₁ sen θ₁ = n₂ sen θ₂</text>
          </svg>
          <figcaption>Refração: raio passando de meio n₁ para meio mais refringente n₂. O ângulo θ₂ &lt; θ₁ — o raio se aproxima da normal. A lei de Snell-Descartes garante n₁ sen θ₁ = n₂ sen θ₂.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ângulo Limite</span>
        <h2>4. Refração para Meio Menos Denso: Ângulo Limite</h2>
        <p>
          Quando a luz vai de um meio mais refringente (n₁) para um menos refringente (n₂ &lt; n₁),
          o ângulo de refração θ₂ é maior que θ₁. À medida que θ₁ aumenta, chegamos ao
          <strong> ângulo limite (θ_L)</strong> em que o raio refratado emerge rente à superfície (θ₂ = 90°):
        </p>
        <M block={true}>{"n_1 \\sin\\theta_L = n_2 \\sin 90° = n_2"}</M>
        <M block={true}>{"\\sin\\theta_L = \\frac{n_2}{n_1} \\quad (\\text{com } n_1 > n_2)"}</M>

        <h2>5. Reflexão Total Interna: θ₁ &gt; θ_L</h2>
        <p>
          Quando o ângulo de incidência supera o ângulo limite, <strong>não há raio refratado</strong> —
          toda a energia é refletida de volta ao meio mais refringente. É a <em>reflexão total interna</em>.
          As condições necessárias são:
        </p>
        <div className="lesson-highlight">
          <h3>Duas condições para Reflexão Total Interna</h3>
          <p>1. A luz deve viajar do meio mais refringente para o menos refringente (n₁ &gt; n₂).<br/>
          2. O ângulo de incidência deve superar o ângulo limite: θ₁ &gt; θ_L.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama RTI</span>
        <h2>6. Diagrama: Progressão até a Reflexão Total Interna</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 440 220" width="440" height="220" aria-label="Progressão de raios até reflexão total interna">
            {/* Interface */}
            <line x1="0" y1="110" x2="440" y2="110" stroke="#94a3b8" strokeWidth="1.5"/>
            {/* Normal */}
            <line x1="220" y1="20" x2="220" y2="200" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4"/>
            {/* n1 label (below interface = denser) */}
            <text x="5" y="180" fill="#6366f1" fontSize="13" fontWeight="bold">n₁ (vidro)</text>
            {/* n2 label (above = less dense) */}
            <text x="5" y="50" fill="#94a3b8" fontSize="13">n₂ (ar)</text>

            {/* Case 1: sub-critical (θ < θL): incident from below, refracted above */}
            <line x1="120" y1="180" x2="130" y2="110" stroke="#10b981" strokeWidth="2"/>
            <line x1="130" y1="110" x2="80" y2="30" stroke="#10b981" strokeWidth="1.5" strokeDasharray="5,3"/>
            <line x1="130" y1="110" x2="180" y2="180" stroke="#10b981" strokeWidth="1.5" opacity="0.5"/>
            <text x="65" y="200" fill="#10b981" fontSize="10">θ &lt; θ_L</text>
            <text x="55" y="212" fill="#10b981" fontSize="10">refrata</text>

            {/* Case 2: at critical angle */}
            <line x1="220" y1="180" x2="220" y2="110" stroke="#f59e0b" strokeWidth="2"/>
            <line x1="220" y1="110" x2="440" y2="112" stroke="#f59e0b" strokeWidth="1.8" strokeDasharray="6,3"/>
            <line x1="220" y1="110" x2="260" y2="180" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5"/>
            <text x="195" y="200" fill="#f59e0b" fontSize="10">θ = θ_L</text>
            <text x="188" y="212" fill="#f59e0b" fontSize="10">emerge rente</text>

            {/* Case 3: total internal reflection */}
            <line x1="330" y1="180" x2="310" y2="110" stroke="#ef4444" strokeWidth="2"/>
            <line x1="310" y1="110" x2="390" y2="180" stroke="#ef4444" strokeWidth="2"/>
            <text x="318" y="200" fill="#ef4444" fontSize="10">θ &gt; θ_L</text>
            <text x="308" y="212" fill="#ef4444" fontSize="10">reflexão total</text>

            {/* Labels */}
            <text x="55" y="25" fill="#10b981" fontSize="11">Refratado</text>
            <text x="408" y="108" fill="#f59e0b" fontSize="11">Rente</text>
          </svg>
          <figcaption>Progressão do ângulo de incidência (luz no vidro → ar): θ &lt; θ_L: refrata normalmente (verde). θ = θ_L: refratado emerge rente à superfície (θ₂ = 90°, amarelo). θ &gt; θ_L: reflexão total interna — nenhum raio sai (vermelho).</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações RTI</span>
        <h2>7. Aplicações da Reflexão Total Interna</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead><tr><th>Aplicação</th><th>n_núcleo / n_casca</th><th>θ_L (aprox.)</th><th>Vantagem</th></tr></thead>
            <tbody>
              <tr><td>Fibra óptica monomodo</td><td>1,467 / 1,460</td><td>≈ 85°</td><td>Transmite internet a 100 Gbps por km</td></tr>
              <tr><td>Endoscópio (fibra de imagem)</td><td>vidro / vidro de menor n</td><td>~42°</td><td>Visualiza interior de órgãos sem cirurgia aberta</td></tr>
              <tr><td>Prisma refletor (binocular)</td><td>vidro / ar</td><td>~42°</td><td>Deflexão de 90° sem perda por absorção em camada espelhadaz</td></tr>
              <tr><td>Diamante lapidado</td><td>2,42 / ar</td><td>≈ 24,4°</td><td>Alta retenção interna → brilho intenso e dispersão colorida</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dispersão</span>
        <h2>8. Dispersão: Diferentes λ Têm Diferentes n</h2>
        <p>
          Em meios materiais, o índice de refração depende levemente da frequência (cor) da luz. A luz
          violeta (maior f, menor λ) tem n ligeiramente maior que a luz vermelha (menor f, maior λ).
          Essa dependência chama-se <em>dispersão cromática</em>:
        </p>
        <M block={true}>{"n_{violeta} > n_{azul} > \\cdots > n_{vermelho}"}</M>
        <p>
          Ao atravessar um prisma ou uma gota d'água, cada cor é desviada por ângulo diferente,
          separando a luz branca no espectro ROYGBIV (vermelho, laranja, amarelo, verde, azul, anil, violeta).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Arco-Íris</span>
        <h2>9. Arco-Íris: Refração + Reflexão Interna + Dispersão</h2>
        <p>
          O arco-íris resulta da combinação de três fenômenos em gotas d'água esféricas:
          (1) <strong>refração</strong> ao entrar na gota, com separação das cores;
          (2) <strong>reflexão total interna</strong> na face traseira da gota;
          (3) <strong>refração</strong> novamente ao sair, amplificando a separação angular.
          O arco-íris primário aparece a ~42° do ponto antissolar (vermelho externo, violeta interno).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Profundidade Aparente</span>
        <h2>10. Profundidade Aparente no Dioptro Plano</h2>
        <p>
          Quando observamos objetos submersos em água a partir do ar, eles parecem mais rasos do que
          realmente estão. Para raios próximos à normal (ângulos pequenos):
        </p>
        <M block={true}>{"H_{ap} = H_{real} \\cdot \\frac{n_{obs}}{n_{obj}} = \\frac{H_{real}}{n_{\\acute{a}gua}}"}</M>
        <p>
          Para água (n = 1,33): <M>{"H_{ap} = H_{real}/1{,}33 \\approx 0{,}75 \\, H_{real}"}</M>.
          Um peixe a 1,33 m parece estar a apenas 1,00 m de profundidade. O mesmo efeito faz o "canudo
          quebrado" na água.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo das Fórmulas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>n</span>
            <h3>Índice de Refração</h3>
            <M block={true}>{"n = c/v"}</M>
          </div>
          <div className="math-card">
            <span>S</span>
            <h3>Snell-Descartes</h3>
            <M block={true}>{"n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2"}</M>
          </div>
          <div className="math-card">
            <span>θ_L</span>
            <h3>Ângulo Limite</h3>
            <M block={true}>{"\\sin\\theta_L = n_2/n_1"}</M>
          </div>
          <div className="math-card">
            <span>H</span>
            <h3>Profundidade Aparente</h3>
            <M block={true}>{"H_{ap} = H_{real} \\cdot n_{obs}/n_{obj}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Ângulo de Refração no Vidro"
          statement={<p>Luz passa do ar (n = 1,00) para o vidro (n_vidro = 1,50) com ângulo de incidência θ₁ = 30°. Qual é o ângulo de refração θ₂? (sen 30° = 0,500; sen 19,5° ≈ 0,333)</p>}
          options={[
            {letter:"a", text:"θ₂ ≈ 19,5°", correct:true},
            {letter:"b", text:"θ₂ = 30°"},
            {letter:"c", text:"θ₂ ≈ 45°"},
            {letter:"d", text:"θ₂ ≈ 48,6°"},
          ]}
          resolution={<><M block={true}>{"n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2"}</M><M block={true}>{"1{,}00 \\times 0{,}500 = 1{,}50 \\times \\sin\\theta_2 \\quad \\Rightarrow \\quad \\sin\\theta_2 = \\frac{0{,}500}{1{,}50} = 0{,}333"}</M><M block={true}>{"\\theta_2 \\approx 19{,}5°"}</M></>}
        />

        <Exercise
          level="Intermediário"
          title="2. Ângulo Limite da Água"
          statement={<p>Calcule o ângulo limite para a interface água (n = 1,33) → ar (n = 1,00). Acima desse ângulo, peixes não conseguem enxergar o mundo externo a partir de abaixo da superfície.</p>}
          options={[
            {letter:"a", text:"θ_L ≈ 48,8°", correct:true},
            {letter:"b", text:"θ_L ≈ 41,8°"},
            {letter:"c", text:"θ_L ≈ 63°"},
            {letter:"d", text:"θ_L ≈ 24,4°"},
          ]}
          resolution={<><M block={true}>{"\\sin\\theta_L = \\frac{n_{ar}}{n_{\\acute{a}gua}} = \\frac{1{,}00}{1{,}33} = 0{,}752"}</M><M block={true}>{"\\theta_L = \\arcsin(0{,}752) \\approx 48{,}8°"}</M><p>Um peixe olhando para cima enxerga o mundo externo por uma "janela" circular de semi-ângulo 48,8°. Fora dessa janela, o fundo da piscina aparece refletido — reflexão total interna.</p></>}
        />

        <Exercise
          level="Avançado"
          title="3. Prisma de Vidro: Ocorre Reflexão Total?"
          statement={<p>Um prisma de vidro tem n = 1,60 e ângulo de 45°. Um raio entra perpendicularmente em uma face, propaga-se no vidro e incide na face inclinada a 45°. Há reflexão total interna? (θ_L do vidro-ar: sen θ_L = 1/1,6 = 0,625 → θ_L ≈ 38,7°)</p>}
          options={[
            {letter:"a", text:"Não — 45° é menor que θ_L, então o raio refrata para fora"},
            {letter:"b", text:"Sim — 45° é maior que θ_L ≈ 38,7°, ocorre reflexão total", correct:true},
            {letter:"c", text:"Depende da cor da luz"},
            {letter:"d", text:"Não ocorre porque o raio entra perpendicularmente na face inicial"},
          ]}
          resolution={<><p>O ângulo crítico para vidro (n=1,60) → ar é:</p><M block={true}>{"\\sin\\theta_L = \\frac{1{,}00}{1{,}60} = 0{,}625 \\quad \\Rightarrow \\quad \\theta_L \\approx 38{,}7°"}</M><p>O raio incide na face de 45°. Como 45° &gt; 38,7° = θ_L, ocorre <strong>reflexão total interna</strong>. O raio é totalmente refletido (não sai por essa face). Esse efeito é explorado em prismas de binocular para defletir raios 90° ou 180° com eficiência quase 100%.</p></>}
        />

        <Exercise
          level="Contextualizado"
          title="4. Fibra Óptica: Cone de Aceitação e Vantagem sobre Cobre"
          statement={<p>Uma fibra óptica tem núcleo n_núcleo = 1,50 e revestimento n_casca = 1,45. Calcule o ângulo limite θ_L na interface núcleo-casca. Qual é a principal vantagem da fibra sobre fios de cobre para transmissão de dados?</p>}
          options={[
            {letter:"a", text:"θ_L ≈ 75,2° — fibra transmite eletricidade mais rápido que cobre"},
            {letter:"b", text:"θ_L ≈ 75,2° — fibra transmite dados em altíssimas taxas com baixíssima atenuação e imunidade a interferências eletromagnéticas", correct:true},
            {letter:"c", text:"θ_L ≈ 46,1° — fibra reflete melhor que espelhos metálicos"},
            {letter:"d", text:"θ_L ≈ 41,8° — fibra é mais barata que cobre"},
          ]}
          resolution={<><M block={true}>{"\\sin\\theta_L = \\frac{n_{casca}}{n_{n\\acute{u}cleo}} = \\frac{1{,}45}{1{,}50} = 0{,}9\\overline{6} \\quad \\Rightarrow \\quad \\theta_L \\approx 75{,}2°"}</M><p>Raios que viajam no núcleo e incidem na interface núcleo-casca com ângulo maior que 75,2° sofrem reflexão total — ficam confinados. Vantagens sobre cobre: (1) largura de banda enorme (Tbps vs. Gbps); (2) atenuação muito menor (0,2 dB/km vs. 10 dB/km); (3) imune a interferências eletromagnéticas; (4) mais leve; (5) não conduz eletricidade (seguro em ambientes elétricos).</p></>}
        />

        <Exercise
          level="Contextualizado"
          title="5. Fotografia Subaquática: Profundidade Aparente"
          statement={<p>Um mergulhador fotografa um recife de coral a uma profundidade real de 3,0 m em água (n_água = 1,33). Qual é a profundidade aparente vista por um observador acima da superfície? Por que objetos submersos parecem mais próximos?</p>}
          options={[
            {letter:"a", text:"H_aparente ≈ 4,0 m — objetos parecem mais distantes por causa da refração"},
            {letter:"b", text:"H_aparente ≈ 2,26 m — objetos parecem mais rasos porque os raios refratam afastando-se da normal ao sair da água", correct:true},
            {letter:"c", text:"H_aparente = 3,0 m — a profundidade não muda"},
            {letter:"d", text:"H_aparente ≈ 1,5 m — metade da profundidade real"},
          ]}
          resolution={<><M block={true}>{"H_{ap} = H_{real} \\cdot \\frac{n_{ar}}{n_{\\acute{a}gua}} = 3{,}0 \\times \\frac{1{,}00}{1{,}33} \\approx 2{,}26 \\text{ m}"}</M><p>O observador vê o objeto como se estivesse a ~2,26 m, não a 3,0 m. Isso ocorre porque os raios provenientes do objeto refratam ao sair da água, afastando-se da normal — convergem no ponto de onde parecem provir (imagem virtual) acima da posição real. O mesmo efeito faz piscinas parecerem mais rasas do que são e causa o "canudo quebrado".</p></>}
        />
      </section>
    </article>
  );
}
