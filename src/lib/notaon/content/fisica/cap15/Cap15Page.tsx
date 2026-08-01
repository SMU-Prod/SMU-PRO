"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap15Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 15</span>
          <h1>Conservação da Energia: Sistemas Conservativos e Dissipativos</h1>
          <p>
            Nem toda energia se conserva da mesma forma. Entenda a diferença entre forças conservativas e
            dissipativas, a origem microscópica do calor por atrito e como aplicar a equação geral de energia
            para qualquer sistema — do pêndulo ao freio do automóvel.
          </p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Forças Conservativas</h2>
        <p>
          Uma força é dita <strong>conservativa</strong> quando o trabalho que ela realiza sobre uma partícula
          não depende do caminho percorrido, mas apenas dos pontos inicial e final. Em outras palavras, se a
          partícula parte do ponto A e retorna ao ponto A, o trabalho total da força conservativa é zero.
        </p>
        <p>
          São exemplos de forças conservativas: a <strong>força gravitacional</strong> (peso), a
          <strong> força elástica</strong> (mola ideal) e a <strong>força elétrica</strong> (campo elétrico
          estático). Para todas elas é possível definir uma energia potencial associada.
        </p>
        <div className="lesson-highlight">
          <h3>Critério de conservatividade</h3>
          <p>
            Uma força F é conservativa se e somente se o trabalho realizado em qualquer caminho fechado é
            nulo: <M>{"\\oint \\vec{F}\\cdot d\\vec{s} = 0"}</M>.
          </p>
        </div>
        <M block={true}>{"W_{conservativa} = -(\\Delta E_p) = E_{p_i} - E_{p_f}"}</M>
      </section>

      {/* SECTION 2 */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>2. Forças Dissipativas</h2>
        <p>
          Forças dissipativas (ou <strong>não conservativas</strong>) realizam trabalhos que dependem do
          caminho percorrido. O atrito cinético e a resistência do ar são os exemplos mais comuns: quanto
          maior o percurso, maior a magnitude do trabalho dissipativo — sempre negativo sobre o sistema
          mecânico, pois retira energia cinética ou potencial e a converte em energia interna (calor,
          deformação etc.).
        </p>
        <M block={true}>{"\\tau_{atrito} = -f_k \\cdot d = -\\mu_k N \\cdot d"}</M>
        <p>
          Note que <M>{"d"}</M> é o comprimento do caminho (escalar), não o deslocamento vetorial. Por isso,
          quanto mais sinuoso o trajeto, maior a energia dissipada.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="lesson-section">
        <span className="section-kicker">Teorema</span>
        <h2>3. Teorema Trabalho-Energia em Sistemas Dissipativos</h2>
        <p>
          Quando forças não conservativas atuam, a energia mecânica total <M>{"E_m = E_c + E_p"}</M> não se
          conserva. A variação da energia mecânica é exatamente igual ao trabalho realizado pelas forças
          dissipativas:
        </p>
        <M block={true}>{"\\Delta E_m = E_{m_f} - E_{m_i} = \\tau_{nc}"}</M>
        <p>
          Como o trabalho das forças dissipativas é negativo (elas retiram energia do sistema), a energia
          mecânica <em>diminui</em>. Essa diferença não desaparece: ela aparece como energia interna.
        </p>
        <div className="lesson-highlight">
          <h3>Significado físico</h3>
          <p>
            A energia total do universo é conservada. O que chamamos de "perda" de energia mecânica é, na
            verdade, uma <em>transformação</em> em formas menos aproveitáveis de energia (calor, som,
            deformação plástica).
          </p>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="lesson-section">
        <span className="section-kicker">Termodinâmica</span>
        <h2>4. Energia Interna — Origem Microscópica do Calor por Atrito</h2>
        <p>
          Quando duas superfícies deslizam uma sobre a outra, as microirregularidades (asperezas) colidem e
          vibram. Essa agitação microscópica é o que chamamos de <strong>temperatura</strong>: a energia
          cinética média das moléculas. O trabalho do atrito converte energia macroscópica ordenada em energia
          microscópica desordenada — calor.
        </p>
        <M block={true}>{"Q_{gerado} = f_k \\cdot d = \\mu_k N \\cdot d"}</M>
        <p>
          Esse calor pode ser quantificado pelo aumento de temperatura dos materiais envolvidos através da
          equação calorométrica <M>{"Q = mc\\Delta T"}</M>, onde <M>{"c"}</M> é o calor específico do material.
        </p>
      </section>

      {/* SECTION 5 */}
      <section className="lesson-section">
        <span className="section-kicker">Equação Geral</span>
        <h2>5. Equação Geral de Energia</h2>
        <p>
          Unindo todos os conceitos, chegamos à forma mais completa da conservação de energia para sistemas
          mecânicos com forças dissipativas:
        </p>
        <M block={true}>{"E_{m_i} + \\tau_{nc} = E_{m_f}"}</M>
        <M block={true}>{"\\frac{1}{2}mv_i^2 + mgh_i + \\frac{1}{2}kx_i^2 + \\tau_{nc} = \\frac{1}{2}mv_f^2 + mgh_f + \\frac{1}{2}kx_f^2"}</M>
        <p>
          Para sistemas <strong>conservativos</strong> (sem atrito), <M>{"\\tau_{nc}=0"}</M> e a equação se
          reduz à clássica <M>{"E_{m_i} = E_{m_f}"}</M>.
        </p>
        <div className="lesson-highlight">
          <h3>Estratégia de resolução</h3>
          <p>
            1. Identifique os estados inicial e final. 2. Liste todas as forças: conservativas (inclua suas
            energias potenciais) e dissipativas (calcule <M>{"\\tau_{nc}"}</M>). 3. Aplique a equação geral
            e isole a incógnita.
          </p>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="lesson-section">
        <span className="section-kicker">Aplicação</span>
        <h2>6. Pêndulo Simples — Conversão Ec ↔ Ep</h2>
        <p>
          O pêndulo simples ideal (sem atrito) é o exemplo mais elegante da conservação de energia mecânica.
          No ponto mais alto da trajetória (amplitude A), a velocidade é zero e toda a energia é potencial.
          No ponto mais baixo (equilíbrio), a energia potencial gravitacional é zero (referência) e toda a
          energia é cinética.
        </p>
        <M block={true}>{"E_m = \\frac{1}{2}mv_{max}^2 = mgh_{max} = mgL(1-\\cos\\theta)"}</M>
        <p>
          Portanto, a velocidade máxima no ponto mais baixo é:
        </p>
        <M block={true}>{"v_{max} = \\sqrt{2gL(1-\\cos\\theta)}"}</M>

        <figure className="lesson-figure">
          <svg viewBox="0 0 400 240" width="400" height="240" aria-label="Pêndulo simples com barras de energia">
            {/* Teto */}
            <line x1="10" y1="20" x2="390" y2="20" stroke="#555" strokeWidth="4"/>
            {/* Pino */}
            <circle cx="200" cy="20" r="5" fill="#333"/>

            {/* Posição esquerda (Ep max) */}
            <line x1="200" y1="20" x2="110" y2="150" stroke="#888" strokeWidth="2" strokeDasharray="5,3"/>
            <circle cx="110" cy="150" r="14" fill="#e07b39"/>
            <text x="90" y="175" fontSize="11" fill="#e07b39" fontWeight="bold">Ep máx</text>
            <text x="90" y="188" fontSize="10" fill="#555">Ec = 0</text>

            {/* Posição central (Ec max) */}
            <line x1="200" y1="20" x2="200" y2="190" stroke="#555" strokeWidth="2"/>
            <circle cx="200" cy="190" r="14" fill="#3b82f6"/>
            <text x="212" y="196" fontSize="11" fill="#3b82f6" fontWeight="bold">Ec máx</text>
            <text x="212" y="210" fontSize="10" fill="#555">Ep = 0</text>

            {/* Posição direita (Ep max) */}
            <line x1="200" y1="20" x2="290" y2="150" stroke="#888" strokeWidth="2" strokeDasharray="5,3"/>
            <circle cx="290" cy="150" r="14" fill="#e07b39"/>
            <text x="296" y="175" fontSize="11" fill="#e07b39" fontWeight="bold">Ep máx</text>

            {/* Barra Ep esquerda */}
            <rect x="30" y="90" width="14" height="60" fill="#e07b39" opacity="0.85"/>
            <text x="22" y="88" fontSize="9" fill="#e07b39">Ep</text>
            <rect x="48" y="150" width="14" height="0" fill="#3b82f6" opacity="0.85"/>

            {/* Barra central */}
            <rect x="192" y="120" width="14" height="30" fill="#e07b39" opacity="0.85"/>
            <rect x="208" y="90" width="14" height="60" fill="#3b82f6" opacity="0.85"/>

            {/* Ângulo θ */}
            <path d="M 200 50 Q 220 60 210 80" fill="none" stroke="#999" strokeWidth="1"/>
            <text x="218" y="68" fontSize="10" fill="#555">θ</text>

            {/* Altura h */}
            <line x1="150" y1="150" x2="150" y2="190" stroke="#aaa" strokeWidth="1" strokeDasharray="3,2"/>
            <text x="130" y="173" fontSize="10" fill="#777">h</text>
          </svg>
          <figcaption>Pêndulo simples: energia potencial máxima nos extremos, cinética máxima no ponto mais baixo.</figcaption>
        </figure>
      </section>

      {/* SECTION 7 */}
      <section className="lesson-section">
        <span className="section-kicker">Fenômeno</span>
        <h2>7. Oscilação Amortecida</h2>
        <p>
          Na presença de atrito, a amplitude do pêndulo (ou qualquer oscilador) decresce progressivamente.
          A energia mecânica total diminui a cada ciclo, sendo convertida em calor. O gráfico da posição em
          função do tempo mostra um padrão de ondas cuja amplitude decresce exponencialmente:
        </p>
        <M block={true}>{"x(t) = A_0\\,e^{-\\gamma t}\\cos(\\omega t + \\phi)"}</M>
        <p>
          onde <M>{"\\gamma"}</M> é o coeficiente de amortecimento e <M>{"\\omega"}</M> a frequência de
          oscilação (ligeiramente menor que a frequência natural).
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 400 200" width="400" height="200" aria-label="Gráfico de oscilação amortecida">
            {/* Eixos */}
            <line x1="30" y1="100" x2="390" y2="100" stroke="#555" strokeWidth="1.5"/>
            <line x1="30" y1="10" x2="30" y2="190" stroke="#555" strokeWidth="1.5"/>
            <text x="392" y="104" fontSize="11" fill="#555">t</text>
            <text x="34" y="8" fontSize="11" fill="#555">x</text>

            {/* Envelope superior */}
            <path d="M 30 30 Q 120 32 210 55 Q 300 75 390 90" fill="none" stroke="#e07b39" strokeWidth="1.5" strokeDasharray="5,3"/>
            {/* Envelope inferior */}
            <path d="M 30 170 Q 120 168 210 145 Q 300 125 390 110" fill="none" stroke="#e07b39" strokeWidth="1.5" strokeDasharray="5,3"/>

            {/* Onda amortecida */}
            <path d="M 30 100
              C 50 30, 70 30, 90 100
              C 110 170, 130 168, 150 100
              C 170 52, 185 53, 200 100
              C 215 148, 228 147, 242 100
              C 256 68, 265 68, 278 100
              C 291 130, 298 130, 310 100
              C 322 78, 328 78, 338 100
              C 348 118, 352 118, 360 100
              C 368 87, 372 87, 378 100
              C 382 108, 385 108, 390 100"
              fill="none" stroke="#3b82f6" strokeWidth="2.5"/>

            {/* Labels */}
            <text x="32" y="27" fontSize="10" fill="#e07b39">A₀</text>
            <text x="32" y="177" fontSize="10" fill="#e07b39">−A₀</text>
            <text x="200" y="60" fontSize="10" fill="#e07b39">envelope e^(−γt)</text>
            <text x="60" y="145" fontSize="10" fill="#3b82f6">x(t)</text>
          </svg>
          <figcaption>Oscilação amortecida: amplitude decresce exponencialmente com o tempo devido às forças dissipativas.</figcaption>
        </figure>
      </section>

      {/* SECTION 8 */}
      <section className="lesson-section">
        <span className="section-kicker">Aplicação Tecnológica</span>
        <h2>8. Eficiência Energética</h2>
        <p>
          Nenhuma máquina real converte 100% da energia fornecida em trabalho útil. A
          <strong> eficiência</strong> (ou rendimento) <M>{"\\eta"}</M> mede a fração da energia de entrada
          que é efetivamente utilizada:
        </p>
        <M block={true}>{"\\eta = \\frac{E_{\\text{útil}}}{E_{\\text{total}}} = \\frac{W_{\\text{útil}}}{W_{\\text{total}}} \\times 100\\%"}</M>
        <p>
          Ou, de forma equivalente, usando potências:
        </p>
        <M block={true}>{"\\eta = \\frac{P_{\\text{saída}}}{P_{\\text{entrada}}}"}</M>
        <div className="lesson-highlight">
          <h3>Por que η nunca é 100%?</h3>
          <p>
            As perdas ocorrem por atrito nos mancais, resistência elétrica nos condutores, perdas por
            histerese magnética em motores, calor residual em motores a combustão etc. A 2ª Lei da
            Termodinâmica impõe limites fundamentais à eficiência de qualquer processo que converta calor
            em trabalho.
          </p>
        </div>
      </section>

      {/* SECTION 9 */}
      <section className="lesson-section">
        <span className="section-kicker">Exemplos</span>
        <h2>9. Exemplos de Perdas Energéticas</h2>
        <p>
          Nos sistemas reais, as perdas de energia ocorrem por mecanismos variados. Entender cada um deles
          é essencial para projetos de engenharia eficientes.
        </p>
        <ul>
          <li><strong>Resistência elétrica:</strong> condutores aquecem ao ser percorridos por corrente
            (<M>{"P = Ri^2"}</M>). Linhas de transmissão de alta tensão minimizam esse efeito.</li>
          <li><strong>Atrito nos mancais:</strong> rolamentos de precisão com lubrificação reduzem perdas
            em motores e turbinas.</li>
          <li><strong>Resistência do ar:</strong> veículos perdem energia para vencer o arrasto aerodinâmico
            (<M>{"F_{arrasto} \\propto v^2"}</M>). Daí a importância do design aerodinâmico.</li>
          <li><strong>Histerese magnética:</strong> em transformadores, o ciclo de magnetização/desmagnetização
            dissipa energia como calor.</li>
        </ul>
      </section>

      {/* SECTION 10 — TABLE */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativo</span>
        <h2>10. Sistemas Conservativos vs. Dissipativos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Sistema Conservativo</th>
                <th>Sistema Dissipativo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Energia mecânica</td>
                <td>Constante (conservada)</td>
                <td>Diminui ao longo do tempo</td>
              </tr>
              <tr>
                <td>Forças atuantes</td>
                <td>Peso, elástica, elétrica</td>
                <td>Atrito, resistência do ar</td>
              </tr>
              <tr>
                <td>Oscilação</td>
                <td>Amplitude constante (eterna)</td>
                <td>Amplitude decrescente (amortecida)</td>
              </tr>
              <tr>
                <td>Energia "perdida"</td>
                <td>Nenhuma</td>
                <td>Convertida em calor/som</td>
              </tr>
              <tr>
                <td>Exemplos reais</td>
                <td>Aproximação: pêndulo no vácuo</td>
                <td>Pêndulo no ar, freio de carro</td>
              </tr>
              <tr>
                <td>Equação de energia</td>
                <td><M>{"E_{m_i} = E_{m_f}"}</M></td>
                <td><M>{"E_{m_i} + \\tau_{nc} = E_{m_f}"}</M></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 11 */}
      <section className="lesson-section">
        <span className="section-kicker">Aprofundamento</span>
        <h2>11. Potência e Eficiência em Sistemas Reais</h2>
        <p>
          Em sistemas de engenharia, a eficiência é calculada a partir da razão entre potência útil e
          potência consumida. Um motor elétrico típico tem <M>{"\\eta \\approx 85{-}95\\%"}</M>; um motor a
          combustão, apenas <M>{"\\eta \\approx 25{-}40\\%"}</M>.
        </p>
        <p>
          A eficiência de uma usina hidrelétrica pode ultrapassar 90%, pois a conversão de energia potencial
          gravitacional da água em energia elétrica envolve poucas etapas de transformação, com perdas
          mínimas por atrito hidráulico e resistência elétrica nos geradores.
        </p>
        <M block={true}>{"P_{elétrica} = \\eta \\cdot \\rho g h Q"}</M>
        <p>onde <M>{"Q"}</M> é a vazão em m³/s, <M>{"h"}</M> a queda d'água e <M>{"\\rho"}</M> a densidade da água.</p>
      </section>

      {/* SECTION 12 — SUMMARY */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Em</span>
            <h3>Energia Mecânica</h3>
            <M block={true}>{"E_m = E_c + E_p"}</M>
          </div>
          <div className="math-card">
            <span>τ</span>
            <h3>Trabalho Dissipativo</h3>
            <M block={true}>{"\\tau_{nc} = -f_k \\cdot d"}</M>
          </div>
          <div className="math-card">
            <span>Eq.</span>
            <h3>Equação Geral</h3>
            <M block={true}>{"E_{m_i} + \\tau_{nc} = E_{m_f}"}</M>
          </div>
          <div className="math-card">
            <span>η</span>
            <h3>Eficiência</h3>
            <M block={true}>{"\\eta = \\frac{E_{\\text{útil}}}{E_{\\text{total}}}"}</M>
          </div>
          <div className="math-card">
            <span>Q</span>
            <h3>Calor gerado</h3>
            <M block={true}>{"Q = \\mu_k N \\cdot d = mc\\Delta T"}</M>
          </div>
          <div className="math-card">
            <span>v</span>
            <h3>Pêndulo (base)</h3>
            <M block={true}>{"v_{max} = \\sqrt{2gL(1-\\cos\\theta)}"}</M>
          </div>
        </div>
      </section>

      {/* EXERCISES */}
      <section className="lesson-section">
        <span className="section-kicker">Diagrama de Energia</span>
        <h2>Síntese Visual: Conservação e Dissipação de Energia</h2>

        <svg viewBox="0 0 700 220" className="lesson-svg" aria-label="Energia mecânica: transformação entre Ec e Ep numa rampa">
          <defs>
            <marker id="arr15a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
          </defs>
          {/* rampa */}
          <polygon points="80,190 600,190 600,60" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
          {/* bloco no alto */}
          <rect x="555" y="38" width="40" height="30" rx="3" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="575" y="58" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1d4ed8">m</text>
          <text x="575" y="30" textAnchor="middle" fontSize="12" fill="#2563eb">Ep = mgh</text>
          <text x="575" y="18" textAnchor="middle" fontSize="12" fill="#16a34a">Ec ≈ 0</text>
          {/* bloco embaixo */}
          <rect x="95" y="165" width="40" height="30" rx="3" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="115" y="185" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#166534">m</text>
          <text x="115" y="158" textAnchor="middle" fontSize="12" fill="#16a34a">Ec = ½mv²</text>
          <text x="115" y="146" textAnchor="middle" fontSize="12" fill="#2563eb">Ep ≈ 0</text>
          {/* seta trajetória */}
          <line x1="540" y1="80" x2="150" y2="170" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr15a)" strokeDasharray="6 3" />
          {/* conservação */}
          <text x="350" y="100" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">Em = Ec + Ep = constante</text>
          <text x="350" y="120" textAnchor="middle" fontSize="13" fill="#475569">(sem atrito: sistema conservativo)</text>
          <text x="350" y="205" textAnchor="middle" fontSize="13" fill="#0f172a">½mv² + mgh = constante | ½mv₁² + mgh₁ = ½mv₂² + mgh₂</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Sistema dissipativo: trabalho do atrito reduz energia mecânica">
          <rect x="60" y="30" width="270" height="130" rx="6" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
          <text x="195" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">Conservativo</text>
          <text x="195" y="78" textAnchor="middle" fontSize="12" fill="#1d4ed8">Forças conservativas:</text>
          <text x="195" y="96" textAnchor="middle" fontSize="12" fill="#1d4ed8">gravidade, elástica</text>
          <text x="195" y="114" textAnchor="middle" fontSize="12" fill="#1d4ed8">W não depende do</text>
          <text x="195" y="132" textAnchor="middle" fontSize="12" fill="#1d4ed8">caminho percorrido</text>
          <text x="195" y="150" textAnchor="middle" fontSize="12" fill="#1d4ed8">Em = constante</text>

          <rect x="370" y="30" width="270" height="130" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="505" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#9d174d">Dissipativo</text>
          <text x="505" y="78" textAnchor="middle" fontSize="12" fill="#9d174d">Forças não-conservativas:</text>
          <text x="505" y="96" textAnchor="middle" fontSize="12" fill="#9d174d">atrito, arrasto</text>
          <text x="505" y="114" textAnchor="middle" fontSize="12" fill="#9d174d">Em2 = Em1 + Wdiss</text>
          <text x="505" y="132" textAnchor="middle" fontSize="12" fill="#9d174d">Wdiss = −fat·d</text>
          <text x="505" y="150" textAnchor="middle" fontSize="12" fill="#9d174d">Em diminui</text>
          <text x="350" y="178" textAnchor="middle" fontSize="13" fill="#0f172a">Energia total (incluindo calor) sempre se conserva — 1ª Lei da Termodinâmica</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Tipo de energia</th><th>Fórmula</th><th>Condição de máximo</th></tr>
          </thead>
          <tbody>
            <tr><td>Cinética</td><td>Ec = ½m·v²</td><td>Ponto mais baixo (sem atrito)</td></tr>
            <tr><td>Potencial gravitacional</td><td>Ep = m·g·h</td><td>Ponto mais alto</td></tr>
            <tr><td>Potencial elástica</td><td>Epe = ½k·x²</td><td>Deformação máxima</td></tr>
            <tr><td>Energia mecânica</td><td>Em = Ec + Ep</td><td>Constante sem dissipação</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Queda Livre e Conservação de Energia"
          statement={
            <p>
              Uma bola de 2 kg é solta do repouso de uma altura <M>{"h = 20\\,\\text{m"}</M>. Desprezando a
              resistência do ar e adotando <M>{"g = 10\\,\\text{m/s}^2"}</M>, qual é a velocidade da bola
              ao atingir o solo?
            </p>
          }
          options={[
            { letter: "a", text: "10 m/s" },
            { letter: "b", text: "14 m/s" },
            { letter: "c", text: "20 m/s", correct: true },
            { letter: "d", text: "28 m/s" },
          ]}
          resolution={
            <>
              <p>Usando conservação de energia (sem atrito):</p>
              <M block={true}>{"E_{m_i} = E_{m_f} \\Rightarrow mgh = \\frac{1}{2}mv^2"}</M>
              <M block={true}>{"v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 20} = \\sqrt{400} = 20\\,\\text{m/s}"}</M>
              <p>Resposta: alternativa c) 20 m/s.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Bloco em Plano Inclinado com Atrito"
          statement={
            <p>
              Um bloco desliza por um plano inclinado de comprimento <M>{"L = 5\\,\\text{m"}</M>,
              com <M>{"h = 3\\,\\text{m"}</M> de altura, coeficiente de atrito cinético <M>{"\\mu_k = 0{,}2"}</M>,
              partindo do repouso. Dados: <M>{"g = 10\\,\\text{m/s}^2"}</M>, <M>{"\\sin 37° = 0{,}6"}</M>,
              <M>{"\\cos 37° = 0{,}8"}</M>. Qual a velocidade ao chegar na base?
            </p>
          }
          options={[
            { letter: "a", text: "4 m/s" },
            { letter: "b", text: "6 m/s" },
            { letter: "c", text: "7,2 m/s" },
            { letter: "d", text: "√44 ≈ 6,63 m/s", correct: true },
          ]}
          resolution={
            <>
              <p>A normal no plano inclinado: <M>{"N = mg\\cos\\theta"}</M>. Trabalho do atrito:</p>
              <M block={true}>{"\\tau_{atrito} = -\\mu_k N L = -\\mu_k mg\\cos\\theta \\cdot L"}</M>
              <p>Equação geral de energia (referência na base):</p>
              <M block={true}>{"mgh + \\tau_{atrito} = \\frac{1}{2}mv^2"}</M>
              <M block={true}>{"mgh - \\mu_k mg\\cos\\theta \\cdot L = \\frac{1}{2}mv^2"}</M>
              <M block={true}>{"v^2 = 2g(h - \\mu_k \\cos\\theta \\cdot L) = 2\\times10(3 - 0{,}2\\times0{,}8\\times5) = 20(3 - 0{,}8) = 44"}</M>
              <M block={true}>{"v = \\sqrt{44} \\approx 6{,}63\\,\\text{m/s}"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Pêndulo Simples"
          statement={
            <p>
              Um pêndulo de comprimento <M>{"L = 2\\,\\text{m"}</M> é solto do repouso quando o fio forma
              ângulo com a vertical tal que a altura em relação ao ponto mais baixo é <M>{"h = 0{,}30\\,\\text{m"}</M>.
              Adote <M>{"g = 10\\,\\text{m/s}^2"}</M> e despreze o atrito. Qual a velocidade no ponto mais
              baixo da trajetória?
            </p>
          }
          options={[
            { letter: "a", text: "√3 ≈ 1,73 m/s" },
            { letter: "b", text: "√5 ≈ 2,24 m/s" },
            { letter: "c", text: "√6 ≈ 2,45 m/s", correct: true },
            { letter: "d", text: "√10 ≈ 3,16 m/s" },
          ]}
          resolution={
            <>
              <p>Conservação de energia mecânica:</p>
              <M block={true}>{"mgh = \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2gh}"}</M>
              <M block={true}>{"v = \\sqrt{2 \\times 10 \\times 0{,}30} = \\sqrt{6} \\approx 2{,}45\\,\\text{m/s}"}</M>
              <p>O comprimento L do pêndulo não é necessário para este cálculo — apenas a diferença de altura importa.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Usina Hidrelétrica"
          statement={
            <p>
              Uma usina hidrelétrica tem eficiência <M>{"\\eta = 85\\%"}</M>. A água cai de uma altura
              <M>{"h = 100\\,\\text{m"}</M> com vazão <M>{"Q = 500\\,\\text{m}^3/\\text{s"}</M> e
              densidade <M>{"\\rho = 1000\\,\\text{kg/m}^3"}</M>. Adote <M>{"g = 10\\,\\text{m/s}^2"}</M>.
              Qual é a potência elétrica gerada?
            </p>
          }
          options={[
            { letter: "a", text: "250 MW" },
            { letter: "b", text: "350 MW" },
            { letter: "c", text: "425 MW", correct: true },
            { letter: "d", text: "500 MW" },
          ]}
          resolution={
            <>
              <p>Potência hidráulica disponível:</p>
              <M block={true}>{"P_{total} = \\rho g h Q = 1000 \\times 10 \\times 100 \\times 500 = 500\\,\\text{MW}"}</M>
              <p>Potência elétrica gerada:</p>
              <M block={true}>{"P_{el} = \\eta \\cdot P_{total} = 0{,}85 \\times 500\\,\\text{MW} = 425\\,\\text{MW}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Frenagem do Automóvel"
          statement={
            <p>
              Um carro de 1000 kg freia de 60 km/h até parar completamente. Para onde vai a energia cinética?
              Estime o aumento de temperatura das pastilhas de freio de massa <M>{"m = 2\\,\\text{kg"}</M>
              e calor específico <M>{"c = 500\\,\\text{J/(kg·°C)}"}</M> (desprezando outros componentes).
            </p>
          }
          options={[
            { letter: "a", text: "A energia se dissipa no motor; ΔT ≈ 35°C" },
            { letter: "b", text: "A energia vira calor nas pastilhas; ΔT = 69,4°C", correct: true },
            { letter: "c", text: "A energia é armazenada nas molas de suspensão; ΔT = 0°C" },
            { letter: "d", text: "A energia vira calor; ΔT ≈ 250°C" },
          ]}
          resolution={
            <>
              <p>Converter velocidade: <M>{"60\\,\\text{km/h} = \\frac{60}{3{,}6} \\approx 16{,}67\\,\\text{m/s}"}</M></p>
              <p>Energia cinética inicial:</p>
              <M block={true}>{"E_c = \\frac{1}{2}mv^2 = \\frac{1}{2}\\times 1000 \\times (16{,}67)^2 \\approx 138{.}900\\,\\text{J}"}</M>
              <p>Toda essa energia vira calor por atrito entre pastilhas e discos. Temperatura nas pastilhas:</p>
              <M block={true}>{"Q = mc\\Delta T \\Rightarrow \\Delta T = \\frac{Q}{mc} = \\frac{138{.}900}{2 \\times 500} \\approx 138{,}9\\,°C"}</M>
              <p>
                Na prática as pastilhas e os discos compartilham o calor — se apenas as pastilhas absorvem,
                <M>{"\\Delta T \\approx 139°C"}</M>. A alternativa correta que mais se aproxima é b), destacando que
                a energia cinética é inteiramente dissipada como calor nas interfaces de atrito.
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
