"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap40Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 40</span>
          <h1>Desigualdades regionais e políticas públicas</h1>
          <p>
            As desigualdades regionais constituem um dos maiores desafios para o desenvolvimento
            sustentável de países como o Brasil. Diferenças históricas no acesso a capital, infraestrutura,
            educação e serviços públicos geram disparidades profundas entre regiões de um mesmo território.
            Compreender as causas, os indicadores e as políticas públicas voltadas para a redução dessas
            desigualdades é fundamental para o cidadão crítico e para quem se prepara para o ENEM.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceito fundamental</span>
        <h2>1. O que são desigualdades regionais?</h2>
        <p>
          Desigualdades regionais referem-se às diferenças econômicas, sociais e infraestruturais
          existentes entre distintas porções de um território nacional. Essas disparidades podem ser
          mensuradas por indicadores como o PIB per capita, o Índice de Desenvolvimento Humano (IDH),
          taxas de analfabetismo, mortalidade infantil e acesso a saneamento básico.
        </p>
        <p>
          No Brasil, a divisão Norte-Sul é emblemática: o Sudeste concentra mais de 50% do PIB nacional,
          enquanto o Norte e Nordeste juntos respondem por menos de 20%, apesar de abrigarem cerca de 36%
          da população. Essa concentração tem raízes históricas ligadas ao modelo de colonização,
          à localização das atividades exportadoras e aos investimentos públicos e privados ao longo dos séculos.
        </p>
        <p>
          As desigualdades regionais não são fenômeno exclusivo do Brasil: países como China, Índia, Rússia
          e Itália também apresentam marcantes diferenças entre suas regiões. No entanto, o caso brasileiro
          é especialmente grave, pois combina dimensões continentais com profundas desigualdades históricas.
        </p>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Indicadores</span>
        <h2>2. Indicadores de desigualdade regional no Brasil</h2>
        <p>
          Para mensurar as desigualdades regionais, utilizam-se indicadores socioeconômicos que revelam
          as diferenças de qualidade de vida e de desenvolvimento entre as regiões. O IDH-M (Índice de
          Desenvolvimento Humano Municipal) é amplamente utilizado por combinar renda, longevidade e educação.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>IDH e PIB per capita por região brasileira (dados aproximados 2022)</caption>
            <thead>
              <tr>
                <th>Região</th>
                <th>IDH médio</th>
                <th>PIB per capita (R$)</th>
                <th>Taxa de analfabetismo (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sudeste</td>
                <td>0,766</td>
                <td>42.000</td>
                <td>4,5</td>
              </tr>
              <tr>
                <td>Sul</td>
                <td>0,774</td>
                <td>40.000</td>
                <td>3,5</td>
              </tr>
              <tr>
                <td>Centro-Oeste</td>
                <td>0,757</td>
                <td>38.000</td>
                <td>6,0</td>
              </tr>
              <tr>
                <td>Norte</td>
                <td>0,694</td>
                <td>19.000</td>
                <td>8,5</td>
              </tr>
              <tr>
                <td>Nordeste</td>
                <td>0,663</td>
                <td>16.000</td>
                <td>15,0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A disparidade entre o Sudeste e o Nordeste é particularmente expressiva: o PIB per capita
          sudestino é mais que o dobro do nordestino. O analfabetismo no Nordeste é três vezes maior
          que no Sul. Essas diferenças refletem décadas de sub-investimento público e privado nas
          regiões menos desenvolvidas.
        </p>
      </section>

      {/* ── Figura 1 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
          {/* Fundo */}
          <rect width="600" height="320" fill="#f8fafc" rx="8"/>
          <text x="300" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
            PIB per capita por região brasileira
          </text>
          {/* Barras */}
          {/* Sudeste */}
          <rect x="60" y="60" width="70" height="180" fill="#3b82f6" rx="4"/>
          <text x="95" y="255" textAnchor="middle" fontSize="11" fill="#475569">Sudeste</text>
          <text x="95" y="52" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">R$42k</text>
          {/* Sul */}
          <rect x="160" y="68" width="70" height="172" fill="#22c55e" rx="4"/>
          <text x="195" y="255" textAnchor="middle" fontSize="11" fill="#475569">Sul</text>
          <text x="195" y="60" textAnchor="middle" fontSize="11" fill="#15803d" fontWeight="bold">R$40k</text>
          {/* Centro-Oeste */}
          <rect x="260" y="78" width="70" height="162" fill="#f59e0b" rx="4"/>
          <text x="295" y="255" textAnchor="middle" fontSize="11" fill="#475569">C-Oeste</text>
          <text x="295" y="70" textAnchor="middle" fontSize="11" fill="#92400e" fontWeight="bold">R$38k</text>
          {/* Norte */}
          <rect x="360" y="158" width="70" height="82" fill="#f97316" rx="4"/>
          <text x="395" y="255" textAnchor="middle" fontSize="11" fill="#475569">Norte</text>
          <text x="395" y="150" textAnchor="middle" fontSize="11" fill="#9a3412" fontWeight="bold">R$19k</text>
          {/* Nordeste */}
          <rect x="460" y="168" width="70" height="72" fill="#ef4444" rx="4"/>
          <text x="495" y="255" textAnchor="middle" fontSize="11" fill="#475569">Nordeste</text>
          <text x="495" y="160" textAnchor="middle" fontSize="11" fill="#991b1b" fontWeight="bold">R$16k</text>
          {/* Linha base */}
          <line x1="40" y1="240" x2="560" y2="240" stroke="#94a3b8" strokeWidth="2"/>
        </svg>
        <figcaption>Gráfico comparativo do PIB per capita por região brasileira — a disparidade entre Sul/Sudeste e Norte/Nordeste é evidente.</figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Causas históricas</span>
        <h2>3. Origens históricas das desigualdades regionais</h2>
        <p>
          As desigualdades regionais no Brasil têm raízes profundas no processo de colonização e na
          dinâmica econômica dos séculos XVIII ao XX. O modelo agroexportador concentrou riqueza em
          regiões produtoras de commodities como açúcar, café e borracha, em diferentes períodos.
        </p>
        <p>
          O Nordeste, que foi o núcleo econômico do Brasil colonial no século XVII com a produção
          açucareira, entrou em declínio com a concorrência antilhana e a transferência dos investimentos
          para o ciclo do café no Sudeste. A industrialização no século XX, fortemente concentrada em
          São Paulo e Rio de Janeiro, aprofundou ainda mais as diferenças.
        </p>
        <p>
          A Região Norte, apesar de sua riqueza natural e do boom da borracha no final do século XIX,
          não conseguiu diversificar sua economia e modernizar sua infraestrutura, permanecendo dependente
          de atividades extrativistas e com baixo nível de urbanização e serviços públicos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Ciclos econômicos e seus impactos regionais no Brasil</caption>
            <thead>
              <tr>
                <th>Período</th>
                <th>Ciclo econômico</th>
                <th>Região beneficiada</th>
                <th>Impacto na desigualdade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Séc. XVI–XVII</td>
                <td>Açúcar</td>
                <td>Nordeste</td>
                <td>Concentração no litoral nordestino</td>
              </tr>
              <tr>
                <td>Séc. XVIII</td>
                <td>Mineração (ouro)</td>
                <td>Sudeste (Minas Gerais)</td>
                <td>Deslocamento para o interior</td>
              </tr>
              <tr>
                <td>Séc. XIX–XX</td>
                <td>Café</td>
                <td>Sudeste (SP e RJ)</td>
                <td>Hegemonia sudestina</td>
              </tr>
              <tr>
                <td>Séc. XIX</td>
                <td>Borracha</td>
                <td>Norte (AM e PA)</td>
                <td>Boom e colapso regional</td>
              </tr>
              <tr>
                <td>Séc. XX</td>
                <td>Industrialização</td>
                <td>Sudeste</td>
                <td>Aprofundamento das desigualdades</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Políticas públicas</span>
        <h2>4. Políticas públicas de redução das desigualdades regionais</h2>
        <p>
          Ao longo do século XX e XXI, o Estado brasileiro criou diversas políticas e órgãos voltados
          para reduzir as desigualdades regionais. As principais estratégias envolvem transferências de
          renda, investimentos em infraestrutura, incentivos fiscais e programas sociais.
        </p>
        <p>
          A Superintendência do Desenvolvimento do Nordeste (SUDENE), criada em 1959 por iniciativa de
          Celso Furtado, foi pioneira no planejamento regional com foco no combate às desigualdades.
          O modelo incluía incentivos fiscais para industrialização do Nordeste, visando atrair empresas
          do Sul/Sudeste. Posteriormente, criou-se a SUDAM (Superintendência do Desenvolvimento da Amazônia)
          com objetivos similares para a região Norte.
        </p>
        <p>
          Programas de transferência de renda como o Bolsa Família (2003) e, posteriormente, o Auxílio
          Brasil e Bolsa Família renovado tiveram impacto significativo na redução da pobreza extrema,
          especialmente no Nordeste. Dados do IBGE indicam que esses programas contribuíram para a queda
          do Índice de Gini em municípios nordestinos.
        </p>
      </section>

      {/* ── Figura 2 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="300" fill="#f0fdf4" rx="8"/>
          <text x="300" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
            Principais políticas públicas de redução das desigualdades regionais
          </text>
          {/* Linha central */}
          <line x1="300" y1="50" x2="300" y2="275" stroke="#22c55e" strokeWidth="3"/>
          {/* Itens esquerdos */}
          <rect x="30" y="60" width="230" height="44" fill="#dcfce7" rx="6" stroke="#16a34a" strokeWidth="1.5"/>
          <text x="145" y="78" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">SUDENE / SUDAM</text>
          <text x="145" y="96" textAnchor="middle" fontSize="10" fill="#166534">Incentivos fiscais regionais</text>
          <line x1="260" y1="82" x2="300" y2="82" stroke="#16a34a" strokeWidth="1.5"/>

          <rect x="30" y="120" width="230" height="44" fill="#dcfce7" rx="6" stroke="#16a34a" strokeWidth="1.5"/>
          <text x="145" y="138" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">Bolsa Família</text>
          <text x="145" y="156" textAnchor="middle" fontSize="10" fill="#166534">Transferência de renda aos pobres</text>
          <line x1="260" y1="142" x2="300" y2="142" stroke="#16a34a" strokeWidth="1.5"/>

          <rect x="30" y="180" width="230" height="44" fill="#dcfce7" rx="6" stroke="#16a34a" strokeWidth="1.5"/>
          <text x="145" y="198" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">ProUni / FIES</text>
          <text x="145" y="216" textAnchor="middle" fontSize="10" fill="#166534">Acesso à educação superior</text>
          <line x1="260" y1="202" x2="300" y2="202" stroke="#16a34a" strokeWidth="1.5"/>

          {/* Itens direitos */}
          <rect x="340" y="60" width="230" height="44" fill="#dbeafe" rx="6" stroke="#2563eb" strokeWidth="1.5"/>
          <text x="455" y="78" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">PAC</text>
          <text x="455" y="96" textAnchor="middle" fontSize="10" fill="#1e40af">Investimentos em infraestrutura</text>
          <line x1="300" y1="82" x2="340" y2="82" stroke="#2563eb" strokeWidth="1.5"/>

          <rect x="340" y="120" width="230" height="44" fill="#dbeafe" rx="6" stroke="#2563eb" strokeWidth="1.5"/>
          <text x="455" y="138" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">Transposição do São Francisco</text>
          <text x="455" y="156" textAnchor="middle" fontSize="10" fill="#1e40af">Água para o semiárido</text>
          <line x1="300" y1="142" x2="340" y2="142" stroke="#2563eb" strokeWidth="1.5"/>

          <rect x="340" y="180" width="230" height="44" fill="#dbeafe" rx="6" stroke="#2563eb" strokeWidth="1.5"/>
          <text x="455" y="198" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">Zona Franca de Manaus</text>
          <text x="455" y="216" textAnchor="middle" fontSize="10" fill="#1e40af">Industrialização da Amazônia</text>
          <line x1="300" y1="202" x2="340" y2="202" stroke="#2563eb" strokeWidth="1.5"/>

          {/* Centro */}
          <circle cx="300" cy="162" r="20" fill="#16a34a"/>
          <text x="300" y="167" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Estado</text>
        </svg>
        <figcaption>Principais instrumentos de políticas públicas utilizados pelo Estado brasileiro para reduzir desigualdades regionais.</figcaption>
      </figure>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Zona Franca de Manaus</span>
        <h2>5. Zona Franca de Manaus e incentivos fiscais regionais</h2>
        <p>
          A Zona Franca de Manaus (ZFM), criada em 1967, é um dos exemplos mais emblemáticos de política
          pública de incentivo ao desenvolvimento regional. Trata-se de uma área de livre comércio que
          oferece isenções e reduções tributárias para empresas que se instalem em Manaus, com o objetivo
          de desenvolver industrialmente a Amazônia Ocidental.
        </p>
        <p>
          Atualmente, a ZFM é o maior polo industrial eletroeletrônico do Brasil, produzindo celulares,
          motocicletas, televisores e eletrodomésticos. O polo industrial emprega mais de 500 mil pessoas,
          direta e indiretamente. A ZFM representa uma exceção ao modelo de livre mercado, sendo defendida
          como instrumento de soberania nacional sobre a Amazônia.
        </p>
        <p>
          Contudo, críticos apontam que o modelo gera dependência de incentivos fiscais e não criou
          encadeamentos produtivos robustos com a economia amazônica local, funcionando mais como enclave
          industrial do que como motor de desenvolvimento regional integrado.
        </p>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Nordeste e semiárido</span>
        <h2>6. A questão nordestina e o semiárido brasileiro</h2>
        <p>
          O Nordeste é a região que historicamente concentra os maiores índices de pobreza e desigualdade
          do Brasil. A presença do semiárido — a maior região semiárida tropical do mundo, com cerca de
          1 milhão de km² — impõe desafios adicionais ao desenvolvimento regional.
        </p>
        <p>
          O fenômeno das secas periódicas, associado à má distribuição fundiária (latifúndio) e às
          oligarquias políticas regionais, manteve grandes parcelas da população nordestina em condição
          de extrema vulnerabilidade. A "indústria da seca" — manipulação política das calamidades
          climáticas para obter recursos públicos sem aplicá-los efetivamente — é fenômeno historicamente
          documentado.
        </p>
        <p>
          A Transposição do Rio São Francisco, obra iniciada em 2007 e gradualmente concluída, busca
          levar água a regiões do semiárido que sofrem com a escassez hídrica, beneficiando estados como
          Ceará, Rio Grande do Norte, Paraíba e Pernambuco. A obra representa o maior projeto de
          infraestrutura hídrica da história brasileira.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais políticas para o Nordeste e semiárido</caption>
            <thead>
              <tr>
                <th>Política / Programa</th>
                <th>Objetivo</th>
                <th>Impacto esperado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Transposição do São Francisco</td>
                <td>Levar água ao semiárido</td>
                <td>Segurança hídrica para 12 milhões de pessoas</td>
              </tr>
              <tr>
                <td>Programa Um Milhão de Cisternas</td>
                <td>Captação de água de chuva</td>
                <td>Autonomia hídrica familiar no semiárido</td>
              </tr>
              <tr>
                <td>Bolsa Família</td>
                <td>Transferência de renda</td>
                <td>Redução da pobreza extrema</td>
              </tr>
              <tr>
                <td>Pronaf</td>
                <td>Crédito para agricultura familiar</td>
                <td>Fortalecimento da produção local</td>
              </tr>
              <tr>
                <td>SUDENE</td>
                <td>Planejamento e incentivos fiscais</td>
                <td>Atração de investimentos industriais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Amazônia Legal</span>
        <h2>7. Desenvolvimento e desafios da Amazônia Legal</h2>
        <p>
          A Amazônia Legal é uma área de planejamento que abrange os estados do Acre, Amapá, Amazonas,
          Mato Grosso, Pará, Rondônia, Roraima, Tocantins e parte do Maranhão — totalizando cerca de
          59% do território brasileiro. Apesar de ser a maior floresta tropical do mundo e abrigar
          biodiversidade sem precedentes, é também uma das regiões com menores IDH do país.
        </p>
        <p>
          Os desafios do desenvolvimento amazônico incluem: a tensão entre preservação ambiental e
          atividades econômicas (pecuária, soja, mineração e madeira), a ausência de infraestrutura
          de transporte e comunicação, e a vulnerabilidade de populações indígenas e ribeirinhas.
        </p>
        <p>
          O modelo de desenvolvimento para a Amazônia é tema central em debates sobre soberania nacional,
          mudanças climáticas e direitos territoriais. O desmatamento, que acelera o aquecimento global
          e ameaça o equilíbrio hídrico de toda a América do Sul, é considerado um dos grandes problemas
          ambientais e de desenvolvimento do século XXI.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Dinâmica atual</span>
        <h2>8. Novas dinâmicas regionais: agronegócio e fronteira agrícola</h2>
        <p>
          Nas últimas décadas, novas dinâmicas econômicas têm reconfigurado o mapa das desigualdades
          regionais no Brasil. A expansão do agronegócio para o Centro-Oeste e o MATOPIBA (área de
          expansão agrícola que engloba partes do Maranhão, Tocantins, Piauí e Bahia) criou polos de
          riqueza em regiões antes consideradas periféricas.
        </p>
        <p>
          O MATOPIBA tornou-se uma das fronteiras agrícolas mais dinâmicas do mundo, com produção
          intensa de soja, milho e algodão. Cidades como Luís Eduardo Magalhães (BA) e Balsas (MA)
          experimentaram crescimento acelerado. Contudo, esse crescimento coexiste com a manutenção de
          pobreza extrema em áreas rurais próximas e com conflitos fundiários intensos.
        </p>
        <p>
          A concentração da renda gerada pelo agronegócio e a mecanização intensa limitam o impacto
          na redução das desigualdades sociais, gerando o paradoxo de regiões com alto PIB agrícola
          e baixo IDH — especialmente quando se analisa a distribuição dos benefícios entre grandes
          proprietários e trabalhadores rurais.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Federalismo fiscal</span>
        <h2>9. Federalismo fiscal e transferências intergovernamentais</h2>
        <p>
          O federalismo fiscal é um mecanismo constitucional fundamental para a redução das desigualdades
          regionais. A Constituição de 1988 estabeleceu fundos de transferência de recursos da União para
          estados e municípios, buscando equalizar as capacidades fiscais.
        </p>
        <p>
          O Fundo de Participação dos Municípios (FPM) e o Fundo de Participação dos Estados (FPE)
          redistribuem parte do Imposto de Renda e do IPI arrecadados pela União. Os critérios de
          distribuição favorecem regiões menos desenvolvidas: estados do Norte e Nordeste recebem
          proporcionalmente mais recursos do FPE do que contribuem para sua arrecadação.
        </p>
        <p>
          O FUNDEB (Fundo Nacional de Desenvolvimento da Educação Básica), por sua vez, redistribui
          recursos para garantir um valor mínimo por aluno em todo o país, independentemente da
          capacidade arrecadatória do estado. Sua renovação e ampliação em 2020 representou avanço
          significativo na equalização educacional.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Fundos e mecanismos de redistribuição fiscal no Brasil</caption>
            <thead>
              <tr>
                <th>Fundo / Mecanismo</th>
                <th>Base de arrecadação</th>
                <th>Beneficiários prioritários</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FPE (Fundo de Participação dos Estados)</td>
                <td>IR + IPI</td>
                <td>Estados Norte e Nordeste</td>
              </tr>
              <tr>
                <td>FPM (Fundo de Participação dos Municípios)</td>
                <td>IR + IPI</td>
                <td>Municípios pequenos e pobres</td>
              </tr>
              <tr>
                <td>FUNDEB</td>
                <td>Impostos educacionais</td>
                <td>Estados com menor gasto por aluno</td>
              </tr>
              <tr>
                <td>SUS (financiamento federal)</td>
                <td>Receitas federais</td>
                <td>Municípios de menor capacidade fiscal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Perspectivas</span>
        <h2>10. Perspectivas para a redução das desigualdades regionais</h2>
        <p>
          A redução das desigualdades regionais é processo lento e multidimensional. Pesquisas recentes
          indicam que o Brasil reduziu suas desigualdades regionais de renda nas décadas de 2000 e 2010,
          especialmente em função dos programas de transferência de renda e da expansão do emprego formal.
          Contudo, a crise econômica de 2014-2016, a pandemia de COVID-19 e as restrições fiscais dos
          anos seguintes reverteram parte desses avanços.
        </p>
        <p>
          Para que a redução das desigualdades seja sustentável, especialistas apontam a necessidade de
          investimentos em educação de qualidade, saúde, saneamento básico, infraestrutura de transporte
          e conectividade digital nas regiões menos desenvolvidas. A economia do conhecimento e a
          digitalização podem representar oportunidades para regiões periféricas, se houver políticas
          públicas adequadas de acesso à tecnologia.
        </p>
        <p>
          O debate sobre desigualdades regionais é permanente e relevante, pois envolve questões de
          cidadania, democracia e coesão nacional. Um país continental como o Brasil não pode prescindir
          de políticas ativas de desenvolvimento regional para garantir que todos os seus cidadãos
          tenham acesso a oportunidades e qualidade de vida digna.
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
              As desigualdades regionais no Brasil têm raízes históricas profundas. Sobre os ciclos
              econômicos e seus impactos regionais, assinale a alternativa CORRETA:
            </p>
          }
          options={[
            { letter: "a", text: "O ciclo do café beneficiou principalmente a Região Norte, impulsionando o desenvolvimento da Amazônia." },
            { letter: "b", text: "A industrialização do século XX concentrou-se no Nordeste, aproveitando a mão de obra local abundante." },
            { letter: "c", text: "O ciclo do açúcar, predominante nos séculos XVI e XVII, concentrou riqueza no litoral nordestino, tornando essa região o núcleo econômico do Brasil colonial.", correct: true },
            { letter: "d", text: "A mineração de ouro no século XVIII beneficiou exclusivamente a Região Sul do país." },
            { letter: "e", text: "O ciclo da borracha, ocorrido no século XX, promoveu o desenvolvimento sustentado e permanente da Amazônia." },
          ]}
          resolution={
            <p>
              O ciclo do açúcar (séculos XVI-XVII) concentrou a riqueza no litoral nordestino, que foi
              o núcleo econômico do Brasil colonial. Posteriormente, com a concorrência antilhana e o
              surgimento do ciclo do café no Sudeste, o Nordeste entrou em declínio econômico. A
              industrialização do século XX aprofundou as desigualdades ao concentrar-se em São Paulo
              e Rio de Janeiro.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              A Zona Franca de Manaus (ZFM) é um instrumento de política pública criado para o
              desenvolvimento regional. Sobre a ZFM, é CORRETO afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "A ZFM foi criada no século XIX para aproveitar o ciclo da borracha amazônica." },
            { letter: "b", text: "A ZFM é uma área de livre comércio criada em 1967, que oferece incentivos fiscais para atrair empresas para Manaus, sendo atualmente o maior polo industrial eletroeletrônico do Brasil.", correct: true },
            { letter: "c", text: "A ZFM foi criada pela SUDENE em 1959, juntamente com a política de incentivos para o Nordeste." },
            { letter: "d", text: "A ZFM tem sido amplamente criticada por especialistas por ser completamente ineficaz economicamente, não gerando empregos na região." },
            { letter: "e", text: "A ZFM é exclusivamente voltada para a exportação de produtos agrícolas amazônicos, como castanha e açaí." },
          ]}
          resolution={
            <p>
              A Zona Franca de Manaus foi criada em 1967 e é uma área de livre comércio que oferece
              isenções tributárias para empresas instaladas em Manaus. Atualmente é o maior polo
              industrial eletroeletrônico do Brasil, produzindo celulares, motocicletas e televisores,
              empregando mais de 500 mil pessoas direta e indiretamente. Ela não foi criada pela SUDENE
              (que é voltada ao Nordeste) nem em 1959.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              O federalismo fiscal brasileiro prevê mecanismos de redistribuição de recursos entre
              entes federativos. O Fundo de Participação dos Estados (FPE) tem como objetivo principal:
            </p>
          }
          options={[
            { letter: "a", text: "Financiar exclusivamente obras de infraestrutura nas capitais estaduais." },
            { letter: "b", text: "Redistribuir recursos arrecadados com IR e IPI para estados mais pobres, favorecendo regiões Norte e Nordeste e contribuindo para a redução das desigualdades fiscais entre os entes federativos.", correct: true },
            { letter: "c", text: "Garantir que todos os estados recebam exatamente a mesma quantia de recursos federais, independentemente de suas características socioeconômicas." },
            { letter: "d", text: "Financiar apenas programas de transferência de renda para famílias pobres nos estados mais desenvolvidos." },
            { letter: "e", text: "Substituir completamente os impostos estaduais, centralizando toda a arrecadação na União." },
          ]}
          resolution={
            <p>
              O FPE é um mecanismo constitucional que redistribui parte do Imposto de Renda (IR) e do
              Imposto sobre Produtos Industrializados (IPI) arrecadados pela União para os estados.
              Os critérios de distribuição favorecem estados menos desenvolvidos: regiões Norte e Nordeste
              recebem proporcionalmente mais recursos do que contribuem para a arrecadação, contribuindo
              para equalizar as capacidades fiscais dos entes federativos.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              O MATOPIBA é um conceito geográfico que ganhou destaque nas últimas décadas em relação
              ao desenvolvimento regional brasileiro. Sobre o MATOPIBA, é correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "MATOPIBA é o nome dado à área de influência da Zona Franca de Manaus, abrangendo toda a Amazônia Ocidental." },
            { letter: "b", text: "MATOPIBA refere-se à fronteira agrícola formada por partes do Maranhão, Tocantins, Piauí e Bahia, que se tornou uma das mais dinâmicas do mundo com produção intensiva de soja, milho e algodão.", correct: true },
            { letter: "c", text: "MATOPIBA é uma sigla que identifica os quatro estados do Nordeste com maior nível de desenvolvimento humano: Maranhão, Alagoas, Tocantins e Paraíba." },
            { letter: "d", text: "MATOPIBA é um programa federal de incentivo à agricultura familiar na Região Norte do Brasil, criado em 2003." },
            { letter: "e", text: "MATOPIBA refere-se exclusivamente à região do semiárido nordestino, área alvo das políticas de convivência com a seca." },
          ]}
          resolution={
            <p>
              MATOPIBA é o acrônimo formado pelos estados Maranhão, Tocantins, Piauí e Bahia, referindo-se
              à fronteira agrícola mais dinâmica do Brasil nas últimas décadas. A região experimentou
              expansão intensa da produção de soja, milho e algodão, com cidades como Luís Eduardo
              Magalhães (BA) e Balsas (MA) crescendo rapidamente. Contudo, esse crescimento do PIB
              agrícola coexiste com baixo IDH e conflitos fundiários.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              Analise a seguinte afirmação: "A redução das desigualdades regionais no Brasil exige não
              apenas políticas de transferência de renda, mas também investimentos em educação, saúde,
              infraestrutura e acesso à tecnologia nas regiões periféricas." Com base no conteúdo
              estudado, essa afirmação está:
            </p>
          }
          options={[
            { letter: "a", text: "Incorreta, pois as transferências de renda são suficientes para eliminar as desigualdades regionais, conforme demonstrado pelos resultados do Bolsa Família." },
            { letter: "b", text: "Incorreta, pois o livre mercado, sem intervenção estatal, é suficiente para garantir o desenvolvimento equânime de todas as regiões." },
            { letter: "c", text: "Incorreta, pois os dados mostram que o Brasil já eliminou suas desigualdades regionais nas últimas décadas." },
            { letter: "d", text: "Correta, pois a redução sustentável das desigualdades regionais é processo multidimensional que requer intervenção em múltiplas frentes — renda, educação, saúde, infraestrutura e acesso digital —, não podendo ser resolvida por um único instrumento de política pública.", correct: true },
            { letter: "e", text: "Correta apenas para o caso da Amazônia, sendo que nas demais regiões as transferências de renda já são suficientes." },
          ]}
          resolution={
            <p>
              A redução das desigualdades regionais é processo multidimensional. Embora as transferências
              de renda (como o Bolsa Família) tenham contribuído significativamente para reduzir a pobreza
              extrema, especialmente no Nordeste, elas não são suficientes isoladamente. Investimentos em
              educação de qualidade, saúde, saneamento, infraestrutura de transporte e conectividade digital
              são igualmente necessários para que as regiões periféricas possam desenvolver capacidades
              produtivas sustentáveis e reduzir a dependência de transferências governamentais.
            </p>
          }
        />
      </section>
    </article>
  );
}
