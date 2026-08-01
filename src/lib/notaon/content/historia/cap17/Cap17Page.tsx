"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap17Page() {
  return (
    <article className="lesson-landing">
      {/* ── HERO ── */}
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 17</span>
          <h1>Renascimento Cultural e Humanismo</h1>
          <p>
            Entre os séculos XIV e XVI, a Europa viveu uma das mais profundas
            revoluções culturais da história: o Renascimento. Nas cidades-Estado
            italianas, financiado por banqueiros e príncipes, floresceu um novo
            modelo de ser humano — racional, curioso, centrado no mundo terreno
            e na herança greco-romana. Arte, literatura, filosofia e ciência foram
            transformadas. O ENEM cobra regularmente as obras, os artistas e as
            ideias que definiram essa época inaugural da Modernidade.
          </p>
        </div>
      </section>

      {/* ── 1. CONTEXTO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 1</span>
        <h2>Contexto histórico: Itália dos séculos XIV–XVI</h2>
        <p>
          O Renascimento nasceu na Itália por razões específicas. As
          <strong> cidades-Estado</strong> italianas — Florença, Veneza, Milão,
          Gênova, Roma — acumularam enorme riqueza por meio do comércio
          mediterrâneo e das rotas para o Oriente. Essa riqueza possibilitou
          o <strong>mecenato</strong>: príncipes, banqueiros e papas financiavam
          artistas e intelectuais em troca de prestígio e imortalidade cultural.
        </p>
        <div className="lesson-highlight">
          <strong>Por que a Itália primeiro?</strong>
          <ul>
            <li>
              <strong>Contato com o Oriente:</strong> o comércio com Bizâncio e
              o Oriente islâmico trouxe manuscritos gregos e romanos perdidos no
              Ocidente. A queda de Constantinopla (1453) acelerou esse processo
              — sábios gregos fugiram para a Itália trazendo consigo obras de
              Platão, Aristóteles e Ptolomeu.
            </li>
            <li>
              <strong>Herança clássica visível:</strong> ruínas romanas, esculturas,
              inscrições — os italianos viviam rodeados por testemunhos físicos
              de sua herança antiga, gerando fascínio e nostalgia.
            </li>
            <li>
              <strong>Acumulação comercial:</strong> banqueiros como os Médici
              de Florença tinham capital suficiente para financiar décadas de
              produção artística e intelectual sem depender de encomendas religiosas.
            </li>
          </ul>
        </div>
      </section>

      {/* ── 2. HUMANISMO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 2</span>
        <h2>O humanismo: do teocentrismo ao antropocentrismo</h2>
        <p>
          A mudança fundamental do Renascimento foi de cosmovisão:
          o <strong>teocentrismo</strong> medieval (Deus no centro de tudo,
          o ser humano como ser decaído esperando a vida eterna) foi
          progressivamente substituído pelo <strong>antropocentrismo</strong>
          renascentista (o ser humano como centro e medida de todas as coisas,
          capaz de compreender e transformar o mundo pela razão).
        </p>

        {/* SVG 1: Diagrama comparativo teocentrismo x antropocentrismo */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 720 320" width="100%" aria-label="Diagrama comparando cosmovisão medieval e renascentista">
            <rect x="0" y="0" width="720" height="320" fill="#fafafa" rx="8" stroke="#ddd" strokeWidth="1" />

            {/* COLUNA MEDIEVAL */}
            <rect x="20" y="20" width="310" height="280" rx="10" fill="#e8e0f5" stroke="#7c4dff" strokeWidth="1.5" />
            <text x="175" y="50" textAnchor="middle" fill="#4527a0" fontSize="15" fontWeight="bold">TEOCENTRISMO MEDIEVAL</text>

            {/* Sol/Deus no centro medieval */}
            <circle cx="175" cy="130" r="40" fill="#ffd740" stroke="#f9a825" strokeWidth="2" />
            <text x="175" y="126" textAnchor="middle" fill="#333" fontSize="13" fontWeight="bold">DEUS</text>
            <text x="175" y="142" textAnchor="middle" fill="#555" fontSize="10">centro de tudo</text>

            {/* Ser humano ao redor */}
            <circle cx="175" cy="210" r="20" fill="#b39ddb" stroke="#7c4dff" strokeWidth="1.5" />
            <text x="175" y="215" textAnchor="middle" fill="#222" fontSize="9">ser humano</text>
            <line x1="175" y1="170" x2="175" y2="190" stroke="#7c4dff" strokeWidth="1.5" strokeDasharray="4,3" />

            <text x="175" y="250" textAnchor="middle" fill="#4527a0" fontSize="10">Razão subordinada à fé</text>
            <text x="175" y="265" textAnchor="middle" fill="#4527a0" fontSize="10">Corpo = tentação, pecado</text>
            <text x="175" y="280" textAnchor="middle" fill="#4527a0" fontSize="10">Vida terrena = vale de lágrimas</text>

            {/* COLUNA RENASCENTISTA */}
            <rect x="390" y="20" width="310" height="280" rx="10" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="1.5" />
            <text x="545" y="50" textAnchor="middle" fill="#1b5e20" fontSize="15" fontWeight="bold">ANTROPOCENTRISMO</text>
            <text x="545" y="68" textAnchor="middle" fill="#1b5e20" fontSize="12">RENASCENTISTA</text>

            {/* Ser humano no centro renascentista */}
            <circle cx="545" cy="130" r="40" fill="#a5d6a7" stroke="#2e7d32" strokeWidth="2" />
            <text x="545" y="125" textAnchor="middle" fill="#1b5e20" fontSize="11" fontWeight="bold">SER</text>
            <text x="545" y="140" textAnchor="middle" fill="#1b5e20" fontSize="11" fontWeight="bold">HUMANO</text>

            {/* Elementos ao redor */}
            {[
              { cx: 485, cy: 205, label: "razão" },
              { cx: 545, cy: 220, label: "natureza" },
              { cx: 605, cy: 205, label: "ciência" },
            ].map((el, i) => (
              <g key={i}>
                <circle cx={el.cx} cy={el.cy} r="18" fill="#66bb6a" opacity="0.6" />
                <text x={el.cx} y={el.cy + 4} textAnchor="middle" fill="#1b5e20" fontSize="9">{el.label}</text>
                <line x1={el.cx} y1={el.cy - 18} x2={545 + (el.cx - 545) * 0.5} y2={165} stroke="#2e7d32" strokeWidth="1" />
              </g>
            ))}

            <text x="545" y="255" textAnchor="middle" fill="#1b5e20" fontSize="10">Razão como caminho para a verdade</text>
            <text x="545" y="270" textAnchor="middle" fill="#1b5e20" fontSize="10">Corpo = beleza, expressão da dignidade</text>
            <text x="545" y="285" textAnchor="middle" fill="#1b5e20" fontSize="10">Vida terrena = realizável e valorosa</text>

            {/* Seta de transição */}
            <path d="M340,160 C360,160 370,160 390,160" stroke="#555" strokeWidth="2" fill="none" markerEnd="url(#arr)" />
            <defs>
              <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#555" />
              </marker>
            </defs>
            <text x="365" y="152" textAnchor="middle" fill="#555" fontSize="9">séc.</text>
            <text x="365" y="165" textAnchor="middle" fill="#555" fontSize="9">XIV–XVI</text>
          </svg>
          <figcaption>
            Do teocentrismo medieval ao antropocentrismo renascentista:
            a mudança fundamental de cosmovisão
          </figcaption>
        </figure>

        <p>
          O humanismo renascentista se expressou no programa dos
          <em> studia humanitatis</em>: gramática, retórica, poesia, história
          e filosofia moral — disciplinas voltadas para o ser humano em sua
          dimensão terrena, não para a teologia. O latim e o grego clássicos
          tornaram-se modelos de linguagem e pensamento.
        </p>
      </section>

      {/* ── 3. ARTES PLÁSTICAS ITALIANAS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 3</span>
        <h2>As artes plásticas italianas: perspectiva, anatomia e beleza humana</h2>
        <p>
          A grande inovação técnica do Renascimento foi a
          <strong> perspectiva matemática</strong> linear, desenvolvida por
          Filippo Brunelleschi e teorizada por Leon Battista Alberti: pela
          primeira vez, os pintores conseguiram representar a profundidade do
          espaço tridimensional numa superfície plana, simulando a visão humana.
          Além disso, o estudo da anatomia (dissecação de cadáveres) permitiu
          representar o corpo humano com precisão nunca vista.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Artista</th>
                <th>Período</th>
                <th>Obras principais</th>
                <th>Contribuição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Leonardo da Vinci</strong></td>
                <td>1452–1519</td>
                <td>Mona Lisa, A Última Ceia, Homem Vitruviano</td>
                <td>Polímata: pintura, escultura, engenharia, anatomia, botânica; sfumato (gradação de luz e sombra)</td>
              </tr>
              <tr>
                <td><strong>Michelangelo Buonarroti</strong></td>
                <td>1475–1564</td>
                <td>Pietà, Davi, teto da Capela Sistina (Criação de Adão)</td>
                <td>Musculatura heroica; síntese entre beleza clássica e profundidade espiritual cristã</td>
              </tr>
              <tr>
                <td><strong>Rafael Sanzio</strong></td>
                <td>1483–1520</td>
                <td>A Escola de Atenas, As Madonas</td>
                <td>Equilíbrio e harmonia; Escola de Atenas = síntese da filosofia clássica (Platão e Aristóteles)</td>
              </tr>
              <tr>
                <td><strong>Sandro Botticelli</strong></td>
                <td>1445–1510</td>
                <td>O Nascimento de Vênus, A Primavera</td>
                <td>Mitologia greco-romana como tema legítimo para a arte; beleza sensorial valorizada</td>
              </tr>
              <tr>
                <td><strong>Donatello</strong></td>
                <td>1386–1466</td>
                <td>Davi (bronze), São Jorge</td>
                <td>Primeira escultura em bulto redondo desde a Antiguidade; naturalismo do corpo</td>
              </tr>
              <tr>
                <td><strong>Brunelleschi</strong></td>
                <td>1377–1446</td>
                <td>Cúpula da Catedral de Florença</td>
                <td>Perspectiva matemática; maior cúpula sem suporte desde o Panteão romano</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 4. MECENATO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 4</span>
        <h2>O Mecenato: os Médici e a arte como poder</h2>
        <p>
          O <strong>mecenato</strong> foi o sistema econômico que sustentou o
          Renascimento: ricos patronos financiavam artistas em troca de obras
          que exaltavam sua família e demonstravam poder cultural. O modelo
          romano de Mecenas (patrono de Virgílio e Horácio) foi conscientemente
          revivido.
        </p>
        <div className="lesson-highlight">
          <strong>Os Médici de Florença:</strong> família de banqueiros que
          governou Florença. <em>Cosme de Médici</em> (1389–1464) fundou a
          Academia Platônica e foi mecenas de Donatello. <em>Lourenço "o
          Magnífico"</em> (1449–1492) patrocinou Botticelli, Leonardo e o
          jovem Michelangelo — transformou Florença no maior centro cultural
          da Europa. A frase "os Médici fizeram o Renascimento" é um exagero,
          mas capta a importância do capital privado para a cultura.
        </div>
        <p>
          Além dos Médici, os <strong>papas renascentistas</strong> — especialmente
          Júlio II (que encomendou o teto da Capela Sistina a Michelangelo e a
          Escola de Atenas a Rafael) e Leão X — transformaram Roma num canteiro
          de obras de arte, usando a nova Basílica de São Pedro como projeto
          máximo (e para financiá-la venderam as indulgências que provocaram
          Lutero).
        </p>
      </section>

      {/* ── 5. LITERATURA ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 5</span>
        <h2>Literatura renascentista italiana: de Maquiavel a Petrarca</h2>
        <p>
          A literatura renascentista italiana combinou o retorno aos clássicos
          com a valorização das línguas vernáculas e novas visões de política,
          amor e sociedade.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <strong>Dante Alighieri — A Divina Comédia (c. 1320)</strong>
            <p>
              Síntese da cultura medieval (cosmos cristão com Inferno, Purgatório
              e Paraíso) escrita em italiano vernáculo. Paradoxalmente pré-renascentista
              e renascentista: usa a razão (Virgílio) como guia inicial e valoriza
              a sensibilidade humana ao mesmo tempo que mantém a cosmologia cristã.
            </p>
          </div>
          <div className="lesson-card">
            <strong>Petrarca — Canzoniere (séc. XIV)</strong>
            <p>
              Sonetos de amor em italiano vulgar a Laura: o "eu" individual como
              sujeito poético, a natureza como espelho das emoções, o amor
              como experiência humana central — não mais alegoria religiosa.
            </p>
          </div>
          <div className="lesson-card">
            <strong>Maquiavel — O Príncipe (1513)</strong>
            <p>
              Revolução na teoria política: separou a política da moral e da
              religião. O príncipe deve usar qualquer meio para manter o poder —
              "os fins justificam os meios" (frase atribuída a ele, mas não
              escrita exatamente assim). Fundador da ciência política moderna
              e da realpolitik.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. RENASCIMENTO NO NORTE ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 6</span>
        <h2>Renascimento no Norte da Europa: Erasmo, More, Shakespeare</h2>
        <p>
          O Renascimento do Norte (Holanda, Alemanha, Inglaterra, França) diferiu
          do italiano por um acento mais crítico à Igreja e maior preocupação
          com a reforma social e religiosa — o que o conecta diretamente à
          Reforma Protestante.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pensador</th>
                <th>Obra principal</th>
                <th>Ideia central</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Erasmo de Rotterdam</strong> (1466–1536)</td>
                <td><em>Elogio da Loucura</em> (1511)</td>
                <td>Crítica satírica à Igreja, clero ignorante e reis corruptos; humanismo cristão que queria reformar sem romper</td>
              </tr>
              <tr>
                <td><strong>Thomas More</strong> (1478–1535)</td>
                <td><em>Utopia</em> (1516)</td>
                <td>Ilha imaginária onde reina a propriedade comunal, a tolerância e a racionalidade; crítica à Inglaterra e ao capitalismo nascente</td>
              </tr>
              <tr>
                <td><strong>François Rabelais</strong> (1494–1553)</td>
                <td><em>Gargântua e Pantagruel</em></td>
                <td>Humanismo popular e carnavalesco: o corpo, o riso e a liberdade intelectual como valores</td>
              </tr>
              <tr>
                <td><strong>Shakespeare</strong> (1564–1616)</td>
                <td><em>Hamlet, Romeu e Julieta, Macbeth, Otelo</em></td>
                <td>Teatro que explora a complexidade psicológica dos seres humanos: ambição, amor, ciúme, poder — o ser humano em toda sua contradição</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 7. RENASCIMENTO CIENTÍFICO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 7</span>
        <h2>Renascimento científico: a Revolução Científica</h2>
        <p>
          O humanismo renascentista gerou também uma revolução no método de
          conhecer a natureza. Contra a escolástica medieval (que citava
          autoridades — Aristóteles, a Bíblia — para provar a verdade), os
          novos pensadores propuseram a <strong>observação empírica</strong>
          e o <strong>método experimental</strong> como critérios de verdade.
        </p>

        {/* SVG 2: linha do tempo dos artistas e pensadores */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 760 210" width="100%" aria-label="Linha do tempo do Renascimento: principais artistas e pensadores 1300-1600">
            <rect x="0" y="0" width="760" height="210" fill="#f0f4ff" rx="8" />
            <line x1="30" y1="105" x2="730" y2="105" stroke="#3f51b5" strokeWidth="2.5" />
            <polygon points="730,98 746,105 730,112" fill="#3f51b5" />

            {/* Escala: 1300–1620 = 320 anos; 700px → 2.1875px/ano */}
            {[
              { year: 1300, label: "Dante\n(1265–1321)", col: "lit" },
              { year: 1340, label: "Boccaccio\nPetrarca", col: "lit" },
              { year: 1390, label: "Donatello\n(escultura)", col: "art" },
              { year: 1420, label: "Brunelleschi\n(perspectiva)", col: "art" },
              { year: 1445, label: "Botticelli", col: "art" },
              { year: 1452, label: "Leonardo\nda Vinci", col: "art" },
              { year: 1466, label: "Erasmo", col: "lit" },
              { year: 1473, label: "Copérnico\n(heliocentro)", col: "sci" },
              { year: 1475, label: "Michelangelo", col: "art" },
              { year: 1483, label: "Rafael\nSanzio", col: "art" },
              { year: 1513, label: "O Príncipe\n(Maquiavel)", col: "lit" },
              { year: 1543, label: "De Rev.\n(Copérnico)", col: "sci" },
              { year: 1564, label: "Shakespeare\nGalileu", col: "art" },
            ].map((ev, i) => {
              const x = 30 + (ev.year - 1300) * 2.1875;
              const up = i % 2 === 0;
              const color = ev.col === "art" ? "#1565c0" : ev.col === "sci" ? "#2e7d32" : "#7b1fa2";
              return (
                <g key={i}>
                  <line x1={x} y1="105" x2={x} y2={up ? 60 : 150} stroke={color} strokeWidth="1.5" />
                  <circle cx={x} cy="105" r="4.5" fill={color} />
                  {ev.label.split("\n").map((ln, j) => (
                    <text
                      key={j}
                      x={x}
                      y={(up ? 55 : 165) + j * 12 - (ev.label.split("\n").length - 1) * 5}
                      textAnchor="middle"
                      fill={color}
                      fontSize="8"
                    >
                      {ln}
                    </text>
                  ))}
                </g>
              );
            })}

            {/* Anos de referência no eixo */}
            {[1300, 1350, 1400, 1450, 1500, 1550, 1600].map((yr) => {
              const x = 30 + (yr - 1300) * 2.1875;
              return (
                <g key={yr}>
                  <line x1={x} y1="105" x2={x} y2="112" stroke="#3f51b5" strokeWidth="1" />
                  <text x={x} y="123" textAnchor="middle" fill="#3f51b5" fontSize="9" fontWeight="bold">{yr}</text>
                </g>
              );
            })}

            {/* Legenda */}
            <circle cx="30" cy="190" r="5" fill="#1565c0" />
            <text x="40" y="194" fill="#333" fontSize="9">Arte/Arquitetura</text>
            <circle cx="150" cy="190" r="5" fill="#7b1fa2" />
            <text x="160" y="194" fill="#333" fontSize="9">Literatura/Filosofia</text>
            <circle cx="290" cy="190" r="5" fill="#2e7d32" />
            <text x="300" y="194" fill="#333" fontSize="9">Ciência</text>

            <text x="400" y="200" textAnchor="middle" fill="#777" fontSize="9">Linha do tempo do Renascimento (1300–1620)</text>
          </svg>
          <figcaption>Principais nomes do Renascimento por área (arte, literatura e ciência)</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Cientista</th>
                <th>Descoberta / Obra</th>
                <th>Ruptura com a tradição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Copérnico</strong> (1473–1543)</td>
                <td><em>De revolutionibus orbium coelestium</em> (1543) — heliocentrismo</td>
                <td>A Terra não é o centro do Universo; rompe com Ptolomeu e a cosmologia medieval-cristã</td>
              </tr>
              <tr>
                <td><strong>Galileu Galilei</strong> (1564–1642)</td>
                <td>Telescópio, queda dos corpos, lei do pêndulo</td>
                <td>Observação e experimento contra a autoridade de Aristóteles; condenado pela Inquisição (1633)</td>
              </tr>
              <tr>
                <td><strong>Johannes Kepler</strong> (1571–1630)</td>
                <td>Leis do movimento planetário</td>
                <td>Órbitas são elípticas, não circulares; matematiza os movimentos celestes</td>
              </tr>
              <tr>
                <td><strong>Andreas Vesalius</strong> (1514–1564)</td>
                <td><em>De Humani Corporis Fabrica</em> (1543) — anatomia por dissecação</td>
                <td>Corrigiu mais de 200 erros de Galeno; o corpo humano como objeto de estudo científico</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 8. GUTENBERG ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 8</span>
        <h2>A imprensa de Gutenberg (c. 1450): revolução na difusão do saber</h2>
        <p>
          Johannes Gutenberg inventou os tipos móveis metálicos reutilizáveis
          por volta de 1450 em Mogúncia (Alemanha). A <strong>Bíblia de
          Gutenberg</strong> (1455) foi o primeiro livro impresso em série.
          O impacto foi revolucionário:
        </p>
        <div className="lesson-highlight">
          <ul>
            <li>
              <strong>Queda do preço dos livros:</strong> um livro manuscrito
              custava o equivalente ao salário de meses; um impresso, de horas.
              Em 50 anos, o número de livros na Europa passou de poucos milhares
              para milhões.
            </li>
            <li>
              <strong>Padronização das línguas vernáculas:</strong> livros
              impressos em vernáculo (não latim) ajudaram a fixar gramática e
              ortografia — contribuindo para a formação dos idiomas nacionais.
            </li>
            <li>
              <strong>Reforma Protestante:</strong> as 95 Teses de Lutero (1517)
              se espalharam por toda a Europa em semanas graças à imprensa.
              A reforma seria impossível sem Gutenberg.
            </li>
            <li>
              <strong>Laicização do saber:</strong> a Igreja perdeu o monopólio
              do conhecimento escrito; qualquer letrado podia ler textos
              divergentes da ortodoxia.
            </li>
          </ul>
        </div>
      </section>

      {/* ── 9. RENASCIMENTO E MODERNIDADE ── */}
      <section className="lesson-section">
        <span className="section-kicker">Seção 9</span>
        <h2>O Renascimento e as raízes da Modernidade</h2>
        <p>
          O Renascimento não foi uma "redescoberta da Antiguidade" simplesmente —
          foi uma reinterpretação criativa que gerou algo novo: a
          <strong> Modernidade</strong>. Os elementos que o Renascimento inaugurou
          ou acelerou formam a base do mundo contemporâneo:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <strong>Laicização do saber</strong>
            <p>Ciência separada da teologia; o método empírico como árbitro da verdade; universidades que estudam medicina, matemática e astronomia independentemente da Igreja.</p>
          </div>
          <div className="lesson-card">
            <strong>Valorização do indivíduo</strong>
            <p>O artista como gênio criador (não mais artesão anônimo); o "eu" como sujeito literário; direitos e capacidades do ser humano como valores centrais.</p>
          </div>
          <div className="lesson-card">
            <strong>Proto-capitalismo</strong>
            <p>O mecenato pressupõe acumulação de capital; as cidades-Estado italianas desenvolveram instrumentos financeiros (letra de câmbio, banco, crédito) que prefiguram o capitalismo.</p>
          </div>
          <div className="lesson-card">
            <strong>Razão como método</strong>
            <p>A razão humana — não a revelação — como instrumento de compreensão do mundo; fundamento do Iluminismo do século XVIII.</p>
          </div>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Pratique e Fixe</h2>

        <Exercise
          level="Básico"
          title="Antropocentrismo renascentista"
          statement={
            <p>
              Uma das características fundamentais do Renascimento cultural
              foi a mudança do teocentrismo medieval para o antropocentrismo.
              Essa mudança significava:
            </p>
          }
          options={[
            { letter: "A", text: "A substituição da religião pela ciência como única forma de conhecimento válido" },
            { letter: "B", text: "A colocação do ser humano, e não mais Deus, no centro das preocupações intelectuais e artísticas", correct: true },
            { letter: "C", text: "A rejeição completa da herança greco-romana em favor de uma cultura europeia original" },
            { letter: "D", text: "A democratização do acesso ao conhecimento por meio da imprensa de Gutenberg" },
            { letter: "E", text: "O abandono da arte religiosa e a adoção exclusiva de temas mitológicos" },
          ]}
          resolution={
            <p>
              Antropocentrismo significa colocar o ser humano (anthropos) no
              centro. No Renascimento, isso se traduziu em: valorização da
              razão e da experiência humana, interesse pelo corpo e pela natureza,
              confiança nas capacidades humanas de conhecer e transformar o mundo
              — sem negar necessariamente Deus, mas deslocando o foco para o
              ser humano e para a vida terrena.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="A Escola de Atenas de Rafael"
          statement={
            <p>
              A obra <em>Escola de Atenas</em> (1509–1511), de Rafael Sanzio,
              pintada para os aposentos do papa Júlio II no Vaticano, representa
              os grandes filósofos da Antiguidade. No centro da composição estão
              Platão apontando para cima e Aristóteles apontando para baixo.
              Essa iconografia expressa:
            </p>
          }
          options={[
            { letter: "A", text: "A superioridade da filosofia aristotélica sobre o pensamento platônico, segundo o humanismo renascentista" },
            { letter: "B", text: "A tensão entre as duas grandes tradições filosóficas gregas: o idealismo de Platão (mundo das ideias) versus o empirismo de Aristóteles (mundo sensível)", correct: true },
            { letter: "C", text: "A rejeição papal da filosofia grega em favor da teologia cristã medieval" },
            { letter: "D", text: "O conflito entre ciência e religião que caracterizou a Reforma Protestante" },
            { letter: "E", text: "A tentativa de Rafael de ridicularizar a filosofia pagã num contexto cristão" },
          ]}
          resolution={
            <p>
              Platão aponta para o céu (o mundo das ideias eternas e imutáveis)
              e segura o <em>Timeu</em>; Aristóteles aponta para a terra
              (o mundo sensível e empírico) e segura a <em>Ética a Nicômaco</em>.
              A obra sintetiza a tensão central da filosofia ocidental que o
              humanismo renascentista queria reconciliar — e ilustra o esforço
              renascentista de integrar o pensamento grego com a cosmovisão
              cristã.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Maquiavel e a política moderna"
          statement={
            <p>
              Em <em>O Príncipe</em> (1513), Maquiavel afirma que o governante
              deve aprender "a não ser bom" e usar a força e a esperteza conforme
              a necessidade. Ele compara o príncipe ideal à mistura de leão (força)
              e raposa (astúcia).
              <br /><br />
              Que ruptura intelectual isso representa em relação ao pensamento
              político medieval?
            </p>
          }
          options={[
            { letter: "A", text: "Maquiavel propôs que os reis devem obedecer ao papa em todas as decisões políticas" },
            { letter: "B", text: "Separou a política da moral religiosa, fundando a análise política como ciência autônoma baseada na realidade observada, não em ideais cristãos", correct: true },
            { letter: "C", text: "Defendeu a democracia popular como forma de governo mais eficiente que a monarquia" },
            { letter: "D", text: "Propôs que a virtude cristã é o único fundamento legítimo do poder político" },
            { letter: "E", text: "Rejeitou completamente o uso da violência como instrumento político" },
          ]}
          resolution={
            <p>
              Na teoria política medieval, o bom governante deveria ser virtuoso
              segundo a moral cristã — o poder político derivava de Deus e estava
              subordinado à Igreja. Maquiavel rompeu com isso: descreveu o poder
              como funciona (realismo político), não como deveria ser. A política
              tem suas próprias leis, independentes da moral religiosa — essa
              separação é um marco da modernidade e da laicização do pensamento.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="ENEM — Gutenberg e a Reforma Protestante"
          statement={
            <p>
              "A invenção dos tipos móveis por Gutenberg (c. 1450) tornou possível
              que as 95 Teses de Lutero, afixadas em Wittenberg em outubro de 1517,
              fossem reproduzidas e distribuídas por toda a Europa em questão de
              semanas. Sem a imprensa, a Reforma Protestante provavelmente teria
              sido suprimida como tantas heresias medievais anteriores."
              <br /><br />
              O texto estabelece uma relação entre:
            </p>
          }
          options={[
            { letter: "A", text: "A tecnologia de comunicação e a transformação religiosa e cultural, mostrando como inovações técnicas têm impacto histórico" , correct: true },
            { letter: "B", text: "A censura da Igreja e a impossibilidade de difundir ideias divergentes na Europa do século XVI" },
            { letter: "C", text: "A superioridade do protestantismo sobre o catolicismo como sistema teológico mais racional" },
            { letter: "D", text: "O papel exclusivo de Lutero como inventor da imprensa e da Reforma simultaneamente" },
            { letter: "E", text: "A relação entre comercialização dos livros e o enriquecimento da Igreja Católica" },
          ]}
          resolution={
            <p>
              A afirmativa central é que tecnologia e história se interrelacionam:
              a imprensa foi a infraestrutura que permitiu à Reforma se tornar um
              movimento de massa, não uma heresia local facilmente suprimida. Essa
              é uma habilidade do ENEM: identificar como inovações técnicas
              (imprensa, máquina a vapor, internet) transformam estruturas sociais,
              políticas e culturais.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Mecenato e arte como poder"
          statement={
            <p>
              Os Médici de Florença financiaram Botticelli, Leonardo da Vinci e o
              jovem Michelangelo. O papa Júlio II encomendou o teto da Capela
              Sistina e a Escola de Atenas. Henrique VIII da Inglaterra patrocinou
              Hans Holbein.
              <br /><br />
              Que função política o mecenato renascentista cumpria para seus
              patronos?
            </p>
          }
          options={[
            { letter: "A", text: "Era uma forma de caridade religiosa para compensar crimes e pecados" },
            { letter: "B", text: "Servia para enfraquecer a nobreza feudal ao desviar recursos para artistas em vez de exércitos" },
            { letter: "C", text: "Construía prestígio, legitimidade e memória histórica para os patronos, transformando poder econômico em poder simbólico e cultural", correct: true },
            { letter: "D", text: "Tinha como único objetivo preservar a herança greco-romana para as gerações futuras" },
            { letter: "E", text: "Era uma forma de taxação disfarçada: os artistas devolviam os recursos ao Estado" },
          ]}
          resolution={
            <p>
              O mecenato era estratégia de poder: um banqueiro que financia
              Michelangelo transforma dinheiro (poder econômico) em beleza e
              prestígio (poder simbólico). A arte dizia "somos civilizados,
              somos poderosos, seremos lembrados". Para o ENEM: a arte nunca
              é apenas estética — é sempre também política, econômica e social.
              Analisar quem financia a arte e por quê é uma habilidade de
              interpretação de fontes.
            </p>
          }
        />
      </section>
    </article>
  );
}
