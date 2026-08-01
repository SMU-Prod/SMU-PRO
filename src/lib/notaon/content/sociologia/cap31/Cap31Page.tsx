"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap31Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 31</span>
          <h1>Formação da Sociedade Brasileira</h1>
          <p>
            O Brasil é produto de uma colonização violenta que mesclou indígenas, africanos e europeus
            numa estrutura profundamente desigual. Compreender essa formação histórico-social é
            indispensável para interpretar as desigualdades, os conflitos e a identidade nacional
            contemporânea — temas recorrentes nas questões do ENEM sobre Sociologia.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Raízes Coloniais</span>
        <h2>1. A Colonização Portuguesa e Seus Pilares Estruturantes</h2>
        <p>
          A colonização do Brasil (1500–1822) foi organizada em torno de três pilares que moldaram a
          sociedade brasileira por séculos e cujos efeitos persistem até hoje nas desigualdades de
          renda, terra e raça. Diferentemente das colônias de povoamento inglesas na América do Norte,
          o Brasil foi uma colônia de exploração: a metrópole não buscava construir uma nova sociedade,
          mas extrair riquezas para o enriquecimento português e europeu.
        </p>
        <p>
          A organização colonial assentava-se sobre uma hierarquia rígida de raça, propriedade e status
          que determinava desde os direitos civis até as possibilidades de mobilidade social. O
          sociólogo Florestan Fernandes denominará esse conjunto de "ordem escravocrata e senhorial",
          cujo desmantelamento incompleto explica muito da desigualdade estrutural contemporânea.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Monocultura de exportação</h3>
            <p>Cana-de-açúcar, algodão, café — produção voltada ao mercado externo, sem diversificação interna. O modelo plantation foi central durante toda a era colonial.</p>
          </div>
          <div className="lesson-card">
            <span>🏚️</span>
            <h3>Latifúndio</h3>
            <p>Grande propriedade de terra nas mãos de poucos — herança colonial que persiste no Gini fundiário atual, um dos mais concentrados do mundo.</p>
          </div>
          <div className="lesson-card">
            <span>⛓️</span>
            <h3>Escravidão</h3>
            <p>Base do sistema produtivo colonial: cerca de 4,9 milhões de africanos escravizados foram trazidos ao Brasil, o maior contingente do mundo.</p>
          </div>
          <div className="lesson-card">
            <span>👑</span>
            <h3>Patrimonialismo</h3>
            <p>Confusão entre o público e o privado: o Estado como extensão dos interesses das elites — tema central de Raymundo Faoro em "Os Donos do Poder".</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>O Brasil foi o último país das Américas a abolir a escravidão</h3>
          <p>
            A escravidão foi abolida em 13 de maio de 1888 com a Lei Áurea, assinada pela Princesa
            Isabel. O Brasil recebeu o maior contingente de africanos escravizados do mundo —
            estima-se que cerca de <strong>4,9 milhões</strong> de pessoas foram trazidas à força
            entre 1500 e 1850. Essa herança explica grande parte das desigualdades raciais
            que persistem até hoje, já que a abolição não foi acompanhada de políticas de integração.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Povos Formadores</span>
        <h2>2. Os Três Povos Formadores da Sociedade Brasileira</h2>
        <p>
          A sociedade brasileira é resultado do encontro — frequentemente violento e desigual —
          de três matrizes civilizatórias distintas. Cada uma contribuiu com língua, práticas
          culturais, conhecimentos e formas de organização social, mas o processo se deu em contexto
          de dominação colonial que hierarquizou essas contribuições segundo critérios raciais e
          econômicos impostos pela Europa.
        </p>
        <p>
          Além dos três povos fundadores, o Brasil recebeu, especialmente entre 1880 e 1930,
          grandes ondas de imigração europeia (italianos, alemães, espanhóis, poloneses) e
          asiática (japoneses), que se concentraram principalmente no Sul e Sudeste, onde
          formaram comunidades com identidade cultural própria e influenciaram a culinária,
          a arquitetura e a organização econômica regional.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Matriz</th>
                <th>Contribuição cultural</th>
                <th>Impacto do colonialismo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Indígenas</strong></td>
                <td>Língua (Tupi influenciou o português), culinária, conhecimento botânico, práticas agrícolas, topônimos</td>
                <td>Colapso demográfico (90% morreram de doenças e violência); despossessão territorial; genocídio cultural</td>
              </tr>
              <tr>
                <td><strong>Africanos</strong></td>
                <td>Força de trabalho, religião (candomblé, umbanda), música (samba, batuque), culinária (acarajé, vatapá), língua</td>
                <td>Escravidão por séculos; desumanização; separação de famílias e culturas; sequelas de desigualdade racial</td>
              </tr>
              <tr>
                <td><strong>Europeus (Portugal)</strong></td>
                <td>Idioma (português), religião católica, sistema jurídico, arquitetura, organização política</td>
                <td>Colonização, exploração de recursos, imposição cultural e religiosa, criação do Estado Nacional</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Democracia Racial</span>
        <h2>3. O Mito da Democracia Racial</h2>
        <p>
          Em 1933, o sociólogo pernambucano <strong>Gilberto Freyre</strong> publicou
          <em> Casa-Grande e Senzala</em>, obra que interpretou a miscigenação racial brasileira
          de forma positiva. Para Freyre, a convivência entre senhores e escravizados teria
          gerado uma sociedade mais tolerante e democrática em termos raciais do que outras
          nações — uma "democracia racial" fundada na miscigenação e no sincretismo cultural.
        </p>
        <p>
          Esse conceito tornou-se um dos mitos mais persistentes da identidade nacional brasileira,
          sendo usado por décadas para distinguir o Brasil do apartheid sul-africano e da
          segregação norte-americana. No entanto, foi amplamente criticado pela sociologia crítica,
          pelo movimento negro e pelos dados empíricos que evidenciam a profunda desigualdade racial
          estrutural que persiste no país.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📊</span>
            <h3>Florestan Fernandes</h3>
            <p>Demonstrou empiricamente que a abolição não garantiu igualdade: negros foram relegados às piores posições sociais, em "A Integração do Negro na Sociedade de Classes" (1964).</p>
          </div>
          <div className="lesson-card">
            <span>✊</span>
            <h3>Movimento Negro</h3>
            <p>Denunciou o mito como instrumento ideológico que naturaliza o racismo ao torná-lo invisível, dificultando políticas de reparação e o reconhecimento do problema.</p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>IBGE e Atlas Racial</h3>
            <p>Dados mostram que negros ganham menos, vivem menos, são mais encarcerados e morrem mais por homicídio que brancos — contradizendo empiricamente a "harmonia racial".</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estado Nacional</span>
        <h2>4. Independência, Estado Nacional e Patrimonialismo</h2>
        <p>
          A independência de 1822 foi um processo controlado pela elite agrária luso-brasileira,
          que manteve a escravidão e o latifúndio intactos. Diferentemente das revoluções americana
          e francesa, a independência brasileira não aboliu privilégios de classe nem distribuiu terra
          — foi uma "independência conservadora" que preservou a ordem social colonial sob nova embalagem
          política, agora como monarquia constitucional com Dom Pedro I à frente.
        </p>
        <p>
          <strong>Raymundo Faoro</strong>, em <em>Os Donos do Poder</em> (1958), analisou o
          <strong> patrimonialismo</strong> brasileiro: a tendência histórica de tratar o Estado
          como extensão do patrimônio privado das elites, gerando corrupção sistêmica e dificultando
          a formação de uma burocracia impessoal e democrática — fenômeno que remonta ao Estado
          português do Antigo Regime e persiste nas relações políticas contemporâneas.
        </p>

        <div className="lesson-highlight">
          <h3>Sérgio Buarque de Holanda e o "Homem Cordial"</h3>
          <p>
            Em <em>Raízes do Brasil</em> (1936), Sérgio Buarque de Holanda descreveu o "homem cordial"
            brasileiro — não como gentil, mas como alguém que mistura afeto e poder, dificultando a
            impessoalidade necessária à vida pública moderna. Para ele, o Brasil precisava superar a
            herança ibérica de personalismo e parentesco para construir instituições democráticas sólidas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Escravidão e Pós-abolição</span>
        <h2>5. A Escravidão e o Pós-abolição: Integração Incompleta</h2>
        <p>
          O Brasil manteve a escravidão por mais de três séculos — de 1530 a 1888 — e foi o último
          país das Américas a abolir o trabalho escravo. Durante esse período, foram trazidas
          forçadamente cerca de 4,9 milhões de pessoas africanas, de etnias diversas como os Yorubá,
          os Bantu, os Fula e os Ewe, cada qual com língua, religião e práticas culturais próprias
          que foram violentamente suprimidas ou subterraneamente preservadas.
        </p>
        <p>
          A abolição de 1888, embora marco histórico fundamental, não foi acompanhada de nenhuma
          política de integração social: não houve distribuição de terra, não houve acesso garantido
          à educação, não houve indenização. Os ex-escravizados foram lançados a um mercado de
          trabalho já preenchido pela mão de obra imigrante europeia — especialmente no Sudeste —
          e relegados às margens da sociedade urbana, ocupando cortiços, morros e periferias.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Período</th>
                <th>Evento</th>
                <th>Impacto social</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1530–1600</td>
                <td>Início do tráfico negreiro para o Brasil</td>
                <td>Substituição gradual do trabalho indígena pelo africano nas lavouras de cana</td>
              </tr>
              <tr>
                <td>1580–1694</td>
                <td>Quilombo dos Palmares</td>
                <td>Maior forma de resistência à escravidão; até 30 mil habitantes</td>
              </tr>
              <tr>
                <td>1850</td>
                <td>Lei Eusébio de Queirós</td>
                <td>Proibição do tráfico transatlântico, mas escravidão interna continua</td>
              </tr>
              <tr>
                <td>1871</td>
                <td>Lei do Ventre Livre</td>
                <td>Filhos de escravizadas nascem livres, mas permanecem com os senhores até 21 anos</td>
              </tr>
              <tr>
                <td>1888</td>
                <td>Lei Áurea</td>
                <td>Abolição sem reparação: ex-escravizados tornam-se mão de obra livre desassistida</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Raça e Estrutura Social</span>
        <h2>6. Racismo Estrutural e Desigualdade Racial Contemporânea</h2>
        <p>
          O conceito de <strong>racismo estrutural</strong>, popularizado no Brasil pelo jurista
          Silvio Luiz de Almeida em <em>Racismo Estrutural</em> (2018), distingue três dimensões
          do racismo: o individualista (preconceito de indivíduo), o institucional (discriminação
          em instituições) e o estrutural (racismo como parte do funcionamento normal das estruturas
          econômicas, jurídicas e políticas). No Brasil, o racismo estrutural é produto direto
          da formação colonial e se reproduz mesmo sem intenção discriminatória explícita.
        </p>
        <p>
          Os dados do IBGE e do IPEA documentam a persistência dessa estrutura: negros (pretos e
          pardos) são 56% da população, mas representam cerca de 75% dos mais pobres, 77% das
          vítimas de homicídio, e têm menor acesso à educação superior e ao mercado formal de
          trabalho. Essa não é coincidência — é o resultado acumulado de séculos de exclusão
          estrutural que a abolição não desfez.
        </p>

        <div className="lesson-highlight">
          <h3>Indicadores de desigualdade racial no Brasil (IBGE/PNAD)</h3>
          <p>
            Negros ganham em média 57% do salário de brancos; a taxa de analfabetismo entre negros
            é 2,5 vezes maior; a expectativa de vida de negros é em média 4 anos menor; a
            probabilidade de um jovem negro ser assassinado é 2,7 vezes maior do que a de um
            jovem branco. Esses dados evidenciam que a desigualdade racial brasileira não é
            residual — é estrutural.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Imigração e Identidade</span>
        <h2>7. Imigração Europeia e Asiática: Branqueamento e Pluralismo</h2>
        <p>
          Entre 1870 e 1930, o Brasil recebeu cerca de 3,8 milhões de imigrantes europeus —
          italianos, espanhóis, alemães e poloneses — além de japoneses (a partir de 1908),
          sírios, libaneses e outros grupos. Essa imigração não foi casual: o Estado brasileiro,
          sob a influência do racismo científico europeu, adotou uma <strong>política de
          branqueamento</strong> que buscava "melhorar a raça" substituindo progressivamente
          a população negra por imigrantes brancos.
        </p>
        <p>
          Os imigrantes se estabeleceram principalmente nas fazendas de café paulistas, nos
          núcleos coloniais do Sul (Colônia Caxias, Blumenau, Novo Hamburgo) e nas zonas
          industriais emergentes. Sua inserção gerou processos complexos de manutenção identitária
          — com língua, culinária e práticas religiosas próprias — e de aculturação gradual ao
          contexto brasileiro, criando as identidades hiphenadas (ítalo-brasileiro, nipo-brasileiro)
          que enriquecem o mosaico cultural nacional.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🇮🇹</span>
            <h3>Italianos</h3>
            <p>Maior grupo imigrante: 1,5 mi até 1930. Concentraram-se em São Paulo e Rio Grande do Sul; influenciaram a culinária, o idioma e a política sindical.</p>
          </div>
          <div className="lesson-card">
            <span>🇩🇪</span>
            <h3>Alemães</h3>
            <p>Primeiro grupo a chegar (1824, Nova Friburgo e São Leopoldo). Formaram comunidades fechadas no Sul, preservando língua e cultura por gerações.</p>
          </div>
          <div className="lesson-card">
            <span>🇯🇵</span>
            <h3>Japoneses</h3>
            <p>Chegaram a partir de 1908 em Kasato Maru. Brasil tem a maior comunidade nipo-descendente fora do Japão — 1,5 milhão de pessoas.</p>
          </div>
          <div className="lesson-card">
            <span>🇸🇾</span>
            <h3>Árabes (sírios e libaneses)</h3>
            <p>Chegaram principalmente entre 1880 e 1930. Influenciaram o comércio, a culinária (quibe, esfiha) e produziram figuras políticas como Michel Temer.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pensamento Social Brasileiro</span>
        <h2>8. Interpretações do Brasil: Os Grandes Clássicos</h2>
        <p>
          Ao longo do século XX, diversos pensadores buscaram interpretar a especificidade da
          formação social brasileira. Esses "intérpretes do Brasil" produziram obras que dialogam
          com as grandes questões do ENEM sobre identidade nacional, desigualdade e modernização.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>Obra</th>
                <th>Conceito central</th>
                <th>Tese principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Gilberto Freyre</strong></td>
                <td><em>Casa-Grande e Senzala</em> (1933)</td>
                <td>Democracia racial</td>
                <td>A miscigenação gerou uma sociedade tolerante racialmente (visão otimista, criticada)</td>
              </tr>
              <tr>
                <td><strong>Sérgio Buarque de Holanda</strong></td>
                <td><em>Raízes do Brasil</em> (1936)</td>
                <td>Homem cordial</td>
                <td>A herança ibérica criou um Brasil personalista que dificulta a modernização institucional</td>
              </tr>
              <tr>
                <td><strong>Caio Prado Jr.</strong></td>
                <td><em>Formação do Brasil Contemporâneo</em> (1942)</td>
                <td>Sentido da colonização</td>
                <td>O Brasil foi formado para servir ao mercado externo — essa estrutura explica o subdesenvolvimento</td>
              </tr>
              <tr>
                <td><strong>Raymundo Faoro</strong></td>
                <td><em>Os Donos do Poder</em> (1958)</td>
                <td>Patrimonialismo</td>
                <td>O Estado brasileiro é controlado por um estamento burocrático que o usa para fins privados</td>
              </tr>
              <tr>
                <td><strong>Florestan Fernandes</strong></td>
                <td><em>A Integração do Negro na Sociedade de Classes</em> (1964)</td>
                <td>Preconceito de marca</td>
                <td>A abolição não integrou negros — eles foram relegados às margens da ordem capitalista competitiva</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Políticas Afirmativas</span>
        <h2>9. Políticas Afirmativas: Do Movimento Negro às Cotas</h2>
        <p>
          As <strong>políticas afirmativas</strong> são ações positivas do Estado para corrigir
          desigualdades históricas e garantir representação de grupos sub-representados em espaços
          de poder e prestígio. No Brasil, o debate sobre cotas raciais surgiu com força nos anos
          1990-2000, impulsionado pelo movimento negro e pela pressão internacional após a
          Conferência de Durban (2001), onde o Brasil reconheceu oficialmente o racismo como
          problema estrutural.
        </p>
        <p>
          A <strong>Lei de Cotas</strong> (Lei 12.711/2012) estabeleceu a reserva de vagas nas
          universidades e institutos federais para estudantes de escola pública, negros, pardos,
          indígenas e pessoas com deficiência. Avaliações posteriores mostraram que cotistas
          têm desempenho acadêmico igual ou superior aos não-cotistas, refutando o argumento
          de que as cotas rebaixariam a qualidade do ensino superior.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✊</span>
            <h3>Movimento Negro Unificado (MNU)</h3>
            <p>Fundado em 1978, foi o principal articulador das demandas do movimento negro no Brasil, incluindo a luta por cotas e pelo Dia da Consciência Negra (20/11).</p>
          </div>
          <div className="lesson-card">
            <span>🎓</span>
            <h3>UNEB pioneira</h3>
            <p>A Universidade do Estado da Bahia (UNEB) foi a primeira a adotar cotas raciais no Brasil, em 2002, antes da lei federal de 2012.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>STF e constitucionalidade</h3>
            <p>Em 2012, o STF declarou por unanimidade a constitucionalidade das cotas raciais, reconhecendo a necessidade de reparação histórica.</p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Impacto das cotas</h3>
            <p>O número de negros no ensino superior triplicou entre 2000 e 2020; cotistas têm índice de formatura superior à média — evidência de sucesso da política.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Identidade Nacional</span>
        <h2>10. Identidade Brasileira: Tensões entre Unidade e Diversidade</h2>
        <p>
          A identidade nacional brasileira é, simultaneamente, uma construção e um campo de disputa.
          As narrativas sobre "quem somos" como povo oscilam entre a celebração da diversidade
          (o "país mestiço" de Freyre) e o reconhecimento das hierarquias e violências que
          produziram essa diversidade. O ENEM frequentemente explora essa tensão em textos sobre
          cultura, arte e política.
        </p>
        <p>
          O <strong>movimento modernista</strong> dos anos 1920 (Semana de Arte Moderna de 1922)
          foi um momento decisivo nessa construção identitária: intelectuais como Oswald de
          Andrade (Manifesto Antropofágico, 1928) propuseram "deglutir" a cultura europeia para
          criar algo genuinamente brasileiro — uma metáfora que reconhecia a influência estrangeira
          sem apagá-la, mas transformando-a. Essa perspectiva criativa sobre a formação cultural
          brasileira contrasta com as interpretações mais pessimistas sobre o subdesenvolvimento.
        </p>

        <div className="lesson-highlight">
          <h3>Identidade nacional como construção social</h3>
          <p>
            Para a Sociologia, identidades nacionais não são naturais — são construídas historicamente
            por meio de símbolos, narrativas, instituições e rituais que criam o sentimento de
            pertencer a uma comunidade imaginada (Benedict Anderson). No Brasil, essa construção
            passou pelo mito da democracia racial, pelo futebol como símbolo nacional, pelo samba
            como música "brasileira" (antes perseguido pela polícia) e pela culinária como espaço
            de síntese das três matrizes. Disputar essas narrativas é disputar o próprio poder.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Pilares da colonização"
          statement={
            <p>
              Assinale a alternativa que identifica corretamente os três pilares estruturantes
              da colonização portuguesa no Brasil:
            </p>
          }
          options={[
            { letter: "A", text: "Industrialização, urbanização e imigração europeia." },
            { letter: "B", text: "Monocultura de exportação, latifúndio e escravidão.", correct: true },
            { letter: "C", text: "Federalismo, presidencialismo e sufrágio universal." },
            { letter: "D", text: "Mineração, manufatura e comércio interno." },
            { letter: "E", text: "Catequização, democracia participativa e autonomia indígena." },
          ]}
          resolution={
            <p>
              A colonização portuguesa organizou o Brasil em torno da monocultura voltada à
              exportação (pau-brasil, cana, café), das grandes propriedades de terra (latifúndio)
              e do trabalho escravo — pilares que moldaram as desigualdades sociais brasileiras.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Mito da democracia racial"
          statement={
            <p>
              O conceito de "democracia racial", associado à obra de Gilberto Freyre, foi
              criticado por sociólogos como Florestan Fernandes porque:
            </p>
          }
          options={[
            { letter: "A", text: "Defendia a superioridade racial europeia sobre africanos e indígenas." },
            { letter: "B", text: "Negava qualquer contribuição africana para a cultura brasileira." },
            { letter: "C", text: "Naturalizava o racismo ao afirmar uma harmonia racial que os dados empíricos desmentem, tornando a desigualdade racial invisível.", correct: true },
            { letter: "D", text: "Defendia a segregação racial no modelo dos EUA como solução para conflitos étnicos." },
            { letter: "E", text: "Propunha a abolição da escravidão antes de 1888 como condição para a democracia." },
          ]}
          resolution={
            <p>
              Florestan Fernandes demonstrou em "A Integração do Negro na Sociedade de Classes"
              (1964) que a abolição não gerou igualdade. O mito da democracia racial funciona
              ideologicamente ao naturalizar e invisibilizar o racismo, dificultando políticas
              de reparação.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Intérpretes do Brasil"
          statement={
            <p>
              Raymundo Faoro, em "Os Donos do Poder" (1958), analisou o patrimonialismo brasileiro
              como a tendência histórica de:
            </p>
          }
          options={[
            { letter: "A", text: "Garantir a separação entre público e privado na administração estatal." },
            { letter: "B", text: "Tratar o Estado como extensão do patrimônio privado das elites, gerando corrupção e dificultando a impessoalidade burocrática.", correct: true },
            { letter: "C", text: "Distribuir o poder político de forma igualitária entre todas as classes sociais." },
            { letter: "D", text: "Subordinar os interesses das elites aos interesses nacionais por meio de um Estado forte e autônomo." },
            { letter: "E", text: "Criar uma burocracia eficiente e meritocrática no modelo weberiano desde o período imperial." },
          ]}
          resolution={
            <p>
              Para Faoro, o patrimonialismo significa que as elites brasileiras historicamente
              utilizaram o Estado como instrumento de seus interesses privados, impedindo a
              formação de uma burocracia impessoal e de uma cidadania plena — herança colonial
              que explica muito da corrupção e das desigualdades contemporâneas.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Racismo estrutural"
          statement={
            <p>
              O conceito de <strong>racismo estrutural</strong>, desenvolvido por Silvio de Almeida,
              distingue-se do racismo individual porque:
            </p>
          }
          options={[
            { letter: "A", text: "Refere-se apenas a atos explícitos de discriminação praticados por pessoas com intenção racista." },
            { letter: "B", text: "Descreve o racismo como parte do funcionamento normal das estruturas econômicas, jurídicas e políticas, reproduzindo desigualdade mesmo sem intenção discriminatória explícita.", correct: true },
            { letter: "C", text: "Identifica o racismo como fenômeno exclusivo de sociedades que adotaram leis segregacionistas formais." },
            { letter: "D", text: "Argumenta que o racismo no Brasil é resultado exclusivo de fatores culturais, sem relação com a escravidão." },
            { letter: "E", text: "Propõe que o racismo foi superado no Brasil com a Constituição de 1988." },
          ]}
          resolution={
            <p>
              O racismo estrutural não depende de indivíduos preconceituosos: ele se reproduz
              nas instituições, no mercado de trabalho, no sistema de justiça e na educação,
              gerando desigualdades sistêmicas que não exigem intenção discriminatória para
              funcionar — daí a necessidade de políticas estruturais, não apenas educativas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Desigualdade racial e herança colonial"
          statement={
            <p>
              Dados do IBGE mostram que, no Brasil, pessoas negras ganham em média 57% do salário
              de pessoas brancas, são maioria no sistema prisional e têm menor expectativa de vida.
              <br /><br />
              À luz da Sociologia, qual interpretação mais adequada conecta esses dados à
              formação histórica do Brasil?
            </p>
          }
          options={[
            { letter: "A", text: "A desigualdade racial resulta de diferenças biológicas entre os grupos." },
            { letter: "B", text: "A escravidão foi abolida há mais de 130 anos, então as desigualdades atuais não têm relação com ela." },
            { letter: "C", text: "A herança da escravidão, combinada com o mito da democracia racial que impediu políticas reparatórias, produziu e reproduz desigualdades raciais estruturais.", correct: true },
            { letter: "D", text: "A desigualdade racial no Brasil é similar à de outros países e não apresenta especificidades históricas." },
            { letter: "E", text: "As desigualdades decorrem exclusivamente de fatores educacionais, independentes de raça." },
          ]}
          resolution={
            <p>
              A escravidão deixou um legado estrutural: negros foram libertados sem terra, sem
              educação e sem reparação, enquanto o mito da democracia racial impedia o
              reconhecimento do problema e a implementação de políticas afirmativas. O racismo
              estrutural é, portanto, produto direto dessa formação histórica.
            </p>
          }
        />
      </section>
    </article>
  );
}
