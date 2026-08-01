"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap03Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 03</span>
          <h1>Cartografia I: orientação, coordenadas geográficas e escalas</h1>
          <p>
            A Cartografia é a ciência que estuda a representação da superfície terrestre em mapas,
            cartas e plantas. Muito além de simples ferramentas de navegação, os mapas são
            instrumentos de poder, comunicação e análise espacial. Para interpretar corretamente
            qualquer mapa, é indispensável dominar três bases fundamentais: os sistemas de
            orientação (como encontrar direções na superfície terrestre), o sistema de coordenadas
            geográficas (como localizar com precisão qualquer ponto no globo) e as escalas (como
            entender a relação entre a representação cartográfica e a realidade). Esses
            conhecimentos são frequentemente cobrados no ENEM tanto em questões diretas quanto em
            análises de mapas temáticos.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Direção no espaço</span>
        <h2>1. Orientação Geográfica</h2>
        <p>
          Orientar-se significa determinar a posição de um ponto no espaço em relação a uma
          referência. Ao longo da história, a humanidade desenvolveu diferentes métodos de
          orientação, que vão desde a observação de astros até o uso de bússolas e GPS.
        </p>
        <p>
          O método mais antigo e ainda relevante é a <strong>orientação pelo Sol</strong>. Como o
          Sol nasce no leste e se põe no oeste (no hemisfério norte, ao meio-dia, o Sol está ao
          sul; no hemisfério sul, ao norte), é possível determinar os pontos cardeais a partir da
          posição solar. No Brasil, que está no hemisfério sul, ao meio-dia solar o Sol encontra-se
          ao norte, portanto a sombra aponta para o sul.
        </p>
        <p>
          A <strong>orientação pelas estrelas</strong> também é clássica: no hemisfério norte, a
          Estrela Polar (Polaris) indica o norte com grande precisão. No hemisfério sul, o
          Cruzeiro do Sul aponta para o polo sul celeste, auxiliando na determinação do sul
          geográfico.
        </p>
        <p>
          A <strong>bússola</strong> é um instrumento que utiliza o campo magnético terrestre para
          indicar o norte magnético. É importante distinguir o <strong>norte geográfico</strong>
          (polo norte real, eixo de rotação da Terra) do <strong>norte magnético</strong>
          (posição do polo magnético, que varia ao longo do tempo e não coincide exatamente com o
          polo geográfico). A diferença entre eles é chamada de <strong>declinação magnética</strong>,
          e deve ser corrigida em trabalhos cartográficos precisos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Pontos cardeais, colaterais e subcolaterais</caption>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Pontos</th>
                <th>Ângulo (a partir do Norte, sentido horário)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cardeais</td>
                <td>Norte (N), Sul (S), Leste (L/E), Oeste (O/W)</td>
                <td>0°, 180°, 90°, 270°</td>
              </tr>
              <tr>
                <td>Colaterais</td>
                <td>NE, SE, SO, NO</td>
                <td>45°, 135°, 225°, 315°</td>
              </tr>
              <tr>
                <td>Subcolaterais</td>
                <td>NNE, ENE, ESE, SSE, SSO, OSO, ONO, NNO</td>
                <td>22,5°; 67,5°; 112,5°; 157,5° etc.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG: Rosa dos ventos */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="400" fill="#f5f9ff" rx="12" />
          <text x="200" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a5f">
            Rosa dos Ventos — Pontos Cardeais e Colaterais
          </text>
          {/* Círculo externo */}
          <circle cx="200" cy="210" r="150" fill="none" stroke="#b0c4de" strokeWidth="1" strokeDasharray="4,4" />
          <circle cx="200" cy="210" r="100" fill="none" stroke="#b0c4de" strokeWidth="1" strokeDasharray="4,4" />
          {/* Setas cardeais */}
          {/* Norte */}
          <polygon points="200,68 193,185 207,185" fill="#e53935" />
          <text x="200" y="58" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#e53935">N</text>
          {/* Sul */}
          <polygon points="200,352 193,235 207,235" fill="#555" />
          <text x="200" y="370" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#555">S</text>
          {/* Leste */}
          <polygon points="342,210 225,203 225,217" fill="#555" />
          <text x="360" y="215" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#555">L</text>
          {/* Oeste */}
          <polygon points="58,210 175,203 175,217" fill="#555" />
          <text x="32" y="215" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#555">O</text>
          {/* Diagonais colaterais */}
          <line x1="94" y1="104" x2="306" y2="316" stroke="#aaa" strokeWidth="1" strokeDasharray="5,3" />
          <line x1="306" y1="104" x2="94" y2="316" stroke="#aaa" strokeWidth="1" strokeDasharray="5,3" />
          {/* NE, SE, SO, NO */}
          <text x="316" y="102" fontSize="12" fontWeight="bold" fill="#1565c0">NE</text>
          <text x="316" y="326" fontSize="12" fontWeight="bold" fill="#1565c0">SE</text>
          <text x="68" y="326" fontSize="12" fontWeight="bold" fill="#1565c0">SO</text>
          <text x="68" y="102" fontSize="12" fontWeight="bold" fill="#1565c0">NO</text>
          {/* Centro */}
          <circle cx="200" cy="210" r="10" fill="#1e3a5f" />
          {/* Linha declinação magnética */}
          <line x1="200" y1="210" x2="215" y2="75" stroke="#ff7043" strokeWidth="2" strokeDasharray="6,3" />
          <text x="230" y="85" fontSize="10" fill="#ff7043">Norte magnético</text>
          <text x="230" y="98" fontSize="10" fill="#ff7043">(declinação)</text>
        </svg>
        <figcaption>
          Rosa dos ventos com pontos cardeais (N, S, L, O) e colaterais (NE, SE, SO, NO). A linha
          tracejada em laranja representa o norte magnético, que difere do norte geográfico real
          — essa diferença é chamada de declinação magnética.
        </figcaption>
      </figure>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Localização precisa</span>
        <h2>2. Coordenadas Geográficas</h2>
        <p>
          As <strong>coordenadas geográficas</strong> formam um sistema que permite localizar
          qualquer ponto da superfície terrestre com precisão absoluta, usando apenas dois valores:
          latitude e longitude. Esse sistema é baseado em linhas imaginárias traçadas sobre o globo.
        </p>
        <p>
          A <strong>latitude</strong> mede a distância angular de um ponto em relação ao
          <strong> Equador</strong> (linha imaginária que divide o globo em hemisfério norte e
          hemisfério sul). O Equador tem latitude 0°; o polo norte tem latitude 90°N e o polo sul,
          90°S. Quanto mais próximo dos polos, maior a latitude. Pontos ao norte do Equador têm
          latitude norte (positiva); pontos ao sul têm latitude sul (negativa).
        </p>
        <p>
          A <strong>longitude</strong> mede a distância angular de um ponto em relação ao
          <strong> Meridiano de Greenwich</strong> (meridiano de referência, que passa pelo
          observatório de Greenwich, em Londres, e foi convencionado como 0° em 1884). A longitude
          varia de 0° a 180° a leste e de 0° a 180° a oeste de Greenwich. O Brasil, por estar a
          oeste de Greenwich, tem longitudes oeste.
        </p>
        <p>
          As coordenadas geográficas são expressas em <strong>graus (°), minutos (') e segundos
          (")</strong>. Por exemplo: Brasília está localizada aproximadamente a 15°46'47"S de
          latitude e 47°55'45"O de longitude. Também podem ser expressas em graus decimais, formato
          usado pelos sistemas de GPS modernos.
        </p>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Paralelos e meridianos</span>
        <h2>3. Paralelos e Meridianos</h2>
        <p>
          Os <strong>paralelos</strong> são linhas imaginárias paralelas ao Equador. Eles indicam
          as latitudes e não se cruzam entre si. Alguns paralelos têm importância especial por
          marcarem divisões climáticas e astronômicas do globo:
        </p>
        <p>
          O <strong>Trópico de Câncer</strong> (23°26'N) marca o limite norte da zona tropical e a
          latitude máxima onde o Sol pode estar a pino (zênite) — isso ocorre no solstício de
          verão do hemisfério norte (por volta de 21 de junho). O <strong>Trópico de Capricórnio
          </strong> (23°26'S) é o equivalente no hemisfério sul — o Sol atinge o zênite nessa
          latitude no solstício de verão do hemisfério sul (por volta de 21 de dezembro). O
          Trópico de Capricórnio corta o território brasileiro, passando pelos estados de São Paulo,
          Mato Grosso do Sul, Paraná e Mato Grosso.
        </p>
        <p>
          Os <strong>Círculos Polares</strong> (66°34'N e 66°34'S) delimitam as zonas onde ocorrem
          os fenômenos do "sol da meia-noite" (verão polar) e da "noite polar" (inverno polar).
        </p>
        <p>
          Os <strong>meridianos</strong> são semicírculos que ligam os dois polos. Eles indicam as
          longitudes. Todos se cruzam nos polos. O Meridiano de Greenwich (0°) e o Meridiano
          Antípoda (180°) juntos formam o <strong>Círculo Internacional de Data</strong>, que
          convencionalmente separa os dias do calendário.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais paralelos e suas características</caption>
            <thead>
              <tr>
                <th>Paralelo</th>
                <th>Latitude</th>
                <th>Significado</th>
                <th>Passa pelo Brasil?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equador</td>
                <td>0°</td>
                <td>Divide N e S; maior calor; dias e noites iguais o ano todo</td>
                <td>Sim (Amapá, Pará, Amazonas)</td>
              </tr>
              <tr>
                <td>Trópico de Câncer</td>
                <td>23°26'N</td>
                <td>Limite norte da zona intertropical</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>Trópico de Capricórnio</td>
                <td>23°26'S</td>
                <td>Limite sul da zona intertropical</td>
                <td>Sim (SP, MS, PR, MT)</td>
              </tr>
              <tr>
                <td>Círculo Polar Ártico</td>
                <td>66°34'N</td>
                <td>Início do fenômeno polar no N</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>Círculo Polar Antártico</td>
                <td>66°34'S</td>
                <td>Início do fenômeno polar no S</td>
                <td>Não</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG: Globo com coordenadas */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 620 340" xmlns="http://www.w3.org/2000/svg">
          <rect width="620" height="340" fill="#e8f4f8" rx="12" />
          <text x="310" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a5f">
            Sistema de Coordenadas Geográficas
          </text>
          {/* Elipse representando o globo */}
          <ellipse cx="200" cy="175" rx="145" ry="145" fill="#cce5ff" stroke="#3a86c8" strokeWidth="2" />
          {/* Equador */}
          <ellipse cx="200" cy="175" rx="145" ry="30" fill="none" stroke="#e53935" strokeWidth="2" />
          <text x="355" y="179" fontSize="11" fill="#e53935" fontWeight="bold">Equador (0°)</text>
          {/* Paralelo 30°N */}
          <ellipse cx="200" cy="123" rx="126" ry="25" fill="none" stroke="#ff9800" strokeWidth="1.5" strokeDasharray="5,3" />
          <text x="335" y="126" fontSize="10" fill="#ff9800">30°N</text>
          {/* Paralelo 60°N */}
          <ellipse cx="200" cy="80" rx="73" ry="15" fill="none" stroke="#ff9800" strokeWidth="1" strokeDasharray="5,3" />
          <text x="282" y="83" fontSize="10" fill="#ff9800">60°N</text>
          {/* Paralelo 30°S */}
          <ellipse cx="200" cy="227" rx="126" ry="25" fill="none" stroke="#9c27b0" strokeWidth="1.5" strokeDasharray="5,3" />
          <text x="335" y="230" fontSize="10" fill="#9c27b0">30°S</text>
          {/* Eixo vertical (meridianos) */}
          <line x1="200" y1="30" x2="200" y2="320" stroke="#1565c0" strokeWidth="1.5" strokeDasharray="5,3" />
          {/* Meridiano oblíquo */}
          <ellipse cx="200" cy="175" rx="40" ry="145" fill="none" stroke="#1565c0" strokeWidth="1" strokeDasharray="4,3" />
          <text x="248" y="315" fontSize="10" fill="#1565c0">Meridianos</text>
          {/* Polo Norte */}
          <circle cx="200" cy="30" r="5" fill="#e53935" />
          <text x="212" y="35" fontSize="10" fill="#e53935">Polo Norte (90°N)</text>
          {/* Polo Sul */}
          <circle cx="200" cy="320" r="5" fill="#333" />
          <text x="212" y="325" fontSize="10" fill="#333">Polo Sul (90°S)</text>
          {/* Ponto de exemplo: Brasília */}
          <circle cx="175" cy="213" r="5" fill="#4caf50" />
          <text x="100" y="250" fontSize="10" fill="#2e7d32" fontWeight="bold">Brasília</text>
          <text x="100" y="263" fontSize="9" fill="#2e7d32">15°S / 47°O</text>
          <line x1="140" y1="248" x2="175" y2="215" stroke="#4caf50" strokeWidth="1" />
          {/* Painel direito - explicações */}
          <rect x="430" y="50" width="170" height="230" rx="8" fill="white" stroke="#ccc" strokeWidth="1" />
          <text x="515" y="72" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e3a5f">Coordenadas</text>
          <text x="515" y="88" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e3a5f">Geográficas</text>
          <line x1="440" y1="96" x2="590" y2="96" stroke="#ddd" strokeWidth="1" />
          <text x="440" y="112" fontSize="10" fill="#333" fontWeight="bold">Latitude:</text>
          <text x="440" y="126" fontSize="9" fill="#555">• Distância ao Equador</text>
          <text x="440" y="139" fontSize="9" fill="#555">• Varia de 0° a 90°</text>
          <text x="440" y="152" fontSize="9" fill="#555">• N ou S do Equador</text>
          <text x="440" y="168" fontSize="10" fill="#333" fontWeight="bold">Longitude:</text>
          <text x="440" y="182" fontSize="9" fill="#555">• Distância a Greenwich</text>
          <text x="440" y="195" fontSize="9" fill="#555">• Varia de 0° a 180°</text>
          <text x="440" y="208" fontSize="9" fill="#555">• L (leste) ou O (oeste)</text>
          <text x="440" y="225" fontSize="10" fill="#333" fontWeight="bold">Unidades:</text>
          <text x="440" y="238" fontSize="9" fill="#555">Graus° Minutos' Segundos"</text>
          <text x="440" y="252" fontSize="9" fill="#555">ou graus decimais (GPS)</text>
          <text x="440" y="269" fontSize="9" fill="#555">1° = 60' = 3.600"</text>
        </svg>
        <figcaption>
          Representação esquemática do sistema de coordenadas geográficas mostrando paralelos
          (linhas horizontais) e meridianos (semicírculos verticais). O ponto verde indica
          aproximadamente a posição de Brasília (15°S, 47°O).
        </figcaption>
      </figure>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fusos e tempo</span>
        <h2>4. Fusos Horários</h2>
        <p>
          A Terra gira 360° em 24 horas, o que equivale a 15° por hora. Com base nesse cálculo, o
          planeta foi dividido em <strong>24 fusos horários</strong>, cada um com amplitude de 15°
          de longitude. O fuso de referência é o Fuso Zero, centrado no Meridiano de Greenwich.
          Cada fuso a leste de Greenwich acrescenta uma hora, e cada fuso a oeste subtrai uma hora.
        </p>
        <p>
          O Brasil é o único país da América do Sul que abrange múltiplos fusos horários. Em 2013,
          o decreto que regulava os horários foi alterado, definindo oficialmente para o Brasil:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Fusos horários do Brasil (referência: UTC)</caption>
            <thead>
              <tr>
                <th>Diferença em relação a UTC</th>
                <th>Regiões / Estados</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UTC–2</td>
                <td>Fernando de Noronha e arquipélagos atlânticos</td>
              </tr>
              <tr>
                <td>UTC–3 (horário oficial de Brasília)</td>
                <td>Região Nordeste, Sudeste, Sul, Centro-Oeste (exceto Mato Grosso e Mato Grosso do Sul), parte do Pará</td>
              </tr>
              <tr>
                <td>UTC–4</td>
                <td>Amazonas, Pará (parte), Rondônia, Roraima, Mato Grosso e Mato Grosso do Sul</td>
              </tr>
              <tr>
                <td>UTC–5</td>
                <td>Acre e extremo oeste do Amazonas</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          O <strong>Horário de Verão</strong>, que era adotado em alguns estados brasileiros para
          economizar energia, foi extinto em 2019 por decreto presidencial. Vale lembrar que a
          linha de data internacional (180° de longitude) estabelece onde cada novo dia começa, e
          que as variações dos fusos em relação a 15° exatos ocorrem por acordos políticos
          — alguns países optam por manter um único fuso por conveniência administrativa, como
          a China (território equivalente a quatro fusos, mas com um único horário oficial).
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Proporção e representação</span>
        <h2>5. Escala Cartográfica</h2>
        <p>
          A <strong>escala cartográfica</strong> expressa a relação entre as distâncias no mapa e
          as distâncias reais na superfície terrestre. É a linguagem matemática que permite ao mapa
          comunicar com precisão o tamanho e a localização dos elementos representados.
        </p>
        <p>
          Existem dois tipos de escala: a <strong>escala numérica</strong> e a <strong>escala
          gráfica</strong>. A escala numérica é expressa como uma razão ou fração: por exemplo,
          1:50.000 ou 1/50.000, o que significa que 1 centímetro no mapa corresponde a 50.000
          centímetros (= 500 metros) na realidade. A escala gráfica é uma linha subdivida
          representada no próprio mapa, que mantém sua proporção correta mesmo quando o mapa é
          ampliado ou reduzido por reprodução.
        </p>
        <p>
          A <strong>escala grande</strong> (denominador pequeno, como 1:1.000 ou 1:10.000)
          representa uma área pequena com muito detalhe — é usada em plantas urbanas e mapas
          topográficos detalhados. A <strong>escala pequena</strong> (denominador grande, como
          1:1.000.000 ou 1:10.000.000) representa grandes áreas com pouco detalhe — é usada em
          mapas de países ou continentes. Um ponto de confusão comum: quanto maior o número no
          denominador, menor é a escala (representa menos detalhes de uma área maior).
        </p>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cálculos com escala</span>
        <h2>6. Operando com Escalas</h2>
        <p>
          Para trabalhar com escalas, utiliza-se a relação:
        </p>
        <p>
          <strong>Distância real = Distância no mapa × Denominador da escala</strong>
        </p>
        <p>
          Exemplo 1: em um mapa na escala 1:200.000, dois pontos estão a 3 cm de distância.
          Qual é a distância real?
          Distância real = 3 cm × 200.000 = 600.000 cm = 6 km.
        </p>
        <p>
          Exemplo 2: a distância real entre duas cidades é de 150 km. Em um mapa na escala
          1:3.000.000, qual será a distância no mapa?
          Distância no mapa = 150 km ÷ 3.000.000 = 15.000.000 cm ÷ 3.000.000 = 5 cm.
        </p>
        <p>
          Para <strong>converter escalas</strong>, usa-se regra de três. Se um mapa está em
          1:500.000 e você precisa saber quanto representaria em 1:1.000.000, toda a distância no
          mapa seria reduzida à metade (pois o denominador dobrou).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Tipos de escala e suas aplicações</caption>
            <thead>
              <tr>
                <th>Tipo de escala</th>
                <th>Exemplos</th>
                <th>Nível de detalhe</th>
                <th>Uso típico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Grande escala</td>
                <td>1:500; 1:1.000; 1:10.000</td>
                <td>Muito alto</td>
                <td>Plantas de lotes, mapas de bairros, cadastro imobiliário</td>
              </tr>
              <tr>
                <td>Escala intermediária</td>
                <td>1:50.000; 1:100.000; 1:250.000</td>
                <td>Alto a médio</td>
                <td>Cartas topográficas militares, planejamento regional</td>
              </tr>
              <tr>
                <td>Pequena escala</td>
                <td>1:1.000.000; 1:5.000.000</td>
                <td>Baixo</td>
                <td>Mapas de países, atlas, mapas políticos</td>
              </tr>
              <tr>
                <td>Escala muito pequena</td>
                <td>1:10.000.000; 1:50.000.000</td>
                <td>Muito baixo</td>
                <td>Mapas de continentes, mapas mundiais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legenda e convenções</span>
        <h2>7. Elementos Essenciais de um Mapa</h2>
        <p>
          Um mapa técnico e científico deve conter determinados elementos padronizados para que
          possa ser corretamente interpretado por qualquer pessoa:
        </p>
        <p>
          <strong>Título:</strong> informa o tema e/ou a área representada. <strong>Escala:</strong>
          numérica e/ou gráfica. <strong>Legenda:</strong> explica os símbolos, cores e convenções
          usados. <strong>Orientação:</strong> indica os pontos cardeais (geralmente por uma seta
          apontando para o norte). <strong>Fonte:</strong> indica quem elaborou o mapa e com base
          em quais dados. <strong>Data:</strong> fundamental para mapas temáticos, pois os dados
          mudam com o tempo.
        </p>
        <p>
          Além desses elementos obrigatórios, os mapas podem ter <strong>coordenadas nas
          margens</strong> (grades de latitude e longitude ou de sistemas de projeção), informações
          sobre o sistema de projeção utilizado, e recursos visuais como hachuras, símbolos
          proporcionais e degradês de cores para representar variações quantitativas ou qualitativas
          dos fenômenos mapeados.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Relevo no papel</span>
        <h2>8. Representação do Relevo — Curvas de Nível</h2>
        <p>
          As <strong>curvas de nível</strong> (isolinhas de altitude) são linhas imaginárias que
          unem todos os pontos de mesma altitude em um mapa topográfico. São a forma mais comum
          de representar o relevo em mapas bidimensionais, pois permitem deduzir a forma, a
          inclinação e a altitude do terreno.
        </p>
        <p>
          A <strong>equidistância</strong> é a diferença de altitude entre duas curvas de nível
          consecutivas. Quanto mais próximas as curvas, mais íngreme é o terreno; quanto mais
          afastadas, mais suave é a inclinação. Uma <strong>curva mestra</strong> (geralmente
          traçada de cinco em cinco curvas normais, com linha mais grossa) facilita a leitura
          rápida da altitude.
        </p>
        <p>
          Outros elementos presentes em cartas topográficas incluem as <strong>cotas</strong>
          (valores de altitude marcados em pontos específicos), os <strong>pontos cotados</strong>
          (altitude de pontos de referência como picos e cruzamentos) e símbolos convencionais
          para hidrografia, vegetação, edificações e estradas.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Importância histórica</span>
        <h2>9. A Cartografia como Instrumento de Poder</h2>
        <p>
          Historicamente, os mapas nunca foram objetos neutros. J. B. Harley, cartógrafo e
          historiador, demonstrou que os mapas sempre refletiram e reforçaram relações de poder.
          Durante o período colonial, por exemplo, as potências europeias usavam cartografia
          para legitimar a posse de territórios — ao nomear e representar um espaço no mapa,
          exerciam simbolicamente o controle sobre ele.
        </p>
        <p>
          O geógrafo Yves Lacoste escreveu que "a Geografia serve antes de tudo para fazer a
          guerra": mapas militares detalhados eram (e ainda são) instrumentos estratégicos
          fundamentais. Hoje, os mapas digitais (Google Maps, GPS, sensoriamento remoto por
          satélites) são controlados por grandes corporações tecnológicas, o que coloca novas
          questões sobre soberania cartográfica e privacidade.
        </p>
        <p>
          No Brasil, o Instituto Brasileiro de Geografia e Estatística (IBGE) é o órgão
          responsável pela cartografia oficial, produzindo cartas topográficas, mapas temáticos e
          dados censitários. A Diretoria do Serviço Geográfico do Exército (DSG) também produz
          cartografia de base para fins militares e de planejamento territorial.
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
              Um estudante em uma região do hemisfério sul, ao meio-dia solar, observa sua sombra
              apontando diretamente para trás de si. Com base nos princípios de orientação
              geográfica, em que direção o estudante está olhando?
            </p>
          }
          options={[
            { letter: "a", text: "Para o sul, pois no hemisfério sul o Sol está ao norte ao meio-dia." },
            { letter: "b", text: "Para o norte, pois no hemisfério sul o Sol passa pelo norte ao meio-dia e a sombra aponta para o sul.", correct: true },
            { letter: "c", text: "Para o leste, pois o Sol sempre nasce no leste e a sombra aponta para o oeste." },
            { letter: "d", text: "Para o oeste, pois o Sol se move do leste para o oeste durante o dia." },
            { letter: "e", text: "Para o zênite, pois ao meio-dia solar o Sol está diretamente acima do observador em qualquer latitude." },
          ]}
          resolution={
            <p>
              A resposta correta é B. No hemisfério sul, ao meio-dia solar, o Sol atinge sua
              posição mais alta ao norte do observador. Portanto, a sombra aponta para o sul (para
              trás do estudante). Se a sombra está apontando para trás do estudante, e a sombra
              aponta para o sul, então o estudante está olhando para o norte. Este é um método
              clássico de orientação pelo Sol: no hemisfério sul, ao meio-dia, vire-se para o Sol
              — você estará olhando para o norte.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              Em um mapa com escala 1:250.000, a distância medida com régua entre dois municípios
              é de 8 cm. Qual é a distância real entre esses municípios?
            </p>
          }
          options={[
            { letter: "a", text: "2 km" },
            { letter: "b", text: "20 km", correct: true },
            { letter: "c", text: "200 km" },
            { letter: "d", text: "312,5 km" },
            { letter: "e", text: "31.250 km" },
          ]}
          resolution={
            <p>
              A resposta correta é B. Utilizando a fórmula: Distância real = Distância no mapa ×
              Denominador da escala. Distância real = 8 cm × 250.000 = 2.000.000 cm. Convertendo:
              2.000.000 cm ÷ 100 = 20.000 m ÷ 1.000 = 20 km. Portanto, a distância real entre os
              dois municípios é de 20 km. O erro mais comum é esquecer de converter as unidades
              (centímetros para quilômetros).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              O Trópico de Capricórnio é um paralelo que possui grande importância tanto
              astronômica quanto climática e geográfica para o Brasil. Sobre esse paralelo, é
              correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "Está localizado a 23°26'N e corresponde ao limite norte da zona intertropical no hemisfério norte." },
            { letter: "b", text: "Está localizado a 23°26'S, marca o limite sul da zona tropical e é a latitude onde o Sol atinge o zênite no solstício de verão do hemisfério sul.", correct: true },
            { letter: "c", text: "Corresponde ao Equador, dividindo o Brasil em partes iguais entre os hemisférios norte e sul." },
            { letter: "d", text: "Está localizado a 66°34'S e delimita a zona onde ocorre o fenômeno da noite polar no hemisfério sul." },
            { letter: "e", text: "Passa apenas pelo estado de São Paulo, sendo responsável pela distinção climática entre o norte e o sul do estado." },
          ]}
          resolution={
            <p>
              A alternativa B está correta. O Trópico de Capricórnio localiza-se a 23°26'S e
              marca o limite sul da zona tropical (intertropical). É a latitude máxima no
              hemisfério sul onde o Sol pode atingir o zênite (estar diretamente acima do
              observador), fenômeno que ocorre ao meio-dia do solstício de verão do hemisfério sul
              (por volta de 21 de dezembro). O Trópico de Capricórnio atravessa o território
              brasileiro nos estados de São Paulo, Mato Grosso, Mato Grosso do Sul e Paraná.
              A alternativa A descreve o Trópico de Câncer; C descreve o Equador; D descreve o
              Círculo Polar Antártico.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              Um cartógrafo precisa elaborar dois mapas de uma mesma cidade: um mapa geral da
              cidade para um atlas escolar e um mapa detalhado do centro histórico para um projeto
              de restauração. Assinale a alternativa que indica as escalas mais adequadas para
              cada mapa, respectivamente.
            </p>
          }
          options={[
            { letter: "a", text: "1:500.000 para o mapa geral e 1:1.000.000 para o mapa do centro histórico." },
            { letter: "b", text: "1:1.000 para o mapa geral e 1:100.000 para o mapa do centro histórico." },
            { letter: "c", text: "1:100.000 para o mapa geral da cidade e 1:2.000 para o mapa detalhado do centro histórico.", correct: true },
            { letter: "d", text: "1:10.000.000 para o mapa geral e 1:500.000 para o mapa do centro histórico." },
            { letter: "e", text: "Ambos devem usar a mesma escala (1:50.000) para manter a consistência cartográfica." },
          ]}
          resolution={
            <p>
              A resposta correta é C. O mapa geral de uma cidade para um atlas escolar precisa
              representar uma área grande (a cidade inteira) em pouco espaço, portanto requer
              escala relativamente pequena, como 1:100.000 (1 cm = 1 km). Já o mapa detalhado de
              um centro histórico para projeto de restauração precisa mostrar ruas, fachadas e
              detalhes arquitetônicos com precisão — requer grande escala, como 1:2.000 (1 cm =
              20 m). A alternativa A inverte a lógica: uma escala menor (1:1.000.000) seria usada
              para o mapa do centro histórico, o que não forneceria detalhes suficientes.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              O historiador J. B. Harley afirmou que "os mapas são textos sociais repletos de
              significados políticos e culturais". Com base nessa perspectiva crítica da
              cartografia e nos conteúdos de orientação e representação cartográfica, analise as
              afirmações a seguir:
            </p>
          }
          options={[
            { letter: "a", text: "Os mapas são instrumentos científicos objetivos e neutros, sendo a crítica de Harley aplicável apenas aos mapas medievais pré-científicos." },
            { letter: "b", text: "A crítica de Harley aplica-se apenas à escolha das projeções cartográficas, não afetando elementos como escala e coordenadas geográficas." },
            { letter: "c", text: "A perspectiva crítica indica que decisões cartográficas como o que incluir ou omitir, quais nomes usar e qual projeção adotar sempre envolvem escolhas com implicações políticas, culturais e de poder, mesmo nos mapas contemporâneos.", correct: true },
            { letter: "d", text: "Os mapas modernos, baseados em tecnologias de satélite e GPS, eliminaram completamente os vieses políticos e culturais que afetavam a cartografia histórica." },
            { letter: "e", text: "A influência política na cartografia limita-se ao período colonial, quando as potências europeias redesenhavam fronteiras arbitrariamente." },
          ]}
          resolution={
            <p>
              A alternativa C é a correta. Harley e outros pesquisadores da cartografia crítica
              demonstram que qualquer mapa envolve escolhas — o que representar, o que omitir,
              quais nomes usar para territórios disputados, qual projeção adotar (a projeção de
              Mercator, por exemplo, distorce o tamanho dos países, supervalorizando a Europa e
              os EUA). Essas escolhas não são neutras: refletem interesses políticos, econômicos e
              culturais de quem produz o mapa. Os mapas digitais contemporâneos (como o Google
              Maps) também fazem escolhas: mostram diferentes fronteiras dependendo do país onde
              são acessados (ex.: Caxemira aparece de formas diferentes no Google da Índia e do
              Paquistão). A tecnologia GPS e de satélite fornece dados mais precisos, mas não
              elimina o viés nas decisões cartográficas.
            </p>
          }
        />
      </section>
    </article>
  );
}
