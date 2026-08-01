"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap09Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 9</span>
          <h1>Ligação Iônica e Ligação Metálica</h1>
          <p>
            Por que o sal de cozinha é um cristal duro que só conduz eletricidade quando dissolvido,
            enquanto um fio de cobre conduz mesmo sólido e pode ser esticado sem quebrar? A resposta
            está em como os átomos se unem. Aqui você vai entender a <strong>regra do octeto</strong>,
            a <strong>transferência de elétrons</strong> que origina os compostos iônicos, o
            "<strong>mar de elétrons</strong>" dos metais e como esses dois modelos explicam, no nível
            microscópico, propriedades como alto ponto de fusão, condutividade, fragilidade e
            maleabilidade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estabilidade</span>
        <h2>1. Estabilidade Química e a Regra do Octeto</h2>
        <p>
          Na natureza, os únicos átomos que existem isolados e quimicamente estáveis em condições
          normais são os <strong>gases nobres</strong> (He, Ne, Ar, Kr, Xe, Rn). O que eles têm de
          especial? A <strong>camada de valência completa</strong>: 8 elétrons (ou 2, no caso do He).
          Essa configuração de baixa energia é tão estável que esses elementos quase não reagem.
        </p>
        <p>
          A <strong>regra do octeto</strong> generaliza essa observação: os demais átomos tendem a{" "}
          <strong>ganhar, perder ou compartilhar</strong> elétrons até adquirirem 8 elétrons na camada
          de valência — ou seja, até "imitarem" o gás nobre mais próximo. O hidrogênio e o lítio buscam
          apenas 2 elétrons (a "regra do dueto", configuração do hélio).
        </p>
        <div className="lesson-highlight">
          <p>
            <strong>Metais</strong> têm poucos elétrons de valência (1, 2 ou 3) e baixa
            eletronegatividade: para eles é "energeticamente barato" <em>perder</em> esses elétrons e
            virar <strong>cátions</strong>. <strong>Ametais</strong> têm muitos elétrons de valência
            (5, 6 ou 7) e alta eletronegatividade: tendem a <em>ganhar</em> elétrons e virar{" "}
            <strong>ânions</strong>. É dessa complementaridade — quem doa encontra quem recebe — que
            nasce a ligação iônica.
          </p>
        </div>
        <p>
          A regra do octeto é um <strong>guia</strong>, não uma lei absoluta. Há exceções importantes:
          o berílio (<M>{"\\text{BeCl}_2"}</M>, 4 elétrons), o boro (<M>{"\\text{BF}_3"}</M>, 6
          elétrons) e átomos que expandem o octeto (<M>{"\\text{SF}_6"}</M>, 12 elétrons). Mesmo assim,
          ela acerta a esmagadora maioria dos casos do Ensino Médio e do ENEM.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Transferência de elétrons</span>
        <h2>2. Formação da Ligação Iônica</h2>
        <p>
          A ligação iônica ocorre entre <strong>metal + ametal</strong> (ou metal + hidrogênio),
          por <strong>transferência efetiva</strong> de elétrons. O metal doa elétrons e se torna um
          cátion (positivo); o ametal recebe esses elétrons e se torna um ânion (negativo). A força que
          mantém o composto unido é a <strong>atração eletrostática</strong> entre cargas opostas —
          descrita pela lei de Coulomb.
        </p>
        <p>
          O exemplo clássico é o cloreto de sódio (sal de cozinha). O sódio (<M>{"\\text{Na}"}</M>,
          família 1A) tem 1 elétron na última camada; perdê-lo deixa-o com a configuração do neônio. O
          cloro (<M>{"\\text{Cl}"}</M>, família 7A) tem 7 elétrons de valência; ao receber 1 elétron,
          completa o octeto com a configuração do argônio. Os dois se estabilizam ao mesmo tempo:
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 250" width="520" height="250" aria-label="Transferência de elétron do sódio para o cloro formando NaCl">
            {/* Átomo de Na (antes) */}
            <circle cx="95" cy="110" r="46" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="95" y="100" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1e40af">Na</text>
            <text x="95" y="120" textAnchor="middle" fontSize="11" fill="#1e40af">1 e⁻ valência</text>
            {/* elétron de valência do Na */}
            <circle cx="141" cy="110" r="6" fill="#dc2626" stroke="#7f1d1d"/>

            {/* Átomo de Cl (antes) */}
            <circle cx="320" cy="110" r="50" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            <text x="320" y="100" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#065f46">Cl</text>
            <text x="320" y="120" textAnchor="middle" fontSize="11" fill="#065f46">7 e⁻ valência</text>
            {/* 7 pontos de valência ao redor do Cl */}
            <circle cx="320" cy="60" r="4" fill="#065f46"/>
            <circle cx="356" cy="74" r="4" fill="#065f46"/>
            <circle cx="370" cy="110" r="4" fill="#065f46"/>
            <circle cx="356" cy="146" r="4" fill="#065f46"/>
            <circle cx="320" cy="160" r="4" fill="#065f46"/>
            <circle cx="284" cy="146" r="4" fill="#065f46"/>
            <circle cx="270" cy="110" r="4" fill="#065f46"/>

            {/* Seta de transferência do elétron */}
            <path d="M150,90 C200,40 240,40 268,84" fill="none" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#ion-transf)"/>
            <text x="205" y="38" textAnchor="middle" fontSize="11" fill="#b91c1c">transfere 1 e⁻</text>

            {/* Resultado: íons */}
            <text x="260" y="215" textAnchor="middle" fontSize="13" fill="#374151">Resultado:</text>
            <circle cx="360" cy="208" r="20" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="360" y="213" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">Na⁺</text>
            <text x="400" y="213" textAnchor="middle" fontSize="16" fill="#374151">+</text>
            <circle cx="445" cy="208" r="22" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            <text x="445" y="213" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#065f46">Cl⁻</text>
            {/* atração */}
            <path d="M382,208 L421,208" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4,3"/>
            <text x="403" y="240" textAnchor="middle" fontSize="9" fill="#5b21b6">atração eletrostática</text>

            <defs>
              <marker id="ion-transf" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L0,7 L9,3.5 z" fill="#dc2626"/></marker>
            </defs>
          </svg>
          <figcaption>O sódio transfere seu único elétron de valência ao cloro. Surgem Na⁺ e Cl⁻, mantidos juntos pela atração eletrostática entre cargas opostas.</figcaption>
        </figure>
        <div className="math-block">
          <h3>As semi-reações</h3>
          <p><M block>{"\\text{Na} \\rightarrow \\text{Na}^{+} + e^{-} \\qquad \\qquad \\text{Cl} + e^{-} \\rightarrow \\text{Cl}^{-}"}</M></p>
          <p>Resultado global: <M>{"\\text{Na}^{+} + \\text{Cl}^{-} \\rightarrow \\text{NaCl}"}</M></p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Balanço de cargas</span>
        <h2>3. Fórmula do Composto Iônico (Cargas Cruzadas)</h2>
        <p>
          Todo composto iônico é <strong>eletricamente neutro</strong>: a soma das cargas positivas
          deve anular a soma das negativas. Para encontrar a proporção entre os íons, usamos o{" "}
          <strong>método das cargas cruzadas</strong>: dado <M>{"\\text{X}^{a+}"}</M> e{" "}
          <M>{"\\text{Y}^{b-}"}</M>, a fórmula é <M>{"\\text{X}_b\\text{Y}_a"}</M> — o valor da carga de
          um vira o índice do outro (sempre simplificando ao final).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Cátion</th><th>Ânion</th><th>Cruzamento</th><th>Fórmula</th><th>Verificação de neutralidade</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"\\text{Na}^{+}"}</M></td><td><M>{"\\text{Cl}^{-}"}</M></td><td>1 e 1</td><td><M>{"\\text{NaCl}"}</M></td><td><M>{"(+1) + (-1) = 0"}</M></td></tr>
              <tr><td><M>{"\\text{Ca}^{2+}"}</M></td><td><M>{"\\text{Cl}^{-}"}</M></td><td>2 e 1</td><td><M>{"\\text{CaCl}_2"}</M></td><td><M>{"(+2) + 2(-1) = 0"}</M></td></tr>
              <tr><td><M>{"\\text{Al}^{3+}"}</M></td><td><M>{"\\text{O}^{2-}"}</M></td><td>3 e 2</td><td><M>{"\\text{Al}_2\\text{O}_3"}</M></td><td><M>{"2(+3) + 3(-2) = 0"}</M></td></tr>
              <tr><td><M>{"\\text{Ca}^{2+}"}</M></td><td><M>{"\\text{O}^{2-}"}</M></td><td>2 e 2 → 1 e 1</td><td><M>{"\\text{CaO}"}</M></td><td><M>{"(+2) + (-2) = 0"}</M></td></tr>
              <tr><td><M>{"\\text{Mg}^{2+}"}</M></td><td><M>{"\\text{N}^{3-}"}</M></td><td>2 e 3</td><td><M>{"\\text{Mg}_3\\text{N}_2"}</M></td><td><M>{"3(+2) + 2(-3) = 0"}</M></td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Atenção à simplificação:</strong> ao cruzar <M>{"\\text{Ca}^{2+}"}</M> com{" "}
            <M>{"\\text{O}^{2-}"}</M> obteríamos <M>{"\\text{Ca}_2\\text{O}_2"}</M>, mas a fórmula deve
            mostrar a <strong>menor proporção inteira</strong> de íons, logo <M>{"\\text{CaO}"}</M>.
            O índice 1 nunca é escrito.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estrutura</span>
        <h2>4. Estrutura: o Retículo Cristalino e a Energia Reticular</h2>
        <p>
          Compostos iônicos <strong>não formam moléculas isoladas</strong>. Em vez disso, milhões de
          cátions e ânions se organizam em um <strong>retículo cristalino</strong> — um arranjo
          tridimensional, ordenado e repetitivo, em que cada íon é cercado por vários íons de carga
          oposta. No NaCl, por exemplo, cada Na⁺ é rodeado por 6 Cl⁻ e vice-versa. Por isso a fórmula{" "}
          <M>{"\\text{NaCl}"}</M> indica apenas a <strong>proporção mínima</strong> (1:1) entre os
          íons, e não uma molécula real.
        </p>
        <p>
          A estabilidade desse arranjo é medida pela <strong>energia reticular</strong>: a energia
          liberada quando os íons gasosos se aproximam e formam o cristal (ou, de forma equivalente, a
          energia necessária para separá-los completamente). Quanto <strong>maiores as cargas</strong>{" "}
          e <strong>menores os raios</strong> dos íons, mais intensa é a atração de Coulomb e maior a
          energia reticular — o que se traduz diretamente em pontos de fusão mais altos.
        </p>
        <div className="math-block">
          <h3>Atração eletrostática (lei de Coulomb)</h3>
          <p><M block>{"F \\propto \\dfrac{|q_{+} \\cdot q_{-}|}{d^{2}}"}</M></p>
          <p>
            A força entre os íons cresce com o produto das cargas e cai com o quadrado da distância
            entre seus centros. Por isso o <M>{"\\text{MgO}"}</M> (cargas 2+ e 2−) funde a ~2 800 °C,
            muito acima do <M>{"\\text{NaCl}"}</M> (cargas 1+ e 1−, ~801 °C).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades iônicas</span>
        <h2>5. Propriedades dos Compostos Iônicos</h2>
        <p>
          Todas as propriedades dos compostos iônicos decorrem de um único fato: a forte atração
          eletrostática que organiza os íons num retículo rígido. Veja como cada característica se
          explica:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>Comportamento</th><th>Por quê?</th></tr>
            </thead>
            <tbody>
              <tr><td>Estado físico (25 °C)</td><td>Sólidos cristalinos</td><td>A atração intensa mantém os íons fixos em posições definidas do retículo.</td></tr>
              <tr><td>Ponto de fusão / ebulição</td><td>Muito altos</td><td>Romper a rede tridimensional exige muita energia (alta energia reticular).</td></tr>
              <tr><td>Condução elétrica (sólido)</td><td>Não conduz</td><td>Os íons estão presos; não há cargas livres para se mover.</td></tr>
              <tr><td>Condução (fundido ou dissolvido)</td><td>Conduz bem</td><td>Os íons ficam livres e migram, transportando corrente (eletrólitos).</td></tr>
              <tr><td>Dureza</td><td>Duros</td><td>Difícil deformar o retículo fortemente ligado.</td></tr>
              <tr><td>Fragilidade</td><td>Quebradiços</td><td>Um impacto desloca camadas, aproximando cargas iguais → repulsão → fratura.</td></tr>
              <tr><td>Solubilidade</td><td>Muitos solúveis em água</td><td>A água (polar) solvata os íons, separando-os do retículo.</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          O paradoxo "duro porém quebradiço" é elegante: o cristal resiste a riscos, mas um golpe que
          faça uma camada de íons deslizar coloca cátions diante de cátions e ânions diante de ânions.
          A repulsão resultante <strong>parte o cristal</strong> — por isso o sal e o giz se
          esfarelam com uma pancada, em vez de amassar.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mar de elétrons</span>
        <h2>6. Ligação Metálica: o Modelo do Mar de Elétrons</h2>
        <p>
          Numa amostra de metal há apenas átomos de baixa eletronegatividade — não existe ninguém para
          "receber" os elétrons como num composto iônico. O que acontece é diferente: os átomos
          metálicos liberam seus elétrons de valência, que ficam <strong>deslocalizados</strong>,
          movendo-se livremente por toda a peça. Os núcleos, agora <strong>cátions fixos</strong>,
          organizam-se num retículo imerso nessa nuvem negativa — o famoso "<strong>mar de
          elétrons</strong>".
        </p>
        <p>
          A ligação metálica é, portanto, a <strong>atração entre os cátions positivos e o mar de
          elétrons</strong> que os envolve. Como os elétrons pertencem ao conjunto (e não a um par de
          átomos específico), a estrutura é coesa e, ao mesmo tempo, extremamente flexível.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 240" width="480" height="240" aria-label="Modelo do mar de elétrons: cátions fixos imersos em elétrons livres deslocalizados">
            {/* Fundo do mar de elétrons */}
            <rect x="40" y="30" width="400" height="170" rx="10" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5"/>
            <text x="240" y="222" textAnchor="middle" fontSize="11" fill="#374151">cátions metálicos fixos imersos no "mar" de elétrons livres</text>

            {/* Cátions (rede 4x3) */}
            {[80, 160, 240, 320, 400].map((cx) =>
              [70, 120, 170].map((cy) => (
                <g key={`${cx}-${cy}`}>
                  <circle cx={cx} cy={cy} r="16" fill="#f59e0b" stroke="#92400e" strokeWidth="1.5"/>
                  <text x={cx} y={cy + 4} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c2d12">+</text>
                </g>
              ))
            )}

            {/* Elétrons livres (pequenos, espalhados nos interstícios) */}
            {[
              [120, 70], [200, 70], [280, 70], [360, 70],
              [120, 120], [200, 120], [280, 120], [360, 120],
              [120, 170], [200, 170], [280, 170], [360, 170],
              [110, 95], [190, 145], [300, 95], [340, 150],
            ].map(([ex, ey], i) => (
              <circle key={`e-${i}`} cx={ex} cy={ey} r="4" fill="#dc2626" stroke="#7f1d1d" strokeWidth="0.5"/>
            ))}
            {/* pequenas setas indicando mobilidade dos elétrons */}
            <line x1="118" y1="95" x2="146" y2="95" stroke="#dc2626" strokeWidth="1.2" markerEnd="url(#met-arr)"/>
            <line x1="302" y1="95" x2="330" y2="95" stroke="#dc2626" strokeWidth="1.2" markerEnd="url(#met-arr)"/>
            <text x="55" y="24" fontSize="10" fill="#b91c1c">● = elétron livre (móvel)</text>
            <text x="300" y="24" fontSize="10" fill="#92400e">⬤ = cátion fixo</text>
            <defs>
              <marker id="met-arr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#dc2626"/></marker>
            </defs>
          </svg>
          <figcaption>Os cátions metálicos ocupam posições fixas de uma rede, enquanto os elétrons de valência, deslocalizados, vagueiam livremente — esse "mar" explica quase todas as propriedades dos metais.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades metálicas</span>
        <h2>7. Propriedades dos Metais Explicadas pelo Mar de Elétrons</h2>
        <p>
          A genialidade do modelo é que <strong>uma única ideia</strong> — elétrons livres e móveis —
          explica todas as propriedades características dos metais:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Condutividade elétrica e térmica</h3>
            <p>Os elétrons livres transportam carga (corrente) e energia (calor) com facilidade, mesmo no estado sólido — ao contrário dos compostos iônicos.</p>
          </div>
          <div className="lesson-card">
            <span>🔨</span>
            <h3>Maleabilidade e ductilidade</h3>
            <p>Ao deformar, as camadas de cátions deslizam, mas o mar de elétrons "acompanha" e mantém a coesão — o metal vira lâmina (maleável) ou fio (dúctil) sem quebrar.</p>
          </div>
          <div className="lesson-card">
            <span>✨</span>
            <h3>Brilho metálico</h3>
            <p>Os elétrons livres absorvem e reemitem a luz incidente, refletindo-a — daí o brilho característico de superfícies polidas.</p>
          </div>
          <div className="lesson-card">
            <span>🔥</span>
            <h3>Altos PF e PE</h3>
            <p>A forte atração entre cátions e o mar de elétrons mantém a maioria dos metais sólida em temperatura ambiente (exceto o mercúrio).</p>
          </div>
        </div>
        <p>
          Compare com o composto iônico: lá, deslocar uma camada gera repulsão e <strong>quebra</strong>{" "}
          o cristal; aqui, a nuvem eletrônica age como um "amortecedor" que permite o deslizamento sem
          ruptura. É a mesma deformação, mas com desfechos opostos — e é por isso que metais são
          dúcteis e sais são frágeis.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 220" width="480" height="220" aria-label="Comparação entre deformação do cristal iônico (quebra) e do metal (desliza sem quebrar)">
            {/* IÔNICO - esquerda */}
            <text x="120" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#991b1b">IÔNICO: golpe → repulsão → quebra</text>
            {/* camada superior deslocada */}
            <circle cx="55" cy="80" r="13" fill="#dbeafe" stroke="#2563eb"/><text x="55" y="84" textAnchor="middle" fontSize="9" fill="#1e40af">+</text>
            <circle cx="100" cy="80" r="13" fill="#fee2e2" stroke="#dc2626"/><text x="100" y="84" textAnchor="middle" fontSize="9" fill="#991b1b">−</text>
            <circle cx="145" cy="80" r="13" fill="#dbeafe" stroke="#2563eb"/><text x="145" y="84" textAnchor="middle" fontSize="9" fill="#1e40af">+</text>
            {/* camada inferior (deslocada para a direita: + sob + ) */}
            <circle cx="78" cy="130" r="13" fill="#fee2e2" stroke="#dc2626"/><text x="78" y="134" textAnchor="middle" fontSize="9" fill="#991b1b">−</text>
            <circle cx="123" cy="130" r="13" fill="#dbeafe" stroke="#2563eb"/><text x="123" y="134" textAnchor="middle" fontSize="9" fill="#1e40af">+</text>
            <circle cx="168" cy="130" r="13" fill="#fee2e2" stroke="#dc2626"/><text x="168" y="134" textAnchor="middle" fontSize="9" fill="#991b1b">−</text>
            {/* seta de repulsão entre + alinhados */}
            <text x="120" y="175" textAnchor="middle" fontSize="10" fill="#991b1b">cargas iguais alinhadas → repulsão ✗</text>

            {/* divisória */}
            <line x1="240" y1="30" x2="240" y2="190" stroke="#e5e7eb" strokeWidth="1.5"/>

            {/* METÁLICO - direita */}
            <text x="360" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">METÁLICO: camadas deslizam, não quebra</text>
            {/* mar de fundo */}
            <rect x="290" y="62" width="160" height="86" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
            <circle cx="315" cy="80" r="12" fill="#f59e0b" stroke="#92400e"/><text x="315" y="84" textAnchor="middle" fontSize="9" fill="#7c2d12">+</text>
            <circle cx="360" cy="80" r="12" fill="#f59e0b" stroke="#92400e"/><text x="360" y="84" textAnchor="middle" fontSize="9" fill="#7c2d12">+</text>
            <circle cx="405" cy="80" r="12" fill="#f59e0b" stroke="#92400e"/><text x="405" y="84" textAnchor="middle" fontSize="9" fill="#7c2d12">+</text>
            <circle cx="338" cy="130" r="12" fill="#f59e0b" stroke="#92400e"/><text x="338" y="134" textAnchor="middle" fontSize="9" fill="#7c2d12">+</text>
            <circle cx="383" cy="130" r="12" fill="#f59e0b" stroke="#92400e"/><text x="383" y="134" textAnchor="middle" fontSize="9" fill="#7c2d12">+</text>
            {/* elétrons livres */}
            {[[330,105],[375,105],[420,105],[300,128],[420,130]].map(([x,y],i)=>(
              <circle key={`md-${i}`} cx={x} cy={y} r="3.5" fill="#dc2626"/>
            ))}
            <text x="360" y="175" textAnchor="middle" fontSize="10" fill="#065f46">mar de elétrons mantém a coesão ✓</text>
          </svg>
          <figcaption>Mesma deformação, desfechos opostos: no cristal iônico cargas iguais se alinham e o sólido racha; no metal o mar de elétrons preserva a ligação e a peça apenas muda de forma.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ligas metálicas</span>
        <h2>8. Ligas Metálicas</h2>
        <p>
          Uma <strong>liga metálica</strong> é uma mistura (geralmente sólida) de dois ou mais
          elementos, sendo pelo menos um deles metal. A presença de átomos de tamanhos diferentes
          "atrapalha" o deslizamento das camadas, geralmente <strong>aumentando a dureza</strong> e a
          resistência mecânica, além de melhorar resistência à corrosão e aparência. Quase todos os
          metais que usamos no dia a dia são, na verdade, ligas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Liga</th><th>Composição</th><th>Propriedade aprimorada</th><th>Uso típico</th></tr>
            </thead>
            <tbody>
              <tr><td>Aço comum</td><td>Fe + C (até ~2%)</td><td>Dureza e resistência</td><td>Estruturas, ferramentas</td></tr>
              <tr><td>Aço inoxidável</td><td>Fe + Cr + Ni</td><td>Resistência à corrosão</td><td>Talheres, pias, cirurgia</td></tr>
              <tr><td>Bronze</td><td>Cu + Sn</td><td>Dureza, sonoridade</td><td>Sinos, esculturas, buchas</td></tr>
              <tr><td>Latão</td><td>Cu + Zn</td><td>Maleabilidade, brilho</td><td>Instrumentos, torneiras</td></tr>
              <tr><td>Ouro 18 K</td><td>Au + Cu/Ag</td><td>Dureza (joias)</td><td>Joalheria</td></tr>
              <tr><td>Amálgama</td><td>Hg + Ag/Sn</td><td>Moldabilidade</td><td>Restauração dentária</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            O <strong>ouro puro (24 K)</strong> é macio demais para joias; misturá-lo com cobre ou
            prata dá origem ao ouro 18 K (75% Au), mais resistente a riscos. Já no <strong>aço
            inox</strong>, o cromo forma uma finíssima camada de óxido que "sela" a superfície e impede
            a ferrugem — por isso ele é usado em talheres e instrumentos cirúrgicos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>9. Ligação Iônica × Ligação Metálica</h2>
        <p>
          As duas ligações envolvem cátions, mas funcionam de modos bem diferentes. A tabela resume os
          contrastes que mais aparecem em provas:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Critério</th><th>Ligação Iônica</th><th>Ligação Metálica</th></tr>
            </thead>
            <tbody>
              <tr><td>Partículas</td><td>Cátions e ânions</td><td>Cátions fixos + elétrons livres</td></tr>
              <tr><td>O que ocorre com os e⁻</td><td>Transferência (metal → ametal)</td><td>Deslocalização (mar de elétrons)</td></tr>
              <tr><td>O que mantém unido</td><td>Atração cátion ↔ ânion</td><td>Atração cátion ↔ mar de elétrons</td></tr>
              <tr><td>Elementos envolvidos</td><td>Metal + ametal</td><td>Apenas metais (ou ligas)</td></tr>
              <tr><td>Condução no sólido</td><td>Não conduz</td><td>Conduz muito bem</td></tr>
              <tr><td>Condução fundido/dissolvido</td><td>Conduz (íons livres)</td><td>Conduz (já conduzia)</td></tr>
              <tr><td>Ponto de fusão</td><td>Alto a muito alto</td><td>Geralmente alto</td></tr>
              <tr><td>Sob impacto</td><td>Quebradiço (frágil)</td><td>Maleável e dúctil</td></tr>
              <tr><td>Exemplos</td><td>NaCl, CaO, Al₂O₃</td><td>Fe, Cu, Au, aço, bronze</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🎯</span>
            <h3>Octeto</h3>
            <p>Átomos buscam 8 e⁻ na valência (2 para H/Li) imitando o gás nobre vizinho.</p>
          </div>
          <div className="math-card">
            <span>🔁</span>
            <h3>Iônica</h3>
            <p>Metal + ametal. Transferência de elétrons → cátion + ânion, unidos por atração eletrostática.</p>
          </div>
          <div className="math-card">
            <span>✖️</span>
            <h3>Cargas cruzadas</h3>
            <p><M>{"\\text{Al}^{3+} + \\text{O}^{2-} \\rightarrow \\text{Al}_2\\text{O}_3"}</M>; sempre simplificar.</p>
          </div>
          <div className="math-card">
            <span>🧊</span>
            <h3>Retículo iônico</h3>
            <p>Sólido cristalino; alto PF/PE; conduz só fundido/dissolvido; duro e quebradiço.</p>
          </div>
          <div className="math-card">
            <span>🌊</span>
            <h3>Metálica</h3>
            <p>Mar de elétrons → condução (sólido), maleabilidade, ductilidade, brilho.</p>
          </div>
          <div className="math-card">
            <span>⚙️</span>
            <h3>Ligas</h3>
            <p>Aço, bronze, latão, ouro 18 K — propriedades aprimoradas pela mistura.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Tipo de ligação"
          statement={<p>A ligação química formada entre um metal e um ametal, por transferência de elétrons, é chamada de:</p>}
          options={[
            { letter: "a", text: "Ligação iônica", correct: true },
            { letter: "b", text: "Ligação covalente" },
            { letter: "c", text: "Ligação metálica" },
            { letter: "d", text: "Ligação de hidrogênio" },
          ]}
          resolution={<p>Metal (perde e⁻, baixa eletronegatividade) + ametal (ganha e⁻, alta eletronegatividade) → transferência de elétrons → <strong>ligação iônica</strong>. A covalente envolve compartilhamento entre ametais; a metálica ocorre só entre metais.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Condução de corrente"
          statement={<p>O cloreto de sódio sólido não conduz corrente elétrica, mas conduz quando dissolvido em água. Isso ocorre porque:</p>}
          options={[
            { letter: "a", text: "Em solução, os íons ficam livres para se movimentar", correct: true },
            { letter: "b", text: "A água é um metal" },
            { letter: "c", text: "O NaCl se transforma em um gás" },
            { letter: "d", text: "Os elétrons saltam de átomo em átomo no sólido" },
          ]}
          resolution={<p>No sólido, os íons estão presos em posições fixas do retículo cristalino — não há cargas livres. Ao dissolver (ou fundir), os íons <M>{"\\text{Na}^{+}"}</M> e <M>{"\\text{Cl}^{-}"}</M> ganham mobilidade e passam a transportar corrente. Compostos iônicos são, por isso, chamados de <strong>eletrólitos</strong>.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Fórmula por cargas cruzadas"
          statement={<p>Qual a fórmula do composto iônico formado entre o cálcio (<M>{"\\text{Ca}^{2+}"}</M>) e o fósforo na forma de fosfeto (<M>{"\\text{P}^{3-}"}</M>)?</p>}
          options={[
            { letter: "a", text: "Ca₃P₂", correct: true },
            { letter: "b", text: "CaP" },
            { letter: "c", text: "Ca₂P₃" },
            { letter: "d", text: "CaP₂" },
          ]}
          resolution={<p>Cruzando as cargas: <M>{"\\text{Ca}^{2+}"}</M> e <M>{"\\text{P}^{3-}"}</M> → <M>{"\\text{Ca}_3\\text{P}_2"}</M>. Verificação de neutralidade: <M>{"3(+2) + 2(-3) = +6 - 6 = 0"}</M>. ✓</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Propriedades metálicas"
          statement={<p>A maleabilidade e a condutividade elétrica dos metais são explicadas pelo modelo do mar de elétrons porque:</p>}
          options={[
            { letter: "a", text: "Os elétrons de valência estão deslocalizados e livres para se mover", correct: true },
            { letter: "b", text: "Os metais são formados por moléculas pequenas" },
            { letter: "c", text: "Há transferência permanente de prótons" },
            { letter: "d", text: "Os átomos metálicos ganham elétrons dos ametais vizinhos" },
          ]}
          resolution={<p>A nuvem de elétrons livres conduz corrente mesmo no sólido e funciona como "cimento" móvel: quando as camadas de cátions deslizam sob impacto, o mar de elétrons acompanha e mantém a coesão, evitando a ruptura. Daí vêm a maleabilidade e a ductilidade.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Por que iônicos têm alto PF?"
          statement={<p>O óxido de magnésio (<M>{"\\text{MgO}"}</M>, ~2 800 °C) funde a uma temperatura muito mais alta que o cloreto de sódio (<M>{"\\text{NaCl}"}</M>, ~801 °C). A melhor justificativa é:</p>}
          options={[
            { letter: "a", text: "As cargas maiores (2+ e 2−) tornam a atração eletrostática mais intensa, exigindo mais energia para romper o retículo", correct: true },
            { letter: "b", text: "O MgO é um composto molecular e o NaCl é iônico" },
            { letter: "c", text: "Há ligações de hidrogênio entre os íons do MgO" },
            { letter: "d", text: "O magnésio é mais leve que o sódio" },
          ]}
          resolution={<p>Pela lei de Coulomb, <M>{"F \\propto |q_{+} \\cdot q_{-}| / d^{2}"}</M>. No MgO, o produto das cargas é <M>{"2 \\times 2 = 4"}</M>, contra <M>{"1 \\times 1 = 1"}</M> no NaCl. A atração muito mais forte significa maior energia reticular e, portanto, ponto de fusão muito mais elevado.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Ligas no dia a dia"
          statement={<p>O aço inoxidável, usado em talheres e instrumentos cirúrgicos, é uma liga de ferro com cromo e níquel, bem mais resistente à corrosão que o ferro puro. O uso de ligas metálicas, em vez de metais puros, justifica-se principalmente porque:</p>}
          options={[
            { letter: "a", text: "As ligas combinam e aprimoram propriedades como dureza e resistência à corrosão, ajustando o material ao uso", correct: true },
            { letter: "b", text: "As ligas deixam de ser metálicas e se tornam compostos iônicos" },
            { letter: "c", text: "Metais puros não conduzem eletricidade" },
            { letter: "d", text: "As ligas são sempre mais baratas que qualquer metal puro" },
          ]}
          resolution={<p>Ligas ajustam as propriedades à aplicação. No aço inox, o cromo forma uma fina camada protetora de óxido que sela a superfície e evita a ferrugem, aumentando a durabilidade em relação ao ferro puro. A condutividade elétrica do material continua existindo (a ligação ainda é metálica), e o preço não é o fator central.</p>}
        />
      </section>
    </article>
  );
}
