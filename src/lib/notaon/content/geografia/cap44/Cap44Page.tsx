"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap44Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 44</span>
          <h1>Interpretação de Mapas, Gráficos, Tabelas, Charges e Imagens no ENEM</h1>
          <p>
            O ENEM é uma prova que vai muito além de memorizar conceitos: boa parte das questões
            de Geografia exige a leitura e interpretação de linguagens visuais — mapas temáticos,
            gráficos estatísticos, tabelas comparativas, charges políticas e fotografias. Saber
            decodificar essas linguagens é uma habilidade transversal que aparece em quase todas
            as edições do exame. Neste capítulo você aprenderá as técnicas essenciais de leitura
            crítica de cada tipo de material, com exemplos práticos e exercícios no estilo ENEM.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Linguagens Visuais</span>
        <h2>1. Por Que o ENEM Cobra Interpretação Visual?</h2>
        <p>
          A matriz de referência do ENEM para Ciências Humanas estabelece como competências
          centrais a capacidade de "compreender os elementos culturais que constituem as
          identidades" e de "utilizar os conhecimentos geográficos para compreender a realidade
          e atuar nela". Ambas as competências são avaliadas, com frequência, por meio de
          fontes visuais que condensam informações complexas em imagens, números e símbolos.
        </p>
        <p>
          As razões para esse enfoque são claras: vivemos numa sociedade saturada de
          representações visuais — infográficos jornalísticos, mapas de aplicativos, gráficos
          de noticiários, charges em redes sociais. Quem domina a leitura dessas linguagens
          tem acesso mais qualificado à informação e ao exercício da cidadania.
        </p>
        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> Antes de ler o enunciado da questão, olhe a imagem/fonte
          com atenção. Leia título, legenda, eixos, data e fonte de dados. Essas informações
          costumam ser chave para responder corretamente.
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cartografia</span>
        <h2>2. Leitura de Mapas Temáticos</h2>
        <p>
          Mapas temáticos representam fenômenos específicos no espaço — distribuição
          populacional, IDH, desmatamento, precipitação, rotas comerciais. No ENEM, os
          mapas aparecem quase sempre acompanhados de uma legenda colorida e de uma pergunta
          que exige relacionar o padrão espacial mostrado com um conceito geográfico.
        </p>
        <h3>Elementos essenciais de um mapa</h3>
        <ul>
          <li><strong>Título:</strong> informa o tema e, frequentemente, o período.</li>
          <li><strong>Legenda:</strong> explica o significado de cada cor, símbolo ou tamanho.</li>
          <li><strong>Escala:</strong> indica a proporção entre o mapa e a realidade.</li>
          <li><strong>Orientação (Rosa dos Ventos):</strong> indica os pontos cardeais.</li>
          <li><strong>Fonte:</strong> revela a origem dos dados e seu grau de confiabilidade.</li>
          <li><strong>Projeção cartográfica:</strong> define como a superfície esférica foi
          planificada, podendo distorcer áreas, formas ou distâncias.</li>
        </ul>
        <p>
          Quando o mapa usa cores graduais (do claro ao escuro), interprete o gradiente: em
          geral, cores mais escuras indicam maior intensidade do fenômeno. Quando usa símbolos
          proporcionais (círculos maiores ou menores), o tamanho representa quantidade.
        </p>

        {/* SVG 1 — Mapa esquemático de IDH */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" width="100%" style={{ maxWidth: 620 }}>
            <rect width="600" height="320" rx="12" fill="#f8fafc" />
            <text x="300" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
              Mapa Esquemático — IDH por Região do Brasil
            </text>
            {/* Norte */}
            <rect x="120" y="50" width="160" height="90" rx="8" fill="#fde68a" stroke="#d97706" strokeWidth="1.5" />
            <text x="200" y="90" textAnchor="middle" fontSize="13" fill="#92400e" fontWeight="bold">NORTE</text>
            <text x="200" y="108" textAnchor="middle" fontSize="11" fill="#78350f">IDH ~0,67 (médio)</text>
            {/* Nordeste */}
            <rect x="310" y="50" width="180" height="90" rx="8" fill="#fca5a5" stroke="#ef4444" strokeWidth="1.5" />
            <text x="400" y="90" textAnchor="middle" fontSize="13" fill="#7f1d1d" fontWeight="bold">NORDESTE</text>
            <text x="400" y="108" textAnchor="middle" fontSize="11" fill="#7f1d1d">IDH ~0,66 (médio)</text>
            {/* Centro-Oeste */}
            <rect x="120" y="165" width="160" height="80" rx="8" fill="#86efac" stroke="#16a34a" strokeWidth="1.5" />
            <text x="200" y="200" textAnchor="middle" fontSize="13" fill="#14532d" fontWeight="bold">CENTRO-OESTE</text>
            <text x="200" y="217" textAnchor="middle" fontSize="11" fill="#14532d">IDH ~0,76 (alto)</text>
            {/* Sudeste */}
            <rect x="310" y="165" width="180" height="80" rx="8" fill="#6ee7b7" stroke="#059669" strokeWidth="1.5" />
            <text x="400" y="200" textAnchor="middle" fontSize="13" fill="#064e3b" fontWeight="bold">SUDESTE</text>
            <text x="400" y="217" textAnchor="middle" fontSize="11" fill="#064e3b">IDH ~0,78 (alto)</text>
            {/* Sul */}
            <rect x="215" y="265" width="160" height="40" rx="8" fill="#34d399" stroke="#047857" strokeWidth="1.5" />
            <text x="295" y="283" textAnchor="middle" fontSize="13" fill="#022c22" fontWeight="bold">SUL — IDH ~0,78 (alto)</text>
            {/* Legenda */}
            <rect x="20" y="265" width="16" height="14" fill="#fca5a5" stroke="#ef4444" />
            <text x="40" y="277" fontSize="10" fill="#475569">IDH médio-baixo</text>
            <rect x="20" y="282" width="16" height="14" fill="#86efac" stroke="#16a34a" />
            <text x="40" y="294" fontSize="10" fill="#475569">IDH alto</text>
            <rect x="20" y="299" width="16" height="14" fill="#34d399" stroke="#047857" />
            <text x="40" y="311" fontSize="10" fill="#475569">IDH alto (Sul)</text>
          </svg>
          <figcaption>
            Representação esquemática do IDH médio por grandes regiões brasileiras.
            Note a desigualdade regional: Norte e Nordeste apresentam índices inferiores
            ao Sul, Sudeste e Centro-Oeste.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Tipos de mapas temáticos e sua utilização no ENEM</caption>
            <thead>
              <tr>
                <th>Tipo de Mapa</th>
                <th>O que representa</th>
                <th>Exemplo no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Coroplético</td>
                <td>Intensidade de um fenômeno por área (cores graduais)</td>
                <td>IDH por país, desmatamento por estado</td>
              </tr>
              <tr>
                <td>Pontual</td>
                <td>Localização de ocorrências (pontos)</td>
                <td>Cidades acima de 1 milhão de habitantes</td>
              </tr>
              <tr>
                <td>Isolinha</td>
                <td>Linhas que unem pontos de igual valor</td>
                <td>Mapas de temperatura, pressão, altitude</td>
              </tr>
              <tr>
                <td>De fluxo</td>
                <td>Direção e volume de deslocamentos</td>
                <td>Rotas de migração, fluxos comerciais</td>
              </tr>
              <tr>
                <td>Anamórfico</td>
                <td>Áreas distorcidas proporcionalmente a um dado</td>
                <td>Tamanho dos países proporcional ao PIB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estatística Visual</span>
        <h2>3. Leitura de Gráficos Estatísticos</h2>
        <p>
          Gráficos condensam séries de dados em imagens. No ENEM, os mais cobrados são:
          gráficos de barras, linhas, pizza (setores), pirâmides etárias e dispersão.
          A estratégia de leitura é sempre a mesma: identifique os eixos, as unidades
          de medida, o período e a legenda antes de tirar qualquer conclusão.
        </p>
        <h3>Erros clássicos de interpretação</h3>
        <ul>
          <li>
            <strong>Confundir taxa com quantidade absoluta:</strong> um país pode ter alta
            taxa de mortalidade infantil e baixo número absoluto de mortes se sua população
            for pequena.
          </li>
          <li>
            <strong>Ignorar o eixo Y truncado:</strong> quando o eixo vertical não começa
            em zero, diferenças pequenas parecem grandes. Verifique sempre a escala.
          </li>
          <li>
            <strong>Confundir crescimento com nível:</strong> um dado pode crescer mas
            permanecer baixo; ou decrescer mas ainda ser alto.
          </li>
          <li>
            <strong>Extrapolar além dos dados:</strong> o gráfico mostra o período indicado;
            projeções além dele são especulações.
          </li>
        </ul>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Tipos de gráfico, uso adequado e como ler no ENEM</caption>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Uso ideal</th>
                <th>O que observar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Barras / Colunas</td>
                <td>Comparar categorias</td>
                <td>Altura das barras, escala do eixo Y</td>
              </tr>
              <tr>
                <td>Linhas</td>
                <td>Evolução temporal</td>
                <td>Tendência (alta/baixa), pontos de inflexão</td>
              </tr>
              <tr>
                <td>Pizza / Setores</td>
                <td>Participação percentual</td>
                <td>Proporções; fatias maiores vs. menores</td>
              </tr>
              <tr>
                <td>Pirâmide Etária</td>
                <td>Estrutura da população por sexo e idade</td>
                <td>Base (jovens), topo (idosos), assimetrias</td>
              </tr>
              <tr>
                <td>Dispersão</td>
                <td>Correlação entre duas variáveis</td>
                <td>Posição dos pontos, tendência da nuvem</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Dinâmica Populacional</span>
        <h2>4. Pirâmides Etárias — Leitura Aprofundada</h2>
        <p>
          A pirâmide etária é um dos gráficos mais cobrados no ENEM dentro do tema
          "Dinâmica Populacional". Ela representa a distribuição da população por sexo
          (homens à esquerda, mulheres à direita) e por faixa etária (0–4 anos na base,
          80+ no topo). A forma da pirâmide revela o estágio de transição demográfica
          do país.
        </p>

        {/* SVG 2 — Pirâmides etárias comparativas */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" width="100%" style={{ maxWidth: 640 }}>
            <rect width="600" height="300" rx="12" fill="#f8fafc" />
            <text x="300" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">
              Pirâmides Etárias — Comparativo
            </text>
            {/* Pirâmide A — País jovem */}
            <text x="110" y="42" textAnchor="middle" fontSize="11" fill="#1d4ed8" fontWeight="bold">País Jovem (ex.: Níger)</text>
            {/* Faixas */}
            <rect x="40" y="50" width="70" height="18" rx="3" fill="#93c5fd" />
            <rect x="110" y="50" width="70" height="18" rx="3" fill="#fca5a5" />
            <text x="105" y="63" textAnchor="middle" fontSize="9" fill="#1e293b">0-14</text>

            <rect x="52" y="72" width="58" height="16" rx="3" fill="#93c5fd" />
            <rect x="110" y="72" width="58" height="16" rx="3" fill="#fca5a5" />
            <text x="105" y="84" textAnchor="middle" fontSize="9" fill="#1e293b">15-29</text>

            <rect x="66" y="92" width="44" height="16" rx="3" fill="#93c5fd" />
            <rect x="110" y="92" width="44" height="16" rx="3" fill="#fca5a5" />
            <text x="105" y="104" textAnchor="middle" fontSize="9" fill="#1e293b">30-44</text>

            <rect x="80" y="112" width="30" height="16" rx="3" fill="#93c5fd" />
            <rect x="110" y="112" width="30" height="16" rx="3" fill="#fca5a5" />
            <text x="105" y="124" textAnchor="middle" fontSize="9" fill="#1e293b">45-59</text>

            <rect x="92" y="132" width="18" height="16" rx="3" fill="#93c5fd" />
            <rect x="110" y="132" width="18" height="16" rx="3" fill="#fca5a5" />
            <text x="105" y="144" textAnchor="middle" fontSize="9" fill="#1e293b">60+</text>
            <text x="110" y="165" textAnchor="middle" fontSize="10" fill="#475569">Base larga = muitos jovens</text>

            {/* Pirâmide B — País envelhecido */}
            <text x="440" y="42" textAnchor="middle" fontSize="11" fill="#7c3aed" fontWeight="bold">País Envelhecido (ex.: Japão)</text>
            <rect x="370" y="50" width="70" height="18" rx="3" fill="#a5b4fc" />
            <rect x="440" y="50" width="70" height="18" rx="3" fill="#f9a8d4" />
            <text x="435" y="63" textAnchor="middle" fontSize="9" fill="#1e293b">0-14</text>

            <rect x="370" y="72" width="68" height="16" rx="3" fill="#a5b4fc" />
            <rect x="440" y="72" width="68" height="16" rx="3" fill="#f9a8d4" />
            <text x="435" y="84" textAnchor="middle" fontSize="9" fill="#1e293b">15-29</text>

            <rect x="370" y="92" width="70" height="16" rx="3" fill="#a5b4fc" />
            <rect x="440" y="92" width="70" height="16" rx="3" fill="#f9a8d4" />
            <text x="435" y="104" textAnchor="middle" fontSize="9" fill="#1e293b">30-44</text>

            <rect x="368" y="112" width="72" height="16" rx="3" fill="#a5b4fc" />
            <rect x="440" y="112" width="72" height="16" rx="3" fill="#f9a8d4" />
            <text x="435" y="124" textAnchor="middle" fontSize="9" fill="#1e293b">45-59</text>

            <rect x="366" y="132" width="74" height="16" rx="3" fill="#a5b4fc" />
            <rect x="440" y="132" width="74" height="16" rx="3" fill="#f9a8d4" />
            <text x="435" y="144" textAnchor="middle" fontSize="9" fill="#1e293b">60+</text>
            <text x="440" y="165" textAnchor="middle" fontSize="10" fill="#475569">Formato retangular = população envelhecida</text>

            {/* Legenda */}
            <rect x="230" y="200" width="16" height="12" fill="#93c5fd" />
            <text x="250" y="211" fontSize="11" fill="#1e293b">Homens</text>
            <rect x="320" y="200" width="16" height="12" fill="#fca5a5" />
            <text x="340" y="211" fontSize="11" fill="#1e293b">Mulheres</text>
            <text x="300" y="240" textAnchor="middle" fontSize="10" fill="#64748b">
              Países jovens têm base larga; países envelhecidos têm topo largo.
            </text>
          </svg>
          <figcaption>
            Comparação esquemática entre pirâmide etária expansiva (país jovem) e
            constritiva (país envelhecido). No ENEM, as questões pedem que o aluno
            identifique o estágio de transição demográfica a partir da forma da pirâmide.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Formas de pirâmide etária e seus significados</caption>
            <thead>
              <tr>
                <th>Formato</th>
                <th>Características</th>
                <th>Países típicos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Expansiva (triangular)</td>
                <td>Base larga, topo estreito; alta natalidade e mortalidade</td>
                <td>Níger, Mali, Angola</td>
              </tr>
              <tr>
                <td>Estacionária</td>
                <td>Base e meio semelhantes; natalidade e mortalidade baixas</td>
                <td>Brasil atual, China, Argentina</td>
              </tr>
              <tr>
                <td>Constritiva (invertida)</td>
                <td>Base estreita, topo largo; natalidade muito baixa, longevidade alta</td>
                <td>Japão, Alemanha, Itália</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Dados Socioeconômicos</span>
        <h2>5. Leitura de Tabelas Comparativas</h2>
        <p>
          Tabelas permitem comparar múltiplos indicadores entre diferentes unidades
          (países, estados, municípios, anos). No ENEM, as tabelas mais comuns trazem
          dados de IDH, PIB per capita, taxa de urbanização, Gini e indicadores de saúde.
          A estratégia de leitura é: (1) identifique as colunas e o que elas medem;
          (2) encontre os extremos (maior e menor valor); (3) procure tendências e
          anomalias; (4) relacione os dados ao enunciado da questão.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Indicadores socioeconômicos selecionados — países (dados aproximados 2023)</caption>
            <thead>
              <tr>
                <th>País</th>
                <th>IDH</th>
                <th>PIB per capita (US$)</th>
                <th>Índice de Gini</th>
                <th>Expectativa de vida</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Noruega</td>
                <td>0,966</td>
                <td>82.655</td>
                <td>25</td>
                <td>83 anos</td>
              </tr>
              <tr>
                <td>Brasil</td>
                <td>0,760</td>
                <td>9.673</td>
                <td>52</td>
                <td>76 anos</td>
              </tr>
              <tr>
                <td>Índia</td>
                <td>0,644</td>
                <td>2.389</td>
                <td>35</td>
                <td>70 anos</td>
              </tr>
              <tr>
                <td>Níger</td>
                <td>0,394</td>
                <td>556</td>
                <td>34</td>
                <td>62 anos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Como o ENEM usa tabelas:</strong> A questão pode pedir que você identifique
          qual país tem maior desigualdade (Gini mais alto), qual tem melhor qualidade de vida
          (IDH mais alto) ou que relacione dois indicadores para explicar um fenômeno social.
          Nunca tire conclusões fora do que os dados mostram.
        </div>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Linguagem Crítica</span>
        <h2>6. Leitura de Charges e Cartuns</h2>
        <p>
          Charges são ilustrações de cunho crítico e humorístico que comentam fatos
          políticos, sociais ou econômicos. No ENEM, elas aparecem geralmente para
          testar a capacidade de leitura de linguagem não verbal e de contextualização
          histórico-geográfica. Para interpretar uma charge:
        </p>
        <ol>
          <li>
            <strong>Identifique os elementos visuais:</strong> personagens, objetos,
            símbolos, cenário. Pergunte-se o que cada elemento representa.
          </li>
          <li>
            <strong>Leia os textos internos:</strong> balões de fala, legendas, placas.
          </li>
          <li>
            <strong>Identifique a intenção crítica:</strong> o que o chargista quer
            denunciar ou satirizar? Qual grupo ou instituição é criticado?
          </li>
          <li>
            <strong>Contextualize:</strong> em que período histórico ou geográfico
            a charge se situa? Relacione com o conteúdo do enunciado.
          </li>
          <li>
            <strong>Não literalize:</strong> charges usam exagero e metáfora. O que
            parece absurdo na imagem representa algo real e grave.
          </li>
        </ol>
        <p>
          Temas recorrentes em charges do ENEM: desigualdade social, degradação ambiental,
          geopolítica do petróleo, xenofobia e migrações, urbanização e violência,
          neocolonialismo e dependência econômica.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Documentação Fotográfica</span>
        <h2>7. Leitura de Fotografias e Imagens de Satélite</h2>
        <p>
          Fotografias aéreas, imagens de satélite e fotos de paisagem são fontes
          primárias poderosas na Geografia. No ENEM, o aluno pode ser solicitado a
          identificar um bioma pela vegetação visível, reconhecer padrões de uso do
          solo, identificar problemas ambientais (erosão, desmatamento, poluição) ou
          analisar contrastes socioespaciais (favela x área rica).
        </p>
        <h3>O que observar em uma imagem geográfica</h3>
        <ul>
          <li><strong>Cobertura do solo:</strong> mata, área urbana, lavoura, solo exposto.</li>
          <li><strong>Padrão de ocupação:</strong> ordenado (planejado) ou irregular (espontâneo).</li>
          <li><strong>Elementos naturais:</strong> relevo, rios, vegetação, tipo de solo.</li>
          <li><strong>Elementos humanos:</strong> vias, edificações, infraestrutura, atividades.</li>
          <li><strong>Escala implícita:</strong> use referências conhecidas (um carro, um edifício)
          para estimar distâncias.</li>
        </ul>
        <div className="lesson-highlight">
          <strong>Imagens de satélite:</strong> No ENEM, imagens de satélite são usadas para
          mostrar desmatamento na Amazônia (manchas escuras = floresta; manchas claras = solo
          exposto), crescimento urbano, ilhas de calor e expansão de fronteiras agrícolas.
        </div>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Projeções Cartográficas</span>
        <h2>8. Distorções de Mapas e Projeções Cartográficas</h2>
        <p>
          Todo mapa é uma simplificação da realidade esférica da Terra. Ao planificar
          o globo, surgem distorções inevitáveis — de área, forma, distância ou direção.
          As principais projeções cobradas no ENEM são:
        </p>
        <ul>
          <li>
            <strong>Mercator:</strong> preserva formas e ângulos (conforme), mas distorce
            áreas — países nas altas latitudes (Europa, Rússia) parecem enormes em relação
            a países tropicais (África, Brasil). É o mapa mais familiar, mas politicamente
            questionado pois superestima o Norte Global.
          </li>
          <li>
            <strong>Peters (Gall-Peters):</strong> preserva áreas (equivalente), mas
            distorce formas. Mostra a África e a América do Sul em tamanho real, corrigindo
            o viés do Mercator.
          </li>
          <li>
            <strong>Polar:</strong> usa como centro o Polo Norte ou Sul; altera a percepção
            de distâncias e rotas aéreas.
          </li>
          <li>
            <strong>Mapa de Peters (Sul acima):</strong> inverte a orientação tradicional,
            colocando o Sul no topo. Usado criticamente para questionar a centralidade
            do Norte no imaginário geográfico ocidental.
          </li>
        </ul>
        <div className="lesson-highlight">
          <strong>ENEM e projeções:</strong> Questões com projeções geralmente pedem que o aluno
          identifique qual fenômeno a projeção enfatiza ou distorce, ou que relacione a escolha
          da projeção a uma visão de mundo específica (eurocêntrica, crítica etc.).
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia de Prova</span>
        <h2>9. Estratégias de Interpretação no Dia da Prova</h2>
        <p>
          Integrar todas as habilidades de leitura visual numa situação de prova exige
          método. Siga esta sequência ao encontrar uma questão com imagem, gráfico ou mapa:
        </p>
        <ol>
          <li>
            <strong>Leia o enunciado primeiro (rápido):</strong> descubra qual conceito
            ou habilidade está sendo avaliado antes de mergulhar na imagem.
          </li>
          <li>
            <strong>Analise a fonte visual com atenção:</strong> título, legenda, eixos,
            datas, fonte dos dados.
          </li>
          <li>
            <strong>Identifique o padrão principal:</strong> qual informação mais se destaca?
            Qual é a tendência ou contraste principal?
          </li>
          <li>
            <strong>Relacione com o enunciado:</strong> o que o enunciado pede que você
            explique ou identifique usando a fonte?
          </li>
          <li>
            <strong>Elimine alternativas inconsistentes:</strong> descarte as opções que
            contradizem o que a fonte mostra ou que extrapolam os dados.
          </li>
          <li>
            <strong>Atenção a armadilhas:</strong> resposta "bonita" mas que vai além do
            que a fonte apresenta é geralmente incorreta no ENEM.
          </li>
        </ol>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Resumo Visual</span>
        <h2>10. Quadro-Síntese das Linguagens Visuais</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Síntese das linguagens visuais no ENEM de Geografia</caption>
            <thead>
              <tr>
                <th>Linguagem</th>
                <th>O que testa</th>
                <th>Erros a evitar</th>
                <th>Frequência no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mapa temático</td>
                <td>Padrão espacial, legenda, projeção</td>
                <td>Ignorar legenda; confundir cor com valor</td>
                <td>Muito alta</td>
              </tr>
              <tr>
                <td>Gráfico de linhas/barras</td>
                <td>Tendências, comparações, evolução</td>
                <td>Escala truncada; confundir taxa com total</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>Pirâmide etária</td>
                <td>Transição demográfica, estrutura etária</td>
                <td>Confundir base com jovens e topo com idosos</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>Tabela</td>
                <td>Comparação de indicadores, extremos</td>
                <td>Ler apenas uma linha; tirar conclusão fora dos dados</td>
                <td>Alta</td>
              </tr>
              <tr>
                <td>Charge/cartum</td>
                <td>Crítica social, contextualização</td>
                <td>Leitura literal; não identificar o alvo da crítica</td>
                <td>Média</td>
              </tr>
              <tr>
                <td>Fotografia/imagem de satélite</td>
                <td>Paisagem, uso do solo, problemas ambientais</td>
                <td>Descrever sem interpretar</td>
                <td>Média</td>
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
              Um mapa temático do Brasil usa uma escala de cores que vai do amarelo-claro
              ao vermelho-escuro para representar a taxa de mortalidade infantil por estado.
              Os estados do Nordeste aparecem em vermelho-escuro, enquanto estados do Sul
              aparecem em amarelo-claro. Com base na legenda convencional desse tipo de mapa,
              é CORRETO afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "O Nordeste tem as menores taxas de mortalidade infantil do Brasil." },
            { letter: "b", text: "A diferença de cores reflete apenas diferenças climáticas entre as regiões." },
            { letter: "c", text: "O Sul apresenta piores indicadores de saúde materno-infantil que o Nordeste." },
            { letter: "d", text: "O Nordeste concentra as maiores taxas de mortalidade infantil, indicando desigualdade regional.", correct: true },
            { letter: "e", text: "O mapa não permite comparar indicadores entre estados, apenas entre países." },
          ]}
          resolution={
            <p>
              Em mapas coropléticos, cores mais intensas (escuras/quentes) indicam maior
              intensidade do fenômeno representado. Se o vermelho-escuro representa alta
              mortalidade infantil e os estados nordestinos aparecem nessa cor, eles têm
              as maiores taxas. Isso reflete uma desigualdade regional histórica relacionada
              a menor renda, menor acesso a saneamento básico e menor cobertura de serviços
              de saúde nessa região. A alternativa D é correta.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              Uma pirâmide etária com base muito larga, que se estreita progressivamente
              até um topo muito fino, indica uma população com:
            </p>
          }
          options={[
            { letter: "a", text: "Alta expectativa de vida e baixa natalidade." },
            { letter: "b", text: "Alta natalidade, alta mortalidade infantil e baixa expectativa de vida.", correct: true },
            { letter: "c", text: "Predomínio de população idosa em relação à jovem." },
            { letter: "d", text: "Taxa de fecundidade abaixo do nível de reposição populacional." },
            { letter: "e", text: "Perfil demográfico típico de países europeus desenvolvidos." },
          ]}
          resolution={
            <p>
              Uma pirâmide com base larga (muitos indivíduos nas faixas 0-4, 5-9, 10-14)
              que se estreita rapidamente até o topo indica: (1) alta natalidade — muitas
              crianças nascem; (2) alta mortalidade — poucos chegam à velhice; (3) baixa
              expectativa de vida — o topo estreito mostra poucos idosos. Esse perfil é
              chamado de "pirâmide expansiva" e é típico de países de baixo desenvolvimento
              humano, como Níger e Mali. A alternativa B é correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              Uma tabela apresenta quatro países com os seguintes dados: País A (PIB per
              capita US$ 45.000; IDH 0,92; Gini 28); País B (PIB per capita US$ 9.500;
              IDH 0,76; Gini 53); País C (PIB per capita US$ 2.000; IDH 0,63; Gini 38);
              País D (PIB per capita US$ 1.200; IDH 0,44; Gini 32). Com base exclusivamente
              nesses dados, qual afirmação é sustentada pela tabela?
            </p>
          }
          options={[
            { letter: "a", text: "O País D tem maior desigualdade social que o País B." },
            { letter: "b", text: "O País A tem o maior PIB per capita E o menor índice de desigualdade da lista.", correct: true },
            { letter: "c", text: "O País C tem qualidade de vida superior à do País B por ter menor Gini." },
            { letter: "d", text: "Quanto menor o PIB per capita, menor o índice de Gini, sempre." },
            { letter: "e", text: "O IDH do País B indica subdesenvolvimento extremo." },
          ]}
          resolution={
            <p>
              Analisando a tabela: O País A tem o maior PIB per capita (45.000) e o menor
              índice de Gini (28 — menor desigualdade). Isso confirma a alternativa B.
              As demais estão erradas: D (Gini 32) tem MENOR desigualdade que B (Gini 53),
              não maior — logo A é falsa. Menor Gini não garante melhor qualidade de vida
              se o IDH for baixo — C é falsa. Não há relação direta e universal entre PIB
              e Gini — D é falsa. IDH 0,76 é considerado "alto" (não subdesenvolvimento
              extremo) — E é falsa.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              Uma charge publicada em jornal mostra um empresário de terno utilizando uma
              faixa de exploração de petróleo com a bandeira de um país rico, colocando um
              cano que vai direto para seus bolsos enquanto um trabalhador do país produtor
              de petróleo assiste com roupas rasgadas. O conceito geográfico mais adequado
              para analisar essa charge é:
            </p>
          }
          options={[
            { letter: "a", text: "Transição energética e substituição de combustíveis fósseis." },
            { letter: "b", text: "Industrialização tardia e dependência tecnológica interna." },
            { letter: "c", text: "Maldição dos recursos naturais e exploração neocolonial.", correct: true },
            { letter: "d", text: "Soberania energética e autossuficiência nacional." },
            { letter: "e", text: "Matriz energética renovável e desenvolvimento sustentável." },
          ]}
          resolution={
            <p>
              A charge representa a "maldição dos recursos naturais" (resource curse) —
              fenômeno em que países ricos em recursos como petróleo não se desenvolvem
              porque a exploração é controlada por empresas estrangeiras e os lucros são
              remetidos ao exterior, enquanto a população local permanece pobre. Isso
              também se relaciona ao neocolonialismo econômico, em que antigas potências
              coloniais mantêm controle econômico sobre países periféricos por meio do
              capital. As demais alternativas descrevem fenômenos que a charge não aborda.
              A alternativa C é correta.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              Um mapa-múndi utilizando a projeção de Mercator mostra a Groenlândia com
              tamanho semelhante ao da África. No entanto, dados reais indicam que a África
              tem área de aproximadamente 30 milhões de km², enquanto a Groenlândia tem
              apenas 2,1 milhões de km². Esse fenômeno ocorre porque a projeção de Mercator:
            </p>
          }
          options={[
            { letter: "a", text: "Preserva as áreas com fidelidade, mas distorce as formas dos continentes." },
            { letter: "b", text: "Inverte as posições dos polos geográficos, distorcendo latitudes altas." },
            { letter: "c", text: "Preserva ângulos e formas, mas distorce progressivamente as áreas em direção aos polos.", correct: true },
            { letter: "d", text: "Foi desenvolvida para destacar os países do hemisfério sul em detrimento do norte." },
            { letter: "e", text: "É uma projeção equivalente que mantém proporções de área entre continentes." },
          ]}
          resolution={
            <p>
              A projeção de Mercator é classificada como "conforme" — preserva ângulos e
              formas locais, o que a torna útil para navegação. No entanto, para fazer isso,
              ela precisa esticar progressivamente as áreas à medida que se afasta do Equador.
              Nas altas latitudes (onde fica a Groenlândia, próxima ao polo), o estiramento
              é enorme, fazendo regiões de alta latitude parecerem muito maiores do que são
              na realidade. Por isso, a Groenlândia parece tão grande quanto a África, quando
              na verdade é 14 vezes menor. A alternativa C é correta.
            </p>
          }
        />
      </section>
    </article>
  );
}
