"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap04Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 4</span>
          <h1>Movimento Retilíneo Uniformemente Variado (MRUV)</h1>
          <p>
            O MRUV descreve o movimento de corpos com aceleração constante não nula — da
            frenagem de um automóvel ao lançamento de foguetes. Suas três equações (v, x e
            Torricelli) são as ferramentas mais usadas em toda a Mecânica do vestibular.
          </p>
        </div>
      </section>

      {/* ── 1. Definição ── */}
      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>1. Definição do MRUV: Aceleração Constante Não Nula</h2>
        <p>
          O <strong>Movimento Retilíneo Uniformemente Variado (MRUV)</strong> ocorre quando um
          corpo percorre uma trajetória retilínea com aceleração <em>constante e diferente de zero</em>:
        </p>
        <M block={true}>{"a = \\text{constante} \\neq 0"}</M>
        <p>
          A aceleração é a taxa de variação da velocidade com o tempo. Quando positiva, a velocidade
          aumenta no sentido positivo; quando negativa, pode significar frenagem (se o móvel ia
          no sentido positivo) ou aceleração no sentido negativo.
        </p>
        <div className="lesson-highlight">
          <h3>Unidade da Aceleração</h3>
          <p>
            A unidade SI de aceleração é m/s², lida como "metros por segundo ao quadrado" ou
            "metros por segundo por segundo". Significa que a velocidade varia em 1 m/s a cada
            segundo: <M>{"1\\text{ m/s}^2 = 1\\text{ m/s}/\\text{s}"}</M>.
          </p>
        </div>
      </section>

      {/* ── 2. Equação da velocidade ── */}
      <section className="lesson-section">
        <span className="section-kicker">Equação 1</span>
        <h2>2. Equação da Velocidade: <M>{"v = v_0 + a \\cdot t"}</M></h2>
        <p>
          A velocidade instantânea em qualquer instante <M>{"t"}</M> é:
        </p>
        <M block={true}>{"v = v_0 + a \\cdot t"}</M>
        <p>onde <M>{"v_0"}</M> é a velocidade inicial (em m/s) e <M>{"a"}</M> é a aceleração constante (em m/s²).</p>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>
            Um carro parte do repouso (<M>{"v_0 = 0"}</M>) com aceleração <M>{"a = 3"}</M> m/s².
          </p>
          <M block={true}>{"v(t) = 0 + 3t = 3t"}</M>
          <p>
            Em <M>{"t = 5"}</M> s: <M>{"v = 15"}</M> m/s = 54 km/h.<br />
            Quando chega a 30 m/s? <M>{"30 = 3t \\Rightarrow t = 10"}</M> s.
          </p>
        </div>
      </section>

      {/* ── 3. Equação da posição ── */}
      <section className="lesson-section">
        <span className="section-kicker">Equação 2</span>
        <h2>3. Equação Horária da Posição: <M>{"x = x_0 + v_0 t + \\tfrac{1}{2}at^2"}</M></h2>
        <p>
          A posição em função do tempo no MRUV é uma função quadrática (parábola):
        </p>
        <M block={true}>{"x = x_0 + v_0 t + \\frac{1}{2}at^2"}</M>
        <p>
          Os três termos têm interpretação física clara:
        </p>
        <ul style={{ paddingLeft: "1.5rem", lineHeight: 2 }}>
          <li><M>{"x_0"}</M>: posição inicial (onde o móvel estava em t = 0)</li>
          <li><M>{"v_0 t"}</M>: deslocamento que ocorreria sem aceleração (MRU puro)</li>
          <li><M>{"\\frac{1}{2}at^2"}</M>: deslocamento adicional devido à aceleração</li>
        </ul>
      </section>

      {/* ── 4. Torricelli ── */}
      <section className="lesson-section">
        <span className="section-kicker">Equação 3</span>
        <h2>4. Equação de Torricelli: <M>{"v^2 = v_0^2 + 2a \\cdot \\Delta x"}</M></h2>
        <p>
          A <strong>equação de Torricelli</strong> relaciona velocidade, aceleração e deslocamento
          <em>sem usar o tempo explicitamente</em>:
        </p>
        <M block={true}>{"v^2 = v_0^2 + 2a \\cdot \\Delta x"}</M>
        <p>
          É derivada eliminando <M>{"t"}</M> das duas equações anteriores. Muito útil quando
          não se conhece o tempo — como no cálculo da distância de frenagem.
        </p>
        <div className="lesson-highlight">
          <h3>Derivação da Equação de Torricelli</h3>
          <p>De <M>{"v = v_0 + at"}</M>, isolamos <M>{"t = \\frac{v - v_0}{a}"}</M>.</p>
          <p>Substituindo em <M>{"\\Delta x = v_0 t + \\frac{1}{2}at^2"}</M> e simplificando:</p>
          <M block={true}>{"\\Delta x = \\frac{v^2 - v_0^2}{2a} \\Rightarrow v^2 = v_0^2 + 2a\\Delta x"}</M>
        </div>
      </section>

      {/* ── 5. Gráfico v-t ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>5. Gráfico v-t do MRUV: Reta Inclinada</h2>
        <p>
          No gráfico <M>{"v \\times t"}</M> do MRUV, a função <M>{"v = v_0 + at"}</M> é linear —
          uma reta com coeficiente angular igual à aceleração.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 260" width="420" height="260" aria-label="Gráfico v-t mostrando movimento acelerado e retardado">
            <defs>
              <marker id="ax4a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#374151" />
              </marker>
            </defs>
            {/* Eixos */}
            <line x1="50" y1="200" x2="400" y2="200" stroke="#374151" strokeWidth="2" markerEnd="url(#ax4a)" />
            <text x="405" y="204" fill="#374151" fontSize="12" fontWeight="bold">t (s)</text>
            <line x1="50" y1="240" x2="50" y2="20" stroke="#374151" strokeWidth="2" markerEnd="url(#ax4a)" />
            <text x="25" y="18" fill="#374151" fontSize="12" fontWeight="bold">v</text>
            {/* Movimento acelerado (a > 0): reta crescente */}
            <line x1="50" y1="200" x2="350" y2="60" stroke="#2563eb" strokeWidth="2.5" />
            <text x="355" y="58" fill="#2563eb" fontSize="12" fontWeight="bold">acelerado (a&gt;0)</text>
            {/* Marcação de Δv e Δt para calcular a */}
            <line x1="150" y1="153" x2="250" y2="153" stroke="#2563eb" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="250" y1="153" x2="250" y2="107" stroke="#2563eb" strokeWidth="1" strokeDasharray="4 3" />
            <text x="195" y="168" fill="#2563eb" fontSize="10" textAnchor="middle">Δt</text>
            <text x="262" y="133" fill="#2563eb" fontSize="10">Δv</text>
            <text x="175" y="100" fill="#2563eb" fontSize="10">a = Δv/Δt</text>
            {/* Movimento retardado (a < 0): reta decrescente */}
            <line x1="50" y1="80" x2="300" y2="190" stroke="#dc2626" strokeWidth="2.5" />
            <text x="305" y="192" fill="#dc2626" fontSize="12" fontWeight="bold">retardado (a&lt;0)</text>
            {/* Marcação de v0 no eixo */}
            <circle cx="50" cy="200" r="4" fill="#2563eb" />
            <text x="28" y="204" fill="#2563eb" fontSize="10">v₀=0</text>
            <circle cx="50" cy="80" r="4" fill="#dc2626" />
            <text x="18" y="84" fill="#dc2626" fontSize="10">v₀B</text>
            {/* Área sob reta acelerada */}
            <polygon points="50,200 250,200 250,107 50,200" fill="#dbeafe" opacity="0.5" />
            <text x="130" y="185" fill="#1d4ed8" fontSize="10">área = Δx</text>
          </svg>
          <figcaption>
            Gráfico v-t do MRUV: reta crescente (a&gt;0, acelerado) e reta decrescente (a&lt;0, retardado).
            O coeficiente angular da reta é a aceleração. A área sob a reta (trapézio) é o deslocamento.
          </figcaption>
        </figure>
      </section>

      {/* ── 6. Gráfico x-t ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>6. Gráfico x-t do MRUV: Parábola</h2>
        <p>
          A função <M>{"x = x_0 + v_0 t + \\frac{1}{2}at^2"}</M> é quadrática — no gráfico
          <M>{" x-t"}</M>, a curva é uma <strong>parábola</strong>.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 240" width="420" height="240" aria-label="Gráfico x-t parabólico para MRUV">
            <defs>
              <marker id="ax4b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#374151" />
              </marker>
            </defs>
            <line x1="50" y1="200" x2="400" y2="200" stroke="#374151" strokeWidth="2" markerEnd="url(#ax4b)" />
            <text x="405" y="204" fill="#374151" fontSize="12" fontWeight="bold">t</text>
            <line x1="50" y1="220" x2="50" y2="20" stroke="#374151" strokeWidth="2" markerEnd="url(#ax4b)" />
            <text x="25" y="18" fill="#374151" fontSize="12" fontWeight="bold">x</text>
            {/* Parábola côncava para cima: MRUV acelerado (a>0, v0=0) */}
            <path d="M 50 190 Q 160 190 260 100 T 380 40" fill="none" stroke="#2563eb" strokeWidth="2.5" />
            <text x="355" y="38" fill="#2563eb" fontSize="11">a&gt;0 (acelerado)</text>
            {/* Parábola côncava para baixo: MRUV retardado do tipo lançamento */}
            <path d="M 50 50 Q 170 50 240 150 T 370 190" fill="none" stroke="#dc2626" strokeWidth="2.5" />
            <text x="355" y="193" fill="#dc2626" fontSize="11">a&lt;0 (retardado)</text>
            {/* Tangente em um ponto */}
            <circle cx="200" cy="107" r="4" fill="#2563eb" />
            <line x1="150" y1="140" x2="250" y2="74" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="5 3" />
            <text x="255" y="72" fill="#7c3aed" fontSize="10">tangente = v_inst</text>
          </svg>
          <figcaption>
            Gráfico x-t do MRUV: curva parabólica. Para a&gt;0, a abertura é para cima (cresce cada vez mais rápido).
            Para a&lt;0, a parábola é côncava. A tangente em qualquer ponto dá a velocidade instantânea.
          </figcaption>
        </figure>
      </section>

      {/* ── 7. Gráfico a-t ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>7. Gráfico a-t do MRUV: Linha Horizontal</h2>
        <p>
          Como a aceleração é constante no MRUV, o gráfico <M>{"a \\times t"}</M> é uma reta
          horizontal em <M>{"a = \\text{const}"}</M>. A área sob o gráfico a-t é a variação de
          velocidade:
        </p>
        <M block={true}>{"\\Delta v = a \\cdot \\Delta t \\quad (\\text{área sob a-t})"}</M>
      </section>

      {/* ── 8. Área sob v-t ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>8. Área sob o Gráfico v-t = Deslocamento (Trapézio)</h2>
        <p>
          No MRUV, a área sob a reta v-t entre dois instantes é um <strong>trapézio</strong>
          (bases paralelas: <M>{"v_0"}</M> e <M>{"v"}</M>; altura: <M>{"\\Delta t"}</M>):
        </p>
        <M block={true}>{"\\Delta x = \\frac{(v_0 + v)}{2} \\cdot \\Delta t"}</M>
        <p>
          Essa fórmula é a média das velocidades inicial e final multiplicada pelo tempo — outra
          forma de calcular o deslocamento no MRUV, equivalente à equação horária.
        </p>
      </section>

      {/* ── 9. Aceleração positiva vs negativa ── */}
      <section className="lesson-section">
        <span className="section-kicker">Interpretação</span>
        <h2>9. Aceleração Positiva vs. Negativa: Acelerado vs. Retardado</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Velocidade (v)</th>
                <th>Aceleração (a)</th>
                <th>Movimento</th>
                <th>|v| está...</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>v &gt; 0</td><td>a &gt; 0</td><td>Progressivo acelerado</td><td>Aumentando</td></tr>
              <tr><td>v &gt; 0</td><td>a &lt; 0</td><td>Progressivo retardado</td><td>Diminuindo</td></tr>
              <tr><td>v &lt; 0</td><td>a &lt; 0</td><td>Retrógrado acelerado</td><td>Aumentando</td></tr>
              <tr><td>v &lt; 0</td><td>a &gt; 0</td><td>Retrógrado retardado</td><td>Diminuindo</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          O movimento é <strong>acelerado</strong> quando v e a têm <em>mesmo sinal</em>;
          <strong> retardado</strong> quando têm <em>sinais opostos</em>. O sinal da aceleração
          não determina sozinho se o movimento é acelerado ou retardado.
        </p>
      </section>

      {/* ── 10. Tempo para parar ── */}
      <section className="lesson-section">
        <span className="section-kicker">Aplicação</span>
        <h2>10. Equação do Tempo para Parar: v = 0</h2>
        <p>
          Um móvel em MRUV retardado eventualmente para. O instante de parada é dado por
          <M>{" v = 0"}</M>:
        </p>
        <M block={true}>{"0 = v_0 + a \\cdot t_{stop} \\Rightarrow t_{stop} = -\\frac{v_0}{a}"}</M>
        <p>
          Como o movimento é retardado, <M>{"a"}</M> e <M>{"v_0"}</M> têm sinais opostos,
          garantindo <M>{"t_{stop} > 0"}</M>. A distância percorrida até parar (usando Torricelli):
        </p>
        <M block={true}>{"\\Delta x_{stop} = -\\frac{v_0^2}{2a}"}</M>
      </section>

      {/* ── 11. Tabela MRU vs MRUV ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>11. Tabela Comparativa MRU vs. MRUV</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Característica</th><th>MRU</th><th>MRUV</th></tr>
            </thead>
            <tbody>
              <tr><td>Aceleração</td><td>a = 0</td><td>a = cte ≠ 0</td></tr>
              <tr><td>Velocidade</td><td>v = constante</td><td>v = v₀ + at</td></tr>
              <tr><td>Posição</td><td>x = x₀ + vt (linear)</td><td>x = x₀ + v₀t + ½at² (quadrática)</td></tr>
              <tr><td>Gráfico x-t</td><td>Reta</td><td>Parábola</td></tr>
              <tr><td>Gráfico v-t</td><td>Reta horizontal</td><td>Reta inclinada</td></tr>
              <tr><td>Equação extra</td><td>—</td><td>v² = v₀² + 2aΔx (Torricelli)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 12. Resumo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>12. Resumo — As Três Equações do MRUV</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Equação 1</span>
            <h3>Velocidade</h3>
            <M block={true}>{"v = v_0 + at"}</M>
          </div>
          <div className="math-card">
            <span>Equação 2</span>
            <h3>Posição</h3>
            <M block={true}>{"x = x_0 + v_0 t + \\frac{1}{2}at^2"}</M>
          </div>
          <div className="math-card">
            <span>Equação 3</span>
            <h3>Torricelli</h3>
            <M block={true}>{"v^2 = v_0^2 + 2a\\Delta x"}</M>
          </div>
          <div className="math-card">
            <span>Área v-t</span>
            <h3>Deslocamento</h3>
            <M block={true}>{"\\Delta x = \\frac{v_0+v}{2}\\cdot\\Delta t"}</M>
          </div>
          <div className="math-card">
            <span>Parada</span>
            <h3>Tempo para v = 0</h3>
            <M block={true}>{"t_{stop} = -\\frac{v_0}{a}"}</M>
          </div>
        </div>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Velocidade Final com MRUV"
          statement={
            <p>
              Um carro parte do repouso e acelera uniformemente com <M>{"a = 4"}</M> m/s².
              Qual é sua velocidade após <strong>5 s</strong>?
            </p>
          }
          options={[
            { letter: "a", text: "16 m/s" },
            { letter: "b", text: "20 m/s", correct: true },
            { letter: "c", text: "25 m/s" },
            { letter: "d", text: "10 m/s" },
          ]}
          resolution={
            <>
              <M block={true}>{"v = v_0 + at = 0 + 4 \\times 5 = 20\\text{ m/s}"}</M>
              <p>Em km/h: <M>{"20 \\times 3{,}6 = 72"}</M> km/h.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Distância de Frenagem (Torricelli)"
          statement={
            <p>
              Um carro trafegando a <strong>20 m/s</strong> freia com aceleração
              <M>{" a = -2"}</M> m/s² até parar. Usando a equação de Torricelli, calcule a
              distância percorrida durante a frenagem.
            </p>
          }
          options={[
            { letter: "a", text: "80 m" },
            { letter: "b", text: "100 m", correct: true },
            { letter: "c", text: "50 m" },
            { letter: "d", text: "200 m" },
          ]}
          resolution={
            <>
              <p>Na parada, <M>{"v = 0"}</M>. Aplicando Torricelli:</p>
              <M block={true}>{"0 = 20^2 + 2 \\times (-2) \\times \\Delta x"}</M>
              <M block={true}>{"4\\Delta x = 400 \\Rightarrow \\Delta x = 100\\text{ m}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Posição pelo Gráfico v-t"
          statement={
            <p>
              Um objeto parte da posição <M>{"x_0 = 0"}</M> com velocidade inicial
              <M>{" v_0 = 10"}</M> m/s e aceleração <M>{"a = 3"}</M> m/s². Qual é a posição
              em <M>{"t = 6"}</M> s?
            </p>
          }
          options={[
            { letter: "a", text: "60 m" },
            { letter: "b", text: "114 m", correct: true },
            { letter: "c", text: "120 m" },
            { letter: "d", text: "90 m" },
          ]}
          resolution={
            <>
              <M block={true}>{"x = x_0 + v_0 t + \\frac{1}{2}at^2 = 0 + 10 \\times 6 + \\frac{1}{2} \\times 3 \\times 36"}</M>
              <M block={true}>{"x = 60 + 54 = 114\\text{ m}"}</M>
              <p>Verificação pela área do gráfico v-t (trapézio):</p>
              <M block={true}>{"v(6) = 10 + 3 \\times 6 = 28\\text{ m/s}"}</M>
              <M block={true}>{"\\Delta x = \\frac{10+28}{2} \\times 6 = 19 \\times 6 = 114\\text{ m ✓}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Airbag e Aceleração em Colisão (ENEM)"
          statement={
            <p>
              Um airbag se ativa em <strong>30 ms</strong> (0,030 s) e reduz a velocidade
              de um ocupante de <strong>60 km/h</strong> até o repouso. Calcule a aceleração
              de frenagem em m/s² e compare com a aceleração da gravidade (g = 10 m/s²).
            </p>
          }
          options={[
            { letter: "a", text: "a ≈ 55,6 m/s² ≈ 5,6g" , correct: true},
            { letter: "b", text: "a ≈ 200 m/s² ≈ 20g" },
            { letter: "c", text: "a ≈ 10 m/s² = 1g" },
            { letter: "d", text: "a ≈ 30 m/s² = 3g" },
          ]}
          resolution={
            <>
              <p>Convertendo: <M>{"v_0 = 60/3{,}6 \\approx 16{,}7"}</M> m/s; <M>{"v_f = 0"}</M></p>
              <M block={true}>{"a = \\frac{\\Delta v}{\\Delta t} = \\frac{0 - 16{,}7}{0{,}030} \\approx -556\\text{ m/s}^2"}</M>
              <p>Em módulo: <M>{"|a| \\approx 556\\text{ m/s}^2 \\approx 55{,}6g"}</M>. Isso é altíssimo — daí a importância do airbag que distribui o impacto. Sem ele, o impacto com o painel seria ainda mais brusco.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Dobro da Velocidade — Distância de Frenagem"
          statement={
            <p>
              Um carro freia de <strong>80 km/h</strong> até parar com aceleração
              <M>{" a = -5"}</M> m/s². Se a velocidade fosse <strong>160 km/h</strong>
              (o dobro), qual seria a relação entre as distâncias de frenagem?
            </p>
          }
          options={[
            { letter: "a", text: "A distância seria o dobro" },
            { letter: "b", text: "A distância seria 4 vezes maior", correct: true },
            { letter: "c", text: "A distância seria o triplo" },
            { letter: "d", text: "A distância seria 8 vezes maior" },
          ]}
          resolution={
            <>
              <p>Pela equação de Torricelli com <M>{"v = 0"}</M>:</p>
              <M block={true}>{"\\Delta x = \\frac{v_0^2}{2|a|}"}</M>
              <p>
                Para <M>{"v_0"}</M> = 80 km/h: <M>{"\\Delta x_1 = \\frac{(22{,}2)^2}{10} \\approx 49"}</M> m.
              </p>
              <p>
                Para <M>{"2v_0"}</M> = 160 km/h: <M>{"\\Delta x_2 = \\frac{(44{,}4)^2}{10} \\approx 197"}</M> m.
              </p>
              <M block={true}>{"\\frac{\\Delta x_2}{\\Delta x_1} = \\frac{(2v_0)^2}{v_0^2} = 4"}</M>
              <p>Dobrar a velocidade quadruplica a distância de frenagem — um fato crucial para a segurança no trânsito.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
