"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap21Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 21</span>

          <h1>Genética de Populações (Hardy-Weinberg) e Evolução Humana</h1>

          <p>
            A genética de populações une a Matemática à Biologia Evolutiva para
            responder uma pergunta central: como e por que as frequências dos
            alelos mudam — ou permanecem estáveis — ao longo das gerações? Neste
            capítulo você vai dominar o Teorema de Hardy-Weinberg, calcular
            frequências alélicas e genotípicas, identificar os fatores que
            rompem o equilíbrio gênico e traçar a fascinante linha do tempo da
            evolução da linhagem humana — do <em>Australopithecus</em> ao{" "}
            <em>Homo sapiens</em>. Esses temas são recorrentes no ENEM e em
            todos os grandes vestibulares.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pool Gênico</span>

        <h2>1. Pool Gênico e Frequências Alélicas</h2>

        <p>
          Uma <strong>população</strong>, em genética, é um conjunto de
          indivíduos da mesma espécie que habitam o mesmo espaço geográfico e
          se intercruzam livremente. Todos os alelos de todos os locos de todos
          os indivíduos dessa população formam o{" "}
          <strong>pool gênico</strong> (ou acervo gênico). A genética de
          populações estuda como esse acervo muda — ou não muda — de geração
          em geração.
        </p>

        <p>
          A <strong>frequência alélica</strong> de um alelo é simplesmente a
          proporção daquele alelo em relação a todos os alelos do mesmo loco no
          pool gênico. Para um loco bialélico com alelos <strong>A</strong> e{" "}
          <strong>a</strong>, convencionamos:
        </p>

        <div className="math-block">
          <M block={true}>{"p = \\text{frequência do alelo } A"}</M>
          <M block={true}>{"q = \\text{frequência do alelo } a"}</M>
          <M block={true}>{"p + q = 1"}</M>
        </div>

        <p>
          Já a <strong>frequência genotípica</strong> é a proporção de cada
          genótipo (AA, Aa, aa) na população. Se a população se reproduz ao
          acaso, a chance de cruzar dois gametas independentes gera as
          frequências genotípicas esperadas pelo produto das frequências
          alélicas — essa é a ideia central de Hardy-Weinberg.
        </p>

        <div className="lesson-highlight">
          <h3>Como calcular a frequência alélica na prática</h3>
          <p>
            Suponha 100 indivíduos: 36 AA, 48 Aa e 16 aa. O total de alelos é
            200. O alelo A aparece em: <M>{"36 \\times 2 + 48 \\times 1 = 120"}</M>{" "}
            vezes. Logo <M>{"p = 120/200 = 0{,}6"}</M> e{" "}
            <M>{"q = 1 - 0{,}6 = 0{,}4"}</M>.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Frequência alélica</h3>
            <p>Proporção de um alelo específico no pool gênico da população.</p>
          </div>

          <div className="lesson-card">
            <span>📊</span>
            <h3>Frequência genotípica</h3>
            <p>Proporção de cada combinação de alelos (genótipo) nos indivíduos.</p>
          </div>

          <div className="lesson-card">
            <span>🔁</span>
            <h3>Pool gênico</h3>
            <p>Soma de todos os alelos de todos os locos de uma população intercruzante.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Hardy-Weinberg</span>

        <h2>2. O Teorema de Hardy-Weinberg</h2>

        <p>
          Em 1908, o matemático inglês G. H. Hardy e o médico alemão Wilhelm
          Weinberg, de forma independente, demonstraram matematicamente que, em
          condições ideais, as{" "}
          <strong>frequências alélicas e genotípicas de uma população
          permanecem constantes de geração em geração</strong>. Esse resultado,
          conhecido como <strong>Teorema de Hardy-Weinberg</strong> (ou
          princípio do equilíbrio gênico), tornou-se a pedra fundamental da
          genética de populações.
        </p>

        <p>
          A equação central do teorema descreve como os genótipos se
          distribuem quando a população está em equilíbrio:
        </p>

        <div className="math-block">
          <M block={true}>{"p^2 + 2pq + q^2 = 1"}</M>
        </div>

        <p>
          onde <M>{"p^2"}</M> representa a frequência dos homozigotos
          dominantes (AA), <M>{"2pq"}</M> a dos heterozigotos (Aa) e{" "}
          <M>{"q^2"}</M> a dos homozigotos recessivos (aa).
        </p>

        <div className="lesson-highlight">
          <h3>Cinco condições para o equilíbrio de Hardy-Weinberg</h3>
          <ol>
            <li>
              <strong>População muito grande</strong> — evita flutuações
              aleatórias nas frequências (deriva genética);
            </li>
            <li>
              <strong>Ausência de mutações</strong> — não surgem novos alelos
              nem alelos existentes são convertidos;
            </li>
            <li>
              <strong>Ausência de migração</strong> — nenhum indivíduo entra ou
              sai trazendo alelos diferentes (fluxo gênico nulo);
            </li>
            <li>
              <strong>Ausência de seleção natural</strong> — todos os genótipos
              têm a mesma aptidão reprodutiva;
            </li>
            <li>
              <strong>Cruzamentos ao acaso (panmixia)</strong> — qualquer
              indivíduo pode cruzar com qualquer outro com igual probabilidade.
            </li>
          </ol>
        </div>

        <p>
          Na natureza, <strong>nenhuma</strong> população satisfaz todas essas
          condições simultaneamente — e é exatamente por isso que a evolução
          ocorre. O teorema funciona como um{" "}
          <strong>ponto de referência</strong>: ao comparar as frequências
          observadas com as esperadas pelo equilíbrio, podemos identificar
          quais forças evolutivas estão atuando.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 220" width="680" height="220" aria-label="Diagrama de Hardy-Weinberg mostrando a geração de genótipos a partir das frequências alélicas p e q">
            {/* Gametas femininos */}
            <rect x={10} y={60} width={120} height={50} rx={10} fill="#6366f1" opacity={0.18} stroke="#6366f1" strokeWidth={1.5} />
            <text x={70} y={80} textAnchor="middle" fontSize={13} fontWeight={700} fill="#312e81">Gametas ♀</text>
            <text x={70} y={98} textAnchor="middle" fontSize={12} fill="#312e81">p·A + q·a</text>

            {/* Gametas masculinos */}
            <rect x={10} y={140} width={120} height={50} rx={10} fill="#0ea5e9" opacity={0.18} stroke="#0ea5e9" strokeWidth={1.5} />
            <text x={70} y={160} textAnchor="middle" fontSize={13} fontWeight={700} fill="#0c4a6e">Gametas ♂</text>
            <text x={70} y={178} textAnchor="middle" fontSize={12} fill="#0c4a6e">p·A + q·a</text>

            {/* Seta central */}
            <polygon points="155,125 180,118 180,132" fill="#9ca3af" />
            <line x1={132} y1={125} x2={178} y2={125} stroke="#9ca3af" strokeWidth={1.5} />

            {/* Genótipos resultantes */}
            <rect x={200} y={50} width={140} height={54} rx={12} fill="#16a34a" opacity={0.15} stroke="#16a34a" strokeWidth={1.5} />
            <text x={270} y={73} textAnchor="middle" fontSize={14} fontWeight={700} fill="#14532d">AA</text>
            <text x={270} y={92} textAnchor="middle" fontSize={13} fill="#14532d">freq. = p²</text>

            <rect x={360} y={50} width={140} height={54} rx={12} fill="#f59e0b" opacity={0.15} stroke="#f59e0b" strokeWidth={1.5} />
            <text x={430} y={73} textAnchor="middle" fontSize={14} fontWeight={700} fill="#78350f">Aa</text>
            <text x={430} y={92} textAnchor="middle" fontSize={13} fill="#78350f">freq. = 2pq</text>

            <rect x={520} y={50} width={140} height={54} rx={12} fill="#ef4444" opacity={0.15} stroke="#ef4444" strokeWidth={1.5} />
            <text x={590} y={73} textAnchor="middle" fontSize={14} fontWeight={700} fill="#7f1d1d">aa</text>
            <text x={590} y={92} textAnchor="middle" fontSize={13} fill="#7f1d1d">freq. = q²</text>

            {/* Setas dos gametas para genótipos */}
            <line x1={180} y1={118} x2={200} y2={85} stroke="#6366f1" strokeWidth={1.2} strokeDasharray="5 3" />
            <line x1={180} y1={118} x2={360} y2={85} stroke="#f59e0b" strokeWidth={1.2} strokeDasharray="5 3" />
            <line x1={180} y1={132} x2={360} y2={85} stroke="#f59e0b" strokeWidth={1.2} strokeDasharray="5 3" />
            <line x1={180} y1={132} x2={520} y2={85} stroke="#ef4444" strokeWidth={1.2} strokeDasharray="5 3" />

            {/* Equação total */}
            <rect x={200} y={140} width={460} height={54} rx={12} fill="#1f2937" opacity={0.07} stroke="#374151" strokeWidth={1.2} />
            <text x={430} y={162} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">Soma das frequências genotípicas:</text>
            <text x={430} y={183} textAnchor="middle" fontSize={14} fontWeight={800} fill="#0f4c81">p² + 2pq + q² = 1</text>
          </svg>
          <figcaption>
            A combinação aleatória dos gametas com frequências p (alelo A) e q
            (alelo a) produz as frequências genotípicas p², 2pq e q² previstas
            pelo Teorema de Hardy-Weinberg.
          </figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cálculo de Frequências</span>

        <h2>3. Aplicando Hardy-Weinberg: Passo a Passo</h2>

        <p>
          A maioria das questões do ENEM e vestibulares fornece a frequência do
          genótipo recessivo homozigoto (aa) — geralmente o mais fácil de
          identificar fenotipicamente — e pede que você calcule as demais. A
          estratégia padrão é:
        </p>

        <div className="lesson-highlight">
          <h3>Roteiro de cálculo (estratégia do ENEM)</h3>
          <ol>
            <li>
              Identifique <M>{"q^2"}</M> (frequência do homozigoto recessivo).
            </li>
            <li>
              Calcule <M>{"q = \\sqrt{q^2}"}</M>.
            </li>
            <li>
              Calcule <M>{"p = 1 - q"}</M>.
            </li>
            <li>
              Obtenha <M>{"p^2"}</M> (homozigotos dominantes) e{" "}
              <M>{"2pq"}</M> (heterozigotos).
            </li>
          </ol>
        </div>

        <p>
          <strong>Exemplo resolvido:</strong> Em uma população de 10 000
          pessoas, 400 têm albinismo (aa). Quais as frequências alélicas e
          genotípicas?
        </p>

        <div className="math-block">
          <M block={true}>{"q^2 = \\frac{400}{10000} = 0{,}04"}</M>
          <M block={true}>{"q = \\sqrt{0{,}04} = 0{,}2"}</M>
          <M block={true}>{"p = 1 - 0{,}2 = 0{,}8"}</M>
          <M block={true}>{"p^2 = (0{,}8)^2 = 0{,}64 \\quad (64\\% \\text{ AA})"}</M>
          <M block={true}>{"2pq = 2 \\times 0{,}8 \\times 0{,}2 = 0{,}32 \\quad (32\\% \\text{ Aa})"}</M>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Genótipo</th>
                <th>Fórmula</th>
                <th>Valor (exemplo)</th>
                <th>Indivíduos em 10 000</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AA (homozigoto dominante)</td>
                <td><M>{"p^2"}</M></td>
                <td>0,64</td>
                <td>6 400</td>
              </tr>
              <tr>
                <td>Aa (heterozigoto / portador)</td>
                <td><M>{"2pq"}</M></td>
                <td>0,32</td>
                <td>3 200</td>
              </tr>
              <tr>
                <td>aa (homozigoto recessivo)</td>
                <td><M>{"q^2"}</M></td>
                <td>0,04</td>
                <td>400</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><M>{"p^2 + 2pq + q^2"}</M></td>
                <td><strong>1,00</strong></td>
                <td><strong>10 000</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Atenção:</strong> a frequência de{" "}
            <strong>portadores</strong> (heterozigotos Aa) é{" "}
            <strong>sempre maior</strong> do que a de afetados (aa) quando a
            doença é rara, pois{" "}
            <M>{"2pq \\gg q^2"}</M> quando <M>{"q \\ll 1"}</M>. No exemplo:
            3 200 portadores para apenas 400 afetados.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fatores Evolutivos</span>

        <h2>4. Forças que Rompem o Equilíbrio</h2>

        <p>
          Qualquer população real viola pelo menos uma das condições de
          Hardy-Weinberg, e são justamente essas violações que{" "}
          <strong>produzem a evolução</strong>. Os principais fatores
          evolutivos — chamados coletivamente de <strong>mecanismos de
          microevolução</strong> — são:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Mutação</h3>
            <p>
              Cria novos alelos, alterando diretamente as frequências alélicas.
              É a <strong>fonte primária</strong> de variabilidade genética.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌊</span>
            <h3>Fluxo Gênico</h3>
            <p>
              Entrada (imigração) ou saída (emigração) de indivíduos que
              carregam alelos diferentes, modificando o pool gênico.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Seleção Natural</h3>
            <p>
              Genótipos mais adaptados deixam mais descendentes, aumentando a
              frequência de alelos vantajosos ao longo das gerações.
            </p>
          </div>

          <div className="lesson-card">
            <span>🎲</span>
            <h3>Deriva Genética</h3>
            <p>
              Flutuações <strong>aleatórias</strong> nas frequências alélicas,
              especialmente intensas em populações pequenas; pode fixar ou
              eliminar alelos ao acaso.
            </p>
          </div>

          <div className="lesson-card">
            <span>💑</span>
            <h3>Cruzamento Não Aleatório</h3>
            <p>
              Endogamia, assortatividade ou preferência por parceiros com
              determinado fenótipo alteram as frequências genotípicas sem
              necessariamente mudar as alélicas.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Efeito Gargalo e Efeito Fundador — casos especiais de deriva</h3>
          <p>
            O <strong>efeito gargalo</strong> ocorre quando uma catástrofe
            (epidemia, seca, caçada excessiva) reduz drasticamente o tamanho
            de uma população, fazendo com que os sobreviventes — por puro
            acaso — não representem a diversidade do grupo original. O{" "}
            <strong>efeito fundador</strong> é similar: um pequeno grupo
            coloniza um novo território e sua baixa diversidade genética se
            perpetua nas gerações seguintes. Ambos explicam por que populações
            isoladas acumulam doenças genéticas raras com alta frequência.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fator evolutivo</th>
                <th>Altera freq. alélica?</th>
                <th>Altera freq. genotípica?</th>
                <th>Direcionado?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mutação</td>
                <td>Sim</td>
                <td>Sim</td>
                <td>Não (aleatória)</td>
              </tr>
              <tr>
                <td>Fluxo gênico</td>
                <td>Sim</td>
                <td>Sim</td>
                <td>Não (depende da migração)</td>
              </tr>
              <tr>
                <td>Seleção natural</td>
                <td>Sim</td>
                <td>Sim</td>
                <td>Sim (favorece adaptação)</td>
              </tr>
              <tr>
                <td>Deriva genética</td>
                <td>Sim</td>
                <td>Sim</td>
                <td>Não (aleatória)</td>
              </tr>
              <tr>
                <td>Endogamia / cruzamento não aleatório</td>
                <td>Não*</td>
                <td>Sim</td>
                <td>Depende</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: "0.85em", color: "#6b7280" }}>
          * A endogamia pura não muda as frequências alélicas, mas aumenta a
          proporção de homozigotos em detrimento dos heterozigotos.
        </p>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Hominídeos</span>

        <h2>5. O Que São Hominídeos?</h2>

        <p>
          Os <strong>hominídeos</strong> (família Hominidae) são os grandes
          primatas do Velho Mundo — orangotangos, gorilas, chimpanzés, bonobos
          e humanos. A linhagem que leva ao{" "}
          <em>Homo sapiens</em> separou-se dos ancestrais comuns com os
          chimpanzés há aproximadamente{" "}
          <strong>5 a 7 milhões de anos</strong>. Os{" "}
          <strong>homininos</strong> (tribo Hominini) incluem os humanos
          modernos e todos os extintos mais próximos de nós do que dos
          chimpanzés.
        </p>

        <p>
          Características que marcam a linhagem hominina:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🦶</span>
            <h3>Bipedalismo</h3>
            <p>
              Locomoção ereta em duas pernas — a primeira grande mudança
              anatômica, que liberou as mãos para outras funções.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧠</span>
            <h3>Encéfalo expandido</h3>
            <p>
              Aumento progressivo do volume craniano, de ~450 cm³ nos
              australopithecinos a ~1 400 cm³ no <em>H. sapiens</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>🤲</span>
            <h3>Mão preênsil e polegar oponível</h3>
            <p>
              Permitiu fabricar e usar ferramentas, decisivo para o
              desenvolvimento cultural.
            </p>
          </div>

          <div className="lesson-card">
            <span>💬</span>
            <h3>Linguagem articulada</h3>
            <p>
              Capacidade de comunicação simbólica complexa, base da cultura e
              da transmissão de conhecimento entre gerações.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Pegadinha clássica:</strong> os humanos{" "}
            <strong>não</strong> descendem dos chimpanzés atuais — ambos
            compartilham um <strong>ancestral comum extinto</strong>. A
            evolução é uma árvore com ramificações, não uma escada linear.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Linha do Tempo</span>

        <h2>6. Principais Espécies da Evolução Humana</h2>

        <p>
          A evolução humana é gradual, não linear, e envolveu muitas espécies
          que coexistiram. O registro fóssil e a análise de DNA antigo revelam
          um cenário complexo, com hibridações entre espécies. A linha abaixo
          mostra os marcos mais cobrados em provas:
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 740 300" width="740" height="300" aria-label="Linha do tempo da evolução humana desde Australopithecus até Homo sapiens">
            {/* linha do tempo */}
            <line x1={30} y1={150} x2={710} y2={150} stroke="#374151" strokeWidth={2} />

            {/* marcadores de tempo */}
            {[
              { x: 60, ma: "4 Ma", label: "Australopithecus", sublabel: "~4–2 Ma", cor: "#a855f7", cy: 90 },
              { x: 200, ma: "2,5 Ma", label: "H. habilis", sublabel: "~2,5–1,4 Ma", cor: "#0ea5e9", cy: 210 },
              { x: 330, ma: "1,9 Ma", label: "H. erectus", sublabel: "~1,9 Ma–143 ka", cor: "#f59e0b", cy: 90 },
              { x: 470, ma: "400 ka", label: "H. neanderthalensis", sublabel: "~400–40 ka", cor: "#ef4444", cy: 210 },
              { x: 620, ma: "300 ka", label: "H. sapiens", sublabel: "~300 ka – hoje", cor: "#16a34a", cy: 90 },
            ].map((s) => (
              <g key={s.label}>
                <circle cx={s.x} cy={150} r={8} fill={s.cor} />
                <line x1={s.x} y1={150} x2={s.x} y2={s.cy < 150 ? s.cy + 44 : s.cy - 44} stroke={s.cor} strokeWidth={1.5} strokeDasharray="4 3" />
                <rect x={s.x - 66} y={s.cy < 150 ? s.cy - 36 : s.cy - 4} width={132} height={44} rx={8} fill={s.cor} opacity={0.13} stroke={s.cor} strokeWidth={1.2} />
                <text x={s.x} y={s.cy < 150 ? s.cy - 18 : s.cy + 14} textAnchor="middle" fontSize={12} fontWeight={700} fill="#1f2937">{s.label}</text>
                <text x={s.x} y={s.cy < 150 ? s.cy - 2 : s.cy + 30} textAnchor="middle" fontSize={11} fill="#4b5563">{s.sublabel}</text>
              </g>
            ))}

            {/* legenda de tempo */}
            <text x={30} y={274} fontSize={11} fill="#6b7280">4 milhões de anos atrás →</text>
            <text x={620} y={274} textAnchor="middle" fontSize={11} fill="#16a34a">Hoje</text>
          </svg>
          <figcaption>
            Linha do tempo simplificada da evolução hominina. Ma = milhões de
            anos; ka = milhares de anos. As espécies se sobrepuseram no tempo.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Espécie / Grupo</th>
                <th>Período</th>
                <th>Capacidade craniana</th>
                <th>Características principais</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>Australopithecus</em></td>
                <td>~4–2 Ma</td>
                <td>~450 cm³</td>
                <td>Bípede; face projetada; sem uso sistemático de ferramentas. "Lucy" é o fóssil mais famoso.</td>
              </tr>
              <tr>
                <td><em>Homo habilis</em></td>
                <td>~2,5–1,4 Ma</td>
                <td>~600–750 cm³</td>
                <td>Primeiro produtor sistemático de ferramentas de pedra lascada (cultura Olduvaiense).</td>
              </tr>
              <tr>
                <td><em>Homo erectus</em></td>
                <td>~1,9 Ma – 143 ka</td>
                <td>~900–1 100 cm³</td>
                <td>Dominou o fogo; primeiro a sair da África e colonizar Ásia e Europa; postura completamente ereta.</td>
              </tr>
              <tr>
                <td><em>Homo neanderthalensis</em></td>
                <td>~400–40 ka</td>
                <td>~1 400–1 700 cm³</td>
                <td>Adaptado ao frio europeu; enterrava seus mortos; cruzou com <em>H. sapiens</em> (1–4% do genoma de europeus e asiáticos).</td>
              </tr>
              <tr>
                <td><em>Homo sapiens</em></td>
                <td>~300 ka – presente</td>
                <td>~1 350 cm³</td>
                <td>Linguagem simbólica, arte, religião; colonizou todos os continentes; única espécie humana sobrevivente.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Modelo "Out of Africa"</h3>
          <p>
            Evidências genéticas e fósseis apoiam esmagadoramente o modelo de
            que o <em>Homo sapiens</em> originou-se na{" "}
            <strong>África</strong> há ~300 000 anos e migrou para os demais
            continentes a partir de ~60 000–70 000 anos atrás, substituindo —
            e em alguns casos hibridando com — populações de{" "}
            <em>H. neanderthalensis</em> e <em>Denisovanos</em>.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese Evolutiva</span>

        <h2>7. Genética de Populações e Evolução: a Síntese Moderna</h2>

        <p>
          A <strong>Teoria Sintética da Evolução</strong> (ou Síntese Moderna,
          anos 1930–1940) unificou o darwinismo original com a genética
          mendeliana e a genética de populações. Ela estabelece que:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Variação genética</h3>
            <p>
              É gerada por mutação e recombinação — processos aleatórios que
              fornecem o "material bruto" para a evolução.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Seleção natural</h3>
            <p>
              É o principal mecanismo <strong>direcional</strong>: filtra a
              variação existente, favorecendo fenótipos com maior aptidão no
              ambiente atual.
            </p>
          </div>

          <div className="lesson-card">
            <span>🕒</span>
            <h3>Tempo geológico</h3>
            <p>
              Pequenas mudanças em frequências alélicas, acumuladas ao longo
              de milhares de gerações, produzem macroevolução — surgimento de
              novas espécies e grupos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌐</span>
            <h3>Especiação</h3>
            <p>
              Resulta geralmente do isolamento reprodutivo entre populações,
              que divergem sob seleção natural e deriva até não mais poderem
              cruzar com sucesso.
            </p>
          </div>
        </div>

        <p>
          Na evolução humana, os cinco fatores de microevolução atuaram
          em conjunto: mutações forneceram variação; a seleção natural
          favoreceu o bipedalismo, o encéfalo maior e a linguagem; o
          fluxo gênico conectou populações africanas; gargalos populacionais
          marcaram a saída da África; e a endogamia em grupos isolados
          criou as diferenças genéticas que observamos hoje nas populações
          humanas — diferenças que são, em termos evolutivos,
          <strong> superficiais</strong>: o genoma humano compartilha mais
          de 99,9% de suas bases entre todos os indivíduos da espécie.
        </p>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Condições de Hardy-Weinberg"
          statement={
            <p>
              Qual das alternativas a seguir apresenta corretamente uma das
              condições necessárias para que uma população esteja em equilíbrio
              de Hardy-Weinberg?
            </p>
          }
          options={[
            { letter: "a", text: "Cruzamentos preferenciais entre indivíduos aparentados (endogamia)" },
            { letter: "b", text: "Intensa seleção natural sobre os homozigotos recessivos" },
            {
              letter: "c",
              text: "Ausência de mutação, migração e seleção, com cruzamentos ao acaso em população grande",
              correct: true,
            },
            { letter: "d", text: "Pequeno tamanho populacional, favorecendo a deriva genética" },
          ]}
          resolution={
            <p>
              O Teorema de Hardy-Weinberg exige cinco condições simultâneas:
              população grande, sem mutação, sem migração, sem seleção natural
              e cruzamentos ao acaso (panmixia). A alternativa C resume
              corretamente essas condições. As demais alternativas descrevem
              exatamente os fatores que <strong>rompem</strong> o equilíbrio e
              geram evolução.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Cálculo de frequências genotípicas"
          statement={
            <p>
              Em uma população em equilíbrio de Hardy-Weinberg, a frequência
              do alelo recessivo <em>a</em> é igual a 0,3. Qual é a frequência
              esperada de heterozigotos (Aa) nessa população?
            </p>
          }
          options={[
            { letter: "a", text: "0,09" },
            { letter: "b", text: "0,42", correct: true },
            { letter: "c", text: "0,49" },
            { letter: "d", text: "0,30" },
          ]}
          resolution={
            <p>
              Dados: <M>{"q = 0{,}3"}</M>, logo <M>{"p = 1 - 0{,}3 = 0{,}7"}</M>.
              A frequência dos heterozigotos é dada por:{" "}
              <M block={true}>{"2pq = 2 \\times 0{,}7 \\times 0{,}3 = 0{,}42"}</M>
              Portanto, 42% da população são heterozigotos. As outras opções
              correspondem a: 0,09 (<M>{"q^2"}</M>), 0,49 (<M>{"p^2"}</M>) e
              0,30 (o próprio valor de <em>q</em>, não de 2pq).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Portadores e afetados"
          statement={
            <p>
              Uma doença autossômica recessiva afeta 1 em cada 10 000
              indivíduos em uma população em equilíbrio de Hardy-Weinberg.
              Quantos portadores (heterozigotos) existem para cada indivíduo
              afetado nessa população?
            </p>
          }
          options={[
            { letter: "a", text: "Aproximadamente 2 portadores para cada afetado" },
            { letter: "b", text: "Aproximadamente 50 portadores para cada afetado" },
            { letter: "c", text: "Aproximadamente 200 portadores para cada afetado", correct: true },
            { letter: "d", text: "Aproximadamente 10 000 portadores para cada afetado" },
          ]}
          resolution={
            <p>
              Se a freq. dos afetados é <M>{"q^2 = 1/10000 = 0{,}0001"}</M>,
              então <M>{"q = 0{,}01"}</M> e <M>{"p \\approx 0{,}99"}</M>.
              Frequência dos portadores:{" "}
              <M block={true}>{"2pq = 2 \\times 0{,}99 \\times 0{,}01 \\approx 0{,}0198"}</M>
              Razão portadores/afetados:{" "}
              <M block={true}>{"\\frac{2pq}{q^2} = \\frac{0{,}0198}{0{,}0001} \\approx 198 \\approx 200"}</M>
              Isso ilustra o princípio de que, para doenças raras, os
              portadores são muito mais numerosos que os afetados — relevante
              para aconselhamento genético.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Fenilcetonúria e rastreamento neonatal (ENEM)"
          statement={
            <p>
              A fenilcetonúria (PKU) é uma doença autossômica recessiva
              causada pela ausência da enzima fenilalanina hidroxilase. No
              Brasil, o "Teste do Pezinho" detecta a doença logo após o
              nascimento. Em uma cidade, o teste identificou 9 recém-nascidos
              com PKU em um universo de 90 000 nascimentos. Assumindo equilíbrio
              de Hardy-Weinberg, qual é a porcentagem de portadores
              (heterozigotos) nessa população?
            </p>
          }
          options={[
            { letter: "a", text: "Aproximadamente 1,0%" },
            { letter: "b", text: "Aproximadamente 1,98%", correct: true },
            { letter: "c", text: "Aproximadamente 9,0%" },
            { letter: "d", text: "Aproximadamente 19,8%" },
          ]}
          resolution={
            <p>
              Passo 1 — calcular <M>{"q^2"}</M>:{" "}
              <M block={true}>{"q^2 = \\frac{9}{90000} = 0{,}0001"}</M>
              Passo 2 — calcular <M>{"q"}</M>:{" "}
              <M block={true}>{"q = \\sqrt{0{,}0001} = 0{,}01"}</M>
              Passo 3 — calcular <M>{"p"}</M>:{" "}
              <M block={true}>{"p = 1 - 0{,}01 = 0{,}99"}</M>
              Passo 4 — calcular a frequência dos portadores:{" "}
              <M block={true}>{"2pq = 2 \\times 0{,}99 \\times 0{,}01 = 0{,}0198 \\approx 1{,}98\\%"}</M>
              Cerca de 2% dos indivíduos são portadores do alelo da PKU — sem
              manifestar a doença. O Teste do Pezinho permite tratamento
              dietético precoce, evitando o retardo intelectual associado à
              doença.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Neandertais e o genoma humano"
          statement={
            <p>
              Pesquisas de DNA antigo demonstraram que populações humanas
              atuais de origem europeia e asiática carregam entre 1% e 4% de
              DNA de <em>Homo neanderthalensis</em> em seus genomas, enquanto
              populações subsaarianas não apresentam esse componente. Isso
              indica que, durante a expansão do <em>Homo sapiens</em> para
              fora da África, ocorreu:
            </p>
          }
          options={[
            { letter: "a", text: "Deriva genética que eliminou o DNA africano em europeus e asiáticos" },
            {
              letter: "b",
              text: "Fluxo gênico por hibridação entre Homo sapiens e Homo neanderthalensis fora da África",
              correct: true,
            },
            { letter: "c", text: "Seleção natural favorecendo alelos de neandertais em climas frios, criando nova espécie" },
            { letter: "d", text: "Mutação convergente que gerou os mesmos alelos em humanos modernos e neandertais" },
          ]}
          resolution={
            <p>
              O compartilhamento de 1–4% de DNA de neandertal em europeus e
              asiáticos, mas não em africanos, é explicado pelo{" "}
              <strong>fluxo gênico</strong> (hibridação) ocorrido após a saída
              do <em>H. sapiens</em> da África, quando ele encontrou
              populações de neandertais no Oriente Médio e na Europa. Esse
              evento mostra que os "fatores evolutivos" do Teorema de
              Hardy-Weinberg operam na própria evolução humana: o fluxo gênico
              entre espécies distintas modificou o pool gênico das populações
              envolvidas, e hoje deixa uma assinatura detectável no genoma de
              bilhões de pessoas.
            </p>
          }
        />
      </section>
    </article>
  );
}
