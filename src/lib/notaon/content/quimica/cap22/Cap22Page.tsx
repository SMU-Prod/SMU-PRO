"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap22Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 22</span>
          <h1>Diluição, Mistura de Soluções e Titulação Ácido-Base</h1>
          <p>
            Quando dilui um suco concentrado, prepara um soro fisiológico ou verifica a acidez de um
            vinagre, você está aplicando três ferramentas quantitativas centrais da Química das soluções:
            a <strong>diluição</strong>, a <strong>mistura</strong> e a <strong>titulação</strong>. Todas
            partem de uma única ideia — controlar a <strong>quantidade de matéria de soluto</strong> dentro
            de um volume — e, neste capítulo, vamos transformá-la em cálculos exatos, gráficos e a técnica
            de laboratório mais usada para descobrir concentrações desconhecidas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Adicionando solvente</span>
        <h2>1. Diluição de Soluções</h2>
        <p>
          <strong>Diluir</strong> é acrescentar <strong>somente solvente</strong> (geralmente água) a uma
          solução. O volume total aumenta, mas a <strong>quantidade de matéria de soluto não muda</strong> —
          afinal, nenhum soluto foi adicionado nem retirado. Como a concentração é "soluto por volume",
          aumentar o volume com a mesma quantidade de soluto faz a concentração <strong>diminuir</strong>.
        </p>
        <p>
          O número de mols de soluto é o "invariante" da diluição. Antes:{" "}
          <M>{"n = C_i V_i"}</M>. Depois: <M>{"n = C_f V_f"}</M>. Como <M>{"n"}</M> é o mesmo, igualamos os
          dois lados e chegamos à equação da diluição.
        </p>
        <div className="math-block">
          <h3>Equação da diluição</h3>
          <p><M block>{"C_i \\cdot V_i = C_f \\cdot V_f"}</M></p>
          <p>
            Vale com qualquer unidade de concentração desde que <strong>i</strong> e <strong>f</strong>{" "}
            usem a mesma. Com molaridade: <M>{"M_i V_i = M_f V_f"}</M>.
          </p>
        </div>
        <p>
          A figura abaixo mostra o que acontece: a mesma quantidade de soluto (as bolinhas) espalha-se por
          um volume maior, ficando "menos amontoada" — a concentração cai pela metade quando o volume dobra.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 240" width="480" height="240" aria-label="Esquema de diluição: solução concentrada mais água formando solução diluída">
            {/* Béquer concentrado */}
            <path d="M40,70 L40,200 Q40,210 50,210 L120,210 Q130,210 130,200 L130,70" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="85" y="60" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">Concentrada</text>
            <text x="85" y="228" textAnchor="middle" fontSize="10" fill="#374151">V = 100 mL</text>
            {/* 8 solutos concentrados */}
            <circle cx="62" cy="120" r="5" fill="#dc2626"/>
            <circle cx="92" cy="115" r="5" fill="#dc2626"/>
            <circle cx="110" cy="140" r="5" fill="#dc2626"/>
            <circle cx="70" cy="155" r="5" fill="#dc2626"/>
            <circle cx="100" cy="170" r="5" fill="#dc2626"/>
            <circle cx="58" cy="185" r="5" fill="#dc2626"/>
            <circle cx="88" cy="190" r="5" fill="#dc2626"/>
            <circle cx="118" cy="180" r="5" fill="#dc2626"/>

            {/* Água sendo adicionada */}
            <text x="190" y="100" textAnchor="middle" fontSize="11" fill="#0369a1">+ água</text>
            <line x1="150" y1="135" x2="222" y2="135" stroke="#374151" strokeWidth="2" markerEnd="url(#dilarr)"/>
            <text x="186" y="152" textAnchor="middle" fontSize="9" fill="#374151">n soluto</text>
            <text x="186" y="164" textAnchor="middle" fontSize="9" fill="#374151">constante</text>

            {/* Béquer diluído (maior) */}
            <path d="M250,40 L250,200 Q250,210 260,210 L420,210 Q430,210 430,200 L430,40" fill="#eff6ff" stroke="#2563eb" strokeWidth="2"/>
            <text x="340" y="30" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">Diluída</text>
            <text x="340" y="228" textAnchor="middle" fontSize="10" fill="#374151">V = 200 mL</text>
            {/* mesmas 8 bolinhas, mais espalhadas */}
            <circle cx="272" cy="80" r="5" fill="#dc2626"/>
            <circle cx="330" cy="70" r="5" fill="#dc2626"/>
            <circle cx="400" cy="95" r="5" fill="#dc2626"/>
            <circle cx="290" cy="130" r="5" fill="#dc2626"/>
            <circle cx="360" cy="120" r="5" fill="#dc2626"/>
            <circle cx="410" cy="160" r="5" fill="#dc2626"/>
            <circle cx="280" cy="180" r="5" fill="#dc2626"/>
            <circle cx="350" cy="185" r="5" fill="#dc2626"/>

            <defs>
              <marker id="dilarr" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker>
            </defs>
          </svg>
          <figcaption>Na diluição, o número de mols de soluto (bolinhas vermelhas) é o mesmo nos dois béqueres; só o volume cresce, então a concentração cai. Dobrar o volume reduz a concentração à metade.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <h3>Exemplo resolvido — diluindo HCl de estoque</h3>
          <p>
            Quantos mL de HCl 6 mol/L são necessários para preparar 600 mL de HCl 1 mol/L?
          </p>
          <p>
            Soluto constante: <M>{"M_i V_i = M_f V_f"}</M> →{" "}
            <M>{"6 \\cdot V_i = 1 \\cdot 600"}</M> →{" "}
            <M>{"V_i = \\dfrac{600}{6} = 100\\ \\text{mL}"}</M>.
          </p>
          <p>
            Ou seja: mede-se 100 mL do ácido concentrado e completa-se com água até 600 mL (adicionam-se
            500 mL de água).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mesmo soluto</span>
        <h2>2. Mistura de Soluções de Mesmo Soluto (sem reação)</h2>
        <p>
          Ao misturar duas soluções <strong>do mesmo soluto</strong>, nada reage: apenas somam-se as
          quantidades de matéria e os volumes. A quantidade total de soluto é{" "}
          <M>{"n_{total} = M_1 V_1 + M_2 V_2"}</M> e o volume total é <M>{"V_1 + V_2"}</M>. A concentração
          final é a razão entre os dois:
        </p>
        <div className="math-block">
          <h3>Concentração final da mistura</h3>
          <p><M block>{"M_f = \\dfrac{M_1 V_1 + M_2 V_2}{V_1 + V_2}"}</M></p>
          <p>
            Repare que <M>{"M_f"}</M> é sempre um valor <strong>intermediário</strong> entre{" "}
            <M>{"M_1"}</M> e <M>{"M_2"}</M> — é uma média ponderada pelos volumes.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo resolvido</h3>
          <p>
            Misturam-se 300 mL de NaCl 2 mol/L com 200 mL de NaCl 0,5 mol/L. Qual a concentração final?
          </p>
          <p>
            <M block>{"M_f = \\dfrac{(2)(300) + (0{,}5)(200)}{300 + 200} = \\dfrac{600 + 100}{500} = \\dfrac{700}{500} = 1{,}4\\ \\text{mol/L}"}</M>
          </p>
          <p>O resultado, 1,4 mol/L, está entre 0,5 e 2 mol/L, como esperado.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Com reação</span>
        <h2>3. Mistura de Soluções com Reação Química</h2>
        <p>
          Quando os solutos das duas soluções <strong>reagem</strong> entre si (caso clássico: um ácido e
          uma base), não basta somar — é preciso seguir um roteiro estequiométrico:
        </p>
        <ul>
          <li>Escrever a equação <strong>balanceada</strong> da reação.</li>
          <li>Calcular os <strong>mols</strong> de cada reagente (<M>{"n = M \\cdot V"}</M>, com V em litros).</li>
          <li>Verificar a proporção e identificar se há <strong>reagente em excesso</strong>.</li>
          <li>Determinar o que sobrou e/ou os produtos formados, dividindo pelo <strong>volume total</strong>.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Exemplo resolvido — excesso de ácido</h3>
          <p>
            Misturam-se 100 mL de HCl 0,3 mol/L com 100 mL de NaOH 0,1 mol/L. Qual a concentração de HCl
            que sobra? Reação: <M>{"\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}"}</M> (1:1).
          </p>
          <p>
            <M>{"n_{HCl} = 0{,}3 \\times 0{,}1 = 0{,}03\\ \\text{mol}"}</M>;{" "}
            <M>{"n_{NaOH} = 0{,}1 \\times 0{,}1 = 0{,}01\\ \\text{mol}"}</M>.
          </p>
          <p>
            O NaOH (0,01 mol) consome 0,01 mol de HCl. Sobram{" "}
            <M>{"0{,}03 - 0{,}01 = 0{,}02\\ \\text{mol}"}</M> de HCl no volume total de{" "}
            <M>{"100 + 100 = 200\\ \\text{mL} = 0{,}2\\ \\text{L}"}</M>:
          </p>
          <p>
            <M>{"M_{HCl} = \\dfrac{0{,}02}{0{,}2} = 0{,}1\\ \\text{mol/L}"}</M> (meio ácido ao final).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fórmulas reunidas</span>
        <h2>4. Quadro-Resumo das Situações</h2>
        <p>
          As três situações compartilham a mesma raiz — o controle dos mols de soluto — mas têm fórmulas
          próprias. Use o quadro para escolher rapidamente o caminho de cálculo:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Situação</th><th>O que acontece</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Diluição</td>
                <td>Só adiciona solvente; soluto constante</td>
                <td><M>{"C_i V_i = C_f V_f"}</M></td>
              </tr>
              <tr>
                <td>Mistura (mesmo soluto)</td>
                <td>Soma mols e volumes; sem reação</td>
                <td><M>{"M_f = \\dfrac{M_1 V_1 + M_2 V_2}{V_1 + V_2}"}</M></td>
              </tr>
              <tr>
                <td>Mistura com reação</td>
                <td>Reagentes se consomem; checar excesso</td>
                <td><M>{"n = M \\cdot V"}</M> + estequiometria</td>
              </tr>
              <tr>
                <td>Titulação (equivalência)</td>
                <td>Mols de ácido = mols de base</td>
                <td><M>{"M_a V_a x_a = M_b V_b x_b"}</M></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Técnica analítica</span>
        <h2>5. Titulação Ácido-Base: a Técnica</h2>
        <p>
          A <strong>titulação</strong> (ou volumetria de neutralização) determina a concentração
          desconhecida de uma solução adicionando, gota a gota a partir de uma <strong>bureta</strong>,
          uma solução de concentração conhecida — o <strong>titulante</strong> — sobre um volume medido da
          solução-problema no <strong>erlenmeyer</strong>. A adição continua até o{" "}
          <strong>ponto de equivalência</strong>, em que os mols de <M>{"\\text{H}^{+}"}</M> igualam
          exatamente os mols de <M>{"\\text{OH}^{-}"}</M>. Um <strong>indicador</strong> sinaliza esse
          momento mudando de cor (o ponto de viragem).
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 360 280" width="360" height="280" aria-label="Montagem de titulação: bureta com titulante gotejando sobre erlenmeyer">
            {/* Suporte */}
            <line x1="40" y1="20" x2="40" y2="265" stroke="#374151" strokeWidth="4"/>
            <line x1="40" y1="265" x2="120" y2="265" stroke="#374151" strokeWidth="4"/>
            {/* Garra */}
            <line x1="40" y1="60" x2="150" y2="60" stroke="#6b7280" strokeWidth="3"/>
            {/* Bureta */}
            <rect x="142" y="30" width="20" height="150" rx="3" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <rect x="142" y="30" width="20" height="60" fill="#bfdbfe"/>
            {/* graduações */}
            <line x1="142" y1="50" x2="150" y2="50" stroke="#1e40af" strokeWidth="1"/>
            <line x1="142" y1="70" x2="150" y2="70" stroke="#1e40af" strokeWidth="1"/>
            <line x1="142" y1="90" x2="150" y2="90" stroke="#1e40af" strokeWidth="1"/>
            <line x1="142" y1="110" x2="150" y2="110" stroke="#1e40af" strokeWidth="1"/>
            <line x1="142" y1="130" x2="150" y2="130" stroke="#1e40af" strokeWidth="1"/>
            <line x1="142" y1="150" x2="150" y2="150" stroke="#1e40af" strokeWidth="1"/>
            <text x="172" y="48" fontSize="10" fill="#1e40af">titulante</text>
            <text x="172" y="62" fontSize="10" fill="#1e40af">(conhecido)</text>
            {/* torneira + bico */}
            <rect x="146" y="180" width="12" height="10" fill="#374151"/>
            <line x1="152" y1="190" x2="152" y2="205" stroke="#2563eb" strokeWidth="2"/>
            {/* gota */}
            <circle cx="152" cy="212" r="3" fill="#2563eb"/>
            <circle cx="152" cy="222" r="2.5" fill="#60a5fa"/>

            {/* Erlenmeyer */}
            <path d="M120,235 L145,200 L159,200 L184,235 Q188,240 184,244 L120,244 Q116,240 120,235 Z" fill="#fce7f3" stroke="#7c3aed" strokeWidth="2"/>
            <path d="M126,238 L178,238 Q180,240 178,242 L126,242 Q124,240 126,238 Z" fill="#f9a8d4" stroke="none"/>
            <text x="152" y="270" textAnchor="middle" fontSize="10" fill="#374151">erlenmeyer</text>
            <text x="250" y="222" fontSize="10" fill="#7c3aed">analito</text>
            <text x="250" y="236" fontSize="10" fill="#7c3aed">+ indicador</text>
            <line x1="244" y1="232" x2="190" y2="234" stroke="#7c3aed" strokeWidth="1" markerEnd="url(#tarr)"/>
            <defs>
              <marker id="tarr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/></marker>
            </defs>
          </svg>
          <figcaption>Montagem clássica: a bureta libera o titulante de concentração conhecida sobre o analito (com indicador) no erlenmeyer, até a viragem.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cálculo central</span>
        <h2>6. Equação Fundamental da Titulação</h2>
        <p>
          No ponto de equivalência, a quantidade de matéria de íons <M>{"\\text{H}^{+}"}</M> liberados pelo
          ácido iguala a de íons <M>{"\\text{OH}^{-}"}</M> liberados pela base:{" "}
          <M>{"n_{\\text{H}^{+}} = n_{\\text{OH}^{-}}"}</M>. Como cada ácido pode liberar mais de um{" "}
          <M>{"\\text{H}^{+}"}</M> e cada base mais de um <M>{"\\text{OH}^{-}"}</M>, entram os fatores{" "}
          <M>{"x_a"}</M> (número de H ionizáveis) e <M>{"x_b"}</M> (número de OH):
        </p>
        <div className="math-block">
          <h3>No ponto de equivalência</h3>
          <p><M block>{"M_a \\cdot V_a \\cdot x_a = M_b \\cdot V_b \\cdot x_b"}</M></p>
        </div>
        <div className="lesson-highlight">
          <p>
            Para monoácido + monobase (<M>{"x_a = x_b = 1"}</M>), como HCl + NaOH, simplifica para{" "}
            <M>{"M_a V_a = M_b V_b"}</M>. <strong>Cuidado:</strong> com diácidos (H₂SO₄, <M>{"x_a = 2"}</M>)
            ou dibases (Ca(OH)₂, <M>{"x_b = 2"}</M>), os fatores não podem ser esquecidos.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo resolvido — vinagre titulado com NaOH</h3>
          <p>
            Na titulação de 25 mL de uma solução de ácido acético (monoácido), gastaram-se 20 mL de NaOH
            0,5 mol/L até a viragem da fenolftaleína. Qual a concentração do ácido?
          </p>
          <p>
            Proporção 1:1 (<M>{"x_a = x_b = 1"}</M>): <M>{"M_a V_a = M_b V_b"}</M> →{" "}
            <M>{"M_a \\cdot 25 = 0{,}5 \\cdot 20"}</M> →{" "}
            <M>{"M_a = \\dfrac{10}{25} = 0{,}4\\ \\text{mol/L}"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Curva de titulação</span>
        <h2>7. A Curva de Titulação (pH × volume)</h2>
        <p>
          Acompanhando o <strong>pH</strong> da solução conforme se adiciona o titulante, obtém-se a{" "}
          <strong>curva de titulação</strong>. Para um ácido forte titulado por base forte, o pH começa
          baixo, sobe lentamente e dá um <strong>salto brusco e quase vertical</strong> ao cruzar o ponto
          de equivalência (pH ≈ 7), antes de se estabilizar em valores básicos. É justamente nesse salto
          íngreme que o indicador deve mudar de cor — sua <strong>faixa de viragem</strong> precisa cair
          dentro do degrau.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 300" width="480" height="300" aria-label="Curva de titulação de ácido forte por base forte: pH em função do volume de titulante">
            {/* Eixos */}
            <line x1="56" y1="260" x2="455" y2="260" stroke="#374151" strokeWidth="2"/>
            <line x1="56" y1="24" x2="56" y2="260" stroke="#374151" strokeWidth="2"/>
            <text x="252" y="290" textAnchor="middle" fontSize="13" fill="#374151">Volume de titulante (mL)</text>
            <text x="20" y="140" textAnchor="middle" fontSize="13" fill="#374151" transform="rotate(-90,20,140)">pH</text>

            {/* Marcas eixo Y: pH 0,7,14 */}
            <text x="48" y="263" textAnchor="end" fontSize="10" fill="#374151">0</text>
            <text x="48" y="146" textAnchor="end" fontSize="10" fill="#374151">7</text>
            <text x="48" y="30" textAnchor="end" fontSize="10" fill="#374151">14</text>
            <line x1="52" y1="142" x2="56" y2="142" stroke="#374151" strokeWidth="1"/>
            <line x1="52" y1="26" x2="56" y2="26" stroke="#374151" strokeWidth="1"/>

            {/* Faixa de viragem da fenolftaleína (pH 8,2 a 10) destacada */}
            <rect x="56" y="86" width="399" height="34" fill="#fce7f3" opacity="0.7"/>
            <text x="450" y="100" textAnchor="end" fontSize="9" fill="#9d174d">viragem fenolftaleína (8,2–10)</text>

            {/* linha do pH = 7 */}
            <line x1="56" y1="142" x2="455" y2="142" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4,4"/>

            {/* Curva: pH baixo, salto vertical no ponto de equivalência, depois alto */}
            <path d="M60,240 C140,234 200,226 250,214 C270,209 278,205 284,188 C290,150 290,118 296,80 C302,58 320,52 380,48 C420,46 440,45 452,45" fill="none" stroke="#2563eb" strokeWidth="3"/>

            {/* Ponto de equivalência */}
            <line x1="288" y1="24" x2="288" y2="260" stroke="#059669" strokeWidth="1.5" strokeDasharray="5,4"/>
            <circle cx="288" cy="142" r="5" fill="#059669"/>
            <text x="294" y="250" fontSize="10" fill="#047857">V equivalência</text>
            <text x="170" y="135" fontSize="11" fill="#047857" textAnchor="middle">ponto de equivalência</text>
            <line x1="218" y1="139" x2="282" y2="142" stroke="#047857" strokeWidth="1" markerEnd="url(#eqarr)"/>

            {/* Rótulos de região */}
            <text x="120" y="226" fontSize="10" fill="#b91c1c">meio ácido</text>
            <text x="360" y="38" fontSize="10" fill="#1d4ed8">meio básico</text>
            <text x="320" y="108" fontSize="10" fill="#1e40af" transform="rotate(-78,320,108)">salto de pH</text>

            <defs>
              <marker id="eqarr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#047857"/></marker>
            </defs>
          </svg>
          <figcaption>Curva de titulação ácido forte + base forte: o pH salta verticalmente no ponto de equivalência (≈ 7). A faixa de viragem da fenolftaleína (rosa) cai dentro do salto, sinalizando o fim.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Detectando o ponto</span>
        <h2>8. Indicadores Ácido-Base</h2>
        <p>
          Um <strong>indicador</strong> é uma substância (em geral um ácido ou base orgânica fraca) que
          tem cores diferentes nas formas ácida e básica. Ele muda de cor dentro de uma{" "}
          <strong>faixa de pH</strong> característica — a <strong>zona de viragem</strong>. A escolha do
          indicador depende do salto da curva: a faixa de viragem deve estar contida no degrau de pH.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Indicador</th><th>Faixa de viragem (pH)</th><th>Cor em meio ácido</th><th>Cor em meio básico</th></tr>
            </thead>
            <tbody>
              <tr><td>Alaranjado de metila</td><td>3,1 – 4,4</td><td>Vermelho</td><td>Amarelo-laranja</td></tr>
              <tr><td>Azul de bromotimol</td><td>6,0 – 7,6</td><td>Amarelo</td><td>Azul</td></tr>
              <tr><td>Fenolftaleína</td><td>8,2 – 10,0</td><td>Incolor</td><td>Rosa-carmim</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Em titulações com <strong>base forte</strong> (NaOH) como titulante, a fenolftaleína é a
          preferida: incolor enquanto há ácido, fica rosa-claro persistente exatamente quando se atinge a
          equivalência. O alaranjado de metila é útil quando o titulante é ácido forte.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>9. Onde Encontramos Esses Processos?</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧴</span>
            <h3>Diluição</h3>
            <p>Preparo de soro fisiológico, sucos concentrados, medicamentos e produtos de limpeza.</p>
          </div>
          <div className="lesson-card">
            <span>🧪</span>
            <h3>Titulação</h3>
            <p>Controle de acidez em vinagres, leite, vinhos, medicamentos e água tratada.</p>
          </div>
          <div className="lesson-card">
            <span>🏊</span>
            <h3>Mistura</h3>
            <p>Ajuste de pH de piscinas, correção de solos e tratamento de efluentes industriais.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>💧</span>
            <h3>Diluição</h3>
            <p><M>{"C_i V_i = C_f V_f"}</M> — soluto constante, volume cresce.</p>
          </div>
          <div className="math-card">
            <span>➕</span>
            <h3>Mistura (mesmo soluto)</h3>
            <p><M>{"M_f = \\dfrac{M_1V_1 + M_2V_2}{V_1+V_2}"}</M> — média ponderada.</p>
          </div>
          <div className="math-card">
            <span>⚗️</span>
            <h3>Com reação</h3>
            <p>Balancear, achar mols (<M>{"n = MV"}</M>), checar excesso, dividir pelo V total.</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>Titulação</h3>
            <p><M>{"M_a V_a x_a = M_b V_b x_b"}</M> no ponto de equivalência.</p>
          </div>
          <div className="math-card">
            <span>📈</span>
            <h3>Curva de pH</h3>
            <p>Salto vertical no ponto de equivalência (≈ 7 p/ forte + forte).</p>
          </div>
          <div className="math-card">
            <span>🎨</span>
            <h3>Indicador</h3>
            <p>Vira dentro do salto. Fenolftaleína: incolor → rosa.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Diluição simples"
          statement={<p>200 mL de uma solução 2 mol/L são diluídos com água até 800 mL. A nova concentração é:</p>}
          options={[
            { letter: "a", text: "0,5 mol/L", correct: true },
            { letter: "b", text: "1 mol/L" },
            { letter: "c", text: "2 mol/L" },
            { letter: "d", text: "8 mol/L" },
          ]}
          resolution={<p>Soluto constante: <M>{"M_i V_i = M_f V_f"}</M> → <M>{"2 \\times 200 = M_f \\times 800"}</M> → <M>{"M_f = \\dfrac{400}{800} = 0{,}5\\ \\text{mol/L}"}</M>. O volume quadruplicou (de 200 para 800 mL), então a concentração caiu para 1/4 do valor inicial.</p>}
        />

        <Exercise
          level="Básico"
          title="2. O que muda na diluição?"
          statement={<p>Ao diluir uma solução adicionando água, a grandeza que permanece constante é:</p>}
          options={[
            { letter: "a", text: "A quantidade de matéria (mols) do soluto", correct: true },
            { letter: "b", text: "A concentração em mol/L" },
            { letter: "c", text: "O volume da solução" },
            { letter: "d", text: "A densidade da solução" },
          ]}
          resolution={<p>Na diluição só se adiciona solvente: nenhum soluto entra ou sai, logo a quantidade de matéria (mols) do soluto não muda. O volume aumenta e, por consequência, a concentração e a densidade diminuem.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Mistura de mesmo soluto"
          statement={<p>Misturando 300 mL de NaCl 2 mol/L com 200 mL de NaCl 0,5 mol/L (sem reação), a concentração final é:</p>}
          options={[
            { letter: "a", text: "1,4 mol/L", correct: true },
            { letter: "b", text: "2,5 mol/L" },
            { letter: "c", text: "1,25 mol/L" },
            { letter: "d", text: "0,7 mol/L" },
          ]}
          resolution={<p><M>{"M_f = \\dfrac{M_1 V_1 + M_2 V_2}{V_1 + V_2} = \\dfrac{(2)(300) + (0{,}5)(200)}{300 + 200} = \\dfrac{600 + 100}{500} = \\dfrac{700}{500} = 1{,}4\\ \\text{mol/L}"}</M>. O valor fica entre 0,5 e 2 mol/L, como toda média ponderada.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Titulação 1:1"
          statement={<p>Foram necessários 25 mL de NaOH 0,1 mol/L para neutralizar 50 mL de HCl. A concentração do HCl é:</p>}
          options={[
            { letter: "a", text: "0,05 mol/L", correct: true },
            { letter: "b", text: "0,1 mol/L" },
            { letter: "c", text: "0,2 mol/L" },
            { letter: "d", text: "0,5 mol/L" },
          ]}
          resolution={<p>HCl e NaOH são monoácido e monobase (<M>{"x_a = x_b = 1"}</M>), logo <M>{"M_a V_a = M_b V_b"}</M> → <M>{"M_a \\times 50 = 0{,}1 \\times 25"}</M> → <M>{"M_a = \\dfrac{2{,}5}{50} = 0{,}05\\ \\text{mol/L}"}</M>.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Titulação com diácido"
          statement={<p>Quantos mL de NaOH 0,5 mol/L são necessários para neutralizar completamente 100 mL de H₂SO₄ 0,25 mol/L?</p>}
          options={[
            { letter: "a", text: "100 mL", correct: true },
            { letter: "b", text: "50 mL" },
            { letter: "c", text: "25 mL" },
            { letter: "d", text: "200 mL" },
          ]}
          resolution={<p>O H₂SO₄ é diácido (<M>{"x_a = 2"}</M>) e o NaOH é monobase (<M>{"x_b = 1"}</M>). No ponto de equivalência: <M>{"M_a V_a x_a = M_b V_b x_b"}</M> → <M>{"0{,}25 \\times 100 \\times 2 = 0{,}5 \\times V_b \\times 1"}</M> → <M>{"50 = 0{,}5\\,V_b"}</M> → <M>{"V_b = 100\\ \\text{mL}"}</M>. Esquecer o fator 2 daria, erroneamente, 50 mL.</p>}
        />

        <Exercise
          level="Avançado"
          title="6. Mistura com reação e excesso"
          statement={<p>Misturam-se 100 mL de HCl 0,3 mol/L com 100 mL de NaOH 0,1 mol/L. A reação é <M>{"\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}"}</M> (1:1). A concentração de HCl em excesso na solução final é:</p>}
          options={[
            { letter: "a", text: "0,1 mol/L", correct: true },
            { letter: "b", text: "0,2 mol/L" },
            { letter: "c", text: "0,02 mol/L" },
            { letter: "d", text: "0,4 mol/L" },
          ]}
          resolution={<p><M>{"n_{HCl} = 0{,}3 \\times 0{,}1 = 0{,}03\\ \\text{mol}"}</M>; <M>{"n_{NaOH} = 0{,}1 \\times 0{,}1 = 0{,}01\\ \\text{mol}"}</M>. O NaOH consome 0,01 mol de HCl; sobram <M>{"0{,}03 - 0{,}01 = 0{,}02\\ \\text{mol}"}</M> de HCl no volume total de 200 mL = 0,2 L. Logo <M>{"M = \\dfrac{0{,}02}{0{,}2} = 0{,}1\\ \\text{mol/L}"}</M>.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="7. (ENEM-estilo) Acidez do vinagre"
          statement={<p>Para verificar se um vinagre atende ao teor de ácido acético exigido, um laboratório titula 25 mL da amostra com NaOH 0,5 mol/L, usando fenolftaleína; gastam-se 20 mL de base até a solução ficar levemente rosa. Considerando o ácido acético como monoácido, a concentração de ácido na amostra e o significado da viragem são:</p>}
          options={[
            { letter: "a", text: "0,4 mol/L; a cor rosa indica o ponto de equivalência, em que os mols de ácido igualam os de base.", correct: true },
            { letter: "b", text: "0,625 mol/L; a cor rosa indica que o vinagre ficou mais ácido." },
            { letter: "c", text: "0,4 mol/L; a cor rosa indica que o indicador foi consumido pelo ácido." },
            { letter: "d", text: "0,1 mol/L; a viragem ocorre antes do ponto de equivalência." },
          ]}
          resolution={<p>Monoácido + monobase: <M>{"M_a V_a = M_b V_b"}</M> → <M>{"M_a \\times 25 = 0{,}5 \\times 20"}</M> → <M>{"M_a = \\dfrac{10}{25} = 0{,}4\\ \\text{mol/L}"}</M>. A fenolftaleína, incolor em meio ácido, vira rosa assim que a base começa a sobrar — sinalizando que se atingiu o ponto de equivalência (mols de H⁺ = mols de OH⁻).</p>}
        />
      </section>
    </article>
  );
}
