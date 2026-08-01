"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap39Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 39</span>
          <h1>Questões ambientais brasileiras: Amazônia, Cerrado, Pantanal, Caatinga, Mata Atlântica e Pampa</h1>
          <p>
            O Brasil é um dos países com maior biodiversidade do planeta, abrigando cerca de 20%
            de todas as espécies vivas conhecidas. No entanto, essa riqueza natural está sob forte
            pressão das atividades humanas: o desmatamento, a agropecuária extensiva, a urbanização,
            a mineração e as mudanças climáticas ameaçam os seis biomas brasileiros em diferentes
            intensidades. Compreender os problemas ambientais de cada bioma e as políticas de
            conservação é fundamental para pensar um desenvolvimento sustentável para o Brasil.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Amazônia</span>
        <h2>1. Amazônia: a maior floresta tropical do mundo</h2>
        <p>
          A Amazônia brasileira ocupa aproximadamente 49% do território nacional e abriga a maior
          floresta tropical contínua do planeta. Com mais de 3 milhões de espécies animais e vegetais,
          ela desempenha funções ecológicas essenciais para o equilíbrio climático global: absorção
          de carbono, regulação hídrica via "rios voadores" e manutenção da biodiversidade.
        </p>
        <p>
          O maior problema ambiental da Amazônia é o <strong>desmatamento</strong>. Desde os anos
          1970, com a abertura de rodovias como a Transamazônica, o desmatamento avançou de forma
          acelerada. O pico histórico foi registrado em 1995 (29.059 km² desmatados em um ano).
          Com o PPCDAm (Plano de Ação para Prevenção e Controle do Desmatamento na Amazônia Legal),
          criado em 2004, houve redução significativa até 2012. No entanto, a partir de 2019, houve
          novo aumento expressivo.
        </p>
        <p>
          O chamado <strong>"ponto de não-retorno"</strong> é discutido por cientistas: se o
          desmatamento ultrapassar 20–25% da floresta original, a Amazônia pode entrar em processo
          de "savanização" — incapaz de gerar chuvas suficientes para se regenerar.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Desmatamento na Amazônia Legal — dados históricos selecionados (INPE/PRODES)</caption>
            <thead>
              <tr>
                <th>Ano</th>
                <th>Área desmatada (km²)</th>
                <th>Contexto político-econômico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1995</td>
                <td>29.059</td>
                <td>Pico histórico; avanço da pecuária</td>
              </tr>
              <tr>
                <td>2004</td>
                <td>27.772</td>
                <td>Criação do PPCDAm</td>
              </tr>
              <tr>
                <td>2012</td>
                <td>4.571</td>
                <td>Mínimo histórico — políticas de fiscalização eficazes</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>10.129</td>
                <td>Aumento acentuado; enfraquecimento da fiscalização</td>
              </tr>
              <tr>
                <td>2023</td>
                <td>11.568</td>
                <td>Retomada de políticas de controle; queda gradual</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG figura 1 — linha do tempo do desmatamento */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="620" height="280" fill="#f0fdf4" rx="12" />
          <text x="310" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1e293b">
            Desmatamento na Amazônia Legal — Tendência histórica (km²)
          </text>
          {/* Eixo Y */}
          <line x1="60" y1="40" x2="60" y2="230" stroke="#94a3b8" strokeWidth="1.5" />
          {/* Eixo X */}
          <line x1="60" y1="230" x2="590" y2="230" stroke="#94a3b8" strokeWidth="1.5" />
          {/* Escala Y — linhas de referência */}
          <line x1="60" y1="80" x2="590" y2="80" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4" />
          <text x="50" y="84" textAnchor="end" fontSize="9" fill="#64748b">30k</text>
          <line x1="60" y1="130" x2="590" y2="130" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4" />
          <text x="50" y="134" textAnchor="end" fontSize="9" fill="#64748b">20k</text>
          <line x1="60" y1="180" x2="590" y2="180" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4" />
          <text x="50" y="184" textAnchor="end" fontSize="9" fill="#64748b">10k</text>
          {/* Linha do desmatamento — pontos: 1995 alto, 2004 alto, 2012 baixo, 2019 médio */}
          <polyline
            points="80,82 180,88 280,210 380,145 480,155 560,148"
            fill="none" stroke="#dc2626" strokeWidth="3" strokeLinejoin="round"
          />
          {/* Pontos */}
          <circle cx="80" cy="82" r="5" fill="#dc2626" />
          <text x="80" y="72" textAnchor="middle" fontSize="9" fill="#b91c1c">1995</text>
          <circle cx="180" cy="88" r="5" fill="#dc2626" />
          <text x="180" y="78" textAnchor="middle" fontSize="9" fill="#b91c1c">2004</text>
          <circle cx="280" cy="210" r="5" fill="#16a34a" />
          <text x="280" y="200" textAnchor="middle" fontSize="9" fill="#15803d">2012</text>
          <circle cx="380" cy="145" r="5" fill="#dc2626" />
          <text x="380" y="135" textAnchor="middle" fontSize="9" fill="#b91c1c">2019</text>
          <circle cx="480" cy="155" r="5" fill="#d97706" />
          <text x="480" y="145" textAnchor="middle" fontSize="9" fill="#92400e">2021</text>
          <circle cx="560" cy="148" r="5" fill="#d97706" />
          <text x="560" y="138" textAnchor="middle" fontSize="9" fill="#92400e">2023</text>
          {/* Anotação */}
          <text x="310" y="268" textAnchor="middle" fontSize="9" fill="#64748b">
            Fonte: INPE/PRODES. Escala Y aproximada. Verde = mínimo histórico.
          </text>
        </svg>
        <figcaption>Tendência histórica do desmatamento na Amazônia Legal: queda após 2004 e alta após 2019.</figcaption>
      </figure>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cerrado</span>
        <h2>2. Cerrado: o bioma mais ameaçado do Brasil</h2>
        <p>
          O Cerrado é a savana tropical mais biodiversa do mundo e o segundo maior bioma do Brasil,
          ocupando originalmente cerca de 24% do território. É chamado de <strong>"berço das águas"</strong>
          por abrigar as nascentes das principais bacias hidrográficas brasileiras (São Francisco,
          Tocantins, Araguaia, Paranaíba, entre outras).
        </p>
        <p>
          No entanto, o Cerrado é o bioma mais desmatado em proporção à sua área original. Restam
          menos de 50% de vegetação nativa, sendo que apenas cerca de 20% está sob proteção legal.
          O principal vetor de destruição é a expansão da fronteira agrícola — especialmente a
          sojicultura mecanizada, que avança sobre o bioma desde os anos 1970, impulsionada pela
          pesquisa da Embrapa que tornou os solos ácidos do Cerrado produtivos via calagem.
        </p>
        <p>
          O MATOPIBA (Maranhão, Tocantins, Piauí e Bahia) representa a nova fronteira agrícola
          sobre o Cerrado, com implicações graves para a biodiversidade e os recursos hídricos
          da região.
        </p>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pantanal</span>
        <h2>3. Pantanal: a maior planície alagável do mundo</h2>
        <p>
          O Pantanal Mato-Grossense é a maior planície alagável do planeta, com aproximadamente
          150 mil km² no Brasil (Mato Grosso e Mato Grosso do Sul) e estendendo-se pela Bolívia
          e Paraguai. Durante a época das chuvas (outubro a março), grande parte da planície é
          inundada, criando um complexo mosaico de habitats que sustenta uma biodiversidade
          extraordinária: 655 espécies de aves, 325 de peixes, 80 de répteis e mais de 100
          espécies de mamíferos.
        </p>
        <p>
          O Pantanal sofre pressões crescentes: <strong>desmatamento e queimadas</strong> (os
          incêndios históricos de 2020 destruíram cerca de 30% do bioma em um único ano),
          <strong>agropecuária</strong> intensiva nas bordas, <strong>garimpo e mineração</strong>
          que contaminam rios com mercúrio, e mudanças climáticas que podem alterar o regime
          de cheias.
        </p>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Caatinga</span>
        <h2>4. Caatinga: o único bioma exclusivamente brasileiro</h2>
        <p>
          A Caatinga é o único bioma do mundo que existe exclusivamente no Brasil. Ocupa cerca
          de 10% do território nacional, cobrindo a maior parte do Nordeste interior
          (semiárido). O nome vem do tupi e significa "mata branca" — em referência ao aspecto
          das árvores que perdem as folhas durante a seca.
        </p>
        <p>
          Ao contrário do que se pensa, a Caatinga é um bioma rico em espécies endêmicas
          (exclusivas): mais de 500 espécies de plantas, 177 de peixes, 150 de mamíferos e
          548 de aves. No entanto, é também um dos biomas menos protegidos: menos de 10% tem
          áreas legalmente protegidas.
        </p>
        <p>
          Os principais problemas ambientais da Caatinga são: <strong>desmatamento</strong>
          para lenha (principal fonte de energia das populações rurais), <strong>desertificação</strong>
          (o Nordeste tem os maiores núcleos de desertificação do Brasil, em áreas como Gilbués-PI,
          Irauçuba-CE e Cabrobó-PE), <strong>salinização</strong> dos solos por irrigação mal
          conduzida e <strong>caça predatória</strong>.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mata Atlântica</span>
        <h2>5. Mata Atlântica: hotspot de biodiversidade</h2>
        <p>
          A Mata Atlântica é um dos biomas mais ameaçados e mais biodiversos do planeta. Originalmente,
          cobria uma faixa contínua de cerca de 1,1 milhão de km², ao longo de toda a costa
          brasileira, do Rio Grande do Norte ao Rio Grande do Sul, penetrando pelo interior.
          Hoje, restam menos de <strong>12–15% da cobertura original</strong>, distribuídos em
          fragmentos desconectados, pressionados pela urbanização e pela agropecuária.
        </p>
        <p>
          Apesar da devastação, a Mata Atlântica ainda abriga cerca de 20.000 espécies de plantas
          (40% endêmicas), 850 espécies de aves e 370 de anfíbios. Ela é considerada um
          <strong> hotspot de biodiversidade</strong> global — área com altíssima riqueza biológica
          e altíssimo nível de ameaça.
        </p>
        <p>
          A Mata Atlântica é fundamental para o abastecimento de água de cidades como São Paulo,
          Rio de Janeiro, Porto Alegre e Recife, que dependem de suas nascentes e mananciais.
          A legislação brasileira prevê proteção especial para o bioma (Lei da Mata Atlântica,
          Lei 11.428/2006), que exige desmatamento mínimo e incentiva a restauração.
        </p>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pampa</span>
        <h2>6. Pampa: campos sulinos e tradição gaúcha</h2>
        <p>
          O Pampa é o menor bioma brasileiro em área (~2% do território), restrito ao Rio Grande
          do Sul e compartilhado com Argentina e Uruguai. É caracterizado por campos naturais
          (pastagens nativas), com relevante biodiversidade de gramíneas, flores e fauna adaptada
          ao clima subtropical.
        </p>
        <p>
          O Pampa está entre os biomas mais desmatados: restam cerca de 55% da vegetação
          nativa. Os principais vetores de degradação são a conversão dos campos nativos em
          lavouras de soja e arroz irrigado, o reflorestamento com espécies exóticas
          (eucalipto e pinus, que eliminam a biodiversidade nativa) e a pecuária extensiva
          com manejo inadequado.
        </p>
        <p>
          Paradoxalmente, a pecuária extensiva tradicional, quando bem manejada, pode ser
          compatível com a conservação do Pampa, pois os campos nativos evoluíram junto
          com os herbívoros. O desafio é equilibrar a atividade econômica com a preservação
          da biodiversidade única desse bioma.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação entre biomas</span>
        <h2>7. Estado de conservação dos biomas brasileiros</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Estado de conservação dos seis biomas brasileiros</caption>
            <thead>
              <tr>
                <th>Bioma</th>
                <th>Área original (km²)</th>
                <th>Vegetação remanescente (%)</th>
                <th>Área protegida (%)</th>
                <th>Principal ameaça</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amazônia</td>
                <td>4.196.943</td>
                <td>~82%</td>
                <td>~43%</td>
                <td>Desmatamento, garimpo</td>
              </tr>
              <tr>
                <td>Cerrado</td>
                <td>2.036.448</td>
                <td>~48%</td>
                <td>~20%</td>
                <td>Agronegócio, soja</td>
              </tr>
              <tr>
                <td>Caatinga</td>
                <td>844.453</td>
                <td>~54%</td>
                <td>~10%</td>
                <td>Desmatamento, desertificação</td>
              </tr>
              <tr>
                <td>Mata Atlântica</td>
                <td>1.110.182</td>
                <td>~12%</td>
                <td>~12%</td>
                <td>Urbanização, fragmentação</td>
              </tr>
              <tr>
                <td>Pampa</td>
                <td>176.496</td>
                <td>~55%</td>
                <td>&lt;3%</td>
                <td>Sojicultura, espécies exóticas</td>
              </tr>
              <tr>
                <td>Pantanal</td>
                <td>150.355</td>
                <td>~67%</td>
                <td>~5%</td>
                <td>Queimadas, garimpo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG figura 2 — diagrama de ameaças por bioma */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="620" height="300" fill="#fff7ed" rx="12" />
          <text x="310" y="26" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1e293b">
            Vegetação Remanescente por Bioma (% da área original)
          </text>
          {/* Barras horizontais */}
          {/* Amazônia 82% */}
          <rect x="120" y="45" width="328" height="26" rx="5" fill="#16a34a" opacity="0.85" />
          <text x="115" y="63" textAnchor="end" fontSize="11" fill="#166534">Amazônia</text>
          <text x="455" y="63" fontSize="11" fontWeight="bold" fill="#166534">82%</text>
          {/* Pantanal 67% */}
          <rect x="120" y="80" width="268" height="26" rx="5" fill="#38bdf8" opacity="0.85" />
          <text x="115" y="98" textAnchor="end" fontSize="11" fill="#0c4a6e">Pantanal</text>
          <text x="394" y="98" fontSize="11" fontWeight="bold" fill="#0c4a6e">67%</text>
          {/* Pampa 55% */}
          <rect x="120" y="115" width="220" height="26" rx="5" fill="#84cc16" opacity="0.85" />
          <text x="115" y="133" textAnchor="end" fontSize="11" fill="#365314">Pampa</text>
          <text x="346" y="133" fontSize="11" fontWeight="bold" fill="#365314">55%</text>
          {/* Caatinga 54% */}
          <rect x="120" y="150" width="216" height="26" rx="5" fill="#fbbf24" opacity="0.85" />
          <text x="115" y="168" textAnchor="end" fontSize="11" fill="#78350f">Caatinga</text>
          <text x="342" y="168" fontSize="11" fontWeight="bold" fill="#78350f">54%</text>
          {/* Cerrado 48% */}
          <rect x="120" y="185" width="192" height="26" rx="5" fill="#f97316" opacity="0.85" />
          <text x="115" y="203" textAnchor="end" fontSize="11" fill="#7c2d12">Cerrado</text>
          <text x="318" y="203" fontSize="11" fontWeight="bold" fill="#7c2d12">48%</text>
          {/* Mata Atlântica 12% */}
          <rect x="120" y="220" width="48" height="26" rx="5" fill="#dc2626" opacity="0.85" />
          <text x="115" y="238" textAnchor="end" fontSize="11" fill="#7f1d1d">Mata Atlântica</text>
          <text x="174" y="238" fontSize="11" fontWeight="bold" fill="#7f1d1d">12%</text>
          {/* Linha de referência 100% */}
          <line x1="520" y1="40" x2="520" y2="255" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5" />
          <text x="521" y="38" fontSize="9" fill="#64748b">100%</text>
          <text x="310" y="285" textAnchor="middle" fontSize="9" fill="#64748b">
            Mata Atlântica é o bioma com menor cobertura remanescente (~12%). Fonte: MapBiomas / MMA.
          </text>
        </svg>
        <figcaption>Percentual de vegetação nativa remanescente em cada bioma brasileiro — a Mata Atlântica é a mais ameaçada.</figcaption>
      </figure>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legislação ambiental</span>
        <h2>8. Código Florestal e legislação ambiental brasileira</h2>
        <p>
          O <strong>Código Florestal Brasileiro</strong> (Lei 12.651/2012, com alterações) é a
          principal legislação que regula o uso da terra nas propriedades rurais. Seus principais
          instrumentos são:
        </p>
        <ul>
          <li>
            <strong>Reserva Legal (RL):</strong> percentual mínimo da propriedade rural que deve
            ser mantido com vegetação nativa: 80% na Amazônia, 35% no Cerrado da Amazônia Legal
            e 20% nas demais regiões.
          </li>
          <li>
            <strong>Área de Preservação Permanente (APP):</strong> áreas que devem ser preservadas
            independentemente de estarem em propriedade pública ou privada — margens de rios,
            topos de morros, encostas íngremes, beiras de lagoas.
          </li>
          <li>
            <strong>Cadastro Ambiental Rural (CAR):</strong> registro eletrônico obrigatório das
            propriedades rurais, mapeando as APPs, Reservas Legais e vegetação nativa.
          </li>
        </ul>
        <p>
          A versão de 2012 do Código Florestal gerou polêmica por ter anistiado desmatamentos
          ilegais ocorridos antes de 2008 em pequenas propriedades — o que foi criticado por
          ambientalistas como "anistia ao desmatamento".
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mudanças climáticas</span>
        <h2>9. Mudanças climáticas e impactos no Brasil</h2>
        <p>
          O Brasil é altamente vulnerável às mudanças climáticas globais. Entre os impactos já
          observados e projetados estão: aumento da frequência e intensidade de eventos extremos
          (chuvas torrenciais, secas, ondas de calor), deslocamento de zonas climáticas, aumento
          do nível do mar nas cidades costeiras e alteração dos regimes de chuvas em biomas como
          o Cerrado e a Amazônia.
        </p>
        <p>
          Ao mesmo tempo, o Brasil é um país de importância global na luta contra as mudanças
          climáticas: o desmatamento da Amazônia responde por uma parcela significativa das
          emissões brasileiras de CO². A redução do desmatamento é a principal ação que o Brasil
          pode tomar para cumprir seus compromissos climáticos, especialmente no Acordo de Paris
          (2015), do qual é signatário.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Impactos das mudanças climáticas nos biomas brasileiros</caption>
            <thead>
              <tr>
                <th>Bioma</th>
                <th>Principal impacto climático projetado</th>
                <th>Consequência esperada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amazônia</td>
                <td>Redução de chuvas, aumento de temperatura</td>
                <td>Risco de savanização parcial</td>
              </tr>
              <tr>
                <td>Cerrado</td>
                <td>Aumento de secas e temperaturas extremas</td>
                <td>Perda de biodiversidade e produtividade agrícola</td>
              </tr>
              <tr>
                <td>Caatinga</td>
                <td>Intensificação da seca e desertificação</td>
                <td>Aumento da migração e vulnerabilidade hídrica</td>
              </tr>
              <tr>
                <td>Pantanal</td>
                <td>Alteração do regime de cheias</td>
                <td>Perda de espécies aquáticas e aves migratórias</td>
              </tr>
              <tr>
                <td>Mata Atlântica</td>
                <td>Aumento de eventos extremos (chuvas/deslizamentos)</td>
                <td>Maior risco para populações urbanas em encostas</td>
              </tr>
              <tr>
                <td>Pampa</td>
                <td>Aumento de temperatura e mudança no regime de chuvas</td>
                <td>Alteração das pastagens e produção pecuária</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Políticas e soluções</span>
        <h2>10. Políticas de conservação e desenvolvimento sustentável</h2>
        <p>
          O Brasil possui um conjunto de instrumentos legais e políticas públicas voltadas à
          conservação ambiental:
        </p>
        <ul>
          <li>
            <strong>Sistema Nacional de Unidades de Conservação (SNUC - Lei 9.985/2000):</strong>
            cria e organiza as áreas protegidas brasileiras, divididas em Unidades de Proteção
            Integral (como parques nacionais) e Unidades de Uso Sustentável (como Florestas
            Nacionais e Reservas Extrativistas).
          </li>
          <li>
            <strong>Terras Indígenas:</strong> as demarcadas e homologadas têm sido
            comprovadamente eficazes na conservação da floresta, especialmente na Amazônia.
          </li>
          <li>
            <strong>Pagamento por Serviços Ambientais (PSA):</strong> mecanismo que remunera
            proprietários rurais que preservam a vegetação nativa, criando incentivos econômicos
            para a conservação.
          </li>
          <li>
            <strong>REDD+:</strong> mecanismo internacional que recompensa países que reduzem
            o desmatamento, gerando créditos de carbono negociáveis no mercado internacional.
          </li>
          <li>
            <strong>Acordo de Paris (2015):</strong> o Brasil assumiu metas de redução de
            emissões, incluindo zerar o desmatamento ilegal na Amazônia até 2030.
          </li>
        </ul>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section" id="exercicios">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Exercício 1"
          statement={
            <p>
              A Mata Atlântica é considerada um dos hotspots de biodiversidade do mundo. Essa
              denominação se deve ao fato de o bioma reunir:
            </p>
          }
          options={[
            { letter: "a", text: "Alta temperatura e baixa biodiversidade, com predomínio de espécies generalistas." },
            { letter: "b", text: "Grande extensão territorial preservada e baixíssimo nível de ameaça às espécies." },
            { letter: "c", text: "Altíssima riqueza de espécies (muitas endêmicas) combinada com altíssimo nível de ameaça e destruição.", correct: true },
            { letter: "d", text: "Apenas espécies exóticas introduzidas pelo processo de colonização europeia." },
            { letter: "e", text: "Temperatura elevada o ano todo e ausência de estação seca definida." },
          ]}
          resolution={
            <p>
              Um hotspot de biodiversidade é uma área com altíssima riqueza de espécies — muitas
              endêmicas — e que ao mesmo tempo está sob grave ameaça de destruição. A Mata Atlântica
              atende a esses dois critérios: abriga mais de 20.000 espécies de plantas (40% endêmicas)
              e outros grupos de grande diversidade, mas restam apenas 12–15% de sua cobertura
              original. A resposta correta é a letra C.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              A Caatinga é o único bioma exclusivamente brasileiro. Sobre esse bioma, é INCORRETO afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "Ocupa o interior semiárido do Nordeste e parte de Minas Gerais." },
            { letter: "b", text: "Possui plantas adaptadas à seca, como cactáceas e bromélias." },
            { letter: "c", text: "É um bioma pobre em biodiversidade, sem espécies endêmicas significativas.", correct: true },
            { letter: "d", text: "Sofre com desmatamento para uso de lenha como fonte de energia." },
            { letter: "e", text: "Enfrenta riscos de desertificação em áreas do Piauí, Ceará e Pernambuco." },
          ]}
          resolution={
            <p>
              A afirmativa incorreta é a letra C. A Caatinga possui uma biodiversidade rica e
              significativa: mais de 500 espécies de plantas, 177 de peixes, 548 de aves e inúmeras
              espécies endêmicas (exclusivas do bioma). O erro comum é associar o clima seco a baixa
              biodiversidade, mas a Caatinga adaptou-se às condições extremas com grande variedade
              de espécies únicas. A resposta correta (a incorreta) é a letra C.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              (ENEM adaptado) O Cerrado brasileiro é chamado de "berço das águas" por abrigar as
              nascentes de importantes rios brasileiros. Esse bioma tem sido intensamente desmatado
              pela expansão do agronegócio. Assinale a alternativa que descreve corretamente uma
              consequência do desmatamento do Cerrado para a disponibilidade hídrica no Brasil:
            </p>
          }
          options={[
            { letter: "a", text: "O desmatamento do Cerrado aumenta a disponibilidade hídrica, pois elimina a vegetação que retém água no solo." },
            { letter: "b", text: "O desmatamento do Cerrado não afeta a disponibilidade hídrica, pois os rios que nascem no bioma têm fontes alternativas de abastecimento." },
            { letter: "c", text: "O desmatamento do Cerrado prejudica a recarga dos aquíferos e o abastecimento das bacias hidrográficas, reduzindo a disponibilidade de água em várias regiões do Brasil.", correct: true },
            { letter: "d", text: "O desmatamento do Cerrado melhora a produção agrícola sem qualquer impacto sobre os recursos hídricos." },
            { letter: "e", text: "O desmatamento do Cerrado afeta apenas o Pantanal, sem consequências para o Nordeste ou o Sudeste." },
          ]}
          resolution={
            <p>
              O Cerrado abriga as nascentes de rios que alimentam as principais bacias hidrográficas
              do Brasil, como o São Francisco, o Tocantins, o Araguaia e o Paranaíba. A vegetação do
              Cerrado é fundamental para a recarga dos aquíferos: as raízes profundas das plantas
              permitem a infiltração da água da chuva no subsolo. Com o desmatamento, o solo fica
              exposto, a infiltração diminui, os aquíferos não se recarregam adequadamente e a
              disponibilidade de água nos rios é reduzida — afetando o abastecimento de várias regiões
              do Brasil. A resposta correta é a letra C.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              O Código Florestal Brasileiro (Lei 12.651/2012) estabelece a obrigatoriedade de
              manutenção de Reserva Legal nas propriedades rurais. Qual é o percentual mínimo de
              Reserva Legal exigido em propriedades localizadas na Amazônia Legal?
            </p>
          }
          options={[
            { letter: "a", text: "20% da propriedade, independentemente da região." },
            { letter: "b", text: "35% da propriedade, pois toda a Amazônia está no Cerrado." },
            { letter: "c", text: "50% da propriedade, pois a Amazônia é patrimônio da humanidade." },
            { letter: "d", text: "80% da propriedade, reconhecendo a importância ecológica da floresta amazônica.", correct: true },
            { letter: "e", text: "100% da propriedade, proibindo qualquer tipo de uso econômico na Amazônia." },
          ]}
          resolution={
            <p>
              O Código Florestal estabelece percentuais diferenciados de Reserva Legal conforme
              a localização da propriedade: 80% para propriedades em área de floresta na Amazônia
              Legal; 35% para propriedades em área de Cerrado na Amazônia Legal; e 20% para
              propriedades nas demais regiões do Brasil. O percentual elevado na Amazônia reflete
              a importância estratégica da floresta. A resposta correta é a letra D.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              (ENEM adaptado) Cientistas alertam sobre o risco de "ponto de não-retorno" na
              Amazônia. Considere as informações a seguir e assinale a alternativa que melhor
              descreve esse conceito e suas implicações:
            </p>
          }
          options={[
            { letter: "a", text: "O ponto de não-retorno indica o momento em que a floresta amazônica atinge sua maior produtividade, sem possibilidade de expansão adicional." },
            { letter: "b", text: "O ponto de não-retorno refere-se ao limite de extração de madeira além do qual a madeireira perde lucratividade na região." },
            { letter: "c", text: "O ponto de não-retorno descreve o limiar de desmatamento (estimado em 20–25% da floresta original) a partir do qual a Amazônia perde a capacidade de gerar chuvas suficientes para se regenerar, entrando em processo de savanização irreversível.", correct: true },
            { letter: "d", text: "O ponto de não-retorno ocorre quando a pecuária amazônica supera a sojicultura em área plantada, tornando impossível a reversão do modelo econômico." },
            { letter: "e", text: "O ponto de não-retorno é um conceito usado apenas no direito ambiental para indicar infrações irrecuperáveis cometidas por fazendeiros." },
          ]}
          resolution={
            <p>
              O "ponto de não-retorno" (ou tipping point) da Amazônia é um conceito científico que
              descreve um limiar crítico de desmatamento. Pesquisadores como Carlos Nobre estimam
              que, se 20–25% da floresta original for destruída, a Amazônia perderá a capacidade
              de gerar chuvas via evapotranspiração (os "rios voadores"), iniciando um processo
              autossustentado de savanização — a floresta tropical se transformaria gradualmente em
              savana (semelhante ao Cerrado), com consequências catastróficas para o clima da América
              do Sul e o equilíbrio climático global. A resposta correta é a letra C.
            </p>
          }
        />
      </section>
    </article>
  );
}
