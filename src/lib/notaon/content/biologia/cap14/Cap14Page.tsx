"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap14Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 14</span>

          <h1>Extensões da Primeira Lei: Codominância, Dominância Incompleta, Alelos Letais e Heredogramas</h1>

          <p>
            A Primeira Lei de Mendel explica de forma elegante como alelos se
            separam na formação dos gametas — mas a natureza é mais rica do que
            qualquer modelo simplificado. Neste capítulo você vai descobrir que a
            relação entre dois alelos pode ser de <strong>dominância
            incompleta</strong> (fenótipo intermediário), <strong>codominância</strong>{" "}
            (dois fenótipos simultâneos), <strong>letalidade</strong> (alelo que
            mata quando em dose dupla) ou revelar-se por meio de{" "}
            <strong>heredogramas</strong> — os mapas genealógicos da Genética.
            Todos esses tópicos são recorrentes no ENEM e nos principais
            vestibulares do país.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>

        <h2>1. Revisão: Dominância Completa e o Problema de Representação</h2>

        <p>
          Mendel trabalhou, por sorte ou critério, com características em que
          um alelo <strong>domina completamente</strong> o outro: o heterozigoto
          Aa é fenotipicamente idêntico ao homozigoto dominante AA. Nesse
          cenário, o cruzamento de dois heterozigotos <M>{"Aa \\times Aa"}</M>{" "}
          produz proporções genotípicas <M>{"1\\,AA : 2\\,Aa : 1\\,aa"}</M> e
          fenotípicas <M>{"3 : 1"}</M> (dominante : recessivo).
        </p>

        <p>
          Porém, para inúmeros genes em diversas espécies, os dois alelos
          interagem de forma mais complexa. Surge então um leque de padrões
          que a Genética chama de <strong>extensões da Primeira Lei</strong>:
          eles não contradizem a Segregação de Mendel (os alelos ainda se
          separam nos gametas), mas alteram profundamente a{" "}
          <em>relação de dominância</em> e as proporções fenotípicas
          observadas na prole.
        </p>

        <div className="lesson-highlight">
          <h3>O que NÃO muda</h3>
          <p>
            Em todas as extensões da Primeira Lei, a segregação alélica durante
            a meiose continua obedecendo Mendel: cada gameta recebe{" "}
            <strong>um e somente um alelo</strong> de cada loco. O que muda é
            como esses alelos se expressam fenotipicamente quando combinados
            no zigoto.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de interação alélica</th>
                <th>Fenótipo do heterozigoto</th>
                <th>Proporção em <M>{"F_2"}</M> (genotípica 1:2:1)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dominância completa</td>
                <td>Igual ao homozigoto dominante</td>
                <td>3 dominante : 1 recessivo</td>
              </tr>
              <tr>
                <td>Dominância incompleta</td>
                <td>Intermediário (novo fenótipo)</td>
                <td>1 : 2 : 1 (três fenótipos)</td>
              </tr>
              <tr>
                <td>Codominância</td>
                <td>Expressa os dois fenótipos simultaneamente</td>
                <td>1 : 2 : 1 (três fenótipos distintos)</td>
              </tr>
              <tr>
                <td>Alelo letal (homo letal)</td>
                <td>Viável (heterozigoto sobrevive)</td>
                <td>2 : 1 (homozig. dominante morre)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Dominância Incompleta</span>

        <h2>2. Dominância Incompleta: o Fenótipo Intermediário</h2>

        <p>
          Na <strong>dominância incompleta</strong> (também chamada de herança
          intermediária ou semidominância), nenhum dos dois alelos consegue
          "silenciar" o outro. O heterozigoto produz, em quantidade, apenas{" "}
          <em>metade</em> do produto gênico que produz o homozigoto dominante,
          resultando em um fenótipo visivelmente diferente de ambos os pais.
        </p>

        <p>
          O exemplo mais famoso no Brasil é a{" "}
          <strong>maravilha</strong> (<em>Mirabilis jalapa</em>), também
          conhecida como boca-de-leão em alguns contextos escolares. Flores
          vermelhas (genótipo <strong>V¹V¹</strong>) cruzadas com flores
          brancas (<strong>V²V²</strong>) geram uma <M>{"F_1"}</M> inteiramente
          de flores <strong>rosas</strong> (<strong>V¹V²</strong>). Na{" "}
          <M>{"F_2"}</M>, o cruzamento entre flores rosas produz:{" "}
          <M>{"1\\,V^1V^1 : 2\\,V^1V^2 : 1\\,V^2V^2"}</M>, ou seja,{" "}
          <strong>1 vermelha : 2 rosas : 1 branca</strong>.
        </p>

        <div className="lesson-highlight">
          <h3>Por que o heterozigoto fica "no meio"?</h3>
          <p>
            Cada alelo V¹ produz enzimas que sintetizam pigmento vermelho. O
            homozigoto V¹V¹ fabrica pigmento em dose dupla (flor vermelha
            intensa). O heterozigoto V¹V² dispõe de apenas metade das cópias
            do gene funcional, gerando menos pigmento — o suficiente para uma
            cor rosada, mas não para o vermelho pleno. Já V²V² não produz
            pigmento (branca). Esse é um exemplo clássico de{" "}
            <strong>haploinsuficiência</strong>: uma única cópia do alelo
            funcional não é suficiente para o fenótipo dominante completo.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Esquema de dominância incompleta na maravilha">
            {/* P1 */}
            <circle cx={80} cy={60} r={36} fill="#ef4444" stroke="#991b1b" strokeWidth={2} />
            <text x={80} y={65} textAnchor="middle" fontSize={13} fontWeight={700} fill="white">V¹V¹</text>
            <text x={80} y={112} textAnchor="middle" fontSize={12} fill="#374151">Vermelha</text>

            {/* x */}
            <text x={160} y={65} textAnchor="middle" fontSize={20} fill="#6b7280">×</text>

            {/* P2 */}
            <circle cx={240} cy={60} r={36} fill="#f9fafb" stroke="#9ca3af" strokeWidth={2} />
            <text x={240} y={65} textAnchor="middle" fontSize={13} fontWeight={700} fill="#374151">V²V²</text>
            <text x={240} y={112} textAnchor="middle" fontSize={12} fill="#374151">Branca</text>

            {/* seta F1 */}
            <line x1={160} y1={125} x2={160} y2={148} stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arr)" />
            <polygon points="154,148 166,148 160,160" fill="#6b7280" />
            <text x={185} y={145} fontSize={11} fill="#6b7280">F₁ (100%)</text>

            {/* F1 */}
            <circle cx={160} cy={178} r={16} fill="#f9a8d4" stroke="#db2777" strokeWidth={1.5} />
            <text x={160} y={183} textAnchor="middle" fontSize={11} fontWeight={700} fill="#831843">V¹V²</text>
            <text x={160} y={200} textAnchor="middle" fontSize={11} fill="#374151">Rosa</text>

            {/* F2 seta */}
            <line x1={420} y1={20} x2={420} y2={42} stroke="#6b7280" strokeWidth={1.5} />
            <polygon points="414,42 426,42 420,54" fill="#6b7280" />
            <text x={345} y={38} fontSize={11} fill="#6b7280">F₂: V¹V² × V¹V²</text>

            {/* F2 fenótipos */}
            <circle cx={370} cy={100} r={30} fill="#ef4444" stroke="#991b1b" strokeWidth={1.5} />
            <text x={370} y={105} textAnchor="middle" fontSize={12} fontWeight={700} fill="white">V¹V¹</text>
            <text x={370} y={148} textAnchor="middle" fontSize={11} fill="#374151">1 vermelha</text>

            <circle cx={480} cy={100} r={30} fill="#f9a8d4" stroke="#db2777" strokeWidth={1.5} />
            <text x={480} y={105} textAnchor="middle" fontSize={12} fontWeight={700} fill="#831843">V¹V²</text>
            <text x={480} y={148} textAnchor="middle" fontSize={11} fill="#374151">2 rosas</text>

            <circle cx={590} cy={100} r={30} fill="#f9fafb" stroke="#9ca3af" strokeWidth={1.5} />
            <text x={590} y={105} textAnchor="middle" fontSize={12} fontWeight={700} fill="#374151">V²V²</text>
            <text x={590} y={148} textAnchor="middle" fontSize={11} fill="#374151">1 branca</text>
          </svg>
          <figcaption>
            Dominância incompleta na maravilha: a F₂ apresenta proporção fenotípica 1 vermelha : 2 rosas : 1 branca,
            coincidindo com a proporção genotípica 1 : 2 : 1.
          </figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌹</span>
            <h3>Maravilha (Mirabilis jalapa)</h3>
            <p>Vermelho × branco geram rosa. Proporção <M>{"F_2"}</M>: 1 : 2 : 1.</p>
          </div>
          <div className="lesson-card">
            <span>🐔</span>
            <h3>Crista de galinha</h3>
            <p>Galos com crista "rosa" × "ervilha" podem produzir crista "simples" em homozigotos.</p>
          </div>
          <div className="lesson-card">
            <span>🌸</span>
            <h3>Boca-de-leão (Antirrhinum)</h3>
            <p>Clássico exemplo usado em genética experimental europeia.</p>
          </div>
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Genótipos e fenótipos</h3>
            <p>Na dominância incompleta, <strong>genótipo = fenótipo</strong>: os 3 genótipos produzem 3 fenótipos distintos.</p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Codominância</span>

        <h2>3. Codominância: Dois Alelos, Dois Fenótipos Simultâneos</h2>

        <p>
          Na <strong>codominância</strong>, os dois alelos se expressam{" "}
          <em>simultaneamente e de forma independente</em> no heterozigoto:
          não há mistura nem fenótipo intermediário — os dois caracteres
          aparecem ao mesmo tempo, lado a lado, no mesmo indivíduo.
        </p>

        <p>
          O exemplo clássico nas provas brasileiras é o{" "}
          <strong>gado bovino da raça shorthorn</strong>. O alelo{" "}
          <strong>M<sup>R</sup></strong> determina pelos vermelhos e{" "}
          <strong>M<sup>B</sup></strong> determina pelos brancos. O animal
          heterozigoto <strong>M<sup>R</sup>M<sup>B</sup></strong> apresenta
          simultaneamente pelos vermelhos E pelos brancos — a pelagem{" "}
          <strong>ruã</strong> (ou "roan"), em que os dois tipos de pelo
          coexistem visivelmente no mesmo indivíduo. Isso é radicalmente
          diferente da dominância incompleta, em que o pelo seria de uma
          cor uniforme intermediária (rosado, por exemplo).
        </p>

        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg viewBox="0 0 300 220" width="300" height="220" aria-label="Codominância no gado shorthorn">
              {/* Pai vermelho */}
              <rect x={20} y={20} width={70} height={60} rx={8} fill="#ef4444" stroke="#991b1b" strokeWidth={2} />
              <text x={55} y={53} textAnchor="middle" fontSize={13} fontWeight={700} fill="white">M</text>
              <text x={55} y={68} textAnchor="middle" fontSize={11} fontWeight={700} fill="white">R</text>
              <text x={55} y={95} textAnchor="middle" fontSize={11} fill="#374151">Vermelho</text>
              <text x={55} y={108} textAnchor="middle" fontSize={10} fill="#6b7280">M R M R</text>

              <text x={150} y={58} textAnchor="middle" fontSize={22} fill="#6b7280">×</text>

              {/* Mãe branca */}
              <rect x={210} y={20} width={70} height={60} rx={8} fill="#f9fafb" stroke="#9ca3af" strokeWidth={2} />
              <text x={245} y={53} textAnchor="middle" fontSize={13} fontWeight={700} fill="#374151">M</text>
              <text x={245} y={68} textAnchor="middle" fontSize={11} fontWeight={700} fill="#374151">B</text>
              <text x={245} y={95} textAnchor="middle" fontSize={11} fill="#374151">Branco</text>
              <text x={245} y={108} textAnchor="middle" fontSize={10} fill="#6b7280">M B M B</text>

              {/* Seta */}
              <polygon points="144,125 156,125 150,140" fill="#6b7280" />
              <line x1={150} y1={110} x2={150} y2={125} stroke="#6b7280" strokeWidth={1.5} />

              {/* Filho ruão */}
              <rect x={95} y={148} width={110} height={60} rx={8} fill="url(#ruao)" stroke="#b45309" strokeWidth={2} />
              <defs>
                <pattern id="ruao" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                  <rect width="8" height="8" fill="#ef4444" />
                  <rect x="4" width="4" height="8" fill="white" />
                </pattern>
              </defs>
              <text x={150} y={183} textAnchor="middle" fontSize={12} fontWeight={700} fill="#1f2937">Ruão</text>
              <text x={150} y={197} textAnchor="middle" fontSize={10} fill="#374151">M R M B</text>
              <text x={150} y={215} textAnchor="middle" fontSize={10} fill="#6b7280">pelos vermelhos + brancos</text>
            </svg>
            <figcaption>Codominância no gado shorthorn: o ruão exibe pelos vermelhos e brancos simultâneos.</figcaption>
          </figure>

          <figure className="lesson-figure">
            <svg viewBox="0 0 300 220" width="300" height="220" aria-label="Comparação dominância incompleta vs codominância">
              {/* Cabeçalho */}
              <text x={150} y={22} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">Dominância incompleta × Codominância</text>

              {/* Coluna incompleta */}
              <rect x={20} y={36} width={120} height={26} rx={6} fill="#dbeafe" stroke="#3b82f6" strokeWidth={1} />
              <text x={80} y={53} textAnchor="middle" fontSize={11} fontWeight={700} fill="#1e3a8a">Dom. Incompleta</text>

              <circle cx={80} cy={100} r={28} fill="#f9a8d4" stroke="#db2777" strokeWidth={1.5} />
              <text x={80} y={105} textAnchor="middle" fontSize={11} fill="#831843">Rosa</text>
              <text x={80} y={140} textAnchor="middle" fontSize={10} fill="#374151">(cor nova — mistura)</text>
              <text x={80} y={155} textAnchor="middle" fontSize={10} fill="#374151">Heterozigoto</text>
              <text x={80} y={168} textAnchor="middle" fontSize={10} fill="#374151">≠ nenhum dos pais</text>

              {/* Divisor */}
              <line x1={155} y1={36} x2={155} y2={200} stroke="#e5e7eb" strokeWidth={1.5} strokeDasharray="4 3" />

              {/* Coluna codominância */}
              <rect x={163} y={36} width={120} height={26} rx={6} fill="#dcfce7" stroke="#16a34a" strokeWidth={1} />
              <text x={223} y={53} textAnchor="middle" fontSize={11} fontWeight={700} fill="#14532d">Codominância</text>

              {/* Representação "pontilhada" ruão */}
              <circle cx={223} cy={100} r={28} fill="url(#cod_pat)" stroke="#b45309" strokeWidth={1.5} />
              <defs>
                <pattern id="cod_pat" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                  <rect width="6" height="6" fill="#ef4444" />
                  <rect x="3" width="3" height="6" fill="white" />
                </pattern>
              </defs>
              <text x={223} y={140} textAnchor="middle" fontSize={10} fill="#374151">(dois caracteres</text>
              <text x={223} y={153} textAnchor="middle" fontSize={10} fill="#374151">simultâneos)</text>
              <text x={223} y={168} textAnchor="middle" fontSize={10} fill="#374151">Heterozigoto</text>
              <text x={223} y={181} textAnchor="middle" fontSize={10} fill="#374151">= ambos os pais</text>
            </svg>
            <figcaption>Distinção visual entre dominância incompleta (fenótipo novo, intermediário) e codominância (dois fenótipos juntos).</figcaption>
          </figure>
        </div>

        <div className="lesson-highlight">
          <h3>Sistema ABO: codominância + alelos múltiplos</h3>
          <p>
            O grupo sanguíneo ABO é governado por <strong>três alelos</strong>{" "}
            no mesmo loco: <M>{"I^A"}</M>, <M>{"I^B"}</M> e <M>{"i"}</M>.{" "}
            <M>{"I^A"}</M> e <M>{"I^B"}</M> são <strong>codominantes</strong>{" "}
            entre si e ambos dominam <M>{"i"}</M>. O genótipo <M>{"I^AI^B"}</M>{" "}
            produz sangue tipo AB — as hemácias expressam simultaneamente os
            antígenos A e B, sem que um apague o outro.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Genótipo</th>
                <th>Tipo sanguíneo (ABO)</th>
                <th>Antígeno na hemácia</th>
                <th>Anticorpo no soro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><M>{"I^AI^A"}</M> ou <M>{"I^Ai"}</M></td>
                <td>A</td>
                <td>A</td>
                <td>Anti-B</td>
              </tr>
              <tr>
                <td><M>{"I^BI^B"}</M> ou <M>{"I^Bi"}</M></td>
                <td>B</td>
                <td>B</td>
                <td>Anti-A</td>
              </tr>
              <tr>
                <td><M>{"I^AI^B"}</M></td>
                <td>AB (codominância)</td>
                <td>A e B</td>
                <td>Nenhum</td>
              </tr>
              <tr>
                <td><M>{"ii"}</M></td>
                <td>O</td>
                <td>Nenhum (antígeno H)</td>
                <td>Anti-A e Anti-B</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Alelos Letais</span>

        <h2>4. Alelos Letais: Quando o Gene Mata</h2>

        <p>
          Um <strong>alelo letal</strong> é aquele que, em determinada
          combinação genotípica (geralmente o homozigoto), causa a{" "}
          <strong>morte do indivíduo</strong> — antes do nascimento ou logo
          após. A letalidade ocorre porque o produto gênico afetado é
          essencial para processos fisiológicos críticos.
        </p>

        <p>
          O exemplo escolar mais clássico é o camundongo de pelagem{" "}
          <strong>amarela</strong>. O alelo <em>A</em> (amarelo) é{" "}
          <strong>dominante</strong> para a cor — heterozigotos{" "}
          <em>Aa</em> são amarelos —, mas é <strong>recessivo letal</strong>:
          homozigotos <em>AA</em> morrem ainda no desenvolvimento embrionário
          porque o mesmo gene também regula uma proteína essencial à
          sobrevivência. Resultado: camundongos amarelos são{" "}
          <em>sempre</em> heterozigotos; nunca se observam homozigotos
          amarelos vivos.
        </p>

        <div className="lesson-highlight">
          <h3>Por que a proporção vira 2:1?</h3>
          <p>
            No cruzamento <M>{"Aa \\times Aa"}</M> a proporção genotípica
            esperada é <M>{"1\\,AA : 2\\,Aa : 1\\,aa"}</M>. Como os{" "}
            <M>{"AA"}</M> morrem antes de nascer, entre os descendentes{" "}
            <strong>vivos</strong> restam apenas <M>{"2\\,Aa"}</M> (amarelo) e{" "}
            <M>{"1\\,aa"}</M> (cinza/normal) — proporção fenotípica{" "}
            <strong>2 : 1</strong>. Quando se observa essa proporção incomum
            em cruzamentos de indivíduos com aspecto semelhante, a hipótese
            de alelo letal deve ser investigada.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 660 200" width="660" height="200" aria-label="Cruzamento com alelo letal no camundongo">
            {/* Título */}
            <text x={330} y={18} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">Aa × Aa (alelo A letal em dose dupla)</text>

            {/* 4 caixas de Punnett */}
            {[
              { x: 90,  y: 40, geno: "AA", cor: "#dc2626", label: "LETAL", sub: "morre" },
              { x: 220, y: 40, geno: "Aa", cor: "#f59e0b", label: "Amarelo", sub: "sobrevive" },
              { x: 350, y: 40, geno: "Aa", cor: "#f59e0b", label: "Amarelo", sub: "sobrevive" },
              { x: 480, y: 40, geno: "aa", cor: "#6b7280", label: "Normal", sub: "sobrevive" },
            ].map((item) => (
              <g key={item.geno + item.x}>
                <rect x={item.x} y={item.y} width={110} height={80} rx={10}
                  fill={item.cor} opacity={item.geno === "AA" ? 0.18 : 0.2}
                  stroke={item.cor} strokeWidth={2}
                  strokeDasharray={item.geno === "AA" ? "5 4" : "none"} />
                <text x={item.x + 55} y={item.y + 33} textAnchor="middle" fontSize={15} fontWeight={800} fill={item.geno === "AA" ? "#991b1b" : item.cor === "#f59e0b" ? "#92400e" : "#374151"}>{item.geno}</text>
                <text x={item.x + 55} y={item.y + 55} textAnchor="middle" fontSize={12} fontWeight={600} fill={item.geno === "AA" ? "#dc2626" : "#374151"}>{item.label}</text>
                <text x={item.x + 55} y={item.y + 72} textAnchor="middle" fontSize={10} fill="#6b7280">{item.sub}</text>
              </g>
            ))}

            {/* Proporção resultante */}
            <rect x={130} y={148} width={390} height={44} rx={10} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1.5} />
            <text x={325} y={170} textAnchor="middle" fontSize={13} fontWeight={700} fill="#78350f">
              Entre os sobreviventes: 2 amarelos (Aa) : 1 normal (aa)
            </text>
            <text x={325} y={186} textAnchor="middle" fontSize={11} fill="#92400e">
              Proporção 2:1 — sinal diagnóstico de alelo letal
            </text>
          </svg>
          <figcaption>
            O genótipo AA morre na fase embrionária. Os descendentes vivos ficam na proporção 2 amarelos : 1 normal
            (em vez dos 3:1 esperados na dominância completa).
          </figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🐭</span>
            <h3>Camundongo amarelo</h3>
            <p>Alelo <em>A</em> amarelo dominante para cor, letal em homozigoto. Proporção 2:1 nos descendentes.</p>
          </div>
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Tabaco (Nicotiana)</h3>
            <p>Alelos brancos homozigotos causam morte por ausência de clorofila (letais em condições normais).</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Diagnóstico na prova</h3>
            <p>Se cruzamento de semelhantes produz proporção 2:1 em vez de 3:1, suspeite de alelo letal.</p>
          </div>
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Pleotropia</h3>
            <p>Alelos letais frequentemente são pleiotrópicos: o mesmo gene afeta cor E sobrevivência.</p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Heredogramas</span>

        <h2>5. Heredogramas: a Linguagem Visual da Genética de Famílias</h2>

        <p>
          Um <strong>heredograma</strong> (ou genealogia) é um diagrama
          padronizado que representa a transmissão de uma característica
          hereditária ao longo de gerações de uma família. É a principal
          ferramenta do geneticista para inferir o padrão de herança de uma
          doença ou traço antes de ter acesso ao DNA da família.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Símbolo</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Quadrado vazio □</td>
                <td>Indivíduo masculino não afetado</td>
              </tr>
              <tr>
                <td>Círculo vazio ○</td>
                <td>Indivíduo feminino não afetado</td>
              </tr>
              <tr>
                <td>Quadrado preenchido ■</td>
                <td>Indivíduo masculino afetado</td>
              </tr>
              <tr>
                <td>Círculo preenchido ●</td>
                <td>Indivíduo feminino afetado</td>
              </tr>
              <tr>
                <td>Linha horizontal entre □ e ○</td>
                <td>Casal (acasalamento / união)</td>
              </tr>
              <tr>
                <td>Linha vertical descendente</td>
                <td>Descendentes do casal</td>
              </tr>
              <tr>
                <td>Linha dupla (══)</td>
                <td>Casal consanguíneo (parentes)</td>
              </tr>
              <tr>
                <td>Ponto no centro ◉</td>
                <td>Portador (heterozigoto) — usado em recessivo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 640 300" width="640" height="300" aria-label="Heredograma com três gerações mostrando herança autossômica recessiva">
            {/* Legenda */}
            <rect x={470} y={14} width={160} height={74} rx={8} fill="#f9fafb" stroke="#d1d5db" strokeWidth={1} />
            <text x={550} y={30} textAnchor="middle" fontSize={11} fontWeight={700} fill="#374151">Legenda</text>
            <rect x={480} y={38} width={14} height={14} rx={2} fill="none" stroke="#374151" strokeWidth={1.5} />
            <text x={500} y={49} fontSize={10} fill="#374151">homem não afetado</text>
            <circle cx={487} cy={63} r={7} fill="none" stroke="#374151" strokeWidth={1.5} />
            <text x={500} y={67} fontSize={10} fill="#374151">mulher não afetada</text>
            <rect x={480} y={74} width={14} height={14} rx={2} fill="#374151" />
            <text x={500} y={84} fontSize={10} fill="#374151">homem afetado</text>

            {/* ===== Geração I ===== */}
            <text x={20} y={58} fontSize={12} fontWeight={700} fill="#6b7280">I</text>
            {/* Pai I-1 normal */}
            <rect x={80} y={42} width={32} height={32} rx={4} fill="none" stroke="#374151" strokeWidth={2} />
            {/* Mãe I-2 normal portadora (ponto) */}
            <circle cx={178} cy={58} r={16} fill="none" stroke="#374151" strokeWidth={2} />
            <circle cx={178} cy={58} r={5} fill="#374151" />
            {/* linha do casal */}
            <line x1={112} y1={58} x2={162} y2={58} stroke="#374151" strokeWidth={1.5} />
            {/* linha de descendência */}
            <line x1={137} y1={58} x2={137} y2={118} stroke="#374151" strokeWidth={1.5} />
            <line x1={80} y1={118} x2={320} y2={118} stroke="#374151" strokeWidth={1.5} />

            {/* ===== Geração II ===== */}
            <text x={20} y={148} fontSize={12} fontWeight={700} fill="#6b7280">II</text>
            {/* II-1 normal */}
            <rect x={64} y={128} width={32} height={32} rx={4} fill="none" stroke="#374151" strokeWidth={2} />
            <line x1={80} y1={118} x2={80} y2={128} stroke="#374151" strokeWidth={1.5} />
            {/* II-2 normal */}
            <circle cx={160} cy={144} r={16} fill="none" stroke="#374151" strokeWidth={2} />
            <line x1={160} y1={118} x2={160} y2={128} stroke="#374151" strokeWidth={1.5} />
            {/* II-3 AFETADO */}
            <rect x={224} y={128} width={32} height={32} rx={4} fill="#374151" stroke="#111827" strokeWidth={2} />
            <line x1={240} y1={118} x2={240} y2={128} stroke="#374151" strokeWidth={1.5} />
            {/* II-4 normal (cônjuge de II-1) */}
            <circle cx={96} cy={144} r={13} fill="none" stroke="#374151" strokeWidth={1.5} />
            <line x1={96} y1={144} x2={110} y2={144} stroke="#374151" strokeWidth={1.5} />
            <line x1={64} y1={144} x2={83} y2={144} stroke="#374151" strokeWidth={1.5} />
            {/* linha de descendência II-1 + II-4 */}
            <line x1={88} y1={144} x2={88} y2={210} stroke="#374151" strokeWidth={1.5} />
            <line x1={55} y1={210} x2={200} y2={210} stroke="#374151" strokeWidth={1.5} />

            {/* ===== Geração III ===== */}
            <text x={20} y={238} fontSize={12} fontWeight={700} fill="#6b7280">III</text>
            {/* III-1 normal */}
            <rect x={40} y={218} width={30} height={30} rx={4} fill="none" stroke="#374151" strokeWidth={2} />
            <line x1={55} y1={210} x2={55} y2={218} stroke="#374151" strokeWidth={1.5} />
            {/* III-2 normal feminino */}
            <circle cx={118} cy={233} r={14} fill="none" stroke="#374151" strokeWidth={2} />
            <line x1={118} y1={210} x2={118} y2={219} stroke="#374151" strokeWidth={1.5} />
            {/* III-3 AFETADO */}
            <rect x={173} y={218} width={30} height={30} rx={4} fill="#374151" />
            <line x1={188} y1={210} x2={188} y2={218} stroke="#374151" strokeWidth={1.5} />

            {/* Rótulos de geração */}
            <text x={330} y={58} fontSize={10} fill="#6b7280">Geração I — avós (portadores)</text>
            <text x={330} y={144} fontSize={10} fill="#6b7280">Geração II — pais (II-3 afetado)</text>
            <text x={330} y={233} fontSize={10} fill="#6b7280">Geração III — netos (III-3 afetado)</text>

            {/* Anotação */}
            <rect x={20} y={265} width={600} height={28} rx={6} fill="#eff6ff" stroke="#bfdbfe" strokeWidth={1} />
            <text x={320} y={283} textAnchor="middle" fontSize={11} fill="#1e40af">
              Herança autossômica recessiva: afetados em ambos os sexos; pais normais podem ter filhos afetados (portadores).
            </text>
          </svg>
          <figcaption>
            Heredograma de três gerações com herança autossômica recessiva. Círculo com ponto = mulher portadora (heterozigoto).
            Quadrado preenchido = homem afetado (homozigoto recessivo).
          </figcaption>
        </figure>
      </section>

      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Interpretação</span>

        <h2>6. Como Interpretar e Resolver Heredogramas no ENEM</h2>

        <p>
          Interpretar um heredograma é um processo lógico, de eliminação.
          Seguindo a sequência abaixo você resolve a grande maioria das
          questões de vestibular:
        </p>

        <div className="lesson-highlight">
          <h3>Passo a passo de análise</h3>
          <ol>
            <li>
              <strong>Verifique a distribuição por sexo.</strong> Se a
              característica afeta igualmente homens e mulheres, a herança é
              provavelmente <em>autossômica</em>. Se há muito mais homens
              afetados, suspeite de <em>ligada ao X</em>.
            </li>
            <li>
              <strong>Procure pais normais com filhos afetados.</strong> Isso
              <em> prova</em> que a herança é <em>recessiva</em> — pais
              normais heterozigotos (portadores) geraram filho homozigoto
              recessivo afetado.
            </li>
            <li>
              <strong>Verifique se a característica "pula" gerações.</strong>{" "}
              Recessivos podem ficar ocultos por gerações; dominantes tendem a
              aparecer em todas as gerações em que há indivíduos afetados.
            </li>
            <li>
              <strong>Teste a hipótese com os cruzamentos disponíveis.</strong>{" "}
              Atribua genótipos aos indivíduos afetados e verifique se os pais
              são consistentes. Se houver contradição, descarte a hipótese.
            </li>
            <li>
              <strong>Calcule probabilidades pedidas.</strong> Com os
              genótipos determinados, aplique a Quadrado de Punnett ou a regra
              dos produtos para estimar a chance de um filho ser afetado.
            </li>
          </ol>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Dominante autossômica</h3>
            <p>Afetados em todas as gerações. Todo afetado tem ao menos um pai afetado. Ambos os sexos afetados.</p>
          </div>
          <div className="lesson-card">
            <span>🧩</span>
            <h3>Recessiva autossômica</h3>
            <p>Pode "pular" gerações. Pais normais com filhos afetados. Afeta igualmente ambos os sexos.</p>
          </div>
          <div className="lesson-card">
            <span>👦</span>
            <h3>Recessiva ligada ao X</h3>
            <p>Muito mais homens afetados. Mulheres afetadas têm pai afetado. Mãe portadora transmite a filhos.</p>
          </div>
          <div className="lesson-card">
            <span>👧</span>
            <h3>Dominante ligada ao X</h3>
            <p>Pai afetado transmite a TODAS as filhas. Mãe afetada pode transmitir a filhos de qualquer sexo.</p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Padrão observado no heredograma</th>
                <th>Hipótese mais provável</th>
                <th>Por quê?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pais normais → filho afetado</td>
                <td>Recessiva</td>
                <td>Dominante seria visível nos pais</td>
              </tr>
              <tr>
                <td>Pai afetado → todos os filhos afetados</td>
                <td>Dominante (pai homozigoto)</td>
                <td>Ou dominante ligada ao X (filhas)</td>
              </tr>
              <tr>
                <td>Só homens afetados (mulheres são portadoras)</td>
                <td>Recessiva ligada ao X</td>
                <td>Homens têm só um X, sempre expressam</td>
              </tr>
              <tr>
                <td>Proporção 2:1 entre filhos</td>
                <td>Alelo letal</td>
                <td>Homozigotos dominantes morrem</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativo</span>

        <h2>7. Comparativo Geral: Dominância Incompleta × Codominância × Letal</h2>

        <p>
          Muitas questões do ENEM pedem a distinção entre esses três padrões
          em um único item. O quadro abaixo sintetiza as diferenças e
          semelhanças mais cobradas:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Dominância incompleta</th>
                <th>Codominância</th>
                <th>Alelo letal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fenótipo do heterozigoto</td>
                <td>Novo (intermediário)</td>
                <td>Dois fenótipos simultâneos</td>
                <td>Viável (igual ao dominante)</td>
              </tr>
              <tr>
                <td>Proporção fenotípica F₂</td>
                <td>1 : 2 : 1</td>
                <td>1 : 2 : 1</td>
                <td>2 : 1 (homozig. dom. morre)</td>
              </tr>
              <tr>
                <td>Proporção genotípica F₂</td>
                <td>1 : 2 : 1</td>
                <td>1 : 2 : 1</td>
                <td>0 : 2 : 1 (AA ausente)</td>
              </tr>
              <tr>
                <td>Exemplo clássico</td>
                <td>Maravilha (flor rosa)</td>
                <td>Gado ruão / Sangue AB</td>
                <td>Camundongo amarelo</td>
              </tr>
              <tr>
                <td>Mendel ainda vale?</td>
                <td>Sim (segregação mantida)</td>
                <td>Sim (segregação mantida)</td>
                <td>Sim (mas sobreviventes alteram contagem)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Atenção: como diferenciar dominância incompleta de codominância?</h3>
          <p>
            Na <strong>dominância incompleta</strong>, o heterozigoto tem um
            fenótipo <em>diferente de ambos os pais</em> — cor rosada que não
            existia em nenhum dos genitores. Na{" "}
            <strong>codominância</strong>, o heterozigoto{" "}
            <em>lembra os dois pais ao mesmo tempo</em>: o gado ruão tem pelos
            que são individualmente vermelhos E pelos que são individualmente
            brancos, sem mistura.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Dominância incompleta na maravilha"
          statement={
            <p>
              Em <em>Mirabilis jalapa</em> (maravilha), flores vermelhas (V¹V¹)
              cruzadas com flores brancas (V²V²) produzem flores rosas (V¹V²)
              na F₁. Ao cruzar duas flores rosas entre si, a proporção fenotípica
              esperada na F₂ é:
            </p>
          }
          options={[
            { letter: "a", text: "3 vermelhas : 1 branca" },
            { letter: "b", text: "1 vermelha : 1 branca" },
            { letter: "c", text: "1 vermelha : 2 rosas : 1 branca", correct: true },
            { letter: "d", text: "Todas as flores serão rosas" },
          ]}
          resolution={
            <p>
              O cruzamento V¹V² × V¹V² produz genótipos na proporção{" "}
              <M>{"1\\,V^1V^1 : 2\\,V^1V^2 : 1\\,V^2V^2"}</M>. Na dominância
              incompleta, cada genótipo gera um fenótipo distinto: V¹V¹ =
              vermelha, V¹V² = rosa, V²V² = branca. Portanto, proporção
              fenotípica 1 : 2 : 1.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Codominância no gado shorthorn"
          statement={
            <p>
              Num rebanho de bovinos da raça shorthorn, touros vermelhos
              (M<sup>R</sup>M<sup>R</sup>) cruzados com vacas brancas
              (M<sup>B</sup>M<sup>B</sup>) geram bezerros ruãos
              (M<sup>R</sup>M<sup>B</sup>). Se dois animais ruãos se cruzarem,
              qual será a proporção esperada de indivíduos ruãos na progênie?
            </p>
          }
          options={[
            { letter: "a", text: "100%" },
            { letter: "b", text: "75%" },
            { letter: "c", text: "50%", correct: true },
            { letter: "d", text: "25%" },
          ]}
          resolution={
            <p>
              O cruzamento M<sup>R</sup>M<sup>B</sup> × M<sup>R</sup>M<sup>B</sup>{" "}
              produz: 1/4 M<sup>R</sup>M<sup>R</sup> (vermelhos) + 2/4
              M<sup>R</sup>M<sup>B</sup> (ruãos) + 1/4 M<sup>B</sup>M<sup>B</sup>{" "}
              (brancos). Os ruãos representam 2/4 = <strong>50%</strong> da prole.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Alelo letal e proporção 2:1"
          statement={
            <p>
              Em camundongos, o alelo <em>A</em> (pelagem amarela) é dominante
              sobre <em>a</em> (cinza), mas os homozigotos <em>AA</em> morrem
              ainda no útero. Ao cruzar dois camundongos amarelos, um pesquisador
              observou que a ninhada apresentou 18 camundongos amarelos e 10
              cinzas. O resultado obtido está de acordo com qual proporção
              teórica?
            </p>
          }
          options={[
            { letter: "a", text: "3 : 1, herança dominante completa" },
            { letter: "b", text: "1 : 1, cruzamento-teste" },
            { letter: "c", text: "2 : 1, alelo letal em homozigose", correct: true },
            { letter: "d", text: "1 : 2 : 1, dominância incompleta" },
          ]}
          resolution={
            <p>
              Camundongos amarelos são todos heterozigotos (<em>Aa</em>).
              O cruzamento <em>Aa × Aa</em> gera 1 AA (letal) : 2 Aa (amarelo) :
              1 aa (cinza). Entre os vivos, a proporção é 2 amarelos : 1 cinza.
              A razão 18:10 ≈ 1,8:1 aproxima-se de 2:1, confirmando alelo letal.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Heredograma e herança recessiva (ENEM)"
          statement={
            <p>
              Em uma família, um casal sem a doença X tem um filho afetado pela
              doença e duas filhas não afetadas. A doença X afeta igualmente
              homens e mulheres em diversas famílias estudadas. Com base nessas
              informações, qual é o padrão de herança mais provável para a
              doença X e quais são os genótipos do casal?
            </p>
          }
          options={[
            { letter: "a", text: "Herança dominante autossômica; pai AA e mãe Aa" },
            { letter: "b", text: "Herança recessiva ligada ao X; pai X^A Y e mãe X^A X^a" },
            { letter: "c", text: "Herança recessiva autossômica; ambos os pais são Aa (portadores)", correct: true },
            { letter: "d", text: "Herança dominante ligada ao X; pai X^a Y e mãe X^A X^a" },
          ]}
          resolution={
            <p>
              Pais fenotipicamente normais com filho afetado indicam{" "}
              <strong>herança recessiva</strong>: o filho é homozigoto recessivo
              (aa). Como a doença afeta igualmente ambos os sexos, descarta-se
              ligação ao X (que concentraria casos em homens). Logo, herança
              <strong> autossômica recessiva</strong> — ambos os pais são
              heterozigotos portadores (Aa).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Tipo sanguíneo e codominância (ENEM)"
          statement={
            <p>
              Uma paciente com sangue tipo B e seu companheiro com sangue tipo A
              têm três filhos: um tipo A, um tipo B e um tipo O. Com base no
              sistema ABO, quais são os genótipos mais prováveis dos pais e o que
              isso revela sobre as relações de dominância dos alelos envolvidos?
            </p>
          }
          options={[
            { letter: "a", text: "Pai I^A I^A e mãe I^B I^B; dominância completa de A sobre B" },
            {
              letter: "b",
              text: "Pai I^A i e mãe I^B i; presença de alelo recessivo i revela dominância de I^A e I^B sobre i, com codominância entre si",
              correct: true,
            },
            { letter: "c", text: "Pai I^A I^B e mãe I^B i; herança intermediária" },
            { letter: "d", text: "Ambos I^A I^B; filhos tipo O são impossíveis" },
          ]}
          resolution={
            <p>
              Para que exista filho do tipo O (genótipo <em>ii</em>), ambos os
              pais precisam ter o alelo <em>i</em>. O pai tipo A deve ser{" "}
              <M>{"I^Ai"}</M> e a mãe tipo B deve ser <M>{"I^Bi"}</M>. O
              cruzamento <M>{"I^Ai \\times I^Bi"}</M> gera:{" "}
              <M>{"I^AI^B"}</M> (tipo AB), <M>{"I^Ai"}</M> (tipo A),{" "}
              <M>{"I^Bi"}</M> (tipo B) e <M>{"ii"}</M> (tipo O). Os alelos{" "}
              <M>{"I^A"}</M> e <M>{"I^B"}</M> são <strong>codominantes</strong>{" "}
              entre si e <strong>dominantes</strong> sobre <M>{"i"}</M>.
            </p>
          }
        />
      </section>
    </article>
  );
}
