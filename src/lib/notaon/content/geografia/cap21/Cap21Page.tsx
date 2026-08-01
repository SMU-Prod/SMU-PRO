"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap21Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 21</span>
          <h1>Demografia: crescimento populacional e transição demográfica</h1>
          <p>
            A população mundial ultrapassou a marca de 8 bilhões de pessoas em 2022 e deve atingir
            cerca de 9,7 bilhões em 2050. Compreender como e por que as populações crescem, se
            estabilizam ou declinam é fundamental para planejar políticas públicas de saúde,
            educação, previdência e desenvolvimento. A demografia estuda esses processos por meio
            de indicadores como natalidade, mortalidade, fecundidade e esperança de vida, e o
            modelo da Transição Demográfica é o principal referencial teórico para entender a
            evolução das populações ao longo do tempo.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceitos básicos</span>
        <h2>1. Indicadores demográficos fundamentais</h2>
        <p>
          A demografia utiliza um conjunto preciso de indicadores para descrever e comparar as
          populações. A taxa de natalidade indica o número de nascidos vivos por mil habitantes em
          um determinado período (geralmente um ano). A taxa de mortalidade indica o número de
          óbitos por mil habitantes. A taxa de mortalidade infantil mede o número de crianças que
          morrem antes de completar um ano por mil nascidos vivos — é considerada um dos mais
          sensíveis indicadores de desenvolvimento humano.
        </p>
        <p>
          A taxa de fecundidade total (TFT) indica o número médio de filhos que uma mulher teria
          ao longo de sua vida reprodutiva. A taxa de reposição populacional corresponde a uma TFT
          de aproximadamente 2,1 filhos por mulher — abaixo desse valor, a tendência é de declínio
          populacional no longo prazo. A esperança de vida ao nascer mede quantos anos, em média,
          uma pessoa nascida em determinado ano e país pode esperar viver.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais indicadores demográficos — conceitos e fórmulas</caption>
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Definição</th>
                <th>Unidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Taxa de natalidade</td>
                <td>Nascidos vivos / população total × 1.000</td>
                <td>‰ (por mil)</td>
              </tr>
              <tr>
                <td>Taxa de mortalidade</td>
                <td>Óbitos / população total × 1.000</td>
                <td>‰ (por mil)</td>
              </tr>
              <tr>
                <td>Taxa de crescimento vegetativo</td>
                <td>Natalidade − Mortalidade</td>
                <td>‰ (por mil)</td>
              </tr>
              <tr>
                <td>Taxa de mortalidade infantil</td>
                <td>Óbitos de menores de 1 ano / nascidos vivos × 1.000</td>
                <td>‰ (por mil)</td>
              </tr>
              <tr>
                <td>Taxa de fecundidade total (TFT)</td>
                <td>Número médio de filhos por mulher em idade reprodutiva</td>
                <td>Filhos por mulher</td>
              </tr>
              <tr>
                <td>Esperança de vida ao nascer</td>
                <td>Média de anos que um recém-nascido pode esperar viver</td>
                <td>Anos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Modelo clássico</span>
        <h2>2. Teoria da Transição Demográfica</h2>
        <p>
          A Teoria da Transição Demográfica descreve a trajetória histórica que as populações
          percorrem, em geral, à medida que passam por processos de desenvolvimento econômico e
          social. O modelo, formulado inicialmente por Warren Thompson (1929) e aprimorado por Frank
          Notestein, divide a evolução demográfica em fases, caracterizadas pela relação entre
          taxas de natalidade e mortalidade.
        </p>
        <p>
          Na Fase 1 (pré-transição), tanto a natalidade quanto a mortalidade são altas, resultando
          em crescimento lento. Na Fase 2 (início da transição), a mortalidade cai rapidamente
          (graças a melhorias sanitárias, médicas e nutricionais) enquanto a natalidade permanece
          alta, gerando explosão demográfica. Na Fase 3 (transição avançada), a natalidade também
          começa a cair, reduzindo o ritmo de crescimento. Na Fase 4 (pós-transição), ambas as
          taxas são baixas, com crescimento próximo a zero. Alguns autores identificam uma Fase 5,
          em que a natalidade cai abaixo da mortalidade, levando ao declínio populacional.
        </p>
      </section>

      {/* SVG Figure 1 — Transição Demográfica */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 330" xmlns="http://www.w3.org/2000/svg" aria-label="Gráfico da Transição Demográfica">
          <rect width="700" height="330" fill="#f5f5f5" />
          <text x="350" y="26" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#333">
            Modelo da Transição Demográfica
          </text>
          {/* Eixos */}
          <line x1="60" y1="50" x2="60" y2="260" stroke="#555" strokeWidth="2" />
          <line x1="60" y1="260" x2="670" y2="260" stroke="#555" strokeWidth="2" />
          <text x="30" y="160" fontSize="11" fill="#555" transform="rotate(-90,30,160)">Taxa (‰)</text>
          <text x="365" y="285" textAnchor="middle" fontSize="11" fill="#555">Tempo / Desenvolvimento</text>
          {/* Curva de natalidade — azul */}
          <polyline
            points="60,80 130,80 200,80 270,80 340,120 410,160 480,200 550,220 620,220 670,220"
            fill="none" stroke="#1976d2" strokeWidth="3"
          />
          {/* Curva de mortalidade — vermelho */}
          <polyline
            points="60,75 130,73 200,130 270,175 340,195 410,205 480,210 550,215 620,218 670,220"
            fill="none" stroke="#e53935" strokeWidth="3"
          />
          {/* Área de crescimento (entre as curvas) — preenchimento */}
          <polygon
            points="200,80 270,80 340,120 410,160 480,200 550,220 620,220 620,218 550,215 480,210 410,205 340,195 270,175 200,130"
            fill="#4caf50" fillOpacity="0.2"
          />
          {/* Divisores de fase */}
          <line x1="130" y1="50" x2="130" y2="260" stroke="#999" strokeWidth="1" strokeDasharray="5,4" />
          <line x1="270" y1="50" x2="270" y2="260" stroke="#999" strokeWidth="1" strokeDasharray="5,4" />
          <line x1="480" y1="50" x2="480" y2="260" stroke="#999" strokeWidth="1" strokeDasharray="5,4" />
          <line x1="620" y1="50" x2="620" y2="260" stroke="#999" strokeWidth="1" strokeDasharray="5,4" />
          {/* Rótulos de fase */}
          <text x="95" y="48" textAnchor="middle" fontSize="11" fill="#555">Fase 1</text>
          <text x="200" y="48" textAnchor="middle" fontSize="11" fill="#555">Fase 2</text>
          <text x="375" y="48" textAnchor="middle" fontSize="11" fill="#555">Fase 3</text>
          <text x="550" y="48" textAnchor="middle" fontSize="11" fill="#555">Fase 4</text>
          <text x="645" y="48" textAnchor="middle" fontSize="11" fill="#555">Fase 5</text>
          {/* Legenda */}
          <rect x="70" y="275" width="20" height="4" fill="#1976d2" />
          <text x="96" y="280" fontSize="12" fill="#333">Natalidade</text>
          <rect x="200" y="275" width="20" height="4" fill="#e53935" />
          <text x="226" y="280" fontSize="12" fill="#333">Mortalidade</text>
          <rect x="340" y="272" width="20" height="10" fill="#4caf50" fillOpacity="0.4" />
          <text x="366" y="280" fontSize="12" fill="#333">Crescimento populacional</text>
        </svg>
        <figcaption>
          Modelo da Transição Demográfica: na Fase 2, a queda da mortalidade antes da natalidade
          gera explosão demográfica. A área verde representa o crescimento vegetativo positivo.
          Países desenvolvidos estão nas fases 4-5; países em desenvolvimento nas fases 2-3.
        </figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Crescimento mundial</span>
        <h2>3. Crescimento da população mundial</h2>
        <p>
          A população mundial levou toda a história da humanidade para atingir 1 bilhão de pessoas
          (por volta de 1804). O segundo bilhão foi atingido em apenas 123 anos (1927). A explosão
          demográfica do século XX — impulsionada pela Revolução Verde, pelos avanços da medicina e
          pelo saneamento — acelerou esse processo: o 3º bilhão em 1960 (33 anos), o 4º em 1974
          (14 anos), o 5º em 1987, o 6º em 1999 e o 7º em 2011. Em novembro de 2022, o mundo
          atingiu 8 bilhões de habitantes.
        </p>
        <p>
          O ritmo de crescimento, porém, está desacelerando. A taxa de crescimento anual da
          população mundial, que chegou a 2,1% ao ano nos anos 1960, caiu para cerca de 0,9% ao
          ano em 2023. A ONU projeta que a população mundial atingirá um pico de aproximadamente
          10,4 bilhões por volta de 2080-2100 e poderá começar a declinar depois disso. O
          crescimento atual está concentrado na África Subsaariana, que deve responder por mais da
          metade do crescimento populacional global até 2050.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Marcos do crescimento da população mundial</caption>
            <thead>
              <tr>
                <th>Marco</th>
                <th>Ano aproximado</th>
                <th>Intervalo (anos)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1 bilhão</td><td>1804</td><td>—</td></tr>
              <tr><td>2 bilhões</td><td>1927</td><td>123</td></tr>
              <tr><td>3 bilhões</td><td>1960</td><td>33</td></tr>
              <tr><td>4 bilhões</td><td>1974</td><td>14</td></tr>
              <tr><td>5 bilhões</td><td>1987</td><td>13</td></tr>
              <tr><td>6 bilhões</td><td>1999</td><td>12</td></tr>
              <tr><td>7 bilhões</td><td>2011</td><td>12</td></tr>
              <tr><td>8 bilhões</td><td>2022</td><td>11</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura etária</span>
        <h2>4. Pirâmides etárias e estrutura por idade</h2>
        <p>
          A pirâmide etária é uma representação gráfica da distribuição da população por sexo e
          faixa de idade. A forma da pirâmide revela o estágio de transição demográfica em que um
          país se encontra e permite identificar tendências futuras de crescimento, envelhecimento
          e demandas por serviços públicos.
        </p>
        <p>
          A pirâmide expansiva (base larga, topo estreito) é característica de países com alta
          natalidade e baixa esperança de vida, típicos de fases iniciais de desenvolvimento —
          comum em países africanos como Níger e Mali. A pirâmide estacionária (lados quase
          retos) indica taxas de natalidade e mortalidade equilibradas, com população estável —
          típica de países em estágio intermediário. A pirâmide constritiva (base estreita,
          meio largo) caracteriza países com baixa fecundidade e envelhecimento populacional —
          típica de países como Japão, Alemanha e Itália, e o rumo do Brasil.
        </p>
        <p>
          O bônus demográfico (ou janela de oportunidade) é o período em que a proporção de
          pessoas em idade ativa (15 a 64 anos) é elevada em relação às dependentes (crianças
          e idosos), gerando maior potencial de poupança e crescimento econômico. O Brasil
          viveu seu bônus demográfico entre os anos 1970 e 2020 aproximadamente.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Envelhecimento populacional</span>
        <h2>5. Envelhecimento e seus desafios</h2>
        <p>
          O envelhecimento populacional é uma das maiores transformações demográficas do século XXI.
          No Brasil, a proporção de idosos (60 anos ou mais) passou de 3% em 1950 para cerca de
          15% em 2023 e deve atingir 30% em 2050. Esse processo, acelerado pela queda da
          fecundidade e pelo aumento da esperança de vida, impõe desafios imensos ao sistema
          previdenciário, de saúde e de assistência social.
        </p>
        <p>
          A razão de dependência de idosos mede a proporção de idosos em relação à população em
          idade ativa. Com o envelhecimento, essa razão aumenta, pressionando as finanças públicas.
          A Reforma da Previdência brasileira (Emenda Constitucional 103/2019) foi motivada,
          em grande parte, por esse processo de envelhecimento acelerado. Países como Japão
          (a "nação grisalha"), Coreia do Sul, Alemanha e Itália já enfrentam os desdobramentos
          mais agudos desse fenômeno.
        </p>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Brasil em números</span>
        <h2>6. A demografia brasileira</h2>
        <p>
          O Brasil realizou seu primeiro censo em 1872 e conta com o IBGE como principal
          instituição produtora de dados demográficos. O Censo de 2022 revelou que o Brasil
          tem 203,1 milhões de habitantes, com taxa de crescimento anual de 0,52% — a menor
          desde 1872. A TFT brasileira está em torno de 1,7 filho por mulher, abaixo da taxa de
          reposição (2,1), indicando que o Brasil já iniciou o processo de envelhecimento
          irreversível de sua população.
        </p>
        <p>
          A esperança de vida ao nascer no Brasil é de cerca de 76 anos (com diferença entre
          homens e mulheres: 72 e 79 anos respectivamente). A mortalidade infantil caiu de
          47,1 por mil em 1990 para cerca de 12 por mil em 2023, reflexo das políticas de
          saúde pública, imunização e expansão do saneamento. A distribuição regional da
          população é desigual: o Sudeste concentra cerca de 42% da população em apenas 11%
          do território; o Norte, com 45% do território, abriga menos de 9% da população.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Indicadores demográficos do Brasil — evolução histórica (Censo IBGE)</caption>
            <thead>
              <tr>
                <th>Indicador</th>
                <th>1970</th>
                <th>1991</th>
                <th>2010</th>
                <th>2022</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>População total</td>
                <td>93 mi</td>
                <td>147 mi</td>
                <td>191 mi</td>
                <td>203 mi</td>
              </tr>
              <tr>
                <td>Taxa de fecundidade total</td>
                <td>5,8</td>
                <td>2,9</td>
                <td>1,9</td>
                <td>1,7</td>
              </tr>
              <tr>
                <td>Esperança de vida (anos)</td>
                <td>52,7</td>
                <td>66,9</td>
                <td>73,9</td>
                <td>≈ 76</td>
              </tr>
              <tr>
                <td>Mortalidade infantil (‰)</td>
                <td>≈ 115</td>
                <td>≈ 47</td>
                <td>≈ 16</td>
                <td>≈ 12</td>
              </tr>
              <tr>
                <td>Proporção de idosos (%)</td>
                <td>3,6</td>
                <td>5,6</td>
                <td>10,8</td>
                <td>≈ 15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG Figure 2 — Pirâmides etárias */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" aria-label="Comparação de pirâmides etárias">
          <rect width="700" height="300" fill="#f8f8f8" />
          <text x="350" y="22" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">
            Tipos de Pirâmides Etárias
          </text>

          {/* Pirâmide 1: Expansiva (país jovem) */}
          <text x="117" y="42" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#c62828">Expansiva</text>
          <text x="117" y="55" textAnchor="middle" fontSize="10" fill="#555">(Alta natalidade)</text>
          {/* Barras femininas (direita) e masculinas (esquerda) — pirâmide expansiva */}
          {[
            [60, 60], [54, 54], [46, 46], [38, 38], [30, 30], [22, 22], [14, 14], [8, 8]
          ].map(([fem, masc], i) => (
            <g key={i}>
              <rect x={117} y={65 + i * 25} width={fem} height={20} fill="#ef9a9a" />
              <rect x={117 - masc} y={65 + i * 25} width={masc} height={20} fill="#90caf9" />
            </g>
          ))}
          <text x="60" y="285" textAnchor="middle" fontSize="10" fill="#1976d2">Masculino</text>
          <text x="175" y="285" textAnchor="middle" fontSize="10" fill="#c62828">Feminino</text>

          {/* Pirâmide 2: Estacionária */}
          <text x="350" y="42" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#f57f17">Estacionária</text>
          <text x="350" y="55" textAnchor="middle" fontSize="10" fill="#555">(Transição)</text>
          {[
            [28, 28], [30, 30], [30, 30], [30, 30], [28, 28], [26, 26], [20, 20], [12, 12]
          ].map(([fem, masc], i) => (
            <g key={i}>
              <rect x={350} y={65 + i * 25} width={fem} height={20} fill="#ffcc80" />
              <rect x={350 - masc} y={65 + i * 25} width={masc} height={20} fill="#fff176" />
            </g>
          ))}

          {/* Pirâmide 3: Constritiva (país envelhecido) */}
          <text x="583" y="42" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1b5e20">Constritiva</text>
          <text x="583" y="55" textAnchor="middle" fontSize="10" fill="#555">(Baixa natalidade)</text>
          {[
            [20, 20], [28, 28], [34, 34], [36, 36], [34, 34], [30, 30], [26, 26], [18, 18]
          ].map(([fem, masc], i) => (
            <g key={i}>
              <rect x={583} y={65 + i * 25} width={fem} height={20} fill="#a5d6a7" />
              <rect x={583 - masc} y={65 + i * 25} width={masc} height={20} fill="#c8e6c9" />
            </g>
          ))}

          {/* Faixas etárias */}
          {["65+", "50-64", "35-49", "20-34", "15-19", "10-14", "5-9", "0-4"].map((label, i) => (
            <text key={i} x="700" y={80 + i * 25} fontSize="9" fill="#555" textAnchor="end">{label}</text>
          ))}
        </svg>
        <figcaption>
          Os três tipos de pirâmides etárias: a expansiva é característica de países com alta
          natalidade (Fase 2); a estacionária reflete transição demográfica avançada (Fase 3);
          a constritiva indica envelhecimento e baixa fecundidade (Fases 4-5), como no Japão e
          nos países europeus.
        </figcaption>
      </figure>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Teorias demográficas</span>
        <h2>7. Teorias sobre população: Malthus e neomalthusianismo</h2>
        <p>
          Thomas Malthus (1766-1834), em seu "Ensaio sobre o Princípio da População" (1798),
          propôs que a população cresce em progressão geométrica enquanto os alimentos crescem
          em progressão aritmética, gerando inevitável escassez. Segundo Malthus, "freios
          preventivos" (celibato, casamento tardio) e "freios repressivos" (guerras, fome,
          doenças) controlariam o crescimento populacional. Suas previsões não se concretizaram
          por subestimar o progresso tecnológico na produção de alimentos.
        </p>
        <p>
          O neomalthusianismo, surgido no século XX, atualizou as preocupações malthusianas:
          defende que o crescimento populacional nos países em desenvolvimento deve ser controlado
          por meio de políticas de planejamento familiar e contracepção. A crítica a essa
          corrente aponta que o problema não é o número de pessoas, mas a distribuição desigual
          dos recursos — uma família norte-americana consome em média 10 vezes mais recursos
          naturais que uma família nigeriana.
        </p>
        <p>
          A teoria reformista (ou estruturalista) contra-argumenta que a miséria e o alto índice
          de natalidade são consequências do subdesenvolvimento, não suas causas. Defendem que
          melhorias em educação, renda e saúde — especialmente o empoderamento feminino —
          naturalmente reduzem a fecundidade, como demonstrou a própria experiência brasileira.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Distribuição no espaço</span>
        <h2>8. Distribuição espacial da população mundial</h2>
        <p>
          A população mundial não está distribuída uniformemente. Aproximadamente 90% da
          humanidade vive no Hemisfério Norte, e mais da metade em uma faixa que vai da Europa
          Ocidental ao Leste Asiático. As maiores concentrações populacionais estão no Sul e
          Sudeste Asiático (Índia e China juntas somam quase 3 bilhões de pessoas), no Leste
          Asiático (Japão, Coreia), no Sudeste da Ásia e na Europa Ocidental.
        </p>
        <p>
          Os "vazios demográficos" — áreas de baixíssima densidade — correspondem a regiões de
          clima extremo: desertos quentes (Saara, Atacama), regiões polares (Ártico, Antártica),
          florestas equatoriais densas (bacia amazônica, Congo) e altitudes muito elevadas
          (Himalaia, Andes). No Brasil, o Norte e o Centro-Oeste têm as menores densidades
          demográficas, enquanto o Sudeste e partes do Sul apresentam as maiores.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Urbanização e demografia</span>
        <h2>9. Urbanização e densidade demográfica</h2>
        <p>
          Em 2007, pela primeira vez na história, a população urbana superou a rural no mundo.
          Hoje, mais de 57% da humanidade vive em cidades, e esse percentual deve atingir 68%
          em 2050. A urbanização acelerada é característica dos países em desenvolvimento, com
          destaque para a África e a Ásia. No Brasil, o processo de urbanização foi veloz: em
          1940, apenas 31% da população era urbana; em 2022, esse índice chegou a 87,3%.
        </p>
        <p>
          A megalópole é uma área urbana contínua formada pela fusão de várias metrópoles. No
          Brasil, destaca-se o eixo Rio-São Paulo (chamado por alguns de megalópole ou
          macrometrópole paulista). As megacidades são aglomerações com mais de 10 milhões de
          habitantes — em 2023, havia 43 megacidades no mundo, lideradas por Tóquio (37,4 mi),
          Delhi (32,9 mi) e Xangai (29 mi). São Paulo (22,4 mi) é a maior megacidade da
          América do Sul.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Distribuição regional da população brasileira (Censo 2022)</caption>
            <thead>
              <tr>
                <th>Região</th>
                <th>População (mi)</th>
                <th>% do total</th>
                <th>% do território</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Sudeste</td><td>88,4</td><td>43,5%</td><td>10,8%</td></tr>
              <tr><td>Nordeste</td><td>54,6</td><td>26,9%</td><td>18,3%</td></tr>
              <tr><td>Sul</td><td>30,0</td><td>14,8%</td><td>6,8%</td></tr>
              <tr><td>Norte</td><td>17,7</td><td>8,7%</td><td>45,3%</td></tr>
              <tr><td>Centro-Oeste</td><td>16,3</td><td>8,0%</td><td>18,8%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section" id="exercicios">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Exercício 1"
          statement={
            <p>
              A taxa de mortalidade infantil é considerada um dos indicadores mais sensíveis do
              nível de desenvolvimento humano de um país. Qual das alternativas abaixo define
              corretamente esse indicador?
            </p>
          }
          options={[
            { letter: "a", text: "Número total de crianças menores de 5 anos que morrem em um país por ano." },
            { letter: "b", text: "Número de óbitos de crianças menores de 1 ano por mil nascidos vivos em um determinado período.", correct: true },
            { letter: "c", text: "Percentual de crianças que não chegam à adolescência em relação ao total da população." },
            { letter: "d", text: "Razão entre óbitos infantis e adultos registrados em um município." },
            { letter: "e", text: "Número de doenças infantis registradas por milhão de habitantes em um ano." },
          ]}
          resolution={
            <p>
              A taxa de mortalidade infantil (TMI) é um indicador preciso: mede o número de óbitos
              de crianças com menos de 1 ano de idade por cada 1.000 nascidos vivos, em um dado
              período e local. Ela reflete condições de saneamento básico, acesso a serviços de
              saúde, qualidade da alimentação materna e infantil, cobertura vacinal e nível de
              pobreza. Países com alta TMI (como os de menor IDH) estão nas fases iniciais de
              transição demográfica. O Brasil reduziu sua TMI de cerca de 115‰ nos anos 1970 para
              aproximadamente 12‰ em 2023. A alternativa B está correta.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              Sobre a Teoria da Transição Demográfica, assinale a alternativa que descreve
              corretamente o que ocorre na Fase 2 do modelo.
            </p>
          }
          options={[
            { letter: "a", text: "Tanto a natalidade quanto a mortalidade são elevadas, resultando em crescimento lento da população." },
            { letter: "b", text: "A natalidade cai rapidamente enquanto a mortalidade já está baixa, levando ao declínio populacional." },
            { letter: "c", text: "A mortalidade cai rapidamente (por melhorias sanitárias e médicas) enquanto a natalidade permanece alta, gerando explosão demográfica e rápido crescimento populacional.", correct: true },
            { letter: "d", text: "Ambas as taxas são baixas e equilibradas, com crescimento populacional próximo a zero." },
            { letter: "e", text: "A mortalidade supera a natalidade, provocando declínio absoluto da população." },
          ]}
          resolution={
            <p>
              Na Fase 2 da Transição Demográfica, ocorre a queda rápida da mortalidade — motivada
              por avanços na medicina (antibióticos, vacinas), melhorias sanitárias (água tratada,
              esgoto), aumento da produção alimentar e maior acesso a serviços de saúde. Entretanto,
              a natalidade ainda permanece elevada, pois mudanças culturais e comportamentais são
              mais lentas. Essa defasagem entre a queda da mortalidade e a queda da natalidade
              gera um período de crescimento populacional acelerado — a chamada "explosão
              demográfica". A maior parte dos países em desenvolvimento passou por essa fase
              no século XX. A alternativa C está correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              (ENEM adaptado) O Censo Demográfico de 2022 revelou que a taxa de fecundidade
              total do Brasil é de 1,7 filho por mulher, abaixo da taxa de reposição de 2,1.
              Quais são as consequências demográficas esperadas para o Brasil nas próximas
              décadas, considerando esse dado?
            </p>
          }
          options={[
            { letter: "a", text: "Aumento acelerado da população jovem e expansão da base da pirâmide etária, pressionando o sistema educacional." },
            { letter: "b", text: "Envelhecimento populacional progressivo, aumento da razão de dependência de idosos e pressão crescente sobre o sistema previdenciário e de saúde.", correct: true },
            { letter: "c", text: "Estabilização imediata da população em 203 milhões, sem alterações significativas na estrutura etária." },
            { letter: "d", text: "Explosão demográfica nas regiões Norte e Nordeste, compensando a queda de fecundidade no Sudeste." },
            { letter: "e", text: "Aumento da mortalidade infantil em decorrência da menor taxa de fecundidade e menor atenção às crianças nascidas." },
          ]}
          resolution={
            <p>
              Uma taxa de fecundidade total abaixo de 2,1 (taxa de reposição) significa que cada
              geração é numericamente menor que a anterior. Isso leva ao envelhecimento progressivo
              da pirâmide etária — a base (crianças e jovens) encolhe enquanto o topo (idosos) se
              expande. As consequências incluem: aumento da razão de dependência de idosos
              (mais idosos por trabalhador ativo), pressão crescente sobre o sistema previdenciário
              (mais beneficiários e menos contribuintes), demanda por mais serviços de saúde
              geriatric e cuidados de longa duração, e possível declínio absoluto da população
              brasileira nas próximas décadas. A alternativa B está correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              Sobre as teorias demográficas, compare as perspectivas de Malthus e dos
              reformistas (estruturalistas) sobre a relação entre pobreza e crescimento
              populacional. Assinale a alternativa que apresenta corretamente as posições
              de cada corrente.
            </p>
          }
          options={[
            { letter: "a", text: "Malthus e os reformistas concordam que o problema é a distribuição desigual dos recursos, devendo-se redistribuir a riqueza para conter o crescimento populacional." },
            { letter: "b", text: "Malthus defendia que o crescimento populacional é sempre benéfico; os reformistas defendem o controle artificial da natalidade." },
            { letter: "c", text: "Malthus argumentava que a superpopulação causa a miséria; os reformistas argumentam que a miséria e o subdesenvolvimento é que causam a alta natalidade, e que o desenvolvimento social reduz naturalmente a fecundidade.", correct: true },
            { letter: "d", text: "Ambas as correntes rejeitam qualquer intervenção do Estado na questão demográfica, defendendo o livre crescimento populacional." },
            { letter: "e", text: "Malthus propôs o controle artificial da natalidade por métodos contraceptivos; os reformistas defendiam o crescimento irrestrito da população." },
          ]}
          resolution={
            <p>
              Malthus (1798) argumentava que a superpopulação é a causa da miséria e da escassez,
              pois a população cresceria mais rápido que os recursos. Já a perspectiva reformista
              (estruturalista) inverte a causalidade: a pobreza, a falta de educação e a
              desigualdade social é que levam as famílias pobres a ter muitos filhos (como
              estratégia de seguridade em contextos de alta mortalidade infantil e ausência de
              previdência social). A solução não seria o controle de natalidade, mas o
              desenvolvimento humano — especialmente o empoderamento feminino, acesso à educação
              e saúde. A experiência histórica do Brasil confirma essa visão: a TFT caiu de 5,8
              em 1970 para 1,7 em 2022 sem políticas explícitas de controle de natalidade,
              mas como consequência do desenvolvimento social. A alternativa C está correta.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              (ENEM adaptado) O "bônus demográfico" é um conceito central para entender a relação
              entre estrutura populacional e desenvolvimento econômico. Analise as afirmativas
              sobre esse fenômeno:
              <br /><br />
              I. O bônus demográfico ocorre quando a proporção de população em idade ativa (15-64
              anos) é elevada em relação às populações dependentes (crianças e idosos), gerando
              maior potencial produtivo e de poupança.<br />
              II. O bônus demográfico é permanente — uma vez atingido, um país mantém essa vantagem
              indefinidamente, sem necessidade de políticas públicas específicas.<br />
              III. O aproveitamento do bônus demográfico depende de investimentos em educação,
              saúde e geração de empregos; sem essas políticas, a janela de oportunidade é
              desperdiçada.
              <br /><br />
              Estão corretas apenas:
            </p>
          }
          options={[
            { letter: "a", text: "I apenas." },
            { letter: "b", text: "II apenas." },
            { letter: "c", text: "I e III apenas.", correct: true },
            { letter: "d", text: "II e III apenas." },
            { letter: "e", text: "I, II e III." },
          ]}
          resolution={
            <p>
              A afirmativa I é verdadeira: o bônus demográfico (ou "janela de oportunidade")
              ocorre exatamente quando a proporção de trabalhadores em relação a dependentes é
              alta, aumentando a capacidade produtiva e de poupança da economia. A afirmativa II
              é falsa: o bônus demográfico é temporário — à medida que a população envelhece, a
              proporção de idosos aumenta, encerrando a "janela". O Japão e a Europa já saíram
              dessa fase. A afirmativa III é verdadeira: o bônus demográfico é apenas potencial —
              só se converte em crescimento econômico real se for acompanhado de investimentos em
              educação de qualidade, saúde, infraestrutura e criação de empregos produtivos.
              O Brasil aproveitou parcialmente seu bônus; países como a Coreia do Sul o
              aproveitaram mais efetivamente. A alternativa C (I e III) está correta.
            </p>
          }
        />
      </section>
    </article>
  );
}
