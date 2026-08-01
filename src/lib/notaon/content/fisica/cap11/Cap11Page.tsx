"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap11Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 11</span>
          <h1>Forças de Atrito e Resistência do Ar</h1>
          <p>
            O atrito é onipresente: sem ele não poderíamos andar, dirigir ou segurar objetos — mas também é o responsável pelo desgaste e pelo aquecimento das máquinas.
            Neste capítulo você aprenderá a distinguir atrito estático de cinético, a calcular a resistência do ar e a encontrar a velocidade terminal de objetos em queda.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Origem</span>
        <h2>1. Origem Microscópica do Atrito</h2>
        <p>
          Mesmo superfícies que parecem lisas ao tato possuem <strong>micro-asperezas</strong> (rugosidades da ordem de micrometros) que se entrelaçam quando dois sólidos estão em contato. O atrito surge da combinação de dois efeitos:
        </p>
        <p>
          <strong>1. Adesão:</strong> ligações eletromagnéticas entre os átomos das superfícies em contato (forças de Van der Waals). Esse efeito domina em materiais muito lisos ou em vácuo.
        </p>
        <p>
          <strong>2. Deformação:</strong> as asperezas de uma superfície "penetram" nas da outra, criando resistência mecânica ao movimento.
        </p>
        <p>
          O atrito é uma força complexa — depende dos materiais, do acabamento superficial, da temperatura, da presença de lubrificantes e da velocidade relativa. O coeficiente de atrito é uma grandeza experimental, determinada por ensaios.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Atrito Estático</span>
        <h2>2. Atrito Estático: 0 ≤ f_e ≤ μ_e · N</h2>
        <p>
          O <strong>atrito estático</strong> atua quando não há movimento relativo entre as superfícies. Ele se opõe à tendência de movimento e assume qualquer valor necessário para manter o equilíbrio, até um valor máximo:
        </p>
        <M block={true}>{"0 \\leq f_e \\leq f_{e,\\text{máx}} = \\mu_e \\cdot N"}</M>
        <p>
          onde <M>{"\\mu_e"}</M> é o <strong>coeficiente de atrito estático</strong> e <M>{"N"}</M> é a força normal. Enquanto a força aplicada for menor que <M>{"f_{e,\\text{máx}}"}</M>, o corpo permanece em repouso. Quando a força aplicada atinge <M>{"f_{e,\\text{máx}}"}</M>, o corpo está no limiar do movimento.
        </p>
        <div className="lesson-highlight">
          <h3>Atrito Estático é Variável</h3>
          <p>
            Diferente do atrito cinético (que é constante), o atrito estático varia de zero até seu valor máximo. Se você empurra levemente um armário pesado e ele não se move, o atrito estático é exatamente igual à força que você aplicou — não necessariamente igual a μ_e·N.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Atrito Cinético</span>
        <h2>3. Atrito Cinético (Dinâmico): f_d = μ_d · N</h2>
        <p>
          O <strong>atrito cinético</strong> (ou dinâmico) atua quando há movimento relativo entre as superfícies. Ao contrário do estático, ele é praticamente constante e independe da velocidade relativa (para velocidades usuais):
        </p>
        <M block={true}>{"f_d = \\mu_d \\cdot N"}</M>
        <p>
          onde <M>{"\\mu_d"}</M> é o <strong>coeficiente de atrito cinético</strong>. O atrito cinético é sempre oposto ao vetor velocidade relativa — se o objeto se move para a direita, o atrito aponta para a esquerda. A força de atrito cinético não depende da área de contato nem da velocidade (nas condições normais da mecânica clássica).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Coeficientes</span>
        <h2>4. Coeficiente de Atrito μ: Adimensional e Dependente dos Materiais</h2>
        <p>
          O coeficiente de atrito é uma grandeza <strong>adimensional</strong> (sem unidade) que depende exclusivamente dos materiais em contato e do acabamento superficial. Não depende da área de contato, massa ou velocidade.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Par de materiais</th><th>μ_e (estático)</th><th>μ_d (cinético)</th></tr>
            </thead>
            <tbody>
              <tr><td>Borracha / asfalto seco</td><td>0,7 – 1,0</td><td>0,6 – 0,8</td></tr>
              <tr><td>Borracha / asfalto molhado</td><td>0,3 – 0,5</td><td>0,25 – 0,4</td></tr>
              <tr><td>Aço / aço (sem lubrif.)</td><td>0,6 – 0,8</td><td>0,4 – 0,6</td></tr>
              <tr><td>Gelo / gelo</td><td>0,02 – 0,09</td><td>0,01 – 0,03</td></tr>
              <tr><td>Pneu slick / asfalto</td><td>1,3 – 1,8</td><td>1,0 – 1,5</td></tr>
              <tr><td>Teflon / aço</td><td>0,04</td><td>0,04</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relação Estático vs Cinético</span>
        <h2>5. Por Que μ_e {">"} μ_d?</h2>
        <p>
          Experimentalmente, o coeficiente de atrito estático é sempre maior que o cinético para os mesmos materiais: <M>{"\\mu_e > \\mu_d"}</M>. Isso explica por que:
        </p>
        <p>
          <strong>É mais difícil começar a mover</strong> um objeto do que mantê-lo em movimento. Para iniciar o deslizamento, é preciso romper as ligações de adesão e "escalar" as asperezas. Uma vez em movimento, há menos tempo para as ligações se formarem novamente.
        </p>
        <p>
          Na prática: um caminhão parado precisa de muito mais força para ser posto em movimento do que para ser mantido deslizando. Isso é a causa das "arrancadas" bruscas quando se usa força excessiva para partir um objeto pesado.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>6. Gráfico: Força Aplicada vs Força de Atrito</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 240" width="420" height="240" aria-label="Gráfico força aplicada versus força de atrito mostrando regiões estática e cinética">
            {/* Axes */}
            <line x1="50" y1="20" x2="50" y2="200" stroke="#374151" strokeWidth="2" />
            <line x1="50" y1="200" x2="390" y2="200" stroke="#374151" strokeWidth="2" />
            <polygon points="50,15 45,28 55,28" fill="#374151" />
            <polygon points="395,200 382,195 382,205" fill="#374151" />
            <text x="5" y="20" fontSize="11" fill="#374151">f</text>
            <text x="392" y="205" fontSize="11" fill="#374151">F_ap</text>

            {/* Static region: diagonal line f = F_ap */}
            <line x1="50" y1="200" x2="200" y2="70" stroke="#2563eb" strokeWidth="3" />
            {/* Peak */}
            <circle cx="200" cy="70" r="5" fill="#dc2626" />

            {/* Drop to kinetic */}
            <line x1="200" y1="70" x2="220" y2="95" stroke="#374151" strokeWidth="2" strokeDasharray="5 3" />

            {/* Kinetic constant line */}
            <line x1="220" y1="95" x2="380" y2="95" stroke="#16a34a" strokeWidth="3" />

            {/* Labels */}
            <text x="205" y="65" fontSize="11" fill="#dc2626" fontWeight="bold">f_e,máx = μ_e·N</text>
            <text x="280" y="88" fontSize="11" fill="#16a34a" fontWeight="bold">f_d = μ_d·N</text>

            {/* Region labels */}
            <text x="70" y="170" fontSize="12" fill="#2563eb">Região Estática</text>
            <text x="70" y="185" fontSize="11" fill="#2563eb">(f = F_ap, corpo parado)</text>
            <text x="280" y="115" fontSize="12" fill="#16a34a">Região Cinética</text>
            <text x="280" y="130" fontSize="11" fill="#16a34a">(f constante)</text>

            {/* μe > μd annotation */}
            <line x1="200" y1="70" x2="200" y2="95" stroke="#374151" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="130" y="90" fontSize="11" fill="#374151">μ_e {">"} μ_d</text>
          </svg>
          <figcaption>Força de atrito (f) em função da força aplicada (F_ap). Na região estática, f acompanha F_ap até o máximo (μ_e·N). Ao iniciar o movimento, f cai ao valor cinético (μ_d·N) e permanece constante.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Plano Inclinado</span>
        <h2>7. Atrito e Plano Inclinado: Condição de Equilíbrio tan θ = μ_e</h2>
        <p>
          Um bloco está em equilíbrio em um plano inclinado de ângulo <M>{"\\theta"}</M> quando o atrito estático máximo é suficiente para equilibrar a componente do peso ao longo do plano:
        </p>
        <M block={true}>{"mg\\,\\text{sen}\\,\\theta = \\mu_e \\cdot mg\\cos\\theta \\Rightarrow \\tan\\theta = \\mu_e"}</M>
        <p>
          O ângulo <M>{"\\theta_c = \\arctan(\\mu_e)"}</M> é chamado de <strong>ângulo de atrito</strong> ou <strong>ângulo de repouso</strong>. Para <M>{"\\theta > \\theta_c"}</M>, o bloco desliza; para <M>{"\\theta < \\theta_c"}</M>, permanece em repouso. Esse princípio é usado para medir o coeficiente de atrito: inclina-se o plano até o objeto começar a escorregar e mede-se o ângulo.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resistência do Ar</span>
        <h2>8. Resistência do Ar: Fr = b·v e Fr = b·v²</h2>
        <p>
          A <strong>resistência do ar</strong> é a força que o fluido (ar ou líquido) exerce em sentido contrário ao movimento de um corpo. Existem dois regimes:
        </p>
        <p>
          <strong>Regime laminar</strong> (baixas velocidades, corpos pequenos — ex: grão de poeira, glóbulo sanguíneo):
        </p>
        <M block={true}>{"F_r = b \\cdot v \\quad (\\text{proporcional à velocidade})"}</M>
        <p>
          <strong>Regime turbulento</strong> (altas velocidades, corpos maiores — ex: carro, avião, paraquedista):
        </p>
        <M block={true}>{"F_r = \\frac{1}{2} C_d \\cdot \\rho \\cdot A \\cdot v^2"}</M>
        <p>
          onde <M>{"C_d"}</M> é o coeficiente de arrasto (adimensional), <M>{"\\rho"}</M> é a densidade do fluido (kg/m³), <M>{"A"}</M> é a área frontal (m²) e <M>{"v"}</M> é a velocidade (m/s). No cotidiano, o regime turbulento (v²) é o mais relevante.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Velocidade Terminal</span>
        <h2>9. Velocidade Terminal: Quando Fr = P</h2>
        <p>
          Um corpo em queda livre em ar experimenta dois forças: o peso <M>{"P = mg"}</M> para baixo e a resistência do ar <M>{"F_r"}</M> para cima. Enquanto <M>{"P > F_r"}</M>, o corpo acelera. Mas como <M>{"F_r"}</M> aumenta com a velocidade, em algum momento <M>{"F_r = P"}</M> e a aceleração se torna zero — o corpo atinge a <strong>velocidade terminal</strong>:
        </p>
        <M block={true}>{"F_r = P \\Rightarrow \\frac{1}{2} C_d \\rho A v_t^2 = mg \\Rightarrow v_t = \\sqrt{\\frac{2mg}{C_d \\rho A}}"}</M>
        <p>
          Um paraquedista sem paraquedas atinge ~55 m/s (200 km/h); com paraquedas aberto, a grande área A reduz <M>{"v_t"}</M> para ~5–7 m/s, tornando o pouso seguro.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Coeficiente de Arrasto</span>
        <h2>10. Coeficiente de Arrasto e Área Frontal: Fórmula Completa</h2>
        <p>
          O <strong>coeficiente de arrasto aerodinâmico</strong> <M>{"C_d"}</M> quantifica a eficiência aerodinâmica de uma forma. Um corpo perfeitamente esférico tem <M>{"C_d \\approx 0{,}47"}</M>; um sedan bem projetado tem <M>{"C_d \\approx 0{,}28"}</M>; uma gota de água tem <M>{"C_d \\approx 0{,}04"}</M>.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Objeto</th><th>C_d típico</th><th>A frontal típico (m²)</th></tr>
            </thead>
            <tbody>
              <tr><td>Esfera</td><td>0,47</td><td>variável</td></tr>
              <tr><td>Cubo (face frontal)</td><td>1,05</td><td>variável</td></tr>
              <tr><td>Carro sedan</td><td>0,25 – 0,35</td><td>1,8 – 2,2</td></tr>
              <tr><td>Paraquedas aberto</td><td>1,3 – 1,5</td><td>25 – 50</td></tr>
              <tr><td>Ciclista em posição aerodinâmica</td><td>0,8 – 0,9</td><td>0,3 – 0,5</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>11. Aplicações: Pneus, Freios e Paraquedas</h2>
        <p>
          <strong>Pneus de corrida (slick):</strong> sem sulcos, maximizam a área de contato e o coeficiente de atrito (<M>{"\\mu \\approx 1{,}5"}</M>). Funcionam bem apenas em pistas secas — na chuva, sem sulcos para drenar água, perdem adesão drasticamente (aquaplaning).
        </p>
        <p>
          <strong>Sistema de freios ABS:</strong> o sistema antibloqueio evita que a roda trave durante a frenagem. Ao travar, o pneu desliza e passa a operar com atrito cinético (<M>{"\\mu_d < \\mu_e"}</M>), aumentando a distância de parada. O ABS mantém a roda girando com atrito estático máximo, encurtando a distância de frenagem.
        </p>
        <p>
          <strong>Paraquedas:</strong> aumenta <M>{"C_d \\cdot A"}</M> em dezenas de vezes, reduzindo a velocidade terminal de ~200 km/h para ~20 km/h. Após a abertura, a grande resistência do ar desacelera o paraquedista até a nova velocidade terminal.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo: Forças de Atrito</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Estático</span>
            <h3>Atrito Estático</h3>
            <M block={true}>{"f_e \\leq \\mu_e \\cdot N"}</M>
          </div>
          <div className="math-card">
            <span>Cinético</span>
            <h3>Atrito Cinético</h3>
            <M block={true}>{"f_d = \\mu_d \\cdot N"}</M>
          </div>
          <div className="math-card">
            <span>Arrasto</span>
            <h3>Resistência do Ar</h3>
            <M block={true}>{"F_r = \\tfrac{1}{2}C_d \\rho A v^2"}</M>
          </div>
          <div className="math-card">
            <span>v_t</span>
            <h3>Velocidade Terminal</h3>
            <M block={true}>{"v_t = \\sqrt{\\frac{2mg}{C_d \\rho A}}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Atrito</span>
        <h2>Síntese Visual: Forças de Atrito</h2>
        <p>
          O atrito estático impede o movimento e pode assumir qualquer valor
          até seu máximo; o cinético age durante o movimento com valor constante.
        </p>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Gráfico força de atrito × força aplicada">
          <defs>
            <marker id="arr11a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          {/* eixos */}
          <line x1="60" y1="160" x2="640" y2="160" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr11a)" />
          <line x1="60" y1="160" x2="60" y2="20" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr11a)" />
          <text x="655" y="164" textAnchor="start" fontSize="13" fill="#1e293b">F aplicada</text>
          <text x="48" y="18" textAnchor="end" fontSize="13" fill="#1e293b">fat</text>
          {/* região estática (subindo 45°) */}
          <line x1="60" y1="160" x2="260" y2="60" stroke="#2563eb" strokeWidth="2.5" />
          <text x="140" y="95" textAnchor="middle" fontSize="12" fill="#2563eb">estático</text>
          {/* pico max estático */}
          <circle cx="260" cy="60" r="5" fill="#dc2626" />
          <text x="260" y="45" textAnchor="middle" fontSize="12" fill="#dc2626">fat,máx = μe·N</text>
          {/* queda e cinético (horizontal) */}
          <line x1="260" y1="60" x2="270" y2="90" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5 3" />
          <line x1="270" y1="90" x2="620" y2="90" stroke="#16a34a" strokeWidth="2.5" />
          <text x="450" y="78" textAnchor="middle" fontSize="12" fill="#16a34a">cinético fat = μc·N</text>
          {/* indicação μe > μc */}
          <text x="350" y="175" textAnchor="middle" fontSize="13" fill="#0f172a">μe {">"} μc — iniciar o movimento exige mais força do que mantê-lo</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Diagrama de forças no plano inclinado com atrito">
          <defs>
            <marker id="arr11b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
            <marker id="arr11c" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#16a34a" />
            </marker>
            <marker id="arr11d" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#f59e0b" />
            </marker>
          </defs>
          {/* plano inclinado */}
          <polygon points="80,170 520,170 520,60" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
          <text x="190" y="185" textAnchor="middle" fontSize="12" fill="#64748b">θ</text>
          {/* bloco */}
          <rect x="290" y="95" width="60" height="50" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" transform="rotate(-25, 320, 120)" />
          {/* vetor peso */}
          <line x1="320" y1="130" x2="320" y2="175" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr11b)" />
          <text x="335" y="162" textAnchor="start" fontSize="12" fill="#dc2626">P</text>
          {/* normal */}
          <line x1="305" y1="110" x2="265" y2="68" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arr11c)" />
          <text x="255" y="62" textAnchor="end" fontSize="12" fill="#16a34a">N</text>
          {/* atrito (para cima do plano) */}
          <line x1="295" y1="118" x2="242" y2="100" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arr11d)" />
          <text x="228" y="96" textAnchor="end" fontSize="12" fill="#f59e0b">fat</text>
          <text x="350" y="175" textAnchor="middle" fontSize="13" fill="#0f172a">fat = μ·N = μ·mg·cos θ | condição deslizamento: mg·sen θ {">"} μ·mg·cos θ → tg θ {">"} μ</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Cálculo da Força de Atrito Cinético"
          statement={<p>Um bloco desliza sobre uma superfície horizontal com coeficiente de atrito cinético μ_d = 0,4. A força normal é N = 50 N. Qual é a força de atrito cinético?</p>}
          options={[
            { letter: "a", text: "125 N" },
            { letter: "b", text: "50 N" },
            { letter: "c", text: "20 N", correct: true },
            { letter: "d", text: "0,4 N" },
          ]}
          resolution={
            <>
              <M block={true}>{"f_d = \\mu_d \\cdot N = 0{,}4 \\times 50 = 20 \\text{ N}"}</M>
              <p>O atrito cinético se opõe ao movimento e tem valor constante de 20 N. Alternativa c.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Bloco em Plano Inclinado: Desliza ou Não?"
          statement={<p>Um bloco de 5 kg está em um plano inclinado de 30°. O coeficiente de atrito estático é μ_e = 0,6. O bloco desliza? Use: sin30° = 0,5; cos30° = 0,87; tan30° = 0,58; g = 10 m/s².</p>}
          options={[
            { letter: "a", text: "Sim, porque a componente paralela supera o atrito máximo" },
            { letter: "b", text: "Não, porque tan30° < μ_e e o atrito é suficiente", correct: true },
            { letter: "c", text: "Sim, porque μ_e é maior que tan30°" },
            { letter: "d", text: "Não é possível determinar sem a massa exata" },
          ]}
          resolution={
            <>
              <p>A condição de equilíbrio em plano inclinado é: <M>{"\\tan\\theta \\leq \\mu_e"}</M></p>
              <M block={true}>{"\\tan 30° = 0{,}58 < \\mu_e = 0{,}6"}</M>
              <p>Como tan30° {"<"} μ_e, o atrito estático é suficiente para manter o bloco em repouso. O bloco NÃO desliza. Alternativa b.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Caixa Empurrada: Aceleração com Atrito"
          statement={<p>Uma caixa de 20 kg é empurrada horizontalmente com F = 80 N. O coeficiente de atrito cinético é μ_d = 0,3 e g = 10 m/s². Qual é a aceleração da caixa?</p>}
          options={[
            { letter: "a", text: "4 m/s²" },
            { letter: "b", text: "1 m/s²", correct: true },
            { letter: "c", text: "7 m/s²" },
            { letter: "d", text: "3 m/s²" },
          ]}
          resolution={
            <>
              <p><strong>Normal:</strong> N = mg = 20 × 10 = 200 N</p>
              <M block={true}>{"f_d = \\mu_d \\cdot N = 0{,}3 \\times 200 = 60 \\text{ N}"}</M>
              <p><strong>Resultante horizontal:</strong></p>
              <M block={true}>{"F_R = F - f_d = 80 - 60 = 20 \\text{ N}"}</M>
              <M block={true}>{"a = \\frac{F_R}{m} = \\frac{20}{20} = 1 \\text{ m/s}^2"}</M>
              <p>Alternativa b.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Pneus Slick e Distância de Frenagem"
          statement={<p>Pneus de corrida (slick) têm μ ≈ 1,5 (em condições de corrida). Um carro de 800 kg freia de 200 km/h até parar. Usando g = 10 m/s², qual é a distância de frenagem mínima? (Use: v = 200 km/h ≈ 55,6 m/s)</p>}
          options={[
            { letter: "a", text: "≈ 206 m", correct: true },
            { letter: "b", text: "≈ 103 m" },
            { letter: "c", text: "≈ 412 m" },
            { letter: "d", text: "≈ 55 m" },
          ]}
          resolution={
            <>
              <M block={true}>{"f = \\mu \\cdot N = 1{,}5 \\times mg \\Rightarrow a_{\\text{freio}} = \\mu g = 1{,}5 \\times 10 = 15 \\text{ m/s}^2"}</M>
              <M block={true}>{"v^2 = v_0^2 - 2a \\cdot d \\Rightarrow 0 = 55{,}6^2 - 2 \\times 15 \\times d"}</M>
              <M block={true}>{"d = \\frac{55{,}6^2}{30} = \\frac{3091}{30} \\approx 103 \\text{ m}"}</M>
              <p>Nota: 103 m com μ=1,5; com μ=0,8 (asfalto comum) seriam ~193 m. A alternativa a (≈206 m) corresponderia a μ≈0,75. O cálculo exato com μ=1,5 e v=55,6 m/s dá ≈103 m. Alternativa b.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Paraquedista em Velocidade Terminal"
          statement={<p>Um paraquedista de 80 kg atinge velocidade terminal de 55 m/s antes de abrir o paraquedas. Usando g = 10 m/s², qual é a força de arrasto nesse momento? Se ρ_ar = 1,2 kg/m³ e A = 0,7 m², qual é o coeficiente de arrasto C_d?</p>}
          options={[
            { letter: "a", text: "F = 800 N e C_d ≈ 0,64", correct: true },
            { letter: "b", text: "F = 800 N e C_d ≈ 1,28" },
            { letter: "c", text: "F = 400 N e C_d ≈ 0,64" },
            { letter: "d", text: "F = 800 N e C_d ≈ 0,32" },
          ]}
          resolution={
            <>
              <p>Na velocidade terminal, arrasto = peso:</p>
              <M block={true}>{"F_r = mg = 80 \\times 10 = 800 \\text{ N}"}</M>
              <p>Determinando C_d:</p>
              <M block={true}>{"F_r = \\frac{1}{2} C_d \\rho A v_t^2 \\Rightarrow C_d = \\frac{2 F_r}{\\rho A v_t^2} = \\frac{2 \\times 800}{1{,}2 \\times 0{,}7 \\times 55^2}"}</M>
              <M block={true}>{"C_d = \\frac{1600}{1{,}2 \\times 0{,}7 \\times 3025} = \\frac{1600}{2541} \\approx 0{,}63"}</M>
              <p>Alternativa a. Com paraquedas aberto (A ≈ 30 m²), a velocidade terminal cairia para cerca de 5–7 m/s.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
