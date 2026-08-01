"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap30Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 30</span>
          <h1>Transportes, logística e infraestrutura</h1>
          <p>
            Os sistemas de transporte e logística são os nervos que conectam o espaço geográfico,
            possibilitando o deslocamento de pessoas, mercadorias e informações. A qualidade da
            infraestrutura de transportes influencia diretamente a competitividade econômica, a
            integração territorial, o acesso a serviços e a qualidade de vida da população. Conhecer
            as características, os problemas e os desafios dos transportes no Brasil e no mundo é
            indispensável para compreender questões do ENEM sobre território, economia e
            desenvolvimento.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Modais de transporte</span>
        <h2>1. Os modais de transporte: características e usos</h2>
        <p>
          Os diferentes modais de transporte têm características distintas quanto à capacidade de carga,
          velocidade, custo, distância e tipo de produto que podem transportar. A escolha do modal
          adequado é central para a eficiência logística de empresas e países.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparação dos principais modais de transporte</caption>
            <thead>
              <tr>
                <th>Modal</th>
                <th>Capacidade de carga</th>
                <th>Custo por tonelada</th>
                <th>Velocidade</th>
                <th>Melhor uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rodoviário</td>
                <td>Baixa a média</td>
                <td>Alto</td>
                <td>Média</td>
                <td>Curtas e médias distâncias, porta a porta</td>
              </tr>
              <tr>
                <td>Ferroviário</td>
                <td>Alta</td>
                <td>Baixo</td>
                <td>Baixa a média</td>
                <td>Longas distâncias, cargas pesadas (grãos, minério)</td>
              </tr>
              <tr>
                <td>Hidroviário</td>
                <td>Muito alta</td>
                <td>Muito baixo</td>
                <td>Baixa</td>
                <td>Longas distâncias, cargas volumosas e pesadas</td>
              </tr>
              <tr>
                <td>Aéreo</td>
                <td>Baixa</td>
                <td>Muito alto</td>
                <td>Muito alta</td>
                <td>Cargas de alto valor, perecíveis, urgentes</td>
              </tr>
              <tr>
                <td>Dutoviário</td>
                <td>Alta (contínua)</td>
                <td>Baixo</td>
                <td>Contínuo</td>
                <td>Petróleo, gás, álcool em fluxo constante</td>
              </tr>
              <tr>
                <td>Marítimo (cabotagem)</td>
                <td>Muito alta</td>
                <td>Muito baixo</td>
                <td>Baixa</td>
                <td>Longas distâncias costeiras, granéis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Matriz de transportes</span>
        <h2>2. A matriz de transportes brasileira: o "rodoviarismo"</h2>
        <p>
          A <strong>matriz de transportes</strong> é a distribuição percentual do volume de cargas e
          passageiros entre os diferentes modais. No Brasil, a matriz é fortemente dominada pelo
          transporte <strong>rodoviário</strong>, que responde por cerca de <strong>65% do
          transporte de cargas</strong> e mais de 90% do transporte de passageiros. Esse desequilíbrio
          é conhecido como <strong>"rodoviarismo"</strong> e representa uma das maiores deficiências
          logísticas do país.
        </p>
        <p>
          O rodoviarismo brasileiro consolidou-se especialmente a partir dos anos 1950, com o governo
          JK priorizando a indústria automobilística e a construção de rodovias (como a Belém–Brasília).
          O modelo foi impulsionado por interesses da indústria de automóveis (majoritariamente
          multinacional) e do setor de combustíveis, que pressionaram contra investimentos em ferrovias
          e hidrovias.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Matriz de transportes de cargas: Brasil x países referência (% aproximado)</caption>
            <thead>
              <tr>
                <th>País</th>
                <th>Rodoviário</th>
                <th>Ferroviário</th>
                <th>Hidroviário</th>
                <th>Outros</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brasil</td>
                <td>65%</td>
                <td>15%</td>
                <td>13%</td>
                <td>7%</td>
              </tr>
              <tr>
                <td>EUA</td>
                <td>32%</td>
                <td>40%</td>
                <td>15%</td>
                <td>13%</td>
              </tr>
              <tr>
                <td>China</td>
                <td>33%</td>
                <td>33%</td>
                <td>30%</td>
                <td>4%</td>
              </tr>
              <tr>
                <td>Austrália</td>
                <td>36%</td>
                <td>50%</td>
                <td>5%</td>
                <td>9%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Figura 1 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="300" fill="#e3f2fd" rx="12" />
          <text x="350" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#0d47a1">
            Matriz de transportes de cargas no Brasil (aproximado)
          </text>
          {/* gráfico de pizza esquemático - blocos verticais */}
          {/* rodoviário */}
          <rect x="60" y="50" width="390" height="60" rx="6" fill="#1565c0" />
          <text x="255" y="83" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">
            Rodoviário — 65%
          </text>
          {/* ferroviário */}
          <rect x="60" y="120" width="90" height="60" rx="6" fill="#1e88e5" />
          <text x="105" y="153" textAnchor="middle" fontSize="11" fill="#fff">Ferrov.</text>
          <text x="105" y="167" textAnchor="middle" fontSize="10" fill="#fff">15%</text>
          {/* hidroviário */}
          <rect x="160" y="120" width="78" height="60" rx="6" fill="#42a5f5" />
          <text x="199" y="153" textAnchor="middle" fontSize="11" fill="#fff">Hidrov.</text>
          <text x="199" y="167" textAnchor="middle" fontSize="10" fill="#fff">13%</text>
          {/* dutos */}
          <rect x="248" y="120" width="42" height="60" rx="6" fill="#90caf9" />
          <text x="269" y="150" textAnchor="middle" fontSize="9" fill="#0d47a1">Dutos</text>
          <text x="269" y="164" textAnchor="middle" fontSize="9" fill="#0d47a1">4%</text>
          {/* aéreo e cabotagem */}
          <rect x="300" y="120" width="42" height="60" rx="6" fill="#bbdefb" />
          <text x="321" y="150" textAnchor="middle" fontSize="9" fill="#0d47a1">Aér/Cab</text>
          <text x="321" y="164" textAnchor="middle" fontSize="9" fill="#0d47a1">3%</text>
          {/* legenda comparativa */}
          <text x="350" y="215" textAnchor="middle" fontSize="12" fill="#0d47a1" fontWeight="bold">
            Comparação: EUA usa 40% de ferrovias; Brasil apenas 15%
          </text>
          <text x="350" y="235" textAnchor="middle" fontSize="11" fill="#1565c0">
            O rodoviarismo eleva o custo do frete e reduz a competitividade das exportações brasileiras
          </text>
          <text x="350" y="255" textAnchor="middle" fontSize="11" fill="#1565c0">
            O custo logístico representa cerca de 12-13% do PIB no Brasil vs. 8% nos EUA
          </text>
          <text x="350" y="278" textAnchor="middle" fontSize="10" fill="#1976d2">
            Solução: diversificação da matriz com ferrovias, hidrovias e cabotagem
          </text>
        </svg>
        <figcaption>
          Figura 1 — Matriz de transportes de cargas no Brasil: a dominância do modal rodoviário eleva
          os custos logísticos e reduz a competitividade econômica
        </figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ferrovias</span>
        <h2>3. Ferrovias brasileiras: história, declínio e perspectivas</h2>
        <p>
          O Brasil teve uma rede ferroviária expressiva no início do século XX, construída principalmente
          para escoar o café do interior paulista e mineiro até os portos de Santos e Rio de Janeiro.
          Contudo, a partir dos anos 1950–1960, as rodovias passaram a receber a maior parte dos
          investimentos públicos, e a malha ferroviária foi progressivamente sucateada.
        </p>
        <p>
          A privatização das ferrovias nos anos 1990 transferiu a operação das linhas remanescentes para
          empresas concessionárias, com resultados mistos: algumas linhas melhoraram, mas a expansão da
          malha foi mínima. As ferrovias brasileiras atuais são voltadas principalmente para cargas
          pesadas (grãos e minério de ferro), especialmente no eixo <strong>Vitória-Minas</strong> (Vale)
          e na <strong>Ferrovia Centro-Atlântica</strong>. O transporte ferroviário de passageiros
          praticamente desapareceu, exceto pelos metrôs e VLTs urbanos.
        </p>
        <p>
          Projetos como a <strong>Ferrovia de Integração Oeste-Leste (FIOL)</strong> e a polêmica
          <strong> Ferrogrão</strong> (ligando o Centro-Oeste ao Pará) são debatidos, mas enfrentam
          obstáculos financeiros, ambientais e fundiários.
        </p>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Hidrovias e portos</span>
        <h2>4. Hidrovias, portos e a infraestrutura aquaviária</h2>
        <p>
          O Brasil possui um enorme potencial hidroviário, com rios caudalosos e extensos que poderiam
          ser aproveitados para o transporte de cargas a baixo custo. O <strong>Rio Amazonas</strong> e
          seus afluentes, o <strong>Rio São Francisco</strong> (integração regional do Nordeste), o
          sistema <strong>Tietê-Paraná</strong> (ligando SP e MT) e o <strong>Rio Paraguai</strong>
          (Hidrovia do Mercosul) são os principais eixos hidroviários do país.
        </p>
        <p>
          Os <strong>portos</strong> são essenciais para o comércio exterior: cerca de 95% do volume
          das exportações brasileiras sai por via marítima. Os maiores portos do Brasil são{" "}
          <strong>Santos (SP)</strong> (maior da América Latina), <strong>Paranaguá (PR)</strong>,
          <strong> Itajaí (SC)</strong>, <strong>Suape (PE)</strong> e os terminais privados do
          <strong> Arco Norte</strong> (Pará e Maranhão), que ganham importância com a expansão do
          agronegócio no MATOPIBA.
        </p>
        <p>
          A <strong>cabotagem</strong> — navegação ao longo da costa brasileira entre portos nacionais
          — é um modal eficiente e de baixo custo que ainda é pouco aproveitado no Brasil. Incentivos
          recentes buscam ampliar sua participação na matriz.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Logística e custo Brasil</span>
        <h2>5. Logística, custo Brasil e competitividade</h2>
        <p>
          O <strong>"custo Brasil"</strong> é uma expressão que designa o conjunto de fatores
          estruturais que encarecem a produção e as exportações nacionais em relação à concorrência
          internacional. Entre esses fatores, a logística precária ocupa papel central: o custo logístico
          representa cerca de <strong>12–13% do PIB brasileiro</strong>, enquanto em países como EUA e
          Alemanha esse índice fica em torno de 8%.
        </p>
        <p>
          O excesso de dependência das rodovias — modal mais caro por tonelada-quilômetro — onera
          especialmente as exportações agrícolas. O caminho que a soja percorre do Mato Grosso ao porto
          de Santos (mais de 1.700 km por rodovias precárias) é um dos exemplos clássicos do problema
          logístico brasileiro. Por isso, há crescente interesse em alternativas como a Hidrovia do Rio
          Tapajós e o escoamento pelo Arco Norte.
        </p>
      </section>

      {/* ── Figura 2 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="280" fill="#e8f5e9" rx="12" />
          <text x="350" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1b5e20">
            Eixos logísticos e corredores de exportação do Brasil
          </text>
          {/* representação esquemática de corredores */}
          {/* fundo mapa */}
          <ellipse cx="350" cy="155" rx="200" ry="130" fill="#c8e6c9" opacity="0.5" />
          {/* MATOPIBA / Centro-Oeste - ponto de produção */}
          <circle cx="310" cy="120" r="18" fill="#388e3c" />
          <text x="310" y="117" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff">MT</text>
          <text x="310" y="129" textAnchor="middle" fontSize="8" fill="#fff">Grãos</text>
          {/* Porto de Santos */}
          <rect x="430" y="185" width="60" height="30" rx="5" fill="#1565c0" />
          <text x="460" y="198" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff">Porto</text>
          <text x="460" y="209" textAnchor="middle" fontSize="9" fill="#fff">Santos</text>
          {/* Porto Arco Norte */}
          <rect x="200" y="55" width="60" height="30" rx="5" fill="#0277bd" />
          <text x="230" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff">Arco</text>
          <text x="230" y="79" textAnchor="middle" fontSize="9" fill="#fff">Norte</text>
          {/* corredor Sul - rodovias */}
          <line x1="310" y1="138" x2="430" y2="188" stroke="#e65100" strokeWidth="3" strokeDasharray="6,3" />
          <text x="385" y="160" textAnchor="middle" fontSize="9" fill="#e65100" fontWeight="bold">Rodov. 1700km</text>
          {/* corredor Norte - hidrovias */}
          <line x1="300" y1="109" x2="250" y2="80" stroke="#1565c0" strokeWidth="3" />
          <text x="260" y="102" textAnchor="middle" fontSize="9" fill="#1565c0" fontWeight="bold">Hidrovia N</text>
          {/* Ferroviário */}
          <line x1="325" y1="125" x2="430" y2="185" stroke="#2e7d32" strokeWidth="2.5" />
          <text x="385" y="148" textAnchor="middle" fontSize="8" fill="#2e7d32">Ferrovia</text>
          {/* legendas */}
          <line x1="50" y1="230" x2="90" y2="230" stroke="#e65100" strokeWidth="3" strokeDasharray="6,3" />
          <text x="100" y="234" fontSize="10" fill="#e65100">Rodovia (caro, precário)</text>
          <line x1="50" y1="248" x2="90" y2="248" stroke="#1565c0" strokeWidth="3" />
          <text x="100" y="252" fontSize="10" fill="#1565c0">Hidrovia (barato, subutilizado)</text>
          <line x1="50" y1="265" x2="90" y2="265" stroke="#2e7d32" strokeWidth="3" />
          <text x="100" y="269" fontSize="10" fill="#2e7d32">Ferrovia (eficiente, pouco expandida)</text>
          <text x="530" y="250" textAnchor="middle" fontSize="10" fill="#1b5e20">
            Diversificar a matriz é
          </text>
          <text x="530" y="264" textAnchor="middle" fontSize="10" fill="#1b5e20">
            estratégico para reduzir custos
          </text>
        </svg>
        <figcaption>
          Figura 2 — Corredores de exportação brasileiros: o desafio de escoar a produção do
          Centro-Oeste e do MATOPIBA por modais mais eficientes que as rodovias
        </figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Transporte urbano</span>
        <h2>6. Transporte urbano e mobilidade nas cidades brasileiras</h2>
        <p>
          O transporte urbano é um dos principais problemas das metrópoles brasileiras. A combinação de
          expansão urbana acelerada, investimentos insuficientes em transporte coletivo e estímulo ao
          uso de automóveis particulares (via crédito e isenções) gerou uma crise de mobilidade: longos
          congestionamentos, tempo elevado de deslocamento e exclusão dos mais pobres, que dependem de
          ônibus superlotados.
        </p>
        <p>
          As cidades que avançaram em <strong>mobilidade sustentável</strong> investiram em metrôs,
          BRT (Bus Rapid Transit), ciclovias integradas e pedestrianização. Curitiba é frequentemente
          citada como referência no Brasil pelo seu sistema de BRT, com corredores exclusivos de ônibus
          expressos que anteciparam o que hoje se chama de mobilidade inteligente.
        </p>
        <p>
          O <strong>Estatuto da Cidade</strong> (Lei 10.257/2001) e a <strong>Política Nacional de
          Mobilidade Urbana</strong> (Lei 12.587/2012) estabelecem diretrizes para priorizar o
          transporte coletivo e ativo (a pé e bicicleta) em relação ao individual motorizado.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Infraestrutura energética</span>
        <h2>7. Infraestrutura energética e seu papel no desenvolvimento</h2>
        <p>
          A infraestrutura energética é indissociável da logística e do desenvolvimento econômico. O
          Brasil tem uma matriz elétrica majoritariamente <strong>hidrelétrica</strong> (cerca de 60%
          da geração), complementada por termelétricas (gás, carvão, biomassa) e, crescentemente, por
          <strong> energia eólica</strong> (especialmente no Nordeste) e <strong>solar</strong>.
        </p>
        <p>
          As grandes hidrelétricas (Itaipu, Tucuruí, Belo Monte) são obras de infraestrutura com
          enorme impacto territorial: inundam vastas áreas, deslocam populações (indígenas e
          ribeirinhos) e alteram ecossistemas. O debate sobre o custo socioambiental das hidrelétricas
          na Amazônia é central nas questões de geografia humana e ambiental.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Integração sul-americana</span>
        <h2>8. IIRSA e a integração de infraestrutura na América do Sul</h2>
        <p>
          A <strong>IIRSA (Iniciativa para a Integração da Infraestrutura Regional Sul-Americana)</strong>,
          lançada em 2000, propõe a construção de eixos de integração física entre os países sul-americanos,
          conectando rodovias, ferrovias, portos, hidrovias e redes de energia. O objetivo é facilitar o
          comércio intrarregional e o escoamento de exportações para o Pacífico e o Atlântico.
        </p>
        <p>
          Entre os projetos da IIRSA que afetam o Brasil, destacam-se a <strong>Rodovia
          Transoceânica</strong> (ligando o Brasil ao Peru e ao Pacífico), as hidrovias da Bacia
          Amazônica e a integração energética com a Argentina e o Paraguai (Itaipu). Esses projetos
          levantam questões sobre impactos ambientais na Amazônia e o papel do Brasil como liderança
          regional.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Eixos de integração IIRSA com presença brasileira</caption>
            <thead>
              <tr>
                <th>Eixo</th>
                <th>Países envolvidos</th>
                <th>Tipo de integração</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Eixo Amazonas</td>
                <td>Brasil, Colômbia, Equador, Peru</td>
                <td>Rodovias e hidrovias amazônicas</td>
              </tr>
              <tr>
                <td>Eixo Capricórnio</td>
                <td>Brasil, Argentina, Paraguai, Chile</td>
                <td>Rodovias e ferrovias rumo ao Pacífico</td>
              </tr>
              <tr>
                <td>Eixo Hidrovia Paraguai-Paraná</td>
                <td>Brasil, Argentina, Paraguai, Bolívia, Uruguai</td>
                <td>Hidrovia para escoamento de grãos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Concessões e PPPs</span>
        <h2>9. Concessões, PPPs e o papel do setor privado na infraestrutura</h2>
        <p>
          Diante da limitação fiscal do Estado, o Brasil adotou a <strong>privatização e concessão</strong>{" "}
          de infraestruturas como rodovias, ferrovias, portos e aeroportos para o setor privado,
          especialmente a partir dos anos 1990 e 2000. As <strong>Parcerias Público-Privadas (PPPs)</strong>
          buscam combinar o capital privado com o interesse público, garantindo investimentos em
          infraestrutura sem onerar diretamente o orçamento do Estado.
        </p>
        <p>
          Os resultados têm sido mistos: rodovias concedidas geralmente melhoram as condições físicas da
          pista, mas geram controvérsias sobre o valor dos pedágios. A concessão de portos e aeroportos
          ampliou a capacidade, mas levantou questões sobre acesso universal e regulação. O modelo de
          concessão continua sendo central no debate sobre como financiar a expansão da infraestrutura
          brasileira.
        </p>
      </section>

      {/* ── Seção de exercícios ── */}
      <section className="lesson-section" id="exercicios">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Exercício 1"
          statement={
            <p>
              A matriz de transportes de um país é o conjunto de modais utilizados para o deslocamento
              de cargas e passageiros. Com base na matriz de transportes brasileira, assinale a
              alternativa correta:
            </p>
          }
          options={[
            { letter: "a", text: "O transporte ferroviário é o modal dominante no Brasil, respondendo por mais de 60% do transporte de cargas." },
            { letter: "b", text: "O Brasil possui uma das matrizes de transportes mais diversificadas do mundo, com equilíbrio entre rodovias, ferrovias e hidrovias." },
            { letter: "c", text: "O modal rodoviário é amplamente dominante na matriz brasileira de transportes de cargas, respondendo por cerca de 65% do volume transportado.", correct: true },
            { letter: "d", text: "A navegação de cabotagem é o principal modal de transporte de cargas no Brasil, especialmente para grãos e minério de ferro." },
            { letter: "e", text: "O transporte aéreo de cargas representa mais de 40% da matriz brasileira, graças à vastidão do território nacional." },
          ]}
          resolution={
            <p>
              O modal rodoviário responde por aproximadamente 65% do transporte de cargas no Brasil, o
              que caracteriza o "rodoviarismo" — uma das principais deficiências logísticas do país. Esse
              desequilíbrio eleva os custos, pois o modal rodoviário tem custo por tonelada-quilômetro
              muito superior ao ferroviário e ao hidroviário. A alternativa C está correta.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              O sistema de transporte de Curitiba é frequentemente citado como referência em mobilidade
              urbana no Brasil. Qual característica torna o sistema de Curitiba inovador?
            </p>
          }
          options={[
            { letter: "a", text: "A cidade foi a primeira do Brasil a construir um metrô subterrâneo, inaugurado nos anos 1970." },
            { letter: "b", text: "O sistema de BRT (Bus Rapid Transit) de Curitiba, com corredores exclusivos de ônibus expressos e terminais integrados, tornou-se referência mundial em mobilidade urbana sustentável.", correct: true },
            { letter: "c", text: "Curitiba eliminou completamente o uso de automóveis particulares por meio de restrições de circulação e altas taxas de pedágio urbano." },
            { letter: "d", text: "O sistema de bondes elétricos de Curitiba, preservado desde o período colonial, é o maior da América do Sul." },
            { letter: "e", text: "Curitiba foi a primeira cidade brasileira a adotar o rodízio de veículos, reduzindo os congestionamentos em mais de 80%." },
          ]}
          resolution={
            <p>
              Curitiba é pioneira no Brasil e referência mundial no uso de BRT (Bus Rapid Transit): um sistema
              de ônibus que opera em corredores exclusivos, com terminais integrados que permitem o transbordo
              entre linhas sem pagamento adicional. Esse modelo foi implantado a partir dos anos 1970 pelo
              urbanista Jaime Lerner e influenciou sistemas de transporte em diversas cidades do mundo. A
              alternativa B está correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              O escoamento da produção agrícola do Centro-Oeste brasileiro para os portos é um dos
              maiores desafios logísticos do país. Assinale a alternativa que apresenta corretamente
              o principal problema e uma solução debatida para essa questão:
            </p>
          }
          options={[
            { letter: "a", text: "O problema é a falta de aeroportos no Centro-Oeste; a solução é a construção de novos aeroportos de carga em Mato Grosso." },
            { letter: "b", text: "O problema é a distância excessiva ao porto de Manaus; a solução é construir uma ferrovia ligando MT ao Amazonas." },
            { letter: "c", text: "O problema é a dependência de rodovias precárias para percorrer longas distâncias até portos do Sul-Sudeste; soluções incluem hidrovias e o Arco Norte para reduzir distâncias e custos.", correct: true },
            { letter: "d", text: "O problema é o excesso de ferrovias concorrentes que fragmentam o mercado; a solução é privatizá-las para um único operador nacional." },
            { letter: "e", text: "O problema são as altas tarifas portuárias de Santos; a solução é a construção de um porto seco em Brasília para centralizar as exportações." },
          ]}
          resolution={
            <p>
              O Centro-Oeste (especialmente o Mato Grosso) é o maior produtor de soja do mundo, mas está
              a mais de 1.700 km do porto de Santos, pela qual a soja é transportada majoritariamente por
              caminhões em rodovias precárias, o que eleva muito o custo. Soluções debatidas incluem o
              uso de hidrovias (como o Tapajós) e o escoamento pelo Arco Norte (portos do Pará e Maranhão),
              que reduzem a distância até os mercados asiáticos. A alternativa C está correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              A IIRSA (Iniciativa para a Integração da Infraestrutura Regional Sul-Americana) é um
              programa lançado em 2000 pelos países da América do Sul. Qual é o principal objetivo
              da IIRSA?
            </p>
          }
          options={[
            { letter: "a", text: "Criar uma zona de livre comércio entre os países sul-americanos, eliminando tarifas e barreiras não tarifárias ao comércio intrarregional." },
            { letter: "b", text: "Integrar fisicamente os países da América do Sul por meio de eixos de infraestrutura (rodovias, ferrovias, hidrovias, portos, energia), facilitando o comércio e o escoamento de exportações.", correct: true },
            { letter: "c", text: "Padronizar as moedas e sistemas bancários dos países sul-americanos para facilitar as transações financeiras regionais." },
            { letter: "d", text: "Criar um exército conjunto dos países sul-americanos para garantir a segurança das fronteiras e dos recursos naturais regionais." },
            { letter: "e", text: "Regular o uso dos recursos hídricos compartilhados entre países da América do Sul, como o Aquífero Guarani e os rios da Bacia Amazônica." },
          ]}
          resolution={
            <p>
              A IIRSA é uma iniciativa de integração física da América do Sul, envolvendo eixos de
              infraestrutura que conectam rodovias, ferrovias, hidrovias, portos e redes de energia entre
              os países do continente. O objetivo é facilitar o comércio intrarregional, reduzir custos
              logísticos e melhorar o acesso dos países ao mar (especialmente os sem litoral, como Bolívia
              e Paraguai). A alternativa B está correta.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              Analise a seguinte afirmação: "O rodoviarismo brasileiro não é resultado apenas de uma
              escolha técnica, mas de um processo histórico e político que privilegiou determinados
              setores econômicos em detrimento de uma matriz de transportes mais eficiente e
              equilibrada."
            </p>
          }
          options={[
            { letter: "a", text: "A afirmação está incorreta, pois o rodoviarismo resulta exclusivamente de limitações geográficas do território brasileiro, que tornaram inviável a construção de ferrovias e hidrovias." },
            { letter: "b", text: "A afirmação está incorreta, pois ferrovias e hidrovias são tecnicamente inferiores às rodovias para o transporte de cargas no Brasil, justificando a escolha pelo modal rodoviário." },
            { letter: "c", text: "A afirmação está correta: decisões políticas como o estímulo à indústria automobilística no governo JK e os interesses de setores ligados ao petróleo e ao transporte rodoviário contribuíram para consolidar o rodoviarismo em detrimento de modais mais eficientes.", correct: true },
            { letter: "d", text: "A afirmação está parcialmente correta, mas o fator determinante do rodoviarismo foi a falta de recursos hídricos navegáveis no Brasil, que inviabilizou o desenvolvimento das hidrovias." },
            { letter: "e", text: "A afirmação está correta, mas se aplica apenas ao período colonial, quando Portugal proibiu a construção de ferrovias para manter o controle político sobre o território." },
          ]}
          resolution={
            <p>
              O rodoviarismo brasileiro consolidou-se como resultado de escolhas políticas deliberadas:
              o governo JK (1956–1961) priorizou a atração de multinacionais automobilísticas e a
              construção de rodovias, em detrimento do investimento em ferrovias (que poderiam ameaçar
              os interesses dessas empresas). Além disso, setores ligados ao petróleo e ao transporte
              rodoviário exerceram pressão política contínua. O Brasil possui rios navegáveis e rotas
              ferroviárias tecnicamente viáveis, mas que não foram desenvolvidas por opções políticas.
              A alternativa C está correta.
            </p>
          }
        />
      </section>
    </article>
  );
}
