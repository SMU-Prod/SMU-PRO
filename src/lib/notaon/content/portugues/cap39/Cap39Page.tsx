"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap39Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 39</span>
          <h1>Literatura Contemporânea Brasileira</h1>
          <p>
            A partir dos anos 1960, a literatura brasileira deixou de ser governada por uma única
            escola ou estética dominante. O que surgiu foi uma pluralidade irreverente: prosa urbana
            de violência e crueza (Rubem Fonseca), lirismo existencial feminino (Lygia Fagundes
            Telles), poesia engajada (Ferreira Gullar), literatura afro-brasileira (Conceição
            Evaristo), literatura periférica (Ferréz) e minicontos que explodem o conceito de
            narrativa. Não há uma fórmula única para o contemporâneo — há muitas vozes, muitos
            Brasis, e o ENEM cobra precisamente a habilidade de ler esse mosaico.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 0 — LINHA DO TEMPO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Panorama Histórico</span>
        <h2>Linha do Tempo da Literatura Contemporânea</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 190"
            width="700"
            height="190"
            aria-label="Linha do tempo da Literatura Contemporânea Brasileira de 1960 ao presente"
          >
            <defs>
              <marker id="arrowLC" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#7c3aed" />
              </marker>
            </defs>
            <rect x="0" y="0" width="700" height="190" rx="12" fill="#fdf4ff" />
            <line x1="30" y1="90" x2="670" y2="90" stroke="#7c3aed" strokeWidth="3" markerEnd="url(#arrowLC)" />

            <circle cx="70" cy="90" r="8" fill="#7c3aed" />
            <text x="70" y="73" textAnchor="middle" fontSize="11" fill="#3b0764" fontWeight="bold">1964</text>
            <text x="70" y="108" textAnchor="middle" fontSize="10" fill="#475569">Golpe</text>
            <text x="70" y="121" textAnchor="middle" fontSize="10" fill="#475569">Militar</text>

            <circle cx="185" cy="90" r="8" fill="#7c3aed" />
            <text x="185" y="73" textAnchor="middle" fontSize="11" fill="#3b0764" fontWeight="bold">1975</text>
            <text x="185" y="108" textAnchor="middle" fontSize="10" fill="#475569">Feliz Ano Novo</text>
            <text x="185" y="121" textAnchor="middle" fontSize="10" fill="#475569">R. Fonseca</text>

            <circle cx="305" cy="90" r="8" fill="#7c3aed" />
            <text x="305" y="73" textAnchor="middle" fontSize="11" fill="#3b0764" fontWeight="bold">1976</text>
            <text x="305" y="108" textAnchor="middle" fontSize="10" fill="#475569">Poema Sujo</text>
            <text x="305" y="121" textAnchor="middle" fontSize="10" fill="#475569">Gullar</text>

            <circle cx="420" cy="90" r="8" fill="#7c3aed" />
            <text x="420" y="73" textAnchor="middle" fontSize="11" fill="#3b0764" fontWeight="bold">2000</text>
            <text x="420" y="108" textAnchor="middle" fontSize="10" fill="#475569">Capão Pecado</text>
            <text x="420" y="121" textAnchor="middle" fontSize="10" fill="#475569">Ferréz</text>

            <circle cx="540" cy="90" r="8" fill="#7c3aed" />
            <text x="540" y="73" textAnchor="middle" fontSize="11" fill="#3b0764" fontWeight="bold">2003</text>
            <text x="540" y="108" textAnchor="middle" fontSize="10" fill="#475569">Ponciá Vicêncio</text>
            <text x="540" y="121" textAnchor="middle" fontSize="10" fill="#475569">C. Evaristo</text>

            <circle cx="640" cy="90" r="8" fill="#ec4899" />
            <text x="640" y="73" textAnchor="middle" fontSize="11" fill="#3b0764" fontWeight="bold">Hoje</text>
            <text x="640" y="108" textAnchor="middle" fontSize="10" fill="#475569">Plural /</text>
            <text x="640" y="121" textAnchor="middle" fontSize="10" fill="#475569">Digital</text>

            <text x="350" y="165" textAnchor="middle" fontSize="12" fill="#7c3aed" fontWeight="bold">Literatura Contemporânea Brasileira (1960 – presente)</text>
          </svg>
          <figcaption>Linha do tempo com os principais marcos da Literatura Contemporânea Brasileira.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. Do Pós-45 ao Presente: Um Panorama</h2>

        <p>
          A Literatura Contemporânea brasileira começa convencionalmente nos anos 1960 — embora
          alguns críticos a situem já nos anos 1950 com a Poesia Concreta — e se estende até o
          presente. É um período de extraordinária turbulência histórica: a Ditadura Militar
          (1964–1985), a redemocratização, o Plano Real, a globalização digital e as crises
          políticas do século XXI. Cada um desses momentos deixou marcas na literatura.
        </p>
        <p>
          Mas antes de qualquer periodização, é preciso entender o princípio organizador da
          Literatura Contemporânea: <strong>não há escola dominante</strong>. Diferentemente do
          Romantismo (que tinha um programa claro), do Modernismo (que tinha manifestos e geração
          definida) ou do Parnasianismo (com sua obsessão pela forma perfeita), a literatura
          contemporânea é deliberadamente plural. Autores de estilos completamente distintos
          convivem no mesmo período histórico — e isso não é deficiência, é riqueza.
        </p>

        <div className="lesson-highlight">
          <h3>O que é Literatura Contemporânea?</h3>
          <p>
            Em sentido amplo, é a produção literária posterior ao Modernismo clássico — a partir
            dos anos 1960 no Brasil. Caracteriza-se pela pluralidade estética (não há uma escola
            única), pela abertura a novas vozes (mulheres, negros, periféricos, indígenas), pela
            reflexão sobre a própria linguagem (metalinguagem), pela presença da cultura de massa
            e digital, e pelo diálogo entre gêneros e formas.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Ditadura Militar (1964–1985)</h3>
            <p>Censura, exílio e clandestinidade; a literatura de resistência usa a alegoria, o realismo fantástico e o humor para dizer o que não pode ser dito diretamente.</p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Globalização cultural</h3>
            <p>A literatura brasileira absorve influências globais (García Márquez, Kafka, Borges) e também exporta — a geração contemporânea é cada vez mais traduzida.</p>
          </div>
          <div className="lesson-card">
            <span>📱</span>
            <h3>Cultura digital</h3>
            <p>Internet, redes sociais e publicação independente democratizam o acesso à literatura; surgem minicontos, crônicas virais, poesia nas redes.</p>
          </div>
          <div className="lesson-card">
            <span>🗣️</span>
            <h3>Pluralidade de vozes</h3>
            <p>Escritoras negras, autores periféricos, vozes indígenas e LGBTQIA+ entram definitivamente no cânone — ainda que lutando contra resistências institucionais.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Características Gerais</span>
        <h2>2. Características da Literatura Contemporânea</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Descrição</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Pluralidade estética</strong></td>
                <td>Não há escola ou movimento dominante; diferentes estilos coexistem</td>
                <td>Fonseca (realismo urbano) e Telles (lirismo introspectivo) no mesmo período</td>
              </tr>
              <tr>
                <td><strong>Metalinguagem</strong></td>
                <td>A literatura que fala sobre si mesma, que questiona o próprio ato de narrar</td>
                <td>Narrador que comenta seu processo de escrita; romance dentro do romance</td>
              </tr>
              <tr>
                <td><strong>Fragmentação</strong></td>
                <td>Narrativas não lineares, múltiplos pontos de vista, cronologia quebrada</td>
                <td>Contos de Rubem Fonseca; minicontos contemporâneos</td>
              </tr>
              <tr>
                <td><strong>Intertextualidade</strong></td>
                <td>Diálogo explícito com outros textos, obras e tradições literárias</td>
                <td>Poemas que reescrevem Drummond; romances que citam Clarice</td>
              </tr>
              <tr>
                <td><strong>Vozes marginalizadas</strong></td>
                <td>Protagonismo de grupos historicamente excluídos do cânone</td>
                <td>Conceição Evaristo (afro-brasileira), Ferréz (periferia), Daniel Munduruku (indígena)</td>
              </tr>
              <tr>
                <td><strong>Hibridismo</strong></td>
                <td>Mistura de gêneros: crônica + conto, poesia + prosa, literatura + jornalismo</td>
                <td>Crônicas de Rubem Braga; minicontos em redes sociais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Rubem Fonseca</span>
        <h2>3. Rubem Fonseca: O Realismo Brutal da Cidade</h2>

        <p>
          <strong>Rubem Fonseca</strong> (1925–2020) é o maior nome da prosa urbana contemporânea
          brasileira. Seus contos e romances mergulham no submundo das cidades — o crime, a
          violência, a corrupção, o sexo, a solidão no meio da multidão — com uma precisão
          cirúrgica e uma frieza que inicialmente escandalizou críticos e leitores. O livro
          <strong> Feliz Ano Novo</strong> (1975) chegou a ser censurado pela ditadura por conter
          linguagem e cenas consideradas ofensivas aos "bons costumes".
        </p>
        <p>
          O estilo de Fonseca é imediatamente reconhecível: frases curtas, diálogos secos, ausência
          de lirismo, narrador frequentemente em primeira pessoa e próximo dos marginalizados,
          violência descrita sem eufemismo. Esse estilo ficou conhecido como <strong>realismo brutal</strong>
          ou <strong>brutalismo</strong> — não por ser gratuito, mas por recusar qualquer
          romantização da violência urbana brasileira.
        </p>

        <div className="math-block">
          <strong>Por que o brutalismo de Fonseca não é gratuito?</strong>
          <p>
            A violência nos textos de Rubem Fonseca não é entretenimento ou choque pelo choque.
            Ela é o retrato honesto de uma cidade (especialmente o Rio de Janeiro) em que a
            desigualdade extrema produz violência extrema. Ao negar o eufemismo, Fonseca força
            o leitor a confrontar a realidade que a literatura "bem-comportada" preferia ignorar.
            É um gesto ético: a literatura como recusa da cumplicidade com a suavização da violência social.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔫</span>
            <h3>Feliz Ano Novo (1975)</h3>
            <p>Coletânea de contos censurada pela ditadura; o conto-título narra um assalto na virada do ano com frieza e violência perturbadoras.</p>
          </div>
          <div className="lesson-card">
            <span>🕵️</span>
            <h3>O Cobrador (1979)</h3>
            <p>Protagonista que se vinga da sociedade que o excluiu; um dos contos mais estudados sobre violência, classe social e justiça na literatura brasileira.</p>
          </div>
          <div className="lesson-card">
            <span>📺</span>
            <h3>Agosto (1990)</h3>
            <p>Romance policial ambientado nos últimos dias de Getúlio Vargas (1954); mistura de ficção e história recente do Brasil.</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>A Grande Arte (1983)</h3>
            <p>Romance policial com o detetive Mandrake; crítica à violência policial e à corrupção no Rio de Janeiro.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Lygia Fagundes Telles</span>
        <h2>4. Lygia Fagundes Telles: O Mundo Interior Feminino</h2>

        <p>
          <strong>Lygia Fagundes Telles</strong> (1923–2022) é uma das maiores escritoras da
          literatura brasileira e, junto com Clarice Lispector, a mais importante voz feminina
          do século XX. Sua obra explora o universo psicológico e existencial de personagens
          femininas com uma sofisticação narrativa que une o lirismo à tensão psicológica.
          Ao contrário do brutalismo de Fonseca, Lygia trabalha o horror e o sofrimento de
          forma delicada — mas não menos perturbadora.
        </p>
        <p>
          Seu romance mais importante, <strong>As Meninas</strong> (1973), narra a vida de três
          jovens que vivem numa pensão católica em São Paulo durante a ditadura militar. Lorena,
          Lia e Ana Clara têm histórias, vozes e perspectivas completamente diferentes — e o
          romance as intercala, criando um retrato complexo da mulher brasileira num período de
          repressão política. A ditadura está presente não como tema central, mas como atmosfera
          que oprime as personagens de formas distintas.
        </p>

        <div className="lesson-highlight">
          <h3>Elementos da ficção de Lygia Fagundes Telles</h3>
          <ul>
            <li><strong>Perspectiva feminina:</strong> personagens centrais são quase sempre mulheres; seus dilemas, medos e desejos são o foco narrativo.</li>
            <li><strong>Realismo fantástico:</strong> elementos sobrenaturais ou perturbadores se inserem na realidade cotidiana sem explicação — herança de Poe e Hoffman.</li>
            <li><strong>Lirismo psicológico:</strong> a prosa é cuidada e bela, mas a beleza serve à sondagem de estados psicológicos complexos.</li>
            <li><strong>Intertextualidade:</strong> referências à literatura, à música clássica e à mitologia como camadas de significado.</li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ferreira Gullar</span>
        <h2>5. Ferreira Gullar: Poesia de Resistência e Engajamento</h2>

        <p>
          <strong>Ferreira Gullar</strong> (1930–2016) é o maior poeta da segunda metade do
          século XX brasileiro. Sua trajetória atravessa diferentes estéticas: começou no
          Neoconcretismo dos anos 1950 (movimento que expandia a Poesia Concreta para incorporar
          a experiência corporal e subjetiva), depois evoluiu para uma poesia mais direta e
          engajada, especialmente após o golpe de 1964 e seu exílio.
        </p>
        <p>
          Sua obra-prima é <strong>Poema Sujo</strong> (1976), escrito enquanto vivia exilado em
          Buenos Aires sob ameaça de morte durante a ditadura argentina. É um longo poema-memória
          em que Gullar recria sua cidade natal — São Luís do Maranhão — a partir dos fragmentos
          da infância e da saudade, enquanto enfrenta a possibilidade real de não voltar. É um
          dos grandes poemas da língua portuguesa, comparável por sua ambição e beleza ao
          <em>Romanceiro da Inconfidência</em> de Cecília Meireles.
        </p>

        <div className="math-block">
          <strong>Frase emblemática de Ferreira Gullar:</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Não há vaidade nenhuma em querer<br/>
            sobreviver — é da natureza do ser vivo<br/>
            querer continuar vivo."
          </p>
          <p>
            Do <em>Poema Sujo</em>: o poema como ato de resistência biológica e política ao mesmo
            tempo. A escrita como sobrevivência.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Literatura Afro-brasileira</span>
        <h2>6. Conceição Evaristo e a Escrevivência</h2>

        <p>
          <strong>Conceição Evaristo</strong> (1946–) é a mais importante escritora afro-brasileira
          contemporânea e uma das vozes mais importantes da literatura brasileira do século XXI.
          Criada numa favela de Belo Horizonte, professora por décadas antes de ser reconhecida
          literariamente, Evaristo cunhou o conceito de <strong>escrevivência</strong> para descrever
          sua prática literária: a escrita que nasce da vivência, especialmente da vivência coletiva
          das mulheres negras que não tiveram acesso à escrita ao longo da história.
        </p>
        <p>
          Sua principal obra é <strong>Ponciá Vicêncio</strong> (2003), romance que narra a trajetória
          de uma mulher negra desde a infância numa fazenda até a cidade grande, carregando o peso
          da memória escravagista da família. A linguagem é lenta, circular, quase mágica — o tempo
          não segue a linearidade da narrativa realista tradicional porque a memória e o trauma
          operam de outra forma. Evaristo também é conhecida pelos <em>Cadernos Negros</em>, coletânea
          coletiva de poetas e contistas afro-brasileiros que ela ajudou a fundar.
        </p>

        <div className="lesson-highlight">
          <h3>Escrevivência — conceito central</h3>
          <p>
            A escrevivência não é apenas autobiografia: é a prática de escrever a partir de uma
            experiência coletiva que sempre foi silenciada. Evaristo afirma que as mulheres negras
            escrevem não apenas por si mesmas, mas por todas as que não puderam escrever — as que
            foram escravizadas, as que foram invisibilizadas, as que tiveram a voz apagada. Essa
            concepção amplia o conceito de autoria individual para uma noção de responsabilidade
            coletiva.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Literatura Periférica</span>
        <h2>7. Ferréz e a Literatura da Periferia</h2>

        <p>
          <strong>Ferréz</strong> (Reginaldo Ferreira da Silva, 1975–) é o maior nome da
          <strong> literatura marginal</strong> ou <strong>literatura periférica</strong> brasileira.
          Nascido no Capão Redondo, periferia de São Paulo, Ferréz escreve sobre a realidade das
          favelas e bairros pobres a partir de dentro — não como observador externo interessado
          no "pitoresco popular", mas como sujeito que vive e viveu aquela realidade.
        </p>
        <p>
          Seu romance mais importante é <strong>Capão Pecado</strong> (2000), que narra a vida
          jovem no Capão Redondo com uma linguagem que incorpora o vocabulário, o ritmo e os
          valores estéticos da periferia paulistana — incluindo o hip-hop, o rap e a oralidade
          urbana periférica. Em 2001, Ferréz organizou o número especial <em>Literatura Marginal</em>
          na revista <em>Caros Amigos</em>, que se tornou um manifesto do movimento: a ideia de
          que a periferia não precisa de "intérpretes" da classe média para contar sua história —
          ela mesma pode e deve falar.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏘️</span>
            <h3>Capão Pecado (2000)</h3>
            <p>Primeiro romance de Ferréz; vida jovem no Capão Redondo com linguagem periférica autêntica; amor, crime e sobrevivência.</p>
          </div>
          <div className="lesson-card">
            <span>🎤</span>
            <h3>Hip-hop e literatura</h3>
            <p>A literatura marginal dialoga com o rap, o grafite e a cultura de rua como formas estéticas legítimas e não inferiores à cultura "erudita".</p>
          </div>
          <div className="lesson-card">
            <span>✊</span>
            <h3>Voz própria</h3>
            <p>O movimento periférico recusa a mediação: a periferia não quer ser objeto da literatura de outros — quer ser sujeito da própria narrativa.</p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Literatura Marginal (2001)</h3>
            <p>Coletânea organizada por Ferréz na revista Caros Amigos que definiu o movimento literário periférico; manifesto e antologia ao mesmo tempo.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Minicontos e Formas Breves</span>
        <h2>8. Minicontos, Metalinguagem e Novas Formas</h2>

        <p>
          Uma das tendências mais marcantes da Literatura Contemporânea é a proliferação de
          <strong> formas breves</strong> — o miniconto, o flash fiction, o poema-relâmpago.
          O miniconto (também chamado de microconto ou conto ultracurto) é uma narrativa
          completa em poucas linhas — às vezes em apenas uma frase — que condensa enredo,
          personagem, conflito e desfecho no menor espaço possível.
        </p>
        <p>
          O maior nome brasileiro do gênero é <strong>Dalton Trevisan</strong> (1925–), cujos
          contos vão sendo cada vez mais comprimidos ao longo de décadas — de páginas cheias
          nos anos 1950 a fragmentos de uma linha nos anos 2000. Mas o miniconto explodiu com
          a cultura digital: Twitter, Instagram e blogs tornaram-se suportes para narrativas
          literárias brevíssimas, democratizando tanto a produção quanto a circulação.
        </p>

        <div className="math-block">
          <strong>Exemplo clássico de miniconto — Augusto Monterroso (referência comparativa):</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Cuando despertó, el dinosaurio todavía estaba allí."
          </p>
          <p>
            O conto mais curto do escritor guatemalteco condensa em uma frase um enredo completo:
            protagonista, conflito e desfecho — além de toda uma tradição literária do pesadelo e
            do estranho. É o modelo que inspira o miniconto brasileiro contemporâneo.
          </p>
        </div>

        <p>
          Outra tendência forte é a <strong>metalinguagem</strong>: a literatura que fala sobre
          si mesma, que tematiza a própria escrita, a linguagem, a autoria, a leitura. Romances
          em que o personagem escreve um romance, poemas sobre o ato de fazer um poema, narrativas
          em que o narrador questiona sua própria confiabilidade — tudo isso é metalinguagem, e o
          ENEM cobra com frequência essa categoria.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma/Tendência</th>
                <th>Definição</th>
                <th>Autor/Exemplo brasileiro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Miniconto</strong></td>
                <td>Narrativa completa em poucas linhas</td>
                <td>Dalton Trevisan; Hilda Hilst</td>
              </tr>
              <tr>
                <td><strong>Metalinguagem</strong></td>
                <td>Texto que fala sobre o próprio processo de criação</td>
                <td>Clarice Lispector; João Gilberto Noll</td>
              </tr>
              <tr>
                <td><strong>Intertextualidade</strong></td>
                <td>Diálogo explícito com outros textos</td>
                <td>Paulo Leminski; Ana Cristina César</td>
              </tr>
              <tr>
                <td><strong>Realismo mágico</strong></td>
                <td>Fantástico inserido na realidade sem espanto</td>
                <td>Moacyr Scliar; Murilo Rubião</td>
              </tr>
              <tr>
                <td><strong>Literatura de testemunho</strong></td>
                <td>Narrar a experiência histórica traumática</td>
                <td>Graciliano (Memórias do Cárcere); Gullar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese Visual</span>
        <h2>9. Mapa da Literatura Contemporânea Brasileira</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 280"
            width="700"
            height="280"
            aria-label="Mapa esquemático das principais tendências e autores da Literatura Contemporânea Brasileira"
          >
            <rect x="0" y="0" width="700" height="280" rx="12" fill="#fdf4ff" />

            <rect x="235" y="10" width="230" height="48" rx="10" fill="#7c3aed" />
            <text x="350" y="31" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">LIT. CONTEMPORÂNEA</text>
            <text x="350" y="48" textAnchor="middle" fontSize="11" fill="#e9d5ff">1960 – presente · Pluralidade</text>

            <line x1="110" y1="58" x2="350" y2="58" stroke="#7c3aed" strokeWidth="2" />
            <line x1="350" y1="58" x2="590" y2="58" stroke="#7c3aed" strokeWidth="2" />
            <line x1="110" y1="58" x2="110" y2="100" stroke="#7c3aed" strokeWidth="2" />
            <line x1="230" y1="58" x2="230" y2="100" stroke="#7c3aed" strokeWidth="2" />
            <line x1="350" y1="58" x2="350" y2="100" stroke="#7c3aed" strokeWidth="2" />
            <line x1="470" y1="58" x2="470" y2="100" stroke="#7c3aed" strokeWidth="2" />
            <line x1="590" y1="58" x2="590" y2="100" stroke="#7c3aed" strokeWidth="2" />

            <rect x="30" y="100" width="155" height="58" rx="7" fill="#dbeafe" />
            <text x="107" y="123" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">Prosa Urbana</text>
            <text x="107" y="140" textAnchor="middle" fontSize="10" fill="#1e40af">Rubem Fonseca</text>
            <text x="107" y="152" textAnchor="middle" fontSize="10" fill="#1e40af">Realismo brutal</text>

            <rect x="155" y="100" width="155" height="58" rx="7" fill="#d1fae5" />
            <text x="232" y="123" textAnchor="middle" fontSize="11" fill="#065f46" fontWeight="bold">Lirismo Fem.</text>
            <text x="232" y="140" textAnchor="middle" fontSize="10" fill="#065f46">Lygia F. Telles</text>
            <text x="232" y="152" textAnchor="middle" fontSize="10" fill="#065f46">Psicológico</text>

            <rect x="275" y="100" width="150" height="58" rx="7" fill="#fef3c7" />
            <text x="350" y="123" textAnchor="middle" fontSize="11" fill="#92400e" fontWeight="bold">Poesia Engajada</text>
            <text x="350" y="140" textAnchor="middle" fontSize="10" fill="#92400e">Ferreira Gullar</text>
            <text x="350" y="152" textAnchor="middle" fontSize="10" fill="#92400e">Poema Sujo</text>

            <rect x="395" y="100" width="155" height="58" rx="7" fill="#fce7f3" />
            <text x="472" y="123" textAnchor="middle" fontSize="11" fill="#9d174d" fontWeight="bold">Lit. Afro-bras.</text>
            <text x="472" y="140" textAnchor="middle" fontSize="10" fill="#9d174d">Conceição Evaristo</text>
            <text x="472" y="152" textAnchor="middle" fontSize="10" fill="#9d174d">Escrevivência</text>

            <rect x="515" y="100" width="155" height="58" rx="7" fill="#fee2e2" />
            <text x="592" y="123" textAnchor="middle" fontSize="11" fill="#991b1b" fontWeight="bold">Lit. Periférica</text>
            <text x="592" y="140" textAnchor="middle" fontSize="10" fill="#991b1b">Ferréz</text>
            <text x="592" y="152" textAnchor="middle" fontSize="10" fill="#991b1b">Capão Pecado</text>

            <rect x="30" y="180" width="640" height="50" rx="8" fill="#f3f4f6" />
            <text x="350" y="202" textAnchor="middle" fontSize="11" fill="#374151" fontWeight="bold">Tendências transversais: metalinguagem · fragmentação · intertextualidade · minicontos</text>
            <text x="350" y="220" textAnchor="middle" fontSize="10" fill="#6b7280">Pluralidade de vozes: mulheres · negros · periféricos · indígenas · LGBTQIA+</text>

            <text x="350" y="260" textAnchor="middle" fontSize="11" fill="#7c3aed" fontWeight="bold">Contexto: Ditadura (1964–85) · redemocratização · globalização digital</text>
          </svg>
          <figcaption>Mapa das principais tendências e autores da Literatura Contemporânea Brasileira.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 9b ── */}
      <section className="lesson-section">
        <span className="section-kicker">Outros Autores Contemporâneos</span>
        <h2>9b. Outros Nomes Importantes da Literatura Contemporânea</h2>

        <p>
          O cânone contemporâneo é vasto e em constante expansão. Além dos autores já estudados,
          o ENEM pode apresentar textos de escritores menos conhecidos — mas os princípios de
          leitura são os mesmos. Conheça outros nomes relevantes.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏙️</span>
            <h3>Dalton Trevisan (1925–)</h3>
            <p>O "Vampiro de Curitiba"; seus contos brevíssimos sobre a mediocridade e a crueldade das relações cotidianas foram pioneiros no miniconto brasileiro.</p>
          </div>
          <div className="lesson-card">
            <span>🌟</span>
            <h3>Paulo Leminski (1944–1989)</h3>
            <p>Curitibano, poeta que misturou poesia concreta, haicai, cultura pop e humor — um dos poetas mais singulares do Brasil; também romancista e biógrafo.</p>
          </div>
          <div className="lesson-card">
            <span>🌺</span>
            <h3>Ana Cristina César (1952–1983)</h3>
            <p>Poetisa da Geração Mimeógrafo (anos 1970); poesia que mistura diário íntimo, carta e poema; voz essencial do feminismo literário brasileiro.</p>
          </div>
          <div className="lesson-card">
            <span>🐟</span>
            <h3>Moacyr Scliar (1937–2011)</h3>
            <p>Escritor gaúcho de ascendência judia; seus romances exploram a memória da imigração e da identidade judaica-brasileira com humor, fantástico e tragédia.</p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>João Gilberto Noll (1946–2017)</h3>
            <p>Ficção de personagens sem nome nem história definida, sempre em trânsito; representa a dissolução da identidade no mundo contemporâneo.</p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Daniel Munduruku (1964–)</h3>
            <p>Escritor indígena; uma das vozes mais importantes da literatura indígena brasileira contemporânea; narra a cosmologia e os valores Munduruku para o público amplo.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>A Geração Mimeógrafo (anos 1970)</h3>
          <p>
            Durante a ditadura militar, poetas como Ana Cristina César, Cacaso (Antonio Carlos de
            Brito), Francisco Alvim e Chico Alvim publicavam seus poemas em folhetos mimeografados
            que distribuíam à mão em bares, universidades e eventos culturais. Essa estratégia de
            publicação independente era ao mesmo tempo estética (recusa ao mercado editorial) e
            política (resistência à censura). A geração é marcada pelo coloquialismo extremo, pela
            leveza formal e pela ironia suave — em contraste com a poesia de engajamento explícito
            de Gullar.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>Tendência</th>
                <th>Obra de referência</th>
                <th>Por que importa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rubem Fonseca</td>
                <td>Realismo brutal urbano</td>
                <td><em>Feliz Ano Novo</em> (1975)</td>
                <td>Violência como crítica social; prosa seca e direta</td>
              </tr>
              <tr>
                <td>Lygia F. Telles</td>
                <td>Lirismo psicológico feminino</td>
                <td><em>As Meninas</em> (1973)</td>
                <td>Ditadura + mulher + psicologia; múltiplas perspectivas</td>
              </tr>
              <tr>
                <td>Ferreira Gullar</td>
                <td>Poesia de resistência</td>
                <td><em>Poema Sujo</em> (1976)</td>
                <td>Exílio; memória e resistência política; poema extenso</td>
              </tr>
              <tr>
                <td>Conceição Evaristo</td>
                <td>Literatura afro-brasileira</td>
                <td><em>Ponciá Vicêncio</em> (2003)</td>
                <td>Escrevivência; memória da escravidão; mulher negra protagonista</td>
              </tr>
              <tr>
                <td>Ferréz</td>
                <td>Literatura periférica</td>
                <td><em>Capão Pecado</em> (2000)</td>
                <td>Periferia como sujeito e não objeto; hip-hop na literatura</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia ENEM</span>
        <h2>10. Como o ENEM Cobra a Literatura Contemporânea</h2>

        <p>
          O ENEM aborda a Literatura Contemporânea de forma diferente das escolas literárias
          históricas. Não pede que o candidato memorize características abstratas de um movimento —
          pede que leia um texto e identifique o que ele faz. Os textos apresentados podem ser de
          autores menos conhecidos, e o objetivo é sempre a <strong>interpretação</strong>.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👤</span>
            <h3>Quem fala?</h3>
            <p>Identifique a voz narradora: de que classe social, gênero, raça ou território fala? A posição do narrador é essencial para interpretar textos contemporâneos.</p>
          </div>
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Metalinguagem</h3>
            <p>Quando o texto fala sobre si mesmo (sobre escrever, sobre narrar, sobre a linguagem), pergunte: que questionamento sobre a literatura está sendo feito?</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Intertextualidade</h3>
            <p>Identifique referências a outros textos, tradições ou gêneros. O ENEM frequentemente pergunta que efeito produz o diálogo entre o texto e suas referências.</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Representatividade</h3>
            <p>A literatura contemporânea amplia o espaço de representação. O ENEM cobra com frequência a compreensão de por que certas vozes foram historicamente silenciadas.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Dica fundamental para o ENEM:</strong>
          <p>
            Na Literatura Contemporânea, o ENEM privilegia <em>interpretação e contexto</em>, nunca
            memorização de listas. Quando surgir um texto que você não reconhece, use as ferramentas:
            quem fala? de onde? para quem? com que linguagem? O que a escolha linguística revela sobre
            a perspectiva social do texto? Essas perguntas funcionam para <em>qualquer</em> texto
            contemporâneo, conhecido ou não.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 11 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Pluralidade da Literatura Contemporânea"
          statement={
            <p>
              Uma das características que distingue a Literatura Contemporânea dos movimentos
              literários anteriores (como Romantismo, Parnasianismo ou Modernismo) é:
            </p>
          }
          options={[
            { letter: "a", text: "A existência de um programa estético único e bem definido, com manifestos claros que organizam os autores em torno de objetivos comuns." },
            { letter: "b", text: "O retorno às formas clássicas da tradição greco-romana, em reação ao experimentalismo do Modernismo." },
            { letter: "c", text: "A pluralidade estética: ausência de escola dominante, coexistência de estilos e vozes radicalmente distintos no mesmo período histórico.", correct: true },
            { letter: "d", text: "A exclusividade do romance como gênero literário válido, com o abandono da poesia e do conto em favor das narrativas longas." },
          ]}
          resolution={
            <p>
              A característica mais fundamental da Literatura Contemporânea é exatamente a ausência
              de uma escola dominante. Enquanto o Romantismo tinha seu programa de sentimentalismo
              e nacionalismo, o Parnasianismo tinha a perfeição formal e o Modernismo tinha seus
              manifestos — a literatura contemporânea recusa qualquer ortodoxia. Rubem Fonseca
              (brutalismo) e Lygia Fagundes Telles (lirismo psicológico) convivem no mesmo período;
              Conceição Evaristo (escrevivência afro-brasileira) e Ferréz (periferia) existem
              simultaneamente. Essa pluralidade é uma conquista, não uma deficiência. A alternativa
              C descreve isso com precisão; as demais descrevem outros períodos ou tendências.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Conceição Evaristo e a Escrevivência"
          statement={
            <p>
              Conceição Evaristo cunhou o conceito de <em>escrevivência</em> para descrever sua
              prática literária. Leia a seguinte declaração da autora:
              <br /><br />
              <em>"A nossa escrevivência não pode ser lida como histórias para 'adormecer os da
              casa-grande' e sim para incomodá-los em seus sonos injustos."</em>
              <br /><br />
              Nessa afirmação, Evaristo está:
            </p>
          }
          options={[
            { letter: "a", text: "Propondo que a literatura negra deve ser exclusivamente para entretenimento e não ter função política ou social." },
            { letter: "b", text: "Reclamando o direito de uma literatura que, em vez de confortar e confirmar as estruturas de poder das elites, as questiona e pertuba — afirmando a escrita como ato político de resistência.", correct: true },
            { letter: "c", text: "Criticando a literatura do século XIX por ter adormecido os leitores com histórias sem interesse social ou político." },
            { letter: "d", text: "Defendendo que a literatura deve ser acessível apenas para as classes populares, excluindo os leitores da elite da recepção de sua obra." },
          ]}
          resolution={
            <p>
              A expressão "casa-grande" evoca diretamente a obra de Gilberto Freyre e a estrutura
              colonial/escravocrata do Brasil: a casa-grande é o polo do poder, oposto à senzala.
              Ao dizer que sua escrevivência não é para "adormecer os da casa-grande", Evaristo
              recusa a literatura que confirma e conforta as estruturas de dominação — a literatura
              que entretém as elites sem questionar sua posição. Em vez disso, propõe uma escrita que
              "incomoda" — que perturba a consciência dos privilegiados, revelando as injustiças de
              um sistema que os beneficia. Isso é exatamente a dimensão política da escrevivência:
              não é apenas narrar a experiência negra, mas fazê-lo de forma que questione as
              relações de poder estabelecidas.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Rubem Fonseca e o Realismo Brutal"
          statement={
            <p>
              O livro <em>Feliz Ano Novo</em> (1975), de Rubem Fonseca, foi censurado pela ditadura
              militar brasileira. Um crítico argumenta que a censura foi equivocada não por razões
              estéticas, mas políticas: o regime censurou o livro alegando obscenidade e violência,
              mas o real motivo era que a literatura de Fonseca tornava visível a violência que o
              regime queria ocultar. Essa interpretação é:
            </p>
          }
          options={[
            { letter: "a", text: "Incorreta: a ditadura brasileira não censurava obras literárias, apenas obras jornalísticas e políticas explícitas." },
            { letter: "b", text: "Correta: ao retratar a violência urbana com crudeza, Fonseca expunha que a ordem que a ditadura dizia proteger era, na prática, uma ordem de exclusão e violência que vitimava os mais pobres.", correct: true },
            { letter: "c", text: "Incorreta: a censura foi justificada, pois o realismo brutal de Fonseca não tinha nenhum valor literário além do choque e da pornografia." },
            { letter: "d", text: "Parcialmente correta, mas irrelevante para a interpretação literária; o contexto histórico da censura não deve ser usado para analisar o valor estético da obra." },
          ]}
          resolution={
            <p>
              O argumento do crítico é historicamente sólido e a alternativa B o desenvolve
              adequadamente. A ditadura militar brasileira usou a censura de forma seletiva e
              estratégica: obras que questionavam a narrativa oficial do "Brasil grande" e da
              "ordem" eram perigosas, independentemente do pretexto usado para censurá-las. O
              realismo brutal de Fonseca era politicamente incômodo porque mostrava que a cidade
              "moderna" e "ordeira" que a ditadura vangloriava era na prática um espaço de violência
              extrema contra os pobres. Ao tornar isso visível com frieza cirúrgica, Fonseca
              desmentiu o discurso oficial — e isso é uma intervenção política, ainda que feita
              em linguagem literária. A alternativa A é factualmente falsa; C é uma crítica que
              a análise contemporânea da obra não sustenta; D comete o erro de separar artificialmente
              contexto histórico e valor literário.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Literatura Periférica e Voz Própria"
          statement={
            <p>
              Ferréz, no manifesto da <em>Literatura Marginal</em> (2001), afirma:
              <br /><br />
              <em>"Diferente de outras expressões artísticas que falam em nome da periferia, aqui
              é a própria periferia que fala."</em>
              <br /><br />
              Essa afirmação questiona fundamentalmente:
            </p>
          }
          options={[
            { letter: "a", text: "A qualidade técnica dos escritores que não nasceram na periferia, argumentando que apenas quem viveu na pobreza pode escrever bem sobre ela." },
            { letter: "b", text: "A representação como problema político: quando o centro fala sobre a margem, ele exerce poder sobre ela — o direito de nomear, representar e definir quem são os periféricos.", correct: true },
            { letter: "c", text: "A validade das outras tradições literárias brasileiras, como o regionalismo nordestino de Graciliano Ramos, que também falou sobre os pobres sem ser pobre." },
            { letter: "d", text: "Apenas a questão geográfica: escritores do Rio de Janeiro ou de outras cidades não podem falar sobre a periferia de São Paulo." },
          ]}
          resolution={
            <p>
              Ferréz não está fazendo um argumento biográfico simplista ("só o pobre pode escrever
              sobre pobreza") — está fazendo um argumento político sobre representação. Quando a
              literatura de elite (mesmo bem-intencionada) fala sobre a periferia, ela inevitavelmente
              exerce um poder: define quem são os periféricos, como eles são vistos, que aspectos
              de sua vida são "interessantes" para o público de classe média. Esse poder de
              representação é, em si mesmo, uma forma de dominação simbólica. A literatura
              marginal de Ferréz reivindica o direito de a própria periferia se representar —
              de definir seus próprios valores estéticos, sua própria linguagem, sua própria
              perspectiva sobre o mundo. A alternativa B captura essa dimensão política com precisão.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Metalinguagem na Literatura Contemporânea"
          statement={
            <p>
              Leia o trecho de conto contemporâneo:
              <br /><br />
              <em>"Ele tentou escrever a história dela, mas percebeu que qualquer palavra que
              escolhesse já era uma traição. Descrevê-la 'simples' seria condescendência;
              descrevê-la 'complexa' seria projeção. Desistiu do adjetivo. Ficou com o nome:
              ela. Mas mesmo esse artigo — ela — carregava séculos de sujeição."</em>
              <br /><br />
              O recurso literário central nesse fragmento e seu efeito são:
            </p>
          }
          options={[
            { letter: "a", text: "Ironia; o autor está ridicularizando os escritores excessivamente preocupados com a linguagem, sugerindo que a simples ação é mais importante do que filosofar sobre palavras." },
            { letter: "b", text: "Metalinguagem; o texto questiona a própria capacidade da linguagem de representar o outro sem exercer violência simbólica — toda escolha lexical já é um ato de poder.", correct: true },
            { letter: "c", text: "Fluxo de consciência; o trecho reproduz os pensamentos fragmentados do narrador sem organização lógica, mostrando uma crise psicológica." },
            { letter: "d", text: "Realismo social; o autor descreve a realidade objetiva de uma personagem feminina marginalizada com técnica documental." },
          ]}
          resolution={
            <p>
              O fragmento é um exemplo preciso de <strong>metalinguagem</strong> contemporânea:
              o texto não narra uma história — ele narra a <em>impossibilidade de narrar</em> sem
              exercer violência simbólica. Ao hesitar entre "simples" e "complexa", o narrador
              percebe que qualquer adjetivo projeta sobre a personagem uma perspectiva que não
              é dela — e que esse problema existe até no pronome "ela", que carrega "séculos de
              sujeição" (referência à história de dominação das mulheres na linguagem e na sociedade).
              Esse questionamento sobre a linguagem como instrumento de poder é central para a
              literatura contemporânea, especialmente a de autoras e autores que escrevem sobre
              grupos historicamente representados pelo olhar alheio. A alternativa B capta
              com exatidão esse mecanismo metalinguístico e político ao mesmo tempo.
            </p>
          }
        />
      </section>
    </article>
  );
}
