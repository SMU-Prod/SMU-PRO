"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap30Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 30</span>
          <h1>Equilíbrio Iônico: Ka, Kb, Ostwald e Íon Comum</h1>
          <p>
            Por que o vinagre, mesmo concentrado, mal arde na pele, enquanto o ácido clorídrico do
            laboratório corrói tudo? A resposta está no <strong>equilíbrio iônico</strong>: ácidos e
            bases fracos não se ionizam por completo — eles atingem um equilíbrio dinâmico entre
            moléculas intactas e íons. Neste capítulo medimos essa força com as constantes{" "}
            <M>{"K_a"}</M> e <M>{"K_b"}</M>, quantificamos o quanto ionizam pelo grau de ionização{" "}
            <M>{"\\alpha"}</M>, descobrimos pela Lei de Ostwald por que diluir aumenta a ionização e
            entendemos como o efeito do íon comum freia o processo — a base das soluções-tampão.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que é Equilíbrio Iônico?</h2>
        <p>
          <strong>Equilíbrio iônico</strong> é o equilíbrio químico estabelecido na{" "}
          <strong>ionização (ou dissociação) de eletrólitos fracos</strong> — ácidos e bases que se
          ionizam apenas <em>parcialmente</em> em água. Diferentemente de um ácido forte como o HCl,
          que ioniza praticamente 100%, um ácido fraco como o HF deixa a maior parte de suas moléculas
          intactas, coexistindo em equilíbrio dinâmico com seus íons.
        </p>
        <div className="lesson-highlight">
          <p>
            <strong>Ácido forte (ionização total):</strong>{" "}
            <M>{"\\text{HCl} \\rightarrow \\text{H}^{+} + \\text{Cl}^{-}"}</M> (seta única — não há equilíbrio).
          </p>
          <p>
            <strong>Ácido fraco (ionização parcial):</strong>{" "}
            <M>{"\\text{HF} \\rightleftharpoons \\text{H}^{+} + \\text{F}^{-}"}</M> (dupla seta — equilíbrio).
          </p>
        </div>
        <p>
          A figura abaixo mostra, no nível das partículas, a diferença entre os dois casos partindo de
          quantidades iguais de moléculas dissolvidas:
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 250" width="480" height="250" aria-label="Ionização total de ácido forte versus parcial de ácido fraco">
            {/* Béquer 1 — ácido forte */}
            <text x="120" y="26" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#b91c1c">Ácido FORTE (HCl)</text>
            <path d="M40,46 L40,210 Q40,220 50,220 L190,220 Q200,220 200,210 L200,46" fill="#fef2f2" stroke="#374151" strokeWidth="2"/>
            {/* íons soltos (ionização ~100%) */}
            <circle cx="70" cy="90" r="7" fill="#dc2626"/><text x="70" y="94" textAnchor="middle" fontSize="8" fill="#fff">+</text>
            <circle cx="100" cy="120" r="7" fill="#2563eb"/><text x="100" y="124" textAnchor="middle" fontSize="8" fill="#fff">−</text>
            <circle cx="140" cy="95" r="7" fill="#dc2626"/><text x="140" y="99" textAnchor="middle" fontSize="8" fill="#fff">+</text>
            <circle cx="165" cy="140" r="7" fill="#2563eb"/><text x="165" y="144" textAnchor="middle" fontSize="8" fill="#fff">−</text>
            <circle cx="80" cy="170" r="7" fill="#dc2626"/><text x="80" y="174" textAnchor="middle" fontSize="8" fill="#fff">+</text>
            <circle cx="120" cy="185" r="7" fill="#2563eb"/><text x="120" y="189" textAnchor="middle" fontSize="8" fill="#fff">−</text>
            <circle cx="155" cy="185" r="7" fill="#dc2626"/><text x="155" y="189" textAnchor="middle" fontSize="8" fill="#fff">+</text>
            <circle cx="110" cy="150" r="7" fill="#2563eb"/><text x="110" y="154" textAnchor="middle" fontSize="8" fill="#fff">−</text>
            <text x="120" y="240" textAnchor="middle" fontSize="10" fill="#374151">quase só íons (α ≈ 1)</text>

            {/* Béquer 2 — ácido fraco */}
            <text x="360" y="26" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#065f46">Ácido FRACO (HF)</text>
            <path d="M280,46 L280,210 Q280,220 290,220 L430,220 Q440,220 440,210 L440,46" fill="#ecfdf5" stroke="#374151" strokeWidth="2"/>
            {/* maioria moléculas intactas */}
            <rect x="302" y="84" width="22" height="12" rx="6" fill="#059669"/><text x="313" y="93" textAnchor="middle" fontSize="7" fill="#fff">HF</text>
            <rect x="350" y="100" width="22" height="12" rx="6" fill="#059669"/><text x="361" y="109" textAnchor="middle" fontSize="7" fill="#fff">HF</text>
            <rect x="392" y="86" width="22" height="12" rx="6" fill="#059669"/><text x="403" y="95" textAnchor="middle" fontSize="7" fill="#fff">HF</text>
            <rect x="312" y="140" width="22" height="12" rx="6" fill="#059669"/><text x="323" y="149" textAnchor="middle" fontSize="7" fill="#fff">HF</text>
            <rect x="372" y="150" width="22" height="12" rx="6" fill="#059669"/><text x="383" y="159" textAnchor="middle" fontSize="7" fill="#fff">HF</text>
            <rect x="340" y="184" width="22" height="12" rx="6" fill="#059669"/><text x="351" y="193" textAnchor="middle" fontSize="7" fill="#fff">HF</text>
            {/* poucos íons */}
            <circle cx="400" cy="150" r="7" fill="#dc2626"/><text x="400" y="154" textAnchor="middle" fontSize="8" fill="#fff">+</text>
            <circle cx="412" cy="180" r="7" fill="#2563eb"/><text x="412" y="184" textAnchor="middle" fontSize="8" fill="#fff">−</text>
            <text x="360" y="240" textAnchor="middle" fontSize="10" fill="#374151">muitas moléculas, poucos íons (α pequeno)</text>
          </svg>
          <figcaption>
            Partindo da mesma quantidade dissolvida: o ácido forte gera quase só íons; o ácido fraco
            mantém a maioria das moléculas intactas, com poucos íons em equilíbrio.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Constantes</span>
        <h2>2. Constante de Ionização (Ka e Kb)</h2>
        <p>
          Como a ionização de um eletrólito fraco é um equilíbrio, ela possui uma constante de equilíbrio
          própria — a <strong>constante de ionização</strong>. Para ácidos, chamamos de <M>{"K_a"}</M>;
          para bases, <M>{"K_b"}</M>. Lembrando que a água (solvente em excesso) não entra na expressão.
        </p>
        <div className="math-block">
          <h3>Para um ácido fraco HA</h3>
          <p><M block>{"\\text{HA} \\rightleftharpoons \\text{H}^{+} + \\text{A}^{-} \\qquad K_a = \\dfrac{[\\text{H}^{+}]\\,[\\text{A}^{-}]}{[\\text{HA}]}"}</M></p>
        </div>
        <div className="math-block">
          <h3>Para uma base fraca BOH</h3>
          <p><M block>{"\\text{BOH} \\rightleftharpoons \\text{B}^{+} + \\text{OH}^{-} \\qquad K_b = \\dfrac{[\\text{B}^{+}]\\,[\\text{OH}^{-}]}{[\\text{BOH}]}"}</M></p>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Regra de leitura:</strong> quanto <strong>maior</strong> o <M>{"K_a"}</M> (ou{" "}
            <M>{"K_b"}</M>), <strong>mais forte</strong> é o ácido (ou base) — mais ionizado no
            equilíbrio. O <M>{"K_a"}</M> depende só da substância e da temperatura, <em>não</em> da
            concentração.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ranking de força</span>
        <h2>3. Comparando a Força dos Ácidos pelo Ka</h2>
        <p>
          Como o <M>{"K_a"}</M> mede a tendência de ionizar, ele ordena os ácidos por força. Veja
          valores típicos a 25 °C (quanto maior o <M>{"K_a"}</M>, mais forte e mais à direita o
          equilíbrio):
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Ácido</th><th>Fórmula</th><th><M>{"K_a"}</M> (25 °C)</th><th>Força relativa</th></tr>
            </thead>
            <tbody>
              <tr><td>Sulfuroso (1ª ioniz.)</td><td><M>{"\\text{H}_2\\text{SO}_3"}</M></td><td><M>{"1{,}5 \\times 10^{-2}"}</M></td><td>Moderado</td></tr>
              <tr><td>Fluorídrico</td><td><M>{"\\text{HF}"}</M></td><td><M>{"6{,}8 \\times 10^{-4}"}</M></td><td>Fraco</td></tr>
              <tr><td>Fórmico</td><td><M>{"\\text{HCOOH}"}</M></td><td><M>{"1{,}8 \\times 10^{-4}"}</M></td><td>Fraco</td></tr>
              <tr><td>Acético</td><td><M>{"\\text{CH}_3\\text{COOH}"}</M></td><td><M>{"1{,}8 \\times 10^{-5}"}</M></td><td>Fraco</td></tr>
              <tr><td>Carbônico (1ª ioniz.)</td><td><M>{"\\text{H}_2\\text{CO}_3"}</M></td><td><M>{"4{,}3 \\times 10^{-7}"}</M></td><td>Muito fraco</td></tr>
              <tr><td>Cianídrico</td><td><M>{"\\text{HCN}"}</M></td><td><M>{"4{,}9 \\times 10^{-10}"}</M></td><td>Fraquíssimo</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          O gráfico de barras (escala log de <M>{"\\text{p}K_a = -\\log K_a"}</M>) torna a comparação
          visual: barras mais curtas (<M>{"\\text{p}K_a"}</M> menor) indicam ácidos mais fortes.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 270" width="480" height="270" aria-label="Gráfico de barras de pKa de vários ácidos">
            {/* Eixos */}
            <line x1="70" y1="30" x2="70" y2="230" stroke="#374151" strokeWidth="2"/>
            <line x1="70" y1="230" x2="460" y2="230" stroke="#374151" strokeWidth="2"/>
            <text x="265" y="258" textAnchor="middle" fontSize="12" fill="#374151">pKa (menor = ácido mais forte →)</text>
            <text x="22" y="130" textAnchor="middle" fontSize="11" fill="#374151" transform="rotate(-90,22,130)">Ácido</text>
            {/* escala 0..10 (1 unidade = 39px) */}
            <line x1="70" y1="230" x2="70" y2="234" stroke="#374151"/><text x="70" y="246" textAnchor="middle" fontSize="9" fill="#6b7280">0</text>
            <line x1="265" y1="230" x2="265" y2="234" stroke="#374151"/><text x="265" y="246" textAnchor="middle" fontSize="9" fill="#6b7280">5</text>
            <line x1="460" y1="230" x2="460" y2="234" stroke="#374151"/><text x="460" y="246" textAnchor="middle" fontSize="9" fill="#6b7280">10</text>
            {/* Barras: comprimento = pKa * 39 px */}
            {/* H2SO3 pKa 1,82 */}
            <rect x="70" y="40" width="71" height="20" fill="#dc2626"/><text x="66" y="55" textAnchor="end" fontSize="10" fill="#374151">H₂SO₃</text><text x="148" y="55" fontSize="9" fill="#6b7280">1,8</text>
            {/* HF pKa 3,17 */}
            <rect x="70" y="70" width="124" height="20" fill="#f59e0b"/><text x="66" y="85" textAnchor="end" fontSize="10" fill="#374151">HF</text><text x="200" y="85" fontSize="9" fill="#6b7280">3,2</text>
            {/* HCOOH pKa 3,74 */}
            <rect x="70" y="100" width="146" height="20" fill="#f59e0b"/><text x="66" y="115" textAnchor="end" fontSize="10" fill="#374151">HCOOH</text><text x="222" y="115" fontSize="9" fill="#6b7280">3,7</text>
            {/* CH3COOH pKa 4,74 */}
            <rect x="70" y="130" width="185" height="20" fill="#059669"/><text x="66" y="145" textAnchor="end" fontSize="10" fill="#374151">CH₃COOH</text><text x="261" y="145" fontSize="9" fill="#6b7280">4,7</text>
            {/* H2CO3 pKa 6,37 */}
            <rect x="70" y="160" width="248" height="20" fill="#059669"/><text x="66" y="175" textAnchor="end" fontSize="10" fill="#374151">H₂CO₃</text><text x="324" y="175" fontSize="9" fill="#6b7280">6,4</text>
            {/* HCN pKa 9,31 */}
            <rect x="70" y="190" width="363" height="20" fill="#7c3aed"/><text x="66" y="205" textAnchor="end" fontSize="10" fill="#374151">HCN</text><text x="439" y="205" fontSize="9" fill="#6b7280">9,3</text>
          </svg>
          <figcaption>
            pKa = −log Ka: barras mais curtas correspondem a ácidos mais fortes. O HCN (pKa ≈ 9,3) é o
            mais fraco da lista; o H₂SO₃ (pKa ≈ 1,8), o mais forte.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Quanto ioniza</span>
        <h2>4. Grau de Ionização (α)</h2>
        <p>
          O <strong>grau de ionização</strong> <M>{"\\alpha"}</M> indica a <strong>fração</strong> das
          moléculas dissolvidas que efetivamente se ionizou:
        </p>
        <div className="math-block">
          <h3>Definição</h3>
          <p><M block>{"\\alpha = \\dfrac{\\text{n}^\\circ\\ \\text{de moléculas ionizadas}}{\\text{n}^\\circ\\ \\text{de moléculas dissolvidas}}"}</M></p>
          <p>
            Varia de 0 a 1 (ou 0% a 100%). Convenção usual: <M>{"\\alpha > 50\\%"}</M> → forte;{" "}
            <M>{"5\\% < \\alpha < 50\\%"}</M> → moderado; <M>{"\\alpha < 5\\%"}</M> → fraco.
          </p>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Exemplo:</strong> dissolvendo 200 moléculas de um ácido e verificando que 10 se
            ionizaram: <M>{"\\alpha = \\dfrac{10}{200} = 0{,}05 = 5\\%"}</M>. É um ácido fraco.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diluição</span>
        <h2>5. Lei da Diluição de Ostwald</h2>
        <p>
          Wilhelm Ostwald relacionou matematicamente a constante <M>{"K_a"}</M>, a concentração em
          mol/L (<M>{"M"}</M>) e o grau de ionização (<M>{"\\alpha"}</M>). Para o equilíbrio{" "}
          <M>{"\\text{HA} \\rightleftharpoons \\text{H}^{+} + \\text{A}^{-}"}</M>, partindo de
          concentração <M>{"M"}</M>, no equilíbrio temos{" "}
          <M>{"[\\text{H}^{+}] = [\\text{A}^{-}] = \\alpha M"}</M> e{" "}
          <M>{"[\\text{HA}] = M(1-\\alpha)"}</M>. Substituindo em <M>{"K_a"}</M>:
        </p>
        <div className="math-block">
          <h3>Expressão de Ostwald</h3>
          <p><M block>{"K_a = \\dfrac{(\\alpha M)(\\alpha M)}{M(1-\\alpha)} = \\dfrac{\\alpha^2 M}{1 - \\alpha}"}</M></p>
          <p>
            Para eletrólitos fracos (<M>{"\\alpha \\ll 1"}</M>), o denominador{" "}
            <M>{"(1-\\alpha) \\approx 1"}</M>, e a expressão simplifica para:
          </p>
          <p><M block>{"K_a \\approx \\alpha^2 M \\quad\\Rightarrow\\quad \\alpha \\approx \\sqrt{\\dfrac{K_a}{M}}"}</M></p>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Consequência (a "diluição" do nome):</strong> como <M>{"K_a"}</M> é constante a uma
            dada temperatura e <M>{"\\alpha \\approx \\sqrt{K_a/M}"}</M>, ao <strong>diluir</strong>{" "}
            (reduzir <M>{"M"}</M>) o grau de ionização <M>{"\\alpha"}</M> <strong>aumenta</strong>.
            Quanto mais diluído, mais ionizado.
          </p>
        </div>
        <p>
          O gráfico abaixo mostra <M>{"\\alpha"}</M> em função da concentração: ao caminhar para a
          esquerda (mais diluído), <M>{"\\alpha"}</M> cresce, tendendo a 1 na diluição infinita.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 260" width="480" height="260" aria-label="Grau de ionização em função da diluição segundo Ostwald">
            {/* Eixos */}
            <line x1="56" y1="220" x2="450" y2="220" stroke="#374151" strokeWidth="2"/>
            <line x1="56" y1="24" x2="56" y2="220" stroke="#374151" strokeWidth="2"/>
            <text x="252" y="250" textAnchor="middle" fontSize="12" fill="#374151">← mais diluído     Concentração M (mol/L)     mais concentrado →</text>
            <text x="20" y="125" textAnchor="middle" fontSize="12" fill="#374151" transform="rotate(-90,20,125)">Grau de ionização α</text>
            {/* marca α=1 */}
            <line x1="52" y1="44" x2="56" y2="44" stroke="#374151"/><text x="48" y="48" textAnchor="end" fontSize="10" fill="#6b7280">1</text>
            <line x1="56" y1="44" x2="450" y2="44" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4,4"/>
            <text x="430" y="58" textAnchor="end" fontSize="9" fill="#6b7280">α → 1 (diluição infinita)</text>
            {/* curva: alta à esquerda (diluído), baixa à direita (concentrado) */}
            <path d="M64,58 C120,90 150,150 230,180 C310,205 380,212 444,215" fill="none" stroke="#2563eb" strokeWidth="3"/>
            {/* pontos ilustrativos */}
            <circle cx="100" cy="78" r="4" fill="#059669"/><text x="106" y="74" fontSize="10" fill="#047857">diluído → α alto</text>
            <circle cx="400" cy="213" r="4" fill="#dc2626"/><text x="394" y="206" textAnchor="end" fontSize="10" fill="#b91c1c">concentrado → α baixo</text>
            {/* seta indicando diluir */}
            <line x1="300" y1="120" x2="140" y2="120" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#ost1)"/>
            <text x="220" y="112" textAnchor="middle" fontSize="10" fill="#5b21b6">diluir aumenta α</text>
            <defs>
              <marker id="ost1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/></marker>
            </defs>
          </svg>
          <figcaption>
            Lei de Ostwald: à medida que a solução é diluída (M diminui), o grau de ionização α aumenta,
            tendendo a 1 na diluição infinita. Atenção: a quantidade de íons por litro, ainda assim, cai.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Le Chatelier iônico</span>
        <h2>6. Efeito do Íon Comum</h2>
        <p>
          O <strong>efeito do íon comum</strong> é uma aplicação direta do Princípio de Le Chatelier:
          ao adicionar à solução um íon que <em>já participa</em> do equilíbrio de ionização, o
          equilíbrio se desloca no <strong>sentido de consumir</strong> esse íon — ou seja, no sentido
          inverso da ionização. Resultado: o grau de ionização <M>{"\\alpha"}</M> do eletrólito fraco{" "}
          <strong>diminui</strong>.
        </p>
        <div className="lesson-highlight">
          <p>
            <strong>Exemplo clássico:</strong> em{" "}
            <M>{"\\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{H}^{+} + \\text{CH}_3\\text{COO}^{-}"}</M>,
            ao adicionar <strong>acetato de sódio</strong> (NaCH₃COO, fonte de{" "}
            <M>{"\\text{CH}_3\\text{COO}^{-}"}</M>), o aumento de{" "}
            <M>{"[\\text{CH}_3\\text{COO}^{-}]"}</M> empurra o equilíbrio para a <strong>esquerda</strong>,
            reduzindo a ionização do ácido e diminuindo <M>{"[\\text{H}^{+}]"}</M> — ou seja, o pH sobe.
          </p>
        </div>
        <p>
          Note um detalhe importante: o <M>{"K_a"}</M> <strong>não muda</strong> (a temperatura é a
          mesma). O que muda é a posição do equilíbrio e o valor de <M>{"\\alpha"}</M>. Esse é
          exatamente o mecanismo que dá às <strong>soluções-tampão</strong> sua capacidade de resistir a
          variações de pH (próximo capítulo).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese rápida</span>
        <h2>7. Quadro-Resumo das Relações</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Conceito</th><th>Expressão / Ideia</th><th>Interpretação</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"K_a"}</M> (ou <M>{"K_b"}</M>)</td><td><M>{"K_a = \\frac{[\\text{H}^+][\\text{A}^-]}{[\\text{HA}]}"}</M></td><td>Maior K → ácido/base mais forte. Depende só de T.</td></tr>
              <tr><td>Grau de ionização <M>{"\\alpha"}</M></td><td><M>{"\\alpha = \\frac{\\text{ionizadas}}{\\text{dissolvidas}}"}</M></td><td>Fração ionizada (0 a 1). Depende de T e de M.</td></tr>
              <tr><td>Lei de Ostwald</td><td><M>{"K_a = \\frac{\\alpha^2 M}{1-\\alpha}"}</M></td><td>Liga K, α e M. Diluir (↓M) → ↑α.</td></tr>
              <tr><td>Aproximação (fraco)</td><td><M>{"K_a \\approx \\alpha^2 M"}</M></td><td>Válida quando <M>{"\\alpha < 5\\%"}</M>.</td></tr>
              <tr><td>Efeito do íon comum</td><td>Le Chatelier</td><td>Adicionar íon comum → ↓α (não muda K).</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>⚗️</span>
            <h3>Equilíbrio iônico</h3>
            <p>Ionização parcial de ácidos/bases fracos: <M>{"\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-"}</M>.</p>
          </div>
          <div className="math-card">
            <span>🧮</span>
            <h3>Ka / Kb</h3>
            <p><M>{"K_a = \\frac{[\\text{H}^+][\\text{A}^-]}{[\\text{HA}]}"}</M>. Maior K → mais forte.</p>
          </div>
          <div className="math-card">
            <span>📊</span>
            <h3>Grau α</h3>
            <p>Fração ionizada (0 a 1). <M>{"\\alpha \\approx \\sqrt{K_a/M}"}</M>.</p>
          </div>
          <div className="math-card">
            <span>💧</span>
            <h3>Ostwald</h3>
            <p><M>{"K_a = \\frac{\\alpha^2 M}{1-\\alpha}"}</M>. Diluir → α ↑.</p>
          </div>
          <div className="math-card">
            <span>🔁</span>
            <h3>Íon comum</h3>
            <p>Reduz α (Le Chatelier). K não muda.</p>
          </div>
          <div className="math-card">
            <span>🩺</span>
            <h3>Aplicação</h3>
            <p>Base das soluções-tampão e do controle de pH.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Força e Ka"
          statement={<p>Comparando dois ácidos a 25 °C, aquele que possui a maior constante de ionização (<M>{"K_a"}</M>) é classificado como:</p>}
          options={[
            { letter: "a", text: "O mais forte (mais ionizado no equilíbrio)", correct: true },
            { letter: "b", text: "O mais fraco" },
            { letter: "c", text: "O menos solúvel" },
            { letter: "d", text: "O de maior massa molar" },
          ]}
          resolution={<p>Um <M>{"K_a"}</M> maior significa maior concentração de íons em relação às moléculas não ionizadas no equilíbrio — ou seja, maior ionização. Logo, maior <M>{"K_a"}</M> = ácido mais forte. Por exemplo, HF (<M>{"K_a = 6{,}8 \\times 10^{-4}"}</M>) é mais forte que o acético (<M>{"1{,}8 \\times 10^{-5}"}</M>).</p>}
        />

        <Exercise
          level="Básico"
          title="2. Grau de ionização"
          statement={<p>Ao dissolver 250 moléculas de um ácido em água, verifica-se que apenas 5 se ionizam. O grau de ionização desse ácido é:</p>}
          options={[
            { letter: "a", text: "2% (0,02)", correct: true },
            { letter: "b", text: "5% (0,05)" },
            { letter: "c", text: "20% (0,20)" },
            { letter: "d", text: "50% (0,50)" },
          ]}
          resolution={<p><M>{"\\alpha = \\dfrac{5}{250} = 0{,}02 = 2\\%"}</M>. Como <M>{"\\alpha < 5\\%"}</M>, trata-se de um ácido fraco — a grande maioria das moléculas permanece não ionizada.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Lei de Ostwald (diluição)"
          statement={<p>De acordo com a Lei da Diluição de Ostwald, ao se diluir (adicionar água) a uma solução de ácido fraco mantida à mesma temperatura, o grau de ionização <M>{"\\alpha"}</M>:</p>}
          options={[
            { letter: "a", text: "Aumenta, pois Ka é constante e α ≈ √(Ka/M)", correct: true },
            { letter: "b", text: "Diminui, porque há menos íons por litro" },
            { letter: "c", text: "Permanece constante, igual ao Ka" },
            { letter: "d", text: "Vai a zero, pois a água dilui os íons" },
          ]}
          resolution={<p>A uma temperatura fixa, <M>{"K_a"}</M> é constante. Da aproximação <M>{"K_a \\approx \\alpha^2 M"}</M>, isolamos <M>{"\\alpha \\approx \\sqrt{K_a/M}"}</M>. Ao diluir, <M>{"M"}</M> diminui, então <M>{"\\alpha"}</M> deve aumentar para manter o produto constante. (Observe que a concentração de íons por litro ainda assim cai — o que aumenta é a <em>fração</em> ionizada.)</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Efeito do íon comum"
          statement={<p>A uma solução em equilíbrio de ácido acético (<M>{"\\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{H}^{+} + \\text{CH}_3\\text{COO}^{-}"}</M>) adiciona-se acetato de sódio sólido (fonte de <M>{"\\text{CH}_3\\text{COO}^{-}"}</M>). Sobre o sistema, é correto afirmar que:</p>}
          options={[
            { letter: "a", text: "O equilíbrio desloca-se à esquerda, diminuindo α e a [H⁺]; o Ka não muda.", correct: true },
            { letter: "b", text: "O equilíbrio desloca-se à direita, aumentando a ionização do ácido." },
            { letter: "c", text: "O valor de Ka aumenta junto com o acetato adicionado." },
            { letter: "d", text: "Nada se altera, pois o acetato não participa do equilíbrio." },
          ]}
          resolution={<p>O íon <M>{"\\text{CH}_3\\text{COO}^{-}"}</M> é comum ao equilíbrio. Por Le Chatelier, o aumento de sua concentração desloca o equilíbrio para a <strong>esquerda</strong> (sentido de consumir o íon), reduzindo a ionização (<M>{"\\alpha"}</M> cai) e a <M>{"[\\text{H}^{+}]"}</M> (o pH sobe). O <M>{"K_a"}</M>, por depender apenas da temperatura, permanece inalterado.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Cálculo com Ostwald"
          statement={<p>Uma solução de ácido fórmico (HCOOH) a 0,40 mol/L apresenta grau de ionização α = 2% (0,02). Usando a aproximação <M>{"K_a \\approx \\alpha^2 M"}</M>, o valor de <M>{"K_a"}</M> é aproximadamente:</p>}
          options={[
            { letter: "a", text: "1,6 × 10⁻⁴", correct: true },
            { letter: "b", text: "8,0 × 10⁻³" },
            { letter: "c", text: "4,0 × 10⁻⁴" },
            { letter: "d", text: "1,6 × 10⁻²" },
          ]}
          resolution={<p><M block>{"K_a \\approx \\alpha^2 \\cdot M = (0{,}02)^2 \\times 0{,}40 = (4 \\times 10^{-4}) \\times 0{,}40 = 1{,}6 \\times 10^{-4}"}</M> A aproximação é válida porque <M>{"\\alpha = 2\\% < 5\\%"}</M>. O resultado é coerente com o <M>{"K_a"}</M> tabelado do ácido fórmico (<M>{"1{,}8 \\times 10^{-4}"}</M>).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Por que o vinagre é pouco corrosivo"
          statement={<p>O vinagre contém ácido acético e, mesmo concentrado, é usado no preparo de alimentos sem causar queimaduras graves — ao contrário do ácido clorídrico (HCl) do laboratório, que é fortemente corrosivo. Considerando o equilíbrio iônico, a explicação para o ácido acético ser muito menos agressivo é que ele:</p>}
          options={[
            { letter: "a", text: "Tem Ka pequeno (~1,8 × 10⁻⁵) e baixo grau de ionização, liberando pouca quantidade de íons H⁺ na solução.", correct: true },
            { letter: "b", text: "Possui Ka altíssimo e se ioniza totalmente, como o HCl." },
            { letter: "c", text: "Não contém nenhum hidrogênio capaz de se ionizar." },
            { letter: "d", text: "É, na verdade, uma base que neutraliza a própria acidez." },
          ]}
          resolution={<p>O ácido acético é um <strong>ácido fraco</strong>: seu <M>{"K_a \\approx 1{,}8 \\times 10^{-5}"}</M> é pequeno, de modo que o equilíbrio <M>{"\\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{H}^{+} + \\text{CH}_3\\text{COO}^{-}"}</M> fica deslocado para as <strong>moléculas não ionizadas</strong>. Ele libera pouca <M>{"[\\text{H}^{+}]"}</M>, ao contrário do HCl, que ioniza praticamente 100% (<M>{"\\alpha \\approx 1"}</M>). Por isso o vinagre é seguro no uso culinário enquanto o HCl concentrado é corrosivo.</p>}
        />
      </section>
    </article>
  );
}
