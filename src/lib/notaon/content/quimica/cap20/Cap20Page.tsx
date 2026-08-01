"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap20Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 20</span>
          <h1>Estequiometria Avançada: Reagente Limitante, Pureza e Rendimento</h1>
          <p>
            No laboratório ideal os reagentes estão na proporção exata, são 100% puros e a reação
            converte tudo em produto. No mundo real — e no ENEM — nada disso acontece. Esta aula ensina
            os três ajustes que transformam a estequiometria básica em uma ferramenta industrial:
            identificar quem <strong>limita</strong> a reação, descontar as <strong>impurezas</strong> da
            matéria-prima e corrigir pelo <strong>rendimento</strong> efetivo do processo. Tudo com
            cálculo passo a passo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto</span>
        <h2>1. Por Que "Avançada"?</h2>
        <p>
          A estequiometria básica parte de uma única hipótese confortável: você conhece a massa de{" "}
          <em>um</em> reagente puro e a reação rende 100%. Na indústria química, isso quase nunca é
          verdade. O calcário extraído da pedreira vem com areia e argila (impurezas), os reagentes são
          adicionados em proporções que raramente batem com os coeficientes, e perdas por reações
          paralelas, evaporação e equilíbrio fazem o rendimento ficar abaixo do teórico.
        </p>
        <p>
          A base de cálculo, porém, <strong>continua a mesma</strong>: equação{" "}
          <strong>balanceada</strong> → proporção em mols → conversões com massa molar e volume molar
          (22,4 L/mol na CNTP). Os três ajustes desta aula apenas <em>entram</em> e <em>saem</em> dessa
          espinha dorsal em pontos específicos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Fator de correção</th><th>Onde atua</th><th>Fórmula</th><th>Efeito</th></tr>
            </thead>
            <tbody>
              <tr><td>Pureza</td><td>Na <strong>entrada</strong> (matéria-prima)</td><td><M>{"m_{pura} = m_{amostra}\\times\\frac{\\%}{100}"}</M></td><td>Reduz a massa que reage</td></tr>
              <tr><td>Reagente limitante</td><td>No <strong>meio</strong> (escolha da base)</td><td><M>{"\\frac{n}{\\text{coef.}}\\ \\text{menor}"}</M></td><td>Define quanto produto se forma</td></tr>
              <tr><td>Rendimento</td><td>Na <strong>saída</strong> (produto)</td><td><M>{"\\eta=\\frac{m_{real}}{m_{teor}}\\times100\\%"}</M></td><td>Reduz a massa realmente obtida</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            Memorize a ordem: <strong>pureza na entrada</strong>, <strong>limitante no meio</strong>,{" "}
            <strong>rendimento na saída</strong>. Trocar a etapa é o erro mais comum nas provas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Quem acaba primeiro</span>
        <h2>2. Reagente Limitante e Reagente em Excesso</h2>
        <p>
          Quando dois reagentes são fornecidos em quantidades quaisquer, um deles{" "}
          <strong>se esgota antes</strong> e interrompe a reação: é o <strong>reagente limitante</strong>.
          Ele <em>limita</em> a quantidade de produto formada. O outro, que sobra, é o{" "}
          <strong>reagente em excesso</strong>. Todo cálculo de produto deve partir do limitante — usar o
          reagente em excesso superestima o resultado.
        </p>
        <div className="lesson-highlight">
          <h3>Método: dividir mols pelo coeficiente</h3>
          <p>
            Para cada reagente, calcule <M>{"\\dfrac{n_{disponível}}{\\text{coeficiente estequiométrico}}"}</M>.
            O <strong>menor</strong> resultado aponta o reagente limitante. Esse quociente representa
            "quantas vezes a reação pode acontecer" com a quantidade disponível daquele reagente — quem
            permite menos repetições é quem manda.
          </p>
        </div>
        <p>
          A figura abaixo compara, para a síntese da amônia{" "}
          <M>{"\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3"}</M>, os mols{" "}
          <strong>disponíveis</strong> de cada reagente com os mols <strong>necessários</strong> para
          consumir totalmente o parceiro. Onde o disponível é menor que o necessário, aquele reagente é
          o limitante.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 280" width="480" height="280" aria-label="Gráfico de barras comparando mols disponíveis e necessários para identificar o reagente limitante">
            {/* Eixos */}
            <line x1="60" y1="230" x2="455" y2="230" stroke="#374151" strokeWidth="2"/>
            <line x1="60" y1="24" x2="60" y2="230" stroke="#374151" strokeWidth="2"/>
            <text x="20" y="130" textAnchor="middle" fontSize="12" fill="#374151" transform="rotate(-90,20,130)">Quantidade (mol)</text>

            {/* Marcas eixo Y */}
            <text x="54" y="234" textAnchor="end" fontSize="10" fill="#6b7280">0</text>
            <text x="54" y="178" textAnchor="end" fontSize="10" fill="#6b7280">2</text>
            <text x="54" y="120" textAnchor="end" fontSize="10" fill="#6b7280">4</text>
            <text x="54" y="62" textAnchor="end" fontSize="10" fill="#6b7280">6</text>
            <line x1="56" y1="178" x2="60" y2="178" stroke="#374151" strokeWidth="1"/>
            <line x1="56" y1="120" x2="60" y2="120" stroke="#374151" strokeWidth="1"/>
            <line x1="56" y1="62" x2="60" y2="62" stroke="#374151" strokeWidth="1"/>

            {/* Grupo N2: disponível 3 mol, necessário 2 mol (escala 29px/mol) */}
            <rect x="110" y="143" width="40" height="87" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="130" y="137" textAnchor="middle" fontSize="10" fill="#1e40af">3 mol</text>
            <rect x="160" y="172" width="40" height="58" fill="#93c5fd" stroke="#2563eb" strokeWidth="2"/>
            <text x="180" y="166" textAnchor="middle" fontSize="10" fill="#1e40af">2 mol</text>
            <text x="155" y="248" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">N₂</text>
            <text x="155" y="263" textAnchor="middle" fontSize="9" fill="#059669">sobra → EXCESSO</text>

            {/* Grupo H2: disponível 6 mol, necessário 9 mol (limitante) */}
            <rect x="290" y="56" width="40" height="174" fill="#fee2e2" stroke="#dc2626" strokeWidth="2"/>
            <text x="310" y="50" textAnchor="middle" fontSize="10" fill="#991b1b">6 mol</text>
            <rect x="340" y="40" width="40" height="190" fill="#fca5a5" stroke="#dc2626" strokeWidth="2"/>
            <text x="360" y="34" textAnchor="middle" fontSize="10" fill="#991b1b">9 mol*</text>
            <text x="335" y="248" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#991b1b">H₂</text>
            <text x="335" y="263" textAnchor="middle" fontSize="9" fill="#dc2626">falta → LIMITANTE</text>

            {/* Legenda */}
            <rect x="120" y="14" width="12" height="12" fill="#dbeafe" stroke="#2563eb"/>
            <text x="138" y="24" fontSize="9" fill="#374151">disponível</text>
            <rect x="220" y="14" width="12" height="12" fill="#93c5fd" stroke="#2563eb"/>
            <text x="238" y="24" fontSize="9" fill="#374151">necessário p/ consumir o outro</text>
          </svg>
          <figcaption>
            Com 3 mol de N₂ e 6 mol de H₂: o N₂ precisaria de 9 mol de H₂ (3 × 3), mas só há 6 — logo o
            H₂ é o limitante. Dividindo pelos coeficientes: N₂ → 3/1 = 3; H₂ → 6/3 = 2 (menor). *9 mol é o
            necessário para todo o N₂ reagir.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplo resolvido</span>
        <h2>3. Tabela "Antes → Reage → Depois"</h2>
        <p>
          A forma mais segura de tratar o reagente limitante é montar uma tabela do tipo "antes / reage /
          depois" (análoga a uma tabela ICE). Vamos misturar <strong>3 mol de N₂</strong> com{" "}
          <strong>6 mol de H₂</strong> na reação <M>{"\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3"}</M>.
        </p>
        <p>
          <strong>Passo 1 — identificar o limitante.</strong> Dividindo cada quantidade pelo coeficiente:{" "}
          <M>{"\\text{N}_2:\\ \\frac{3}{1}=3"}</M> e <M>{"\\text{H}_2:\\ \\frac{6}{3}=2"}</M>. O menor é o do
          H₂ → <strong>H₂ é o limitante</strong> e o N₂ está em excesso.
        </p>
        <p>
          <strong>Passo 2 — montar a tabela.</strong> O H₂ reage por inteiro (6 mol). Pela proporção,
          consome <M>{"6 \\div 3 = 2\\ \\text{mol de N}_2"}</M> e forma{" "}
          <M>{"\\frac{2}{3}\\times 6 = 4\\ \\text{mol de NH}_3"}</M>.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Etapa</th><th><M>{"\\text{N}_2"}</M></th><th><M>{"3\\,\\text{H}_2"}</M></th><th><M>{"2\\,\\text{NH}_3"}</M></th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Antes</strong> (mol)</td><td>3</td><td>6</td><td>0</td></tr>
              <tr><td><strong>Reage / Forma</strong> (mol)</td><td>−2</td><td>−6</td><td>+4</td></tr>
              <tr><td><strong>Depois</strong> (mol)</td><td>1 (excesso)</td><td>0 (esgotou)</td><td>4</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            Leitura final: formam-se <strong>4 mol de NH₃</strong> (= 4 × 17 = 68 g), sobra{" "}
            <strong>1 mol de N₂</strong> (= 28 g) sem reagir, e o H₂ é totalmente consumido. Note que o
            produto foi calculado a partir do <strong>limitante (H₂)</strong>, jamais do excesso.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Matéria-prima real</span>
        <h2>4. Reagentes Impuros — Correção pela Pureza</h2>
        <p>
          Matérias-primas industriais (calcário, minérios, sucata) contêm <strong>impurezas</strong>{" "}
          que não participam da reação de interesse. A <strong>pureza</strong> (em %) indica a fração da
          amostra que é, de fato, o reagente desejado. Só essa parte entra no cálculo:
        </p>
        <div className="math-block">
          <h3>Massa pura</h3>
          <p><M block>{"m_{\\text{pura}} = m_{\\text{amostra}} \\times \\dfrac{\\%\\,\\text{pureza}}{100}"}</M></p>
        </div>
        <p>
          <strong>Exemplo resolvido.</strong> Uma jazida fornece <strong>200 g de calcário com 80% de
          pureza</strong>. A massa de <M>{"\\text{CaCO}_3"}</M> que realmente reage é:
        </p>
        <div className="lesson-highlight">
          <p>
            <M>{"m_{\\text{pura}} = 200 \\times \\dfrac{80}{100} = 200 \\times 0{,}80 = 160\\ \\text{g de CaCO}_3"}</M>.
            Os 40 g restantes (areia, argila) são <strong>inertes</strong>: passam pela reação sem se
            transformar. A correção de pureza é sempre feita <strong>antes</strong> de montar a proporção
            estequiométrica.
          </p>
        </div>
        <p>
          O caminho inverso também cai em prova: se você sabe que reagiram 160 g de CaCO₃ puro a partir de
          uma amostra de 200 g, a pureza é{" "}
          <M>{"\\dfrac{160}{200}\\times100\\% = 80\\%"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Eficiência</span>
        <h2>5. Rendimento da Reação</h2>
        <p>
          Mesmo com reagentes puros e na proporção certa, raramente se obtém toda a massa prevista. Parte
          do reagente segue por reações paralelas, parte fica retida no equilíbrio, parte se perde na
          manipulação. O <strong>rendimento</strong> compara o que se obteve de verdade (massa real) com
          o máximo teórico calculado pela estequiometria:
        </p>
        <div className="math-block">
          <h3>Rendimento percentual</h3>
          <p><M block>{"\\eta = \\dfrac{m_{\\text{real}}}{m_{\\text{teórico}}} \\times 100\\%"}</M></p>
          <p>
            Dela derivam as duas formas mais úteis em prova:{" "}
            <M>{"m_{\\text{real}} = m_{\\text{teórico}} \\times \\dfrac{\\eta}{100}"}</M> e{" "}
            <M>{"m_{\\text{teórico}} = \\dfrac{m_{\\text{real}}}{\\eta/100}"}</M>.
          </p>
        </div>
        <p>
          <strong>Exemplo resolvido.</strong> Uma reação prevê (teórico) 100 g de produto, mas o
          laboratório obteve apenas 90 g. O rendimento é{" "}
          <M>{"\\eta = \\dfrac{90}{100}\\times100\\% = 90\\%"}</M>. Inversamente, se o rendimento de um
          processo é conhecido (90%) e o teórico vale 100 g, a massa real esperada é{" "}
          <M>{"100 \\times 0{,}90 = 90\\ \\text{g}"}</M>. O rendimento entra sempre na{" "}
          <strong>saída</strong>, depois de calculada a massa teórica de produto.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visualizando o excesso</span>
        <h2>6. O Que Sobra: Esquema da Reação com Excesso</h2>
        <p>
          A figura abaixo resume, de forma esquemática, o destino dos reagentes quando há um limitante e
          um excesso. O reagente limitante é totalmente consumido (caixa esvazia); o reagente em excesso
          deixa um resto que permanece no recipiente ao final.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 240" width="480" height="240" aria-label="Esquema de reação mostrando reagente limitante consumido e reagente em excesso com sobra">
            {/* Caixa reagentes (antes) */}
            <text x="100" y="28" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">ANTES (mistura)</text>
            <rect x="40" y="40" width="120" height="160" rx="8" fill="#f9fafb" stroke="#9ca3af" strokeWidth="2"/>
            {/* limitante (H2) cheio */}
            <rect x="56" y="60" width="40" height="120" fill="#fee2e2" stroke="#dc2626" strokeWidth="2"/>
            <text x="76" y="195" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">H₂</text>
            <text x="76" y="53" textAnchor="middle" fontSize="9" fill="#991b1b">6 mol</text>
            {/* excesso (N2) cheio */}
            <rect x="104" y="90" width="40" height="90" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="124" y="195" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">N₂</text>
            <text x="124" y="83" textAnchor="middle" fontSize="9" fill="#1e40af">3 mol</text>

            {/* Seta reação */}
            <line x1="172" y1="120" x2="232" y2="120" stroke="#374151" strokeWidth="2.5" markerEnd="url(#rxn20)"/>
            <text x="202" y="112" textAnchor="middle" fontSize="11" fill="#374151">reage</text>

            {/* Caixa depois */}
            <text x="370" y="28" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">DEPOIS</text>
            <rect x="250" y="40" width="240" height="160" rx="8" fill="#f9fafb" stroke="#9ca3af" strokeWidth="2"/>
            {/* limitante esgotado (caixa vazia tracejada) */}
            <rect x="266" y="160" width="40" height="20" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,3"/>
            <text x="286" y="195" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">H₂</text>
            <text x="286" y="152" textAnchor="middle" fontSize="9" fill="#991b1b">0 (esgotou)</text>
            {/* excesso restante */}
            <rect x="314" y="150" width="40" height="30" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="334" y="195" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">N₂</text>
            <text x="334" y="143" textAnchor="middle" fontSize="9" fill="#059669">1 mol sobra</text>
            {/* produto NH3 */}
            <rect x="396" y="70" width="48" height="110" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            <text x="420" y="195" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">NH₃</text>
            <text x="420" y="63" textAnchor="middle" fontSize="9" fill="#065f46">4 mol</text>

            <defs>
              <marker id="rxn20" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L0,7 L9,3.5 z" fill="#374151"/></marker>
            </defs>
          </svg>
          <figcaption>
            O H₂ (limitante) é consumido por completo; sobra 1 mol de N₂ (excesso) e formam-se 4 mol de
            NH₃. O produto é ditado por quem acaba primeiro.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Passo a passo</span>
        <h2>7. Roteiro Geral de Resolução</h2>
        <div className="lesson-highlight">
          <ol>
            <li><strong>Balanceie</strong> a equação química (sem isso, toda proporção fica errada).</li>
            <li>Corrija cada massa de matéria-prima pela <strong>pureza</strong>, se houver impureza.</li>
            <li>Converta para <strong>mols</strong> e identifique o <strong>reagente limitante</strong> (quando há dois dados): menor <M>{"n/\\text{coef.}"}</M>.</li>
            <li>Calcule a <strong>massa teórica</strong> do produto pela proporção, partindo do limitante.</li>
            <li>Aplique o <strong>rendimento</strong> para chegar à <strong>massa real</strong> obtida.</li>
          </ol>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplo industrial</span>
        <h2>8. Problema Completo — Produção de Cal Virgem</h2>
        <p>
          A cal virgem (CaO) é obtida pela calcinação do calcário:{" "}
          <M>{"\\text{CaCO}_3 \\xrightarrow{\\Delta} \\text{CaO} + \\text{CO}_2"}</M>. Dados: massas molares
          CaCO₃ = 100 g/mol e CaO = 56 g/mol. Uma indústria parte de{" "}
          <strong>250 g de calcário com 80% de pureza</strong>, num forno de{" "}
          <strong>rendimento 90%</strong>. Quanta cal virgem é produzida?
        </p>
        <div className="lesson-highlight">
          <p>
            <strong>Etapa 1 — pureza (entrada):</strong>{" "}
            <M>{"m_{\\text{pura}} = 250 \\times 0{,}80 = 200\\ \\text{g de CaCO}_3"}</M>.
          </p>
          <p>
            <strong>Etapa 2 — proporção (teórico):</strong> a equação está balanceada (1 : 1). Por
            proporção de massa,{" "}
            <M>{"\\dfrac{100\\ \\text{g CaCO}_3}{56\\ \\text{g CaO}} = \\dfrac{200\\ \\text{g}}{m}"}</M> →{" "}
            <M>{"m = \\dfrac{200}{100}\\times 56 = 112\\ \\text{g de CaO (teórico)}"}</M>.
          </p>
          <p>
            <strong>Etapa 3 — rendimento (saída):</strong>{" "}
            <M>{"m_{\\text{real}} = 112 \\times 0{,}90 = 100{,}8\\ \\text{g de CaO}"}</M>.
          </p>
        </div>
        <p>
          Repare como cada fator atuou no ponto certo: a pureza encolheu a entrada (250 → 200 g), a
          estequiometria converteu reagente em produto (200 → 112 g) e o rendimento encolheu a saída
          (112 → 100,8 g).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Atenção</span>
        <h2>9. Erros Comuns em Prova</h2>
        <div className="lesson-highlight">
          <ul>
            <li>Esquecer de <strong>balancear</strong> antes de montar a proporção em mols.</li>
            <li>Calcular o produto a partir do <strong>reagente em excesso</strong> — use sempre o limitante.</li>
            <li>Aplicar pureza ou rendimento na etapa errada: <strong>pureza na entrada</strong>, <strong>rendimento na saída</strong>.</li>
            <li>Multiplicar pelos dois fatores ao mesmo tempo no início — eles atuam em momentos distintos do cálculo.</li>
            <li>Comparar massas diretamente para achar o limitante; é preciso converter para mols e dividir pelos coeficientes.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>⚖️</span>
            <h3>Base</h3>
            <p>Equação balanceada → proporção em mols → massa/volume.</p>
          </div>
          <div className="math-card">
            <span>🔚</span>
            <h3>Limitante</h3>
            <p>Menor <M>{"n/\\text{coef.}"}</M> limita; o produto sai dele.</p>
          </div>
          <div className="math-card">
            <span>♻️</span>
            <h3>Excesso</h3>
            <p>O que sobra: sobra = inicial − consumido pelo limitante.</p>
          </div>
          <div className="math-card">
            <span>🧱</span>
            <h3>Pureza</h3>
            <p><M>{"m_{pura} = m\\times\\frac{\\%}{100}"}</M> (na entrada).</p>
          </div>
          <div className="math-card">
            <span>📉</span>
            <h3>Rendimento</h3>
            <p><M>{"\\eta = \\frac{real}{teor}\\times100\\%"}</M> (na saída).</p>
          </div>
          <div className="math-card">
            <span>🏭</span>
            <h3>Roteiro</h3>
            <p>Balancear → pureza → limitante → teórico → rendimento.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Conceito de limitante"
          statement={<p>Em uma reação química com dois reagentes em quantidades quaisquer, o reagente limitante é aquele que:</p>}
          options={[
            { letter: "a", text: "Se esgota primeiro e determina a quantidade de produto formada", correct: true },
            { letter: "b", text: "Sobra ao final da reação" },
            { letter: "c", text: "Possui a maior massa molar" },
            { letter: "d", text: "Não participa da reação" },
          ]}
          resolution={<p>O reagente limitante é totalmente consumido primeiro e, por isso, limita o quanto de produto pode se formar. O outro reagente sobra e é chamado de reagente em excesso. Todo cálculo de produto parte do limitante.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Correção pela pureza"
          statement={<p>Quantos gramas de <M>{"\\text{CaCO}_3"}</M> puro existem em 500 g de calcário com 90% de pureza?</p>}
          options={[
            { letter: "a", text: "450 g", correct: true },
            { letter: "b", text: "90 g" },
            { letter: "c", text: "410 g" },
            { letter: "d", text: "500 g" },
          ]}
          resolution={<p><M>{"m_{\\text{pura}} = 500 \\times \\dfrac{90}{100} = 500 \\times 0{,}90 = 450\\ \\text{g}"}</M>. Apenas esses 450 g participam da reação; os 50 g restantes são impurezas inertes.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Cálculo de rendimento"
          statement={<p>Uma reação deveria produzir 80 g de produto (massa teórica), mas obteve-se apenas 60 g. O rendimento da reação foi de:</p>}
          options={[
            { letter: "a", text: "75%", correct: true },
            { letter: "b", text: "80%" },
            { letter: "c", text: "60%" },
            { letter: "d", text: "133%" },
          ]}
          resolution={<p><M>{"\\eta = \\dfrac{m_{\\text{real}}}{m_{\\text{teórico}}}\\times100\\% = \\dfrac{60}{80}\\times100\\% = 75\\%"}</M>. O rendimento nunca passa de 100%, pois a massa real não pode superar a teórica.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Identificando o limitante"
          statement={<p>Na síntese <M>{"\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3"}</M>, misturam-se 2 mol de N₂ com 3 mol de H₂. O reagente limitante é:</p>}
          options={[
            { letter: "a", text: "H₂", correct: true },
            { letter: "b", text: "N₂" },
            { letter: "c", text: "NH₃" },
            { letter: "d", text: "Nenhum, estão em proporção exata" },
          ]}
          resolution={<p>Dividindo a quantidade pelo coeficiente: <M>{"\\text{N}_2 \\rightarrow \\frac{2}{1} = 2"}</M> e <M>{"\\text{H}_2 \\rightarrow \\frac{3}{3} = 1"}</M>. O menor valor (1) é do H₂, que é o reagente limitante; o N₂ está em excesso.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Problema completo (pureza + rendimento)"
          statement={<p>Calcinando 1000 g de calcário com 80% de pureza, num processo de 75% de rendimento, qual a massa de CaO obtida? Dados: <M>{"\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2"}</M>; CaCO₃ = 100 g/mol; CaO = 56 g/mol.</p>}
          options={[
            { letter: "a", text: "336 g", correct: true },
            { letter: "b", text: "448 g" },
            { letter: "c", text: "560 g" },
            { letter: "d", text: "420 g" },
          ]}
          resolution={<p>Pureza (entrada): <M>{"1000 \\times 0{,}80 = 800\\ \\text{g de CaCO}_3"}</M>. Teórico de CaO (proporção 1:1 em massa): <M>{"\\dfrac{800}{100}\\times56 = 448\\ \\text{g}"}</M>. Rendimento (saída): <M>{"448 \\times 0{,}75 = 336\\ \\text{g de CaO}"}</M>.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Haber-Bosch e o reagente em excesso"
          statement={<p>O processo Haber-Bosch (<M>{"\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3"}</M>) sintetiza amônia para fertilizantes. Em cada passagem pelo reator, apenas parte dos gases reage, e sobra reagente não convertido. Para tornar o processo economicamente viável, a indústria adota o seguinte recurso:</p>}
          options={[
            { letter: "a", text: "Recircular os gases N₂ e H₂ não reagidos de volta ao reator, elevando o aproveitamento global da matéria-prima.", correct: true },
            { letter: "b", text: "Descartar todo o material não reagido após cada passagem." },
            { letter: "c", text: "Adicionar impurezas para acelerar a conversão." },
            { letter: "d", text: "Ignorar o reagente limitante e calcular tudo pelo excesso." },
          ]}
          resolution={<p>Como o rendimento por passagem é baixo, sobra muito N₂ e H₂ sem reagir. Em vez de descartar essa matéria-prima cara, a planta separa a amônia formada e recircula os gases não convertidos de volta ao reator. Isso eleva o aproveitamento global, compensando o baixo rendimento de cada ciclo — exatamente a lógica do reagente em excesso aplicada à indústria.</p>}
        />
      </section>
    </article>
  );
}
