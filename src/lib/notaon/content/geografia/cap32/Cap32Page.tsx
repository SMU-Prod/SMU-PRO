"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap32Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 32</span>
          <h1>Blocos econômicos: Mercosul, União Europeia, USMCA, ASEAN e BRICS</h1>
          <p>
            A formação de blocos econômicos é uma das principais características da globalização contemporânea.
            Países se unem em acordos regionais para reduzir barreiras comerciais, fortalecer suas economias e
            aumentar sua influência geopolítica. Do Mercosul na América do Sul à União Europeia no continente
            europeu, esses blocos redefinem as relações de poder e as dinâmicas do comércio internacional,
            impactando diretamente o desenvolvimento econômico e social de seus membros.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Integração regional</span>
        <h2>1. O que são blocos econômicos?</h2>
        <p>
          Blocos econômicos são acordos entre países que visam à integração de suas economias, com objetivo de
          facilitar o comércio, reduzir tarifas alfandegárias e promover o desenvolvimento conjunto. Existem
          diferentes graus de integração econômica, que vão desde acordos de livre comércio até a formação de
          uniões econômicas plenas.
        </p>
        <p>
          O processo de formação de blocos se intensificou após a Segunda Guerra Mundial, especialmente durante
          a Guerra Fria, quando países buscavam alianças estratégicas. Com o fim da bipolaridade e o avanço da
          globalização nos anos 1990, novos blocos surgiram e os existentes se aprofundaram, redefinindo o mapa
          econômico mundial.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Níveis de integração econômica entre blocos</caption>
            <thead>
              <tr>
                <th>Nível</th>
                <th>Características</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Zona de Livre Comércio</td>
                <td>Eliminação de tarifas entre membros; política externa independente</td>
                <td>USMCA (antigo NAFTA)</td>
              </tr>
              <tr>
                <td>União Aduaneira</td>
                <td>Zona de livre comércio + tarifa externa comum (TEC)</td>
                <td>Mercosul</td>
              </tr>
              <tr>
                <td>Mercado Comum</td>
                <td>União aduaneira + livre circulação de pessoas e capitais</td>
                <td>União Europeia (fase histórica)</td>
              </tr>
              <tr>
                <td>União Econômica</td>
                <td>Mercado comum + políticas econômicas harmonizadas</td>
                <td>União Europeia atual</td>
              </tr>
              <tr>
                <td>União Monetária</td>
                <td>União econômica + moeda única</td>
                <td>Zona do Euro</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">América do Sul</span>
        <h2>2. Mercosul: o bloco sul-americano</h2>
        <p>
          O Mercado Comum do Sul (Mercosul) foi criado em 1991 pelo Tratado de Assunção, reunindo inicialmente
          Brasil, Argentina, Uruguai e Paraguai. A Venezuela integrou-se em 2012, mas foi suspensa em 2016 por
          violações à cláusula democrática. A Bolívia iniciou processo de adesão em 2015, ainda em andamento.
        </p>
        <p>
          O Mercosul funciona como uma união aduaneira com Tarifa Externa Comum (TEC) e livre circulação de
          mercadorias entre os membros. O bloco representa cerca de 70% do território da América do Sul e tem
          como objetivos fortalecer o intercâmbio comercial, promover o desenvolvimento econômico sustentável e
          intensificar a integração política e cultural entre os países membros.
        </p>
        <p>
          Entre os desafios do Mercosul estão as assimetrias econômicas entre os membros — o Brasil responde
          por mais de 70% do PIB do bloco —, as divergências políticas recorrentes e a dificuldade de avançar
          em acordos comerciais com blocos externos, como o longo processo de negociação do acordo com a União
          Europeia, concluído em 2019 mas ainda não ratificado.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Membros e associados do Mercosul</caption>
            <thead>
              <tr>
                <th>País</th>
                <th>Status</th>
                <th>Ano de entrada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brasil</td>
                <td>Membro pleno</td>
                <td>1991</td>
              </tr>
              <tr>
                <td>Argentina</td>
                <td>Membro pleno</td>
                <td>1991</td>
              </tr>
              <tr>
                <td>Uruguai</td>
                <td>Membro pleno</td>
                <td>1991</td>
              </tr>
              <tr>
                <td>Paraguai</td>
                <td>Membro pleno</td>
                <td>1991</td>
              </tr>
              <tr>
                <td>Chile</td>
                <td>Estado associado</td>
                <td>1996</td>
              </tr>
              <tr>
                <td>Bolívia</td>
                <td>Em processo de adesão</td>
                <td>2015</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SVG Figure 1 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
          {/* Fundo */}
          <rect width="600" height="320" fill="#f0f4f8" rx="12" />
          <text x="300" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e293b">
            Principais Blocos Econômicos Mundiais
          </text>

          {/* Mercosul */}
          <rect x="20" y="50" width="130" height="110" rx="8" fill="#3b82f6" opacity="0.85" />
          <text x="85" y="80" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">MERCOSUL</text>
          <text x="85" y="100" textAnchor="middle" fontSize="10" fill="white">4 membros plenos</text>
          <text x="85" y="116" textAnchor="middle" fontSize="10" fill="white">América do Sul</text>
          <text x="85" y="132" textAnchor="middle" fontSize="10" fill="white">União aduaneira</text>
          <text x="85" y="148" textAnchor="middle" fontSize="10" fill="white">Desde 1991</text>

          {/* União Europeia */}
          <rect x="165" y="50" width="130" height="110" rx="8" fill="#f59e0b" opacity="0.85" />
          <text x="230" y="80" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">UNIÃO</text>
          <text x="230" y="96" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">EUROPEIA</text>
          <text x="230" y="116" textAnchor="middle" fontSize="10" fill="white">27 membros</text>
          <text x="230" y="132" textAnchor="middle" fontSize="10" fill="white">Europa</text>
          <text x="230" y="148" textAnchor="middle" fontSize="10" fill="white">União econômica</text>

          {/* USMCA */}
          <rect x="310" y="50" width="130" height="110" rx="8" fill="#10b981" opacity="0.85" />
          <text x="375" y="80" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">USMCA</text>
          <text x="375" y="100" textAnchor="middle" fontSize="10" fill="white">3 membros</text>
          <text x="375" y="116" textAnchor="middle" fontSize="10" fill="white">América do Norte</text>
          <text x="375" y="132" textAnchor="middle" fontSize="10" fill="white">Livre comércio</text>
          <text x="375" y="148" textAnchor="middle" fontSize="10" fill="white">Desde 2020</text>

          {/* ASEAN */}
          <rect x="455" y="50" width="130" height="110" rx="8" fill="#8b5cf6" opacity="0.85" />
          <text x="520" y="80" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">ASEAN</text>
          <text x="520" y="100" textAnchor="middle" fontSize="10" fill="white">10 membros</text>
          <text x="520" y="116" textAnchor="middle" fontSize="10" fill="white">Sudeste Asiático</text>
          <text x="520" y="132" textAnchor="middle" fontSize="10" fill="white">Coop. regional</text>
          <text x="520" y="148" textAnchor="middle" fontSize="10" fill="white">Desde 1967</text>

          {/* BRICS */}
          <rect x="165" y="185" width="270" height="110" rx="8" fill="#ef4444" opacity="0.85" />
          <text x="300" y="215" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">BRICS</text>
          <text x="300" y="235" textAnchor="middle" fontSize="10" fill="white">Brasil · Rússia · Índia · China · África do Sul</text>
          <text x="300" y="253" textAnchor="middle" fontSize="10" fill="white">+ novos membros desde 2024</text>
          <text x="300" y="271" textAnchor="middle" fontSize="10" fill="white">Cooperação econômica Sul-Sul</text>
          <text x="300" y="289" textAnchor="middle" fontSize="10" fill="white">Foco em desenvolvimento e alternativas ao dólar</text>
        </svg>
        <figcaption>Principais blocos econômicos e suas características fundamentais</figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Europa unida</span>
        <h2>3. União Europeia: o bloco mais integrado do mundo</h2>
        <p>
          A União Europeia (UE) é o mais avançado processo de integração regional do mundo, reunindo 27 países
          após a saída do Reino Unido (Brexit) em 2020. Sua origem remonta ao pós-Segunda Guerra Mundial, com a
          criação da Comunidade Europeia do Carvão e do Aço (CECA) em 1951, evoluindo até o Tratado de
          Maastricht (1992), que formalizou a União Europeia.
        </p>
        <p>
          A UE conta com instituições supranacionais como o Parlamento Europeu, a Comissão Europeia, o
          Conselho da UE e o Tribunal de Justiça Europeu. A zona do euro reúne 20 dos 27 membros que adotam o
          euro como moeda oficial. A livre circulação de pessoas, mercadorias, serviços e capitais — as quatro
          liberdades fundamentais — distingue a UE de qualquer outro bloco.
        </p>
        <p>
          O bloco enfrenta desafios significativos: a crise dos refugiados, o populismo nacionalista, as
          desigualdades entre países do norte e do sul europeu (especialmente após a crise da dívida grega),
          e os impactos econômicos da pandemia de COVID-19. O Brexit demonstrou que a integração pode ser
          revertida e abriu precedentes para movimentos eurcéticos em outros países.
        </p>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">América do Norte</span>
        <h2>4. USMCA: o acordo norte-americano</h2>
        <p>
          O Acordo Estados Unidos–México–Canadá (USMCA, na sigla em inglês) entrou em vigor em julho de 2020,
          substituindo o NAFTA (Acordo de Livre Comércio da América do Norte), criado em 1994. A renegociação
          foi impulsionada pelo governo Trump, que considerava o NAFTA desfavorável aos trabalhadores americanos.
        </p>
        <p>
          O USMCA mantém a zona de livre comércio entre os três países, mas introduz novas regras sobre origem
          de produtos — especialmente para o setor automotivo —, maior proteção à propriedade intelectual,
          padrões trabalhistas mínimos para o México e mecanismos mais rígidos de resolução de disputas. O
          comércio entre os três países representa trilhões de dólares anuais e envolve cadeias produtivas
          profundamente integradas.
        </p>
      </section>

      {/* ── SVG Figure 2 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="280" fill="#f8fafc" rx="12" />
          <text x="300" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1e293b">
            BRICS: Composição e Expansão
          </text>

          {/* Linha do tempo */}
          <line x1="80" y1="140" x2="520" y2="140" stroke="#cbd5e1" strokeWidth="3" />

          {/* 2009 - Fundação */}
          <circle cx="120" cy="140" r="12" fill="#3b82f6" />
          <text x="120" y="170" textAnchor="middle" fontSize="11" fill="#475569">2009</text>
          <text x="120" y="185" textAnchor="middle" fontSize="10" fill="#64748b">Fundação</text>
          <text x="120" y="200" textAnchor="middle" fontSize="10" fill="#64748b">BRIC</text>
          <text x="120" y="110" textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="bold">BR+RU</text>
          <text x="120" y="125" textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="bold">+IN+CN</text>

          {/* 2010 - África do Sul */}
          <circle cx="230" cy="140" r="12" fill="#10b981" />
          <text x="230" y="170" textAnchor="middle" fontSize="11" fill="#475569">2010</text>
          <text x="230" y="185" textAnchor="middle" fontSize="10" fill="#64748b">+África</text>
          <text x="230" y="200" textAnchor="middle" fontSize="10" fill="#64748b">do Sul</text>
          <text x="230" y="110" textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="bold">BRICS</text>
          <text x="230" y="125" textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="bold">5 países</text>

          {/* 2023 - Convite novos membros */}
          <circle cx="370" cy="140" r="12" fill="#f59e0b" />
          <text x="370" y="170" textAnchor="middle" fontSize="11" fill="#475569">2023</text>
          <text x="370" y="185" textAnchor="middle" fontSize="10" fill="#64748b">Cúpula</text>
          <text x="370" y="200" textAnchor="middle" fontSize="10" fill="#64748b">Joanesburgo</text>
          <text x="370" y="110" textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="bold">6 países</text>
          <text x="370" y="125" textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="bold">convidados</text>

          {/* 2024 - Expansão */}
          <circle cx="490" cy="140" r="12" fill="#ef4444" />
          <text x="490" y="170" textAnchor="middle" fontSize="11" fill="#475569">2024</text>
          <text x="490" y="185" textAnchor="middle" fontSize="10" fill="#64748b">Expansão</text>
          <text x="490" y="200" textAnchor="middle" fontSize="10" fill="#64748b">BRICS+</text>
          <text x="490" y="110" textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="bold">+Etiópia</text>
          <text x="490" y="125" textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="bold">+Egito+EAU</text>

          {/* Legenda */}
          <text x="300" y="248" textAnchor="middle" fontSize="11" fill="#64748b">
            O BRICS representa cerca de 40% da população mundial e 25% do PIB global
          </text>
        </svg>
        <figcaption>Linha do tempo da evolução e expansão do BRICS (2009–2024)</figcaption>
      </figure>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sudeste Asiático</span>
        <h2>5. ASEAN: cooperação no Sudeste Asiático</h2>
        <p>
          A Associação das Nações do Sudeste Asiático (ASEAN) foi fundada em 1967 por Tailândia, Filipinas,
          Indonésia, Malásia e Singapura, num contexto de Guerra Fria e preocupações com o avanço do comunismo
          na região. Atualmente conta com 10 membros, incluindo Vietnã, Camboja, Laos, Myanmar e Brunei.
        </p>
        <p>
          A ASEAN se diferencia dos demais blocos por seu princípio de não intervenção nos assuntos internos
          dos países membros, o que limita sua capacidade de pressionar por reformas políticas e democráticas.
          Economicamente, o bloco criou a Área de Livre Comércio da ASEAN (AFTA) e tem negociado acordos com
          China, Japão, Coreia do Sul, Índia, Austrália e Nova Zelândia, buscando ampliar sua inserção
          comercial global.
        </p>
        <p>
          A região do Sudeste Asiático é estratégica pelo estreito de Malaca, por onde passa grande parte do
          comércio mundial entre o Oceano Índico e o Mar do Sul da China. A ascensão da China na região tem
          gerado tensões territoriais, especialmente no Mar do Sul da China, onde múltiplos membros da ASEAN
          têm disputas com Pequim.
        </p>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cooperação Sul-Sul</span>
        <h2>6. BRICS: potências emergentes em aliança</h2>
        <p>
          O acrônimo BRIC foi criado em 2001 pelo economista Jim O'Neill, do banco Goldman Sachs, para
          identificar as economias emergentes com maior potencial de crescimento: Brasil, Rússia, Índia e China.
          Em 2009, os quatro países realizaram sua primeira cúpula formal em Ecaterimburgo (Rússia), e em 2010
          a África do Sul foi incorporada, formando o BRICS.
        </p>
        <p>
          O BRICS não é um bloco econômico no sentido tradicional — não há acordo de livre comércio ou tarifa
          externa comum. É mais um fórum de cooperação política e econômica entre países em desenvolvimento
          que buscam maior representatividade nas instituições internacionais, como FMI e Banco Mundial, e
          alternativas ao domínio do dólar nas transações globais. O Novo Banco de Desenvolvimento (NBD),
          sediado em Xangai, é uma das realizações concretas do grupo.
        </p>
        <p>
          Em 2024, o bloco expandiu-se com a entrada efetiva de Etiópia, Egito, Emirados Árabes Unidos e
          Irã, enquanto a Arábia Saudita ainda avaliava a adesão. Essa expansão, denominada BRICS+, reflete a
          tentativa de criar um contrapeso à influência ocidental na ordem mundial.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparativo entre os principais blocos econômicos</caption>
            <thead>
              <tr>
                <th>Bloco</th>
                <th>Membros</th>
                <th>% PIB mundial</th>
                <th>Tipo de integração</th>
                <th>Fundação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>União Europeia</td>
                <td>27</td>
                <td>~17%</td>
                <td>União econômica</td>
                <td>1993</td>
              </tr>
              <tr>
                <td>USMCA</td>
                <td>3</td>
                <td>~28%</td>
                <td>Zona de livre comércio</td>
                <td>2020 (NAFTA: 1994)</td>
              </tr>
              <tr>
                <td>ASEAN</td>
                <td>10</td>
                <td>~4%</td>
                <td>Cooperação / AFTA</td>
                <td>1967</td>
              </tr>
              <tr>
                <td>Mercosul</td>
                <td>4</td>
                <td>~3%</td>
                <td>União aduaneira</td>
                <td>1991</td>
              </tr>
              <tr>
                <td>BRICS</td>
                <td>5 (+ BRICS+)</td>
                <td>~25%</td>
                <td>Fórum de cooperação</td>
                <td>2009</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Outros agrupamentos</span>
        <h2>7. Outros blocos e fóruns econômicos relevantes</h2>
        <p>
          Além dos grandes blocos, existem outros agrupamentos importantes na geopolítica econômica mundial.
          O G7 reúne as sete economias mais industrializadas do mundo (EUA, Reino Unido, Alemanha, França,
          Japão, Itália e Canadá) e discute política macroeconômica global. O G20 amplia esse diálogo,
          incluindo economias emergentes como Brasil, China, Índia e outros 16 países.
        </p>
        <p>
          A OPEP (Organização dos Países Exportadores de Petróleo) coordena a produção de petróleo entre seus
          membros para influenciar os preços internacionais. Já a APEC (Cooperação Econômica Ásia-Pacífico)
          reúne 21 economias da bacia do Pacífico, incluindo EUA, China e Brasil, com foco na liberalização
          comercial na região de maior dinamismo econômico do planeta.
        </p>
        <p>
          Na América Latina, existem ainda a ALADI (Associação Latino-Americana de Integração), a CAN
          (Comunidade Andina de Nações), a CELAC (Comunidade de Estados Latino-Americanos e Caribenhos) e a
          ALBA (Aliança Bolivariana para os Povos da Nossa América), cada uma com objetivos e graus de
          integração distintos.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Impactos e perspectivas</span>
        <h2>8. Desafios e perspectivas dos blocos econômicos</h2>
        <p>
          Os blocos econômicos enfrentam desafios crescentes no século XXI. O protecionismo ressurgente —
          exemplificado pelas guerras comerciais entre EUA e China — questiona os fundamentos do livre comércio
          que sustentou a criação desses blocos. A pandemia de COVID-19 expôs vulnerabilidades nas cadeias
          globais de suprimentos, levando governos a reconsiderar a dependência de insumos estrangeiros.
        </p>
        <p>
          As tensões geopolíticas, como a guerra na Ucrânia iniciada em 2022, criaram rupturas profundas no
          comércio global e questionaram acordos estabelecidos. A transição energética e as pressões por
          redução das emissões de carbono também impõem novos desafios aos blocos, que precisam harmonizar
          políticas ambientais sem sacrificar o crescimento econômico de seus membros.
        </p>
        <p>
          Por outro lado, a digitalização da economia e o comércio de serviços abrem novas fronteiras para a
          integração regional, exigindo que os blocos adaptem seus marcos regulatórios para o ambiente digital,
          a proteção de dados e a inteligência artificial.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Perspectiva ENEM</span>
        <h2>9. Blocos econômicos na perspectiva do ENEM</h2>
        <p>
          O ENEM aborda os blocos econômicos sob diversas perspectivas: a geopolítica (disputa de poder entre
          países e blocos), a econômica (fluxos de comércio, investimentos, divisão internacional do trabalho)
          e a social (impactos sobre emprego, desigualdade e soberania nacional).
        </p>
        <p>
          Questões recorrentes envolvem: a comparação entre os diferentes blocos e graus de integração; o papel
          do Brasil no Mercosul e no BRICS; os efeitos da globalização sobre economias periféricas; o Brexit e
          seus impactos; e a relação entre regionalismo econômico e multilateralismo (OMC).
        </p>
        <p>
          É importante entender que a formação de blocos pode beneficiar economias mais competitivas dentro do
          bloco, enquanto países menos desenvolvidos podem sofrer desvios de comércio. A questão da soberania
          nacional versus integração supranacional é um debate permanente na geografia política.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Pontos-chave sobre cada bloco para o ENEM</caption>
            <thead>
              <tr>
                <th>Bloco</th>
                <th>Ponto principal</th>
                <th>Debate atual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mercosul</td>
                <td>Primeiro grande bloco sul-americano; TEC; assimetrias entre membros</td>
                <td>Acordo com a UE; entrada da Bolívia; instabilidade política</td>
              </tr>
              <tr>
                <td>União Europeia</td>
                <td>Máximo grau de integração; moeda única; supranacionalidade</td>
                <td>Brexit; migração; crise econômica grega; eurceticismo</td>
              </tr>
              <tr>
                <td>USMCA</td>
                <td>Maior área de livre comércio do mundo em PIB; substituiu NAFTA</td>
                <td>Imigração EUA–México; protecionismo americano</td>
              </tr>
              <tr>
                <td>ASEAN</td>
                <td>Cooperação no Sudeste Asiático; não intervenção; AFTA</td>
                <td>Disputa no Mar do Sul da China; ascensão da China</td>
              </tr>
              <tr>
                <td>BRICS</td>
                <td>Fórum de cooperação Sul-Sul; Novo Banco de Desenvolvimento</td>
                <td>Expansão BRICS+; desdolarização; multipolaridade</td>
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
              O Mercosul foi criado pelo Tratado de Assunção em 1991 e funciona como uma união aduaneira entre
              seus membros. Com base nessa informação, qual das seguintes características define corretamente
              o funcionamento do Mercosul?
            </p>
          }
          options={[
            { letter: "a", text: "Adoção de moeda única entre todos os países membros." },
            { letter: "b", text: "Livre circulação de pessoas sem necessidade de visto entre os membros." },
            { letter: "c", text: "Eliminação de tarifas internas e adoção de Tarifa Externa Comum (TEC) perante terceiros países.", correct: true },
            { letter: "d", text: "Criação de um parlamento supranacional com poder de legislar sobre todos os membros." },
            { letter: "e", text: "Abertura total de fronteiras para trabalhadores de qualquer país do mundo." },
          ]}
          resolution={
            <p>
              Uma união aduaneira possui duas características fundamentais: eliminação de tarifas alfandegárias
              entre os países membros e adoção de uma Tarifa Externa Comum (TEC) nas relações com países
              não membros. O Mercosul funciona nesse nível de integração, diferindo de um mercado comum (que
              incluiria livre circulação de pessoas) ou de uma união monetária (moeda única). As demais opções
              descrevem características que o Mercosul não possui ou não atingiu.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              A União Europeia é considerada o processo de integração regional mais avançado do mundo.
              Um dos marcos dessa integração foi o Tratado de Maastricht (1992). Que avanço fundamental
              esse tratado representou para a integração europeia?
            </p>
          }
          options={[
            { letter: "a", text: "Criou a Comunidade Europeia do Carvão e do Aço (CECA), iniciando a integração." },
            { letter: "b", text: "Formalizou a União Europeia e estabeleceu os critérios para a adoção do euro.", correct: true },
            { letter: "c", text: "Admitiu os países do Leste Europeu após a queda do Muro de Berlim." },
            { letter: "d", text: "Regulamentou a saída do Reino Unido (Brexit) do bloco europeu." },
            { letter: "e", text: "Criou o Banco Central Europeu como instituição independente dos Estados membros." },
          ]}
          resolution={
            <p>
              O Tratado de Maastricht (1992) foi o instrumento que formalizou a criação da União Europeia e
              estabeleceu os critérios de convergência para a adoção de uma moeda única — o euro, lançado em
              1999. Antes disso, existia a Comunidade Econômica Europeia (CEE). A CECA foi criada em 1951, muito
              antes. A ampliação para o Leste Europeu ocorreu principalmente em 2004. O Brexit foi regulamentado
              pelo Acordo de Retirada de 2019-2020.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              O BRICS representa uma iniciativa de cooperação entre economias emergentes. Diferente de blocos
              como o Mercosul ou a União Europeia, o BRICS possui uma natureza distinta. Sobre o BRICS, é
              correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "Constitui uma zona de livre comércio com eliminação de tarifas entre seus membros." },
            { letter: "b", text: "Possui uma moeda comum — o yuan — adotada por todos os países do grupo." },
            { letter: "c", text: "É um fórum de cooperação política e econômica que criou o Novo Banco de Desenvolvimento como alternativa ao FMI e Banco Mundial.", correct: true },
            { letter: "d", text: "Foi criado pela ONU para representar as nações em desenvolvimento nas negociações globais." },
            { letter: "e", text: "Limita sua atuação à cooperação militar e de segurança entre seus membros." },
          ]}
          resolution={
            <p>
              O BRICS não é um bloco econômico clássico — não possui acordo de livre comércio, tarifa externa
              comum ou moeda única. Trata-se de um fórum de cooperação político-econômica entre grandes
              economias emergentes. Sua realização mais concreta é o Novo Banco de Desenvolvimento (NBD),
              sediado em Xangai, criado como alternativa aos organismos financeiros dominados pelo Ocidente
              (FMI e Banco Mundial). O grupo também debate a redução da dependência do dólar nas transações
              internacionais.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              (ENEM adaptado) Em 2020, o USMCA entrou em vigor substituindo o NAFTA. A renegociação do acordo
              norte-americano esteve associada a críticas de que o tratado anterior prejudicava trabalhadores
              americanos. Com base no contexto geopolítico e econômico, qual foi o principal motivo que levou
              à renegociação do NAFTA?
            </p>
          }
          options={[
            { letter: "a", text: "A intenção de incluir países da América Central no bloco norte-americano." },
            { letter: "b", text: "A necessidade de criar uma moeda única para o comércio entre EUA, México e Canadá." },
            { letter: "c", text: "A insatisfação americana com a migração de empregos industriais para o México, onde os custos de produção são menores.", correct: true },
            { letter: "d", text: "A pressão da China para que os EUA renegociassem seus acordos comerciais regionais." },
            { letter: "e", text: "A decisão do Canadá de abandonar o acordo e negociar bilateralmente com os EUA." },
          ]}
          resolution={
            <p>
              O NAFTA foi criticado, especialmente pelo governo Trump, pelo fenômeno da "maquiladora" —
              transferência de fábricas americanas para o México, onde a mão de obra é mais barata e as leis
              trabalhistas menos rígidas. Isso gerou desemprego industrial em regiões dos EUA como o "Rust
              Belt" (cinturão da ferrugem). O USMCA introduziu regras mais rígidas de origem para produtos
              (especialmente automóveis) e exigências de padrões trabalhistas mínimos no México, buscando
              tornar o bloco mais favorável aos trabalhadores americanos.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              A expansão do BRICS em 2024, com a entrada de novos membros como Etiópia, Egito e Emirados
              Árabes Unidos, foi interpretada por analistas como parte de uma tendência mais ampla na política
              internacional. Qual das seguintes interpretações melhor explica o significado geopolítico dessa
              expansão?
            </p>
          }
          options={[
            { letter: "a", text: "Representa a formação de um bloco militar alternativo à OTAN para defender os países do Sul Global." },
            { letter: "b", text: "Indica a consolidação de uma ordem multipolar, em que países em desenvolvimento buscam reduzir sua dependência das estruturas econômicas e políticas lideradas pelo Ocidente.", correct: true },
            { letter: "c", text: "Demonstra o interesse dos novos membros em adotar o yuan chinês como moeda de reserva internacional." },
            { letter: "d", text: "Reflete a intenção dos países do Oriente Médio de criar uma aliança contra Israel e os EUA." },
            { letter: "e", text: "Sinaliza a substituição da ONU pelo BRICS como principal fórum de governança global." },
          ]}
          resolution={
            <p>
              A expansão do BRICS reflete o movimento de multipolarização da ordem mundial — a transição de
              um mundo unipolar (dominado pelos EUA após a Guerra Fria) para um cenário com múltiplos centros
              de poder. Os países que aderiram ao BRICS+ buscam ampliar sua margem de manobra diplomática,
              diversificar parcerias econômicas e participar de arranjos financeiros alternativos ao sistema
              de Bretton Woods (FMI/Banco Mundial/dólar). Não se trata de uma aliança militar nem de
              substituição da ONU, mas de uma reconfiguração das relações de poder no Sul Global.
            </p>
          }
        />
      </section>
    </article>
  );
}
