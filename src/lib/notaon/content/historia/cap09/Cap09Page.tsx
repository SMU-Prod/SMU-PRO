"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap09Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 9</span>
          <h1>Grécia Antiga: Formação, Democracia e Cultura</h1>
          <p>
            A Grécia Antiga é o berço de algumas das mais poderosas tradições intelectuais,
            artísticas e políticas do mundo ocidental: a democracia, a filosofia, o teatro,
            a historiografia, os Jogos Olímpicos e a ciência racional surgem nessa pequena
            faixa de território banhada pelo Mediterrâneo. Ao mesmo tempo, a democracia
            ateniense exclui mulheres, escravos e estrangeiros de seus direitos políticos;
            Esparta constrói um Estado militarista sobre o trabalho forçado dos ilotas;
            e as Guerras Médicas revelam tanto a grandeza heróica quanto a brutalidade da
            política de poder. Entender a Grécia Antiga é, portanto, entender tanto os
            fundamentos do Ocidente quanto suas contradições originais.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 1 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Origens</span>
        <h2>1. Do Período Micênico aos Séculos Obscuros</h2>
        <p>
          A história da Grécia Antiga começa muito antes da época clássica (séculos V-IV a.C.)
          que popularmente associamos a Atenas, Sócrates e Péricles. A civilização micênica
          (c. 1600–1100 a.C.) foi a primeira grande civilização da Grécia continental: baseada
          em palácios fortalificados como Micenas, Tirinto e Pilos, era uma cultura guerreira
          e mercantil que mantinha contatos com o Egito, o Oriente Próximo e Creta (cujos
          minoicos haviam criado uma das primeiras escritas europeias, o Linear A). Os micênicos
          criaram sua própria escrita, o Linear B (um silabário grego primitivo), e provavelmente
          participaram do lendário conflito da Guerra de Troia (c. 1200 a.C.), imortalizado
          séculos depois por Homero na Ilíada e na Odisseia.
        </p>
        <p>
          Por volta de 1200–1100 a.C., a civilização micênica entrou em colapso — parte de uma
          crise sistêmica que destruiu quase todas as civilizações do Mediterrâneo Oriental
          nesse período (incluindo o Império Hitita e muitas cidades fenícias). As causas são
          debatidas: invasões dos chamados "Povos do Mar", secas, conflitos internos, colapso
          das rotas comerciais. O resultado foi um período de dois a três séculos de declínio
          demográfico, abandono da escrita e retração das cidades: os chamados "Séculos Obscuros"
          (c. 1100–800 a.C.). A Grécia clássica emergiu lentamente desse período de obscuridade
          como uma civilização renovada, sem a memória de sua própria escrita micênica.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Período</th>
                <th>Datas aprox.</th>
                <th>Características</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Minoico (Creta)</td>
                <td>c. 2700–1450 a.C.</td>
                <td>Palácio de Cnossos; Linear A; influência egéia</td>
              </tr>
              <tr>
                <td>Micênico</td>
                <td>c. 1600–1100 a.C.</td>
                <td>Palácios fortalificados; Linear B; Guerra de Troia</td>
              </tr>
              <tr>
                <td>Séculos Obscuros</td>
                <td>c. 1100–800 a.C.</td>
                <td>Declínio demográfico; abandono da escrita; retração urbana</td>
              </tr>
              <tr>
                <td>Período Arcaico</td>
                <td>c. 800–500 a.C.</td>
                <td>Surgimento das póleis; colonização; alfabeto; Homero</td>
              </tr>
              <tr>
                <td>Período Clássico</td>
                <td>c. 500–336 a.C.</td>
                <td>Democracia ateniense; Guerras Médicas; filosofia; arte</td>
              </tr>
              <tr>
                <td>Período Helenístico</td>
                <td>336–30 a.C.</td>
                <td>Alexandre Magno; difusão da cultura grega; sincretismo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SEÇÃO 2 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Organização Política</span>
        <h2>2. As Póleis: Cidades-Estado Gregas</h2>
        <p>
          A unidade política fundamental da Grécia Antiga não era o Estado nacional, mas a
          pólis (plural: póleis) — a cidade-Estado independente. A geografia da Grécia favorecia
          essa fragmentação: o território é recortado por montanhas que isolam vales e planícies,
          criando comunidades relativamente separadas entre si. Cada pólis era composta por uma
          cidade (frequentemente com uma acrópole — colina fortificada com o templo principal)
          e o território rural ao redor. As póleis eram politicamente soberanas: cada uma tinha
          seu próprio governo, suas leis, sua moeda, seu exército e seus deuses protetores.
          Culturalmente, porém, compartilhavam a língua grega, os Jogos Olímpicos (onde a guerra
          era suspensa durante os jogos), os oráculos (especialmente Delfos) e os festivais
          religiosos pan-helênicos.
        </p>
        <p>
          As póleis gregas experimentaram diversas formas de governo ao longo do período
          arcaico e clássico: monarquia (governada por um rei), oligarquia (governo dos ricos),
          tirania (governo de um líder que tomou o poder de forma irregular, nem sempre
          necessariamente cruel no sentido moderno), e democracia (governo do povo — mas um
          povo muito restrito, como veremos). Havia cerca de 700-1000 póleis na Grécia Antiga,
          a maioria pequena, com populações de alguns milhares de habitantes. As maiores e mais
          importantes eram Atenas (no Ática), Esparta (na Lacônia), Corinto, Tebas, Argos e
          Siracusa (na Sicília).
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 220" width="720" height="220" aria-label="Diagrama comparando Atenas e Esparta">
            <rect x="0" y="0" width="720" height="220" fill="#f0f4f8" />

            {/* Título */}
            <text x="360" y="22" fontSize="13" textAnchor="middle" fill="#2c3e50" fontWeight="bold">
              ATENAS × ESPARTA — Comparação das Duas Principais Póleis
            </text>

            {/* Coluna Atenas */}
            <rect x="20" y="35" width="310" height="170" rx="8" fill="#2980b9" fillOpacity="0.12" stroke="#2980b9" strokeWidth="1.5" />
            <text x="175" y="55" fontSize="13" textAnchor="middle" fill="#2980b9" fontWeight="bold">ATENAS</text>

            {[
              "Democracia direta (desde Clístenes, 508 a.C.)",
              "Economia: comércio, artesanato, prata (Laurion)",
              "Educação: filosofia, retórica, artes, música",
              "Cidadãos: homens livres, nascidos em Atenas",
              "Mulheres: reclusas ao lar (oikos), sem direitos políticos",
              "Escravos: 1/3 da população (trabalho nas minas)",
              "Poder militar: frota naval (trirremes)",
              "Principal realização: filosofia, democracia, teatro",
            ].map((line, i) => (
              <text key={i} x="35" y={75 + i * 16} fontSize="9.5" fill="#1a3a5a">• {line}</text>
            ))}

            {/* Vs central */}
            <circle cx="360" cy="120" r="22" fill="#e74c3c" />
            <text x="360" y="125" fontSize="16" textAnchor="middle" fill="white" fontWeight="bold">VS</text>

            {/* Coluna Esparta */}
            <rect x="390" y="35" width="310" height="170" rx="8" fill="#c0392b" fillOpacity="0.12" stroke="#c0392b" strokeWidth="1.5" />
            <text x="545" y="55" fontSize="13" textAnchor="middle" fill="#c0392b" fontWeight="bold">ESPARTA</text>

            {[
              "Oligarquia militarista (dois reis + Éforos + Gerúsia)",
              "Economia: agricultura (trabalho dos ilotas)",
              "Educação: agogé — treinamento militar desde os 7 anos",
              "Cidadãos: espartiatas (minoria guerreira privilegiada)",
              "Mulheres: mais liberdade (educação física, propriedade)",
              "Ilotas: servos de Estado — 90% da população",
              "Poder militar: infantaria pesada (falange hoplita)",
              "Principal realização: disciplina militar, estabilidade",
            ].map((line, i) => (
              <text key={i} x="400" y={75 + i * 16} fontSize="9.5" fill="#4a1a1a">• {line}</text>
            ))}
          </svg>
          <figcaption>
            Quadro comparativo entre Atenas e Esparta, as duas póleis mais importantes da
            Grécia Antiga, evidenciando suas diferenças radicais de organização política,
            social, econômica e cultural.
          </figcaption>
        </figure>
      </section>

      {/* ─── SEÇÃO 3 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Esparta</span>
        <h2>3. Esparta: O Estado Militarista e os Ilotas</h2>
        <p>
          Esparta (Lacedemônia) foi uma das mais poderosas e singulares cidades-Estado da
          Grécia. Localizada no vale do rio Eurotas, no Peloponeso, Esparta desenvolveu um
          sistema político e social único no mundo grego, voltado integralmente para a produção
          de guerreiros de elite. Sua organização política era uma oligarquia mista: dois reis
          hereditários chefiavam o exército e exerciam funções religiosas; o Conselho de
          Anciãos (Gerúsia), composto por 28 homens acima de 60 anos mais os dois reis,
          deliberava sobre questões de Estado; a Assembleia (Apela) de cidadãos adultos do
          sexo masculino aprovava ou rejeitava propostas; e cinco Éforos eleitos anualmente
          supervisionavam reis e magistrados, detendo o poder real.
        </p>
        <p>
          A base da sociedade espartana era o trabalho forçado dos ilotas — uma população
          helônica conquistada e reduzida à servidão coletiva pelo Estado. Os ilotas eram
          servos do Estado (não de indivíduos, como os escravos atenienses), forçados a cultivar
          as terras dos espartiatas e a entregar parte da colheita. Eram tão numerosos que
          os espartiatas viviam em constante temor de revolta: anualmente, a Cripta (polícia
          secreta espartana) realizava uma "caçada" ritual aos ilotas que se destacavam,
          justificando-a como exercício militar para os jovens. A repressão sistemática dos
          ilotas exigia que Esparta mantivesse um aparato militar permanente, moldando toda
          a sociedade em torno da guerra.
        </p>
        <p>
          A educação espartana, conhecida como agogé, era controlada pelo Estado e começava
          aos 7 anos, quando os meninos eram separados das famílias para viver em grupos militares.
          Treinamento físico exaustivo, resistência ao frio e à fome, disciplina severa e
          lealdade ao grupo eram os fundamentos da formação espartana. Paradoxalmente, as mulheres
          espartanas tinham mais liberdade que as atenienses: praticavam esportes, podiam possuir
          propriedades e participavam da vida pública — porque precisavam ser saudáveis para
          gerar guerreiros sadios.
        </p>
      </section>

      {/* ─── SEÇÃO 4 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Atenas</span>
        <h2>4. A Democracia Ateniense: Fundamentos e Limitações</h2>
        <p>
          A democracia ateniense é considerada a primeira experiência de governo democrático
          da história, e seu modelo influenciou profundamente as teorias políticas modernas.
          Suas origens estão nas reformas de Sólon (594 a.C.), que aboliu a escravidão por
          dívidas e criou uma constituição baseada em classes de renda; de Clístenes (508 a.C.),
          que reorganizou os cidadãos em dez tribos geográficas e criou a Eclésia (assembleia
          popular) como principal órgão de decisão; e de Péricles (461–429 a.C.), que
          democratizou o acesso aos cargos públicos e tornou o governo uma prática cotidiana
          dos cidadãos.
        </p>
        <p>
          As três principais instituições da democracia ateniense eram: a Eclésia (assembleia
          de todos os cidadãos, que se reunia até 40 vezes por ano para decidir leis, guerras
          e tratados); a Bulé (Conselho dos 500, sorteado por tribo, que preparava a pauta
          da Eclésia e administrava o dia a dia); e a Heliaia (tribunal popular de 6.000 jurados
          sorteados, responsável pelos julgamentos). O mecanismo do ostracismo permitia à
          Eclésia exilar por dez anos qualquer cidadão considerado perigoso à democracia —
          sem acusação formal de crime.
        </p>
        <p>
          As limitações da democracia ateniense são, porém, cruciais para entender seu real
          alcance. Cidadão em Atenas era exclusivamente o homem livre, adulto, filho de pai
          ateniense — após a lei de Péricles de 451 a.C., o filho de mãe ateniense. Isso
          excluía da participação política: as mulheres (reclusas ao lar, sem direitos políticos
          nem educação formal); os escravos (cerca de 1/3 da população total — de 100.000 a
          150.000 pessoas nas estimativas mais aceitas); e os metecos (estrangeiros livres
          residentes em Atenas — comerciantes, artesãos, intelectuais — que pagavam impostos
          mas não votavam). Estimativas sugerem que apenas 10–15% da população total de Atenas
          participava efetivamente da democracia.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 200" width="720" height="200" aria-label="Esquema da democracia ateniense: Eclésia, Bulé e Heliaia">
            <rect x="0" y="0" width="720" height="200" fill="#eaf4ea" />
            <text x="360" y="22" fontSize="13" textAnchor="middle" fill="#1a4a2a" fontWeight="bold">
              ESTRUTURA DA DEMOCRACIA ATENIENSE
            </text>

            {/* Eclésia no centro alto */}
            <rect x="270" y="30" width="180" height="52" rx="8" fill="#27ae60" />
            <text x="360" y="52" fontSize="12" textAnchor="middle" fill="white" fontWeight="bold">ECLÉSIA</text>
            <text x="360" y="66" fontSize="9" textAnchor="middle" fill="#d0ffe0">Assembleia Popular</text>
            <text x="360" y="78" fontSize="9" textAnchor="middle" fill="#d0ffe0">~40.000 cidadãos elegíveis</text>

            {/* Bulé (esquerda) */}
            <rect x="60" y="115" width="190" height="52" rx="8" fill="#2980b9" />
            <text x="155" y="137" fontSize="12" textAnchor="middle" fill="white" fontWeight="bold">BULÉ</text>
            <text x="155" y="151" fontSize="9" textAnchor="middle" fill="#d0e8ff">Conselho dos 500</text>
            <text x="155" y="163" fontSize="9" textAnchor="middle" fill="#d0e8ff">Sorteados; administração</text>

            {/* Heliaia (direita) */}
            <rect x="470" y="115" width="190" height="52" rx="8" fill="#8e44ad" />
            <text x="565" y="137" fontSize="12" textAnchor="middle" fill="white" fontWeight="bold">HELIAIA</text>
            <text x="565" y="151" fontSize="9" textAnchor="middle" fill="#e8d0ff">Tribunal Popular</text>
            <text x="565" y="163" fontSize="9" textAnchor="middle" fill="#e8d0ff">6.000 jurados sorteados</text>

            {/* Estrategos (baixo centro) */}
            <rect x="270" y="115" width="180" height="52" rx="8" fill="#e67e22" />
            <text x="360" y="137" fontSize="12" textAnchor="middle" fill="white" fontWeight="bold">ESTRATEGOS</text>
            <text x="360" y="151" fontSize="9" textAnchor="middle" fill="#fff0d0">10 generais eleitos</text>
            <text x="360" y="163" fontSize="9" textAnchor="middle" fill="#fff0d0">Único cargo por eleição</text>

            {/* Linhas de conexão */}
            <line x1="270" y1="82" x2="155" y2="115" stroke="#2980b9" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="360" y1="82" x2="360" y2="115" stroke="#e67e22" strokeWidth="1.5" strokeDasharray="4,3" />
            <line x1="450" y1="82" x2="565" y2="115" stroke="#8e44ad" strokeWidth="1.5" strokeDasharray="4,3" />

            <text x="360" y="192" fontSize="9" textAnchor="middle" fill="#555" fontStyle="italic">
              Participação limitada a cidadãos (homens livres, nascidos em Atenas) — excluídas mulheres, escravos e metecos
            </text>
          </svg>
          <figcaption>
            Esquema das principais instituições da democracia ateniense: Eclésia (assembleia
            popular), Bulé (conselho administrativo) e Heliaia (tribunal). Os Estrategos eram
            o único cargo de importância eleito por voto direto, não por sorteio.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo social</th>
                <th>Direitos políticos</th>
                <th>Situação jurídica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cidadãos (homens livres, pais atenienses)</td>
                <td>Votam, ocupam cargos, servem no exército</td>
                <td>Plenos direitos civis e políticos</td>
              </tr>
              <tr>
                <td>Mulheres cidadãs</td>
                <td>Nenhum direito político</td>
                <td>Juridicamente subordinadas ao kyrios (pai/marido)</td>
              </tr>
              <tr>
                <td>Metecos (estrangeiros livres)</td>
                <td>Nenhum direito político</td>
                <td>Pagam impostos; podem trabalhar; não podem possuir terra</td>
              </tr>
              <tr>
                <td>Escravos</td>
                <td>Nenhum direito</td>
                <td>Propriedade de seus donos; sem personalidade jurídica</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SEÇÃO 5 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Guerras</span>
        <h2>5. As Guerras Médicas (499–449 a.C.)</h2>
        <p>
          As Guerras Médicas foram o conjunto de conflitos entre o Império Persa (Aquemênida)
          e as cidades-Estado gregas, que definiram o destino da civilização ocidental. O pano
          de fundo era o controle das cidades gregas da Jônia (costa oeste da atual Turquia),
          que estavam sob domínio persa desde o século VI a.C. Em 499 a.C., essas cidades
          se rebelaram com apoio de Atenas e Erétreia — a chamada Revolta Jônica — levando
          o rei Dario I a organizar uma expedição punitiva contra a Grécia.
        </p>
        <p>
          A Batalha de Maratona (490 a.C.) foi a primeira grande vitória grega: os atenienses,
          superados em número mas bem organizados em falange hoplita, derrotaram o exército
          persa na planície de Maratona e forçaram sua retirada. A lenda diz que o mensageiro
          Pheidippides correu de Maratona até Atenas para anunciar a vitória, morrendo ao
          chegar — origem da maratona moderna de 42,195 km. Dez anos depois, o rei Xerxes I
          organizou a maior invasão: com um exército estimado em centenas de milhares de homens
          (as fontes antigas exageram), cruzou o Helesponto em uma ponte de barcos e invadiu
          a Grécia.
        </p>
        <p>
          As Termópilas (480 a.C.) tornaram-se o símbolo supremo de resistência: o rei
          espartano Leônidas e 300 espartanos (mais aliados gregos) detiveram o exército de
          Xerxes por três dias num desfiladeiro estreito, cobrindo a retirada das forças gregas.
          Traiçoados por um grego que revelou uma trilha alternativa, foram cercados e
          aniquilados. A frota ateniense, comandada por Temístocles, derrotou a esquadra
          persa na Batalha de Salamina (480 a.C.) numa emboscada naval no estreito entre
          a ilha de Salamina e o continente. Essa vitória naval foi decisiva: sem o apoio
          logístico da frota, o exército persa foi forçado a recuar. A Batalha de Plateia
          (479 a.C.) completou a vitória terrestre grega, e os persas nunca mais ameaçaram
          o território da Grécia.
        </p>
      </section>

      {/* ─── SEÇÃO 6 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Conflito interno</span>
        <h2>6. A Guerra do Peloponeso e a Crise da Grécia Clássica</h2>
        <p>
          A vitória nas Guerras Médicas trouxe a Atenas um período de apogeu — o "Século de
          Péricles" (461–429 a.C.) — caracterizado pela construção do Partenon, pelo florescimento
          da filosofia e do teatro e pela consolidação da democracia. Mas a hegemonia ateniense
          gerou desconfiança e ressentimento entre as demais póleis, especialmente Esparta e
          Corinto. A formação da Liga de Delos (aliança militar liderada por Atenas, que
          transformou progressivamente em um império) aprofundou esse antagonismo.
        </p>
        <p>
          A Guerra do Peloponeso (431–404 a.C.), entre a Liga do Peloponeso (liderada por
          Esparta) e a Liga de Delos (liderada por Atenas), foi documentada com rigor por
          Tucídides em sua obra História da Guerra do Peloponeso — um marco da historiografia
          analítica ocidental. A guerra foi longa, brutal e destruidora: uma epidemia devastou
          Atenas em 430 a.C. (matando o próprio Péricles); a fracassada expedição à Sicília
          (415–413 a.C.) custou à Atenas sua frota e seus melhores soldados; e em 404 a.C.,
          Atenas se rendeu a Esparta. A vitória espartana, porém, foi efêmera: Tebas, liderada
          pelo general Epaminondas, derrotou Esparta em Leuctra (371 a.C.). O enfraquecimento
          de todas as póleis por décadas de guerras internas abriu o caminho para a ascensão
          da Macedônia sob Filipe II e seu filho Alexandre.
        </p>
      </section>

      {/* ─── SEÇÃO 7 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Pensamento</span>
        <h2>7. Filosofia Grega: Sócrates, Platão e Aristóteles</h2>
        <p>
          A filosofia grega representa uma das maiores revoluções intelectuais da história
          humana: a substituição da explicação mítica do mundo (através de narrativas dos
          deuses) pela explicação racional, baseada na observação, no argumento lógico e na
          busca de causas naturais. Os pré-socráticos (Tales, Anaxímenes, Heráclito, Parmênides,
          Demócrito) iniciaram essa virada ao buscar um princípio fundamental (arché) que
          explicasse a origem e a natureza do cosmos: água (Tales), ar (Anaxímenes), fogo
          (Heráclito), átomo (Demócrito).
        </p>
        <p>
          Sócrates (470–399 a.C.) deslocou o foco da filosofia da natureza para a ética e
          o conhecimento humano. Não escreveu nada: sua filosofia é conhecida pelos diálogos
          escritos por seu discípulo Platão. O método socrático — a maiêutica, ou "arte de
          partejar ideias" através de perguntas — buscava levar o interlocutor a reconhecer
          sua própria ignorância como ponto de partida para o verdadeiro conhecimento. Acusado
          de corromper a juventude e de impiedade religiosa, foi condenado à morte pela democracia
          ateniense e bebeu cicuta em 399 a.C. — episódio que tornou problemática a relação
          entre democracia e liberdade de pensamento.
        </p>
        <p>
          Platão (428–348 a.C.) sistematizou o pensamento socrático e criou sua própria
          filosofia: a Teoria das Ideias (ou Formas), segundo a qual o mundo sensível que
          percebemos pelos sentidos é apenas uma cópia imperfeita do mundo das Ideias eternas
          e perfeitas (o Bem, o Belo, o Justo, etc.). Em A República, propôs um Estado ideal
          governado por filósofos-reis. Aristóteles (384–322 a.C.), discípulo de Platão e
          tutor de Alexandre Magno, rejeitou a separação platônica entre mundo sensível e
          mundo das ideias: para Aristóteles, as formas estão nas próprias coisas, não num
          mundo separado. Criou a lógica formal, a biologia sistemática, a física, a ética,
          a política e a poética — uma enciclopédia intelectual que dominaria o pensamento
          ocidental até o século XVII.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Filósofo</th>
                <th>Período</th>
                <th>Principais contribuições</th>
                <th>Obras principais</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sócrates</td>
                <td>470–399 a.C.</td>
                <td>Método maiêutico; ética; "sei que nada sei"</td>
                <td>Não escreveu (conhecido por Platão)</td>
              </tr>
              <tr>
                <td>Platão</td>
                <td>428–348 a.C.</td>
                <td>Teoria das Ideias; política ideal; dualismo mente/corpo</td>
                <td>A República, Fédon, O Banquete, Timeu</td>
              </tr>
              <tr>
                <td>Aristóteles</td>
                <td>384–322 a.C.</td>
                <td>Lógica; biologia; física; ética; política; poética</td>
                <td>Ética a Nicômaco, Política, Metafísica, Poética</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SEÇÃO 8 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Arte e Cultura</span>
        <h2>8. Arte, Arquitetura e Teatro Grego</h2>
        <p>
          A arte grega clássica buscou a harmonia, a proporção e o ideal de beleza humana —
          conceitos que influenciaram profundamente a arte ocidental do Renascimento ao século XIX.
          A escultura grega evoluiu do kourós arcaico (estátua rígida e frontal, influência egípcia)
          para o naturalismo dinâmico do período clássico: o Discóbolo de Míron, o Doríforo de
          Policleto (baseado no "cânon" das proporções perfeitas) e as esculturas do Partenon de
          Fídias alcançaram um grau de representação do corpo humano que não seria superado
          até o Renascimento.
        </p>
        <p>
          A arquitetura grega criou as três ordens clássicas (dórica, jônica e coríntia) que
          são a base de toda a arquitetura ocidental dos últimos 2.500 anos: a Acrópole de
          Atenas, com o Partenon (447–432 a.C.) como obra-prima, é o símbolo máximo dessa
          tradição arquitetônica. O teatro grego surgiu dos festivais em honra a Dioniso e
          dividiu-se em dois gêneros principais: a tragédia (que explorava temas de destino,
          conflito moral e catarse — Ésquilo, Sófocles e Eurípides) e a comédia (sátira política
          e social — Aristófanes). As obras de Ésquilo (Prometeu Acorrentado, Oresteia),
          Sófocles (Édipo Rei, Antígona) e Eurípides (Medeia, As Troianas) continuam sendo
          encenadas e estudadas em todo o mundo.
        </p>
      </section>

      {/* ─── SEÇÃO 9 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Jogos Olímpicos</span>
        <h2>9. Os Jogos Olímpicos e a Identidade Pan-Helênica</h2>
        <p>
          Os Jogos Olímpicos da Antiguidade eram um festival religioso e esportivo realizado
          a cada quatro anos em Olímpia, no Peloponeso, em honra a Zeus. A tradição os data
          de 776 a.C. (data do primeiro registro confiável), embora possam ser mais antigos.
          Durante os Jogos, proclamava-se uma trégua sagrada (ekecheiria): as guerras entre
          póleis eram suspensas para que os atletas pudessem competir e retornar em segurança.
          As provas incluíam corridas pedestres (o estádio, o díaulo, o dólico), luta,
          pentatlo (salto, lançamento de disco, lançamento de dardo, corrida e luta),
          pugilato, pancrácio e corridas de carros.
        </p>
        <p>
          Os vencedores não recebiam troféus em dinheiro, mas uma coroa de ramos de oliveira
          selvagem — e uma glória imortal nas odes de poetas como Píndaro. A participação
          era restrita a homens livres de língua grega (excluindo bárbaros e escravos). Os
          Jogos foram proibidos pelo imperador romano Teodósio I em 394 d.C., como parte de
          sua política de cristianização do Império. Foram revividos em 1896, em Atenas, por
          iniciativa do barão Pierre de Coubertin, e tornaram-se o evento esportivo mais
          importante do mundo contemporâneo.
        </p>

        <div className="lesson-highlight">
          <h3>A Democracia Ateniense como Modelo e como Paradoxo</h3>
          <p>
            O ENEM frequentemente pede que os alunos analisem criticamente a democracia
            ateniense: ao mesmo tempo modelo para a democracia moderna (participação direta,
            soberania popular, debate público) e exemplo de suas limitações históricas
            (exclusão de mulheres, escravos e estrangeiros). A questão de fundo — quem conta
            como cidadão com plenos direitos — continua relevante nas democracias contemporâneas,
            onde debates sobre direitos de migrantes, desigualdades de gênero e raça refletem
            tensões semelhantes às da Atenas clássica.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 10 — EXERCÍCIOS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>
        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. As limitações da democracia ateniense"
          statement={
            <p>
              A democracia ateniense do período clássico (séculos V-IV a.C.) é frequentemente
              apontada como a primeira experiência democrática da história. Sobre as
              características e limitações desse sistema, assinale a alternativa correta:
            </p>
          }
          options={[
            { letter: "a", text: "A democracia ateniense era universal: todos os habitantes de Atenas, incluindo mulheres, escravos e estrangeiros, podiam participar das decisões políticas." },
            { letter: "b", text: "Em Atenas, apenas os homens mais ricos tinham direito de voto, pois a democracia era baseada no censo de renda." },
            { letter: "c", text: "A democracia ateniense limitava a participação política a homens livres nascidos de pai (e, depois de 451 a.C., também mãe) atenienses, excluindo mulheres, escravos e metecos — a maioria da população.", correct: true },
            { letter: "d", text: "A democracia ateniense funcionava através de representantes eleitos, semelhante às democracias representativas modernas." },
            { letter: "e", text: "A palavra 'democracia' em grego significa 'governo dos melhores', referindo-se à aristocracia intelectual que governava Atenas." },
          ]}
          resolution={
            <p>
              A alternativa C descreve corretamente a democracia ateniense. Era uma democracia
              direta (não representativa) — os cidadãos votavam pessoalmente na Eclésia — mas
              com um conceito extremamente restrito de cidadania. Estima-se que os cidadãos
              ativos representassem apenas 10–15% da população total de Atenas. A exclusão
              de mulheres, escravos (cerca de 1/3 da população) e metecos (estrangeiros livres
              residentes) revela que a democracia ateniense, apesar de seu legado inspirador,
              era profundamente excludente pelos padrões modernos. Demokratia significa
              "governo do povo" (demos + kratos), mas o "povo" era definido de forma muito
              restrita.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. A comparação entre Atenas e Esparta"
          statement={
            <p>
              As cidades-Estado de Atenas e Esparta representavam modelos opostos de organização
              política, social e cultural na Grécia Antiga. Sobre as diferenças entre as duas
              póleis, assinale a alternativa que apresenta uma comparação historicamente correta:
            </p>
          }
          options={[
            { letter: "a", text: "Tanto Atenas quanto Esparta eram democracias, mas Esparta tinha uma democracia mais participativa que Atenas." },
            { letter: "b", text: "Enquanto Atenas era conhecida pela filosofia, artes e democracia, financiada pelo comércio e pela prata, Esparta era um Estado militarista sustentado pelo trabalho forçado dos ilotas, com governo oligárquico.", correct: true },
            { letter: "c", text: "As mulheres em Atenas tinham mais liberdade e direitos que as mulheres espartanas, participando da vida política e cultural." },
            { letter: "d", text: "Esparta era economicamente mais desenvolvida que Atenas, com maior comércio marítimo e produção artesanal." },
            { letter: "e", text: "Os ilotas espartanos eram escravos particulares, comprados no mercado de escravos do Mediterrâneo, semelhantes aos escravos atenienses." },
          ]}
          resolution={
            <p>
              A alternativa B está correta. Atenas e Esparta representavam dois modelos
              radicalmente diferentes: Atenas, voltada para o comércio, as artes e a
              democracia, com escravos privados trabalhando nas minas de prata de Laurion;
              Esparta, totalmente militarizada, governada por uma oligarquia mista e sustentada
              pelo trabalho coletivo dos ilotas — servos do Estado, não de indivíduos.
              Paradoxalmente, as mulheres espartanas tinham mais liberdade que as atenienses:
              praticavam esportes, podiam possuir propriedades e circular em público — porque
              precisavam ser saudáveis para gerar guerreiros. Os ilotas eram uma categoria
              única: não eram comprados, mas eram populações conquistadas e coletivamente
              submetidas à servidão de Estado.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. A condenação de Sócrates e a democracia"
          statement={
            <p>
              Em 399 a.C., a democracia ateniense condenou à morte Sócrates, acusado de
              impiedade religiosa e de corromper a juventude. Esse episódio é frequentemente
              citado em debates sobre a relação entre democracia e liberdade de pensamento.
              Qual das alternativas abaixo representa a análise historicamente mais sofisticada
              desse episódio?
            </p>
          }
          options={[
            { letter: "a", text: "A condenação de Sócrates prova que a democracia ateniense era uma tirania disfarçada, sem nenhum valor como sistema político." },
            { letter: "b", text: "A condenação de Sócrates foi um erro individual dos juízes populares, sem relação com o funcionamento do sistema democrático ateniense." },
            { letter: "c", text: "A condenação de Sócrates revela uma tensão estrutural das democracias: a maioria popular pode, em certos contextos, suprimir vozes dissidentes, levantando a questão de como proteger minorias e pensamentos heterodoxos em sistemas de governo majoritário.", correct: true },
            { letter: "d", text: "Sócrates foi condenado porque era aristocrata e criticava abertamente a democracia, sendo sua morte uma resposta legítima de autodefesa do sistema." },
            { letter: "e", text: "A condenação de Sócrates não tem relevância para os debates modernos sobre democracia, pois a Grécia Antiga era uma sociedade radicalmente diferente da contemporânea." },
          ]}
          resolution={
            <p>
              A alternativa C apresenta a análise mais madura e historicamente informada.
              A morte de Sócrates é um dos episódios mais discutidos da filosofia política:
              foi a democracia ateniense que o condenou, por maioria de votos, num tribunal
              popular de 501 jurados (votaram 280 a favor da condenação). Isso não "invalida"
              a democracia, mas revela uma de suas tensões estruturais: a possibilidade de a
              maioria oprimir minorias e pensamentos não-conformistas. Platão, profundamente
              traumatizado pela morte de seu mestre, desenvolveu sua crítica à democracia em
              A República justamente a partir desse evento. O debate gerado persiste nas
              democracias modernas: como proteger a liberdade de expressão e os direitos de
              minorias contra possíveis maiorias intolerantes?
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Os Jogos Olímpicos antigos e modernos"
          statement={
            <div>
              <p>
                "Os Jogos Olímpicos antigos eram um festival religioso e político que unia
                os gregos por cima de suas divisões. Os Jogos modernos, revividos em 1896,
                foram concebidos como um projeto de paz e irmandade entre as nações."
              </p>
              <p>
                Considerando as semelhanças e diferenças entre os Jogos Olímpicos da Antiguidade
                e os Jogos Olímpicos contemporâneos, assinale a alternativa que apresenta a
                análise mais completa:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "Os Jogos Olímpicos antigos e modernos são praticamente idênticos, apenas com a adição de mais esportes e a participação feminina." },
            { letter: "b", text: "Os Jogos modernos são uma mera cópia dos antigos, sem nenhuma ressignificação ou adaptação aos valores contemporâneos." },
            { letter: "c", text: "Embora ambos expressem ideais de competição saudável e suspensão de conflitos, os Jogos antigos eram exclusivamente masculinos, religiosos e limitados ao mundo grego, enquanto os modernos pretendem ser universais, laicos e inclusivos — embora na prática enfrentem tensões políticas, comercialização e escândalos de doping que contradizem seus ideais.", correct: true },
            { letter: "d", text: "Os Jogos Olímpicos modernos foram criados como um projeto de imperialismo cultural europeu para impor valores ocidentais ao resto do mundo." },
            { letter: "e", text: "A participação feminina nos Jogos Olímpicos modernos foi aprovada apenas em 2012, nos Jogos de Londres." },
          ]}
          resolution={
            <p>
              A alternativa C apresenta a análise historicamente mais equilibrada. Os Jogos
              Olímpicos da Antiguidade eram radicalmente exclusivos: apenas homens livres de
              língua grega podiam competir; eram religiosos (festival de Zeus); e a trégua
              olímpica servia aos interesses políticos do mundo grego. Os Jogos modernos,
              concebidos por Coubertin em 1896 com ideais de paz e irmandade internacional,
              progressivamente tornaram-se mais inclusivos: as mulheres participaram a partir
              de 1900 (Paris). Porém, na prática os Jogos modernos enfrentam contradições:
              boicotes políticos (1936, 1980, 1984), doping sistematizado, gigantismo
              comercial e os custos sociais das sedes olímpicas que empurram comunidades para
              fora de suas cidades. A mulher tornou-se elegível para competir em TODAS as
              modalidades nos Jogos de 2012.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. A escravidão em Atenas e o legado da democracia"
          statement={
            <div>
              <p>
                "A democracia ateniense e a escravidão não eram contraditórias para os atenienses
                do século V a.C. — eram faces da mesma moeda: a liberdade de uns era sustentada
                pelo trabalho forçado de outros."
              </p>
              <p><em>(Paráfrase de análise de M. I. Finley, historiador da escravidão antiga)</em></p>
              <p>
                Analise a relação entre democracia e escravidão na Atenas clássica e assinale
                a alternativa que melhor compreende essa relação:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "A escravidão e a democracia eram incompatíveis em Atenas, e os atenienses reconheciam essa contradição e lutavam para eliminá-la." },
            { letter: "b", text: "A democracia ateniense era sustentada economicamente pelo trabalho escravo nas minas de prata, na agricultura e na produção artesanal, e seus cidadãos não consideravam essa relação contraditória — pelo contrário, a escravidão era vista como natural e necessária para a liberdade dos cidadãos.", correct: true },
            { letter: "c", text: "A escravidão em Atenas era marginal e afetava poucos indivíduos, sem impacto significativo na economia ou na política da cidade." },
            { letter: "d", text: "Os filósofos gregos, em especial Sócrates e Platão, eram abolicionistas e defendiam ativamente o fim da escravidão." },
            { letter: "e", text: "Os escravos atenienses podiam votar nas assembleias da Eclésia, tendo alguma participação política, diferentemente dos escravos romanos." },
          ]}
          resolution={
            <p>
              A alternativa B descreve corretamente a relação entre democracia e escravidão
              em Atenas. M. I. Finley, um dos maiores historiadores da escravidão antiga,
              argumentou que a escravidão e a democracia floresceram juntas na Grécia antiga:
              a disponibilidade de trabalho escravo liberava os cidadãos das atividades manuais
              para se dedicar à política, às artes e à guerra. Aristóteles chegou a defender
              a escravidão como "natural" em sua Política. Os escravos representavam cerca
              de 1/3 da população ateniense, trabalhando nas minas de prata de Laurion
              (que financiavam a frota naval) e em funções domésticas. Esse paradoxo —
              liberdade política para uns baseada no trabalho forçado de outros — reaparece
              na história: a democracia americana dos Founding Fathers (muitos escravocratas)
              apresenta uma estrutura análoga.
            </p>
          }
        />
      </section>
    </article>
  );
}
