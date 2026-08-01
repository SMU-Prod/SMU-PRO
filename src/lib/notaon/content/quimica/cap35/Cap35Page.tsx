"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap35Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 35</span>
          <h1>Eletroquímica III: Eletrólise e Leis de Faraday</h1>
          <p>
            Se a pilha transforma uma reação espontânea em corrente elétrica, a <strong>eletrólise</strong> faz
            o caminho inverso: usa energia elétrica de uma fonte externa para <strong>forçar</strong> reações
            que <em>não</em> aconteceriam sozinhas. É a eletrólise que extrai o alumínio da bauxita, produz o
            cloro e a soda cáustica da indústria e deposita as camadas de cromo e ouro da galvanoplastia. Neste
            capítulo, distinguimos a eletrólise ígnea da aquosa, entendemos a prioridade de descarga dos íons e
            dominamos as <strong>leis quantitativas de Faraday</strong> — a ponte entre carga elétrica e massa
            de produto.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que é Eletrólise?</h2>
        <p>
          A <strong>eletrólise</strong> é um processo <strong>não espontâneo</strong> no qual uma corrente
          elétrica fornecida por uma fonte externa (bateria, gerador) provoca uma reação de oxirredução. Ela
          converte energia <strong>elétrica em química</strong> — exatamente o inverso da pilha, que converte
          química em elétrica. Como a reação seria espontânea no sentido oposto, o potencial global é{" "}
          <strong>negativo</strong> (<M>{"\\Delta E < 0"}</M>), e por isso é preciso "empurrar" os elétrons com
          uma tensão externa maior que a da reação inversa.
        </p>
        <div className="lesson-highlight">
          <h3>Atenção: a inversão dos polos</h3>
          <p>
            A regra <em>"cátodo = redução / ânodo = oxidação"</em> vale SEMPRE, na pilha e na eletrólise. O que
            muda é o <strong>sinal</strong> dos eletrodos. Na pilha, o cátodo é o polo positivo; na eletrólise,
            como a fonte externa empurra elétrons para dentro de um eletrodo, o <strong>cátodo é o polo
            negativo</strong> (recebe elétrons, ocorre redução) e o <strong>ânodo é o polo positivo</strong>{" "}
            (perde elétrons, ocorre oxidação).
          </p>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Aspecto</th><th>Pilha (galvânica)</th><th>Eletrólise (eletrolítica)</th></tr>
            </thead>
            <tbody>
              <tr><td>Espontaneidade</td><td>Espontânea (<M>{"\\Delta E > 0"}</M>)</td><td>Não espontânea (<M>{"\\Delta E < 0"}</M>)</td></tr>
              <tr><td>Conversão de energia</td><td>Química → elétrica</td><td>Elétrica → química</td></tr>
              <tr><td>Fonte externa</td><td>Não precisa (é a fonte)</td><td>Indispensável</td></tr>
              <tr><td>Cátodo (redução)</td><td>Polo positivo (+)</td><td>Polo negativo (−)</td></tr>
              <tr><td>Ânodo (oxidação)</td><td>Polo negativo (−)</td><td>Polo positivo (+)</td></tr>
              <tr><td>Exemplo</td><td>Pilha de Daniell, bateria de celular</td><td>Obtenção de Al, cloro-soda, cromação</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A célula</span>
        <h2>2. A Cuba Eletrolítica</h2>
        <p>
          Na eletrólise, os dois eletrodos ficam mergulhados no mesmo recipiente (a <strong>cuba</strong> ou
          célula eletrolítica), ligados aos polos da fonte. Os <strong>cátions</strong> (+) são atraídos pelo
          cátodo (−), onde <strong>ganham elétrons</strong> (redução); os <strong>ânions</strong> (−) migram
          para o ânodo (+), onde <strong>perdem elétrons</strong> (oxidação). A figura abaixo mostra a
          eletrólise ígnea do NaCl fundido.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 300" width="480" height="300" aria-label="Cuba eletrolítica com fonte externa, cátodo e ânodo">
            {/* Fonte externa (bateria) */}
            <rect x="200" y="14" width="80" height="34" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
            <text x="240" y="36" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">FONTE (DC)</text>
            <text x="186" y="34" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#dc2626">−</text>
            <text x="296" y="34" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#2563eb">+</text>

            {/* Fios */}
            <line x1="200" y1="31" x2="150" y2="31" stroke="#374151" strokeWidth="2"/>
            <line x1="150" y1="31" x2="150" y2="120" stroke="#374151" strokeWidth="2"/>
            <line x1="280" y1="31" x2="330" y2="31" stroke="#374151" strokeWidth="2"/>
            <line x1="330" y1="31" x2="330" y2="120" stroke="#374151" strokeWidth="2"/>

            {/* Sentido dos elétrons no fio */}
            <line x1="170" y1="80" x2="170" y2="60" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#e35el)"/>
            <text x="118" y="76" fontSize="10" fill="#5b21b6">e⁻ ↓</text>
            <line x1="330" y1="60" x2="330" y2="80" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#e35el)"/>
            <text x="338" y="76" fontSize="10" fill="#5b21b6">e⁻ ↑</text>

            {/* Cuba */}
            <path d="M70,120 L410,120 L390,275 L90,275 Z" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="240" y="200" textAnchor="middle" fontSize="12" fill="#1e40af">NaCl fundido</text>
            <text x="240" y="218" textAnchor="middle" fontSize="11" fill="#1e40af">Na⁺ + Cl⁻ livres</text>

            {/* Eletrodos */}
            <rect x="142" y="118" width="16" height="130" fill="#9ca3af" stroke="#374151" strokeWidth="1.5"/>
            <rect x="322" y="118" width="16" height="130" fill="#9ca3af" stroke="#374151" strokeWidth="1.5"/>
            <text x="150" y="262" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">CÁTODO (−)</text>
            <text x="150" y="278" textAnchor="middle" fontSize="10" fill="#dc2626">redução</text>
            <text x="330" y="262" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">ÂNODO (+)</text>
            <text x="330" y="278" textAnchor="middle" fontSize="10" fill="#2563eb">oxidação</text>

            {/* Migração de íons */}
            <line x1="240" y1="150" x2="175" y2="150" stroke="#dc2626" strokeWidth="1.8" markerEnd="url(#e35cat)"/>
            <text x="208" y="144" textAnchor="middle" fontSize="11" fill="#b91c1c">Na⁺</text>
            <line x1="240" y1="172" x2="305" y2="172" stroke="#2563eb" strokeWidth="1.8" markerEnd="url(#e35an)"/>
            <text x="276" y="166" textAnchor="middle" fontSize="11" fill="#1d4ed8">Cl⁻</text>

            {/* Produtos */}
            <text x="150" y="108" textAnchor="middle" fontSize="10" fill="#065f46">Na (l)</text>
            <text x="330" y="108" textAnchor="middle" fontSize="10" fill="#065f46">Cl₂ (g) ↑</text>

            <defs>
              <marker id="e35el" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/></marker>
              <marker id="e35cat" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/></marker>
              <marker id="e35an" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/></marker>
            </defs>
          </svg>
          <figcaption>
            Cuba eletrolítica: a fonte externa força os elétrons para o cátodo (−), onde Na⁺ se reduz a Na; os
            ânions Cl⁻ migram ao ânodo (+) e se oxidam a Cl₂.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 1</span>
        <h2>3. Eletrólise Ígnea</h2>
        <p>
          A eletrólise <strong>ígnea</strong> ocorre com o composto iônico <strong>fundido</strong> (líquido,
          sem água). Aquecendo o sal até a fusão, os íons ficam livres para migrar aos eletrodos. Como não há
          água para competir, os únicos participantes são os <strong>íons do próprio composto</strong>. Por
          isso é o método para obter metais muito reativos, como sódio, potássio, magnésio e alumínio, que
          <em>não</em> podem ser obtidos em meio aquoso (a água reduziria preferencialmente).
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo: NaCl fundido</h3>
          <p>Cátodo (redução): <M>{"\\text{Na}^{+} + e^{-} \\rightarrow \\text{Na}_{(l)}"}</M></p>
          <p>Ânodo (oxidação): <M>{"2\\,\\text{Cl}^{-} \\rightarrow \\text{Cl}_{2(g)} + 2e^{-}"}</M></p>
          <p>
            Global: <M>{"2\\,\\text{NaCl}_{(l)} \\rightarrow 2\\,\\text{Na}_{(l)} + \\text{Cl}_{2(g)}"}</M>.
            Produz sódio metálico e gás cloro.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipo 2</span>
        <h2>4. Eletrólise Aquosa e a Prioridade de Descarga</h2>
        <p>
          Na eletrólise <strong>aquosa</strong>, o composto está dissolvido em água — e a própria{" "}
          <strong>água também pode reagir</strong>, competindo com os íons do sal. Quem reage primeiro? Aquele
          que for <strong>mais fácil de descarregar</strong>: no cátodo, o que se reduz mais facilmente; no
          ânodo, o que se oxida mais facilmente. As semirreações da água são:
        </p>
        <div className="lesson-highlight">
          <p>Redução da água (cátodo): <M>{"2\\,\\text{H}_2\\text{O} + 2e^{-} \\rightarrow \\text{H}_{2} + 2\\,\\text{OH}^{-}"}</M></p>
          <p>Oxidação da água (ânodo): <M>{"2\\,\\text{H}_2\\text{O} \\rightarrow \\text{O}_{2} + 4\\,\\text{H}^{+} + 4e^{-}"}</M></p>
        </div>
        <p>
          A tabela abaixo resume a ordem de prioridade. Cátions de metais pouco reativos (Cu²⁺, Ag⁺, Au³⁺)
          descarregam <em>antes</em> da água; cátions de metais muito reativos (grupos 1A, 2A e Al³⁺){" "}
          <strong>não</strong> descarregam em água — a água é reduzida no lugar deles. Entre os ânions,
          ânions não oxigenados (Cl⁻, Br⁻, I⁻) descarregam antes da água; oxiânions (SO₄²⁻, NO₃⁻) e o F⁻ não —
          a água é oxidada (libera O₂).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Eletrodo</th><th>Descarrega ANTES da água (prioridade)</th><th>Descarrega DEPOIS (água reage)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Cátodo (cátions)</td>
                <td>Metais menos reativos: Au³⁺, Ag⁺, Cu²⁺, Ni²⁺, Pb²⁺, Fe²⁺, Zn²⁺, H⁺</td>
                <td>Metais alcalinos (Na⁺, K⁺), alcalino-terrosos (Ca²⁺, Mg²⁺) e Al³⁺ → reduz H₂O (libera H₂)</td>
              </tr>
              <tr>
                <td>Ânodo (ânions)</td>
                <td>Ânions não oxigenados: Cl⁻, Br⁻, I⁻ (e ânions de oxiácidos só em casos especiais)</td>
                <td>Oxiânions (SO₄²⁻, NO₃⁻, CO₃²⁻, PO₄³⁻) e F⁻ → oxida H₂O (libera O₂)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Exemplo — NaCl(aq):</strong> no cátodo, o Na⁺ é difícil de reduzir, então a água se reduz
          (<M>{"\\text{H}_2"}</M> + OH⁻); no ânodo, o Cl⁻ se oxida (<M>{"\\text{Cl}_2"}</M>). O Na⁺ permanece em
          solução com o OH⁻, formando <strong>NaOH</strong> (soda cáustica). Produtos:{" "}
          <M>{"\\text{H}_2"}</M>, <M>{"\\text{Cl}_2"}</M> e NaOH — exatamente o <strong>processo cloro-soda</strong>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Quantitativo</span>
        <h2>5. Leis Quantitativas de Faraday</h2>
        <p>
          Michael Faraday descobriu (1834) que a <strong>massa</strong> de substância depositada ou produzida
          em um eletrodo é diretamente proporcional à <strong>carga elétrica</strong> que atravessa a célula.
          A carga, por sua vez, é o produto da corrente pelo tempo:
        </p>
        <div className="math-block">
          <h3>Carga elétrica</h3>
          <p><M block>{"Q = i \\cdot t"}</M></p>
          <p>
            <M>{"Q"}</M> = carga (coulombs, C); <M>{"i"}</M> = corrente (ampères, A);{" "}
            <M>{"t"}</M> = tempo (segundos, s). Lembre: <M>{"1\\ \\text{A} = 1\\ \\text{C/s}"}</M>.
          </p>
        </div>
        <div className="math-block">
          <h3>Massa depositada (lei combinada)</h3>
          <p><M block>{"m = \\dfrac{M \\cdot Q}{n \\cdot F} = \\dfrac{M \\cdot i \\cdot t}{n \\cdot F}"}</M></p>
          <p>
            <M>{"M"}</M> = massa molar (g/mol); <M>{"n"}</M> = número de elétrons trocados por íon;{" "}
            <M>{"F"}</M> = constante de Faraday = <M>{"96\\,500\\ \\text{C/mol}"}</M> de elétrons.
          </p>
        </div>
        <p>
          O <strong>1 Faraday (1 F)</strong> é a carga de <strong>1 mol de elétrons</strong>:{" "}
          <M>{"1\\,F = N_A \\cdot e = (6{,}02 \\times 10^{23}) \\times (1{,}6 \\times 10^{-19}) \\approx 96\\,500\\ \\text{C/mol}"}</M>.
          Ou seja: para depositar 1 mol de um metal que precisa de 1 elétron, gastam-se 96 500 C; se precisar
          de 2 elétrons (como Cu²⁺), gastam-se 2 × 96 500 = 193 000 C.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Grandeza</th><th>Símbolo</th><th>Unidade</th><th>Relação</th></tr>
            </thead>
            <tbody>
              <tr><td>Corrente elétrica</td><td><M>{"i"}</M></td><td>ampère (A)</td><td><M>{"i = Q/t"}</M></td></tr>
              <tr><td>Tempo</td><td><M>{"t"}</M></td><td>segundo (s)</td><td><M>{"t = Q/i"}</M></td></tr>
              <tr><td>Carga elétrica</td><td><M>{"Q"}</M></td><td>coulomb (C)</td><td><M>{"Q = i \\cdot t"}</M></td></tr>
              <tr><td>Constante de Faraday</td><td><M>{"F"}</M></td><td>C/mol e⁻</td><td><M>{"96\\,500"}</M></td></tr>
              <tr><td>Massa de produto</td><td><M>{"m"}</M></td><td>grama (g)</td><td><M>{"m = \\frac{M\\,i\\,t}{n\\,F}"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resolvendo</span>
        <h2>6. Exemplos Resolvidos de Faraday</h2>
        <div className="math-block">
          <h3>Exemplo 1 — massa depositada</h3>
          <p>
            Uma corrente de <M>{"10\\ \\text{A}"}</M> circula por <M>{"965\\ \\text{s}"}</M> em uma solução de{" "}
            <M>{"\\text{Cu}^{2+}"}</M>. Quanto cobre (<M>{"M = 63{,}5"}</M> g/mol, <M>{"n = 2"}</M>) se deposita?
          </p>
          <p>
            <M block>{"Q = i \\cdot t = 10 \\times 965 = 9\\,650\\ \\text{C}"}</M>
            <M block>{"m = \\dfrac{M \\cdot Q}{n \\cdot F} = \\dfrac{63{,}5 \\times 9\\,650}{2 \\times 96\\,500} = \\dfrac{612\\,775}{193\\,000} \\approx 3{,}18\\ \\text{g}"}</M>
          </p>
        </div>
        <div className="math-block">
          <h3>Exemplo 2 — tempo necessário</h3>
          <p>
            Quanto tempo é preciso para depositar <M>{"5{,}4\\ \\text{g}"}</M> de prata (<M>{"M = 108"}</M> g/mol,{" "}
            <M>{"n = 1"}</M>) usando corrente de <M>{"2\\ \\text{A}"}</M>?
          </p>
          <p>
            <M block>{"m = \\dfrac{M \\cdot i \\cdot t}{n \\cdot F} \\Rightarrow t = \\dfrac{m \\cdot n \\cdot F}{M \\cdot i}"}</M>
            <M block>{"t = \\dfrac{5{,}4 \\times 1 \\times 96\\,500}{108 \\times 2} = \\dfrac{521\\,100}{216} \\approx 2\\,412\\ \\text{s} \\approx 40\\ \\text{min}"}</M>
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Células em série</h3>
          <p>
            Quando várias cubas são ligadas <strong>em série</strong>, a <strong>mesma carga</strong> (mesma
            quantidade de elétrons) passa por todas. As massas depositadas em cada uma são proporcionais a{" "}
            <M>{"M/n"}</M> (equivalente-grama) de cada metal. Por isso, com a mesma carga, deposita-se 1 mol
            de Ag (n = 1), mas só 0,5 mol de Cu (n = 2).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Indústria</span>
        <h2>7. Galvanoplastia e Aplicações</h2>
        <p>
          A <strong>galvanoplastia</strong> é a eletrólise usada para depositar uma fina camada de metal sobre
          uma peça, dando proteção contra corrosão e acabamento brilhante (cromação de para-choques, banho de
          ouro em joias, niquelagem de ferramentas). A <strong>peça</strong> a ser revestida é ligada ao{" "}
          <strong>cátodo</strong> (−), e o metal de revestimento (ou seus íons em solução) fornece os cátions
          que ali se reduzem. Pela lei de Faraday, a espessura da camada é controlada pela carga (i·t).
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 290" width="480" height="290" aria-label="Esquema de galvanoplastia: banho de prata sobre uma colher">
            {/* Fonte */}
            <rect x="200" y="14" width="80" height="32" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
            <text x="240" y="35" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">FONTE</text>
            <text x="190" y="33" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">−</text>
            <text x="292" y="33" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2563eb">+</text>

            <line x1="200" y1="30" x2="140" y2="30" stroke="#374151" strokeWidth="2"/>
            <line x1="140" y1="30" x2="140" y2="110" stroke="#374151" strokeWidth="2"/>
            <line x1="280" y1="30" x2="345" y2="30" stroke="#374151" strokeWidth="2"/>
            <line x1="345" y1="30" x2="345" y2="110" stroke="#374151" strokeWidth="2"/>

            {/* Cuba com solução de AgNO3 */}
            <path d="M70,110 L410,110 L392,265 L88,265 Z" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="240" y="240" textAnchor="middle" fontSize="11" fill="#1e40af">Solução de AgNO₃ (Ag⁺)</text>

            {/* Cátodo: a peça (colher) */}
            <rect x="132" y="108" width="16" height="60" fill="#9ca3af" stroke="#374151" strokeWidth="1.5"/>
            <ellipse cx="140" cy="195" rx="22" ry="34" fill="#cbd5e1" stroke="#374151" strokeWidth="1.5"/>
            <text x="140" y="282" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#dc2626">PEÇA = CÁTODO (−)</text>
            <text x="140" y="198" textAnchor="middle" fontSize="9" fill="#065f46">Ag deposita</text>

            {/* Anodo: barra de prata */}
            <rect x="337" y="108" width="16" height="120" fill="#e2e8f0" stroke="#374151" strokeWidth="1.5"/>
            <text x="345" y="282" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2563eb">Ag puro = ÂNODO (+)</text>
            <text x="345" y="100" textAnchor="middle" fontSize="9" fill="#374151">Ag → Ag⁺ + e⁻</text>

            {/* migração Ag+ do anodo para o catodo */}
            <line x1="320" y1="175" x2="180" y2="175" stroke="#dc2626" strokeWidth="1.8" markerEnd="url(#e35gp)"/>
            <text x="250" y="168" textAnchor="middle" fontSize="11" fill="#b91c1c">Ag⁺ →→ cátodo</text>
            <text x="160" y="150" textAnchor="middle" fontSize="9" fill="#065f46">Ag⁺ + e⁻ → Ag</text>

            <defs>
              <marker id="e35gp" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/></marker>
            </defs>
          </svg>
          <figcaption>
            Galvanoplastia (banho de prata): a peça é o cátodo, onde Ag⁺ se reduz e deposita; o ânodo de prata
            pura se dissolve repondo os íons. A espessura depende da carga total (i·t).
          </figcaption>
        </figure>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏭</span>
            <h3>Obtenção de alumínio</h3>
            <p>Processo Hall-Héroult: eletrólise ígnea da alumina (Al₂O₃) dissolvida em criolita fundida.</p>
          </div>
          <div className="lesson-card">
            <span>🧼</span>
            <h3>Cloro-soda</h3>
            <p>Eletrólise da salmoura (NaCl aq) produz Cl₂, H₂ e NaOH — base da indústria química.</p>
          </div>
          <div className="lesson-card">
            <span>✨</span>
            <h3>Galvanoplastia</h3>
            <p>Cromação, niquelagem, banhos de ouro e prata; proteção e acabamento de peças.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>⚡</span>
            <h3>Eletrólise</h3>
            <p>Corrente externa → reação não espontânea (elétrica → química). <M>{"\\Delta E < 0"}</M>.</p>
          </div>
          <div className="math-card">
            <span>🔌</span>
            <h3>Polos invertidos</h3>
            <p>Cátodo = polo negativo (redução); ânodo = polo positivo (oxidação).</p>
          </div>
          <div className="math-card">
            <span>🔥</span>
            <h3>Ígnea</h3>
            <p>Composto fundido; só os íons do sal. Obtém Na, K, Mg, Al.</p>
          </div>
          <div className="math-card">
            <span>💧</span>
            <h3>Aquosa</h3>
            <p>A água compete; vale a prioridade de descarga (facilidade de reduzir/oxidar).</p>
          </div>
          <div className="math-card">
            <span>📐</span>
            <h3>Faraday</h3>
            <p><M>{"Q = i\\,t"}</M> e <M>{"m = \\frac{M\\,i\\,t}{n\\,F}"}</M>.</p>
          </div>
          <div className="math-card">
            <span>🔢</span>
            <h3>1 Faraday</h3>
            <p>96 500 C = carga de 1 mol de elétrons.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Pilha × eletrólise"
          statement={<p>A eletrólise difere da pilha porque:</p>}
          options={[
            { letter: "a", text: "Usa corrente elétrica externa para provocar uma reação não espontânea", correct: true },
            { letter: "b", text: "Gera corrente a partir de uma reação espontânea" },
            { letter: "c", text: "Não envolve reações de oxirredução" },
            { letter: "d", text: "Funciona apenas com metais nobres" },
          ]}
          resolution={<p>A pilha gera energia elétrica de uma reação espontânea (<M>{"\\Delta E > 0"}</M>); a eletrólise usa energia elétrica externa para forçar uma reação não espontânea (<M>{"\\Delta E < 0"}</M>). Ambas envolvem oxirredução.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Sinal dos eletrodos na eletrólise"
          statement={<p>Na eletrólise, o cátodo e o ânodo correspondem, respectivamente, aos polos:</p>}
          options={[
            { letter: "a", text: "Negativo (redução) e positivo (oxidação)", correct: true },
            { letter: "b", text: "Positivo (redução) e negativo (oxidação)" },
            { letter: "c", text: "Negativo (oxidação) e positivo (redução)" },
            { letter: "d", text: "Ambos negativos" },
          ]}
          resolution={<p>A regra cátodo = redução / ânodo = oxidação vale sempre. Na eletrólise os sinais invertem em relação à pilha: a fonte empurra elétrons ao cátodo, que vira o polo <strong>negativo</strong> (redução); o ânodo é o polo <strong>positivo</strong> (oxidação).</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Cálculo de carga"
          statement={<p>Qual a carga elétrica que atravessa uma célula percorrida por corrente de 5 A durante 1930 segundos?</p>}
          options={[
            { letter: "a", text: "9650 C", correct: true },
            { letter: "b", text: "386 C" },
            { letter: "c", text: "96 500 C" },
            { letter: "d", text: "965 C" },
          ]}
          resolution={<p><M>{"Q = i \\cdot t = 5 \\times 1930 = 9\\,650\\ \\text{C}"}</M>. Isso equivale a <M>{"9\\,650 / 96\\,500 = 0{,}1\\ \\text{mol}"}</M> de elétrons (0,1 F).</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Produtos da eletrólise aquosa de NaCl"
          statement={<p>Na eletrólise da solução aquosa de NaCl (processo cloro-soda), os principais produtos são:</p>}
          options={[
            { letter: "a", text: "H₂, Cl₂ e NaOH", correct: true },
            { letter: "b", text: "Na metálico e Cl₂" },
            { letter: "c", text: "O₂ e H₂ apenas" },
            { letter: "d", text: "Na e O₂" },
          ]}
          resolution={<p>O Na⁺ é difícil de reduzir, então no cátodo a água é reduzida (libera H₂ e OH⁻); no ânodo o Cl⁻ é oxidado a Cl₂. O Na⁺ permanece com o OH⁻, formando NaOH. Logo: H₂, Cl₂ e NaOH (soda cáustica).</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Massa depositada (Faraday)"
          statement={<p>Em uma cuba contendo solução de CuSO₄, passa-se uma corrente de 4 A durante 1 hora (3600 s). Qual a massa de cobre depositada? Dados: Cu (M = 63,5 g/mol, n = 2), F = 96 500 C.</p>}
          options={[
            { letter: "a", text: "≈ 4,74 g", correct: true },
            { letter: "b", text: "≈ 9,48 g" },
            { letter: "c", text: "≈ 2,37 g" },
            { letter: "d", text: "≈ 63,5 g" },
          ]}
          resolution={<p><M>{"Q = i \\cdot t = 4 \\times 3600 = 14\\,400\\ \\text{C}"}</M>. <M>{"m = \\dfrac{M \\cdot Q}{n \\cdot F} = \\dfrac{63{,}5 \\times 14\\,400}{2 \\times 96\\,500} = \\dfrac{914\\,400}{193\\,000} \\approx 4{,}74\\ \\text{g}"}</M> de cobre.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Cromação de peças"
          statement={<p>Para dar acabamento brilhante e proteção a peças metálicas (torneiras, para-choques), aplica-se uma fina camada de cromo por eletrólise (galvanoplastia). A peça é ligada ao cátodo. O controle da espessura do revestimento é feito ajustando principalmente:</p>}
          options={[
            { letter: "a", text: "A carga elétrica (corrente × tempo), pois a massa depositada é proporcional a ela (lei de Faraday).", correct: true },
            { letter: "b", text: "Apenas a temperatura ambiente do galpão." },
            { letter: "c", text: "A cor original do metal-base da peça." },
            { letter: "d", text: "O pH do ar atmosférico ao redor." },
          ]}
          resolution={<p>Pela lei de Faraday, <M>{"m = \\dfrac{M\\,i\\,t}{n\\,F}"}</M>: a massa de cromo depositada (e, portanto, a espessura da camada) depende diretamente da carga, isto é, do produto corrente × tempo. Controlando i e t, ajusta-se com precisão a espessura na galvanoplastia.</p>}
        />
      </section>
    </article>
  );
}
