"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap37Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 37</span>
          <h1>Óptica da Visão: Miopia, Hipermetropia e Astigmatismo</h1>
          <p>
            O olho humano é um sistema óptico extraordinário que forma imagens nítidas em uma
            ampla faixa de distâncias. Quando esse sistema apresenta imperfeições geométricas,
            surgem os defeitos da visão — miopia, hipermetropia, astigmatismo e presbiopia —
            corrigidos por lentes oftálmicas cuja vergência é calculada com precisão.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Anatomia Funcional</span>
        <h2>1. O Olho Humano como Sistema Óptico</h2>
        <p>
          O olho humano é composto por várias estruturas que trabalham em conjunto para
          formar imagens na retina. A <strong>córnea</strong> é uma lente convergente fixa
          responsável por cerca de 70% do poder de convergência total do olho. O
          <strong> cristalino</strong> é uma lente biconvexa flexível controlada pelo
          músculo ciliar, que realiza o ajuste fino (acomodação). O <strong>humor aquoso</strong>
          preenche a câmara anterior, e o <strong>humor vítreo</strong> preenche a câmara
          posterior. A <strong>retina</strong> contém os fotorreceptores (cones e bastonetes)
          e é o anteparo onde a imagem real e invertida deve se formar para que enxerguemos
          com nitidez.
        </p>
        <div className="lesson-highlight">
          <h3>Distância focal do olho</h3>
          <p>
            O sistema óptico do olho relaxado tem distância focal de aproximadamente 17 mm,
            com diâmetro anteroposterior médio de 24 mm. A potência total oscila entre
            58 e 70 dioptrias dependendo do grau de acomodação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ajuste Automático</span>
        <h2>2. Acomodação Visual</h2>
        <p>
          A <strong>acomodação visual</strong> é a capacidade do cristalino de alterar sua
          curvatura para ajustar o foco a diferentes distâncias. Quando o músculo ciliar
          contrai, o cristalino fica mais espesso (maior convergência) para enxergar objetos
          próximos. Quando o músculo relaxa, o cristalino achata-se (menor convergência) para
          objetos distantes.
        </p>
        <p>
          O <strong>ponto próximo (pp)</strong> é a menor distância na qual o olho consegue
          enxergar com nitidez com máxima acomodação — para um adulto jovem é de 10 a 15 cm.
          O <strong>ponto remoto (pr)</strong> é a maior distância de visão nítida com o
          músculo ciliar completamente relaxado — para o olho normal é o infinito (∞).
        </p>
        <M block={true}>{"\\text{Vergência da lente corretora: } P = \\frac{1}{f} \\quad [\\text{dioptrias (D)}]"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Referência</span>
        <h2>3. Visão Normal (Emetrope)</h2>
        <p>
          O olho <strong>emetrope</strong> (normal) forma a imagem de objetos distantes
          exatamente sobre a retina quando o músculo ciliar está completamente relaxado.
          Para objetos próximos, a acomodação posiciona o foco na retina sem esforço
          excessivo. O ponto remoto fica no infinito e o ponto próximo é de cerca de 25 cm
          (distância convencional de leitura confortável).
        </p>
        <div className="lesson-highlight">
          <h3>Parâmetros do olho normal</h3>
          <p>
            Ponto remoto: pr = ∞ (infinito) — Ponto próximo: pp ≈ 25 cm —
            Diâmetro anteroposterior: ≈ 24 mm
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Defeito de Refração</span>
        <h2>4. Miopia: Olho Longo Demais</h2>
        <p>
          Na <strong>miopia</strong>, o diâmetro anteroposterior do olho é excessivo ou a
          córnea/cristalino têm curvatura exagerada. Com isso, quando o músculo ciliar está
          relaxado, os raios provenientes de um objeto distante convergem para um ponto
          localizado <em>à frente da retina</em>, formando uma mancha difusa sobre ela.
        </p>
        <p>
          O míope enxerga bem de perto (objetos até o ponto remoto, que está a distância
          finita) mas não enxerga objetos distantes com nitidez. O ponto remoto do míope
          está a uma distância finita <M>{"d_{pr}"}</M> à frente do olho.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Correção Óptica</span>
        <h2>5. Correção da Miopia com Lente Divergente</h2>
        <p>
          Para corrigir a miopia, usa-se uma <strong>lente divergente</strong> (côncava,
          vergência negativa). Ela afasta virtualmente os objetos distantes para o ponto
          remoto do míope, de modo que o olho, ao relaxar, forme imagem nítida na retina.
          A vergência da lente corretora é:
        </p>
        <M block={true}>{"P_{\\text{miopia}} = -\\frac{1}{d_{pr}} \\quad (d_{pr}\\text{ em metros})"}</M>
        <p>
          O sinal negativo indica que a lente é divergente. Por exemplo, se o ponto remoto
          está a 50 cm, a vergência necessária é <M>{"P = -1/0{,}5 = -2\\,\\text{D}"}</M>.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 500 240" width="500" height="240" aria-label="Olho míope com e sem correção">
            {/* Olho míope sem correção */}
            <text x="10" y="18" fontSize="11" fill="#374151" fontWeight="bold">Miopia — sem correção</text>
            <ellipse cx="160" cy="110" rx="50" ry="38" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
            <text x="160" y="113" textAnchor="middle" fontSize="9" fill="#1e40af">retina</text>
            {/* raios convergindo antes da retina */}
            <line x1="30" y1="80" x2="120" y2="105" stroke="#ef4444" strokeWidth="1.5"/>
            <line x1="30" y1="140" x2="120" y2="115" stroke="#ef4444" strokeWidth="1.5"/>
            <line x1="120" y1="105" x2="140" y2="110" stroke="#ef4444" strokeWidth="1.5"/>
            <line x1="120" y1="115" x2="140" y2="110" stroke="#ef4444" strokeWidth="1.5"/>
            <circle cx="140" cy="110" r="3" fill="#ef4444"/>
            <text x="138" y="128" fontSize="9" fill="#ef4444">foco</text>
            <text x="25" y="78" fontSize="9" fill="#374151">∞</text>

            {/* Olho míope com correção */}
            <text x="270" y="18" fontSize="11" fill="#374151" fontWeight="bold">Miopia — com lente divergente</text>
            <ellipse cx="420" cy="110" rx="50" ry="38" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
            <text x="420" y="113" textAnchor="middle" fontSize="9" fill="#1e40af">retina</text>
            {/* lente divergente */}
            <line x1="330" y1="75" x2="330" y2="145" stroke="#8b5cf6" strokeWidth="2.5"/>
            <path d="M 325 75 Q 330 110 325 145" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
            <path d="M 335 75 Q 330 110 335 145" fill="none" stroke="#8b5cf6" strokeWidth="1.5"/>
            <text x="318" y="165" fontSize="9" fill="#8b5cf6">lente (−)</text>
            {/* raios divergindo e foco na retina */}
            <line x1="285" y1="80" x2="330" y2="95" stroke="#ef4444" strokeWidth="1.5"/>
            <line x1="285" y1="140" x2="330" y2="125" stroke="#ef4444" strokeWidth="1.5"/>
            <line x1="330" y1="95" x2="375" y2="103" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,2"/>
            <line x1="330" y1="125" x2="375" y2="117" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,2"/>
            <line x1="375" y1="103" x2="420" y2="110" stroke="#10b981" strokeWidth="1.5"/>
            <line x1="375" y1="117" x2="420" y2="110" stroke="#10b981" strokeWidth="1.5"/>
            <circle cx="420" cy="110" r="4" fill="#10b981"/>
            <text x="410" y="125" fontSize="9" fill="#10b981">foco✓</text>
          </svg>
          <figcaption>Miopia: foco forma-se antes da retina (esq.) e correção com lente divergente (dir.)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Defeito de Refração</span>
        <h2>6. Hipermetropia: Olho Curto Demais</h2>
        <p>
          Na <strong>hipermetropia</strong>, o diâmetro anteroposterior do olho é menor
          que o normal ou as superfícies refratoras são pouco curvadas. Os raios paralelos
          convergem para um ponto <em>atrás da retina</em> quando o olho está relaxado.
          O hipermetrope enxerga mal de perto e pode ter dificuldade a distâncias moderadas.
          Ao contrário do míope, o ponto remoto do hipermetrope é virtual (atrás do olho).
        </p>
        <p>
          Para enxergar objetos distantes, o hipermetrope precisa acomodar constantemente,
          causando fadiga visual e dores de cabeça. A hipermetropia leve é frequentemente
          compensada automaticamente em jovens.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Correção Óptica</span>
        <h2>7. Correção da Hipermetropia com Lente Convergente</h2>
        <p>
          A <strong>lente convergente</strong> (convexa, vergência positiva) aproxima
          virtualmente os objetos, de modo que a imagem virtual formada pela lente recaia
          dentro do alcance de acomodação do olho hipermetrope. A vergência da lente
          corretora para que o hipermetrope veja com conforto a 25 cm é:
        </p>
        <M block={true}>{"P_{\\text{hiper}} = \\frac{1}{pp_{\\text{desejado}}} - \\frac{1}{pp_{\\text{real}}}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>
            Hipermetrope com ponto próximo real a 1 m deseja ler a 25 cm:
            P = 1/0,25 − 1/1,0 = 4 − 1 = +3 D (lente convergente de 3 dioptrias).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Defeito Irregular</span>
        <h2>8. Astigmatismo: Córnea Irregular</h2>
        <p>
          O <strong>astigmatismo</strong> ocorre quando a córnea (ou o cristalino) não é
          perfeitamente esférica, tendo diferentes raios de curvatura em diferentes
          meridianos. Isso faz com que raios de luz em diferentes planos sejam focados em
          distâncias distintas, produzindo uma imagem desfocada ou distorcida em qualquer
          distância.
        </p>
        <p>
          O astigmatismo pode ocorrer isolado ou combinado com miopia (astigmatismo miópico)
          ou hipermetropia (astigmatismo hipermetrópico). A correção é feita com
          <strong> lentes cilíndricas ou tóricas</strong>, que atuam em apenas um meridiano.
        </p>
        <M block={true}>{"P_{\\text{total}} = P_{\\text{esfera}} + P_{\\text{cilindro}} \\cdot \\sin^2\\theta"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Envelhecimento</span>
        <h2>9. Presbiopia (Vista Cansada)</h2>
        <p>
          A <strong>presbiopia</strong> é a perda progressiva da capacidade de acomodação
          com o envelhecimento, causada pelo endurecimento do cristalino e perda de
          elasticidade do músculo ciliar. O ponto próximo recua progressivamente: de
          ~10 cm aos 10 anos para ~100 cm aos 60 anos.
        </p>
        <p>
          Não é um defeito de refração, mas de acomodação. É corrigida com lentes
          convergentes para leitura (óculos de grau positivo) ou lentes multifocais
          (bifocais, progressivas) que permitem visão nítida a diferentes distâncias.
        </p>
        <div className="lesson-highlight">
          <h3>Distinção importante</h3>
          <p>
            Presbiopia ≠ hipermetropia. A presbiopia afeta a amplitude de acomodação;
            a hipermetropia afeta o posicionamento focal em olho relaxado.
            Ambas podem coexistir no mesmo indivíduo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cálculo Óptico</span>
        <h2>10. Vergência da Lente Corretora</h2>
        <p>
          A vergência (ou potência) de uma lente é o inverso da distância focal em metros.
          Para encontrar a lente corretora adequada, usa-se a equação do ponto remoto
          (para miopia e hipermetropia a distância):
        </p>
        <M block={true}>{"P = \\frac{1}{f} = -\\frac{1}{d_{pr}} \\quad \\text{(miopia: negativo)}"}</M>
        <M block={true}>{"P = \\frac{1}{f} = \\frac{1}{d_{\\text{desejado}}} - \\frac{1}{d_{pp}} \\quad \\text{(hipermetropia: positivo)}"}</M>
        <p>
          A <strong>dioptria (D)</strong> é a unidade de vergência:
          <M>{" 1\\,\\text{D} = 1\\,\\text{m}^{-1}"}</M>. O "grau" popular dos óculos
          corresponde à vergência em dioptrias multiplicada por 100 (ex.: −2,5 D = grau −250).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tecnologia</span>
        <h2>11. Cirurgia a Laser (LASIK)</h2>
        <p>
          O <strong>LASIK</strong> (Laser-Assisted In Situ Keratomileusis) corrige a miopia
          remodelando a córnea com um laser excimer de alta precisão. Na miopia, a córnea
          é aplanada (reduz curvatura), diminuindo sua convergência para que o foco recue
          até a retina. Na hipermetropia, a curvatura central é aumentada.
        </p>
        <p>
          O laser remove tecido corneano com pulsos de 10–15 nanosegundos, com precisão
          de micrômetros. O mecanismo óptico é equivalente a adicionar uma lente divergente
          (miopia) ou convergente (hipermetropia) permanente, mas integrada à própria córnea.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Referência</span>
        <h2>12. Tabela: Defeitos, Causas e Correções</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Defeito</th>
                <th>Causa</th>
                <th>Visão prejudicada</th>
                <th>Correção</th>
                <th>Sinal da vergência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Miopia</td>
                <td>Olho longo ou córnea muito curva</td>
                <td>Longe</td>
                <td>Lente divergente (côncava)</td>
                <td>Negativo (−)</td>
              </tr>
              <tr>
                <td>Hipermetropia</td>
                <td>Olho curto ou córnea pouco curva</td>
                <td>Perto</td>
                <td>Lente convergente (convexa)</td>
                <td>Positivo (+)</td>
              </tr>
              <tr>
                <td>Astigmatismo</td>
                <td>Córnea com curvaturas diferentes</td>
                <td>Qualquer distância</td>
                <td>Lente cilíndrica ou tórica</td>
                <td>+ ou − (por meridiano)</td>
              </tr>
              <tr>
                <td>Presbiopia</td>
                <td>Endurecimento do cristalino</td>
                <td>Perto (leitura)</td>
                <td>Lente convergente / multifocal</td>
                <td>Positivo (+)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>13. Resumo das Fórmulas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>P</span>
            <h3>Vergência</h3>
            <M block={true}>{"P = \\frac{1}{f}\\;[\\text{D}]"}</M>
          </div>
          <div className="math-card">
            <span>M</span>
            <h3>Correção Miopia</h3>
            <M block={true}>{"P = -\\frac{1}{d_{pr}}"}</M>
          </div>
          <div className="math-card">
            <span>H</span>
            <h3>Correção Hiper.</h3>
            <M block={true}>{"P = \\frac{1}{d_{\\text{desej}}} - \\frac{1}{pp}"}</M>
          </div>
          <div className="math-card">
            <span>γ</span>
            <h3>Fator Lorentz (Lenz)</h3>
            <M block={true}>{"P_{\\text{Pres}} = \\frac{1}{d_{\\text{leit}}} - \\frac{1}{pp_{\\text{real}}}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Visão</span>
        <h2>Síntese Visual: Defeitos da Visão e Correção</h2>
        <p>
          Em todos os defeitos da visão, a lente corretora reposiciona a imagem
          sobre a retina — compreender isso torna fácil deduzir qual lente usar.
        </p>

        <svg viewBox="0 0 700 220" className="lesson-svg" aria-label="Miopia e hipermetropia: foco antes e depois da retina">
          {/* olho miope */}
          <ellipse cx="180" cy="80" rx="80" ry="55" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
          <text x="180" y="30" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">Miopia</text>
          <line x1="100" y1="80" x2="260" y2="80" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 2" />
          {/* retina (direita do olho) */}
          <line x1="258" y1="45" x2="258" y2="115" stroke="#dc2626" strokeWidth="2" />
          <text x="268" y="82" textAnchor="start" fontSize="11" fill="#dc2626">retina</text>
          {/* foco (antes da retina) */}
          <circle cx="215" cy="80" r="5" fill="#2563eb" />
          <text x="215" y="70" textAnchor="middle" fontSize="11" fill="#2563eb">F</text>
          <text x="180" y="155" textAnchor="middle" fontSize="12" fill="#0f172a">foco antes da retina</text>
          <text x="180" y="170" textAnchor="middle" fontSize="12" fill="#0f172a">Corrige: lente divergente</text>

          {/* olho hipermétrope */}
          <ellipse cx="510" cy="80" rx="80" ry="55" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
          <text x="510" y="30" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">Hipermetropia</text>
          <line x1="430" y1="80" x2="590" y2="80" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 2" />
          {/* retina */}
          <line x1="588" y1="45" x2="588" y2="115" stroke="#dc2626" strokeWidth="2" />
          <text x="598" y="82" textAnchor="start" fontSize="11" fill="#dc2626">retina</text>
          {/* foco (atrás da retina, virtual) */}
          <circle cx="615" cy="80" r="5" fill="#16a34a" />
          <text x="625" y="75" textAnchor="start" fontSize="11" fill="#16a34a">F</text>
          <text x="510" y="155" textAnchor="middle" fontSize="12" fill="#0f172a">foco atrás da retina</text>
          <text x="510" y="170" textAnchor="middle" fontSize="12" fill="#0f172a">Corrige: lente convergente</text>
        </svg>

        <svg viewBox="0 0 700 180" className="lesson-svg" aria-label="Astigmatismo e presbiopia">
          <rect x="60" y="30" width="260" height="120" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="190" y="58" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#713f12">Astigmatismo</text>
          <text x="190" y="78" textAnchor="middle" fontSize="13" fill="#713f12">Córnea irregular —</text>
          <text x="190" y="96" textAnchor="middle" fontSize="13" fill="#713f12">focos em planos diferentes</text>
          <text x="190" y="114" textAnchor="middle" fontSize="13" fill="#713f12">Corrige: lente cilíndrica</text>
          <text x="190" y="132" textAnchor="middle" fontSize="12" fill="#92400e">(tórica = esférica + cilíndrica)</text>

          <rect x="380" y="30" width="260" height="120" rx="8" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="510" y="58" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#9d174d">Presbiopia</text>
          <text x="510" y="78" textAnchor="middle" fontSize="13" fill="#9d174d">Perda da elasticidade</text>
          <text x="510" y="96" textAnchor="middle" fontSize="13" fill="#9d174d">do cristalino com a idade</text>
          <text x="510" y="114" textAnchor="middle" fontSize="13" fill="#9d174d">Corrige: lentes bifocais</text>
          <text x="510" y="132" textAnchor="middle" fontSize="12" fill="#be185d">(convergentes p/ leitura)</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Defeito</th>
              <th>Causa</th>
              <th>Foco em relação à retina</th>
              <th>Correção</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Miopia</td><td>Globo ocular alongado ou córnea muito curvada</td><td>Antes da retina</td><td>Lente divergente (côncava, f {"<"} 0)</td></tr>
            <tr><td>Hipermetropia</td><td>Globo ocular curto ou cristalino fraco</td><td>Atrás da retina</td><td>Lente convergente (convexa, f {">"} 0)</td></tr>
            <tr><td>Astigmatismo</td><td>Curvatura irregular da córnea</td><td>Múltiplos planos</td><td>Lente cilíndrica (tórica)</td></tr>
            <tr><td>Presbiopia</td><td>Perda de acomodação do cristalino (idade)</td><td>Atrás da retina (visão próxima)</td><td>Lentes bifocais ou multifocais</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Correção da Miopia"
          statement={
            <p>
              Uma pessoa míope só enxerga com nitidez objetos situados a no máximo 50 cm
              de distância. Qual deve ser a vergência (em dioptrias) da lente corretora
              de seus óculos?
            </p>
          }
          options={[
            { letter: "a", text: "−2,0 D", correct: true },
            { letter: "b", text: "+2,0 D" },
            { letter: "c", text: "−0,5 D" },
            { letter: "d", text: "+0,5 D" },
          ]}
          resolution={
            <>
              <p>O ponto remoto do míope é 50 cm = 0,5 m. A lente deve divergir os raios provenientes do infinito para que pareçam vir de 0,5 m:</p>
              <M block={true}>{"P = -\\frac{1}{d_{pr}} = -\\frac{1}{0{,}5} = -2{,}0\\;\\text{D}"}</M>
              <p>Lente divergente, sinal negativo. Resposta: <strong>a) −2,0 D</strong></p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Correção da Hipermetropia"
          statement={
            <p>
              Um hipermetrope tem ponto próximo a 1 m de distância (não consegue
              enxergar com nitidez objetos mais próximos). Que vergência de lente ele
              precisa para ler confortavelmente a 25 cm?
            </p>
          }
          options={[
            { letter: "a", text: "+3,0 D", correct: true },
            { letter: "b", text: "+4,0 D" },
            { letter: "c", text: "+1,0 D" },
            { letter: "d", text: "−3,0 D" },
          ]}
          resolution={
            <>
              <p>Quer enxergar a 25 cm = 0,25 m, mas sem lente só enxerga a partir de 1 m:</p>
              <M block={true}>{"P = \\frac{1}{d_{\\text{desej}}} - \\frac{1}{pp_{\\text{real}}} = \\frac{1}{0{,}25} - \\frac{1}{1{,}0} = 4 - 1 = +3{,}0\\;\\text{D}"}</M>
              <p>Lente convergente de +3,0 D. Resposta: <strong>a) +3,0 D</strong></p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Presbiopia"
          statement={
            <p>
              Com o envelhecimento, o ponto próximo de uma pessoa se afastou para 1 m.
              Ela deseja ler um livro a 25 cm. Qual a vergência da lente necessária?
              Se seus olhos também têm miopia com ponto remoto de 2 m, explique
              como ela deve combinar as correções.
            </p>
          }
          options={[
            { letter: "a", text: "+3,0 D para leitura; óculos bifocais com −0,5 D para longe", correct: true },
            { letter: "b", text: "+4,0 D para leitura; sem correção para longe" },
            { letter: "c", text: "−3,0 D para leitura; +0,5 D para longe" },
            { letter: "d", text: "+3,5 D para leitura; −2,0 D para longe" },
          ]}
          resolution={
            <>
              <p>Para leitura (pp=1 m, quer 0,25 m):</p>
              <M block={true}>{"P_{\\text{leit}} = \\frac{1}{0{,}25} - \\frac{1}{1} = 4 - 1 = +3{,}0\\;\\text{D}"}</M>
              <p>Para longe (miopia, pr=2 m):</p>
              <M block={true}>{"P_{\\text{longe}} = -\\frac{1}{2} = -0{,}5\\;\\text{D}"}</M>
              <p>Óculos bifocais: parte superior −0,5 D (longe), parte inferior +3,0 D (leitura). Resposta: <strong>a)</strong></p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Epidemia de Miopia e Tempo de Tela"
          statement={
            <p>
              Estudos mostram que a prevalência de miopia entre jovens aumentou dramaticamente
              nas últimas décadas, associada ao aumento do uso de telas e redução de atividades
              ao ar livre. Do ponto de vista físico-fisiológico, qual mecanismo explica essa
              relação, e quais medidas preventivas são indicadas?
            </p>
          }
          options={[
            { letter: "a", text: "Acomodação forçada constante para perto estimula o crescimento axial do olho; prevenção inclui pausas e tempo ao ar livre com luz natural", correct: true },
            { letter: "b", text: "A luz azul das telas alonga a córnea; use óculos com filtro azul" },
            { letter: "c", text: "A radiação das telas danifica o cristalino; reduza o brilho" },
            { letter: "d", text: "Olhar para perto fortalece o músculo ciliar, causando hipermetropia" },
          ]}
          resolution={
            <>
              <p>
                O mecanismo principal é o <strong>crescimento axial do olho</strong>: o olho
                em desenvolvimento cresce em resposta ao sinal óptico de acomodação prolongada
                para visão próxima. Isso aumenta o diâmetro anteroposterior e desloca o foco
                para frente da retina (miopia).
              </p>
              <p>
                A luz solar estimula receptores dopaminérgicos na retina que inibem o crescimento
                excessivo. Recomendações: regra 20-20-20 (pausa de 20s a 6m a cada 20min),
                mínimo 2h/dia ao ar livre em luz natural.
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Cirurgia LASIK vs Óculos"
          statement={
            <p>
              Um jovem míope com −4,5 D em cada olho considera fazer LASIK. O cirurgião
              explica que o laser removerá tecido corneano para aplanar a córnea.
              Do ponto de vista da óptica geométrica, compare o mecanismo de correção
              do LASIK ao uso de óculos, e identifique a vantagem óptica do procedimento.
            </p>
          }
          options={[
            { letter: "a", text: "Ambos reduzem a vergência do sistema óptico; o LASIK elimina aberrações de lente periférica e não necessita de armação", correct: true },
            { letter: "b", text: "O LASIK aumenta o diâmetro do olho; os óculos não atuam na córnea" },
            { letter: "c", text: "Os óculos atuam diretamente na retina; o LASIK muda o humor vítreo" },
            { letter: "d", text: "O LASIK e os óculos têm mecanismos idênticos, diferindo apenas no custo" },
          ]}
          resolution={
            <>
              <p>
                Nos óculos, a lente divergente desloca virtualmente o objeto para o ponto remoto
                do míope. No LASIK, o laser remove estroma corneano, reduzindo a curvatura da
                córnea e, portanto, sua vergência em ~4,5 D.
              </p>
              <p>
                Vantagem do LASIK: elimina aberrações ópticas introduzidas por lentes periféricas
                (distorção de campo, aberração esférica da lente), melhora o campo visual periférico
                e proporciona visão mais natural sem intermediário óptico.
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
