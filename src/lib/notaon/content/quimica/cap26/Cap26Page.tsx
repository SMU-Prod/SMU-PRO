"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap26Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 26</span>
          <h1>Cinética Química: Velocidade, Colisões e Energia de Ativação</h1>
          <p>
            Por que a pólvora explode em milissegundos enquanto o ferro leva anos para enferrujar? A
            cinética química é o ramo que mede a <strong>rapidez</strong> das reações e explica, no nível
            das moléculas, o que precisa acontecer para que reagentes se transformem em produtos: colisões
            com energia suficiente, orientação correta e a superação de uma barreira energética — a energia
            de ativação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que é Cinética Química?</h2>
        <p>
          A <strong>cinética química</strong> estuda a <strong>velocidade</strong> com que as reações
          ocorrem e os <strong>fatores</strong> que a influenciam (concentração, temperatura, superfície de
          contato, catalisadores). Enquanto a termoquímica responde <em>"a reação libera ou absorve
          energia?"</em>, a cinética responde <em>"quão rápido ela acontece?"</em>. São perguntas
          independentes: uma reação pode ser muito exotérmica e, ainda assim, lentíssima.
        </p>
        <p>
          A escala de tempo das reações é gigantesca. Veja como a mesma grandeza — a velocidade — abrange
          dez ordens de magnitude entre os exemplos do cotidiano:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Reação</th><th>Tempo típico</th><th>Velocidade relativa</th></tr>
            </thead>
            <tbody>
              <tr><td>Explosão de TNT / pólvora</td><td>microssegundos</td><td>Altíssima</td></tr>
              <tr><td>Neutralização ácido + base</td><td>instantânea</td><td>Muito alta</td></tr>
              <tr><td>Combustão do papel</td><td>segundos</td><td>Alta</td></tr>
              <tr><td>Fermentação (massa de pão)</td><td>horas</td><td>Moderada</td></tr>
              <tr><td>Enferrujamento do ferro</td><td>meses a anos</td><td>Baixa</td></tr>
              <tr><td>Formação de petróleo / fósseis</td><td>milhões de anos</td><td>Baixíssima</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Medindo</span>
        <h2>2. Velocidade Média de Reação</h2>
        <p>
          A velocidade de uma reação é medida pela <strong>variação da concentração</strong> de um reagente
          (que diminui) ou de um produto (que aumenta) num dado intervalo de tempo. Usa-se o módulo para
          que o resultado seja sempre positivo, independentemente de a espécie ser consumida ou formada.
        </p>
        <div className="math-block">
          <h3>Definição</h3>
          <p><M block>{"v_m = \\dfrac{|\\Delta[\\,\\text{substância}\\,]|}{\\Delta t} = \\dfrac{|[\\,]_{\\text{final}} - [\\,]_{\\text{inicial}}|}{t_{\\text{final}} - t_{\\text{inicial}}}"}</M></p>
          <p>Unidade usual: <M>{"\\text{mol}/(\\text{L} \\cdot \\text{s})"}</M> ou mol/(L·min).</p>
        </div>
        <p>
          Graficamente, a concentração de um reagente <strong>cai com o tempo</strong>, e a velocidade
          média entre dois instantes é a inclinação (módulo) da reta que liga os dois pontos. Note que a
          curva é mais íngreme no início (reação rápida, muitos reagentes) e vai "achatando" conforme os
          reagentes se esgotam — por isso a velocidade <strong>diminui ao longo do tempo</strong>.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 280" width="480" height="280" aria-label="Curva de concentração de reagente em função do tempo">
            {/* Eixos */}
            <line x1="56" y1="240" x2="450" y2="240" stroke="#374151" strokeWidth="2"/>
            <line x1="56" y1="24" x2="56" y2="240" stroke="#374151" strokeWidth="2"/>
            <text x="252" y="270" textAnchor="middle" fontSize="13" fill="#374151">Tempo (s)</text>
            <text x="20" y="135" textAnchor="middle" fontSize="13" fill="#374151" transform="rotate(-90,20,135)">[Reagente] (mol/L)</text>

            {/* Curva exponencial decrescente do reagente */}
            <path d="M56,40 C120,90 180,150 260,185 C330,212 400,224 444,228" fill="none" stroke="#dc2626" strokeWidth="3"/>
            <text x="120" y="70" fontSize="11" fill="#b91c1c">[Reagente] ↓</text>

            {/* Pontos t1 e t2 para velocidade média */}
            <circle cx="120" cy="92" r="4" fill="#1d4ed8"/>
            <circle cx="260" cy="185" r="4" fill="#1d4ed8"/>
            <line x1="120" y1="92" x2="260" y2="185" stroke="#1d4ed8" strokeWidth="1.5" strokeDasharray="5,4"/>
            {/* Linhas guia */}
            <line x1="120" y1="92" x2="120" y2="240" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="260" y1="185" x2="260" y2="240" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="56" y1="92" x2="120" y2="92" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="56" y1="185" x2="260" y2="185" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
            <text x="118" y="254" textAnchor="middle" fontSize="10" fill="#6b7280">t₁</text>
            <text x="260" y="254" textAnchor="middle" fontSize="10" fill="#6b7280">t₂</text>
            <text x="190" y="128" textAnchor="middle" fontSize="10" fill="#1d4ed8">vₘ = |Δ[ ]| / Δt</text>
          </svg>
          <figcaption>A concentração do reagente decai com o tempo; a velocidade média é a inclinação da corda entre t₁ e t₂. A curva achata porque a reação desacelera.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Proporção</span>
        <h2>3. Velocidade e Coeficientes Estequiométricos</h2>
        <p>
          Numa mesma reação, espécies diferentes são consumidas/formadas em <strong>velocidades
          proporcionais aos seus coeficientes</strong>. Para a equação genérica{" "}
          <M>{"aA + bB \\rightarrow cC + dD"}</M>, a velocidade da reação (única) relaciona-se a cada
          espécie dividindo-se pela respectiva quantidade estequiométrica:
        </p>
        <div className="lesson-highlight">
          <p><M block>{"v = \\dfrac{1}{a}\\dfrac{|\\Delta[A]|}{\\Delta t} = \\dfrac{1}{b}\\dfrac{|\\Delta[B]|}{\\Delta t} = \\dfrac{1}{c}\\dfrac{\\Delta[C]}{\\Delta t} = \\dfrac{1}{d}\\dfrac{\\Delta[D]}{\\Delta t}"}</M></p>
        </div>
        <p>
          Exemplo clássico — a síntese da amônia (Haber-Bosch):{" "}
          <M>{"\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3"}</M>. Para cada 1 mol de N₂ consumido,
          gastam-se 3 mols de H₂ e formam-se 2 mols de NH₃. Logo, o H₂ é consumido <strong>3 vezes mais
          rápido</strong> que o N₂, e o NH₃ é formado 2 vezes mais rápido que o N₂ é consumido:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Espécie</th><th>Coeficiente</th><th>Papel</th><th>Velocidade relativa</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"\\text{N}_2"}</M></td><td>1</td><td>reagente</td><td>1 (referência)</td></tr>
              <tr><td><M>{"\\text{H}_2"}</M></td><td>3</td><td>reagente</td><td>3×</td></tr>
              <tr><td><M>{"\\text{NH}_3"}</M></td><td>2</td><td>produto</td><td>2×</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Por que reagem</span>
        <h2>4. Teoria das Colisões</h2>
        <p>
          Para que duas moléculas reajam, elas precisam <strong>colidir</strong>. Mas a imensa maioria das
          colisões <em>não</em> gera reação. Uma colisão só é <strong>eficaz</strong> (ou efetiva) quando
          satisfaz <strong>duas</strong> condições simultâneas:
        </p>
        <ul>
          <li><strong>Energia suficiente:</strong> a colisão deve ter energia igual ou maior que a energia de ativação (Eₐ).</li>
          <li><strong>Orientação (geometria) favorável:</strong> as moléculas devem se chocar pela posição correta, permitindo o rearranjo das ligações.</li>
        </ul>
        <p>
          A figura abaixo ilustra a diferença: na colisão de cima, os átomos que devem se ligar se aproximam
          corretamente e a reação ocorre; na de baixo, mesmo com energia de sobra, a orientação errada faz
          as moléculas apenas ricochetearem.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 240" width="480" height="240" aria-label="Colisão eficaz versus colisão ineficaz">
            {/* Colisão eficaz (topo) */}
            <text x="14" y="40" fontSize="12" fontWeight="bold" fill="#065f46">Colisão EFICAZ</text>
            <circle cx="90" cy="55" r="14" fill="#34d399" stroke="#065f46"/>
            <circle cx="118" cy="55" r="10" fill="#a7f3d0" stroke="#065f46"/>
            <circle cx="230" cy="55" r="14" fill="#fbbf24" stroke="#92400e"/>
            <text x="78" y="80" fontSize="9" fill="#374151">A — B</text>
            <text x="226" y="80" fontSize="9" fill="#374151">C</text>
            {/* setas de aproximação corretas */}
            <line x1="140" y1="55" x2="180" y2="55" stroke="#059669" strokeWidth="2" markerEnd="url(#ga)"/>
            <line x1="216" y1="55" x2="176" y2="55" stroke="#059669" strokeWidth="2" markerEnd="url(#ga)"/>
            {/* resultado */}
            <line x1="270" y1="55" x2="320" y2="55" stroke="#374151" strokeWidth="2" markerEnd="url(#gk)"/>
            <circle cx="360" cy="55" r="14" fill="#34d399" stroke="#065f46"/>
            <circle cx="388" cy="55" r="14" fill="#fbbf24" stroke="#92400e"/>
            <text x="344" y="82" fontSize="9" fill="#374151">A — C</text>
            <text x="408" y="58" fontSize="9" fill="#374151">+ B</text>

            {/* linha divisória */}
            <line x1="14" y1="118" x2="466" y2="118" stroke="#e5e7eb" strokeWidth="1.5"/>

            {/* Colisão ineficaz (base) */}
            <text x="14" y="158" fontSize="12" fontWeight="bold" fill="#991b1b">Colisão INEFICAZ (orientação errada)</text>
            <circle cx="118" cy="180" r="14" fill="#34d399" stroke="#065f46"/>
            <circle cx="90" cy="180" r="10" fill="#a7f3d0" stroke="#065f46"/>
            <circle cx="230" cy="180" r="14" fill="#fbbf24" stroke="#92400e"/>
            <text x="92" y="206" fontSize="9" fill="#374151">B — A</text>
            <text x="226" y="206" fontSize="9" fill="#374151">C</text>
            <line x1="148" y1="180" x2="188" y2="180" stroke="#dc2626" strokeWidth="2" markerEnd="url(#ra)"/>
            <line x1="216" y1="180" x2="184" y2="180" stroke="#dc2626" strokeWidth="2" markerEnd="url(#ra)"/>
            <line x1="270" y1="180" x2="320" y2="180" stroke="#991b1b" strokeWidth="2" strokeDasharray="4,3"/>
            <text x="380" y="184" fontSize="10" fill="#991b1b" textAnchor="middle">sem reação ✗</text>

            <defs>
              <marker id="ga" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#059669"/></marker>
              <marker id="gk" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker>
              <marker id="ra" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/></marker>
            </defs>
          </svg>
          <figcaption>Mesma energia, resultados opostos: a orientação das moléculas no momento do choque decide se a colisão é eficaz.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <p>
            <strong>Regra de ouro:</strong> velocidade da reação ∝ número de <em>colisões eficazes</em> por
            segundo. Todos os fatores cinéticos (próximo capítulo) atuam aumentando esse número — seja
            elevando a frequência total de choques, seja aumentando a fração que tem energia ≥ Eₐ.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estado intermediário</span>
        <h2>5. Complexo Ativado (Estado de Transição)</h2>
        <p>
          No auge de uma colisão eficaz forma-se o <strong>complexo ativado</strong>: uma estrutura{" "}
          <strong>instável e de vida curtíssima</strong>, em que as ligações dos reagentes estão
          parcialmente rompidas e as ligações dos produtos parcialmente formadas. Ele corresponde ao{" "}
          <strong>ponto de energia máxima</strong> do caminho da reação — o "topo da montanha" que separa
          reagentes e produtos.
        </p>
        <div className="lesson-highlight">
          <p>
            Ex.: na reação <M>{"\\text{A} - \\text{B} + \\text{C} \\rightarrow \\text{A} + \\text{B} - \\text{C}"}</M>, o
            complexo ativado é <M>{"[\\text{A} \\cdots \\text{B} \\cdots \\text{C}]"}</M>, com a ligação A–B
            se quebrando ao mesmo tempo em que a B–C se forma. Não é possível isolá-lo: ele existe por uma
            fração de femtossegundo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A barreira</span>
        <h2>6. Energia de Ativação (Eₐ)</h2>
        <p>
          A <strong>energia de ativação</strong> é a <strong>energia mínima</strong> que os reagentes
          precisam acumular para formar o complexo ativado e, assim, reagir. É a barreira que separa
          reagentes e produtos. Quanto <strong>menor</strong> a Eₐ, <strong>maior</strong> a fração de
          moléculas capazes de vencê-la a uma dada temperatura → reação mais rápida.
        </p>
        <div className="math-block">
          <h3>Relação com a variação de entalpia</h3>
          <p><M block>{"\\Delta H = E_{a(\\text{direta})} - E_{a(\\text{inversa})}"}</M></p>
          <p>
            Se <M>{"E_{a(\\text{direta})} > E_{a(\\text{inversa})}"}</M>, então <M>{"\\Delta H > 0"}</M>{" "}
            (endotérmica). Se for o contrário, <M>{"\\Delta H < 0"}</M> (exotérmica).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visualizando</span>
        <h2>7. Diagrama de Energia da Reação</h2>
        <p>
          O gráfico de <strong>energia × caminho da reação</strong> é a representação central da cinética. A
          subida dos reagentes até o pico (complexo ativado) é a <strong>Eₐ direta</strong>; a descida do
          pico até os produtos, vista de trás para frente, é a <strong>Eₐ inversa</strong>; e o degrau entre
          o nível dos reagentes e o dos produtos é o <M>{"\\Delta H"}</M>. Abaixo, os dois casos possíveis
          lado a lado.
        </p>
        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg viewBox="0 0 320 260" width="320" height="260" aria-label="Diagrama de energia de reação exotérmica">
              <line x1="44" y1="230" x2="305" y2="230" stroke="#374151" strokeWidth="2"/>
              <line x1="44" y1="16" x2="44" y2="230" stroke="#374151" strokeWidth="2"/>
              <text x="175" y="252" textAnchor="middle" fontSize="11" fill="#374151">Caminho da reação</text>
              <text x="14" y="125" textAnchor="middle" fontSize="11" fill="#374151" transform="rotate(-90,14,125)">Energia</text>
              {/* curva exotérmica: reagentes altos, pico, produtos baixos */}
              <path d="M60,120 C110,120 120,40 160,40 C200,40 210,180 270,180" fill="none" stroke="#2563eb" strokeWidth="3"/>
              {/* níveis */}
              <line x1="44" y1="120" x2="160" y2="120" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
              <line x1="44" y1="40" x2="160" y2="40" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
              <line x1="160" y1="180" x2="290" y2="180" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
              {/* Ea direta */}
              <line x1="100" y1="120" x2="100" y2="40" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#ea1)" markerStart="url(#ea1b)"/>
              <text x="105" y="84" fontSize="10" fill="#b91c1c">Eₐ</text>
              {/* ΔH */}
              <line x1="250" y1="120" x2="250" y2="180" stroke="#059669" strokeWidth="1.5" markerEnd="url(#dh1)" markerStart="url(#dh1b)"/>
              <text x="255" y="154" fontSize="10" fill="#047857">ΔH&lt;0</text>
              <text x="64" y="114" fontSize="9" fill="#374151">reagentes</text>
              <text x="222" y="196" fontSize="9" fill="#374151">produtos</text>
              <text x="120" y="34" fontSize="9" fill="#7c3aed">complexo ativado</text>
              <text x="90" y="246" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">EXOTÉRMICA</text>
              <defs>
                <marker id="ea1" markerWidth="7" markerHeight="7" refX="3" refY="6" orient="auto"><path d="M0,6 L3,0 L6,6 z" fill="#dc2626"/></marker>
                <marker id="ea1b" markerWidth="7" markerHeight="7" refX="3" refY="0" orient="auto"><path d="M0,0 L3,6 L6,0 z" fill="#dc2626"/></marker>
                <marker id="dh1" markerWidth="7" markerHeight="7" refX="3" refY="6" orient="auto"><path d="M0,6 L3,0 L6,6 z" fill="#059669"/></marker>
                <marker id="dh1b" markerWidth="7" markerHeight="7" refX="3" refY="0" orient="auto"><path d="M0,0 L3,6 L6,0 z" fill="#059669"/></marker>
              </defs>
            </svg>
            <figcaption>Exotérmica: produtos com menos energia que reagentes (ΔH &lt; 0).</figcaption>
          </figure>
          <figure className="lesson-figure">
            <svg viewBox="0 0 320 260" width="320" height="260" aria-label="Diagrama de energia de reação endotérmica">
              <line x1="44" y1="230" x2="305" y2="230" stroke="#374151" strokeWidth="2"/>
              <line x1="44" y1="16" x2="44" y2="230" stroke="#374151" strokeWidth="2"/>
              <text x="175" y="252" textAnchor="middle" fontSize="11" fill="#374151">Caminho da reação</text>
              <text x="14" y="125" textAnchor="middle" fontSize="11" fill="#374151" transform="rotate(-90,14,125)">Energia</text>
              {/* curva endotérmica: reagentes baixos, pico, produtos médios */}
              <path d="M60,180 C110,180 120,40 160,40 C200,40 210,110 270,110" fill="none" stroke="#2563eb" strokeWidth="3"/>
              <line x1="44" y1="180" x2="160" y2="180" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
              <line x1="44" y1="40" x2="160" y2="40" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
              <line x1="160" y1="110" x2="290" y2="110" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
              <line x1="100" y1="180" x2="100" y2="40" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#ea2)" markerStart="url(#ea2b)"/>
              <text x="105" y="114" fontSize="10" fill="#b91c1c">Eₐ</text>
              <line x1="250" y1="180" x2="250" y2="110" stroke="#059669" strokeWidth="1.5" markerEnd="url(#dh2)" markerStart="url(#dh2b)"/>
              <text x="255" y="150" fontSize="10" fill="#047857">ΔH&gt;0</text>
              <text x="64" y="174" fontSize="9" fill="#374151">reagentes</text>
              <text x="218" y="126" fontSize="9" fill="#374151">produtos</text>
              <text x="120" y="34" fontSize="9" fill="#7c3aed">complexo ativado</text>
              <text x="90" y="246" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">ENDOTÉRMICA</text>
              <defs>
                <marker id="ea2" markerWidth="7" markerHeight="7" refX="3" refY="6" orient="auto"><path d="M0,6 L3,0 L6,6 z" fill="#dc2626"/></marker>
                <marker id="ea2b" markerWidth="7" markerHeight="7" refX="3" refY="0" orient="auto"><path d="M0,0 L3,6 L6,0 z" fill="#dc2626"/></marker>
                <marker id="dh2" markerWidth="7" markerHeight="7" refX="3" refY="6" orient="auto"><path d="M0,6 L3,0 L6,6 z" fill="#059669"/></marker>
                <marker id="dh2b" markerWidth="7" markerHeight="7" refX="3" refY="0" orient="auto"><path d="M0,0 L3,6 L6,0 z" fill="#059669"/></marker>
              </defs>
            </svg>
            <figcaption>Endotérmica: produtos com mais energia que reagentes (ΔH &gt; 0).</figcaption>
          </figure>
        </div>
        <div className="lesson-highlight">
          <h3>Como ler o diagrama (resumo)</h3>
          <p>
            <strong>Eₐ direta</strong> = pico − reagentes. <strong>Eₐ inversa</strong> = pico − produtos.{" "}
            <strong>ΔH</strong> = produtos − reagentes. O complexo ativado é sempre o ponto mais alto, e por
            isso a Eₐ nunca é negativa.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Distribuição de energia</span>
        <h2>8. Por que a Temperatura Acelera Tanto: Maxwell-Boltzmann</h2>
        <p>
          A uma dada temperatura, nem todas as moléculas têm a mesma energia: existe uma{" "}
          <strong>distribuição</strong> (curva de Maxwell-Boltzmann). Apenas a fração de moléculas com
          energia <strong>≥ Eₐ</strong> (área à direita da linha) consegue reagir. Ao aumentar a
          temperatura, a curva se "espalha" para a direita e essa fração cresce <strong>muito</strong> — é
          por isso que um pequeno aumento de temperatura provoca um grande aumento de velocidade.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 260" width="480" height="260" aria-label="Distribuição de Maxwell-Boltzmann em duas temperaturas">
            <line x1="50" y1="220" x2="455" y2="220" stroke="#374151" strokeWidth="2"/>
            <line x1="50" y1="20" x2="50" y2="220" stroke="#374151" strokeWidth="2"/>
            <text x="252" y="248" textAnchor="middle" fontSize="12" fill="#374151">Energia cinética das moléculas</text>
            <text x="18" y="120" textAnchor="middle" fontSize="11" fill="#374151" transform="rotate(-90,18,120)">Nº de moléculas</text>
            {/* curva T1 (menor T, pico alto e estreito) */}
            <path d="M50,220 C110,210 140,50 190,50 C240,50 270,200 360,214 C400,219 430,220 455,220" fill="none" stroke="#2563eb" strokeWidth="2.5"/>
            <text x="196" y="46" fontSize="10" fill="#1d4ed8">T₁ (menor)</text>
            {/* curva T2 (maior T, pico mais baixo e deslocado) */}
            <path d="M50,220 C120,217 170,120 240,120 C300,120 330,190 410,210 C430,215 445,219 455,220" fill="none" stroke="#dc2626" strokeWidth="2.5"/>
            <text x="300" y="112" fontSize="10" fill="#b91c1c">T₂ (maior)</text>
            {/* linha Ea */}
            <line x1="350" y1="40" x2="350" y2="220" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5,4"/>
            <text x="354" y="52" fontSize="11" fill="#5b21b6">Eₐ</text>
            <text x="360" y="200" fontSize="9" fill="#5b21b6">moléculas que reagem →</text>
          </svg>
          <figcaption>Aumentar a temperatura (T₁ → T₂) desloca a distribuição e aumenta a fração de moléculas com energia ≥ Eₐ, acelerando a reação.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>⏱️</span>
            <h3>Velocidade média</h3>
            <p><M>{"v_m = |\\Delta[\\,]|/\\Delta t"}</M> — em mol/(L·s).</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>Coeficientes</h3>
            <p>Velocidades proporcionais aos coeficientes da equação balanceada.</p>
          </div>
          <div className="math-card">
            <span>💥</span>
            <h3>Colisão eficaz</h3>
            <p>Energia ≥ Eₐ <em>e</em> orientação correta — as duas juntas.</p>
          </div>
          <div className="math-card">
            <span>🌀</span>
            <h3>Complexo ativado</h3>
            <p>Estrutura instável no pico de energia do caminho da reação.</p>
          </div>
          <div className="math-card">
            <span>⛰️</span>
            <h3>Energia de ativação</h3>
            <p>Barreira mínima. Menor Eₐ → reação mais rápida.</p>
          </div>
          <div className="math-card">
            <span>📊</span>
            <h3>Diagrama</h3>
            <p>Pico = complexo ativado; degrau final = ΔH; <M>{"\\Delta H = E_{a,d} - E_{a,i}"}</M>.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Definição de velocidade"
          statement={<p>A velocidade média de uma reação é calculada pela:</p>}
          options={[
            { letter: "a", text: "Variação da concentração dividida pela variação do tempo", correct: true },
            { letter: "b", text: "Massa dividida pelo volume" },
            { letter: "c", text: "Temperatura dividida pela pressão" },
            { letter: "d", text: "Energia de ativação dividida pelo ΔH" },
          ]}
          resolution={<p><M>{"v_m = |\\Delta[\\,]|/\\Delta t"}</M> — variação da concentração de um reagente ou produto pelo intervalo de tempo. As demais opções não têm unidade de velocidade (mol/L·s).</p>}
        />

        <Exercise
          level="Básico"
          title="2. Colisão eficaz"
          statement={<p>Para que uma colisão entre moléculas resulte em reação, é necessário que ela tenha:</p>}
          options={[
            { letter: "a", text: "Energia suficiente e orientação adequada", correct: true },
            { letter: "b", text: "Apenas grande velocidade" },
            { letter: "c", text: "Baixa temperatura" },
            { letter: "d", text: "Ausência de catalisador" },
          ]}
          resolution={<p>Uma colisão é eficaz (gera reação) somente quando reúne <strong>energia ≥ Eₐ</strong> e <strong>orientação correta</strong>. Faltando qualquer uma das duas, as moléculas apenas ricocheteiam.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Velocidade e estequiometria"
          statement={<p>Na reação <M>{"\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3"}</M>, se o N₂ é consumido a 1 mol/(L·min), o H₂ é consumido a:</p>}
          options={[
            { letter: "a", text: "3 mol/(L·min)", correct: true },
            { letter: "b", text: "1 mol/(L·min)" },
            { letter: "c", text: "2 mol/(L·min)" },
            { letter: "d", text: "0,33 mol/(L·min)" },
          ]}
          resolution={<p>A proporção segue os coeficientes (N₂ : H₂ = 1 : 3). Para cada N₂ consumido, 3 H₂ são consumidos: <M>{"3 \\times 1 = 3\\ \\text{mol/(L·min)}"}</M>.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Lendo o diagrama de energia"
          statement={<p>No diagrama de energia de uma reação, observa-se: reagentes a 30 kJ, complexo ativado a 100 kJ e produtos a 50 kJ. A energia de ativação da reação direta e o ΔH valem, respectivamente:</p>}
          options={[
            { letter: "a", text: "70 kJ e +20 kJ (endotérmica)", correct: true },
            { letter: "b", text: "100 kJ e +50 kJ" },
            { letter: "c", text: "70 kJ e −20 kJ" },
            { letter: "d", text: "50 kJ e +70 kJ" },
          ]}
          resolution={<p><M>{"E_{a} = 100 - 30 = 70\\ \\text{kJ}"}</M> (pico − reagentes). <M>{"\\Delta H = 50 - 30 = +20\\ \\text{kJ}"}</M> (produtos − reagentes). Como ΔH &gt; 0, a reação é endotérmica.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Relação Eₐ e ΔH"
          statement={<p>Em uma reação, a Eₐ direta é 80 kJ e a Eₐ inversa é 50 kJ. O ΔH da reação direta é:</p>}
          options={[
            { letter: "a", text: "+30 kJ (endotérmica)", correct: true },
            { letter: "b", text: "−30 kJ (exotérmica)" },
            { letter: "c", text: "+130 kJ" },
            { letter: "d", text: "−130 kJ" },
          ]}
          resolution={<p><M>{"\\Delta H = E_{a(\\text{direta})} - E_{a(\\text{inversa})} = 80 - 50 = +30\\ \\text{kJ}"}</M>. Positivo → endotérmica (a Eₐ de subida é maior que a de descida).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Conservação de alimentos na geladeira"
          statement={<p>Guardamos alimentos na geladeira para que durem mais. Sob o ponto de vista cinético, o frio conserva porque:</p>}
          options={[
            { letter: "a", text: "Diminui a velocidade das reações de decomposição, reduzindo as colisões eficazes.", correct: true },
            { letter: "b", text: "Aumenta a energia de ativação das bactérias." },
            { letter: "c", text: "Elimina toda a água do alimento." },
            { letter: "d", text: "Acelera as reações de deterioração." },
          ]}
          resolution={<p>A baixa temperatura reduz a energia cinética das moléculas: a curva de Maxwell-Boltzmann se contrai e a fração com energia ≥ Eₐ cai. Há menos colisões eficazes por segundo, tornando lentas as reações de deterioração e a ação dos micro-organismos.</p>}
        />
      </section>
    </article>
  );
}
