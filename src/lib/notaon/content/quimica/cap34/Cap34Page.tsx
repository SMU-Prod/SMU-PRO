"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap34Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 34</span>
          <h1>Eletroquímica II: Pilhas, Potencial-padrão ΔE° e Corrosão</h1>
          <p>
            Toda vez que você liga o controle da TV, dá partida no carro ou usa o celular, uma reação de
            oxirredução <strong>espontânea</strong> está convertendo energia química em energia elétrica.
            Esse é o coração das <strong>pilhas</strong> (células galvânicas). Neste capítulo você vai
            entender onde ocorrem a oxidação e a redução, como os elétrons fluem, qual o papel da ponte
            salina, como calcular o potencial <M>{"\\Delta E^{\\circ}"}</M> a partir de uma tabela de
            potenciais-padrão e prever a espontaneidade — e ainda por que navios, oleodutos e carros
            enferrujam, e como a proteção catódica os defende.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que é uma Pilha (Célula Galvânica)?</h2>
        <p>
          Uma <strong>pilha</strong> é um dispositivo que converte <strong>energia química em energia
          elétrica</strong> por meio de uma reação de oxirredução <strong>espontânea</strong>. A ideia
          genial é separar fisicamente as duas semirreações (oxidação e redução) em dois compartimentos
          (semicélulas), obrigando os elétrons a passarem por um <strong>fio externo</strong> para ir de
          um lado ao outro — e é justamente esse fluxo ordenado de elétrons que constitui a corrente
          elétrica que usamos.
        </p>
        <div className="lesson-highlight">
          <p>
            Compare com a eletrólise (próximo capítulo): na <strong>pilha</strong> a reação é espontânea
            e <em>produz</em> energia elétrica (<M>{"\\Delta G < 0"}</M>); na <strong>eletrólise</strong> a
            reação é não espontânea e <em>consome</em> energia elétrica de uma fonte externa
            (<M>{"\\Delta G > 0"}</M>). São processos opostos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplo clássico</span>
        <h2>2. A Pilha de Daniell (Zn / Cu)</h2>
        <p>
          O exemplo histórico é a <strong>pilha de Daniell</strong> (1836): uma lâmina de zinco mergulhada
          em solução de <M>{"\\text{ZnSO}_4"}</M> e uma lâmina de cobre mergulhada em
          <M>{" \\text{CuSO}_4"}</M>, ligadas por um fio externo e por uma <strong>ponte salina</strong>. O
          zinco é mais reativo que o cobre, então se oxida e "empurra" elétrons pelo fio:
        </p>
        <div className="lesson-highlight">
          <ul>
            <li>
              <strong>Ânodo (polo −):</strong> ocorre a <strong>oxidação</strong>.{" "}
              <M>{"\\text{Zn}^{0} \\rightarrow \\text{Zn}^{2+} + 2e^{-}"}</M> — a lâmina de Zn é
              <strong> corroída</strong> (perde massa).
            </li>
            <li>
              <strong>Cátodo (polo +):</strong> ocorre a <strong>redução</strong>.{" "}
              <M>{"\\text{Cu}^{2+} + 2e^{-} \\rightarrow \\text{Cu}^{0}"}</M> — a lâmina de Cu
              <strong> ganha massa</strong> (deposita cobre metálico).
            </li>
            <li>
              <strong>Equação global:</strong>{" "}
              <M>{"\\text{Zn}^{0} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}^{0}"}</M>.
            </li>
          </ul>
          <p>
            <strong>Macete:</strong> as palavras combinam vogal-vogal e consoante-consoante:{" "}
            <strong>Â</strong>nodo / <strong>O</strong>xidação (vogais) e <strong>C</strong>átodo /
            <strong> R</strong>edução (consoantes). E lembre: o <strong>ânodo</strong> é o polo negativo na
            pilha (de onde os elétrons <em>saem</em>).
          </p>
        </div>
        <p>
          A figura abaixo monta a pilha de Daniell por inteiro. Repare no sentido do fluxo de elétrons (do
          Zn para o Cu pelo fio) e na função da ponte salina, que fecha o circuito permitindo o trânsito de
          íons entre as soluções.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 320" width="520" height="320" aria-label="Esquema da pilha de Daniell com fluxo de elétrons e ponte salina">
            {/* Fio externo e voltímetro */}
            <line x1="120" y1="70" x2="120" y2="40" stroke="#374151" strokeWidth="2.5"/>
            <line x1="400" y1="70" x2="400" y2="40" stroke="#374151" strokeWidth="2.5"/>
            <line x1="120" y1="40" x2="232" y2="40" stroke="#374151" strokeWidth="2.5"/>
            <line x1="288" y1="40" x2="400" y2="40" stroke="#374151" strokeWidth="2.5"/>
            <circle cx="260" cy="40" r="28" fill="#fff" stroke="#374151" strokeWidth="2"/>
            <text x="260" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#374151">V</text>

            {/* Fluxo de elétrons no fio: do ânodo (Zn) para o cátodo (Cu) */}
            <line x1="150" y1="40" x2="200" y2="40" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#dn_e)"/>
            <line x1="320" y1="40" x2="370" y2="40" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#dn_e)"/>
            <text x="260" y="92" textAnchor="middle" fontSize="11" fill="#1d4ed8">fluxo de e⁻  →</text>

            {/* Béquer esquerdo: Zn em ZnSO4 */}
            <path d="M70,120 L70,290 Q70,300 80,300 L160,300 Q170,300 170,290 L170,120" fill="#dbeafe" stroke="#374151" strokeWidth="2"/>
            <line x1="70" y1="140" x2="170" y2="140" stroke="#60a5fa" strokeWidth="1.5"/>
            {/* Lâmina de Zn (ânodo) */}
            <rect x="113" y="80" width="14" height="170" fill="#9ca3af" stroke="#374151" strokeWidth="1.5"/>
            <text x="120" y="74" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#374151">Zn</text>
            <text x="120" y="170" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">ÂNODO</text>
            <text x="120" y="184" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#dc2626">(−)</text>
            <text x="120" y="316" textAnchor="middle" fontSize="11" fill="#1e40af">ZnSO₄</text>
            <text x="120" y="232" textAnchor="middle" fontSize="9" fill="#374151">oxidação</text>

            {/* Béquer direito: Cu em CuSO4 */}
            <path d="M350,120 L350,290 Q350,300 360,300 L440,300 Q450,300 450,290 L450,120" fill="#fee2e2" stroke="#374151" strokeWidth="2"/>
            <line x1="350" y1="140" x2="450" y2="140" stroke="#f87171" strokeWidth="1.5"/>
            {/* Lâmina de Cu (cátodo) */}
            <rect x="393" y="80" width="14" height="170" fill="#d97706" stroke="#374151" strokeWidth="1.5"/>
            <text x="400" y="74" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#374151">Cu</text>
            <text x="400" y="170" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#059669">CÁTODO</text>
            <text x="400" y="184" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#059669">(+)</text>
            <text x="400" y="316" textAnchor="middle" fontSize="11" fill="#991b1b">CuSO₄</text>
            <text x="400" y="232" textAnchor="middle" fontSize="9" fill="#374151">redução</text>

            {/* Ponte salina */}
            <path d="M140,128 Q140,108 200,108 L320,108 Q380,108 380,128" fill="none" stroke="#7c3aed" strokeWidth="14" strokeLinecap="round" opacity="0.35"/>
            <path d="M140,128 Q140,108 200,108 L320,108 Q380,108 380,128" fill="none" stroke="#7c3aed" strokeWidth="2"/>
            <text x="260" y="124" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#5b21b6">ponte salina (KCl)</text>
            {/* Migração de íons na ponte: cátions vão ao cátodo, ânions ao ânodo */}
            <line x1="300" y1="116" x2="260" y2="116" stroke="#5b21b6" strokeWidth="1.8" markerEnd="url(#dn_ion)"/>
            <line x1="220" y1="116" x2="260" y2="116" stroke="#5b21b6" strokeWidth="1.8" markerEnd="url(#dn_ion)"/>
            <text x="318" y="119" fontSize="9" fill="#5b21b6">cátions</text>
            <text x="180" y="119" fontSize="9" fill="#5b21b6">ânions</text>

            <defs>
              <marker id="dn_e" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/></marker>
              <marker id="dn_ion" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#5b21b6"/></marker>
            </defs>
          </svg>
          <figcaption>
            Pilha de Daniell: o Zn (ânodo, polo −) se oxida e libera elétrons que percorrem o fio externo
            até o Cu (cátodo, polo +), onde íons Cu²⁺ se reduzem. A ponte salina mantém a neutralidade das
            soluções, levando cátions ao cátodo e ânions ao ânodo.
          </figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ponte salina</span>
        <h2>3. Para que serve a Ponte Salina?</h2>
        <p>
          À medida que a pilha funciona, a solução do <strong>ânodo</strong> acumula cargas positivas (íons
          <M>{" \\text{Zn}^{2+}"}</M> produzidos) e a solução do <strong>cátodo</strong> fica com excesso de
          carga negativa (íons <M>{"\\text{Cu}^{2+}"}</M> sendo consumidos, sobrando ânions). Sem correção, esse
          desequilíbrio de carga interromperia a reação quase imediatamente.
        </p>
        <p>
          A <strong>ponte salina</strong> (um tubo com solução de um sal inerte, como KCl ou
          <M>{" \\text{KNO}_3"}</M>) fecha o circuito internamente: seus <strong>cátions migram para o
          cátodo</strong> e seus <strong>ânions migram para o ânodo</strong>, neutralizando as soluções e
          permitindo que a pilha continue operando.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Notação</span>
        <h2>4. Notação Oficial da Pilha (IUPAC)</h2>
        <p>Por convenção escreve-se o ânodo à esquerda e o cátodo à direita:</p>
        <div className="math-block">
          <p><M block>{"\\underbrace{\\text{Zn}\\,|\\,\\text{Zn}^{2+}}_{\\text{ânodo (oxida)}}\\;\\|\\;\\underbrace{\\text{Cu}^{2+}\\,|\\,\\text{Cu}}_{\\text{cátodo (reduz)}}"}</M></p>
          <p>
            A barra simples (<M>{"|"}</M>) separa fases diferentes dentro de uma semicélula; a barra dupla
            (<M>{"\\|"}</M>) representa a ponte salina entre as duas semicélulas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Potenciais</span>
        <h2>5. Potencial-padrão de Redução (E°)</h2>
        <p>
          Cada semirreação tem uma <strong>tendência a se reduzir</strong>, medida pelo{" "}
          <strong>potencial-padrão de redução</strong> <M>{"E^{\\circ}"}</M> (em volts, a 25 °C, 1 mol/L,
          1 atm). Como não se pode medir o potencial absoluto de um único eletrodo, adota-se como referência
          o <strong>eletrodo-padrão de hidrogênio</strong>, ao qual se atribui{" "}
          <M>{"E^{\\circ} = 0{,}00\\ \\text{V}"}</M>.
        </p>
        <div className="lesson-highlight">
          <p>
            Quanto <strong>maior</strong> (mais positivo) o <M>{"E^{\\circ}"}</M> de redução, maior a
            tendência da espécie a <strong>se reduzir</strong> → ela será o <strong>cátodo</strong>. Quanto
            <strong> menor</strong> (mais negativo) o <M>{"E^{\\circ}"}</M>, maior a tendência a
            <strong> se oxidar</strong> → será o <strong>ânodo</strong>.
          </p>
        </div>
        <p>
          A tabela abaixo traz potenciais-padrão de redução de alguns metais comuns, ordenados do mais
          fácil de oxidar (topo) ao mais nobre (base):
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Semirreação de redução</th><th><M>{"E^{\\circ}"}</M> (V)</th><th>Tendência</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"\\text{Li}^{+} + e^{-} \\rightarrow \\text{Li}"}</M></td><td>−3,04</td><td>oxida-se muito (ânodo forte)</td></tr>
              <tr><td><M>{"\\text{K}^{+} + e^{-} \\rightarrow \\text{K}"}</M></td><td>−2,92</td><td>oxida-se fácil</td></tr>
              <tr><td><M>{"\\text{Zn}^{2+} + 2e^{-} \\rightarrow \\text{Zn}"}</M></td><td>−0,76</td><td>oxida-se (ânodo)</td></tr>
              <tr><td><M>{"\\text{Fe}^{2+} + 2e^{-} \\rightarrow \\text{Fe}"}</M></td><td>−0,44</td><td>oxida-se (enferruja)</td></tr>
              <tr><td><M>{"2\\text{H}^{+} + 2e^{-} \\rightarrow \\text{H}_2"}</M></td><td>0,00</td><td>referência</td></tr>
              <tr><td><M>{"\\text{Cu}^{2+} + 2e^{-} \\rightarrow \\text{Cu}"}</M></td><td>+0,34</td><td>reduz-se (cátodo)</td></tr>
              <tr><td><M>{"\\text{Ag}^{+} + e^{-} \\rightarrow \\text{Ag}"}</M></td><td>+0,80</td><td>reduz-se fácil</td></tr>
              <tr><td><M>{"\\text{Au}^{3+} + 3e^{-} \\rightarrow \\text{Au}"}</M></td><td>+1,50</td><td>reduz-se muito (metal nobre)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cálculo</span>
        <h2>6. Calculando ΔE° e a Espontaneidade</h2>
        <p>
          A força eletromotriz da pilha (ddp) é a diferença entre os potenciais de redução do cátodo e do
          ânodo:
        </p>
        <div className="math-block">
          <h3>Fórmula da diferença de potencial</h3>
          <p><M block>{"\\Delta E^{\\circ} = E^{\\circ}_{\\text{cátodo}} - E^{\\circ}_{\\text{ânodo}}"}</M></p>
          <p>
            Usando os potenciais de <strong>redução</strong>, o cátodo é sempre o de <strong>maior</strong>{" "}
            <M>{"E^{\\circ}"}</M>. Equivalentemente:{" "}
            <M>{"\\Delta E^{\\circ} = E^{\\circ}_{\\text{red, maior}} - E^{\\circ}_{\\text{red, menor}}"}</M>,
            o que garante <M>{"\\Delta E^{\\circ} > 0"}</M> para uma pilha real.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo resolvido — Pilha de Daniell</h3>
          <p>
            Dados <M>{"E^{\\circ}(\\text{Cu}^{2+}/\\text{Cu}) = +0{,}34\\ \\text{V}"}</M> e{" "}
            <M>{"E^{\\circ}(\\text{Zn}^{2+}/\\text{Zn}) = -0{,}76\\ \\text{V}"}</M>. O cobre tem o maior
            <M>{" E^{\\circ}"}</M>, logo é o cátodo; o zinco é o ânodo:
          </p>
          <p><M block>{"\\Delta E^{\\circ} = E^{\\circ}_{\\text{cátodo}} - E^{\\circ}_{\\text{ânodo}} = (+0{,}34) - (-0{,}76) = +1{,}10\\ \\text{V}"}</M></p>
          <p>
            O valor positivo confirma que a reação é <strong>espontânea</strong> — a pilha de Daniell
            fornece cerca de <strong>1,10 V</strong>.
          </p>
        </div>
        <p>
          A relação com a energia livre conecta tudo: <M>{"\\Delta G = -n F \\Delta E"}</M>, onde{" "}
          <M>{"n"}</M> é o número de mols de elétrons trocados e{" "}
          <M>{"F = 96\\,500\\ \\text{C/mol}"}</M> (constante de Faraday). Como{" "}
          <M>{"\\Delta E^{\\circ} > 0"}</M> implica <M>{"\\Delta G < 0"}</M>, ddp positiva = reação
          espontânea = pilha que funciona.
        </p>
        <div className="lesson-highlight">
          <ul>
            <li><M>{"\\Delta E^{\\circ} > 0"}</M> → <M>{"\\Delta G < 0"}</M> → reação <strong>espontânea</strong> (funciona como pilha).</li>
            <li><M>{"\\Delta E^{\\circ} < 0"}</M> → <M>{"\\Delta G > 0"}</M> → <strong>não espontânea</strong> (só por eletrólise).</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Reatividade</span>
        <h2>7. Fila de Reatividade dos Metais</h2>
        <p>
          A tabela de <M>{"E^{\\circ}"}</M> equivale à <strong>fila de reatividade</strong>: metais com
          menor <M>{"E^{\\circ}"}</M> de redução são mais reativos (oxidam-se com mais facilidade) e
          atuam como ânodo:
        </p>
        <div className="lesson-highlight">
          <p><M block>{"\\text{K} > \\text{Ca} > \\text{Na} > \\text{Mg} > \\text{Al} > \\text{Zn} > \\text{Fe} > \\text{H} > \\text{Cu} > \\text{Ag} > \\text{Au}"}</M></p>
          <p>
            O metal mais reativo (à esquerda) <strong>desloca</strong> o menos reativo de seus compostos e
            tende a se oxidar. Por isso o Zn protege o Fe, e o Au (mais nobre, à direita) praticamente não
            corrói.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>8. Pilha × Eletrólise</h2>
        <p>
          Para não confundir os dois processos eletroquímicos (a eletrólise vem no próximo capítulo),
          compare os polos e a espontaneidade:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Critério</th><th>Pilha (galvânica)</th><th>Eletrólise</th></tr>
            </thead>
            <tbody>
              <tr><td>Reação</td><td>Espontânea (<M>{"\\Delta G < 0"}</M>)</td><td>Não espontânea (<M>{"\\Delta G > 0"}</M>)</td></tr>
              <tr><td>Conversão de energia</td><td>Química → elétrica</td><td>Elétrica → química</td></tr>
              <tr><td>ΔE°</td><td>Positivo</td><td>Negativo (precisa de fonte)</td></tr>
              <tr><td>Ânodo (oxidação)</td><td>Polo negativo (−)</td><td>Polo positivo (+)</td></tr>
              <tr><td>Cátodo (redução)</td><td>Polo positivo (+)</td><td>Polo negativo (−)</td></tr>
              <tr><td>Exemplo</td><td>Pilha de Daniell, bateria</td><td>Eletrólise da água, galvanoplastia</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Atenção:</strong> em ambos, ânodo = oxidação e cátodo = redução. O que <em>inverte</em>{" "}
            entre pilha e eletrólise é o <strong>sinal dos polos</strong>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicação</span>
        <h2>9. Corrosão do Ferro e Proteção Catódica</h2>
        <p>
          A <strong>corrosão</strong> é uma oxidação espontânea e indesejada de metais. No ferro, em
          presença de água e oxigênio, forma-se a <strong>ferrugem</strong> (óxido de ferro hidratado). O
          processo é, em essência, uma pilha em curto-circuito sobre a própria peça: regiões diferentes do
          metal funcionam como ânodo e cátodo.
        </p>
        <div className="math-block">
          <h3>Reações da corrosão do ferro</h3>
          <p><M block>{"\\text{Ânodo:}\\quad \\text{Fe} \\rightarrow \\text{Fe}^{2+} + 2e^{-}"}</M></p>
          <p><M block>{"\\text{Cátodo:}\\quad \\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^{-} \\rightarrow 4\\,\\text{OH}^{-}"}</M></p>
          <p><M block>{"\\text{Global:}\\quad 4\\,\\text{Fe} + 3\\,\\text{O}_2 \\rightarrow 2\\,\\text{Fe}_2\\text{O}_3 \\;(\\text{ferrugem})"}</M></p>
        </div>
        <p>
          A <strong>proteção catódica com metal de sacrifício</strong> resolve o problema ao conectar ao
          ferro um metal <em>mais reativo</em> (Zn ou Mg, de menor <M>{"E^{\\circ}"}</M>). Esse metal se
          torna o ânodo e se oxida no lugar do ferro, que passa a atuar como cátodo e fica preservado. É o
          que se faz em cascos de navios, oleodutos e tanques enterrados. A figura ilustra o princípio:
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 300" width="500" height="300" aria-label="Proteção catódica do ferro com zinco como metal de sacrifício">
            {/* Solo / meio corrosivo */}
            <rect x="30" y="150" width="440" height="120" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
            <text x="250" y="288" textAnchor="middle" fontSize="11" fill="#92400e">meio corrosivo (solo úmido / água do mar)</text>

            {/* Tubulação de ferro protegida */}
            <rect x="120" y="185" width="260" height="46" rx="10" fill="#9ca3af" stroke="#374151" strokeWidth="2"/>
            <text x="250" y="213" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#374151">FERRO (cátodo — protegido)</text>
            <text x="250" y="170" textAnchor="middle" fontSize="10" fill="#059669">não corrói: recebe e⁻</text>

            {/* Bloco de zinco (ânodo de sacrifício) */}
            <rect x="200" y="100" width="100" height="42" rx="6" fill="#60a5fa" stroke="#1e40af" strokeWidth="2"/>
            <text x="250" y="120" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e3a8a">ZINCO</text>
            <text x="250" y="135" textAnchor="middle" fontSize="9" fill="#1e3a8a">ânodo de sacrifício</text>
            <text x="250" y="92" textAnchor="middle" fontSize="10" fill="#dc2626">Zn → Zn²⁺ + 2e⁻ (oxida)</text>

            {/* Fio conectando Zn ao Fe */}
            <line x1="250" y1="142" x2="250" y2="185" stroke="#374151" strokeWidth="2.5"/>
            {/* Fluxo de elétrons do Zn (ânodo) para o Fe (cátodo) */}
            <line x1="265" y1="150" x2="265" y2="180" stroke="#2563eb" strokeWidth="2.2" markerEnd="url(#cp_e)"/>
            <text x="300" y="168" fontSize="10" fill="#1d4ed8">e⁻ →</text>

            {/* Setas de oxidação saindo do zinco */}
            <line x1="205" y1="118" x2="175" y2="105" stroke="#dc2626" strokeWidth="1.6" markerEnd="url(#cp_ion)"/>
            <line x1="295" y1="118" x2="325" y2="105" stroke="#dc2626" strokeWidth="1.6" markerEnd="url(#cp_ion)"/>

            <defs>
              <marker id="cp_e" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#2563eb"/></marker>
              <marker id="cp_ion" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/></marker>
            </defs>
          </svg>
          <figcaption>
            Proteção catódica: o zinco (mais reativo, menor E°) é o ânodo de sacrifício — oxida-se e envia
            elétrons ao ferro, que vira cátodo e não corrói. O bloco de Zn é trocado periodicamente.
          </figcaption>
        </figure>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🛡️</span>
            <h3>Metal de sacrifício</h3>
            <p>Liga-se um metal mais reativo (Zn, Mg) que se oxida no lugar do ferro — proteção catódica.</p>
          </div>
          <div className="lesson-card">
            <span>🪙</span>
            <h3>Galvanização</h3>
            <p>Recobre-se o ferro com uma camada de zinco (aço galvanizado): o Zn protege mesmo se arranhado.</p>
          </div>
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Barreira física</h3>
            <p>Pintura, esmalte, cromagem ou óleo isolam o metal do contato com ar e umidade.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔋</span>
            <h3>Pilha</h3>
            <p>Redox espontânea → corrente elétrica (<M>{"\\Delta G < 0"}</M>).</p>
          </div>
          <div className="math-card">
            <span>➖</span>
            <h3>Ânodo</h3>
            <p>Oxidação; polo negativo na pilha; eletrodo corrói.</p>
          </div>
          <div className="math-card">
            <span>➕</span>
            <h3>Cátodo</h3>
            <p>Redução; polo positivo na pilha; eletrodo ganha massa.</p>
          </div>
          <div className="math-card">
            <span>📐</span>
            <h3>ΔE°</h3>
            <p><M>{"E^{\\circ}_{\\text{cátodo}} - E^{\\circ}_{\\text{ânodo}}"}</M>; positivo = espontânea.</p>
          </div>
          <div className="math-card">
            <span>🌉</span>
            <h3>Ponte salina</h3>
            <p>Fecha o circuito e mantém as soluções neutras.</p>
          </div>
          <div className="math-card">
            <span>🛡️</span>
            <h3>Corrosão</h3>
            <p>Oxidação indesejada; combate-se com metal de sacrifício, galvanização e pintura.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Onde ocorre a oxidação"
          statement={<p>Em uma pilha (célula galvânica), a oxidação ocorre sempre no:</p>}
          options={[
            { letter: "a", text: "Ânodo, que é o polo negativo", correct: true },
            { letter: "b", text: "Cátodo, que é o polo negativo" },
            { letter: "c", text: "Fio externo" },
            { letter: "d", text: "Interior da ponte salina" },
          ]}
          resolution={<p>No ânodo ocorre a oxidação (perda de elétrons); no cátodo, a redução. Na pilha, o ânodo é o <strong>polo negativo</strong> — é dele que os elétrons saem pelo fio.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Função da ponte salina"
          statement={<p>A ponte salina, numa pilha, tem a função principal de:</p>}
          options={[
            { letter: "a", text: "Manter a neutralidade elétrica das soluções, fechando o circuito interno", correct: true },
            { letter: "b", text: "Conduzir os elétrons de uma semicélula à outra" },
            { letter: "c", text: "Aumentar a massa do cátodo" },
            { letter: "d", text: "Impedir qualquer movimento de íons" },
          ]}
          resolution={<p>Os elétrons passam pelo fio externo, não pela ponte. A ponte salina conduz <strong>íons</strong>: cátions migram ao cátodo e ânions ao ânodo, neutralizando as soluções e permitindo que a pilha continue funcionando.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Cálculo de ΔE° (Daniell)"
          statement={<p>Dados <M>{"E^{\\circ}(\\text{Cu}^{2+}/\\text{Cu}) = +0{,}34\\ \\text{V}"}</M> e <M>{"E^{\\circ}(\\text{Zn}^{2+}/\\text{Zn}) = -0{,}76\\ \\text{V}"}</M>, a diferença de potencial-padrão da pilha de Daniell é:</p>}
          options={[
            { letter: "a", text: "+1,10 V", correct: true },
            { letter: "b", text: "−1,10 V" },
            { letter: "c", text: "+0,42 V" },
            { letter: "d", text: "−0,42 V" },
          ]}
          resolution={<p>O cátodo é o de maior E° (Cu). <M>{"\\Delta E^{\\circ} = E^{\\circ}_{\\text{cátodo}} - E^{\\circ}_{\\text{ânodo}} = (+0{,}34) - (-0{,}76) = +1{,}10\\ \\text{V}"}</M>. Positivo → espontânea.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Quem é o ânodo"
          statement={<p>Numa pilha montada entre dois metais, atua como ânodo o metal que:</p>}
          options={[
            { letter: "a", text: "Tem o menor potencial de redução (maior tendência a se oxidar)", correct: true },
            { letter: "b", text: "Tem o maior potencial de redução" },
            { letter: "c", text: "É o menos reativo" },
            { letter: "d", text: "É sempre o cobre" },
          ]}
          resolution={<p>O ânodo é o eletrodo que se oxida — portanto o metal de <strong>menor</strong> E° de redução (mais reativo). O metal de maior E° reduz-se e será o cátodo.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Pilha Zn / Ag e espontaneidade"
          statement={<p>Monta-se uma pilha com os eletrodos <M>{"\\text{Zn}^{2+}/\\text{Zn}\\ (E^{\\circ} = -0{,}76\\ \\text{V})"}</M> e <M>{"\\text{Ag}^{+}/\\text{Ag}\\ (E^{\\circ} = +0{,}80\\ \\text{V})"}</M>. O cátodo e o valor de ΔE° são, respectivamente:</p>}
          options={[
            { letter: "a", text: "Prata (Ag) e +1,56 V — espontânea", correct: true },
            { letter: "b", text: "Zinco (Zn) e +1,56 V" },
            { letter: "c", text: "Prata (Ag) e +0,04 V" },
            { letter: "d", text: "Zinco (Zn) e −1,56 V" },
          ]}
          resolution={<p>A prata tem o maior E° (+0,80 V), logo é o cátodo (reduz-se); o zinco é o ânodo. <M>{"\\Delta E^{\\circ} = (+0{,}80) - (-0{,}76) = +1{,}56\\ \\text{V}"}</M>. Como é positivo, a reação é espontânea e a pilha funciona.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Proteção de cascos de navios"
          statement={<p>Em cascos de navios de aço, fixam-se blocos de zinco ou magnésio que se desgastam com o tempo, protegendo o ferro contra a corrosão pela água do mar. Essa técnica (proteção catódica com metal de sacrifício) funciona porque:</p>}
          options={[
            { letter: "a", text: "O zinco/magnésio, mais reativos, oxidam-se preferencialmente e o ferro atua como cátodo, ficando preservado.", correct: true },
            { letter: "b", text: "O zinco apenas impede fisicamente a entrada de água, sem reagir." },
            { letter: "c", text: "O ferro passa a ser o ânodo e se oxida mais rápido." },
            { letter: "d", text: "O zinco aumenta a reatividade do ferro, acelerando a corrosão." },
          ]}
          resolution={<p>Como o zinco e o magnésio têm <strong>menor</strong> potencial de redução (são mais reativos que o ferro), funcionam como ânodos de sacrifício: oxidam-se no lugar do ferro. O ferro, recebendo elétrons, atua como cátodo e fica protegido — é a proteção catódica. Os blocos são trocados periodicamente.</p>}
        />
      </section>
    </article>
  );
}
