"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap07Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 07</span>
          <h1>Vulcanismo, terremotos e tsunamis</h1>
          <p>
            Vulcões, terremotos e tsunamis são manifestações dramáticas da energia interna da
            Terra, diretamente ligadas à dinâmica das placas tectônicas. Embora sejam fenômenos
            naturais que ocorrem há bilhões de anos, eles representam sérias ameaças para as
            populações humanas que habitam regiões de risco. Compreender como se originam, onde
            ocorrem e como se comportam é essencial tanto para a ciência quanto para o
            planejamento urbano, a gestão de desastres e a formulação de políticas públicas
            voltadas à redução de riscos e à proteção da vida humana.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vulcanismo</span>
        <h2>1. O que é vulcanismo?</h2>
        <p>
          O vulcanismo é o conjunto de processos pelo qual o <strong>magma</strong> — rocha
          fundida gerada no manto ou na crosta inferior — sobe à superfície terrestre. Quando o
          magma atinge a superfície, é chamado de <strong>lava</strong>. O vulcanismo inclui
          não só as erupções em si, mas também a emissão de gases vulcânicos, cinzas, lapilli
          (fragmentos sólidos) e outros materiais piroclásticos.
        </p>
        <p>
          O magma se forma principalmente em três contextos: nas dorsais meso-oceânicas (onde as
          placas divergem e a pressão cai), nas zonas de subducção (onde a placa oceânica libera
          água ao mergulhar, reduzindo o ponto de fusão do manto) e sobre pontos quentes
          (hotspots).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Tipos de erupção vulcânica e características</caption>
            <thead>
              <tr>
                <th>Tipo de erupção</th>
                <th>Viscosidade do magma</th>
                <th>Explosividade</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Efusiva (hawaiiana)</td>
                <td>Baixa (basáltica)</td>
                <td>Muito baixa</td>
                <td>Kilauea (Havaí)</td>
              </tr>
              <tr>
                <td>Estromboliana</td>
                <td>Média</td>
                <td>Moderada</td>
                <td>Stromboli (Itália)</td>
              </tr>
              <tr>
                <td>Vulcaniana</td>
                <td>Alta</td>
                <td>Alta</td>
                <td>Vulcano (Itália)</td>
              </tr>
              <tr>
                <td>Pliniana</td>
                <td>Muito alta (riolítica)</td>
                <td>Catastrófica</td>
                <td>Vesúvio 79 d.C. (Itália)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura do vulcão</span>
        <h2>2. Estrutura de um vulcão</h2>
        <p>
          Um vulcão típico é formado por uma câmara magmática subterrânea conectada à superfície
          por uma chaminé vulcânica (<em>conduto</em>). No topo, a cratera é a abertura por onde
          ocorre a erupção. Em vulcões compostos (estratovulcões), como o Fuji (Japão) e o
          Cotopaxi (Equador), camadas alternadas de lava e piroclastos formam um cone simétrico.
          Já os vulcões escudo, como os do Havaí, têm formato mais achatado por conta do magma
          basáltico muito fluido.
        </p>
        <p>
          Além do cone principal, um vulcão pode apresentar <strong>cones parasitas</strong>
          (crateras laterais), <strong>caldeiras</strong> (depressões circulares formadas pelo
          colapso do topo após grande erupção) e <strong>fumarolas</strong> (emissões de gás
          entre as erupções).
        </p>
      </section>

      {/* SVG — Estrutura de um vulcão */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg">
          {/* Fundo */}
          <rect x="0" y="0" width="600" height="380" fill="#f0f4f8" />
          {/* Solo */}
          <rect x="0" y="240" width="600" height="140" fill="#8d6e47" />
          {/* Câmara magmática */}
          <ellipse cx="300" cy="330" rx="120" ry="45" fill="#e74c3c" />
          <text x="300" y="335" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Câmara magmática</text>
          {/* Conduto */}
          <rect x="280" y="160" width="40" height="170" fill="#c0392b" />
          <text x="340" y="260" fontSize="11" fill="#333">Conduto</text>
          {/* Cone */}
          <polygon points="300,40 160,240 440,240" fill="#7f8c8d" />
          <polygon points="300,40 200,240 400,240" fill="#95a5a6" />
          {/* Cratera */}
          <ellipse cx="300" cy="50" rx="40" ry="15" fill="#e74c3c" />
          <text x="360" y="48" fontSize="11" fill="#333">Cratera</text>
          {/* Lava saindo */}
          <path d="M280 50 Q240 20 200 60" stroke="#e74c3c" strokeWidth="6" fill="none" />
          <path d="M320 50 Q360 20 390 70" stroke="#e67e22" strokeWidth="5" fill="none" />
          {/* Fumaça / cinzas */}
          <ellipse cx="300" cy="20" rx="30" ry="12" fill="#bdc3c7" fillOpacity="0.7" />
          <ellipse cx="280" cy="5" rx="20" ry="8" fill="#bdc3c7" fillOpacity="0.5" />
          <text x="245" y="16" fontSize="11" fill="#555">Cinzas e gases</text>
          {/* Camadas */}
          <text x="430" y="190" fontSize="11" fill="#ecf0f1">Estratos de</text>
          <text x="430" y="205" fontSize="11" fill="#ecf0f1">lava e cinzas</text>
          {/* Labels */}
          <text x="10" y="270" fontSize="11" fill="white">Rocha encaixante</text>
        </svg>
        <figcaption>Figura 1 — Estrutura interna de um estratovulcão (vulcão composto)</figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Distribuição dos vulcões</span>
        <h2>3. Distribuição geográfica dos vulcões</h2>
        <p>
          Cerca de <strong>75% dos vulcões ativos</strong> do planeta estão localizados no{" "}
          <strong>Anel de Fogo do Pacífico</strong> — um arco que percorre as costas oeste das
          Américas, passa pelo Alasca e Aleutas, desce pelo Japão, Filipinas e Indonésia até a
          Nova Zelândia. Essa concentração ocorre porque todo esse arco é dominado por zonas de
          subducção ativas.
        </p>
        <p>
          Outro cinturão vulcânico importante é o que atravessa o Mediterrâneo, de Portugal ao
          Oriente Médio, resultante da convergência entre a Placa Africana e a Placa Euroasiática.
          Vulcões intraplacas, associados a pontos quentes, incluem o Havaí (Pacífico), Islândia
          (Atlântico Norte) e a Ilha da Reunião (Oceano Índico).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Países com maior número de vulcões ativos</caption>
            <thead>
              <tr>
                <th>País</th>
                <th>Vulcões ativos (aprox.)</th>
                <th>Contexto tectônico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Indonésia</td>
                <td>139</td>
                <td>Múltiplas zonas de subducção</td>
              </tr>
              <tr>
                <td>Japão</td>
                <td>111</td>
                <td>Subducção Pacífica e Filipina</td>
              </tr>
              <tr>
                <td>EUA (Alasca + Havaí)</td>
                <td>65</td>
                <td>Subducção aleutiana + hotspot</td>
              </tr>
              <tr>
                <td>Rússia</td>
                <td>56</td>
                <td>Subducção Kamchatka</td>
              </tr>
              <tr>
                <td>Chile</td>
                <td>36</td>
                <td>Subducção da Placa de Nazca</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Impactos do vulcanismo</span>
        <h2>4. Impactos do vulcanismo para a humanidade</h2>
        <p>
          Embora destruidores, os vulcões também têm aspectos benéficos. O cinzeiro vulcânico,
          rico em minerais, torna os solos muito férteis — é por isso que regiões próximas a
          vulcões são densamente habitadas e utilizadas para agricultura (Java, Indonésia, por
          exemplo). Além disso, a energia geotérmica derivada do calor vulcânico é usada para
          geração elétrica (Islândia gera quase 30% de sua eletricidade assim).
        </p>
        <p>
          Por outro lado, grandes erupções causam destruição imediata por lavas, avalanches de
          cinzas (<em>lahares</em>), quedas de piroclastos e tsunamis. A longo prazo, a emissão
          de dióxido de enxofre na estratosfera pode causar <strong>inverno vulcânico</strong>,
          resfriando o clima global por meses ou anos. A erupção do Tambora (Indonésia, 1815)
          causou o "Ano sem verão" em 1816, levando a colheitas fracas e fome na Europa e América
          do Norte.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Terremotos</span>
        <h2>5. Terremotos: causas e características</h2>
        <p>
          Um <strong>terremoto</strong> (ou sismo) é a liberação súbita de energia acumulada na
          crosta terrestre, geralmente quando rochas se fraturem ou deslizam ao longo de uma
          <strong> falha geológica</strong>. O ponto no interior da Terra onde o terremoto se
          origina é chamado de <strong>foco</strong> (ou hipocentro), e o ponto na superfície
          diretamente acima é o <strong>epicentro</strong>.
        </p>
        <p>
          A energia liberada propaga-se em ondas sísmicas de dois tipos: as <strong>ondas P</strong>
          (primárias, compressivas, que atravessam sólidos e líquidos) e as <strong>ondas S</strong>
          (secundárias, de cisalhamento, que só atravessam sólidos). Na superfície, formam-se as
          ondas L (Love) e Rayleigh, que causam os maiores danos às edificações.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Escalas de medição de terremotos</caption>
            <thead>
              <tr>
                <th>Escala</th>
                <th>O que mede</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Richter (ML)</td>
                <td>Magnitude (amplitude das ondas sísmicas)</td>
                <td>Logarítmica, sem limite teórico</td>
              </tr>
              <tr>
                <td>Momento sísmico (Mw)</td>
                <td>Energia total liberada</td>
                <td>Atual padrão científico</td>
              </tr>
              <tr>
                <td>Mercalli modificada (IMM)</td>
                <td>Intensidade (efeitos sentidos)</td>
                <td>Subjetiva, I a XII</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Maiores terremotos</span>
        <h2>6. Os maiores terremotos registrados</h2>
        <p>
          A escala de magnitude é logarítmica: um sismo de magnitude 8 libera cerca de 32 vezes
          mais energia que um de magnitude 7. O maior terremoto já registrado instrumentalmente
          foi o <strong>Terremoto de Valdivia</strong> (Chile, 1960), com magnitude 9,5 Mw.
          Terremotos próximos de grandes centros urbanos são especialmente devastadores, como o
          de Port-au-Prince (Haiti, 2010), que causou mais de 200.000 mortes, apesar de sua
          magnitude "moderada" de 7,0 — reflexo das construções precárias locais.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Grandes terremotos históricos e seus impactos</caption>
            <thead>
              <tr>
                <th>Local e ano</th>
                <th>Magnitude</th>
                <th>Mortes estimadas</th>
                <th>Efeitos secundários</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Valdivia, Chile (1960)</td>
                <td>9,5 Mw</td>
                <td>≈ 5.700</td>
                <td>Tsunami no Pacífico</td>
              </tr>
              <tr>
                <td>Oceano Índico (2004)</td>
                <td>9,1 Mw</td>
                <td>≈ 230.000</td>
                <td>Tsunami catastrófico</td>
              </tr>
              <tr>
                <td>Tohoku, Japão (2011)</td>
                <td>9,0 Mw</td>
                <td>≈ 20.000</td>
                <td>Tsunami + acidente nuclear Fukushima</td>
              </tr>
              <tr>
                <td>Port-au-Prince, Haiti (2010)</td>
                <td>7,0 Mw</td>
                <td>≈ 200.000</td>
                <td>Colapso de estruturas precárias</td>
              </tr>
              <tr>
                <td>Kanto, Japão (1923)</td>
                <td>7,9 Mw</td>
                <td>≈ 142.000</td>
                <td>Incêndios generalizados</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG — Propagação das ondas sísmicas */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="320" fill="#eaf4fb" />
          {/* Solo */}
          <rect x="0" y="180" width="600" height="140" fill="#8d6e47" />
          {/* Foco */}
          <circle cx="300" cy="270" r="15" fill="#e74c3c" />
          <text x="320" y="275" fontSize="12" fill="white" fontWeight="bold">Foco</text>
          {/* Epicentro */}
          <circle cx="300" cy="180" r="10" fill="#e74c3c" />
          <text x="315" y="178" fontSize="12" fill="#333">Epicentro</text>
          {/* Linha foco-epicentro */}
          <line x1="300" y1="255" x2="300" y2="190" stroke="#e74c3c" strokeWidth="2" strokeDasharray="5,3" />
          {/* Ondas P */}
          <ellipse cx="300" cy="270" rx="80" ry="35" fill="none" stroke="#2980b9" strokeWidth="2" />
          <ellipse cx="300" cy="270" rx="140" ry="60" fill="none" stroke="#2980b9" strokeWidth="2" strokeOpacity="0.7" />
          <ellipse cx="300" cy="270" rx="195" ry="85" fill="none" stroke="#2980b9" strokeWidth="2" strokeOpacity="0.4" />
          <text x="420" y="240" fontSize="11" fill="#2980b9">Ondas P e S</text>
          <text x="420" y="255" fontSize="11" fill="#2980b9">(internas)</text>
          {/* Ondas superficiais */}
          <path d="M120 180 Q180 160 240 180 Q300 200 360 180 Q420 160 480 180" stroke="#27ae60" strokeWidth="2" fill="none" />
          <text x="490" y="175" fontSize="11" fill="#27ae60">Ondas</text>
          <text x="490" y="189" fontSize="11" fill="#27ae60">L e R</text>
          {/* Sismógrafo */}
          <rect x="50" y="100" width="100" height="60" fill="white" stroke="#333" strokeWidth="1.5" rx="5" />
          <path d="M55 130 L70 125 L80 140 L95 115 L110 135 L140 128" stroke="#e74c3c" strokeWidth="1.5" fill="none" />
          <text x="100" y="170" textAnchor="middle" fontSize="11" fill="#333">Sismógrafo</text>
        </svg>
        <figcaption>Figura 2 — Propagação das ondas sísmicas a partir do foco de um terremoto</figcaption>
      </figure>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tsunamis</span>
        <h2>7. Tsunamis: origem e comportamento</h2>
        <p>
          O <strong>tsunami</strong> (palavra japonesa que significa "onda de porto") é uma série
          de ondas oceânicas de grande comprimento de onda gerada por perturbações abruptas no
          fundo do oceano. Terremotos submarinos são a causa mais comum, mas tsunamis também podem
          ser gerados por erupções vulcânicas submarinas, deslizamentos subaquáticos e, raramente,
          por impactos de meteoritos.
        </p>
        <p>
          No oceano aberto, as ondas de tsunami têm amplitude pequena (menos de 1 metro) mas
          comprimento de onda enorme (centenas de quilômetros) e velocidade altíssima (até
          800 km/h, próxima à de um avião). À medida que se aproximam da costa e o fundo do mar
          fica mais raso, as ondas perdem velocidade mas ganham altura dramaticamente — um
          fenômeno chamado <strong>shoaling</strong>. As ondas podem atingir 30 metros ou mais
          ao chegar ao litoral.
        </p>
        <p>
          Um sinal clássico de tsunami iminente é o <strong>recuo anormal do mar</strong> — a
          maré "suga" a água da praia por alguns minutos antes da chegada das ondas. Populações
          treinadas reconhecem esse sinal e correm para áreas elevadas.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O tsunami de 2004</span>
        <h2>8. O tsunami do Oceano Índico (2004)</h2>
        <p>
          Em 26 de dezembro de 2004, um terremoto de magnitude 9,1 ao largo da costa norte da
          ilha de Sumatra (Indonésia) gerou o mais mortal tsunami da história moderna. As ondas
          percorreram todo o Oceano Índico, devastando as costas da Indonésia, Sri Lanka, Índia,
          Tailândia e países africanos como Somália e Tanzânia. Cerca de 230.000 pessoas morreram
          em 14 países.
        </p>
        <p>
          O desastre revelou a ausência de um sistema de alerta de tsunamis no Oceano Índico
          (apenas o Pacífico tinha um desde 1949). Em resposta, foi criado em 2005 o{" "}
          <strong>Sistema de Alerta e Mitigação de Tsunamis do Oceano Índico (IOTWS)</strong>,
          coordenado pela UNESCO, com bóias e sismógrafos conectados a centrais de alerta.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gestão de riscos</span>
        <h2>9. Redução de riscos e sistemas de alerta</h2>
        <p>
          A gestão de riscos sísmicos e vulcânicos envolve três dimensões: <strong>prevenção</strong>
          (normas construtivas antissísmicas, zoneamento de risco), <strong>preparação</strong>
          (sistemas de alerta precoce, planos de evacuação, treinamento da população) e{" "}
          <strong>resposta</strong> (socorro às vítimas, reconstrução).
        </p>
        <p>
          O Japão é referência mundial em preparação: todas as crianças fazem simulacros sísmicos
          regularmente, os edifícios modernos são construídos para absorver movimentos sísmicos, e
          o país tem um dos sistemas de alerta mais sofisticados do mundo. Isso explica por que,
          apesar de localizado em uma das zonas sísmicas mais ativas do planeta, o número de
          mortes por terremotos no Japão tende a ser baixo em relação à intensidade dos sismos
          (exceto quando tsunamis chegam antes do aviso, como em 2011).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Medidas de prevenção e mitigação de desastres sísmicos</caption>
            <thead>
              <tr>
                <th>Medida</th>
                <th>Descrição</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Normas antissísmicas</td>
                <td>Construções projetadas para absorver vibrações</td>
                <td>Japão, Chile, EUA (Califórnia)</td>
              </tr>
              <tr>
                <td>Sistema de alerta precoce</td>
                <td>Sismógrafos + bóias oceânicas + transmissão imediata</td>
                <td>PTWC (Pacífico), IOTWS (Índico)</td>
              </tr>
              <tr>
                <td>Mapeamento de risco</td>
                <td>Identificação de zonas vulneráveis</td>
                <td>Zoneamento sismotectônico</td>
              </tr>
              <tr>
                <td>Educação da população</td>
                <td>Treinamentos, simulacros, planos de evacuação</td>
                <td>Japão: "Drop, Cover, Hold on"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Brasil e sismos</span>
        <h2>10. Brasil: riscos sísmicos e vulcânicos</h2>
        <p>
          O Brasil é considerado um país de <strong>baixa atividade sísmica</strong>, pois está
          situado no interior estável da Placa Sul-Americana, longe dos limites tectônicos ativos.
          Não existem vulcões ativos em território brasileiro. Ocorrem, porém, terremotos de
          magnitude geralmente inferior a 5,0, mais frequentes nas regiões do Nordeste (especial-
          mente Rio Grande do Norte e Ceará), Minas Gerais e no entorno de reservatórios de
          hidrelétricas (sismos induzidos pelo enchimento dos reservatórios).
        </p>
        <p>
          O terremoto mais forte registrado no Brasil ocorreu em João Câmara (RN) em 1986,
          com magnitude 5,1. Apesar de não causar vítimas, danificou cerca de 10.000 construções
          de adobe, evidenciando a vulnerabilidade das habitações populares mesmo a sismos de
          baixa magnitude.
        </p>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section" id="exercicios">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Exercício 1"
          statement={
            <p>
              O "Anel de Fogo do Pacífico" concentra a maior parte dos vulcões ativos e terremotos
              do planeta. O principal fator que explica essa concentração é:
            </p>
          }
          options={[
            { letter: "a", text: "A presença de numerosos pontos quentes (hotspots) sob o Oceano Pacífico" },
            { letter: "b", text: "A existência de dorsais meso-oceânicas convergentes no Pacífico" },
            { letter: "c", text: "A concentração de limites convergentes (zonas de subducção) ao redor do Oceano Pacífico", correct: true },
            { letter: "d", text: "A maior profundidade do Oceano Pacífico em relação aos outros oceanos" },
            { letter: "e", text: "A ausência de crosta continental na bacia do Pacífico" },
          ]}
          resolution={
            <p>
              O Anel de Fogo do Pacífico é delimitado por uma série de zonas de subducção ativas
              onde placas oceânicas mergulham sob placas continentais ou sob outras placas
              oceânicas. Esse processo gera intenso magmatismo (vulcões) e acumula tensões que se
              liberam em terremotos. Os pontos quentes são fenômenos intraplacas (como o Havaí) e
              não explicam o padrão em anel. As dorsais são limites divergentes, não convergentes.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              Numa erupção vulcânica, a diferença entre magma e lava é que:
            </p>
          }
          options={[
            { letter: "a", text: "O magma é mais quente que a lava" },
            { letter: "b", text: "Magma é a rocha fundida no interior da Terra; lava é o mesmo material após atingir a superfície", correct: true },
            { letter: "c", text: "A lava contém gases dissolvidos; o magma não" },
            { letter: "d", text: "O magma é sempre basáltico; a lava pode ser riolítica" },
            { letter: "e", text: "Lava é o material sólido ejetado; magma é o material líquido" },
          ]}
          resolution={
            <p>
              Por definição, magma é a rocha fundida que existe no interior da Terra (câmara
              magmática). Quando esse material sobe e é extrudado na superfície através de uma
              erupção vulcânica, passa a ser chamado de lava. O magma contém gases dissolvidos que
              se expandem e escapam durante a subida, podendo tornar as erupções explosivas. Tanto
              o magma quanto a lava podem ter composições variadas (basáltica, andesítica,
              riolítica).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              O tsunami gerado pelo terremoto do Oceano Índico em 2004 causou cerca de 230.000
              mortes em 14 países. Uma das principais razões para tamanha catástrofe humana foi:
            </p>
          }
          options={[
            { letter: "a", text: "A magnitude excepcionalmente alta do terremoto (9,1), raramente registrada" },
            { letter: "b", text: "A falta de um sistema de alerta de tsunamis no Oceano Índico e o baixo preparo das populações costeiras", correct: true },
            { letter: "c", text: "A velocidade das ondas de tsunami, que viajam a mais de 2.000 km/h" },
            { letter: "d", text: "O fato de o tsunami ter ocorrido em alto mar, onde é mais perigoso" },
            { letter: "e", text: "A inexistência de faixas litorâneas elevadas nos países atingidos" },
          ]}
          resolution={
            <p>
              Embora o terremoto de 2004 tenha sido muito forte (9,1 Mw), o fator mais determinante
              para o enorme número de vítimas foi a ausência de um sistema de alerta de tsunamis no
              Oceano Índico. No Pacífico, esse sistema existe desde 1949; no Índico, não havia
              nenhum. As populações costeiras não foram alertadas e não tinham treinamento para
              reconhecer os sinais naturais de tsunami (como o recuo do mar). Tsunamis viajam a
              cerca de 800 km/h no oceano aberto, não a 2.000 km/h.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              (ENEM adaptado) Em 2010, um terremoto de magnitude 7,0 matou mais de 200.000
              pessoas no Haiti, enquanto um terremoto de magnitude 8,8 no Chile, no mesmo ano,
              matou cerca de 500 pessoas. Qual conjunto de fatores explica melhor essa diferença?
            </p>
          }
          options={[
            { letter: "a", text: "O terremoto haitiano foi muito mais energético e próximo ao epicentro" },
            { letter: "b", text: "O Chile tem menor densidade demográfica que o Haiti" },
            { letter: "c", text: "A qualidade das construções, o planejamento urbano e os sistemas de resposta a emergências são muito superiores no Chile", correct: true },
            { letter: "d", text: "O terremoto chileno foi submarino, liberando energia no oceano" },
            { letter: "e", text: "O Haiti está localizado sobre o Anel de Fogo, tornando suas construções mais resistentes por adaptação histórica" },
          ]}
          resolution={
            <p>
              O terremoto chileno liberou aproximadamente 500 vezes mais energia que o haitiano
              (escala logarítmica: diferença de 1,8 na magnitude). Mesmo assim, causou muito menos
              mortes. A razão é a enorme diferença no nível de desenvolvimento e preparação: o
              Chile tem normas construtivas antissísmicas rigorosas, sistema de alerta eficiente e
              população treinada para emergências. O Haiti, um dos países mais pobres do mundo, tem
              construções precárias que colapsaram em grande número. Isso demonstra que a magnitude
              de um desastre depende tanto da intensidade do evento natural quanto da vulnerabilidade
              social das populações afetadas.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              A erupção do vulcão Tambora (Indonésia, 1815) resultou no "Ano sem verão" em 1816,
              com queda de temperaturas globais, colheitas destruídas e fome em diversas regiões
              do mundo. O mecanismo climático responsável por esse fenômeno foi:
            </p>
          }
          options={[
            { letter: "a", text: "O aumento do dióxido de carbono atmosférico proveniente da erupção, intensificando o efeito estufa" },
            { letter: "b", text: "A emissão de dióxido de enxofre na estratosfera, que formou aerossóis de sulfato refletindo a radiação solar e resfriando o planeta", correct: true },
            { letter: "c", text: "A cobertura de cinzas sobre os oceanos, reduzindo a evaporação e alterando o ciclo hidrológico global" },
            { letter: "d", text: "O bloqueio das correntes oceânicas profundas pela lava vulcânica que atingiu o oceano" },
            { letter: "e", text: "A redução da atividade solar provocada pelas cinzas que alcançaram a exosfera" },
          ]}
          resolution={
            <p>
              Grandes erupções vulcânicas injetam enormes quantidades de dióxido de enxofre (SO₂)
              diretamente na estratosfera. Lá, o SO₂ se combina com vapor de água e forma aerossóis
              de ácido sulfúrico (H₂SO₄) que permanecem em suspensão por um a três anos, refletindo
              a radiação solar antes que ela atinja a superfície. Esse efeito reduz a temperatura
              global — no caso do Tambora, em cerca de 0,5°C a 1°C — destruindo colheitas e
              causando fome. O CO₂ vulcânico é insuficiente para aquecer significativamente o
              clima no curto prazo, e as cinzas pesadas caem rapidamente, sem atingir a exosfera.
            </p>
          }
        />
      </section>
    </article>
  );
}
