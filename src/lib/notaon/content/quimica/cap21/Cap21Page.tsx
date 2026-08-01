"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap21Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 21</span>
          <h1>Estudo das Soluções: Coeficiente de Solubilidade, Curvas e Unidades de Concentração</h1>
          <p>
            Por que o açúcar "some" no café quente mas se acumula no fundo do copo de água gelada? Por que o
            refrigerante "murcha" quando esquenta? E como o rótulo do soro fisiológico chega à conta "0,9% de
            NaCl"? Tudo isso é o estudo das soluções: a quantidade máxima de soluto que cabe em um solvente
            (o <strong>coeficiente de solubilidade</strong>), como ela muda com a temperatura (as{" "}
            <strong>curvas de solubilidade</strong>) e as formas de medir o quanto de soluto há em cada
            volume (as <strong>unidades de concentração</strong>).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que é uma Solução? Soluto e Solvente</h2>
        <p>
          Uma <strong>solução</strong> é toda <strong>mistura homogênea</strong> — uma única fase, sem
          superfícies de separação visíveis, nem mesmo ao microscópio óptico. Ela é formada por dois
          componentes:
        </p>
        <ul>
          <li>
            <strong>Soluto</strong> (<M>{"1"}</M>): a substância que é dissolvida, geralmente em menor
            quantidade. Ex.: o sal, o açúcar, o gás carbônico.
          </li>
          <li>
            <strong>Solvente</strong> (<M>{"2"}</M>): a substância que dissolve, geralmente em maior
            quantidade. Quando é a água, chamamos a solução de <strong>aquosa</strong> — a água é o
            "solvente universal".
          </li>
        </ul>
        <p>
          A regra prática para prever dissolução é <em>"semelhante dissolve semelhante"</em>: solventes
          polares (água) dissolvem solutos polares ou iônicos (sal, açúcar); solventes apolares (gasolina,
          hexano) dissolvem solutos apolares (óleos, graxas). Por isso óleo não se mistura com água, mas
          remove uma mancha de graxa.
        </p>
        <div className="lesson-highlight">
          <p>
            Convenção de índices usada em toda a química de soluções: o índice <M>{"1"}</M> refere-se ao{" "}
            <strong>soluto</strong>, o índice <M>{"2"}</M> ao <strong>solvente</strong>, e sem índice
            (ou "solução") ao <strong>conjunto</strong>. Assim, <M>{"m_1"}</M> é massa de soluto,{" "}
            <M>{"m_2"}</M> massa de solvente e <M>{"m = m_1 + m_2"}</M> é a massa da solução.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Saturação</span>
        <h2>2. Coeficiente de Solubilidade e Classificação das Soluções</h2>
        <p>
          O <strong>coeficiente de solubilidade (Cs)</strong> é a <strong>quantidade máxima</strong> de
          soluto que se dissolve completamente em uma quantidade-padrão de solvente (em geral 100 g de
          água), a uma <strong>dada temperatura</strong>. Por exemplo, a 20 °C o Cs do NaCl é cerca de 36 g
          por 100 g de água. Comparando a quantidade de soluto presente com o Cs, classificamos a solução:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Classificação</th><th>Quantidade de soluto</th><th>Posição na curva</th><th>Corpo de fundo?</th></tr>
            </thead>
            <tbody>
              <tr><td>Insaturada (diluída)</td><td>Menor que o Cs</td><td>Abaixo da curva</td><td>Não — ainda dissolve mais</td></tr>
              <tr><td>Saturada</td><td>Igual ao Cs</td><td>Sobre a curva</td><td>Não (no limite exato)</td></tr>
              <tr><td>Saturada com corpo de fundo</td><td>Maior que o Cs</td><td>Acima da curva</td><td>Sim — excesso precipitado</td></tr>
              <tr><td>Supersaturada</td><td>Maior que o Cs</td><td>Acima da curva</td><td>Não — instável, sem precipitado</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          O <strong>corpo de fundo</strong> (ou corpo de chão) é o soluto que <em>não</em> se dissolveu e se
          deposita no fundo do recipiente — ele está em equilíbrio dinâmico com a solução saturada acima
          dele. Já a <strong>solução supersaturada</strong> é um caso especial e <strong>instável</strong>:
          contém mais soluto dissolvido que o Cs, obtida resfriando lentamente uma solução saturada quente.
          Qualquer perturbação (um cristal-semente, um arranhão, uma agitação) faz o excesso cristalizar de
          uma vez.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 240" width="480" height="240" aria-label="Béquer com solução saturada e corpo de fundo">
            {/* Béquer 1: insaturada */}
            <path d="M40,60 L40,200 Q40,212 52,212 L96,212 Q108,212 108,200 L108,60" fill="#dbeafe" stroke="#374151" strokeWidth="2"/>
            <line x1="40" y1="60" x2="40" y2="200" stroke="#374151" strokeWidth="2"/>
            <line x1="108" y1="60" x2="108" y2="200" stroke="#374151" strokeWidth="2"/>
            <text x="74" y="48" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">Insaturada</text>
            <text x="74" y="135" textAnchor="middle" fontSize="9" fill="#1e40af">tudo</text>
            <text x="74" y="148" textAnchor="middle" fontSize="9" fill="#1e40af">dissolvido</text>

            {/* Béquer 2: saturada com corpo de fundo */}
            <path d="M196,60 L196,200 Q196,212 208,212 L252,212 Q264,212 264,200 L264,60" fill="#fef3c7" stroke="#374151" strokeWidth="2"/>
            <line x1="196" y1="60" x2="196" y2="200" stroke="#374151" strokeWidth="2"/>
            <line x1="264" y1="60" x2="264" y2="200" stroke="#374151" strokeWidth="2"/>
            <text x="230" y="48" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">Saturada c/ corpo de fundo</text>
            {/* corpo de fundo: cristais no fundo */}
            <rect x="202" y="196" width="9" height="9" fill="#b45309"/>
            <rect x="214" y="200" width="8" height="7" fill="#b45309"/>
            <rect x="225" y="196" width="10" height="10" fill="#b45309"/>
            <rect x="239" y="199" width="8" height="8" fill="#b45309"/>
            <rect x="250" y="197" width="9" height="9" fill="#b45309"/>
            <text x="230" y="130" textAnchor="middle" fontSize="9" fill="#92400e">solução</text>
            <text x="230" y="143" textAnchor="middle" fontSize="9" fill="#92400e">saturada</text>
            <text x="230" y="184" textAnchor="middle" fontSize="8" fill="#7c2d12">excesso (precipitado)</text>

            {/* Béquer 3: supersaturada */}
            <path d="M352,60 L352,200 Q352,212 364,212 L408,212 Q420,212 420,200 L420,60" fill="#ede9fe" stroke="#374151" strokeWidth="2"/>
            <line x1="352" y1="60" x2="352" y2="200" stroke="#374151" strokeWidth="2"/>
            <line x1="420" y1="60" x2="420" y2="200" stroke="#374151" strokeWidth="2"/>
            <text x="386" y="48" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#5b21b6">Supersaturada</text>
            <text x="386" y="130" textAnchor="middle" fontSize="9" fill="#5b21b6">excesso</text>
            <text x="386" y="143" textAnchor="middle" fontSize="9" fill="#5b21b6">dissolvido</text>
            <text x="386" y="156" textAnchor="middle" fontSize="9" fill="#5b21b6">(instável)</text>
          </svg>
          <figcaption>
            Três cenários: insaturada (cabe mais soluto), saturada com corpo de fundo (excesso depositado no
            fundo) e supersaturada (excesso dissolvido de forma instável, sem corpo de fundo).
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráficos</span>
        <h2>3. Curvas de Solubilidade</h2>
        <p>
          A <strong>curva de solubilidade</strong> é o gráfico do coeficiente de solubilidade (em g de
          soluto / 100 g de H₂O) em função da <strong>temperatura</strong>. Ela divide o plano em regiões:
        </p>
        <ul>
          <li><strong>Abaixo</strong> da curva: a solução é <strong>insaturada</strong> (cabe mais soluto).</li>
          <li><strong>Sobre</strong> a curva: a solução está exatamente <strong>saturada</strong>.</li>
          <li><strong>Acima</strong> da curva: há excesso — solução com <strong>corpo de fundo</strong> (estável) ou supersaturada (instável).</li>
        </ul>
        <p>
          Para a maioria dos sólidos (como <M>{"\\text{KNO}_3"}</M>), a dissolução é{" "}
          <strong>endotérmica</strong>: absorve calor, então aquecer favorece a dissolução e a curva é{" "}
          <strong>ascendente</strong> (sobe com a temperatura). Já para <strong>gases</strong> dissolvidos
          (como o CO₂ do refrigerante) a dissolução é exotérmica: aquecer expulsa o gás, e a curva é{" "}
          <strong>descendente</strong>.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 300" width="480" height="300" aria-label="Curva de solubilidade ascendente do nitrato de potássio">
            {/* Eixos */}
            <line x1="56" y1="250" x2="455" y2="250" stroke="#374151" strokeWidth="2"/>
            <line x1="56" y1="24" x2="56" y2="250" stroke="#374151" strokeWidth="2"/>
            <text x="255" y="284" textAnchor="middle" fontSize="13" fill="#374151">Temperatura (°C)</text>
            <text x="18" y="140" textAnchor="middle" fontSize="12" fill="#374151" transform="rotate(-90,18,140)">Cs (g soluto / 100 g H₂O)</text>

            {/* Marcas eixo X */}
            <text x="56" y="266" textAnchor="middle" fontSize="10" fill="#6b7280">0</text>
            <text x="156" y="266" textAnchor="middle" fontSize="10" fill="#6b7280">20</text>
            <text x="256" y="266" textAnchor="middle" fontSize="10" fill="#6b7280">40</text>
            <text x="356" y="266" textAnchor="middle" fontSize="10" fill="#6b7280">60</text>
            <text x="440" y="266" textAnchor="middle" fontSize="10" fill="#6b7280">80</text>

            {/* Marcas eixo Y */}
            <text x="50" y="254" textAnchor="end" fontSize="10" fill="#6b7280">0</text>
            <text x="50" y="190" textAnchor="end" fontSize="10" fill="#6b7280">40</text>
            <text x="50" y="125" textAnchor="end" fontSize="10" fill="#6b7280">80</text>
            <text x="50" y="60" textAnchor="end" fontSize="10" fill="#6b7280">120</text>

            {/* Curva ascendente KNO3 */}
            <path d="M56,235 C140,222 200,196 256,160 C312,124 372,72 440,40" fill="none" stroke="#2563eb" strokeWidth="3"/>
            <text x="368" y="62" fontSize="12" fill="#1d4ed8" fontWeight="bold">KNO₃</text>

            {/* Regiões rotuladas */}
            <text x="150" y="120" textAnchor="middle" fontSize="11" fill="#7c3aed" fontWeight="bold">SUPERSATURADA /</text>
            <text x="150" y="135" textAnchor="middle" fontSize="11" fill="#7c3aed" fontWeight="bold">corpo de fundo</text>
            <text x="150" y="150" textAnchor="middle" fontSize="9" fill="#7c3aed">(acima da curva)</text>

            <text x="320" y="225" textAnchor="middle" fontSize="11" fill="#059669" fontWeight="bold">INSATURADA</text>
            <text x="320" y="240" textAnchor="middle" fontSize="9" fill="#059669">(abaixo da curva)</text>

            {/* Ponto saturado destacado a 40°C */}
            <circle cx="256" cy="160" r="4.5" fill="#dc2626"/>
            <line x1="256" y1="160" x2="256" y2="250" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="56" y1="160" x2="256" y2="160" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
            <text x="270" y="156" fontSize="10" fill="#b91c1c">saturada (≈ 64 g a 40 °C)</text>
          </svg>
          <figcaption>
            Curva ascendente do KNO₃ (dissolução endotérmica): a solubilidade cresce com a temperatura.
            Abaixo da curva → insaturada; sobre a curva → saturada; acima → supersaturada ou com corpo de
            fundo.
          </figcaption>
        </figure>
        <div className="lesson-highlight">
          <p>
            <strong>Aplicação clássica (resfriamento):</strong> uma solução saturada de KNO₃ a 60 °C
            (≈ 105 g/100 g de água) resfriada a 20 °C, onde o Cs cai para ≈ 32 g, não consegue mais manter
            todo o soluto dissolvido. O excesso, cerca de <M>{"105 - 32 = 73"}</M> g por 100 g de água,{" "}
            <strong>cristaliza</strong> (forma corpo de fundo). É assim que se purificam sólidos por
            recristalização.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gases</span>
        <h2>4. Solubilidade de Gases: Temperatura e Pressão</h2>
        <p>
          A solubilidade dos gases em líquidos comporta-se de forma <strong>oposta</strong> à dos sólidos:
        </p>
        <ul>
          <li>
            <strong>Temperatura:</strong> aumentar a temperatura <strong>diminui</strong> a solubilidade
            do gás (curva descendente). Por isso a água fervente "solta" bolhas antes mesmo de ferver, e o
            refrigerante quente perde o gás depressa.
          </li>
          <li>
            <strong>Pressão (Lei de Henry):</strong> a solubilidade de um gás é proporcional à pressão
            parcial dele sobre o líquido — <M>{"S = k_H \\cdot p"}</M>. Ao abrir a garrafa de refrigerante,
            a pressão cai, a solubilidade do CO₂ despenca e ele escapa formando espuma.
          </li>
        </ul>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 250" width="480" height="250" aria-label="Curva descendente de solubilidade de gás versus temperatura">
            {/* Eixos */}
            <line x1="56" y1="210" x2="455" y2="210" stroke="#374151" strokeWidth="2"/>
            <line x1="56" y1="22" x2="56" y2="210" stroke="#374151" strokeWidth="2"/>
            <text x="255" y="240" textAnchor="middle" fontSize="13" fill="#374151">Temperatura (°C)</text>
            <text x="18" y="116" textAnchor="middle" fontSize="11" fill="#374151" transform="rotate(-90,18,116)">Solubilidade do gás</text>

            {/* Curva descendente */}
            <path d="M60,40 C140,80 220,140 320,178 C370,194 410,202 450,206" fill="none" stroke="#dc2626" strokeWidth="3"/>
            <text x="120" y="64" fontSize="12" fill="#b91c1c" fontWeight="bold">CO₂ (gás)</text>
            <text x="300" y="150" fontSize="10" fill="#374151">↓ menos solúvel ao aquecer</text>
          </svg>
          <figcaption>
            Curva descendente: para gases, a solubilidade <strong>diminui</strong> com o aumento da
            temperatura — explica por que peixes têm dificuldade em águas quentes (menos O₂ dissolvido).
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Concentração 1</span>
        <h2>5. Concentração Comum (C)</h2>
        <p>
          A <strong>concentração comum</strong> relaciona a <strong>massa de soluto</strong> com o{" "}
          <strong>volume da solução</strong> (não do solvente):
        </p>
        <div className="math-block">
          <h3>Definição</h3>
          <p><M block>{"C = \\dfrac{m_1}{V}"}</M></p>
          <p>
            <M>{"m_1"}</M> em gramas, <M>{"V"}</M> em litros → unidade <M>{"\\text{g/L}"}</M>.
          </p>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Exemplo:</strong> dissolvendo 20 g de NaCl em água até completar 0,5 L de solução:{" "}
            <M>{"C = \\dfrac{20}{0{,}5} = 40\\ \\text{g/L}"}</M>. Não confunda com densidade: a concentração
            usa a massa do <em>soluto</em>; a densidade usa a massa da <em>solução inteira</em>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Concentração 2</span>
        <h2>6. Densidade e Título (Porcentagem em Massa)</h2>
        <p>
          A <strong>densidade da solução</strong> relaciona a massa <em>total</em> da solução ao seu
          volume: <M>{"d = \\dfrac{m}{V} = \\dfrac{m_1 + m_2}{V}"}</M> (g/mL ou g/L).
        </p>
        <p>
          O <strong>título em massa</strong> (<M>{"\\tau"}</M>) é a fração da massa da solução que
          corresponde ao soluto. Multiplicado por 100, vira a <strong>porcentagem em massa</strong>:
        </p>
        <div className="math-block">
          <h3>Definição</h3>
          <p><M block>{"\\tau = \\dfrac{m_1}{m} = \\dfrac{m_1}{m_1 + m_2} \\qquad \\%\\,(m/m) = \\tau \\times 100"}</M></p>
          <p>O título é adimensional (varia entre 0 e 1).</p>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Exemplo (soro fisiológico):</strong> 0,9 g de NaCl em 100 g de solução →{" "}
            <M>{"\\tau = \\dfrac{0{,}9}{100} = 0{,}009"}</M>, ou seja, <strong>0,9%</strong> em massa. Uma
            relação útil que conecta tudo: <M>{"C = d \\cdot \\tau \\cdot 1000"}</M> (com <M>{"d"}</M> em
            g/mL e <M>{"C"}</M> em g/L).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Concentração 3</span>
        <h2>7. Concentração em Quantidade de Matéria (Molaridade)</h2>
        <p>
          A <strong>concentração em mol/L</strong> (molaridade, ou concentração em quantidade de matéria)
          é a mais usada em laboratório, porque relaciona o número de <strong>mols</strong> de soluto ao
          volume da solução:
        </p>
        <div className="math-block">
          <h3>Definição</h3>
          <p><M block>{"M = \\dfrac{n_1}{V} = \\dfrac{m_1}{MM \\cdot V}"}</M></p>
          <p>
            <M>{"n_1"}</M> = mols de soluto, <M>{"MM"}</M> = massa molar (g/mol), <M>{"V"}</M> em litros →
            unidade <M>{"\\text{mol/L}"}</M>.
          </p>
        </div>
        <p>
          A molaridade e a concentração comum estão diretamente ligadas pela massa molar do soluto:
        </p>
        <div className="lesson-highlight">
          <p>
            <M block>{"C = M \\cdot MM"}</M>
            <strong>Exemplo:</strong> uma solução com 40 g de NaOH (<M>{"MM = 40\\ \\text{g/mol}"}</M>) em
            2 L → <M>{"n_1 = \\dfrac{40}{40} = 1\\ \\text{mol}"}</M> e{" "}
            <M>{"M = \\dfrac{1}{2} = 0{,}5\\ \\text{mol/L}"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Concentração 4</span>
        <h2>8. Partes por Milhão (ppm) e Resumo das Unidades</h2>
        <p>
          Para soluções <strong>muito diluídas</strong> (poluentes, íons na água, aditivos), usamos{" "}
          <strong>partes por milhão (ppm)</strong>: 1 parte de soluto em 1 milhão de partes de solução.
          Em meios aquosos diluídos, vale a equivalência prática:
        </p>
        <div className="math-block">
          <h3>Definição</h3>
          <p><M block>{"1\\ \\text{ppm} = 1\\ \\dfrac{\\text{mg}}{\\text{L}} = 1\\ \\dfrac{\\text{mg}}{\\text{kg}} = \\dfrac{1\\ \\text{g de soluto}}{10^6\\ \\text{g de solução}}"}</M></p>
        </div>
        <p>Veja todas as unidades de concentração reunidas:</p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Unidade</th><th>Fórmula</th><th>Unidade SI usual</th><th>Quando usar</th></tr>
            </thead>
            <tbody>
              <tr><td>Concentração comum</td><td><M>{"C = m_1/V"}</M></td><td>g/L</td><td>Massa de soluto por volume</td></tr>
              <tr><td>Densidade</td><td><M>{"d = m/V"}</M></td><td>g/mL</td><td>Massa total por volume</td></tr>
              <tr><td>Título / porcentagem</td><td><M>{"\\tau = m_1/m"}</M></td><td>— (× 100 = %)</td><td>Rótulos, soluções comerciais</td></tr>
              <tr><td>Molaridade</td><td><M>{"M = n_1/V"}</M></td><td>mol/L</td><td>Cálculos estequiométricos</td></tr>
              <tr><td>ppm</td><td><M>{"\\text{ppm} = m_1/m \\times 10^6"}</M></td><td>mg/L</td><td>Soluções diluídíssimas</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Exemplo:</strong> "a água tem 5 ppm de cloro" significa 5 mg de cloro por litro de água.
            Em 2 L há <M>{"5 \\times 2 = 10\\ \\text{mg}"}</M> de cloro.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🧪</span>
            <h3>Solução</h3>
            <p>Mistura homogênea: soluto (índice 1) + solvente (índice 2). "Semelhante dissolve semelhante".</p>
          </div>
          <div className="math-card">
            <span>📊</span>
            <h3>Coef. de solubilidade</h3>
            <p>Máximo de soluto por 100 g de solvente a dada T. Define saturada/insaturada/supersaturada.</p>
          </div>
          <div className="math-card">
            <span>📈</span>
            <h3>Curvas</h3>
            <p>Sólidos: curva ascendente (endotérmica). Gases: descendente. Acima → corpo de fundo.</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Comum (C)</h3>
            <p><M>{"C = m_1/V"}</M> (g/L). Liga-se ao título por <M>{"C = d\\,\\tau\\,1000"}</M>.</p>
          </div>
          <div className="math-card">
            <span>🔬</span>
            <h3>Molaridade</h3>
            <p><M>{"M = n_1/V"}</M> (mol/L). Relação <M>{"C = M \\cdot MM"}</M>.</p>
          </div>
          <div className="math-card">
            <span>💧</span>
            <h3>ppm</h3>
            <p>1 ppm = 1 mg/L. Para soluções muito diluídas (poluentes, íons).</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Classificação da solução"
          statement={<p>A 20 °C, o coeficiente de solubilidade do KCl é 34 g por 100 g de água. Se forem adicionados 25 g de KCl a 100 g de água a 20 °C, a solução obtida será:</p>}
          options={[
            { letter: "a", text: "Insaturada, pois 25 g é menos que o Cs (34 g).", correct: true },
            { letter: "b", text: "Saturada exatamente no limite." },
            { letter: "c", text: "Saturada com corpo de fundo." },
            { letter: "d", text: "Supersaturada." },
          ]}
          resolution={<p>Como 25 g é <strong>menor</strong> que o coeficiente de solubilidade (34 g/100 g), todo o soluto se dissolve e ainda caberia mais. Logo a solução é <strong>insaturada</strong>, situada abaixo da curva de solubilidade.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Concentração comum"
          statement={<p>Dissolvem-se 50 g de soluto em água até completar 2 L de solução. A concentração comum é:</p>}
          options={[
            { letter: "a", text: "25 g/L", correct: true },
            { letter: "b", text: "100 g/L" },
            { letter: "c", text: "50 g/L" },
            { letter: "d", text: "2,5 g/L" },
          ]}
          resolution={<p><M>{"C = \\dfrac{m_1}{V} = \\dfrac{50}{2} = 25\\ \\text{g/L}"}</M>. A massa de soluto (50 g) é dividida pelo volume da solução (2 L).</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Da massa à molaridade"
          statement={<p>Qual a molaridade de uma solução com 49 g de H₂SO₄ (MM = 98 g/mol) em 500 mL de solução?</p>}
          options={[
            { letter: "a", text: "1,0 mol/L", correct: true },
            { letter: "b", text: "0,5 mol/L" },
            { letter: "c", text: "2,0 mol/L" },
            { letter: "d", text: "0,25 mol/L" },
          ]}
          resolution={<p><M>{"n_1 = \\dfrac{m_1}{MM} = \\dfrac{49}{98} = 0{,}5\\ \\text{mol}"}</M>. Com <M>{"V = 0{,}5\\ \\text{L}"}</M>: <M>{"M = \\dfrac{n_1}{V} = \\dfrac{0{,}5}{0{,}5} = 1{,}0\\ \\text{mol/L}"}</M>.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Recristalização por resfriamento"
          statement={<p>Uma solução saturada de KNO₃ a 60 °C contém 105 g de sal por 100 g de água. Ao resfriar até 20 °C, onde o Cs cai para 32 g/100 g de água, a massa de KNO₃ que cristaliza (corpo de fundo) é:</p>}
          options={[
            { letter: "a", text: "73 g", correct: true },
            { letter: "b", text: "32 g" },
            { letter: "c", text: "105 g" },
            { letter: "d", text: "137 g" },
          ]}
          resolution={<p>A 20 °C apenas 32 g permanecem dissolvidos por 100 g de água. O excesso precipita: <M>{"105 - 32 = 73\\ \\text{g}"}</M>. Esse é o princípio da purificação por recristalização.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Relação entre C, M e título"
          statement={<p>Uma solução de glicose (MM = 180 g/mol) tem densidade 1,1 g/mL e título em massa de 18%. A concentração comum e a molaridade valem, respectivamente:</p>}
          options={[
            { letter: "a", text: "198 g/L e 1,1 mol/L", correct: true },
            { letter: "b", text: "180 g/L e 1,0 mol/L" },
            { letter: "c", text: "18 g/L e 0,1 mol/L" },
            { letter: "d", text: "220 g/L e 2,0 mol/L" },
          ]}
          resolution={<p>Pela relação <M>{"C = d \\cdot \\tau \\cdot 1000 = 1{,}1 \\times 0{,}18 \\times 1000 = 198\\ \\text{g/L}"}</M>. Depois, <M>{"M = \\dfrac{C}{MM} = \\dfrac{198}{180} = 1{,}1\\ \\text{mol/L}"}</M>.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Refrigerante perde gás ao esquentar"
          statement={<p>Um refrigerante gelado e fechado mantém o gás por muito mais tempo do que um quente e aberto, que "murcha" rapidamente. Analisando a curva de solubilidade dos gases e a Lei de Henry, isso ocorre porque a solubilidade do CO₂ em água:</p>}
          options={[
            { letter: "a", text: "Diminui com o aumento da temperatura e com a queda da pressão, liberando o gás.", correct: true },
            { letter: "b", text: "Aumenta com a temperatura, como ocorre com os sólidos." },
            { letter: "c", text: "Não depende nem da temperatura nem da pressão." },
            { letter: "d", text: "Depende apenas da cor e do sabor do refrigerante." },
          ]}
          resolution={<p>Ao contrário dos sólidos, a solubilidade de um gás <strong>cai</strong> ao aquecer (curva descendente) e também cai quando a pressão diminui (Lei de Henry, <M>{"S = k_H \\cdot p"}</M>). Por isso o refrigerante quente e aberto perde CO₂ depressa, enquanto o gelado e fechado o mantém dissolvido.</p>}
        />
      </section>
    </article>
  );
}
