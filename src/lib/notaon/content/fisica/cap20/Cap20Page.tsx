"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap20Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 20</span>
          <h1>Hidrostática I: Densidade, Pressão e Teorema de Stevin</h1>
          <p>
            Por que mergulhadores sentem seus ouvidos comprimir? Por que um submarino consegue subir e descer?
            A resposta está na física dos fluidos em repouso — a hidrostática — que governa tudo, desde
            encanamentos a barragens.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedade</span>
        <h2>1. Massa Específica (Densidade)</h2>
        <p>
          A <strong>massa específica</strong> (ou densidade) <M>{"\\rho"}</M> de uma substância é a razão
          entre sua massa e seu volume:
        </p>
        <M block={true}>{"\\rho = \\frac{m}{V} \\quad [\\text{kg/m}^3 \\text{ ou g/cm}^3]"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Substância</th><th>ρ (kg/m³)</th><th>ρ (g/cm³)</th></tr>
            </thead>
            <tbody>
              <tr><td>Ar (ao nível do mar)</td><td>1,29</td><td>0,00129</td></tr>
              <tr><td>Água doce (4°C)</td><td>1000</td><td>1,00</td></tr>
              <tr><td>Água salgada</td><td>1025</td><td>1,025</td></tr>
              <tr><td>Alumínio</td><td>2700</td><td>2,70</td></tr>
              <tr><td>Ferro / Aço</td><td>7800</td><td>7,80</td></tr>
              <tr><td>Mercúrio</td><td>13600</td><td>13,6</td></tr>
              <tr><td>Ouro</td><td>19300</td><td>19,3</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedade</span>
        <h2>2. Densidade Relativa (Peso Específico Relativo)</h2>
        <p>
          A <strong>densidade relativa</strong> (ou peso específico relativo) é a razão entre a densidade
          de uma substância e a densidade da água pura (referência):
        </p>
        <M block={true}>{"d_{rel} = \\frac{\\rho_{substância}}{\\rho_{água}} \\quad (\\text{adimensional})"}</M>
        <p>
          Substâncias com <M>{"d_{rel} > 1"}</M> afundam em água; com <M>{"d_{rel} < 1"}</M>, flutuam.
          O mercúrio tem <M>{"d_{rel} = 13{,}6"}</M>, o que significa que é 13,6 vezes mais denso que a água
          — daí seu uso em barômetros compactos.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>3. Pressão</h2>
        <p>
          A <strong>pressão</strong> é a força normal por unidade de área:
        </p>
        <M block={true}>{"p = \\frac{F}{A} \\quad [\\text{Pa} = \\text{N/m}^2]"}</M>
        <p>
          A pressão é um escalar — ela não tem direção por si só, mas a força de pressão sobre uma
          superfície atua <em>perpendicularmente</em> a ela. Isso é válido para fluidos em equilíbrio
          (hidrostática).
        </p>
        <div className="lesson-highlight">
          <h3>Unidades de pressão</h3>
          <p>
            1 atm = 101.325 Pa ≈ 10⁵ Pa = 76 cmHg = 760 mmHg = 1,013 bar.
            No SI, a unidade é o Pascal (Pa = N/m²).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Referência</span>
        <h2>4. Pressão Atmosférica</h2>
        <p>
          A <strong>pressão atmosférica</strong> é o peso da coluna de ar sobre uma unidade de área. Ao
          nível do mar, vale aproximadamente:
        </p>
        <M block={true}>{"p_{atm} = 1\\,\\text{atm} = 101{.}325\\,\\text{Pa} \\approx 10^5\\,\\text{Pa}"}</M>
        <p>
          Ela sustenta uma coluna de mercúrio de 76 cm (barômetro de Torricelli) ou de água de
          aproximadamente 10,3 m. A pressão atmosférica diminui com a altitude — no cume do Everest,
          <M>{"p \\approx 0{,}33\\,\\text{atm}"}</M>.
        </p>
        <p>
          Em problemas de vestibular, usamos frequentemente <M>{"p_0 = 10^5\\,\\text{Pa}"}</M> ou
          <M>{"p_0 = 10\\,\\text{m de coluna de água}"}</M> (com <M>{"g = 10\\,\\text{m/s}^2"}</M>).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Lei Fundamental</span>
        <h2>5. Teorema de Stevin (Lei Fundamental da Hidrostática)</h2>
        <p>
          O <strong>Teorema de Stevin</strong> estabelece que a pressão em um fluido em equilíbrio aumenta
          linearmente com a profundidade:
        </p>
        <M block={true}>{"p = p_0 + \\rho g h"}</M>
        <p>
          onde <M>{"p_0"}</M> é a pressão na superfície livre, <M>{"\\rho"}</M> a densidade do fluido,
          <M>{"g"}</M> a aceleração da gravidade e <M>{"h"}</M> a profundidade abaixo da superfície.
        </p>
        <div className="lesson-highlight">
          <h3>Interpretação física</h3>
          <p>
            O termo <M>{"\\rho g h"}</M> representa o peso da coluna de líquido de altura h e seção
            unitária que repousa sobre o ponto considerado.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>6. Pressão Aumentando com a Profundidade</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 240" width="400" height="240" aria-label="Coluna de líquido mostrando pressão crescente com profundidade">
            {/* Recipiente */}
            <rect x="60" y="30" width="200" height="180" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" rx="4" opacity="0.5"/>
            {/* Superfície livre */}
            <line x1="60" y1="30" x2="260" y2="30" stroke="#3b82f6" strokeWidth="2.5"/>
            <text x="270" y="34" fontSize="11" fill="#3b82f6">Superfície</text>

            {/* Isobáricas */}
            <line x1="65" y1="75" x2="255" y2="75" stroke="#1e40af" strokeWidth="1" strokeDasharray="5,3" opacity="0.7"/>
            <line x1="65" y1="130" x2="255" y2="130" stroke="#1e40af" strokeWidth="1" strokeDasharray="5,3" opacity="0.7"/>
            <line x1="65" y1="185" x2="255" y2="185" stroke="#1e40af" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.9"/>

            {/* Labels pressão */}
            <text x="268" y="20" fontSize="10" fill="#1e40af">p₀</text>
            <text x="268" y="78" fontSize="10" fill="#1e40af">p₁ = p₀ + ρgh₁</text>
            <text x="268" y="133" fontSize="10" fill="#1e40af">p₂ = p₀ + ρgh₂</text>
            <text x="268" y="188" fontSize="10" fill="#1e40af">p₃ (máx)</text>

            {/* Setas de profundidade */}
            <line x1="40" y1="30" x2="40" y2="75" stroke="#555" strokeWidth="1.5"/>
            <text x="10" y="56" fontSize="10" fill="#555">h₁</text>
            <line x1="40" y1="30" x2="40" y2="130" stroke="#555" strokeWidth="1.5"/>
            <text x="10" y="86" fontSize="10" fill="#555">h₂</text>
            <line x1="40" y1="30" x2="40" y2="185" stroke="#555" strokeWidth="1.5"/>
            <text x="10" y="116" fontSize="10" fill="#555">h₃</text>

            {/* Seta vertical para "h cresce" */}
            <line x1="35" y1="30" x2="35" y2="210" stroke="#555" strokeWidth="1" markerEnd="url(#arrDown20)"/>
            <text x="8" y="220" fontSize="9" fill="#555">h cresce</text>

            {/* Barras de pressão laterais (proporcional) */}
            <rect x="280" y="60" width="12" height="15" fill="#3b82f6" opacity="0.6"/>
            <rect x="280" y="115" width="22" height="15" fill="#3b82f6" opacity="0.7"/>
            <rect x="280" y="170" width="36" height="15" fill="#3b82f6" opacity="0.85"/>
            <text x="296" y="95" fontSize="8" fill="#3b82f6">p₁</text>
            <text x="306" y="150" fontSize="8" fill="#3b82f6">p₂</text>
            <text x="320" y="205" fontSize="8" fill="#3b82f6">p₃</text>

            <defs>
              <marker id="arrDown20" markerWidth="5" markerHeight="5" refX="2.5" refY="5" orient="auto">
                <path d="M0,0 L2.5,5 L5,0 z" fill="#555"/>
              </marker>
            </defs>
          </svg>
          <figcaption>Recipiente com líquido: as linhas tracejadas são isobáricas (mesma pressão). A pressão cresce linearmente com a profundidade h conforme p = p₀ + ρgh.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>7. Superfícies Isobáricas</h2>
        <p>
          Uma <strong>superfície isobárica</strong> é o conjunto de pontos em que a pressão é igual.
          Em um fluido em equilíbrio, sob gravidade uniforme, as superfícies isobáricas são planos
          horizontais. Consequência direta:
        </p>
        <M block={true}>{"\\text{Em fluido homogêneo em equilíbrio: } h_1 = h_2 \\Rightarrow p_1 = p_2"}</M>
        <p>
          Isso vale mesmo que os pontos estejam em recipientes de formas diferentes — princípio
          fundamental para os vasos comunicantes.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Instrumentos</span>
        <h2>8. Manômetro e Barômetro</h2>
        <p>
          <strong>Barômetro de Torricelli:</strong> tubo fechado cheio de mercúrio invertido em cuba aberta.
          A pressão atmosférica sustenta a coluna de mercúrio de altura h:
        </p>
        <M block={true}>{"p_0 = \\rho_{Hg}\\,g\\,h \\Rightarrow h = \\frac{p_0}{\\rho_{Hg}\\,g} = \\frac{10^5}{13600 \\times 10} \\approx 0{,}76\\,\\text{m} = 76\\,\\text{cm}"}</M>
        <p>
          <strong>Manômetro:</strong> mede a <em>pressão relativa</em> (diferença em relação à pressão
          de referência). Manômetro de tubo em U com líquido:
        </p>
        <M block={true}>{"p_1 - p_2 = \\rho_{liq}\\,g\\,\\Delta h"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicação</span>
        <h2>9. Vasos Comunicantes</h2>
        <p>
          Em vasos comunicantes preenchidos com o mesmo fluido homogêneo, a superfície livre fica na mesma
          altura, independentemente da forma dos vasos:
        </p>
        <M block={true}>{"p_A = p_B \\Rightarrow p_0 + \\rho g h_A = p_0 + \\rho g h_B \\Rightarrow h_A = h_B"}</M>
        <p>
          Para fluidos de densidades diferentes nos dois braços, a condição de equilíbrio é:
        </p>
        <M block={true}>{"\\rho_1 g h_1 = \\rho_2 g h_2 \\Rightarrow \\rho_1 h_1 = \\rho_2 h_2"}</M>
        <p>
          Esse princípio é usado para determinar densidades desconhecidas com manômetros de tubo em U.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Paradoxo</span>
        <h2>10. Paradoxo Hidrostático</h2>
        <p>
          Uma das descobertas mais contra-intuitivas da hidrostática: a pressão no fundo de um recipiente
          depende apenas da <strong>altura da coluna</strong> de líquido e da <strong>densidade</strong>
          — não da forma do recipiente nem do volume total de líquido.
        </p>
        <p>
          Um recipiente cônico estreito com 1 m de altura exerce a mesma pressão no fundo que um recipiente
          cilíndrico largo com a mesma altura e o mesmo líquido. A força total no fundo, porém, é
          diferente (depende da área):
        </p>
        <M block={true}>{"F_{fundo} = p_{fundo} \\cdot A_{fundo} = (p_0 + \\rho g h) \\cdot A"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Referência</span>
        <h2>11. Conversão de Unidades de Pressão</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Unidade</th><th>Equivalência</th><th>Uso típico</th></tr>
            </thead>
            <tbody>
              <tr><td>Pascal (Pa)</td><td>1 N/m²</td><td>SI — oficial</td></tr>
              <tr><td>Atmosfera (atm)</td><td>101.325 Pa</td><td>Meteorologia, mergulho</td></tr>
              <tr><td>Bar</td><td>10⁵ Pa</td><td>Indústria, meteorologia</td></tr>
              <tr><td>mmHg (Torr)</td><td>133,3 Pa</td><td>Medicina (pressão sanguínea)</td></tr>
              <tr><td>cmHg</td><td>1333 Pa</td><td>Barômetros</td></tr>
              <tr><td>m H₂O</td><td>9810 Pa (≈ 10⁴ Pa)</td><td>Hidráulica, hidrologia</td></tr>
              <tr><td>kgf/cm²</td><td>98.066 Pa</td><td>Engenharia antiga</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>ρ</span>
            <h3>Densidade</h3>
            <M block={true}>{"\\rho = \\frac{m}{V}"}</M>
          </div>
          <div className="math-card">
            <span>p</span>
            <h3>Pressão</h3>
            <M block={true}>{"p = \\frac{F}{A}"}</M>
          </div>
          <div className="math-card">
            <span>Stevin</span>
            <h3>Lei Fundamental</h3>
            <M block={true}>{"p = p_0 + \\rho g h"}</M>
          </div>
          <div className="math-card">
            <span>VC</span>
            <h3>Vasos Comunicantes</h3>
            <M block={true}>{"\\rho_1 h_1 = \\rho_2 h_2"}</M>
          </div>
          <div className="math-card">
            <span>atm</span>
            <h3>Pressão Atm.</h3>
            <M block={true}>{"p_0 \\approx 10^5\\,\\text{Pa}"}</M>
          </div>
          <div className="math-card">
            <span>F</span>
            <h3>Força no Fundo</h3>
            <M block={true}>{"F = p \\cdot A"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Hidrostática</span>
        <h2>Síntese Visual: Pressão e Stevin</h2>
        <p>
          A pressão num fluido aumenta linearmente com a profundidade — essa
          relação (Stevin) fundamenta todas as questões de hidrostática do ENEM.
        </p>

        <svg viewBox="0 0 700 220" className="lesson-svg" aria-label="Coluna de fluido: pressão aumenta com profundidade">
          <defs>
            <marker id="arr20a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          {/* recipiente */}
          <rect x="200" y="30" width="300" height="170" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          {/* superfície */}
          <line x1="200" y1="50" x2="500" y2="50" stroke="#2563eb" strokeWidth="2" strokeDasharray="6 3" />
          <text x="540" y="54" textAnchor="start" fontSize="12" fill="#2563eb">P₀ (atm)</text>
          {/* profundidade h1 */}
          <line x1="175" y1="50" x2="175" y2="120" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr20a)" />
          <text x="165" y="90" textAnchor="end" fontSize="13" fill="#dc2626">h₁</text>
          <line x1="200" y1="120" x2="500" y2="120" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5 3" />
          <text x="510" y="124" textAnchor="start" fontSize="12" fill="#dc2626">P₁ = P₀ + ρgh₁</text>
          {/* profundidade h2 */}
          <line x1="155" y1="50" x2="155" y2="180" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arr20a)" />
          <text x="145" y="125" textAnchor="end" fontSize="13" fill="#7c3aed">h₂</text>
          <line x1="200" y1="180" x2="500" y2="180" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="5 3" />
          <text x="510" y="184" textAnchor="start" fontSize="12" fill="#7c3aed">P₂ = P₀ + ρgh₂</text>
          <text x="350" y="210" textAnchor="middle" fontSize="13" fill="#0f172a">P = P₀ + ρ·g·h | ρ água = 1000 kg/m³ | g ≈ 10 m/s²</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Vasos comunicantes e Princípio de Pascal">
          {/* vasos comunicantes */}
          <rect x="60" y="40" width="120" height="130" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
          <rect x="240" y="40" width="120" height="130" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
          {/* tubo comunicante */}
          <rect x="180" y="155" width="60" height="15" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          {/* nível de água */}
          <rect x="62" y="80" width="116" height="88" rx="2" fill="#bfdbfe" />
          <rect x="242" y="80" width="116" height="88" rx="2" fill="#bfdbfe" />
          <rect x="182" y="157" width="56" height="11" fill="#bfdbfe" />
          <text x="120" y="70" textAnchor="middle" fontSize="12" fill="#1d4ed8">mesmo nível</text>
          <text x="300" y="70" textAnchor="middle" fontSize="12" fill="#1d4ed8">mesmo nível</text>
          <text x="180" y="175" textAnchor="middle" fontSize="11" fill="#2563eb">conexão</text>

          {/* Pascal */}
          <rect x="430" y="40" width="230" height="130" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
          <text x="545" y="68" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">Princípio de Pascal</text>
          <text x="545" y="90" textAnchor="middle" fontSize="12" fill="#166534">Pressão aplicada a fluido</text>
          <text x="545" y="108" textAnchor="middle" fontSize="12" fill="#166534">confinado transmite-se</text>
          <text x="545" y="126" textAnchor="middle" fontSize="12" fill="#166534">integralmente a todos</text>
          <text x="545" y="144" textAnchor="middle" fontSize="12" fill="#166534">os pontos — prensa hidráulica</text>
          <text x="350" y="182" textAnchor="middle" fontSize="13" fill="#0f172a">F₁/A₁ = F₂/A₂ (prensa) | vasos comunicantes: mesmo fluido → mesmo nível</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Cálculo de Densidade"
          statement={
            <p>
              Um objeto tem massa <M>{"m = 500\\,\\text{g}"}</M> e ocupa um volume de
              <M>{"V = 250\\,\\text{cm}^3"}</M>. Qual é a sua densidade?
            </p>
          }
          options={[
            { letter: "a", text: "1 g/cm³" },
            { letter: "b", text: "2 g/cm³", correct: true },
            { letter: "c", text: "0,5 g/cm³" },
            { letter: "d", text: "4 g/cm³" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\rho = \\frac{m}{V} = \\frac{500\\,\\text{g}}{250\\,\\text{cm}^3} = 2\\,\\text{g/cm}^3 = 2000\\,\\text{kg/m}^3"}</M>
              <p>Como ρ &gt; ρ_água, o objeto afunda em água.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Pressão em Profundidade"
          statement={
            <p>
              Qual é a pressão total a uma profundidade de <M>{"h = 10\\,\\text{m}"}</M> em água doce?
              Dados: <M>{"\\rho = 1000\\,\\text{kg/m}^3"}</M>, <M>{"p_0 = 10^5\\,\\text{Pa}"}</M>,
              <M>{"g = 10\\,\\text{m/s}^2"}</M>.
            </p>
          }
          options={[
            { letter: "a", text: "10⁵ Pa" },
            { letter: "b", text: "2×10⁵ Pa", correct: true },
            { letter: "c", text: "10⁴ Pa" },
            { letter: "d", text: "1,5×10⁵ Pa" },
          ]}
          resolution={
            <>
              <M block={true}>{"p = p_0 + \\rho g h = 10^5 + 1000 \\times 10 \\times 10 = 10^5 + 10^5 = 2 \\times 10^5\\,\\text{Pa}"}</M>
              <p>A cada 10 m de profundidade em água, a pressão aumenta 1 atm.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Tubo em U — Determinação de Densidade"
          statement={
            <p>
              Um tubo em U tem um braço com água (<M>{"\\rho_{água} = 1000\\,\\text{kg/m}^3"}</M>) a uma
              altura <M>{"h_1 = 30\\,\\text{cm}"}</M> e outro braço com óleo a <M>{"h_2 = 40\\,\\text{cm}"}</M>.
              As pressões na base dos dois braços são iguais (mesmo nível). Qual é a densidade do óleo?
            </p>
          }
          options={[
            { letter: "a", text: "1333 kg/m³" },
            { letter: "b", text: "750 kg/m³", correct: true },
            { letter: "c", text: "800 kg/m³" },
            { letter: "d", text: "600 kg/m³" },
          ]}
          resolution={
            <>
              <p>Na interface (fundo do U), as pressões são iguais:</p>
              <M block={true}>{"p_0 + \\rho_{agua}\\,g\\,h_1 = p_0 + \\rho_{oleo}\\,g\\,h_2"}</M>
              <M block={true}>{"\\rho_{oleo} = \\frac{\\rho_{agua}\\,h_1}{h_2} = \\frac{1000 \\times 0{,}30}{0{,}40} = 750\\,\\text{kg/m}^3"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Mergulhador em Profundidade"
          statement={
            <p>
              Um mergulhador desce a <M>{"h = 30\\,\\text{m}"}</M> de profundidade no mar
              (<M>{"\\rho = 1025\\,\\text{kg/m}^3"}</M>). Adote <M>{"g = 10\\,\\text{m/s}^2"}</M> e
              <M>{"p_0 = 10^5\\,\\text{Pa}"}</M>. Qual é a pressão total? Como isso afeta o consumo de ar?
            </p>
          }
          options={[
            { letter: "a", text: "p = 3,07×10⁵ Pa; ar comprimido a ≈ 3 atm → consumo ≈ 3× maior", correct: true },
            { letter: "b", text: "p = 2×10⁵ Pa; consumo dobra" },
            { letter: "c", text: "p = 10⁵ Pa; não afeta" },
            { letter: "d", text: "p = 4×10⁵ Pa; consumo quadruplica" },
          ]}
          resolution={
            <>
              <M block={true}>{"p = 10^5 + 1025 \\times 10 \\times 30 = 10^5 + 307{.}500 \\approx 4{,}07 \\times 10^5\\,\\text{Pa}"}</M>
              <p>
                A pressão é ≈ 4 atm. O regulador fornece ar à pressão ambiente, portanto cada inspiração
                consume ≈ 4 vezes mais ar (em massa) que na superfície. O cilindro dura ≈ 4 vezes menos.
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Barragem — Pressão e Força na Comporta"
          statement={
            <p>
              Uma barragem retém água (<M>{"\\rho = 1000\\,\\text{kg/m}^3"}</M>) a uma altura
              <M>{"h = 40\\,\\text{m}"}</M>. Calcule a pressão na base e a força total sobre uma
              comporta retangular de <M>{"5\\,\\text{m}"}</M> de largura localizada na base.
              Adote <M>{"g = 10\\,\\text{m/s}^2"}</M> e <M>{"p_0 = 0"}</M> (pressão manométrica).
            </p>
          }
          options={[
            { letter: "a", text: "p = 4×10⁵ Pa; F = 1×10⁷ N" },
            { letter: "b", text: "p = 4×10⁵ Pa; F = 4×10⁷ N (força média × área)", correct: true },
            { letter: "c", text: "p = 2×10⁵ Pa; F = 2×10⁷ N" },
            { letter: "d", text: "p = 10⁵ Pa; F depende do volume" },
          ]}
          resolution={
            <>
              <p>Pressão na base (manométrica):</p>
              <M block={true}>{"p_{base} = \\rho g h = 1000 \\times 10 \\times 40 = 4 \\times 10^5\\,\\text{Pa}"}</M>
              <p>
                A pressão varia de 0 (topo) a <M>{"4\\times10^5\\,\\text{Pa}"}</M> (base). A pressão média
                sobre a comporta é <M>{"p_{med} = \\rho g (h/2) = 2\\times10^5\\,\\text{Pa}"}</M>.
                Área da comporta: <M>{"A = 5 \\times 40 = 200\\,\\text{m}^2"}</M>.
              </p>
              <M block={true}>{"F = p_{med} \\cdot A = 2\\times10^5 \\times 200 = 4\\times10^7\\,\\text{N} = 40\\,\\text{MN}"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
