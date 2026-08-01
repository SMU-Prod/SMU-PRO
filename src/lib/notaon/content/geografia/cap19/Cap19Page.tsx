"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap19Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 19</span>
          <h1>Impactos ambientais, poluição e desmatamento</h1>
          <p>
            A relação entre sociedade e natureza é marcada por profundas transformações ao longo da
            história. Com o avanço da industrialização e do crescimento populacional, os impactos
            ambientais tornaram-se um dos maiores desafios do século XXI. Poluição do ar, das águas
            e do solo, além do desmatamento acelerado, comprometem ecossistemas inteiros e a
            qualidade de vida das populações. Compreender essas dinâmicas é essencial para o ENEM e
            para a formação de cidadãos críticos e comprometidos com o meio ambiente.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceitos fundamentais</span>
        <h2>1. O que são impactos ambientais?</h2>
        <p>
          Impacto ambiental é qualquer alteração das propriedades físicas, químicas ou biológicas do
          meio ambiente causada por atividades humanas que, direta ou indiretamente, afetam a saúde,
          a segurança e o bem-estar da população, as atividades sociais e econômicas, a biota, as
          condições estéticas e sanitárias do meio ambiente e a qualidade dos recursos ambientais.
        </p>
        <p>
          Os impactos podem ser classificados quanto à sua natureza (positivos ou negativos), quanto
          à sua abrangência (locais, regionais ou globais), quanto à sua reversibilidade (reversíveis
          ou irreversíveis) e quanto ao tempo de ocorrência (imediatos, de médio prazo ou de longo
          prazo). No contexto do ENEM, os impactos negativos de grande escala são os mais cobrados.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Tipos de impactos ambientais e exemplos</caption>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Característica</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Local</td>
                <td>Afeta área restrita ao entorno da fonte</td>
                <td>Contaminação de poço por esgoto doméstico</td>
              </tr>
              <tr>
                <td>Regional</td>
                <td>Abrange bacias hidrográficas ou regiões</td>
                <td>Chuva ácida no sudeste industrial</td>
              </tr>
              <tr>
                <td>Global</td>
                <td>Escala planetária, afeta toda a biosfera</td>
                <td>Aquecimento global, destruição da camada de ozônio</td>
              </tr>
              <tr>
                <td>Reversível</td>
                <td>O ambiente pode se recuperar naturalmente</td>
                <td>Queimada isolada em área de cerrado</td>
              </tr>
              <tr>
                <td>Irreversível</td>
                <td>A recuperação natural não é possível</td>
                <td>Extinção de espécies, desertificação avançada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Atmosfera em risco</span>
        <h2>2. Poluição do ar e efeito estufa</h2>
        <p>
          A poluição atmosférica é causada principalmente pela queima de combustíveis fósseis
          (carvão, petróleo e gás natural) em indústrias, veículos e usinas termelétricas. Os
          principais poluentes são o dióxido de carbono (CO₂), o monóxido de carbono (CO), o dióxido
          de enxofre (SO₂), os óxidos de nitrogênio (NOₓ) e as partículas finas (MP2,5 e MP10).
        </p>
        <p>
          O efeito estufa é um fenômeno natural essencial para a vida na Terra, pois mantém a
          temperatura média do planeta em torno de 15°C. Porém, o aumento da concentração de gases
          estufa (CO₂, metano, óxido nitroso e vapor d'água) intensifica esse efeito, elevando a
          temperatura média global. Esse aquecimento antropogênico, chamado de mudança climática,
          tem consequências severas: derretimento das calotas polares, elevação do nível do mar,
          eventos climáticos extremos e deslocamentos populacionais em massa.
        </p>
        <p>
          A chuva ácida é outro impacto grave: o SO₂ e os NOₓ reagem com a água atmosférica,
          formando ácido sulfúrico e ácido nítrico, que se precipitam sobre florestas, lagos e
          edificações, destruindo ecossistemas e patrimônio histórico.
        </p>
      </section>

      {/* SVG Figure 1 — Efeito Estufa */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama do efeito estufa">
          {/* Céu */}
          <rect width="700" height="320" fill="#e8f4fd" />
          {/* Sol */}
          <circle cx="80" cy="60" r="40" fill="#f9d71c" />
          <line x1="80" y1="10" x2="80" y2="0" stroke="#f9d71c" strokeWidth="3" />
          <line x1="130" y1="10" x2="140" y2="0" stroke="#f9d71c" strokeWidth="3" />
          <line x1="120" y1="60" x2="135" y2="60" stroke="#f9d71c" strokeWidth="3" />
          <text x="80" y="65" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#b8860b">Sol</text>
          {/* Raios solares descendo */}
          <line x1="100" y1="90" x2="200" y2="200" stroke="#f9a825" strokeWidth="2" strokeDasharray="6,3" />
          <line x1="115" y1="85" x2="350" y2="200" stroke="#f9a825" strokeWidth="2" strokeDasharray="6,3" />
          <line x1="125" y1="80" x2="500" y2="200" stroke="#f9a825" strokeWidth="2" strokeDasharray="6,3" />
          {/* Camada de gases estufa */}
          <ellipse cx="350" cy="150" rx="300" ry="30" fill="#c8e6c9" fillOpacity="0.6" stroke="#4caf50" strokeWidth="2" />
          <text x="350" y="155" textAnchor="middle" fontSize="12" fill="#2e7d32" fontWeight="bold">Camada de Gases Estufa (CO₂, CH₄, N₂O)</text>
          {/* Solo */}
          <rect x="0" y="260" width="700" height="60" fill="#8d6e63" />
          <text x="350" y="290" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">Superfície terrestre</text>
          {/* Raios infravermelhos refletidos */}
          <line x1="200" y1="260" x2="150" y2="155" stroke="#e53935" strokeWidth="2" strokeDasharray="4,3" />
          <line x1="350" y1="260" x2="350" y2="180" stroke="#e53935" strokeWidth="2" strokeDasharray="4,3" />
          <line x1="500" y1="260" x2="550" y2="155" stroke="#e53935" strokeWidth="2" strokeDasharray="4,3" />
          {/* Setas de retenção */}
          <line x1="200" y1="145" x2="200" y2="230" stroke="#e53935" strokeWidth="2" />
          <polygon points="200,230 195,220 205,220" fill="#e53935" />
          <line x1="500" y1="145" x2="500" y2="230" stroke="#e53935" strokeWidth="2" />
          <polygon points="500,230 495,220 505,220" fill="#e53935" />
          {/* Legenda */}
          <rect x="10" y="270" width="14" height="4" fill="#f9a825" />
          <text x="28" y="275" fontSize="11" fill="#fff">Radiação solar</text>
          <rect x="10" y="280" width="14" height="4" fill="#e53935" />
          <text x="28" y="285" fontSize="11" fill="#fff">Calor retido</text>
        </svg>
        <figcaption>
          Diagrama do efeito estufa: os gases retêm parte da radiação infravermelha emitida pela
          superfície, aquecendo a atmosfera. O excesso de CO₂ humano intensifica esse processo.
        </figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Água: bem essencial ameaçado</span>
        <h2>3. Poluição hídrica e contaminação do solo</h2>
        <p>
          A poluição das águas ocorre quando substâncias prejudiciais são lançadas em rios, lagos,
          oceanos e lençóis freáticos. As principais fontes são o esgoto doméstico sem tratamento, o
          lançamento de efluentes industriais, o escoamento de agrotóxicos e fertilizantes agrícolas
          e os vazamentos de petróleo.
        </p>
        <p>
          A eutrofização é um processo em que o excesso de nutrientes (nitrogênio e fósforo,
          geralmente de fertilizantes) causa o crescimento explosivo de algas, que consomem o
          oxigênio dissolvido e matam peixes e outros organismos aquáticos. O Brasil possui a maior
          reserva de água doce do mundo, mas enfrenta sérios problemas de distribuição e qualidade,
          especialmente nas regiões Nordeste e nas áreas periféricas urbanas.
        </p>
        <p>
          A contaminação do solo ocorre por depósito de resíduos sólidos em lixões a céu aberto,
          uso indiscriminado de agrotóxicos, vazamento de tanques de combustível e deposição de
          resíduos industriais. O chorume produzido em aterros mal gerenciados infiltra-se no solo e
          contamina lençóis freáticos, comprometendo a qualidade da água potável.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais fontes e consequências da poluição hídrica no Brasil</caption>
            <thead>
              <tr>
                <th>Fonte poluidora</th>
                <th>Poluente principal</th>
                <th>Consequência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Esgoto doméstico</td>
                <td>Matéria orgânica, patógenos</td>
                <td>Cólera, hepatite A, esquistossomose</td>
              </tr>
              <tr>
                <td>Indústrias</td>
                <td>Metais pesados (mercúrio, chumbo, cádmio)</td>
                <td>Bioacumulação, doenças neurológicas</td>
              </tr>
              <tr>
                <td>Agricultura intensiva</td>
                <td>Nitrato, fosfato, agrotóxicos</td>
                <td>Eutrofização, morte de peixes</td>
              </tr>
              <tr>
                <td>Mineração</td>
                <td>Rejeitos, metais pesados, lama</td>
                <td>Destruição de leitos, morte da fauna (ex.: Mariana, Brumadinho)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Florestas em colapso</span>
        <h2>4. Desmatamento: causas e consequências</h2>
        <p>
          O desmatamento é a remoção da cobertura vegetal de uma área, podendo ser total
          (corte raso) ou parcial. O Brasil é o país com maior área de floresta tropical do mundo,
          mas também um dos líderes históricos em desmatamento. A Amazônia, o Cerrado, a Mata
          Atlântica e o Pantanal são os biomas mais afetados.
        </p>
        <p>
          As principais causas do desmatamento no Brasil são a expansão da pecuária extensiva
          (responsável por cerca de 80% do desmatamento amazônico), a agricultura de grãos
          (especialmente soja), a extração madeireira ilegal, a grilagem de terras públicas, a
          construção de infraestrutura (rodovias e hidrelétricas) e o avanço do fogo. O Arco do
          Desmatamento é uma faixa que se estende pelos estados do Pará, Mato Grosso, Rondônia e
          Amazonas, onde a devastação é mais intensa.
        </p>
        <p>
          As consequências são múltiplas: perda de biodiversidade (extinção de espécies endêmicas),
          alteração do ciclo hidrológico (rios voadores deixam de transportar umidade para o
          Sudeste), erosão do solo, assoreamento de rios, mudanças climáticas regionais e globais,
          e conflitos socioambientais com populações indígenas e ribeirinhas.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Biomas brasileiros</span>
        <h2>5. Situação dos biomas brasileiros</h2>
        <p>
          O Brasil possui seis biomas terrestres principais, todos sob pressão antrópica em
          diferentes graus. A Mata Atlântica, originalmente cobrindo cerca de 15% do território
          nacional, hoje possui menos de 12% de remanescentes, sendo o bioma mais devastado. O
          Cerrado, considerado a savana mais biodiversa do mundo e berço das águas do Brasil (nasce
          aí grande parte dos rios que abastecem o país), perdeu mais de 50% de sua cobertura
          original.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Status dos biomas brasileiros (estimativas recentes)</caption>
            <thead>
              <tr>
                <th>Bioma</th>
                <th>Área original (km²)</th>
                <th>Vegetação remanescente</th>
                <th>Principal ameaça</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amazônia</td>
                <td>4.196.943</td>
                <td>≈ 80%</td>
                <td>Pecuária, soja, garimpo ilegal</td>
              </tr>
              <tr>
                <td>Cerrado</td>
                <td>2.036.448</td>
                <td>≈ 47%</td>
                <td>Agronegócio, queimadas</td>
              </tr>
              <tr>
                <td>Caatinga</td>
                <td>844.453</td>
                <td>≈ 53%</td>
                <td>Desertificação, exploração madeireira</td>
              </tr>
              <tr>
                <td>Mata Atlântica</td>
                <td>1.110.182</td>
                <td>≈ 12%</td>
                <td>Urbanização, agricultura</td>
              </tr>
              <tr>
                <td>Pantanal</td>
                <td>150.355</td>
                <td>≈ 83%</td>
                <td>Pecuária, queimadas, poluição hídrica</td>
              </tr>
              <tr>
                <td>Pampa</td>
                <td>176.496</td>
                <td>≈ 63%</td>
                <td>Monocultura de soja, eucalipto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG Figure 2 — Desmatamento Amazônia */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" aria-label="Gráfico de desmatamento na Amazônia">
          <rect width="700" height="280" fill="#f5f5f5" />
          <text x="350" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#333">
            Desmatamento anual na Amazônia Legal (km²)
          </text>
          {/* Eixo Y */}
          <line x1="80" y1="50" x2="80" y2="230" stroke="#555" strokeWidth="2" />
          {/* Eixo X */}
          <line x1="80" y1="230" x2="660" y2="230" stroke="#555" strokeWidth="2" />
          {/* Barras de dados — valores aproximados */}
          {/* Anos: 2000=18226, 2004=27772, 2008=12911, 2012=4571, 2016=7989, 2019=10129, 2022=11568 */}
          {/* Escala: 230px = 0; 50px = 30000 → px = 230 - (val/30000)*180 */}
          <rect x="100" y="121" width="55" height="109" fill="#e57373" />
          <text x="127" y="115" textAnchor="middle" fontSize="11" fill="#c62828">18.226</text>
          <text x="127" y="248" textAnchor="middle" fontSize="11" fill="#555">2000</text>

          <rect x="180" y="64" width="55" height="166" fill="#c62828" />
          <text x="207" y="58" textAnchor="middle" fontSize="11" fill="#c62828">27.772</text>
          <text x="207" y="248" textAnchor="middle" fontSize="11" fill="#555">2004</text>

          <rect x="260" y="152" width="55" height="78" fill="#e57373" />
          <text x="287" y="146" textAnchor="middle" fontSize="11" fill="#c62828">12.911</text>
          <text x="287" y="248" textAnchor="middle" fontSize="11" fill="#555">2008</text>

          <rect x="340" y="202" width="55" height="28" fill="#81c784" />
          <text x="367" y="196" textAnchor="middle" fontSize="11" fill="#2e7d32">4.571</text>
          <text x="367" y="248" textAnchor="middle" fontSize="11" fill="#555">2012</text>

          <rect x="420" y="182" width="55" height="48" fill="#e57373" />
          <text x="447" y="176" textAnchor="middle" fontSize="11" fill="#c62828">7.989</text>
          <text x="447" y="248" textAnchor="middle" fontSize="11" fill="#555">2016</text>

          <rect x="500" y="169" width="55" height="61" fill="#c62828" />
          <text x="527" y="163" textAnchor="middle" fontSize="11" fill="#c62828">10.129</text>
          <text x="527" y="248" textAnchor="middle" fontSize="11" fill="#555">2019</text>

          <rect x="580" y="161" width="55" height="69" fill="#e57373" />
          <text x="607" y="155" textAnchor="middle" fontSize="11" fill="#c62828">11.568</text>
          <text x="607" y="248" textAnchor="middle" fontSize="11" fill="#555">2022</text>

          {/* Rótulo Y */}
          <text x="30" y="142" fontSize="11" fill="#555" transform="rotate(-90,30,142)">km² desmatados</text>
        </svg>
        <figcaption>
          Taxas anuais de desmatamento na Amazônia Legal: o pico ocorreu em 2004 e houve queda
          significativa até 2012. A retomada a partir de 2016 coincide com mudanças na fiscalização
          ambiental. Fonte: INPE/PRODES.
        </figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Degradação do solo</span>
        <h2>6. Erosão, desertificação e assoreamento</h2>
        <p>
          A erosão do solo é o processo de desgaste e transporte de partículas pela água, pelo
          vento ou pela ação humana. No Brasil, o plantio em áreas de encosta sem cobertura vegetal,
          o uso intensivo de maquinário agrícola e a retirada da mata ciliar são as principais causas.
          A erosão laminar remove lentamente as camadas superficiais férteis; a erosão em ravinas e
          voçorocas cria sulcos profundos que tornam o solo inaproveitável.
        </p>
        <p>
          A desertificação é a degradação das terras em zonas áridas, semiáridas e subúmidas secas,
          resultando em perda permanente da produtividade do solo. No Brasil, a região mais vulnerável
          é o Sertão nordestino, com um "núcleo de desertificação" em torno de Gilbués (PI),
          Irauçuba (CE) e Cabrobó (PE). O assoreamento ocorre quando os sedimentos carregados pela
          erosão se depositam no leito de rios e represas, reduzindo sua profundidade e a capacidade
          de armazenamento de água.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Resíduos e poluição urbana</span>
        <h2>7. Resíduos sólidos e poluição urbana</h2>
        <p>
          O crescimento das cidades gerou um aumento exponencial na produção de resíduos sólidos.
          O Brasil produz cerca de 80 milhões de toneladas de resíduos por ano, mas ainda destina
          parcela significativa a lixões e aterros controlados inadequados. A Política Nacional de
          Resíduos Sólidos (Lei 12.305/2010) estabeleceu a extinção dos lixões e implementou a
          logística reversa e a coleta seletiva, mas o cumprimento ainda é insuficiente.
        </p>
        <p>
          A poluição sonora, luminosa e visual também são formas de degradação ambiental urbana.
          Os microplásticos, partículas com menos de 5 mm provenientes de embalagens plásticas,
          tecidos sintéticos e cosméticos, já foram detectados em oceanos, rios, solos e até no
          ar que respiramos, representando uma ameaça emergente para a saúde humana e os
          ecossistemas aquáticos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Hierarquia de gestão de resíduos — PNRS (2010)</caption>
            <thead>
              <tr>
                <th>Prioridade</th>
                <th>Ação</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1ª (maior)</td>
                <td>Não geração</td>
                <td>Evitar produzir resíduos desde a origem</td>
              </tr>
              <tr>
                <td>2ª</td>
                <td>Redução</td>
                <td>Minimizar a quantidade gerada</td>
              </tr>
              <tr>
                <td>3ª</td>
                <td>Reutilização</td>
                <td>Usar o produto novamente sem transformação</td>
              </tr>
              <tr>
                <td>4ª</td>
                <td>Reciclagem</td>
                <td>Transformar resíduos em novos produtos</td>
              </tr>
              <tr>
                <td>5ª</td>
                <td>Tratamento</td>
                <td>Compostagem, incineração com aproveitamento energético</td>
              </tr>
              <tr>
                <td>6ª (menor)</td>
                <td>Disposição final</td>
                <td>Aterro sanitário como última opção</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legislação ambiental brasileira</span>
        <h2>8. Marco legal e políticas ambientais no Brasil</h2>
        <p>
          O Brasil possui uma das legislações ambientais mais avançadas do mundo. A Constituição
          Federal de 1988 dedica o artigo 225 ao meio ambiente, garantindo o direito de todos ao
          ambiente ecologicamente equilibrado. O Código Florestal (Lei 12.651/2012) define as Áreas
          de Preservação Permanente (APP) e a Reserva Legal, exigindo que propriedades rurais
          mantenham percentuais mínimos de vegetação nativa.
        </p>
        <p>
          O Sistema Nacional de Unidades de Conservação (SNUC, Lei 9.985/2000) organiza as áreas
          protegidas em unidades de proteção integral (parques, reservas biológicas) e de uso
          sustentável (florestas nacionais, reservas extrativistas). O IBAMA e o ICMBio são os
          principais órgãos federais de fiscalização e gestão ambiental. A Lei de Crimes Ambientais
          (Lei 9.605/1998) estabelece penas para condutas lesivas ao meio ambiente.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Acordos internacionais</span>
        <h2>9. Conferências e acordos internacionais sobre meio ambiente</h2>
        <p>
          A preocupação ambiental global ganhou força a partir das décadas de 1960 e 1970. A
          Conferência de Estocolmo (1972) foi o marco inaugural da diplomacia ambiental, criando o
          Programa das Nações Unidas para o Meio Ambiente (PNUMA). A Rio-92 (ECO-92), realizada no
          Rio de Janeiro, produziu a Agenda 21, a Convenção sobre Biodiversidade e a Convenção do
          Clima.
        </p>
        <p>
          O Protocolo de Quioto (1997) foi o primeiro acordo juridicamente vinculante para reduzir
          emissões de gases de efeito estufa dos países industrializados. O Acordo de Paris (2015)
          substituiu Quioto e estabeleceu a meta de limitar o aquecimento global a 1,5°C acima dos
          níveis pré-industriais, com contribuições voluntárias de todos os países (NDCs). A COP
          (Conferência das Partes) reúne anualmente os signatários para avaliar os progressos.
        </p>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Perspectiva geográfica</span>
        <h2>10. Injustiça ambiental e vulnerabilidade socioterritorial</h2>
        <p>
          Os impactos ambientais não afetam a todos de forma igual. O conceito de injustiça ambiental
          revela que as populações mais pobres e marginalizadas — povos indígenas, quilombolas,
          ribeirinhos, moradores de periferias urbanas — são desproporcionalmente expostas à poluição,
          às enchentes e à escassez de recursos naturais. As indústrias poluentes tendem a se instalar
          próximas a comunidades de baixa renda, que têm menor capacidade de resistência política.
        </p>
        <p>
          A vulnerabilidade socioterritorial é amplificada pelas mudanças climáticas: eventos extremos
          como secas prolongadas, ciclones e inundações atingem com mais força as populações sem
          acesso a moradias seguras, saneamento e serviços públicos de saúde. O enfrentamento dos
          problemas ambientais, portanto, exige uma abordagem que articule justiça social e
          sustentabilidade ecológica.
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
              O efeito estufa é um fenômeno natural fundamental para a manutenção da vida na Terra.
              Entretanto, as atividades humanas têm intensificado esse processo, levando ao aquecimento
              global. Assinale a alternativa que apresenta corretamente os gases responsáveis pelo
              aumento do efeito estufa antropogênico.
            </p>
          }
          options={[
            { letter: "a", text: "Oxigênio (O₂) e nitrogênio (N₂), liberados pela respiração." },
            { letter: "b", text: "Dióxido de carbono (CO₂), metano (CH₄) e óxido nitroso (N₂O), provenientes de queima de combustíveis e atividades agropecuárias.", correct: true },
            { letter: "c", text: "Ozônio (O₃) e hélio (He), lançados por aerossóis industriais." },
            { letter: "d", text: "Hidrogênio (H₂) e argônio (Ar), emitidos pela atividade vulcânica." },
            { letter: "e", text: "Vapor d'água e oxigênio, exclusivamente liberados pelas florestas tropicais." },
          ]}
          resolution={
            <p>
              Os principais gases de efeito estufa de origem antrópica são o dióxido de carbono (CO₂),
              oriundo da queima de combustíveis fósseis e do desmatamento; o metano (CH₄), produzido
              pela pecuária bovina, cultivo de arroz inundado e aterros; e o óxido nitroso (N₂O),
              gerado pelo uso de fertilizantes nitrogenados. O oxigênio e o nitrogênio compõem a maior
              parte da atmosfera, mas não são gases de efeito estufa significativos. Portanto, a
              alternativa correta é a letra B.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              A eutrofização é um processo que afeta corpos d'água em várias regiões do Brasil.
              Sobre esse fenômeno, assinale a alternativa correta.
            </p>
          }
          options={[
            { letter: "a", text: "É causada pela redução de temperatura da água, que estimula o crescimento de peixes." },
            { letter: "b", text: "Resulta do excesso de sedimentos de construção civil depositados em rios." },
            { letter: "c", text: "Ocorre quando a escassez de nutrientes prejudica o crescimento das plantas aquáticas." },
            { letter: "d", text: "É provocada pelo excesso de nutrientes (nitrogênio e fósforo), que causa proliferação de algas, consumo do oxigênio dissolvido e morte de organismos aquáticos.", correct: true },
            { letter: "e", text: "Representa a recuperação natural de um ecossistema aquático após período de seca." },
          ]}
          resolution={
            <p>
              A eutrofização é um processo de enriquecimento excessivo de corpos d'água por nutrientes,
              especialmente nitrogênio e fósforo, provenientes principalmente de fertilizantes agrícolas
              e esgotos domésticos. Esse excesso estimula a proliferação desordenada de algas (floração
              de cianobactérias ou algas verdes), que ao morrer são decompostas por bactérias aeróbicas,
              consumindo o oxigênio dissolvido. A falta de oxigênio leva à morte de peixes e outros
              organismos, gerando zonas hipóxicas ou anóxicas. A alternativa D descreve corretamente
              esse processo.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              (ENEM adaptado) O "Arco do Desmatamento" é uma expressão usada para designar a faixa de
              maior devastação florestal na Amazônia brasileira. Considerando as causas e consequências
              desse processo, analise as afirmativas:
              <br /><br />
              I. A pecuária extensiva é apontada como a principal causa do desmatamento amazônico,
              respondendo por cerca de 80% da área desmatada.<br />
              II. O desmatamento reduz o ciclo hidrológico regional, pois as florestas são fundamentais
              para a formação dos "rios voadores" que transportam umidade para o Centro-Sul do Brasil.<br />
              III. O desmatamento beneficia igualmente todas as regiões, pois aumenta a área disponível
              para agricultura e gera empregos sem impactos negativos.
              <br /><br />
              Estão corretas apenas:
            </p>
          }
          options={[
            { letter: "a", text: "I apenas." },
            { letter: "b", text: "III apenas." },
            { letter: "c", text: "I e II apenas.", correct: true },
            { letter: "d", text: "II e III apenas." },
            { letter: "e", text: "I, II e III." },
          ]}
          resolution={
            <p>
              A afirmativa I é verdadeira: estudos do INPE e do MapBiomas confirmam que a pecuária
              extensiva ocupa a maior parte das áreas desmatadas na Amazônia. A afirmativa II também é
              verdadeira: as florestas tropicais liberam grandes quantidades de vapor d'água pela
              evapotranspiração, formando os "rios voadores" que são fundamentais para as chuvas no
              Centro-Oeste e Sudeste. O desmatamento reduz esse fluxo, contribuindo para secas.
              A afirmativa III é falsa: o desmatamento gera sérios impactos negativos — perda de
              biodiversidade, erosão, empobrecimento do solo e conflitos socioambientais. Portanto,
              a resposta correta é a alternativa C (I e II apenas).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              A Política Nacional de Resíduos Sólidos (Lei 12.305/2010) estabelece uma hierarquia
              de prioridades para a gestão de resíduos. De acordo com essa política, qual é a ordem
              correta de prioridade, da mais para a menos prioritária?
            </p>
          }
          options={[
            { letter: "a", text: "Reciclagem → Reutilização → Redução → Não geração → Tratamento → Disposição final." },
            { letter: "b", text: "Disposição final → Tratamento → Reciclagem → Reutilização → Redução → Não geração." },
            { letter: "c", text: "Não geração → Redução → Reutilização → Reciclagem → Tratamento → Disposição final.", correct: true },
            { letter: "d", text: "Tratamento → Reciclagem → Redução → Reutilização → Não geração → Disposição final." },
            { letter: "e", text: "Reciclagem → Tratamento → Disposição final → Redução → Reutilização → Não geração." },
          ]}
          resolution={
            <p>
              A PNRS (Lei 12.305/2010) estabelece a seguinte ordem de prioridade: (1) Não geração —
              evitar produzir resíduos; (2) Redução — minimizar a geração; (3) Reutilização — usar
              o produto novamente sem transformação; (4) Reciclagem — transformar o resíduo em novo
              produto; (5) Tratamento — compostagem, incineração com aproveitamento energético;
              (6) Disposição final ambientalmente adequada — aterro sanitário, apenas quando as
              demais alternativas forem inviáveis. Essa hierarquia reflete o princípio dos 3R's
              ampliado, priorizando a prevenção sobre o tratamento. A alternativa C está correta.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              (ENEM adaptado) A desertificação é um dos processos de degradação ambiental mais graves
              que afetam o Semiárido brasileiro. Sobre esse fenômeno e sua relação com fatores
              naturais e humanos, assinale a alternativa correta.
            </p>
          }
          options={[
            { letter: "a", text: "A desertificação no Brasil afeta principalmente a Amazônia, devido ao desmatamento tropical úmido." },
            { letter: "b", text: "É um processo exclusivamente natural, causado por variações climáticas globais independentes da ação humana." },
            { letter: "c", text: "Ocorre apenas em regiões com clima desértico consolidado, sendo impossível em áreas semiáridas." },
            { letter: "d", text: "A desertificação resulta da combinação de fatores climáticos naturais (semiárido, irregularidade das chuvas) com pressões humanas (superpastoreio, extração de lenha, agricultura sem manejo), e afeta principalmente o Nordeste do Brasil, com núcleos em estados como Piauí, Ceará e Pernambuco.", correct: true },
            { letter: "e", text: "O processo de desertificação é facilmente revertido com o simples abandono das atividades agropecuárias por um período de 5 anos." },
          ]}
          resolution={
            <p>
              A desertificação no contexto brasileiro ocorre no Semiárido nordestino, onde o clima
              já é naturalmente estressante (baixas precipitações, irregular distribuição das chuvas,
              altas taxas de evapotranspiração). A pressão humana — superpastoreio, retirada da
              vegetação para lenha, agricultura sem práticas conservacionistas — acelera o processo
              de degradação do solo, tornando-o improdutivo e semelhante a um deserto. Os principais
              núcleos de desertificação identificados no Brasil estão em Gilbués (PI), Irauçuba (CE),
              Seridó (RN/PB) e Cabrobó (PE). A reversão é difícil, lenta e cara, exigindo décadas de
              manejo sustentável e reflorestamento. A alternativa D é a correta.
            </p>
          }
        />
      </section>
    </article>
  );
}
