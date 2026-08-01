"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap22Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 22</span>
          <h1>Migrações nacionais e internacionais</h1>
          <p>
            Migrar é um fenômeno intrínseco à condição humana. Desde a saída do Homo sapiens da
            África há cerca de 70 mil anos, os deslocamentos populacionais moldaram culturas,
            civilizações e territórios. No século XXI, o número de migrantes internacionais
            ultrapassa 280 milhões de pessoas. No Brasil, movimentos migratórios internos
            transformaram dramaticamente a distribuição populacional ao longo do século XX,
            deslocando populações do campo para as cidades e do Nordeste para o Sudeste. Entender
            as causas, os tipos e as consequências das migrações é fundamental para compreender
            a dinâmica do espaço geográfico contemporâneo.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceitos e tipologia</span>
        <h2>1. Conceitos fundamentais de migração</h2>
        <p>
          Migração é o deslocamento de pessoas de um lugar de origem para um lugar de destino,
          com intenção de estabelecer residência por período significativo. A ciência geográfica
          distingue diferentes tipos de migração com base em critérios espaciais, temporais e
          motivacionais. Quanto ao espaço, as migrações podem ser internas (dentro do mesmo país)
          ou internacionais (entre países diferentes).
        </p>
        <p>
          Quanto à temporalidade, podem ser permanentes (o migrante não retorna ao local de
          origem) ou temporárias (sazonais, pendulares ou de retorno). A migração pendular é
          aquela em que a pessoa se desloca diariamente entre município de residência e município
          de trabalho, fenômeno típico das regiões metropolitanas brasileiras. As migrações
          sazonais acompanham ciclos agrícolas, como a dos "bóias-frias" que acompanham
          safras em diferentes regiões.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Tipologia das migrações — classificação e exemplos</caption>
            <thead>
              <tr>
                <th>Critério</th>
                <th>Tipo</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Espaço</td>
                <td>Interna</td>
                <td>Nordestinos que migram para São Paulo</td>
              </tr>
              <tr>
                <td>Espaço</td>
                <td>Internacional</td>
                <td>Sírios que fogem da guerra para a Europa</td>
              </tr>
              <tr>
                <td>Duração</td>
                <td>Permanente</td>
                <td>Emigrantes brasileiros radicados nos EUA</td>
              </tr>
              <tr>
                <td>Duração</td>
                <td>Temporária / Sazonal</td>
                <td>Trabalhadores da cana-de-açúcar no interior paulista</td>
              </tr>
              <tr>
                <td>Duração</td>
                <td>Pendular</td>
                <td>Moradores de Guarulhos que trabalham em São Paulo</td>
              </tr>
              <tr>
                <td>Causa</td>
                <td>Voluntária</td>
                <td>Profissional qualificado que aceita emprego no exterior</td>
              </tr>
              <tr>
                <td>Causa</td>
                <td>Forçada</td>
                <td>Refugiados, apátridas, deslocados internos por desastres</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fatores de expulsão e atração</span>
        <h2>2. Causas das migrações: fatores push e pull</h2>
        <p>
          O geógrafo Ernst Georg Ravenstein formulou, no século XIX, as primeiras "leis das
          migrações", observando que os fluxos migratórios seguem padrões regulares. O modelo
          "push-pull" (fatores de expulsão e atração) é o mais utilizado para explicar as causas
          das migrações. Os fatores de expulsão (push) são condições negativas no local de origem
          que impulsionam a saída; os fatores de atração (pull) são condições positivas no
          destino que atraem os migrantes.
        </p>
        <p>
          Entre os principais fatores de expulsão estão: pobreza e desemprego, conflitos armados
          e violência, perseguição política, étnica ou religiosa, desastres naturais, seca e
          degradação ambiental. Entre os fatores de atração estão: melhores oportunidades de
          trabalho e renda, acesso a serviços de saúde e educação, maior liberdade política,
          redes de parentesco e comunidades estabelecidas no destino (as chamadas "redes de
          migração").
        </p>
        <p>
          As redes de migração desempenham papel fundamental: uma vez que alguns migrantes se
          estabelecem em um destino, eles facilitam a chegada de parentes e conterrâneos,
          criando fluxos migratórios que se auto-reforçam. Isso explica por que comunidades de
          migrantes de determinadas regiões se concentram em localidades específicas — como os
          nordestinos em bairros específicos de São Paulo.
        </p>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Brasil: movimentos internos</span>
        <h2>3. Migrações internas no Brasil</h2>
        <p>
          O Brasil tem uma rica história de migrações internas, moldada pelos ciclos econômicos
          e pela concentração do desenvolvimento. Os principais fluxos históricos incluem: a
          migração nordestino-sudeste, iniciada com a industrialização de São Paulo na década
          de 1930 e intensificada nas décadas de 1950-80; a migração campo-cidade (êxodo rural),
          impulsionada pela mecanização da agricultura; e a migração para a fronteira agrícola
          (Amazônia, Centro-Oeste), estimulada pelo governo a partir dos anos 1970.
        </p>
        <p>
          A construção de Brasília (inaugurada em 1960) foi um catalisador migratório: atraiu
          trabalhadores de todo o país, especialmente do Nordeste (os "candangos"), e transformou
          o Centro-Oeste em polo de atração. A expansão do agronegócio no cerrado a partir dos
          anos 1980 consolidou essa região como nova fronteira econômica. Mais recentemente,
          observa-se uma tendência de "migração de retorno" — nordestinos retornando a seus
          estados de origem, impulsionados pelo crescimento econômico do Nordeste e pela melhora
          da qualidade de vida na região.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais fluxos migratórios internos no Brasil — séculos XX e XXI</caption>
            <thead>
              <tr>
                <th>Fluxo</th>
                <th>Período principal</th>
                <th>Causa</th>
                <th>Destino</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nordeste → Sudeste</td>
                <td>1930–1980 (pico)</td>
                <td>Industrialização de SP, secas e miséria no NE</td>
                <td>São Paulo, Rio de Janeiro</td>
              </tr>
              <tr>
                <td>Êxodo rural (campo → cidade)</td>
                <td>1950–1980</td>
                <td>Mecanização agrícola, modernização conservadora</td>
                <td>Grandes metrópoles brasileiras</td>
              </tr>
              <tr>
                <td>Sul/Sudeste → Centro-Oeste</td>
                <td>1970–2000</td>
                <td>Expansão agropecuária no cerrado</td>
                <td>MT, GO, MS, Distrito Federal</td>
              </tr>
              <tr>
                <td>Fronteira amazônica</td>
                <td>1970–1990</td>
                <td>Colonização incentivada pelo governo militar</td>
                <td>Pará, Rondônia, Amazonas</td>
              </tr>
              <tr>
                <td>Migração de retorno</td>
                <td>2000–presente</td>
                <td>Crise econômica no SP, crescimento do NE</td>
                <td>Estados nordestinos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG Figure 1 — Fluxos migratórios Brasil */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" aria-label="Mapa esquemático dos fluxos migratórios internos no Brasil">
          <rect width="700" height="340" fill="#e3f2fd" />
          <text x="350" y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a237e">
            Principais Fluxos Migratórios Internos no Brasil
          </text>

          {/* Contorno simplificado do Brasil */}
          <path
            d="M 200,55 L 350,45 L 470,60 L 510,90 L 530,130 L 520,180 L 490,220
               L 470,270 L 430,300 L 380,310 L 330,290 L 290,280 L 260,290 L 240,270
               L 210,250 L 190,220 L 175,185 L 165,155 L 155,120 L 170,85 Z"
            fill="#c8e6c9" stroke="#388e3c" strokeWidth="2"
          />

          {/* Regiões aproximadas */}
          {/* Norte */}
          <text x="310" y="115" textAnchor="middle" fontSize="11" fill="#1b5e20" fontWeight="bold">NORTE</text>
          {/* Nordeste */}
          <text x="430" y="130" textAnchor="middle" fontSize="11" fill="#bf360c" fontWeight="bold">NORDESTE</text>
          {/* Centro-Oeste */}
          <text x="310" y="195" textAnchor="middle" fontSize="11" fill="#4a148c" fontWeight="bold">CENTRO-OESTE</text>
          {/* Sudeste */}
          <text x="400" y="245" textAnchor="middle" fontSize="11" fill="#0d47a1" fontWeight="bold">SUDESTE</text>
          {/* Sul */}
          <text x="340" y="285" textAnchor="middle" fontSize="11" fill="#006064" fontWeight="bold">SUL</text>

          {/* Seta: Nordeste → Sudeste (principal fluxo histórico) */}
          <defs>
            <marker id="arrow1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#e53935" />
            </marker>
          </defs>
          <line x1="430" y1="145" x2="400" y2="225" stroke="#e53935" strokeWidth="3" markerEnd="url(#arrow1)" />
          <text x="450" y="190" fontSize="10" fill="#e53935">NE→SE</text>

          {/* Seta: Sul/SE → Centro-Oeste */}
          <defs>
            <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#6a1b9a" />
            </marker>
          </defs>
          <line x1="380" y1="260" x2="320" y2="205" stroke="#6a1b9a" strokeWidth="2" markerEnd="url(#arrow2)" />
          <text x="330" y="245" fontSize="10" fill="#6a1b9a">SE→CO</text>

          {/* Seta: CO → Norte (fronteira amazônica) */}
          <defs>
            <marker id="arrow3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#1b5e20" />
            </marker>
          </defs>
          <line x1="295" y1="185" x2="265" y2="130" stroke="#1b5e20" strokeWidth="2" markerEnd="url(#arrow3)" />
          <text x="240" y="160" fontSize="10" fill="#1b5e20">CO→N</text>

          {/* Legenda */}
          <rect x="530" y="100" width="155" height="130" rx="6" fill="white" fillOpacity="0.85" stroke="#aaa" strokeWidth="1" />
          <text x="607" y="118" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">Legenda</text>
          <line x1="545" y1="132" x2="575" y2="132" stroke="#e53935" strokeWidth="3" />
          <text x="580" y="136" fontSize="10" fill="#333">NE → Sudeste</text>
          <line x1="545" y1="152" x2="575" y2="152" stroke="#6a1b9a" strokeWidth="2" />
          <text x="580" y="156" fontSize="10" fill="#333">SE → C-Oeste</text>
          <line x1="545" y1="172" x2="575" y2="172" stroke="#1b5e20" strokeWidth="2" />
          <text x="580" y="176" fontSize="10" fill="#333">C-O → Norte</text>
          <text x="607" y="200" textAnchor="middle" fontSize="9" fill="#555">Espessura indica</text>
          <text x="607" y="212" textAnchor="middle" fontSize="9" fill="#555">volume do fluxo</text>
          <text x="607" y="224" textAnchor="middle" fontSize="9" fill="#555">(esquemático)</text>
        </svg>
        <figcaption>
          Mapa esquemático dos principais fluxos migratórios internos no Brasil ao longo do
          século XX. O maior fluxo histórico foi o Nordeste–Sudeste, impulsionado pela
          industrialização paulista. A expansão da fronteira agrícola criou novos fluxos para
          o Centro-Oeste e o Norte.
        </figcaption>
      </figure>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O mundo em movimento</span>
        <h2>4. Migrações internacionais contemporâneas</h2>
        <p>
          O número de migrantes internacionais cresceu de 153 milhões em 1990 para mais de
          280 milhões em 2020, segundo a ONU. Esse crescimento é impulsionado pela globalização
          econômica, pelos conflitos armados, pelas mudanças climáticas e pelas desigualdades
          de renda entre países. Os principais corredores migratórios são: México–Estados
          Unidos (o maior fluxo bilateral do mundo), Bangladesh–Índia, Ucrânia–Rússia (antes
          do conflito), e as rotas mediterrâneas em direção à Europa.
        </p>
        <p>
          Os países desenvolvidos do Norte Global (EUA, Canadá, Alemanha, Reino Unido,
          Austrália) são os principais destinos. Os países do Sul Global são os principais
          emissores, mas também receptores uns dos outros — as migrações Sul-Sul são tão
          numerosas quanto as migrações Sul-Norte. As remessas enviadas por migrantes aos
          países de origem somam mais de 700 bilhões de dólares por ano, superando em muitos
          casos os fluxos de ajuda externa e de investimento direto estrangeiro.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Refúgio e proteção</span>
        <h2>5. Refugiados, deslocados e apátridas</h2>
        <p>
          O Alto Comissariado das Nações Unidas para Refugiados (ACNUR) é a agência da ONU
          responsável pela proteção de pessoas forçadas a deixar seus lares. Em 2023, o número
          de pessoas forçosamente deslocadas no mundo ultrapassou 110 milhões — o maior número
          já registrado — incluindo refugiados, solicitantes de refúgio, deslocados internos
          e apátridas.
        </p>
        <p>
          O status de refugiado é definido pela Convenção de Genebra (1951) e seu Protocolo
          (1967): é a pessoa que se encontra fora de seu país de origem por fundado temor de
          perseguição por motivos de raça, religião, nacionalidade, grupo social ou opiniões
          políticas, e que não pode ou não quer regressar. Os deslocados internos (IDPs) são
          pessoas em situação similar, mas que não cruzaram fronteiras internacionais. Os
          apátridas são aqueles sem nenhuma nacionalidade reconhecida.
        </p>
        <p>
          Os principais países de origem de refugiados são a Síria (guerra civil iniciada em
          2011), o Afeganistão, a Venezuela, o Sudão do Sul e Myanmar. A crise de refugiados
          sírios (mais de 6 milhões de pessoas deslocadas) gerou uma das maiores crises
          humanitárias do século XXI, com impactos políticos profundos na Europa (xenofobia,
          ascensão de partidos de extrema-direita).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais fluxos de refugiados no mundo (dados ACNUR, ~2023)</caption>
            <thead>
              <tr>
                <th>País de origem</th>
                <th>Refugiados (aprox.)</th>
                <th>Principal causa</th>
                <th>Principais destinos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Síria</td>
                <td>6,5 milhões</td>
                <td>Guerra civil (desde 2011)</td>
                <td>Turquia, Líbano, Jordânia, Alemanha</td>
              </tr>
              <tr>
                <td>Ucrânia</td>
                <td>5,9 milhões</td>
                <td>Invasão russa (2022)</td>
                <td>Polônia, Alemanha, Rep. Tcheca</td>
              </tr>
              <tr>
                <td>Afeganistão</td>
                <td>5,7 milhões</td>
                <td>Taliban, instabilidade política</td>
                <td>Paquistão, Irã, países ocidentais</td>
              </tr>
              <tr>
                <td>Venezuela</td>
                <td>5,4 milhões</td>
                <td>Crise econômica e política</td>
                <td>Colômbia, Peru, Chile, Brasil</td>
              </tr>
              <tr>
                <td>Sudão do Sul</td>
                <td>2,3 milhões</td>
                <td>Guerra civil e fome</td>
                <td>Uganda, Etiópia, Sudão</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Brasil receptor</span>
        <h2>6. O Brasil como destino de migrantes internacionais</h2>
        <p>
          Historicamente, o Brasil foi um grande receptor de imigrantes: europeus (italianos,
          portugueses, espanhóis, alemães, poloneses) no final do século XIX e início do XX,
          e asiáticos (japoneses e sírio-libaneses) nas primeiras décadas do século XX. Esses
          fluxos moldaram a diversidade cultural brasileira, com colônias que mantêm vivas
          línguas, tradições e identidades originais.
        </p>
        <p>
          No século XXI, o Brasil tornou-se destino de novos fluxos migratórios: haitianos
          (especialmente após o terremoto de 2010), venezuelanos em fuga da crise Maduro
          (a partir de 2015, com pico em 2019-2022), e refugiados sírios, congoleses e
          angolanos. A Lei de Migração brasileira (Lei 13.445/2017) substituiu o antigo
          Estatuto do Estrangeiro (de 1980, criado na ditadura) por uma legislação mais
          humanitária, reconhecendo os direitos dos migrantes.
        </p>
        <p>
          A Operação Acolhida é uma resposta do governo brasileiro à crise migratória
          venezuelana: criou abrigos em Roraima e organizou a interiorização dos venezuelanos
          para diferentes estados do país. Em 2022, o Brasil tinha mais de 500 mil venezuelanos
          registrados, tornando-se um dos maiores receptores dessa população.
        </p>
      </section>

      {/* SVG Figure 2 — Rotas migratórias internacionais */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" aria-label="Rotas de migração internacional">
          <rect width="700" height="300" fill="#e8f4fd" />
          <text x="350" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a237e">
            Principais Rotas de Migração Internacional
          </text>

          {/* Blocos regionais simplificados */}
          {/* América do Norte */}
          <rect x="40" y="55" width="130" height="70" rx="8" fill="#bbdefb" stroke="#1565c0" strokeWidth="2" />
          <text x="105" y="88" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0d47a1">América</text>
          <text x="105" y="103" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0d47a1">do Norte</text>
          <text x="105" y="116" textAnchor="middle" fontSize="10" fill="#1565c0">(EUA, Canadá)</text>

          {/* Europa */}
          <rect x="250" y="45" width="120" height="65" rx="8" fill="#c8e6c9" stroke="#2e7d32" strokeWidth="2" />
          <text x="310" y="78" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1b5e20">Europa</text>
          <text x="310" y="93" textAnchor="middle" fontSize="10" fill="#2e7d32">Ocidental</text>

          {/* Oriente Médio / África do Norte */}
          <rect x="420" y="50" width="130" height="60" rx="8" fill="#fff3e0" stroke="#e65100" strokeWidth="2" />
          <text x="485" y="78" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#bf360c">Oriente Médio</text>
          <text x="485" y="93" textAnchor="middle" fontSize="10" fill="#e65100">e África do Norte</text>

          {/* África Subsaariana */}
          <rect x="420" y="160" width="130" height="60" rx="8" fill="#fce4ec" stroke="#880e4f" strokeWidth="2" />
          <text x="485" y="186" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#880e4f">África</text>
          <text x="485" y="201" textAnchor="middle" fontSize="10" fill="#880e4f">Subsaariana</text>

          {/* América do Sul */}
          <rect x="40" y="175" width="130" height="65" rx="8" fill="#f3e5f5" stroke="#6a1b9a" strokeWidth="2" />
          <text x="105" y="203" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#4a148c">América</text>
          <text x="105" y="218" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#4a148c">do Sul</text>
          <text x="105" y="233" textAnchor="middle" fontSize="10" fill="#6a1b9a">(Brasil, Argentina)</text>

          {/* Ásia do Sul/Sudeste */}
          <rect x="560" y="120" width="120" height="65" rx="8" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="2" />
          <text x="620" y="148" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1b5e20">Ásia do Sul</text>
          <text x="620" y="163" textAnchor="middle" fontSize="10" fill="#2e7d32">e Sudeste</text>
          <text x="620" y="176" textAnchor="middle" fontSize="10" fill="#2e7d32">(Índia, Bangladesh)</text>

          {/* Setas de fluxos */}
          {/* América do Sul → América do Norte */}
          <line x1="105" y1="175" x2="105" y2="130" stroke="#4a148c" strokeWidth="2" markerEnd="url(#arrowM)" />
          {/* Oriente Médio → Europa */}
          <line x1="420" y1="80" x2="370" y2="80" stroke="#e65100" strokeWidth="3" markerEnd="url(#arrowM)" />
          {/* África Subsaariana → Europa (rota mediterrânea) */}
          <line x1="480" y1="160" x2="370" y2="95" stroke="#880e4f" strokeWidth="2" markerEnd="url(#arrowM)" />
          {/* Ásia → Europa */}
          <line x1="560" y1="140" x2="370" y2="85" stroke="#2e7d32" strokeWidth="2" markerEnd="url(#arrowM)" />
          {/* América do Sul → América do Norte (vertical) */}
          <line x1="115" y1="175" x2="115" y2="130" stroke="#6a1b9a" strokeWidth="2" markerEnd="url(#arrowM)" />
          {/* Venezuela → Brasil (interno) */}
          <text x="105" y="270" textAnchor="middle" fontSize="10" fill="#bf360c">★ Venezuela → Brasil</text>

          <defs>
            <marker id="arrowM" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#555" />
            </marker>
          </defs>

          <text x="350" y="290" textAnchor="middle" fontSize="10" fill="#555">
            As setas indicam os principais fluxos migratórios mundiais (voluntários e forçados)
          </text>
        </svg>
        <figcaption>
          Esquema das principais rotas de migração internacional: os fluxos convergem do Sul
          Global (América do Sul, África, Ásia) para o Norte Global (Europa, América do Norte).
          A rota mediterrânea é uma das mais perigosas do mundo, com milhares de mortos por ano.
        </figcaption>
      </figure>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Xenofobia e integração</span>
        <h2>7. Consequências sociais das migrações</h2>
        <p>
          As migrações têm consequências tanto positivas quanto negativas para os países de
          origem e de destino. Para os países de destino, os migrantes contribuem com mão de
          obra (especialmente em setores com escassez de trabalhadores), pagam impostos,
          enriquecem culturalmente a sociedade e contribuem para o crescimento econômico. Países
          com envelhecimento populacional (como Alemanha e Japão) dependem de migrantes para
          manter a força de trabalho e sustentar o sistema previdenciário.
        </p>
        <p>
          Por outro lado, as migrações em massa podem gerar tensões sociais: pressão sobre
          serviços públicos (saúde, educação, habitação), concorrência por empregos, xenofobia
          e discriminação. A xenofobia — o medo ou ódio ao estrangeiro — é um fenômeno que
          se intensifica em períodos de crise econômica e instabilidade política. No Brasil,
          haitianos e venezuelanos foram alvos de atos xenofóbicos, especialmente em estados
          de fronteira como Roraima.
        </p>
        <p>
          Para os países de origem, as migrações aliviam a pressão sobre o mercado de trabalho
          e geram remessas financeiras importantes. O México, por exemplo, recebe mais de 50
          bilhões de dólares por ano em remessas dos Estados Unidos. Entretanto, a emigração
          dos mais qualificados ("fuga de cérebros" ou brain drain) pode privar países
          em desenvolvimento de recursos humanos essenciais para seu próprio desenvolvimento.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Migrações climáticas</span>
        <h2>8. Migrações ambientais e mudanças climáticas</h2>
        <p>
          As mudanças climáticas estão se tornando uma das principais causas de deslocamentos
          populacionais no século XXI. Secas prolongadas, enchentes, furacões, elevação do
          nível do mar e desertificação forçam populações inteiras a abandonar seus territórios
          tradicionais. O Banco Mundial estima que até 2050, até 216 milhões de pessoas podem
          ser deslocadas internamente em seus países por causas climáticas.
        </p>
        <p>
          Os "refugiados climáticos" (ou migrantes ambientais) ainda não têm status jurídico
          reconhecido pela Convenção de Genebra, o que os deixa em situação de vulnerabilidade.
          As ilhas do Pacífico (Tuvalu, Kiribati, Maldivas) estão ameaçadas pelo aumento do
          nível do mar e já negociam com países vizinhos o reassentamento de suas populações.
          No Brasil, a seca no Semiárido e a erosão costeira são fatores de deslocamento
          ambiental interno.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Emigração brasileira</span>
        <h2>9. Brasileiros no exterior</h2>
        <p>
          O Brasil também é um país emissor de emigrantes. Estima-se que cerca de 4,5 milhões
          de brasileiros vivam no exterior. Os principais destinos são os Estados Unidos
          (especialmente Massachusetts, Flórida e Nova York), Portugal, Japão (a segunda maior
          comunidade japonesa fora do Japão está no Brasil, e a diáspora nipo-brasileira é
          intensa), Espanha, Inglaterra e Itália. O Japão tem uma comunidade "decasségui"
          significativa — brasileiros de descendência japonesa que foram trabalhar no país de
          origem de seus antepassados a partir dos anos 1980-90.
        </p>
        <p>
          As remessas enviadas pelos brasileiros no exterior somam cerca de 3 bilhões de dólares
          por ano. A emigração brasileira foi intensa na crise econômica dos anos 1980-90 e
          voltou a crescer após a crise política e econômica iniciada em 2015-2016, com jovens
          qualificados buscando oportunidades em países europeus e no Canadá.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comunidades brasileiras no exterior — principais destinos</caption>
            <thead>
              <tr>
                <th>País</th>
                <th>Estimativa de brasileiros</th>
                <th>Perfil predominante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Estados Unidos</td>
                <td>≈ 1,8 milhão</td>
                <td>Trabalhadores de serviços, profissionais qualificados</td>
              </tr>
              <tr>
                <td>Portugal</td>
                <td>≈ 370 mil</td>
                <td>Profissionais qualificados, estudantes</td>
              </tr>
              <tr>
                <td>Japão</td>
                <td>≈ 210 mil</td>
                <td>Nipo-brasileiros ("decasséguis"), trabalhadores industriais</td>
              </tr>
              <tr>
                <td>Espanha</td>
                <td>≈ 160 mil</td>
                <td>Trabalhadores de serviços, descendentes europeus</td>
              </tr>
              <tr>
                <td>Reino Unido</td>
                <td>≈ 130 mil</td>
                <td>Profissionais qualificados, setor de serviços</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Direitos e políticas</span>
        <h2>10. Políticas migratórias e direitos humanos</h2>
        <p>
          As políticas migratórias variam enormemente entre os países. Os países de destino
          oscilam entre modelos de "portas abertas" (como o Canadá, que adota políticas de
          imigração seletiva baseadas em pontos de qualificação) e modelos de "portas fechadas"
          (como os muros na fronteira EUA–México ou as barreiras na fronteira entre Hungria e
          Sérvia). A criminalização dos migrantes ilegais é uma tendência em vários países,
          gerando debates sobre a tensão entre soberania nacional e direitos humanos.
        </p>
        <p>
          Os direitos dos migrantes são protegidos pelo direito internacional por um conjunto
          de normas: a Convenção de Genebra (1951) protege refugiados; a Convenção Internacional
          sobre a Proteção dos Direitos de Todos os Trabalhadores Migrantes e Membros de suas
          Famílias (1990) protege trabalhadores migrantes; e o Pacto Global para a Migração
          Segura, Ordenada e Regular (2018) é o primeiro acordo intergovernamental abrangente
          sobre migração. O Brasil aderiu ao Pacto em 2018, mas com ressalvas.
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
              No estudo das migrações, o conceito de "migração pendular" é muito utilizado no
              contexto das regiões metropolitanas brasileiras. Qual das alternativas abaixo
              define corretamente esse tipo de migração?
            </p>
          }
          options={[
            { letter: "a", text: "Migração permanente de trabalhadores rurais para cidades em busca de emprego industrial." },
            { letter: "b", text: "Deslocamento diário ou semanal de pessoas entre o município onde residem e o município onde trabalham ou estudam, sem mudança definitiva de domicílio.", correct: true },
            { letter: "c", text: "Movimento migratório cíclico de trabalhadores que acompanham as safras agrícolas em diferentes regiões do país." },
            { letter: "d", text: "Retorno de migrantes ao seu estado ou município de origem após anos vivendo em outra região." },
            { letter: "e", text: "Migração forçada de populações atingidas por desastres naturais, como enchentes e secas prolongadas." },
          ]}
          resolution={
            <p>
              A migração pendular é um tipo de deslocamento que não configura mudança de residência:
              a pessoa dorme no município A, mas trabalha ou estuda no município B, realizando esse
              trajeto diariamente (ou semanalmente). É muito característica das regiões
              metropolitanas brasileiras, onde famílias moram em municípios periféricos (como
              Guarulhos, Osasco ou São Bernardo do Campo) mas trabalham na capital São Paulo. O
              IBGE mensura esses fluxos nos Censos Demográficos como "deslocamentos para trabalho
              e estudo". A alternativa B está correta.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              O Alto Comissariado das Nações Unidas para Refugiados (ACNUR) é o principal organismo
              internacional de proteção de pessoas deslocadas. De acordo com a Convenção de Genebra
              (1951), quem é considerado refugiado?
            </p>
          }
          options={[
            { letter: "a", text: "Qualquer pessoa que deixa seu país em busca de melhores condições econômicas, independentemente do motivo." },
            { letter: "b", text: "Pessoa forçada a se deslocar dentro do próprio país por causa de conflitos armados ou desastres naturais." },
            { letter: "c", text: "Pessoa que se encontra fora de seu país de origem por fundado temor de perseguição por motivos de raça, religião, nacionalidade, grupo social ou opiniões políticas, e que não pode ou não quer regressar.", correct: true },
            { letter: "d", text: "Trabalhador estrangeiro com contrato temporário de trabalho em outro país, independentemente das condições em seu país de origem." },
            { letter: "e", text: "Pessoa que migra forçada por mudanças climáticas, como a elevação do nível do mar ou secas prolongadas." },
          ]}
          resolution={
            <p>
              O status de refugiado é definido pela Convenção Relativa ao Estatuto dos Refugiados
              de 1951, em Genebra. Segundo esse documento, refugiado é a pessoa que está fora de
              seu país de origem em razão de fundado temor de perseguição por motivos de raça,
              religião, nacionalidade, grupo social ou opiniões políticas, e que não pode ou não
              quer valer-se da proteção de seu governo. Importante notar: migrantes econômicos
              (que buscam melhores condições de vida) não são reconhecidos como refugiados pela
              Convenção de Genebra; migrantes climáticos também ainda não têm esse status jurídico.
              A alternativa C está correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              (ENEM adaptado) O êxodo rural foi um dos processos demográficos mais intensos da
              história do Brasil no século XX, com profundas consequências para o espaço
              geográfico nacional. Sobre as causas e consequências desse processo, analise
              as afirmativas:
              <br /><br />
              I. A mecanização da agricultura, especialmente nas lavouras de café e cana-de-açúcar,
              liberou grandes contingentes de trabalhadores rurais que se dirigiram para as cidades.<br />
              II. O êxodo rural contribuiu para o inchaço das periferias urbanas, com crescimento
              de favelas e déficit habitacional nas grandes metrópoles.<br />
              III. O êxodo rural foi benéfico exclusivamente para as cidades, pois aumentou a
              produtividade rural ao reduzir a superpopulação no campo.
              <br /><br />
              Estão corretas apenas:
            </p>
          }
          options={[
            { letter: "a", text: "I apenas." },
            { letter: "b", text: "III apenas." },
            { letter: "c", text: "I e II apenas.", correct: true },
            { letter: "d", text: "II e III apenas." },
            { letter: "e", text: "I, II e III." },
          ]}
          resolution={
            <p>
              A afirmativa I é verdadeira: a modernização conservadora da agricultura brasileira,
              com a mecanização das lavouras (especialmente a partir da Revolução Verde nos anos
              1960-70), dispensou o trabalho de milhões de trabalhadores rurais que migraram para
              as cidades. A afirmativa II é verdadeira: o recebimento de contingentes populacionais
              sem infraestrutura adequada gerou o inchamento das periferias, com explosão de favelas
              em São Paulo (como Heliopolis e Paraisópolis), Rio de Janeiro e outras metrópoles.
              A afirmativa III é falsa: o êxodo rural não foi "exclusivamente benéfico" — nas
              cidades gerou desemprego estrutural, marginalização e violência; nas áreas rurais
              despovoadas, o avanço da monocultura mecanizada agravou a concentração fundiária.
              A alternativa C (I e II apenas) está correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              A crise venezuelana gerou um dos maiores fluxos migratórios da história recente da
              América Latina. Sobre a migração venezuelana para o Brasil, assinale a alternativa
              correta.
            </p>
          }
          options={[
            { letter: "a", text: "A migração venezuelana para o Brasil é classificada exclusivamente como migração voluntária econômica, não havendo elementos de migração forçada." },
            { letter: "b", text: "O estado de entrada dos venezuelanos no Brasil é principalmente o Amazonas, pela fronteira fluvial do Rio Negro." },
            { letter: "c", text: "A Operação Acolhida é uma iniciativa do governo brasileiro que criou abrigos em Roraima e organizou a interiorização dos venezuelanos para outros estados, em resposta à crise migratória.", correct: true },
            { letter: "d", text: "O Brasil proibiu a entrada de venezuelanos em 2017, fechando a fronteira em Pacaraima (RR) por razões de segurança nacional." },
            { letter: "e", text: "Os venezuelanos no Brasil são reconhecidos exclusivamente como refugiados pela Convenção de Genebra, sendo vedada qualquer outra categorização jurídica." },
          ]}
          resolution={
            <p>
              A Operação Acolhida foi instituída em março de 2018 pelo governo federal brasileiro,
              com coordenação do Exército e parceria de agências da ONU (ACNUR, OIM) e organizações
              da sociedade civil. A operação tem três eixos: (1) ordenamento da fronteira — controle
              e registro dos migrantes em Pacaraima (RR), principal ponto de entrada; (2) acolhimento
              — abrigos em Boa Vista e Pacaraima; e (3) interiorização — realocação voluntária dos
              venezuelanos para outros estados com melhores perspectivas de emprego, aliviando a
              pressão sobre Roraima. A alternativa C está correta. Os venezuelanos no Brasil são
              reconhecidos como refugiados ou recebem autorização de residência, dependendo do
              caso individual.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              (ENEM adaptado) O conceito de "brain drain" (fuga de cérebros) é amplamente
              debatido no contexto das migrações internacionais. Sobre esse fenômeno e suas
              implicações geopolíticas, assinale a alternativa correta.
            </p>
          }
          options={[
            { letter: "a", text: "O brain drain beneficia igualmente países de origem e de destino, pois aumenta o fluxo de remessas financeiras e transfere tecnologia dos países ricos para os pobres." },
            { letter: "b", text: "O brain drain refere-se à emigração de profissionais altamente qualificados de países em desenvolvimento para países desenvolvidos, potencialmente privando os países de origem de capital humano essencial para seu desenvolvimento.", correct: true },
            { letter: "c", text: "É um fenômeno exclusivo de países africanos, sem impactos significativos para países latino-americanos como o Brasil." },
            { letter: "d", text: "O brain drain é invariavelmente negativo para os países de origem, pois os emigrantes qualificados nunca retornam e jamais contribuem para o desenvolvimento de seu país natal." },
            { letter: "e", text: "O conceito de brain drain foi abolido pela ONU em 2018, substituído pelo conceito de 'circulação de cérebros', que reconhece apenas aspectos positivos da migração qualificada." },
          ]}
          resolution={
            <p>
              O brain drain (fuga de cérebros) descreve a emigração de profissionais com alto nível
              de qualificação — médicos, engenheiros, cientistas, professores — de países em
              desenvolvimento para países desenvolvidos, em busca de melhores salários, condições
              de trabalho e qualidade de vida. Para os países de origem, esse fenômeno pode
              representar perda significativa de investimento em capital humano (formado com recursos
              públicos) e redução da capacidade de inovação e produção científica. O Brasil,
              a Índia, Cuba e vários países africanos enfrentam esse desafio. Entretanto, o
              debate é mais nuançado do que parece: alguns autores falam em "brain circulation"
              (circulação de cérebros), pois emigrantes qualificados podem retornar com novas
              habilidades e conexões, e as remessas e diásporas científicas também contribuem
              para os países de origem. A afirmativa D é incorreta porque simplifica demais ao
              dizer "jamais contribuem". A alternativa B é a mais precisa e está correta.
            </p>
          }
        />
      </section>
    </article>
  );
}
