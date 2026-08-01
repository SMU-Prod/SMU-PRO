"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap23Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 23</span>
          <h1>Propriedades Coligativas: Tonoscopia, Ebulioscopia, Crioscopia e Osmose</h1>
          <p>
            Por que a água do mar ferve acima de 100 °C e congela abaixo de 0 °C? Por que o sal derrete
            o gelo das estradas e o açúcar conserva a goiabada por meses sem geladeira? A resposta está
            nas <strong>propriedades coligativas</strong>: alterações que um soluto não volátil provoca no
            solvente e que dependem <strong>apenas do número de partículas dissolvidas</strong>, jamais de
            sua natureza química. Neste capítulo veremos os quatro efeitos — tonoscopia, ebulioscopia,
            crioscopia e osmose — e o fator de van't Hoff, que conta as partículas dos eletrólitos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que são Propriedades Coligativas?</h2>
        <p>
          São as propriedades físicas de um solvente que se alteram quando nele se dissolve um{" "}
          <strong>soluto não volátil</strong> (que não evapora junto, como sal ou açúcar). O ponto-chave —
          e o que mais cai em prova — é que a intensidade do efeito depende{" "}
          <strong>apenas da quantidade de partículas dissolvidas</strong>, e não de quais partículas são.
          Tanto faz se é íon de sódio, molécula de glicose ou íon de cálcio: o que conta é{" "}
          <em>quantas</em> partículas há em solução.
        </p>
        <p>
          São quatro os efeitos coligativos, todos consequência do mesmo fenômeno básico — a presença das
          partículas de soluto "atrapalha" o solvente:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>O que faz no solvente</th><th>Grandeza</th><th>Exemplo do cotidiano</th></tr>
            </thead>
            <tbody>
              <tr><td>Tonoscopia</td><td>Diminui a pressão máxima de vapor</td><td>↓ <M>{"P"}</M></td><td>Água com sal evapora mais devagar</td></tr>
              <tr><td>Ebulioscopia</td><td>Eleva o ponto de ebulição</td><td>↑ <M>{"T_e"}</M></td><td>Água do mar ferve acima de 100 °C</td></tr>
              <tr><td>Crioscopia</td><td>Abaixa o ponto de congelamento</td><td>↓ <M>{"T_c"}</M></td><td>Sal derrete o gelo das estradas</td></tr>
              <tr><td>Osmose / Pressão osmótica</td><td>Atrai solvente através de membrana</td><td><M>{"\\pi"}</M></td><td>Salada murcha; conserva por salga</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Regra de ouro:</strong> quanto <em>mais partículas</em> de soluto, maior o efeito
            coligativo. Por isso solutos iônicos, que se dissociam em vários íons, afetam mais o solvente
            que solutos moleculares de mesma concentração — assunto da seção sobre o fator de van't Hoff.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Efeito 1</span>
        <h2>2. Tonoscopia (Abaixamento da Pressão de Vapor)</h2>
        <p>
          Todo líquido, num recipiente fechado, atinge uma <strong>pressão máxima de vapor</strong>:
          o equilíbrio em que tantas moléculas escapam para o vapor quantas retornam ao líquido. Ao
          dissolver um soluto não volátil, parte da superfície do líquido passa a ser ocupada pelas
          partículas do soluto, que <strong>não evaporam</strong> e ainda atraem as moléculas do solvente,
          dificultando seu escape. Resultado: a solução tem <strong>pressão de vapor menor</strong> que o
          solvente puro.
        </p>
        <div className="math-block">
          <h3>Lei de Raoult</h3>
          <p><M block>{"P_{\\text{solu\\c{c}\\~ao}} = x_{\\text{solvente}} \\cdot P_{\\text{puro}}"}</M></p>
          <p>
            O abaixamento relativo da pressão de vapor é dado por{" "}
            <M>{"\\frac{\\Delta P}{P_{\\text{puro}}} = K_t \\cdot W \\cdot i"}</M>, onde{" "}
            <M>{"W"}</M> é a molalidade (mol de soluto por kg de solvente) e <M>{"i"}</M> é o fator de
            van't Hoff.
          </p>
        </div>
        <div className="lesson-highlight">
          <p>
            É por isso que uma poça de água do mar seca mais devagar que uma poça de água doce sob o mesmo
            sol: o sal dissolvido reduz a pressão de vapor e, com ela, a velocidade de evaporação.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Efeito 2 e 3</span>
        <h2>3. Ebulioscopia e Crioscopia no Diagrama de Fases</h2>
        <p>
          Como a pressão de vapor da solução é sempre menor que a do solvente puro, são necessárias{" "}
          <strong>temperaturas mais altas</strong> para que a solução ferva (a pressão de vapor só iguala a
          atmosférica num <M>{"T"}</M> maior): isso é a <strong>ebulioscopia</strong>. Pelo mesmo motivo,
          a solução precisa de temperaturas <strong>mais baixas</strong> para congelar: é a{" "}
          <strong>crioscopia</strong>. No diagrama pressão × temperatura, a curva da solução fica deslocada
          em relação à do solvente puro, alargando a faixa em que a substância permanece líquida.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 300" width="500" height="300" aria-label="Diagrama de fases pressão por temperatura comparando solvente puro e solução">
            {/* Eixos */}
            <line x1="56" y1="250" x2="470" y2="250" stroke="#374151" strokeWidth="2"/>
            <line x1="56" y1="24" x2="56" y2="250" stroke="#374151" strokeWidth="2"/>
            <text x="262" y="284" textAnchor="middle" fontSize="13" fill="#374151">Temperatura (°C)</text>
            <text x="20" y="140" textAnchor="middle" fontSize="13" fill="#374151" transform="rotate(-90,20,140)">Pressão</text>

            {/* Pressão atmosférica (1 atm) — linha horizontal de referência */}
            <line x1="56" y1="95" x2="470" y2="95" stroke="#9ca3af" strokeWidth="1" strokeDasharray="5,4"/>
            <text x="60" y="88" fontSize="10" fill="#6b7280">1 atm</text>

            {/* Curva de vaporização do solvente PURO (azul) */}
            <path d="M150,250 C220,200 270,140 320,95 C345,72 360,52 372,36" fill="none" stroke="#2563eb" strokeWidth="3"/>
            <text x="378" y="40" fontSize="11" fill="#1d4ed8">puro</text>

            {/* Curva de vaporização da SOLUÇÃO (vermelho, deslocada para baixo/direita) */}
            <path d="M170,250 C240,205 300,150 355,110 C385,88 405,66 418,48" fill="none" stroke="#dc2626" strokeWidth="3" strokeDasharray="6,4"/>
            <text x="424" y="52" fontSize="11" fill="#b91c1c">solução</text>

            {/* Pontos de ebulição: onde curvas cruzam 1 atm */}
            <circle cx="320" cy="95" r="4" fill="#2563eb"/>
            <circle cx="358" cy="95" r="4" fill="#dc2626"/>
            <line x1="320" y1="95" x2="320" y2="250" stroke="#2563eb" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="358" y1="95" x2="358" y2="250" stroke="#dc2626" strokeWidth="1" strokeDasharray="3,3"/>
            <text x="316" y="264" textAnchor="middle" fontSize="10" fill="#1d4ed8">100°</text>
            <text x="362" y="264" textAnchor="middle" fontSize="10" fill="#b91c1c">T_e</text>
            {/* seta ΔTe */}
            <line x1="320" y1="120" x2="358" y2="120" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#c23ae)" markerStart="url(#c23aeb)"/>
            <text x="339" y="114" textAnchor="middle" fontSize="10" fill="#b45309">ΔTe</text>

            {/* Curvas de fusão (quase verticais) — puro e solução */}
            <line x1="150" y1="250" x2="138" y2="24" stroke="#2563eb" strokeWidth="3"/>
            <line x1="118" y1="250" x2="106" y2="24" stroke="#dc2626" strokeWidth="3" strokeDasharray="6,4"/>
            {/* Pontos de congelamento na linha 1 atm */}
            <circle cx="144" cy="95" r="4" fill="#2563eb"/>
            <circle cx="112" cy="95" r="4" fill="#dc2626"/>
            <line x1="144" y1="95" x2="144" y2="250" stroke="#2563eb" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="112" y1="95" x2="112" y2="250" stroke="#dc2626" strokeWidth="1" strokeDasharray="3,3"/>
            <text x="146" y="264" textAnchor="middle" fontSize="10" fill="#1d4ed8">0°</text>
            <text x="106" y="264" textAnchor="middle" fontSize="10" fill="#b91c1c">T_c</text>
            {/* seta ΔTc */}
            <line x1="144" y1="135" x2="112" y2="135" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#c23ac)" markerStart="url(#c23acb)"/>
            <text x="128" y="129" textAnchor="middle" fontSize="10" fill="#5b21b6">ΔTc</text>

            <defs>
              <marker id="c23ae" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f59e0b"/></marker>
              <marker id="c23aeb" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto"><path d="M8,0 L8,6 L0,3 z" fill="#f59e0b"/></marker>
              <marker id="c23ac" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/></marker>
              <marker id="c23acb" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto"><path d="M8,0 L8,6 L0,3 z" fill="#7c3aed"/></marker>
            </defs>
          </svg>
          <figcaption>
            A solução (vermelho tracejado) tem pressão de vapor menor, então ferve a uma temperatura maior
            (ΔTe, ebulioscopia) e congela a uma temperatura menor (ΔTc, crioscopia) que o solvente puro (azul).
          </figcaption>
        </figure>
        <div className="math-block">
          <h3>Fórmulas de ebulioscopia e crioscopia</h3>
          <p><M block>{"\\Delta T_e = K_e \\cdot W \\cdot i \\qquad \\Delta T_c = K_c \\cdot W \\cdot i"}</M></p>
          <p>
            Em que <M>{"\\Delta T_e"}</M> é a elevação do ponto de ebulição, <M>{"\\Delta T_c"}</M> o
            abaixamento do ponto de congelamento, <M>{"K_e"}</M> e <M>{"K_c"}</M> são constantes do
            solvente (para a água, <M>{"K_e = 0{,}52"}</M> e <M>{"K_c = 1{,}86\\ \\text{°C}\\cdot\\text{kg/mol}"}</M>),
            <M>{"W"}</M> é a molalidade e <M>{"i"}</M> o fator de van't Hoff.
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo resolvido — anticongelante de radiador</h3>
          <p>
            Dissolvem-se 2 mol de etilenoglicol (molecular, <M>{"i = 1"}</M>) em 1 kg de água
            (<M>{"W = 2\\ \\text{mol/kg}"}</M>). O abaixamento do ponto de congelamento é{" "}
            <M>{"\\Delta T_c = 1{,}86 \\times 2 \\times 1 = 3{,}72\\ \\text{°C}"}</M>. A água do radiador
            só congelaria a <M>{"-3{,}72\\ \\text{°C}"}</M> — em quantidades reais, o anticongelante protege
            o motor a dezenas de graus negativos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Efeito 4</span>
        <h2>4. Osmose e Pressão Osmótica</h2>
        <p>
          <strong>Osmose</strong> é a passagem espontânea do <em>solvente</em> através de uma{" "}
          <strong>membrana semipermeável</strong> (que deixa passar o solvente, mas retém o soluto), do
          meio <strong>menos concentrado</strong> para o <strong>mais concentrado</strong>. A natureza
          "tenta" igualar as concentrações dos dois lados diluindo o lado mais salgado. A{" "}
          <strong>pressão osmótica (<M>{"\\pi"}</M>)</strong> é a pressão que seria preciso aplicar sobre a
          solução mais concentrada para <strong>impedir</strong> esse fluxo de solvente.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 300" width="480" height="300" aria-label="Tubo em U mostrando osmose através de membrana semipermeável">
            {/* Tubo em U (paredes) */}
            <path d="M70,40 L70,230 Q70,270 110,270 L370,270 Q410,270 410,230 L410,40"
                  fill="none" stroke="#374151" strokeWidth="3"/>
            {/* Membrana semipermeável no centro */}
            <line x1="240" y1="255" x2="240" y2="170" stroke="#7c3aed" strokeWidth="3" strokeDasharray="4,3"/>
            <text x="240" y="166" textAnchor="middle" fontSize="10" fill="#5b21b6">membrana</text>
            <text x="240" y="290" textAnchor="middle" fontSize="10" fill="#5b21b6">semipermeável</text>

            {/* Lado esquerdo: solvente diluído (água), nível mais baixo */}
            <path d="M71,150 L71,229 Q71,269 110,269 L239,269 L239,150 Z" fill="#dbeafe"/>
            <text x="150" y="135" textAnchor="middle" fontSize="11" fill="#1d4ed8">água (diluído)</text>
            <text x="150" y="215" textAnchor="middle" fontSize="10" fill="#1d4ed8">poucas partículas</text>

            {/* Lado direito: solução concentrada, nível mais alto */}
            <path d="M241,80 L241,269 L370,269 Q409,269 409,229 L409,80 Z" fill="#fef3c7"/>
            <text x="325" y="65" textAnchor="middle" fontSize="11" fill="#b45309">solução concentrada</text>
            {/* pontos de soluto no lado direito */}
            <circle cx="290" cy="120" r="3.5" fill="#dc2626"/>
            <circle cx="340" cy="150" r="3.5" fill="#dc2626"/>
            <circle cx="310" cy="190" r="3.5" fill="#dc2626"/>
            <circle cx="360" cy="210" r="3.5" fill="#dc2626"/>
            <circle cx="280" cy="225" r="3.5" fill="#dc2626"/>
            <circle cx="335" cy="240" r="3.5" fill="#dc2626"/>

            {/* Seta do fluxo de água atravessando a membrana (diluído -> concentrado) */}
            <line x1="200" y1="215" x2="280" y2="215" stroke="#059669" strokeWidth="3" markerEnd="url(#c23flow)"/>
            <text x="240" y="208" textAnchor="middle" fontSize="10" fill="#047857">fluxo de água →</text>

            {/* Coluna de pressão osmótica (diferença de nível) */}
            <line x1="430" y1="80" x2="430" y2="150" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#c23pi)" markerStart="url(#c23pib)"/>
            <line x1="409" y1="80" x2="438" y2="80" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="409" y1="150" x2="438" y2="150" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3"/>
            <text x="452" y="118" textAnchor="middle" fontSize="13" fill="#b91c1c">π</text>

            <defs>
              <marker id="c23flow" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#059669"/></marker>
              <marker id="c23pi" markerWidth="8" markerHeight="8" refX="3" refY="6" orient="auto"><path d="M0,6 L3,0 L6,6 z" fill="#dc2626"/></marker>
              <marker id="c23pib" markerWidth="8" markerHeight="8" refX="3" refY="0" orient="auto"><path d="M0,0 L3,6 L6,0 z" fill="#dc2626"/></marker>
            </defs>
          </svg>
          <figcaption>
            A água passa do lado diluído (azul) para o lado concentrado (amarelo) através da membrana
            semipermeável, elevando seu nível. A diferença de altura mede a pressão osmótica <M>{"\\pi"}</M>.
          </figcaption>
        </figure>
        <div className="math-block">
          <h3>Equação da pressão osmótica</h3>
          <p><M block>{"\\pi = M \\cdot R \\cdot T \\cdot i"}</M></p>
          <p>
            onde <M>{"M"}</M> = molaridade (mol/L), <M>{"R = 0{,}082\\ \\text{atm}\\cdot\\text{L}/(\\text{mol}\\cdot\\text{K})"}</M>,
            <M>{"T"}</M> = temperatura absoluta (K) e <M>{"i"}</M> = fator de van't Hoff. Note a semelhança
            com a equação dos gases ideais (<M>{"PV = nRT"}</M>).
          </p>
        </div>
        <div className="lesson-highlight">
          <p>
            A osmose explica por que a salada murcha ao receber sal (a água sai das células vegetais), por
            que beber água do mar desidrata (o sangue perde água para o intestino salgado) e por que o{" "}
            <strong>soro fisiológico</strong> tem concentração ajustada para ser <em>isotônico</em> com o
            sangue — evitando que as hemácias murchem ou estourem.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Iônico × molecular</span>
        <h2>5. Fator de van't Hoff (i): Contando as Partículas</h2>
        <p>
          Como o efeito depende do <strong>número de partículas</strong>, precisamos corrigir os solutos
          que se dissociam. O <strong>fator de van't Hoff (<M>{"i"}</M>)</strong> indica quantas partículas
          cada fórmula dissolvida realmente gera. Solutos <strong>moleculares</strong> (não-eletrólitos)
          não se dissociam: cada molécula é 1 partícula, logo <M>{"i = 1"}</M>. Solutos{" "}
          <strong>iônicos</strong> (eletrólitos) se separam em íons, multiplicando as partículas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Soluto</th><th>Tipo</th><th>Dissociação</th><th>Partículas</th><th>Fator <M>{"i"}</M></th></tr>
            </thead>
            <tbody>
              <tr><td>Glicose / Sacarose</td><td>Molecular (não-eletrólito)</td><td>não dissocia</td><td>1</td><td>1</td></tr>
              <tr><td>Etilenoglicol / Ureia</td><td>Molecular (não-eletrólito)</td><td>não dissocia</td><td>1</td><td>1</td></tr>
              <tr><td><M>{"\\text{NaCl}"}</M></td><td>Iônico (eletrólito)</td><td><M>{"\\text{Na}^{+} + \\text{Cl}^{-}"}</M></td><td>2</td><td>2</td></tr>
              <tr><td><M>{"\\text{CaCl}_2"}</M></td><td>Iônico (eletrólito)</td><td><M>{"\\text{Ca}^{2+} + 2\\,\\text{Cl}^{-}"}</M></td><td>3</td><td>3</td></tr>
              <tr><td><M>{"\\text{Al}_2(\\text{SO}_4)_3"}</M></td><td>Iônico (eletrólito)</td><td><M>{"2\\,\\text{Al}^{3+} + 3\\,\\text{SO}_4^{2-}"}</M></td><td>5</td><td>5</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            Para eletrólitos com dissociação parcial (grau <M>{"\\alpha"}</M>), usa-se{" "}
            <M>{"i = 1 + \\alpha(q - 1)"}</M>, onde <M>{"q"}</M> é o número de íons gerados. Para
            dissociação total, basta contar os íons. Conclusão prática: 1 mol de NaCl provoca o{" "}
            <strong>dobro</strong> do efeito coligativo de 1 mol de açúcar, porque libera o dobro de partículas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>6. Por que o Mesmo Número de Mols Pode Dar Efeitos Diferentes</h2>
        <p>
          Imagine três soluções aquosas, todas com molalidade <M>{"W = 1\\ \\text{mol/kg}"}</M>. O efeito
          coligativo (por exemplo, o abaixamento crioscópico) será proporcional a <M>{"W \\cdot i"}</M>:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Solução (1 mol/kg)</th><th>Fator <M>{"i"}</M></th><th><M>{"\\Delta T_c = 1{,}86 \\cdot W \\cdot i"}</M></th><th>Efeito relativo</th></tr>
            </thead>
            <tbody>
              <tr><td>Glicose (molecular)</td><td>1</td><td><M>{"1{,}86\\ \\text{°C}"}</M></td><td>1× (menor)</td></tr>
              <tr><td>NaCl</td><td>2</td><td><M>{"3{,}72\\ \\text{°C}"}</M></td><td>2×</td></tr>
              <tr><td><M>{"\\text{CaCl}_2"}</M></td><td>3</td><td><M>{"5{,}58\\ \\text{°C}"}</M></td><td>3× (maior)</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Por isso, na prática de derreter gelo, o <M>{"\\text{CaCl}_2"}</M> é mais eficiente que o sal de
          cozinha em mesma quantidade de matéria: gera mais partículas e abaixa mais o ponto de
          congelamento.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>7. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>💨</span>
            <h3>Tonoscopia</h3>
            <p>Soluto não volátil ↓ a pressão de vapor (Lei de Raoult).</p>
          </div>
          <div className="math-card">
            <span>🔥</span>
            <h3>Ebulioscopia</h3>
            <p><M>{"\\Delta T_e = K_e \\cdot W \\cdot i"}</M> — eleva o ponto de ebulição.</p>
          </div>
          <div className="math-card">
            <span>🧊</span>
            <h3>Crioscopia</h3>
            <p><M>{"\\Delta T_c = K_c \\cdot W \\cdot i"}</M> — abaixa o congelamento.</p>
          </div>
          <div className="math-card">
            <span>💧</span>
            <h3>Osmose</h3>
            <p><M>{"\\pi = M R T i"}</M>. Solvente vai ao lado mais concentrado.</p>
          </div>
          <div className="math-card">
            <span>🔢</span>
            <h3>van't Hoff</h3>
            <p><M>{"i"}</M> = nº de partículas. Molecular = 1; NaCl = 2; CaCl₂ = 3.</p>
          </div>
          <div className="math-card">
            <span>🎯</span>
            <h3>Regra central</h3>
            <p>Dependem da <em>quantidade</em> de partículas, não da natureza do soluto.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Efeito no ponto de ebulição"
          statement={<p>Ao adicionar sal de cozinha à água, o ponto de ebulição da solução, em relação à água pura:</p>}
          options={[
            { letter: "a", text: "Aumenta (ebulioscopia)", correct: true },
            { letter: "b", text: "Diminui" },
            { letter: "c", text: "Permanece exatamente igual" },
            { letter: "d", text: "Cai a zero" },
          ]}
          resolution={<p>O soluto não volátil reduz a pressão de vapor da solução; assim, é preciso mais temperatura para que ela iguale a pressão atmosférica e o líquido ferva. O ponto de ebulição aumenta — efeito ebulioscópico.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Sal nas estradas geladas"
          statement={<p>Em países frios, espalha-se sal nas estradas para evitar a formação de gelo. Essa prática baseia-se na:</p>}
          options={[
            { letter: "a", text: "Crioscopia (abaixamento do ponto de congelamento)", correct: true },
            { letter: "b", text: "Ebulioscopia (elevação do ponto de ebulição)" },
            { letter: "c", text: "Tonoscopia (abaixamento da pressão de vapor)" },
            { letter: "d", text: "Osmose através de membrana" },
          ]}
          resolution={<p>O sal dissolvido abaixa o ponto de congelamento da água (crioscopia). Assim, a água só congela em temperaturas bem abaixo de 0 °C, dificultando a formação de gelo na pista.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Fator de van't Hoff do CaCl₂"
          statement={<p>O fator de van't Hoff (<M>{"i"}</M>) para o <M>{"\\text{CaCl}_2"}</M>, considerando dissociação total, é:</p>}
          options={[
            { letter: "a", text: "3", correct: true },
            { letter: "b", text: "1" },
            { letter: "c", text: "2" },
            { letter: "d", text: "4" },
          ]}
          resolution={<p><M>{"\\text{CaCl}_2 \\rightarrow \\text{Ca}^{2+} + 2\\,\\text{Cl}^{-}"}</M> gera 3 íons por fórmula dissolvida, logo <M>{"i = 3"}</M>. Por isso o cloreto de cálcio é mais eficiente que o NaCl (i = 2) para derreter gelo.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Comparando efeitos coligativos"
          statement={<p>Duas soluções aquosas a 1 mol/L: uma de glicose (molecular) e outra de NaCl. Qual apresenta o maior efeito coligativo (maior elevação do ponto de ebulição)?</p>}
          options={[
            { letter: "a", text: "NaCl, pois se dissocia em 2 íons (mais partículas)", correct: true },
            { letter: "b", text: "Glicose, por ser molecular e mais pesada" },
            { letter: "c", text: "Ambas têm exatamente o mesmo efeito" },
            { letter: "d", text: "Nenhuma altera o ponto de ebulição" },
          ]}
          resolution={<p>As propriedades coligativas dependem do número de partículas. A glicose tem <M>{"i = 1"}</M> e o NaCl <M>{"i = 2"}</M>. Com o dobro de partículas em solução, o NaCl provoca o dobro do efeito coligativo.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Cálculo de pressão osmótica"
          statement={<p>Qual a pressão osmótica de uma solução 0,1 mol/L de glicose a 300 K? Dados: <M>{"R = 0{,}082\\ \\text{atm}\\cdot\\text{L}/(\\text{mol}\\cdot\\text{K})"}</M> e <M>{"i = 1"}</M>.</p>}
          options={[
            { letter: "a", text: "≈ 2,46 atm", correct: true },
            { letter: "b", text: "≈ 24,6 atm" },
            { letter: "c", text: "≈ 0,82 atm" },
            { letter: "d", text: "≈ 8,2 atm" },
          ]}
          resolution={<p><M block>{"\\pi = M \\cdot R \\cdot T \\cdot i = 0{,}1 \\times 0{,}082 \\times 300 \\times 1 = 2{,}46\\ \\text{atm}"}</M> Se o soluto fosse NaCl (i = 2), a pressão osmótica dobraria para 4,92 atm.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Conservação de alimentos por sal e açúcar"
          statement={<p>Carnes salgadas (charque) e frutas em calda conservam-se por meses sem refrigeração. A alta concentração de sal ou açúcar inibe os micro-organismos porque:</p>}
          options={[
            { letter: "a", text: "Por osmose, a água sai das células dos micro-organismos para o meio externo mais concentrado, desidratando-os.", correct: true },
            { letter: "b", text: "O sal e o açúcar aquecem o alimento, matando as bactérias pelo calor." },
            { letter: "c", text: "O sal reage quimicamente com o DNA dos micróbios, destruindo-o." },
            { letter: "d", text: "Açúcar e sal não têm nenhum efeito sobre micro-organismos." },
          ]}
          resolution={<p>O meio externo muito concentrado (rico em sal ou açúcar) faz a água atravessar a membrana celular dos micro-organismos por osmose — do meio menos concentrado (interior da célula) para o mais concentrado (exterior). Os micróbios desidratam e não se proliferam. É a base da conservação por salga e por calda.</p>}
        />
      </section>
    </article>
  );
}
