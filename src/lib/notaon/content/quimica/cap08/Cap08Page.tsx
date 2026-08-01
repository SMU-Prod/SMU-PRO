"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap08Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 8</span>
          <h1>Propriedades Periódicas: Raio, Ionização, Afinidade e Eletronegatividade</h1>
          <p>
            Por que o flúor é o elemento mais "ganancioso" por elétrons e o frâncio o mais generoso?
            Por que o sódio metálico explode na água, mas o cloro a deixa potável? As propriedades
            periódicas explicam tudo isso a partir de duas forças em disputa dentro do átomo: a{" "}
            <strong>atração do núcleo</strong> sobre os elétrons e a <strong>distância</strong> a que
            esses elétrons se encontram. Dominar as "setas" da tabela periódica é acertar, na hora,
            qualquer comparação entre elementos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que são Propriedades Periódicas?</h2>
        <p>
          São propriedades cujos valores variam de forma <strong>regular e previsível</strong> conforme o
          número atômico (Z) aumenta, <strong>repetindo-se a cada período</strong> da tabela. Foi
          justamente essa periodicidade que Mendeleev percebeu em 1869 — e que hoje organizamos em
          colunas (famílias) e linhas (períodos). Quase tudo decorre de uma <strong>cabo de guerra</strong>{" "}
          entre dois efeitos opostos:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧲</span>
            <h3>Carga nuclear efetiva (Z<sub>ef</sub>)</h3>
            <p>
              É a atração "líquida" que o núcleo exerce sobre o elétron de valência, já descontada a
              repulsão dos elétrons internos. Quanto maior Z<sub>ef</sub>, mais o átomo se contrai e mais
              difícil é arrancar seus elétrons.
            </p>
          </div>
          <div className="lesson-card">
            <span>🧅</span>
            <h3>Número de camadas e blindagem</h3>
            <p>
              Cada camada interna "blinda" (escudo eletrônico) o elétron de valência da atração nuclear.
              Mais camadas → elétrons de valência mais distantes e mais frouxamente presos → átomo maior.
            </p>
          </div>
        </div>
        <p>
          A regra de ouro: <strong>no período</strong> (mesma linha), o número de camadas é constante e
          quem manda é a carga nuclear crescente; <strong>na família</strong> (mesma coluna), o que
          domina é o aumento do número de camadas. Toda a previsão de tendências sai dessa disputa.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">As setas</span>
        <h2>2. O Mapa das Tendências na Tabela</h2>
        <p>
          Antes de detalhar cada propriedade, vale fixar o "mapa mental". O raio atômico cresce em
          direção ao <strong>canto inferior esquerdo</strong> (mais camadas, menor atração relativa);
          energia de ionização, afinidade eletrônica e eletronegatividade crescem em direção ao{" "}
          <strong>canto superior direito</strong> (perto do flúor). O caráter metálico segue o raio.
          Os dois grupos de setas são exatamente opostos.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 320" width="480" height="320" aria-label="Tabela periódica esquemática com setas das tendências periódicas">
            {/* contorno simplificado da tabela */}
            <rect x="70" y="60" width="340" height="200" fill="#f8fafc" stroke="#374151" strokeWidth="2"/>
            {/* algumas divisórias de células para sugerir grade */}
            <line x1="70" y1="110" x2="410" y2="110" stroke="#cbd5e1" strokeWidth="1"/>
            <line x1="70" y1="160" x2="410" y2="160" stroke="#cbd5e1" strokeWidth="1"/>
            <line x1="70" y1="210" x2="410" y2="210" stroke="#cbd5e1" strokeWidth="1"/>
            <line x1="155" y1="60" x2="155" y2="260" stroke="#cbd5e1" strokeWidth="1"/>
            <line x1="240" y1="60" x2="240" y2="260" stroke="#cbd5e1" strokeWidth="1"/>
            <line x1="325" y1="60" x2="325" y2="260" stroke="#cbd5e1" strokeWidth="1"/>

            {/* destaque cantos */}
            <rect x="72" y="212" width="40" height="46" fill="#d1fae5" stroke="#059669" strokeWidth="1.5"/>
            <text x="92" y="240" textAnchor="middle" fontSize="9" fill="#065f46">Fr</text>
            <rect x="368" y="62" width="40" height="46" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5"/>
            <text x="388" y="90" textAnchor="middle" fontSize="9" fill="#991b1b">F</text>

            {/* seta período: EI/AE/eletronegatividade aumentam para a direita */}
            <line x1="90" y1="40" x2="395" y2="40" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#p8a)"/>
            <text x="240" y="30" textAnchor="middle" fontSize="11" fill="#b91c1c">EI, AE, eletronegatividade aumentam →</text>

            {/* seta grupo: raio e caráter metálico aumentam para baixo */}
            <line x1="40" y1="75" x2="40" y2="250" stroke="#059669" strokeWidth="2.5" markerEnd="url(#p8b)"/>
            <text x="34" y="165" textAnchor="middle" fontSize="11" fill="#065f46" transform="rotate(-90,34,165)">raio e caráter metálico aumentam ↓</text>

            {/* seta diagonal direção do flúor */}
            <line x1="120" y1="235" x2="375" y2="85" stroke="#7c3aed" strokeWidth="2" strokeDasharray="6,4" markerEnd="url(#p8c)"/>
            <text x="250" y="180" textAnchor="middle" fontSize="10" fill="#5b21b6" transform="rotate(-30,250,180)">"tudo cresce rumo ao F"</text>

            {/* legenda raio para baixo-esquerda */}
            <text x="120" y="290" fontSize="10" fill="#065f46">↙ raio máximo (metais, base esquerda)</text>
            <text x="240" y="306" fontSize="10" fill="#b91c1c">↗ não-metais reativos (topo direita)</text>

            <defs>
              <marker id="p8a" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#dc2626"/></marker>
              <marker id="p8b" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#059669"/></marker>
              <marker id="p8c" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#7c3aed"/></marker>
            </defs>
          </svg>
          <figcaption>
            Raio atômico e caráter metálico crescem ↓ e ←; energia de ionização, afinidade eletrônica e
            eletronegatividade crescem ↑ e →. O flúor (F) é o "ponto quente" das três últimas.
          </figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>O que mede</th><th>No período (→)</th><th>Na família (↓)</th><th>Unidade</th></tr>
            </thead>
            <tbody>
              <tr><td>Raio atômico</td><td>Tamanho do átomo</td><td>Diminui</td><td>Aumenta</td><td>pm (picômetro)</td></tr>
              <tr><td>Energia de ionização</td><td>Energia p/ <strong>retirar</strong> elétron</td><td>Aumenta</td><td>Diminui</td><td>kJ/mol</td></tr>
              <tr><td>Afinidade eletrônica</td><td>Energia ao <strong>receber</strong> elétron</td><td>Aumenta (módulo)</td><td>Diminui (módulo)</td><td>kJ/mol</td></tr>
              <tr><td>Eletronegatividade</td><td>Atração de elétrons na ligação</td><td>Aumenta</td><td>Diminui</td><td>adimensional (Pauling)</td></tr>
              <tr><td>Caráter metálico</td><td>Tendência a <strong>perder</strong> elétron</td><td>Diminui</td><td>Aumenta</td><td>qualitativo</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tamanho</span>
        <h2>3. Raio Atômico: Blindagem × Carga Nuclear</h2>
        <p>
          O <strong>raio atômico</strong> é, de forma simplificada, a distância do núcleo até a camada de
          valência (mede-se, na prática, como metade da distância entre dois núcleos ligados). As duas
          tendências decorrem direto do cabo de guerra:
        </p>
        <div className="lesson-highlight">
          <ul>
            <li>
              <strong>Na família (aumenta ↓):</strong> cada período abaixo acrescenta uma camada
              eletrônica inteira. Mesmo com mais prótons, os elétrons internos blindam o núcleo, e a
              valência fica mais distante. O fator "número de camadas" vence.
            </li>
            <li>
              <strong>No período (diminui →):</strong> o número de camadas não muda, mas Z cresce de um em
              um. A carga nuclear efetiva aumenta e "puxa" toda a eletrosfera para dentro, contraindo o
              átomo. Do Li ao Ne, o raio cai quase pela metade.
            </li>
          </ul>
        </div>
        <p>
          Veja como o raio cai ao longo do 2º período (mesma camada de valência, Z<sub>ef</sub> crescente)
          e como dá um salto ao descer para o 3º período (nova camada):
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Elemento</th><th>Z</th><th>Período</th><th>Raio atômico aprox. (pm)</th></tr>
            </thead>
            <tbody>
              <tr><td>Li</td><td>3</td><td>2º</td><td>152</td></tr>
              <tr><td>Be</td><td>4</td><td>2º</td><td>112</td></tr>
              <tr><td>B</td><td>5</td><td>2º</td><td>85</td></tr>
              <tr><td>C</td><td>6</td><td>2º</td><td>77</td></tr>
              <tr><td>N</td><td>7</td><td>2º</td><td>70</td></tr>
              <tr><td>O</td><td>8</td><td>2º</td><td>66</td></tr>
              <tr><td>F</td><td>9</td><td>2º</td><td>64</td></tr>
              <tr><td>Na</td><td>11</td><td>3º</td><td>186</td></tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <h3>Raio iônico: cátion encolhe, ânion incha</h3>
          <ul>
            <li>
              <strong>Cátion menor que o átomo neutro:</strong> ao perder elétrons, muitas vezes some uma
              camada inteira, e os prótons restantes atraem com mais força menos elétrons. Logo{" "}
              <M>{"r(\\text{Na}^{+}) < r(\\text{Na})"}</M>.
            </li>
            <li>
              <strong>Ânion maior que o átomo neutro:</strong> ao ganhar elétrons, a repulsão eletrônica
              aumenta e a eletrosfera se expande: <M>{"r(\\text{Cl}^{-}) > r(\\text{Cl})"}</M>.
            </li>
          </ul>
          <p>
            Em uma <strong>série isoeletrônica</strong> (mesmo número de elétrons), quem tem{" "}
            <strong>maior Z</strong> tem <strong>menor raio</strong> — mais prótons puxando o mesmo número
            de elétrons:
          </p>
          <p><M block>{"r(\\text{N}^{3-}) > r(\\text{O}^{2-}) > r(\\text{F}^{-}) > r(\\text{Na}^{+}) > r(\\text{Mg}^{2+})"}</M></p>
          <p>Todos têm 10 elétrons; o que muda é a carga nuclear que os comprime.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Remover elétrons</span>
        <h2>4. Energia de Ionização (EI): a Resistência do Átomo</h2>
        <p>
          A <strong>energia (ou potencial) de ionização</strong> é a energia mínima necessária para{" "}
          <strong>retirar</strong> o elétron mais externo de um átomo isolado, no estado gasoso e
          fundamental: <M>{"X_{(g)} + \\text{energia} \\rightarrow X^{+}_{(g)} + e^{-}"}</M>. Quanto{" "}
          <strong>menor o raio</strong> (elétron mais perto e mais preso pelo núcleo), <strong>maior a
          EI</strong>. Por isso a EI varia de modo praticamente <em>inverso</em> ao raio: cresce ↑ e →.
        </p>
        <p>
          Existem 1ª, 2ª, 3ª... energias de ionização, sempre <strong>crescentes</strong>:{" "}
          <M>{"EI_1 < EI_2 < EI_3"}</M>. Cada elétron retirado deixa o íon mais positivo, e atrair os
          restantes fica mais difícil. Saltos bruscos revelam mudança de camada — por exemplo, no sódio
          (<M>{"1s^2\\,2s^2\\,2p^6\\,3s^1"}</M>) a <M>{"EI_1"}</M> é baixa (tira o único elétron da 3ª
          camada), mas a <M>{"EI_2"}</M> dispara, pois exige invadir o caroço estável de gás nobre.
        </p>
        <p>
          Ao plotar a 1ª energia de ionização contra o número atômico, surge um padrão{" "}
          <strong>dente de serra</strong>: <strong>picos</strong> nos gases nobres (camada completa,
          dificílimo arrancar elétron) e <strong>vales</strong> nos metais alcalinos (um único elétron
          frouxo na camada de valência).
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 300" width="500" height="300" aria-label="Gráfico da primeira energia de ionização em função do número atômico">
            {/* eixos */}
            <line x1="48" y1="250" x2="480" y2="250" stroke="#374151" strokeWidth="2"/>
            <line x1="48" y1="20" x2="48" y2="250" stroke="#374151" strokeWidth="2"/>
            <text x="262" y="285" textAnchor="middle" fontSize="12" fill="#374151">Número atômico (Z)</text>
            <text x="16" y="135" textAnchor="middle" fontSize="12" fill="#374151" transform="rotate(-90,16,135)">1ª Energia de ionização (kJ/mol)</text>

            {/* marcas eixo Y */}
            <text x="42" y="234" textAnchor="end" fontSize="9" fill="#6b7280">500</text>
            <text x="42" y="160" textAnchor="end" fontSize="9" fill="#6b7280">1500</text>
            <text x="42" y="60" textAnchor="end" fontSize="9" fill="#6b7280">2500</text>
            <line x1="44" y1="230" x2="48" y2="230" stroke="#374151" strokeWidth="1"/>
            <line x1="44" y1="156" x2="48" y2="156" stroke="#374151" strokeWidth="1"/>
            <line x1="44" y1="56" x2="48" y2="56" stroke="#374151" strokeWidth="1"/>

            {/* curva dente de serra: H pico, Li vale, sobe ate Ne pico, Na vale, sobe ate Ar pico, K vale */}
            <polyline
              points="60,140 90,225 110,205 130,210 150,185 168,175 186,195 204,160 222,45 248,235 268,210 286,205 304,200 322,182 340,178 358,150 376,75 410,238 430,210"
              fill="none" stroke="#2563eb" strokeWidth="2.5"/>

            {/* pontos e rótulos dos extremos */}
            <circle cx="60" cy="140" r="3" fill="#7c3aed"/><text x="58" y="132" fontSize="9" fill="#5b21b6">H</text>
            <circle cx="222" cy="45" r="3.5" fill="#dc2626"/><text x="216" y="40" fontSize="9" fill="#b91c1c">Ne</text>
            <circle cx="376" cy="75" r="3.5" fill="#dc2626"/><text x="370" y="70" fontSize="9" fill="#b91c1c">Ar</text>
            <circle cx="90" cy="225" r="3.5" fill="#059669"/><text x="86" y="244" fontSize="9" fill="#065f46">Li</text>
            <circle cx="248" cy="235" r="3.5" fill="#059669"/><text x="242" y="248" fontSize="9" fill="#065f46">Na</text>
            <circle cx="410" cy="238" r="3.5" fill="#059669"/><text x="405" y="248" fontSize="9" fill="#065f46">K</text>

            <text x="300" y="40" fontSize="10" fill="#b91c1c">picos = gases nobres</text>
            <text x="300" y="220" fontSize="10" fill="#065f46">vales = metais alcalinos</text>
          </svg>
          <figcaption>
            Padrão dente-de-serra: dentro de cada período a EI cresce até o gás nobre (pico) e despenca no
            alcalino seguinte (vale), pois começa uma nova camada frouxamente ligada.
          </figcaption>
        </figure>
        <div className="lesson-highlight">
          <p>
            <strong>Pequenas irregularidades:</strong> existem quedas locais (ex.: <M>{"EI(\\text{B}) < EI(\\text{Be})"}</M> e{" "}
            <M>{"EI(\\text{O}) < EI(\\text{N})"}</M>) explicadas por subníveis cheios/semicheios mais
            estáveis. A tendência geral, porém, é sempre crescer ↑ e →.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ganhar elétrons</span>
        <h2>5. Afinidade Eletrônica (AE)</h2>
        <p>
          A <strong>afinidade eletrônica</strong> é a energia <strong>liberada</strong> quando um átomo
          isolado no estado gasoso <strong>recebe</strong> um elétron:{" "}
          <M>{"X_{(g)} + e^{-} \\rightarrow X^{-}_{(g)} + \\text{energia}"}</M>. Quanto mais energia é
          liberada, maior a "vontade" do átomo de capturar o elétron. Átomos pequenos e a um elétron de
          completar o octeto liberam muitíssima energia — é o caso dos <strong>halogênios</strong> (grupo
          17), que detêm as maiores afinidades eletrônicas da tabela.
        </p>
        <div className="lesson-highlight">
          <p>
            <strong>Tendência:</strong> em módulo, a AE aumenta ↑ e → (mesma direção da EI e da
            eletronegatividade). Os gases nobres têm AE praticamente nula ou desfavorável: já possuem o
            octeto completo e não "querem" mais elétrons. O cloro, curiosamente, libera ainda mais energia
            que o flúor, pois neste último o átomo é tão pequeno que a repulsão entre os elétrons reduz um
            pouco o ganho — mas isso é detalhe; a regra geral vale.
          </p>
        </div>
        <p>
          Não confunda: <strong>EI</strong> mede a dificuldade de <em>perder</em> elétron;{" "}
          <strong>AE</strong> mede a tendência de <em>ganhar</em> elétron. Ambas crescem em direção ao
          flúor, mas descrevem processos opostos.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Atrair em ligações</span>
        <h2>6. Eletronegatividade: a Escala de Pauling</h2>
        <p>
          A <strong>eletronegatividade</strong> é a tendência de um átomo de <strong>atrair para si os
          elétrons de uma ligação química</strong>. Diferente da EI e da AE, ela não é medida em um átomo
          isolado: só faz sentido <em>dentro de uma ligação</em>. Linus Pauling criou uma escala relativa
          (adimensional) em que o flúor, o mais eletronegativo, recebe o valor máximo de 4,0.
        </p>
        <p>
          A eletronegatividade é o que decide a <strong>polaridade</strong> das ligações e moléculas:
          quanto maior a diferença de eletronegatividade entre dois átomos, mais a ligação tende ao
          caráter iônico. Numa molécula de água, por exemplo, o oxigênio (3,5) puxa os elétrons mais do
          que o hidrogênio (2,1), gerando um polo negativo no O — a origem das ligações de hidrogênio.
        </p>
        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg viewBox="0 0 320 220" width="320" height="220" aria-label="Barras de eletronegatividade de Pauling de alguns elementos">
              <line x1="40" y1="180" x2="305" y2="180" stroke="#374151" strokeWidth="2"/>
              <line x1="40" y1="20" x2="40" y2="180" stroke="#374151" strokeWidth="2"/>
              <text x="20" y="100" textAnchor="middle" fontSize="10" fill="#374151" transform="rotate(-90,20,100)">Eletronegatividade</text>

              {/* barras: H 2.1, C 2.5, N 3.0, Cl 3.0, O 3.5, F 4.0 -> escala: y = 180 - val*36 */}
              <rect x="55" y="104" width="28" height="76" fill="#dbeafe" stroke="#2563eb"/><text x="69" y="195" textAnchor="middle" fontSize="9" fill="#374151">H</text><text x="69" y="98" textAnchor="middle" fontSize="9" fill="#1e40af">2,1</text>
              <rect x="93" y="90" width="28" height="90" fill="#dbeafe" stroke="#2563eb"/><text x="107" y="195" textAnchor="middle" fontSize="9" fill="#374151">C</text><text x="107" y="84" textAnchor="middle" fontSize="9" fill="#1e40af">2,5</text>
              <rect x="131" y="72" width="28" height="108" fill="#dbeafe" stroke="#2563eb"/><text x="145" y="195" textAnchor="middle" fontSize="9" fill="#374151">N</text><text x="145" y="66" textAnchor="middle" fontSize="9" fill="#1e40af">3,0</text>
              <rect x="169" y="72" width="28" height="108" fill="#dbeafe" stroke="#2563eb"/><text x="183" y="195" textAnchor="middle" fontSize="9" fill="#374151">Cl</text><text x="183" y="66" textAnchor="middle" fontSize="9" fill="#1e40af">3,0</text>
              <rect x="207" y="54" width="28" height="126" fill="#fde68a" stroke="#f59e0b"/><text x="221" y="195" textAnchor="middle" fontSize="9" fill="#374151">O</text><text x="221" y="48" textAnchor="middle" fontSize="9" fill="#b45309">3,5</text>
              <rect x="245" y="36" width="28" height="144" fill="#fecaca" stroke="#dc2626"/><text x="259" y="195" textAnchor="middle" fontSize="9" fill="#374151">F</text><text x="259" y="30" textAnchor="middle" fontSize="9" fill="#b91c1c">4,0</text>
            </svg>
            <figcaption>Valores de Pauling: o flúor (4,0) lidera, seguido pelo oxigênio (3,5).</figcaption>
          </figure>
          <figure className="lesson-figure">
            <svg viewBox="0 0 320 220" width="320" height="220" aria-label="Ligação polar entre hidrogênio e flúor com deslocamento de carga">
              <text x="160" y="34" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">Ligação polar H — F</text>
              {/* atomos */}
              <circle cx="110" cy="110" r="26" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
              <text x="110" y="115" textAnchor="middle" fontSize="14" fill="#1e40af">H</text>
              <text x="110" y="150" textAnchor="middle" fontSize="12" fill="#b91c1c">δ+</text>
              <circle cx="220" cy="110" r="34" fill="#fecaca" stroke="#dc2626" strokeWidth="2"/>
              <text x="220" y="115" textAnchor="middle" fontSize="14" fill="#991b1b">F</text>
              <text x="220" y="158" textAnchor="middle" fontSize="12" fill="#1d4ed8">δ−</text>
              {/* ligacao */}
              <line x1="136" y1="110" x2="186" y2="110" stroke="#374151" strokeWidth="3"/>
              {/* nuvem eletronica deslocada para F */}
              <line x1="160" y1="80" x2="205" y2="80" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#en1)"/>
              <text x="150" y="74" fontSize="10" fill="#5b21b6">elétrons →</text>
              <defs>
                <marker id="en1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/></marker>
              </defs>
            </svg>
            <figcaption>O F, mais eletronegativo, atrai o par de elétrons: surge δ− no F e δ+ no H — ligação polar.</figcaption>
          </figure>
        </div>
        <div className="math-block">
          <h3>Ordem de eletronegatividade (decrescente)</h3>
          <p><M block>{"\\text{F} > \\text{O} > \\text{N} > \\text{Cl} > \\text{Br} > \\text{I} > \\text{S} > \\text{C} > \\text{P} > \\text{H}"}</M></p>
          <p>
            Mnemônico clássico: <strong>"FONClBrISCPH"</strong> (lê-se "fon-cli-bris-cap-agá"). O flúor é
            o elemento mais eletronegativo de todos. Os gases nobres geralmente ficam fora da escala, por
            quase não formarem ligações.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Caráter metálico</span>
        <h2>7. Eletropositividade e Caráter Metálico</h2>
        <p>
          A <strong>eletropositividade</strong> (ou caráter metálico) é a tendência de um átomo de{" "}
          <strong>perder</strong> elétrons — exatamente o <em>oposto</em> da eletronegatividade. É a marca
          dos <strong>metais</strong>, que doam elétrons com facilidade, formando cátions. Como depende da
          facilidade de soltar elétrons, anda de mãos dadas com um <strong>raio grande</strong> e uma{" "}
          <strong>baixa energia de ionização</strong>.
        </p>
        <div className="lesson-highlight">
          <p>
            <strong>Tendência:</strong> o caráter metálico aumenta ↓ e ← (para baixo e para a esquerda),
            seguindo o raio atômico. O <strong>frâncio (Fr)</strong>, no canto inferior esquerdo, é o
            elemento mais eletropositivo (metálico) e, em tese, o mais reativo dos metais. No outro
            extremo, o flúor é o mais eletronegativo (e não metálico).
          </p>
        </div>
        <p>
          Essa é a chave para entender a <strong>reatividade dos metais</strong>: descer no grupo 1
          (alcalinos) aumenta o raio, reduz a EI e facilita a perda do elétron de valência. Por isso o
          potássio reage com a água mais violentamente que o sódio, e o sódio mais que o lítio — uma
          consequência direta das propriedades periódicas no cotidiano e nas indústrias.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📏</span>
            <h3>Raio atômico</h3>
            <p>Aumenta ↓ e ← (mais camadas; menor Z<sub>ef</sub>). Cátion encolhe, ânion incha.</p>
          </div>
          <div className="math-card">
            <span>⬆️</span>
            <h3>Energia de ionização</h3>
            <p>Aumenta ↑ e →. Picos nos gases nobres, vales nos alcalinos. <M>{"EI_1 < EI_2"}</M>.</p>
          </div>
          <div className="math-card">
            <span>🧲</span>
            <h3>Afinidade eletrônica</h3>
            <p>Aumenta ↑ e →. Máxima nos halogênios; quase nula nos gases nobres.</p>
          </div>
          <div className="math-card">
            <span>⚡</span>
            <h3>Eletronegatividade</h3>
            <p>Aumenta ↑ e →. Máxima no flúor (FONClBrISCPH). Define polaridade.</p>
          </div>
          <div className="math-card">
            <span>🔩</span>
            <h3>Caráter metálico</h3>
            <p>Aumenta ↓ e ←. Máximo no frâncio. Segue o raio; inverso da eletronegatividade.</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>Regra geral</h3>
            <p>EI, AE e eletronegatividade crescem rumo ao flúor; raio e caráter metálico, rumo ao frâncio.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Raio na família"
          statement={<p>Dentre os metais alcalinos Li, Na, K e Rb, qual possui o maior raio atômico?</p>}
          options={[
            { letter: "a", text: "Rb", correct: true },
            { letter: "b", text: "Li" },
            { letter: "c", text: "Na" },
            { letter: "d", text: "Todos têm o mesmo raio" },
          ]}
          resolution={<p>Na mesma família, o raio aumenta de cima para baixo, pois cada período adiciona uma camada eletrônica que afasta a valência do núcleo. Como o Rb está mais abaixo (mais camadas), possui o maior raio dentre eles.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Elemento mais eletronegativo"
          statement={<p>Segundo a escala de Pauling, o elemento mais eletronegativo da tabela periódica é o:</p>}
          options={[
            { letter: "a", text: "Flúor (F)", correct: true },
            { letter: "b", text: "Oxigênio (O)" },
            { letter: "c", text: "Cloro (Cl)" },
            { letter: "d", text: "Frâncio (Fr)" },
          ]}
          resolution={<p>Seguindo a ordem FONClBrISCPH, o flúor (valor 4,0 na escala de Pauling) é o mais eletronegativo. O frâncio, no canto oposto da tabela, é o mais eletropositivo (caráter metálico máximo).</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Raio iônico do cátion"
          statement={<p>Sobre o sódio (<M>{"1s^2\\,2s^2\\,2p^6\\,3s^1"}</M>) e seu cátion Na⁺, é correto afirmar que:</p>}
          options={[
            { letter: "a", text: "O raio do Na⁺ é menor que o do Na, pois ele perde a 3ª camada e os prótons atraem mais os elétrons restantes.", correct: true },
            { letter: "b", text: "O raio do Na⁺ é maior que o do Na, pois o íon é mais estável." },
            { letter: "c", text: "Os raios são iguais, pois Z não muda." },
            { letter: "d", text: "O Na⁺ não possui raio definido." },
          ]}
          resolution={<p>Ao perder o elétron <M>{"3s^1"}</M>, o sódio fica com apenas 2 camadas (<M>{"1s^2\\,2s^2\\,2p^6"}</M>) em vez de 3, e os 11 prótons agora atraem só 10 elétrons. Resultado: o cátion é bem menor que o átomo neutro, <M>{"r(\\text{Na}^{+}) < r(\\text{Na})"}</M>.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Energia de ionização no período"
          statement={<p>Ao percorrer um período da esquerda para a direita, a energia de ionização tende a:</p>}
          options={[
            { letter: "a", text: "Aumentar, pois o raio diminui e o elétron de valência fica mais fortemente preso", correct: true },
            { letter: "b", text: "Diminuir, pois o raio aumenta" },
            { letter: "c", text: "Permanecer constante, pois o número de camadas não muda" },
            { letter: "d", text: "Aumentar apenas entre os metais de transição" },
          ]}
          resolution={<p>No período, da esquerda para a direita, cresce a carga nuclear efetiva e diminui o raio. Com o elétron de valência mais perto e mais atraído pelo núcleo, é preciso mais energia para removê-lo, logo a EI aumenta. É a tendência oposta à do raio.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Série isoeletrônica e raio"
          statement={<p>As espécies <M>{"\\text{O}^{2-}"}</M> (Z = 8), <M>{"\\text{F}^{-}"}</M> (Z = 9) e <M>{"\\text{Na}^{+}"}</M> (Z = 11) são isoeletrônicas (10 elétrons cada). A ordem correta de raios, do maior para o menor, é:</p>}
          options={[
            { letter: "a", text: "O²⁻ > F⁻ > Na⁺", correct: true },
            { letter: "b", text: "Na⁺ > F⁻ > O²⁻" },
            { letter: "c", text: "F⁻ > O²⁻ > Na⁺" },
            { letter: "d", text: "Todos têm o mesmo raio, pois têm 10 elétrons" },
          ]}
          resolution={<p>Em espécies isoeletrônicas, o número de elétrons é fixo, então quem decide o tamanho é a carga nuclear: quanto maior Z, mais os prótons comprimem os 10 elétrons e menor o raio. Como <M>{"Z_\\text{O} < Z_\\text{F} < Z_\\text{Na}"}</M>, temos <M>{"r(\\text{O}^{2-}) > r(\\text{F}^{-}) > r(\\text{Na}^{+})"}</M>.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Reatividade dos metais alcalinos com água"
          statement={<p>Os metais alcalinos reagem com a água liberando gás hidrogênio, e essa reatividade cresce do lítio para o césio (Li &lt; Na &lt; K &lt; Rb &lt; Cs) — o césio reage de modo explosivo. Do ponto de vista das propriedades periódicas, essa tendência se explica porque, ao descer na família 1:</p>}
          options={[
            { letter: "a", text: "O raio atômico aumenta e a energia de ionização diminui, facilitando a perda do elétron de valência.", correct: true },
            { letter: "b", text: "A eletronegatividade aumenta, fazendo o metal atrair mais a água." },
            { letter: "c", text: "O número de elétrons de valência aumenta de 1 para vários." },
            { letter: "d", text: "A massa atômica diminui, tornando os átomos mais leves e reativos." },
          ]}
          resolution={<p>Descendo no grupo 1, acrescenta-se uma camada por período: o raio cresce e o elétron de valência fica mais afastado do núcleo, com menor energia de ionização. Como a reação com a água consiste justamente na doação desse elétron (formando o cátion M⁺), quanto mais fácil perdê-lo, mais violenta a reação. Daí a reatividade aumentar de cima para baixo. A opção (c) é falsa: todos os alcalinos têm exatamente 1 elétron de valência.</p>}
        />
      </section>
    </article>
  );
}
