"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap27Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 27</span>
          <h1>1ª Lei da Termodinâmica: Trabalho Gasoso e Energia Interna</h1>
          <p>
            Domine os conceitos de energia interna U, calor Q e trabalho W de
            um gás. Aplique a Primeira Lei ΔU = Q − W aos quatro processos
            fundamentais (isotérmico, isobárico, isocórico e adiabático) e
            interprete o trabalho como área sob a curva no diagrama P×V.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Energia Interna</span>
        <h2>1. Energia Interna U: Microscopia do Calor</h2>
        <p>
          A energia interna U de um sistema gasoso é a soma de todas as
          energias cinéticas de translação, rotação e vibração das moléculas,
          mais as energias potenciais de interação entre elas. Para um gás ideal,
          as forças intermoleculares são nulas fora das colisões, de modo que U
          depende apenas da temperatura absoluta T:
        </p>
        <M block={true}>{"U = \\frac{f}{2}\\,nRT"}</M>
        <p>
          onde f é o número de graus de liberdade (f = 3 para gás monoatômico,
          f = 5 para diatômico). Para gás monoatômico ideal:
        </p>
        <M block={true}>{"U = \\frac{3}{2}\\,nRT \\qquad \\Delta U = \\frac{3}{2}\\,nR\\,\\Delta T"}</M>
        <div className="lesson-highlight">
          <h3>Consequência fundamental</h3>
          <p>
            Para gás ideal, ΔU depende apenas de ΔT — independe do caminho
            (processo) seguido. Se ΔT = 0 (processo isotérmico), então ΔU = 0.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Calor</span>
        <h2>2. Calor Q: Energia Trocada por Diferença de Temperatura</h2>
        <p>
          O calor Q é a energia que flui através das fronteiras do sistema
          exclusivamente em virtude de uma diferença de temperatura entre o
          sistema e a vizinhança. A convenção de sinais adotada na termodinâmica:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Sinal</th><th>Significado</th></tr>
            </thead>
            <tbody>
              <tr><td>Q &gt; 0</td><td>Sistema recebe calor da vizinhança (aquece)</td></tr>
              <tr><td>Q &lt; 0</td><td>Sistema cede calor para a vizinhança (esfria)</td></tr>
              <tr><td>Q = 0</td><td>Processo adiabático (sem troca de calor)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Trabalho</span>
        <h2>3. Trabalho W: Realizado pelo Gás em Expansão</h2>
        <p>
          Quando um gás pressiona e desloca um êmbolo, ele realiza trabalho sobre
          o exterior. Para pressão constante (processo isobárico):
        </p>
        <M block={true}>{"W = P \\cdot \\Delta V = P(V_f - V_i)"}</M>
        <p>
          Para um processo genérico, W é a área sob a curva no diagrama P×V.
          Convenção de sinais:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Sinal de W</th><th>Situação</th></tr>
            </thead>
            <tbody>
              <tr><td>W &gt; 0</td><td>Expansão (ΔV &gt; 0): gás realiza trabalho sobre a vizinhança</td></tr>
              <tr><td>W &lt; 0</td><td>Compressão (ΔV &lt; 0): vizinhança realiza trabalho sobre o gás</td></tr>
              <tr><td>W = 0</td><td>Processo isocórico (ΔV = 0)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">1ª Lei da Termodinâmica</span>
        <h2>4. A Primeira Lei: ΔU = Q − W</h2>
        <p>
          A Primeira Lei da Termodinâmica é a expressão do princípio de
          conservação da energia para sistemas térmicos: o calor recebido pelo
          sistema divide-se entre aumento de energia interna e trabalho
          realizado pelo gás:
        </p>
        <M block={true}>{"\\Delta U = Q - W"}</M>
        <p>
          Ou, de forma equivalente: Q = ΔU + W. Toda a energia entra e sai
          contabilizada — a Primeira Lei não permite criação nem destruição de
          energia, apenas sua transformação e transferência.
        </p>
        <div className="lesson-highlight">
          <h3>Enunciado histórico</h3>
          <p>
            É impossível construir uma máquina de movimento perpétuo de
            primeiro tipo (que produza trabalho sem consumir energia). A
            Primeira Lei proíbe isso.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Trabalho no Diagrama P×V</span>
        <h2>5. Trabalho como Área sob a Curva P×V</h2>
        <p>
          No diagrama P×V, o trabalho realizado pelo gás em qualquer processo é
          igual à área entre a curva do processo e o eixo horizontal V. Para o
          processo isobárico, essa área é um retângulo.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 380 220" width="380" height="220" aria-label="Diagrama P×V com área de trabalho isobárico hachurada">
            {/* Axes */}
            <line x1="50" y1="190" x2="360" y2="190" stroke="#333" strokeWidth="2"/>
            <line x1="50" y1="190" x2="50" y2="30" stroke="#333" strokeWidth="2"/>
            <text x="365" y="194" fontSize="11" fill="#333">V</text>
            <text x="35" y="28" fontSize="11" fill="#333">P</text>

            {/* Shaded area (work = P × ΔV rectangle) */}
            <rect x="100" y="100" width="200" height="90" fill="#bbdefb" opacity="0.7"/>

            {/* Isobaric process line */}
            <line x1="100" y1="100" x2="300" y2="100" stroke="#1565c0" strokeWidth="3"/>

            {/* Vertical dashed lines */}
            <line x1="100" y1="100" x2="100" y2="190" stroke="#1565c0" strokeWidth="1.5" strokeDasharray="5,4"/>
            <line x1="300" y1="100" x2="300" y2="190" stroke="#1565c0" strokeWidth="1.5" strokeDasharray="5,4"/>

            {/* P label */}
            <text x="35" y="104" fontSize="11" fill="#1565c0">P</text>
            <line x1="48" y1="100" x2="55" y2="100" stroke="#1565c0" strokeWidth="1.5"/>

            {/* V1, V2 labels */}
            <text x="95" y="205" fontSize="10" fill="#555" textAnchor="middle">V₁</text>
            <text x="300" y="205" fontSize="10" fill="#555" textAnchor="middle">V₂</text>

            {/* Work label inside shaded area */}
            <text x="200" y="150" fontSize="13" textAnchor="middle" fill="#1565c0" fontWeight="bold">W = P·ΔV</text>
            <text x="200" y="168" fontSize="10" textAnchor="middle" fill="#1565c0">(área hachurada)</text>

            {/* Points */}
            <circle cx="100" cy="100" r="4" fill="#1565c0"/>
            <text x="80" y="94" fontSize="9" fill="#1565c0">(P, V₁)</text>
            <circle cx="300" cy="100" r="4" fill="#1565c0"/>
            <text x="302" y="94" fontSize="9" fill="#1565c0">(P, V₂)</text>

            {/* Arrow direction */}
            <defs>
              <marker id="arr2" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#1565c0"/>
              </marker>
            </defs>
            <line x1="100" y1="80" x2="290" y2="80" stroke="#1565c0" strokeWidth="1.5" markerEnd="url(#arr2)" strokeDasharray="8,4"/>
            <text x="195" y="74" textAnchor="middle" fontSize="9" fill="#1565c0">expansão →</text>
          </svg>
          <figcaption>
            Processo isobárico: o gás se expande de V₁ a V₂ sob pressão
            constante P. O trabalho W = P·ΔV é a área do retângulo azul
            hachurado entre a curva e o eixo V.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Processos e a 1ª Lei</span>
        <h2>6. Aplicação da 1ª Lei aos Quatro Processos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Processo</th>
                <th>Restrição</th>
                <th>W</th>
                <th>Q</th>
                <th>ΔU</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Isotérmico</td><td>T = cte → ΔU = 0</td><td>Q</td><td>W</td><td>0</td></tr>
              <tr><td>Isobárico</td><td>P = cte</td><td>PΔV</td><td>ΔU + PΔV</td><td>Q − PΔV</td></tr>
              <tr><td>Isocórico</td><td>V = cte → W = 0</td><td>0</td><td>ΔU</td><td>Q</td></tr>
              <tr><td>Adiabático</td><td>Q = 0</td><td>−ΔU</td><td>0</td><td>−W</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Processo Adiabático</span>
        <h2>7. Processo Adiabático: Q = 0</h2>
        <p>
          Um processo adiabático ocorre tão rapidamente que não há troca de
          calor com a vizinhança, ou o sistema está termicamente isolado. Pela
          Primeira Lei:
        </p>
        <M block={true}>{"Q = 0 \\Rightarrow \\Delta U = -W"}</M>
        <p>
          Se o gás se expande (W &gt; 0), ele perde energia interna e esfria
          (ΔU &lt; 0). Se é comprimido (W &lt; 0), ganha energia e aquece
          (ΔU &gt; 0). Exemplos: compressor de bicicleta aquece; expansão
          rápida de gás em spray resfria.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação de Processos</span>
        <h2>8. Diagrama P×V com Quatro Processos</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 380 220" width="380" height="220" aria-label="Diagrama P×V com quatro processos: isotérmico, isobárico, isocórico e adiabático">
            {/* Axes */}
            <line x1="50" y1="190" x2="360" y2="190" stroke="#333" strokeWidth="2"/>
            <line x1="50" y1="190" x2="50" y2="20" stroke="#333" strokeWidth="2"/>
            <text x="365" y="194" fontSize="11" fill="#333">V</text>
            <text x="35" y="18" fontSize="11" fill="#333">P</text>

            {/* Starting point */}
            <circle cx="120" cy="80" r="5" fill="#333"/>
            <text x="100" y="74" fontSize="9" fill="#333">A</text>

            {/* Isothermal (hyperbola, moderate slope) */}
            <path d="M120,80 Q190,110 290,155" stroke="#ef5350" strokeWidth="2.5" fill="none"/>
            <text x="260" y="148" fontSize="10" fill="#c62828">Isotérmica</text>

            {/* Adiabatic (steeper hyperbola) */}
            <path d="M120,80 Q175,120 260,172" stroke="#ff9800" strokeWidth="2.5" fill="none" strokeDasharray="7,3"/>
            <text x="210" y="180" fontSize="10" fill="#e65100">Adiabática</text>

            {/* Isobaric (horizontal) */}
            <line x1="120" y1="80" x2="310" y2="80" stroke="#1565c0" strokeWidth="2.5"/>
            <text x="265" y="73" fontSize="10" fill="#1565c0">Isobárica</text>

            {/* Isochoric (vertical) */}
            <line x1="120" y1="80" x2="120" y2="185" stroke="#2e7d32" strokeWidth="2.5"/>
            <text x="55" y="150" fontSize="10" fill="#2e7d32">Isocórica</text>

            {/* Legend note */}
            <text x="200" y="215" textAnchor="middle" fontSize="9" fill="#777">A: ponto inicial comum</text>
          </svg>
          <figcaption>
            Quatro processos partindo do mesmo estado A: isobárica (azul),
            isotérmica (vermelho), adiabática (laranja tracejado) e isocórica
            (verde). A adiabática é mais íngreme que a isotérmica no diagrama P×V.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Calores Específicos de Gases</span>
        <h2>9. Cv e Cp: Calores Específicos a Volume e Pressão Constantes</h2>
        <p>
          Gases têm dois calores específicos molares distintos: a volume constante
          (Cv) e a pressão constante (Cp). A pressão constante, além de aquecer
          o gás, ele se expande realizando trabalho — por isso Cp &gt; Cv.
        </p>
        <M block={true}>{"C_v = \\frac{f}{2}R \\qquad C_p = C_v + R"}</M>
        <p>
          A relação de Mayer Cp − Cv = R é válida para qualquer gás ideal.
          O índice adiabático γ = Cp/Cv aparece na equação do processo
          adiabático: PVᵞ = constante.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relação de Mayer</span>
        <h2>10. Relação de Mayer: Cp − Cv = R</h2>
        <M block={true}>{"C_p - C_v = R = 8{,}314\\,{\\rm J/mol\\cdot K}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo de gás</th><th>f</th><th>Cv (J/mol·K)</th><th>Cp (J/mol·K)</th><th>γ = Cp/Cv</th></tr>
            </thead>
            <tbody>
              <tr><td>Monoatômico (He, Ar)</td><td>3</td><td>12,5</td><td>20,8</td><td>1,67</td></tr>
              <tr><td>Diatômico (N₂, O₂)</td><td>5</td><td>20,8</td><td>29,1</td><td>1,40</td></tr>
              <tr><td>Poliatômico (CO₂)</td><td>6</td><td>24,9</td><td>33,3</td><td>1,30</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela de Sinais</span>
        <h2>11. Sinais de Q, W e ΔU nos Quatro Processos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Processo</th><th>Q</th><th>W</th><th>ΔU</th></tr>
            </thead>
            <tbody>
              <tr><td>Isotérmico (expansão)</td><td>&gt; 0</td><td>&gt; 0</td><td>= 0</td></tr>
              <tr><td>Isobárico (expansão)</td><td>&gt; 0</td><td>&gt; 0</td><td>&gt; 0</td></tr>
              <tr><td>Isocórico (aquecimento)</td><td>&gt; 0</td><td>= 0</td><td>&gt; 0</td></tr>
              <tr><td>Adiabático (expansão)</td><td>= 0</td><td>&gt; 0</td><td>&lt; 0</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo das Fórmulas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>1ª Lei</span>
            <h3>Termodinâmica</h3>
            <M block={true}>{"\\Delta U = Q - W"}</M>
          </div>
          <div className="math-card">
            <span>W</span>
            <h3>Trabalho isobárico</h3>
            <M block={true}>{"W = P\\,\\Delta V"}</M>
          </div>
          <div className="math-card">
            <span>U</span>
            <h3>Energia interna (mono)</h3>
            <M block={true}>{"U = \\tfrac{3}{2}nRT"}</M>
          </div>
          <div className="math-card">
            <span>Mayer</span>
            <h3>Cp − Cv</h3>
            <M block={true}>{"C_p - C_v = R"}</M>
          </div>
          <div className="math-card">
            <span>Adiab.</span>
            <h3>Q = 0</h3>
            <M block={true}>{"\\Delta U = -W"}</M>
          </div>
          <div className="math-card">
            <span>Isocórico</span>
            <h3>W = 0</h3>
            <M block={true}>{"\\Delta U = Q"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Aplicação Direta da 1ª Lei"
          statement={
            <p>
              Um gás absorbe Q = 500&nbsp;J de calor e realiza W = 200&nbsp;J
              de trabalho sobre a vizinhança. Qual é a variação de energia
              interna ΔU?
            </p>
          }
          options={[
            { letter: "a", text: "700 J" },
            { letter: "b", text: "300 J", correct: true },
            { letter: "c", text: "−300 J" },
            { letter: "d", text: "200 J" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\Delta U = Q - W = 500 - 200 = 300\\,{\\rm J}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Processo Isobárico — W e ΔU"
          statement={
            <p>
              Um gás sofre expansão isobárica a P = 2×10⁵&nbsp;Pa, com volume
              inicial de 3&nbsp;L e final de 8&nbsp;L. Se Q = 1&nbsp;500&nbsp;J,
              calcule W e ΔU.
            </p>
          }
          options={[
            { letter: "a", text: "W = 1 000 J; ΔU = 500 J", correct: true },
            { letter: "b", text: "W = 500 J; ΔU = 1 000 J" },
            { letter: "c", text: "W = 1 500 J; ΔU = 0" },
            { letter: "d", text: "W = 2 000 J; ΔU = −500 J" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\Delta V = (8-3)\\times10^{-3}\\,{\\rm m^3} = 5\\times10^{-3}\\,{\\rm m^3}"}</M>
              <M block={true}>{"W = P\\,\\Delta V = 2\\times10^5 \\times 5\\times10^{-3} = 1\\,000\\,{\\rm J}"}</M>
              <M block={true}>{"\\Delta U = Q - W = 1\\,500 - 1\\,000 = 500\\,{\\rm J}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Processo Isocórico e Adiabático em Sequência"
          statement={
            <p>
              (a) Processo isocórico: gás recebe Q = 800&nbsp;J — encontre W e
              ΔU. (b) Processo adiabático subsequente: trabalho de 600&nbsp;J
              é realizado <em>sobre</em> o gás — encontre ΔU.
            </p>
          }
          options={[
            { letter: "a", text: "(a) W=0, ΔU=800 J; (b) ΔU=+600 J", correct: true },
            { letter: "b", text: "(a) W=0, ΔU=800 J; (b) ΔU=−600 J" },
            { letter: "c", text: "(a) W=800 J, ΔU=0; (b) ΔU=+600 J" },
            { letter: "d", text: "(a) W=0, ΔU=0; (b) ΔU=600 J" },
          ]}
          resolution={
            <>
              <p><strong>(a) Isocórico:</strong> V constante → W = 0</p>
              <M block={true}>{"\\Delta U = Q - W = 800 - 0 = 800\\,{\\rm J}"}</M>
              <p><strong>(b) Adiabático:</strong> Q = 0; trabalho feito <em>sobre</em> o gás → W = −600&nbsp;J (gás recebe trabalho)</p>
              <M block={true}>{"\\Delta U = Q - W = 0 - (-600) = +600\\,{\\rm J}"}</M>
              <p>O gás aquece ao ser comprimido adiabaticamente.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Bomba de Bicicleta Aquece"
          statement={
            <p>
              Ao bombear um pneu rapidamente, a bomba de bicicleta aquece.
              Explique fisicamente esse fenômeno usando a 1ª Lei da
              Termodinâmica.
            </p>
          }
          options={[
            { letter: "a", text: "Compressão adiabática: W &lt; 0 (trabalho sobre o gás) → ΔU &gt; 0 → temperatura aumenta", correct: true },
            { letter: "b", text: "Atrito mecânico nas paredes é a única causa do aquecimento" },
            { letter: "c", text: "O ar absorve calor do ambiente durante a compressão" },
            { letter: "d", text: "A expansão adiabática aquece o gás" },
          ]}
          resolution={
            <p>
              O processo de compressão rápida é aproximadamente adiabático
              (Q ≈ 0, pois é rápido demais para trocar calor com a vizinhança).
              Ao comprimir o ar (W feito <em>sobre</em> o gás é negativo na
              nossa convenção, ou seja, ΔU = −W = +|W|), a energia interna
              aumenta e, para gás ideal, isso significa aumento de temperatura.
              Por isso a bomba e o ar interno ficam quentes.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Refrigerador e a 1ª Lei"
          statement={
            <p>
              Em um ciclo de operação de um refrigerador, o compressor realiza
              W = 400&nbsp;J de trabalho e o fluido refrigerante absorve
              Q₂ = 1&nbsp;200&nbsp;J do compartimento frio. Quanto calor Q₁
              é liberado para o ambiente externo?
            </p>
          }
          options={[
            { letter: "a", text: "Q₁ = 800 J" },
            { letter: "b", text: "Q₁ = 1 600 J", correct: true },
            { letter: "c", text: "Q₁ = 400 J" },
            { letter: "d", text: "Q₁ = 1 200 J" },
          ]}
          resolution={
            <>
              <p>
                Pelo balanço energético do ciclo (ΔU = 0 em ciclo completo):
              </p>
              <M block={true}>{"Q_1 = W + Q_2 = 400 + 1\\,200 = 1\\,600\\,{\\rm J}"}</M>
              <p>
                O refrigerador descarta para o ambiente 1&nbsp;600&nbsp;J por
                ciclo — mais do que absorveu do interior (1&nbsp;200&nbsp;J),
                pois o compressor acrescentou 400&nbsp;J de trabalho elétrico
                ao sistema.
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
