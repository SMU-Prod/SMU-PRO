"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap04Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 04</span>
          <h1>Cartografia II: projeções cartográficas, mapas temáticos, gráficos e interpretação de dados</h1>
          <p>
            Representar a superfície esférica da Terra em um plano bidimensional é uma tarefa
            impossível sem distorções. As projeções cartográficas são as soluções matemáticas
            desenvolvidas ao longo dos séculos para fazer essa translação, mas cada uma sacrifica
            alguma propriedade — área, forma, distância ou direção. Além das projeções, a
            Cartografia moderna produziu uma vasta família de mapas temáticos e técnicas de
            visualização de dados que vão muito além de simplesmente mostrar onde as coisas estão.
            Saber interpretar corretamente gráficos, mapas de fluxo, cartogramas e tabelas é uma
            competência central nas provas do ENEM, que frequentemente apresenta dados em formatos
            visuais e pede ao estudante que extraia conclusões precisas a partir deles.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Do esférico ao plano</span>
        <h2>1. O Problema da Projeção Cartográfica</h2>
        <p>
          A Terra é um <strong>geoide</strong> — uma forma aproximadamente esférica, levemente
          achatada nos polos e levemente protuberante no Equador. Representar essa superfície
          curva em um papel plano é matematicamente impossível sem introduzir algum tipo de
          distorção. As distorções podem afetar quatro propriedades:
        </p>
        <p>
          <strong>Forma</strong> (conformidade): a angulação e o formato dos continentes. <strong>
          Área</strong> (equivalência): o tamanho proporcional das regiões. <strong>Distância
          </strong>: a proporção das distâncias entre os pontos. <strong>Direção</strong>
          (azimute): o ângulo entre dois pontos.
        </p>
        <p>
          Nenhuma projeção consegue preservar todas essas quatro propriedades simultaneamente.
          Projeções <strong>conformes</strong> preservam a forma local (ângulos), mas distorcem
          áreas. Projeções <strong>equivalentes</strong> preservam áreas, mas distorcem formas.
          Projeções <strong>equidistantes</strong> preservam distâncias a partir de um ponto
          central. A escolha da projeção deve ser guiada pelo uso do mapa.
        </p>
        <p>
          Do ponto de vista geométrico, as projeções podem ser classificadas pela superfície de
          projeção usada: <strong>cilíndrica</strong> (quando o globo é projetado em um cilindro),
          <strong> cônica</strong> (quando é projetado em um cone) e <strong>azimutal</strong>
          (quando é projetado diretamente em um plano tangente ao globo).
        </p>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">As projeções mais usadas</span>
        <h2>2. Principais Projeções Cartográficas</h2>
        <p>
          A <strong>Projeção de Mercator</strong> (1569) é a mais famosa das projeções cilíndricas
          conformes. Criada pelo cartógrafo flamengo Gerardus Mercator, ela preserva os ângulos e
          as formas locais, o que a torna excelente para navegação marítima (as linhas de rumo
          constante — loxodromias — aparecem como retas). No entanto, distorce enormemente as
          áreas nas latitudes mais altas: a Groenlândia aparece com tamanho similar ao da África,
          quando na realidade a África é cerca de 14 vezes maior. Essa distorção produziu um viés
          histórico que supervalorizava visualmente países do hemisfério norte.
        </p>
        <p>
          A <strong>Projeção de Peters</strong> (ou Gall-Peters, 1974) é uma projeção cilíndrica
          equivalente que preserva as áreas, corrigindo a distorção de Mercator. Os países do
          hemisfério sul aparecem com seu tamanho correto. Porém, essa projeção distorce
          intensamente as formas: os continentes parecem esticados verticalmente nas latitudes
          médias. Peters a propôs com motivação política, como representação mais "justa" dos
          países em desenvolvimento.
        </p>
        <p>
          A <strong>Projeção de Winkel Tripel</strong> é adotada pela National Geographic Society
          para mapas mundiais por oferecer um bom compromisso entre formas e áreas. A <strong>
          Projeção de Robinson</strong> (1963) também é de compromisso, amplamente usada em
          atlas escolares. A <strong>Projeção Policônica</strong> foi muito usada no Brasil e é
          indicada para representar regiões de extensão longitudinal (norte-sul) moderada.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais projeções cartográficas: características e usos</caption>
            <thead>
              <tr>
                <th>Projeção</th>
                <th>Tipo</th>
                <th>Propriedade preservada</th>
                <th>Principal uso</th>
                <th>Distorção principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mercator</td>
                <td>Cilíndrica conforme</td>
                <td>Forma (ângulos)</td>
                <td>Navegação marítima e aérea</td>
                <td>Áreas nas altas latitudes</td>
              </tr>
              <tr>
                <td>Gall-Peters</td>
                <td>Cilíndrica equivalente</td>
                <td>Área</td>
                <td>Comparação de tamanhos de países</td>
                <td>Forma (esticamento)</td>
              </tr>
              <tr>
                <td>Policônica</td>
                <td>Cônica</td>
                <td>Compromisso</td>
                <td>Cartas topográficas brasileiras</td>
                <td>Aumenta com a distância do meridiano central</td>
              </tr>
              <tr>
                <td>Winkel Tripel</td>
                <td>Pseudocilíndrica</td>
                <td>Compromisso (área + forma)</td>
                <td>Mapas mundiais gerais</td>
                <td>Moderada em área e forma</td>
              </tr>
              <tr>
                <td>Azimutal equidistante</td>
                <td>Plana</td>
                <td>Distância a partir do centro</td>
                <td>Telecomunicações, aviação polar</td>
                <td>Forma e área nas bordas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG: Comparação de projeções */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg">
          <rect width="640" height="320" fill="#f0f4f8" rx="12" />
          <text x="320" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a5f">
            Comparação esquemática: Mercator × Gall-Peters
          </text>
          {/* Mercator - painel esquerdo */}
          <rect x="30" y="45" width="270" height="240" fill="white" stroke="#aaa" strokeWidth="1" rx="6" />
          <text x="165" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1565c0">Mercator (conforme)</text>
          {/* Grade Mercator */}
          {[80, 115, 150, 185, 220, 255].map((y, i) => (
            <line key={`mh${i}`} x1="40" y1={y} x2="290" y2={y} stroke="#e0e8f0" strokeWidth="1" />
          ))}
          {[65, 105, 145, 185, 225, 265, 290].map((x, i) => (
            <line key={`mv${i}`} x1={x} y1="75" x2={x} y2="275" stroke="#e0e8f0" strokeWidth="1" />
          ))}
          {/* Blocos de continentes esquemáticos - Mercator */}
          {/* África */}
          <rect x="155" y="130" width="55" height="90" rx="4" fill="#c8e6c9" stroke="#388e3c" strokeWidth="1.5" />
          <text x="183" y="178" textAnchor="middle" fontSize="9" fill="#1b5e20">África</text>
          {/* Groenlândia - inflada */}
          <rect x="190" y="80" width="70" height="45" rx="4" fill="#bbdefb" stroke="#1565c0" strokeWidth="1.5" />
          <text x="225" y="107" textAnchor="middle" fontSize="9" fill="#0d47a1">Groenlândia</text>
          <text x="225" y="118" textAnchor="middle" fontSize="8" fill="#0d47a1">(inflada)</text>
          {/* Europa */}
          <rect x="148" y="90" width="40" height="35" rx="3" fill="#ffe0b2" stroke="#e65100" strokeWidth="1" />
          <text x="168" y="112" textAnchor="middle" fontSize="8" fill="#bf360c">Europa</text>
          {/* América do Sul */}
          <rect x="65" y="155" width="50" height="75" rx="4" fill="#f8bbd0" stroke="#c2185b" strokeWidth="1.5" />
          <text x="90" y="196" textAnchor="middle" fontSize="9" fill="#880e4f">Américas</text>
          {/* Nota */}
          <text x="165" y="292" textAnchor="middle" fontSize="9" fill="#e53935">Groenlândia ≈ Africa em tamanho visual</text>

          {/* Peters - painel direito */}
          <rect x="340" y="45" width="270" height="240" fill="white" stroke="#aaa" strokeWidth="1" rx="6" />
          <text x="475" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#c62828">Gall-Peters (equivalente)</text>
          {/* Grade Peters */}
          {[80, 110, 140, 170, 200, 230, 260].map((y, i) => (
            <line key={`ph${i}`} x1="350" y1={y} x2="600" y2={y} stroke="#e0e8f0" strokeWidth="1" />
          ))}
          {[370, 400, 430, 460, 490, 520, 600].map((x, i) => (
            <line key={`pv${i}`} x1={x} y1="75" x2={x} y2="275" stroke="#e0e8f0" strokeWidth="1" />
          ))}
          {/* África - tamanho real, esticada */}
          <rect x="460" y="130" width="55" height="120" rx="4" fill="#c8e6c9" stroke="#388e3c" strokeWidth="1.5" />
          <text x="487" y="193" textAnchor="middle" fontSize="9" fill="#1b5e20">África</text>
          <text x="487" y="205" textAnchor="middle" fontSize="8" fill="#1b5e20">(área correta)</text>
          {/* Groenlândia - pequeníssima */}
          <rect x="500" y="80" width="20" height="15" rx="3" fill="#bbdefb" stroke="#1565c0" strokeWidth="1.5" />
          <text x="530" y="92" fontSize="8" fill="#0d47a1">Groenlândia</text>
          {/* Europa */}
          <rect x="455" y="100" width="35" height="28" rx="3" fill="#ffe0b2" stroke="#e65100" strokeWidth="1" />
          <text x="472" y="118" textAnchor="middle" fontSize="8" fill="#bf360c">Europa</text>
          {/* América do Sul */}
          <rect x="375" y="148" width="50" height="115" rx="4" fill="#f8bbd0" stroke="#c2185b" strokeWidth="1.5" />
          <text x="400" y="208" textAnchor="middle" fontSize="9" fill="#880e4f">Américas</text>
          <text x="475" y="292" textAnchor="middle" fontSize="9" fill="#2e7d32">África ≈ 14× maior que a Groenlândia</text>
        </svg>
        <figcaption>
          Comparação esquemática entre Mercator e Gall-Peters. Em Mercator, a Groenlândia aparece
          de tamanho similar à África; em Gall-Peters (equivalente), as proporções de área são
          corretas mas as formas ficam distorcidas verticalmente.
        </figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mapas com propósito</span>
        <h2>3. Mapas Temáticos</h2>
        <p>
          Os <strong>mapas temáticos</strong> representam a distribuição espacial de um fenômeno
          específico — diferentemente dos mapas de base (ou topográficos), que representam a
          superfície terrestre em seus aspectos gerais. Há vários tipos de mapas temáticos, cada
          um adequado a um tipo de informação.
        </p>
        <p>
          O <strong>mapa coroplético</strong> (ou de cores graduadas) representa fenômenos
          quantitativos por meio de variações de cor ou intensidade de hachura, distribuídas por
          unidades administrativas (países, estados, municípios). Exemplo: mapa de IDH por país,
          com cores mais escuras para IDH mais alto. A limitação é que ele pressupõe distribuição
          uniforme dentro de cada unidade.
        </p>
        <p>
          O <strong>mapa de símbolos proporcionais</strong> usa figuras geométricas (geralmente
          círculos) cujo tamanho é proporcional ao valor representado. É adequado para dados
          absolutos (população total, volume de produção). Diferentemente do coroplético, permite
          comparação visual imediata entre regiões.
        </p>
        <p>
          O <strong>mapa de fluxo</strong> representa movimentos entre lugares (migração,
          comércio, transporte) por meio de setas ou linhas de espessura proporcional ao volume
          do fluxo. É especialmente útil para visualizar redes e hierarquias entre cidades ou
          países.
        </p>
        <p>
          O <strong>cartograma</strong> (ou mapa anamórfico) distorce deliberadamente as áreas
          dos países ou regiões proporcionalmente ao valor do fenômeno representado. Um cartograma
          de população faz países populosos (China, Índia) parecerem gigantes e países esparsos
          parecerem mínimos. É visualmente impactante, mas requer familiaridade para ser lido
          corretamente.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Tipos de mapas temáticos e suas características</caption>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Técnica visual</th>
                <th>Dado representado</th>
                <th>Vantagem</th>
                <th>Limitação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Coroplético</td>
                <td>Cores graduadas por unidade</td>
                <td>Dados relativos (densidade, %, índices)</td>
                <td>Simples e intuitivo</td>
                <td>Assume uniformidade dentro da unidade</td>
              </tr>
              <tr>
                <td>Símbolos proporcionais</td>
                <td>Figuras geométricas de tamanho variado</td>
                <td>Dados absolutos (total, volume)</td>
                <td>Comparação visual direta</td>
                <td>Difícil ler valores exatos</td>
              </tr>
              <tr>
                <td>Fluxo</td>
                <td>Setas de espessura proporcional</td>
                <td>Movimentos e conexões</td>
                <td>Mostra direção e magnitude</td>
                <td>Pode ficar confuso com muitos fluxos</td>
              </tr>
              <tr>
                <td>Cartograma</td>
                <td>Distorção da área da unidade</td>
                <td>Qualquer dado absoluto ou relativo</td>
                <td>Impacto visual forte</td>
                <td>Difícil reconhecer regiões</td>
              </tr>
              <tr>
                <td>Pontos</td>
                <td>Pontos de valor fixo</td>
                <td>Distribuição de fenômenos discretos</td>
                <td>Mostra distribuição espacial</td>
                <td>Superposição em áreas densas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Outras linguagens visuais</span>
        <h2>4. Gráficos e Sua Interpretação</h2>
        <p>
          Além dos mapas, as questões do ENEM frequentemente apresentam dados em forma de
          gráficos. Saber identificar o tipo de gráfico adequado a cada dado e interpretar suas
          informações com precisão é fundamental.
        </p>
        <p>
          O <strong>gráfico de barras</strong> (ou colunas) é o mais indicado para comparar
          categorias entre si. É de fácil leitura e adequado tanto para dados absolutos quanto
          relativos. As barras podem ser verticais (colunas) ou horizontais, simples ou agrupadas
          (quando há mais de uma série de dados).
        </p>
        <p>
          O <strong>gráfico de linhas</strong> é o mais indicado para representar variações ao
          longo do tempo (séries temporais). A linha conecta pontos de dados em ordem cronológica,
          permitindo visualizar tendências, picos e quedas. Exemplo: evolução da taxa de
          desmatamento anual.
        </p>
        <p>
          O <strong>gráfico de setores</strong> (pizza) representa a composição de um todo em
          partes percentuais. É adequado quando se quer mostrar a participação relativa de cada
          componente. Deve-se evitar usá-lo com muitas categorias (mais de 6 setores tornam a
          leitura difícil).
        </p>
        <p>
          O <strong>histograma</strong> é similar ao gráfico de barras, mas representa a
          distribuição de frequências de uma variável contínua (ex.: distribuição de renda por
          faixa salarial). As barras são adjacentes, sem espaço entre elas.
        </p>
        <p>
          O <strong>gráfico de dispersão</strong> mostra a relação entre duas variáveis
          quantitativas. É útil para identificar correlações: se os pontos formam uma nuvem
          ascendente, há correlação positiva; se descendente, correlação negativa.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Dados em perspectiva</span>
        <h2>5. Leitura Crítica de Dados Geográficos</h2>
        <p>
          Interpretar dados geográficos vai além de ler números: requer contextualização,
          identificação de tendências e senso crítico sobre as limitações dos dados. Algumas
          habilidades fundamentais:
        </p>
        <p>
          <strong>Distinguir dado absoluto de relativo:</strong> o Brasil tem mais de 200 milhões
          de habitantes (dado absoluto), mas a densidade demográfica é de cerca de 25 hab/km²
          (dado relativo). Uma cidade pode ter grande população absoluta mas baixa densidade se
          for muito extensa.
        </p>
        <p>
          <strong>Atenção ao recorte temporal:</strong> um dado de 2010 pode não refletir a
          realidade de 2024. Questões do ENEM frequentemente pedem que o estudante identifique a
          que período os dados se referem e se os padrões mostrados ainda são válidos.
        </p>
        <p>
          <strong>Cuidado com correlação e causalidade:</strong> dois fenômenos podem variar
          juntos (correlação) sem que um cause o outro. Exemplo: países com maior consumo de
          chocolate per capita tendem a ter mais ganhadores do Nobel — mas não é o chocolate que
          causa a criatividade científica; ambos estão correlacionados com nível de
          desenvolvimento econômico.
        </p>
        <p>
          <strong>Escala e amostragem:</strong> dados nacionais podem esconder desigualdades
          regionais intensas. O Brasil tem IDH médio de 0,754 (2021), mas enquanto o Distrito
          Federal tem IDH equivalente ao de países desenvolvidos, estados como Maranhão e Piauí
          têm índices próximos aos de países em desenvolvimento.
        </p>
      </section>

      {/* SVG: Tipos de gráficos */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg">
          <rect width="640" height="340" fill="#f5f9ff" rx="12" />
          <text x="320" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a5f">
            Tipos de Gráficos e Quando Usá-los
          </text>

          {/* Gráfico de barras */}
          <rect x="20" y="45" width="180" height="130" fill="white" stroke="#ddd" strokeWidth="1" rx="6" />
          <text x="110" y="63" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1565c0">Barras — Comparação</text>
          <rect x="40" y="130" width="22" height="32" fill="#64b5f6" />
          <rect x="70" y="110" width="22" height="52" fill="#64b5f6" />
          <rect x="100" y="90" width="22" height="72" fill="#64b5f6" />
          <rect x="130" y="105" width="22" height="57" fill="#64b5f6" />
          <rect x="160" y="120" width="22" height="42" fill="#64b5f6" />
          <line x1="35" y1="162" x2="190" y2="162" stroke="#888" strokeWidth="1.5" />
          <text x="110" y="170" textAnchor="middle" fontSize="9" fill="#555">Categorias</text>

          {/* Gráfico de linha */}
          <rect x="220" y="45" width="180" height="130" fill="white" stroke="#ddd" strokeWidth="1" rx="6" />
          <text x="310" y="63" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2e7d32">Linhas — Tendência temporal</text>
          <polyline points="240,145 265,130 290,115 315,125 340,100 365,108 390,90" fill="none" stroke="#4caf50" strokeWidth="2" />
          {[240, 265, 290, 315, 340, 365, 390].map((x, i) => {
            const ys = [145, 130, 115, 125, 100, 108, 90];
            return <circle key={i} cx={x} cy={ys[i]} r="3" fill="#2e7d32" />;
          })}
          <line x1="235" y1="155" x2="395" y2="155" stroke="#888" strokeWidth="1.5" />
          <line x1="235" y1="80" x2="235" y2="155" stroke="#888" strokeWidth="1.5" />
          <text x="310" y="170" textAnchor="middle" fontSize="9" fill="#555">Tempo (anos)</text>

          {/* Gráfico de pizza */}
          <rect x="420" y="45" width="200" height="130" fill="white" stroke="#ddd" strokeWidth="1" rx="6" />
          <text x="520" y="63" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#e65100">Pizza — Composição (%)</text>
          {/* Pizza */}
          <path d="M520,120 L520,80 A40,40 0 0,1 557,100 Z" fill="#ff9800" />
          <path d="M520,120 L557,100 A40,40 0 0,1 545,155 Z" fill="#f44336" />
          <path d="M520,120 L545,155 A40,40 0 0,1 483,148 Z" fill="#4caf50" />
          <path d="M520,120 L483,148 A40,40 0 0,1 480,90 Z" fill="#2196f3" />
          <path d="M520,120 L480,90 A40,40 0 0,1 520,80 Z" fill="#9c27b0" />
          {/* Legenda pizza */}
          <rect x="570" y="78" width="10" height="8" fill="#ff9800" />
          <text x="585" y="87" fontSize="8" fill="#333">Norte 14%</text>
          <rect x="570" y="93" width="10" height="8" fill="#f44336" />
          <text x="585" y="102" fontSize="8" fill="#333">Nordeste 27%</text>
          <rect x="570" y="108" width="10" height="8" fill="#4caf50" />
          <text x="585" y="117" fontSize="8" fill="#333">CO 15%</text>
          <rect x="570" y="123" width="10" height="8" fill="#2196f3" />
          <text x="585" y="132" fontSize="8" fill="#333">Sudeste 36%</text>
          <rect x="570" y="138" width="10" height="8" fill="#9c27b0" />
          <text x="585" y="147" fontSize="8" fill="#333">Sul 14%</text>

          {/* Cartograma */}
          <rect x="20" y="195" width="280" height="130" fill="white" stroke="#ddd" strokeWidth="1" rx="6" />
          <text x="160" y="213" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#6a1b9a">Cartograma — Área proporcional ao dado</text>
          {/* Retângulos proporcionais */}
          <rect x="30" y="220" width="80" height="90" fill="#ce93d8" stroke="#6a1b9a" strokeWidth="1.5" rx="4" />
          <text x="70" y="270" textAnchor="middle" fontSize="9" fill="#4a148c">China</text>
          <text x="70" y="282" textAnchor="middle" fontSize="8" fill="#4a148c">1,4 bi</text>
          <rect x="120" y="230" width="75" height="80" fill="#ce93d8" stroke="#6a1b9a" strokeWidth="1.5" rx="4" />
          <text x="157" y="274" textAnchor="middle" fontSize="9" fill="#4a148c">Índia</text>
          <text x="157" y="286" textAnchor="middle" fontSize="8" fill="#4a148c">1,4 bi</text>
          <rect x="205" y="240" width="45" height="60" fill="#ce93d8" stroke="#6a1b9a" strokeWidth="1" rx="4" />
          <text x="228" y="274" textAnchor="middle" fontSize="8" fill="#4a148c">EUA</text>
          <text x="228" y="286" textAnchor="middle" fontSize="8" fill="#4a148c">335 mi</text>
          <text x="160" y="320" textAnchor="middle" fontSize="8" fill="#666">Área proporcional à população</text>

          {/* Dispersão */}
          <rect x="320" y="195" width="300" height="130" fill="white" stroke="#ddd" strokeWidth="1" rx="6" />
          <text x="470" y="213" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#c62828">Dispersão — Correlação entre variáveis</text>
          <line x1="340" y1="310" x2="610" y2="310" stroke="#888" strokeWidth="1.5" />
          <line x1="340" y1="220" x2="340" y2="310" stroke="#888" strokeWidth="1.5" />
          {[[355,295],[370,285],[390,275],[405,268],[425,260],[445,252],[460,245],[480,240],[500,230],[520,225],[545,218]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="4" fill="#ef5350" opacity="0.8" />
          ))}
          <line x1="350" y1="298" x2="555" y2="215" stroke="#c62828" strokeWidth="1.5" strokeDasharray="5,3" />
          <text x="470" y="323" textAnchor="middle" fontSize="9" fill="#555">Variável X</text>
          <text x="328" y="265" fontSize="9" fill="#555" transform="rotate(-90 328 265)">Variável Y</text>
          <text x="580" y="222" fontSize="9" fill="#c62828">↗ correl.</text>
          <text x="580" y="234" fontSize="9" fill="#c62828">positiva</text>
        </svg>
        <figcaption>
          Principais tipos de gráficos utilizados em análise geográfica: barras (comparação de
          categorias), linhas (tendências temporais), pizza (composição percentual), cartograma
          (área proporcional ao dado) e dispersão (correlação entre duas variáveis).
        </figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sensoriamento remoto</span>
        <h2>6. Sensoriamento Remoto e Geoprocessamento</h2>
        <p>
          O <strong>sensoriamento remoto</strong> consiste na obtenção de informações sobre objetos
          ou fenômenos na superfície terrestre a partir de sensores instalados em plataformas
          distantes — principalmente satélites e aeronaves. As imagens de satélite permitem
          monitorar em tempo quase real fenômenos como desmatamento, queimadas, expansão urbana,
          inundações e mudanças no uso do solo.
        </p>
        <p>
          Os satélites de observação terrestre captam imagens em diferentes <strong>bandas do
          espectro eletromagnético</strong>, incluindo o visível (que o olho humano percebe) e o
          infravermelho (que revela informações sobre vegetação, temperatura e umidade do solo
          invisíveis ao olho nu). A combinação de diferentes bandas gera composições coloridas
          artificiais muito úteis para análise ambiental.
        </p>
        <p>
          O <strong>Geoprocessamento</strong> é o conjunto de técnicas computacionais de coleta,
          armazenamento, processamento e análise de dados georreferenciados (dados associados a
          coordenadas geográficas). O principal produto do geoprocessamento são os <strong>
          Sistemas de Informações Geográficas (SIG/GIS)</strong>, que permitem sobrepor múltiplas
          camadas de informação — hidrografia, relevo, vegetação, uso do solo, limites
          administrativos — e realizar análises espaciais complexas.
        </p>
        <p>
          No Brasil, o INPE (Instituto Nacional de Pesquisas Espaciais) utiliza geoprocessamento
          e sensoriamento remoto para monitorar o desmatamento na Amazônia (sistema PRODES) e as
          queimadas (sistema BDQueimadas), fornecendo dados essenciais para políticas ambientais.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O mapa e o poder</span>
        <h2>7. Interpretação Crítica de Mapas</h2>
        <p>
          Todo mapa é uma representação parcial e seletiva da realidade. Ao interpretar um mapa,
          é fundamental questionar: Quem fez esse mapa? Com que propósito? Quais elementos foram
          incluídos e quais foram omitidos? Qual projeção foi usada e que efeitos ela produz?
        </p>
        <p>
          A <strong>linguagem visual do mapa</strong> comunica muito além dos dados numéricos.
          As cores usadas em mapas políticos, por exemplo, frequentemente refletem convenções
          culturais: no Brasil, o vermelho historicamente representa o Partido dos Trabalhadores
          nos mapas eleitorais, enquanto azul representa partidos conservadores — o oposto da
          convenção usada nos EUA, onde vermelho representa os Republicanos (conservadores) e azul
          os Democratas (progressistas).
        </p>
        <p>
          A <strong>escala de análise</strong> também interfere na interpretação. Um mapa de
          violência urbana em escala de bairro revela padrões espaciais muito diferentes de um
          mapa estadual. Fenômenos que parecem aleatórios em escala pequena podem revelar
          padrões claros em escala grande (e vice-versa).
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exemplos do ENEM</span>
        <h2>8. Tipos de Questão sobre Cartografia no ENEM</h2>
        <p>
          O ENEM aborda Cartografia de diversas formas. Conhecer os formatos recorrentes ajuda na
          preparação:
        </p>
        <p>
          <strong>Questões de escala:</strong> pedem cálculo de distâncias reais a partir de
          medidas no mapa, ou exigem identificar qual escala é a mais adequada para determinado
          uso. Requerem apenas operações aritméticas simples, mas exigem atenção às conversões
          de unidades.
        </p>
        <p>
          <strong>Questões de projeção:</strong> geralmente apresentam um mapa específico e
          perguntam sobre sua projeção ou sobre as distorções que ela produz. Exigem reconhecer
          as características visuais das projeções principais (Mercator, Peters, polar).
        </p>
        <p>
          <strong>Questões de interpretação de dados:</strong> apresentam gráficos, tabelas ou
          mapas temáticos e pedem que o estudante identifique tendências, compare regiões ou
          tire conclusões sobre fenômenos geográficos. A habilidade-chave é não apenas ler os
          valores, mas interpretar o que eles significam no contexto geográfico.
        </p>
        <p>
          <strong>Questões de leitura de mapa temático:</strong> apresentam um mapa de fluxo,
          coroplético ou de símbolos proporcionais e pedem que o estudante identifique padrões
          espaciais ou relacione os dados com processos geográficos (ex.: fluxos migratórios,
          concentração industrial, desigualdade regional).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Habilidades de Cartografia mais cobradas no ENEM (por tipo de questão)</caption>
            <thead>
              <tr>
                <th>Habilidade</th>
                <th>O que é cobrado</th>
                <th>Dica de estudo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cálculo de escala</td>
                <td>Converter distâncias mapa–realidade</td>
                <td>Praticar conversão cm → m → km com regra de três</td>
              </tr>
              <tr>
                <td>Identificação de projeção</td>
                <td>Reconhecer distorções e limitações</td>
                <td>Memorizar as características visuais de Mercator, Peters e polar</td>
              </tr>
              <tr>
                <td>Leitura de mapa temático</td>
                <td>Interpretar padrões espaciais de dados</td>
                <td>Praticar com mapas do IBGE, INPE e Atlas do PNUD</td>
              </tr>
              <tr>
                <td>Interpretação de gráficos</td>
                <td>Extrair tendências e comparar dados</td>
                <td>Identificar o tipo de gráfico e o que cada eixo representa antes de ler</td>
              </tr>
              <tr>
                <td>Crítica cartográfica</td>
                <td>Avaliar vieses e intencionalidade</td>
                <td>Refletir sobre o que o mapa mostra e o que omite</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tecnologia e mapas</span>
        <h2>9. Cartografia Digital e GPS</h2>
        <p>
          O <strong>Sistema de Posicionamento Global (GPS)</strong>, desenvolvido pelo Departamento
          de Defesa dos EUA e operacional para uso civil desde 1994, revolucionou a localização e
          a navegação. O sistema funciona com uma constelação de satélites que emitem sinais de
          rádio: um receptor GPS calcula sua posição triangulando os sinais de pelo menos quatro
          satélites.
        </p>
        <p>
          Outros sistemas semelhantes ao GPS incluem o <strong>GLONASS</strong> (russo), o
          <strong> Galileo</strong> (europeu) e o <strong>BeiDou</strong> (chinês). O Brasil
          desenvolve o <strong>SBAS brasileiro</strong> (Sistema de Aumentação Baseado em
          Satélites) para melhorar a precisão do GPS no território nacional, especialmente para
          uso na aviação e agricultura de precisão.
        </p>
        <p>
          A <strong>cartografia colaborativa</strong>, exemplificada pelo OpenStreetMap (OSM), é
          um projeto de mapa mundial livre e colaborativo onde qualquer pessoa pode contribuir com
          dados. Essa abordagem democratizou a cartografia, especialmente em regiões onde mapas
          oficiais são escassos ou desatualizados, como em periferias urbanas e áreas rurais de
          países em desenvolvimento.
        </p>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Revisão integrada</span>
        <h2>10. Síntese: Cartografia I e II Integradas</h2>
        <p>
          Os capítulos 3 e 4 formam um bloco integrado de Cartografia. É importante visualizar
          como os conceitos se encadeiam: para localizar um fenômeno no espaço, usam-se as
          <strong> coordenadas geográficas</strong>; para representá-lo em papel, escolhe-se uma
          <strong> projeção</strong>; para comunicar informações temáticas, adota-se o <strong>
          tipo de mapa</strong> adequado ao dado; e para interpretá-lo corretamente, aplicam-se
          habilidades de <strong>leitura crítica</strong> e quantitativa.
        </p>
        <p>
          A <strong>escala</strong> permeia todas essas etapas: ela determina o nível de detalhe
          possível no mapa, influencia a escolha da projeção (escalas grandes distorcem menos que
          pequenas em qualquer projeção) e define o recorte espacial da análise. Dominar essas
          relações é essencial para responder às questões mais sofisticadas do ENEM, que
          combinam habilidades de orientação, cálculo e interpretação em um único contexto.
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
              A Projeção de Mercator, criada no século XVI, é amplamente utilizada em aplicativos
              de navegação como Google Maps. Sobre essa projeção, é correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "Preserva as áreas de todos os continentes, sendo especialmente útil para comparar o tamanho de países." },
            { letter: "b", text: "Representa o globo terrestre sem nenhuma distorção, pois foi desenvolvida com base em cálculos matemáticos precisos." },
            { letter: "c", text: "Preserva os ângulos e as formas locais (é conforme), mas distorce as áreas nas altas latitudes, fazendo regiões polares parecerem maiores do que são.", correct: true },
            { letter: "d", text: "É uma projeção equivalente, indicada para mapas que comparam a distribuição de fenômenos entre diferentes países." },
            { letter: "e", text: "Representa os meridianos como linhas curvas convergindo nos polos, o que elimina as distorções de forma nas latitudes médias." },
          ]}
          resolution={
            <p>
              A resposta correta é C. A Projeção de Mercator é cilíndrica e conforme: preserva
              os ângulos locais (formas), o que a torna excelente para navegação (linhas de rumo
              constante — loxodromias — aparecem como linhas retas). Porém, ela distorce
              progressivamente as áreas à medida que se afasta do Equador. Nas altas latitudes,
              regiões como a Groenlândia parecem muito maiores do que são na realidade (a África
              é cerca de 14 vezes maior que a Groenlândia, mas em Mercator elas parecem
              similares). As alternativas A e D descrevem projeções equivalentes (como Gall-Peters).
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              Em um mapa coroplético sobre a taxa de urbanização dos estados brasileiros, as cores
              mais escuras representam os estados com maior percentual de população urbana. Com
              base na compreensão desse tipo de mapa, assinale a afirmação correta:
            </p>
          }
          options={[
            { letter: "a", text: "O mapa coroplético é inadequado para representar dados percentuais ou índices, sendo mais indicado para dados absolutos como população total." },
            { letter: "b", text: "Um mapa coroplético representa fielmente a distribuição da população dentro de cada estado, indicando onde exatamente os habitantes vivem." },
            { letter: "c", text: "O mapa coroplético apresenta um dado médio por unidade administrativa, assumindo que o fenômeno se distribui uniformemente dentro de cada unidade, o que pode ser uma simplificação da realidade.", correct: true },
            { letter: "d", text: "As cores do mapa coroplético representam valores absolutos, portanto estados maiores em área aparecem sempre com cores mais escuras." },
            { letter: "e", text: "O mapa coroplético permite identificar precisamente em que município de cada estado a maior concentração urbana se encontra." },
          ]}
          resolution={
            <p>
              A alternativa C está correta. O mapa coroplético é ideal para representar dados
              relativos (percentuais, índices, densidades) por unidade administrativa. Sua
              principal limitação é que ele representa um valor médio para toda a unidade
              (estado, município, país), assumindo implicitamente que o fenômeno se distribui de
              forma homogênea dentro dessa unidade — o que raramente é verdade. Um estado com
              alta taxa de urbanização pode ter capitais com 99% de população urbana e municípios
              do interior com 20%. A alternativa B está errada porque o coroplético não mostra a
              distribuição interna; D está errada porque o coroplético representa dados relativos,
              não absolutos.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              Um pesquisador analisando dados sobre migração interna no Brasil quer criar um mapa
              que mostre os principais fluxos de migrantes entre as regiões do país, incluindo as
              direções dos deslocamentos e o volume relativo de pessoas que se movem em cada rota.
              O tipo de representação cartográfica mais adequado para esse propósito é:
            </p>
          }
          options={[
            { letter: "a", text: "Mapa coroplético, com cores mais intensas nos estados que mais recebem migrantes." },
            { letter: "b", text: "Cartograma (mapa anamórfico), distorcendo o tamanho das regiões proporcionalmente ao número de migrantes recebidos." },
            { letter: "c", text: "Mapa de fluxo, com setas ou linhas de espessura proporcional ao volume de migrantes, mostrando a origem, destino e intensidade dos deslocamentos.", correct: true },
            { letter: "d", text: "Mapa de pontos, com cada ponto representando um determinado número de migrantes espalhados pelo território." },
            { letter: "e", text: "Histograma, mostrando a distribuição de migrantes por faixa etária em cada região do Brasil." },
          ]}
          resolution={
            <p>
              A resposta correta é C. O mapa de fluxo é especificamente desenvolvido para
              representar movimentos entre lugares. As setas indicam a direção do deslocamento
              (origem → destino) e sua espessura é proporcional ao volume do fluxo — quanto mais
              espessa a seta, mais migrantes naquela rota. É o tipo de mapa mais adequado para
              mostrar simultaneamente direção e intensidade de movimentos. O mapa coroplético (A)
              mostraria apenas destinos, sem indicar de onde os migrantes vieram. O cartograma
              (B) distorce a área, dificultando a leitura das rotas. Mapa de pontos (D) não
              indica direção. Histograma (E) é um gráfico, não um mapa.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              Observe a seguinte informação: "Em 2022, o IDH do Brasil era de 0,754 (alto), mas o
              IDH do Distrito Federal era de 0,824 (muito alto) enquanto o do Maranhão era de
              0,676 (médio)". Com base nessa afirmação e nos princípios de interpretação crítica
              de dados geográficos, qual conclusão é mais adequada?
            </p>
          }
          options={[
            { letter: "a", text: "O IDH do Brasil de 0,754 representa adequadamente as condições de vida de todos os brasileiros, pois é calculado a partir de dados nacionais abrangentes." },
            { letter: "b", text: "Como o IDH nacional é 'alto', todos os estados brasileiros têm IDH equivalente ou superior a 0,700, o que demonstra desenvolvimento relativamente homogêneo." },
            { letter: "c", text: "O IDH nacional de 0,754 mascara desigualdades regionais intensas: enquanto alguns estados têm condições de vida equivalentes a países desenvolvidos, outros ficam próximos a países em desenvolvimento, evidenciando a heterogeneidade do espaço brasileiro.", correct: true },
            { letter: "d", text: "A diferença de IDH entre o DF e o Maranhão se deve exclusivamente ao clima — regiões de clima tropical têm menor IDH que regiões de clima temperado." },
            { letter: "e", text: "O IDH é um indicador inadequado para medir o desenvolvimento, pois não leva em conta as desigualdades regionais dentro de um país." },
          ]}
          resolution={
            <p>
              A alternativa C é a correta. Este é um exemplo clássico do princípio de "escala e
              amostragem": dados nacionais representam médias que podem obscurecer disparidades
              regionais enormes. O IDH nacional de 0,754 resulta de uma média que combina estados
              com IDH muito alto (DF, São Paulo) e estados com IDH médio ou baixo (Maranhão,
              Pará). Essa heterogeneidade espacial é uma característica fundamental do Brasil e
              é frequentemente cobrada no ENEM sob o tema de desigualdades regionais. A
              alternativa D estabelece uma relação determinista equivocada entre clima e IDH.
              A alternativa E está errada: o IDH é amplamente reconhecido como útil, inclusive
              por calcular índices desagregados por sub-regiões.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              O geógrafo Brian Harley afirmou que "o mapa nunca é um espelho neutro da realidade,
              mas um instrumento ativo de comunicação carregado de valores culturais e interesses
              políticos". Com base nessa perspectiva e nos conhecimentos sobre projeções
              cartográficas, mapas temáticos e interpretação de dados, analise a seguinte
              situação: durante a Guerra Fria, os EUA e a URSS produziam mapas-múndi com
              diferentes projeções e diferentes centros geográficos (os mapas americanos centrados
              no Atlântico; os soviéticos, no Pacífico). A principal implicação geopolítica dessa
              diferença era:
            </p>
          }
          options={[
            { letter: "a", text: "Os mapas centrados no Atlântico eram mais precisos matematicamente, por isso os EUA os adotavam para demonstrar superioridade tecnológica sobre a URSS." },
            { letter: "b", text: "A escolha do centro do mapa é uma decisão puramente técnica, determinada pelo meridiano central da projeção, sem implicações políticas ou culturais relevantes." },
            { letter: "c", text: "Cada potência colocava a si mesma no centro visual do mapa, posicionando o adversário nas bordas e comunicando implicitamente quem era o 'centro' do mundo — uma escolha cartográfica com claras implicações ideológicas e de poder.", correct: true },
            { letter: "d", text: "As diferenças entre os mapas americano e soviético se limitavam à escala utilizada, refletindo a maior extensão territorial da URSS em relação aos EUA." },
            { letter: "e", text: "A projeção cartográfica utilizada em cada caso era idêntica (Mercator), sendo a única diferença a língua em que os topônimos eram escritos." },
          ]}
          resolution={
            <p>
              A alternativa C é a correta e expressa com precisão a dimensão geopolítica da
              cartografia. Ao colocar seu próprio território no centro visual do mapa, cada
              potência reforçava uma visão de mundo em que ela era o "centro" geográfico e,
              simbolicamente, o centro da civilização e do poder. O adversário, nas bordas do
              mapa, aparecia como periférico. Isso dialoga diretamente com a crítica de Harley:
              o mapa não é neutro — é um instrumento de comunicação que projeta visões de mundo
              e relações de poder. Hoje, o padrão dos mapas ocidentais com a Europa e os EUA no
              centro reflete igualmente essa herança histórica de centralidade geopolítica. Mapas
              centrados no Oceano Pacífico ou centrados na Austrália oferecem perspectivas
              radicalmente diferentes e igualmente legítimas do globo terrestre.
            </p>
          }
        />
      </section>
    </article>
  );
}
