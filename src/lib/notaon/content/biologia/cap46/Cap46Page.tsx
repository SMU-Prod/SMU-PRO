"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap46Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 46</span>

          <h1>
            Impactos Ambientais: Poluição, Eutrofização, Magnificação,
            Invasoras e Pegada Ecológica
          </h1>

          <p>
            As atividades humanas têm alterado o planeta em escala sem precedentes.
            Neste capítulo você vai dominar os mecanismos da <strong>poluição
            atmosférica e hídrica</strong>, entender passo a passo a{" "}
            <strong>eutrofização</strong> e a <strong>magnificação trófica</strong>,
            analisar o impacto de <strong>espécies exóticas invasoras</strong>,
            compreender o conceito de <strong>pegada ecológica</strong> e conhecer
            as principais estratégias de conservação — temas recorrentes no ENEM e
            nos vestibulares de todo o Brasil.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 1 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Panorama</span>

        <h2>1. O Que São Impactos Ambientais?</h2>

        <p>
          Um <strong>impacto ambiental</strong> é qualquer alteração nas
          propriedades físicas, químicas ou biológicas do meio ambiente,
          causada por atividades humanas ou por eventos naturais, que afete
          negativamente a saúde, a segurança, o bem-estar da população ou a
          qualidade dos recursos naturais. A grande maioria dos impactos
          contemporâneos tem origem antrópica — ou seja, decorre de escolhas
          humanas de produção, consumo e descarte.
        </p>

        <p>
          Os impactos podem ser <strong>diretos</strong> (destruição de um
          habitat por desmatamento) ou <strong>indiretos</strong> (aquecimento
          global que muda o regime de chuvas, afetando biomas distantes da
          fonte emissora). Eles também se classificam quanto à{" "}
          <strong>reversibilidade</strong>: alguns ecossistemas se recuperam
          após cessada a pressão antrópica; outros sofrem mudanças{" "}
          <strong>irreversíveis</strong>, como a extinção de espécies endêmicas.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌫️</span>
            <h3>Poluição do Ar</h3>
            <p>Gases e partículas que alteram a composição da atmosfera e causam doenças respiratórias, chuva ácida e aquecimento global.</p>
          </div>

          <div className="lesson-card">
            <span>💧</span>
            <h3>Poluição da Água</h3>
            <p>Esgoto, fertilizantes, metais pesados e plásticos que comprometem rios, lagos e oceanos.</p>
          </div>

          <div className="lesson-card">
            <span>🌱</span>
            <h3>Desmatamento</h3>
            <p>Remoção de vegetação nativa que gera perda de habitat, erosão do solo e liberação de carbono estocado.</p>
          </div>

          <div className="lesson-card">
            <span>🦜</span>
            <h3>Espécies Invasoras</h3>
            <p>Organismos introduzidos fora de sua área natural que competem, predam ou transmitem doenças às espécies nativas.</p>
          </div>

          <div className="lesson-card">
            <span>🏭</span>
            <h3>Resíduos Sólidos</h3>
            <p>Lixo doméstico, industrial e eletrônico que contamina solos e cursos d'água e persiste por séculos no ambiente.</p>
          </div>

          <div className="lesson-card">
            <span>👣</span>
            <h3>Pegada Ecológica</h3>
            <p>Medida do impacto do estilo de vida humano sobre a biocapacidade do planeta.</p>
          </div>
        </div>
      </section>

      {/* ─── SEÇÃO 2 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Poluição Atmosférica</span>

        <h2>2. Poluição do Ar: Efeito Estufa, Chuva Ácida e Camada de Ozônio</h2>

        <p>
          A queima de combustíveis fósseis (carvão, petróleo, gás natural) e as
          queimadas florestais lançam enormes quantidades de gases e partículas
          na atmosfera, desencadeando uma série de fenômenos interligados.
        </p>

        <div className="lesson-highlight">
          <h3>Efeito Estufa Intensificado e Aquecimento Global</h3>
          <p>
            O <strong>efeito estufa natural</strong> é essencial à vida: gases
            como CO₂, CH₄ e vapor de água retêm parte da radiação infravermelha
            irradiada pela superfície terrestre, mantendo a temperatura média
            do planeta em torno de 15 °C (sem ele, seria cerca de ‑18 °C). O
            problema atual é o <strong>intensificação</strong> desse efeito
            pela emissão antrópica: a concentração de CO₂ atmosférico saltou de
            280 ppm (pré-industrial) para mais de 420 ppm atualmente,
            acelerando o aquecimento global. As consequências incluem derretimento
            das calotas polares, elevação do nível do mar, eventos climáticos
            extremos (secas, furacões, enchentes) e deslocamento de biomas.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Chuva Ácida</h3>
          <p>
            SO₂ e NOₓ, liberados por usinas termelétricas, indústrias
            siderúrgicas e veículos a diesel, reagem com o vapor de água
            atmosférico formando <strong>ácido sulfúrico (H₂SO₄)</strong> e{" "}
            <strong>ácido nítrico (HNO₃)</strong>. A precipitação resultante
            tem pH inferior a 5,6 (chuva normal tem pH ≈ 5,6 devido ao CO₂
            dissolvido). A chuva ácida corrói monumentos e edificações,
            acidifica lagos — matando peixes e invertebrados —, empobrece o
            solo e danifica florestas inteiras. Regiões distantes das fontes
            emissoras podem ser afetadas, pois os poluentes viajam centenas de
            quilômetros pelos ventos.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Destruição da Camada de Ozônio e CFCs</h3>
          <p>
            A <strong>camada de ozônio</strong> (O₃), localizada na
            estratosfera entre 15 e 35 km de altitude, filtra a maior parte da
            radiação <strong>UV-B</strong>, que em excesso causa câncer de pele,
            catarata e danos ao plâncton marinho. Os{" "}
            <strong>clorofluorcarbonetos (CFCs)</strong> — usados em
            aerossóis, refrigeradores e espumas isolantes até sua proibição
            pelo Protocolo de Montreal (1987) — se difundem até a estratosfera,
            onde a radiação UV libera átomos de cloro que destroem moléculas de
            O₃ em reação catalítica: um único átomo de Cl pode destruir até
            100 000 moléculas de ozônio. O "buraco" sobre a Antártida, descoberto
            na década de 1980, é o símbolo máximo desse problema.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Inversão Térmica e Ilha de Calor</h3>
          <p>
            Na <strong>inversão térmica</strong>, uma camada de ar quente
            "tampa" o ar frio junto ao solo, impedindo a dispersão dos
            poluentes. É comum em dias frios, sem vento, em cidades como São
            Paulo. Já a <strong>ilha de calor urbana</strong> ocorre porque o
            concreto e o asfalto absorvem e irradiam mais calor do que a
            vegetação, elevando a temperatura das metrópoles em até 5 °C acima
            das zonas rurais adjacentes — agravando a poluição e o consumo de
            ar-condicionado.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Poluente</th>
                <th>Principal origem</th>
                <th>Efeito ambiental / à saúde</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CO₂</td>
                <td>Queima de combustíveis fósseis, desmatamento</td>
                <td>Intensifica efeito estufa; aquecimento global</td>
              </tr>
              <tr>
                <td>CH₄</td>
                <td>Pecuária, aterros, arrozais inundados</td>
                <td>Gás estufa 80× mais potente que CO₂ em 20 anos</td>
              </tr>
              <tr>
                <td>SO₂</td>
                <td>Usinas termoelétricas, refinarias, vulcões</td>
                <td>Chuva ácida; bronquite, asma</td>
              </tr>
              <tr>
                <td>NOₓ</td>
                <td>Veículos, indústrias, queimadas</td>
                <td>Chuva ácida; smog fotoquímico; O₃ troposférico</td>
              </tr>
              <tr>
                <td>CFCs</td>
                <td>Antigos aerossóis, refrigeradores</td>
                <td>Destruição da camada de O₃ estratosférico</td>
              </tr>
              <tr>
                <td>Material particulado (MP₂,₅)</td>
                <td>Queimadas, veículos a diesel, indústrias</td>
                <td>Doenças cardiovasculares e respiratórias graves</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 200" width="720" height="200" aria-label="Diagrama do efeito estufa">
            {/* Sol */}
            <circle cx={60} cy={50} r={30} fill="#fbbf24" opacity={0.9} />
            <text x={60} y={55} textAnchor="middle" fontSize={11} fontWeight={700} fill="#92400e">SOL</text>
            {/* Setas de radiação solar entrando */}
            <line x1={90} y1={50} x2={250} y2={80} stroke="#fbbf24" strokeWidth={2.5} markerEnd="url(#arr)" />
            {/* Superfície */}
            <rect x={200} y={160} width={480} height={24} rx={4} fill="#6b7280" opacity={0.4} />
            <text x={440} y={177} textAnchor="middle" fontSize={11} fill="#374151">Superfície terrestre</text>
            {/* Camada de gases estufa */}
            <rect x={200} y={90} width={480} height={22} rx={6} fill="#34d399" opacity={0.25} stroke="#059669" strokeWidth={1.5} strokeDasharray="6 3" />
            <text x={440} y={105} textAnchor="middle" fontSize={11} fill="#065f46">Gases de efeito estufa (CO₂, CH₄, H₂O…)</text>
            {/* Seta IR subindo da superfície */}
            <line x1={360} y1={158} x2={360} y2={115} stroke="#ef4444" strokeWidth={2} strokeDasharray="5 3" />
            <text x={375} y={140} fontSize={10} fill="#b91c1c">radiação IR</text>
            {/* Seta IR refletida de volta */}
            <line x1={420} y1={112} x2={420} y2={158} stroke="#f97316" strokeWidth={2} strokeDasharray="5 3" />
            <text x={435} y={132} fontSize={10} fill="#c2410c">re-emissão</text>
            {/* Seta IR escapando */}
            <line x1={560} y1={90} x2={600} y2={40} stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="4 3" />
            <text x={610} y={36} fontSize={10} fill="#64748b">fuga parcial</text>
            <defs>
              <marker id="arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#fbbf24" />
              </marker>
            </defs>
          </svg>
          <figcaption>
            O efeito estufa intensificado: os gases antropogênicos retêm mais radiação infravermelha,
            elevando a temperatura média global.
          </figcaption>
        </figure>
      </section>

      {/* ─── SEÇÃO 3 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Eutrofização</span>

        <h2>3. Eutrofização: Passo a Passo do Colapso Aquático</h2>

        <p>
          A <strong>eutrofização</strong> (do grego <em>eutrophos</em> = bem
          nutrido) é o enriquecimento excessivo de ambientes aquáticos com
          nutrientes inorgânicos — especialmente <strong>fosfatos</strong> e{" "}
          <strong>nitratos</strong> — provenientes de esgotos domésticos sem
          tratamento, fertilizantes agrícolas carreados pela chuva e dejetos
          de criações animais. Embora exista uma eutrofização natural lenta
          em lagos envelhecidos, a versão antrópica acelera o processo em
          décadas ou anos.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 760 210" width="760" height="210" aria-label="Processo de eutrofização em etapas">
            {[
              { x: 10, label: "Entrada de\nnutrientes", color: "#0ea5e9", icon: "💧" },
              { x: 155, label: "Explosão de\nalgas (bloom)", color: "#16a34a", icon: "🌿" },
              { x: 300, label: "Bloqueio\nda luz", color: "#ca8a04", icon: "☀️" },
              { x: 445, label: "Morte de\nalgas/plantas", color: "#9333ea", icon: "🍂" },
              { x: 590, label: "Queda de\nO₂ dissolvido", color: "#ef4444", icon: "💀" },
            ].map((s) => (
              <g key={s.label}>
                <rect x={s.x} y={50} width={130} height={80} rx={12} fill={s.color} opacity={0.13} stroke={s.color} strokeWidth={1.8} />
                <text x={s.x + 65} y={82} textAnchor="middle" fontSize={20}>{s.icon}</text>
                {s.label.split("\n").map((line, i) => (
                  <text key={i} x={s.x + 65} y={108 + i * 16} textAnchor="middle" fontSize={12} fontWeight={700} fill="#1f2937">{line}</text>
                ))}
                {s.x < 590 && (
                  <polygon points={`${s.x + 136},90 ${s.x + 152},84 ${s.x + 152},96`} fill="#9ca3af" />
                )}
              </g>
            ))}
            <text x={380} y={175} textAnchor="middle" fontSize={11} fill="#6b7280">
              Resultado final: "zona morta" — sem oxigênio, sem peixes
            </text>
            <text x={380} y={195} textAnchor="middle" fontSize={11} fill="#9ca3af">
              Causa: esgoto doméstico + fertilizantes agrícolas (nitratos e fosfatos)
            </text>
          </svg>
          <figcaption>
            As cinco etapas da eutrofização: o excesso de nutrientes desencadeia uma cascata que
            culmina na anoxia (ausência de O₂) e na morte em massa de organismos aeróbios.
          </figcaption>
        </figure>

        <p>
          Ao bloquear a luz solar, o tapete de algas (denominado{" "}
          <strong>bloom</strong> ou floração algal) impede a fotossíntese de
          plantas submersas. Com a morte dessas algas e plantas, bactérias
          decompositoras proliferam consumindo o pouco O₂ restante por
          respiração aeróbia. O resultado é uma{" "}
          <strong>zona hipóxica ou anóxica</strong> — pobre ou desprovida de
          oxigênio —, na qual peixes, crustáceos e moluscos morrem por
          asfixia. Algumas cianobactérias que proliferam durante o bloom
          ainda produzem <strong>cianotoxinas</strong>, prejudiciais aos
          animais que bebem ou se bañam nessa água, inclusive seres humanos.
        </p>

        <div className="lesson-highlight">
          <h3>Medidas de controle da eutrofização</h3>
          <p>
            O tratamento de esgotos (remoção de fosfatos e nitratos por
            processos físico-químicos ou biológicos), a adoção de{" "}
            <strong>faixas-tampão</strong> de vegetação nativa às margens de
            rios e represas (que retêm nutrientes antes que cheguem à água), e
            a aplicação racional de fertilizantes com base em análise do solo
            são as principais estratégias para prevenir e reverter a
            eutrofização.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 4 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Magnificação Trófica</span>

        <h2>4. Magnificação / Bioacumulação Trófica</h2>

        <p>
          A <strong>bioacumulação</strong> ocorre quando um organismo absorve
          uma substância tóxica mais rapidamente do que a elimina, fazendo com
          que ela se acumule em seus tecidos ao longo do tempo. A{" "}
          <strong>magnificação trófica</strong> (ou biomagnificação) é o
          fenômeno consequente: à medida que a substância passa de um nível
          trófico para o seguinte, sua concentração nos tecidos{" "}
          <strong>aumenta progressivamente</strong>, porque o predador precisa
          consumir grande quantidade de presas para obter energia — acumulando
          também todo o tóxico presente nelas.
        </p>

        <p>
          O exemplo histórico mais emblemático é o do inseticida{" "}
          <strong>DDT</strong> (diclorodifeniltricloroetano), largamente
          utilizado após a Segunda Guerra Mundial. Nas décadas de 1950 e 1960,
          observou-se que rapinantes como a águia-careca nos EUA e o falcão
          peregrino tinham ovos com cascas tão frágeis que quebravam durante a
          incubação — a <strong>Síndrome da Casca Fina</strong> —, levando as
          populações à beira da extinção. A investigação revelou concentrações
          de DDT centenas de milhares de vezes maiores no tecido dos pássaros
          do que na água dos lagos. Esse caso motivou a proibição do DDT em
          vários países e inspirou o livro <em>Primavera Silenciosa</em>, de
          Rachel Carson (1962), marco do ambientalismo moderno.
        </p>

        <p>
          O <strong>metilmercúrio</strong> (forma orgânica do mercúrio) é
          outro exemplo crítico: produzido por bactérias a partir do mercúrio
          inorgânico despejado por garimpos e indústrias em rios e baías,
          acumula-se em peixes predadores como o atum e o cação. O consumo
          excessivo dessas espécies por populações ribeirinhas levou à doença
          de Minamata no Japão (anos 1950–1960), causando distúrbios
          neurológicos graves e mortes.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 230" width="680" height="230" aria-label="Biomagnificação ao longo da cadeia alimentar">
            {/* eixo Y */}
            <line x1={60} y1={20} x2={60} y2={185} stroke="#374151" strokeWidth={1.5} />
            <text x={14} y={105} fontSize={11} fill="#374151" transform="rotate(-90,14,105)">Concentração de poluente</text>
            {/* eixo X */}
            <line x1={60} y1={185} x2={650} y2={185} stroke="#374151" strokeWidth={1.5} />

            {/* barras de nível trófico */}
            {[
              { x: 90,  h: 16,  label: "Fitoplâncton",       color: "#4ade80", conc: "0,04 ppm" },
              { x: 220, h: 50,  label: "Zooplâncton",        color: "#22d3ee", conc: "0,2 ppm" },
              { x: 350, h: 90,  label: "Peixe pequeno",      color: "#f59e0b", conc: "0,8 ppm" },
              { x: 480, h: 135, label: "Peixe grande",       color: "#f97316", conc: "3 ppm" },
              { x: 580, h: 160, label: "Ave predadora / humano", color: "#ef4444", conc: "25 ppm" },
            ].map((b) => (
              <g key={b.label}>
                <rect x={b.x} y={185 - b.h} width={70} height={b.h} rx={6} fill={b.color} opacity={0.8} />
                <text x={b.x + 35} y={185 - b.h - 6} textAnchor="middle" fontSize={10} fontWeight={700} fill="#111827">{b.conc}</text>
                <text x={b.x + 35} y={205} textAnchor="middle" fontSize={9.5} fill="#374151">{b.label.split(" ").map((w, i) => (
                  <tspan key={i} x={b.x + 35} dy={i === 0 ? 0 : 12}>{w}</tspan>
                ))}</text>
              </g>
            ))}
            <text x={355} y={15} textAnchor="middle" fontSize={12} fontStyle="italic" fill="#6b7280">concentração cresce a cada nível trófico →</text>
          </svg>
          <figcaption>
            Biomagnificação: a concentração do poluente pode ser centenas de milhares de vezes maior
            nos predadores de topo do que no ambiente aquático original.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Substância</th>
                <th>Origem</th>
                <th>Acumula-se em</th>
                <th>Efeito nos predadores de topo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DDT / organoclorados</td>
                <td>Inseticidas agrícolas</td>
                <td>Tecido adiposo</td>
                <td>Casca fina de ovos; declínio de rapinantes</td>
              </tr>
              <tr>
                <td>Metilmercúrio</td>
                <td>Garimpos, indústrias cloro-soda</td>
                <td>Tecido nervoso</td>
                <td>Disfunção neurológica grave (doença de Minamata)</td>
              </tr>
              <tr>
                <td>PCBs (bifenilas policloradas)</td>
                <td>Transformadores elétricos, tintas</td>
                <td>Tecido adiposo</td>
                <td>Imunossupressão, distúrbios reprodutivos</td>
              </tr>
              <tr>
                <td>Chumbo</td>
                <td>Gasolina com chumbo (extinta), tintas antigas, mineração</td>
                <td>Ossos, tecido nervoso</td>
                <td>Saturnismo; dano cerebral</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SEÇÃO 5 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Espécies Invasoras</span>

        <h2>5. Espécies Exóticas Invasoras e Perda de Biodiversidade</h2>

        <p>
          Uma <strong>espécie exótica</strong> é qualquer organismo introduzido
          — intencional ou acidentalmente — em uma região fora de sua área de
          distribuição natural. Quando essa espécie se estabelece e se expande
          causando danos ecológicos, econômicos ou sanitários, é denominada{" "}
          <strong>invasora</strong>. A invasão biológica é considerada uma das
          principais causas de extinção de espécies no mundo, perdendo apenas
          para a destruição de habitats.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🐟</span>
            <h3>Mexilhão-dourado</h3>
            <p>
              <em>Limnoperna fortunei</em>, originário da Ásia, chegou ao
              Brasil nos anos 1990 em água de lastro de navios. Obstrui
              tubulações de hidrelétricas, compete com bivalves nativos e altera
              cadeias alimentares em rios da bacia do Prata e do Paraná.
            </p>
          </div>

          <div className="lesson-card">
            <span>🐗</span>
            <h3>Javali (Sus scrofa)</h3>
            <p>
              Introduzido para criação e caça, fugiu e se tornou invasor no
              Sul e Centro-Oeste do Brasil. Destrói lavouras, compacta o solo,
              caça pequenos vertebrados e compete com o queixada e o cateto
              nativos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🐌</span>
            <h3>Caramujo-africano</h3>
            <p>
              <em>Achatina fulica</em> foi trazido como alternativa econômica ao
              escargot. Devora lavouras inteiras e é hospedeiro intermediário do
              verme causador da meningite eosinofílica em humanos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🐸</span>
            <h3>Rã-touro-americana</h3>
            <p>
              <em>Lithobates catesbeianus</em>, introduzida em ranários, escapa
              e devora anfíbios, pequenos répteis e aves nativos; também
              dissemina o fungo <em>Batrachochytrium dendrobatidis</em>, que
              causa quitridiomicose — doença que já extinguiu dezenas de espécies
              de anfíbios.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌾</span>
            <h3>Braquiária</h3>
            <p>
              Capins do gênero <em>Urochloa</em> (ex-<em>Brachiaria</em>),
              introduzidos para pastagem, invadem bordas de matas e cerrado,
              impedindo a regeneração natural e alterando o regime de incêndios.
            </p>
          </div>

          <div className="lesson-card">
            <span>🐝</span>
            <h3>Abelha-europeia africanizada</h3>
            <p>
              Resultado de cruzamento de <em>Apis mellifera</em> africana com
              subespécies europeias em 1956 no Brasil. Dominou nichos de
              abelhas nativas, competindo por recursos florais e reduzindo a
              polinização de espécies dependentes de polinizadores específicos.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Por que as invasoras têm tanto sucesso?</h3>
          <p>
            No novo habitat, a espécie invasora frequentemente encontra{" "}
            <strong>ausência de predadores naturais</strong>, parasitas e
            patógenos específicos que controlavam sua população de origem —
            fenômeno conhecido como <strong>liberação biótica</strong>.
            Combinado com alta taxa reprodutiva e plasticidade ecológica, isso
            permite crescimento populacional explosivo. As espécies nativas,
            que nunca co-evoluíram com a invasora, não possuem comportamentos
            ou defesas adequadas para enfrentá-la.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 6 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Desmatamento e Queimadas</span>

        <h2>6. Desmatamento, Queimadas e Fragmentação de Habitats</h2>

        <p>
          O Brasil possui os maiores índices de biodiversidade do planeta, mas
          também registra altas taxas históricas de desmatamento. A Amazônia,
          o Cerrado e a Mata Atlântica — considerados <em>hotspots</em> de
          biodiversidade — são os biomas mais ameaçados.
        </p>

        <p>
          O desmatamento gera <strong>fragmentação de habitat</strong>:
          manchas isoladas de vegetação nativa que não se comunicam. Espécies
          que necessitam de grandes territórios (onça-pintada, anta, arara) não
          conseguem sobreviver em fragmentos pequenos; a consanguinidade
          aumenta em populações isoladas, reduzindo a variabilidade genética e
          a capacidade adaptativa — o chamado <strong>efeito de borda</strong>{" "}
          e o risco de <strong>espiral de extinção</strong>. Os{" "}
          <strong>corredores ecológicos</strong> são estratégia fundamental para
          reconectar fragmentos e permitir fluxo gênico.
        </p>

        <p>
          As <strong>queimadas</strong> — muitas vezes usadas para "limpar"
          terras para agropecuária — liberam enormes quantidades de CO₂ e
          material particulado, agravando o aquecimento global e poluindo o ar
          de cidades distantes. Também destroem a matéria orgânica do solo,
          reduzem a microbiota responsável pela ciclagem de nutrientes,
          eliminam diretamente animais de menor mobilidade e, em regiões de
          clima sazonalmente seco, podem se tornar incêndios descontrolados.
        </p>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Dado ENEM:</strong> A Mata Atlântica original cobria
            cerca de 15% do território brasileiro; hoje restam aproximadamente{" "}
            <strong>12% de remanescentes</strong>, a maior parte em fragmentos
            menores que 100 ha. Ainda assim, abriga cerca de 70% das espécies
            ameaçadas de extinção do Brasil.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 7 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Pegada Ecológica</span>

        <h2>7. Pegada Ecológica e Sustentabilidade</h2>

        <p>
          A <strong>pegada ecológica</strong> é um indicador desenvolvido na
          década de 1990 por Mathis Wackernagel e William Rees que mede a
          área de terra e água biologicamente produtiva necessária para:
          (a) produzir os recursos que uma população consome e (b) absorver os
          resíduos gerados, especialmente o CO₂. A unidade é o{" "}
          <strong>hectare global (hag)</strong> — hectares de produtividade
          média mundial. A <strong>biocapacidade</strong> é a área
          efetivamente disponível para isso.
        </p>

        <div className="lesson-highlight">
          <h3>Déficit ecológico (overshoot)</h3>
          <p>
            Quando a pegada ecológica de uma nação ou da humanidade supera sua
            biocapacidade, há <strong>overshoot</strong> ecológico: consumimos
            mais do que a Terra pode regenerar em um ano. Desde a década de
            1970 a humanidade opera em déficit ecológico global. O{" "}
            <strong>Dia da Sobrecarga da Terra</strong> (<em>Earth Overshoot
            Day</em>) marca a data em que os recursos anuais já foram esgotados
            — em anos recentes, esse dia tem caído em agosto ou julho. Após
            essa data, vivemos "no cheque especial" dos ecossistemas.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🍖</span>
            <h3>Dieta</h3>
            <p>
              A produção de carne bovina exige até 15 000 L de água e gera
              até 30 kg de CO₂-eq por kg de proteína — muito acima de
              proteínas vegetais.
            </p>
          </div>

          <div className="lesson-card">
            <span>✈️</span>
            <h3>Transporte</h3>
            <p>
              Um voo transatlântico pode gerar mais CO₂ per capita do que
              meses de uso de automóvel; a pegada de carbono do transporte aéreo
              é desproporcionalmente alta.
            </p>
          </div>

          <div className="lesson-card">
            <span>🏠</span>
            <h3>Habitação e energia</h3>
            <p>
              Casas grandes, ar-condicionado e eletrodomésticos ineficientes
              ampliam o consumo energético e, se a matriz for fóssil,
              aumentam a pegada de carbono.
            </p>
          </div>

          <div className="lesson-card">
            <span>🛍️</span>
            <h3>Moda e consumo</h3>
            <p>
              A <em>fast fashion</em> é a segunda indústria mais poluente do
              mundo: usa enormes volumes de água, gera resíduos tóxicos e emite
              gases de efeito estufa em toda sua cadeia produtiva.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Como reduzir a pegada ecológica</h3>
          <p>
            As principais ações são: adotar dietas com menor proporção de
            carne; usar transportes coletivos e bicicleta; eficientizar o
            consumo de energia elétrica; optar por fontes renováveis; reduzir,
            reutilizar e reciclar resíduos; e apoiar políticas públicas que
            regulem emissões industriais e protejam áreas nativas.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 8 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Conservação</span>

        <h2>8. Estratégias de Conservação e Legislação</h2>

        <p>
          A resposta humana aos impactos ambientais envolve instrumentos
          legais, tecnológicos e comportamentais. No Brasil, o{" "}
          <strong>Código Florestal (Lei 12.651/2012)</strong> estabelece a{" "}
          <strong>Área de Preservação Permanente (APP)</strong> — faixas de
          vegetação obrigatória às margens de rios e topos de morro — e a{" "}
          <strong>Reserva Legal</strong>, percentual mínimo de vegetação nativa
          que toda propriedade rural deve manter (80% na Amazônia; 35% no
          Cerrado; 20% nas demais regiões). O{" "}
          <strong>Sistema Nacional de Unidades de Conservação (SNUC, Lei
          9.985/2000)</strong> organiza parques nacionais, reservas
          biológicas, áreas de proteção ambiental e outras categorias.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de poluição / impacto</th>
                <th>Principal causa antrópica</th>
                <th>Estratégia de mitigação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aquecimento global</td>
                <td>Queima de combustíveis fósseis, desmatamento</td>
                <td>Energias renováveis; eficiência energética; REDD+</td>
              </tr>
              <tr>
                <td>Chuva ácida</td>
                <td>Emissões de SO₂ e NOₓ</td>
                <td>Catalisadores em veículos; lavadores industriais de gás</td>
              </tr>
              <tr>
                <td>Destruição do ozônio</td>
                <td>CFCs e HCFCs</td>
                <td>Protocolo de Montreal; substituição por HFOs</td>
              </tr>
              <tr>
                <td>Eutrofização</td>
                <td>Esgotos e fertilizantes</td>
                <td>Tratamento de efluentes; faixas-tampão; adubação racional</td>
              </tr>
              <tr>
                <td>Biomagnificação</td>
                <td>Agrotóxicos e metais pesados</td>
                <td>Proibição de POPs (Convenção de Estocolmo); manejo integrado</td>
              </tr>
              <tr>
                <td>Espécies invasoras</td>
                <td>Introdução intencional e acidental</td>
                <td>Controle de água de lastro; fiscalização; controle biológico</td>
              </tr>
              <tr>
                <td>Desmatamento</td>
                <td>Agropecuária, mineração, urbanização</td>
                <td>Código Florestal; UCs; corredores ecológicos; PSA</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Conceito de desenvolvimento sustentável</h3>
          <p>
            Definido pelo Relatório Brundtland (1987) como "desenvolvimento que
            satisfaz as necessidades do presente sem comprometer a capacidade
            das gerações futuras de satisfazerem suas próprias necessidades",
            o <strong>desenvolvimento sustentável</strong> apoia-se em três
            pilares integrados: <strong>ambiental</strong> (conservação dos
            ecossistemas), <strong>social</strong> (equidade e justiça) e{" "}
            <strong>econômico</strong> (geração de riqueza sem exaurir
            recursos). Ele é o eixo orientador dos{" "}
            <strong>Objetivos de Desenvolvimento Sustentável (ODS)</strong> da
            ONU, adotados em 2015 na Agenda 2030.
          </p>
        </div>
      </section>

      {/* ─── EXERCÍCIOS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Etapas da eutrofização"
          statement={
            <p>
              A eutrofização de lagos e rios resulta em morte em massa de
              peixes. Qual é a sequência correta dos eventos que levam a esse
              desfecho?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Queda de O₂ → proliferação de algas → bloqueio de luz → morte de peixes",
            },
            {
              letter: "b",
              text: "Entrada excessiva de nutrientes → bloom de algas → bloqueio de luz → morte de plantas submersas → decomposição bacteriana → queda de O₂ → morte de peixes",
              correct: true,
            },
            {
              letter: "c",
              text: "Diminuição de nutrientes → redução de algas → aumento de O₂ → morte de peixes",
            },
            {
              letter: "d",
              text: "Entrada de predadores → queda de algas → aumento de O₂ → morte de peixes",
            },
          ]}
          resolution={
            <p>
              O processo inicia com o excesso de fosfatos e nitratos (esgoto,
              fertilizantes), que dispara o bloom algal. O tapete de algas bloqueia
              a luz das plantas submersas; ao morrer, algas e plantas são decompostas
              por bactérias aeróbias que consomem o O₂ dissolvido. A anoxia
              resultante causa a morte de peixes e outros organismos aeróbios.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Magnificação trófica e o caso do DDT"
          statement={
            <p>
              Em lagos contaminados com DDT, análises mostraram as seguintes
              concentrações: água = 0,000003 ppm; fitoplâncton = 0,04 ppm;
              peixe pequeno = 0,5 ppm; peixe grande = 2 ppm; ave predadora =
              25 ppm. Essa progressão demonstra o fenômeno da:
            </p>
          }
          options={[
            { letter: "a", text: "Eutrofização, pois os nutrientes aumentam ao longo da cadeia" },
            {
              letter: "b",
              text: "Magnificação trófica, pois substâncias lipossolúveis persistentes acumulam-se e concentram-se em cada nível trófico",
              correct: true,
            },
            {
              letter: "c",
              text: "Biodegradação, pois o poluente se torna mais estável nos predadores",
            },
            {
              letter: "d",
              text: "Homeostase, pois o ecossistema regula a concentração do DDT",
            },
          ]}
          resolution={
            <p>
              O DDT é lipossolúvel e não biodegradável: acumula-se no tecido
              adiposo dos organismos (bioacumulação). Como cada nível trófico
              consome grande quantidade de presas para obter energia, absorve
              todo o DDT presente nelas — por isso a concentração{" "}
              <strong>aumenta progressivamente</strong> da água até o predador
              de topo, fenômeno denominado magnificação ou biomagnificação
              trófica.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Espécies invasoras e liberação biótica"
          statement={
            <p>
              A rã-touro-americana (<em>Lithobates catesbeianus</em>),
              introduzida em criatórios no Brasil, escapou e se tornou invasora.
              Além da predação direta de anfíbios nativos, ela contribui para
              a extinção de outras espécies de anfíbios ao:
            </p>
          }
          options={[
            { letter: "a", text: "Aumentar a disponibilidade de alimento para predadores nativos" },
            { letter: "b", text: "Introduzir o fungo Batrachochytrium dendrobatidis, causador da quitridiomicose, para o qual ela é portadora assintomática", correct: true },
            { letter: "c", text: "Eliminar espécies vegetais aquáticas das quais os anfíbios dependem" },
            { letter: "d", text: "Alterar o pH dos corpos d'água, favorecendo algas tóxicas" },
          ]}
          resolution={
            <p>
              A rã-touro é portadora assintomática do fungo{" "}
              <em>Batrachochytrium dendrobatidis</em> (Bd), agente da
              quitridiomicose. Ao ser introduzida em novos habitats, ela
              dissemina o Bd para anfíbios nativos, que não possuem resistência,
              causando colapso populacional e extinção — fenômeno que contribuiu
              com a maior perda de diversidade de vertebrados registrada na
              história recente.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Poluição atmosférica e saúde pública (ENEM)"
          statement={
            <p>
              Durante um inverno seco em São Paulo, boletins de saúde alertam
              para aumento de internações por problemas respiratórios.
              Meteorologistas registram uma camada de ar quente aprisionando
              poluentes sobre a região metropolitana. O fenômeno meteorológico
              responsável e o principal poluente causador de problemas
              respiratórios nessa situação são, respectivamente:
            </p>
          }
          options={[
            { letter: "a", text: "Efeito estufa e CO₂" },
            {
              letter: "b",
              text: "Inversão térmica e material particulado fino (MP₂,₅)",
              correct: true,
            },
            { letter: "c", text: "Chuva ácida e SO₂" },
            { letter: "d", text: "Buraco no ozônio e radiação UV" },
          ]}
          resolution={
            <p>
              A <strong>inversão térmica</strong> ocorre quando uma camada de
              ar quente se posiciona sobre o ar frio junto ao solo, impedindo
              a dispersão de poluentes. O{" "}
              <strong>material particulado fino (MP₂,₅)</strong> — partículas
              menores que 2,5 micrômetros emitidas por veículos, indústrias e
              queimadas — penetra profundamente nos pulmões e na corrente
              sanguínea, sendo o principal responsável pelo aumento de
              internações por doenças respiratórias e cardiovasculares em dias
              de inversão.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Pegada ecológica e overshoot (ENEM)"
          statement={
            <p>
              Um relatório internacional afirma: "A humanidade usou, em agosto,
              todos os recursos naturais que a Terra é capaz de regenerar em um
              ano." Esse dado refere-se ao conceito de:
            </p>
          }
          options={[
            { letter: "a", text: "Capacidade de suporte, que indica o número máximo de indivíduos que um ecossistema pode sustentar indefinidamente" },
            { letter: "b", text: "Déficit ecológico (overshoot), medido pela pegada ecológica comparada à biocapacidade do planeta", correct: true },
            { letter: "c", text: "Eutrofização global, causada pelo excesso de nutrientes nos oceanos" },
            { letter: "d", text: "Magnificação trófica, que concentra poluentes até exaurir os recursos" },
          ]}
          resolution={
            <p>
              O <strong>Earth Overshoot Day</strong> (Dia da Sobrecarga da
              Terra) marca a data em que a <strong>pegada ecológica</strong>{" "}
              anual da humanidade supera a <strong>biocapacidade</strong> do
              planeta — ou seja, consumimos mais recursos do que a Terra pode
              regenerar no ano. Esse fenômeno é chamado de{" "}
              <strong>overshoot</strong> ou déficit ecológico e implica que
              vivemos "no crédito" dos ecossistemas, esgotando estoques de
              florestas, pesca e solos e acumulando CO₂ na atmosfera.
            </p>
          }
        />
      </section>
    </article>
  );
}
