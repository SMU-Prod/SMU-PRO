"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap38Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 38</span>
          <h1>Economia brasileira: setores produtivos e desenvolvimento regional</h1>
          <p>
            A economia brasileira é uma das maiores do mundo, figurando entre as dez primeiras em
            PIB nominal. No entanto, ela é marcada por profundas desigualdades internas, tanto entre
            as regiões quanto entre os diferentes grupos sociais. O Brasil possui uma estrutura
            produtiva diversificada, com um setor agropecuário de destaque global no agronegócio,
            uma indústria ainda relevante e um setor de serviços que responde por mais de 70% do PIB.
            Entender os setores produtivos e suas distribuições regionais é fundamental para
            compreender o mapa econômico do país e os desafios do desenvolvimento sustentável.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura produtiva</span>
        <h2>1. Os três setores da economia</h2>
        <p>
          A economia de qualquer país pode ser dividida em três grandes setores produtivos, de acordo
          com o tipo de atividade:
        </p>
        <ul>
          <li>
            <strong>Setor primário:</strong> envolve as atividades de extração direta da natureza —
            agricultura, pecuária, pesca, mineração, silvicultura e extrativismo vegetal.
          </li>
          <li>
            <strong>Setor secundário:</strong> corresponde à indústria de transformação, construção
            civil e produção de energia. Transforma matérias-primas em produtos industrializados.
          </li>
          <li>
            <strong>Setor terciário:</strong> abrange comércio, serviços, transporte, comunicações,
            turismo, educação, saúde e finanças. É o setor que mais cresce nos países desenvolvidos
            e em desenvolvimento.
          </li>
        </ul>
        <p>
          No Brasil, o setor terciário responde por cerca de 72% do PIB, o setor primário por
          aproximadamente 6% e a indústria (setor secundário) por cerca de 22%. Essa estrutura
          reflete um processo de <strong>desindustrialização relativa</strong> que o país vem
          experimentando desde os anos 1990.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Participação dos setores no PIB brasileiro (dados aproximados)</caption>
            <thead>
              <tr>
                <th>Setor</th>
                <th>Participação no PIB</th>
                <th>Principais atividades</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Primário</td>
                <td>~6%</td>
                <td>Agronegócio, pecuária, mineração, extrativismo</td>
              </tr>
              <tr>
                <td>Secundário (Indústria)</td>
                <td>~22%</td>
                <td>Manufatura, construção civil, energia</td>
              </tr>
              <tr>
                <td>Terciário (Serviços)</td>
                <td>~72%</td>
                <td>Comércio, serviços financeiros, saúde, educação</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Agropecuária</span>
        <h2>2. O agronegócio brasileiro: potência agrícola global</h2>
        <p>
          O Brasil é um dos maiores produtores e exportadores de alimentos do mundo. O país lidera
          a produção de <strong>soja, açúcar, etanol, carne bovina, frango, café, laranja</strong>
          e outros commodities agrícolas. Isso é resultado de uma combinação de fatores: extensão
          territorial, clima favorável, solos corrigíveis, tecnologia agropecuária desenvolvida pela
          Embrapa e adoção em larga escala da agricultura mecanizada.
        </p>
        <p>
          O modelo dominante no Brasil é o do <strong>agronegócio</strong> — produção em grande
          escala, voltada para exportação, com alta tecnologia e baixa utilização relativa de mão
          de obra. Em contraposição, existe também a <strong>agricultura familiar</strong>, que
          responde por cerca de 70% dos alimentos consumidos internamente, mas recebe proporcionalmente
          menos crédito e apoio governamental.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais produtos do agronegócio brasileiro e sua posição mundial</caption>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Posição mundial (produção)</th>
                <th>Principal estado produtor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Soja</td>
                <td>1º lugar</td>
                <td>Mato Grosso</td>
              </tr>
              <tr>
                <td>Carne bovina (rebanho)</td>
                <td>1º lugar</td>
                <td>Mato Grosso / Pará</td>
              </tr>
              <tr>
                <td>Café</td>
                <td>1º lugar</td>
                <td>Minas Gerais</td>
              </tr>
              <tr>
                <td>Açúcar e etanol</td>
                <td>1º lugar</td>
                <td>São Paulo</td>
              </tr>
              <tr>
                <td>Frango (exportação)</td>
                <td>1º lugar</td>
                <td>Paraná</td>
              </tr>
              <tr>
                <td>Milho</td>
                <td>3º lugar</td>
                <td>Mato Grosso</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG figura 1 — mapa econômico esquemático */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="640" height="300" fill="#fefce8" rx="12" />
          <text x="320" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1e293b">
            Atividades Econômicas por Região (esquemático)
          </text>
          {/* Norte */}
          <rect x="20" y="50" width="160" height="80" rx="8" fill="#16a34a" opacity="0.7" />
          <text x="100" y="82" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">NORTE</text>
          <text x="100" y="100" textAnchor="middle" fontSize="10" fill="#dcfce7">Extrativismo</text>
          <text x="100" y="115" textAnchor="middle" fontSize="10" fill="#dcfce7">Mineração • Madeira</text>
          {/* Nordeste */}
          <rect x="200" y="50" width="160" height="80" rx="8" fill="#dc2626" opacity="0.7" />
          <text x="280" y="82" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">NORDESTE</text>
          <text x="280" y="100" textAnchor="middle" fontSize="10" fill="#fecaca">Turismo • Petróleo</text>
          <text x="280" y="115" textAnchor="middle" fontSize="10" fill="#fecaca">Fruticultura irrigada</text>
          {/* Centro-Oeste */}
          <rect x="20" y="150" width="160" height="80" rx="8" fill="#d97706" opacity="0.7" />
          <text x="100" y="182" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">CENTRO-OESTE</text>
          <text x="100" y="200" textAnchor="middle" fontSize="10" fill="#fef3c7">Soja • Milho • Boi</text>
          <text x="100" y="215" textAnchor="middle" fontSize="10" fill="#fef3c7">Agronegócio</text>
          {/* Sudeste */}
          <rect x="200" y="150" width="160" height="80" rx="8" fill="#2563eb" opacity="0.75" />
          <text x="280" y="182" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">SUDESTE</text>
          <text x="280" y="200" textAnchor="middle" fontSize="10" fill="#dbeafe">Indústria • Serviços</text>
          <text x="280" y="215" textAnchor="middle" fontSize="10" fill="#dbeafe">Finanças • Tecnologia</text>
          {/* Sul */}
          <rect x="380" y="50" width="230" height="180" rx="8" fill="#7c3aed" opacity="0.75" />
          <text x="495" y="120" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">SUL</text>
          <text x="495" y="142" textAnchor="middle" fontSize="10" fill="#ede9fe">Indústria diversificada</text>
          <text x="495" y="158" textAnchor="middle" fontSize="10" fill="#ede9fe">Soja • Trigo • Frango</text>
          <text x="495" y="174" textAnchor="middle" fontSize="10" fill="#ede9fe">Erva-mate • Vinho</text>
          <text x="320" y="285" textAnchor="middle" fontSize="9" fill="#64748b">
            Atividades principais por região — representação didática esquemática
          </text>
        </svg>
        <figcaption>Principais atividades econômicas distribuídas pelas regiões brasileiras.</figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Industrialização</span>
        <h2>3. Industrialização do Brasil: histórico e distribuição</h2>
        <p>
          A industrialização brasileira teve início no final do século XIX, com destaque para
          indústrias têxteis em São Paulo e Rio de Janeiro. O grande impulso ocorreu durante o
          Estado Novo de Getúlio Vargas (1937–1945), com a criação da Companhia Siderúrgica Nacional
          (CSN) e a Companhia Vale do Rio Doce. O período de maior crescimento industrial foi a
          "Era JK" (1956–1961), com a meta de "50 anos em 5" e a indústria automobilística.
        </p>
        <p>
          Historicamente, a indústria brasileira se concentrou no <strong>eixo São Paulo–Rio de
          Janeiro</strong>. A partir da década de 1970, houve uma desconcentração parcial, com o
          surgimento de polos industriais no interior de São Paulo (ABCD, Campinas), no Sul (Curitiba,
          Caxias do Sul), e mais recentemente no Nordeste (Zona Franca do Recife, polo têxtil de
          Fortaleza) e no Centro-Oeste.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Fases da industrialização brasileira</caption>
            <thead>
              <tr>
                <th>Período</th>
                <th>Característica</th>
                <th>Evento/Política central</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1889–1930</td>
                <td>Industrialização incipiente</td>
                <td>Indústrias têxteis e alimentícias; capital cafeeiro</td>
              </tr>
              <tr>
                <td>1930–1955</td>
                <td>Substituição de importações</td>
                <td>Estado Novo; CSN; petróleo (Petrobras, 1953)</td>
              </tr>
              <tr>
                <td>1956–1964</td>
                <td>Industrialização pesada</td>
                <td>Plano de Metas; indústria automobilística</td>
              </tr>
              <tr>
                <td>1964–1985</td>
                <td>Regime Militar / Milagre</td>
                <td>PND; hidroelétricas; polo petroquímico BA</td>
              </tr>
              <tr>
                <td>1990 em diante</td>
                <td>Abertura e reestruturação</td>
                <td>Privatizações; abertura comercial; desindustrialização</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mineração</span>
        <h2>4. Mineração: riqueza do subsolo</h2>
        <p>
          O Brasil é um dos maiores produtores minerais do mundo, com reservas expressivas de
          <strong> minério de ferro</strong> (reservas em MG e PA), <strong>alumínio (bauxita)</strong>
          (Pará, Minas Gerais), <strong>ouro</strong> (Pará, Minas Gerais), <strong>nióbio</strong>
          (Goiás, Minas Gerais — maior reserva mundial), <strong>petróleo e gás</strong> (pré-sal
          do litoral do RJ, SP e ES) e <strong>carvão mineral</strong> (Santa Catarina, Rio Grande
          do Sul).
        </p>
        <p>
          A mineração gera receitas significativas, mas também causa graves impactos ambientais e
          sociais. O rompimento da barragem de Fundão em Mariana (MG) em 2015 e o de Brumadinho
          (MG) em 2019 são exemplos trágicos dos riscos associados à atividade mineradora no
          país, matando centenas de pessoas e poluindo rios.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Energia</span>
        <h2>5. Matriz energética brasileira</h2>
        <p>
          O Brasil possui uma das matrizes energéticas mais renováveis do mundo. Cerca de 85% da
          eletricidade gerada no país vem de fontes renováveis, com destaque para a energia
          hidrelétrica (~65%), seguida por eólica (~14%), biomassa (~9%) e solar (em crescimento
          acelerado). A energia termelétrica a combustíveis fósseis é acionada principalmente em
          períodos de estiagem.
        </p>
        <p>
          O <strong>pré-sal</strong>, descoberto em 2006 no litoral brasileiro, transformou o Brasil
          em um grande produtor de petróleo. As reservas se localizam sob uma camada de sal no
          fundo do oceano (a 2.000–3.000 m de profundidade), exigindo tecnologia avançada.
          A Petrobras é a principal empresa exploradora, mas há também participação de multinacionais.
        </p>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comércio exterior</span>
        <h2>6. Balança comercial e exportações</h2>
        <p>
          O Brasil é um grande player no comércio internacional, com exportações anuais que
          superam 300 bilhões de dólares. A pauta exportadora é dominada por commodities:
          soja e derivados, minério de ferro, petróleo, carnes, açúcar e celulose. A China é
          o principal parceiro comercial do Brasil, absorvendo cerca de 30% das exportações.
        </p>
        <p>
          A dependência de commodities na pauta exportadora é um ponto vulnerável: os preços
          das matérias-primas são voláteis no mercado internacional, sujeitos a ciclos de alta e
          baixa ("ciclos de commodities"). Quando os preços caem, as exportações diminuem e a
          balança comercial fica sob pressão, como ocorreu em 2015–2016.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais produtos exportados pelo Brasil (ordem de relevância)</caption>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Categoria</th>
                <th>Principal destino</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Soja e derivados</td>
                <td>Commodity agrícola</td>
                <td>China</td>
              </tr>
              <tr>
                <td>Minério de ferro</td>
                <td>Commodity mineral</td>
                <td>China</td>
              </tr>
              <tr>
                <td>Petróleo bruto</td>
                <td>Commodity energética</td>
                <td>China, EUA</td>
              </tr>
              <tr>
                <td>Carnes (bovina e frango)</td>
                <td>Commodity agroindustrial</td>
                <td>China, Oriente Médio</td>
              </tr>
              <tr>
                <td>Açúcar e etanol</td>
                <td>Commodity agroindustrial</td>
                <td>UE, Oriente Médio</td>
              </tr>
              <tr>
                <td>Celulose e papel</td>
                <td>Commodity florestal</td>
                <td>China, Europa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG figura 2 — gráfico das exportações */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 580 290" xmlns="http://www.w3.org/2000/svg">
          <rect width="580" height="290" fill="#f0fdf4" rx="12" />
          <text x="290" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1e293b">
            Composição das Exportações Brasileiras (% aproximada)
          </text>
          {/* Setor de pizza simplificado com retângulos empilhados */}
          {/* Soja ~28% */}
          <rect x="80" y="50" width="400" height="42" rx="6" fill="#16a34a" opacity="0.85" />
          <text x="290" y="75" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">Soja e derivados — 28%</text>
          {/* Minério ~15% */}
          <rect x="80" y="100" width="214" height="35" rx="6" fill="#dc2626" opacity="0.85" />
          <text x="187" y="122" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Minério de ferro — 15%</text>
          {/* Petróleo ~13% */}
          <rect x="80" y="143" width="185" height="33" rx="6" fill="#0ea5e9" opacity="0.85" />
          <text x="172" y="164" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Petróleo bruto — 13%</text>
          {/* Carnes ~8% */}
          <rect x="80" y="184" width="114" height="28" rx="6" fill="#f97316" opacity="0.85" />
          <text x="137" y="203" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Carnes — 8%</text>
          {/* Açúcar ~5% */}
          <rect x="80" y="220" width="71" height="24" rx="6" fill="#d97706" opacity="0.85" />
          <text x="115" y="237" textAnchor="middle" fontSize="10" fill="white">Açúcar 5%</text>
          {/* Outros ~31% */}
          <rect x="80" y="252" width="441" height="25" rx="6" fill="#94a3b8" opacity="0.7" />
          <text x="300" y="269" textAnchor="middle" fontSize="11" fill="#1e293b">Outros produtos — 31%</text>
          <text x="290" y="283" textAnchor="middle" fontSize="9" fill="#64748b">Fonte: MDIC — valores aproximados</text>
        </svg>
        <figcaption>Composição aproximada das exportações brasileiras — predominância de commodities primárias.</figcaption>
      </figure>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Desenvolvimento regional</span>
        <h2>7. Desigualdades regionais e desenvolvimento</h2>
        <p>
          O desenvolvimento econômico brasileiro é marcado por profundas desigualdades entre as
          regiões. O Sudeste concentra mais de 55% do PIB nacional, enquanto o Norte e o Nordeste
          juntos representam menos de 20%. O IDH também é muito desigual: estados do Sul e Sudeste
          têm IDH médio acima de 0,77, enquanto estados do Norte e Nordeste ficam abaixo de 0,70.
        </p>
        <p>
          Entre os fatores que explicam essa desigualdade destacam-se: a concentração histórica da
          industrialização no Sudeste, a melhor infraestrutura de transportes e energia no
          Sul/Sudeste, a maior disponibilidade de mão de obra qualificada nessas regiões e as
          condições naturais mais favoráveis à agricultura intensiva.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Infraestrutura</span>
        <h2>8. Transportes e logística no Brasil</h2>
        <p>
          O Brasil tem uma matriz de transportes fortemente concentrada em rodovias, o que eleva
          os custos logísticos do país — fenômeno chamado de <strong>"Custo Brasil"</strong>. Cerca
          de 65% das cargas são transportadas por rodovias, quando em países como os EUA a ferrovia
          é dominante. Os gargalos logísticos reduzem a competitividade dos produtos brasileiros
          no mercado externo.
        </p>
        <p>
          O Brasil tem investido em hidrovias (especialmente na Bacia Amazônica e no rio Tietê-Paraná),
          ferrovias (com o projeto da Ferrovia de Integração Centro-Oeste — FICO) e no aprimoramento
          de portos como Santos (SP), o maior da América Latina. O setor aéreo ganhou relevância
          com a privatização de aeroportos.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Turismo</span>
        <h2>9. Turismo como setor econômico estratégico</h2>
        <p>
          O turismo é um setor crescente na economia brasileira, com potencial de gerar emprego e
          renda em todas as regiões. O Brasil recebe em torno de 6 a 7 milhões de turistas
          estrangeiros por ano. Os principais destinos são Rio de Janeiro, São Paulo, o Nordeste
          (litoral de Ceará, Bahia, Pernambuco), a Amazônia (ecoturismo) e o Pantanal.
        </p>
        <p>
          O turismo interno é igualmente importante: milhões de brasileiros viajam pelo país,
          movimentando hotelaria, gastronomia, transporte e cultura. O ecoturismo e o turismo
          rural têm crescido significativamente, especialmente em destinos como a Chapada Diamantina,
          o Pantanal, a Serra Gaúcha e a Amazônia.
        </p>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Economia e sociedade</span>
        <h2>10. Desigualdade social e concentração de renda</h2>
        <p>
          Apesar de ser a décima maior economia do mundo, o Brasil é um dos países com maior
          desigualdade social. O <strong>coeficiente de Gini</strong> brasileiro historicamente
          supera 0,50 (em uma escala onde 0 representa igualdade total e 1, desigualdade máxima).
          Os 10% mais ricos concentram mais de 40% da renda nacional.
        </p>
        <p>
          As políticas sociais de redistribuição de renda, como o Bolsa Família (criado em 2003),
          contribuíram para a redução da pobreza extrema e da desigualdade entre 2003 e 2015,
          período em que mais de 40 milhões de brasileiros saíram da pobreza. A pandemia de
          Covid-19 (2020–2021) reverteu parte desses avanços, aprofundando a crise social.
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
              O Brasil é um dos maiores produtores agrícolas do mundo. Assinale a alternativa que
              apresenta corretamente um produto em que o Brasil ocupa o 1º lugar na produção mundial:
            </p>
          }
          options={[
            { letter: "a", text: "Trigo, pois o Sul do Brasil tem clima temperado favorável ao cereal." },
            { letter: "b", text: "Arroz, pois o Nordeste e o Sul produzem grandes volumes para exportação." },
            { letter: "c", text: "Soja, sendo o Brasil o maior produtor e exportador mundial.", correct: true },
            { letter: "d", text: "Milho, pois o Brasil supera os Estados Unidos na produção desse grão." },
            { letter: "e", text: "Uva, pois a Serra Gaúcha é o maior polo vitivinícola do mundo." },
          ]}
          resolution={
            <p>
              O Brasil é o maior produtor e exportador de soja do mundo, superando os Estados Unidos.
              Mato Grosso é o principal estado produtor. O trigo é importado pelo Brasil (não somos
              líderes), o arroz é produzido internamente mas não somos líderes globais, e no milho os
              EUA ainda lideram. A resposta correta é a letra C.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              A matriz energética brasileira é considerada uma das mais renováveis do mundo. Qual é
              a principal fonte de geração de eletricidade no Brasil?
            </p>
          }
          options={[
            { letter: "a", text: "Energia nuclear, pois o Brasil possui reservas expressivas de urânio." },
            { letter: "b", text: "Energia termelétrica a carvão mineral, pois o Sul tem grandes reservas." },
            { letter: "c", text: "Energia eólica, pois o Nordeste é a região com maior geração de vento." },
            { letter: "d", text: "Energia hidrelétrica, responsável por cerca de 65% da eletricidade gerada.", correct: true },
            { letter: "e", text: "Energia solar fotovoltaica, com expansão acelerada em todo o território." },
          ]}
          resolution={
            <p>
              A energia hidrelétrica é responsável por aproximadamente 65% da eletricidade gerada no
              Brasil, tornando a matriz elétrica brasileira uma das mais renováveis do mundo. Isso é
              possível graças à grande quantidade de rios caudalosos e ao potencial hidroelétrico do
              território. As demais fontes (eólica, solar, biomassa) complementam a matriz, mas a
              hidrelétrica ainda domina. A resposta correta é a letra D.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              (ENEM adaptado) A dependência do Brasil de commodities na pauta de exportações é um
              fator de vulnerabilidade econômica. Sobre esse tema, assinale a afirmativa correta:
            </p>
          }
          options={[
            { letter: "a", text: "A diversificação da pauta exportadora com produtos industrializados reduz a vulnerabilidade do Brasil aos ciclos de preços das matérias-primas.", correct: true },
            { letter: "b", text: "A exportação de commodities garante renda estável ao Brasil, pois os preços no mercado internacional são sempre controlados pelos países produtores." },
            { letter: "c", text: "A China é o principal parceiro comercial do Brasil apenas para produtos industrializados de alta tecnologia." },
            { letter: "d", text: "O Brasil exporta principalmente produtos manufaturados, sendo as commodities uma parcela pequena da pauta." },
            { letter: "e", text: "A queda nos preços das commodities beneficia o Brasil, pois o país importa mais do que exporta esses produtos." },
          ]}
          resolution={
            <p>
              A pauta de exportações do Brasil é dominada por commodities (soja, minério de ferro,
              petróleo, carnes), cujos preços são altamente voláteis no mercado internacional. Quando
              os preços caem, a receita de exportações diminui, gerando pressão sobre a balança
              comercial e o câmbio. A diversificação da pauta com produtos industrializados e de maior
              valor agregado é a forma de reduzir essa vulnerabilidade. A resposta correta é a letra A.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              O "Custo Brasil" é um conceito frequentemente utilizado para explicar a falta de
              competitividade da economia brasileira. Entre os fatores que compõem o Custo Brasil,
              destaca-se:
            </p>
          }
          options={[
            { letter: "a", text: "A abundância de mão de obra qualificada, que eleva os salários e reduz a competitividade." },
            { letter: "b", text: "A alta carga tributária, a burocracia, a infraestrutura logística precária e os altos juros, que encarecem a produção.", correct: true },
            { letter: "c", text: "A excesso de ferrovias e hidrovias, que reduzem o custo do transporte e tornam o país pouco competitivo." },
            { letter: "d", text: "A baixa taxa de câmbio do real, que torna as exportações caras no mercado externo." },
            { letter: "e", text: "A ausência de recursos naturais, que obriga o Brasil a importar matérias-primas a custo elevado." },
          ]}
          resolution={
            <p>
              O "Custo Brasil" engloba um conjunto de fatores que tornam a produção e os negócios mais
              caros no Brasil em comparação com outros países: alta carga tributária (em torno de 33%
              do PIB), burocracia excessiva, infraestrutura logística precária (predominância de
              rodovias em detrimento de ferrovias e hidrovias mais baratas), altas taxas de juros e
              deficiências na educação e na saúde. A resposta correta é a letra B.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              (ENEM adaptado) O coeficiente de Gini é um dos principais indicadores de desigualdade
              de renda. O Brasil historicamente apresenta índices de Gini superiores a 0,50. Analise
              as seguintes políticas e identifique qual delas contribuiu mais diretamente para a
              redução da desigualdade de renda no Brasil entre 2003 e 2015:
            </p>
          }
          options={[
            { letter: "a", text: "A abertura comercial dos anos 1990, que aumentou a competição e reduziu os preços, beneficiando os mais pobres." },
            { letter: "b", text: "As privatizações de empresas estatais, que geraram eficiência e redistribuíram lucros à população." },
            { letter: "c", text: "O Programa Bolsa Família, associado ao aumento do salário mínimo e à expansão do emprego formal, que reduziram a pobreza e melhoraram a distribuição de renda.", correct: true },
            { letter: "d", text: "O controle da inflação pelo Plano Real, que por si só eliminou as desigualdades sociais ao estabilizar a moeda." },
            { letter: "e", text: "A exportação de commodities, que gerou renda igualmente distribuída em todos os estados brasileiros." },
          ]}
          resolution={
            <p>
              Entre 2003 e 2015, o Brasil registrou uma redução histórica da desigualdade, com o
              coeficiente de Gini caindo de 0,58 para cerca de 0,51. Os principais fatores foram:
              o Programa Bolsa Família (transferência de renda para os mais pobres), o aumento real
              do salário mínimo (que beneficiou os trabalhadores de menor renda) e a expansão do
              emprego formal. Embora o Plano Real tenha sido importante para controlar a inflação,
              ele não reduziu diretamente a desigualdade. A resposta correta é a letra C.
            </p>
          }
        />
      </section>
    </article>
  );
}
