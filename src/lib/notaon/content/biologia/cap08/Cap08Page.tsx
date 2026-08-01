"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap08Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 8</span>

          <h1>Bioenergética I: Respiração Celular Aeróbica e Anaeróbica (Fermentação)</h1>

          <p>
            Toda atividade celular — desde a contração de um músculo até a síntese de
            uma proteína — exige energia. As células obtêm essa energia degradando
            moléculas orgânicas, especialmente a glicose, num conjunto de reações
            chamado <strong>bioenergética</strong>. Neste capítulo você vai dominar
            as três etapas da respiração aeróbica (glicólise, ciclo de Krebs e
            cadeia respiratória), compreender os processos anaeróbicos (fermentação
            lática e alcoólica), comparar saldos de ATP e entender a importância
            dessas rotas metabólicas no cotidiano — conteúdo central do ENEM e de
            todos os grandes vestibulares.
          </p>
        </div>
      </section>

      {/* ───────────── SEÇÃO 1 ───────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Energia Celular</span>

        <h2>1. Bioenergética e o ATP</h2>

        <p>
          A <strong>bioenergética</strong> estuda como as células capturam, convertem
          e utilizam energia. O ponto de partida é sempre uma molécula de alto teor
          energético — principalmente a <strong>glicose</strong> — que é oxidada de
          forma controlada para que a energia liberada não seja perdida como calor, mas
          sim aprisionada em ligações químicas de alta energia.
        </p>

        <p>
          A molécula universal de energia celular é o{" "}
          <strong>ATP (adenosina trifosfato)</strong>. Ela funciona como uma "bateria
          recarregável": quando uma ligação fosfato é quebrada, formando ADP
          (adenosina difosfato) e fosfato inorgânico (Pᵢ), libera-se cerca de
          30,5 kJ/mol — energia imediatamente disponível para qualquer processo
          celular.
        </p>

        <div className="math-block">
          <h3>Hidrólise do ATP</h3>
          <M block={true}>{"\\text{ATP} \\rightarrow \\text{ADP} + P_i + \\text{energia} (\\approx 30{,}5\\;\\text{kJ/mol})"}</M>
          <p>
            O processo inverso — a <strong>fosforilação do ADP</strong> — reconstitui
            o ATP durante a respiração celular, fechando o ciclo energético.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Contração muscular</h3>
            <p>Miosina usa ATP para deslizar sobre actina e gerar força.</p>
          </div>

          <div className="lesson-card">
            <span>🔄</span>
            <h3>Transporte ativo</h3>
            <p>Bombas de Na⁺/K⁺ gastam ATP para manter gradientes iônicos.</p>
          </div>

          <div className="lesson-card">
            <span>🧬</span>
            <h3>Síntese de biomoléculas</h3>
            <p>Proteínas, DNA e lipídios são montados com gasto de ATP.</p>
          </div>

          <div className="lesson-card">
            <span>🌡️</span>
            <h3>Termorregulação</h3>
            <p>Parte do calor metabólico vem do ATP usado em animais homeotérmicos.</p>
          </div>

          <div className="lesson-card">
            <span>🔦</span>
            <h3>Bioluminescência</h3>
            <p>Vaga-lumes convertem ATP em luz via luciferina-luciferase.</p>
          </div>

          <div className="lesson-card">
            <span>🌊</span>
            <h3>Movimento celular</h3>
            <p>Cílios, flagelos e pseudópodos dependem de hidrólise de ATP.</p>
          </div>
        </div>
      </section>

      {/* ───────────── SEÇÃO 2 ───────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>

        <h2>2. Respiração Celular Aeróbica — Panorama Geral</h2>

        <p>
          A <strong>respiração celular aeróbica</strong> é o processo pelo qual a
          célula oxida completamente a glicose na presença de oxigênio, produzindo
          CO₂, H₂O e uma quantidade elevada de ATP. Em termos globais, a reação
          resume-se a:
        </p>

        <div className="math-block">
          <h3>Equação geral da respiração aeróbica</h3>
          <M block={true}>{"C_6H_{12}O_6 + 6\\,O_2 \\rightarrow 6\\,CO_2 + 6\\,H_2O + \\approx 30\\text{–}38\\;\\text{ATP}"}</M>
          <p>
            Na prática, o saldo aceito para fins de vestibular é de{" "}
            <strong>30 a 38 ATP</strong> por molécula de glicose — valores variáveis
            conforme a eficiência das membranas mitocondriais e o organismo
            considerado.
          </p>
        </div>

        <p>
          Esse processo ocorre em <strong>três etapas sequenciais e acopladas</strong>:
          a glicólise no citosol e o ciclo de Krebs com a cadeia respiratória na
          mitocôndria. O oxigênio molecular (O₂) só atua na última etapa, mas é
          indispensável para que as duas primeiras continuem funcionando.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 780 160" width="780" height="160" aria-label="Fluxo das etapas da respiração aeróbica">
            {/* Glicólise */}
            <rect x={10} y={45} width={170} height={70} rx={12} fill="#0ea5e9" fillOpacity={0.15} stroke="#0ea5e9" strokeWidth={1.8} />
            <text x={95} y={74} textAnchor="middle" fontSize={14} fontWeight={700} fill="#0c4a6e">Glicólise</text>
            <text x={95} y={93} textAnchor="middle" fontSize={11} fill="#0c4a6e">Citosol</text>
            <text x={95} y={109} textAnchor="middle" fontSize={11} fill="#0c4a6e">2 ATP líquido</text>

            {/* seta */}
            <polygon points="186,80 204,73 204,87" fill="#6b7280" />
            <line x1={180} y1={80} x2={205} y2={80} stroke="#6b7280" strokeWidth={1.5} />
            <text x={193} y={68} textAnchor="middle" fontSize={10} fill="#6b7280">2 piruvatos</text>

            {/* Ciclo de Krebs */}
            <rect x={210} y={45} width={195} height={70} rx={12} fill="#6366f1" fillOpacity={0.15} stroke="#6366f1" strokeWidth={1.8} />
            <text x={307} y={74} textAnchor="middle" fontSize={14} fontWeight={700} fill="#312e81">Ciclo de Krebs</text>
            <text x={307} y={93} textAnchor="middle" fontSize={11} fill="#312e81">Matriz mitocondrial</text>
            <text x={307} y={109} textAnchor="middle" fontSize={11} fill="#312e81">2 ATP + CO₂ + NADH</text>

            {/* seta */}
            <polygon points="411,80 429,73 429,87" fill="#6b7280" />
            <line x1={405} y1={80} x2={430} y2={80} stroke="#6b7280" strokeWidth={1.5} />
            <text x={420} y={68} textAnchor="middle" fontSize={10} fill="#6b7280">NADH/FADH₂</text>

            {/* Cadeia */}
            <rect x={435} y={45} width={200} height={70} rx={12} fill="#16a34a" fillOpacity={0.15} stroke="#16a34a" strokeWidth={1.8} />
            <text x={535} y={70} textAnchor="middle" fontSize={14} fontWeight={700} fill="#14532d">Cadeia Respiratória</text>
            <text x={535} y={88} textAnchor="middle" fontSize={11} fill="#14532d">Cristas mitocondriais</text>
            <text x={535} y={106} textAnchor="middle" fontSize={11} fill="#14532d">≈ 26–34 ATP + H₂O</text>

            {/* seta final */}
            <polygon points="641,80 659,73 659,87" fill="#6b7280" />
            <line x1={635} y1={80} x2={660} y2={80} stroke="#6b7280" strokeWidth={1.5} />
            <text x={670} y={74} textAnchor="middle" fontSize={13} fontWeight={700} fill="#16a34a">≈30–38</text>
            <text x={670} y={91} textAnchor="middle" fontSize={13} fontWeight={700} fill="#16a34a">ATP total</text>

            {/* labels topo */}
            <text x={390} y={20} textAnchor="middle" fontSize={12} fontStyle="italic" fill="#4b5563">complexidade e rendimento crescentes →</text>
            {/* O2 entra na cadeia */}
            <text x={535} y={148} textAnchor="middle" fontSize={11} fill="#16a34a">← O₂ entra aqui como aceptor final de elétrons</text>
          </svg>
          <figcaption>As três etapas da respiração aeróbica: glicólise no citosol, ciclo de Krebs na matriz e cadeia respiratória nas cristas mitocondriais.</figcaption>
        </figure>
      </section>

      {/* ───────────── SEÇÃO 3 ───────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Etapa 1</span>

        <h2>3. Glicólise — Quebra da Glicose no Citosol</h2>

        <p>
          A <strong>glicólise</strong> (do grego <em>glykos</em> = doce +{" "}
          <em>lysis</em> = quebra) é a via universal de catabolismo da glicose,
          presente em praticamente todos os seres vivos. Ocorre no{" "}
          <strong>citosol</strong> (citoplasma), não precisa de oxigênio e consome
          2 ATP nas etapas iniciais de ativação da glicose, mas produz 4 ATP ao
          longo das reações, resultando em um <strong>saldo líquido de 2 ATP</strong>.
        </p>

        <p>
          Ao final da glicólise, cada molécula de glicose (C₆) é convertida em{" "}
          <strong>2 moléculas de piruvato</strong> (C₃), além de 2 NADH e 2 ATP
          líquidos. O NADH gerado carrega elétrons de alta energia que serão
          aproveitados na cadeia respiratória.
        </p>

        <div className="lesson-highlight">
          <h3>Balanço da glicólise (por 1 molécula de glicose)</h3>
          <ul>
            <li><strong>Consome:</strong> 1 glicose + 2 ATP (investimento inicial)</li>
            <li><strong>Produz:</strong> 2 piruvatos + 4 ATP + 2 NADH</li>
            <li><strong>Saldo:</strong> +2 ATP líquido + 2 NADH</li>
          </ul>
        </div>

        <div className="lesson-highlight">
          <h3>Destino do piruvato</h3>
          <p>
            O destino do piruvato depende da disponibilidade de O₂:
          </p>
          <ul>
            <li>
              <strong>Com O₂ (aerobiose):</strong> o piruvato entra na mitocôndria,
              é convertido em Acetil-CoA pela enzima piruvato-desidrogenase (liberando
              CO₂ e outro NADH) e alimenta o ciclo de Krebs.
            </li>
            <li>
              <strong>Sem O₂ (anaerobiose):</strong> o piruvato é fermentado no
              citosol para regenerar NAD⁺, permitindo que a glicólise continue.
            </li>
          </ul>
        </div>
      </section>

      {/* ───────────── SEÇÃO 4 ───────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Etapas 2 e 3</span>

        <h2>4. Ciclo de Krebs e Cadeia Respiratória na Mitocôndria</h2>

        <p>
          Após a conversão do piruvato em <strong>Acetil-CoA</strong> (2 carbonos),
          este entra no <strong>ciclo de Krebs</strong> (também chamado de ciclo do
          ácido cítrico ou ciclo de Szent-Györgyi-Krebs), que ocorre na{" "}
          <strong>matriz mitocondrial</strong>. A cada volta do ciclo, um Acetil-CoA
          é completamente oxidado a CO₂, gerando principalmente transportadores de
          elétrons ricos em energia (NADH e FADH₂) e uma pequena quantidade de ATP
          (ou GTP).
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 420 320" width="420" height="320" aria-label="Esquema da mitocôndria com suas regiões">
            {/* membrana externa */}
            <ellipse cx={210} cy={160} rx={195} ry={130} fill="#fef9c3" stroke="#ca8a04" strokeWidth={2} />
            {/* espaço intermembranar label */}
            <text x={38} y={135} fontSize={10} fill="#78350f">espaço intermembranar</text>
            {/* membrana interna */}
            <ellipse cx={210} cy={160} rx={165} ry={105} fill="#eff6ff" stroke="#3b82f6" strokeWidth={2} />
            {/* cristas — linhas onduladas */}
            <path d="M 80 120 Q 100 100 120 120 Q 140 140 160 120 Q 180 100 200 120" fill="none" stroke="#3b82f6" strokeWidth={2.5} />
            <path d="M 180 190 Q 200 170 220 190 Q 240 210 260 190 Q 280 170 300 190" fill="none" stroke="#3b82f6" strokeWidth={2.5} />
            {/* label cristas */}
            <text x={90} y={98} fontSize={10} fill="#1e40af">cristas mitocondriais</text>
            <text x={90} y={110} fontSize={10} fill="#1e40af">(cadeia respiratória)</text>
            {/* matriz */}
            <text x={148} y={158} fontSize={12} fontWeight={700} fill="#1e3a8a">Matriz</text>
            <text x={148} y={172} fontSize={10} fill="#1e3a8a">Ciclo de Krebs</text>
            {/* DNA mitocondrial */}
            <circle cx={210} cy={220} r={18} fill="none" stroke="#6366f1" strokeWidth={1.5} strokeDasharray="4 3" />
            <text x={210} y={224} textAnchor="middle" fontSize={9} fill="#4338ca">mtDNA</text>
            {/* rótulos externos */}
            <text x={210} y={18} textAnchor="middle" fontSize={12} fontWeight={700} fill="#78350f">Mitocôndria</text>
            <text x={210} y={34} textAnchor="middle" fontSize={10} fill="#78350f">"usina de energia da célula"</text>
            {/* membrana externa label */}
            <text x={210} y={303} textAnchor="middle" fontSize={10} fill="#ca8a04">membrana externa</text>
          </svg>
          <figcaption>Estrutura da mitocôndria: a matriz abriga o ciclo de Krebs; as cristas mitocondriais concentram os complexos da cadeia respiratória.</figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Ciclo de Krebs</h3>
            <p>
              Para cada Acetil-CoA: produz 3 NADH, 1 FADH₂, 1 ATP (ou GTP) e
              libera 2 CO₂. Como há 2 Acetil-CoA por glicose, o ciclo rende
              6 NADH, 2 FADH₂ e 2 ATP no total.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚡</span>
            <h3>Cadeia Respiratória</h3>
            <p>
              NADH e FADH₂ passam elétrons por complexos proteicos (I–IV) na
              membrana interna, bombeando H⁺ para o espaço intermembranar. O
              gradiente de prótons impulsiona a ATP-sintase.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌬️</span>
            <h3>Papel do O₂</h3>
            <p>
              O₂ é o <strong>aceptor final de elétrons</strong> no complexo IV
              (citocromo c-oxidase), sendo reduzido a H₂O. Sem O₂, a cadeia
              para e o ATP não é produzido.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Fosforilação oxidativa e ATP-sintase</h3>
          <p>
            O mecanismo central da cadeia respiratória é a{" "}
            <strong>fosforilação oxidativa</strong>: a passagem de elétrons pelos
            complexos gera um gradiente eletroquímico de H⁺ (força próton-motriz)
            que faz girar a <strong>ATP-sintase</strong> (complexo V), sintetizando
            ATP a partir de ADP + Pᵢ. Cada NADH gera ~2,5 ATP e cada FADH₂ gera
            ~1,5 ATP — valores modernos; vestibulares tradicionais usam 3 e 2,
            respectivamente.
          </p>
        </div>
      </section>

      {/* ───────────── SEÇÃO 5 ───────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Saldo Energético</span>

        <h2>5. Balanço de ATP da Respiração Aeróbica por Etapa</h2>

        <p>
          Somando todas as etapas, a oxidação completa de uma molécula de glicose
          rende entre <strong>30 e 38 ATP</strong>, dependendo do modelo utilizado.
          A tabela abaixo apresenta o balanço clássico cobrado em vestibulares:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Etapa</th>
                <th>Local</th>
                <th>ATP direto</th>
                <th>NADH</th>
                <th>FADH₂</th>
                <th>ATP via cadeia*</th>
                <th>Total parcial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Glicólise</td>
                <td>Citosol</td>
                <td>2</td>
                <td>2</td>
                <td>—</td>
                <td>≈ 5</td>
                <td>≈ 7</td>
              </tr>
              <tr>
                <td>Oxidação do piruvato</td>
                <td>Membrana int.</td>
                <td>—</td>
                <td>2</td>
                <td>—</td>
                <td>≈ 5</td>
                <td>≈ 5</td>
              </tr>
              <tr>
                <td>Ciclo de Krebs</td>
                <td>Matriz</td>
                <td>2</td>
                <td>6</td>
                <td>2</td>
                <td>≈ 18</td>
                <td>≈ 20</td>
              </tr>
              <tr>
                <td><strong>TOTAL</strong></td>
                <td>—</td>
                <td><strong>4</strong></td>
                <td><strong>10</strong></td>
                <td><strong>2</strong></td>
                <td><strong>≈ 28</strong></td>
                <td><strong>≈ 30–32</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          *Valores usando coeficiente moderno: NADH ≈ 2,5 ATP; FADH₂ ≈ 1,5 ATP.
          O valor clássico de <strong>36–38 ATP</strong> usa NADH = 3 e FADH₂ = 2.
          Para o ENEM, aceita-se o intervalo de 30 a 38 ATP — o importante é
          compreender que o rendimento aeróbico é muito superior ao anaeróbico.
        </p>

        <div className="lesson-highlight">
          <h3>Atenção ao saldo da glicólise</h3>
          <p>
            A glicólise <strong>consome 2 ATP</strong> na fase de investimento
            (fosforilação da glicose) e <strong>produz 4 ATP</strong> na fase de
            retorno. O saldo líquido é, portanto, de{" "}
            <strong>2 ATP — não 4</strong>. Esse detalhe é cobrado com frequência!
          </p>
        </div>
      </section>

      {/* ───────────── SEÇÃO 6 ───────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Anaerobiose</span>

        <h2>6. Fermentação — Energia sem Oxigênio</h2>

        <p>
          Quando o O₂ não está disponível (ou está em concentração insuficiente),
          muitas células recorrem à <strong>fermentação</strong>: o piruvato gerado
          pela glicólise é reduzido no próprio citosol, sem passar pela mitocôndria.
          O objetivo <em>não</em> é produzir mais ATP, mas sim <strong>regenerar o
          NAD⁺</strong> consumido na glicólise — sem NAD⁺, a glicólise para e nenhum
          ATP seria produzido. Assim, o único saldo energético da fermentação é o{" "}
          <strong>2 ATP gerado pela glicólise</strong>.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 230" width="720" height="230" aria-label="Comparação fermentação lática e alcoólica">
            {/* Glicólise comum */}
            <rect x={270} y={10} width={180} height={50} rx={10} fill="#0ea5e9" fillOpacity={0.2} stroke="#0ea5e9" strokeWidth={1.8} />
            <text x={360} y={33} textAnchor="middle" fontSize={13} fontWeight={700} fill="#0c4a6e">Glicólise</text>
            <text x={360} y={50} textAnchor="middle" fontSize={11} fill="#0c4a6e">Glicose → 2 Piruvato + 2 ATP</text>

            {/* seta esquerda → fermentação lática */}
            <line x1={300} y1={60} x2={160} y2={100} stroke="#9ca3af" strokeWidth={1.5} />
            <polygon points="164,96 152,108 172,104" fill="#9ca3af" />

            {/* seta direita → fermentação alcoólica */}
            <line x1={420} y1={60} x2={560} y2={100} stroke="#9ca3af" strokeWidth={1.5} />
            <polygon points="556,96 548,108 568,104" fill="#9ca3af" />

            {/* Fermentação Lática */}
            <rect x={30} y={105} width={240} height={100} rx={10} fill="#ec4899" fillOpacity={0.12} stroke="#ec4899" strokeWidth={1.8} />
            <text x={150} y={128} textAnchor="middle" fontSize={13} fontWeight={700} fill="#831843">Fermentação Lática</text>
            <text x={150} y={146} textAnchor="middle" fontSize={11} fill="#831843">Piruvato + NADH → Lactato + NAD⁺</text>
            <text x={150} y={163} textAnchor="middle" fontSize={11} fill="#831843">Saldo: 2 ATP por glicose</text>
            <text x={150} y={179} textAnchor="middle" fontSize={10} fill="#831843">Organismos: músculos, Lactobacillus</text>
            <text x={150} y={195} textAnchor="middle" fontSize={10} fill="#831843">Uso: iogurte, queijo, chucrute</text>

            {/* Fermentação Alcoólica */}
            <rect x={450} y={105} width={240} height={100} rx={10} fill="#f59e0b" fillOpacity={0.12} stroke="#f59e0b" strokeWidth={1.8} />
            <text x={570} y={128} textAnchor="middle" fontSize={13} fontWeight={700} fill="#78350f">Fermentação Alcoólica</text>
            <text x={570} y={146} textAnchor="middle" fontSize={11} fill="#78350f">Piruvato → Acetald. + CO₂ + NADH→NAD⁺</text>
            <text x={570} y={163} textAnchor="middle" fontSize={11} fill="#78350f">Saldo: 2 ATP por glicose</text>
            <text x={570} y={179} textAnchor="middle" fontSize={10} fill="#78350f">Organismos: Saccharomyces (leveduras)</text>
            <text x={570} y={195} textAnchor="middle" fontSize={10} fill="#78350f">Uso: pão, cerveja, vinho, etanol</text>
          </svg>
          <figcaption>Ambas as fermentações partem da glicólise. A diferença é o produto final: lactato (lática) ou etanol + CO₂ (alcoólica).</figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💪</span>
            <h3>Fermentação Lática</h3>
            <p>
              O piruvato recebe os elétrons do NADH, formando{" "}
              <strong>ácido lático (lactato)</strong>. Ocorre em células musculares
              durante exercício intenso (causando fadiga) e em bactérias como
              Lactobacillus, usadas na produção de iogurte e queijos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🍞</span>
            <h3>Fermentação Alcoólica</h3>
            <p>
              O piruvato é primeiro descarboxilado a acetaldeído (com liberação de
              CO₂) e depois reduzido a <strong>etanol</strong>. Realizada por
              leveduras (<em>Saccharomyces cerevisiae</em>) na produção de pão,
              cerveja, vinho e biocombustível (etanol).
            </p>
          </div>

          <div className="lesson-card">
            <span>♻️</span>
            <h3>Por que fermentar?</h3>
            <p>
              O objetivo central da fermentação é regenerar <strong>NAD⁺</strong>,
              pois sem esse cofator a glicólise cessa e a célula não obtém nenhum
              ATP. Fermentar é uma "saída de emergência" anaeróbica.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Dor muscular e lactato</h3>
          <p>
            Durante exercícios de alta intensidade, quando o fornecimento de O₂
            é insuficiente, as células musculares recorrem à fermentação lática.
            O acúmulo de <strong>ácido lático</strong> diminui o pH celular,
            contribuindo para a sensação de <strong>queimação e fadiga muscular</strong>.
            Após o exercício, o lactato é reconvertido a glicose no fígado (ciclo
            de Cori) ou oxidado pelo coração.
          </p>
        </div>
      </section>

      {/* ───────────── SEÇÃO 7 ───────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>

        <h2>7. Respiração Aeróbica × Anaeróbica — Tabela Comparativa</h2>

        <p>
          Compreender as diferenças entre os dois grandes processos bioenergéticos
          é fundamental para o ENEM. A tabela a seguir consolida os principais
          aspectos:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Respiração Aeróbica</th>
                <th>Fermentação Lática</th>
                <th>Fermentação Alcoólica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Necessidade de O₂</td>
                <td>Sim (aceptor final)</td>
                <td>Não</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>Local</td>
                <td>Citosol + mitocôndria</td>
                <td>Citosol</td>
                <td>Citosol</td>
              </tr>
              <tr>
                <td>Saldo de ATP</td>
                <td>≈ 30–38 ATP</td>
                <td>2 ATP</td>
                <td>2 ATP</td>
              </tr>
              <tr>
                <td>Produtos finais</td>
                <td>CO₂ + H₂O</td>
                <td>Ácido lático (lactato)</td>
                <td>Etanol + CO₂</td>
              </tr>
              <tr>
                <td>Degradação da glicose</td>
                <td>Completa</td>
                <td>Parcial</td>
                <td>Parcial</td>
              </tr>
              <tr>
                <td>Organismos típicos</td>
                <td>Eucariontes aeróbicos</td>
                <td>Músculos, Lactobacillus</td>
                <td>Leveduras (Saccharomyces)</td>
              </tr>
              <tr>
                <td>Aplicações</td>
                <td>Metabolismo geral</td>
                <td>Iogurte, queijo</td>
                <td>Pão, cerveja, bioetanol</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Por que a aeróbica rende tanto mais?</h3>
          <p>
            Na respiração aeróbica, a glicose é <strong>totalmente oxidada</strong>
            — todos os seus elétrons são extraídos via NADH e FADH₂ e passados pela
            cadeia respiratória. Na fermentação, a oxidação é <em>parcial</em>: os
            produtos finais (lactato ou etanol) ainda carregam boa parte da energia
            química da glicose, que é simplesmente descartada. Por isso a diferença
            é de ~38 ATP contra apenas 2 ATP.
          </p>
        </div>
      </section>

      {/* ───────────── SEÇÃO 8 ───────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Aplicações e Contextos</span>

        <h2>8. Bioenergética no Cotidiano e nas Biotecnologias</h2>

        <p>
          O entendimento da respiração celular e da fermentação não fica restrito ao
          laboratório — ele permeia a indústria alimentícia, a produção de
          biocombustíveis, a medicina esportiva e até questões ambientais.
          Reconhecer essas conexões é exatamente o que o ENEM valoriza nas questões
          de "contextualização".
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🍺</span>
            <h3>Bebidas fermentadas</h3>
            <p>
              Cerveja e vinho resultam da fermentação alcoólica de leveduras sobre
              açúcares de cevada maltada ou uva. O CO₂ produzido gera as bolhas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🥖</span>
            <h3>Panificação</h3>
            <p>
              O CO₂ gerado pela fermentação de <em>S. cerevisiae</em> na massa
              forma bolhas que fazem o pão crescer. O etanol evapora no forno.
            </p>
          </div>

          <div className="lesson-card">
            <span>⛽</span>
            <h3>Bioetanol</h3>
            <p>
              O Brasil produz etanol combustível pela fermentação alcoólica da
              cana-de-açúcar — uma das maiores matrizes de biocombustível do mundo.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧀</span>
            <h3>Laticínios</h3>
            <p>
              Iogurte, queijo e kefir são produzidos por fermentação lática de
              bactérias (Lactobacillus, Streptococcus) que acidificam o leite.
            </p>
          </div>

          <div className="lesson-card">
            <span>🏃</span>
            <h3>Fisiologia do esporte</h3>
            <p>
              Em esforço máximo, atletas recorrem à fermentação lática. O treino
              aeróbico melhora a capacidade mitocondrial e retarda esse limiar.
            </p>
          </div>

          <div className="lesson-card">
            <span>💊</span>
            <h3>Medicina e fármacos</h3>
            <p>
              Inibidores da cadeia respiratória (cianeto, monóxido de carbono)
              bloqueam o complexo IV, causando envenenamento celular agudo.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Inibição pelo cianeto — conexão com toxicologia</h3>
          <p>
            O cianeto (CN⁻) liga-se ao ferro do citocromo c-oxidase (complexo IV),
            impedindo a transferência de elétrons para o O₂. A cadeia respiratória
            para, o ATP deixa de ser produzido e as células morrem rapidamente —
            mesmo que O₂ esteja presente nos pulmões. Isso ilustra por que o O₂ é
            necessário <em>na mitocôndria</em>, não apenas no sangue.
          </p>
        </div>
      </section>

      {/* ───────────── EXERCÍCIOS ───────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Saldo líquido da glicólise"
          statement={
            <p>
              A glicólise converte uma molécula de glicose em dois piruvatos.
              Qual é o saldo líquido de ATP produzido exclusivamente nessa etapa?
            </p>
          }
          options={[
            { letter: "a", text: "4 ATP" },
            { letter: "b", text: "36 ATP" },
            { letter: "c", text: "2 ATP", correct: true },
            { letter: "d", text: "0 ATP — a glicólise só consome energia" },
          ]}
          resolution={
            <p>
              A glicólise investe 2 ATP na fase de ativação da glicose e produz
              4 ATP na fase de retorno, resultando em um <strong>saldo líquido
              de 2 ATP</strong>. Os 36–38 ATP correspondem ao total da respiração
              aeróbica completa — erro clássico de vestibular.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Papel do O₂ na respiração aeróbica"
          statement={
            <p>
              Sobre a função do oxigênio na respiração celular aeróbica, é
              correto afirmar que ele:
            </p>
          }
          options={[
            { letter: "a", text: "Atua como substrato da glicólise, sendo consumido no citosol" },
            { letter: "b", text: "É o aceptor final de elétrons na cadeia respiratória, formando H₂O", correct: true },
            { letter: "c", text: "É produzido como subproduto do ciclo de Krebs" },
            { letter: "d", text: "Inibe a ATP-sintase quando em excesso" },
          ]}
          resolution={
            <p>
              O O₂ <strong>não participa da glicólise nem do ciclo de Krebs</strong>:
              atua apenas na cadeia respiratória, no complexo IV (citocromo
              c-oxidase), recebendo os elétrons transportados pelo NADH e FADH₂ e
              sendo reduzido a <strong>H₂O</strong>. Sem O₂ nessa posição, todo o
              sistema para.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Fermentação e regeneração do NAD⁺"
          statement={
            <p>
              Em uma célula muscular sob intensa atividade física sem oxigênio
              suficiente, ocorre fermentação lática. O principal papel metabólico
              dessa fermentação — além de gerar lactato — é:
            </p>
          }
          options={[
            { letter: "a", text: "Produzir grandes quantidades de ATP para suprir a demanda muscular" },
            { letter: "b", text: "Sintetizar glicose a partir do lactato diretamente no músculo" },
            { letter: "c", text: "Regenerar o NAD⁺ para que a glicólise possa continuar funcionando", correct: true },
            { letter: "d", text: "Eliminar o excesso de FADH₂ acumulado no ciclo de Krebs" },
          ]}
          resolution={
            <p>
              A fermentação lática oxida o NADH de volta a <strong>NAD⁺</strong>,
              cofator indispensável para que a glicólise prossiga. Sem NAD⁺
              disponível, a glicólise pararia e a célula não produziria absolutamente
              nenhum ATP. O rendimento energético (2 ATP) é secundário ao objetivo
              de manter o fluxo glicolítico.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Bioetanol e sustentabilidade (ENEM)"
          statement={
            <p>
              O Brasil é um dos maiores produtores mundiais de etanol combustível,
              obtido pela fermentação alcoólica da cana-de-açúcar por leveduras
              (<em>Saccharomyces cerevisiae</em>). Em relação a esse processo,
              assinale a alternativa correta:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A fermentação alcoólica utiliza O₂ para oxidar a glicose a CO₂ e etanol",
            },
            {
              letter: "b",
              text: "A levedura produz etanol e CO₂ como produtos da fermentação, com saldo de 2 ATP por glicose",
              correct: true,
            },
            {
              letter: "c",
              text: "O processo ocorre nas mitocôndrias das leveduras, com alto rendimento de ATP",
            },
            {
              letter: "d",
              text: "O etanol é produzido diretamente pelo ciclo de Krebs na matriz mitocondrial",
            },
          ]}
          resolution={
            <p>
              A fermentação alcoólica é um processo <strong>anaeróbico</strong>
              (sem O₂) que ocorre no <strong>citosol</strong> das leveduras.
              O piruvato é convertido a acetaldeído (com liberação de CO₂) e depois
              a <strong>etanol</strong>, regenerando NAD⁺. O saldo é de apenas
              2 ATP por glicose — muito inferior ao da respiração aeróbica.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Intoxicação por monóxido de carbono"
          statement={
            <p>
              O monóxido de carbono (CO) se liga com alta afinidade ao ferro dos
              citocromos da cadeia respiratória, bloqueando a transferência de
              elétrons para o O₂. Com base nisso, qual seria o efeito imediato
              desse bloqueio sobre o metabolismo celular?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A glicólise seria inibida porque o CO impede a entrada de glicose na célula",
            },
            {
              letter: "b",
              text: "A síntese de ATP pela fosforilação oxidativa seria drasticamente reduzida, levando à morte celular por falta de energia",
              correct: true,
            },
            {
              letter: "c",
              text: "O ciclo de Krebs aceleraria para compensar a falta de elétrons na cadeia",
            },
            {
              letter: "d",
              text: "A fermentação lática seria permanentemente inibida pelo excesso de NADH",
            },
          ]}
          resolution={
            <>
              <p>
                Ao bloquear os citocromos, o CO impede que o O₂ receba os
                elétrons. A cadeia respiratória para, o gradiente de prótons
                não é estabelecido e a <strong>ATP-sintase não funciona</strong>.
                Sem ATP, processos vitais como contração cardíaca e função neuronal
                cessam — causando morte mesmo com O₂ presente nos pulmões. Esse
                é o mecanismo do envenenamento por CO em incêndios e motores.
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
