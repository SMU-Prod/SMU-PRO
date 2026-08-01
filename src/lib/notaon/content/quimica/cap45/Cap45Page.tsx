"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap45Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 45</span>
          <h1>Química Ambiental e Noções de Bioquímica</h1>
          <p>
            Chegamos ao capítulo final — e ele é, talvez, o mais cobrado pelo ENEM. Aqui a química se
            encontra com o planeta e com a vida: por que a Terra está aquecendo, o que torna a chuva
            ácida e por que os CFCs abriram um buraco na camada de ozônio; e, do outro lado, como
            açúcares, gorduras e proteínas — as biomoléculas — sustentam todo ser vivo. São temas que o
            vestibular adora porque ligam fórmulas a notícias de jornal.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Atmosfera</span>
        <h2>1. A Atmosfera e os Principais Poluentes</h2>
        <p>
          A atmosfera é uma mistura de gases (≈ 78% <M>{"\\text{N}_2"}</M>, 21% <M>{"\\text{O}_2"}</M>,
          1% de outros) que protege e regula a temperatura do planeta. A <strong>poluição
          atmosférica</strong> ocorre quando substâncias em concentração anormal — em geral provenientes
          da queima de combustíveis fósseis e de processos industriais — passam a causar danos à saúde e
          ao ambiente. Antes de entrar em cada fenômeno, vale organizar os poluentes mais cobrados, suas
          fontes e seus efeitos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Poluente</th><th>Fonte principal</th><th>Efeito ambiental / à saúde</th></tr>
            </thead>
            <tbody>
              <tr><td><M>{"\\text{CO}_2"}</M> (gás carbônico)</td><td>Queima de combustíveis fósseis e desmatamento</td><td>Intensifica o efeito estufa</td></tr>
              <tr><td><M>{"\\text{CO}"}</M> (monóxido de carbono)</td><td>Combustão incompleta (motores)</td><td>Tóxico — liga-se à hemoglobina, asfixia</td></tr>
              <tr><td><M>{"\\text{SO}_2"}</M> / <M>{"\\text{SO}_3"}</M></td><td>Queima de carvão e derivados de petróleo (enxofre)</td><td>Chuva ácida (<M>{"\\text{H}_2\\text{SO}_4"}</M>)</td></tr>
              <tr><td><M>{"\\text{NO}_x"}</M> (<M>{"\\text{NO}"}</M>, <M>{"\\text{NO}_2"}</M>)</td><td>Motores a alta temperatura</td><td>Chuva ácida (<M>{"\\text{HNO}_3"}</M>), smog</td></tr>
              <tr><td>Material particulado (MP)</td><td>Fuligem, poeira industrial, diesel</td><td>Doenças respiratórias, smog</td></tr>
              <tr><td>CFCs (clorofluorcarbonos)</td><td>Aerossóis e refrigeradores antigos</td><td>Destroem a camada de ozônio</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            Atenção à diferença que o ENEM cobra: o <strong>efeito estufa</strong> (troposfera) e a{" "}
            <strong>camada de ozônio</strong> (estratosfera) são fenômenos <em>distintos</em>. CFC ataca o
            ozônio; <M>{"\\text{CO}_2"}</M> intensifica o efeito estufa. Confundi-los é o erro clássico.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Clima</span>
        <h2>2. Efeito Estufa e Aquecimento Global</h2>
        <p>
          O Sol emite radiação de alta energia (luz visível e ultravioleta) que atravessa a atmosfera e
          aquece a superfície da Terra. A Terra, mais fria, devolve essa energia como{" "}
          <strong>radiação infravermelha</strong> (calor). Gases como <M>{"\\text{CO}_2"}</M>,{" "}
          <M>{"\\text{CH}_4"}</M> (metano), <M>{"\\text{N}_2\\text{O}"}</M> e o vapor d'água absorvem parte
          desse infravermelho e o reemitem em todas as direções — inclusive de volta ao solo. Esse calor
          retido é o <strong>efeito estufa</strong>.
        </p>
        <p>
          O efeito estufa é <strong>natural e essencial</strong>: sem ele, a temperatura média do planeta
          seria de cerca de −18 °C. O problema é a sua <strong>intensificação</strong> pela emissão
          crescente de gases, sobretudo na queima de combustíveis fósseis e no desmatamento — o que provoca
          o <strong>aquecimento global</strong>.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 300" width="480" height="300" aria-label="Diagrama do efeito estufa">
            {/* céu */}
            <rect x="0" y="0" width="480" height="300" fill="#eff6ff"/>
            {/* Sol */}
            <circle cx="60" cy="50" r="30" fill="#f59e0b" stroke="#b45309" strokeWidth="2"/>
            <text x="60" y="55" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c2d12">Sol</text>
            {/* Terra (solo) */}
            <rect x="0" y="248" width="480" height="52" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            <text x="240" y="280" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#065f46">Superfície da Terra</text>
            {/* camada de gases estufa */}
            <rect x="20" y="110" width="440" height="40" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6,4" rx="6"/>
            <text x="240" y="135" textAnchor="middle" fontSize="11" fill="#92400e">Gases estufa: CO₂ · CH₄ · N₂O · vapor d'água</text>
            {/* radiação solar entrando (amarela, atravessa) */}
            <line x1="88" y1="74" x2="200" y2="246" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#es-sun)"/>
            <text x="120" y="190" fontSize="10" fill="#b45309" transform="rotate(58,120,190)">radiação solar</text>
            {/* infravermelho subindo que escapa */}
            <line x1="300" y1="246" x2="340" y2="116" stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#es-ir)"/>
            {/* infravermelho refletido de volta (retido) */}
            <line x1="345" y1="148" x2="310" y2="244" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5,4" markerEnd="url(#es-ir)"/>
            <text x="356" y="200" fontSize="10" fill="#991b1b">IR retido ↺</text>
            {/* infravermelho que escapa para o espaço */}
            <line x1="420" y1="246" x2="445" y2="40" stroke="#dc2626" strokeWidth="2" markerEnd="url(#es-ir)"/>
            <text x="406" y="90" fontSize="9" fill="#991b1b">parte escapa</text>
            <defs>
              <marker id="es-sun" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f59e0b"/></marker>
              <marker id="es-ir" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/></marker>
            </defs>
          </svg>
          <figcaption>A radiação solar (amarela) atravessa a atmosfera e aquece o solo; o calor infravermelho (vermelho) emitido de volta é parcialmente retido pelos gases estufa, aquecendo a Terra.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <h3>Combustíveis fósseis × renováveis</h3>
          <p>
            Combustíveis <strong>fósseis</strong> (petróleo, carvão, gás natural) liberam carbono que
            ficou estocado por milhões de anos, aumentando o <M>{"\\text{CO}_2"}</M> atmosférico.
            Combustíveis <strong>renováveis</strong> como etanol e biodiesel são considerados de balanço
            de carbono mais favorável, pois o <M>{"\\text{CO}_2"}</M> liberado na queima já havia sido
            absorvido pela planta na fotossíntese.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estratosfera</span>
        <h2>3. Camada de Ozônio e os CFCs</h2>
        <p>
          Na estratosfera (15–50 km de altitude) existe uma concentração maior de{" "}
          <strong>ozônio</strong> (<M>{"\\text{O}_3"}</M>), formado naturalmente quando a radiação UV
          quebra moléculas de <M>{"\\text{O}_2"}</M>. Essa camada absorve a maior parte da radiação{" "}
          <strong>ultravioleta</strong> nociva do Sol — protegendo a vida de queimaduras, câncer de pele
          e danos ao DNA.
        </p>
        <p>
          Os <strong>CFCs</strong> (clorofluorcarbonos), usados em aerossóis e refrigeradores antigos,
          sobem até a estratosfera, onde a radiação UV libera átomos de <strong>cloro</strong>. Esse
          cloro decompõe o ozônio em <strong>reação em cadeia</strong>: um único átomo de cloro destrói
          milhares de moléculas de <M>{"\\text{O}_3"}</M>, abrindo o "buraco na camada de ozônio".
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 270" width="480" height="270" aria-label="Formação e destruição do ozônio pelos CFCs">
            {/* Formação (esquerda) */}
            <text x="120" y="28" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">FORMAÇÃO (natural)</text>
            <text x="120" y="70" textAnchor="middle" fontSize="13" fill="#374151">O₂ + O</text>
            <line x1="80" y1="90" x2="120" y2="120" stroke="#059669" strokeWidth="2" markerEnd="url(#oz-g)"/>
            <text x="55" y="108" fontSize="11" fill="#047857">UV</text>
            <circle cx="120" cy="150" r="26" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="120" y="155" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e40af">O₃</text>
            <text x="120" y="205" textAnchor="middle" fontSize="10" fill="#1e40af">ozônio absorve UV</text>

            {/* divisória */}
            <line x1="240" y1="40" x2="240" y2="240" stroke="#e5e7eb" strokeWidth="1.5"/>

            {/* Destruição (direita) */}
            <text x="360" y="28" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#991b1b">DESTRUIÇÃO (CFC)</text>
            <rect x="300" y="52" width="56" height="26" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" rx="4"/>
            <text x="328" y="70" textAnchor="middle" fontSize="11" fill="#991b1b">CFC</text>
            <line x1="328" y1="80" x2="380" y2="110" stroke="#dc2626" strokeWidth="2" markerEnd="url(#oz-r)"/>
            <text x="356" y="98" fontSize="10" fill="#991b1b">UV libera Cl</text>
            <circle cx="400" cy="130" r="20" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2"/>
            <text x="400" y="135" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#5b21b6">Cl</text>
            {/* Cl + O3 -> ClO + O2 (cadeia) */}
            <line x1="388" y1="150" x2="350" y2="190" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#oz-p)"/>
            <text x="360" y="215" textAnchor="middle" fontSize="11" fill="#5b21b6">Cl + O₃ → ClO + O₂</text>
            <text x="360" y="232" textAnchor="middle" fontSize="9" fill="#991b1b">(reação em cadeia)</text>
            <defs>
              <marker id="oz-g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#059669"/></marker>
              <marker id="oz-r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/></marker>
              <marker id="oz-p" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/></marker>
            </defs>
          </svg>
          <figcaption>À esquerda, a formação natural do ozônio absorve UV; à direita, a radiação UV libera cloro dos CFCs, que destrói o O₃ em uma reação em cadeia.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <p>
            O <strong>Protocolo de Montreal</strong> (1987) baniu os CFCs mundialmente. É considerado o
            maior sucesso ambiental da história: a camada de ozônio vem se recuperando lentamente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Poluição</span>
        <h2>4. Chuva Ácida e Inversão Térmica</h2>
        <p>
          A chuva é naturalmente um pouco ácida (pH ≈ 5,6) porque o <M>{"\\text{CO}_2"}</M> dissolve
          formando ácido carbônico. Chamamos de <strong>chuva ácida</strong> quando o pH cai bem abaixo
          disso, devido aos óxidos de enxofre e nitrogênio:
        </p>
        <div className="math-block">
          <p><M block>{"\\text{SO}_2 + \\tfrac{1}{2}\\text{O}_2 \\rightarrow \\text{SO}_3 \\quad ; \\quad \\text{SO}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_4"}</M></p>
          <p><M block>{"3\\,\\text{NO}_2 + \\text{H}_2\\text{O} \\rightarrow 2\\,\\text{HNO}_3 + \\text{NO}"}</M></p>
        </div>
        <p>
          A chuva ácida corrói monumentos de mármore e metais, acidifica lagos e rios (matando peixes) e
          danifica florestas e solos. É um problema grave em regiões industriais.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌫️</span>
            <h3>Inversão térmica</h3>
            <p>Normalmente o ar quente sobe e dispersa os poluentes. Na inversão, uma camada de ar quente fica <em>acima</em> do ar frio e "tampa" a dispersão, concentrando os poluentes perto do solo — comum no inverno das grandes cidades.</p>
          </div>
          <div className="lesson-card">
            <span>🌧️</span>
            <h3>Chuva ácida</h3>
            <p><M>{"\\text{SO}_2"}</M> e <M>{"\\text{NO}_x"}</M> reagem com água e oxigênio do ar formando <M>{"\\text{H}_2\\text{SO}_4"}</M> e <M>{"\\text{HNO}_3"}</M>, que baixam o pH da chuva.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Hidrosfera</span>
        <h2>5. Poluição e Tratamento da Água</h2>
        <p>
          A poluição da água tem dois protagonistas no ENEM. A <strong>eutrofização</strong> ocorre
          quando esgoto e fertilizantes (ricos em nitrogênio e fósforo) caem em lagos, provocando
          crescimento excessivo de algas; ao morrerem, elas são decompostas por bactérias que consomem o
          <M>{"\\text{O}_2"}</M> dissolvido, asfixiando peixes. A <strong>DBO</strong> (Demanda
          Bioquímica de Oxigênio) mede justamente quanto oxigênio os micro-organismos consomem — quanto
          maior a DBO, mais poluída a água.
        </p>
        <p>
          O <strong>tratamento de água</strong> potável segue etapas clássicas:{" "}
          <strong>coagulação/floculação</strong> (sulfato de alumínio agrega as partículas em flocos),{" "}
          <strong>decantação</strong> (os flocos sedimentam), <strong>filtração</strong> (areia retém
          sólidos finos), <strong>cloração</strong> (desinfecção, mata micro-organismos) e, às vezes,{" "}
          <strong>fluoretação</strong> (prevenção de cáries).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Bioquímica</span>
        <h2>6. As Biomoléculas: Visão Geral</h2>
        <p>
          A <strong>bioquímica</strong> estuda as moléculas da vida, quase todas baseadas em carbono. As
          quatro grandes classes — carboidratos, lipídios, proteínas e ácidos nucleicos — têm funções
          complementares: fornecer e estocar energia, formar estruturas e armazenar a informação genética.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Classe</th><th>Função principal</th><th>Exemplos</th></tr>
            </thead>
            <tbody>
              <tr><td>Carboidratos</td><td>Fonte e reserva de energia rápida; estrutura vegetal</td><td>Glicose, sacarose, amido, celulose</td></tr>
              <tr><td>Lipídios</td><td>Reserva de energia, isolamento, membranas</td><td>Triglicerídeos, fosfolipídios, colesterol</td></tr>
              <tr><td>Proteínas</td><td>Estrutura, transporte, defesa, catálise</td><td>Hemoglobina, colágeno, enzimas</td></tr>
              <tr><td>Ácidos nucleicos</td><td>Armazenam e transmitem a informação genética</td><td>DNA, RNA</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Bioquímica</span>
        <h2>7. Carboidratos (Glicídios)</h2>
        <p>
          São a principal fonte de energia das células, com fórmula geral aproximada{" "}
          <M>{"\\text{C}_n(\\text{H}_2\\text{O})_n"}</M> (daí o nome "hidratos de carbono"). Classificam-se
          pelo tamanho:
        </p>
        <ul>
          <li><strong>Monossacarídeos:</strong> os mais simples — glicose, frutose, galactose (<M>{"\\text{C}_6\\text{H}_{12}\\text{O}_6"}</M>).</li>
          <li><strong>Dissacarídeos:</strong> dois monossacarídeos unidos — sacarose (glicose + frutose), lactose (glicose + galactose), maltose.</li>
          <li><strong>Polissacarídeos:</strong> longas cadeias — amido (reserva nos vegetais), glicogênio (reserva nos animais) e celulose (estrutura da parede vegetal, indigerível pelo ser humano).</li>
        </ul>
        <p>
          A glicose existe predominantemente em forma de <strong>anel</strong> (estrutura cíclica) em
          solução. Veja a representação simplificada do anel da glicose:
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 360 260" width="360" height="260" aria-label="Estrutura cíclica da glicose">
            {/* hexágono do anel piranose */}
            <polygon points="180,60 250,100 250,170 180,210 110,170 110,100" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5"/>
            {/* oxigênio do anel (vértice superior direito) */}
            <circle cx="250" cy="100" r="14" fill="#fee2e2" stroke="#dc2626" strokeWidth="2"/>
            <text x="250" y="105" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#991b1b">O</text>
            {/* carbonos */}
            <text x="180" y="50" textAnchor="middle" fontSize="11" fill="#374151">C</text>
            <text x="262" y="178" textAnchor="middle" fontSize="11" fill="#374151">C</text>
            <text x="180" y="228" textAnchor="middle" fontSize="11" fill="#374151">C</text>
            <text x="98" y="178" textAnchor="middle" fontSize="11" fill="#374151">C</text>
            <text x="98" y="100" textAnchor="middle" fontSize="11" fill="#374151">C</text>
            {/* grupos OH */}
            <line x1="180" y1="60" x2="180" y2="30" stroke="#374151" strokeWidth="1.5"/>
            <text x="180" y="22" textAnchor="middle" fontSize="11" fill="#059669">CH₂OH</text>
            <line x1="250" y1="170" x2="285" y2="190" stroke="#374151" strokeWidth="1.5"/>
            <text x="305" y="195" textAnchor="middle" fontSize="11" fill="#059669">OH</text>
            <line x1="180" y1="210" x2="180" y2="240" stroke="#374151" strokeWidth="1.5"/>
            <text x="180" y="252" textAnchor="middle" fontSize="11" fill="#059669">OH</text>
            <line x1="110" y1="170" x2="75" y2="190" stroke="#374151" strokeWidth="1.5"/>
            <text x="55" y="195" textAnchor="middle" fontSize="11" fill="#059669">OH</text>
            <line x1="110" y1="100" x2="75" y2="82" stroke="#374151" strokeWidth="1.5"/>
            <text x="55" y="80" textAnchor="middle" fontSize="11" fill="#059669">OH</text>
            <text x="180" y="140" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">glicose (anel)</text>
          </svg>
          <figcaption>Forma cíclica (piranose) da glicose: anel de 5 carbonos e 1 oxigênio, com várias hidroxilas (–OH) que a tornam muito solúvel em água.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Bioquímica</span>
        <h2>8. Lipídios</h2>
        <p>
          Os <strong>lipídios</strong> são moléculas <strong>apolares</strong> — insolúveis em água, mas
          solúveis em solventes orgânicos. Os mais comuns são os <strong>triglicerídeos</strong>: ésteres
          formados por uma molécula de <strong>glicerol</strong> ligada a três <strong>ácidos
          graxos</strong> (longas cadeias carbônicas com –COOH na ponta).
        </p>
        <p>
          A diferença entre uma gordura e um óleo está nos ácidos graxos:
        </p>
        <ul>
          <li><strong>Ácidos graxos saturados</strong> (sem duplas ligações): cadeia reta, empacotam bem → <strong>gorduras sólidas</strong> à temperatura ambiente (banha, manteiga). Predominam nos produtos animais.</li>
          <li><strong>Ácidos graxos insaturados</strong> (com duplas ligações): a dupla "entorta" a cadeia → <strong>óleos líquidos</strong> (azeite, óleos vegetais). A hidrogenação de óleos produz a gordura <em>trans</em>.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Funções dos lipídios</h3>
          <p>
            Reserva de energia (mais que o dobro de energia por grama em relação aos carboidratos),
            isolamento térmico, proteção mecânica de órgãos e — nos <strong>fosfolipídios</strong> —
            formação das <strong>membranas celulares</strong>. O <strong>colesterol</strong> é um esteroide
            essencial, mas em excesso favorece doenças cardiovasculares.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Bioquímica</span>
        <h2>9. Aminoácidos, Ligação Peptídica e Proteínas</h2>
        <p>
          Os <strong>aminoácidos</strong> são os blocos das proteínas. Cada um possui, no mesmo carbono,
          um grupo <strong>amino</strong> (<M>{"-\\text{NH}_2"}</M>) e um grupo <strong>carboxila</strong>{" "}
          (<M>{"-\\text{COOH}"}</M>), além de um radical R que define o aminoácido. Existem 20 aminoácidos
          naturais, e suas combinações geram a imensa diversidade de proteínas.
        </p>
        <p>
          Dois aminoácidos se unem por uma <strong>ligação peptídica</strong>: o –COOH de um reage com o
          –NH₂ do outro, eliminando uma molécula de água (reação de condensação) e formando o grupo{" "}
          <strong>amida</strong> (<M>{"-\\text{CO}-\\text{NH}-"}</M>).
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 220" width="480" height="220" aria-label="Formação da ligação peptídica entre dois aminoácidos">
            {/* Aminoácido 1 */}
            <rect x="20" y="70" width="150" height="70" fill="#d1fae5" stroke="#059669" strokeWidth="2" rx="6"/>
            <text x="95" y="58" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">aminoácido 1</text>
            <text x="40" y="112" textAnchor="middle" fontSize="13" fill="#374151">H₂N</text>
            <text x="95" y="112" textAnchor="middle" fontSize="12" fill="#374151">— CH —</text>
            <text x="150" y="112" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#991b1b">COOH</text>

            {/* + */}
            <text x="195" y="112" textAnchor="middle" fontSize="20" fill="#374151">+</text>

            {/* Aminoácido 2 */}
            <rect x="220" y="70" width="150" height="70" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" rx="6"/>
            <text x="295" y="58" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">aminoácido 2</text>
            <text x="245" y="112" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">H₂N</text>
            <text x="298" y="112" textAnchor="middle" fontSize="12" fill="#374151">— CH —</text>
            <text x="350" y="112" textAnchor="middle" fontSize="12" fill="#374151">COOH</text>

            {/* seta */}
            <line x1="385" y1="105" x2="430" y2="105" stroke="#374151" strokeWidth="2" markerEnd="url(#pep-k)"/>
            <text x="407" y="96" textAnchor="middle" fontSize="9" fill="#374151">− H₂O</text>

            {/* produto: dipeptídeo */}
            <text x="240" y="185" textAnchor="middle" fontSize="12" fill="#374151">H₂N — CH —</text>
            <rect x="300" y="168" width="68" height="26" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" rx="4"/>
            <text x="334" y="186" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#5b21b6">CO–NH</text>
            <text x="408" y="185" textAnchor="middle" fontSize="12" fill="#374151">— CH — COOH</text>
            <text x="334" y="212" textAnchor="middle" fontSize="9" fill="#5b21b6">ligação peptídica (amida)</text>
            <defs>
              <marker id="pep-k" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker>
            </defs>
          </svg>
          <figcaption>A ligação peptídica une o grupo carboxila de um aminoácido ao grupo amino do outro, liberando água e formando o grupo amida (–CO–NH–).</figcaption>
        </figure>
        <p>
          Encadeando muitos aminoácidos formam-se as <strong>proteínas</strong>, responsáveis por
          estrutura (colágeno), transporte (hemoglobina), defesa (anticorpos) e <strong>catálise</strong>.
          As <strong>enzimas</strong> são proteínas que aceleram reações biológicas com altíssima
          especificidade (modelo "chave-fechadura"). Aquecer ou alterar o pH pode{" "}
          <strong>desnaturar</strong> uma proteína, desfazendo sua forma e função — é o que acontece com a
          clara do ovo ao cozinhar.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🛡️</span>
            <h3>Camada de ozônio</h3>
            <p>O₃ filtra UV na estratosfera; CFCs liberam Cl que o destrói em cadeia.</p>
          </div>
          <div className="math-card">
            <span>🌡️</span>
            <h3>Efeito estufa</h3>
            <p>CO₂, CH₄ e vapor d'água retêm o infravermelho; intensificado pelo homem.</p>
          </div>
          <div className="math-card">
            <span>🌧️</span>
            <h3>Chuva ácida</h3>
            <p>SO₂/NOₓ → <M>{"\\text{H}_2\\text{SO}_4"}</M> e <M>{"\\text{HNO}_3"}</M>; corrói e acidifica.</p>
          </div>
          <div className="math-card">
            <span>🚰</span>
            <h3>Água</h3>
            <p>Eutrofização e DBO; tratamento: floculação, decantação, filtração, cloração.</p>
          </div>
          <div className="math-card">
            <span>🍞</span>
            <h3>Carboidratos e lipídios</h3>
            <p>Energia: glicose/amido. Lipídios apolares: reserva e membranas.</p>
          </div>
          <div className="math-card">
            <span>🧬</span>
            <h3>Proteínas</h3>
            <p>Aminoácidos unidos por ligações peptídicas (amida); enzimas catalisam.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Função da camada de ozônio"
          statement={<p>A camada de ozônio, na estratosfera, é importante para os seres vivos porque:</p>}
          options={[
            { letter: "a", text: "Filtra a radiação ultravioleta nociva do Sol", correct: true },
            { letter: "b", text: "Aquece a Terra retendo o calor infravermelho" },
            { letter: "c", text: "Produz o oxigênio que respiramos" },
            { letter: "d", text: "Provoca a chuva ácida nas grandes cidades" },
          ]}
          resolution={<p>O ozônio (<M>{"\\text{O}_3"}</M>) absorve grande parte da radiação UV, protegendo a vida de queimaduras e câncer de pele. Quem retém calor (efeito estufa) é o CO₂ — não confunda os dois fenômenos.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Gás do efeito estufa"
          statement={<p>Dentre os gases abaixo, o principal responsável pela intensificação do efeito estufa, liberado na queima de combustíveis fósseis, é o:</p>}
          options={[
            { letter: "a", text: "Gás carbônico (CO₂)", correct: true },
            { letter: "b", text: "Nitrogênio (N₂)" },
            { letter: "c", text: "Argônio (Ar)" },
            { letter: "d", text: "Oxigênio (O₂)" },
          ]}
          resolution={<p>O <M>{"\\text{CO}_2"}</M> (junto com CH₄ e vapor d'água) absorve a radiação infravermelha emitida pela Terra. Sua emissão crescente intensifica o efeito estufa e provoca o aquecimento global. N₂, Ar e O₂ não absorvem o infravermelho de forma relevante.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Chuva ácida"
          statement={<p>A chuva ácida é causada principalmente por óxidos de enxofre e nitrogênio. A reação <M>{"\\text{SO}_3 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{SO}_4"}</M> mostra a formação de qual ácido?</p>}
          options={[
            { letter: "a", text: "Ácido sulfúrico", correct: true },
            { letter: "b", text: "Ácido nítrico" },
            { letter: "c", text: "Ácido clorídrico" },
            { letter: "d", text: "Ácido carbônico" },
          ]}
          resolution={<p><M>{"\\text{H}_2\\text{SO}_4"}</M> é o ácido sulfúrico. Já o <M>{"\\text{NO}_x"}</M> origina ácido nítrico (<M>{"\\text{HNO}_3"}</M>). Ambos baixam o pH da chuva, corroendo monumentos e acidificando lagos.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Classificação de biomoléculas"
          statement={<p>Amido, glicogênio e celulose são exemplos de:</p>}
          options={[
            { letter: "a", text: "Polissacarídeos (carboidratos)", correct: true },
            { letter: "b", text: "Lipídios" },
            { letter: "c", text: "Proteínas" },
            { letter: "d", text: "Monossacarídeos" },
          ]}
          resolution={<p>São polissacarídeos — longas cadeias de glicose. Amido é a reserva dos vegetais, glicogênio a dos animais e celulose a estrutura da parede vegetal (que não digerimos). Glicose e frutose seriam monossacarídeos.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Ligação peptídica"
          statement={<p>As proteínas resultam da união de aminoácidos por ligações peptídicas. Essa ligação é formada entre o grupo carboxila de um aminoácido e o grupo amino do outro, com eliminação de água, originando a função:</p>}
          options={[
            { letter: "a", text: "Amida", correct: true },
            { letter: "b", text: "Éster" },
            { letter: "c", text: "Éter" },
            { letter: "d", text: "Ácido carboxílico" },
          ]}
          resolution={<p>A ligação peptídica une <M>{"-\\text{COOH}"}</M> de um aminoácido a <M>{"-\\text{NH}_2"}</M> de outro, formando o grupo amida (<M>{"-\\text{CO}-\\text{NH}-"}</M>) e liberando H₂O. Éster seria –COO– (caso dos triglicerídeos).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Etanol e o ciclo do carbono"
          statement={<p>O etanol obtido da cana-de-açúcar é apontado como combustível menos agressivo ao clima que a gasolina. A principal justificativa química é que:</p>}
          options={[
            { letter: "a", text: "O CO₂ liberado na queima do etanol foi previamente absorvido pela cana na fotossíntese, fechando o ciclo do carbono.", correct: true },
            { letter: "b", text: "A queima do etanol não produz nenhum CO₂." },
            { letter: "c", text: "O etanol destrói o gás carbônico já presente na atmosfera." },
            { letter: "d", text: "O etanol é um combustível fóssil de queima limpa." },
          ]}
          resolution={<p>O etanol é renovável: o <M>{"\\text{CO}_2"}</M> emitido na combustão havia sido retirado da atmosfera pela própria cana durante a fotossíntese. O balanço de carbono é, portanto, mais favorável que o dos fósseis (gasolina, diesel), que liberam carbono estocado há milhões de anos. A queima ainda produz CO₂ — o ganho está no ciclo, não na ausência do gás.</p>}
        />
      </section>
    </article>
  );
}
