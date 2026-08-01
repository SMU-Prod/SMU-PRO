"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap27Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 27</span>
          <h1>Classicismo</h1>
          <p>
            O século XVI português foi palco de uma das maiores revoluções culturais do Ocidente: o Renascimento chegava às margens do Tejo pelo mesmo navio que levava navegadores às Índias. Sá de Miranda trouxe da Itália o soneto e o decassílabo; Camões fundiu epopeia, mitologia e amor num poema que o mundo leu como se fosse português por natureza. Compreender o Classicismo é compreender como a razão, a beleza formal e o orgulho nacional se entrelaçaram para produzir <em>Os Lusíadas</em> — a obra mais cobrada em vestibulares e uma das mais importantes da língua portuguesa.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. Portugal no Século XVI: Navegações, Riqueza e Crise</h2>

        <p>
          O Classicismo português se desenvolveu ao longo do <strong>século XVI</strong>, período em que Portugal vivia a apoteose das Grandes Navegações e, simultaneamente, as primeiras fissuras do seu império colonial. A chegada de Vasco da Gama à Índia em 1498 havia aberto rotas comerciais riquíssimas; o ouro, as especiarias e o prestígio internacional transformaram Lisboa numa das cidades mais cosmopolitas do mundo. D. Manuel I e D. João III reinaram em meio a essa ebulição, patrocinando as artes e atraindo intelectuais de toda a Europa.
        </p>
        <p>
          Ao mesmo tempo, o humanismo italiano do <em>Quattrocento</em> irradiava por toda a Europa. Petrarca havia fixado o modelo do soneto; Virgílio e Homero eram estudados nas universidades; a academia de Florença debatia Platão. Portugal absorveu essas influências por duas vias: pelo contato direto dos nobres e intelectuais que estudavam em Salamanca, Paris e Bolonha, e pela chegada de sábios estrangeiros à corte de Lisboa. Nesse ambiente, <strong>Sá de Miranda</strong> foi a Portugal o que Petrarca foi à Itália: o introdutor de uma estética nova, mais rigorosa e mais filosófica.
        </p>

        <div className="lesson-highlight">
          <h3>O que é o Classicismo Português?</h3>
          <p>
            O Classicismo (ou Quinhentismo em sentido estrito) é o movimento literário português do século XVI que se fundamenta na <strong>imitação dos modelos greco-romanos</strong>, no uso da <em>medida nova</em> (soneto decassílabo) e nos valores renascentistas: razão, harmonia, equilíbrio, antropocentrismo e perfeição formal. Começa convencionalmente com o retorno de Sá de Miranda da Itália (c. 1526) e atinge o ápice com Camões.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 200"
            width="700"
            height="200"
            aria-label="Linha do tempo do Classicismo português do século XVI"
          >
            <defs>
              <marker id="arrowCl" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1" />
              </marker>
            </defs>
            <rect x="0" y="0" width="700" height="200" rx="12" fill="#f8fafc" />
            <line x1="40" y1="100" x2="660" y2="100" stroke="#6366f1" strokeWidth="3" markerEnd="url(#arrowCl)" />

            <circle cx="90" cy="100" r="9" fill="#6366f1" />
            <text x="90" y="82" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1498</text>
            <text x="90" y="120" textAnchor="middle" fontSize="10" fill="#4b5563">Vasco da Gama</text>
            <text x="90" y="133" textAnchor="middle" fontSize="10" fill="#4b5563">na Índia</text>

            <circle cx="220" cy="100" r="9" fill="#8b5cf6" />
            <text x="220" y="82" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1527</text>
            <text x="220" y="120" textAnchor="middle" fontSize="10" fill="#4b5563">Sá de Miranda</text>
            <text x="220" y="133" textAnchor="middle" fontSize="10" fill="#4b5563">medida nova</text>

            <circle cx="370" cy="100" r="9" fill="#8b5cf6" />
            <text x="370" y="82" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1572</text>
            <text x="370" y="120" textAnchor="middle" fontSize="10" fill="#4b5563">Os Lusíadas</text>
            <text x="370" y="133" textAnchor="middle" fontSize="10" fill="#4b5563">publicados</text>

            <circle cx="510" cy="100" r="9" fill="#ec4899" />
            <text x="510" y="82" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1580</text>
            <text x="510" y="120" textAnchor="middle" fontSize="10" fill="#4b5563">União Ibérica</text>
            <text x="510" y="133" textAnchor="middle" fontSize="10" fill="#4b5563">Morte de Camões</text>

            <text x="350" y="170" textAnchor="middle" fontSize="12" fill="#6366f1" fontWeight="bold">Classicismo Português — Século XVI</text>
          </svg>
          <figcaption>Linha do tempo dos marcos do Classicismo português no século XVI.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Características Gerais</span>
        <h2>2. Os Pilares Estéticos do Classicismo</h2>

        <p>
          O Classicismo reage ao que considerava os "excessos" do Humanismo tardio (redondilhas, temas populares, registro coloquial) e impõe uma estética de rigor, equilíbrio e erudição. Seus principais pilares são a <strong>imitação dos Antigos</strong> (Virgílio, Horácio, Ovídio, Petrarca), a <strong>perfeição formal</strong> (metro, rima, estrutura do soneto), o <strong>universalismo</strong> (temas humanos que transcendem o local e o cotidiano) e o <strong>racionalismo</strong> (controle da emoção pela razão, equilíbrio entre sentimento e intelecto).
        </p>
        <p>
          Na prática poética, isso se traduz no predomínio do soneto de 14 versos decassílabos, organizado em dois quartetos e dois tercetos, com esquema de rimas fixo. O tema amoroso é o mais frequente na lírica, mas é tratado com distância filosófica — o eu lírico analisa a própria paixão, desdobra paradoxos, cita Platão e Petrarca. Na épica, o herói clássico substitui o cavaleiro medieval: é racional, nobre, servidor do bem coletivo, e age em nome de valores universais como glória, pátria e fé.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Equilíbrio e Harmonia</h3>
            <p>Razão e emoção em equilíbrio. Nenhuma das duas deve dominar sozinha. A forma controla o conteúdo.</p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Imitação dos Clássicos</h3>
            <p>Virg&iacute;lio (Eneida), Homero (Ilíada/Odisseia), Ovídio e Petrarca são os modelos que todo classicista deve imitar — e superar.</p>
          </div>
          <div className="lesson-card">
            <span>👤</span>
            <h3>Antropocentrismo</h3>
            <p>O ser humano — sua razão, sua glória, suas contradições — é o centro da reflexão literária, não Deus.</p>
          </div>
          <div className="lesson-card">
            <span>📐</span>
            <h3>Perfeição Formal</h3>
            <p>O soneto decassílabo exige contagem silábica rigorosa, esquema de rimas preciso e estrutura de argumento (tese–desenvolvimento–síntese).</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Universalismo</h3>
            <p>Os temas transcendem o local: amor, glória, morte, pátria, destino — são preocupações humanas universais, não de um indivíduo específico.</p>
          </div>
          <div className="lesson-card">
            <span>🔱</span>
            <h3>Mitologia Greco-Romana</h3>
            <p>Deuses, musas, heróis da Antiguidade são presença constante como alegorias das forças naturais e humanas.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Medida Nova e Velha</span>
        <h2>3. A Revolução Métrica: Sá de Miranda e o Soneto</h2>

        <p>
          <strong>Francisco de Sá de Miranda</strong> (1487–1558) é o grande introdutor do Classicismo em Portugal. Após uma longa estadia na Itália (1521–1526), onde conviveu com os seguidores de Petrarca, retornou com a <em>medida nova</em>: o verso decassílabo (10 sílabas poéticas) e o <strong>soneto</strong> (14 versos organizados em dois quartetos e dois tercetos). Esse novo padrão entrou em choque direto com a <em>medida velha</em> — a tradição ibérica das redondilhas (versos de 5 ou 7 sílabas), herdada dos trovadores medievais e amplamente usada por Gil Vicente.
        </p>
        <p>
          A polêmica foi intensa: poetas conservadores acusavam Sá de Miranda de trair a tradição portuguesa. Mas a medida nova venceu — e Camões a levou ao máximo de perfeição, tanto nos sonetos líricos quanto nas oitavas de <em>Os Lusíadas</em>. Hoje, quando o ENEM apresenta um soneto clássico e pede para identificar características formais, é o legado de Sá de Miranda que está sendo avaliado.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Medida Velha</th>
                <th>Medida Nova</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Origem</td>
                <td>Tradição trovadoresca ibérica medieval</td>
                <td>Itália renascentista (Petrarca)</td>
              </tr>
              <tr>
                <td>Verso predominante</td>
                <td>Redondilha maior (7 síl.) ou menor (5 síl.)</td>
                <td>Decassílabo (10 síl.)</td>
              </tr>
              <tr>
                <td>Forma principal</td>
                <td>Cantigas, vilancetes, trovas, esparças</td>
                <td>Soneto (14 v.: 2 quartetos + 2 tercetos)</td>
              </tr>
              <tr>
                <td>Tom geral</td>
                <td>Popular, oral, musical, festivo</td>
                <td>Erudito, filosófico, reflexivo</td>
              </tr>
              <tr>
                <td>Relação com a música</td>
                <td>Fortemente ligada ao canto</td>
                <td>Poesia para ser lida, não cantada</td>
              </tr>
              <tr>
                <td>Autores representativos</td>
                <td>Trovadores, Gil Vicente, Garcia de Resende</td>
                <td>Sá de Miranda, Camões, Diogo Bernardes</td>
              </tr>
              <tr>
                <td>Recepção inicial</td>
                <td>Consolidada e aceita</td>
                <td>Resistência dos conservadores</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Atenção ENEM:</strong> O ENEM frequentemente apresenta poemas em redondilha maior (7 sílabas) e pede que o candidato identifique a forma métrica. Contar sílabas até a última sílaba tônica é a regra. "Diz-me, Páris, que ganhou" — Pa-ris-que-ga-nhou = 7 sílabas poéticas: redondilha maior. "Amor é fogo que arde sem se ver" — 10 sílabas: decassílabo (medida nova).
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sá de Miranda</span>
        <h2>4. Sá de Miranda: Poeta da Transição e da Moral</h2>

        <p>
          Além de introduzir a medida nova, Sá de Miranda cultivou temas filosófico-morais que anteciparam o espírito da poesia camoniana. Seus sonetos tratam do tempo que passa, da fugacidade da vida, da virtude como valor superior à riqueza e ao poder. Há em Miranda uma tensão típica do Classicismo português: a admiração pela cultura italiana convive com o apego às paisagens e valores portugueses. Ele retornou à sua quinta no Minho e passou os últimos anos longe da corte, tema que permeia sua poesia com o ideal da <em>aurea mediocritas</em> horaciana — a mediana dourada, a vida simples longe dos excessos da corte.
        </p>

        <div className="lesson-highlight">
          <strong>Fragmento de Sá de Miranda — Soneto:</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Que tanto, amigos, pode a novidade!<br/>
            Aqui me trouxe o engenho, aqui me tem<br/>
            a arte que nos chama e nos detém<br/>
            com uma certa e doce suavidade."
          </p>
          <p>
            Note o decassílabo, a reflexão sobre a arte e o engenho (razão criativa), e o tom filosófico — marcas do Classicismo que se distinguem claramente da vivacidade popular das redondilhas medievais.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Luís de Camões</span>
        <h2>5. Camões: O Gênio Bifronte da Lírica e da Épica</h2>

        <p>
          <strong>Luís Vaz de Camões</strong> (c. 1524–1580) é unanimemente reconhecido como o maior poeta de língua portuguesa e um dos maiores da literatura ocidental. Sua vida é quase lendária: soldado que perdeu um olho na batalha de Ceuta, preso em Lisboa, exilado em Goa por 17 anos, náufrago no Mekong (salvou os manuscritos de <em>Os Lusíadas</em>), morreu pobre em Lisboa em 1580 — o mesmo ano em que Portugal perdia a independência para a Espanha, como se o poeta e o reino compartilhassem o mesmo destino.
        </p>
        <p>
          Sua obra divide-se em duas grandes vertentes: a <strong>lírica</strong> (sonetos, odes, elegias, éclogas, redondilhas) e a <strong>épica</strong> (<em>Os Lusíadas</em>). São dois mundos aparentemente distintos — um intimista e subjetivo, o outro grandioso e nacional —, mas unidos pela mesma maestria formal e pelo mesmo senso de tragédia humana. Camões é o único grande classicista que dominou com igual perfeição as duas grandes formas poéticas do século XVI.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>❤️</span>
            <h3>Lírica Amorosa</h3>
            <p>Sonetos que exploram o paradoxo do amor como "fogo que arde sem se ver", "ferida que dói e não se sente". Influência de Petrarca e do neoplatonismo.</p>
          </div>
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Lírica Filosófica</h3>
            <p>Reflexões sobre o tempo, o destino, a mutabilidade — <em>"Mudam-se os tempos, mudam-se as vontades"</em>. Influência estoica e horaciana.</p>
          </div>
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Épica Heroica</h3>
            <p><em>Os Lusíadas</em>: a história das navegações portuguesas como matéria épica, com Vasco da Gama como protagonista e o povo português como herói coletivo.</p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Redondilhas e Autos</h3>
            <p>Camões também escreveu em medida velha (cantigas, redondilhas) e produziu três autos teatrais, revelando domínio de toda a tradição literária do seu tempo.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Soneto mais famoso de Camões — análise:</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Amor é fogo que arde sem se ver;<br/>
            É ferida que dói e não se sente;<br/>
            É um contentamento descontente;<br/>
            É dor que desatina sem doer;"
          </p>
          <p>
            A técnica dos paradoxos ("arde sem se ver", "dói e não se sente", "contentamento descontente") é a marca da lírica camoniana: o amor é <strong>irrepresentável pela lógica</strong>, só pode ser apreendido pela contradição. O decassílabo é rigorosamente mantido. Os dois quartetos definem o amor; os dois tercetos (que se seguem) concluem com uma síntese: quem sente isso não sabe o que quer — e quer tudo ao mesmo tempo.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Os Lusíadas</span>
        <h2>6. Os Lusíadas: Estrutura, Enredo e Significado</h2>

        <p>
          Publicada em 1572, <em>Os Lusíadas</em> é a grande epopeia portuguesa. O título deriva de <strong>Luso</strong>, filho lendário de Baco (ou de Lísias), ancestral mitológico dos portugueses — daí <em>lusíadas</em>: filhos de Luso, isto é, os portugueses. Camões escreve em <strong>oitava rima</strong> (estrofes de 8 versos decassílabos, esquema de rimas ABABABCC), que é o metro épico por excelência do Renascimento italiano, usado por Ariosto e Tasso.
        </p>
        <p>
          A narrativa central é a viagem de Vasco da Gama à Índia (1497–1499). Mas há uma narrativa embutida: durante a viagem, Vasco da Gama narra ao rei de Melinde toda a história de Portugal, desde a fundação do reino por D. Afonso Henriques até o século XVI. A epopeia é, portanto, ao mesmo tempo um relato de aventura marítima e uma história nacional em verso.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento épico</th>
                <th>Função na obra</th>
                <th>Exemplo em Os Lusíadas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Proposição</td>
                <td>Apresentação do tema da epopeia</td>
                <td>Canto I, estrofes 1-3: "As armas e os barões assinalados..."</td>
              </tr>
              <tr>
                <td>Invocação</td>
                <td>Pedido de inspiração às Musas</td>
                <td>Canto I, estrofes 4-5: invocação das ninfas do Tejo</td>
              </tr>
              <tr>
                <td>Dedicatória</td>
                <td>Homenagem ao patrono</td>
                <td>Canto I, estrofes 6-18: a D. Sebastião</td>
              </tr>
              <tr>
                <td>Herói épico</td>
                <td>Protagonista que representa valores coletivos</td>
                <td>Vasco da Gama (e o povo português como herói coletivo)</td>
              </tr>
              <tr>
                <td>Máquina mitológica</td>
                <td>Intervenção dos deuses no enredo</td>
                <td>Vênus favorece, Baco persegue os portugueses</td>
              </tr>
              <tr>
                <td>Episódio intercalado</td>
                <td>Narrativa dentro da narrativa</td>
                <td>História de Inês de Castro (Canto III); Ilha dos Amores (Canto IX)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 240"
            width="700"
            height="240"
            aria-label="Esquema da estrutura narrativa de Os Lusíadas com a máquina mitológica"
          >
            <rect x="0" y="0" width="700" height="240" rx="12" fill="#fdf4ff" />
            <text x="350" y="30" textAnchor="middle" fontSize="14" fill="#7c3aed" fontWeight="bold">Estrutura narrativa de Os Lusíadas (10 cantos)</text>

            {/* Caixa central — viagem de Vasco da Gama */}
            <rect x="220" y="50" width="260" height="55" rx="8" fill="#6366f1" />
            <text x="350" y="73" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Narrativa Principal</text>
            <text x="350" y="90" textAnchor="middle" fontSize="11" fill="#e0e7ff">Viagem de Vasco da Gama à Índia</text>

            {/* Deuses */}
            <rect x="30" y="130" width="180" height="55" rx="8" fill="#7c3aed" />
            <text x="120" y="153" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Máquina Mitológica</text>
            <text x="120" y="170" textAnchor="middle" fontSize="10" fill="#ede9fe">Vênus (favor) × Baco (contra)</text>

            {/* História de Portugal */}
            <rect x="490" y="130" width="180" height="55" rx="8" fill="#0891b2" />
            <text x="580" y="153" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Narrativa Embutida</text>
            <text x="580" y="170" textAnchor="middle" fontSize="10" fill="#cffafe">História de Portugal (narrada</text>

            {/* Episódios */}
            <rect x="220" y="130" width="260" height="55" rx="8" fill="#059669" />
            <text x="350" y="153" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Episódios Intercalados</text>
            <text x="350" y="170" textAnchor="middle" fontSize="10" fill="#d1fae5">Inês de Castro · Ilha dos Amores</text>

            <line x1="350" y1="105" x2="120" y2="130" stroke="#6366f1" strokeWidth="1.5" />
            <line x1="350" y1="105" x2="350" y2="130" stroke="#6366f1" strokeWidth="1.5" />
            <line x1="350" y1="105" x2="580" y2="130" stroke="#6366f1" strokeWidth="1.5" />

            <text x="350" y="215" textAnchor="middle" fontSize="11" fill="#6366f1" fontWeight="bold">Oitava rima · Decassílabo · 10 cantos · 1102 estrofes</text>
          </svg>
          <figcaption>Esquema estrutural de Os Lusíadas: narrativa principal, episódios intercalados e máquina mitológica.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Episódios Fundamentais</span>
        <h2>7. Os Episódios Mais Cobrados no ENEM</h2>

        <p>
          <em>Os Lusíadas</em> é longa (10 cantos, 1102 estrofes), e o ENEM raramente pede que o candidato conheça toda a obra em detalhe. O que ele cobra — e cobra com frequência — são os <strong>episódios canônicos</strong>, que condensam os temas centrais da obra: amor, morte, glória, destino e crítica à expansão colonial.
        </p>

        <div className="lesson-highlight">
          <h3>Episódio de Inês de Castro (Canto III)</h3>
          <p>
            Inês de Castro foi a amante de D. Pedro, herdeiro do trono português, e foi assassinada por conselho de nobres em 1355. Camões narra o episódio com grandeza trágica: Inês intercede pelos filhos diante do rei D. Afonso IV, que, comovido, hesita — mas os conselheiros insistem e a morte acontece. A abertura do trecho — <em>"Antes, porém, que a morte ingrata e feia / The desse o laço que a vida lhe teria..."</em> — é uma das mais belas inversões sintáticas da língua portuguesa. O episódio é frequentemente cobrado como exemplo de <strong>lirismo dentro da épica</strong>.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Episódio do Velho do Restelo (Canto IV)</h3>
          <p>
            Enquanto a frota de Vasco da Gama parte do Tejo, um velho surge entre a multidão e profere um discurso crítico às navegações: censura a ambição, o orgulho e a cobiça que movem os portugueses. <em>"Ó glória de mandar, ó vã cobiça / Desta vaidade a quem chamamos Fama!"</em> O episódio é interpretado como a <strong>voz crítica do próprio Camões</strong> dentro da epopeia — o poeta que canta as glórias de Portugal mas não ignora o preço humano e moral da expansão.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Ilha dos Amores (Cantos IX-X)</h3>
          <p>
            Ao retornar da Índia, os navegadores são recebidos pelas ninfas numa ilha paradisíaca — a Ilha dos Amores, criada por Vênus. O episódio é uma alegoria: a ilha representa a glória e a recompensa merecida pelos heróis. É o momento mais sensual e mitológico da obra, e frequentemente cobrado como exemplo de <strong>máquina mitológica</strong> e de fusão entre o heroico e o erótico na poesia renascentista.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Lírica Camoniana</span>
        <h2>8. A Poesia Lírica: Amor, Tempo e Destino</h2>

        <p>
          Paralela à épica grandiosa, a lírica de Camões mergulha nas contradições do sujeito. Seus sonetos têm como tema central o <strong>amor neoplatônico</strong> — o amor como caminho de elevação espiritual, inspirado em Platão e em Petrarca. O amante contempla a beleza da amada como reflexo da Beleza absoluta; mas essa contemplação é sempre marcada pelo sofrimento, pela impossibilidade, pela perda. Daí os paradoxos camonianos: o amor é "fogo", "ferida", "contentamento descontente".
        </p>
        <p>
          O segundo grande tema lírico é a <strong>mutabilidade</strong> — a constatação de que tudo muda, o tempo dissolve certezas, o mundo não é confiável. O soneto "Mudam-se os tempos, mudam-se as vontades" é o exemplo mais célebre: sete versos descrevem a mudança (o mundo, as pessoas, a natureza), e os três últimos concluem com uma afirmação desoladora — <em>"e o que me era natural se estranha"</em>. É poesia estoica, marcada pela consciência trágica do destino.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema lírico</th>
                <th>Conceito central</th>
                <th>Soneto/Poema de referência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amor contraditório</td>
                <td>O amor é paradoxo: dor e prazer simultâneos</td>
                <td>"Amor é fogo que arde sem se ver"</td>
              </tr>
              <tr>
                <td>Amor neoplatônico</td>
                <td>Amada como reflexo da Beleza ideal</td>
                <td>"Transforma-se o amador na coisa amada"</td>
              </tr>
              <tr>
                <td>Mutabilidade</td>
                <td>O tempo muda tudo, inclusive o sujeito</td>
                <td>"Mudam-se os tempos, mudam-se as vontades"</td>
              </tr>
              <tr>
                <td>Destino e fortuna</td>
                <td>O ser humano está sujeito ao acaso e à sorte</td>
                <td>Diversas elegias e odes</td>
              </tr>
              <tr>
                <td>Saudade e exílio</td>
                <td>Experiência do desterro em Goa; solidão</td>
                <td>Redondilhas ("Sôbolos rios...")</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação Classicismo × Humanismo</span>
        <h2>9. Classicismo versus Humanismo: Diferenças Cruciais</h2>

        <p>
          O ENEM frequentemente cobra a distinção entre Humanismo (séc. XV – início XVI) e Classicismo (séc. XVI). Ambos são renascentistas, ambos valorizem o antropocentrismo — mas há diferenças importantes de forma, tom e foco que o candidato precisa saber identificar. O principal critério é a <strong>forma métrica</strong>: redondilha = Humanismo/medida velha; decassílabo/soneto = Classicismo/medida nova.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Humanismo (séc. XV)</th>
                <th>Classicismo (séc. XVI)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Período</td>
                <td>c. 1418 – c. 1527</td>
                <td>c. 1527 – c. 1580</td>
              </tr>
              <tr>
                <td>Autores-chave</td>
                <td>Gil Vicente, Garcia de Resende</td>
                <td>Sá de Miranda, Camões</td>
              </tr>
              <tr>
                <td>Métrica predominante</td>
                <td>Redondilha (5 ou 7 sílabas)</td>
                <td>Decassílabo (10 sílabas)</td>
              </tr>
              <tr>
                <td>Forma dominante</td>
                <td>Cantiga, vilancete, auto teatral</td>
                <td>Soneto, ode, epopeia</td>
              </tr>
              <tr>
                <td>Tom</td>
                <td>Popular, satírico, alegórico</td>
                <td>Erudito, filosófico, grandioso</td>
              </tr>
              <tr>
                <td>Relação com o clássico</td>
                <td>Influência como horizonte</td>
                <td>Imitação consciente e programática</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Dica ENEM:</strong> Quando o ENEM apresentar um texto em redondilha com sátira social e personagens-tipo, é Gil Vicente (Humanismo). Quando apresentar um soneto decassílabo com paradoxos amorosos ou herói épico com mitologia greco-romana, é Camões (Classicismo). Essa distinção formal responde a mais da metade das questões sobre literatura portuguesa quinhentista.
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese Visual</span>
        <h2>10. Mapa do Classicismo Português</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 260"
            width="700"
            height="260"
            aria-label="Mapa conceitual do Classicismo português com autores, formas e temas"
          >
            <rect x="0" y="0" width="700" height="260" rx="12" fill="#f8fafc" />

            <rect x="260" y="15" width="180" height="50" rx="9" fill="#6366f1" />
            <text x="350" y="37" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">CLASSICISMO</text>
            <text x="350" y="53" textAnchor="middle" fontSize="11" fill="#e0e7ff">Portugal — Séc. XVI</text>

            <line x1="180" y1="65" x2="350" y2="65" stroke="#6366f1" strokeWidth="1.5" />
            <line x1="520" y1="65" x2="350" y2="65" stroke="#6366f1" strokeWidth="1.5" />
            <line x1="180" y1="65" x2="180" y2="110" stroke="#6366f1" strokeWidth="1.5" />
            <line x1="350" y1="65" x2="350" y2="110" stroke="#6366f1" strokeWidth="1.5" />
            <line x1="520" y1="65" x2="520" y2="110" stroke="#6366f1" strokeWidth="1.5" />

            <rect x="60" y="110" width="240" height="55" rx="8" fill="#8b5cf6" />
            <text x="180" y="132" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Sá de Miranda</text>
            <text x="180" y="150" textAnchor="middle" fontSize="10" fill="#ede9fe">Medida nova · Soneto · Éclogas</text>

            <rect x="250" y="110" width="200" height="55" rx="8" fill="#6366f1" />
            <text x="350" y="132" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Camões — Lírica</text>
            <text x="350" y="150" textAnchor="middle" fontSize="10" fill="#e0e7ff">Sonetos · Odes · Redondilhas</text>

            <rect x="400" y="110" width="240" height="55" rx="8" fill="#0891b2" />
            <text x="520" y="132" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Camões — Épica</text>
            <text x="520" y="150" textAnchor="middle" fontSize="10" fill="#cffafe">Os Lusíadas · 10 cantos · Oitava rima</text>

            <line x1="180" y1="165" x2="180" y2="200" stroke="#8b5cf6" strokeWidth="1.5" />
            <line x1="350" y1="165" x2="350" y2="200" stroke="#6366f1" strokeWidth="1.5" />
            <line x1="520" y1="165" x2="520" y2="200" stroke="#0891b2" strokeWidth="1.5" />

            <rect x="50" y="200" width="200" height="45" rx="6" fill="#c4b5fd" />
            <text x="150" y="218" textAnchor="middle" fontSize="10" fill="#3b0764">Temas: tempo, virtude,</text>
            <text x="150" y="232" textAnchor="middle" fontSize="10" fill="#3b0764">vida simples (aurea mediocritas)</text>

            <rect x="265" y="200" width="170" height="45" rx="6" fill="#a5b4fc" />
            <text x="350" y="218" textAnchor="middle" fontSize="10" fill="#1e1b4b">Amor paradoxal · Mutabilidade</text>
            <text x="350" y="232" textAnchor="middle" fontSize="10" fill="#1e1b4b">Neoplatonismo · Destino</text>

            <rect x="450" y="200" width="200" height="45" rx="6" fill="#bae6fd" />
            <text x="550" y="218" textAnchor="middle" fontSize="10" fill="#0c4a6e">Glória nacional · Mitologia</text>
            <text x="550" y="232" textAnchor="middle" fontSize="10" fill="#0c4a6e">Inês de Castro · Velho do Restelo</text>
          </svg>
          <figcaption>Mapa conceitual dos principais autores, obras e temas do Classicismo português.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Síntese para o ENEM</h3>
          <ul>
            <li><strong>Classicismo = Renascimento em Portugal</strong>, século XVI, introduzido por Sá de Miranda.</li>
            <li><strong>Medida nova:</strong> decassílabo, soneto (2 quartetos + 2 tercetos) — introduzida de Itália.</li>
            <li><strong>Camões lírico:</strong> paradoxos amorosos, mutabilidade, neoplatonismo, destino.</li>
            <li><strong>Os Lusíadas (1572):</strong> epopeia, oitava rima, viagem de Vasco da Gama, herói coletivo.</li>
            <li><strong>Episódios canônicos:</strong> Inês de Castro, Velho do Restelo, Ilha dos Amores.</li>
            <li><strong>Máquina mitológica:</strong> Vênus (favorável) × Baco (contrário aos portugueses).</li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 11 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Diogo Bernardes e outros árcades</span>
        <h2>11. Outros Poetas Classicistas: Diogo Bernardes e a Escola do Tejo</h2>

        <p>
          Além de Sá de Miranda e Camões, o Classicismo português produziu outros poetas de grande qualidade que costumam ser esquecidos nos programas escolares — mas que o ENEM às vezes menciona como contexto. <strong>Diogo Bernardes</strong> (c. 1530–c. 1600) é o mais importante deles: poeta bucólico e lírico que cultivou o soneto e a éclo­ga com maestria, sob o pseudônimo pastoril de <em>Lima</em> (referência ao rio onde nasceu, no Minho). Sua obra se divide em <em>O Lima</em> (1596) e <em>Flores do Lima</em> (1597) — dois livros de poesia que revelam um classicismo mais sereno e menos filosófico que o de Camões.
        </p>
        <p>
          Outro nome relevante é <strong>António Ferreira</strong> (1528–1569), conhecido pela tragédia <em>Castro</em> — a maior peça do teatro português classicista, que dramatiza a história de Inês de Castro (o mesmo episódio que Camões narra n'<em>Os Lusíadas</em>, Canto III). Ferreira escreveu exclusivamente em português — recusando o castelhano, que era a língua de prestígio em muitas cortes ibéricas — e é considerado um dos primeiros defensores explícitos do português como língua de cultura.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>Período</th>
                <th>Principais obras</th>
                <th>Característica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sá de Miranda</td>
                <td>1487–1558</td>
                <td>Sonetos, éclogas, cartas</td>
                <td>Introdutor da medida nova; moral e filosófico</td>
              </tr>
              <tr>
                <td>Luís de Camões</td>
                <td>c. 1524–1580</td>
                <td><em>Os Lusíadas</em>, Rimas, Autos</td>
                <td>Ápice do Classicismo; lírica + épica</td>
              </tr>
              <tr>
                <td>Diogo Bernardes</td>
                <td>c. 1530–c. 1600</td>
                <td><em>O Lima</em>, <em>Flores do Lima</em></td>
                <td>Bucolismo e lirismo; escola do Tejo/Lima</td>
              </tr>
              <tr>
                <td>António Ferreira</td>
                <td>1528–1569</td>
                <td><em>Castro</em> (tragédia), <em>Poemas Lusitanos</em></td>
                <td>Teatro classicista; defensor do português</td>
              </tr>
              <tr>
                <td>Francisco de Andrade</td>
                <td>1540–1614</td>
                <td><em>O Primeiro Cerco de Diu</em></td>
                <td>Épica histórica na tradição camoniana</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Inês de Castro na literatura classicista:</strong>
          <p>
            A história de Inês de Castro — amada de D. Pedro, assassinada por ordem de D. Afonso IV em 1355 — é o tema literário mais recorrente do Classicismo português. Aparece como episódio trágico n'<em>Os Lusíadas</em> de Camões (Canto III, uma das passagens mais antológicas da literatura em língua portuguesa), como tragédia dramática na <em>Castro</em> de António Ferreira, e em dezenas de sonetos anônimos. No ENEM, quando aparece Inês de Castro, o contexto é sempre o Classicismo — seja na lírica seja na épica.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Inês de Castro — trecho d'Os Lusíadas (Camões, Canto III)</h3>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Estavas, linda Inês, posta em sossego,<br/>
            De teus anos colhendo doce fruto,<br/>
            Naquele engano da alma, ledo e cego,<br/>
            Que a Fortuna não deixa durar muito..."
          </p>
          <p>
            O verso inicia com uma imagem de paz e juventude — Inês está <em>sossegada</em>, colhendo o <em>doce fruto</em> da vida — e o segundo verso já anuncia a queda: a Fortuna não deixa a felicidade durar. A tragédia está anunciada antes de acontecer. O <strong>decassílabo</strong>, a <strong>oitava rima</strong> e a <strong>melancolia filosófica</strong> são a assinatura camoniana que o ENEM frequentemente pede para identificar.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 12 — A HERANÇA DO CLASSICISMO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>A Herança do Classicismo</h2>
        <p>
          O impacto do Classicismo português na literatura lusófona é estruturante: o <strong>soneto decassílabo</strong> tornou-se a forma poética de prestígio por séculos, usada por simbolistas, modernistas e contemporâneos. A dicção petrarquiana do amor como contradição interior — doce dor, prazer que martiriza — reaparece em Fernando Pessoa, em Drummond e em Sophia de Mello Breyner Andresen. Os procedimentos retóricos da épica camoniana — a invocação da musa, os episódios interpolados, a alegoria mitológica — moldaram toda a tradição épica e neo-épica da língua. A <em>Castro</em> de António Ferreira, redescoberta no século XIX, influenciou o teatro realista português. E <em>Os Lusíadas</em>, ao elevarem o português ao nível do latim e do grego como língua épica, realizaram o programa humanista de dotar a língua vernácula de dignidade literária máxima.
        </p>
        <p>
          A tradição do <strong>soneto camoniano de paradoxo amoroso</strong> — que define o amor simultaneamente como fogo e gelo, prisão e liberdade, vida e morte — traversa o tempo e continua viva na literatura brasileira. Machado de Assis, Olavo Bilac e Augusto dos Anjos usaram o soneto como veículo preferencial. No século XX, Manuel Bandeira e Vinicius de Moraes renovaram a forma sem abandoná-la. O soneto é hoje uma das formas mais estudadas no ENEM exatamente por sua longevidade e versatilidade — e todo soneto que aparece em provas de vestibular tem em Camões seu ancestral mais ilustre.
        </p>
        <p>
          Merece ainda atenção o fato de que Camões viveu uma vida de extremos que reforça os paradoxos de sua lírica: combatente em Ceuta (onde perdeu o olho direito em batalha, c. 1549), preso em Lisboa, exilado no Oriente por mais de dezessete anos, autor da maior epopeia lusitana e falecido na miséria em 1580. Essa biografia extrema — glória literária, miséria material — tornou Camões uma figura mítica da cultura portuguesa, o poeta que cantou as grandezas de Portugal enquanto ele próprio era esquecido por Portugal. Essa ironia biográfica é frequentemente explorada em questões de ENEM que apresentam poemas líricos camonianos de tom nostálgico ou amargo, pedindo ao candidato que relacione a voz do eu lírico à condição histórica do autor.
        </p>
        <p>
          O Classicismo foi, em síntese, o movimento que transformou a literatura portuguesa de regional em universal: com a língua do povo de Lisboa, Camões escreveu um poema que rivalizava com Virgílio e ainda tinha algo que Virgílio não tinha — a autenticidade histórica de um feito real (a chegada de Vasco da Gama à Índia). Essa fusão entre epopeia clássica e fato histórico é a grande conquista do Classicismo português e o legado mais duradouro de Luís de Camões.
        </p>
        <p>
          No ENEM e nos vestibulares, o Classicismo é cobrado predominantemente a partir de Camões: seus sonetos (a antítese amorosa, o neoplatonismo), a estrutura d'<em>Os Lusíadas</em> (canto, oitava rima, plano da narração/mitológico/histórico) e os episódios antológicos (Inês de Castro, Velho do Restelo, Adamastor, Ilha dos Amores). Conhecer pelo menos dois desses episódios e as características da medida nova vs. velha é suficiente para responder a maioria das questões com segurança.
        </p>
      </section>

      {/* ── SEÇÃO 13 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Introdução da Medida Nova em Portugal"
          statement={
            <p>
              O Classicismo português foi inaugurado pela chegada da <em>medida nova</em> à poesia lusitana. Assinale a alternativa que apresenta corretamente o autor responsável por essa inovação e a forma poética central que ela introduziu:
            </p>
          }
          options={[
            { letter: "a", text: "Gil Vicente introduziu o soneto decassílabo a partir das peças teatrais que escreveu para a corte de D. Manuel I." },
            { letter: "b", text: "Sá de Miranda trouxe da Itália o soneto e o verso decassílabo, inaugurando a medida nova em oposição à medida velha das redondilhas.", correct: true },
            { letter: "c", text: "Luís de Camões inventou o soneto a partir de modelos trovadorescos medievais portugueses." },
            { letter: "d", text: "Garcia de Resende introduziu o decassílabo no Cancioneiro Geral, antecipando o Classicismo em mais de trinta anos." },
          ]}
          resolution={
            <p>
              Sá de Miranda passou anos na Itália (1521–1526) e ao retornar trouxe o modelo petrarquiano do soneto e o verso decassílabo — a chamada <em>medida nova</em>, em contraste com a <em>medida velha</em> das redondilhas medievais (5 ou 7 sílabas). Gil Vicente é do Humanismo e usava a medida velha. Camões foi quem levou a medida nova ao apogeu, mas não foi o inventor. Garcia de Resende compilou o Cancioneiro Geral (1516) em medida velha, antes da chegada de Sá de Miranda. A alternativa B é a única correta.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. A Lírica Amorosa Camoniana"
          statement={
            <p>
              Leia o quarteto inicial de Camões:<br /><br />
              <em>"Amor é fogo que arde sem se ver;<br />
              É ferida que dói e não se sente;<br />
              É um contentamento descontente;<br />
              É dor que desatina sem doer;"</em><br /><br />
              O recurso estilístico central desses versos e o tema que eles expressam são, respectivamente:
            </p>
          }
          options={[
            { letter: "a", text: "Hipérbole e a grandiosidade da pátria portuguesa." },
            { letter: "b", text: "Paradoxo (oxímoro) e a natureza contraditória e irracional do amor.", correct: true },
            { letter: "c", text: "Metáfora simples e a descrição realista de uma ferida física do eu lírico." },
            { letter: "d", text: "Anáfora e a defesa do racionalismo iluminista do século XVIII." },
          ]}
          resolution={
            <p>
              O recurso central é o <strong>paradoxo</strong> (ou oxímoro): construções que unem termos contraditórios — "arde sem se ver" (fogo sem calor visível), "dói e não se sente" (ferida sem dor consciente), "contentamento descontente" (satisfação e insatisfação simultâneas). Esses paradoxos expressam a <strong>natureza contraditória do amor</strong>, que é ao mesmo tempo prazer e sofrimento, desejo e tortura — tema central da lírica neoplatônica camoniana. Hipérbole (A) seria um exagero quantitativo, não contraditório. Metáfora simples (C) não captura a contradição. O século XVIII (D) é o do Arcadismo, não de Camões.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. O Velho do Restelo e a Crítica Interna"
          statement={
            <p>
              No Canto IV de <em>Os Lusíadas</em>, quando a frota de Vasco da Gama parte do Tejo, um velho ergue a voz e diz:<br /><br />
              <em>"Ó glória de mandar, ó vã cobiça<br />
              Desta vaidade a quem chamamos Fama!"</em><br /><br />
              A presença do Velho do Restelo numa epopeia que celebra as navegações portuguesas representa:
            </p>
          }
          options={[
            { letter: "a", text: "Um erro estrutural de Camões, que contraditoriamente inseriu um personagem contrário ao tema central da obra." },
            { letter: "b", text: "A voz crítica que questiona o preço humano, moral e social das navegações, revelando a complexidade ideológica da obra — que celebra e ao mesmo tempo problematiza a expansão colonial.", correct: true },
            { letter: "c", text: "Uma alegoria religiosa que representa a Igreja Católica oposta às navegações, seguindo a posição histórica do Vaticano." },
            { letter: "d", text: "Um recurso puramente cômico para aliviar a tensão épica, sem qualquer conteúdo crítico ou filosófico." },
          ]}
          resolution={
            <p>
              O Episódio do Velho do Restelo é uma das passagens mais complexas e debatidas de <em>Os Lusíadas</em>. Numa epopeia de exaltação nacional, Camões insere uma voz que <strong>condena a ambição, a cobiça e o orgulho</strong> que movem as navegações. Isso não é um erro: é uma marca da maturidade artística de Camões, que constrói uma obra que ao mesmo tempo exalta e critica a expansão portuguesa. Muitos críticos interpretam o Velho como a voz do próprio poeta — que participou das guerras coloniais em Goa, viu seus companheiros morrerem, e carregou uma visão trágica da glória imperial. A alternativa B captura essa tensão; as demais simplificam ou distorcem o episódio.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Soneto e o Tema da Mutabilidade"
          statement={
            <p>
              Leia o soneto de Camões:<br /><br />
              <em>"Mudam-se os tempos, mudam-se as vontades,<br />
              Muda-se o ser, muda-se a confiança;<br />
              Todo o mundo é composto de mudança,<br />
              Tomando sempre novas qualidades.<br /><br />
              Continuamente vemos novidades,<br />
              Diferentes em tudo da esperança;<br />
              Do mal ficam as mágoas na lembrança,<br />
              E do bem, se algum houve, as saudades.<br /><br />
              O tempo cobre o chão de verde manto,<br />
              Que já foi coberto de neve fria,<br />
              E em mim converte em choro o doce canto.<br /><br />
              E, afora este mudar-se cada dia,<br />
              Outra mudança faz de espanto:<br />
              Que não se muda já como soía."</em><br /><br />
              O tema central desse soneto e o movimento que ele exemplifica com perfeição são:
            </p>
          }
          options={[
            { letter: "a", text: "O patriotismo português e o Classicismo épico, pois o poema descreve as mudanças geográficas trazidas pelas navegações." },
            { letter: "b", text: "A mutabilidade universal e a permanência da dor pessoal, exemplificando a lírica filosófica do Classicismo camoniano.", correct: true },
            { letter: "c", text: "A idealização da natureza campestre e o Arcadismo, com o verde e a neve evocando o locus amoenus árcade." },
            { letter: "d", text: "A crítica social ao regime colonial português, em que as 'mudanças' representam as transformações impostas aos povos colonizados." },
          ]}
          resolution={
            <p>
              O soneto desenvolve o tema da <strong>mutabilidade universal</strong>: tudo muda — os tempos, as vontades, o ser, a confiança, as estações (verde/neve). Mas a última estrofe revela a angústia do sujeito: a mudança que mais o perturba não é a do mundo, mas a dele próprio — <em>"que não se muda já como soía"</em> (que já não muda como costumava). Ele perdeu a capacidade de renovação; carrega apenas a mágoa. Esse é o tema da <strong>mutabilidade associada à dor pessoal</strong>, central na lírica filosófica de Camões. O poema é um soneto clássico em decassílabo (2 quartetos + 2 tercetos), confirmando o Classicismo. Não é Arcadismo (C), que seria do séc. XVIII, nem épica (A), nem crítica colonial (D).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Os Lusíadas e o Herói Épico"
          statement={
            <p>
              Um professor de literatura afirma: <em>"Em Os Lusíadas, Camões opera uma subversão genial: ao mesmo tempo que segue as convenções da epopeia clássica — proposição, invocação, herói, máquina mitológica —, ele as reinventa ao colocar não um herói individual e semidivino, mas um herói coletivo e histórico."</em><br /><br />
              Com base nessa afirmação, identifique a alternativa que melhor explica a inovação camoniana em relação aos modelos épicos greco-latinos:
            </p>
          }
          options={[
            { letter: "a", text: "Camões eliminou completamente a mitologia greco-romana, substituindo-a por elementos da religiosidade cristã medieval." },
            { letter: "b", text: "Diferentemente de Aquiles (Ilíada) ou Eneias (Eneida), Vasco da Gama não é um semideus individual: é a representação de um povo inteiro — os portugueses —, tornando a epopeia uma celebração nacional coletiva.", correct: true },
            { letter: "c", text: "A inovação foi abandonar a forma épica tradicional para adotar o soneto decassílabo como veículo de narrativa heroica." },
            { letter: "d", text: "Camões inovou ao retirar todos os elementos heroicos e transformar Os Lusíadas num relato histórico objetivo e desprovido de elementos ficcionais." },
          ]}
          resolution={
            <p>
              A grande inovação de Camões está na <strong>coletivização do herói épico</strong>. Nas epopeias greco-latinas, o herói é um indivíduo de linhagem semidivina: Aquiles filho de Tétis, Eneias filho de Vênus, Odisseu protegido de Atena. Em <em>Os Lusíadas</em>, Vasco da Gama é o protagonista nominal, mas os versos da Proposição deixam claro: <em>"E os que por obras valerosas / Se vão da lei da Morte libertando"</em> — o sujeito são os <em>barões portugueses</em>, o povo inteiro. Vênus e Baco (mitologia) continuam presentes (A está errada). A forma é oitava rima épica, não soneto (C está errada). A ficção mitológica é central (D está errada). A alternativa B captura a inovação camoniana com precisão.
            </p>
          }
        />
      </section>
    </article>
  );
}
