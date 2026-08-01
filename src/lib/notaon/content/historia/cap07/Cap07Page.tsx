"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap07Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 7</span>
          <h1>Hebreus, Fenícios e Persas</h1>
          <p>
            Três povos do Oriente Próximo que, cada um à sua maneira, transformaram profundamente
            a história da humanidade: os Hebreus legaram ao mundo o monoteísmo ético e a escrita
            da Torá, fundamento das três religiões abraâmicas; os Fenícios inventaram o alfabeto
            fonético e conectaram o Mediterrâneo por rotas comerciais marítimas; e os Persas
            construíram o maior império da Antiguidade até então, distinguindo-se pela tolerância
            religiosa e pela sofisticada administração das satrapias. Seus legados perpassam a
            filosofia, a religião, a linguística e a política do Ocidente até hoje.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 1 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Hebreus</span>
        <h2>1. Origem e Patriarcas: de Abraão ao Egito</h2>
        <p>
          A tradição bíblica situa a origem do povo hebreu em Abraão, que teria partido de Ur da
          Caldeia (Mesopotâmia) em direção à terra de Canaã, futura Palestina, por volta de 2000
          a.C. Abraão é considerado o primeiro patriarca e o fundador do pacto (aliança) entre
          Deus e o povo escolhido — um conceito teológico e político que distingue os Hebreus de
          todos os povos politeístas do Oriente Próximo. Após Abraão, seu filho Isaque e depois
          Jacó (cujo nome foi mudado para Israel) aprofundaram esse pacto. Os filhos de Jacó, as
          doze tribos de Israel, migraram para o Egito durante um período de fome, onde foram
          inicialmente bem recebidos mas posteriormente escravizados pelos faraós.
        </p>
        <p>
          Essa experiência de escravidão no Egito tornou-se central na identidade hebraica: a
          memória do sofrimento e da libertação seria revisitada em cada geração como motivo de
          gratidão e como fundamento ético para a compaixão com o estrangeiro e o oprimido.
          A narrativa do Êxodo, liderado por Moisés no século XIII a.C., relata a saída do Egito
          mediante dez pragas e a travessia do Mar Vermelho, culminando na revelação dos Dez
          Mandamentos no Monte Sinai — a lei moral que seria a espinha dorsal do judaísmo e,
          posteriormente, do cristianismo e do islã.
        </p>

        <div className="lesson-highlight">
          <h3>Monoteísmo: a grande ruptura</h3>
          <p>
            Enquanto todos os povos do Oriente Próximo eram politeístas — adorando deuses
            associados a forças da natureza, cidades ou impérios — os Hebreus afirmavam a
            existência de um único Deus, universal e transcendente, que não poderia ser
            representado por imagem alguma. Essa ideia revolucionária tornou-se a base das
            três maiores religiões monoteístas da história: o judaísmo, o cristianismo e o islã,
            influenciando diretamente a ética, o direito e a filosofia ocidentais.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Patriarca/Líder</th>
                <th>Período aprox.</th>
                <th>Contribuição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Abraão</td>
                <td>c. 2000 a.C.</td>
                <td>Fundador do pacto monoteísta; migração para Canaã</td>
              </tr>
              <tr>
                <td>Moisés</td>
                <td>c. 1280 a.C.</td>
                <td>Êxodo do Egito; Dez Mandamentos; consolidação da Torá</td>
              </tr>
              <tr>
                <td>Josué</td>
                <td>c. 1200 a.C.</td>
                <td>Conquista de Canaã; estabelecimento das tribos</td>
              </tr>
              <tr>
                <td>Saul</td>
                <td>c. 1020 a.C.</td>
                <td>Primeiro rei de Israel; unificação das tribos</td>
              </tr>
              <tr>
                <td>Davi</td>
                <td>c. 1000 a.C.</td>
                <td>Conquista de Jerusalém; reino unificado; rei-poeta</td>
              </tr>
              <tr>
                <td>Salomão</td>
                <td>c. 965–926 a.C.</td>
                <td>Construção do Templo; apogeu; comércio regional</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SEÇÃO 2 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Hebreus</span>
        <h2>2. Monarquia, Divisão e Diáspora</h2>
        <p>
          A fase monárquica dos Hebreus teve início por volta de 1020 a.C., quando o profeta
          Samuel ungiu Saul como o primeiro rei de Israel, a pedido das tribos que desejavam uma
          liderança unificada para enfrentar os filisteus. O reinado de Saul foi marcado por
          instabilidade e conflitos; foi Davi quem consolidou o reino, conquistando Jerusalém
          e tornando-a capital política e religiosa de Israel. Davi é retratado nas escrituras
          como guerreiro, músico e poeta — autor atribuído de muitos Salmos — e sua figura tornou-se
          símbolo do ideal de liderança hebraica. Seu filho Salomão (c. 965–926 a.C.) elevou Israel
          ao apogeu econômico e cultural, construindo o Grande Templo de Jerusalém, sede da Arca da
          Aliança, e estabelecendo rotas comerciais com o Egito, a Fenícia e a rainha de Sabá.
        </p>
        <p>
          Após a morte de Salomão, o reino se dividiu em dois: Israel ao norte (capital Samaria)
          e Judá ao sul (capital Jerusalém). Essa divisão enfraqueceu politicamente o povo hebraico.
          Em 722 a.C., o Império Assírio conquistou o reino do norte e deportou suas tribos — as
          chamadas "dez tribos perdidas de Israel". Em 587 a.C., o rei babilônico Nabucodonosor II
          destruiu o Templo de Jerusalém e deportou a elite judaica para a Babilônia, num episódio
          conhecido como Cativeiro Babilônico. Quando Ciro, o Grande, conquistou a Babilônia em
          539 a.C., permitiu o retorno dos judeus à Palestina, e o Segundo Templo foi reconstruído.
          Nos séculos seguintes, conquistas gregas e romanas produziram sucessivas ondas de
          dispersão — a Diáspora — que espalharam comunidades judaicas pelo Mediterrâneo e pelo
          Oriente Médio. A destruição do Segundo Templo pelos romanos em 70 d.C. consolidou a
          Diáspora definitivamente.
        </p>
        <p>
          No século XX, o antissemitismo culminou no Holocausto (Shoá), o genocídio sistemático
          de seis milhões de judeus promovido pela Alemanha nazista entre 1933 e 1945 — o maior
          crime contra a humanidade do século. O Holocausto tornou-se referência central nas
          discussões sobre direitos humanos, nunca mais, e memória histórica, sendo tema recorrente
          no ENEM em questões que articulam História Geral, Ética e Cidadania.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Evento</th>
                <th>Data</th>
                <th>Consequência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Divisão do reino</td>
                <td>926 a.C.</td>
                <td>Israel (norte) e Judá (sul) enfraquecem politicamente</td>
              </tr>
              <tr>
                <td>Conquista assíria de Israel</td>
                <td>722 a.C.</td>
                <td>Deportação das dez tribos do norte</td>
              </tr>
              <tr>
                <td>Cativeiro Babilônico</td>
                <td>587 a.C.</td>
                <td>Destruição do Templo; elite deportada para Babilônia</td>
              </tr>
              <tr>
                <td>Édito de Ciro</td>
                <td>539 a.C.</td>
                <td>Retorno dos judeus; reconstrução do Segundo Templo</td>
              </tr>
              <tr>
                <td>Destruição do Segundo Templo</td>
                <td>70 d.C.</td>
                <td>Diáspora definitiva; judaísmo rabínico</td>
              </tr>
              <tr>
                <td>Holocausto (Shoá)</td>
                <td>1933–1945</td>
                <td>Genocídio de 6 milhões de judeus; marco dos direitos humanos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SEÇÃO 3 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Fenícios</span>
        <h2>3. Cidades-Estado e o Comércio Marítimo Fenício</h2>
        <p>
          Os Fenícios habitavam uma estreita faixa costeira no atual Líbano, entre o mar
          Mediterrâneo e as montanhas do Líbano, que os impedia de expandir territorialmente
          para o interior. Essa limitação geográfica os orientou ao mar, tornando-os os maiores
          navegadores e comerciantes da Antiguidade. Organizado em cidades-Estado independentes —
          Tiro, Sidon, Biblos e Berito (atual Beirute) eram as mais importantes — o povo fenício
          nunca formou um Estado unificado, mas mantinha laços culturais, religiosos e comerciais
          entre as cidades. Essa descentralização política não impediu sua extraordinária expansão
          pelo Mediterrâneo.
        </p>
        <p>
          O principal produto fenício era a madeira de cedro do Líbano, muito valorizada no Egito
          e na Mesopotâmia, regiões pobres em florestas. Mas foram os tecidos tingidos com a
          famosa púrpura de Tiro que tornaram os Fenícios lendários: a cor era extraída de um
          molusco marinho (Murex brandaris) num processo trabalhoso e malcheiroso que tornava a
          púrpura um produto de altíssimo valor — símbolo de realeza no mundo antigo. Os Fenícios
          também comercializavam vidro, marfim, metais preciosos e escravos.
        </p>
        <p>
          A colonização fenícia do Mediterrâneo foi sistemática: fundaram entrepostos comerciais
          e colônias desde o Levante até as Colunas de Hércules (atual Estreito de Gibraltar).
          Cartago, fundada por colonos de Tiro na atual Tunísia por volta de 814 a.C., tornou-se
          a maior potência do Mediterrâneo Ocidental, rival de Roma. Outras colônias importantes:
          Útica (Tunísia), Cádiz (Espanha), Palermo (Sicília). Os Fenícios chegaram a circum-
          navegar a África a serviço do faraó Necao II, por volta de 600 a.C., feito descrito
          por Heródoto.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 220" width="720" height="220" aria-label="Mapa esquemático do Mediterrâneo com rotas fenícias e colônias">
            {/* Mar Mediterrâneo — fundo */}
            <rect x="0" y="0" width="720" height="220" fill="#e8f4f8" />
            {/* Continentes simplificados */}
            {/* Europa (norte) */}
            <rect x="0" y="0" width="720" height="55" fill="#d4c99a" />
            {/* África (sul) */}
            <rect x="0" y="165" width="720" height="55" fill="#c8b06a" />
            {/* Península Itálica */}
            <polygon points="370,55 385,55 390,110 375,130 360,110 365,55" fill="#d4c99a" />
            {/* Grécia */}
            <polygon points="430,55 460,55 470,100 450,115 425,90" fill="#d4c99a" />
            {/* Levante / Fenícia */}
            <rect x="600" y="60" width="30" height="80" fill="#d4c99a" />
            {/* Sicília */}
            <ellipse cx="390" cy="140" rx="25" ry="15" fill="#d4c99a" />

            {/* Rótulos de regiões */}
            <text x="100" y="30" fontSize="11" fill="#5a4a1a" fontWeight="bold">ESPANHA</text>
            <text x="310" y="30" fontSize="11" fill="#5a4a1a" fontWeight="bold">ITÁLIA</text>
            <text x="460" y="30" fontSize="11" fill="#5a4a1a" fontWeight="bold">GRÉCIA</text>
            <text x="600" y="30" fontSize="11" fill="#5a4a1a" fontWeight="bold">LEVANTE</text>
            <text x="200" y="195" fontSize="11" fill="#5a4a1a" fontWeight="bold">ÁFRICA DO NORTE</text>
            <text x="250" y="115" fontSize="13" fill="#1a5a8a" fontWeight="bold">MAR MEDITERRÂNEO</text>

            {/* Cidades fenícias de origem */}
            <circle cx="620" cy="90" r="5" fill="#c0392b" />
            <text x="628" y="88" fontSize="9" fill="#c0392b">Tiro</text>
            <circle cx="620" cy="108" r="5" fill="#c0392b" />
            <text x="628" y="112" fontSize="9" fill="#c0392b">Sidon</text>
            <circle cx="612" cy="72" r="5" fill="#c0392b" />
            <text x="618" y="70" fontSize="9" fill="#c0392b">Biblos</text>

            {/* Colônias fenícias */}
            <circle cx="310" cy="175" r="6" fill="#e67e22" />
            <text x="295" y="190" fontSize="9" fill="#e67e22">Cartago</text>
            <circle cx="90" cy="80" r="6" fill="#e67e22" />
            <text x="72" y="75" fontSize="9" fill="#e67e22">Cádiz</text>
            <circle cx="270" cy="172" r="5" fill="#e67e22" />
            <text x="252" y="168" fontSize="9" fill="#e67e22">Útica</text>
            <circle cx="385" cy="140" r="5" fill="#e67e22" />
            <text x="390" y="138" fontSize="9" fill="#e67e22">Palermo</text>

            {/* Rotas comerciais */}
            <line x1="620" y1="90" x2="470" y2="100" stroke="#e67e22" strokeWidth="1.5" strokeDasharray="5,3" />
            <line x1="470" y1="100" x2="390" y2="140" stroke="#e67e22" strokeWidth="1.5" strokeDasharray="5,3" />
            <line x1="390" y1="140" x2="310" y2="175" stroke="#e67e22" strokeWidth="1.5" strokeDasharray="5,3" />
            <line x1="310" y1="175" x2="90" y2="80" stroke="#e67e22" strokeWidth="1.5" strokeDasharray="5,3" />
            <line x1="620" y1="90" x2="310" y2="175" stroke="#e67e22" strokeWidth="1" strokeDasharray="3,4" />

            {/* Legenda */}
            <rect x="10" y="155" width="200" height="60" fill="white" fillOpacity="0.85" rx="4" />
            <circle cx="25" cy="170" r="5" fill="#c0392b" />
            <text x="35" y="174" fontSize="9" fill="#333">Cidades fenícias de origem</text>
            <circle cx="25" cy="187" r="6" fill="#e67e22" />
            <text x="35" y="191" fontSize="9" fill="#333">Colônias fenícias</text>
            <line x1="17" y1="205" x2="35" y2="205" stroke="#e67e22" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="40" y="208" fontSize="9" fill="#333">Rotas comerciais</text>
          </svg>
          <figcaption>
            Mapa esquemático do Mediterrâneo mostrando as principais cidades fenícias de origem
            (Tiro, Sidon, Biblos) e as colônias fundadas ao longo das rotas comerciais, incluindo
            Cartago, Cádiz e Palermo.
          </figcaption>
        </figure>
      </section>

      {/* ─── SEÇÃO 4 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Fenícios</span>
        <h2>4. O Alfabeto Fonético: o maior legado fenício</h2>
        <p>
          A contribuição mais duradoura dos Fenícios à humanidade foi, sem dúvida, a criação do
          alfabeto fonético por volta de 1050 a.C. Diferente da escrita cuneiforme mesopotâmica
          (silábica e ideográfica, com centenas de sinais) e dos hieróglifos egípcios (também
          misturando ideogramas, silabogramas e determinativos), o alfabeto fenício era composto
          por apenas 22 sinais consonantais — cada sinal representando um único som (fonema).
          Isso tornava o sistema radical e democraticamente simples: um comerciante poderia
          aprender a ler e escrever em semanas, sem precisar de anos de formação especializada
          como os escribas mesopotâmios ou egípcios.
        </p>
        <p>
          A motivação para esta invenção era eminentemente prática: os Fenícios precisavam de um
          sistema rápido e eficiente para registrar transações comerciais, contratos, rotas e
          inventários. O alfabeto fenício se espalhou pelo Mediterrâneo através do próprio
          comércio fenício. Os gregos o adotaram por volta do século IX a.C., acrescentando as
          vogais que faltavam (pois o original fenício era apenas consonantal, como o hebraico e
          o árabe até hoje). O alfabeto grego gerou o latino, do qual derivam todos os alfabetos
          da Europa Ocidental — incluindo o português que você usa para ler este texto.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sistema de escrita</th>
                <th>Povo</th>
                <th>Nº de sinais</th>
                <th>Tipo</th>
                <th>Aprendizado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cuneiforme</td>
                <td>Sumérios/Acádios</td>
                <td>+600</td>
                <td>Silábico/Logográfico</td>
                <td>Anos de treinamento</td>
              </tr>
              <tr>
                <td>Hieróglifos</td>
                <td>Egípcios</td>
                <td>+700</td>
                <td>Logográfico/Fonético</td>
                <td>Anos de treinamento</td>
              </tr>
              <tr>
                <td>Alfabeto fenício</td>
                <td>Fenícios</td>
                <td>22</td>
                <td>Consonantal</td>
                <td>Semanas</td>
              </tr>
              <tr>
                <td>Alfabeto grego</td>
                <td>Gregos</td>
                <td>24</td>
                <td>Fonético (+ vogais)</td>
                <td>Semanas</td>
              </tr>
              <tr>
                <td>Alfabeto latino</td>
                <td>Romanos</td>
                <td>23/26</td>
                <td>Fonético</td>
                <td>Semanas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Impacto cultural do alfabeto fenício</h3>
          <p>
            A democratização da escrita pelo alfabeto fenício foi uma das maiores revoluções
            culturais da história humana. Ao reduzir drasticamente o número de sinais necessários
            para escrever, o alfabeto fonético permitiu que a leitura e a escrita deixassem de
            ser privilégio de uma casta de especialistas (escribas) e se tornassem acessíveis a
            comerciantes, artesãos e, progressivamente, ao conjunto da população. Os gregos
            transformaram esse instrumento comercial em veículo literário, filosófico e político
            — obras de Homero, Platão e Aristóteles foram possíveis graças a este legado fenício.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 5 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Persas</span>
        <h2>5. O Império Aquemênida: Ciro o Grande e a Tolerância Religiosa</h2>
        <p>
          Por volta de 550 a.C., Ciro II (c. 600–530 a.C.), rei da Pérsia, unificou os persas e
          os medos sob sua liderança, fundando o Império Aquemênida. Em menos de vinte anos,
          Ciro criou o maior império que o mundo havia visto até então: conquistou a Lídia (com
          o lendário rei Creso), a Babilônia (em 539 a.C.) e abriu caminho para o controle de
          toda a Anatólia e do Levante. Sua característica mais marcante — e revolucionária para
          a época — era a política de tolerância religiosa: ao conquistar novos territórios, Ciro
          não impunha a religião ou a cultura persa, mas respeitava os deuses e costumes locais.
        </p>
        <p>
          O chamado Cilindro de Ciro (descoberto em Babilônia, hoje no Museu Britânico) é
          considerado por alguns historiadores um dos primeiros documentos de direitos humanos
          da história, pois registra a libertação dos povos cativos — incluindo os judeus — e
          o respeito às suas tradições religiosas. Foi Ciro quem emitiu o édito permitindo o
          retorno dos judeus da Babilônia à Palestina e a reconstrução do Templo de Jerusalém,
          tornando-se figura positiva até nas escrituras hebraicas (onde é chamado de "ungido
          de Iahvé"). Sob Dario I (522–486 a.C.) e Xerxes I (486–465 a.C.), o império atingiu
          sua máxima extensão, do Indo ao Mar Egeu.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Rei Aquemênida</th>
                <th>Reinado</th>
                <th>Principal contribuição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ciro II (o Grande)</td>
                <td>c. 559–530 a.C.</td>
                <td>Fundação do império; tolerância religiosa; libertação dos judeus</td>
              </tr>
              <tr>
                <td>Cambises II</td>
                <td>530–522 a.C.</td>
                <td>Conquista do Egito</td>
              </tr>
              <tr>
                <td>Dario I (o Grande)</td>
                <td>522–486 a.C.</td>
                <td>Satrapias; estradas reais; 1ª Guerra Médica (Maratona)</td>
              </tr>
              <tr>
                <td>Xerxes I</td>
                <td>486–465 a.C.</td>
                <td>2ª Guerra Médica; Termópilas; Salamina; saque de Atenas</td>
              </tr>
              <tr>
                <td>Dario III</td>
                <td>336–330 a.C.</td>
                <td>Derrota para Alexandre Magno; fim do Império Aquemênida</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SEÇÃO 6 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Persas</span>
        <h2>6. Organização Política: Satrapias e a Estrada Real</h2>
        <p>
          A grande inovação administrativa dos Persas foi o sistema de satrapias: o vasto
          território do império era dividido em províncias (satrapias) administradas por um
          governador chamado sátrapa, geralmente um nobre persa ou medo nomeado pelo rei.
          O sátrapa tinha poderes civis, militares e tributários na sua região, mas era
          supervisionado por inspetores reais — os "olhos e ouvidos do rei" — que garantiam
          a lealdade ao poder central. Dario I organizou o império em 20 satrapias.
        </p>
        <p>
          Para garantir a coesão desse território imenso, os Persas construíram a "Estrada Real",
          que ligava Sardes (na Lídia, atual Turquia) a Susa, capital administrativa do império,
          ao longo de aproximadamente 2.700 km. Um sistema de postos de cavaleiros-mensageiros
          (semelhante ao futuro Pony Express americano) permitia a transmissão de mensagens em
          poucos dias — tempo que um viajante comum levaria meses para cobrir. Esse sistema de
          comunicações foi fundamental para a administração de um território que se estendia da
          Grécia ao atual Paquistão.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 180" width="720" height="180" aria-label="Linha do tempo dos três povos: Hebreus, Fenícios e Persas">
            <rect x="0" y="0" width="720" height="180" fill="#f5f0e8" />
            {/* Eixo do tempo */}
            <line x1="40" y1="90" x2="680" y2="90" stroke="#333" strokeWidth="2" />
            {/* Seta */}
            <polygon points="680,86 690,90 680,94" fill="#333" />

            {/* Marcas de tempo */}
            {[
              { x: 80,  label: "2000\na.C." },
              { x: 175, label: "1200\na.C." },
              { x: 270, label: "1000\na.C." },
              { x: 365, label: "800\na.C." },
              { x: 460, label: "550\na.C." },
              { x: 555, label: "330\na.C." },
              { x: 640, label: "70\nd.C." },
            ].map((m) => (
              <g key={m.x}>
                <line x1={m.x} y1="85" x2={m.x} y2="95" stroke="#666" strokeWidth="1.5" />
                <text x={m.x} y="108" fontSize="8" textAnchor="middle" fill="#555">{m.label}</text>
              </g>
            ))}

            {/* Faixa Hebreus */}
            <rect x="80" y="30" width="560" height="16" fill="#3498db" fillOpacity="0.6" rx="3" />
            <text x="360" y="42" fontSize="9" textAnchor="middle" fill="#1a3a5a" fontWeight="bold">HEBREUS (c.2000 a.C. → Diáspora)</text>

            {/* Faixa Fenícios */}
            <rect x="175" y="50" width="380" height="16" fill="#e67e22" fillOpacity="0.6" rx="3" />
            <text x="365" y="62" fontSize="9" textAnchor="middle" fill="#7a3800" fontWeight="bold">FENÍCIOS (c.1200 a.C. → conquista persa 539 a.C.)</text>

            {/* Faixa Persas */}
            <rect x="460" y="70" width="95" height="14" fill="#27ae60" fillOpacity="0.7" rx="3" />
            <text x="507" y="81" fontSize="9" textAnchor="middle" fill="#0a4a20" fontWeight="bold">PERSAS</text>

            {/* Eventos-chave */}
            <circle cx="175" cy="90" r="4" fill="#c0392b" />
            <text x="163" y="130" fontSize="8" textAnchor="middle" fill="#c0392b">Êxodo</text>
            <line x1="175" y1="90" x2="175" y2="122" stroke="#c0392b" strokeWidth="1" strokeDasharray="2,2" />

            <circle cx="270" cy="90" r="4" fill="#c0392b" />
            <text x="270" y="130" fontSize="8" textAnchor="middle" fill="#c0392b">Reino Unido</text>
            <line x1="270" y1="90" x2="270" y2="122" stroke="#c0392b" strokeWidth="1" strokeDasharray="2,2" />

            <circle cx="365" cy="90" r="4" fill="#e67e22" />
            <text x="365" y="145" fontSize="8" textAnchor="middle" fill="#e67e22">Alfabeto</text>
            <line x1="365" y1="90" x2="365" y2="137" stroke="#e67e22" strokeWidth="1" strokeDasharray="2,2" />

            <circle cx="460" cy="90" r="4" fill="#27ae60" />
            <text x="460" y="160" fontSize="8" textAnchor="middle" fill="#27ae60">Ciro</text>
            <line x1="460" y1="90" x2="460" y2="152" stroke="#27ae60" strokeWidth="1" strokeDasharray="2,2" />

            <circle cx="640" cy="90" r="4" fill="#8e44ad" />
            <text x="640" y="130" fontSize="8" textAnchor="middle" fill="#8e44ad">Diáspora</text>
            <line x1="640" y1="90" x2="640" y2="122" stroke="#8e44ad" strokeWidth="1" strokeDasharray="2,2" />

            <text x="360" y="175" fontSize="9" textAnchor="middle" fill="#888">Linha do tempo comparativa — Hebreus, Fenícios e Persas</text>
          </svg>
          <figcaption>
            Linha do tempo comparativa dos três povos, mostrando seus períodos de maior
            relevância histórica e os principais eventos que os marcaram.
          </figcaption>
        </figure>
      </section>

      {/* ─── SEÇÃO 7 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Persas</span>
        <h2>7. Zoroastrismo e as Guerras Médicas</h2>
        <p>
          A religião oficial do Império Persa era o zoroastrismo, fundada pelo profeta Zaratustra
          (Zoroastro) por volta do século VI a.C. É uma das primeiras religiões dualistas da
          história: concebe o universo como palco de uma batalha entre Ahura Mazda, o deus da
          luz, sabedoria e bem, e Angra Mainyu, o espírito do mal e das trevas. O ser humano
          é chamado a escolher entre o bem e o mal através do pensamento, da palavra e da ação
          corretos. Essa visão ética do cosmos influenciaria profundamente o judaísmo tardio,
          o cristianismo (especialmente os conceitos de Satã, Paraíso e Inferno) e o islã.
          O fogo sagrado, símbolo de Ahura Mazda, ainda é mantido aceso em templos zoroastristas
          por comunidades parsis na Índia e no Irã.
        </p>
        <p>
          As Guerras Médicas (499–449 a.C.) foram o conflito entre o Império Persa e as
          cidades-Estado gregas que definiram o destino da civilização ocidental. Iniciadas
          com a revolta jônica (cidades gregas da Anatólia contra o domínio persa), as guerras
          incluíram batalhas memoráveis: Maratona (490 a.C.), onde os atenienses derrotaram
          Dario I contra todas as probabilidades; Termópilas (480 a.C.), onde 300 espartanos
          e aliados resistiram suicidamente ao exército de Xerxes I para cobrir a retirada
          grega; e Salamina (480 a.C.), onde a frota ateniense destruiu a esquadra persa,
          decidindo o conflito. A vitória grega preservou a autonomia das póleis e permitiu
          o florescimento da democracia ateniense e da cultura clássica.
        </p>
      </section>

      {/* ─── SEÇÃO 8 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>8. Os Três Povos: Semelhanças e Diferenças</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Hebreus</th>
                <th>Fenícios</th>
                <th>Persas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Organização política</td>
                <td>Monarquia unificada (depois dividida)</td>
                <td>Cidades-Estado independentes</td>
                <td>Império centralizado (satrapias)</td>
              </tr>
              <tr>
                <td>Economia</td>
                <td>Pastoreio, agricultura, comércio local</td>
                <td>Comércio marítimo, artesanato, colonização</td>
                <td>Tributação das satrapias, comércio imperial</td>
              </tr>
              <tr>
                <td>Religião</td>
                <td>Monoteísmo (Javé)</td>
                <td>Politeísmo (Baal, Astarte, Moloch)</td>
                <td>Zoroastrismo (dualismo: bem vs. mal)</td>
              </tr>
              <tr>
                <td>Principal legado</td>
                <td>Monoteísmo, Torá, ética religiosa</td>
                <td>Alfabeto fonético, rotas comerciais</td>
                <td>Tolerância religiosa, administração imperial</td>
              </tr>
              <tr>
                <td>Relação com o outro</td>
                <td>Identidade de "povo escolhido"</td>
                <td>Pragmatismo comercial</td>
                <td>Tolerância e respeito às culturas locais</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SEÇÃO 9 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>9. Legados para o Ocidente e para o Mundo</h2>
        <p>
          Os legados desses três povos são tão profundos que é difícil imaginar o Ocidente —
          e, por extensão, o mundo globalizado — sem eles. O monoteísmo hebraico é o fundamento
          teológico do judaísmo, do cristianismo e do islã: três religiões que juntas têm mais
          de quatro bilhões de seguidores no mundo atual. A ética bíblica hebraica — a ideia de
          que há uma lei moral universal que transcende os interesses de reis e impérios — foi
          decisiva para o desenvolvimento posterior dos direitos humanos.
        </p>
        <p>
          O alfabeto fonético dos Fenícios é a base de todos os sistemas de escrita do mundo
          ocidental, do árabe ao hebraico, do grego ao latino. O português, o inglês, o francês,
          o espanhol — todas essas línguas são escritas em variações do alfabeto que os Fenícios
          criaram por necessidade comercial. As rotas marítimas fenícias também estabeleceram
          o padrão de conexões mediterrâneas que Roma depois herdaria e ampliaria.
        </p>
        <p>
          A tolerância persa de Ciro o Grande é frequentemente citada como precursora de
          conceitos modernos de direitos humanos e respeito à diversidade cultural. O modelo
          administrativo persa de satrapias influenciou impérios posteriores, de Alexandre
          Magno aos partos e sassânidas. O zoroastrismo, embora com poucos seguidores hoje,
          influenciou profundamente o pensamento religioso judaico tardio, o cristianismo e
          o islã em conceitos como anjos, demônios, apocalipse e julgamento final.
        </p>

        <div className="lesson-highlight">
          <h3>Conexão com o ENEM</h3>
          <p>
            O ENEM frequentemente relaciona esses conteúdos com questões de direitos humanos,
            diversidade cultural e patrimônio da humanidade. A perseguição histórica aos judeus
            (chegando ao Holocausto) é tema recorrente em questões sobre intolerância e direitos
            humanos. O alfabeto fenício aparece em questões sobre história da comunicação e
            democratização do conhecimento. A tolerância persa pode ser usada como contraponto
            ao imperialismo intolerante de outros povos da Antiguidade.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 10 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Perspectiva Atual</span>
        <h2>10. Povos Semitas, Identidade e Conflitos Contemporâneos</h2>
        <p>
          Hebreus e Fenícios eram povos semitas — pertencentes ao grupo linguístico-cultural
          que inclui também os árabes, os arameus, os assírios e outros povos do Oriente
          Próximo. A identidade semita é fundamental para entender conflitos contemporâneos
          no Oriente Médio. O antissemitismo — preconceito contra povos semitas, especialmente
          os judeus — tem raízes históricas na Europa medieval e culminou no Holocausto do
          século XX. A criação do Estado de Israel em 1948, em territórios da Palestina
          histórica, e o deslocamento das populações árabes locais deram origem ao conflito
          israelo-palestino, que persiste até hoje e é tema frequente no ENEM.
        </p>
        <p>
          O Líbano atual, território da antiga Fenícia, é um dos países mais multiétnicos e
          multireligiosos do mundo, com cristãos maronitas, muçulmanos sunitas, xiitas e
          drusos convivendo num arranjo político delicado. O Irã, herdeiro da Pérsia antiga,
          mantém traços da herança zoroastrista em sua identidade nacional, mesmo sendo um
          Estado islâmico desde a Revolução de 1979.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Legado Antigo</th>
                <th>Manifestação Contemporânea</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monoteísmo hebraico</td>
                <td>Judaísmo, Cristianismo, Islã — 4 bilhões de seguidores</td>
              </tr>
              <tr>
                <td>Torá e ética bíblica</td>
                <td>Base do direito ocidental; direitos humanos</td>
              </tr>
              <tr>
                <td>Diáspora judaica</td>
                <td>Conflito israelo-palestino; Estado de Israel (1948)</td>
              </tr>
              <tr>
                <td>Alfabeto fenício</td>
                <td>Todos os alfabetos ocidentais e do Oriente Médio</td>
              </tr>
              <tr>
                <td>Tolerância persa de Ciro</td>
                <td>Conceito de direitos humanos; multiculturalismo</td>
              </tr>
              <tr>
                <td>Zoroastrismo</td>
                <td>Comunidades parsis na Índia; influência no islã e no judaísmo tardio</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SEÇÃO 11 — EXERCÍCIOS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>
        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. O monoteísmo hebraico e sua distinção no contexto do Oriente Próximo"
          statement={
            <p>
              O povo hebreu distinguiu-se dos demais povos do Oriente Próximo antigo ao adotar
              o monoteísmo. Sobre esse aspecto da religiosidade hebraica, assinale a alternativa
              correta:
            </p>
          }
          options={[
            { letter: "a", text: "Os Hebreus acreditavam em vários deuses associados a forças da natureza, como o sol, a lua e os rios." },
            { letter: "b", text: "O monoteísmo hebraico foi adotado apenas após a conquista romana da Palestina, como forma de resistência cultural." },
            { letter: "c", text: "Os Hebreus afirmavam a existência de um único Deus, universal e transcendente, que não poderia ser representado por imagem alguma, influenciando as três grandes religiões abraâmicas." , correct: true },
            { letter: "d", text: "O Deus dos Hebreus era identificado com o sol, semelhante ao Aton egípcio do período de Amenhotep IV." },
            { letter: "e", text: "A religião hebraica era politeísta em suas origens e tornou-se monoteísta apenas no período do exílio babilônico." },
          ]}
          resolution={
            <p>
              A alternativa C está correta. O monoteísmo hebraico — a crença em um único Deus
              transcendente, sem representação iconográfica — é a grande distinção dos Hebreus no
              contexto politeísta do Oriente Próximo. Esse legado teológico tornou-se o fundamento
              do judaísmo, do cristianismo e do islã, as três religiões abraâmicas que juntas
              reúnem a maioria dos crentes no mundo atual. As demais alternativas descrevem
              características de religiões politeístas ou confundem o monoteísmo hebraico com
              reformas religiosas egípcias (Aton de Amenhotep IV foi um episódio isolado de
              monoteísmo solar, sem conexão com o judaísmo).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. O alfabeto fenício e a democratização da escrita"
          statement={
            <p>
              A invenção do alfabeto fenício, por volta de 1050 a.C., representou uma revolução
              no campo da comunicação humana. Considerando as características desse alfabeto e
              sua difusão, assinale a alternativa correta:
            </p>
          }
          options={[
            { letter: "a", text: "O alfabeto fenício era composto por mais de 600 sinais silábicos, tornando-o complexo e restrito a especialistas." },
            { letter: "b", text: "Com apenas 22 sinais consonantais, o alfabeto fenício simplificou radicalmente a escrita, sendo adotado pelos gregos que acrescentaram as vogais, originando os alfabetos ocidentais.", correct: true },
            { letter: "c", text: "Os Fenícios criaram um alfabeto com vogais e consoantes, idêntico ao que usamos hoje, sem necessidade de adaptações posteriores pelos gregos." },
            { letter: "d", text: "O alfabeto fenício foi criado com finalidade religiosa, para escrever textos sagrados nos templos de Baal e Astarte." },
            { letter: "e", text: "A escrita fenícia era pictográfica, com desenhos representando objetos e ideias, semelhante aos hieróglifos egípcios." },
          ]}
          resolution={
            <p>
              A alternativa B é a correta. O alfabeto fenício tinha apenas 22 sinais consonantais
              (sem vogais), o que o tornava extremamente simples em comparação com a escrita
              cuneiforme (600+ sinais) e os hieróglifos (700+ sinais). Sua motivação era prática
              — registrar transações comerciais. Os gregos o adotaram por volta do século IX a.C.
              e acrescentaram as vogais, criando o primeiro alfabeto verdadeiramente fonético
              completo. Do grego derivou o latino, e do latino todos os alfabetos da Europa
              Ocidental, incluindo o português. As alternativas A, C, D e E descrevem
              características incorretas ou confundem com outros sistemas de escrita.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Ciro o Grande e a tolerância persa como antecedente dos direitos humanos"
          statement={
            <p>
              O Cilindro de Ciro (c. 539 a.C.), descoberto em Babilônia e atualmente no Museu
              Britânico, é frequentemente citado como um dos primeiros documentos de direitos
              humanos da história. Avaliando criticamente essa afirmação e o contexto político
              do Império Aquemênida, assinale a alternativa que melhor representa uma análise
              historicamente fundamentada:
            </p>
          }
          options={[
            { letter: "a", text: "A tolerância de Ciro era puramente ideológica, sem qualquer cálculo político ou econômico por trás dela." },
            { letter: "b", text: "Ciro impôs o zoroastrismo a todos os povos conquistados, exigindo a conversão como condição para a tolerância." },
            { letter: "c", text: "A política de tolerância de Ciro pode ser entendida como uma estratégia eficiente de governabilidade que reduzia resistências e rebeliões, ao mesmo tempo em que continha elementos genuinamente humanistas para os padrões da época.", correct: true },
            { letter: "d", text: "O Cilindro de Ciro é um documento moderno, fabricado por arqueólogos do século XIX para justificar o sionismo." },
            { letter: "e", text: "A tolerância persa se limitou apenas aos judeus, sendo os demais povos do império submetidos à imposição cultural persa." },
          ]}
          resolution={
            <p>
              A alternativa C apresenta a análise mais madura e historicamente equilibrada.
              A política de tolerância de Ciro tinha uma dimensão pragmática clara: respeitar
              os deuses e costumes locais reduzia drasticamente a resistência das populações
              conquistadas, tornando o governo mais estável e menos custoso militarmente.
              Ao mesmo tempo, em comparação com os Assírios (que deportavam populações inteiras
              e destruíam cidades) ou com outros conquistadores, a tolerância persa representava
              um avanço humanístico real. A historiografia moderna reconhece esse duplo caráter
              sem cair no anacronismo de projetar conceitos modernos de "direitos humanos" em
              documentos antigos. As demais alternativas são factualmente incorretas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Diáspora, Holocausto e memória histórica"
          statement={
            <div>
              <p>
                "Nunca esquecer é nossa obrigação para com os mortos. Mas também é nossa
                obrigação para com os vivos — para que o mesmo nunca se repita."
              </p>
              <p><em>(Elie Wiesel, sobrevivente do Holocausto e Prêmio Nobel da Paz, 1986)</em></p>
              <p>
                Considerando a longa trajetória histórica do povo judeu — desde a Diáspora
                antiga até o Holocausto do século XX — e o texto acima, analise as afirmações
                e assinale a alternativa correta:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "O Holocausto foi um evento isolado, sem relação com o longo histórico de perseguições ao povo judeu ao longo dos séculos." },
            { letter: "b", text: "A memória do Holocausto é irrelevante para a educação contemporânea, pois pertence ao passado e não se relaciona com questões atuais de intolerância." },
            { letter: "c", text: "A Diáspora judaica, iniciada com o Cativeiro Babilônico e intensificada com a destruição do Segundo Templo, criou comunidades espalhadas pelo mundo que foram vulneráveis a perseguições ao longo dos séculos, culminando no Holocausto nazista — evento que impulsionou a criação da Declaração Universal dos Direitos Humanos em 1948.", correct: true },
            { letter: "d", text: "O Estado de Israel foi criado exclusivamente por decisão dos países árabes da região, como solução para o problema dos sobreviventes do Holocausto." },
            { letter: "e", text: "A frase de Elie Wiesel defende o esquecimento como forma de superar traumas históricos e avançar para o futuro." },
          ]}
          resolution={
            <p>
              A alternativa C articula corretamente os fios históricos. A Diáspora judaica
              não foi um evento único, mas um processo acumulativo que começou com o Cativeiro
              Babilônico (587 a.C.), intensificou-se com a destruição do Segundo Templo pelos
              romanos (70 d.C.) e criou comunidades vulneráveis em toda a Europa e no Oriente
              Médio. O antissemitismo medieval europeu (guetos, expulsões, massacres) preparou
              o terreno para o genocídio sistemático nazista. O horror do Holocausto foi um dos
              principais catalisadores para a criação da ONU e da Declaração Universal dos
              Direitos Humanos (1948). A frase de Wiesel defende exatamente o oposto do
              esquecimento: a memória como instrumento de prevenção.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Rotas fenícias e globalização na Antiguidade"
          statement={
            <div>
              <p>
                Historiadores modernos frequentemente usam o termo "globalização antiga" para
                descrever o papel das redes comerciais fenícias no Mediterrâneo. Considerando
                as características do comércio fenício e seu impacto cultural, assinale a
                alternativa que melhor fundamenta essa analogia:
              </p>
            </div>
          }
          options={[
            { letter: "a", text: "Os Fenícios praticavam um comércio fechado, limitado às cidades da costa do atual Líbano, sem contato com povos distantes." },
            { letter: "b", text: "As rotas fenícias conectaram o Levante ao extremo oeste do Mediterrâneo, criando redes de intercâmbio que difundiram não apenas mercadorias, mas também tecnologias (como o alfabeto), práticas culturais e religiosas, antecipando dinâmicas que associamos à globalização contemporânea.", correct: true },
            { letter: "c", text: "O comércio fenício era exclusivamente de longa distância, sem mercados locais ou regionais, e focado apenas na venda de púrpura." },
            { letter: "d", text: "Os Fenícios não fundaram colônias, limitando-se a estabelecer contatos diplomáticos com outros povos mediterrâneos." },
            { letter: "e", text: "A analogia entre comércio fenício e globalização é inadequada porque os Fenícios não tinham interesse em difundir sua cultura, apenas em obter lucro." },
          ]}
          resolution={
            <p>
              A alternativa B é a mais completa e historicamente fundamentada. As rotas fenícias
              conectavam o Levante ao extremo oeste do Mediterrâneo (Gibraltar), criando uma
              rede de intercâmbios que ia muito além das simples trocas comerciais: junto com
              as mercadorias viajavam tecnologias (o alfabeto foi difundido pelas rotas comerciais
              fenícias), práticas artesanais, crenças religiosas e costumes. A fundação de colônias
              como Cartago, Cádiz e Palermo criou nódulos permanentes dessa rede, semelhante às
              cidades globais contemporâneas. A alternativa E erra ao separar artificialmente lucro
              e difusão cultural — na prática, o contato comercial sempre implica intercâmbio
              cultural, independentemente das intenções dos comerciantes.
            </p>
          }
        />
      </section>
    </article>
  );
}
