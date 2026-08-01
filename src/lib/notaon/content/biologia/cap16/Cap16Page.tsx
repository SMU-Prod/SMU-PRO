"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap16Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 16</span>

          <h1>Segunda Lei de Mendel, Interação Gênica e Polimeria</h1>

          <p>
            A <strong>Segunda Lei de Mendel</strong> (Lei da Segregação
            Independente) explica como dois pares de genes se distribuem ao
            acaso durante a formação dos gametas, gerando a proporção fenotípica
            clássica <strong>9:3:3:1</strong> no cruzamento diíbrido. Quando
            dois genes não alelos atuam sobre a <em>mesma</em> característica,
            surgem os fenômenos de <strong>interação gênica</strong> — epistasia
            dominante (12:3:1), epistasia recessiva (9:3:4), genes
            complementares (9:7) e polimeria (herança quantitativa, distribuição
            em sino) —, todos frequentemente cobrados no ENEM e nos principais
            vestibulares do Brasil.
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SEÇÃO 1 */}
      {/* ================================================================= */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamento</span>

        <h2>1. Segunda Lei de Mendel — A Segregação Independente</h2>

        <p>
          Ao estudar a transmissão simultânea de <strong>duas</strong>{" "}
          características (cor e forma das sementes de ervilha), Gregor Mendel
          percebeu que cada par de fatores segregava para os gametas{" "}
          <strong>independentemente</strong> do outro. Essa conclusão foi
          formalizada na <strong>Segunda Lei</strong>: "Fatores de dois pares
          diferentes segregam-se de modo independente durante a formação dos
          gametas e se combinam ao acaso na fecundação."
        </p>

        <p>
          A lei tem validade plena apenas quando os dois genes estão em{" "}
          <strong>cromossomos homólogos diferentes</strong> (segregação
          independente no 1.º par meiótico) ou, no mesmo cromossomo, muito
          afastados, permitindo alta frequência de crossing-over. Genes
          próximos tendem ao <strong>linkage</strong> e desviam da proporção
          clássica.
        </p>

        <div className="lesson-highlight">
          <h3>Enunciado formal</h3>
          <p>
            "Para dois ou mais caracteres considerados ao mesmo tempo, os
            fatores responsáveis por cada caractere segregam-se
            independentemente, combinando-se ao acaso na fecundação."
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Requisito cromossômico</h3>
            <p>
              Genes em cromossomos <strong>não homólogos</strong> ou muito
              distantes no mesmo cromossomo.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎲</span>
            <h3>Independência</h3>
            <p>
              O alelo herdado para o gene A não influencia qual alelo do gene B
              será herdado.
            </p>
          </div>
          <div className="lesson-card">
            <span>📐</span>
            <h3>Proporção esperada</h3>
            <p>
              Com dominância completa e dois heterozigotos:{" "}
              <M>{"9:3:3:1"}</M>.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Quando NÃO vale</h3>
            <p>
              Genes ligados (linkage) — herdados juntos no mesmo cromossomo —
              desviam das proporções mendelianas.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SEÇÃO 2 */}
      {/* ================================================================= */}
      <section className="lesson-section">
        <span className="section-kicker">Diibridismo</span>

        <h2>2. O Cruzamento Diíbrido e os Gametas de AaBb</h2>

        <p>
          Um indivíduo <strong>duplo heterozigoto</strong> (genótipo{" "}
          <strong>AaBb</strong>) possui dois pares de genes, cada um em
          heterozigose. Pela Segunda Lei, os alelos de cada par segregam
          independentemente, gerando{" "}
          <M>{"2^2 = 4"}</M> tipos de gametas em proporções iguais:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>AB</span>
            <h3>Gameta 1 — 25 %</h3>
            <p>Alelo dominante de ambos os genes.</p>
          </div>
          <div className="lesson-card">
            <span>Ab</span>
            <h3>Gameta 2 — 25 %</h3>
            <p>Dominante para A, recessivo para B.</p>
          </div>
          <div className="lesson-card">
            <span>aB</span>
            <h3>Gameta 3 — 25 %</h3>
            <p>Recessivo para A, dominante para B.</p>
          </div>
          <div className="lesson-card">
            <span>ab</span>
            <h3>Gameta 4 — 25 %</h3>
            <p>Alelo recessivo de ambos os genes.</p>
          </div>
        </div>

        <p>
          Em geral, para um genótipo com <strong>n</strong> pares
          heterozigotos, o número de tipos de gametas é{" "}
          <M>{"2^n"}</M>. Para AaBbCc (<em>n</em> = 3) seriam{" "}
          <M>{"2^3 = 8"}</M> tipos; para um homozigoto como AABB (<em>n</em>{" "}
          = 0), apenas <M>{"2^0 = 1"}</M> tipo (AB).
        </p>

        <div className="lesson-highlight">
          <h3>Regra rápida para gametas</h3>
          <p>
            Conte apenas os pares em <strong>heterozigose</strong> para
            determinar <em>n</em>. Pares homozigotos contribuem com apenas um
            alelo e não aumentam a diversidade de gametas. Exemplo: AABbCc tem{" "}
            <em>n</em> = 2 (apenas Bb e Cc são heterozigotos), portanto{" "}
            <M>{"2^2 = 4"}</M> tipos de gametas.
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SEÇÃO 3 — Quadro de Punnett 4×4 */}
      {/* ================================================================= */}
      <section className="lesson-section">
        <span className="section-kicker">Quadro de Punnett</span>

        <h2>3. Quadro de Punnett 4×4 e a Proporção 9:3:3:1</h2>

        <p>
          O cruzamento <strong>AaBb × AaBb</strong> gera 16 combinações
          genotípicas de igual probabilidade. O quadro de Punnett 4×4 abaixo
          organiza todas elas; basta contar os fenótipos (assumindo dominância
          completa em ambos os loci) para obter a proporção{" "}
          <M>{"9:3:3:1"}</M>:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>♀ \ ♂</th>
                <th>AB</th>
                <th>Ab</th>
                <th>aB</th>
                <th>ab</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>AB</strong></td>
                <td>AABB</td>
                <td>AABb</td>
                <td>AaBB</td>
                <td>AaBb</td>
              </tr>
              <tr>
                <td><strong>Ab</strong></td>
                <td>AABb</td>
                <td>AAbb</td>
                <td>AaBb</td>
                <td>Aabb</td>
              </tr>
              <tr>
                <td><strong>aB</strong></td>
                <td>AaBB</td>
                <td>AaBb</td>
                <td>aaBB</td>
                <td>aaBb</td>
              </tr>
              <tr>
                <td><strong>ab</strong></td>
                <td>AaBb</td>
                <td>Aabb</td>
                <td>aaBb</td>
                <td>aabb</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Classificando os 16 descendentes pelos fenótipos (A_B_, A_bb, aaB_,
          aabb):
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fenótipo</th>
                <th>Genótipos correspondentes</th>
                <th>N.º de descendentes</th>
                <th>Proporção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dominante para A e B (A_B_)</td>
                <td>AABB, AABb, AaBB, AaBb</td>
                <td>9</td>
                <td><M>{"9/16"}</M></td>
              </tr>
              <tr>
                <td>Dominante A, recessivo b (A_bb)</td>
                <td>AAbb, Aabb</td>
                <td>3</td>
                <td><M>{"3/16"}</M></td>
              </tr>
              <tr>
                <td>Recessivo a, dominante B (aaB_)</td>
                <td>aaBB, aaBb</td>
                <td>3</td>
                <td><M>{"3/16"}</M></td>
              </tr>
              <tr>
                <td>Recessivo para A e B (aabb)</td>
                <td>aabb</td>
                <td>1</td>
                <td><M>{"1/16"}</M></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Cálculo por probabilidade — sem Punnett</h3>
          <p>
            Como os dois genes segregam independentemente, podemos multiplicar
            as probabilidades de cada locus separadamente. Para A_B_: probabilidade
            de A_ = <M>{"3/4"}</M> e de B_ = <M>{"3/4"}</M>; portanto{" "}
            <M>{"3/4 × 3/4 = 9/16"}</M>. Para A_bb: <M>{"3/4 × 1/4 = 3/16"}</M>.
            Para aaB_: <M>{"1/4 × 3/4 = 3/16"}</M>. Para aabb:{" "}
            <M>{"1/4 × 1/4 = 1/16"}</M>. Esse método é muito mais rápido em
            questões de prova.
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SEÇÃO 4 — Interação Gênica */}
      {/* ================================================================= */}
      <section className="lesson-section">
        <span className="section-kicker">Interação Gênica</span>

        <h2>4. Interação Gênica — Quando Dois Genes Controlam Um Caráter</h2>

        <p>
          Na genética mendeliana clássica, cada gene controla uma
          característica independente. Na <strong>interação gênica</strong>,
          dois genes <em>não alelos</em> atuam sobre a{" "}
          <strong>mesma</strong> característica, e o produto do gene A
          influencia a expressão do gene B (ou vice-versa). O resultado é uma{" "}
          <strong>modificação das proporções 9:3:3:1</strong> obtidas no
          cruzamento diíbrido — os fenótipos são reagrupados em menos classes,
          mas o total continua sendo 16 partes (iguais à fórmula{" "}
          <M>{"4^2"}</M>).
        </p>

        <p>
          Os principais tipos de interação gênica para o ENEM são:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>12:3:1</span>
            <h3>Epistasia dominante</h3>
            <p>
              Um alelo dominante de A mascara qualquer genótipo de B.
              Fenótipo epistático: A_ (9 + 3 = 12). Ex.: plumagem branca em
              galinhas.
            </p>
          </div>
          <div className="lesson-card">
            <span>9:3:4</span>
            <h3>Epistasia recessiva</h3>
            <p>
              O homozigoto recessivo aa mascara o gene B. Fenótipo epistático:
              aaB_ + aabb = 3 + 1 = 4. Ex.: pelagem de camundongos (locus A
              sobre locus B).
            </p>
          </div>
          <div className="lesson-card">
            <span>9:7</span>
            <h3>Genes complementares</h3>
            <p>
              Os dois genes são necessários simultaneamente para produzir o
              fenótipo: apenas A_B_ (9) expressa o caráter; todos os outros (7)
              são iguais. Ex.: cor da flor de ervilha-de-cheiro.
            </p>
          </div>
          <div className="lesson-card">
            <span>9:6:1</span>
            <h3>Interação por adição</h3>
            <p>
              Cada gene produz um fenótipo intermediário igual; apenas o duplo
              dominante (9) e o duplo recessivo (1) são distintos; os simples
              dominantes (3 + 3 = 6) são iguais.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SEÇÃO 5 — Epistasia com figura SVG */}
      {/* ================================================================= */}
      <section className="lesson-section">
        <span className="section-kicker">Epistasia em Detalhe</span>

        <h2>5. Epistasia Dominante (12:3:1) e Recessiva (9:3:4)</h2>

        <p>
          <strong>Epistasia</strong> é o fenômeno pelo qual um gene (
          <em>epistático</em>) mascara ou suprime a expressão de um gene não
          alelo (<em>hipostático</em>). Dependendo se o efeito epistático é
          produzido por alelo <strong>dominante</strong> ou{" "}
          <strong>recessivo homozigoto</strong>, as proporções finais diferem.
        </p>

        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg
              viewBox="0 0 300 230"
              width="300"
              height="230"
              aria-label="Epistasia dominante 12:3:1"
            >
              {/* título */}
              <text x={150} y={20} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">
                Epistasia Dominante
              </text>
              {/* barras */}
              {[
                { label: "A_B_ + A_bb", ratio: "12/16", w: 192, y: 40, color: "#0ea5e9", tag: "12" },
                { label: "aaB_", ratio: "3/16", w: 48, y: 100, color: "#6366f1", tag: "3" },
                { label: "aabb", ratio: "1/16", w: 16, y: 160, color: "#f59e0b", tag: "1" },
              ].map((b) => (
                <g key={b.label}>
                  <rect x={60} y={b.y} width={b.w} height={40} rx={6} fill={b.color} opacity={0.8} />
                  <text x={60 + b.w + 6} y={b.y + 25} fontSize={12} fontWeight={700} fill={b.color}>
                    {b.tag}
                  </text>
                  <text x={55} y={b.y + 25} textAnchor="end" fontSize={11} fill="#374151">
                    {b.label}
                  </text>
                </g>
              ))}
              <text x={150} y={218} textAnchor="middle" fontSize={11} fill="#6b7280">
                Proporção fenotípica: 12 : 3 : 1
              </text>
            </svg>
            <figcaption>
              Epistasia dominante: o alelo A_ mascara o locus B, reagrupando 9
              A_B_ + 3 A_bb em uma única classe (12).
            </figcaption>
          </figure>

          <figure className="lesson-figure">
            <svg
              viewBox="0 0 300 230"
              width="300"
              height="230"
              aria-label="Epistasia recessiva 9:3:4"
            >
              <text x={150} y={20} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">
                Epistasia Recessiva
              </text>
              {[
                { label: "A_B_", ratio: "9/16", w: 144, y: 40, color: "#16a34a", tag: "9" },
                { label: "A_bb", ratio: "3/16", w: 48, y: 100, color: "#0ea5e9", tag: "3" },
                { label: "aaB_ + aabb", ratio: "4/16", w: 64, y: 160, color: "#dc2626", tag: "4" },
              ].map((b) => (
                <g key={b.label}>
                  <rect x={60} y={b.y} width={b.w} height={40} rx={6} fill={b.color} opacity={0.8} />
                  <text x={60 + b.w + 6} y={b.y + 25} fontSize={12} fontWeight={700} fill={b.color}>
                    {b.tag}
                  </text>
                  <text x={55} y={b.y + 25} textAnchor="end" fontSize={11} fill="#374151">
                    {b.label}
                  </text>
                </g>
              ))}
              <text x={150} y={218} textAnchor="middle" fontSize={11} fill="#6b7280">
                Proporção fenotípica: 9 : 3 : 4
              </text>
            </svg>
            <figcaption>
              Epistasia recessiva: o homozigoto aa mascara o gene B, fundindo
              aaB_ e aabb em uma única classe (4).
            </figcaption>
          </figure>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de Epistasia</th>
                <th>Gene epistático</th>
                <th>Proporção fenotípica</th>
                <th>Exemplo biológico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dominante simples</td>
                <td>A_ (qualquer A dominante)</td>
                <td><M>{"12:3:1"}</M></td>
                <td>Plumagem branca em galinhas (locus I sobre locus C)</td>
              </tr>
              <tr>
                <td>Dominante dupla</td>
                <td>A_ e/ou B_ epistáticos entre si</td>
                <td><M>{"13:3"}</M></td>
                <td>Cor de frutos de cucurbitáceas (discussão avançada)</td>
              </tr>
              <tr>
                <td>Recessiva simples</td>
                <td>aa (homozigose recessiva de A)</td>
                <td><M>{"9:3:4"}</M></td>
                <td>Pelagem em camundongos (locus Agouti sobre locus Black)</td>
              </tr>
              <tr>
                <td>Genes complementares</td>
                <td>Ambos necessários para fenótipo</td>
                <td><M>{"9:7"}</M></td>
                <td>Cor da flor de ervilha-de-cheiro (Lathyrus odoratus)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Como identificar o tipo de epistasia em uma questão</h3>
          <p>
            Observe a <strong>proporção fenotípica</strong> obtida. Sempre que a
            soma das partes for 16, compare com a tabela acima. Se a proporção
            for <M>{"9:3:4"}</M>, um par recessivo aa está mascarando o outro.
            Se for <M>{"12:3:1"}</M>, um alelo dominante A age epistaticamente.
            Se for <M>{"9:7"}</M>, os dois genes são complementares e ambos
            precisam estar presentes (pelo menos um dominante cada) para
            produzir o fenótipo.
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SEÇÃO 6 — Genes complementares 9:7 */}
      {/* ================================================================= */}
      <section className="lesson-section">
        <span className="section-kicker">Genes Complementares</span>

        <h2>6. Genes Complementares — Proporção 9:7</h2>

        <p>
          Nos <strong>genes complementares</strong>, os dois genes são
          necessários para que um determinado fenótipo apareça. Os dois genes
          codificam enzimas que atuam em <strong>etapas diferentes</strong> de
          uma mesma via metabólica: se qualquer uma delas estiver ausente, a
          via não se completa e o fenótipo não é expresso.
        </p>

        <p>
          O exemplo clássico é a cor das flores de{" "}
          <em>Lathyrus odoratus</em> (ervilha-de-cheiro). O gene{" "}
          <strong>C</strong> (dominante) codifica a enzima que sintetiza um
          precursor de antocianina (pigmento roxo); o gene{" "}
          <strong>P</strong> (dominante) codifica a enzima que converte o
          precursor em antocianina. Somente os indivíduos <strong>C_P_</strong>{" "}
          (9/16) têm flores roxas; todos os demais (ccP_, C_pp, ccpp — 7/16)
          têm flores brancas.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 560 130"
            width="560"
            height="130"
            aria-label="Via metabólica dos genes complementares"
          >
            {/* seta 1 */}
            <rect x={10} y={45} width={130} height={40} rx={8} fill="#f3f4f6" stroke="#9ca3af" strokeWidth={1.5} />
            <text x={75} y={70} textAnchor="middle" fontSize={13} fontWeight={700} fill="#374151">Precursor</text>
            <polygon points="142,65 162,55 162,75" fill="#6366f1" />
            <text x={152} y={44} textAnchor="middle" fontSize={11} fill="#6366f1">enzima C</text>
            {/* seta 2 */}
            <rect x={164} y={45} width={160} height={40} rx={8} fill="#ede9fe" stroke="#6366f1" strokeWidth={1.5} />
            <text x={244} y={70} textAnchor="middle" fontSize={13} fontWeight={700} fill="#4f46e5">Intermediário</text>
            <polygon points="326,65 346,55 346,75" fill="#0ea5e9" />
            <text x={336} y={44} textAnchor="middle" fontSize={11} fill="#0ea5e9">enzima P</text>
            {/* produto */}
            <rect x={348} y={45} width={150} height={40} rx={8} fill="#dbeafe" stroke="#0ea5e9" strokeWidth={1.5} />
            <text x={423} y={70} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a8a">Antocianina (roxo)</text>
            {/* legenda ausência */}
            <text x={280} y={118} textAnchor="middle" fontSize={11} fill="#dc2626">
              Se faltar C ou P → via bloqueada → flor BRANCA (7/16)
            </text>
          </svg>
          <figcaption>
            A via metabólica da antocianina requer as enzimas de C e P em série:
            se qualquer uma faltar, o pigmento não é produzido.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Genótipo</th>
                <th>Fenótipo</th>
                <th>Frequência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>C_P_ (pelo menos um C e um P)</td>
                <td>Flor roxa</td>
                <td><M>{"9/16"}</M></td>
              </tr>
              <tr>
                <td>C_pp (C presente, P ausente)</td>
                <td>Flor branca</td>
                <td><M>{"3/16"}</M></td>
              </tr>
              <tr>
                <td>ccP_ (C ausente, P presente)</td>
                <td>Flor branca</td>
                <td><M>{"3/16"}</M></td>
              </tr>
              <tr>
                <td>ccpp (ambos ausentes)</td>
                <td>Flor branca</td>
                <td><M>{"1/16"}</M></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SEÇÃO 7 — Polimeria */}
      {/* ================================================================= */}
      <section className="lesson-section">
        <span className="section-kicker">Herança Quantitativa</span>

        <h2>7. Polimeria — Herança Poligênica e Distribuição em Sino</h2>

        <p>
          A <strong>polimeria</strong> (ou herança poligênica / herança
          quantitativa) ocorre quando <strong>dois ou mais pares de genes não
          alelos</strong> contribuem de forma <em>aditiva</em> para a expressão
          de uma mesma característica. Cada alelo dominante acrescenta uma
          "dose" de expressão; alelos recessivos não contribuem (ou contribuem
          menos). O fenótipo final é a <em>soma</em> de todas as doses.
        </p>

        <p>
          Exemplos clássicos em humanos incluem a <strong>cor da pele</strong>{" "}
          (controlada por pelo menos 3–6 genes, sendo o modelo didático com 2
          pares) e a <strong>estatura</strong>. Como há muitas combinações
          genotípicas possíveis — e o ambiente (nutrição, hormônios, luz solar)
          também influencia —, o resultado é uma <strong>variação
          contínua</strong> com distribuição aproximadamente em{" "}
          <strong>sino (gaussiana)</strong> na população.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 500 200"
            width="500"
            height="200"
            aria-label="Distribuição em sino da herança poligênica da cor da pele"
          >
            {/* eixos */}
            <line x1={40} y1={160} x2={470} y2={160} stroke="#374151" strokeWidth={1.5} />
            <line x1={40} y1={20} x2={40} y2={160} stroke="#374151" strokeWidth={1.5} />
            <text x={255} y={190} textAnchor="middle" fontSize={12} fill="#374151">
              Quantidade de alelos dominantes (doses de melanina)
            </text>
            <text x={15} y={90} fontSize={11} fill="#374151" transform="rotate(-90,15,90)">
              Frequência
            </text>
            {/* curva sino */}
            <path
              d="M 50 158 C 80 157, 110 145, 130 110 C 150 75, 175 35, 255 25 C 335 35, 360 75, 380 110 C 400 145, 430 157, 460 158"
              fill="#fb923c"
              opacity={0.3}
              stroke="none"
            />
            <path
              d="M 50 158 C 80 157, 110 145, 130 110 C 150 75, 175 35, 255 25 C 335 35, 360 75, 380 110 C 400 145, 430 157, 460 158"
              fill="none"
              stroke="#ea580c"
              strokeWidth={2.5}
            />
            {/* marcações eixo X */}
            {["0", "1", "2", "3", "4"].map((v, i) => (
              <g key={v}>
                <line x1={90 + i * 93} y1={160} x2={90 + i * 93} y2={165} stroke="#374151" strokeWidth={1} />
                <text x={90 + i * 93} y={177} textAnchor="middle" fontSize={11} fill="#374151">{v}</text>
              </g>
            ))}
            {/* rótulos fenótipos */}
            <text x={82} y={148} textAnchor="middle" fontSize={10} fill="#ea580c">muito</text>
            <text x={82} y={158} textAnchor="middle" fontSize={10} fill="#ea580c">clara</text>
            <text x={455} y={148} textAnchor="middle" fontSize={10} fill="#6b3a0d">muito</text>
            <text x={455} y={158} textAnchor="middle" fontSize={10} fill="#6b3a0d">escura</text>
            <text x={255} y={15} textAnchor="middle" fontSize={10} fill="#374151">intermediária (mais comum)</text>
          </svg>
          <figcaption>
            Distribuição em sino da cor da pele no modelo diíbrido (2 pares):
            com 4 alelos dominantes totais, os genótipos extremos são raros e
            os intermediários são os mais frequentes na população.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Doses de alelos dominantes</th>
                <th>Genótipos possíveis (modelo AaBb × AaBb)</th>
                <th>Frequência</th>
                <th>Fenótipo (cor da pele)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>aabb</td>
                <td><M>{"1/16"}</M></td>
                <td>Muito clara (fenótipo mínimo)</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Aabb, aaBb</td>
                <td><M>{"4/16"}</M></td>
                <td>Clara</td>
              </tr>
              <tr>
                <td>2</td>
                <td>AAbb, AaBb, aaBB</td>
                <td><M>{"6/16"}</M></td>
                <td>Intermediária</td>
              </tr>
              <tr>
                <td>3</td>
                <td>AABb, AaBB</td>
                <td><M>{"4/16"}</M></td>
                <td>Escura</td>
              </tr>
              <tr>
                <td>4</td>
                <td>AABB</td>
                <td><M>{"1/16"}</M></td>
                <td>Muito escura (fenótipo máximo)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Polimeria × Epistasia — como diferenciar</h3>
          <p>
            Na <strong>epistasia</strong>, um gene suprime a expressão do outro
            — há <em>menos</em> fenótipos do que o esperado pelo 9:3:3:1. Na{" "}
            <strong>polimeria</strong>, os genes se <em>somam</em> para produzir
            uma característica com gradação contínua, gerando{" "}
            <em>mais</em> fenótipos intermediários e distribuição em sino. Em
            ambos os casos, dois genes não alelos influenciam o mesmo caráter;
            a diferença está no mecanismo de interação (supressão vs. adição).
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SEÇÃO 8 — Resumo e Exercícios */}
      {/* ================================================================= */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>

        <h2>8. Mapa Mental das Proporções Modificadas</h2>

        <p>
          Todas as proporções de interação gênica partem da proporção-base{" "}
          <M>{"9:3:3:1"}</M> do diíbrido clássico. O que muda é o{" "}
          <strong>agrupamento dos fenótipos</strong> quando dois genes atuam
          sobre o mesmo caráter. A tabela a seguir é o resumo definitivo para
          provas:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fenômeno</th>
                <th>Origem da proporção</th>
                <th>Proporção resultante</th>
                <th>Detalhe</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Diibridismo clássico</td>
                <td>9 + 3 + 3 + 1</td>
                <td><M>{"9:3:3:1"}</M></td>
                <td>4 fenótipos distintos, dominância completa</td>
              </tr>
              <tr>
                <td>Epistasia dominante</td>
                <td>(9+3) + 3 + 1</td>
                <td><M>{"12:3:1"}</M></td>
                <td>A_ mascara B — 3 fenótipos</td>
              </tr>
              <tr>
                <td>Epistasia recessiva</td>
                <td>9 + 3 + (3+1)</td>
                <td><M>{"9:3:4"}</M></td>
                <td>aa mascara B — 3 fenótipos</td>
              </tr>
              <tr>
                <td>Genes complementares</td>
                <td>9 + (3+3+1)</td>
                <td><M>{"9:7"}</M></td>
                <td>Ambos necessários — 2 fenótipos</td>
              </tr>
              <tr>
                <td>Interação por adição</td>
                <td>9 + (3+3) + 1</td>
                <td><M>{"9:6:1"}</M></td>
                <td>Simples dominantes iguais — 3 fenótipos</td>
              </tr>
              <tr>
                <td>Polimeria (n = 2)</td>
                <td>1 : 4 : 6 : 4 : 1</td>
                <td>5 classes graduais</td>
                <td>Distribuição em sino; ambiente também atua</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Regra de ouro para o ENEM</h3>
          <p>
            Se a questão mostrar uma proporção modificada com total 16 e pedir
            o fenômeno genético envolvido, some as partes e compare com a
            tabela acima. Se mencionar "variação contínua", "distribuição em
            sino" ou "vários genes somam efeitos", a resposta é{" "}
            <strong>polimeria / herança quantitativa</strong>. Se mencionar
            "um gene impede outro", é <strong>epistasia</strong>.
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* EXERCÍCIOS */}
      {/* ================================================================= */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Gametas do diíbrido"
          statement={
            <p>
              Um indivíduo com genótipo <strong>AaBbCC</strong> produz quantos
              tipos diferentes de gametas, considerando segregação independente?
            </p>
          }
          options={[
            { letter: "a", text: "8 tipos" },
            { letter: "b", text: "4 tipos", correct: true },
            { letter: "c", text: "2 tipos" },
            { letter: "d", text: "1 tipo" },
          ]}
          resolution={
            <p>
              Somente os pares em heterozigose contribuem para a diversidade de
              gametas. Em AaBbCC, os pares heterozigotos são <strong>Aa</strong>{" "}
              e <strong>Bb</strong> (<em>n</em> = 2); o par CC é homozigoto e
              contribui com apenas um alelo C. Portanto: <M>{"2^2 = 4"}</M>{" "}
              tipos de gametas (ABC, AbC, aBC, abC).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Proporção no cruzamento diíbrido clássico"
          statement={
            <p>
              No cruzamento <strong>AaBb × AaBb</strong>, com dominância
              completa e segregação independente, qual é a probabilidade de
              obter um descendente com fenótipo dominante para A e recessivo
              para B (genótipo A_bb)?
            </p>
          }
          options={[
            { letter: "a", text: "9/16" },
            { letter: "b", text: "1/16" },
            { letter: "c", text: "3/16", correct: true },
            { letter: "d", text: "6/16" },
          ]}
          resolution={
            <p>
              Usando a regra da multiplicação independente: P(A_) ={" "}
              <M>{"3/4"}</M> e P(bb) = <M>{"1/4"}</M>. Portanto P(A_bb) ={" "}
              <M>{"3/4 × 1/4 = 3/16"}</M>. Confirmado pelo quadro de Punnett
              4×4: os genótipos AAbb e Aabb somam 3 células em 16.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Identificação de epistasia pela proporção fenotípica"
          statement={
            <p>
              Um pesquisador cruzou dois camundongos agouti duplo heterozigotos
              (AaBb × AaBb) e obteve, na prole, a seguinte distribuição:{" "}
              <strong>56 agouti : 18 pretos : 26 brancos</strong> (total = 100;
              ajuste para 16). Que tipo de interação gênica está ocorrendo, e
              qual gene é epistático?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Genes complementares (9:7); ambos os genes são necessários para produzir cor",
            },
            {
              letter: "b",
              text: "Epistasia recessiva (9:3:4); aa é epistático sobre B, impedindo produção de melanina",
              correct: true,
            },
            {
              letter: "c",
              text: "Epistasia dominante (12:3:1); A_ mascara o gene B",
            },
            {
              letter: "d",
              text: "Polimeria (distribuição em sino); vários genes somam efeito de pigmentação",
            },
          ]}
          resolution={
            <p>
              Ajustando 100 descendentes para base 16 (dividindo por ~6,25):
              56/6,25 ≈ 9; 18/6,25 ≈ 3; 26/6,25 ≈ 4. Proporção{" "}
              <M>{"9:3:4"}</M> — epistasia recessiva. O gene A controla a
              distribuição do pigmento (agouti); em homozigose recessiva{" "}
              <strong>aa</strong>, a proteína Agouti não é produzida, impedindo
              a modulação do pigmento independentemente do genótipo em B. Os
              genótipos aaB_ e aabb convergem para o fenótipo branco (ou
              albino, dependendo do locus), somando 4/16.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Cor da flor de ervilha-de-cheiro (ENEM-estilo)"
          statement={
            <p>
              Em ervilhas-de-cheiro (<em>Lathyrus odoratus</em>), a cor roxa da
              flor depende da ação conjunta de dois genes complementares, C e P.
              Ao cruzar duas linhagens brancas puras — uma com genótipo CCpp e
              outra ccPP —, a geração F1 foi inteiramente roxa. Ao cruzar
              plantas F1 entre si, qual proporção de plantas roxas é esperada na
              geração F2?
            </p>
          }
          options={[
            { letter: "a", text: "3/4 (proporção 3:1 clássica)" },
            { letter: "b", text: "1/2 (proporção 1:1)" },
            { letter: "c", text: "9/16 (proporção 9:7)", correct: true },
            { letter: "d", text: "12/16 (proporção 12:3:1)" },
          ]}
          resolution={
            <p>
              As linhagens puras CCpp × ccPP geram F1 com genótipo CcPp
              (roxas, pois possuem pelo menos um C e um P). O cruzamento F1 ×
              F1 é CcPp × CcPp — um diíbrido clássico. Como flor roxa exige
              <strong> ambos</strong> os alelos dominantes (C_P_), apenas{" "}
              <M>{"9/16"}</M> dos descendentes serão roxos; os restantes{" "}
              <M>{"7/16"}</M> (C_pp + ccP_ + ccpp) serão brancos. Proporção
              resultante: <M>{"9:7"}</M>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Polimeria e cor da pele humana (ENEM-estilo)"
          statement={
            <p>
              Um casal de pele intermediária (genótipo AaBb, no modelo diíbrido
              de cor de pele) deseja saber a probabilidade de ter um filho com
              pele muito escura (genótipo AABB — 4 doses de alelos dominantes).
              Qual é essa probabilidade, e a que fenômeno genético a cor da pele
              pertence?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "1/4; epistasia dominante, pois o gene A mascara o gene B",
            },
            {
              letter: "b",
              text: "1/16; polimeria (herança quantitativa), pois vários genes somam efeitos de pigmentação",
              correct: true,
            },
            {
              letter: "c",
              text: "3/16; genes complementares, pois ambos precisam estar presentes para produzir melanina",
            },
            {
              letter: "d",
              text: "1/4; herança ligada ao X, pois a cor da pele é controlada por gene no cromossomo X",
            },
          ]}
          resolution={
            <p>
              A cor da pele humana é exemplo clássico de <strong>polimeria</strong>{" "}
              (herança quantitativa), na qual múltiplos genes adicionam doses de
              melanina. No modelo simplificado com 2 pares (AaBb × AaBb), a
              probabilidade de AABB é P(AA) × P(BB) ={" "}
              <M>{"1/4 × 1/4 = 1/16"}</M>. Esse genótipo apresenta 4 doses
              dominantes — o máximo possível no modelo —, resultando no fenótipo
              de pele muito escura. A distribuição contínua e a influência do
              ambiente (exposição solar, por exemplo) são características
              marcantes da herança quantitativa.
            </p>
          }
        />
      </section>
    </article>
  );
}
