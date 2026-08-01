"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap32Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 32</span>
          <h1>Acústica: Cordas, Tubos e Efeito Doppler</h1>
          <p>
            Estude a física do som: sua natureza ondulatória, velocidade, intensidade em decibéis, harmônicos
            em cordas e tubos abertos ou fechados, e o fascinante efeito Doppler — base do radar de velocidade,
            ultrassonografia e da detecção da expansão do universo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Som</span>
        <h2>1. Som: Onda Mecânica Longitudinal</h2>
        <p>
          O som é uma <strong>onda mecânica longitudinal</strong> que se propaga por meio de compressões e
          rarefações em um meio material. Por ser mecânica, não se propaga no vácuo. A faixa audível para
          humanos é de <strong>20 Hz a 20 kHz</strong>. Abaixo de 20 Hz: infrassom; acima de 20 kHz: ultrassom.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead><tr><th>Faixa</th><th>Frequência</th><th>Exemplo</th></tr></thead>
            <tbody>
              <tr><td>Infrassom</td><td>{"< 20 Hz"}</td><td>Terremotos, elefantes comunicando</td></tr>
              <tr><td>Audível</td><td>20 Hz – 20 000 Hz</td><td>Voz humana, música</td></tr>
              <tr><td>Ultrassom</td><td>{"> 20 000 Hz"}</td><td>Morcegos, ultrassom médico</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Velocidade do Som</span>
        <h2>2. Velocidade do Som no Ar: v = 331 + 0,6T</h2>
        <p>
          A velocidade do som no ar depende da temperatura (em °C):
        </p>
        <M block={true}>{"v = 331 + 0{,}6 \\, T \\quad (\\text{m/s})"}</M>
        <p>A 20°C: v ≈ 331 + 0,6×20 = 343 m/s ≈ 340 m/s. A velocidade é maior em sólidos e líquidos
        (moléculas mais próximas, forças elásticas mais intensas).</p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead><tr><th>Meio</th><th>v (m/s)</th></tr></thead>
            <tbody>
              <tr><td>Ar (0°C)</td><td>331</td></tr>
              <tr><td>Ar (20°C)</td><td>343</td></tr>
              <tr><td>Água (20°C)</td><td>1 480</td></tr>
              <tr><td>Madeira (pinho)</td><td>3 300</td></tr>
              <tr><td>Ferro/Aço</td><td>5 100</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Intensidade Sonora</span>
        <h2>3. Intensidade Sonora e Escala de Decibéis</h2>
        <p>
          A intensidade sonora I mede a potência transportada por unidade de área (W/m²). O ouvido humano
          responde de forma logarítmica, por isso usa-se o nível sonoro em decibéis (dB):
        </p>
        <M block={true}>{"\\beta = 10 \\log\\left(\\frac{I}{I_0}\\right) \\quad (\\text{dB})"}</M>
        <p>onde <M>{"I_0 = 10^{-12} \\text{ W/m}^2"}</M> é o limiar de audibilidade humana (mínima intensidade perceptível a 1 kHz).</p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead><tr><th>Som</th><th>β (dB)</th><th>I (W/m²)</th></tr></thead>
            <tbody>
              <tr><td>Limiar de audição</td><td>0</td><td>10⁻¹²</td></tr>
              <tr><td>Sussurro</td><td>30</td><td>10⁻⁹</td></tr>
              <tr><td>Conversa normal</td><td>60</td><td>10⁻⁶</td></tr>
              <tr><td>Tráfego intenso</td><td>80</td><td>10⁻⁴</td></tr>
              <tr><td>Show de rock</td><td>110</td><td>10⁻¹</td></tr>
              <tr><td>Motor a jato (próximo)</td><td>140</td><td>10²</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Cuidado com danos auditivos</h3>
          <p>Exposição prolongada acima de 85 dB causa perda auditiva permanente. Cada aumento de 10 dB
          corresponde a multiplicar a intensidade por 10.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cordas</span>
        <h2>4. Cordas Vibrantes: Frequências Harmônicas</h2>
        <p>
          Em uma corda de comprimento L fixada nas duas extremidades, as frequências naturais (harmônicos) são:
        </p>
        <M block={true}>{"f_n = \\frac{n \\cdot v}{2L}, \\quad n = 1, 2, 3, \\ldots"}</M>
        <p>Todos os harmônicos (pares e ímpares) são possíveis. A velocidade na corda é
        <M>{" v = \\sqrt{T_c/\\mu}"}</M>, onde T_c é a tensão e μ a densidade linear.</p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tubos</span>
        <h2>5. Tubo Aberto nas Duas Extremidades</h2>
        <p>
          Em um tubo aberto, há <em>ventres</em> nas duas extremidades abertas. Todos os harmônicos são possíveis:
        </p>
        <M block={true}>{"f_n = \\frac{n \\cdot v}{2L}, \\quad n = 1, 2, 3, \\ldots"}</M>

        <h2>6. Tubo Fechado em Uma Extremidade</h2>
        <p>
          Em um tubo fechado numa extremidade, há <em>nó</em> na extremidade fechada e <em>ventre</em>
          na aberta. Somente harmônicos ímpares são possíveis:
        </p>
        <M block={true}>{"f_n = \\frac{(2n-1) \\cdot v}{4L}, \\quad n = 1, 2, 3, \\ldots \\quad (\\text{apenas 1°, 3°, 5°...})"}</M>
        <div className="lesson-highlight">
          <h3>Consequência prática</h3>
          <p>Para o mesmo comprimento L, o tubo fechado tem frequência fundamental metade da do tubo aberto
          (fundamental: v/4L vs. v/2L), portanto produz sons mais graves.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama de Tubos</span>
        <h2>7. SVG: Modos Fundamentais de Tubo Aberto e Tubo Fechado</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 460 200" width="460" height="200" aria-label="Modos fundamentais de tubo aberto e tubo fechado">
            {/* --- OPEN TUBE --- */}
            <text x="30" y="18" fill="#475569" fontSize="13" fontWeight="bold">Tubo Aberto</text>
            {/* Tube walls */}
            <line x1="40" y1="25" x2="200" y2="25" stroke="#475569" strokeWidth="2"/>
            <line x1="40" y1="95" x2="200" y2="95" stroke="#475569" strokeWidth="2"/>
            {/* Displacement wave (sinusoidal, ventres at both ends) */}
            <path d="M40,60 Q80,20 120,60 Q160,100 200,60" fill="none" stroke="#6366f1" strokeWidth="2.5"/>
            {/* Ventres markers */}
            <circle cx="40" cy="60" r="5" fill="#6366f1" opacity="0.5"/>
            <circle cx="200" cy="60" r="5" fill="#6366f1" opacity="0.5"/>
            <circle cx="120" cy="60" r="4" fill="#475569"/>
            {/* Labels */}
            <text x="30" y="115" fill="#6366f1" fontSize="11">ventre</text>
            <text x="185" y="115" fill="#6366f1" fontSize="11">ventre</text>
            <text x="108" y="115" fill="#475569" fontSize="11">nó</text>
            {/* λ/2 arrow */}
            <line x1="40" y1="130" x2="200" y2="130" stroke="#0ea5e9" strokeWidth="1.5"/>
            <polygon points="40,127 40,133 34,130" fill="#0ea5e9"/>
            <polygon points="200,127 200,133 206,130" fill="#0ea5e9"/>
            <text x="100" y="145" fill="#0ea5e9" fontSize="11">λ/2 = L</text>
            <text x="80" y="160" fill="#475569" fontSize="11">f₁ = v/(2L)</text>

            {/* --- CLOSED TUBE --- */}
            <text x="270" y="18" fill="#475569" fontSize="13" fontWeight="bold">Tubo Fechado</text>
            {/* Tube walls */}
            <line x1="250" y1="25" x2="420" y2="25" stroke="#475569" strokeWidth="2"/>
            <line x1="250" y1="95" x2="420" y2="95" stroke="#475569" strokeWidth="2"/>
            {/* Closed end wall */}
            <line x1="250" y1="25" x2="250" y2="95" stroke="#475569" strokeWidth="4"/>
            {/* Displacement wave: nó at closed end, ventre at open end */}
            <path d="M250,60 Q290,60 330,60 Q370,20 420,60" fill="none" stroke="#f59e0b" strokeWidth="2.5"/>
            {/* Node at closed end */}
            <circle cx="250" cy="60" r="4" fill="#475569"/>
            {/* Ventre at open end */}
            <circle cx="420" cy="60" r="5" fill="#f59e0b" opacity="0.6"/>
            {/* Labels */}
            <text x="238" y="115" fill="#475569" fontSize="11">nó</text>
            <text x="405" y="115" fill="#f59e0b" fontSize="11">ventre</text>
            {/* λ/4 arrow */}
            <line x1="250" y1="130" x2="420" y2="130" stroke="#0ea5e9" strokeWidth="1.5"/>
            <polygon points="250,127 250,133 244,130" fill="#0ea5e9"/>
            <polygon points="420,127 420,133 426,130" fill="#0ea5e9"/>
            <text x="315" y="145" fill="#0ea5e9" fontSize="11">λ/4 = L</text>
            <text x="310" y="160" fill="#475569" fontSize="11">f₁ = v/(4L)</text>
          </svg>
          <figcaption>Modo fundamental: tubo aberto (ventres em ambas as extremidades, λ/2 = L, f₁ = v/2L) e tubo fechado em uma extremidade (nó na fechada, ventre na aberta, λ/4 = L, f₁ = v/4L).</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Efeito Doppler</span>
        <h2>8. Efeito Doppler: Fórmula Geral</h2>
        <p>
          O efeito Doppler é a variação de frequência percebida pelo observador quando há movimento relativo
          entre a fonte sonora e o observador. A fórmula geral é:
        </p>
        <M block={true}>{"f_{obs} = f_{fonte} \\cdot \\frac{v \\pm v_{obs}}{v \\mp v_{fonte}}"}</M>
        <div className="lesson-highlight">
          <h3>Convenção de sinais</h3>
          <p>
            No numerador: sinal "+" quando observador se aproxima da fonte; "−" quando se afasta.<br/>
            No denominador: sinal "−" quando fonte se aproxima do observador; "+" quando se afasta.<br/>
            Aproximação → f_obs &gt; f_fonte (som mais agudo).<br/>
            Afastamento → f_obs &lt; f_fonte (som mais grave).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações Doppler</span>
        <h2>9. Aplicações do Efeito Doppler</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 180" width="420" height="180" aria-label="Efeito Doppler: fonte em movimento, comprimentos de onda comprimidos à frente e expandidos atrás">
            {/* Source (ambulance) */}
            <rect x="190" y="75" width="40" height="25" rx="4" fill="#6366f1"/>
            <text x="200" y="92" fill="white" fontSize="10">Fonte</text>
            <polygon points="230,82 240,88 230,94" fill="#6366f1"/>
            {/* Wavefronts ahead (compressed) */}
            <ellipse cx="260" cy="88" rx="18" ry="35" fill="none" stroke="#ef4444" strokeWidth="1.5" opacity="0.8"/>
            <ellipse cx="290" cy="88" rx="40" ry="55" fill="none" stroke="#ef4444" strokeWidth="1.2" opacity="0.6"/>
            <ellipse cx="330" cy="88" rx="65" ry="78" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.4"/>
            {/* Wavefronts behind (expanded) */}
            <ellipse cx="155" cy="88" rx="35" ry="40" fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.8"/>
            <ellipse cx="120" cy="88" rx="65" ry="65" fill="none" stroke="#10b981" strokeWidth="1.2" opacity="0.6"/>
            <ellipse cx="85" cy="88" rx="90" ry="83" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.4"/>
            {/* Observer ahead */}
            <text x="380" y="92" fill="#ef4444" fontSize="12">Obs A</text>
            <text x="375" y="108" fill="#ef4444" fontSize="10">f↑ agudo</text>
            {/* Observer behind */}
            <text x="5" y="92" fill="#10b981" fontSize="12">Obs B</text>
            <text x="2" y="108" fill="#10b981" fontSize="10">f↓ grave</text>
            {/* Velocity arrow */}
            <line x1="200" y1="160" x2="240" y2="160" stroke="#6366f1" strokeWidth="2"/>
            <polygon points="240,157 240,163 246,160" fill="#6366f1"/>
            <text x="205" y="175" fill="#6366f1" fontSize="11">v_fonte</text>
          </svg>
          <figcaption>Efeito Doppler: fonte em movimento para a direita. Frentes de onda comprimidas à frente (observador A percebe frequência maior — som mais agudo) e expandidas atrás (observador B percebe frequência menor — som mais grave).</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead><tr><th>Aplicação</th><th>Princípio</th></tr></thead>
            <tbody>
              <tr><td>Radar de velocidade policial</td><td>Reflexo de micro-ondas no carro: desvio de frequência ∝ velocidade</td></tr>
              <tr><td>Ultrassonografia fetal</td><td>Reflexo de ultrassom no coração fetal detecta batimentos</td></tr>
              <tr><td>Sonar submarino</td><td>Ecos de ondas sonoras revelam posição e velocidade de alvos</td></tr>
              <tr><td>Astrofísica (redshift)</td><td>Galáxias se afastando → luz deslocada para vermelho → expansão do universo</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Choque Sônico</span>
        <h2>10. Choque Sônico e Número de Mach</h2>
        <p>
          Quando a velocidade da fonte v_f se iguala à velocidade do som v, as frentes de onda se acumulam
          formando uma onda de choque. O número de Mach quantifica a velocidade em relação ao som:
        </p>
        <M block={true}>{"M = \\frac{v_f}{v}"}</M>
        <p>
          Para M &gt; 1 (velocidade supersônica), forma-se um cone de choque (bang sônico) cujo ângulo semi-vertical
          satisfaz <M>{"\\sin\\alpha = 1/M"}</M>. Aviões militares e a sonda espacial que rompeu a barreira do som
          produzem esse fenômeno.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo das Fórmulas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>v</span>
            <h3>Velocidade do Som (ar)</h3>
            <M block={true}>{"v = 331 + 0{,}6T"}</M>
          </div>
          <div className="math-card">
            <span>β</span>
            <h3>Nível Sonoro</h3>
            <M block={true}>{"\\beta = 10\\log(I/I_0)"}</M>
          </div>
          <div className="math-card">
            <span>fₙ</span>
            <h3>Tubo Aberto / Corda</h3>
            <M block={true}>{"f_n = nv/(2L)"}</M>
          </div>
          <div className="math-card">
            <span>fₙ</span>
            <h3>Tubo Fechado</h3>
            <M block={true}>{"f_n = (2n-1)v/(4L)"}</M>
          </div>
          <div className="math-card">
            <span>f'</span>
            <h3>Efeito Doppler</h3>
            <M block={true}>{"f' = f\\frac{v \\pm v_{obs}}{v \\mp v_f}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Frequência Fundamental de Tubo Aberto"
          statement={<p>Um tubo aberto em ambas as extremidades tem comprimento L = 0,85 m. Considerando v = 340 m/s, qual é a frequência fundamental?</p>}
          options={[
            {letter:"a", text:"100 Hz"},
            {letter:"b", text:"200 Hz", correct:true},
            {letter:"c", text:"400 Hz"},
            {letter:"d", text:"340 Hz"},
          ]}
          resolution={<><M block={true}>{"f_1 = \\frac{v}{2L} = \\frac{340}{2 \\times 0{,}85} = \\frac{340}{1{,}70} = 200 \\text{ Hz}"}</M></>}
        />

        <Exercise
          level="Intermediário"
          title="2. Tubo Fechado: Fundamental e Harmônicos Presentes"
          statement={<p>Um tubo fechado em uma extremidade tem L = 0,85 m (v = 340 m/s). Qual é a frequência fundamental e quais harmônicos (múltiplos) o tubo pode emitir?</p>}
          options={[
            {letter:"a", text:"f₁ = 200 Hz; todos os harmônicos"},
            {letter:"b", text:"f₁ = 100 Hz; apenas harmônicos ímpares: 100, 300, 500 Hz...", correct:true},
            {letter:"c", text:"f₁ = 100 Hz; apenas harmônicos pares: 200, 400, 600 Hz..."},
            {letter:"d", text:"f₁ = 400 Hz; apenas harmônicos ímpares"},
          ]}
          resolution={<><M block={true}>{"f_1 = \\frac{v}{4L} = \\frac{340}{4 \\times 0{,}85} = \\frac{340}{3{,}4} = 100 \\text{ Hz}"}</M><p>O tubo fechado produz apenas harmônicos ímpares: f₁ = 100 Hz (1°), f₃ = 300 Hz (3°), f₅ = 500 Hz (5°), e assim por diante.</p></>}
        />

        <Exercise
          level="Avançado"
          title="3. Efeito Doppler: Ambulância Aproximando"
          statement={<p>Uma ambulância emite som com frequência de fonte f = 800 Hz e se aproxima de um observador estacionário com velocidade v_f = 30 m/s. Considerando a velocidade do som v = 340 m/s, qual é a frequência percebida pelo observador?</p>}
          options={[
            {letter:"a", text:"874 Hz", correct:true},
            {letter:"b", text:"730 Hz"},
            {letter:"c", text:"800 Hz"},
            {letter:"d", text:"936 Hz"},
          ]}
          resolution={<><p>Observador parado (v_obs = 0), fonte se aproxima (sinal "−" no denominador):</p><M block={true}>{"f_{obs} = f \\cdot \\frac{v}{v - v_f} = 800 \\times \\frac{340}{340 - 30} = 800 \\times \\frac{340}{310}"}</M><M block={true}>{"f_{obs} = 800 \\times 1{,}097 \\approx 877 \\text{ Hz} \\approx 874 \\text{ Hz}"}</M></>}
        />

        <Exercise
          level="Contextualizado"
          title="4. Ecolocalização do Morcego: Doppler Duplo"
          statement={<p>Um morcego voa a 8 m/s em direção a uma parede e emite ultrassom de 40 kHz (v_som = 340 m/s). A parede reflete o som de volta ao morcego. Qual é a frequência do eco recebido pelo morcego? (aplique Doppler duas vezes)</p>}
          options={[
            {letter:"a", text:"≈ 41,9 kHz", correct:true},
            {letter:"b", text:"≈ 40,0 kHz"},
            {letter:"c", text:"≈ 43,0 kHz"},
            {letter:"d", text:"≈ 38,1 kHz"},
          ]}
          resolution={<><p>Passo 1 — Morcego (fonte) se aproxima da parede (receptor estático):</p><M block={true}>{"f_1 = 40000 \\times \\frac{340}{340 - 8} = 40000 \\times \\frac{340}{332} \\approx 40964 \\text{ Hz}"}</M><p>Passo 2 — A parede "re-emite" f₁; morcego (observador) se aproxima da parede:</p><M block={true}>{"f_{eco} = f_1 \\times \\frac{340 + 8}{340} = 40964 \\times \\frac{348}{340} \\approx 41928 \\text{ Hz} \\approx 41{,}9 \\text{ kHz}"}</M><p>O desvio de ~1,9 kHz permite ao morcego calcular sua velocidade relativa à parede — seu sonar biológico!</p></>}
        />

        <Exercise
          level="Contextualizado"
          title="5. Radar Doppler de Trânsito"
          statement={<p>Um radar policial emite micro-ondas a 24 GHz (c = 3×10⁸ m/s) em direção a um veículo que trafega a 130 km/h ≈ 36,1 m/s. Qual é o desvio de frequência Δf do sinal refletido? (use aproximação: Δf ≈ 2f·v_carro/c)</p>}
          options={[
            {letter:"a", text:"Δf ≈ 5,8 kHz"},
            {letter:"b", text:"Δf ≈ 5,8 MHz"},
            {letter:"c", text:"Δf ≈ 5 766 Hz ≈ 5,77 kHz", correct:true},
            {letter:"d", text:"Δf ≈ 24 MHz"},
          ]}
          resolution={<><M block={true}>{"\\Delta f \\approx \\frac{2 f v_{carro}}{c} = \\frac{2 \\times 24 \\times 10^9 \\times 36{,}1}{3 \\times 10^8}"}</M><M block={true}>{"\\Delta f \\approx \\frac{1{,}733 \\times 10^{12}}{3 \\times 10^8} \\approx 5766 \\text{ Hz} \\approx 5{,}77 \\text{ kHz}"}</M><p>O radar mede esse desvio de frequência com alta precisão e converte para velocidade: quanto maior o Δf, mais rápido o veículo.</p></>}
        />
      </section>
    </article>
  );
}
