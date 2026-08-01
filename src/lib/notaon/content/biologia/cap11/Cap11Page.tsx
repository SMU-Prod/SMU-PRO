"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap11Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 11</span>

          <h1>Divisão Celular I: Ciclo Celular e Mitose</h1>

          <p>
            Cada segundo, cerca de <strong>3,8 milhões de células</strong> se
            dividem no corpo humano — repondo tecidos, curando feridas e
            sustentando o crescimento. Tudo isso é governado por um programa
            molecular preciso chamado <strong>ciclo celular</strong>. Neste
            capítulo você vai compreender cada fase do ciclo, os pontos de
            checagem que impedem erros genéticos, as quatro etapas clássicas da
            mitose, a citocinese animal e vegetal, e como a perda desse controle
            leva ao câncer — temas recorrentes no ENEM e nos principais
            vestibulares do país.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>

        <h2>1. Por Que as Células Se Dividem</h2>

        <p>
          A divisão celular é um dos processos mais fundamentais da Biologia.
          Ela está na origem de cada organismo multicelular — um zigoto
          unicelular se divide repetidas vezes até originar os trilhões de
          células de um ser humano adulto. Mas a importância não se restringe ao
          desenvolvimento embrionário: ao longo de toda a vida, a divisão celular
          é responsável pela <strong>renovação contínua dos tecidos</strong>. O
          revestimento interno do intestino é completamente substituído a cada
          4–5 dias; as células da pele se renovam em 2–4 semanas; os glóbulos
          vermelhos vivem apenas 120 dias antes de serem descartados e
          repostos pela medula óssea.
        </p>

        <p>
          Além da manutenção somática, a divisão celular é o mecanismo de{" "}
          <strong>reprodução assexuada</strong> de organismos unicelulares e de
          muitos invertebrados, e é o passo inicial obrigatório para a formação
          de gametas (pelos processos que estudaremos em Meiose). Quando o
          processo falha ou se desregula, o resultado pode ser o câncer — uma
          das principais causas de morte no Brasil e no mundo.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Crescimento e desenvolvimento</h3>
            <p>
              De um zigoto unicelular a 37 trilhões de células por mitoses
              sucessivas durante embriogênese e pós-natal.
            </p>
          </div>

          <div className="lesson-card">
            <span>🩹</span>
            <h3>Renovação e cicatrização</h3>
            <p>
              Epitélio intestinal, pele, medula óssea e outros tecidos de
              alta renovação dependem de mitoses diárias.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧫</span>
            <h3>Reprodução assexuada</h3>
            <p>
              Bipartição em bactérias, brotamento em hidras e leveduras,
              fragmentação em planárias — todos via divisão celular.
            </p>
          </div>

          <div className="lesson-card">
            <span>🥚</span>
            <h3>Produção de gametas</h3>
            <p>
              A meiose (capítulo seguinte) começa com mitoses nas células
              germinativas e termina com divisões redutoras.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧬</span>
            <h3>Manutenção genética</h3>
            <p>
              Cada divisão mitótica transmite uma cópia idêntica e íntegra do
              genoma para as células-filhas.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Quando falha: câncer</h3>
            <p>
              Divisões desreguladas geram massa tumoral invasiva; comprensão do
              ciclo é base para terapias oncológicas.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Ciclo Celular</span>

        <h2>2. O Ciclo Celular: Interfase e Fase M</h2>

        <p>
          O ciclo celular é a sequência ordenada de eventos que culmina na
          divisão de uma célula em duas células-filhas. Ele é dividido em duas
          grandes etapas: a <strong>interfase</strong> (que ocupa ~90% do tempo
          total) e a <strong>fase M</strong> (mitose + citocinese, ~10%).
          Compreender o que acontece em cada subfase é essencial, pois as
          questões de vestibular frequentemente pedem a correta associação entre
          evento e período do ciclo.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 260" width="680" height="260" aria-label="Diagrama do ciclo celular em setores circulares">
            {/* Anel externo representando proporções do ciclo */}
            {/* G1 ~ 40% = 144° */}
            <path d="M 340 130 L 340 30 A 100 100 0 0 1 425 274 Z"
              fill="#0ea5e9" fillOpacity={0.18} stroke="#0ea5e9" strokeWidth={2} />
            {/* S ~ 30% = 108° */}
            <path d="M 340 130 L 425 274 A 100 100 0 0 1 205 222 Z"
              fill="#6366f1" fillOpacity={0.18} stroke="#6366f1" strokeWidth={2} />
            {/* G2 ~ 20% = 72° */}
            <path d="M 340 130 L 205 222 A 100 100 0 0 1 240 30 Z"
              fill="#f59e0b" fillOpacity={0.18} stroke="#f59e0b" strokeWidth={2} />
            {/* Fase M ~ 10% = 36° */}
            <path d="M 340 130 L 240 30 A 100 100 0 0 1 340 30 Z"
              fill="#ef4444" fillOpacity={0.25} stroke="#ef4444" strokeWidth={2} />
            {/* centro branco */}
            <circle cx={340} cy={130} r={52} fill="white" stroke="#e5e7eb" strokeWidth={1.5} />
            <text x={340} y={124} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">Ciclo</text>
            <text x={340} y={142} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">Celular</text>
            {/* Labels externos */}
            <text x={430} y={100} fontSize={14} fontWeight={700} fill="#0369a1">G₁</text>
            <text x={442} y={118} fontSize={11} fill="#0369a1">(crescimento)</text>
            <text x={418} y={248} fontSize={14} fontWeight={700} fill="#4338ca">S</text>
            <text x={404} y={265} fontSize={11} fill="#4338ca">(síntese DNA)</text>
            <text x={182} y={195} fontSize={14} fontWeight={700} fill="#b45309">G₂</text>
            <text x={150} y={212} fontSize={11} fill="#b45309">(preparação)</text>
            <text x={265} y={42} fontSize={14} fontWeight={700} fill="#b91c1c">M</text>
            <text x={248} y={24} fontSize={11} fill="#b91c1c">(mitose)</text>
            {/* Seta circular indicando sentido */}
            <path d="M 340 28 A 102 102 0 0 1 444 160" fill="none" stroke="#9ca3af" strokeWidth={1.5} strokeDasharray="5 3" />
            <polygon points="444,160 452,150 438,148" fill="#9ca3af" />
          </svg>
          <figcaption>
            Representação proporcional do ciclo celular: a interfase (G₁ + S + G₂) ocupa
            cerca de 90% do tempo; a fase M (mitose + citocinese), apenas 10%.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Interfase — G₁, S e G₂ em detalhe</h3>
          <p>
            A interfase não é um período de repouso, como se acreditava
            anteriormente. É a fase mais <em>ativa</em> da célula, durante a
            qual ela cresce, replica seu genoma e sintetiza as proteínas
            necessárias para a divisão.
          </p>
          <p>
            Em <strong>G₁</strong> (first gap, ou "lacuna 1"), a célula cresce
            em volume, produz proteínas estruturais e funcionais, e duplica suas
            organelas. É aqui que se encontra o principal ponto de controle do
            ciclo — a célula só avança se tiver tamanho adequado, nutrientes
            suficientes e sinais de crescimento (fatores de crescimento).
          </p>
          <p>
            Em <strong>S</strong> (síntese), ocorre a <strong>replicação
            semiconservativa do DNA</strong>. Cada molécula de DNA é copiada de
            modo que cada cromossomo, que antes era composto por uma única
            cromátide, passa a ter <strong>duas cromátides-irmãs</strong> unidas
            pelo centrômero. O conteúdo de DNA da célula dobra: de 2C passa a
            4C (onde C = conjunto haploide de DNA).
          </p>
          <p>
            Em <strong>G₂</strong> (second gap), a célula sintetiza tubulina e
            outras proteínas do fuso mitótico, e verifica se a replicação foi
            completada sem erros antes de iniciar a divisão.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Fase G₀ — saindo do ciclo</h3>
          <p>
            Células altamente diferenciadas podem abandonar o ciclo e entrar em
            um estado de quiescência chamado <strong>G₀</strong>. Neurônios
            maduros e cardiomiócitos adultos permanecem em G₀ de forma
            praticamente permanente, o que explica a dificuldade de regeneração
            do sistema nervoso e do coração após lesões. Já células do fígado
            estão em G₀, mas podem reentrar em G₁ mediante estímulo
            (hepatectomia parcial, por exemplo).
          </p>
        </div>

        {/* Gráfico de DNA ao longo do ciclo */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 680 220" width="680" height="220" aria-label="Gráfico da quantidade de DNA ao longo do ciclo celular">
            {/* Eixos */}
            <line x1={60} y1={20} x2={60} y2={175} stroke="#374151" strokeWidth={1.8} />
            <line x1={60} y1={175} x2={640} y2={175} stroke="#374151" strokeWidth={1.8} />
            {/* Eixo Y - labels */}
            <text x={54} y={178} textAnchor="end" fontSize={12} fill="#374151">C</text>
            <text x={54} y={103} textAnchor="end" fontSize={12} fill="#374151">2C</text>
            <text x={54} y={30} textAnchor="end" fontSize={12} fill="#374151">4C</text>
            {/* Linhas de referência */}
            <line x1={58} y1={103} x2={640} y2={103} stroke="#e5e7eb" strokeWidth={1} strokeDasharray="5 4" />
            <line x1={58} y1={30} x2={640} y2={30} stroke="#e5e7eb" strokeWidth={1} strokeDasharray="5 4" />
            {/* Curva do DNA:
                G1: constante em 2C (x=60 a x=220)
                S: sobe de 2C a 4C (x=220 a x=380)
                G2: constante em 4C (x=380 a x=480)
                Mitose: descida rápida de 4C para 2C x 2 (x=480 a x=540)
                após citocinese: 2C (x=540 a x=640)
            -->  -->  -->  -->  -->
            -->  -->  -->  -->  -->
            */}
            <path
              d="M 60 103 L 220 103 C 260 103, 260 30, 380 30 L 480 30 C 510 30, 510 103, 540 103 L 640 103"
              fill="none"
              stroke="#6366f1"
              strokeWidth={3}
            />
            {/* Preencher sob curva levemente */}
            <path
              d="M 60 103 L 220 103 C 260 103, 260 30, 380 30 L 480 30 C 510 30, 510 103, 540 103 L 640 103 L 640 175 L 60 175 Z"
              fill="#6366f1"
              fillOpacity={0.07}
            />
            {/* Divisores de fases */}
            <line x1={220} y1={20} x2={220} y2={175} stroke="#d1d5db" strokeWidth={1} strokeDasharray="4 3" />
            <line x1={380} y1={20} x2={380} y2={175} stroke="#d1d5db" strokeWidth={1} strokeDasharray="4 3" />
            <line x1={480} y1={20} x2={480} y2={175} stroke="#d1d5db" strokeWidth={1} strokeDasharray="4 3" />
            <line x1={540} y1={20} x2={540} y2={175} stroke="#d1d5db" strokeWidth={1} strokeDasharray="4 3" />
            {/* Labels de fase */}
            <text x={140} y={200} textAnchor="middle" fontSize={13} fontWeight={700} fill="#0369a1">G₁</text>
            <text x={300} y={200} textAnchor="middle" fontSize={13} fontWeight={700} fill="#4338ca">S</text>
            <text x={430} y={200} textAnchor="middle" fontSize={13} fontWeight={700} fill="#b45309">G₂</text>
            <text x={510} y={200} textAnchor="middle" fontSize={12} fontWeight={700} fill="#b91c1c">M</text>
            <text x={590} y={200} textAnchor="middle" fontSize={11} fill="#374151">G₁ nova</text>
            {/* Título eixo Y */}
            <text x={18} y={100} fontSize={11} fill="#6b7280" transform="rotate(-90 18 100)">Conteúdo de DNA</text>
          </svg>
          <figcaption>
            Variação do conteúdo de DNA ao longo do ciclo: constante em 2C durante G₁,
            duplicação gradual durante S, constante em 4C durante G₂, e retorno a 2C
            em cada célula-filha após a mitose + citocinese.
          </figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Controle do Ciclo</span>

        <h2>3. Pontos de Checagem e Regulação Molecular</h2>

        <p>
          O ciclo celular não é um mecanismo passivo que simplesmente "avança"
          quando a célula está pronta. Ele é ativamente <strong>controlado</strong>{" "}
          por uma série de pontos de checagem (<em>checkpoints</em>) — "portões"
          moleculares que verificam a integridade do DNA, o tamanho celular e a
          correta progressão de cada etapa antes de permitir a próxima. Esses
          pontos envolvem proteínas regulatórias chamadas{" "}
          <strong>ciclinas</strong> e <strong>quinases dependentes de ciclinas
          (CDKs)</strong>, que formam complexos ativadores cuja concentração
          oscila durante o ciclo — daí o nome "ciclinas".
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Ponto de checagem</th>
                <th>Localização no ciclo</th>
                <th>O que é verificado</th>
                <th>Consequência se falhar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>G₁/S (Restrição)</td>
                <td>Final de G₁</td>
                <td>Tamanho celular, nutrientes, fatores de crescimento, integridade do DNA</td>
                <td>Célula permanece em G₁ ou entra em G₀ (apoptose se dano grave)</td>
              </tr>
              <tr>
                <td>G₂/M (entrada em mitose)</td>
                <td>Final de G₂</td>
                <td>Duplicação completa do DNA, ausência de danos, tamanho adequado</td>
                <td>Bloqueio em G₂; eventual apoptose mediada pelo p53</td>
              </tr>
              <tr>
                <td>Ponto de checagem do fuso (SAC)</td>
                <td>Metáfase/Anáfase</td>
                <td>Ligação de todos os cinetócoros às fibras do fuso; tensão correta</td>
                <td>Anáfase atrasada; cromossomos podem distribuir-se desigualmente</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>p53 — o "guardião do genoma"</h3>
          <p>
            A proteína <strong>p53</strong>, codificada pelo gene <em>TP53</em>,
            é o principal sensor de dano ao DNA no ciclo celular. Quando o DNA é
            danificado (por radiação, produtos químicos ou erros de replicação),
            a p53 se acumula e ativa genes que param o ciclo em G₁ ou G₂,
            permitindo o reparo. Se o dano é irreparável, p53 desencadeia a{" "}
            <strong>apoptose</strong> — morte celular programada que elimina
            células potencialmente cancerosas antes que se proliferem.
            Mutações em <em>TP53</em> estão presentes em mais de <strong>50%</strong>{" "}
            de todos os tipos de câncer humano, tornando-o o gene supressor de
            tumor mais estudado da Biologia Molecular.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Mitose</span>

        <h2>4. As Quatro Fases da Mitose (PMAT)</h2>

        <p>
          A mitose é uma <strong>divisão equacional</strong>: a célula-mãe
          diploide (2n) origina duas células-filhas com o mesmo número
          cromossômico (2n) e geneticamente idênticas entre si e à célula de
          origem. Isso é possível porque, antes da divisão, cada cromossomo foi
          previamente duplicado na fase S, formando díades (cromossomos com duas
          cromátides-irmãs). A mitose distribui essas cromátides de forma
          exatamente igual entre as células-filhas. O processo é
          didaticamente dividido em quatro fases: <strong>Prófase,
          Metáfase, Anáfase e Telófase</strong> — lembradas pelo mnemônico
          PMAT.
        </p>

        {/* Figura das fases da mitose com cromossomos */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 720 210" width="720" height="210" aria-label="Esquema das quatro fases da mitose com cromossomos">
            {/* Fase 1: Prófase */}
            <circle cx={80} cy={100} r={65} fill="#eff6ff" stroke="#3b82f6" strokeWidth={1.5} />
            {/* cromossomos condensando - linhas grossas tortuosas */}
            <path d="M65 85 C60 90, 70 95, 65 100 C60 105, 70 110, 65 115" stroke="#1d4ed8" strokeWidth={3} fill="none" strokeLinecap="round" />
            <path d="M80 80 C75 85, 85 90, 80 95 C75 100, 85 105, 80 110" stroke="#1d4ed8" strokeWidth={3} fill="none" strokeLinecap="round" />
            <path d="M95 85 C90 90, 100 95, 95 100 C90 105, 100 110, 95 115" stroke="#1d4ed8" strokeWidth={3} fill="none" strokeLinecap="round" />
            {/* núcleo se desfazendo - círculo pontilhado */}
            <circle cx={80} cy={100} r={35} fill="none" stroke="#93c5fd" strokeWidth={1.5} strokeDasharray="5 3" />
            <text x={80} y={185} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1d4ed8">Prófase</text>

            {/* Fase 2: Metáfase */}
            <circle cx={265} cy={100} r={65} fill="#f5f3ff" stroke="#7c3aed" strokeWidth={1.5} />
            {/* placa equatorial - linha central */}
            <line x1={265} y1={45} x2={265} y2={155} stroke="#7c3aed" strokeWidth={1} strokeDasharray="4 3" />
            {/* cromossomos alinhados no equador */}
            <rect x={250} y={78} width={8} height={18} rx={3} fill="#4f46e5" />
            <rect x={263} y={75} width={8} height={22} rx={3} fill="#4f46e5" />
            <rect x={250} y={102} width={8} height={18} rx={3} fill="#4f46e5" />
            <rect x={263} y={100} width={8} height={20} rx={3} fill="#4f46e5" />
            {/* fibras do fuso */}
            <line x1={230} y1={60} x2={258} y2={88} stroke="#a78bfa" strokeWidth={1} />
            <line x1={230} y1={140} x2={258} y2={120} stroke="#a78bfa" strokeWidth={1} />
            <line x1={300} y1={60} x2={272} y2={88} stroke="#a78bfa" strokeWidth={1} />
            <line x1={300} y1={140} x2={272} y2={120} stroke="#a78bfa" strokeWidth={1} />
            <text x={265} y={185} textAnchor="middle" fontSize={13} fontWeight={700} fill="#6d28d9">Metáfase</text>

            {/* Fase 3: Anáfase */}
            <circle cx={450} cy={100} r={65} fill="#fff7ed" stroke="#ea580c" strokeWidth={1.5} />
            {/* cromátides migrando para polos */}
            <rect x={432} y={58} width={7} height={16} rx={3} fill="#c2410c" />
            <rect x={443} y={55} width={7} height={16} rx={3} fill="#c2410c" />
            <rect x={432} y={125} width={7} height={16} rx={3} fill="#c2410c" />
            <rect x={443} y={127} width={7} height={16} rx={3} fill="#c2410c" />
            {/* fibras do fuso encurtando */}
            <line x1={425} y1={50} x2={436} y2={65} stroke="#fb923c" strokeWidth={1.2} />
            <line x1={425} y1={145} x2={436} y2={133} stroke="#fb923c" strokeWidth={1.2} />
            <line x1={475} y1={50} x2={450} y2={65} stroke="#fb923c" strokeWidth={1.2} />
            <line x1={475} y1={145} x2={450} y2={133} stroke="#fb923c" strokeWidth={1.2} />
            {/* setas indicando movimento */}
            <polygon points="438,52 444,52 441,45" fill="#c2410c" />
            <polygon points="438,148 444,148 441,155" fill="#c2410c" />
            <text x={450} y={185} textAnchor="middle" fontSize={13} fontWeight={700} fill="#c2410c">Anáfase</text>

            {/* Fase 4: Telófase */}
            <circle cx={635} cy={100} r={65} fill="#f0fdf4" stroke="#16a34a" strokeWidth={1.5} />
            {/* 2 núcleos se formando */}
            <ellipse cx={635} cy={72} rx={32} ry={22} fill="none" stroke="#16a34a" strokeWidth={1.5} strokeDasharray="4 2" />
            <ellipse cx={635} cy={128} rx={32} ry={22} fill="none" stroke="#16a34a" strokeWidth={1.5} strokeDasharray="4 2" />
            {/* cromossomos descondensando (curtos) */}
            <path d="M625 68 C622 71 628 74 625 77" stroke="#15803d" strokeWidth={2} fill="none" />
            <path d="M635 65 C632 68 638 71 635 74" stroke="#15803d" strokeWidth={2} fill="none" />
            <path d="M645 68 C642 71 648 74 645 77" stroke="#15803d" strokeWidth={2} fill="none" />
            <path d="M625 124 C622 127 628 130 625 133" stroke="#15803d" strokeWidth={2} fill="none" />
            <path d="M635 121 C632 124 638 127 635 130" stroke="#15803d" strokeWidth={2} fill="none" />
            <path d="M645 124 C642 127 648 130 645 133" stroke="#15803d" strokeWidth={2} fill="none" />
            {/* sinal de citocinese */}
            <line x1={605} y1={100} x2={665} y2={100} stroke="#16a34a" strokeWidth={2} strokeDasharray="6 3" />
            <text x={635} y={185} textAnchor="middle" fontSize={13} fontWeight={700} fill="#15803d">Telófase</text>
          </svg>
          <figcaption>
            As quatro fases da mitose: condensação cromossômica (prófase), alinhamento
            equatorial (metáfase), separação das cromátides-irmãs (anáfase) e reconstituição
            dos núcleos (telófase).
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fase</th>
                <th>Principais eventos</th>
                <th>Estado dos cromossomos</th>
                <th>Carioteca (env. nuclear)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Prófase</strong></td>
                <td>Condensação da cromatina; migração dos centrossomos; formação do fuso mitótico; desintegração do nucléolo</td>
                <td>Espiralizados e visíveis ao microscópio (cada um com 2 cromátides)</td>
                <td>Desfaz-se (cariólise)</td>
              </tr>
              <tr>
                <td><strong>Metáfase</strong></td>
                <td>Máxima condensação; cinetócoros conectados às fibras do fuso; alinhamento na placa equatorial; ponto de checagem do fuso</td>
                <td>Máxima condensação — ideal para cariótipo</td>
                <td>Ausente</td>
              </tr>
              <tr>
                <td><strong>Anáfase</strong></td>
                <td>Clivagem dos centrômeros; separação das cromátides-irmãs; encurtamento das fibras cinetocóricas; elongação celular</td>
                <td>Cromátides individuais migrando (agora chamadas de cromossomos-filhos)</td>
                <td>Ausente</td>
              </tr>
              <tr>
                <td><strong>Telófase</strong></td>
                <td>Chegada dos cromossomos aos polos; descondensação; reaparecimento do nucléolo; reorganização da carioteca</td>
                <td>Descondensando (cromatina difusa)</td>
                <td>Reconstitui-se ao redor de cada conjunto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Citocinese</span>

        <h2>5. Citocinese: Divisão do Citoplasma</h2>

        <p>
          Após a telófase, os dois núcleos estão formados, mas ainda habitam um
          único citoplasma. A <strong>citocinese</strong> divide efetivamente o
          citoplasma, completando a produção das duas células-filhas. O mecanismo
          difere fundamentalmente entre animais e vegetais, e essa diferença é
          consequência direta da presença ou ausência de <strong>parede
          celular</strong>.
        </p>

        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg viewBox="0 0 260 200" width="260" height="200" aria-label="Citocinese em célula animal - estrangulamento">
              {/* célula oval */}
              <ellipse cx={130} cy={100} r={100} ry={75} fill="#fff7ed" stroke="#ea580c" strokeWidth={2} />
              {/* 2 núcleos */}
              <ellipse cx={85} cy={100} r={35} ry={28} fill="#fed7aa" stroke="#c2410c" strokeWidth={1.5} />
              <ellipse cx={175} cy={100} r={35} ry={28} fill="#fed7aa" stroke="#c2410c" strokeWidth={1.5} />
              {/* anel contrátil - setas convergindo */}
              <path d="M130 45 C135 55, 125 55, 130 65" fill="none" stroke="#9a3412" strokeWidth={2.5} strokeDasharray="4 2" />
              <path d="M130 135 C135 145, 125 145, 130 155" fill="none" stroke="#9a3412" strokeWidth={2.5} strokeDasharray="4 2" />
              <polygon points="130,62 125,50 135,50" fill="#9a3412" />
              <polygon points="130,138 125,150 135,150" fill="#9a3412" />
              <text x={130} y={193} textAnchor="middle" fontSize={12} fontWeight={700} fill="#9a3412">Estrangulamento (centrípeto)</text>
            </svg>
            <figcaption>Célula animal: anel de actina-miosina constriciona do exterior para o centro.</figcaption>
          </figure>

          <figure className="lesson-figure">
            <svg viewBox="0 0 260 200" width="260" height="200" aria-label="Citocinese em célula vegetal - placa celular">
              {/* célula retangular (parede) */}
              <rect x={15} y={20} width={230} height={160} rx={6} fill="#f0fdf4" stroke="#15803d" strokeWidth={2.5} />
              {/* 2 núcleos */}
              <ellipse cx={75} cy={100} r={38} ry={28} fill="#bbf7d0" stroke="#16a34a" strokeWidth={1.5} />
              <ellipse cx={185} cy={100} r={38} ry={28} fill="#bbf7d0" stroke="#16a34a" strokeWidth={1.5} />
              {/* placa celular crescendo do centro */}
              <rect x={118} y={25} width={8} height={150} rx={3} fill="#16a34a" fillOpacity={0.5} />
              {/* setas apontando para fora */}
              <polygon points="116,32 110,42 122,42" fill="#15803d" />
              <polygon points="116,168 110,158 122,158" fill="#15803d" />
              <text x={130} y={193} textAnchor="middle" fontSize={12} fontWeight={700} fill="#15803d">Placa celular (centrífuga)</text>
            </svg>
            <figcaption>Célula vegetal: vesículas do complexo de Golgi fundem-se no centro e crescem para as bordas.</figcaption>
          </figure>
        </div>

        <div className="lesson-highlight">
          <h3>Por que as plantas não usam anel contrátil?</h3>
          <p>
            A rígida <strong>parede celular</strong> das células vegetais
            impede o estrangulamento da membrana plasmática de fora para dentro.
            Em vez disso, vesículas carregadas de pectina e celulose
            provenientes do <strong>complexo de Golgi</strong> se acumulam no
            plano equatorial e se fundem, formando a <strong>placa celular</strong>{" "}
            que cresce de forma centrífuga até a membrana plasmática. Esse
            processo origina a nova parede celular entre as células-filhas. Em
            algas e algumas briófitas, pode ocorrer variações desse mecanismo.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Diferenças Animais × Vegetais</span>

        <h2>6. Mitose em Células Animais versus Vegetais</h2>

        <p>
          Embora o processo mitótico seja fundamentalmente o mesmo em animais e
          plantas, algumas estruturas e mecanismos diferem de forma relevante
          para o ENEM:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🐹</span>
            <h3>Células animais — têm centríolos</h3>
            <p>
              Os <strong>centrossomos</strong> contêm um par de centríolos que
              se duplicam na fase S e migram para os polos na prófase,
              nucleando as fibras do fuso (mitose <em>cêntrica</em>). A
              citocinese ocorre por estrangulamento centrípeto.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Células vegetais — sem centríolos</h3>
            <p>
              Vegetais superiores <strong>não possuem centríolos</strong>, mas
              ainda formam o fuso mitótico a partir de regiões organizadoras de
              microtúbulos difusas no citoplasma (mitose <em>acêntrica</em>). A
              citocinese é centrífuga via placa celular.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Onde a mitose é mais intensa</h3>
            <p>
              Medula óssea vermelha, epitélio intestinal e de pele, meristemas
              apicais e laterais das plantas, e tecidos em regeneração ativa.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Célula animal</th>
                <th>Célula vegetal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Centríolos</td>
                <td>Presentes (par de centríolos por centrossomo)</td>
                <td>Ausentes na maioria</td>
              </tr>
              <tr>
                <td>Tipo de mitose</td>
                <td>Cêntrica</td>
                <td>Acêntrica</td>
              </tr>
              <tr>
                <td>Fuso mitótico</td>
                <td>Nucleado pelos ásteres dos centríolos</td>
                <td>Formado por regiões organizadoras difusas</td>
              </tr>
              <tr>
                <td>Citocinese</td>
                <td>Estrangulamento (centrípeto); anel de actina/miosina</td>
                <td>Placa celular (centrífuga); vesículas do Golgi</td>
              </tr>
              <tr>
                <td>Parede celular</td>
                <td>Ausente</td>
                <td>Presente; nova parede formada na citocinese</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Câncer</span>

        <h2>7. Quando o Controle Falha: Câncer e Divisão Desregulada</h2>

        <p>
          O câncer é, em essência, uma doença do ciclo celular. Surge quando
          mutações acumuladas em genes reguladores permitem que células se
          dividam de forma independente dos sinais normais de crescimento, sem
          respeitar os pontos de checagem e sem sofrer apoptose quando
          deveriam. Existem dois grupos principais de genes cujas mutações
          contribuem para o câncer:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Proto-oncogenes → Oncogenes</h3>
            <p>
              Em condições normais, proto-oncogenes estimulam a divisão
              celular em resposta a fatores de crescimento. Mutações
              <em>ativadoras</em> (ou amplificação) transformam-nos em
              <strong> oncogenes</strong> que sinalizam divisão permanente,
              sem precisar de estímulo externo. Ex.: <em>RAS</em>,{" "}
              <em>MYC</em>, <em>HER2</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>🛑</span>
            <h3>Genes supressores de tumor</h3>
            <p>
              Freiam a divisão ou promovem apoptose. Mutações{" "}
              <em>inativadoras</em> removem os "freios". Os mais importantes:
              <strong> p53</strong> (detecta dano ao DNA) e{" "}
              <strong>Rb</strong> (bloqueia o ponto de checagem G₁/S).
            </p>
          </div>

          <div className="lesson-card">
            <span>💊</span>
            <h3>Quimioterapia e radioterapia</h3>
            <p>
              Atuam em células de divisão rápida. Quimioterápicos danificam
              DNA ou bloqueiam o fuso mitótico. Os efeitos colaterais (queda
              de cabelo, náusea) ocorrem pois células normais de alta divisão
              também são atingidas.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Tumor benigno vs. maligno</h3>
          <p>
            Nem toda proliferação descontrolada é câncer no sentido estrito.
            Um <strong>tumor benigno</strong> cresce localmente, não invade
            tecidos vizinhos e não produz metástase — geralmente pode ser
            removido cirurgicamente com sucesso. Já um <strong>tumor
            maligno</strong> (carcinoma, sarcoma, linfoma etc.) invade tecidos
            adjacentes e pode liberar células que viajam pelo sangue ou linfa
            para colonizar órgãos distantes (<strong>metástase</strong>).
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 8 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Mitose × Meiose</span>

        <h2>8. Comparação: Mitose × Meiose</h2>

        <p>
          O ENEM frequentemente pede a comparação entre mitose e meiose —
          processos que compartilham fases com o mesmo nome (prófase, metáfase,
          anáfase, telófase), mas diferem profundamente em resultado e
          propósito. A tabela abaixo é o resumo mais eficiente para essa
          comparação:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Mitose</th>
                <th>Meiose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Número de divisões</td>
                <td>1</td>
                <td>2 (meiose I + meiose II)</td>
              </tr>
              <tr>
                <td>Células produzidas</td>
                <td>2 células-filhas</td>
                <td>4 células-filhas</td>
              </tr>
              <tr>
                <td>Ploidia das filhas</td>
                <td>2n (diploide)</td>
                <td>n (haploide)</td>
              </tr>
              <tr>
                <td>Identidade genética</td>
                <td>Idênticas à célula-mãe</td>
                <td>Geneticamente diferentes (recombinação + segregação)</td>
              </tr>
              <tr>
                <td>Crossing-over</td>
                <td>Não ocorre</td>
                <td>Ocorre na prófase I (quiasmas)</td>
              </tr>
              <tr>
                <td>Pareamento de homólogos</td>
                <td>Não ocorre</td>
                <td>Ocorre na prófase I (bivalentes)</td>
              </tr>
              <tr>
                <td>Onde ocorre (humanos)</td>
                <td>Células somáticas</td>
                <td>Gônadas (células germinativas)</td>
              </tr>
              <tr>
                <td>Finalidade</td>
                <td>Crescimento, reparo, renovação, reprodução assexuada</td>
                <td>Formação de gametas; variabilidade genética</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Atenção à pegadinha clássica:</strong> a meiose NÃO
            produz gametas diretamente em todos os organismos. Nos animais
            machos, a meiose produz espermátides que passam por{" "}
            <strong>espermiogênese</strong> (diferenciação, sem divisão) para
            formar espermatozoides. Nos animais fêmeas, somente 1 das 4 células
            se torna um óvulo funcional; as outras 3 são corpúsculos polares
            que se degeneram. Em plantas, os produtos da meiose são esporos,
            não gametas diretamente.
          </p>
        </div>
      </section>

      {/* ===== EXERCÍCIOS ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — Ciclo Celular e Mitose</h2>

        <Exercise
          level="Básico"
          title="1. Fase de duplicação do DNA"
          statement={
            <p>
              Em qual fase do ciclo celular ocorre a replicação do DNA, fazendo
              com que o conteúdo genético da célula dobre de C para 2C (de 2C
              para 4C em uma célula diploide)?
            </p>
          }
          options={[
            { letter: "a", text: "G₁ — primeiro intervalo" },
            { letter: "b", text: "S — fase de síntese", correct: true },
            { letter: "c", text: "G₂ — segundo intervalo" },
            { letter: "d", text: "Metáfase — durante a mitose" },
          ]}
          resolution={
            <p>
              A fase <strong>S</strong> (síntese) é o único momento do ciclo
              celular em que o DNA é replicado. Cada cromossomo, antes constituído
              por uma única cromátide, passa a ter duas cromátides-irmãs unidas
              pelo centrômero. As demais fases (G₁, G₂ e mitose) não incluem
              síntese de DNA — G₁ e G₂ são períodos de crescimento e preparação
              proteica.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Resultado final da mitose"
          statement={
            <p>
              Uma célula somática humana com 2n = 46 cromossomos completa uma
              mitose com citocinese. Qual é o resultado esperado em termos de
              número de células, ploidia e identidade genética?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "4 células, cada uma com n = 23, geneticamente variadas",
            },
            {
              letter: "b",
              text: "2 células, cada uma com 2n = 46, geneticamente idênticas à célula-mãe",
              correct: true,
            },
            {
              letter: "c",
              text: "2 células, cada uma com n = 23, geneticamente idênticas entre si",
            },
            {
              letter: "d",
              text: "4 células, cada uma com 2n = 46, geneticamente idênticas",
            },
          ]}
          resolution={
            <p>
              A mitose é uma <strong>divisão equacional</strong>: produz{" "}
              <strong>2 células-filhas</strong> com o mesmo número cromossômico da
              célula-mãe (2n = 46) e geneticamente idênticas a ela e entre si. Não
              há redução do número cromossômico (isso ocorre na meiose I) nem
              recombinação genética. O resultado "4 células haploides" descreve o
              resultado final da meiose, não da mitose.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Ponto de checagem e gene p53"
          statement={
            <p>
              Pesquisadores observaram que células com mutação inativadora no gene
              <em> TP53</em> continuam se dividindo mesmo após exposição a agentes
              que danificam o DNA. A melhor explicação para esse comportamento é:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O p53 mutado acelera a fase S, duplicando o DNA mais rapidamente",
            },
            {
              letter: "b",
              text: "Sem p53 funcional, o ponto de checagem G₁/S não é ativado adequadamente, permitindo que células com DNA danificado avancem no ciclo e se dividam",
              correct: true,
            },
            {
              letter: "c",
              text: "A mutação em TP53 aumenta a produção de ciclinas, acelerando todos os pontos de checagem",
            },
            {
              letter: "d",
              text: "O p53 mutado inibe a apoptose ao aumentar a transcrição de genes antiapoptóticos",
            },
          ]}
          resolution={
            <>
              <p>
                O <strong>p53</strong> é um fator de transcrição que, em resposta
                a dano no DNA, ativa a expressão de <em>p21</em> — um inibidor de
                CDK que bloqueia o complexo ciclina D / CDK4 responsável por liberar
                a célula do ponto de checagem G₁/S. Sem p53 funcional, esse bloqueio
                não ocorre: células com DNA danificado cruzam o ponto de checagem e
                continuam se dividindo.
              </p>
              <p>
                Além disso, p53 pode induzir apoptose pela via mitocondrial
                (upregulation de <em>BAX</em>, downregulation de <em>BCL-2</em>).
                A alternativa D está parcialmente correta no raciocínio inverso, mas
                não explica por que as células <em>continuam se dividindo</em> — que
                é a falha no checkpoint, não apenas a supressão da apoptose.
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Quimioterapia e tecidos saudáveis (ENEM)"
          statement={
            <p>
              Durante o tratamento quimioterápico de um paciente com leucemia, a
              médica explicou que o medicamento utilizado inibe a polimerização dos
              microtúbulos do fuso mitótico. Além de destruir as células
              cancerosas, o tratamento causou queda de cabelo, feridas na boca e
              náuseas. A ocorrência desses efeitos colaterais é explicada porque:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O medicamento danifica exclusivamente os núcleos das células leucêmicas, liberando substâncias tóxicas",
            },
            {
              letter: "b",
              text: "Células de divisão rápida em tecidos saudáveis (folículo piloso, epitélio intestinal e bucal) também dependem do fuso mitótico e são igualmente afetadas pelo fármaco",
              correct: true,
            },
            {
              letter: "c",
              text: "As células do cabelo e do intestino têm o mesmo marcador molecular das células leucêmicas",
            },
            {
              letter: "d",
              text: "O sistema imunológico reconhece o medicamento como um patógeno e ataca os tecidos de renovação lenta",
            },
          ]}
          resolution={
            <p>
              O princípio da quimioterapia com inibidores do fuso (como taxanos e
              alcaloides da vinca) é atacar células em divisão ativa. Como células
              cancerosas se dividem mais rapidamente do que a maioria das células
              normais, elas são preferencialmente atingidas. Contudo, tecidos com
              alta taxa de renovação — <strong>folículos pilosos</strong> (queda de
              cabelo), <strong>epitélio intestinal</strong> (náuseas, diarreia) e{" "}
              <strong>mucosa bucal</strong> (mucosite) — também precisam do fuso
              mitótico para se renovar e são afetados pelos mesmos fármacos,
              resultando nos efeitos colaterais descritos.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Regeneração hepática e reentrada em G₀"
          statement={
            <p>
              Em cirurgias de doadores vivos de fígado, remove-se até 60% do órgão
              do doador. Estudos mostram que o fígado remanescente se regenera
              completamente em 6–8 semanas, pois os hepatócitos adultos — que
              normalmente estão em G₀ — reentram no ciclo celular e se dividem
              até restaurar a massa original. Com base nesse fenômeno e nos
              conceitos de ciclo celular, é correto afirmar que:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Hepatócitos em G₀ são células mortas que precisam ser substituídas por células-tronco importadas da medula óssea",
            },
            {
              letter: "b",
              text: "G₀ é um estado permanente e irreversível; portanto, a regeneração hepática não envolve mitose, mas sim hipertrofia celular",
            },
            {
              letter: "c",
              text: "A reentrada em G₁ é desencadeada por fatores de crescimento liberados após a hepatectomia, mostrando que G₀ é reversível em hepatócitos e que a mitose é o mecanismo de regeneração",
              correct: true,
            },
            {
              letter: "d",
              text: "A regeneração ocorre porque o fígado é o único órgão capaz de realizar meiose em células somáticas",
            },
          ]}
          resolution={
            <p>
              A fase <strong>G₀</strong> é um estado de quiescência fora do ciclo,
              e não significa que a célula perdeu a capacidade de se dividir. Em
              hepatócitos, após hepatectomia parcial, a redução da massa hepática
              provoca aumento na concentração de fatores de crescimento
              (especialmente <strong>HGF</strong> — fator de crescimento de
              hepatócitos) que ativam receptores e cascatas de sinalização
              intracelular. Isso resulta na síntese de ciclina D, formação do
              complexo ciclina D/CDK4, fosforilação da proteína Rb e liberação do
              fator de transcrição E2F — que impulsiona a célula de G₀ de volta a
              G₁ e posteriormente para S. G₀ é, portanto, reversível em hepatócitos
              (ao contrário de neurônios adultos, onde é praticamente irreversível).
            </p>
          }
        />
      </section>
    </article>
  );
}
