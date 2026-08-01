"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap31Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 31</span>
          <h1>Romantismo</h1>
          <p>
            No século XIX, a literatura brasileira viveu sua mais intensa afirmação de identidade: o Romantismo trouxe o indígena como herói nacional, a natureza tropical como cenário épico, o amor como força transcendente e a liberdade como bandeira política. Das florestas de Gonçalves Dias ao navio negreiro de Castro Alves, passando pelas noites sombrias de Álvares de Azevedo, três gerações de poetas e romancistas construíram a alma literária do Brasil independente.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. O Romantismo: Contexto Europeu e Chegada ao Brasil</h2>

        <p>
          O <strong>Romantismo</strong> foi um movimento artístico, literário e filosófico que surgiu na Alemanha e na Inglaterra no final do século XVIII e se expandiu pela Europa e pelas Américas ao longo do século XIX. Em reação ao racionalismo iluminista e ao rigor formal do Neoclassicismo, os românticos proclamaram a primazia do sentimento sobre a razão, da imaginação sobre a lógica, do individual sobre o universal. A Revolução Francesa (1789) e as guerras napoleônicas criaram o clima de transformação política e valorização das identidades nacionais que alimentou o movimento.
        </p>
        <p>
          No Brasil, o marco inaugural do Romantismo é a publicação de <em>Suspiros Poéticos e Saudades</em> (1836), de <strong>Gonçalves de Magalhães</strong>, obra publicada em Paris por um grupo de intelectuais brasileiros em torno da revista <em>Niterói</em>. O movimento chegou justamente no momento em que o país, recém-independente (1822), buscava construir uma identidade cultural própria, distinta de Portugal. Literatura e projeto nacional caminharam juntos: escrever romanticamente era também escrever brasilidade.
        </p>
        <p>
          Vale notar que o Romantismo não foi um movimento homogêneo nem na Europa nem no Brasil. Na Alemanha e na Inglaterra (onde surgiu), tinha um caráter mais filosófico e estético; na França (onde ganhou dimensão política com Victor Hugo), tornou-se também um manifesto de liberdade criativa e engajamento social; na América Latina, assumiu uma função que o distingue do europeu: a construção da identidade nacional. O Romantismo brasileiro não é uma mera imitação do europeu — é uma adaptação criativa que respondeu às necessidades específicas de uma nação jovem, mestiça e continental que precisava de símbolos, heróis e narrativas fundadoras próprias. Compreender essa especificidade é fundamental para qualquer análise do movimento no contexto do vestibular e do ENEM.
        </p>

        <div className="lesson-highlight">
          <h3>O Romantismo como projeto nacional</h3>
          <p>
            A Independência do Brasil (1822) criou uma urgência cultural: era preciso inventar símbolos, heróis e mitos fundadores para uma nova nação. O Romantismo ofereceu os instrumentos literários para isso — a idealização do passado, o heroísmo individual, a valorização da natureza local e o sentimentalismo que mobiliza afetos coletivos. O Instituto Histórico e Geográfico Brasileiro (IHGB), fundado em 1838, foi o outro braço desse projeto: ciência e literatura construíram juntas a nação brasileira. Em 1841, o IHGB realizou um concurso sobre como escrever a história do Brasil; o premiado foi o ensaio do naturalista Karl Friedrich von Martius, que propôs uma história centrada na mistura das três raças — branca, negra e indígena. Essa proposta encontrou na literatura romântica seu principal veículo: o indianismo de Gonçalves Dias e Alencar, e a valorização da mestiçagem em <em>Iracema</em>, são respostas literárias a esse programa historiográfico nacional.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🇫🇷</span>
            <h3>Revolução Francesa</h3>
            <p>A queda do Antigo Regime e a ascensão do ideário de liberdade, igualdade e fraternidade criaram o clima político que alimentou o Romantismo europeu.</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Nacionalismos</h3>
            <p>O século XIX viu povos inteiros buscando identidades nacionais próprias. A literatura romântica foi o principal veículo dessa busca em toda a Europa e nas Américas.</p>
          </div>
          <div className="lesson-card">
            <span>🇧🇷</span>
            <h3>Independência (1822)</h3>
            <p>A separação de Portugal exigiu a construção de uma cultura nacional autônoma. O Romantismo foi o movimento literário que respondeu a essa demanda com mais vigor.</p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Niterói (1836)</h3>
            <p>A revista fundada em Paris por Gonçalves de Magalhães, Porto Alegre e Torres Homem é o marco simbólico do início do Romantismo no Brasil.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Características Gerais</span>
        <h2>2. As Marcas da Escrita Romântica — Do Subjetivismo à Liberdade Formal</h2>

        <p>
          O Romantismo rompeu radicalmente com os preceitos neoclássicos de equilíbrio, impessoalidade e imitação dos antigos. Em seu lugar, afirmou uma série de características que definiram a nova estética. O <strong>subjetivismo</strong> colocou o eu no centro da experiência literária: o poeta romântico fala de si, de suas dores, amores e angústias, fazendo da literatura uma confissão. O <strong>sentimentalismo</strong> levou as emoções ao paroxismo — lágrimas, desmaios, suspiros e mortes por amor tornaram-se recursos recorrentes. A <strong>idealização</strong> pintou figuras impossíveis: mulheres angelicais, heróis sem mancha, natureza perfeita.
        </p>
        <p>
          A <strong>liberdade formal</strong> foi outro traço decisivo: em oposição às rígidas regras neoclássicas, os românticos misturaram gêneros, variaram metros, aboliram ou flexibilizaram rimas. O ideal da <strong>fuga da realidade</strong> — ou escapismo — manifestou-se no medievalismo, no exotismo, nas viagens imaginárias e na idealização do passado. Por fim, a <strong>valorização da natureza</strong> transformou rios, florestas e montanhas em personagens que refletem o estado emocional do eu lírico — recurso chamado de <em>patetic fallacy</em> (falácia patética) na crítica literária.
        </p>
        <p>
          O <strong>culto do gênio</strong> é outro traço importante do Romantismo que frequentemente aparece no ENEM: o artista romântico não é um artesão que obedece a regras — é um ser excepcional, dotado de sensibilidade superior, que sofre mais intensamente do que o comum das pessoas e, por isso, cria obras que transcendem o ordinário. Esse culto do gênio gerou o arquétipo do "artista maldito" — aquele que é incompreendido em vida, vive à margem da sociedade e só é reconhecido postumamente. No Brasil, Álvares de Azevedo, Cruz e Sousa (que embora simbolista, herdou essa tradição) e até Machado de Assis (que começou romanticamente antes de se tornar realista) encarnaram, em diferentes graus, essa figura.
        </p>
        <p>
          Outro traço central do Romantismo é o <strong>medievalismo</strong> — a idealização da Idade Média como época de cavaleiros honrados, damas puras e fé inabalável, em oposição ao mundo industrializado e desencantado do século XIX. No Brasil, o medievalismo se manifesta especialmente nos romances de José de Alencar, em que os heróis indígenas funcionam como cavaleiros medievais tropicais: leais, bravos, devotos a uma causa superior. A relação entre Peri e Ceci em <em>O Guarani</em>, por exemplo, recria a convenção do cavaleiro que protege a dama delicada — apenas em cenário amazônico. Essa transferência de convenções europeias para o contexto brasileiro é um dos traços mais característicos do Romantismo nacional.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Definição</th>
                <th>Exemplo na Literatura Brasileira</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subjetivismo</td>
                <td>Predominância do eu e das emoções pessoais</td>
                <td>Álvares de Azevedo em <em>Noite na Taverna</em></td>
              </tr>
              <tr>
                <td>Sentimentalismo</td>
                <td>Exaltação das emoções, amor trágico, melancolia</td>
                <td>Casimiro de Abreu em <em>Minha Terra Tem Palmeiras</em></td>
              </tr>
              <tr>
                <td>Idealização</td>
                <td>Personagens e situações irreais, perfeitas</td>
                <td>Mulher angelical nos romances de Alencar</td>
              </tr>
              <tr>
                <td>Nacionalismo</td>
                <td>Exaltação da pátria, natureza e história locais</td>
                <td>Gonçalves Dias em <em>I-Juca-Pirama</em></td>
              </tr>
              <tr>
                <td>Indianismo</td>
                <td>Indígena como herói nacional idealizado</td>
                <td>Iracema e Peri de José de Alencar</td>
              </tr>
              <tr>
                <td>Mal do século</td>
                <td>Pessimismo, tédio, atração pela morte</td>
                <td>Álvares de Azevedo, Casimiro de Abreu</td>
              </tr>
              <tr>
                <td>Liberdade formal</td>
                <td>Ruptura com as regras rígidas neoclássicas</td>
                <td>Versos livres, mistura de gêneros</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Um aspecto frequentemente ignorado nas análises do Romantismo brasileiro é sua <strong>dimensão linguística</strong>: o movimento contribuiu decisivamente para a formação do <em>português brasileiro</em> como língua literária autônoma. Alencar, em particular, travou uma polêmica pública com o gramático e crítico português Pinheiro Chagas sobre se a língua falada e escrita no Brasil deveria seguir as normas do português europeu ou assumir suas particularidades locais. Para Alencar, o Brasil tinha o direito de criar sua própria língua literária — com os indianismos, os africanismos e as construções sintáticas específicas do português americano. Essa defesa da independência linguística, paralela à independência política, foi uma das contribuições mais duradouras do Romantismo para a cultura brasileira.
        </p>

        <div className="lesson-highlight">
          <h3>Romantismo europeu: referências que o ENEM pode citar</h3>
          <ul>
            <li><strong>Johann Wolfgang von Goethe</strong> (Alemanha, 1749–1832) — <em>Os Sofrimentos do Jovem Werther</em> (1774): personagem suicida por amor impossível; modelo do mal do século.</li>
            <li><strong>Lord Byron</strong> (Inglaterra, 1788–1824) — poeta libertino e rebelde; modelo do herói byroniano; influência direta sobre Álvares de Azevedo.</li>
            <li><strong>Victor Hugo</strong> (França, 1802–1885) — <em>Os Miseráveis</em>, <em>Notre-Dame de Paris</em>; Romantismo social e histórico; influência sobre Castro Alves.</li>
            <li><strong>François-René de Chateaubriand</strong> (França, 1768–1848) — <em>Atala</em>, <em>René</em>: índios americanos idealizados; influência direta sobre o indianismo de Alencar.</li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">As Três Gerações</span>
        <h2>3. Linha do Tempo: As Três Gerações do Romantismo Brasileiro</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 240"
            width="700"
            height="240"
            aria-label="Linha do tempo das três gerações do Romantismo brasileiro com autores e datas"
          >
            <defs>
              <marker id="arrowRom" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1" />
              </marker>
            </defs>
            <rect x="0" y="0" width="700" height="240" rx="14" fill="#f8fafc" />
            <line x1="40" y1="100" x2="660" y2="100" stroke="#6366f1" strokeWidth="3" markerEnd="url(#arrowRom)" />

            {/* Marca 1836 */}
            <circle cx="80" cy="100" r="9" fill="#6366f1" />
            <text x="80" y="84" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1836</text>
            <text x="80" y="120" textAnchor="middle" fontSize="10" fill="#4b5563">Início do</text>
            <text x="80" y="133" textAnchor="middle" fontSize="10" fill="#4b5563">Romantismo</text>

            {/* Bloco 1a geração */}
            <rect x="110" y="60" width="160" height="55" rx="8" fill="#dbeafe" />
            <text x="190" y="80" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">1ª Geração</text>
            <text x="190" y="96" textAnchor="middle" fontSize="10" fill="#1e40af">Indianismo / Nacionalismo</text>
            <text x="190" y="110" textAnchor="middle" fontSize="9" fill="#1e40af">Gonçalves Dias · Alencar</text>

            {/* Bloco 2a geração */}
            <rect x="280" y="60" width="160" height="55" rx="8" fill="#fce7f3" />
            <text x="360" y="80" textAnchor="middle" fontSize="11" fill="#9d174d" fontWeight="bold">2ª Geração</text>
            <text x="360" y="96" textAnchor="middle" fontSize="10" fill="#9d174d">Mal do Século / Ultra</text>
            <text x="360" y="110" textAnchor="middle" fontSize="9" fill="#9d174d">Álvares de Azevedo · Casimiro</text>

            {/* Bloco 3a geração */}
            <rect x="450" y="60" width="160" height="55" rx="8" fill="#d1fae5" />
            <text x="530" y="80" textAnchor="middle" fontSize="11" fill="#065f46" fontWeight="bold">3ª Geração</text>
            <text x="530" y="96" textAnchor="middle" fontSize="10" fill="#065f46">Condoreirismo / Social</text>
            <text x="530" y="110" textAnchor="middle" fontSize="9" fill="#065f46">Castro Alves</text>

            {/* Marca 1881 */}
            <circle cx="630" cy="100" r="9" fill="#374151" />
            <text x="630" y="84" textAnchor="middle" fontSize="11" fill="#374151" fontWeight="bold">1881</text>
            <text x="630" y="120" textAnchor="middle" fontSize="10" fill="#4b5563">Memórias Póstumas</text>
            <text x="630" y="133" textAnchor="middle" fontSize="10" fill="#4b5563">(fim do Romantismo)</text>

            <text x="350" y="175" textAnchor="middle" fontSize="12" fill="#6366f1" fontWeight="bold">Romantismo Brasileiro (1836–1881)</text>
            <text x="350" y="193" textAnchor="middle" fontSize="11" fill="#64748b">Três gerações com características, autores e obras distintas</text>
          </svg>
          <figcaption>As três gerações do Romantismo brasileiro, com seus principais autores e características.</figcaption>
        </figure>

        <p>
          O Romantismo brasileiro se desenvolveu em três fases ou gerações distintas, cada uma com ênfases diferentes. A <strong>primeira geração</strong> (c. 1836–1860) foi marcada pelo entusiasmo patriótico, pelo indianismo e pela exaltação da natureza brasileira. A <strong>segunda geração</strong> (c. 1850–1870), influenciada pelo poeta inglês Lord Byron e pelos alemães do <em>Sturm und Drang</em>, mergulhou no pessimismo, na melancolia e na atração pela morte — o chamado <em>mal do século</em>. A <strong>terceira geração</strong> (c. 1860–1880), denominada condoreirismo, voltou-se para o engajamento social e político, especialmente o abolicionismo.
        </p>
        <p>
          É importante entender que as gerações não são compartimentos estanques: há sobreposições cronológicas e temáticas. Álvares de Azevedo, por exemplo, publicou contemporaneamente a Gonçalves Dias, mas seus temas são radicalmente diferentes. O que define a geração não é apenas a data de publicação, mas o conjunto de influências, temas e postura diante da existência. Essa divisão tripartite, consolidada pela tradição crítica, é um instrumento analítico útil, não uma realidade absoluta. O ENEM cobra essa divisão com frequência, especialmente pedindo ao candidato que identifique a qual geração pertence um determinado fragmento ou autor.
        </p>
        <p>
          A periodização do Romantismo brasileiro também tem um contexto editorial importante: o desenvolvimento da imprensa no Brasil ao longo do século XIX criou o mercado para a literatura. Jornais e revistas publicavam poemas e romances em folhetins (publicação por partes semanais ou diárias), o que moldou a estrutura das obras: precisavam de ganchos narrativos, personagens marcantes e melodrama suficiente para manter o leitor engajado. O romance folhetim europeu — com Eugène Sue, Alexandre Dumas e, mais tarde, Victor Hugo — foi o modelo que os escritores brasileiros seguiram e adaptaram. Essa origem folhetinesca explica algumas características dos romances de Alencar que críticos mais rigorosos apontavam como defeitos: o excesso de coincidências, os finais felizes, a grandiloquência do estilo.
        </p>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Primeira Geração</span>
        <h2>4. Indianismo e Nacionalismo — Gonçalves Dias e José de Alencar</h2>

        <p>
          <strong>Antônio Gonçalves Dias</strong> (1823–1864) é o maior poeta da primeira geração romântica e um dos mais importantes de toda a literatura brasileira. Nascido no Maranhão, filho de pai português e mãe mameluca (cabocla), Gonçalves Dias viveu na própria carne a mestiçagem que tentaria traduzir poeticamente. Seus poemas indianistas — reunidos em <em>Primeiros Cantos</em> (1846), <em>Segundos Cantos</em> (1848) e <em>Últimos Cantos</em> (1851) — constroem uma imagem épica e trágica do indígena, que não é o selvagem primitivo dos cronistas coloniais, mas um herói de dignidade ímpar, portador de valores como coragem, lealdade e amor à liberdade.
        </p>
        <p>
          O poema mais famoso de Gonçalves Dias é <em>I-Juca-Pirama</em> (1851), que narra em linguagem épica o dilema de um jovem guerreiro tupi capturado pelos timbiras: ele se recusa a chorar, mas chora ao ser liberado para cuidar do pai cego — e a covardia implícita o expulsa da tribo. O poema explora o choque entre o código de honra guerreiro (morrer com dignidade é a glória máxima) e os laços de amor filial. A <em>Canção do Exílio</em> (1843), escrita em Portugal durante os estudos em Coimbra, tornou-se o poema mais famoso e parodiado da literatura brasileira: <em>"Minha terra tem palmeiras, / Onde canta o Sabiá; / As aves que aqui gorjeiam / Não gorjeiam como lá."</em>
        </p>

        <div className="math-block">
          <strong>I-Juca-Pirama — Resumo da estrutura:</strong>
          <p>O poema épico de Gonçalves Dias é organizado em nove cantos, cada um narrando uma etapa da tragédia do guerreiro tupi capturado pelos timbiras. O título significa, em tupi, <em>"o que há de ser morto"</em> ou <em>"aquele que vai morrer"</em>. O guerreiro capturado não deve chorar ao ser comido — seria desonra suprema. Mas ele chora quando avisado que o pai cego ficaria só. Liberado pelos timbiras (para quem comer um covarde seria desonra), o guerreiro retorna ao pai, que o amaldiçoa e o expulsa. A tragédia é dupla: o herói falha ao código guerreiro por amor filial, e o amor filial não o salva da expulsão da tribo. É a impossibilidade de conciliar dois valores absolutos — honra guerreira e amor familiar — que torna o poema trágico no sentido clássico.</p>
        </div>

        <p>
          <strong>José de Alencar</strong> (1829–1877) é o maior prosador romântico brasileiro e um dos criadores do romance nacional. Sua obra cobre três modalidades do indianismo e do regionalismo: os romances indianistas (<em>O Guarani</em>, 1857; <em>Iracema</em>, 1865; <em>Ubirajara</em>, 1874), os romances urbanos (<em>Senhora</em>, 1875; <em>Lucíola</em>, 1862) e os romances regionalistas (<em>O Gaúcho</em>, 1870; <em>O Sertanejo</em>, 1875). Em <em>Iracema</em>, a personagem-título (anagrama de "América") é a virgem do mel dos lábios, sacerdotisa que trai seu povo por amor ao português Martim — alegoria da formação mestiça do Brasil. Em <em>O Guarani</em>, o indígena Peri é leal, forte, nobre e dedicado à proteção de Ceci, a jovem europeia — o encontro das duas raças fundadoras narrado como romance de cavalaria tropical.
        </p>

        <p>
          O romance <em>Ubirajara</em> (1874) fecha a trilogia indianista de Alencar e é o menos conhecido dos três, mas talvez o mais ambicioso: narra a história de um guerreiro tupi antes da chegada dos europeus, tentando retratar uma civilização indígena sem o olhar colonial. Alencar usa fontes etnográficas — as descrições dos cronistas coloniais — para construir um cenário pré-colombiano verossímil. Embora a idealização ainda esteja presente, <em>Ubirajara</em> tem uma riqueza de detalhes etnográficos que o diferencia das convenções do romance histórico europeu, mostrando que o projeto indianista de Alencar tinha também uma dimensão documental.
        </p>
        <p>
          A <em>Canção do Exílio</em> de Gonçalves Dias é talvez o poema mais parodiado da literatura brasileira: Oswald de Andrade, no Modernismo, a subverteu em <em>Canto do Regresso à Pátria</em> com o verso provocador "Minha terra tem palmares". Cassiano Ricardo a reescreveu com ironia, e inúmeros poetas e compositores populares a citaram, parafrasearam e distorceram. Essa profusão de paródias é a maior prova da força do original: um texto só é parodiado quando é suficientemente conhecido e poderoso para que a paródia seja compreendida. A <em>Canção do Exílio</em> tornou-se um símbolo da brasilidade e, ao mesmo tempo, um símbolo da nostalgia — e parodiá-la tornou-se uma forma de questionar o próprio conceito de brasilidade.
        </p>

        <p>
          Gonçalves Dias distingue-se dos demais poetas indianistas por um detalhe biográfico fundamental: ele próprio era mestiço — filho de pai português e mãe mameluca. Essa identidade híbrida não foi um obstáculo à sua carreira literária, mas uma fonte de tensão produtiva: o poeta que celebra o índio como herói nacional é, ele mesmo, um produto do encontro (muitas vezes violento) entre o colonizador e o colonizado. Sua poesia indiana pode ser lida, nesse sentido, como uma elaboração literária de sua própria condição de sujeito entre dois mundos — o Brasil português e o Brasil indígena que a colonização destruiu. A saudade que perpassa seus poemas mais conhecidos não é apenas geográfica (da terra natal maranhense, durante os estudos em Coimbra): é também histórica, da civilização tupi que desapareceu.
        </p>

        <div className="lesson-highlight">
          <h3>O indianismo romântico e suas contradições</h3>
          <p>
            O indígena dos românticos é uma criação literária, não uma representação etnográfica fiel. Gonçalves Dias e Alencar constroem um índio "nobre", guerreiro, honrado e próximo dos valores europeus da cavalaria medieval — o chamado "bom selvagem" de Rousseau. Essa idealização serviu ao projeto nacional de criar heróis fundadores para o Brasil, mas ignorou a violência da colonização e a realidade dos povos indígenas contemporâneos, ainda sendo exterminados. O ENEM frequentemente pede que o candidato reconheça essa tensão entre a idealização literária e a realidade histórica.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Segunda Geração</span>
        <h2>5. Mal do Século e Ultrarromantismo — Álvares de Azevedo e Casimiro de Abreu</h2>

        <p>
          A segunda geração romântica brasileira, surgida por volta de 1850, é marcada pelo que os contemporâneos chamaram de <strong>mal do século</strong> (<em>spleen</em> ou <em>weltschmerz</em>): uma melancolia existencial, um tédio profundo diante da vida, uma atração mórbida pela morte e um pessimismo que nenhuma beleza ou amor consegue dissipar. A influência de <strong>Lord Byron</strong> (1788–1824) — o poeta inglês boêmio, libertino e maldito — é determinante: Byron criou o arquétipo do gênio atormentado, que os jovens brasileiros (muitos estudantes de Direito em São Paulo) imitaram em vida e em versos.
        </p>
        <p>
          O contexto histórico explica em parte a melancolia da segunda geração: eram jovens nascidos numa época de grandes esperanças (a Independência, o ideário liberal) que cresceram vendo essas esperanças frustradas pelo regime imperial conservador, pela escravidão persistente e pela estagnação social. A distância entre o ideal romântico (liberdade, amor absoluto, heroísmo) e a realidade mesquinha da vida cotidiana burguesa criou um abismo existencial — o <em>spleen</em> — que se tornou a matéria-prima da segunda geração. Esse sentimento não era exclusivamente brasileiro: era um fenômeno europeu, e os jovens poetas brasileiros o internalizaram com a intensidade própria de quem descobre simultaneamente a literatura e a consciência da morte.
        </p>

        <p>
          <strong>Álvares de Azevedo</strong> (1831–1852) é o mais representativo desta geração. Morreu aos 20 anos de tuberculose, sem publicar em vida: toda sua obra foi organizada postumamente pela família. Sua poesia, reunida na <em>Lira dos Vinte Anos</em> (1853), oscila entre dois registros opostos — o lirismo sentimental e o humor irônico que zomba de si mesmo e da própria melancolia. Essa duplicidade é uma das marcas mais sofisticadas de Azevedo: em <em>Se eu morresse amanhã</em>, o poeta imagina a própria morte como cenário de amor; em <em>Idéias Íntimas</em>, ri de sua própria angústia. O romance <em>Macário</em> e o conto <em>Noite na Taverna</em> completam uma obra breve mas intensa.
        </p>
        <div className="lesson-highlight">
          <h3>Álvares de Azevedo e a ironia romântica</h3>
          <p>
            Um aspecto frequentemente negligenciado de Álvares de Azevedo é sua <strong>ironia</strong>. A <em>Lira dos Vinte Anos</em> está dividida explicitamente em duas partes que o autor descreve como expressões de dois "eus" opostos: o sentimental e o irônico. No prefácio, Azevedo brinca que o livro tem "duas almas" — a que chora e a que ri das próprias lágrimas. Poemas como <em>Idéias Íntimas</em> e <em>Uma estrofe de Musset</em> mostram o poeta zombando do próprio sentimentalismo, antecipando um autoconhecimento que transcende o Romantismo convencional. Essa duplicidade — sentir profundamente e, ao mesmo tempo, observar esse sentimento com distância irônica — é uma das marcas mais sofisticadas da obra de Azevedo e o que a tornou tão relevante para leitores do século XX e XXI.
          </p>
        </div>

        <p>
          <strong>Casimiro de Abreu</strong> (1839–1860) representa o lado mais ingênuo e sentimental da segunda geração. Sua poesia, reunida em <em>As Primaveras</em> (1859), celebra a infância perdida, a saudade da terra natal, o amor impossível e a consciência da morte prematura. O poema mais famoso, <em>Minha Terra</em>, é um eco direto da <em>Canção do Exílio</em> de Gonçalves Dias — mas enquanto Dias exila-se de um Brasil tropical que ama, Casimiro deplora uma infância que nunca voltará. Outros autores importantes da segunda geração: <strong>Fagundes Varela</strong> e <strong>Junqueira Freire</strong>.
        </p>
        <p>
          O fenômeno da morte prematura não foi acidental na segunda geração: Álvares de Azevedo morreu aos 20, Casimiro de Abreu aos 21, Junqueira Freire aos 24. A tuberculose — chamada na época de "tísica" — era a doença mais temida e romantizada do século XIX. Afetava principalmente jovens, avançava lentamente e conferia ao doente uma palidez etérea e uma intensidade emocional que o imaginário romântico associava ao gênio criativo. O próprio Chopin, Keats, Schiller e, mais tarde, Kafka morreram de tuberculose. Nos poetas brasileiros da segunda geração, a consciência da morte iminente alimentou a obsessão mórbida que caracteriza o ultrarromantismo — era, ao mesmo tempo, uma postura literária e uma experiência biográfica real.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌑</span>
            <h3>Pessimismo e Tédio</h3>
            <p>O eu lírico sente que a vida não oferece sentido, alegria ou esperança. O <em>spleen</em> byroniano domina a visão de mundo da segunda geração.</p>
          </div>
          <div className="lesson-card">
            <span>💔</span>
            <h3>Amor Impossível</h3>
            <p>O amor é sempre frustrado, idealizado ao ponto de ser irrealizável, ou associado à morte. A amada frequentemente é uma figura angelical e inacessível.</p>
          </div>
          <div className="lesson-card">
            <span>⚰️</span>
            <h3>Atração pela Morte</h3>
            <p>A morte é tratada como descanso, beleza ou libertação — não como tragédia. Muitos poetas da geração morreram jovens, o que alimentou o mito do poeta maldito.</p>
          </div>
          <div className="lesson-card">
            <span>🍷</span>
            <h3>Boemia e Ironia</h3>
            <p>A vida boêmia, o vinho e o humor irônico coexistem com a melancolia — especialmente em Álvares de Azevedo, que ri da própria angústia.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Terceira Geração</span>
        <h2>6. Condoreirismo e Poesia Social — Castro Alves</h2>

        <p>
          A terceira geração romântica, ativa entre as décadas de 1860 e 1880, recebe o nome de <strong>condoreirismo</strong> — referência ao condor, ave de voo altíssimo dos Andes, símbolo da poesia que se eleva acima do individual para contemplar e denunciar as injustiças do mundo. Se a segunda geração se fechou sobre si mesma em melancolia egocêntrica, a terceira abre a literatura para o social, o político e o histórico.
        </p>
        <p>
          <strong>Castro Alves</strong> (1847–1871) é o mais importante representante desta geração e um dos maiores poetas da língua portuguesa. Chamado de <em>O Poeta dos Escravos</em>, Castro Alves tornou a causa abolicionista o centro de sua obra. Seu poema mais famoso, <em>Navio Negreiro</em> (publicado postumamente em <em>Os Escravos</em>, 1883), é uma das mais poderosas denúncias literárias da escravidão já escritas: o eu lírico observa do alto — como o condor — um navio negreiro no Atlântico, descrevendo o horror dos escravos acorrentados antes de clamar à humanidade e à liberdade. A musicalidade intensa, o ritmo vigoroso e as imagens cinematográficas de Castro Alves foram influenciadas pelo teatro e pela retórica política.
        </p>

        <div className="math-block">
          <strong>Fragmento de <em>Navio Negreiro</em> (Castro Alves):</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Era um sonho dantesco... o tombadilho<br/>
            Que das luzernas avermelha o brilho.<br/>
            Em sangue a se banhar.<br/>
            Tinir de ferros... estalar de açoite...<br/>
            Legiões de homens negros como a noite,<br/>
            Horrendos a dançar..."
          </p>
          <p>
            O fragmento exemplifica o condoreirismo: a visão aérea (perspectiva do condor), o vocabulário grandioso e dramático, a musicalidade intensa e a denúncia direta da desumanidade da escravidão.
          </p>
        </div>

        <p>
          O movimento condoreiro tem nome e símbolo precisos: o <strong>condor</strong> dos Andes, ave de envergadura de até três metros que plana a alturas onde nenhuma outra ave chega, é a metáfora do poeta que se eleva acima do cotidiano para ver o panorama completo da injustiça social. Essa postura — a perspectiva aérea, grandiloquente, quase profética — é a marca estilística do condoreirismo: os poemas de Castro Alves têm o tom de discursos, de proclamações, de sermões laicos pela liberdade. Não é coincidência que o poeta tenha sido também um notável orador público, conhecedor das técnicas da retórica clássica.
        </p>

        <p>
          Além do abolicionismo, o condoreirismo abraçou o republicanismo e outras causas liberais. Castro Alves também escreveu poesia amorosa intensa em <em>Espumas Flutuantes</em> (1870), mostrando que o engajamento político não excluía a paixão romântica. Outros condoreiros importantes: <strong>Sousândrade</strong>, que levou a geração ao limite do experimentalismo em <em>O Guesa Errante</em> — obra tão vanguardista que só foi redescoberta no século XX, com uma antecipação das técnicas do Modernismo que espantou os críticos.
        </p>

        <div className="lesson-highlight">
          <h3>Castro Alves e a abolição — contexto histórico</h3>
          <p>
            Castro Alves escreveu seus poemas abolicionistas entre 1866 e 1871 — período em que o movimento abolicionista ainda era minoritário no Brasil. A Lei do Ventre Livre seria aprovada apenas em 1871 (no mesmo ano em que o poeta morreu, aos 24 anos, de tuberculose agravada por um acidente de caça que lhe amputou parte do pé). A abolição completa viria apenas em 1888 — 17 anos após sua morte. Sua poesia foi, portanto, um ato de antecipação política: escreveu sobre a liberdade dos escravos numa época em que a escravidão era legal, lucrativa e defendida pela maioria da elite brasileira. Essa coragem intelectual e moral torna sua obra duplamente significativa — como literatura e como documento histórico de resistência.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prosa Romântica</span>
        <h2>7. O Romance Romântico Brasileiro — José de Alencar e as Categorias da Prosa</h2>

        <p>
          O romance foi o gênero literário por excelência do século XIX em toda a Europa e nas Américas. No Brasil, José de Alencar o cultivou com uma amplitude temática e geográfica sem precedentes, construindo uma espécie de mapa literário da nação. Sua divisão em quatro tipos de romance é didaticamente útil para o vestibular:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Tema central</th>
                <th>Obras principais</th>
                <th>Características</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Indianista</td>
                <td>Indígena como herói nacional</td>
                <td><em>O Guarani</em> (1857), <em>Iracema</em> (1865), <em>Ubirajara</em> (1874)</td>
                <td>Idealização do índio, natureza épica, fusão de raças</td>
              </tr>
              <tr>
                <td>Urbano</td>
                <td>Vida da burguesia nas cidades</td>
                <td><em>Lucíola</em> (1862), <em>Senhora</em> (1875), <em>A Pata da Gazela</em> (1870)</td>
                <td>Crítica velada à sociedade, amor e dinheiro, mulher idealizada</td>
              </tr>
              <tr>
                <td>Histórico</td>
                <td>Passado colonial e imperial</td>
                <td><em>As Minas de Prata</em> (1865–1866)</td>
                <td>Reconstrução histórica com aventura e drama</td>
              </tr>
              <tr>
                <td>Regionalista</td>
                <td>Regiões e costumes do Brasil</td>
                <td><em>O Gaúcho</em> (1870), <em>O Sertanejo</em> (1875)</td>
                <td>Valorização das diversidades regionais e do sertão</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          O romance do século XIX — no Brasil e em toda a Europa — foi o gênero literário que melhor expressou as aspirações e contradições da burguesia emergente. A narrativa longa, com múltiplos personagens e fios argumentativos, permitia retratar a complexidade da vida social de forma que a poesia não conseguia. Os leitores burgueses reconheciam nos romances seus próprios dilemas: o casamento por amor ou por conveniência, a ascensão social, a tensão entre tradição e modernidade. No Brasil, o romance romântico de Alencar cumpriu ainda uma função adicional: mapear e inventariar a diversidade regional e histórica de um país continental que mal acabava de se constituir como nação.
        </p>

        <p>
          Em <em>Senhora</em>, considerado o mais bem construído dos romances urbanos de Alencar, a protagonista Aurélia Camargo compra o noivo que a abandonou e o submete a um casamento de vingança — antes de revelarem que o amor ainda existe entre eles. O romance explora com sofisticação incomum para a época as relações entre amor, dinheiro, orgulho e perdão em uma sociedade onde o casamento é também uma transação comercial.
        </p>
        <p>
          <em>Lucíola</em> (1862) é outro romance urbano fundamental de Alencar: narra a história de Lúcia, uma cortesã que se apaixona pelo narrador Paulo e tenta se reabilitar moralmente. A tensão entre o passado de Lúcia (a prostituição como sobrevivência) e seus sentimentos nobres (o amor autêntico) é o núcleo dramático da obra. O romance foi inovador ao dar voz e complexidade psicológica a uma personagem socialmente estigmatizada — antecipando, em certa medida, a dimensão realista que Machado de Assis desenvolveria com muito mais sofisticação. A dedicatória de Alencar a <em>Lucíola</em> — <em>"A J.M., que me contou esta história"</em> — sugere uma base real para o romance, o que aumentou seu impacto no público da época.
        </p>
      </section>

      {/* ── SEÇÃO 7b ── */}
      <section className="lesson-section">
        <span className="section-kicker">Romance e Sociedade</span>
        <h2>7. O Romance Romântico como Espelho da Sociedade Brasileira</h2>

        <p>
          Para além da classificação temática proposta pela crítica, os romances de Alencar — e do Romantismo em geral — revelam muito sobre a <strong>estrutura social do Brasil oitocentista</strong>. Nos romances urbanos, a sociedade fluminense aparece com seus saraus, seus matrimônios de interesse, suas intrigas de família e seus padrões rígidos de classe. A mulher, nos romances de Alencar, ocupa um lugar ambíguo: é ao mesmo tempo idealizada (angelical, pura, devotada) e agente — como Aurélia em <em>Senhora</em>, que usa o dinheiro como poder e inverte a lógica patriarcal do casamento. A crítica feminista contemporânea tem explorado exatamente essa tensão: os romances românticos constroem um ideal feminino opressivo (a mulher que só existe para amar e ser amada), mas às vezes abrem fissuras em que mulheres exercem poder real.
        </p>
        <p>
          Nos romances regionalistas — <em>O Gaúcho</em>, <em>O Sertanejo</em> — Alencar realizou uma operação literária importante: deu dignidade e voz literária a regiões do Brasil que a tradição letrada ignorava. O sertanejo, o gaúcho, o ribeirinho amazônico — figuras que o mundo urbano carioca desconhecia — tornaram-se personagens de romance, com honra, emoções e valores próprios. Esse gesto antecipou o regionalismo literário que floresceria no século XX, com escritores como Graciliano Ramos, João Guimarães Rosa e Rachel de Queiroz.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>Geração</th>
                <th>Obra Principal</th>
                <th>Contribuição Específica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gonçalves Dias</td>
                <td>1ª (Indianismo)</td>
                <td><em>I-Juca-Pirama</em>, <em>Canção do Exílio</em></td>
                <td>Criou o índio como herói épico nacional; fundador da lírica brasileira</td>
              </tr>
              <tr>
                <td>José de Alencar</td>
                <td>1ª (Indianismo/Prosa)</td>
                <td><em>Iracema</em>, <em>O Guarani</em>, <em>Senhora</em></td>
                <td>Criou o romance nacional brasileiro em todas as suas vertentes</td>
              </tr>
              <tr>
                <td>Álvares de Azevedo</td>
                <td>2ª (Mal do Século)</td>
                <td><em>Lira dos Vinte Anos</em>, <em>Noite na Taverna</em></td>
                <td>Introduziu o Byronismo e a ironia romântica; morreu aos 20 anos</td>
              </tr>
              <tr>
                <td>Casimiro de Abreu</td>
                <td>2ª (Mal do Século)</td>
                <td><em>As Primaveras</em></td>
                <td>Lirismo da infância perdida e saudade; sensibilidade acessível</td>
              </tr>
              <tr>
                <td>Fagundes Varela</td>
                <td>2ª geração (transição)</td>
                <td><em>Noturnas</em>, <em>Vozes da América</em></td>
                <td>Transição entre o mal do século e o condoreirismo</td>
              </tr>
              <tr>
                <td>Castro Alves</td>
                <td>3ª (Condoreirismo)</td>
                <td><em>Navio Negreiro</em>, <em>Espumas Flutuantes</em></td>
                <td>Poesia política e abolicionista; o maior orador da literatura brasileira</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          O Romantismo brasileiro produziu mais do que apenas poesia e romance: também ensaios, cartas, discursos e crítica literária que revelam como os intelectuais da época pensavam sobre literatura, nação e identidade. O <em>Instinto de Nacionalidade</em> (1873), ensaio de Machado de Assis — escrito no intervalo entre sua fase romântica e sua fase realista — é um dos textos mais lúcidos sobre o projeto literário brasileiro do século XIX. Nele, Machado defende que a literatura brasileira deve ter um "sentimento íntimo" nacional sem precisar, para isso, mencionar o Amazonas, o caju ou a onça em todo poema. A verdadeira brasilidade, para Machado, está na visão de mundo, não nos elementos pitorescos. Esse argumento dialogava diretamente com o Romantismo indianista — e o questionava sem destruí-lo.
        </p>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação de Gerações</span>
        <h2>8. As Três Gerações em Perspectiva — Quadro Comparativo</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>1ª Geração (Indianismo)</th>
                <th>2ª Geração (Mal do Século)</th>
                <th>3ª Geração (Condoreirismo)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tom dominante</td>
                <td>Ufanista, épico, saudoso</td>
                <td>Melancólico, pessimista, irônico</td>
                <td>Grandioso, inflamado, político</td>
              </tr>
              <tr>
                <td>Tema central</td>
                <td>Nação, natureza, índio</td>
                <td>Morte, amor impossível, tédio</td>
                <td>Liberdade, abolição, república</td>
              </tr>
              <tr>
                <td>Influência externa</td>
                <td>Chateaubriand (França), Rousseau</td>
                <td>Lord Byron (Inglaterra), Musset</td>
                <td>Victor Hugo (França), Hugo e Byron</td>
              </tr>
              <tr>
                <td>Principais nomes</td>
                <td>Gonçalves Dias, José de Alencar</td>
                <td>Álvares de Azevedo, Casimiro de Abreu</td>
                <td>Castro Alves, Sousândrade</td>
              </tr>
              <tr>
                <td>Obras emblemáticas</td>
                <td><em>I-Juca-Pirama</em>, <em>Iracema</em></td>
                <td><em>Lira dos Vinte Anos</em>, <em>As Primaveras</em></td>
                <td><em>Navio Negreiro</em>, <em>Os Escravos</em></td>
              </tr>
              <tr>
                <td>Postura diante da realidade</td>
                <td>Fuga para o passado mítico</td>
                <td>Fuga para dentro de si mesmo</td>
                <td>Enfrentamento, engajamento</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 210"
            width="700"
            height="210"
            aria-label="Mapa visual comparando as três gerações românticas com autores e temas"
          >
            <rect x="0" y="0" width="700" height="210" rx="14" fill="#f8fafc" />
            <text x="350" y="28" textAnchor="middle" fontSize="14" fill="#6366f1" fontWeight="bold">Romantismo Brasileiro — As Três Gerações</text>

            {/* 1a geração */}
            <rect x="20" y="45" width="200" height="130" rx="10" fill="#dbeafe" />
            <text x="120" y="68" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="bold">1ª Geração</text>
            <text x="120" y="86" textAnchor="middle" fontSize="10" fill="#1e40af">Indianismo / Nacionalismo</text>
            <text x="120" y="106" textAnchor="middle" fontSize="10" fill="#1e40af">Gonçalves Dias</text>
            <text x="120" y="120" textAnchor="middle" fontSize="10" fill="#1e40af">José de Alencar</text>
            <text x="120" y="140" textAnchor="middle" fontSize="9" fill="#3b82f6" fontStyle="italic">I-Juca-Pirama · Iracema</text>
            <text x="120" y="155" textAnchor="middle" fontSize="9" fill="#3b82f6" fontStyle="italic">Canção do Exílio</text>

            {/* 2a geração */}
            <rect x="250" y="45" width="200" height="130" rx="10" fill="#fce7f3" />
            <text x="350" y="68" textAnchor="middle" fontSize="12" fill="#9d174d" fontWeight="bold">2ª Geração</text>
            <text x="350" y="86" textAnchor="middle" fontSize="10" fill="#9d174d">Mal do Século / Ultra</text>
            <text x="350" y="106" textAnchor="middle" fontSize="10" fill="#9d174d">Álvares de Azevedo</text>
            <text x="350" y="120" textAnchor="middle" fontSize="10" fill="#9d174d">Casimiro de Abreu</text>
            <text x="350" y="140" textAnchor="middle" fontSize="9" fill="#be185d" fontStyle="italic">Lira dos Vinte Anos</text>
            <text x="350" y="155" textAnchor="middle" fontSize="9" fill="#be185d" fontStyle="italic">As Primaveras</text>

            {/* 3a geração */}
            <rect x="480" y="45" width="200" height="130" rx="10" fill="#d1fae5" />
            <text x="580" y="68" textAnchor="middle" fontSize="12" fill="#065f46" fontWeight="bold">3ª Geração</text>
            <text x="580" y="86" textAnchor="middle" fontSize="10" fill="#065f46">Condoreirismo / Social</text>
            <text x="580" y="106" textAnchor="middle" fontSize="10" fill="#065f46">Castro Alves</text>
            <text x="580" y="120" textAnchor="middle" fontSize="10" fill="#065f46">Sousândrade</text>
            <text x="580" y="140" textAnchor="middle" fontSize="9" fill="#059669" fontStyle="italic">Navio Negreiro</text>
            <text x="580" y="155" textAnchor="middle" fontSize="9" fill="#059669" fontStyle="italic">Os Escravos</text>

            <text x="350" y="196" textAnchor="middle" fontSize="11" fill="#64748b">1836 ──────────────────── 1870–1881</text>
          </svg>
          <figcaption>Comparação visual entre as três gerações do Romantismo brasileiro, com principais autores e obras.</figcaption>
        </figure>

        <p>
          A progressão das três gerações revela uma trajetória de maturação coletiva: a primeira geração construiu os mitos fundadores da nação com entusiasmo quase ingênuo; a segunda geração percebeu as contradições e ilusões desse projeto nacional e voltou-se para dentro, para a dor existencial; a terceira geração saiu do narcisismo da segunda e olhou para fora, para as injustiças que a sociedade imperial perpetuava. É como se o Romantismo brasileiro passasse, em cinquenta anos, por um ciclo completo de formação, crise e superação de si mesmo — terminando em política, de onde a literatura do século XIX saiu para o Realismo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>Geração</th>
                <th>Obras Principais</th>
                <th>Temas Centrais para o ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gonçalves Dias</td>
                <td>1ª — Indianista/Nacional</td>
                <td><em>Primeiros Cantos</em> (1846); <em>Canção do Exílio</em>; <em>I-Juca-Pirama</em></td>
                <td>Indianismo, saudade da pátria, natureza brasileira idealizada</td>
              </tr>
              <tr>
                <td>José de Alencar</td>
                <td>1ª — Indianista/Nacional (prosa)</td>
                <td><em>O Guarani</em> (1857); <em>Iracema</em> (1865); <em>Ubirajara</em> (1874)</td>
                <td>Índio como herói nacional, fusão cultural, identidade brasileira</td>
              </tr>
              <tr>
                <td>Álvares de Azevedo</td>
                <td>2ª — Mal do século</td>
                <td><em>Lira dos Vinte Anos</em> (1853); <em>Noite na Taverna</em></td>
                <td>Pessimismo, morte, amor impossível, byronismo</td>
              </tr>
              <tr>
                <td>Casimiro de Abreu</td>
                <td>2ª — Mal do século (forma amena)</td>
                <td><em>As Primaveras</em> (1859); <em>Minha Terra</em></td>
                <td>Saudade da infância, melancolia suave, natureza como consolo</td>
              </tr>
              <tr>
                <td>Castro Alves</td>
                <td>3ª — Condoreirismo/Social</td>
                <td><em>Espumas Flutuantes</em> (1870); <em>O Navio Negreiro</em>; <em>Os Escravos</em></td>
                <td>Abolicionismo, liberdade, discurso político grandioso, Victor Hugo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Romantismo e Realismo</span>
        <h2>9. A Transição para o Realismo — Por que o Romantismo Acabou?</h2>

        <div className="lesson-highlight">
          <h3>O Arcadismo versus o Romantismo — contraste para o ENEM</h3>
          <p>
            O Arcadismo (Neoclassicismo), movimento anterior ao Romantismo no Brasil (século XVIII), é o contraste mais frequentemente explorado pelo ENEM. Enquanto o Arcadismo valoriza a razão, o equilíbrio, a imitação dos clássicos greco-latinos, a impessoalidade, o bucolismo artificial e o <em>carpe diem</em> (aproveitar o dia), o Romantismo valoriza o sentimento, o excesso, a originalidade, o subjetivismo, o medievalismo e o <em>mal do século</em>. Os poetas árcades principais no Brasil são Cláudio Manuel da Costa, Tomás Antônio Gonzaga e Alvarenga Peixoto; os românticos principais são Gonçalves Dias, Álvares de Azevedo e Castro Alves. Quando o ENEM pede para comparar os dois movimentos, o candidato deve focar no contraste razão × emoção, impessoalidade × subjetivismo, imitação dos antigos × originalidade.
          </p>
        </div>

        <p>
          Castro Alves foi também um poeta amoroso de grande intensidade. <em>Espumas Flutuantes</em> (1870) — seu único livro publicado em vida, quando tinha apenas 22 anos — contém tanto poemas abolicionistas quanto poemas de amor apaixonado, sensual, que rompem com a idealização angelical da mulher típica do Romantismo anterior. A amada de Castro Alves não é a virgem etérea de Álvares de Azevedo: é uma mulher de carne, de cabelos, de calor — descrita com um erotismo incomum para a época. Essa dimensão sensual de sua poesia coexiste com o engajamento político: o condoreirismo não é apenas uma postura política, é também uma postura estética que abraça a vida em todas as suas dimensões, inclusive a amorosa.
        </p>

        <p>
          O declínio do Romantismo não foi apenas estético — foi também histórico e filosófico. Três eventos do século XIX abalaram as fundações do idealismo romântico: a publicação de <em>A Origem das Espécies</em> de Darwin (1859), que mostrou que o ser humano é um animal produto da evolução natural, sem nenhum estatuto especial no cosmos; a publicação do <em>Manifesto Comunista</em> de Marx e Engels (1848), que mostrou que as ideias, os sentimentos e a literatura são produtos das condições materiais de produção, não expressões livres do espírito; e o avanço da psicologia experimental, que começava a tratar os estados emocionais como fenômenos neurofisiológicos, não como voos da alma. Em conjunto, essas ideias tornaram o idealismo romântico intelectualmente suspeito para as gerações formadas na segunda metade do século.
        </p>

        <p>
          O Romantismo não "terminou" de golpe: entrou em declínio progressivo ao longo das décadas de 1860 e 1870, pressionado por transformações históricas e intelectuais profundas. A segunda metade do século XIX trouxe a consolidação da Revolução Industrial, o avanço do positivismo de Auguste Comte, o evolucionismo de Charles Darwin e a consolidação do pensamento científico como autoridade máxima do conhecimento. O Romantismo, com seu subjetivismo, sua idealização e sua fuga da realidade, tornou-se intelectualmente insustentável para uma geração formada por essas novas ideias.
        </p>
        <p>
          A crítica ao Romantismo, que Machado de Assis e os realistas fizeram em prosa, teve um paralelo na poesia: o Parnasianismo. Olavo Bilac, Alberto de Oliveira e Raimundo Correia, que floresceram nas décadas de 1880–1890, atacaram a frouxidão formal e o sentimentalismo do Romantismo, propondo em seu lugar a perfeição técnica do soneto e a impessoalidade do eu lírico. Assim, o Romantismo foi atacado simultaneamente de dois lados: pela prosa realista (que rejeitou a idealização e o escapismo) e pela poesia parnasiana (que rejeitou a liberdade formal e o subjetivismo). Esses três movimentos — Romantismo, Realismo/Naturalismo e Parnasianismo/Simbolismo — formam o núcleo da literatura brasileira do século XIX, e o ENEM frequentemente pede ao candidato que os compare e distinga.
        </p>

        <p>
          No Brasil, o marco simbólico da passagem ao Realismo é a publicação de <em>Memórias Póstumas de Brás Cubas</em>, de Machado de Assis, em 1881 — obra que irônica e brutalmente desconstrói todos os ideais românticos: o amor, a heroicidade, o otimismo, a idealização da mulher e da sociedade. A transição não foi pacífica: Alencar e Machado travaram uma famosa polêmica literária. O Romantismo deixou um legado permanente: o romance como gênero central da literatura brasileira, o interesse pela natureza e pelas regiões do país, e a consolidação do português brasileiro como língua literária autônoma.
        </p>
        <p>
          A polêmica entre Alencar e Machado merece atenção especial: Machado criticou alguns excessos sentimentais e idealizações do Romantismo, mas reconheceu a grandeza de Alencar como romancista. Alencar, por sua vez, escreveu em sua autobiografia inacabada <em>Como e por que sou romancista</em> (1893, póstumo) um dos mais belos testemunhos da vocação literária na história da literatura brasileira. A transição entre os dois escritores — entre o Romantismo de Alencar e o Realismo de Machado — é uma das passagens mais ricas e bem documentadas da história literária do Brasil, e o ENEM já explorou essa relação em questões comparativas sobre os dois autores.
        </p>

        <div className="math-block">
          <strong>Dica ENEM — Como distinguir as gerações:</strong>
          <p>Quando um fragmento apresentar exaltação da natureza brasileira e do indígena → 1ª geração. Melancolia, morte, amor impossível, pessimismo existencial → 2ª geração. Discurso grandioso, denúncia da escravidão, engajamento político → 3ª geração (condoreirismo). A ordem das gerações é cronológica: nacional → individual → social.</p>
        </div>

        <div className="lesson-highlight">
          <h3>O legado permanente do Romantismo</h3>
          <p>
            Apesar das críticas dos realistas, dos parnasianos e dos modernistas, o Romantismo deixou marcas indeléveis na literatura e na cultura brasileira. A <strong>valorização da natureza</strong> como elemento identitário e estético sobreviveu no regionalismo literário do século XX. O <strong>romance</strong> como gênero popular e central da literatura nacional foi uma criação romântica. A defesa da <strong>língua brasileira</strong> autônoma, iniciada por Alencar, floresceu no Modernismo e nas reformas ortográficas do século XX. O próprio <strong>indianismo</strong>, embora criticado por sua idealização, plantou a semente do interesse pela cultura indígena que só frutificaria plenamente nas discussões contemporâneas sobre identidade nacional e direitos indígenas. E a <strong>poesia abolicionista</strong> de Castro Alves, embora não tenha acelerado o fim da escravidão, criou um arquivo emocional e retórico da resistência que ainda é lido, citado e celebrado no Brasil do século XXI.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia ENEM</span>
        <h2>10. Como o ENEM Cobra o Romantismo — Tipos de Questão e Armadilhas</h2>

        <p>
          O Romantismo é um dos movimentos literários mais cobrados no ENEM, especialmente nas provas de Linguagens e suas Tecnologias. As questões raramente pedem definições decoradas: elas apresentam um fragmento de texto — um trecho de poema, um excerto de romance, um fragmento de carta ou ensaio — e pedem que o candidato identifique características do movimento, compare gerações, ou analise o efeito de uma escolha linguística específica. Conhecer as características gerais do Romantismo não é suficiente: é preciso saber como elas se manifestam concretamente em textos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏹</span>
            <h3>Identificar Geração</h3>
            <p>O ENEM pede: "O fragmento pertence à geração X do Romantismo porque...". A chave é identificar os temas dominantes: natureza e índio (1ª), morte e melancolia (2ª), denúncia social (3ª).</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Comparar Movimentos</h3>
            <p>Questões pedem para contrastar Romantismo com Arcadismo (razão × emoção) ou Realismo (idealização × crítica). Domine os pares de oposição entre movimentos.</p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Analisar Fragmento</h3>
            <p>Dado um trecho, identifique: há subjetivismo? Idealização? Natureza como espelho emocional? Engajamento político? Cada característica aponta para um aspecto específico do Romantismo.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Contradições do Indianismo</h3>
            <p>O ENEM frequentemente explora a tensão entre o índio idealizado da literatura e a violência real da colonização. Reconheça que o indianismo literário é uma construção ideológica, não etnográfica.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Armadilhas frequentes em questões de Romantismo:</strong>
          <p>1. Confundir gerações: Álvares de Azevedo é 2ª geração (não 1ª), Castro Alves é 3ª (não 2ª). 2. Atribuir ao Romantismo características do Realismo (crítica psicológica, objetividade) ou vice-versa. 3. Tratar o indianismo como valorização real dos povos indígenas, quando é uma idealização literária para fins nacionais. 4. Confundir o condoreirismo (3ª geração, poesia social) com o ultrarromantismo (2ª geração, melancolia). 5. Atribuir <em>I-Juca-Pirama</em> a Alencar (é de Gonçalves Dias) ou <em>Navio Negreiro</em> a Álvares de Azevedo (é de Castro Alves). 6. Pensar que o Romantismo brasileiro e o europeu são idênticos — o brasileiro tem a função adicional de construção da identidade nacional que o europeu não tem na mesma escala.</p>
        </div>
      </section>

      {/* ── SEÇÃO 11 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificação das Gerações Românticas"
          statement={
            <p>
              Assinale a alternativa que associa corretamente cada geração do Romantismo brasileiro a seu principal traço e autor:
            </p>
          }
          options={[
            { letter: "a", text: "1ª geração: condoreirismo e Castro Alves; 2ª geração: indianismo e Gonçalves Dias; 3ª geração: mal do século e Álvares de Azevedo." },
            { letter: "b", text: "1ª geração: indianismo/nacionalismo e Gonçalves Dias; 2ª geração: mal do século e Álvares de Azevedo; 3ª geração: condoreirismo e Castro Alves.", correct: true },
            { letter: "c", text: "1ª geração: mal do século e Álvares de Azevedo; 2ª geração: condoreirismo e Castro Alves; 3ª geração: indianismo e José de Alencar." },
            { letter: "d", text: "Todas as gerações compartilham as mesmas características; a divisão em gerações não tem fundamento histórico." },
          ]}
          resolution={
            <p>
              A ordem cronológica e temática das gerações do Romantismo brasileiro é: 1ª geração (c. 1836–1860) — indianismo/nacionalismo, representada por Gonçalves Dias e José de Alencar; 2ª geração (c. 1850–1870) — mal do século/ultrarromantismo, com Álvares de Azevedo e Casimiro de Abreu; 3ª geração (c. 1860–1880) — condoreirismo/poesia social, com Castro Alves. A alternativa B é a única que apresenta a correspondência correta. A confusão entre gerações é uma armadilha frequente no ENEM — memorize: nacional → individual → social.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Indianismo e Idealização — Gonçalves Dias"
          statement={
            <p>
              Leia o fragmento da <em>Canção do Exílio</em>, de Gonçalves Dias:<br /><br />
              <em>"Minha terra tem palmeiras, / Onde canta o Sabiá; / As aves que aqui gorjeiam / Não gorjeiam como lá."</em><br /><br />
              Que características românticas estão presentes nesse fragmento?
            </p>
          }
          options={[
            { letter: "a", text: "Objetividade científica e descrição naturalista da fauna brasileira, típicas do Naturalismo." },
            { letter: "b", text: "Ironia e pessimismo existencial, característicos da segunda geração romântica." },
            { letter: "c", text: "Nacionalismo e sentimentalismo: a terra natal é idealizada por meio da natureza (palmeiras, sabiá) e da saudade, marcas típicas da primeira geração romântica.", correct: true },
            { letter: "d", text: "Engajamento político e denúncia social, característicos do condoreirismo de Castro Alves." },
          ]}
          resolution={
            <p>
              O fragmento exemplifica duas marcas centrais da primeira geração romântica: o <strong>nacionalismo</strong> (a pátria exaltada por meio da natureza local — as palmeiras e o sabiá como ícones do Brasil tropical) e o <strong>sentimentalismo</strong> (a saudade da terra natal, a comparação que sempre favorece o Brasil). Escrita em Portugal, a <em>Canção do Exílio</em> nasce do deslocamento real de Gonçalves Dias, que estudava em Coimbra. Não há ironia (B), objetividade científica (A) nem denúncia política (D) no fragmento.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Condoreirismo e Abolicionismo — Castro Alves"
          statement={
            <p>
              O condoreirismo, representado por Castro Alves, distingue-se das gerações anteriores do Romantismo principalmente porque:
            </p>
          }
          options={[
            { letter: "a", text: "aprofunda o pessimismo e a melancolia da segunda geração, acrescentando a dimensão política ao sofrimento individual." },
            { letter: "b", text: "rejeita completamente o Romantismo e adota a objetividade do Realismo nascente, tornando-se uma escola de transição." },
            { letter: "c", text: "desloca o foco da literatura do eu individual para as causas coletivas — abolição da escravatura, liberdade e república —, usando uma linguagem grandiosa e inflamada.", correct: true },
            { letter: "d", text: "retoma o indianismo da primeira geração, mas substitui o herói indígena pelo herói negro escravizado." },
          ]}
          resolution={
            <p>
              O condoreirismo rompe com o narcisismo da segunda geração: em vez de mergulhar nas angústias individuais, Castro Alves dirige a poesia para fora, para o mundo social e político. A escravidão — denunciada no <em>Navio Negreiro</em> e em <em>Os Escravos</em> — é o tema central, tratado com uma linguagem grandiosa, de imagens cinematográficas e ritmo intenso, inspirada em Victor Hugo. A metáfora do condor (ave de voo altíssimo) expressa essa postura: o poeta se eleva acima do individual para ver e denunciar as injustiças coletivas. As alternativas A, B e D distorcem as características do condoreirismo.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Iracema e a Construção da Identidade Nacional"
          statement={
            <p>
              Em <em>Iracema</em> (1865), José de Alencar narra a história de uma jovem indígena que se apaixona pelo português Martim e tem com ele um filho — Moacir, o primeiro cearense. O nome Iracema é anagrama de "América". Com base nessa obra e no contexto do Romantismo brasileiro, assinale a afirmativa correta:
            </p>
          }
          options={[
            { letter: "a", text: "A obra representa uma denúncia da violência da colonização portuguesa sobre os povos indígenas, alinhada ao condoreirismo social de Castro Alves." },
            { letter: "b", text: "Iracema ilustra o projeto romântico de construção de uma identidade nacional mestiça, romantizando a fusão entre o indígena e o europeu como origem mítica e poética do povo brasileiro.", correct: true },
            { letter: "c", text: "Ao fazer de Iracema uma mulher que trai seu povo, Alencar critica o indianismo ingênuo da primeira geração e antecipa o realismo psicológico de Machado de Assis." },
            { letter: "d", text: "O nome Iracema como anagrama de América não tem significado literário; é uma coincidência fonética sem intenção simbólica do autor." },
          ]}
          resolution={
            <p>
              <em>Iracema</em> é uma das obras-chave do projeto nacional romântico brasileiro: ao narrar a origem mítica do povo cearense — e, por extensão, do brasileiro — como fruto da união entre a virgem indígena e o colonizador português, Alencar cria uma genealogia poética para a nação. O nome "Iracema" como anagrama de "América" não é acidental: é um gesto de autoria conscientemente simbólico. A idealização do indígena (que sacrifica tudo por amor ao europeu) e da mestiçagem (Moacir, o filho) é central ao projeto. Não há crítica realista (C) nem denúncia abolicionista (A) no romance.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. O Mal do Século e a Morte Romântica"
          statement={
            <p>
              Leia o fragmento de Álvares de Azevedo:<br /><br />
              <em>"Se eu morresse amanhã, viria ao menos / Fechar meus olhos minha triste irmã; / Minha mãe de saudades morreria / — Se eu morresse amanhã!"</em><br /><br />
              Qual característica central do ultrarromantismo o poema exemplifica, e o que esse tipo de poesia revela sobre a segunda geração romântica brasileira?
            </p>
          }
          options={[
            { letter: "a", text: "O engajamento político: ao imaginar a própria morte, Álvares de Azevedo denuncia as condições sociais que levam jovens à morte prematura no Brasil do século XIX." },
            { letter: "b", text: "O indianismo: a morte do eu lírico é um eco dos rituais de sacrifício dos guerreiros indígenas descritos por Gonçalves Dias em I-Juca-Pirama." },
            { letter: "c", text: "O mal do século: a atração mórbida pela própria morte, a complacência com o sofrimento e a idealização da dor são marcas do ultrarromantismo byroniano, que transformou a morte em tema central e quase desejável da segunda geração.", correct: true },
            { letter: "d", text: "O realismo psicológico: o poema usa a morte como metáfora para analisar objetivamente as relações familiares, antecipando a técnica de Machado de Assis." },
          ]}
          resolution={
            <p>
              O poema é um exemplo clássico do <strong>mal do século</strong> — a obsessão da segunda geração romântica com a morte, o sofrimento e a melancolia. Azevedo não teme a morte; ele a imagina com certa ternura, preocupando-se com o impacto que causaria nos que ama. Essa atitude é característica do ultrarromantismo: a morte é tratada como companheira, não como inimigo. A influência de Lord Byron é direta — o poeta inglês glamourizou a figura do gênio atormentado que morre jovem. Azevedo morreu aos 20 anos de tuberculose, o que transformou sua obra em profecia e aumentou o caráter mítico da geração. Não há indianismo (B), engajamento político (A) nem realismo (D) no fragmento.
            </p>
          }
        />
      </section>
    </article>
  );
}
