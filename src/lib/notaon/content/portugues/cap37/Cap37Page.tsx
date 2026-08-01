"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap37Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 37</span>
          <h1>Modernismo: Segunda Fase — Geração de 30</h1>
          <p>
            Se a primeira fase modernista foi a explosão, a segunda foi o aprofundamento. Entre 1930
            e 1945, a literatura brasileira maturou e se comprometeu de forma mais intensa com a
            realidade social. O romance regionalista nordestino — com Graciliano Ramos, José Lins do
            Rego, Rachel de Queiroz e Jorge Amado — expôs a seca, o latifúndio e a miséria com uma
            precisão que nenhuma reportagem poderia igualar. Enquanto isso, a poesia encontrava em
            Drummond, Cecília Meireles, Vinicius de Moraes e Murilo Mendes vozes para as grandes
            angústias do ser humano moderno.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. O Brasil dos Anos 1930: Era Vargas e a Maturidade Literária</h2>

        <p>
          A Segunda Fase do Modernismo se desenvolve entre <strong>1930</strong> (Revolução que levou
          Getúlio Vargas ao poder) e <strong>1945</strong> (queda de Vargas e fim da Segunda Guerra
          Mundial). É um período de autoritarismo político crescente — o Estado Novo (1937–1945) foi
          uma ditadura com censura e prisão de opositores — mas paradoxalmente também de florescimento
          literário extraordinário.
        </p>
        <p>
          O contexto econômico é marcado pela <strong>Grande Depressão</strong> (1929), que desestruturou
          a economia cafeeira e acelerou a industrialização sob o comando do Estado. O Nordeste
          continuava sofrendo com as secas cíclicas e a concentração fundiária; a migração para o
          Sul e para as cidades recém-industrializadas criava um novo proletariado urbano. Esses
          movimentos sociais tornaram-se matéria literária: a Geração de 30 olhou para o Brasil
          com seriedade, sem a ironia destrutiva dos anos 1920, e produziu obras de uma densidade
          social que ainda definem o cânone literário brasileiro.
        </p>

        <div className="lesson-highlight">
          <h3>O que caracteriza a Geração de 30?</h3>
          <p>
            A expressão <strong>Geração de 30</strong> designa os escritores que começaram a publicar
            nessa década e representam a maturidade do Modernismo. Se a primeira fase foi marcada
            pelo espírito de ruptura e provocação, a segunda fase se caracteriza pelo
            <strong> aprofundamento social e psicológico</strong>: menos experimentalismo formal
            extravagante, mais compromisso com a denúncia das estruturas de exploração. O romance
            regionalista nordestino é o gênero mais representativo, mas a poesia também atinge
            grandes alturas.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Revolução de 1930</h3>
            <p>Getúlio Vargas chega ao poder, pondo fim à República Velha. O cenário político autoritário convive com uma florescimento cultural paradoxal.</p>
          </div>
          <div className="lesson-card">
            <span>🌵</span>
            <h3>Seca e miséria nordestina</h3>
            <p>A seca de 1932 e as seguintes agravaram a crise social no Nordeste, tornando o tema literário urgente e politicamente relevante.</p>
          </div>
          <div className="lesson-card">
            <span>🏭</span>
            <h3>Industrialização e migração</h3>
            <p>O crescimento de São Paulo e Rio de Janeiro atrai migrantes nordestinos; a questão do trabalhador urbano emerge como tema literário.</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Segunda Guerra Mundial</h3>
            <p>O conflito global (1939–1945) traz angústia existencial e questionamentos sobre o futuro da humanidade que alimentam a poesia do período.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Características</span>
        <h2>2. Características da Segunda Fase Modernista</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Primeira Fase (1922–1930)</th>
                <th>Segunda Fase (1930–1945)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tom dominante</td>
                <td>Ruptura, escândalo, humor, ironia</td>
                <td>Seriedade, comprometimento social, angústia</td>
              </tr>
              <tr>
                <td>Experimentalismo</td>
                <td>Radical e ostensivo</td>
                <td>Presente mas a serviço do conteúdo</td>
              </tr>
              <tr>
                <td>Gênero mais representativo</td>
                <td>Poesia de vanguarda</td>
                <td>Romance regionalista nordestino</td>
              </tr>
              <tr>
                <td>Tema central (prosa)</td>
                <td>Identidade nacional, hibridismo</td>
                <td>Seca, latifúndio, miséria, exploração</td>
              </tr>
              <tr>
                <td>Tema central (poesia)</td>
                <td>Cotidiano, linguagem coloquial</td>
                <td>Existencialismo, espiritualidade, engajamento</td>
              </tr>
              <tr>
                <td>Linguagem</td>
                <td>Coloquial, fragmentada, paródica</td>
                <td>Mais elaborada, densa, psicologicamente rica</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>O "romance de 30"</h3>
          <p>
            O <strong>romance de 30</strong> é a expressão mais alta da Segunda Fase. Caracteriza-se
            pelo regionalismo crítico (especialmente nordestino), pela denúncia das estruturas de
            exploração (latifúndio, coronelismo, seca), pela presença de personagens populares como
            protagonistas (e não como tipos pitorescos) e por uma linguagem que mescla a precisão
            literária com elementos da fala regional. Não é um regionalismo de cartão-postal — é
            um regionalismo de documentação e denúncia.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Graciliano Ramos</span>
        <h2>3. Graciliano Ramos: Linguagem Seca, Mundo Árido</h2>

        <p>
          <strong>Graciliano Ramos</strong> (1892–1953) é considerado o maior romancista da Segunda
          Fase Modernista e um dos maiores escritores da literatura brasileira. Nascido em Quebrangulo,
          Alagoas, conheceu a seca, a pobreza e a vida interiorana de perto. Preso político pelo
          Estado Novo em 1936, Graciliano transformou essa experiência no livro de memórias
          <em> Memórias do Cárcere</em> (póstumo, 1953). Antes disso, já havia publicado quatro
          romances fundamentais.
        </p>
        <p>
          Sua obra-prima, <strong>Vidas Secas</strong> (1938), é estruturalmente revolucionária:
          narra a odisseia de uma família de retirantes nordestinos — Fabiano, Sinhá Vitória e dois
          filhos sem nome, além da cachorra Baleia — numa narrativa episódica em que cada capítulo
          pode ser lido de forma independente. A linguagem é deliberadamente árida, econômica,
          seca — como a paisagem e como a vida dos personagens. Graciliano vai ao extremo: um
          capítulo inteiro é narrado do ponto de vista da cachorra Baleia. As personagens têm dificuldade
          de articular pensamentos verbalmente — e o narrador replica isso na própria estrutura das frases.
        </p>

        <div className="math-block">
          <strong>A cachorra Baleia — Cena antológica:</strong>
          <p>
            No capítulo dedicado à cachorra Baleia — que está morrendo de hidrofobia —, Graciliano
            narra os pensamentos e sensações do animal com a mesma seriedade com que descreveria um
            ser humano. É um dos momentos mais ousados e emocionantes da literatura brasileira:
            ao dar dignidade e perspectiva interiorzinha a um animal, o autor questiona onde está
            a fronteira entre a animalidade e a humanidade numa sociedade que trata humanos como animais.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📚</span>
            <h3>Vidas Secas (1938)</h3>
            <p>Retirantes nordestinos em fuga da seca; estrutura episódica; linguagem árida que espelha a condição dos personagens.</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>São Bernardo (1934)</h3>
            <p>Narrado em primeira pessoa por Paulo Honório, fazendeiro que destruiu tudo que amou em nome da posse e do poder. Análise devastadora da ambição.</p>
          </div>
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Angústia (1936)</h3>
            <p>Narrador em crise psicológica profunda; escrito enquanto Graciliano era preso político; fluxo de consciência e angústia existencial.</p>
          </div>
          <div className="lesson-card">
            <span>👦</span>
            <h3>Caetés (1933)</h3>
            <p>Primeiro romance publicado; narrador que escreve um romance histórico sobre os índios caetés enquanto vive sua própria vida banal e adúltera.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Rachel e Lins do Rego</span>
        <h2>4. Rachel de Queiroz e José Lins do Rego</h2>

        <p>
          <strong>Rachel de Queiroz</strong> (1910–2003) foi pioneira: publicou <em>O Quinze</em>
          em 1930, com apenas 19 anos, tornando-se a primeira mulher a ser aceita na Academia
          Brasileira de Letras. O romance narra a seca de 1915 no Ceará com dois pontos de vista:
          o das famílias de retirantes (especialmente Chico Bento e sua família em fuga) e o de
          Conceição, jovem intelectual de família abastada que questiona seu papel social. O
          entrelaçamento dessas perspectivas torna o romance pioneiro na representação da mulher
          como sujeito pensante e não apenas como personagem passivo.
        </p>
        <p>
          <strong>José Lins do Rego</strong> (1901–1957) é o romancista do ciclo da cana-de-açúcar:
          sua série de romances — <em>Menino de Engenho</em> (1932), <em>Doidinho</em> (1933),
          <em>Bangüê</em> (1934), <em>O Moleque Ricardo</em> (1935) e outros — reconstitui o mundo
          patriarcal do Nordeste açucareiro em declínio, narrado frequentemente pela perspectiva
          do menino Carlos de Melo que cresce num engenho da Paraíba. A nostalgia, a afetividade
          e a perda são tonalidades dominantes — em contraste com o pessimismo seco de Graciliano.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>Obra principal</th>
                <th>Tema central</th>
                <th>Tonalidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Rachel de Queiroz</strong></td>
                <td><em>O Quinze</em> (1930)</td>
                <td>Seca cearense, mulher intelectual</td>
                <td>Engajamento social + perspectiva feminina</td>
              </tr>
              <tr>
                <td><strong>José Lins do Rego</strong></td>
                <td><em>Menino de Engenho</em> (1932)</td>
                <td>Mundo patriarcal açucareiro</td>
                <td>Nostálgica, afetiva, memorialista</td>
              </tr>
              <tr>
                <td><strong>Graciliano Ramos</strong></td>
                <td><em>Vidas Secas</em> (1938)</td>
                <td>Retirantes, seca, exploração</td>
                <td>Árida, econômica, psicológica</td>
              </tr>
              <tr>
                <td><strong>Jorge Amado</strong></td>
                <td><em>Capitães da Areia</em> (1937)</td>
                <td>Meninos de rua, Salvador</td>
                <td>Solidária, popular, engajada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Jorge Amado</span>
        <h2>5. Jorge Amado: O Romancista do Povo Baiano</h2>

        <p>
          <strong>Jorge Amado</strong> (1912–2001) é o escritor brasileiro mais lido no mundo —
          suas obras foram traduzidas para mais de 50 idiomas. Sua produção literária divide-se
          em duas fases claramente distintas: a fase engajada (anos 1930–1950), fortemente
          influenciada pelo Partido Comunista Brasileiro, e a fase mais popular e festiva
          (anos 1960 em diante), marcada pela exuberância da cultura baiana.
        </p>
        <p>
          Na fase que pertence à Segunda Fase Modernista, Jorge Amado produziu romances de
          denúncia social: <em>O País do Carnaval</em> (1931), <em>Cacau</em> (1933),
          <em>Suor</em> (1934), <em>Jubiabá</em> (1935), <em>Mar Morto</em> (1936) e
          <strong> Capitães da Areia</strong> (1937), talvez seu romance mais emblemático desse
          período. <em>Capitães da Areia</em> narra a vida de um grupo de meninos de rua em
          Salvador — abandonados, ladrões, sobreviventes — com solidariedade e beleza, sem
          romantizar a miséria, mas sem perdoar a sociedade que a produz.
        </p>

        <div className="lesson-highlight">
          <h3>As duas fases de Jorge Amado</h3>
          <ul>
            <li><strong>Fase engajada (1930–1954):</strong> romances de denúncia; foco nos trabalhadores, nos pobres, nos excluídos; perspectiva marxista explícita. Ex.: <em>Capitães da Areia</em>, <em>Terras do Sem Fim</em>.</li>
            <li><strong>Fase festiva (1958 em diante):</strong> protagonismo feminino forte, humor, erotismo, cultura popular baiana, sincretismo religioso. Ex.: <em>Gabriela, Cravo e Canela</em>, <em>Dona Flor e Seus Dois Maridos</em>, <em>Tieta do Agreste</em>.</li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Carlos Drummond de Andrade</span>
        <h2>6. Drummond: O Maior Poeta Brasileiro do Século XX</h2>

        <p>
          <strong>Carlos Drummond de Andrade</strong> (1902–1987) nasceu em Itabira, Minas Gerais,
          e é considerado por muitos críticos o maior poeta brasileiro do século XX. Sua poesia
          transita por temas existenciais, sociais, amorosos e metalinguísticos — sempre com uma
          linguagem que mistura a simplicidade aparente com a densidade filosófica.
        </p>
        <p>
          Seu poema mais famoso, <strong>No Meio do Caminho</strong> (1928), causou escândalo
          quando foi publicado: a repetição da frase "no meio do caminho tinha uma pedra" foi
          ridicularizada por críticos conservadores como exemplo de primitivismo modernista.
          Décadas depois, o mesmo poema seria considerado um dos mais estudados e antologiados
          da literatura brasileira — uma das mais eficazes representações de como um obstáculo
          (físico e existencial) pode se tornar o único centro da percepção humana.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🪨</span>
            <h3>No Meio do Caminho (1928)</h3>
            <p>A pedra repetida como símbolo do obstáculo existencial que não sai da memória; uso da anáfora como recurso estético radical.</p>
          </div>
          <div className="lesson-card">
            <span>❤️</span>
            <h3>No Meio do Caminho (poesia amorosa)</h3>
            <p>Poesia de amor madura, não ingênua — o amor como conflito, desencontro, profundidade e perda, nunca como idealização romântica.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Sentimento do Mundo (1940)</h3>
            <p>Fase de maior engajamento político e social, marcada pelo contexto da Segunda Guerra; poemas de denúncia e solidariedade humana.</p>
          </div>
          <div className="lesson-card">
            <span>🏔️</span>
            <h3>Itabira e a memória</h3>
            <p>A cidade natal mineira aparece em vários poemas como origem e peso — <em style={{fontStyle: "italic"}}>"Itabira é apenas uma fotografia na parede. Mas como dói!"</em></p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Poetas da Segunda Fase</span>
        <h2>7. Cecília Meireles, Vinicius e Murilo Mendes</h2>

        <p>
          A Segunda Fase Modernista não se reduz ao romance nordestino. Na poesia, ao lado de
          Drummond, surgem vozes igualmente importantes que expandem os horizontes da literatura.
        </p>
        <p>
          <strong>Cecília Meireles</strong> (1901–1964) é a maior poetisa brasileira do século XX.
          Sua poesia é marcada pelo lirismo, pela musicalidade, pelo tema da efemeridade e pela
          presença do mar e da infância como espaços simbólicos. Sua obra mais importante é
          <em> Romanceiro da Inconfidência</em> (1953), longa sequência de romances históricos
          sobre a Inconfidência Mineira — uma das maiores realizações da poesia brasileira em
          termos de fôlego e beleza. Cecília também foi pioneira na defesa da educação,
          jornalista e folclorista.
        </p>
        <p>
          <strong>Vinicius de Moraes</strong> (1913–1980) iniciou na poesia espiritual e religiosa,
          mas é mais lembrado pela poesia amorosa e pelas letras de música popular — em parceria com
          Tom Jobim criaria <em>A Garota de Ipanema</em> e <em>Garota de Ipanema</em>, clássicos
          da Bossa Nova. Seu <em>Soneto de Fidelidade</em> — <em>"Que seja eterno enquanto dure"</em>
          — é uma das mais belas definições modernistas de amor. <strong>Murilo Mendes</strong>
          (1901–1975) é o poeta surrealista e espiritualista do grupo, fortemente influenciado pelo
          catolicismo e pela tradição mística — menos cobrado no ENEM, mas importante para quem
          busca compreender a amplitude da poesia modernista.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Poeta</th>
                <th>Característica central</th>
                <th>Obra emblemática</th>
                <th>O que o ENEM costuma cobrar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Drummond</strong></td>
                <td>Existencial, social, metalinguístico</td>
                <td><em>No Meio do Caminho</em></td>
                <td>Interpretação de poemas; anáfora; ironia</td>
              </tr>
              <tr>
                <td><strong>Cecília Meireles</strong></td>
                <td>Lírico, musical, efemeridade</td>
                <td><em>Romanceiro da Inconfidência</em></td>
                <td>Simbolismo, mar, tempo, infância</td>
              </tr>
              <tr>
                <td><strong>Vinicius de Moraes</strong></td>
                <td>Amor, musicalidade, oralidade</td>
                <td><em>Soneto de Fidelidade</em></td>
                <td>Poesia + música popular; amor moderno</td>
              </tr>
              <tr>
                <td><strong>Murilo Mendes</strong></td>
                <td>Surrealismo, espiritualidade</td>
                <td><em>Poemas</em> (1930)</td>
                <td>Menos frequente; contexto do surrealismo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese Visual</span>
        <h2>8. Mapa da Segunda Fase Modernista</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 260"
            width="700"
            height="260"
            aria-label="Mapa esquemático da Segunda Fase do Modernismo brasileiro, dividindo romance regionalista e poesia"
          >
            <rect x="0" y="0" width="700" height="260" rx="12" fill="#f0fdf4" />

            <rect x="240" y="10" width="220" height="48" rx="10" fill="#059669" />
            <text x="350" y="31" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">MODERNISMO — 2ª FASE</text>
            <text x="350" y="48" textAnchor="middle" fontSize="11" fill="#d1fae5">Geração de 30 (1930–1945)</text>

            <line x1="175" y1="58" x2="350" y2="58" stroke="#059669" strokeWidth="2" />
            <line x1="350" y1="58" x2="530" y2="58" stroke="#059669" strokeWidth="2" />
            <line x1="175" y1="58" x2="175" y2="100" stroke="#059669" strokeWidth="2" />
            <line x1="530" y1="58" x2="530" y2="100" stroke="#059669" strokeWidth="2" />

            <rect x="30" y="100" width="290" height="55" rx="8" fill="#dbeafe" />
            <text x="175" y="122" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="bold">Romance Regionalista</text>
            <text x="175" y="140" textAnchor="middle" fontSize="10" fill="#1e40af">Graciliano · Rachel · Lins do Rego · Jorge Amado</text>
            <text x="175" y="152" textAnchor="middle" fontSize="10" fill="#1e40af">Sertão · seca · latifúndio · povo</text>

            <rect x="380" y="100" width="290" height="55" rx="8" fill="#fce7f3" />
            <text x="525" y="122" textAnchor="middle" fontSize="12" fill="#9d174d" fontWeight="bold">Poesia Modernista Madura</text>
            <text x="525" y="140" textAnchor="middle" fontSize="10" fill="#9d174d">Drummond · Cecília · Vinicius · Murilo</text>
            <text x="525" y="152" textAnchor="middle" fontSize="10" fill="#9d174d">Existencial · lírico · engajado · espiritual</text>

            <rect x="30" y="170" width="130" height="50" rx="6" fill="#93c5fd" />
            <text x="95" y="192" textAnchor="middle" fontSize="10" fill="#1e3a8a" fontWeight="bold">Vidas Secas</text>
            <text x="95" y="207" textAnchor="middle" fontSize="9" fill="#1e3a8a">Graciliano (1938)</text>

            <rect x="170" y="170" width="130" height="50" rx="6" fill="#93c5fd" />
            <text x="235" y="192" textAnchor="middle" fontSize="10" fill="#1e3a8a" fontWeight="bold">O Quinze</text>
            <text x="235" y="207" textAnchor="middle" fontSize="9" fill="#1e3a8a">Rachel (1930)</text>

            <rect x="380" y="170" width="130" height="50" rx="6" fill="#f9a8d4" />
            <text x="445" y="192" textAnchor="middle" fontSize="10" fill="#831843" fontWeight="bold">No Meio do Caminho</text>
            <text x="445" y="207" textAnchor="middle" fontSize="9" fill="#831843">Drummond</text>

            <rect x="520" y="170" width="150" height="50" rx="6" fill="#f9a8d4" />
            <text x="595" y="192" textAnchor="middle" fontSize="10" fill="#831843" fontWeight="bold">Romanceiro</text>
            <text x="595" y="207" textAnchor="middle" fontSize="9" fill="#831843">Inconfidência (Cecília)</text>

            <text x="350" y="248" textAnchor="middle" fontSize="11" fill="#059669" fontWeight="bold">Contexto: Era Vargas · Seca · Industrialização · 2ª Guerra Mundial</text>
          </svg>
          <figcaption>Mapa da Segunda Fase Modernista: romance regionalista e poesia madura.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia ENEM</span>
        <h2>9. Como o ENEM Cobra a Segunda Fase Modernista</h2>

        <p>
          A Segunda Fase é uma das mais cobradas no ENEM, especialmente em questões de interpretação
          de texto. O exame privilegia fragmentos de <em>Vidas Secas</em> (Graciliano Ramos) e de
          poemas de Drummond, mas também pode apresentar trechos de Rachel de Queiroz, Jorge Amado
          ou Cecília Meireles.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📖</span>
            <h3>Vidas Secas no ENEM</h3>
            <p>Questões sobre a linguagem árida, a perspectiva da cachorra Baleia, a estrutura episódica e a denúncia social da seca e do coronelismo.</p>
          </div>
          <div className="lesson-card">
            <span>🪨</span>
            <h3>Drummond no ENEM</h3>
            <p>Questões sobre anáfora, ironia, cotidiano como tema poético, existencialismo e a relação entre forma e conteúdo em seus poemas.</p>
          </div>
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Cecília no ENEM</h3>
            <p>Questões sobre musicalidade, efemeridade, simbolismo do mar e da infância, e a poesia feminina como voz importante do Modernismo.</p>
          </div>
          <div className="lesson-card">
            <span>🏜️</span>
            <h3>Romance regionalista</h3>
            <p>Questões sobre o Nordeste como tema literário, a relação entre denúncia social e forma narrativa, e as diferenças entre os romancistas da geração.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Dica crítica para o ENEM:</strong>
          <p>
            Na Segunda Fase, a <em>linguagem</em> é sempre expressão do <em>conteúdo</em>. Em
            Graciliano, a linguagem seca espelha a seca do sertão e a vida dos personagens. Em
            Drummond, a aparente simplicidade esconde densidade filosófica. No ENEM, questões
            sobre a linguagem desses autores quase sempre pedem para o candidato identificar como
            a forma do texto expressa seu significado — nunca apenas o que o texto diz, mas
            <em> como</em> ele diz.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 9b ── */}
      <section className="lesson-section">
        <span className="section-kicker">Outros Romancistas</span>
        <h2>9b. Outros Romancistas Importantes da Geração de 30</h2>

        <p>
          Além dos grandes nomes já estudados, a Segunda Fase Modernista conta com outros escritores
          que enriqueceram o panorama literário do período e podem aparecer no ENEM ou em vestibulares
          específicos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Érico Veríssimo (1905–1975)</h3>
            <p>Gaúcho, autor da trilogia <em>O Tempo e o Vento</em> (1949–1962), saga histórica da família Cambará no Rio Grande do Sul ao longo de dois séculos; um dos romances mais ambiciosos da literatura brasileira.</p>
          </div>
          <div className="lesson-card">
            <span>⛵</span>
            <h3>Jorge de Lima (1893–1953)</h3>
            <p>Poeta alagoano que transitou do Parnasianismo ao Modernismo; sua poesia afro-brasileira (<em>Essa Negra Fulô</em>) é um dos primeiros textos a dar dignidade literária à cultura negra no Brasil.</p>
          </div>
          <div className="lesson-card">
            <span>🏔️</span>
            <h3>Cornélio Pena (1896–1958)</h3>
            <p>Romancista mineiro de ficção psicológica e atmosfera opressiva, frequentemente comparado à tradição gótica; autor de <em>Fronteira</em> (1935).</p>
          </div>
          <div className="lesson-card">
            <span>💃</span>
            <h3>Patrícia Galvão — Pagu (1910–1962)</h3>
            <p>Militante anarquista e escritora modernista; seu romance <em>Parque Industrial</em> (1933), publicado sob pseudônimo, foi o primeiro romance proletário brasileiro.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Drummond — Síntese de sua importância</h3>
          <ul>
            <li><em>Sentimento do Mundo</em> (1940) — fase mais política, marcada pela angústia da Segunda Guerra.</li>
            <li><em>A Rosa do Povo</em> (1945) — pico do engajamento social; poesia que une o pessoal e o coletivo.</li>
            <li><em>Claro Enigma</em> (1951) — fase mais filosófica e introspectiva, já na terceira fase modernista.</li>
            <li>Drummond é o poeta que melhor representa a <em>transição</em> entre a Segunda e a Terceira Fase: começa comprometido com o social e aprofunda progressivamente a dimensão existencial.</li>
          </ul>
        </div>

        <p>
          A Geração de 30 não foi apenas nordestina: a prosa introspectiva de Cornélio Pena, a
          poesia afro-brasileira de Jorge de Lima e o romance histórico gaúcho de Érico Veríssimo
          mostram que a maturidade do Modernismo atingiu todo o país. O que unificava era o compromisso
          com a realidade — cada autor à sua maneira, com sua região e sua perspectiva.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Poeta</th>
                <th>Obra de referência</th>
                <th>Traço mais importante para o ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carlos Drummond de Andrade</td>
                <td><em>A Rosa do Povo</em> (1945)</td>
                <td>Engajamento social + reflexão existencial; anáfora; ironia</td>
              </tr>
              <tr>
                <td>Cecília Meireles</td>
                <td><em>Romanceiro da Inconfidência</em> (1953)</td>
                <td>Musicalidade; efemeridade; identidade histórica brasileira</td>
              </tr>
              <tr>
                <td>Vinicius de Moraes</td>
                <td><em>Soneto de Fidelidade</em></td>
                <td>Amor moderno; paradoxo ("eterno enquanto dure"); poesia + MPB</td>
              </tr>
              <tr>
                <td>Jorge de Lima</td>
                <td><em>Essa Negra Fulô</em></td>
                <td>Afro-brasileiro; desconstrução do olhar colonizador sobre a mulher negra</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Vinicius de Moraes — O Soneto de Fidelidade (análise):</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "De tudo ao meu amor serei atento<br/>
            Antes, e com tal zelo, e sempre, e tanto<br/>
            Que mesmo em face do maior encanto<br/>
            Dele se encante mais meu pensamento."
          </p>
          <p>
            O paradoxo central do soneto está no verso mais famoso: <em style={{fontStyle: "italic"}}>"Que seja eterno enquanto dure"</em>.
            Como algo pode ser eterno e ter duração limitada ao mesmo tempo? Vinicius resolve o
            paradoxo com uma visão moderna do amor: não a eternidade no tempo, mas a intensidade
            total no presente. O amor que realmente vale não precisa durar para sempre — precisa
            ser absoluto enquanto existe. Esse é um exemplo do lirismo moderno que supera a
            idealização romântica sem abrir mão da profundidade.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 10b ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese Visual</span>
        <h2>10b. Vidas Secas — Estrutura e Personagens</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 220"
            width="700"
            height="220"
            aria-label="Diagrama dos personagens de Vidas Secas e a estrutura circular do romance"
          >
            <rect x="0" y="0" width="700" height="220" rx="12" fill="#fdf4ff" />
            <rect x="270" y="15" width="160" height="40" rx="8" fill="#059669" />
            <text x="350" y="33" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">VIDAS SECAS</text>
            <text x="350" y="48" textAnchor="middle" fontSize="10" fill="#d1fae5">Graciliano Ramos (1938)</text>

            <circle cx="350" cy="120" r="35" fill="#10b981" />
            <text x="350" y="118" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Fabiano</text>
            <text x="350" y="133" textAnchor="middle" fontSize="10" fill="#d1fae5">vaqueiro</text>

            <rect x="60" y="90" width="110" height="45" rx="7" fill="#dbeafe" />
            <text x="115" y="110" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">Sinhá Vitória</text>
            <text x="115" y="126" textAnchor="middle" fontSize="10" fill="#1e40af">mulher / sonha</text>
            <line x1="170" y1="112" x2="315" y2="120" stroke="#059669" strokeWidth="1.5" />

            <rect x="530" y="90" width="110" height="45" rx="7" fill="#dbeafe" />
            <text x="585" y="110" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">Baleia</text>
            <text x="585" y="126" textAnchor="middle" fontSize="10" fill="#1e40af">cachorra / ponto de vista</text>
            <line x1="530" y1="112" x2="385" y2="120" stroke="#059669" strokeWidth="1.5" />

            <rect x="175" y="165" width="110" height="40" rx="7" fill="#fef3c7" />
            <text x="230" y="183" textAnchor="middle" fontSize="11" fill="#92400e" fontWeight="bold">Menino Mais</text>
            <text x="230" y="196" textAnchor="middle" fontSize="10" fill="#92400e">Novo / Velho</text>
            <line x1="230" y1="165" x2="330" y2="155" stroke="#059669" strokeWidth="1.5" />

            <rect x="415" y="165" width="110" height="40" rx="7" fill="#fef3c7" />
            <text x="470" y="183" textAnchor="middle" fontSize="11" fill="#92400e" fontWeight="bold">Personagens</text>
            <text x="470" y="196" textAnchor="middle" fontSize="10" fill="#92400e">sem nome</text>
            <line x1="470" y1="165" x2="370" y2="155" stroke="#059669" strokeWidth="1.5" />

            <text x="350" y="210" textAnchor="middle" fontSize="11" fill="#059669">Narrativa circular: começa e termina com a família em fuga — sem solução</text>
          </svg>
          <figcaption>Estrutura circular de Vidas Secas: a família de retirantes não tem destino fixo — a seca os persegue indefinidamente.</figcaption>
        </figure>

        <p>
          A estrutura circular de <em>Vidas Secas</em> é uma das escolhas mais importantes de
          Graciliano Ramos. O romance começa com a família em retirada e termina com a família
          novamente em retirada — a situação não muda, não há resolução. Essa circularidade
          não é pessimismo gratuito: é a expressão literária de uma <strong>armadilha
          estrutural</strong>. O problema dos retirantes nordestinos não era individual (falta
          de coragem, preguiça, destino) mas sistêmico: a concentração de terras, a seca
          periódica e a ausência do Estado produziam um ciclo sem saída. A forma circular
          do romance expressa exatamente essa estrutura de opressão sistêmica.
        </p>
      </section>

      {/* ── SEÇÃO 11 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificação da Segunda Fase Modernista"
          statement={
            <p>
              A Segunda Fase do Modernismo brasileiro, também chamada de Geração de 30, caracteriza-se
              principalmente por:
            </p>
          }
          options={[
            { letter: "a", text: "Ruptura escandalosa com as tradições, humor iconoclasta e experimentalismo formal radical, como na Semana de Arte Moderna de 1922." },
            { letter: "b", text: "Aprofundamento do compromisso social e psicológico, com destaque para o romance regionalista nordestino e a poesia de engajamento existencial.", correct: true },
            { letter: "c", text: "Retorno às formas clássicas do Parnasianismo e recuperação dos temas greco-romanos como forma de superar o caos da primeira fase." },
            { letter: "d", text: "Ênfase no individualismo e na introspecção psicológica sem relação com a realidade social brasileira, como na ficção científica e no fantástico." },
          ]}
          resolution={
            <p>
              A Segunda Fase (Geração de 30) representa a maturidade do Modernismo: o espírito
              destruidor e provocativo da primeira fase dá lugar a um compromisso mais sério com a
              realidade social brasileira. O romance regionalista nordestino (Graciliano, Rachel,
              Jorge Amado) e a poesia existencial (Drummond, Cecília, Vinicius) são as duas grandes
              expressões desse aprofundamento. A alternativa A descreve a primeira fase; C descreve
              o Parnasianismo; D é característica parcial de alguns autores, mas não da fase como
              um todo.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. A Linguagem de Vidas Secas"
          statement={
            <p>
              Em <em>Vidas Secas</em> (1938), Graciliano Ramos constrói personagens que têm dificuldade
              de articular seus pensamentos em palavras. A linguagem do narrador também é econômica
              e árida. Essa escolha estilística tem o seguinte efeito:
            </p>
          }
          options={[
            { letter: "a", text: "Demonstra o desinteresse do autor pelos personagens, que são retratados como seres primitivos sem vida interior." },
            { letter: "b", text: "Cria uma correspondência formal entre a linguagem do texto e a condição dos personagens: assim como o sertão é árido, a linguagem é seca; assim como eles têm dificuldade de pensar, a prosa é econômica.", correct: true },
            { letter: "c", text: "Resulta de uma limitação técnica de Graciliano Ramos, que não dominava as técnicas do monólogo interior como James Joyce ou Clarice Lispector." },
            { letter: "d", text: "Serve para aproximar o texto do discurso científico e sociológico, tornando-o um documento etnográfico mais que uma obra literária." },
          ]}
          resolution={
            <p>
              A economia linguística de Graciliano em <em>Vidas Secas</em> é uma escolha estética
              deliberada e altamente sofisticada. A linguagem árida não é limitação — é expressão.
              O texto espelha a condição dos personagens: Fabiano, Sinhá Vitória e os meninos sem
              nome têm dificuldade de pensar em palavras porque nunca foram ensinados a isso, porque
              a seca e a miséria não deixam espaço para o pensamento abstrato. Ao replicar essa
              dificuldade na própria prosa, Graciliano faz o leitor sentir — não apenas entender —
              a condição dos retirantes. É um dos usos mais eficazes da forma como expressão do
              conteúdo na literatura brasileira.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Drummond e a Pedra como Símbolo"
          statement={
            <p>
              Em <em>No Meio do Caminho</em> (1928), Carlos Drummond de Andrade repete três vezes
              a frase "no meio do caminho tinha uma pedra". Analise a função da anáfora (repetição
              no início de versos) nesse poema:
            </p>
          }
          options={[
            { letter: "a", text: "A repetição é um recurso retórico que imita a oralidade da língua popular brasileira, aproximando a poesia do discurso cotidiano." },
            { letter: "b", text: "A repetição demonstra a incapacidade de Drummond de desenvolver o tema; o poema ficou incompleto e por isso repete a mesma ideia." },
            { letter: "c", text: "A anáfora mimetiza a experiência existencial de um obstáculo que não se resolve — a pedra volta porque não foi superada, e a memória compulsiva da pedra é tão sufocante quanto o obstáculo em si.", correct: true },
            { letter: "d", text: "A repetição é um recurso musical herdado do Simbolismo que Drummond usa para criar efeito sonoro agradável, sem intenção simbólica mais profunda." },
          ]}
          resolution={
            <p>
              A anáfora em <em>No Meio do Caminho</em> não é ornamento nem limitação — é o próprio
              conteúdo do poema. A pedra que "volta" nos três versos mimetiza a experiência
              psicológica do obstáculo que não sai da memória: o eu lírico não consegue parar de
              pensar na pedra, assim como às vezes não conseguimos parar de pensar em um problema,
              uma perda, um trauma. A repetição formal <em>é</em> a obsessão temática. Quando o ENEM
              pede para analisar o efeito da anáfora em poemas modernistas, a resposta quase sempre
              envolve essa correspondência entre forma e conteúdo — a técnica expressando a ideia,
              não apenas decorando-a.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Rachel de Queiroz e a Voz Feminina"
          statement={
            <p>
              Leia o fragmento de <em>O Quinze</em> (1930), de Rachel de Queiroz:
              <br /><br />
              <em>"Conceição sabia que as soluções individuais não valiam: enquanto a terra
              continuasse assim, árida e abandonada, enquanto as chuvas não viessem e os
              governantes não se lembrassem daquele povo sofrido, de nada adiantaria ela ajudar
              um ou dois retirantes."</em>
              <br /><br />
              A personagem Conceição, jovem intelectual de família abastada, representa nesse
              fragmento:
            </p>
          }
          options={[
            { letter: "a", text: "O conformismo das elites nordestinas que reconheciam o problema da seca mas não faziam nada para mudar a situação estrutural." },
            { letter: "b", text: "A consciência política e social de uma mulher que vai além da filantropia individual para compreender as causas estruturais da miséria, numa crítica ao abandono estatal.", correct: true },
            { letter: "c", text: "A visão ingênua de uma jovem que superestima sua capacidade de mudar o mundo sem entender as limitações práticas da ação social." },
            { letter: "d", text: "A perspectiva do narrador onisciente que julga criticamente as elites e os retirantes com igual imparcialidade jornalística." },
          ]}
          resolution={
            <p>
              O fragmento revela uma personagem que supera a filantropia para atingir uma consciência
              política mais elaborada: ela entende que ajudar um indivíduo isolado não resolve o problema
              estrutural — a seca, o abandono estatal, a concentração fundiária. Essa consciência é uma
              das marcas do pensamento social da Geração de 30 e uma das razões pelas quais Rachel de
              Queiroz foi pioneira: em 1930, uma mulher de 19 anos escrevendo sobre uma protagonista
              que pensa politicamente era um gesto de ruptura literária e social. A alternativa B
              captura essa dimensão crítica e política do personagem, diferenciando-a do conformismo
              (A), da ingenuidade (C) e do distanciamento jornalístico (D).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Capitães da Areia e a Representação dos Marginalizados"
          statement={
            <p>
              Em <em>Capitães da Areia</em> (1937), Jorge Amado narra a vida de meninos de rua em
              Salvador que formam uma gangue. O livro foi queimado pela polícia do Estado Novo por
              ordem judicial. Um crítico afirma: <em>"Ao dar voz e dignidade a personagens que a
              sociedade considerava apenas criminosos, Jorge Amado realiza uma operação literária
              e política ao mesmo tempo."</em>
              <br /><br />
              Avalie essa afirmativa:
            </p>
          }
          options={[
            { letter: "a", text: "A afirmativa é incorreta porque a literatura não tem dimensão política; Amado estava apenas descrevendo a realidade, sem intenção de transformá-la." },
            { letter: "b", text: "A afirmativa é correta: ao humanizar os meninos de rua — mostrando sua origem, sua afetividade, seu código interno — Amado questiona quem são realmente os criminosos na sociedade e desloca a culpa do indivíduo para as estruturas.", correct: true },
            { letter: "c", text: "A afirmativa é parcialmente correta, mas o livro foi queimado porque era literariamente ruim, não por seu conteúdo político." },
            { letter: "d", text: "A afirmativa superestima a obra de Amado; em 1937, a literatura brasileira ainda não tinha alcançado maturidade suficiente para fazer denúncia social eficaz." },
          ]}
          resolution={
            <p>
              A afirmativa do crítico é precisa e a alternativa B a desenvolve corretamente. Ao
              narrar os <em>Capitães da Areia</em> de dentro — pela perspectiva dos meninos, com
              nomes, histórias, afetos e dilemas morais próprios —, Jorge Amado recusa a visão
              que a sociedade e o Estado tinham deles (criminosos a serem reprimidos) e os apresenta
              como produtos da exclusão social. A queima do livro pelo Estado Novo confirma a
              dimensão política: o regime entendeu perfeitamente que a obra questionava as
              estruturas de poder e a responsabilidade do Estado pela miséria urbana. A alternativa
              A nega ingenuamente a política da literatura; C é factualmente falsa; D subestima
              a tradição crítica que já vinha do Pré-Modernismo.
            </p>
          }
        />
      </section>
    </article>
  );
}
