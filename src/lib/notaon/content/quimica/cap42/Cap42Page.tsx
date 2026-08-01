"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap42Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 42</span>
          <h1>Isomeria Espacial: Geométrica (cis-trans) e Óptica (quiralidade)</h1>
          <p>
            Duas moléculas podem ter exatamente a mesma fórmula molecular, a mesma ordem de ligação dos
            átomos — e ainda assim serem substâncias diferentes. O que as separa é o{" "}
            <strong>arranjo no espaço tridimensional</strong>. É por isso que uma gordura <em>trans</em> faz
            mal e a <em>cis</em> não, que a carvona cheira a hortelã ou a cominho conforme a forma, e que um
            mesmo medicamento — a talidomida — curava o enjoo numa versão e provocava malformações na outra.
            Neste capítulo você domina a <strong>estereoisomeria</strong>: a geométrica (cis/trans, Z/E) e a
            óptica (carbono quiral, enantiômeros e luz polarizada).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. Isomeria Espacial (Estereoisomeria)</h2>
        <p>
          A <strong>isomeria espacial</strong> ou <strong>estereoisomeria</strong> ocorre quando dois
          compostos possuem a mesma fórmula molecular <em>e</em> a mesma fórmula estrutural plana (a mesma
          conectividade: os mesmos átomos ligados aos mesmos vizinhos), diferindo apenas na{" "}
          <strong>disposição espacial</strong> dos átomos. Isso a distingue da isomeria plana (de cadeia,
          posição, função, etc.), na qual a própria estrutura plana muda.
        </p>
        <p>
          A estereoisomeria divide-se em dois grandes ramos, que estudaremos em sequência:
        </p>
        <ul>
          <li>
            <strong>Isomeria geométrica (cis-trans / Z-E):</strong> ligada à <strong>rigidez</strong> de uma
            dupla ligação ou de um anel, que impede a rotação e "congela" duas disposições distintas.
          </li>
          <li>
            <strong>Isomeria óptica:</strong> ligada à <strong>quiralidade</strong> — a molécula e sua
            imagem no espelho não são sobreponíveis, como a mão esquerda e a direita.
          </li>
        </ul>
        <div className="lesson-highlight">
          <p>
            <strong>Ideia-chave:</strong> em estereoisomeria, a fórmula plana é idêntica. Para enxergar a
            diferença é preciso pensar em <strong>três dimensões</strong> — o que a luz, as enzimas e o
            paladar do nosso corpo "enxergam" o tempo todo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cis/Trans</span>
        <h2>2. Isomeria Geométrica (Cis × Trans)</h2>
        <p>
          A isomeria geométrica aparece quando existe uma estrutura que <strong>impede a rotação livre</strong>{" "}
          dos átomos: uma <strong>dupla ligação</strong> (C=C) ou um <strong>anel</strong> (cicloalcano). Na
          dupla ligação, a ligação π trava os carbonos numa mesma posição relativa — eles não giram um em
          relação ao outro como aconteceria numa ligação simples.
        </p>
        <p>
          Mas a rigidez sozinha não basta. A condição completa para um composto de cadeia aberta com dupla
          ligação apresentar isomeria geométrica é:
        </p>
        <div className="lesson-highlight">
          <p>
            <strong>Cada um dos dois carbonos da dupla deve ter dois ligantes diferentes entre si.</strong>{" "}
            Se um dos carbonos repetir um ligante (por exemplo, dois H), não há cis/trans.
          </p>
        </div>
        <p>
          Quando a condição é satisfeita, surgem duas formas distintas. Tome o 2-buteno{" "}
          (<M>{"\\text{CH}_3-\\text{CH}=\\text{CH}-\\text{CH}_3"}</M>): cada carbono da dupla tem um{" "}
          <M>{"\\text{CH}_3"}</M> e um <M>{"\\text{H}"}</M> — ligantes diferentes. Logo:
        </p>
        <ul>
          <li>
            <strong>Cis:</strong> os ligantes <em>iguais</em> (ou de maior destaque) ficam do{" "}
            <strong>mesmo lado</strong> da dupla.
          </li>
          <li>
            <strong>Trans:</strong> ficam em <strong>lados opostos</strong>.
          </li>
        </ul>
        <p>
          A figura abaixo compara as duas disposições do 2-buteno. Repare que a única diferença está em
          qual lado da dupla ligação os grupos metila ocupam.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 250" width="480" height="250" aria-label="Isomeria cis-trans do 2-buteno">
            {/* Título cis */}
            <text x="120" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e40af">cis-2-buteno</text>
            {/* Dupla ligação C=C (cis) — dois traços horizontais */}
            <line x1="86" y1="118" x2="154" y2="118" stroke="#374151" strokeWidth="2.5"/>
            <line x1="86" y1="128" x2="154" y2="128" stroke="#374151" strokeWidth="2.5"/>
            {/* Carbonos */}
            <circle cx="80" cy="123" r="13" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="80" y="128" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">C</text>
            <circle cx="160" cy="123" r="13" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="160" y="128" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">C</text>
            {/* CH3 do mesmo lado (em cima) — cis */}
            <line x1="72" y1="111" x2="52" y2="80" stroke="#059669" strokeWidth="2"/>
            <text x="46" y="74" textAnchor="middle" fontSize="12" fill="#047857">CH₃</text>
            <line x1="168" y1="111" x2="188" y2="80" stroke="#059669" strokeWidth="2"/>
            <text x="194" y="74" textAnchor="middle" fontSize="12" fill="#047857">CH₃</text>
            {/* H embaixo */}
            <line x1="72" y1="135" x2="52" y2="166" stroke="#9ca3af" strokeWidth="2"/>
            <text x="46" y="182" textAnchor="middle" fontSize="12" fill="#6b7280">H</text>
            <line x1="168" y1="135" x2="188" y2="166" stroke="#9ca3af" strokeWidth="2"/>
            <text x="194" y="182" textAnchor="middle" fontSize="12" fill="#6b7280">H</text>
            <text x="120" y="212" textAnchor="middle" fontSize="11" fill="#047857">CH₃ do MESMO lado</text>

            {/* divisória vertical */}
            <line x1="240" y1="40" x2="240" y2="210" stroke="#e5e7eb" strokeWidth="1.5"/>

            {/* Título trans */}
            <text x="360" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e40af">trans-2-buteno</text>
            {/* Dupla ligação C=C (trans) */}
            <line x1="326" y1="118" x2="394" y2="118" stroke="#374151" strokeWidth="2.5"/>
            <line x1="326" y1="128" x2="394" y2="128" stroke="#374151" strokeWidth="2.5"/>
            <circle cx="320" cy="123" r="13" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="320" y="128" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">C</text>
            <circle cx="400" cy="123" r="13" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="400" y="128" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">C</text>
            {/* CH3 em lados opostos: esquerdo em cima, direito embaixo */}
            <line x1="312" y1="111" x2="292" y2="80" stroke="#059669" strokeWidth="2"/>
            <text x="286" y="74" textAnchor="middle" fontSize="12" fill="#047857">CH₃</text>
            <line x1="408" y1="135" x2="428" y2="166" stroke="#059669" strokeWidth="2"/>
            <text x="434" y="182" textAnchor="middle" fontSize="12" fill="#047857">CH₃</text>
            {/* H opostos */}
            <line x1="312" y1="135" x2="292" y2="166" stroke="#9ca3af" strokeWidth="2"/>
            <text x="286" y="182" textAnchor="middle" fontSize="12" fill="#6b7280">H</text>
            <line x1="408" y1="111" x2="428" y2="80" stroke="#9ca3af" strokeWidth="2"/>
            <text x="434" y="74" textAnchor="middle" fontSize="12" fill="#6b7280">H</text>
            <text x="360" y="212" textAnchor="middle" fontSize="11" fill="#047857">CH₃ em lados OPOSTOS</text>
          </svg>
          <figcaption>
            cis-2-buteno × trans-2-buteno: a dupla ligação C=C trava a rotação, e os grupos CH₃ ficam do
            mesmo lado (cis) ou em lados opostos (trans). São substâncias diferentes, com pontos de fusão e
            ebulição distintos.
          </figcaption>
        </figure>
        <p>
          Como a dupla ligação não gira, cis e trans são compostos <strong>distintos e isoláveis</strong>,
          com propriedades físicas diferentes. A tabela a seguir resume o contraste:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Aspecto</th><th>Cis</th><th>Trans</th></tr>
            </thead>
            <tbody>
              <tr><td>Posição dos ligantes destacados</td><td>Mesmo lado da dupla/anel</td><td>Lados opostos</td></tr>
              <tr><td>Simetria / polaridade</td><td>Geralmente mais polar (dipolos somam)</td><td>Mais simétrico (dipolos tendem a cancelar)</td></tr>
              <tr><td>Ponto de fusão</td><td>Menor (empacotamento pior)</td><td>Maior (empacota melhor no sólido)</td></tr>
              <tr><td>Exemplo (2-buteno)</td><td>P.E. ≈ 3,7 °C</td><td>P.E. ≈ 0,9 °C</td></tr>
              <tr><td>Em alimentos</td><td>Gordura cis (natural, óleos)</td><td>Gordura trans (hidrogenação, prejudicial)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Nomenclatura Z/E</span>
        <h2>3. Sistema Z/E (Cahn-Ingold-Prelog)</h2>
        <p>
          Os termos cis/trans funcionam bem quando há ligantes "iguais" a comparar. Mas quando cada carbono
          da dupla tem quatro grupos <em>todos diferentes</em>, "cis" e "trans" ficam ambíguos. Para esses
          casos usa-se o sistema <strong>Z/E</strong>, baseado na <strong>prioridade</strong> dos ligantes
          pelas regras de <strong>Cahn-Ingold-Prelog (CIP)</strong>: em cada carbono, o grupo de maior{" "}
          <strong>número atômico</strong> recebe a maior prioridade.
        </p>
        <div className="lesson-highlight">
          <ul>
            <li>
              <strong>Z</strong> (do alemão <em>zusammen</em>, "juntos"): os dois grupos de maior prioridade
              estão do <strong>mesmo lado</strong> da dupla.
            </li>
            <li>
              <strong>E</strong> (do alemão <em>entgegen</em>, "opostos"): os dois grupos de maior prioridade
              estão em <strong>lados opostos</strong>.
            </li>
          </ul>
          <p>
            Macete: na maioria dos casos simples, <strong>Z corresponde a cis</strong> e{" "}
            <strong>E corresponde a trans</strong> — mas a regra correta é sempre comparar prioridades, não
            "grupos iguais".
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Em ciclos</span>
        <h2>4. Isomeria Cis/Trans em Compostos Cíclicos</h2>
        <p>
          A dupla ligação não é a única fonte de rigidez: um <strong>anel</strong> também impede a rotação.
          Em cicloalcanos com dois substituintes em carbonos diferentes, os grupos podem estar do{" "}
          <strong>mesmo lado</strong> do plano do anel (cis) ou em <strong>lados opostos</strong> (trans).
        </p>
        <p>
          Exemplo: o 1,2-dimetilciclopropano existe nas formas cis (os dois metilas para "cima" do anel) e
          trans (um para cima, outro para baixo). Como o anel não gira para "desfazer" essa diferença, as
          duas formas são isômeros geométricos distintos.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Óptica</span>
        <h2>5. Isomeria Óptica e Carbono Quiral</h2>
        <p>
          O segundo grande ramo é a <strong>isomeria óptica</strong>, que se manifesta quando a molécula é{" "}
          <strong>quiral</strong>: ela e sua imagem especular <em>não</em> são sobreponíveis. A palavra vem
          do grego <em>kheir</em> ("mão") — pense nas suas mãos: a esquerda é a imagem da direita no
          espelho, mas você não consegue sobrepô-las perfeitamente (uma luva da mão direita não serve na
          esquerda).
        </p>
        <p>
          Em compostos orgânicos, a causa mais comum da quiralidade é o{" "}
          <strong>carbono quiral (ou assimétrico)</strong>, simbolizado por <strong>C*</strong>: um carbono
          ligado a <strong>quatro grupos diferentes</strong>. A figura mostra um carbono quiral e seu
          reflexo num espelho — os dois enantiômeros.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 270" width="480" height="270" aria-label="Carbono quiral e seu enantiômero refletidos num espelho">
            {/* plano do espelho */}
            <line x1="240" y1="20" x2="240" y2="250" stroke="#7c3aed" strokeWidth="2.5" strokeDasharray="7,5"/>
            <text x="240" y="265" textAnchor="middle" fontSize="11" fill="#5b21b6">plano do espelho</text>

            {/* Molécula esquerda */}
            <text x="120" y="30" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">Enantiômero 1</text>
            {/* C central */}
            <circle cx="120" cy="140" r="15" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="120" y="145" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">C*</text>
            {/* 4 ligantes (tetraédrico esquematizado) */}
            <line x1="120" y1="125" x2="120" y2="80" stroke="#374151" strokeWidth="2"/>
            <text x="120" y="72" textAnchor="middle" fontSize="12" fill="#dc2626">OH</text>
            <line x1="120" y1="155" x2="120" y2="200" stroke="#374151" strokeWidth="2"/>
            <text x="120" y="216" textAnchor="middle" fontSize="12" fill="#6b7280">H</text>
            <line x1="106" y1="148" x2="66" y2="172" stroke="#374151" strokeWidth="2"/>
            <text x="50" y="178" textAnchor="middle" fontSize="11" fill="#047857">COOH</text>
            <line x1="134" y1="148" x2="174" y2="172" stroke="#374151" strokeWidth="2"/>
            <text x="190" y="178" textAnchor="middle" fontSize="12" fill="#b45309">CH₃</text>

            {/* Molécula direita (espelhada) */}
            <text x="360" y="30" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">Enantiômero 2</text>
            <circle cx="360" cy="140" r="15" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="360" y="145" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">C*</text>
            <line x1="360" y1="125" x2="360" y2="80" stroke="#374151" strokeWidth="2"/>
            <text x="360" y="72" textAnchor="middle" fontSize="12" fill="#dc2626">OH</text>
            <line x1="360" y1="155" x2="360" y2="200" stroke="#374151" strokeWidth="2"/>
            <text x="360" y="216" textAnchor="middle" fontSize="12" fill="#6b7280">H</text>
            {/* espelhado: COOH agora à direita, CH3 à esquerda */}
            <line x1="374" y1="148" x2="414" y2="172" stroke="#374151" strokeWidth="2"/>
            <text x="430" y="178" textAnchor="middle" fontSize="11" fill="#047857">COOH</text>
            <line x1="346" y1="148" x2="306" y2="172" stroke="#374151" strokeWidth="2"/>
            <text x="290" y="178" textAnchor="middle" fontSize="12" fill="#b45309">CH₃</text>
          </svg>
          <figcaption>
            Carbono quiral (C*) ligado a quatro grupos diferentes — OH, H, COOH e CH₃ (ácido láctico). A
            molécula da direita é a imagem especular da esquerda: por mais que se gire, não há como
            sobrepô-las, exatamente como ocorre com a mão esquerda e a direita.
          </figcaption>
        </figure>
        <div className="lesson-highlight">
          <p>
            <strong>Atenção:</strong> se o carbono tiver dois ligantes <em>iguais</em>, ele deixa de ser
            quiral — a molécula passa a ser sobreponível à sua imagem (é dita <em>aquiral</em>).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Enantiômeros</span>
        <h2>6. Enantiômeros, Luz Polarizada, Dextrógiro e Levógiro</h2>
        <p>
          Os dois isômeros que são imagens especulares não sobreponíveis são chamados{" "}
          <strong>enantiômeros</strong>. Eles têm propriedades físicas iguais (mesmo ponto de fusão,
          ebulição, densidade) e só se diferenciam em <strong>duas situações</strong>: ao interagir com{" "}
          <strong>luz polarizada</strong> e ao interagir com outras moléculas quirais (como enzimas).
        </p>
        <p>
          A <strong>luz polarizada</strong> é uma onda luminosa que vibra em um único plano. Quando ela
          atravessa uma solução de uma substância opticamente ativa, o plano de vibração é{" "}
          <strong>desviado</strong> (girado). Por isso esses compostos têm <strong>atividade óptica</strong>.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 220" width="480" height="220" aria-label="Desvio do plano da luz polarizada por substância opticamente ativa">
            {/* eixo de propagação */}
            <line x1="40" y1="110" x2="440" y2="110" stroke="#374151" strokeWidth="1.5" markerEnd="url(#cap42axis)"/>
            <text x="240" y="205" textAnchor="middle" fontSize="11" fill="#374151">direção de propagação da luz →</text>

            {/* luz polarizada incidente (vibra no vertical) */}
            <line x1="80" y1="70" x2="80" y2="150" stroke="#2563eb" strokeWidth="2.5"/>
            <text x="80" y="60" textAnchor="middle" fontSize="10" fill="#1e40af">luz polarizada</text>

            {/* amostra (cubeta) */}
            <rect x="180" y="78" width="120" height="64" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="4"/>
            <text x="240" y="105" textAnchor="middle" fontSize="11" fill="#92400e">amostra</text>
            <text x="240" y="122" textAnchor="middle" fontSize="11" fill="#92400e">quiral</text>

            {/* dextrógiro — plano girado à direita (sentido horário) */}
            <line x1="380" y1="80" x2="400" y2="140" stroke="#059669" strokeWidth="2.5"/>
            <text x="408" y="74" fontSize="10" fill="#047857">dextrógiro (+)</text>
            <path d="M 360 110 A 24 24 0 0 1 384 92" fill="none" stroke="#059669" strokeWidth="1.5" markerEnd="url(#cap42d)"/>

            {/* levógiro — plano girado à esquerda (sentido anti-horário) */}
            <line x1="360" y1="140" x2="340" y2="80" stroke="#dc2626" strokeWidth="2.5"/>
            <text x="318" y="168" fontSize="10" fill="#991b1b">levógiro (−)</text>
            <path d="M 360 110 A 24 24 0 0 0 336 128" fill="none" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#cap42l)"/>

            <defs>
              <marker id="cap42axis" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker>
              <marker id="cap42d" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#059669"/></marker>
              <marker id="cap42l" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#dc2626"/></marker>
            </defs>
          </svg>
          <figcaption>
            Ao atravessar uma solução quiral, o plano da luz polarizada gira. Um enantiômero desvia para a
            direita (dextrógiro, +); o outro, para a esquerda (levógiro, −), no mesmo ângulo.
          </figcaption>
        </figure>
        <div className="lesson-highlight">
          <ul>
            <li><strong>Dextrógiro (d ou +):</strong> desvia o plano da luz para a <strong>direita</strong>.</li>
            <li><strong>Levógiro (l ou −):</strong> desvia para a <strong>esquerda</strong>, com o mesmo ângulo (sinal oposto).</li>
            <li>
              <strong>Mistura racêmica (racemato):</strong> 50% de cada enantiômero. Os desvios se{" "}
              <strong>cancelam por compensação externa</strong> → a mistura é{" "}
              <strong>opticamente inativa</strong>.
            </li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contagem</span>
        <h2>7. Número de Isômeros Ópticos: a Regra 2ⁿ</h2>
        <p>
          Quando uma molécula tem vários carbonos quirais diferentes, o número de estereoisômeros ópticos
          cresce rapidamente. A regra geral é:
        </p>
        <div className="math-block">
          <h3>Fórmula de van't Hoff</h3>
          <p><M block>{"N_{\\text{isomeros}} = 2^{n}"}</M></p>
          <p>onde <M>{"n"}</M> é o número de <strong>carbonos quirais diferentes</strong> na molécula.</p>
        </div>
        <p>
          Assim, 1 carbono quiral gera <M>{"2^1 = 2"}</M> enantiômeros; 2 carbonos quirais distintos geram{" "}
          <M>{"2^2 = 4"}</M>; 3 geram <M>{"2^3 = 8"}</M>, e assim por diante. Esses isômeros se organizam em
          pares de enantiômeros; isômeros que <em>não</em> são imagens especulares entre si são chamados de{" "}
          <strong>diastereoisômeros</strong>.
        </p>
        <div className="lesson-highlight">
          <p>
            <strong>Observação:</strong> em moléculas com simetria interna, alguns desses <M>{"2^n"}</M>{" "}
            arranjos podem coincidir, formando um composto <em>meso</em> (opticamente inativo por compensação{" "}
            <em>interna</em>, mesmo tendo carbonos quirais). Por isso <M>{"2^n"}</M> é o número{" "}
            <strong>máximo</strong> de isômeros ativos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Importância</span>
        <h2>8. Por que a Quiralidade Importa: Biologia e Cotidiano</h2>
        <p>
          Os enantiômeros têm propriedades físicas idênticas, mas o nosso corpo é construído por moléculas{" "}
          <strong>quirais</strong> (proteínas, açúcares, DNA). Como uma luva só serve numa mão, uma enzima ou
          um receptor só reconhece bem um dos enantiômeros. Por isso os dois podem ter{" "}
          <strong>efeitos biológicos completamente diferentes</strong>.
        </p>
        <ul>
          <li>
            <strong>Talidomida:</strong> vendida nos anos 1960 contra enjoos na gravidez. Um enantiômero era{" "}
            sedativo; o outro era <strong>teratogênico</strong>, causando graves malformações em fetos. O
            caso mudou a regulação de medicamentos no mundo inteiro.
          </li>
          <li>
            <strong>Carvona:</strong> o enantiômero R cheira a <strong>hortelã</strong>; o S cheira a{" "}
            <strong>cominho/alcaravia</strong>. Mesma fórmula, aromas opostos — porque os receptores
            olfativos são quirais.
          </li>
          <li>
            <strong>Açúcares:</strong> nosso metabolismo usa a <strong>D-glicose</strong>; a L-glicose,
            imagem especular, é praticamente não metabolizada. Aminoácidos das proteínas são quase todos da
            série L.
          </li>
          <li>
            <strong>Fármacos modernos:</strong> hoje muitos medicamentos são vendidos como{" "}
            <strong>enantiômero puro</strong> (ibuprofeno, omeprazol → esomeprazol) para maximizar o efeito e
            reduzir reações adversas.
          </li>
        </ul>
        <p>A tabela resume o comportamento óptico das três situações típicas:</p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Forma</th><th>Símbolo</th><th>Desvio da luz polarizada</th><th>Atividade óptica</th></tr>
            </thead>
            <tbody>
              <tr><td>Dextrógiro</td><td>d ou (+)</td><td>Para a direita (+α)</td><td>Ativo</td></tr>
              <tr><td>Levógiro</td><td>l ou (−)</td><td>Para a esquerda (−α)</td><td>Ativo</td></tr>
              <tr><td>Mistura racêmica</td><td>(±) ou dl</td><td>Nulo (compensação externa)</td><td>Inativo</td></tr>
              <tr><td>Composto meso</td><td>meso</td><td>Nulo (compensação interna)</td><td>Inativo</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🧭</span>
            <h3>Estereoisomeria</h3>
            <p>Mesma fórmula plana, arranjo espacial diferente. Geométrica ou óptica.</p>
          </div>
          <div className="math-card">
            <span>↔️</span>
            <h3>Cis/Trans</h3>
            <p>Dupla ligação ou anel + 2 ligantes diferentes em cada C. Rotação impedida.</p>
          </div>
          <div className="math-card">
            <span>🔤</span>
            <h3>Z/E</h3>
            <p>Por prioridade (CIP): Z = maiores juntos; E = opostos.</p>
          </div>
          <div className="math-card">
            <span>✋</span>
            <h3>Carbono quiral</h3>
            <p>C* com 4 grupos diferentes → molécula não sobreponível à imagem.</p>
          </div>
          <div className="math-card">
            <span>🪞</span>
            <h3>Enantiômeros</h3>
            <p>Imagens especulares. Dextrógiro (+) / levógiro (−). Racemato = inativo.</p>
          </div>
          <div className="math-card">
            <span>🔢</span>
            <h3>Regra 2ⁿ</h3>
            <p><M>{"2^n"}</M> isômeros ópticos (n = nº de C quirais diferentes).</p>
          </div>
          <div className="math-card">
            <span>💊</span>
            <h3>Biologia</h3>
            <p>Talidomida, carvona, D-glicose: efeitos opostos por reconhecimento quiral.</p>
          </div>
          <div className="math-card">
            <span>🌗</span>
            <h3>Luz polarizada</h3>
            <p>Atividade óptica = capacidade de girar o plano da luz polarizada.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Carbono quiral"
          statement={<p>Um carbono quiral (assimétrico), simbolizado por C*, é aquele ligado a:</p>}
          options={[
            { letter: "a", text: "Quatro grupos diferentes entre si", correct: true },
            { letter: "b", text: "Quatro grupos iguais" },
            { letter: "c", text: "Dois grupos iguais e dois diferentes" },
            { letter: "d", text: "Apenas átomos de hidrogênio" },
          ]}
          resolution={<p>O carbono quiral liga-se a <strong>quatro ligantes diferentes</strong>. Essa assimetria torna a molécula não sobreponível à sua imagem especular, originando a isomeria óptica. Se houver dois ligantes iguais, o carbono deixa de ser quiral.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Condição para cis/trans"
          statement={<p>A isomeria geométrica (cis/trans) ocorre quando o composto apresenta:</p>}
          options={[
            { letter: "a", text: "Uma dupla ligação (ou ciclo) com dois ligantes diferentes em cada carbono", correct: true },
            { letter: "b", text: "Somente ligações simples e rotação livre" },
            { letter: "c", text: "Pelo menos um carbono quiral" },
            { letter: "d", text: "Obrigatoriamente um anel aromático" },
          ]}
          resolution={<p>Cis/trans exige <strong>rotação impedida</strong> (dupla ligação ou anel) <em>e</em> que cada carbono envolvido tenha dois ligantes diferentes entre si. Sem essas duas condições, não há isomeria geométrica.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Identificando cis/trans"
          statement={<p>Considere o 1,2-dicloroeteno (<M>{"\\text{ClCH}=\\text{CHCl}"}</M>). Sobre suas formas cis e trans, é correto afirmar:</p>}
          options={[
            { letter: "a", text: "No cis, os dois Cl ficam do mesmo lado da dupla; no trans, em lados opostos.", correct: true },
            { letter: "b", text: "As duas formas são idênticas e interconvertíveis por rotação." },
            { letter: "c", text: "O composto não apresenta isomeria geométrica." },
            { letter: "d", text: "Cis e trans têm fórmulas moleculares diferentes." },
          ]}
          resolution={<p>Cada carbono da dupla tem um Cl e um H (ligantes diferentes), então há cis/trans. No <strong>cis</strong> os dois Cl estão do mesmo lado; no <strong>trans</strong>, em lados opostos. A dupla ligação impede a rotação, então as formas não se interconvertem e a fórmula molecular é a mesma (<M>{"\\text{C}_2\\text{H}_2\\text{Cl}_2"}</M>).</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Mistura racêmica"
          statement={<p>Uma mistura racêmica (racemato) é caracterizada por:</p>}
          options={[
            { letter: "a", text: "Quantidades iguais (50%/50%) dos dois enantiômeros, sendo opticamente inativa por compensação externa", correct: true },
            { letter: "b", text: "Conter apenas o enantiômero dextrógiro" },
            { letter: "c", text: "Ser formada por isômeros de fórmulas moleculares diferentes" },
            { letter: "d", text: "Desviar a luz polarizada fortemente para a direita" },
          ]}
          resolution={<p>No racemato há partes iguais de dextrógiro e levógiro. Como cada um desvia a luz no mesmo ângulo, mas em sentidos opostos, os desvios se <strong>cancelam</strong> (compensação externa), tornando a mistura <strong>opticamente inativa</strong>.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Número de isômeros ópticos"
          statement={<p>Uma molécula possui 3 carbonos quirais diferentes e nenhuma simetria interna. O número máximo de isômeros ópticos é:</p>}
          options={[
            { letter: "a", text: "8 (2³)", correct: true },
            { letter: "b", text: "6 (3 × 2)" },
            { letter: "c", text: "3" },
            { letter: "d", text: "4 (2²)" },
          ]}
          resolution={<p>O número de isômeros ópticos é <M>{"2^n"}</M>, com n = número de carbonos quirais diferentes. Para n = 3: <M>{"2^3 = 8"}</M> isômeros, organizados em 4 pares de enantiômeros.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) O caso da talidomida"
          statement={<p>A talidomida, usada nos anos 1960 contra enjoos na gravidez, provocou graves malformações em recém-nascidos. Estudos posteriores mostraram que um de seus enantiômeros é sedativo, enquanto o outro é teratogênico. Esse caso histórico ilustra que enantiômeros:</p>}
          options={[
            { letter: "a", text: "Apesar de terem propriedades físicas idênticas, podem produzir efeitos biológicos completamente diferentes ao interagir com as moléculas quirais do organismo.", correct: true },
            { letter: "b", text: "São substâncias idênticas em todos os aspectos, inclusive biológicos." },
            { letter: "c", text: "Possuem fórmulas moleculares diferentes, o que explica a toxicidade." },
            { letter: "d", text: "Não conseguem interagir com enzimas ou receptores do corpo humano." },
          ]}
          resolution={<p>Enantiômeros têm as mesmas propriedades físicas, mas o organismo é formado por moléculas quirais (enzimas, receptores). Como uma luva que só serve numa mão, cada enantiômero é reconhecido de forma diferente — daí efeitos opostos como sedativo × teratogênico. Por isso a quiralidade é crucial na indústria farmacêutica, que hoje busca produzir o enantiômero puro desejado.</p>}
        />
      </section>
    </article>
  );
}
