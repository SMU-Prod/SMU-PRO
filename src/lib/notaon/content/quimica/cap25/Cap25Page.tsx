"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap25Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 25</span>
          <h1>Termoquímica II: Formação, Combustão, Energia de Ligação e Lei de Hess</h1>
          <p>
            Como saber quanto calor uma reação libera sem precisar acendê-la num laboratório? A
            termoquímica nos dá quatro ferramentas poderosas: as <strong>entalpias-padrão de
            formação</strong>, as <strong>entalpias de combustão</strong>, as <strong>energias de
            ligação</strong> e — a mais elegante de todas — a <strong>Lei de Hess</strong>, que trata o
            <M>{"\\Delta H"}</M> como uma função de estado: o calor de uma reação depende só do começo e do
            fim, nunca do caminho. Neste capítulo vamos calcular o <M>{"\\Delta H"}</M> de várias formas e
            conferir que todas chegam ao mesmo número.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estado padrão</span>
        <h2>1. O Estado Padrão e o Símbolo <M>{"\\Delta H^{\\circ}"}</M></h2>
        <p>
          Para comparar entalpias é preciso fixar uma referência comum. O <strong>estado padrão</strong> de
          uma substância é a sua forma mais estável a <strong>25 °C (298 K) e 1 atm</strong>. Quando uma
          variação de entalpia é medida nessas condições, ela recebe o índice grau:{" "}
          <M>{"\\Delta H^{\\circ}"}</M>. Assim, falamos de entalpia-padrão de formação{" "}
          <M>{"(\\Delta H_f^{\\circ})"}</M>, de combustão <M>{"(\\Delta H_c^{\\circ})"}</M> e assim por
          diante.
        </p>
        <div className="lesson-highlight">
          <h3>Convenção fundamental</h3>
          <p>
            A entalpia-padrão de formação de uma <strong>substância simples na sua forma mais
            estável</strong> é, por definição, <strong>zero</strong>. Exemplos:{" "}
            <M>{"\\Delta H_f^{\\circ}(\\text{O}_{2(g)}) = 0"}</M>,{" "}
            <M>{"\\Delta H_f^{\\circ}(\\text{H}_{2(g)}) = 0"}</M>,{" "}
            <M>{"\\Delta H_f^{\\circ}(\\text{C}_{\\text{grafite}}) = 0"}</M>. Atenção: a forma instável tem
            valor diferente de zero — o ozônio <M>{"\\text{O}_{3(g)}"}</M> tem{" "}
            <M>{"\\Delta H_f^{\\circ} = +143\\ \\text{kJ/mol}"}</M>, e o diamante tem{" "}
            <M>{"+1{,}9\\ \\text{kJ/mol}"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Formação</span>
        <h2>2. Entalpia-Padrão de Formação <M>{"(\\Delta H_f^{\\circ})"}</M></h2>
        <p>
          A entalpia-padrão de formação é o <M>{"\\Delta H"}</M> da reação que forma{" "}
          <strong>1 mol</strong> de uma substância <strong>a partir de seus elementos no estado padrão</strong>.
          Por exemplo, a formação da água líquida é a reação:
        </p>
        <p>
          <M block>{"\\text{H}_{2(g)} + \\tfrac{1}{2}\\,\\text{O}_{2(g)} \\rightarrow \\text{H}_2\\text{O}_{(l)} \\qquad \\Delta H_f^{\\circ} = -286\\ \\text{kJ/mol}"}</M>
        </p>
        <p>
          Conhecendo os <M>{"\\Delta H_f^{\\circ}"}</M> de reagentes e produtos (todos tabelados), o calor de
          qualquer reação sai de uma única fórmula — produtos menos reagentes, sempre multiplicando cada
          entalpia pelo coeficiente estequiométrico:
        </p>
        <div className="math-block">
          <h3>Cálculo do <M>{"\\Delta H"}</M> por entalpias de formação</h3>
          <p>
            <M block>{"\\Delta H_{\\text{reação}}^{\\circ} = \\sum n \\cdot \\Delta H_f^{\\circ}(\\text{produtos}) - \\sum n \\cdot \\Delta H_f^{\\circ}(\\text{reagentes})"}</M>
          </p>
        </div>
        <p>
          Os valores abaixo são os mais cobrados em vestibulares e no ENEM. Note que as substâncias
          simples (<M>{"\\text{O}_2"}</M>, <M>{"\\text{H}_2"}</M>, C grafite) valem zero.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Substância</th><th>Estado</th><th><M>{"\\Delta H_f^{\\circ}"}</M> (kJ/mol)</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"\\text{O}_2"}</M> / <M>{"\\text{H}_2"}</M> / C grafite</td><td>g / g / s</td><td>0 (referência)</td></tr>
              <tr><td><M>{"\\text{H}_2\\text{O}"}</M></td><td>líquido</td><td>−286</td></tr>
              <tr><td><M>{"\\text{H}_2\\text{O}"}</M></td><td>vapor</td><td>−242</td></tr>
              <tr><td><M>{"\\text{CO}_2"}</M></td><td>gás</td><td>−394</td></tr>
              <tr><td><M>{"\\text{CO}"}</M></td><td>gás</td><td>−111</td></tr>
              <tr><td><M>{"\\text{CH}_4"}</M> (metano)</td><td>gás</td><td>−75</td></tr>
              <tr><td><M>{"\\text{C}_2\\text{H}_5\\text{OH}"}</M> (etanol)</td><td>líquido</td><td>−278</td></tr>
              <tr><td><M>{"\\text{NH}_3"}</M> (amônia)</td><td>gás</td><td>−46</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo resolvido — combustão do metano</h3>
          <p>
            Para <M>{"\\text{CH}_{4(g)} + 2\\,\\text{O}_{2(g)} \\rightarrow \\text{CO}_{2(g)} + 2\\,\\text{H}_2\\text{O}_{(l)}"}</M>,
            usando a tabela:
          </p>
          <p>
            <M block>{"\\Delta H^{\\circ} = \\big[\\,(-394) + 2(-286)\\,\\big] - \\big[\\,(-75) + 2(0)\\,\\big]"}</M>
          </p>
          <p>
            <M block>{"\\Delta H^{\\circ} = (-394 - 572) - (-75) = -966 + 75 = -891\\ \\text{kJ}"}</M>
          </p>
          <p>
            O resultado negativo confirma: a queima do gás de cozinha é fortemente exotérmica, liberando
            891 kJ por mol de metano.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Combustão</span>
        <h2>3. Entalpia de Combustão <M>{"(\\Delta H_c^{\\circ})"}</M></h2>
        <p>
          A entalpia de combustão é o <M>{"\\Delta H"}</M> da <strong>queima completa de 1 mol</strong> de
          uma substância com oxigênio, formando os óxidos mais estáveis (<M>{"\\text{CO}_2"}</M> e{" "}
          <M>{"\\text{H}_2\\text{O}"}</M> para compostos orgânicos). Como toda combustão libera energia,{" "}
          <M>{"\\Delta H_c^{\\circ}"}</M> é <strong>sempre negativa</strong>.
        </p>
        <p>
          Esse é o parâmetro que permite comparar combustíveis. Para decidir qual rende mais, dividimos o
          calor liberado pela massa molar e obtemos a energia por grama — o que de fato importa no tanque
          de um carro ou no botijão de cozinha.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Combustível</th><th>M (g/mol)</th><th><M>{"\\Delta H_c^{\\circ}"}</M> (kJ/mol)</th><th>Energia por grama</th></tr>
            </thead>
            <tbody>
              <tr><td>Hidrogênio <M>{"\\text{H}_2"}</M></td><td>2</td><td>−286</td><td>≈ 143 kJ/g</td></tr>
              <tr><td>Metano <M>{"\\text{CH}_4"}</M></td><td>16</td><td>−891</td><td>≈ 56 kJ/g</td></tr>
              <tr><td>Etanol <M>{"\\text{C}_2\\text{H}_5\\text{OH}"}</M></td><td>46</td><td>−1368</td><td>≈ 30 kJ/g</td></tr>
              <tr><td>Octano (gasolina)</td><td>114</td><td>−5471</td><td>≈ 48 kJ/g</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          O hidrogênio é, de longe, o que mais libera energia por grama — uma das razões do interesse
          mundial nos veículos a célula de combustível. Já o etanol, embora libere menos por grama que a
          gasolina, é renovável e produz menos poluentes.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ligações</span>
        <h2>4. Energia de Ligação</h2>
        <p>
          A <strong>energia de ligação</strong> é a energia necessária para <strong>romper 1 mol de uma
          dada ligação</strong>, com todas as espécies no estado gasoso. Romper ligações sempre{" "}
          <strong>absorve</strong> energia (endotérmico, valor positivo); formar ligações sempre{" "}
          <strong>libera</strong> energia (exotérmico). O <M>{"\\Delta H"}</M> de uma reação é o saldo entre
          o que se gasta para quebrar os reagentes e o que se recupera ao formar os produtos:
        </p>
        <div className="math-block">
          <h3>Cálculo do <M>{"\\Delta H"}</M> por energias de ligação</h3>
          <p>
            <M block>{"\\Delta H = \\sum E_{\\text{lig}}(\\text{quebradas}) - \\sum E_{\\text{lig}}(\\text{formadas})"}</M>
          </p>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Ligação</th><th>Energia média (kJ/mol)</th><th>Ligação</th><th>Energia média (kJ/mol)</th></tr>
            </thead>
            <tbody>
              <tr><td>H—H</td><td>436</td><td>C—H</td><td>413</td></tr>
              <tr><td>O=O</td><td>498</td><td>C—C</td><td>347</td></tr>
              <tr><td>O—H</td><td>463</td><td>C=O (em <M>{"\\text{CO}_2"}</M>)</td><td>799</td></tr>
              <tr><td>C—O</td><td>358</td><td>C≡C</td><td>839</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo resolvido — formação da água</h3>
          <p>
            Para <M>{"2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}"}</M>: quebram-se 2
            ligações H—H e 1 ligação O=O; formam-se 4 ligações O—H (2 em cada molécula de água).
          </p>
          <p>
            <M block>{"\\Delta H = \\underbrace{[\\,2(436) + 1(498)\\,]}_{\\text{quebradas}} - \\underbrace{[\\,4(463)\\,]}_{\\text{formadas}}"}</M>
          </p>
          <p>
            <M block>{"\\Delta H = (872 + 498) - 1852 = 1370 - 1852 = -482\\ \\text{kJ}"}</M>
          </p>
          <p>
            Como são 2 mols de água, isso dá cerca de <M>{"-241\\ \\text{kJ/mol}"}</M> — bem próximo do{" "}
            <M>{"\\Delta H_f^{\\circ}"}</M> tabelado para o vapor d'água (−242 kJ/mol). A pequena diferença
            vem do fato de as energias de ligação serem <em>valores médios</em>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A ferramenta-chave</span>
        <h2>5. A Lei de Hess</h2>
        <p>
          Em 1840, Germain Hess enunciou: <em>"a variação de entalpia de uma reação química depende apenas
          dos estados inicial e final, não do caminho percorrido."</em> Em outras palavras, a entalpia é uma{" "}
          <strong>função de estado</strong>. Se uma reação pode ocorrer em uma única etapa ou em várias, o{" "}
          <M>{"\\Delta H"}</M> total é o mesmo — basta somar os <M>{"\\Delta H"}</M> das etapas.
        </p>
        <p>
          O diagrama abaixo mostra essa ideia: ir de A direto até C (caminho direto) ou passar por um
          intermediário B (caminho em etapas) custa exatamente a mesma energia.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 300" width="480" height="300" aria-label="Diagrama da Lei de Hess: caminho direto versus caminho em etapas">
            {/* Eixos */}
            <line x1="56" y1="260" x2="450" y2="260" stroke="#374151" strokeWidth="2"/>
            <line x1="56" y1="24" x2="56" y2="260" stroke="#374151" strokeWidth="2"/>
            <text x="252" y="288" textAnchor="middle" fontSize="12" fill="#374151">Avanço da reação</text>
            <text x="20" y="145" textAnchor="middle" fontSize="12" fill="#374151" transform="rotate(-90,20,145)">Entalpia (H)</text>

            {/* Níveis de energia (patamares) */}
            <line x1="90" y1="70" x2="170" y2="70" stroke="#2563eb" strokeWidth="3"/>
            <text x="100" y="60" fontSize="12" fontWeight="bold" fill="#1e40af">A (reagentes)</text>

            <line x1="240" y1="150" x2="320" y2="150" stroke="#7c3aed" strokeWidth="3"/>
            <text x="252" y="142" fontSize="12" fontWeight="bold" fill="#5b21b6">B (intermediário)</text>

            <line x1="370" y1="220" x2="445" y2="220" stroke="#059669" strokeWidth="3"/>
            <text x="372" y="240" fontSize="12" fontWeight="bold" fill="#065f46">C (produtos)</text>

            {/* Caminho em etapas: A -> B -> C */}
            <line x1="170" y1="70" x2="240" y2="150" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#hess-amber)"/>
            <text x="158" y="120" fontSize="11" fill="#b45309">ΔH₁</text>
            <line x1="320" y1="150" x2="370" y2="220" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#hess-amber)"/>
            <text x="330" y="195" fontSize="11" fill="#b45309">ΔH₂</text>

            {/* Caminho direto: A -> C */}
            <line x1="130" y1="70" x2="405" y2="220" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#hess-red)"/>
            <text x="226" y="118" fontSize="11" fontWeight="bold" fill="#b91c1c">ΔH (direto)</text>

            {/* Igualdade */}
            <text x="240" y="40" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#374151">ΔH = ΔH₁ + ΔH₂</text>

            <defs>
              <marker id="hess-amber" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f59e0b"/></marker>
              <marker id="hess-red" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/></marker>
            </defs>
          </svg>
          <figcaption>Lei de Hess: o caminho direto (vermelho tracejado) e o caminho em etapas via B (laranja) partem de A e chegam a C com a mesma variação total de entalpia.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <h3>Regras de manipulação das equações</h3>
          <ul>
            <li><strong>Inverter</strong> uma equação → <strong>troca o sinal</strong> do <M>{"\\Delta H"}</M>.</li>
            <li><strong>Multiplicar</strong> uma equação por um fator → <strong>multiplica</strong> o <M>{"\\Delta H"}</M> pelo mesmo fator.</li>
            <li><strong>Somar</strong> as equações (cancelando o que aparece dos dois lados) → <strong>soma</strong> os <M>{"\\Delta H"}</M> correspondentes.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Triângulo de Hess</span>
        <h2>6. Exemplo Resolvido com o Ciclo de Hess</h2>
        <p>
          Queremos o <M>{"\\Delta H"}</M> da reação que <strong>não</strong> conseguimos medir
          diretamente (a queima do carbono a CO, que sempre forma também CO₂):
        </p>
        <p>
          <M block>{"\\text{C}_{(s)} + \\tfrac{1}{2}\\,\\text{O}_{2(g)} \\rightarrow \\text{CO}_{(g)} \\qquad \\Delta H = \\,?"}</M>
        </p>
        <p>Dispomos de duas reações tabeladas e mensuráveis:</p>
        <p>
          (1) <M>{"\\text{C}_{(s)} + \\text{O}_{2(g)} \\rightarrow \\text{CO}_{2(g)} \\quad \\Delta H_1 = -394\\ \\text{kJ}"}</M>
        </p>
        <p>
          (2) <M>{"\\text{CO}_{(g)} + \\tfrac{1}{2}\\,\\text{O}_{2(g)} \\rightarrow \\text{CO}_{2(g)} \\quad \\Delta H_2 = -283\\ \\text{kJ}"}</M>
        </p>
        <p>
          Mantemos (1) como está e <strong>invertemos</strong> (2) — o que troca o sinal do seu{" "}
          <M>{"\\Delta H"}</M>. Somando, o <M>{"\\text{CO}_2"}</M> aparece em lados opostos e cancela:
        </p>
        <div className="lesson-highlight">
          <p>
            <M block>{"\\Delta H = \\Delta H_1 + (-\\Delta H_2) = -394 - (-283) = -394 + 283 = -111\\ \\text{kJ}"}</M>
          </p>
        </div>
        <p>
          O triângulo abaixo deixa visual: do vértice C (carbono + O₂) podemos descer direto até CO + ½O₂
          ou passar por CO₂ no caminho inferior. As setas e seus <M>{"\\Delta H"}</M> fecham o ciclo.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 280" width="480" height="280" aria-label="Triângulo de Hess para a formação de CO">
            {/* Vértices */}
            <rect x="170" y="30" width="150" height="42" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="245" y="48" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">C(s) + O₂(g)</text>
            <text x="245" y="64" textAnchor="middle" fontSize="10" fill="#1e40af">estado inicial</text>

            <rect x="20" y="200" width="150" height="42" rx="6" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            <text x="95" y="218" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">CO(g) + ½O₂(g)</text>
            <text x="95" y="234" textAnchor="middle" fontSize="10" fill="#065f46">estado final</text>

            <rect x="320" y="200" width="140" height="42" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            <text x="390" y="226" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">CO₂(g)</text>

            {/* Seta direta (esquerda): C+O2 -> CO + 1/2 O2  (procurada) */}
            <line x1="190" y1="72" x2="105" y2="196" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="6,4" markerEnd="url(#tri-red)"/>
            <text x="100" y="135" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#b91c1c">ΔH = ?</text>
            <text x="100" y="150" textAnchor="middle" fontSize="10" fill="#b91c1c">(−111 kJ)</text>

            {/* Seta (1): C+O2 -> CO2 */}
            <line x1="300" y1="72" x2="385" y2="196" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#tri-blue)"/>
            <text x="378" y="135" textAnchor="middle" fontSize="11" fill="#1d4ed8">ΔH₁ = −394</text>

            {/* Seta inversa de (2): CO2 -> CO + 1/2 O2  (etapa de baixo) */}
            <line x1="318" y1="221" x2="172" y2="221" stroke="#7c3aed" strokeWidth="2.5" markerEnd="url(#tri-purple)"/>
            <text x="245" y="214" textAnchor="middle" fontSize="11" fill="#5b21b6">−ΔH₂ = +283</text>

            <defs>
              <marker id="tri-red" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/></marker>
              <marker id="tri-blue" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/></marker>
              <marker id="tri-purple" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/></marker>
            </defs>
          </svg>
          <figcaption>Triângulo de Hess: o caminho direto (vermelho) equivale a percorrer o ciclo via CO₂ — descer por ΔH₁ e voltar por −ΔH₂. Logo ΔH = ΔH₁ − ΔH₂ = −111 kJ.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Por que importa</span>
        <h2>7. Por que a Lei de Hess é tão Importante</h2>
        <p>
          Muitas reações são <strong>impossíveis de medir diretamente</strong>: ocorrem devagar demais,
          produzem misturas de produtos ou exigem condições extremas. A Lei de Hess contorna isso ao
          permitir calcular o <M>{"\\Delta H"}</M> combinando reações conhecidas — exatamente como fizemos
          com o monóxido de carbono. É a base para tabelar entalpias de formação, projetar processos
          industriais (Haber-Bosch, refino de petróleo) e avaliar o balanço energético de combustíveis e
          alimentos. Os três métodos deste capítulo — formação, ligação e soma de etapas — são, no fundo,
          aplicações diretas do princípio de que a entalpia é função de estado.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🧱</span>
            <h3>Formação</h3>
            <p>1 mol a partir dos elementos. Substância simples: <M>{"\\Delta H_f^{\\circ} = 0"}</M>.</p>
          </div>
          <div className="math-card">
            <span>🔥</span>
            <h3>Combustão</h3>
            <p>Queima de 1 mol; sempre exotérmica (<M>{"\\Delta H < 0"}</M>). Compara combustíveis.</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>Ligação</h3>
            <p><M>{"\\Delta H = \\sum E_{quebradas} - \\sum E_{formadas}"}</M>. Romper absorve, formar libera.</p>
          </div>
          <div className="math-card">
            <span>🧮</span>
            <h3>Por formação</h3>
            <p><M>{"\\Delta H = \\sum H_f^{prod} - \\sum H_f^{reag}"}</M>, cada um vezes o coeficiente.</p>
          </div>
          <div className="math-card">
            <span>🗺️</span>
            <h3>Lei de Hess</h3>
            <p><M>{"\\Delta H"}</M> é função de estado: independe do caminho. Some as etapas.</p>
          </div>
          <div className="math-card">
            <span>🔄</span>
            <h3>Manipulação</h3>
            <p>Inverter troca o sinal; multiplicar multiplica o <M>{"\\Delta H"}</M>; somar soma.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Entalpia de substância simples"
          statement={<p>A entalpia-padrão de formação do gás oxigênio (<M>{"\\text{O}_{2(g)}"}</M>), nas condições-padrão, é:</p>}
          options={[
            { letter: "a", text: "Zero, por convenção", correct: true },
            { letter: "b", text: "−394 kJ/mol" },
            { letter: "c", text: "+286 kJ/mol" },
            { letter: "d", text: "Não pode ser definida" },
          ]}
          resolution={<p>Por convenção, a entalpia-padrão de formação de uma substância simples na sua forma mais estável é zero. O <M>{"\\text{O}_2"}</M> é a forma estável do oxigênio a 25 °C e 1 atm, logo <M>{"\\Delta H_f^{\\circ} = 0"}</M>.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Sinal da combustão"
          statement={<p>Sobre a entalpia de combustão de um combustível, é correto afirmar que ela é:</p>}
          options={[
            { letter: "a", text: "Sempre negativa, pois a combustão é exotérmica", correct: true },
            { letter: "b", text: "Sempre positiva, pois a combustão é endotérmica" },
            { letter: "c", text: "Igual a zero para qualquer combustível" },
            { letter: "d", text: "Positiva para sólidos e negativa para gases" },
          ]}
          resolution={<p>A combustão libera energia na forma de calor e luz, sendo um processo exotérmico. Portanto, <M>{"\\Delta H_c^{\\circ} < 0"}</M> para qualquer combustível.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. ΔH por entalpias de formação"
          statement={<p>Calcule o <M>{"\\Delta H"}</M> da combustão completa do etanol, <M>{"\\text{C}_2\\text{H}_5\\text{OH}_{(l)} + 3\\,\\text{O}_{2(g)} \\rightarrow 2\\,\\text{CO}_{2(g)} + 3\\,\\text{H}_2\\text{O}_{(l)}"}</M>, dados <M>{"\\Delta H_f^{\\circ}"}</M>: etanol = −278, CO₂ = −394, H₂O(l) = −286 kJ/mol.</p>}
          options={[
            { letter: "a", text: "−1368 kJ", correct: true },
            { letter: "b", text: "−402 kJ" },
            { letter: "c", text: "−958 kJ" },
            { letter: "d", text: "+1368 kJ" },
          ]}
          resolution={<p><M block>{"\\Delta H = [\\,2(-394) + 3(-286)\\,] - [\\,(-278) + 3(0)\\,]"}</M><M block>{"\\Delta H = (-788 - 858) - (-278) = -1646 + 278 = -1368\\ \\text{kJ}"}</M>O O₂ é substância simples (<M>{"\\Delta H_f^{\\circ} = 0"}</M>).</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Manipulando equações (Hess)"
          statement={<p>A reação <M>{"\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3"}</M> tem <M>{"\\Delta H = -92\\ \\text{kJ}"}</M>. Qual o <M>{"\\Delta H"}</M> da reação <M>{"\\text{NH}_3 \\rightarrow \\tfrac{1}{2}\\,\\text{N}_2 + \\tfrac{3}{2}\\,\\text{H}_2"}</M>?</p>}
          options={[
            { letter: "a", text: "+46 kJ", correct: true },
            { letter: "b", text: "−46 kJ" },
            { letter: "c", text: "+92 kJ" },
            { letter: "d", text: "−184 kJ" },
          ]}
          resolution={<p>Primeiro invertemos a equação (troca o sinal): <M>{"2\\,\\text{NH}_3 \\rightarrow \\text{N}_2 + 3\\,\\text{H}_2"}</M> tem <M>{"\\Delta H = +92\\ \\text{kJ}"}</M>. Depois multiplicamos por <M>{"\\tfrac{1}{2}"}</M> (para 1 mol de NH₃), multiplicando o <M>{"\\Delta H"}</M> por <M>{"\\tfrac{1}{2}"}</M>: <M>{"+92 \\times \\tfrac{1}{2} = +46\\ \\text{kJ}"}</M>.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Lei de Hess (soma de três etapas)"
          statement={<p>Dadas as etapas: (1) <M>{"\\text{C}_{(s)} + \\text{O}_2 \\rightarrow \\text{CO}_2,\\ \\Delta H_1 = -394"}</M>; (2) <M>{"\\text{H}_2 + \\tfrac{1}{2}\\text{O}_2 \\rightarrow \\text{H}_2\\text{O},\\ \\Delta H_2 = -286"}</M>; (3) <M>{"\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O},\\ \\Delta H_3 = -891"}</M>. O <M>{"\\Delta H_f^{\\circ}"}</M> do metano, <M>{"\\text{C} + 2\\,\\text{H}_2 \\rightarrow \\text{CH}_4"}</M>, é:</p>}
          options={[
            { letter: "a", text: "−75 kJ", correct: true },
            { letter: "b", text: "−211 kJ" },
            { letter: "c", text: "+75 kJ" },
            { letter: "d", text: "−1571 kJ" },
          ]}
          resolution={<p>Somamos (1) + 2×(2) + inverso de (3):<M block>{"\\Delta H_f = \\Delta H_1 + 2\\,\\Delta H_2 - \\Delta H_3"}</M><M block>{"\\Delta H_f = -394 + 2(-286) - (-891)"}</M><M block>{"\\Delta H_f = -394 - 572 + 891 = -75\\ \\text{kJ}"}</M>Os CO₂ e H₂O se cancelam ao somar as equações, restando exatamente a formação do metano.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Etanol versus gasolina"
          statement={<p>No Brasil, muitos veículos rodam tanto com etanol quanto com gasolina. A combustão completa de 1 mol de etanol (M = 46 g/mol) libera 1368 kJ. Considerando apenas o calor liberado <strong>por grama</strong> de combustível, o calor de combustão do etanol é, aproximadamente:</p>}
          options={[
            { letter: "a", text: "30 kJ/g", correct: true },
            { letter: "b", text: "1368 kJ/g" },
            { letter: "c", text: "63 kJ/g" },
            { letter: "d", text: "46 kJ/g" },
          ]}
          resolution={<p>Dividimos o calor por mol pela massa molar: <M block>{"\\frac{1368\\ \\text{kJ/mol}}{46\\ \\text{g/mol}} \\approx 29{,}7\\ \\text{kJ/g} \\approx 30\\ \\text{kJ/g}"}</M>Esse é o tipo de comparação por grama que justifica, energeticamente, por que a gasolina (≈ 48 kJ/g) rende mais quilômetros por litro que o etanol — embora o etanol seja renovável e menos poluente.</p>}
        />
      </section>
    </article>
  );
}
