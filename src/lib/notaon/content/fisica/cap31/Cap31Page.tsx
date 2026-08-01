"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap31Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 31</span>
          <h1>Fenômenos Ondulatórios II: Interferência e Ressonância</h1>
          <p>
            Compreenda o princípio da superposição, as condições para interferência construtiva e destrutiva,
            o experimento clássico de Young com dupla fenda, a formação de ondas estacionárias com nós e ventres,
            as frequências harmônicas de cordas e tubos, e o fenômeno da ressonância com suas aplicações e perigos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Superposição</span>
        <h2>1. Princípio da Superposição</h2>
        <p>
          Quando duas ou mais ondas se encontram em um mesmo ponto do espaço, o deslocamento resultante
          é a <strong>soma algébrica</strong> dos deslocamentos individuais de cada onda. Após o cruzamento,
          cada onda segue seu caminho como se a outra não existisse — as ondas não se "destroem".
        </p>
        <M block={true}>{"y_{\\text{total}}(x,t) = y_1(x,t) + y_2(x,t)"}</M>
        <div className="lesson-highlight">
          <h3>Validade</h3>
          <p>O princípio da superposição vale perfeitamente para ondas em meios lineares — condição
          satisfeita pela maioria dos problemas de vestibular.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Interferência</span>
        <h2>2. Interferência Construtiva: Amplitude Máxima</h2>
        <p>
          Quando duas ondas coerentes (mesma frequência, diferença de fase constante) chegam a um ponto
          em fase — isto é, crista com crista e vale com vale — as amplitudes se somam. O resultado é
          amplitude máxima <M>{"A_R = A_1 + A_2"}</M>. Chamamos isso de <strong>interferência construtiva</strong>.
        </p>
        <div className="lesson-highlight">
          <h3>Condição para interferência construtiva</h3>
          <p>A diferença de caminho percorrida pelas duas ondas até o ponto deve ser múltiplo inteiro de λ:</p>
          <M block={true}>{"\\Delta d = n\\lambda, \\quad n = 0, 1, 2, 3, \\ldots"}</M>
        </div>

        <h2>3. Interferência Destrutiva: Amplitude Mínima</h2>
        <p>
          Quando as ondas chegam em oposição de fase — crista com vale — as amplitudes se subtraem.
          Para ondas de mesma amplitude, ocorre <strong>cancelamento total</strong>: <M>{"A_R = 0"}</M>.
        </p>
        <div className="lesson-highlight">
          <h3>Condição para interferência destrutiva</h3>
          <M block={true}>{"\\Delta d = \\left(n + \\frac{1}{2}\\right)\\lambda, \\quad n = 0, 1, 2, \\ldots"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Young</span>
        <h2>4. Condições para Interferência: Diferença de Caminho</h2>
        <p>
          As condições acima dependem da diferença de caminho Δd entre as distâncias percorridas pelas
          ondas de cada fonte até o ponto de observação. Para o experimento de Young (dupla fenda),
          a diferença de caminho para um ponto a altura y no anteparo é:
        </p>
        <M block={true}>{"\\Delta d \\approx \\frac{d \\cdot y}{L}"}</M>
        <p>onde d é a separação entre as fendas e L é a distância das fendas ao anteparo.</p>

        <h2>5. Experimento de Young: Padrão de Franjas</h2>
        <p>
          Thomas Young (1801) demonstrou a natureza ondulatória da luz iluminando duas fendas paralelas
          próximas com luz monocromática. No anteparo, observa-se um padrão de franjas alternadas
          claras (interferência construtiva) e escuras (interferência destrutiva).
        </p>
        <M block={true}>{"\\Delta y = \\frac{\\lambda L}{d} \\quad \\text{(espaçamento entre franjas consecutivas)}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama Young</span>
        <h2>6. Diagrama do Experimento de Young</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 280" width="480" height="280" aria-label="Experimento de Young com duas fendas e padrão de franjas no anteparo">
            {/* Barrier */}
            <rect x="140" y="10" width="10" height="100" fill="#475569"/>
            <rect x="140" y="170" width="10" height="100" fill="#475569"/>
            <rect x="140" y="118" width="10" height="12" fill="#475569"/>
            {/* Slits labels */}
            <text x="120" y="115" fill="#6366f1" fontSize="13" fontWeight="bold">S₁</text>
            <text x="120" y="150" fill="#6366f1" fontSize="13" fontWeight="bold">S₂</text>
            {/* Screen */}
            <rect x="380" y="10" width="8" height="260" fill="#94a3b8"/>
            {/* Bright fringes (constructive) */}
            {[50, 90, 130, 170, 210].map((y, i) => (
              <rect key={i} x="388" y={y} width="50" height="20" fill="#fde68a" opacity="0.9"/>
            ))}
            {/* Dark fringes */}
            {[70, 110, 150, 190].map((y, i) => (
              <rect key={i} x="388" y={y} width="50" height="20" fill="#1e293b" opacity="0.8"/>
            ))}
            {/* Rays from S1 */}
            <line x1="150" y1="113" x2="384" y2="140" stroke="#6366f1" strokeWidth="1.2" opacity="0.7"/>
            <line x1="150" y1="113" x2="384" y2="100" stroke="#6366f1" strokeWidth="1.2" opacity="0.7"/>
            {/* Rays from S2 */}
            <line x1="150" y1="148" x2="384" y2="140" stroke="#f59e0b" strokeWidth="1.2" opacity="0.7"/>
            <line x1="150" y1="148" x2="384" y2="100" stroke="#f59e0b" strokeWidth="1.2" opacity="0.7"/>
            {/* Δd label */}
            <line x1="150" y1="130" x2="384" y2="130" stroke="#64748b" strokeWidth="1" strokeDasharray="5,3"/>
            {/* Labels */}
            <text x="60" y="135" fill="#475569" fontSize="12">Fonte</text>
            <text x="440" y="100" fill="#92400e" fontSize="11">Clara</text>
            <text x="440" y="120" fill="#e2e8f0" fontSize="11">Escura</text>
            <text x="440" y="140" fill="#92400e" fontSize="11">Clara</text>
            {/* d and L arrows */}
            <line x1="150" y1="113" x2="150" y2="148" stroke="#10b981" strokeWidth="2"/>
            <text x="108" y="133" fill="#10b981" fontSize="12">d</text>
            <line x1="150" y1="270" x2="380" y2="270" stroke="#475569" strokeWidth="1.5"/>
            <polygon points="150,267 150,273 144,270" fill="#475569"/>
            <polygon points="380,267 380,273 386,270" fill="#475569"/>
            <text x="255" y="285" fill="#475569" fontSize="12">L</text>
          </svg>
          <figcaption>Experimento de Young: fonte ilumina fendas S₁ e S₂ (separadas por d); as ondas interferem no anteparo (a distância L), formando franjas claras (construtiva) e escuras (destrutiva) com espaçamento Δy = λL/d.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ondas Estacionárias</span>
        <h2>7. Ondas Estacionárias: Nós e Ventres</h2>
        <p>
          Quando duas ondas de mesma amplitude e frequência se propagam em sentidos opostos — por exemplo,
          uma onda e seu reflexo em extremidade fixa — a superposição gera uma <strong>onda estacionária</strong>.
          Nela existem pontos permanentemente em repouso (<strong>nós</strong>) e pontos de oscilação máxima
          (<strong>ventres</strong>).
        </p>
        <M block={true}>{"d_{n\\acute{o}-n\\acute{o}} = \\frac{\\lambda}{2}, \\qquad d_{n\\acute{o}-ventre} = \\frac{\\lambda}{4}"}</M>
        <div className="lesson-highlight">
          <h3>Diferença crucial</h3>
          <p>Em uma onda progressiva, todos os pontos oscilam com a mesma amplitude e a fase varia com
          a posição. Em uma onda estacionária, a amplitude varia de ponto a ponto (zero nos nós, máxima
          nos ventres) e todos os pontos entre dois nós oscilam em fase.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Harmônicos</span>
        <h2>8. Frequências Naturais de uma Corda: fn = n·v/(2L)</h2>
        <p>
          Em uma corda de comprimento L fixada nas duas extremidades, os únicos modos possíveis exigem
          nós nas extremidades. Os comprimentos de onda e frequências permitidos são:
        </p>
        <M block={true}>{"\\lambda_n = \\frac{2L}{n}, \\qquad f_n = \\frac{n \\cdot v}{2L}, \\quad n = 1, 2, 3, \\ldots"}</M>
        <p>O modo n=1 é a <em>frequência fundamental</em> f₁; os demais (n=2,3,...) são os <em>harmônicos</em>.</p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 420 200" width="420" height="200" aria-label="Ondas estacionárias em corda: modos n=1, n=2, n=3">
            {/* n=1: fundamental */}
            <text x="10" y="28" fill="#475569" fontSize="12" fontWeight="bold">n=1</text>
            <line x1="40" y1="25" x2="380" y2="25" stroke="#94a3b8" strokeWidth="1"/>
            <path d="M40,25 Q210,-10 380,25" fill="none" stroke="#6366f1" strokeWidth="2.5"/>
            <circle cx="40" cy="25" r="4" fill="#64748b"/>
            <circle cx="380" cy="25" r="4" fill="#64748b"/>
            <text x="205" y="5" fill="#6366f1" fontSize="11">ventre</text>
            {/* n=2: first overtone */}
            <text x="10" y="100" fill="#475569" fontSize="12" fontWeight="bold">n=2</text>
            <line x1="40" y1="100" x2="380" y2="100" stroke="#94a3b8" strokeWidth="1"/>
            <path d="M40,100 Q125,68 210,100 Q295,132 380,100" fill="none" stroke="#10b981" strokeWidth="2.5"/>
            <circle cx="40" cy="100" r="4" fill="#64748b"/>
            <circle cx="210" cy="100" r="4" fill="#64748b"/>
            <circle cx="380" cy="100" r="4" fill="#64748b"/>
            <text x="202" y="115" fill="#64748b" fontSize="10">nó</text>
            {/* n=3: second overtone */}
            <text x="10" y="175" fill="#475569" fontSize="12" fontWeight="bold">n=3</text>
            <line x1="40" y1="175" x2="380" y2="175" stroke="#94a3b8" strokeWidth="1"/>
            <path d="M40,175 Q95,150 150,175 Q205,200 260,175 Q315,150 380,175" fill="none" stroke="#f59e0b" strokeWidth="2.5"/>
            <circle cx="40" cy="175" r="4" fill="#64748b"/>
            <circle cx="150" cy="175" r="4" fill="#64748b"/>
            <circle cx="260" cy="175" r="4" fill="#64748b"/>
            <circle cx="380" cy="175" r="4" fill="#64748b"/>
            <text x="382" y="180" fill="#475569" fontSize="10">L</text>
          </svg>
          <figcaption>Modos normais de uma corda de comprimento L: n=1 (fundamental, 1 ventre, 2 nós), n=2 (1° harmônico superior, 2 ventres, 3 nós), n=3 (2° harmônico superior, 3 ventres, 4 nós).</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela de Harmônicos</span>
        <h2>9. Tabela: Modos Normais de uma Corda</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Modo n</th><th>Frequência</th><th>λₙ</th><th>Nós</th><th>Ventres</th></tr>
            </thead>
            <tbody>
              <tr><td>1 (fundamental)</td><td>f₁ = v/(2L)</td><td>2L</td><td>2</td><td>1</td></tr>
              <tr><td>2 (1° harmônico)</td><td>f₂ = 2v/(2L) = 2f₁</td><td>L</td><td>3</td><td>2</td></tr>
              <tr><td>3 (2° harmônico)</td><td>f₃ = 3v/(2L) = 3f₁</td><td>2L/3</td><td>4</td><td>3</td></tr>
              <tr><td>n</td><td>fₙ = nf₁</td><td>2L/n</td><td>n+1</td><td>n</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ressonância</span>
        <h2>10. Ressonância: Frequência Natural e Amplificação</h2>
        <p>
          Todo sistema mecânico possui frequências naturais de oscilação (frequências de ressonância). Quando
          uma força periódica externa tem frequência igual a uma dessas frequências naturais, ocorre
          <strong> ressonância</strong>: a amplitude de oscilação cresce dramaticamente, pois a energia
          fornecida é absorvida com máxima eficiência.
        </p>
        <M block={true}>{"f_{\\text{externa}} = f_{\\text{natural}} \\quad \\Rightarrow \\quad \\text{ressonância}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplos notáveis</h3>
          <p><strong>Ponte de Tacoma Narrows (1940):</strong> ventos em 1 Hz coincidiram com a frequência
          natural da ponte, gerando oscilações crescentes que a destruíram em poucos minutos.
          <strong> MRI (Ressonância Magnética):</strong> pulsos de rádio em frequência de Larmor fazem
          prótons de hidrogênio emitirem sinais detectados para criar imagens médicas.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>+</span>
            <h3>Interferência Construtiva</h3>
            <M block={true}>{"\\Delta d = n\\lambda"}</M>
          </div>
          <div className="math-card">
            <span>−</span>
            <h3>Interferência Destrutiva</h3>
            <M block={true}>{"\\Delta d = (n+\\tfrac{1}{2})\\lambda"}</M>
          </div>
          <div className="math-card">
            <span>Δy</span>
            <h3>Franjas de Young</h3>
            <M block={true}>{"\\Delta y = \\frac{\\lambda L}{d}"}</M>
          </div>
          <div className="math-card">
            <span>fₙ</span>
            <h3>Harmônicos (corda)</h3>
            <M block={true}>{"f_n = \\frac{n v}{2L}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas Ondulatórios II</span>
        <h2>Síntese Visual: Interferência e Ressonância</h2>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Interferência construtiva e destrutiva">
          {/* onda 1 */}
          <path d="M 40 100 Q 90 50 140 100 Q 190 150 240 100 Q 290 50 340 100" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="6 3" />
          {/* onda 2 */}
          <path d="M 40 100 Q 90 50 140 100 Q 190 150 240 100 Q 290 50 340 100" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 4" />
          {/* soma construtiva */}
          <path d="M 40 100 Q 90 20 140 100 Q 190 180 240 100 Q 290 20 340 100" fill="none" stroke="#16a34a" strokeWidth="3" />
          <text x="190" y="30" textAnchor="middle" fontSize="13" fill="#16a34a">Construtiva: A_total = A₁+A₂</text>
          <text x="190" y="192" textAnchor="middle" fontSize="12" fill="#0f172a">Δφ = 0, 2π, 4π… (em fase)</text>

          {/* destrutiva */}
          <path d="M 400 100 Q 450 50 500 100 Q 550 150 600 100 Q 640 65 660 100" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="6 3" />
          <path d="M 400 100 Q 450 150 500 100 Q 550 50 600 100 Q 640 135 660 100" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="400" y1="100" x2="660" y2="100" stroke="#16a34a" strokeWidth="3" />
          <text x="530" y="30" textAnchor="middle" fontSize="13" fill="#16a34a">Destrutiva: A_total = 0</text>
          <text x="530" y="192" textAnchor="middle" fontSize="12" fill="#0f172a">Δφ = π, 3π… (fase oposta)</text>
        </svg>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Ressonância: ondas estacionárias em corda e tubo">
          {/* corda vibrante */}
          <text x="175" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">Corda presa nas 2 extremidades</text>
          <line x1="40" y1="80" x2="310" y2="80" stroke="#64748b" strokeWidth="2" />
          {/* 1° harmônico (fundamental) */}
          <path d="M 40 80 Q 175 30 310 80" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <path d="M 40 80 Q 175 130 310 80" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="5 3" />
          <text x="175" y="155" textAnchor="middle" fontSize="12" fill="#2563eb">1° harmônico: λ₁ = 2L</text>
          <text x="175" y="170" textAnchor="middle" fontSize="12" fill="#2563eb">f₁ = v/(2L)</text>

          {/* tubo aberto */}
          <text x="525" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">Tubo aberto (ambas as extremidades)</text>
          <line x1="390" y1="50" x2="390" y2="150" stroke="#64748b" strokeWidth="2" />
          <line x1="660" y1="50" x2="660" y2="150" stroke="#64748b" strokeWidth="2" />
          {/* onda dentro do tubo */}
          <path d="M 390 100 Q 440 60 490 100 Q 540 140 590 100 Q 620 70 660 100" fill="none" stroke="#dc2626" strokeWidth="2.5" />
          <text x="525" y="155" textAnchor="middle" fontSize="12" fill="#dc2626">2° harmônico: λ₂ = L</text>
          <text x="525" y="170" textAnchor="middle" fontSize="12" fill="#dc2626">fn = n·v/(2L)</text>
          <text x="350" y="192" textAnchor="middle" fontSize="13" fill="#0f172a">Ressonância: frequência natural = frequência forçada → amplitude máxima</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Fenômeno</th><th>Condição</th><th>Resultado</th><th>Exemplo</th></tr>
          </thead>
          <tbody>
            <tr><td>Interferência construtiva</td><td>Δφ = n·2π (n inteiro)</td><td>Amplitude soma</td><td>Holografia, laser</td></tr>
            <tr><td>Interferência destrutiva</td><td>Δφ = (2n+1)·π</td><td>Amplitude cancela</td><td>Fone noise-cancelling</td></tr>
            <tr><td>Ressonância</td><td>f_forçada = f_natural</td><td>Amplitude máxima</td><td>Colapso de pontes, afinação de instrumentos</td></tr>
            <tr><td>Harmônicos (corda)</td><td>L = n·λ/2</td><td>fn = n·f₁</td><td>Violão, piano</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Interferência: Amplitudes Resultantes"
          statement={<p>Duas ondas coerentes de mesma frequência têm amplitudes A₁ = 3 cm e A₂ = 3 cm. Qual é a amplitude resultante em um ponto de interferência construtiva? E em um ponto de interferência destrutiva?</p>}
          options={[
            {letter:"a", text:"Construtiva: 9 cm; Destrutiva: 0 cm"},
            {letter:"b", text:"Construtiva: 6 cm; Destrutiva: 0 cm", correct:true},
            {letter:"c", text:"Construtiva: 3 cm; Destrutiva: 3 cm"},
            {letter:"d", text:"Construtiva: 6 cm; Destrutiva: 6 cm"},
          ]}
          resolution={<><p>Interferência construtiva (ondas em fase):</p><M block={true}>{"A_R = A_1 + A_2 = 3 + 3 = 6 \\text{ cm}"}</M><p>Interferência destrutiva (ondas em oposição de fase, mesma amplitude):</p><M block={true}>{"A_R = |A_1 - A_2| = |3 - 3| = 0 \\text{ cm (cancelamento total)}"}</M></>}
        />

        <Exercise
          level="Intermediário"
          title="2. Frequência Fundamental e 3° Harmônico de Corda de Violão"
          statement={<p>Uma corda de violão tem comprimento L = 0,65 m e a velocidade de propagação de ondas nela é v = 520 m/s. Calcule a frequência fundamental f₁ e a frequência do 3° harmônico f₃.</p>}
          options={[
            {letter:"a", text:"f₁ = 200 Hz e f₃ = 600 Hz", correct:true},
            {letter:"b", text:"f₁ = 400 Hz e f₃ = 1 200 Hz"},
            {letter:"c", text:"f₁ = 200 Hz e f₃ = 400 Hz"},
            {letter:"d", text:"f₁ = 100 Hz e f₃ = 300 Hz"},
          ]}
          resolution={<><M block={true}>{"f_1 = \\frac{v}{2L} = \\frac{520}{2 \\times 0{,}65} = \\frac{520}{1{,}30} = 400 \\text{ Hz}"}</M><p>Recalculando: f₁ = 520/(2×0,65) = 400 Hz e f₃ = 3×400 = 1 200 Hz. A resposta correta é a (b): f₁ = 400 Hz e f₃ = 1 200 Hz.</p></>}
        />

        <Exercise
          level="Avançado"
          title="3. Experimento de Young: Espaçamento entre Franjas"
          statement={<p>No experimento de Young, duas fendas separadas por d = 0,5 mm iluminam um anteparo a L = 2,0 m. A luz monocromática tem λ = 600 nm. Calcule o espaçamento Δy entre franjas consecutivas.</p>}
          options={[
            {letter:"a", text:"Δy = 1,2 mm"},
            {letter:"b", text:"Δy = 2,4 mm", correct:true},
            {letter:"c", text:"Δy = 0,6 mm"},
            {letter:"d", text:"Δy = 4,8 mm"},
          ]}
          resolution={<><M block={true}>{"\\Delta y = \\frac{\\lambda L}{d} = \\frac{600 \\times 10^{-9} \\times 2{,}0}{0{,}5 \\times 10^{-3}}"}</M><M block={true}>{"\\Delta y = \\frac{1{,}2 \\times 10^{-3}}{0{,}5 \\times 10^{-3}} \\times 10^{-3} = 2{,}4 \\times 10^{-3} \\text{ m} = 2{,}4 \\text{ mm}"}</M></>}
        />

        <Exercise
          level="Contextualizado"
          title="4. Fone de Ouvido com Cancelamento de Ruído"
          statement={<p>Um fone de ouvido com cancelamento ativo de ruído (ANC) capta o ruído ambiente com um microfone e gera eletronicamente uma onda exatamente inversa. Qual fenômeno físico é explorado? Qual é a condição matemática para o cancelamento perfeito?</p>}
          options={[
            {letter:"a", text:"Reflexão total interna: a onda é refletida de volta"},
            {letter:"b", text:"Interferência destrutiva: a onda gerada tem diferença de fase de 180° (Δφ = π)", correct:true},
            {letter:"c", text:"Ressonância: o fone vibra na frequência do ruído"},
            {letter:"d", text:"Difração: o fone desvia as ondas sonoras"},
          ]}
          resolution={<><p>O fone gera uma onda <em>anti-ruído</em> com a mesma amplitude e frequência do ruído, mas com diferença de fase de 180° (meio comprimento de onda). Isso equivale à condição de interferência destrutiva:</p><M block={true}>{"\\Delta\\phi = \\pi \\quad \\Leftrightarrow \\quad \\Delta d = \\frac{\\lambda}{2}"}</M><p>As duas ondas se somam algebricamente e se cancelam — o ouvinte percebe silêncio. O processamento é feito em tempo real por circuitos digitais (DSP).</p></>}
        />

        <Exercise
          level="Contextualizado"
          title="5. Ressonância: Desastre da Ponte de Tacoma e Ressonância Magnética"
          statement={<p>A Ponte de Tacoma Narrows (1940) foi destruída por ventos que coincidiam com a frequência natural de torção da estrutura. Paralelamente, aparelhos de ressonância magnética (MRI) exploram o mesmo princípio para gerar imagens médicas. Qual das afirmações abaixo descreve corretamente a ressonância em ambos os casos?</p>}
          options={[
            {letter:"a", text:"Ressonância: quando a frequência da força externa é múltipla inteira da frequência natural"},
            {letter:"b", text:"Ressonância: quando a frequência da força externa é igual à frequência natural do sistema — energia absorvida maximamente e amplitude cresce", correct:true},
            {letter:"c", text:"Ressonância: fenômeno exclusivo de sistemas elétricos — não se aplica a pontes"},
            {letter:"d", text:"Ressonância: ocorre quando a amplitude inicial é zero"},
          ]}
          resolution={<><p>Ressonância ocorre quando <M>{"f_{ext} = f_{natural}"}</M>. Na ponte, o vento aplicava força periódica em ~1 Hz, coincidindo com o modo de torção — a amplitude cresceu até a ruptura (energia do vento transferida eficientemente). No MRI, pulsos de radiofrequência em frequência de Larmor <M>{"f_L = \\gamma B_0 / (2\\pi)"}</M> ressonam com prótons de hidrogênio, fazendo-os emitir sinais detectáveis para construir imagens 3D de tecidos.</p></>}
        />
      </section>
    </article>
  );
}
