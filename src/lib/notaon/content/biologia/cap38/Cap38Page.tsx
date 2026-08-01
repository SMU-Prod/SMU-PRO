"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap38Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 38</span>

          <h1>Histologia e Fisiologia dos Tecidos Musculares e do Tecido Nervoso</h1>

          <p>
            Dois dos tecidos mais especializados do corpo animal — o{" "}
            <strong>muscular</strong> e o <strong>nervoso</strong> — são
            responsáveis por toda movimentação, coordenação e comunicação do
            organismo. Neste capítulo você vai dominar a histologia dos três
            tipos de músculo, o mecanismo molecular da contração (actina,
            miosina, Ca²⁺ e ATP), a anatomia funcional do neurônio, o
            mecanismo iônico do potencial de ação e a comunicação sináptica
            — temas altamente recorrentes no ENEM e nos principais
            vestibulares do Brasil.
          </p>
        </div>
      </section>

      {/* ================================================================
          SEÇÃO 1 — Visão Geral do Tecido Muscular
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Histologia</span>

        <h2>1. Visão Geral do Tecido Muscular</h2>

        <p>
          O <strong>tecido muscular</strong> é formado por células altamente
          diferenciadas chamadas <strong>fibras musculares</strong> (ou
          miócitos), cujo citoplasma recebe o nome de{" "}
          <strong>sarcoplasma</strong> e a membrana plasmática é chamada de{" "}
          <strong>sarcolema</strong>. Essas células são ricas em{" "}
          <strong>miofibrilas</strong> — estruturas filamentosas compostas pelas
          proteínas contráteis actina e miosina — e em mitocôndrias, pois a
          contração é um processo de altíssimo custo energético.
        </p>

        <p>
          O tecido muscular apresenta quatro propriedades funcionais
          fundamentais: <strong>excitabilidade</strong> (responde a estímulos
          elétricos, químicos ou mecânicos), <strong>contratilidade</strong>{" "}
          (encurta-se ativamente), <strong>extensibilidade</strong> (pode ser
          estirado além do comprimento de repouso) e{" "}
          <strong>elasticidade</strong> (retorna ao comprimento original após o
          estiramento). Juntas, essas propriedades permitem desde o piscar de
          olhos até os poderosos movimentos do coração.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏃</span>
            <h3>Estriado Esquelético</h3>
            <p>
              Voluntário, multinucleado, organizado em sarcômeros. Responsável
              pela locomoção e postura.
            </p>
          </div>

          <div className="lesson-card">
            <span>❤️</span>
            <h3>Estriado Cardíaco</h3>
            <p>
              Involuntário, com 1–2 núcleos centrais e discos intercalares.
              Exclusivo do miocárdio.
            </p>
          </div>

          <div className="lesson-card">
            <span>🫁</span>
            <h3>Liso (Visceral)</h3>
            <p>
              Involuntário, fusiforme, sem estriações. Presente em vísceras,
              vasos e pele.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          SEÇÃO 2 — Detalhamento dos 3 Tipos de Músculo
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação Detalhada</span>

        <h2>2. Os Três Tipos de Tecido Muscular em Detalhe</h2>

        <p>
          Cada tipo de músculo possui características histológicas e
          fisiológicas próprias, adaptadas à sua função específica no
          organismo.
        </p>

        <div className="lesson-highlight">
          <h3>Músculo estriado esquelético</h3>
          <p>
            É o músculo da locomoção, respiração (diafragma), deglutição e
            expressões faciais. Suas fibras são <strong>cilíndricas</strong>,
            muito longas (podem medir vários centímetros) e possuem{" "}
            <strong>múltiplos núcleos periféricos</strong>, resultado da fusão
            de células precursoras (mioblastos) durante o desenvolvimento
            embrionário. Ao microscópio, apresenta um padrão regular de{" "}
            <strong>bandas claras (banda I)</strong> e{" "}
            <strong>bandas escuras (banda A)</strong> — as estriações — decorrentes
            da organização precisa das fileiras de actina e miosina no
            sarcômero. O controle é <strong>somático voluntário</strong>:
            neurônios motores somáticos fazem sinapse na{" "}
            <strong>junção neuromuscular</strong> (placa motora), liberando
            acetilcolina.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Músculo estriado cardíaco</h3>
          <p>
            Forma o <strong>miocárdio</strong>. Suas células (cardiomiócitos)
            são <strong>ramificadas</strong>, possuem{" "}
            <strong>1 ou 2 núcleos centrais</strong> e são interligadas por
            junções especiais chamadas <strong>discos intercalares</strong>.
            Esses discos contêm desmossomos (resistência mecânica) e{" "}
            <strong>junções comunicantes (gap junctions)</strong> que permitem
            a passagem direta de íons entre cardiomiócitos vizinhos, gerando
            uma contração sincronizada em todo o coração sem necessidade de
            inervação individual. Outro aspecto singular é o{" "}
            <strong>automatismo</strong>: o nó sinoatrial (marcapasso natural)
            gera impulsos espontâneos, tornando o coração capaz de bater
            mesmo isolado do corpo.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Músculo liso</h3>
          <p>
            Presente nas paredes do tubo digestório, vasos sanguíneos, bexiga,
            útero, brônquios e íris. Cada célula é{" "}
            <strong>fusiforme</strong> (afunilada nas extremidades), com{" "}
            <strong>núcleo único e central</strong>, e{" "}
            <strong>sem estriações</strong> — pois actina e miosina estão
            dispostas de forma menos regular, em ângulo oblíquo. A contração é{" "}
            <strong>involuntária</strong>, lenta, sustentada e resistente à
            fadiga, controlada pelo sistema nervoso autônomo, hormônios (ex.:
            ocitocina no útero) e estiramentos locais. O músculo liso uterino,
            por exemplo, é fundamental no trabalho de parto.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Estriado Esquelético</th>
                <th>Estriado Cardíaco</th>
                <th>Liso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Localização</td>
                <td>Ligado a ossos e pele</td>
                <td>Miocárdio</td>
                <td>Vísceras, vasos, pele</td>
              </tr>
              <tr>
                <td>Estriações</td>
                <td>Sim</td>
                <td>Sim</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>Núcleos por célula</td>
                <td>Vários (periféricos)</td>
                <td>1–2 (centrais)</td>
                <td>1 (central)</td>
              </tr>
              <tr>
                <td>Controle</td>
                <td>Voluntário</td>
                <td>Involuntário</td>
                <td>Involuntário</td>
              </tr>
              <tr>
                <td>Velocidade de contração</td>
                <td>Rápida</td>
                <td>Moderada e rítmica</td>
                <td>Lenta e sustentada</td>
              </tr>
              <tr>
                <td>Discos intercalares</td>
                <td>Não</td>
                <td>Sim</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>Sarcômeros visíveis</td>
                <td>Sim</td>
                <td>Sim</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>Capacidade regenerativa</td>
                <td>Moderada (células-satélite)</td>
                <td>Muito baixa</td>
                <td>Alta</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Figura SVG: 3 tipos de músculo comparados */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 760 220" width="760" height="220" aria-label="Comparação histológica dos três tipos de músculo">
            {/* Painel 1: Estriado Esquelético */}
            <rect x={10} y={10} width={230} height={200} rx={10} fill="#eff6ff" stroke="#93c5fd" strokeWidth={1.5} />
            <text x={125} y={32} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e40af">Estriado Esquelético</text>
            {/* fibra longa com estriações */}
            {[0,1,2,3,4].map((i) => (
              <rect key={i} x={25 + i * 40} y={50} width={18} height={110} rx={2} fill="#93c5fd" opacity={0.6} />
            ))}
            {[0,1,2,3,4].map((i) => (
              <rect key={i} x={43 + i * 40} y={50} width={22} height={110} rx={2} fill="#bfdbfe" opacity={0.5} />
            ))}
            {/* núcleos periféricos */}
            {[0,1,2].map((i) => (
              <ellipse key={i} cx={60 + i * 60} cy={54} rx={10} ry={5} fill="#1e40af" opacity={0.7} />
            ))}
            <text x={125} y={180} textAnchor="middle" fontSize={10} fill="#1e40af">Multinucleada · Voluntária</text>
            <text x={125} y={196} textAnchor="middle" fontSize={10} fill="#1e40af">Estriações regulares</text>

            {/* Painel 2: Cardíaco */}
            <rect x={265} y={10} width={230} height={200} rx={10} fill="#fff7ed" stroke="#fdba74" strokeWidth={1.5} />
            <text x={380} y={32} textAnchor="middle" fontSize={13} fontWeight={700} fill="#c2410c">Estriado Cardíaco</text>
            {/* células ramificadas */}
            <path d="M 290 90 L 340 90 L 360 70 L 400 70 L 420 90 L 470 90" fill="none" stroke="#fb923c" strokeWidth={14} strokeLinecap="round" />
            <path d="M 360 70 L 380 50" fill="none" stroke="#fb923c" strokeWidth={14} strokeLinecap="round" />
            <path d="M 400 70 L 420 50" fill="none" stroke="#fb923c" strokeWidth={14} strokeLinecap="round" />
            {/* discos intercalares */}
            <line x1={340} y1={78} x2={340} y2={102} stroke="#7c2d12" strokeWidth={2.5} />
            <line x1={420} y1={78} x2={420} y2={102} stroke="#7c2d12" strokeWidth={2.5} />
            {/* núcleos centrais */}
            <ellipse cx={380} cy={90} rx={8} ry={5} fill="#7c2d12" opacity={0.8} />
            <text x={380} y={140} textAnchor="middle" fontSize={10} fill="#c2410c">1–2 núcleos centrais</text>
            <text x={380} y={158} textAnchor="middle" fontSize={9.5} fill="#c2410c">Discos intercalares (|)</text>
            <text x={380} y={180} textAnchor="middle" fontSize={10} fill="#c2410c">Involuntária · Automática</text>

            {/* Painel 3: Liso */}
            <rect x={520} y={10} width={230} height={200} rx={10} fill="#f0fdf4" stroke="#86efac" strokeWidth={1.5} />
            <text x={635} y={32} textAnchor="middle" fontSize={13} fontWeight={700} fill="#15803d">Liso</text>
            {/* células fusiformes */}
            {[0,1,2,3].map((i) => (
              <ellipse key={i} cx={635} cy={60 + i * 36} rx={55} ry={13} fill="#4ade80" opacity={0.45} stroke="#16a34a" strokeWidth={1} />
            ))}
            {/* núcleos centrais */}
            {[0,1,2,3].map((i) => (
              <ellipse key={i} cx={635} cy={60 + i * 36} rx={9} ry={4.5} fill="#15803d" opacity={0.8} />
            ))}
            <text x={635} y={210} textAnchor="middle" fontSize={10} fill="#15803d">Fusiforme · Sem estriações</text>
          </svg>
          <figcaption>
            Representação esquemática comparativa dos três tipos de tecido muscular: estriado esquelético (azul), estriado cardíaco (laranja) e liso (verde). Os traços verticais escuros no cardíaco indicam os discos intercalares.
          </figcaption>
        </figure>
      </section>

      {/* ================================================================
          SEÇÃO 3 — Mecanismo da Contração Muscular
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Bioquímica da Contração</span>

        <h2>3. Mecanismo Molecular da Contração Muscular</h2>

        <p>
          A contração muscular ocorre pela <strong>teoria do deslizamento dos
          filamentos</strong>, proposta por Hugh Huxley e Andrew Huxley em
          1954. Nesse modelo, os filamentos de actina e miosina{" "}
          <strong>não se encurtam</strong>, mas <strong>deslizam uns sobre
          os outros</strong>, diminuindo o comprimento do sarcômero — a
          unidade funcional da miofibrila, delimitada entre duas linhas Z
          consecutivas.
        </p>

        <div className="lesson-highlight">
          <h3>O papel do Ca²⁺ e do ATP</h3>
          <p>
            O cálcio (Ca²⁺) é o íon-gatilho da contração. Em repouso, a
            proteína <strong>tropomiosina</strong> bloqueia os sítios de ligação
            da miosina nos filamentos de actina. Quando um potencial de ação
            chega ao sarcolema, ele se propaga pelos <strong>túbulos T</strong>{" "}
            até o retículo sarcoplasmático, que libera Ca²⁺ no sarcoplasma.
            O Ca²⁺ se liga à <strong>troponina</strong>, que desloca a
            tropomiosina, expondo os sítios ativos da actina. As cabeças de
            miosina se ligam à actina, formando as <strong>pontes cruzadas
            (cross-bridges)</strong>, e usando a energia do ATP realizam o{" "}
            <strong>golpe de força</strong> (power stroke), puxando os
            filamentos de actina em direção ao centro do sarcômero.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Ciclo da ponte cruzada (resumo)</h3>
          <p>
            <strong>1.</strong> A cabeça de miosina hidrolisa ATP → ADP + Pi,
            ficando em posição de alta energia.{" "}
            <strong>2.</strong> A cabeça se liga à actina (ponte cruzada).{" "}
            <strong>3.</strong> Pi é liberado → golpe de força: cabeça inclina
            ~45° arrastando o filamento de actina.{" "}
            <strong>4.</strong> ADP é liberado; nova molécula de ATP se liga,
            desacoplando a cabeça.{" "}
            <strong>5.</strong> O ciclo recomeça enquanto Ca²⁺ estiver
            disponível. Sem ATP (ex.: após a morte), as pontes cruzadas
            permanecem presas — é o <strong>rigor mortis</strong>.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Componente</th>
                <th>Papel na contração</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Actina (filamento fino)</td>
                <td>Trilho sobre o qual a miosina desliza; possui sítios ativos</td>
              </tr>
              <tr>
                <td>Miosina (filamento grosso)</td>
                <td>Motor molecular; suas cabeças hidrolisam ATP e realizam o golpe de força</td>
              </tr>
              <tr>
                <td>Tropomiosina</td>
                <td>Proteína reguladora que bloqueia os sítios ativos da actina em repouso</td>
              </tr>
              <tr>
                <td>Troponina</td>
                <td>Liga-se ao Ca²⁺ e desloca a tropomiosina, liberando os sítios ativos</td>
              </tr>
              <tr>
                <td>Ca²⁺</td>
                <td>Íon-gatilho; liberado pelo retículo sarcoplasmático mediante estímulo nervoso</td>
              </tr>
              <tr>
                <td>ATP</td>
                <td>Fonte de energia para o golpe de força e para o desacoplamento das pontes</td>
              </tr>
              <tr>
                <td>Bomba Ca²⁺-ATPase</td>
                <td>Recapta o Ca²⁺ para o retículo sarcoplasmático, provocando relaxamento</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================================================================
          SEÇÃO 4 — Tecido Nervoso: Neurônio
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Neurociência</span>

        <h2>4. Tecido Nervoso e a Estrutura do Neurônio</h2>

        <p>
          O <strong>tecido nervoso</strong> é o tecido de maior complexidade
          funcional do reino animal. É composto por dois grandes grupos de
          células: os <strong>neurônios</strong> (responsáveis pela geração e
          condução de sinais elétricos) e as{" "}
          <strong>células da glia</strong> (células de suporte, nutrição e
          proteção). No sistema nervoso humano, existem cerca de 86 bilhões
          de neurônios, cada um podendo fazer até 10.000 conexões com outros
          neurônios.
        </p>

        <p>
          O neurônio é uma célula altamente polarizada, dividida em três
          regiões funcionais. Os{" "}
          <strong>dendritos</strong> são prolongamentos curtos e ramificados
          que recebem sinais de outros neurônios ou de receptores sensoriais.
          O <strong>corpo celular</strong> (pericário ou soma) contém o núcleo
          e a maioria das organelas, sendo responsável pelo metabolismo e pela
          integração dos sinais recebidos. O <strong>axônio</strong> é um
          prolongamento único e longo que conduz o impulso nervoso a partir do
          cone de implantação (zona de gatilho) até os terminais axônicos,
          onde ocorre a liberação de neurotransmissores.
        </p>

        {/* Figura SVG: Neurônio rotulado */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 760 200" width="760" height="200" aria-label="Estrutura de um neurônio mielinizado com rótulos">
            {/* Dendritos */}
            <line x1={60} y1={100} x2={110} y2={100} stroke="#6366f1" strokeWidth={3} />
            <line x1={60} y1={80} x2={105} y2={95} stroke="#6366f1" strokeWidth={2} />
            <line x1={55} y1={120} x2={105} y2={105} stroke="#6366f1" strokeWidth={2} />
            <line x1={40} y1={70} x2={90} y2={88} stroke="#6366f1" strokeWidth={1.5} />
            <line x1={38} y1={130} x2={88} y2={112} stroke="#6366f1" strokeWidth={1.5} />
            <text x={42} y={60} textAnchor="middle" fontSize={11} fill="#4338ca" fontWeight={600}>Dendritos</text>

            {/* Corpo celular */}
            <circle cx={140} cy={100} r={30} fill="#e0e7ff" stroke="#4338ca" strokeWidth={2} />
            <circle cx={140} cy={100} r={12} fill="#a5b4fc" stroke="#4338ca" strokeWidth={1.5} />
            <text x={140} y={104} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1e1b4b">núcleo</text>
            <text x={140} y={148} textAnchor="middle" fontSize={11} fill="#4338ca" fontWeight={600}>Corpo celular</text>

            {/* Cone de implantação */}
            <path d="M 170 100 L 195 97 L 195 103 Z" fill="#f59e0b" />

            {/* Axônio */}
            <line x1={195} y1={100} x2={650} y2={100} stroke="#1d4ed8" strokeWidth={4} />

            {/* Bainha de mielina (segmentos) */}
            {[200, 260, 320, 380, 440, 500, 560].map((x) => (
              <rect key={x} x={x} y={89} width={50} height={22} rx={4} fill="#fde68a" stroke="#d97706" strokeWidth={1} opacity={0.85} />
            ))}

            {/* Nódulos de Ranvier */}
            {[250, 310, 370, 430, 490, 550].map((x) => (
              <line key={x} x1={x} y1={92} x2={x} y2={108} stroke="#dc2626" strokeWidth={2.5} />
            ))}

            {/* Rótulos */}
            <text x={330} y={80} textAnchor="middle" fontSize={11} fill="#b45309" fontWeight={600}>Bainha de mielina</text>
            <text x={430} y={125} textAnchor="middle" fontSize={10} fill="#dc2626">Nódulo de Ranvier</text>
            <line x1={370} y1={122} x2={370} y2={110} stroke="#dc2626" strokeWidth={1} />

            {/* Célula de Schwann rótulo */}
            <text x={225} y={72} textAnchor="middle" fontSize={10} fill="#92400e">Célula de Schwann</text>
            <line x1={225} y1={75} x2={225} y2={89} stroke="#92400e" strokeWidth={1} />

            {/* Terminais axônicos */}
            {[0, 1, 2].map((i) => (
              <line key={i} x1={650} y1={100} x2={680 + i * 8} y2={78 + i * 22} stroke="#1d4ed8" strokeWidth={2.5} strokeLinecap="round" />
            ))}
            {[0, 1, 2].map((i) => (
              <circle key={i} cx={682 + i * 8} cy={76 + i * 22} r={5} fill="#0ea5e9" />
            ))}
            <text x={695} y={100} textAnchor="start" fontSize={11} fill="#075985" fontWeight={600}>Terminais</text>
            <text x={695} y={113} textAnchor="start" fontSize={11} fill="#075985" fontWeight={600}>axônicos</text>

            {/* Seta direcional */}
            <defs>
              <marker id="arrow38" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#1d4ed8" />
              </marker>
            </defs>
            <line x1={200} y1={170} x2={640} y2={170} stroke="#1d4ed8" strokeWidth={1.5} strokeDasharray="6 4" markerEnd="url(#arrow38)" />
            <text x={420} y={185} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#1d4ed8">direção do impulso nervoso</text>
          </svg>
          <figcaption>
            Neurônio mielinizado típico com seus principais componentes identificados. Os segmentos amarelos representam a bainha de mielina formada pelas células de Schwann; os traços vermelhos indicam os nódulos de Ranvier, onde o impulso "salta" (condução saltatória).
          </figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Dendritos</h3>
            <p>
              Ramificações receptoras que aumentam a área de captura de sinais;
              conduzem o impulso em direção ao corpo celular.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧠</span>
            <h3>Corpo Celular (Soma)</h3>
            <p>
              Centro metabólico; integra os sinais excitatórios e inibitórios
              recebidos pelos dendritos.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚡</span>
            <h3>Axônio</h3>
            <p>
              Prolongamento único que conduz o potencial de ação do cone de
              implantação até os terminais sinápticos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧈</span>
            <h3>Bainha de Mielina</h3>
            <p>
              Envoltório lipídico produzido pelas células de Schwann (SNP) ou
              oligodendrócitos (SNC); isola e acelera a condução.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔴</span>
            <h3>Nódulos de Ranvier</h3>
            <p>
              Interrupções periódicas da bainha de mielina onde o potencial de
              ação se regenera, permitindo a condução saltatória.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Células de Schwann</h3>
            <p>
              Células da glia do SNP que enrolam o axônio formando a mielina;
              essenciais na regeneração nervosa periférica.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          SEÇÃO 5 — Células da Glia
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Células de Suporte</span>

        <h2>5. Células da Glia</h2>

        <p>
          As <strong>células da glia</strong> (do grego <em>glia</em> = cola)
          superam os neurônios em número: para cada neurônio há
          aproximadamente 10 células gliais. Longe de serem meras células de
          suporte passivo, participam ativamente da formação e manutenção das
          sinapses, da barreira hematoencefálica, da resposta imune do SNC e
          da regeneração nervosa.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Célula Glial</th>
                <th>Local</th>
                <th>Função Principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Astrócitos</strong></td>
                <td>SNC</td>
                <td>Nutrição, suporte estrutural, barreira hematoencefálica, recaptação de neurotransmissores</td>
              </tr>
              <tr>
                <td><strong>Oligodendrócitos</strong></td>
                <td>SNC</td>
                <td>Produção de mielina no encéfalo e medula; um oligodendrócito pode mielinizar múltiplos axônios</td>
              </tr>
              <tr>
                <td><strong>Micróglia</strong></td>
                <td>SNC</td>
                <td>Macrófagos residentes do SNC; fagocitam detritos e patógenos; ativação em inflamação</td>
              </tr>
              <tr>
                <td><strong>Células ependimárias</strong></td>
                <td>SNC</td>
                <td>Revestem ventrículos cerebrais e canal central da medula; produzem LCR</td>
              </tr>
              <tr>
                <td><strong>Células de Schwann</strong></td>
                <td>SNP</td>
                <td>Produção de mielina; auxiliam na regeneração de axônios periféricos lesados</td>
              </tr>
              <tr>
                <td><strong>Células satélites</strong></td>
                <td>SNP</td>
                <td>Envolvem os corpos celulares nos gânglios; regulam o microambiente iônico</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>ENEM cobra:</strong> doenças desmielinizantes como a{" "}
            <strong>Esclerose Múltipla</strong> (destruição de oligodendrócitos
            pelo próprio sistema imune) e a{" "}
            <strong>Síndrome de Guillain-Barré</strong> (ataque às células de
            Schwann) exemplificam a importância crítica da mielina para a
            transmissão nervosa. Pacientes perdem progressivamente força,
            sensibilidade e coordenação motora.
          </p>
        </div>
      </section>

      {/* ================================================================
          SEÇÃO 6 — Impulso Nervoso e Potencial de Ação
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Eletrofisiologia</span>

        <h2>6. Potencial de Repouso, Potencial de Ação e Condução Saltatória</h2>

        <p>
          A comunicação pelo sistema nervoso se baseia na capacidade dos
          neurônios de gerar e propagar variações no potencial elétrico da
          membrana — o chamado <strong>potencial de ação</strong>.
        </p>

        <div className="lesson-highlight">
          <h3>Potencial de repouso (–70 mV)</h3>
          <p>
            Em repouso, o interior do neurônio é{" "}
            <strong>negativamente carregado</strong> em relação ao exterior
            (–70 mV). Esse gradiente é mantido pela{" "}
            <strong>bomba Na⁺/K⁺-ATPase</strong>, que expulsa ativamente 3
            íons Na⁺ para fora e introduz 2 íons K⁺ para dentro, a cada
            ciclo, consumindo ATP. O resultado é alta concentração de Na⁺
            extracelular e alta concentração de K⁺ intracelular. A membrana
            em repouso é relativamente impermeável ao Na⁺ mas permeável ao
            K⁺, que vaza para fora levando carga positiva — deixando o
            interior negativo.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Potencial de ação — as quatro fases</h3>
          <p>
            <strong>1. Repouso (–70 mV):</strong> canais de Na⁺ e K⁺
            dependentes de voltagem estão fechados.{" "}
            <strong>2. Despolarização:</strong> um estímulo limiar abre canais
            de Na⁺, que entra rapidamente → interior sobe até +35 mV.{" "}
            <strong>3. Repolarização:</strong> canais de Na⁺ se inativam;
            canais de K⁺ se abrem → K⁺ sai → potencial volta a negativo.{" "}
            <strong>4. Hiperpolarização (pós-potencial negativo):</strong>{" "}
            canais de K⁺ fecham lentamente → potencial vai levemente abaixo
            de –70 mV antes de retornar ao repouso. Após o pico, há o{" "}
            <strong>período refratário absoluto</strong> (nenhum novo
            potencial de ação pode ser gerado), que garante a propagação
            unidirecional do impulso.
          </p>
        </div>

        {/* Figura SVG: Gráfico potencial de ação */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 580 230" width="580" height="230" aria-label="Gráfico do potencial de ação: voltagem em função do tempo">
            {/* Eixos */}
            <line x1={55} y1={20} x2={55} y2={195} stroke="#374151" strokeWidth={1.8} />
            <line x1={55} y1={195} x2={555} y2={195} stroke="#374151" strokeWidth={1.8} />

            {/* Labels dos eixos */}
            <text x={20} y={110} textAnchor="middle" fontSize={12} fill="#374151" fontWeight={600} transform="rotate(-90,20,110)">Voltagem (mV)</text>
            <text x={550} y={210} textAnchor="end" fontSize={12} fill="#374151">tempo (ms)</text>

            {/* Linhas de referência */}
            <line x1={50} y1={195} x2={555} y2={195} stroke="#9ca3af" strokeWidth={0.8} strokeDasharray="3 3" />
            {/* –70 mV = y 175 ; 0 mV = y 130 ; +35 mV = y 75 */}
            <line x1={50} y1={130} x2={555} y2={130} stroke="#9ca3af" strokeWidth={0.8} strokeDasharray="3 3" />
            <line x1={50} y1={75} x2={555} y2={75} stroke="#9ca3af" strokeWidth={0.8} strokeDasharray="3 3" />

            <text x={45} y={178} textAnchor="end" fontSize={10} fill="#6b7280">–70 mV</text>
            <text x={45} y={134} textAnchor="end" fontSize={10} fill="#6b7280">0 mV</text>
            <text x={45} y={79} textAnchor="end" fontSize={10} fill="#6b7280">+35 mV</text>

            {/* Curva do potencial de ação */}
            {/* Repouso → disparo → pico → repolarização → hiperpolarização → repouso */}
            <path
              d="M 55 175 L 130 175 C 155 175 160 72 185 72 C 210 72 215 185 240 185 C 260 185 265 195 290 195 C 320 195 340 175 360 175 L 555 175"
              fill="none"
              stroke="#dc2626"
              strokeWidth={2.8}
            />

            {/* Anotações das fases */}
            <text x={95} y={165} textAnchor="middle" fontSize={10} fill="#374151">Repouso</text>

            {/* Seta + label para despolarização */}
            <text x={168} y={60} textAnchor="middle" fontSize={10} fill="#1d4ed8" fontWeight={600}>Despolarização</text>
            <text x={168} y={72} textAnchor="middle" fontSize={9} fill="#1d4ed8">(Na⁺ entra)</text>

            {/* Seta + label para repolarização */}
            <text x={225} y={155} textAnchor="middle" fontSize={10} fill="#15803d" fontWeight={600}>Repolarização</text>
            <text x={225} y={166} textAnchor="middle" fontSize={9} fill="#15803d">(K⁺ sai)</text>

            {/* Hiperpolarização */}
            <text x={270} y={210} textAnchor="middle" fontSize={9} fill="#7c3aed">Hiperpolarização</text>

            {/* Período refratário */}
            <rect x={185} y={25} width={100} height={18} rx={4} fill="#fde68a" opacity={0.7} />
            <text x={235} y={38} textAnchor="middle" fontSize={9} fill="#92400e" fontWeight={600}>Período refratário</text>
          </svg>
          <figcaption>
            Gráfico esquemático do potencial de ação: o potencial de membrana parte de –70 mV (repouso), sobe abruptamente até +35 mV (despolarização por entrada de Na⁺) e retorna ao repouso (repolarização por saída de K⁺), passando por uma breve hiperpolarização.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Condução saltatória e velocidade</h3>
          <p>
            Em axônios mielinizados, o potencial de ação não percorre
            continuamente toda a membrana, mas "salta" de um nódulo de Ranvier
            ao seguinte — a chamada{" "}
            <strong>condução saltatória</strong>. Isso multiplica a velocidade
            de condução (até ~120 m/s em fibras motoras grossas mielinizadas,
            contra menos de 1 m/s em fibras amielínicas) e economiza energia,
            pois apenas os nódulos precisam regenerar o potencial de ação. Em
            fibras <strong>amielínicas</strong> (ex.: fibras de dor do tipo C),
            o potencial percorre a membrana continuamente, de forma mais lenta.
          </p>
        </div>
      </section>

      {/* ================================================================
          SEÇÃO 7 — Sinapse
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Comunicação Neural</span>

        <h2>7. Sinapse: a Comunicação Entre Neurônios</h2>

        <p>
          A <strong>sinapse</strong> é a região de comunicação entre dois
          neurônios (neurônio-neurônio) ou entre um neurônio e uma célula
          efetora (músculo, glândula). O neurônio que envia o sinal é o{" "}
          <strong>pré-sináptico</strong>; o que recebe é o{" "}
          <strong>pós-sináptico</strong>. Existem dois tipos fundamentais:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧪</span>
            <h3>Sinapse Química</h3>
            <p>
              A mais comum. O potencial de ação estimula a fusão de{" "}
              <strong>vesículas sinápticas</strong> com a membrana
              pré-sináptica, liberando <strong>neurotransmissores</strong> na{" "}
              <strong>fenda sináptica</strong>. Eles se ligam a receptores na
              membrana pós-sináptica, gerando efeitos excitatórios ou
              inibitórios.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚡</span>
            <h3>Sinapse Elétrica</h3>
            <p>
              Menos frequente. Células adjacentes são conectadas por{" "}
              <strong>junções comunicantes</strong> que permitem a passagem
              direta de corrente iônica. São rápidas e bidirecionais; presentes
              no músculo cardíaco e em alguns circuitos do SNC.
            </p>
          </div>

          <div className="lesson-card">
            <span>💊</span>
            <h3>Junção Neuromuscular</h3>
            <p>
              Tipo especial de sinapse entre neurônio motor e fibra muscular.
              Utiliza <strong>acetilcolina</strong> como neurotransmissor;
              fundamentais para toda contração voluntária e alvos de
              bloqueadores neuromusculares usados em anestesia.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Principais neurotransmissores e seus efeitos</h3>
          <p>
            <strong>Acetilcolina (ACh):</strong> atua na junção neuromuscular
            (excitação) e no sistema nervoso parassimpático (redução da FC,
            aumento da digestão). Inseticidas organofosforados bloqueiam a
            acetilcolinesterase, causando acúmulo de ACh.{" "}
            <strong>Dopamina:</strong> envolvida em recompensa, prazer e
            controle motor; sua deficiência causa Parkinson; excesso ou
            hipersensibilidade está ligada à esquizofrenia.{" "}
            <strong>Serotonina:</strong> regula humor, sono e apetite; os
            antidepressivos ISRS impedem sua recaptação.{" "}
            <strong>Noradrenalina:</strong> estimulante; prepara o organismo
            para "lutar ou fugir".{" "}
            <strong>GABA</strong> (ácido gama-aminobutírico): principal
            neurotransmissor inibitório do SNC; benzodiazepínicos potencializam
            seu efeito.{" "}
            <strong>Glutamato:</strong> principal neurotransmissor excitatório
            do SNC; envolvido na aprendizagem e memória (potenciação de longo
            prazo).
          </p>
        </div>

        {/* Figura SVG: Sinapse química */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 220" width="520" height="220" aria-label="Esquema de sinapse química com vesículas e receptores">
            {/* Terminal pré-sináptico */}
            <ellipse cx={170} cy={80} rx={120} ry={60} fill="#dbeafe" stroke="#3b82f6" strokeWidth={2} />
            <text x={170} y={35} textAnchor="middle" fontSize={12} fontWeight={700} fill="#1e40af">Terminal Pré-sináptico</text>

            {/* Vesículas sinápticas */}
            {[[130,75],[150,60],[170,70],[190,58],[155,90],[175,85]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r={10} fill="#93c5fd" stroke="#2563eb" strokeWidth={1.2} />
            ))}
            <text x={170} y={110} textAnchor="middle" fontSize={9.5} fill="#1e40af">Vesículas com neurotransmissores</text>

            {/* Fenda sináptica */}
            <rect x={50} y={138} width={240} height={20} rx={0} fill="#f3f4f6" stroke="#9ca3af" strokeWidth={1} />
            <text x={170} y={152} textAnchor="middle" fontSize={11} fontWeight={600} fill="#6b7280">Fenda sináptica (~20 nm)</text>

            {/* Membrana pós-sináptica */}
            <rect x={50} y={158} width={240} height={8} rx={0} fill="#bbf7d0" stroke="#16a34a" strokeWidth={1.5} />

            {/* Receptores */}
            {[80,120,160,200,230].map((x,i) => (
              <rect key={i} x={x} y={166} width={12} height={24} rx={3} fill="#22c55e" stroke="#15803d" strokeWidth={1} />
            ))}
            <text x={170} y={205} textAnchor="middle" fontSize={11} fontWeight={600} fill="#15803d">Membrana Pós-sináptica (receptores)</text>

            {/* Setas neurotransmissores caindo */}
            {[[130,118],[160,112],[190,115]].map(([x,y],i) => (
              <g key={i}>
                <circle cx={x} cy={y} r={5} fill="#2563eb" opacity={0.9} />
                <line x1={x} y1={y+5} x2={x} y2={y+18} stroke="#2563eb" strokeWidth={1.5} markerEnd="url(#arrow38)" />
              </g>
            ))}

            {/* Painel informativo direita */}
            <rect x={310} y={20} width={200} height={180} rx={10} fill="#fffbeb" stroke="#fbbf24" strokeWidth={1.5} />
            <text x={410} y={42} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">Sequência</text>
            {[
              "1. Potencial de ação chega",
              "2. Ca²⁺ entra no terminal",
              "3. Vesículas fundem-se",
              "4. NT liberados na fenda",
              "5. NT liga-se ao receptor",
              "6. Canal iônico abre",
              "7. Sinal transmitido",
            ].map((t, i) => (
              <text key={i} x={320} y={62 + i * 20} fontSize={10} fill="#78350f">{t}</text>
            ))}
          </svg>
          <figcaption>
            Esquema de sinapse química: vesículas sinápticas cheias de neurotransmissores (NT) fusionam-se com a membrana pré-sináptica, liberando NT na fenda, que se liga a receptores específicos na membrana pós-sináptica.
          </figcaption>
        </figure>
      </section>

      {/* ================================================================
          SEÇÃO 8 — Integração Muscular-Nervosa e Arco Reflexo
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Integração Funcional</span>

        <h2>8. Integração Nervosa-Muscular, Arco Reflexo e Patologias</h2>

        <p>
          O movimento voluntário e as respostas automáticas resultam da
          integração perfeita entre o tecido nervoso e o muscular. O{" "}
          <strong>arco reflexo</strong> é o circuito mais simples de
          integração: receptor sensorial → neurônio aferente → interneurônio
          (SNC) → neurônio eferente → músculo ou glândula. Reflexos simples
          (ex.: patelar) podem ocorrer sem envolvimento cortical direto —
          a resposta ocorre antes mesmo de o indivíduo perceber o estímulo.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👆</span>
            <h3>Receptor</h3>
            <p>
              Estrutura sensorial que converte o estímulo em potencial de ação
              (transdução); ex.: fuso muscular, terminação de Ruffini.
            </p>
          </div>

          <div className="lesson-card">
            <span>📡</span>
            <h3>Neurônio Sensitivo (Aferente)</h3>
            <p>
              Conduz o impulso do receptor ao SNC; possui corpo celular no
              gânglio da raiz dorsal.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔀</span>
            <h3>Interneurônio</h3>
            <p>
              Processa e integra informações dentro do SNC; a maioria dos
              neurônios do encéfalo são interneurônios.
            </p>
          </div>

          <div className="lesson-card">
            <span>🚀</span>
            <h3>Neurônio Motor (Eferente)</h3>
            <p>
              Conduz a resposta do SNC ao músculo ou glândula efetora; seus
              corpos celulares ficam no corno ventral da medula.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Patologias importantes para o ENEM</h3>
          <p>
            <strong>Doença de Parkinson:</strong> degeneração de neurônios
            dopaminérgicos da substância negra → tremor, rigidez e bradicinesia.
            Tratamento com levodopa (precursora da dopamina).{" "}
            <strong>Doença de Alzheimer:</strong> acúmulo de placas amiloides e
            emaranhados de tau; perda progressiva de neurônios colinérgicos →
            demência.{" "}
            <strong>Esclerose Lateral Amiotrófica (ELA):</strong> degeneração
            de neurônios motores → paralisia progressiva, sem comprometimento
            cognitivo inicial.{" "}
            <strong>Miastenia gravis:</strong> autoanticorpos contra receptores
            nicotínicos de acetilcolina na placa motora → fraqueza muscular.{" "}
            <strong>Tétano:</strong> toxina do <em>Clostridium tetani</em>{" "}
            bloqueia a liberação de GABA e glicina pelos interneurônios
            inibitórios → contrações espásticas contínuas.
          </p>
        </div>
      </section>

      {/* ================================================================
          EXERCÍCIOS
      ================================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Tipos de tecido muscular"
          statement={
            <p>
              Qual dos tipos de tecido muscular possui células fusiformes,
              uninucleadas e sem estriações visíveis ao microscópio óptico,
              sendo encontrado nas paredes do tubo digestório?
            </p>
          }
          options={[
            { letter: "a", text: "Estriado esquelético" },
            { letter: "b", text: "Estriado cardíaco" },
            { letter: "c", text: "Liso", correct: true },
            { letter: "d", text: "Conjuntivo denso" },
          ]}
          resolution={
            <p>
              O músculo <strong>liso</strong> é formado por células fusiformes
              com um único núcleo central e actina/miosina dispostas de forma
              menos regular, o que impede a formação das bandas (estriações)
              observadas nos outros dois tipos. Está presente em vísceras como
              intestino, útero e vasos sanguíneos.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Mecanismo da contração muscular"
          statement={
            <p>
              Em relação ao mecanismo molecular da contração muscular, assinale a
              afirmativa CORRETA:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Os filamentos de actina e miosina encurtam-se durante a contração.",
            },
            {
              letter: "b",
              text: "O Ca²⁺ se liga à miosina, que desloca a tropomiosina e expõe os sítios ativos da actina.",
            },
            {
              letter: "c",
              text: "O Ca²⁺ se liga à troponina, que desloca a tropomiosina, expondo os sítios ativos da actina para a miosina.",
              correct: true,
            },
            {
              letter: "d",
              text: "O ATP é necessário apenas para o relaxamento muscular, não para o golpe de força.",
            },
          ]}
          resolution={
            <p>
              Pela teoria do deslizamento dos filamentos, os filamentos em si
              não encurtam: a miosina desliza sobre a actina. O Ca²⁺ liberado
              pelo retículo sarcoplasmático liga-se à{" "}
              <strong>troponina</strong>, que altera a conformação da
              tropomiosina, liberando os sítios ativos da actina. O ATP é
              essencial tanto para o golpe de força quanto para o
              desacoplamento das pontes cruzadas e para o relaxamento
              (recaptação de Ca²⁺).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Potencial de ação e período refratário"
          statement={
            <p>
              A condução unidirecional do impulso nervoso ao longo do axônio
              está relacionada ao período refratário absoluto. Esse período
              resulta diretamente de:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Inativação temporária dos canais de K⁺ dependentes de voltagem logo após a despolarização.",
            },
            {
              letter: "b",
              text: "Inativação temporária dos canais de Na⁺ dependentes de voltagem logo após a despolarização, impedindo nova excitação imediata.",
              correct: true,
            },
            {
              letter: "c",
              text: "Hiperpolarização prolongada causada pela bomba Na⁺/K⁺ que impede qualquer novo estímulo.",
            },
            {
              letter: "d",
              text: "Ausência de Ca²⁺ intracelular no pico do potencial de ação.",
            },
          ]}
          resolution={
            <p>
              No pico do potencial de ação, os canais de Na⁺ entram em um
              estado de <strong>inativação</strong> (diferente de fechado):
              ficam temporariamente irresponsivos a novos estímulos. Isso impede
              que a região recém-despolarizada seja reativada pelo impulso que
              acabou de passar, obrigando o potencial a propagar-se apenas em
              direção às regiões ainda em repouso — garantindo a propagação
              <strong> unidirecional</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Agrotóxicos e sinapses (contexto ENEM)"
          statement={
            <p>
              Inseticidas organofosforados como o parationa inibem a enzima
              acetilcolinesterase, responsável por degradar a acetilcolina (ACh)
              na fenda sináptica. Uma pessoa intoxicada por esse tipo de
              agrotóxico apresentará, como consequência direta, um quadro de:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Paralisia flácida por ausência de ACh nas junções neuromusculares.",
            },
            {
              letter: "b",
              text: "Estimulação excessiva e contínua dos músculos e glândulas, com cólicas, lacrimejamento, salivação e possíveis convulsões.",
              correct: true,
            },
            {
              letter: "c",
              text: "Bloqueio da liberação de dopamina, causando Parkinsonismo agudo.",
            },
            {
              letter: "d",
              text: "Hiperpolarização dos neurônios motores, impedindo qualquer potencial de ação.",
            },
          ]}
          resolution={
            <p>
              A acetilcolinesterase degrada a ACh na fenda sináptica,
              encerrando o sinal. Ao inibir essa enzima, o agrotóxico provoca
              acúmulo de ACh, mantendo os receptores constantemente ativados.
              Isso gera <strong>supraestimulação</strong> contínua dos músculos
              (incluindo o diafragma — risco de parada respiratória), das
              glândulas exócrinas e do TGI — quadro chamado de toxidrome
              colinérgica.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Esclerose múltipla e condução nervosa"
          statement={
            <p>
              A esclerose múltipla (EM) é uma doença autoimune em que o sistema
              imune destrói a bainha de mielina dos neurônios do sistema nervoso
              central. Com base no conhecimento sobre a fisiologia nervosa,
              explica-se que os sintomas de fraqueza, formigamento e perda de
              visão observados na EM decorrem de:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Destruição dos corpos celulares dos neurônios, impedindo a síntese de neurotransmissores.",
            },
            {
              letter: "b",
              text: "Bloqueio da bomba Na⁺/K⁺, tornando a membrana permanentemente despolarizada.",
            },
            {
              letter: "c",
              text: "Perda da condução saltatória: sem mielina, o impulso nervoso é conduzido de forma lenta, intermitente ou interrompida, comprometendo a transmissão de informações.",
              correct: true,
            },
            {
              letter: "d",
              text: "Excesso de células de Schwann no SNC, que bloqueiam fisicamente os axônios.",
            },
          ]}
          resolution={
            <p>
              A mielina permite a <strong>condução saltatória</strong>: o
              impulso "salta" de nódulo em nódulo, sendo rápido e eficiente.
              Na EM, a destruição dos oligodendrócitos elimina esse isolamento.
              A condução torna-se lenta, errática ou simplesmente falha, como
              um cabo elétrico sem isolamento. Dependendo de quais tratos
              nervosos são afetados, aparecem fraqueza motora, distúrbios
              sensoriais, comprometimento visual (nervo óptico) e disfunção
              vesical.
            </p>
          }
        />
      </section>
    </article>
  );
}
