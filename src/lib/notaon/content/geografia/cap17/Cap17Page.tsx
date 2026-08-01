"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap17Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 17</span>
          <h1>Biomas Brasileiros</h1>
          <p>
            O Brasil abriga a maior biodiversidade do planeta, distribuída em seis biomas continentais
            que cobrem todo o território nacional. Cada bioma representa um conjunto de ecossistemas
            com características climáticas, fisionômicas e biológicas próprias. Do imenso mosaico
            florestal amazônico às savanas do Cerrado, das caatingas semiáridas nordestinas às
            planícies alagadas do Pantanal, dos campos gaúchos do Pampa aos fragmentos da Mata
            Atlântica, o Brasil é um patrimônio natural de dimensão global — e também uma das nações
            com maior pressão antrópica sobre seus ecossistemas.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Panorama Geral</span>
        <h2>1. O que é um Bioma?</h2>
        <p>
          Um <strong>bioma</strong> é uma região geográfica caracterizada por um conjunto de comunidades
          vegetais e animais adaptadas a condições climáticas específicas, especialmente temperatura e
          precipitação. No Brasil, o Instituto Brasileiro de Geografia e Estatística (IBGE) reconhece
          oficialmente <strong>seis biomas continentais</strong>: Amazônia, Cerrado, Mata Atlântica,
          Caatinga, Pantanal e Pampa. Há também dois biomas costeiros/marinhos (Zona Costeira e
          Marinha), mas o foco principal do ENEM são os seis terrestres.
        </p>
        <p>
          É fundamental distinguir <strong>bioma</strong> de <strong>ecossistema</strong>: o bioma é uma
          unidade regional ampla, enquanto o ecossistema é a unidade funcional que inclui os seres vivos
          e o ambiente abiótico em interação. Dentro de um mesmo bioma podem existir vários ecossistemas
          (como os campos rupestres dentro do Cerrado, ou os igapós dentro da Amazônia).
        </p>

        <div className="lesson-highlight">
          <h3>Biodiversidade brasileira em números</h3>
          <p>
            O Brasil concentra cerca de <strong>20% de todas as espécies de flora e fauna do planeta</strong>.
            São mais de 45.000 espécies de plantas vasculares, 700+ espécies de mamíferos, 1.900+ espécies
            de aves, 800+ de répteis e 1.000+ de anfíbios. Grande parte dessa riqueza está ameaçada pelo
            desmatamento, pela fragmentação de habitats e pelas mudanças climáticas.
          </p>
        </div>

        {/* SVG 1: Comparativo de área original vs remanescente */}
        <div className="lesson-svg-wrap" style={{ overflowX: "auto" }}>
          <svg viewBox="0 0 700 340" width="100%" style={{ maxWidth: 700, display: "block", margin: "0 auto" }}>
            <rect width="700" height="340" fill="#f8fafc" rx="12" />
            <text x="350" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
              Área Original vs. Remanescente dos Biomas Brasileiros (%)
            </text>
            {/* Legenda */}
            <rect x="30" y="44" width="16" height="14" fill="#2d6a4f" rx="2" />
            <text x="52" y="56" fontSize="11" fill="#334155">Área original</text>
            <rect x="140" y="44" width="16" height="14" fill="#95d5b2" rx="2" />
            <text x="162" y="56" fontSize="11" fill="#334155">Remanescente</text>

            {/* Amazônia */}
            <text x="60" y="90" fontSize="11" fill="#334155" textAnchor="middle">Amazônia</text>
            <rect x="10" y="96" width="280" height="18" fill="#2d6a4f" rx="3" />
            <rect x="10" y="96" width="240" height="18" fill="#95d5b2" rx="3" />
            <text x="295" y="109" fontSize="10" fill="#64748b">100% / 85%</text>

            {/* Cerrado */}
            <text x="60" y="128" fontSize="11" fill="#334155" textAnchor="middle">Cerrado</text>
            <rect x="10" y="134" width="280" height="18" fill="#2d6a4f" rx="3" />
            <rect x="10" y="134" width="112" height="18" fill="#95d5b2" rx="3" />
            <text x="295" y="147" fontSize="10" fill="#64748b">100% / 40%</text>

            {/* Mata Atlântica */}
            <text x="60" y="166" fontSize="11" fill="#334155" textAnchor="middle">Mata Atlântica</text>
            <rect x="10" y="172" width="280" height="18" fill="#2d6a4f" rx="3" />
            <rect x="10" y="172" width="34" height="18" fill="#95d5b2" rx="3" />
            <text x="295" y="185" fontSize="10" fill="#64748b">100% / 12%</text>

            {/* Caatinga */}
            <text x="60" y="204" fontSize="11" fill="#334155" textAnchor="middle">Caatinga</text>
            <rect x="10" y="210" width="280" height="18" fill="#2d6a4f" rx="3" />
            <rect x="10" y="210" width="140" height="18" fill="#95d5b2" rx="3" />
            <text x="295" y="223" fontSize="10" fill="#64748b">100% / 50%</text>

            {/* Pantanal */}
            <text x="60" y="242" fontSize="11" fill="#334155" textAnchor="middle">Pantanal</text>
            <rect x="10" y="248" width="280" height="18" fill="#2d6a4f" rx="3" />
            <rect x="10" y="248" width="196" height="18" fill="#95d5b2" rx="3" />
            <text x="295" y="261" fontSize="10" fill="#64748b">100% / 70%</text>

            {/* Pampa */}
            <text x="60" y="280" fontSize="11" fill="#334155" textAnchor="middle">Pampa</text>
            <rect x="10" y="286" width="280" height="18" fill="#2d6a4f" rx="3" />
            <rect x="10" y="286" width="112" height="18" fill="#95d5b2" rx="3" />
            <text x="295" y="299" fontSize="10" fill="#64748b">100% / 40%</text>

            {/* Escala */}
            <text x="10" y="330" fontSize="9" fill="#94a3b8">0%</text>
            <text x="145" y="330" fontSize="9" fill="#94a3b8">50%</text>
            <text x="280" y="330" fontSize="9" fill="#94a3b8">100%</text>
          </svg>
        </div>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Bioma</th>
              <th>Área (km²)</th>
              <th>% do Brasil</th>
              <th>Remanescente (%)</th>
              <th>Clima predominante</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Amazônia</td><td>4.196.943</td><td>49,3%</td><td>~85%</td><td>Equatorial úmido</td></tr>
            <tr><td>Cerrado</td><td>2.036.448</td><td>23,9%</td><td>~40%</td><td>Tropical sazonal</td></tr>
            <tr><td>Mata Atlântica</td><td>1.110.182</td><td>13,0%</td><td>~12%</td><td>Tropical/Subtropical</td></tr>
            <tr><td>Caatinga</td><td>844.453</td><td>9,9%</td><td>~50%</td><td>Semiárido</td></tr>
            <tr><td>Pantanal</td><td>150.355</td><td>1,8%</td><td>~70%</td><td>Tropical continental</td></tr>
            <tr><td>Pampa</td><td>176.496</td><td>2,1%</td><td>~40%</td><td>Subtropical úmido</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Bioma 1</span>
        <h2>2. Amazônia</h2>
        <p>
          A <strong>Amazônia</strong> é o maior bioma brasileiro e a maior floresta tropical do mundo,
          cobrindo cerca de 49% do território nacional. A floresta amazônica exerce funções climáticas
          globais: regula o ciclo da água (os "rios voadores" transportam umidade para o Centro-Sul do
          Brasil), armazena bilhões de toneladas de carbono e abriga pelo menos 10% de toda a
          biodiversidade do planeta.
        </p>
        <p>
          É importante distinguir dois conceitos frequentemente confundidos:
        </p>
        <ul>
          <li>
            <strong>Bioma Amazônia:</strong> área de ocorrência natural da floresta amazônica, com cerca
            de 4,2 milhões de km².
          </li>
          <li>
            <strong>Amazônia Legal:</strong> conceito político-administrativo criado em 1953 (Lei 1.806),
            que abrange 9 estados (AM, PA, MT, RO, AC, RR, AP, TO e parte do MA), totalizando ~5 milhões
            de km². Inclui áreas de Cerrado e outros biomas presentes nesses estados.
          </li>
        </ul>
        <p>
          O <strong>desmatamento</strong> é monitorado pelo PRODES (INPE) desde 1988. O pico histórico
          foi em 1995 (~29.000 km²/ano). Em 2004, chegou a 27.772 km²/ano. Com o Plano de Ação para
          Prevenção e Controle do Desmatamento na Amazônia Legal (PPCDAm), as taxas caíram
          drasticamente até 2012 (~4.500 km²). Entre 2019 e 2022, houve nova elevação (chegando a
          ~11.568 km² em 2022). Em 2023, a taxa caiu para ~11.568 km² (dado preliminar).
        </p>
        <div className="lesson-highlight">
          <h3>Fauna e flora amazônica</h3>
          <p>
            A Amazônia abriga a maior diversidade de espécies do planeta: ~40.000 espécies de plantas,
            1.300 espécies de aves, 3.000 espécies de peixes de água doce, 427 espécies de mamíferos,
            378 de répteis. Espécies-símbolo: onça-pintada (<em>Panthera onca</em>), boto-cor-de-rosa
            (<em>Inia geoffrensis</em>), ariranha (<em>Pteronura brasiliensis</em>), pirarucu
            (<em>Arapaima gigas</em>), vitória-régia (<em>Victoria amazonica</em>).
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Bioma 2</span>
        <h2>3. Cerrado</h2>
        <p>
          O <strong>Cerrado</strong> é a maior savana tropical do mundo e o segundo maior bioma
          brasileiro, ocupando o Planalto Central do Brasil. Conhecido como "berço das águas", o
          Cerrado é responsável pela recarga de 8 das 12 principais bacias hidrográficas brasileiras
          (Araguaia-Tocantins, São Francisco, Paraná, Paraguai, entre outras).
        </p>
        <p>
          A vegetação do Cerrado apresenta <strong>fitofisionomias variadas</strong>: campo limpo
          (herbáceo), campo sujo, campo cerrado, cerrado sensu stricto, cerradão (floresta),
          veredas (com buriti), matas de galeria e mata ciliar. As plantas adaptaram-se ao fogo e à
          seca com raízes profundas (até 15 metros), cascas grossas e folhas coriáceas.
        </p>
        <p>
          Com apenas ~40% de vegetação nativa remanescente, o Cerrado é considerado um dos 36
          <strong>hotspots de biodiversidade</strong> mundiais pela Conservation International —
          regiões com alto nível de endemismo e alto grau de ameaça. O avanço da soja e da pecuária
          (fronteira agrícola do MATOPIBA: Maranhão, Tocantins, Piauí e Bahia) representa a
          principal ameaça contemporânea.
        </p>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Bioma 3</span>
        <h2>4. Mata Atlântica</h2>
        <p>
          A <strong>Mata Atlântica</strong> é o bioma com maior grau de devastação no Brasil. Cobria
          originalmente cerca de 15% do território nacional e hoje tem apenas ~12% de remanescentes
          florestais acima de 100 hectares. Apesar da devastação, concentra altíssima biodiversidade —
          é considerada um dos biomas mais ricos e ameaçados do mundo, também listado como hotspot
          de biodiversidade.
        </p>
        <p>
          Estende-se ao longo de toda a costa brasileira, de norte a sul, e penetra para o interior
          em alguns estados. A Mata Atlântica abriga ~70% da população brasileira e quase todas as
          grandes metrópoles (São Paulo, Rio de Janeiro, Salvador, Fortaleza, Recife, Porto Alegre).
          Isso impõe enorme pressão sobre o bioma, mas também torna os remanescentes importantíssimos
          para serviços ecossistêmicos urbanos (abastecimento de água, regulação climática, controle
          de enchentes).
        </p>
        <p>
          A <strong>Lei da Mata Atlântica</strong> (Lei 11.428/2006) e seu decreto regulamentador
          estabelecem regras rigorosas para uso e supressão da vegetação nativa, com maior proteção
          para estágios avançados de regeneração. Espécies endêmicas incluem o mico-leão-dourado
          (<em>Leontopithecus rosalia</em>), o muriqui-do-norte (<em>Brachyteles hypoxanthus</em>) e
          centenas de orquídeas e bromélias.
        </p>

        <Exercise
          level="Básico"
          title="1. Biomas e remanescentes"
          statement={
            <p>
              Considerando a situação atual dos biomas brasileiros, qual deles apresenta o maior percentual
              de devastação em relação à sua área original, sendo considerado um dos biomas mais ameaçados
              do mundo?
            </p>
          }
          options={[
            { letter: "a", text: "Cerrado, com apenas 20% de vegetação nativa." },
            { letter: "b", text: "Caatinga, com apenas 10% de vegetação nativa." },
            { letter: "c", text: "Mata Atlântica, com apenas cerca de 12% de remanescentes florestais.", correct: true },
            { letter: "d", text: "Pampa, com apenas 5% de vegetação nativa." },
            { letter: "e", text: "Pantanal, com apenas 15% de vegetação nativa." },
          ]}
          resolution={
            <p>
              A Mata Atlântica é o bioma com maior grau de devastação: cobria ~15% do território nacional
              e hoje restam apenas ~12% de remanescentes florestais acima de 100 ha. O Cerrado tem ~40%
              de remanescente, a Caatinga ~50% e o Pantanal ~70%. A Mata Atlântica é classificada como
              hotspot de biodiversidade global justamente pela combinação de alto endemismo e alto grau
              de ameaça.
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Biomas 4, 5 e 6</span>
        <h2>5. Caatinga, Pantanal e Pampa</h2>
        <p>
          <strong>Caatinga:</strong> único bioma exclusivamente brasileiro. Ocupa a maior parte do
          Nordeste e o norte de Minas Gerais, em clima semiárido com precipitação média de 250–800 mm/ano,
          concentrada em poucos meses. A vegetação é xerófila (adaptada à seca): cactáceas (como o
          mandacaru e o xique-xique), bromélias (como o carauá), árvores de folhas caducas como a
          catingueira e o angico. Fauna: onça-pintada, asa-branca, preá, tatu-peba, ararinha-azul
          (extinta na natureza). O bioma sofre pressão do desmatamento para carvão vegetal e da
          desertificação, especialmente no Seridó (RN/PB) e no Irauçuba (CE).
        </p>
        <p>
          <strong>Pantanal:</strong> maior planície alagável do mundo (entre Brasil, Bolívia e Paraguai).
          O Pantanal brasileiro concentra-se em Mato Grosso e Mato Grosso do Sul. É considerado a
          área úmida mais conservada do Brasil (~70% de vegetação nativa). Em 2020, incêndios de
          grandes proporções destruíram ~26% do bioma em um único ano. Fauna: onça-pintada (maior
          população do mundo), tuiuiú (ave símbolo), capivara, jacaré-do-pantanal, lontra.
        </p>
        <p>
          <strong>Pampa:</strong> ocorre exclusivamente no Rio Grande do Sul, nos campos temperados do
          sul do continente americano (Argentina e Uruguai também têm Pampa). Caracteriza-se por
          campos abertos com gramíneas, pouca arborização natural. É o bioma menos conhecido e menos
          protegido: apenas ~2,7% de sua área está em unidades de conservação. A sojicultura e o
          reflorestamento com eucalipto e pinus são as principais ameaças.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Bioma</th>
              <th>Localização</th>
              <th>Vegetação típica</th>
              <th>Principal ameaça</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Caatinga</td>
              <td>Nordeste + N de MG</td>
              <td>Cactáceas, bromélias, árvores caducas</td>
              <td>Desmatamento para carvão, desertificação</td>
            </tr>
            <tr>
              <td>Pantanal</td>
              <td>MT e MS (+ BOL + PRY)</td>
              <td>Mosaico florestal e campos alagados</td>
              <td>Queimadas, agropecuária, mineração</td>
            </tr>
            <tr>
              <td>Pampa</td>
              <td>Rio Grande do Sul</td>
              <td>Campos com gramíneas nativas</td>
              <td>Sojicultura, eucalipto, pinus</td>
            </tr>
          </tbody>
        </table>

        <Exercise
          level="Intermediário"
          title="2. Caatinga e semiárido"
          statement={
            <><p>
              A Caatinga é o único bioma exclusivamente brasileiro. Suas características diferem
              substancialmente dos demais biomas nacionais.
            </p>
            <p>
              Com base nesse bioma, assinale a afirmativa CORRETA:
            </p></>
          }
          options={[
            { letter: "a", text: "A Caatinga ocorre em clima equatorial, com chuvas bem distribuídas ao longo do ano." },
            { letter: "b", text: "A vegetação da Caatinga é composta por plantas xerófilas, adaptadas à escassez hídrica, como cactáceas e bromélias.", correct: true },
            { letter: "c", text: "O bioma Caatinga se estende por parte dos territórios da Argentina e do Paraguai." },
            { letter: "d", text: "A Caatinga possui os menores índices de biodiversidade entre os biomas brasileiros, sem espécies endêmicas." },
            { letter: "e", text: "O Pantanal e a Caatinga compartilham as mesmas condições climáticas de semi-aridez." },
          ]}
          resolution={
            <p>
              A Caatinga ocorre em clima semiárido, com precipitações irregulares e concentradas em
              período restrito. A vegetação xerófila (cactáceas como mandacaru e xique-xique, bromélias
              como carauá, árvores caducifólias) é a marca do bioma. A Caatinga é exclusivamente
              brasileira — nenhum outro país possui esse bioma. Possui espécies endêmicas únicas, como
              a ararinha-azul. O Pantanal tem clima tropical continental úmido, muito diferente do
              semiárido da Caatinga.
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Espécies Ameaçadas</span>
        <h2>6. Fauna Ameaçada nos Biomas Brasileiros</h2>
        <p>
          O Brasil possui a maior lista de espécies ameaçadas de extinção do mundo em termos absolutos.
          A última avaliação do ICMBio/MMA identificou 1.173 espécies da fauna brasileira ameaçadas,
          sendo 299 em perigo crítico de extinção. As principais causas são: destruição de habitat
          (desmatamento, queimadas, urbanização), caça e tráfico ilegal de animais silvestres,
          introdução de espécies exóticas invasoras e poluição.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Espécie</th>
              <th>Bioma</th>
              <th>Status</th>
              <th>Principal ameaça</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Mico-leão-dourado</td><td>Mata Atlântica</td><td>Em perigo</td><td>Fragmentação de habitat</td></tr>
            <tr><td>Muriqui-do-norte</td><td>Mata Atlântica</td><td>Criticamente em perigo</td><td>Desmatamento</td></tr>
            <tr><td>Ararinha-azul</td><td>Caatinga</td><td>Extinta na natureza</td><td>Captura ilegal, desmatamento</td></tr>
            <tr><td>Lobo-guará</td><td>Cerrado</td><td>Vulnerável</td><td>Perda de habitat, atropelamento</td></tr>
            <tr><td>Peixe-boi-da-Amazônia</td><td>Amazônia</td><td>Vulnerável</td><td>Caça, captura acidental</td></tr>
            <tr><td>Onça-pintada</td><td>Vários</td><td>Vulnerável</td><td>Caça, desmatamento</td></tr>
          </tbody>
        </table>

        {/* SVG 2: Mapa esquemático dos biomas */}
        <div className="lesson-svg-wrap" style={{ overflowX: "auto" }}>
          <svg viewBox="0 0 420 500" width="100%" style={{ maxWidth: 420, display: "block", margin: "0 auto" }}>
            <rect width="420" height="500" fill="#e0f2fe" rx="12" />
            <text x="210" y="24" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">
              Distribuição Esquemática dos Biomas
            </text>
            {/* Amazônia */}
            <ellipse cx="160" cy="160" rx="130" ry="105" fill="#2d6a4f" opacity="0.85" />
            <text x="155" y="155" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Amazônia</text>
            <text x="155" y="170" textAnchor="middle" fontSize="10" fill="#d1fae5">49% do Brasil</text>
            {/* Cerrado */}
            <ellipse cx="230" cy="285" rx="90" ry="70" fill="#b5e48c" opacity="0.9" />
            <text x="230" y="282" textAnchor="middle" fontSize="11" fill="#1a3c1a" fontWeight="bold">Cerrado</text>
            <text x="230" y="296" textAnchor="middle" fontSize="9" fill="#2d5a1b">24%</text>
            {/* Caatinga */}
            <ellipse cx="320" cy="210" rx="65" ry="55" fill="#e9c46a" opacity="0.9" />
            <text x="320" y="207" textAnchor="middle" fontSize="10" fill="#6b4c11" fontWeight="bold">Caatinga</text>
            <text x="320" y="220" textAnchor="middle" fontSize="9" fill="#6b4c11">10%</text>
            {/* Mata Atlântica */}
            <rect x="330" y="280" width="50" height="120" rx="8" fill="#1b4332" opacity="0.85" />
            <text x="355" y="330" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="bold" transform="rotate(-90,355,340)">Mata Atlântica 13%</text>
            {/* Pantanal */}
            <ellipse cx="185" cy="365" rx="45" ry="35" fill="#90e0ef" opacity="0.9" />
            <text x="185" y="362" textAnchor="middle" fontSize="9" fill="#023e8a" fontWeight="bold">Pantanal</text>
            <text x="185" y="374" textAnchor="middle" fontSize="8" fill="#023e8a">2%</text>
            {/* Pampa */}
            <ellipse cx="210" cy="450" rx="60" ry="30" fill="#d9ed92" opacity="0.9" />
            <text x="210" y="448" textAnchor="middle" fontSize="10" fill="#386641" fontWeight="bold">Pampa</text>
            <text x="210" y="460" textAnchor="middle" fontSize="8" fill="#386641">2%</text>
          </svg>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legislação Ambiental</span>
        <h2>7. Proteção Legal dos Biomas</h2>
        <p>
          O arcabouço jurídico de proteção ambiental no Brasil é um dos mais completos do mundo, embora
          a efetivação prática ainda seja um desafio. Os principais instrumentos são:
        </p>
        <ul>
          <li>
            <strong>Código Florestal (Lei 12.651/2012):</strong> regula o uso da vegetação nativa
            em propriedades rurais. Institui as Áreas de Preservação Permanente (APP) e a Reserva
            Legal (RL). APPs protegem margens de rios, topos de morro, encostas íngremes e entornos
            de nascentes. A RL varia por bioma: 80% na Amazônia, 35% no Cerrado amazônico, 20% nos
            demais biomas.
          </li>
          <li>
            <strong>SNUC (Lei 9.985/2000):</strong> Sistema Nacional de Unidades de Conservação.
            Classifica as UCs em dois grupos: <em>Proteção Integral</em> (Parques Nacionais, Reservas
            Biológicas, Estações Ecológicas, Refúgios de Vida Silvestre, Monumentos Naturais — sem
            uso direto dos recursos) e <em>Uso Sustentável</em> (Florestas Nacionais, Reservas
            Extrativistas, Reservas de Desenvolvimento Sustentável, APAs, RPPNs — permitem uso
            sustentável).
          </li>
          <li>
            <strong>Lei da Mata Atlântica (Lei 11.428/2006):</strong> proteção específica e
            diferenciada para o bioma mais devastado.
          </li>
          <li>
            <strong>Política Nacional do Meio Ambiente (Lei 6.938/1981):</strong> instituiu o
            licenciamento ambiental e o EIA/RIMA, criou o CONAMA (Conselho Nacional do Meio Ambiente)
            e o SISNAMA (Sistema Nacional do Meio Ambiente).
          </li>
        </ul>

        <Exercise
          level="Intermediário"
          title="3. Código Florestal e Reserva Legal"
          statement={
            <p>
              O Código Florestal brasileiro (Lei 12.651/2012) estabelece diferentes percentuais de
              Reserva Legal (RL) para as propriedades rurais, conforme o bioma em que estão inseridas.
              Qual é o percentual de RL exigido para propriedades rurais localizadas na Amazônia Legal?
            </p>
          }
          options={[
            { letter: "a", text: "20% da área da propriedade, independentemente do bioma." },
            { letter: "b", text: "35% da área, aplicado uniformemente a toda a Região Norte." },
            { letter: "c", text: "50% da área, para garantir a conectividade de corredores ecológicos." },
            { letter: "d", text: "80% da área da propriedade, refletindo a importância da floresta amazônica.", correct: true },
            { letter: "e", text: "100% da área, pois toda propriedade na Amazônia é integralmente protegida." },
          ]}
          resolution={
            <p>
              O Código Florestal estabelece Reserva Legal de <strong>80%</strong> para propriedades
              rurais em florestas da Amazônia Legal, e de 35% para as áreas de cerrado dentro desse
              território. Para os demais biomas (Cerrado fora da Amazônia Legal, Mata Atlântica,
              Caatinga, Pampa, Pantanal), o percentual é de 20%. A distinção reflete a maior
              importância ecológica e a maior cobertura original da Amazônia.
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Terras Indígenas</span>
        <h2>8. Terras Indígenas e Conservação</h2>
        <p>
          As Terras Indígenas (TIs) desempenham papel fundamental na conservação dos biomas brasileiros,
          especialmente na Amazônia. Estudos científicos comprovam que as TIs são barreiras eficazes
          contra o desmatamento: comparadas às áreas externas, apresentam taxas de desmatamento até
          10 vezes menores. No Brasil, as TIs cobrem cerca de 13,8% do território nacional, com
          concentração na Amazônia (onde representam ~23% do bioma).
        </p>
        <p>
          A <strong>demarcação de terras indígenas</strong> é, portanto, também uma política ambiental.
          As TIs amazônicas armazenam bilhões de toneladas de carbono, contribuindo para a mitigação
          das mudanças climáticas globais. Contudo, garimpo ilegal, invasões e pressão madeireira
          representam ameaças crescentes mesmo dentro de terras demarcadas.
        </p>
        <p>
          Além das TIs, o Brasil tem mais de 2.000 <strong>Unidades de Conservação</strong> (entre
          federais, estaduais e municipais), cobrindo ~18% do território terrestre. Ainda assim,
          muitas UCs existem apenas no papel ("parques de papel"), sem fiscalização, gestão ou
          recursos adequados.
        </p>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Desmatamento</span>
        <h2>9. Desmatamento no Brasil: Causas, Monitoramento e Políticas</h2>
        <p>
          O desmatamento é a principal ameaça aos biomas brasileiros. Suas causas variam por bioma:
          na Amazônia, os principais vetores são a pecuária extensiva, a soja, a especulação fundiária
          e a grilagem de terras públicas. No Cerrado, a expansão da soja e da cana-de-açúcar
          (MATOPIBA). Na Caatinga, a retirada de lenha e carvão vegetal. Na Mata Atlântica, a
          urbanização e a silvicultura. No Pampa, a sojicultura e a monocultura de eucalipto.
        </p>
        <p>
          O <strong>PRODES</strong> (Projeto de Monitoramento do Desmatamento da Amazônia Legal por
          Satélite), do INPE, é o principal sistema de monitoramento, com dados anuais desde 1988.
          O <strong>DETER</strong> (Detecção de Desmatamento em Tempo Real) fornece alertas mensais.
          O <strong>MapBiomas</strong> mapeia o uso e cobertura do solo em todos os biomas.
        </p>

        <Exercise
          level="Avançado"
          title="4. Desmatamento na Amazônia e vetores"
          statement={
            <><p>
              O desmatamento na Amazônia brasileira apresentou oscilações significativas nas últimas
              décadas, respondendo a políticas públicas, pressões do mercado internacional e fiscalização.
            </p>
            <p>
              Considerando os principais vetores do desmatamento amazônico, assinale a alternativa
              CORRETA:
            </p></>
          }
          options={[
            { letter: "a", text: "A mineração ilegal é responsável pela maior parte do desmatamento amazônico, sendo os demais setores secundários." },
            { letter: "b", text: "O desmatamento amazônico é causado principalmente pela expansão da agricultura familiar de subsistência, sem participação do agronegócio." },
            { letter: "c", text: "A pecuária extensiva e a expansão da soja são os principais vetores do desmatamento amazônico, frequentemente associados à grilagem de terras públicas.", correct: true },
            { letter: "d", text: "A construção de usinas hidrelétricas é o principal vetor do desmatamento na Amazônia desde os anos 2000." },
            { letter: "e", text: "O desmatamento amazônico é causado exclusivamente por pequenos agricultores sem-terra, que praticam a agricultura de corte e queima." },
          ]}
          resolution={
            <p>
              A pecuária extensiva responde por ~70–80% das áreas desmatadas na Amazônia. A soja,
              que nas décadas anteriores chegava via "soja indireta" (desmatando para pecuária e
              depois convertendo), avança crescentemente de forma direta. Ambos estão associados à
              grilagem (falsificação de títulos de terras públicas). A mineração ilegal causa impactos
              graves (especialmente em TIs), mas em termos de área desmatada é secundária. O
              PRODES/INPE confirma que o agronegócio é o principal motor do desmatamento.
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Comparativo e Questões de ENEM</h2>
        <p>
          O ENEM cobra frequentemente: a) localização e características dos biomas; b) percentuais
          de desmatamento e conservação; c) legislação ambiental (Código Florestal, SNUC, APP, RL);
          d) impactos do desmatamento sobre o clima e a biodiversidade; e) relação entre TIs e
          conservação; f) hotspots de biodiversidade.
        </p>
        <p>
          Pontos de atenção: Amazônia Legal ≠ bioma Amazônia; bioma exclusivamente brasileiro =
          Caatinga; bioma mais devastado = Mata Atlântica; maior planície alagável do mundo =
          Pantanal; "berço das águas" = Cerrado; Pampa = único bioma exclusivamente no RS.
        </p>

        <div className="lesson-highlight">
          <h3>APP e Reserva Legal: diferença fundamental</h3>
          <p>
            <strong>APP (Área de Preservação Permanente):</strong> áreas protegidas pelo Código
            Florestal independentemente de serem em propriedades rurais ou urbanas, em função de
            características topográficas ou hidrológicas (margem de rios, nascentes, topos de morro,
            encostas). <strong>Reserva Legal:</strong> percentual mínimo da propriedade rural que
            deve ser mantido com vegetação nativa, mas admite uso sustentável. Enquanto a APP é
            absoluta (não pode ser usada), a RL pode ser explorada com manejo sustentável.
          </p>
        </div>

        <Exercise
          level="Avançado"
          title="5. Hotspots, SNUC e conservação"
          statement={
            <><p>
              O Brasil possui dois biomas classificados como hotspots de biodiversidade pela
              Conservation International: o Cerrado e a Mata Atlântica. O SNUC (Lei 9.985/2000)
              organiza as Unidades de Conservação em dois grupos.
            </p>
            <p>
              Sobre esses temas, assinale a alternativa CORRETA:
            </p></>
          }
          options={[
            { letter: "a", text: "Um Parque Nacional é uma UC de Uso Sustentável, onde as comunidades tradicionais podem explorar os recursos florestais de forma regulamentada." },
            { letter: "b", text: "A Reserva Extrativista é uma UC de Proteção Integral, vedando qualquer forma de uso dos recursos naturais." },
            { letter: "c", text: "O Cerrado e a Mata Atlântica são hotspots por combinarem alta biodiversidade com endemismo elevado e alto grau de ameaça, mesmo com percentuais de vegetação nativa muito distintos.", correct: true },
            { letter: "d", text: "Hotspot de biodiversidade é um conceito que se aplica apenas a biomas com mais de 50% de vegetação nativa remanescente." },
            { letter: "e", text: "No SNUC, as Reservas Biológicas permitem visitação pública e pesquisa científica sem restrições, sendo as mais abertas ao turismo." },
          ]}
          resolution={
            <p>
              Os hotspots de biodiversidade são regiões com alto endemismo (ao menos 1.500 espécies
              endêmicas de plantas vasculares) e que já perderam ao menos 70% da cobertura vegetal
              original. Tanto o Cerrado (~40% remanescente) quanto a Mata Atlântica (~12% remanescente)
              se encaixam nesses critérios. No SNUC: Parques Nacionais são Proteção Integral (sem uso
              direto, só pesquisa e turismo); Reservas Extrativistas são Uso Sustentável (permitem
              extrativismo por comunidades tradicionais); Reservas Biológicas são as mais restritivas
              (nem visitação pública, apenas pesquisa com autorização).
            </p>
          }
        />
      </section>
    </article>
  );
}
