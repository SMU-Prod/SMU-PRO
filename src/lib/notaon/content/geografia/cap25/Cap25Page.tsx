"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap25Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 25</span>
          <h1>Metropolização, redes urbanas e cidades inteligentes</h1>
          <p>
            As cidades contemporâneas não existem isoladas: integram redes complexas de
            fluxos de pessoas, mercadorias, informações e capital. A metropolização
            — processo de formação e expansão das grandes metrópoles — reestrutura o
            território, criando espaços de centralidade e periferias em escalas cada vez
            maiores. Ao mesmo tempo, o avanço das tecnologias digitais inaugura o conceito
            de "cidade inteligente", prometendo soluções inovadoras para os velhos
            problemas urbanos, mas também gerando novos debates sobre privacidade,
            democracia e desigualdade no acesso à tecnologia.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Metropolização</span>
        <h2>1. O processo de metropolização</h2>
        <p>
          A metropolização é o processo de crescimento e expansão das metrópoles além
          dos limites do município original, incorporando cidades vizinhas à sua dinâmica
          econômica, social e espacial. Esse processo cria as regiões metropolitanas:
          conjuntos de municípios integrados ao polo principal por fluxos cotidianos de
          trabalho, consumo, serviços e mobilidade.
        </p>
        <p>
          No Brasil, as primeiras regiões metropolitanas foram institucionalizadas em
          1973, com a criação das RMs de São Paulo, Rio de Janeiro, Belo Horizonte,
          Porto Alegre, Curitiba, Salvador, Fortaleza e Recife. Desde então, o número
          cresceu para mais de 70 regiões metropolitanas legalmente instituídas, embora
          nem todas possuam real integração metropolitana — algumas foram criadas por
          conveniência política para acesso a recursos federais.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais regiões metropolitanas brasileiras</caption>
            <thead>
              <tr>
                <th>Região Metropolitana</th>
                <th>Estado</th>
                <th>Pop. estimada (2022)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>São Paulo</td><td>SP</td><td>22 milhões</td></tr>
              <tr><td>Rio de Janeiro</td><td>RJ</td><td>13 milhões</td></tr>
              <tr><td>Belo Horizonte</td><td>MG</td><td>6 milhões</td></tr>
              <tr><td>Porto Alegre</td><td>RS</td><td>4,3 milhões</td></tr>
              <tr><td>Fortaleza</td><td>CE</td><td>4,1 milhões</td></tr>
              <tr><td>Recife</td><td>PE</td><td>4 milhões</td></tr>
              <tr><td>Salvador</td><td>BA</td><td>3,9 milhões</td></tr>
              <tr><td>Curitiba</td><td>PR</td><td>3,7 milhões</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SVG 1: Estrutura metropolitana ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="300" fill="#f0f9ff" rx="8"/>
          <text x="300" y="26" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
            Estrutura de uma Região Metropolitana
          </text>
          {/* Metrópole central */}
          <circle cx="300" cy="155" r="65" fill="#3b82f6" opacity="0.85"/>
          <text x="300" y="150" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">METRÓPOLE</text>
          <text x="300" y="166" textAnchor="middle" fontSize="11" fill="white">POLO</text>
          {/* Cidades periféricas */}
          <circle cx="150" cy="100" r="32" fill="#60a5fa" opacity="0.8"/>
          <text x="150" y="97" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">Cidade</text>
          <text x="150" y="110" textAnchor="middle" fontSize="10" fill="white">sub-regional</text>
          <line x1="180" y1="113" x2="238" y2="133" stroke="#93c5fd" strokeWidth="2"/>

          <circle cx="460" cy="90" r="32" fill="#60a5fa" opacity="0.8"/>
          <text x="460" y="87" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">Cidade</text>
          <text x="460" y="100" textAnchor="middle" fontSize="10" fill="white">sub-regional</text>
          <line x1="430" y1="108" x2="362" y2="128" stroke="#93c5fd" strokeWidth="2"/>

          <circle cx="140" cy="220" r="28" fill="#93c5fd" opacity="0.8"/>
          <text x="140" y="217" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e3a8a">Município</text>
          <text x="140" y="230" textAnchor="middle" fontSize="9" fill="#1e3a8a">dormitório</text>
          <line x1="166" y1="210" x2="238" y2="185" stroke="#bfdbfe" strokeWidth="1.5"/>

          <circle cx="460" cy="225" r="28" fill="#93c5fd" opacity="0.8"/>
          <text x="460" y="222" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e3a8a">Município</text>
          <text x="460" y="235" textAnchor="middle" fontSize="9" fill="#1e3a8a">dormitório</text>
          <line x1="434" y1="212" x2="362" y2="185" stroke="#bfdbfe" strokeWidth="1.5"/>

          <circle cx="300" cy="265" r="24" fill="#bfdbfe" opacity="0.8"/>
          <text x="300" y="262" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e3a8a">Polo</text>
          <text x="300" y="274" textAnchor="middle" fontSize="9" fill="#1e3a8a">industrial</text>
          <line x1="300" y1="241" x2="300" y2="220" stroke="#bfdbfe" strokeWidth="1.5"/>
        </svg>
        <figcaption>Estrutura de uma região metropolitana: o polo central concentra serviços de alto nível; cidades sub-regionais e municípios dormitórios gravitam ao seu redor com diferentes graus de integração.</figcaption>
      </figure>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conurbação e megalópole</span>
        <h2>2. Conurbação, megalópole e macrometrópole</h2>
        <p>
          A conurbação ocorre quando duas ou mais cidades crescem tanto que suas
          áreas urbanas se fundem fisicamente, sem que haja solução de continuidade
          entre elas. O limite político entre os municípios permanece, mas o tecido
          urbano é contínuo. Exemplos no Brasil: a conurbação entre São Paulo e várias
          cidades do ABC Paulista (Santo André, São Bernardo do Campo, São Caetano do
          Sul), e entre Recife e Olinda.
        </p>
        <p>
          A macrometrópole paulista é o maior aglomerado urbano do Brasil: engloba
          a RM de São Paulo e outras regiões metropolitanas e aglomerações urbanas
          do interior paulista (Campinas, Santos, Sorocaba, Vale do Paraíba), formando
          um contínuo urbano com cerca de 33 milhões de pessoas. No mundo, o conceito
          de megalópole foi criado pelo geógrafo Jean Gottmann para descrever o
          corredor urbano do Nordeste dos EUA (de Boston a Washington D.C.).
        </p>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Rede urbana</span>
        <h2>3. Redes urbanas e hierarquia de cidades</h2>
        <p>
          A rede urbana é o conjunto de cidades interligadas por fluxos de pessoas,
          mercadorias, informações e serviços. Nessa rede, as cidades ocupam posições
          hierárquicas distintas, determinadas pela quantidade e qualidade dos serviços
          que oferecem para si e para outras cidades da região.
        </p>
        <p>
          O IBGE classifica as cidades brasileiras em uma hierarquia urbana por meio
          do estudo "Regiões de Influência das Cidades" (REGIC). No topo estão as
          Metrópoles (São Paulo, Rio de Janeiro, Brasília), seguidas pelas Capitais
          Regionais, Centros Sub-regionais, Centros de Zona e Centros Locais. Quanto
          mais alto na hierarquia, maior a área de influência e mais diversificados
          os serviços oferecidos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Hierarquia urbana brasileira (baseada no REGIC/IBGE)</caption>
            <thead>
              <tr>
                <th>Nível</th>
                <th>Descrição</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Metrópole</td><td>Maior influência nacional/global</td><td>São Paulo, Rio de Janeiro, Brasília</td></tr>
              <tr><td>Capital Regional A</td><td>Grande influência estadual/regional</td><td>Manaus, Belém, Fortaleza, Curitiba</td></tr>
              <tr><td>Capital Regional B</td><td>Influência regional relevante</td><td>Maceió, Natal, João Pessoa</td></tr>
              <tr><td>Centro Sub-regional</td><td>Atende cidades vizinhas médias</td><td>Uberlândia, Ribeirão Preto</td></tr>
              <tr><td>Centro Local</td><td>Influência restrita ao município</td><td>Pequenos municípios</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Teoria das localidades centrais</span>
        <h2>4. Teoria das localidades centrais e influência urbana</h2>
        <p>
          A Teoria das Localidades Centrais, elaborada pelo geógrafo alemão Walter
          Christaller nos anos 1930, explica a organização espacial das cidades em
          uma rede hierárquica. Segundo Christaller, as cidades oferecem bens e
          serviços para a região ao redor (hinterland). Bens de baixo limiar de
          demanda (supermercado, farmácia) são encontrados em cidades pequenas.
          Bens de alto limiar (hospital especializado, universidade) concentram-se
          nas cidades maiores, que têm área de influência mais ampla.
        </p>
        <p>
          Essa lógica explica por que as pessoas de cidades pequenas viajam até
          centros maiores para acessar certos serviços: especialistas médicos,
          cursos universitários, shoppings, tribunais. No Brasil, essa hierarquia
          é visível na diferença entre as capitais estaduais (que concentram
          serviços especializados) e os pequenos municípios do interior (que
          dependem dessas capitais para serviços de maior complexidade).
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cidade global</span>
        <h2>5. Cidades globais e São Paulo no mundo</h2>
        <p>
          Com a globalização, algumas cidades assumiram papel de comando na economia
          mundial, independentemente do país em que se localizam. São as "cidades
          globais" (conceito da socióloga Saskia Sassen): concentram sedes de grandes
          corporações multinacionais, bolsas de valores, escritórios de serviços
          financeiros e jurídicos, mídia internacional e fluxos de capital global.
          Nova York, Londres e Tóquio são os exemplos mais citados.
        </p>
        <p>
          São Paulo é a principal cidade global da América do Sul. Abriga sedes de
          grandes empresas nacionais e multinacionais, a B3 (bolsa de valores), a
          maior concentração de serviços especializados do Brasil (advocacia, finanças,
          consultoria, tecnologia) e é o principal hub de transporte aéreo da América
          Latina. Sua articulação com a economia global a diferencia das demais cidades
          brasileiras e a posiciona em rankings internacionais de cidades globais.
        </p>
      </section>

      {/* ── SVG 2: Rede urbana ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="280" fill="#fefce8" rx="8"/>
          <text x="300" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
            Hierarquia da Rede Urbana Brasileira
          </text>
          {/* Topo: Metrópole */}
          <rect x="210" y="35" width="180" height="40" fill="#1e40af" rx="6"/>
          <text x="300" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">METRÓPOLE</text>
          <text x="300" y="67" textAnchor="middle" fontSize="10" fill="#bfdbfe">São Paulo • Rio • Brasília</text>
          {/* Linhas para capitais regionais */}
          <line x1="240" y1="75" x2="140" y2="115" stroke="#94a3b8" strokeWidth="1.5"/>
          <line x1="360" y1="75" x2="460" y2="115" stroke="#94a3b8" strokeWidth="1.5"/>
          <line x1="300" y1="75" x2="300" y2="115" stroke="#94a3b8" strokeWidth="1.5"/>
          {/* Capitais regionais */}
          <rect x="60" y="115" width="160" height="38" fill="#1d4ed8" rx="5"/>
          <text x="140" y="130" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">Capital Regional A</text>
          <text x="140" y="144" textAnchor="middle" fontSize="9" fill="#bfdbfe">Manaus, Fortaleza, Curitiba</text>
          <rect x="220" y="115" width="160" height="38" fill="#2563eb" rx="5"/>
          <text x="300" y="130" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">Capital Regional B</text>
          <text x="300" y="144" textAnchor="middle" fontSize="9" fill="#bfdbfe">Maceió, Natal, João Pessoa</text>
          <rect x="380" y="115" width="160" height="38" fill="#3b82f6" rx="5"/>
          <text x="460" y="130" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">Capital Regional C</text>
          <text x="460" y="144" textAnchor="middle" fontSize="9" fill="#bfdbfe">Outras capitais estaduais</text>
          {/* Linhas para centros sub-regionais */}
          <line x1="140" y1="153" x2="100" y2="190" stroke="#94a3b8" strokeWidth="1"/>
          <line x1="300" y1="153" x2="300" y2="190" stroke="#94a3b8" strokeWidth="1"/>
          <line x1="460" y1="153" x2="500" y2="190" stroke="#94a3b8" strokeWidth="1"/>
          {/* Centros sub-regionais */}
          <rect x="30" y="190" width="140" height="35" fill="#60a5fa" rx="5"/>
          <text x="100" y="205" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">Centro Sub-regional</text>
          <text x="100" y="218" textAnchor="middle" fontSize="9" fill="white">Uberlândia, Ribeirão Preto</text>
          <rect x="220" y="190" width="160" height="35" fill="#93c5fd" rx="5"/>
          <text x="300" y="205" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e3a8a">Centro de Zona</text>
          <text x="300" y="218" textAnchor="middle" fontSize="9" fill="#1e3a8a">Cidades médias regionais</text>
          <rect x="430" y="190" width="140" height="35" fill="#bfdbfe" rx="5"/>
          <text x="500" y="205" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e3a8a">Centro Local</text>
          <text x="500" y="218" textAnchor="middle" fontSize="9" fill="#1e3a8a">Pequenos municípios</text>
          {/* Legenda */}
          <text x="300" y="258" textAnchor="middle" fontSize="10" fill="#64748b">Quanto mais alto na hierarquia, maior a área de influência e a diversidade de serviços</text>
        </svg>
        <figcaption>Hierarquia da rede urbana brasileira segundo o REGIC/IBGE: as metrópoles no topo exercem influência sobre toda a rede, que se desdobra em capitais regionais, centros sub-regionais e centros locais.</figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Novos arranjos territoriais</span>
        <h2>6. Novas centralidades e cidades médias</h2>
        <p>
          A globalização e a reestruturação produtiva criaram novas centralidades
          urbanas no Brasil. Cidades que antes eram secundárias tornaram-se polos
          dinâmicos em razão do agronegócio (Rondonópolis, Sorriso no MT), da
          indústria de alta tecnologia (São José dos Campos, Campinas), do turismo
          (Gramado, Bonito) ou de serviços especializados (Uberlândia).
        </p>
        <p>
          As cidades médias (100 mil a 500 mil habitantes) cresceram mais rapidamente
          que as metrópoles nas últimas duas décadas. Oferecem qualidade de vida, menor
          custo, menores congestionamentos e, em muitos casos, mercados de trabalho
          dinâmicos. Esse movimento de desconcentração relativa do crescimento urbano
          é uma das principais tendências da geografia urbana brasileira contemporânea.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cidades inteligentes</span>
        <h2>7. O conceito de cidade inteligente (smart city)</h2>
        <p>
          O conceito de "cidade inteligente" (smart city) refere-se ao uso de
          tecnologias digitais — Internet das Coisas (IoT), Big Data, Inteligência
          Artificial, sensores urbanos — para otimizar serviços públicos, melhorar
          a mobilidade, reduzir o consumo de energia e aumentar a qualidade de vida
          dos habitantes. A ideia é que as cidades se tornem mais eficientes,
          sustentáveis e responsivas às necessidades dos cidadãos por meio de dados
          em tempo real.
        </p>
        <p>
          Os exemplos mais citados internacionalmente são Singapura, Amsterdã,
          Barcelona e Copenhague. No Brasil, Curitiba é historicamente reconhecida
          por seu planejamento urbano inovador (BRT, gestão de resíduos, parques
          lineares). Mais recentemente, cidades como São Paulo e Rio de Janeiro
          implementaram centros de operações integradas que monitoram câmeras,
          trânsito, chuvas e serviços públicos em tempo real.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tecnologia e desigualdade</span>
        <h2>8. Tecnologia urbana e exclusão digital</h2>
        <p>
          O entusiasmo com as smart cities deve ser temperado por uma análise crítica.
          A implementação de tecnologias nas cidades pode aprofundar desigualdades
          se os benefícios concentrarem-se nas áreas já privilegiadas. Câmeras de
          reconhecimento facial, sistemas de monitoramento e coleta de dados levantam
          questões sobre privacidade, vigilância e discriminação algorítmica,
          especialmente em relação a populações vulneráveis.
        </p>
        <p>
          Além disso, o acesso desigual à internet e aos dispositivos digitais —
          a chamada "exclusão digital" — significa que não todos os cidadãos podem
          se beneficiar igualmente das soluções tecnológicas. No Brasil, segundo
          dados da PNAD Contínua, ainda existem dezenas de milhões de pessoas sem
          acesso à internet de qualidade, concentradas nas periferias urbanas e
          nas áreas rurais mais pobres.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Características das cidades inteligentes: potencialidades e riscos</caption>
            <thead>
              <tr>
                <th>Tecnologia</th>
                <th>Potencialidade</th>
                <th>Risco / limitação</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Sensores de trânsito IoT</td><td>Reduzir congestionamentos</td><td>Custo alto, cobertura parcial</td></tr>
              <tr><td>Big Data de saúde</td><td>Prever surtos epidêmicos</td><td>Vazamento e uso indevido de dados</td></tr>
              <tr><td>Iluminação LED inteligente</td><td>Reduzir consumo de energia</td><td>Exclusão de áreas periféricas</td></tr>
              <tr><td>Reconhecimento facial</td><td>Segurança pública</td><td>Discriminação racial, vigilância</td></tr>
              <tr><td>Aplicativos de serviços</td><td>Acesso facilitado ao Estado</td><td>Exclusão digital dos sem smartphone</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sustentabilidade urbana</span>
        <h2>9. Cidades sustentáveis e Agenda 2030</h2>
        <p>
          O Objetivo de Desenvolvimento Sustentável 11 (ODS 11) da ONU estabelece a
          meta de "tornar as cidades e os assentamentos humanos inclusivos, seguros,
          resilientes e sustentáveis" até 2030. Isso implica garantir acesso a moradia
          adequada, transporte público de qualidade, espaços públicos verdes e seguros,
          reduzir desastres naturais urbanos e diminuir o impacto ambiental das cidades.
        </p>
        <p>
          As cidades são responsáveis por cerca de 70% das emissões globais de CO2,
          principalmente pelo consumo de energia em edificações e transportes. As
          soluções passam por: construções com certificação energética, expansão do
          transporte público elétrico, criação de corredores verdes, telhados e
          paredes verdes, aproveitamento de energia solar e gestão eficiente de
          resíduos. No Brasil, Curitiba e Florianópolis são referências em algumas
          dessas práticas.
        </p>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Planejamento urbano</span>
        <h2>10. Planejamento metropolitano e governança urbana</h2>
        <p>
          Um dos maiores desafios das regiões metropolitanas é a governança: como
          gerir conjuntamente uma área que envolve dezenas de municípios com governos
          independentes? Questões como transporte, saneamento, habitação e gestão
          ambiental transcendem os limites municipais, mas a legislação brasileira
          tardou em criar instrumentos efetivos de cooperação metropolitana.
        </p>
        <p>
          O Estatuto da Metrópole (Lei 13.089/2015) foi aprovado para estabelecer
          diretrizes para o planejamento, a gestão e a execução de funções públicas
          de interesse comum nas regiões metropolitanas. Ele prevê a criação de
          estruturas de governança interfederativa e a elaboração de Planos de
          Desenvolvimento Urbano Integrado (PDUI). Na prática, a implementação
          ainda enfrenta resistências políticas e limitações de capacidade técnica
          e financeira dos municípios.
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
              A conurbação é um fenômeno característico das regiões metropolitanas.
              Qual das alternativas define corretamente esse processo?
            </p>
          }
          options={[
            { letter: "a", text: "Processo de esvaziamento populacional de cidades pequenas em direção a centros maiores" },
            { letter: "b", text: "Fusão política de dois municípios, com a criação de um novo ente federativo" },
            { letter: "c", text: "Crescimento de duas ou mais cidades até que suas áreas urbanas se unam fisicamente", correct: true },
            { letter: "d", text: "Processo de criação de novas cidades em áreas rurais por meio de colonização planejada" },
            { letter: "e", text: "Transferência de indústrias do centro para a periferia das metrópoles" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>c</strong>. Conurbação é o processo
              pelo qual duas ou mais cidades crescem tanto que suas áreas urbanas
              se unem fisicamente, formando um contínuo urbano, sem solução de
              continuidade. Os limites políticos dos municípios permanecem, mas o
              tecido urbano é contínuo. Exemplos no Brasil: São Paulo e municípios
              do ABC; Recife e Olinda. As demais opções descrevem fenômenos distintos
              (migração, fusão política, colonização, desconcentração industrial).
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              A hierarquia urbana brasileira, estudada pelo IBGE no REGIC, organiza
              as cidades em diferentes níveis. Qual é o principal critério para
              determinar a posição de uma cidade nessa hierarquia?
            </p>
          }
          options={[
            { letter: "a", text: "O número de habitantes do município" },
            { letter: "b", text: "A extensão territorial do município" },
            { letter: "c", text: "A quantidade e diversidade de serviços oferecidos para si e para outros municípios", correct: true },
            { letter: "d", text: "A localização geográfica da cidade em relação ao litoral" },
            { letter: "e", text: "O PIB per capita dos moradores do município" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>c</strong>. A posição de uma cidade
              na hierarquia urbana é determinada principalmente pela variedade e
              nível de especialização dos serviços que ela oferece, tanto para seus
              próprios moradores quanto para a população de cidades menores ao redor.
              Cidades que oferecem serviços especializados (universidades, hospitais
              de alta complexidade, serviços financeiros) para uma ampla região
              ocupam posições mais altas. O tamanho populacional (a) e o PIB (e)
              são consequências, não critério definidor da hierarquia.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              (ENEM adaptado) O conceito de "cidade global" foi desenvolvido para
              descrever metrópoles que desempenham funções de comando na economia
              mundial. Qual das seguintes características define uma cidade global?
            </p>
          }
          options={[
            { letter: "a", text: "Alto volume de produção agrícola e exportação de commodities" },
            { letter: "b", text: "Concentração de turismo cultural e patrimônio histórico tombado" },
            { letter: "c", text: "Concentração de sedes corporativas, serviços financeiros e fluxos de capital global", correct: true },
            { letter: "d", text: "Grande extensão territorial e densidade demográfica elevada" },
            { letter: "e", text: "Localização em países desenvolvidos com alta renda per capita" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>c</strong>. Segundo a socióloga Saskia
              Sassen, as cidades globais caracterizam-se pela concentração de sedes
              de grandes corporações multinacionais, serviços financeiros e jurídicos
              especializados, bolsas de valores e fluxos internacionais de capital.
              São nós de controle da economia globalizada. São Paulo, por exemplo,
              é uma cidade global da América do Sul. As demais opções descrevem
              características importantes, mas não são o que define uma cidade global:
              o agronegócio (a) é função do espaço rural; turismo (b) e extensão (d)
              não definem cidades globais; e existem cidades globais em países
              emergentes (e).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              As cidades inteligentes (smart cities) são apresentadas como solução
              para os problemas urbanos contemporâneos. Uma crítica pertinente a esse
              modelo é que:
            </p>
          }
          options={[
            { letter: "a", text: "O uso de tecnologia digital reduz automaticamente as emissões de carbono das cidades" },
            { letter: "b", text: "A implementação de smart cities beneficia igualmente todos os cidadãos, independentemente da renda" },
            { letter: "c", text: "A exclusão digital pode fazer com que os benefícios tecnológicos se concentrem nas áreas já privilegiadas", correct: true },
            { letter: "d", text: "O reconhecimento facial é uma tecnologia ineficiente que não apresenta riscos de privacidade" },
            { letter: "e", text: "As cidades inteligentes são adequadas apenas para países desenvolvidos, sem aplicação no Brasil" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>c</strong>. Uma crítica central ao
              modelo de smart city é que a exclusão digital — falta de acesso à
              internet e dispositivos digitais — pode concentrar os benefícios das
              tecnologias inteligentes nas áreas e populações já favorecidas,
              aprofundando desigualdades em vez de reduzi-las. A tecnologia não
              reduz emissões automaticamente (a), seus benefícios não são automáticos
              para todos (b), o reconhecimento facial apresenta riscos reais (d) e
              o Brasil já implementa iniciativas de smart city (e).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              O Estatuto da Metrópole (Lei 13.089/2015) foi aprovado para enfrentar
              os desafios da governança metropolitana no Brasil. Sobre esse instrumento
              legal, é correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "Criou um quarto ente federativo — a região metropolitana — com poder de tributar e legislar" },
            { letter: "b", text: "Eliminou a autonomia dos municípios que integram regiões metropolitanas" },
            { letter: "c", text: "Estabeleceu diretrizes para a gestão compartilhada de funções de interesse comum entre municípios metropolitanos", correct: true },
            { letter: "d", text: "Transferiu para o governo federal o controle do planejamento de todas as regiões metropolitanas" },
            { letter: "e", text: "Proibiu a criação de novas regiões metropolitanas após sua promulgação" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>c</strong>. O Estatuto da Metrópole
              estabeleceu diretrizes para o planejamento e a gestão compartilhada
              de funções públicas de interesse comum (como transporte, saneamento e
              habitação) nas regiões metropolitanas. Não criou novo ente federativo
              (a — as RMs são unidades administrativas, não entes federativos com
              poder de tributar), não eliminou a autonomia municipal (b), não
              centralizou o controle federal (d) e não proibiu novas RMs (e).
              O instrumento central criado é a governança interfederativa e o PDUI.
            </p>
          }
        />
      </section>
    </article>
  );
}
