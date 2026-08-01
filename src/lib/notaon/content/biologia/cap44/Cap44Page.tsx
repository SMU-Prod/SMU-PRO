"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap44Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 44</span>

          <h1>Dinâmica de Populações e Relações Ecológicas</h1>

          <p>
            Entenda como as populações crescem, se regulam e interagem: das
            fórmulas de densidade e taxas demográficas às curvas exponencial e
            logística, do potencial biótico à capacidade de suporte; e domine
            todo o repertório de relações ecológicas — harmônicas e desarmônicas,
            intraespecíficas e interespecíficas — cobrado com frequência máxima
            no ENEM e nos maiores vestibulares do país.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ─────────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Populações</span>

        <h2>1. O Que é uma População Biológica</h2>

        <p>
          Uma <strong>população biológica</strong> é o conjunto de indivíduos da
          mesma espécie que ocupam uma mesma área geográfica em um mesmo período
          de tempo, compartilhando recursos e podendo se reproduzir entre si. É a
          unidade básica de estudo da Ecologia de Populações e da Evolução, pois
          é sobre populações — não sobre indivíduos — que a seleção natural
          atua ao longo das gerações.
        </p>

        <p>
          As populações são caracterizadas por quatro parâmetros fundamentais:{" "}
          <strong>tamanho</strong> (N — número total de indivíduos),{" "}
          <strong>densidade demográfica</strong> (D — indivíduos por unidade de
          área ou volume), <strong>taxa de natalidade</strong> (b —{" "}
          <em>birth rate</em>) e <strong>taxa de mortalidade</strong> (m —{" "}
          <em>mortality rate</em>). A esses se somam os fluxos migratórios —{" "}
          <strong>imigração</strong> (I) e <strong>emigração</strong> (E) —, que
          também alteram o tamanho local da população.
        </p>

        <div className="lesson-highlight">
          <h3>Equação geral do crescimento populacional</h3>
          <p>
            O tamanho da população no próximo período é dado por:
          </p>
          <div className="math-block">
            <M>{"\\Delta N = (b - m + I - E) \\times N"}</M>
          </div>
          <p>
            Quando <strong>(b + I) &gt; (m + E)</strong>, a população cresce;
            quando os lados se igualam, atinge equilíbrio dinâmico; quando{" "}
            <strong>(m + E) &gt; (b + I)</strong>, a população declina rumo à
            extinção local.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Parâmetro</th>
                <th>Símbolo</th>
                <th>Como se calcula</th>
                <th>Efeito sobre N</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Densidade demográfica</td>
                <td><M>{"D"}</M></td>
                <td><M>{"D = N / A"}</M> (indivíduos por área)</td>
                <td>Referência comparativa</td>
              </tr>
              <tr>
                <td>Taxa de natalidade</td>
                <td><M>{"b"}</M></td>
                <td>Nascidos / N por unidade de tempo</td>
                <td>Aumenta N</td>
              </tr>
              <tr>
                <td>Taxa de mortalidade</td>
                <td><M>{"m"}</M></td>
                <td>Mortos / N por unidade de tempo</td>
                <td>Reduz N</td>
              </tr>
              <tr>
                <td>Imigração</td>
                <td><M>{"I"}</M></td>
                <td>Indivíduos que entram / período</td>
                <td>Aumenta N</td>
              </tr>
              <tr>
                <td>Emigração</td>
                <td><M>{"E"}</M></td>
                <td>Indivíduos que saem / período</td>
                <td>Reduz N</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 2 ─────────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Crescimento Populacional</span>

        <h2>2. Curvas de Crescimento: Exponencial (J) e Logística (S)</h2>

        <p>
          O padrão de crescimento de uma população depende da disponibilidade de
          recursos e da pressão exercida pelo ambiente. Dois modelos clássicos
          capturam essa dinâmica: o <strong>crescimento exponencial</strong> e o{" "}
          <strong>crescimento logístico</strong>.
        </p>

        <p>
          No <strong>modelo exponencial</strong>, a população cresce a uma taxa
          constante <em>r</em> (taxa intrínseca de crescimento), sem qualquer
          limitação. A equação diferencial é <M>{"dN/dt = r \\cdot N"}</M>, e a
          solução gera uma curva em <strong>J</strong>: lento no início e
          acelerado à medida que N aumenta. Esse padrão ocorre em condições
          ideais de laboratório ou quando uma espécie coloniza um ambiente novo
          com recursos abundantes e poucos predadores — como bactérias introduzidas
          em meio de cultura rico ou coelhos introduzidos na Austrália no século XIX.
        </p>

        <p>
          Na natureza, porém, os recursos são finitos. O{" "}
          <strong>modelo logístico</strong> incorpora a{" "}
          <strong>capacidade de suporte K</strong> — o número máximo de
          indivíduos que o ambiente sustenta em equilíbrio — por meio da equação{" "}
          <M>{"dN/dt = r \\cdot N \\cdot \\left(\\frac{K - N}{K}\\right)"}</M>.
          Quando N está longe de K, o fator entre parênteses se aproxima de 1 e
          o crescimento é quase exponencial; conforme N se aproxima de K, o
          fator tende a 0 e o crescimento desacelera. A curva resultante tem
          formato de <strong>S</strong> (sigmóide ou curva de Verhulst), com
          ponto de inflexão em N = K/2 — onde a taxa de crescimento absoluta é
          máxima.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 320" width="700" height="320" aria-label="Curvas de crescimento exponencial em J e logístico em S com capacidade de suporte K">
            {/* Eixos */}
            <line x1={60} y1={20} x2={60} y2={270} stroke="#374151" strokeWidth={1.8} />
            <line x1={60} y1={270} x2={670} y2={270} stroke="#374151" strokeWidth={1.8} />
            <text x={36} y={25} fontSize={13} fontWeight={700} fill="#374151">N</text>
            <text x={665} y={285} fontSize={13} fontWeight={700} fill="#374151">t</text>

            {/* Linha K */}
            <line x1={60} y1={80} x2={670} y2={80} stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="8 5" />
            <text x={675} y={84} fontSize={12} fontWeight={700} fill="#f59e0b">K</text>

            {/* Curva exponencial (J) — cor azul */}
            <path
              d="M 60 260 C 130 258, 230 245, 290 210 C 350 170, 390 100, 420 40"
              fill="none"
              stroke="#3b82f6"
              strokeWidth={3}
            />
            <text x={425} y={36} fontSize={13} fontWeight={700} fill="#3b82f6">Curva J (exponencial)</text>

            {/* Curva logística (S) — cor verde */}
            <path
              d="M 60 264 C 110 263, 180 260, 260 240 C 330 215, 390 155, 440 105 C 490 82, 560 80, 670 80"
              fill="none"
              stroke="#16a34a"
              strokeWidth={3}
            />
            <text x={470} y={115} fontSize={13} fontWeight={700} fill="#16a34a">Curva S (logística)</text>

            {/* Ponto de inflexão K/2 */}
            <line x1={60} y1={175} x2={440} y2={175} stroke="#9ca3af" strokeWidth={1} strokeDasharray="4 3" />
            <line x1={440} y1={175} x2={440} y2={270} stroke="#9ca3af" strokeWidth={1} strokeDasharray="4 3" />
            <circle cx={440} cy={175} r={5} fill="#16a34a" />
            <text x={448} y={172} fontSize={11} fill="#16a34a">K/2 (máx crescimento)</text>

            {/* Legenda eixos */}
            <text x={30} y={80} fontSize={10} fill="#f59e0b" textAnchor="middle">K</text>
            <text x={30} y={175} fontSize={10} fill="#6b7280" textAnchor="middle">K/2</text>

            {/* Rótulo eixo Y */}
            <text x={14} y={145} fontSize={11} fill="#6b7280" transform="rotate(-90,14,145)">Tamanho populacional (N)</text>
            <text x={365} y={308} fontSize={11} fill="#6b7280" textAnchor="middle">Tempo</text>
          </svg>
          <figcaption>
            Curva em J (exponencial, azul): crescimento ilimitado sem resistência
            ambiental. Curva em S (logística, verde): crescimento desacelera ao
            se aproximar da capacidade de suporte K (tracejado laranja). O ponto
            K/2 marca a máxima taxa de crescimento absoluta da população.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Capacidade de suporte (K) e seus determinantes</h3>
          <p>
            K não é uma constante fixa: varia conforme a oferta de alimento,
            água, abrigo, área de território e pressão de predadores/parasitas.
            Quando o ambiente é degradado — desmatamento, poluição, fragmentação
            — K cai e populações que antes se sustentavam podem entrar em
            colapso. O manejo sustentável de estoques pesqueiros, por exemplo,
            busca manter a colheita próxima ao ponto K/2, onde o estoque se
            recupera mais rapidamente.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 3 ─────────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Regulação Populacional</span>

        <h2>3. Potencial Biótico, Resistência Ambiental e Fatores Limitantes</h2>

        <p>
          O <strong>potencial biótico</strong> (PB) é a capacidade máxima
          teórica de uma espécie se reproduzir em condições ideais — alimento
          ilimitado, ausência de predadores e doenças, temperatura ótima. Ele
          reflete a taxa intrínseca de crescimento <em>r</em> e é determinado
          pela longevidade, pelo número de filhotes por gestação e pela
          precocidade sexual. Roedores e insetos têm PB altíssimo; grandes
          mamíferos, como o elefante (uma cria a cada 4–5 anos), têm PB baixo.
        </p>

        <p>
          Na prática, o PB nunca é atingido porque a{" "}
          <strong>resistência ambiental</strong> (RA) atua como conjunto de
          fatores que freiam o crescimento. A diferença entre ambos é o que
          determina a taxa real de crescimento. Os fatores de RA se dividem em
          dois grandes grupos:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📊</span>
            <h3>Fatores Dependentes da Densidade</h3>
            <p>
              Intensificam-se com o aumento de N: competição intraespecífica,
              epidemias (transmissão facilitada), predação concentrada e
              estresse fisiológico. São os principais reguladores a longo prazo
              e produzem a curva S.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌪️</span>
            <h3>Fatores Independentes da Densidade</h3>
            <p>
              Agem independentemente de N: geadas, secas extremas, erupções
              vulcânicas, poluição súbita. Podem devastar populações grandes ou
              pequenas igualmente. Explicam colapsos abruptos sem a curva S.
            </p>
          </div>
          <div className="lesson-card">
            <span>🍽️</span>
            <h3>Disponibilidade de Alimento</h3>
            <p>
              Com N crescente, cada indivíduo obtém menos energia, reduzindo
              fertilidade e aumentando mortalidade — fator dependente da
              densidade por excelência.
            </p>
          </div>
          <div className="lesson-card">
            <span>🦠</span>
            <h3>Doenças e Parasitos</h3>
            <p>
              Populações densas favorecem a transmissão de patógenos e
              parasitas. Epidemias regulam fortemente populações de aves,
              anfíbios e mamíferos silvestres.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4 ─────────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Oscilações Predador–Presa</span>

        <h2>4. Dinâmica Predador–Presa: o Ciclo de Lotka–Volterra</h2>

        <p>
          Uma das demonstrações mais elegantes da interdependência ecológica é
          o ciclo predador–presa descrito matematicamente por{" "}
          <strong>Alfred Lotka e Vito Volterra</strong> na década de 1920, e
          empiricamente confirmado nos registros históricos de peles de lince
          canadense (<em>Lynx canadensis</em>) e lebre-americana (
          <em>Lepus americanus</em>) coletados pela Hudson's Bay Company ao longo
          de 90 anos.
        </p>

        <p>
          O padrão é cíclico: a população de presas cresce quando predadores
          são escassos; predadores bem alimentados se reproduzem mais,
          aumentando a pressão; presas diminuem; sem alimento, predadores
          declinam; presas recuperam — e o ciclo recomeça. As oscilações das
          duas populações são <strong>defasadas no tempo</strong>: o pico do
          predador ocorre levemente após o pico da presa.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 280" width="680" height="280" aria-label="Gráfico de oscilações predador-presa tipo lince e lebre">
            {/* Eixos */}
            <line x1={55} y1={20} x2={55} y2={230} stroke="#374151" strokeWidth={1.8} />
            <line x1={55} y1={230} x2={650} y2={230} stroke="#374151" strokeWidth={1.8} />
            <text x={30} y={25} fontSize={12} fill="#374151">N</text>
            <text x={648} y={246} fontSize={12} fill="#374151">t</text>

            {/* Curva PRESA (lebre) — verde */}
            <path
              d="M 55 160
                 C 100 158, 130 80, 170 75
                 C 210 70, 240 160, 280 165
                 C 320 170, 350 85, 390 78
                 C 430 72, 460 162, 500 168
                 C 540 174, 570 88, 610 80
                 C 630 76, 645 120, 650 160"
              fill="none"
              stroke="#16a34a"
              strokeWidth={3}
            />

            {/* Curva PREDADOR (lince) — laranja, defasada */}
            <path
              d="M 55 185
                 C 95 183, 150 175, 200 120
                 C 230 95, 260 95, 310 155
                 C 340 185, 380 185, 420 125
                 C 450 100, 490 98, 540 158
                 C 565 185, 600 185, 650 175"
              fill="none"
              stroke="#f97316"
              strokeWidth={3}
            />

            {/* Legenda */}
            <rect x={390} y={22} width={14} height={14} rx={3} fill="#16a34a" />
            <text x={408} y={34} fontSize={12} fill="#16a34a" fontWeight={600}>Presa (lebre)</text>
            <rect x={390} y={44} width={14} height={14} rx={3} fill="#f97316" />
            <text x={408} y={56} fontSize={12} fill="#f97316" fontWeight={600}>Predador (lince)</text>

            {/* Anotação defasagem */}
            <path d="M 170 65 C 190 40, 215 40, 210 85" fill="none" stroke="#6b7280" strokeWidth={1} strokeDasharray="3 2" markerEnd="url(#arr)" />
            <text x={148} y={58} fontSize={10} fill="#6b7280">pico presa</text>
            <path d="M 205 108 C 225 88, 235 85, 230 115" fill="none" stroke="#6b7280" strokeWidth={1} strokeDasharray="3 2" />
            <text x={210} y={88} fontSize={10} fill="#f97316">pico predador</text>
            <text x={218} y={100} fontSize={10} fill="#6b7280">(defasado)</text>

            {/* Rótulos */}
            <text x={335} y={265} fontSize={11} fill="#6b7280" textAnchor="middle">Tempo (anos)</text>
          </svg>
          <figcaption>
            Oscilações clássicas predador–presa (modelo Lotka–Volterra), inspiradas
            nos dados históricos de lince e lebre canadenses. O pico do predador
            (laranja) segue com defasagem o pico da presa (verde), gerando ciclos
            auto-sustentados.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Implicação para o ENEM</h3>
          <p>
            Quando o ENEM apresenta gráficos de duas populações com oscilações
            cíclicas defasadas, a interpretação correta é relação de predação
            (ou parasitismo intenso). A extinção do predador pode levar ao
            supercrescimento da presa, que então esgota recursos e colapsa —
            demonstrando que predadores são <strong>reguladores ecológicos
            essenciais</strong>.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 5 ─────────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Relações Ecológicas — Visão Geral</span>

        <h2>5. Classificação das Relações Ecológicas</h2>

        <p>
          As relações ecológicas são interações bióticas entre organismos de
          uma mesma espécie (<strong>intraespecíficas</strong>) ou de espécies
          diferentes (<strong>interespecíficas</strong>). Cada relação é
          classificada pelo balanço de seus efeitos: <strong>+</strong> (benefício),
          <strong> −</strong> (prejuízo) ou <strong>0</strong> (indiferença).
          Relações em que nenhum dos participantes é prejudicado são chamadas{" "}
          <strong>harmônicas</strong>; aquelas em que ao menos um é prejudicado,{" "}
          <strong>desarmônicas</strong>.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Relação</th>
                <th>Tipo</th>
                <th>Espécie A</th>
                <th>Espécie B</th>
                <th>Exemplo clássico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Colônia</strong></td>
                <td>Intra — Harmônica</td>
                <td>+</td>
                <td>+ (mesmo organismo)</td>
                <td>Corais, Physalia (caravela)</td>
              </tr>
              <tr>
                <td><strong>Sociedade</strong></td>
                <td>Intra — Harmônica</td>
                <td>+</td>
                <td>+ (mesmo organismo)</td>
                <td>Abelhas, formigas, cupins</td>
              </tr>
              <tr>
                <td><strong>Canibalismo</strong></td>
                <td>Intra — Desarmônica</td>
                <td>+</td>
                <td>−</td>
                <td>Fêmea de louva-a-deus ingere o macho</td>
              </tr>
              <tr>
                <td><strong>Competição intraesp.</strong></td>
                <td>Intra — Desarmônica</td>
                <td>−</td>
                <td>−</td>
                <td>Disputas por território entre machos</td>
              </tr>
              <tr>
                <td><strong>Mutualismo</strong></td>
                <td>Inter — Harmônica</td>
                <td>+</td>
                <td>+</td>
                <td>Líquen (fungo + alga); micorriza</td>
              </tr>
              <tr>
                <td><strong>Protocooperação</strong></td>
                <td>Inter — Harmônica</td>
                <td>+</td>
                <td>+</td>
                <td>Garça-vaqueira e búfalo; abelha e flor</td>
              </tr>
              <tr>
                <td><strong>Comensalismo</strong></td>
                <td>Inter — Harmônica</td>
                <td>+</td>
                <td>0</td>
                <td>Rêmora e tubarão; peixe-piloto</td>
              </tr>
              <tr>
                <td><strong>Inquilinismo</strong></td>
                <td>Inter — Harmônica</td>
                <td>+</td>
                <td>0</td>
                <td>Bromélias como abrigo; orquídeas em árvores</td>
              </tr>
              <tr>
                <td><strong>Foresia</strong></td>
                <td>Inter — Harmônica</td>
                <td>+</td>
                <td>0</td>
                <td>Ácaros que se transportam em besouro</td>
              </tr>
              <tr>
                <td><strong>Predação</strong></td>
                <td>Inter — Desarmônica</td>
                <td>+</td>
                <td>−</td>
                <td>Leão e zebra; aranha e mosca</td>
              </tr>
              <tr>
                <td><strong>Parasitismo</strong></td>
                <td>Inter — Desarmônica</td>
                <td>+</td>
                <td>−</td>
                <td>Tênia e humano; Plasmodium e mosquito</td>
              </tr>
              <tr>
                <td><strong>Herbivoria</strong></td>
                <td>Inter — Desarmônica</td>
                <td>+</td>
                <td>−</td>
                <td>Gafanhoto e folha; lagarta e planta</td>
              </tr>
              <tr>
                <td><strong>Amensalismo</strong></td>
                <td>Inter — Desarmônica</td>
                <td>0</td>
                <td>−</td>
                <td>Penicillium inibe bactérias; alelopatia</td>
              </tr>
              <tr>
                <td><strong>Competição interesp.</strong></td>
                <td>Inter — Desarmônica</td>
                <td>−</td>
                <td>−</td>
                <td>Espécies exóticas vs. nativas por nicho</td>
              </tr>
              <tr>
                <td><strong>Esclavagismo</strong></td>
                <td>Inter — Desarmônica</td>
                <td>+</td>
                <td>−</td>
                <td>Formigas escravistas e formigas capturadas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 ─────────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Relações Harmônicas em Detalhe</span>

        <h2>6. Relações Harmônicas: do Mutualismo ao Inquilinismo</h2>

        <p>
          Nas relações <strong>harmônicas</strong>, nenhum dos participantes sai
          prejudicado. Isso não significa que sejam "amigáveis" no sentido
          intencional — são resultantes da pressão evolutiva que favoreceu
          organismos capazes de obter benefícios sem causar danos que
          comprometessem o parceiro.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧫</span>
            <h3>Mutualismo (+/+) obrigatório</h3>
            <p>
              Ambas as espécies se beneficiam e a relação é <em>indispensável</em>{" "}
              para a sobrevivência de ao menos uma. O <strong>líquen</strong> é o
              exemplo mais famoso: o fungo fornece proteção e absorção de água;
              a alga ou cianobactéria realiza fotossíntese. Separados, nenhum
              sobrevive no mesmo substrato. Outro exemplo: a{" "}
              <strong>micorriza</strong> (fungo + raiz vegetal), em que o fungo
              amplia a absorção de fósforo e a planta fornece glicose.
            </p>
          </div>
          <div className="lesson-card">
            <span>🐦</span>
            <h3>Protocooperação (+/+) facultativa</h3>
            <p>
              Benefício mútuo sem dependência obrigatória. A{" "}
              <strong>garça-vaqueira</strong> elimina ectoparasitas do búfalo,
              obtendo alimento; o búfalo se livra de carrapatos. Ambos sobrevivem
              separados, mas lucram juntos. O mesmo vale para a polinização de
              angiospermas por abelhas — benéfica para ambos, mas nenhum está
              biologicamente preso à relação.
            </p>
          </div>
          <div className="lesson-card">
            <span>🐟</span>
            <h3>Comensalismo (+/0)</h3>
            <p>
              Uma espécie se beneficia e a outra é indiferente. A{" "}
              <strong>rêmora</strong> adere ao tubarão por meio de um disco
              sugador, obtendo transporte e restos alimentares — o tubarão não é
              afetado. O <strong>peixe-piloto</strong> nada próximo a tubarões
              ou raias e se alimenta de seus detritos, sem prejudicar o hospedeiro.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Inquilinismo (+/0)</h3>
            <p>
              Uma espécie usa a outra como abrigo, suporte ou substrato sem
              prejudicá-la. <strong>Bromélias</strong> e{" "}
              <strong>orquídeas epífitas</strong> crescem sobre árvores: usam o
              tronco como apoio para alcançar luz, mas não retiram nutrientes
              da planta hospedeira. O inquilino se beneficia; o hospedeiro é
              indiferente.
            </p>
          </div>
          <div className="lesson-card">
            <span>🪲</span>
            <h3>Foresia (+/0)</h3>
            <p>
              Modalidade de inquilinismo em que o benefício obtido é o{" "}
              <strong>transporte</strong>. Ácaros se fixam em besouros apenas
              para se deslocar até novos ambientes, sem se alimentar do
              hospedeiro. Diferente do parasitismo porque não há dano.
            </p>
          </div>
          <div className="lesson-card">
            <span>🐜</span>
            <h3>Colônia vs. Sociedade (intraespecífico)</h3>
            <p>
              Na <strong>colônia</strong>, os indivíduos são{" "}
              <strong>fisicamente unidos</strong> (ex.: corais, Physalia) e
              podem ser morfologicamente diferenciados. Na{" "}
              <strong>sociedade</strong>, são independentes mas organizados com
              divisão de trabalho e comunicação (ex.: abelhas, formigas, cupins).
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Atenção: mutualismo ≠ protocooperação</h3>
          <p>
            A distinção ENEM mais cobrada é:{" "}
            <strong>mutualismo é obrigatório</strong> — pelo menos um parceiro
            não sobrevive sem o outro (líquen, ruminante + bactérias celulolíticas);{" "}
            <strong>protocooperação é facultativa</strong> — ambos sobrevivem
            separados mas se beneficiam juntos (garça-vaqueira + bovino).
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 7 ─────────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Relações Desarmônicas em Detalhe</span>

        <h2>7. Relações Desarmônicas: Predação, Parasitismo e Competição</h2>

        <p>
          Nas relações <strong>desarmônicas</strong>, ao menos um organismo é
          prejudicado. Elas são forças evolutivas poderosas: impulsionam a
          coevolução de presas e predadores, moldam sistemas imunológicos e
          estruturam comunidades inteiras por exclusão competitiva.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🦁</span>
            <h3>Predação (+/−)</h3>
            <p>
              O <strong>predador</strong> captura, mata e consome a{" "}
              <strong>presa</strong>. Regula densidades populacionais,
              mantendo o equilíbrio da comunidade. Pressiona a evolução de
              estratégias defensivas: camuflagem, veneno, comportamento de
              grupo, mimetismo. Ex.: leão e zebra, aranha e inseto.
            </p>
          </div>
          <div className="lesson-card">
            <span>🪱</span>
            <h3>Parasitismo (+/−)</h3>
            <p>
              O <strong>parasita</strong> vive às expensas do{" "}
              <strong>hospedeiro</strong> sem matá-lo imediatamente (matar o
              hospedeiro seria contraproducente). Pode ser ectoparasitismo
              (carrapatos, piolhos) ou endoparasitismo (tênia, Plasmodium). O
              parasita tem PB muito alto e alta especificidade com o hospedeiro.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌾</span>
            <h3>Herbivoria (+/−)</h3>
            <p>
              Animal consome tecidos vegetais vivos. A planta é prejudicada mas
              raramente morta. Plantas evoluíram defesas químicas (taninos,
              alcaloides) e físicas (espinhos, látex). É a interface entre
              predação e parasitismo, pois a "presa" não é morta toda de uma vez.
            </p>
          </div>
          <div className="lesson-card">
            <span>☠️</span>
            <h3>Amensalismo (0/−)</h3>
            <p>
              Uma espécie prejudica a outra sem obter benefício. O fungo{" "}
              <em>Penicillium</em> libera penicilina, inibindo bactérias vizinhas
              — não se "alimenta" delas. Na <strong>alelopatia</strong>, plantas
              liberam compostos que inibem a germinação de vizinhas (ex.:
              eucalipto, erva-de-santa-maria).
            </p>
          </div>
          <div className="lesson-card">
            <span>🥊</span>
            <h3>Competição (−/−)</h3>
            <p>
              Duas espécies disputam o mesmo recurso limitado. A{" "}
              <strong>interespecífica</strong> pode levar à{" "}
              <strong>exclusão competitiva</strong> (Princípio de Gause): duas
              espécies com nichos idênticos não coexistem a longo prazo — uma
              elimina a outra ou ocorre separação de nicho. Invasoras biológicas
              frequentemente excludem nativas por esse mecanismo.
            </p>
          </div>
          <div className="lesson-card">
            <span>🐜</span>
            <h3>Esclavagismo (+/−)</h3>
            <p>
              Uma espécie captura indivíduos de outra para explorar seu
              trabalho. Formigas do gênero <em>Polyergus</em> invadem colônias
              de <em>Formica</em> e raptam pupas, que, ao eclodir, trabalham
              para a colônia invasora. Raro, mas bem documentado em Hymenoptera.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Parasitismo vs. Predação: diferença fundamental</h3>
          <p>
            No <strong>parasitismo</strong>, o parasita vive <em>em</em> ou{" "}
            <em>sobre</em> o hospedeiro por período prolongado, causando dano
            crônico sem matá-lo imediatamente. Na{" "}
            <strong>predação</strong>, o predador mata a presa no ato. O{" "}
            <strong>parasitoide</strong> (ex.: vespas que oviposicionam em
            lagartas) ocupa posição intermediária: o parasita acaba matando o
            hospedeiro no final do desenvolvimento.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 8 ─────────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese e Aplicações</span>

        <h2>8. Integração: Dinâmica Populacional e Relações Ecológicas no ENEM</h2>

        <p>
          O ENEM frequentemente integra os dois grandes temas deste capítulo em
          uma única questão contextualizada. Entender que as{" "}
          <strong>relações ecológicas são mecanismos da resistência
          ambiental</strong> é a chave: predação, parasitismo, competição e
          amensalismo são os fatores bióticos que freiam o crescimento
          exponencial e mantêm as populações abaixo de K.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Situação-problema</th>
                <th>Conceito central</th>
                <th>Consequência esperada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Extinção de predador topo (lince, lobo)</td>
                <td>Remoção de resistência ambiental</td>
                <td>Superpopulação de presas → degradação vegetal → colapso</td>
              </tr>
              <tr>
                <td>Introdução de espécie exótica</td>
                <td>Competição / predação sem coevolução</td>
                <td>Exclusão competitiva de nativas; crescimento em J da exótica</td>
              </tr>
              <tr>
                <td>Uso de antiparasitários em massa</td>
                <td>Redução do parasitismo como RA</td>
                <td>Aumento temporário de N do hospedeiro</td>
              </tr>
              <tr>
                <td>Desmatamento e fragmentação</td>
                <td>Redução de K</td>
                <td>Populações abaixo do mínimo viável → extinção local</td>
              </tr>
              <tr>
                <td>Gráfico duas curvas cíclicas defasadas</td>
                <td>Relação predador–presa (Lotka–Volterra)</td>
                <td>Identificar qual é predador (pico atrasado) e presa (pico antes)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Fórmula da taxa de crescimento per capita</h3>
          <p>
            No modelo logístico, quando N se aproxima de K, o fator de
            limitação <M>{"\\frac{K-N}{K}"}</M> tende a zero e o crescimento
            para. Quando N {">"} K (superlotação), o fator fica negativo e a
            população declina. Esse mecanismo de retroalimentação negativa é o
            que sustenta o equilíbrio ecológico em comunidades maduras.
          </p>
        </div>
      </section>

      {/* ── EXERCÍCIOS ──────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Relações ecológicas e sinais"
          statement={
            <p>
              A relação em que uma espécie se beneficia e a outra não é afetada
              é classificada como:
            </p>
          }
          options={[
            { letter: "a", text: "Mutualismo (+/+)" },
            { letter: "b", text: "Comensalismo (+/0)", correct: true },
            { letter: "c", text: "Parasitismo (+/−)" },
            { letter: "d", text: "Amensalismo (0/−)" },
          ]}
          resolution={
            <p>
              No <strong>comensalismo</strong>, a espécie A obtém benefício (+)
              e a espécie B é indiferente (0). Exemplos clássicos: rêmora e
              tubarão, peixe-piloto, bromélias epífitas sobre árvores. O
              mutualismo é +/+; o parasitismo é +/−; o amensalismo é 0/−.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Curva logística e capacidade de suporte"
          statement={
            <p>
              Em uma curva de crescimento logístico (curva S), o ponto em que a
              taxa de crescimento <strong>absoluta</strong> (número de novos
              indivíduos por unidade de tempo) é máxima corresponde a:
            </p>
          }
          options={[
            { letter: "a", text: "N = 0" },
            { letter: "b", text: "N = K" },
            { letter: "c", text: "N = K/2", correct: true },
            { letter: "d", text: "N = 2K" },
          ]}
          resolution={
            <p>
              A equação logística <M>{"dN/dt = r \\cdot N \\cdot (K - N)/K"}</M>{" "}
              é maximizada quando N = K/2. Nesse ponto está o ponto de inflexão
              da curva S. Em N = K, o crescimento é zero (equilíbrio); em N = 0,
              também é zero. É por isso que o manejo pesqueiro sustentável busca
              manter os estoques próximos a K/2.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Exclusão competitiva e coexistência"
          statement={
            <p>
              O Princípio de Gause (exclusão competitiva) afirma que duas
              espécies com nichos ecológicos idênticos não coexistem
              indefinidamente. Qual mecanismo ecológico permite que espécies
              similares coexistam em um mesmo habitat?
            </p>
          }
          options={[
            { letter: "a", text: "Aumento da taxa de natalidade de ambas" },
            {
              letter: "b",
              text: "Separação/partilha de nicho, reduzindo a sobreposição de recursos",
              correct: true,
            },
            { letter: "c", text: "Aumento da capacidade de suporte K do ambiente" },
            { letter: "d", text: "Transformação da relação em mutualismo obrigatório" },
          ]}
          resolution={
            <p>
              A <strong>partilha de nicho</strong> (niche partitioning) ocorre
              quando espécies competidoras divergem evolutivamente em dieta,
              horário de atividade ou microhabitat, reduzindo a sobreposição de
              recursos e permitindo a coexistência. Esse fenômeno de
              "deslocamento de caráter" foi documentado em tentilhões de Darwin e
              em lagartos das Antilhas. Sem essa separação, o Princípio de Gause
              prevê que a espécie mais eficiente exclui a outra.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Reintrodução do lobo e efeito cascata (ENEM-estilo)"
          statement={
            <p>
              Na década de 1990, lobos (<em>Canis lupus</em>) foram reintroduzidos
              no Parque Nacional de Yellowstone, nos EUA, após décadas extintos
              na região. Nos anos seguintes, pesquisadores observaram que a
              população de alces diminuiu, a vegetação ribeirinha se recuperou
              e populações de castores aumentaram. Esse fenômeno é explicado por:
            </p>
          }
          options={[
            { letter: "a", text: "Aumento da capacidade de suporte K para alces" },
            {
              letter: "b",
              text: "Cascata trófica: a predação pelo lobo regulou alces, permitindo recuperação vegetal que beneficiou castores",
              correct: true,
            },
            { letter: "c", text: "Relação de mutualismo entre lobo e castor" },
            { letter: "d", text: "Competição intraespecífica entre populações de alces" },
          ]}
          resolution={
            <p>
              O caso de Yellowstone é o exemplo canônico de{" "}
              <strong>cascata trófica</strong>: o lobo (predador topo) reduziu
              a densidade de alces e mudou o comportamento deles (que passaram
              a evitar áreas ribeirinhas). Com menos herbivoria, a vegetação às
              margens dos rios se recuperou, estabilizando margens e
              beneficiando castores — que precisam de árvores para suas barragens.
              É a demonstração prática de que predadores regulam ecossistemas
              inteiros por meio de relações de predação + efeitos indiretos.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Gráfico predador-presa (ENEM-estilo)"
          statement={
            <p>
              Um ecólogo monitorou durante 20 anos as populações de duas espécies
              em uma floresta e obteve oscilações cíclicas: a espécie X atingia
              pico em t = 4, t = 12 e t = 20; a espécie Y atingia pico em t = 6,
              t = 14 e t = 22. Quando X declinava, Y logo declinava também. Com
              base nesses dados, é correto afirmar que:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "X e Y competem pelo mesmo recurso, gerando ciclos anti-fase",
            },
            {
              letter: "b",
              text: "X é a presa e Y é o predador, pois o pico de Y sucede o pico de X com defasagem",
              correct: true,
            },
            {
              letter: "c",
              text: "Y é a presa e X é o predador, pois X atinge o pico antes",
            },
            {
              letter: "d",
              text: "As duas espécies vivem em mutualismo obrigatório",
            },
          ]}
          resolution={
            <p>
              No modelo Lotka–Volterra, a <strong>presa</strong> atinge o pico{" "}
              <em>antes</em> do predador: quando há muita presa (X em pico), os
              predadores bem alimentados se reproduzem mais, e seu pico (Y) vem
              depois, com defasagem. Após o pico de Y, as presas escasseiam e
              Y declina. Portanto, X = presa (pico em t = 4) e Y = predador (pico
              em t = 6, defasado). A queda de X arrasta a queda de Y por falta
              de alimento — confirmando a relação de predação.
            </p>
          }
        />
      </section>
    </article>
  );
}
