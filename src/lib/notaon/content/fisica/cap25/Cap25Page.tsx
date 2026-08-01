"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap25Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 25</span>
          <h1>Propagação do Calor: Condução, Convecção e Irradiação</h1>
          <p>
            Entenda os três mecanismos de transferência de calor: a condução em
            sólidos (lei de Fourier), a convecção em fluidos e a irradiação por
            ondas eletromagnéticas (lei de Stefan-Boltzmann). Aplique esses
            conceitos ao efeito estufa, à garrafa térmica e ao isolamento de
            edificações.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Condução Térmica</span>
        <h2>1. Condução: Transferência por Colisões Moleculares</h2>
        <p>
          Na condução, o calor se propaga de molécula a molécula por colisões
          sem transporte líquido de matéria. As moléculas mais agitadas (região
          quente) transferem energia cinética às vizinhas menos agitadas (região
          fria). É o mecanismo dominante em sólidos, especialmente metais, que
          têm elétrons livres acelerando a transferência.
        </p>
        <div className="lesson-highlight">
          <h3>Bons e maus condutores</h3>
          <p>
            Metais (prata, cobre, alumínio): excelentes condutores.
            Madeira, borracha, lã, ar parado, poliestireno (isopor): maus
            condutores (isolantes térmicos).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Lei de Fourier</span>
        <h2>2. Lei de Fourier: Potência de Condução</h2>
        <p>
          A taxa de transferência de calor por condução (potência) através de
          uma placa plana de espessura L, área A e condutividade térmica k é
          dada pela lei de Fourier:
        </p>
        <M block={true}>{"P = \\frac{k \\cdot A \\cdot \\Delta T}{L}"}</M>
        <p>
          onde P é a potência em watts, k é a condutividade térmica (W/m·K),
          A é a área da seção transversal (m²), ΔT é a diferença de temperatura
          entre as duas faces (K ou °C) e L é a espessura (m).
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 200" width="400" height="200" aria-label="Barra condutora com gradiente de temperatura">
            {/* Bar */}
            <defs>
              <linearGradient id="barGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ef5350"/>
                <stop offset="100%" stopColor="#42a5f5"/>
              </linearGradient>
            </defs>
            <rect x="60" y="70" width="280" height="60" rx="8" fill="url(#barGrad)" opacity="0.85"/>

            {/* Hot end label */}
            <text x="75" y="65" fontSize="12" fontWeight="bold" fill="#c62828">T_quente</text>
            <text x="75" y="148" fontSize="10" fill="#c62828">(alta T)</text>

            {/* Cold end label */}
            <text x="295" y="65" fontSize="12" fontWeight="bold" fill="#1565c0">T_fria</text>
            <text x="290" y="148" fontSize="10" fill="#1565c0">(baixa T)</text>

            {/* Heat flow arrow */}
            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#ff6f00"/>
              </marker>
            </defs>
            <line x1="130" y1="100" x2="270" y2="100" stroke="#ff6f00" strokeWidth="3" markerEnd="url(#arrowhead)"/>
            <text x="185" y="95" fontSize="11" fill="#ff6f00" fontWeight="bold">fluxo Q</text>

            {/* Dimension labels */}
            <line x1="60" y1="160" x2="340" y2="160" stroke="#555" strokeWidth="1.5" markerEnd="url(#arrowhead)"/>
            <text x="185" y="178" fontSize="11" textAnchor="middle" fill="#555">L (espessura)</text>
            <line x1="30" y1="70" x2="30" y2="130" stroke="#555" strokeWidth="1.5"/>
            <text x="10" y="104" fontSize="10" fill="#555" textAnchor="middle">A</text>

            {/* Formula label */}
            <text x="200" y="25" fontSize="11" textAnchor="middle" fill="#333">P = k·A·ΔT / L</text>
          </svg>
          <figcaption>
            Barra condutora: extremidade quente (vermelho) e fria (azul). A
            seta laranja indica a direção do fluxo de calor Q, de maior para
            menor temperatura. L é a espessura e A a área da seção.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Condutividade Térmica</span>
        <h2>3. Tabela de Condutividade Térmica k</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Material</th>
                <th>k (W/m·K)</th>
                <th>Classificação</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Prata</td><td>429</td><td>Excelente condutor</td></tr>
              <tr><td>Cobre</td><td>401</td><td>Excelente condutor</td></tr>
              <tr><td>Alumínio</td><td>237</td><td>Bom condutor</td></tr>
              <tr><td>Ferro/Aço</td><td>50–80</td><td>Condutor moderado</td></tr>
              <tr><td>Vidro</td><td>1,0</td><td>Isolante moderado</td></tr>
              <tr><td>Madeira</td><td>0,1–0,3</td><td>Isolante</td></tr>
              <tr><td>Lã de vidro</td><td>0,04</td><td>Bom isolante</td></tr>
              <tr><td>Ar (parado)</td><td>0,026</td><td>Excelente isolante</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resistência Térmica</span>
        <h2>4. Resistência Térmica: Analogia com o Circuito Elétrico</h2>
        <p>
          A resistência térmica R_t de uma camada plana é definida por analogia
          com a resistência elétrica (lei de Ohm: tensão = resistência × corrente):
        </p>
        <M block={true}>{"R_t = \\frac{L}{k \\cdot A} \\qquad P = \\frac{\\Delta T}{R_t}"}</M>
        <p>
          Para camadas em série (paredes duplas, janelas de vidro duplo), as
          resistências somam-se: R_total = R₁ + R₂ + ... Isso permite calcular
          facilmente o fluxo de calor através de estruturas compostas.
        </p>
        <div className="lesson-highlight">
          <h3>Janela de vidro duplo</h3>
          <p>
            Duas placas de vidro com camada de ar entre elas: a resistência do
            ar (k = 0,026&nbsp;W/m·K) é muito maior que a do vidro
            (k = 1&nbsp;W/m·K), reduzindo drasticamente a perda de calor.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Convecção</span>
        <h2>5. Convecção: Transporte de Calor por Movimento de Fluido</h2>
        <p>
          Na convecção, o calor é transportado pela movimentação física do
          fluido (líquido ou gás). O fluido aquecido expande, fica menos denso
          e sobe; o fluido frio é mais denso e desce, estabelecendo correntes
          de convecção.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Mecanismo</th><th>Exemplos</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Natural</td>
                <td>Diferença de densidade por temperatura</td>
                <td>Brisa marítima, correntes oceânicas, aquecimento de ambientes por aquecedor</td>
              </tr>
              <tr>
                <td>Forçada</td>
                <td>Bomba, ventilador, movimento externo</td>
                <td>Radiador de carro, ar-condicionado split, CPU com cooler</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Convecção Natural</span>
        <h2>6. Convecção Natural: Brisa Marítima e Terrestre</h2>
        <p>
          Durante o dia, a terra aquece mais rápido que o mar (c_terra &lt; c_água).
          O ar sobre o continente sobe (menos denso), criando baixa pressão; o
          ar frio do mar entra pelo litoral como brisa marítima. À noite, o
          processo inverte: o mar retém calor mais tempo, o ar sobre ele sobe e
          o vento sopra do continente para o mar (brisa terrestre).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Irradiação</span>
        <h2>7. Irradiação Térmica: Ondas Eletromagnéticas no Infravermelho</h2>
        <p>
          Todo corpo com temperatura acima do zero absoluto emite radiação
          eletromagnética. A faixa predominante é o infravermelho (IV) para
          corpos à temperatura ambiente; o Sol, a cerca de 5&nbsp;778&nbsp;K,
          emite principalmente no visível. A irradiação é o único mecanismo que
          funciona no vácuo.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Lei de Stefan-Boltzmann</span>
        <h2>8. Lei de Stefan-Boltzmann: P = ε·σ·A·T⁴</h2>
        <p>
          A potência total irradiada por uma superfície é:
        </p>
        <M block={true}>{"P = \\varepsilon \\cdot \\sigma \\cdot A \\cdot T^4"}</M>
        <p>
          onde <M>{"\\varepsilon"}</M> é a emissividade (0 a 1),{" "}
          <M>{"\\sigma = 5{,}67\\times10^{-8}\\,{\\rm W/m^2 K^4}"}</M> é a
          constante de Stefan-Boltzmann, A é a área (m²) e T é a temperatura
          absoluta (K). A forte dependência em T⁴ significa que dobrar a
          temperatura multiplica a potência irradiada por 16.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Corpo Negro</span>
        <h2>9. Corpo Negro e Emissividade ε</h2>
        <p>
          Um corpo negro (ε = 1) é o emissor e absorvedor ideal — absorve toda
          radiação incidente e emite a máxima potência para uma dada temperatura.
          Na prática, superfícies têm ε &lt; 1:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Superfície</th><th>Emissividade ε</th></tr>
            </thead>
            <tbody>
              <tr><td>Corpo negro ideal</td><td>1,00</td></tr>
              <tr><td>Asfalto</td><td>0,95</td></tr>
              <tr><td>Pele humana</td><td>0,97</td></tr>
              <tr><td>Alumínio oxidado</td><td>0,30</td></tr>
              <tr><td>Alumínio polido</td><td>0,05</td></tr>
              <tr><td>Espelho (prata polida)</td><td>0,02</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Aplicação prática</h3>
          <p>
            Mantas de resgate (douradas/prateadas) têm ε ≈ 0,05, refletindo
            97% da radiação corporal de volta para o corpo, reduzindo a perda
            de calor por irradiação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Efeito Estufa</span>
        <h2>10. Efeito Estufa: CO₂, CH₄ e a Absorção do Infravermelho</h2>
        <p>
          A luz solar (visível) atravessa a atmosfera e aquece a superfície
          terrestre. A Terra reemite essa energia como radiação infravermelha.
          Gases de efeito estufa (CO₂, CH₄, H₂O, N₂O) absorvem seletivamente
          essa radiação IV e a reemitem em todas as direções, parte de volta
          para a superfície — mantendo a Terra ≈33&nbsp;°C mais quente do que
          seria sem atmosfera.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 180" width="400" height="180" aria-label="Efeito estufa: espectro e absorção por gases">
            {/* Sun */}
            <circle cx="50" cy="50" r="30" fill="#ffeb3b" stroke="#f57f17" strokeWidth="2"/>
            <text x="50" y="54" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#e65100">Sol</text>
            <text x="50" y="66" textAnchor="middle" fontSize="9" fill="#e65100">5778 K</text>

            {/* Visible arrow */}
            <line x1="82" y1="50" x2="180" y2="50" stroke="#ffb300" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>
            <text x="130" y="44" fontSize="9" fill="#f57f17">luz visível</text>

            {/* Earth */}
            <circle cx="210" cy="110" r="28" fill="#4caf50" stroke="#1b5e20" strokeWidth="2"/>
            <text x="210" y="114" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Terra</text>

            {/* IR arrow up */}
            <line x1="210" y1="80" x2="210" y2="35" stroke="#ef5350" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <text x="218" y="60" fontSize="9" fill="#c62828">IV emitido</text>

            {/* Atmosphere layer */}
            <rect x="100" y="25" width="260" height="18" rx="4" fill="#b3e5fc" opacity="0.6"/>
            <text x="230" y="37" textAnchor="middle" fontSize="9" fill="#01579b">Atmosfera: CO₂, CH₄, H₂O</text>

            {/* Partial re-emission back */}
            <path d="M210,43 Q170,55 170,90 Q170,120 210,138" stroke="#ef5350" strokeWidth="1.5" fill="none" strokeDasharray="5,3"/>
            <text x="140" y="95" fontSize="9" fill="#c62828">parte</text>
            <text x="140" y="106" fontSize="9" fill="#c62828">devolvida</text>

            {/* Spectrum bar */}
            <defs>
              <linearGradient id="specGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#9c27b0"/>
                <stop offset="30%" stopColor="#2196f3"/>
                <stop offset="50%" stopColor="#4caf50"/>
                <stop offset="65%" stopColor="#ffeb3b"/>
                <stop offset="80%" stopColor="#ff9800"/>
                <stop offset="100%" stopColor="#f44336"/>
              </linearGradient>
            </defs>
            <rect x="100" y="155" width="260" height="14" rx="3" fill="url(#specGrad)"/>
            <text x="100" y="150" fontSize="9" fill="#555">UV</text>
            <text x="200" y="150" fontSize="9" fill="#555">Visível</text>
            <text x="320" y="150" fontSize="9" fill="#555">IV</text>
          </svg>
          <figcaption>
            A luz visível solar atravessa a atmosfera e aquece a Terra. A Terra
            reemite infravermelho, que é parcialmente absorvido pelos gases de
            efeito estufa e devolvido à superfície, elevando a temperatura média.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Garrafa Térmica</span>
        <h2>11. Garrafa Térmica: Minimizando os Três Mecanismos</h2>
        <p>
          A garrafa térmica (ou garrafão de Dewar) é um dispositivo que atua
          contra os três mecanismos de propagação:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Mecanismo</th><th>Solução adotada</th></tr>
            </thead>
            <tbody>
              <tr><td>Condução</td><td>Vácuo entre as paredes duplas (sem meio sólido/gasoso para conduzir)</td></tr>
              <tr><td>Convecção</td><td>Vácuo (sem fluido para circular)</td></tr>
              <tr><td>Irradiação</td><td>Paredes internas espelhadas (ε baixo, refletem a radiação IV)</td></tr>
              <tr><td>Condução (tampa)</td><td>Material pouco condutor (cortiça, plástico)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo das Fórmulas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Fourier</span>
            <h3>Condução</h3>
            <M block={true}>{"P = \\frac{k A \\Delta T}{L}"}</M>
          </div>
          <div className="math-card">
            <span>R_t</span>
            <h3>Resistência térmica</h3>
            <M block={true}>{"R_t = \\frac{L}{kA}"}</M>
          </div>
          <div className="math-card">
            <span>Stefan</span>
            <h3>Irradiação</h3>
            <M block={true}>{"P = \\varepsilon\\sigma A T^4"}</M>
          </div>
          <div className="math-card">
            <span>σ</span>
            <h3>Constante Stefan</h3>
            <M block={true}>{"5{,}67\\times10^{-8}\\,{\\rm W/m^2K^4}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Fluxo de Calor por Condução"
          statement={
            <p>
              Uma barra de ferro (k = 80&nbsp;W/m·K, A = 4&nbsp;cm² = 4×10⁻⁴&nbsp;m²,
              L = 0,5&nbsp;m) tem ΔT = 200&nbsp;°C entre as extremidades. Qual
              é a taxa de transferência de calor?
            </p>
          }
          options={[
            { letter: "a", text: "12,8 W", correct: true },
            { letter: "b", text: "128 W" },
            { letter: "c", text: "6,4 W" },
            { letter: "d", text: "64 W" },
          ]}
          resolution={
            <>
              <M block={true}>{"P = \\frac{k A \\Delta T}{L} = \\frac{80 \\times 4\\times10^{-4} \\times 200}{0{,}5}"}</M>
              <M block={true}>{"P = \\frac{6{,}4}{0{,}5} = 12{,}8\\,{\\rm W}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Janela de Vidro Duplo — Resistência Equivalente"
          statement={
            <p>
              Uma janela de vidro duplo tem: dois vidros de 4&nbsp;mm de espessura
              (k_vidro = 1&nbsp;W/m·K) e uma camada de ar de 6&nbsp;mm entre
              eles (k_ar = 0,026&nbsp;W/m·K). Calcule a resistência térmica
              total por m² (R_t em m²·K/W) e compare com um vidro simples de
              4&nbsp;mm.
            </p>
          }
          options={[
            { letter: "a", text: "R ≈ 0,239 m²K/W (vs 0,004 simples)", correct: true },
            { letter: "b", text: "R ≈ 0,012 m²K/W" },
            { letter: "c", text: "R ≈ 0,050 m²K/W" },
            { letter: "d", text: "R ≈ 0,100 m²K/W" },
          ]}
          resolution={
            <>
              <M block={true}>{"R_{\\rm vidro} = \\frac{0{,}004}{1} = 0{,}004\\,{\\rm m^2 K/W}"}</M>
              <M block={true}>{"R_{\\rm ar} = \\frac{0{,}006}{0{,}026} \\approx 0{,}231\\,{\\rm m^2 K/W}"}</M>
              <M block={true}>{"R_{\\rm total} = 2\\times0{,}004 + 0{,}231 \\approx 0{,}239\\,{\\rm m^2 K/W}"}</M>
              <p>Vidro simples: R = 0,004&nbsp;m²K/W — a janela dupla é ~60× melhor isolante.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Irradiação do Sol"
          statement={
            <p>
              Modele o Sol como corpo negro (ε = 1) com temperatura de superfície
              T = 5&nbsp;778&nbsp;K. Calcule a potência irradiada por m² de
              superfície solar. (σ = 5,67×10⁻⁸&nbsp;W/m²·K⁴)
            </p>
          }
          options={[
            { letter: "a", text: "≈ 6,3 × 10⁷ W/m²", correct: true },
            { letter: "b", text: "≈ 3,8 × 10²⁶ W/m²" },
            { letter: "c", text: "≈ 1,4 × 10³ W/m²" },
            { letter: "d", text: "≈ 2,5 × 10⁵ W/m²" },
          ]}
          resolution={
            <>
              <M block={true}>{"P = \\sigma T^4 = 5{,}67\\times10^{-8} \\times (5778)^4"}</M>
              <M block={true}>{"(5778)^4 \\approx 1{,}114\\times10^{15}"}</M>
              <M block={true}>{"P \\approx 5{,}67\\times10^{-8} \\times 1{,}114\\times10^{15} \\approx 6{,}3\\times10^{7}\\,{\\rm W/m^2}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Garrafa Térmica: Os Três Mecanismos"
          statement={
            <p>
              Uma garrafa térmica usa vácuo entre paredes duplas espelhadas e
              tampa de cortiça. Relacione corretamente cada componente com o
              mecanismo de transferência de calor que ele combate:
            </p>
          }
          options={[
            { letter: "a", text: "Vácuo → condução e convecção; paredes espelhadas → irradiação; cortiça → condução pela tampa", correct: true },
            { letter: "b", text: "Vácuo → irradiação; espelho → condução; cortiça → convecção" },
            { letter: "c", text: "Vácuo → convecção; espelho → condução; cortiça → irradiação" },
            { letter: "d", text: "Todos os componentes combatem apenas irradiação" },
          ]}
          resolution={
            <p>
              O vácuo elimina o meio material necessário para condução e
              convecção. As paredes espelhadas (baixa emissividade) refletem a
              radiação infravermelha de volta para o conteúdo. A tampa de cortiça
              ou plástico (k baixo) reduz a condução pela abertura superior.
              Juntos, os três elementos mantêm a temperatura por horas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Isolamento de Parede: Perda Anual de Calor"
          statement={
            <p>
              A parede de uma casa tem k = 0,04&nbsp;W/m·K e espessura de
              10&nbsp;cm. A diferença média de temperatura entre interior e
              exterior é ΔT = 20&nbsp;°C. Calcule a perda de calor por metro
              quadrado de parede (W/m²).
            </p>
          }
          options={[
            { letter: "a", text: "8 W/m²", correct: true },
            { letter: "b", text: "80 W/m²" },
            { letter: "c", text: "0,8 W/m²" },
            { letter: "d", text: "0,08 W/m²" },
          ]}
          resolution={
            <>
              <M block={true}>{"P/A = \\frac{k\\,\\Delta T}{L} = \\frac{0{,}04 \\times 20}{0{,}10} = \\frac{0{,}8}{0{,}10} = 8\\,{\\rm W/m^2}"}</M>
              <p>
                Uma casa com 100&nbsp;m² de paredes perde 800&nbsp;W de forma
                contínua — equivalente a 8 lâmpadas de 100&nbsp;W funcionando
                ininterruptamente apenas pela falta de isolamento das paredes.
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
