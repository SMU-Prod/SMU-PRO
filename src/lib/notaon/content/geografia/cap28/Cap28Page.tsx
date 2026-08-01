"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap28Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 28</span>
          <h1>Industrialização mundial e brasileira</h1>
          <p>
            A industrialização foi o processo que mais transformou a sociedade humana nos últimos três
            séculos, reorganizando o espaço geográfico, criando cidades, alterando relações de trabalho e
            definindo hierarquias entre países. Compreender as diferentes fases da Revolução Industrial,
            a lógica de localização das indústrias e o processo particular de industrialização do Brasil
            — com suas contradições, avanços e desafios — é fundamental tanto para o ENEM quanto para
            entender o mundo contemporâneo.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Revolução Industrial</span>
        <h2>1. As revoluções industriais: da Inglaterra ao mundo</h2>
        <p>
          A <strong>Primeira Revolução Industrial</strong> teve início na Inglaterra na segunda metade do
          século XVIII (1760–1830), com a introdução da máquina a vapor, a mecanização da produção têxtil
          e a exploração do carvão como principal fonte de energia. O modelo de produção artesanal e
          doméstico foi progressivamente substituído pela fábrica, concentrando trabalhadores, máquinas
          e produção em um mesmo espaço.
        </p>
        <p>
          A <strong>Segunda Revolução Industrial</strong> (1870–1914) expandiu a industrialização para
          Alemanha, França, EUA e Japão, introduzindo novas fontes de energia (petróleo e eletricidade),
          novos materiais (aço, químicos) e novas formas de organização do trabalho, como o
          <strong> taylorismo</strong> (Frederick Winslow Taylor) e o <strong>fordismo</strong> (Henry
          Ford). A produção em massa e a linha de montagem tornaram-se o paradigma industrial dominante.
        </p>
        <p>
          A <strong>Terceira Revolução Industrial</strong> (ou Revolução Técnico-Científico-Informacional),
          a partir dos anos 1970, introduziu a microeletrônica, a informática, a robótica e as
          telecomunicações como base da produção. O modelo de produção <strong>toyotista</strong> (just in
          time, flexibilidade, qualidade total), desenvolvido no Japão, substituiu progressivamente o
          fordismo nos países mais desenvolvidos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>As três revoluções industriais: síntese comparativa</caption>
            <thead>
              <tr>
                <th>Revolução</th>
                <th>Período</th>
                <th>Energia/Tecnologia</th>
                <th>Organização do trabalho</th>
                <th>Países líderes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1ª Revolução</td>
                <td>c. 1760–1870</td>
                <td>Carvão, vapor, têxteis, ferro</td>
                <td>Manufatura, fábrica simples</td>
                <td>Inglaterra</td>
              </tr>
              <tr>
                <td>2ª Revolução</td>
                <td>c. 1870–1970</td>
                <td>Petróleo, eletricidade, aço, química</td>
                <td>Taylorismo, fordismo, linha de montagem</td>
                <td>EUA, Alemanha, França, Japão</td>
              </tr>
              <tr>
                <td>3ª Revolução</td>
                <td>c. 1970–hoje</td>
                <td>Microeletrônica, informática, robótica</td>
                <td>Toyotismo, just-in-time, acumulação flexível</td>
                <td>EUA, Japão, Coreia do Sul, UE, China</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fatores de localização</span>
        <h2>2. Fatores de localização industrial</h2>
        <p>
          A localização de uma indústria não é aleatória: resulta da combinação de vários fatores que
          tornam determinado local mais ou menos vantajoso para a produção. Na era das indústrias
          pesadas, os fatores tradicionais predominavam. Com a terceira revolução industrial, novos
          fatores ganharam importância.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Fatores tradicionais e modernos de localização industrial</caption>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Fator</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tradicional</td>
                <td>Proximidade de matérias-primas</td>
                <td>Siderúrgicas perto de minas de ferro</td>
              </tr>
              <tr>
                <td>Tradicional</td>
                <td>Disponibilidade de energia</td>
                <td>Alumínio perto de hidrelétricas</td>
              </tr>
              <tr>
                <td>Tradicional</td>
                <td>Mão de obra</td>
                <td>Têxtil em regiões com muita mão de obra barata</td>
              </tr>
              <tr>
                <td>Tradicional</td>
                <td>Mercado consumidor</td>
                <td>Bens de consumo em metrópoles</td>
              </tr>
              <tr>
                <td>Moderno</td>
                <td>Infraestrutura de transportes e TI</td>
                <td>Parques tecnológicos em hub logístico</td>
              </tr>
              <tr>
                <td>Moderno</td>
                <td>Incentivos fiscais</td>
                <td>Zona Franca de Manaus, guerra fiscal</td>
              </tr>
              <tr>
                <td>Moderno</td>
                <td>Mão de obra qualificada e P&D</td>
                <td>Vale do Silício, Tecnopolis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Figura 1 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="320" fill="#e8eaf6" rx="12" />
          <text x="350" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#283593">
            Linha do tempo: Revoluções Industriais
          </text>
          {/* linha do tempo */}
          <line x1="60" y1="140" x2="640" y2="140" stroke="#3949ab" strokeWidth="3" />
          {/* marcadores */}
          {/* 1760 */}
          <circle cx="100" cy="140" r="10" fill="#1a237e" />
          <text x="100" y="170" textAnchor="middle" fontSize="10" fill="#1a237e">1760</text>
          <rect x="50" y="60" width="100" height="60" rx="6" fill="#7986cb" />
          <text x="100" y="80" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">1ª Revolução</text>
          <text x="100" y="95" textAnchor="middle" fontSize="9" fill="#fff">Inglaterra</text>
          <text x="100" y="108" textAnchor="middle" fontSize="9" fill="#fff">Carvão e vapor</text>
          <line x1="100" y1="120" x2="100" y2="130" stroke="#1a237e" strokeWidth="2" />
          {/* 1870 */}
          <circle cx="280" cy="140" r="10" fill="#1565c0" />
          <text x="280" y="170" textAnchor="middle" fontSize="10" fill="#1565c0">1870</text>
          <rect x="230" y="180" width="100" height="65" rx="6" fill="#42a5f5" />
          <text x="280" y="200" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">2ª Revolução</text>
          <text x="280" y="214" textAnchor="middle" fontSize="9" fill="#fff">EUA/Alemanha</text>
          <text x="280" y="228" textAnchor="middle" fontSize="9" fill="#fff">Petróleo/Fordismo</text>
          <line x1="280" y1="150" x2="280" y2="180" stroke="#1565c0" strokeWidth="2" />
          {/* 1970 */}
          <circle cx="480" cy="140" r="10" fill="#00838f" />
          <text x="480" y="170" textAnchor="middle" fontSize="10" fill="#00838f">1970</text>
          <rect x="430" y="60" width="100" height="65" rx="6" fill="#26c6da" />
          <text x="480" y="80" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">3ª Revolução</text>
          <text x="480" y="94" textAnchor="middle" fontSize="9" fill="#fff">Global</text>
          <text x="480" y="108" textAnchor="middle" fontSize="9" fill="#fff">TI/Robótica</text>
          <line x1="480" y1="120" x2="480" y2="130" stroke="#00838f" strokeWidth="2" />
          {/* atual */}
          <circle cx="620" cy="140" r="10" fill="#e65100" />
          <text x="620" y="170" textAnchor="middle" fontSize="10" fill="#e65100">Hoje</text>
          <rect x="565" y="180" width="110" height="65" rx="6" fill="#ff7043" />
          <text x="620" y="200" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Indústria 4.0</text>
          <text x="620" y="214" textAnchor="middle" fontSize="9" fill="#fff">IA, IoT, Big Data</text>
          <text x="620" y="228" textAnchor="middle" fontSize="9" fill="#fff">Automação total</text>
          <line x1="620" y1="150" x2="620" y2="180" stroke="#e65100" strokeWidth="2" />
          {/* legenda */}
          <text x="350" y="275" textAnchor="middle" fontSize="11" fill="#283593">
            Cada revolução trouxe novas fontes de energia, novas tecnologias e novas formas de organizar o trabalho
          </text>
        </svg>
        <figcaption>Figura 1 — Linha do tempo das Revoluções Industriais: da máquina a vapor à Indústria 4.0</figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Industrialização brasileira</span>
        <h2>3. O processo de industrialização do Brasil</h2>
        <p>
          A industrialização brasileira foi tardia e conduzida em grande parte pelo Estado, diferindo do
          padrão europeu (liderado pelo capital privado). Pode ser dividida em três grandes fases:
        </p>
        <p>
          <strong>Fase 1 — Pré-industrial (até 1930):</strong> O Brasil era essencialmente uma economia
          agroexportadora, com destaque para o café. As primeiras indústrias surgiram no final do século
          XIX, ligadas à produção têxtil e ao processamento de alimentos, financiadas em parte pelo
          capital cafeeiro excedente. A abolição da escravidão (1888) e a imigração europeia forneceram
          mão de obra para as fábricas urbanas.
        </p>
        <p>
          <strong>Fase 2 — Industrialização por substituição de importações (1930–1980):</strong> A
          crise de 1929 reduziu as exportações de café e forçou o Brasil a produzir internamente o que
          antes importava. O governo Vargas (1930–1945) foi decisivo: criou a Companhia Siderúrgica
          Nacional (1941), a Companhia Vale do Rio Doce (1942) e a Petrobras (1953). No governo JK
          (1956–1961), o Plano de Metas atraiu multinacionais e consolidou a indústria automobilística.
          O regime militar (1964–1985) aprofundou a industrialização pesada e de base.
        </p>
        <p>
          <strong>Fase 3 — Abertura econômica e desindustrialização relativa (1990–hoje):</strong> O
          governo Collor abriu a economia ao mercado externo, expondo a indústria nacional à concorrência
          internacional. A partir dos anos 2000, o crescimento das exportações de commodities agrícolas
          e minerais gerou um debate sobre a <strong>reprimarização</strong> da economia e a chamada
          <strong> desindustrialização</strong>.
        </p>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Concentração espacial</span>
        <h2>4. Concentração industrial no Sudeste e desconcentração</h2>
        <p>
          Historicamente, a indústria brasileira concentrou-se na <strong>Região Metropolitana de São
          Paulo</strong> (RMSP), especialmente no chamado <strong>ABC Paulista</strong> (Santo André, São
          Bernardo do Campo, São Caetano do Sul), polo da indústria automobilística e metal-mecânica.
          Essa concentração decorreu da infraestrutura, do mercado consumidor, da mão de obra e do
          capital disponível na região.
        </p>
        <p>
          A partir dos anos 1980–1990, um processo de <strong>desconcentração industrial relativa</strong>{" "}
          deslocou unidades produtivas para o interior de São Paulo (Campinas, São José dos Campos,
          Sorocaba), para outros estados do Sudeste (Minas Gerais, Rio de Janeiro), para o Sul (Paraná,
          Santa Catarina, Rio Grande do Sul) e, mais recentemente, para o Nordeste e Centro-Oeste.
          Os fatores dessa desconcentração incluem: menores salários e aluguéis, incentivos fiscais
          estaduais (guerra fiscal), melhorias de infraestrutura e fuga da violência urbana e dos
          congestionamentos das metrópoles.
        </p>
      </section>

      {/* ── Figura 2 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="300" fill="#fce4ec" rx="12" />
          <text x="350" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#880e4f">
            Distribuição industrial no Brasil: concentração e desconcentração
          </text>
          {/* Mapa esquemático do Brasil */}
          {/* Sudeste - maior círculo */}
          <ellipse cx="430" cy="180" rx="90" ry="70" fill="#e91e63" opacity="0.7" />
          <text x="430" y="175" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">SUDESTE</text>
          <text x="430" y="190" textAnchor="middle" fontSize="10" fill="#fff">~50% do PIB industrial</text>
          <text x="430" y="204" textAnchor="middle" fontSize="10" fill="#fff">SP, RJ, MG, ES</text>
          {/* Sul */}
          <ellipse cx="380" cy="255" rx="60" ry="35" fill="#c2185b" opacity="0.7" />
          <text x="380" y="252" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">SUL</text>
          <text x="380" y="266" textAnchor="middle" fontSize="9" fill="#fff">~20% — Metalmec., Têxtil</text>
          {/* Centro-Oeste */}
          <ellipse cx="330" cy="160" rx="50" ry="35" fill="#e91e63" opacity="0.4" />
          <text x="330" y="157" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#880e4f">C-OESTE</text>
          <text x="330" y="170" textAnchor="middle" fontSize="9" fill="#880e4f">Alimentos/agro</text>
          {/* Norte */}
          <ellipse cx="270" cy="100" rx="70" ry="50" fill="#f48fb1" opacity="0.6" />
          <text x="270" y="97" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#880e4f">NORTE</text>
          <text x="270" y="111" textAnchor="middle" fontSize="9" fill="#880e4f">Zona Franca de Manaus</text>
          {/* Nordeste */}
          <ellipse cx="490" cy="100" rx="70" ry="50" fill="#f48fb1" opacity="0.6" />
          <text x="490" y="97" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#880e4f">NORDESTE</text>
          <text x="490" y="111" textAnchor="middle" fontSize="9" fill="#880e4f">Têxtil, calçados, polo PE</text>
          {/* legenda */}
          <rect x="30" y="220" width="18" height="14" fill="#e91e63" opacity="0.9" rx="3" />
          <text x="55" y="231" fontSize="10" fill="#880e4f">Alta concentração</text>
          <rect x="30" y="245" width="18" height="14" fill="#f48fb1" opacity="0.8" rx="3" />
          <text x="55" y="256" fontSize="10" fill="#880e4f">Concentração média (desconcentração em curso)</text>
          <text x="350" y="290" textAnchor="middle" fontSize="10" fill="#880e4f">
            A desconcentração industrial ocorre por incentivos fiscais (guerra fiscal), menor custo e infraestrutura
          </text>
        </svg>
        <figcaption>
          Figura 2 — Distribuição esquemática da indústria no Brasil: o Sudeste ainda concentra a maior
          parte, mas o Sul, o Nordeste e o Centro-Oeste têm ampliado sua participação
        </figcaption>
      </figure>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Zona Franca de Manaus</span>
        <h2>5. A Zona Franca de Manaus</h2>
        <p>
          Criada em 1967 durante o regime militar, a <strong>Zona Franca de Manaus (ZFM)</strong> é uma
          área de livre comércio e polo industrial localizada na capital do Amazonas. O modelo foi criado
          com o objetivo de integrar a Amazônia à economia nacional e garantir a soberania sobre a região.
          Empresas instaladas na ZFM recebem incentivos fiscais especiais (isenção de IPI, II, ICMS),
          o que atraiu montadoras de eletrônicos (motos Honda, celulares, televisores) e outros segmentos.
        </p>
        <p>
          A ZFM é um exemplo de <strong>industrialização induzida por política pública</strong> em uma
          região sem vantagens comparativas naturais para a indústria (distante dos centros consumidores,
          sem tradição industrial). Seu futuro é objeto de debate: defensores argumentam que garante
          desenvolvimento regional e preservação ambiental; críticos questionam a eficiência econômica
          dos incentivos e sua dependência em relação ao Estado.
        </p>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Indústria 4.0</span>
        <h2>6. A Quarta Revolução Industrial e o Brasil</h2>
        <p>
          A chamada <strong>Indústria 4.0</strong> refere-se à integração entre sistemas físicos e
          digitais na produção: Internet das Coisas (IoT), inteligência artificial, manufatura aditiva
          (impressão 3D), big data e automação avançada. Essa revolução está aprofundando a diferença
          entre países que dominam essas tecnologias e os que se limitam a montá-las ou a fornecer
          matérias-primas.
        </p>
        <p>
          Para o Brasil, a Indústria 4.0 representa um desafio e uma oportunidade: o país tem capacidade
          em áreas como embraer (aviação), petróleo (pré-sal), agtech (tecnologia agrícola) e
          biocombustíveis, mas precisa investir mais em pesquisa, desenvolvimento e inovação (P&D) para
          não se limitar ao papel de exportador de commodities.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Desindustrialização</span>
        <h2>7. Desindustrialização e reprimarização da economia</h2>
        <p>
          A <strong>desindustrialização</strong> é o processo pelo qual a participação da indústria no
          PIB e no emprego de um país cai progressivamente. Em países desenvolvidos, isso ocorreu de
          forma natural (pós-industrialização), com a expansão do setor de serviços. No Brasil, os
          economistas debatem se estamos vivendo uma desindustrialização <em>prematura</em>, antes de
          atingir o nível de desenvolvimento típico dos países que passaram por esse processo.
        </p>
        <p>
          A <strong>reprimarização</strong> da pauta exportadora — com crescente participação de
          commodities (soja, minério de ferro, petróleo) e redução de manufaturados — é vista por muitos
          analistas como um sinal de retrocesso estrutural, associado à chamada <strong>doença
          holandesa</strong>: a valorização do câmbio provocada por exportações de recursos naturais
          torna as exportações industriais menos competitivas.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Indústria e meio ambiente</span>
        <h2>8. Impactos ambientais da industrialização</h2>
        <p>
          A industrialização é uma das principais causas da degradação ambiental urbana e global. Os
          impactos incluem: poluição do ar (emissão de CO2, SO2, NOx pelas fábricas e termelétricas),
          poluição das águas (descarte de efluentes industriais), geração de resíduos sólidos e
          contaminação do solo. Nas cidades industriais, a poluição reduzia drasticamente a qualidade
          de vida dos trabalhadores, como ficou evidente na Londres vitoriana.
        </p>
        <p>
          A partir dos anos 1970, com a emergência da questão ambiental, foram criadas legislações e
          acordos internacionais para controlar a poluição industrial. No Brasil, o CONAMA (Conselho
          Nacional do Meio Ambiente) e o IBAMA são responsáveis pela regulamentação e fiscalização.
          Conceitos como <strong>produção mais limpa</strong>, <strong>ecologia industrial</strong> e
          <strong> simbiose industrial</strong> buscam reduzir os impactos sem frear a produção.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tipos de indústria</span>
        <h2>9. Classificação das indústrias</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais tipos de indústria e exemplos brasileiros</caption>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Descrição</th>
                <th>Exemplos no Brasil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>De base (pesada)</td>
                <td>Produz insumos para outras indústrias</td>
                <td>CSN (siderurgia), Petrobras (petroquímica), Vale (mineração)</td>
              </tr>
              <tr>
                <td>De bens intermediários</td>
                <td>Produz componentes e peças</td>
                <td>Fabricantes de autopeças, componentes eletrônicos</td>
              </tr>
              <tr>
                <td>De bens de consumo duráveis</td>
                <td>Bens com vida útil longa</td>
                <td>Automóveis (Fiat, Volkswagen), eletrodomésticos (Consul)</td>
              </tr>
              <tr>
                <td>De bens de consumo não duráveis</td>
                <td>Bens de uso imediato</td>
                <td>Alimentos (Nestlé, JBS), vestuário, medicamentos</td>
              </tr>
              <tr>
                <td>De alta tecnologia</td>
                <td>Intensiva em P&D e inovação</td>
                <td>Embraer (aviação), WEG (energia), totvs (software)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção de exercícios ── */}
      <section className="lesson-section" id="exercicios">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Exercício 1"
          statement={
            <p>
              O fordismo e o toyotismo são dois modelos de organização da produção industrial surgidos no
              século XX. Assinale a alternativa que apresenta corretamente uma diferença fundamental entre
              esses dois modelos:
            </p>
          }
          options={[
            { letter: "a", text: "O fordismo baseava-se na produção flexível e personalizada, enquanto o toyotismo priorizava a produção em massa padronizada." },
            { letter: "b", text: "O toyotismo foi desenvolvido na Alemanha e o fordismo no Japão, com foco na exportação de bens de luxo." },
            { letter: "c", text: "O fordismo caracterizava-se pela produção em série, com grandes estoques, enquanto o toyotismo adotou o sistema just-in-time, com produção sob demanda e mínimo de estoques.", correct: true },
            { letter: "d", text: "Ambos os modelos são idênticos em sua essência, diferindo apenas no país de origem e nos produtos fabricados." },
            { letter: "e", text: "O toyotismo foi criado nos EUA por Henry Ford e exportado para o Japão após a Segunda Guerra Mundial." },
          ]}
          resolution={
            <p>
              O fordismo, desenvolvido por Henry Ford nos EUA no início do século XX, baseava-se na produção
              em massa e em série (linha de montagem), com grandes estoques de produtos padronizados. O
              toyotismo, desenvolvido no Japão pela Toyota a partir dos anos 1950, introduziu o sistema
              just-in-time (produção sob demanda, sem grandes estoques), a flexibilidade produtiva e o
              controle de qualidade total. A alternativa C descreve corretamente essa diferença.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              A Zona Franca de Manaus (ZFM) é um polo industrial criado em 1967 no coração da Amazônia.
              Qual foi o principal objetivo do governo brasileiro ao criar a ZFM em uma região distante dos
              centros industriais do país?
            </p>
          }
          options={[
            { letter: "a", text: "Explorar as reservas de petróleo descobertas na Amazônia e processá-las localmente." },
            { letter: "b", text: "Integrar a Amazônia à economia nacional, garantir a soberania sobre a região e promover o desenvolvimento local mediante incentivos fiscais.", correct: true },
            { letter: "c", text: "Criar um polo de tecnologia de ponta para competir com o Vale do Silício norte-americano." },
            { letter: "d", text: "Substituir as importações de matérias-primas tropicais, aproveitando a abundância de recursos naturais da floresta." },
            { letter: "e", text: "Atrair mão de obra qualificada do Sul e do Sudeste para aumentar a produtividade da região Norte." },
          ]}
          resolution={
            <p>
              A Zona Franca de Manaus foi criada durante o regime militar com objetivos geopolíticos e de
              desenvolvimento regional: integrar a Amazônia à economia do país, assegurar a soberania
              nacional sobre a região (preocupação recorrente com a "internacionalização" da Amazônia) e
              criar empregos e renda localmente por meio de incentivos fiscais que compensassem as
              desvantagens de localização. A alternativa B está correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              O processo de desconcentração industrial no Brasil, observado a partir dos anos 1980,
              deslocou parte das indústrias da Grande São Paulo para outras regiões do país. Entre os
              fatores que explicam esse movimento, NÃO se inclui:
            </p>
          }
          options={[
            { letter: "a", text: "A busca por regiões com menores custos de mão de obra e aluguéis." },
            { letter: "b", text: "A política de incentivos fiscais de estados e municípios (guerra fiscal)." },
            { letter: "c", text: "A melhoria da infraestrutura de transportes e energia em outras regiões do país." },
            { letter: "d", text: "O aumento da concentração industrial na Região Metropolitana de São Paulo, que atraiu ainda mais indústrias.", correct: true },
            { letter: "e", text: "A fuga dos congestionamentos e da violência urbana das metrópoles." },
          ]}
          resolution={
            <p>
              A desconcentração industrial ocorreu justamente pelo oposto do que afirma a alternativa D: a
              RMSP continuou sendo o maior polo industrial, mas sua participação relativa diminuiu enquanto
              outras regiões (interior de SP, Sul, Nordeste, Centro-Oeste) cresceram. Os demais fatores
              listados (menor custo, guerra fiscal, melhor infraestrutura, fuga das metrópoles) são causas
              reais da desconcentração. Portanto, a alternativa D é a que NÃO explica o processo.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              A chamada "reprimarização" da pauta exportadora brasileira é um fenômeno observado nas últimas
              décadas. Com base nesse conceito, assinale a alternativa correta:
            </p>
          }
          options={[
            { letter: "a", text: "A reprimarização refere-se ao crescimento da produção de manufaturados de alta tecnologia, substituindo as exportações de commodities." },
            { letter: "b", text: "A reprimarização ocorre quando um país amplia sua dependência das exportações de produtos primários (commodities) em detrimento de bens manufaturados.", correct: true },
            { letter: "c", text: "A reprimarização é um processo exclusivamente agrícola, não afetando a mineração ou a extração de petróleo." },
            { letter: "d", text: "A reprimarização é um sinal de amadurecimento econômico, semelhante ao processo de desindustrialização natural ocorrido nos países europeus." },
            { letter: "e", text: "A reprimarização no Brasil ocorreu apenas no setor têxtil, sem impactar as exportações de aço e automóveis." },
          ]}
          resolution={
            <p>
              A reprimarização é o processo pelo qual a pauta exportadora de um país volta a ser dominada
              por produtos primários (matérias-primas não processadas ou semielaboradas), como soja, minério
              de ferro, petróleo e carne. No Brasil, esse fenômeno é observado desde os anos 1990–2000, com
              a crescente participação de commodities nas exportações totais e a redução relativa dos
              manufaturados. A alternativa B está correta.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              A "doença holandesa" é um conceito econômico utilizado para explicar um dos desafios da
              industrialização em países ricos em recursos naturais. Com base nesse conceito, assinale a
              alternativa que melhor descreve o mecanismo da doença holandesa e sua relação com a
              desindustrialização:
            </p>
          }
          options={[
            { letter: "a", text: "A doença holandesa ocorre quando países importam máquinas industriais em excesso, gerando dependência tecnológica e desequilíbrio comercial." },
            { letter: "b", text: "A doença holandesa resulta da contaminação ambiental causada pela extração de recursos naturais, que destrói setores como a pesca e o turismo, levando à desindustrialização." },
            { letter: "c", text: "A doença holandesa ocorre quando as exportações abundantes de recursos naturais valorizam a moeda nacional, tornando as exportações industriais menos competitivas e desincentivando a produção manufatureira.", correct: true },
            { letter: "d", text: "A doença holandesa é causada pela queda nos preços internacionais das commodities, que reduz as receitas de exportação e provoca recessão industrial." },
            { letter: "e", text: "A doença holandesa é uma enfermidade ocupacional que acomete trabalhadores da indústria pesada, reduzindo a produtividade dos setores metal-mecânico e químico." },
          ]}
          resolution={
            <p>
              A "doença holandesa" (Dutch Disease) foi cunhada após a descoberta de gás natural na Holanda
              nos anos 1960, que gerou um boom de exportações e valorizou o câmbio, prejudicando as
              exportações industriais holandesas. O mecanismo: exportações de recursos naturais aumentam a
              entrada de moeda estrangeira → valorização do câmbio → produtos industriais nacionais ficam
              mais caros no exterior → redução das exportações manufatureiras → pressão sobre a indústria
              nacional. No Brasil, o debate gira em torno do impacto das exportações de soja, minério e
              petróleo sobre a competitividade industrial. A alternativa C está correta.
            </p>
          }
        />
      </section>
    </article>
  );
}
