"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap44Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 44</span>
          <h1>Esterificação, Saponificação e Polímeros</h1>
          <p>
            O cheiro de morango de uma bala, a espuma do sabonete que dissolve a gordura das mãos e a
            garrafa PET de refrigerante têm algo em comum: todos nascem de reações da química orgânica.
            Neste capítulo você entende como ácidos e álcoois formam os ésteres dos aromas, como uma
            base transforma gordura em sabão, por que o sabão "puxa" a sujeira e como milhares de
            moléculas pequenas se juntam para formar os plásticos que moldam o mundo moderno.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Formando ésteres</span>
        <h2>1. Reação de Esterificação</h2>
        <p>
          A <strong>esterificação</strong> é a reação entre um <strong>ácido carboxílico</strong> e um{" "}
          <strong>álcool</strong>, produzindo um <strong>éster</strong> e <strong>água</strong>. É uma
          reação <strong>reversível</strong> e geralmente <strong>catalisada por ácido</strong> forte
          (como o <M>{"\\text{H}_2\\text{SO}_4"}</M>), que acelera o equilíbrio. A equação geral é:
        </p>
        <div className="lesson-highlight">
          <p>
            <M block>{"R\\text{-COOH} + R'\\text{-OH} \\rightleftharpoons R\\text{-COO-}R' + \\text{H}_2\\text{O}"}</M>
          </p>
          <p>
            (ácido carboxílico + álcool <M>{"\\rightleftharpoons"}</M> éster + água)
          </p>
        </div>
        <p>
          O detalhe importante do <strong>mecanismo</strong>: a água formada sai da{" "}
          <strong>hidroxila (—OH) do ácido</strong> e do <strong>hidrogênio do álcool</strong>. Ou
          seja, o oxigênio que fica no éster vem do álcool. Por ser reversível, costuma-se{" "}
          <strong>retirar a água</strong> do meio (ou usar excesso de um reagente) para deslocar o
          equilíbrio no sentido do éster, segundo o princípio de Le Chatelier.
        </p>
        <p>
          Veja o esquema da reação com a junção dos átomos e a saída da molécula de água:
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 220" width="520" height="220" aria-label="Esquema da reação de esterificação entre ácido acético e etanol">
            {/* Ácido carboxílico */}
            <text x="20" y="40" fontSize="12" fontWeight="bold" fill="#374151">Ácido acético</text>
            <rect x="14" y="60" width="118" height="64" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5"/>
            <text x="73" y="98" textAnchor="middle" fontSize="15" fill="#991b1b">CH₃—CO—OH</text>
            <text x="73" y="116" textAnchor="middle" fontSize="9" fill="#991b1b">(—OH sai)</text>

            <text x="150" y="98" textAnchor="middle" fontSize="20" fill="#374151">+</text>

            {/* Álcool */}
            <text x="170" y="40" fontSize="12" fontWeight="bold" fill="#374151">Etanol</text>
            <rect x="165" y="60" width="110" height="64" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="220" y="98" textAnchor="middle" fontSize="15" fill="#1e40af">CH₃CH₂—OH</text>
            <text x="220" y="116" textAnchor="middle" fontSize="9" fill="#1e40af">(H sai)</text>

            {/* Seta de equilíbrio */}
            <line x1="290" y1="90" x2="345" y2="90" stroke="#374151" strokeWidth="2" markerEnd="url(#est-fwd)"/>
            <line x1="345" y1="100" x2="290" y2="100" stroke="#9ca3af" strokeWidth="2" markerEnd="url(#est-bwd)"/>
            <text x="318" y="78" textAnchor="middle" fontSize="9" fill="#374151">H⁺ (cat.)</text>

            {/* Éster */}
            <text x="360" y="40" fontSize="12" fontWeight="bold" fill="#065f46">Éster (aroma)</text>
            <rect x="358" y="60" width="148" height="64" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="1.5"/>
            <text x="432" y="92" textAnchor="middle" fontSize="14" fill="#065f46">CH₃—CO—O—C₂H₅</text>
            <text x="432" y="114" textAnchor="middle" fontSize="9" fill="#065f46">acetato de etila</text>

            {/* Saída de água */}
            <text x="432" y="158" textAnchor="middle" fontSize="13" fill="#7c3aed">+ H₂O</text>
            <line x1="432" y1="130" x2="432" y2="146" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#est-w)"/>
            <text x="432" y="184" textAnchor="middle" fontSize="9" fill="#5b21b6">água (—OH do ácido + H do álcool)</text>

            <defs>
              <marker id="est-fwd" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker>
              <marker id="est-bwd" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#9ca3af"/></marker>
              <marker id="est-w" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/></marker>
            </defs>
          </svg>
          <figcaption>Esterificação: o ácido acético reage com o etanol formando acetato de etila (cheiro de removedor de esmalte) e água. A reação é reversível e catalisada por H⁺.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <h3>Por que os ésteres importam</h3>
          <p>
            Os ésteres de cadeia pequena têm <strong>cheiros agradáveis</strong> e são responsáveis pelos
            aromas de frutas (banana, abacaxi, maçã) e por essências artificiais usadas em alimentos,
            perfumes e cosméticos. Já os ésteres de cadeia longa (de ácidos graxos com o glicerol) são as{" "}
            <strong>gorduras e óleos</strong> — os triglicerídeos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aromas</span>
        <h2>2. Ésteres e os Aromas Artificiais</h2>
        <p>
          Pequenas mudanças no ácido ou no álcool de origem mudam completamente o cheiro do éster. Por
          isso a indústria de alimentos usa ésteres como aromatizantes. Veja alguns exemplos clássicos:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Éster</th><th>Aroma</th><th>Uso típico</th></tr>
            </thead>
            <tbody>
              <tr><td>Acetato de etila</td><td>Removedor / frutado leve</td><td>Solvente, essências</td></tr>
              <tr><td>Acetato de isoamila</td><td>Banana</td><td>Balas, sorvetes</td></tr>
              <tr><td>Butanoato de etila</td><td>Abacaxi / morango</td><td>Refrigerantes, doces</td></tr>
              <tr><td>Acetato de octila</td><td>Laranja</td><td>Aromas cítricos</td></tr>
              <tr><td>Salicilato de metila</td><td>Menta / analgésico</td><td>Pomadas, chicletes</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Quebrando ésteres</span>
        <h2>3. Hidrólise Ácida × Saponificação</h2>
        <p>
          Um éster pode ser "desmontado" de duas maneiras, dependendo do meio em que ocorre a reação.
          Ambas quebram a ligação do éster com a entrada de água, mas os produtos diferem:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💧</span>
            <h3>Hidrólise ácida</h3>
            <p>
              Éster + água, em <strong>meio ácido</strong>, regenera o <strong>ácido carboxílico</strong>{" "}
              e o <strong>álcool</strong>. É exatamente o <strong>inverso</strong> da esterificação
              (reversível).
            </p>
          </div>
          <div className="lesson-card">
            <span>🧼</span>
            <h3>Saponificação (hidrólise básica)</h3>
            <p>
              Éster (gordura) + <strong>base forte</strong> (NaOH) produz o <strong>sabão</strong> (sal
              de ácido graxo) e o <strong>glicerol</strong>. É <strong>irreversível</strong>, pois o sal
              não reage de volta.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fazendo sabão</span>
        <h2>4. Saponificação: a Reação que Produz Sabão</h2>
        <p>
          As gorduras e óleos são <strong>triglicerídeos</strong>: ésteres formados por uma molécula de{" "}
          <strong>glicerol</strong> (um triálcool) ligada a três <strong>ácidos graxos</strong> (ácidos
          carboxílicos de cadeia longa). Quando aquecemos esse triglicerídeo com uma base forte
          (soda cáustica, <M>{"\\text{NaOH}"}</M>, ou potassa, <M>{"\\text{KOH}"}</M>), ocorre a{" "}
          <strong>saponificação</strong>:
        </p>
        <div className="lesson-highlight">
          <p>
            <M block>{"\\text{triglicerídeo} + 3\\,\\text{NaOH} \\rightarrow 3\\,\\text{sabão} + \\text{glicerol}"}</M>
          </p>
          <p>
            O <strong>sabão</strong> é o sal de sódio (ou de potássio) de um ácido graxo, do tipo{" "}
            <M>{"R\\text{-COO}^-\\,\\text{Na}^+"}</M>. O sabão com sódio é mais duro (sabão em barra); com
            potássio é mais mole (sabão líquido). O <strong>glicerol</strong> (glicerina) é um subproduto
            valioso, usado em cosméticos e na produção de explosivos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Como o sabão limpa</span>
        <h2>5. A Molécula de Sabão e as Micelas</h2>
        <p>
          A molécula de sabão é <strong>anfifílica</strong> (ou tensoativa): tem duas regiões de
          comportamento oposto. Uma <strong>cauda apolar</strong> (a longa cadeia de carbonos do ácido
          graxo), que <em>não</em> se dissolve em água mas interage com a gordura, e uma{" "}
          <strong>cabeça polar/iônica</strong> (o grupo <M>{"\\text{-COO}^-\\,\\text{Na}^+"}</M>), que se
          dissolve bem em água. Essa dupla natureza é a chave da limpeza.
        </p>
        <p>
          Quando o sabão encontra uma gota de gordura, as caudas apolares "mergulham" na gordura e as
          cabeças polares ficam voltadas para fora, em contato com a água. Forma-se uma{" "}
          <strong>micela</strong>: uma esfera microscópica com a sujeira presa no centro, que pode ser
          arrastada pela água do enxágue.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 250" width="520" height="250" aria-label="Molécula de sabão e formação de micela em torno de gota de gordura">
            {/* Molécula de sabão isolada (esquerda) */}
            <text x="100" y="32" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">Molécula de sabão</text>
            <circle cx="40" cy="80" r="14" fill="#2563eb" stroke="#1e40af" strokeWidth="1.5"/>
            <text x="40" y="84" textAnchor="middle" fontSize="9" fill="#ffffff">+−</text>
            <path d="M54,80 q20,-12 40,0 q20,12 40,0 q20,-12 38,0" fill="none" stroke="#f59e0b" strokeWidth="3"/>
            <text x="40" y="112" textAnchor="middle" fontSize="9" fill="#1e40af">cabeça polar</text>
            <text x="120" y="112" textAnchor="middle" fontSize="9" fill="#b45309">cauda apolar</text>
            <text x="40" y="126" textAnchor="middle" fontSize="8" fill="#1e40af">(hidrofílica)</text>
            <text x="120" y="126" textAnchor="middle" fontSize="8" fill="#b45309">(hidrofóbica)</text>

            {/* divisória */}
            <line x1="210" y1="40" x2="210" y2="220" stroke="#e5e7eb" strokeWidth="1.5"/>

            {/* Micela (direita) */}
            <text x="370" y="32" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#374151">Micela envolvendo a gordura</text>
            {/* gota de gordura central */}
            <circle cx="370" cy="135" r="40" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
            <text x="370" y="139" textAnchor="middle" fontSize="11" fill="#92400e">gordura</text>
            {/* caudas + cabeças radiais */}
            {[...Array(12)].map((_, i) => {
              const ang = (i * Math.PI * 2) / 12;
              const x1 = 370 + Math.cos(ang) * 40;
              const y1 = 135 + Math.sin(ang) * 40;
              const x2 = 370 + Math.cos(ang) * 72;
              const y2 = 135 + Math.sin(ang) * 72;
              const hx = 370 + Math.cos(ang) * 82;
              const hy = 135 + Math.sin(ang) * 82;
              return (
                <g key={i}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f59e0b" strokeWidth="2.5"/>
                  <circle cx={hx} cy={hy} r="7" fill="#2563eb" stroke="#1e40af" strokeWidth="1"/>
                </g>
              );
            })}
            <text x="370" y="240" textAnchor="middle" fontSize="9" fill="#1e40af">cabeças polares para fora (água) • caudas para dentro (gordura)</text>
          </svg>
          <figcaption>O sabão dissolve gordura: as caudas apolares grudam na gota de gordura e as cabeças polares ficam voltadas para a água, formando a micela que é levada no enxágue.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Sabão × detergente</span>
        <h2>6. Detergentes Sintéticos e Água Dura</h2>
        <p>
          Os <strong>detergentes</strong> funcionam pelo mesmo princípio anfifílico do sabão, mas são
          produzidos a partir do <strong>petróleo</strong> e têm a cabeça polar feita de um grupo{" "}
          <strong>sulfonato</strong> (<M>{"\\text{-SO}_3^-"}</M>) em vez de carboxilato. A grande
          diferença prática aparece na <strong>água dura</strong> — rica em íons{" "}
          <M>{"\\text{Ca}^{2+}"}</M> e <M>{"\\text{Mg}^{2+}"}</M>.
        </p>
        <p>
          O sabão comum reage com esses íons e forma um sal <strong>insolúvel</strong> (o sabão "talha"
          e não faz espuma), desperdiçando produto. Já o detergente continua solúvel e eficaz mesmo na
          água dura. Em compensação, alguns detergentes antigos eram pouco{" "}
          <strong>biodegradáveis</strong> e causavam espuma persistente em rios — hoje usam-se cadeias
          lineares, mais facilmente degradadas pelos micro-organismos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Característica</th><th>Sabão</th><th>Detergente</th></tr>
            </thead>
            <tbody>
              <tr><td>Origem</td><td>Gorduras/óleos + base (saponificação)</td><td>Petróleo (síntese)</td></tr>
              <tr><td>Cabeça polar</td><td>Carboxilato (—COO⁻)</td><td>Sulfonato (—SO₃⁻)</td></tr>
              <tr><td>Em água dura</td><td>"Talha", forma precipitado</td><td>Funciona bem</td></tr>
              <tr><td>Biodegradabilidade</td><td>Alta</td><td>Variável (linear = melhor)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Macromoléculas</span>
        <h2>7. Introdução aos Polímeros</h2>
        <p>
          <strong>Polímeros</strong> são <strong>macromoléculas</strong> gigantes formadas pela união de
          milhares de unidades pequenas e repetidas, chamadas <strong>monômeros</strong> (do grego{" "}
          <em>poli</em> = muitos, <em>mono</em> = um, <em>meros</em> = partes). A reação que une os
          monômeros é a <strong>polimerização</strong>. Existem polímeros <strong>naturais</strong>{" "}
          (amido, celulose, proteínas, borracha natural, DNA) e <strong>sintéticos</strong> (plásticos,
          fibras, borrachas artificiais).
        </p>
        <p>
          Quanto ao comportamento com o calor, dividem-se em dois grupos importantes para a reciclagem:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>♻️</span>
            <h3>Termoplásticos</h3>
            <p>
              Amolecem com o calor e podem ser <strong>remoldados várias vezes</strong> →{" "}
              <strong>recicláveis</strong>. Ex.: polietileno, PVC, PET, poliestireno.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔥</span>
            <h3>Termofixos (termorrígidos)</h3>
            <p>
              Endurecem definitivamente após a moldagem e <strong>não amolecem</strong> de novo; se
              superaquecidos, queimam. Ex.: baquelite, melamina, resinas epóxi.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Por adição</span>
        <h2>8. Polimerização por Adição</h2>
        <p>
          Na <strong>polimerização por adição</strong>, os monômeros possuem uma{" "}
          <strong>ligação dupla</strong> (são insaturados). A dupla se "abre" e os carbonos se ligam uns
          aos outros formando uma cadeia longa, <strong>sem perda de átomos</strong> — a massa do polímero
          é a soma das massas dos monômeros. O exemplo clássico é o eteno virando polietileno:
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 210" width="520" height="210" aria-label="Polimerização por adição do eteno em polietileno">
            <text x="260" y="28" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#374151">Adição: eteno → polietileno</text>

            {/* n monômeros de eteno */}
            <text x="90" y="62" textAnchor="middle" fontSize="13" fill="#374151">n moléculas de eteno</text>
            <g>
              <circle cx="55" cy="100" r="15" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
              <text x="55" y="105" textAnchor="middle" fontSize="11" fill="#1e40af">CH₂</text>
              <line x1="70" y1="96" x2="100" y2="96" stroke="#dc2626" strokeWidth="2"/>
              <line x1="70" y1="104" x2="100" y2="104" stroke="#dc2626" strokeWidth="2"/>
              <circle cx="115" cy="100" r="15" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
              <text x="115" y="105" textAnchor="middle" fontSize="11" fill="#1e40af">CH₂</text>
            </g>
            <text x="150" y="105" fontSize="13" fill="#374151">× n</text>
            <text x="88" y="138" textAnchor="middle" fontSize="9" fill="#991b1b">dupla ligação C=C</text>

            {/* seta */}
            <line x1="185" y1="100" x2="240" y2="100" stroke="#374151" strokeWidth="2" markerEnd="url(#add-arr)"/>
            <text x="212" y="90" textAnchor="middle" fontSize="9" fill="#374151">cat., P, T</text>

            {/* cadeia polimérica */}
            <text x="380" y="62" textAnchor="middle" fontSize="13" fill="#065f46">polietileno (cadeia única)</text>
            <g>
              <line x1="255" y1="110" x2="500" y2="110" stroke="#059669" strokeWidth="2"/>
              {[270, 320, 370, 420, 470].map((cx, i) => (
                <g key={i}>
                  <circle cx={cx} cy="100" r="14" fill="#d1fae5" stroke="#059669" strokeWidth="1.5"/>
                  <text x={cx} y="104" textAnchor="middle" fontSize="9" fill="#065f46">CH₂</text>
                </g>
              ))}
            </g>
            <text x="380" y="150" textAnchor="middle" fontSize="11" fill="#065f46">—(CH₂—CH₂)ₙ—  (só ligações simples)</text>
            <text x="380" y="172" textAnchor="middle" fontSize="9" fill="#065f46">nenhum átomo é eliminado</text>

            <defs>
              <marker id="add-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#374151"/></marker>
            </defs>
          </svg>
          <figcaption>Polimerização por adição: n moléculas de eteno (com dupla ligação) abrem a dupla e se unem formando o polietileno, sem liberar nenhum subproduto.</figcaption>
        </figure>
        <p>
          Trocando os átomos ligados ao carbono, obtêm-se outros plásticos de adição muito comuns: o{" "}
          <strong>PVC</strong> (cloreto de polivinila, com cloro), o <strong>poliestireno</strong> (isopor,
          com o anel benzênico) e o <strong>teflon</strong> (politetrafluoretileno, com flúor — antiaderente).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Por condensação</span>
        <h2>9. Polimerização por Condensação</h2>
        <p>
          Na <strong>polimerização por condensação</strong>, os monômeros se unem{" "}
          <strong>eliminando uma molécula pequena</strong> a cada ligação formada — quase sempre{" "}
          <strong>água</strong> (mas pode ser <M>{"\\text{HCl}"}</M>, amônia etc.). Os monômeros têm
          <strong> dois grupos funcionais reativos</strong> nas pontas (como —COOH e —OH, ou —COOH e
          —NH₂), que reagem alternadamente. É o mesmo tipo de reação da esterificação/amidação,
          repetida muitas vezes.
        </p>
        <div className="lesson-highlight">
          <p>
            <strong>Náilon</strong> (poliamida): diácido + diamina, eliminando água — usado em fios,
            tecidos e escovas. <strong>Poliéster / PET</strong>: diácido + diálcool, eliminando água —
            garrafas e fibras de roupas. <strong>Baquelite</strong>: fenol + formaldeído — termofixo,
            usado em tomadas e cabos de panela.
          </p>
        </div>
        <p>
          Repare na lógica: como sempre "sobra" uma molécula pequena, a massa do polímero é{" "}
          <strong>menor</strong> que a soma das massas dos monômeros — diferente da adição.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela-resumo</span>
        <h2>10. Polímeros Importantes</h2>
        <p>
          A tabela reúne os polímeros mais cobrados em vestibulares e ENEM, com o monômero de origem, o
          tipo de polimerização e a aplicação no cotidiano:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Monômero</th><th>Polímero</th><th>Tipo</th><th>Uso comum</th></tr>
            </thead>
            <tbody>
              <tr><td>Eteno</td><td>Polietileno (PE)</td><td>Adição</td><td>Sacolas, embalagens</td></tr>
              <tr><td>Cloroeteno (cloreto de vinila)</td><td>PVC</td><td>Adição</td><td>Tubos, esquadrias</td></tr>
              <tr><td>Estireno</td><td>Poliestireno (isopor)</td><td>Adição</td><td>Copos, isolamento</td></tr>
              <tr><td>Tetrafluoreteno</td><td>Teflon (PTFE)</td><td>Adição</td><td>Panelas antiaderentes</td></tr>
              <tr><td>Propeno</td><td>Polipropileno (PP)</td><td>Adição</td><td>Potes, para-choques</td></tr>
              <tr><td>Ácido tereftálico + etilenoglicol</td><td>PET (poliéster)</td><td>Condensação</td><td>Garrafas, tecidos</td></tr>
              <tr><td>Diácido + diamina</td><td>Náilon (poliamida)</td><td>Condensação</td><td>Fios, tecidos, escovas</td></tr>
              <tr><td>Fenol + formaldeído</td><td>Baquelite</td><td>Condensação</td><td>Tomadas, cabos (termofixo)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ambiente</span>
        <h2>11. Polímeros, Reciclagem e Meio Ambiente</h2>
        <p>
          Plásticos são leves, baratos e duráveis — mas essa mesma resistência é um problema: muitos
          levam <strong>séculos para se degradar</strong> na natureza, acumulando-se em aterros e nos
          oceanos. As principais respostas a esse desafio são a <strong>reciclagem</strong>, os{" "}
          <strong>plásticos biodegradáveis</strong> (como o PLA, feito de amido de milho) e a{" "}
          <strong>redução do consumo</strong>.
        </p>
        <p>
          A reciclagem do <strong>PET</strong> das garrafas de refrigerante é um exemplo de{" "}
          <strong>economia circular</strong>: por ser termoplástico, o PET pode ser triturado, fundido e
          transformado em novas garrafas, fibras têxteis (camisetas, mantas) e cordas. Isso economiza
          petróleo, energia e reduz o lixo. Lembre-se: <strong>termoplásticos são recicláveis</strong>{" "}
          (refundíveis), enquanto os <strong>termofixos</strong>, como a baquelite, <strong>não</strong>{" "}
          podem ser refundidos.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🍓</span>
            <h3>Esterificação</h3>
            <p>Ácido + álcool <M>{"\\rightleftharpoons"}</M> éster + água. Reversível, dá os aromas.</p>
          </div>
          <div className="math-card">
            <span>🧼</span>
            <h3>Saponificação</h3>
            <p>Gordura + NaOH → sabão + glicerol. Irreversível.</p>
          </div>
          <div className="math-card">
            <span>🫧</span>
            <h3>Ação do sabão</h3>
            <p>Molécula anfifílica forma micelas: cauda na gordura, cabeça na água.</p>
          </div>
          <div className="math-card">
            <span>🧴</span>
            <h3>Detergente</h3>
            <p>Sintético do petróleo; funciona em água dura, onde o sabão "talha".</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>Adição</h3>
            <p>Monômeros com dupla se unem sem perder átomos (PE, PVC, teflon).</p>
          </div>
          <div className="math-card">
            <span>💧</span>
            <h3>Condensação</h3>
            <p>Une monômeros liberando água (náilon, PET, baquelite).</p>
          </div>
          <div className="math-card">
            <span>♻️</span>
            <h3>Termoplástico × termofixo</h3>
            <p>Termoplástico refunde (reciclável); termofixo não (baquelite).</p>
          </div>
          <div className="math-card">
            <span>🌍</span>
            <h3>Reciclagem</h3>
            <p>PET (poliéster) é refundido em garrafas e tecidos: economia circular.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Produtos da esterificação"
          statement={<p>A reação entre um ácido carboxílico e um álcool, catalisada por ácido, produz:</p>}
          options={[
            { letter: "a", text: "Éster e água", correct: true },
            { letter: "b", text: "Sabão e glicerol" },
            { letter: "c", text: "Sal e gás hidrogênio" },
            { letter: "d", text: "Dois álcoois diferentes" },
          ]}
          resolution={<p>Ácido carboxílico + álcool <M>{"\\rightleftharpoons"}</M> éster + água. É a esterificação, reação reversível e catalisada por H⁺. A água sai do —OH do ácido e do H do álcool. Sabão + glicerol seria o produto da saponificação.</p>}
        />

        <Exercise
          level="Básico"
          title="2. O que é saponificação"
          statement={<p>A saponificação, processo industrial de fabricação de sabão, consiste na reação de uma gordura (triglicerídeo) com:</p>}
          options={[
            { letter: "a", text: "Uma base forte (NaOH), produzindo sabão e glicerol", correct: true },
            { letter: "b", text: "Um ácido forte, produzindo éster e água" },
            { letter: "c", text: "Um álcool, produzindo um novo éster" },
            { letter: "d", text: "Um gás nobre, produzindo um polímero" },
          ]}
          resolution={<p>A saponificação é a hidrólise alcalina (básica) de gorduras: triglicerídeo + 3 NaOH → 3 moléculas de sabão (sal de ácido graxo) + glicerol. É uma reação irreversível.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Como o sabão remove a gordura"
          statement={<p>O sabão consegue remover gordura da pele e dos tecidos porque sua molécula é anfifílica. Isso significa que ela possui:</p>}
          options={[
            { letter: "a", text: "Uma parte apolar que dissolve a gordura e uma parte polar que interage com a água, formando micelas", correct: true },
            { letter: "b", text: "Apenas caráter polar, repelindo toda a gordura" },
            { letter: "c", text: "Apenas caráter apolar, insolúvel em água" },
            { letter: "d", text: "Caráter iônico ao longo de toda a cadeia carbônica" },
          ]}
          resolution={<p>A cauda apolar (cadeia de carbonos) "mergulha" na gordura e a cabeça polar/iônica (—COO⁻Na⁺) fica voltada para a água. As moléculas envolvem a gota de gordura formando uma micela, que é arrastada no enxágue.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Classificando o polietileno"
          statement={<p>O polietileno é obtido a partir do eteno (CH₂=CH₂), cuja dupla ligação se abre para unir os monômeros sem liberar subprodutos. Esse tipo de polimerização é por:</p>}
          options={[
            { letter: "a", text: "Adição", correct: true },
            { letter: "b", text: "Condensação" },
            { letter: "c", text: "Eliminação" },
            { letter: "d", text: "Substituição" },
          ]}
          resolution={<p>Monômeros insaturados (com dupla ligação) que se unem pela abertura da dupla, sem perder átomos, caracterizam a polimerização por adição. Na condensação haveria saída de uma molécula pequena (água, por exemplo).</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Náilon e PET: condensação"
          statement={<p>O náilon e o PET são produzidos pela união de monômeros com a eliminação de moléculas de água a cada ligação formada. Sobre esses polímeros, é correto afirmar que:</p>}
          options={[
            { letter: "a", text: "São polímeros de condensação, pois liberam moléculas pequenas durante a polimerização", correct: true },
            { letter: "b", text: "São polímeros de adição, pois não perdem átomos" },
            { letter: "c", text: "Têm massa igual à soma exata das massas dos monômeros" },
            { letter: "d", text: "Não podem formar fibras nem garrafas" },
          ]}
          resolution={<p>Quando a polimerização elimina moléculas pequenas (água), trata-se de condensação. Por isso a massa do polímero é menor que a soma dos monômeros. O náilon (poliamida) e o PET (poliéster) são exemplos clássicos, usados em fibras e embalagens.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Reciclagem das garrafas PET"
          statement={<p>Garrafas de refrigerante são feitas de PET, um poliéster termoplástico. Campanhas incentivam sua reciclagem, em que as garrafas usadas são trituradas, fundidas e transformadas em novas garrafas e fibras têxteis. Essa prática é viável e ambientalmente importante porque os plásticos:</p>}
          options={[
            { letter: "a", text: "Demoram séculos para se degradar, e, sendo termoplásticos, podem ser refundidos e reaproveitados, economizando petróleo.", correct: true },
            { letter: "b", text: "Se degradam naturalmente em poucos dias, dispensando a reciclagem." },
            { letter: "c", text: "São compostos iônicos solúveis em água, fáceis de eliminar." },
            { letter: "d", text: "São termofixos e, por isso, podem ser remoldados infinitas vezes." },
          ]}
          resolution={<p>O PET é muito resistente e demora séculos para se decompor. Por ser termoplástico, amolece com o calor e pode ser refundido em novos produtos, fechando o ciclo (economia circular). A alternativa (d) erra ao chamar o PET de termofixo — termofixos, como a baquelite, justamente NÃO podem ser remoldados.</p>}
        />
      </section>
    </article>
  );
}
