"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap12Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 12</span>
          <h1>Climas do Brasil e do mundo</h1>
          <p>
            A diversidade climática da Terra é resultado da interação entre latitude, altitude,
            massas de ar, correntes oceânicas e relevo. O Brasil, por sua extensão territorial e
            posição predominantemente tropical, abriga seis grandes tipos climáticos, do equatorial
            úmido da Amazônia ao subtropical do extremo sul. No cenário global, a classificação
            climática permite compreender por que determinadas regiões são desertos, florestas
            tropicais ou campos temperados, relacionando clima, vegetação e ocupação humana numa
            perspectiva integrada essencial para o ENEM.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Classificação climática</span>
        <h2>1. Sistemas de classificação climática</h2>
        <p>
          Classificar climas significa agrupar regiões com características atmosféricas semelhantes.
          O sistema mais utilizado mundialmente é o de <strong>Köppen-Geiger</strong>, que combina
          temperatura e precipitação médias para definir grandes zonas climáticas identificadas por
          letras. O sistema foi proposto por Wladimir Köppen em 1900 e revisado por Rudolf Geiger.
        </p>
        <p>
          No Brasil, as classificações mais utilizadas nos vestibulares são as de{" "}
          <strong>Strahler</strong> e a classificação do{" "}
          <strong>IBGE</strong>, que reconhecem seis tipos climáticos: equatorial, tropical,
          tropical semiárido, tropical de altitude, tropical atlântico (ou úmido) e subtropical.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais grupos climáticos de Köppen e características</caption>
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Código</th>
                <th>Característica principal</th>
                <th>Exemplo de região</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tropical</td>
                <td>A</td>
                <td>Temperatura média &gt; 18°C em todos os meses; sem inverno</td>
                <td>Amazônia, Centro-Oeste brasileiro</td>
              </tr>
              <tr>
                <td>Árido/Semiárido</td>
                <td>B</td>
                <td>Precipitação insuficiente para sustentar vegetação densa</td>
                <td>Saara, Nordeste semiárido, Atacama</td>
              </tr>
              <tr>
                <td>Temperado oceânico</td>
                <td>C</td>
                <td>Inverno suave; nenhum mês com média abaixo de -3°C</td>
                <td>Sul do Brasil, Europa Ocidental</td>
              </tr>
              <tr>
                <td>Continental</td>
                <td>D</td>
                <td>Pelo menos um mês com média abaixo de -3°C</td>
                <td>Sibéria, Canadá, centro dos EUA</td>
              </tr>
              <tr>
                <td>Polar</td>
                <td>E</td>
                <td>Nenhum mês com temperatura média acima de 10°C</td>
                <td>Antártica, Groenlândia, Ártico</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Climas do Brasil</span>
        <h2>2. Climas brasileiros: visão geral</h2>
        <p>
          O Brasil é um país de enorme diversidade climática. Apesar de 92% do território estar
          abaixo do Trópico de Capricórnio — o que poderia sugerir uniformidade tropical —, a
          combinação de altitude, relevo, correntes oceânicas e massas de ar gera seis tipos
          climáticos distintos, cada um associado a biomas e formas de ocupação específicos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Tipos climáticos do Brasil segundo o IBGE</caption>
            <thead>
              <tr>
                <th>Tipo climático</th>
                <th>Região</th>
                <th>Temperatura média</th>
                <th>Precipitação</th>
                <th>Bioma associado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equatorial</td>
                <td>Norte (Amazônia)</td>
                <td>26–28°C</td>
                <td>2.000–3.500 mm/ano</td>
                <td>Floresta Amazônica</td>
              </tr>
              <tr>
                <td>Tropical</td>
                <td>Centro-Oeste, parte do Nordeste e Sudeste</td>
                <td>20–25°C</td>
                <td>1.000–1.500 mm/ano (2 estações)</td>
                <td>Cerrado</td>
              </tr>
              <tr>
                <td>Tropical semiárido</td>
                <td>Interior do Nordeste</td>
                <td>23–27°C</td>
                <td>&lt;800 mm/ano (irregular)</td>
                <td>Caatinga</td>
              </tr>
              <tr>
                <td>Tropical de altitude</td>
                <td>Planaltos do SE e Sul (acima de 800 m)</td>
                <td>17–22°C</td>
                <td>1.200–1.800 mm/ano</td>
                <td>Mata Atlântica de altitude</td>
              </tr>
              <tr>
                <td>Tropical atlântico (úmido)</td>
                <td>Faixa litorânea L do Nordeste ao SE</td>
                <td>22–26°C</td>
                <td>1.000–2.000 mm/ano</td>
                <td>Mata Atlântica</td>
              </tr>
              <tr>
                <td>Subtropical</td>
                <td>Sul (PR, SC, RS)</td>
                <td>15–22°C</td>
                <td>1.500–2.000 mm/ano (bem distribuída)</td>
                <td>Mata de Araucárias / Campos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG – Mapa climático esquemático do Brasil */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="400" fill="#f5f5f5" rx="12" />
          <text x="300" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a237e">
            Distribuição esquemática dos climas no Brasil
          </text>
          {/* silhueta simplificada do Brasil */}
          {/* Norte – Equatorial */}
          <ellipse cx="220" cy="130" rx="130" ry="70" fill="#2e7d32" opacity="0.8" />
          <text x="220" y="120" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Equatorial</text>
          <text x="220" y="135" textAnchor="middle" fontSize="10" fill="#c8e6c9">(Norte / Amazônia)</text>
          {/* Nordeste – Semiárido */}
          <ellipse cx="420" cy="160" rx="80" ry="55" fill="#f9a825" opacity="0.85" />
          <text x="420" y="152" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Semiárido</text>
          <text x="420" y="167" textAnchor="middle" fontSize="10" fill="#fff">(interior NE)</text>
          {/* Centro-Oeste – Tropical */}
          <ellipse cx="250" cy="240" rx="100" ry="55" fill="#66bb6a" opacity="0.85" />
          <text x="250" y="232" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Tropical</text>
          <text x="250" y="248" textAnchor="middle" fontSize="10" fill="#e8f5e9">(C-Oeste / Cerrado)</text>
          {/* Litoral NE – Tropical atlântico */}
          <rect x="380" y="200" width="90" height="60" rx="8" fill="#ab47bc" opacity="0.82" />
          <text x="425" y="227" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Trop. Atlântico</text>
          <text x="425" y="243" textAnchor="middle" fontSize="9" fill="#f3e5f5">(litoral E)</text>
          {/* Sudeste – Tropical altitude */}
          <rect x="320" y="270" width="100" height="55" rx="8" fill="#1976d2" opacity="0.8" />
          <text x="370" y="295" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Trop. Altitude</text>
          <text x="370" y="310" textAnchor="middle" fontSize="9" fill="#e3f2fd">(SE planaltos)</text>
          {/* Sul – Subtropical */}
          <ellipse cx="280" cy="340" rx="85" ry="40" fill="#5c6bc0" opacity="0.85" />
          <text x="280" y="335" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Subtropical</text>
          <text x="280" y="350" textAnchor="middle" fontSize="10" fill="#e8eaf6">(Sul: PR, SC, RS)</text>
          {/* Legenda */}
          <text x="300" y="390" textAnchor="middle" fontSize="10" fill="#555">
            Representação esquemática — posições aproximadas dos tipos climáticos
          </text>
        </svg>
        <figcaption>
          Distribuição esquemática dos seis tipos climáticos do Brasil segundo o IBGE, associados
          às principais regiões e biomas do país.
        </figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Clima equatorial</span>
        <h2>3. Clima equatorial brasileiro</h2>
        <p>
          O clima equatorial ocupa a maior parte da Amazônia e caracteriza-se por temperaturas
          elevadas e constantes ao longo do ano (sem estações bem definidas), com médias entre
          26°C e 28°C, e por precipitações abundantes (superiores a 2.000 mm anuais), bem
          distribuídas ao longo do ano ou com uma breve estação menos chuvosa.
        </p>
        <p>
          Esse clima é controlado pela <strong>Massa Equatorial Continental (mEc)</strong>, que
          aquece e carrega vapor d'água em grande quantidade, gerando intensa convecção e chuvas
          diárias no período da tarde. A cobertura vegetal densa da floresta amazônica contribui
          para a manutenção da umidade por meio da <strong>evapotranspiração</strong> e dos{" "}
          <strong>rios voadores</strong> — fluxos de vapor d'água que transportam umidade para o
          sul e sudeste do país.
        </p>
        <p>
          A destruição da floresta por desmatamento reduz a evapotranspiração, podendo provocar a
          chamada <strong>savanização da Amazônia</strong> — transformação da floresta em savana
          por redução das chuvas, fenômeno que representa risco climático de escala continental.
        </p>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Semiárido</span>
        <h2>4. Clima tropical semiárido (Nordeste)</h2>
        <p>
          O semiárido brasileiro ocupa cerca de 1,03 milhão de km² no interior do Nordeste,
          abrangendo partes de oito estados e do norte de Minas Gerais. É caracterizado por
          precipitações irregulares e inferiores a 800 mm anuais, alta evaporação, altas
          temperaturas (médias entre 23°C e 27°C) e longos períodos de estiagem — as secas.
        </p>
        <p>
          A irregularidade das chuvas está ligada à posição da{" "}
          <strong>Zona de Convergência Intertropical (ZCIT)</strong>, que determina a estação chuvosa
          (fevereiro a maio) quando se desloca para o sul. Anos em que a ZCIT não avança
          suficientemente correspondem a secas severas. O fenômeno <strong>El Niño</strong> tende a
          reduzir as chuvas no Nordeste; <strong>La Niña</strong>, a aumentá-las.
        </p>
        <p>
          A vegetação adaptada é a <strong>Caatinga</strong> — bioma exclusivamente brasileiro,
          com plantas xerófilas (cactáceas, bromélias, árvores deciduais) adaptadas à escassez de
          água. As políticas de convivência com o semiárido (cisternas, dessalinizadores, sistemas
          de irrigação) buscam garantir qualidade de vida às populações locais sem eliminá-las.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sul do Brasil</span>
        <h2>5. Clima subtropical brasileiro</h2>
        <p>
          O Sul do Brasil (Paraná, Santa Catarina e Rio Grande do Sul) apresenta clima subtropical
          úmido, caracterizado por quatro estações bem definidas, geadas frequentes no inverno e
          temperaturas médias inferiores a 18°C nos meses mais frios. As precipitações são bem
          distribuídas ao longo do ano (sem estação seca definida), totalizando entre 1.500 e
          2.000 mm anuais.
        </p>
        <p>
          As nevadas são possíveis nas áreas serranas de SC e RS (Serra Gaúcha, Planalto Catarinense),
          especialmente quando irruem massas da <strong>Polar Atlântica (mPa)</strong>. O frio intenso
          associado ao fenômeno das <strong>geadas tardias</strong> pode destruir colheitas de café e
          soja, impactando a economia agropecuária regional.
        </p>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Climas do mundo</span>
        <h2>6. Climas zonais mundiais</h2>
        <p>
          Em escala global, os climas organizam-se em faixas relacionadas à latitude — os chamados
          climas zonais. Essa zonalidade é perturbada por fatores locais (relevo, correntes
          oceânicas, continentalidade), gerando os climas azonais.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Climas mundiais, características e localização</caption>
            <thead>
              <tr>
                <th>Tipo climático</th>
                <th>Faixa latitudinal</th>
                <th>Características</th>
                <th>Exemplo de localização</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equatorial</td>
                <td>0° a 10°</td>
                <td>Quente e úmido o ano todo; sem estação seca</td>
                <td>Bacia Amazônica, Congo, Indonésia</td>
              </tr>
              <tr>
                <td>Tropical úmido e seco</td>
                <td>10° a 20°</td>
                <td>2 estações; chuvas no verão; seca no inverno</td>
                <td>Brasil Central, África do Este, Índia</td>
              </tr>
              <tr>
                <td>Desértico</td>
                <td>20° a 30°</td>
                <td>Precipitação &lt;250 mm; amplitude térmica diária alta</td>
                <td>Saara, Atacama, Arábia, Austrália central</td>
              </tr>
              <tr>
                <td>Mediterrâneo</td>
                <td>30° a 40°</td>
                <td>Verão seco e quente; inverno chuvoso e ameno</td>
                <td>Bacia do Mediterrâneo, CA (EUA), Chile central</td>
              </tr>
              <tr>
                <td>Temperado oceânico</td>
                <td>40° a 60°</td>
                <td>Chuvas bem distribuídas; amplitude moderada</td>
                <td>Europa Ocidental, Chile sul, Nova Zelândia</td>
              </tr>
              <tr>
                <td>Temperado continental</td>
                <td>40° a 60° (interior)</td>
                <td>Grande amplitude; invernos rigorosos; verões quentes</td>
                <td>Interior dos EUA, Rússia, centro da China</td>
              </tr>
              <tr>
                <td>Subpolar / Tundra</td>
                <td>60° a 80°</td>
                <td>Invernos muito frios; verões breves; permafrost</td>
                <td>Alasca, norte do Canadá, Sibéria</td>
              </tr>
              <tr>
                <td>Polar</td>
                <td>Acima de 80°</td>
                <td>Temperaturas sempre negativas; gelo permanente</td>
                <td>Antártica, Ártico</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG – Faixas climáticas zonais */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 310" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="310" fill="#fafafa" rx="12" />
          <text x="300" y="26" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a237e">
            Zonalidade climática mundial (por faixa latitudinal)
          </text>
          {/* faixas climáticas */}
          {[
            { y: 38, h: 22, fill: "#b2dfdb", label: "Polar / Tundra (80°–90°)" },
            { y: 60, h: 22, fill: "#80cbc4", label: "Subpolar (60°–80°)" },
            { y: 82, h: 26, fill: "#a5d6a7", label: "Temperado oceânico e continental (40°–60°)" },
            { y: 108, h: 22, fill: "#fff176", label: "Mediterrâneo (30°–40°)" },
            { y: 130, h: 22, fill: "#ffb300", label: "Desértico (20°–30°)" },
            { y: 152, h: 26, fill: "#66bb6a", label: "Tropical úmido e seco (10°–20°)" },
            { y: 178, h: 24, fill: "#2e7d32", label: "Equatorial (0°–10°)" },
            { y: 202, h: 26, fill: "#66bb6a", label: "Tropical úmido e seco (10°–20°) HS" },
            { y: 228, h: 22, fill: "#ffb300", label: "Desértico (20°–30°) HS" },
            { y: 250, h: 22, fill: "#fff176", label: "Mediterrâneo (30°–40°) HS" },
            { y: 272, h: 22, fill: "#a5d6a7", label: "Temperado (40°–60°) HS" },
          ].map(({ y, h, fill, label }) => (
            <g key={y}>
              <rect x="80" y={y} width="350" height={h} fill={fill} stroke="#ddd" strokeWidth="0.5" />
              <text x="440" y={y + h / 2 + 4} fontSize="9.5" fill="#333">
                {label}
              </text>
            </g>
          ))}
          {/* eixo latitude */}
          <line x1="78" y1="38" x2="78" y2="294" stroke="#555" strokeWidth="1.5" />
          <text x="40" y="181" textAnchor="middle" fontSize="10" fill="#555" transform="rotate(-90,40,181)">
            Latitude
          </text>
          {/* equador */}
          <line x1="78" y1="190" x2="432" y2="190" stroke="#e53935" strokeWidth="1.5" strokeDasharray="4,2" />
          <text x="60" y="193" fontSize="9" fill="#e53935" fontWeight="bold">0°</text>
        </svg>
        <figcaption>
          Zonalidade climática global: os climas se organizam em faixas simétricas em relação ao
          equador, perturbadas por fatores locais como relevo e correntes oceânicas.
        </figcaption>
      </figure>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Clima mediterrâneo</span>
        <h2>7. Clima mediterrâneo e suas particularidades</h2>
        <p>
          O clima mediterrâneo é um dos mais peculiares do planeta por sua inversão sazonal: as
          chuvas se concentram no inverno (ao contrário da maioria dos climas tropicais, onde chove
          no verão). Isso ocorre porque no verão, a expansão das células de alta pressão subtropicais
          bloqueia a entrada de sistemas frontais; no inverno, esses sistemas avançam pelas
          latitudes médias, trazendo precipitação.
        </p>
        <p>
          A vegetação típica é o <strong>maquis</strong> (mediterrâneo europeu) ou{" "}
          <strong>chaparral</strong> (Califórnia) — arbustos e árvores esclerófilas adaptadas à
          seca estival. Esse clima favorece a viticultura (uvas para vinho), o cultivo de
          oliveiras e frutas cítricas. Ocorre em cinco regiões do mundo: Bacia do Mediterrâneo,
          Califórnia, Chile central, sul da Austrália e extremo sul da África (região do Cabo).
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">El Niño e La Niña</span>
        <h2>8. ENOS: El Niño e La Niña</h2>
        <p>
          O <strong>ENOS (El Niño-Oscilação Sul)</strong> é o principal padrão de variabilidade
          climática interanual do planeta, resultante da interação entre oceano e atmosfera no
          Pacífico tropical. Afeta o regime de chuvas de regiões em todos os continentes.
        </p>
        <ul>
          <li>
            <strong>El Niño:</strong> aquecimento anormal das águas superficiais do Pacífico
            equatorial central e oriental. Desloca o centro de convecção para o leste, causando
            seca no Nordeste brasileiro, aumento de chuvas no Sul do Brasil, seca na Austrália e
            Indonesia, e diminuição de furacões no Atlântico Norte.
          </li>
          <li>
            <strong>La Niña:</strong> resfriamento anormal do Pacífico equatorial. Efeitos inversos:
            aumento de chuvas no Nordeste, seca no Sul do Brasil, chuvas intensas na Austrália e
            maior atividade de furacões no Atlântico.
          </li>
        </ul>
        <p>
          O ciclo ENOS tem período de 3 a 7 anos e impacta diretamente a produção agrícola, o
          abastecimento de reservatórios e a geração de energia hidrelétrica no Brasil.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Variabilidade e tendências</span>
        <h2>9. Clima e variabilidade: tendências atuais</h2>
        <p>
          Os climas do mundo estão mudando em função do aquecimento global. Observa-se a expansão
          das zonas áridas (desertificação avança nos trópicos), recuo das geleiras e do gelo
          ártico, alteração dos regimes de precipitação (chuvas mais intensas e concentradas em
          menor número de dias, com períodos de seca mais longos) e aumento da frequência e
          intensidade de eventos extremos (furacões, ondas de calor, enchentes, secas).
        </p>
        <p>
          Para o Brasil, as projeções climáticas indicam aumento das temperaturas em todo o
          território, intensificação da seca no Nordeste e Amazônia oriental, e aumento da
          frequência de eventos extremos no Sudeste e Sul. A região semiárida, que já sofre com
          a escassez hídrica, é considerada uma das mais vulneráveis do país às mudanças climáticas.
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
              Uma região brasileira apresenta as seguintes características: temperatura média anual
              de 27°C, precipitação superior a 2.500 mm distribuídos ao longo de todo o ano, sem
              estação seca definida, e cobertura vegetal de floresta densa. Com base nessas
              informações, o tipo climático que corresponde a essa região é:
            </p>
          }
          options={[
            { letter: "a", text: "Subtropical, por apresentar temperaturas elevadas e chuvas abundantes." },
            { letter: "b", text: "Tropical semiárido, por ter precipitação irregular concentrada em poucos meses." },
            { letter: "c", text: "Equatorial, por apresentar temperatura elevada o ano todo e chuvas abundantes sem estação seca definida.", correct: true },
            { letter: "d", text: "Tropical de altitude, por ter temperaturas amenas e chuvas bem distribuídas." },
            { letter: "e", text: "Mediterrâneo, por ter chuvas distribuídas no período de inverno." },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra C. O clima equatorial é caracterizado por
              temperaturas médias elevadas (acima de 24°C ao longo do ano), sem variação sazonal
              significativa, e por precipitações abundantes (geralmente acima de 2.000 mm anuais)
              distribuídas ao longo de todos os meses, sem estação seca definida. Essa combinação
              sustenta a floresta densa, como a Amazônia. O clima subtropical (C) tem inverno
              definido; o semiárido (B) tem precipitação inferior a 800 mm; o de altitude apresenta
              temperaturas mais amenas; e o mediterrâneo tem verão seco.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              O interior do Nordeste brasileiro apresenta um dos mais peculiares contextos
              climáticos do país: apesar de estar em região tropical, com temperaturas médias
              superiores a 25°C, apresenta precipitação inferior a 800 mm anuais, distribuída de
              forma muito irregular. Qual bioma está associado a essas condições climáticas e quais
              adaptações suas plantas desenvolveram para sobreviver?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Cerrado — plantas com raízes profundas e folhas cerosas que retêm água.",
            },
            {
              letter: "b",
              text: "Caatinga — plantas xerófilas com folhas reduzidas, espinhos, raízes superficiais extensas e caules suculentos para armazenar água.",
              correct: true,
            },
            {
              letter: "c",
              text: "Mata Atlântica — plantas com folhas largas adaptadas a longa exposição solar.",
            },
            {
              letter: "d",
              text: "Pampa — gramíneas com alta resistência ao frio e à seca do inverno subtropical.",
            },
            {
              letter: "e",
              text: "Floresta Amazônica — plantas com grandes folhas para maximizar a fotossíntese em ambiente de sombra.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra B. A Caatinga é o bioma exclusivo do semiárido
              brasileiro, adaptado às condições de escassez hídrica. Suas plantas (xerófilas) têm
              adaptações como: folhas pequenas ou transformadas em espinhos (reduzem a
              transpiração), raízes superficiais extensas (captam a água das chuvas rápidas),
              caules suculentos (cactáceas armazenam água), e mecanismo de dormência (perdem folhas
              no período seco — caducifólias). A Caatinga é o único bioma totalmente inserido no
              território brasileiro.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              O fenômeno El Niño afeta os padrões climáticos de diversas regiões do mundo. No que
              se refere especificamente ao Brasil, os efeitos do El Niño podem ser descritos como:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Aumento de precipitações no Nordeste e redução de chuvas na região Sul.",
            },
            {
              letter: "b",
              text: "Redução de chuvas no Nordeste (seca) e aumento de precipitação na região Sul (maior risco de enchentes).",
              correct: true,
            },
            {
              letter: "c",
              text: "Redução de temperaturas em todo o território nacional, com aumento de geadas no Sudeste.",
            },
            {
              letter: "d",
              text: "Aumento das chuvas na Amazônia e redução das precipitações na Mata Atlântica.",
            },
            {
              letter: "e",
              text: "El Niño afeta apenas o Pacífico e não tem impacto significativo sobre o território brasileiro.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra B. Durante anos de El Niño, o aquecimento anormal
              do Pacífico equatorial altera os padrões de circulação atmosférica global. No Brasil,
              os efeitos mais claros são: (1) redução das chuvas no Nordeste — os sistemas de
              chuva que normalmente chegam à região são deslocados; e (2) aumento das precipitações
              no Sul do Brasil, com maior risco de enchentes, especialmente no Rio Grande do Sul.
              Esses padrões têm impactos diretos na agricultura, na geração de energia hidrelétrica
              e na segurança hídrica do país.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              O clima mediterrâneo é encontrado em cinco regiões do mundo, todas elas entre 30° e
              40° de latitude nas faces ocidentais dos continentes. Uma de suas características
              mais distintivas é a inversão do ritmo pluviométrico em relação à maioria dos climas
              tropicais. Qual é essa característica e qual é a sua explicação dinâmica?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "As chuvas se concentram no verão, pois o aquecimento do solo intensifica a convecção.",
            },
            {
              letter: "b",
              text: "As chuvas se concentram no inverno, porque os sistemas frontais das latitudes médias avançam sobre a região durante essa estação, enquanto no verão a expansão das células de alta pressão subtropical bloqueia as precipitações.",
              correct: true,
            },
            {
              letter: "c",
              text: "As chuvas são uniformemente distribuídas ao longo do ano, semelhantes ao clima oceânico.",
            },
            {
              letter: "d",
              text: "As chuvas se concentram no outono, quando correntes oceânicas quentes aquecen o ar costeiro.",
            },
            {
              letter: "e",
              text: "As chuvas ocorrem exclusivamente em forma de neve no inverno e de granizo no verão.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra B. O ritmo pluviométrico do clima mediterrâneo é
              inverso ao dos climas tropicais: chove no inverno e o verão é seco. Essa dinâmica se
              explica pelo movimento sazonal das células de alta pressão subtropicais (anticiclones):
              no verão, essas células se expandem em direção aos polos e bloqueiam a penetração de
              frentes frias e chuvas; no inverno, recuam em direção ao equador, permitindo que os
              sistemas frontais das latitudes médias avancem e tragam precipitação. Essa
              sazonalidade favorece culturas como vinha, oliveira e trigo de inverno.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              (Adaptado) Pesquisadores do clima afirmam que o desmatamento da Amazônia pode levar
              à "savanização" da floresta — sua transformação gradual em savana (similar ao Cerrado
              ou à savana africana). Essa afirmação baseia-se no papel da própria floresta na
              manutenção do clima regional. Com base nos conhecimentos sobre clima equatorial e
              dinâmica atmosférica, qual é o mecanismo pelo qual a floresta amazônica influencia
              seu próprio regime de chuvas?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A floresta absorve dióxido de carbono da atmosfera, reduzindo o efeito estufa e mantendo temperaturas baixas que favorecem a condensação.",
            },
            {
              letter: "b",
              text: "A floresta produz aerossóis naturais que agem como núcleos de condensação, mas esse mecanismo é secundário e não influencia significativamente as chuvas regionais.",
            },
            {
              letter: "c",
              text: "Por meio da evapotranspiração, a floresta libera grandes volumes de vapor d'água na atmosfera, alimentando os 'rios voadores' — fluxos aéreos de umidade que geram chuvas na Amazônia e em regiões ao sul. O desmatamento reduz esse ciclo, diminuindo as chuvas na própria região.",
              correct: true,
            },
            {
              letter: "d",
              text: "A floresta bloqueia mecanicamente os ventos alísios, forçando a ascensão do ar e a precipitação na borda da floresta.",
            },
            {
              letter: "e",
              text: "A sombra proporcionada pelas copas das árvores reduz a temperatura do solo, impedindo a evaporação e mantendo a umidade subsuperficial que alimenta os rios.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra C. A floresta amazônica funciona como uma bomba
              biótica de umidade: por evapotranspiração (evaporação do solo + transpiração das
              plantas), libera enormes volumes de vapor d'água na atmosfera — estimados em 20
              bilhões de toneladas por dia. Esse vapor forma os chamados "rios voadores", que
              transportam umidade para o sul e sudeste do Brasil, alimentando as chuvas nessas
              regiões. Quando a floresta é desmatada, a evapotranspiração cai, a umidade regional
              diminui, as chuvas reduzem e a própria floresta enfrenta estresse hídrico. Estudos
              indicam que existe um "ponto de inflexão" (tipping point) a partir do qual o
              desmatamento se torna irreversível, levando à savanização.
            </p>
          }
        />
      </section>
    </article>
  );
}
