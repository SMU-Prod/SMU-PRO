"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap24Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 24</span>
          <h1>Problemas urbanos: mobilidade, habitação, violência e segregação socioespacial</h1>
          <p>
            As grandes cidades brasileiras concentram riqueza, oportunidades e diversidade
            cultural, mas também acumulam graves problemas sociais e espaciais. Mobilidade
            urbana deficiente, déficit habitacional, violência e segregação socioespacial
            são questões estruturais que resultam de décadas de urbanização acelerada,
            planejamento insuficiente e profundas desigualdades econômicas. Compreender
            esses problemas é essencial para entender a dinâmica das cidades brasileiras
            e as disputas políticas em torno do direito à cidade.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mobilidade urbana</span>
        <h2>1. A crise da mobilidade urbana</h2>
        <p>
          A mobilidade urbana refere-se à capacidade de deslocamento de pessoas e
          mercadorias nas cidades. No Brasil, esse é um dos problemas mais sentidos
          pela população: congestionamentos diários, transporte público precário,
          acidentes de trânsito frequentes e longas distâncias entre moradia e trabalho
          comprometem a qualidade de vida de milhões de brasileiros.
        </p>
        <p>
          São Paulo é símbolo dessa crise: em dias de pico, a cidade pode registrar
          mais de 300 km de filas. A solução historicamente adotada — construção de
          mais vias para carros — retroalimentou o problema, pois estimulou a compra
          de automóveis (induzida também pela indústria automobilística e pelos
          subsídios fiscais) sem resolver o congestionamento estrutural.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Meios de transporte urbano e seus desafios no Brasil</caption>
            <thead>
              <tr>
                <th>Meio de transporte</th>
                <th>Participação modal</th>
                <th>Principal problema</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Automóvel particular</td><td>~45%</td><td>Congestionamento e poluição</td></tr>
              <tr><td>Ônibus urbano</td><td>~30%</td><td>Superlotação e irregularidade</td></tr>
              <tr><td>Motocicleta</td><td>~10%</td><td>Alta taxa de acidentes</td></tr>
              <tr><td>Metrô / trem</td><td>~8%</td><td>Cobertura insuficiente</td></tr>
              <tr><td>A pé / bicicleta</td><td>~7%</td><td>Falta de infraestrutura segura</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SVG 1: Mobilidade ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="280" fill="#fefce8" rx="8"/>
          <text x="300" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
            Ciclo Vicioso da Mobilidade Urbana Brasileira
          </text>
          {/* Caixas do ciclo */}
          <rect x="200" y="45" width="200" height="50" fill="#fbbf24" rx="6"/>
          <text x="300" y="66" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#78350f">Urbanização acelerada</text>
          <text x="300" y="82" textAnchor="middle" fontSize="10" fill="#78350f">e periferização</text>
          {/* Seta para baixo-dir */}
          <line x1="390" y1="90" x2="470" y2="130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr2)"/>
          <defs>
            <marker id="arr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#94a3b8"/>
            </marker>
          </defs>
          {/* Caixa direita */}
          <rect x="415" y="130" width="165" height="50" fill="#f87171" rx="6"/>
          <text x="497" y="151" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7f1d1d">Aumento do uso</text>
          <text x="497" y="167" textAnchor="middle" fontSize="10" fill="#7f1d1d">de automóveis</text>
          {/* Seta para baixo */}
          <line x1="497" y1="180" x2="497" y2="220" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr2)"/>
          {/* Caixa inferior direita */}
          <rect x="390" y="220" width="190" height="45" fill="#c084fc" rx="6"/>
          <text x="485" y="241" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#4a044e">Congestionamento</text>
          <text x="485" y="257" textAnchor="middle" fontSize="10" fill="#4a044e">e poluição</text>
          {/* Seta para esquerda */}
          <line x1="390" y1="245" x2="215" y2="245" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr2)"/>
          {/* Caixa inferior esquerda */}
          <rect x="20" y="220" width="190" height="45" fill="#6ee7b7" rx="6"/>
          <text x="115" y="241" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#064e3b">Degradação do</text>
          <text x="115" y="257" textAnchor="middle" fontSize="10" fill="#064e3b">transporte público</text>
          {/* Seta para cima-dir */}
          <line x1="115" y1="220" x2="115" y2="155" stroke="#94a3b8" strokeWidth="2"/>
          <line x1="115" y1="155" x2="200" y2="70" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arr2)"/>
        </svg>
        <figcaption>Ciclo vicioso da mobilidade urbana: a periferização aumenta o uso do carro, que gera congestionamento e piora o transporte coletivo, realimentando a dependência do automóvel.</figcaption>
      </figure>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Políticas de mobilidade</span>
        <h2>2. Soluções e políticas para a mobilidade</h2>
        <p>
          A Lei de Mobilidade Urbana (Lei 12.587/2012) estabeleceu diretrizes para
          a política de mobilidade no Brasil, priorizando o transporte coletivo sobre
          o individual e os não motorizados sobre os motorizados. Na prática, sua
          implementação foi lenta e parcial. Algumas cidades avançaram na construção
          de ciclovias, corredores de BRT (Bus Rapid Transit) e integração tarifária,
          enquanto outras ainda carecem de planos básicos de mobilidade.
        </p>
        <p>
          Exemplos de boas práticas incluem o sistema de metrô de São Paulo (embora
          ainda insuficiente para a demanda), o sistema de BRT do Rio de Janeiro
          (parcialmente bem-sucedido) e a rede de ciclovias de Fortaleza e São Paulo.
          A pandemia de COVID-19 (2020–2021) acelerou o uso de bicicletas e o
          trabalho remoto, trazendo novas perspectivas sobre mobilidade urbana.
        </p>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Habitação</span>
        <h2>3. O déficit habitacional brasileiro</h2>
        <p>
          O déficit habitacional é um dos problemas mais graves das cidades brasileiras.
          Segundo dados da Fundação João Pinheiro (FJP), o Brasil tem um déficit
          habitacional de cerca de 8 milhões de moradias, concentrado principalmente
          nas famílias de baixa renda (que ganham até 3 salários mínimos) e nas
          regiões Sudeste e Nordeste. O déficit não significa apenas falta de casas,
          mas também moradias precárias, coabitação forçada e ônus excessivo com aluguel.
        </p>
        <p>
          O Programa Minha Casa Minha Vida (MCMV), lançado em 2009, foi a principal
          política habitacional das últimas décadas. Construiu mais de 6 milhões de
          unidades, mas foi criticado por implantar conjuntos habitacionais em áreas
          periféricas, sem infraestrutura de transporte, serviços e equipamentos urbanos.
          O programa foi reformulado em 2023 com novas metas e tentativa de priorizar
          localizações mais adequadas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Componentes do déficit habitacional brasileiro</caption>
            <thead>
              <tr>
                <th>Componente</th>
                <th>Descrição</th>
                <th>Parcela do déficit</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Habitação precária</td><td>Domicílios improvisados ou rústicos</td><td>~10%</td></tr>
              <tr><td>Coabitação familiar</td><td>Famílias convivendo involuntariamente</td><td>~35%</td></tr>
              <tr><td>Ônus excessivo de aluguel</td><td>Famílias gastando mais de 30% da renda com aluguel</td><td>~50%</td></tr>
              <tr><td>Adensamento excessivo</td><td>Domicílios com mais de 3 pessoas por cômodo</td><td>~5%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Favelas e regularização</span>
        <h2>4. Favelas e regularização fundiária urbana</h2>
        <p>
          As favelas são assentamentos informais caracterizados por habitações
          precárias, infraestrutura deficiente e insegurança jurídica de posse.
          No Brasil, estima-se que mais de 13 milhões de pessoas vivam em
          assentamentos precários. Embora associadas à pobreza extrema, as favelas
          também apresentam enorme diversidade interna, com economias locais
          dinâmicas, vida cultural intensa e forte coesão comunitária.
        </p>
        <p>
          A regularização fundiária — processo de reconhecimento legal da posse —
          é uma das principais ferramentas para melhorar as condições de vida nas
          favelas. A Lei Reurb (Lei 13.465/2017) estabeleceu regras para a
          regularização fundiária urbana. Programas como o Favela-Bairro (Rio de
          Janeiro) tentaram integrar favelas à cidade formal, provendo infraestrutura
          sem remoção forçada — um modelo reconhecido internacionalmente.
        </p>
      </section>

      {/* ── SVG 2: Segregação ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="600" height="300" fill="#f1f5f9" rx="8"/>
          <text x="300" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
            Modelo de Segregação Socioespacial Urbana
          </text>
          {/* Centro */}
          <circle cx="300" cy="160" r="55" fill="#fbbf24" stroke="#d97706" strokeWidth="2"/>
          <text x="300" y="155" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#78350f">Centro</text>
          <text x="300" y="170" textAnchor="middle" fontSize="10" fill="#78350f">Serviços, comércio</text>
          <text x="300" y="184" textAnchor="middle" fontSize="10" fill="#78350f">infraestrutura</text>
          {/* Zona de alta renda */}
          <path d="M 300 105 A 130 130 0 0 1 430 160 L 370 160 A 70 70 0 0 0 300 105 Z" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5"/>
          <text x="400" y="120" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">Zona nobre</text>
          <text x="400" y="133" textAnchor="middle" fontSize="9" fill="#1e40af">Condomínios, shoppings</text>
          {/* Zona de classe média */}
          <path d="M 300 105 A 130 130 0 0 0 170 160 L 230 160 A 70 70 0 0 1 300 105 Z" fill="#d1fae5" stroke="#10b981" strokeWidth="1.5"/>
          <text x="185" y="120" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#065f46">Classe média</text>
          <text x="185" y="133" textAnchor="middle" fontSize="9" fill="#065f46">Bairros consolidados</text>
          {/* Periferia */}
          <path d="M 430 160 A 130 130 0 0 1 300 290 L 300 250 A 90 90 0 0 0 430 160 Z" fill="#fecaca" stroke="#ef4444" strokeWidth="1.5"/>
          <text x="400" y="235" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7f1d1d">Periferia pobre</text>
          <text x="400" y="248" textAnchor="middle" fontSize="9" fill="#7f1d1d">Favelas, loteamentos</text>
          {/* Periferia 2 */}
          <path d="M 170 160 A 130 130 0 0 0 300 290 L 300 250 A 90 90 0 0 1 170 160 Z" fill="#fecaca" stroke="#ef4444" strokeWidth="1.5"/>
          <text x="175" y="248" textAnchor="middle" fontSize="9" fill="#7f1d1d">irregulares</text>
        </svg>
        <figcaption>Modelo esquemático de segregação socioespacial: o centro concentra serviços e infraestrutura; as zonas nobres ficam próximas; a periferia pobre ocupa as bordas mais distantes e precárias.</figcaption>
      </figure>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Violência urbana</span>
        <h2>5. Violência urbana no Brasil</h2>
        <p>
          O Brasil é um dos países com maiores taxas de homicídio do mundo. Segundo
          o Atlas da Violência, em anos recentes o país registrou entre 40 mil e
          50 mil homicídios anuais. A violência urbana é fenômeno complexo e
          multifatorial, associado à desigualdade social, ao tráfico de drogas, à
          crise do sistema prisional, às falhas das instituições de segurança pública
          e à exclusão socioeconômica.
        </p>
        <p>
          A violência não está distribuída uniformemente: ela concentra-se nas
          periferias das grandes e médias cidades, afetando desproporcionalmente
          jovens negros e pobres. As capitais do Norte e do Nordeste frequentemente
          lideram os rankings de homicídios, reflexo de disputas territoriais do
          tráfico de drogas e da fragilidade das instituições locais.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Perfil das vítimas de homicídio no Brasil (dados consolidados)</caption>
            <thead>
              <tr>
                <th>Perfil</th>
                <th>Participação nas vítimas</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Jovens (15–29 anos)</td><td>~50%</td><td>Principal faixa etária atingida</td></tr>
              <tr><td>Negros (pretos + pardos)</td><td>~77%</td><td>Vítimas desproporcionais</td></tr>
              <tr><td>Homens</td><td>~91%</td><td>Recorte de gênero evidente</td></tr>
              <tr><td>Moradores de periferias</td><td>Maioria</td><td>Concentração em áreas vulneráveis</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Causas estruturais</span>
        <h2>6. Causas estruturais da violência urbana</h2>
        <p>
          A violência urbana tem raízes estruturais que vão além da questão policial.
          A extrema desigualdade de renda e riqueza, o desemprego estrutural (especialmente
          juvenil), a precariedade do sistema de justiça e a ineficiência do sistema
          prisional — que não ressocializa e funciona como "escola do crime" — são
          fatores determinantes. O índice de Gini do Brasil, consistentemente acima
          de 0,50, posiciona o país entre os mais desiguais do mundo.
        </p>
        <p>
          O tráfico de drogas preencheu, em muitas periferias, o vácuo deixado pelo
          Estado ausente, oferecendo renda a jovens sem perspectivas no mercado
          formal. As disputas territoriais entre facções criminosas produzem ciclos
          de violência que afetam toda a comunidade. O enfrentamento efetivo exige
          políticas integradas: educação, emprego, assistência social, reform do
          sistema prisional e presença qualificada do Estado nas periferias.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Segregação socioespacial</span>
        <h2>7. Segregação socioespacial: conceito e dinâmicas</h2>
        <p>
          A segregação socioespacial é o processo pelo qual diferentes grupos sociais
          habitam partes distintas da cidade, geralmente com enorme disparidade no
          acesso a serviços, infraestrutura e oportunidades. Nas cidades brasileiras,
          ricos e pobres vivem em bairros muito diferentes, com qualidades de vida
          incomparáveis. Essa separação não é natural: resulta do mercado imobiliário,
          das políticas públicas (ou de sua ausência) e da discriminação racial e
          econômica.
        </p>
        <p>
          A segregação se manifesta de forma visível: condomínios fechados de luxo
          dividem muros com favelas nas metrópoles brasileiras. Bairros nobres têm
          calçadas, parques, escolas de qualidade e serviços de saúde; periferias
          carecem de iluminação, saneamento e coleta de lixo adequados. Essa
          realidade "dual" das cidades brasileiras é expressa no conceito de
          "cidade partida", popularizado pelo jornalista Zuenir Ventura ao descrever
          o Rio de Janeiro dos anos 1990.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gentrificação</span>
        <h2>8. Gentrificação e remoção de populações</h2>
        <p>
          A gentrificação é o processo de valorização imobiliária de bairros populares
          ou degradados que resulta na substituição da população original por moradores
          de maior renda. Ao longo desse processo, aluguéis sobem, comércios tradicionais
          fecham e moradores de baixa renda são expulsos. É um fenômeno global que se
          manifesta de forma intensa em cidades brasileiras, especialmente associado
          a grandes eventos (como a Copa do Mundo de 2014 e os Jogos Olímpicos de 2016
          no Rio de Janeiro).
        </p>
        <p>
          No Rio, a preparação para os Jogos Olímpicos resultou na remoção de dezenas
          de comunidades, algumas com décadas de ocupação. Famílias foram transferidas
          para conjuntos habitacionais distantes, sem infraestrutura adequada, perdendo
          redes de apoio, trabalho e vínculos comunitários. O caso ilustra como grandes
          eventos podem aprofundar a segregação em vez de reduzir desigualdades.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Saneamento e ambiente</span>
        <h2>9. Saneamento básico e degradação ambiental urbana</h2>
        <p>
          O saneamento básico — que inclui abastecimento de água, esgotamento sanitário,
          manejo de resíduos sólidos e drenagem urbana — é um direito fundamental
          diretamente ligado à saúde pública. Apesar dos avanços, o Brasil ainda
          convive com um déficit grave: segundo o SNIS (Sistema Nacional de Informações
          sobre Saneamento), mais de 35 milhões de brasileiros não têm acesso a
          água tratada e cerca de 100 milhões carecem de coleta de esgoto.
        </p>
        <p>
          A carência de saneamento nas periferias e favelas está diretamente ligada
          a problemas de saúde (doenças de veiculação hídrica como dengue, leptospirose
          e cólera) e à degradação ambiental urbana. A ausência de drenagem adequada
          contribui para as enchentes que vitimam anualmente centenas de brasileiros,
          especialmente nas favelas construídas em encostas e várzeas. O Marco Legal
          do Saneamento (Lei 14.026/2020) estabeleceu metas de universalização.
        </p>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Direito à cidade</span>
        <h2>10. O Estatuto da Cidade e o direito à cidade</h2>
        <p>
          O Estatuto da Cidade (Lei 10.257/2001) foi um marco legal fundamental para
          o planejamento urbano brasileiro. Regulamentou o capítulo de política urbana
          da Constituição Federal de 1988, estabelecendo instrumentos como o Plano
          Diretor obrigatório para cidades com mais de 20 mil habitantes, o IPTU
          progressivo no tempo (para combater especulação), a usucapião especial
          urbana e a gestão democrática das cidades.
        </p>
        <p>
          O conceito de "direito à cidade", formulado pelo filósofo Henri Lefebvre,
          defende que todos os cidadãos têm direito não apenas a uma moradia, mas ao
          usufruto pleno da cidade: seus serviços, espaços públicos, cultura e
          participação nas decisões sobre o território. No Brasil, movimentos sociais
          como o MTST (Movimento dos Trabalhadores Sem Teto) lutam por habitação digna
          e pelo reconhecimento desse direito como política de Estado.
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
              A crise de mobilidade urbana nas grandes cidades brasileiras é resultado
              de um conjunto de fatores históricos. Qual das alternativas descreve
              corretamente uma causa estrutural desse problema?
            </p>
          }
          options={[
            { letter: "a", text: "A excessiva construção de metrôs e trens, que desestimulou o uso do carro" },
            { letter: "b", text: "A periferização urbana, que aumentou as distâncias entre moradia e trabalho", correct: true },
            { letter: "c", text: "A redução do uso de automóveis por incentivos fiscais ao transporte público" },
            { letter: "d", text: "O declínio da produção de veículos pela indústria automobilística nacional" },
            { letter: "e", text: "A diminuição da população nas periferias, que reduziu a demanda por transporte" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>b</strong>. A periferização — processo
              de crescimento urbano para as bordas das cidades, onde mora a população
              mais pobre — aumentou as distâncias percorridas diariamente e criou
              dependência de transporte. O transporte público raramente acompanhou
              essa expansão, resultando na crise de mobilidade. As demais opções
              descrevem situações inversas ou falsas: o Brasil não investiu o suficiente
              em metrôs (a), os incentivos favoreceram o automóvel (c) e a produção
              de veículos cresceu (d).
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              O déficit habitacional brasileiro concentra-se principalmente em qual
              segmento da população e qual componente representa a maior parcela desse déficit?
            </p>
          }
          options={[
            { letter: "a", text: "Famílias de alta renda; falta de imóveis de luxo" },
            { letter: "b", text: "Famílias de baixa renda; ônus excessivo com aluguel", correct: true },
            { letter: "c", text: "Famílias de classe média; coabitação involuntária" },
            { letter: "d", text: "Moradores rurais; falta de habitações no campo" },
            { letter: "e", text: "Idosos; inadequação dos imóveis para acessibilidade" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>b</strong>. O déficit habitacional
              concentra-se nas famílias que ganham até 3 salários mínimos, e o
              componente que mais contribui para o déficit é o ônus excessivo com
              aluguel — famílias que gastam mais de 30% da renda apenas com moradia,
              ficando sem recursos para outras necessidades básicas. Esse dado é
              apurado pela Fundação João Pinheiro e reflete a combinação de baixos
              salários com o alto custo do mercado imobiliário nas cidades.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              (ENEM adaptado) A segregação socioespacial nas cidades brasileiras resulta
              de processos históricos e econômicos. Sobre esse fenômeno, é correto
              afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "É resultado exclusivo das escolhas individuais dos moradores, que optam por viver entre pessoas semelhantes" },
            { letter: "b", text: "Foi eliminada pelas políticas habitacionais do século XXI" },
            { letter: "c", text: "Afeta apenas as grandes metrópoles, não as cidades médias" },
            { letter: "d", text: "Resulta da combinação entre mercado imobiliário excludente, ausência do Estado e desigualdade de renda", correct: true },
            { letter: "e", text: "Tende a diminuir naturalmente com o crescimento econômico, sem necessidade de políticas específicas" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>d</strong>. A segregação socioespacial
              é um fenômeno estrutural produzido pela interação entre o mercado
              imobiliário (que torna as áreas bem servidas de infraestrutura caras
              e inacessíveis aos pobres), a ausência do Estado nas periferias e a
              profunda desigualdade de renda do Brasil. Não se trata de escolha
              individual (a), não foi eliminada (b), ocorre em cidades de vários
              portes (c) e não se resolve automaticamente com crescimento econômico (e).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              O perfil das vítimas de violência urbana no Brasil revela desigualdades
              profundas. Com base em dados do Atlas da Violência, qual grupo social
              é desproporcionalmente afetado pelos homicídios no Brasil?
            </p>
          }
          options={[
            { letter: "a", text: "Mulheres brancas de classe média, alvos prioritários da violência doméstica" },
            { letter: "b", text: "Idosos residentes em centros urbanos consolidados" },
            { letter: "c", text: "Jovens negros moradores de periferias urbanas", correct: true },
            { letter: "d", text: "Trabalhadores rurais em áreas de conflito agrário" },
            { letter: "e", text: "Homens brancos em posições de liderança empresarial" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>c</strong>. Os dados do Atlas da
              Violência são consistentes: jovens negros (pretos e pardos) entre
              15 e 29 anos, moradores de periferias urbanas, são as principais
              vítimas de homicídio no Brasil, representando cerca de 77% das vítimas.
              Esse padrão reflete a combinação de racismo estrutural, exclusão
              socioeconômica e ausência do Estado nas periferias. As demais opções
              descrevem grupos afetados por outras formas de violência, não pelo
              padrão majoritário dos homicídios.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              O Estatuto da Cidade (Lei 10.257/2001) criou instrumentos urbanísticos
              para combater a especulação imobiliária e promover a função social da
              propriedade. Qual instrumento prevê a cobrança progressiva de impostos
              sobre terrenos urbanos que não cumprem sua função social?
            </p>
          }
          options={[
            { letter: "a", text: "Usucapião especial urbana" },
            { letter: "b", text: "Operação urbana consorciada" },
            { letter: "c", text: "Direito de preempção" },
            { letter: "d", text: "IPTU progressivo no tempo", correct: true },
            { letter: "e", text: "Estudo de impacto de vizinhança" },
          ]}
          resolution={
            <p>
              A alternativa correta é <strong>d</strong>. O IPTU progressivo no
              tempo é o instrumento previsto no Estatuto da Cidade que permite ao
              município aumentar progressivamente a alíquota do IPTU sobre terrenos
              e imóveis que não cumprem sua função social (como terrenos ociosos
              mantidos para especulação). O objetivo é desestimular a retenção de
              imóveis vazios em áreas com infraestrutura, pressionar os proprietários
              a dar uso ao imóvel ou vendê-lo. A usucapião especial (a) diz respeito
              ao reconhecimento de posse; as demais são instrumentos com finalidades
              diferentes.
            </p>
          }
        />
      </section>
    </article>
  );
}
