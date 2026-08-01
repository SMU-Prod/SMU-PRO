"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap26Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 26</span>
          <h1>Mineração e Sociedade Mineradora</h1>
          <p>
            A descoberta do ouro em Minas Gerais na última década do século XVII
            provocou a maior transformação da colônia desde o estabelecimento do
            sistema açucareiro: deslocou o eixo econômico do Nordeste para o
            Sudeste, multiplicou a importação forçada de africanos escravizados,
            gerou uma sociedade urbana e diversificada sem precedentes no Brasil
            colonial e produziu a única grande arte original da América portuguesa
            — o Barroco mineiro. Compreender esse ciclo é essencial para o ENEM,
            pois ele ancora questões de cultura, fiscalidade, resistência e
            identidade nacional.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Descoberta</span>
        <h2>1. A Descoberta do Ouro e o Início do Ciclo Minerador</h2>
        <p>
          O ouro de Minas Gerais foi descoberto pelos bandeirantes paulistas na
          última década do século XVII. A data precisa é incerta, mas aceita-se
          que entre 1693 e 1695 as primeiras pepitas foram encontradas nas bacias
          dos rios das Velhas e Doce. Borba Gato, genro de Fernão Dias Pais Leme,
          é apontado como um dos descobridores da região de Sabará. Carlos Pedroso
          da Silveira e outros sertanistas também são citados nas fontes.
        </p>
        <p>
          A notícia se espalhou com velocidade impressionante. Em poucos anos,
          uma corrida do ouro sem precedentes varreu a colônia e a própria
          metrópole: portugueses de todas as classes sociais, imigrantes de outras
          regiões da Europa, colonos do litoral, africanos escravizados recém-
          chegados do tráfico e luso-brasileiros de todas as capitanias
          convergiram para o interior. A população das Minas Gerais, que era
          praticamente inexistente em 1690, atingia provavelmente 100.000 pessoas
          em 1710 e 300.000 em 1740.
        </p>
        <p>
          O diamante foi descoberto na região de Tijuco (atual Diamantina) por
          volta de 1720. A Coroa, temerosa do colapso do preço das pedras no
          mercado europeu, criou o Distrito Diamantino — um território
          hermeticamente controlado onde o garimpo era monopolizado pelo Estado
          e a circulação de pessoas era rigidamente fiscalizada.
        </p>
      </section>

      {/* ── SVG 1: Mapa das Minas Gerais com regiões mineradoras ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg" aria-label="Mapa esquemático das regiões mineradoras de Minas Gerais">
          {/* Contorno MG */}
          <path d="M 80,60 L 420,60 L 450,180 L 400,320 L 250,360 L 100,300 L 60,180 Z"
                fill="#fef3c7" stroke="#92400e" strokeWidth="2"/>
          {/* Subzonas */}
          <ellipse cx="220" cy="180" rx="70" ry="50" fill="#fbbf24" opacity="0.5" stroke="#d97706" strokeWidth="1.5"/>
          <text x="220" y="178" textAnchor="middle" fontSize="11" fill="#78350f" fontWeight="bold">Vila Rica / Ouro Preto</text>
          <text x="220" y="192" textAnchor="middle" fontSize="10" fill="#92400e">centro do ouro</text>

          <ellipse cx="330" cy="130" rx="55" ry="35" fill="#86efac" opacity="0.5" stroke="#16a34a" strokeWidth="1.5"/>
          <text x="330" y="128" textAnchor="middle" fontSize="10" fill="#14532d" fontWeight="bold">Sabará / Rio das Velhas</text>
          <text x="330" y="142" textAnchor="middle" fontSize="9" fill="#166534">1ª descoberta (1690s)</text>

          <ellipse cx="160" cy="110" rx="50" ry="32" fill="#bfdbfe" opacity="0.6" stroke="#2563eb" strokeWidth="1.5"/>
          <text x="160" y="108" textAnchor="middle" fontSize="10" fill="#1e3a8a" fontWeight="bold">Diamantina (Tijuco)</text>
          <text x="160" y="122" textAnchor="middle" fontSize="9" fill="#1e40af">diamantes (1720s)</text>

          <ellipse cx="310" cy="270" rx="60" ry="35" fill="#f9a8d4" opacity="0.4" stroke="#be185d" strokeWidth="1.5"/>
          <text x="310" y="268" textAnchor="middle" fontSize="10" fill="#831843" fontWeight="bold">Rio das Mortes</text>
          <text x="310" y="282" textAnchor="middle" fontSize="9" fill="#9d174d">São João del-Rei</text>

          {/* Legenda */}
          <rect x="40" y="330" width="14" height="12" fill="#fbbf24" stroke="#d97706"/>
          <text x="58" y="341" fontSize="10" fill="#1f2937">Ouro (principal)</text>
          <rect x="40" y="348" width="14" height="12" fill="#bfdbfe" stroke="#2563eb"/>
          <text x="58" y="359" fontSize="10" fill="#1f2937">Diamante</text>

          <text x="260" y="392" textAnchor="middle" fontSize="12" fill="#111827" fontWeight="bold">Minas Gerais — Regiões Mineradoras (séc. XVIII, esquemático)</text>
        </svg>
        <figcaption>Principais regiões produtoras de ouro e diamante em Minas Gerais no século XVIII.</figcaption>
      </figure>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Deslocamento do centro</span>
        <h2>2. Do Nordeste ao Sudeste: A Reorientação do Brasil Colonial</h2>
        <p>
          Por mais de um século, a Bahia (Salvador) foi o centro político,
          econômico e cultural da colônia, ancorada no açúcar nordestino. O ouro
          mineiro mudou isso radicalmente. O fluxo de riquezas agora passava pelo
          Rio de Janeiro — porto mais próximo das minas —, e em 1763 a capital
          colonial foi oficialmente transferida de Salvador para o Rio de Janeiro.
        </p>
        <p>
          Essa transferência simbolizava algo mais profundo: a mudança do eixo
          econômico para o Sudeste. As rotas de abastecimento das Minas Gerais
          mobilizavam redes comerciais enormes: tropeiros do Sul traziam mulas e
          gado; paulistas e fluminenses forneciam alimentos; o tráfico atlântico
          despejava mais e mais africanos escravizados pelo porto carioca. O Rio
          de Janeiro se tornou o mais importante entreposto comercial do Atlântico
          sul-americano.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparação entre Ciclo Açucareiro e Ciclo Minerador</caption>
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Açúcar (séc. XVI–XVII)</th>
                <th>Mineração (séc. XVIII)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Centro geográfico</td>
                <td>Nordeste (Bahia, Pernambuco)</td>
                <td>Sudeste (Minas Gerais, Rio de Janeiro)</td>
              </tr>
              <tr>
                <td>Capitalidade</td>
                <td>Salvador (até 1763)</td>
                <td>Rio de Janeiro (a partir de 1763)</td>
              </tr>
              <tr>
                <td>Mão de obra</td>
                <td>Africanos escravizados (litoral)</td>
                <td>Africanos escravizados (interior)</td>
              </tr>
              <tr>
                <td>Sociedade</td>
                <td>Rural, patriarcal, engenho</td>
                <td>Urbana, diversificada, vila e arraial</td>
              </tr>
              <tr>
                <td>Cultura</td>
                <td>Barroco jesuítico no litoral</td>
                <td>Barroco mineiro (Aleijadinho, Ataíde)</td>
              </tr>
              <tr>
                <td>Fiscalidade</td>
                <td>Dízimos e taxas sobre exportação</td>
                <td>Quinto, derrama, Casa de Fundição</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sociedade mineradora</span>
        <h2>3. A Sociedade das Minas: Diversidade e Mobilidade Social</h2>
        <p>
          A sociedade mineradora foi a mais diversificada da história colonial
          brasileira. Diferentemente da plantation açucareira — polarizada entre
          o grande senhor de engenho e a massa de escravizados —, as Minas Gerais
          abrigavam uma multidão de intermediários: comerciantes, tropeiros,
          artesãos, feitores, músicos, religiosos, prostitutas, faiscadores livres
          e forros (africanos libertos).
        </p>
        <p>
          O garimpo de ouro de aluvião — que não exigia grandes instalações
          fixas como o engenho — permitia que escravizados acumulassem economias
          por meio do sistema de <em>coartação</em>: o senhor permitia ao
          escravizado trabalhar por conta própria em determinados horários,
          ficando com parte dos lucros. Com o tempo, muitos conseguiam comprar
          a própria liberdade — fenômeno chamado <em>alforria</em>. A proporção
          de africanos libertos em Minas Gerais era a mais alta da colônia.
        </p>
        <p>
          Chica da Silva (Isabel Maria de Oliveira) é o exemplo mais famoso
          desse processo de ascensão social: escravizada de origem africana,
          tornou-se companheira do contratador de diamantes João Fernandes de
          Oliveira e viveu como senhora abastada em Diamantina — um caso
          extraordinário que revela tanto as possibilidades quanto os limites
          da mobilidade social na colônia.
        </p>

        <div className="lesson-highlight">
          <strong>África no Brasil minerador:</strong> a maior parte dos africanos
          trazidos para Minas Gerais vinha de Angola e do Congo (de língua bantu)
          e da Costa da Mina (atual Gana, Benim — povos akan, ewe e fon). Essa
          diversidade africana moldou sincretismos religiosos, culinária e música
          que são parte central da identidade mineira e brasileira.
        </div>
      </section>

      {/* ── SVG 2: Diagrama da sociedade mineradora ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" aria-label="Diagrama da estratificação social na sociedade mineradora">
          {/* Pirâmide */}
          <polygon points="250,20 430,280 70,280" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2"/>
          {/* Divisões internas */}
          <line x1="165" y1="113" x2="335" y2="113" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="4"/>
          <line x1="130" y1="197" x2="370" y2="197" stroke="#ca8a04" strokeWidth="1.5" strokeDasharray="4"/>

          {/* Camadas */}
          <text x="250" y="75" textAnchor="middle" fontSize="11" fill="#1f2937" fontWeight="bold">Grandes mineradores</text>
          <text x="250" y="90" textAnchor="middle" fontSize="10" fill="#4b5563">e contratadores</text>

          <text x="250" y="150" textAnchor="middle" fontSize="11" fill="#1f2937" fontWeight="bold">Comerciantes, tropeiros,</text>
          <text x="250" y="165" textAnchor="middle" fontSize="10" fill="#4b5563">artesãos, clérigos, forros</text>

          <text x="250" y="232" textAnchor="middle" fontSize="11" fill="#1f2937" fontWeight="bold">Africanos escravizados</text>
          <text x="250" y="247" textAnchor="middle" fontSize="10" fill="#4b5563">(maioria da população)</text>

          <text x="250" y="300" textAnchor="middle" fontSize="12" fill="#111827" fontWeight="bold">Estratificação Social — Minas Gerais séc. XVIII</text>
        </svg>
        <figcaption>A sociedade mineradora tinha uma camada intermediária muito mais ampla do que a sociedade açucareira.</figcaption>
      </figure>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fiscalidade portuguesa</span>
        <h2>4. O Sistema Fiscal: Quinto, Derrama e Casa de Fundição</h2>
        <p>
          Portugal sabia que a riqueza mineral era efêmera e queria extrair o
          máximo possível. O principal instrumento fiscal era o <strong>quinto</strong>:
          um imposto de 20% sobre todo o ouro extraído, que deveria ser pago em
          ouro fundido nas Casas de Fundição. O problema era fraudar esse sistema —
          o ouro em pó circulava livremente, escapando da fiscalização.
        </p>
        <p>
          A Coroa propôs então a <strong>Casa de Fundição</strong> (1720): todo
          ouro deveria ser fundido e quintado em casas controladas pelo Estado,
          proibindo-se a circulação do ouro em pó. A reação dos mineradores foi
          imediata e violenta — a revolta de 1720 em Vila Rica, liderada por
          Pascoal da Silva Guimarães e pelo conde de Assumar, forçou a Coroa a
          recuar. A Casa de Fundição só foi implementada em 1725, e mesmo assim
          de forma parcial.
        </p>
        <p>
          Como alternativa, adotou-se a <strong>derrama</strong>: quando a
          arrecadação anual ficava abaixo de 100 arrobas de ouro (cota mínima
          estabelecida), a Coroa exigia a diferença de toda a população — ricas
          ou pobres, grandes mineradores ou simples artesãos. A ameaça da derrama
          era o fator detonador de revoltas — incluindo a Inconfidência Mineira
          de 1789.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais Mecanismos Fiscais na Mineração Colonial</caption>
            <thead>
              <tr>
                <th>Mecanismo</th>
                <th>Funcionamento</th>
                <th>Problema</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Quinto</td>
                <td>20% do ouro extraído pago à Coroa</td>
                <td>Sonegação generalizada via ouro em pó</td>
              </tr>
              <tr>
                <td>Casa de Fundição</td>
                <td>Todo ouro fundido e quintado pelo Estado</td>
                <td>Revolta de 1720; resistência dos mineradores</td>
              </tr>
              <tr>
                <td>Derrama</td>
                <td>Cobrança forçada quando cota não atingida</td>
                <td>Ameaça de derrama estopou a Inconfidência (1789)</td>
              </tr>
              <tr>
                <td>Capitação</td>
                <td>Taxa por cabeça de escravizado trabalhando nas minas</td>
                <td>Penalizava pequenos mineradores com poucos cativos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Política e conflito</span>
        <h2>5. A Carta Régia de 1720 e os Conflitos com Lisboa</h2>
        <p>
          A Carta Régia de 1720 marcou uma virada na política colonial portuguesa
          em relação às Minas: além de tentar implantar a Casa de Fundição, proibia
          a instalação de fábricas manufatureiras na colônia e restringia o fluxo
          de populações entre as capitanias. A ideia era manter as Minas como uma
          zona exclusivamente extrativista e compradora de bens importados de
          Portugal — um pacto colonial clássico de dependência econômica.
        </p>
        <p>
          A proibição manufatureira ganhou reforço no Alvará de 1785 (governo de
          D. Maria I), que ordenou a destruição de teares no Brasil — decisão que
          revelava o quanto o desenvolvimento econômico da colônia ameaçava os
          interesses dos comerciantes metropolitanos. Essa proibição também seria
          mencionada nas propostas dos inconfidentes mineiros como uma das razões
          para a independência.
        </p>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Decadência</span>
        <h2>6. Decadência do Ciclo do Ouro (Final do Século XVIII)</h2>
        <p>
          A partir de meados do século XVIII, a produção aurífera entrou em declínio
          acelerado. As causas eram múltiplas: esgotamento das jazidas superficiais
          de aluvião, falta de tecnologia para explorar veios mais profundos, alta
          tributação que desestimulava o investimento e fuga de capitais para outras
          atividades. O pico de produção ocorreu por volta de 1750–1760; nas décadas
          seguintes, a queda foi abrupta.
        </p>
        <p>
          A decadência da mineração não significou o esvaziamento de Minas Gerais.
          A população permaneceu — agora voltada para atividades agrícolas e
          pecuárias de subsistência — e as cidades mantiveram uma vida cultural
          e religiosa intensa. Mas a crise econômica aprofundou as tensões com
          Lisboa, fertilizando o terreno para as revoltas emancipacionistas do
          final do século, especialmente a Inconfidência Mineira (1789).
        </p>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cultura e arte</span>
        <h2>7. O Barroco Mineiro: Aleijadinho, Ataíde e Vila Rica</h2>
        <p>
          A riqueza do ouro financiou uma explosão artística e arquitetônica
          sem paralelo no Brasil colonial. As igrejas de Vila Rica (atual
          Ouro Preto), Mariana, Tiradentes, São João del-Rei e Congonhas
          concentram o mais sofisticado conjunto barroco da América Latina —
          um barroco com características próprias, influenciado pelo rococó
          europeu mas adaptado a materiais e sensibilidades locais.
        </p>
        <p>
          <strong>Antônio Francisco Lisboa, o Aleijadinho</strong> (c. 1738–1814),
          filho de um arquiteto português com uma africana escravizada, é a figura
          central desse período. Artista multifacetado — escultor, entalhador,
          arquiteto —, criou obras de extraordinária qualidade plástica apesar de
          sofrer de uma doença degenerativa (possivelmente hanseníase) que lhe
          deformou as mãos. Seus profetas em pedra-sabão no Santuário do Bom Jesus
          de Matosinhos, em Congonhas, são considerados obras-primas da escultura
          barroca mundial.
        </p>
        <p>
          <strong>Manuel da Costa Ataíde</strong> (1762–1830) foi o maior pintor
          do período. Suas pinturas de teto em perspectiva ilusionista
          (<em>trompe-l'oeil</em>) decoram as igrejas de São Francisco de Assis
          e Nossa Senhora do Carmo em Ouro Preto. Notavelmente, Ataíde representou
          a Virgem Maria e os anjos com feições afro-brasileiras — em muitas
          obras, os rostos das figuras celestiais têm traços negros e mestiços,
          algo revolucionário para os padrões iconográficos europeus.
        </p>

        <div className="lesson-highlight">
          <strong>O Aleijadinho e a questão racial:</strong> filho de africana
          escravizada, Aleijadinho operava nos limites da sociedade colonial: era
          um artista reconhecido e contratado por irmandades religiosas ricas,
          mas nunca deixou de ser marcado pela origem racial em uma sociedade
          rigidamente hierárquica. Sua trajetória ilustra tanto as possibilidades
          quanto as contradições da mobilidade social na Minas setecentista.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tiradentes</span>
        <h2>8. Tiradentes e a Vila Rica Inconfidente</h2>
        <p>
          Joaquim José da Silva Xavier, o Tiradentes, é inseparável da história
          mineradora. Alferes (posto militar inferior) e dentista itinerante,
          Tiradentes participou da Inconfidência Mineira (1789) — a mais
          importante conjuração emancipacionista do Brasil colonial. O contexto
          era a decadência do ouro, a ameaça da derrama e as ideias iluministas
          que circulavam entre as elites letradas de Vila Rica.
        </p>
        <p>
          Condenado à morte como principal réu do processo — enquanto os outros
          inconfidentes (advogados, padres, militares de alta patente) foram
          degredados para a África —, Tiradentes foi enforcado e esquartejado no
          Rio de Janeiro em 1792. Sua execução, longe de apagar o movimento,
          o transformou em mártir. No século XIX, o republicanismo brasileiro
          o canonizou como precursor da República: Tiradentes virou feriado
          nacional (21 de abril) e símbolo da luta pela liberdade — uma
          construção histórica que merece leitura crítica, pois o movimento
          de 1789 era conduzido principalmente por elites escravocratas que
          queriam independência mas não queriam abolição.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Perfil dos Inconfidentes Mineiros (1789)</caption>
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Representantes</th>
                <th>Motivação principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Militares</td>
                <td>Tiradentes, Francisco de Paula Freire de Andrada</td>
                <td>Carreira bloqueada, ressentimento com Portugal</td>
              </tr>
              <tr>
                <td>Padres</td>
                <td>Carlos Correia de Toledo, José da Silva e Oliveira Rolim</td>
                <td>Iluminismo, anticlericalismo moderado</td>
              </tr>
              <tr>
                <td>Advogados / letrados</td>
                <td>Cláudio Manuel da Costa, Tomás Antônio Gonzaga</td>
                <td>Ideias iluministas, autonomia colonial</td>
              </tr>
              <tr>
                <td>Grandes proprietários</td>
                <td>Joaquim Silvério dos Reis (delator)</td>
                <td>Endividamento com a Coroa; fuga da derrama</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Escravidão africana</span>
        <h2>9. Africanos Escravizados no Ciclo Minerador</h2>
        <p>
          A mineração consumiu um número extraordinário de africanos escravizados.
          Estima-se que entre 1700 e 1800, mais de 500.000 africanos foram
          desembarcados no Rio de Janeiro e em outras capitanias para suprir a
          demanda das Minas Gerais. A taxa de mortalidade era altíssima: as
          condições de trabalho no garimpo — imersão em água fria, exposição
          ao sol, desnutrição, violência física — matavam em poucos anos.
        </p>
        <p>
          A resistência africana na região mineradora assumiu formas diversas:
          quilombos espalhavam-se pelo interior da capitania; revoltas isoladas
          eram frequentes; a compra da alforria era a estratégia mais comum para
          os que tinham acesso à coartação. As irmandades religiosas negras —
          como a Irmandade de Nossa Senhora do Rosário dos Pretos — funcionavam
          como redes de solidariedade e poupança coletiva para financiar alforrias.
          A Igreja do Rosário dos Pretos, presente em praticamente todas as
          cidades mineiras do século XVIII, é o símbolo material dessa resistência
          organizada.
        </p>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese ENEM</span>
        <h2>10. Perspectivas para a Prova</h2>
        <p>
          O ENEM aborda o ciclo minerador a partir de múltiplos ângulos: a
          fiscalidade colonial (quinto, derrama) como causa das revoltas; a
          arte barroca (Aleijadinho, Ataíde) como expressão cultural; a
          diversidade social como peculiaridade do período; e a escravidão
          africana como base estrutural de toda a economia mineradora.
          Questões sobre Tiradentes frequentemente exigem leitura crítica
          do mito republicano construído no século XIX, distinguindo o
          personagem histórico da figura heroica que a memória nacional
          consagrou.
        </p>
        <p>
          Outro tema recorrente é a comparação entre os ciclos econômicos
          coloniais. Saber diferenciar a sociedade açucareira da sociedade
          mineradora — em termos de estrutura social, localização geográfica,
          cultura e sistema fiscal — é uma competência central exigida pelo ENEM
          na área de Ciências Humanas.
        </p>
      </section>

      {/* ── EXERCISES ── */}
      <Exercise
        level="Básico"
        title="A descoberta do ouro em Minas Gerais"
        statement={
          <p>
            A descoberta do ouro em Minas Gerais, na última década do século XVII,
            provocou uma das maiores transformações da história colonial brasileira.
            Qual foi a consequência mais imediata dessa descoberta para o Rio de
            Janeiro?
          </p>
        }
        options={[
          { letter: "A", text: "O Rio de Janeiro foi escolhido como capital da colônia imediatamente após a descoberta do ouro, em 1695." },
          { letter: "B", text: "O porto do Rio de Janeiro tornou-se o principal ponto de entrada de africanos escravizados e de escoamento do ouro mineiro, impulsionando seu crescimento.", correct: true },
          { letter: "C", text: "O Rio de Janeiro perdeu importância porque os comerciantes preferiram usar o porto de Santos para escoar o ouro paulista." },
          { letter: "D", text: "A cidade do Rio de Janeiro foi fundada apenas após a descoberta do ouro, para servir de entreposto comercial." },
          { letter: "E", text: "O Rio de Janeiro se tornou capital da colônia em 1695, logo após a primeira descoberta de ouro em Minas Gerais." },
        ]}
        resolution={
          <p>
            O Rio de Janeiro era o porto mais próximo das Minas Gerais e se tornou
            o principal entreposto do tráfico atlântico de escravizados e do
            escoamento do ouro. A transferência da capital de Salvador para o Rio
            ocorreu apenas em 1763.
          </p>
        }
      />

      <Exercise
        level="Intermediário"
        title="A derrama e suas consequências"
        statement={
          <p>
            A derrama era um mecanismo fiscal utilizado pela Coroa portuguesa nas
            Minas Gerais. Em que consistia e qual foi seu efeito político mais
            relevante?
          </p>
        }
        options={[
          { letter: "A", text: "Era o imposto de 20% sobre o ouro extraído; seu efeito foi estimular a produção para atingir a cota mínima exigida." },
          { letter: "B", text: "Era a cobrança forçada da diferença quando a arrecadação anual ficava abaixo da cota mínima; a ameaça de sua aplicação foi o estopim da Inconfidência Mineira.", correct: true },
          { letter: "C", text: "Era a obrigação de fundir todo o ouro nas Casas de Fundição controladas pelo Estado; causou a revolta de 1720." },
          { letter: "D", text: "Era um imposto por cabeça de escravizado trabalhando nas minas; afetava principalmente os grandes mineradores." },
          { letter: "E", text: "Era a taxa paga pelos comerciantes estrangeiros para operar nas Minas Gerais; foi abolida pelo Marquês de Pombal." },
        ]}
        resolution={
          <p>
            A derrama era a cobrança da diferença entre a arrecadação real e a
            cota anual de 100 arrobas de ouro. Quando o governador anunciou que
            iria aplicá-la em 1789, os inconfidentes aceleraram seus planos de
            revolta — esse foi o estopim imediato da Inconfidência Mineira.
          </p>
        }
      />

      <Exercise
        level="Avançado"
        title="Aleijadinho e a questão racial"
        statement={
          <p>
            Antônio Francisco Lisboa, o Aleijadinho, filho de português com africana
            escravizada, tornou-se o maior artista do Brasil colonial. Qual
            interpretação historiográfica sobre sua trajetória é mais adequada
            para o contexto da sociedade mineradora?
          </p>
        }
        options={[
          { letter: "A", text: "A trajetória do Aleijadinho prova que a sociedade colonial era igualitária e que a origem racial não determinava o destino social." },
          { letter: "B", text: "O Aleijadinho só conseguiu reconhecimento porque escondia sua origem africana, adotando exclusivamente a identidade portuguesa." },
          { letter: "C", text: "A trajetória do Aleijadinho ilustra as contradições da sociedade mineradora: maior mobilidade social do que a plantation, mas sem eliminar as hierarquias raciais que marcavam a colônia.", correct: true },
          { letter: "D", text: "O Aleijadinho foi reconhecido exclusivamente por europeus que não sabiam de sua origem africana; no Brasil, era desprezado pelos contemporâneos." },
          { letter: "E", text: "A arte do Aleijadinho é irrelevante historicamente porque foi produzida sob encomenda das elites e não refletia a experiência dos africanos escravizados." },
        ]}
        resolution={
          <p>
            A trajetória do Aleijadinho revela as contradições da sociedade
            mineradora: havia mais espaço para ascensão do que na sociedade
            açucareira (devido à urbanização e diversificação econômica), mas as
            hierarquias raciais continuavam operando. Ele não foi simplesmente
            "aceito" — trabalhou em um ambiente de tensão constante entre
            talento reconhecido e estigma racial.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="Irmandades negras e resistência"
        statement={
          <div>
            <p>
              "As Irmandades de Nossa Senhora do Rosário dos Pretos, presentes
              em praticamente todas as cidades mineradoras do século XVIII, eram
              associações religiosas que funcionavam, ao mesmo tempo, como espaços
              de sociabilidade, preservação cultural africana e instrumentos
              práticos de resistência à escravidão."
            </p>
            <p>Com base no texto, qual função das irmandades é mais significativa
            para a compreensão da resistência africana no Brasil?</p>
          </div>
        }
        options={[
          { letter: "A", text: "A organização de rebeliões armadas contra os senhores de engenho e as autoridades coloniais." },
          { letter: "B", text: "A criação de fundos coletivos para comprar a alforria de membros, combinando resistência religiosa e econômica dentro dos limites do sistema colonial.", correct: true },
          { letter: "C", text: "A pregação de doutrinas heréticas que desafiavam a autoridade da Igreja Católica e do Estado colonial." },
          { letter: "D", text: "O contrabando de ouro para financiar a fuga de escravizados para os quilombos do interior de Minas Gerais." },
          { letter: "E", text: "A resistência das irmandades era puramente simbólica e não tinha nenhum efeito prático na vida dos africanos escravizados." },
        ]}
        resolution={
          <p>
            As irmandades religiosas negras acumulavam recursos para comprar
            alforrias de seus membros, representando uma forma de resistência
            que operava dentro das estruturas legais da colônia. Essa estratégia
            "de dentro do sistema" é fundamental para entender a complexidade
            da resistência africana no Brasil colonial.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="Barroco mineiro e identidade cultural"
        statement={
          <p>
            Manuel da Costa Ataíde, ao pintar a Virgem Maria e os anjos com
            feições afro-brasileiras nas igrejas de Ouro Preto, realizou uma
            escolha iconográfica significativa para o contexto colonial. Essa
            escolha pode ser interpretada como:
          </p>
        }
        options={[
          { letter: "A", text: "Um erro técnico do pintor, que copiava modelos europeus sem habilidade suficiente para reproduzir os traços caucasianos originais." },
          { letter: "B", text: "Uma encomenda explícita das irmandades negras, que financiaram todas as igrejas barrocas de Minas Gerais." },
          { letter: "C", text: "Uma afirmação da presença e da dignidade africana no imaginário religioso colonial, inserindo rostos negros e mestiços no centro da iconografia cristã.", correct: true },
          { letter: "D", text: "Uma cópia de modelos iconográficos africanos trazidos pelos missionários jesuítas de Angola para o Brasil." },
          { letter: "E", text: "Uma estratégia comercial para vender mais obras para as irmandades negras, sem qualquer significado cultural ou político." },
        ]}
        resolution={
          <p>
            A opção de representar figuras sagradas com traços afro-brasileiros
            não era acidental: Ataíde vivia em uma sociedade onde a maioria da
            população era negra ou mestiça, e sua escolha inseriu essa realidade
            no centro do imaginário religioso. É uma das expressões mais
            significativas da presença africana na cultura colonial brasileira.
          </p>
        }
      />
    </article>
  );
}
