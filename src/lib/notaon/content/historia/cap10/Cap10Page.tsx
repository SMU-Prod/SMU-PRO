"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap10Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 10</span>
          <h1>Período Helenístico</h1>
          <p>
            Com a morte de Alexandre Magno em 323 a.C., o maior império que o mundo antigo havia
            conhecido se fragmentou — mas a cultura grega não desapareceu. Pelo contrário, ela se
            fundiu com as civilizações do Oriente Próximo, do Egito e da Pérsia, criando o
            helenismo: uma síntese cosmopolita que transformou a língua grega em instrumento
            de comunicação universal, tornou Alexandria o maior centro intelectual da Antiguidade
            e produziu descobertas científicas que só seriam superadas na Europa mais de 1.500 anos
            depois. Compreender o período helenístico é compreender como culturas se mesclam e
            como o conhecimento viaja através das fronteiras políticas.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto</span>
        <h2>1. O Fim das Póleis e a Ascensão da Macedônia</h2>
        <p>
          O mundo grego clássico era estruturado em torno das <em>póleis</em> — cidades-Estado
          independentes e ciosas de sua autonomia. Esse sistema gerou a democracia ateniense, a
          filosofia de Platão e Aristóteles e a arte clássica do século V a.C. Mas também gerava
          conflito permanente: a <strong>Guerra do Peloponeso</strong> (431–404 a.C.), que opôs
          Atenas a Esparta em quase três décadas de guerra total, devastou o mundo grego, esgotou
          suas recursos humanos e financeiros e minou a confiança nas póleis como forma de
          organização política. As guerras subsequentes — de Esparta, Tebas e de outros — completaram
          o quadro de exaustão.
        </p>
        <p>
          Foi nesse contexto de enfraquecimento das póleis que o reino da Macedônia, ao norte,
          emergiu como nova potência. O rei <strong>Filipe II</strong> (r. 359–336 a.C.) modernizou
          o exército macedônico, introduzindo a <em>falange</em> com lanças de 6 metros
          (<em>sarissas</em>) e uma infantaria pesada disciplinada combinada com cavalaria de elite.
          Na Batalha de Queroneia (338 a.C.), Filipe II derrotou a coalizão ateniense-tebana e
          tornou-se o senhor efetivo da Grécia continental. Com a sua morte assassinada em 336 a.C.,
          o trono passou para seu filho de 20 anos, cuja ambição superaria em muito a do pai.
        </p>
        <div className="lesson-highlight">
          <h3>Alexandre e Aristóteles</h3>
          <p>
            Entre 343 e 340 a.C., Filipe II contratou o filósofo Aristóteles para ser o preceptor
            de Alexandre. Essa relação marcou profundamente o jovem príncipe: Alexandre carregava
            sempre consigo uma cópia da <em>Ilíada</em> de Homero (com anotações de Aristóteles)
            e identificava-se com Aquiles. A campanha que se seguiria foi, para Alexandre, tanto
            conquista militar quanto missão civilizatória grega.
          </p>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conquistas</span>
        <h2>2. Alexandre Magno: A Marcha que Mudou o Mundo</h2>
        <p>
          Em apenas 13 anos de campanha (334–323 a.C.), <strong>Alexandre III da Macedônia</strong>
          — chamado de "Magno" pela posteridade — conquistou um território de cerca de 5 milhões
          de km², que ia da Grécia e Egito até o atual Paquistão e às bordas do Punjab indiano.
          Seu exército, nunca superior a 50.000 homens, derrotou impérios com recursos muito
          maiores. As batalhas decisivas foram:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <h4>Batalha do Granico (334 a.C.)</h4>
            <p>
              Primeira grande vitória de Alexandre contra as forças persas na Anatólia. Demonstrou
              a superioridade tática da falange macedônica e da cavalaria dos hetairoi (companheiros),
              abrindo a porta para a conquista da Ásia Menor.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Batalha de Isso (333 a.C.)</h4>
            <p>
              Alexandre enfrenta pessoalmente o rei persa Dario III, que é derrotado e foge,
              deixando para trás sua família (capturada por Alexandre, que a tratou com respeito).
              Abre o caminho para o Levante, Fenícia e Egito.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Batalha de Gaugamela (331 a.C.)</h4>
            <p>
              A batalha decisiva contra Dario III. Com um exército persa estimado em centenas de
              milhares (provavelmente exagerado), Alexandre usou uma manobra de ruptura do centro
              para esmagar as forças persas. Dario foge novamente e é assassinado por seus próprios
              satrapes. Alexandre torna-se "Rei da Ásia".
            </p>
          </div>
        </div>
        <p>
          No Egito (332 a.C.), Alexandre foi recebido como libertador do jugo persa e aclamado
          faraó. Fundou <strong>Alexandria</strong> no delta do Nilo — a mais famosa das mais de
          70 cidades que fundou com seu nome. Seguindo para leste, conquistou a Pérsia
          (incendiou Persépolis), a Bactria (atual Afeganistão) e avançou até o Punjab (Índia),
          onde seu exército finalmente se recusou a continuar. De volta à Babilônia, Alexandre
          morreu em junho de 323 a.C., com 32 anos, provavelmente de febre tifoide agravada
          pelo consumo excessivo de álcool — embora o envenenamento continue sendo discutido.
        </p>

        {/* SVG 1 — Mapa das conquistas */}
        <div className="lesson-figure">
          <svg viewBox="0 0 620 360" width="620" height="360" aria-label="Conquistas de Alexandre e divisão entre os diádocos">
            <rect x="0" y="0" width="620" height="360" fill="#eaf4fb" rx="6" />
            {/* Mediterrâneo */}
            <ellipse cx="180" cy="120" rx="160" ry="50" fill="#aed6f1" opacity="0.6" />
            <text x="130" y="122" textAnchor="middle" fontSize="10" fill="#1a5276">Mar Mediterrâneo</text>
            {/* Macedônia / Grécia */}
            <rect x="130" y="55" width="80" height="40" rx="5" fill="#3498db" opacity="0.8" />
            <text x="170" y="79" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Macedônia/</text>
            <text x="170" y="91" textAnchor="middle" fontSize="10" fill="#fff">Grécia</text>
            {/* Egito */}
            <rect x="190" y="150" width="80" height="40" rx="5" fill="#f39c12" opacity="0.8" />
            <text x="230" y="175" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Egito (Ptolomaicos)</text>
            {/* Alexandria */}
            <circle cx="215" cy="145" r="6" fill="#e74c3c" />
            <text x="228" y="143" fontSize="10" fill="#c0392b" fontWeight="bold">Alexandria</text>
            {/* Pérsia / Selêucidas */}
            <rect x="340" y="90" width="140" height="40" rx="5" fill="#8e44ad" opacity="0.8" />
            <text x="410" y="114" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Selêucidas (Pérsia/Ásia)</text>
            {/* Babilônia */}
            <circle cx="370" cy="155" r="7" fill="#e74c3c" />
            <text x="383" y="158" fontSize="10" fill="#c0392b" fontWeight="bold">Babilônia</text>
            {/* Pérgamo */}
            <rect x="240" y="60" width="80" height="35" rx="5" fill="#27ae60" opacity="0.8" />
            <text x="280" y="82" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Pérgamo (Átalo)</text>
            {/* Índia */}
            <rect x="500" y="110" width="80" height="35" rx="5" fill="#e67e22" opacity="0.8" />
            <text x="540" y="132" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">Índia (Punjab)</text>
            {/* Rota de Alexandre */}
            <path d="M170,75 L215,75 L260,80 L330,130 L370,155 L430,160 L500,130 L540,120"
              stroke="#e74c3c" strokeWidth="2.5" fill="none" strokeDasharray="6,3" />
            <text x="350" y="205" textAnchor="middle" fontSize="10" fill="#c0392b">--- Rota de Alexandre</text>
            {/* Legenda */}
            <rect x="20" y="255" width="15" height="10" fill="#3498db" rx="2" />
            <text x="40" y="265" fontSize="10" fill="#333">Antigônidas (Macedônia/Grécia)</text>
            <rect x="20" y="270" width="15" height="10" fill="#f39c12" rx="2" />
            <text x="40" y="280" fontSize="10" fill="#333">Ptolomaicos (Egito)</text>
            <rect x="20" y="285" width="15" height="10" fill="#8e44ad" rx="2" />
            <text x="40" y="295" fontSize="10" fill="#333">Selêucidas (Pérsia/Ásia)</text>
            <rect x="20" y="300" width="15" height="10" fill="#27ae60" rx="2" />
            <text x="40" y="310" fontSize="10" fill="#333">Atálidas (Pérgamo)</text>
            <text x="310" y="345" textAnchor="middle" fontSize="11" fill="#555" fontStyle="italic">Conquistas de Alexandre e reinos diádocos após 323 a.C.</text>
          </svg>
          <p className="lesson-figure-caption">Extensão das conquistas de Alexandre Magno e a divisão do império entre os diádocos após sua morte.</p>
        </div>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Divisão do Império</span>
        <h2>3. Os Diádocos e os Reinos Helenísticos</h2>
        <p>
          Ao ser perguntado em seu leito de morte a quem deixava o império, Alexandre teria respondido
          "ao mais forte" (<em>to kratisto</em>). O que se seguiu foi décadas de guerras sangrentas
          entre seus generais — os <strong>diádocos</strong> ("sucessores") — que dividiram o
          imenso império em reinos independentes. Por volta de 280 a.C., o mapa estava relativamente
          estabilizado em quatro grandes reinos helenísticos:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Reino</th>
                <th>Fundador</th>
                <th>Território</th>
                <th>Capital</th>
                <th>Fim</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ptolomaico</td>
                <td>Ptolomeu I Sóter</td>
                <td>Egito, Cirenaica, Chipre</td>
                <td>Alexandria</td>
                <td>30 a.C. (Cleópatra VII)</td>
              </tr>
              <tr>
                <td>Selêucida</td>
                <td>Seleuco I Nicátor</td>
                <td>Síria, Pérsia, Mesopotâmia, partes da Índia</td>
                <td>Antioquia / Selêucia</td>
                <td>63 a.C. (conquista romana)</td>
              </tr>
              <tr>
                <td>Antigônida</td>
                <td>Antígono II Gônatas</td>
                <td>Macedônia e Grécia</td>
                <td>Pela</td>
                <td>168 a.C. (Pídna — Roma)</td>
              </tr>
              <tr>
                <td>Atálida</td>
                <td>Filétero (Átalo I)</td>
                <td>Pérgamo (Anatólia ocidental)</td>
                <td>Pérgamo</td>
                <td>133 a.C. (legado a Roma)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Todos esses reinos tinham características comuns que definem o helenismo: a elite governante
          e administrativa era de origem grega ou macedônica, a língua grega (<em>koiné</em>) era
          usada nos documentos oficiais, mas a população local mantinha suas línguas, religiões e
          costumes. Havia, portanto, uma tensão constante entre a cultura grega dos dominadores
          e as tradições locais — tensão que gerou tanto conflitos quanto sínteses culturais férteis.
        </p>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cultura</span>
        <h2>4. O Helenismo: Sincretismo, Cosmopolitismo e Koiné</h2>
        <p>
          O helenismo não foi apenas a expansão geográfica da cultura grega — foi sua transformação
          profunda pelo contato com o Oriente. O <strong>sincretismo</strong> foi o processo
          característico dessa época: divindades gregas e orientais foram identificadas e fundidas
          (Zeus com Amon-Rá no Egito, Afrodite com Ishtar na Síria), estilos arquitetônicos se
          mesclaram, filosofias se encontraram. O deus Serápis, criado deliberadamente pelos
          Ptolomeus para fundir as tradições grega e egípcia, é o símbolo perfeito desse processo.
        </p>
        <p>
          O <strong>cosmopolitismo</strong> helenístico contrasta marcadamente com o exclusivismo
          cívico das póleis clássicas: enquanto Atenas distinguia rigidamente o cidadão do
          estrangeiro (<em>xenos</em>) e do escravo, as cidades helenísticas eram espaços de
          intensa mistura — gregos, macedônios, judeus, persas, egípcios, indianos viviam
          e comerciavam juntos. O filósofo estoico Epicteto formularia o ideal do
          <em> cosmopolita</em> — o "cidadão do mundo".
        </p>
        <p>
          A <strong>koiné</strong> (grego "comum") foi o instrumento linguístico que tornou essa
          internacionalização possível: uma forma simplificada do grego ático que se tornou língua
          franca do Mediterrâneo Oriental e do Oriente Próximo por cerca de mil anos. Foi na koiné
          que os Evangelhos do Novo Testamento foram escritos, que a Septuaginta (tradução grega
          do Antigo Testamento) foi produzida e que Paulo de Tarso difundiu o cristianismo pelo
          Império Romano.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Alexandria</span>
        <h2>5. Alexandria: O Maior Centro Intelectual da Antiguidade</h2>
        <p>
          Fundada por Alexandre em 331 a.C. numa posição estratégica no delta ocidental do Nilo,
          Alexandria tornou-se, sob os Ptolomeus, a maior cidade do mundo mediterrâneo e o
          maior centro de produção e conservação de conhecimento da Antiguidade.
        </p>
        <p>
          A <strong>Biblioteca de Alexandria</strong>, fundada por Ptolomeu I e organizada pelo
          poeta Calímaco, tinha como ambição reunir a totalidade do conhecimento escrito do mundo
          antigo. No auge, estima-se que contivesse entre 400.000 e 700.000 rolos de papiro.
          O <em>Mouseion</em> (literalmente "Casa das Musas", de onde deriva a palavra "museu")
          era uma espécie de universidade e academia de pesquisa anexa à Biblioteca, custeada
          pelos Ptolomeus, que atraía os maiores intelectuais do mundo grego e mediterrâneo.
          Estudiosos de toda a bacia mediterrânea — de Eratóstenes (Cirene) a Euclides
          (provável Alexandria) — foram financiados para trabalhar ali.
        </p>
        <p>
          O <strong>Farol de Alexandria</strong>, construído na ilha de Faros durante o reinado de
          Ptolomeu II Filadelfo (c. 280 a.C.) pelo arquiteto Sóstrato de Cnido, tinha entre 100 e
          140 m de altura e projetava sua luz a mais de 50 km com um sistema de espelhos e fogo.
          Era uma das <strong>Sete Maravilhas do Mundo Antigo</strong> e o símbolo da prosperidade
          e ambição ptolomaica. Foi destruído por terramotos entre os séculos XII e XIV d.C.
        </p>
        <div className="lesson-highlight">
          <h3>A Destruição da Biblioteca</h3>
          <p>
            A Biblioteca de Alexandria foi destruída gradualmente — não em um único evento
            catastrófico. Contribuíram para sua deterioração: o incêndio acidental durante a
            ocupação de Júlio César (48 a.C.), que queimou parte do acervo; os ataques do
            imperador Aureliano (270 d.C.); a destruição do Serapeum por cristãos (391 d.C.);
            e, finalmente, a conquista árabe de 642 d.C. O mito de que o califa Omar mandou
            queimar todos os livros em 642 d.C. é contestado por historiadores modernos.
          </p>
        </div>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ciência</span>
        <h2>6. A Revolução Científica Helenística</h2>
        <p>
          O período helenístico produziu uma concentração extraordinária de avanços científicos,
          muitos dos quais só seriam retomados no Renascimento europeu. O Mouseion de Alexandria
          foi o centro desse florescimento, mas outros centros — Pérgamo, Antioquia, Rodes —
          também contribuíram.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <h4>Euclides (c. 300 a.C.)</h4>
            <p>
              Seus "Elementos" sistematizaram a geometria em 13 livros baseados em axiomas e
              deduções lógicas. Obra mais influente da matemática ocidental, foi usada como
              livro-texto nas universidades até o século XIX.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Arquimedes (c. 287–212 a.C.)</h4>
            <p>
              Desenvolveu o princípio hidrostático (empuxo), calculou π com precisão notável,
              inventou a alavanca e o parafuso de Arquimedes para irrigação. Considerado o maior
              matemático e físico da Antiguidade.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Eratóstenes (c. 276–195 a.C.)</h4>
            <p>
              Calculou a circunferência da Terra com erro inferior a 2% usando sombras de estacas
              e geometria. Criou o conceito de latitude e longitude e produziu o primeiro mapa
              sistemático do mundo conhecido.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Hiparco (c. 190–120 a.C.)</h4>
            <p>
              Catalogou mais de 850 estrelas, descobriu a precessão dos equinócios, criou a escala
              de magnitude estelar e produziu o primeiro catálogo astronômico sistemático.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Herófilo e Erasístrato (séc. III a.C.)</h4>
            <p>
              Praticaram dissecções humanas em Alexandria (única vez na Antiguidade em que isso
              foi permitido), distinguiram veias de artérias, identificaram o papel do cérebro
              e fundaram a anatomia científica.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Aristarco de Samos (c. 310–230 a.C.)</h4>
            <p>
              Propôs o modelo heliocêntrico do sistema solar quase 1.800 anos antes de Copérnico.
              Sua ideia foi rejeitada pela maioria dos filósofos, que preferiam o modelo geocêntrico.
            </p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Cientista</th>
                <th>Período</th>
                <th>Principal Contribuição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Euclides</td>
                <td>c. 300 a.C.</td>
                <td>Geometria dedutiva (Elementos)</td>
              </tr>
              <tr>
                <td>Aristarco</td>
                <td>c. 310–230 a.C.</td>
                <td>Heliocentrismo (primeiro modelo solar)</td>
              </tr>
              <tr>
                <td>Arquimedes</td>
                <td>c. 287–212 a.C.</td>
                <td>Princípio de Arquimedes, π, alavanca</td>
              </tr>
              <tr>
                <td>Eratóstenes</td>
                <td>c. 276–195 a.C.</td>
                <td>Circunferência da Terra, geografia sistemática</td>
              </tr>
              <tr>
                <td>Hiparco</td>
                <td>c. 190–120 a.C.</td>
                <td>Catálogo estelar, precessão dos equinócios</td>
              </tr>
              <tr>
                <td>Herófilo</td>
                <td>c. 335–280 a.C.</td>
                <td>Anatomia — dissecção humana, cérebro, pulso</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Filosofia</span>
        <h2>7. As Escolas Filosóficas Helenísticas</h2>
        <p>
          A filosofia helenística diverge profundamente da clássica em sua orientação: enquanto
          Platão e Aristóteles buscavam compreender a natureza do ser, do Estado e do cosmos,
          os filósofos helenísticos focavam na questão prática: como viver bem? Como alcançar
          a felicidade (<em>eudaimonia</em>) num mundo incerto e perigoso? As principais escolas:
        </p>
        <p>
          O <strong>Estoicismo</strong>, fundado por Zenão de Cítio (c. 334–262 a.C.) no Pórtico
          pintado (<em>Stoa Poikilê</em>) de Atenas, ensinava que a virtude é o único bem verdadeiro
          e que as emoções (paixões) devem ser controladas pela razão. A serenidade diante das
          adversidades (<em>apatheia</em>) e a aceitação racional da ordem cósmica são os pilares
          estoicos. O estoicismo foi a filosofia dominante nas elites romanas por séculos: Marco
          Aurélio, Sêneca e Epicteto foram estoicos ilustres.
        </p>
        <p>
          O <strong>Epicurismo</strong>, fundado por Epicuro de Samos (341–270 a.C.), é frequentemente
          malcompreendido: não pregava o hedonismo irresponsável, mas a busca pelo prazer simples e
          duradouro — a amizade, a conversa filosófica, a ausência de dor física (<em>aponia</em>) e
          de angústia mental (<em>ataraxia</em>). Epicuro argumentava que o medo da morte era irracional
          (pois quando a morte chega, nós não existimos mais) e que os deuses não se importam
          com os assuntos humanos.
        </p>
        <p>
          O <strong>Ceticismo</strong> (fundado por Pirro de Élis, c. 360–270 a.C.) questionava a
          possibilidade do conhecimento certo: como nossas percepções são falíveis, devemos
          suspender o julgamento (<em>epoché</em>) e alcançar a tranquilidade pela indiferença
          às doutrinas. O <strong>Cinismo</strong> (Diógenes de Sínope, c. 400–325 a.C.) radicalizava
          o ideal de virtude ao extremo: rejeitar todas as convenções sociais e viver como um cão
          (o nome "cínico" vem do grego <em>kynós</em>, cão) — o que levou Diógenes a viver num
          barril e a dizer a Alexandre que o único favor que desejava era que o grande conquistador
          saísse da frente do sol.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Arte</span>
        <h2>8. Arte Helenística: Emoção, Realismo e Grandiosidade</h2>
        <p>
          A arte do período clássico grego buscava o equilíbrio, a serenidade e o ideal — corpos
          humanos perfeitos, sem emoção extrema, representando tipos universais. A arte helenística
          rompeu com esse cânone em busca do individual, do emocional e do dramático.
        </p>
        <p>
          A <strong>Vênus de Milo</strong> (c. 150–100 a.C., atualmente no Louvre) exemplifica
          a transição: ainda idealizada, mas com uma torção do corpo (<em>contrapposto</em>)
          que sugere movimento e vida. O <strong>Laocoonte e seus Filhos</strong> (c. 200–50 a.C.,
          Museus do Vaticano) vai muito mais longe: a escultura representa o sacerdote troiano e
          seus filhos sendo estrangulados por serpentes, com expressões de agonia intensa —
          músculos tensos, bocas abertas, olhares desesperados. O <strong>Colosso de Rodes</strong>
          (c. 280 a.C.), estátua de bronze do deus Hélio com mais de 30 metros de altura, guardava
          a entrada do porto da ilha de Rodes — outra das Sete Maravilhas do Mundo Antigo, destruída
          por terramoto em 226 a.C.
        </p>

        {/* SVG 2 — Linha do tempo helenística */}
        <div className="lesson-figure">
          <svg viewBox="0 0 600 200" width="600" height="200" aria-label="Linha do tempo do período helenístico">
            <rect x="0" y="0" width="600" height="200" fill="#fdf6e3" rx="6" />
            {/* Linha */}
            <line x1="30" y1="100" x2="575" y2="100" stroke="#888" strokeWidth="2" />
            <polygon points="575,95 590,100 575,105" fill="#888" />
            {/* Morte de Alexandre */}
            <circle cx="50" cy="100" r="7" fill="#e74c3c" />
            <text x="50" y="80" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#c0392b">323 a.C.</text>
            <text x="50" y="67" textAnchor="middle" fontSize="9" fill="#555">Morte de</text>
            <text x="50" y="56" textAnchor="middle" fontSize="9" fill="#555">Alexandre</text>
            {/* Fundação Alexandria */}
            <circle cx="120" cy="100" r="6" fill="#f39c12" />
            <text x="120" y="125" textAnchor="middle" fontSize="9" fill="#d68910">331/Alexandria</text>
            {/* Batalha de Ipso */}
            <circle cx="190" cy="100" r="6" fill="#8e44ad" />
            <text x="190" y="80" textAnchor="middle" fontSize="9" fill="#6c3483">301 a.C.</text>
            <text x="190" y="67" textAnchor="middle" fontSize="9" fill="#555">Batalha de</text>
            <text x="190" y="56" textAnchor="middle" fontSize="9" fill="#555">Ipso (diádocos)</text>
            {/* Conquista Roma — Grécia */}
            <circle cx="340" cy="100" r="7" fill="#2980b9" />
            <text x="340" y="125" textAnchor="middle" fontSize="9" fill="#1a5276">146 a.C.</text>
            <text x="340" y="140" textAnchor="middle" fontSize="9" fill="#555">Roma conquista</text>
            <text x="340" y="153" textAnchor="middle" fontSize="9" fill="#555">Grécia</text>
            {/* Pérgamo a Roma */}
            <circle cx="410" cy="100" r="6" fill="#27ae60" />
            <text x="410" y="80" textAnchor="middle" fontSize="9" fill="#1e8449">133 a.C.</text>
            <text x="410" y="67" textAnchor="middle" fontSize="9" fill="#555">Pérgamo</text>
            <text x="410" y="56" textAnchor="middle" fontSize="9" fill="#555">legado a Roma</text>
            {/* Morte Cleópatra */}
            <circle cx="540" cy="100" r="8" fill="#c0392b" />
            <text x="540" y="125" textAnchor="middle" fontSize="9" fill="#922b21">30 a.C.</text>
            <text x="540" y="140" textAnchor="middle" fontSize="9" fill="#555">Morte de Cleópatra</text>
            <text x="540" y="153" textAnchor="middle" fontSize="9" fill="#555">Egito → Roma</text>
            {/* Título */}
            <text x="300" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#333">Linha do Tempo Helenística (323–30 a.C.)</text>
          </svg>
          <p className="lesson-figure-caption">Do fim de Alexandre à conquista romana: três séculos de mundo helenístico.</p>
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fim do Período</span>
        <h2>9. A Conquista Romana e o Legado Helenístico</h2>
        <p>
          O fim do período helenístico foi gradual e resultado da expansão do poder romano no
          Mediterrâneo Oriental. Em <strong>146 a.C.</strong>, Roma destruiu Corinto (a maior
          cidade grega do período) e transformou a Grécia continental em província romana
          (Macedonia e, posteriormente, Acaia). O reino de Pérgamo foi legado a Roma por
          testamento em <strong>133 a.C.</strong>. O reino selêucida foi progressivamente
          desmembrado pela expansão parta (leste) e romana (oeste), sendo formalmente encerrado
          em <strong>63 a.C.</strong> por Pompeu. O reino ptolomaico do Egito sobreviveu mais,
          servindo frequentemente como peão nas guerras civis romanas — foi no Egito que
          Júlio César se aliou a Cleópatra VII, e que Marco Antônio buscou refúgio após
          Actium. Com a morte de Cleópatra e Marco Antônio em <strong>30 a.C.</strong>,
          o Egito tornou-se propriedade pessoal do imperador Augusto, encerrando o
          período helenístico.
        </p>
        <p>
          Mas o helenismo não morreu com os reinos helenísticos — ele sobreviveu absorvido
          pela cultura romana. Os romanos conquistaram militarmente a Grécia, mas foram
          culturalmente conquistados pelos gregos: o poeta Horácio resumiu isso na célebre
          frase "Graecia capta ferum victorem cepit" (a Grécia capturada capturou seu feroz
          vencedor). A filosofia, a arte, a literatura, a medicina e a ciência helenísticas
          foram adotadas, adaptadas e transmitidas pela cultura romana ao mundo ocidental
          medieval e moderno.
        </p>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese ENEM</span>
        <h2>10. Como o ENEM Cobra o Helenismo</h2>
        <p>
          O ENEM aborda o período helenístico principalmente como um momento de síntese cultural
          e de expansão do conhecimento. As questões frequentemente exploram: (1) o conceito de
          sincretismo cultural como resultado do contato entre culturas diferentes; (2) a ciência
          helenística como exemplo de produção de conhecimento baseado em observação e raciocínio
          lógico; (3) Alexandria como espaço de cosmopolitismo e centralização do saber;
          (4) a koiné como instrumento de comunicação intercultural e seu papel na difusão do
          cristianismo; (5) a comparação entre filosofias clássica e helenística em relação à
          ética e ao papel do indivíduo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Escola Filosófica</th>
                <th>Fundador</th>
                <th>Princípio Central</th>
                <th>Caminho para a Felicidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Estoicismo</td>
                <td>Zenão de Cítio</td>
                <td>Virtude como único bem; razão como guia</td>
                <td>Controle das paixões; aceitar o destino (apatheia)</td>
              </tr>
              <tr>
                <td>Epicurismo</td>
                <td>Epicuro de Samos</td>
                <td>Prazer simples; ausência de dor e angústia</td>
                <td>Amizade, ataraxia, rejeição do medo da morte</td>
              </tr>
              <tr>
                <td>Ceticismo</td>
                <td>Pirro de Élis</td>
                <td>Impossibilidade do conhecimento certo</td>
                <td>Suspensão do julgamento (epoché); tranquilidade</td>
              </tr>
              <tr>
                <td>Cinismo</td>
                <td>Diógenes de Sínope</td>
                <td>Rejeição de convenções sociais; vida simples</td>
                <td>Virtude radical; independência dos bens materiais</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Palavras-chave ENEM</h3>
          <p>
            Sincretismo — Cosmopolitismo — Koiné — Diádocos — Alexandria — Biblioteca de Alexandria —
            Euclides — Arquimedes — Eratóstenes — Estoicismo — Epicurismo — Laocoonte — Cleópatra —
            "A Grécia capturou seu vencedor" — Farol de Alexandria
          </p>
        </div>
      </section>

      {/* ── Exercícios ── */}
      <Exercise
        level="Básico"
        title="Sincretismo Helenístico"
        statement={
          <p>
            O período helenístico (323–30 a.C.) é caracterizado pelo encontro da cultura grega com
            as civilizações do Oriente Próximo, Egito e Pérsia. O resultado desse processo foi:
          </p>
        }
        options={[
          { letter: "A", text: "A destruição das culturas locais e a imposição total da cultura grega sobre os povos conquistados." },
          { letter: "B", text: "O isolamento das culturas grega e oriental, que coexistiram sem nenhuma forma de intercâmbio ou fusão." },
          { letter: "C", text: "O sincretismo cultural: a fusão de elementos gregos e orientais em arte, religião, filosofia e ciência, gerando uma nova síntese cosmopolita.", correct: true },
          { letter: "D", text: "O renascimento exclusivo das tradições orientais, que suplanfaram a cultura grega nos territórios conquistados." },
          { letter: "E", text: "A formação de uma cultura única e homogênea idêntica em todos os territórios do antigo império de Alexandre." },
        ]}
        resolution={
          <p>
            O helenismo é definido pelo sincretismo: a fusão criativa de elementos gregos e orientais.
            Nem os gregos impuseram sua cultura sem modificação (eles próprios foram influenciados pelo
            Oriente), nem as culturas locais foram completamente destruídas. O resultado foi uma nova
            síntese — como o deus Serápis, criado para fundir Zeus e Osíris, ou a koiné, que misturava
            dialetos gregos numa língua comum.
          </p>
        }
      />

      <Exercise
        level="Intermediário"
        title="Ciência Helenística"
        statement={
          <p>
            Eratóstenes de Cirene (c. 276–195 a.C.), diretor da Biblioteca de Alexandria, calculou
            a circunferência da Terra usando a diferença de ângulo de sombras de estacas em duas
            cidades (Alexandria e Siena) no mesmo dia do ano. Seu resultado foi de aproximadamente
            39.375 km (o valor real é 40.075 km). Qual característica do método de Eratóstenes o
            torna relevante para a história da ciência?
          </p>
        }
        options={[
          { letter: "A", text: "O uso de revelações religiosas e textos sagrados como base para cálculos astronômicos." },
          { letter: "B", text: "A dependência de viagens exploratórias para medir fisicamente o terreno entre as duas cidades." },
          { letter: "C", text: "A aplicação de observação empírica (medição de sombras) combinada com raciocínio geométrico para produzir conhecimento quantitativo sobre o mundo natural.", correct: true },
          { letter: "D", text: "A confirmação experimental da teoria geocêntrica de Aristóteles, provando que a Terra era o centro do universo." },
          { letter: "E", text: "O uso de instrumentos matemáticos sofisticados que só seriam inventados novamente no século XVI d.C." },
        ]}
        resolution={
          <p>
            O método de Eratóstenes combina observação empírica (a medição sistemática de ângulos
            de sombras em lugares e horários precisos) com dedução geométrica (o teorema de que
            ângulos alternos internos formados por linhas paralelas são iguais). Esse método —
            observação + raciocínio matemático — antecipa os princípios do método científico moderno
            e demonstra a maturidade científica do período helenístico.
          </p>
        }
      />

      <Exercise
        level="Avançado"
        title="Filosofia Helenística e Individualismo"
        statement={
          <p>
            "A virtude é o único bem; riqueza, prazer e saúde são indiferentes. O sábio age de
            acordo com a razão e aceita o destino com serenidade." (Adaptado do estoicismo de
            Zenão de Cítio.)<br /><br />
            Qual característica do contexto histórico helenístico explica o apelo dessas filosofias
            centradas na interioridade e na serenidade individual?
          </p>
        }
        options={[
          { letter: "A", text: "O florescimento das democracias helenísticas, que estimulavam a participação política ativa e o debate público." },
          { letter: "B", text: "A estabilidade política garantida pelos reinos diádocos, que libertou os cidadãos de preocupações políticas e permitiu o foco na vida interior." },
          { letter: "C", text: "A perda da autonomia das póleis e a inserção dos indivíduos em impérios vastos e impessoais, gerando a busca por segurança interior e fórmulas de vida boa independentes da participação política.", correct: true },
          { letter: "D", text: "A influência das religiões orientais, especialmente do budismo trazido pelas campanhas de Alexandre, sobre a filosofia grega." },
          { letter: "E", text: "O retorno aos ideais platônicos de contemplação da verdade eterna, que caracterizou o pensamento filosófico do período." },
        ]}
        resolution={
          <p>
            O contexto é fundamental aqui: nas póleis clássicas, o indivíduo encontrava sentido
            na participação política da cidade. Com a macedonização e a formação de impérios
            vastos, o cidadão comum perdeu relevância política — ninguém participava de assembleia
            no Império Selêucida da mesma forma que na Atenas de Péricles. As filosofias helenísticas
            responderam a essa crise oferecendo caminhos para a felicidade individual independentes
            das circunstâncias externas: o estoicismo, o epicurismo e o ceticismo são todos
            "filosofias do indivíduo" em contraste com a "filosofia da polis" clássica.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="Koiné e o Novo Testamento"
        statement={
          <p>
            Os Evangelhos do Novo Testamento (escritos entre c. 70–100 d.C.) foram redigidos
            em koiné — o grego comum helenístico —, não em aramaico (língua materna de Jesus)
            nem em latim (língua oficial de Roma).<br /><br />
            Qual legado do período helenístico esse fato ilustra?
          </p>
        }
        options={[
          { letter: "A", text: "O domínio político romano sobre as províncias do Oriente Médio, que impôs o grego como língua administrativa." },
          { letter: "B", text: "A persistência da koiné helenística como língua franca do Mediterrâneo Oriental, permitindo que textos religiosos atingissem o maior público possível.", correct: true },
          { letter: "C", text: "A decisão deliberada dos apóstolos de rejeitar o aramaico por ser uma língua de povos conquistados pelo Império Romano." },
          { letter: "D", text: "A influência direta da Biblioteca de Alexandria sobre os autores dos Evangelhos, que estudaram nesse centro intelectual." },
          { letter: "E", text: "A imposição da cultura grega pelo imperador Augusto sobre todas as províncias do Império Romano, incluindo a Judeia." },
        ]}
        resolution={
          <p>
            A koiné helenística sobreviveu por séculos após o fim dos reinos helenísticos porque
            era a língua de comunicação de milhões de pessoas no Mediterrâneo Oriental. Paulo de
            Tarso escrevia suas cartas em koiné para alcançar comunidades judaicas e gentias
            dispersas do Egito à Grécia, da Síria à Itália. Os Evangelhos foram escritos em koiné
            pela mesma razão: era a língua que mais gente entendia na região. Isso é herança direta
            do cosmopolitismo linguístico helenístico.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="Alexandre e a Questão da Identidade Cultural"
        statement={
          <p>
            Alexandre Magno adotou trajes persas, casou-se com princesas persas e bactrianas, e
            exigiu que seus companheiros macedônicos fizessem a <em>proskynese</em> (prostração
            diante do rei, costume persa). Muitos macedônicos resistiram veementemente a essas
            práticas.<br /><br />
            Esse conflito dentro do exército de Alexandre revela:
          </p>
        }
        options={[
          { letter: "A", text: "Que Alexandre havia se convertido à religião zoroastriana persa e imposto seus ritos a todos os súditos." },
          { letter: "B", text: "A resistência dos macedônicos à assimilação com povos conquistados — tensão entre a visão de Alexandre de integração cultural e o etnocentrismo de seus seguidores.", correct: true },
          { letter: "C", text: "Que a cultura persa era superiora à macedônica em todos os aspectos, levando Alexandre a abandonar suas origens." },
          { letter: "D", text: "A oposição religiosa dos macedônicos, que eram cristãos e recusavam os rituais pagãos persas." },
          { letter: "E", text: "Uma disputa puramente cerimonial sem implicações políticas ou culturais para a administração do império." },
        ]}
        resolution={
          <p>
            A política de fusão cultural de Alexandre é um dos debates centrais da historiografia
            sobre o período: Alexandre queria criar uma elite perso-macedônica que governasse
            o império unido, ou estava simplesmente usando convenções persas para legitimar-se
            diante de seus novos súditos? Em qualquer caso, a resistência dos macedônicos
            ilustra que o sincretismo helenístico não foi um processo pacífico ou consensual,
            mas resultado de tensões reais entre grupos com lealdades culturais distintas.
          </p>
        }
      />
    </article>
  );
}
