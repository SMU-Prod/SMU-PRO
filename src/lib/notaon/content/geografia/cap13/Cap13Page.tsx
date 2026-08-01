"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap13Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 13</span>
          <h1>Mudanças climáticas, efeito estufa e aquecimento global</h1>
          <p>
            O aquecimento global é o maior desafio ambiental do século XXI. A queima de
            combustíveis fósseis, o desmatamento e a agropecuária intensiva elevam a concentração
            de gases de efeito estufa na atmosfera, intensificando o efeito estufa natural e
            elevando a temperatura média do planeta. As consequências — elevação do nível do mar,
            eventos climáticos extremos, acidificação dos oceanos e colapso de ecossistemas —
            atingem desigualmente populações vulneráveis, ampliando injustiças sociais e ambientais.
            Compreender as causas, evidências e respostas políticas às mudanças climáticas é
            fundamental para a formação cidadã e para o ENEM.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fenômeno natural</span>
        <h2>1. O efeito estufa natural</h2>
        <p>
          O efeito estufa é um fenômeno <strong>natural e essencial à vida</strong> na Terra. Sem
          ele, a temperatura média do planeta seria de aproximadamente -18°C (em vez dos atuais
          +15°C), tornando a vida como a conhecemos impossível. O processo funciona assim:
        </p>
        <ol>
          <li>
            A radiação solar (principalmente na faixa do visível) atravessa a atmosfera e aquece a
            superfície terrestre.
          </li>
          <li>
            A superfície reemite essa energia como radiação infravermelha (calor).
          </li>
          <li>
            Os gases de efeito estufa (GEE) na atmosfera absorvem parte dessa radiação infravermelha
            e a irradiam de volta para a superfície, mantendo-a aquecida.
          </li>
        </ol>
        <p>
          Os principais GEE naturais são o <strong>vapor d'água (H₂O)</strong> — o mais abundante
          e poderoso em termos absolutos —, o dióxido de carbono (CO₂), o metano (CH₄), o óxido
          nitroso (N₂O) e o ozônio (O₃). O problema climático atual não é o efeito estufa em si,
          mas seu <strong>intensificação antrópica</strong> — o aumento da concentração de GEE
          pelas atividades humanas.
        </p>
      </section>

      {/* SVG – Diagrama do efeito estufa */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 310" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="310" fill="#e8f5e9" rx="12" />
          <text x="300" y="26" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1b5e20">
            Mecanismo do efeito estufa
          </text>
          {/* espaço */}
          <rect x="0" y="30" width="600" height="80" fill="#0d1b2a" rx="12" />
          <text x="300" y="55" textAnchor="middle" fontSize="11" fill="#90caf9">Espaço exterior</text>
          {/* sol */}
          <circle cx="60" cy="65" r="28" fill="#ffeb3b" />
          <text x="60" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#e65100">SOL</text>
          {/* atmosfera */}
          <rect x="0" y="110" width="600" height="55" fill="#b3e5fc" opacity="0.7" />
          <text x="300" y="140" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#01579b">
            Atmosfera (GEE: CO₂, CH₄, H₂O, N₂O)
          </text>
          {/* superfície */}
          <rect x="0" y="165" width="600" height="50" fill="#8bc34a" />
          <text x="300" y="195" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
            Superfície terrestre
          </text>
          {/* seta radiação solar */}
          <line x1="120" y1="58" x2="230" y2="163" stroke="#ffb300" strokeWidth="3" />
          <polygon points="227,157 235,167 222,164" fill="#ffb300" />
          <text x="130" y="95" fontSize="9" fill="#ffb300" fontWeight="bold">Radiação solar</text>
          <text x="120" y="107" fontSize="9" fill="#ffb300">(luz visível)</text>
          {/* seta radiação infravermelha da superfície */}
          <line x1="310" y1="163" x2="310" y2="113" stroke="#ef5350" strokeWidth="2.5" strokeDasharray="5,3" />
          <polygon points="306,113 314,113 310,100" fill="#ef5350" />
          <text x="318" y="143" fontSize="9" fill="#ef5350" fontWeight="bold">Calor re-</text>
          <text x="318" y="155" fontSize="9" fill="#ef5350">emitido (IV)</text>
          {/* seta GEE refletindo de volta */}
          <line x1="350" y1="113" x2="350" y2="163" stroke="#e53935" strokeWidth="2.5" />
          <polygon points="346,163 354,163 350,175" fill="#e53935" />
          <text x="360" y="128" fontSize="9" fill="#e53935" fontWeight="bold">GEE absorvem</text>
          <text x="360" y="141" fontSize="9" fill="#e53935">e re-irradiam</text>
          <text x="360" y="154" fontSize="9" fill="#e53935">de volta</text>
          {/* seta parte que escapa */}
          <line x1="270" y1="113" x2="200" y2="58" stroke="#90caf9" strokeWidth="1.5" strokeDasharray="4,2" />
          <polygon points="196,60 205,55 203,66" fill="#90caf9" />
          <text x="190" y="85" fontSize="9" fill="#90caf9">Parte escapa</text>
          <text x="185" y="97" fontSize="9" fill="#90caf9">para o espaço</text>
          {/* legenda */}
          <text x="300" y="295" textAnchor="middle" fontSize="10" fill="#333">
            O efeito estufa retém calor na superfície — é natural e necessário à vida.
          </text>
          <text x="300" y="307" textAnchor="middle" fontSize="10" fill="#c62828">
            O problema: atividades humanas aumentam a concentração dos GEE.
          </text>
        </svg>
        <figcaption>
          Diagrama simplificado do efeito estufa: a atmosfera retém parte da radiação infravermelha
          reemitida pela superfície, aquecendo o planeta. O aumento antrópico dos GEE intensifica
          esse processo.
        </figcaption>
      </figure>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Causas antrópicas</span>
        <h2>2. Gases de efeito estufa e suas origens</h2>
        <p>
          A intensificação do efeito estufa é causada pelo aumento da concentração de GEE na
          atmosfera em decorrência das atividades humanas. O CO₂ atmosférico era de
          aproximadamente 280 ppm (partes por milhão) no período pré-industrial e ultrapassou
          420 ppm em 2023 — um aumento de 50% em menos de 300 anos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais gases de efeito estufa antrópicos e suas fontes</caption>
            <thead>
              <tr>
                <th>Gás</th>
                <th>Fórmula</th>
                <th>Potencial de aquecimento (100 anos)</th>
                <th>Principais fontes antrópicas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dióxido de carbono</td>
                <td>CO₂</td>
                <td>1 (referência)</td>
                <td>Queima de combustíveis fósseis, desmatamento, cimento</td>
              </tr>
              <tr>
                <td>Metano</td>
                <td>CH₄</td>
                <td>28</td>
                <td>Pecuária bovina, aterros sanitários, arrozais, gás natural</td>
              </tr>
              <tr>
                <td>Óxido nitroso</td>
                <td>N₂O</td>
                <td>265</td>
                <td>Fertilizantes nitrogenados, queima de biomassa</td>
              </tr>
              <tr>
                <td>Hidrofluorcarbonos (HFCs)</td>
                <td>HFCs</td>
                <td>12–14.800</td>
                <td>Sistemas de refrigeração, ar-condicionado</td>
              </tr>
              <tr>
                <td>Hexafluoreto de enxofre</td>
                <td>SF₆</td>
                <td>23.500</td>
                <td>Equipamentos elétricos de alta tensão</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          O <strong>Potencial de Aquecimento Global (PAG)</strong> compara o poder de retenção de
          calor de cada gás em relação ao CO₂ ao longo de 100 anos. Embora o CO₂ tenha PAG = 1, é
          o gás mais relevante pelo seu volume de emissão. O CH₄ (PAG = 28) e o N₂O (PAG = 265)
          são especialmente preocupantes para um país como o Brasil, cujas emissões vêm
          principalmente de agropecuária e desmatamento.
        </p>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Evidências científicas</span>
        <h2>3. Evidências do aquecimento global</h2>
        <p>
          O aquecimento global não é uma hipótese — é um fato científico amplamente documentado por
          múltiplas linhas de evidência independentes:
        </p>
        <ul>
          <li>
            <strong>Aumento da temperatura média global:</strong> os registros instrumentais mostram
            que a temperatura média da superfície terrestre aumentou cerca de 1,1°C desde o período
            pré-industrial (1850–1900). Os anos de 2015 a 2023 são os mais quentes já registrados.
          </li>
          <li>
            <strong>Recuo de geleiras e calotas polares:</strong> glaciares em todo o mundo estão
            encolhendo. O gelo do Ártico atingiu mínimas históricas em extensão no verão boreal.
          </li>
          <li>
            <strong>Elevação do nível do mar:</strong> o nível médio do mar subiu cerca de 20 cm
            desde 1900 e está acelerando (atualmente +3,7 mm/ano), ameaçando ilhas baixas e
            cidades costeiras.
          </li>
          <li>
            <strong>Acidificação dos oceanos:</strong> os oceanos absorvem cerca de 25% do CO₂
            emitido, tornando-se mais ácidos — o pH médio caiu 0,1 unidade (aumento de 30% na
            acidez), prejudicando corais, moluscos e outros organismos calcários.
          </li>
          <li>
            <strong>Deslocamento de espécies e floração precoce:</strong> espécies migram para
            latitudes e altitudes maiores; ciclos fenológicos (floração, migração de aves) estão
            antecipados.
          </li>
          <li>
            <strong>Aumento da frequência de eventos extremos:</strong> ondas de calor, furacões
            intensos, secas prolongadas e enchentes catastróficas se tornaram mais frequentes e
            intensos.
          </li>
        </ul>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Consequências</span>
        <h2>4. Consequências das mudanças climáticas</h2>
        <p>
          As mudanças climáticas têm consequências em múltiplas escalas e domínios:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais consequências das mudanças climáticas por domínio</caption>
            <thead>
              <tr>
                <th>Domínio</th>
                <th>Consequência</th>
                <th>Exemplo concreto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Físico</td>
                <td>Elevação do nível do mar</td>
                <td>Risco de inundação de Bangladesh, Maldivas, cidades litorâneas</td>
              </tr>
              <tr>
                <td>Físico</td>
                <td>Intensificação de furacões</td>
                <td>Furacões mais intensos no Caribe e Golfo do México</td>
              </tr>
              <tr>
                <td>Ecológico</td>
                <td>Branqueamento e morte de corais</td>
                <td>Grande Barreira de Corais da Austrália</td>
              </tr>
              <tr>
                <td>Ecológico</td>
                <td>Extinção de espécies</td>
                <td>Urso polar, anfíbios de altitude, corais tropicais</td>
              </tr>
              <tr>
                <td>Social</td>
                <td>Insegurança alimentar</td>
                <td>Seca no Sahel afetando produção de alimentos</td>
              </tr>
              <tr>
                <td>Social</td>
                <td>Refugiados climáticos</td>
                <td>Ilhas do Pacífico (Tuvalu) ameaçadas de desaparição</td>
              </tr>
              <tr>
                <td>Econômico</td>
                <td>Perdas na agricultura</td>
                <td>Ondas de calor reduzindo produtividade de trigo e milho</td>
              </tr>
              <tr>
                <td>Saúde</td>
                <td>Expansão de doenças tropicais</td>
                <td>Dengue, malária e leishmaniose avançando para novas latitudes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Justiça climática</span>
        <h2>5. Mudanças climáticas e desigualdade: a questão da justiça climática</h2>
        <p>
          Um dos aspectos mais graves das mudanças climáticas é sua dimensão de injustiça: os
          países e populações que <strong>menos contribuíram</strong> historicamente para as
          emissões de GEE são os <strong>mais vulneráveis</strong> aos seus impactos.
        </p>
        <p>
          Os países ricos do hemisfério norte foram responsáveis pela maior parte das emissões
          históricas acumuladas (a Europa e os EUA emitiram cerca de 50% do total histórico). Os
          países do Sul Global — principalmente africanos, asiáticos e da América Latina —
          emitiram menos, mas sofrem desproporcionalmente com secas, inundações e perda de
          colheitas.
        </p>
        <p>
          O conceito de <strong>dívida climática</strong> surge daí: países ricos devem
          responsabilidade histórica às nações mais pobres, não apenas em termos de redução de
          emissões, mas de financiamento para adaptação e mitigação — tema central nas negociações
          do <strong>Acordo de Paris</strong> e das COPs (Conferências das Partes da UNFCCC).
        </p>
      </section>

      {/* SVG – Emissões e vulnerabilidade */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="260" fill="#fff3e0" rx="12" />
          <text x="300" y="26" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#bf360c">
            Injustiça climática: quem emite mais vs. quem mais sofre
          </text>
          {/* eixos */}
          <line x1="80" y1="220" x2="560" y2="220" stroke="#555" strokeWidth="1.5" />
          <line x1="80" y1="220" x2="80" y2="50" stroke="#555" strokeWidth="1.5" />
          <text x="320" y="248" textAnchor="middle" fontSize="11" fill="#555">
            Emissões históricas acumuladas (% do total global)
          </text>
          <text x="30" y="135" textAnchor="middle" fontSize="10" fill="#555" transform="rotate(-90,30,135)">
            Vulnerabilidade climática (índice)
          </text>
          {/* pontos de países */}
          {/* EUA: alto emissor, baixa vulnerabilidade */}
          <circle cx="470" cy="180" r="18" fill="#1565c0" opacity="0.85" />
          <text x="470" y="184" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="bold">EUA</text>
          {/* UE */}
          <circle cx="390" cy="185" r="14" fill="#1976d2" opacity="0.85" />
          <text x="390" y="189" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">UE</text>
          {/* China */}
          <circle cx="420" cy="160" r="16" fill="#c62828" opacity="0.85" />
          <text x="420" y="164" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">China</text>
          {/* Bangladesh: baixo emissor, alta vulnerabilidade */}
          <circle cx="140" cy="75" r="13" fill="#e65100" opacity="0.9" />
          <text x="140" y="79" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">Bang.</text>
          {/* Tuvalu */}
          <circle cx="100" cy="68" r="10" fill="#bf360c" opacity="0.9" />
          <text x="100" y="72" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="bold">Tuv.</text>
          {/* Sahel */}
          <circle cx="160" cy="85" r="12" fill="#e64a19" opacity="0.9" />
          <text x="160" y="89" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="bold">Sahel</text>
          {/* Brasil */}
          <circle cx="250" cy="145" r="14" fill="#2e7d32" opacity="0.85" />
          <text x="250" y="149" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">Brasil</text>
          {/* legenda */}
          <rect x="90" y="215" width="12" height="12" fill="#1565c0" />
          <text x="107" y="225" fontSize="9" fill="#333">Altos emissores / menor vulnerabilidade</text>
          <rect x="90" y="232" width="12" height="12" fill="#e65100" />
          <text x="107" y="242" fontSize="9" fill="#333">Baixos emissores / maior vulnerabilidade</text>
        </svg>
        <figcaption>
          Diagrama esquemático mostrando a injustiça climática: países historicamente responsáveis
          por maiores emissões tendem a ser menos vulneráveis aos impactos, enquanto países com
          menores emissões enfrentam os maiores riscos.
        </figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Acordos internacionais</span>
        <h2>6. Governança climática global: Kyoto, Paris e COPs</h2>
        <p>
          A comunidade internacional tenta coordenar respostas às mudanças climáticas por meio de
          tratados e conferências sob a <strong>Convenção-Quadro das Nações Unidas sobre Mudanças
          Climáticas (UNFCCC)</strong>, assinada na Rio-92.
        </p>
        <ul>
          <li>
            <strong>Protocolo de Quioto (1997):</strong> primeiro tratado com metas vinculantes de
            redução de emissões para países desenvolvidos (Anexo I). Entrou em vigor em 2005. Foi
            criticado por não incluir grandes emissores emergentes (China, Índia, Brasil) e pela
            retirada dos EUA em 2001. Introduziu mecanismos de mercado: comércio de emissões,
            Mecanismo de Desenvolvimento Limpo (MDL) e Implementação Conjunta.
          </li>
          <li>
            <strong>Acordo de Paris (2015):</strong> substituiu Kyoto com um novo modelo. Todos os
            países apresentam voluntariamente suas <strong>Contribuições Nacionalmente Determinadas
            (NDCs)</strong> — metas de redução de emissões. O objetivo central é limitar o
            aquecimento a 1,5°C (e em todo caso abaixo de 2°C) acima dos níveis pré-industriais. O
            acordo inclui mecanismos de revisão quinquenal das metas (ratchet mechanism).
          </li>
          <li>
            <strong>COPs:</strong> as Conferências das Partes são reuniões anuais onde os países
            revisam os progressos e negociam ações. A COP-21 (Paris, 2015) produziu o Acordo de
            Paris; a COP-26 (Glasgow, 2021) reforçou as metas; a COP-30 ocorrerá em Belém (PA,
            Brasil) em 2025, com simbólico cenário amazônico.
          </li>
        </ul>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Brasil no clima global</span>
        <h2>7. Brasil e as mudanças climáticas</h2>
        <p>
          O Brasil ocupa posição singular nas mudanças climáticas: é ao mesmo tempo um dos maiores
          emissores e um dos países com maior potencial de contribuir para a solução.
        </p>
        <p>
          As emissões brasileiras de GEE têm perfil diferente dos países industrializados. Enquanto
          nos países ricos a queima de combustíveis fósseis para energia e transporte domina, no
          Brasil as principais fontes são:
        </p>
        <ul>
          <li>
            <strong>Desmatamento e mudança de uso do solo</strong> (historicamente a maior fonte —
            principalmente na Amazônia e Cerrado): liberação de CO₂ estocado na biomassa.
          </li>
          <li>
            <strong>Agropecuária:</strong> fermentação entérica do gado bovino (CH₄), uso de
            fertilizantes nitrogenados (N₂O) e queima de palha.
          </li>
          <li>
            <strong>Energia:</strong> veículos a gasolina e diesel; queima de carvão em siderurgias.
          </li>
          <li>
            <strong>Resíduos:</strong> lixões e aterros sem captura de metano.
          </li>
        </ul>
        <p>
          O Brasil apresenta uma matriz energética relativamente limpa em comparação aos países
          industrializados, graças à predominância da energia hidrelétrica e ao uso de etanol
          (biocombustível). Isso representa um diferencial positivo, mas que deve ser ampliado
          com energia eólica, solar e outras renováveis.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Soluções</span>
        <h2>8. Mitigação e adaptação: respostas ao aquecimento global</h2>
        <p>
          As respostas às mudanças climáticas dividem-se em duas grandes estratégias complementares:
        </p>
        <p>
          <strong>Mitigação:</strong> redução das emissões de GEE para desacelerar o aquecimento.
          Inclui a transição para fontes renováveis de energia (solar, eólica, hidrelétrica,
          geotérmica), eletrificação do transporte, eficiência energética em edificações e
          indústrias, combate ao desmatamento e reflorestamento, captura e armazenamento de carbono
          (CCS), e mudanças nos sistemas alimentares (redução do consumo de carne bovina).
        </p>
        <p>
          <strong>Adaptação:</strong> ajuste dos sistemas humanos e naturais às mudanças climáticas
          já em curso ou inevitáveis. Inclui construção de diques e barreiras costeiras contra o
          avanço do mar, desenvolvimento de variedades agrícolas resistentes ao calor e à seca,
          sistemas de alerta precoce para eventos extremos, planejamento urbano resiliente (cidades
          esponja), e programas de saúde pública para doenças relacionadas ao calor.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparação entre estratégias de mitigação e adaptação climática</caption>
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>Mitigação</th>
                <th>Adaptação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Objetivo</td>
                <td>Reduzir as causas do aquecimento</td>
                <td>Reduzir os impactos do aquecimento</td>
              </tr>
              <tr>
                <td>Horizonte temporal</td>
                <td>Benefícios a longo prazo (décadas)</td>
                <td>Benefícios a curto e médio prazo</td>
              </tr>
              <tr>
                <td>Exemplos</td>
                <td>Energia solar, reflorestamento, EVs</td>
                <td>Diques, variedades resistentes, alertas</td>
              </tr>
              <tr>
                <td>Quem se beneficia</td>
                <td>Toda a humanidade (bem público global)</td>
                <td>Principalmente as populações locais</td>
              </tr>
              <tr>
                <td>Problema de ação coletiva</td>
                <td>Alto (free-rider problem)</td>
                <td>Menor (benefício local imediato)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pontos de inflexão</span>
        <h2>9. Pontos de inflexão (tipping points) do sistema climático</h2>
        <p>
          Um dos conceitos mais importantes da ciência climática contemporânea é o de{" "}
          <strong>ponto de inflexão (tipping point)</strong>: limiares do sistema climático que, uma
          vez ultrapassados, desencadeiam mudanças autossustentadas e irreversíveis, independentemente
          de futuras reduções de emissões.
        </p>
        <p>
          Os principais tipping points identificados incluem:
        </p>
        <ul>
          <li>
            <strong>Colapso das calotas de gelo da Groenlândia e Antártica Ocidental:</strong> seu
            derretimento completo elevaria o nível do mar em 6–7 metros.
          </li>
          <li>
            <strong>Desintegração do permafrost ártico:</strong> o degelo do solo congelado siberianos
            e canadenses libera enormes quantidades de CH₄ e CO₂ estocados, criando um ciclo de
            retroalimentação positiva.
          </li>
          <li>
            <strong>Savanização da Amazônia:</strong> estudos indicam que o desmatamento de 20–25%
            da floresta pode ultrapassar o ponto de não retorno, transformando a floresta em savana
            por redução da evapotranspiração.
          </li>
          <li>
            <strong>Morte dos recifes de coral:</strong> acima de 2°C de aquecimento, 99% dos
            recifes de coral tropicais devem desaparecer.
          </li>
          <li>
            <strong>Enfraquecimento da corrente do Atlântico (AMOC):</strong> pode causar resfriamento
            abrupto na Europa e alterações drásticas no regime de monções tropicais.
          </li>
        </ul>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Negacionismo e consenso</span>
        <h2>10. Consenso científico e negacionismo climático</h2>
        <p>
          O consenso científico sobre as mudanças climáticas é esmagador: mais de 97% dos
          climatologistas concordam que o aquecimento global atual é real, está ocorrendo e é
          predominantemente causado pelas atividades humanas. O{" "}
          <strong>IPCC (Painel Intergovernamental sobre Mudanças Climáticas)</strong>, criado em
          1988, reúne milhares de cientistas de todo o mundo para sintetizar o conhecimento
          científico sobre o tema.
        </p>
        <p>
          O <strong>negacionismo climático</strong> é um fenômeno político e social que rejeita o
          consenso científico, frequentemente financiado por indústrias de combustíveis fósseis com
          interesse na manutenção do modelo econômico vigente. Documentos internos de empresas
          como a ExxonMobil revelaram que essas companhias conheciam os riscos do aquecimento
          global décadas antes do público e financiaram campanhas de desinformação.
        </p>
        <p>
          A distinção entre <strong>variabilidade climática natural</strong> (ciclos de Milankovitch,
          atividade solar, vulcanismo) e a mudança climática antropogênica é fundamental: embora o
          clima da Terra sempre tenha variado, a velocidade e a escala das mudanças atuais são sem
          precedentes nos últimos 800.000 anos, segundo registros de testemunhos de gelo (ice cores).
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
              O efeito estufa é um fenômeno atmosférico frequentemente citado quando se fala em
              aquecimento global. Sobre o efeito estufa, é correto afirmar que:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "É um fenômeno exclusivamente artificial, criado pela atividade industrial humana no século XX.",
            },
            {
              letter: "b",
              text: "É um fenômeno natural e essencial à vida, que mantém a temperatura média da Terra em torno de +15°C; o problema atual é sua intensificação pela ação humana.",
              correct: true,
            },
            {
              letter: "c",
              text: "Consiste na reflexão total da radiação solar pela atmosfera, impedindo que o calor chegue à superfície terrestre.",
            },
            {
              letter: "d",
              text: "Afeta apenas as regiões polares, onde a concentração de gases de efeito estufa é maior.",
            },
            {
              letter: "e",
              text: "É causado exclusivamente pelo dióxido de carbono (CO₂), sendo os demais gases irrelevantes para o aquecimento global.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra B. O efeito estufa é um fenômeno natural que existe
              há bilhões de anos na Terra e é essencial para a manutenção da vida: sem ele, a
              temperatura média seria cerca de -18°C. Os gases de efeito estufa (vapor d'água, CO₂,
              CH₄, N₂O e outros) absorvem a radiação infravermelha reemitida pela superfície e
              parte dela de volta, aquecendo o planeta. O problema atual não é o efeito estufa em
              si, mas sua intensificação pela ação humana — principalmente a queima de combustíveis
              fósseis e o desmatamento —, que aumenta a concentração desses gases e eleva a
              temperatura além do equilíbrio natural.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              O Acordo de Paris (2015) é o principal instrumento internacional de governança
              climática em vigor. Sobre esse acordo, assinale a alternativa CORRETA:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O Acordo de Paris estabeleceu metas vinculantes de redução de emissões apenas para os países desenvolvidos, isentando os países em desenvolvimento.",
            },
            {
              letter: "b",
              text: "O Acordo de Paris substituiu o Protocolo de Quioto e tem como objetivo limitar o aquecimento global a 1,5°C (e em todo caso abaixo de 2°C) acima dos níveis pré-industriais, com todos os países apresentando metas voluntárias (NDCs).",
              correct: true,
            },
            {
              letter: "c",
              text: "O Acordo de Paris proíbe a extração de petróleo e gás natural em todos os países signatários a partir de 2030.",
            },
            {
              letter: "d",
              text: "O Acordo de Paris criou um tribunal internacional para punir países que descumpram suas metas de redução de emissões.",
            },
            {
              letter: "e",
              text: "O Acordo de Paris foi rejeitado pela maioria dos países em desenvolvimento por considerá-lo injusto com as nações mais pobres.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra B. O Acordo de Paris, firmado na COP-21 em dezembro
              de 2015, introduziu um modelo inovador em relação ao Protocolo de Quioto: em vez de
              metas impostas apenas a países desenvolvidos (o que excluía grandes emissores
              emergentes como China, Índia e Brasil), todos os países apresentam voluntariamente
              suas Contribuições Nacionalmente Determinadas (NDCs). O objetivo central é manter o
              aquecimento global "bem abaixo de 2°C" e fazer esforços para limitá-lo a 1,5°C acima
              dos níveis pré-industriais. As metas devem ser revisadas e fortalecidas a cada 5 anos.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              O Brasil tem um perfil de emissões de gases de efeito estufa distinto do de países
              industrializados como os EUA e membros da União Europeia. Essa diferença tem
              implicações importantes para as negociações climáticas internacionais. Com base nessa
              informação e nos conhecimentos sobre mudanças climáticas, qual é a principal fonte de
              emissões de GEE do Brasil e por que isso difere do perfil dos países ricos?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A principal fonte brasileira é a queima de carvão mineral nas usinas termelétricas, similar ao que ocorre nos EUA e Europa.",
            },
            {
              letter: "b",
              text: "A principal fonte brasileira é o setor de transporte (automóveis a gasolina), idêntica à dos países desenvolvidos.",
            },
            {
              letter: "c",
              text: "As principais fontes brasileiras são desmatamento/mudança de uso do solo e agropecuária (CH₄ do gado, N₂O de fertilizantes), enquanto nos países ricos predomina a queima de combustíveis fósseis para energia e transporte.",
              correct: true,
            },
            {
              letter: "d",
              text: "A principal fonte brasileira é a geração de energia hidrelétrica, que emite grandes volumes de metano nas represas.",
            },
            {
              letter: "e",
              text: "As emissões brasileiras são negligenciáveis no contexto global, dado que o país possui matriz energética predominantemente renovável.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra C. O Brasil tem um perfil de emissões único: as
              principais fontes são o desmatamento (que libera o CO₂ estocado na biomassa florestal)
              e a agropecuária (fermentação entérica do gado bovino gera CH₄; uso de fertilizantes
              nitrogenados gera N₂O). Nos países industrializados (EUA, Europa), a principal fonte
              é a queima de combustíveis fósseis para geração de eletricidade, aquecimento e
              transporte. Isso significa que a principal alavanca de redução de emissões no Brasil
              é o combate ao desmatamento, enquanto nos países ricos é a descarbonização da energia
              e do transporte.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              (Adaptado ENEM) "O derretimento do permafrost no Ártico libera metano e CO₂
              estocados por milênios, o que acelera ainda mais o aquecimento global, que por sua
              vez acelera o derretimento do permafrost."
              <br />
              <br />
              O trecho descreve um mecanismo de:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Retroalimentação negativa, pois o aumento do metano absorve radiação solar e resfria o planeta, compensando o aquecimento inicial.",
            },
            {
              letter: "b",
              text: "Retroalimentação positiva (amplificação), pois o aquecimento libera mais GEE, que causam mais aquecimento, criando um ciclo autorreforçante.",
              correct: true,
            },
            {
              letter: "c",
              text: "Ponto de equilíbrio climático, pois o sistema tende a se estabilizar após um período de aquecimento.",
            },
            {
              letter: "d",
              text: "Variabilidade climática natural, independente da ação humana, pois o permafrost sempre derreteu nos períodos interglaciais.",
            },
            {
              letter: "e",
              text: "Mitigação climática, pois a liberação de metano do permafrost substitui a queima de combustíveis fósseis pelas indústrias.",
            },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra B. O mecanismo descrito é uma retroalimentação
              positiva (também chamada de ciclo de amplificação ou feedback positivo): o aquecimento
              inicial (causado pelo aumento antrópico de GEE) derrete o permafrost, que libera CH₄
              e CO₂, que intensificam o aquecimento, que derrete mais permafrost, e assim por
              diante. Isso cria um ciclo autorreforçante que pode tornar o aquecimento irreversível
              mesmo que as emissões humanas parem — é exatamente o conceito de ponto de inflexão
              (tipping point). Essa dinâmica é uma das principais razões pelas quais os cientistas
              alertam para a urgência de limitar o aquecimento global abaixo de 1,5°C.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              (Adaptado ENEM) Um grupo de países vulneráveis às mudanças climáticas defende em
              negociações internacionais o conceito de "perdas e danos" (loss and damage) — a
              obrigação de países historicamente responsáveis pelas emissões de GEE de indenizar
              nações que já sofrem impactos irreversíveis, como ilhas do Pacífico ameaçadas pelo
              avanço do mar. Analise as premissas que sustentam esse argumento:
              <br />
              <br />
              I. Existe uma relação de causalidade entre as emissões históricas dos países ricos e
              os impactos climáticos sofridos pelos países vulneráveis.
              <br />
              II. A responsabilidade pelas mudanças climáticas deve ser distribuída igualmente por
              todos os países, independentemente de suas emissões históricas.
              <br />
              III. Países que emitiram proporcionalmente menos GEE ao longo da história têm menor
              capacidade de se adaptar aos impactos, pois geralmente são mais pobres.
              <br />
              <br />
              Quais premissas sustentam o argumento dos países vulneráveis?
            </p>
          }
          options={[
            { letter: "a", text: "Apenas I." },
            { letter: "b", text: "Apenas II." },
            { letter: "c", text: "Apenas I e III.", correct: true },
            { letter: "d", text: "Apenas II e III." },
            { letter: "e", text: "I, II e III." },
          ]}
          resolution={
            <p>
              A alternativa correta é a letra C (I e III). A premissa I sustenta o argumento porque
              a ciência climática estabelece claramente que as emissões acumuladas de GEE pelos
              países industrializados desde a Revolução Industrial são a principal causa do
              aquecimento atual — existe, portanto, uma causalidade entre emissões históricas e
              impactos presentes. A premissa III também sustenta o argumento: os países mais
              vulneráveis (pequenas ilhas, países africanos, Bangladesh) são geralmente países em
              desenvolvimento com menos recursos para investir em adaptação (diques, sistemas de
              alerta, relocação de populações). A premissa II está ERRADA e contradiz o argumento:
              os países vulneráveis defendem exatamente o contrário — que a responsabilidade deve
              ser proporcional às emissões históricas, não igualmente distribuída.
            </p>
          }
        />
      </section>
    </article>
  );
}
