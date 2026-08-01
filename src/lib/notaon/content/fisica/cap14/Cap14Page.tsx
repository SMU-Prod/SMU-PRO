"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap14Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 14</span>
          <h1>Energia Mecânica: Cinética, Potencial e Elástica</h1>
          <p>
            A energia mecânica é uma das grandezas mais poderosas da física — ela permite resolver problemas sem precisar conhecer todos os detalhes do movimento.
            Neste capítulo você aprenderá as três formas de energia mecânica, o Teorema Trabalho-Energia, a conservação da energia e as diferenças entre colisões elásticas e inelásticas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Energia Cinética</span>
        <h2>1. Energia Cinética: E_c = ½mv²</h2>
        <p>
          A <strong>energia cinética</strong> é a energia associada ao movimento de um corpo. Depende da massa e do quadrado da velocidade:
        </p>
        <M block={true}>{"E_c = \\frac{1}{2}mv^2"}</M>
        <p>
          A unidade é o Joule (J). A dependência em <M>{"v^2"}</M> tem consequências importantes: dobrar a velocidade quadruplica a energia cinética. É por isso que velocidades altas no trânsito são tão perigosas — a energia a ser absorvida na colisão cresce muito rápido com a velocidade.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplos Numéricos</h3>
          <p>
            Carro de 1000 kg a 60 km/h (≈16,7 m/s): <M>{"E_c = \\frac{1}{2}\\times 1000 \\times 16{,}7^2 \\approx 139{.}000 \\text{ J}"}</M>. O mesmo carro a 120 km/h: <M>{"E_c \\approx 556{.}000 \\text{ J}"}</M> — 4 vezes mais. Uma bala de 10 g a 900 m/s: <M>{"E_c = \\frac{1}{2}\\times 0{,}01 \\times 810{.}000 = 4050 \\text{ J}"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Teorema Trabalho-Energia</span>
        <h2>2. Teorema Trabalho-Energia: τ_resultante = ΔE_c</h2>
        <p>
          O <strong>Teorema Trabalho-Energia</strong> estabelece que o trabalho da força resultante sobre um corpo é igual à variação de sua energia cinética:
        </p>
        <M block={true}>{"\\tau_{\\text{resultante}} = \\Delta E_c = E_{c,f} - E_{c,i} = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2"}</M>
        <p>
          Este teorema é extremamente poderoso: permite calcular velocidades finais sem precisar conhecer a aceleração ou o tempo de duração do movimento. Basta saber o trabalho total das forças e a velocidade inicial.
        </p>
        <p>
          Consequências: se τ_total {">"} 0, o corpo acelera (Ec aumenta). Se τ_total {"<"} 0, o corpo desacelera (Ec diminui). Se τ_total = 0, a velocidade é constante.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Energia Potencial Gravitacional</span>
        <h2>3. Energia Potencial Gravitacional: E_p = mgh</h2>
        <p>
          A <strong>energia potencial gravitacional</strong> é a energia armazenada devido à posição do corpo em um campo gravitacional. Ela depende da altura <M>{"h"}</M> em relação a uma referência escolhida arbitrariamente:
        </p>
        <M block={true}>{"E_p = m \\cdot g \\cdot h"}</M>
        <p>
          A referência (h = 0) pode ser qualquer nível — o chão, a base de uma queda, o nível do mar. O que importa é a <em>variação</em> de energia potencial: <M>{"\\Delta E_p = mg \\Delta h"}</M>. Quando o corpo sobe, Ep aumenta (energia é armazenada). Quando desce, Ep diminui (energia é liberada).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Energia Potencial Elástica</span>
        <h2>4. Energia Potencial Elástica: E_e = ½kx²</h2>
        <p>
          A <strong>energia potencial elástica</strong> é a energia armazenada em uma mola (ou qualquer material elástico) deformada por uma quantidade <M>{"x"}</M>:
        </p>
        <M block={true}>{"E_e = \\frac{1}{2}k x^2"}</M>
        <p>
          onde <M>{"k"}</M> é a constante elástica (N/m) e <M>{"x"}</M> é a deformação (m). Como <M>{"x^2"}</M> é sempre positivo, a energia elástica é sempre ≥ 0. O trabalho da força elástica é igual ao negativo da variação da energia potencial elástica: <M>{"\\tau_{\\text{mola}} = -\\Delta E_e = \\frac{1}{2}kx_i^2 - \\frac{1}{2}kx_f^2"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Energia Mecânica Total</span>
        <h2>5. Energia Mecânica Total: E_m = E_c + E_p + E_e</h2>
        <p>
          A <strong>energia mecânica total</strong> de um sistema é a soma das energias cinética, potencial gravitacional e potencial elástica:
        </p>
        <M block={true}>{"E_m = E_c + E_p + E_e = \\frac{1}{2}mv^2 + mgh + \\frac{1}{2}kx^2"}</M>
        <p>
          Em sistemas que só possuem forças conservativas (gravidade e força elástica), a energia mecânica total se conserva. Em sistemas com forças dissipativas (atrito), parte da energia mecânica é convertida em calor.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conservação</span>
        <h2>6. Conservação da Energia Mecânica: ΔE_m = 0</h2>
        <p>
          Em um sistema isolado com apenas forças conservativas, a energia mecânica total é constante em todos os instantes:
        </p>
        <M block={true}>{"E_{m,i} = E_{m,f} \\Rightarrow \\frac{1}{2}mv_i^2 + mgh_i = \\frac{1}{2}mv_f^2 + mgh_f"}</M>
        <p>
          Esse é o <strong>Princípio da Conservação da Energia Mecânica</strong>. Ele permite calcular velocidades em qualquer ponto de uma trajetória conhecendo apenas as alturas, sem precisar dos detalhes do caminho percorrido.
        </p>
        <div className="lesson-highlight">
          <h3>Quando a Conservação Vale?</h3>
          <p>
            A energia mecânica se conserva quando não há forças dissipativas (atrito, resistência do ar). Se houver atrito: <M>{"E_{m,f} = E_{m,i} + \\tau_{\\text{atrito}}"}</M> onde τ_atrito é negativo (energia é perdida).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Forças Conservativas</span>
        <h2>7. Forças Conservativas vs Dissipativas</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Exemplos</th><th>Energia potencial</th><th>Caminho importa?</th></tr>
            </thead>
            <tbody>
              <tr><td>Conservativa</td><td>Gravidade, força elástica, força elétrica</td><td>Sim (armazena energia)</td><td>Não (depende só de pontos inicial e final)</td></tr>
              <tr><td>Dissipativa</td><td>Atrito cinético, resistência do ar, viscosidade</td><td>Não</td><td>Sim (mais caminho = mais energia dissipada)</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Forças conservativas permitem definir energia potencial. Forças dissipativas convertem energia mecânica em energia interna (calor, som, deformação plástica) — processos irreversíveis que aumentam a entropia do sistema.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Montanha-Russa</span>
        <h2>8. Energia em uma Montanha-Russa</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 440 220" width="440" height="220" aria-label="Montanha-russa mostrando transformação de energia em diferentes alturas">
            {/* Track */}
            <path d="M 30,180 Q 100,50 160,160 Q 220,180 280,60 Q 330,160 380,170 L 430,170" fill="none" stroke="#374151" strokeWidth="3" />

            {/* Ground line */}
            <line x1="20" y1="185" x2="440" y2="185" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="6 4" />

            {/* Point A - top left (h=130) */}
            <circle cx="100" cy="53" r="8" fill="#dc2626" />
            <text x="50" y="43" fontSize="11" fill="#dc2626" fontWeight="bold">A (h=h₁)</text>
            <text x="45" y="25" fontSize="10" fill="#2563eb">Ec≈0</text>
            <text x="45" y="38" fontSize="10" fill="#16a34a">Ep=max</text>

            {/* Point B - bottom (h=0) */}
            <circle cx="190" cy="168" r="8" fill="#7c3aed" />
            <text x="165" y="195" fontSize="11" fill="#7c3aed" fontWeight="bold">B (h=0)</text>
            <text x="165" y="208" fontSize="10" fill="#2563eb">Ec=max</text>
            <text x="165" y="218" fontSize="10" fill="#16a34a">Ep=0</text>

            {/* Point C - top right (h=h2 < h1) */}
            <circle cx="280" cy="63" r="8" fill="#d97706" />
            <text x="285" y="50" fontSize="11" fill="#d97706" fontWeight="bold">C (h=h₂)</text>
            <text x="285" y="38" fontSize="10" fill="#2563eb">Ec=(h₁-h₂)mg/m</text>
            <text x="285" y="25" fontSize="10" fill="#16a34a">Ep=mgh₂</text>

            {/* Energy bar charts at each point */}
            {/* A: full Ep, no Ec */}
            <rect x="30" y="130" width="15" height="50" fill="#16a34a" />
            <rect x="45" y="178" width="15" height="2" fill="#2563eb" />
            <text x="30" y="128" fontSize="9" fill="#374151">Ep</text>

            {/* B: full Ec, no Ep */}
            <rect x="155" y="130" width="15" height="2" fill="#16a34a" />
            <rect x="170" y="130" width="15" height="50" fill="#2563eb" />
            <text x="170" y="128" fontSize="9" fill="#374151">Ec</text>

            {/* C: partial Ep, partial Ec */}
            <rect x="255" y="148" width="15" height="32" fill="#16a34a" />
            <rect x="270" y="130" width="15" height="18" fill="#2563eb" />
            <text x="255" y="145" fontSize="9" fill="#374151">Ep+Ec</text>

            {/* Em total annotation */}
            <text x="30" y="212" fontSize="11" fill="#374151">Em = Ec + Ep = constante (sem atrito)</text>
          </svg>
          <figcaption>Montanha-russa sem atrito: no ponto A (topo), Ep é máxima e Ec ≈ 0. No ponto B (base), toda energia potencial foi convertida em cinética. No ponto C (segundo topo, h₂ {"<"} h₁), há energia cinética residual. A soma Ec + Ep é sempre constante.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Oscilação da Mola</span>
        <h2>9. Gráfico E_c e E_p vs Posição na Oscilação de Mola</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 210" width="420" height="210" aria-label="Gráfico de Ec e Ep em função da posição na oscilação de mola">
            {/* Axes */}
            <line x1="50" y1="20" x2="50" y2="175" stroke="#374151" strokeWidth="2" />
            <line x1="50" y1="175" x2="390" y2="175" stroke="#374151" strokeWidth="2" />
            <polygon points="50,15 45,28 55,28" fill="#374151" />
            <polygon points="395,175 382,170 382,180" fill="#374151" />
            <text x="15" y="18" fontSize="11" fill="#374151">E (J)</text>
            <text x="392" y="180" fontSize="11" fill="#374151">x</text>

            {/* Em total (horizontal line) */}
            <line x1="50" y1="55" x2="390" y2="55" stroke="#374151" strokeWidth="2" strokeDasharray="7 4" />
            <text x="355" y="50" fontSize="11" fill="#374151" fontWeight="bold">E_m</text>

            {/* Ep = ½kx² — parabola, minimum at center */}
            <path d="M 50,55 Q 130,175 210,55 Q 290,175 370,55" fill="none" stroke="#16a34a" strokeWidth="2.5" />
            <text x="100" y="145" fontSize="12" fill="#16a34a" fontWeight="bold">Ep = ½kx²</text>

            {/* Ec = Em - Ep — inverted parabola, max at center */}
            <path d="M 50,55 Q 130,175 210,55 Q 290,175 370,55" fill="none" stroke="transparent" strokeWidth="1" />
            {/* Ec curve (complement) */}
            <path d="M 50,55 Q 130,-65 210,55 Q 290,-65 370,55" fill="none" stroke="#2563eb" strokeWidth="2.5" />
            {/* Clip at Em line — approximate with simpler visual */}
            <path d="M 50,55 C 90,90 130,140 210,55 C 290,140 330,90 370,55" fill="none" stroke="#2563eb" strokeWidth="2.5" />
            <text x="185" y="42" fontSize="12" fill="#2563eb" fontWeight="bold">Ec</text>

            {/* x-axis labels */}
            <text x="42" y="190" fontSize="11" fill="#374151">-A</text>
            <text x="202" y="190" fontSize="11" fill="#374151">0</text>
            <text x="362" y="190" fontSize="11" fill="#374151">+A</text>

            {/* Annotations */}
            <text x="55" y="200" fontSize="10" fill="#374151">Nas extremidades: Ec=0, Ep=max. No centro: Ec=max, Ep=0.</text>
          </svg>
          <figcaption>Em uma mola oscilante, Ep e Ec trocam de papel continuamente: nas extremidades (±A), toda energia é potencial. No ponto de equilíbrio (x=0), toda energia é cinética. A energia mecânica total E_m permanece constante.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Colisões</span>
        <h2>10. Colisão Elástica vs Inelástica: Conservação de Energia</h2>
        <p>
          O momento linear é sempre conservado em colisões (ausência de forças externas). Mas a energia cinética pode ou não ser conservada:
        </p>
        <p>
          <strong>Colisão perfeitamente elástica:</strong> tanto momento quanto energia cinética se conservam. Ocorre em escala atômica/molecular (colisões entre bolas de bilhar se aproximam disso). Coeficiente de restituição e = 1.
        </p>
        <M block={true}>{"\\frac{1}{2}m_1 v_{1i}^2 + \\frac{1}{2}m_2 v_{2i}^2 = \\frac{1}{2}m_1 v_{1f}^2 + \\frac{1}{2}m_2 v_{2f}^2"}</M>
        <p>
          <strong>Colisão perfeitamente inelástica:</strong> os corpos ficam juntos após a colisão (máxima perda de Ec). Apenas o momento se conserva. Coeficiente de restituição e = 0.
        </p>
        <M block={true}>{"m_1 v_1 + m_2 v_2 = (m_1 + m_2) v_f \\quad \\text{(inelástica perfeita)}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Formas de Energia</span>
        <h2>11. Tabela: Formas de Energia e Conversões</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Forma de Energia</th><th>Fórmula</th><th>Exemplo de conversão</th></tr>
            </thead>
            <tbody>
              <tr><td>Cinética (E_c)</td><td>½mv²</td><td>Objeto em queda → calor ao colidir</td></tr>
              <tr><td>Potencial gravitacional (E_p)</td><td>mgh</td><td>Água em reservatório → elétrica (usina)</td></tr>
              <tr><td>Potencial elástica (E_e)</td><td>½kx²</td><td>Mola comprimida → cinética (catapulta)</td></tr>
              <tr><td>Térmica (calor Q)</td><td>mcΔT</td><td>Atrito → aumento de temperatura</td></tr>
              <tr><td>Elétrica</td><td>P·t</td><td>Motor elétrico → cinética</td></tr>
              <tr><td>Química</td><td>ΔH</td><td>Combustível → cinética + calor (motor)</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Conservação de Energia (1ª Lei da Termodinâmica)</h3>
          <p>
            Energia não é criada nem destruída — apenas transformada de uma forma em outra. A energia mecânica pode ser dissipada como calor (atrito), mas a energia total do universo permanece constante.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo: Energias Mecânicas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>E_c</span>
            <h3>Energia Cinética</h3>
            <M block={true}>{"E_c = \\frac{1}{2}mv^2"}</M>
          </div>
          <div className="math-card">
            <span>E_p</span>
            <h3>Energia Potencial Grav.</h3>
            <M block={true}>{"E_p = mgh"}</M>
          </div>
          <div className="math-card">
            <span>E_e</span>
            <h3>Energia Elástica</h3>
            <M block={true}>{"E_e = \\frac{1}{2}kx^2"}</M>
          </div>
          <div className="math-card">
            <span>Conservação</span>
            <h3>Energia Mecânica</h3>
            <M block={true}>{"E_{m,i} = E_{m,f}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Energia Cinética de um Objeto"
          statement={<p>Um objeto de 2 kg se move com velocidade de 6 m/s. Qual é sua energia cinética?</p>}
          options={[
            { letter: "a", text: "6 J" },
            { letter: "b", text: "12 J" },
            { letter: "c", text: "36 J", correct: true },
            { letter: "d", text: "72 J" },
          ]}
          resolution={
            <>
              <M block={true}>{"E_c = \\frac{1}{2}mv^2 = \\frac{1}{2} \\times 2 \\times 6^2 = 1 \\times 36 = 36 \\text{ J}"}</M>
              <p>Alternativa c.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Queda Livre: Velocidade ao Chegar ao Solo"
          statement={<p>Uma bola de 5 kg é lançada do repouso de uma altura de 10 m. Usando conservação de energia e g = 10 m/s², qual é a velocidade da bola imediatamente antes de tocar o solo?</p>}
          options={[
            { letter: "a", text: "10 m/s" },
            { letter: "b", text: "14,1 m/s", correct: true },
            { letter: "c", text: "20 m/s" },
            { letter: "d", text: "100 m/s" },
          ]}
          resolution={
            <>
              <p>Pela conservação de energia (h_f = 0, v_i = 0):</p>
              <M block={true}>{"mgh_i = \\frac{1}{2}mv_f^2 \\Rightarrow v_f = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 10} = \\sqrt{200} \\approx 14{,}1 \\text{ m/s}"}</M>
              <p>A massa cancela — a velocidade de queda não depende da massa. Alternativa b.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Mola Lança Projétil"
          statement={<p>Uma mola com k = 800 N/m é comprimida 20 cm (0,20 m) e lança horizontalmente uma bolinha de 0,5 kg. Usando conservação de energia, qual é a velocidade de lançamento da bolinha?</p>}
          options={[
            { letter: "a", text: "4 m/s" },
            { letter: "b", text: "8 m/s", correct: true },
            { letter: "c", text: "16 m/s" },
            { letter: "d", text: "32 m/s" },
          ]}
          resolution={
            <>
              <p>Toda energia elástica converte-se em cinética:</p>
              <M block={true}>{"\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2 \\Rightarrow v = x\\sqrt{\\frac{k}{m}}"}</M>
              <M block={true}>{"v = 0{,}20 \\times \\sqrt{\\frac{800}{0{,}5}} = 0{,}20 \\times \\sqrt{1600} = 0{,}20 \\times 40 = 8 \\text{ m/s}"}</M>
              <p>Alternativa b.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Montanha-Russa: Conservação de Energia"
          statement={<p>Um carrinho parte do repouso em um ponto com h = 40 m de altura (em relação à base). Desprezando o atrito e a resistência do ar, qual é a velocidade do carrinho ao chegar à base? Use g = 10 m/s².</p>}
          options={[
            { letter: "a", text: "10 m/s" },
            { letter: "b", text: "20 m/s" },
            { letter: "c", text: "28,3 m/s", correct: true },
            { letter: "d", text: "40 m/s" },
          ]}
          resolution={
            <>
              <M block={true}>{"E_{m,i} = E_{m,f} \\Rightarrow mgh = \\frac{1}{2}mv^2"}</M>
              <M block={true}>{"v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 40} = \\sqrt{800} \\approx 28{,}3 \\text{ m/s} \\approx 102 \\text{ km/h}"}</M>
              <p>A velocidade na base independe da massa do carrinho. Alternativa c. Na prática, o atrito e a resistência do ar reduzem esse valor.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Usina Hidrelétrica: Potência Disponível"
          statement={<p>Na usina de Itaipu, a água cai de uma altura efetiva h = 80 m com vazão (fluxo de massa) de 1000 kg/s. Calcule a potência mecânica disponível na turbina (g = 10 m/s²) e compare com o consumo médio de uma residência brasileira (300 kWh/mês).</p>}
          options={[
            { letter: "a", text: "P = 80 kW; atende ≈ 178 residências/dia" },
            { letter: "b", text: "P = 800 kW; atende ≈ 1.920 residências/dia", correct: true },
            { letter: "c", text: "P = 8 MW; atende ≈ 19.200 residências/dia" },
            { letter: "d", text: "P = 80 MW; atende ≈ 192.000 residências/dia" },
          ]}
          resolution={
            <>
              <p><strong>Potência disponível por conservação de energia:</strong></p>
              <M block={true}>{"P = \\dot{m} \\cdot g \\cdot h = 1000 \\times 10 \\times 80 = 800{.}000 \\text{ W} = 800 \\text{ kW}"}</M>
              <p><strong>Consumo de uma residência:</strong> 300 kWh/mês = 300/720 kW ≈ 0,417 kW por residência.</p>
              <M block={true}>{"N_{\\text{residências}} = \\frac{800}{0{,}417} \\approx 1920 \\text{ residências simultaneamente}"}</M>
              <p>Na prática, Itaipu tem uma queda efetiva maior e vazão muito maior ({">"}  10.000 m³/s), gerando ~14 GW de potência — suficiente para ~30 milhões de residências. Alternativa b com os dados fornecidos.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
