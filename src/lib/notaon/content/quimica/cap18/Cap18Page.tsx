"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap18Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 18</span>
          <h1>Determinação de Fórmulas: Centesimal, Mínima e Molecular</h1>
          <p>
            Quando um químico isola uma substância nova, a primeira pergunta é: <em>quais átomos a
            compõem e em que proporção?</em> A resposta vem em três níveis crescentes de informação — a
            <strong> composição centesimal</strong> (quanto de cada elemento, em porcentagem de massa), a
            <strong> fórmula mínima</strong> (a menor proporção inteira entre os átomos) e a
            <strong> fórmula molecular</strong> (o número real de átomos na molécula). Neste capítulo você
            vai dominar o roteiro completo de cálculo, fazer a aritmética passo a passo e aplicar a clássica
            análise por combustão usada na ENEM e nos vestibulares.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Panorama</span>
        <h2>1. As Três Fórmulas e o que Cada Uma Diz</h2>
        <p>
          As três fórmulas descrevem a mesma substância com níveis diferentes de detalhe. A centesimal é o
          dado <strong>experimental</strong> que sai do laboratório; a mínima é a <strong>proporção</strong>
          mais simples obtida do cálculo; e a molecular é a <strong>verdade completa</strong> sobre a
          molécula — mas só a conseguimos quando conhecemos a massa molar real.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Fórmula</th><th>O que informa</th><th>Como se obtém</th><th>Exemplo (glicose)</th></tr>
            </thead>
            <tbody>
              <tr><td>Centesimal (percentual)</td><td>% em massa de cada elemento</td><td>Análise experimental</td><td>40% C, 6,7% H, 53,3% O</td></tr>
              <tr><td>Mínima (empírica)</td><td>Menor proporção inteira de átomos</td><td>Massa → mol → razão</td><td><M>{"\\text{CH}_2\\text{O}"}</M></td></tr>
              <tr><td>Molecular</td><td>Número real de átomos</td><td>Mínima <M>{"\\times\\, n"}</M> (usa <M>{"M_{\\text{real}}"}</M>)</td><td><M>{"\\text{C}_6\\text{H}_{12}\\text{O}_6"}</M></td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Atenção desde já:</strong> a fórmula molecular é sempre um múltiplo inteiro da mínima.
            Em muitos casos elas <em>coincidem</em> (a água é <M>{"\\text{H}_2\\text{O}"}</M> nas duas), mas
            em outros não — o benzeno tem mínima <M>{"\\text{CH}"}</M> e molecular <M>{"\\text{C}_6\\text{H}_6"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Composição</span>
        <h2>2. Fórmula Centesimal (Percentual)</h2>
        <p>
          A <strong>composição centesimal</strong> indica a massa de cada elemento contida em 100 g do
          composto. Calcula-se dividindo a massa daquele elemento na fórmula pela massa molar total e
          multiplicando por 100:
        </p>
        <div className="math-block">
          <h3>Definição</h3>
          <p><M block>{"\\%\\,\\text{elemento} = \\dfrac{\\text{massa do elemento na fórmula}}{\\text{massa molar do composto}} \\times 100"}</M></p>
        </div>
        <p>
          <strong>Exemplo resolvido — água oxigenada</strong> <M>{"\\text{H}_2\\text{O}_2"}</M> (H = 1, O = 16).
          A massa molar é <M>{"M = 2\\times1 + 2\\times16 = 34\\ \\text{g/mol}"}</M>. Logo:
        </p>
        <div className="lesson-highlight">
          <p><M block>{"\\%\\text{H} = \\dfrac{2}{34}\\times100 \\approx 5{,}9\\%"}</M></p>
          <p><M block>{"\\%\\text{O} = \\dfrac{32}{34}\\times100 \\approx 94{,}1\\%"}</M></p>
          <p>Confira: <M>{"5{,}9\\% + 94{,}1\\% = 100\\%"}</M>. A soma das porcentagens deve sempre fechar em 100%.</p>
        </div>
        <p>
          A figura abaixo mostra a composição centesimal da <strong>glicose</strong> em forma de barra
          empilhada — uma maneira visual de "enxergar" quanto de massa cada elemento representa nos 100 g.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 200" width="480" height="200" aria-label="Barra de composição centesimal da glicose">
            {/* Eixo / régua 0–100% */}
            <line x1="40" y1="150" x2="440" y2="150" stroke="#374151" strokeWidth="2"/>
            <text x="40" y="170" textAnchor="middle" fontSize="10" fill="#374151">0%</text>
            <text x="240" y="170" textAnchor="middle" fontSize="10" fill="#374151">50%</text>
            <text x="440" y="170" textAnchor="middle" fontSize="10" fill="#374151">100%</text>
            <line x1="240" y1="148" x2="240" y2="154" stroke="#374151" strokeWidth="1"/>

            {/* Barra empilhada: C 40%, H 6,7%, O 53,3% sobre 400 px (40 a 440) */}
            {/* C: 40% -> 160 px, de 40 a 200 */}
            <rect x="40" y="60" width="160" height="60" fill="#374151"/>
            <text x="120" y="95" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#ffffff">C 40%</text>
            {/* H: 6,7% -> 26,8 px, de 200 a 226,8 */}
            <rect x="200" y="60" width="27" height="60" fill="#dbeafe" stroke="#2563eb" strokeWidth="1"/>
            <text x="213" y="48" textAnchor="middle" fontSize="10" fill="#1e40af">H 6,7%</text>
            {/* O: 53,3% -> 213,2 px, de 226,8 a 440 */}
            <rect x="227" y="60" width="213" height="60" fill="#dc2626"/>
            <text x="333" y="95" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#ffffff">O 53,3%</text>

            <text x="240" y="30" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#374151">Glicose — composição em massa</text>
          </svg>
          <figcaption>Em 100 g de glicose há 40 g de carbono, 6,7 g de hidrogênio e 53,3 g de oxigênio. A massa do oxigênio domina, mesmo havendo mais átomos de hidrogênio.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O roteiro</span>
        <h2>3. O Caminho Completo: Centesimal → Mínima → Molecular</h2>
        <p>
          Todo o capítulo cabe num único fluxograma. Parte-se das porcentagens (ou massas), converte-se cada
          elemento em <strong>mols</strong> dividindo pela massa atômica, divide-se tudo pelo <strong>menor</strong>
          número de mols para achar a proporção, ajusta-se a inteiros (a fórmula mínima) e, por fim,
          multiplica-se por <M>{"n"}</M> usando a massa molar real para chegar à fórmula molecular.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 360" width="480" height="360" aria-label="Fluxograma da determinação de fórmulas">
            {/* Caixa 1: Centesimal */}
            <rect x="120" y="16" width="240" height="44" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="240" y="38" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">Composição centesimal</text>
            <text x="240" y="53" textAnchor="middle" fontSize="10" fill="#1e40af">% (ou massa) de cada elemento</text>

            {/* seta 1 */}
            <line x1="240" y1="60" x2="240" y2="92" stroke="#374151" strokeWidth="2" markerEnd="url(#f18a)"/>
            <text x="248" y="80" fontSize="10" fill="#059669">÷ massa atômica</text>

            {/* Caixa 2: mols */}
            <rect x="120" y="94" width="240" height="44" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            <text x="240" y="116" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#065f46">Quantidade de matéria (mol)</text>
            <text x="240" y="131" textAnchor="middle" fontSize="10" fill="#065f46">n = m / M de cada elemento</text>

            {/* seta 2 */}
            <line x1="240" y1="138" x2="240" y2="170" stroke="#374151" strokeWidth="2" markerEnd="url(#f18a)"/>
            <text x="248" y="158" fontSize="10" fill="#7c3aed">÷ menor nº de mols</text>

            {/* Caixa 3: proporção */}
            <rect x="120" y="172" width="240" height="44" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2"/>
            <text x="240" y="194" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#5b21b6">Proporção entre átomos</text>
            <text x="240" y="209" textAnchor="middle" fontSize="10" fill="#5b21b6">ajustar a menores inteiros</text>

            {/* seta 3 */}
            <line x1="240" y1="216" x2="240" y2="248" stroke="#374151" strokeWidth="2" markerEnd="url(#f18a)"/>

            {/* Caixa 4: mínima */}
            <rect x="120" y="250" width="240" height="44" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
            <text x="240" y="272" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400e">Fórmula MÍNIMA (empírica)</text>
            <text x="240" y="287" textAnchor="middle" fontSize="10" fill="#92400e">menor proporção inteira</text>

            {/* seta 4 */}
            <line x1="240" y1="294" x2="240" y2="326" stroke="#dc2626" strokeWidth="2" markerEnd="url(#f18b)"/>
            <text x="248" y="314" fontSize="10" fill="#dc2626">× n (usa M real)</text>

            {/* Caixa 5: molecular */}
            <rect x="120" y="328" width="240" height="30" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="2"/>
            <text x="240" y="348" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#991b1b">Fórmula MOLECULAR</text>

            <defs>
              <marker id="f18a" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker>
              <marker id="f18b" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/></marker>
            </defs>
          </svg>
          <figcaption>Roteiro de cálculo: cada seta indica a operação aplicada para passar de um nível ao seguinte. A massa molar real só é necessária no último passo.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Proporção mínima</span>
        <h2>4. Fórmula Mínima (Empírica) — Cálculo Passo a Passo</h2>
        <p>
          A fórmula mínima é a <strong>menor proporção inteira</strong> entre os átomos. O erro mais comum é
          comparar <em>porcentagens</em> diretamente — elas estão em massa, não em número de átomos. É
          obrigatório converter para mols antes de comparar.
        </p>
        <div className="lesson-highlight">
          <h3>Os 4 passos</h3>
          <ol>
            <li>Tome 100 g do composto: a porcentagem vira massa em gramas.</li>
            <li>Converta a massa de cada elemento em mols: <M>{"n = m / M"}</M>.</li>
            <li>Divida todos os mols pelo <strong>menor</strong> valor encontrado.</li>
            <li>Se sobrarem decimais (como 1,5 ou 1,33), multiplique <em>todos</em> por um inteiro até obter números inteiros.</li>
          </ol>
        </div>
        <p>
          <strong>Exemplo resolvido — glicose</strong> (40% C, 6,7% H, 53,3% O; C = 12, H = 1, O = 16).
          Em 100 g temos 40 g de C, 6,7 g de H e 53,3 g de O. Veja a tabela de cálculo:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Elemento</th><th>% = massa (g)</th><th>Massa atômica</th><th>mol = massa ÷ MA</th><th>÷ menor (3,33)</th><th>Proporção inteira</th></tr>
            </thead>
            <tbody>
              <tr><td>C</td><td>40</td><td>12</td><td><M>{"40/12 = 3{,}33"}</M></td><td><M>{"3{,}33/3{,}33 = 1"}</M></td><td>1</td></tr>
              <tr><td>H</td><td>6,7</td><td>1</td><td><M>{"6{,}7/1 = 6{,}7"}</M></td><td><M>{"6{,}7/3{,}33 \\approx 2"}</M></td><td>2</td></tr>
              <tr><td>O</td><td>53,3</td><td>16</td><td><M>{"53{,}3/16 = 3{,}33"}</M></td><td><M>{"3{,}33/3{,}33 = 1"}</M></td><td>1</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            A proporção C : H : O é 1 : 2 : 1, então a fórmula mínima é <M>{"\\text{CH}_2\\text{O}"}</M>, cuja
            massa é <M>{"12 + 2 + 16 = 30\\ \\text{g/mol}"}</M>. Guarde esse valor: ele será usado para achar
            a fórmula molecular na próxima seção.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A molécula real</span>
        <h2>5. Fórmula Molecular — Achando o Fator n</h2>
        <p>
          A fórmula molecular é um <strong>múltiplo inteiro</strong> da fórmula mínima. Para descobrir esse
          múltiplo, precisamos da <strong>massa molar real</strong> do composto (obtida por outras técnicas,
          como medida de massa por mol de gás). O fator <M>{"n"}</M> é a razão entre as duas massas:
        </p>
        <div className="math-block">
          <h3>Fator de multiplicação</h3>
          <p><M block>{"n = \\dfrac{M_{\\text{real}}}{M_{\\text{fórmula mínima}}} \\qquad\\Rightarrow\\qquad \\text{Fórmula molecular} = (\\text{fórmula mínima})_n"}</M></p>
        </div>
        <p>
          <strong>Continuando a glicose:</strong> a massa molar real é 180 g/mol e a massa da mínima
          (<M>{"\\text{CH}_2\\text{O}"}</M>) é 30 g/mol. Então:
        </p>
        <div className="lesson-highlight">
          <p><M block>{"n = \\dfrac{180}{30} = 6 \\quad\\Rightarrow\\quad (\\text{CH}_2\\text{O})_6 = \\text{C}_6\\text{H}_{12}\\text{O}_6"}</M></p>
          <p>A glicose tem, de fato, 6 carbonos, 12 hidrogênios e 6 oxigênios na molécula real.</p>
        </div>
        <p>
          Veja como a mesma fórmula mínima pode gerar moléculas reais diferentes dependendo de <M>{"n"}</M> —
          todas têm a <em>mesma</em> composição centesimal:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Fórmula mínima</th><th>Massa mínima</th><th>Massa real</th><th><M>{"n"}</M></th><th>Fórmula molecular</th><th>Substância</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"\\text{CH}_2\\text{O}"}</M></td><td>30</td><td>30</td><td>1</td><td><M>{"\\text{CH}_2\\text{O}"}</M></td><td>Formaldeído</td></tr>
              <tr><td><M>{"\\text{CH}_2\\text{O}"}</M></td><td>30</td><td>60</td><td>2</td><td><M>{"\\text{C}_2\\text{H}_4\\text{O}_2"}</M></td><td>Ácido acético</td></tr>
              <tr><td><M>{"\\text{CH}_2\\text{O}"}</M></td><td>30</td><td>180</td><td>6</td><td><M>{"\\text{C}_6\\text{H}_{12}\\text{O}_6"}</M></td><td>Glicose</td></tr>
              <tr><td><M>{"\\text{CH}"}</M></td><td>13</td><td>78</td><td>6</td><td><M>{"\\text{C}_6\\text{H}_6"}</M></td><td>Benzeno</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Técnica clássica</span>
        <h2>6. Determinação por Combustão</h2>
        <p>
          Para compostos orgânicos, a fórmula é frequentemente obtida por <strong>análise por combustão</strong>.
          Queima-se a amostra com excesso de oxigênio: todo o <strong>carbono</strong> vira
          <M>{"\\ \\text{CO}_2"}</M> e todo o <strong>hidrogênio</strong> vira <M>{"\\text{H}_2\\text{O}"}</M>.
          Medindo as massas desses dois produtos, recuperamos as massas de C e H da amostra. O oxigênio
          (se houver) é obtido <strong>por diferença</strong>.
        </p>
        <div className="math-block">
          <h3>Fórmulas de recuperação</h3>
          <p><M block>{"m_{\\text{C}} = \\dfrac{12}{44}\\times m_{\\text{CO}_2} \\qquad m_{\\text{H}} = \\dfrac{2}{18}\\times m_{\\text{H}_2\\text{O}}"}</M></p>
          <p><M block>{"m_{\\text{O}} = m_{\\text{amostra}} - (m_{\\text{C}} + m_{\\text{H}})"}</M></p>
        </div>
        <p>
          As frações <M>{"12/44"}</M> e <M>{"2/18"}</M> são as proporções de massa: numa molécula de
          <M>{"\\ \\text{CO}_2"}</M> (massa 44) há 12 de carbono; numa de água (massa 18) há 2 de hidrogênio.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo resolvido</h3>
          <p>
            A combustão de 4,6 g de um composto orgânico produziu 8,8 g de <M>{"\\text{CO}_2"}</M> e
            5,4 g de <M>{"\\text{H}_2\\text{O}"}</M>. Vamos achar a fórmula mínima.
          </p>
          <p><M block>{"m_{\\text{C}} = \\dfrac{12}{44}\\times 8{,}8 = 2{,}4\\ \\text{g} \\quad\\Rightarrow\\quad n_{\\text{C}} = \\dfrac{2{,}4}{12} = 0{,}2\\ \\text{mol}"}</M></p>
          <p><M block>{"m_{\\text{H}} = \\dfrac{2}{18}\\times 5{,}4 = 0{,}6\\ \\text{g} \\quad\\Rightarrow\\quad n_{\\text{H}} = \\dfrac{0{,}6}{1} = 0{,}6\\ \\text{mol}"}</M></p>
          <p><M block>{"m_{\\text{O}} = 4{,}6 - (2{,}4 + 0{,}6) = 1{,}6\\ \\text{g} \\quad\\Rightarrow\\quad n_{\\text{O}} = \\dfrac{1{,}6}{16} = 0{,}1\\ \\text{mol}"}</M></p>
          <p>
            Dividindo pelo menor (0,1): C = 2, H = 6, O = 1 → fórmula mínima <M>{"\\text{C}_2\\text{H}_6\\text{O}"}</M>
            (etanol, se a massa molar real for 46 g/mol, pois <M>{"n = 46/46 = 1"}</M>).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Atenção</span>
        <h2>7. Cuidados e Armadilhas Comuns</h2>
        <div className="lesson-highlight">
          <ul>
            <li><strong>Massa não é mol.</strong> Nunca compare porcentagens ou gramas diretamente — sempre passe para mols dividindo pela massa atômica.</li>
            <li><strong>Arredonde com critério.</strong> Um valor 3,33 não vira 3 nem 4; multiplique tudo por 3. Já 0,98 ou 2,03 podem ser arredondados (erro experimental).</li>
            <li><strong>Decimais típicos:</strong> 0,5 → ×2; 0,33 ou 0,67 → ×3; 0,25 ou 0,75 → ×4.</li>
            <li><strong>Mínima ≠ molecular nem sempre.</strong> Só são iguais quando <M>{"n = 1"}</M> (água, gás carbônico). Sem a massa molar real, você só chega à mínima.</li>
            <li><strong>Oxigênio por diferença.</strong> Na combustão, o O da amostra nunca é medido direto — vem da subtração da massa total.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>%</span>
            <h3>Centesimal</h3>
            <p><M>{"\\% = \\frac{m_{el}}{M}\\times100"}</M>. A soma fecha 100%.</p>
          </div>
          <div className="math-card">
            <span>➗</span>
            <h3>Mínima</h3>
            <p>massa → mol → ÷ menor mol → ajustar a inteiros.</p>
          </div>
          <div className="math-card">
            <span>🧬</span>
            <h3>Molecular</h3>
            <p><M>{"n = \\frac{M_{real}}{M_{mínima}}"}</M>; molecular = (mínima)<sub>n</sub>.</p>
          </div>
          <div className="math-card">
            <span>🔥</span>
            <h3>Combustão</h3>
            <p>C → CO₂ (×12/44), H → H₂O (×2/18); O por diferença.</p>
          </div>
          <div className="math-card">
            <span>⚠️</span>
            <h3>Cuidado</h3>
            <p>Sempre converta massa → mol antes de comparar.</p>
          </div>
          <div className="math-card">
            <span>🧪</span>
            <h3>Clássico</h3>
            <p>CH₂O ×6 = glicose; CH ×6 = benzeno; H₂O₂ = água oxigenada.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Porcentagem em massa"
          statement={<p>No carbonato de cálcio <M>{"\\text{CaCO}_3"}</M> (M = 100 g/mol), a porcentagem em massa de cálcio (Ca = 40) é:</p>}
          options={[
            { letter: "a", text: "40%", correct: true },
            { letter: "b", text: "12%" },
            { letter: "c", text: "48%" },
            { letter: "d", text: "60%" },
          ]}
          resolution={<p><M>{"\\%\\text{Ca} = \\dfrac{40}{100}\\times100 = 40\\%"}</M>. Os demais elementos: <M>{"\\%\\text{C} = 12/100\\times100 = 12\\%"}</M> e <M>{"\\%\\text{O} = 48/100\\times100 = 48\\%"}</M> (são 3 oxigênios = 48). A soma 40 + 12 + 48 = 100% confirma.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Fórmula mínima a partir da molecular"
          statement={<p>O eteno tem fórmula molecular <M>{"\\text{C}_2\\text{H}_4"}</M>. Sua fórmula mínima é:</p>}
          options={[
            { letter: "a", text: "CH₂", correct: true },
            { letter: "b", text: "C₂H₄" },
            { letter: "c", text: "CH" },
            { letter: "d", text: "C₂H₂" },
          ]}
          resolution={<p>A fórmula mínima é a menor proporção inteira. Dividindo os índices pelo MDC (2): <M>{"\\text{C}_{2/2}\\text{H}_{4/2} = \\text{CH}_2"}</M>. A proporção C : H = 1 : 2 já está em inteiros.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Determinando a fórmula mínima de um óxido"
          statement={<p>Um óxido de ferro contém 70% de ferro e 30% de oxigênio em massa (Fe = 56, O = 16). A fórmula mínima é:</p>}
          options={[
            { letter: "a", text: "Fe₂O₃", correct: true },
            { letter: "b", text: "FeO" },
            { letter: "c", text: "Fe₃O₄" },
            { letter: "d", text: "FeO₂" },
          ]}
          resolution={<p>Em 100 g: <M>{"n_{\\text{Fe}} = 70/56 = 1{,}25"}</M> mol; <M>{"n_{\\text{O}} = 30/16 = 1{,}875"}</M> mol. Dividindo pelo menor (1,25): Fe = 1, O = 1,5. Como sobrou decimal, multiplica-se tudo por 2: Fe = 2, O = 3 → <M>{"\\text{Fe}_2\\text{O}_3"}</M> (hematita).</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Da mínima para a molecular"
          statement={<p>Um hidrocarboneto tem fórmula mínima <M>{"\\text{CH}_2"}</M> (massa 14) e massa molar real medida em 42 g/mol. Sua fórmula molecular é:</p>}
          options={[
            { letter: "a", text: "C₃H₆", correct: true },
            { letter: "b", text: "CH₂" },
            { letter: "c", text: "C₂H₄" },
            { letter: "d", text: "C₄H₈" },
          ]}
          resolution={<p><M>{"n = \\dfrac{M_{\\text{real}}}{M_{\\text{mínima}}} = \\dfrac{42}{14} = 3"}</M>. Logo a fórmula molecular é <M>{"(\\text{CH}_2)_3 = \\text{C}_3\\text{H}_6"}</M> (propeno).</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Análise por combustão"
          statement={<p>A combustão completa de um hidrocarboneto produziu 44 g de <M>{"\\text{CO}_2"}</M> e 27 g de <M>{"\\text{H}_2\\text{O}"}</M>. As massas de carbono e de hidrogênio na amostra e a fórmula mínima são, respectivamente:</p>}
          options={[
            { letter: "a", text: "12 g de C, 3 g de H → CH₃", correct: true },
            { letter: "b", text: "44 g de C, 27 g de H → CHO" },
            { letter: "c", text: "12 g de C, 18 g de H → CH₂" },
            { letter: "d", text: "6 g de C, 3 g de H → C₂H₆" },
          ]}
          resolution={<p>Carbono: <M>{"m_{\\text{C}} = \\dfrac{12}{44}\\times44 = 12\\ \\text{g} \\Rightarrow n_{\\text{C}} = 12/12 = 1"}</M> mol. Hidrogênio: <M>{"m_{\\text{H}} = \\dfrac{2}{18}\\times27 = 3\\ \\text{g} \\Rightarrow n_{\\text{H}} = 3/1 = 3"}</M> mol. Proporção C : H = 1 : 3 → fórmula mínima <M>{"\\text{CH}_3"}</M>.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Vitamina C"
          statement={<p>A análise da vitamina C (ácido ascórbico) revelou 40,9% C, 4,5% H e 54,6% O em massa, com massa molar real de 176 g/mol (C = 12, H = 1, O = 16). Considerando 100 g, suas fórmulas mínima e molecular são:</p>}
          options={[
            { letter: "a", text: "Mínima C₃H₄O₃ e molecular C₆H₈O₆", correct: true },
            { letter: "b", text: "Mínima CHO e molecular C₆H₆O₆" },
            { letter: "c", text: "Mínima C₂H₃O₂ e molecular C₄H₆O₄" },
            { letter: "d", text: "Mínima C₆H₈O₆ e molecular C₃H₄O₃" },
          ]}
          resolution={<p>Mols em 100 g: <M>{"n_{\\text{C}} = 40{,}9/12 \\approx 3{,}4"}</M>; <M>{"n_{\\text{H}} = 4{,}5/1 = 4{,}5"}</M>; <M>{"n_{\\text{O}} = 54{,}6/16 \\approx 3{,}4"}</M>. Dividindo pelo menor (3,4): C = 1, H ≈ 1,33, O = 1. Multiplicando por 3: C = 3, H = 4, O = 3 → mínima <M>{"\\text{C}_3\\text{H}_4\\text{O}_3"}</M> (massa <M>{"36+4+48 = 88"}</M>). Fator <M>{"n = 176/88 = 2"}</M> → molecular <M>{"\\text{C}_6\\text{H}_8\\text{O}_6"}</M>.</p>}
        />
      </section>
    </article>
  );
}
