"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap21Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 21</span>
          <h1>Civilizações Pré-Colombianas</h1>
          <p>
            Antes de 1492, as Américas abrigavam entre 50 e 100 milhões de
            pessoas organizadas em centenas de culturas, línguas e sistemas
            políticos. Maias, Astecas e Incas ergueram impérios, calendários e
            cidades que espantaram os europeus — e que foram sistematicamente
            destruídos pela conquista.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 1: PANORAMA GERAL ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Panorama</span>
        <h2>A América antes de 1492</h2>
        <p>
          A narrativa colonial descreveu a América como uma "terra vazia" ou
          habitada por povos "primitivos". A arqueologia e a demografia
          histórica demoliram esse mito. Estimativas modernas apontam que entre
          50 e 100 milhões de pessoas viviam nas Américas no final do século XV
          — população semelhante à da Europa contemporânea.
        </p>
        <p>
          Eram centenas de povos com línguas, religiões e organizações sociais
          completamente distintas: caçadores-coletores do Ártico, agricultores
          sedentários do altiplano andino, pescadores da costa do Pacífico,
          agricultores de várzea amazônica e pastores de lhamas no planalto.
          Não existe "o índio" — existe uma diversidade comparável à da Eurásia.
        </p>
        <div className="lesson-highlight">
          <strong>Para o ENEM:</strong> A ideia de "descoberta" é uma
          perspectiva eurocêntrica. Do ponto de vista indígena, o evento de
          1492 é descrito como invasão, conquista ou encontro — cada termo
          carregando um posicionamento político e historiográfico distinto.
        </div>
      </section>

      {/* ─── SEÇÃO 2: MAPA SVG ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Localização</span>
        <h2>Onde estavam as grandes civilizações</h2>
        <p>
          As três grandes civilizações pré-colombianas ocupavam zonas
          geográficas bem distintas nas Américas.
        </p>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 520 460"
            width="520"
            height="460"
            aria-label="Mapa esquemático das Américas com localização das civilizações pré-colombianas"
          >
            {/* Fundo */}
            <rect width="520" height="460" fill="#e8f4f8" rx="8" />
            {/* Contorno América do Norte */}
            <path
              d="M60,30 L200,30 L240,80 L260,60 L300,70 L290,120 L230,130 L220,180 L200,190 L190,210 L160,200 L140,220 L110,210 L80,240 L60,200 L50,140 Z"
              fill="#c8dfc8"
              stroke="#7aa87a"
              strokeWidth="1.5"
            />
            {/* Mesoamérica destaque */}
            <path
              d="M190,210 L230,200 L250,220 L240,250 L210,260 L185,245 Z"
              fill="#f4c430"
              stroke="#b8860b"
              strokeWidth="1.5"
            />
            {/* América Central */}
            <path
              d="M210,260 L240,255 L250,280 L230,295 L205,285 Z"
              fill="#c8dfc8"
              stroke="#7aa87a"
              strokeWidth="1"
            />
            {/* América do Sul */}
            <path
              d="M200,300 L280,280 L320,310 L340,380 L310,430 L260,440 L210,420 L180,380 L170,330 Z"
              fill="#c8dfc8"
              stroke="#7aa87a"
              strokeWidth="1.5"
            />
            {/* Andes destaque */}
            <path
              d="M195,310 L220,300 L235,330 L225,390 L205,400 L185,370 L182,330 Z"
              fill="#e8a020"
              stroke="#b8860b"
              strokeWidth="1.5"
            />
            {/* México central destaque (Astecas) */}
            <ellipse cx="215" cy="200" rx="20" ry="14" fill="#e05050" opacity="0.7" />

            {/* Rótulos */}
            <text x="195" y="197" fontSize="8" fontWeight="bold" fill="#7a0000" textAnchor="middle">ASTECAS</text>
            <text x="195" y="206" fontSize="7" fill="#7a0000" textAnchor="middle">Valle do México</text>

            <text x="230" y="243" fontSize="8" fontWeight="bold" fill="#5a4000" textAnchor="middle">MAIAS</text>
            <text x="230" y="252" fontSize="7" fill="#5a4000" textAnchor="middle">Mesoamérica</text>

            <text x="207" y="355" fontSize="8" fontWeight="bold" fill="#5a3000" textAnchor="middle">INCAS</text>
            <text x="207" y="364" fontSize="7" fill="#5a3000" textAnchor="middle">Andes</text>

            {/* Legenda */}
            <rect x="340" y="30" width="16" height="12" fill="#e05050" opacity="0.7" />
            <text x="360" y="41" fontSize="9" fill="#333">Astecas / Mexicas</text>
            <rect x="340" y="50" width="16" height="12" fill="#f4c430" />
            <text x="360" y="61" fontSize="9" fill="#333">Maias</text>
            <rect x="340" y="70" width="16" height="12" fill="#e8a020" />
            <text x="360" y="81" fontSize="9" fill="#333">Incas / Quéchuas</text>

            {/* Oceanos */}
            <text x="30" y="250" fontSize="8" fill="#4a7ab5" transform="rotate(-90,30,250)">Oceano Pacífico</text>
            <text x="430" y="200" fontSize="8" fill="#4a7ab5">Atlântico</text>

            {/* Norte */}
            <text x="460" y="30" fontSize="11" fontWeight="bold" fill="#555">N</text>
            <line x1="465" y1="32" x2="465" y2="50" stroke="#555" strokeWidth="1.5" />
            <polygon points="465,28 462,36 468,36" fill="#555" />
          </svg>
          <figcaption>
            Localização aproximada das três grandes civilizações pré-colombianas
            nas Américas.
          </figcaption>
        </figure>
      </section>

      {/* ─── SEÇÃO 3: MAIAS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Civilização</span>
        <h2>Os Maias</h2>
        <p>
          Os Maias habitaram a Mesoamérica — sul do México (Yucatán, Chiapas),
          Guatemala, Belize, Honduras e El Salvador. Sua história é dividida em
          três períodos:
        </p>
        <ul>
          <li>
            <strong>Pré-Clássico</strong> (2000 a.C. – 250 d.C.): aldeias
            agrícolas, primeiras cidades
          </li>
          <li>
            <strong>Clássico</strong> (250–900 d.C.): auge das cidades-Estado
            (Tikal, Palenque, Copán, Calakmul)
          </li>
          <li>
            <strong>Pós-Clássico</strong> (900–1521 d.C.): Chichén Itzá,
            Uxmal, decadência e chegada dos espanhóis
          </li>
        </ul>
        <p>
          Ao contrário dos Astecas e Incas, os Maias nunca formaram um império
          unificado. Eram <strong>cidades-Estado independentes</strong>, às
          vezes aliadas, às vezes em guerra, governadas por reis divinos
          (<em>ajaw</em>).
        </p>

        <h3>Ciência e Tecnologia Maia</h3>
        <p>
          Os Maias desenvolveram a única escrita totalmente decifrada da América
          pré-colombiana: a escrita <strong>glífica</strong>, com mais de 800
          símbolos combinando logogramas e silabogramas. Usavam dois calendários
          simultâneos:
        </p>
        <ul>
          <li>
            <strong>Haab</strong>: calendário solar de 365 dias (18 meses de 20
            dias + 5 dias "sem nome")
          </li>
          <li>
            <strong>Tzolkin</strong>: calendário ritual de 260 dias, usado para
            previsões e cerimônias
          </li>
        </ul>
        <p>
          Na matemática, inventaram de forma independente o <strong>zero</strong>{" "}
          e o sistema posicional vigesimal (base 20). Sua astronomia era
          extraordinariamente precisa — calcularam o ciclo de Vênus com erro de
          apenas 14 segundos por ano.
        </p>

        <h3>O Colapso Clássico</h3>
        <p>
          Por volta de 900 d.C., as grandes cidades do período Clássico foram
          abandonadas em poucos séculos. O debate historiográfico aponta
          múltiplas causas: seca prolongada (confirmada por estudos de lago),
          guerras internas entre cidades-Estado, sobrepopulação, desmatamento e
          esgotamento do solo. Os Maias não desapareceram — seus descendentes
          somam hoje cerca de 7 milhões de pessoas.
        </p>
      </section>

      {/* ─── SEÇÃO 4: ASTECAS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Civilização</span>
        <h2>Os Astecas (Mexicas)</h2>
        <p>
          Os Mexicas — chamados "Astecas" pelos historiadores — chegaram ao
          Valle do México vindos do norte lendário de{" "}
          <strong>Aztlan</strong>, migrando como povo nômade. Segundo a lenda,
          seu deus Huitzilopochtli prometeu mostrar o lugar para fundar a nova
          cidade: onde vissem uma águia sobre um cacto devorando uma serpente.
          Em 1325, avistaram o sinal em uma ilha do lago Texcoco e fundaram{" "}
          <strong>Tenochtitlán</strong>.
        </p>
        <p>
          Em menos de duzentos anos, passaram de povo sem terra a senhores do
          maior império da Mesoamérica. Formaram a{" "}
          <strong>Tríplice Aliança</strong> com Texcoco e Tlacopan, dominando
          por tributação cerca de 500 cidades e 5–6 milhões de pessoas.
        </p>

        <h3>Tenochtitlán</h3>
        <p>
          A capital asteca impressionou os conquistadores espanhóis. Com cerca
          de 200.000–300.000 habitantes, era maior que a maioria das cidades
          europeias da época. Erguida em uma ilha conectada ao continente por
          três grandes diques-avenidas (<em>calzadas</em>), abrigava o Templo
          Maior (dedicado a Huitzilopochtli e Tláloc), o enorme mercado de
          Tlatelolco (que Hernán Cortés descreveu como maior e mais organizado
          que qualquer mercado europeu) e redes de{" "}
          <strong>chinampas</strong> — jardins flutuantes que tornavam o lago
          produtivo.
        </p>

        <h3>Religião e Sacrifícios</h3>
        <p>
          Huitzilopochtli, deus do sol e da guerra, precisava de sangue humano
          para continuar seu combate noturno contra as trevas e manter o sol em
          movimento. Os sacrifícios humanos — prisioneiros de guerra capturados
          em "guerras floridas" (<em>xochiyaoyotl</em>) — eram rituais cósmicos,
          não simplesmente crueldade. A historiografia recente questiona os
          números exagerados pelos cronistas espanhóis, usados para justificar
          a conquista.
        </p>
      </section>

      {/* ─── SEÇÃO 5: INCAS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Civilização</span>
        <h2>Os Incas (Quéchuas)</h2>
        <p>
          O <strong>Tawantinsuyu</strong> ("as quatro partes do mundo") era o
          maior império das Américas pré-colombianas, estendendo-se por mais
          de 4.000 km ao longo dos Andes — atual Peru, Equador, Bolívia, Chile
          setentrional e noroeste argentino. A capital era{" "}
          <strong>Cuzco</strong>, considerada o "umbigo do mundo".
        </p>
        <p>
          O <strong>Sapa Inca</strong> era filho do Sol (Inti) — chefe político
          e religioso supremo. Seu poder era legitimado pela origem divina e
          pelo controle de uma imensa burocracia estatal.
        </p>

        <h3>Inovações Administrativas Incas</h3>
        <ul>
          <li>
            <strong>Quipus</strong>: sistema de registro por cordas e nós de
            diferentes cores e posições — usado para contar tributos, censos e
            eventos (sem escrita alfabética)
          </li>
          <li>
            <strong>Estradas</strong>: rede de 40.000 km de caminhos pavimentados
            pelos Andes, com pontes de corda sobre abismos
          </li>
          <li>
            <strong>Chasquis</strong>: mensageiros a pé em revezamento,
            transmitindo informações a mais de 400 km/dia
          </li>
          <li>
            <strong>Mitma</strong>: transferência forçada de populações para
            ocupar territórios conquistados
          </li>
          <li>
            <strong>Mita</strong>: trabalho obrigatório ao Estado em obras
            públicas, minas e agricultura
          </li>
        </ul>
        <p>
          Notavelmente, o Tawantinsuyu funcionava <strong>sem moeda</strong>:
          uma economia de redistribuição onde o Estado arrecadava trabalho
          (<em>mita</em>) e redistribuía alimentos e bens armazenados nos{" "}
          <em>qollqas</em> (depósitos estatais).
        </p>
      </section>

      {/* ─── SEÇÃO 6: TABELA COMPARATIVA ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>As três civilizações lado a lado</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Maias</th>
                <th>Astecas</th>
                <th>Incas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Localização</td>
                <td>Mesoamérica (Yucatán, Guatemala)</td>
                <td>Valle do México</td>
                <td>Andes (Peru, Equador, Bolívia)</td>
              </tr>
              <tr>
                <td>Capital / Centro</td>
                <td>Tikal, Chichén Itzá (cidades-Estado)</td>
                <td>Tenochtitlán</td>
                <td>Cuzco</td>
              </tr>
              <tr>
                <td>Organização política</td>
                <td>Cidades-Estado independentes</td>
                <td>Império tributário (Tríplice Aliança)</td>
                <td>Império centralizado e burocrático</td>
              </tr>
              <tr>
                <td>Escrita</td>
                <td>Glífica (única decifrada)</td>
                <td>Pictográfica / logossilábica</td>
                <td>Quipus (nós, sem escrita)</td>
              </tr>
              <tr>
                <td>Agricultura</td>
                <td>Milho, cacau, terraços</td>
                <td>Chinampas, milho, cacau</td>
                <td>Terraços (andenes), batata, quinoa</td>
              </tr>
              <tr>
                <td>Moeda</td>
                <td>Cacau como moeda</td>
                <td>Cacau e mantas</td>
                <td>Sem moeda (redistribuição)</td>
              </tr>
              <tr>
                <td>Queda</td>
                <td>Colapso interno ~900 d.C. + Espanha (1519–1542)</td>
                <td>Cortés, 1519–1521</td>
                <td>Pizarro, 1532–1533</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SEÇÃO 7: SVG COMPARATIVO ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>Comparativo visual das civilizações</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 540 280"
            width="540"
            height="280"
            aria-label="Diagrama comparativo das três civilizações pré-colombianas"
          >
            <rect width="540" height="280" fill="#f9f6ef" rx="8" />

            {/* Cabeçalhos */}
            <rect x="10" y="10" width="160" height="40" rx="5" fill="#e05050" />
            <text x="90" y="35" fontSize="13" fontWeight="bold" fill="white" textAnchor="middle">MAIAS</text>

            <rect x="190" y="10" width="160" height="40" rx="5" fill="#b8860b" />
            <text x="270" y="35" fontSize="13" fontWeight="bold" fill="white" textAnchor="middle">ASTECAS</text>

            <rect x="370" y="10" width="160" height="40" rx="5" fill="#2a6e8a" />
            <text x="450" y="35" fontSize="13" fontWeight="bold" fill="white" textAnchor="middle">INCAS</text>

            {/* Linhas de dados */}
            {[
              ["Período máximo", "250–900 d.C.", "1427–1521", "1438–1533"],
              ["Capital", "Tikal / Chichén Itzá", "Tenochtitlán", "Cuzco"],
              ["Organização", "Cidades-Estado", "Império tributário", "Império centralizado"],
              ["Escrita", "Glífica decifrada", "Pictográfica", "Quipus (nós)"],
              ["Destaque", "Calendário / zero", "Chinampas / mercado", "Estradas / mita"],
            ].map(([aspecto, maia, asteca, inca], i) => (
              <g key={aspecto} transform={`translate(0,${60 + i * 42})`}>
                <rect x="10" y="2" width="520" height="38" fill={i % 2 === 0 ? "#f0ede4" : "#e8e4d8"} rx="3" />
                <text x="16" y="17" fontSize="8" fontWeight="bold" fill="#555">{aspecto}</text>
                <text x="90" y="30" fontSize="9" fill="#7a0000" textAnchor="middle">{maia}</text>
                <text x="270" y="30" fontSize="9" fill="#6a4000" textAnchor="middle">{asteca}</text>
                <text x="450" y="30" fontSize="9" fill="#1a4e6a" textAnchor="middle">{inca}</text>
                <line x1="170" y1="0" x2="170" y2="40" stroke="#ccc" strokeWidth="0.8" />
                <line x1="350" y1="0" x2="350" y2="40" stroke="#ccc" strokeWidth="0.8" />
              </g>
            ))}
          </svg>
          <figcaption>
            Comparativo esquemático das três principais civilizações
            pré-colombianas.
          </figcaption>
        </figure>
      </section>

      {/* ─── SEÇÃO 8: BRASIL PRÉ-COLONIAL ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Diversidade indígena</span>
        <h2>Os povos indígenas do Brasil antes de 1500</h2>
        <p>
          Enquanto Maias, Astecas e Incas erguiam impérios e cidades, o
          território que hoje é o Brasil abrigava entre 2 e 5 milhões de
          indígenas distribuídos em centenas de etnias. Não havia grandes
          impérios centralizados, mas complexas redes de relações políticas,
          comerciais e rituais.
        </p>
        <p>
          Os grandes grupos linguísticos incluíam:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tronco / Família</th>
                <th>Localização</th>
                <th>Exemplos de povos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tupi-Guarani</td>
                <td>Litoral atlântico, Amazônia</td>
                <td>Tupinambá, Guarani, Tupiniquim</td>
              </tr>
              <tr>
                <td>Macro-Jê</td>
                <td>Cerrado, planalto central, sul</td>
                <td>Kayapó, Xavante, Bororo, Xerente</td>
              </tr>
              <tr>
                <td>Arawak</td>
                <td>Amazônia ocidental, norte</td>
                <td>Baniwa, Baré, Wapixana</td>
              </tr>
              <tr>
                <td>Carib (Karib)</td>
                <td>Norte, fronteira com Venezuela</td>
                <td>Macuxi, Wai Wai, Taurepáng</td>
              </tr>
              <tr>
                <td>Pano</td>
                <td>Amazônia ocidental (Acre)</td>
                <td>Kaxinawá, Yawanawá</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Segundo o IBGE (Censo 2022), o Brasil tem hoje cerca de{" "}
          <strong>1,7 milhão de indígenas</strong>, distribuídos em{" "}
          <strong>305 etnias</strong> que falam <strong>274 línguas</strong>{" "}
          distintas. A redução dramática em relação a 1500 é resultado direto
          da colonização — doenças, guerras, escravidão e etnocídio.
        </p>
      </section>

      {/* ─── SEÇÃO 9: O DEBATE SOBRE A DESCOBERTA ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Historiografia</span>
        <h2>O debate sobre a "descoberta"</h2>
        <p>
          A historiografia tradicional usou o termo "descobrimento" para
          descrever a chegada de Colombo em 1492 e de Cabral em 1500. O
          problema é que a palavra pressupõe que a América estava "escondida"
          ou "vazia" — o que ignora a existência de dezenas de milhões de
          pessoas.
        </p>
        <div className="lesson-highlight">
          <strong>Termos em disputa:</strong>
          <ul>
            <li>
              <strong>Descobrimento</strong>: perspectiva eurocêntrica —
              coloca a Europa como sujeito ativo e os indígenas como invisíveis
            </li>
            <li>
              <strong>Encontro de culturas</strong>: busca neutralidade, mas
              apaga a violência e a assimetria de poder
            </li>
            <li>
              <strong>Conquista / Invasão</strong>: perspectiva indígena e
              decolonial — enfatiza a violência e a resistência
            </li>
          </ul>
        </div>
        <p>
          O ENEM costuma cobrar a perspectiva crítica: a América não estava
          vazia, e o contato de 1492/1500 deu início a um processo de
          destruição sistemática de civilizações que existiam há milênios.
        </p>
      </section>

      {/* ─── SEÇÃO 10: SÍNTESE ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>O que o ENEM cobra sobre as civilizações pré-colombianas</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <h4>Maias</h4>
            <p>
              Escrita glífica única; dois calendários (haab + tzolkin);
              invenção independente do zero; colapso do Clássico (~900 d.C.);
              cidades-Estado, não império.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Astecas</h4>
            <p>
              Tenochtitlán no lago Texcoco; chinampas; Tríplice Aliança;
              sacrifícios humanos como ritual cósmico; Moctezuma II.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Incas</h4>
            <p>
              Tawantinsuyu; quipus; rede de 40.000 km de estradas; mita e
              mitma; Sapa Inca como filho do Sol; Machu Picchu.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Brasil pré-colonial</h4>
            <p>
              2–5 milhões de indígenas; diversidade linguística e cultural;
              sem "impérios" centralizados; hoje 1,7 mi, 305 etnias, 274
              línguas.
            </p>
          </div>
        </div>
      </section>

      {/* ─── EXERCÍCIOS ─── */}
      <Exercise
        level="Básico"
        title="Calendário Maia"
        statement={
          <p>
            Os Maias usavam dois calendários simultaneamente. O calendário
            ritual, com 260 dias, utilizado para previsões e cerimônias
            religiosas, chamava-se:
          </p>
        }
        options={[
          { letter: "A", text: "Haab" },
          { letter: "B", text: "Tzolkin", correct: true },
          { letter: "C", text: "Tawantinsuyu" },
          { letter: "D", text: "Quipu" },
          { letter: "E", text: "Mita" },
        ]}
        resolution={
          <p>
            O <strong>Tzolkin</strong> era o calendário ritual de 260 dias. O
            Haab era o calendário solar de 365 dias. Os dois se combinavam em
            um ciclo de 52 anos (a "Roda Calendárica"). Tawantinsuyu, quipus e
            mita são elementos da civilização Inca.
          </p>
        }
      />

      <Exercise
        level="Intermediário"
        title="A Tríplice Aliança Asteca"
        statement={
          <p>
            O domínio asteca sobre a Mesoamérica foi estabelecido por meio de
            uma coalizão política conhecida como Tríplice Aliança, formada em
            1427. Quais eram as três cidades que a compunham?
          </p>
        }
        options={[
          { letter: "A", text: "Tenochtitlán, Tikal e Cuzco" },
          { letter: "B", text: "Tenochtitlán, Texcoco e Tlacopan", correct: true },
          { letter: "C", text: "Teotihuacán, Texcoco e Chichén Itzá" },
          { letter: "D", text: "Palenque, Copán e Tikal" },
          { letter: "E", text: "Tenochtitlán, Cuzco e Palenque" },
        ]}
        resolution={
          <p>
            A <strong>Tríplice Aliança</strong> era formada por{" "}
            <strong>Tenochtitlán</strong> (capital asteca),{" "}
            <strong>Texcoco</strong> e <strong>Tlacopan</strong>. Tikal e
            Palenque eram cidades Maias; Cuzco era capital dos Incas.
          </p>
        }
      />

      <Exercise
        level="Avançado"
        title="Economia Inca sem moeda"
        statement={
          <p>
            O Tawantinsuyu (Império Inca) funcionava sem sistema monetário,
            baseando-se em um modelo econômico distinto. Assinale a alternativa
            que descreve corretamente esse modelo:
          </p>
        }
        options={[
          { letter: "A", text: "Comércio marítimo com cacau como moeda de troca" },
          {
            letter: "B",
            text: "Economia de redistribuição: o Estado arrecadava trabalho (mita) e redistribuía bens armazenados nos qollqas",
            correct: true,
          },
          { letter: "C", text: "Tributo em ouro e prata pago ao Sapa Inca" },
          { letter: "D", text: "Mercados livres em Cuzco comparáveis aos europeus" },
          { letter: "E", text: "Sistema feudal de servidão nos latifúndios andinos" },
        ]}
        resolution={
          <p>
            Os Incas operavam uma <strong>economia de redistribuição</strong>:
            cada cidadão devia trabalho ao Estado (<em>mita</em>) em obras,
            exército ou agricultura estatal. Em troca, o Estado armazenava
            comida, roupas e ferramentas nos{" "}
            <em>qollqas</em> e os redistribuía em épocas de necessidade. Não
            havia mercados nem moeda circulante.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="(ENEM-estilo) Perspectivas sobre 1492"
        statement={
          <p>
            "Em 1492, ao chegar à América, Cristóvão Colombo não 'descobriu'
            um novo mundo — encontrou mundos já completos, com populações,
            línguas, cidades, religião e história própria. Para os habitantes
            do continente, aquela data marcou o início de um processo de
            destruição." (Adaptado de historiografia decolonial, século XXI.)
          </p>
        }
        options={[
          {
            letter: "A",
            text: "O texto defende que Colombo não chegou às Américas em 1492",
          },
          {
            letter: "B",
            text: "O texto questiona a noção eurocêntrica de 'descobrimento', propondo que o evento representou invasão para os povos americanos",
            correct: true,
          },
          {
            letter: "C",
            text: "A passagem afirma que a chegada europeia não teve consequências negativas",
          },
          {
            letter: "D",
            text: "O texto sugere que os povos americanos eram culturalmente inferiores",
          },
          {
            letter: "E",
            text: "A historiografia decolonial nega a importância histórica de 1492",
          },
        ]}
        resolution={
          <p>
            O texto adota a perspectiva <strong>decolonial</strong>, que
            critica o uso do termo "descobrimento" por pressupor que o
            continente estava vazio ou sem história. Para os povos indígenas,
            1492 marcou o início de um processo de conquista, destruição e
            dominação — não um "encontro neutro". Essa perspectiva é cobrada
            com frequência no ENEM em questões de história e ciências humanas.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="Colapso maia e mudanças ambientais"
        statement={
          <p>
            Pesquisas recentes sobre o colapso das cidades Maias do período
            Clássico (por volta de 900 d.C.) analisaram sedimentos de lagos na
            região e encontraram evidências de seca prolongada e desmatamento
            intenso. Com base nessas evidências e no contexto histórico, é
            correto afirmar que:
          </p>
        }
        options={[
          {
            letter: "A",
            text: "O colapso foi causado exclusivamente pela chegada dos espanhóis",
          },
          {
            letter: "B",
            text: "O colapso ocorreu de forma repentina, em um único ano, por causa de epidemias",
          },
          {
            letter: "C",
            text: "O colapso maia é interpretado como resultado de múltiplos fatores interligados: seca, desmatamento, guerras internas e sobrepopulação",
            correct: true,
          },
          {
            letter: "D",
            text: "Os Maias desapareceram completamente com o colapso do período Clássico",
          },
          {
            letter: "E",
            text: "As evidências de lago descartam qualquer fator político ou militar no colapso",
          },
        ]}
        resolution={
          <p>
            O colapso maia é um fenômeno <strong>multicausal</strong>: as
            evidências paleoclimáticas (sedimentos de lago) confirmam seca
            severa, mas isso se combinava com desmatamento para fins agrícolas
            (que agravava a seca), guerras entre cidades-Estado e possível
            sobrepopulação. Os Maias não desapareceram — abandonaram as grandes
            cidades e seus descendentes vivem até hoje. Os espanhóis chegaram
            somente no século XVI.
          </p>
        }
      />
    </article>
  );
}
