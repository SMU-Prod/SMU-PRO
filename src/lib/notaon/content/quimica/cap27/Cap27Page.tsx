"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap27Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 27</span>
          <h1>Fatores que Alteram a Velocidade das Reações</h1>
          <p>
            No capítulo anterior vimos que reagir é colidir com energia ≥ Eₐ e orientação correta. Agora
            entendemos por que um palito de fósforo só acende ao ser riscado, por que a comida estraga
            fora da geladeira e por que o conversor catalítico do carro existe. Cada fator cinético —
            concentração, pressão, superfície de contato, temperatura e catalisador — atua sobre o mesmo
            alvo: aumentar (ou diminuir) o número de <strong>colisões eficazes por segundo</strong>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Panorama</span>
        <h2>1. A Régua Comum: Colisões Eficazes</h2>
        <p>
          Retomando a regra de ouro da teoria das colisões: a velocidade de uma reação é proporcional ao
          número de <strong>colisões eficazes</strong> (energia ≥ Eₐ <em>e</em> geometria favorável) que
          ocorrem por unidade de tempo. Qualquer fator que acelere uma reação faz uma de duas coisas — ou
          ambas:
        </p>
        <ul>
          <li>
            <strong>Aumenta a frequência total de choques</strong> (mais partículas se encontrando por
            segundo): concentração, pressão e superfície de contato agem assim.
          </li>
          <li>
            <strong>Aumenta a fração de choques que vencem a Eₐ</strong> (choques mais energéticos ou
            barreira mais baixa): temperatura e catalisador agem assim.
          </li>
        </ul>
        <p>
          Guarde essa divisão: ela é o fio condutor de todo o capítulo. A tabela abaixo antecipa o
          panorama; nas seções seguintes detalhamos cada linha.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fator</th>
                <th>Efeito na velocidade</th>
                <th>Explicação pela teoria das colisões</th>
                <th>Exemplo cotidiano</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Concentração ↑</td>
                <td>Aumenta</td>
                <td>Mais partículas por volume → mais colisões por segundo</td>
                <td>Palha de aço queima rápido em O₂ puro</td>
              </tr>
              <tr>
                <td>Pressão ↑ (gases)</td>
                <td>Aumenta</td>
                <td>Menor volume → moléculas mais juntas → mais choques</td>
                <td>Combustão em cilindro comprimido</td>
              </tr>
              <tr>
                <td>Superfície de contato ↑</td>
                <td>Aumenta</td>
                <td>Mais área exposta do sólido → mais pontos de choque</td>
                <td>Antiácido triturado dissolve mais rápido</td>
              </tr>
              <tr>
                <td>Temperatura ↑</td>
                <td>Aumenta (muito)</td>
                <td>Choques mais frequentes e <em>mais energéticos</em> (fração ≥ Eₐ cresce)</td>
                <td>Geladeira conserva alimentos</td>
              </tr>
              <tr>
                <td>Catalisador</td>
                <td>Aumenta</td>
                <td>Caminho alternativo com Eₐ <em>menor</em> → mais choques eficazes</td>
                <td>Conversor catalítico do carro</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fator 1</span>
        <h2>2. Concentração dos Reagentes</h2>
        <p>
          Aumentar a <strong>concentração</strong> de um reagente significa colocar mais partículas dele
          num mesmo volume. Como elas ficam mais próximas e numerosas, a <strong>frequência de
          colisões</strong> cresce — e, com mais choques por segundo, há também mais choques eficazes. Por
          isso a velocidade aumenta. Um exemplo dramático: a palha de aço, que enferruja lentamente no ar
          (≈ 21% de O₂), <strong>queima vivamente</strong> quando mergulhada em oxigênio puro (100% de
          O₂), pois a concentração de O₂ disparou.
        </p>
        <p>
          A dependência quantitativa é descrita pela <strong>lei da velocidade</strong>. Para a reação
          genérica <M>{"aA + bB \\rightarrow \\text{produtos}"}</M>:
        </p>
        <div className="math-block">
          <h3>Lei da velocidade</h3>
          <p><M block>{"v = k\\,[A]^{x}\\,[B]^{y}"}</M></p>
          <p>
            <M>{"k"}</M> é a constante de velocidade (depende da temperatura e do catalisador); os
            expoentes <M>{"x"}</M> e <M>{"y"}</M> são as <strong>ordens parciais</strong>, determinadas
            experimentalmente. A <strong>ordem global</strong> é <M>{"x + y"}</M>. Em reações
            <strong> elementares</strong>, os expoentes coincidem com os coeficientes.
          </p>
        </div>
        <div className="lesson-highlight">
          <p>
            Sólidos puros e líquidos puros <strong>não</strong> entram na expressão da velocidade — sua
            "concentração" é constante. Por isso, para sólidos, o fator relevante não é a concentração, e
            sim a <strong>superfície de contato</strong> (seção 4).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fator 2</span>
        <h2>3. Pressão (Reações com Gases)</h2>
        <p>
          A <strong>pressão</strong> só influencia significativamente reações que envolvem
          <strong> gases</strong>. Aumentar a pressão sobre um gás equivale a comprimi-lo num volume menor:
          as moléculas ficam mais próximas — ou seja, a <strong>concentração efetiva aumenta</strong>.
          Mais moléculas por litro → mais colisões por segundo → maior velocidade. Pressão é, na prática,
          um "atalho" para mexer na concentração de gases.
        </p>
        <div className="lesson-highlight">
          <p>
            Cuidado para não confundir com equilíbrio químico: aqui falamos de <strong>velocidade</strong>
            (rapidez para chegar). Sobre sólidos e líquidos, a pressão tem efeito desprezível, pois eles
            são praticamente incompressíveis.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fator 3</span>
        <h2>4. Superfície de Contato</h2>
        <p>
          Quando um reagente é <strong>sólido</strong>, a reação só acontece na <strong>superfície</strong>
          em contato com o outro reagente. Dividir o sólido (triturar, pulverizar) expõe muito mais área
          para o choque — multiplicando os pontos onde colisões eficazes podem ocorrer. Por isso um
          comprimido efervescente <strong>triturado</strong> borbulha bem mais rápido que o comprimido
          inteiro: mesma massa, área de contato muitas vezes maior.
        </p>
        <p>
          O gráfico abaixo compara a velocidade inicial de reação de uma mesma massa de sólido em três
          granulometrias. Note que reduzir o tamanho do grão multiplica a área exposta e, com ela, a
          velocidade.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 280" width="480" height="280" aria-label="Velocidade de reacao em funcao da superficie de contato">
            <line x1="56" y1="240" x2="455" y2="240" stroke="#374151" strokeWidth="2"/>
            <line x1="56" y1="24" x2="56" y2="240" stroke="#374151" strokeWidth="2"/>
            <text x="255" y="270" textAnchor="middle" fontSize="13" fill="#374151">Estado de divisão do sólido</text>
            <text x="20" y="132" textAnchor="middle" fontSize="13" fill="#374151" transform="rotate(-90,20,132)">Velocidade inicial</text>

            {/* barra 1: pedaço único */}
            <rect x="100" y="190" width="64" height="50" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="132" y="256" textAnchor="middle" fontSize="11" fill="#1e40af">Pedaço único</text>
            <text x="132" y="183" textAnchor="middle" fontSize="11" fill="#1e40af">baixa</text>

            {/* barra 2: granulado */}
            <rect x="208" y="130" width="64" height="110" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            <text x="240" y="256" textAnchor="middle" fontSize="11" fill="#065f46">Granulado</text>
            <text x="240" y="123" textAnchor="middle" fontSize="11" fill="#065f46">média</text>

            {/* barra 3: pó */}
            <rect x="316" y="56" width="64" height="184" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            <text x="348" y="256" textAnchor="middle" fontSize="11" fill="#92400e">Pó fino</text>
            <text x="348" y="49" textAnchor="middle" fontSize="11" fill="#92400e">alta</text>

            {/* seta indicando aumento da area */}
            <line x1="100" y1="44" x2="392" y2="44" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="5,4" markerEnd="url(#sc-arr)"/>
            <text x="246" y="38" textAnchor="middle" fontSize="10" fill="#5b21b6">maior superfície de contato →</text>
            <defs>
              <marker id="sc-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/></marker>
            </defs>
          </svg>
          <figcaption>Mesma massa de sólido: quanto mais dividido (pó), maior a área exposta e mais rápida a reação. A velocidade cresce com a superfície de contato.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <p>
            <strong>Explosões em silos:</strong> pó de farinha, serragem e açúcar em pó suspensos no ar têm
            superfície de contato imensa. Uma faísca pode iniciar uma combustão tão rápida que vira
            explosão — exatamente o perigo dos silos de grãos e moinhos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fator 4</span>
        <h2>5. Temperatura</h2>
        <p>
          A temperatura é o fator mais <strong>poderoso</strong> — e por um motivo duplo. Aquecer:
        </p>
        <ul>
          <li><strong>(1)</strong> aumenta a energia cinética média → as moléculas se movem mais rápido e colidem com <strong>mais frequência</strong>;</li>
          <li><strong>(2)</strong> aumenta a <strong>fração</strong> de moléculas com energia ≥ Eₐ → muito mais colisões passam a ser eficazes.</li>
        </ul>
        <p>
          O efeito (2) é o que domina. Como vimos na distribuição de Maxwell-Boltzmann, ao aquecer de
          T₁ para T₂ a curva se "espalha" para a direita e a área além da Eₐ cresce desproporcionalmente.
          Por isso vale a <strong>regra empírica de Van't Hoff</strong>: a cada <strong>+10 °C</strong>, a
          velocidade de muitas reações aproximadamente <strong>dobra</strong>.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 260" width="480" height="260" aria-label="Distribuicao de Maxwell-Boltzmann em duas temperaturas">
            <line x1="50" y1="220" x2="455" y2="220" stroke="#374151" strokeWidth="2"/>
            <line x1="50" y1="20" x2="50" y2="220" stroke="#374151" strokeWidth="2"/>
            <text x="252" y="248" textAnchor="middle" fontSize="12" fill="#374151">Energia cinética das moléculas</text>
            <text x="18" y="120" textAnchor="middle" fontSize="11" fill="#374151" transform="rotate(-90,18,120)">Nº de moléculas</text>
            {/* curva T1 (menor T) */}
            <path d="M50,220 C110,210 140,50 190,50 C240,50 270,200 360,214 C400,219 430,220 455,220" fill="none" stroke="#2563eb" strokeWidth="2.5"/>
            <text x="196" y="46" fontSize="10" fill="#1d4ed8">T₁ (menor)</text>
            {/* curva T2 (maior T) */}
            <path d="M50,220 C120,217 170,120 240,120 C300,120 330,190 410,210 C430,215 445,219 455,220" fill="none" stroke="#dc2626" strokeWidth="2.5"/>
            <text x="300" y="112" fontSize="10" fill="#b91c1c">T₂ (maior)</text>
            {/* linha Ea */}
            <line x1="350" y1="40" x2="350" y2="220" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5,4"/>
            <text x="354" y="52" fontSize="11" fill="#5b21b6">Eₐ</text>
            <text x="356" y="200" fontSize="9" fill="#5b21b6">moléculas que reagem →</text>
          </svg>
          <figcaption>Aquecer (T₁ → T₂) desloca a distribuição para a direita: a fração de moléculas com energia ≥ Eₐ cresce muito, e a reação acelera fortemente — base da regra de Van't Hoff.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <p>
            <strong>No cotidiano:</strong> a geladeira (≈ 4 °C) <em>retarda</em> a deterioração; a panela de
            pressão (maior T) <em>acelera</em> o cozimento; a febre alta acelera reações metabólicas. Tudo
            isso é Maxwell-Boltzmann em ação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fator 5</span>
        <h2>6. Catalisadores</h2>
        <p>
          Um <strong>catalisador</strong> é uma substância que <strong>acelera</strong> uma reação ao
          oferecer um <strong>caminho alternativo</strong> com <strong>energia de ativação menor</strong>.
          Com a barreira mais baixa, uma fração muito maior das colisões passa a ser eficaz à mesma
          temperatura — daí o aumento de velocidade. Três propriedades são decisivas:
        </p>
        <ul>
          <li><strong>Não é consumido:</strong> participa de etapas intermediárias, mas é regenerado ao final (entra e sai intacto).</li>
          <li><strong>Não altera o ΔH:</strong> reagentes e produtos têm a mesma energia; só o "caminho" muda. O calor da reação é o mesmo.</li>
          <li><strong>Não desloca o equilíbrio nem muda o rendimento:</strong> apenas faz o sistema atingir o equilíbrio <em>mais rápido</em>.</li>
        </ul>
        <p>
          A imagem central deste capítulo é o <strong>diagrama de energia com e sem catalisador</strong>.
          Repare que as duas curvas partem do <strong>mesmo nível de reagentes</strong> e terminam no
          <strong> mesmo nível de produtos</strong> (mesmo ΔH); o que muda é a <strong>altura do pico</strong>:
          o catalisador rebaixa a barreira (Eₐ menor).
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 300" width="500" height="300" aria-label="Diagrama de energia com e sem catalisador">
            <line x1="54" y1="250" x2="480" y2="250" stroke="#374151" strokeWidth="2"/>
            <line x1="54" y1="20" x2="54" y2="250" stroke="#374151" strokeWidth="2"/>
            <text x="265" y="282" textAnchor="middle" fontSize="12" fill="#374151">Caminho da reação</text>
            <text x="18" y="135" textAnchor="middle" fontSize="12" fill="#374151" transform="rotate(-90,18,135)">Energia</text>

            {/* níveis de reagentes e produtos (compartilhados) */}
            <line x1="54" y1="150" x2="120" y2="150" stroke="#374151" strokeWidth="2"/>
            <line x1="380" y1="200" x2="470" y2="200" stroke="#374151" strokeWidth="2"/>
            <text x="64" y="143" fontSize="10" fill="#374151">reagentes</text>
            <text x="400" y="216" fontSize="10" fill="#374151">produtos</text>

            {/* curva SEM catalisador (pico alto) */}
            <path d="M120,150 C175,150 195,40 245,40 C295,40 320,200 380,200" fill="none" stroke="#dc2626" strokeWidth="3"/>
            <text x="250" y="33" textAnchor="middle" fontSize="10" fill="#b91c1c">sem catalisador (pico alto)</text>

            {/* curva COM catalisador (pico baixo) */}
            <path d="M120,150 C170,150 200,98 245,98 C290,98 320,200 380,200" fill="none" stroke="#059669" strokeWidth="3" strokeDasharray="6,4"/>
            <text x="250" y="118" textAnchor="middle" fontSize="10" fill="#047857">com catalisador (pico baixo)</text>

            {/* Ea sem catalisador */}
            <line x1="150" y1="150" x2="150" y2="40" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#cat-up)" markerStart="url(#cat-dn)"/>
            <text x="100" y="96" fontSize="10" fill="#b91c1c">Eₐ sem</text>
            {/* Ea com catalisador */}
            <line x1="178" y1="150" x2="178" y2="98" stroke="#059669" strokeWidth="1.5" markerEnd="url(#cat-up2)" markerStart="url(#cat-dn2)"/>
            <text x="184" y="128" fontSize="10" fill="#047857">Eₐ com</text>

            {/* ΔH (mesmo nos dois) */}
            <line x1="430" y1="150" x2="430" y2="200" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#cat-dh)" markerStart="url(#cat-dhb)"/>
            <line x1="54" y1="150" x2="430" y2="150" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
            <text x="436" y="180" fontSize="10" fill="#5b21b6">ΔH (igual)</text>

            <defs>
              <marker id="cat-up" markerWidth="7" markerHeight="7" refX="3" refY="6" orient="auto"><path d="M0,6 L3,0 L6,6 z" fill="#dc2626"/></marker>
              <marker id="cat-dn" markerWidth="7" markerHeight="7" refX="3" refY="0" orient="auto"><path d="M0,0 L3,6 L6,0 z" fill="#dc2626"/></marker>
              <marker id="cat-up2" markerWidth="7" markerHeight="7" refX="3" refY="6" orient="auto"><path d="M0,6 L3,0 L6,6 z" fill="#059669"/></marker>
              <marker id="cat-dn2" markerWidth="7" markerHeight="7" refX="3" refY="0" orient="auto"><path d="M0,0 L3,6 L6,0 z" fill="#059669"/></marker>
              <marker id="cat-dh" markerWidth="7" markerHeight="7" refX="3" refY="6" orient="auto"><path d="M0,6 L3,0 L6,6 z" fill="#7c3aed"/></marker>
              <marker id="cat-dhb" markerWidth="7" markerHeight="7" refX="3" refY="0" orient="auto"><path d="M0,0 L3,6 L6,0 z" fill="#7c3aed"/></marker>
            </defs>
          </svg>
          <figcaption>O catalisador (curva verde tracejada) cria um caminho de Eₐ menor. Reagentes, produtos e ΔH são idênticos aos da reação sem catalisador (curva vermelha): só a barreira muda.</figcaption>
        </figure>
        <p>
          Os catalisadores se classificam conforme a fase em que atuam, e há ainda os
          <strong> inibidores</strong>, que fazem o oposto. Compare:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>O que faz</th><th>Efeito na Eₐ</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Catálise homogênea</td>
                <td>Catalisador na mesma fase dos reagentes</td>
                <td>Diminui</td>
                <td>Reações em solução aquosa</td>
              </tr>
              <tr>
                <td>Catálise heterogênea</td>
                <td>Catalisador em fase diferente (ex.: sólido + gases)</td>
                <td>Diminui</td>
                <td>Conversor catalítico (Pt/Pd/Rh)</td>
              </tr>
              <tr>
                <td>Catalisador biológico (enzima)</td>
                <td>Proteína que acelera reações no organismo</td>
                <td>Diminui (muito)</td>
                <td>Amilase, catalase, pepsina</td>
              </tr>
              <tr>
                <td>Inibidor (catalisador negativo)</td>
                <td><strong>Retarda</strong> a reação</td>
                <td>Aumenta / bloqueia caminho</td>
                <td>Conservantes em alimentos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Enzimas</strong> são catalisadores biológicos extremamente específicos. A
            <strong> catalase</strong>, por exemplo, decompõe a água oxigenada (<M>{"2\\,\\text{H}_2\\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O} + \\text{O}_2"}</M>)
            milhões de vezes mais rápido — é por isso que o ferimento "espuma" quando recebe água oxigenada.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cotidiano</span>
        <h2>7. Os Fatores no Dia a Dia</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧊</span>
            <h3>Geladeira</h3>
            <p>Baixa T → menos colisões eficazes → comida dura mais.</p>
          </div>
          <div className="lesson-card">
            <span>🍳</span>
            <h3>Panela de pressão</h3>
            <p>Maior P e T → cozimento muito mais rápido.</p>
          </div>
          <div className="lesson-card">
            <span>💊</span>
            <h3>Antiácido triturado</h3>
            <p>Maior superfície → dissolve e age mais rápido.</p>
          </div>
          <div className="lesson-card">
            <span>🚗</span>
            <h3>Conversor catalítico</h3>
            <p>Pt/Pd/Rh aceleram a conversão de poluentes (Eₐ menor).</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🧪</span>
            <h3>Concentração / Pressão</h3>
            <p>Mais partículas por volume → mais colisões. <M>{"v = k[A]^x[B]^y"}</M>.</p>
          </div>
          <div className="math-card">
            <span>🪨</span>
            <h3>Superfície de contato</h3>
            <p>Sólido mais dividido (pó) → mais área → mais rápido.</p>
          </div>
          <div className="math-card">
            <span>🌡️</span>
            <h3>Temperatura</h3>
            <p>Choques mais frequentes e energéticos. Van't Hoff: +10 °C ≈ dobra.</p>
          </div>
          <div className="math-card">
            <span>⚗️</span>
            <h3>Catalisador</h3>
            <p>↓ Eₐ por caminho alternativo. Não é consumido, não muda ΔH.</p>
          </div>
          <div className="math-card">
            <span>🧬</span>
            <h3>Enzimas</h3>
            <p>Catalisadores biológicos específicos (catalase, amilase).</p>
          </div>
          <div className="math-card">
            <span>💥</span>
            <h3>Régua comum</h3>
            <p>Tudo se resume a <strong>colisões eficazes por segundo</strong>.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Ação do catalisador"
          statement={<p>Um catalisador aumenta a velocidade de uma reação porque:</p>}
          options={[
            { letter: "a", text: "Diminui a energia de ativação, criando um caminho alternativo", correct: true },
            { letter: "b", text: "Aumenta o ΔH da reação" },
            { letter: "c", text: "É consumido a cada ciclo da reação" },
            { letter: "d", text: "Aumenta a energia de ativação" },
          ]}
          resolution={<p>O catalisador oferece um caminho com Eₐ <strong>menor</strong>; assim, mais colisões têm energia suficiente e a reação acelera. Ele não é consumido e não altera o ΔH.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Superfície de contato"
          statement={<p>Um comprimido efervescente dissolve mais rápido quando triturado. O fator cinético responsável é:</p>}
          options={[
            { letter: "a", text: "Aumento da superfície de contato", correct: true },
            { letter: "b", text: "Diminuição da temperatura" },
            { letter: "c", text: "Redução da concentração da água" },
            { letter: "d", text: "Aumento da energia de ativação" },
          ]}
          resolution={<p>Triturar expõe muito mais área do sólido, multiplicando os pontos de colisão com a água. Mais colisões eficazes por segundo → reação mais rápida.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Regra de Van't Hoff"
          statement={<p>Uma reação ocorre a 20 °C com certa velocidade <M>{"v"}</M>. Aplicando a regra empírica de Van't Hoff (a cada +10 °C a velocidade dobra), a velocidade esperada a 40 °C é, aproximadamente:</p>}
          options={[
            { letter: "a", text: "4v", correct: true },
            { letter: "b", text: "2v" },
            { letter: "c", text: "8v" },
            { letter: "d", text: "v/2" },
          ]}
          resolution={<p>De 20 °C para 40 °C há <strong>dois</strong> saltos de 10 °C. A cada salto a velocidade dobra: <M>{"v \\rightarrow 2v \\rightarrow 4v"}</M>. Logo, a velocidade fica cerca de 4 vezes maior.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. O que o catalisador NÃO altera"
          statement={<p>Sobre a atuação de um catalisador, é <strong>INCORRETO</strong> afirmar que ele:</p>}
          options={[
            { letter: "a", text: "Aumenta o rendimento e desloca o equilíbrio da reação", correct: true },
            { letter: "b", text: "Diminui a energia de ativação" },
            { letter: "c", text: "Não é consumido na reação" },
            { letter: "d", text: "Não altera o ΔH" },
          ]}
          resolution={<p>O catalisador <strong>não</strong> altera o rendimento nem desloca o equilíbrio — apenas faz o sistema chegar ao equilíbrio mais rápido. As demais afirmações estão corretas.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Lei da velocidade e ordem"
          statement={<p>Para a reação elementar <M>{"2\\,\\text{NO}(g) + \\text{O}_2(g) \\rightarrow 2\\,\\text{NO}_2(g)"}</M>, qual a lei da velocidade e a ordem global?</p>}
          options={[
            { letter: "a", text: "v = k[NO]²[O₂]; ordem global 3", correct: true },
            { letter: "b", text: "v = k[NO][O₂]; ordem global 2" },
            { letter: "c", text: "v = k[NO₂]²; ordem global 2" },
            { letter: "d", text: "v = k; ordem global 0" },
          ]}
          resolution={<p>Em reação elementar, os expoentes coincidem com os coeficientes: <M>{"v = k[\\text{NO}]^2[\\text{O}_2]^1"}</M>. Ordem global <M>{"= 2 + 1 = 3"}</M>.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Conversor catalítico dos automóveis"
          statement={<p>O conversor catalítico dos carros contém metais nobres (Pt, Pd, Rh) que transformam gases tóxicos (CO, NOₓ) em CO₂ e N₂. Do ponto de vista cinético, a função desses metais é:</p>}
          options={[
            { letter: "a", text: "Acelerar as reações de conversão ao reduzir a energia de ativação, sem serem consumidos.", correct: true },
            { letter: "b", text: "Aumentar a quantidade de poluentes emitidos pelo escapamento." },
            { letter: "c", text: "Serem totalmente gastos a cada partida do motor." },
            { letter: "d", text: "Resfriar os gases de escape para condensá-los." },
          ]}
          resolution={<p>Trata-se de <strong>catálise heterogênea</strong>: os metais sólidos catalisam reações de gases, oferecendo um caminho de Eₐ menor. Assim as reações de conversão ficam rápidas o suficiente no tempo curtíssimo em que os gases passam pelo conversor — e os metais não se consomem.</p>}
        />
      </section>
    </article>
  );
}
