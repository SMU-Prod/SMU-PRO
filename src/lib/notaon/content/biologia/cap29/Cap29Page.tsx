"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap29Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 29</span>

          <h1>Reino Animalia III: Equinodermos e Cordados</h1>

          <p>
            Neste capítulo você vai dominar dois filos de enorme importância
            evolutiva e presença constante no ENEM: os{" "}
            <strong>Equinodermos</strong> — únicos animais com simetria radial
            pentâmera no adulto e sistema ambulacral exclusivo — e os{" "}
            <strong>Cordados</strong>, filo ao qual pertence nossa própria
            espécie. Compreender as quatro sinapomorfias dos cordados, a
            diferença entre protocordados e vertebrados e a diversificação dos
            vertebrados ao longo da história da vida é essencial para qualquer
            questão de Zoologia no nível do vestibular.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO 1 — EQUINODERMOS: VISÃO GERAL */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Filo Echinodermata</span>

        <h2>1. Equinodermos: Posição Evolutiva e Características Gerais</h2>

        <p>
          Os equinodermos (do grego <em>echinos</em> = espinho +{" "}
          <em>derma</em> = pele) formam um filo exclusivamente marinho com
          cerca de 7 000 espécies viventes. Do ponto de vista filogenético, são{" "}
          <strong>deuterostômios</strong>: no desenvolvimento embrionário, o
          blastóporo origina o ânus, e a boca se forma secundariamente — a
          mesma estratégia observada nos cordados. Esse parentesco evolutivo
          profundo com os cordados é uma das razões pelas quais os equinodermos
          são tão relevantes para entender a origem dos vertebrados.
        </p>

        <p>
          São animais <strong>triblásticos</strong> (três folhetos
          embrionários), <strong>celomados</strong> (celoma verdadeiro) e
          apresentam uma das características mais notáveis do reino animal: os
          adultos possuem{" "}
          <strong>simetria radial pentâmera</strong> (disposição em torno de
          cinco eixos), enquanto as <strong>larvas são bilateralmente
          simétricas</strong>. Essa inversão de simetria ao longo do
          desenvolvimento é uma pista evolutiva importante: os ancestrais dos
          equinodermos eram bilaterais, e a simetria radial surgiu como
          adaptação secundária à vida séssil ou lenta no fundo do mar.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Ambiente</h3>
            <p>
              Exclusivamente marinhos — não há espécies de água doce ou
              terrestres em todo o filo.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦴</span>
            <h3>Endoesqueleto calcário</h3>
            <p>
              Placas e espículas de carbonato de cálcio formam o endoesqueleto,
              frequentemente projetado como espinhos na superfície corporal.
            </p>
          </div>

          <div className="lesson-card">
            <span>⭐</span>
            <h3>Deuterostômios</h3>
            <p>
              Parentes evolutivos mais próximos dos cordados; compartilham a
              clivagem radial e o desenvolvimento do celoma como enterocele.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔄</span>
            <h3>Regeneração</h3>
            <p>
              Muitas espécies regeneram membros perdidos; a estrela-do-mar pode
              regenerar um braço inteiro a partir de um fragmento.
            </p>
          </div>

          <div className="lesson-card">
            <span>🫧</span>
            <h3>Sistema nervoso difuso</h3>
            <p>
              Anel nervoso central com cordões radiais; sem cérebro, sem cabeça
              — reflete a simetria radial do adulto.
            </p>
          </div>

          <div className="lesson-card">
            <span>♻️</span>
            <h3>Circulação e excreção</h3>
            <p>
              Circulação aberta e hemolinfa; trocas gasosas e excreção de amônia
              ocorrem principalmente pelos pés ambulacrais e brânquias cutâneas.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO 2 — SISTEMA AMBULACRAL */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Sistema Exclusivo</span>

        <h2>2. Sistema Ambulacral (Aquífero)</h2>

        <p>
          O <strong>sistema ambulacral</strong>, também chamado sistema
          aquífero ou hidrovascular, é a estrutura mais característica e
          exclusiva dos equinodermos — nenhum outro filo animal o possui.
          Consiste em uma rede de canais preenchidos com água do mar levemente
          modificada, que penetra no corpo pela <strong>madreporita</strong>{" "}
          (placa calcária porosa geralmente dorsal), segue pelo{" "}
          <strong>canal pétreo</strong> (endurecido por espículas) até o{" "}
          <strong>canal anelar</strong> que circunda o esôfago, e daí se
          ramifica em <strong>canais radiais</strong> para cada braço ou região
          do corpo.
        </p>

        <p>
          Dos canais radiais partem ramos laterais que terminam nos{" "}
          <strong>pés ambulacrais</strong> — pequenas estruturas tubulares e
          musculares com função de ventosa. A entrada de água aumenta a pressão
          hidrostática e expande o pé; a contração muscular o retrai. Esse
          mecanismo permite:
        </p>

        <div className="lesson-highlight">
          <h3>Funções do sistema ambulacral</h3>
          <p>
            <strong>1. Locomoção:</strong> a coordenação de centenas de pés
            ambulacrais gera o deslocamento lento mas preciso típico das
            estrelas-do-mar.
            {" "}<strong>2. Fixação ao substrato:</strong> a ventosa adesiva
            dos pés permite escalar paredes de rochas e até forçar a abertura
            de bivalves.
            {" "}<strong>3. Captura de alimento:</strong> os pés conduzem
            partículas orgânicas à boca.
            {" "}<strong>4. Trocas gasosas:</strong> o fino epitélio dos pés
            facilita a difusão de O₂ e CO₂.
            {" "}<strong>5. Percepção sensorial:</strong> os pés contêm
            fotorreceptores e quimiorreceptores que detectam luz e gradientes
            químicos.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 560 320"
            width="560"
            height="320"
            aria-label="Diagrama do sistema ambulacral da estrela-do-mar"
          >
            {/* Corpo central da estrela — círculo */}
            <circle cx={280} cy={160} r={54} fill="#f97316" opacity={0.18} stroke="#f97316" strokeWidth={2} />
            <text x={280} y={155} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7c2d12">Anel</text>
            <text x={280} y={168} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7c2d12">anelar</text>

            {/* Madreporita */}
            <circle cx={320} cy={116} r={12} fill="#fbbf24" stroke="#d97706" strokeWidth={1.5} />
            <text x={320} y={112} textAnchor="middle" fontSize={9} fontWeight={700} fill="#92400e">M</text>
            <line x1={320} y1={128} x2={305} y2={145} stroke="#d97706" strokeWidth={1.5} />
            <text x={344} y={108} fontSize={9} fill="#78350f">Madreporita</text>

            {/* 5 braços */}
            {[0, 72, 144, 216, 288].map((deg, i) => {
              const rad = (deg - 90) * Math.PI / 180;
              const x1 = 280 + 54 * Math.cos(rad);
              const y1 = 160 + 54 * Math.sin(rad);
              const x2 = 280 + 128 * Math.cos(rad);
              const y2 = 160 + 128 * Math.sin(rad);
              const xTip = 280 + 138 * Math.cos(rad);
              const yTip = 160 + 138 * Math.sin(rad);
              return (
                <g key={i}>
                  {/* canal radial */}
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0ea5e9" strokeWidth={3} />
                  {/* braço externo */}
                  <ellipse
                    cx={280 + 98 * Math.cos(rad)}
                    cy={160 + 98 * Math.sin(rad)}
                    rx={20} ry={36}
                    transform={`rotate(${deg}, ${280 + 98 * Math.cos(rad)}, ${160 + 98 * Math.sin(rad)})`}
                    fill="#f97316"
                    opacity={0.22}
                    stroke="#f97316"
                    strokeWidth={1.5}
                  />
                  {/* pés ambulacrais (bolinhas) */}
                  {[-12, 0, 12].map((offset, j) => {
                    const perpRad = rad + Math.PI / 2;
                    const px = 280 + (74 + j * 20) * Math.cos(rad) + offset * Math.cos(perpRad);
                    const py = 160 + (74 + j * 20) * Math.sin(rad) + offset * Math.sin(perpRad);
                    return <circle key={j} cx={px} cy={py} r={4} fill="#0369a1" opacity={0.75} />;
                  })}
                  {/* ponta do braço */}
                  <circle cx={xTip} cy={yTip} r={7} fill="#f97316" opacity={0.5} stroke="#ea580c" strokeWidth={1} />
                </g>
              );
            })}

            {/* Legenda */}
            <rect x={10} y={255} width={12} height={5} fill="#0ea5e9" />
            <text x={26} y={262} fontSize={10} fill="#0c4a6e">Canal radial</text>
            <circle cx={16} cy={275} r={4} fill="#0369a1" opacity={0.75} />
            <text x={26} y={279} fontSize={10} fill="#0c4a6e">Pés ambulacrais</text>
            <circle cx={16} cy={292} r={7} fill="#f97316" opacity={0.5} stroke="#ea580c" strokeWidth={1} />
            <text x={26} y={296} fontSize={10} fill="#92400e">Braço (vista oral)</text>

            <text x={280} y={315} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#6b7280">
              vista oral da estrela-do-mar com sistema ambulacral em destaque
            </text>
          </svg>
          <figcaption>
            Sistema ambulacral da estrela-do-mar: a água entra pela madreporita,
            percorre o anel anelar e os canais radiais até os pés ambulacrais em
            cada braço.
          </figcaption>
        </figure>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO 3 — CLASSES DE EQUINODERMOS */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Diversidade</span>

        <h2>3. Classes de Equinodermos</h2>

        <p>
          O filo Echinodermata divide-se em cinco classes principais, todas
          com representantes frequentemente citados em provas. A tabela a seguir
          sintetiza as diferenças fundamentais entre elas:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Classe</th>
                <th>Nome popular</th>
                <th>Forma corporal</th>
                <th>Características marcantes</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Asteroidea</strong></td>
                <td>Estrelas-do-mar</td>
                <td>5 (ou mais) braços fundidos ao disco central</td>
                <td>
                  Predadoras ativas; estômago eversível; grande capacidade de
                  regeneração — um braço com disco pode originar novo indivíduo
                </td>
                <td>
                  <em>Asterias</em>, <em>Oreaster</em>
                </td>
              </tr>
              <tr>
                <td><strong>Echinoidea</strong></td>
                <td>Ouriços-do-mar e bolachas-da-praia</td>
                <td>Corpo globoso (ouriços) ou achatado (bolachas); sem braços</td>
                <td>
                  Espinhos proeminentes; lanterna de Aristóteles (aparelho
                  mastigador); bolachas com simetria bilateral secundária
                </td>
                <td>
                  <em>Echinus</em>, <em>Echinometra</em>
                </td>
              </tr>
              <tr>
                <td><strong>Ophiuroidea</strong></td>
                <td>Ofiuros (serpentes-do-mar, brittle stars)</td>
                <td>Disco central distinto; 5 braços longos, finos e altamente flexíveis</td>
                <td>
                  Braços separados do disco (diferente das estrelas); locomoção
                  ativa com serpentejo; sem estômago eversível
                </td>
                <td>
                  <em>Ophiura</em>, <em>Ophiothrix</em>
                </td>
              </tr>
              <tr>
                <td><strong>Holothuroidea</strong></td>
                <td>Pepinos-do-mar (holotúrias)</td>
                <td>Corpo alongado, musculoso, sem braços</td>
                <td>
                  Simetria bilateral secundária; tentáculos orais modificados
                  para alimentação; evisceram órgãos internos como defesa e
                  depois regeneram
                </td>
                <td>
                  <em>Holothuria</em>, <em>Stichopus</em>
                </td>
              </tr>
              <tr>
                <td><strong>Crinoidea</strong></td>
                <td>Lírios-do-mar e penas-do-mar</td>
                <td>Muitos braços ramificados; maioria séssil fixada por pedúnculo</td>
                <td>
                  Grupo mais antigo (Paleozoico); filtradores suspensívoros;
                  forma séssil com boca voltada para cima
                </td>
                <td>
                  <em>Antedon</em>, <em>Comatula</em>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Atenção no ENEM: regeneração e eviscerção</h3>
          <p>
            A <strong>regeneração</strong> dos equinodermos é resultado da
            capacidade de desdiferenciação e rediferenciação celular — células
            adultas voltam a um estado mais primitivo e se reorganizam em novos
            tecidos. Já a <strong>eviscerção dos pepinos-do-mar</strong> —
            expulsão de parte dos órgãos internos pela cloaca como mecanismo de
            defesa — é um exemplo surpreendente de autotomia visceral, após a
            qual o animal regenera os órgãos perdidos.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO 4 — FILO CHORDATA: 4 CARACTERÍSTICAS */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Filo Chordata</span>

        <h2>4. As Quatro Sinapomorfias dos Cordados</h2>

        <p>
          O filo <strong>Chordata</strong> engloba cerca de 60 000 espécies e
          inclui os animais mais complexos da Terra. O que une um anfioxo, uma
          ascídia e um ser humano é a presença, <em>em algum momento do
          desenvolvimento</em>, de quatro estruturas exclusivas deste filo —
          chamadas <strong>sinapomorfias</strong> (características derivadas
          compartilhadas):
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏋️</span>
            <h3>1. Notocorda</h3>
            <p>
              Bastão flexível de células vacuolizadas, de origem mesodérmica, que
              fornece suporte axial. Em vertebrados, é substituída pela coluna
              vertebral no adulto; nos cefalocordados, persiste a vida toda.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧠</span>
            <h3>2. Tubo nervoso dorsal</h3>
            <p>
              Formado pela dobra da ectoderme (neurulação). Oco por dentro —
              difere do cordão nervoso sólido e ventral dos anelídeos e artrópodes.
              Origina o encéfalo e a medula espinhal nos vertebrados.
            </p>
          </div>

          <div className="lesson-card">
            <span>🐟</span>
            <h3>3. Fendas faringianas</h3>
            <p>
              Aberturas (ou bolsas) laterais da faringe. Nos peixes funcionam
              como brânquias; nos embriões de mamíferos aparecem como bolsas
              faringianas e originam estruturas diversas (glândulas, ouvido médio).
            </p>
          </div>

          <div className="lesson-card">
            <span>🦎</span>
            <h3>4. Cauda pós-anal</h3>
            <p>
              Extensão do corpo além do ânus, com tecido muscular e notocorda
              (ou vértebras). Em humanos, corresponde ao cóccix embrionário, que
              regride durante o desenvolvimento.
            </p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 680 220"
            width="680"
            height="220"
            aria-label="Esquema do anfioxo destacando as quatro características dos cordados"
          >
            {/* Corpo do anfioxo — formato fusiforme */}
            <ellipse cx={340} cy={110} rx={290} ry={52} fill="#bfdbfe" stroke="#3b82f6" strokeWidth={2} />
            {/* Cauda pós-anal */}
            <path d="M 620 110 Q 650 90 670 100 Q 655 110 670 120 Q 650 130 620 110" fill="#93c5fd" stroke="#3b82f6" strokeWidth={1.5} />
            {/* Boca / abertura anterior */}
            <ellipse cx={58} cy={110} rx={14} ry={22} fill="#fde68a" stroke="#d97706" strokeWidth={1.5} />
            <text x={58} y={113} textAnchor="middle" fontSize={9} fontWeight={700} fill="#78350f">boca</text>

            {/* Notocorda — linha central sólida */}
            <line x1={72} y1={110} x2={618} y2={110} stroke="#dc2626" strokeWidth={5} opacity={0.7} />
            <text x={340} y={107} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7f1d1d">notocorda</text>

            {/* Tubo nervoso dorsal — linha superior */}
            <line x1={72} y1={84} x2={618} y2={84} stroke="#7c3aed" strokeWidth={4} opacity={0.75} strokeDasharray="8 4" />
            <text x={340} y={80} textAnchor="middle" fontSize={10} fontWeight={700} fill="#4c1d95">tubo nervoso dorsal</text>

            {/* Fendas faringianas — linhas verticais na região anterior */}
            {[120, 145, 170, 195, 220, 245].map((x, i) => (
              <line key={i} x1={x} y1={88} x2={x} y2={132} stroke="#059669" strokeWidth={2} opacity={0.8} />
            ))}
            <text x={180} y={148} textAnchor="middle" fontSize={10} fontWeight={700} fill="#064e3b">fendas faringianas</text>

            {/* Ânus */}
            <circle cx={590} cy={110} r={7} fill="#f97316" opacity={0.8} stroke="#ea580c" strokeWidth={1.5} />
            <text x={590} y={130} textAnchor="middle" fontSize={9} fill="#c2410c">ânus</text>

            {/* Cauda pós-anal label */}
            <text x={645} y={90} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1d4ed8">cauda</text>
            <text x={645} y={100} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1d4ed8">pós-anal</text>

            {/* Legenda cores */}
            <line x1={20} y1={175} x2={46} y2={175} stroke="#dc2626" strokeWidth={4} />
            <text x={52} y={179} fontSize={10} fill="#374151">Notocorda</text>
            <line x1={130} y1={175} x2={156} y2={175} stroke="#7c3aed" strokeWidth={3} strokeDasharray="5 3" />
            <text x={162} y={179} fontSize={10} fill="#374151">Tubo nervoso</text>
            <line x1={270} y1={168} x2={270} y2={182} stroke="#059669" strokeWidth={2} />
            <text x={278} y={179} fontSize={10} fill="#374151">Fendas faringianas</text>
            <circle cx={430} cy={175} r={5} fill="#f97316" opacity={0.8} />
            <text x={440} y={179} fontSize={10} fill="#374151">Ânus / cauda pós-anal</text>

            <text x={340} y={210} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#6b7280">
              Anfioxo (Branchiostoma) — as 4 sinapomorfias dos cordados persistem no adulto
            </text>
          </svg>
          <figcaption>
            Esquema do anfioxo evidenciando as quatro características exclusivas do
            filo Chordata: notocorda, tubo nervoso dorsal, fendas faringianas e
            cauda pós-anal.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Por que "em alguma fase da vida"?</h3>
          <p>
            Em seres humanos, a <strong>notocorda</strong> transforma-se nos
            núcleos pulposos dos discos intervertebrais do adulto; as{" "}
            <strong>fendas faringianas</strong> surgem no embrião e originam
            estruturas como as amígdalas, timo e glândulas paratireoides; a{" "}
            <strong>cauda pós-anal</strong> regride formando o cóccix. Ou seja,
            mesmo nós somos cordados por apresentarmos essas estruturas durante
            o desenvolvimento embrionário.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO 5 — SUBFILOS DE CORDADOS */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Subdivisions</span>

        <h2>5. Subfilos de Cordados</h2>

        <p>
          O filo Chordata é dividido em três subfilos. Os dois primeiros —
          Urochordata e Cephalochordata — são coletivamente chamados de{" "}
          <strong>protocordados</strong> (ou acraniados): não possuem crânio nem
          coluna vertebral. O terceiro é Vertebrata, o grupo mais diverso e
          complexo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Subfilo</th>
                <th>Nome popular</th>
                <th>Notocorda</th>
                <th>Crânio / coluna</th>
                <th>Características marcantes</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Urochordata</strong></td>
                <td>Tunicados / ascídias</td>
                <td>Apenas na larva</td>
                <td>Ausentes</td>
                <td>
                  Larva livre-natante com notocorda caudal; adulto séssil,
                  filtrador, envolto em túnica de tunicina (polissacarídeo único
                  entre animais). Regressão da notocorda durante a metamorfose.
                </td>
                <td>
                  <em>Ciona intestinalis</em>
                </td>
              </tr>
              <tr>
                <td><strong>Cephalochordata</strong></td>
                <td>Anfioxos</td>
                <td>Toda a vida (cefálica + troncal)</td>
                <td>Ausentes</td>
                <td>
                  Animal pequeno (3–7 cm), fusiforme, marinho. Notocorda
                  estendida até a ponta da cabeça (daí "cefalo"). Musculatura
                  segmentada em miômeros visíveis. Filtrador por correntes
                  ciliares.
                </td>
                <td>
                  <em>Branchiostoma lanceolatum</em>
                </td>
              </tr>
              <tr>
                <td><strong>Vertebrata</strong></td>
                <td>Vertebrados</td>
                <td>No embrião; substituída por vértebras</td>
                <td>Presentes (crânio e coluna)</td>
                <td>
                  Crânio ósseo ou cartilaginoso protegendo encéfalo; coluna
                  vertebral substituindo a notocorda; sistema nervoso central
                  altamente desenvolvido; coração com câmaras.
                </td>
                <td>Peixes, anfíbios, répteis, aves, mamíferos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Urocordados — pista evolutiva</h3>
            <p>
              A larva da ascídia assemelha-se a um pequeníssimo girino e possui
              todas as quatro sinapomorfias dos cordados. Ao metamorfosear em
              adulto séssil, a notocorda e o tubo nervoso regridem — uma
              "involução" morfológica com implicações filogenéticas profundas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Cefalocordados — modelo acadêmico</h3>
            <p>
              O anfioxo é um dos animais mais estudados em cursos de zoologia
              comparada justamente por exibir com clareza as quatro estruturas
              dos cordados na fase adulta — tornou-se o "organismo modelo" para
              compreender a origem dos vertebrados.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧬</span>
            <h3>Parentesco molecular</h3>
            <p>
              Análises de DNA (rRNA 18S) colocam os cefalocordados como o grupo
              irmão dos vertebrados, e os urocordados como o grupo irmão do
              clado (cefalocordados + vertebrados) — hierarquia diferente da
              morfologia clássica.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO 6 — VERTEBRADOS: PANORAMA GERAL */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Vertebrata</span>

        <h2>6. Vertebrados: Panorama dos Grandes Grupos</h2>

        <p>
          O subfilo Vertebrata concentra aproximadamente{" "}
          <strong>58 000 espécies</strong> descritas e é definido pela presença
          de <strong>crânio</strong> (caixa craniana protegendo o encéfalo) e
          de <strong>vértebras</strong> (ou, em alguns casos, cartilagem
          vertebral) protegendo a medula espinhal. A evolução dos vertebrados
          ao longo do Paleozoico, Mesozoico e Cenozoico é uma das histórias
          mais extraordinárias da Biologia.
        </p>

        <div className="lesson-highlight">
          <h3>Principais inovações evolutivas dos vertebrados</h3>
          <p>
            A jornada dos vertebrados incluiu inovações-chave que permitiram
            a conquista de novos ambientes: o desenvolvimento de{" "}
            <strong>mandíbulas</strong> (de arcos branquiais), a{" "}
            <strong>saída para a terra</strong> (membros pentadáctilos),{" "}
            a evolução do <strong>ovo amniótico</strong> (independência da água
            para reprodução), a <strong>endotermia</strong> (controle interno
            da temperatura) e, por fim, a <strong>amamentação e cuidado
            parental</strong> dos mamíferos.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Exemplos</th>
                <th>Ambiente</th>
                <th>Temperatura</th>
                <th>Respiração</th>
                <th>Reprodução</th>
                <th>Ovo amniótico?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ágnatos</strong> (Cyclostomata)</td>
                <td>Lampreias, feiticeiras (mixinas)</td>
                <td>Aquático</td>
                <td>Ectotérmico</td>
                <td>Branquial</td>
                <td>Externa; sem mandíbula</td>
                <td>Não</td>
              </tr>
              <tr>
                <td><strong>Condrictes</strong></td>
                <td>Tubarões, raias, quimeras</td>
                <td>Marinho (maioria)</td>
                <td>Ectotérmico</td>
                <td>Branquial; sem opérculo</td>
                <td>Int.; muitos vivíparos</td>
                <td>Não</td>
              </tr>
              <tr>
                <td><strong>Osteíctes</strong></td>
                <td>Sardinha, salmão, boi-do-rio</td>
                <td>Aquático (doce e marinho)</td>
                <td>Ectotérmico</td>
                <td>Branquial; opérculo</td>
                <td>Ext. (maioria); ovípara</td>
                <td>Não</td>
              </tr>
              <tr>
                <td><strong>Anfíbios</strong></td>
                <td>Sapos, rãs, cecílias, salamandras</td>
                <td>Semi-aquático / terrestre</td>
                <td>Ectotérmico</td>
                <td>Pulmonar + cutânea</td>
                <td>Externa; ovos sem casca</td>
                <td>Não</td>
              </tr>
              <tr>
                <td><strong>Répteis</strong></td>
                <td>Lagartixas, cobras, crocodilos, tartarugas</td>
                <td>Terrestre / aquático</td>
                <td>Ectotérmico</td>
                <td>Pulmonar</td>
                <td>Int.; ovíparos / vivíparos</td>
                <td>Sim</td>
              </tr>
              <tr>
                <td><strong>Aves</strong></td>
                <td>Pombos, galinhas, beija-flores</td>
                <td>Terrestre / aéreo / aquático</td>
                <td>Endotérmico</td>
                <td>Pulmonar (sacos aéreos)</td>
                <td>Int.; ovíparos; cuidado parental</td>
                <td>Sim</td>
              </tr>
              <tr>
                <td><strong>Mamíferos</strong></td>
                <td>Humanos, baleias, morcegos</td>
                <td>Todos os ambientes</td>
                <td>Endotérmico</td>
                <td>Pulmonar</td>
                <td>Int.; vivíparos (maioria); amamentação</td>
                <td>Sim (exceto monotremados: ovíparo)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🦈</span>
            <h3>Ágnatos — os "sem mandíbula"</h3>
            <p>
              Grupo parafilético basal dos vertebrados. Lampreias são
              parasitas ou saprófagos; feiticeiras se alimentam de carcaças.
              Esqueleto 100% cartilaginoso; notocorda persiste no adulto.
            </p>
          </div>
          <div className="lesson-card">
            <span>🐟</span>
            <h3>Peixes ósseos — os mais numerosos</h3>
            <p>
              Com mais de 30 000 espécies, são o maior grupo de vertebrados.
              A bexiga natatória regula a flutuação e, em algumas linhagens,
              evoluiu para um pulmão primitivo (peixes pulmonados).
            </p>
          </div>
          <div className="lesson-card">
            <span>🐸</span>
            <h3>Anfíbios — a transição</h3>
            <p>
              Primeiros tetrápodes a colonizar a terra firme (Devoniano,
              ~375 Ma). Ainda dependem da água para reprodução por causa dos
              ovos gelatinosos sem casca amniótica e da pele úmida.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO 7 — PEIXES: DETALHAMENTO */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Peixes</span>

        <h2>7. Peixes: Ágnatos, Condrictes e Osteíctes</h2>

        <p>
          Os peixes constituem um grupo <em>parafilético</em> — não formam um
          clado natural único, pois os tetrápodes (anfíbios, répteis, aves e
          mamíferos) evoluíram de dentro dos "peixes" ósseos. São, porém,
          agrupados didaticamente em três grades grupos, com diferenças
          anatômicas e fisiológicas importantes para o ENEM:
        </p>

        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg viewBox="0 0 260 180" width="260" height="180" aria-label="Peixe cartilaginoso — tubarão esquemático">
              {/* Corpo */}
              <ellipse cx={130} cy={95} rx={100} ry={42} fill="#94a3b8" opacity={0.3} stroke="#475569" strokeWidth={2} />
              {/* Cauda */}
              <path d="M 225 95 L 255 70 L 255 120 Z" fill="#94a3b8" opacity={0.5} stroke="#475569" strokeWidth={1.5} />
              {/* Nadadeira dorsal */}
              <path d="M 130 53 L 155 38 L 170 53" fill="#64748b" opacity={0.5} stroke="#334155" strokeWidth={1.5} />
              {/* Nadadeira peitoral */}
              <path d="M 110 100 L 80 120 L 95 100" fill="#64748b" opacity={0.4} stroke="#334155" strokeWidth={1} />
              {/* Fendas branquiais */}
              {[68, 76, 84, 92, 100].map((x, i) => (
                <line key={i} x1={x} y1={75} x2={x} y2={112} stroke="#0ea5e9" strokeWidth={2} opacity={0.8} />
              ))}
              {/* Boca */}
              <path d="M 35 102 Q 30 95 35 88" stroke="#334155" strokeWidth={2} fill="none" />
              {/* Olho */}
              <circle cx={50} cy={88} r={6} fill="white" stroke="#334155" strokeWidth={1} />
              <circle cx={51} cy={88} r={3} fill="#1e293b" />
              <text x={80} y={145} textAnchor="middle" fontSize={10} fill="#0c4a6e">fendas branquiais (5–7)</text>
              <text x={130} y={160} textAnchor="middle" fontSize={10} fontWeight={700} fill="#334155">Condricte — sem opérculo</text>
            </svg>
            <figcaption>Peixe cartilaginoso: fendas branquiais expostas, sem opérculo.</figcaption>
          </figure>

          <figure className="lesson-figure">
            <svg viewBox="0 0 260 180" width="260" height="180" aria-label="Peixe ósseo esquemático">
              {/* Corpo */}
              <ellipse cx={130} cy={95} rx={100} ry={45} fill="#bfdbfe" opacity={0.4} stroke="#3b82f6" strokeWidth={2} />
              {/* Cauda */}
              <path d="M 225 95 L 255 72 L 252 95 L 255 118 Z" fill="#93c5fd" stroke="#3b82f6" strokeWidth={1.5} />
              {/* Opérculo */}
              <path d="M 60 65 Q 45 95 60 128" stroke="#1d4ed8" strokeWidth={3} fill="none" />
              <text x={48} y={95} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1d4ed8">opérculo</text>
              {/* Nadadeira dorsal */}
              <path d="M 130 50 L 150 35 L 168 50" fill="#60a5fa" opacity={0.5} stroke="#2563eb" strokeWidth={1.5} />
              {/* Escamas */}
              {[95, 120, 145, 170, 195].map((x) => (
                <ellipse key={x} cx={x} cy={95} rx={12} ry={22} fill="none" stroke="#93c5fd" strokeWidth={1} />
              ))}
              {/* Bexiga natatória */}
              <ellipse cx={145} cy={85} rx={40} ry={12} fill="#fef3c7" stroke="#d97706" strokeWidth={1} strokeDasharray="4 2" />
              <text x={145} y={89} textAnchor="middle" fontSize={9} fill="#78350f">bexiga natatória</text>
              {/* Olho */}
              <circle cx={54} cy={88} r={7} fill="white" stroke="#1d4ed8" strokeWidth={1} />
              <circle cx={55} cy={88} r={3} fill="#1e3a8a" />
              <text x={130} y={160} textAnchor="middle" fontSize={10} fontWeight={700} fill="#1d4ed8">Osteícte — com opérculo</text>
            </svg>
            <figcaption>Peixe ósseo: opérculo cobrindo as brânquias e bexiga natatória.</figcaption>
          </figure>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Ágnatos</th>
                <th>Condrictes</th>
                <th>Osteíctes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mandíbula</td>
                <td>Ausente</td>
                <td>Presente</td>
                <td>Presente</td>
              </tr>
              <tr>
                <td>Esqueleto</td>
                <td>Cartilagem / notocorda</td>
                <td>Cartilagem</td>
                <td>Osso (maioria)</td>
              </tr>
              <tr>
                <td>Opérculo</td>
                <td>Ausente</td>
                <td>Ausente (fendas expostas)</td>
                <td>Presente</td>
              </tr>
              <tr>
                <td>Bexiga natatória</td>
                <td>Ausente</td>
                <td>Ausente</td>
                <td>Presente (maioria)</td>
              </tr>
              <tr>
                <td>Escamas</td>
                <td>Ausente / lamproaria</td>
                <td>Placóides (denticulos)</td>
                <td>Cicloides ou ctenoides</td>
              </tr>
              <tr>
                <td>Fecundação</td>
                <td>Externa</td>
                <td>Interna (clasper)</td>
                <td>Externa (maioria)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO 8 — ANFÍBIOS */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Transição Terra-Água</span>

        <h2>8. Anfíbios: A Conquista Parcial do Ambiente Terrestre</h2>

        <p>
          Os anfíbios (do grego <em>amphibios</em> = "dupla vida") emergiram
          de peixes de nadadeiras lobadas no Devoniano Superior (~375 Ma),
          tornando-se os primeiros <strong>tetrápodes</strong>. Possuem{" "}
          <strong>quatro membros</strong> com disposição pentadáctila
          (eventualmente com redução ou ausência secundária em cecílias) e
          representam a ligação evolutiva entre os peixes e os amniotas
          (répteis, aves, mamíferos).
        </p>

        <p>
          Sua dependência da água se dá fundamentalmente por dois motivos:
          (1) a pele fina, úmida e sem queratinização abundante é permeável à
          água e gases — fundamental para a{" "}
          <strong>respiração cutânea</strong>, mas também à dessecação; e (2)
          os ovos sem membranas amnióticas (gelatinosos) precisam de ambiente
          úmido ou aquático. Apesar disso, a diversidade dos anfíbios é enorme:
          cerca de <strong>8 600 espécies</strong> viventes.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🐸</span>
            <h3>Anura (sapos e rãs)</h3>
            <p>
              Maior ordem; sem cauda no adulto; quatro membros (posteriores
              maiores para salto); metamorfose completa (girino → adulto).
              Sapos: pele rugosa e seca; rãs: pele lisa e úmida.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦎</span>
            <h3>Urodela (salamandras e tritões)</h3>
            <p>
              Corpo alongado com cauda; quatro membros; alguns mantêm brânquias
              durante toda a vida (neotenia). Ex.: axolote (que retém
              características larvais no adulto).
            </p>
          </div>

          <div className="lesson-card">
            <span>🐍</span>
            <h3>Gymnophiona (cecílias)</h3>
            <p>
              Corpo vermiforme sem membros; vivem enterrados ou aquáticos;
              fecundação interna; algumas são vivíparas. Facilmente confundidas
              com cobras ou minhocas.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Metamorfose dos anuros</h3>
          <p>
            O girino (larva) possui respiração <strong>branquial</strong>, cauda,
            sem membros e alimentação herbívora. Sob ação do hormônio tireoidiano,
            ocorre a metamorfose: surgem os membros, desaparecem brânquias e
            cauda, desenvolvem-se pulmões e a boca adquire características
            carnívoras no adulto. Essa transformação é controlada
            hormonalmente e representa uma das mais dramáticas mudanças
            morfológicas do reino animal.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* EXERCÍCIOS */}
      {/* ============================================================ */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — Técnicas e Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Exclusividade dos equinodermos"
          statement={
            <p>
              Qual das estruturas abaixo é exclusiva do filo Echinodermata e
              não ocorre em nenhum outro grupo animal?
            </p>
          }
          options={[
            { letter: "a", text: "Endoesqueleto cartilaginoso" },
            { letter: "b", text: "Sistema ambulacral (aquífero)", correct: true },
            { letter: "c", text: "Tubo nervoso dorsal" },
            { letter: "d", text: "Notocorda" },
          ]}
          resolution={
            <p>
              O <strong>sistema ambulacral</strong> (ou aquífero/hidrovascular),
              formado por canais preenchidos com água do mar e terminando em
              pés ambulacrais, é uma autapomorfia dos equinodermos — nenhum
              outro filo animal o possui. O endoesqueleto cartilaginoso ocorre
              em condrictes; o tubo nervoso dorsal e a notocorda são
              sinapomorfias dos cordados.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Sinapomorfias dos cordados"
          statement={
            <p>
              Um estudante afirmou: "Seres humanos não são cordados porque não
              possuem notocorda nem fendas branquiais". Avalie essa afirmação
              à luz do desenvolvimento embrionário.
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Correta: humanos evoluíram dos mamíferos e perderam essas características definitivamente.",
            },
            {
              letter: "b",
              text: "Incorreta: essas estruturas estão presentes no embrião humano, mas regridem ou se transformam durante o desenvolvimento.",
              correct: true,
            },
            {
              letter: "c",
              text: "Correta: apenas os protocordados apresentam essas características; vertebrados as perderam.",
            },
            {
              letter: "d",
              text: "Incorreta: humanos possuem notocorda e fendas branquiais funcionais na fase adulta.",
            },
          ]}
          resolution={
            <p>
              As quatro sinapomorfias dos cordados precisam estar presentes{" "}
              <em>em alguma fase do desenvolvimento</em>. No embrião humano, a
              notocorda surge e induz a formação da coluna vertebral (tornando-se
              os núcleos pulposos dos discos intervertebrais); as bolsas
              faringianas (homólogas às fendas branquiais) originam estruturas
              como timo, paratireoides e amígdalas; a cauda pós-anal regride
              formando o cóccix. Portanto, a afirmação do estudante está
              completamente incorreta.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Deuterostômios e parentesco evolutivo"
          statement={
            <p>
              Do ponto de vista filogenético, equinodermos e cordados são mais
              aparentados entre si do que qualquer um deles é com os artrópodes.
              A evidência mais direta que sustenta essa afirmação é:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O habitat marinho compartilhado por equinodermos e cordados primitivos.",
            },
            {
              letter: "b",
              text: "A presença de sistema ambulacral em ambos os grupos.",
            },
            {
              letter: "c",
              text: "O padrão de desenvolvimento embrionário deuterostômio, em que o blastóporo origina o ânus, compartilhado exclusivamente por equinodermos e cordados entre os animais.",
              correct: true,
            },
            {
              letter: "d",
              text: "A simetria bilateral das larvas de equinodermos, idêntica à dos cordados.",
            },
          ]}
          resolution={
            <p>
              O clado <strong>Deuterostomia</strong> é definido pela origem
              anal do blastóporo, pelo padrão de clivagem radial e indeterminada
              e pela formação do celoma como enterocele (dobra da arquêntero).
              Equinodermos e cordados compartilham todas essas características,
              sendo os dois grandes filos deuterostômios. Artrópodes são
              protostômios (blastóporo origina a boca). O ambiente marinho e a
              simetria bilateral das larvas não são evidências filogenéticas
              exclusivas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Pepino-do-mar e eviscerção (inspirado em ENEM)"
          statement={
            <p>
              Pesquisadores observaram que, ao ser perturbado por um predador,
              um pepino-do-mar expeliu pela cloaca grande parte de seus órgãos
              internos, incluindo parte do trato digestório. Após alguns dias no
              ambiente sem perturbação, o animal havia regenerado completamente
              os tecidos perdidos. Esse comportamento demonstra:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Que o animal possui reprodução assexuada obrigatória por fragmentação.",
            },
            {
              letter: "b",
              text: "Que equinodermos são protostômios com grande capacidade de regeneração.",
            },
            {
              letter: "c",
              text: "A eviscerção como mecanismo de defesa e a notável capacidade de regeneração de tecidos, característica do filo Echinodermata.",
              correct: true,
            },
            {
              letter: "d",
              text: "Que pepinos-do-mar são vertebrados que substituem a coluna vertebral ao longo da vida.",
            },
          ]}
          resolution={
            <p>
              A <strong>eviscerção</strong> é um comportamento defensivo único
              dos holoturoídeos (pepinos-do-mar): ao expelir os órgãos internos
              e, em algumas espécies, estruturas viscosas adesivas (túbulos de
              Cuvier), o animal distrai ou enrola o predador enquanto escapa.
              A subsequente regeneração dos órgãos é possível graças à
              pluripotência de células mesenquimais do tecido conjuntivo —
              capacidade amplamente documentada nos equinodermos (que são
              deuterostômios, não protostômios). Vertebrados possuem coluna
              permanente; a opção d é absurda.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Anfíbios e bioindicadores ambientais (ENEM)"
          statement={
            <p>
              Anfíbios têm sido amplamente utilizados como bioindicadores da
              qualidade ambiental. A principal razão biológica para isso é que:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Possuem endotermia, tornando-os sensíveis a variações de temperatura.",
            },
            {
              letter: "b",
              text: "Sua pele fina, úmida e permeável absorve diretamente contaminantes do ambiente aquático e terrestre, tornando-os extremamente sensíveis à poluição.",
              correct: true,
            },
            {
              letter: "c",
              text: "Seus ovos com casca calcária são impermeáveis a pesticidas e metais pesados.",
            },
            {
              letter: "d",
              text: "São exclusivamente aquáticos e respondem somente à poluição de rios.",
            },
          ]}
          resolution={
            <p>
              Os anfíbios são ectotérmicos (não endotérmicos), e seus ovos são
              gelatinosos e sem casca — portanto, completamente permeáveis a
              contaminantes. A pele dos anfíbios, utilizada para respiração
              cutânea, absorve facilmente pesticidas, fungicidas, metais pesados
              e outros poluentes dissolvidos na água e no solo. Além disso, como
              vivem em dois ambientes (aquático na larva, terrestre no adulto),
              integram a qualidade de ambos. Por isso, declínios nas populações
              de anfíbios são alertas precoces de degradação ambiental — uma
              das maiores crises de biodiversidade em curso no planeta.
            </p>
          }
        />
      </section>
    </article>
  );
}
