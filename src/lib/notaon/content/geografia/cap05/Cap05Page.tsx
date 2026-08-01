"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap05Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 05</span>

          <h1>Tecnologias geográficas: GPS, sensoriamento remoto e geoprocessamento</h1>

          <p>
            As geotecnologias transformaram radicalmente a forma como conhecemos,
            monitoramos e planejamos o espaço geográfico. GPS, satélites de
            observação, Sistemas de Informação Geográfica (SIG) e drones estão
            presentes em nosso cotidiano — do aplicativo de navegação ao
            monitoramento do desmatamento amazônico. O ENEM cobra com frequência
            a aplicação dessas ferramentas em contextos ambientais, urbanos e
            sociais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Posicionamento Global</span>

        <h2>1. GPS — Sistema de Posicionamento Global</h2>

        <p>
          O <strong>GPS (Global Positioning System)</strong> é um sistema de
          navegação por satélite desenvolvido pelo Departamento de Defesa dos
          Estados Unidos e operacionalizado a partir de 1994. Ele permite
          determinar com precisão a posição de qualquer ponto na superfície
          terrestre com base na triangulação de sinais emitidos por satélites
          artificiais em órbita.
        </p>

        <p>
          O sistema é composto por <strong>três segmentos</strong>: o segmento
          espacial (constelação de satélites), o segmento de controle (estações
          terrestres que monitoram e corrigem os satélites) e o segmento do
          usuário (receptores GPS em celulares, veículos, aviões etc.). Para
          calcular a posição horizontal, são necessários no mínimo 3 satélites;
          para incluir a altitude, são necessários 4.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 260" width="700" height="260" aria-label="Diagrama do sistema GPS com satélites orbitando a Terra">
            <circle cx="350" cy="140" r="70" fill="#4a90d9" stroke="#1a5fa8" strokeWidth="2" />
            <ellipse cx="350" cy="140" rx="70" ry="22" fill="#2a7fcf" opacity="0.5" />
            <ellipse cx="330" cy="120" rx="22" ry="28" fill="#5cb85c" opacity="0.8" />
            <ellipse cx="375" cy="145" rx="18" ry="14" fill="#5cb85c" opacity="0.8" />
            <ellipse cx="350" cy="140" rx="180" ry="100" fill="none" stroke="#aaa" strokeWidth="1.5" strokeDasharray="6 4" />
            <rect x="130" y="55" width="28" height="14" rx="3" fill="#f0a500" />
            <line x1="130" y1="62" x2="106" y2="62" stroke="#888" strokeWidth="1.5" />
            <line x1="158" y1="62" x2="182" y2="62" stroke="#888" strokeWidth="1.5" />
            <rect x="100" y="57" width="10" height="10" fill="#c0c0c0" />
            <rect x="178" y="57" width="10" height="10" fill="#c0c0c0" />
            <rect x="530" y="55" width="28" height="14" rx="3" fill="#f0a500" />
            <line x1="530" y1="62" x2="506" y2="62" stroke="#888" strokeWidth="1.5" />
            <line x1="558" y1="62" x2="582" y2="62" stroke="#888" strokeWidth="1.5" />
            <rect x="496" y="57" width="10" height="10" fill="#c0c0c0" />
            <rect x="578" y="57" width="10" height="10" fill="#c0c0c0" />
            <rect x="330" y="20" width="28" height="14" rx="3" fill="#f0a500" />
            <line x1="330" y1="27" x2="306" y2="27" stroke="#888" strokeWidth="1.5" />
            <line x1="358" y1="27" x2="382" y2="27" stroke="#888" strokeWidth="1.5" />
            <rect x="296" y="22" width="10" height="10" fill="#c0c0c0" />
            <rect x="378" y="22" width="10" height="10" fill="#c0c0c0" />
            <line x1="144" y1="69" x2="320" y2="155" stroke="#e74c3c" strokeWidth="1.5" strokeDasharray="5 3" />
            <line x1="544" y1="69" x2="380" y2="155" stroke="#e74c3c" strokeWidth="1.5" strokeDasharray="5 3" />
            <line x1="344" y1="34" x2="350" y2="100" stroke="#e74c3c" strokeWidth="1.5" strokeDasharray="5 3" />
            <rect x="335" y="195" width="30" height="18" rx="4" fill="#2c3e50" />
            <rect x="347" y="193" width="6" height="4" fill="#7f8c8d" />
            <circle cx="350" cy="204" r="4" fill="#e74c3c" />
            <text x="100" y="48" fontSize="11" fill="#333" textAnchor="middle">Satélite 1</text>
            <text x="600" y="48" fontSize="11" fill="#333" textAnchor="middle">Satélite 2</text>
            <text x="350" y="14" fontSize="11" fill="#333" textAnchor="middle">Satélite 3</text>
            <text x="350" y="228" fontSize="11" fill="#333" textAnchor="middle">Receptor GPS</text>
            <text x="350" y="248" fontSize="10" fill="#666" textAnchor="middle">Triangulação de sinais determina a posição exata</text>
          </svg>
          <figcaption>Figura 1 — Sistema GPS: triangulação de sinais de 3 ou mais satélites para determinar posição.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <strong>Sistemas equivalentes ao GPS:</strong> Rússia possui o
          GLONASS; a União Europeia desenvolveu o Galileo; a China opera o
          BeiDou. O termo genérico para esses sistemas é{" "}
          <strong>GNSS (Global Navigation Satellite System)</strong>.
        </div>

        <p>
          <strong>Aplicações do GPS:</strong> navegação veicular e aérea,
          mapeamento topográfico, agricultura de precisão, rastreamento de frotas,
          socorro em emergências, georreferenciamento de propriedades rurais
          (obrigação legal no Brasil), estudos de movimentação de placas
          tectônicas e monitoramento de encostas em áreas de risco.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Observação da Terra</span>

        <h2>2. Sensoriamento Remoto</h2>

        <p>
          O <strong>sensoriamento remoto</strong> é a técnica de obter
          informações sobre objetos ou superfícies sem contato físico direto,
          por meio da detecção e análise da energia eletromagnética emitida ou
          refletida por eles. Satélites, aviões e drones equipados com sensores
          capturam imagens da superfície terrestre em diferentes comprimentos de
          onda (visível, infravermelho, micro-ondas etc.).
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 230" width="700" height="230" aria-label="Esquema de sensoriamento remoto com satélite, energia solar e superfície terrestre">
            <circle cx="80" cy="40" r="28" fill="#f9ca24" stroke="#f0932b" strokeWidth="2" />
            <text x="80" y="44" fontSize="11" fill="#333" textAnchor="middle" fontWeight="bold">Sol</text>
            <rect x="350" y="15" width="50" height="25" rx="4" fill="#2c3e50" />
            <rect x="290" y="22" width="60" height="12" fill="#3498db" opacity="0.8" />
            <rect x="400" y="22" width="60" height="12" fill="#3498db" opacity="0.8" />
            <circle cx="375" cy="27" r="5" fill="#e74c3c" />
            <text x="375" y="12" fontSize="11" fill="#333" textAnchor="middle">Satélite sensor</text>
            <line x1="105" y1="55" x2="200" y2="155" stroke="#f9ca24" strokeWidth="1.5" strokeDasharray="6 3" />
            <line x1="108" y1="48" x2="300" y2="155" stroke="#f9ca24" strokeWidth="1.5" strokeDasharray="6 3" />
            <line x1="230" y1="155" x2="375" y2="40" stroke="#e74c3c" strokeWidth="2" strokeDasharray="5 3" />
            <polygon points="375,40 368,52 380,50" fill="#e74c3c" />
            <rect x="100" y="155" width="500" height="60" fill="#8d6e52" rx="4" />
            <ellipse cx="180" cy="155" rx="40" ry="15" fill="#5cb85c" />
            <ellipse cx="350" cy="155" rx="60" ry="18" fill="#95a5a6" />
            <ellipse cx="500" cy="155" rx="50" ry="16" fill="#4a90d9" />
            <text x="180" y="180" fontSize="10" fill="#fff" textAnchor="middle">Floresta</text>
            <text x="350" y="180" fontSize="10" fill="#fff" textAnchor="middle">Área urbana</text>
            <text x="500" y="180" fontSize="10" fill="#fff" textAnchor="middle">Água</text>
            <line x1="375" y1="40" x2="600" y2="100" stroke="#9b59b6" strokeWidth="1.5" strokeDasharray="4 3" />
            <rect x="590" y="90" width="90" height="25" rx="4" fill="#f0e6ff" stroke="#9b59b6" />
            <text x="635" y="106" fontSize="10" fill="#9b59b6" textAnchor="middle">Estação solo</text>
            <text x="350" y="225" fontSize="10" fill="#666" textAnchor="middle">Energia solar → reflexão na superfície → captura pelo sensor → transmissão dos dados</text>
          </svg>
          <figcaption>Figura 2 — Esquema de sensoriamento remoto: satélite captura energia refletida e transmite dados para estação em solo.</figcaption>
        </figure>

        <p>
          <strong>Tipos de sensores:</strong> sensores <em>passivos</em> (captam
          energia solar refletida) e sensores <em>ativos</em> (emitem sua
          própria energia e captam o retorno — radar, LiDAR). O radar é
          especialmente útil para regiões com cobertura de nuvens persistente,
          como a Amazônia.
        </p>

        <p>
          <strong>Resolução das imagens:</strong> resolução <em>espacial</em>
          (tamanho do menor objeto detectável), resolução <em>temporal</em>
          (frequência de revisita ao mesmo ponto) e resolução <em>espectral</em>
          (número de bandas eletromagnéticas captadas). Satélites de alta
          resolução espacial captam objetos de menos de 50 cm; satélites de
          resolução moderada (Landsat 30 m) são usados para monitoramento
          ambiental em grande escala.
        </p>

        <div className="lesson-highlight">
          <strong>PRODES e INPE:</strong> o Projeto de Monitoramento do
          Desmatamento na Amazônia Legal (PRODES) usa imagens de satélite
          (principalmente Landsat e CBERS) para calcular anualmente a taxa de
          desmatamento. O sistema DETER faz monitoramento em tempo quase real,
          alertando as autoridades. São as principais referências usadas pelo
          ENEM ao abordar desmatamento e políticas ambientais.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Satélites</span>

        <h2>3. Principais Satélites de Observação da Terra</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Satélite</th>
                <th>País/Parceria</th>
                <th>Resolução espacial</th>
                <th>Principal uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CBERS-4A</td>
                <td>Brasil–China (INPE/CAST)</td>
                <td>2 m a 16 m</td>
                <td>Monitoramento ambiental, agricultura, recursos hídricos</td>
              </tr>
              <tr>
                <td>Amazonia-1</td>
                <td>Brasil (INPE)</td>
                <td>60 m</td>
                <td>Monitoramento da Amazônia (primeiro satélite 100% nacional)</td>
              </tr>
              <tr>
                <td>Landsat 9</td>
                <td>EUA (NASA/USGS)</td>
                <td>30 m</td>
                <td>Série histórica desde 1972 — base do PRODES</td>
              </tr>
              <tr>
                <td>Sentinel-2</td>
                <td>Europa (ESA)</td>
                <td>10 m</td>
                <td>Monitoramento vegetal, costeiro e urbano</td>
              </tr>
              <tr>
                <td>WorldView-3</td>
                <td>EUA (privado)</td>
                <td>0,31 m</td>
                <td>Imagens de alta resolução, defesa, mapeamento urbano</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Análise Espacial</span>

        <h2>4. SIG — Sistemas de Informação Geográfica</h2>

        <p>
          O <strong>SIG (Sistema de Informação Geográfica)</strong>, em inglês
          GIS (Geographic Information System), é um conjunto de ferramentas
          computacionais que permite capturar, armazenar, processar, analisar e
          visualizar dados referenciados espacialmente. Diferentemente de um
          mapa comum, o SIG integra camadas (layers) de informação que podem ser
          sobrepostas e consultadas dinamicamente.
        </p>

        <p>
          Cada <strong>camada (layer)</strong> representa um tema: relevo,
          hidrografia, vegetação, uso do solo, rodovias, zoneamento urbano etc.
          A sobreposição dessas camadas permite identificar padrões e relações
          impossíveis de perceber em mapas isolados — por exemplo, cruzar dados
          de chuva, declividade e uso do solo para mapear áreas de risco de
          deslizamento.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Componente do SIG</th>
                <th>Função</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hardware</td>
                <td>Infraestrutura computacional</td>
                <td>Computadores, GPS, scanners, drones</td>
              </tr>
              <tr>
                <td>Software</td>
                <td>Processamento e análise espacial</td>
                <td>ArcGIS, QGIS (gratuito), Google Earth Engine</td>
              </tr>
              <tr>
                <td>Dados</td>
                <td>Base de informações georreferenciadas</td>
                <td>Imagens de satélite, mapas cadastrais, censos</td>
              </tr>
              <tr>
                <td>Métodos</td>
                <td>Procedimentos de análise</td>
                <td>Buffer, sobreposição, interpolação, roteirização</td>
              </tr>
              <tr>
                <td>Pessoas</td>
                <td>Profissionais que operam o sistema</td>
                <td>Geógrafos, urbanistas, engenheiros ambientais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Geotecnologias</span>

        <h2>5. Geoprocessamento e Quadro Comparativo</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Geotecnologia</th>
                <th>Como funciona</th>
                <th>Aplicações no Brasil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GPS / GNSS</td>
                <td>Triangulação de sinais de satélites</td>
                <td>Georreferenciamento rural, logística, emergências</td>
              </tr>
              <tr>
                <td>Sensoriamento remoto (óptico)</td>
                <td>Captura luz solar refletida em múltiplas bandas</td>
                <td>PRODES/INPE, MapBiomas, monitoramento de queimadas</td>
              </tr>
              <tr>
                <td>Radar (SAR)</td>
                <td>Emite micro-ondas e capta retorno (funciona à noite e sob nuvens)</td>
                <td>Monitoramento amazônico, risco de inundações</td>
              </tr>
              <tr>
                <td>LiDAR</td>
                <td>Pulsos de laser medem distâncias com extrema precisão</td>
                <td>Mapeamento de dosséis florestais, topografia urbana</td>
              </tr>
              <tr>
                <td>SIG / GIS</td>
                <td>Sobreposição e análise de camadas de dados espaciais</td>
                <td>Planejamento urbano, zoneamento, gestão de bacias</td>
              </tr>
              <tr>
                <td>Drones (VANT)</td>
                <td>Veículos aéreos não tripulados com câmeras ou sensores</td>
                <td>Fiscalização ambiental, agricultura de precisão, obras</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Agricultura e Meio Ambiente</span>

        <h2>6. Agricultura de Precisão e Monitoramento Ambiental</h2>

        <p>
          A <strong>agricultura de precisão</strong> combina GPS, sensores de
          solo, imagens de satélite e SIG para gerenciar variações dentro de
          uma mesma lavoura, ajustando a aplicação de insumos de acordo com as
          reais necessidades de cada ponto do campo. Isso reduz custos, minimiza
          impactos ambientais e aumenta a produtividade.
        </p>

        <p>
          No <strong>monitoramento ambiental</strong>, as geotecnologias permitem
          acompanhar em tempo real o avanço do desmatamento, a extensão de
          queimadas, a variação do nível de reservatórios e a expansão urbana
          sobre áreas de preservação. O <strong>MapBiomas</strong> usa algoritmos
          de machine learning em imagens do Google Earth Engine para mapear
          anualmente o uso e cobertura do solo em todo o Brasil desde 1985.
        </p>

        <div className="lesson-highlight">
          <strong>Geotecnologias no ENEM:</strong> questões costumam apresentar
          imagens de satélite ou mapas temáticos e pedir interpretação de
          padrões espaciais — identificar biomas, comparar uso do solo entre
          décadas, analisar vulnerabilidade de populações ou discutir políticas
          de fiscalização ambiental.
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cartografia Digital</span>

        <h2>7. Google Maps, Google Earth e Geointeligência</h2>

        <p>
          O <strong>Google Maps</strong> e o <strong>Google Earth</strong>
          democratizaram o acesso a imagens de satélite e mapas interativos. O
          Google Earth integra imagens de alta resolução, fotografias aéreas,
          modelos tridimensionais do terreno e dados históricos — tornando-se
          ferramenta poderosa para educação geográfica e análises ambientais.
        </p>

        <p>
          A <strong>geointeligência (GEOINT)</strong> é o uso de imagens de
          satélite e dados geoespaciais para fins estratégicos. O Big Data
          geoespacial — gerado por celulares, aplicativos de navegação e sensores
          urbanos — cria novos desafios de privacidade e novas oportunidades de
          análise urbana e social.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Planejamento Urbano</span>

        <h2>8. Geotecnologias no Planejamento Urbano e Smart Cities</h2>

        <p>
          Nas cidades, os SIGs são usados para cruzar dados de infraestrutura,
          uso do solo, densidade demográfica, redes de transporte, áreas de risco
          e índices socioeconômicos. Isso dá suporte a decisões como a expansão
          de linhas de metrô, a delimitação de ZEIS (Zonas Especiais de Interesse
          Social), o planejamento de sistemas de drenagem e a identificação de
          áreas de vulnerabilidade climática.
        </p>

        <p>
          As <strong>cidades inteligentes (smart cities)</strong> integram
          sensores urbanos (câmeras, contadores de tráfego, medidores de
          poluição) a plataformas de análise geoespacial. Cidades como Curitiba,
          São Paulo e Rio de Janeiro já utilizam centros de controle urbano que
          combinam dados em tempo real para gestão do trânsito e resposta a
          emergências.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fiscalização Ambiental</span>

        <h2>9. Drones e a Nova Fronteira do Monitoramento</h2>

        <p>
          Os <strong>VANT (Veículos Aéreos Não Tripulados)</strong> surgiram
          como ferramentas de baixo custo para mapeamento em escala local.
          Equipados com câmeras RGB, multiespectrais ou térmicas, permitem gerar
          ortofotomosaicos, modelos digitais de terreno e mapas de saúde da
          vegetação (NDVI) com resolução centimétrica.
        </p>

        <p>
          Na fiscalização ambiental, o IBAMA e o ICMBio utilizam drones para
          monitorar áreas remotas, identificar focos de garimpo ilegal, rastrear
          invasões em terras indígenas e avaliar danos após desastres. Na
          agropecuária, drones aplicam defensivos agrícolas com precisão,
          reduzindo até 90% do produto utilizado em comparação à pulverização
          convencional.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>

        <h2>10. Geotecnologias, Território e Cidadania</h2>

        <p>
          As geotecnologias não são ferramentas neutras: elas refletem escolhas
          políticas sobre o que monitorar, quem tem acesso aos dados e como as
          informações são usadas. A democratização do acesso a dados geoespaciais
          (plataformas abertas como OpenStreetMap, MapBiomas e dados do INPE)
          amplia a capacidade da sociedade civil de fiscalizar o Estado e as
          empresas.
        </p>

        <p>
          Para o ENEM, é fundamental compreender que as geotecnologias são
          instrumentos de <strong>leitura e transformação do espaço geográfico</strong>:
          elas revelam desigualdades, mapeiam riscos, orientam políticas públicas
          e permitem à sociedade tomar decisões mais informadas sobre o uso do
          território.
        </p>
      </section>

      <Exercise
        level="Básico"
        title="1. Funcionamento do GPS"
        statement={<p>O GPS determina a posição de um receptor na superfície terrestre com base na triangulação de sinais de satélites artificiais. Para calcular as três coordenadas (latitude, longitude e altitude), o receptor necessita captar sinais de, no mínimo:</p>}
        options={[
          { letter: "a", text: "1 satélite, pois os sinais são bidirecionais." },
          { letter: "b", text: "2 satélites, um para latitude e outro para longitude." },
          { letter: "c", text: "3 satélites, suficientes para posição horizontal (2D)." },
          { letter: "d", text: "4 satélites, necessários para incluir a altitude (3D).", correct: true },
          { letter: "e", text: "6 satélites, garantindo precisão centimétrica." },
        ]}
        resolution={<p>Para calcular posição em três dimensões (latitude, longitude e altitude), o receptor GPS precisa receber sinais de pelo menos 4 satélites simultaneamente. Com apenas 3, determina-se a posição horizontal (2D), mas há ambiguidade na altitude. Resposta: D.</p>}
      />

      <Exercise
        level="Intermediário"
        title="2. Sensoriamento remoto e monitoramento ambiental"
        statement={<p>O PRODES, sistema do INPE de monitoramento do desmatamento na Amazônia Legal, utiliza sensoriamento remoto por satélite. Uma das vantagens dos sensores de radar (SAR) em relação aos sensores ópticos passivos nessa região é:</p>}
        options={[
          { letter: "a", text: "O radar tem melhor resolução espacial em qualquer condição." },
          { letter: "b", text: "O radar opera independentemente de luz solar e atravessa cobertura de nuvens.", correct: true },
          { letter: "c", text: "O radar capta mais bandas do espectro visível do que os sensores ópticos." },
          { letter: "d", text: "O radar é mais barato e amplamente disponível em satélites comerciais." },
          { letter: "e", text: "O radar não sofre interferência da vegetação, gerando imagens mais nítidas do solo." },
        ]}
        resolution={<p>A Amazônia tem cobertura de nuvens praticamente constante durante grande parte do ano. Sensores ópticos passivos dependem da luz solar refletida — nuvens bloqueiam a visão. Sensores de radar (SAR) emitem micro-ondas que atravessam nuvens e funcionam à noite, tornando-os essenciais para o monitoramento contínuo da região. Resposta: B.</p>}
      />

      <Exercise
        level="Avançado"
        title="3. SIG e sobreposição de camadas"
        statement={<><p>Um SIG foi usado para mapear áreas de risco de deslizamento em uma cidade serrana. Foram sobrepostas três camadas: declividade do terreno, uso do solo e índice pluviométrico histórico.</p><p>A lógica da sobreposição de camadas em um SIG permite que o gestor público:</p></>}
        options={[
          { letter: "a", text: "Elimine a necessidade de trabalho de campo para avaliação de riscos." },
          { letter: "b", text: "Identifique áreas onde múltiplos fatores de risco se combinam espacialmente.", correct: true },
          { letter: "c", text: "Calcule com precisão exata o número de residências que serão afetadas." },
          { letter: "d", text: "Substitua o uso de sensoriamento remoto por análise estatística convencional." },
          { letter: "e", text: "Garanta que as intervenções de engenharia eliminam completamente o risco identificado." },
        ]}
        resolution={<p>A principal vantagem da sobreposição de camadas (overlay) em SIG é identificar espacialmente onde diferentes variáveis se combinam para produzir maior vulnerabilidade. Um ponto com alta declividade, solo exposto e precipitação elevada concentra múltiplos fatores de risco. O SIG é ferramenta de análise e apoio à decisão, não substitui trabalho de campo nem garante resultados de engenharia. Resposta: B.</p>}
      />

      <Exercise
        level="Contextualizado"
        title="4. MapBiomas e uso do solo"
        statement={<><p>O MapBiomas é uma plataforma colaborativa que usa algoritmos de aprendizado de máquina aplicados a imagens de satélite para mapear anualmente o uso e a cobertura do solo no Brasil desde 1985.</p><p>Pesquisadores identificaram que entre 1985 e 2022 houve expansão de áreas de pastagem sobre formações savânicas no Cerrado. Que conclusão metodológica e geográfica esse dado permite?</p></>}
        options={[
          { letter: "a", text: "O Cerrado está se regenerando naturalmente, pois pastagens são formações naturais savânicas." },
          { letter: "b", text: "A conversão de vegetação nativa em pastagem indica pressão agropecuária sobre o bioma, detectada por análise multitemporal de imagens.", correct: true },
          { letter: "c", text: "O dado confirma que o Cerrado tem maior taxa de desmatamento do que a Amazônia em todos os anos analisados." },
          { letter: "d", text: "O sensoriamento remoto não distingue pastagem de savana, tornando os resultados questionáveis." },
          { letter: "e", text: "A expansão da pastagem ocorreu apenas em áreas próximas a cidades, sem impacto na biodiversidade." },
        ]}
        resolution={<p>A comparação de imagens de satélite em diferentes datas (análise multitemporal) permite rastrear a conversão de vegetação nativa em usos antrópicos, como pastagens. No Cerrado, a expansão agropecuária é historicamente intensa — o bioma perdeu mais de 50% de sua cobertura original. O MapBiomas viabiliza essa análise em escala nacional com série histórica. Resposta: B.</p>}
      />

      <Exercise
        level="Contextualizado"
        title="5. Drones e fiscalização ambiental"
        statement={<><p>"A utilização de drones pelo IBAMA reduziu em 60% o tempo de detecção de focos de garimpo ilegal em Terras Indígenas da Amazônia entre 2020 e 2023, complementando o monitoramento por satélite que tem resolução temporal de dias a semanas."</p><p>Com base no texto e nos seus conhecimentos sobre geotecnologias, assinale a alternativa que melhor explica a vantagem dos drones em relação aos satélites de monitoramento ambiental:</p></>}
        options={[
          { letter: "a", text: "Drones orbitam o planeta, garantindo cobertura global contínua." },
          { letter: "b", text: "Drones têm maior resolução espectral, capturando bandas invisíveis aos satélites." },
          { letter: "c", text: "Drones operam em baixa altitude, oferecendo resolução centimétrica e flexibilidade de missão em tempo real.", correct: true },
          { letter: "d", text: "Drones são superiores em todas as métricas, tornando os satélites obsoletos para fiscalização." },
          { letter: "e", text: "Drones processam os dados automaticamente sem necessidade de operadores especializados." },
        ]}
        resolution={<p>Drones voam a baixas altitudes (dezenas a centenas de metros), obtendo imagens com resolução centimétrica — muito superior às resoluções métricas dos satélites para monitoramento ambiental em larga escala. Além disso, podem ser acionados rapidamente e redirecionados conforme necessidade operacional. Satélites têm cobertura global mas revisitam o mesmo ponto apenas a cada dias ou semanas. As tecnologias são complementares. Resposta: C.</p>}
      />
    </article>
  );
}
