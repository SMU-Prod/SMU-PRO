"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap29Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 29</span>
          <h1>Fontes de Energia: Renováveis e Não Renováveis</h1>
          <p>
            A energia é o motor da civilização moderna. Compreender de onde vem a energia que
            movimenta indústrias, transportes, residências e cidades é fundamental tanto para
            entender a geopolítica mundial quanto para pensar a sustentabilidade do planeta.
            Neste capítulo você vai estudar as principais fontes de energia, a matriz energética
            brasileira e global, a transição energética em curso e os impactos ambientais e
            políticos do setor.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceitos Fundamentais</span>
        <h2>1. Matriz Energética vs. Matriz Elétrica</h2>
        <p>
          Antes de estudar as fontes, é preciso diferenciar dois conceitos que frequentemente
          causam confusão no ENEM:
        </p>
        <ul>
          <li>
            <strong>Matriz energética:</strong> conjunto de todas as fontes de energia utilizadas
            em um país, incluindo combustíveis para transporte, geração de calor industrial,
            aquecimento, eletricidade etc. É mais ampla.
          </li>
          <li>
            <strong>Matriz elétrica:</strong> representa apenas as fontes usadas para gerar
            eletricidade. É um subconjunto da matriz energética.
          </li>
        </ul>
        <p>
          O Brasil tem uma das matrizes elétricas mais limpas do mundo — dominada por
          hidrelétricas, eólicas e biomassa. Contudo, a <strong>matriz energética</strong> ainda
          depende significativamente de derivados de petróleo, especialmente no setor de
          transportes. Essa distinção é essencial para interpretar dados e gráficos em provas.
        </p>
        <div className="lesson-highlight">
          <strong>Atenção ENEM:</strong> Quando a questão falar em "energia limpa" e "Brasil
          referência", ela se refere principalmente à <em>matriz elétrica</em>. A matriz
          energética total ainda tem grande participação de petróleo e derivados.
        </div>

        {/* SVG 1 — Matriz Elétrica Brasileira */}
        <figure style={{ margin: "2rem 0", textAlign: "center" }}>
          <svg viewBox="0 0 420 260" width="100%" style={{ maxWidth: 460 }} aria-label="Gráfico da matriz elétrica brasileira">
            <rect width="420" height="260" rx="10" fill="#f0fdf4" />
            <text x="210" y="24" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">
              Matriz Elétrica Brasileira (2024)
            </text>
            {/* Barras */}
            {/* Hidrelétrica 56% */}
            <rect x="40" y="40" width="224" height="28" rx="4" fill="#2563eb" />
            <text x="270" y="59" fontSize="12" fill="#1e293b">Hidrelétrica 56%</text>
            {/* Eólica 14% */}
            <rect x="40" y="80" width="56" height="28" rx="4" fill="#16a34a" />
            <text x="100" y="99" fontSize="12" fill="#1e293b">Eólica 14%</text>
            {/* Biomassa 9% */}
            <rect x="40" y="120" width="36" height="28" rx="4" fill="#d97706" />
            <text x="80" y="139" fontSize="12" fill="#1e293b">Biomassa 9%</text>
            {/* Gás Natural 9% */}
            <rect x="40" y="160" width="36" height="28" rx="4" fill="#9333ea" />
            <text x="80" y="179" fontSize="12" fill="#1e293b">Gás Natural 9%</text>
            {/* Solar 5% */}
            <rect x="40" y="200" width="20" height="28" rx="4" fill="#f59e0b" />
            <text x="64" y="219" fontSize="12" fill="#1e293b">Solar 5%</text>
            {/* Nuclear 2% */}
            <rect x="40" y="235" width="8" height="14" rx="2" fill="#ef4444" />
            <text x="52" y="246" fontSize="11" fill="#1e293b">Nuclear 2% | Outros 5%</text>
            {/* Legenda de escala */}
            <text x="40" y="254" fontSize="10" fill="#64748b">0%</text>
            <text x="240" y="254" fontSize="10" fill="#64748b">60%</text>
          </svg>
          <figcaption style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.5rem" }}>
            Figura 1 — Composição aproximada da matriz elétrica brasileira. Fontes renováveis
            respondem por mais de 85% da geração.
          </figcaption>
        </figure>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fontes Não Renováveis</span>
        <h2>2. Petróleo: Formação, Reservas e Geopolítica</h2>
        <p>
          O petróleo é uma mistura de hidrocarbonetos líquidos formada ao longo de milhões de
          anos a partir da decomposição de matéria orgânica (principalmente fitoplâncton e
          zooplâncton) sob pressão e temperatura elevadas nas bacias sedimentares. Por ser
          finito e não renovável em escala humana, é chamado de <strong>combustível fóssil</strong>.
        </p>
        <p>
          <strong>Pré-sal brasileiro:</strong> em 2006, a Petrobras descobriu enormes reservas
          de petróleo abaixo de uma camada de sal a mais de 2 km de profundidade no Oceano
          Atlântico. O pré-sal elevou o Brasil ao grupo dos grandes produtores mundiais de
          petróleo, com reservas que atendem às bacias de Santos, Campos e Espírito Santo.
        </p>
        <p>
          <strong>Refino e derivados:</strong> o petróleo bruto é processado em refinarias,
          gerando gasolina, diesel, querosene de aviação, nafta petroquímica, óleo combustível,
          GLP (gás de cozinha), asfalto e lubrificantes.
        </p>
        <p>
          <strong>OPEP (Organização dos Países Exportadores de Petróleo):</strong> criada em
          1960, reúne os principais exportadores do Oriente Médio, África e América do Sul.
          Controla cerca de 40% da produção mundial e exerce grande influência sobre os preços
          internacionais. Em 1973, a OPEP promoveu um embargo que quadruplicou o preço do
          petróleo, gerando a <em>crise do petróleo</em> que impactou as economias ocidentais
          e acelerou a busca por fontes alternativas.
        </p>

        <table className="lesson-table">
          <caption>Maiores Reservas Provadas de Petróleo — países selecionados (2023)</caption>
          <thead>
            <tr>
              <th>País</th>
              <th>Reservas (bilhões de barris)</th>
              <th>Região</th>
              <th>OPEP</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Venezuela</td><td>≈ 303</td><td>América do Sul</td><td>Sim</td></tr>
            <tr><td>Arábia Saudita</td><td>≈ 267</td><td>Oriente Médio</td><td>Sim</td></tr>
            <tr><td>Irã</td><td>≈ 209</td><td>Oriente Médio</td><td>Sim</td></tr>
            <tr><td>Iraque</td><td>≈ 145</td><td>Oriente Médio</td><td>Sim</td></tr>
            <tr><td>Rússia</td><td>≈ 107</td><td>Europa/Ásia</td><td>Não</td></tr>
            <tr><td>EUA</td><td>≈ 69</td><td>América do Norte</td><td>Não</td></tr>
            <tr><td>Brasil (pré-sal)</td><td>≈ 15</td><td>América do Sul</td><td>Não</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fontes Não Renováveis</span>
        <h2>3. Gás Natural, Carvão Mineral e Energia Nuclear</h2>
        <p>
          <strong>Gás natural:</strong> também combustível fóssil, composto principalmente de
          metano (CH₄). É considerado o mais "limpo" entre os fósseis porque emite menos
          CO₂ por unidade de energia. Usado em termelétricas, indústrias, transporte (GNV)
          e residências. O Brasil importa gás da Bolívia e produz crescentemente com o pré-sal.
        </p>
        <p>
          <strong>Carvão mineral:</strong> o combustível fóssil mais poluente, responsável por
          grande parte das emissões de CO₂ e SO₂ (causador de chuva ácida). Existem três
          tipos: turfa (menor poder calorífico), linhito, carvão betuminoso e antracito (maior
          pureza e poder calorífico). A China, EUA, Índia e Austrália lideram produção e uso.
          No Brasil, há reservas no Sul (Santa Catarina e Rio Grande do Sul), mas o carvão
          nacional é de baixa qualidade.
        </p>
        <p>
          <strong>Energia nuclear:</strong> obtida pela fissão do urânio-235 em reatores
          nucleares. Gera vapor que movimenta turbinas. Não emite CO₂ diretamente, mas
          produz resíduos radioativos de difícil descarte. O Brasil opera as usinas
          de <strong>Angra 1 e Angra 2</strong> (Angra dos Reis, RJ), com Angra 3 em
          construção. O país possui a 6ª maior reserva de urânio do mundo (Minas Gerais
          e Bahia). O acidente de <strong>Fukushima (2011)</strong> no Japão reacendeu o
          debate mundial sobre segurança nuclear.
        </p>

        <table className="lesson-table">
          <caption>Fontes de Energia Não Renováveis — Comparativo</caption>
          <thead>
            <tr>
              <th>Fonte</th>
              <th>Emissão CO₂</th>
              <th>Vantagem Principal</th>
              <th>Desvantagem Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Petróleo</td>
              <td>Alta</td>
              <td>Alta densidade energética; versátil</td>
              <td>Poluição; finito; geopolítica instável</td>
            </tr>
            <tr>
              <td>Gás Natural</td>
              <td>Média</td>
              <td>Menos poluente que carvão e petróleo</td>
              <td>Finito; risco de vazamento (metano)</td>
            </tr>
            <tr>
              <td>Carvão Mineral</td>
              <td>Muito alta</td>
              <td>Abundante; barato</td>
              <td>Mais poluente; chuva ácida</td>
            </tr>
            <tr>
              <td>Nuclear (urânio)</td>
              <td>Quase zero</td>
              <td>Grande geração; sem emissão direta</td>
              <td>Resíduo radioativo; risco de acidente</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fontes Renováveis</span>
        <h2>4. Energia Hidrelétrica</h2>
        <p>
          A energia hidrelétrica aproveita o potencial hidráulico dos rios para girar turbinas e
          gerar eletricidade. O Brasil detém um dos maiores potenciais hidrelétricos do planeta,
          favorecido por seu extenso sistema de rios, como o Amazonas, Paraná, São Francisco e
          Tocantins. As hidrelétricas respondem por mais de 50% da geração elétrica nacional.
        </p>
        <p>
          <strong>Principais usinas brasileiras:</strong> Itaipu (PR/PY, 14 GW — binacional com
          o Paraguai), Belo Monte (PA, 11,2 GW — maior 100% nacional), Tucuruí (PA), Serra da
          Mesa (GO), Furnas (MG).
        </p>
        <p>
          <strong>Impactos ambientais e sociais:</strong> alagamento de grandes áreas
          (incluindo florestas e terras indígenas), deslocamento de populações, alteração do
          regime hidrológico, emissão de metano em reservatórios com vegetação alagada, impacto
          na ictiofauna. Belo Monte gerou grande polêmica ao inundar áreas da Amazônia e
          impactar comunidades ribeirinhas.
        </p>
        <div className="lesson-highlight">
          <strong>Vulnerabilidade:</strong> a dependência excessiva de hidrelétricas torna o
          Brasil vulnerável a períodos de seca — como ocorreu em 2001 (apagão) e 2021
          (crise hídrica). Isso impulsionou a diversificação da matriz com mais eólicas e solares.
        </div>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fontes Renováveis</span>
        <h2>5. Energia Eólica e Solar</h2>
        <p>
          <strong>Energia eólica:</strong> usa turbinas (aerogeradores) para converter a
          energia cinética do vento em eletricidade. Pode ser <em>onshore</em> (em terra) ou
          <em> offshore</em> (no mar). O Brasil é potência mundial nesse setor, especialmente
          no <strong>Nordeste</strong> (estados como Bahia, Piauí, Rio Grande do Norte, Ceará
          e Maranhão), onde ventos regulares e fortes sopram praticamente o ano todo. O
          Nordeste responde por cerca de 80% da geração eólica nacional.
        </p>
        <p>
          <strong>Energia solar fotovoltaica:</strong> converte luz do sol diretamente em
          eletricidade por meio de painéis fotovoltaicos (células de silício). Crescimento
          explosivo no Brasil nos últimos anos, com destaque para micro e minigeração
          distribuída (residências e empresas). Bahia, Minas Gerais e São Paulo lideram.
        </p>
        <p>
          <strong>Energia solar heliotérmica (CSP):</strong> concentra a radiação solar para
          aquecer um fluido que gera vapor e aciona turbinas. Menos comum no Brasil, mas
          muito usada no Marrocos, Espanha e EUA (desertos).
        </p>

        {/* SVG 2 — Diagrama Renováveis x Não Renováveis */}
        <figure style={{ margin: "2rem 0", textAlign: "center" }}>
          <svg viewBox="0 0 440 220" width="100%" style={{ maxWidth: 480 }} aria-label="Diagrama comparativo fontes renováveis e não renováveis">
            <rect width="440" height="220" rx="10" fill="#fefce8" />
            <text x="220" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#78350f">
              Renováveis vs. Não Renováveis
            </text>
            {/* Coluna Renováveis */}
            <rect x="20" y="35" width="180" height="170" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x="110" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">RENOVÁVEIS</text>
            <text x="110" y="75" textAnchor="middle" fontSize="11" fill="#166534">☀️ Solar</text>
            <text x="110" y="95" textAnchor="middle" fontSize="11" fill="#166534">💨 Eólica</text>
            <text x="110" y="115" textAnchor="middle" fontSize="11" fill="#166534">💧 Hidráulica</text>
            <text x="110" y="135" textAnchor="middle" fontSize="11" fill="#166534">🌿 Biomassa</text>
            <text x="110" y="155" textAnchor="middle" fontSize="11" fill="#166534">🌊 Maré e Onda</text>
            <text x="110" y="175" textAnchor="middle" fontSize="11" fill="#166534">♨️ Geotérmica</text>
            <text x="110" y="195" textAnchor="middle" fontSize="10" fill="#15803d">Se renovam naturalmente</text>
            {/* Coluna Não Renováveis */}
            <rect x="240" y="35" width="180" height="170" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
            <text x="330" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#991b1b">NÃO RENOVÁVEIS</text>
            <text x="330" y="75" textAnchor="middle" fontSize="11" fill="#991b1b">🛢️ Petróleo</text>
            <text x="330" y="95" textAnchor="middle" fontSize="11" fill="#991b1b">🔥 Gás Natural</text>
            <text x="330" y="115" textAnchor="middle" fontSize="11" fill="#991b1b">⚫ Carvão Mineral</text>
            <text x="330" y="135" textAnchor="middle" fontSize="11" fill="#991b1b">☢️ Nuclear (urânio)</text>
            <text x="330" y="165" textAnchor="middle" fontSize="10" fill="#b91c1c">Finitos — se esgotam</text>
          </svg>
          <figcaption style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.5rem" }}>
            Figura 2 — Classificação das principais fontes de energia.
          </figcaption>
        </figure>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fontes Renováveis</span>
        <h2>6. Biomassa, Etanol e Outras Renováveis</h2>
        <p>
          <strong>Biomassa:</strong> energia obtida da queima ou fermentação de material
          orgânico — cana-de-açúcar, bagaço, eucalipto, resíduos agrícolas, lixo orgânico.
          O Brasil é referência mundial no uso de biomassa, especialmente com o
          <strong> Proálcool (1975)</strong>, programa lançado após a crise do petróleo de 1973
          para substituir gasolina por etanol de cana. O etanol brasileiro tem um dos melhores
          balanços energéticos do mundo (produz em torno de 9 vezes mais energia do que
          consome para ser produzido).
        </p>
        <p>
          <strong>Energia das marés e ondas:</strong> aproveita o movimento das águas do mar.
          Ainda em fase experimental no mundo, com potencial para países com litoral extenso
          (como o Brasil). Tem a vantagem de ser previsível (ciclos das marés são conhecidos).
        </p>
        <p>
          <strong>Energia geotérmica:</strong> usa o calor interno da Terra. Muito usada na
          Islândia, Quênia e EUA. O Brasil tem potencial, mas ainda não explora comercialmente.
        </p>

        <table className="lesson-table">
          <caption>Capacidade de Energias Renováveis Instaladas no Brasil (2024)</caption>
          <thead>
            <tr>
              <th>Fonte</th>
              <th>Capacidade Instalada (GW)</th>
              <th>Participação na Matriz Elétrica</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Hidrelétrica</td><td>≈ 110</td><td>≈ 56%</td></tr>
            <tr><td>Eólica</td><td>≈ 28</td><td>≈ 14%</td></tr>
            <tr><td>Solar fotovoltaica</td><td>≈ 35</td><td>≈ 12%</td></tr>
            <tr><td>Biomassa e bioenergia</td><td>≈ 16</td><td>≈ 9%</td></tr>
            <tr><td>Nuclear</td><td>≈ 2</td><td>≈ 2%</td></tr>
            <tr><td>Outras térmicas</td><td>≈ 30</td><td>≈ 7%</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Geopolítica</span>
        <h2>7. Crise do Petróleo de 1973 e Geopolítica Energética</h2>
        <p>
          Em outubro de 1973, durante a <em>Guerra do Yom Kippur</em> entre Israel e países
          árabes, a OPEP decretou um embargo de petróleo aos países que apoiavam Israel
          (EUA, Europa Ocidental, Japão). O preço do barril quadruplicou em poucos meses,
          gerando inflação, recessão e longas filas nos postos de gasolina nos países
          desenvolvidos. Foi o maior choque energético do século XX.
        </p>
        <p>
          <strong>Consequências a longo prazo:</strong> acelerou a busca por alternativas
          (etanol no Brasil com o Proálcool), impulsionou a exploração de petróleo no Mar do
          Norte (Reino Unido e Noruega), motivou pesquisas em energia nuclear e solar.
          Evidenciou que o controle das fontes de energia é um poderoso instrumento político.
        </p>
        <p>
          <strong>Atualidade:</strong> as tensões no Oriente Médio (Irã, Iraque, conflitos no
          Golfo Pérsico), a rivalidade entre OPEP e a OPEP+ (com Rússia), a guerra na Ucrânia
          e a transição energética europeia mantêm o petróleo no centro da geopolítica mundial.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sustentabilidade</span>
        <h2>8. Transição Energética e Desafios Globais</h2>
        <p>
          A <strong>transição energética</strong> é o processo de substituição gradual dos
          combustíveis fósseis por fontes renováveis para reduzir as emissões de gases de
          efeito estufa e combater as mudanças climáticas. É impulsionada pelo Acordo de Paris
          (2015), que prevê limitar o aquecimento global a 1,5 °C acima dos níveis pré-industriais.
        </p>
        <p>
          Desafios da transição: <strong>intermitência</strong> das renováveis (sol não brilha
          à noite, vento não sopra sempre), necessidade de <strong>armazenamento de energia</strong>
          (baterias, hidrogênio verde), custos de infraestrutura, resistência política de países
          dependentes de exportação de fósseis. O <strong>hidrogênio verde</strong> (produzido
          por eletrólise da água com energia renovável) emerge como grande aposta para
          descarbonizar setores difíceis de eletrificar (aço, fertilizantes, aviação).
        </p>

        <table className="lesson-table">
          <caption>Vantagens e Desvantagens das Principais Fontes de Energia</caption>
          <thead>
            <tr>
              <th>Fonte</th>
              <th>Renovável?</th>
              <th>Vantagens</th>
              <th>Desvantagens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hidrelétrica</td>
              <td>Sim</td>
              <td>Baixo custo operacional; geração constante</td>
              <td>Impacto ambiental/social; seca</td>
            </tr>
            <tr>
              <td>Eólica</td>
              <td>Sim</td>
              <td>Limpa; custo decrescente</td>
              <td>Intermitente; impacto visual/avifauna</td>
            </tr>
            <tr>
              <td>Solar</td>
              <td>Sim</td>
              <td>Abundante; escalável</td>
              <td>Intermitente; resíduos dos painéis</td>
            </tr>
            <tr>
              <td>Biomassa/Etanol</td>
              <td>Sim</td>
              <td>Substitui combustível líquido; resíduos</td>
              <td>Concorrência com alimentos; emissão CO₂</td>
            </tr>
            <tr>
              <td>Nuclear</td>
              <td>Não</td>
              <td>Alta geração; baixo CO₂</td>
              <td>Resíduo radioativo; risco de acidente</td>
            </tr>
            <tr>
              <td>Petróleo/Gás</td>
              <td>Não</td>
              <td>Alta densidade; infraestrutura consolidada</td>
              <td>Poluição; finito; geopolítica instável</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ── Seção 9 — Síntese ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Brasil: Referência em Energias Renováveis</h2>
        <p>
          O Brasil ocupa posição de destaque no cenário energético mundial por três razões
          principais: (1) mais de 85% da sua geração elétrica vem de fontes renováveis;
          (2) é o maior produtor mundial de etanol de cana-de-açúcar ao lado dos EUA;
          (3) tem enorme potencial ainda não explorado em eólica offshore, solar e hidrogênio
          verde. Esse perfil torna o país um agente relevante nas negociações climáticas
          internacionais e um potencial exportador de energia limpa no futuro.
        </p>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="1. Matriz Elétrica vs. Energética"
          statement={
            <p>
              (ENEM adaptado) Ao analisar a situação energética do Brasil, um pesquisador
              afirma: "O Brasil tem uma das matrizes mais limpas do mundo." Essa afirmação
              é mais precisa em relação a qual conceito?
            </p>
          }
          options={[
            { letter: "a", text: "Matriz energética total, pois inclui todos os setores da economia." },
            { letter: "b", text: "Matriz elétrica, pois mais de 85% da eletricidade gerada vem de fontes renováveis." , correct: true },
            { letter: "c", text: "Consumo de combustíveis para transporte, dominado por hidrogênio." },
            { letter: "d", text: "Produção de carvão mineral, que o Brasil exporta em larga escala." },
          ]}
          resolution={
            <p>
              A afirmação se refere à <strong>matriz elétrica</strong> brasileira, dominada por
              hidrelétricas (≈56%), eólica (≈14%) e solar + biomassa. A matriz energética
              total ainda depende significativamente de petróleo (setor de transportes),
              portanto não seria tão "limpa" como a elétrica.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Crise do Petróleo de 1973"
          statement={
            <p>
              (ENEM adaptado) Em 1973, a OPEP decretou um embargo de petróleo que gerou
              profundo impacto nas economias ocidentais. No Brasil, uma das respostas diretas
              a esse choque foi:
            </p>
          }
          options={[
            { letter: "a", text: "A construção das usinas nucleares de Angra para substituir totalmente o petróleo." },
            { letter: "b", text: "A criação do Proálcool em 1975, incentivando o etanol de cana como alternativa à gasolina.", correct: true },
            { letter: "c", text: "A descoberta e exploração imediata do pré-sal no Oceano Atlântico." },
            { letter: "d", text: "A expansão do carvão mineral no Sul do Brasil como principal substituto energético." },
          ]}
          resolution={
            <p>
              O <strong>Proálcool (1975)</strong> foi a resposta direta do Brasil à crise do
              petróleo de 1973, criando incentivos para a produção e uso do etanol de cana.
              O pré-sal só foi descoberto em 2006; Angra não substitui gasolina; o carvão
              brasileiro é de baixa qualidade e pequena escala.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="3. Energia Eólica no Brasil"
          statement={
            <p>
              A região que concentra a maior geração eólica do Brasil e as razões para essa
              concentração são, respectivamente:
            </p>
          }
          options={[
            { letter: "a", text: "Sudeste, por ter a maior população e demanda energética do país." },
            { letter: "b", text: "Sul, por estar mais próxima da região Pampa, com ventos da Patagônia." },
            { letter: "c", text: "Nordeste, por apresentar ventos regulares e fortes ao longo de praticamente todo o ano.", correct: true },
            { letter: "d", text: "Norte, por ter extensas planícies onde os ventos amazônicos são mais intensos." },
          ]}
          resolution={
            <p>
              O <strong>Nordeste</strong> concentra cerca de 80% da geração eólica brasileira.
              A região se beneficia dos <em>ventos alísios</em> — constantes, regulares e de
              boa intensidade, especialmente no litoral e no semiárido dos estados como Bahia,
              Piauí, Ceará e Rio Grande do Norte.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="4. Energia Nuclear — Desafios e Controvérsias"
          statement={
            <>
              <p>
                (FUVEST adaptado) A energia nuclear é considerada por alguns como alternativa
                para a transição energética por não emitir CO₂ diretamente. Porém, seu uso
                levanta questões específicas. Sobre a energia nuclear, analise:
              </p>
              <p>
                I. Os reatores utilizam a fissão do urânio para gerar calor e acionar turbinas.
                <br />
                II. O Brasil possui reservas significativas de urânio e opera as usinas de Angra 1 e 2.
                <br />
                III. O acidente de Fukushima (2011) demonstrou riscos associados mesmo a países com
                tecnologia avançada.
                <br />
                IV. Os resíduos radioativos têm meia-vida de poucos dias, facilitando seu descarte.
              </p>
              <p>Estão corretas apenas:</p>
            </>
          }
          options={[
            { letter: "a", text: "I e II apenas." },
            { letter: "b", text: "I, II e III apenas.", correct: true },
            { letter: "c", text: "II, III e IV apenas." },
            { letter: "d", text: "Todas estão corretas." },
          ]}
          resolution={
            <p>
              Afirmativas I, II e III estão corretas. A afirmativa IV é <strong>falsa</strong>:
              os resíduos radioativos têm meia-vida de centenas a milhares de anos, exigindo
              armazenamento seguro por períodos muito longos — esse é um dos maiores desafios
              da energia nuclear.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="5. Transição Energética e Hidrogênio Verde"
          statement={
            <p>
              (ENEM adaptado) O hidrogênio verde tem sido apontado como elemento central da
              transição energética global. O Brasil possui vantagens comparativas para sua
              produção em larga escala porque:
            </p>
          }
          options={[
            { letter: "a", text: "Tem grandes reservas de gás natural, necessário para a produção de hidrogênio cinza." },
            { letter: "b", text: "Possui abundância de fontes renováveis (solar, eólica, hídrica) que permitem a eletrólise da água com energia limpa.", correct: true },
            { letter: "c", text: "Domina tecnologia de fissão nuclear, que é o processo mais eficiente para obter hidrogênio." },
            { letter: "d", text: "Tem o maior pré-sal do mundo, que fornece matéria-prima direta para o hidrogênio." },
          ]}
          resolution={
            <p>
              O <strong>hidrogênio verde</strong> é produzido pela eletrólise da água usando
              energia renovável. O Brasil tem enorme potencial porque dispõe de sol abundante
              (solar), vento regular (eólica) e rios (hídrica) — todas fontes que podem
              alimentar os eletrolisadores. Esse potencial torna o Brasil um dos candidatos
              a maior exportador mundial de hidrogênio verde.
            </p>
          }
        />
      </section>
    </article>
  );
}
