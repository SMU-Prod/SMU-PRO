"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap23Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 23</span>
          <h1>Urbanização brasileira</h1>
          <p>
            A urbanização brasileira é um dos fenômenos mais intensos e acelerados do
            século XX. Em poucas décadas, o Brasil passou de um país predominantemente
            rural para uma das nações mais urbanizadas do mundo, com mais de 87% da
            população vivendo em cidades. Esse processo trouxe transformações profundas
            no território, na economia e na vida cotidiana dos brasileiros, mas também
            gerou enormes desafios sociais, ambientais e espaciais que ainda precisam
            ser enfrentados.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto histórico</span>
        <h2>1. O processo de urbanização no Brasil</h2>
        <p>
          A urbanização brasileira ganhou impulso a partir da década de 1930, com a
          política de industrialização promovida pelo governo Vargas. A criação de
          indústrias de base e a geração de empregos nas cidades atraíram enormes
          contingentes populacionais do campo. Antes disso, a economia era
          essencialmente agrária e exportadora, concentrada em ciclos econômicos como
          o da cana-de-açúcar, do ouro e do café.
        </p>
        <p>
          O salto mais dramático ocorreu entre 1950 e 1980, período em que a população
          urbana brasileira cresceu de 36% para 67%. A industrialização acelerada,
          especialmente no Sudeste, criou um poderoso efeito de atração (fatores
          pull), enquanto a mecanização do campo e a concentração fundiária expulsavam
          trabalhadores rurais (fatores push). Esse fluxo migratório campo-cidade foi
          responsável pela formação das grandes metrópoles brasileiras.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Evolução da população urbana no Brasil (1940–2020)</caption>
            <thead>
              <tr>
                <th>Ano</th>
                <th>Pop. urbana (%)</th>
                <th>Pop. rural (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1940</td><td>31%</td><td>69%</td></tr>
              <tr><td>1960</td><td>45%</td><td>55%</td></tr>
              <tr><td>1980</td><td>67%</td><td>33%</td></tr>
              <tr><td>2000</td><td>81%</td><td>19%</td></tr>
              <tr><td>2020</td><td>87%</td><td>13%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SVG 1 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
          {/* Gráfico de barras: urbanização 1940-2020 */}
          <rect x="0" y="0" width="600" height="260" fill="#f8fafc" rx="8"/>
          <text x="300" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
            Evolução da Urbanização Brasileira (%)
          </text>
          {/* Eixo Y */}
          <line x1="60" y1="40" x2="60" y2="210" stroke="#94a3b8" strokeWidth="1.5"/>
          {/* Eixo X */}
          <line x1="60" y1="210" x2="560" y2="210" stroke="#94a3b8" strokeWidth="1.5"/>
          {/* Barras urbanas */}
          {/* 1940: 31% */}
          <rect x="80" y="147" width="40" height="63" fill="#3b82f6" rx="3"/>
          <text x="100" y="145" textAnchor="middle" fontSize="11" fill="#1e40af">31%</text>
          <text x="100" y="226" textAnchor="middle" fontSize="11" fill="#475569">1940</text>
          {/* 1960: 45% */}
          <rect x="175" y="119" width="40" height="91" fill="#3b82f6" rx="3"/>
          <text x="195" y="117" textAnchor="middle" fontSize="11" fill="#1e40af">45%</text>
          <text x="195" y="226" textAnchor="middle" fontSize="11" fill="#475569">1960</text>
          {/* 1980: 67% */}
          <rect x="270" y="77" width="40" height="133" fill="#3b82f6" rx="3"/>
          <text x="290" y="75" textAnchor="middle" fontSize="11" fill="#1e40af">67%</text>
          <text x="290" y="226" textAnchor="middle" fontSize="11" fill="#475569">1980</text>
          {/* 2000: 81% */}
          <rect x="365" y="49" width="40" height="161" fill="#3b82f6" rx="3"/>
          <text x="385" y="47" textAnchor="middle" fontSize="11" fill="#1e40af">81%</text>
          <text x="385" y="226" textAnchor="middle" fontSize="11" fill="#475569">2000</text>
          {/* 2020: 87% */}
          <rect x="460" y="37" width="40" height="173" fill="#1d4ed8" rx="3"/>
          <text x="480" y="35" textAnchor="middle" fontSize="11" fill="#1e40af">87%</text>
          <text x="480" y="226" textAnchor="middle" fontSize="11" fill="#475569">2020</text>
        </svg>
        <figcaption>Crescimento da população urbana brasileira entre 1940 e 2020 — um dos processos de urbanização mais rápidos do mundo.</figcaption>
      </figure>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fatores e causas</span>
        <h2>2. Fatores que impulsionaram a urbanização</h2>
        <p>
          A urbanização brasileira foi resultado da combinação de fatores de atração
          (nas cidades) e fatores de expulsão (no campo). Nas cidades, a oferta de
          empregos industriais, serviços, infraestrutura (hospitais, escolas) e
          melhores salários atraíam a população rural. No campo, a concentração
          fundiária, a mecanização agrícola, as secas (especialmente no Nordeste) e
          a falta de políticas agrícolas efetivas expulsavam trabalhadores.
        </p>
        <p>
          A construção de Brasília (1960) representou um marco simbólico e prático
          desse processo: além de ser um projeto urbanístico audacioso, atraiu
          migrantes de todo o Brasil e estimulou o crescimento de cidades no
          Centro-Oeste. O "milagre econômico" (1968–1973) acelerou ainda mais a
          industrialização e o crescimento urbano, especialmente no eixo
          São Paulo–Rio de Janeiro.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Fatores push e pull na urbanização brasileira</caption>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Fator</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Push (expulsão do campo)</td><td>Econômico</td><td>Mecanização agrícola, latifúndio</td></tr>
              <tr><td>Push (expulsão do campo)</td><td>Ambiental</td><td>Secas no Nordeste, geadas no Sul</td></tr>
              <tr><td>Push (expulsão do campo)</td><td>Social</td><td>Falta de escolas e hospitais</td></tr>
              <tr><td>Pull (atração urbana)</td><td>Econômico</td><td>Empregos industriais, salários maiores</td></tr>
              <tr><td>Pull (atração urbana)</td><td>Social</td><td>Acesso à saúde, educação, cultura</td></tr>
              <tr><td>Pull (atração urbana)</td><td>Infraestrutura</td><td>Transporte, energia, saneamento</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Distribuição regional</span>
        <h2>3. Urbanização desigual entre as regiões</h2>
        <p>
          A urbanização no Brasil não ocorreu de forma homogênea entre as regiões.
          O Sudeste liderou o processo, especialmente São Paulo, que se tornou a maior
          metrópole da América Latina. O Sul também apresentou urbanização elevada,
          impulsionada pela industrialização e agroindústria. O Norte e o Nordeste
          urbanizaram-se mais lentamente, embora o Nordeste possua hoje grandes
          centros urbanos como Fortaleza, Recife e Salvador.
        </p>
        <p>
          Curiosamente, a Região Norte tem alto índice de urbanização (cerca de 73%),
          mas isso se deve em parte à concentração populacional em poucas cidades
          (como Manaus e Belém) em meio a uma vasta área florestal. O Centro-Oeste
          cresceu aceleradamente nas últimas décadas com a expansão do agronegócio
          e o crescimento de Brasília e Goiânia.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Taxa de urbanização por região brasileira (2022)</caption>
            <thead>
              <tr>
                <th>Região</th>
                <th>Taxa de urbanização</th>
                <th>Principal metrópole</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Sudeste</td><td>93%</td><td>São Paulo</td></tr>
              <tr><td>Sul</td><td>87%</td><td>Curitiba / Porto Alegre</td></tr>
              <tr><td>Centro-Oeste</td><td>91%</td><td>Brasília / Goiânia</td></tr>
              <tr><td>Nordeste</td><td>77%</td><td>Fortaleza / Recife / Salvador</td></tr>
              <tr><td>Norte</td><td>73%</td><td>Manaus / Belém</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SVG 2 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="300" fill="#f0f9ff" rx="8"/>
          <text x="300" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
            Fatores Push e Pull da Urbanização
          </text>
          {/* Campo - lado esquerdo */}
          <rect x="20" y="50" width="180" height="220" fill="#dcfce7" rx="8" stroke="#16a34a" strokeWidth="1.5"/>
          <text x="110" y="75" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#15803d">CAMPO</text>
          <text x="110" y="100" textAnchor="middle" fontSize="11" fill="#166534">❌ Mecanização</text>
          <text x="110" y="120" textAnchor="middle" fontSize="11" fill="#166534">❌ Latifúndio</text>
          <text x="110" y="140" textAnchor="middle" fontSize="11" fill="#166534">❌ Seca / clima</text>
          <text x="110" y="160" textAnchor="middle" fontSize="11" fill="#166534">❌ Falta de escola</text>
          <text x="110" y="180" textAnchor="middle" fontSize="11" fill="#166534">❌ Falta hospital</text>
          <text x="110" y="210" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#15803d">FATORES PUSH</text>
          <text x="110" y="228" textAnchor="middle" fontSize="11" fill="#15803d">(expulsão)</text>
          {/* Setas */}
          <line x1="200" y1="160" x2="390" y2="160" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)"/>
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b"/>
            </marker>
          </defs>
          <text x="295" y="150" textAnchor="middle" fontSize="11" fill="#b45309">Migração</text>
          <text x="295" y="165" textAnchor="middle" fontSize="11" fill="#b45309">campo-cidade</text>
          {/* Cidade - lado direito */}
          <rect x="395" y="50" width="185" height="220" fill="#dbeafe" rx="8" stroke="#2563eb" strokeWidth="1.5"/>
          <text x="487" y="75" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">CIDADE</text>
          <text x="487" y="100" textAnchor="middle" fontSize="11" fill="#1e40af">✓ Empregos</text>
          <text x="487" y="120" textAnchor="middle" fontSize="11" fill="#1e40af">✓ Salários</text>
          <text x="487" y="140" textAnchor="middle" fontSize="11" fill="#1e40af">✓ Hospitais</text>
          <text x="487" y="160" textAnchor="middle" fontSize="11" fill="#1e40af">✓ Escolas</text>
          <text x="487" y="180" textAnchor="middle" fontSize="11" fill="#1e40af">✓ Infraestrutura</text>
          <text x="487" y="210" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1d4ed8">FATORES PULL</text>
          <text x="487" y="228" textAnchor="middle" fontSize="11" fill="#1d4ed8">(atração)</text>
        </svg>
        <figcaption>Diagrama dos fatores push (expulsão do campo) e pull (atração urbana) que explicam a intensa migração rural-urbana no Brasil.</figcaption>
      </figure>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Industrialização</span>
        <h2>4. Industrialização e concentração espacial</h2>
        <p>
          O processo de industrialização brasileiro foi espacialmente concentrado.
          A região Sudeste, especialmente o estado de São Paulo, concentrou a maior
          parte das indústrias de transformação, criando o que os geógrafos chamam de
          "Região Concentrada" — o triângulo formado por São Paulo, Rio de Janeiro e
          Belo Horizonte, que historicamente abrigou a maior parte do PIB industrial
          brasileiro.
        </p>
        <p>
          A partir dos anos 1970 e 1980, iniciou-se um processo de desconcentração
          industrial relativa, com a implantação de indústrias em cidades médias do
          interior de São Paulo, do Sul do Brasil e, mais recentemente, em polos
          industriais do Nordeste (como o polo petroquímico de Camaçari, na Bahia).
          Esse movimento foi impulsionado pelos incentivos fiscais, menor custo de
          mão de obra e melhoria da infraestrutura logística.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Macrocefalia urbana</span>
        <h2>5. Macrocefalia urbana e primazia de São Paulo</h2>
        <p>
          O Brasil apresenta um padrão de macrocefalia urbana, caracterizado pela
          existência de uma ou poucas cidades muito grandes que concentram parcelas
          desproporcionais da população e da atividade econômica. São Paulo, com cerca
          de 12 milhões de habitantes no município e mais de 22 milhões na região
          metropolitana, é o exemplo mais evidente.
        </p>
        <p>
          Essa concentração em poucos polos cria desequilíbrios regionais importantes.
          Enquanto São Paulo concentra PIB, serviços especializados e infraestrutura
          de alto padrão, milhares de pequenos municípios brasileiros (com menos de
          20 mil habitantes) apresentam baixo dinamismo econômico e dependem de
          transferências governamentais para funcionar. Isso reforça o ciclo de
          migração para as grandes cidades.
        </p>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Urbanização e migração</span>
        <h2>6. Migrações internas e urbanização</h2>
        <p>
          As migrações internas foram o principal motor da urbanização brasileira.
          Os fluxos mais expressivos ocorreram do Nordeste para o Sudeste, especialmente
          para São Paulo e Rio de Janeiro, ao longo das décadas de 1950 a 1980.
          Estima-se que entre 1950 e 1980 mais de 30 milhões de pessoas migraram
          do campo para as cidades ou de uma região para outra.
        </p>
        <p>
          A partir dos anos 1990, os padrões migratórios se diversificaram. Emergiram
          fluxos em direção ao Centro-Oeste (atraídos pelo agronegócio), ao Norte
          (garimpo, projetos de infraestrutura) e, mais recentemente, de retorno ao
          Nordeste, impulsionado pelo crescimento de polos industriais e de serviços
          em cidades como Fortaleza e Recife. A migração de brasileiros ao exterior
          (emigração) também ganhou relevância, especialmente nos anos 1980 e 2000.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cidades médias</span>
        <h2>7. O papel das cidades médias</h2>
        <p>
          As cidades médias (geralmente com população entre 100 mil e 500 mil
          habitantes) ganharam importância crescente na rede urbana brasileira.
          Elas funcionam como centros regionais que oferecem serviços de saúde,
          educação, comércio e indústria para as cidades menores do entorno.
          Exemplos: Ribeirão Preto (SP), Uberlândia (MG), Feira de Santana (BA),
          Joinville (SC) e Maringá (PR).
        </p>
        <p>
          O crescimento das cidades médias tem sido mais rápido do que o das
          metrópoles nas últimas décadas, sinalizando uma certa desconcentração do
          crescimento urbano. Essas cidades oferecem melhor qualidade de vida,
          menor custo de habitação e, em muitos casos, oportunidades econômicas
          comparáveis às das grandes capitais, atraindo empresas e migrantes que
          antes optariam pelas metrópoles.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Consequências sociais</span>
        <h2>8. Consequências da urbanização acelerada</h2>
        <p>
          A urbanização acelerada produziu tanto resultados positivos quanto negativos.
          Entre os positivos, destacam-se: maior acesso à educação e saúde, aumento
          da esperança de vida, queda da mortalidade infantil, acesso a bens de consumo
          e serviços culturais. A concentração urbana também favorece a inovação
          tecnológica e o empreendedorismo.
        </p>
        <p>
          Entre os problemas, sobressaem: déficit habitacional (estimado em cerca de
          8 milhões de moradias), crescimento de favelas e ocupações irregulares,
          saturação do sistema de transporte público, poluição do ar e dos corpos
          d'água, violência urbana, desemprego estrutural e carência de saneamento
          básico nas periferias. Esses desafios são aprofundados pela concentração
          de renda e pela segregação socioespacial.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Consequências positivas e negativas da urbanização acelerada</caption>
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Consequência positiva</th>
                <th>Consequência negativa</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Saúde</td><td>Acesso a hospitais e vacinas</td><td>Doenças respiratórias / stress</td></tr>
              <tr><td>Educação</td><td>Mais escolas e universidades</td><td>Superlotação, evasão escolar</td></tr>
              <tr><td>Habitação</td><td>Oferta de moradias formais</td><td>Favelas, déficit habitacional</td></tr>
              <tr><td>Trabalho</td><td>Empregos industriais e serviços</td><td>Desemprego, informalidade</td></tr>
              <tr><td>Ambiente</td><td>Eficiência energética coletiva</td><td>Poluição, ilhas de calor</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Periferização</span>
        <h2>9. Periferização e favelização</h2>
        <p>
          Um traço marcante da urbanização brasileira é a periferização: o crescimento
          das cidades para as bordas, onde o solo é mais barato, mas a infraestrutura
          é precária. Migrantes pobres, sem condições de pagar aluguel ou financiar
          imóvel nas áreas centrais, instalaram-se em periferias distantes, desprovidas
          de serviços essenciais, e nas favelas — aglomerados de habitações precárias
          em encostas, beiras de rios e outros terrenos subutilizados.
        </p>
        <p>
          As favelas surgiram no Rio de Janeiro ainda no final do século XIX (Morro
          da Providência, 1897) e se espalharam por todo o Brasil ao longo do século
          XX. Hoje, cerca de 13 milhões de brasileiros vivem em assentamentos
          precários, segundo dados do IBGE. A Rocinha, no Rio de Janeiro, é
          considerada a maior favela da América Latina, com estimativas de 70 mil
          a 100 mil moradores.
        </p>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Perspectivas atuais</span>
        <h2>10. Urbanização contemporânea e novos desafios</h2>
        <p>
          No século XXI, a urbanização brasileira entrou em uma nova fase. O ritmo de
          crescimento das grandes metrópoles desacelerou, mas surgem novos desafios:
          envelhecimento populacional nas cidades, expansão das periferias consolidadas,
          gentrificação em áreas centrais, impactos das mudanças climáticas (enchentes,
          ondas de calor) e a necessidade de adaptar as cidades à economia digital.
        </p>
        <p>
          Políticas habitacionais como o Minha Casa Minha Vida (2009) tentaram
          enfrentar o déficit habitacional, mas criaram novos problemas ao construir
          conjuntos habitacionais distantes dos centros de emprego e serviços. O
          desafio é construir cidades mais compactas, sustentáveis e inclusivas, que
          aproveitem as vantagens da concentração urbana sem reproduzir suas
          desigualdades históricas.
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
              Entre 1950 e 1980, a população urbana brasileira saltou de 36% para 67%.
              Esse crescimento acelerado está diretamente relacionado a qual processo econômico?
            </p>
          }
          options={[
            { letter: "a", text: "Expansão da fronteira agrícola e exportação de commodities" },
            { letter: "b", text: "Industrialização e criação de empregos nas cidades" },
            { letter: "c", text: "Crescimento do setor pesqueiro no litoral brasileiro" },
            { letter: "d", text: "Aumento das exportações de minério de ferro" },
            { letter: "e", text: "Declínio da produção cafeeira e abandono do campo" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>b</strong>. O grande salto na urbanização
              brasileira entre 1950 e 1980 foi impulsionado pela industrialização
              acelerada, especialmente no Sudeste. A criação de empregos industriais
              nas cidades atraiu milhões de trabalhadores rurais, configurando um
              intenso fluxo migratório campo-cidade. A expansão do café (e) foi um
              fator anterior; as demais opções não se relacionam diretamente com a
              magnitude do processo de urbanização desse período.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              Os fatores "push" e "pull" explicam as migrações do campo para a cidade.
              Qual das alternativas representa corretamente um fator push?
            </p>
          }
          options={[
            { letter: "a", text: "Oferta de empregos industriais nas cidades" },
            { letter: "b", text: "Acesso a hospitais e escolas nas áreas urbanas" },
            { letter: "c", text: "Mecanização agrícola que expulsa trabalhadores do campo" },
            { letter: "d", text: "Diversidade cultural e lazer oferecidos pelas cidades" },
            { letter: "e", text: "Salários mais elevados pagos no setor de serviços urbano" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>c</strong>. Fatores push são aqueles que
              expulsam a população do campo. A mecanização agrícola eliminou postos de
              trabalho rurais, tornando o campo economicamente inviável para muitos
              trabalhadores. As opções a, b, d e e são fatores pull — características
              das cidades que atraem migrantes, não elementos que os expulsam do campo.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              A urbanização brasileira foi espacialmente desigual. Sobre essa
              característica, analise as afirmativas:<br/>
              I. O Sudeste concentrou a industrialização e o maior crescimento urbano.<br/>
              II. A Região Norte possui baixa taxa de urbanização por sua extensão territorial.<br/>
              III. O Centro-Oeste cresceu aceleradamente com a expansão do agronegócio.<br/>
              Estão corretas:
            </p>
          }
          options={[
            { letter: "a", text: "Apenas I" },
            { letter: "b", text: "Apenas II" },
            { letter: "c", text: "I e II" },
            { letter: "d", text: "I e III", correct: true },
            { letter: "e", text: "I, II e III" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>d</strong> (I e III). O Sudeste liderou
              a industrialização e o crescimento urbano (I é correta). O Centro-Oeste
              cresceu aceleradamente com o agronegócio e Brasília (III é correta).
              Porém, a afirmativa II é falsa: a Região Norte tem taxa de urbanização
              relativamente alta (cerca de 73%), pois a população concentra-se em
              poucas cidades em meio à floresta, como Manaus e Belém.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              (ENEM adaptado) O Brasil passou de um país rural para um dos mais
              urbanizados do mundo em poucas décadas. Uma das consequências diretas
              desse processo acelerado foi:
            </p>
          }
          options={[
            { letter: "a", text: "Redução das desigualdades regionais pelo crescimento homogêneo das cidades" },
            { letter: "b", text: "Declínio definitivo da produção agrícola no país" },
            { letter: "c", text: "Surgimento de favelas e déficit habitacional nas grandes cidades", correct: true },
            { letter: "d", text: "Equilíbrio entre a oferta e a demanda por empregos urbanos" },
            { letter: "e", text: "Diminuição da violência urbana pela maior vigilância em cidades grandes" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>c</strong>. A urbanização acelerada
              foi acompanhada pela chegada de enorme contingente de migrantes pobres
              que não encontravam condições de habitar nas áreas formais das cidades.
              Isso levou ao crescimento das favelas e ao déficit habitacional, estimado
              em cerca de 8 milhões de moradias. As demais alternativas são falsas:
              a urbanização acentuou desigualdades (a), a produção agrícola cresceu
              com mecanização (b), o desemprego urbano é estrutural (d) e a violência
              tende a ser maior em grandes centros (e).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              O fenômeno da periferização urbana no Brasil está associado a um conjunto
              de fatores históricos e estruturais. Considerando esse processo, é correto
              afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "A periferização resultou da escolha voluntária das famílias por morar em áreas mais verdes e tranquilas" },
            { letter: "b", text: "O Estado sempre ofereceu habitação adequada aos migrantes, mas eles preferiram as periferias" },
            { letter: "c", text: "A especulação imobiliária e a concentração de renda forçaram a população pobre para as bordas das cidades", correct: true },
            { letter: "d", text: "A periferização ocorreu apenas nas cidades do Nordeste, por sua menor industrialização" },
            { letter: "e", text: "As favelas foram criadas por programas governamentais para acomodar migrantes temporários" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>c</strong>. A periferização é resultado
              estrutural da combinação entre especulação imobiliária (que valoriza
              terrenos centrais e os torna inacessíveis às famílias de baixa renda) e
              concentração de renda (que impede grande parcela da população de acessar
              o mercado formal de habitação). As demais opções são falsas: a mudança
              para a periferia não foi voluntária (a), o Estado historicamente falhou
              na provisão habitacional (b), a periferização ocorreu em todo o Brasil (d)
              e as favelas surgiram da necessidade, não de programas governamentais (e).
            </p>
          }
        />
      </section>
    </article>
  );
}
