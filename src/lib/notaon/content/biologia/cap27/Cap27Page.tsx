"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap27Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 27</span>

          <h1>Reino Animalia I: Poríferos, Cnidários, Platelmintos e Nematelmintos</h1>

          <p>
            O Reino Animalia reúne mais de um milhão de espécies descritas, organizadas
            segundo critérios evolutivos precisos. Neste capítulo você vai dominar os
            quatro primeiros filos — Porifera, Cnidaria, Platyhelminthes e Nematoda —,
            compreender os grandes marcos da complexidade animal (simetria, folhetos
            germinativos, celoma) e conhecer as principais parasitoses humanas cobradas
            sistematicamente no ENEM e nos vestibulares de todo o Brasil.
          </p>
        </div>
      </section>

      {/* ───────────────────── SEÇÃO 1 ───────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Critérios de Classificação</span>

        <h2>1. Introdução ao Reino Animalia e Critérios Evolutivos</h2>

        <p>
          Os animais (Metazoa) são organismos <strong>eucariotos, pluricelulares e
          heterótrofos por ingestão</strong>: ingerem alimento e o digerem em uma
          cavidade interna, ao contrário dos fungos que digerem externamente. Quase
          todos se reproduzem de forma <strong>sexuada</strong> e passam por um
          desenvolvimento embrionário com formação de folhetos germinativos. A
          classificação moderna usa um conjunto de critérios que refletem a história
          evolutiva do grupo:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Simetria Corporal</h3>
            <p>
              <strong>Assimetria</strong> (esponjas), <strong>radial</strong> (cnidários
              e equinodermos adultos) ou <strong>bilateral</strong> (a maioria dos
              filos — origina cabeça, cauda, dorso e ventre).
            </p>
          </div>

          <div className="lesson-card">
            <span>🧫</span>
            <h3>Folhetos Germinativos</h3>
            <p>
              <strong>Diblásticos</strong>: ectoderme + endoderme (cnidários).
              <strong> Triblásticos</strong>: ectoderme + mesoderme + endoderme
              (todos os demais filos).
            </p>
          </div>

          <div className="lesson-card">
            <span>🫀</span>
            <h3>Cavidade Corporal (Celoma)</h3>
            <p>
              <strong>Acelomados</strong> (sem cavidade — platelmintos),
              <strong> pseudocelomados</strong> (cavidade sem revestimento mesodérmico
              completo — nematódeos) e <strong>celomados</strong> (cavidade revestida
              por mesoderme — anelídeos em diante).
            </p>
          </div>

          <div className="lesson-card">
            <span>🔀</span>
            <h3>Destino do Blastóporo</h3>
            <p>
              <strong>Protostômios</strong>: blastóporo origina a boca (anelídeos,
              moluscos, artrópodes). <strong>Deuterostômios</strong>: blastóporo origina
              o ânus (equinodermos e cordados).
            </p>
          </div>

          <div className="lesson-card">
            <span>🔢</span>
            <h3>Segmentação (Metameria)</h3>
            <p>
              Repetição de segmentos ao longo do corpo — ausente nos filos simples e
              presente em anelídeos e artrópodes.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧬</span>
            <h3>Sistema Digestório</h3>
            <p>
              <strong>Ausente</strong> (esponjas), <strong>incompleto</strong> — uma
              abertura (cnidários e platelmintos) — ou <strong>completo</strong> — boca
              e ânus distintos (nematódeos em diante).
            </p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 760 200" width="760" height="200" aria-label="Comparação de planos corporais: assimetria, simetria radial e bilateral">
            {/* Fundo */}
            <rect x={0} y={0} width={760} height={200} rx={14} fill="#f8fafc" />

            {/* — Assimetria (esponja) — */}
            <text x={125} y={22} textAnchor="middle" fontSize={13} fontWeight={700} fill="#374151">Assimetria</text>
            <ellipse cx={125} cy={110} rx={55} ry={75} fill="#fde68a" stroke="#d97706" strokeWidth={2} />
            <ellipse cx={110} cy={85} rx={12} ry={18} fill="#fbbf24" stroke="#d97706" strokeWidth={1.5} />
            <ellipse cx={140} cy={100} rx={10} ry={22} fill="#fbbf24" stroke="#d97706" strokeWidth={1.5} />
            <ellipse cx={120} cy={130} rx={8} ry={14} fill="#fbbf24" stroke="#d97706" strokeWidth={1.5} />
            <circle cx={125} cy={45} r={6} fill="#d97706" />
            <text x={125} y={185} textAnchor="middle" fontSize={11} fill="#6b7280">sem eixo de simetria</text>

            {/* — Simetria radial (cnidário) — */}
            <text x={385} y={22} textAnchor="middle" fontSize={13} fontWeight={700} fill="#374151">Simetria Radial</text>
            <circle cx={385} cy={105} r={72} fill="#bfdbfe" stroke="#2563eb" strokeWidth={2} />
            {[0,45,90,135,180,225,270,315].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const x2 = 385 + 72 * Math.cos(rad);
              const y2 = 105 + 72 * Math.sin(rad);
              return <line key={deg} x1={385} y1={105} x2={x2} y2={y2} stroke="#2563eb" strokeWidth={1.2} strokeDasharray="4 3" />;
            })}
            <circle cx={385} cy={105} r={18} fill="#93c5fd" stroke="#2563eb" strokeWidth={1.5} />
            <text x={385} y={110} textAnchor="middle" fontSize={10} fontWeight={700} fill="#1e3a8a">boca</text>
            <text x={385} y={185} textAnchor="middle" fontSize={11} fill="#6b7280">múltiplos eixos passam pelo centro</text>

            {/* — Simetria bilateral (platelminto/nematódeo) — */}
            <text x={630} y={22} textAnchor="middle" fontSize={13} fontWeight={700} fill="#374151">Simetria Bilateral</text>
            <ellipse cx={630} cy={105} rx={90} ry={55} fill="#d1fae5" stroke="#16a34a" strokeWidth={2} />
            <line x1={630} y1={50} x2={630} y2={160} stroke="#16a34a" strokeWidth={2} strokeDasharray="6 4" />
            <circle cx={545} cy={105} r={10} fill="#4ade80" stroke="#16a34a" strokeWidth={1.5} />
            <text x={545} y={109} textAnchor="middle" fontSize={9} fontWeight={700} fill="#14532d">boca</text>
            <circle cx={715} cy={105} r={8} fill="#86efac" stroke="#16a34a" strokeWidth={1.5} />
            <text x={715} y={109} textAnchor="middle" fontSize={9} fontWeight={700} fill="#14532d">ânus</text>
            <text x={630} y={185} textAnchor="middle" fontSize={11} fill="#6b7280">apenas 1 eixo divide lados iguais</text>
          </svg>
          <figcaption>
            Os três planos corporais dos animais: assimetria (Porifera), simetria radial
            (Cnidaria) e simetria bilateral (Platyhelminthes, Nematoda e demais filos).
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Protostômios vs. Deuterostômios — ponto crucial no ENEM</h3>
          <p>
            Nos embriões, o <strong>blastóporo</strong> é a primeira abertura que surge
            na gástrula. Nos <strong>protostômios</strong> (do grego <em>protos</em> =
            primeiro + <em>stoma</em> = boca) ele se torna a boca — padrão dos
            platelmintos, nematódeos, anelídeos, moluscos e artrópodes. Nos{" "}
            <strong>deuterostômios</strong> (<em>deuteros</em> = segundo) o blastóporo
            origina o ânus, e a boca se forma secundariamente — padrão dos equinodermos
            e cordados (incluindo humanos).
          </p>
        </div>
      </section>

      {/* ───────────────────── SEÇÃO 2 ───────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Poríferos</span>

        <h2>2. Filo Porifera — As Esponjas</h2>

        <p>
          Os poríferos são os animais mais primitivos. São exclusivamente aquáticos
          (quase todos marinhos), <strong>sésseis</strong> na fase adulta e apresentam
          uma organização celular sem tecidos verdadeiros nem órgãos — o que os torna
          únicos no reino animal. O nome vem do latim <em>porus</em> (poros) +{" "}
          <em>ferre</em> (portar): o corpo é perfurado por inúmeros poros que permitem
          a entrada contínua de água. Estima-se que uma esponja de 10 cm de altura
          filtre até 20 litros de água por dia.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🕳️</span>
            <h3>Poros e Ósculo</h3>
            <p>
              Água com partículas orgânicas entra pelos <strong>poros dérmicos
              (óstios)</strong>, circula pelo sistema de canais e sai pelo{" "}
              <strong>ósculo</strong>, abertura apical única.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌀</span>
            <h3>Coanócitos</h3>
            <p>
              Células flageladas que revestem as câmaras internas. O batimento
              do flagelo cria corrente de água e captura partículas por{" "}
              <strong>fagocitose</strong> — digestão intracelular.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Espículas</h3>
            <p>
              Estruturas de sustentação: <strong>calcáreas</strong> (CaCO₃),
              <strong> silicosas</strong> (SiO₂) ou de <strong>espongina</strong>
              (proteína flexível usada em esponjas de banho).
            </p>
          </div>

          <div className="lesson-card">
            <span>🔁</span>
            <h3>Reprodução e Regeneração</h3>
            <p>
              Reprodução sexuada (larvas ciliadas livres-natantes) e assexuada por{" "}
              <strong>gemmulação</strong> e brotamento. Fragmentos podem regenerar
              um indivíduo inteiro — poder único de totipotência.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Por que os poríferos "não têm tecidos verdadeiros"?</h3>
          <p>
            As células das esponjas são relativamente independentes e apresentam
            grande capacidade de rediferenciar-se. Não há integração funcional rígida
            entre elas como ocorre nos tecidos dos eumetazoários. O tipo celular mais
            importante é o <strong>arqueócito</strong>, uma célula ameboide totipotente
            que origina todos os outros tipos. Em razão disso, as esponjas são
            classificadas como <strong>parazoários</strong> — animais "à parte" dos
            demais (Eumetazoa).
          </p>
        </div>
      </section>

      {/* ───────────────────── SEÇÃO 3 ───────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Cnidários</span>

        <h2>3. Filo Cnidaria — Águas-Vivas, Corais, Hidras e Anêmonas</h2>

        <p>
          Com cerca de 10 000 espécies, os cnidários são os primeiros animais com{" "}
          <strong>tecidos verdadeiros</strong>, apesar de serem apenas diblásticos
          (ectoderme e endoderme, sem mesoderme verdadeira — há uma camada gelatinosa
          intermediária chamada <strong>mesogléia</strong>). Vivem em ambientes aquáticos,
          principalmente marinhos, e apresentam <strong>simetria radial</strong> —
          adaptação a capturar presas vindas de qualquer direção. O nome deriva do grego
          <em> knide</em> (urtiga): a estrutura urticante dos <strong>cnidócitos</strong>
          é o caráter diagnóstico do filo.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Cnidócitos e Nematocistos</h3>
            <p>
              Células urticantes exclusivas do filo. Contêm o{" "}
              <strong>nematocisto</strong>, uma cápsula com filamento enrolado que é
              disparado mecanicamente, inoculando toxinas para imobilizar presas ou
              repelir predadores.
            </p>
          </div>

          <div className="lesson-card">
            <span>🫙</span>
            <h3>Cavidade Gastrovascular</h3>
            <p>
              Sistema digestório <strong>incompleto</strong>: uma única abertura serve
              como boca e ânus. A digestão começa de forma extracelular na cavidade
              e termina de forma intracelular nas células da endoderme.
            </p>
          </div>

          <div className="lesson-card">
            <span>🪼</span>
            <h3>Forma Pólipo</h3>
            <p>
              Cilíndrica, séssil, fixada ao substrato. Boca e tentáculos voltados
              para cima. Exemplo: <em>Hydra</em>, anêmona, coral.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌊</span>
            <h3>Forma Medusa</h3>
            <p>
              Umbreliforme, livre-natante, planctônica. Boca voltada para baixo.
              Exemplo: água-viva (<em>Aurelia</em>).
            </p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 260" width="680" height="260" aria-label="Comparação morfológica entre pólipo e medusa">
            <rect x={0} y={0} width={680} height={260} rx={14} fill="#eff6ff" />

            {/* ── PÓLIPO (lado esquerdo) ── */}
            <text x={170} y={24} textAnchor="middle" fontSize={14} fontWeight={700} fill="#1e3a8a">Pólipo (séssil)</text>
            {/* corpo cilíndrico */}
            <rect x={135} y={90} width={70} height={120} rx={10} fill="#93c5fd" stroke="#2563eb" strokeWidth={2} />
            {/* tentáculos */}
            {[-30,-15,0,15,30].map((dx, i) => (
              <line key={i} x1={170 + dx} y1={90} x2={170 + dx * 1.6} y2={55} stroke="#2563eb" strokeWidth={3} strokeLinecap="round" />
            ))}
            {/* boca */}
            <ellipse cx={170} cy={90} rx={15} ry={6} fill="#1d4ed8" />
            <text x={200} y={94} fontSize={10} fill="#1e3a8a">boca</text>
            {/* base */}
            <rect x={125} y={210} width={90} height={14} rx={5} fill="#1d4ed8" opacity={0.4} />
            <text x={170} y={242} textAnchor="middle" fontSize={10} fill="#374151">fixado ao substrato</text>
            {/* setas */}
            <line x1={170} y1={60} x2={170} y2={40} stroke="#2563eb" strokeWidth={1.5} strokeDasharray="4 3" />
            <text x={172} y={38} fontSize={9} fill="#6b7280">tentáculos</text>

            {/* separador */}
            <line x1={340} y1={20} x2={340} y2={250} stroke="#cbd5e1" strokeWidth={1.5} strokeDasharray="6 4" />

            {/* ── MEDUSA (lado direito) ── */}
            <text x={510} y={24} textAnchor="middle" fontSize={14} fontWeight={700} fill="#0f766e">Medusa (planctônica)</text>
            {/* umbrela */}
            <path d="M 410 140 Q 510 60 610 140" fill="#99f6e4" stroke="#0d9488" strokeWidth={2} />
            <path d="M 410 140 Q 510 155 610 140" fill="#99f6e4" stroke="#0d9488" strokeWidth={1.5} />
            {/* manúbrio/boca */}
            <rect x={498} y={140} width={24} height={40} rx={4} fill="#0d9488" />
            <ellipse cx={510} cy={180} rx={12} ry={5} fill="#115e59" />
            <text x={538} y={178} fontSize={10} fill="#0f766e">boca</text>
            {/* tentáculos inferiores */}
            {[440,465,490,515,540,565,590].map((x, i) => (
              <line key={i} x1={x} y1={140} x2={x + (i - 3) * 4} y2={210} stroke="#0d9488" strokeWidth={2} strokeLinecap="round" />
            ))}
            <text x={510} y={230} textAnchor="middle" fontSize={10} fill="#374151">nada livremente na coluna d'água</text>
          </svg>
          <figcaption>
            Pólipo: forma séssil, boca voltada para cima, tentáculos ao redor.
            Medusa: forma planctônica, umbrela gelatinosa, boca voltada para baixo.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Alternância de gerações nos cnidários</h3>
          <p>
            Muitos cnidários apresentam <strong>metagênese</strong> (alternância de
            gerações): a fase pólipo (assexuada) produz medusas por brotamento, e as
            medusas (sexuadas) liberam gametas que, após fecundação, originam larvas
            ciliadas (<strong>plânulas</strong>) que se fixam e formam novos pólipos.
            Em alguns grupos (hidrozoários como <em>Hydra</em>), a fase medusa é
            reduzida ou ausente; em antozoários (corais, anêmonas), só existe a fase
            pólipo.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Importância ecológica dos corais</h3>
          <p>
            Os corais são colônias de pólipos que secretam esqueleto calcário,
            formando os <strong>recifes de coral</strong> — os "apartamentos"
            marinhos que abrigam cerca de 25% de toda a biodiversidade oceânica.
            O branqueamento dos corais, causado pelo aumento da temperatura e pela
            acidificação dos oceanos (absorção de CO₂), representa uma das crises
            ambientais mais graves do planeta.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Classe</th>
                <th>Forma predominante</th>
                <th>Exemplos</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hidrozoários</td>
                <td>Pólipo</td>
                <td><em>Hydra</em>, caravela (<em>Physalia</em>)</td>
                <td>Caravela é colônia polimórfica, não medusa individual</td>
              </tr>
              <tr>
                <td>Cifozoários</td>
                <td>Medusa</td>
                <td><em>Aurelia aurita</em> (água-viva comum)</td>
                <td>Fase pólipo reduzida</td>
              </tr>
              <tr>
                <td>Antozoários</td>
                <td>Somente pólipo</td>
                <td>Corais, anêmonas, gorgônias</td>
                <td>Sem fase medusa</td>
              </tr>
              <tr>
                <td>Cubozoários</td>
                <td>Medusa cúbica</td>
                <td><em>Chironex fleckeri</em> (vespa-do-mar)</td>
                <td>Mais tóxicos do reino animal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ───────────────────── SEÇÃO 4 ───────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Platelmintos</span>

        <h2>4. Filo Platyhelminthes — Vermes Achatados</h2>

        <p>
          Os platelmintos ("vermes chatos") foram os primeiros animais a apresentar
          os três folhetos germinativos (<strong>triblásticos</strong>) e{" "}
          <strong>simetria bilateral</strong>, avanços evolutivos enormes em relação
          aos cnidários. Contudo, não possuem cavidade corporal entre o intestino e
          a parede do corpo — são <strong>acelomados</strong>, com o interior
          preenchido por um tecido esponjoso chamado <strong>parênquima</strong>.
          O filo inclui formas de vida livre (planárias de água doce) e formas
          parasitas de grande importância médica (<em>Schistosoma</em> e <em>Taenia</em>).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📏</span>
            <h3>Corpo Achatado</h3>
            <p>
              O achatamento dorsoventral extremo substitui o celoma: facilita
              as trocas gasosas por difusão e garante que todas as células
              fiquem próximas ao meio externo.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧠</span>
            <h3>Cefalização Inicial</h3>
            <p>
              Planárias possuem um <strong>proto-encéfalo</strong> (gânglio
              cerebral) e receptores de luz (<em>ocelos</em>) — primeiros
              passos rumo ao sistema nervoso centralizado.
            </p>
          </div>

          <div className="lesson-card">
            <span>💧</span>
            <h3>Excreção por Protonefrídeos</h3>
            <p>
              Estruturas com <strong>células flama</strong> que filtram líquidos
              e eliminam excreções osmóticas — ausentes nas tênias, que dependem
              do hospedeiro.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔒</span>
            <h3>Tegumento Adaptado</h3>
            <p>
              Parasitas como tênias e <em>Schistosoma</em> possuem tegumento
              especializado resistente às enzimas do hospedeiro e capaz de
              absorver nutrientes diretamente.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Classes do filo Platyhelminthes</h3>
          <p>
            <strong>Turbellaria</strong> (planárias): vida livre, predadoras ativas,
            fotofóbicas, alta capacidade de regeneração. <strong>Trematoda</strong>
            (tremátodos/digenéticos): parasitas com ventosas — ex. <em>Schistosoma
            mansoni</em>. <strong>Cestoda</strong> (cestódeos/tênias): corpo em
            segmentos (<em>proglótides</em>), sem sistema digestório — absorvem
            nutrientes pelo tegumento diretamente do intestino do hospedeiro.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 280" width="720" height="280" aria-label="Ciclo da esquistossomose">
            <rect x={0} y={0} width={720} height={280} rx={14} fill="#fefce8" />
            <text x={360} y={24} textAnchor="middle" fontSize={15} fontWeight={800} fill="#92400e">Ciclo do Schistosoma mansoni — Esquistossomose</text>

            {/* Setas circulares — 6 etapas posicionadas em círculo */}
            {/* Posições: topo-esq(1), topo(2), topo-dir(3), baixo-dir(4), baixo(5), baixo-esq(6) */}

            {/* Nó 1 — Fezes humanas */}
            <rect x={20} y={90} width={140} height={50} rx={10} fill="#fde68a" stroke="#d97706" strokeWidth={1.5} />
            <text x={90} y={111} textAnchor="middle" fontSize={11} fontWeight={700} fill="#92400e">① Fezes humanas</text>
            <text x={90} y={127} textAnchor="middle" fontSize={10} fill="#78350f">com ovos → água doce</text>

            {/* Nó 2 — Miracídio */}
            <rect x={200} y={38} width={140} height={50} rx={10} fill="#bbf7d0" stroke="#16a34a" strokeWidth={1.5} />
            <text x={270} y={59} textAnchor="middle" fontSize={11} fontWeight={700} fill="#14532d">② Miracídio livre</text>
            <text x={270} y={75} textAnchor="middle" fontSize={10} fill="#14532d">eclosão do ovo na água</text>

            {/* Nó 3 — Caramujo */}
            <rect x={430} y={38} width={160} height={50} rx={10} fill="#e9d5ff" stroke="#7c3aed" strokeWidth={1.5} />
            <text x={510} y={59} textAnchor="middle" fontSize={11} fontWeight={700} fill="#4c1d95">③ Penetra no caramujo</text>
            <text x={510} y={75} textAnchor="middle" fontSize={10} fill="#4c1d95">Biomphalaria (hospedeiro interm.)</text>

            {/* Nó 4 — Cercárias */}
            <rect x={550} y={155} width={150} height={50} rx={10} fill="#bfdbfe" stroke="#2563eb" strokeWidth={1.5} />
            <text x={625} y={176} textAnchor="middle" fontSize={11} fontWeight={700} fill="#1e3a8a">④ Cercárias liberadas</text>
            <text x={625} y={192} textAnchor="middle" fontSize={10} fill="#1e3a8a">nadam livremente na água</text>

            {/* Nó 5 — Penetração na pele */}
            <rect x={380} y={218} width={160} height={50} rx={10} fill="#fecaca" stroke="#dc2626" strokeWidth={1.5} />
            <text x={460} y={239} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7f1d1d">⑤ Penetram na pele</text>
            <text x={460} y={255} textAnchor="middle" fontSize={10} fill="#7f1d1d">do ser humano (ativo)</text>

            {/* Nó 6 — Verme adulto */}
            <rect x={150} y={218} width={180} height={50} rx={10} fill="#fdba74" stroke="#c2410c" strokeWidth={1.5} />
            <text x={240} y={239} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7c2d12">⑥ Verme adulto</text>
            <text x={240} y={255} textAnchor="middle" fontSize={10} fill="#7c2d12">veias mesentéricas → ovos</text>

            {/* Setas de conexão */}
            <path d="M 160 110 Q 190 80 200 68" fill="none" stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arr)" />
            <path d="M 340 58 L 430 58" fill="none" stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arr)" />
            <path d="M 590 88 Q 610 120 600 155" fill="none" stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arr)" />
            <path d="M 550 195 Q 530 210 540 218" fill="none" stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arr)" />
            <path d="M 380 243 L 330 243" fill="none" stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arr)" />
            <path d="M 150 235 Q 110 200 90 150" fill="none" stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arr)" />
            <defs>
              <marker id="arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <polygon points="0 0, 7 3.5, 0 7" fill="#6b7280" />
              </marker>
            </defs>
          </svg>
          <figcaption>
            Ciclo da esquistossomose: o ser humano é o hospedeiro definitivo; o caramujo
            <em> Biomphalaria glabrata</em> é o hospedeiro intermediário. A cercária
            penetra ativamente pela pele em contato com água contaminada.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Teníase vs. Cisticercose — diferença fundamental</h3>
          <p>
            <strong>Teníase</strong>: humano ingere carne bovina ou suína crua/malpassada
            com <strong>cisticercos</strong> (larvas). O cisticerco se desenvolve em
            tênia adulta no intestino humano (hospedeiro definitivo). Sintomas: dor
            abdominal, perda de peso, visualização de proglótides nas fezes.
          </p>
          <p>
            <strong>Cisticercose</strong>: humano ingere <strong>ovos</strong> da
            <em> Taenia solium</em> (em água, verduras ou mãos contaminadas com fezes).
            Os ovos eclodem e as larvas (cisticercos) migram pela corrente sanguínea e
            se alojam em músculos, olhos e — mais grave — <strong>cérebro
            (neurocisticercose)</strong>, causando convulsões e outros sintomas
            neurológicos. Nesse caso o humano assume o papel de hospedeiro
            intermediário.
          </p>
        </div>
      </section>

      {/* ───────────────────── SEÇÃO 5 ───────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Nematelmintos</span>

        <h2>5. Filo Nematoda — Vermes Cilíndricos e Parasitas Humanos</h2>

        <p>
          Os nematódeos são vermes de <strong>corpo cilíndrico</strong>, afilado nas
          extremidades, coberto por uma cutícula resistente. São <strong>
          pseudocelomados</strong>: possuem uma cavidade entre o intestino e a parede
          do corpo, mas ela não é totalmente revestida por mesoderme — é preenchida por
          fluido sob pressão, que funciona como esqueleto hidrostático. Um avanço
          fundamental: possuem <strong>sistema digestório completo</strong> (boca e
          ânus distintos), garantindo fluxo unidirecional do alimento. São o grupo de
          animais mais numeroso em termos de indivíduos: um metro cúbico de solo
          agrícola pode conter milhões de nematódeos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🟢</span>
            <h3>Pseudoceloma</h3>
            <p>
              Cavidade entre o intestino e a musculatura sem revestimento mesodérmico
              completo. O fluido sob pressão sustenta o corpo e distribui nutrientes.
            </p>
          </div>

          <div className="lesson-card">
            <span>🍴</span>
            <h3>Digestório Completo</h3>
            <p>
              Boca e ânus distintos permitem digestão sequencial e absorção
              eficiente — marco evolutivo que torna os nematelmintos mais complexos
              que platelmintos.
            </p>
          </div>

          <div className="lesson-card">
            <span>♂️♀️</span>
            <h3>Sexos Separados</h3>
            <p>
              Dioicos (sexos separados) com <strong>dimorfismo sexual</strong>: fêmeas
              geralmente maiores que os machos, que possuem cauda curvada característica.
            </p>
          </div>

          <div className="lesson-card">
            <span>🛡️</span>
            <h3>Cutícula Resistente</h3>
            <p>
              Proteção contra sucos digestivos do hospedeiro. É trocada em{" "}
              <strong>ecdises</strong> (mudas) durante o crescimento larval —
              caráter que une nematódeos e artrópodes no clado Ecdysozoa.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Ascaris lumbricoides — Ascaridíase (lombriga)</h3>
          <p>
            Maior nematódeo parasita humano (fêmeas até 35 cm). Transmissão por
            ingestão de ovos em água ou alimentos contaminados com fezes
            (<strong>contaminação fecal-oral</strong>). As larvas eclodem no intestino
            delgado, penetram na mucosa, alcançam o fígado e pulmões pela corrente
            sanguínea, sobem pela traqueia, são engolidas e retornam ao intestino como
            adultos (<strong>ciclo de Loss</strong>). Grandes infestações causam
            obstrução intestinal e desnutrição. Profilaxia: saneamento básico,
            higiene alimentar.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Ancylostoma duodenale / Necator americanus — Ancilostomose (amarelão)</h3>
          <p>
            Peculiaridade da transmissão: as larvas filarioides vivem no solo úmido e
            <strong> penetram ativamente pela pele</strong> (geralmente entre os dedos
            dos pés descalços). Migram pelo sistema circulatório até o intestino onde
            se fixam à mucosa e <strong>sugam sangue continuamente</strong>, causando
            anemia ferropriva grave — responsável pela palidez característica
            ("amarelão") e pelo cansaço extremo. Profilaxia: uso de calçados,
            saneamento básico.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Wuchereria bancrofti — Filariose (elefantíase)</h3>
          <p>
            Transmitida pela picada do mosquito <em>Culex quinquefasciatus</em> (muriçoca).
            As microfilárias (larvas) circulam no sangue à noite (coincidindo com o
            hábito noturno do vetor). Quando adultas, os vermes obstruem os{" "}
            <strong>vasos linfáticos</strong>, causando linfedema — acúmulo de linfa
            com inchaço imenso dos membros inferiores e genitais (elefantíase).
            Profilaxia: controle do mosquito vetor.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Enterobius vermicularis — Oxiuríase (enterobíase)</h3>
          <p>
            Parasita muito comum em crianças. As fêmeas migram ao ânus à noite para
            depositar os ovos, causando <strong>coceira anal intensa</strong> que leva
            ao coçar, contaminação das mãos e reinfecção (ciclo curto por auto-infecção).
            Transmissão fecal-oral e por contato direto. Profilaxia: higiene das mãos,
            lavar roupas de cama com água quente.
          </p>
        </div>
      </section>

      {/* ───────────────────── SEÇÃO 6 ───────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Quadro Comparativo</span>

        <h2>6. Comparação dos Quatro Filos</h2>

        <p>
          A tabela abaixo sintetiza os principais caracteres evolutivos de cada filo —
          essencial para resolver questões de classificação no ENEM e vestibulares.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Porifera</th>
                <th>Cnidaria</th>
                <th>Platyhelminthes</th>
                <th>Nematoda</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tecidos verdadeiros</td>
                <td>Não</td>
                <td>Sim</td>
                <td>Sim</td>
                <td>Sim</td>
              </tr>
              <tr>
                <td>Folhetos germinativos</td>
                <td>— (sem gástrula)</td>
                <td>Diblásticos (2)</td>
                <td>Triblásticos (3)</td>
                <td>Triblásticos (3)</td>
              </tr>
              <tr>
                <td>Simetria</td>
                <td>Assimétrica</td>
                <td>Radial</td>
                <td>Bilateral</td>
                <td>Bilateral</td>
              </tr>
              <tr>
                <td>Celoma</td>
                <td>Ausente</td>
                <td>Ausente</td>
                <td>Acelomado</td>
                <td>Pseudocelomado</td>
              </tr>
              <tr>
                <td>Sistema digestório</td>
                <td>Ausente</td>
                <td>Incompleto</td>
                <td>Incompleto (tênias: ausente)</td>
                <td>Completo</td>
              </tr>
              <tr>
                <td>Sistema nervoso</td>
                <td>Ausente</td>
                <td>Rede difusa</td>
                <td>Gânglios + cordões</td>
                <td>Anel nervoso + cordões</td>
              </tr>
              <tr>
                <td>Habitat principal</td>
                <td>Aquático (marinho)</td>
                <td>Aquático (marinho)</td>
                <td>Livre/parasita aquático</td>
                <td>Solo/parasita</td>
              </tr>
              <tr>
                <td>Exemplo clássico</td>
                <td>Esponja-de-banho</td>
                <td>Água-viva, coral</td>
                <td><em>Schistosoma, Taenia</em></td>
                <td><em>Ascaris, Wuchereria</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧽</span>
            <h3>Porifera</h3>
            <p>
              Parazoários. Sem tecidos, sem simetria. Filtram até 20 L/dia.
              Coanócitos realizam digestão intracelular.
            </p>
          </div>

          <div className="lesson-card">
            <span>🪼</span>
            <h3>Cnidaria</h3>
            <p>
              Eumetazoários diblásticos. Cnidócitos exclusivos. Formas pólipo
              e medusa. Corais: recifes biogênicos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🪱</span>
            <h3>Platyhelminthes</h3>
            <p>
              Triblásticos, acelomados, bilaterais. Parasitas de grande impacto
              sanitário: esquistossomose e teníase.
            </p>
          </div>

          <div className="lesson-card">
            <span>🐛</span>
            <h3>Nematoda</h3>
            <p>
              Pseudocelomados, digestório completo. Ascaridíase, ancilostomose,
              filariose e oxiuríase são doenças prevalentes no Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────── SEÇÃO 7 ───────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Verminoses — Resumo Sanitário</span>

        <h2>7. Verminoses: Agente, Transmissão e Profilaxia</h2>

        <p>
          As verminoses causadas por platelmintos e nematódeos afetam centenas de
          milhões de pessoas no mundo, especialmente em regiões de saneamento básico
          precário. Conhecer o ciclo de cada parasita é fundamental para compreender
          e propor medidas de controle — tema frequente no ENEM e nas provas de
          Saúde Pública.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Doença</th>
                <th>Agente etiológico</th>
                <th>Via de transmissão</th>
                <th>Hospedeiro intermediário</th>
                <th>Principal sintoma</th>
                <th>Profilaxia central</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Esquistossomose</td>
                <td><em>Schistosoma mansoni</em></td>
                <td>Cercárias penetram pela pele em água doce</td>
                <td><em>Biomphalaria</em> (caramujo)</td>
                <td>Hepatoesplenomegalia / barriga d'água</td>
                <td>Evitar contato com água doce; saneamento</td>
              </tr>
              <tr>
                <td>Teníase</td>
                <td><em>Taenia solium / T. saginata</em></td>
                <td>Ingestão de cisticercos em carne malpassada</td>
                <td>Porco (<em>T. solium</em>) / Bovino (<em>T. saginata</em>)</td>
                <td>Dor abdominal, proglótides nas fezes</td>
                <td>Cozinhar bem as carnes; inspeção sanitária</td>
              </tr>
              <tr>
                <td>Cisticercose</td>
                <td><em>Taenia solium</em> (ovos)</td>
                <td>Ingestão de ovos em alimentos/água contaminados</td>
                <td>Humano (hospedeiro intermediário acidental)</td>
                <td>Convulsões (neurocisticercose)</td>
                <td>Higiene, saneamento, lavar vegetais</td>
              </tr>
              <tr>
                <td>Ascaridíase</td>
                <td><em>Ascaris lumbricoides</em></td>
                <td>Ingestão de ovos (fecal-oral)</td>
                <td>Não há</td>
                <td>Obstrução intestinal, desnutrição</td>
                <td>Saneamento básico; higiene alimentar</td>
              </tr>
              <tr>
                <td>Ancilostomose</td>
                <td><em>Ancylostoma</em> / <em>Necator</em></td>
                <td>Larvas penetram ativamente pela pele</td>
                <td>Não há</td>
                <td>Anemia grave ("amarelão")</td>
                <td>Uso de calçados; saneamento</td>
              </tr>
              <tr>
                <td>Filariose</td>
                <td><em>Wuchereria bancrofti</em></td>
                <td>Picada do mosquito <em>Culex</em></td>
                <td><em>Culex quinquefasciatus</em></td>
                <td>Elefantíase (linfedema)</td>
                <td>Controle do vetor; repelentes; telas</td>
              </tr>
              <tr>
                <td>Oxiuríase</td>
                <td><em>Enterobius vermicularis</em></td>
                <td>Fecal-oral; auto-infecção</td>
                <td>Não há</td>
                <td>Coceira anal noturna</td>
                <td>Higiene das mãos; lavar roupas de cama</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            <strong>Dica ENEM:</strong> questões de verminoses frequentemente testam
            a <strong>via de transmissão</strong> para cobrar a profilaxia correta.
            Ancilostomose e esquistossomose compartilham a penetração ativa pela
            pele — mas ancilostomose ocorre em solo contaminado (calçado previne)
            e esquistossomose em água doce (evitar contato com lagos e riachos
            previne). <em>Wuchereria</em> é a única com vetor artrópode entre os
            parasitas deste capítulo.
          </p>
        </div>
      </section>

      {/* ───────────────────── SEÇÃO 8 — EXERCÍCIOS ───────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Digestão nos Poríferos"
          statement={
            <p>
              Os poríferos são os únicos animais que realizam exclusivamente digestão
              intracelular. Qual tipo celular é diretamente responsável por essa
              função e como ele obtém as partículas alimentares?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Os arqueócitos, por meio de secreção de enzimas digestivas na cavidade gastrovascular",
            },
            {
              letter: "b",
              text: "Os coanócitos, que criam corrente de água com seus flagelos e fagocitam partículas orgânicas",
              correct: true,
            },
            {
              letter: "c",
              text: "Os pinacocitos, que revestem o exterior e absorvem nutrientes dissolvidos na água",
            },
            {
              letter: "d",
              text: "Os espongócitos, que produzem a espongina e digerem o alimento junto ao esqueleto",
            },
          ]}
          resolution={
            <p>
              Os <strong>coanócitos</strong> são células flageladas que revestem as
              câmaras internas das esponjas. O batimento do flagelo gera corrente de
              água que traz partículas orgânicas, as quais são capturadas por fagocitose
              e digeridas dentro do próprio coanócito — digestão 100% intracelular.
              Os arqueócitos também podem realizar fagocitose, mas o protagonismo da
              filtração e digestão é dos coanócitos.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Critérios de Classificação Animal"
          statement={
            <p>
              Analise as afirmativas sobre os critérios de classificação dos
              invertebrados e assinale a alternativa <strong>correta</strong>:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Platelmintos são pseudocelomados porque possuem uma cavidade corporal não revestida inteiramente por mesoderme",
            },
            {
              letter: "b",
              text: "Cnidários são triblásticos pois apresentam ectoderme, mesoderme verdadeira e endoderme",
            },
            {
              letter: "c",
              text: "Nematódeos são acelomados e possuem sistema digestório incompleto, com uma única abertura",
            },
            {
              letter: "d",
              text: "Platelmintos são acelomados — não há cavidade entre o intestino e a parede do corpo, que é preenchida por parênquima",
              correct: true,
            },
          ]}
          resolution={
            <p>
              A) Errada: pseudocelomados são os <em>nematódeos</em>, não os
              platelmintos. B) Errada: cnidários são <strong>diblásticos</strong> (só
              ectoderme e endoderme, com mesogléia acelular). C) Errada: nematódeos são
              pseudocelomados e possuem digestório <em>completo</em> (boca e ânus).
              D) Correta: platelmintos são <strong>acelomados</strong> — o parênquima
              preenche o espaço entre o tubo digestório e a musculatura.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Metagênese nos Cnidários"
          statement={
            <p>
              Em algumas espécies de cnidários ocorre alternância de gerações
              (metagênese). Sobre esse fenômeno, é correto afirmar que:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A fase medusa é assexuada e produz pólipos por brotamento, enquanto a fase pólipo é sexuada",
            },
            {
              letter: "b",
              text: "A fase pólipo é assexuada e origina medusas por brotamento; as medusas são sexuadas e liberam gametas que originam larvas plânulas, que se fixam e tornam-se pólipos",
              correct: true,
            },
            {
              letter: "c",
              text: "Nos antozoários a metagênese é completa: há pólipo e medusa em igual proporção",
            },
            {
              letter: "d",
              text: "A plânula é uma fase adulta que se reproduz diretamente por fissão binária",
            },
          ]}
          resolution={
            <p>
              Na metagênese típica dos cnidários (ex.: <em>Aurelia</em>), o{" "}
              <strong>pólipo</strong> se reproduz assexuadamente gerando medusas por
              brotamento (<em>estrobilação</em>). As <strong>medusas</strong> são a
              fase sexuada: liberam ovócitos e espermatozoides, que se unem formando
              zigotos que desenvolvem a larva <strong>plânula</strong> ciliada. A
              plânula nada, se fixa ao substrato e origina novo pólipo. Nos
              antozoários (corais, anêmonas) a fase medusa está completamente ausente.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Esquistossomose e Saneamento (ENEM)"
          statement={
            <p>
              Em uma reportagem sobre a esquistossomose no Nordeste brasileiro,
              afirma-se que a doença persiste porque populações ribeirinhas lavam
              roupas e tomam banho em açudes. Um pesquisador propõe que a erradicação
              do caramujo <em>Biomphalaria</em> seria suficiente para eliminar a doença.
              Com base no ciclo do <em>Schistosoma mansoni</em>, avalie a proposta:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A proposta é eficaz porque os ovos do Schistosoma só eclodem dentro do caramujo, sem ele a cadeia se rompe",
            },
            {
              letter: "b",
              text: "A proposta é eficaz e suficiente: sem o hospedeiro intermediário, as cercárias não se formam e a transmissão é interrompida",
              correct: true,
            },
            {
              letter: "c",
              text: "A proposta é ineficaz porque as cercárias se desenvolvem independentemente do caramujo no solo úmido",
            },
            {
              letter: "d",
              text: "A proposta é parcialmente eficaz: eliminar o caramujo reduz a teníase, não a esquistossomose",
            },
          ]}
          resolution={
            <p>
              O caramujo <em>Biomphalaria</em> é o <strong>hospedeiro
              intermediário obrigatório</strong>: o miracídio (larva) precisa penetrá-lo
              para se desenvolver em esporocisto, rédias e, finalmente, cercárias.
              Sem o caramujo, as cercárias — forma infectante que penetra na pele
              humana — não são produzidas, e a cadeia de transmissão é rompida.
              A alternativa B está correta. Contudo, na prática a erradicação total
              do caramujo é difícil; o saneamento básico (impedindo ovos de chegarem
              à água) é igualmente essencial.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Filariose e Vetor (ENEM)"
          statement={
            <p>
              A filariose linfática (elefantíase), causada por <em>Wuchereria
              bancrofti</em>, difere das demais verminoses estudadas neste capítulo
              por uma característica epidemiológica fundamental. Essa característica
              é:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A transmissão ocorre pelo contato com solo úmido contaminado por larvas, assim como na ancilostomose",
            },
            {
              letter: "b",
              text: "O parasita é transmitido obrigatoriamente por um vetor artrópode (mosquito Culex), não havendo transmissão fecal-oral nem pelo solo",
              correct: true,
            },
            {
              letter: "c",
              text: "A doença é transmitida pela ingestão de carne de porco ou boi mal cozida, como ocorre na teníase",
            },
            {
              letter: "d",
              text: "As microfilárias penetram ativamente pela pele durante banho em água doce, como as cercárias do Schistosoma",
            },
          ]}
          resolution={
            <p>
              A <em>Wuchereria bancrofti</em> exige o mosquito{" "}
              <em>Culex quinquefasciatus</em> como <strong>hospedeiro intermediário e
              vetor biológico</strong>: as microfilárias circulam no sangue humano e
              são sugadas pelo mosquito durante o repasto sanguíneo, desenvolvendo-se
              nele até a forma infectante, transmitida na próxima picada. Nenhuma outra
              verminose deste capítulo usa vetor artrópode — é a diferença
              epidemiológica central cobrada no ENEM.
            </p>
          }
        />
      </section>
    </article>
  );
}
