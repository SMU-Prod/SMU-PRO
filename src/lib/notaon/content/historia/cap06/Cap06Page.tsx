"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap06Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 6</span>
          <h1>Mesopotâmia</h1>
          <p>
            Entre os rios Tigre e Eufrates, na planície aluvial do atual Iraque, nasceu o que muitos
            historiadores chamam de "berço da civilização": a Mesopotâmia. Foi aqui que surgiram as
            primeiras cidades, a primeira escrita, o primeiro código de leis escrito, os primeiros
            impérios e algumas das mais duradouras contribuições humanas — da matemática sexagesimal
            que ainda usamos (60 minutos numa hora, 360 graus num círculo) ao Épico de Gilgamesh,
            primeira obra literária da humanidade. Entender a Mesopotâmia é entender as origens do
            Estado, do direito, da urbanização e da escrita — temas que o ENEM aborda frequentemente.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Geografia</span>
        <h2>1. "Entre Rios": Localização e Ambiente</h2>
        <p>
          O nome <em>Mesopotâmia</em> vem do grego <em>mésos</em> (meio) + <em>potamós</em> (rio):
          "terra entre rios". Os dois rios que dão nome à região — o <strong>Tigre</strong> e o
          <strong> Eufrates</strong> — nascem nas montanhas da Anatólia (atual Turquia), correm
          paralelamente em direção ao sudeste e desembocam juntos no Golfo Pérsico. Hoje essa área
          corresponde principalmente ao Iraque, com porções da Síria, Turquia e Irã.
        </p>
        <p>
          A planície mesopotâmica difere fundamentalmente do Egito em dois aspectos cruciais. Primeiro,
          as cheias do Tigre e do Eufrates são irregulares e imprevisíveis — torrenciais na primavera,
          com risco de inundações devastadoras, escassas em outros períodos — tornando a irrigação
          artificial não apenas útil, mas absolutamente indispensável para a agricultura. Segundo,
          a planície carece de barreiras naturais: diferentemente do Egito, protegido pelo deserto
          e pelo Mediterrâneo, a Mesopotâmia é uma terra aberta, vulnerável a invasões de todas as
          direções — o que explica a constante sucessão de povos e impérios que a caracterizou ao longo
          de milênios. A combinação de fertilidade potencial com insegurança estrutural foi um dos
          motores que impulsionaram a organização estatal e militar da região.
        </p>

        {/* SVG 1 — Mapa da Mesopotâmia */}
        <div className="lesson-figure">
          <svg viewBox="0 0 500 400" width="500" height="400" aria-label="Mapa da Mesopotâmia">
            <rect x="0" y="0" width="500" height="400" fill="#f9f3e3" rx="6" />
            {/* Golfo Pérsico */}
            <ellipse cx="390" cy="360" rx="80" ry="30" fill="#aed6f1" />
            <text x="390" y="365" textAnchor="middle" fontSize="11" fill="#1a5276">Golfo Pérsico</text>
            {/* Mar Mediterrâneo */}
            <rect x="0" y="0" width="80" height="200" fill="#aed6f1" rx="4" />
            <text x="40" y="100" textAnchor="middle" fontSize="10" fill="#1a5276" transform="rotate(-90,40,100)">Mar Mediterrâneo</text>
            {/* Montanhas Anatólia */}
            <path d="M80,0 L200,0 L220,60 L80,60 Z" fill="#c8a882" />
            <text x="150" y="35" textAnchor="middle" fontSize="11" fill="#6e4e2e">Anatólia</text>
            {/* Eufrates */}
            <path d="M180,60 C200,100 220,150 260,200 C290,240 320,290 360,340" stroke="#3498db" strokeWidth="4" fill="none" />
            <text x="265" y="195" fontSize="11" fill="#1a5276" transform="rotate(50,265,195)">Eufrates</text>
            {/* Tigre */}
            <path d="M240,60 C250,100 270,160 300,220 C330,270 360,310 380,340" stroke="#2980b9" strokeWidth="3" fill="none" />
            <text x="315" y="225" fontSize="11" fill="#1a5276" transform="rotate(60,315,225)">Tigre</text>
            {/* Ur */}
            <circle cx="320" cy="310" r="7" fill="#e74c3c" />
            <text x="332" y="313" fontSize="11" fill="#c0392b" fontWeight="bold">Ur</text>
            {/* Uruk */}
            <circle cx="305" cy="280" r="7" fill="#e74c3c" />
            <text x="317" y="283" fontSize="11" fill="#c0392b">Uruk</text>
            {/* Babilônia */}
            <circle cx="270" cy="220" r="9" fill="#8e44ad" />
            <text x="283" y="223" fontSize="12" fill="#6c3483" fontWeight="bold">Babilônia</text>
            {/* Nínive */}
            <circle cx="340" cy="110" r="8" fill="#27ae60" />
            <text x="352" y="113" fontSize="11" fill="#1e8449" fontWeight="bold">Nínive</text>
            {/* Acáde */}
            <circle cx="280" cy="185" r="6" fill="#d35400" />
            <text x="290" y="188" fontSize="10" fill="#a04000">Acáde</text>
            {/* Nippur */}
            <circle cx="290" cy="250" r="6" fill="#7f8c8d" />
            <text x="300" y="253" fontSize="10" fill="#566573">Nippur</text>
            {/* Lagash */}
            <circle cx="330" cy="295" r="6" fill="#7f8c8d" />
            <text x="340" y="298" fontSize="10" fill="#566573">Lagash</text>
            {/* Região mesopotâmica */}
            <path d="M200,80 L360,80 L400,330 L250,350 L200,80" fill="#e8d8a0" opacity="0.4" />
            <text x="260" y="150" textAnchor="middle" fontSize="13" fill="#6e4e2e" fontWeight="bold">MESOPOTÂMIA</text>
            {/* Legenda */}
            <circle cx="30" cy="320" r="6" fill="#e74c3c" />
            <text x="42" y="324" fontSize="10" fill="#333">Cidades sumérias</text>
            <circle cx="30" cy="340" r="6" fill="#8e44ad" />
            <text x="42" y="344" fontSize="10" fill="#333">Babilônia</text>
            <circle cx="30" cy="360" r="6" fill="#27ae60" />
            <text x="42" y="364" fontSize="10" fill="#333">Nínive (Assíria)</text>
            <text x="250" y="392" textAnchor="middle" fontSize="11" fill="#555" fontStyle="italic">Mapa esquemático da Mesopotâmia antiga</text>
          </svg>
          <p className="lesson-figure-caption">A Mesopotâmia entre o Tigre e o Eufrates, com as principais cidades das civilizações que ali se sucederam.</p>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sumérios</span>
        <h2>2. Os Sumérios: Cidades-Estado, Escrita e Inovação</h2>
        <p>
          Os <strong>sumérios</strong> (c. 3500–2350 a.C.) foram os primeiros habitantes historicamente
          documentados da Mesopotâmia meridional e são creditados com algumas das invenções mais
          impactantes da história humana. Sua origem é debatida — possivelmente chegaram ao sul da
          Mesopotâmia por volta de 4000 a.C. —, mas sua contribuição é indiscutível.
        </p>
        <p>
          A organização política suméria baseava-se nas <strong>cidades-Estado</strong> independentes:
          cada cidade — Ur, Uruk, Lagash, Nippur, Eridu, Kish — era governada por um
          <em> lugal</em> (literalmente "grande homem", ou rei) e possuía seu próprio deus protetor,
          exército, sistema de tributação e administração. Essas cidades rivalizavam entre si,
          formando alianças instáveis e travando guerras frequentes pelo controle de canais de irrigação
          e terras férteis. A ausência de uma autoridade central unificada era a principal fraqueza
          política dos sumérios — vulnerabilidade que os acadianos explorariam.
        </p>
        <p>
          A invenção mais extraordinária dos sumérios foi a <strong>escrita cuneiforme</strong>
          (c. 3400–3200 a.C.) — o sistema de escrita mais antigo do mundo. Nascida como sistema
          contábil para registrar transações de grãos e gado nos templos, a cuneiforme evoluiu
          progressivamente de pictogramas (desenhos representando objetos) para um sistema de
          cunhas imprimidas com um estilete de junco em tabletes de argila úmida, representando
          tanto logogramas quanto sílabas. A palavra "cuneiforme" vem do latim <em>cuneus</em>
          (cunha) — referência à forma dos sinais impressos.
        </p>
        <p>
          Os sumérios também inventaram ou aperfeiçoaram: a <strong>roda</strong> (c. 3500 a.C.,
          primeiro usada para cerâmica, depois adaptada ao transporte), o <strong>carro de duas
          rodas</strong>, o <strong>arado</strong> de metal, o sistema de irrigação em larga escala,
          a cerveja (as primeiras receitas conhecidas são sumérias!), e o vinho. Em arquitetura,
          construíram os <strong>zigurates</strong> — templos-torre em forma de pirâmide escalonada
          que serviam como centro religioso, administrativo e econômico da cidade.
        </p>
        <div className="lesson-highlight">
          <h3>O Zigurate de Ur</h3>
          <p>
            O Zigurate de Ur (c. 2100 a.C.), construído pelo rei Ur-Namu, é o mais bem preservado
            dos zigurates mesopotâmicos. Com três terraços sobrepostos e um templo no topo dedicado
            ao deus lunar Nanna, servia como depósito, escola (os <em>edubba</em>, "casas das
            tabuletas"), banco e centro de distribuição de alimentos. Sua estrutura inspirou
            gerações de estudiosos da Bíblia a identificá-lo com a Torre de Babel.
          </p>
        </div>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Matemática</span>
        <h2>3. O Sistema Sexagesimal: Herança que Usamos Todo Dia</h2>
        <p>
          Entre os legados mais duradouros dos sumérios está o <strong>sistema matemático
          sexagesimal</strong>, baseado no número 60 como unidade fundamental. Por que 60?
          Provavelmente pela riqueza em divisores: 60 é divisível por 1, 2, 3, 4, 5, 6, 10, 12, 15,
          20, 30 e 60, tornando os cálculos de frações muito mais simples do que num sistema decimal.
          Os sumérios também usavam uma base 10 internamente ao sistema, criando uma combinação
          de bases 10 e 60.
        </p>
        <p>
          A herança desse sistema é ubíqua na vida moderna, embora raramente percebida: uma hora tem
          60 minutos, um minuto tem 60 segundos, um círculo tem 360 graus (6 × 60), um dia tem 24 horas
          (sistema derivado dos 12 meses babilônicos e dos 2 × 12 horas do dia/noite). Os babilônios
          desenvolveram ainda a noção de posição dentro do número (valor posicional), fundamental para
          a matemática moderna, e conheciam o que chamamos de Teorema de Pitágoras mais de mil anos
          antes do filósofo grego.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Herança Sexagesimal</th>
                <th>Origem</th>
                <th>Uso Atual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>60 minutos = 1 hora</td>
                <td>Sumérios/Babilônios</td>
                <td>Medição do tempo universal</td>
              </tr>
              <tr>
                <td>60 segundos = 1 minuto</td>
                <td>Sumérios/Babilônios</td>
                <td>Medição do tempo universal</td>
              </tr>
              <tr>
                <td>360 graus no círculo</td>
                <td>Babilônios</td>
                <td>Geometria, navegação, trigonometria</td>
              </tr>
              <tr>
                <td>24 horas no dia</td>
                <td>Derivado dos 12 meses</td>
                <td>Calendário e relógio universais</td>
              </tr>
              <tr>
                <td>12 meses no ano</td>
                <td>Babilônios/Caldeus</td>
                <td>Calendário gregoriano</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Acadianos</span>
        <h2>4. Sargão de Acáde e o Primeiro Império da História</h2>
        <p>
          Por volta de 2350 a.C., um homem de origem semítica e obscura — que dizia ter sido filho de
          uma sacerdotisa e adotado por um irrigador — tomou o poder em Kish e começou uma campanha
          de conquista sem precedentes. Seu nome era <strong>Sargão de Acáde</strong> (c. 2334–2279 a.C.)
          e ele criaria o que os historiadores reconhecem como o <strong>primeiro império da história</strong>.
        </p>
        <p>
          Em cerca de 50 anos de campanhas militares, Sargão unificou todas as cidades-Estado sumérias
          sob seu controle, estendeu seu domínio até a Síria, Anatólia e Pérsia, e estabeleceu a
          capital em Acáde (localização exata ainda desconhecida). O Império Acadiano (c. 2350–2150 a.C.)
          foi a primeira estrutura política a exercer controle centralizado sobre uma vasta área
          geográfica, com um exército permanente, sistema de tributação unificado, rede de governadores
          nomeados pelo centro e língua administrativa comum (o acadiano, língua semítica que gradualmente
          suplantou o sumério). Após a morte de Sargão, o império continuou sob seus sucessores —
          incluindo o notável Naram-Sin, que se autoproclamou deus — antes de entrar em colapso por
          volta de 2150 a.C., provavelmente em virtude de invasões dos Guteus e de uma seca prolongada.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Babilônios</span>
        <h2>5. Hamurabi e o Código de Leis</h2>
        <p>
          Após o colapso acadiano e o renascimento sumério da Terceira Dinastia de Ur (c. 2112–2004 a.C.),
          foi a vez dos amoritas — povo semítico do oeste — tomarem o controle da Mesopotâmia.
          Em Babilônia, na margem do Eufrates, a Primeira Dinastia Babilônica produziu o governante
          mais famoso de toda a história mesopotâmica: <strong>Hamurabi</strong> (r. 1792–1750 a.C.).
        </p>
        <p>
          Hamurabi não foi apenas um conquistador habilidoso — ele reunificou a Mesopotâmia após
          décadas de fragmentação política. Mas seu legado mais duradouro foi o <strong>Código de
          Hamurabi</strong>, mandado gravar numa estela de diorito negro de 2,25 m de altura que
          é hoje uma das peças mais famosas do Museu do Louvre, em Paris. O código contém
          <strong> 282 leis</strong> que regulam desde transações comerciais e contratos de trabalho
          até crimes violentos, divórcio, adoção e construção. Sua lógica de punição é talional —
          a famosa lei de "olho por olho, dente por dente" —, mas com uma distinção crucial: a
          severidade da pena variava de acordo com a classe social da vítima e do agressor.
          Um homem livre que machucasse outro homem livre era punido com a mesma lesão; um
          homem livre que machucasse um escravo pagava apenas uma multa financeira.
        </p>
        <div className="lesson-highlight">
          <h3>Trecho do Código de Hamurabi</h3>
          <p>
            "Lei 196: Se um homem livre destruiu o olho de outro homem livre, seu próprio olho
            será destruído. Lei 198: Se ele destruiu o olho de um musquenum [homem dependente]
            ou quebrou o osso de um musquenum, pagará uma mina de prata. Lei 199: Se ele destruiu
            o olho de um escravo de um homem livre ou quebrou o osso do escravo de um homem livre,
            pagará a metade do preço do escravo." — A distinção de classes na lei é explícita e
            revela a estrutura social babilônica.
          </p>
        </div>
        <p>
          Os babilônios também avançaram notavelmente em <strong>astronomia</strong>: criaram o
          zodíaco de 12 constelações, registraram com precisão os movimentos de planetas, previram
          eclipses e desenvolveram tabelas de posições celestes com séculos de observações sistemáticas
          — base sobre a qual os gregos construiriam a astronomia científica.
        </p>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Assírios</span>
        <h2>6. O Império Assírio: Militarismo e Cultura</h2>
        <p>
          Os <strong>assírios</strong> eram um povo semítico do norte da Mesopotâmia, centrado na
          cidade de Assur, às margens do Tigre. Durante o período do Médio Império Assírio e,
          sobretudo, durante o <strong>Novo Império Assírio</strong> (c. 911–612 a.C.), tornaram-se
          a potência militar mais temida do Oriente Próximo. Sua inovação foi militar: usavam
          sistematicamente ferro para armas (mais duro e resistente que o bronze), carros de guerra
          aperfeiçoados, arietes para derrubar muralhas, e cavalaria montada — a primeira força
          de cavalaria especializada da história.
        </p>
        <p>
          Mas os assírios não eram apenas brutais. A capital <strong>Nínive</strong>, às margens do
          Tigre (hoje Mossul, Iraque), foi, no século VII a.C., a maior cidade do mundo. O rei
          <strong> Assurbanipal</strong> (r. 668–627 a.C.) mandou construir em Nínive uma imensa
          <strong> biblioteca</strong> com mais de 30.000 tabletes de argila cuneiformes, incluindo
          cópias de textos literários, científicos, religiosos e astronômicos de toda a Mesopotâmia —
          entre eles, a versão mais completa do <em>Épico de Gilgamesh</em>. Essa biblioteca
          (descoberta por arqueólogos britânicos no século XIX) é uma das maiores fontes de
          conhecimento sobre o Oriente Próximo antigo.
        </p>
        <p>
          As <strong>deportações em massa</strong> foram a marca política dos assírios: populações
          inteiras de regiões conquistadas eram removidas e reassentadas em outras partes do império
          para quebrar a coesão cultural e a resistência política. Foi essa prática que levou ao
          desaparecimento das Dez Tribos de Israel após a conquista assíria do Reino do Norte (722 a.C.).
          No entanto, o Império Assírio ruiu rapidamente: em 612 a.C., uma aliança entre babilônios
          e medos destruiu Nínive, e o império desapareceu em menos de uma geração.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Caldeus / Neobabilônios</span>
        <h2>7. Nabucodonosor II e o Renascimento Babilônico</h2>
        <p>
          Sobre as ruínas do Império Assírio, os caldeus (ou neobabilônios) ergueram o último grande
          império mesopotâmico. Seu rei mais famoso, <strong>Nabucodonosor II</strong> (r. 605–562 a.C.),
          expandiu o domínio babilônico ao Levante, destruindo o <strong>Templo de Salomão</strong>
          em Jerusalém em 587/586 a.C. e levando a elite judaica ao <strong>Exílio Babilônico</strong>
          (587–538 a.C.) — evento traumático que moldou profundamente a teologia, a literatura e a
          identidade do povo judeu. O Livro de Daniel, o Salmo 137 ("Junto aos rios da Babilônia")
          e grande parte do livro de Isaías datam desse período.
        </p>
        <p>
          Nabucodonosor reconstruiu Babilônia numa escala monumental: a cidade foi cercada por muralhas
          duplas largas o suficiente para duas bigas passarem lado a lado, atravessadas pela famosa
          <strong> Porta de Ishtar</strong> (revestida de azulejos esmaltados com touros e dragões,
          reconstruída no Museu de Pérgamo, Berlim). Lendariamente atribuídos a Nabucodonosor, os
          <strong> Jardins Suspensos da Babilônia</strong> — terraços ajardinados irrigados mecanicamente
          — eram considerados uma das Sete Maravilhas do Mundo Antigo, embora sua existência histórica
          seja ainda debatida. O Império Neobabilônico durou pouco: em 539 a.C., o rei persa
          Ciro, o Grande, conquistou Babilônia sem resistência significativa e libertou os judeus.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Linha do Tempo</span>
        <h2>8. Sucessão dos Povos Mesopotâmicos</h2>

        {/* SVG 2 — Linha do tempo */}
        <div className="lesson-figure">
          <svg viewBox="0 0 600 260" width="600" height="260" aria-label="Linha do tempo da Mesopotâmia">
            <rect x="0" y="0" width="600" height="260" fill="#fdf6e3" rx="6" />
            {/* Linha central */}
            <line x1="30" y1="130" x2="570" y2="130" stroke="#888" strokeWidth="2" />
            {/* Seta direita */}
            <polygon points="570,125 585,130 570,135" fill="#888" />
            {/* Sumérios */}
            <rect x="30" y="80" width="90" height="40" rx="6" fill="#f39c12" />
            <text x="75" y="104" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">Sumérios</text>
            <text x="75" y="152" textAnchor="middle" fontSize="10" fill="#555">3500–2350 a.C.</text>
            {/* Acadianos */}
            <rect x="130" y="80" width="90" height="40" rx="6" fill="#e74c3c" />
            <text x="175" y="104" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">Acadianos</text>
            <text x="175" y="152" textAnchor="middle" fontSize="10" fill="#555">2350–2150 a.C.</text>
            {/* 3ª Dinasta de Ur */}
            <rect x="230" y="80" width="80" height="40" rx="6" fill="#27ae60" />
            <text x="270" y="97" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">3.ª Dinas.</text>
            <text x="270" y="112" textAnchor="middle" fontSize="10" fill="#fff">de Ur</text>
            <text x="270" y="152" textAnchor="middle" fontSize="10" fill="#555">2112–2004</text>
            {/* Babilônios */}
            <rect x="320" y="80" width="90" height="40" rx="6" fill="#8e44ad" />
            <text x="365" y="104" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">Babilônios</text>
            <text x="365" y="152" textAnchor="middle" fontSize="10" fill="#555">1894–1595 a.C.</text>
            {/* Assírios */}
            <rect x="420" y="80" width="75" height="40" rx="6" fill="#2c3e50" />
            <text x="457" y="104" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">Assírios</text>
            <text x="457" y="152" textAnchor="middle" fontSize="10" fill="#555">911–612 a.C.</text>
            {/* Caldeus */}
            <rect x="505" y="80" width="65" height="40" rx="6" fill="#c0392b" />
            <text x="537" y="97" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">Caldeus</text>
            <text x="537" y="112" textAnchor="middle" fontSize="10" fill="#fff">(Neobab.)</text>
            <text x="537" y="152" textAnchor="middle" fontSize="10" fill="#555">626–539 a.C.</text>
            {/* Linha de conexão */}
            <line x1="75" y1="120" x2="75" y2="130" stroke="#f39c12" strokeWidth="2" />
            <line x1="175" y1="120" x2="175" y2="130" stroke="#e74c3c" strokeWidth="2" />
            <line x1="270" y1="120" x2="270" y2="130" stroke="#27ae60" strokeWidth="2" />
            <line x1="365" y1="120" x2="365" y2="130" stroke="#8e44ad" strokeWidth="2" />
            <line x1="457" y1="120" x2="457" y2="130" stroke="#2c3e50" strokeWidth="2" />
            <line x1="537" y1="120" x2="537" y2="130" stroke="#c0392b" strokeWidth="2" />
            {/* Personagens-chave */}
            <text x="75" y="185" textAnchor="middle" fontSize="9" fill="#6e2f00">Ur-Namu</text>
            <text x="175" y="185" textAnchor="middle" fontSize="9" fill="#6e2f00">Sargão</text>
            <text x="365" y="185" textAnchor="middle" fontSize="9" fill="#6c3483">Hamurabi</text>
            <text x="457" y="185" textAnchor="middle" fontSize="9" fill="#1a252f">Assurbanipal</text>
            <text x="537" y="185" textAnchor="middle" fontSize="9" fill="#922b21">Nabucodonosor II</text>
            {/* Título */}
            <text x="300" y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">Sucessão dos Povos Mesopotâmicos</text>
            <text x="300" y="245" textAnchor="middle" fontSize="11" fill="#555" fontStyle="italic">Conquista persa por Ciro em 539 a.C. encerra o período mesopotâmico independente</text>
          </svg>
          <p className="lesson-figure-caption">Linha do tempo dos principais povos mesopotâmicos e seus governantes mais notáveis.</p>
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Religião e Literatura</span>
        <h2>9. Deuses, Épicos e o Dilúvio Universal</h2>
        <p>
          A religião mesopotâmica era politeísta e caracterizava-se por um panteão de divindades
          antropomórficas — deuses com formas humanas, com paixões, desejos, ciúmes e conflitos.
          Entre os principais: <strong>Enlil</strong>, senhor do vento e da tempestade, deus supremo
          do panteão sumério; <strong>Marduk</strong>, deus protetor de Babilônia que se tornou
          a divindade suprema no período babilônico (o Enuma Elish, epopeia da criação babilônica,
          narra como Marduk venceu o caos e criou o mundo); e <strong>Ishtar</strong> (Inanna em
          sumério), deusa do amor e da guerra, uma das divindades mais complexas do Oriente Próximo.
        </p>
        <p>
          O <strong>Épico de Gilgamesh</strong> é considerada a primeira grande obra da literatura
          mundial. Registrado em tabletes cuneiformes desde c. 2100 a.C. (na versão suméria sobre
          Bilgamesh), sua versão mais completa foi encontrada na biblioteca de Assurbanipal em
          Nínive (séc. VII a.C.). O épico narra as aventuras de Gilgamesh, rei de Uruk, e seu
          amigo Enkidu, a busca pela imortalidade após a morte de Enkidu, e um encontro com
          Utnapishtim — o único homem imortal, sobrevivente de um grande dilúvio enviado pelos
          deuses. A narrativa do dilúvio no Épico de Gilgamesh apresenta paralelos notáveis com
          a história de Noé no Génesis hebraico, sugerindo influência cultural mesopotâmica
          sobre os textos bíblicos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Divindade</th>
                <th>Povo</th>
                <th>Domínio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Enlil</td>
                <td>Sumérios</td>
                <td>Vento, tempestade, autoridade divina suprema</td>
              </tr>
              <tr>
                <td>Enki / Ea</td>
                <td>Sumérios/Acadianos</td>
                <td>Sabedoria, água doce, magia</td>
              </tr>
              <tr>
                <td>Inanna / Ishtar</td>
                <td>Sumérios/Acadianos</td>
                <td>Amor, guerra, fertilidade</td>
              </tr>
              <tr>
                <td>Nanna / Sin</td>
                <td>Sumérios/Acadianos</td>
                <td>Lua, tempo, sabedoria</td>
              </tr>
              <tr>
                <td>Marduk</td>
                <td>Babilônios</td>
                <td>Criação, supremacia divina, Babilônia</td>
              </tr>
              <tr>
                <td>Assur</td>
                <td>Assírios</td>
                <td>Deus nacional, guerra, vitória</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Economia e Direito</span>
        <h2>10. Irrigação, Comércio e Primeiras Instituições</h2>
        <p>
          A economia mesopotâmica tinha na <strong>irrigação</strong> seu fundamento material.
          Uma rede densa de canais derivava água do Tigre e do Eufrates para os campos — obra
          coletiva que demandava organização estatal e criava a base material para o excedente
          agrícola sobre o qual repousava toda a superestrutura social. Os templos (<em>zigurates</em>)
          atuavam como verdadeiros bancos e celeiros: recolhiam tributos em grãos, os redistribuíam
          a trabalhadores e sacerdotes, concediam empréstimos a comerciantes e mantinham registros
          contábeis detalhados em tabletes cuneiformes.
        </p>
        <p>
          O comércio fluvial era intenso: barcos desciam o Eufrates levando têxteis e grãos em troca
          de madeira do Líbano, pedras preciosas do Afeganistão, metais da Anatólia e especiarias
          da Índia (via Golfo Pérsico). Os acadianos e babilônios desenvolveram um sofisticado
          sistema de pesos e medidas, contratos escritos (com selos cilíndricos como assinatura),
          letras de câmbio e — em certos templos — o que pode ser considerado as primeiras
          instituições bancárias da história, cobrando juros sobre empréstimos de prata.
        </p>
      </section>

      {/* ── Seção 11 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>11. O Que a Mesopotâmia Deixou para o Mundo</h2>
        <p>
          O legado mesopotâmico é tão profundo que permeia nossa vida cotidiana sem que percebamos.
          A escrita cuneiforme influenciou o desenvolvimento dos alfabetos fenícios e, por essa via,
          os alfabetos grego, latino e todos os derivados — incluindo o nosso. O sistema legal de
          Hamurabi estabeleceu o princípio de que o direito deve ser escrito e público — fundamento
          de todos os sistemas legais modernos. O sistema sexagesimal está em nossos relógios.
          O zodíaco e os meses do ano (12 meses babilônicos) estruturam nossos calendários.
          A geometria que os babilônios desenvolveram para administrar canais de irrigação foi
          incorporada pelos gregos e chegou até nós via Euclides.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Área</th>
                <th>Contribuição Mesopotâmica</th>
                <th>Herança Atual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Escrita</td>
                <td>Cuneiforme → alfabetos fenícios</td>
                <td>Base dos alfabetos grego, latino e moderno</td>
              </tr>
              <tr>
                <td>Matemática</td>
                <td>Sistema sexagesimal, valor posicional</td>
                <td>60 min/hora, 360°, 24h, cálculo</td>
              </tr>
              <tr>
                <td>Direito</td>
                <td>Código de Hamurabi — lei escrita e pública</td>
                <td>Princípio do direito positivo escrito</td>
              </tr>
              <tr>
                <td>Astronomia</td>
                <td>Zodíaco de 12 constelações, calendário lunar</td>
                <td>Meses do ano, signos, astrologia</td>
              </tr>
              <tr>
                <td>Literatura</td>
                <td>Épico de Gilgamesh — primeiro épico literário</td>
                <td>Narrativas de herói, dilúvio, busca imortalidade</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>A Mesopotâmia e o ENEM</h3>
          <p>
            O ENEM cobra a Mesopotâmia geralmente em questões sobre: (1) origens do Estado e do
            direito escrito (Código de Hamurabi e desigualdade jurídica por classe social);
            (2) origens da escrita e seu papel na administração estatal; (3) comparação com outras
            civilizações antigas (Egito, Grécia); (4) dilúvio e a relação entre textos mesopotâmicos
            e bíblicos; (5) contribuições científicas (matemática, astronomia).
          </p>
        </div>
      </section>

      {/* ── Exercícios ── */}
      <Exercise
        level="Básico"
        title="Escrita Cuneiforme"
        statement={
          <p>
            A escrita cuneiforme, desenvolvida pelos sumérios por volta de 3200 a.C., surgiu
            originalmente para atender a uma necessidade específica. Qual foi essa necessidade inicial?
          </p>
        }
        options={[
          { letter: "A", text: "Registrar poemas épicos sobre os feitos dos reis guerreiros para perpetuar sua memória." },
          { letter: "B", text: "Codificar as leis religiosas dos templos e facilitar a liturgia dos rituais sagrados." },
          { letter: "C", text: "Registrar transações comerciais e contábeis dos templos, como entrada e saída de grãos e gado.", correct: true },
          { letter: "D", text: "Facilitar a comunicação diplomática entre as diferentes cidades-Estado rivais." },
          { letter: "E", text: "Preservar o conhecimento astronômico para previsão de eclipses e movimentos planetários." },
        ]}
        resolution={
          <p>
            A escrita cuneiforme nasceu como sistema contábil: os primeiros tabletes cuneiformes
            encontrados (c. 3400–3200 a.C., Uruk) são listas de bens — quantidades de grãos,
            gado e trabalhadores — associadas a símbolos pictográficos que representavam os objetos.
            Só gradualmente a escrita se desenvolveu para ser capaz de registrar literatura, leis
            e outros tipos de conhecimento.
          </p>
        }
      />

      <Exercise
        level="Intermediário"
        title="Código de Hamurabi e Desigualdade"
        statement={
          <p>
            O Código de Hamurabi (c. 1750 a.C.) estabelecia punições diferentes para os mesmos
            crimes, dependendo da posição social das partes envolvidas. Isso revela que o
            primeiro código de leis escrito da história:
          </p>
        }
        options={[
          { letter: "A", text: "Buscava a igualdade jurídica plena entre todos os habitantes da Babilônia, independentemente de classe social." },
          { letter: "B", text: "Era exclusivamente um código religioso, sem aplicação em questões civis ou criminais." },
          { letter: "C", text: "Codificava e legitimava juridicamente a hierarquia social existente, diferenciando a punição de acordo com a classe do ofensor e da vítima.", correct: true },
          { letter: "D", text: "Aplicava apenas a lei de talião (olho por olho) sem qualquer distinção entre classes ou situações." },
          { letter: "E", text: "Protegia especialmente os escravizados, estabelecendo punições mais severas para quem os maltratasse." },
        ]}
        resolution={
          <p>
            O Código de Hamurabi é explicitamente classista: a mesma lesão física cometida contra
            um homem livre, um musquenum (dependente) ou um escravo recebia punições completamente
            diferentes. Isso não é uma falha do código — é sua característica definitória. O código
            codificava em lei a hierarquia social babilônica e, ao fazer isso, a legitimava e
            perpetuava juridicamente.
          </p>
        }
      />

      <Exercise
        level="Avançado"
        title="Épico de Gilgamesh e a Bíblia"
        statement={
          <p>
            O Épico de Gilgamesh (c. 2100 a.C.) contém uma narrativa de dilúvio universal em que
            o herói Utnapishtim constrói um barco, salva animais e é o único sobrevivente humano,
            sendo depois imortalizado pelos deuses. Qual é a principal implicação histórica da
            descoberta desse texto (décadas antes da versão bíblica de Noé)?
          </p>
        }
        options={[
          { letter: "A", text: "Prova que o dilúvio bíblico é um evento histórico real, ocorrido na Mesopotâmia por volta de 2100 a.C." },
          { letter: "B", text: "Demonstra que os textos hebraicos foram copiados integralmente da literatura suméria sem nenhuma modificação." },
          { letter: "C", text: "Sugere que narrativas míticas sobre dilúvios eram comuns no Oriente Próximo e que o texto bíblico pode ter incorporado tradições literárias mesopotâmicas, revelando conexões culturais entre civilizações.", correct: true },
          { letter: "D", text: "Invalida todos os textos bíblicos como fontes históricas, provando que são meras cópias de mitos pagãos." },
          { letter: "E", text: "Mostra que os sumérios conheciam a Bíblia e a usaram como fonte para compor seu épico literário." },
        ]}
        resolution={
          <p>
            A descoberta do Épico de Gilgamesh (especialmente pela expedição de George Smith ao
            Museu Britânico, 1872) gerou enorme debate sobre as relações entre literatura
            mesopotâmica e textos bíblicos. A interpretação histórica mais aceita é que narrativas
            de dilúvio eram um topos literário difundido no Oriente Próximo — reflexo talvez de
            inundações catastróficas reais na planície mesopotâmica — e que os hebreus, em contato
            com a cultura mesopotâmica (incluindo o Exílio Babilônico), incorporaram e reelaboraram
            essas tradições com sua própria teologia.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="Sistema Sexagesimal no Cotidiano"
        statement={
          <p>
            Um estudante percebe que seu relógio marca 3 horas e 45 minutos, e que a aula de
            geometria tratou de ângulos de 60° e 360°. Seu professor explica que essas unidades de
            tempo e angulação são heranças de povos da Mesopotâmia antiga.<br /><br />
            De qual povo e de qual sistema matemático essas unidades são herdeiras?
          </p>
        }
        options={[
          { letter: "A", text: "Dos assírios, que desenvolveram um sistema decimal para facilitar o comércio internacional no século IX a.C." },
          { letter: "B", text: "Dos sumérios e babilônios, que desenvolveram o sistema sexagesimal (base 60), que originou os 60 segundos, os 60 minutos e os 360 graus do círculo.", correct: true },
          { letter: "C", text: "Dos caldeus, que inventaram o calendário de 365 dias e por isso dividiram o dia em 24 horas de 60 minutos cada." },
          { letter: "D", text: "Dos acadianos, que desenvolveram um sistema matemático baseado em potências de 10 que influenciou diretamente os gregos." },
          { letter: "E", text: "Dos fenícios, que, como grandes comerciantes, padronizaram as unidades de tempo e ângulo para facilitar a navegação." },
        ]}
        resolution={
          <p>
            O sistema sexagesimal (base 60) foi desenvolvido pelos sumérios e refinado pelos
            babilônios. Sua herança está em: 60 segundos por minuto, 60 minutos por hora,
            360 graus no círculo (6 × 60), 24 horas no dia (2 × 12, derivado do zodíaco de
            12 constelações). Essa herança matemática foi transmitida aos gregos, depois aos
            romanos, e chegou à modernidade via astronomia e navegação medievais.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="Exílio Babilônico"
        statement={
          <p>
            O Salmo 137 começa: "Junto aos rios da Babilônia, sentamo-nos e choramos, lembrando-nos
            de Sião." Esse texto refere-se a um evento histórico provocado pela política expansionista
            de um dos últimos impérios mesopotâmicos.<br /><br />
            A qual evento e a qual governante o texto faz referência?
          </p>
        }
        options={[
          { letter: "A", text: "À conquista assíria do Reino do Norte de Israel (722 a.C.) pelo rei Sargão II, que deportou as Dez Tribos." },
          { letter: "B", text: "À destruição do Templo de Salomão e ao exílio da elite judaica em Babilônia (587/586 a.C.), promovidos por Nabucodonosor II.", correct: true },
          { letter: "C", text: "À conquista persa de Jerusalém por Ciro, o Grande (539 a.C.), que proibiu a prática da religião judaica." },
          { letter: "D", text: "À ocupação egípcia da Palestina pelo faraó Necao II, que levou reféns hebreus ao Egito no século VII a.C." },
          { letter: "E", text: "À destruição de Jerusalém pelos romanos em 70 d.C., quando o Segundo Templo foi incendiado por Tito." },
        ]}
        resolution={
          <p>
            O Salmo 137 é um lamento do período do Exílio Babilônico (587/586–538 a.C.),
            quando Nabucodonosor II destruiu Jerusalém e o Templo de Salomão e deportou
            a elite judaica (sacerdotes, escribas, artesãos) para a Babilônia. Esse evento
            traumático foi central para a formação da identidade judaica: foi durante o exílio
            que grande parte do cânon bíblico foi compilado e editado, e que se consolidou o
            monoteísmo judaico.
          </p>
        }
      />
    </article>
  );
}
