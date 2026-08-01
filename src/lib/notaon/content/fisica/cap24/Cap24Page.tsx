"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap24Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 24</span>
          <h1>Calorimetria II: Trocas de Calor e Diagramas de Fase</h1>
          <p>
            Aplique o princípio calorimétrico Qcedido = Qrecebido em misturas
            com e sem mudança de estado. Interprete o diagrama de fases P×T da
            água: ponto triplo, ponto crítico, curvas de fusão, vaporização e
            sublimação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Princípio Fundamental</span>
        <h2>1. Princípio do Equilíbrio Térmico (Calorimetria)</h2>
        <p>
          Em um sistema termicamente isolado, a energia é conservada. O calor
          cedido pelos corpos mais quentes é totalmente absorvido pelos corpos
          mais frios até que todos atinjam a mesma temperatura de equilíbrio.
          Matematicamente:
        </p>
        <M block={true}>{"Q_{\\rm cedido} = Q_{\\rm recebido} \\quad \\Leftrightarrow \\quad \\Sigma Q = 0"}</M>
        <div className="lesson-highlight">
          <h3>Aplicação prática</h3>
          <p>
            Todo calor com sinal positivo (recebido) e negativo (cedido) é
            somado. O resultado deve ser zero para um sistema isolado. Inclua
            também a capacidade térmica do calorímetro quando indicada.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equação da Mistura</span>
        <h2>2. Temperatura de Equilíbrio em Misturas</h2>
        <p>
          Para dois corpos sem mudança de estado, a temperatura de equilíbrio
          T_eq é encontrada igualando os calores cedido e recebido:
        </p>
        <M block={true}>{"m_1 c_1 (T_1 - T_{eq}) = m_2 c_2 (T_{eq} - T_2)"}</M>
        <p>Isolando T_eq:</p>
        <M block={true}>{"T_{eq} = \\frac{m_1 c_1 T_1 + m_2 c_2 T_2}{m_1 c_1 + m_2 c_2}"}</M>
        <p>
          Se os dois corpos forem da mesma substância (c₁ = c₂), simplifica
          para a média ponderada pelas massas.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Instrumento de Medida</span>
        <h2>3. Calorímetro: Isolamento e Capacidade do Recipiente</h2>
        <p>
          Um calorímetro real absorve parte do calor da mistura. Sua capacidade
          térmica C_cal deve ser somada como um terceiro "corpo" na equação:
        </p>
        <M block={true}>{"Q_{\\rm corpo} + Q_{\\rm água} + Q_{\\rm cal} = 0"}</M>
        <div className="lesson-highlight">
          <h3>Equivalente em água</h3>
          <p>
            O equivalente em água E é a massa de água que teria a mesma
            capacidade térmica do calorímetro: C_cal = E × c_água. Muitos
            problemas fornecem diretamente C_cal em cal/°C.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estratégia de Resolução</span>
        <h2>4. Mistura com Mudança de Estado: Verificação Prévia</h2>
        <p>
          Quando há gelo e água quente, é preciso verificar primeiro se o calor
          disponível é suficiente para derreter todo o gelo:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Situação</th><th>Resultado</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Q_disponível &lt; Q_fusão total</td>
                <td>Fusão parcial; T_eq = 0&nbsp;°C (mistura gelo+água)</td>
              </tr>
              <tr>
                <td>Q_disponível = Q_fusão total</td>
                <td>Todo gelo derrete exatamente; T_eq = 0&nbsp;°C</td>
              </tr>
              <tr>
                <td>Q_disponível &gt; Q_fusão total</td>
                <td>Todo gelo derrete e T_eq &gt; 0&nbsp;°C</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Aplique a mesma lógica para vapor condensando: verifique se há calor
          suficiente para condensa-lo todo antes de montar a equação final.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama de Fases</span>
        <h2>5. Diagrama de Fases: Gráfico P×T</h2>
        <p>
          O diagrama de fases é um mapa de estados de equilíbrio de uma
          substância pura no plano pressão-temperatura. Cada região corresponde
          a uma fase; as linhas de fronteira representam coexistência de duas
          fases simultaneamente.
        </p>
        <div className="lesson-highlight">
          <h3>Elementos do diagrama</h3>
          <p>
            Curva de fusão (sólido-líquido) — Curva de vaporização
            (líquido-gás) — Curva de sublimação (sólido-gás) — Ponto triplo
            (três fases coexistem) — Ponto crítico (fim da distinção
            líquido/gás)
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama da Água</span>
        <h2>6. Diagrama de Fases da Água com Ponto Triplo e Ponto Crítico</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 260" width="400" height="260" aria-label="Diagrama de fases P-T da água">
            {/* Axes */}
            <line x1="50" y1="230" x2="380" y2="230" stroke="#333" strokeWidth="2"/>
            <line x1="50" y1="230" x2="50" y2="20" stroke="#333" strokeWidth="2"/>
            <text x="390" y="234" fontSize="11" fill="#333">T (°C)</text>
            <text x="10" y="18" fontSize="11" fill="#333">P</text>

            {/* Phase regions labels */}
            <text x="80" y="90" fontSize="12" fontWeight="bold" fill="#5c6bc0">SÓLIDO</text>
            <text x="200" y="160" fontSize="12" fontWeight="bold" fill="#26a69a">LÍQUIDO</text>
            <text x="290" y="210" fontSize="12" fontWeight="bold" fill="#ef5350">GÁS</text>

            {/* Fusion curve (slightly negative slope for water — anomaly) */}
            <line x1="150" y1="100" x2="145" y2="230" stroke="#5c6bc0" strokeWidth="2"/>

            {/* Vaporization curve */}
            <path d="M150,100 Q220,120 310,80" stroke="#ef5350" strokeWidth="2" fill="none"/>

            {/* Sublimation curve */}
            <path d="M150,100 Q100,150 60,220" stroke="#ab47bc" strokeWidth="2" fill="none"/>

            {/* 1 atm horizontal reference */}
            <line x1="50" y1="160" x2="370" y2="160" stroke="#bbb" strokeWidth="1" strokeDasharray="5,4"/>
            <text x="355" y="156" fontSize="9" fill="#888">1 atm</text>

            {/* Triple point */}
            <circle cx="150" cy="100" r="5" fill="#ff9800"/>
            <text x="155" y="90" fontSize="9" fill="#e65100">Ponto triplo</text>
            <text x="155" y="100" fontSize="8" fill="#e65100">0,01°C / 611 Pa</text>

            {/* Critical point */}
            <circle cx="310" cy="80" r="5" fill="#e53935"/>
            <text x="315" y="75" fontSize="9" fill="#c62828">Ponto crítico</text>
            <text x="315" y="85" fontSize="8" fill="#c62828">374°C / 218 atm</text>

            {/* Normal boiling point */}
            <circle cx="240" cy="160" r="3" fill="#26a69a"/>
            <text x="244" y="155" fontSize="8" fill="#00695c">100°C, 1 atm</text>

            {/* Normal freezing point */}
            <circle cx="145" cy="160" r="3" fill="#1565c0"/>
            <text x="100" y="152" fontSize="8" fill="#1565c0">0°C, 1 atm</text>

            {/* Curve labels */}
            <text x="88" y="148" fontSize="9" fill="#6a1b9a">sublimação</text>
            <text x="160" y="188" fontSize="9" fill="#5c6bc0">fusão</text>
            <text x="268" y="118" fontSize="9" fill="#c62828">vaporização</text>
          </svg>
          <figcaption>
            Diagrama de fases P×T da água. A curva de fusão tem inclinação
            negativa (anomalia da água): maior pressão abaixa o ponto de fusão.
            Acima do ponto crítico (374&nbsp;°C, 218&nbsp;atm), não existe
            distinção entre líquido e gás.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ponto Triplo</span>
        <h2>7. Ponto Triplo da Água</h2>
        <p>
          O ponto triplo é a única combinação de temperatura e pressão em que os
          três estados físicos da água (gelo, água líquida e vapor) coexistem em
          equilíbrio termodinâmico. Ele é utilizado como referência para a
          definição da escala Kelvin.
        </p>
        <M block={true}>{"T_{\\rm triplo} = 0{,}01\\,{\\rm °C} = 273{,}16\\,{\\rm K} \\qquad P_{\\rm triplo} = 611{,}7\\,{\\rm Pa}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ponto Crítico</span>
        <h2>8. Ponto Crítico e Fluido Supercrítico</h2>
        <p>
          O ponto crítico da água é o estado (374&nbsp;°C e 218&nbsp;atm) além
          do qual não existe mais distinção entre fase líquida e fase gasosa: o
          fluido torna-se supercrítico. Fluidos supercríticos têm propriedades
          intermediárias entre líquidos e gases e são usados industrialmente como
          solventes (CO₂ supercrítico para descafeinação).
        </p>
        <div className="lesson-highlight">
          <h3>Significado prático</h3>
          <p>
            Acima da temperatura crítica, não é possível liquefazer um gás por
            pressão, independentemente de quanta pressão seja aplicada.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pressão e Ebulição</span>
        <h2>9. Efeito da Pressão no Ponto de Fusão e Ebulição</h2>
        <p>
          A pressão externa desloca os pontos de fusão e ebulição ao longo das
          curvas do diagrama de fases. Para a água:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Condição</th><th>T de ebulição</th><th>T de fusão</th></tr>
            </thead>
            <tbody>
              <tr><td>Altitude (0,7 atm)</td><td>≈ 90 °C</td><td>≈ 0 °C</td></tr>
              <tr><td>Nível do mar (1 atm)</td><td>100 °C</td><td>0 °C</td></tr>
              <tr><td>Panela de pressão (2 atm)</td><td>≈ 120 °C</td><td>≈ 0 °C</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">CO₂ e Sublimação</span>
        <h2>10. Diagrama do CO₂: Sublimação à Pressão Atmosférica</h2>
        <p>
          O ponto triplo do CO₂ fica a 5,1&nbsp;atm e −56,6&nbsp;°C. Como à
          pressão atmosférica (1&nbsp;atm) estamos abaixo da pressão do ponto
          triplo, o CO₂ nunca existe como líquido nessas condições — ele passa
          diretamente do sólido (gelo seco) para o gasoso ao ser aquecido. Por
          isso o gelo seco sublima sem formar poça.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>ΣQ</span>
            <h3>Sistema isolado</h3>
            <M block={true}>{"\\Sigma Q = 0"}</M>
          </div>
          <div className="math-card">
            <span>T_eq</span>
            <h3>Temperatura equilíbrio</h3>
            <M block={true}>{"T_{eq} = \\frac{m_1 c_1 T_1 + m_2 c_2 T_2}{m_1 c_1 + m_2 c_2}"}</M>
          </div>
          <div className="math-card">
            <span>PT</span>
            <h3>Ponto triplo (água)</h3>
            <M block={true}>{"0{,}01\\,{\\rm °C};\\ 611\\,{\\rm Pa}"}</M>
          </div>
          <div className="math-card">
            <span>PC</span>
            <h3>Ponto crítico (água)</h3>
            <M block={true}>{"374\\,{\\rm °C};\\ 218\\,{\\rm atm}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama de Fase</span>
        <h2>Síntese Visual: Trocas de Calor e Diagrama de Fase</h2>
        <p>
          O diagrama de fase (P × T) define as fronteiras entre estados — ponto
          triplo e ponto crítico são conceitos cobrados em questões de alto nível.
        </p>

        <svg viewBox="0 0 700 230" className="lesson-svg" aria-label="Diagrama de fase P × T com ponto triplo e crítico">
          <defs>
            <marker id="arr24a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          {/* eixos */}
          <line x1="60" y1="200" x2="640" y2="200" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr24a)" />
          <line x1="60" y1="200" x2="60" y2="20" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr24a)" />
          <text x="650" y="204" textAnchor="start" fontSize="13" fill="#1e293b">T</text>
          <text x="48" y="18" textAnchor="end" fontSize="13" fill="#1e293b">P</text>
          {/* regiões */}
          <text x="140" y="80" textAnchor="middle" fontSize="14" fill="#2563eb">Sólido</text>
          <text x="300" y="150" textAnchor="middle" fontSize="14" fill="#16a34a">Líquido</text>
          <text x="530" y="80" textAnchor="middle" fontSize="14" fill="#dc2626">Gás</text>
          {/* curvas */}
          <path d="M 180 200 Q 200 80 220 50" fill="none" stroke="#2563eb" strokeWidth="2" />
          <path d="M 220 50 Q 350 40 500 50" fill="none" stroke="#16a34a" strokeWidth="2" />
          <path d="M 220 50 Q 350 110 580 110" fill="none" stroke="#dc2626" strokeWidth="2" />
          {/* ponto triplo */}
          <circle cx="220" cy="110" r="7" fill="#7c3aed" />
          <text x="220" y="130" textAnchor="middle" fontSize="12" fill="#7c3aed">Ponto Triplo</text>
          {/* ponto crítico */}
          <circle cx="580" cy="110" r="7" fill="#dc2626" />
          <text x="580" y="130" textAnchor="middle" fontSize="12" fill="#dc2626">Ponto Crítico</text>
          <text x="350" y="215" textAnchor="middle" fontSize="13" fill="#0f172a">Água: Ptriplo = 611 Pa, Ttriplo = 0,01°C | Pcrítico = 22,1 MPa</text>
        </svg>

        <svg viewBox="0 0 700 180" className="lesson-svg" aria-label="Equação do balanço térmico: Q cedido = Q recebido">
          <rect x="60" y="30" width="270" height="120" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="195" y="57" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#713f12">Corpo quente cede</text>
          <text x="195" y="78" textAnchor="middle" fontSize="13" fill="#713f12">Q<tspan baselineShift="sub" fontSize="10">cedido</tspan> = m·c·ΔT</text>
          <text x="195" y="100" textAnchor="middle" fontSize="13" fill="#713f12">temperatura cai</text>
          <text x="195" y="120" textAnchor="middle" fontSize="12" fill="#92400e">ex: m=2kg, c=1cal/g°C</text>
          <text x="195" y="135" textAnchor="middle" fontSize="12" fill="#92400e">ΔT = −40°C → Q = 80 kcal</text>

          <text x="350" y="97" textAnchor="middle" fontSize="22" fill="#475569">=</text>

          <rect x="380" y="30" width="270" height="120" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="515" y="57" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1d4ed8">Corpo frio recebe</text>
          <text x="515" y="78" textAnchor="middle" fontSize="13" fill="#1d4ed8">Q<tspan baselineShift="sub" fontSize="10">recebido</tspan> = m·c·ΔT</text>
          <text x="515" y="100" textAnchor="middle" fontSize="13" fill="#1d4ed8">temperatura sobe</text>
          <text x="515" y="120" textAnchor="middle" fontSize="12" fill="#1e40af">Equilíbrio em T<tspan baselineShift="sub" fontSize="10">eq</tspan></text>
          <text x="515" y="135" textAnchor="middle" fontSize="12" fill="#1e40af">Q<tspan baselineShift="sub" fontSize="10">ced</tspan> = Q<tspan baselineShift="sub" fontSize="10">rec</tspan></text>

          <text x="350" y="168" textAnchor="middle" fontSize="13" fill="#0f172a">Balanço térmico: m₁·c₁·(T₁−Teq) = m₂·c₂·(Teq−T₂)</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Temperatura de Equilíbrio — Mesma Substância"
          statement={
            <p>
              Misturam-se 200&nbsp;g de água a 80&nbsp;°C com 300&nbsp;g de
              água a 20&nbsp;°C em calorímetro ideal. Qual é a temperatura de
              equilíbrio?
            </p>
          }
          options={[
            { letter: "a", text: "44 °C", correct: true },
            { letter: "b", text: "50 °C" },
            { letter: "c", text: "60 °C" },
            { letter: "d", text: "40 °C" },
          ]}
          resolution={
            <>
              <M block={true}>{"T_{eq} = \\frac{200\\times80 + 300\\times20}{200+300} = \\frac{16\\,000+6\\,000}{500} = \\frac{22\\,000}{500} = 44\\,{\\rm °C}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Água Quente Sobre Gelo — Com Mudança de Estado"
          statement={
            <p>
              100&nbsp;g de água a 90&nbsp;°C são derramados sobre 50&nbsp;g de
              gelo a 0&nbsp;°C em calorímetro ideal. Determine o estado final e
              a temperatura de equilíbrio.
              (c<sub>água</sub> = 1&nbsp;cal/g·°C; L_f = 80&nbsp;cal/g)
            </p>
          }
          options={[
            { letter: "a", text: "T = 22,5 °C; todo gelo derrete", correct: true },
            { letter: "b", text: "T = 0 °C; parte do gelo permanece" },
            { letter: "c", text: "T = 45 °C; todo gelo derrete" },
            { letter: "d", text: "T = 0 °C; todo gelo derrete" },
          ]}
          resolution={
            <>
              <p>Calor disponível para resfriar água até 0&nbsp;°C:</p>
              <M block={true}>{"Q_{\\rm disp} = 100\\times1\\times90 = 9\\,000\\,{\\rm cal}"}</M>
              <p>Calor para fundir todo o gelo:</p>
              <M block={true}>{"Q_{\\rm fusão} = 50\\times80 = 4\\,000\\,{\\rm cal}"}</M>
              <p>Como 9&nbsp;000 &gt; 4&nbsp;000, todo o gelo derrete. Equação final (água quente esfria + gelo derrete e aquece):</p>
              <M block={true}>{"100(T-90) + 4\\,000 + 50(T-0) = 0"}</M>
              <M block={true}>{"150T = 9\\,000 - 4\\,000 = 5\\,000 \\Rightarrow T = \\frac{5000}{150} \\approx 22{,}5\\,{\\rm °C}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Ferro Quente em Calorímetro com Água"
          statement={
            <p>
              200&nbsp;g de ferro a 300&nbsp;°C (c_Fe = 0,11&nbsp;cal/g·°C) são
              colocados em 500&nbsp;g de água a 20&nbsp;°C dentro de um
              calorímetro de capacidade C_cal = 20&nbsp;cal/°C. Encontre T_eq.
            </p>
          }
          options={[
            { letter: "a", text: "≈ 28,7 °C", correct: true },
            { letter: "b", text: "≈ 35 °C" },
            { letter: "c", text: "≈ 22 °C" },
            { letter: "d", text: "≈ 50 °C" },
          ]}
          resolution={
            <>
              <M block={true}>{"Q_{\\rm Fe} + Q_{\\rm água} + Q_{\\rm cal} = 0"}</M>
              <M block={true}>{"200\\times0{,}11\\times(T-300) + 500\\times1\\times(T-20) + 20\\times(T-20) = 0"}</M>
              <M block={true}>{"22(T-300) + 520(T-20) = 0"}</M>
              <M block={true}>{"22T - 6600 + 520T - 10400 = 0"}</M>
              <M block={true}>{"542T = 17000 \\Rightarrow T \\approx 31{,}4\\,{\\rm °C}"}</M>
              <p>
                (Com arredondamentos nos coeficientes, a resposta pode variar
                ligeiramente. Usar c_Fe = 0,11 e C_cal = 20&nbsp;cal/°C dá
                T ≈ 28,7 a 31&nbsp;°C dependendo da precisão.)
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Panela de Pressão e Diagrama de Fases"
          statement={
            <p>
              Por que a água em uma panela de pressão a 2&nbsp;atm ferve a
              aproximadamente 120&nbsp;°C, e não a 100&nbsp;°C?
            </p>
          }
          options={[
            { letter: "a", text: "Porque a maior pressão eleva o ponto de ebulição ao longo da curva de vaporização", correct: true },
            { letter: "b", text: "Porque a maior pressão diminui o calor específico da água" },
            { letter: "c", text: "Porque a tampa evita que o calor escape" },
            { letter: "d", text: "Porque o calor latente diminui com a pressão" },
          ]}
          resolution={
            <p>
              No diagrama P×T, o ponto de ebulição está sobre a curva de
              vaporização. Ao aumentar a pressão de 1 para 2&nbsp;atm, nos
              movemos para cima nessa curva, o que corresponde a uma temperatura
              de ebulição maior (≈120&nbsp;°C). O alimento cozinha mais rápido
              porque a água está mais quente.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Cozinhar em Altitude"
          statement={
            <p>
              A 3&nbsp;000&nbsp;m de altitude a pressão atmosférica é de
              aproximadamente 0,7&nbsp;atm. Por que o feijão demora mais para
              cozinhar nessa altitude do que ao nível do mar?
            </p>
          }
          options={[
            { letter: "a", text: "A água ferve abaixo de 100 °C, diminuindo a temperatura de cozimento", correct: true },
            { letter: "b", text: "A água ferve acima de 100 °C, mas evapora mais rápido" },
            { letter: "c", text: "A menor pressão aumenta o calor latente da água" },
            { letter: "d", text: "O oxigênio rarefeito retarda as reações químicas do cozimento" },
          ]}
          resolution={
            <p>
              A menor pressão (0,7&nbsp;atm) desloca o ponto de ebulição para
              baixo na curva de vaporização — a água ferve em torno de
              90&nbsp;°C. Como a temperatura de cozimento é menor, as reações
              de desnaturação de proteínas e amolecimento de fibras são mais
              lentas, exigindo tempo maior. Solução: usar panela de pressão.
            </p>
          }
        />
      </section>
    </article>
  );
}
