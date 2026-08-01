"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap12Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 12</span>
          <h1>Etnocentrismo, relativismo cultural e multiculturalismo</h1>
          <p>
            Quando nos deparamos com práticas culturais muito diferentes das nossas, qual é a reação
            correta — julgá-las ou suspender o julgamento? Essa tensão entre etnocentrismo e relativismo
            cultural está no centro do debate sobre diversidade, direitos humanos e convivência democrática
            num mundo globalizado.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Etnocentrismo</span>
        <h2>1. Etnocentrismo: Quando Julgamos o Outro pela Nossa Régua</h2>
        <p>
          <strong>Etnocentrismo</strong> é a tendência de julgar outras culturas a partir dos valores,
          normas e práticas da própria cultura, tomando-a como referência universal e superior. O termo foi
          cunhado pelo sociólogo americano <strong>William Graham Sumner</strong> (1906) e designa algo
          muito antigo: a crença de que "nós" somos o centro do mundo e os "outros" são atrasados, bárbaros
          ou inferiores.
        </p>
        <p>
          O etnocentrismo tem dimensões que vão do cotidiano ao histórico-criminal:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>😒</span>
            <h3>Etnocentrismo cotidiano</h3>
            <p>
              Achar que a culinária do próprio país é "de verdade", que outras línguas são "menos bonitas"
              ou que costumes estrangeiros são "estranhos". Presente em todos os grupos culturais.
            </p>
          </div>
          <div className="lesson-card">
            <span>🗺️</span>
            <h3>Colonialismo</h3>
            <p>
              A dominação europeia sobre África, América e Ásia foi legitimada pela crença na superioridade
              civilizatória do Ocidente — "o fardo do homem branco" que deveria "civilizar" os povos
              supostamente inferiores.
            </p>
          </div>
          <div className="lesson-card">
            <span>☠️</span>
            <h3>Nazismo e Genocídio</h3>
            <p>
              O etnocentrismo levado ao extremo: a crença na superioridade da "raça ariana" que justificou
              o extermínio de judeus, ciganos, pessoas com deficiência, eslavos e outros grupos.
            </p>
          </div>
          <div className="lesson-card">
            <span>📺</span>
            <h3>Neocolonialismo cultural</h3>
            <p>
              A exportação de produtos culturais americanos (filmes, música, fast food) como se fossem
              universais e superiores, desvalorizando culturas locais. Também chamado de
              "imperialismo cultural".
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <p>
            ⚠️ O etnocentrismo pode ser inconsciente — não exige que alguém se declare superior.
            Basta usar os próprios critérios culturais para avaliar negativamente práticas alheias.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relativismo Cultural</span>
        <h2>2. Relativismo Cultural: A Resposta Antropológica ao Etnocentrismo</h2>
        <p>
          O <strong>relativismo cultural</strong> é o princípio metodológico e ético segundo o qual cada
          cultura deve ser compreendida e avaliada a partir de seus próprios valores, história e contexto,
          e não pelos padrões de uma cultura externa. Foi desenvolvido pelo antropólogo alemão-americano{" "}
          <strong>Franz Boas</strong> (1858–1942) como reação científica ao racismo e ao evolucionismo
          cultural do século XIX.
        </p>
        <p>
          Boas demonstrou, com pesquisas empíricas, que as diferenças culturais não refletem hierarquias
          evolutivas — povos "primitivos" não são estágios inferiores de um caminho único que leva à
          "civilização ocidental". Cada cultura é uma resposta particular e igualmente válida aos desafios
          da existência humana.
        </p>
        <div className="lesson-highlight">
          <h3>Os limites do relativismo cultural</h3>
          <p>
            O relativismo cultural apresenta um dilema ético sério: se toda cultura deve ser julgada por
            seus próprios critérios, como condenar práticas como a mutilação genital feminina, o casamento
            infantil ou o genocídio de minorias? O relativismo radical tornaria impossível qualquer
            denúncia de violações dos direitos humanos. Por isso, muitos antropólogos contemporâneos
            defendem um <strong>relativismo metodológico</strong> (suspender julgamentos para compreender)
            sem abrir mão de um <strong>compromisso ético universal</strong> com a dignidade humana.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 600 140" width="600" height="140" aria-label="Espectro entre etnocentrismo e relativismo radical">
            <defs>
              <linearGradient id="specGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#ef4444" stopOpacity={0.7} />
                <stop offset="50%" stopColor="#22c55e" stopOpacity={0.7} />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.7} />
              </linearGradient>
            </defs>
            <rect x={20} y={50} width={560} height={40} rx={20} fill="url(#specGrad)" />
            <text x={20} y={40} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7f1d1d">Etnocentrismo</text>
            <text x={300} y={40} textAnchor="middle" fontSize={11} fontWeight={700} fill="#14532d">Relativismo metodológico</text>
            <text x={580} y={40} textAnchor="middle" fontSize={11} fontWeight={700} fill="#78350f">Relativismo radical</text>
            <text x={20} y={110} textAnchor="middle" fontSize={10} fill="#374151">Julga toda cultura pelo próprio padrão</text>
            <text x={300} y={110} textAnchor="middle" fontSize={10} fill="#374151">Compreende sem abrir mão dos DH</text>
            <text x={580} y={110} textAnchor="middle" fontSize={10} fill="#374151">Nenhuma prática pode ser criticada</text>
            <circle cx={20} cy={70} r={8} fill="#ef4444" />
            <circle cx={300} cy={70} r={8} fill="#22c55e" />
            <circle cx={580} cy={70} r={8} fill="#f59e0b" />
          </svg>
          <figcaption>O relativismo metodológico é a posição intermediária mais aceita: compreender sem relativizar os direitos humanos.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Multiculturalismo</span>
        <h2>3. Multiculturalismo e Políticas de Reconhecimento</h2>
        <p>
          O <strong>multiculturalismo</strong> é uma proposta política e filosófica que defende o
          reconhecimento e a valorização das diferenças culturais numa mesma sociedade. Surgiu com força
          nos anos 1980–1990 nos Estados Unidos, Canadá e Europa, em resposta às demandas de minorias
          étnicas, indígenas, LGBTQIA+ e imigrantes.
        </p>
        <p>
          O filósofo canadense <strong>Charles Taylor</strong> cunhou o conceito de{" "}
          <strong>política de reconhecimento</strong>: a necessidade de que as democracias reconheçam
          publicamente a identidade das minorias, não apenas tolerem-nas. A diferença entre tolerância e
          reconhecimento é crucial: tolerar é aceitar a existência do outro; reconhecer é afirmar
          positivamente o valor de sua identidade.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Perspectiva</th>
                <th>Posição sobre diversidade</th>
                <th>Exemplos de políticas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Assimilacionismo</strong></td>
                <td>Minorias devem se integrar à cultura dominante</td>
                <td>França republicana — proibição de símbolos religiosos em escolas públicas</td>
              </tr>
              <tr>
                <td><strong>Multiculturalismo liberal</strong></td>
                <td>Tolerar diferenças dentro de uma estrutura comum de direitos individuais</td>
                <td>Políticas de inclusão linguística no Canadá (inglês e francês oficiais)</td>
              </tr>
              <tr>
                <td><strong>Multiculturalismo crítico</strong></td>
                <td>Reconhecer e valorizar diferenças, combatendo hierarquias de poder</td>
                <td>Cotas raciais no ensino superior, territórios quilombolas, demarcações indígenas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Xenofobia e Discriminação</span>
        <h2>4. Xenofobia, Preconceito e Discriminação no Mundo Globalizado</h2>
        <p>
          A globalização intensificou os fluxos migratórios — e com eles, os conflitos identitários.
          <strong> Xenofobia</strong> é o medo e a aversão ao estrangeiro ou ao diferente.{" "}
          <strong>Preconceito</strong> é uma atitude negativa prévia baseada em estereótipos.{" "}
          <strong>Discriminação</strong> é o tratamento desigual e prejudicial efetivado contra grupos
          com base em características como raça, etnia, religião, gênero ou nacionalidade.
        </p>
        <p>
          No Brasil contemporâneo, a xenofobia se manifesta especialmente contra imigrantes haitianos,
          venezuelanos e bolivianos. A ONU classifica a xenofobia como violação dos direitos humanos —
          o que coloca em tensão o relativismo cultural (respeitar culturas que discriminam) e os
          princípios universais de dignidade humana.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito de Cultura</span>
        <h2>5. Cultura: Conceito, Elementos e Diversidade</h2>
        <p>
          O conceito antropológico de <strong>cultura</strong> foi sistematizado pelo
          britânico <strong>Edward B. Tylor</strong> (1871): "todo aquele complexo que inclui
          conhecimento, crença, arte, moral, lei, costume e quaisquer outras capacidades e
          hábitos adquiridos pelo homem como membro da sociedade." O antropólogo americano
          <strong> Clifford Geertz</strong> propôs uma definição interpretativa: cultura é
          a "teia de significados" que o ser humano tece e na qual está suspenso. Para Geertz,
          compreender uma cultura é decifrar seus símbolos e significados, não apenas
          catalogar seus costumes.
        </p>
        <p>
          A distinção entre <strong>cultura material</strong> (objetos, ferramentas, edificações,
          artefatos tecnológicos) e <strong>cultura imaterial</strong> (crenças, valores, normas,
          língua, rituais, saberes) é fundamental para o ENEM. O Brasil é especialmente rico em
          cultura imaterial: o samba, o candomblé, a capoeira e o frevo são reconhecidos pelo
          IPHAN (patrimônio imaterial nacional) e alguns pela UNESCO como patrimônio da humanidade.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento cultural</th>
                <th>Definição</th>
                <th>Exemplo brasileiro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Crenças</strong></td>
                <td>Convicções sobre o que é verdadeiro ou real no mundo</td>
                <td>Sincretismo afro-católico (ex: Iemanjá e Nossa Senhora)</td>
              </tr>
              <tr>
                <td><strong>Valores</strong></td>
                <td>Critérios sobre o que é bom, justo ou desejável</td>
                <td>"Jeitinho brasileiro", hospitalidade, carnaval como celebração coletiva</td>
              </tr>
              <tr>
                <td><strong>Normas</strong></td>
                <td>Regras explícitas ou implícitas que orientam o comportamento</td>
                <td>Respeito aos mais velhos, fila em repartições públicas</td>
              </tr>
              <tr>
                <td><strong>Símbolos</strong></td>
                <td>Objetos ou gestos que carregam significado partilhado pelo grupo</td>
                <td>Bandeira verde e amarela, cruz, foice e martelo</td>
              </tr>
              <tr>
                <td><strong>Linguagem</strong></td>
                <td>Sistema de comunicação simbólica; veículo da cultura</td>
                <td>Português com influências tupi, africanas e imigrantes</td>
              </tr>
              <tr>
                <td><strong>Rituais</strong></td>
                <td>Práticas simbólicas repetidas que reforçam identidade coletiva</td>
                <td>Festa junina, Páscoa, Festa do Bumba meu boi (MA)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Hibridismo</span>
        <h2>6. Hibridismo Cultural e Globalização</h2>
        <p>
          O teórico indo-britânico <strong>Homi Bhabha</strong> desenvolveu o conceito de
          <strong> hibridismo cultural</strong> para descrever o resultado do encontro entre
          culturas: em vez de uma simplesmente dominar a outra, emerge um espaço "terceiro"
          — híbrido, ambíguo e criativo — que não pertence a nenhuma das duas culturas originais.
          O antropólogo argentino <strong>Néstor García Canclini</strong> ampliou essa perspectiva
          com o conceito de <strong>culturas híbridas</strong>: nas sociedades latino-americanas,
          o tradicional e o moderno, o local e o global coexistem e se mesclam continuamente,
          produzindo formas culturais inéditas.
        </p>
        <p>
          O Brasil é um laboratório exemplar de hibridismo: o <strong>sincretismo religioso</strong>
          afro-brasileiro (candomblé, umbanda) resulta do encontro forçado entre religiões
          africanas e o catolicismo colonial. O samba sintetiza ritmos africanos, instrumentos
          europeus e poesia popular brasileira. A culinária nordestina combina ingredientes
          indígenas (mandioca, pimenta), africanos (dendê, quiabo) e europeus (carne-seca,
          toucinho). Essas sínteses não são "contaminação" das culturas puras — são criações
          originais com valor próprio.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 520 160" width="520" height="160" aria-label="Diagrama de hibridismo cultural entre duas culturas">
            <circle cx={170} cy={80} r={80} fill="#dbeafe" fillOpacity={0.7} stroke="#2563eb" strokeWidth={2} />
            <circle cx={350} cy={80} r={80} fill="#fef3c7" fillOpacity={0.7} stroke="#f59e0b" strokeWidth={2} />
            <text x={120} y={75} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a8a">Cultura A</text>
            <text x={120} y={93} textAnchor="middle" fontSize={11} fill="#1e40af">traços próprios</text>
            <text x={400} y={75} textAnchor="middle" fontSize={13} fontWeight={700} fill="#92400e">Cultura B</text>
            <text x={400} y={93} textAnchor="middle" fontSize={11} fill="#78350f">traços próprios</text>
            <text x={260} y={68} textAnchor="middle" fontSize={12} fontWeight={700} fill="#065f46">Zona</text>
            <text x={260} y={84} textAnchor="middle" fontSize={12} fontWeight={700} fill="#065f46">Híbrida</text>
            <text x={260} y={100} textAnchor="middle" fontSize={10} fill="#064e3b">novo espaço</text>
            <text x={260} y={148} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">Ex: sincretismo afro-católico, samba, culinária brasileira</text>
          </svg>
          <figcaption>O hibridismo cultural produz um "terceiro espaço" que não pertence a nenhuma das culturas originais.</figcaption>
        </figure>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🥁</span>
            <h3>Samba</h3>
            <p>Síntese de ritmos africanos (lundum, batuque) com instrumentos europeus (violão, cavaquinho) e poesia popular carioca — patrimônio imaterial da UNESCO desde 2005.</p>
          </div>
          <div className="lesson-card">
            <span>🕯️</span>
            <h3>Umbanda</h3>
            <p>Religião genuinamente brasileira que sintetiza candomblé (orixás africanos), catolicismo (santos) e espiritismo (kardecismo europeu) — hibridismo religioso único no mundo.</p>
          </div>
          <div className="lesson-card">
            <span>🥘</span>
            <h3>Culinária baiana</h3>
            <p>Dendê e quiabo africanos + mandioca e pimenta indígenas + técnicas culinárias europeias = acarajé, vatapá, moqueca — registradas como patrimônio imaterial brasileiro.</p>
          </div>
          <div className="lesson-card">
            <span>🤸</span>
            <h3>Capoeira</h3>
            <p>Arte marcial criada por escravizados no Brasil colonial, misturando luta, dança, música e filosofia afro-brasileira — patrimônio imaterial da UNESCO desde 2014.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Indústria Cultural</span>
        <h2>7. Indústria Cultural e Homogeneização</h2>
        <p>
          Os filósofos alemães <strong>Theodor Adorno</strong> e <strong>Max Horkheimer</strong>,
          da Escola de Frankfurt, cunharam o conceito de <strong>indústria cultural</strong>
          em <em>Dialética do Esclarecimento</em> (1944). Para eles, a globalização cultural
          não promove diversidade, mas <strong>homogeneização</strong>: a cultura é produzida
          como mercadoria padronizada para consumo de massa, neutralizando a capacidade crítica
          do público e transformando arte em entretenimento conformista.
        </p>
        <p>
          O risco da globalização cultural é o que se chama de <strong>imperialismo cultural</strong>:
          a exportação da cultura americana (filmes Hollywood, música pop, fast food, redes sociais)
          em escala planetária tende a marginalizar culturas locais. O sociólogo francês
          <strong> Pierre Bourdieu</strong> alertou para o perigo da mundialização da cultura:
          quando a cultura dos países ricos ocupa todos os espaços, as culturas populares
          locais ficam sem financiamento, distribuição e reconhecimento, ameaçando a
          biodiversidade cultural do planeta.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>Cultura de massas (indústria cultural)</th>
                <th>Cultura popular autônoma</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Produção</strong></td>
                <td>Industrial, padronizada, seriada — visa lucro máximo</td>
                <td>Artesanal, coletiva, anônima — visa expressão e identidade</td>
              </tr>
              <tr>
                <td><strong>Conteúdo</strong></td>
                <td>Padronizado para atingir o maior público; evita o controverso</td>
                <td>Diverso, regional, local; frequentemente crítico e subversivo</td>
              </tr>
              <tr>
                <td><strong>Função social</strong></td>
                <td>Entretenimento, evasão, consumo — mantém o status quo</td>
                <td>Identidade, resistência, memória coletiva, crítica social</td>
              </tr>
              <tr>
                <td><strong>Exemplo brasileiro</strong></td>
                <td>Sertanejo universitário produzido para festivais patrocinados</td>
                <td>Repente nordestino, maracatu, jongo, cocos de umbigada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ação Afirmativa</span>
        <h2>8. Políticas Afirmativas e Multiculturalismo no Brasil</h2>
        <p>
          O multiculturalismo não é apenas uma posição filosófica — exige políticas concretas
          de reconhecimento e redistribuição. No Brasil, as principais políticas afirmativas
          voltadas para grupos culturalmente marginalizados incluem a <strong>Lei de Cotas
          Raciais</strong> (Lei 12.711/2012), que reserva vagas em universidades federais
          e institutos técnicos para estudantes de escolas públicas, pretos, pardos e
          indígenas; a <strong>Lei 10.639/2003</strong>, que tornou obrigatório o ensino de
          história e cultura afro-brasileira e africana em toda a educação básica; e o
          <strong> Estatuto do Índio</strong> e a política de demarcação de terras indígenas
          prevista no Art. 231 da Constituição de 1988.
        </p>
        <p>
          A demarcação de terras indígenas é tanto uma política multicultural (preservação
          de modos de vida e territórios tradicionais) quanto de justiça histórica (reparação
          pelo genocídio e expropriação colonial). Em 2023, o Brasil tinha aproximadamente
          700 terras indígenas, das quais cerca de 440 estavam oficialmente demarcadas —
          cobrindo 13% do território nacional. A pressão do agronegócio sobre essas terras
          tornou a questão um dos conflitos mais agudos da política ambiental e multicultural
          brasileira.
        </p>
        <div className="lesson-highlight">
          <h3>A controvérsia das cotas raciais</h3>
          <p>
            As cotas raciais dividem opiniões: defensores argumentam que compensam séculos
            de exclusão estrutural e que a meritocracia formal é cega às desigualdades de
            ponto de partida (capital cultural, escola pública vs. particular). Críticos
            argumentam que as cotas reforçam a categorização racial em vez de combatê-la,
            e que critérios socioeconômicos seriam mais adequados. O STF julgou as cotas
            constitucionais em 2012 (ADPF 186), reconhecendo que a igualdade formal
            é insuficiente para superar desigualdades históricas profundas.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Identidade</span>
        <h2>9. Identidade Nacional e Identidades Múltiplas</h2>
        <p>
          O sociólogo jamaicano-britânico <strong>Stuart Hall</strong>, em <em>A Identidade
          Cultural na Pós-Modernidade</em> (1992), argumentou que as identidades modernas
          estão em crise: enquanto o século XIX construiu identidades nacionais monolíticas
          e estáveis ("ser brasileiro", "ser francês"), a globalização e a pós-modernidade
          fragmentaram essas identidades em múltiplas e contraditórias. O sujeito pós-moderno
          não tem uma identidade fixa, permanente ou unificada — ela é "celebrada" como
          provisória, variável e problemática.
        </p>
        <p>
          No Brasil, a questão da <strong>identidade nacional</strong> foi historicamente
          construída em torno do mito da <em>democracia racial</em> — a ideia de que
          a mestiçagem havia criado uma sociedade harmoniosa sem barreiras raciais rígidas
          (Gilberto Freyre, <em>Casa-Grande e Senzala</em>, 1933). Florestan Fernandes e
          outros sociólogos críticos desmontaram esse mito: a mestiçagem não eliminou o
          racismo, apenas o tornou menos explícito e mais difícil de combater. A identidade
          nacional brasileira é, portanto, um campo de disputa entre a narrativa oficial
          da harmonia e as experiências reais de exclusão e discriminação.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏴</span>
            <h3>Identidade étnica</h3>
            <p>Pertencimento a um grupo com cultura, língua e história compartilhadas. No Brasil: identidades indígenas, quilombolas, de comunidades de imigrantes italianos, alemães, japoneses.</p>
          </div>
          <div className="lesson-card">
            <span>♀️</span>
            <h3>Identidade de gênero</h3>
            <p>Sentido interno de pertencimento a um gênero — pode ou não coincidir com o sexo biológico. As lutas LGBTQIA+ tensionam identidades de gênero binárias e tradicionais.</p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Identidade global</h3>
            <p>Emergência de identidades transnacionais: "cidadão do mundo", identidade consumista global (usuário de Apple, fã do BTS), identidades digitais em comunidades online.</p>
          </div>
          <div className="lesson-card">
            <span>🏘️</span>
            <h3>Identidade local</h3>
            <p>Pertencimento ao lugar (nordestino, carioca, gaúcho) como reação à homogeneização global. "Quanto mais global o mundo, mais as pessoas se apegam ao local" (Giddens).</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Para o ENEM</span>
        <h2>10. Etnocentrismo, Relativismo e Multiculturalismo no ENEM</h2>
        <p>
          Este é um dos temas mais frequentes nas questões de Sociologia do ENEM, aparecendo
          em contextos variados: imigração, colonialismo, diversidade religiosa, políticas
          afirmativas e globalização cultural. As questões quase sempre partem de um texto
          ou imagem que descreve uma situação de encontro ou conflito cultural e pedem que
          o estudante identifique o conceito correto.
        </p>
        <p>
          A armadilha mais comum é confundir etnocentrismo com racismo ou xenofobia. O
          etnocentrismo é mais amplo: qualquer povo pode ser etnocêntrico em relação a qualquer
          outro, independentemente de raça. Já o racismo envolve especificamente a hierarquização
          com base em raça/cor, frequentemente articulada com relações de poder histórico.
          O relativismo metodológico (suspender julgamentos para compreender) não implica
          relativismo ético total (aceitar qualquer prática por ser "cultural").
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Definição objetiva</th>
                <th>Autor(es)</th>
                <th>Armadilha comum no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Etnocentrismo</strong></td>
                <td>Julgar outras culturas pelos valores da própria, tomando-a como superior</td>
                <td>William G. Sumner (1906)</td>
                <td>Confundir com racismo — etnocentrismo não exige categorização racial</td>
              </tr>
              <tr>
                <td><strong>Relativismo cultural</strong></td>
                <td>Compreender cada cultura a partir de seus próprios valores e contexto</td>
                <td>Franz Boas</td>
                <td>Confundir relativismo metodológico com relativismo ético absoluto</td>
              </tr>
              <tr>
                <td><strong>Multiculturalismo</strong></td>
                <td>Proposta política de reconhecimento e valorização das diferenças culturais</td>
                <td>Charles Taylor</td>
                <td>Confundir tolerância (aceitar) com reconhecimento (afirmar positivamente)</td>
              </tr>
              <tr>
                <td><strong>Hibridismo</strong></td>
                <td>Produto do encontro entre culturas; novo espaço que não pertence a nenhuma das originais</td>
                <td>Homi Bhabha / García Canclini</td>
                <td>Pensar que hibridismo = destruição de culturas "puras" — culturas nunca foram puras</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Dica de ouro: relativismo metodológico ≠ relativismo ético</h3>
          <p>
            O ENEM frequentemente apresenta dilemas sobre os limites do relativismo cultural.
            Lembre-se: <strong>relativismo metodológico</strong> é suspender julgamentos para
            compreender uma cultura (postura científica). <strong>Relativismo ético absoluto</strong>
            seria dizer que nenhuma prática pode ser criticada — posição incoerente com os Direitos
            Humanos. A maioria dos antropólogos e do próprio ENEM defende a posição intermediária:
            compreender sem abrir mão da crítica a violações da dignidade humana.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Definição de etnocentrismo"
          statement={
            <p>
              Etnocentrismo é a tendência de:
            </p>
          }
          options={[
            { letter: "A", text: "Valorizar todas as culturas igualmente, sem hierarquias ou julgamentos de valor." },
            { letter: "B", text: "Estudar a própria cultura como objeto científico, sem interferência de preconceitos." },
            { letter: "C", text: "Julgar outras culturas tomando a própria como referência superior e universal.", correct: true },
            { letter: "D", text: "Promover a mistura e a hibridização de diferentes tradições culturais." },
            { letter: "E", text: "Preservar culturas tradicionais ameaçadas pela globalização e pela modernização." },
          ]}
          resolution={
            <p>
              Etnocentrismo é o ato de julgar ou interpretar outras culturas usando os próprios valores
              culturais como parâmetro universal. Implica a crença implícita ou explícita de que a própria
              cultura é superior ou mais "correta" que as demais.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Franz Boas e o relativismo"
          statement={
            <p>
              Franz Boas desenvolveu o relativismo cultural como resposta científica ao evolucionismo cultural
              do século XIX. O evolucionismo cultural afirmava que:
            </p>
          }
          options={[
            { letter: "A", text: "Todas as culturas são igualmente válidas e não podem ser comparadas entre si." },
            { letter: "B", text: "As culturas evoluem em direções diferentes e não há progresso histórico universal." },
            { letter: "C", text: "As sociedades humanas seguem uma escala evolutiva única, do 'primitivo' ao 'civilizado', com o Ocidente no topo.", correct: true },
            { letter: "D", text: "A evolução biológica determina diretamente as diferenças culturais entre os povos." },
            { letter: "E", text: "As culturas são sistemas fechados que não se comunicam nem se influenciam mutuamente." },
          ]}
          resolution={
            <p>
              O evolucionismo cultural (Lewis Morgan, Herbert Spencer) classificava as sociedades em "selvagem",
              "bárbaro" e "civilizado", colocando a Europa Ocidental no topo. Boas refutou essa hierarquia
              ao mostrar que as diferenças culturais refletem histórias particulares, não estágios de
              desenvolvimento universal.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Limites do relativismo"
          statement={
            <p>
              Uma estudante de Antropologia afirma: "Sendo relativista cultural, não posso condenar nenhuma
              prática cultural, nem mesmo a execução pública de pessoas por questões religiosas." Essa posição
              é problemática porque:
            </p>
          }
          options={[
            { letter: "A", text: "O relativismo cultural proíbe qualquer forma de comparação entre culturas diferentes." },
            { letter: "B", text: "O relativismo radical impossibilita a denúncia de violações dos direitos humanos, tornando-se cúmplice de atrocidades.", correct: true },
            { letter: "C", text: "A Antropologia não estuda práticas jurídicas ou religiosas, apenas cultura material." },
            { letter: "D", text: "Apenas etnólogos com formação avançada podem emitir julgamentos sobre práticas culturais alheias." },
            { letter: "E", text: "O relativismo cultural aplica-se apenas a práticas de povos indígenas, não a culturas nacionais modernas." },
          ]}
          resolution={
            <p>
              O relativismo metodológico — suspender julgamentos para compreender — não implica relativismo
              ético absoluto. A maioria dos antropólogos contemporâneos defende que é possível compreender
              práticas culturais em seus contextos sem abrir mão do compromisso com a dignidade humana
              universal. O relativismo radical, que proíbe qualquer julgamento ético, torna impossível
              condenar genocídios, escravidão ou torturas.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Políticas de reconhecimento"
          statement={
            <p>
              O filósofo Charles Taylor distingue entre "política de tolerância" e "política de
              reconhecimento". Qual é a diferença fundamental entre elas no contexto do multiculturalismo?
            </p>
          }
          options={[
            { letter: "A", text: "A tolerância exige integração cultural; o reconhecimento defende a separação dos grupos étnicos em territórios distintos." },
            { letter: "B", text: "A tolerância aceita passivamente a existência do diferente; o reconhecimento afirma positivamente o valor da identidade cultural do outro.", correct: true },
            { letter: "C", text: "A tolerância é liberal; o reconhecimento é marxista, pois foca nas relações de classe." },
            { letter: "D", text: "A tolerância aplica-se a questões religiosas; o reconhecimento, a questões étnicas e raciais." },
            { letter: "E", text: "São sinônimos usados por Taylor em contextos diferentes dentro de sua filosofia política." },
          ]}
          resolution={
            <p>
              Para Taylor, a simples tolerância ("te suporto, ainda que você seja diferente") é insuficiente
              para o pleno reconhecimento democrático. A política de reconhecimento exige que o Estado e a
              sociedade afirmem positivamente o valor das identidades culturais das minorias, não apenas
              permita sua existência. Essa distinção fundamenta debates sobre cotas, ensino de línguas
              indígenas e territórios quilombolas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Xenofobia no Brasil"
          statement={
            <p>
              Com a crise venezuelana a partir de 2015, milhares de venezuelanos migraram para o Brasil,
              concentrando-se em Roraima e depois espalhando-se pelo país. Episódios de violência contra
              venezuelanos em Pacaraima (2018) geraram debate nacional. Sociologicamente, esses eventos
              expressam principalmente:
            </p>
          }
          options={[
            { letter: "A", text: "O relativismo cultural levado ao extremo, que impede a integração dos migrantes à cultura brasileira." },
            { letter: "B", text: "A anomia social causada pela ausência de normas regulatórias sobre migração no Brasil." },
            { letter: "C", text: "Xenofobia e etnocentrismo manifestados como discriminação e violência contra o grupo percebido como ameaça cultural e econômica.", correct: true },
            { letter: "D", text: "A solidariedade mecânica durkheimiana que reage contra elementos externos ao grupo." },
            { letter: "E", text: "O multiculturalismo crítico que resiste à imposição da cultura venezuelana sobre comunidades locais." },
          ]}
          resolution={
            <p>
              A violência contra venezuelanos em Pacaraima exemplifica xenofobia (aversão ao estrangeiro) e
              discriminação (tratamento prejudicial baseado em origem nacional). O etnocentrismo está
              presente na percepção dos venezuelanos como "inferiores" ou "ameaçadores". Sociologicamente,
              esse fenômeno se intensifica em contextos de crise econômica e competição por recursos escassos.
            </p>
          }
        />
      </section>
    </article>
  );
}
