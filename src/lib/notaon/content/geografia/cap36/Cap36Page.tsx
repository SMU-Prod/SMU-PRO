"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap36Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 36</span>
          <h1>Regionalização do território brasileiro</h1>
          <p>
            O Brasil é um país de dimensões continentais, com mais de 8,5 milhões de km², o que torna
            indispensável o uso de critérios de regionalização para compreender suas diferenças internas.
            Ao longo da história, o IBGE e outros órgãos propuseram diferentes formas de dividir o
            território nacional, levando em conta aspectos naturais, econômicos, sociais e culturais.
            Conhecer essas regionalizações é fundamental para entender as desigualdades regionais do
            Brasil e as políticas públicas voltadas ao desenvolvimento.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceito e critérios</span>
        <h2>1. O que é regionalização?</h2>
        <p>
          Regionalizar significa dividir um território em partes menores, chamadas regiões, com base em
          critérios previamente estabelecidos. A regionalização não é um dado natural: ela é uma
          construção humana, feita com objetivos específicos — administrativos, econômicos, estatísticos
          ou políticos. Por isso, um mesmo território pode ser regionalizado de formas diferentes,
          dependendo do critério adotado.
        </p>
        <p>
          Os principais critérios de regionalização são: <strong>naturais</strong> (clima, vegetação,
          relevo, bacias hidrográficas); <strong>econômicos</strong> (nível de desenvolvimento, PIB,
          setor produtivo dominante); <strong>sociais</strong> (IDH, acesso a serviços, densidade
          demográfica); e <strong>culturais</strong> (língua, tradições, identidade regional). O IBGE
          usa principalmente critérios naturais e socioeconômicos para dividir o Brasil.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais critérios de regionalização e exemplos</caption>
            <thead>
              <tr>
                <th>Critério</th>
                <th>Características</th>
                <th>Exemplo de aplicação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Natural</td>
                <td>Clima, relevo, vegetação, hidrografia</td>
                <td>Região Amazônica (floresta tropical)</td>
              </tr>
              <tr>
                <td>Econômico</td>
                <td>PIB, setor produtivo, renda per capita</td>
                <td>Região Concentrada (Sul e Sudeste)</td>
              </tr>
              <tr>
                <td>Social</td>
                <td>IDH, urbanização, acesso a saúde e educação</td>
                <td>Nordeste como região de baixo IDH histórico</td>
              </tr>
              <tr>
                <td>Cultural</td>
                <td>Tradições, identidade, fluxos migratórios</td>
                <td>Região gaúcha (pampa e imigração europeia)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Divisão oficial</span>
        <h2>2. As cinco grandes regiões do IBGE</h2>
        <p>
          A divisão regional mais conhecida e utilizada no Brasil é a das cinco grandes regiões do IBGE,
          criada em 1969 e revisada em 1976: Norte, Nordeste, Centro-Oeste, Sudeste e Sul. Essa divisão
          leva em conta aspectos físicos, históricos e socioeconômicos e ainda é usada oficialmente para
          fins estatísticos, eleitorais e administrativos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>As cinco regiões brasileiras: área, estados e características</caption>
            <thead>
              <tr>
                <th>Região</th>
                <th>Estados (UFs)</th>
                <th>Área aproximada</th>
                <th>Característica marcante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Norte</td>
                <td>AM, PA, AC, RO, RR, AP, TO</td>
                <td>3,85 milhões km²</td>
                <td>Maior região; dominada pela Amazônia</td>
              </tr>
              <tr>
                <td>Nordeste</td>
                <td>MA, PI, CE, RN, PB, PE, AL, SE, BA</td>
                <td>1,56 milhão km²</td>
                <td>Semi-árido; maior densidade pop. fora do Sul/Sudeste</td>
              </tr>
              <tr>
                <td>Centro-Oeste</td>
                <td>MT, MS, GO, DF</td>
                <td>1,61 milhão km²</td>
                <td>Cerrado; fronteira agrícola do agronegócio</td>
              </tr>
              <tr>
                <td>Sudeste</td>
                <td>SP, RJ, MG, ES</td>
                <td>924 mil km²</td>
                <td>Maior PIB; centro industrial e financeiro</td>
              </tr>
              <tr>
                <td>Sul</td>
                <td>PR, SC, RS</td>
                <td>577 mil km²</td>
                <td>Clima subtropical; alta industrialização e IDH</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG figura 1 — mapa esquemático das regiões */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg">
          {/* Fundo */}
          <rect width="600" height="500" fill="#f0f4f8" rx="12" />
          <text x="300" y="35" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1e293b">
            Cinco Grandes Regiões do Brasil (esquemático)
          </text>
          {/* Região Norte */}
          <rect x="80" y="60" width="220" height="160" rx="8" fill="#16a34a" opacity="0.8" />
          <text x="190" y="130" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">NORTE</text>
          <text x="190" y="152" textAnchor="middle" fontSize="12" fill="white">7 estados</text>
          <text x="190" y="168" textAnchor="middle" fontSize="11" fill="#dcfce7">3,85 mi km²</text>
          {/* Região Nordeste */}
          <rect x="310" y="60" width="200" height="160" rx="8" fill="#dc2626" opacity="0.85" />
          <text x="410" y="130" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">NORDESTE</text>
          <text x="410" y="152" textAnchor="middle" fontSize="12" fill="white">9 estados</text>
          <text x="410" y="168" textAnchor="middle" fontSize="11" fill="#fecaca">1,56 mi km²</text>
          {/* Região Centro-Oeste */}
          <rect x="80" y="235" width="200" height="120" rx="8" fill="#d97706" opacity="0.85" />
          <text x="180" y="288" textAnchor="middle" fontSize="15" fontWeight="bold" fill="white">CENTRO-OESTE</text>
          <text x="180" y="308" textAnchor="middle" fontSize="12" fill="white">3 estados + DF</text>
          <text x="180" y="324" textAnchor="middle" fontSize="11" fill="#fef3c7">1,61 mi km²</text>
          {/* Região Sudeste */}
          <rect x="295" y="235" width="215" height="120" rx="8" fill="#2563eb" opacity="0.85" />
          <text x="402" y="288" textAnchor="middle" fontSize="15" fontWeight="bold" fill="white">SUDESTE</text>
          <text x="402" y="308" textAnchor="middle" fontSize="12" fill="white">4 estados</text>
          <text x="402" y="324" textAnchor="middle" fontSize="11" fill="#dbeafe">924 mil km²</text>
          {/* Região Sul */}
          <rect x="160" y="370" width="290" height="100" rx="8" fill="#7c3aed" opacity="0.85" />
          <text x="305" y="413" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">SUL</text>
          <text x="305" y="433" textAnchor="middle" fontSize="12" fill="white">3 estados</text>
          <text x="305" y="449" textAnchor="middle" fontSize="11" fill="#ede9fe">577 mil km²</text>
          {/* Legenda */}
          <text x="300" y="488" textAnchor="middle" fontSize="10" fill="#64748b">
            Representação esquemática — sem escala real
          </text>
        </svg>
        <figcaption>Representação esquemática das cinco grandes regiões brasileiras segundo o IBGE.</figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Proposta alternativa</span>
        <h2>3. A regionalização de Pedro Pinchas Geiger (1967)</h2>
        <p>
          Antes da divisão oficial do IBGE, o geógrafo Pedro Pinchas Geiger propôs em 1967 uma
          regionalização baseada em critérios econômicos e históricos. Ele dividiu o Brasil em três
          grandes complexos regionais: <strong>Amazônia</strong>, <strong>Nordeste</strong> e
          <strong>Centro-Sul</strong>. Essa proposta buscava refletir melhor as desigualdades de
          desenvolvimento do país, agrupando o Sul, o Sudeste e o Centro-Oeste numa única região
          dinâmica e industrializada.
        </p>
        <p>
          O <strong>Centro-Sul</strong> de Geiger correspondia à área de maior industrialização e
          urbanização do Brasil, enquanto o <strong>Nordeste</strong> representava uma área marcada
          pelo subdesenvolvimento histórico e a <strong>Amazônia</strong> era vista como fronteira de
          recursos naturais a serem integrados à economia nacional.
        </p>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Regiões geoeconômicas</span>
        <h2>4. A regionalização de Milton Santos: Região Concentrada, Nordeste e Amazônia</h2>
        <p>
          O geógrafo Milton Santos, um dos maiores geógrafos brasileiros, propôs uma divisão do Brasil
          em três grandes regiões geoeconômicas, levando em conta o grau de modernização técnica e a
          inserção dos territórios no capitalismo globalizado.
        </p>
        <ul>
          <li>
            <strong>Região Concentrada:</strong> abrange Sul e Sudeste. Concentra a maior parte do PIB,
            da infraestrutura, das indústrias e da população urbana. É o espaço mais "tecnificado"
            do país.
          </li>
          <li>
            <strong>Nordeste:</strong> marcado pela pobreza histórica, seca, emigração e dependência
            de transferências federais. Nos últimos anos, passou por transformações com agronegócio
            irrigado e indústrias incentivadas.
          </li>
          <li>
            <strong>Amazônia:</strong> enorme reservatório de recursos naturais ainda em processo de
            incorporação ao mercado nacional e global, com tensões entre preservação ambiental e
            pressões econômicas.
          </li>
        </ul>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Nova proposta do IBGE</span>
        <h2>5. A regionalização de 2017: regiões intermediárias e imediatas</h2>
        <p>
          Em 2017, o IBGE apresentou uma nova proposta de divisão regional do Brasil, substituindo as
          antigas mesorregiões e microrregiões por <strong>regiões geográficas intermediárias</strong>
          e <strong>regiões geográficas imediatas</strong>. Essa divisão, mais atual, busca captar
          melhor as relações de influência das cidades sobre os espaços ao redor.
        </p>
        <p>
          As <strong>regiões imediatas</strong> são organizadas ao redor de centros urbanos que
          fornecem bens e serviços à população próxima. Já as <strong>regiões intermediárias</strong>
          são conjuntos de regiões imediatas articuladas a metrópoles regionais. Essa lógica reflete
          a teoria das redes urbanas e a hierarquia das cidades.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparação entre as divisões regionais do IBGE (antiga e nova)</caption>
            <thead>
              <tr>
                <th>Nível</th>
                <th>Divisão antiga (até 2017)</th>
                <th>Divisão nova (2017 em diante)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maior</td>
                <td>5 Grandes Regiões</td>
                <td>5 Grandes Regiões (mantidas)</td>
              </tr>
              <tr>
                <td>Intermediário</td>
                <td>137 Mesorregiões</td>
                <td>133 Regiões Geográficas Intermediárias</td>
              </tr>
              <tr>
                <td>Menor</td>
                <td>558 Microrregiões</td>
                <td>480 Regiões Geográficas Imediatas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Desigualdades regionais</span>
        <h2>6. Desigualdades entre as regiões brasileiras</h2>
        <p>
          As regiões brasileiras apresentam marcantes diferenças socioeconômicas, resultado de um
          processo histórico de desenvolvimento desigual. O Sudeste concentra cerca de 55% do PIB
          nacional, enquanto o Norte e o Nordeste somados representam menos de 20%. Essas disparidades
          se refletem em indicadores como acesso à educação, saúde, saneamento e renda.
        </p>
        <p>
          O governo federal historicamente utilizou políticas de incentivo regional para tentar
          reduzir essas desigualdades, como a criação da <strong>SUDENE</strong> (Superintendência do
          Desenvolvimento do Nordeste) em 1959 e da <strong>SUDAM</strong> (Superintendência do
          Desenvolvimento da Amazônia). Apesar de alguns avanços, as disparidades persistem.
        </p>
      </section>

      {/* SVG figura 2 — gráfico comparativo de PIB */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="320" fill="#f8fafc" rx="12" />
          <text x="300" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e293b">
            Participação das Regiões no PIB Brasileiro (%)
          </text>
          {/* Barras */}
          {/* Sudeste ~55% */}
          <rect x="60" y="60" width="110" height="165" fill="#2563eb" rx="4" />
          <text x="115" y="245" textAnchor="middle" fontSize="12" fill="#1e293b">Sudeste</text>
          <text x="115" y="52" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2563eb">55%</text>
          {/* Sul ~17% */}
          <rect x="190" y="160" width="110" height="65" fill="#7c3aed" rx="4" />
          <text x="245" y="245" textAnchor="middle" fontSize="12" fill="#1e293b">Sul</text>
          <text x="245" y="152" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#7c3aed">17%</text>
          {/* Nordeste ~14% */}
          <rect x="320" y="183" width="110" height="42" fill="#dc2626" rx="4" />
          <text x="375" y="245" textAnchor="middle" fontSize="12" fill="#1e293b">Nordeste</text>
          <text x="375" y="175" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">14%</text>
          {/* Centro-Oeste ~10% */}
          <rect x="450" y="195" width="80" height="30" fill="#d97706" rx="4" />
          <text x="490" y="245" textAnchor="middle" fontSize="12" fill="#1e293b">C-Oeste</text>
          <text x="490" y="187" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#d97706">10%</text>
          {/* Norte ~5% */}
          <rect x="548" y="210" width="35" height="15" fill="#16a34a" rx="4" />
          <text x="565" y="245" textAnchor="middle" fontSize="10" fill="#1e293b">Norte</text>
          <text x="565" y="203" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#16a34a">5%</text>
          {/* Linha base */}
          <line x1="40" y1="225" x2="580" y2="225" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="300" y="310" textAnchor="middle" fontSize="10" fill="#64748b">
            Fonte: IBGE — dados aproximados. Sudeste concentra mais da metade da riqueza nacional.
          </text>
        </svg>
        <figcaption>Participação percentual de cada região no PIB brasileiro — a desigualdade regional é evidente.</figcaption>
      </figure>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Políticas regionais</span>
        <h2>7. Órgãos e políticas de desenvolvimento regional</h2>
        <p>
          Para enfrentar as desigualdades regionais, o Estado brasileiro criou ao longo do século XX
          órgãos e políticas específicas. Destacam-se:
        </p>
        <ul>
          <li>
            <strong>SUDENE (1959):</strong> criada por Celso Furtado para planejar o desenvolvimento
            econômico do Nordeste, com incentivos fiscais para atrair indústrias.
          </li>
          <li>
            <strong>SUDAM (1966):</strong> voltada para a integração e o desenvolvimento da Amazônia,
            substituindo a SPVEA.
          </li>
          <li>
            <strong>SUDESUL (1967–1990):</strong> atuou no desenvolvimento da Região Sul.
          </li>
          <li>
            <strong>Transferências constitucionais:</strong> Fundos de Participação dos Estados (FPE)
            e Municípios (FPM) redistribuem recursos das regiões ricas para as mais pobres.
          </li>
          <li>
            <strong>Programa de Aceleração do Crescimento (PAC):</strong> investimentos em
            infraestrutura nas regiões menos desenvolvidas.
          </li>
        </ul>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Região e identidade</span>
        <h2>8. Identidade regional e regionalismos</h2>
        <p>
          Além da divisão administrativa, o Brasil possui fortes identidades regionais, construídas
          historicamente por meio de colonização, culturas indígenas, africanas e europeias, e pelas
          diferentes formas de ocupação do território. O regionalismo pode ser tanto um movimento
          cultural de afirmação identitária quanto uma demanda política por maior autonomia ou
          participação nos recursos nacionais.
        </p>
        <p>
          Exemplos de identidade regional no Brasil: o <em>gauchismo</em> no Sul, a cultura
          nordestina com o forró, o cangaço e a literatura de cordel, a cultura amazônica ligada
          às populações ribeirinhas e indígenas, e o cosmopolitismo do Sudeste, especialmente de
          São Paulo e Rio de Janeiro.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fronteiras agrícolas</span>
        <h2>9. Expansão das fronteiras agrícolas e novas regiões dinâmicas</h2>
        <p>
          O Brasil passou por um intenso processo de expansão de suas fronteiras agrícolas nas
          últimas décadas, especialmente com o avanço do agronegócio sobre o Cerrado e o sul da
          Amazônia. Surgiu assim o chamado <strong>MATOPIBA</strong> — acrônimo formado pelas
          iniciais dos estados do Maranhão, Tocantins, Piauí e Bahia —, que se tornou uma nova
          fronteira agrícola de alta produtividade, especialmente na produção de soja, milho e
          algodão.
        </p>
        <p>
          Essa expansão reconfigurou a Geografia econômica do Brasil, integrando áreas antes
          consideradas periféricas ao circuito global do agronegócio, mas também gerando conflitos
          sociais e ambientais, como desmatamento do Cerrado, conflitos com comunidades
          quilombolas e indígenas, e pressão sobre recursos hídricos.
        </p>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Resumo comparativo</span>
        <h2>10. Síntese das principais regionalizações do Brasil</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparação entre as principais propostas de regionalização do Brasil</caption>
            <thead>
              <tr>
                <th>Proposta</th>
                <th>Autor / Órgão</th>
                <th>Critério principal</th>
                <th>Regiões</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cinco Grandes Regiões</td>
                <td>IBGE (1969/1976)</td>
                <td>Físico + socioeconômico</td>
                <td>Norte, Nordeste, CO, Sudeste, Sul</td>
              </tr>
              <tr>
                <td>Complexos Regionais</td>
                <td>Geiger (1967)</td>
                <td>Econômico-histórico</td>
                <td>Amazônia, Nordeste, Centro-Sul</td>
              </tr>
              <tr>
                <td>Regiões Geoeconômicas</td>
                <td>Milton Santos</td>
                <td>Modernização técnica</td>
                <td>Concentrada, Nordeste, Amazônia</td>
              </tr>
              <tr>
                <td>Regiões Intermediárias/Imediatas</td>
                <td>IBGE (2017)</td>
                <td>Redes urbanas</td>
                <td>133 intermediárias / 480 imediatas</td>
              </tr>
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
              A divisão do Brasil em cinco grandes regiões (Norte, Nordeste, Centro-Oeste, Sudeste e Sul)
              foi proposta pelo IBGE e leva em consideração principalmente critérios:
            </p>
          }
          options={[
            { letter: "a", text: "Exclusivamente culturais e linguísticos, como as diferenças de dialeto entre os estados." },
            { letter: "b", text: "Físicos e socioeconômicos, como clima, relevo e nível de desenvolvimento." , correct: true },
            { letter: "c", text: "Apenas políticos, baseados na data de criação de cada estado." },
            { letter: "d", text: "Somente populacionais, como densidade demográfica e taxa de urbanização." },
            { letter: "e", text: "Exclusivamente naturais, desconsiderando qualquer fator humano." },
          ]}
          resolution={
            <p>
              A divisão do IBGE em cinco grandes regiões combina critérios físicos (como clima, relevo e
              vegetação) com critérios socioeconômicos (como nível de desenvolvimento e características
              históricas de ocupação). Não é baseada apenas em um único critério. A alternativa correta
              é a letra B.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              O geógrafo Milton Santos propôs uma regionalização do Brasil em três grandes regiões
              geoeconômicas. Qual das alternativas a seguir apresenta corretamente essas regiões?
            </p>
          }
          options={[
            { letter: "a", text: "Norte, Nordeste e Sul." },
            { letter: "b", text: "Amazônia, Centro-Sul e Nordeste." },
            { letter: "c", text: "Região Concentrada, Nordeste e Amazônia.", correct: true },
            { letter: "d", text: "Sudeste, Semiárido e Pantanal." },
            { letter: "e", text: "Centro-Oeste, Litoral e Interior." },
          ]}
          resolution={
            <p>
              Milton Santos dividiu o Brasil em Região Concentrada (Sul e Sudeste, mais desenvolvida e
              tecnificada), Nordeste (marcado por pobreza histórica e seca) e Amazônia (grande reservatório
              natural em processo de integração). Essa proposta usa o critério de modernização técnica e
              inserção no capitalismo. A resposta correta é a letra C.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              O MATOPIBA é uma região que ganhou destaque nas últimas décadas como nova fronteira agrícola
              do Brasil. Esse acrônimo reúne partes de quatro estados. Assinale a alternativa que apresenta
              corretamente esses estados e a principal atividade econômica que impulsionou essa região.
            </p>
          }
          options={[
            { letter: "a", text: "Mato Grosso, Amapá, Tocantins, Pará e Bahia — mineração." },
            { letter: "b", text: "Maranhão, Tocantins, Piauí e Bahia — agronegócio (soja, milho, algodão).", correct: true },
            { letter: "c", text: "Minas Gerais, Tocantins, Paraíba e Bahia — pecuária extensiva." },
            { letter: "d", text: "Maranhão, Tocantins, Piauí e Brasília — extrativismo vegetal." },
            { letter: "e", text: "Mato Grosso, Amapá, Pará e Bahia — turismo ecológico." },
          ]}
          resolution={
            <p>
              MATOPIBA é o acrônimo formado pelas iniciais de Maranhão, Tocantins, Piauí e Bahia. Essa
              região se tornou uma das principais fronteiras agrícolas do Brasil, sobretudo com a expansão
              do agronegócio sobre o Cerrado, destacando-se a produção de soja, milho e algodão. A resposta
              correta é a letra B.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              (ENEM adaptado) A concentração de mais de 55% do PIB brasileiro na Região Sudeste é resultado
              de um processo histórico de desenvolvimento desigual. Entre os fatores que contribuíram para
              essa concentração, NÃO se inclui:
            </p>
          }
          options={[
            { letter: "a", text: "A industrialização que se concentrou em São Paulo a partir do século XX, atraída pelo café." },
            { letter: "b", text: "A presença de maior infraestrutura de transportes, energia e comunicações." },
            { letter: "c", text: "A criação da SUDENE em 1959, que deslocou investimentos para o Nordeste em detrimento do Sudeste.", correct: true },
            { letter: "d", text: "A maior densidade de mão de obra qualificada e centros de pesquisa tecnológica." },
            { letter: "e", text: "A localização de grandes portos e centros financeiros como São Paulo e Rio de Janeiro." },
          ]}
          resolution={
            <p>
              A SUDENE foi criada em 1959 justamente para tentar reduzir as desigualdades regionais,
              atraindo investimentos para o Nordeste. Portanto, ela não contribuiu para a concentração
              econômica no Sudeste — pelo contrário, buscava descentralizá-la. Os demais fatores
              (industrialização, infraestrutura, mão de obra qualificada e localização portuária)
              explicam a concentração no Sudeste. A resposta correta é a letra C.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              Em 2017, o IBGE substituiu as antigas mesorregiões e microrregiões por regiões geográficas
              intermediárias e imediatas. Essa nova divisão reflete uma mudança de paradigma na
              regionalização brasileira. Sobre essa mudança, é correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "A nova divisão abandonou completamente as cinco grandes regiões, substituindo-as por apenas três." },
            { letter: "b", text: "As regiões imediatas são articuladas por grandes metrópoles nacionais como São Paulo e Rio de Janeiro." },
            { letter: "c", text: "A nova proposta manteve as cinco grandes regiões e reorganizou os níveis intermediário e local com base nas redes urbanas e hierarquia das cidades.", correct: true },
            { letter: "d", text: "A mudança foi motivada exclusivamente por critérios naturais, como a distribuição das bacias hidrográficas." },
            { letter: "e", text: "O número de regiões imediatas é maior que o número de mesorregiões antigas, totalizando mais de 600 unidades." },
          ]}
          resolution={
            <p>
              A proposta do IBGE de 2017 manteve as cinco grandes regiões, mas substituiu as antigas
              mesorregiões (137) por 133 regiões geográficas intermediárias e as microrregiões (558) por
              480 regiões geográficas imediatas. A nova lógica é baseada na teoria das redes urbanas: as
              regiões imediatas gravitam em torno de centros urbanos que oferecem serviços à população
              local, e as intermediárias articulam esses grupos em torno de metrópoles regionais. A
              resposta correta é a letra C.
            </p>
          }
        />
      </section>
    </article>
  );
}
