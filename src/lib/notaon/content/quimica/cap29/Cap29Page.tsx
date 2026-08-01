"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap29Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 29</span>
          <h1>Princípio de Le Chatelier: Deslocamento de Equilíbrios</h1>
          <p>
            Por que abrir uma garrafa de refrigerante libera gás? Por que a indústria sintetiza amônia a
            altíssimas pressões? E como nosso sangue mantém o pH estável quando prendemos a respiração? Todas
            essas perguntas têm a mesma resposta: o <strong>princípio de Le Chatelier</strong>. Neste capítulo
            você aprenderá a prever, com segurança, para que lado um equilíbrio químico se desloca quando
            perturbamos a concentração, a pressão/volume ou a temperatura — e por que o catalisador e os gases
            inertes não deslocam coisa alguma.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O princípio</span>
        <h2>1. O Enunciado de Le Chatelier</h2>
        <p>
          Formulado pelo químico francês Henry Le Chatelier em 1884, o princípio descreve como um sistema em
          equilíbrio reage quando é "incomodado". A ideia central é a de uma <strong>resposta
          compensatória</strong>: o sistema sempre se move no sentido que <em>amortece</em> a perturbação.
        </p>
        <div className="lesson-highlight">
          <p>
            "Quando um sistema em equilíbrio sofre uma perturbação externa (variação de concentração, pressão
            ou temperatura), ele se desloca no sentido que <strong>minimiza essa perturbação</strong>, até
            atingir um novo estado de equilíbrio."
          </p>
        </div>
        <p>
          Repare que o equilíbrio é <strong>dinâmico</strong>: as reações direta e inversa continuam
          ocorrendo o tempo todo. Quando aplicamos um "estresse", uma das velocidades fica momentaneamente
          maior que a outra; o sistema então acumula ou consome substâncias até que as duas velocidades se
          igualem novamente — só que agora em <strong>novas concentrações</strong>. As três perturbações que
          realmente <em>deslocam</em> o equilíbrio são <strong>concentração</strong>,{" "}
          <strong>pressão/volume</strong> e <strong>temperatura</strong>. Catalisador e gás inerte (a volume
          constante) <strong>não</strong> deslocam.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela-mestra</span>
        <h2>2. Mapa Geral dos Deslocamentos</h2>
        <p>
          Antes de detalhar cada caso, observe a tabela abaixo: ela é o "mapa" que resume todo o capítulo.
          Note a coluna mais sutil — <strong>o efeito sobre a constante de equilíbrio K</strong>. Apenas a
          temperatura altera K; todas as demais perturbações apenas reorganizam as concentrações para
          <em> restaurar</em> o mesmo K.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Perturbação</th><th>Sentido do deslocamento</th><th>Efeito em K</th></tr>
            </thead>
            <tbody>
              <tr><td>Adicionar reagente</td><td>→ produtos (consome o que foi adicionado)</td><td>Inalterado</td></tr>
              <tr><td>Adicionar produto</td><td>← reagentes</td><td>Inalterado</td></tr>
              <tr><td>Remover reagente</td><td>← reagentes (repõe o que faltou)</td><td>Inalterado</td></tr>
              <tr><td>Remover produto</td><td>→ produtos</td><td>Inalterado</td></tr>
              <tr><td>Aumentar pressão (↓ volume)</td><td>Lado de MENOR nº de mols gasosos</td><td>Inalterado</td></tr>
              <tr><td>Diminuir pressão (↑ volume)</td><td>Lado de MAIOR nº de mols gasosos</td><td>Inalterado</td></tr>
              <tr><td>Aumentar temperatura</td><td>Sentido ENDOtérmico (absorve calor)</td><td><strong>Muda</strong></td></tr>
              <tr><td>Diminuir temperatura</td><td>Sentido EXOtérmico (libera calor)</td><td><strong>Muda</strong></td></tr>
              <tr><td>Adicionar catalisador</td><td>Não desloca (atinge equilíbrio mais rápido)</td><td>Inalterado</td></tr>
              <tr><td>Gás inerte a V constante</td><td>Não desloca</td><td>Inalterado</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Perturbação 1</span>
        <h2>3. Efeito da Concentração</h2>
        <p>
          Quando alteramos a concentração de uma das espécies de um equilíbrio, o quociente de reação{" "}
          <M>{"Q"}</M> deixa de ser igual a <M>{"K"}</M>, e o sistema reage para reequilibrar o valor. A
          regra prática é direta:
        </p>
        <div className="lesson-highlight">
          <ul>
            <li><strong>Adicionar</strong> uma substância → o equilíbrio se desloca para o lado <strong>oposto</strong>, consumindo o excesso.</li>
            <li><strong>Remover</strong> uma substância → o equilíbrio se desloca para o lado <strong>onde ela está</strong>, repondo o que faltou.</li>
          </ul>
        </div>
        <p>
          Considere a síntese da amônia (processo Haber-Bosch), que será nosso exemplo recorrente:
        </p>
        <div className="math-block">
          <p><M block>{"\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g) \\qquad \\Delta H < 0 \\ (\\text{exotérmica})"}</M></p>
        </div>
        <p>
          Ao injetar mais <M>{"\\text{N}_2"}</M>, a velocidade da reação direta cresce: o sistema desloca-se
          para a <strong>direita</strong>, consumindo o nitrogênio adicionado e produzindo mais amônia.
          Inversamente, se retirássemos <M>{"\\text{NH}_3"}</M> do reator, o equilíbrio também se deslocaria
          para a direita, repondo o produto removido. É exatamente essa segunda estratégia (remover o produto
          continuamente) que a indústria usa para "puxar" a reação adiante.
        </p>
        <p>
          O gráfico de <strong>concentração × tempo</strong> abaixo ilustra a "assinatura" típica de uma
          perturbação por concentração: um <strong>salto súbito</strong> na espécie adicionada, seguido de um
          rearranjo gradual até o sistema fixar um <strong>novo equilíbrio</strong>.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 280" width="480" height="280" aria-label="Gráfico de concentração por tempo mostrando perturbação e novo equilíbrio">
            {/* Eixos */}
            <line x1="56" y1="240" x2="452" y2="240" stroke="#374151" strokeWidth="2"/>
            <line x1="56" y1="22" x2="56" y2="240" stroke="#374151" strokeWidth="2"/>
            <text x="254" y="270" textAnchor="middle" fontSize="13" fill="#374151">Tempo</text>
            <text x="20" y="132" textAnchor="middle" fontSize="13" fill="#374151" transform="rotate(-90,20,132)">Concentração (mol/L)</text>

            {/* linha do instante da perturbação */}
            <line x1="200" y1="30" x2="200" y2="240" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4,4"/>
            <text x="200" y="22" textAnchor="middle" fontSize="10" fill="#6b7280">adiciona N₂</text>

            {/* Curva N2 (azul): plano, salto para cima, depois decai um pouco para novo equilíbrio */}
            <path d="M56,150 L200,150 L200,70 C240,72 280,96 340,104 C390,110 430,112 452,112" fill="none" stroke="#2563eb" strokeWidth="3"/>
            <text x="120" y="142" fontSize="11" fill="#1d4ed8">[N₂]</text>

            {/* Curva NH3 (verde): plano, depois sobe para novo equilíbrio maior */}
            <path d="M56,200 L200,200 C250,196 300,170 350,162 C395,156 430,154 452,154" fill="none" stroke="#059669" strokeWidth="3"/>
            <text x="120" y="194" fontSize="11" fill="#047857">[NH₃]</text>

            {/* Curva H2 (roxo): plano, desce um pouco (consumido) */}
            <path d="M56,118 L200,118 C250,120 300,134 350,140 C395,145 430,146 452,146" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeDasharray="6,4"/>
            <text x="120" y="112" fontSize="11" fill="#6d28d9">[H₂]</text>

            {/* rótulos de regiões */}
            <text x="125" y="58" textAnchor="middle" fontSize="10" fill="#6b7280">equilíbrio inicial</text>
            <text x="360" y="50" textAnchor="middle" fontSize="10" fill="#6b7280">novo equilíbrio</text>
          </svg>
          <figcaption>Ao adicionar N₂ (salto azul), o sistema consome N₂ e H₂ e produz mais NH₃, estabelecendo um novo equilíbrio com concentrações diferentes — mas com o mesmo valor de K.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Perturbação 2</span>
        <h2>4. Efeito da Pressão e do Volume</h2>
        <p>
          Pressão e volume só afetam equilíbrios que envolvem <strong>substâncias gasosas</strong> — e apenas
          quando o número total de mols de gás difere entre reagentes e produtos. A regra:
        </p>
        <div className="lesson-highlight">
          <ul>
            <li><strong>Aumentar a pressão</strong> (ou diminuir o volume) → desloca para o lado de <strong>menor número de mols gasosos</strong> (o sistema "encolhe" para aliviar a pressão).</li>
            <li><strong>Diminuir a pressão</strong> (ou aumentar o volume) → desloca para o lado de <strong>maior número de mols gasosos</strong>.</li>
          </ul>
        </div>
        <p>
          Na amônia, contamos os coeficientes dos gases: à esquerda temos{" "}
          <M>{"1 + 3 = 4"}</M> mols; à direita, <M>{"2"}</M> mols. O esquema abaixo mostra o que acontece ao
          comprimir o sistema.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 250" width="480" height="250" aria-label="Esquema antes e depois mostrando deslocamento do equilíbrio ao aumentar a pressão">
            {/* caixa ANTES */}
            <rect x="28" y="60" width="150" height="120" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="103" y="48" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">ANTES (P baixa)</text>
            {/* 4 mols à esquerda - bolinhas espalhadas */}
            <circle cx="58" cy="90" r="7" fill="#2563eb"/>
            <circle cx="92" cy="104" r="7" fill="#2563eb"/>
            <circle cx="130" cy="86" r="7" fill="#7c3aed"/>
            <circle cx="150" cy="120" r="7" fill="#7c3aed"/>
            <circle cx="64" cy="148" r="7" fill="#059669"/>
            <circle cx="118" cy="152" r="7" fill="#059669"/>
            <text x="103" y="198" textAnchor="middle" fontSize="10" fill="#374151">4 mols ⇌ 2 mols</text>

            {/* grande seta de compressão */}
            <line x1="192" y1="120" x2="288" y2="120" stroke="#dc2626" strokeWidth="3" markerEnd="url(#prarr)"/>
            <text x="240" y="108" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#b91c1c">↑ Pressão</text>
            <text x="240" y="140" textAnchor="middle" fontSize="10" fill="#b91c1c">↓ Volume</text>

            {/* caixa DEPOIS - menor (comprimida) */}
            <rect x="302" y="78" width="110" height="84" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            <text x="357" y="48" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">DEPOIS (P alta)</text>
            {/* menos mols (2) - produtos concentrados */}
            <circle cx="332" cy="108" r="7" fill="#059669"/>
            <circle cx="382" cy="132" r="7" fill="#059669"/>
            <circle cx="360" cy="148" r="6" fill="#7c3aed"/>
            <text x="357" y="184" textAnchor="middle" fontSize="10" fill="#374151">desloca → 2 mols (NH₃)</text>

            {/* seta indicando sentido do deslocamento */}
            <text x="357" y="208" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#047857">equilíbrio → DIREITA</text>

            <defs>
              <marker id="prarr" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L0,7 L9,3.5 z" fill="#dc2626"/></marker>
            </defs>
          </svg>
          <figcaption>Aumentar a pressão (comprimir) desloca o equilíbrio da amônia para a direita — o lado com menos mols gasosos (2 NH₃ &lt; 1 N₂ + 3 H₂).</figcaption>
        </figure>
        <div className="lesson-highlight">
          <p>
            <strong>Atenção:</strong> se o número de mols de gás for <em>igual</em> nos dois lados (ex.:{" "}
            <M>{"\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)"}</M>, 2 mols de cada
            lado), a pressão <strong>não desloca</strong> o equilíbrio. Sólidos e líquidos puros não contam no
            balanço de mols gasosos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Perturbação 3</span>
        <h2>5. Efeito da Temperatura</h2>
        <p>
          A temperatura é a <strong>única</strong> perturbação que <strong>altera o valor de K</strong>. Para
          aplicar Le Chatelier, tratamos o calor como se fosse um "reagente" ou "produto":
        </p>
        <div className="math-block">
          <p><M block>{"\\underbrace{\\text{N}_2 + 3\\,\\text{H}_2}_{\\text{reagentes}} \\rightleftharpoons \\underbrace{2\\,\\text{NH}_3}_{\\text{produtos}} + \\text{calor} \\qquad (\\Delta H < 0)"}</M></p>
        </div>
        <p>
          Como a síntese da amônia é <strong>exotérmica</strong>, o calor "aparece" do lado dos produtos. As
          regras gerais:
        </p>
        <div className="lesson-highlight">
          <ul>
            <li><strong>Aumentar T</strong> → favorece o sentido <strong>endotérmico</strong> (que absorve o calor adicionado). Numa reação exotérmica, isso desloca para os <strong>reagentes</strong> (← esquerda) e <strong>diminui K</strong>.</li>
            <li><strong>Diminuir T</strong> → favorece o sentido <strong>exotérmico</strong> (que libera calor). Para a amônia, desloca para os <strong>produtos</strong> (→ direita) e <strong>aumenta K</strong>.</li>
          </ul>
        </div>
        <p>
          Eis o grande dilema industrial: termodinamicamente, baixar a temperatura aumentaria o rendimento de
          amônia. Mas, cineticamente, baixas temperaturas tornam a reação <em>lentíssima</em>. A solução é um{" "}
          <strong>compromisso</strong>: temperatura moderada (cerca de 400–500 °C), alta pressão (150–300 atm)
          e um <strong>catalisador</strong> de ferro para acelerar o processo sem mexer no equilíbrio.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Variável no Haber-Bosch</th><th>O que Le Chatelier "pede"</th><th>Restrição real</th><th>Escolha industrial</th></tr>
            </thead>
            <tbody>
              <tr><td>Pressão</td><td>Alta (lado de menos mols)</td><td>Equipamentos caros/seguros</td><td>150–300 atm</td></tr>
              <tr><td>Temperatura</td><td>Baixa (favorece exotérmica)</td><td>Reação fica lenta demais</td><td>~400–500 °C (compromisso)</td></tr>
              <tr><td>Concentração</td><td>Remover NH₃ continuamente</td><td>—</td><td>Liquefaz e retira a NH₃</td></tr>
              <tr><td>Catalisador</td><td>Não desloca, mas acelera</td><td>—</td><td>Ferro (Fe) com promotores</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Não desloca</span>
        <h2>6. Catalisador: Acelera, mas Não Desloca</h2>
        <p>
          Um erro clássico em provas é achar que o catalisador "empurra" o equilíbrio. Ele <strong>não
          desloca</strong>: o catalisador diminui a energia de ativação das reações direta <em>e</em> inversa
          na mesma proporção, acelerando as duas igualmente. O resultado é que o sistema{" "}
          <strong>atinge o equilíbrio mais rápido</strong>, mas as concentrações finais e o valor de K
          permanecem exatamente os mesmos. No Haber-Bosch, o catalisador de ferro é indispensável apenas
          porque, sem ele, a reação seria lenta demais para ser viável.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Não desloca</span>
        <h2>7. Gás Inerte a Volume Constante</h2>
        <p>
          Adicionar um gás inerte (como argônio) <strong>a volume constante</strong> aumenta a pressão total
          do recipiente, mas <strong>não altera as pressões parciais</strong> (nem as concentrações) dos gases
          que participam do equilíbrio. Como o equilíbrio "enxerga" apenas as concentrações/pressões parciais
          dos participantes, <strong>não há deslocamento</strong>. Só haveria efeito se a adição do gás
          inerte forçasse uma variação de volume (a pressão constante), o que mudaria as concentrações de
          todos os gases.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>8. Le Chatelier no Mundo Real</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏭</span>
            <h3>Síntese da amônia</h3>
            <p>Alta pressão + remoção contínua de NH₃ + catalisador de ferro maximizam a produção de fertilizantes.</p>
          </div>
          <div className="lesson-card">
            <span>🥤</span>
            <h3>Refrigerante</h3>
            <p><M>{"\\text{CO}_2(g) \\rightleftharpoons \\text{CO}_2(aq)"}</M>: engarrafado sob alta pressão. Ao abrir, a pressão cai, o equilíbrio desloca e o gás escapa.</p>
          </div>
          <div className="lesson-card">
            <span>🩸</span>
            <h3>pH do sangue</h3>
            <p><M>{"\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-"}</M> regula o pH; hiperventilar remove CO₂ e desloca o equilíbrio.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🎯</span>
            <h3>O princípio</h3>
            <p>O sistema reage para <strong>minimizar</strong> a perturbação imposta.</p>
          </div>
          <div className="math-card">
            <span>➕</span>
            <h3>Concentração</h3>
            <p>Adicionar → desloca para o lado oposto (consome). Remover → desloca para repor.</p>
          </div>
          <div className="math-card">
            <span>🎈</span>
            <h3>Pressão ↑</h3>
            <p>Desloca para o lado de <strong>menos mols</strong> de gás. K não muda.</p>
          </div>
          <div className="math-card">
            <span>🌡️</span>
            <h3>Temperatura ↑</h3>
            <p>Favorece o sentido <strong>endotérmico</strong>. Única que <strong>altera K</strong>.</p>
          </div>
          <div className="math-card">
            <span>⚗️</span>
            <h3>Catalisador</h3>
            <p>Não desloca; só faz atingir o equilíbrio mais rápido.</p>
          </div>
          <div className="math-card">
            <span>💨</span>
            <h3>Gás inerte (V const.)</h3>
            <p>Não desloca: pressões parciais dos participantes não mudam.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Adição de reagente"
          statement={<p>No equilíbrio <M>{"\\text{A} + \\text{B} \\rightleftharpoons \\text{C}"}</M>, ao adicionar mais de A, o equilíbrio se desloca:</p>}
          options={[
            { letter: "a", text: "Para a direita (formando mais C)", correct: true },
            { letter: "b", text: "Para a esquerda" },
            { letter: "c", text: "Não se altera" },
            { letter: "d", text: "A reação cessa" },
          ]}
          resolution={<p>Adicionar A perturba o sistema; ele se desloca no sentido que <strong>consome</strong> o excesso de A — para a direita, formando mais C. O valor de K não muda.</p>}
        />

        <Exercise
          level="Básico"
          title="2. O que o catalisador faz"
          statement={<p>Adicionar um catalisador a um sistema em equilíbrio:</p>}
          options={[
            { letter: "a", text: "Não desloca o equilíbrio, apenas faz com que ele seja atingido mais rápido", correct: true },
            { letter: "b", text: "Desloca para a direita" },
            { letter: "c", text: "Desloca para a esquerda" },
            { letter: "d", text: "Aumenta o valor de K" },
          ]}
          resolution={<p>O catalisador acelera igualmente as reações direta e inversa. O equilíbrio é alcançado mais depressa, mas as concentrações finais e o K permanecem inalterados.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Efeito da pressão"
          statement={<p>No equilíbrio <M>{"\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)"}</M>, aumentar a pressão desloca o equilíbrio:</p>}
          options={[
            { letter: "a", text: "Para a direita (lado de menos mols de gás)", correct: true },
            { letter: "b", text: "Para a esquerda (lado de mais mols de gás)" },
            { letter: "c", text: "Não desloca" },
            { letter: "d", text: "Depende do catalisador usado" },
          ]}
          resolution={<p>À esquerda há 4 mols de gás (1 + 3) e à direita, 2 mols. Aumentar a pressão favorece o lado de <strong>menor</strong> número de mols gasosos → direita (mais NH₃).</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Efeito da temperatura"
          statement={<p>Numa reação exotérmica em equilíbrio, aumentar a temperatura provoca:</p>}
          options={[
            { letter: "a", text: "Deslocamento para a esquerda (sentido endotérmico) e diminuição de K", correct: true },
            { letter: "b", text: "Deslocamento para a direita e aumento de K" },
            { letter: "c", text: "Nenhuma alteração" },
            { letter: "d", text: "Deslocamento para o lado de menos mols" },
          ]}
          resolution={<p>Aumentar T favorece o sentido <strong>endotérmico</strong>. Se a reação direta é exotérmica, a inversa é endotérmica — logo o equilíbrio se desloca para os reagentes (esquerda), e o valor de K <strong>diminui</strong>.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Gás inerte e equilíbrio com mesmos mols"
          statement={<p>Considere duas situações: (I) adicionar argônio (inerte) ao equilíbrio <M>{"\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3"}</M> a volume constante; (II) aumentar a pressão do equilíbrio <M>{"\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)"}</M>. O que ocorre?</p>}
          options={[
            { letter: "a", text: "Em ambos os casos o equilíbrio NÃO se desloca", correct: true },
            { letter: "b", text: "Em I desloca para a direita; em II não desloca" },
            { letter: "c", text: "Em I não desloca; em II desloca para a direita" },
            { letter: "d", text: "Em ambos desloca para a esquerda" },
          ]}
          resolution={<p>Em (I), o gás inerte a volume constante não altera as pressões parciais dos participantes → não desloca. Em (II), há 2 mols de gás de cada lado (1 + 1 = 2), então a pressão não tem lado preferencial → não desloca. Em nenhum dos casos há deslocamento.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Produção industrial de amônia"
          statement={<p>No processo Haber-Bosch (<M>{"\\text{N}_2 + 3\\,\\text{H}_2 \\rightleftharpoons 2\\,\\text{NH}_3"}</M>, exotérmica), busca-se o maior rendimento de amônia possível. A estratégia que melhor combina os fatores de equilíbrio é:</p>}
          options={[
            { letter: "a", text: "Usar alta pressão, remover a NH₃ formada e adotar temperatura moderada com catalisador.", correct: true },
            { letter: "b", text: "Usar baixa pressão e temperatura muito alta." },
            { letter: "c", text: "Adicionar gás inerte a volume constante para aumentar a pressão total." },
            { letter: "d", text: "Remover o N₂ continuamente do reator." },
          ]}
          resolution={<p>Alta pressão favorece o lado de menos mols (direita). Remover a NH₃ desloca o equilíbrio continuamente para a direita. A temperatura é um <strong>compromisso</strong>: baixa demais torna a reação lenta, por isso usa-se temperatura moderada com catalisador de ferro, que acelera sem deslocar o equilíbrio. Gás inerte a V constante não ajuda, e remover N₂ deslocaria para a esquerda.</p>}
        />
      </section>
    </article>
  );
}
