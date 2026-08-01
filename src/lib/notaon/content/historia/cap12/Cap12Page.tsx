"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap12Page() {
  return (
    <article className="lesson-landing">
      {/* ── HERO ── */}
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 12</span>
          <h1>Crise do Império Romano e legado greco-romano</h1>
          <p>
            O Império Romano, que chegou a dominar toda a bacia do Mediterrâneo,
            entrou em colapso progressivo a partir do século III d.C. A combinação
            de anarquia militar, invasões bárbaras, epidemias e crise econômica
            fragmentou o maior Estado do mundo antigo. Porém, sua herança — o
            direito, a língua, o cristianismo e a filosofia grega — moldou
            profundamente toda a civilização ocidental e é tema recorrente no ENEM.
          </p>
        </div>
      </section>

      {/* ── 1. A CRISE DO SÉCULO III ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 1</span>
        <h2>A Crise do Século III (235–284 d.C.): "Anarquia Militar"</h2>
        <p>
          Entre 235 e 284 d.C. o Império Romano viveu seu período mais caótico.
          Cinquenta imperadores se sucederam em cinquenta anos — a maioria morta
          pelos próprios soldados. Este período é chamado de <strong>Anarquia
          Militar</strong> (ou Crise do Terceiro Século) e representou a
          confluência de várias crises simultâneas.
        </p>
        <div className="lesson-highlight">
          <strong>Causas da Crise do Século III:</strong>
          <ul>
            <li>
              <strong>Instabilidade política:</strong> os exércitos das fronteiras
              elegiam (e assassinavam) imperadores — o poder dependia
              exclusivamente da lealdade militar.
            </li>
            <li>
              <strong>Invasões bárbaras simultâneas:</strong> godos e alamanos
              invadiram o Danúbio e o Reno ao mesmo tempo em que os persas
              sassânidas atacavam a fronteira oriental; o imperador Valeriano foi
              capturado pelos persas (260 d.C.) — humilhação inédita.
            </li>
            <li>
              <strong>Epidemias:</strong> a Peste de Cipriano (249–262 d.C.)
              matou até 5.000 pessoas por dia em Roma; o despovoamento rural
              reduziu a produção agrícola.
            </li>
            <li>
              <strong>Crise econômica e monetária:</strong> para pagar os
              exércitos, os imperadores reduziram o teor de prata das moedas
              (<em>debasing</em>), gerando inflação, desconfiança e colapso das
              trocas monetárias. O escambo voltou a predominar no campo.
            </li>
          </ul>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Dimensão da crise</th>
                <th>Manifestação principal</th>
                <th>Consequência imediata</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Política</td>
                <td>50 imperadores em 50 anos</td>
                <td>Ausência de governo central estável</td>
              </tr>
              <tr>
                <td>Militar</td>
                <td>Fronteiras invadidas ao mesmo tempo</td>
                <td>Perda de territórios e saque de cidades</td>
              </tr>
              <tr>
                <td>Epidemiológica</td>
                <td>Peste de Cipriano (249–262)</td>
                <td>Despovoamento, colapso da mão de obra</td>
              </tr>
              <tr>
                <td>Econômica</td>
                <td>Desvalorização da moeda (debasing)</td>
                <td>Inflação, retorno ao escambo, queda do comércio</td>
              </tr>
              <tr>
                <td>Social</td>
                <td>Abandono das cidades, êxodo rural invertido</td>
                <td>Pré-condições do feudalismo medieval</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 2. DIOCLECIANO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 2</span>
        <h2>Diocleciano (284–305 d.C.): a Tetrarquia e a Reforma Imperial</h2>
        <p>
          Diocleciano encerrou a anarquia militar com uma reorganização radical
          do Estado. Percebendo que um único governante não conseguia defender
          um império tão vasto, criou a <strong>Tetrarquia</strong>: dois
          imperadores seniores (<em>Augusti</em>) e dois juniores (<em>Caesares</em>),
          cada qual responsável por uma região. O sistema funcionou durante o
          reinado de Diocleciano, mas logo entrou em colapso após sua abdicação
          (305 d.C.).
        </p>
        <div className="lesson-highlight">
          <strong>Medidas de Diocleciano:</strong>
          <ul>
            <li>
              <strong>Edito Máximo de Preços (301):</strong> tentou controlar
              a inflação fixando preços máximos para centenas de produtos e
              serviços — amplamente desobedecido, é um dos primeiros controles
              de preços documentados da história.
            </li>
            <li>
              <strong>Reforma militar e administrativa:</strong> duplicou o
              tamanho do exército, reorganizou as províncias em dioceses
              (origem da palavra usada pela Igreja), criou uma burocracia
              centralizada.
            </li>
            <li>
              <strong>Perseguição aos cristãos (303–305):</strong> o "Grande
              Édito" destruiu igrejas, confiscou escrituras sagradas e exigiu
              sacrifícios aos deuses romanos; considerada a mais severa
              perseguição ao cristianismo.
            </li>
          </ul>
        </div>
      </section>

      {/* ── SVG 1: DIVISÃO DO IMPÉRIO EM 395 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização 1</span>
        <h2>Divisão do Império Romano em 395 d.C.</h2>
        <p>
          Em 395, Teodósio dividiu o Império entre seus dois filhos. O Ocidente
          (capital Ravena e depois Roma) entrou em colapso, enquanto o Oriente
          (capital Constantinopla) sobreviveu por mais mil anos como Império
          Bizantino.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 800 400" width="100%" aria-label="Mapa esquemático da divisão do Império Romano em 395 d.C.">
            {/* Fundo do mar Mediterrâneo */}
            <rect x="0" y="0" width="800" height="400" fill="#c8e6f5" rx="8" />
            {/* Continente — Europa / Norte África esquemático */}
            <polygon
              points="60,80 200,60 340,70 420,50 500,65 600,55 720,80 750,150 720,230 650,290 580,310 500,320 400,330 300,320 200,300 130,260 80,200 60,150"
              fill="#d4c89a"
              stroke="#8b7355"
              strokeWidth="2"
            />
            {/* Norte da África */}
            <polygon
              points="80,280 200,260 350,255 500,260 650,265 750,270 760,350 700,370 580,380 400,385 200,375 80,355"
              fill="#e8d5a0"
              stroke="#8b7355"
              strokeWidth="2"
            />

            {/* LINHA DE DIVISÃO — aproximada pelo meridiano central */}
            <line x1="390" y1="50" x2="390" y2="395" stroke="#c0392b" strokeWidth="3" strokeDasharray="10,5" />

            {/* IMPÉRIO ROMANO DO OCIDENTE */}
            <rect x="30" y="110" width="180" height="55" rx="6" fill="#e74c3c" opacity="0.75" />
            <text x="120" y="133" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Império do</text>
            <text x="120" y="150" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">OCIDENTE</text>
            <text x="120" y="175" textAnchor="middle" fill="#333" fontSize="11">Cap.: Roma / Ravena</text>
            <text x="120" y="192" textAnchor="middle" fill="#333" fontSize="11">Honório (Teodósio)</text>

            {/* IMPÉRIO ROMANO DO ORIENTE */}
            <rect x="560" y="110" width="200" height="55" rx="6" fill="#2980b9" opacity="0.75" />
            <text x="660" y="133" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Império do</text>
            <text x="660" y="150" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">ORIENTE</text>
            <text x="660" y="175" textAnchor="middle" fill="#333" fontSize="11">Cap.: Constantinopla</text>
            <text x="660" y="192" textAnchor="middle" fill="#333" fontSize="11">Arcádio (Teodósio)</text>

            {/* Marcadores de cidades */}
            <circle cx="175" cy="210" r="7" fill="#c0392b" stroke="white" strokeWidth="1.5" />
            <text x="175" y="228" textAnchor="middle" fill="#333" fontSize="10">Roma</text>

            <circle cx="620" cy="130" r="7" fill="#2980b9" stroke="white" strokeWidth="1.5" />
            <text x="620" y="148" textAnchor="middle" fill="#333" fontSize="10">Constantinopla</text>

            {/* Legenda */}
            <rect x="20" y="340" width="16" height="16" fill="#e74c3c" rx="3" />
            <text x="42" y="353" fill="#222" fontSize="11">Ocidente (fim em 476)</text>
            <rect x="200" y="340" width="16" height="16" fill="#2980b9" rx="3" />
            <text x="222" y="353" fill="#222" fontSize="11">Oriente / Bizâncio (até 1453)</text>
            <line x1="460" y1="340" x2="490" y2="340" stroke="#c0392b" strokeWidth="3" strokeDasharray="6,3" />
            <text x="498" y="353" fill="#222" fontSize="11">Linha de divisão (395 d.C.)</text>

            <text x="400" y="395" textAnchor="middle" fill="#555" fontSize="10">Divisão de Teodósio (395 d.C.) — esquema simplificado</text>
          </svg>
          <figcaption>Divisão do Império Romano em 395 d.C.: Ocidente (Honório) e Oriente (Arcádio)</figcaption>
        </figure>
      </section>

      {/* ── 3. CONSTANTINO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 3</span>
        <h2>Constantino (306–337 d.C.): reunificação e Edito de Milão</h2>
        <p>
          Constantino emergiu das guerras civis pós-Diocleciano e reunificou
          o Império. Seu reinado foi marcado por três decisões históricas de
          enorme impacto:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <strong>Edito de Milão (313)</strong>
            <p>
              Promulgado com Licínio, garantiu tolerância religiosa a todos os
              cultos do Império — especialmente ao cristianismo. Os cristãos
              puderam retomar propriedades confiscadas. Não foi o estabelecimento
              do cristianismo como religião oficial (isso veio com Teodósio), mas
              o fim das perseguições.
            </p>
          </div>
          <div className="lesson-card">
            <strong>Concílio de Niceia (325)</strong>
            <p>
              Primeiro concílio ecumênico da Igreja, convocado pelo próprio
              Constantino para unificar a doutrina cristã. Debateu-se o
              <em> arianismo</em> (Jesus seria criatura, inferior ao Pai) contra
              a <em>ortodoxia nicena</em> (Jesus consubstancial ao Pai — Trindade).
              O arianismo foi condenado; o Credo de Niceia tornou-se fundamento
              da ortodoxia cristã.
            </p>
          </div>
          <div className="lesson-card">
            <strong>Constantinopla (330)</strong>
            <p>
              Constantino transferiu a capital do Império para Bizâncio, na
              margem europeia do Bósforo, renomeada Constantinopla ("cidade de
              Constantino"). Localização estratégica: controlava o comércio entre
              Mediterrâneo e Mar Negro e era mais fácil de defender. Hoje é
              Istambul (Turquia).
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. TEODÓSIO E A DIVISÃO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 4</span>
        <h2>Teodósio (379–395 d.C.) e a divisão definitiva</h2>
        <p>
          Teodósio foi o último imperador a governar um Império Romano unificado.
          Em 380, pelo <strong>Édito de Tessalônica</strong>, tornou o
          cristianismo niceno a religião oficial do Estado — o paganismo passou
          a ser ilegal. Em 391, fechou os templos pagãos e proibiu os Jogos
          Olímpicos (que só foram restaurados em 1896).
        </p>
        <p>
          Ao morrer em 395, dividiu o Império entre seus filhos:
          <strong> Honório</strong> (Ocidente, com capital em Milão e depois
          Ravena) e <strong>Arcádio</strong> (Oriente, Constantinopla). A
          divisão que deveria ser administrativa tornou-se permanente.
        </p>
      </section>

      {/* ── 5. QUEDA DO OCIDENTE ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 5</span>
        <h2>As invasões bárbaras e a queda do Ocidente (séc. IV–V)</h2>
        <p>
          Os <strong>hunos</strong>, povo nômade da Ásia Central liderado por
          <strong> Átila</strong> (rei 434–453), avançaram sobre a Europa
          Oriental, empurrando os povos germânicos para dentro das fronteiras
          romanas. Este "efeito dominó" iniciou o colapso final do Ocidente.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Evento</th>
                <th>Data</th>
                <th>Povo / Personagem</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Batalha de Adrianópolis</td>
                <td>378</td>
                <td>Visigodos x Roma</td>
                <td>Primeira grande derrota romana para bárbaros; morte do imperador Valente</td>
              </tr>
              <tr>
                <td>1.º Saque de Roma</td>
                <td>410</td>
                <td>Visigodos (Alarico)</td>
                <td>Choque psicológico imenso — Roma havia 800 anos não era invadida; Agostinho escreve "A Cidade de Deus"</td>
              </tr>
              <tr>
                <td>2.º Saque de Roma</td>
                <td>455</td>
                <td>Vândalos (Genserico)</td>
                <td>Dois saques em 45 anos; origem do termo "vandalismo"</td>
              </tr>
              <tr>
                <td>Fim do Império Romano do Ocidente</td>
                <td>476</td>
                <td>Odoacro (hérulo)</td>
                <td>Depõe Rômulo Augústulo; convencionalmente marca o fim da Antiguidade e o início da Idade Média</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* SVG 2: LINHA DO TEMPO DA QUEDA */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 780 180" width="100%" aria-label="Linha do tempo da queda do Império Romano do Ocidente">
            <rect x="0" y="0" width="780" height="180" fill="#fef9f0" rx="8" />
            {/* Linha principal */}
            <line x1="30" y1="90" x2="750" y2="90" stroke="#8b7355" strokeWidth="3" />
            {/* Seta final */}
            <polygon points="750,82 766,90 750,98" fill="#8b7355" />

            {/* Eventos: posições calculadas em escala 235–476 = 241 anos em 720px → ~2.98px/ano */}
            {/* 235 = x30, 284 = x176, 313 = x267, 325 = x297, 376 = x449, 410 = x550, 455 = x684, 476 = x746 */}

            {[
              { x: 30,  year: "235", label: "Início da\nAnarquia\nMilitar" },
              { x: 176, year: "284", label: "Diocleciano\n(Tetrarquia)" },
              { x: 230, year: "306", label: "Constantino" },
              { x: 267, year: "313", label: "Edito de\nMilão" },
              { x: 330, year: "330", label: "Capital →\nConstantinopla" },
              { x: 449, year: "376", label: "Hunos\nempurram\nbárbaros" },
              { x: 510, year: "395", label: "Divisão\ndefinitiva" },
              { x: 580, year: "410", label: "Saque\n(Visigodos)" },
              { x: 674, year: "455", label: "Saque\n(Vândalos)" },
              { x: 740, year: "476", label: "Fim do\nOcidente" },
            ].map((ev, i) => (
              <g key={i}>
                <line x1={ev.x} y1="90" x2={ev.x} y2={i % 2 === 0 ? 55 : 125} stroke="#5d4037" strokeWidth="1.5" />
                <circle cx={ev.x} cy="90" r="5" fill={ev.year === "476" ? "#c0392b" : "#8b7355"} />
                {ev.label.split("\n").map((ln, j) => (
                  <text
                    key={j}
                    x={ev.x}
                    y={(i % 2 === 0 ? 50 : 140) + j * 13 - (ev.label.split("\n").length - 1) * 6}
                    textAnchor="middle"
                    fill="#333"
                    fontSize="9"
                  >
                    {ln}
                  </text>
                ))}
                <text x={ev.x} y="105" textAnchor="middle" fill="#5d4037" fontSize="9" fontWeight="bold">{ev.year}</text>
              </g>
            ))}

            <text x="400" y="170" textAnchor="middle" fill="#777" fontSize="10">Linha do tempo: Crise do Século III → Queda do Ocidente (235–476 d.C.)</text>
          </svg>
          <figcaption>Linha do tempo da queda do Império Romano do Ocidente (235–476 d.C.)</figcaption>
        </figure>
      </section>

      {/* ── 6. BIZÂNCIO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 6</span>
        <h2>O Império Romano do Oriente — Bizâncio (330–1453)</h2>
        <p>
          Enquanto o Ocidente colapsa em 476, o Império do Oriente — chamado
          pelos historiadores modernos de <strong>Império Bizantino</strong>
          (os próprios habitantes se chamavam "romanos") — sobrevive por mais
          mil anos, até 1453, quando Constantinopla cai para os turcos
          otomanos sob o sultão Mehmed II.
        </p>
        <div className="lesson-highlight">
          <strong>Justiniano I (527–565) — apogeu de Bizâncio:</strong>
          <ul>
            <li>
              <strong>Corpus Juris Civilis:</strong> codificação sistemática de
              todo o direito romano (Código, Digesto, Institutas, Novelas).
              Tornou-se a base dos sistemas jurídicos da Europa continental e da
              América Latina — influencia o Código Civil Brasileiro até hoje.
            </li>
            <li>
              <strong>Reconquistas:</strong> retomou o norte da África (vândalos),
              a Itália (ostrogodos) e parte da Espanha (visigodos), restaurando
              brevemente a unidade mediterrânea.
            </li>
            <li>
              <strong>Hagia Sophia (537):</strong> catedral erguida em apenas
              5 anos — cúpula de 31 metros de diâmetro, maravilha arquitetônica
              que desafiou os limites da engenharia antiga.
            </li>
          </ul>
        </div>
        <p>
          Bizâncio atuou como <strong>ponte cultural</strong>: preservou obras
          gregas (Platão, Aristóteles, Hipócrates) que seriam perdidas no Ocidente,
          transmitiu a herança clássica para os árabes e, após 1453, os sábios
          bizantinos que fugiram para a Itália levaram manuscritos que
          alimentaram o Renascimento.
        </p>
      </section>

      {/* ── 7. LEGADO GRECO-ROMANO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 7</span>
        <h2>O legado greco-romano para o Ocidente</h2>
        <p>
          A civilização greco-romana foi a matriz cultural do mundo ocidental.
          Seus legados permeiam a política, o direito, a ciência, a arte e a
          língua do mundo contemporâneo — e aparecem frequentemente no ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Área</th>
                <th>Origem grega</th>
                <th>Origem romana / latina</th>
                <th>Legado atual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Política</td>
                <td>Democracia (Atenas), cidadania, ágora</td>
                <td>República, Senado, constituição, lei</td>
                <td>Sistemas representativos modernos</td>
              </tr>
              <tr>
                <td>Filosofia</td>
                <td>Platão, Aristóteles, estoicismo</td>
                <td>Cícero, estoicismo romano</td>
                <td>Base do pensamento ocidental e da ética</td>
              </tr>
              <tr>
                <td>Direito</td>
                <td>Noção de justiça, equidade</td>
                <td>Direito Romano, Corpus Juris Civilis</td>
                <td>Códigos civis europeus e latino-americanos</td>
              </tr>
              <tr>
                <td>Língua</td>
                <td>Grego (ciência, filosofia, Bíblia)</td>
                <td>Latim → línguas românicas</td>
                <td>Português, espanhol, francês, italiano, romeno</td>
              </tr>
              <tr>
                <td>Arte / Arquitetura</td>
                <td>Colunas dóricas/jônicas/coríntias, escultura realista</td>
                <td>Arcos, abóbadas, cúpulas, aquedutos</td>
                <td>Arquitetura neoclássica, edifícios públicos</td>
              </tr>
              <tr>
                <td>Esporte / Cultura</td>
                <td>Olimpíadas, teatro, tragédia/comédia</td>
                <td>Circo, gladiadores, literatura (Virgílio, Ovídio)</td>
                <td>Olimpíadas modernas (1896), teatro, literatura ocidental</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 8. LÍNGUA LATINA ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 8</span>
        <h2>A língua latina: mãe das línguas româncias</h2>
        <p>
          O latim vulgar (falado pelos soldados e colonos romanos) se fragmentou
          regionalmente e deu origem às <strong>línguas românicas ou neolatinas</strong>:
          português, espanhol, francês, italiano, romeno, catalão, galego e outras.
          Palavras do cotidiano brasileiro — <em>escola</em> (do latim <em>schola</em>),
          <em>cidade</em> (<em>civitas</em>), <em>amor</em>, <em>pais</em> (<em>pater</em>) —
          são herança direta de Roma.
        </p>
        <div className="lesson-highlight">
          <strong>Palavras latinas que estruturam a democracia moderna:</strong>
          <em>república</em> (res publica = coisa pública), <em>senado</em>
          (senatus = conselho de anciãos), <em>constituição</em>, <em>voto</em>,
          <em>cidadão</em> (civis), <em>eleição</em> (electio). Democracias
          modernas literalmente "falam latim" em seus conceitos políticos.
        </div>
      </section>

      {/* ── 9. CRISTIANISMO COMO HERANÇA ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 9</span>
        <h2>O cristianismo como síntese greco-romana e oriental</h2>
        <p>
          O cristianismo nasceu no Oriente Médio (Palestina), dentro do contexto
          do judaísmo, mas se expandiu pelo <strong>mundo romano</strong> graças
          à infraestrutura imperial (estradas, língua comum, <em>Pax Romana</em>).
          Sua teologia foi elaborada em <strong>grego</strong> pelos pais da
          Igreja (Paulo de Tarso, Orígenes, Atanásio), administrada em
          <strong> latim</strong> no Ocidente e institucionalizada pelo Estado
          romano a partir de Constantino.
        </p>
        <p>
          Sem o Império Romano, o cristianismo provavelmente teria permanecido
          uma seita local. Sem o grego, sua teologia não teria os instrumentos
          conceituais para se desenvolver. O resultado foi uma religião que
          sintetizou a ética judaica, a filosofia grega e a estrutura administrativa
          romana — legado que moldou profundamente a Europa medieval e moderna.
        </p>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Pratique e Fixe</h2>

        <Exercise
          level="Básico"
          title="Crise do Século III"
          statement={
            <p>
              O período compreendido entre 235 e 284 d.C., no qual o Império Romano
              passou por intensa instabilidade política com cerca de 50 imperadores
              em 50 anos, é denominado:
            </p>
          }
          options={[
            { letter: "A", text: "Era de Ouro do Principado" },
            { letter: "B", text: "Anarquia Militar ou Crise do Terceiro Século", correct: true },
            { letter: "C", text: "Tetrarquia de Diocleciano" },
            { letter: "D", text: "Período dos Severos" },
            { letter: "E", text: "Pax Romana" },
          ]}
          resolution={
            <p>
              A "Anarquia Militar" (235–284) foi marcada por extrema instabilidade:
              ~50 imperadores em 50 anos, quase todos assassinados pelo próprio
              exército, além de invasões bárbaras simultâneas, epidemias e crise
              econômica grave.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Edito de Milão"
          statement={
            <p>
              O Edito de Milão (313 d.C.), promulgado por Constantino e Licínio,
              representou um marco fundamental para o cristianismo porque:
            </p>
          }
          options={[
            { letter: "A", text: "Tornou o cristianismo a única religião oficial do Império Romano" },
            { letter: "B", text: "Proibiu todas as práticas pagãs e fechou os templos dos deuses romanos" },
            { letter: "C", text: "Garantiu tolerância religiosa e o direito dos cristãos de praticarem sua fé livremente", correct: true },
            { letter: "D", text: "Convocou o Concílio de Niceia para definir os dogmas cristãos" },
            { letter: "E", text: "Estabeleceu a perseguição sistemática aos cristãos pelo Estado" },
          ]}
          resolution={
            <p>
              O Edito de Milão garantiu tolerância religiosa — não tornou o
              cristianismo religião oficial (isso foi Teodósio em 380, pelo Édito
              de Tessalônica). Encerrou as perseguições e permitiu a devolução de
              propriedades confiscadas aos cristãos.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Legado do Corpus Juris Civilis"
          statement={
            <p>
              O Corpus Juris Civilis, codificado por ordem de Justiniano I
              (527–565), é considerado uma das contribuições mais duradouras da
              civilização romana para o mundo contemporâneo. Analise a afirmativa:
              <br /><br />
              <em>
                "O Código Civil Brasileiro, assim como os sistemas jurídicos da
                maioria dos países da Europa continental e da América Latina,
                deriva fundamentalmente da tradição do direito romano codificado
                por Justiniano, não do Common Law anglo-saxão."
              </em>
            </p>
          }
          options={[
            { letter: "A", text: "Falsa, pois o Brasil adota o sistema Common Law inglês desde a colonização portuguesa" },
            { letter: "B", text: "Falsa, porque Justiniano apenas compilou leis gregas, sem contribuição romana original" },
            { letter: "C", text: "Verdadeira; o direito romano-justinianeu é base dos sistemas de Civil Law, que inclui Brasil e Europa continental", correct: true },
            { letter: "D", text: "Verdadeira apenas para a Europa; o Brasil não foi influenciado pelo direito romano" },
            { letter: "E", text: "Parcialmente verdadeira, pois o Brasil adota um sistema misto entre Civil Law e direito islâmico" },
          ]}
          resolution={
            <p>
              O Brasil adota o sistema de <em>Civil Law</em> (direito codificado),
              herança do direito romano via Portugal e Europa continental. O
              Common Law (sistema de precedentes judiciais) é próprio da
              Inglaterra, EUA e antigas colônias britânicas. O Corpus Juris Civilis
              de Justiniano foi o veículo de transmissão do direito romano para
              a modernidade.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="ENEM 2018 — Queda de Roma e simbolismo"
          statement={
            <p>
              "Em agosto de 410, o general visigodo Alarico saqueou Roma pela
              primeira vez em oitocentos anos. O impacto psicológico foi enorme:
              se a 'Cidade Eterna' podia ser saqueada, o que restava da ideia
              de Império invencível? Santo Agostinho respondeu com 'A Cidade
              de Deus', argumentando que a Roma verdadeira era espiritual,
              não a Roma de pedra e mármore."
              <br /><br />
              Com base no texto, o saque de Roma em 410 evidencia:
            </p>
          }
          options={[
            { letter: "A", text: "O fortalecimento militar romano frente às invasões bárbaras no século V" },
            { letter: "B", text: "A reação violenta dos cristãos às perseguições do governo romano" },
            { letter: "C", text: "A crise do poder imperial romano e a reinterpretação teológica cristã diante do colapso político", correct: true },
            { letter: "D", text: "A aliança entre romanos e visigodos para defender o Ocidente dos hunos" },
            { letter: "E", text: "A conversão de Alarico ao catolicismo niceno como condição para o saque" },
          ]}
          resolution={
            <p>
              O texto revela duas dimensões: (1) a crise política — o saque
              mostrou que a invencibilidade de Roma era um mito; (2) a resposta
              teológica cristã — Agostinho reinterpretou o colapso como sinal
              de que a verdadeira civilização era a "Cidade de Deus", não a
              Roma terrena. Tema típico de ENEM: intersecção entre história
              política e pensamento religioso.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Legado greco-romano nas instituições modernas"
          statement={
            <p>
              Observe as seguintes expressões institucionais do Brasil e do mundo:
              <em> Senado Federal, República, democracia representativa, Código Civil,
              Olimpíadas, tragédia teatral.</em>
              <br /><br />
              A origem dessas expressões e instituições revela que:
            </p>
          }
          options={[
            { letter: "A", text: "As democracias modernas criaram conceitos políticos originais, sem influência do passado" },
            { letter: "B", text: "A civilização greco-romana legou ao Ocidente conceitos políticos, jurídicos e culturais que estruturam as sociedades contemporâneas", correct: true },
            { letter: "C", text: "O legado greco-romano foi completamente apagado durante a Idade Média e só ressurgiu no século XX" },
            { letter: "D", text: "Apenas a religião cristã constitui o verdadeiro legado do mundo antigo às civilizações modernas" },
            { letter: "E", text: "As Olimpíadas modernas foram criadas pelos romanos para substituir os jogos gladiatoriais" },
          ]}
          resolution={
            <p>
              O legado greco-romano é fundacional para o Ocidente moderno:
              "senado" vem do latim <em>senatus</em>; "república" de <em>res
              publica</em>; "democracia" do grego <em>demos + kratos</em>;
              o Código Civil tem raízes no direito romano; as Olimpíadas modernas
              (1896) foram inspiradas nos jogos gregos de Olímpia; o teatro
              ocidental nasce na tragédia e comédia gregas.
            </p>
          }
        />
      </section>
    </article>
  );
}
