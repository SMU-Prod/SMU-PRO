"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap43Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 43</span>
          <h1>Questões Territoriais Brasileiras: Povos Indígenas, Quilombolas, Fronteiras e Uso do Território</h1>
          <p>
            O território brasileiro não é um espaço homogêneo nem neutro. É palco de disputas
            históricas entre diferentes grupos sociais, modelos de uso da terra e concepções de
            soberania. Povos indígenas, comunidades quilombolas, camponeses sem-terra, ribeirinhos,
            extrativistas e o agronegócio disputam espaço, reconhecimento e direitos sobre o mesmo
            território. Ao mesmo tempo, as fronteiras do Brasil — as mais extensas da América do Sul —
            concentram desafios de soberania, integração regional e segurança. Neste capítulo você
            vai dominar as questões territoriais brasileiras mais cobradas pelo ENEM, articulando
            geografia, história, direitos humanos e políticas públicas.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Terras Indígenas</span>
        <h2>1. Povos Indígenas e a Questão Territorial</h2>
        <p>
          O Brasil tem uma das maiores populações indígenas das Américas: segundo o Censo IBGE 2022,
          são cerca de <strong>1,7 milhão de indígenas</strong> (0,83% da população total), pertencentes
          a pelo menos <strong>305 povos</strong> e falantes de <strong>274 línguas</strong>. Aproximadamente
          60% vivem em <strong>Terras Indígenas (TIs)</strong> demarcadas; os demais vivem em cidades
          ou em áreas rurais fora das TIs.
        </p>
        <p>
          A <strong>Constituição Federal de 1988</strong> foi um marco histórico: reconheceu aos
          índios sua organização social, costumes, línguas, crenças e tradições, e <em>os direitos
          originários</em> sobre as terras que tradicionalmente ocupam. O artigo 231 estabelece que
          essas terras destinam-se à sua posse permanente e que o usufruto exclusivo das riquezas
          do solo, rios e lagos nelas existentes é dos indígenas.
        </p>
        <p>
          O processo de <strong>demarcação</strong> é realizado pela FUNAI (Fundação Nacional dos
          Povos Indígenas, criada em 1967 para substituir o SPI). As etapas são: estudo
          antropológico → relatório circunstanciado → publicação no DOU → contestação →
          declaração ministerial → demarcação física → homologação presidencial → registro em cartório
          e no SPU. Hoje existem ~740 TIs no Brasil, somando ~117 milhões de hectares (cerca de
          13,8% do território nacional), com concentração na Amazônia (~98% da área total das TIs).
        </p>

        <div className="lesson-highlight">
          <h3>Marco temporal: polêmica jurídica</h3>
          <p>
            O "marco temporal" foi uma tese jurídica que defendia que os povos indígenas só teriam
            direito às terras que ocupavam fisicamente em 5 de outubro de 1988 (data da promulgação
            da CF). Em agosto de 2023, o STF julgou a tese <strong>inconstitucional</strong>,
            reconhecendo que o direito indígena é originário (anterior à Constituição) e que
            situações de esbulho (expulsão forçada) não extinguem o direito territorial. A Lei
            14.701/2023 (Lei do Marco Temporal) foi vetada parcialmente pela presidência.
          </p>
        </div>

        {/* SVG: distribuição das TIs por região */}
        <div className="lesson-svg-wrap" style={{ overflowX: "auto" }}>
          <svg viewBox="0 0 680 200" width="100%" style={{ maxWidth: 680, display: "block", margin: "0 auto" }}>
            <rect width="680" height="200" fill="#f8fafc" rx="12" />
            <text x="340" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">
              Distribuição das Terras Indígenas por Região (% da área total)
            </text>
            {/* Barra Norte/Amazônia */}
            <text x="80" y="52" fontSize="11" fill="#334155" textAnchor="middle">Norte</text>
            <rect x="10" y="58" width="570" height="22" fill="#2d6a4f" rx="3" />
            <text x="590" y="73" fontSize="10" fill="#64748b">~98%</text>

            {/* Centro-Oeste */}
            <text x="80" y="97" fontSize="11" fill="#334155" textAnchor="middle">Centro-Oeste</text>
            <rect x="10" y="103" width="12" height="22" fill="#95d5b2" rx="3" />
            <text x="30" y="118" fontSize="10" fill="#64748b">~1%</text>

            {/* Nordeste */}
            <text x="80" y="142" fontSize="11" fill="#334155" textAnchor="middle">Nordeste</text>
            <rect x="10" y="148" width="7" height="22" fill="#b7e4c7" rx="3" />
            <text x="23" y="163" fontSize="10" fill="#64748b">&lt;0,5%</text>

            {/* Sul/Sudeste */}
            <text x="80" y="187" fontSize="11" fill="#334155" textAnchor="middle">Sul/Sudeste</text>
            <rect x="10" y="175" width="5" height="22" fill="#d8f3dc" rx="3" />
            <text x="19" y="190" fontSize="10" fill="#64748b">&lt;0,5%</text>
          </svg>
        </div>

        <Exercise
          level="Básico"
          title="1. Terras indígenas e a Constituição de 1988"
          statement={
            <p>
              A Constituição Federal de 1988 estabeleceu novos parâmetros para a questão indígena
              no Brasil, rompendo com o modelo assimilacionista anterior. Sobre os direitos
              territoriais indígenas segundo a CF/88, assinale a alternativa CORRETA:
            </p>
          }
          options={[
            { letter: "a", text: "A CF/88 transferiu a propriedade das terras indígenas para os próprios povos indígenas, que passaram a ser donos plenos dessas áreas, podendo vendê-las ou arrendá-las." },
            { letter: "b", text: "As terras indígenas são de propriedade da União, mas os povos indígenas têm posse permanente e usufruto exclusivo dos recursos do solo, rios e lagos nelas existentes.", correct: true },
            { letter: "c", text: "A CF/88 reconheceu apenas os direitos territoriais dos povos indígenas já aldeados e em contato permanente com a sociedade nacional, excluindo povos isolados ou de recente contato." },
            { letter: "d", text: "Segundo a CF/88, a demarcação de terras indígenas é competência exclusiva dos estados federados, cabendo à União apenas homologar as decisões estaduais." },
            { letter: "e", text: "A CF/88 estabeleceu que os povos indígenas devem ser progressivamente integrados à comunidade nacional, perdendo suas tradições e línguas em troca de plena cidadania." },
          ]}
          resolution={
            <p>
              Segundo o art. 231 da CF/88, as terras indígenas são <strong>propriedade da União</strong>
              (não dos índios), mas os povos têm direito à <strong>posse permanente</strong> e ao
              <strong> usufruto exclusivo</strong> das riquezas do solo, rios e lagos. A CF/88 abandonou
              o paradigma assimilacionista do Estatuto do Índio de 1973 (Lei 6.001/73) e reconheceu
              a organização social, os costumes, as línguas e as tradições dos povos indígenas —
              inclusive dos isolados e de recente contato. A demarcação é competência federal
              (FUNAI + Ministério da Justiça + Presidente da República).
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Quilombolas</span>
        <h2>2. Territórios Quilombolas e Comunidades Tradicionais</h2>
        <p>
          Os <strong>quilombos</strong> foram comunidades formadas por africanos escravizados que
          fugiram das fazendas coloniais e imperiais, além de indígenas e outros grupos marginalizados.
          O mais famoso foi o <strong>Quilombo dos Palmares</strong> (Alagoas/Pernambuco), que chegou
          a ter ~20.000 habitantes e resistiu por quase um século (c.1600–1694), liderado por Zumbi
          no período final.
        </p>
        <p>
          A CF/88 (art. 68 do ADCT) reconheceu: <em>"Aos remanescentes das comunidades dos quilombos
          que estejam ocupando suas terras é reconhecida a propriedade definitiva, devendo o Estado
          emitir-lhes os títulos respectivos."</em> Diferentemente das TIs (cujas terras são da União),
          os territórios quilombolas podem ser <strong>titulados em nome das próprias comunidades</strong>
          (em forma de propriedade coletiva, inalienável).
        </p>
        <p>
          O órgão responsável pela titulação é o <strong>INCRA</strong> (Instituto Nacional de
          Colonização e Reforma Agrária). O processo envolve: laudo antropológico (RTID) →
          publicação → contestações → portaria ministerial → desintrusão (retirada de ocupantes
          não quilombolas) → titulação. O processo é histórica e notoriamente lento: desde 1988,
          menos de 15% das comunidades certificadas pelo Ministério da Igualdade Racial receberam
          título definitivo.
        </p>
        <p>
          O IBGE/2022 identificou cerca de <strong>1,3 milhão de pessoas</strong> autodeclaradas
          quilombolas no Brasil, concentradas no Nordeste (~70%), no Norte e no Sudeste.
          A Bahia concentra o maior número de comunidades.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Aspecto</th>
              <th>Terras Indígenas</th>
              <th>Territórios Quilombolas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Base constitucional</td>
              <td>Art. 231, CF/88</td>
              <td>Art. 68, ADCT/CF/88</td>
            </tr>
            <tr>
              <td>Propriedade</td>
              <td>União (posse indígena)</td>
              <td>Comunidade (coletiva)</td>
            </tr>
            <tr>
              <td>Órgão responsável</td>
              <td>FUNAI + Min. Justiça</td>
              <td>INCRA + Min. Igualdade Racial</td>
            </tr>
            <tr>
              <td>Documento final</td>
              <td>Decreto de homologação</td>
              <td>Título coletivo</td>
            </tr>
            <tr>
              <td>Concentração regional</td>
              <td>Norte (Amazônia)</td>
              <td>Nordeste (Bahia, MA, PA)</td>
            </tr>
          </tbody>
        </table>

        <Exercise
          level="Intermediário"
          title="2. Quilombos e direitos territoriais"
          statement={
            <><p>
              A história dos quilombos no Brasil é parte fundamental da resistência afrodescendente
              ao regime escravocrata. A CF/88 reconheceu os direitos territoriais das comunidades
              remanescentes.
            </p>
            <p>
              Assinale a alternativa CORRETA sobre os territórios quilombolas:
            </p></>
          }
          options={[
            { letter: "a", text: "Os territórios quilombolas, assim como as terras indígenas, são de propriedade da União, com as comunidades tendo apenas posse e usufruto da área." },
            { letter: "b", text: "O processo de titulação quilombola é de competência dos governos estaduais, sem participação do governo federal ou de órgãos como o INCRA." },
            { letter: "c", text: "A CF/88 reconhece o direito de propriedade coletiva aos remanescentes de quilombos, sendo o INCRA o órgão responsável pela titulação, que ocorre de forma ágil em todo o Brasil." },
            { letter: "d", text: "A CF/88 reconhece aos remanescentes de quilombos o direito de propriedade definitiva das terras que ocupam, sob forma coletiva e inalienável, com o INCRA responsável pela titulação — processo historicamente lento e ainda incompleto.", correct: true },
            { letter: "e", text: "O Quilombo dos Palmares foi o único quilombo de resistência reconhecido historicamente no Brasil, sendo os demais agrupamentos considerados simples favelas rurais sem fundamento histórico documentado." },
          ]}
          resolution={
            <p>
              Diferentemente das TIs (que são propriedade da União com posse indígena), os territórios
              quilombolas reconhecidos pelo art. 68 do ADCT são titulados em nome das próprias comunidades,
              sob forma de propriedade coletiva e inalienável (não pode ser vendida, hipotecada ou
              dividida). O órgão federal responsável é o INCRA, mas o processo é historicamente lento:
              em mais de 35 anos de CF, menos de 15% das mais de 3.000 comunidades certificadas
              receberam título definitivo. O Brasil teve centenas de quilombos ao longo de 3 séculos
              de escravidão — Palmares foi o mais famoso, mas não o único.
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Reforma Agrária</span>
        <h2>3. Conflitos Fundiários, Reforma Agrária e o MST</h2>
        <p>
          O Brasil tem uma das estruturas fundiárias mais concentradas do mundo. O
          <strong> Índice de Gini</strong> da terra brasileira é historicamente superior a 0,8
          (onde 1 = concentração máxima). Segundo o Censo Agropecuário 2017 (IBGE), os
          estabelecimentos com menos de 10 ha representam ~47% do total, mas ocupam apenas ~2,3%
          da área agrícola; já os com mais de 1.000 ha são ~1% dos estabelecimentos, mas detêm
          ~48% da área.
        </p>
        <p>
          A <strong>reforma agrária</strong> é o processo de redistribuição da terra, buscando
          reduzir a concentração fundiária e promover o acesso à terra por trabalhadores rurais.
          A CF/88 estabelece que a propriedade rural deve cumprir sua <strong>função social</strong>
          (art. 186): aproveitamento racional, utilização adequada dos recursos naturais, observância
          da legislação trabalhista e bem-estar dos trabalhadores. Imóveis que não cumprem a função
          social podem ser desapropriados para reforma agrária, mediante indenização.
        </p>
        <p>
          O <strong>INCRA</strong> é o órgão federal responsável pela reforma agrária e pela
          criação de assentamentos. O <strong>MST</strong> (Movimento dos Trabalhadores Rurais
          Sem-Terra, fundado em 1984) é o maior movimento social do campo no Brasil e da América
          Latina, sendo conhecido pela organização de ocupações de terras improdutivas como
          pressão política para acelerar os assentamentos.
        </p>
        <p>
          Os conflitos agrários são monitorados pela <strong>CPT</strong> (Comissão Pastoral da
          Terra). Os estados com maior número de conflitos são Pará, Maranhão, Bahia e Mato Grosso.
          Violência no campo — assassinatos de lideranças indígenas, quilombolas e sem-terra —
          é fenômeno estrutural documentado anualmente pela CPT.
        </p>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fronteiras</span>
        <h2>4. Fronteiras Brasileiras: Dimensão e Desafios</h2>
        <p>
          O Brasil tem a <strong>maior extensão de fronteiras terrestres das Américas</strong>:
          ~16.886 km, compartilhados com 10 países sul-americanos (fronteia apenas com Chile e
          Equador). As fronteiras brasileiras apresentam diferentes dinâmicas:
        </p>
        <ul>
          <li>
            <strong>Fronteiras amazônicas (Norte e Noroeste):</strong> com Venezuela, Guiana,
            Suriname, Guiana Francesa, Colômbia e Peru. Caracterizam-se por baixa densidade
            demográfica, dificuldade de fiscalização, presença de TIs e pressão do garimpo ilegal
            (especialmente na TI Yanomami) e do narcotráfico.
          </li>
          <li>
            <strong>Fronteiras do Centro-Oeste:</strong> com Bolívia e Paraguai. Dinâmica de
            comércio informal (sacoleiros, contrabando), cidades-gêmeas (Corumbá/Puerto Quijarro,
            Ponta Porã/Pedro Juan Caballero) e tráfico de drogas (rota da cocaína boliviana e
            da maconha paraguaia).
          </li>
          <li>
            <strong>Fronteiras do Sul:</strong> com Argentina e Uruguai. As mais integradas e
            pacíficas. Cidades-gêmeas como Foz do Iguaçu/Ciudad del Este (Paraguai)/Puerto Iguazú
            (Argentina) — a tríplice fronteira —, Santana do Livramento/Rivera (Brasil/Uruguai).
          </li>
        </ul>
        <p>
          A <strong>Faixa de Fronteira</strong> (Lei 6.634/1979, regulamentada pelo Estatuto do
          Desarmamento de 2003) é a faixa interna de 150 km paralela aos limites terrestres do
          Brasil, considerada fundamental para a defesa nacional. Atividades estratégicas na faixa
          exigem autorização federal.
        </p>

        <div className="lesson-highlight">
          <h3>Cidades-gêmeas</h3>
          <p>
            Cidades-gêmeas são pares de municípios em países diferentes separados apenas pela
            linha de fronteira, com forte integração econômica, cultural e demográfica cotidiana.
            O Brasil tem 33 cidades-gêmeas oficiais. São laboratórios de integração regional —
            mas também de desafios de controle aduaneiro, tributário e de segurança pública.
          </p>
        </div>

        <Exercise
          level="Intermediário"
          title="3. Faixa de fronteira e soberania"
          statement={
            <><p>
              O Brasil possui a maior extensão de fronteiras terrestres da América do Sul, com
              características distintas em cada região. A legislação brasileira estabelece regras
              específicas para a "Faixa de Fronteira".
            </p>
            <p>
              Sobre as fronteiras brasileiras e a Faixa de Fronteira, assinale a alternativa CORRETA:
            </p></>
          }
          options={[
            { letter: "a", text: "A Faixa de Fronteira corresponde aos primeiros 50 km do território brasileiro a partir dos limites internacionais, sendo zona de livre comércio com isenção de impostos federais." },
            { letter: "b", text: "O Brasil faz fronteira com todos os países da América do Sul, incluindo Chile e Equador, que compartilham a fronteira amazônica com o Amazonas." },
            { letter: "c", text: "A Faixa de Fronteira compreende os 150 km internos ao território brasileiro paralelos à linha de fronteira terrestre, sendo considerada área de importância para a defesa nacional, com atividades estratégicas sujeitas a autorização federal.", correct: true },
            { letter: "d", text: "As fronteiras do Sul do Brasil são as mais problemáticas em termos de segurança pública, concentrando o maior volume de tráfico de drogas e conflitos armados entre todos os países vizinhos." },
            { letter: "e", text: "As cidades-gêmeas brasileiras são cidades que possuem nome idêntico ou semelhante dentro do território nacional, sem relação com as fronteiras internacionais do país." },
          ]}
          resolution={
            <p>
              A Faixa de Fronteira tem <strong>150 km</strong> de largura (não 50 km) e é regida
              pela Lei 6.634/1979. Atividades consideradas estratégicas para a segurança nacional
              nessa faixa — como transferência de imóveis a estrangeiros, abertura de estradas,
              instalação de rádios — exigem autorização da União. O Brasil faz fronteira com
              <strong> 10 países</strong> sul-americanos, mas <strong>não</strong> com Chile e
              Equador. As fronteiras mais problemáticas em termos de tráfico de drogas e violência
              são as do Centro-Oeste (Bolívia e Paraguai) e as amazônicas (Colômbia, Peru, Venezuela).
              Cidades-gêmeas são pares de municípios em países diferentes, não municípios com nomes
              similares dentro do Brasil.
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Uso do Território</span>
        <h2>5. Uso do Território Brasileiro: Conflitos e Disputas</h2>
        <p>
          O uso do território brasileiro é marcado por conflitos entre diferentes projetos:
        </p>
        <ul>
          <li>
            <strong>Agronegócio vs. Meio ambiente:</strong> expansão da fronteira agrícola
            (MATOPIBA, Amazônia, Cerrado) versus preservação de biomas e regulação do Código Florestal.
          </li>
          <li>
            <strong>Grandes projetos de infraestrutura vs. populações tradicionais:</strong>
            usinas hidrelétricas (Belo Monte no Xingu, Itaipu no Paraná, Santo Antônio e Jirau
            no Madeira) que deslocam comunidades indígenas, ribeirinhas e quilombolas.
          </li>
          <li>
            <strong>Garimpo ilegal vs. TIs e comunidades tradicionais:</strong> o garimpo ilegal
            de ouro e minerais na Amazônia — especialmente na TI Yanomami (Roraima/Amazonas) —
            causa devastação ambiental, contaminação por mercúrio, violência e doenças. Em 2023,
            o governo federal decretou emergência de saúde pública na TI Yanomami após denúncias
            de crise humanitária causada pelo garimpo.
          </li>
          <li>
            <strong>Especulação imobiliária vs. moradia popular:</strong> nas metrópoles, a
            valorização do solo urbano expulsa populações pobres para periferias e favelas —
            produzindo segregação socioespacial.
          </li>
        </ul>
        <p>
          A <strong>grilagem de terras</strong> (falsificação de títulos de propriedade de terras
          públicas) é um problema estrutural brasileiro, especialmente na Amazônia. Estima-se que
          grande parte das áreas desmatadas envolve grilagem prévia de terras da União.
        </p>

        <Exercise
          level="Avançado"
          title="4. Garimpo ilegal e TI Yanomami"
          statement={
            <><p>
              A crise humanitária na Terra Indígena Yanomami (Roraima/Amazonas) evidenciou os
              impactos do garimpo ilegal sobre povos indígenas e sobre o meio ambiente amazônico.
            </p>
            <p>
              Sobre as relações entre garimpo ilegal, terras indígenas e soberania territorial,
              assinale a alternativa CORRETA:
            </p></>
          }
          options={[
            { letter: "a", text: "O garimpo em terras indígenas é permitido pela legislação brasileira, desde que realizado por indígenas da própria comunidade e com aprovação do IBAMA." },
            { letter: "b", text: "O garimpo ilegal na TI Yanomami afetou apenas o meio ambiente da região, sem impactos sobre a saúde da população indígena local, que é naturalmente resistente à contaminação por mercúrio." },
            { letter: "c", text: "A invasão de terras indígenas por garimpeiros ilegais constitui crime previsto no Estatuto do Índio (Lei 6.001/1973) e na Lei de Crimes Ambientais (Lei 9.605/1998), evidenciando falhas no Estado brasileiro de proteção dos direitos territoriais e da saúde dos povos indígenas.", correct: true },
            { letter: "d", text: "A crise na TI Yanomami se deveu exclusivamente a conflitos internos entre grupos Yanomami, sem relação com a invasão de garimpeiros ilegais ou com omissão do Estado brasileiro na proteção do território." },
            { letter: "e", text: "O Brasil não possui legislação específica sobre crimes em terras indígenas, sendo a proteção desses territórios regulada apenas por convenções internacionais da OIT, sem legislação nacional aplicável." },
          ]}
          resolution={
            <p>
              O garimpo em terras indígenas é <strong>proibido</strong> pela CF/88 (art. 231, §7°),
              pelo Estatuto do Índio e pela Lei de Crimes Ambientais. A TI Yanomami — com ~9,4 milhões
              de hectares, o maior território indígena contíguo do Brasil — foi invadida por dezenas
              de milhares de garimpeiros ilegais, especialmente entre 2019 e 2022. Os impactos foram
              devastadores: contaminação por mercúrio (usado na extração de ouro, altera o sistema
              nervoso e envenena a cadeia alimentar), destruição de rios, desmatamento, violência
              sexual e doenças (malária, desnutrição). Em 2023, o governo federal decretou emergência
              de saúde pública na TI Yanomami e deflagrou operação para retirar garimpeiros.
              A crise expôs tanto a violação dos direitos territoriais indígenas quanto a cumplicidade
              e/ou omissão do Estado em diferentes momentos.
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Povos Tradicionais</span>
        <h2>6. Outras Comunidades Tradicionais: Ribeirinhos, Extrativistas e Pescadores</h2>
        <p>
          Além de indígenas e quilombolas, o Brasil tem diversas outras <strong>comunidades
          tradicionais</strong> reconhecidas pela Política Nacional de Desenvolvimento Sustentável
          dos Povos e Comunidades Tradicionais (PNPCT, Decreto 6.040/2007):
        </p>
        <ul>
          <li>
            <strong>Ribeirinhos:</strong> comunidades que vivem às margens de rios, especialmente
            na Amazônia, com modo de vida dependente dos ciclos das cheias e dos recursos hídricos.
            Frequentemente deslocados por grandes hidrelétricas.
          </li>
          <li>
            <strong>Extrativistas:</strong> coletores de produtos florestais não-madeireiros
            (castanha-do-pará, açaí, látex, babaçu). As <strong>Reservas Extrativistas (RESEX)</strong>,
            criadas pelo SNUC, foram uma conquista do movimento liderado por Chico Mendes (assassinado
            em 1988). A RESEX do Alto Juruá foi a primeira do Brasil (1990).
          </li>
          <li>
            <strong>Pescadores artesanais:</strong> comunidades costeiras e fluviais com práticas
            tradicionais de pesca. Ameaçados pela pesca industrial predatória, pela poluição e
            pelos grandes projetos portuários.
          </li>
          <li>
            <strong>Caiçaras, faxinalenses, geraizeiros, veredeiros, vazanteiros, ciganos,
            pomeranos:</strong> entre muitos outros grupos com identidade territorial específica.
          </li>
        </ul>
        <p>
          A <strong>Convenção 169 da OIT</strong> (ratificada pelo Brasil em 2002) garante às
          comunidades tradicionais o direito à consulta prévia, livre e informada sobre projetos
          que afetem seus territórios — o chamado <strong>CLPI</strong> (Consentimento Livre,
          Prévio e Informado). Esse direito é frequentemente desrespeitado na prática.
        </p>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>7. Articulando Questões Territoriais no ENEM</h2>
        <p>
          O ENEM aborda as questões territoriais brasileiras de forma interdisciplinar, articulando
          Geografia, História, Sociologia e Direitos Humanos. As questões mais frequentes envolvem:
        </p>
        <ul>
          <li>Direitos constitucionais de indígenas e quilombolas (arts. 231 e 68 ADCT).</li>
          <li>Conflitos entre modelos de uso da terra (agronegócio × povos tradicionais).</li>
          <li>Garimpo ilegal, desmatamento e soberania na Amazônia.</li>
          <li>Reforma agrária e função social da propriedade.</li>
          <li>Fronteiras: dinâmicas de integração e de insegurança.</li>
          <li>Consulta prévia e direitos das comunidades tradicionais (Convenção 169 OIT).</li>
        </ul>

        <div className="lesson-highlight">
          <h3>Pontos de confusão frequentes</h3>
          <p>
            Propriedade das TIs = <strong>União</strong> (não dos índios). |
            Propriedade dos territórios quilombolas = <strong>da própria comunidade</strong>. |
            Demarcação de TIs = <strong>FUNAI</strong>. Titulação quilombola = <strong>INCRA</strong>. |
            Marco temporal = <strong>inconstitucional</strong> (STF, 2023). |
            Faixa de Fronteira = <strong>150 km</strong> (não 50 km). |
            Brasil <strong>não</strong> faz fronteira com Chile nem Equador.
          </p>
        </div>

        <Exercise
          level="Avançado"
          title="5. Conflitos territoriais e função social da propriedade"
          statement={
            <><p>
              A CF/88 estabelece que a propriedade rural deve cumprir sua função social para que
              o direito de propriedade seja plenamente protegido. Esse princípio tem implicações
              diretas sobre os conflitos fundiários no campo brasileiro.
            </p>
            <p>
              Sobre a função social da propriedade rural e os conflitos fundiários no Brasil,
              assinale a alternativa CORRETA:
            </p></>
          }
          options={[
            { letter: "a", text: "A CF/88 protege absolutamente o direito de propriedade rural, sendo vedada qualquer desapropriação de terras produtivas ou improdutivas para fins de reforma agrária, independentemente do uso dado ao imóvel." },
            { letter: "b", text: "A função social da propriedade rural é cumprida apenas quando o imóvel gera lucro ao proprietário, não havendo exigências ambientais, trabalhistas ou de bem-estar na legislação constitucional." },
            { letter: "c", text: "A desapropriação para reforma agrária pode ocorrer em qualquer imóvel rural, independentemente de ser produtivo ou não, desde que o proprietário receba indenização em dinheiro à vista." },
            { letter: "d", text: "A CF/88 condiciona a plena proteção da propriedade rural ao cumprimento da função social, que exige aproveitamento racional, uso adequado dos recursos naturais, observância da legislação trabalhista e bem-estar dos trabalhadores; imóveis que não cumprem esses requisitos podem ser desapropriados para reforma agrária.", correct: true },
            { letter: "e", text: "O MST é um movimento ilegal no Brasil, sendo suas ações de ocupação de terras tipificadas como crimes hediondos pela legislação federal, com prisão imediata de todos os participantes." },
          ]}
          resolution={
            <p>
              O art. 186 da CF/88 define os quatro requisitos da função social da propriedade rural:
              (1) aproveitamento racional e adequado; (2) utilização adequada dos recursos naturais
              disponíveis e preservação do meio ambiente; (3) observância das disposições que regulam
              as relações de trabalho; (4) exploração que favoreça o bem-estar dos proprietários
              e dos trabalhadores. Imóveis que não cumprem a função social são passíveis de
              desapropriação por interesse social para fins de reforma agrária, com indenização paga
              em <strong>títulos da dívida agrária</strong> (não em dinheiro). Pequenas propriedades
              produtivas e terras produtivas de qualquer tamanho são imunes à desapropriação para
              reforma agrária. O MST não é ilegal — é um movimento social reconhecido; suas ocupações
              são atos políticos sujeitos ao direito civil e penal ordinário, não tipificados como crimes hediondos.
            </p>
          }
        />
      </section>
    </article>
  );
}
