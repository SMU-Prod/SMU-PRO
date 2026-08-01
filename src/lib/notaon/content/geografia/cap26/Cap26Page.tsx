"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap26Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 26</span>
          <h1>Estrutura fundiária e reforma agrária</h1>
          <p>
            A questão agrária brasileira é uma das mais antigas e complexas do país.
            A estrutura fundiária herdada do período colonial — marcada pela enorme
            concentração de terra nas mãos de poucos proprietários — persiste até
            hoje e está na raiz de conflitos sociais, violência no campo, êxodo rural
            e desigualdade regional. A reforma agrária, entendida como a redistribuição
            de terras para garantir acesso a quem nelas trabalha, foi uma demanda
            histórica de trabalhadores rurais e movimentos sociais, mas nunca foi
            plenamente realizada no Brasil.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura fundiária</span>
        <h2>1. O que é estrutura fundiária?</h2>
        <p>
          A estrutura fundiária refere-se à forma como a propriedade da terra está
          distribuída em um território. Ela pode ser mais ou menos concentrada,
          dependendo do peso relativo de grandes, médias e pequenas propriedades.
          No Brasil, a estrutura fundiária é historicamente concentrada: poucos
          proprietários detêm grandes extensões de terra (latifúndios), enquanto
          muitos trabalhadores rurais possuem pouca ou nenhuma terra.
        </p>
        <p>
          O índice de Gini fundiário mede a concentração da terra: varia de 0
          (distribuição perfeita) a 1 (concentração total). O Brasil possui um
          dos índices de Gini fundiário mais altos do mundo — historicamente acima
          de 0,85. Segundo o Censo Agropecuário de 2017 do IBGE, 1% dos
          estabelecimentos agropecuários ocupa cerca de 48% da área agrícola total
          do país, enquanto os 50% menores estabelecimentos ocupam menos de 2% da área.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Classificação dos imóveis rurais no Brasil (INCRA)</caption>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Tamanho (em módulos fiscais)</th>
                <th>Característica principal</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Minifúndio</td><td>Menos de 1 módulo fiscal</td><td>Abaixo do mínimo para subsistência</td></tr>
              <tr><td>Pequena propriedade</td><td>1 a 4 módulos fiscais</td><td>Agricultura familiar predominante</td></tr>
              <tr><td>Média propriedade</td><td>4 a 15 módulos fiscais</td><td>Transição entre familiar e empresarial</td></tr>
              <tr><td>Grande propriedade (latifúndio)</td><td>Mais de 15 módulos fiscais</td><td>Agronegócio ou improdutividade</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SVG 1: Concentração fundiária ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="280" fill="#fef9f0" rx="8"/>
          <text x="300" y="26" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
            Concentração Fundiária no Brasil — Censo Agropecuário 2017
          </text>
          {/* Gráfico comparativo */}
          {/* Eixo */}
          <line x1="60" y1="220" x2="560" y2="220" stroke="#94a3b8" strokeWidth="1.5"/>
          <line x1="60" y1="50" x2="60" y2="220" stroke="#94a3b8" strokeWidth="1.5"/>
          {/* Marcadores eixo Y */}
          <text x="52" y="224" textAnchor="end" fontSize="10" fill="#64748b">0</text>
          <text x="52" y="170" textAnchor="end" fontSize="10" fill="#64748b">25%</text>
          <text x="52" y="120" textAnchor="end" fontSize="10" fill="#64748b">50%</text>
          <text x="52" y="70" textAnchor="end" fontSize="10" fill="#64748b">75%</text>
          <line x1="58" y1="170" x2="560" y2="170" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4,4"/>
          <line x1="58" y1="120" x2="560" y2="120" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4,4"/>
          <line x1="58" y1="70" x2="560" y2="70" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4,4"/>
          {/* Grupo 1: 1% dos imóveis = 48% da área */}
          <rect x="100" y="124" width="90" height="96" fill="#dc2626" rx="4"/>
          <text x="145" y="110" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7f1d1d">1% dos</text>
          <text x="145" y="123" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7f1d1d">imóveis</text>
          <text x="145" y="168" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">48%</text>
          <text x="145" y="183" textAnchor="middle" fontSize="10" fill="#fecaca">da área</text>
          {/* Grupo 2: 50% dos imóveis = 2% da área */}
          <rect x="240" y="215" width="90" height="5" fill="#16a34a" rx="2"/>
          <text x="285" y="200" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#166534">50% dos</text>
          <text x="285" y="213" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#166534">imóveis</text>
          <text x="285" y="235" textAnchor="middle" fontSize="10" fill="#166534">apenas 2% da área</text>
          {/* Grupo 3: 10% dos imóveis = ~75% da área total */}
          <rect x="390" y="77" width="90" height="143" fill="#f59e0b" rx="4"/>
          <text x="435" y="63" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#78350f">10% dos</text>
          <text x="435" y="76" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#78350f">maiores</text>
          <text x="435" y="158" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">~75%</text>
          <text x="435" y="173" textAnchor="middle" fontSize="10" fill="#fef3c7">da área</text>
          {/* Legenda */}
          <text x="300" y="262" textAnchor="middle" fontSize="10" fill="#64748b">Gini fundiário do Brasil: ~0,87 — um dos maiores do mundo</text>
        </svg>
        <figcaption>Concentração fundiária no Brasil: 1% dos maiores estabelecimentos detém 48% da área agrícola, enquanto 50% dos menores ocupam apenas 2% — expressão do elevado Gini fundiário brasileiro.</figcaption>
      </figure>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Raízes históricas</span>
        <h2>2. Origens históricas da concentração fundiária</h2>
        <p>
          A concentração da terra no Brasil tem raízes no período colonial. O sistema
          de sesmarias (concessões de grandes extensões de terras pela Coroa Portuguesa
          a colonizadores) estabeleceu desde o início uma estrutura latifundiária. As
          sesmarias visavam ocupar o território e produzir para a metrópole, mas
          geraram enormes propriedades nas mãos de poucos.
        </p>
        <p>
          Com a Lei de Terras de 1850, o acesso à terra passou a depender
          exclusivamente da compra, excluindo os trabalhadores pobres, os ex-escravizados
          (libertação ainda não havia ocorrido, mas a lei antecipou a lógica pós-abolição)
          e os imigrantes sem capital. A lei consolidou o latifúndio e tornou a terra
          um ativo de especulação. Esse legado histórico ainda estrutura o campo
          brasileiro, apesar de algumas transformações trazidas pela modernização
          agrícola do século XX.
        </p>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conflitos no campo</span>
        <h2>3. Conflitos agrários e violência no campo</h2>
        <p>
          A concentração fundiária alimenta conflitos permanentes no campo brasileiro.
          Disputas entre proprietários, posseiros, indígenas, quilombolas e sem-terra
          resultam em violência física, assassinatos, expulsões e despejos. A Comissão
          Pastoral da Terra (CPT) registra anualmente centenas de conflitos agrários
          no Brasil, com dezenas de mortes.
        </p>
        <p>
          As regiões com maior incidência de conflitos são o Pará (fronteira agrícola
          e mineração), o Maranhão, o Mato Grosso e o sul da Amazônia Legal. O
          assassinato de defensores de direitos humanos e líderes indígenas ligados
          a questões de terra é um problema grave e reconhecido internacionalmente.
          Líderes como Chico Mendes (seringueiro do Acre, assassinado em 1988) e
          Dorothy Stang (missionária no Pará, assassinada em 2005) tornaram-se
          símbolos dessa violência estrutural.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Tipos de conflitos agrários no Brasil (CPT)</caption>
            <thead>
              <tr>
                <th>Tipo de conflito</th>
                <th>Principais atores em disputa</th>
                <th>Regiões mais afetadas</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Terra</td><td>Latifundiários x sem-terra / posseiros</td><td>PA, MA, MT, MS</td></tr>
              <tr><td>Água</td><td>Agricultores x empresas / usinas</td><td>Nordeste, Sul</td></tr>
              <tr><td>Trabalhistas</td><td>Trabalhadores rurais x fazendeiros</td><td>PA, MT, TO, MS</td></tr>
              <tr><td>Indígena / quilombola</td><td>Povos originários x ruralistas</td><td>AM, PA, BA, MS</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Movimentos sociais</span>
        <h2>4. Movimentos sociais no campo</h2>
        <p>
          O principal movimento de luta pela terra no Brasil é o MST (Movimento dos
          Trabalhadores Rurais Sem Terra), fundado em 1984 em Cascavel (PR). O MST
          organiza trabalhadores rurais sem-terra para a ocupação de latifúndios
          improdutivos, pressionando o governo a realizar a reforma agrária. Suas
          ações envolvem ocupações de terras, marchas, acampamentos e pressão política.
        </p>
        <p>
          Outros movimentos relevantes incluem: a CONTAG (Confederação Nacional dos
          Trabalhadores na Agricultura), a FETRAF (Federação dos Trabalhadores na
          Agricultura Familiar), o MTST (Movimento dos Trabalhadores Sem Teto,
          focado no espaço urbano mas com origem nas lutas agrárias) e movimentos
          de povos tradicionais, como o CIMI (Conselho Indigenista Missionário).
          Todos convergem na defesa do direito à terra como condição de vida digna.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Reforma agrária</span>
        <h2>5. Conceito e fundamentos da reforma agrária</h2>
        <p>
          A reforma agrária é o conjunto de políticas que visa redistribuir a
          propriedade da terra, garantindo acesso a trabalhadores rurais sem terra
          ou com pouca terra. Vai além da simples distribuição de propriedades:
          inclui acesso a crédito, assistência técnica, infraestrutura (estradas,
          energia, água), escolas e serviços de saúde para que as famílias
          assentadas possam produzir de forma sustentável.
        </p>
        <p>
          A Constituição Federal de 1988 estabelece que a propriedade deve cumprir
          sua função social (art. 186): ser produtiva, preservar o meio ambiente,
          respeitar a legislação trabalhista e o bem-estar dos trabalhadores. Terras
          que não cumprem essa função social podem ser desapropriadas para fins de
          reforma agrária, com pagamento de indenização ao proprietário em títulos
          da dívida agrária. Essa é a base legal para a atuação do INCRA (Instituto
          Nacional de Colonização e Reforma Agrária).
        </p>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Histórico da reforma agrária</span>
        <h2>6. Histórico das políticas de reforma agrária no Brasil</h2>
        <p>
          A reforma agrária foi promessa recorrente de governos brasileiros, mas nunca
          foi implementada de forma ampla. O Estatuto da Terra (1964), aprovado durante
          a ditadura militar, criou instrumentos legais, mas foi utilizado principalmente
          para colonização de fronteiras (Amazônia) em vez de redistribuição de terras
          nas áreas já ocupadas. O INCRA foi criado em 1970 para administrar a
          política de reforma agrária.
        </p>
        <p>
          O I PNRA (Plano Nacional de Reforma Agrária, 1985) do governo Sarney propôs
          assentar 1,4 milhão de famílias em 5 anos, mas assentou apenas 90 mil. O
          governo FHC (1995–2002) assentou cerca de 540 mil famílias após a pressão
          gerada pelo Massacre de Eldorado dos Carajás (1996), no Pará, onde 19 sem-terra
          foram assassinados pela Polícia Militar. O governo Lula (2003–2010) assentou
          mais de 600 mil famílias, mas também ficou aquém das metas. A partir de 2016,
          o ritmo de assentamentos caiu drasticamente.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Assentamentos rurais por período de governo (estimativas)</caption>
            <thead>
              <tr>
                <th>Período</th>
                <th>Governo</th>
                <th>Famílias assentadas (aprox.)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1985–1989</td><td>Sarney</td><td>90.000</td></tr>
              <tr><td>1995–2002</td><td>FHC</td><td>540.000</td></tr>
              <tr><td>2003–2010</td><td>Lula I e II</td><td>614.000</td></tr>
              <tr><td>2011–2014</td><td>Dilma I</td><td>92.000</td></tr>
              <tr><td>2015–2022</td><td>Dilma II / Temer / Bolsonaro</td><td>redução acentuada</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SVG 2: Função social da propriedade ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 290" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="290" fill="#f0fdf4" rx="8"/>
          <text x="300" y="26" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
            Função Social da Propriedade Rural — CF/1988 (Art. 186)
          </text>
          {/* Centro */}
          <circle cx="300" cy="158" r="50" fill="#16a34a"/>
          <text x="300" y="153" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Função</text>
          <text x="300" y="167" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Social da</text>
          <text x="300" y="181" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Propriedade</text>
          {/* Requisito 1 */}
          <rect x="10" y="50" width="160" height="55" fill="#bbf7d0" rx="6" stroke="#16a34a" strokeWidth="1.5"/>
          <text x="90" y="70" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#14532d">Aproveitamento</text>
          <text x="90" y="84" textAnchor="middle" fontSize="10" fill="#14532d">racional e adequado</text>
          <text x="90" y="96" textAnchor="middle" fontSize="10" fill="#14532d">(terra produtiva)</text>
          <line x1="170" y1="77" x2="253" y2="130" stroke="#4ade80" strokeWidth="1.5"/>
          {/* Requisito 2 */}
          <rect x="430" y="50" width="160" height="55" fill="#bbf7d0" rx="6" stroke="#16a34a" strokeWidth="1.5"/>
          <text x="510" y="70" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#14532d">Utilização</text>
          <text x="510" y="84" textAnchor="middle" fontSize="10" fill="#14532d">adequada dos</text>
          <text x="510" y="96" textAnchor="middle" fontSize="10" fill="#14532d">recursos naturais</text>
          <line x1="430" y1="77" x2="347" y2="130" stroke="#4ade80" strokeWidth="1.5"/>
          {/* Requisito 3 */}
          <rect x="10" y="200" width="160" height="55" fill="#bbf7d0" rx="6" stroke="#16a34a" strokeWidth="1.5"/>
          <text x="90" y="220" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#14532d">Observância</text>
          <text x="90" y="234" textAnchor="middle" fontSize="10" fill="#14532d">da legislação</text>
          <text x="90" y="246" textAnchor="middle" fontSize="10" fill="#14532d">trabalhista</text>
          <line x1="170" y1="222" x2="253" y2="188" stroke="#4ade80" strokeWidth="1.5"/>
          {/* Requisito 4 */}
          <rect x="430" y="200" width="160" height="55" fill="#bbf7d0" rx="6" stroke="#16a34a" strokeWidth="1.5"/>
          <text x="510" y="220" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#14532d">Bem-estar dos</text>
          <text x="510" y="234" textAnchor="middle" fontSize="10" fill="#14532d">proprietários e</text>
          <text x="510" y="246" textAnchor="middle" fontSize="10" fill="#14532d">trabalhadores</text>
          <line x1="430" y1="222" x2="347" y2="188" stroke="#4ade80" strokeWidth="1.5"/>
          {/* Nota */}
          <text x="300" y="275" textAnchor="middle" fontSize="10" fill="#64748b">Se não cumprir os 4 requisitos → sujeita à desapropriação para Reforma Agrária</text>
        </svg>
        <figcaption>Os quatro requisitos da função social da propriedade rural segundo o art. 186 da Constituição Federal de 1988: a terra que não os cumpre pode ser desapropriada para reforma agrária.</figcaption>
      </figure>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Agricultura familiar</span>
        <h2>7. Agricultura familiar: importância e desafios</h2>
        <p>
          A agricultura familiar representa cerca de 77% dos estabelecimentos
          agropecuários do Brasil (segundo o Censo Agropecuário de 2017), ocupa
          apenas 23% da área agrícola, mas é responsável por mais de 70% dos
          alimentos consumidos na mesa do brasileiro: feijão, mandioca, hortaliças,
          leite, ovos, frutas. É também a base da segurança alimentar e nutricional
          do país.
        </p>
        <p>
          Apesar de sua importância, a agricultura familiar enfrenta graves desafios:
          acesso limitado a crédito, assistência técnica, armazenamento e mercados;
          minifundização (propriedades abaixo do mínimo viável); sucessão rural
          comprometida pelo êxodo de jovens; e competição desigual com o agronegócio.
          O PRONAF (Programa Nacional de Fortalecimento da Agricultura Familiar),
          criado em 1995, é a principal política de crédito para esse segmento,
          mas sofre com burocracia e inadequação às necessidades dos agricultores.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Agronegócio</span>
        <h2>8. Agronegócio e a questão fundiária</h2>
        <p>
          O agronegócio brasileiro é uma das maiores potências agrícolas mundiais.
          O Brasil é o maior exportador de soja, carne bovina, frango, açúcar e
          café, e um dos maiores de milho, algodão e celulose. O setor representa
          cerca de 25% do PIB nacional (em sentido amplo, incluindo a cadeia
          completa). Esse sucesso econômico é apresentado como argumento contra
          a reforma agrária — a ideia de que os grandes latifúndios são produtivos
          e não devem ser redistribuídos.
        </p>
        <p>
          A tensão entre agronegócio e reforma agrária é um dos eixos centrais
          da política fundiária no Brasil. A bancada ruralista no Congresso Nacional
          tem grande poder e tem bloqueado avanços na reforma agrária, na demarcação
          de terras indígenas e quilombolas e no fortalecimento da agricultura familiar.
          O debate envolve também questões ambientais: o avanço do agronegócio sobre
          o Cerrado e a Amazônia alimenta desmatamento e pressão sobre povos tradicionais.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Terras indígenas e quilombolas</span>
        <h2>9. Terras indígenas, quilombolas e territórios tradicionais</h2>
        <p>
          A questão fundiária no Brasil envolve também os direitos territoriais
          dos povos indígenas e das comunidades quilombolas. A Constituição de 1988
          reconheceu o direito originário dos povos indígenas sobre suas terras
          (art. 231), determinando que a União as demarcasse. Mas o processo de
          demarcação foi lento e disputado: até hoje existem mais de 800 terras
          indígenas no Brasil, das quais muitas ainda aguardam regularização.
        </p>
        <p>
          Os quilombolas — descendentes de escravizados que fugiram e formaram
          comunidades autônomas — têm direito ao reconhecimento e titulação de
          suas terras pela Constituição (art. 68 do ADCT). O INCRA é responsável
          por esse processo, mas o ritmo de titulação é extremamente lento.
          Estima-se que existam mais de 6 mil comunidades quilombolas no Brasil,
          das quais apenas algumas centenas tiveram suas terras tituladas.
        </p>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Perspectivas e desafios</span>
        <h2>10. Reforma agrária hoje: perspectivas e desafios</h2>
        <p>
          O debate sobre reforma agrária no Brasil contemporâneo é mais complexo do
          que simplesmente redistribuir terras. Além do acesso à terra, é necessário
          garantir condições para que os assentados sejam viáveis economicamente:
          infraestrutura, crédito, assistência técnica, acesso a mercados (compras
          governamentais via PAA — Programa de Aquisição de Alimentos — e PNAE —
          Programa Nacional de Alimentação Escolar) e regularidade fundiária.
        </p>
        <p>
          Novas perspectivas incluem a agroecologia como modelo produtivo sustentável
          para os assentamentos, a integração com mercados locais e orgânicos, e
          o aproveitamento de tecnologias digitais para a agricultura de menor escala.
          Ao mesmo tempo, o avanço do agronegócio, a expansão da fronteira agrícola
          e a pressão sobre terras indígenas e quilombolas tornam a questão cada vez
          mais urgente. A reforma agrária continua sendo um tema central para a
          construção de um Brasil mais justo e sustentável.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparação: Agricultura familiar x Agronegócio no Brasil (Censo 2017)</caption>
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Agricultura familiar</th>
                <th>Agronegócio / grandes propriedades</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>% dos estabelecimentos</td><td>77%</td><td>23%</td></tr>
              <tr><td>% da área agrícola</td><td>23%</td><td>77%</td></tr>
              <tr><td>% do emprego rural</td><td>67%</td><td>33%</td></tr>
              <tr><td>% da produção de alimentos para mesa</td><td>~70%</td><td>~30%</td></tr>
              <tr><td>% do valor das exportações agrícolas</td><td>~30%</td><td>~70%</td></tr>
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
              A concentração fundiária no Brasil é medida pelo índice de Gini
              fundiário. Qual das alternativas interpreta corretamente esse índice?
            </p>
          }
          options={[
            { letter: "a", text: "Quanto mais próximo de 0, mais concentrada é a distribuição da terra" },
            { letter: "b", text: "Quanto mais próximo de 1, mais igualitária é a distribuição da terra" },
            { letter: "c", text: "Quanto mais próximo de 1, mais concentrada é a distribuição da terra", correct: true },
            { letter: "d", text: "O índice mede apenas a produtividade das terras agrícolas" },
            { letter: "e", text: "Um Gini de 0,87 indica distribuição equilibrada da terra no Brasil" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>c</strong>. O índice de Gini varia de
              0 a 1: quanto mais próximo de 0, mais igualitária a distribuição;
              quanto mais próximo de 1, mais concentrada. O Brasil possui Gini
              fundiário histórico acima de 0,85, um dos mais altos do mundo, o
              que significa que a terra está fortemente concentrada nas mãos de
              poucos proprietários. A alternativa a inverte a lógica, b também
              inverte, d é falsa (o índice mede distribuição, não produtividade)
              e e interpreta incorretamente o valor de 0,87.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              A Lei de Terras de 1850 teve consequências profundas para a estrutura
              fundiária brasileira. Qual foi o principal efeito dessa lei?
            </p>
          }
          options={[
            { letter: "a", text: "Redistribuiu a terra entre trabalhadores rurais e ex-escravizados" },
            { letter: "b", text: "Tornou o acesso à terra dependente exclusivamente da compra, excluindo trabalhadores pobres", correct: true },
            { letter: "c", text: "Estabeleceu a função social da propriedade como condição para a manutenção da posse" },
            { letter: "d", text: "Aboliu o sistema de sesmarias e dividiu as terras igualmente entre colonos" },
            { letter: "e", text: "Criou o sistema de módulos fiscais para classificar as propriedades rurais" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>b</strong>. A Lei de Terras de 1850
              estabeleceu que a única forma legal de adquirir terras devolutas
              (públicas) seria pela compra, impedindo que trabalhadores pobres,
              escravizados e imigrantes sem capital tivessem acesso à terra.
              Consolidou o latifúndio e transformou a terra em mercadoria e
              ativo de especulação. As demais opções descrevem medidas que a
              lei não contemplou: ela não redistribuiu terras (a), não criou a
              função social (c — isso veio na CF/88), não dividiu igualmente (d)
              e não criou módulos fiscais (e — isso é legislação posterior).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              (ENEM adaptado) A Constituição Federal de 1988 estabelece que a
              propriedade rural deve cumprir sua função social. Para isso, o
              imóvel rural deve atender simultaneamente a quatro requisitos.
              Qual dos conjuntos abaixo corresponde corretamente a esses requisitos?
            </p>
          }
          options={[
            { letter: "a", text: "Ser grande, produtiva, exportadora e gerar divisas para o país" },
            { letter: "b", text: "Aproveitamento racional, utilização adequada dos recursos naturais, legislação trabalhista e bem-estar dos trabalhadores", correct: true },
            { letter: "c", text: "Pagar impostos em dia, não ter dívidas, ter título de propriedade registrado e possuir cerca" },
            { letter: "d", text: "Produzir alimentos, exportar commodities, empregar trabalhadores e respeitar o Código Florestal" },
            { letter: "e", text: "Ser de pequeno porte, produzida em regime familiar, orgânica e certificada pelo MAPA" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>b</strong>. O art. 186 da Constituição
              Federal de 1988 estabelece quatro requisitos para que a propriedade
              rural cumpra sua função social: (1) aproveitamento racional e adequado;
              (2) utilização adequada dos recursos naturais disponíveis e preservação
              do meio ambiente; (3) observância das disposições que regulam as relações
              de trabalho; e (4) exploração que favoreça o bem-estar dos proprietários
              e dos trabalhadores. Propriedades que não cumprem esses requisitos podem
              ser desapropriadas para fins de reforma agrária. As demais opções não
              correspondem aos critérios constitucionais.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              A agricultura familiar e o agronegócio coexistem no campo brasileiro,
              mas com realidades muito distintas. Sobre a agricultura familiar no
              Brasil, é correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "Ocupa a maior parte da área agrícola do Brasil, mas emprega poucos trabalhadores" },
            { letter: "b", text: "É responsável pela maior parte das exportações brasileiras de commodities" },
            { letter: "c", text: "Corresponde à maioria dos estabelecimentos rurais e é base da produção de alimentos para o mercado interno", correct: true },
            { letter: "d", text: "Está concentrada principalmente na Amazônia e no Centro-Oeste" },
            { letter: "e", text: "Recebe a maior parte do crédito rural disponível no Brasil" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>c</strong>. Segundo o Censo
              Agropecuário de 2017, a agricultura familiar corresponde a 77%
              dos estabelecimentos rurais do Brasil e é responsável por cerca
              de 70% dos alimentos que chegam à mesa do brasileiro (feijão,
              mandioca, hortaliças, ovos, leite etc.), sendo a base da segurança
              alimentar. Apesar disso, ocupa apenas 23% da área agrícola (a é
              falsa) e responde por menor parcela das exportações de commodities
              (b é falsa). A maior concentração da agricultura familiar está no
              Sul e Nordeste (d é falsa) e ela recebe proporcionalmente menos
              crédito que o agronegócio (e é falsa).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              O Massacre de Eldorado dos Carajás (1996) é um episódio fundamental
              para entender a questão agrária brasileira. Sobre esse evento e suas
              consequências, analise as afirmativas:<br/>
              I. O massacre foi resultado de um confronto entre trabalhadores sem-terra e a Polícia Militar do Pará.<br/>
              II. O evento acelerou o ritmo de assentamentos rurais pelo governo FHC nos anos seguintes.<br/>
              III. Chico Mendes foi a principal liderança assassinada no massacre de Eldorado dos Carajás.<br/>
              Estão corretas:
            </p>
          }
          options={[
            { letter: "a", text: "Apenas I" },
            { letter: "b", text: "Apenas II" },
            { letter: "c", text: "I e II", correct: true },
            { letter: "d", text: "I e III" },
            { letter: "e", text: "I, II e III" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>c</strong> (I e II). O Massacre de
              Eldorado dos Carajás, ocorrido em 17 de abril de 1996 no Pará, foi
              de fato o confronto entre sem-terra do MST e a Polícia Militar, que
              resultou em 19 mortes (I é correta). A repercussão nacional e
              internacional do evento gerou enorme pressão sobre o governo FHC,
              que acelerou os assentamentos rurais nos anos seguintes (II é
              correta). A afirmativa III é falsa: Chico Mendes não foi morto em
              Eldorado dos Carajás — ele foi assassinado em Xapuri (AC) em 1988,
              anos antes do massacre, e era seringueiro e líder ambientalista,
              não uma das vítimas do confronto de 1996.
            </p>
          }
        />
      </section>
    </article>
  );
}
