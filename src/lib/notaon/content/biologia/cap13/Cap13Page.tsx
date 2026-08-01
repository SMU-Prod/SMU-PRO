"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap13Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 13</span>

          <h1>Introdução à Genética: Conceitos Básicos e Primeira Lei de Mendel</h1>

          <p>
            A Genética é a ciência que estuda a <strong>transmissão, expressão e
            variação das características hereditárias</strong>. Neste capítulo
            você dominará o vocabulário fundamental — gene, alelo, locus,
            genótipo, fenótipo, homozigoto e heterozigoto — e compreenderá a
            Primeira Lei de Mendel, a Lei da Segregação dos Fatores, que
            explica por que características dos pais ressurgem nos netos e
            embasa toda análise de herança cobrada no ENEM e nos vestibulares.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 1 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Origens da Genética</span>

        <h2>1. Gregor Mendel e as Ervilhas</h2>

        <p>
          <strong>Gregor Johann Mendel</strong> (1822–1884), monge agostiniano
          da cidade de Brno (atual República Tcheca), conduziu entre 1856 e
          1863 experimentos sistemáticos com ervilhas-de-cheiro{" "}
          (<em>Pisum sativum</em>), cruzando linhagens com características
          contrastantes e contando meticulosamente os descendentes. Seus
          resultados, publicados em 1866, foram ignorados pela comunidade
          científica e só redescobertos em 1900, por De Vries, Correns e
          Tschermak — inaugurando oficialmente a Genética como disciplina.
        </p>

        <p>
          A genialidade de Mendel foi <strong>quantificar</strong> a herança:
          em vez de descrever apenas que "amarelo aparece mais que verde",
          ele contou milhares de sementes e percebeu razões numéricas
          constantes — a assinatura matemática dos princípios que descobriu.
        </p>

        <div className="lesson-highlight">
          <h3>Por que ervilhas foram o modelo perfeito?</h3>
          <ul>
            <li>
              <strong>Autofecundação natural:</strong> linhagens puras (homozigotas)
              estáveis podiam ser obtidas após várias gerações de
              autofecundação.
            </li>
            <li>
              <strong>Polinização controlável:</strong> a corola protege os
              órgãos reprodutores; com um simples pincel Mendel realizava
              cruzamentos artificiais.
            </li>
            <li>
              <strong>Ciclo curto e prolífico:</strong> uma geração em meses;
              centenas de sementes por planta, permitindo análise estatística
              robusta.
            </li>
            <li>
              <strong>Características discretas:</strong> as 7 pares estudados
              não tinham formas intermediárias, facilitando a classificação.
            </li>
          </ul>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Variante dominante</th>
                <th>Variante recessiva</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cor da semente</td>
                <td>Amarela</td>
                <td>Verde</td>
              </tr>
              <tr>
                <td>Textura da semente</td>
                <td>Lisa</td>
                <td>Rugosa</td>
              </tr>
              <tr>
                <td>Cor da flor</td>
                <td>Púrpura</td>
                <td>Branca</td>
              </tr>
              <tr>
                <td>Formato da vagem</td>
                <td>Inflada/cheia</td>
                <td>Constrita</td>
              </tr>
              <tr>
                <td>Cor da vagem madura</td>
                <td>Verde</td>
                <td>Amarela</td>
              </tr>
              <tr>
                <td>Posição das flores</td>
                <td>Axial (ao longo do caule)</td>
                <td>Terminal (no topo)</td>
              </tr>
              <tr>
                <td>Altura da planta</td>
                <td>Alta (~1,8 m)</td>
                <td>Anã (~0,3 m)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SEÇÃO 2 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário Essencial</span>

        <h2>2. Conceitos Fundamentais da Genética</h2>

        <p>
          Antes de analisar qualquer cruzamento, é imprescindível dominar o
          vocabulário da genética clássica. Cada termo tem significado preciso
          e aparece com frequência em questões de vestibular.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Gene</h3>
            <p>
              Segmento de DNA que contém informação para uma característica
              hereditária. Cada gene ocupa uma posição fixa num cromossomo.
            </p>
          </div>

          <div className="lesson-card">
            <span>🅰️</span>
            <h3>Alelo</h3>
            <p>
              Versão alternativa de um gene para a mesma característica. Ex.:
              alelo A (semente amarela) e alelo a (semente verde).
            </p>
          </div>

          <div className="lesson-card">
            <span>📍</span>
            <h3>Locus (loci)</h3>
            <p>
              Posição específica do gene no cromossomo. Genes alelos ocupam o
              mesmo locus em cromossomos homólogos.
            </p>
          </div>

          <div className="lesson-card">
            <span>👯</span>
            <h3>Homozigoto</h3>
            <p>
              Indivíduo com dois alelos iguais no locus: <strong>AA</strong>{" "}
              (dominante) ou <strong>aa</strong> (recessivo). Linhagem pura.
            </p>
          </div>

          <div className="lesson-card">
            <span>🎭</span>
            <h3>Heterozigoto</h3>
            <p>
              Indivíduo com alelos diferentes: <strong>Aa</strong>. Chamado
              de híbrido; carrega o recessivo "oculto" pelo dominante.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧪</span>
            <h3>Genótipo</h3>
            <p>
              A constituição alélica do indivíduo (ex.: AA, Aa ou aa). Não
              visto diretamente; determinado por cruzamentos ou testes
              moleculares.
            </p>
          </div>

          <div className="lesson-card">
            <span>👁️</span>
            <h3>Fenótipo</h3>
            <p>
              A característica observável — cor, textura, altura. Resulta da
              interação entre genótipo e ambiente.
            </p>
          </div>

          <div className="lesson-card">
            <span>👑</span>
            <h3>Dominante vs. Recessivo</h3>
            <p>
              Dominante (A): manifesta-se em AA e Aa. Recessivo (a):
              só se expressa em aa — "dominado" pelo alelo A.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Genotipo e fenótipo não são sinônimos!</h3>
          <p>
            Dois indivíduos com fenótipo idêntico (ex.: semente amarela)
            podem ter genótipos diferentes: <strong>AA</strong> ou{" "}
            <strong>Aa</strong>. Já dois indivíduos com o mesmo genótipo podem
            ter fenótipos ligeiramente distintos se viveram em ambientes
            diferentes — pois o <strong>fenótipo = genótipo + ambiente</strong>.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 3 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Os Experimentos de Mendel</span>

        <h2>3. Monoibridismo: Cruzamentos P, F1 e F2</h2>

        <p>
          O <strong>monoibridismo</strong> é o cruzamento que envolve apenas
          um par de características (um único gene com dois alelos). Mendel
          começou cruzando linhagens puras — plantas homozigotas obtidas após
          muitas gerações de autofecundação — e observou o seguinte padrão:
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 260" width="720" height="260" aria-label="Fluxo do monoibridismo de Mendel: P, F1 e F2">
            {/* Geração P */}
            <rect x={60} y={20} width={120} height={48} rx={10} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1.8} />
            <text x={120} y={40} textAnchor="middle" fontSize={13} fontWeight={700} fill="#713f12">Planta AMARELA</text>
            <text x={120} y={58} textAnchor="middle" fontSize={12} fill="#92400e">Genótipo: AA</text>

            <rect x={540} y={20} width={120} height={48} rx={10} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.8} />
            <text x={600} y={40} textAnchor="middle" fontSize={13} fontWeight={700} fill="#14532d">Planta VERDE</text>
            <text x={600} y={58} textAnchor="middle" fontSize={12} fill="#166534">Genótipo: aa</text>

            <text x={360} y={50} textAnchor="middle" fontSize={20} fontWeight={800} fill="#6b7280">×</text>
            <text x={360} y={15} textAnchor="middle" fontSize={11} fill="#9ca3af">Geração P (parental)</text>

            {/* seta para F1 */}
            <line x1={360} y1={68} x2={360} y2={102} stroke="#6b7280" strokeWidth={1.5} />
            <polygon points="360,106 354,96 366,96" fill="#6b7280" />

            {/* Geração F1 */}
            <rect x={280} y={110} width={160} height={48} rx={10} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1.8} />
            <text x={360} y={130} textAnchor="middle" fontSize={13} fontWeight={700} fill="#713f12">100% AMARELA</text>
            <text x={360} y={149} textAnchor="middle" fontSize={12} fill="#92400e">Genótipo: Aa (heterozigoto)</text>
            <text x={360} y={107} textAnchor="middle" fontSize={11} fill="#9ca3af">Geração F1</text>

            {/* seta F1 → F2 (autofecundação) */}
            <line x1={360} y1={158} x2={360} y2={190} stroke="#6b7280" strokeWidth={1.5} />
            <polygon points="360,194 354,184 366,184" fill="#6b7280" />
            <text x={384} y={178} fontSize={10} fill="#9ca3af">autofecundação</text>

            {/* Geração F2 */}
            <rect x={60} y={198} width={160} height={48} rx={10} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1.8} />
            <text x={140} y={218} textAnchor="middle" fontSize={13} fontWeight={700} fill="#713f12">AMARELAS</text>
            <text x={140} y={237} textAnchor="middle" fontSize={11} fill="#92400e">AA ou Aa (3/4)</text>

            <rect x={500} y={198} width={160} height={48} rx={10} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.8} />
            <text x={580} y={218} textAnchor="middle" fontSize={13} fontWeight={700} fill="#14532d">VERDES</text>
            <text x={580} y={237} textAnchor="middle" fontSize={11} fill="#166534">aa (1/4)</text>

            <text x={360} y={254} textAnchor="middle" fontSize={11} fontWeight={700} fill="#4b5563">Proporção fenotípica F2: 3 : 1</text>
            <text x={360} y={197} textAnchor="middle" fontSize={11} fill="#9ca3af">Geração F2</text>
          </svg>
          <figcaption>
            Cruzamento monoíbrido de Mendel: linhagens puras (P) geram F1 toda dominante;
            a autofecundação de F1 produz F2 na proporção fenotípica 3 : 1.
          </figcaption>
        </figure>

        <p>
          O resultado mais surpreendente foi o <strong>reaparecimento do verde
          em F2</strong>: a característica verde havia "desaparecido" em F1,
          mas ressurgiu em <M>{"\\frac{1}{4}"}</M> dos descendentes de F2.
          Isso levou Mendel a concluir que os "fatores" (hoje chamados alelos)
          não se fundem nem se destroem — permanecem íntegros e se recombinam
          na fecundação.
        </p>
      </section>

      {/* ─── SEÇÃO 4 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Quadro de Punnett</span>

        <h2>4. O Quadrado de Punnett e a Proporção 3 : 1</h2>

        <p>
          O <strong>quadro de Punnett</strong> (ou quadrado de Punnett) é uma
          ferramenta gráfica criada pelo geneticista Reginald Crundall Punnett
          para visualizar todas as combinações genotípicas possíveis em um
          cruzamento. Os gametas de um dos pais são listados nas colunas e do
          outro nas linhas; cada célula mostra o genótipo de um possível
          descendente.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Cruzamento Aa × Aa</th>
                <th>Gameta A (pai)</th>
                <th>Gameta a (pai)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Gameta A (mãe)</strong></td>
                <td style={{ background: "#fef9c3", fontWeight: 700 }}>AA — Amarela</td>
                <td style={{ background: "#fef9c3" }}>Aa — Amarela</td>
              </tr>
              <tr>
                <td><strong>Gameta a (mãe)</strong></td>
                <td style={{ background: "#fef9c3" }}>Aa — Amarela</td>
                <td style={{ background: "#dcfce7", fontWeight: 700 }}>aa — Verde</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Lendo o quadro acima, temos 4 caselas igualmente prováveis:
          1 AA (amarela), 2 Aa (amarela) e 1 aa (verde). Isso resulta em:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Proporção</th>
                <th>Genotípica</th>
                <th>Fenotípica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Razão</td>
                <td>1 AA : 2 Aa : 1 aa</td>
                <td>3 Amarelas : 1 Verde</td>
              </tr>
              <tr>
                <td>Fração</td>
                <td>
                  <M>{"\\frac{1}{4}"}</M> AA,{" "}
                  <M>{"\\frac{2}{4}"}</M> Aa,{" "}
                  <M>{"\\frac{1}{4}"}</M> aa
                </td>
                <td>
                  <M>{"\\frac{3}{4}"}</M> dom. :{" "}
                  <M>{"\\frac{1}{4}"}</M> rec.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Como construir o quadro de Punnett passo a passo</h3>
          <ol>
            <li>
              Identifique os <strong>gametas</strong> de cada progenitor.
              Um heterozigoto Aa produz gametas A e a em proporção igual
              (<M>{"\\frac{1}{2}"}</M> cada).
            </li>
            <li>
              Coloque os gametas de um progenitor no <strong>topo</strong> (colunas)
              e do outro na <strong>lateral esquerda</strong> (linhas).
            </li>
            <li>
              Preencha cada célula com a combinação: gameta da coluna +
              gameta da linha.
            </li>
            <li>
              Conte e converta em proporção (genotípica e fenotípica).
            </li>
          </ol>
        </div>
      </section>

      {/* ─── SEÇÃO 5 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">A Primeira Lei</span>

        <h2>5. Lei da Segregação dos Fatores</h2>

        <div className="lesson-highlight">
          <h3>Enunciado oficial</h3>
          <p>
            "Cada caráter é determinado por um par de fatores que se separam
            durante a formação dos gametas, indo cada fator para um gameta
            diferente, de modo que cada gameta recebe apenas um dos dois
            fatores do par."
          </p>
        </div>

        <p>
          Em linguagem moderna: os dois <strong>alelos</strong> de um gene se
          separam (segregam) na <strong>meiose I</strong> — quando os
          cromossomos homólogos se afastam para células filhas diferentes. Cada
          gameta herda apenas <em>um</em> alelo do par. Na fecundação, dois
          gametas se unem ao acaso, reconstituindo o par de alelos no novo
          indivíduo.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Segregação dos alelos na meiose">
            {/* Célula-mãe com par Aa */}
            <ellipse cx={120} cy={100} rx={80} ry={60} fill="#ede9fe" stroke="#7c3aed" strokeWidth={1.8} />
            <text x={120} y={85} textAnchor="middle" fontSize={13} fontWeight={700} fill="#4c1d95">Célula-mãe</text>
            {/* cromossomo A */}
            <rect x={90} y={95} width={16} height={38} rx={5} fill="#6366f1" />
            <text x={98} y={120} textAnchor="middle" fontSize={11} fontWeight={800} fill="white">A</text>
            {/* cromossomo a */}
            <rect x={114} y={95} width={16} height={38} rx={5} fill="#a78bfa" />
            <text x={122} y={120} textAnchor="middle" fontSize={11} fontWeight={800} fill="white">a</text>

            {/* seta meiose */}
            <line x1={210} y1={100} x2={290} y2={100} stroke="#9ca3af" strokeWidth={1.5} />
            <polygon points="292,100 282,94 282,106" fill="#9ca3af" />
            <text x={250} y={92} textAnchor="middle" fontSize={10} fill="#6b7280">Meiose I</text>
            <text x={250} y={114} textAnchor="middle" fontSize={10} fill="#6b7280">(segregação)</text>

            {/* gameta A */}
            <ellipse cx={390} cy={65} rx={55} ry={38} fill="#eef2ff" stroke="#6366f1" strokeWidth={1.6} />
            <text x={390} y={56} textAnchor="middle" fontSize={11} fill="#4338ca">Gameta</text>
            <rect x={374} y={62} width={16} height={30} rx={5} fill="#6366f1" />
            <text x={382} y={82} textAnchor="middle" fontSize={12} fontWeight={800} fill="white">A</text>

            {/* gameta a */}
            <ellipse cx={390} cy={148} rx={55} ry={38} fill="#f5f3ff" stroke="#a78bfa" strokeWidth={1.6} />
            <text x={390} y={138} textAnchor="middle" fontSize={11} fill="#6d28d9">Gameta</text>
            <rect x={374} y={144} width={16} height={30} rx={5} fill="#a78bfa" />
            <text x={382} y={164} textAnchor="middle" fontSize={12} fontWeight={800} fill="white">a</text>

            {/* seta fecundação */}
            <line x1={458} y1={65} x2={530} y2={90} stroke="#9ca3af" strokeWidth={1.2} />
            <line x1={458} y1={148} x2={530} y2={118} stroke="#9ca3af" strokeWidth={1.2} />
            <text x={540} y={85} fontSize={10} fill="#6b7280">fecundação</text>
            <text x={540} y={100} fontSize={10} fill="#6b7280">ao acaso</text>
            <text x={540} y={115} fontSize={10} fill="#6b7280">→ AA, Aa ou aa</text>

            <text x={120} y={178} textAnchor="middle" fontSize={11} fill="#4c1d95">Aa (heterozigoto)</text>
          </svg>
          <figcaption>
            Na meiose I, os cromossomos homólogos (portando A e a) segregam para células
            diferentes, originando gametas com apenas um alelo cada.
          </figcaption>
        </figure>

        <p>
          A Lei da Segregação foi comprovada citologicamente décadas depois,
          quando se descobriu que os <strong>genes estão nos cromossomos</strong>{" "}
          (Teoria Cromossômica da Herança, Sutton e Boveri, 1902-1903). O
          comportamento dos cromossomos na meiose explica exatamente o que
          Mendel havia descrito matematicamente.
        </p>
      </section>

      {/* ─── SEÇÃO 6 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Cruzamento-Teste</span>

        <h2>6. Testcross: Determinando o Genótipo Desconhecido</h2>

        <p>
          Quando um indivíduo apresenta o <strong>fenótipo dominante</strong>,
          não é possível saber apenas olhando se ele é <em>homozigoto
          dominante</em> (AA) ou <em>heterozigoto</em> (Aa). O{" "}
          <strong>cruzamento-teste</strong> (testcross) resolve isso: cruza-se o
          indivíduo de genótipo desconhecido com um <strong>homozigoto
          recessivo</strong> (aa), que só produz gametas "a".
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Genótipo testado</th>
                <th>Cruzamento</th>
                <th>Descendentes esperados</th>
                <th>Conclusão</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AA (homozigoto dominante)</td>
                <td>AA × aa</td>
                <td>100% Aa (fenótipo dominante)</td>
                <td>Se NÃO aparecer recessivo → provável AA</td>
              </tr>
              <tr>
                <td>Aa (heterozigoto)</td>
                <td>Aa × aa</td>
                <td>
                  <M>{"\\frac{1}{2}"}</M> Aa :{" "}
                  <M>{"\\frac{1}{2}"}</M> aa (1 dominante : 1 recessivo)
                </td>
                <td>Se aparecer recessivo → certamente Aa</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            O surgimento de <strong>qualquer descendente de fenótipo
            recessivo</strong> no testcross é prova irrefutável de que o
            indivíduo testado é heterozigoto. Essa lógica é usada em
            programas de melhoramento genético e triagem de portadores de
            doenças hereditárias.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 7 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Probabilidade em Genética</span>

        <h2>7. Regras de Probabilidade nos Cruzamentos</h2>

        <p>
          Cada cruzamento mendeliano é equivalente ao lançamento de moedas
          independentes — os alelos dos gametas se combinam ao acaso.
          Duas regras de probabilidade são suficientes para resolver qualquer
          problema de monoibridismo (e de poligenismo, como veremos adiante).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✖️</span>
            <h3>Regra do "E" — multiplicação</h3>
            <p>
              Eventos <strong>independentes que ocorrem simultaneamente</strong>.
              P(A e B) = P(A) × P(B). Usado quando queremos dois eventos
              juntos, ex.: filho aa E do sexo masculino.
            </p>
          </div>

          <div className="lesson-card">
            <span>➕</span>
            <h3>Regra do "OU" — adição</h3>
            <p>
              Eventos <strong>mutuamente exclusivos</strong>: P(A ou B) =
              P(A) + P(B). Usado quando qualquer um dos resultados satisfaz
              a condição, ex.: filho AA ou Aa.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Exemplos resolvidos com Aa × Aa</h3>
          <ul>
            <li>
              P(filho aa) = <M>{"\\frac{1}{4}"}</M>
            </li>
            <li>
              P(filho com fenótipo dominante) ={" "}
              <M>{"\\frac{3}{4}"}</M>
            </li>
            <li>
              P(filho aa E masculino) ={" "}
              <M>{"\\frac{1}{4} \\times \\frac{1}{2} = \\frac{1}{8}"}</M>
            </li>
            <li>
              P(filho AA ou aa) ={" "}
              <M>{"\\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}"}</M>
            </li>
            <li>
              P(filho Aa | fenótipo dominante) ={" "}
              <M>{"\\frac{2/4}{3/4} = \\frac{2}{3}"}</M>
              {" "}(probabilidade condicional)
            </li>
          </ul>
        </div>
      </section>

      {/* ─── SEÇÃO 8 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Base Cromossômica</span>

        <h2>8. Por que a 1ª Lei Funciona: Meiose e Cromossomos</h2>

        <p>
          Mendel descreveu os "fatores" sem conhecer os cromossomos. Em 1902,
          Walter Sutton (estudando gafanhotos) e Theodor Boveri (estudando
          ouriços-do-mar) observaram de forma independente que o comportamento
          dos cromossomos na meiose era idêntico ao comportamento dos "fatores"
          de Mendel — nascia a <strong>Teoria Cromossômica da Herança</strong>.
        </p>

        <p>
          Os pontos de correspondência são precisos: os genes existem em pares
          (dois alelos) porque os cromossomos são <strong>homólogos</strong>{" "}
          (dois de cada tipo em organismos diploides). Na{" "}
          <strong>anáfase I</strong> da meiose, cada par de homólogos se
          separa para polos opostos da célula — segregando os alelos exatamente
          como Mendel havia previsto estatisticamente. Assim, a 1ª Lei de
          Mendel é a descrição fenotípica/genotípica do que a meiose faz com
          os cromossomos.
        </p>

        <div className="lesson-highlight">
          <h3>Atenção: a 1ª Lei pressupõe genes em cromossomos diferentes ou distantes</h3>
          <p>
            Quando dois genes estão no <strong>mesmo cromossomo</strong> e
            muito próximos (ligação gênica / linkage), eles tendem a ser
            herdados juntos, violando a independência que a 1ª Lei pressupõe
            para cada par. Isso é assunto da <strong>2ª Lei de Mendel</strong>{" "}
            e das exceções (que você estudará em capítulos seguintes).
          </p>
        </div>
      </section>

      {/* ─── EXERCÍCIOS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Terminologia genética"
          statement={
            <p>
              Em ervilhas, o alelo para semente amarela (A) é dominante sobre
              o alelo para semente verde (a). Uma planta com genótipo Aa é
              classificada como:
            </p>
          }
          options={[
            { letter: "a", text: "Homozigota dominante, com fenótipo amarelo" },
            { letter: "b", text: "Homozigota recessiva, com fenótipo verde" },
            {
              letter: "c",
              text: "Heterozigota, com fenótipo amarelo (dominante)",
              correct: true,
            },
            { letter: "d", text: "Heterozigota, com fenótipo verde (recessivo)" },
          ]}
          resolution={
            <p>
              O indivíduo <strong>Aa</strong> possui dois alelos diferentes,
              portanto é <strong>heterozigoto</strong>. Como A é dominante, seu
              fenótipo é <strong>amarelo</strong> — o alelo recessivo "a" está
              presente mas oculto. Homozigotos seriam AA (dominante) ou aa
              (recessivo).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Proporção genotípica e fenotípica em F2"
          statement={
            <p>
              Num cruzamento monoíbrido Aa × Aa, quais são as proporções
              genotípica e fenotípica esperadas na geração F2?
            </p>
          }
          options={[
            { letter: "a", text: "Genotípica 1:1; fenotípica 1:1" },
            { letter: "b", text: "Genotípica 3:1; fenotípica 1:2:1" },
            {
              letter: "c",
              text: "Genotípica 1:2:1 (AA:Aa:aa); fenotípica 3:1 (dominante:recessivo)",
              correct: true,
            },
            { letter: "d", text: "Genotípica 1:2:1; fenotípica 1:1" },
          ]}
          resolution={
            <p>
              O quadro de Punnett de Aa × Aa gera 4 caselas: 1 AA, 2 Aa e
              1 aa — proporção genotípica <strong>1 : 2 : 1</strong>. Como AA
              e Aa são ambos de fenótipo dominante, a proporção fenotípica é{" "}
              <strong>3 dominantes : 1 recessivo</strong>, ou seja{" "}
              <M>{"\\frac{3}{4}"}</M> dominantes e{" "}
              <M>{"\\frac{1}{4}"}</M> recessivos.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Probabilidade combinada com sexo"
          statement={
            <p>
              Dois portadores de albinismo (Aa × Aa) esperam um filho. O
              albinismo é autossômico recessivo. Qual a probabilidade de esse
              filho ser albino (aa) E do sexo feminino?
            </p>
          }
          options={[
            { letter: "a", text: "1/4" },
            { letter: "b", text: "1/4 × 1/2 = 1/2" },
            {
              letter: "c",
              text: "1/4 × 1/2 = 1/8",
              correct: true,
            },
            { letter: "d", text: "1/2 × 1/2 = 1/4" },
          ]}
          resolution={
            <p>
              Eventos independentes: P(aa) ={" "}
              <M>{"\\frac{1}{4}"}</M> (do cruzamento Aa × Aa) e P(feminino)
              ={" "}
              <M>{"\\frac{1}{2}"}</M>. Pela regra do "E" (multiplicação):{" "}
              <M>{"\\frac{1}{4} \\times \\frac{1}{2} = \\frac{1}{8}"}</M>.
              Portanto, há <strong>12,5%</strong> de chance de um filho albino
              do sexo feminino.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Cruzamento-teste em criação animal (ENEM)"
          statement={
            <p>
              Um criador de cavalos possui um garanhão de pelagem tordilha
              (fenótipo dominante, gene T). Ele quer saber se o animal é
              homozigoto (TT) ou heterozigoto (Tt). Para isso, cruza o garanhão
              com várias éguas de pelagem alazã (tt, recessivo). Ao analisar
              os descendentes, ele observa que 6 são tordilhos e 5 são alazões.
              Qual a conclusão correta?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O garanhão é homozigoto (TT), pois a maioria dos filhos é tordilha",
            },
            {
              letter: "b",
              text: "O garanhão é heterozigoto (Tt), pois apareceram descendentes alazões",
              correct: true,
            },
            {
              letter: "c",
              text: "Impossível concluir; seria necessário cruzar com outra tordilha",
            },
            {
              letter: "d",
              text: "O garanhão é recessivo (tt), pois metade dos filhos é alazã",
            },
          ]}
          resolution={
            <p>
              O <strong>cruzamento-teste</strong> consiste em cruzar o
              indivíduo de genótipo desconhecido com um homozigoto recessivo
              (tt). Se o garanhão fosse TT, todos os descendentes seriam Tt
              (tordilhos). O surgimento de filhos alazões (tt) comprova que o
              garanhão forneceu alelo "t" — logo é <strong>heterozigoto
              (Tt)</strong>. A proporção 6:5 ≈ 1:1 é compatível com Tt × tt.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Genética e saúde: fibrose cística"
          statement={
            <p>
              A fibrose cística é uma doença autossômica recessiva causada pelo
              alelo <em>f</em>. Um casal saudável tem um filho afetado (ff).
              Qual deve ser o genótipo de ambos os pais e qual a probabilidade
              de o próximo filho do casal também ser afetado?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Pais FF × FF; probabilidade 0% no próximo filho",
            },
            {
              letter: "b",
              text: "Pais Ff × Ff; probabilidade 1/4 (25%) no próximo filho",
              correct: true,
            },
            {
              letter: "c",
              text: "Pais FF × Ff; probabilidade 1/2 (50%) no próximo filho",
            },
            {
              letter: "d",
              text: "Pais Ff × ff; probabilidade 1/2 (50%) no próximo filho",
            },
          ]}
          resolution={
            <p>
              Para que um filho afetado (ff) nasça de pais saudáveis, cada pai
              deve ter fornecido um alelo "f" — portanto ambos são{" "}
              <strong>portadores heterozigotos (Ff)</strong>. No cruzamento
              Ff × Ff, o quadro de Punnett gera{" "}
              <M>{"\\frac{1}{4}"}</M> FF,{" "}
              <M>{"\\frac{2}{4}"}</M> Ff e{" "}
              <M>{"\\frac{1}{4}"}</M> ff. A probabilidade de o próximo filho
              ser afetado é, portanto,{" "}
              <M>{"\\frac{1}{4}"}</M> = <strong>25%</strong>, pois cada
              gravidez é um evento independente.
            </p>
          }
        />
      </section>
    </article>
  );
}
