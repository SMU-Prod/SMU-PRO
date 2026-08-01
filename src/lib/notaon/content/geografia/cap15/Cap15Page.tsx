"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap15Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 15</span>
          <h1>Crise hídrica, gestão da água e sustentabilidade</h1>
          <p>
            A água doce é um recurso finito e fundamental para a vida no planeta, mas sua
            disponibilidade está cada vez mais ameaçada pelo crescimento populacional, pela
            poluição, pelo uso irracional e pelas mudanças climáticas. A crise hídrica é um dos
            maiores desafios do século XXI, afetando países ricos e pobres, e exigindo soluções
            que combinam tecnologia, governança, educação ambiental e cooperação internacional.
            Neste capítulo, compreenderemos as causas e consequências da escassez de água, e as
            principais estratégias para uma gestão sustentável desse recurso.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Disponibilidade global</span>
        <h2>1. A distribuição desigual da água no mundo</h2>
        <p>
          A Terra possui aproximadamente 1,4 bilhão de km³ de água, mas apenas 2,5% é doce. Desse
          total, cerca de 69% está nas geleiras e calotas polares, 30% está em aquíferos
          subterrâneos, e menos de 1% está disponível em rios, lagos e na atmosfera — ou seja,
          facilmente acessível. Isso significa que a quantidade de água doce prontamente disponível
          para uso humano é extremamente limitada.
        </p>
        <p>
          A distribuição da água doce é extremamente desigual entre os países e regiões. Países
          como Brasil, Rússia, Canadá e China concentram a maior parte da água doce superficial,
          enquanto países do Oriente Médio, Norte da África e partes da Ásia Central enfrentam
          escassez severa. Estima-se que mais de 2 bilhões de pessoas vivem em países com estresse
          hídrico elevado.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Países com maior disponibilidade de água doce renovável per capita (km³/ano)</caption>
            <thead>
              <tr>
                <th>País</th>
                <th>Recursos hídricos (km³/ano)</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brasil</td>
                <td>8.647</td>
                <td>Abundância (maior do mundo)</td>
              </tr>
              <tr>
                <td>Rússia</td>
                <td>4.508</td>
                <td>Abundância</td>
              </tr>
              <tr>
                <td>Canadá</td>
                <td>2.902</td>
                <td>Abundância</td>
              </tr>
              <tr>
                <td>China</td>
                <td>2.840</td>
                <td>Estresse moderado (por habitante)</td>
              </tr>
              <tr>
                <td>Índia</td>
                <td>1.911</td>
                <td>Estresse alto (por habitante)</td>
              </tr>
              <tr>
                <td>Kuwait</td>
                <td>0,02</td>
                <td>Escassez extrema</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG Diagrama distribuição da água */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="300" fill="#f0f9ff" rx="8" />
          <text x="350" y="28" fontSize="15" fontWeight="bold" fill="#0c4a6e" textAnchor="middle">Distribuição da Água na Terra</text>
          {/* Total de água — círculo grande */}
          <circle cx="100" cy="160" r="80" fill="#60a5fa" opacity="0.8" />
          <text x="100" y="155" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">Água total</text>
          <text x="100" y="172" fontSize="11" fill="white" textAnchor="middle">1,4 bi km³</text>
          <text x="100" y="188" fontSize="11" fill="white" textAnchor="middle">100%</text>
          {/* Seta 1 */}
          <path d="M 185 160 L 245 160" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowG)" />
          {/* Água doce — círculo médio */}
          <circle cx="310" cy="160" r="55" fill="#34d399" opacity="0.85" />
          <text x="310" y="154" fontSize="11" fontWeight="bold" fill="white" textAnchor="middle">Água doce</text>
          <text x="310" y="168" fontSize="11" fill="white" textAnchor="middle">apenas 2,5%</text>
          {/* Seta 2 */}
          <path d="M 368 160 L 428 160" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowG)" />
          {/* Água doce acessível */}
          <circle cx="480" cy="160" r="35" fill="#6ee7b7" opacity="0.9" />
          <text x="480" y="154" fontSize="10" fontWeight="bold" fill="#064e3b" textAnchor="middle">Acessível</text>
          <text x="480" y="168" fontSize="10" fill="#064e3b" textAnchor="middle">~0,77%</text>
          {/* Seta 3 */}
          <path d="M 518 160 L 558 160" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowG)" />
          {/* Rios e lagos */}
          <circle cx="600" cy="160" r="22" fill="#0ea5e9" opacity="0.9" />
          <text x="600" y="155" fontSize="9" fontWeight="bold" fill="white" textAnchor="middle">Rios/</text>
          <text x="600" y="167" fontSize="9" fill="white" textAnchor="middle">Lagos</text>
          {/* Legenda dos 2,5% */}
          <text x="310" y="230" fontSize="10" fill="#374151" textAnchor="middle">Geleiras: 69%</text>
          <text x="310" y="244" fontSize="10" fill="#374151" textAnchor="middle">Subterrânea: 30%</text>
          <text x="310" y="258" fontSize="10" fill="#374151" textAnchor="middle">Superficial/atmosférica: 1%</text>
          <rect x="230" y="220" width="160" height="48" rx="4" fill="white" stroke="#6ee7b7" strokeWidth="1.5" opacity="0.8" />
          <text x="310" y="215" fontSize="10" fill="#065f46" fontWeight="bold" textAnchor="middle">Composição da água doce</text>
          <defs>
            <marker id="arrowG" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#374151" />
            </marker>
          </defs>
          <text x="350" y="290" fontSize="11" fill="#6b7280" textAnchor="middle">Apenas ~0,77% da água do planeta está prontamente disponível para uso humano</text>
        </svg>
        <figcaption>Representação proporcional da distribuição da água na Terra, evidenciando a raridade da água doce acessível.</figcaption>
      </figure>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceitos-chave</span>
        <h2>2. Estresse hídrico e escassez de água</h2>
        <p>
          O <strong>estresse hídrico</strong> ocorre quando a demanda por água de uma região supera
          a disponibilidade, ou quando a qualidade da água é tão comprometida que seu uso fica
          restrito. O indicador mais usado é a relação entre a captação total de água e a
          disponibilidade total:
        </p>
        <ul>
          <li>
            <strong>Baixo estresse:</strong> captação menor que 10% da disponibilidade.
          </li>
          <li>
            <strong>Médio estresse:</strong> captação entre 10% e 20%.
          </li>
          <li>
            <strong>Alto estresse:</strong> captação entre 20% e 40%.
          </li>
          <li>
            <strong>Escassez:</strong> captação acima de 40% — situação crítica.
          </li>
        </ul>
        <p>
          Atualmente, mais de 40 países sofrem com escassez de água, incluindo grandes economias
          como Índia, China e partes dos Estados Unidos. O relatório do World Resources Institute
          (WRI) aponta que 17 países — que abrigam um quarto da população mundial — enfrentam
          nível extremamente elevado de estresse hídrico.
        </p>
        <p>
          A <strong>pegada hídrica</strong> é um conceito relacionado: mede o volume total de água
          usado direta e indiretamente para produzir bens e serviços. Por exemplo, produzir 1 kg
          de carne bovina consome em média 15.400 litros de água (incluindo a água para irrigar a
          pastagem, para o animal beber etc.), enquanto 1 kg de trigo consome cerca de 1.300 litros.
        </p>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Causas da crise</span>
        <h2>3. Causas da crise hídrica global</h2>
        <p>
          A crise hídrica é resultado da convergência de múltiplos fatores:
        </p>
        <ul>
          <li>
            <strong>Crescimento populacional:</strong> A população mundial dobrou desde 1960, e a
            demanda por água cresceu ainda mais rapidamente (triplicou no mesmo período), devido à
            urbanização, industrialização e mudanças nos padrões de consumo.
          </li>
          <li>
            <strong>Mudanças climáticas:</strong> O aquecimento global altera os padrões de
            precipitação, intensifica secas e inundações, derrete geleiras (que abastecem rios) e
            eleva a evapotranspiração.
          </li>
          <li>
            <strong>Poluição:</strong> Esgotos domésticos, resíduos industriais, agrotóxicos e
            metais pesados contaminam rios, lagos e aquíferos, tornando a água imprópria para uso.
          </li>
          <li>
            <strong>Agricultura intensiva:</strong> A irrigação agrícola consome cerca de 70% da
            água doce retirada dos mananciais em nível mundial. Sistemas de irrigação ineficientes
            desperdiçam grande parte dessa água.
          </li>
          <li>
            <strong>Desmatamento:</strong> Reduz a regulação do ciclo hidrológico, diminui a
            infiltração e aumenta o escoamento superficial.
          </li>
          <li>
            <strong>Má gestão:</strong> Falta de investimento em saneamento, perdas nas redes de
            distribuição (no Brasil, chegam a 38% da água tratada) e ausência de políticas
            integradas.
          </li>
        </ul>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais setores de uso da água doce no mundo</caption>
            <thead>
              <tr>
                <th>Setor</th>
                <th>Participação no uso global</th>
                <th>Principal finalidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Agricultura</td>
                <td>~70%</td>
                <td>Irrigação de culturas</td>
              </tr>
              <tr>
                <td>Indústria</td>
                <td>~20%</td>
                <td>Resfriamento, processos industriais</td>
              </tr>
              <tr>
                <td>Uso doméstico</td>
                <td>~10%</td>
                <td>Consumo humano, higiene, saneamento</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Brasil</span>
        <h2>4. A crise hídrica no Brasil</h2>
        <p>
          Apesar de ser o país com maior disponibilidade hídrica do mundo, o Brasil enfrenta crises
          recorrentes de abastecimento. Isso ocorre porque a distribuição da água é profundamente
          desigual em seu território:
        </p>
        <ul>
          <li>
            <strong>Região Norte:</strong> Abriga ~80% da água doce nacional (bacia amazônica), mas
            tem menos de 5% da população brasileira.
          </li>
          <li>
            <strong>Semiárido nordestino:</strong> Cerca de 27 milhões de pessoas vivem em uma
            região sujeita a secas prolongadas e irregularidade pluviométrica.
          </li>
          <li>
            <strong>Região Sudeste:</strong> Alta concentração populacional e industrial gera
            grande demanda. A crise hídrica de 2014-2015 em São Paulo (Sistema Cantareira chegou
            a 3% da capacidade) evidenciou a vulnerabilidade mesmo de regiões desenvolvidas.
          </li>
        </ul>
        <p>
          A <strong>crise do Sistema Cantareira (2014-2015)</strong> é o caso mais emblemático
          da crise hídrica brasileira recente. O Sistema Cantareira abastece cerca de 9 milhões de
          pessoas na Região Metropolitana de São Paulo. A conjugação de seca histórica, crescimento
          da demanda sem investimento proporcional em infraestrutura e gestão inadequada levou o
          sistema ao colapso.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Políticas hídricas</span>
        <h2>5. Gestão da água: instrumentos e políticas</h2>
        <p>
          A gestão sustentável da água exige instrumentos legais, técnicos e participativos. No
          Brasil, o marco legal fundamental é a <strong>Lei das Águas (Lei 9.433/1997)</strong>,
          que estabelece:
        </p>
        <ul>
          <li>
            A água é um bem de domínio público e um recurso natural limitado, dotado de valor
            econômico.
          </li>
          <li>
            Em situação de escassez, o uso prioritário é o consumo humano e a dessedentação de
            animais.
          </li>
          <li>
            A gestão deve ser descentralizada e contar com a participação do poder público, dos
            usuários e das comunidades.
          </li>
          <li>
            A bacia hidrográfica é a unidade territorial de planejamento.
          </li>
        </ul>
        <p>
          Os principais instrumentos previstos pela lei são: o <strong>Plano de Recursos
          Hídricos</strong>, o <strong>Enquadramento dos corpos de água</strong>, a{" "}
          <strong>Outorga de uso</strong>, a <strong>Cobrança pelo uso da água</strong> e o{" "}
          <strong>Sistema de Informações sobre Recursos Hídricos</strong>. Em nível internacional,
          o acesso à água potável foi reconhecido como direito humano fundamental pela ONU em 2010.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Instrumentos de gestão da água previstos na Lei 9.433/1997</caption>
            <thead>
              <tr>
                <th>Instrumento</th>
                <th>Função</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Plano de Recursos Hídricos</td>
                <td>Planejar o uso, a recuperação e a proteção da água na bacia</td>
              </tr>
              <tr>
                <td>Enquadramento dos corpos de água</td>
                <td>Definir padrões de qualidade para cada corpo d'água conforme seu uso</td>
              </tr>
              <tr>
                <td>Outorga de direito de uso</td>
                <td>Autorizar e controlar a captação de água por usuários</td>
              </tr>
              <tr>
                <td>Cobrança pelo uso da água</td>
                <td>Incentivar o uso racional e gerar receita para recuperação das bacias</td>
              </tr>
              <tr>
                <td>Sistema de Informações</td>
                <td>Coletar, tratar e difundir dados sobre recursos hídricos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Soluções tecnológicas</span>
        <h2>6. Tecnologias para a gestão sustentável da água</h2>
        <p>
          Diversas tecnologias têm sido desenvolvidas e aplicadas para enfrentar a crise hídrica:
        </p>
        <ul>
          <li>
            <strong>Dessalinização:</strong> Processo de remoção do sal da água do mar para
            produzir água potável. Israel dessaliniza cerca de 70% da sua água potável. Alto custo
            energético é a principal limitação.
          </li>
          <li>
            <strong>Reuso de água:</strong> Tratamento de esgoto para reaproveitamento na
            irrigação, indústria e até consumo humano (Cingapura é referência mundial nessa
            prática).
          </li>
          <li>
            <strong>Irrigação eficiente:</strong> Sistemas de gotejamento e microaspersão reduzem
            drasticamente o desperdício na agricultura em comparação com a irrigação por
            inundação.
          </li>
          <li>
            <strong>Cisternas:</strong> No semiárido nordestino, cisternas de placa para captação
            de água de chuva são uma solução de baixo custo e alta eficácia para o abastecimento
            rural.
          </li>
          <li>
            <strong>Telhados verdes e pavimentos permeáveis:</strong> Em cidades, aumentam a
            infiltração e reduzem o escoamento superficial.
          </li>
        </ul>
      </section>

      {/* SVG Ciclo de gestão hídrica sustentável */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="320" fill="#f0fdf4" rx="8" />
          <text x="350" y="28" fontSize="15" fontWeight="bold" fill="#15803d" textAnchor="middle">Pilares da Gestão Sustentável da Água</text>
          {/* Círculo central */}
          <circle cx="350" cy="165" r="55" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" />
          <text x="350" y="159" fontSize="12" fontWeight="bold" fill="#15803d" textAnchor="middle">Gestão</text>
          <text x="350" y="175" fontSize="12" fontWeight="bold" fill="#15803d" textAnchor="middle">Sustentável</text>
          <text x="350" y="191" fontSize="11" fill="#166534" textAnchor="middle">da Água</text>
          {/* Pilar 1 - Conservação */}
          <circle cx="150" cy="100" r="48" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="150" y="94" fontSize="11" fontWeight="bold" fill="#1d4ed8" textAnchor="middle">Conservação</text>
          <text x="150" y="110" fontSize="10" fill="#1e40af" textAnchor="middle">e Proteção</text>
          <path d="M 196 118 L 300 148" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3" />
          {/* Pilar 2 - Tecnologia */}
          <circle cx="560" cy="100" r="48" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="560" y="94" fontSize="11" fontWeight="bold" fill="#92400e" textAnchor="middle">Tecnologia</text>
          <text x="560" y="110" fontSize="10" fill="#92400e" textAnchor="middle">e Inovação</text>
          <path d="M 514 118 L 400 148" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3" />
          {/* Pilar 3 - Governança */}
          <circle cx="150" cy="240" r="48" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="150" y="234" fontSize="11" fontWeight="bold" fill="#9d174d" textAnchor="middle">Governança</text>
          <text x="150" y="250" fontSize="10" fill="#9d174d" textAnchor="middle">e Política</text>
          <path d="M 196 222 L 300 183" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3" />
          {/* Pilar 4 - Educação */}
          <circle cx="560" cy="240" r="48" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
          <text x="560" y="234" fontSize="11" fontWeight="bold" fill="#5b21b6" textAnchor="middle">Educação</text>
          <text x="560" y="250" fontSize="10" fill="#5b21b6" textAnchor="middle">Ambiental</text>
          <path d="M 514 222 L 400 183" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4,3" />
          {/* Sub-itens */}
          <text x="150" y="68" fontSize="9" fill="#374151" textAnchor="middle">Matas ciliares, APPs</text>
          <text x="560" y="68" fontSize="9" fill="#374151" textAnchor="middle">Dessalinização, reuso</text>
          <text x="150" y="296" fontSize="9" fill="#374151" textAnchor="middle">Lei das Águas, comitês</text>
          <text x="560" y="296" fontSize="9" fill="#374151" textAnchor="middle">Consumo consciente</text>
          <text x="350" y="308" fontSize="11" fill="#6b7280" textAnchor="middle">A sustentabilidade hídrica requer ação integrada em múltiplas frentes</text>
        </svg>
        <figcaption>Os quatro pilares da gestão sustentável da água: conservação ambiental, tecnologia, governança e educação.</figcaption>
      </figure>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conflitos pela água</span>
        <h2>7. Conflitos internacionais e regionais pela água</h2>
        <p>
          À medida que a escassez de água se aprofunda, os conflitos pelo controle e uso dos
          recursos hídricos se tornam mais frequentes, tanto em escala local quanto internacional.
          Rios que atravessam vários países são potenciais focos de tensão — chamados de{" "}
          <strong>rios internacionais</strong>.
        </p>
        <p>
          Exemplos de conflitos hídricos internacionais:
        </p>
        <ul>
          <li>
            <strong>Rio Nilo:</strong> A construção da Barragem do Renascimento Etíope gerou
            tensões entre Etiópia, Sudão e Egito, que depende do Nilo para 90% de seu
            abastecimento hídrico.
          </li>
          <li>
            <strong>Rio Jordão:</strong> A disputa entre Israel, Palestina, Jordânia e Síria
            pela água do Rio Jordão é uma das fontes de conflito no Oriente Médio.
          </li>
          <li>
            <strong>Rio Mekong:</strong> As barragens construídas pela China no alto curso do
            rio afetam o acesso à água de países a jusante como Laos, Tailândia, Camboja e
            Vietnã.
          </li>
        </ul>
        <p>
          No Brasil, conflitos regionais ocorrem pela disputa de água entre irrigantes agrícolas,
          consumo humano e geração de energia. O semiárido nordestino é palco histórico de disputas
          políticas em torno dos açudes e da água.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Saneamento</span>
        <h2>8. Saneamento básico e qualidade da água</h2>
        <p>
          O acesso à água potável e ao saneamento básico é um direito humano reconhecido pela ONU
          desde 2010. Apesar dos avanços, ainda existem grandes desigualdades no acesso ao
          saneamento, especialmente em países em desenvolvimento.
        </p>
        <p>
          No Brasil, o <strong>Marco Legal do Saneamento (Lei 14.026/2020)</strong> estabeleceu
          metas ambiciosas: universalizar o acesso à água potável e ao esgotamento sanitário até
          2033. Atualmente, cerca de 35 milhões de brasileiros ainda não têm acesso à água tratada
          e mais de 100 milhões não têm coleta de esgoto.
        </p>
        <p>
          A relação entre qualidade da água e saúde pública é direta. A falta de saneamento
          favorece a proliferação de doenças de veiculação hídrica, como cólera, leptospirose,
          hepatite A, febre tifoide e diarreias. O investimento em saneamento é uma das
          intervenções com maior retorno em termos de saúde pública.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Cobertura de saneamento básico no Brasil (dados aproximados — SNIS 2022)</caption>
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Cobertura nacional (%)</th>
                <th>Região com menor índice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Acesso à água tratada</td>
                <td>~84%</td>
                <td>Norte (65%)</td>
              </tr>
              <tr>
                <td>Coleta de esgoto</td>
                <td>~55%</td>
                <td>Norte (12%)</td>
              </tr>
              <tr>
                <td>Tratamento de esgoto</td>
                <td>~50%</td>
                <td>Norte (8%)</td>
              </tr>
              <tr>
                <td>Coleta de resíduos sólidos</td>
                <td>~92%</td>
                <td>Norte (78%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sustentabilidade hídrica</span>
        <h2>9. Caminhos para a sustentabilidade hídrica</h2>
        <p>
          A sustentabilidade hídrica demanda uma abordagem integrada que vai além de soluções
          técnicas isoladas. Os principais caminhos incluem:
        </p>
        <ul>
          <li>
            <strong>Proteção de nascentes e matas ciliares:</strong> A vegetação nas margens dos
            rios e ao redor das nascentes é fundamental para regular o escoamento, evitar o
            assoreamento e garantir a qualidade da água. O Código Florestal brasileiro prevê
            Áreas de Preservação Permanente (APPs) ao longo de cursos d'água.
          </li>
          <li>
            <strong>Redução de perdas nas redes:</strong> O Brasil perde em média 38% da água
            tratada antes de chegar ao consumidor, por vazamentos na rede. Investimento em
            infraestrutura é urgente.
          </li>
          <li>
            <strong>Educação para o uso racional:</strong> Campanhas de conscientização, tarifas
            progressivas e medidores inteligentes podem reduzir significativamente o consumo
            doméstico.
          </li>
          <li>
            <strong>Pagamento por serviços ambientais (PSA):</strong> Remunerar proprietários
            rurais que conservam vegetação nas nascentes é um incentivo econômico para a
            preservação dos mananciais.
          </li>
          <li>
            <strong>Integração com os ODS:</strong> O Objetivo de Desenvolvimento Sustentável
            número 6 (ODS 6) da ONU visa assegurar disponibilidade e gestão sustentável da água
            e saneamento para todos até 2030.
          </li>
        </ul>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section" id="exercicios">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Exercício 1"
          statement={
            <p>
              Embora o Brasil possua a maior disponibilidade de água doce do mundo, o país
              convive com crises de abastecimento em várias regiões. Qual das alternativas melhor
              explica essa contradição?
            </p>
          }
          options={[
            { letter: "a", text: "O Brasil exporta grande parte de sua água doce para países vizinhos por meio de tratados internacionais." },
            { letter: "b", text: "A distribuição desigual da água no território, concentrada na Amazônia, aliada à poluição, ao desmatamento e à falta de infraestrutura de saneamento, gera escassez em regiões densamente povoadas e no semiárido.", correct: true },
            { letter: "c", text: "O uso excessivo de aquíferos subterrâneos na Amazônia reduziu drasticamente o nível dos rios nas demais regiões." },
            { letter: "d", text: "A crise hídrica brasileira é causada exclusivamente pelas mudanças climáticas, que reduziram as chuvas em todo o país." },
            { letter: "e", text: "O Brasil desperdiça toda a sua água doce na geração de energia hidrelétrica, sem deixar recursos para o abastecimento humano." },
          ]}
          resolution={
            <p>
              A alternativa B é a correta. A contradição entre abundância hídrica nacional e
              escassez regional no Brasil tem explicação multifatorial. Cerca de 80% da água doce
              nacional está na bacia amazônica, região com menos de 5% da população. O semiárido
              nordestino — com 27 milhões de pessoas — enfrenta irregularidade pluviométrica
              estrutural. A poluição de rios (como o Tietê, SP, e o Rio das Velhas, MG) reduz
              a disponibilidade de água de qualidade. A falta de infraestrutura causa perdas de
              ~38% na distribuição. Essas causas combinadas explicam crises como a do Sistema
              Cantareira em 2014-2015.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              A "pegada hídrica" é um indicador que mede o volume total de água usado para
              produzir bens e serviços. Considerando que a produção de 1 kg de carne bovina
              consome cerca de 15.400 litros de água e que a produção de 1 kg de trigo consome
              cerca de 1.300 litros, o que o conceito de pegada hídrica revela sobre os padrões
              de consumo alimentar e a gestão dos recursos hídricos?
            </p>
          }
          options={[
            { letter: "a", text: "Que o consumo de produtos de origem animal tem pouco impacto nos recursos hídricos, pois os animais bebem água de rios e não competem com o uso humano." },
            { letter: "b", text: "Que a produção agrícola é irrelevante para o consumo de água, já que apenas a indústria e o uso doméstico são significativos." },
            { letter: "c", text: "Que as escolhas alimentares individuais e coletivas têm impacto direto sobre o consumo de água, e que dietas com menor proporção de produtos animais contribuem para a redução do uso dos recursos hídricos.", correct: true },
            { letter: "d", text: "Que a solução para a crise hídrica está exclusivamente na produção de trigo em substituição à carne, independentemente de outros fatores." },
            { letter: "e", text: "Que países que consomem mais carne possuem automaticamente maior disponibilidade de água doce." },
          ]}
          resolution={
            <p>
              A alternativa C é a correta. O conceito de pegada hídrica evidencia que as escolhas
              de consumo — especialmente alimentares — têm impacto hídrico significativo. A
              produção de 1 kg de carne bovina consome quase 12 vezes mais água que 1 kg de trigo.
              Isso acontece porque o gado precisa de pastagens irrigadas (ou alimentação com grãos
              irrigados), bebe grande quantidade de água e demanda processamento. Dietas ricas em
              proteína animal de forma geral têm pegada hídrica muito maior do que dietas à base
              de plantas. Isso não significa que a única solução é eliminar o consumo animal, mas
              que mudanças nos padrões alimentares têm impacto real na demanda hídrica global.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              A Lei das Águas (Lei 9.433/1997) estabelece que a água é um bem de domínio público
              dotado de valor econômico. A cobrança pelo uso da água é um dos instrumentos
              previstos na lei. Qual é o principal objetivo desse instrumento?
            </p>
          }
          options={[
            { letter: "a", text: "Privatizar os recursos hídricos brasileiros, transferindo sua gestão para empresas privadas." },
            { letter: "b", text: "Gerar arrecadação para o governo federal, que utilizará os recursos para obras de infraestrutura em todo o país." },
            { letter: "c", text: "Reconhecer o valor econômico da água para incentivar seu uso racional e gerar recursos que serão aplicados na própria bacia hidrográfica para recuperação e gestão dos mananciais.", correct: true },
            { letter: "d", text: "Penalizar os usuários que consomem água acima de um limite estabelecido pelo governo, com fins exclusivamente punitivos." },
            { letter: "e", text: "Eliminar o uso gratuito da água pela população de baixa renda, já que a lei estabelece que a água tem valor econômico." },
          ]}
          resolution={
            <p>
              A alternativa C é a correta. A cobrança pelo uso da água tem dupla função na Lei
              9.433/1997. Primeiro, é um instrumento econômico de incentivo ao uso racional:
              ao atribuir um custo ao uso da água, estimula usuários (agricultores, indústrias,
              concessionárias) a reduzir desperdícios e investir em eficiência. Segundo, os
              recursos arrecadados são destinados obrigatoriamente ao financiamento de programas
              e projetos da bacia hidrográfica — ou seja, quem usa a água da bacia financia a
              recuperação dessa mesma bacia. A cobrança não privatiza a água (que permanece como
              bem público) nem é tributo — é uma contraprestação pelo uso de um recurso natural.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              A construção da Barragem do Renascimento pela Etiópia no Rio Nilo gerou tensões
              com o Egito e o Sudão. Esse conflito reflete uma tendência global relacionada aos
              recursos hídricos. Assinale a alternativa que melhor analisa essa situação:
            </p>
          }
          options={[
            { letter: "a", text: "Os conflitos por recursos hídricos são fenômenos exclusivos da África e não representam uma tendência global relevante." },
            { letter: "b", text: "A tensão entre Etiópia, Egito e Sudão evidencia como rios internacionais — que atravessam mais de um país — podem ser fonte de conflito quando um país a montante controla o fluxo por meio de grandes obras hidráulicas, afetando países a jusante que dependem dessas águas.", correct: true },
            { letter: "c", text: "A barragem etíope é ilegal segundo o direito internacional, que proíbe qualquer país de construir obras em rios internacionais." },
            { letter: "d", text: "O conflito pelo Nilo é motivado exclusivamente por interesses políticos e não tem relação com a disponibilidade efetiva de água na região." },
            { letter: "e", text: "A solução para conflitos hídricos internacionais passa necessariamente pela intervenção militar dos países afetados." },
          ]}
          resolution={
            <p>
              A alternativa B é a correta. O caso do Nilo é um exemplo clássico de como rios
              internacionais podem se tornar focos de conflito geopolítico. O Egito depende do
              Nilo para cerca de 90% de sua água, e qualquer redução significativa no fluxo pode
              ter consequências dramáticas para a agricultura e o abastecimento. A Barragem do
              Renascimento, ao reter água em um enorme reservatório, altera o regime hídrico do
              Nilo a jusante. Esse padrão se repete em outras bacias internacionais (Mekong,
              Jordão, Indo), evidenciando que a gestão de rios compartilhados exige cooperação
              internacional, tratados e mecanismos de governança multilateral.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              (ENEM adaptado) As cisternas de placa foram implantadas em larga escala no semiárido
              nordestino pelo Programa Um Milhão de Cisternas (P1MC). Sobre essa tecnologia social
              e seu contexto, analise as afirmativas:
              <br /><br />
              I. As cisternas captam água da chuva dos telhados das residências e a armazenam
              de forma a garantir o abastecimento familiar mesmo em períodos de estiagem.
              <br />
              II. A tecnologia é adequada ao semiárido porque a região não recebe nenhuma chuva
              ao longo do ano, exigindo captação total da umidade do ar.
              <br />
              III. O Programa demonstra que soluções de baixo custo e baseadas em tecnologias
              simples podem ter grande impacto social e reduzir vulnerabilidades hídricas de
              populações rurais.
              <br /><br />
              Está correto apenas o que se afirma em:
            </p>
          }
          options={[
            { letter: "a", text: "I apenas." },
            { letter: "b", text: "II apenas." },
            { letter: "c", text: "I e III.", correct: true },
            { letter: "d", text: "II e III." },
            { letter: "e", text: "I, II e III." },
          ]}
          resolution={
            <p>
              A alternativa C é a correta. A afirmativa I é verdadeira: as cisternas de placa
              captam água da chuva que cai nos telhados e a armazenam (capacidade típica de
              16.000 litros), garantindo abastecimento para bebida e cozinha de uma família por
              até 8 meses — tempo suficiente para atravessar o período de estiagem. A afirmativa
              II é falsa: o semiárido nordestino recebe chuvas, mas concentradas em poucos meses
              (geralmente de novembro a março). O problema não é a ausência total de chuva, mas
              sua irregularidade e concentração temporal — as cisternas resolvem exatamente isso,
              armazenando a água da estação chuvosa para uso na seca. A afirmativa III é
              verdadeira: o P1MC é reconhecido internacionalmente como exemplo de tecnologia
              social eficaz e de baixo custo.
            </p>
          }
        />
      </section>
    </article>
  );
}
