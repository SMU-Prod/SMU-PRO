"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap35Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 35</span>
          <h1>Regionalização do Espaço Mundial e Multipolaridade</h1>
          <p>
            A ordem mundial do século XXI não pode ser compreendida pelos mesmos mapas do século XX.
            A queda do Muro de Berlim (1989) e o fim da Guerra Fria desfizeram a lógica bipolar
            (EUA × URSS) e abriram espaço para um mundo mais complexo, fragmentado e disputado.
            Hoje convivem antigas superpotências, potências emergentes e atores não-estatais em
            uma ordem ainda em construção. Neste capítulo você vai entender como o espaço mundial
            é regionalizado, o que é multipolaridade e como essas dinâmicas aparecem nas questões
            do ENEM.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ordem Internacional</span>
        <h2>1. Da Bipolaridade à Nova Ordem Mundial</h2>
        <p>
          Entre 1945 e 1991, o mundo foi dominado pela lógica da <strong>bipolaridade</strong>:
          dois blocos antagônicos — o capitalista liderado pelos EUA e o socialista liderado pela
          URSS — competiam por influência global na <strong>Guerra Fria</strong>. Esse confronto
          não era apenas ideológico; organizava a geopolítica, as alianças militares (OTAN vs.
          Pacto de Varsóvia), os modelos econômicos e até as culturas.
        </p>
        <p>
          Com a dissolução da União Soviética em dezembro de 1991, os EUA emergiram como
          <strong> hiperpotência</strong>, inaugurando um período de hegemonia americana
          (unipolaridade) que perdurou com mais clareza nos anos 1990. O geógrafo francês
          Yves Lacoste e o analista Charles Krauthammer cunharam termos para esse momento.
          O politólogo Samuel Huntington propôs a teoria do "choque de civilizações" como
          novo eixo organizador do conflito pós-Guerra Fria.
        </p>
        <p>
          Contudo, desde os anos 2000, a ordem unipolar mostrou seus limites. A ascensão da
          China, a reafirmação da Rússia, o fortalecimento de potências regionais (Brasil, Índia,
          Turquia, Irã, Arábia Saudita) e o surgimento de atores não-estatais (organizações
          terroristas, empresas transnacionais, ONGs, grupos hackers) tornaram o sistema
          progressivamente <strong>multipolar</strong>.
        </p>

        <div className="lesson-highlight">
          <h3>Cronologia da Ordem Mundial</h3>
          <p>
            <strong>1945–1991:</strong> Bipolaridade (Guerra Fria, EUA × URSS). |
            <strong> 1991–2001:</strong> Unipolaridade americana (mundo unipolar). |
            <strong> 2001–2008:</strong> Transição — guerras no Afeganistão e Iraque questionam a
            hegemonia americana. |
            <strong> 2008–presente:</strong> Multipolaridade emergente — crise financeira global,
            ascensão da China, retorno da Rússia, BRICS, guerras na Ucrânia e no Oriente Médio.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Multipolaridade</span>
        <h2>2. O Conceito de Multipolaridade</h2>
        <p>
          <strong>Multipolaridade</strong> é a distribuição do poder mundial entre vários polos,
          sem que nenhum ator isolado seja capaz de impor sua vontade a todos os demais. Cada polo
          tem capacidade militar, econômica, tecnológica ou cultural suficiente para influenciar
          a ordem internacional em sua região ou em determinados temas.
        </p>
        <p>
          Na ordem multipolar atual, destacam-se os seguintes polos de poder:
        </p>
        <ul>
          <li>
            <strong>Estados Unidos:</strong> ainda o país mais poderoso militarmente (maior
            orçamento de defesa do mundo, ~800 bases militares em 70+ países, liderança tecnológica
            em IA e semicondutores). Poder econômico ainda dominante, mas compartilhado.
          </li>
          <li>
            <strong>China:</strong> segunda maior economia do mundo (e primeira em PPP desde 2014
            pelo FMI), maior exportador global, maior exército em número de soldados, crescente
            projeção geopolítica via Iniciativa Cinturão e Rota (Nova Rota da Seda). Tecnologia:
            avanços em 5G (Huawei), inteligência artificial e chips. Reclama Taiwan.
          </li>
          <li>
            <strong>União Europeia:</strong> bloco econômico mais integrado do mundo, com PIB
            total comparável ao dos EUA. Poder militar difuso (sem exército unificado). Poder
            normativo: exporta regras e padrões (proteção de dados, meio ambiente, concorrência).
          </li>
          <li>
            <strong>Rússia:</strong> potência nuclear (maior arsenal do mundo), exportadora de
            energia (gás e petróleo), membro permanente do Conselho de Segurança da ONU. A invasão
            da Ucrânia (2022) reposicionou a Rússia como desafiante ativo da ordem ocidental.
          </li>
          <li>
            <strong>Potências regionais:</strong> Índia (3ª economia mundial, potência nuclear,
            liderança no Sul Global), Brasil (BRICS, liderança na Amazônia), Turquia (OTAN + laços
            com Rússia, influência no Oriente Médio), Arábia Saudita (petróleo, OPEP+), Irã
            (capacidade nuclear, influência no Oriente Médio).
          </li>
        </ul>

        <Exercise
          level="Básico"
          title="1. Bipolaridade e multipolaridade"
          statement={
            <p>
              A organização do espaço mundial passou por transformações profundas após o fim da
              Guerra Fria. O término do confronto entre EUA e URSS abriu espaço para novos
              arranjos geopolíticos. Assinale a alternativa que MELHOR caracteriza a diferença
              entre a ordem bipolar da Guerra Fria e a ordem multipolar contemporânea:
            </p>
          }
          options={[
            { letter: "a", text: "Na ordem bipolar, o poder estava fragmentado entre dezenas de países com capacidade nuclear; na multipolar, concentra-se nos EUA e na China, formando nova bipolaridade." },
            { letter: "b", text: "A ordem bipolar era marcada pela concentração de poder em dois polos antagônicos (EUA e URSS); a multipolar caracteriza-se pela distribuição do poder entre vários atores com capacidade de influenciar a ordem internacional.", correct: true },
            { letter: "c", text: "A ordem multipolar é mais estável que a bipolar, pois a existência de muitos polos impede conflitos regionais e garante o equilíbrio automático entre as potências." },
            { letter: "d", text: "Na ordem multipolar, os organismos internacionais como a ONU perderam completamente sua relevância, sendo substituídos por acordos bilaterais entre as grandes potências." },
            { letter: "e", text: "A multipolaridade é característica exclusiva do período 1945–1989, tendo sido superada pela unipolaridade americana que persiste de forma estável até o presente." },
          ]}
          resolution={
            <p>
              A ordem bipolar (1945–1991) tinha dois polos organizadores — EUA (capitalismo) e URSS
              (socialismo) — que dividiam o mundo em esferas de influência, com países alinhados
              a um ou outro lado (ou não-alinhados, como o Movimento dos Não-Alinhados). Com o fim
              da URSS, houve um breve período de unipolaridade americana nos anos 1990. Desde os
              anos 2000, a ascensão da China, a reafirmação da Rússia e o fortalecimento de
              potências regionais tornou o sistema multipolar: não há um único árbitro, e as
              decisões globais dependem de negociações entre múltiplos atores. A multipolaridade
              não é necessariamente mais estável — pode ser mais imprevisível.
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Regionalização Mundial</span>
        <h2>3. Critérios e Modelos de Regionalização do Espaço Mundial</h2>
        <p>
          A <strong>regionalização do espaço mundial</strong> é o processo de dividir o globo em
          regiões com base em critérios comuns. Não existe uma regionalização única e definitiva:
          cada critério produz um mapa diferente.
        </p>
        <p>
          Principais critérios de regionalização:
        </p>
        <ul>
          <li>
            <strong>Político-cultural (Huntington — "Choque de Civilizações"):</strong> divide o
            mundo em ~9 civilizações: Ocidental, Sinítica (chinesa), Islâmica, Hindu, Eslavo-Ortodoxa,
            Latino-Americana, Africana, Budista, Japonesa. Crítica: determinismo cultural; ignora
            conflitos intrafronteiras culturais.
          </li>
          <li>
            <strong>Econômico (Norte × Sul, ou Brandt):</strong> a linha de Brandt (1980) divide
            o globo entre Norte desenvolvido (EUA, Europa, Japão, Austrália) e Sul subdesenvolvido.
            Hoje desatualizada: China, Coreia do Sul e Singapura são desenvolvidas no hemisfério norte
            da lógica tradicional, e Austrália e Nova Zelândia são "Sul" geográfico mas "Norte" econômico.
          </li>
          <li>
            <strong>Por blocos geopolíticos:</strong> OTAN, SCO (Organização de Cooperação de Xangai),
            BRICS, G7, G20, ASEAN, UA (União Africana).
          </li>
          <li>
            <strong>Por IDH e desenvolvimento humano:</strong> PNUD classifica países por desenvolvimento
            humano muito alto, alto, médio e baixo — correlaciona renda, saúde e educação.
          </li>
        </ul>

        {/* SVG: esquema de polos de poder */}
        <div className="lesson-svg-wrap" style={{ overflowX: "auto" }}>
          <svg viewBox="0 0 700 300" width="100%" style={{ maxWidth: 700, display: "block", margin: "0 auto" }}>
            <rect width="700" height="300" fill="#f8fafc" rx="12" />
            <text x="350" y="24" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">
              Principais Polos de Poder no Mundo Multipolar
            </text>
            {/* EUA */}
            <circle cx="120" cy="130" r="60" fill="#1d3557" opacity="0.85" />
            <text x="120" y="125" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">EUA</text>
            <text x="120" y="142" textAnchor="middle" fontSize="9" fill="#a8dadc">Militar + Tech</text>
            {/* China */}
            <circle cx="350" cy="100" r="65" fill="#c1121f" opacity="0.85" />
            <text x="350" y="95" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">China</text>
            <text x="350" y="112" textAnchor="middle" fontSize="9" fill="#ffd7d7">Econômico + Manufatura</text>
            {/* UE */}
            <circle cx="580" cy="120" r="52" fill="#003f88" opacity="0.85" />
            <text x="580" y="115" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">UE</text>
            <text x="580" y="132" textAnchor="middle" fontSize="9" fill="#b8d4f0">Normativo + Comercial</text>
            {/* Rússia */}
            <circle cx="200" cy="230" r="45" fill="#4a1942" opacity="0.85" />
            <text x="200" y="225" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Rússia</text>
            <text x="200" y="242" textAnchor="middle" fontSize="9" fill="#e0c3f0">Nuclear + Energia</text>
            {/* Índia */}
            <circle cx="460" cy="230" r="45" fill="#e07b39" opacity="0.85" />
            <text x="460" y="225" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Índia</text>
            <text x="460" y="242" textAnchor="middle" fontSize="9" fill="#ffe8d6">Demog. + Soft Power</text>
            {/* Sul Global */}
            <rect x="585" y="215" width="95" height="50" rx="8" fill="#2a9d8f" opacity="0.85" />
            <text x="633" y="237" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">Sul Global</text>
            <text x="633" y="253" textAnchor="middle" fontSize="9" fill="#d0f0ec">BRICS+, G77</text>
          </svg>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Norte e Sul Globais</span>
        <h2>4. Norte Global, Sul Global e o Debate sobre Desenvolvimento</h2>
        <p>
          Os termos <strong>Norte Global</strong> e <strong>Sul Global</strong> substituem
          progressivamente as categorias "desenvolvido/subdesenvolvido" ou "Primeiro Mundo/Terceiro
          Mundo", que carregavam conotações da Guerra Fria e uma hierarquia implícita.
        </p>
        <p>
          <strong>Norte Global:</strong> países de alta renda, industrializados, com IDH elevado.
          Concentram: tecnologia avançada, capital financeiro, instituições estáveis, padrões de
          consumo elevados. Incluem EUA, Canadá, Europa Ocidental, Japão, Coreia do Sul, Austrália.
        </p>
        <p>
          <strong>Sul Global:</strong> países de renda média e baixa, muitos com histórico colonial,
          marcados por desigualdades estruturais, dependência tecnológica e vulnerabilidade climática.
          Incluem a maioria dos países da África, Ásia e América Latina. A China é um caso singular:
          tecnicamente "Sul Global" pela história colonial e nível de renda per capita médio, mas com
          poder econômico e tecnológico que a coloca à parte.
        </p>
        <p>
          O <strong>G77 + China</strong> é o principal grupo de negociação dos países do Sul Global
          na ONU (formado em 1964, hoje com 134 membros). O <strong>Movimento dos Não-Alinhados</strong>,
          criado na Conferência de Bandung (1955) por Nehru (Índia), Nasser (Egito) e Sukarno
          (Indonésia), foi o precursor político do Sul Global.
        </p>

        <Exercise
          level="Intermediário"
          title="2. Norte Global e Sul Global"
          statement={
            <><p>
              Os conceitos de "Norte Global" e "Sul Global" buscam superar as categorizações da
              Guerra Fria (Primeiro, Segundo e Terceiro Mundos) para descrever as assimetrias do
              sistema internacional contemporâneo.
            </p>
            <p>
              Considerando esses conceitos, assinale a alternativa CORRETA:
            </p></>
          }
          options={[
            { letter: "a", text: "Norte e Sul Global são categorias estritamente geográficas, correspondendo ao hemisfério norte e ao hemisfério sul do planeta, respectivamente." },
            { letter: "b", text: "O Sul Global é composto exclusivamente por países africanos, não incluindo nenhum país da América Latina ou da Ásia." },
            { letter: "c", text: "Norte e Sul Global são categorias socioeconômicas e geopolíticas que descrevem assimetrias de renda, tecnologia e poder, não correspondendo necessariamente à posição geográfica — Austrália e Nova Zelândia, no hemisfério sul, integram o Norte Global.", correct: true },
            { letter: "d", text: "A China integra plenamente o Norte Global desde 2001, quando ingressou na OMC, deixando de ser considerada um país em desenvolvimento." },
            { letter: "e", text: "O conceito de Sul Global é equivalente ao de Terceiro Mundo, sendo apenas uma atualização terminológica sem diferença conceitual ou política." },
          ]}
          resolution={
            <p>
              Norte e Sul Global são categorias geopolíticas e socioeconômicas, não geográficas.
              Austrália e Nova Zelândia, no hemisfério sul geográfico, integram o Norte Global por
              seu alto IDH, renda e desenvolvimento. A China, apesar de seu imenso poder econômico,
              ainda se identifica com o Sul Global por seu histórico colonial e semi-colonial, por
              sua renda per capita média e por ser líder do G77. O conceito de Sul Global é mais
              amplo que "Terceiro Mundo" — carrega uma dimensão de agência política e solidariedade
              entre países do Sul, não apenas de pobreza relativa. O Movimento dos Não-Alinhados
              (Bandung, 1955) e o G77 (1964) são os precursores dessa articulação política.
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conflitos Contemporâneos</span>
        <h2>5. Zonas de Conflito e Tensão Geopolítica</h2>
        <p>
          A multipolaridade não é sinônimo de paz. Ao contrário, a dispersão do poder pode
          aumentar a instabilidade, pois não há um hegemônico capaz de arbitrar conflitos. As
          principais zonas de tensão geopolítica no século XXI são:
        </p>
        <ul>
          <li>
            <strong>Leste Europeu (Ucrânia):</strong> a invasão russa da Ucrânia (fevereiro de 2022)
            é o maior conflito armado na Europa desde a Segunda Guerra Mundial. Em disputa estão
            o alargamento da OTAN, a integridade territorial ucraniana e a segurança energética europeia.
          </li>
          <li>
            <strong>Indo-Pacífico e Mar do Sul da China:</strong> a China reivindica soberania sobre
            ilhas e recifes disputados por Filipinas, Vietnã, Malásia, Brunei e Taiwan. A questão
            de Taiwan é a mais sensível: EUA e China têm posições opostas sobre o status da ilha.
          </li>
          <li>
            <strong>Oriente Médio:</strong> conflito Israel–Palestina, guerra civil na Síria, tensões
            Irã × Arábia Saudita × Israel, disputas pelo Líbano e Iêmen. A região concentra reservas
            de petróleo e rotas estratégicas (Canal de Suez, Estreito de Ormuz).
          </li>
          <li>
            <strong>África Subsaariana:</strong> multiplos conflitos étnicos, insurgências jihadistas
            (Sahel), golpes de Estado (Mali, Burkina Faso, Níger, Gabão). Presença crescente da China
            e da Rússia (Grupo Wagner/África Corps).
          </li>
          <li>
            <strong>Ártico:</strong> disputa emergente pelos recursos naturais e rotas marítimas
            abertas pelo degelo (Passagem do Nordeste): Rússia, Canadá, EUA, Noruega e Dinamarca
            têm reivindicações sobrepostas.
          </li>
        </ul>

        <Exercise
          level="Intermediário"
          title="3. Conflito na Ucrânia e a Nova Guerra Fria"
          statement={
            <><p>
              A invasão russa da Ucrânia em fevereiro de 2022 reconfigurou a geopolítica europeia e
              global, gerando debates sobre uma "Nova Guerra Fria" entre o Ocidente e a Rússia.
            </p>
            <p>
              Sobre os fatores geopolíticos que contextualizam esse conflito, assinale a alternativa
              CORRETA:
            </p></>
          }
          options={[
            { letter: "a", text: "O conflito na Ucrânia tem causas exclusivamente étnicas e culturais, sem relação com expansão da OTAN, interesses energéticos ou questões de segurança regional." },
            { letter: "b", text: "A Ucrânia era membro pleno da OTAN desde 2008, e a invasão russa foi uma resposta direta ao artigo 5.° do tratado, que prevê defesa coletiva contra ataques." },
            { letter: "c", text: "O conflito na Ucrânia envolve, entre outros fatores, a oposição russa ao alargamento da OTAN em direção ao leste europeu, a disputa por zonas de influência no espaço pós-soviético e o peso estratégico da Ucrânia como corredor de gás para a Europa.", correct: true },
            { letter: "d", text: "A União Europeia e a OTAN apoiam a Rússia no conflito ucraniano, reconhecendo os interesses históricos russos sobre a região do Donbass e da Crimeia." },
            { letter: "e", text: "A invasão russa da Ucrânia foi aprovada pelo Conselho de Segurança da ONU, contando com o apoio de EUA, Reino Unido e França, que reconheceram a legalidade da operação." },
          ]}
          resolution={
            <p>
              O conflito na Ucrânia tem múltiplas causas interligadas: (1) a expansão da OTAN para
              o leste após 1991 — contrariamente às promessas verbais feitas à Rússia pós-queda
              do Muro —, que a Rússia interpreta como ameaça existencial; (2) a Ucrânia como espaço
              tampão estratégico entre a Rússia e o Ocidente; (3) a importância energética — a Ucrânia
              era corredor de gás russo para a Europa; (4) o sentimento de "mundo russo" (Russkiy Mir)
              de Putin, que não reconhece a Ucrânia como Estado independente legítimo. A Ucrânia
              não era membro da OTAN em 2022 (apenas candidata). O Conselho de Segurança da ONU
              não aprovou a invasão — ao contrário, a Rússia vetou resoluções de condenação.
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sul Global e BRICS</span>
        <h2>6. BRICS, G20 e a Reconfiguração do Poder Global</h2>
        <p>
          O acrônimo <strong>BRICS</strong> foi criado pelo economista Jim O'Neill (Goldman Sachs)
          em 2001 para descrever as economias emergentes Brasil, Rússia, Índia e China. A África
          do Sul entrou em 2010 (virando BRICS). Em 2023, a cúpula de Johanesburgo convidou
          novos membros: Egito, Etiópia, Irã e Emirados Árabes Unidos (que passaram a integrar
          o grupo em 2024). O grupo expandido é às vezes chamado de BRICS+.
        </p>
        <p>
          O <strong>BRICS</strong> representa ~46% da população mundial, ~37% do PIB global em
          paridade de poder de compra e grande parte das reservas de commodities do planeta.
          A criação do <strong>Novo Banco de Desenvolvimento</strong> (NBD, sede em Xangai) e do
          Arranjo Contingente de Reservas (ACR) são tentativas de criar alternativas ao FMI e ao
          Banco Mundial.
        </p>
        <p>
          O <strong>G20</strong> (Grupo dos 20) reúne as 19 maiores economias do mundo mais a
          União Europeia e, desde 2023, a União Africana. Representa ~85% do PIB mundial, ~75%
          do comércio global e ~67% da população. É o principal fórum de coordenação econômica
          internacional. O Brasil presidiu o G20 em 2024.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Fórum</th>
              <th>Membros originais</th>
              <th>Foco principal</th>
              <th>Representatividade</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>G7</td><td>EUA, UK, França, Alemanha, Itália, Japão, Canadá</td><td>Econômico (Norte Global)</td><td>~45% do PIB mundial</td></tr>
            <tr><td>G20</td><td>19 maiores economias + UE</td><td>Econômico (global)</td><td>~85% do PIB mundial</td></tr>
            <tr><td>BRICS+</td><td>Brasil, Rússia, Índia, China, África do Sul + 4</td><td>Político + econômico (Sul Global)</td><td>~37% do PIB (PPP)</td></tr>
            <tr><td>SCO</td><td>China, Rússia, Índia + Ásia Central</td><td>Segurança + econômico (Eurásia)</td><td>~40% da população mundial</td></tr>
          </tbody>
        </table>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Questões do ENEM</span>
        <h2>7. Como o ENEM cobra Regionalização e Multipolaridade</h2>
        <p>
          O ENEM frequentemente apresenta textos de jornais, revistas e documentos de organismos
          internacionais sobre conflitos, blocos geopolíticos e assimetrias de desenvolvimento.
          As abordagens mais comuns são:
        </p>
        <ul>
          <li>Identificar a "nova ordem mundial" a partir de documentos ou mapas.</li>
          <li>Relacionar conflitos regionais (Oriente Médio, Leste Europeu) com disputas por recursos ou rotas estratégicas.</li>
          <li>Discutir o papel dos países emergentes (BRICS) na reconfiguração do poder global.</li>
          <li>Comparar bipolaridade da Guerra Fria com a multipolaridade atual.</li>
          <li>Analisar o papel da ONU, OTAN e outros organismos na governança global.</li>
          <li>Articular Norte/Sul Global com desigualdades de desenvolvimento, dívida externa e fluxos migratórios.</li>
        </ul>

        <Exercise
          level="Avançado"
          title="4. BRICS e reconfiguração do poder global"
          statement={
            <><p>
              O grupo BRICS tem sido interpretado como expressão da multipolaridade emergente e do
              protagonismo dos países do Sul Global na reconfiguração da ordem internacional.
            </p>
            <p>
              Sobre o papel do BRICS na ordem mundial contemporânea, assinale a alternativa CORRETA:
            </p></>
          }
          options={[
            { letter: "a", text: "O BRICS é um bloco econômico integrado com livre circulação de mercadorias e pessoas, semelhante à União Europeia, com moeda comum desde 2020." },
            { letter: "b", text: "O BRICS foi criado pelos próprios países emergentes em 2001 como resposta política deliberada à hegemonia americana, tendo como objetivo declarado substituir o FMI e o Banco Mundial." },
            { letter: "c", text: "O BRICS representa uma convergência de economias emergentes que, apesar de divergências políticas internas, articula interesses comuns como reforma das instituições financeiras internacionais e maior representatividade do Sul Global nas decisões globais.", correct: true },
            { letter: "d", text: "A criação do Novo Banco de Desenvolvimento (NBD) pelos países BRICS tornou o FMI e o Banco Mundial completamente obsoletos, substituindo-os como principais financiadores do desenvolvimento global." },
            { letter: "e", text: "O BRICS é uma aliança exclusivamente militar, comparável à OTAN, voltada para a contenção do expansionismo americano e europeu em territórios do Sul Global." },
          ]}
          resolution={
            <p>
              O BRICS não é um bloco de integração econômica no molde da UE (sem livre comércio,
              moeda comum ou livre circulação de pessoas). Também não foi criado como projeto
              político — o acrônimo surgiu de um relatório de banco de investimentos (Goldman Sachs,
              2001) para descrever oportunidades de mercado. Os países BRICS têm divergências
              significativas (China e Índia têm disputas territoriais; Rússia está sancionada pelo
              Ocidente; Brasil oscila entre alinhamentos). O que une o grupo é o interesse compartilhado
              em ter maior voz nas instituições multilaterais (FMI, Banco Mundial, Conselho de
              Segurança da ONU) e alternativas ao sistema financeiro dolarizado. O NBD complementa,
              mas não substitui, FMI e Banco Mundial. O BRICS não tem componente militar.
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Mapa Mental: Regionalização e Multipolaridade</h2>
        <p>
          Para o ENEM, organize seu raciocínio em três camadas:
        </p>
        <ul>
          <li>
            <strong>Estrutura do poder:</strong> quem tem poder (EUA, China, UE, Rússia, potências regionais)
            e de que tipo (militar, econômico, normativo, energético, tecnológico).
          </li>
          <li>
            <strong>Articulações:</strong> como os atores se organizam (OTAN, BRICS, SCO, G20, G7, AU)
            e que interesses representam (Norte Global, Sul Global, alianças de segurança, blocos comerciais).
          </li>
          <li>
            <strong>Conflitos e tensões:</strong> onde há disputas (Ucrânia, Taiwan, Oriente Médio,
            Ártico, Sahel) e por quê (recursos, rotas, esferas de influência, identidade).
          </li>
        </ul>

        <div className="lesson-highlight">
          <h3>Atenção: termos que o ENEM confunde</h3>
          <p>
            <strong>Unipolaridade ≠ Multipolaridade:</strong> unipolar = um hegemônico (EUA nos anos
            1990); multipolar = vários polos com poder real. |
            <strong> G7 ≠ G20:</strong> G7 são as 7 nações mais ricas (Norte Global); G20 inclui
            emergentes (Brasil, China, Índia). |
            <strong> BRICS ≠ bloco de integração:</strong> é fórum político, sem livre comércio ou
            estrutura supranacional. |
            <strong> ONU ≠ OTAN:</strong> ONU é universal (política multilateral); OTAN é aliança
            militar ocidental.
          </p>
        </div>

        <Exercise
          level="Avançado"
          title="5. Regionalização e interesses geopolíticos"
          statement={
            <><p>
              A regionalização do espaço mundial não é neutra: reflete interesses geopolíticos,
              históricos e econômicos dos atores que a produzem. Diferentes critérios geram
              diferentes mapas — e diferentes disputas de narrativa.
            </p>
            <p>
              Sobre os modelos de regionalização do espaço mundial, assinale a alternativa CORRETA:
            </p></>
          }
          options={[
            { letter: "a", text: "A teoria do 'choque de civilizações' de Samuel Huntington propõe que os conflitos pós-Guerra Fria serão fundamentalmente econômicos, travados entre blocos comerciais rivais como NAFTA, UE e Mercosul." },
            { letter: "b", text: "A divisão Norte-Sul (linha de Brandt) permanece plenamente válida hoje, sendo impossível classificar qualquer país do hemisfério sul como integrante do Norte Global ou vice-versa." },
            { letter: "c", text: "Os critérios de regionalização do espaço mundial (cultural, econômico, geopolítico, por IDH) produzem mapas distintos que refletem diferentes perspectivas e interesses, sendo ferramentas analíticas com limitações e aplicações específicas.", correct: true },
            { letter: "d", text: "A regionalização do espaço mundial é uma ciência exata: existe uma única divisão correta do planeta em regiões, aceita unanimemente pelos geógrafos e pelos organismos internacionais." },
            { letter: "e", text: "O modelo de regionalização por IDH do PNUD e a divisão Norte-Sul são modelos idênticos que chegam sempre às mesmas conclusões sobre o desenvolvimento dos países." },
          ]}
          resolution={
            <p>
              A regionalização é sempre uma escolha política e epistemológica. Huntington dividiu o
              mundo por "civilizações" (critério cultural-identitário), prevendo choques entre blocos
              culturais — não econômicos. A linha de Brandt (critério econômico) separa Norte e Sul
              desenvolvidos, mas está desatualizada: Coreia do Sul, Singapura, Taiwan e os Emirados
              são economicamente "Norte" estando fora do hemisfério norte clássico. A divisão por IDH
              (PNUD) usa indicadores compostos e pode gerar mapas diferentes da linha de Brandt (ex.:
              Qatar e Emirados aparecem como desenvolvimento muito alto, acima de muitos países
              europeus). Cada modelo tem utilidade analítica para questões específicas, e reconhecer
              suas limitações é habilidade cobrada pelo ENEM.
            </p>
          }
        />
      </section>
    </article>
  );
}
