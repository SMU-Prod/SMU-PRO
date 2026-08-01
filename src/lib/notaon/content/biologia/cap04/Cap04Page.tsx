"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap04Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 4</span>

          <h1>Bioquímica Celular III: Ácidos Nucleicos (DNA e RNA) e Código Genético</h1>

          <p>
            Os <strong>ácidos nucleicos</strong> são as moléculas mais
            extraordinárias da vida: o <strong>DNA</strong> funciona como o
            arquivo definitivo de toda a informação biológica, enquanto os
            diversos tipos de <strong>RNA</strong> atuam como mensageiros,
            tradutores e ferramentas moleculares que convertem essa informação
            em proteínas funcionais. O <strong>código genético</strong> — um
            dicionário de tripletes de bases — é praticamente universal, o que
            revela a unidade profunda de toda a vida na Terra. Dominar esses
            conceitos é indispensável para o ENEM e todos os vestibulares: eles
            sustentam Genética, Evolução, Biotecnologia e Medicina.
          </p>
        </div>
      </section>

      {/* ────────────── SEÇÃO 1 ────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura Molecular</span>

        <h2>1. Nucleotídeos — A Unidade Construtora</h2>

        <p>
          Os ácidos nucleicos são <strong>polímeros</strong> formados pela união
          de milhares (ou bilhões) de monômeros chamados{" "}
          <strong>nucleotídeos</strong>. Cada nucleotídeo possui exatamente três
          componentes covalentemente ligados:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🍬</span>
            <h3>Pentose</h3>
            <p>
              Açúcar de 5 carbonos. No DNA é a{" "}
              <strong>desoxirribose</strong> (C₂ sem OH); no RNA é a{" "}
              <strong>ribose</strong> (C₂ com OH).
            </p>
          </div>

          <div className="lesson-card">
            <span>🔵</span>
            <h3>Base Nitrogenada</h3>
            <p>
              Molécula orgânica cíclica com nitrogênio. Pode ser{" "}
              <strong>púrica</strong> (2 anéis: A e G) ou{" "}
              <strong>pirimídica</strong> (1 anel: C, T, U).
            </p>
          </div>

          <div className="lesson-card">
            <span>⚡</span>
            <h3>Grupo Fosfato</h3>
            <p>
              Radical <M>{"\\text{PO}_4^{3-}"}</M> que confere carga negativa
              ao ácido nucleico e forma o "esqueleto" da molécula.
            </p>
          </div>
        </div>

        <p>
          A união de nucleotídeos ocorre por <strong>ligações fosfodiéster</strong>:
          o fosfato de um nucleotídeo liga-se ao carbono 3' da pentose do
          nucleotídeo seguinte, criando uma cadeia <strong>polarizada</strong>{" "}
          com uma extremidade 5' (fosfato livre) e uma extremidade 3' (OH
          livre). Essa polaridade é fundamental para a replicação, transcrição e
          tradução.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 560 260" width="560" height="260" aria-label="Esquema de um nucleotídeo com fosfato, pentose e base nitrogenada">
            {/* Fosfato */}
            <ellipse cx={90} cy={80} rx={60} ry={32} fill="#f59e0b" fillOpacity={0.18} stroke="#f59e0b" strokeWidth={2} />
            <text x={90} y={76} textAnchor="middle" fontSize={13} fontWeight={700} fill="#92400e">Fosfato</text>
            <text x={90} y={94} textAnchor="middle" fontSize={11} fill="#92400e">PO₄³⁻</text>
            {/* Pentose */}
            <ellipse cx={280} cy={80} rx={65} ry={32} fill="#0ea5e9" fillOpacity={0.15} stroke="#0ea5e9" strokeWidth={2} />
            <text x={280} y={76} textAnchor="middle" fontSize={13} fontWeight={700} fill="#075985">Pentose</text>
            <text x={280} y={94} textAnchor="middle" fontSize={11} fill="#075985">ribose / desoxirribose</text>
            {/* Base */}
            <ellipse cx={460} cy={80} rx={65} ry={32} fill="#16a34a" fillOpacity={0.14} stroke="#16a34a" strokeWidth={2} />
            <text x={460} y={76} textAnchor="middle" fontSize={13} fontWeight={700} fill="#14532d">Base Nitrogenada</text>
            <text x={460} y={94} textAnchor="middle" fontSize={11} fill="#14532d">A, G, C, T/U</text>
            {/* Ligações */}
            <line x1={152} y1={80} x2={214} y2={80} stroke="#374151" strokeWidth={2} />
            <polygon points="212,74 222,80 212,86" fill="#374151" />
            <line x1={346} y1={80} x2={394} y2={80} stroke="#374151" strokeWidth={2} />
            <polygon points="392,74 402,80 392,86" fill="#374151" />
            <text x={183} y={72} textAnchor="middle" fontSize={10} fill="#6b7280">C1'</text>
            <text x={370} y={72} textAnchor="middle" fontSize={10} fill="#6b7280">N-glicosídica</text>
            {/* Grande caixa nucleotídeo */}
            <rect x={20} y={130} width={520} height={48} rx={12} fill="#6366f1" fillOpacity={0.08} stroke="#6366f1" strokeWidth={1.5} strokeDasharray="6 4" />
            <text x={280} y={150} textAnchor="middle" fontSize={14} fontWeight={700} fill="#3730a3">NUCLEOTÍDEO = fosfato + pentose + base nitrogenada</text>
            <text x={280} y={170} textAnchor="middle" fontSize={11} fill="#4338ca">Polimerização via ligação fosfodiéster → ácido nucleico (DNA ou RNA)</text>
            {/* Legenda polaridade */}
            <text x={30} y={215} fontSize={12} fill="#374151">5' ——— P — C5' — C4' — C3' — OH ——— 3'</text>
            <text x={280} y={240} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">Polaridade da cadeia polinucleotídica</text>
          </svg>
          <figcaption>
            Estrutura de um nucleotídeo e polaridade da cadeia polinucleotídica.
            A ligação fosfodiéster une o fosfato ao C3' da pentose adjacente.
          </figcaption>
        </figure>
      </section>

      {/* ────────────── SEÇÃO 2 ────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Dupla Hélice</span>

        <h2>2. Estrutura do DNA — A Dupla Hélice de Watson e Crick</h2>

        <p>
          Em 1953, <strong>James Watson</strong> e <strong>Francis Crick</strong>,
          com dados cruciais de difração de raios X obtidos por{" "}
          <strong>Rosalind Franklin</strong> e Maurice Wilkins, propuseram o
          modelo de dupla hélice para o DNA. É uma das descobertas mais
          impactantes da ciência do século XX.
        </p>

        <p>
          A molécula de DNA é composta por <strong>duas fitas antiparalelas</strong>{" "}
          — uma corre no sentido 5'→3' e a outra no sentido 3'→5' —, enroladas
          helicoidalmente em torno de um eixo central. O <strong>esqueleto
          externo</strong> de cada fita é formado pela alternância de fosfato e
          desoxirribose; os <strong>"degraus" internos</strong> da escada são os
          pares de bases unidas por <strong>pontes de hidrogênio</strong>:
        </p>

        <div className="lesson-highlight">
          <h3>Regras de Pareamento de Bases (Chargaff)</h3>
          <p>
            Adenina (A) pareia <em>sempre</em> com <strong>Timina (T)</strong>{" "}
            por <strong>2 pontes de hidrogênio</strong>; Citosina (C) pareia
            com <strong>Guanina (G)</strong> por{" "}
            <strong>3 pontes de hidrogênio</strong>. Consequência: em qualquer
            DNA, <strong>%A = %T</strong> e <strong>%C = %G</strong>. Isso é a{" "}
            <strong>Regra de Chargaff</strong> e foi a pista decisiva para
            deduzir a dupla hélice. Quanto maior o conteúdo G≡C, mais estável
            (mais "quente" para desnaturar) é a molécula.
          </p>
        </div>

        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg viewBox="0 0 200 300" width="200" height="300" aria-label="Esquema simplificado da dupla hélice do DNA com pareamento A-T e C-G">
              {/* Backbone esquerdo */}
              <path d="M 50 20 C 30 60, 30 100, 50 140 C 70 180, 70 220, 50 260" fill="none" stroke="#0ea5e9" strokeWidth={5} strokeLinecap="round" />
              {/* Backbone direito */}
              <path d="M 150 20 C 170 60, 170 100, 150 140 C 130 180, 130 220, 150 260" fill="none" stroke="#0ea5e9" strokeWidth={5} strokeLinecap="round" />
              {/* Pares A-T */}
              {[55, 115, 175].map((y, i) => (
                <g key={`at-${i}`}>
                  <line x1={52} y1={y} x2={148} y2={y} stroke="#f59e0b" strokeWidth={3} strokeDasharray="5 3" />
                  <rect x={45} y={y - 12} width={28} height={22} rx={5} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.2} />
                  <text x={59} y={y + 4} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">A</text>
                  <rect x={127} y={y - 12} width={28} height={22} rx={5} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.2} />
                  <text x={141} y={y + 4} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">T</text>
                  <text x={100} y={y - 3} textAnchor="middle" fontSize={9} fill="#92400e">2H</text>
                </g>
              ))}
              {/* Pares C-G */}
              {[85, 145, 225].map((y, i) => (
                <g key={`cg-${i}`}>
                  <line x1={52} y1={y} x2={148} y2={y} stroke="#16a34a" strokeWidth={3} strokeDasharray="4 2" />
                  <rect x={45} y={y - 12} width={28} height={22} rx={5} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.2} />
                  <text x={59} y={y + 4} textAnchor="middle" fontSize={12} fontWeight={700} fill="#14532d">C</text>
                  <rect x={127} y={y - 12} width={28} height={22} rx={5} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.2} />
                  <text x={141} y={y + 4} textAnchor="middle" fontSize={12} fontWeight={700} fill="#14532d">G</text>
                  <text x={100} y={y - 3} textAnchor="middle" fontSize={9} fill="#16a34a">3H</text>
                </g>
              ))}
              {/* Labels */}
              <text x={22} y={15} fontSize={10} fontWeight={700} fill="#0369a1">5'</text>
              <text x={22} y={270} fontSize={10} fontWeight={700} fill="#0369a1">3'</text>
              <text x={158} y={15} fontSize={10} fontWeight={700} fill="#0369a1">3'</text>
              <text x={158} y={270} fontSize={10} fontWeight={700} fill="#0369a1">5'</text>
            </svg>
            <figcaption>Dupla hélice antiparalela: pares A–T (2 pontes H) em amarelo e C–G (3 pontes H) em verde.</figcaption>
          </figure>

          <figure className="lesson-figure">
            <svg viewBox="0 0 240 300" width="240" height="300" aria-label="Comparação das purinas e pirimidinas">
              <rect x={10} y={10} width={220} height={280} rx={14} fill="#f8fafc" stroke="#e2e8f0" strokeWidth={1.5} />
              <text x={120} y={36} textAnchor="middle" fontSize={14} fontWeight={700} fill="#1e293b">Bases Nitrogenadas</text>
              {/* Purinas */}
              <rect x={20} y={50} width={95} height={110} rx={10} fill="#6366f1" fillOpacity={0.1} stroke="#6366f1" strokeWidth={1.5} />
              <text x={67} y={70} textAnchor="middle" fontSize={12} fontWeight={700} fill="#3730a3">PÚRICAS</text>
              <text x={67} y={87} textAnchor="middle" fontSize={10} fill="#4338ca">(2 anéis)</text>
              <text x={67} y={112} textAnchor="middle" fontSize={18} fontWeight={800} fill="#312e81">A</text>
              <text x={67} y={134} textAnchor="middle" fontSize={11} fill="#4338ca">Adenina</text>
              <text x={67} y={148} textAnchor="middle" fontSize={18} fontWeight={800} fill="#312e81">G</text>
              <text x={67} y={166} textAnchor="middle" fontSize={11} fill="#4338ca">Guanina</text>
              {/* Pirimídicas */}
              <rect x={125} y={50} width={105} height={150} rx={10} fill="#f59e0b" fillOpacity={0.1} stroke="#f59e0b" strokeWidth={1.5} />
              <text x={177} y={70} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">PIRIMÍDICAS</text>
              <text x={177} y={87} textAnchor="middle" fontSize={10} fill="#92400e">(1 anel)</text>
              <text x={177} y={112} textAnchor="middle" fontSize={18} fontWeight={800} fill="#78350f">C</text>
              <text x={177} y={130} textAnchor="middle" fontSize={10} fill="#92400e">Citosina (DNA+RNA)</text>
              <text x={177} y={152} textAnchor="middle" fontSize={18} fontWeight={800} fill="#78350f">T</text>
              <text x={177} y={170} textAnchor="middle" fontSize={10} fill="#92400e">Timina (só DNA)</text>
              <text x={177} y={192} textAnchor="middle" fontSize={18} fontWeight={800} fill="#78350f">U</text>
              <text x={177} y={210} textAnchor="middle" fontSize={10} fill="#92400e">Uracila (só RNA)</text>
              {/* Regra */}
              <rect x={20} y={220} width={210} height={56} rx={8} fill="#0ea5e9" fillOpacity={0.1} stroke="#0ea5e9" strokeWidth={1.2} />
              <text x={125} y={240} textAnchor="middle" fontSize={11} fontWeight={700} fill="#0369a1">Chargaff: A = T e C = G</text>
              <text x={125} y={258} textAnchor="middle" fontSize={10} fill="#0369a1">purinas = pirimidinas</text>
              <text x={125} y={272} textAnchor="middle" fontSize={10} fill="#0369a1">A + G = T + C</text>
            </svg>
            <figcaption>Classificação das bases nitrogenadas: purinas (2 anéis) e pirimidinas (1 anel).</figcaption>
          </figure>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>DNA</th>
                <th>RNA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Açúcar (pentose)</td>
                <td>Desoxirribose (sem –OH no C2')</td>
                <td>Ribose (com –OH no C2')</td>
              </tr>
              <tr>
                <td>Número de fitas</td>
                <td>Dupla fita (dupla hélice)</td>
                <td>Fita simples (em geral)</td>
              </tr>
              <tr>
                <td>Bases nitrogenadas</td>
                <td>A, T, C, G</td>
                <td>A, U, C, G (U substitui T)</td>
              </tr>
              <tr>
                <td>Localização principal</td>
                <td>Núcleo, mitocôndrias, cloroplastos</td>
                <td>Núcleo + citoplasma</td>
              </tr>
              <tr>
                <td>Estabilidade</td>
                <td>Muito estável (arquivo permanente)</td>
                <td>Menos estável (uso temporário)</td>
              </tr>
              <tr>
                <td>Função principal</td>
                <td>Armazenar informação genética</td>
                <td>Executar a expressão gênica</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ────────────── SEÇÃO 3 ────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Replicação</span>

        <h2>3. Duplicação Semiconservativa do DNA</h2>

        <p>
          Antes de qualquer divisão celular (mitose ou meiose), o DNA deve ser
          copiado com alta fidelidade para que cada célula-filha receba o
          mesmo conjunto de informações genéticas. O mecanismo é denominado{" "}
          <strong>replicação semiconservativa</strong>: cada molécula-filha
          conserva uma das fitas originais (molde) e sintetiza uma nova fita
          complementar. Isso foi demonstrado elegantemente por{" "}
          <strong>Meselson e Stahl</strong> em 1958, usando isótopos de nitrogênio
          pesado (<M>{"^{15}\\text{N}"}</M>) e leve (<M>{"^{14}\\text{N}"}</M>).
        </p>

        <div className="lesson-highlight">
          <h3>Principais Enzimas da Replicação</h3>
          <p>
            A <strong>DNA polimerase</strong> é a protagonista: reconhece a fita
            molde e adiciona nucleotídeos complementares, sempre no sentido 5'→3',
            formando ligações fosfodiéster. Como ela só pode <em>alongar</em> uma
            fita, precisa de um <strong>primer (RNA iniciador)</strong>, sintetizado
            pela <strong>primase</strong>. A <strong>helicase</strong> "abre" a
            dupla hélice na forquilha de replicação, e a{" "}
            <strong>ligase</strong> une os fragmentos de Okazaki da fita
            retardada. A fidelidade é altíssima: aproximadamente 1 erro a cada
            10⁹ bases copiadas.
          </p>
        </div>

        <div className="math-block">
          <h3>Resumo da Replicação</h3>
          <p>
            Ponto de origem → abertura pela helicase → síntese do primer pela
            primase → extensão pela DNA polimerase (fita líder contínua; fita
            retardada em fragmentos de Okazaki) → remoção dos primers +
            substituição por DNA → selagem pela ligase.
          </p>
        </div>
      </section>

      {/* ────────────── SEÇÃO 4 ────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Tipos de RNA</span>

        <h2>4. Os Tipos de RNA e Suas Funções</h2>

        <p>
          A partir do DNA, são produzidos diferentes tipos de RNA, cada um com
          papel específico na expressão gênica. O processo de síntese de RNA a
          partir do DNA se chama <strong>transcrição</strong> e é catalisado pela
          enzima <strong>RNA polimerase</strong>, que age no núcleo de células
          eucariontes.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📨</span>
            <h3>mRNA — Mensageiro</h3>
            <p>
              Transporta a "receita" copiada de um gene do núcleo até o
              ribossomo. Sua sequência de <strong>códons</strong> (tripletes)
              determina a ordem dos aminoácidos na proteína.
            </p>
          </div>

          <div className="lesson-card">
            <span>🚚</span>
            <h3>tRNA — Transportador</h3>
            <p>
              Molde em "folha de trevo" com um <strong>anticódon</strong> (3
              bases complementares ao códon do mRNA) e um sítio de ligação ao
              aminoácido específico. É o "adaptador" do código genético.
            </p>
          </div>

          <div className="lesson-card">
            <span>🏭</span>
            <h3>rRNA — Ribossômico</h3>
            <p>
              Componente estrutural e catalítico dos <strong>ribossomos</strong>.
              O rRNA da subunidade grande possui atividade de{" "}
              <strong>ribozima</strong> (RNA com função enzimática), catalisando
              a formação da ligação peptídica.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de RNA</th>
                <th>Sigla</th>
                <th>Função</th>
                <th>Localização principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RNA mensageiro</td>
                <td>mRNA</td>
                <td>Levar a informação do gene ao ribossomo</td>
                <td>Núcleo → citoplasma</td>
              </tr>
              <tr>
                <td>RNA transportador</td>
                <td>tRNA</td>
                <td>Acoplar aminoácido ao anticódon correto</td>
                <td>Citoplasma</td>
              </tr>
              <tr>
                <td>RNA ribossômico</td>
                <td>rRNA</td>
                <td>Estrutura dos ribossomos; catalisa ligação peptídica</td>
                <td>Nucléolo → ribossomos</td>
              </tr>
              <tr>
                <td>RNA pequeno nuclear</td>
                <td>snRNA</td>
                <td>Processamento do pré-mRNA (splicing de íntrons)</td>
                <td>Núcleo</td>
              </tr>
              <tr>
                <td>RNA interferente</td>
                <td>siRNA / miRNA</td>
                <td>Regulação gênica pós-transcricional; silenciamento</td>
                <td>Citoplasma</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ────────────── SEÇÃO 5 ────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Dogma Central</span>

        <h2>5. O Dogma Central da Biologia Molecular</h2>

        <p>
          Francis Crick formulou em 1958 o chamado <strong>dogma central da
          biologia molecular</strong>, que descreve o fluxo de informação
          genética nas células: a informação parte do DNA, é copiada para o RNA
          e, finalmente, traduzida em proteína. Esse caminho é{" "}
          <strong>unidirecional</strong> nas células normais — proteínas não
          reescrevem o RNA nem o DNA (com a exceção dos retrovírus, que usam
          a <strong>transcriptase reversa</strong> para copiar RNA em DNA).
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 760 140" width="760" height="140" aria-label="Dogma central da biologia molecular: DNA para RNA para proteína">
            {/* DNA */}
            <rect x={20} y={44} width={150} height={52} rx={14} fill="#6366f1" fillOpacity={0.15} stroke="#6366f1" strokeWidth={2} />
            <text x={95} y={66} textAnchor="middle" fontSize={16} fontWeight={800} fill="#3730a3">DNA</text>
            <text x={95} y={84} textAnchor="middle" fontSize={11} fill="#4338ca">informação genética</text>
            {/* seta transcrição */}
            <line x1={172} y1={70} x2={232} y2={70} stroke="#374151" strokeWidth={2} />
            <polygon points="230,63 242,70 230,77" fill="#374151" />
            <text x={207} y={60} textAnchor="middle" fontSize={11} fontWeight={700} fill="#374151">Transcrição</text>
            <text x={207} y={100} textAnchor="middle" fontSize={10} fill="#6b7280">RNA polimerase</text>
            {/* mRNA */}
            <rect x={244} y={44} width={150} height={52} rx={14} fill="#0ea5e9" fillOpacity={0.15} stroke="#0ea5e9" strokeWidth={2} />
            <text x={319} y={66} textAnchor="middle" fontSize={16} fontWeight={800} fill="#0369a1">mRNA</text>
            <text x={319} y={84} textAnchor="middle" fontSize={11} fill="#0369a1">sequência de códons</text>
            {/* seta tradução */}
            <line x1={396} y1={70} x2={456} y2={70} stroke="#374151" strokeWidth={2} />
            <polygon points="454,63 466,70 454,77" fill="#374151" />
            <text x={431} y={60} textAnchor="middle" fontSize={11} fontWeight={700} fill="#374151">Tradução</text>
            <text x={431} y={100} textAnchor="middle" fontSize={10} fill="#6b7280">ribossomo + tRNA</text>
            {/* Proteína */}
            <rect x={468} y={44} width={150} height={52} rx={14} fill="#16a34a" fillOpacity={0.15} stroke="#16a34a" strokeWidth={2} />
            <text x={543} y={66} textAnchor="middle" fontSize={16} fontWeight={800} fill="#14532d">Proteína</text>
            <text x={543} y={84} textAnchor="middle" fontSize={11} fill="#166534">sequência de aa</text>
            {/* seta replicação acima */}
            <path d="M 95 44 C 95 14, 95 14, 95 44" fill="none" stroke="#9ca3af" strokeWidth={1.5} strokeDasharray="4 3" />
            {/* Retrovírus */}
            <line x1={319} y1={96} x2={319} y2={120} stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="4 3" />
            <line x1={319} y1={120} x2={94} y2={120} stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="4 3" />
            <polygon points="96,114 84,120 96,126" fill="#f59e0b" />
            <text x={207} y={135} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#d97706">transcriptase reversa (retrovírus)</text>
            {/* Replicação label */}
            <text x={640} y={48} fontSize={11} fontWeight={700} fill="#374151">Replicação</text>
            <path d="M 634 52 C 680 52 700 70 634 90" fill="none" stroke="#374151" strokeWidth={1.5} />
            <polygon points="636,85 624,92 634,98" fill="#374151" />
          </svg>
          <figcaption>
            Dogma central: DNA → RNA (transcrição) → Proteína (tradução). A replicação do DNA é
            o caminho "para si mesmo". Retrovírus (como o HIV) fazem o fluxo reverso RNA→DNA.
          </figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📋</span>
            <h3>Transcrição (núcleo)</h3>
            <p>
              A RNA polimerase reconhece o <strong>promotor</strong> do gene,
              abre a dupla hélice e sintetiza um mRNA complementar à fita
              molde (fita antissenso), sempre 5'→3'. Em eucariontes, o
              pré-mRNA sofre <strong>splicing</strong> (remoção de íntrons) e
              adição de cap 5' e cauda poliA antes de sair do núcleo.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔤</span>
            <h3>Tradução (ribossomo)</h3>
            <p>
              O ribossomo (composto de rRNA + proteínas) lê o mRNA do códon
              AUG até um códon de parada. Para cada códon, um tRNA portador
              do aminoácido correto entra no sítio A; a ligação peptídica é
              catalisada e o ribossomo avança (translocação). Ao final, a
              proteína é liberada.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Processamento Pós-traducional</h3>
            <p>
              Após a síntese, a proteína pode sofrer <strong>dobramento</strong>{" "}
              (com auxílio de chaperoninas), <strong>clivagem</strong>{" "}
              (ex.: insulina), <strong>glicosilação</strong> ou{" "}
              <strong>fosforilação</strong> para atingir sua função final.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────── SEÇÃO 6 ────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Código Genético</span>

        <h2>6. O Código Genético — O Dicionário Molecular da Vida</h2>

        <p>
          O <strong>código genético</strong> é o conjunto de regras que
          relaciona sequências de três bases do mRNA (os <strong>códons</strong>)
          a aminoácidos específicos ou a sinais de início/parada da tradução.
          Com 4 bases diferentes e tripletes, existem{" "}
          <M>{"4^3 = 64"}</M> códons possíveis para apenas 20 aminoácidos,
          gerando as propriedades extraordinárias descritas abaixo.
        </p>

        <div className="lesson-highlight">
          <h3>Propriedades Fundamentais do Código Genético</h3>
          <p>
            <strong>1. Universal:</strong> com raras exceções (alguns mitocôndrios
            e ciliados), todos os seres vivos da Terra usam exatamente o mesmo
            código — prova poderosa de descendência comum.{" "}
            <strong>2. Degenerado (redundante):</strong> um mesmo aminoácido pode
            ser codificado por mais de um códon (ex.: leucina tem 6 códons).
            Isso protege contra mutações pontuais na terceira base do códon
            (posição "degenerada").{" "}
            <strong>3. Não ambíguo:</strong> cada códon especifica um e somente
            um aminoácido — a decodificação é precisa.{" "}
            <strong>4. Não sobreposto:</strong> as bases são lidas em sequência,
            sem compartilhamento entre códons consecutivos.{" "}
            <strong>5. Possui sinais de pontuação:</strong> um códon de início
            (<strong>AUG</strong> → metionina, Met) e três de parada (
            <strong>UAA, UAG, UGA</strong>) delimitam cada proteína.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Códon (mRNA)</th>
                <th>Aminoácido / Função</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AUG</td>
                <td>Metionina (Met)</td>
                <td>Códon de início; toda tradução começa com Met</td>
              </tr>
              <tr>
                <td>UAA</td>
                <td>Parada (stop)</td>
                <td>Não codifica aminoácido; encerra a cadeia</td>
              </tr>
              <tr>
                <td>UAG</td>
                <td>Parada (stop)</td>
                <td>Não codifica aminoácido; encerra a cadeia</td>
              </tr>
              <tr>
                <td>UGA</td>
                <td>Parada (stop)</td>
                <td>Não codifica aminoácido; encerra a cadeia</td>
              </tr>
              <tr>
                <td>UUU / UUC</td>
                <td>Fenilalanina (Phe)</td>
                <td>Primeiros códons decifrados (Nirenberg, 1961)</td>
              </tr>
              <tr>
                <td>GGU / GGC / GGA / GGG</td>
                <td>Glicina (Gly)</td>
                <td>Exemplo de máxima degeneração (4 códons)</td>
              </tr>
              <tr>
                <td>UUA / UUG / CUU / CUC / CUA / CUG</td>
                <td>Leucina (Leu)</td>
                <td>Aminoácido com mais códons (6 no total)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <h3>Anticódon: o "adaptador" do tRNA</h3>
          <p>
            Cada tRNA possui na alça anticodon uma sequência de 3 bases
            complementares e antiparalelas ao códon do mRNA. Por exemplo,
            o códon <strong>5'-AUG-3'</strong> no mRNA é reconhecido pelo
            anticódon <strong>3'-UAC-5'</strong> do tRNA-Met. Essa
            complementaridade garante que o aminoácido correto seja
            incorporado em cada posição da proteína.
          </p>
        </div>
      </section>

      {/* ────────────── SEÇÃO 7 ────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Mutações</span>

        <h2>7. Mutações — Variação, Doença e Evolução</h2>

        <p>
          Uma <strong>mutação</strong> é qualquer alteração na sequência de
          nucleotídeos do DNA. As mutações são a <strong>matéria-prima da
          evolução</strong> — sem elas não haveria variabilidade sobre a qual
          a seleção natural poderia agir. Ao mesmo tempo, certas mutações
          causam <strong>doenças genéticas</strong> graves.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Mutação de Substituição (ponto)</h3>
            <p>
              Uma base é trocada por outra. Pode ser{" "}
              <strong>silenciosa</strong> (mesmo aminoácido, graças à
              degeneração), <strong>missense</strong> (troca de aminoácido) ou{" "}
              <strong>nonsense</strong> (cria um stop prematuro).
            </p>
          </div>

          <div className="lesson-card">
            <span>➕</span>
            <h3>Inserção / Deleção (frameshift)</h3>
            <p>
              Adição ou remoção de uma ou duas bases muda toda a{" "}
              <strong>grelha de leitura</strong> a partir do ponto da mutação,
              gerando uma proteína completamente diferente — geralmente
              não funcional.
            </p>
          </div>

          <div className="lesson-card">
            <span>🩸</span>
            <h3>Anemia Falciforme</h3>
            <p>
              Troca de um único nucleotídeo no gene da hemoglobina (GAG → GUG)
              substitui <strong>ácido glutâmico</strong> por{" "}
              <strong>valina</strong>, deformando a hemácia em foice e causando
              anemia hemolítica crônica.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Agentes Mutagênicos</h3>
          <p>
            Agentes <strong>físicos</strong> (radiação UV, raios X, raios gama)
            e <strong>químicos</strong> (benzeno, aflatoxina, tabaco) aumentam a
            taxa de mutações muito além do nível espontâneo (~10⁻⁹ por base por
            replicação). Por isso a exposição prolongada a esses agentes eleva
            o risco de câncer — que, em essência, é o resultado de mutações
            acumuladas em genes que controlam a divisão celular.
          </p>
        </div>
      </section>

      {/* ────────────── SEÇÃO 8 ────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Biotecnologia</span>

        <h2>8. Aplicações: Do DNA ao Cotidiano</h2>

        <p>
          O conhecimento sobre DNA, RNA e código genético sustenta toda a
          biotecnologia moderna, com impactos diretos na saúde, alimentação e
          justiça.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💉</span>
            <h3>Vacinas de mRNA</h3>
            <p>
              Introduzem mRNA (ex.: da proteína spike do SARS-CoV-2) nas
              células. Os ribossomos traduzem o mRNA, produzindo antígeno que
              estimula a imunidade — sem usar vírus vivo.
            </p>
          </div>

          <div className="lesson-card">
            <span>✂️</span>
            <h3>CRISPR-Cas9</h3>
            <p>
              Sistema de edição de genes baseado em RNA guia (gRNA) que
              direciona a nuclease Cas9 a um sítio específico do DNA para
              cortar e editar sequências com precisão.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>DNA Forense (PCR)</h3>
            <p>
              A <strong>PCR</strong> (reação em cadeia da polimerase) amplifica
              regiões específicas do DNA a partir de amostras mínimas (sangue,
              cabelo), gerando o "perfil genético" usado em investigações
              criminais e testes de paternidade.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌾</span>
            <h3>Transgênicos</h3>
            <p>
              Inserção de genes de uma espécie em outra (ex.: gene de
              resistência a herbicida no milho ou gene da insulina humana em
              bactéria <em>E. coli</em>) explorando a universalidade do código
              genético.
            </p>
          </div>

          <div className="lesson-card">
            <span>🩺</span>
            <h3>Diagnóstico Molecular</h3>
            <p>
              PCR em tempo real e sequenciamento de nova geração (NGS)
              detectam vírus (HIV, dengue, SARS-CoV-2), mutações em genes de
              câncer e doenças genéticas com alta sensibilidade e rapidez.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧬</span>
            <h3>Projeto Genoma Humano</h3>
            <p>
              Concluído em 2003, sequenciou os ~3,2 bilhões de pares de bases
              do genoma humano, revelando ~20.000–25.000 genes e abrindo
              caminho para a medicina personalizada.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Por que o código universal é essencial para a biotecnologia?</h3>
          <p>
            A <strong>universalidade do código genético</strong> é o que torna
            possível expressar o gene da insulina humana em bactérias, ou
            cultivar uma vacina de mRNA em células de mamífero. Como todos os
            seres vivos usam os mesmos códons, um gene humano pode ser
            "lido" e traduzido em organismos completamente diferentes — o
            fundamento de toda a biotecnologia moderna.
          </p>
        </div>
      </section>

      {/* ────────────── EXERCÍCIOS ────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — Do Básico ao Contextualizado</h2>

        <Exercise
          level="Básico"
          title="1. Composição do nucleotídeo"
          statement={
            <p>
              Cada nucleotídeo, unidade monomérica dos ácidos nucleicos, é
              formado pela associação de:
            </p>
          }
          options={[
            { letter: "a", text: "Aminoácido + base nitrogenada + fosfato" },
            { letter: "b", text: "Pentose + base nitrogenada + grupo fosfato", correct: true },
            { letter: "c", text: "Glicose + base nitrogenada + fosfato" },
            { letter: "d", text: "Pentose + ácido graxo + fosfato" },
          ]}
          resolution={
            <p>
              O nucleotídeo tem <strong>três componentes</strong>: uma pentose
              (ribose no RNA ou desoxirribose no DNA), uma base nitrogenada
              (púrica ou pirimídica) e um grupo fosfato. Aminoácidos são
              monômeros de proteínas, não de ácidos nucleicos.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Regra de Chargaff e cálculo de bases"
          statement={
            <p>
              Em uma molécula de DNA de fita dupla, a porcentagem de adenina
              é de 30%. Sabendo que a molécula possui 1.000 bases no total,
              qual é o número de citosinas presentes nessa molécula?
            </p>
          }
          options={[
            { letter: "a", text: "300" },
            { letter: "b", text: "200", correct: true },
            { letter: "c", text: "100" },
            { letter: "d", text: "400" },
          ]}
          resolution={
            <>
              <p>
                Pela <strong>regra de Chargaff</strong>: A = T = 30%, logo
                A + T = 60%. As demais bases (C + G) totalizam 40%, e como
                C = G, temos C = 20%.
              </p>
              <p>
                Em 1.000 bases: 20% de 1.000 = <strong>200 citosinas</strong>.
              </p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Tradução e leitura de códons"
          statement={
            <p>
              Um trecho de DNA molde (fita antissenso) tem a sequência
              3'-TAC-GGA-ATT-ACT-5'. Qual será a sequência de aminoácidos
              produzida, e o que ocorrerá ao atingir o quarto códon?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Met-Pro-Ile → parada no quarto códon",
              correct: true,
            },
            {
              letter: "b",
              text: "Met-Pro-Ile-Thr → sem parada",
            },
            {
              letter: "c",
              text: "Val-Gly-Leu-Thr → tradução completa",
            },
            {
              letter: "d",
              text: "Met-Gly-Ile → parada no terceiro códon",
            },
          ]}
          resolution={
            <>
              <p>
                A fita de DNA molde 3'-TAC-GGA-ATT-ACT-5' gera o mRNA
                5'-AUG-CCU-UAA-UGA-3'.
              </p>
              <p>
                • AUG → Metionina (início){" "}
                • CCU → Prolina{" "}
                • UAA → códon de <strong>parada</strong> (stop) — a tradução
                termina aqui.{" "}
                O quarto tripleto (UGA) não chega a ser lido.
                A proteína resultante é <strong>Met-Pro</strong> (Met é
                posteriormente removida na maioria dos casos, mas o
                enunciado conta os aminoácidos incorporados antes do stop,
                que são 2, mais o Met de início = 3 aminoácidos incorporados
                antes do stop: Met, Pro e o stop em UAA encerra após Pro).
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Anemia falciforme e código genético (ENEM adaptado)"
          statement={
            <p>
              A anemia falciforme é causada pela troca de um único nucleotídeo
              no gene da beta-hemoglobina, alterando o 6º aminoácido de ácido
              glutâmico para valina. Essa mudança faz com que a hemoglobina
              se agregue em condições de baixa oxigenação, deformando as
              hemácias em forma de foice. Com base nessa informação, é correto
              afirmar que:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A mutação é do tipo frameshift, pois insere um novo nucleotídeo na sequência",
            },
            {
              letter: "b",
              text: "A mutação é missense: a troca de base altera um códon, resultando em aminoácido diferente na proteína",
              correct: true,
            },
            {
              letter: "c",
              text: "A mutação é silenciosa, pois não altera a função da hemoglobina",
            },
            {
              letter: "d",
              text: "A doença ocorre porque o código genético é ambíguo para o códon da valina",
            },
          ]}
          resolution={
            <p>
              A <strong>mutação de ponto missense</strong> troca GAG (ácido
              glutâmico) por GUG (valina) no mRNA. Como os dois aminoácidos
              têm propriedades físico-químicas distintas (Glu é polar
              carregado negativamente; Val é apolar), a estrutura
              tridimensional da hemoglobina muda, causando a agregação. Não é
              frameshift (não há inserção/deleção) nem silenciosa (muda o
              aminoácido e a função).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Vacinas de mRNA e dogma central"
          statement={
            <p>
              As vacinas de mRNA contra a COVID-19 introduzem nas células
              humanas uma molécula de mRNA sintético que codifica a proteína
              spike do SARS-CoV-2. A partir dessa informação, analise as
              afirmações:
              <br />
              I. Os ribossomos das células vacinadas traduzem o mRNA em
              proteína spike.
              <br />
              II. O mRNA da vacina é incorporado ao DNA do núcleo celular.
              <br />
              III. O mRNA da vacina funciona como anticódon para neutralizar
              o vírus diretamente.
              <br />
              Está correto apenas:
            </p>
          }
          options={[
            { letter: "a", text: "I e II" },
            { letter: "b", text: "II e III" },
            { letter: "c", text: "I apenas", correct: true },
            { letter: "d", text: "I, II e III" },
          ]}
          resolution={
            <>
              <p>
                <strong>I — Correta.</strong> O mRNA entra no citoplasma e é
                traduzido pelos ribossomos, produzindo a proteína spike, que
                estimula a resposta imune.
              </p>
              <p>
                <strong>II — Errada.</strong> O mRNA <em>não</em> se integra ao
                DNA nuclear. O dogma central prevê que o fluxo normal é DNA →
                RNA → Proteína; o RNA da vacina não possui transcriptase reversa
                e não acessa o núcleo.
              </p>
              <p>
                <strong>III — Errada.</strong> O mRNA não age como anticódon; o
                anticódon é uma estrutura do tRNA. O mRNA é lido pelos
                ribossomos para produzir proteína.
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
