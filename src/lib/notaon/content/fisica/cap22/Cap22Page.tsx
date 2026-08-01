"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap22Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 22</span>
          <h1>Termometria: Escalas Térmicas e Dilatação</h1>
          <p>
            Compreenda temperatura, equilíbrio térmico e a lei zero da
            termodinâmica. Domine as conversões entre as escalas Celsius,
            Fahrenheit e Kelvin, e aprenda a calcular dilatações lineares,
            superficiais e volumétricas em sólidos e líquidos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Temperatura e Equilíbrio Térmico</h2>
        <p>
          Temperatura é a grandeza física que quantifica o grau de agitação
          cinética das partículas de um corpo. Quanto maior a agitação média
          das moléculas, maior a temperatura. Quando dois corpos com
          temperaturas diferentes são colocados em contato térmico, ocorre
          transferência de energia (calor) do mais quente para o mais frio até
          que ambos atinjam a mesma temperatura — situação chamada de
          equilíbrio térmico.
        </p>
        <div className="lesson-highlight">
          <h3>Lei Zero da Termodinâmica</h3>
          <p>
            Se dois corpos A e B estão cada um em equilíbrio térmico com um
            terceiro corpo C (o termômetro), então A e B estão em equilíbrio
            térmico entre si. Essa lei é o fundamento lógico da medição de
            temperatura.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Escalas Térmicas</span>
        <h2>2. Escala Celsius (°C)</h2>
        <p>
          Proposta por Anders Celsius em 1742, essa escala define dois pontos
          fixos reprodutíveis ao nível do mar: o ponto de fusão do gelo puro
          (0&nbsp;°C) e o ponto de ebulição da água pura (100&nbsp;°C). O
          intervalo entre eles é dividido em 100 partes iguais. É a escala
          adotada no Brasil e na maioria dos países para usos cotidianos e
          científicos elementares.
        </p>
        <div className="lesson-highlight">
          <h3>Pontos fixos da escala Celsius</h3>
          <p>Fusão do gelo puro: <strong>0&nbsp;°C</strong> — Ebulição da água pura: <strong>100&nbsp;°C</strong></p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Escalas Térmicas</span>
        <h2>3. Escala Fahrenheit (°F)</h2>
        <p>
          Criada por Daniel Fahrenheit em 1724 e ainda utilizada nos EUA, a
          escala Fahrenheit define 32&nbsp;°F para a fusão do gelo e
          212&nbsp;°F para a ebulição da água, gerando um intervalo de
          180&nbsp;graus. A conversão entre Celsius e Fahrenheit é dada por:
        </p>
        <M block={true}>{"F = \\frac{9}{5}C + 32"}</M>
        <p>
          Ou, de forma equivalente, para converter Fahrenheit em Celsius:
        </p>
        <M block={true}>{"C = \\frac{5}{9}(F - 32)"}</M>
        <p>
          A fórmula geral que relaciona as três escalas simultaneamente é:
        </p>
        <M block={true}>{"\\frac{C}{5} = \\frac{F - 32}{9} = \\frac{K - 273}{5}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Escalas Térmicas</span>
        <h2>4. Escala Kelvin (K): Temperatura Absoluta</h2>
        <p>
          Proposta por William Thomson (Lord Kelvin) em 1848, a escala Kelvin
          é a escala de temperatura do Sistema Internacional de Unidades (SI).
          Ela se baseia no zero absoluto — a menor temperatura termodinâmica
          possível, correspondente à ausência total de agitação cinética
          clássica. O zero absoluto equivale a −273&nbsp;°C e não existem
          temperaturas negativas nessa escala.
        </p>
        <M block={true}>{"K = C + 273"}</M>
        <div className="lesson-highlight">
          <h3>Zero absoluto</h3>
          <p>
            0&nbsp;K = −273&nbsp;°C. Nunca alcançado experimentalmente, apenas
            aproximado. A variação de temperatura é idêntica nas duas escalas:
            <strong> ΔT(K) = ΔT(°C)</strong>. Use sempre Kelvin em fórmulas
            de física (gases, radiação, termodinâmica).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparativo Visual</span>
        <h2>5. Comparação das Três Escalas</h2>
        <p>
          O diagrama abaixo mostra os três termômetros em paralelo, com os
          principais valores de referência alinhados horizontalmente.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 260" width="420" height="260" aria-label="Comparação das escalas Celsius, Fahrenheit e Kelvin">
            {/* Celsius */}
            <rect x="30" y="20" width="40" height="200" rx="6" fill="#e8f4fd" stroke="#2196f3" strokeWidth="2"/>
            <rect x="40" y="60" width="20" height="140" rx="3" fill="#90caf9"/>
            <line x1="70" y1="60" x2="85" y2="60" stroke="#e53935" strokeWidth="2"/>
            <line x1="70" y1="200" x2="85" y2="200" stroke="#1565c0" strokeWidth="2"/>
            <text x="50" y="15" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1565c0">°C</text>
            <text x="90" y="64" fontSize="11" fill="#e53935">100°C</text>
            <text x="90" y="204" fontSize="11" fill="#1565c0">0°C</text>
            <text x="90" y="240" fontSize="10" fill="#555">−273°C</text>
            <line x1="70" y1="228" x2="85" y2="228" stroke="#333" strokeWidth="1" strokeDasharray="3"/>

            {/* Fahrenheit */}
            <rect x="170" y="20" width="40" height="200" rx="6" fill="#fff3e0" stroke="#ff9800" strokeWidth="2"/>
            <rect x="180" y="60" width="20" height="140" rx="3" fill="#ffcc80"/>
            <line x1="210" y1="60" x2="225" y2="60" stroke="#e53935" strokeWidth="2"/>
            <line x1="210" y1="200" x2="225" y2="200" stroke="#1565c0" strokeWidth="2"/>
            <text x="190" y="15" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#e65100">°F</text>
            <text x="228" y="64" fontSize="11" fill="#e53935">212°F</text>
            <text x="228" y="204" fontSize="11" fill="#1565c0">32°F</text>
            <text x="228" y="240" fontSize="10" fill="#555">−459°F</text>
            <line x1="210" y1="228" x2="225" y2="228" stroke="#333" strokeWidth="1" strokeDasharray="3"/>

            {/* Kelvin */}
            <rect x="310" y="20" width="40" height="200" rx="6" fill="#e8f5e9" stroke="#4caf50" strokeWidth="2"/>
            <rect x="320" y="60" width="20" height="140" rx="3" fill="#a5d6a7"/>
            <line x1="350" y1="60" x2="365" y2="60" stroke="#e53935" strokeWidth="2"/>
            <line x1="350" y1="200" x2="365" y2="200" stroke="#1565c0" strokeWidth="2"/>
            <text x="330" y="15" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2e7d32">K</text>
            <text x="368" y="64" fontSize="11" fill="#e53935">373 K</text>
            <text x="368" y="204" fontSize="11" fill="#1565c0">273 K</text>
            <text x="368" y="240" fontSize="10" fill="#555">0 K</text>
            <line x1="350" y1="228" x2="365" y2="228" stroke="#333" strokeWidth="1" strokeDasharray="3"/>

            {/* horizontal guide lines */}
            <line x1="70" y1="60" x2="310" y2="60" stroke="#e53935" strokeWidth="1" strokeDasharray="6,4" opacity="0.5"/>
            <line x1="70" y1="200" x2="310" y2="200" stroke="#1565c0" strokeWidth="1" strokeDasharray="6,4" opacity="0.5"/>
            <line x1="70" y1="228" x2="310" y2="228" stroke="#333" strokeWidth="1" strokeDasharray="6,4" opacity="0.3"/>

            <text x="210" y="255" textAnchor="middle" fontSize="11" fill="#777">Zero absoluto (linha tracejada)</text>
          </svg>
          <figcaption>Termômetros paralelos: ebulição (vermelho) e fusão (azul) da água alinhadas. A linha tracejada inferior representa o zero absoluto.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dilatação Térmica</span>
        <h2>6. Dilatação Linear: ΔL = L₀ · α · ΔT</h2>
        <p>
          Quando um sólido é aquecido, sua estrutura cristalina vibra com mais
          intensidade e as distâncias interatômicas aumentam, resultando em
          expansão. A dilatação linear descreve o aumento de comprimento em
          uma dimensão.
        </p>
        <M block={true}>{"\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T"}</M>
        <p>
          onde <M>{"L_0"}</M> é o comprimento inicial (m), <M>{"\\alpha"}</M>{" "}
          é o coeficiente de dilatação linear (°C⁻¹ ou K⁻¹) e{" "}
          <M>{"\\Delta T = T_f - T_i"}</M> é a variação de temperatura. O
          comprimento final é:
        </p>
        <M block={true}>{"L = L_0\\,(1 + \\alpha\\,\\Delta T)"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo prático</h3>
          <p>
            Uma barra de aço de 10&nbsp;m a 20&nbsp;°C, aquecida a 70&nbsp;°C
            (<M>{"\\alpha = 12\\times10^{-6}\\,{\\rm °C}^{-1}"}</M>):
          </p>
          <M block={true}>{"\\Delta L = 10 \\times 12\\times10^{-6} \\times 50 = 6{,}0\\times10^{-3}\\,{\\rm m} = 6{,}0\\,{\\rm mm}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dilatação Térmica</span>
        <h2>7. Dilatação Superficial: ΔA = A₀ · β · ΔT</h2>
        <p>
          Um sólido que se dilata em todas as direções aumenta também sua área.
          O coeficiente de dilatação superficial <M>{"\\beta"}</M> é
          aproximadamente o dobro do linear:
        </p>
        <M block={true}>{"\\Delta A = A_0 \\cdot \\beta \\cdot \\Delta T \\qquad \\beta = 2\\alpha"}</M>
        <p>
          Isso se deve ao fato de que a área tem duas dimensões lineares que se
          dilatam simultaneamente. Termos de segunda ordem em <M>{"\\alpha"}</M>{" "}
          são desprezíveis para os coeficientes usuais.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dilatação Térmica</span>
        <h2>8. Dilatação Volumétrica: ΔV = V₀ · γ · ΔT</h2>
        <p>
          A dilatação volumétrica descreve o aumento do volume e é a mais
          relevante para líquidos e gases. O coeficiente volumétrico{" "}
          <M>{"\\gamma"}</M> é três vezes o linear:
        </p>
        <M block={true}>{"\\Delta V = V_0 \\cdot \\gamma \\cdot \\Delta T \\qquad \\gamma = 3\\alpha"}</M>
        <div className="lesson-highlight">
          <h3>Relação entre coeficientes</h3>
          <M block={true}>{"\\alpha : \\beta : \\gamma = 1 : 2 : 3"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela de Materiais</span>
        <h2>9. Coeficientes de Dilatação Linear α</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Material</th>
                <th>α (×10⁻⁶ °C⁻¹)</th>
                <th>β (×10⁻⁶ °C⁻¹)</th>
                <th>γ (×10⁻⁶ °C⁻¹)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Alumínio</td><td>24</td><td>48</td><td>72</td></tr>
              <tr><td>Cobre</td><td>17</td><td>34</td><td>51</td></tr>
              <tr><td>Ferro</td><td>12</td><td>24</td><td>36</td></tr>
              <tr><td>Aço (carbono)</td><td>12</td><td>24</td><td>36</td></tr>
              <tr><td>Vidro comum</td><td>9</td><td>18</td><td>27</td></tr>
              <tr><td>Vidro Pyrex</td><td>3</td><td>6</td><td>9</td></tr>
              <tr><td>Latão</td><td>19</td><td>38</td><td>57</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fenômeno Especial</span>
        <h2>10. Anomalia da Água: Máxima Densidade a 4&nbsp;°C</h2>
        <p>
          Diferentemente da maioria das substâncias, a água entre 0&nbsp;°C e
          4&nbsp;°C <strong>contrai</strong> quando aquecida. Isso ocorre porque
          a estrutura hexagonal do gelo, quando derretida, colapsa e empacota
          as moléculas de forma mais eficiente. A partir de 4&nbsp;°C, a água
          volta a se dilatar normalmente com o aumento de temperatura.
        </p>
        <div className="lesson-highlight">
          <h3>Consequências ecológicas</h3>
          <p>
            A 4&nbsp;°C a água tem densidade máxima (≈ 1,000 g/cm³). Por isso
            lagos congelam de cima para baixo: a água mais fria e menos densa
            flutua na superfície, isolando a vida aquática abaixo. O gelo
            flutua sobre a água líquida porque sua densidade (≈ 0,917 g/cm³) é
            menor.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>11. Aplicações Práticas da Dilatação</h2>
        <p>
          Os engenheiros devem prever a dilatação térmica para evitar falhas
          estruturais. As soluções mais comuns incluem:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Aplicação</th><th>Problema</th><th>Solução</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Trilho de trem</td>
                <td>Expansão em dias quentes causa empenamento</td>
                <td>Juntas de dilatação (gap) entre seções</td>
              </tr>
              <tr>
                <td>Ponte metálica</td>
                <td>Variação sazonal de comprimento (metros)</td>
                <td>Apoios deslizantes (rolos) em uma das extremidades</td>
              </tr>
              <tr>
                <td>Termômetro bimetálico</td>
                <td>Dois metais com α diferentes curvam quando aquecidos</td>
                <td>Lâmina bimetálica aciona contato elétrico (termostato)</td>
              </tr>
              <tr>
                <td>Fios elétricos</td>
                <td>Ficam frouxos no verão, tensos no inverno</td>
                <td>Instalados com folga calculada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo das Fórmulas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>°C→K</span>
            <h3>Kelvin</h3>
            <M block={true}>{"K = C + 273"}</M>
          </div>
          <div className="math-card">
            <span>°C→°F</span>
            <h3>Fahrenheit</h3>
            <M block={true}>{"F = \\tfrac{9}{5}C + 32"}</M>
          </div>
          <div className="math-card">
            <span>ΔL</span>
            <h3>Dilatação linear</h3>
            <M block={true}>{"\\Delta L = L_0\\,\\alpha\\,\\Delta T"}</M>
          </div>
          <div className="math-card">
            <span>ΔA</span>
            <h3>Dilatação superficial</h3>
            <M block={true}>{"\\Delta A = A_0\\,\\beta\\,\\Delta T"}</M>
          </div>
          <div className="math-card">
            <span>ΔV</span>
            <h3>Dilatação volumétrica</h3>
            <M block={true}>{"\\Delta V = V_0\\,\\gamma\\,\\Delta T"}</M>
          </div>
          <div className="math-card">
            <span>α:β:γ</span>
            <h3>Relação coeficientes</h3>
            <M block={true}>{"1 : 2 : 3"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Termometria</span>
        <h2>Síntese Visual: Escalas e Dilatação</h2>
        <p>
          Converter escalas e calcular dilatação são as habilidades básicas
          de termometria — dominar o diagrama visual elimina erros de conta.
        </p>

        <svg viewBox="0 0 700 220" className="lesson-svg" aria-label="Comparação visual das escalas Celsius, Fahrenheit e Kelvin">
          {/* termômetros */}
          {[["Celsius (°C)", 160, "#2563eb", "0", "100"],
            ["Fahrenheit (°F)", 320, "#dc2626", "32", "212"],
            ["Kelvin (K)", 480, "#16a34a", "273", "373"]].map(([label, cx, color, bot, top]) => (
            <g key={cx as string}>
              {/* coluna */}
              <rect x={Number(cx)-15} y="40" width="30" height="140" rx="15" fill="#f1f5f9" stroke={color as string} strokeWidth="2" />
              {/* mercúrio */}
              <rect x={Number(cx)-12} y="80" width="24" height="97" rx="12" fill={color as string} opacity="0.7" />
              {/* marcas */}
              <line x1={Number(cx)+15} y1="80" x2={Number(cx)+30} y2="80" stroke={color as string} strokeWidth="1.5" />
              <text x={Number(cx)+35} y="84" textAnchor="start" fontSize="12" fill={color as string}>{top}</text>
              <line x1={Number(cx)+15} y1="175" x2={Number(cx)+30} y2="175" stroke={color as string} strokeWidth="1.5" />
              <text x={Number(cx)+35} y="179" textAnchor="start" fontSize="12" fill={color as string}>{bot}</text>
              <text x={Number(cx)} y="200" textAnchor="middle" fontSize="12" fontWeight="bold" fill={color as string}>{label as string}</text>
            </g>
          ))}
          <text x="350" y="215" textAnchor="middle" fontSize="13" fill="#0f172a">C/100 = (F−32)/180 = (K−273)/100</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Dilatação linear, superficial e volumétrica">
          {/* barra antes */}
          <rect x="60" y="70" width="200" height="50" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="160" y="100" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">L₀ (T₀)</text>
          {/* seta aquecimento */}
          <text x="300" y="97" textAnchor="middle" fontSize="20" fill="#dc2626">→</text>
          <text x="300" y="75" textAnchor="middle" fontSize="12" fill="#dc2626">ΔT</text>
          {/* barra depois */}
          <rect x="340" y="70" width="260" height="50" rx="4" fill="#fef3c7" stroke="#ca8a04" strokeWidth="2" />
          <text x="470" y="100" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#713f12">L = L₀(1 + α·ΔT)</text>
          {/* ΔL */}
          <line x1="540" y1="60" x2="600" y2="60" stroke="#dc2626" strokeWidth="2" />
          <text x="570" y="52" textAnchor="middle" fontSize="12" fill="#dc2626">ΔL = L₀·α·ΔT</text>
          {/* tabela α */}
          <text x="160" y="155" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">Tipo</text>
          <text x="350" y="155" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">Coef.</text>
          <text x="550" y="155" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">Relação</text>
          <text x="160" y="173" textAnchor="middle" fontSize="12" fill="#475569">Linear</text>
          <text x="350" y="173" textAnchor="middle" fontSize="12" fill="#475569">α</text>
          <text x="550" y="173" textAnchor="middle" fontSize="12" fill="#475569">ΔL = L₀αΔT</text>
          <text x="160" y="185" textAnchor="middle" fontSize="12" fill="#475569">Superficial β=2α</text>
          <text x="350" y="185" textAnchor="middle" fontSize="12" fill="#475569">β = 2α</text>
          <text x="550" y="185" textAnchor="middle" fontSize="12" fill="#475569">ΔA = A₀βΔT</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Conversão de Temperatura"
          statement={
            <p>
              A temperatura corporal normal é de 37&nbsp;°C. Converta esse
              valor para Kelvin e para Fahrenheit.
            </p>
          }
          options={[
            { letter: "a", text: "310 K e 98,6 °F", correct: true },
            { letter: "b", text: "310 K e 99,6 °F" },
            { letter: "c", text: "300 K e 98,6 °F" },
            { letter: "d", text: "273 K e 98,6 °F" },
          ]}
          resolution={
            <>
              <M block={true}>{"K = 37 + 273 = 310\\,{\\rm K}"}</M>
              <M block={true}>{"F = \\frac{9}{5}\\times 37 + 32 = 66{,}6 + 32 = 98{,}6\\,{\\rm °F}"}</M>
              <p>Portanto: 310&nbsp;K e 98,6&nbsp;°F.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Dilatação de Trilho de Aço"
          statement={
            <p>
              Um trilho de aço tem comprimento L₀ = 20&nbsp;m a 20&nbsp;°C. O
              coeficiente de dilatação linear do aço é α = 12×10⁻⁶&nbsp;°C⁻¹.
              Qual é a expansão ΔL quando a temperatura atinge 50&nbsp;°C?
            </p>
          }
          options={[
            { letter: "a", text: "3,6 mm" },
            { letter: "b", text: "7,2 mm", correct: true },
            { letter: "c", text: "14,4 mm" },
            { letter: "d", text: "0,72 mm" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\Delta T = 50 - 20 = 30\\,{\\rm °C}"}</M>
              <M block={true}>{"\\Delta L = 20 \\times 12\\times10^{-6} \\times 30 = 7{,}2\\times10^{-3}\\,{\\rm m} = 7{,}2\\,{\\rm mm}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Lâmina Bimetálica"
          statement={
            <p>
              Uma lâmina bimetálica é formada por latão (α = 19×10⁻⁶&nbsp;°C⁻¹)
              e ferro (α = 12×10⁻⁶&nbsp;°C⁻¹), cada tira com comprimento
              L₀ = 0,50&nbsp;m. Para ΔT = 100&nbsp;°C, qual é a diferença de
              expansão entre as duas tiras (ΔL_latão − ΔL_ferro)?
            </p>
          }
          options={[
            { letter: "a", text: "0,35 mm", correct: true },
            { letter: "b", text: "0,95 mm" },
            { letter: "c", text: "0,60 mm" },
            { letter: "d", text: "0,12 mm" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\Delta L_{\\rm lat} = 0{,}50 \\times 19\\times10^{-6} \\times 100 = 9{,}5\\times10^{-4}\\,{\\rm m}"}</M>
              <M block={true}>{"\\Delta L_{\\rm fe} = 0{,}50 \\times 12\\times10^{-6} \\times 100 = 6{,}0\\times10^{-4}\\,{\\rm m}"}</M>
              <M block={true}>{"\\Delta = 9{,}5\\times10^{-4} - 6{,}0\\times10^{-4} = 3{,}5\\times10^{-4}\\,{\\rm m} = 0{,}35\\,{\\rm mm}"}</M>
              <p>Essa diferença causa a curvatura da lâmina, acionando o termostato.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Termômetro Clínico em Relatório Internacional"
          statement={
            <p>
              Um termômetro clínico marca 36,5&nbsp;°C. Um relatório médico
              para os EUA exige a leitura em Fahrenheit. Qual valor deve
              constar no relatório?
            </p>
          }
          options={[
            { letter: "a", text: "97,7 °F", correct: true },
            { letter: "b", text: "97,0 °F" },
            { letter: "c", text: "98,6 °F" },
            { letter: "d", text: "99,7 °F" },
          ]}
          resolution={
            <>
              <M block={true}>{"F = \\frac{9}{5}\\times 36{,}5 + 32 = 65{,}7 + 32 = 97{,}7\\,{\\rm °F}"}</M>
              <p>Febre nos EUA é geralmente definida como temperatura acima de 100,4&nbsp;°F (= 38&nbsp;°C).</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Folga de Dilatação em Ponte"
          statement={
            <p>
              Uma ponte metálica tem 500&nbsp;m de comprimento (α = 12×10⁻⁶&nbsp;°C⁻¹).
              A variação de temperatura ao longo do ano é ΔT = 60&nbsp;°C.
              Qual deve ser o tamanho mínimo da folga de dilatação em cada
              extremidade?
            </p>
          }
          options={[
            { letter: "a", text: "18 cm" },
            { letter: "b", text: "36 cm", correct: true },
            { letter: "c", text: "9 cm" },
            { letter: "d", text: "72 cm" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\Delta L = 500 \\times 12\\times10^{-6} \\times 60 = 0{,}36\\,{\\rm m} = 36\\,{\\rm cm}"}</M>
              <p>
                Essa é a expansão total da ponte. Como há apoio deslizante em
                ambas as extremidades, cada folga precisa acomodar pelo menos
                36&nbsp;cm de variação (considera-se a expansão total em cada
                junta, pois a ponte pode estar fria numa extremidade e se expandir
                para aquela direção).
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
