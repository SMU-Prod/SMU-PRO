"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap28Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 28</span>
          <h1>2ª Lei da Termodinâmica: Máquinas Térmicas e Carnot</h1>
          <p>
            Estude os enunciados de Kelvin-Planck e Clausius, compreenda o
            funcionamento das máquinas térmicas e seu rendimento, descubra o
            ciclo de Carnot como limite máximo de eficiência, e aplique o
            coeficiente de desempenho (COP) a refrigeradores e bombas de calor.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Enunciado de Kelvin-Planck</span>
        <h2>1. Impossibilidade de Converter Todo Calor em Trabalho</h2>
        <p>
          O enunciado de Kelvin-Planck da Segunda Lei estabelece que nenhuma
          máquina operando em ciclos pode converter integralmente em trabalho
          o calor extraído de uma única fonte térmica. Em outras palavras: não
          existe máquina de rendimento 100% que opere de forma cíclica. Sempre
          haverá calor rejeitado para uma fonte fria.
        </p>
        <div className="lesson-highlight">
          <h3>Consequência prática</h3>
          <p>
            É impossível construir um "motor perfeito" que transforme todo
            calor de combustão em trabalho mecânico sem dissipar nada. Parte
            do calor sempre vai para o escapamento, radiador ou ambiente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Enunciado de Clausius</span>
        <h2>2. Calor Não Flui Espontaneamente do Frio para o Quente</h2>
        <p>
          O enunciado de Clausius afirma que é impossível construir um
          dispositivo cujo único efeito seja transferir calor espontaneamente
          de um corpo mais frio para um corpo mais quente. Para fazer o calor
          "subir" do frio para o quente é necessário fornecer trabalho externo
          — é exatamente o que um refrigerador ou ar-condicionado faz.
        </p>
        <p>
          Os dois enunciados (Kelvin-Planck e Clausius) são matematicamente
          equivalentes: violar um implica violar o outro.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Máquina Térmica</span>
        <h2>3. Máquina Térmica: Q₁, W e Q₂</h2>
        <p>
          Uma máquina térmica opera em ciclos entre duas fontes de temperatura:
          extrai calor Q₁ da fonte quente (T₁), converte parte em trabalho W
          e rejeita o restante Q₂ para a fonte fria (T₂). Pelo balanço
          energético (1ª Lei aplicada ao ciclo, onde ΔU = 0):
        </p>
        <M block={true}>{"W = Q_1 - Q_2"}</M>
        <p>
          O rendimento térmico η é a razão entre o trabalho útil e o calor
          total absorvido da fonte quente:
        </p>
        <M block={true}>{"\\eta = \\frac{W}{Q_1} = 1 - \\frac{Q_2}{Q_1}"}</M>
        <div className="lesson-highlight">
          <h3>Limites do rendimento</h3>
          <p>
            0 &lt; η &lt; 1 (em porcentagem: 0% &lt; η &lt; 100%). O valor de
            100% só seria atingido se Q₂ = 0, o que a Segunda Lei proíbe.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama de Fluxo</span>
        <h2>4. Diagrama de Energia da Máquina Térmica</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 380 220" width="380" height="220" aria-label="Diagrama de fluxo de energia da máquina térmica">
            {/* Hot source */}
            <rect x="130" y="10" width="120" height="50" rx="8" fill="#ffcdd2" stroke="#e53935" strokeWidth="2"/>
            <text x="190" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#c62828">FONTE QUENTE</text>
            <text x="190" y="50" textAnchor="middle" fontSize="11" fill="#c62828">T₁</text>

            {/* Engine box */}
            <rect x="140" y="90" width="100" height="50" rx="8" fill="#fff9c4" stroke="#f57f17" strokeWidth="2"/>
            <text x="190" y="112" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#e65100">MÁQUINA</text>
            <text x="190" y="128" textAnchor="middle" fontSize="10" fill="#e65100">TÉRMICA</text>

            {/* Cold sink */}
            <rect x="130" y="170" width="120" height="45" rx="8" fill="#bbdefb" stroke="#1565c0" strokeWidth="2"/>
            <text x="190" y="192" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1565c0">FONTE FRIA</text>
            <text x="190" y="208" textAnchor="middle" fontSize="11" fill="#1565c0">T₂</text>

            {/* Q1 arrow (hot → engine) */}
            <defs>
              <marker id="arrTherm" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#333"/>
              </marker>
            </defs>
            <line x1="190" y1="60" x2="190" y2="88" stroke="#e53935" strokeWidth="3" markerEnd="url(#arrTherm)"/>
            <text x="198" y="78" fontSize="11" fill="#c62828" fontWeight="bold">Q₁</text>

            {/* W arrow (engine → right) */}
            <line x1="242" y1="115" x2="310" y2="115" stroke="#f57f17" strokeWidth="3" markerEnd="url(#arrTherm)"/>
            <text x="268" y="108" fontSize="11" fill="#e65100" fontWeight="bold">W</text>
            <text x="260" y="130" fontSize="9" fill="#e65100">(trabalho útil)</text>

            {/* Q2 arrow (engine → cold) */}
            <line x1="190" y1="142" x2="190" y2="168" stroke="#1565c0" strokeWidth="3" markerEnd="url(#arrTherm)"/>
            <text x="198" y="160" fontSize="11" fill="#1565c0" fontWeight="bold">Q₂</text>

            {/* Energy conservation note */}
            <text x="30" y="115" fontSize="10" fill="#555">W = Q₁ − Q₂</text>
          </svg>
          <figcaption>
            Diagrama de fluxo de energia: a fonte quente fornece Q₁, a máquina
            converte W em trabalho útil e rejeita Q₂ para a fonte fria.
            Balanço energético: W = Q₁ − Q₂.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ciclo de Carnot</span>
        <h2>5. Ciclo de Carnot: Máxima Eficiência Teórica</h2>
        <p>
          Proposto por Sadi Carnot em 1824, o ciclo de Carnot é um ciclo
          reversível composto por dois processos isotérmicos e dois adiabáticos.
          Ele representa a máquina térmica de maior rendimento possível operando
          entre as temperaturas T₁ e T₂:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Etapa</th><th>Processo</th><th>Descrição</th></tr>
            </thead>
            <tbody>
              <tr><td>1→2</td><td>Isotérmico a T₁</td><td>Expansão; gás absorve Q₁ da fonte quente</td></tr>
              <tr><td>2→3</td><td>Adiabático</td><td>Expansão; temperatura cai de T₁ a T₂</td></tr>
              <tr><td>3→4</td><td>Isotérmico a T₂</td><td>Compressão; gás rejeita Q₂ para fonte fria</td></tr>
              <tr><td>4→1</td><td>Adiabático</td><td>Compressão; temperatura sobe de T₂ a T₁</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Rendimento de Carnot</span>
        <h2>6. Rendimento de Carnot: η = 1 − T₂/T₁</h2>
        <p>
          Para o ciclo de Carnot reversível, a razão Q₂/Q₁ é igual à razão das
          temperaturas absolutas T₂/T₁:
        </p>
        <M block={true}>{"\\eta_{\\rm Carnot} = 1 - \\frac{T_2}{T_1} \\qquad (T\\,{\\rm em\\,Kelvin})"}</M>
        <div className="lesson-highlight">
          <h3>Teorema de Carnot</h3>
          <p>
            Nenhuma máquina real que opere entre T₁ e T₂ pode ter rendimento
            maior que o de Carnot. Máquinas reais têm η &lt; η_Carnot devido a
            irreversibilidades (atrito, condução de calor com gradiente finito).
            η = 100% exigiria T₂ = 0&nbsp;K, impossível na prática.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ciclo de Carnot no Diagrama P×V</span>
        <h2>7. Ciclo de Carnot no Diagrama P×V</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 380 230" width="380" height="230" aria-label="Ciclo de Carnot no diagrama P×V">
            {/* Axes */}
            <line x1="50" y1="200" x2="360" y2="200" stroke="#333" strokeWidth="2"/>
            <line x1="50" y1="200" x2="50" y2="20" stroke="#333" strokeWidth="2"/>
            <text x="365" y="204" fontSize="11" fill="#333">V</text>
            <text x="35" y="18" fontSize="11" fill="#333">P</text>

            {/* Isothermal expansion T1 (1→2) */}
            <path d="M80,50 Q150,70 220,105" stroke="#e53935" strokeWidth="2.5" fill="none"/>
            <text x="140" y="60" fontSize="10" fill="#c62828">1→2 Isotérmica T₁</text>

            {/* Adiabatic expansion (2→3) */}
            <path d="M220,105 Q260,145 300,175" stroke="#ff9800" strokeWidth="2.5" fill="none" strokeDasharray="7,3"/>
            <text x="262" y="138" fontSize="10" fill="#e65100">2→3 Adiab.</text>

            {/* Isothermal compression T2 (3→4) */}
            <path d="M300,175 Q230,162 160,148" stroke="#1565c0" strokeWidth="2.5" fill="none"/>
            <text x="205" y="175" fontSize="10" fill="#1565c0">3→4 Isotérmica T₂</text>

            {/* Adiabatic compression (4→1) */}
            <path d="M160,148 Q110,110 80,50" stroke="#ff9800" strokeWidth="2.5" fill="none" strokeDasharray="7,3"/>
            <text x="90" y="120" fontSize="10" fill="#e65100">4→1 Adiab.</text>

            {/* Shaded area inside cycle */}
            <path d="M80,50 Q150,70 220,105 Q260,145 300,175 Q230,162 160,148 Q110,110 80,50"
              fill="#ffe0b2" opacity="0.4"/>

            {/* Points */}
            <circle cx="80" cy="50" r="4" fill="#333"/>
            <text x="62" y="46" fontSize="10" fill="#333">1</text>
            <circle cx="220" cy="105" r="4" fill="#333"/>
            <text x="222" y="100" fontSize="10" fill="#333">2</text>
            <circle cx="300" cy="175" r="4" fill="#333"/>
            <text x="304" y="178" fontSize="10" fill="#333">3</text>
            <circle cx="160" cy="148" r="4" fill="#333"/>
            <text x="142" y="150" fontSize="10" fill="#333">4</text>

            {/* Area label */}
            <text x="195" y="130" textAnchor="middle" fontSize="10" fill="#e65100" fontWeight="bold">W (área)</text>

            {/* Arrows of circulation (clockwise) */}
            <text x="185" y="215" textAnchor="middle" fontSize="9" fill="#777">Sentido horário → máquina motora (W &gt; 0)</text>
          </svg>
          <figcaption>
            Ciclo de Carnot no diagrama P×V. Etapas isotérmicas em vermelho e
            azul; adiabáticas em laranja tracejado. A área interna ao ciclo
            representa o trabalho líquido W realizado pelo gás.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Refrigerador</span>
        <h2>8. Máquina Frigorífica: W + Q₂ = Q₁</h2>
        <p>
          Um refrigerador é uma máquina térmica operando no sentido inverso
          (anti-horário no diagrama P×V): recebe trabalho externo W para
          transferir calor Q₂ da fonte fria para a fonte quente. O balanço
          energético é:
        </p>
        <M block={true}>{"Q_1 = W + Q_2"}</M>
        <p>
          O calor total liberado para o ambiente quente (Q₁) é sempre maior
          que o calor absorvido do compartimento frio (Q₂), pois inclui o
          trabalho do compressor. Por isso geladeiras rejeitam mais calor para
          a cozinha do que absorvem do interior.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Coeficiente de Desempenho</span>
        <h2>9. COP: Eficiência de Refrigeradores e Bombas de Calor</h2>
        <p>
          O coeficiente de desempenho (COP) mede a eficiência de máquinas que
          operam como refrigeradores ou bombas de calor:
        </p>
        <M block={true}>{"\\text{COP}_{\\rm frig} = \\frac{Q_2}{W} = \\frac{Q_2}{Q_1 - Q_2}"}</M>
        <M block={true}>{"\\text{COP}_{\\rm bc} = \\frac{Q_1}{W} = \\frac{Q_1}{Q_1 - Q_2}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Dispositivo</th><th>O que maximizar</th><th>COP típico</th></tr>
            </thead>
            <tbody>
              <tr><td>Geladeira doméstica</td><td>Q₂ (calor retirado de dentro)</td><td>2 a 4</td></tr>
              <tr><td>Ar-condicionado</td><td>Q₂ (resfriamento do ambiente)</td><td>2,5 a 5</td></tr>
              <tr><td>Bomba de calor (aquecimento)</td><td>Q₁ (calor fornecido ao ambiente)</td><td>3 a 6</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Entropia</span>
        <h2>10. Entropia e Irreversibilidade: ΔS ≥ 0</h2>
        <p>
          A entropia S é uma função de estado que mede o grau de desordem
          (ou o número de microestados) de um sistema. Ela é definida para
          processos reversíveis como:
        </p>
        <M block={true}>{"\\Delta S = \\frac{Q}{T} \\quad ({\\rm processo\\ reversível})"}</M>
        <p>
          O princípio de aumento da entropia (2ª Lei em termos de S) enuncia:
        </p>
        <M block={true}>{"\\Delta S_{\\rm universo} \\geq 0"}</M>
        <p>
          A igualdade vale para processos reversíveis ideais; processos reais
          (irreversíveis) sempre geram entropia positiva. A entropia explica a
          "seta do tempo": processos espontâneos vão no sentido de maior
          desordem.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplos de aumento de entropia</h3>
          <p>
            Café quente esfriando — gás se expandindo no vácuo — mistura de
            gases — fusão de gelo — combustão. Em todos, ΔS_universo &gt; 0.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela Comparativa</span>
        <h2>11. Resumo: Rendimentos e COPs</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Grandeza</th><th>Fórmula</th><th>Comentário</th></tr>
            </thead>
            <tbody>
              <tr><td>Rendimento real</td><td>η = W/Q₁ = 1 − Q₂/Q₁</td><td>0 &lt; η &lt; 1</td></tr>
              <tr><td>Rendimento Carnot</td><td>η_C = 1 − T₂/T₁</td><td>Limite superior, T em Kelvin</td></tr>
              <tr><td>COP refrigerador</td><td>COP_f = Q₂/W</td><td>Pode ser &gt; 1</td></tr>
              <tr><td>COP bomba de calor</td><td>COP_bc = Q₁/W</td><td>COP_bc = COP_f + 1</td></tr>
              <tr><td>Variação de entropia</td><td>ΔS = Q/T</td><td>ΔS_universo ≥ 0</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo das Fórmulas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>η</span>
            <h3>Rendimento</h3>
            <M block={true}>{"\\eta = 1 - \\frac{Q_2}{Q_1}"}</M>
          </div>
          <div className="math-card">
            <span>η_C</span>
            <h3>Carnot</h3>
            <M block={true}>{"\\eta_C = 1 - \\frac{T_2}{T_1}"}</M>
          </div>
          <div className="math-card">
            <span>W</span>
            <h3>Trabalho</h3>
            <M block={true}>{"W = Q_1 - Q_2"}</M>
          </div>
          <div className="math-card">
            <span>COP_f</span>
            <h3>Refrigerador</h3>
            <M block={true}>{"\\text{COP} = Q_2/W"}</M>
          </div>
          <div className="math-card">
            <span>ΔS</span>
            <h3>Entropia</h3>
            <M block={true}>{"\\Delta S = Q/T"}</M>
          </div>
          <div className="math-card">
            <span>2ª Lei</span>
            <h3>Universo</h3>
            <M block={true}>{"\\Delta S_{\\rm univ} \\geq 0"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Rendimento e Calor Rejeitado"
          statement={
            <p>
              Uma máquina térmica absorve Q₁ = 1&nbsp;000&nbsp;J da fonte
              quente e realiza W = 400&nbsp;J de trabalho. Calcule o
              rendimento η e o calor Q₂ rejeitado para a fonte fria.
            </p>
          }
          options={[
            { letter: "a", text: "η = 40%; Q₂ = 600 J", correct: true },
            { letter: "b", text: "η = 60%; Q₂ = 400 J" },
            { letter: "c", text: "η = 40%; Q₂ = 400 J" },
            { letter: "d", text: "η = 60%; Q₂ = 600 J" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\eta = \\frac{W}{Q_1} = \\frac{400}{1000} = 0{,}40 = 40\\%"}</M>
              <M block={true}>{"Q_2 = Q_1 - W = 1000 - 400 = 600\\,{\\rm J}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Máquina de Carnot"
          statement={
            <p>
              Uma máquina de Carnot opera entre T₁ = 600&nbsp;K e T₂ = 300&nbsp;K.
              (a) Calcule η_Carnot. (b) Se Q₁ = 2&nbsp;000&nbsp;J, encontre
              W e Q₂.
            </p>
          }
          options={[
            { letter: "a", text: "η = 50%; W = 1 000 J; Q₂ = 1 000 J", correct: true },
            { letter: "b", text: "η = 50%; W = 500 J; Q₂ = 1 500 J" },
            { letter: "c", text: "η = 25%; W = 500 J; Q₂ = 1 500 J" },
            { letter: "d", text: "η = 75%; W = 1 500 J; Q₂ = 500 J" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\eta_C = 1 - \\frac{T_2}{T_1} = 1 - \\frac{300}{600} = 0{,}50 = 50\\%"}</M>
              <M block={true}>{"W = \\eta_C \\times Q_1 = 0{,}50 \\times 2000 = 1\\,000\\,{\\rm J}"}</M>
              <M block={true}>{"Q_2 = Q_1 - W = 2000 - 1000 = 1\\,000\\,{\\rm J}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Comparação: Real vs Carnot"
          statement={
            <p>
              Uma máquina real opera entre as mesmas temperaturas que uma
              máquina de Carnot: T₁ = 500&nbsp;K e T₂ = 250&nbsp;K. A máquina
              real tem η_real = 35%. Q₁_real = 5&nbsp;000&nbsp;J. Calcule W_real
              e a eficiência relativa η_real/η_Carnot.
            </p>
          }
          options={[
            { letter: "a", text: "W = 1 750 J; eficiência relativa = 70%", correct: true },
            { letter: "b", text: "W = 2 500 J; eficiência relativa = 70%" },
            { letter: "c", text: "W = 1 750 J; eficiência relativa = 35%" },
            { letter: "d", text: "W = 1 250 J; eficiência relativa = 50%" },
          ]}
          resolution={
            <>
              <M block={true}>{"W_{\\rm real} = \\eta_{\\rm real} \\times Q_1 = 0{,}35 \\times 5000 = 1\\,750\\,{\\rm J}"}</M>
              <M block={true}>{"\\eta_{\\rm Carnot} = 1 - \\frac{250}{500} = 0{,}50 = 50\\%"}</M>
              <M block={true}>{"\\frac{\\eta_{\\rm real}}{\\eta_{\\rm Carnot}} = \\frac{35\\%}{50\\%} = 0{,}70 = 70\\%"}</M>
              <p>A máquina real opera a 70% do limite teórico de Carnot — valor razoável para uma turbina moderna.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Usina Termelétrica e o Limite de Carnot"
          statement={
            <p>
              Uma usina termelétrica a vapor opera com vapor a 550&nbsp;°C e
              rejeita calor para um rio a 30&nbsp;°C. Calcule o rendimento
              máximo (Carnot) e compare com o rendimento típico real de 40%.
            </p>
          }
          options={[
            { letter: "a", text: "η_Carnot ≈ 63%; rendimento real é 40% do teórico", correct: true },
            { letter: "b", text: "η_Carnot ≈ 40%; rendimento real = Carnot" },
            { letter: "c", text: "η_Carnot ≈ 94%; rendimento real é 43% do teórico" },
            { letter: "d", text: "η_Carnot ≈ 63%; rendimento real supera o Carnot" },
          ]}
          resolution={
            <>
              <M block={true}>{"T_1 = 550 + 273 = 823\\,{\\rm K} \\qquad T_2 = 30 + 273 = 303\\,{\\rm K}"}</M>
              <M block={true}>{"\\eta_C = 1 - \\frac{303}{823} \\approx 1 - 0{,}368 = 0{,}632 \\approx 63{,}2\\%"}</M>
              <p>
                O rendimento real de 40% representa 40/63,2 ≈ 63% da
                eficiência teórica máxima. As perdas restantes se devem a
                atrito, trocas de calor com gradiente finito e outras
                irreversibilidades do processo real.
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Ar-Condicionado: COP e Potência Consumida"
          statement={
            <p>
              Um ar-condicionado tem COP_frig = 3,5 e remove Q₂ = 7&nbsp;000&nbsp;BTU/h
              do ambiente interno. Sabendo que 1&nbsp;BTU/h = 0,293&nbsp;W,
              calcule a potência elétrica consumida (W) e o calor liberado
              para fora (Q₁ em BTU/h).
            </p>
          }
          options={[
            { letter: "a", text: "W ≈ 585 W; Q₁ = 9 000 BTU/h", correct: true },
            { letter: "b", text: "W ≈ 2 050 W; Q₁ = 7 000 BTU/h" },
            { letter: "c", text: "W ≈ 585 W; Q₁ = 7 000 BTU/h" },
            { letter: "d", text: "W ≈ 1 170 W; Q₁ = 14 000 BTU/h" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\text{COP} = \\frac{Q_2}{W} \\Rightarrow W = \\frac{Q_2}{\\text{COP}} = \\frac{7000\\,{\\rm BTU/h}}{3{,}5} = 2000\\,{\\rm BTU/h}"}</M>
              <M block={true}>{"W_{\\rm elétrico} = 2000 \\times 0{,}293 \\approx 586\\,{\\rm W} \\approx 585\\,{\\rm W}"}</M>
              <M block={true}>{"Q_1 = Q_2 + W_{\\rm BTU} = 7000 + 2000 = 9000\\,{\\rm BTU/h}"}</M>
              <p>
                O aparelho libera 9&nbsp;000&nbsp;BTU/h para o exterior —
                mais do que absorve do interior (7&nbsp;000), pois a diferença
                (2&nbsp;000&nbsp;BTU/h) vem da energia elétrica do compressor.
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
