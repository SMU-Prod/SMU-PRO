"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap32Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 32</span>
          <h1>Urbanização, Violência e Segregação Socioespacial</h1>
          <p>
            O Brasil urbanizou-se de forma acelerada e profundamente desigual, produzindo cidades
            marcadas pela segregação espacial, pela violência e pela exclusão social. Compreender
            esses fenômenos — êxodo rural, periferização, gentrificação, direito à cidade —
            é central para a leitura crítica de gráficos, mapas e textos sobre a realidade
            urbana brasileira no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Urbanização</span>
        <h2>1. Urbanização no Brasil: Velocidade e Desigualdade</h2>
        <p>
          O Brasil passou de um país predominantemente rural para um dos mais urbanizados do mundo
          em apenas algumas décadas. Em 1950, menos de 40% da população vivia em cidades; hoje,
          esse índice ultrapassa <strong>87%</strong> — um dos maiores da América Latina.
          Esse processo ocorreu em velocidade muito maior do que o verificado nos países europeus,
          onde a urbanização se estendeu por dois séculos e foi acompanhada de industrialização
          gradual e construção de infraestrutura urbana.
        </p>
        <p>
          No Brasil, a urbanização acelerada dos anos 1950–1980 não foi acompanhada de planejamento
          urbano adequado. As cidades cresceram de forma desordenada, criando periferias sem
          saneamento, transporte precário e habitação informal. O resultado foi uma urbanização
          que incluiu geograficamente a população, mas a excluiu socialmente dos benefícios
          da vida urbana — aquilo que Milton Santos chamou de "urbanização corporativa" a serviço
          dos interesses econômicos dominantes.
        </p>

        <div className="lesson-highlight">
          <h3>Êxodo rural: causas e consequências</h3>
          <p>
            As causas do êxodo rural incluem: mecanização agrícola (que eliminou empregos no campo),
            seca e miséria no Nordeste, e atração dos centros urbanos (emprego, serviços, cultura).
            As consequências foram o inchaço das cidades sem infraestrutura adequada, formação de
            favelas e periferias precárias, e metropolização acelerada. Entre 1950 e 1980, a
            população urbana brasileira saltou de 19 para 82 milhões de pessoas.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏙️</span>
            <h3>Metrópoles</h3>
            <p>São Paulo (22 mi), Rio de Janeiro (13 mi) e Belo Horizonte (6 mi) concentram problemas e oportunidades urbanas.</p>
          </div>
          <div className="lesson-card">
            <span>🚌</span>
            <h3>Infraestrutura insuficiente</h3>
            <p>O crescimento rápido não foi acompanhado de habitação, saneamento, transporte e saúde adequados para todos.</p>
          </div>
          <div className="lesson-card">
            <span>🏚️</span>
            <h3>Favelização</h3>
            <p>Mais de 16 milhões de pessoas vivem em favelas no Brasil — locais de alta densidade e baixa infraestrutura, mas também de rica vida comunitária.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Segregação Socioespacial</span>
        <h2>2. Segregação Socioespacial: Centro × Periferia</h2>
        <p>
          A <strong>segregação socioespacial</strong> é o processo pelo qual diferentes grupos
          sociais ocupam espaços distintos na cidade, geralmente em função de renda e raça.
          Nas grandes cidades brasileiras, esse padrão assume a forma do modelo <strong>centro-periferia</strong>:
          os grupos de maior renda ocupam as áreas centrais e bem servidas de infraestrutura,
          enquanto os pobres são empurrados para as periferias distantes com menor acesso
          a serviços, empregos e transporte.
        </p>
        <p>
          Esse modelo não é natural — é resultado de políticas habitacionais, do mercado imobiliário
          especulativo e da ausência de regulação urbana que permitiu a valorização do centro às
          custas da degradação da periferia. A segregação socioespacial não apenas reflete as
          desigualdades de renda, como as aprofunda: morar na periferia significa ter menos
          acesso a serviços públicos, o que perpetua a desvantagem socioeconômica.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fenômeno</th>
                <th>Definição</th>
                <th>Exemplo brasileiro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Centro-periferia</strong></td>
                <td>Renda e infraestrutura diminuem do centro para as bordas da cidade</td>
                <td>SP: Jardins vs. Cidade Tiradentes (60 km de distância, abismo de serviços)</td>
              </tr>
              <tr>
                <td><strong>Gentrificação</strong></td>
                <td>Valorização imobiliária de bairro popular que expulsa moradores originais</td>
                <td>Pinheiros (SP), Santa Teresa (RJ), Lapa (RJ)</td>
              </tr>
              <tr>
                <td><strong>Condomínios fechados</strong></td>
                <td>Enclaves de riqueza que privatizam o espaço público e recusam a cidade</td>
                <td>Alphaville (SP/RJ/outros): cidades privadas com segurança e serviços próprios</td>
              </tr>
              <tr>
                <td><strong>Hiperperiferia</strong></td>
                <td>Áreas ainda mais distantes e precárias, sem transporte nem serviços</td>
                <td>Extremo leste e sul de São Paulo; periferia de Manaus e Belém</td>
              </tr>
              <tr>
                <td><strong>Favelas</strong></td>
                <td>Ocupações informais em terrenos públicos ou privados, com infraestrutura precária</td>
                <td>Rocinha (RJ), Paraisópolis (SP), Aglomerado da Serra (BH)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Planejamento Urbano</span>
        <h2>3. Planejamento Urbano e Habitação: Políticas e Contradições</h2>
        <p>
          O Estado brasileiro sempre interviu no espaço urbano, mas nem sempre de forma a reduzir
          desigualdades. Historicamente, as remoções forçadas de favelas serviram mais para
          valorizar o mercado imobiliário e preparar cidades para grandes eventos do que para
          garantir moradia digna à população mais pobre. A remoção da favela da Catacumba (RJ)
          nos anos 1960 e as remoções para a Copa de 2014 e a Olimpíada de 2016 seguiram
          esse padrão.
        </p>
        <p>
          O <strong>Estatuto das Cidades</strong> (Lei 10.257/2001) representou um avanço: regulamentou
          a função social da propriedade (prevista na CF/88), instituiu instrumentos como o IPTU
          progressivo e a usucapião urbana, e criou a obrigação de planos diretores participativos.
          No entanto, sua implementação tem sido limitada pela resistência do mercado imobiliário
          e pela fragilidade política das gestões municipais.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏗️</span>
            <h3>MCMV e habitação</h3>
            <p>O programa Minha Casa Minha Vida (2009) construiu milhões de unidades, mas frequentemente em extrema periferia sem infraestrutura — reforçando a segregação espacial.</p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Estatuto das Cidades</h3>
            <p>Lei 10.257/2001: função social da propriedade, IPTU progressivo, usucapião urbana. Regulamentou o Art. 182 da CF/88 sobre política urbana.</p>
          </div>
          <div className="lesson-card">
            <span>🏘️</span>
            <h3>Regularização fundiária</h3>
            <p>Programas de regularização de favelas (como o Habitar Brasil e PAC Urbanização) buscam integrar assentamentos informais à cidade formal.</p>
          </div>
          <div className="lesson-card">
            <span>🌆</span>
            <h3>Megaeventos e remoções</h3>
            <p>Copa 2014 e Olimpíada 2016 implicaram remoção de comunidades no Rio de Janeiro — processo denunciado por movimentos sociais como gentrificação forçada.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Violência Urbana</span>
        <h2>4. Violência Urbana: Homicídios, Tráfico e Racismo</h2>
        <p>
          O Brasil figura entre os países com maiores taxas de homicídios do mundo. De acordo com
          o <strong>Atlas da Violência</strong> (IPEA/FBSP), a violência letal afeta
          desproporcionalmente homens negros jovens das periferias urbanas. A explicação
          sociológica da violência não se reduz a fatores individuais ou culturais ("cultura da
          violência"), mas aponta para condições estruturais: desigualdade extrema, ausência
          do Estado nas periferias, economia do tráfico de drogas e racismo institucional
          na segurança pública.
        </p>
        <p>
          A socióloga Alba Zaluar foi pioneira no estudo da violência urbana brasileira, mostrando
          que o tráfico de drogas nas favelas cariocas não era apenas criminalidade, mas uma
          forma de organização social e econômica que preenchia o vácuo deixado pelo Estado.
          A guerra às drogas, centrada na repressão violenta, produziu mais mortes do que
          reduziu o consumo — alimentando um ciclo de violência que afeta desproporcionalmente
          as populações periféricas negras.
        </p>

        <div className="lesson-highlight">
          <h3>Raça e violência: dados do Atlas da Violência</h3>
          <p>
            Negros representam cerca de <strong>77% das vítimas de homicídio</strong> no Brasil,
            apesar de constituírem 56% da população. A chance de um jovem negro ser assassinado
            é 2,7 vezes maior do que a de um jovem branco. Esse dado evidencia o
            <strong> racismo estrutural</strong> que atravessa o sistema de segurança pública —
            desde a abordagem policial seletiva até a naturalização da morte nas periferias.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Segurança Pública</span>
        <h2>5. Segurança Pública: Estado, Polícia e Comunidades</h2>
        <p>
          A segurança pública brasileira é marcada por três dilemas centrais: a militarização
          da política de segurança (uso do exército em favelas, UPPs no Rio), o racismo
          institucional nas abordagens policiais, e a baixa taxa de resolução de crimes
          não letais. A polícia brasileira é uma das que mais mata no mundo: em 2022, houve
          cerca de 6.400 mortes decorrentes de intervenção policial, número recorde.
        </p>
        <p>
          O conceito de <strong>necropolítica</strong>, do filósofo camaronês Achille Mbembe
          (2003), tem sido aplicado ao contexto brasileiro para descrever como o Estado decide
          quem pode morrer — e que essa decisão recai sistematicamente sobre corpos negros das
          periferias. A expressão "deixar morrer" captura o abandono estatal dessas populações
          a uma violência que o Estado tolera ou mesmo pratica.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🚔</span>
            <h3>UPPs (Rio de Janeiro)</h3>
            <p>Unidades de Polícia Pacificadora instaladas em favelas do Rio entre 2008 e 2014. Reduziram homicídios inicialmente, mas fracassaram por falta de política social complementar.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Encarceramento seletivo</h3>
            <p>O Brasil tem a 3ª maior população carcerária do mundo. Negros são 67% dos presos; maioria por crimes não violentos como tráfico de pequenas quantidades.</p>
          </div>
          <div className="lesson-card">
            <span>🛡️</span>
            <h3>Fundo Público e segurança</h3>
            <p>Gastos com segurança pública superam os com habitação e cultura em muitos estados, sem correspondência em redução da violência nas periferias.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Direito à Cidade</span>
        <h2>6. Mobilidade Urbana e o Direito à Cidade</h2>
        <p>
          O filósofo francês <strong>Henri Lefebvre</strong> cunhou o conceito de <em>direito à
          cidade</em> (1968): o direito de todos os cidadãos de usufruir plenamente do espaço
          urbano, participar de sua produção e modificação. Nas cidades brasileiras, esse direito
          é profundamente desigual — determinado pela localização geográfica na cidade, que
          é, por sua vez, determinada pela renda e pela raça.
        </p>
        <p>
          A <strong>mobilidade urbana</strong> é um dos principais indicadores dessa desigualdade:
          enquanto moradores de bairros centrais têm fácil acesso a serviços e empregos, moradores
          da periferia gastam em média <strong>3 a 4 horas por dia</strong> em transporte coletivo
          precário para chegar ao trabalho. Isso não é apenas inconveniente — é uma forma de
          exclusão que reduz tempo livre, saúde e qualidade de vida, limitando a participação
          cívica e cultural dessas populações na vida urbana.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🚌</span>
            <h3>Transporte coletivo</h3>
            <p>Ônibus superlotados, tarifas altas e baixa cobertura nas periferias são marcas da exclusão de mobilidade que afeta principalmente trabalhadores de baixa renda.</p>
          </div>
          <div className="lesson-card">
            <span>🚲</span>
            <h3>Ciclovias e pedestres</h3>
            <p>Investimento em ciclovias e calçadas é maior em bairros de renda elevada, aprofundando desigualdades de mobilidade e acesso ao espaço público.</p>
          </div>
          <div className="lesson-card">
            <span>🏗️</span>
            <h3>MCMV e localização</h3>
            <p>O programa Minha Casa Minha Vida construiu unidades em extrema periferia sem infraestrutura — reforçando a segregação ao afastar pobres dos serviços urbanos.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Meio Ambiente Urbano</span>
        <h2>7. Vulnerabilidade Ambiental e Risco Urbano</h2>
        <p>
          A segregação socioespacial não é apenas social — é também ambiental. As populações
          de menor renda são forçadas a ocupar áreas de maior risco ambiental: encostas suscetíveis
          a deslizamentos, várzeas sujeitas a inundações, proximidade de lixões e indústrias
          poluentes. O fenômeno é denominado <strong>racismo ambiental</strong>: a distribuição
          desigual dos riscos ambientais segundo critérios de raça e classe.
        </p>
        <p>
          As enchentes e deslizamentos que periodicamente devastam regiões metropolitanas
          brasileiras — Região Serrana do RJ (2011, 916 mortos), São Sebastião (SP, 2023) —
          afetam majoritariamente moradores de periferias e favelas em encostas. Esses desastres
          são frequentemente apresentados como "naturais", mas têm causas sociais claras:
          especulação imobiliária que expulsa pobres para áreas de risco, ausência de
          infraestrutura de drenagem e saneamento, e falta de monitoramento e alerta precoce.
        </p>

        <div className="lesson-highlight">
          <h3>Desastres "naturais" com causas sociais</h3>
          <p>
            O geógrafo Mike Davis analisou o que chamou de "planeta de favelas": o crescimento
            das megafavelas ao redor do mundo como produto do capitalismo global, não de
            escolhas individuais. No Brasil, essa perspectiva revela que enchentes e deslizamentos
            em favelas são previsíveis e evitáveis — resultam de políticas de habitação, regulação
            fundiária e investimento público que privilegiam as áreas nobres em detrimento das periféricas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Movimentos Sociais Urbanos</span>
        <h2>8. Movimentos Sociais Urbanos e a Disputa pela Cidade</h2>
        <p>
          A cidade não é apenas um espaço de exclusão — é também um espaço de organização e
          resistência. Os <strong>movimentos sociais urbanos</strong> disputam o espaço da cidade,
          reivindicando moradia, transporte, serviços públicos e o direito de permanecer nos
          bairros em que vivem. No Brasil, esses movimentos têm história longa e conquistas
          concretas.
        </p>
        <p>
          O sociólogo Manuel Castells, em <em>A Questão Urbana</em> (1972), foi pioneiro na análise
          dos movimentos sociais urbanos como atores políticos que contestam a lógica do
          capital na produção do espaço. No Brasil, esses movimentos influenciaram diretamente
          a Constituição de 1988 — que incluiu um capítulo sobre política urbana (Art. 182-183) —
          e o Estatuto das Cidades (2001).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Movimento</th>
                <th>Foco</th>
                <th>Conquista principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>MTST</strong> (Movimento dos Trabalhadores Sem-Teto)</td>
                <td>Direito à moradia urbana; ocupações de terrenos ociosos</td>
                <td>Negociações com governo federal que resultaram em novas unidades do MCMV</td>
              </tr>
              <tr>
                <td><strong>MNLM</strong> (Movimento Nacional de Luta pela Moradia)</td>
                <td>Regularização fundiária e urbanização de favelas</td>
                <td>Contribuição para o Estatuto das Cidades e a Lei de Regularização Fundiária</td>
              </tr>
              <tr>
                <td><strong>Junções de Junho (2013)</strong></td>
                <td>Tarifa zero no transporte público, reforma política</td>
                <td>Redução da tarifa de ônibus em dezenas de cidades brasileiras</td>
              </tr>
              <tr>
                <td><strong>Favela não se cala</strong></td>
                <td>Direito de permanência contra remoções</td>
                <td>Resistência às remoções da Copa 2014 e Rio 2016; visibilidade internacional</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cidades Inteligentes</span>
        <h2>9. Tecnologia, Vigilância e Desigualdade Digital nas Cidades</h2>
        <p>
          A emergência das chamadas "cidades inteligentes" (smart cities) trouxe novas questões
          sobre vigilância, dados e desigualdade urbana. Sistemas de câmeras com reconhecimento
          facial, aplicativos de mobilidade (Uber, 99) e plataformas de delivery transformaram
          a experiência urbana — mas de forma profundamente desigual, replicando e intensificando
          as assimetrias socioespaciais já existentes.
        </p>
        <p>
          O reconhecimento facial, por exemplo, tem taxa de erro significativamente maior para
          rostos negros — levando a prisões equivocadas de pessoas inocentes. A chamada
          <strong> vigilância algorítmica</strong> reproduz o racismo estrutural ao codificá-lo
          em sistemas automáticos que não são percebidos como discriminatórios justamente por
          serem tecnológicos. As cidades inteligentes, se não governadas com critérios de
          equidade, podem intensificar a segregação digital e física.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📱</span>
            <h3>Uberização do trabalho</h3>
            <p>Plataformas de transporte e entrega precarizam o trabalho urbano: sem proteção social, jornadas extensas, renda imprevisível — afeta especialmente trabalhadores negros periféricos.</p>
          </div>
          <div className="lesson-card">
            <span>📷</span>
            <h3>Vigilância seletiva</h3>
            <p>Câmeras de reconhecimento facial têm maior taxa de erro para pessoas negras, reproduzindo discriminação racial no sistema de segurança pública digital.</p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Exclusão digital</h3>
            <p>Moradores da periferia têm menor acesso a internet de alta velocidade, limitando acesso a serviços públicos digitais e ao trabalho remoto — nova dimensão da segregação.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Campo e Cidade</span>
        <h2>10. Relações Campo-Cidade: Agronegócio, Êxodo e Cidades Médias</h2>
        <p>
          A relação entre campo e cidade no Brasil contemporâneo é mais complexa do que a simples
          migração rural-urbana. O <strong>agronegócio</strong> criou cidades médias dinâmicas
          no interior (Sorriso-MT, Lucas do Rio Verde-MT, Sete Lagoas-MG) com alta renda per capita,
          mas profunda desigualdade interna: a riqueza do agronegócio não se distribui pelos
          trabalhadores rurais e urbanos locais. O agricultor familiar e os trabalhadores safristas
          vivem em condições precárias enquanto os grandes produtores e as cadeias agroindustriais
          acumulam.
        </p>
        <p>
          O <strong>êxodo rural</strong> continua no século XXI, mas agora alimenta não apenas as
          metrópoles, mas também as cidades médias do interior. As regiões metropolitanas como São
          Paulo e Rio de Janeiro passaram a expulsar populações de volta para cidades menores —
          o chamado <strong>êxodo metropolitano</strong> —, resultado da degradação das condições
          de vida nas grandes metrópoles e da expansão econômica do interior ligada ao agronegócio
          e às indústrias regionais.
        </p>

        <div className="lesson-highlight">
          <h3>Milton Santos e a urbanização corporativa</h3>
          <p>
            O geógrafo Milton Santos cunhou o conceito de <strong>urbanização corporativa</strong>
            para descrever o processo pelo qual as cidades brasileiras foram construídas a serviço
            das grandes empresas e não das populações. Para Santos, a cidade brasileira não é apenas
            desigual — ela é estruturada para ser desigual, pois a especulação imobiliária,
            a concentração de infraestrutura e os investimentos públicos seletivos servem
            sistematicamente aos interesses do capital em detrimento das classes populares.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Urbanização no Brasil"
          statement={
            <p>
              Atualmente, aproximadamente qual porcentagem da população brasileira vive em áreas urbanas?
            </p>
          }
          options={[
            { letter: "A", text: "Cerca de 50%, com equilíbrio entre campo e cidade." },
            { letter: "B", text: "Cerca de 65% — maioria urbana, mas com grande população rural." },
            { letter: "C", text: "Mais de 87% — um dos países mais urbanizados do mundo.", correct: true },
            { letter: "D", text: "Menos de 40% — o Brasil ainda é predominantemente rural." },
            { letter: "E", text: "Exatamente 100% — o campo foi completamente esvaziado." },
          ]}
          resolution={
            <p>
              O Brasil urbanizou-se aceleradamente: de menos de 40% em 1950 para mais de 87%
              atualmente, tornando-se um dos países mais urbanizados do mundo — processo
              impulsionado pelo êxodo rural e pela industrialização a partir dos anos 1950.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Segregação socioespacial"
          statement={
            <p>
              O processo pelo qual a valorização imobiliária de bairros populares expulsa seus
              moradores originais, substituindo-os por camadas de maior renda, é denominado:
            </p>
          }
          options={[
            { letter: "A", text: "Êxodo rural." },
            { letter: "B", text: "Metropolização." },
            { letter: "C", text: "Gentrificação.", correct: true },
            { letter: "D", text: "Periferização." },
            { letter: "E", text: "Conurbação." },
          ]}
          resolution={
            <p>
              Gentrificação é o processo de "enobrecimento" de bairros populares: investimentos
              em infraestrutura e cultura valorizam o espaço, elevando aluguéis e preços, o que
              expulsa moradores originais de baixa renda. Exemplos: Pinheiros (SP), Lapa (RJ).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Violência e raça"
          statement={
            <p>
              Segundo o Atlas da Violência (IPEA), qual grupo é desproporcionalmente mais afetado
              pela violência letal no Brasil?
            </p>
          }
          options={[
            { letter: "A", text: "Mulheres brancas de classe média." },
            { letter: "B", text: "Idosos brancos em áreas rurais." },
            { letter: "C", text: "Homens negros jovens das periferias urbanas.", correct: true },
            { letter: "D", text: "Imigrantes estrangeiros nas grandes cidades." },
            { letter: "E", text: "Trabalhadores rurais do Centro-Oeste." },
          ]}
          resolution={
            <p>
              O Atlas da Violência mostra que negros representam cerca de 77% das vítimas de
              homicídio no Brasil. Homens negros jovens das periferias são o grupo com maior
              risco de morte violenta — evidência do racismo estrutural no sistema de segurança.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Direito à cidade"
          statement={
            <p>
              O conceito de "direito à cidade", desenvolvido por Henri Lefebvre, refere-se a:
            </p>
          }
          options={[
            { letter: "A", text: "O direito de proprietários de imóveis definirem o uso do espaço urbano." },
            { letter: "B", text: "O direito legal de todos os cidadãos obterem registro de propriedade no cadastro municipal." },
            { letter: "C", text: "O direito de todos os cidadãos de usufruir plenamente do espaço urbano, participar de sua produção e modificação.", correct: true },
            { letter: "D", text: "O direito exclusivo dos moradores do centro de definir as políticas de mobilidade." },
            { letter: "E", text: "O direito constitucional ao voto nas eleições municipais para vereadores." },
          ]}
          resolution={
            <p>
              Para Lefebvre, o direito à cidade vai além do acesso físico: é o direito de
              participar da vida urbana em sua plenitude, de co-produzir o espaço público e
              de ter voz nas decisões sobre a cidade. Nas metrópoles brasileiras, esse direito
              é profundamente desigual, dividindo-se por renda, raça e localização.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Periferia e exclusão"
          statement={
            <p>
              "Moradores da periferia de São Paulo chegam a gastar 4 horas por dia em transporte
              coletivo. Além do tempo perdido, esses trabalhadores têm menor acesso a parques,
              hospitais de qualidade e escolas com melhores índices de desempenho."
              <br /><br />
              Esse cenário ilustra qual conceito sociológico?
            </p>
          }
          options={[
            { letter: "A", text: "Êxodo rural — trabalhadores migram do campo para a cidade." },
            { letter: "B", text: "Gentrificação — moradores ricos chegam à periferia buscando imóveis baratos." },
            { letter: "C", text: "Segregação socioespacial — a localização geográfica na cidade reproduz e aprofunda desigualdades sociais.", correct: true },
            { letter: "D", text: "Anomia — ausência de normas sociais que organize a mobilidade urbana." },
            { letter: "E", text: "Burocracia patrimonialista — o Estado é incapaz de organizar o transporte público." },
          ]}
          resolution={
            <p>
              A segregação socioespacial significa que a posição na cidade não é neutra:
              moradores da periferia têm menos acesso a serviços públicos, emprego, lazer e
              saúde. A desigualdade não é apenas de renda — é geográfica, materializada no
              espaço urbano e reproduzida cotidianamente pela estrutura da cidade.
            </p>
          }
        />
      </section>
    </article>
  );
}
