"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap02Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 02</span>
          <h1>Fundamentos da Geografia: espaço, território, lugar, paisagem e região</h1>
          <p>
            A Geografia é a ciência que estuda a relação entre a sociedade e a natureza, analisando
            como os grupos humanos transformam e organizam o espaço ao longo do tempo. Para
            compreender essa relação, os geógrafos utilizam conceitos-chave que funcionam como
            ferramentas de análise: espaço geográfico, território, lugar, paisagem e região. Cada
            um desses conceitos revela uma dimensão diferente da realidade, permitindo interpretar
            fenômenos que vão desde a formação de cidades até os conflitos por recursos naturais.
            Dominar esses fundamentos é essencial para o ENEM, pois eles embasam praticamente
            todas as questões de Geografia.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceito central</span>
        <h2>1. Espaço Geográfico</h2>
        <p>
          O <strong>espaço geográfico</strong> é o conceito mais amplo da Geografia. Refere-se ao
          conjunto formado pela sociedade e pela natureza em permanente interação. O geógrafo
          brasileiro Milton Santos definiu o espaço como um "conjunto indissociável de sistemas de
          objetos e sistemas de ações". Isso significa que o espaço não é apenas a superfície
          terrestre em si, mas também as relações sociais, econômicas, políticas e culturais que
          se materializam nessa superfície.
        </p>
        <p>
          Os <strong>sistemas de objetos</strong> são tudo aquilo que existe no espaço: montanhas,
          rios, cidades, estradas, fábricas, lavouras. Já os <strong>sistemas de ações</strong>
          são as atividades humanas que criam, transformam e dão sentido a esses objetos: o
          comércio, a produção industrial, o deslocamento de pessoas, as políticas públicas. Nenhum
          desses sistemas existe de forma isolada — eles se influenciam mutuamente o tempo todo.
        </p>
        <p>
          Com a globalização, o espaço geográfico ganhou uma nova dimensão: o <strong>espaço de
          fluxos</strong>, que inclui a movimentação de capitais, informações e pessoas em escala
          planetária. Hoje, decisões tomadas em centros financeiros como Nova York ou Londres
          afetam imediatamente trabalhadores e consumidores em países distantes, mostrando como o
          espaço é cada vez mais interconectado.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais componentes do espaço geográfico segundo Milton Santos</caption>
            <thead>
              <tr>
                <th>Componente</th>
                <th>Definição</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sistemas de objetos</td>
                <td>Elementos materiais presentes no espaço</td>
                <td>Rodovias, cidades, rios, fábricas, plantações</td>
              </tr>
              <tr>
                <td>Sistemas de ações</td>
                <td>Atividades humanas que organizam o espaço</td>
                <td>Comércio, migração, legislação, planejamento urbano</td>
              </tr>
              <tr>
                <td>Rugosidades</td>
                <td>Heranças do passado que persistem no espaço atual</td>
                <td>Centros históricos, antigas ferrovias, latifúndios coloniais</td>
              </tr>
              <tr>
                <td>Fixos</td>
                <td>Objetos estáveis que permitem ações</td>
                <td>Portos, aeroportos, hospitais, escolas</td>
              </tr>
              <tr>
                <td>Fluxos</td>
                <td>Movimentos que passam pelos fixos</td>
                <td>Cargas, pessoas, informações, capitais financeiros</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Poder e controle</span>
        <h2>2. Território</h2>
        <p>
          O <strong>território</strong> é o espaço definido e delimitado por relações de poder.
          Quando um grupo — um Estado, uma empresa, uma comunidade ou até uma gangue — exerce
          controle sobre uma porção do espaço, esse espaço se torna território. A noção de
          território está, portanto, intrinsecamente ligada ao poder.
        </p>
        <p>
          Na acepção mais clássica, território refere-se ao espaço controlado pelos Estados
          nacionais, com fronteiras reconhecidas e soberania exercida. Mas o conceito vai além do
          Estado: tribos indígenas possuem seus territórios tradicionais; empresas multinacionais
          territorializam espaços econômicos; movimentos sociais criam territórios simbólicos de
          resistência. Rogério Haesbaert, geógrafo brasileiro, propõe o conceito de
          <strong> multiterritorialidade</strong> para descrever como, na contemporaneidade, os
          indivíduos pertencem simultaneamente a múltiplos territórios.
        </p>
        <p>
          A <strong>desterritorialização</strong> ocorre quando grupos perdem o controle sobre seu
          espaço de vida — como acontece com populações deslocadas por conflitos, represas ou
          especulação imobiliária. Já a <strong>reterritorialização</strong> é o processo de
          reconstrução de vínculos territoriais em novos espaços, como ocorre com comunidades de
          imigrantes que recriam sua cultura em outro país.
        </p>
      </section>

      {/* SVG: Diagrama de território e poder */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg">
          {/* Fundo */}
          <rect width="620" height="280" fill="#f0f4f8" rx="12" />
          {/* Título */}
          <text x="310" y="30" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a5f">
            Relações entre Espaço, Território e Poder
          </text>
          {/* Espaço geográfico - círculo grande */}
          <ellipse cx="310" cy="155" rx="270" ry="110" fill="#cce5ff" stroke="#3a86c8" strokeWidth="2" />
          <text x="310" y="68" textAnchor="middle" fontSize="12" fill="#1a5276" fontWeight="bold">
            Espaço Geográfico
          </text>
          {/* Território - círculo médio */}
          <ellipse cx="310" cy="165" rx="175" ry="70" fill="#a8d5a2" stroke="#2e7d32" strokeWidth="2" />
          <text x="310" y="112" textAnchor="middle" fontSize="12" fill="#1b5e20" fontWeight="bold">
            Território (relações de poder)
          </text>
          {/* Lugar - círculo pequeno */}
          <ellipse cx="310" cy="172" rx="85" ry="38" fill="#ffe0b2" stroke="#e65100" strokeWidth="2" />
          <text x="310" y="166" textAnchor="middle" fontSize="11" fill="#bf360c" fontWeight="bold">
            Lugar
          </text>
          <text x="310" y="183" textAnchor="middle" fontSize="10" fill="#bf360c">
            (identidade e vivência)
          </text>
          {/* Setas indicando hierarquia conceitual */}
          <line x1="100" y1="155" x2="135" y2="155" stroke="#555" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <text x="60" y="151" fontSize="10" fill="#333">Natureza</text>
          <text x="60" y="163" fontSize="10" fill="#333">+ Sociedade</text>
          {/* Legenda poder */}
          <rect x="460" y="195" width="130" height="55" rx="6" fill="white" stroke="#888" strokeWidth="1" />
          <text x="525" y="212" textAnchor="middle" fontSize="10" fill="#333" fontWeight="bold">Formas de poder</text>
          <text x="470" y="228" fontSize="9" fill="#555">• Estado nacional</text>
          <text x="470" y="241" fontSize="9" fill="#555">• Empresas / corporações</text>
          <text x="470" y="254" fontSize="9" fill="#555">• Comunidades locais</text>
          {/* Defs */}
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#555" />
            </marker>
          </defs>
        </svg>
        <figcaption>
          Diagrama hierárquico dos conceitos: o espaço geográfico é o mais abrangente, o território
          se define pelo poder e o lugar se caracteriza pela identidade e experiência vivida.
        </figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Identidade e pertencimento</span>
        <h2>3. Lugar</h2>
        <p>
          O conceito de <strong>lugar</strong> remete à dimensão vivida, afetiva e identitária do
          espaço. Enquanto o território é definido pelo poder, o lugar é definido pelo significado
          que os grupos humanos atribuem a determinados espaços. É no lugar que as pessoas
          desenvolvem sentimentos de pertencimento, apego e identidade.
        </p>
        <p>
          Para o geógrafo Yi-Fu Tuan, criador do conceito de <strong>topofilia</strong>, o lugar
          é uma porção do espaço dotada de valores subjetivos: afeto, memória, segurança. Uma
          cidade natal, uma praça frequentada na infância ou até um quarto de criança são exemplos
          de lugares carregados de significado pessoal. Já a <strong>topofobia</strong> seria o
          sentimento oposto — de repulsa ou medo associado a certos espaços.
        </p>
        <p>
          Na era da globalização, surge o fenômeno dos <strong>não-lugares</strong> (Marc Augé):
          espaços de trânsito e anonimato, como aeroportos, shopping centers e autoestradas, onde
          as pessoas passam sem estabelecer vínculos afetivos ou identitários. Esses espaços são
          funcionais, mas carecem da profundidade simbólica que caracteriza um lugar.
        </p>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O que os olhos veem</span>
        <h2>4. Paisagem</h2>
        <p>
          A <strong>paisagem</strong> é a porção do espaço que pode ser apreendida pelos sentidos
          humanos em um dado momento. É o aspecto visível do espaço: tudo aquilo que se pode ver,
          ouvir e sentir ao observar um ambiente. A paisagem é resultado da ação conjunta da
          natureza e da sociedade ao longo do tempo.
        </p>
        <p>
          Existem dois tipos básicos de paisagem. A <strong>paisagem natural</strong> é aquela
          formada exclusivamente pelos elementos da natureza, sem intervenção humana significativa
          — como uma floresta amazônica intocada ou um deserto. Já a <strong>paisagem cultural
          </strong> (ou humanizada) resulta da transformação da natureza pela ação do ser humano:
          cidades, campos cultivados, represas e estradas são exemplos.
        </p>
        <p>
          Um conceito importante é o de <strong>herança cultural</strong> ou "rugosidade" (Milton
          Santos): paisagens carregam marcas de períodos históricos passados. Um centro histórico
          colonial, por exemplo, preserva na arquitetura e no traçado urbano a herança do período
          colonial, mesmo que a sociedade ao redor tenha se transformado completamente. A paisagem
          é, portanto, uma espécie de memória espacial.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Tipos de paisagem e suas características</caption>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Agente formador</th>
                <th>Exemplos</th>
                <th>Dinâmica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Natural</td>
                <td>Forças da natureza</td>
                <td>Floresta virgem, tundra, recife de coral</td>
                <td>Lenta (escala geológica)</td>
              </tr>
              <tr>
                <td>Cultural / humanizada</td>
                <td>Ação humana</td>
                <td>Cidades, lavouras, barragens, rodovias</td>
                <td>Rápida (escala histórica)</td>
              </tr>
              <tr>
                <td>Mista</td>
                <td>Natureza + sociedade</td>
                <td>Parques nacionais, zonas costeiras urbanizadas</td>
                <td>Variável, frequentemente acelerada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Organização do espaço</span>
        <h2>5. Região</h2>
        <p>
          A <strong>região</strong> é uma porção do espaço definida por características comuns
          que a diferenciam de outras áreas. O conceito de região é um dos mais debatidos na
          Geografia, pois as características usadas para definir uma região podem ser físicas
          (clima, vegetação, relevo), econômicas (nível de desenvolvimento, atividade produtiva),
          culturais (língua, religião, hábitos) ou político-administrativas (estados, municípios).
        </p>
        <p>
          Historicamente, a Geografia Clássica (séc. XIX–XX) trabalhava com regiões como unidades
          naturais homogêneas. A partir do século XX, o conceito evoluiu. A <strong>região
          funcional</strong> (ou nodal) é definida pela área de influência de um centro urbano —
          como a região metropolitana de São Paulo. A <strong>região formal</strong> é delimitada
          por critérios homogêneos (como o Nordeste brasileiro, unificado pelo semiárido e por
          características socioculturais).
        </p>
        <p>
          No Brasil, o IBGE divide o país em cinco <strong>grandes regiões</strong>: Norte,
          Nordeste, Centro-Oeste, Sudeste e Sul. Essa divisão é de base político-administrativa e
          não necessariamente reflete homogeneidade socioeconômica ou cultural absoluta — o
          Nordeste, por exemplo, abrange tanto o litoral úmido quanto o sertão semiárido. Por
          isso, geógrafos frequentemente propõem subdivisões ou regionalizações alternativas com
          base em critérios específicos de análise.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparação entre os grandes conceitos geográficos</caption>
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Foco principal</th>
                <th>Autores de referência</th>
                <th>Exemplo brasileiro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Espaço geográfico</td>
                <td>Relação sociedade–natureza</td>
                <td>Milton Santos</td>
                <td>Amazônia transformada pelo desmatamento</td>
              </tr>
              <tr>
                <td>Território</td>
                <td>Poder e controle</td>
                <td>Haesbaert, Raffestin</td>
                <td>Terras indígenas demarcadas</td>
              </tr>
              <tr>
                <td>Lugar</td>
                <td>Identidade e afeto</td>
                <td>Yi-Fu Tuan, Relph</td>
                <td>Bairro histórico do Pelourinho (Salvador)</td>
              </tr>
              <tr>
                <td>Paisagem</td>
                <td>Aspecto visual/sensorial</td>
                <td>Carl Sauer, Milton Santos</td>
                <td>Paisagem do cerrado com fazendas de soja</td>
              </tr>
              <tr>
                <td>Região</td>
                <td>Diferenciação espacial</td>
                <td>La Blache, Lacoste</td>
                <td>Região Nordeste (semiárido + litoral)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Escalas de análise</span>
        <h2>6. Escala Geográfica</h2>
        <p>
          Na análise geográfica, a <strong>escala</strong> não se refere apenas à proporção nos
          mapas, mas também ao nível de análise do fenômeno estudado. Um mesmo problema — como o
          desmatamento — pode ser analisado na escala local (um município), regional (a Amazônia
          legal), nacional (política ambiental brasileira) ou global (acordos internacionais de
          clima).
        </p>
        <p>
          A mudança de escala transforma a percepção do fenômeno. Na escala local, o desmatamento
          aparece como prática de agricultores individuais; na escala nacional, como questão de
          política agrária; na escala global, como contribuição ao aquecimento climático. Esse
          exercício de <strong>multiescalaridade</strong> é fundamental para o raciocínio
          geográfico e recorrente nas questões do ENEM.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Globalização e espaço</span>
        <h2>7. Globalização e Reestruturação do Espaço</h2>
        <p>
          A globalização intensificou as conexões entre diferentes porções do espaço geográfico,
          mas não eliminou as desigualdades. Ao contrário, o geógrafo David Harvey argumenta que
          a globalização produz uma <strong>"destruição criativa"</strong> do espaço: enquanto
          alguns territórios se integram às redes globais de produção e consumo, outros são
          marginalizados, gerando um espaço desigual e combinado.
        </p>
        <p>
          Milton Santos cunhou o conceito de <strong>"meio técnico-científico-informacional"</strong>
          para descrever o espaço contemporâneo, caracterizado pela fusão entre ciência, tecnologia
          e informação como base da produção. Esse meio não se distribui igualmente: concentra-se
          em metrópoles e regiões dinâmicas, aprofundando disparidades com áreas periféricas.
        </p>
        <p>
          No Brasil, esse processo se manifesta na divisão territorial do trabalho: o Sudeste
          concentra indústrias e serviços avançados; o Centro-Oeste domina o agronegócio de
          exportação; o Norte e partes do Nordeste ainda dependem de atividades extrativistas ou
          de subsistência. Essa hierarquia espacial é dinâmica — cidades do interior, como
          Uberlândia (MG) e Campinas (SP), cresceram como polos regionais ao longo das últimas
          décadas.
        </p>
      </section>

      {/* SVG: Mapa esquemático das regiões brasileiras */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 620 380" xmlns="http://www.w3.org/2000/svg">
          <rect width="620" height="380" fill="#e8f4f8" rx="12" />
          <text x="310" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e3a5f">
            Grandes Regiões do Brasil e características principais
          </text>
          {/* Região Norte */}
          <rect x="80" y="50" width="140" height="70" rx="8" fill="#4caf50" opacity="0.85" />
          <text x="150" y="82" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">Norte</text>
          <text x="150" y="97" textAnchor="middle" fontSize="10" fill="white">Amazônia • Extrativismo</text>
          <text x="150" y="111" textAnchor="middle" fontSize="10" fill="white">Menor densidade demográfica</text>
          {/* Região Nordeste */}
          <rect x="280" y="50" width="140" height="70" rx="8" fill="#ff9800" opacity="0.85" />
          <text x="350" y="82" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">Nordeste</text>
          <text x="350" y="97" textAnchor="middle" fontSize="10" fill="white">Semiárido • Litoral úmido</text>
          <text x="350" y="111" textAnchor="middle" fontSize="10" fill="white">Maior IDH regional baixo</text>
          {/* Região Centro-Oeste */}
          <rect x="80" y="155" width="140" height="70" rx="8" fill="#8bc34a" opacity="0.85" />
          <text x="150" y="187" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">Centro-Oeste</text>
          <text x="150" y="202" textAnchor="middle" fontSize="10" fill="white">Cerrado • Agronegócio</text>
          <text x="150" y="216" textAnchor="middle" fontSize="10" fill="white">Brasília (capital federal)</text>
          {/* Região Sudeste */}
          <rect x="280" y="155" width="140" height="70" rx="8" fill="#f44336" opacity="0.85" />
          <text x="350" y="187" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">Sudeste</text>
          <text x="350" y="202" textAnchor="middle" fontSize="10" fill="white">Maior PIB nacional</text>
          <text x="350" y="216" textAnchor="middle" fontSize="10" fill="white">SP, RJ, MG, ES</text>
          {/* Região Sul */}
          <rect x="180" y="260" width="140" height="70" rx="8" fill="#2196f3" opacity="0.85" />
          <text x="250" y="292" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">Sul</text>
          <text x="250" y="307" textAnchor="middle" fontSize="10" fill="white">Clima subtropical • Indústria</text>
          <text x="250" y="321" textAnchor="middle" fontSize="10" fill="white">Alto IDH • Colonização europeia</text>
          {/* Legenda */}
          <rect x="440" y="140" width="160" height="160" rx="8" fill="white" stroke="#ccc" strokeWidth="1" />
          <text x="520" y="160" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">Legenda</text>
          <rect x="455" y="170" width="16" height="12" fill="#4caf50" rx="2" />
          <text x="478" y="181" fontSize="10" fill="#333">Norte — 45,3% do território</text>
          <rect x="455" y="190" width="16" height="12" fill="#ff9800" rx="2" />
          <text x="478" y="201" fontSize="10" fill="#333">Nordeste — 18,3%</text>
          <rect x="455" y="210" width="16" height="12" fill="#8bc34a" rx="2" />
          <text x="478" y="221" fontSize="10" fill="#333">Centro-Oeste — 18,9%</text>
          <rect x="455" y="230" width="16" height="12" fill="#f44336" rx="2" />
          <text x="478" y="241" fontSize="10" fill="#333">Sudeste — 10,9%</text>
          <rect x="455" y="250" width="16" height="12" fill="#2196f3" rx="2" />
          <text x="478" y="261" fontSize="10" fill="#333">Sul — 6,8%</text>
          <text x="520" y="290" textAnchor="middle" fontSize="9" fill="#666">
            Fonte: IBGE, 2022
          </text>
        </svg>
        <figcaption>
          Esquema das cinco grandes regiões brasileiras com suas características físicas,
          econômicas e sociais principais. A regionalização do IBGE é político-administrativa e
          serve de referência oficial para dados censitários e políticas públicas.
        </figcaption>
      </figure>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Abordagens geográficas</span>
        <h2>8. Correntes do Pensamento Geográfico</h2>
        <p>
          A Geografia passou por diversas transformações teóricas ao longo de sua história como
          ciência. Compreender essas correntes ajuda a entender por que diferentes geógrafos
          conceituam os mesmos fenômenos de formas distintas.
        </p>
        <p>
          A <strong>Geografia Tradicional</strong> (séc. XIX – meados do séc. XX) era descritiva e
          enciclopédica, buscando descrever as características naturais e humanas de cada região do
          planeta. Representantes como Friedrich Ratzel (determinismo geográfico) e Paul Vidal de
          La Blache (possibilismo geográfico) marcaram essa fase. Para Ratzel, o meio natural
          determinava o comportamento das sociedades; para La Blache, o ambiente oferecia
          possibilidades que as sociedades podiam ou não aproveitar segundo sua cultura.
        </p>
        <p>
          A <strong>Geografia Crítica</strong> emergiu nas décadas de 1970–80, influenciada pelo
          marxismo. Propõe que o espaço geográfico é produzido pelas relações de poder e pelo
          modo de produção capitalista. Milton Santos, Yves Lacoste e David Harvey são os
          principais representantes. Para essa corrente, o espaço não é neutro — ele reproduz e
          intensifica desigualdades sociais.
        </p>
        <p>
          A <strong>Geografia Humanística</strong>, associada a Yi-Fu Tuan, privilegia a dimensão
          subjetiva e experiencial do espaço, valorizando o lugar e os sentimentos de pertencimento.
          Mais recentemente, a <strong>Geografia Cultural</strong> estuda como os grupos humanos
          produzem significados culturais a partir do espaço.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais correntes do pensamento geográfico</caption>
            <thead>
              <tr>
                <th>Corrente</th>
                <th>Período</th>
                <th>Foco</th>
                <th>Representantes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Determinismo geográfico</td>
                <td>Séc. XIX – início XX</td>
                <td>Natureza determina a sociedade</td>
                <td>Friedrich Ratzel</td>
              </tr>
              <tr>
                <td>Possibilismo</td>
                <td>Início do séc. XX</td>
                <td>Natureza como possibilidade</td>
                <td>Vidal de La Blache</td>
              </tr>
              <tr>
                <td>Quantitativa / Teorética</td>
                <td>Anos 1950–60</td>
                <td>Modelos matemáticos e estatísticos</td>
                <td>William Bunge</td>
              </tr>
              <tr>
                <td>Crítica / Radical</td>
                <td>Anos 1970–hoje</td>
                <td>Espaço como produto social e desigual</td>
                <td>Milton Santos, Harvey, Lacoste</td>
              </tr>
              <tr>
                <td>Humanística</td>
                <td>Anos 1970–hoje</td>
                <td>Lugar, identidade, topofilia</td>
                <td>Yi-Fu Tuan, Relph</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Aplicações no ENEM</span>
        <h2>9. Como Esses Conceitos Aparecem no ENEM</h2>
        <p>
          O ENEM frequentemente cobra os conceitos de espaço, território, lugar, paisagem e região
          de forma contextualizada, ou seja, a partir de textos, mapas, fotografias ou notícias que
          o candidato deve interpretar. Algumas situações típicas de questões:
        </p>
        <p>
          <strong>Território e conflito:</strong> questões sobre disputas por terras indígenas,
          quilombolas ou de sem-terra envolvem o conceito de território. O candidato deve identificar
          quem exerce o poder sobre determinado espaço e como isso gera conflitos.
        </p>
        <p>
          <strong>Paisagem e tempo:</strong> fotografias comparando o mesmo espaço em períodos
          diferentes pedem que o candidato interprete as transformações na paisagem e associe-as a
          processos históricos (industrialização, urbanização, desmatamento).
        </p>
        <p>
          <strong>Lugar e identidade:</strong> textos sobre gentrificação (valorização imobiliária
          que expulsa moradores originais) ou resistência cultural testam a noção de lugar como
          espaço de pertencimento ameaçado.
        </p>
        <p>
          <strong>Região e desigualdade:</strong> questões sobre concentração de renda, IDH regional
          ou fluxos migratórios inter-regionais frequentemente pedem que o candidato interprete
          dados regionais no contexto das desigualdades espaciais brasileiras.
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
              O geógrafo brasileiro Milton Santos definiu o espaço geográfico como "um conjunto
              indissociável de sistemas de objetos e sistemas de ações". Com base nessa definição,
              identifique a alternativa que apresenta corretamente um exemplo de sistema de objetos
              e um sistema de ações associados ao espaço urbano.
            </p>
          }
          options={[
            { letter: "a", text: "Sistema de objetos: migração campo-cidade; sistema de ações: arranha-céus e avenidas." },
            { letter: "b", text: "Sistema de objetos: redes de transporte público; sistema de ações: especulação imobiliária e zoneamento urbano.", correct: true },
            { letter: "c", text: "Sistema de objetos: desigualdade social; sistema de ações: favelização e pobreza urbana." },
            { letter: "d", text: "Sistema de objetos: fluxo de capitais; sistema de ações: bairros residenciais e indústrias." },
            { letter: "e", text: "Sistema de objetos: globalização; sistema de ações: rodovias e ferrovias." },
          ]}
          resolution={
            <p>
              A alternativa B está correta. Segundo Milton Santos, sistemas de objetos são os
              elementos materiais presentes no espaço (redes de transporte público, estradas,
              edifícios), enquanto sistemas de ações são as atividades humanas que organizam e
              transformam esses objetos (especulação imobiliária, zoneamento, planejamento urbano).
              As demais alternativas invertem ou confundem esses elementos: migração, desigualdade
              e globalização são processos/ações, não objetos; e arranha-céus, favelização e
              rodovias são objetos, não ações.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              O conceito de <em>topofilia</em>, desenvolvido pelo geógrafo Yi-Fu Tuan, é
              fundamental para compreender a relação entre as pessoas e o espaço. Assinale a
              alternativa que melhor define esse conceito.
            </p>
          }
          options={[
            { letter: "a", text: "O controle político e econômico exercido por um Estado sobre uma porção do espaço geográfico." },
            { letter: "b", text: "A divisão do espaço em regiões homogêneas a partir de critérios físicos e culturais." },
            { letter: "c", text: "O vínculo afetivo e emocional que os seres humanos desenvolvem com determinados espaços, transformando-os em lugares significativos.", correct: true },
            { letter: "d", text: "A transformação da paisagem natural em paisagem cultural pela ação contínua do ser humano." },
            { letter: "e", text: "O processo de fragmentação territorial provocado pela globalização e pela mobilidade das pessoas." },
          ]}
          resolution={
            <p>
              A resposta correta é C. Topofilia, segundo Yi-Fu Tuan, é o elo afetivo entre as
              pessoas e o espaço — a sensação de pertencimento, amor e apego que transforma uma
              porção do espaço em lugar. As demais alternativas descrevem outros conceitos: A
              refere-se a território; B, à região; D, à paisagem cultural; E, à
              desterritorialização.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              Nos últimos anos, processos de gentrificação em bairros históricos de cidades
              brasileiras como Rio de Janeiro e São Paulo têm provocado a saída de moradores
              tradicionais de baixa renda para outras áreas urbanas, em função da valorização
              imobiliária. Com base nos conceitos geográficos fundamentais, esse fenômeno pode ser
              interpretado como:
            </p>
          }
          options={[
            { letter: "a", text: "Expansão do meio técnico-científico-informacional para áreas periféricas, promovendo inclusão social." },
            { letter: "b", text: "Processo de regionalização que redistribui a população entre as grandes regiões do Brasil." },
            { letter: "c", text: "Desterritorialização e perda do lugar por parte das comunidades originárias, associadas à disputa territorial com o capital imobiliário.", correct: true },
            { letter: "d", text: "Consolidação de não-lugares em substituição às paisagens naturais existentes nesses bairros." },
            { letter: "e", text: "Possibilismo geográfico, em que o meio natural limita as possibilidades de permanência das populações." },
          ]}
          resolution={
            <p>
              A alternativa C é a correta. A gentrificação envolve desterritorialização — as
              comunidades de baixa renda perdem o controle sobre seu espaço de vida (território) e
              os vínculos afetivos e identitários com seus bairros (lugar), sendo deslocadas pelo
              poder do capital imobiliário. A alternativa A está incorreta porque a gentrificação
              tende a excluir, não incluir populações vulneráveis. B confunde o processo com
              regionalização. D aplica incorretamente o conceito de não-lugar. E usa determinismo
              de forma equivocada, pois o processo é socioeconomico, não natural.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              A análise de uma mesma questão ambiental — como o desmatamento na Amazônia — pode
              levar a interpretações diferentes dependendo da escala de análise adotada. Sobre essa
              questão de multiescalaridade, é correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "A escala local é a mais adequada para compreender o desmatamento, pois elimina a interferência de fatores externos." },
            { letter: "b", text: "A mudança de escala apenas altera o tamanho do mapa utilizado, sem modificar a interpretação do fenômeno." },
            { letter: "c", text: "Na escala global, o desmatamento amazônico é compreendido principalmente como resultado de conflitos entre proprietários rurais locais." },
            { letter: "d", text: "A adoção de múltiplas escalas de análise permite compreender um fenômeno geográfico em sua complexidade, articulando causas locais, nacionais e globais.", correct: true },
            { letter: "e", text: "A escala regional é a única capaz de relacionar o desmatamento com acordos internacionais de proteção ambiental." },
          ]}
          resolution={
            <p>
              A alternativa D está correta. A multiescalaridade é um princípio fundamental do
              raciocínio geográfico: cada escala revela dimensões distintas do mesmo fenômeno. Na
              escala local, o desmatamento aparece como ação de agricultores e madeireiros; na
              escala nacional, como questão de política agrária e fiscalização ambiental; na escala
              global, como contribuição às mudanças climáticas e pressão de mercados internacionais
              de commodities. Nenhuma escala sozinha é suficiente para compreender a totalidade do
              problema — por isso a análise multiescalar é imprescindível.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              "O espaço é hoje um sistema de sistemas de objetos e um sistema de sistemas de ações,
              e não consideramos separadamente esses dois sistemas. Objetos e ações são
              inseparáveis." (Milton Santos, <em>A Natureza do Espaço</em>, 1996.)
            </p>
          }
          options={[
            { letter: "a", text: "O espaço geográfico é determinado exclusivamente pelas forças naturais, sendo a ação humana um fator secundário na sua configuração." },
            { letter: "b", text: "A análise geográfica deve priorizar os objetos materiais do espaço, pois as ações humanas são efêmeras e não deixam marcas permanentes." },
            { letter: "c", text: "O espaço geográfico resulta da articulação dialética entre os elementos materiais (objetos) e as práticas sociais (ações), sendo impossível compreendê-lo ao dissociar esses dois sistemas.", correct: true },
            { letter: "d", text: "Os sistemas de ações têm primazia sobre os sistemas de objetos, pois as transformações sociais precedem sempre as transformações materiais do espaço." },
            { letter: "e", text: "O conceito de espaço de Milton Santos aplica-se apenas aos espaços urbanos, não sendo adequado para analisar espaços rurais ou naturais." },
          ]}
          resolution={
            <p>
              A alternativa C é a correta e capta com precisão o argumento central de Milton
              Santos. O geógrafo baiano propõe uma ontologia dialética: objetos (elementos
              materiais do espaço) e ações (práticas sociais) se constituem mutuamente. As ações
              criam e transformam os objetos; os objetos condicionam e limitam as ações possíveis.
              Dissociar esses sistemas seria uma simplificação que impediria compreender como o
              espaço é continuamente produzido e reproduzido pelas sociedades. As demais
              alternativas ou reduzem o espaço a determinismos (A), ou criam hierarquias não
              presentes na teoria (B, D), ou restringem indevidamente seu campo de aplicação (E).
            </p>
          }
        />
      </section>
    </article>
  );
}
