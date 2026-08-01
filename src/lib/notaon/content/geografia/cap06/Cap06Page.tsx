"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap06Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 06</span>
          <h1>Estrutura interna da Terra e tectônica de placas</h1>
          <p>
            A Terra não é uma esfera homogênea: seu interior é organizado em camadas concêntricas
            com composições e propriedades físicas distintas. Compreender essa estrutura interna é
            fundamental para entender fenômenos como terremotos, vulcões e a própria dinâmica dos
            continentes. A teoria da tectônica de placas, desenvolvida ao longo do século XX,
            revolucionou as Geociências ao explicar como e por que a superfície terrestre está em
            constante movimento, moldando a distribuição dos continentes, oceanos e cadeias
            montanhosas ao longo de milhões de anos.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Interior da Terra</span>
        <h2>1. As camadas internas da Terra</h2>
        <p>
          O conhecimento sobre o interior da Terra provém principalmente do estudo das ondas
          sísmicas geradas por terremotos. Essas ondas percorrem o planeta e sofrem reflexões e
          refrações ao encontrar materiais com densidades diferentes, permitindo que os geofísicos
          identifiquem as camadas internas sem jamais perfurá-las diretamente.
        </p>
        <p>
          A estrutura interna terrestre é dividida em três grandes unidades: <strong>crosta</strong>,
          <strong> manto</strong> e <strong>núcleo</strong>. Cada uma possui subdivisões e
          características próprias de temperatura, pressão e composição química.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais camadas internas da Terra</caption>
            <thead>
              <tr>
                <th>Camada</th>
                <th>Profundidade (km)</th>
                <th>Temperatura (°C)</th>
                <th>Estado / Composição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Crosta continental</td>
                <td>0 – 35</td>
                <td>até 400</td>
                <td>Sólida / granito (silício e alumínio)</td>
              </tr>
              <tr>
                <td>Crosta oceânica</td>
                <td>0 – 10</td>
                <td>até 200</td>
                <td>Sólida / basalto (silício e magnésio)</td>
              </tr>
              <tr>
                <td>Manto superior</td>
                <td>35 – 660</td>
                <td>400 – 1.000</td>
                <td>Sólido plástico / peridotito</td>
              </tr>
              <tr>
                <td>Manto inferior</td>
                <td>660 – 2.900</td>
                <td>1.000 – 3.700</td>
                <td>Sólido rígido / óxidos de silício e magnésio</td>
              </tr>
              <tr>
                <td>Núcleo externo</td>
                <td>2.900 – 5.100</td>
                <td>3.700 – 5.000</td>
                <td>Líquido / ferro e níquel</td>
              </tr>
              <tr>
                <td>Núcleo interno</td>
                <td>5.100 – 6.371</td>
                <td>5.000 – 6.000</td>
                <td>Sólido / ferro e níquel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG — Estrutura interna da Terra */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          {/* Núcleo interno */}
          <circle cx="300" cy="300" r="80" fill="#e74c3c" />
          <text x="300" y="295" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Núcleo</text>
          <text x="300" y="312" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">interno</text>
          {/* Núcleo externo */}
          <circle cx="300" cy="300" r="145" fill="#e67e22" fillOpacity="0.8" />
          <text x="300" y="176" textAnchor="middle" fill="white" fontSize="11">Núcleo externo</text>
          {/* Manto inferior */}
          <circle cx="300" cy="300" r="210" fill="#f39c12" fillOpacity="0.7" />
          <text x="300" y="113" textAnchor="middle" fill="#333" fontSize="11">Manto inferior</text>
          {/* Manto superior */}
          <circle cx="300" cy="300" r="260" fill="#27ae60" fillOpacity="0.6" />
          <text x="300" y="65" textAnchor="middle" fill="#333" fontSize="11">Manto superior</text>
          {/* Crosta */}
          <circle cx="300" cy="300" r="285" fill="#2980b9" fillOpacity="0.5" />
          <text x="300" y="28" textAnchor="middle" fill="#333" fontSize="11">Crosta (5–35 km)</text>
          {/* Linha de referência */}
          <line x1="300" y1="300" x2="300" y2="15" stroke="#555" strokeWidth="1" strokeDasharray="4,3" />
        </svg>
        <figcaption>Figura 1 — Corte esquemático das camadas internas da Terra (não está em escala)</figcaption>
      </figure>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Litosfera e astenosfera</span>
        <h2>2. Litosfera, astenosfera e mesosfera</h2>
        <p>
          Além da divisão por composição química, o interior da Terra pode ser dividido pelas
          propriedades mecânicas dos materiais. A <strong>litosfera</strong> corresponde à camada
          rígida mais externa, englobando toda a crosta e a parte superior do manto. Tem espessura
          média de 100 km sob os continentes e 70 km sob os oceanos.
        </p>
        <p>
          Logo abaixo da litosfera encontra-se a <strong>astenosfera</strong>, zona do manto
          superior onde as rochas, embora sólidas, comportam-se de forma plástica devido às altas
          temperaturas e pressões. É sobre essa camada viscosa que as placas litosféricas deslizam.
          A <strong>mesosfera</strong> (manto inferior) é rígida novamente, pois a pressão supera
          o efeito do calor.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Divisão mecânica da Terra</caption>
            <thead>
              <tr>
                <th>Unidade mecânica</th>
                <th>Profundidade (km)</th>
                <th>Comportamento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Litosfera</td>
                <td>0 – 100</td>
                <td>Rígida, fratura-se</td>
              </tr>
              <tr>
                <td>Astenosfera</td>
                <td>100 – 350</td>
                <td>Plástica, flui lentamente</td>
              </tr>
              <tr>
                <td>Mesosfera</td>
                <td>350 – 2.900</td>
                <td>Rígida (alta pressão)</td>
              </tr>
              <tr>
                <td>Núcleo externo</td>
                <td>2.900 – 5.100</td>
                <td>Líquido (convecção)</td>
              </tr>
              <tr>
                <td>Núcleo interno</td>
                <td>5.100 – 6.371</td>
                <td>Sólido (alta pressão)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Deriva continental</span>
        <h2>3. A teoria da deriva continental de Wegener</h2>
        <p>
          Em 1912, o meteorologista alemão Alfred Wegener propôs a hipótese da{" "}
          <strong>deriva continental</strong>: os continentes teriam formado um único supercontinente
          chamado <strong>Pangeia</strong> ("toda a terra"), que se fragmentou há cerca de 200 milhões
          de anos, e seus pedaços foram lentamente se separando até atingir as posições atuais.
        </p>
        <p>
          Wegener baseou sua teoria em quatro linhas de evidências: o encaixe geométrico dos
          continentes (especialmente América do Sul e África), a presença dos mesmos fósseis em
          continentes separados por oceanos (como o <em>Mesosaurus</em>), a continuidade de
          estruturas geológicas entre costas opostas, e a distribuição de vestígios de climas
          pretéritos (carvão mineral em regiões polares, indicando florestas tropicais no passado).
          Porém, Wegener não soube explicar o mecanismo que moveria os continentes, e sua teoria
          foi rejeitada por décadas até a confirmação pela tectônica de placas.
        </p>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tectônica de placas</span>
        <h2>4. A teoria das placas tectônicas</h2>
        <p>
          A partir das décadas de 1950 e 1960, novas descobertas oceanográficas confirmaram a
          hipótese de Wegener e deram origem à teoria da <strong>tectônica de placas</strong>.
          A expansão do assoalho oceânico, identificada por Harry Hess, mostrou que magma sobe
          pelas dorsais meso-oceânicas, cria nova crosta oceânica e empurra as placas para os
          lados. As placas litosféricas se movem sobre a astenosfera a velocidades de 2 a 15 cm
          por ano, impulsionadas pelas correntes de convecção do manto.
        </p>
        <p>
          Existem atualmente cerca de <strong>15 grandes placas tectônicas</strong> e diversas
          placas menores. As principais são: Africana, Antártica, Arábica, Australiana, Caribenha,
          de Cocos, Euroasiática, Filipina, Indo-Australiana, Juan de Fuca, Nazca, Norte-Americana,
          Pacífica, Escocesa e Sul-Americana.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais placas tectônicas e características</caption>
            <thead>
              <tr>
                <th>Placa</th>
                <th>Tipo predominante</th>
                <th>Velocidade média</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pacífica</td>
                <td>Oceânica</td>
                <td>≈ 8 cm/ano</td>
              </tr>
              <tr>
                <td>Norte-Americana</td>
                <td>Continental/Oceânica</td>
                <td>≈ 2,3 cm/ano</td>
              </tr>
              <tr>
                <td>Sul-Americana</td>
                <td>Continental/Oceânica</td>
                <td>≈ 3 cm/ano</td>
              </tr>
              <tr>
                <td>Africana</td>
                <td>Continental/Oceânica</td>
                <td>≈ 2,1 cm/ano</td>
              </tr>
              <tr>
                <td>Euroasiática</td>
                <td>Continental/Oceânica</td>
                <td>≈ 2,1 cm/ano</td>
              </tr>
              <tr>
                <td>Nazca</td>
                <td>Oceânica</td>
                <td>≈ 7,5 cm/ano</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Limites entre placas</span>
        <h2>5. Tipos de limites entre placas tectônicas</h2>
        <p>
          O encontro entre placas tectônicas pode ocorrer de três maneiras distintas, cada uma
          gerando fenômenos geológicos diferentes:
        </p>
        <p>
          <strong>Limites divergentes (construtivos):</strong> as placas se afastam. Magma sobe
          pelo rift, solidifica e forma nova crosta. Ocorre nas dorsais meso-oceânicas (Dorsal
          Meso-Atlântica) e em rifts continentais (Rift do Leste Africano).
        </p>
        <p>
          <strong>Limites convergentes (destrutivos):</strong> as placas se aproximam. Quando uma
          placa oceânica encontra uma continental, a oceânica mergulha sob a continental
          (subducção), formando fossa oceânica e arco de ilhas ou cordilheira vulcânica. Quando
          duas continentais colidem, formam-se grandes cadeias montanhosas (Himalaias).
        </p>
        <p>
          <strong>Limites transformantes (conservativos):</strong> as placas deslizam
          lateralmente uma em relação à outra. Não há criação nem destruição de crosta. Exemplos:
          Falha de San Andreas (Califórnia) e Falha da Anatólia (Turquia).
        </p>
      </section>

      {/* SVG — Tipos de limites */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg">
          {/* DIVERGENTE */}
          <rect x="10" y="20" width="200" height="240" fill="#ecf0f1" rx="8" />
          <text x="110" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2c3e50">Divergente</text>
          <rect x="30" y="80" width="70" height="40" fill="#7f8c8d" rx="2" />
          <rect x="120" y="80" width="70" height="40" fill="#7f8c8d" rx="2" />
          <path d="M100 60 L100 200" stroke="#e74c3c" strokeWidth="3" />
          <path d="M100 200 L70 155 M100 200 L130 155" stroke="#e74c3c" strokeWidth="2" />
          <text x="110" y="230" textAnchor="middle" fontSize="10" fill="#555">↔ Afastamento</text>
          <text x="110" y="248" textAnchor="middle" fontSize="10" fill="#555">Dorsal oceânica</text>

          {/* CONVERGENTE */}
          <rect x="250" y="20" width="200" height="240" fill="#fef9e7" rx="8" />
          <text x="350" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2c3e50">Convergente</text>
          <rect x="270" y="80" width="80" height="40" fill="#95a5a6" rx="2" />
          <rect x="370" y="90" width="60" height="30" fill="#7f8c8d" rx="2" />
          <path d="M350 120 L310 175 L290 195" stroke="#e67e22" strokeWidth="3" fill="none" />
          <text x="350" y="220" textAnchor="middle" fontSize="10" fill="#555">↙ Subducção</text>
          <text x="350" y="238" textAnchor="middle" fontSize="10" fill="#555">Fossa oceânica</text>

          {/* TRANSFORMANTE */}
          <rect x="490" y="20" width="200" height="240" fill="#eaf7f0" rx="8" />
          <text x="590" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2c3e50">Transformante</text>
          <rect x="510" y="80" width="160" height="30" fill="#7f8c8d" rx="2" />
          <rect x="510" y="130" width="160" height="30" fill="#95a5a6" rx="2" />
          <path d="M510 95 L670 95" stroke="#27ae60" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M670 145 L510 145" stroke="#27ae60" strokeWidth="2" />
          <text x="590" y="220" textAnchor="middle" fontSize="10" fill="#555">⇄ Deslizamento lateral</text>
          <text x="590" y="238" textAnchor="middle" fontSize="10" fill="#555">Falha transcorrente</text>
        </svg>
        <figcaption>Figura 2 — Os três tipos de limites entre placas tectônicas e os fenômenos gerados</figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Correntes de convecção</span>
        <h2>6. Correntes de convecção no manto</h2>
        <p>
          O principal mecanismo que move as placas tectônicas são as{" "}
          <strong>correntes de convecção</strong> no manto. O calor gerado no núcleo aquece o
          material do manto inferior, tornando-o menos denso. Esse material ascende, se espalha
          lateralmente ao atingir a base da litosfera e, ao se resfriar, torna-se mais denso e
          afunda novamente. Esse ciclo contínuo de ascensão e descida do material do manto cria
          forças de arraste que empurram e puxam as placas litosféricas.
        </p>
        <p>
          Outra força importante é o <strong>empurrão da crista</strong> (<em>ridge push</em>),
          gerado pela elevação das dorsais, e o <strong>puxão da laje</strong> (
          <em>slab pull</em>), produzido quando a placa oceânica fria e densa mergulha na zona de
          subducção. Estima-se que o slab pull seja a força dominante na movimentação das placas.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Evidências geológicas</span>
        <h2>7. Evidências da tectônica de placas</h2>
        <p>
          Diversas linhas de evidência confirmam a teoria da tectônica de placas:
        </p>
        <ul style={{ paddingLeft: "1.4rem", lineHeight: "1.8" }}>
          <li>
            <strong>Paleomagnetismo:</strong> as rochas formadas nas dorsais registram a polaridade
            magnética da Terra no momento de sua solidificação. Faixas simétricas de polaridade
            normal e invertida em ambos os lados das dorsais confirmam a expansão do assoalho
            oceânico.
          </li>
          <li>
            <strong>Idades das rochas oceânicas:</strong> a crosta oceânica é mais jovem próximo
            às dorsais e mais antiga nas margens continentais, com idades máximas de 200 milhões
            de anos (a crosta continental pode ter 4 bilhões).
          </li>
          <li>
            <strong>Distribuição de terremotos e vulcões:</strong> concentrados nos limites das
            placas, formando o "Anel de Fogo" do Pacífico.
          </li>
          <li>
            <strong>GPS e laser:</strong> medições modernas confirmam o movimento das placas
            com precisão de milímetros por ano.
          </li>
          <li>
            <strong>Registro fóssil:</strong> fósseis idênticos em continentes separados por
            oceanos indicam conexão pretérita.
          </li>
        </ul>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Hotspots</span>
        <h2>8. Pontos quentes (hotspots)</h2>
        <p>
          Além dos limites de placas, vulcanismo pode ocorrer no interior das placas, sobre os
          chamados <strong>pontos quentes</strong> (<em>hotspots</em>). São plumas de material
          extremamente quente que sobem do manto profundo e perfuram a litosfera, independentemente
          da posição das placas.
        </p>
        <p>
          O exemplo mais famoso é o Havaí: a placa do Pacífico se move sobre um ponto quente
          fixo, formando uma cadeia de ilhas vulcânicas. As ilhas mais antigas já se apagaram
          e as mais jovens (Havaí e Maui) são as mais ativas atualmente. Outros pontos quentes
          notáveis: Islândia, Galápagos e Reunião (Madagascar).
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Brasil e tectônica</span>
        <h2>9. O Brasil e a tectônica de placas</h2>
        <p>
          O Brasil está situado no interior da <strong>Placa Sul-Americana</strong>, longe dos
          limites ativos. Por isso, é um país de baixíssima atividade sísmica e praticamente sem
          vulcanismo. A Cordilheira dos Andes, ao oeste, é formada pela subducção da Placa de
          Nazca sob a Placa Sul-Americana — uma das zonas de convergência mais ativas do mundo.
        </p>
        <p>
          Apesar da estabilidade tectônica atual, o Brasil guarda evidências de atividade
          pretérita: o cráton amazônico e o cráton do São Francisco são núcleos de rochas
          arqueanas com 2,5 a 3,5 bilhões de anos, formados antes da fragmentação da Pangeia.
          Os arenitos da Bacia do Paraná registram condições climáticas de desertos e mares rasos
          de eras geológicas passadas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Relação entre tectônica de placas e formações geológicas do Brasil</caption>
            <thead>
              <tr>
                <th>Formação / Região</th>
                <th>Origem tectônica</th>
                <th>Idade aproximada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cráton Amazônico</td>
                <td>Núcleo arqueano estável</td>
                <td>2,5 – 3,5 bilhões de anos</td>
              </tr>
              <tr>
                <td>Serra do Mar</td>
                <td>Reativação de falhas / soerguimento</td>
                <td>60 – 30 milhões de anos</td>
              </tr>
              <tr>
                <td>Bacia Sedimentar do Paraná</td>
                <td>Subsidência em margem passiva</td>
                <td>Paleozoico ao Mesozoico</td>
              </tr>
              <tr>
                <td>Cordilheira dos Andes</td>
                <td>Subducção Nazca × Sul-Americana</td>
                <td>60 milhões de anos (ativo)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Síntese e impactos no cotidiano</h2>
        <p>
          A compreensão da estrutura interna da Terra e da tectônica de placas vai muito além da
          ciência pura: ela tem implicações diretas para a sociedade. A localização de zonas
          sísmicas e vulcânicas ao longo dos limites de placas orienta o planejamento urbano,
          normas de construção civil e sistemas de alerta precoce. Regiões como o Japão, Chile e
          Indonésia investem pesadamente em monitoramento sísmico justamente por estarem em zonas
          de subducção ativas.
        </p>
        <p>
          Além disso, a tectônica de placas explica a distribuição de recursos minerais: jazidas
          de cobre e ouro associadas a arcos vulcânicos (Andes), petróleo em bacias sedimentares
          formadas em margens passivas (pré-sal brasileiro) e diamantes em kimberlitos ligados a
          crátones antigos (Brasil, África do Sul).
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
              A camada da Terra que se comporta de forma plástica, permitindo o deslizamento das
              placas litosféricas, é conhecida como:
            </p>
          }
          options={[
            { letter: "a", text: "Crosta continental" },
            { letter: "b", text: "Manto inferior (mesosfera)" },
            { letter: "c", text: "Astenosfera", correct: true },
            { letter: "d", text: "Núcleo externo" },
            { letter: "e", text: "Litosfera" },
          ]}
          resolution={
            <p>
              A astenosfera é a zona do manto superior (entre 100 e 350 km de profundidade) onde
              as rochas, apesar de sólidas, se comportam de forma plástica e viscosa devido às
              altas temperaturas e pressões. É sobre ela que as placas litosféricas deslizam. A
              litosfera é a camada rígida que inclui a crosta e o manto superior; o manto inferior
              (mesosfera) é rígido por conta da alta pressão; e o núcleo externo é líquido.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              Alfred Wegener propôs a teoria da deriva continental em 1912. Dentre as evidências
              que utilizou para sustentar sua hipótese, NÃO se inclui:
            </p>
          }
          options={[
            { letter: "a", text: "O encaixe geométrico entre a costa leste da América do Sul e a costa oeste da África" },
            { letter: "b", text: "A presença de fósseis do mesmo animal (Mesosaurus) nos dois lados do Atlântico Sul" },
            { letter: "c", text: "A continuidade de estruturas geológicas entre continentes separados" },
            { letter: "d", text: "Medições por GPS comprovando o afastamento dos continentes", correct: true },
            { letter: "e", text: "Vestígios de climas pretéritos, como carvão mineral em regiões polares" },
          ]}
          resolution={
            <p>
              Wegener formulou sua teoria em 1912, muito antes da invenção do GPS (que só tornou
              possível medir o movimento das placas com precisão a partir da segunda metade do
              século XX). As demais alternativas são evidências reais que ele utilizou: o encaixe
              das costas, os fósseis em comum, a continuidade geológica e os registros climáticos
              pretéritos.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              A Cordilheira dos Andes, a mais longa cadeia montanhosa do mundo, foi formada pelo
              encontro entre a Placa de Nazca e a Placa Sul-Americana. O tipo de limite tectônico
              que gerou essa cadeia e o fenômeno associado são, respectivamente:
            </p>
          }
          options={[
            { letter: "a", text: "Divergente; expansão do assoalho oceânico" },
            { letter: "b", text: "Transformante; falha de deslizamento lateral" },
            { letter: "c", text: "Convergente oceano-continente; subducção com formação de cordilheira e arco vulcânico", correct: true },
            { letter: "d", text: "Convergente continente-continente; colisão sem subducção" },
            { letter: "e", text: "Ponto quente; pluma mantélica independente das placas" },
          ]}
          resolution={
            <p>
              Os Andes resultam de um limite convergente entre duas placas de tipos diferentes: a
              Placa de Nazca (oceânica, mais densa) mergulha sob a Placa Sul-Americana (continental,
              menos densa) — processo chamado subducção. O mergulho da crosta oceânica gera a
              Fossa Peru-Chile, enquanto o dobramento da placa continental e o magmatismo associado
              criam a Cordilheira dos Andes e seus vulcões. A colisão continente-continente (sem
              subducção) produziria os Himalaias, por exemplo.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              (ENEM adaptado) O Campo de Lavas Vulcânicas das Ilhas Havaianas forma uma cadeia que
              fica progressivamente mais antiga em direção ao noroeste. Esse padrão é explicado
              pela teoria dos pontos quentes. Com base nessa teoria, é CORRETO afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "O ponto quente migra com a placa do Pacífico para o noroeste" },
            { letter: "b", text: "O magma que forma as ilhas provém de um limite divergente entre placas" },
            { letter: "c", text: "A placa do Pacífico se move para o noroeste sobre um ponto quente fixo no manto, gerando ilhas cada vez mais antigas nessa direção", correct: true },
            { letter: "d", text: "As ilhas mais antigas ao noroeste são as mais altas e vulcanicamente ativas" },
            { letter: "e", text: "O fenômeno ocorre em limite transformante, onde as placas deslizam lateralmente" },
          ]}
          resolution={
            <p>
              Os pontos quentes são plumas de material muito quente fixas no manto. A placa do
              Pacífico se move lentamente para o noroeste sobre esse ponto quente, e cada região da
              placa que passa sobre ele recebe magma e forma uma ilha vulcânica. Com o tempo, essa
              parte da placa se afasta do ponto quente, o vulcanismo cessa e a ilha começa a erodir
              e afundar. Por isso, as ilhas mais ao noroeste são as mais antigas e menores, enquanto
              a Ilha do Havaí, ainda sobre o ponto quente, é a mais nova e vulcanicamente ativa.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              O padrão de paleomagnetismo registrado nas rochas do assoalho oceânico, em faixas
              simétricas de polaridade normal e inversa em ambos os lados das dorsais
              meso-oceânicas, constitui uma das principais evidências da teoria da tectônica de
              placas. Esse padrão comprova diretamente:
            </p>
          }
          options={[
            { letter: "a", text: "A existência de correntes de convecção no núcleo externo líquido" },
            { letter: "b", text: "A expansão do assoalho oceânico a partir das dorsais, com criação contínua de nova crosta", correct: true },
            { letter: "c", text: "A subducção da crosta oceânica sob a continental nos limites convergentes" },
            { letter: "d", text: "O movimento lateral das placas em limites transformantes" },
            { letter: "e", text: "A diferença de espessura entre crosta continental e oceânica" },
          ]}
          resolution={
            <p>
              Quando o magma sobe pelas dorsais e se solidifica, os minerais magnéticos nele
              presentes se alinham com o campo magnético terrestre vigente naquele momento. Como o
              campo magnético terrestre inverte sua polaridade periodicamente, as rochas formadas
              em épocas diferentes registram polaridades distintas. O resultado são faixas
              simétricas de polaridade normal e inversa em ambos os lados das dorsais — quanto mais
              longe da dorsal, mais antiga a rocha e mais inversões de polaridade foram registradas.
              Isso comprova diretamente que nova crosta é criada continuamente nas dorsais (expansão
              do assoalho oceânico) e que as placas se afastam a partir desses pontos.
            </p>
          }
        />
      </section>
    </article>
  );
}
