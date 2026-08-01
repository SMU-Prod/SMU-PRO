"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap33Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 33</span>
          <h1>Parnasianismo — A Arte pela Arte</h1>
          <p>
            Enquanto Machado de Assis dissecava a alma burguesa em prosa,
            um grupo de poetas brasileiros da segunda metade do século XIX
            erguia templos de palavras — cinzelando versos com a precisão de um ourives,
            buscando a beleza absoluta da forma, indiferentes à utilidade social da arte.
            O Parnasianismo proclamou que o poema é um fim em si mesmo:
            a perfeição estética é a única justificativa que a arte precisa.
            Herdeiros do ideal greco-romano do belo como valor supremo,
            os parnasianos brasileiros — Olavo Bilac à frente, seguido por Alberto de Oliveira
            e Raimundo Correia — construíram uma poesia de rigor técnico sem precedentes
            no Brasil, dominando o cenário literário por quatro décadas.
            Conhecer esse movimento é dominar um dos pólos mais importantes
            da poesia brasileira oitocentista e entender por que o Modernismo de 1922
            precisou destruí-lo para se afirmar.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. O Parnasianismo — Contexto Europeu e Chegada ao Brasil</h2>

        <p>
          O <strong>Parnasianismo</strong> surgiu na França na segunda metade do século XIX
          como reação ao sentimentalismo exagerado do Romantismo.
          O nome vem do <em>Parnaso</em> — montanha da mitologia grega
          consagrada às Musas e a Apolo, o deus da poesia e da arte.
          A publicação da antologia <em>Le Parnasse Contemporain</em> (1866–1876),
          organizada por Catulle Mendès, reuniu os poetas da nova escola:
          Théophile Gautier, Leconte de Lisle, José Maria de Heredia, entre outros.
          O lema era simples e radical: <em>art pour l'art</em> — a arte pela arte.
          Leconte de Lisle (1818–1894) foi o mais influente dos parnasianos franceses
          no Brasil: sua poesia de temas exóticos (Índia, Grécia, Oriente)
          e rigor técnico impecável foi o modelo direto para a geração de Bilac e Alberto.
        </p>
        <p>
          Théophile Gautier (1811–1872) é considerado o precursor teórico do movimento.
          Em seu prefácio ao romance <em>Mademoiselle de Maupin</em> (1835),
          Gautier afirmou que a arte não precisa ser útil, moral ou politicamente engajada:
          a beleza é seu único objetivo.
          Essa postura, provocativa em um ambiente de literatura engajada e romântica,
          tornou-se o manifesto não oficial do Parnasianismo.
          Os parnasianos eram, em certo sentido, os primeiros artistas modernos
          a proclamar a autonomia radical da arte em relação às demandas sociais —
          uma postura que reverberou ao longo de todo o século XX, dos esteticistas ingleses
          (Oscar Wilde com o lema "a arte não tem intenção moral")
          até os formalistas russos e os estruturalistas franceses.
        </p>
        <p>
          No Brasil, o Parnasianismo chegou nas décadas de 1870 e 1880, floresceu na década de 1890 e perdurou até o surgimento do Modernismo em 1922. O movimento brasileiro foi marcado por um entusiasmo pelo soneto e pelo decassílabo, pelo culto à forma perfeita e pela referência constante à mitologia greco-romana e à natureza descrita com precisão quase científica. Os três grandes nomes formam a chamada "Tríade Parnasiana": <strong>Olavo Bilac</strong>, <strong>Alberto de Oliveira</strong> e <strong>Raimundo Correia</strong>.
        </p>
        <p>
          Além da tríade, o Parnasianismo brasileiro contou com outros representantes importantes: <strong>Francisca Júlia</strong> (1871–1920) foi uma das poucas mulheres a se destacar no movimento e é reconhecida pelo rigor técnico e pela frieza elegante de seus poemas — seu livro <em>Mármores</em> (1895) é um dos mais representativos da estética parnasiana brasileira. <strong>Luís Delfino</strong> (1834–1910), <strong>Vicente de Carvalho</strong> (1866–1924) e <strong>Emílio de Meneses</strong> (1866–1918) completam o painel dos parnasianos brasileiros. Conhecer Francisca Júlia é particularmente relevante para questões de ENEM que exploram a representação feminina na literatura do século XIX.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Marco histórico</th>
                <th>Ano</th>
                <th>Relevância para o Parnasianismo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Publicação do <em>Le Parnasse Contemporain</em> (França)</td>
                <td>1866</td>
                <td>Marco fundador do movimento em solo europeu</td>
              </tr>
              <tr>
                <td>Primeiras publicações parnasianas no Brasil</td>
                <td>~1878</td>
                <td>Alberto de Oliveira e outros começam a publicar sonetos no estilo parnasiano</td>
              </tr>
              <tr>
                <td>Publicação de <em>Poesias</em> de Olavo Bilac</td>
                <td>1888</td>
                <td>O livro que consolidou o Parnasianismo brasileiro</td>
              </tr>
              <tr>
                <td>Bilac eleito "Príncipe dos Poetas"</td>
                <td>1907</td>
                <td>Ápice da popularidade parnasiana — o movimento domina o cenário cultural carioca</td>
              </tr>
              <tr>
                <td>Semana de Arte Moderna</td>
                <td>1922</td>
                <td>Ataque frontal ao Parnasianismo; início do Modernismo no Brasil</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>O contexto intelectual do Parnasianismo</h3>
          <p>
            O Parnasianismo surge no mesmo período que o Realismo e o Positivismo — mas tira conclusões opostas das mesmas premissas científicas. Se os realistas usam a objetividade para criticar a sociedade, os parnasianos usam a precisão para construir a beleza. A influência do positivismo aparece na obsessão com a técnica e a exatidão formal; a rejeição do subjetivismo romântico, na frieza e na impessoalidade do eu lírico. O Parnasianismo é, em última análise, a resposta estética conservadora ao caos emocional do Romantismo.
          </p>
        </div>

        <p>
          É importante notar que, ao contrário do que pode parecer à primeira vista, os parnasianos não desprezavam completamente a emoção. Olavo Bilac, por exemplo, escreveu poemas de amor de grande beleza lírica — a série <em>Via Láctea</em> é uma das mais tocantes da poesia brasileira. O que os parnasianos desprezavam era o <em>excesso</em> emocional do Romantismo: o sentimentalismo autoindulgente, o choro fácil, a confissão narcisista. Para eles, a emoção genuína era mais bem expressa quando disciplinada pela forma — como um diamante que só adquire seu brilho após o polimento cuidadoso. A contenção parnasiana é, portanto, uma questão de modo de expressão, não de ausência de sentimento.
        </p>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Características</span>
        <h2>2. As Marcas da Poesia Parnasiana</h2>

        <p>
          O Parnasianismo é definido por um conjunto de escolhas estéticas rigorosas
          que determinam tanto o que o poema diz quanto — e especialmente — como ele o diz.
          A forma não é apenas o recipiente do conteúdo: a forma é o próprio conteúdo.
          Um soneto parnasiano perfeito vale por sua perfeição, independentemente do tema.
          Essa concepção é radicalmente diferente da romântica, em que a emoção justifica
          qualquer imperfeição formal — o gênio romântico pode escrever mal,
          desde que escreva com sinceridade.
          Para o parnasiano, a sinceridade sem técnica é apenas mediocridade não disfarçada.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📐</span>
            <h3>Culto à Forma</h3>
            <p>A construção técnica do poema — métrica, rima, estrutura — é prioritária. O poeta parnasiano trabalha como um artesão que não tolera imperfeições.</p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Arte pela Arte</h3>
            <p>O poema não precisa ser útil, moralizante ou politicamente engajado. A beleza estética é suficiente justificativa para a existência da obra.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Impessoalidade</h3>
            <p>O eu lírico parnasiano se apaga: ao contrário do poeta romântico que confessa suas angústias, o parnasiano descreve objetos, cenas e natureza com distanciamento.</p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Descritivismo</h3>
            <p>Os parnasianos descrevem com precisão quase científica: esculturas, vasos, paisagens, animais e objetos são pintados em palavras com riqueza de detalhes.</p>
          </div>
          <div className="lesson-card">
            <span>🏺</span>
            <h3>Greco-Latinismo</h3>
            <p>Referências constantes à mitologia e à arte greco-romana: deuses, heróis, templos, musas. O Parnaso (montanha das Musas) dá o nome ao movimento.</p>
          </div>
          <div className="lesson-card">
            <span>🗼</span>
            <h3>Torre de Marfim</h3>
            <p>Metáfora usada para criticar o Parnasianismo: o poeta se isola em uma "torre de marfim", alheio às questões sociais e políticas de seu tempo.</p>
          </div>
        </div>

        <p>
          A expressão <strong>"torre de marfim"</strong> tornou-se o principal símbolo da crítica ao Parnasianismo. Se os românticos se engajaram na política nacional e os condoreiros denunciaram a escravidão, os parnasianos — especialmente na visão de críticos posteriores — fecharam-se em seus ateliês poéticos, indiferentes à miséria social ao redor. Essa acusação é parcialmente justa: o Parnasianismo nunca teve a preocupação social que o condoreirismo tinha. Mas seus defensores argumentam que a busca da perfeição formal é em si uma forma de resistência ao utilitarismo e à mercantilização da arte.
        </p>
        <p>
          O Parnasianismo representa, no contexto da história da arte ocidental, o primeiro momento em que a autonomia da arte em relação à sociedade é proclamada de forma explícita e programática. Antes dos parnasianos, era óbvio que a arte devia servir a algo — a religião, o príncipe, a moral, a nação. Os parnasianos foram os primeiros a dizer: não, a arte serve apenas a si mesma. Essa proclamação, por mais que possa parecer uma fuga elitista da realidade, abriu o caminho para toda a arte moderna e contemporânea — que por sua vez afirma constantemente seu direito à autonomia, à experimentação e à não-instrumentalização.
        </p>
      </section>

      {/* ── SEÇÃO 2B ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário e Temas</span>
        <h2>2b. Vocabulário, Temas e o Ideal de Perfeição Formal</h2>

        <p>
          O <strong>vocabulário parnasiano</strong> é deliberadamente erudito e refinado. Os poetas buscavam palavras raras, arcaísmos, termos técnicos especializados e referências culturais elevadas — não por ostentação vazia, mas porque acreditavam que a precisão lexical era parte essencial da perfeição estética. Isso explica o choque que o Parnasianismo causou nos modernistas de 1922: para Mário de Andrade e Oswald de Andrade, que queriam escrever em português brasileiro vivo e coloquial, o vocabulário parnasiano soava como um museu empoeirado.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Campo temático</th>
                <th>Exemplos de temas</th>
                <th>Exemplos em Bilac/Alberto/Correia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Objetos de arte</td>
                <td>Vasos, esculturas, colunas, frisos</td>
                <td><em>Vaso Grego</em> (Alberto de Oliveira) — descrição detalhada de um vaso helenístico</td>
              </tr>
              <tr>
                <td>Natureza descrita</td>
                <td>Animais, paisagens, flores, fenômenos naturais</td>
                <td><em>As Pombas</em> (Correia) — pombas como metáfora das ilusões perdidas</td>
              </tr>
              <tr>
                <td>Reflexão metaliterária</td>
                <td>A própria poesia, o ofício do poeta</td>
                <td><em>Profissão de Fé</em> (Bilac) — o poeta como escultor de palavras</td>
              </tr>
              <tr>
                <td>Amor</td>
                <td>Amor sensual e idealizado, mas contido</td>
                <td><em>Via Láctea</em> (Bilac) — amor expresso com elegância formal</td>
              </tr>
              <tr>
                <td>Mitologia greco-romana</td>
                <td>Deuses, heróis, cenas mitológicas</td>
                <td>Zeus, Afrodite, Hércules, Minerva nos poemas de toda a tríade</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          O tema do <strong>amor</strong> no Parnasianismo é tratado de forma muito diferente do amor romântico. Enquanto o poeta romântico chora, desfalece, perde o sono e escreve cartas suicidas por causa do amor, o parnasiano descreve a amada com precisão escultórica — seus cabelos, seus olhos, seus movimentos — como se ela fosse um objeto de arte. Há beleza nessa abordagem, mas também certa frieza: a amada parnasiana é quase sempre uma estátua, não uma pessoa de carne e osso com sua própria subjetividade. Essa diferença revela a impessoalidade característica do movimento.
        </p>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">A Forma Poética</span>
        <h2>3. Soneto, Métrica e Rima — A Técnica Parnasiana</h2>

        <p>
          A forma preferida dos parnasianos é o <strong>soneto</strong> — 14 versos organizados em dois quartetos e dois tercetos. A estrutura é herdada do Renascimento (Petrarca, Camões) mas os parnasianos a cultivam com rigor quase obsessivo: métrica perfeita, rimas ricas (preferencialmente raras e difíceis), vocabulário refinado e muitas vezes erudito. O verso mais utilizado é o <strong>decassílabo heróico</strong> (10 sílabas métricas, com acentuação na 6ª e na 10ª sílabas) — embora o alexandrino (12 sílabas) também seja frequente.
        </p>
        <p>
          A <strong>rima rica</strong> é um dos marcadores mais importantes do estilo parnasiano. Chama-se "rima rica" aquela que se dá entre palavras de classes gramaticais diferentes — por exemplo, um verbo rimando com um substantivo, ou um adjetivo rimando com um advérbio. Isso exige mais habilidade do poeta do que a rima "pobre" (entre palavras da mesma classe gramatical, como dois substantivos). O ideal parnasiano ia ainda mais longe: a <strong>rima preciosa</strong>, entre palavras raras ou eruditas, raramente usadas no cotidiano, que revelam tanto o domínio vocabular quanto a recusa do poeta de usar o comum e o banal. Encontrar uma rima preciosa era considerado um triunfo técnico — e os parnasianos competiam uns com os outros nessa caça às palavras difíceis.
        </p>
        <p>
          Outro aspecto técnico relevante é o <strong>verso enjambé</strong> (ou enjambement, encavalamento): quando uma oração não termina no final do verso mas continua no verso seguinte, sem pausa sintática. Os parnasianos usavam o enjambement com contenção — preferiam versos "fechados" em si mesmos, onde o sentido se completa com o verso. Esse rigor na autossuficiência de cada verso é mais uma marca da obsessão parnasiana com o controle e a completude formal.
        </p>

        <p>
          O soneto parnasiano típico tem estrutura bem definida: nos dois quartetos, apresenta-se o tema ou a descrição; nos dois tercetos, desenvolve-se uma reflexão ou uma conclusão que ilumina o que foi descrito. Essa estrutura bipartida — apresentação e reflexão — é usada com maestria por Bilac e seus contemporâneos para criar o efeito de completude que os parnasianos tanto valorizavam.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento Formal</th>
                <th>Definição</th>
                <th>Valorização Parnasiana</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Soneto</td>
                <td>14 versos: 2 quartetos + 2 tercetos</td>
                <td>Forma preferida; exige rigor estrutural máximo</td>
              </tr>
              <tr>
                <td>Decassílabo</td>
                <td>Verso de 10 sílabas métricas</td>
                <td>Verso nobre da tradição clássica; Camões → Bilac</td>
              </tr>
              <tr>
                <td>Rima rica</td>
                <td>Rima entre palavras de classes gramaticais diferentes</td>
                <td>Demonstra virtuosismo técnico; quanto mais rara, melhor</td>
              </tr>
              <tr>
                <td>Rima preciosa</td>
                <td>Rima com palavras raras ou eruditas</td>
                <td>Exibição de vocabulário culto e domínio da língua</td>
              </tr>
              <tr>
                <td>Cesura</td>
                <td>Pausa obrigatória no interior do verso</td>
                <td>Usada para controlar o ritmo e a musicalidade</td>
              </tr>
              <tr>
                <td>Enjambement</td>
                <td>Encavalamento: oração continua no verso seguinte</td>
                <td>Usado com contenção; preferem-se versos fechados</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Análise de soneto parnasiano — <em>Profissão de Fé</em> (Olavo Bilac):</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Não quero o Zeus Capitolino<br/>
            Hercúleo e belo,<br/>
            Talhar no mármore divino<br/>
            Com o camartelo.<br/>
            <br/>
            Que o vulgo aplauda! Eu, não. Procuro<br/>
            A pedra rara,<br/>
            Que acaso, entre as glórias do muro,<br/>
            Eu possa para!"
          </p>
          <p>
            O fragmento exemplifica o programa parnasiano: a rejeição da arte para as massas ("que o vulgo aplauda — eu, não"), a busca da "pedra rara" (a palavra perfeita, a forma excepcional), a metáfora da escultura (o poema como mármore trabalhado), e o vocabulário greco-latino (Zeus, Hércules, Capitolino). Bilac se apresenta como um artesão da palavra, não um cantor de emoções.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Olavo Bilac</span>
        <h2>4. Olavo Bilac — O Príncipe dos Poetas</h2>

        <p>
          <strong>Olavo Braz Martins dos Guimarães Bilac</strong> (1865–1918) é o maior poeta parnasiano brasileiro e um dos mais populares de toda a nossa história literária. Nascido no Rio de Janeiro, formou-se em medicina (sem concluir) e direito, dedicando-se ao jornalismo e à poesia. Sua popularidade em vida foi imensa — chegou a ser aclamado como "Príncipe dos Poetas Brasileiros" em 1907 em plebiscito popular promovido pela revista <em>Fon-Fon!</em>.
        </p>
        <p>
          Sua obra principal é <em>Poesias</em> (1888), que reuniu e estabeleceu o cânone de sua poética. Bilac cultiva com igual maestria o tema amoroso, o descritivismo de obras de arte e a reflexão sobre a própria poesia. O soneto <em>Profissão de Fé</em> é a declaração de princípios do Parnasianismo brasileiro: o poeta se compara a um escultor que busca a "pedra rara", a perfeição formal que transcende o efêmero. Em <em>Língua Portuguesa</em>, um de seus sonetos mais amados, a língua é descrita como herança gloriosa dos lusitanos, <em>"última flor do Lácio, inculta e bela"</em>.
        </p>

        <div className="lesson-highlight">
          <h3>Bilac fora da poesia — O Hino à Bandeira</h3>
          <p>
            Olavo Bilac escreveu a letra do <em>Hino à Bandeira do Brasil</em> (1906), que começa: <em>"Salve, lindo pendão da esperança! / Salve, símbolo augusto da paz!"</em> — um traço que contrasta com o suposto isolamento do poeta parnasiano: Bilac foi também um intelectual público, orador cívico e defensor do serviço militar obrigatório. Essa face pública mostra que o Parnasianismo não era hermético — era uma escolha estética, não uma postura de total alheamento político.
          </p>
        </div>

        <p>
          O soneto <strong><em>Língua Portuguesa</em></strong> é um dos mais amados de Bilac e frequentemente aparece no ENEM. Começa com o verso imortal: <em>"Última flor do Lácio, inculta e bela"</em> — em que o poeta define o português como a última língua derivada do latim ("Lácio" é a região da Itália onde se falava latim), ao mesmo tempo "inculta" (sem a refinamento das línguas europeias mais prestigiadas) e "bela" (com uma beleza própria e selvagem). O paradoxo "inculta e bela" condensa a ambiguidade do Brasil diante de sua herança europeia: ao mesmo tempo periférico e extraordinário, marginal e rico.
        </p>

        <p>
          Bilac foi também um importante cronista e jornalista, colaborando com periódicos como a <em>Gazeta de Notícias</em> e a revista <em>Fon-Fon!</em> — esta última foi o veículo que organizou o plebiscito que o elegeu "Príncipe dos Poetas Brasileiros" em 1907. Sua popularidade transcendia o círculo literário: era um nome reconhecido pelo grande público carioca da Belle Époque, presente nos jornais, nas conferências e nas polêmicas do dia. Essa celebridade pública explica por que o ataque modernista ao Parnasianismo foi especialmente visceral: para os jovens de 1922, Bilac representava o establishment literário que precisavam derrubar para afirmar a nova estética.
        </p>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Os Outros Parnasianos</span>
        <h2>5. Alberto de Oliveira e Raimundo Correia</h2>

        <p>
          <strong>Antônio Mariano Alberto de Oliveira</strong> (1857–1937) foi o parnasiano mais rigoroso na aplicação da técnica formal. Eleito três vezes "Príncipe dos Poetas" — antes e depois de Bilac —, Alberto de Oliveira é o exemplo mais puro do descritivismo: seus poemas descrevem com precisão arqueológica vasos gregos, esculturas, paisagens e objetos naturais, tratando cada detalhe como pretexto para exercício formal. Sua obra mais conhecida é o poema <em>Vaso Grego</em>, que descreve um vaso de cerâmica helenística com tal riqueza de detalhes que parece uma escultura em palavras. Alberto de Oliveira viveu muito mais do que os outros dois poetas da tríade — faleceu em 1937, aos 80 anos — e testemunhou a ascensão e o triunfo do Modernismo que o tornou obsoleto. Sua carreira é um exemplo extremo de fidelidade inabalável a uma estética mesmo diante da mudança dos tempos.
        </p>
        <p>
          <strong>Raimundo Correia</strong> (1859–1911) é o parnasiano mais melancólico e pessimista da tríade — aquele que mais se aproxima do pessimismo filosófico da segunda geração romântica, embora através de uma forma rigorosamente controlada. Seus sonetos frequentemente refletem sobre a morte, o absurdo da existência e a fugacidade da vida, com um tom contemplativo que lembra o <em>spleen</em> da geração de Álvares de Azevedo, mas sem o excesso emocional. O soneto <em>As Pombas</em> é seu poema mais famoso: <em>"Vai-se a primeira pomba despertada... / Vai-se outra mais... mais outra... enfim dezenas / De pombas vão-se dos pombais, apenas / Raia sanguínea e fresca a madrugada."</em> A metáfora das pombas que se vão é uma meditação sobre a passagem das ilusões e da juventude.
        </p>
        <p>
          Outro soneto importante de Raimundo Correia é <em>Mal Secreto</em>, que começa: <em>"Se a cólera que espuma, a dor que mora / N'alma, e destrói, contrasta o pensamento, / Neste poema que começa e remora / No coração, que vence e maravilha..."</em>. O poema explora a dissonância entre a aparência exterior — que pode parecer serena — e a turbulência interior que corrói. Essa introspecção diferencia Correia dos outros dois parnasianos da tríade: enquanto Bilac busca a beleza e Alberto de Oliveira busca a precisão descritiva, Correia busca compreender o tormento interior — mesmo que o expresse em formas rigorosamente controladas.
        </p>
        <p>
          A distinção entre os três grandes parnasianos é sutil mas importante para o ENEM. Grosso modo: <strong>Bilac</strong> = equilíbrio entre forma e lirismo, o mais completo e popular; <strong>Alberto de Oliveira</strong> = o mais rigoroso e "frio", o parnasiano puro; <strong>Raimundo Correia</strong> = o mais meditativo e existencial, uma ponte entre o rigor parnasiano e a angústia que o Simbolismo explorará mais livremente. Conhecer essa distinção permite responder questões que pedem identificação de autor a partir de fragmentos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>Datas</th>
                <th>Obra Mais Conhecida</th>
                <th>Traço Distintivo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Olavo Bilac</td>
                <td>1865–1918</td>
                <td><em>Poesias</em> (1888); <em>Profissão de Fé</em></td>
                <td>Síntese perfeita de técnica e sensibilidade; lirismo amoroso e reflexão metaliterária</td>
              </tr>
              <tr>
                <td>Alberto de Oliveira</td>
                <td>1857–1937</td>
                <td><em>Meridionais</em> (1884); <em>Vaso Grego</em></td>
                <td>Descritivismo rigoroso; precisão arqueológica; forma mais pura do Parnasianismo</td>
              </tr>
              <tr>
                <td>Raimundo Correia</td>
                <td>1859–1911</td>
                <td><em>Sinfonias</em> (1883); <em>As Pombas</em></td>
                <td>Meditação existencial e pessimismo filosófico dentro da forma parnasiana</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Arte pela Arte</span>
        <h2>6. A Filosofia do <em>Art pour l'Art</em> — Torre de Marfim</h2>

        <p>
          A expressão <strong><em>art pour l'art</em></strong> (a arte pela arte) condensa o programa filosófico do Parnasianismo: a obra de arte não precisa de justificativa externa — não precisa ser útil, moralizante, politicamente engajada ou espiritualmente edificante. A beleza é um valor em si mesmo, e criá-la é a missão do artista. Essa postura tem profundas implicações filosóficas: ela pressupõe que existe algo como a Beleza absoluta (um ideal platônico, em certo sentido) e que o artista tem o poder — e o dever — de se aproximar dela.
        </p>
        <p>
          A metáfora da <strong>torre de marfim</strong>, atribuída ao crítico e poeta Sainte-Beuve (que a usou ironicamente para criticar Alfred de Vigny em 1837), tornou-se o símbolo negativo mais eficaz do Parnasianismo. Diz-se que o poeta parnasiano se encerra em sua torre de marfim — isolado da sociedade, alheio à miséria, frio diante da injustiça — para polir seus versos em paz. A crítica modernista ao Parnasianismo (especialmente a de Oswald de Andrade e Mário de Andrade a partir de 1922) usou exatamente essa imagem: os parnasianos seriam poetas de gabinete, irrelevantes para a vida real.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 200"
            width="700"
            height="200"
            aria-label="Diagrama comparativo entre Romantismo, Parnasianismo e Simbolismo na segunda metade do século XIX"
          >
            <defs>
              <marker id="arrowPar" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1" />
              </marker>
            </defs>
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <text x="350" y="26" textAnchor="middle" fontSize="14" fill="#6366f1" fontWeight="bold">A Poesia Brasileira no Século XIX — Transição</text>

            {/* Romantismo */}
            <rect x="20" y="45" width="190" height="110" rx="10" fill="#fce7f3" />
            <text x="115" y="68" textAnchor="middle" fontSize="12" fill="#9d174d" fontWeight="bold">Romantismo</text>
            <text x="115" y="84" textAnchor="middle" fontSize="10" fill="#9d174d">Emoção / Subjetivismo</text>
            <text x="115" y="100" textAnchor="middle" fontSize="10" fill="#9d174d">Individualismo</text>
            <text x="115" y="116" textAnchor="middle" fontSize="10" fill="#9d174d">Liberdade formal</text>
            <text x="115" y="132" textAnchor="middle" fontSize="9" fill="#9d174d" fontStyle="italic">até ~1881</text>

            {/* Parnasianismo */}
            <rect x="255" y="45" width="190" height="110" rx="10" fill="#dbeafe" />
            <text x="350" y="68" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="bold">Parnasianismo</text>
            <text x="350" y="84" textAnchor="middle" fontSize="10" fill="#1e40af">Forma / Técnica</text>
            <text x="350" y="100" textAnchor="middle" fontSize="10" fill="#1e40af">Impessoalidade</text>
            <text x="350" y="116" textAnchor="middle" fontSize="10" fill="#1e40af">Arte pela arte</text>
            <text x="350" y="132" textAnchor="middle" fontSize="9" fill="#1e40af" fontStyle="italic">~1880–1922</text>

            {/* Simbolismo */}
            <rect x="490" y="45" width="190" height="110" rx="10" fill="#ede9fe" />
            <text x="585" y="68" textAnchor="middle" fontSize="12" fill="#7c3aed" fontWeight="bold">Simbolismo</text>
            <text x="585" y="84" textAnchor="middle" fontSize="10" fill="#7c3aed">Sugestão / Mistério</text>
            <text x="585" y="100" textAnchor="middle" fontSize="10" fill="#7c3aed">Musicalidade</text>
            <text x="585" y="116" textAnchor="middle" fontSize="10" fill="#7c3aed">Espiritualidade</text>
            <text x="585" y="132" textAnchor="middle" fontSize="9" fill="#7c3aed" fontStyle="italic">~1893–1922</text>

            {/* setas */}
            <line x1="210" y1="100" x2="252" y2="100" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowPar)" />
            <line x1="445" y1="100" x2="487" y2="100" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowPar)" />

            <text x="350" y="178" textAnchor="middle" fontSize="11" fill="#64748b">Os três movimentos coexistiram na virada do século — reações diferentes ao Romantismo</text>
          </svg>
          <figcaption>Transição da poesia brasileira: do Romantismo ao Parnasianismo e ao Simbolismo na segunda metade do século XIX.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Romantismo vs. Parnasianismo</span>
        <h2>7. Romantismo × Parnasianismo — Quadro Comparativo</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Romantismo</th>
                <th>Parnasianismo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Relação com a emoção</td>
                <td>Central; o poema é confissão emocional</td>
                <td>Secundária; o poema é construção técnica</td>
              </tr>
              <tr>
                <td>Postura do eu lírico</td>
                <td>Subjetivo, presente, emotivo</td>
                <td>Impessoal, distante, observador</td>
              </tr>
              <tr>
                <td>Liberdade formal</td>
                <td>Alta; rompe com as regras clássicas</td>
                <td>Baixa; rigoroso com métrica e rima</td>
              </tr>
              <tr>
                <td>Temas preferidos</td>
                <td>Amor, natureza, morte, pátria, liberdade</td>
                <td>Objetos, esculturas, natureza descrita, mitologia</td>
              </tr>
              <tr>
                <td>Função da arte</td>
                <td>Expressão, comunicação, engajamento</td>
                <td>Criação de beleza — arte pela arte</td>
              </tr>
              <tr>
                <td>Relação com a sociedade</td>
                <td>Engajada (especialmente 3ª geração)</td>
                <td>Torre de marfim; alheamento social</td>
              </tr>
              <tr>
                <td>Forma privilegiada</td>
                <td>Lyra, ode, narrativa épica, romance</td>
                <td>Soneto em decassílabo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          É fundamental não confundir Parnasianismo com Simbolismo no ENEM. Embora sejam contemporâneos e ambos sejam reações ao Romantismo, suas reações são completamente diferentes. O Parnasianismo reage ao subjetivismo romántico com <em>objetividade e precisão</em>: menos emoção, mais técnica; menos eu, mais objeto. O Simbolismo reage ao mesmo subjetivismo com <em>aprofundamento do mistério interior</em>: não menos emoção, mas emoção mais obscura, menos dita, mais sugerida. Em outras palavras: Parnasianismo = clareza fria; Simbolismo = névoa quente. Um fragmento parnasiano é claro, elegante e descritivo; um fragmento simbolista é obscuro, musical e evocativo.
        </p>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Parnasianismo e o Modernismo</span>
        <h2>8. A Crítica Modernista ao Parnasianismo e o Legado do Movimento</h2>

        <p>
          A <strong>Semana de Arte Moderna</strong> de 1922 — organizada por Mário de Andrade, Oswald de Andrade, Graça Aranha e outros — teve como alvo explícito o Parnasianismo. Os modernistas atacaram o formalismo, o afrancesamento, o distanciamento social e o que chamavam de "oratória vazia" dos parnasianos. Oswald de Andrade, no <em>Manifesto da Poesia Pau-Brasil</em> (1924), contrapôs a linguagem viva, popular e brasileira à "língua de museu" dos parnasianos. Mário de Andrade eliminou deliberadamente acentos e rimas de seus poemas para romper com a herança parnasiana.
        </p>
        <p>
          A crítica modernista foi eficaz — e exagerada. O Parnasianismo tinha defeitos reais: certo hermetismo social, um vocabulário às vezes artificialmente erudito e uma temática limitada ao mundo greco-romano e ao descritivismo de objetos de arte. Mas seus defensores apontam conquistas igualmente reais: o rigor técnico dos parnasianos elevou o nível de excelência da poesia brasileira, e muitos sonetos de Bilac, Alberto de Oliveira e Raimundo Correia figuram entre os mais belos já escritos em português. A forma soneto sobreviveu ao Modernismo e até hoje é cultivada por poetas brasileiros.
        </p>

        <p>
          O paradoxo do legado parnasiano é que a forma que os modernistas mais atacaram — o soneto — nunca morreu. Drummond escreveu sonetos. João Cabral de Melo Neto, o mais formalista dos modernistas, cultivou o rigor métrico que os parnasianos pregavam. A questão, portanto, não era a forma em si, mas o que ela expressava: os modernistas queriam a forma a serviço do Brasil real; os parnasianos queriam a forma a serviço da beleza absoluta. Esse debate sobre a função da arte — autônoma ou engajada, bela ou útil — continua sendo um dos mais importantes da estética contemporânea.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Parnasianismo</th>
                <th>Modernismo (1922)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Relação com a forma</td>
                <td>Culto à forma — soneto, decassílabo, rima rica</td>
                <td>Libertação da forma — verso livre, linguagem coloquial</td>
              </tr>
              <tr>
                <td>Relação com o Brasil</td>
                <td>Modelos europeus (França, Grécia, Roma)</td>
                <td>Brasilidade, cultura popular, língua falada</td>
              </tr>
              <tr>
                <td>Função da arte</td>
                <td>Arte pela arte — beleza como único objetivo</td>
                <td>Arte comprometida com o Brasil real</td>
              </tr>
              <tr>
                <td>Vocabulário</td>
                <td>Erudito, latinizante, greco-romano</td>
                <td>Coloquial, popular, neologismos, regionalismos</td>
              </tr>
              <tr>
                <td>Postura cultural</td>
                <td>Torre de marfim, alheamento social</td>
                <td>Engajamento, participação, vanguarda</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Dica ENEM — O Parnasianismo no Exame:</strong>
          <p>
            O ENEM frequentemente apresenta fragmentos parnasianos e pede ao candidato que identifique a característica estética dominante. Os marcadores mais confiáveis são: presença de referências greco-latinas (Zeus, Vênus, Hércules, Parnaso), vocabulário erudito e raro, estrutura de soneto, ausência de subjetividade ou engajamento social, tom descritivo. A expressão "arte pela arte" e a metáfora da "torre de marfim" são conceitos que o candidato deve dominar para responder questões comparativas entre movimentos.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Síntese Visual e Pontos Fundamentais</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 230"
            width="700"
            height="230"
            aria-label="Mapa conceitual do Parnasianismo brasileiro com autores, obras e características"
          >
            <rect x="0" y="0" width="700" height="230" rx="14" fill="#f8fafc" />

            {/* nó central */}
            <rect x="270" y="20" width="160" height="50" rx="10" fill="#6366f1" />
            <text x="350" y="42" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">PARNASIANISMO</text>
            <text x="350" y="58" textAnchor="middle" fontSize="10" fill="#e0e7ff">Arte pela Arte — ~1880-1922</text>

            {/* linhas */}
            <line x1="180" y1="70" x2="350" y2="70" stroke="#6366f1" strokeWidth="1.5" />
            <line x1="350" y1="70" x2="520" y2="70" stroke="#6366f1" strokeWidth="1.5" />
            <line x1="180" y1="70" x2="180" y2="105" stroke="#6366f1" strokeWidth="1.5" />
            <line x1="350" y1="70" x2="350" y2="105" stroke="#6366f1" strokeWidth="1.5" />
            <line x1="520" y1="70" x2="520" y2="105" stroke="#6366f1" strokeWidth="1.5" />

            {/* caixas autores */}
            <rect x="50" y="105" width="260" height="65" rx="8" fill="#dbeafe" />
            <text x="180" y="125" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">Olavo Bilac (1865-1918)</text>
            <text x="180" y="141" textAnchor="middle" fontSize="10" fill="#1e40af">Poesias (1888) · Profissão de Fé</text>
            <text x="180" y="157" textAnchor="middle" fontSize="9" fill="#3b82f6">Técnica + sensibilidade · Príncipe dos Poetas</text>

            <rect x="225" y="105" width="250" height="65" rx="8" fill="#d1fae5" />
            <text x="350" y="125" textAnchor="middle" fontSize="11" fill="#065f46" fontWeight="bold">Alberto de Oliveira (1857-1937)</text>
            <text x="350" y="141" textAnchor="middle" fontSize="10" fill="#065f46">Meridionais (1884) · Vaso Grego</text>
            <text x="350" y="157" textAnchor="middle" fontSize="9" fill="#059669">Descritivismo rigoroso · mais técnico</text>

            <rect x="395" y="105" width="260" height="65" rx="8" fill="#fce7f3" />
            <text x="520" y="125" textAnchor="middle" fontSize="11" fill="#9d174d" fontWeight="bold">Raimundo Correia (1859-1911)</text>
            <text x="520" y="141" textAnchor="middle" fontSize="10" fill="#9d174d">Sinfonias (1883) · As Pombas</text>
            <text x="520" y="157" textAnchor="middle" fontSize="9" fill="#be185d">Pessimismo existencial · mais lírico</text>

            <text x="350" y="196" textAnchor="middle" fontSize="11" fill="#6366f1" fontWeight="bold">Características: soneto · decassílabo · rima rica · impessoalidade · greco-latinismo</text>
            <text x="350" y="214" textAnchor="middle" fontSize="10" fill="#64748b">Reação ao Romantismo · antecedido pelo Modernismo de 1922</text>
          </svg>
          <figcaption>Mapa conceitual do Parnasianismo brasileiro — autores, obras e características principais.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Checklist para o ENEM</h3>
          <ul>
            <li>Parnasianismo = <em>art pour l'art</em> — a forma é o objetivo, não o meio.</li>
            <li>Tríade parnasiana brasileira: Olavo Bilac, Alberto de Oliveira, Raimundo Correia.</li>
            <li>Forma preferida: soneto em decassílabo com rimas ricas.</li>
            <li>Torre de marfim: metáfora do isolamento social do poeta parnasiano.</li>
            <li>Impessoalidade: o eu lírico não confessa emoções pessoais — descreve o mundo externo.</li>
            <li>Greco-latinismo: referências constantes à mitologia e à arte clássica.</li>
            <li>Contestado pelo Modernismo de 1922 (Semana de Arte Moderna).</li>
            <li>Sonetos fundamentais para o ENEM: <em>Profissão de Fé</em> (Bilac), <em>Língua Portuguesa</em> (Bilac), <em>Via Láctea XIII</em> (Bilac), <em>As Pombas</em> (Correia), <em>Vaso Grego</em> (Alberto).</li>
            <li>Parnasianismo coexistiu com Simbolismo (~1893–1922) — movimentos contemporâneos com estéticas opostas.</li>
          </ul>
        </div>

        <p>
          O período parnasiano coincide com um momento importante na história cultural brasileira: a <strong>Belle Époque carioca</strong> (aproximadamente 1890–1922). O Rio de Janeiro, recém-convertido em capital da República (1889), passava por uma grande reforma urbana — o prefeito Pereira Passos arrasou cortiços, abriu avenidas largas (como a Avenida Central, atual Rio Branco), e o centro da cidade adotou um verniz europeu de boulevards, cafés, teatros e livrarias. Nesse ambiente de modernização cosmopolita e afrancesada, o Parnasianismo foi a estética perfeita: elegante, europeia, culta, impecavelmente bem-vestida. Os poetas parnasianos frequentavam as confeitarias e livrarias do centro, debatiam em revistas e jornais, e eram figuras do bom-tom cultural carioca.
        </p>

        <p>
          O <strong>Simbolismo</strong>, contemporâneo do Parnasianismo, era sua antítese estética. Enquanto os parnasianos buscavam clareza, precisão e forma perfeita, os simbolistas buscavam sugestão, mistério e musicalidade. Enquanto os parnasianos descreviam o mundo visível com riqueza de detalhes, os simbolistas evocavam o mundo invisível — emoções, pressentimentos, estados de alma que resistem à descrição direta. Os dois movimentos coexistiram nas últimas décadas do século XIX e nas primeiras do XX, com os mesmos periódicos publicando poetas de ambas as tendências. Para o ENEM, é fundamental saber distingui-los: o candidato deve reconhecer as marcas de cada um em fragmentos apresentados na prova.
        </p>
      </section>

      {/* ── SEÇÃO 9B — PARNASIANISMO E ENEM ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia de Prova</span>
        <h2>9b. Como o ENEM Cobra o Parnasianismo</h2>

        <p>
          O Parnasianismo aparece no ENEM de formas previsíveis. As questões mais comuns:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📋</span>
            <h3>Identificação do Movimento</h3>
            <p>Dado um fragmento poético, identificar se pertence ao Parnasianismo, Romantismo, Simbolismo ou Modernismo. Observe: soneto + rima rica + impessoalidade + greco-latinismo = Parnasianismo.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Comparação entre Movimentos</h3>
            <p>Dois fragmentos — um parnasiano, um romântico ou simbolista — e a pergunta sobre diferenças estéticas. Foco na forma (rima, métrica) e na postura do eu lírico (impessoal vs. subjetivo).</p>
          </div>
          <div className="lesson-card">
            <span>🗣️</span>
            <h3>Art pour l'Art e Torre de Marfim</h3>
            <p>Questões conceituais sobre a filosofia parnasiana. Domine os dois conceitos: art pour l'art = autonomia estética; torre de marfim = alheamento social como crítica ao movimento.</p>
          </div>
          <div className="lesson-card">
            <span>🔎</span>
            <h3>Análise de Recursos Formais</h3>
            <p>Identificar a função da rima, da métrica ou do vocabulário erudito no fragmento. Por que o poeta escolheu aquela palavra rara? O que a perfeição formal diz sobre a visão de arte parnasiana?</p>
          </div>
        </div>

        <p>
          Uma observação importante sobre questões de análise formal: o ENEM não exige que o candidato conte sílabas métricas ou identifique a rima tecnicamente. O que a prova avalia é a compreensão do <em>efeito</em> da forma: por que a regularidade métrica cria certo ritmo solene; por que a rima rica reforça o efeito de fechamento do soneto; por que o vocabulário erudito cria distância e elegância. Entender o "para quê" é mais importante do que saber nomear o "o quê".
        </p>

        <p>
          Questões comparativas entre Parnasianismo e outros movimentos são frequentes. O candidato deve ter em mente a seguinte sequência cronológica na poesia brasileira: Romantismo (1836–1881) → Parnasianismo e Simbolismo (coexistindo ~1880–1922) → Modernismo (1922 em diante). Quando o ENEM apresenta dois fragmentos poéticos e pede que o candidato compare-os, o conhecimento dessa sequência e das características de cada movimento é determinante. Observe sempre: (a) a postura do eu lírico — subjetivo/emotivo indica Romantismo; impessoal/descritivo indica Parnasianismo; misterioso/musical indica Simbolismo; coloquial/experimentalista indica Modernismo; (b) a forma — rígida (soneto, decassílabo) indica Parnasianismo; livre indica Modernismo ou Romantismo tardio; (c) o vocabulário — erudito/greco-latino indica Parnasianismo; simples/popular indica Modernismo.
        </p>
      </section>

      {/* ── SEÇÃO 10 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. O Programa do Parnasianismo"
          statement={
            <p>
              O lema central do Parnasianismo, expresso pela frase <em>"arte pela arte"</em> (<em>art pour l'art</em>), significa que:
            </p>
          }
          options={[
            { letter: "a", text: "a arte deve sempre ter função social e política, servindo à transformação da sociedade." },
            { letter: "b", text: "a arte deve expressar as emoções mais profundas do poeta, priorizando a subjetividade sobre a técnica." },
            { letter: "c", text: "a obra de arte encontra justificativa em si mesma: a beleza estética e a perfeição formal são seu único objetivo, sem necessidade de utilidade externa.", correct: true },
            { letter: "d", text: "a arte deve imitar a natureza com fidelidade científica, como propugnava o Naturalismo de Émile Zola." },
          ]}
          resolution={
            <p>
              <em>Art pour l'art</em> é o programa filosófico central do Parnasianismo: a arte não precisa ser moralizante, política, útil ou espiritualmente edificante. A beleza estética — expressa através da perfeição formal do poema — é em si mesma o objetivo e a justificativa da obra literária. Essa postura é diametralmente oposta ao engajamento social do condoreirismo (A), ao subjetivismo romântico (B) e ao realismo científico do Naturalismo (D). O Parnasianismo é uma reação ao excesso emocional do Romantismo, mas também se distingue do Realismo e do Naturalismo por recusar a função social da literatura.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Técnica Formal Parnasiana"
          statement={
            <p>
              Um poeta parnasiano trabalha um soneto durante semanas, buscando a rima perfeita entre palavras raras, ajustando cada sílaba para que o decassílabo soe impecável. Qual trecho abaixo poderia ser de sua autoria, e por quê?
            </p>
          }
          options={[
            { letter: "a", text: '"Que o vulgo aplauda! Eu, não. Procuro / A pedra rara..." (impessoalidade, rejeição da arte popular, busca da palavra rara — características do Parnasianismo)', correct: true },
            { letter: "b", text: '"Minha terra tem palmeiras, / Onde canta o Sabiá..." (sentimentalismo, saudade, natureza tropical brasileira — Romantismo de Gonçalves Dias)' },
            { letter: "c", text: '"Vozes d\'Africa: / Deus! Deus! Deus! onde estás..." (discurso político grandioso, abolicionismo, condoreirismo de Castro Alves)' },
            { letter: "d", text: '"Nascer, morrer, renascer ainda / E progredir sempre..." (espiritualidade, misticismo, Simbolismo)' },
          ]}
          resolution={
            <p>
              O trecho da alternativa A é de <em>Profissão de Fé</em>, de Olavo Bilac — o soneto-manifesto do Parnasianismo brasileiro. A rejeição do aplauso do vulgo (recusa do populismo na arte), a busca da "pedra rara" (a palavra perfeita, difícil, erudita) e a metáfora da escultura são características inequívocas do programa parnasiano. O trecho B é de Gonçalves Dias (Romantismo nacionalista); o C é de Castro Alves (condoreirismo); o D remete ao Simbolismo espiritualista. Cada fragmento tem marcas estilísticas que permitem identificar o movimento ao qual pertence.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. A Torre de Marfim — Crítica ao Parnasianismo"
          statement={
            <p>
              A expressão "torre de marfim" é frequentemente usada para caracterizar a postura do poeta parnasiano em relação à sociedade de seu tempo. Assinale a alternativa que melhor explica o significado dessa crítica:
            </p>
          }
          options={[
            { letter: "a", text: "O poeta parnasiano vivia em castelos de marfim, metáfora da riqueza material que conquistou com a poesia de sucesso comercial." },
            { letter: "b", text: "O Parnasianismo é criticado por seu isolamento social: ao priorizar a perfeição formal e a beleza estética, o poeta se afasta das questões sociais e políticas urgentes de seu tempo — como a pobreza, a abolição e a desigualdade.", correct: true },
            { letter: "c", text: "A torre de marfim refere-se à postura religiosa e mística dos parnasianos, que buscavam a beleza como aproximação ao sagrado." },
            { letter: "d", text: "O poeta parnasiano é criticado por usar uma linguagem excessivamente popular, acessível ao povo, ao contrário da linguagem erudita dos românticos." },
          ]}
          resolution={
            <p>
              A "torre de marfim" é uma metáfora negativa cunhada pela crítica literária para designar o alheamento social do Parnasianismo. Enquanto o Brasil do final do século XIX vivia transformações dramáticas — abolição da escravidão (1888), proclamação da República (1889), imigração em massa, urbanização acelerada —, os poetas parnasianos poliam sonetos sobre vasos gregos e deuses mitológicos. A crítica foi especialmente intensa dos modernistas de 1922, que queriam uma arte engajada com o Brasil real. A alternativa B captura essa crítica com precisão. As alternativas A (riqueza material), C (misticismo) e D (linguagem popular — que é o oposto do que os parnasianos faziam) não descrevem corretamente o sentido da expressão.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Análise de Fragmento Parnasiano"
          statement={
            <p>
              Leia o fragmento do soneto <em>Via Láctea XIII</em>, de Olavo Bilac:<br /><br />
              <em>"Ora (direis) ouvir estrelas! Certo<br/>
              Perdeste o senso! E eu vos direi, no entanto,<br/>
              Que, para ouvi-las, muita vez desperto<br/>
              E abro as janelas, pálido de espanto..."</em><br /><br />
              Identifique as características do Parnasianismo presentes no fragmento:
            </p>
          }
          options={[
            { letter: "a", text: "Zoomorfização e determinismo: o poeta é comparado a um animal que acorda na madrugada, revelando influência naturalista." },
            { letter: "b", text: "Rigor métrico (decassílabos), rimas precisas (certo/desperto; entanto/espanto) e elaboração formal cuidadosa; o tema do ouvir estrelas remete ao idealismo poético típico do Parnasianismo, que busca beleza além do cotidiano.", correct: true },
            { letter: "c", text: "Subjetivismo exacerbado e sentimentalismo: o poeta chora ao ouvir estrelas, expressando o mal do século da segunda geração romântica." },
            { letter: "d", text: "Sinestesia e musicalidade simbolista: o fragmento mistura percepções visuais (pálido) e auditivas (ouvir estrelas) como recurso tipicamente simbolista." },
          ]}
          resolution={
            <p>
              O fragmento é do celebrado soneto de Bilac que imagina ouvir as estrelas conversando. A análise formal revela o Parnasianismo: os versos são decassílabos (dez sílabas métricas); as rimas são precisas e ricas — "certo"/"desperto" (rima entre adjetivo e particípio) e "entanto"/"espanto" (rima de substantivos/advérbios); o vocabulário é elevado ("pálido de espanto"). O tema, embora evoque beleza etérea, é tratado com contenção formal, sem o derramamento emocional romântico. A sinestesia (D) existe no fragmento — mistura do auditivo e visual — mas a sinestesia é um recurso literário que pode aparecer em vários movimentos; no contexto desse poema, as marcas parnasianas (forma, métrica, rima) são predominantes. Naturalismo (A) e romantismo sentimental (C) são inadequados ao fragmento.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Parnasianismo e Modernismo — Ruptura de 1922"
          statement={
            <p>
              A Semana de Arte Moderna de 1922, organizada por Mário de Andrade, Oswald de Andrade e outros, teve o Parnasianismo como principal alvo. O Manifesto da Poesia Pau-Brasil (1924) de Oswald de Andrade defendia uma linguagem coloquial, brasileira e anticonvencional. Com base nesse contexto, assinale a afirmativa que melhor explica por que os modernistas atacaram o Parnasianismo:
            </p>
          }
          options={[
            { letter: "a", text: "Os modernistas criticavam o Parnasianismo por ser um movimento muito popular e acessível ao povo, enquanto desejavam uma arte mais elitista e hermética." },
            { letter: "b", text: "Os modernistas rejeitavam o Parnasianismo por considerá-lo um movimento que imitava servilmente modelos europeus — especialmente a poesia francesa —, cultivava uma linguagem artificialmente erudita, e se recusava a incorporar o Brasil real: sua história, seu povo, suas contradições e sua fala cotidiana.", correct: true },
            { letter: "c", text: "Os modernistas atacavam o Parnasianismo porque este era excessivamente político e engajado, usando a poesia para propaganda ideológica inaceitável para os artistas modernistas." },
            { letter: "d", text: "Os modernistas criticavam o Parnasianismo por valorizar demais a musicalidade e a sinestesia, recursos que os modernistas consideravam subversivos da clareza racional do texto literário." },
          ]}
          resolution={
            <p>
              A crítica modernista ao Parnasianismo foi precisa e eficaz: os parnasianos imitavam a poesia francesa (Leconte de Lisle, Heredia), usavam vocabulário greco-romano artificialmente transplantado para um país sem essa tradição cultural viva, e produziam uma literatura de gabinete alheia ao Brasil real — à miscigenação, à pobreza, ao português falado na rua, ao Carnaval, ao sertão. Os modernistas queriam uma arte que fosse genuinamente brasileira, não um reflexo afrancesado. A alternativa B descreve com precisão essa crítica. As demais distorcem: os parnasianos não eram populistas (A), não eram politicamente engajados (C) — pelo contrário, eram acusados de alheamento —, e a musicalidade (D) não era o problema central identificado pelos modernistas.
            </p>
          }
        />
      </section>
    </article>
  );
}
