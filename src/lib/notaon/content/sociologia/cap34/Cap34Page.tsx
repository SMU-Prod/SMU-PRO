"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap34Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 34</span>
          <h1>Questão Indígena, Povos Tradicionais e Comunidades Quilombolas</h1>
          <p>
            O Brasil abriga uma diversidade extraordinária de povos tradicionais cujos direitos foram
            historicamente negados. Indígenas, quilombolas, ribeirinhos, seringueiros e outros grupos
            são sujeitos de lutas contemporâneas por território, identidade e autodeterminação —
            temas centrais no ENEM e na compreensão da cidadania pluriétnica brasileira.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Povos Indígenas</span>
        <h2>1. Povos Indígenas no Brasil: Diversidade e Colapso Demográfico</h2>
        <p>
          Antes da chegada dos europeus em 1500, estima-se que entre 2 e 5 milhões de pessoas
          viviam no território que hoje é o Brasil, distribuídas em centenas de nações com línguas,
          culturas e formas de organização social distintas. Esse não era um território vazio —
          era um mosaico de civilizações com séculos de história, tecnologias próprias, sistemas
          de manejo ambiental sofisticados e redes de comércio que conectavam toda a América do Sul.
        </p>
        <p>
          Hoje, o Brasil possui <strong>305 etnias indígenas</strong> e cerca de{" "}
          <strong>180 línguas</strong> diferentes, conforme o IBGE. A população total
          indígena é de aproximadamente 1,7 milhão de pessoas (Censo 2022) — número que representa
          uma extraordinária sobrevivência cultural diante de um genocídio: nos primeiros cem anos
          de colonização, estima-se que 90% da população nativa foi dizimada por doenças
          (especialmente varíola, sarampo e gripe), escravidão e massacre sistemático.
        </p>

        <div className="lesson-highlight">
          <h3>Diversidade linguística e cultural</h3>
          <p>
            As 180 línguas indígenas brasileiras pertencem a dezenas de famílias linguísticas
            diferentes — algumas tão distintas entre si quanto o português é do árabe. Essa
            diversidade linguística reflete diversidade cultural: cada povo tem cosmologia,
            práticas agrícolas, rituais e formas de organização social próprias. Não existe
            "o índio" — existem os Yanomami, os Kayapó, os Guarani, os Xavante, os Munduruku
            e centenas de outros povos, cada qual com especificidades irredutíveis.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Terras Indígenas</span>
        <h2>2. Demarcação de Terras: Direitos e Ameaças</h2>
        <p>
          A <strong>Constituição Federal de 1988</strong> representou um avanço histórico para os
          povos indígenas: o Art. 231 reconhece aos índios "sua organização social, costumes,
          línguas, crenças e tradições, e os direitos originários sobre as terras que
          tradicionalmente ocupam". O Estado tem obrigação de demarcar essas terras — e os
          direitos indígenas sobre elas são permanentes, imprescritíveis e inalienáveis.
        </p>
        <p>
          O processo de demarcação envolve a <strong>FUNAI</strong> (Fundação Nacional dos Povos
          Indígenas), estudos antropológicos e geográficos, e aprovação ministerial. Atualmente,
          existem mais de 700 terras indígenas no país, cobrindo cerca de 13% do território —
          concentradas principalmente na Amazônia Legal, onde correspondem a aproximadamente 22%
          da área. Fora da Amazônia, as terras demarcadas são muito menores e mais fragmentadas.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⛏️</span>
            <h3>Garimpagem ilegal</h3>
            <p>Garimpos ilegais, especialmente de ouro, invadem terras indígenas, poluem rios (mercúrio) e disseminam doenças. O caso Yanomami, com emergência de saúde em 2023, é emblemático.</p>
          </div>
          <div className="lesson-card">
            <span>🌾</span>
            <h3>Agronegócio</h3>
            <p>Pressão constante para reduzir ou desafetar terras indígenas em nome da expansão agrícola, pecuária e mineração — conflito que opõe o "progresso" econômico à sobrevivência cultural.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Marco temporal</h3>
            <p>Tese jurídica (rejeitada pelo STF em 2023) que só reconheceria como indígenas terras ocupadas em 05/10/1988, data da CF — ignorando as expulsões violentas anteriores.</p>
          </div>
          <div className="lesson-card">
            <span>💧</span>
            <h3>Hidrelétricas</h3>
            <p>Usinas como Belo Monte (Pará) afetaram territórios e modos de vida de povos como os Juruna e Kayapó, inundando aldeias e alterando o regime do Rio Xingu.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resistência Indígena</span>
        <h2>3. Lideranças e Movimentos de Resistência Indígena</h2>
        <p>
          Ao longo da história do Brasil, os povos indígenas nunca aceitaram passivamente a
          colonização, o extermínio e o esbulho territorial. Resistiram militarmente, culturalmente
          e politicamente — e continuam resistindo. O movimento indígena contemporâneo ganhou
          força com a redemocratização dos anos 1980 e se consolidou como ator político nacional.
        </p>
        <p>
          O Acampamento Terra Livre (ATL), realizado anualmente em Brasília desde 2004, é a maior
          mobilização indígena do Brasil. A <strong>APIB</strong> (Articulação dos Povos Indígenas
          do Brasil), fundada em 2005, tornou-se a maior organização indígena nacional, articulando
          pautas territoriais, ambientais e de saúde. Lideranças como <strong>Sônia Guajajara</strong>
          (primeira ministra dos Povos Indígenas do Brasil, 2023) e <strong>Ailton Krenak</strong>
          (filósofo e ativista, autor de <em>Ideias para Adiar o Fim do Mundo</em>, 2019) tornaram-se
          referências nacionais e internacionais.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Liderança / Organização</th>
                <th>Povo / Origem</th>
                <th>Contribuição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Raoni Metuktire</strong></td>
                <td>Kayapó (Mato Grosso/Pará)</td>
                <td>Luta internacional pela demarcação do Xingu; parceria com Sting (1989); pressão sobre Belo Monte</td>
              </tr>
              <tr>
                <td><strong>Ailton Krenak</strong></td>
                <td>Krenak (Minas Gerais)</td>
                <td>Filósofo e ambientalista; pintura do rosto na Constituinte (1987); referência intelectual indígena contemporânea</td>
              </tr>
              <tr>
                <td><strong>Sônia Guajajara</strong></td>
                <td>Guajajara (Maranhão)</td>
                <td>Coordenadora da APIB; primeira ministra dos Povos Indígenas; candidata à vice-presidência em 2018</td>
              </tr>
              <tr>
                <td><strong>APIB</strong></td>
                <td>Nacional</td>
                <td>Maior articulação indígena do Brasil; unifica pautas de todos os povos; atuação no STF e instâncias internacionais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Quilombolas</span>
        <h2>4. Comunidades Quilombolas: Resistência e Direitos</h2>
        <p>
          <strong>Quilombos</strong> foram comunidades formadas por africanos que escapavam da
          escravidão. O mais famoso foi o <strong>Quilombo dos Palmares</strong> (Alagoas/Pernambuco),
          que chegou a ter cerca de 30 mil pessoas e resistiu por quase cem anos (c. 1580–1694),
          liderado por <strong>Zumbi dos Palmares</strong>, herói nacional cuja morte (20 de novembro
          de 1695) é celebrada hoje como o Dia da Consciência Negra. Palmares não era apenas um
          refúgio — era uma organização social complexa, com divisão de trabalho, produção agrícola
          e estrutura política própria, desafiando o sistema escravocrata colonial.
        </p>
        <p>
          O <strong>Art. 68 do ADCT</strong> (Ato das Disposições Constitucionais Transitórias,
          CF/1988) garante às comunidades quilombolas remanescentes a propriedade definitiva de
          suas terras. Hoje, existem mais de 3.000 comunidades quilombolas certificadas no Brasil,
          localizadas em todos os estados — com maior concentração no Nordeste (Bahia, Maranhão)
          e no Pará. Muitas ainda aguardam titulação definitiva décadas após a promulgação da CF.
        </p>

        <div className="lesson-highlight">
          <h3>Desafios quilombolas contemporâneos</h3>
          <p>
            As comunidades quilombolas enfrentam: morosidade no processo de titulação das terras
            (muitas aguardam décadas), conflitos fundiários com fazendeiros, falta de acesso
            a serviços públicos (saúde, educação, saneamento) e invisibilidade política.
            O INCRA (Instituto Nacional de Colonização e Reforma Agrária) é responsável
            pelo reconhecimento e titulação das terras quilombolas — processo que avança
            lentamente diante da resistência de proprietários rurais e da morosidade burocrática.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Povos Tradicionais</span>
        <h2>5. Outros Povos e Comunidades Tradicionais</h2>
        <p>
          Além de indígenas e quilombolas, o Brasil reconhece legalmente outras populações
          tradicionais — grupos que possuem modos de vida específicos, relação diferenciada
          com o território e dependência de recursos naturais. O <strong>Decreto 6.040/2007</strong>
          (Política Nacional de Desenvolvimento Sustentável dos Povos e Comunidades Tradicionais)
          reconheceu juridicamente esses grupos e estabeleceu obrigações do Estado em relação a eles.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Localização predominante</th>
                <th>Principal ameaça</th>
                <th>Legislação protetora</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Indígenas</strong></td>
                <td>Amazônia, Cerrado, Nordeste, Sul</td>
                <td>Garimpo, agronegócio, marco temporal</td>
                <td>Art. 231 CF/88; Estatuto do Índio (1973)</td>
              </tr>
              <tr>
                <td><strong>Quilombolas</strong></td>
                <td>Todo o Brasil (concentração no Nordeste e Pará)</td>
                <td>Morosidade na titulação, grilagem de terra</td>
                <td>Art. 68 ADCT/CF; Decreto 4.887/2003</td>
              </tr>
              <tr>
                <td><strong>Ribeirinhos</strong></td>
                <td>Amazônia e bacias fluviais</td>
                <td>Hidrelétricas, poluição dos rios, garimpo</td>
                <td>PNPCT (Decreto 6.040/2007)</td>
              </tr>
              <tr>
                <td><strong>Pescadores artesanais</strong></td>
                <td>Litoral e lagos interiores</td>
                <td>Pesca industrial, poluição costeira, especulação imobiliária</td>
                <td>Lei da Pesca (11.959/2009)</td>
              </tr>
              <tr>
                <td><strong>Caiçaras</strong></td>
                <td>Litoral Sul e Sudeste (SP, RJ, PR)</td>
                <td>Turismo predatório, criação de parques sem consulta</td>
                <td>PNPCT; Lei 9.985/2000 (SNUC)</td>
              </tr>
              <tr>
                <td><strong>Seringueiros</strong></td>
                <td>Acre e Amazonas</td>
                <td>Desmatamento, grilagem, pecuarização</td>
                <td>Reservas Extrativistas (criadas por Chico Mendes/1988)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Chico Mendes</strong> (1944–1988) foi o seringueiro e sindicalista que criou
          o movimento dos empates (bloqueios coletivos ao desmatamento) e defendeu as
          Reservas Extrativistas — áreas protegidas onde comunidades locais podem usar os
          recursos naturais de forma sustentável. Assassinado em 1988, tornou-se símbolo
          internacional da luta socioambiental.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Indigenismo e Políticas do Estado</span>
        <h2>6. Políticas Indigenistas: Do SPI à FUNAI</h2>
        <p>
          A relação do Estado brasileiro com os povos indígenas passou por diferentes paradigmas
          ao longo do tempo. No século XIX e início do XX, predominou a política de assimilação
          forçada: os índios deveriam ser "civilizados", integrados à sociedade nacional e
          perder sua identidade cultural. O <strong>Serviço de Proteção ao Índio</strong> (SPI),
          criado em 1910 por Marechal Cândido Rondon, representou uma mudança: adotou o princípio
          da "atração pacífica" e do respeito às culturas indígenas — embora com objetivo final
          ainda assimilacionista.
        </p>
        <p>
          O SPI foi substituído pela <strong>FUNAI</strong> (Fundação Nacional do Índio, depois
          Fundação Nacional dos Povos Indígenas) em 1967, após escândalos de corrupção e
          violência denunciados pelo Relatório Figueiredo (1967). A CF/1988 marcou uma
          ruptura definitiva com o assimilacionismo: reconheceu a <strong>organização social
          original</strong> dos povos indígenas como direito permanente, não como fase transitória
          a ser superada pela integração. Em 2023, foi criado o <strong>Ministério dos Povos
          Indígenas</strong>, primeiro ministério dedicado exclusivamente às causas indígenas.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📜</span>
            <h3>Estatuto do Índio (1973)</h3>
            <p>Lei 6.001/1973: marco legal anterior à CF/88; ainda previa a tutela estatal e a progressiva integração dos índios à sociedade. Parcialmente superado pela CF/88.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>CF/88 e pluralismo</h3>
            <p>Art. 231 e 232: reconhecimento pleno da organização social, línguas e culturas indígenas; direitos originários sobre terras; vedação à assimilação forçada.</p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>FUNAI</h3>
            <p>Órgão responsável pela proteção dos direitos indígenas e demarcação de terras. Orçamento historicamente insuficiente para cumprir suas funções constitucionais.</p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Ministério dos Povos Indígenas</h3>
            <p>Criado em 2023 com Sônia Guajajara à frente — primeira vez na história que um povo indígena representa a si mesmo no governo federal.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conflitos Fundiários</span>
        <h2>7. Conflitos Fundiários e Violência no Campo</h2>
        <p>
          Os conflitos por terra no Brasil são uma das formas mais letais de violência social.
          Segundo a Comissão Pastoral da Terra (CPT), o país registra centenas de conflitos
          fundiários por ano, com assassinatos de lideranças indígenas, quilombolas, ribeirinhos
          e agricultores familiares que resistem ao avanço do agronegócio e da grilagem de terras.
          A impunidade é a regra: a grande maioria dos assassinatos de lideranças rurais
          permanece sem solução judicial.
        </p>
        <p>
          A <strong>grilagem</strong> — falsificação de documentos para apropriar terras públicas
          ou de comunidades tradicionais — é prática histórica no Brasil, especialmente na
          Amazônia. Envolve desde a falsificação de títulos em cartórios até o uso de violência
          privada (pistoleiros) para expulsar ocupantes. A expansão da fronteira agrícola sobre
          o Cerrado e a Amazônia nas últimas décadas intensificou esses conflitos, afetando
          especialmente comunidades que vivem nessas regiões há gerações.
        </p>

        <div className="lesson-highlight">
          <h3>Assassinatos de lideranças: padrão de impunidade</h3>
          <p>
            O Brasil é consistentemente um dos países mais perigosos do mundo para defensores
            de direitos ambientais e territoriais. Casos como o assassinato de Chico Mendes (1988),
            da missionária Dorothy Stang (2005) e da indigenista Bruno Pereira e jornalista
            Dom Phillips (2022) evidenciam um padrão de violência tolerada contra quem defende
            terras e comunidades frente ao avanço predatório. A Global Witness documenta
            anualmente esses assassinatos, colocando o Brasil entre os países mais perigosos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Saúde e Educação Indígena</span>
        <h2>8. Saúde e Educação nas Comunidades Tradicionais</h2>
        <p>
          O direito à saúde e à educação diferenciadas é central para a sobrevivência cultural
          dos povos tradicionais. A <strong>educação escolar indígena</strong> deve ser ministrada
          em língua materna e contemplar os valores, conhecimentos e práticas de cada povo —
          um modelo diferente da escola homogeneizadora colonial. A Lei de Diretrizes e Bases
          da Educação (LDB/1996) garante esse direito, mas sua implementação enfrenta desafios
          de infraestrutura e formação de professores indígenas.
        </p>
        <p>
          A saúde indígena é coordenada pela <strong>SESAI</strong> (Secretaria Especial de
          Saúde Indígena), com Distritos Sanitários Especiais Indígenas (DSEIs) distribuídos
          pelo país. Apesar dos avanços, indicadores de saúde indígena ainda são muito piores
          do que a média nacional: mortalidade infantil indígena é 3 vezes maior do que a
          nacional, e doenças como tuberculose e desnutrição têm incidência muito acima da
          média. O caso Yanomami em 2023 — com centenas de crianças desnutridas por conta
          da invasão garimpeira — expôs o colapso da saúde indígena.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Indígenas</th>
                <th>Média nacional</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mortalidade infantil (por mil nascidos vivos)</td>
                <td>~41</td>
                <td>~13</td>
              </tr>
              <tr>
                <td>Taxa de analfabetismo (15+ anos)</td>
                <td>~23%</td>
                <td>~7%</td>
              </tr>
              <tr>
                <td>Acesso a saneamento básico</td>
                <td>~30%</td>
                <td>~85%</td>
              </tr>
              <tr>
                <td>Incidência de tuberculose (por 100 mil)</td>
                <td>~80</td>
                <td>~34</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cultura e Patrimônio</span>
        <h2>9. Patrimônio Cultural, Línguas e Cosmologias</h2>
        <p>
          A contribuição dos povos tradicionais ao patrimônio cultural brasileiro é imensurável.
          As línguas indígenas deixaram marcas profundas no português brasileiro: topônimos
          (Paraná, Guanabara, Piauí, Carioca, Itabirito) e nomes de animais e plantas
          (tucano, piranha, mandioca, pipoca, tatu) mostram a presença tupi-guarani no
          cotidiano. A culinária brasileira é impensável sem a mandioca e seus derivados
          (farinha, tapioca, beiju), o guaraná, a pimenta malagueta — todos de origem indígena.
        </p>
        <p>
          O <strong>IPHAN</strong> (Instituto do Patrimônio Histórico e Artístico Nacional)
          registra bens culturais imateriais dos povos tradicionais: o Yaokwa dos Enawenê-Nawê,
          o Jogo de Bola dos Xavante, os saberes dos mestres de capoeira, o ofício das paneleiras
          de Goiabeiras (Espírito Santo). Esses registros reconhecem que o patrimônio cultural
          brasileiro não é apenas colonial e europeu — é profundamente indígena e africano.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Conhecimento ecológico</h3>
            <p>Povos indígenas desenvolveram por milênios técnicas de manejo florestal, agrícola e aquático. A "terra preta de índio" amazônica é um exemplo de tecnologia agrícola pré-colombiana sofisticada.</p>
          </div>
          <div className="lesson-card">
            <span>🎵</span>
            <h3>Músicas e ritmos</h3>
            <p>Ritmos africanos (samba, batuque, candomblé) e indígenas (maracatu, carimbó, toré) formam a espinha dorsal da música popular brasileira — patrimônio de toda a humanidade.</p>
          </div>
          <div className="lesson-card">
            <span>🍃</span>
            <h3>Medicina tradicional</h3>
            <p>O conhecimento botânico indígena e de terreiros de candomblé influenciou a medicina popular brasileira e hoje é objeto de pesquisa farmacológica em todo o mundo.</p>
          </div>
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Arte indígena</h3>
            <p>Grafismos Kayapó, cerâmica Marajó, plumária Bororo — expressões artísticas com séculos de história que influenciaram artistas modernistas como Tarsila do Amaral.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Direito Internacional</span>
        <h2>10. Direito Internacional e os Povos Tradicionais</h2>
        <p>
          Os direitos dos povos indígenas e tradicionais são reconhecidos por instrumentos
          internacionais que o Brasil ratificou. A <strong>Convenção 169 da OIT</strong> (1989,
          ratificada pelo Brasil em 2002) é o principal tratado internacional sobre direitos
          de povos indígenas e tribais: estabelece o direito à <strong>consulta prévia, livre
          e informada</strong> sempre que medidas legislativas ou administrativas possam afetá-los.
          No Brasil, esse direito é sistematicamente violado — projetos como Belo Monte e a
          expansão de rodovias pela Amazônia não foram precedidos de consulta adequada.
        </p>
        <p>
          A <strong>Declaração da ONU sobre os Direitos dos Povos Indígenas</strong> (2007),
          aprovada com o voto favorável do Brasil, reconhece o direito à autodeterminação,
          à educação em língua materna, à manutenção e proteção de suas culturas e terras,
          e à participação nas decisões que os afetam. Esses instrumentos internacionais
          são frequentemente invocados por lideranças indígenas e pelo movimento quilombola
          em disputas nos tribunais brasileiros e internacionais.
        </p>

        <div className="lesson-highlight">
          <h3>Consulta prévia, livre e informada: um direito constantemente violado</h3>
          <p>
            A Convenção 169/OIT estabelece que qualquer projeto que afete territórios ou modos
            de vida de povos tradicionais deve ser precedido de consulta prévia (antes da decisão),
            livre (sem pressão) e informada (com informações completas). No Brasil, essa obrigação
            raramente é cumprida: projetos minerários, hidrelétricas e rodovias são aprovados
            sem consulta adequada, deixando comunidades sem meios de defender seus direitos
            nos processos de decisão.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Direitos indígenas na CF/1988"
          statement={
            <p>
              O Art. 231 da Constituição Federal de 1988 reconhece aos povos indígenas:
            </p>
          }
          options={[
            { letter: "A", text: "A obrigação de integração à sociedade nacional e abandono de suas culturas." },
            { letter: "B", text: "Direitos originários sobre as terras que ocupam e reconhecimento de sua organização social, línguas e tradições.", correct: true },
            { letter: "C", text: "A possibilidade de vender suas terras a particulares mediante autorização da FUNAI." },
            { letter: "D", text: "O direito exclusivo ao voto em eleições para aldeias, sem participar das eleições nacionais." },
            { letter: "E", text: "Autonomia total para criar Estados independentes dentro do território brasileiro." },
          ]}
          resolution={
            <p>
              A CF/88 representou um marco: reconheceu os direitos originários dos indígenas
              sobre suas terras (anteriores ao próprio Estado brasileiro) e garantiu o
              pluralismo cultural, proibindo a assimilação forçada que marcou séculos de
              política colonial e republicana.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Quilombo dos Palmares"
          statement={
            <p>
              O Quilombo dos Palmares, símbolo da resistência negra no Brasil, caracterizou-se por:
            </p>
          }
          options={[
            { letter: "A", text: "Ser uma comunidade criada pelo governo colonial para organizar escravizados libertos." },
            { letter: "B", text: "Ser uma comunidade formada por africanos fugidos da escravidão que resistiu por quase cem anos, liderada por Zumbi.", correct: true },
            { letter: "C", text: "Ser um movimento exclusivamente religioso que resistia à catequização jesuítica." },
            { letter: "D", text: "Ter sido fundado após a abolição da escravidão em 1888." },
            { letter: "E", text: "Ser uma aliança entre indígenas e colonizadores portugueses contra os africanos escravizados." },
          ]}
          resolution={
            <p>
              Palmares foi o mais duradouro e populoso quilombo do Brasil, localizado na Serra
              da Barriga (AL). Com até 30 mil habitantes, resistiu por cerca de cem anos às
              expedições militares portuguesas e holandesas. Zumbi, seu último grande líder,
              foi capturado e morto em 20 de novembro de 1695 — data do Dia da Consciência Negra.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Marco temporal"
          statement={
            <p>
              A tese do "marco temporal", debatida no STF brasileiro, propunha que terras
              indígenas só seriam reconhecidas se os povos as estivessem ocupando na data de:
            </p>
          }
          options={[
            { letter: "A", text: "7 de setembro de 1822 — Independência do Brasil." },
            { letter: "B", text: "13 de maio de 1888 — abolição da escravidão." },
            { letter: "C", text: "15 de novembro de 1889 — proclamação da República." },
            { letter: "D", text: "5 de outubro de 1988 — promulgação da Constituição Federal.", correct: true },
            { letter: "E", text: "1º de janeiro de 2003 — início do governo Lula e revisão das políticas indigenistas." },
          ]}
          resolution={
            <p>
              O marco temporal propunha que apenas terras ocupadas pelos indígenas em 05/10/1988
              (data da CF) seriam elegíveis à demarcação. Críticos apontam que esse critério
              ignora expulsões violentas sofridas antes dessa data. O STF rejeitou a tese
              em 2023, reafirmando os direitos originários.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Chico Mendes e seringueiros"
          statement={
            <p>
              A criação das Reservas Extrativistas, associada à luta de Chico Mendes,
              representa que tipo de estratégia socioambiental?
            </p>
          }
          options={[
            { letter: "A", text: "Preservação ambiental com total exclusão humana das áreas protegidas." },
            { letter: "B", text: "Privatização dos recursos naturais para financiar o desenvolvimento da Amazônia." },
            { letter: "C", text: "Uma aliança entre preservação ambiental e direitos sociais de comunidades tradicionais que vivem dos recursos da floresta de forma sustentável.", correct: true },
            { letter: "D", text: "A concessão de terras a grandes empresas madeireiras comprometidas com o reflorestamento." },
            { letter: "E", text: "A expansão das fronteiras agrícolas com tecnologia de baixo impacto ambiental." },
          ]}
          resolution={
            <p>
              As Reservas Extrativistas representam a convergência entre justiça social e
              sustentabilidade: permitem que seringueiros, castanheiros e outros povos
              tradicionais usem os recursos naturais sem destruí-los, mostrando que
              conservação ambiental e direitos sociais não são opostos.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Povos tradicionais e cidadania"
          statement={
            <p>
              "Os Yanomami vivem no maior território indígena contíguo do Brasil, mas sofreram
              nos últimos anos com invasão de garimpeiros que trouxeram malária, mercúrio nos
              rios e violência. Em 2023, o governo federal declarou emergência de saúde pública
              no território."
              <br /><br />
              Esse caso ilustra qual tensão sociológica fundamental?
            </p>
          }
          options={[
            { letter: "A", text: "O conflito entre desenvolvimento econômico regional e preservação de culturas e ecossistemas específicos." },
            { letter: "B", text: "A dificuldade de implementar direitos constitucionalmente garantidos diante de interesses econômicos e falta de políticas de proteção efetivas.", correct: true },
            { letter: "C", text: "A resistência dos povos indígenas a se integrarem à economia nacional de mercado." },
            { letter: "D", text: "O conflito entre os direitos dos garimpeiros artesanais e as grandes mineradoras multinacionais." },
            { letter: "E", text: "A incapacidade do sistema de saúde pública de atender populações em áreas remotas por razões puramente logísticas." },
          ]}
          resolution={
            <p>
              O caso Yanomami evidencia que direitos formalmente garantidos pela Constituição
              não são automaticamente efetivados. O Estado falhou em proteger o território
              demarcado, permitindo a invasão garimpeira por anos. Isso revela como interesses
              econômicos, omissão estatal e racismo estrutural se combinam para violar direitos
              de povos indígenas mesmo em democracias formais.
            </p>
          }
        />
      </section>
    </article>
  );
}
