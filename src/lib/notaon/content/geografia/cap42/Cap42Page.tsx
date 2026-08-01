"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap42Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 42</span>
          <h1>Geografia da população mundial: pobreza, desigualdade, fome e indicadores socioeconômicos</h1>
          <p>
            A análise da distribuição da população mundial e de suas condições de vida é fundamental
            para compreender os grandes desafios contemporâneos. Pobreza extrema, desigualdade na
            distribuição de renda, insegurança alimentar e fome persistem como mazelas globais,
            apesar do crescimento econômico das últimas décadas. Indicadores como o IDH, o Índice
            de Gini, o PIB per capita e os ODS permitem quantificar essas realidades e orientar
            políticas públicas nacionais e internacionais.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Distribuição populacional</span>
        <h2>1. A distribuição da população mundial</h2>
        <p>
          A população mundial ultrapassa 8 bilhões de pessoas (2022) e apresenta distribuição
          extremamente desigual pelo planeta. Cerca de 60% da humanidade vive na Ásia, que concentra
          as maiores populações absolutas: China (1,4 bilhão) e Índia (superou a China em 2023, com
          mais de 1,4 bilhão). A África Sub-Saariana é a região de crescimento populacional mais acelerado
          do mundo, devendo duplicar sua população até 2050.
        </p>
        <p>
          A densidade demográfica varia enormemente: Bangladesh é um dos países mais densamente
          povoados do mundo, enquanto países como Mongólia, Austrália e Canadá têm baixíssima
          densidade. No Brasil, a densidade média é de cerca de 25 hab/km², mas com enorme variação:
          o Sudeste ultrapassa 80 hab/km², enquanto a Amazônia tem menos de 4 hab/km².
        </p>
        <p>
          Os fatores que explicam a distribuição da população incluem: clima (evitar regiões extremas —
          desertos, tundras, altas montanhas), disponibilidade de água, fertilidade do solo, acesso
          ao litoral, história de ocupação e oportunidades econômicas. A urbanização global —
          atualmente mais de 55% da população vive em cidades — redistribui a população do campo
          para as metrópoles.
        </p>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Crescimento demográfico</span>
        <h2>2. Crescimento demográfico e transição demográfica</h2>
        <p>
          O crescimento populacional global passou por transformações profundas nos últimos séculos.
          A Teoria da Transição Demográfica descreve um processo pelo qual países passam de altas
          taxas de natalidade e mortalidade (fase pré-industrial) para baixas taxas de ambas
          (fase pós-industrial), com um período intermediário de alto crescimento (quando a
          mortalidade cai antes da natalidade).
        </p>
        <p>
          Países europeus e o Japão já completaram a transição e apresentam taxa de fecundidade
          abaixo do nível de reposição (2,1 filhos por mulher), enfrentando envelhecimento
          populacional. A África Sub-Saariana ainda está na fase de alto crescimento. O Brasil
          está em fase avançada da transição, com taxa de fecundidade em torno de 1,7 filho por
          mulher e perspectiva de declínio populacional após 2050.
        </p>
        <p>
          O "bônus demográfico" — período em que a população em idade ativa é proporcionalmente
          maior que a população dependente (jovens e idosos) — oferece oportunidade única para
          o crescimento econômico. O Brasil vive seu bônus demográfico atualmente, mas ele se
          encerrará nas próximas décadas com o envelhecimento da população.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Taxa de fecundidade total por regiões do mundo (filhos por mulher, 2022)</caption>
            <thead>
              <tr>
                <th>Região</th>
                <th>Taxa de fecundidade total</th>
                <th>Fase da transição demográfica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>África Sub-Saariana</td>
                <td>4,6</td>
                <td>Transição inicial (alta natalidade)</td>
              </tr>
              <tr>
                <td>Ásia do Sul</td>
                <td>2,3</td>
                <td>Transição intermediária</td>
              </tr>
              <tr>
                <td>América Latina e Caribe</td>
                <td>1,9</td>
                <td>Transição avançada</td>
              </tr>
              <tr>
                <td>Brasil</td>
                <td>1,7</td>
                <td>Transição avançada</td>
              </tr>
              <tr>
                <td>América do Norte</td>
                <td>1,7</td>
                <td>Pós-transição</td>
              </tr>
              <tr>
                <td>Europa</td>
                <td>1,5</td>
                <td>Pós-transição (envelhecimento)</td>
              </tr>
              <tr>
                <td>Japão / Coreia do Sul</td>
                <td>1,2–1,3</td>
                <td>Declínio populacional</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Figura 1 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="300" fill="#faf5ff" rx="8"/>
          <text x="300" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
            Teoria da Transição Demográfica
          </text>
          {/* Eixos */}
          <line x1="50" y1="240" x2="560" y2="240" stroke="#94a3b8" strokeWidth="2"/>
          <line x1="50" y1="50" x2="50" y2="240" stroke="#94a3b8" strokeWidth="2"/>
          <text x="305" y="270" textAnchor="middle" fontSize="11" fill="#475569">Tempo (desenvolvimento econômico)</text>
          <text x="20" y="150" textAnchor="middle" fontSize="10" fill="#475569" transform="rotate(-90,20,150)">Taxas (por mil hab.)</text>
          {/* Curva de natalidade */}
          <path d="M 60 80 L 150 78 Q 200 78 250 120 Q 320 170 420 190 L 550 195"
                stroke="#ef4444" strokeWidth="2.5" fill="none"/>
          {/* Curva de mortalidade */}
          <path d="M 60 82 Q 120 130 180 130 Q 250 128 300 150 Q 380 180 460 190 L 550 193"
                stroke="#3b82f6" strokeWidth="2.5" fill="none"/>
          {/* Área de crescimento */}
          <path d="M 150 78 Q 200 78 250 120 Q 320 170 420 190 L 420 185 Q 320 165 250 115 Q 200 73 150 73 Z"
                fill="#fecaca" opacity="0.4"/>
          {/* Fases */}
          <text x="90" y="260" textAnchor="middle" fontSize="9" fill="#475569">Fase 1</text>
          <text x="200" y="260" textAnchor="middle" fontSize="9" fill="#475569">Fase 2</text>
          <text x="330" y="260" textAnchor="middle" fontSize="9" fill="#475569">Fase 3</text>
          <text x="490" y="260" textAnchor="middle" fontSize="9" fill="#475569">Fase 4</text>
          {/* Linhas divisórias de fase */}
          <line x1="145" y1="240" x2="145" y2="50" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3,3"/>
          <line x1="280" y1="240" x2="280" y2="50" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3,3"/>
          <line x1="430" y1="240" x2="430" y2="50" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3,3"/>
          {/* Legenda */}
          <line x1="60" y1="285" x2="90" y2="285" stroke="#ef4444" strokeWidth="2.5"/>
          <text x="95" y="289" fontSize="10" fill="#475569">Natalidade</text>
          <line x1="180" y1="285" x2="210" y2="285" stroke="#3b82f6" strokeWidth="2.5"/>
          <text x="215" y="289" fontSize="10" fill="#475569">Mortalidade</text>
        </svg>
        <figcaption>Teoria da Transição Demográfica: nas fases 1 e 2, alta natalidade e mortalidade caindo geram rápido crescimento; nas fases 3 e 4, ambas as taxas convergem para valores baixos.</figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pobreza global</span>
        <h2>3. Pobreza extrema e suas dimensões no mundo</h2>
        <p>
          O Banco Mundial define a linha de pobreza extrema como a situação de pessoas que vivem com
          menos de US$ 2,15 por dia (em paridade de poder de compra, atualizada em 2022). Apesar da
          redução significativa na proporção de pessoas em pobreza extrema nas últimas décadas —
          de 36% da população mundial em 1990 para menos de 10% em 2019 —, a pandemia de COVID-19
          reverteu parte desses avanços, empurrando dezenas de milhões de volta à pobreza.
        </p>
        <p>
          A pobreza não é apenas falta de renda: é um fenômeno multidimensional que engloba privação
          de acesso a saúde, educação, moradia digna, água potável, saneamento, segurança alimentar
          e participação na vida social. O Índice de Pobreza Multidimensional (IPM), desenvolvido
          pelo PNUD, capta melhor essa complexidade.
        </p>
        <p>
          A distribuição geográfica da pobreza extrema é concentrada: a África Sub-Saariana abriga
          a maioria dos pobres extremos do mundo (cerca de 60% do total), seguida pelo Sul da Ásia.
          Na América Latina, o Brasil, apesar de ser uma economia de renda média-alta, ainda possui
          dezenas de milhões de pessoas em situação de pobreza ou vulnerabilidade.
        </p>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Desigualdade de renda</span>
        <h2>4. Desigualdade de renda: o Índice de Gini e a concentração de riqueza</h2>
        <p>
          A desigualdade na distribuição de renda e riqueza é um dos problemas centrais da economia
          global contemporânea. O Índice de Gini é o principal indicador utilizado para medir a
          desigualdade de renda: varia de 0 (igualdade perfeita) a 1 (ou 100 em escala percentual),
          sendo que quanto maior o valor, maior a desigualdade.
        </p>
        <p>
          O Brasil tem historicamente um dos maiores índices de Gini do mundo, oscilando entre 0,50
          e 0,55. Para comparação, países escandinavos como Dinamarca e Suécia apresentam Gini em
          torno de 0,29-0,30. A África do Sul tem o maior Gini do mundo, em torno de 0,63.
        </p>
        <p>
          Além do Gini, a concentração de riqueza é medida pela parcela da renda total detida pelos
          mais ricos. Segundo relatório da Oxfam, os 10 homens mais ricos do mundo detêm mais riqueza
          que os 3,1 bilhões de pessoas mais pobres juntas. Nos países em desenvolvimento, a
          desigualdade de riqueza é ainda mais extrema que a desigualdade de renda.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Índice de Gini em países selecionados (dados recentes)</caption>
            <thead>
              <tr>
                <th>País</th>
                <th>Índice de Gini</th>
                <th>Nível de desigualdade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dinamarca / Finlândia</td>
                <td>0,28 – 0,29</td>
                <td>Muito baixo</td>
              </tr>
              <tr>
                <td>Alemanha / França</td>
                <td>0,31 – 0,32</td>
                <td>Baixo</td>
              </tr>
              <tr>
                <td>China</td>
                <td>0,38</td>
                <td>Moderado</td>
              </tr>
              <tr>
                <td>EUA</td>
                <td>0,41</td>
                <td>Moderado-alto</td>
              </tr>
              <tr>
                <td>Brasil</td>
                <td>0,52</td>
                <td>Alto</td>
              </tr>
              <tr>
                <td>África do Sul</td>
                <td>0,63</td>
                <td>Muito alto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">IDH</span>
        <h2>5. O Índice de Desenvolvimento Humano (IDH)</h2>
        <p>
          O Índice de Desenvolvimento Humano (IDH) foi criado pelo economista paquistanês Mahbub ul Haq
          em parceria com o indiano Amartya Sen, para o PNUD, em 1990. O IDH surgiu como crítica à
          visão de desenvolvimento baseada exclusivamente no PIB per capita, incorporando dimensões
          como saúde e educação.
        </p>
        <p>
          O IDH é composto por três dimensões: (1) Vida longa e saudável — medida pela expectativa
          de vida ao nascer; (2) Acesso ao conhecimento — medido por anos de escolaridade da população
          adulta e anos esperados de escolaridade para crianças; (3) Padrão de vida digno — medido
          pelo Produto Nacional Bruto (PNB) per capita em paridade de poder de compra.
        </p>
        <p>
          O IDH varia de 0 a 1, sendo classificado em muito alto (acima de 0,800), alto (0,700-0,799),
          médio (0,550-0,699) e baixo (abaixo de 0,550). O Brasil em 2022 apresentava IDH de 0,754,
          classificado como "alto". Os países com maior IDH são Suíça, Noruega e Islândia (acima de 0,950).
          Os menores IDH estão na África Sub-Saariana (Niger, Chad, África Central).
        </p>
      </section>

      {/* ── Figura 2 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="300" fill="#f0f9ff" rx="8"/>
          <text x="300" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
            Composição do Índice de Desenvolvimento Humano (IDH)
          </text>
          {/* IDH central */}
          <circle cx="300" cy="155" r="45" fill="#0ea5e9" opacity="0.9"/>
          <text x="300" y="150" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">IDH</text>
          <text x="300" y="167" textAnchor="middle" fontSize="10" fill="white">0 a 1</text>
          {/* Dimensão 1 - Saúde */}
          <circle cx="120" cy="100" r="55" fill="#22c55e" opacity="0.85"/>
          <text x="120" y="88" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Saúde</text>
          <text x="120" y="104" textAnchor="middle" fontSize="9" fill="white">Expectativa de</text>
          <text x="120" y="118" textAnchor="middle" fontSize="9" fill="white">vida ao nascer</text>
          <line x1="170" y1="115" x2="258" y2="140" stroke="#64748b" strokeWidth="1.5"/>
          {/* Dimensão 2 - Educação */}
          <circle cx="300" cy="50" r="55" fill="#f59e0b" opacity="0.85"/>
          <text x="300" y="38" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Educação</text>
          <text x="300" y="54" textAnchor="middle" fontSize="9" fill="white">Anos de</text>
          <text x="300" y="68" textAnchor="middle" fontSize="9" fill="white">escolaridade</text>
          <line x1="300" y1="100" x2="300" y2="112" stroke="#64748b" strokeWidth="1.5"/>
          {/* Dimensão 3 - Renda */}
          <circle cx="480" cy="100" r="55" fill="#8b5cf6" opacity="0.85"/>
          <text x="480" y="88" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Renda</text>
          <text x="480" y="104" textAnchor="middle" fontSize="9" fill="white">PNB per capita</text>
          <text x="480" y="118" textAnchor="middle" fontSize="9" fill="white">(PPC)</text>
          <line x1="430" y1="115" x2="342" y2="140" stroke="#64748b" strokeWidth="1.5"/>
          {/* Faixas de IDH */}
          <rect x="30" y="220" width="540" height="65" fill="#f8fafc" rx="6" stroke="#e2e8f0" strokeWidth="1"/>
          <text x="300" y="237" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#475569">Classificação do IDH</text>
          <rect x="50" y="248" width="100" height="16" fill="#22c55e" rx="3"/>
          <text x="100" y="260" textAnchor="middle" fontSize="9" fill="white">Muito alto &gt; 0,800</text>
          <rect x="170" y="248" width="100" height="16" fill="#84cc16" rx="3"/>
          <text x="220" y="260" textAnchor="middle" fontSize="9" fill="white">Alto 0,700–0,799</text>
          <rect x="290" y="248" width="100" height="16" fill="#f59e0b" rx="3"/>
          <text x="340" y="260" textAnchor="middle" fontSize="9" fill="white">Médio 0,550–0,699</text>
          <rect x="410" y="248" width="100" height="16" fill="#ef4444" rx="3"/>
          <text x="460" y="260" textAnchor="middle" fontSize="9" fill="white">Baixo &lt; 0,550</text>
          <text x="300" y="277" textAnchor="middle" fontSize="9" fill="#94a3b8">Brasil: 0,754 (alto) — Suíça / Noruega: acima de 0,950</text>
        </svg>
        <figcaption>O IDH combina três dimensões — saúde, educação e renda — em um único índice que varia de 0 a 1, permitindo comparações internacionais de desenvolvimento humano.</figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fome e segurança alimentar</span>
        <h2>6. Fome, insegurança alimentar e o Mapa da Fome</h2>
        <p>
          A fome e a insegurança alimentar persistem como desafios globais graves. A FAO (Organização
          das Nações Unidas para a Alimentação e Agricultura) estima que mais de 700 milhões de pessoas
          sofrem de fome crônica no mundo, e cerca de 2,3 bilhões vivem em situação de insegurança
          alimentar moderada ou grave. O paradoxo é que o mundo produz alimentos suficientes para
          toda a população — o problema é a distribuição e o acesso.
        </p>
        <p>
          A fome tem causas múltiplas: pobreza extrema (incapacidade de comprar alimentos),
          guerras e conflitos (que destroem sistemas alimentares), mudanças climáticas (que afetam
          a produção agrícola), má governança e corrupção, especulação nos preços de commodities
          alimentares e desperdício alimentar (cerca de 1/3 de todos os alimentos produzidos no mundo
          é desperdiçado).
        </p>
        <p>
          A pandemia de COVID-19 e a guerra na Ucrânia (2022) agravaram a insegurança alimentar
          global ao interromper cadeias de abastecimento e elevar os preços de alimentos e fertilizantes.
          O Brasil retornou ao "Mapa da Fome" da ONU em 2014-2018 e novamente no início da década de 2020,
          após avanços significativos na erradicação da fome no governo Lula I (2003-2010).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Regiões com maior prevalência de subnutrição no mundo (FAO, dados recentes)</caption>
            <thead>
              <tr>
                <th>Região</th>
                <th>Pessoas subnutridas (aprox.)</th>
                <th>Prevalência (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>África Sub-Saariana</td>
                <td>282 milhões</td>
                <td>22%</td>
              </tr>
              <tr>
                <td>Ásia do Sul</td>
                <td>333 milhões</td>
                <td>16%</td>
              </tr>
              <tr>
                <td>Ásia Oriental e Pacífico</td>
                <td>54 milhões</td>
                <td>3%</td>
              </tr>
              <tr>
                <td>América Latina e Caribe</td>
                <td>48 milhões</td>
                <td>7%</td>
              </tr>
              <tr>
                <td>Europa e Ásia Central</td>
                <td>4 milhões</td>
                <td>&lt; 2,5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">PIB e renda</span>
        <h2>7. PIB per capita, poder de compra e limites do indicador</h2>
        <p>
          O Produto Interno Bruto (PIB) é a soma de todos os bens e serviços finais produzidos em um
          país em determinado período. O PIB per capita (PIB dividido pela população) é um indicador
          amplamente utilizado para comparar o nível de desenvolvimento econômico entre países.
        </p>
        <p>
          Para comparações internacionais, utiliza-se a Paridade do Poder de Compra (PPC ou PPP em
          inglês), que ajusta os valores monetários pelas diferenças no custo de vida entre países.
          Assim, um dólar tem poder de compra diferente nos EUA, no Brasil e na Índia — a PPC permite
          comparar o poder real de compra das rendas.
        </p>
        <p>
          O PIB per capita tem limitações importantes como indicador de bem-estar: não capta a
          distribuição da renda (um país pode ter alto PIB per capita com enorme desigualdade),
          não mede bens e serviços fora do mercado (trabalho doméstico, economia informal), não
          inclui o efeito de externalidades negativas (poluição, degradação ambiental) e não reflete
          a qualidade de vida subjetiva. Por isso, economistas propõem indicadores complementares
          ou alternativos, como o IDH e o IDHAD (IDH Ajustado à Desigualdade).
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Migrações</span>
        <h2>8. Migrações internacionais e deslocamentos forçados</h2>
        <p>
          As migrações internacionais são reflexo das desigualdades globais. Pessoas migram em busca
          de melhores condições de vida, trabalho, segurança e oportunidades que não encontram em seus
          países de origem. O número de migrantes internacionais supera 280 milhões de pessoas (OIM, 2022),
          equivalente a 3,6% da população mundial.
        </p>
        <p>
          Os deslocamentos forçados — refugiados, solicitantes de asilo e deslocados internos — atingiram
          recordes históricos. Segundo o ACNUR, em 2022, mais de 103 milhões de pessoas foram deslocadas
          à força no mundo, fugindo de guerras, perseguições e crises humanitárias. Os principais países
          geradores de refugiados incluem Síria, Venezuela, Afeganistão, Myanmar e Ucrânia.
        </p>
        <p>
          As migrações climáticas — deslocamentos motivados por desastres naturais e degradação ambiental
          — tendem a aumentar nas próximas décadas. Ilhas do Pacífico, Bangladesh, delta do Nilo e
          regiões costeiras de baixa altitude enfrentam risco de inundação pela elevação do nível do mar,
          potencializando grandes fluxos migratórios.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Urbanização e metrópoles</span>
        <h2>9. Urbanização global, megacidades e desigualdades urbanas</h2>
        <p>
          Em 2007, pela primeira vez na história, a população urbana superou a rural globalmente.
          Atualmente, mais de 55% da humanidade vive em cidades, proporção que deve atingir 68% até
          2050. A urbanização é mais intensa nos países em desenvolvimento, onde o crescimento das
          cidades frequentemente supera a capacidade de provisão de infraestrutura e serviços públicos.
        </p>
        <p>
          As megacidades — aglomerações urbanas com mais de 10 milhões de habitantes — concentram-se
          crescentemente no Sul global. Tóquio é a maior do mundo, com cerca de 37 milhões de habitantes.
          São Paulo (22 milhões) e Rio de Janeiro (13 milhões) são as megacidades brasileiras. O Cairo,
          Dhaka, Mumbai e Lagos estão entre as maiores do mundo.
        </p>
        <p>
          As desigualdades urbanas manifestam-se especialmente nas favelas, assentamentos informais e
          comunidades periféricas. Segundo o PNUD, cerca de 1 bilhão de pessoas vive em favelas no
          mundo. No Brasil, aproximadamente 16 milhões de pessoas habitam favelas, concentradas nas
          grandes metrópoles. Esses espaços carecem de saneamento, transporte, educação e segurança
          de qualidade.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Maiores metrópoles do mundo por população (2022, estimativa)</caption>
            <thead>
              <tr>
                <th>Metrópole</th>
                <th>País</th>
                <th>População (milhões)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tóquio</td>
                <td>Japão</td>
                <td>37,4</td>
              </tr>
              <tr>
                <td>Délhi</td>
                <td>Índia</td>
                <td>32,9</td>
              </tr>
              <tr>
                <td>Xangai</td>
                <td>China</td>
                <td>29,0</td>
              </tr>
              <tr>
                <td>Dhaka</td>
                <td>Bangladesh</td>
                <td>22,5</td>
              </tr>
              <tr>
                <td>São Paulo</td>
                <td>Brasil</td>
                <td>22,0</td>
              </tr>
              <tr>
                <td>Cidade do México</td>
                <td>México</td>
                <td>21,6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">ODS e agenda global</span>
        <h2>10. Os ODS e o combate à pobreza e à desigualdade</h2>
        <p>
          A Agenda 2030 da ONU estabelece os 17 Objetivos de Desenvolvimento Sustentável (ODS), com
          destaque para o ODS 1 (erradicação da pobreza), o ODS 2 (fome zero e agricultura sustentável)
          e o ODS 10 (redução das desigualdades). Esses objetivos reconhecem que a pobreza, a fome e
          a desigualdade são fenômenos interligados que exigem abordagens integradas.
        </p>
        <p>
          O progresso na redução da pobreza extrema antes da pandemia foi significativo, especialmente
          na China e no Sul da Ásia. Contudo, o COVID-19 reverteu décadas de avanços, aumentando a
          pobreza e a insegurança alimentar em todo o mundo. O Banco Mundial estima que a pandemia
          empurrou entre 88 e 115 milhões de pessoas de volta à pobreza extrema.
        </p>
        <p>
          O debate contemporâneo sobre desigualdade incorpora dimensões além da renda: desigualdades
          de gênero, raça, origem étnica, território e acesso a tecnologia. A "desigualdade digital"
          — diferença no acesso a internet e tecnologias digitais entre países e grupos sociais —
          é um novo vetor de exclusão que tende a aprofundar desigualdades existentes se não for
          combatido com políticas específicas.
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
              O Índice de Desenvolvimento Humano (IDH) é amplamente utilizado para medir o nível de
              desenvolvimento de países. Sobre a composição do IDH, assinale a alternativa CORRETA:
            </p>
          }
          options={[
            { letter: "a", text: "O IDH é composto apenas pelo PIB per capita e pela taxa de mortalidade infantil de cada país." },
            { letter: "b", text: "O IDH combina três dimensões — expectativa de vida (saúde), anos de escolaridade (educação) e renda per capita (PNB per capita em PPC) —, variando de 0 a 1.", correct: true },
            { letter: "c", text: "O IDH é calculado exclusivamente com base no PIB per capita ajustado pela paridade de poder de compra, sendo equivalente ao PIB per capita em PPC." },
            { letter: "d", text: "O IDH inclui indicadores de democracia, liberdade de imprensa e participação política além dos indicadores econômicos e sociais." },
            { letter: "e", text: "O IDH foi criado pelo Banco Mundial nos anos 1960 para substituir o PIB como medida de desenvolvimento." },
          ]}
          resolution={
            <p>
              O IDH foi criado pelo PNUD em 1990, por Mahbub ul Haq e Amartya Sen, como alternativa
              ao PIB per capita para medir desenvolvimento. Combina três dimensões: (1) saúde, medida
              pela expectativa de vida ao nascer; (2) educação, medida por anos de escolaridade da
              população adulta e anos esperados de escolaridade; (3) renda, medida pelo PNB per capita
              em paridade de poder de compra. O índice varia de 0 a 1, sendo classificado em muito
              alto, alto, médio e baixo.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              Sobre a distribuição da população mundial e o crescimento demográfico, é CORRETO afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "A Europa é a região com crescimento populacional mais acelerado do mundo, impulsionada por altas taxas de natalidade." },
            { letter: "b", text: "A China ainda é o país mais populoso do mundo em 2024, mantendo-se à frente da Índia em número de habitantes." },
            { letter: "c", text: "A África Sub-Saariana é a região com crescimento populacional mais acelerado do mundo, com taxa de fecundidade superior a 4 filhos por mulher, e deve dobrar sua população até 2050.", correct: true },
            { letter: "d", text: "O Brasil apresenta alta taxa de crescimento populacional, com taxa de fecundidade acima de 3 filhos por mulher, gerando pressão sobre serviços públicos." },
            { letter: "e", text: "A maioria da população mundial vive na América do Norte e Europa, regiões com maiores níveis de desenvolvimento humano." },
          ]}
          resolution={
            <p>
              A África Sub-Saariana é a região de crescimento demográfico mais acelerado do mundo,
              com taxa de fecundidade em torno de 4,6 filhos por mulher. A região deve dobrar sua
              população até 2050, concentrando a maior parte do crescimento populacional global.
              A China foi superada pela Índia em população total em 2023. O Brasil está em fase
              avançada da transição demográfica, com taxa de fecundidade de apenas 1,7 filho por
              mulher. A Ásia, não a América do Norte e Europa, abriga 60% da população mundial.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              O Índice de Gini é utilizado para medir a desigualdade de renda. O Brasil historicamente
              apresenta um dos maiores Índices de Gini do mundo. Isso significa que:
            </p>
          }
          options={[
            { letter: "a", text: "O Brasil é um dos países com maior pobreza absoluta do mundo, com a maioria da população vivendo abaixo da linha de pobreza extrema do Banco Mundial." },
            { letter: "b", text: "A distribuição de renda no Brasil é muito desigual, com grande concentração de renda nas camadas mais ricas, apesar de o país ter uma das maiores economias do mundo em termos absolutos.", correct: true },
            { letter: "c", text: "O Gini elevado significa que o Brasil tem baixo PIB per capita, equivalente ao de países africanos de baixa renda." },
            { letter: "d", text: "O alto Gini brasileiro indica que há muita renda concentrada nas classes médias, sem extremos de pobreza ou riqueza." },
            { letter: "e", text: "O Brasil com Gini de 0,52 tem desigualdade de renda semelhante à de países nórdicos como Dinamarca e Suécia." },
          ]}
          resolution={
            <p>
              O Índice de Gini mede a desigualdade na distribuição de renda. O Brasil, com Gini em
              torno de 0,52, é um dos países mais desiguais do mundo. Isso não significa que seja um
              país pobre em termos absolutos — o Brasil é uma das 10 maiores economias do mundo —,
              mas que a renda é muito concentrada: os mais ricos detêm parcela desproporcional da
              renda nacional, enquanto vastos segmentos da população têm acesso limitado à riqueza
              gerada. Para comparação, países nórdicos apresentam Gini em torno de 0,28-0,30.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              A fome e a insegurança alimentar persistem como desafios globais. Segundo os organismos
              internacionais, qual é o principal paradoxo da fome no mundo contemporâneo?
            </p>
          }
          options={[
            { letter: "a", text: "O paradoxo é que a fome ocorre principalmente em países ricos, onde a abundância de alimentos industrializados leva ao desperdício e à desnutrição simultâneos." },
            { letter: "b", text: "O mundo produz alimentos suficientes para alimentar toda a população, mas a fome persiste porque a distribuição é desigual e o acesso econômico aos alimentos é insuficiente para populações pobres.", correct: true },
            { letter: "c", text: "O paradoxo da fome é que ela só existe em países sem agricultura, demonstrando que países agrícolas estão sempre protegidos da insegurança alimentar." },
            { letter: "d", text: "O paradoxo é que tecnologias agrícolas modernas reduziram tanto a produção quanto a fome globalmente, demonstrando que baixa produtividade é a causa principal." },
            { letter: "e", text: "A fome é paradoxal porque ocorre exclusivamente em países com alta densidade demográfica, enquanto países pouco populosos nunca enfrentam insegurança alimentar." },
          ]}
          resolution={
            <p>
              O principal paradoxo da fome contemporânea é que o mundo produz alimentos suficientes
              para alimentar todos os seus habitantes, mas mais de 700 milhões de pessoas ainda sofrem
              de fome crônica. O problema não é a produção insuficiente, mas a distribuição desigual
              e o acesso econômico: populações em situação de pobreza extrema não têm renda suficiente
              para adquirir alimentos no mercado. Além disso, cerca de 1/3 de todos os alimentos
              produzidos globalmente é desperdiçado, enquanto bilhões passam fome. Guerras, crises
              climáticas e má governança agravam o problema.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              Analise as afirmativas sobre indicadores de desenvolvimento:
              <br/><br/>
              I. O PIB per capita é um indicador suficiente para medir o bem-estar de uma população,
              pois capta tanto o crescimento econômico quanto a distribuição de renda.
              <br/>
              II. O IDH é superior ao PIB per capita como medida de desenvolvimento por incluir
              dimensões de saúde e educação, além da renda.
              <br/>
              III. O Índice de Gini mede a desigualdade na distribuição de renda, sendo que valores
              próximos a 1 indicam maior desigualdade.
              <br/><br/>
              Estão CORRETAS apenas:
            </p>
          }
          options={[
            { letter: "a", text: "Apenas I" },
            { letter: "b", text: "Apenas II" },
            { letter: "c", text: "Apenas III" },
            { letter: "d", text: "Apenas II e III", correct: true },
            { letter: "e", text: "I, II e III" },
          ]}
          resolution={
            <p>
              A afirmativa I é FALSA: o PIB per capita não mede a distribuição de renda — um país
              pode ter alto PIB per capita com enorme desigualdade, onde a riqueza se concentra nos
              mais ricos enquanto a maioria permanece pobre. Também não capta externalidades
              negativas, trabalho doméstico ou economia informal. A afirmativa II é VERDADEIRA: o
              IDH incorpora saúde (expectativa de vida) e educação (anos de escolaridade), além
              da renda, sendo mais abrangente que o PIB per capita. A afirmativa III é VERDADEIRA:
              o Índice de Gini varia de 0 (igualdade perfeita) a 1 (desigualdade máxima — toda a
              renda concentrada em uma pessoa). Portanto, estão corretas apenas II e III.
            </p>
          }
        />
      </section>
    </article>
  );
}
