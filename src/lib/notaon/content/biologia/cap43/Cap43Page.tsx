"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap43Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 43</span>

          <h1>Conceitos Fundamentais em Ecologia: População, Comunidade, Ecossistema, Habitat, Nicho e Ecótono</h1>

          <p>
            A Ecologia é a ciência que desvenda as regras invisíveis que governam a
            vida em conjunto: por que certas espécies coexistem e outras se
            excluem, como a energia flui da planta ao predador, e o que distingue
            o lugar onde um animal vive do papel que ele desempenha no sistema.
            Dominar esses conceitos é decisivo para o ENEM e para todos os
            vestibulares — eles aparecem em questões de meio ambiente,
            conservação, cadeias alimentares e impactos antrópicos.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Definição</span>

        <h2>1. O Que é Ecologia</h2>

        <p>
          A <strong>Ecologia</strong> (do grego <em>oikos</em> = casa +{" "}
          <em>logos</em> = estudo) é o ramo da Biologia que investiga as{" "}
          <strong>interações dos seres vivos entre si e com o ambiente físico</strong>{" "}
          em que habitam. O termo foi cunhado pelo biólogo alemão{" "}
          <strong>Ernst Haeckel</strong> em 1866, mas o campo só ganhou
          identidade científica sólida no século XX, com os trabalhos de{" "}
          <strong>Charles Elton</strong> (cadeias alimentares, 1927) e{" "}
          <strong>Eugene Odum</strong> (ecologia de ecossistemas, 1953).
        </p>

        <p>
          Trata-se de uma ciência <strong>integradora</strong>: dialoga com
          Geologia, Climatologia, Química, Física e até com a Economia
          (economia ecológica, serviços ecossistêmicos). No contexto do ENEM,
          a Ecologia aparece sempre ligada à sustentabilidade, aos impactos
          ambientais e à biodiversidade, tornando-a obrigatória para qualquer
          candidato bem preparado.
        </p>

        <div className="lesson-highlight">
          <h3>Os dois pilares do estudo ecológico</h3>
          <p>
            A Ecologia opera em dois grandes eixos complementares:{" "}
            <strong>estrutura</strong> (quem está onde, quantos são, como se
            distribuem) e <strong>função</strong> (como a energia e os
            nutrientes circulam entre os seres vivos e o ambiente). Nenhum
            fenômeno ecológico pode ser completamente compreendido sem
            considerar ambos.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Autoecologia</h3>
            <p>Relação de um único indivíduo ou espécie com seu ambiente.</p>
          </div>

          <div className="lesson-card">
            <span>👥</span>
            <h3>Demoecologia</h3>
            <p>Dinâmica das populações: crescimento, densidade e estrutura etária.</p>
          </div>

          <div className="lesson-card">
            <span>🐾</span>
            <h3>Sinecologia</h3>
            <p>Estudo das comunidades e ecossistemas como unidades integradas.</p>
          </div>

          <div className="lesson-card">
            <span>🌍</span>
            <h3>Ecologia Global</h3>
            <p>Biomas, ciclos biogeoquímicos e mudanças climáticas planetárias.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Níveis de Organização Ecológica</span>

        <h2>2. Da Molécula à Biosfera: Os Níveis de Organização</h2>

        <p>
          A vida se organiza em uma <strong>hierarquia de complexidade crescente</strong>.
          Em cada degrau, unidades menores se agrupam e surgem{" "}
          <strong>propriedades emergentes</strong> — características novas que não
          existiam nas partes isoladas. O ecologista trabalha especialmente com
          os níveis acima do organismo individual:
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 780 160" width="780" height="160" aria-label="Pirâmide dos níveis de organização ecológica, do indivíduo à biosfera">
            {[
              { x: 10,  label: "Indivíduo",   c: "#0ea5e9" },
              { x: 120, label: "População",   c: "#3b82f6" },
              { x: 230, label: "Comunidade",  c: "#6366f1" },
              { x: 340, label: "Ecossistema", c: "#8b5cf6" },
              { x: 450, label: "Bioma",       c: "#a855f7" },
              { x: 560, label: "Biosfera",    c: "#d946ef" },
            ].map((s, i) => (
              <g key={s.label}>
                <rect x={s.x} y={48} width={105} height={52} rx={11} fill={s.c} opacity={0.18 + i * 0.04} stroke={s.c} strokeWidth={1.8} />
                <text x={s.x + 52} y={78} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">{s.label}</text>
                {i < 5 && (
                  <polygon points={`${s.x + 108},74 ${s.x + 122},68 ${s.x + 122},80`} fill="#9ca3af" />
                )}
              </g>
            ))}
            <text x={390} y={24} textAnchor="middle" fontSize={12} fontStyle="italic" fill="#6b7280">complexidade e abrangência crescentes →</text>
            <text x={390} y={138} textAnchor="middle" fontSize={11} fill="#6b7280">cada nível inclui e supera o anterior, gerando propriedades emergentes</text>
          </svg>
          <figcaption>Os seis níveis de organização ecológica: do indivíduo à biosfera. Cada nível engloba o anterior e apresenta características novas.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Nível</th>
                <th>Definição objetiva</th>
                <th>Exemplo brasileiro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Indivíduo</strong></td>
                <td>Um único organismo de determinada espécie</td>
                <td>Uma onça-pintada solitária</td>
              </tr>
              <tr>
                <td><strong>População</strong></td>
                <td>Indivíduos da mesma espécie, mesma área e mesmo tempo</td>
                <td>Todas as onças do Pantanal</td>
              </tr>
              <tr>
                <td><strong>Comunidade (biocenose)</strong></td>
                <td>Conjunto de populações de diferentes espécies na mesma área</td>
                <td>Onças, capivaras, jacarés, garças e vegetação do Pantanal</td>
              </tr>
              <tr>
                <td><strong>Ecossistema</strong></td>
                <td>Comunidade + ambiente físico-químico (biótopo)</td>
                <td>Pantanal (seres vivos + água, solo, luz, temperatura)</td>
              </tr>
              <tr>
                <td><strong>Bioma</strong></td>
                <td>Conjunto de ecossistemas com clima e vegetação semelhantes</td>
                <td>Cerrado (abrange vários ecossistemas de savana)</td>
              </tr>
              <tr>
                <td><strong>Biosfera</strong></td>
                <td>Totalidade de seres vivos e seus ambientes na Terra</td>
                <td>Toda a vida no planeta, da fossa oceânica às nuvens</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Atenção ao ENEM:</strong> o enunciado pode citar
            "biocenose" ou "comunidade biótica" como sinônimos. Já{" "}
            <strong>"biótopo"</strong> designa apenas o componente físico
            (abiótico) do ecossistema. Não confunda biótopo com biotopo (grafia
            arcaica) — ambos se referem ao mesmo conceito.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fatores Bióticos e Abióticos</span>

        <h2>3. Fatores Bióticos × Fatores Abióticos</h2>

        <p>
          Todo ecossistema resulta da interação permanente entre dois grandes
          conjuntos de fatores. Os <strong>fatores bióticos</strong> compreendem
          todos os seres vivos e suas interações — predação, competição,
          parasitismo, mutualismo. Os <strong>fatores abióticos</strong> são os
          componentes físicos e químicos do ambiente, que condicionam onde e como
          os seres vivos podem existir.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Exemplos</th>
                <th>Por que importa ecologicamente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Luz solar</strong> (abiótico)</td>
                <td>Fotoperíodo, intensidade luminosa</td>
                <td>Controla fotossíntese, floração, migração e hibernação</td>
              </tr>
              <tr>
                <td><strong>Temperatura</strong> (abiótico)</td>
                <td>Média anual, amplitude térmica</td>
                <td>Determina distribuição de espécies e taxa metabólica</td>
              </tr>
              <tr>
                <td><strong>Água e umidade</strong> (abiótico)</td>
                <td>Chuvas, salinidade, disponibilidade</td>
                <td>Fator limitante em desertos; estrutura biomas inteiros</td>
              </tr>
              <tr>
                <td><strong>Solo (edáfico)</strong> (abiótico)</td>
                <td>pH, textura, nutrientes minerais</td>
                <td>Define flora e, consequentemente, toda a teia alimentar</td>
              </tr>
              <tr>
                <td><strong>Produtores</strong> (biótico)</td>
                <td>Plantas, algas, cianobactérias</td>
                <td>Base energética de todos os ecossistemas</td>
              </tr>
              <tr>
                <td><strong>Consumidores</strong> (biótico)</td>
                <td>Herbívoros, carnívoros, onívoros</td>
                <td>Transferem energia e controlam populações</td>
              </tr>
              <tr>
                <td><strong>Decompositores</strong> (biótico)</td>
                <td>Fungos, bactérias saprófitas</td>
                <td>Reciclam nutrientes, fechando os ciclos biogeoquímicos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>☀️</span>
            <h3>Fator limitante</h3>
            <p>O fator abiótico que, por estar em escassez ou excesso, restringe o crescimento de uma população (lei de Liebig).</p>
          </div>

          <div className="lesson-card">
            <span>🌡️</span>
            <h3>Eurítopo × Estenotopo</h3>
            <p>Espécies eurítopas toleram grande variação do fator; estenotopas são sensíveis — boas indicadoras de qualidade ambiental.</p>
          </div>

          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Resiliência</h3>
            <p>Capacidade de um ecossistema retornar ao equilíbrio após uma perturbação. Alta biodiversidade → maior resiliência.</p>
          </div>

          <div className="lesson-card">
            <span>🔄</span>
            <h3>Retroalimentação</h3>
            <p>Predador controla presa (feedback negativo), que por sua vez influencia a disponibilidade de alimento do predador.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Habitat × Nicho Ecológico</span>

        <h2>4. Habitat e Nicho Ecológico — A Distinção Mais Cobrada</h2>

        <p>
          Poucos conceitos geram tanta confusão — e tanta questão de vestibular —
          quanto a diferença entre <strong>habitat</strong> e{" "}
          <strong>nicho ecológico</strong>. A analogia consagrada na literatura
          didática resolve de imediato: o habitat é o <em>endereço</em> da
          espécie (onde ela mora), enquanto o nicho é a sua <em>profissão</em>{" "}
          (o que ela faz dentro do ecossistema).
        </p>

        <div className="lesson-highlight">
          <h3>Habitat</h3>
          <p>
            O <strong>habitat</strong> é o espaço físico onde uma espécie vive e
            encontra as condições mínimas para sobreviver: temperatura adequada,
            abrigo, água, substrato para reprodução. O habitat do mico-leão-
            dourado é a Mata Atlântica; o do boto-rosa é o Rio Amazonas; o da
            arara-azul é o Pantanal. Diferentes espécies podem compartilhar o
            mesmo habitat sem necessariamente ter o mesmo nicho.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Nicho Ecológico</h3>
          <p>
            O <strong>nicho ecológico</strong> é o conjunto de todos os papéis
            funcionais que uma espécie desempenha: o que ela come e em que
            horário, quem a predata, como e onde se reproduz, quais relações
            simbióticas mantém, qual faixa de temperatura e umidade suporta.
            O nicho é, portanto, um conceito multidimensional — uma{" "}
            <strong>"hipervolume n-dimensional"</strong>, conforme definiu G. E.
            Hutchinson em 1957.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 200" width="680" height="200" aria-label="Diagrama comparando habitat e nicho ecológico">
            {/* Habitat box */}
            <rect x={30} y={30} width={280} height={140} rx={14} fill="#0ea5e9" opacity={0.1} stroke="#0ea5e9" strokeWidth={2} />
            <text x={170} y={58} textAnchor="middle" fontSize={15} fontWeight={800} fill="#0369a1">HABITAT</text>
            <text x={170} y={80} textAnchor="middle" fontSize={12} fill="#0369a1">"Endereço" da espécie</text>
            <text x={170} y={100} textAnchor="middle" fontSize={11} fill="#374151">• local físico onde vive</text>
            <text x={170} y={118} textAnchor="middle" fontSize={11} fill="#374151">• pode ser compartilhado</text>
            <text x={170} y={136} textAnchor="middle" fontSize={11} fill="#374151">• ex.: Copa da árvore</text>
            <text x={170} y={154} textAnchor="middle" fontSize={11} fill="#374151">• ex.: Rio, solo, rocha</text>
            {/* Nicho box */}
            <rect x={370} y={30} width={280} height={140} rx={14} fill="#a855f7" opacity={0.1} stroke="#a855f7" strokeWidth={2} />
            <text x={510} y={58} textAnchor="middle" fontSize={15} fontWeight={800} fill="#7c3aed">NICHO ECOLÓGICO</text>
            <text x={510} y={80} textAnchor="middle" fontSize={12} fill="#7c3aed">"Profissão" da espécie</text>
            <text x={510} y={100} textAnchor="middle" fontSize={11} fill="#374151">• o que come e quando</text>
            <text x={510} y={118} textAnchor="middle" fontSize={11} fill="#374151">• quem a predata</text>
            <text x={510} y={136} textAnchor="middle" fontSize={11} fill="#374151">• como e onde se reproduz</text>
            <text x={510} y={154} textAnchor="middle" fontSize={11} fill="#374151">• tolerâncias a fatores abióticos</text>
            {/* VS label */}
            <text x={340} y={108} textAnchor="middle" fontSize={18} fontWeight={900} fill="#6b7280">≠</text>
          </svg>
          <figcaption>Habitat (endereço) e nicho ecológico (profissão) são conceitos distintos e complementares. Duas espécies podem dividir o habitat, mas não o nicho.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Princípio de Exclusão Competitiva (Gause, 1934)</h3>
          <p>
            O biólogo russo <strong>G. F. Gause</strong> demonstrou
            experimentalmente com paramécios que duas espécies com nichos
            ecológicos <em>idênticos</em> não conseguem coexistir
            indefinidamente no mesmo ambiente. Uma delas inevitavelmente exclui
            a outra — seja por mortalidade, seja por emigração. Como saída
            evolutiva, as espécies frequentemente passam por{" "}
            <strong>deslocamento de nicho</strong>: cada uma especializa-se em
            uma fatia diferente do recurso, viabilizando a coexistência. Esse
            fenômeno explica, por exemplo, por que diferentes espécies de
            tentilhões das Galápagos possuem bicos distintos para explorar
            recursos alimentares diferentes no mesmo habitat.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Habitat</th>
                <th>Nicho Ecológico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>O que descreve</td>
                <td>Onde a espécie vive (endereço físico)</td>
                <td>O que a espécie faz (papel funcional)</td>
              </tr>
              <tr>
                <td>Pode ser compartilhado?</td>
                <td>Sim — várias espécies no mesmo local</td>
                <td>Não totalmente — princípio de Gause</td>
              </tr>
              <tr>
                <td>Dimensões</td>
                <td>Espacial (latitude, altitude, substrato)</td>
                <td>Multidimensional (alimentação, reprodução, tolerâncias)</td>
              </tr>
              <tr>
                <td>Exemplo</td>
                <td>Mata ciliar — habitat do gavião-real</td>
                <td>Predador de topo; caça mamíferos médios ao amanhecer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cadeias e Teias Alimentares</span>

        <h2>5. Cadeias Alimentares, Teias e Níveis Tróficos</h2>

        <p>
          A energia solar capturada pelos produtores flui pelo ecossistema
          através das <strong>cadeias alimentares</strong> — sequências lineares
          de "quem come quem". Na natureza, essas cadeias se entrelaçam em
          redes complexas chamadas <strong>teias alimentares</strong>. Cada
          posição nessa rede recebe o nome de <strong>nível trófico</strong>.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 760 180" width="760" height="180" aria-label="Cadeia alimentar com fluxo de energia: capim, gafanhoto, sapo, cobra, gavião e decompositores">
            {/* Boxes */}
            {[
              { x: 20,  label: "Capim",       sub: "Produtor",      c: "#16a34a" },
              { x: 155, label: "Gafanhoto",   sub: "Consumidor 1°", c: "#ca8a04" },
              { x: 290, label: "Sapo",        sub: "Consumidor 2°", c: "#0891b2" },
              { x: 425, label: "Cobra",       sub: "Consumidor 3°", c: "#dc2626" },
              { x: 560, label: "Gavião",      sub: "Consumidor 4°", c: "#7c3aed" },
            ].map((s) => (
              <g key={s.label}>
                <rect x={s.x} y={42} width={118} height={60} rx={12} fill={s.c} opacity={0.13} stroke={s.c} strokeWidth={2} />
                <text x={s.x + 59} y={68} textAnchor="middle" fontSize={14} fontWeight={800} fill="#1f2937">{s.label}</text>
                <text x={s.x + 59} y={88} textAnchor="middle" fontSize={11} fill="#6b7280">{s.sub}</text>
              </g>
            ))}
            {/* Arrows */}
            {[138, 273, 408, 543].map((x) => (
              <polygon key={x} points={`${x},72 ${x + 15},66 ${x + 15},78`} fill="#9ca3af" />
            ))}
            {/* Decomposers below */}
            <rect x={290} y={126} width={180} height={42} rx={10} fill="#92400e" opacity={0.13} stroke="#92400e" strokeWidth={1.5} strokeDasharray="5 3" />
            <text x={380} y={149} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">Decompositores</text>
            <text x={380} y={163} textAnchor="middle" fontSize={10} fill="#92400e">(fungos e bactérias)</text>
            <line x1={380} y1={102} x2={380} y2={126} stroke="#92400e" strokeWidth={1.5} strokeDasharray="4 3" />
            {/* Sun icon */}
            <circle cx={700} cy={72} r={28} fill="#fef9c3" stroke="#facc15" strokeWidth={2} />
            <text x={700} y={69} textAnchor="middle" fontSize={11} fontWeight={700} fill="#854d0e">Energia</text>
            <text x={700} y={83} textAnchor="middle" fontSize={11} fontWeight={700} fill="#854d0e">Solar</text>
            <line x1={672} y1={72} x2={680} y2={72} stroke="#facc15" strokeWidth={2} markerEnd="url(#arr)" />
            <polygon points="680,72 672,68 672,76" fill="#facc15" />
            <line x1={20} y1={72} x2={8} y2={72} stroke="#facc15" strokeWidth={2} />
            <polygon points="20,72 8,68 8,76" fill="#16a34a" />
            <text x={390} y={20} textAnchor="middle" fontSize={12} fontStyle="italic" fill="#6b7280">fluxo de energia →    (cada seta = transferência de ~10% da energia)</text>
          </svg>
          <figcaption>Cadeia alimentar simplificada. A energia flui do sol aos produtores e segue pelos consumidores, com perdas de ~90% em cada nível. Decompositores encerram o ciclo.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Nível Trófico</th>
                <th>Denominação alternativa</th>
                <th>Modo de nutrição</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1° nível</td>
                <td><strong>Produtores</strong></td>
                <td>Autótrofos fotossintetizantes (ou quimiossintetizantes)</td>
                <td>Plantas, algas, cianobactérias, fitoplâncton</td>
              </tr>
              <tr>
                <td>2° nível</td>
                <td><strong>Consumidores primários</strong></td>
                <td>Herbívoros heterótrofos</td>
                <td>Gafanhoto, vaca, tartaruga-verde, lagarta</td>
              </tr>
              <tr>
                <td>3° nível</td>
                <td><strong>Consumidores secundários</strong></td>
                <td>Carnívoros de 1ª ordem</td>
                <td>Sapo, aranha, sardinha, cobra-d'água</td>
              </tr>
              <tr>
                <td>4° nível</td>
                <td><strong>Consumidores terciários</strong></td>
                <td>Carnívoros de 2ª ordem</td>
                <td>Cobra, atum, jacaré-do-pantanal</td>
              </tr>
              <tr>
                <td>Topo</td>
                <td><strong>Predadores de topo</strong></td>
                <td>Carnívoros sem predadores naturais</td>
                <td>Gavião-real, onça-pintada, boto-rosa</td>
              </tr>
              <tr>
                <td>Lateral</td>
                <td><strong>Decompositores / Saprófitas</strong></td>
                <td>Heterótrofos que mineralizam matéria orgânica</td>
                <td>Fungos, bactérias decompositoras, minhocas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Regra dos 10% e a pirâmide de energia</h3>
          <p>
            Em cada transferência de um nível trófico ao seguinte, aproximadamente{" "}
            <strong>90% da energia é perdida</strong> como calor (entropia) — apenas{" "}
            ~10% é incorporada à biomassa do consumidor. Isso explica por que as
            pirâmides de energia têm base larga (produtores) e topo estreito
            (predadores), e por que uma cadeia alimentar raramente ultrapassa
            4 a 5 elos: não restaria energia suficiente para sustentar mais níveis.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Autótrofo</h3>
            <p>Produz seu próprio alimento a partir de substâncias inorgânicas. Fotossíntese (luz) ou quimiossíntese (reações químicas).</p>
          </div>

          <div className="lesson-card">
            <span>🦌</span>
            <h3>Heterótrofo</h3>
            <p>Depende de matéria orgânica pré-fabricada. Inclui todos os animais, fungos e a maioria das bactérias.</p>
          </div>

          <div className="lesson-card">
            <span>🍂</span>
            <h3>Detritívoro</h3>
            <p>Consome detritos (fragmentos de matéria orgânica morta). Ex.: minhoca, barata, camarão-de-beira.</p>
          </div>

          <div className="lesson-card">
            <span>🦠</span>
            <h3>Decompositor</h3>
            <p>Secreta enzimas externas e absorve moléculas simples. Mineraliza matéria orgânica, devolvendo nutrientes ao biótopo.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ecossistema e Biótopo</span>

        <h2>6. Ecossistema: Biocenose + Biótopo</h2>

        <p>
          O conceito de <strong>ecossistema</strong> foi introduzido pelo
          botânico britânico <strong>Arthur Tansley</strong> em 1935. Um
          ecossistema é a unidade funcional da Ecologia: engloba todos os seres
          vivos de uma área (<strong>biocenose</strong>) em interação com o
          ambiente físico-químico correspondente (<strong>biótopo</strong>).
          A fronteira de um ecossistema pode ser traçada em qualquer escala —
          de um tronco podre a um oceano inteiro.
        </p>

        <div className="lesson-highlight">
          <p>
            <strong>Equação conceitual:</strong>{" "}
            Ecossistema = Biocenose (componente biótico) + Biótopo (componente abiótico)
          </p>
        </div>

        <p>
          A <strong>biocenose</strong> pode ainda ser subdividida em:{" "}
          <strong>fitocenose</strong> (flora), <strong>zoocenose</strong>{" "}
          (fauna), <strong>micobiota</strong> (fungos) e{" "}
          <strong>microbiota</strong> (microrganismos). Já o{" "}
          <strong>biótopo</strong> compreende o substrato físico (solo,
          sedimento, água), os fatores climáticos (temperatura, umidade,
          luz) e os minerais e gases disponíveis.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Ecossistemas aquáticos</h3>
            <p>Lagos, rios, manguezais, recifes de coral, oceanos abertos — cada um com biótopo e biocenose distintos.</p>
          </div>

          <div className="lesson-card">
            <span>🌳</span>
            <h3>Ecossistemas terrestres</h3>
            <p>Florestas tropicais, savanas, desertos, tundra — definidos principalmente pela precipitação e temperatura.</p>
          </div>

          <div className="lesson-card">
            <span>🏙️</span>
            <h3>Ecossistemas urbanos</h3>
            <p>Cidades são ecossistemas altamente modificados, com fluxo de energia e matéria profundamente dependente do entorno.</p>
          </div>

          <div className="lesson-card">
            <span>🌱</span>
            <h3>Ecossistemas artificiais</h3>
            <p>Aquário, viveiro, lavoura irrigada — mantidos por intervenção humana constante.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ecótono e Efeito de Borda</span>

        <h2>7. Ecótono — Zona de Transição e Efeito de Borda</h2>

        <p>
          Na natureza, dois ecossistemas raramente terminam de modo abrupto.
          Entre eles existe uma <strong>zona de transição gradual</strong> chamada{" "}
          <strong>ecótono</strong> (do grego <em>oikos</em> = casa +{" "}
          <em>tonos</em> = tensão). O ecótono compartilha características de
          ambos os ecossistemas adjacentes, além de possuir condições únicas
          que permitem a presença de espécies exclusivas.
        </p>

        <div className="lesson-highlight">
          <h3>Efeito de Borda</h3>
          <p>
            O <strong>efeito de borda</strong> é o fenômeno pelo qual os ecótonos
            apresentam maior <strong>riqueza de espécies</strong> do que os
            ecossistemas contíguos. Isso ocorre porque o ecótono abriga espécies
            do ecossistema A, espécies do ecossistema B e espécies exclusivas da
            transição. Contudo, esse benefício tem um lado negativo: em
            paisagens fragmentadas (consequência do desmatamento), o aumento da
            proporção de borda em relação à área interior torna os fragmentos
            mais vulneráveis a invasões, ventos, variações térmicas e pressão
            de espécies generalistas — prejudicando espécies que necessitam
            de interior florestal (espécies de "interior").
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Manguezal</h3>
            <p>Ecótono entre rios/mar e terra firme. Berçário de peixes e crustáceos; altíssima produtividade primária.</p>
          </div>

          <div className="lesson-card">
            <span>🌅</span>
            <h3>Restinga</h3>
            <p>Transição entre praia arenosa e Mata Atlântica. Sujeita a alta insolação, salinidade e vento.</p>
          </div>

          <div className="lesson-card">
            <span>🌾</span>
            <h3>Cerradão</h3>
            <p>Transição entre Cerrado e Mata Atlântica (ou Amazônia). Vegetação mais densa que o cerrado sensu stricto.</p>
          </div>

          <div className="lesson-card">
            <span>🏞️</span>
            <h3>Mata Ciliar</h3>
            <p>Floresta às margens de cursos d'água. Ecótono aquático-terrestre fundamental na contenção de erosão e sedimentos.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Pegadinha frequente:</strong> questões de vestibular
            afirmam que ecótonos "sempre têm mais biodiversidade" — isso é
            correto em paisagens naturais contínuas (efeito de borda positivo).
            Porém, em paisagens fragmentadas pelo desmatamento, o efeito de
            borda passa a ser <em>negativo</em>, pois expõe as espécies
            sensíveis ao interior a condições adversas. O ENEM pode explorar
            esse paradoxo.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese e Aplicações</span>

        <h2>8. Aplicações e Inter-Relações dos Conceitos</h2>

        <p>
          Os conceitos apresentados neste capítulo não existem de forma isolada:
          eles se articulam continuamente nas questões do ENEM e dos vestibulares
          de ponta. Um enunciado sobre uma espécie invasora mobiliza população,
          nicho, exclusão competitiva e efeito de borda ao mesmo tempo. Um
          problema de desmatamento envolve fragmentação de habitat, destruição
          de ecótonos e alteração da teia alimentar.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🦁</span>
            <h3>Conservação da biodiversidade</h3>
            <p>Corredores ecológicos conectam fragmentos e restauram fluxo gênico — baseados no conceito de habitat mínimo viável.</p>
          </div>

          <div className="lesson-card">
            <span>🌾</span>
            <h3>Controle biológico de pragas</h3>
            <p>Introduzir o predador natural de uma praga manipula a teia alimentar e os nichos — sem agrotóxicos.</p>
          </div>

          <div className="lesson-card">
            <span>🏥</span>
            <h3>Epidemiologia</h3>
            <p>Vetores (Aedes aegypti, Anopheles) e reservatórios de vírus têm habitat e nicho que determinam o risco de epidemia.</p>
          </div>

          <div className="lesson-card">
            <span>🌡️</span>
            <h3>Mudanças climáticas</h3>
            <p>O aquecimento global altera fatores abióticos → desloca habitats e nichos → reorganiza comunidades inteiras.</p>
          </div>

          <div className="lesson-card">
            <span>🐟</span>
            <h3>Pesca sustentável</h3>
            <p>Respeitar a capacidade suporte (K) das populações de peixes evita o colapso dos estoques pesqueiros.</p>
          </div>

          <div className="lesson-card">
            <span>🏙️</span>
            <h3>Planejamento urbano</h3>
            <p>Cidades bem planejadas preservam ecótonos (matas ciliares, restingas) e reduzem enchentes e perda de biodiversidade.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Mapa conceitual-síntese</h3>
          <p>
            <strong>Indivíduo</strong> → pertence a uma <strong>espécie</strong>{" "}
            → vive em um <strong>habitat</strong> → ocupa um{" "}
            <strong>nicho ecológico</strong> → integra uma{" "}
            <strong>população</strong> → coexiste com outras em uma{" "}
            <strong>comunidade (biocenose)</strong> → interage com o{" "}
            <strong>biótopo</strong> formando o{" "}
            <strong>ecossistema</strong> → ecossistemas com características
            similares formam um <strong>bioma</strong> → todos os biomas
            constituem a <strong>biosfera</strong>. Entre ecossistemas
            adjacentes existem os <strong>ecótonos</strong>, marcados pelo{" "}
            <strong>efeito de borda</strong>.
          </p>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Níveis de organização ecológica"
          statement={
            <p>
              Considere os seguintes níveis ecológicos: bioma, ecossistema,
              comunidade, população, indivíduo, biosfera. Qual é a ordem
              correta, do menor para o maior nível de organização?
            </p>
          }
          options={[
            { letter: "a", text: "Biosfera → bioma → ecossistema → comunidade → população → indivíduo" },
            {
              letter: "b",
              text: "Indivíduo → população → comunidade → ecossistema → bioma → biosfera",
              correct: true,
            },
            { letter: "c", text: "Indivíduo → ecossistema → comunidade → população → bioma → biosfera" },
            { letter: "d", text: "Comunidade → ecossistema → população → indivíduo → bioma → biosfera" },
          ]}
          resolution={
            <p>
              A sequência crescente de complexidade e abrangência é:{" "}
              <strong>indivíduo → população → comunidade → ecossistema → bioma → biosfera</strong>.
              Cada nível engloba o anterior e apresenta propriedades emergentes.
              O ecossistema acrescenta o biótopo (componente abiótico) à
              comunidade (biocenose).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Habitat versus nicho ecológico"
          statement={
            <p>
              Duas espécies de aves habitam o mesmo bosque de cerrado, mas uma
              se alimenta de insetos no solo ao amanhecer e a outra captura
              insetos nos galhos ao entardecer. Segundo o princípio de exclusão
              competitiva de Gause, a coexistência dessas duas espécies é
              possível porque:
            </p>
          }
          options={[
            { letter: "a", text: "Elas ocupam o mesmo nicho e, por isso, não competem" },
            {
              letter: "b",
              text: "Elas compartilham o mesmo habitat, mas possuem nichos ecológicos distintos, evitando competição total",
              correct: true,
            },
            { letter: "c", text: "Elas pertencem à mesma espécie e colaboram na busca por alimento" },
            { letter: "d", text: "O princípio de Gause prevê que nichos idênticos sempre permitem coexistência" },
          ]}
          resolution={
            <p>
              O princípio de Gause afirma que duas espécies com nichos
              idênticos não coexistem. Como essas aves diferem no substrato
              (solo × galhos), no horário (amanhecer × entardecer) e
              possivelmente na presa, seus nichos são distintos — isso permite
              a partilha do mesmo habitat sem exclusão competitiva.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Fluxo de energia e regra dos 10%"
          statement={
            <p>
              Em uma cadeia alimentar, uma plantação de capim fixa 10 000 kcal
              de energia solar por m² ao ano. Considerando que apenas 10% da
              energia é transferida em cada nível trófico, qual seria a energia
              máxima disponível para um consumidor secundário (3° nível trófico)?
            </p>
          }
          options={[
            { letter: "a", text: "1 000 kcal" },
            { letter: "b", text: "500 kcal" },
            {
              letter: "c",
              text: "100 kcal",
              correct: true,
            },
            { letter: "d", text: "10 kcal" },
          ]}
          resolution={
            <p>
              Produtor: 10 000 kcal. Consumidor primário (2° nível):{" "}
              10 000 × 10% = <strong>1 000 kcal</strong>. Consumidor
              secundário (3° nível): 1 000 × 10% = <strong>100 kcal</strong>.
              O consumidor secundário é o 3° nível trófico, pois o produtor
              ocupa o 1°, o consumidor primário o 2° e o secundário o 3°.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Desmatamento e efeito de borda (ENEM)"
          statement={
            <p>
              O desmatamento fragmenta grandes florestas em pequenos remanescentes
              isolados. Pesquisadores observaram que nesses fragmentos a
              biodiversidade diminui ao longo do tempo, especialmente a de
              espécies que requerem áreas de interior florestal. Esse fenômeno
              está diretamente relacionado a:
            </p>
          }
          options={[
            { letter: "a", text: "Aumento da área de biótopo disponível para os produtores" },
            {
              letter: "b",
              text: "Ampliação desproporcional da zona de ecótono (borda) em relação à área de interior, expondo espécies sensíveis a condições adversas",
              correct: true,
            },
            { letter: "c", text: "Redução da competição interespecífica, que favorece espécies raras" },
            { letter: "d", text: "Aumento da disponibilidade de nichos ecológicos livres para espécies invasoras nativas" },
          ]}
          resolution={
            <p>
              Em fragmentos pequenos, a proporção de borda (ecótono) é
              enorme em relação ao interior. O <strong>efeito de borda negativo</strong>{" "}
              expõe as espécies de interior a maior variação de temperatura,
              umidade, vento e pressão de espécies generalistas e invasoras.
              Espécies sensíveis (ex.: aves de dossel, mamíferos de médio e
              grande porte) tendem a desaparecer primeiro — processo chamado
              de relaxação faunística.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Espécie invasora e nicho ecológico"
          statement={
            <p>
              A tilápia-do-nilo (<em>Oreochromis niloticus</em>), introduzida
              em rios brasileiros para a aquicultura, expandiu-se e passou a
              competir com espécies nativas de peixes onívoros. Com base nos
              conceitos ecológicos, qual consequência mais provável esse processo
              pode ter sobre as espécies nativas?
            </p>
          }
          options={[
            { letter: "a", text: "Deslocamento de nicho ou exclusão competitiva das espécies nativas" , correct: true },
            { letter: "b", text: "Aumento da biodiversidade local, pois a tilápia ocupa um nicho vazio" },
            { letter: "c", text: "Nenhum impacto, pois espécies de habitat distintos nunca competem" },
            { letter: "d", text: "Formação de um ecótono entre as populações de tilápia e os peixes nativos" },
          ]}
          resolution={
            <p>
              A tilápia, ao ocupar nicho similar ao de peixes onívoros nativos,
              desencadeia o <strong>princípio de exclusão competitiva</strong>:
              sendo geralmente mais prolífica e resistente, tende a suplantar
              as espécies nativas, que podem sofrer redução populacional
              (exclusão) ou, em prazo evolutivo mais longo, especialização em
              um sub-nicho diferente (deslocamento de nicho). Essa é uma das
              principais causas de perda de biodiversidade em ambientes aquáticos
              continentais brasileiros.
            </p>
          }
        />
      </section>
    </article>
  );
}
