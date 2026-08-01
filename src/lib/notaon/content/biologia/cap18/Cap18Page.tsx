"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap18Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 18</span>

          <h1>Biotecnologia e Engenharia Genética</h1>

          <p>
            Da fermentação milenar ao CRISPR-Cas9, a biotecnologia transformou
            a medicina, a agricultura e a ciência forense. Neste capítulo você
            dominará as ferramentas de manipulação do DNA — enzimas de restrição,
            PCR, DNA recombinante, transgênicos, clonagem, células-tronco,
            terapia gênica e sequenciamento genômico —, entenderá os dilemas
            bioéticos que cercam essas tecnologias e resolverá as questões mais
            exigentes do ENEM e dos vestibulares.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 1 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Panorama</span>

        <h2>1. Biotecnologia: do Pão ao Genoma</h2>

        <p>
          <strong>Biotecnologia</strong> é a aplicação de organismos vivos,
          células ou componentes biológicos para desenvolver produtos, processos
          e serviços úteis à humanidade. Em sentido amplo, ela existe há pelo
          menos dez mil anos: fermentação de grãos para cerveja, leite para
          queijo e uva para vinho são exemplos de biotecnologia{" "}
          <strong>clássica ou tradicional</strong>, que explora microrganismos
          sem modificá-los geneticamente.
        </p>

        <p>
          A revolução começa em <strong>1973</strong>, quando Stanley Cohen e
          Herbert Boyer produziram o primeiro organismo com{" "}
          <strong>DNA recombinante</strong> — uma bactéria contendo um gene de
          outra espécie. Desde então a biotecnologia moderna ganhou ferramentas
          cada vez mais precisas: a PCR (1983), o Projeto Genoma Humano
          (concluído em 2003) e o CRISPR-Cas9 (Nobel de Química 2020)
          transformaram a biologia em uma ciência de engenharia molecular.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🍞</span>
            <h3>Biotecnologia Clássica</h3>
            <p>
              Fermentações com fungos e bactérias para produção de alimentos,
              bebidas, antibióticos e biocombustíveis.
            </p>
          </div>

          <div className="lesson-card">
            <span>💊</span>
            <h3>Biotecnologia Médica</h3>
            <p>
              Insulina humana, vacinas recombinantes, anticorpos monoclonais,
              terapia gênica e diagnóstico molecular.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌽</span>
            <h3>Biotecnologia Agrícola</h3>
            <p>
              Transgênicos resistentes a herbicidas e pragas; plantas com maior
              valor nutricional.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Biotecnologia Forense</h3>
            <p>
              Identificação por perfil de DNA em investigações criminais e
              testes de paternidade.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌱</span>
            <h3>Biorremediação</h3>
            <p>
              Microrganismos que degradam poluentes em solos e águas
              contaminados.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Bioinformática</h3>
            <p>
              Análise computacional de genomas, sequências proteicas e dados
              de expressão gênica em larga escala.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Regulação no Brasil</h3>
          <p>
            A <strong>Lei de Biossegurança (Lei 11.105/2005)</strong> regula o
            uso de OGMs e pesquisas com células-tronco embrionárias. A{" "}
            <strong>CTNBio</strong> (Comissão Técnica Nacional de Biossegurança)
            aprova o uso comercial de transgênicos. Todo alimento com mais de 1%
            de ingrediente transgênico deve exibir o{" "}
            <strong>símbolo "T" amarelo</strong> no rótulo.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 2 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">DNA Recombinante</span>

        <h2>2. Enzimas de Restrição, Plasmídeos e DNA Recombinante</h2>

        <p>
          A <strong>tecnologia do DNA recombinante</strong> (ou engenharia
          genética) consiste em isolar um gene de interesse, inseri-lo em um
          vetor molecular e introduzi-lo em uma célula hospedeira, que passará a
          expressar a proteína codificada por aquele gene. Os personagens centrais
          dessa tecnologia são:
        </p>

        <p>
          As <strong>enzimas de restrição</strong> (ou endonucleases de
          restrição) são produzidas naturalmente por bactérias como defesa
          contra vírus. Elas reconhecem sequências palindrômicas específicas do
          DNA (geralmente de 4 a 8 pares de bases) e realizam cortes precisos,
          gerando <strong>extremidades coesivas</strong> ("sticky ends") ou
          cegas ("blunt ends"). A enzima{" "}
          <em>Eco</em>RI, por exemplo, reconhece a sequência GAATTC e corta
          entre G e A, produzindo extremidades AATT que se emparelham com outras
          extremidades complementares pelo princípio da complementaridade de
          bases — o mesmo que guia a duplicação do DNA.
        </p>

        <p>
          A <strong>DNA-ligase</strong> sela as ligações entre os fragmentos,
          criando uma molécula recombinante estável. Os principais{" "}
          <strong>vetores</strong> utilizados são os <strong>plasmídeos</strong>{" "}
          (moléculas de DNA circular extracromossômico de bactérias), fagos
          (vírus bacterianos) e vetores virais artificiais. O plasmídeo ideal
          contém: (1) uma origem de replicação, (2) um gene marcador de seleção
          (resistência a antibiótico) e (3) um sítio de restrição conveniente.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 780 320"
            width="780"
            height="320"
            aria-label="Produção de insulina humana por bactéria recombinante"
          >
            {/* ── passo 1: fita humana com gene insulina ── */}
            <rect x={10} y={20} width={160} height={44} rx={8} fill="#dbeafe" stroke="#3b82f6" strokeWidth={1.5} />
            <text x={90} y={36} textAnchor="middle" fontSize={11} fontWeight={700} fill="#1e3a8a">DNA humano</text>
            <text x={90} y={52} textAnchor="middle" fontSize={10} fill="#1e40af">(gene da insulina)</text>

            {/* ── tesoura (enzima restrição) ── */}
            <text x={90} y={84} textAnchor="middle" fontSize={19} fill="#ef4444">✂</text>
            <text x={90} y={98} textAnchor="middle" fontSize={10} fill="#dc2626">enzima de restrição</text>

            {/* ── fragmento gene ── */}
            <rect x={30} y={108} width={120} height={34} rx={6} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1.5} />
            <text x={90} y={130} textAnchor="middle" fontSize={11} fontWeight={700} fill="#713f12">gene insulina</text>

            {/* ── seta passo 2 ── */}
            <polygon points="90,148 84,162 96,162" fill="#6b7280" />
            <text x={118} y={158} fontSize={10} fill="#6b7280">+ DNA-ligase</text>

            {/* ── passo 2: plasmídeo ── */}
            <ellipse cx={90} cy={205} rx={52} ry={38} fill="none" stroke="#7c3aed" strokeWidth={2} />
            <text x={90} y={200} textAnchor="middle" fontSize={10} fontWeight={700} fill="#5b21b6">plasmídeo</text>
            <text x={90} y={213} textAnchor="middle" fontSize={9} fill="#7c3aed">bacteriano</text>
            {/* ─ sítio aberto no plasmídeo ── */}
            <path d="M 90 167 A 52 38 0 0 1 130 188" fill="none" stroke="#ef4444" strokeWidth={2.5} strokeDasharray="5 3" />
            {/* ─ fragmento inserido ── */}
            <rect x={104} y={168} width={42} height={18} rx={5} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1.5} />
            <text x={125} y={181} textAnchor="middle" fontSize={8} fontWeight={700} fill="#713f12">insulina</text>

            {/* ── legenda plasmídeo recombinante ── */}
            <text x={90} y={256} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#7c3aed">plasmídeo recombinante</text>

            {/* ── seta → bactéria ── */}
            <line x1={155} y1={205} x2={230} y2={205} stroke="#6b7280" strokeWidth={1.5} markerEnd="url(#arr)" />
            <text x={190} y={198} textAnchor="middle" fontSize={9} fill="#6b7280">transformação</text>

            {/* ── bactéria E. coli ── */}
            <ellipse cx={310} cy={205} rx={68} ry={44} fill="#d1fae5" stroke="#16a34a" strokeWidth={2} />
            <text x={310} y={198} textAnchor="middle" fontSize={11} fontWeight={700} fill="#064e3b">E. coli</text>
            <text x={310} y={213} textAnchor="middle" fontSize={9} fill="#065f46">recombinante</text>
            <ellipse cx={310} cy={205} rx={22} ry={16} fill="none" stroke="#7c3aed" strokeWidth={1.5} strokeDasharray="4 3" />

            {/* ── seta → multiplicação ── */}
            <line x1={380} y1={205} x2={450} y2={205} stroke="#6b7280" strokeWidth={1.5} />
            <polygon points="448,201 458,205 448,209" fill="#6b7280" />
            <text x={415} y={198} textAnchor="middle" fontSize={9} fill="#6b7280">multiplicação</text>

            {/* ── colônia de bactérias ── */}
            {[
              [480, 185], [510, 175], [540, 185], [470, 210],
              [500, 215], [530, 210], [490, 235], [520, 235],
            ].map(([cx, cy], i) => (
              <ellipse key={i} cx={cx} cy={cy} rx={18} ry={13} fill="#d1fae5" stroke="#16a34a" strokeWidth={1.2} />
            ))}
            <text x={505} y={260} textAnchor="middle" fontSize={10} fill="#065f46" fontWeight={700}>colônia produtora</text>

            {/* ── seta → insulina ── */}
            <line x1={570} y1={205} x2={630} y2={205} stroke="#6b7280" strokeWidth={1.5} />
            <polygon points="628,201 638,205 628,209" fill="#6b7280" />
            <text x={600} y={198} textAnchor="middle" fontSize={9} fill="#6b7280">extração</text>

            {/* ── frasco insulina ── */}
            <rect x={640} y={175} width={48} height={62} rx={8} fill="#ede9fe" stroke="#7c3aed" strokeWidth={1.8} />
            <rect x={652} y={168} width={24} height={12} rx={4} fill="#7c3aed" />
            <text x={664} y={210} textAnchor="middle" fontSize={10} fontWeight={700} fill="#5b21b6">insulina</text>
            <text x={664} y={224} textAnchor="middle" fontSize={9} fill="#5b21b6">humana</text>

            {/* ── título ── */}
            <text x={390} y={300} textAnchor="middle" fontSize={12} fontWeight={700} fill="#1f2937">
              Produção de insulina humana por engenharia genética
            </text>

            {/* ─ arrow marker ─ */}
            <defs>
              <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <polygon points="0,0 6,3 0,6" fill="#6b7280" />
              </marker>
            </defs>
          </svg>
          <figcaption>
            Passo a passo da produção de insulina humana recombinante: o gene é
            recortado do DNA humano, inserido em um plasmídeo e introduzido em{" "}
            <em>E. coli</em>, que se multiplica e produz a proteína em larga
            escala.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Ferramenta</th>
                <th>Analogia</th>
                <th>Função no DNA recombinante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Enzima de restrição</td>
                <td>Tesoura molecular</td>
                <td>Corta o DNA em sítios específicos, gerando extremidades coesivas</td>
              </tr>
              <tr>
                <td>DNA-ligase</td>
                <td>Cola molecular</td>
                <td>Sela as ligações fosfodiéster entre os fragmentos</td>
              </tr>
              <tr>
                <td>Plasmídeo</td>
                <td>Carro de transporte</td>
                <td>Vetor que carrega o gene de interesse para a célula hospedeira</td>
              </tr>
              <tr>
                <td>Célula hospedeira</td>
                <td>Fábrica</td>
                <td>Expressa o gene recombinante e produz a proteína de interesse</td>
              </tr>
              <tr>
                <td>Gene marcador</td>
                <td>Etiqueta de identificação</td>
                <td>Permite selecionar as células que receberam o plasmídeo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SEÇÃO 3 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">PCR</span>

        <h2>3. PCR — A Fotocopiadora do DNA</h2>

        <p>
          A <strong>Reação em Cadeia da Polimerase</strong> (PCR —{" "}
          <em>Polymerase Chain Reaction</em>), criada por Kary Mullis em{" "}
          <strong>1983</strong> (Nobel de Química 1993), amplifica
          exponencialmente um trecho específico de DNA em poucas horas. Partindo
          de uma quantidade ínfima de material biológico — um único fio de
          cabelo, uma gota de sangue ou um rastro de saliva —, é possível
          obter bilhões de cópias idênticas.
        </p>

        <p>
          O processo ocorre em um equipamento chamado <strong>termociclador</strong>,
          que alterna automaticamente três temperaturas em ciclos repetidos. A{" "}
          <strong>Taq polimerase</strong>, enzima extraída da bactéria
          termofílica <em>Thermus aquaticus</em> (habitante de fontes
          hidrotermais), é termorresistente e continua ativa mesmo a{" "}
          <strong>95 °C</strong>, temperatura que desnatura a maioria das
          enzimas comuns.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 760 280"
            width="760"
            height="280"
            aria-label="Etapas da PCR: desnaturação, anelamento e extensão"
          >
            {/* ── gráfico de temperatura ── */}
            <line x1={40} y1={20} x2={40} y2={200} stroke="#374151" strokeWidth={1.5} />
            <line x1={40} y1={200} x2={740} y2={200} stroke="#374151" strokeWidth={1.5} />
            <text x={15} y={24} fontSize={11} fill="#374151">°C</text>
            <text x={738} y={215} textAnchor="end" fontSize={11} fill="#374151">ciclos →</text>

            {/* ─ linhas de referência temperatura ─ */}
            {[{ y: 40, label: "95", c: "#ef4444" }, { y: 110, label: "72", c: "#16a34a" }, { y: 148, label: "55", c: "#f59e0b" }].map((l) => (
              <g key={l.label}>
                <line x1={40} y1={l.y} x2={740} y2={l.y} stroke={l.c} strokeWidth={1} strokeDasharray="5 4" opacity={0.5} />
                <text x={33} y={l.y + 4} textAnchor="end" fontSize={10} fill={l.c} fontWeight={700}>{l.label}</text>
              </g>
            ))}

            {/* ─ curva de temperatura (1 ciclo + parte do 2º) ─ */}
            {/* Desnaturação: sobe a 95 */}
            <polyline
              points="40,200 80,200 100,40 180,40 200,148 260,148 280,110 360,110 380,40 460,40 480,148 540,148 560,110 640,110 660,40 720,40"
              fill="none"
              stroke="#6366f1"
              strokeWidth={2.5}
            />

            {/* ─ rótulos das fases ─ */}
            <text x={140} y={32} textAnchor="middle" fontSize={11} fontWeight={700} fill="#ef4444">Desnaturação</text>
            <text x={140} y={44} textAnchor="middle" fontSize={9} fill="#ef4444">95 °C • fitas separam</text>

            <text x={230} y={140} textAnchor="middle" fontSize={11} fontWeight={700} fill="#f59e0b">Anelamento</text>
            <text x={230} y={152} textAnchor="middle" fontSize={9} fill="#f59e0b">~55 °C • primers ligam</text>

            <text x={320} y={102} textAnchor="middle" fontSize={11} fontWeight={700} fill="#16a34a">Extensão</text>
            <text x={320} y={114} textAnchor="middle" fontSize={9} fill="#16a34a">72 °C • Taq copia DNA</text>

            {/* ─ seta amplificação ─ */}
            <text x={400} y={240} textAnchor="middle" fontSize={11} fontWeight={700} fill="#1f2937">
              A cada ciclo: duplicação — 30 ciclos ≈ 10⁹ cópias
            </text>

            {/* ─ ilustração das cópias crescendo ─ */}
            {[1, 2, 4, 8].map((n, i) => (
              <g key={i}>
                {Array.from({ length: n }).map((_, j) => (
                  <rect
                    key={j}
                    x={540 + i * 44 + j * (36 / n)}
                    y={220 - n * 5}
                    width={34 / n}
                    height={n * 5}
                    rx={2}
                    fill="#6366f1"
                    opacity={0.6 + i * 0.1}
                  />
                ))}
                <text x={540 + i * 44 + 16} y={268} textAnchor="middle" fontSize={9} fill="#6366f1">
                  {n === 1 ? "1" : n === 2 ? "2" : n === 4 ? "4" : "8"} cóp.
                </text>
              </g>
            ))}
          </svg>
          <figcaption>
            Perfil de temperatura em um ciclo de PCR: desnaturação a 95 °C
            separa as fitas; anelamento a ~55 °C fixa os primers; extensão a
            72 °C usa a Taq polimerase para sintetizar as novas fitas.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>RT-PCR — Detectando vírus de RNA</h3>
          <p>
            Para vírus cujo genoma é composto de RNA (como{" "}
            <strong>SARS-CoV-2</strong>, HIV e Influenza), utiliza-se primeiro a
            enzima <strong>transcriptase reversa</strong> para converter o RNA
            viral em DNA complementar (cDNA); em seguida aplica-se a PCR
            convencional. Essa variante é chamada{" "}
            <strong>RT-PCR</strong> (<em>Reverse Transcription PCR</em>) e é o
            método padrão-ouro para diagnóstico de COVID-19 —{" "}
            <strong>mais sensível e específico</strong> do que os testes rápidos
            de antígeno.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌡️</span>
            <h3>Termociclador</h3>
            <p>
              Equipamento que controla automaticamente os ciclos de temperatura,
              permitindo até 40 ciclos em 2–3 horas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔥</span>
            <h3>Taq Polimerase</h3>
            <p>
              Enzima termoestável de <em>Thermus aquaticus</em>; copia o DNA a
              72 °C sem se desnaturar.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧪</span>
            <h3>Primers</h3>
            <p>
              Oligonucleotídeos de fita simples (~20 bases) que definem o início
              e o fim da região a amplificar.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔍</span>
            <h3>Aplicações</h3>
            <p>
              Diagnóstico viral, DNA forense, teste de paternidade, pesquisa de
              mutações e Projeto Genoma.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SEÇÃO 4 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Transgênicos e OGM</span>

        <h2>4. Organismos Geneticamente Modificados (OGMs)</h2>

        <p>
          Um <strong>organismo geneticamente modificado (OGM)</strong> ou
          transgênico é aquele cujo genoma foi alterado pela inserção de um ou
          mais genes exógenos (de outra espécie ou artificialmente sintetizados).
          A tecnologia usa os mesmos princípios do DNA recombinante: um gene de
          interesse é clonado em um vetor e introduzido nas células do organismo-alvo.
          Em plantas, os principais métodos de transformação são a{" "}
          <strong>biobalística</strong> (canhão de genes) e a infecção por{" "}
          <em>Agrobacterium tumefaciens</em>, uma bactéria do solo que naturalmente
          transfere parte de seu DNA para células vegetais.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>OGM</th>
                <th>Gene inserido / modificação</th>
                <th>Benefício pretendido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Soja Roundup Ready (RR)</td>
                <td>Gene de resistência ao herbicida glifosato</td>
                <td>Controle de ervas daninhas sem dano à cultura</td>
              </tr>
              <tr>
                <td>Milho Bt</td>
                <td>Gene <em>cry</em> de <em>Bacillus thuringiensis</em></td>
                <td>Produção de toxina inseticida interna contra lagartas</td>
              </tr>
              <tr>
                <td>Arroz Dourado</td>
                <td>Genes da biossíntese de betacaroteno</td>
                <td>Prevenção de deficiência de vitamina A</td>
              </tr>
              <tr>
                <td>Tomate Flavr Savr</td>
                <td>Gene antissenso da poligalacturonase</td>
                <td>Amadurecimento retardado; maior vida útil</td>
              </tr>
              <tr>
                <td>Salmão AquAdvantage</td>
                <td>Gene do hormônio de crescimento de truta do Pacífico</td>
                <td>Crescimento 2× mais rápido; menor custo de produção</td>
              </tr>
              <tr>
                <td>Vacina da hepatite B</td>
                <td>Gene da proteína de superfície do vírus (em levedura)</td>
                <td>Produção segura e em larga escala do antígeno</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Principais controvérsias bioéticas e ambientais</h3>
          <ul>
            <li>
              <strong>Fluxo gênico:</strong> cruzamento entre transgênicos e
              variedades silvestres pode disseminar genes de resistência para
              plantas invasoras ("superervas daninhas");
            </li>
            <li>
              <strong>Impacto em não-alvos:</strong> toxinas Bt podem afetar
              insetos benéficos, incluindo polinizadores;
            </li>
            <li>
              <strong>Dependência econômica:</strong> monopólio de sementes
              patenteadas por grandes corporações agrícolas;
            </li>
            <li>
              <strong>Resistência a pragas:</strong> uso massivo de uma mesma
              toxina acelera a evolução de resistência nas pragas-alvo;
            </li>
            <li>
              <strong>Rotulagem:</strong> no Brasil, o símbolo "T" amarelo é
              obrigatório em alimentos com {">"} 1% de ingrediente transgênico.
            </li>
          </ul>
        </div>
      </section>

      {/* ─── SEÇÃO 5 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Clonagem e Células-Tronco</span>

        <h2>5. Clonagem e Células-Tronco</h2>

        <p>
          <strong>Clonar</strong> significa produzir cópias geneticamente
          idênticas de um indivíduo ou célula. O marco histórico da clonagem
          de mamíferos foi a ovelha <strong>Dolly</strong> (1996), criada pelo
          grupo de Ian Wilmut no Instituto Roslin. Dolly foi o primeiro mamífero
          clonado a partir de uma célula somática adulta — uma célula mamária —
          por meio da técnica de{" "}
          <strong>transferência nuclear de célula somática (SCNT)</strong>.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🐑</span>
            <h3>Clonagem Reprodutiva</h3>
            <p>
              SCNT com objetivo de gerar um indivíduo completo. Dolly viveu
              6 anos e gerou filhotes normalmente. Proibida em humanos em
              praticamente todos os países.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧬</span>
            <h3>Clonagem Terapêutica</h3>
            <p>
              SCNT para criar embriões e extrair células-tronco pluripotentes
              compatíveis com o paciente, sem risco de rejeição imunológica.
            </p>
          </div>

          <div className="lesson-card">
            <span>🪴</span>
            <h3>Clonagem Vegetal</h3>
            <p>
              Estaquia, mergulhia, cultura de tecidos e micropropagação. Natural
              e amplamente usada em horticultura e fruticultura.
            </p>
          </div>

          <div className="lesson-card">
            <span>👯</span>
            <h3>Gêmeos Univitelinos</h3>
            <p>
              Exemplo natural de clonagem humana: dois indivíduos com genoma
              nuclear idêntico (o DNA mitocondrial pode diferir).
            </p>
          </div>
        </div>

        <p>
          As <strong>células-tronco</strong> são células indiferenciadas com
          dois poderes fundamentais: <strong>autorrenovação</strong> (capacidade
          de se dividir por mitose mantendo as características de célula-tronco)
          e <strong>potência de diferenciação</strong> (capacidade de originar
          um ou mais tipos celulares especializados). Sua classificação pela
          amplitude dessa potência é cobrada frequentemente no ENEM:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Potência</th>
                <th>Origem</th>
                <th>Exemplo / aplicação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Totipotentes</strong></td>
                <td>Organismo completo + anexos</td>
                <td>Zigoto e blastômeros (até ~4–8 células)</td>
                <td>Base da reprodução sexuada</td>
              </tr>
              <tr>
                <td><strong>Pluripotentes</strong></td>
                <td>Todos os tecidos, sem anexos</td>
                <td>Massa interna do blastocisto (5–7 dias)</td>
                <td>Terapia celular; pesquisa de doenças</td>
              </tr>
              <tr>
                <td><strong>Multipotentes</strong></td>
                <td>Família de tecidos relacionados</td>
                <td>Medula óssea, cordão umbilical</td>
                <td>Transplante de medula; leucemias</td>
              </tr>
              <tr>
                <td><strong>Unipotentes</strong></td>
                <td>Apenas 1 tipo celular</td>
                <td>Células-tronco da epiderme</td>
                <td>Renovação contínua da pele</td>
              </tr>
              <tr>
                <td><strong>iPS</strong> (induzidas)</td>
                <td>Pluripotência artificial</td>
                <td>Células adultas reprogramadas (Yamanaka, 2006)</td>
                <td>Medicamentos personalizados; Nobel 2012</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Lei de Biossegurança e células-tronco embrionárias</h3>
          <p>
            A Lei 11.105/2005 permite a utilização de células-tronco de embriões
            humanos produzidos por fertilização in vitro e que estejam{" "}
            <strong>congelados há mais de 3 anos</strong>, desde que os genitores
            consintam. Esse é um tema recorrente no ENEM dentro de debates sobre
            bioética, início da vida e uso científico de embriões inviáveis.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 6 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">CRISPR-Cas9</span>

        <h2>6. CRISPR-Cas9: A Tesoura Molecular de Precisão</h2>

        <p>
          O sistema <strong>CRISPR-Cas9</strong> (
          <em>Clustered Regularly Interspaced Short Palindromic Repeats /
          CRISPR-associated protein 9</em>
          ) é um mecanismo imunológico natural das bactérias, adaptado em
          laboratório como ferramenta de edição gênica. O trabalho pioneiro de{" "}
          <strong>Jennifer Doudna</strong> (UC Berkeley) e{" "}
          <strong>Emmanuelle Charpentier</strong> (Instituto Max Planck) rendeu
          o <strong>Prêmio Nobel de Química de 2020</strong>.
        </p>

        <p>
          O sistema funciona como um <strong>GPS molecular</strong> acoplado a
          uma tesoura: o <strong>RNA-guia (gRNA)</strong> — uma sequência de ~20
          nucleotídeos — reconhece por complementaridade a região exata do genoma
          a ser editada; a enzima <strong>Cas9</strong> então realiza um corte
          de dupla fita naquele ponto. Após o corte, a célula pode reparar a
          lesão por dois mecanismos: (1) <strong>NHEJ</strong> (<em>Non-Homologous
          End Joining</em>) — reparo impreciso que introduz mutações e
          desativa o gene; ou (2) <strong>HDR</strong> (<em>Homology-Directed
          Repair</em>) — reparo por recombinação homóloga com um molde
          fornecido, permitindo inserir ou substituir uma sequência com alta
          precisão.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 720 240"
            width="720"
            height="240"
            aria-label="Mecanismo CRISPR-Cas9 cortando o DNA"
          >
            {/* ── fita dupla de DNA ── */}
            {/* Fita superior */}
            <path d="M 30 100 H 260 M 320 100 H 690" stroke="#1e40af" strokeWidth={6} fill="none" strokeLinecap="round" />
            {/* Fita inferior */}
            <path d="M 30 120 H 260 M 320 120 H 690" stroke="#0ea5e9" strokeWidth={6} fill="none" strokeLinecap="round" />
            {/* Corte */}
            <line x1={260} y1={90} x2={260} y2={132} stroke="#ef4444" strokeWidth={2} strokeDasharray="4 3" />
            <line x1={320} y1={90} x2={320} y2={132} stroke="#ef4444" strokeWidth={2} strokeDasharray="4 3" />
            <text x={290} y={85} textAnchor="middle" fontSize={10} fill="#ef4444" fontWeight={700}>corte</text>

            {/* ── nucleotídeos ilustrativos ── */}
            {[80, 120, 160, 200, 240].map((x, i) => (
              <g key={i}>
                <rect x={x - 12} y={93} width={10} height={14} rx={2} fill={["#fbbf24","#34d399","#f87171","#60a5fa","#a78bfa"][i]} opacity={0.9} />
                <rect x={x - 12} y={113} width={10} height={14} rx={2} fill={["#34d399","#fbbf24","#60a5fa","#f87171","#a78bfa"][i]} opacity={0.9} />
              </g>
            ))}

            {/* ── Cas9 ── */}
            <ellipse cx={290} cy={55} rx={40} ry={30} fill="#fde68a" stroke="#f59e0b" strokeWidth={2} />
            <text x={290} y={50} textAnchor="middle" fontSize={11} fontWeight={700} fill="#78350f">Cas9</text>
            <text x={290} y={65} textAnchor="middle" fontSize={9} fill="#92400e">(enzima)</text>
            <line x1={290} y1={85} x2={290} y2={95} stroke="#f59e0b" strokeWidth={1.5} />

            {/* ── gRNA ── */}
            <rect x={340} y={30} width={160} height={32} rx={8} fill="#ede9fe" stroke="#7c3aed" strokeWidth={1.5} />
            <text x={420} y={48} textAnchor="middle" fontSize={11} fontWeight={700} fill="#5b21b6">RNA-guia (gRNA)</text>
            {/* seta gRNA → Cas9 */}
            <line x1={340} y1={46} x2={330} y2={55} stroke="#7c3aed" strokeWidth={1.5} />
            <polygon points="327,52 334,60 323,59" fill="#7c3aed" />

            {/* ── sequência-alvo destacada ── */}
            <rect x={224} y={86} width={92} height={50} rx={5} fill="none" stroke="#ef4444" strokeWidth={1.5} strokeDasharray="5 3" />
            <text x={270} y={148} textAnchor="middle" fontSize={9} fill="#ef4444">sequência-alvo PAM</text>

            {/* ── resultado ── */}
            <text x={200} y={175} textAnchor="middle" fontSize={10} fill="#374151">→ reparo NHEJ</text>
            <text x={200} y={188} textAnchor="middle" fontSize={9} fill="#374151">(inativa gene)</text>

            <text x={390} y={175} textAnchor="middle" fontSize={10} fill="#374151">→ reparo HDR</text>
            <text x={390} y={188} textAnchor="middle" fontSize={9} fill="#374151">(substitui sequência)</text>

            {/* ── título ── */}
            <text x={360} y={220} textAnchor="middle" fontSize={12} fontWeight={700} fill="#1f2937">
              Mecanismo de ação do CRISPR-Cas9
            </text>
          </svg>
          <figcaption>
            O RNA-guia direciona a Cas9 até a sequência-alvo no genoma. A
            enzima corta as duas fitas do DNA; o reparo celular pode silenciar
            o gene (NHEJ) ou inserir uma nova sequência (HDR).
          </figcaption>
        </figure>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🩸</span>
            <h3>Casgevy (2023)</h3>
            <p>
              Primeira terapia baseada em CRISPR aprovada pela FDA e EMA;
              trata anemia falciforme e beta-talassemia editando o gene da
              hemoglobina fetal.
            </p>
          </div>

          <div className="lesson-card">
            <span>🎯</span>
            <h3>Câncer</h3>
            <p>
              Edição de células T para reconhecer e destruir tumores; ensaios
              clínicos em linfomas e leucemias.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦟</span>
            <h3>Controle de Vetores</h3>
            <p>
              "Gene drive" para tornar populações de <em>Aedes aegypti</em>{" "}
              inférteis e reduzir a transmissão de dengue e zika.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚠️</span>
            <h3>He Jiankui (2018)</h3>
            <p>
              Cientista chinês editou embriões humanos sem aprovação ética;
              foi condenado criminalmente, gerando debate global sobre
              limites da edição germinal.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SEÇÃO 7 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Projeto Genoma e DNA Forense</span>

        <h2>7. Sequenciamento, Projeto Genoma e Testes de DNA</h2>

        <p>
          O <strong>Projeto Genoma Humano (PGH)</strong>, iniciado em 1990 e
          concluído em <strong>2003</strong>, mapeou os aproximadamente{" "}
          <strong>3,2 bilhões de pares de bases</strong> do genoma haploide
          humano e identificou cerca de <strong>20.000–25.000 genes</strong>{" "}
          codificadores de proteínas — menos do que muitos organismos muito mais
          simples, revelando a importância crucial das sequências reguladoras
          e do RNA não codificante. O projeto foi financiado por governos de
          vários países e produzido em colaboração com o Wellcome Trust
          (Reino Unido). Uma versão privada, liderada por Craig Venter
          (Celera Genomics), competiu na corrida pelo sequenciamento usando
          uma abordagem mais rápida (<em>shotgun</em>).
        </p>

        <p>
          O <strong>DNA forense</strong> baseia-se em regiões do genoma humano
          altamente variáveis entre indivíduos chamadas{" "}
          <strong>STRs</strong> (<em>Short Tandem Repeats</em>) ou{" "}
          <strong>microssatélites</strong> — sequências curtas repetidas
          consecutivamente cujo número de repetições varia entre as pessoas.
          Ao comparar o perfil de STRs de uma amostra (sangue, cabelo, saliva
          de uma cena do crime) com o de um suspeito ou familiar, obtém-se uma
          probabilidade estatística extremamente alta de identidade ou exclusão.
          A técnica também é usada em <strong>testes de paternidade</strong>:
          como metade do DNA de um filho vem do pai e metade da mãe, a
          comparação dos perfis moleculares permite confirmar ou excluir a
          paternidade biológica com {">"} 99,9% de certeza.
        </p>

        <div className="lesson-highlight">
          <h3>DNA e identidade: por que é tão confiável?</h3>
          <p>
            A probabilidade de dois indivíduos não relacionados apresentarem
            perfis idênticos nos 13–20 loci de STRs usados por sistemas forenses
            modernos é inferior a <strong>1 em 1 bilhão</strong>. Gêmeos
            univitelinos são a única exceção — possuem o mesmo perfil de STRs
            nucleares, mas podem diferir no <strong>DNA mitocondrial</strong>{" "}
            (herdado exclusivamente da mãe), potencialmente útil para
            diferenciá-los.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Projeto Genoma Humano</h3>
            <p>3,2 Gb sequenciados; ~20.000 genes; concluído em 2003.</p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Sequenciamento de Nova Geração</h3>
            <p>
              NGS (<em>Next Generation Sequencing</em>): sequencia um genoma
              completo em horas por poucos mil dólares.
            </p>
          </div>

          <div className="lesson-card">
            <span>👨‍⚖️</span>
            <h3>DNA Forense</h3>
            <p>
              STRs amplificados por PCR e comparados eletroforeticamente;
              banco de dados CODIS (EUA) e BNPG (Brasil).
            </p>
          </div>

          <div className="lesson-card">
            <span>👨‍👩‍👧</span>
            <h3>Paternidade</h3>
            <p>
              Comparação de alelos de STRs entre filho, mãe e suposto pai;
              precisão {">"} 99,9%.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SEÇÃO 8 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Terapia Gênica e Bioética</span>

        <h2>8. Terapia Gênica e Bioética da Engenharia Genética</h2>

        <p>
          A <strong>terapia gênica</strong> consiste em introduzir material
          genético funcional nas células de um paciente para tratar ou prevenir
          doenças causadas por mutações. Existem duas estratégias principais:{" "}
          <strong>ex vivo</strong> (células do paciente são retiradas,
          modificadas em laboratório e reintroduzidas) e{" "}
          <strong>in vivo</strong> (o vetor com o gene terapêutico é aplicado
          diretamente no organismo). Os vetores mais usados são vírus
          modificados (retrovírus, lentivírus, adenovírus, AAV), que inserem
          eficientemente o DNA nas células-alvo.
        </p>

        <p>
          Em <strong>2017</strong>, a FDA aprovou a primeira terapia gênica
          para leucemia linfoblástica aguda em crianças (CAR-T Kymriah, da
          Novartis), e em 2023 a Casgevy tornou-se o primeiro medicamento
          baseado em CRISPR aprovado para uso humano. Esses marcos ilustram a
          transição da terapia gênica de promessa experimental para realidade
          clínica.
        </p>

        <div className="lesson-highlight">
          <h3>Principais questões bioéticas da engenharia genética</h3>
          <ul>
            <li>
              <strong>Edição da linhagem germinativa:</strong> modificações em
              embriões são herdadas por todas as gerações futuras; o caso He
              Jiankui revelou os riscos de atuar sem supervisão ética adequada;
            </li>
            <li>
              <strong>Eugenia positiva:</strong> o temor de que a edição gênica
              seja usada para "projetar" bebês com características eleitas —
              inteligência, altura, cor dos olhos — em vez de curar doenças;
            </li>
            <li>
              <strong>Equidade de acesso:</strong> terapias como Casgevy podem
              custar milhões de dólares por paciente; quem terá acesso?
            </li>
            <li>
              <strong>Biodiversidade:</strong> gene drives podem exterminar
              populações de espécies-alvo, com consequências ecológicas
              imprevisíveis;
            </li>
            <li>
              <strong>Privacidade genética:</strong> sequenciamento em larga
              escala levanta questões sobre uso de dados genômicos por
              seguradoras e empregadores.
            </li>
          </ul>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💉</span>
            <h3>CAR-T (2017)</h3>
            <p>
              Células T do paciente são modificadas para expressar receptor
              quimérico que reconhece células tumorais; remissão em leucemias
              refratárias.
            </p>
          </div>

          <div className="lesson-card">
            <span>👁️</span>
            <h3>Luxturna (2017)</h3>
            <p>
              Primeira terapia gênica para cegueira hereditária (mutação no
              gene <em>RPE65</em>); usa vetor AAV injetado na retina.
            </p>
          </div>

          <div className="lesson-card">
            <span>💪</span>
            <h3>Zolgensma (2019)</h3>
            <p>
              Terapia gênica para atrofia muscular espinal (AME); dose única
              via IV entrega o gene <em>SMN1</em> funcional.
            </p>
          </div>

          <div className="lesson-card">
            <span>🩸</span>
            <h3>Casgevy (2023)</h3>
            <p>
              CRISPR para anemia falciforme: reativa a hemoglobina fetal
              (HbF), aliviando os sintomas da doença nos eritrócitos.
            </p>
          </div>
        </div>
      </section>

      {/* ─── EXERCÍCIOS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Ferramentas do DNA recombinante"
          statement={
            <p>
              Na técnica do DNA recombinante, as enzimas de restrição e a
              DNA-ligase têm papéis complementares. Qual par de funções
              descreve corretamente essas enzimas?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Enzimas de restrição ligam fragmentos; DNA-ligase corta o DNA",
            },
            {
              letter: "b",
              text: "Enzimas de restrição cortam o DNA em sítios específicos; DNA-ligase une os fragmentos",
              correct: true,
            },
            {
              letter: "c",
              text: "Enzimas de restrição replicam o DNA; DNA-ligase o transcrevem",
            },
            {
              letter: "d",
              text: "Enzimas de restrição destroem plasmídeos; DNA-ligase os reforma",
            },
          ]}
          resolution={
            <p>
              As <strong>enzimas de restrição</strong> (endonucleases) reconhecem
              sequências palindrômicas e cortam o DNA, gerando extremidades
              coesivas. A <strong>DNA-ligase</strong> catalisa a formação de
              ligações fosfodiéster entre as extremidades complementares,
              selando a molécula recombinante. São, respectivamente, a "tesoura"
              e a "cola" da engenharia genética.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. PCR e amplificação exponencial"
          statement={
            <p>
              Um laboratório forense recebe uma amostra contendo apenas
              algumas moléculas de DNA de um suspeito e precisa analisá-las
              por eletroforese. A técnica utilizada para obter material
              suficiente para a análise é a PCR. Após 30 ciclos, partindo
              de 1 molécula de DNA, o número teórico de cópias é:
            </p>
          }
          options={[
            { letter: "a", text: "30 cópias" },
            { letter: "b", text: "900 cópias" },
            { letter: "c", text: "Aproximadamente 1 bilhão de cópias (2³⁰ ≈ 10⁹)", correct: true },
            { letter: "d", text: "Aproximadamente 1 trilhão de cópias (2⁴⁰ ≈ 10¹²)" },
          ]}
          resolution={
            <p>
              Em cada ciclo de PCR o DNA é duplicado: após <em>n</em> ciclos
              obtêm-se 2<sup>n</sup> cópias. Com n = 30, temos{" "}
              2<sup>30</sup> = 1.073.741.824 ≈ <strong>1 bilhão</strong> de
              moléculas. Essa amplificação exponencial é o que torna a PCR
              tão poderosa para diagnóstico e criminalística.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Mecanismo CRISPR-Cas9"
          statement={
            <p>
              O sistema CRISPR-Cas9 é usado para editar genes com precisão.
              Considere as afirmativas abaixo e assinale a alternativa{" "}
              <strong>correta</strong>:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O RNA-guia realiza o corte das fitas de DNA; a Cas9 é responsável pelo reconhecimento da sequência-alvo",
            },
            {
              letter: "b",
              text: "A Cas9 corta o DNA em sítios inespecíficos ao longo de todo o genoma",
            },
            {
              letter: "c",
              text: "O RNA-guia direciona o complexo até a sequência-alvo por complementaridade de bases; a Cas9 corta ambas as fitas do DNA naquele ponto",
              correct: true,
            },
            {
              letter: "d",
              text: "O CRISPR não pode inserir novas sequências no genoma, apenas deletá-las",
            },
          ]}
          resolution={
            <p>
              No sistema CRISPR-Cas9, o <strong>RNA-guia (gRNA)</strong> é uma
              sequência de ~20 nucleotídeos complementar à região-alvo do
              genoma — é ele quem direciona o complexo ao local correto.
              A <strong>Cas9</strong> é a endonuclease que corta as duas fitas
              do DNA. Após o corte, a célula pode reparar a lesão por NHEJ
              (introduzindo mutações e desativando o gene) ou por HDR (com
              um molde fornecido, permitindo inserir novas sequências com
              alta precisão).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Transgênicos e bioética (ENEM)"
          statement={
            <p>
              Uma empresa agrícola desenvolve uma variedade de soja transgênica
              resistente a um herbicida de amplo espectro. Um agrônomo alerta
              que, além dos benefícios na lavoura, a tecnologia pode gerar um
              problema ecológico chamado "fluxo gênico". Com base nesse
              conceito, qual seria o principal risco ambiental apontado pelo
              agrônomo?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O herbicida pode contaminar o lençol freático e matar os microrganismos do solo",
            },
            {
              letter: "b",
              text: "O gene de resistência pode ser transferido, por cruzamento, para plantas silvestres próximas, gerando ervas daninhas resistentes ao herbicida",
              correct: true,
            },
            {
              letter: "c",
              text: "A soja transgênica pode perder a resistência ao herbicida após algumas gerações",
            },
            {
              letter: "d",
              text: "Insetos polinizadores podem desenvolver resistência ao herbicida ao visitar flores da soja",
            },
          ]}
          resolution={
            <p>
              O <strong>fluxo gênico</strong> ocorre quando genes se transferem
              entre populações pelo cruzamento. Se a soja transgênica se
              cruzar com espécies silvestres aparentadas por polinização,
              o transgene de resistência ao herbicida pode se disseminar para
              essas espécies. As descendentes seriam ervas daninhas
              resistentes ao mesmo herbicida usado na lavoura —
              as chamadas <strong>"superervas daninhas"</strong> —, tornando
              o controle da vegetação indesejada muito mais difícil.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Células-tronco e Lei de Biossegurança"
          statement={
            <p>
              Em 2008, o Supremo Tribunal Federal julgou constitucional o
              artigo da Lei 11.105/2005 que permite pesquisas com
              células-tronco embrionárias humanas. Segundo essa lei, quais
              embriões podem ser utilizados nessas pesquisas?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Qualquer embrião produzido por fertilização in vitro, independentemente do tempo de congelamento",
            },
            {
              letter: "b",
              text: "Apenas embriões inviáveis obtidos de abortos espontâneos",
            },
            {
              letter: "c",
              text: "Embriões produzidos por fertilização in vitro, congelados há mais de 3 anos, com consentimento dos genitores",
              correct: true,
            },
            {
              letter: "d",
              text: "Embriões criados exclusivamente para fins de pesquisa científica",
            },
          ]}
          resolution={
            <p>
              A <strong>Lei de Biossegurança (Lei 11.105/2005)</strong> permite
              o uso de células-tronco de embriões humanos oriundos de
              fertilização in vitro que: (1) sejam inviáveis — que não possam
              se desenvolver em indivíduo — ou estejam{" "}
              <strong>congelados há mais de 3 anos</strong>, e (2) cujos
              genitores consentiram expressamente. O STF confirmou a
              constitucionalidade dessa norma em 2008 (ADI 3510), num
              julgamento histórico sobre bioética e início da vida.
            </p>
          }
        />
      </section>
    </article>
  );
}
