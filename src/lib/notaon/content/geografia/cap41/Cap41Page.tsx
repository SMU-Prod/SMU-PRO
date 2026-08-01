"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap41Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 41</span>
          <h1>Questões ambientais globais e conferências internacionais</h1>
          <p>
            O meio ambiente tornou-se uma das principais arenas de negociação e conflito da política
            internacional contemporânea. Desde as décadas de 1960 e 1970, a humanidade passou a tomar
            consciência de que os impactos da industrialização, do consumo e do crescimento demográfico
            ameaçam a estabilidade dos sistemas naturais que sustentam a vida no planeta. Conferências,
            tratados e acordos internacionais tentam coordenar respostas globais a problemas como as
            mudanças climáticas, a perda de biodiversidade, a desertificação e a poluição dos oceanos.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Panorama geral</span>
        <h2>1. A emergência das questões ambientais globais</h2>
        <p>
          A preocupação ambiental em escala global emergiu com força na segunda metade do século XX,
          impulsionada pela publicação de obras como "Primavera Silenciosa" (Rachel Carson, 1962),
          que denunciou os impactos dos pesticidas, e pelo relatório "Limites do Crescimento" do Clube
          de Roma (1972), que alertou sobre os limites dos recursos naturais frente ao crescimento
          econômico ilimitado.
        </p>
        <p>
          Dois grandes tipos de problemas ambientais dominam a agenda global: os problemas locais com
          impactos globais (como o desmatamento e a emissão de gases de efeito estufa) e os problemas
          que afetam os bens comuns globais, como os oceanos, a camada de ozônio e a atmosfera. Esses
          problemas desafiam a soberania estatal, pois exigem cooperação internacional para sua solução.
        </p>
        <p>
          O conceito de "desenvolvimento sustentável", popularizado pelo Relatório Brundtland (1987),
          define como "aquele que atende às necessidades do presente sem comprometer a capacidade das
          gerações futuras de atenderem às suas próprias necessidades". Esse conceito tornou-se
          referência central para as negociações ambientais internacionais.
        </p>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estocolmo 1972</span>
        <h2>2. A Conferência de Estocolmo (1972): o início do ambientalismo global</h2>
        <p>
          A Conferência das Nações Unidas sobre o Ambiente Humano, realizada em Estocolmo em 1972,
          foi o primeiro grande encontro internacional dedicado às questões ambientais. Reuniu 113
          países e resultou na criação do Programa das Nações Unidas para o Meio Ambiente (PNUMA) e
          na Declaração de Estocolmo, com 26 princípios sobre o relacionamento entre o ser humano e
          o meio ambiente.
        </p>
        <p>
          Em Estocolmo, emergiu a tensão entre países desenvolvidos e em desenvolvimento que marcaria
          todas as conferências subsequentes: países do Sul global (inclusive o Brasil, na época sob
          a ditadura militar) defendiam o direito ao desenvolvimento econômico, argumentando que a
          poluição era "o preço do progresso". Esse debate sobre responsabilidades comuns mas
          diferenciadas permanece central até hoje.
        </p>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Rio-92 e Kyoto</span>
        <h2>3. A ECO-92 e o Protocolo de Kyoto</h2>
        <p>
          A Conferência das Nações Unidas sobre Meio Ambiente e Desenvolvimento (CNUMAD), conhecida
          como ECO-92 ou Rio-92, realizada no Rio de Janeiro em 1992, foi o mais importante encontro
          ambiental do século XX. Reuniu 178 países e resultou em documentos históricos: a Agenda 21
          (plano de ação para o desenvolvimento sustentável), a Declaração do Rio, a Convenção-Quadro
          das Nações Unidas sobre Mudança do Clima (UNFCCC), a Convenção sobre Diversidade Biológica
          (CDB) e a Convenção das Nações Unidas de Combate à Desertificação (UNCCD).
        </p>
        <p>
          A ECO-92 também sediou o Global Forum, encontro paralelo de ONGs e movimentos sociais,
          demonstrando a emergência da sociedade civil como ator nas negociações ambientais globais.
          A Agenda 21 introduziu a ideia de que todos os atores — governos, empresas e cidadãos —
          têm responsabilidade pela sustentabilidade.
        </p>
        <p>
          O Protocolo de Kyoto (1997) foi o primeiro acordo vinculante para redução de emissões de
          gases de efeito estufa (GEE). Estabeleceu metas de redução apenas para países desenvolvidos
          (Anexo I), reconhecendo o princípio das responsabilidades comuns mas diferenciadas. Criou
          mecanismos de mercado como o Mercado de Carbono, o Mecanismo de Desenvolvimento Limpo (MDL)
          e a Implementação Conjunta. Os EUA assinaram mas não ratificaram o protocolo; o Canadá
          se retirou em 2011.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais conferências e acordos ambientais internacionais</caption>
            <thead>
              <tr>
                <th>Evento</th>
                <th>Ano/Local</th>
                <th>Principais resultados</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Conferência de Estocolmo</td>
                <td>1972 — Suécia</td>
                <td>Criação do PNUMA, Declaração de Estocolmo</td>
              </tr>
              <tr>
                <td>Relatório Brundtland</td>
                <td>1987</td>
                <td>Definição de desenvolvimento sustentável</td>
              </tr>
              <tr>
                <td>ECO-92 / Rio-92</td>
                <td>1992 — Brasil</td>
                <td>Agenda 21, UNFCCC, CDB, Declaração do Rio</td>
              </tr>
              <tr>
                <td>Protocolo de Kyoto</td>
                <td>1997 — Japão</td>
                <td>Metas de redução de GEE para países desenvolvidos</td>
              </tr>
              <tr>
                <td>Rio+10 / Johannesburgo</td>
                <td>2002 — África do Sul</td>
                <td>Plano de Implementação, metas de saneamento</td>
              </tr>
              <tr>
                <td>Rio+20</td>
                <td>2012 — Brasil</td>
                <td>Economia Verde, ODS (predecessor dos ODS 2015)</td>
              </tr>
              <tr>
                <td>Acordo de Paris</td>
                <td>2015 — França</td>
                <td>Meta de 1,5°C, NDCs, financiamento climático</td>
              </tr>
              <tr>
                <td>COP 26</td>
                <td>2021 — Reino Unido</td>
                <td>Fim do carvão, artigo 6 do Acordo de Paris</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Figura 1 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="320" fill="#f0f9ff" rx="8"/>
          <text x="300" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
            Linha do tempo das conferências ambientais internacionais
          </text>
          {/* Linha do tempo */}
          <line x1="40" y1="160" x2="560" y2="160" stroke="#0ea5e9" strokeWidth="3"/>
          {/* Marcadores */}
          {/* 1972 */}
          <circle cx="80" cy="160" r="8" fill="#0ea5e9"/>
          <text x="80" y="148" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0c4a6e">1972</text>
          <text x="80" y="185" textAnchor="middle" fontSize="9" fill="#0c4a6e">Estocolmo</text>
          {/* 1987 */}
          <circle cx="160" cy="160" r="8" fill="#7c3aed"/>
          <text x="160" y="148" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#4c1d95">1987</text>
          <text x="160" y="185" textAnchor="middle" fontSize="9" fill="#4c1d95">Brundtland</text>
          {/* 1992 */}
          <circle cx="240" cy="160" r="10" fill="#16a34a"/>
          <text x="240" y="145" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#14532d">1992</text>
          <text x="240" y="183" textAnchor="middle" fontSize="9" fill="#14532d">ECO-92</text>
          <text x="240" y="197" textAnchor="middle" fontSize="9" fill="#14532d">Rio de Janeiro</text>
          {/* 1997 */}
          <circle cx="320" cy="160" r="8" fill="#dc2626"/>
          <text x="320" y="148" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7f1d1d">1997</text>
          <text x="320" y="185" textAnchor="middle" fontSize="9" fill="#7f1d1d">Kyoto</text>
          {/* 2012 */}
          <circle cx="420" cy="160" r="8" fill="#d97706"/>
          <text x="420" y="148" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#78350f">2012</text>
          <text x="420" y="185" textAnchor="middle" fontSize="9" fill="#78350f">Rio+20</text>
          {/* 2015 */}
          <circle cx="500" cy="160" r="10" fill="#0891b2"/>
          <text x="500" y="145" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#164e63">2015</text>
          <text x="500" y="183" textAnchor="middle" fontSize="9" fill="#164e63">Acordo</text>
          <text x="500" y="197" textAnchor="middle" fontSize="9" fill="#164e63">de Paris</text>
          {/* Seta */}
          <polygon points="560,155 575,160 560,165" fill="#0ea5e9"/>
        </svg>
        <figcaption>Linha do tempo das principais conferências e acordos ambientais internacionais desde 1972.</figcaption>
      </figure>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Acordo de Paris</span>
        <h2>4. O Acordo de Paris (2015) e as metas climáticas</h2>
        <p>
          O Acordo de Paris, adotado na COP21 em dezembro de 2015, representa o acordo climático mais
          ambicioso e abrangente já firmado. Diferentemente do Protocolo de Kyoto, o Acordo de Paris
          é universal — todos os países (tanto desenvolvidos quanto em desenvolvimento) assumem
          compromissos de redução de emissões, chamados de Contribuições Nacionalmente Determinadas (NDCs).
        </p>
        <p>
          O objetivo central do Acordo é limitar o aumento da temperatura média global a 2°C acima dos
          níveis pré-industriais, com esforços para limitar o aquecimento a 1,5°C. Os NDCs são
          estabelecidos por cada país de forma autônoma, mas devem ser atualizados e progressivamente
          mais ambiciosos a cada cinco anos.
        </p>
        <p>
          O Acordo também prevê um mecanismo de financiamento: países desenvolvidos comprometeram-se
          a mobilizar 100 bilhões de dólares por ano para auxiliar países em desenvolvimento na adaptação
          às mudanças climáticas e na transição para economias de baixo carbono. Os EUA retiraram-se
          do acordo em 2019 (governo Trump) e regressaram em 2021 (governo Biden).
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mudanças climáticas</span>
        <h2>5. Mudanças climáticas: causas, efeitos e o efeito estufa</h2>
        <p>
          O efeito estufa é um fenômeno natural essencial para a vida na Terra: gases como vapor d'água,
          CO₂ e metano retêm parte do calor solar, mantendo a temperatura média do planeta em torno de
          15°C (sem ele seria de -18°C). O problema contemporâneo é o intensificação antrópica desse
          efeito, pela emissão excessiva de Gases de Efeito Estufa (GEE) provenientes da queima de
          combustíveis fósseis, desmatamento, pecuária e indústria.
        </p>
        <p>
          Os efeitos das mudanças climáticas incluem: aumento do nível do mar (com risco de inundação
          de regiões costeiras e ilhas), intensificação de eventos climáticos extremos (furacões, secas,
          enchentes), derretimento de geleiras e calotas polares, deslocamentos de populações (refugiados
          climáticos), impactos na produção agrícola e perda de biodiversidade.
        </p>
        <p>
          O IPCC (Painel Intergovernamental sobre Mudanças Climáticas), criado em 1988, reúne cientistas
          de todo o mundo para avaliar o conhecimento científico sobre o clima. Seus relatórios são
          fundamentais para embasar as negociações internacionais. O 6º Relatório do IPCC (2021-2022)
          afirma que as mudanças climáticas são "inequivocamente" causadas pela ação humana.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais gases de efeito estufa, fontes e impactos</caption>
            <thead>
              <tr>
                <th>Gás</th>
                <th>Principais fontes antrópicas</th>
                <th>Potencial de aquecimento (100 anos)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dióxido de carbono (CO₂)</td>
                <td>Queima de combustíveis fósseis, desmatamento</td>
                <td>1 (referência)</td>
              </tr>
              <tr>
                <td>Metano (CH₄)</td>
                <td>Pecuária, aterros sanitários, extração de petróleo</td>
                <td>25x o CO₂</td>
              </tr>
              <tr>
                <td>Óxido nitroso (N₂O)</td>
                <td>Fertilizantes nitrogenados, queima de biomassa</td>
                <td>298x o CO₂</td>
              </tr>
              <tr>
                <td>HFCs (hidrofluorcarbonos)</td>
                <td>Refrigeração, ar-condicionado</td>
                <td>Até 14.800x o CO₂</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Figura 2 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="300" fill="#fefce8" rx="8"/>
          <text x="300" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
            O efeito estufa: mecanismo natural e intensificação antrópica
          </text>
          {/* Sol */}
          <circle cx="80" cy="70" r="35" fill="#fbbf24" opacity="0.9"/>
          <text x="80" y="75" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#78350f">SOL</text>
          {/* Raios solares */}
          <line x1="115" y1="70" x2="200" y2="100" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2"/>
          <line x1="115" y1="55" x2="200" y2="80" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2"/>
          {/* Atmosfera */}
          <ellipse cx="380" cy="130" rx="200" ry="40" fill="#bfdbfe" opacity="0.5" stroke="#3b82f6" strokeWidth="2"/>
          <text x="380" y="134" textAnchor="middle" fontSize="11" fill="#1e40af">Camada de GEE na atmosfera</text>
          {/* Terra */}
          <ellipse cx="380" cy="240" rx="200" ry="30" fill="#86efac" stroke="#16a34a" strokeWidth="2"/>
          <text x="380" y="245" textAnchor="middle" fontSize="11" fill="#14532d">Superfície terrestre</text>
          {/* Calor retido */}
          <path d="M 300 170 Q 280 200 300 230" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>
          <path d="M 380 170 Q 360 200 380 230" stroke="#ef4444" strokeWidth="2" fill="none"/>
          <path d="M 460 170 Q 440 200 460 230" stroke="#ef4444" strokeWidth="2" fill="none"/>
          <text x="250" y="205" textAnchor="middle" fontSize="10" fill="#dc2626">calor</text>
          <text x="250" y="218" textAnchor="middle" fontSize="10" fill="#dc2626">retido</text>
          {/* Seta saindo */}
          <path d="M 500 120 L 530 80" stroke="#64748b" strokeWidth="2" strokeDasharray="3,2"/>
          <text x="545" y="75" textAnchor="middle" fontSize="9" fill="#475569">calor</text>
          <text x="545" y="87" textAnchor="middle" fontSize="9" fill="#475569">perdido</text>
          {/* Legenda */}
          <rect x="30" y="265" width="12" height="12" fill="#ef4444"/>
          <text x="48" y="276" fontSize="10" fill="#475569">Calor retido pelo efeito estufa intensificado</text>
        </svg>
        <figcaption>Representação esquemática do efeito estufa: a camada de GEE na atmosfera retém o calor solar, e a intensificação antrópica desse processo causa o aquecimento global.</figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Biodiversidade</span>
        <h2>6. Perda de biodiversidade e a Convenção sobre Diversidade Biológica</h2>
        <p>
          A Terra atravessa o que cientistas chamam de "sexta extinção em massa" — um processo de
          extinção de espécies causado principalmente pela ação humana, que inclui a destruição de
          habitats, a poluição, a introdução de espécies invasoras, a exploração excessiva e as
          mudanças climáticas. A taxa de extinção atual é estimada como 100 a 1.000 vezes maior que
          a taxa natural.
        </p>
        <p>
          A Convenção sobre Diversidade Biológica (CDB), assinada na ECO-92, estabelece como objetivos
          a conservação da biodiversidade, o uso sustentável de seus componentes e a repartição justa
          dos benefícios derivados do uso dos recursos genéticos. O Protocolo de Nagoia (2010) aprofundou
          as regras de acesso e repartição de benefícios, fundamental para países megabiodiversos como
          o Brasil.
        </p>
        <p>
          O acordo "Kunming-Montreal" (COP15 da CDB, 2022) estabeleceu a meta "30x30": proteger 30%
          das terras e oceanos do planeta até 2030. O Brasil, com a maior biodiversidade do mundo,
          tem papel protagonista nessas negociações.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Desertificação e água</span>
        <h2>7. Desertificação, degradação do solo e recursos hídricos</h2>
        <p>
          A desertificação — processo de degradação de terras áridas, semiáridas e sub-úmidas secas —
          afeta mais de um bilhão de pessoas em todo o mundo. Causada por atividades humanas como
          pastoreio excessivo, agricultura inadequada e desmatamento, agravadas pelas mudanças climáticas,
          a desertificação ameaça a segurança alimentar de populações vulneráveis.
        </p>
        <p>
          A Convenção das Nações Unidas de Combate à Desertificação (UNCCD), também originada na
          ECO-92, é o principal instrumento internacional para enfrentar esse problema. O Brasil possui
          uma área suscetível à desertificação no semiárido nordestino, com cerca de 1,3 milhão de km²
          em processo de degradação acelerada.
        </p>
        <p>
          Os recursos hídricos são outro tema central da agenda ambiental global. A ONU declarou o
          acesso à água potável como direito humano fundamental em 2010. Os ODS (Objetivos de
          Desenvolvimento Sustentável) incluem o Objetivo 6, voltado para a garantia de água limpa
          e saneamento para todos até 2030.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Poluição oceânica</span>
        <h2>8. Poluição dos oceanos e acordos internacionais</h2>
        <p>
          Os oceanos cobrem 71% da superfície da Terra e são fundamentais para a regulação climática,
          a produção de oxigênio e a segurança alimentar de bilhões de pessoas. Contudo, enfrentam
          ameaças severas: poluição por plásticos, acidificação (causada pela absorção de CO₂), pesca
          excessiva e poluição por derramamento de petróleo.
        </p>
        <p>
          O chamado "continente de plástico" — acumulação de resíduos plásticos no Oceano Pacífico com
          extensão comparável à da Europa — exemplifica a gravidade da poluição oceânica. Estima-se
          que mais de 8 milhões de toneladas de plástico entrem nos oceanos a cada ano.
        </p>
        <p>
          Em 2023, o "Tratado Global sobre Plásticos" foi negociado sob os auspícios do PNUMA,
          buscando reduzir a produção e o descarte de plásticos em escala global. A governança dos
          oceanos também é tema da Conferência dos Oceanos da ONU e do Tratado de Alto-Mar (2023),
          que estabelece regras para a proteção da biodiversidade em áreas além das jurisdições nacionais.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais ameaças ambientais globais e instrumentos internacionais</caption>
            <thead>
              <tr>
                <th>Ameaça ambiental</th>
                <th>Principal instrumento internacional</th>
                <th>Ano</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mudanças climáticas</td>
                <td>Acordo de Paris (COP21)</td>
                <td>2015</td>
              </tr>
              <tr>
                <td>Perda de biodiversidade</td>
                <td>Convenção sobre Diversidade Biológica (CDB)</td>
                <td>1992</td>
              </tr>
              <tr>
                <td>Desertificação</td>
                <td>UNCCD</td>
                <td>1994</td>
              </tr>
              <tr>
                <td>Destruição da camada de ozônio</td>
                <td>Protocolo de Montreal</td>
                <td>1987</td>
              </tr>
              <tr>
                <td>Poluição por plásticos</td>
                <td>Tratado Global sobre Plásticos (em negociação)</td>
                <td>2023</td>
              </tr>
              <tr>
                <td>Poluição oceânica</td>
                <td>Tratado de Alto-Mar</td>
                <td>2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Brasil nas negociações</span>
        <h2>9. O papel do Brasil nas negociações ambientais internacionais</h2>
        <p>
          O Brasil ocupa posição singular nas negociações ambientais globais: é o país com maior
          biodiversidade do mundo, abriga a maior floresta tropical (Amazônia), possui a maior reserva
          de água doce superficial, lidera na produção de energia renovável (hidrelétrica e biocombustíveis)
          e é um dos maiores emissores de GEE (principalmente por desmatamento e agropecuária).
        </p>
        <p>
          Essa ambivalência reflete-se nas posições brasileiras nas negociações: ora o Brasil se coloca
          como líder ambiental (hospedou a ECO-92 e a Rio+20, lidera no etanol e biodiesel), ora é
          criticado por déficits na proteção ambiental (aumento do desmatamento em certos períodos,
          enfraquecimento de legislação ambiental).
        </p>
        <p>
          Nas negociações climáticas, o Brasil defende o princípio das "responsabilidades comuns mas
          diferenciadas": países desenvolvidos, que historicamente mais emitiram GEE, devem assumir
          maiores compromissos e prover financiamento para países em desenvolvimento. O Brasil também
          defende o reconhecimento dos "serviços ambientais" prestados pela Amazônia ao planeta,
          argumentando que deveria ser compensado financeiramente pela conservação florestal.
        </p>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">ODS e agenda 2030</span>
        <h2>10. Os Objetivos de Desenvolvimento Sustentável (ODS) e a Agenda 2030</h2>
        <p>
          Em 2015, a ONU adotou a Agenda 2030 para o Desenvolvimento Sustentável, com 17 ODS (Objetivos
          de Desenvolvimento Sustentável) e 169 metas. Os ODS sucederam os Objetivos de Desenvolvimento
          do Milênio (ODM) e têm abrangência muito maior, articulando dimensões econômicas, sociais e
          ambientais do desenvolvimento.
        </p>
        <p>
          Entre os ODS de caráter ambiental destacam-se: ODS 6 (água limpa e saneamento), ODS 7 (energia
          limpa e acessível), ODS 11 (cidades e comunidades sustentáveis), ODS 12 (consumo e produção
          responsáveis), ODS 13 (ação climática), ODS 14 (vida na água) e ODS 15 (vida terrestre).
          Os ODS são universais — aplicam-se a todos os países, desenvolvidos e em desenvolvimento.
        </p>
        <p>
          O Brasil enfrenta desafios significativos para alcançar os ODS: embora tenha avançado em
          indicadores como redução da pobreza (ODS 1) e fome (ODS 2) nas décadas de 2000 e 2010, a
          crise econômica, a pandemia e as desigualdades persistentes representam obstáculos para o
          cumprimento das metas até 2030.
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
              A ECO-92, realizada no Rio de Janeiro em 1992, foi um marco nas negociações ambientais
              internacionais. Qual dos seguintes documentos NÃO foi produzido na ECO-92?
            </p>
          }
          options={[
            { letter: "a", text: "Agenda 21" },
            { letter: "b", text: "Convenção sobre Diversidade Biológica (CDB)" },
            { letter: "c", text: "Convenção-Quadro das Nações Unidas sobre Mudança do Clima (UNFCCC)" },
            { letter: "d", text: "Protocolo de Kyoto", correct: true },
            { letter: "e", text: "Declaração do Rio sobre Meio Ambiente e Desenvolvimento" },
          ]}
          resolution={
            <p>
              O Protocolo de Kyoto foi adotado em 1997, em Kyoto, Japão, cinco anos após a ECO-92.
              Foi o primeiro acordo vinculante para redução de emissões de gases de efeito estufa.
              A ECO-92 produziu a Agenda 21, a Convenção sobre Diversidade Biológica, a UNFCCC e a
              Declaração do Rio, entre outros documentos. O Protocolo de Kyoto é frequentemente
              confundido com documentos da ECO-92 por ter origem na UNFCCC, mas foi negociado
              separadamente cinco anos depois.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              O Acordo de Paris (2015) trouxe inovações importantes em relação ao Protocolo de Kyoto
              (1997). Qual é a principal diferença entre os dois acordos climáticos?
            </p>
          }
          options={[
            { letter: "a", text: "O Acordo de Paris é mais restrito que Kyoto, pois estabelece metas apenas para os países mais poluidores do mundo." },
            { letter: "b", text: "O Protocolo de Kyoto foi mais ambicioso que o Acordo de Paris, pois exigia metas de todos os países do mundo." },
            { letter: "c", text: "O Acordo de Paris é universal — todos os países assumem compromissos voluntários (NDCs) —, enquanto o Protocolo de Kyoto estabelecia metas vinculantes apenas para países desenvolvidos.", correct: true },
            { letter: "d", text: "O Acordo de Paris substituiu definitivamente o Protocolo de Kyoto, tornando-o inválido para todos os países signatários." },
            { letter: "e", text: "Ao contrário de Kyoto, o Acordo de Paris não prevê financiamento climático para países em desenvolvimento." },
          ]}
          resolution={
            <p>
              A principal diferença é a abrangência: o Protocolo de Kyoto estabelecia metas de redução
              de emissões vinculantes apenas para países desenvolvidos (Anexo I), enquanto países em
              desenvolvimento, como China e Brasil, não tinham obrigações quantitativas. O Acordo de
              Paris é universal — todos os países apresentam NDCs (Contribuições Nacionalmente
              Determinadas), embora os compromissos sejam voluntários e definidos por cada nação.
              O Acordo de Paris visa limitar o aquecimento global a 1,5-2°C acima dos níveis pré-industriais.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              O princípio das "responsabilidades comuns mas diferenciadas" é um dos pilares das
              negociações ambientais internacionais. Esse princípio afirma que:
            </p>
          }
          options={[
            { letter: "a", text: "Todos os países têm exatamente as mesmas responsabilidades diante dos problemas ambientais globais, independentemente de seu nível de desenvolvimento." },
            { letter: "b", text: "Os países em desenvolvimento têm maior responsabilidade pelas mudanças climáticas, pois são os que mais crescem economicamente atualmente." },
            { letter: "c", text: "Todos os países compartilham a responsabilidade pela proteção do meio ambiente, mas os países desenvolvidos devem assumir maiores compromissos, por terem contribuído historicamente mais para os problemas ambientais e possuírem maior capacidade financeira e tecnológica.", correct: true },
            { letter: "d", text: "Os países em desenvolvimento estão isentos de qualquer obrigação ambiental, pois seu direito ao desenvolvimento é absoluto e não pode ser limitado por acordos internacionais." },
            { letter: "e", text: "As responsabilidades ambientais são diferenciadas apenas com base na extensão territorial de cada país, não em seu nível de desenvolvimento." },
          ]}
          resolution={
            <p>
              O princípio das "responsabilidades comuns mas diferenciadas" reconhece que, embora todos
              os países compartilhem a responsabilidade pela proteção ambiental global, as nações
              desenvolvidas devem assumir encargos maiores. Isso se justifica por duas razões: primeiro,
              os países ricos são historicamente responsáveis pela maior parte das emissões acumuladas
              de GEE (que permanece na atmosfera por décadas); segundo, possuem maior capacidade
              financeira e tecnológica para promover a transição para economias sustentáveis. Esse princípio
              embasou a distinção no Protocolo de Kyoto entre países do Anexo I (desenvolvidos) e os demais.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              O IPCC (Painel Intergovernamental sobre Mudanças Climáticas) é uma instituição fundamental
              para as negociações climáticas globais. Sobre o IPCC, é CORRETO afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "O IPCC é uma agência governamental que define políticas climáticas vinculantes para todos os países membros da ONU." },
            { letter: "b", text: "O IPCC é um órgão científico que avalia e sintetiza o conhecimento científico existente sobre as mudanças climáticas, fornecendo base científica para as negociações internacionais, sem definir políticas.", correct: true },
            { letter: "c", text: "O IPCC foi criado pelo Acordo de Paris em 2015 para monitorar o cumprimento das NDCs pelos países signatários." },
            { letter: "d", text: "O IPCC realiza pesquisas originais sobre o clima e publica seus próprios dados de temperatura global, independentemente de outras fontes científicas." },
            { letter: "e", text: "O IPCC é vinculado exclusivamente aos interesses de países desenvolvidos, sendo criticado por países emergentes por não considerar as realidades do Sul global." },
          ]}
          resolution={
            <p>
              O IPCC (Painel Intergovernamental sobre Mudanças Climáticas) foi criado em 1988 pelo PNUMA
              e pela Organização Meteorológica Mundial. Sua função é avaliar e sintetizar a literatura
              científica existente sobre as mudanças climáticas, seus impactos e as opções de resposta —
              não realiza pesquisas originais. Seus relatórios de avaliação (AR) são fundamentais para
              embasar as negociações climáticas internacionais. O 6º Relatório de Avaliação (2021-2022)
              concluiu que as mudanças climáticas são "inequivocamente" causadas pela ação humana.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              Leia o trecho: "O Brasil, ao mesmo tempo que abriga a maior floresta tropical do mundo
              e lidera em energia renovável, é também um dos maiores emissores de gases de efeito estufa,
              principalmente pelo desmatamento e pela agropecuária." Essa afirmação ilustra qual conceito
              no contexto das negociações ambientais internacionais?
            </p>
          }
          options={[
            { letter: "a", text: "O conceito de greenwashing, pois o Brasil finge ser sustentável enquanto degrada o meio ambiente." },
            { letter: "b", text: "O paradoxo da posição brasileira nas negociações ambientais: um país com enorme patrimônio ambiental e potencial em energia limpa, mas que também apresenta desafios sérios em desmatamento e emissões, gerando uma posição ambivalente nas negociações internacionais.", correct: true },
            { letter: "c", text: "O princípio da soberania permanente sobre recursos naturais, pelo qual o Brasil tem direito irrestrito de explorar seus recursos, incluindo a Amazônia." },
            { letter: "d", text: "A contradição irresolúvel entre desenvolvimento econômico e preservação ambiental, que impede qualquer forma de crescimento sustentável." },
            { letter: "e", text: "O conceito de externalidades negativas, pois o Brasil exporta sua poluição para outros países através do comércio de commodities." },
          ]}
          resolution={
            <p>
              O trecho ilustra a posição ambivalente do Brasil nas negociações ambientais internacionais.
              O país é simultaneamente um dos maiores patrimônios naturais do mundo (Amazônia, Cerrado,
              Pantanal, maior biodiversidade global) e um dos maiores emissores de GEE, principalmente
              pelo desmatamento e pela pecuária. Essa dualidade se reflete nas posições brasileiras:
              ora como líder ambiental (ECO-92, Rio+20, etanol), ora como alvo de críticas internacionais
              por taxas de desmatamento e enfraquecimento de legislação ambiental em determinados períodos
              políticos. Não se trata de greenwashing (falsidade), mas de uma contradição real.
            </p>
          }
        />
      </section>
    </article>
  );
}
