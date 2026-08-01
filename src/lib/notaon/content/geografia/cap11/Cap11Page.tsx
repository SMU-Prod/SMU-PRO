"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap11Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 11</span>
          <h1>Atmosfera, elementos e fatores climáticos</h1>
          <p>
            A atmosfera terrestre é a camada gasosa que envolve o planeta, essencial para a
            manutenção da vida, a regulação da temperatura e a proteção contra a radiação solar
            ultravioleta. O clima — padrão médio do tempo atmosférico ao longo de décadas — resulta
            da interação entre elementos climáticos (temperatura, precipitação, pressão, ventos e
            umidade) e fatores climáticos (latitude, altitude, maritimidade, continentalidade,
            correntes oceânicas e vegetação). Compreender esses componentes é fundamental para
            interpretar a diversidade de paisagens naturais e os impactos humanos sobre o sistema
            climático global.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">A camada gasosa</span>
        <h2>1. Estrutura da atmosfera terrestre</h2>
        <p>
          A atmosfera é composta por camadas concêntricas com características distintas de
          temperatura, pressão e composição química. Essa estrutura em camadas é fundamental para
          entender fenômenos como o efeito estufa, a reflexão de ondas de rádio e a proteção contra
          raios ultravioleta.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Camadas da atmosfera e suas características principais</caption>
            <thead>
              <tr>
                <th>Camada</th>
                <th>Altitude aproximada</th>
                <th>Características e fenômenos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Troposfera</td>
                <td>0 – 12 km</td>
                <td>Onde ocorre o tempo atmosférico; temperatura diminui com altitude</td>
              </tr>
              <tr>
                <td>Estratosfera</td>
                <td>12 – 50 km</td>
                <td>Contém a camada de ozônio; temperatura aumenta com altitude</td>
              </tr>
              <tr>
                <td>Mesosfera</td>
                <td>50 – 80 km</td>
                <td>Temperatura cai; meteoros se desintegram aqui</td>
              </tr>
              <tr>
                <td>Termosfera</td>
                <td>80 – 700 km</td>
                <td>Temperatura eleva-se muito; aurora boreal; satélites orbitam</td>
              </tr>
              <tr>
                <td>Exosfera</td>
                <td>Acima de 700 km</td>
                <td>Transição para o espaço; partículas esparsas</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A <strong>troposfera</strong> é a camada mais importante para a Geografia, pois é onde
          ocorrem todos os fenômenos meteorológicos: formação de nuvens, precipitações, ventos e
          tempestades. A temperatura diminui com o aumento da altitude (gradiente térmico médio de
          -6,5°C a cada 1.000 m).
        </p>
      </section>

      {/* SVG – Camadas da atmosfera */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="340" fill="#e3f2fd" rx="12" />
          <text x="300" y="26" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#0d47a1">
            Camadas da atmosfera terrestre
          </text>
          {/* camadas de baixo para cima */}
          <rect x="40" y="270" width="520" height="42" fill="#4caf50" rx="4" />
          <text x="300" y="296" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
            Superfície terrestre
          </text>

          <rect x="40" y="230" width="520" height="40" fill="#1565c0" rx="4" />
          <text x="300" y="255" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
            TROPOSFERA (0–12 km) — tempo atmosférico
          </text>

          <rect x="40" y="185" width="520" height="45" fill="#1976d2" rx="4" />
          <text x="300" y="212" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
            ESTRATOSFERA (12–50 km) — camada de ozônio
          </text>

          <rect x="40" y="145" width="520" height="40" fill="#42a5f5" rx="4" />
          <text x="300" y="169" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
            MESOSFERA (50–80 km) — meteoros se desintegram
          </text>

          <rect x="40" y="100" width="520" height="45" fill="#90caf9" rx="4" />
          <text x="300" y="127" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0d47a1">
            TERMOSFERA (80–700 km) — aurora boreal, satélites
          </text>

          <rect x="40" y="58" width="520" height="42" fill="#bbdefb" rx="4" />
          <text x="300" y="83" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0d47a1">
            EXOSFERA (acima de 700 km) — limite com o espaço
          </text>

          {/* estrelas */}
          {[70, 130, 200, 280, 380, 470, 550].map((cx) => (
            <circle key={cx} cx={cx} cy={42} r="2" fill="#fff" />
          ))}
        </svg>
        <figcaption>
          Representação esquemática das camadas da atmosfera terrestre, da superfície ao espaço.
        </figcaption>
      </figure>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Composição do ar</span>
        <h2>2. Composição química da atmosfera</h2>
        <p>
          O ar atmosférico seco é composto principalmente por nitrogênio (N₂) — aproximadamente
          78% — e oxigênio (O₂) — cerca de 21%. Os 1% restantes incluem argônio, dióxido de
          carbono (CO₂), ozônio, vapor d'água e outros gases traço. Embora o CO₂ represente apenas
          0,04% do volume, é o principal gás de efeito estufa de origem antrópica.
        </p>
        <p>
          O <strong>vapor d'água</strong> é o componente mais variável da atmosfera (0 a 4%) e o
          mais poderoso gás de efeito estufa em termos absolutos, sendo responsável por grande parte
          do aquecimento natural do planeta. O <strong>ozônio (O₃)</strong>, presente na
          estratosfera, absorve a radiação ultravioleta nociva, sendo essencial para a vida na
          superfície terrestre.
        </p>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O que define o clima</span>
        <h2>3. Elementos climáticos</h2>
        <p>
          Os <strong>elementos climáticos</strong> são as variáveis que compõem e caracterizam o
          clima de uma região. Eles são mensuráveis e registrados pelas estações meteorológicas ao
          longo do tempo.
        </p>
        <ul>
          <li>
            <strong>Temperatura:</strong> medida em graus Celsius (°C), indica o nível de energia
            térmica do ar. As isotermas são linhas que unem pontos de mesma temperatura média.
          </li>
          <li>
            <strong>Precipitação:</strong> quantidade de água que cai na superfície (chuva, neve,
            granizo). Medida em milímetros (mm). As isóietas ligam pontos de mesma precipitação.
          </li>
          <li>
            <strong>Pressão atmosférica:</strong> força exercida pelo peso da coluna de ar sobre a
            superfície. Medida em milibares (mb) ou hectopascais (hPa). Áreas de baixa pressão
            (ciclones) tendem a ter chuvas; alta pressão (anticiclones), tempo seco.
          </li>
          <li>
            <strong>Umidade relativa do ar:</strong> quantidade de vapor d'água no ar em relação à
            capacidade máxima na mesma temperatura. Expressa em porcentagem.
          </li>
          <li>
            <strong>Ventos:</strong> movimento horizontal do ar de regiões de alta para baixa
            pressão. Caracterizados por direção e velocidade (km/h ou nós).
          </li>
          <li>
            <strong>Nebulosidade:</strong> quantidade de nuvens no céu, que interfere na radiação
            solar e nas temperaturas.
          </li>
        </ul>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Controladores do clima</span>
        <h2>4. Fatores climáticos</h2>
        <p>
          Os <strong>fatores climáticos</strong> são condicionantes que explicam por que os elementos
          climáticos variam de uma região para outra. Diferentemente dos elementos, os fatores são
          características físicas e geográficas relativamente estáveis.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Fatores climáticos e seus efeitos sobre o clima regional</caption>
            <thead>
              <tr>
                <th>Fator</th>
                <th>Como influencia o clima</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Latitude</td>
                <td>Quanto mais próximo do Equador, maior a incidência solar e as temperaturas</td>
                <td>Amazônia (quente) vs. Sul do Chile (frio)</td>
              </tr>
              <tr>
                <td>Altitude</td>
                <td>A cada 100 m de altitude, temperatura cai ~0,65°C</td>
                <td>Teresópolis (RJ, fria) vs. Baixada Fluminense (quente)</td>
              </tr>
              <tr>
                <td>Maritimidade</td>
                <td>Proximidade do mar suaviza temperaturas e aumenta umidade</td>
                <td>Litoral catarinense vs. interior gaúcho</td>
              </tr>
              <tr>
                <td>Continentalidade</td>
                <td>Distância do mar gera maior amplitude térmica e menor precipitação</td>
                <td>Cuiabá (MT): verões quentes, invernos secos</td>
              </tr>
              <tr>
                <td>Correntes oceânicas</td>
                <td>Correntes quentes aumentam temperatura e evaporação; frias reduzem</td>
                <td>Corrente do Brasil (quente) vs. Benguela (fria, Africa)</td>
              </tr>
              <tr>
                <td>Massas de ar</td>
                <td>Grandes volumes de ar com características térmicas e hídricas uniformes</td>
                <td>Massa Equatorial Continental (quente e úmida) na Amazônia</td>
              </tr>
              <tr>
                <td>Relevo</td>
                <td>Serras forçam ascensão do ar (chuva orográfica); vales criam abrigo</td>
                <td>Vertente sotavento da Serra Gaúcha (mais seca)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Temperatura</span>
        <h2>5. Temperatura: controles e variações</h2>
        <p>
          A temperatura atmosférica é o elemento climático mais estudado. Sua variação depende
          diretamente da <strong>incidência da radiação solar</strong>, que por sua vez é
          condicionada pela latitude e pela inclinação do eixo terrestre. Nas regiões tropicais, o
          Sol incide de forma mais perpendicular, concentrando energia em menor área — por isso as
          temperaturas são mais elevadas do que nas zonas temperadas e polares.
        </p>
        <p>
          A <strong>amplitude térmica</strong> é a diferença entre a temperatura máxima e mínima em
          um período. Regiões continentais têm grande amplitude (calor extremo no verão, frio
          intenso no inverno), enquanto regiões costeiras apresentam menor amplitude graças ao
          papel regulador dos oceanos (alta capacidade calorífica da água).
        </p>
        <p>
          As <strong>inversões térmicas</strong> ocorrem quando uma camada de ar quente se forma
          sobre camadas mais frias, impedindo a dispersão de poluentes. São comuns em metrópoles
          como São Paulo durante o inverno, piorando a qualidade do ar.
        </p>
      </section>

      {/* SVG – Fator latitude e insolação */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="280" fill="#fff8e1" rx="12" />
          <text x="300" y="26" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#e65100">
            Incidência solar e latitude — por que o Equador é mais quente?
          </text>
          {/* Terra */}
          <ellipse cx="120" cy="145" rx="80" ry="80" fill="#1565c0" />
          <ellipse cx="120" cy="145" rx="80" ry="80" fill="none" stroke="#90caf9" strokeWidth="1.5" />
          {/* equador */}
          <line x1="40" y1="145" x2="200" y2="145" stroke="#fff" strokeWidth="1.5" strokeDasharray="4,3" />
          <text x="205" y="149" fontSize="10" fill="#fff" fontWeight="bold">Equador</text>
          {/* linhas solares equatorial */}
          <line x1="300" y1="145" x2="200" y2="145" stroke="#ffb300" strokeWidth="3" />
          <polygon points="200,141 200,149 190,145" fill="#ffb300" />
          <text x="310" y="120" fontSize="10" fill="#e65100" fontWeight="bold">Raios solares</text>
          <text x="310" y="133" fontSize="10" fill="#e65100">perpendiculares</text>
          <text x="310" y="146" fontSize="10" fill="#e65100">→ área menor</text>
          <text x="310" y="159" fontSize="10" fill="#e65100">→ maior energia</text>
          {/* linha raio polar */}
          <line x1="300" y1="60" x2="140" y2="80" stroke="#64b5f6" strokeWidth="2" strokeDasharray="5,3" />
          <polygon points="138,76 142,84 134,82" fill="#64b5f6" />
          <text x="310" y="54" fontSize="10" fill="#0d47a1" fontWeight="bold">Raios solares oblíquos</text>
          <text x="310" y="67" fontSize="10" fill="#0d47a1">→ área maior</text>
          <text x="310" y="80" fontSize="10" fill="#0d47a1">→ menor energia por m²</text>
          {/* sol */}
          <circle cx="540" cy="140" r="35" fill="#ffeb3b" />
          <text x="540" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#e65100">SOL</text>
          {/* legenda */}
          <text x="300" y="255" textAnchor="middle" fontSize="10" fill="#555">
            A curvatura da Terra faz os raios solares incidirem de forma mais oblíqua nos polos,
            distribuindo a mesma energia por área maior.
          </text>
        </svg>
        <figcaption>
          O ângulo de incidência solar varia com a latitude, explicando por que as regiões
          equatoriais são mais quentes que as polares.
        </figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Chuvas</span>
        <h2>6. Precipitação: tipos e distribuição</h2>
        <p>
          A precipitação é o elemento climático mais relacionado à disponibilidade de água e à
          vegetação de uma região. Ela ocorre quando o vapor d'água atmosférico condensa e as
          gotículas se aglutinam até peso suficiente para cair. Os principais tipos de chuva são:
        </p>
        <ul>
          <li>
            <strong>Chuva convectiva (de convecção):</strong> o ar quente e úmido sobe rapidamente
            por aquecimento da superfície, resfria na altitude e precipita. Formam tempestades
            intensas e rápidas. Típica das áreas equatoriais e tropicais no verão (tardes chuvosas
            da Amazônia e do Cerrado).
          </li>
          <li>
            <strong>Chuva frontal (ciclônica):</strong> ocorre no encontro de massas de ar com
            temperaturas diferentes (frentes fria e quente). O ar mais quente sobe sobre o mais frio,
            provocando chuvas prolongadas. Comum no Sul e Sudeste do Brasil no inverno.
          </li>
          <li>
            <strong>Chuva orográfica (de relevo):</strong> massas de ar úmido encontram barreiras
            montanhosas, são forçadas a subir, resfriam e precipitam na vertente de barlavento. A
            vertente oposta (sotavento) fica na "sombra de chuva" e é mais seca.
          </li>
        </ul>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ventos e pressão</span>
        <h2>7. Circulação geral da atmosfera e ventos</h2>
        <p>
          O movimento do ar (vento) resulta das diferenças de pressão atmosférica. O ar se desloca
          das áreas de <strong>alta pressão</strong> (anticiclones) para as de{" "}
          <strong>baixa pressão</strong> (ciclones). Esse movimento é deflectido pelo{" "}
          <strong>efeito Coriolis</strong> — resultante da rotação da Terra —, que desvia os ventos
          para a direita no hemisfério norte e para a esquerda no hemisfério sul.
        </p>
        <p>
          A circulação geral da atmosfera é organizada em células convectivas:
        </p>
        <ul>
          <li>
            <strong>Célula de Hadley (0° a 30°):</strong> ar quente sobe no equador, diverge em
            altitude, desce nos trópicos (gerando zonas áridas e desertos como o Saara e o Atacama)
            e retorna ao equador como alísios.
          </li>
          <li>
            <strong>Célula de Ferrel (30° a 60°):</strong> zona de ventos de oeste, com clima
            temperado e frentes atmosféricas frequentes.
          </li>
          <li>
            <strong>Célula Polar (60° a 90°):</strong> ar frio desce nos polos, escoa até as
            latitudes médias e sobe nas zonas subpolares.
          </li>
        </ul>
        <p>
          Os <strong>ventos alísios</strong> — que sopram dos trópicos em direção ao equador —
          foram essenciais para a navegação europeia nos séculos XV e XVI, permitindo as Grandes
          Navegações e o "descobrimento" das Américas.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Massas de ar no Brasil</span>
        <h2>8. Massas de ar que atuam no Brasil</h2>
        <p>
          As massas de ar são grandes volumes de ar com temperatura e umidade homogêneas que se
          formam sobre superfícies específicas. No Brasil, cinco massas principais determinam o
          clima:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais massas de ar que atuam no Brasil</caption>
            <thead>
              <tr>
                <th>Massa de ar</th>
                <th>Origem</th>
                <th>Características</th>
                <th>Influência no Brasil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equatorial Continental (mEc)</td>
                <td>Amazônia</td>
                <td>Quente e muito úmida</td>
                <td>Chuvas intensas no Norte e Centro-Oeste</td>
              </tr>
              <tr>
                <td>Equatorial Atlântica (mEa)</td>
                <td>Atlântico Norte equatorial</td>
                <td>Quente e úmida</td>
                <td>Chuvas no Nordeste (quando avança)</td>
              </tr>
              <tr>
                <td>Tropical Atlântica (mTa)</td>
                <td>Atlântico tropical Sul</td>
                <td>Quente e úmida</td>
                <td>Predomina no Sudeste; pode trazer chuvas</td>
              </tr>
              <tr>
                <td>Tropical Continental (mTc)</td>
                <td>Chaco (Argentina/Bolívia)</td>
                <td>Quente e seca</td>
                <td>Calor intenso e seca no Sudeste no inverno</td>
              </tr>
              <tr>
                <td>Polar Atlântica (mPa)</td>
                <td>Antártico</td>
                <td>Fria e úmida</td>
                <td>Frentes frias no Sul; geadas; chuvas no SE</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Distinção essencial</span>
        <h2>9. Tempo e clima: diferença fundamental</h2>
        <p>
          Uma distinção essencial para o ENEM é a diferença entre <strong>tempo atmosférico</strong>{" "}
          e <strong>clima</strong>:
        </p>
        <ul>
          <li>
            <strong>Tempo atmosférico:</strong> estado da atmosfera em um momento e lugar
            específicos. É passageiro e variável: "está chovendo agora em São Paulo". Estuda-se com
            a meteorologia.
          </li>
          <li>
            <strong>Clima:</strong> padrão médio do tempo atmosférico ao longo de pelo menos 30 anos
            em uma região. É relativamente estável: "São Paulo tem clima subtropical úmido". Estuda-se
            com a climatologia.
          </li>
        </ul>
        <p>
          A confusão entre os dois conceitos é frequente e está na base de falácias como "está
          frio hoje, logo o aquecimento global não existe". O aquecimento global refere-se a uma
          tendência climática de longo prazo, não ao tempo de um dia específico.
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
              Uma estação meteorológica localizada no topo de uma serra a 2.000 metros de altitude
              registra temperatura média de 14°C. Considerando que a temperatura média na base da
              serra (100 m de altitude) é de 24°C, qual é o gradiente térmico verificado? Assinale
              a alternativa que corresponde corretamente ao fator climático responsável por essa
              diferença de temperatura.
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Maritimidade, pois a presença de oceanos próximos resfria as regiões elevadas.",
            },
            {
              letter: "b",
              text: "Latitude, pois a serra está localizada mais próxima dos polos do que a base.",
            },
            {
              letter: "c",
              text: "Altitude, pois a temperatura diminui com o aumento da altitude — a queda de temperatura se explica pelo resfriamento adiabático do ar.",
              correct: true,
            },
            {
              letter: "d",
              text: "Continentalidade, pois a distância do oceano provoca queda de temperatura.",
            },
            {
              letter: "e",
              text: "Correntes oceânicas, pois correntes frias reduzem a temperatura das áreas continentais elevadas.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra C. O fator climático responsável pela diferença de
              temperatura entre a base e o topo da serra é a altitude. O gradiente térmico médio é
              de aproximadamente -0,65°C a cada 100 metros de altitude. No exemplo, a diferença de
              altitude é de 1.900 m (de 100 a 2.000 m), o que corresponde a uma queda de
              temperatura de cerca de 12°C (1.900 × 0,65°C / 100 ≈ 12,35°C), compatível com a
              diferença registrada de 10°C entre os 14°C do topo e os 24°C da base.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              Observe as afirmações sobre elementos e fatores climáticos:
              <br />
              <br />
              I. A temperatura é um elemento climático porque pode ser medida e registrada.
              <br />
              II. A latitude é um elemento climático porque determina a quantidade de radiação solar
              recebida por uma região.
              <br />
              III. As correntes oceânicas são um fator climático porque influenciam a temperatura e
              a umidade das regiões costeiras.
              <br />
              IV. A precipitação é um fator climático porque provoca variações no clima regional.
              <br />
              <br />
              Quais afirmações estão CORRETAS?
            </p>
          }
          options={[
            { letter: "a", text: "Apenas I e II." },
            { letter: "b", text: "Apenas II e III." },
            { letter: "c", text: "Apenas I e III.", correct: true },
            { letter: "d", text: "Apenas I, II e III." },
            { letter: "e", text: "I, II, III e IV." },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra C (I e III). Elemento climático é uma variável
              mensurável do clima (temperatura, precipitação, pressão, vento, umidade) — a
              afirmativa I está correta. Fator climático é um condicionante geográfico que explica
              a variação dos elementos (latitude, altitude, maritimidade, continentalidade,
              correntes oceânicas) — a afirmativa III está correta. A afirmativa II está errada
              porque latitude é fator, não elemento. A afirmativa IV está errada porque precipitação
              é elemento, não fator.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              A cidade de Iquique, no Chile, está localizada a 20° de latitude sul, próxima ao
              litoral do Pacífico, e apresenta precipitação média anual inferior a 2 mm — sendo
              considerada uma das cidades mais secas do mundo. Considerando que Iquique é uma
              cidade costeira, qual combinação de fatores climáticos explica sua extrema aridez?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Maritimidade elevada e correntes oceânicas quentes, que aumentam a evaporação.",
            },
            {
              letter: "b",
              text: "Corrente oceânica fria de Humboldt (que inibe a evaporação e a formação de nuvens) e subsidência de ar seco associada à célula de Hadley (alta pressão subtropical).",
              correct: true,
            },
            {
              letter: "c",
              text: "Alta latitude e altitude elevada, que reduzem a temperatura e impedem a evaporação.",
            },
            {
              letter: "d",
              text: "Continentalidade extrema, pois Iquique está muito distante dos oceanos produtores de umidade.",
            },
            {
              letter: "e",
              text: "Presença de ventos úmidos de leste (alísios) que atravessam a Cordilheira dos Andes e perdem umidade antes de chegar ao litoral.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra B. Iquique é afetada por dois fatores que combinam
              para gerar extrema aridez: (1) a corrente fria de Humboldt, que resfria as águas do
              Pacífico, reduz a evaporação e inibe a formação de nuvens de chuva na costa; (2) a
              célula de Hadley, que promove subsidência (descida) de ar seco na faixa subtropical
              (20°-30° de latitude), gerando alta pressão e tempo seco. Essa combinação cria o
              deserto de Atacama, o mais árido do mundo.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              Uma região serrana do litoral sul do Brasil registra chuvas abundantes na vertente
              voltada para o oceano Atlântico e clima significativamente mais seco na vertente
              oposta, voltada para o interior. Esse fenômeno é denominado:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Chuva frontal, causada pelo encontro de massas de ar com temperaturas distintas na região serrana.",
            },
            {
              letter: "b",
              text: "Chuva convectiva, originada pelo aquecimento do solo e ascensão do ar úmido nas encostas.",
            },
            {
              letter: "c",
              text: "Chuva orográfica (de relevo), com barlavento úmido e sotavento seco — efeito sombra de chuva.",
              correct: true,
            },
            {
              letter: "d",
              text: "Inversão térmica, que impede a precipitação na vertente voltada para o oceano.",
            },
            {
              letter: "e",
              text: "Efeito Coriolis, que desvia os ventos úmidos para a vertente interna da serra.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra C. O fenômeno descrito é a chuva orográfica (ou de
              relevo). Massas de ar úmido provenientes do oceano encontram a barreira das serras,
              são forçadas a subir (vertente de barlavento), resfriam adiabaticamente e precipitam.
              Ao descer pela vertente oposta (sotavento), o ar já perdeu sua umidade e se aquece
              — criando a "sombra de chuva". Esse fenômeno é observável, por exemplo, nas serras
              gaúchas e nas escarpas da Serra do Mar em Santa Catarina.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              (Adaptado ENEM) O noticiário de uma grande cidade brasileira no mês de agosto informa:
              "Alerta de inversão térmica: qualidade do ar crítica nas próximas 48 horas". A
              inversão térmica é um fenômeno atmosférico que afeta diretamente a saúde da população
              urbana. Com base nos conhecimentos sobre atmosfera e elementos climáticos, assinale a
              alternativa que explica CORRETAMENTE o fenômeno e seu impacto sobre a qualidade do ar.
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A inversão térmica ocorre quando o ar frio próximo ao solo fica aprisionado sob uma camada de ar quente em altitude, impedindo a dispersão vertical dos poluentes.",
              correct: true,
            },
            {
              letter: "b",
              text: "A inversão térmica é causada pela formação de frentes frias que empurram o ar poluído para cima, piorando a qualidade do ar nas camadas superiores da troposfera.",
            },
            {
              letter: "c",
              text: "O fenômeno ocorre apenas em cidades costeiras, onde a brisa marinha traz poluentes do oceano para a área urbana.",
            },
            {
              letter: "d",
              text: "A inversão térmica é provocada pela alta umidade do ar no inverno, que dissolve os poluentes e os torna mais concentrados ao nível do solo.",
            },
            {
              letter: "e",
              text: "O fenômeno se deve à ascensão do ar quente poluído, que encontra camadas frias e precipita os poluentes em forma de chuva ácida intensa.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra A. Normalmente, o ar esfria com a altitude na
              troposfera. Na inversão térmica, uma camada de ar quente se forma em altitude e funciona
              como uma tampa sobre o ar frio e pesado na superfície. Esse ar frio não consegue subir
              (pois para subir precisaria ser mais quente que o ar acima), impedindo a dispersão
              vertical dos poluentes gerados pelo tráfego e indústrias. O resultado é a concentração
              de poluentes ao nível do solo — situação grave em cidades como São Paulo no inverno,
              quando o ar é seco e a tendência de inversão é maior.
            </p>
          }
        />
      </section>
    </article>
  );
}
