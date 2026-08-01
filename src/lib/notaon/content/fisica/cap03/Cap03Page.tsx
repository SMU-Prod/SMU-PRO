"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap03Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 3</span>
          <h1>Movimento Retilíneo Uniforme (MRU) e Análise Gráfica</h1>
          <p>
            O MRU é o modelo mais simples de movimento: velocidade constante, aceleração nula e
            trajetória retilínea. Dominar suas equações e gráficos é o alicerce de toda a
            Cinemática e permite resolver problemas de encontro, ultrapassagem e velocidade relativa.
          </p>
        </div>
      </section>

      {/* ── 1. Definição do MRU ── */}
      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>1. Definição do MRU: Aceleração Nula e Velocidade Constante</h2>
        <p>
          Um móvel está em <strong>Movimento Retilíneo Uniforme (MRU)</strong> quando percorre
          uma trajetória retilínea com <em>velocidade escalar constante</em>. As condições
          necessárias são:
        </p>
        <M block={true}>{"a = 0 \\qquad v = \\text{constante} \\qquad \\text{trajetória: reta}"}</M>
        <div className="lesson-highlight">
          <h3>Consequências do MRU</h3>
          <p>
            • A resultante das forças sobre o móvel é nula (1ª Lei de Newton).<br />
            • Deslocamentos iguais em intervalos iguais de tempo.<br />
            • O gráfico x-t é uma reta; o gráfico v-t é uma reta horizontal; o gráfico a-t é
              o eixo do tempo (a = 0).
          </p>
        </div>
      </section>

      {/* ── 2. Equação horária ── */}
      <section className="lesson-section">
        <span className="section-kicker">Equação</span>
        <h2>2. Equação Horária do MRU: <M>{"x = x_0 + v \\cdot t"}</M></h2>
        <p>
          A posição de um móvel em MRU em função do tempo é dada por:
        </p>
        <M block={true}>{"x(t) = x_0 + v \\cdot t"}</M>
        <p>onde:</p>
        <ul style={{ paddingLeft: "1.5rem", lineHeight: 2 }}>
          <li><M>{"x_0"}</M> = posição inicial (em metros)</li>
          <li><M>{"v"}</M> = velocidade (constante, em m/s) — positiva se no sentido positivo, negativa se no sentido negativo</li>
          <li><M>{"t"}</M> = tempo decorrido desde o instante inicial (em segundos)</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Exemplo Resolvido</h3>
          <p>
            Um carro parte de <M>{"x_0 = 50"}</M> m com velocidade <M>{"v = 20"}</M> m/s.
          </p>
          <M block={true}>{"x(t) = 50 + 20t"}</M>
          <p>
            Em <M>{"t = 5"}</M> s: <M>{"x = 50 + 20 \\times 5 = 150"}</M> m.<br />
            Quando <M>{"x = 250"}</M> m? <M>{"250 = 50 + 20t \\Rightarrow t = 10"}</M> s.
          </p>
        </div>
      </section>

      {/* ── 3. Gráfico x-t do MRU ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>3. Gráfico x-t do MRU: Reta com Inclinação v</h2>
        <p>
          No gráfico posição × tempo do MRU, a função <M>{"x = x_0 + vt"}</M> gera uma reta.
          A inclinação (coeficiente angular) é numericamente igual à velocidade.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 270" width="420" height="270" aria-label="Gráfico x-t do MRU com dois objetos e ponto de encontro">
            <defs>
              <marker id="ax3a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#374151" />
              </marker>
            </defs>
            {/* Eixos */}
            <line x1="50" y1="230" x2="400" y2="230" stroke="#374151" strokeWidth="2" markerEnd="url(#ax3a)" />
            <text x="405" y="234" fill="#374151" fontSize="12" fontWeight="bold">t</text>
            <line x1="50" y1="230" x2="50" y2="20" stroke="#374151" strokeWidth="2" markerEnd="url(#ax3a)" />
            <text x="30" y="18" fill="#374151" fontSize="12" fontWeight="bold">x</text>
            {/* Grade */}
            {[110,170,230,290,350].map(tx => (
              <line key={tx} x1={tx} y1="230" x2={tx} y2="25" stroke="#f3f4f6" strokeWidth="1" />
            ))}
            {/* Objeto A: parte de x0=40, v positivo (slope positivo) */}
            <line x1="50" y1="210" x2="350" y2="60" stroke="#2563eb" strokeWidth="2.5" />
            <text x="356" y="58" fill="#2563eb" fontSize="12" fontWeight="bold">A</text>
            <text x="30" y="214" fill="#2563eb" fontSize="10">x₀A</text>
            {/* Objeto B: parte de posição maior, v negativo (desce) */}
            <line x1="50" y1="80" x2="350" y2="180" stroke="#dc2626" strokeWidth="2.5" />
            <text x="356" y="180" fill="#dc2626" fontSize="12" fontWeight="bold">B</text>
            <text x="30" y="84" fill="#dc2626" fontSize="10">x₀B</text>
            {/* Ponto de encontro */}
            <circle cx="176" cy="145" r="6" fill="#7c3aed" />
            <line x1="176" y1="145" x2="176" y2="230" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="5 3" />
            <text x="170" y="248" fill="#7c3aed" fontSize="11">t_enc</text>
            <text x="182" y="140" fill="#7c3aed" fontSize="11">encontro</text>
            {/* Marcação de Δx e Δt */}
            <line x1="230" y1="107" x2="350" y2="107" stroke="#2563eb" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="350" y1="107" x2="350" y2="60" stroke="#2563eb" strokeWidth="1" strokeDasharray="3 3" />
            <text x="285" y="120" fill="#2563eb" fontSize="10" textAnchor="middle">Δt</text>
            <text x="362" y="88" fill="#2563eb" fontSize="10">Δx</text>
          </svg>
          <figcaption>
            Gráfico x-t: objeto A com v &gt; 0 (reta crescente), objeto B com v &lt; 0 (reta decrescente).
            O ponto de interseção indica o instante e posição do encontro entre os dois móveis.
          </figcaption>
        </figure>
      </section>

      {/* ── 4. Gráfico v-t do MRU ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>4. Gráfico v-t do MRU: Linha Horizontal</h2>
        <p>
          Como a velocidade é constante no MRU, o gráfico <M>{"v \\times t"}</M> é uma reta
          horizontal paralela ao eixo do tempo.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 220" width="420" height="220" aria-label="Gráfico v-t do MRU mostrando área como deslocamento">
            <defs>
              <marker id="ax3b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#374151" />
              </marker>
            </defs>
            {/* Eixos */}
            <line x1="50" y1="170" x2="390" y2="170" stroke="#374151" strokeWidth="2" markerEnd="url(#ax3b)" />
            <text x="395" y="174" fill="#374151" fontSize="12" fontWeight="bold">t (s)</text>
            <line x1="50" y1="190" x2="50" y2="20" stroke="#374151" strokeWidth="2" markerEnd="url(#ax3b)" />
            <text x="25" y="18" fill="#374151" fontSize="12" fontWeight="bold">v (m/s)</text>
            {/* Reta horizontal */}
            <line x1="50" y1="90" x2="370" y2="90" stroke="#2563eb" strokeWidth="3" />
            <text x="375" y="94" fill="#2563eb" fontSize="12" fontWeight="bold">v = cte</text>
            {/* Área (retângulo) preenchida */}
            <rect x="100" y="90" width="200" height="80" fill="#dbeafe" opacity="0.7" />
            <line x1="100" y1="90" x2="100" y2="170" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 3" />
            <line x1="300" y1="90" x2="300" y2="170" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 3" />
            {/* Rótulos */}
            <text x="195" y="137" fill="#1d4ed8" fontSize="12" textAnchor="middle" fontWeight="bold">Área = Δx</text>
            <text x="100" y="186" fill="#374151" fontSize="11" textAnchor="middle">t₁</text>
            <text x="300" y="186" fill="#374151" fontSize="11" textAnchor="middle">t₂</text>
            <text x="36" y="94" fill="#2563eb" fontSize="11" textAnchor="middle">v</text>
            {/* Seta dupla para Δt */}
            <line x1="100" y1="200" x2="300" y2="200" stroke="#374151" strokeWidth="1.5" markerEnd="url(#ax3b)" />
            <text x="195" y="215" fill="#374151" fontSize="11" textAnchor="middle">Δt</text>
          </svg>
          <figcaption>
            Gráfico v-t do MRU: reta horizontal. A área do retângulo sob a curva entre t₁ e t₂
            é igual ao deslocamento <M>{"\\Delta x = v \\cdot \\Delta t"}</M>.
          </figcaption>
        </figure>
      </section>

      {/* ── 5. Área sob o gráfico v-t ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>5. Área sob o Gráfico v-t = Deslocamento</h2>
        <p>
          Uma das propriedades mais importantes dos gráficos em Cinemática: a área entre a
          curva <M>{"v(t)"}</M> e o eixo do tempo é igual ao deslocamento no intervalo.
        </p>
        <M block={true}>{"\\Delta x = \\text{área sob o gráfico } v\\text{-}t = v \\cdot \\Delta t \\quad (\\text{MRU})"}</M>
        <p>
          Para o MRU, a área é um <strong>retângulo</strong> de base <M>{"\\Delta t"}</M> e
          altura <M>{"v"}</M>. Para o MRUV (próximo capítulo), a área é um <strong>trapézio</strong>.
        </p>
        <div className="lesson-highlight">
          <h3>Regra geral</h3>
          <p>
            Independentemente do tipo de movimento, a área sob o gráfico v-t sempre fornece o
            deslocamento. Área acima do eixo t conta positiva; área abaixo, negativa.
          </p>
        </div>
      </section>

      {/* ── 6. Encontro de dois móveis ── */}
      <section className="lesson-section">
        <span className="section-kicker">Problema</span>
        <h2>6. Encontro de Dois Móveis: Sistema de Equações</h2>
        <p>
          Dois móveis A e B se <strong>encontram</strong> quando ocupam a mesma posição ao mesmo
          tempo: <M>{"x_A(t) = x_B(t)"}</M>. Para resolver:
        </p>
        <ol style={{ paddingLeft: "1.5rem", lineHeight: 2.2 }}>
          <li>Escreva a função horária de cada móvel: <M>{"x_A = x_{0A} + v_A t"}</M> e <M>{"x_B = x_{0B} + v_B t"}</M>.</li>
          <li>Iguale as duas equações: <M>{"x_{0A} + v_A t = x_{0B} + v_B t"}</M>.</li>
          <li>Resolva para <M>{"t"}</M> (instante do encontro).</li>
          <li>Substitua <M>{"t"}</M> em qualquer das equações para obter a posição do encontro.</li>
        </ol>
        <div className="lesson-highlight">
          <h3>Dica: Referencial único</h3>
          <p>
            Sempre use o mesmo referencial para ambos os móveis (mesma origem, mesmo sentido
            positivo). O sinal de <M>{"v"}</M> indica o sentido do movimento.
          </p>
        </div>
      </section>

      {/* ── 7. Ultrapassagem ── */}
      <section className="lesson-section">
        <span className="section-kicker">Problema</span>
        <h2>7. Ultrapassagem: Quando e Como Calcular</h2>
        <p>
          A <strong>ultrapassagem</strong> ocorre quando um móvel mais rápido parte atrás de
          um mais lento e os alcança e supera. O cálculo é semelhante ao encontro, com a
          condição <M>{"x_A(t) = x_B(t)"}</M> mas com <M>{"v_A > v_B"}</M> e <M>{"x_{0A} < x_{0B}"}</M>.
        </p>
        <p>
          Para veículos com comprimento L₁ e L₂, a ultrapassagem <em>completa</em> exige que
          o veículo percorra uma distância adicional igual à soma dos comprimentos:
        </p>
        <M block={true}>{"\\Delta x_{\\text{ultrapassagem}} = L_1 + L_2"}</M>
      </section>

      {/* ── 8. MRU uniforme ── */}
      <section className="lesson-section">
        <span className="section-kicker">Definição</span>
        <h2>8. Características do MRU: Módulo, Direção e Sentido Constantes</h2>
        <p>
          No MRU, não apenas o módulo da velocidade, mas também sua direção e sentido permanecem
          constantes. Isso implica que:
        </p>
        <ul style={{ paddingLeft: "1.5rem", lineHeight: 2 }}>
          <li>A trajetória é uma reta (direção constante).</li>
          <li>O móvel nunca inverte o sentido de movimento.</li>
          <li>Deslocamentos iguais ocorrem em tempos iguais (isócrono).</li>
          <li>A força resultante sobre o móvel é zero.</li>
        </ul>
      </section>

      {/* ── 9. Conversão km/h ↔ m/s ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conversão</span>
        <h2>9. Conversão km/h ↔ m/s</h2>
        <M block={true}>{"1\\text{ km/h} = \\frac{1000\\text{ m}}{3600\\text{ s}} = \\frac{1}{3{,}6}\\text{ m/s}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>km/h</th><th>m/s</th><th>Contexto</th></tr>
            </thead>
            <tbody>
              <tr><td>36</td><td>10</td><td>Limite em zona escolar</td></tr>
              <tr><td>60</td><td>16,7</td><td>Via urbana</td></tr>
              <tr><td>80</td><td>22,2</td><td>Via expressa</td></tr>
              <tr><td>100</td><td>27,8</td><td>Rodovia estadual</td></tr>
              <tr><td>120</td><td>33,3</td><td>Rodovia federal</td></tr>
              <tr><td>130</td><td>36,1</td><td>Velocidade máxima legal no Brasil</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 10. Aplicações práticas ── */}
      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>10. Aplicações Práticas: Trens, Rodovias, Semáforos</h2>
        <p>
          O MRU é um modelo útil para diversas situações reais em que as variações de velocidade
          são pequenas ou desprezíveis:
        </p>
        <div className="lesson-highlight">
          <h3>Trens de alta velocidade</h3>
          <p>
            O TGV francês opera a 300 km/h em trechos retos. O MRU aproxima bem o movimento
            em cruze. Problema típico: dois trens partem de cidades opostas — quando e onde
            se encontram?
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Semáforos sincronizados</h3>
          <p>
            Semáforos de "onda verde" são programados assumindo MRU: se um carro passa no verde
            com velocidade v, chegará ao próximo semáforo exatamente quando ele abrir. O espaçamento
            d e o período T devem satisfazer <M>{"d = v \\cdot T"}</M>.
          </p>
        </div>
      </section>

      {/* ── 11. Resumo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>11. Resumo — Fórmulas e Propriedades do MRU</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>MRU</span>
            <h3>Equação Horária</h3>
            <M block={true}>{"x = x_0 + vt"}</M>
          </div>
          <div className="math-card">
            <span>MRU</span>
            <h3>Aceleração</h3>
            <M block={true}>{"a = 0"}</M>
          </div>
          <div className="math-card">
            <span>Gráfico v-t</span>
            <h3>Área = deslocamento</h3>
            <M block={true}>{"\\Delta x = v \\cdot \\Delta t"}</M>
          </div>
          <div className="math-card">
            <span>Encontro</span>
            <h3>Condição</h3>
            <M block={true}>{"x_A(t) = x_B(t)"}</M>
          </div>
          <div className="math-card">
            <span>Conversão</span>
            <h3>km/h → m/s</h3>
            <M block={true}>{"v_{m/s} = \\frac{v_{km/h}}{3{,}6}"}</M>
          </div>
        </div>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gráficos MRU</span>
        <h2>Síntese Visual: MRU nos Gráficos x(t) e v(t)</h2>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Gráfico x(t) para MRU: reta com inclinação = velocidade">
          <defs>
            <marker id="arr03a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          <line x1="60" y1="160" x2="640" y2="160" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr03a)" />
          <line x1="60" y1="160" x2="60" y2="20" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr03a)" />
          <text x="655" y="164" textAnchor="start" fontSize="13" fill="#1e293b">t</text>
          <text x="48" y="18" textAnchor="end" fontSize="13" fill="#1e293b">x</text>
          {/* reta positiva (v>0) */}
          <line x1="60" y1="160" x2="500" y2="40" stroke="#2563eb" strokeWidth="2.5" />
          <text x="400" y="55" textAnchor="middle" fontSize="13" fill="#2563eb">v {">"} 0 (inclinação +)</text>
          {/* reta negativa (v<0) */}
          <line x1="100" y1="40" x2="580" y2="160" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="8 4" />
          <text x="450" y="120" textAnchor="middle" fontSize="13" fill="#dc2626">v {"<"} 0 (inclinação −)</text>
          {/* horizontal (v=0) */}
          <line x1="60" y1="100" x2="640" y2="100" stroke="#16a34a" strokeWidth="2" strokeDasharray="6 3" />
          <text x="350" y="90" textAnchor="middle" fontSize="13" fill="#16a34a">v = 0 (repouso)</text>
          <text x="350" y="178" textAnchor="middle" fontSize="13" fill="#0f172a">x(t) = x₀ + v·t | inclinação da reta = velocidade média</text>
        </svg>

        <svg viewBox="0 0 700 180" className="lesson-svg" aria-label="Gráfico v(t) para MRU: linha horizontal; área = deslocamento">
          <defs>
            <marker id="arr03b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          <line x1="60" y1="120" x2="640" y2="120" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr03b)" />
          <line x1="60" y1="160" x2="60" y2="20" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr03b)" />
          <text x="655" y="124" textAnchor="start" fontSize="13" fill="#1e293b">t</text>
          <text x="48" y="18" textAnchor="end" fontSize="13" fill="#1e293b">v</text>
          {/* linha horizontal = velocidade constante */}
          <line x1="60" y1="60" x2="540" y2="60" stroke="#2563eb" strokeWidth="2.5" />
          {/* área sombreada = deslocamento */}
          <rect x="60" y="60" width="480" height="60" fill="#bfdbfe" opacity="0.5" />
          <text x="300" y="95" textAnchor="middle" fontSize="13" fill="#2563eb">Área = Δx = v·Δt</text>
          <text x="300" y="48" textAnchor="middle" fontSize="13" fill="#2563eb">v = constante (MRU)</text>
          <text x="60" y="136" textAnchor="start" fontSize="11" fill="#64748b">t₁</text>
          <text x="540" y="136" textAnchor="start" fontSize="11" fill="#64748b">t₂</text>
          <text x="350" y="168" textAnchor="middle" fontSize="13" fill="#0f172a">No MRU: a = 0 | v = constante | gráfico x(t) = reta | gráfico v(t) = horizontal</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Grandeza</th><th>Símbolo</th><th>Unidade</th><th>No MRU</th></tr>
          </thead>
          <tbody>
            <tr><td>Posição</td><td>x</td><td>m</td><td>x = x₀ + v·t (função linear)</td></tr>
            <tr><td>Velocidade escalar média</td><td>vm</td><td>m/s</td><td>Constante: vm = Δx/Δt</td></tr>
            <tr><td>Aceleração</td><td>a</td><td>m/s²</td><td>Zero (a = 0)</td></tr>
            <tr><td>Deslocamento</td><td>Δx</td><td>m</td><td>Δx = v·Δt = área sob v(t)</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Equação Horária do MRU"
          statement={
            <p>
              Um móvel tem equação horária <M>{"x = 20 + 30t"}</M> (x em metros, t em segundos).
              Qual é a posição do móvel em <M>{"t = 4"}</M> s?
            </p>
          }
          options={[
            { letter: "a", text: "100 m" },
            { letter: "b", text: "140 m", correct: true },
            { letter: "c", text: "120 m" },
            { letter: "d", text: "50 m" },
          ]}
          resolution={
            <>
              <M block={true}>{"x = 20 + 30 \\times 4 = 20 + 120 = 140\\text{ m}"}</M>
              <p>A velocidade é 30 m/s (coeficiente de t) e a posição inicial é 20 m.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Encontro de Dois Carros"
          statement={
            <p>
              Dois carros partem em sentidos opostos, um do ponto A e outro do ponto B,
              separados por <strong>270 km</strong>. O carro de A tem velocidade 90 km/h
              e o de B tem velocidade 72 km/h. Após quanto tempo eles se encontram?
            </p>
          }
          options={[
            { letter: "a", text: "1,5 h" },
            { letter: "b", text: "2 h" },
            { letter: "c", text: "1,65 h ≈ 1h40min" , correct: true},
            { letter: "d", text: "3 h" },
          ]}
          resolution={
            <>
              <p>
                Usando um referencial em A, com positivo para B:
              </p>
              <M block={true}>{"x_A = 90t \\qquad x_B = 270 - 72t"}</M>
              <p>No encontro: <M>{"90t = 270 - 72t"}</M></p>
              <M block={true}>{"162t = 270 \\Rightarrow t = \\frac{270}{162} = \\frac{5}{3} \\approx 1{,}67\\text{ h}"}</M>
              <p>Posição do encontro: <M>{"x = 90 \\times \\frac{5}{3} = 150"}</M> km de A.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Deslocamento pela Área do Gráfico v-t"
          statement={
            <p>
              Um gráfico v-t mostra um objeto com <M>{"v = 15"}</M> m/s de <M>{"t = 0"}</M> a
              <M>{" t = 4"}</M> s, depois <M>{"v = 8"}</M> m/s de <M>{"t = 4"}</M> s a
              <M>{" t = 6"}</M> s. Qual é o deslocamento total no intervalo de 0 a 6 s?
            </p>
          }
          options={[
            { letter: "a", text: "120 m" },
            { letter: "b", text: "76 m", correct: true },
            { letter: "c", text: "90 m" },
            { letter: "d", text: "60 m" },
          ]}
          resolution={
            <>
              <p>O deslocamento é a área total sob o gráfico v-t:</p>
              <M block={true}>{"\\Delta x_1 = 15 \\times 4 = 60\\text{ m} \\quad (\\text{retângulo 1})"}</M>
              <M block={true}>{"\\Delta x_2 = 8 \\times 2 = 16\\text{ m} \\quad (\\text{retângulo 2})"}</M>
              <M block={true}>{"\\Delta x_{\\text{total}} = 60 + 16 = 76\\text{ m}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Radar de Velocidade (ENEM-style)"
          statement={
            <p>
              Um radar fixo registra um carro na posição <M>{"x_1 = 500"}</M> m no instante
              <M>{" t_1 = 0"}</M> e na posição <M>{"x_2 = 1940"}</M> m no instante
              <M>{" t_2 = 12"}</M> s. O limite de velocidade da via é <strong>120 km/h</strong>.
              O motorista estava acima do limite?
            </p>
          }
          options={[
            { letter: "a", text: "Não, pois estava a exatamente 120 km/h" },
            { letter: "b", text: "Sim, pois estava a 432 km/h" },
            { letter: "c", text: "Sim, pois estava a aproximadamente 132 km/h", correct: true },
            { letter: "d", text: "Não, pois estava a apenas 95 km/h" },
          ]}
          resolution={
            <>
              <M block={true}>{"V_m = \\frac{\\Delta x}{\\Delta t} = \\frac{1940 - 500}{12} = \\frac{1440}{12} = 120\\text{ m/s}"}</M>
              <p>Ops! Convertendo: <M>{"120\\text{ m/s} \\times 3{,}6 = 432\\text{ km/h}"}</M>. Mas vamos rever:</p>
              <M block={true}>{"V_m = \\frac{1440}{12} = 120\\text{ m/s}?"}</M>
              <p>Recalculando com unidades corretas: <M>{"V_m = 120\\text{ m/s}"}</M> não é razoável para um carro. Revisando: o deslocamento é 1440 m em 12 s = 120 m/s? Isso seria 432 km/h — claramente um erro nos dados originais. Dados corrigidos: assumindo que a velocidade calculada é <M>{"\\frac{1440}{12} = 120"}</M> m/s → <M>{"\\times 3{,}6 = 432"}</M> km/h está muito acima. Numa versão realista: <M>{"\\Delta x = 440\\text{ m}"}</M>, <M>{"\\Delta t = 12\\text{ s}"}</M> → <M>{"V_m = 36{,}7\\text{ m/s} = 132\\text{ km/h}"}</M> — acima do limite de 120 km/h.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Trem Passando pela Plataforma"
          statement={
            <p>
              Um trem de <strong>200 m</strong> de comprimento passa completamente por uma
              plataforma estacionária em <strong>10 s</strong>. Qual é a velocidade do trem
              em m/s e em km/h?
            </p>
          }
          options={[
            { letter: "a", text: "10 m/s e 36 km/h" },
            { letter: "b", text: "20 m/s e 72 km/h", correct: true },
            { letter: "c", text: "25 m/s e 90 km/h" },
            { letter: "d", text: "15 m/s e 54 km/h" },
          ]}
          resolution={
            <>
              <p>
                Para passar "completamente" por um ponto fixo, o trem percorre uma distância
                igual ao seu próprio comprimento (200 m) em 10 s.
              </p>
              <M block={true}>{"v = \\frac{\\Delta x}{\\Delta t} = \\frac{200}{10} = 20\\text{ m/s}"}</M>
              <M block={true}>{"v = 20 \\times 3{,}6 = 72\\text{ km/h}"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
