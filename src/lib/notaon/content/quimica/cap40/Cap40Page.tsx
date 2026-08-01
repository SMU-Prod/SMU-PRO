"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap40Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 40</span>
          <h1>Propriedades Físicas dos Compostos Orgânicos</h1>
          <p>
            Por que o butano é gás na cozinha enquanto a parafina da vela é sólida? Por que o álcool se
            mistura com a água, mas a gasolina não? As respostas estão nas <strong>forças
            intermoleculares</strong>, no <strong>tamanho da cadeia carbônica</strong> e nos{" "}
            <strong>grupos funcionais</strong>. Neste capítulo você aprenderá a prever pontos de fusão e
            ebulição, solubilidade e densidade dos compostos orgânicos a partir da estrutura — uma das
            habilidades mais cobradas em vestibulares e no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ponto de partida</span>
        <h2>1. Forças Intermoleculares: a Chave de Tudo</h2>
        <p>
          As propriedades físicas (PF, PE, solubilidade) dependem de quão <strong>fortemente</strong> as
          moléculas se atraem. Quanto mais intensa a força intermolecular, mais energia (calor) é preciso
          fornecer para separá-las — logo, <strong>maiores</strong> são os pontos de fusão e ebulição.
          Retomando os capítulos 12-13, há três tipos principais, em ordem crescente de intensidade:
        </p>
        <div className="lesson-highlight">
          <ul>
            <li>
              <strong>Forças de dispersão de London (dipolo induzido):</strong> presentes em{" "}
              <em>todas</em> as moléculas, mas são as <em>únicas</em> dos hidrocarbonetos (apolares).
              Crescem com o tamanho/massa da molécula.
            </li>
            <li>
              <strong>Dipolo permanente-dipolo permanente:</strong> em moléculas polares sem H ligado a F,
              O ou N — éteres, aldeídos, cetonas, ésteres, haletos.
            </li>
            <li>
              <strong>Ligação (ponte) de hidrogênio:</strong> a mais forte, em compostos com H ligado a{" "}
              <strong>F, O ou N</strong> — álcoois, ácidos carboxílicos, aminas, amidas, fenóis.
            </li>
          </ul>
          <p>
            Ordem de intensidade:{" "}
            <M>{"\\text{ligação de H} > \\text{dipolo-dipolo} > \\text{London}"}</M>.
          </p>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Função</th>
                <th>Tem H em F/O/N?</th>
                <th>Força predominante</th>
                <th>Efeito no PE</th>
                <th>Solubilidade em água</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Hidrocarboneto (alcano)</td><td>Não</td><td>London</td><td>Baixíssimo</td><td>Insolúvel</td></tr>
              <tr><td>Éter</td><td>Não</td><td>Dipolo-dipolo (fraco)</td><td>Baixo</td><td>Pouco solúvel</td></tr>
              <tr><td>Aldeído / Cetona</td><td>Não</td><td>Dipolo-dipolo</td><td>Médio</td><td>Cadeia curta solúvel</td></tr>
              <tr><td>Éster</td><td>Não</td><td>Dipolo-dipolo</td><td>Médio</td><td>Cadeia curta solúvel</td></tr>
              <tr><td>Álcool</td><td>Sim (O–H)</td><td>Ligação de hidrogênio</td><td>Alto</td><td>Cadeia curta muito solúvel</td></tr>
              <tr><td>Ácido carboxílico</td><td>Sim (O–H)</td><td>Ligação de H (dímeros)</td><td>Altíssimo</td><td>Cadeia curta muito solúvel</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tamanho importa</span>
        <h2>2. Tamanho da Cadeia × Estado Físico e PE</h2>
        <p>
          Numa <strong>série homóloga</strong> (mesma função, variando apenas o número de carbonos), a massa
          molar aumenta de termo a termo. Mais átomos significam <strong>mais elétrons</strong> e maior área
          de superfície, o que intensifica as forças de London. Por isso os pontos de fusão e de ebulição{" "}
          <strong>crescem regularmente</strong> com o tamanho da cadeia. Veja a tendência dos alcanos de
          cadeia normal, a 1 atm:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Alcano</th><th>Fórmula</th><th>Nº de C</th><th>PE (°C)</th><th>Estado físico a 25 °C</th></tr>
            </thead>
            <tbody>
              <tr><td>Metano</td><td>CH₄</td><td>1</td><td>−162</td><td>Gás</td></tr>
              <tr><td>Etano</td><td>C₂H₆</td><td>2</td><td>−89</td><td>Gás</td></tr>
              <tr><td>Propano</td><td>C₃H₈</td><td>3</td><td>−42</td><td>Gás</td></tr>
              <tr><td>Butano</td><td>C₄H₁₀</td><td>4</td><td>−0,5</td><td>Gás</td></tr>
              <tr><td>Pentano</td><td>C₅H₁₂</td><td>5</td><td>36</td><td>Líquido</td></tr>
              <tr><td>Octano</td><td>C₈H₁₈</td><td>8</td><td>126</td><td>Líquido</td></tr>
              <tr><td>Heptadecano</td><td>C₁₇H₃₆</td><td>17</td><td>302</td><td>Líquido</td></tr>
              <tr><td>Octadecano</td><td>C₁₈H₃₈</td><td>18</td><td>317</td><td>Sólido</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Regra prática para alcanos (1 atm):</strong> de <strong>1 a 4 C</strong> são gases; de{" "}
            <strong>5 a 17 C</strong> são líquidos; com <strong>18 C ou mais</strong> são sólidos (ex.: a
            parafina das velas). Quanto maior a cadeia, mais forte a coesão entre as moléculas.
          </p>
        </div>
        <p>
          O gráfico abaixo mostra como o ponto de ebulição dos alcanos sobe à medida que se adicionam
          carbonos — uma curva crescente característica das séries homólogas:
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 300" width="480" height="300" aria-label="Ponto de ebulição dos alcanos em função do número de carbonos">
            {/* Eixos */}
            <line x1="56" y1="250" x2="455" y2="250" stroke="#374151" strokeWidth="2"/>
            <line x1="56" y1="24" x2="56" y2="250" stroke="#374151" strokeWidth="2"/>
            <text x="255" y="284" textAnchor="middle" fontSize="13" fill="#374151">Número de carbonos</text>
            <text x="18" y="140" textAnchor="middle" fontSize="13" fill="#374151" transform="rotate(-90,18,140)">Ponto de ebulição (°C)</text>

            {/* Marcas eixo Y */}
            <text x="50" y="234" textAnchor="end" fontSize="10" fill="#6b7280">−100</text>
            <text x="50" y="186" textAnchor="end" fontSize="10" fill="#6b7280">0</text>
            <text x="50" y="138" textAnchor="end" fontSize="10" fill="#6b7280">100</text>
            <text x="50" y="90" textAnchor="end" fontSize="10" fill="#6b7280">200</text>
            <text x="50" y="42" textAnchor="end" fontSize="10" fill="#6b7280">300</text>
            <line x1="52" y1="186" x2="56" y2="186" stroke="#374151" strokeWidth="1"/>
            <line x1="52" y1="138" x2="56" y2="138" stroke="#374151" strokeWidth="1"/>
            <line x1="52" y1="90" x2="56" y2="90" stroke="#374151" strokeWidth="1"/>

            {/* Linha y = 0 (referência ebulição negativa/positiva) e y=25... usamos linha tracejada no zero */}
            <line x1="56" y1="186" x2="455" y2="186" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4,4"/>

            {/* Curva crescente de PE: pontos (C, PE) mapeados. x: 56 + C*22 ; y: 186 - PE*0.48 */}
            {/* C1 PE -162 -> x78 y264(clamp 244) ; usaremos valores escalados */}
            <polyline
              points="78,264 100,229 122,206 144,186 166,169 188,154 210,141 232,129 320,86 364,34 386,28"
              fill="none" stroke="#2563eb" strokeWidth="3"/>

            {/* Pontos de dados */}
            <circle cx="78" cy="264" r="3.5" fill="#dc2626"/>
            <circle cx="100" cy="229" r="3.5" fill="#dc2626"/>
            <circle cx="122" cy="206" r="3.5" fill="#dc2626"/>
            <circle cx="144" cy="186" r="3.5" fill="#dc2626"/>
            <circle cx="166" cy="169" r="3.5" fill="#dc2626"/>
            <circle cx="232" cy="129" r="3.5" fill="#dc2626"/>
            <circle cx="364" cy="34" r="3.5" fill="#dc2626"/>

            {/* Rótulos das faixas de estado físico */}
            <text x="110" y="142" textAnchor="middle" fontSize="10" fill="#1d4ed8">CH₄–C₄H₁₀: gases</text>
            <text x="250" y="232" textAnchor="middle" fontSize="10" fill="#059669">C₅–C₁₇: líquidos</text>
            <text x="380" y="60" textAnchor="middle" fontSize="10" fill="#7c3aed">≥ C₁₈: sólidos</text>

            {/* alguns rótulos de carbono no eixo x */}
            <text x="78" y="266" textAnchor="middle" fontSize="9" fill="#6b7280">1</text>
            <text x="144" y="266" textAnchor="middle" fontSize="9" fill="#6b7280">4</text>
            <text x="232" y="266" textAnchor="middle" fontSize="9" fill="#6b7280">8</text>
            <text x="364" y="266" textAnchor="middle" fontSize="9" fill="#6b7280">17</text>
          </svg>
          <figcaption>
            Ponto de ebulição dos alcanos normais cresce com o número de carbonos — mais forças de London
            por molécula maior. Gases (1–4 C), líquidos (5–17 C) e sólidos (≥ 18 C).
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Forma da cadeia</span>
        <h2>3. Ramificação: Quanto Mais Ramificada, Menor o PE</h2>
        <p>
          Para isômeros de <strong>mesma fórmula molecular</strong> (mesma massa), a forma da cadeia muda o
          ponto de ebulição. Uma cadeia <strong>normal (reta)</strong> é mais alongada e tem maior{" "}
          <strong>área de contato</strong> com as moléculas vizinhas, somando mais forças de London. Já uma
          cadeia <strong>ramificada</strong> é mais "esférica" e compacta, com menor superfície de contato —
          logo, atrações intermoleculares mais fracas e <strong>menor</strong> ponto de ebulição.
        </p>
        <div className="lesson-highlight">
          <p>
            Exemplo clássico — os isômeros de fórmula C₅H₁₂:
          </p>
          <ul>
            <li><strong>n-pentano</strong> (cadeia reta): PE = 36 °C</li>
            <li><strong>isopentano</strong> (2-metilbutano, uma ramificação): PE = 28 °C</li>
            <li><strong>neopentano</strong> (2,2-dimetilpropano, mais ramificado): PE = 9,5 °C</li>
          </ul>
          <p>
            Mais ramificações → menor área de contato → forças de London mais fracas → <strong>menor
            PE</strong>.
          </p>
        </div>
        <p>
          <strong>Atenção ao ponto de fusão:</strong> o PF não segue a mesma lógica de forma direta, pois
          também depende da <strong>simetria</strong> da molécula. Moléculas muito simétricas (como o
          neopentano) empacotam-se melhor no retículo do sólido e podem ter PF <em>mais alto</em> que o
          isômero linear — por isso, em provas, a regra "ramificação diminui" aplica-se com segurança ao{" "}
          <strong>ponto de ebulição</strong>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Função química</span>
        <h2>4. Grupos Funcionais: o Efeito das Ligações de Hidrogênio</h2>
        <p>
          Comparando compostos de <strong>massas molares próximas</strong> mas funções diferentes, o que
          decide o ponto de ebulição é o <strong>tipo de força intermolecular</strong>. Os que fazem{" "}
          <strong>ligação de hidrogênio</strong> (álcoois e ácidos) têm PE muito mais alto. Os ácidos
          carboxílicos chegam a formar <strong>dímeros</strong> (duas ligações de H entre dois ácidos), o
          que eleva ainda mais o PE. A ordem crescente típica é:
        </p>
        <div className="lesson-highlight">
          <p>
            <M>{"\\text{alcano} < \\text{éter} < \\text{aldeído/cetona} < \\text{álcool} < \\text{ácido carbox.}"}</M>
          </p>
        </div>
        <p>
          O gráfico de barras abaixo compara o PE de compostos com a <strong>mesma quantidade de carbonos</strong>{" "}
          (em torno de C₃, ~massa semelhante), evidenciando o salto causado pelas ligações de hidrogênio:
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 300" width="480" height="300" aria-label="Comparação do ponto de ebulição por função orgânica com mesmo número de carbonos">
            {/* Eixos */}
            <line x1="56" y1="250" x2="460" y2="250" stroke="#374151" strokeWidth="2"/>
            <line x1="56" y1="24" x2="56" y2="250" stroke="#374151" strokeWidth="2"/>
            <text x="258" y="288" textAnchor="middle" fontSize="13" fill="#374151">Função (mesmo nº de carbonos)</text>
            <text x="18" y="140" textAnchor="middle" fontSize="13" fill="#374151" transform="rotate(-90,18,140)">Ponto de ebulição (°C)</text>

            {/* Marcas eixo Y: escala 0..160, y = 250 - PE*1.35 */}
            <text x="50" y="254" textAnchor="end" fontSize="10" fill="#6b7280">0</text>
            <text x="50" y="187" textAnchor="end" fontSize="10" fill="#6b7280">50</text>
            <text x="50" y="119" textAnchor="end" fontSize="10" fill="#6b7280">100</text>
            <text x="50" y="52" textAnchor="end" fontSize="10" fill="#6b7280">150</text>
            <line x1="52" y1="183" x2="56" y2="183" stroke="#374151" strokeWidth="1"/>
            <line x1="52" y1="115" x2="56" y2="115" stroke="#374151" strokeWidth="1"/>
            <line x1="52" y1="48" x2="56" y2="48" stroke="#374151" strokeWidth="1"/>

            {/* Barras. base y=250. altura = PE*1.35 */}
            {/* Propano PE -42 -> tratado como ~0 visual (gás); mostramos barra mínima */}
            <rect x="80" y="246" width="48" height="4" fill="#9ca3af"/>
            <text x="104" y="240" textAnchor="middle" fontSize="9" fill="#6b7280">−42</text>
            <text x="104" y="265" textAnchor="middle" fontSize="9.5" fill="#374151">alcano</text>
            <text x="104" y="277" textAnchor="middle" fontSize="8" fill="#6b7280">propano</text>

            {/* Éter dimetílico PE -24 -> visual mínimo */}
            <rect x="150" y="244" width="48" height="6" fill="#93c5fd"/>
            <text x="174" y="238" textAnchor="middle" fontSize="9" fill="#6b7280">−24</text>
            <text x="174" y="265" textAnchor="middle" fontSize="9.5" fill="#374151">éter</text>
            <text x="174" y="277" textAnchor="middle" fontSize="8" fill="#6b7280">dimetílico</text>

            {/* Propanal (aldeído) PE 49 -> h=66 */}
            <rect x="220" y="184" width="48" height="66" fill="#f59e0b"/>
            <text x="244" y="178" textAnchor="middle" fontSize="9" fill="#92400e">49</text>
            <text x="244" y="265" textAnchor="middle" fontSize="9.5" fill="#374151">aldeído</text>
            <text x="244" y="277" textAnchor="middle" fontSize="8" fill="#6b7280">propanal</text>

            {/* Propan-1-ol (álcool) PE 97 -> h=131 */}
            <rect x="290" y="119" width="48" height="131" fill="#059669"/>
            <text x="314" y="113" textAnchor="middle" fontSize="9" fill="#065f46">97</text>
            <text x="314" y="265" textAnchor="middle" fontSize="9.5" fill="#374151">álcool</text>
            <text x="314" y="277" textAnchor="middle" fontSize="8" fill="#6b7280">propan-1-ol</text>

            {/* Ácido propanoico PE 141 -> h=190 */}
            <rect x="360" y="60" width="48" height="190" fill="#dc2626"/>
            <text x="384" y="54" textAnchor="middle" fontSize="9" fill="#991b1b">141</text>
            <text x="384" y="265" textAnchor="middle" fontSize="9.5" fill="#374151">ácido</text>
            <text x="384" y="277" textAnchor="middle" fontSize="8" fill="#6b7280">propanoico</text>

            {/* indicação de salto pelas ligações de H */}
            <text x="350" y="100" textAnchor="middle" fontSize="9" fill="#5b21b6">ligações de H ↑</text>
          </svg>
          <figcaption>
            Mesmo nº de carbonos, funções diferentes: o PE salta nos álcoois e ácidos, que fazem ligações de
            hidrogênio. Ordem: alcano {"<"} éter {"<"} aldeído {"<"} álcool {"<"} ácido carboxílico.
          </figcaption>
        </figure>
        <div className="lesson-highlight">
          <p>
            Comparação direta — mesma fórmula C₂H₆O: o <strong>etanol</strong> (CH₃CH₂OH, faz ligação de H)
            ferve a <strong>78 °C</strong>, enquanto o <strong>éter dimetílico</strong> (CH₃OCH₃, só
            dipolo-dipolo) ferve a <strong>−24 °C</strong>. Mesma massa, PE radicalmente diferente — tudo por
            causa do grupo –OH.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dissolver</span>
        <h2>5. Solubilidade: "Semelhante Dissolve Semelhante"</h2>
        <p>
          A regra de ouro da solubilidade: <strong>polar dissolve polar</strong> e <strong>apolar dissolve
          apolar</strong>. A água é um solvente <strong>polar</strong> (faz ligações de hidrogênio); a
          gasolina e o óleo são <strong>apolares</strong>. Numa molécula orgânica disputam duas regiões:
        </p>
        <ul>
          <li>
            A <strong>cadeia carbônica</strong> (parte <strong>apolar / hidrofóbica</strong>): "repele" a
            água. Quanto maior, mais insolúvel em água.
          </li>
          <li>
            O <strong>grupo funcional polar</strong> (–OH, –COOH, –NH₂; parte <strong>hidrofílica</strong>):
            interage com a água e favorece a solubilidade.
          </li>
        </ul>
        <p>
          Vence a parte predominante. Se a parte polar é grande em relação à cadeia (poucos carbonos), o
          composto é solúvel em água; se a cadeia é longa, ela "ganha" e o composto fica insolúvel. Por isso
          os primeiros álcoois (metanol, etanol, propanol) são totalmente solúveis em água, mas, a partir de
          ~5-6 carbonos, a solubilidade cai drasticamente:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Álcool</th><th>Nº de C</th><th>Solubilidade em água (g/100 g)</th><th>Comportamento</th></tr>
            </thead>
            <tbody>
              <tr><td>Metanol</td><td>1</td><td>∞ (miscível)</td><td>Totalmente solúvel</td></tr>
              <tr><td>Etanol</td><td>2</td><td>∞ (miscível)</td><td>Totalmente solúvel</td></tr>
              <tr><td>Propan-1-ol</td><td>3</td><td>∞ (miscível)</td><td>Totalmente solúvel</td></tr>
              <tr><td>Butan-1-ol</td><td>4</td><td>≈ 9</td><td>Parcialmente solúvel</td></tr>
              <tr><td>Pentan-1-ol</td><td>5</td><td>≈ 2,7</td><td>Pouco solúvel</td></tr>
              <tr><td>Decan-1-ol</td><td>10</td><td>{"< 0,1"}</td><td>Praticamente insolúvel</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>O detergente é o melhor exemplo:</strong> sua molécula tem uma longa cauda apolar (que
            dissolve a gordura) e uma cabeça polar/iônica (que interage com a água). Ele faz a "ponte" entre
            o óleo e a água, permitindo a limpeza.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Densidade</span>
        <h2>6. Densidade dos Compostos Orgânicos</h2>
        <p>
          A <strong>densidade</strong> (<M>{"d = m/V"}</M>) da maioria dos compostos orgânicos é{" "}
          <strong>menor que a da água</strong> (1,0 g/cm³). Por isso óleo, gasolina e álcool flutuam ou
          sobrenadam sobre a água quando imiscíveis — pense numa mancha de óleo formando uma camada por cima
          da água. Há exceções importantes, principalmente os <strong>compostos halogenados</strong> (com
          Cl, Br, I), que costumam ser <strong>mais densos</strong> que a água por causa da grande massa dos
          halogênios.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Composto</th><th>Densidade (g/cm³)</th><th>Em relação à água</th></tr>
            </thead>
            <tbody>
              <tr><td>Gasolina (mistura de alcanos)</td><td>≈ 0,70</td><td>Menos densa (flutua)</td></tr>
              <tr><td>Etanol</td><td>0,79</td><td>Menos densa</td></tr>
              <tr><td>Óleo de cozinha</td><td>≈ 0,92</td><td>Menos densa (flutua)</td></tr>
              <tr><td>Água</td><td>1,00</td><td>Referência</td></tr>
              <tr><td>Clorofórmio (CHCl₃)</td><td>1,49</td><td>Mais densa (afunda)</td></tr>
              <tr><td>Tetracloreto de carbono (CCl₄)</td><td>1,59</td><td>Mais densa (afunda)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>7. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>💧</span>
            <h3>Forças</h3>
            <p>Ligação de H {">"} dipolo-dipolo {">"} London — definem PF, PE e solubilidade.</p>
          </div>
          <div className="math-card">
            <span>📏</span>
            <h3>Tamanho da cadeia</h3>
            <p>↑ carbonos → ↑ London → ↑ PF e PE. Alcanos: 1-4 C gases, 5-17 líquidos, ≥18 sólidos.</p>
          </div>
          <div className="math-card">
            <span>🌿</span>
            <h3>Ramificação</h3>
            <p>Mais ramificada → menor área de contato → <strong>menor PE</strong>.</p>
          </div>
          <div className="math-card">
            <span>🔬</span>
            <h3>Função</h3>
            <p>alcano {"<"} éter {"<"} aldeído/cetona {"<"} álcool {"<"} ácido (mesma massa).</p>
          </div>
          <div className="math-card">
            <span>🔄</span>
            <h3>Solubilidade</h3>
            <p>Semelhante dissolve semelhante. Cadeia longa apolar → insolúvel em água.</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Densidade</h3>
            <p>Maioria menos densa que a água (flutua); halogenados são mais densos.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Estado físico dos alcanos"
          statement={<p>A 25 °C e 1 atm, os alcanos de 1 a 4 carbonos (metano a butano) encontram-se no estado:</p>}
          options={[
            { letter: "a", text: "Gasoso", correct: true },
            { letter: "b", text: "Líquido" },
            { letter: "c", text: "Sólido" },
            { letter: "d", text: "Plasma" },
          ]}
          resolution={<p>Como possuem poucos carbonos, as forças de London são fracas e o PE fica abaixo da temperatura ambiente. Por isso CH₄, C₂H₆, C₃H₈ e C₄H₁₀ são gases (o butano é justamente o gás de cozinha/isqueiro). De 5 a 17 C são líquidos e a partir de 18 C, sólidos.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Força intermolecular do etanol"
          statement={<p>O etanol (CH₃CH₂OH) apresenta ponto de ebulição relativamente alto e é solúvel em água porque possui:</p>}
          options={[
            { letter: "a", text: "O grupo –OH, que faz ligações de hidrogênio", correct: true },
            { letter: "b", text: "Apenas forças de London" },
            { letter: "c", text: "Ligações iônicas" },
            { letter: "d", text: "Uma cadeia muito longa e apolar" },
          ]}
          resolution={<p>O grupo –OH possui H ligado a oxigênio, permitindo ligações de hidrogênio — força intermolecular mais intensa. Isso eleva o PE (78 °C) e, por interagir com a água (também faz ligação de H), torna o etanol totalmente solúvel.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Comparando PE por função"
          statement={<p>Considere três compostos de massas molares semelhantes: um alcano, um éter e um álcool. A ordem CRESCENTE de pontos de ebulição é:</p>}
          options={[
            { letter: "a", text: "alcano < éter < álcool", correct: true },
            { letter: "b", text: "álcool < éter < alcano" },
            { letter: "c", text: "éter < alcano < álcool" },
            { letter: "d", text: "Todos têm o mesmo PE" },
          ]}
          resolution={<p>O alcano só tem London (PE menor); o éter tem dipolo-dipolo (PE intermediário); o álcool faz ligações de hidrogênio (PE maior). Logo, alcano {"<"} éter {"<"} álcool. Quanto mais intensa a força intermolecular, maior a energia necessária para ferver.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Efeito da ramificação"
          statement={<p>Entre os isômeros de fórmula C₅H₁₂, o n-pentano (reto), o isopentano (uma ramificação) e o neopentano (mais ramificado), o de MAIOR ponto de ebulição é:</p>}
          options={[
            { letter: "a", text: "n-pentano, pois a cadeia reta tem maior área de contato", correct: true },
            { letter: "b", text: "neopentano, por ser o mais compacto" },
            { letter: "c", text: "isopentano, por ter massa maior" },
            { letter: "d", text: "Todos têm o mesmo PE, pois têm a mesma fórmula" },
          ]}
          resolution={<p>Com a mesma fórmula molecular, vence a área de contato. O n-pentano (cadeia reta, alongada) soma mais forças de London e tem o maior PE (36 °C). Mais ramificações deixam a molécula compacta, reduzindo o contato e o PE (isopentano 28 °C; neopentano 9,5 °C).</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Solubilidade e tamanho da cadeia"
          statement={<p>O metanol é totalmente miscível em água, mas o decan-1-ol (10 carbonos) é praticamente insolúvel, embora ambos tenham o grupo –OH. A melhor explicação é:</p>}
          options={[
            { letter: "a", text: "No decanol a longa cadeia apolar predomina sobre o grupo –OH, dificultando a interação com a água", correct: true },
            { letter: "b", text: "O decanol não possui o grupo –OH" },
            { letter: "c", text: "O metanol é apolar e por isso se dissolve" },
            { letter: "d", text: "A água deixa de ser polar na presença do decanol" },
          ]}
          resolution={<p>Ambos têm –OH (parte hidrofílica), mas no decanol a cadeia de 10 carbonos é grande e apolar (hidrofóbica). Essa parte apolar predomina e não interage com a água, tornando o composto insolúvel. No metanol, a parte polar domina a molécula pequena, garantindo a miscibilidade.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Vazamento de petróleo no mar"
          statement={<p>Após um vazamento, o petróleo (mistura de hidrocarbonetos) forma uma mancha que se espalha SOBRE a superfície da água do mar, sem se misturar. Esse comportamento é explicado por duas propriedades dos hidrocarbonetos:</p>}
          options={[
            { letter: "a", text: "São apolares (não se misturam à água polar) e menos densos que a água (por isso flutuam)", correct: true },
            { letter: "b", text: "São polares e mais densos que a água" },
            { letter: "c", text: "São iônicos e reagem com a água" },
            { letter: "d", text: "Fazem ligações de hidrogênio com a água e afundam" },
          ]}
          resolution={<p>Os hidrocarbonetos são apolares: pelo princípio "semelhante dissolve semelhante", não se misturam à água, que é polar. Além disso, têm densidade menor que a da água (≈ 0,7–0,9 g/cm³), então a mancha flutua e se espalha na superfície. Essas duas propriedades juntas explicam o impacto ambiental e a dificuldade de remoção.</p>}
        />
      </section>
    </article>
  );
}
