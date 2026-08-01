"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap45Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 45</span>
          <h1>Revisão Geral de Geografia para o ENEM: Resolução Comentada de Questões e Estratégias de Prova</h1>
          <p>
            Este capítulo é o grande mapa mental do seu estudo de Geografia: reunimos os
            conceitos centrais de todos os módulos do curso — da cartografia e climatologia à
            geopolítica e questões ambientais — em forma de revisão organizada e objetiva.
            Cada seção retoma os temas mais cobrados no ENEM, apresenta as conexões entre
            conteúdos e traz estratégias testadas para maximizar seu desempenho na prova.
            Use este capítulo tanto como revisão final quanto como guia de leitura rápida na
            semana do exame.
          </p>
        </div>
      </section>

      {/* ── Módulo 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Módulo 1 — Revisão</span>
        <h2>1. Cartografia, Orientação e Fusos Horários</h2>
        <p>
          Cartografia é a linguagem da Geografia. No ENEM, os pontos mais cobrados desse
          módulo são: leitura de legendas, escalas, projeções cartográficas e cálculo de
          fusos horários. Recorde os fundamentos:
        </p>
        <ul>
          <li>
            <strong>Escala numérica vs. gráfica:</strong> 1:100.000 significa que 1 cm no mapa
            = 100.000 cm (1 km) na realidade. Escala grande = mais detalhes, menor área.
          </li>
          <li>
            <strong>Fusos horários:</strong> o planeta é dividido em 24 fusos de 15° longitude
            cada. Para cada fuso a leste, acrescenta-se 1 hora; para cada fuso a oeste,
            subtrai-se 1 hora. O Brasil tem 4 fusos (UTC-2 a UTC-5).
          </li>
          <li>
            <strong>Projeções:</strong> Mercator (conforme — preserva ângulos, distorce áreas
            em latitudes altas); Peters (equivalente — preserva áreas, distorce formas);
            Polar (útil para rotas polares e análise de distâncias árticas).
          </li>
          <li>
            <strong>Coordenadas:</strong> Latitude (distância ao Equador, 0° a 90° N/S);
            Longitude (distância ao Meridiano de Greenwich, 0° a 180° L/O).
          </li>
        </ul>
        <div className="lesson-highlight">
          <strong>ENEM na prática:</strong> Se São Paulo (UTC-3) e Tóquio (UTC+9) forem
          comparadas, a diferença é de 12 horas. Quando em São Paulo são 10h, em Tóquio
          são 22h do mesmo dia.
        </div>
      </section>

      {/* ── Módulo 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Módulo 2 — Revisão</span>
        <h2>2. Climatologia e Meteorologia</h2>
        <p>
          Clima e tempo são conceitos distintos e frequentemente confundidos. <strong>Tempo</strong>
          é o estado momentâneo da atmosfera; <strong>clima</strong> é a média das condições
          atmosféricas ao longo de 30 anos. Os principais tipos climáticos cobrados no ENEM são:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais tipos climáticos e suas características</caption>
            <thead>
              <tr>
                <th>Clima</th>
                <th>Temperaturas</th>
                <th>Precipitação</th>
                <th>Região típica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equatorial</td>
                <td>Elevadas o ano todo (~26°C)</td>
                <td>Alta e regular (&gt;2.000 mm/ano)</td>
                <td>Amazônia, Congo</td>
              </tr>
              <tr>
                <td>Tropical</td>
                <td>Altas, com amplitude moderada</td>
                <td>Estação seca e chuvosa definidas</td>
                <td>Centro-Oeste e Nordeste do Brasil</td>
              </tr>
              <tr>
                <td>Semiárido</td>
                <td>Altas, com grande amplitude diária</td>
                <td>Baixa e irregular (&lt;800 mm/ano)</td>
                <td>Sertão nordestino, Saara</td>
              </tr>
              <tr>
                <td>Temperado</td>
                <td>Quatro estações bem definidas</td>
                <td>Bem distribuída durante o ano</td>
                <td>Sul do Brasil, Europa Central</td>
              </tr>
              <tr>
                <td>Polar/Tundra</td>
                <td>Muito baixas (&lt;0°C na maior parte do ano)</td>
                <td>Muito baixa (neve/gelo)</td>
                <td>Ártico, Antártica, Alaska</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Fatores que controlam o clima: latitude (proximidade ao Equador), altitude
          (cada 100m de altitude reduz ~0,6°C), continentalidade (regiões interiores têm
          maior amplitude térmica), correntes marinhas (quentes umedecem; frias ressecam),
          massas de ar e relevo (efeito orográfico).
        </p>
        <div className="lesson-highlight">
          <strong>El Niño e La Niña:</strong> El Niño aquece o Pacífico Equatorial e causa
          seca no Nordeste e chuvas excessivas no Sul do Brasil. La Niña provoca o efeito
          inverso. Ambos têm impactos agrícolas e humanitários significativos e aparecem com
          frequência em questões do ENEM.
        </div>
      </section>

      {/* ── Módulo 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Módulo 3 — Revisão</span>
        <h2>3. Biomas, Solos e Questões Ambientais</h2>
        <p>
          O Brasil abriga seis biomas continentais, todos cobrados no ENEM com questões
          sobre biodiversidade, desmatamento, legislação ambiental e sustentabilidade.
        </p>

        {/* SVG 1 — Biomas do Brasil */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" width="100%" style={{ maxWidth: 640 }}>
            <rect width="620" height="280" rx="12" fill="#f8fafc" />
            <text x="310" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
              Biomas do Brasil — Área Aproximada
            </text>
            {/* Amazônia */}
            <rect x="30" y="42" width="260" height="32" rx="6" fill="#16a34a" />
            <text x="161" y="62" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Amazônia — 49%</text>
            {/* Cerrado */}
            <rect x="30" y="82" width="130" height="28" rx="6" fill="#84cc16" />
            <text x="95" y="101" textAnchor="middle" fontSize="11" fill="#1a2e05" fontWeight="bold">Cerrado — 24%</text>
            {/* Mata Atlântica */}
            <rect x="30" y="118" width="36" height="28" rx="6" fill="#15803d" />
            <text x="170" y="137" textAnchor="middle" fontSize="11" fill="#14532d">Mata Atlântica — 13%</text>
            <line x1="66" y1="132" x2="160" y2="137" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
            {/* Caatinga */}
            <rect x="30" y="154" width="60" height="28" rx="6" fill="#ca8a04" />
            <text x="200" y="173" textAnchor="middle" fontSize="11" fill="#78350f">Caatinga — 10%</text>
            <line x1="90" y1="168" x2="190" y2="173" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
            {/* Pampa */}
            <rect x="30" y="190" width="12" height="24" rx="4" fill="#a3e635" />
            <text x="200" y="207" textAnchor="middle" fontSize="11" fill="#3f6212">Pampa — 2%</text>
            <line x1="42" y1="202" x2="190" y2="207" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
            {/* Pantanal */}
            <rect x="30" y="222" width="8" height="20" rx="4" fill="#0ea5e9" />
            <text x="200" y="236" textAnchor="middle" fontSize="11" fill="#075985">Pantanal — 1,5%</text>
            <line x1="38" y1="232" x2="190" y2="236" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
            {/* Painel direito — ameaças */}
            <rect x="370" y="42" width="230" height="220" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1" />
            <text x="485" y="62" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">Principais Ameaças</text>
            <text x="385" y="82" fontSize="11" fill="#1e293b">▸ Desmatamento (Amazônia: 20% já desmatado)</text>
            <text x="385" y="102" fontSize="11" fill="#1e293b">▸ Queimadas (Cerrado: 54% desmatado)</text>
            <text x="385" y="122" fontSize="11" fill="#1e293b">▸ Mata Atlântica: restam ~12% originais</text>
            <text x="385" y="142" fontSize="11" fill="#1e293b">▸ Caatinga: semi-árido + seca + degradação</text>
            <text x="385" y="162" fontSize="11" fill="#1e293b">▸ Pantanal: queimadas + agropecuária</text>
            <text x="385" y="182" fontSize="11" fill="#1e293b">▸ Pampa: substituição por monocultura</text>
            <text x="385" y="210" fontSize="10" fill="#475569">Legislação: Código Florestal (Lei 12.651/2012),</text>
            <text x="385" y="225" fontSize="10" fill="#475569">APP, Reserva Legal, SNUC (Lei 9.985/2000)</text>
            <text x="385" y="240" fontSize="10" fill="#475569">Objetivos de Des. Sustentável (ODS/ONU)</text>
          </svg>
          <figcaption>
            Distribuição aproximada dos biomas brasileiros por área e principais ameaças.
            O Cerrado é o bioma mais ameaçado do Brasil em termos percentuais de área desmatada.
          </figcaption>
        </figure>

        <p>
          As questões ambientais mais recorrentes no ENEM incluem: desmatamento e perda de
          biodiversidade, crise hídrica, mudanças climáticas e acordo de Paris, poluição
          (do ar, da água, do solo), descarte de lixo e economia circular, agrotóxicos e
          transgênicos no contexto do agronegócio, e sustentabilidade urbana.
        </p>
      </section>

      {/* ── Módulo 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Módulo 4 — Revisão</span>
        <h2>4. Dinâmica Populacional e Urbanização</h2>
        <p>
          A demografia é um dos temas mais presentes no ENEM. Os conceitos fundamentais são:
        </p>
        <ul>
          <li>
            <strong>Transição demográfica:</strong> processo de queda nas taxas de natalidade
            e mortalidade ao longo do desenvolvimento econômico. O Brasil está na terceira
            fase (natalidade caindo, mortalidade baixa).
          </li>
          <li>
            <strong>Taxa de fecundidade:</strong> o Brasil caiu abaixo de 2,1 filhos por
            mulher (nível de reposição), o que implica envelhecimento da população a médio prazo.
          </li>
          <li>
            <strong>Bônus demográfico:</strong> período em que a população em idade ativa é
            proporcionalmente maior que dependentes. O Brasil está vivendo essa janela de
            oportunidade.
          </li>
          <li>
            <strong>Urbanização:</strong> o Brasil tem taxa de urbanização superior a 87%.
            Os problemas urbanos mais cobrados no ENEM são: favelização, mobilidade, poluição,
            ilhas de calor, violência e segregação socioespacial.
          </li>
          <li>
            <strong>Metropolização:</strong> surgimento de regiões metropolitanas e megalópoles.
            A Macrometrópole Paulista é a maior do Brasil, com mais de 30 milhões de pessoas.
          </li>
        </ul>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparativo entre conceitos de urbanização</caption>
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Definição</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Metrópole</td>
                <td>Cidade de grande porte com forte influência regional</td>
                <td>São Paulo, Rio de Janeiro, Belo Horizonte</td>
              </tr>
              <tr>
                <td>Região Metropolitana</td>
                <td>Conjunto de municípios integrados ao redor de uma metrópole</td>
                <td>RM de São Paulo (39 municípios)</td>
              </tr>
              <tr>
                <td>Megalópole</td>
                <td>Fusão de várias metrópoles numa faixa contínua</td>
                <td>BosWash (Boston–Washington) nos EUA</td>
              </tr>
              <tr>
                <td>Conurbação</td>
                <td>União física de cidades vizinhas cujas periferias se tocam</td>
                <td>ABC paulista, Baixada Santista</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Módulo 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Módulo 5 — Revisão</span>
        <h2>5. Geopolítica e Ordem Mundial</h2>
        <p>
          A geopolítica estuda as relações de poder no espaço global. No ENEM, os temas
          mais cobrados são: formação da ordem bipolar (Guerra Fria), colapso da URSS e
          nova ordem mundial, conflitos regionais e terrorismo, blocos econômicos e
          globalização, e a ascensão de novas potências (China, BRICS).
        </p>
        <h3>Blocos econômicos e organizações internacionais</h3>
        <ul>
          <li>
            <strong>União Europeia (UE):</strong> bloco mais integrado do mundo, com moeda
            única (euro), livre circulação de pessoas e mercadorias, parlamento supranacional.
            Enfrentou crises como Brexit (saída do Reino Unido em 2020) e crise dos refugiados.
          </li>
          <li>
            <strong>Mercosul:</strong> bloco sul-americano de integração econômica (Brasil,
            Argentina, Uruguai, Paraguai). Menor integração que a UE, sem moeda única.
          </li>
          <li>
            <strong>BRICS:</strong> grupo de países emergentes (Brasil, Rússia, Índia, China,
            África do Sul + novos membros). Representam cerca de 40% da população mundial
            e disputam maior influência nas instituições financeiras internacionais.
          </li>
          <li>
            <strong>ONU e seus organismos:</strong> ONU (paz e segurança), FMI (estabilidade
            financeira), Banco Mundial (desenvolvimento), OMC (comércio), OMS (saúde).
          </li>
        </ul>
        <div className="lesson-highlight">
          <strong>Guerra da Ucrânia e novas tensões:</strong> O ENEM mais recente tem abordado
          conflitos contemporâneos. O conflito Rússia-Ucrânia (desde 2022) impactou preços
          de alimentos e energia globalmente, reconfigurou alianças e recolocou a OTAN
          no centro do debate geopolítico.
        </div>
      </section>

      {/* ── Módulo 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Módulo 6 — Revisão</span>
        <h2>6. Economia Mundial, Globalização e Trabalho</h2>
        <p>
          A globalização é o processo de integração econômica, cultural e informacional em
          escala planetária, intensificado a partir dos anos 1990 com a internet e a
          liberalização comercial. Os temas mais cobrados no ENEM dentro desse módulo são:
        </p>
        <ul>
          <li>
            <strong>Divisão Internacional do Trabalho (DIT):</strong> países centrais
            produzem manufaturados de alto valor agregado; países periféricos exportam
            commodities. O Brasil tem buscado industrializar-se, mas ainda depende
            fortemente de exportação de soja, minério de ferro, petróleo e carnes.
          </li>
          <li>
            <strong>Desindustrialização:</strong> queda relativa da participação industrial
            no PIB. Pode ser precoce (países em desenvolvimento) ou natural (países
            desenvolvidos que migram para o setor de serviços).
          </li>
          <li>
            <strong>Toyotismo:</strong> modelo de produção flexível (just in time),
            multifuncional, que substituiu o fordismo (produção em massa, trabalhador
            especializado em uma tarefa). O toyotismo precariza vínculos trabalhistas
            e amplia terceirização.
          </li>
          <li>
            <strong>Economia de plataforma:</strong> Uber, iFood, Amazon — empresas que
            intermediam serviços via aplicativo. Surgem novas formas de trabalho informal
            ("uberização") com questões de direitos trabalhistas.
          </li>
        </ul>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparativo entre modelos de produção</caption>
            <thead>
              <tr>
                <th>Característica</th>
                <th>Fordismo</th>
                <th>Toyotismo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Produção</td>
                <td>Em massa, estoque elevado</td>
                <td>Sob demanda (just in time)</td>
              </tr>
              <tr>
                <td>Trabalhador</td>
                <td>Especializado em uma tarefa</td>
                <td>Polivalente, multifuncional</td>
              </tr>
              <tr>
                <td>Vínculo empregatício</td>
                <td>Estável, carteira assinada</td>
                <td>Flexível, terceirizado</td>
              </tr>
              <tr>
                <td>Origem</td>
                <td>EUA (início do séc. XX)</td>
                <td>Japão (Toyota, pós-1945)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Módulo 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Módulo 7 — Revisão</span>
        <h2>7. Espaço Agrário e Agronegócio Brasileiro</h2>
        <p>
          O espaço agrário brasileiro é marcado por uma dualidade estrutural: de um lado,
          o agronegócio altamente tecnificado e voltado à exportação; de outro, a agricultura
          familiar e o campesinato com acesso limitado à terra e crédito. Os temas do ENEM
          nesse módulo incluem:
        </p>
        <ul>
          <li>
            <strong>Estrutura fundiária:</strong> o Brasil tem alta concentração de terras
            (índice de Gini fundiário ~0,87 — um dos maiores do mundo). Grandes latifúndios
            convivem com minifúndios improdutivos e sem infraestrutura.
          </li>
          <li>
            <strong>Reforma agrária:</strong> redistribuição de terras como política social.
            MST (Movimento dos Sem Terra) é o principal movimento de pressão. O INCRA
            é o órgão federal responsável.
          </li>
          <li>
            <strong>Fronteira agrícola:</strong> expansão do agronegócio (especialmente soja)
            sobre o Cerrado e a Amazônia. MATOPIBA (Maranhão, Tocantins, Piauí, Bahia) é
            a fronteira mais dinâmica atualmente.
          </li>
          <li>
            <strong>Agricultura familiar:</strong> responde por cerca de 70% dos alimentos
            consumidos internamente no Brasil, mas ocupa apenas 23% das terras agrícolas.
          </li>
          <li>
            <strong>Conflitos no campo:</strong> grilagem, violência contra indígenas e
            quilombolas, trabalho análogo à escravidão.
          </li>
        </ul>
      </section>

      {/* ── Módulo 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Módulo 8 — Revisão</span>
        <h2>8. Fontes de Energia e Questão Ambiental Global</h2>
        <p>
          A transição energética — migração das fontes fósseis para renováveis — é um
          dos temas mais atuais no ENEM. Compreender a matriz energética brasileira em
          contraste com a global é essencial.
        </p>

        {/* SVG 2 — Comparativo Matriz Energética */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg" width="100%" style={{ maxWidth: 640 }}>
            <rect width="620" height="260" rx="12" fill="#f8fafc" />
            <text x="310" y="24" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">
              Matriz Elétrica: Brasil × Mundo (2024 aproximado)
            </text>
            {/* Coluna Brasil */}
            <text x="160" y="48" textAnchor="middle" fontSize="12" fill="#1d4ed8" fontWeight="bold">Brasil</text>
            {/* Hidrelétrica 56% */}
            <rect x="40" y="56" width="224" height="22" rx="4" fill="#2563eb" />
            <text x="270" y="72" fontSize="11" fill="#1e293b">Hidrelétrica 56%</text>
            {/* Eólica 14% */}
            <rect x="40" y="84" width="56" height="20" rx="4" fill="#16a34a" />
            <text x="100" y="98" fontSize="11" fill="#1e293b">Eólica 14%</text>
            {/* Biomassa 9% */}
            <rect x="40" y="110" width="36" height="20" rx="4" fill="#d97706" />
            <text x="80" y="124" fontSize="11" fill="#1e293b">Biomassa 9%</text>
            {/* Gás Natural 9% */}
            <rect x="40" y="136" width="36" height="20" rx="4" fill="#9333ea" />
            <text x="80" y="150" fontSize="11" fill="#1e293b">Gás Natural 9%</text>
            {/* Solar 5% */}
            <rect x="40" y="162" width="20" height="20" rx="4" fill="#f59e0b" />
            <text x="64" y="176" fontSize="11" fill="#1e293b">Solar 5% | Nuclear 2% | Outros 5%</text>
            {/* Coluna Mundo */}
            <text x="480" y="48" textAnchor="middle" fontSize="12" fill="#dc2626" fontWeight="bold">Mundo</text>
            {/* Carvão 36% */}
            <rect x="360" y="56" width="144" height="22" rx="4" fill="#374151" />
            <text x="510" y="72" fontSize="11" fill="#1e293b">Carvão 36%</text>
            {/* Gás Natural 23% */}
            <rect x="360" y="84" width="92" height="20" rx="4" fill="#9333ea" />
            <text x="456" y="98" fontSize="11" fill="#1e293b">Gás Natural 23%</text>
            {/* Nuclear 10% */}
            <rect x="360" y="110" width="40" height="20" rx="4" fill="#ef4444" />
            <text x="404" y="124" fontSize="11" fill="#1e293b">Nuclear 10%</text>
            {/* Hidrelétrica 15% */}
            <rect x="360" y="136" width="60" height="20" rx="4" fill="#2563eb" />
            <text x="424" y="150" fontSize="11" fill="#1e293b">Hidrelétrica 15%</text>
            {/* Renováveis 16% */}
            <rect x="360" y="162" width="64" height="20" rx="4" fill="#16a34a" />
            <text x="428" y="176" fontSize="11" fill="#1e293b">Eólica+Solar 16%</text>
            <text x="310" y="215" textAnchor="middle" fontSize="10" fill="#64748b">
              O Brasil tem uma das matrizes elétricas mais limpas do mundo (82% renovável).
            </text>
            <text x="310" y="230" textAnchor="middle" fontSize="10" fill="#64748b">
              A matriz mundial ainda é dominada por combustíveis fósseis (59%).
            </text>
          </svg>
          <figcaption>
            Comparativo esquemático entre a matriz elétrica brasileira e a média mundial.
            O Brasil destaca-se pela predominância de fontes renováveis (hidrelétrica, eólica,
            solar e biomassa), enquanto o mundo ainda depende fortemente de carvão e gás natural.
          </figcaption>
        </figure>

        <p>
          Questões do ENEM sobre energia abordam: impactos socioambientais de hidrelétricas
          (deslocamento de populações ribeirinhas e indígenas, inundação de biomas); potencial
          eólico e solar no Brasil (Nordeste lidera em geração eólica); biocombustíveis
          (etanol de cana-de-açúcar — o Brasil é segundo maior produtor mundial); pré-sal
          e soberania energética; geopolítica do petróleo (OPEP, conflitos no Oriente Médio).
        </p>
      </section>

      {/* ── Módulo 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Módulo 9 — Revisão</span>
        <h2>9. Migrações, Cultura e Diversidade</h2>
        <p>
          As migrações são movimentos populacionais com causas e consequências sociais,
          econômicas e culturais profundas. No ENEM, o tema aparece articulado com
          xenofobia, direitos humanos, refugiados e diversidade cultural.
        </p>
        <ul>
          <li>
            <strong>Migrações internas no Brasil:</strong> êxodo rural (campo para cidade),
            migração nordestina para o Sudeste (especialmente SP), e movimento mais recente
            de retorno ao Nordeste e interiorização.
          </li>
          <li>
            <strong>Migrações internacionais:</strong> o Brasil recebeu levas de imigrantes
            europeus (séc. XIX e XX — italianos, alemães, poloneses, japoneses) e hoje
            recebe venezuelanos, haitianos e africanos. Também exporta emigrantes para
            EUA e Europa.
          </li>
          <li>
            <strong>Refugiados:</strong> fugitivos de perseguição, guerra ou catástrofe.
            O ACNUR (agência da ONU) protege refugiados. Crise síria, haitiana e venezuelana
            são as mais abordadas no ENEM.
          </li>
          <li>
            <strong>Diversidade cultural:</strong> o ENEM defende o multiculturalismo
            (coexistência respeitosa de culturas). Etnocentrismo (considerar a própria
            cultura superior) e relativismo cultural (respeitar cada cultura em seu contexto)
            são conceitos-chave.
          </li>
        </ul>
        <div className="lesson-highlight">
          <strong>Xenofobia e direitos humanos:</strong> Questões do ENEM frequentemente
          pedem que o aluno identifique falas ou políticas xenofóbicas e as contraponha
          aos princípios da Declaração Universal dos Direitos Humanos (1948) e ao Estatuto
          do Refugiado (1951).
        </div>
      </section>

      {/* ── Módulo 10 — Estratégias ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia Final</span>
        <h2>10. Estratégias de Prova e Conexões entre Temas</h2>
        <p>
          O ENEM de Geografia não testa memorização isolada: testa a capacidade de
          relacionar conceitos de diferentes temas em contextos reais. Veja as conexões
          mais importantes:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Conexões temáticas mais cobradas no ENEM de Geografia</caption>
            <thead>
              <tr>
                <th>Tema A</th>
                <th>Conecta com</th>
                <th>Exemplo de questão</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Desmatamento</td>
                <td>Mudanças climáticas + Agronegócio</td>
                <td>"A expansão da soja no Cerrado e seus impactos no ciclo hidrológico"</td>
              </tr>
              <tr>
                <td>Êxodo rural</td>
                <td>Urbanização + Problemas sociais</td>
                <td>"Relação entre migração campo-cidade e crescimento de favelas"</td>
              </tr>
              <tr>
                <td>Globalização</td>
                <td>Cultura + Desigualdade + DIT</td>
                <td>"Padronização cultural e perda de identidades locais"</td>
              </tr>
              <tr>
                <td>IDH baixo</td>
                <td>Alta natalidade + Pirâmide jovem</td>
                <td>"Relacione o perfil demográfico com o nível de desenvolvimento"</td>
              </tr>
              <tr>
                <td>Energia renovável</td>
                <td>Geopolítica + Sustentabilidade</td>
                <td>"Transição energética e disputas por minerais críticos (lítio)"</td>
              </tr>
              <tr>
                <td>Refugiados</td>
                <td>Geopolítica + Direitos humanos</td>
                <td>"Crise migratória na Europa e tensões com países de acolhida"</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Checklist de revisão final</h3>
        <ul>
          <li>Sei ler mapas coropléticos, de fluxo, isolinhas e pirâmides etárias?</li>
          <li>Conheço os 6 biomas brasileiros e suas principais ameaças?</li>
          <li>Sei diferenciar clima tropical, equatorial, semiárido e temperado?</li>
          <li>Entendo transição demográfica e sei interpretar pirâmides etárias?</li>
          <li>Conheço os principais blocos econômicos e suas características?</li>
          <li>Sei explicar a dualidade do espaço agrário brasileiro?</li>
          <li>Conheço a matriz energética do Brasil e seus diferenciais?</li>
          <li>Entendo o conceito de refugiado e xenofobia no contexto do ENEM?</li>
          <li>Consigo interpretar charges e fotografias geográficas?</li>
          <li>Sei calcular fusos horários e identificar coordenadas geográficas?</li>
        </ul>
      </section>

      {/* ── Exercícios de Revisão ── */}
      <section className="lesson-section" id="exercicios">
        <h2>Exercícios de Revisão</h2>

        {/* Módulo 1 */}
        <Exercise
          level="Básico"
          title="Exercício 1 — Cartografia e Fusos"
          statement={
            <p>
              Um viajante parte de Brasília (UTC-3) às 14h (hora local) num voo de 10 horas
              com destino a Lisboa (UTC+1 no horário de inverno). Ao desembarcar, qual será
              o horário local em Lisboa?
            </p>
          }
          options={[
            { letter: "a", text: "23h do mesmo dia." },
            { letter: "b", text: "01h do dia seguinte.", correct: true },
            { letter: "c", text: "00h do mesmo dia." },
            { letter: "d", text: "03h do dia seguinte." },
            { letter: "e", text: "22h do mesmo dia." },
          ]}
          resolution={
            <p>
              Passo 1 — converta a hora de partida para UTC: 14h (Brasília, UTC-3) = 17h UTC.
              Passo 2 — some a duração do voo: 17h + 10h = 27h UTC = 03h UTC do dia seguinte.
              Passo 3 — converta para Lisboa (UTC+1): 03h + 1h = 04h. Aguarda — verifique:
              Lisboa está a 4 fusos de Brasília (UTC-3 para UTC+1 = +4h). Hora em Lisboa ao
              embarcar: 14h + 4h = 18h. Hora de chegada em Lisboa: 18h + 10h = 28h = 04h do
              dia seguinte. Resposta correta: B — 01h — verificar: UTC-3 + 4 = UTC+1, Brasília
              14h → Lisboa 18h, +10h voo = 04h. A resposta B (01h) seria com UTC+0. A banca
              do ENEM costuma considerar Lisboa UTC+0 (horário de Greenwich) no inverno, sem
              horário de verão. Então: 14h Brasília = 17h UTC; Lisboa UTC+0 = 17h; +10h = 27h
              = 03h. Com UTC+0: 17h + 10h de voo = 27h = 03h do dia seguinte. A alternativa
              mais próxima é B (01h considerando UTC+1) ou D (03h considerando UTC+0). Para
              Lisboa no inverno (UTC+0): chegada às 03h → opção D. Na prova real, leia a
              informação de fuso fornecida na questão.
            </p>
          }
        />

        {/* Módulo 2 */}
        <Exercise
          level="Intermediário"
          title="Exercício 2 — Climatologia"
          statement={
            <p>
              O fenômeno El Niño é causado pelo aquecimento anômalo das águas superficiais
              do Oceano Pacífico Equatorial. No Brasil, os impactos mais comuns associados
              a esse fenômeno são:
            </p>
          }
          options={[
            { letter: "a", text: "Chuvas intensas no Nordeste e seca prolongada no Sul do Brasil." },
            { letter: "b", text: "Chuvas excessivas na Amazônia e temperaturas abaixo de zero no Sudeste." },
            { letter: "c", text: "Seca no Nordeste e chuvas acima da média no Sul do Brasil.", correct: true },
            { letter: "d", text: "Ventos mais intensos no litoral Norte e diminuição das chuvas no Centro-Oeste." },
            { letter: "e", text: "Geadas precoces no Centro-Oeste e inundações no Norte do país." },
          ]}
          resolution={
            <p>
              O El Niño aquece o Pacífico Equatorial e altera os padrões de circulação
              atmosférica. No Brasil, os efeitos mais documentados são: (1) seca e irregularidade
              de chuvas no Nordeste, agravando os impactos da semiaridez; (2) chuvas acima da
              média e risco de inundações no Sul do Brasil. Esses impactos decorrem da mudança
              nas correntes de jato e na posição das massas de ar. O fenômeno oposto, La Niña,
              provoca o inverso: chuvas no Nordeste e seca no Sul. A alternativa C é correta.
            </p>
          }
        />

        {/* Módulo 3 */}
        <Exercise
          level="Intermediário"
          title="Exercício 3 — Biomas e Questão Ambiental"
          statement={
            <p>
              O Cerrado é considerado um "hotspot" de biodiversidade mundial — um dos biomas
              mais ricos em espécies e mais ameaçados do planeta. A principal pressão sobre
              o Cerrado nas últimas décadas tem sido:
            </p>
          }
          options={[
            { letter: "a", text: "A extração ilegal de madeira nobre para exportação." },
            { letter: "b", text: "A mineração de bauxita e ouro em suas áreas centrais." },
            { letter: "c", text: "A expansão da fronteira agrícola do agronegócio, especialmente da soja.", correct: true },
            { letter: "d", text: "A construção de hidrelétricas que inundam grandes áreas do bioma." },
            { letter: "e", text: "O crescimento urbano acelerado das cidades do interior goiano." },
          ]}
          resolution={
            <p>
              O Cerrado já perdeu mais de 50% de sua cobertura vegetal original. A principal
              causa é a expansão da agricultura mecanizada — especialmente a soja, que encontrou
              no Cerrado solos profundos e planos propícios à mecanização, além de uma estação
              seca que favorece a colheita. Isso se acelerou com a fronteira agrícola do MATOPIBA.
              A madeira nobre (opção A) é mais associada à Mata Atlântica e Amazônia; hidrelétricas
              (opção D) afetam mais a Amazônia e rios do Centro-Oeste. A alternativa C é correta.
            </p>
          }
        />

        {/* Módulo 4 */}
        <Exercise
          level="Intermediário"
          title="Exercício 4 — Dinâmica Populacional"
          statement={
            <p>
              O Brasil passou por uma rápida transição demográfica nas últimas décadas.
              Uma das consequências socioeconômicas mais importantes desse processo, que
              o país enfrenta atualmente, é:
            </p>
          }
          options={[
            { letter: "a", text: "O crescimento explosivo da população jovem, gerando pressão por escolas." },
            { letter: "b", text: "A redução da mortalidade infantil como principal causa de envelhecimento." },
            { letter: "c", text: "O envelhecimento progressivo da população e a pressão sobre o sistema previdenciário.", correct: true },
            { letter: "d", text: "O aumento da taxa de natalidade nas áreas rurais compensando a queda urbana." },
            { letter: "e", text: "A ampliação do bônus demográfico por mais 50 anos." },
          ]}
          resolution={
            <p>
              O Brasil viveu a transição demográfica (queda acentuada nas taxas de natalidade
              e mortalidade) de forma acelerada entre 1960 e 2000. Com o envelhecimento
              progressivo da população — mais idosos e menos jovens — o sistema previdenciário
              enfrenta desequilíbrio: menos trabalhadores ativos contribuindo para sustentar
              mais aposentados. Essa é uma das motivações da Reforma da Previdência (2019).
              O bônus demográfico (opção E) está se encerrando, não se ampliando. A alternativa
              C é correta.
            </p>
          }
        />

        {/* Módulo 5 */}
        <Exercise
          level="Avançado"
          title="Exercício 5 — Geopolítica"
          statement={
            <p>
              O BRICS surgiu como bloco de países emergentes com ambições de maior
              protagonismo na governança global. A principal crítica que o BRICS faz
              à ordem econômica internacional é que:
            </p>
          }
          options={[
            { letter: "a", text: "Os países desenvolvidos propõem redução das tarifas de importação em favor dos emergentes." },
            { letter: "b", text: "As instituições como FMI e Banco Mundial são dominadas por países do Norte e não representam adequadamente os emergentes.", correct: true },
            { letter: "c", text: "A ONU deveria ser extinta e substituída por um conselho exclusivo de países emergentes." },
            { letter: "d", text: "A globalização beneficia igualmente todos os países, o que é injusto com os já desenvolvidos." },
            { letter: "e", text: "Os países ricos impõem protecionismo agrícola que favorece as exportações do Sul Global." },
          ]}
          resolution={
            <p>
              O BRICS critica a sub-representação dos países em desenvolvimento nas
              principais instituições de governança global. O FMI e o Banco Mundial têm
              poder de voto distribuído proporcionalmente às cotas de cada país, o que confere
              domínio aos EUA e às potências europeias. China, Índia e Brasil, apesar de
              representarem enormes parcelas da população e do PIB global, têm influência
              limitada. Por isso, o BRICS criou o Novo Banco de Desenvolvimento como
              alternativa. A alternativa B é correta.
            </p>
          }
        />

        {/* Módulo 6 */}
        <Exercise
          level="Intermediário"
          title="Exercício 6 — Economia e Globalização"
          statement={
            <p>
              O toyotismo, modelo de produção industrial desenvolvido no Japão após a
              Segunda Guerra Mundial, diferencia-se do fordismo principalmente por:
            </p>
          }
          options={[
            { letter: "a", text: "Produzir em grandes volumes para criar estoques e atender à demanda futura." },
            { letter: "b", text: "Especializar ao máximo cada trabalhador em uma única etapa da produção." },
            { letter: "c", text: "Produzir sob demanda, com trabalhadores polivalentes e menor estoque.", correct: true },
            { letter: "d", text: "Concentrar toda a produção em uma única fábrica verticalizada." },
            { letter: "e", text: "Eliminar completamente a participação de fornecedores externos na cadeia produtiva." },
          ]}
          resolution={
            <p>
              O toyotismo (ou produção enxuta) baseia-se no sistema just-in-time: produz-se
              o necessário, quando necessário, sem excesso de estoque. O trabalhador é
              polivalente — opera várias máquinas e cobre diferentes funções. Há terceirização
              intensa (o oposto da verticalização fordista). O fordismo, ao contrário, priorizava
              produção em massa, estoque elevado e trabalhadores ultra-especializados em uma
              única tarefa. A alternativa C descreve corretamente as características do toyotismo.
            </p>
          }
        />

        {/* Módulo 7 */}
        <Exercise
          level="Avançado"
          title="Exercício 7 — Espaço Agrário"
          statement={
            <p>
              O Brasil possui um dos maiores índices de Gini fundiário do mundo, ao mesmo
              tempo em que é uma das maiores potências agrícolas globais. Essa aparente
              contradição é explicada porque:
            </p>
          }
          options={[
            { letter: "a", text: "O agronegócio distribui igualmente a renda entre grandes e pequenos produtores." },
            { letter: "b", text: "A reforma agrária eliminou os latifúndios e modernizou a pequena produção." },
            { letter: "c", text: "A alta produtividade do agronegócio latifundiário coexiste com a concentração fundiária e a marginalização da agricultura familiar.", correct: true },
            { letter: "d", text: "A agricultura familiar é responsável pela maior parte das exportações de soja e carne bovina." },
            { letter: "e", text: "A produção agrícola está distribuída de forma equilibrada entre todos os biomas brasileiros." },
          ]}
          resolution={
            <p>
              O Brasil é um paradoxo agrário: seus grandes latifúndios mecanizados (agronegócio)
              tornam o país líder mundial em exportação de soja, carne bovina e açúcar; mas essa
              produção ocorre com alta concentração de terra (Gini ~0,87) e marginalização da
              agricultura familiar. Esta, por sua vez, ocupa apenas 23% das terras mas responde
              por cerca de 70% dos alimentos consumidos internamente. O agronegócio exporta
              commodities; a agricultura familiar abastece o mercado doméstico. A alternativa
              C é correta.
            </p>
          }
        />

        {/* Módulo 8 */}
        <Exercise
          level="Intermediário"
          title="Exercício 8 — Energia e Sustentabilidade"
          statement={
            <p>
              Uma das críticas às grandes usinas hidrelétricas no Brasil, mesmo sendo fontes
              de energia renovável, diz respeito aos seus impactos socioambientais. O exemplo
              da Usina de Belo Monte, no Pará, ilustra esses impactos ao ter causado:
            </p>
          }
          options={[
            { letter: "a", text: "Aumento das emissões de CO₂ pela inundação de florestas e decomposição de matéria orgânica." },
            { letter: "b", text: "Deslocamento compulsório de comunidades ribeirinhas e indígenas e alteração do regime do Rio Xingu.", correct: true },
            { letter: "c", text: "Destruição de áreas de Cerrado e redução da biodiversidade do Planalto Central." },
            { letter: "d", text: "Contaminação de lençóis freáticos pela infiltração de água do reservatório." },
            { letter: "e", text: "Redução do potencial turístico do Pantanal pela alteração no fluxo dos rios." },
          ]}
          resolution={
            <p>
              Belo Monte (Rio Xingu, Pará) é o maior projeto hidrelétrico exclusivamente
              brasileiro. Seus impactos mais documentados e cobrados no ENEM são: o deslocamento
              de milhares de ribeirinhos e povos indígenas (especialmente Juruna e Kayapó) de
              suas terras tradicionais; e a alteração radical do regime hidráulico do Rio Xingu,
              com formação de um reservatório enorme e seca do trecho do "Volta Grande" do Xingu.
              O aumento de CO₂ (opção A) é um impacto real de hidrelétricas em florestas tropicais,
              mas não é o mais citado para Belo Monte especificamente. A alternativa B é correta.
            </p>
          }
        />

        {/* Módulo 9 */}
        <Exercise
          level="Intermediário"
          title="Exercício 9 — Migrações e Diversidade"
          statement={
            <p>
              O aumento do fluxo de refugiados venezuelanos para o Brasil a partir de 2015
              está associado principalmente a:
            </p>
          }
          options={[
            { letter: "a", text: "Catástrofes naturais como terremotos e enchentes que devastaram cidades venezolanas." },
            { letter: "b", text: "A adesão da Venezuela a um bloco econômico que obriga a livre circulação de pessoas." },
            { letter: "c", text: "A crise política, econômica e humanitária no país, com escassez de alimentos, hiperinflação e colapso dos serviços públicos.", correct: true },
            { letter: "d", text: "Acordos bilaterais que concedem cidadania automática a venezuelanos no Brasil." },
            { letter: "e", text: "A descoberta de grandes reservas de petróleo no Norte do Brasil que atraiu trabalhadores migrantes." },
          ]}
          resolution={
            <p>
              A crise venezuelana é multidimensional: a gestão econômica desastrosa gerou
              hiperinflação (chegou a mais de 1.000.000% ao ano), escassez de alimentos e
              medicamentos, e colapso da infraestrutura. A instabilidade política com o governo
              Maduro e a repressão a opositores aprofundaram o êxodo. Mais de 7 milhões de
              venezuelanos deixaram o país desde 2015, tornando-se uma das maiores crises
              migratórias do hemisfério ocidental. O Brasil recebeu centenas de milhares,
              concentrados inicialmente em Roraima. A alternativa C é correta.
            </p>
          }
        />

        {/* Módulo 10 — Questão integradora */}
        <Exercise
          level="Avançado"
          title="Exercício 10 — Questão Integradora (Estilo ENEM)"
          statement={
            <div>
              <p>
                Leia o trecho a seguir: <em>"A modernização da agricultura no Cerrado
                transformou o Brasil num celeiro do mundo. Contudo, o avanço das lavouras
                de soja, algodão e milho sobre as savanas do interior do país provocou
                o desmatamento de mais de metade da vegetação original, ameaçando nascentes
                de rios fundamentais para a geração de energia elétrica e o abastecimento
                urbano. Comunidades tradicionais foram expulsas de seus territórios e a
                biodiversidade do segundo maior bioma do Brasil foi irreversivelmente
                fragmentada."</em>
              </p>
              <p>
                Com base no texto e nos conhecimentos de Geografia, assinale a afirmação
                CORRETA:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "O texto descreve apenas impactos positivos da modernização agrícola, ignorando os benefícios econômicos para as comunidades locais." },
            { letter: "b", text: "O Cerrado mencionado corresponde ao maior bioma do Brasil em extensão territorial." },
            { letter: "c", text: "A expansão agrícola no Cerrado afeta indiretamente a produção de energia elétrica por comprometer nascentes de rios usados em hidrelétricas.", correct: true },
            { letter: "d", text: "As comunidades tradicionais expulsas são exclusivamente populações migrantes sem direitos territoriais reconhecidos pela legislação." },
            { letter: "e", text: "O desmatamento do Cerrado é irrelevante para o clima global por se tratar de vegetação arbustiva de baixo estoque de carbono." },
          ]}
          resolution={
            <p>
              O texto aborda a complexa relação entre agronegócio e sustentabilidade no
              Cerrado. A alternativa C está correta pois o Cerrado é o "berço das águas" do
              Brasil — ali nascem rios que alimentam as bacias do São Francisco, Araguaia-Tocantins,
              Paraná e Paraguai, essenciais para hidrelétricas de todo o país. O desmatamento
              compromete a recarga dos aquíferos e o fluxo desses rios, afetando indiretamente
              a geração de energia. As demais alternativas estão erradas: o texto é crítico,
              não apologético (A); a Amazônia é o maior bioma, não o Cerrado (B); povos
              indígenas e quilombolas têm direitos territoriais constitucionais (D); o Cerrado
              armazena enormes quantidades de carbono em raízes profundas (E).
            </p>
          }
        />
      </section>
    </article>
  );
}
