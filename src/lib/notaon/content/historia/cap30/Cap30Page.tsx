"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap30Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 30</span>
          <h1>Era Napoleônica e Congresso de Viena</h1>
          <p>
            Nascido numa ilha mediterrânea, Napoleão Bonaparte chegou a controlar
            quase toda a Europa continental. Sua ascensão vertiginosa — de filho
            de uma família menor da pequena nobreza corsa a Imperador dos
            Franceses — é um dos fenômenos mais fascinantes da história moderna.
            Mas o legado de Napoleão vai muito além de suas vitórias militares:
            o Código Civil que ele codificou ainda rege o direito em mais de 40
            países, inclusive o Brasil. Compreender sua trajetória, as guerras
            napoleônicas e o Congresso de Viena que reorganizou a Europa após
            sua queda é essencial para o ENEM.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Homem</span>
        <h2>1. Quem Foi Napoleão Bonaparte</h2>
        <p>
          <strong>Napoleão Bonaparte</strong> nasceu em 15 de agosto de 1769, em
          Ajaccio, na ilha da Córsega — que havia sido vendida pela República de
          Gênova à França apenas um ano antes. Era o segundo filho de Carlo
          Buonaparte, advogado da pequena nobreza local, e de Letizia Ramolino.
          Obteve bolsa de estudos numa escola militar francesa, onde sofreu com o
          sotaque e foi chamado de "o italiano" pelos colegas.
        </p>
        <p>
          O que distinguiu Napoleão foi sua capacidade de usar a{" "}
          <strong>Revolução Francesa</strong> como alavanca. Num regime de
          nascimento e sangue, Napoleão era um ninguém. Na França revolucionária
          — onde o mérito e o talento militar eram o que importava —, pôde
          ascender rapidamente. Tornou-se general aos 24 anos, conquistou a
          campanha da Itália aos 27 e era o estadista mais poderoso da França
          aos 30.
        </p>
        <div className="lesson-highlight">
          <strong>A Campanha do Egito (1798–1799):</strong> Napoleão liderou
          uma expedição ao Egito com objetivo estratégico (cortar a rota
          britânica para a Índia) e científico (levou 167 cientistas, que
          descobriram a <strong>Pedra de Roseta</strong>). A expedição foi um
          fracasso militar — Nelson destruiu a frota francesa em Abukir — mas
          lançou a base da Egiptologia moderna e aumentou o prestígio de Napoleão
          no imaginário popular.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ascensão ao Poder</span>
        <h2>2. O Golpe do 18 Brumário e o Consulado (1799–1804)</h2>
        <p>
          O <strong>Diretório</strong> (1795–1799) era um governo corrupto e
          impopular. Em <strong>9 de novembro de 1799 (18 Brumário do ano VIII)</strong>,
          Napoleão liderou um golpe de Estado — com apoio do irmão Luciano,
          presidente do Conselho dos Quinhentos, e do abade Sieyès. O Diretório
          foi dissolvido e substituído pelo{" "}
          <strong>Consulado</strong>, com três cônsules. Napoleão era o Primeiro
          Cônsul — e, na prática, o governante absoluto.
        </p>
        <h3>As reformas do Consulado</h3>
        <p>
          O período do Consulado (1799–1804) foi a fase mais produtiva e
          modernizadora da era napoleônica. As reformas internas foram
          extraordinárias:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📜</span>
            <h3>Código Civil Napoleônico (1804)</h3>
            <p>
              Unificou o direito civil francês. Estabeleceu igualdade perante a
              lei, propriedade privada garantida, laicismo e contratos civis.
              Base do direito em mais de 40 países, incluindo o Brasil.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏦</span>
            <h3>Banco da França (1800)</h3>
            <p>
              Criação do Banco da França para estabilizar a moeda e financiar o
              Estado — instrumento central da economia moderna francesa.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏫</span>
            <h3>Lycées (Educação)</h3>
            <p>
              Sistema nacional de ensino secundário (os lycées), com currículo
              padronizado — base da educação pública francesa até hoje.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Prefeituras e Centralização</h3>
            <p>
              Criação dos prefetos — representantes nomeados do governo central
              em cada departamento — centralizando a administração que a
              Revolução havia descentralizado.
            </p>
          </div>
          <div className="lesson-card">
            <span>⛪</span>
            <h3>Concordata com o Papa (1801)</h3>
            <p>
              Acordo com o Papa Pio VII reconciliando o Estado francês com a
              Igreja Católica, encerrado o conflito aberto desde 1789.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎖️</span>
            <h3>Legião de Honra (1802)</h3>
            <p>
              Ordem honorífica baseada no mérito, não no nascimento — símbolo
              da meritocracia napoleônica, concedida a civis e militares.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>O Código Civil no Brasil:</strong> O Código Civil Napoleônico
          de 1804 influenciou diretamente o Código Civil brasileiro de 1916
          (Clóvis Beviláqua) e, por extensão, o atual Código Civil de 2002.
          Conceitos como contrato, propriedade, família civil e personalidade
          jurídica têm raízes no código de Napoleão.
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Império</span>
        <h2>3. O Império Napoleônico e as Guerras (1804–1814)</h2>
        <p>
          Em <strong>2 de dezembro de 1804</strong>, na Catedral de Notre-Dame de
          Paris, Napoleão foi coroado Imperador dos Franceses — numa cerimônia
          calculada: tomou a coroa das mãos do Papa Pio VII e a colocou na
          própria cabeça, demonstrando que sua autoridade não vinha de Deus nem
          da Igreja, mas de si mesmo e do povo francês.
        </p>
        <h3>As grandes vitórias</h3>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>As Principais Batalhas da Era Napoleônica</caption>
            <thead>
              <tr>
                <th>Batalha</th>
                <th>Ano</th>
                <th>Resultado</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Trafalgar</td>
                <td>1805</td>
                <td>Derrota francesa para Nelson (marinha)</td>
                <td>Napoleão nunca mais controlou os mares; domínio britânico nos oceanos</td>
              </tr>
              <tr>
                <td>Austerlitz</td>
                <td>1805</td>
                <td>Vitória decisiva sobre Áustria + Rússia</td>
                <td>"A mais bela batalha de Napoleão"; destruiu a 3ª Coalizão</td>
              </tr>
              <tr>
                <td>Jena</td>
                <td>1806</td>
                <td>Vitória esmagadora sobre a Prússia</td>
                <td>Napoleão entrou em Berlim; Prússia humilhada</td>
              </tr>
              <tr>
                <td>Wagram</td>
                <td>1809</td>
                <td>Vitória sobre a Áustria</td>
                <td>Máximo da expansão territorial napoleônica</td>
              </tr>
              <tr>
                <td>Borodino (Moscou)</td>
                <td>1812</td>
                <td>Vitória de Pirro; início do desastre russo</td>
                <td>Napoleão chegou a Moscou vazia e incendiada; recuo catastrófico</td>
              </tr>
              <tr>
                <td>Leipzig (Batalha das Nações)</td>
                <td>1813</td>
                <td>Derrota para coalizão europeia</td>
                <td>Fim do Império; forças de 4 países vs. Napoleão</td>
              </tr>
              <tr>
                <td>Waterloo</td>
                <td>1815</td>
                <td>Derrota para Wellington (UK) + Blücher (Prússia)</td>
                <td>Fim definitivo de Napoleão; exílio em Santa Helena</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 4 — SVG MAPA EUROPA ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mapa</span>
        <h2>4. A Europa Napoleônica no Apogeu (~1810)</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 580 400"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Mapa esquemático da Europa napoleônica em seu apogeu por volta de 1810"
          >
            <rect x="0" y="0" width="580" height="400" fill="#d4e8f7" rx="8" />

            {/* França — centro */}
            <polygon
              points="190,160 260,140 290,180 270,240 210,250 175,210"
              fill="#1565c0"
              stroke="#0d47a1"
              strokeWidth="2"
            />
            <text x="225" y="198" textAnchor="middle" fontSize="13" fill="white" fontWeight="bold">FRANÇA</text>
            <text x="225" y="213" textAnchor="middle" fontSize="9" fill="#bbdefb">Império</text>

            {/* Territórios satélites — reino da Espanha */}
            <polygon
              points="90,230 185,220 185,300 100,310 70,270"
              fill="#42a5f5"
              stroke="#1565c0"
              strokeWidth="1.5"
            />
            <text x="128" y="268" textAnchor="middle" fontSize="10" fill="white">Espanha</text>
            <text x="128" y="280" textAnchor="middle" fontSize="8" fill="#e3f2fd">(irmão José)</text>

            {/* Reino da Itália */}
            <polygon
              points="270,230 330,210 360,290 300,310 265,280"
              fill="#42a5f5"
              stroke="#1565c0"
              strokeWidth="1.5"
            />
            <text x="310" y="265" textAnchor="middle" fontSize="10" fill="white">Itália</text>

            {/* Confederação do Reno */}
            <polygon
              points="260,110 340,100 360,160 300,175 265,150"
              fill="#64b5f6"
              stroke="#1565c0"
              strokeWidth="1.5"
            />
            <text x="305" y="140" textAnchor="middle" fontSize="9" fill="white">Conf. do Reno</text>

            {/* Prússia — enfraquecida */}
            <polygon
              points="340,80 430,70 445,130 370,145 335,120"
              fill="#ffcc80"
              stroke="#e65100"
              strokeWidth="1.5"
            />
            <text x="388" y="108" textAnchor="middle" fontSize="10" fill="#333">Prússia</text>

            {/* Áustria — derrotada mas sobrevivente */}
            <polygon
              points="340,155 430,140 460,200 390,225 335,205"
              fill="#ffab91"
              stroke="#bf360c"
              strokeWidth="1.5"
            />
            <text x="398" y="185" textAnchor="middle" fontSize="10" fill="#333">Áustria</text>

            {/* Rússia — resistente */}
            <polygon
              points="450,60 540,55 555,170 460,175 435,110"
              fill="#a5d6a7"
              stroke="#1b5e20"
              strokeWidth="1.5"
            />
            <text x="495" y="115" textAnchor="middle" fontSize="10" fill="#1b5e20">Rússia</text>

            {/* Grã-Bretanha — não conquistada */}
            <ellipse cx="115" cy="110" rx="50" ry="35" fill="#ff8a65" stroke="#bf360c" strokeWidth="2" />
            <text x="115" y="107" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Grã-</text>
            <text x="115" y="120" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Bretanha</text>
            <text x="115" y="133" textAnchor="middle" fontSize="8" fill="#ffccbc">não conquistada</text>

            {/* Mar do Norte */}
            <text x="210" y="80" textAnchor="middle" fontSize="9" fill="#555" fontStyle="italic">Mar do Norte</text>
            {/* Mediterrâneo */}
            <text x="300" y="360" textAnchor="middle" fontSize="9" fill="#555" fontStyle="italic">Mar Mediterrâneo</text>

            {/* Legenda */}
            <rect x="10" y="310" width="210" height="80" fill="white" stroke="#aaa" strokeWidth="1" rx="4" />
            <text x="20" y="328" fontSize="11" fontWeight="bold" fill="#333">Legenda</text>
            <rect x="20" y="336" width="14" height="10" fill="#1565c0" />
            <text x="40" y="346" fontSize="9" fill="#333">França (Império)</text>
            <rect x="20" y="352" width="14" height="10" fill="#42a5f5" />
            <text x="40" y="362" fontSize="9" fill="#333">Territórios satélites</text>
            <rect x="20" y="368" width="14" height="10" fill="#ffcc80" />
            <text x="40" y="378" fontSize="9" fill="#333">Aliados/Derrotados</text>
            <rect x="115" y="336" width="14" height="10" fill="#ff8a65" />
            <text x="135" y="346" fontSize="9" fill="#333">Resistentes</text>
            <rect x="115" y="352" width="14" height="10" fill="#a5d6a7" />
            <text x="135" y="362" fontSize="9" fill="#333">Não controlados</text>
            <text x="20" y="388" fontSize="8" fill="#888">* Mapa esquemático para fins didáticos</text>
          </svg>
          <figcaption>A Europa napoleônica em seu apogeu (c. 1810): a França controlava diretamente ou por satélites a maior parte do continente</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Bloqueio</span>
        <h2>5. O Sistema Continental e o Brasil</h2>
        <p>
          Após a derrota naval de <strong>Trafalgar (1805)</strong>, Napoleão
          percebeu que jamais derrotaria a Grã-Bretanha no mar. Sua resposta foi
          o <strong>Bloqueio Continental (1806)</strong>: um decreto que proibia
          todos os países europeus de comerciar com a Grã-Bretanha, tentando
          asfixiar economicamente o grande inimigo.
        </p>
        <p>
          A consequência para o Brasil foi direta e profunda:
        </p>
        <ul>
          <li>
            <strong>Portugal recusa o Bloqueio</strong> — dependia do comércio
            com a Grã-Bretanha (aliança histórica desde o Tratado de Windsor de
            1386). Napoleão exige que Portugal adira ao Bloqueio; Portugal recusa.
          </li>
          <li>
            <strong>Invasão de Portugal (novembro de 1807)</strong> — o general
            Junot lidera as forças francesas através da Espanha até Lisboa.
          </li>
          <li>
            <strong>Fuga da família real (novembro–dezembro de 1807)</strong> —
            com escolta britânica, D. João VI e toda a corte portuguesa (cerca
            de 10.000 pessoas) embarcam para o Brasil. Chegam a Salvador em
            janeiro de 1808 e ao Rio de Janeiro em março de 1808.
          </li>
          <li>
            <strong>Abertura dos Portos (28/01/1808)</strong> — D. João, ainda
            em Salvador, assina o decreto de Abertura dos Portos às Nações
            Amigas — fim do exclusivo comercial e início do comércio direto do
            Brasil com outras nações, especialmente a Grã-Bretanha.
          </li>
        </ul>
        <div className="lesson-highlight">
          <strong>ENEM — conexão direta:</strong> A cadeia de causa e efeito
          Napoleão → Bloqueio Continental → Invasão de Portugal → Fuga da
          família real → Abertura dos Portos → Transformação do Brasil é
          fundamental e frequentemente cobrada nas provas.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">A Queda</span>
        <h2>6. A Campanha da Rússia e a Queda de Napoleão</h2>
        <p>
          Em junho de 1812, Napoleão invadiu a Rússia com a{" "}
          <em>Grande Armée</em> — cerca de <strong>600.000 homens</strong>, o
          maior exército já reunido até aquele momento na história europeia.
          O czar Alexandre I recusou o combate aberto e adotou a tática da{" "}
          <strong>terra arrasada</strong>: recuar, queimar colheitas, cidades e
          suprimentos, deixando o exército francês sem alimentos e no frio russo.
        </p>
        <p>
          Napoleão chegou a Moscou em setembro de 1812 — e encontrou a cidade
          vazia e em chamas (os próprios russos a incendiaram). Sem suprimentos,
          sem inimigo para combater e com o inverno chegando, Napoleão ordenou
          a retirada em outubro. O inverno russo — com temperaturas chegando a
          -35°C — dizimou o exército. Dos 600.000 homens que entraram na
          Rússia, <strong>menos de 100.000</strong> voltaram.
        </p>
        <p>
          A derrota na Rússia encorajou as potências europeias a formarem a{" "}
          <strong>Sexta Coalizão</strong>. Na{" "}
          <strong>Batalha das Nações (Leipzig, outubro 1813)</strong>, forças
          austríacas, prussiana, russa e sueca derrotaram Napoleão. Ele abdicou
          em abril de 1814 e foi exilado na <strong>Ilha de Elba</strong>.
        </p>
        <h3>Os Cem Dias e Waterloo</h3>
        <p>
          Em março de 1815, Napoleão escapou da Ilha de Elba, desembarcou no
          sul da França e marcheu para Paris — os soldados enviados para prendê-lo
          se juntaram a ele. Luís XVIII fugiu. Napoleão governou por{" "}
          <strong>100 dias</strong> — até ser finalmente derrotado em{" "}
          <strong>Waterloo (18/06/1815)</strong> pelo duque de Wellington
          (Grã-Bretanha) e pelo marechal Blücher (Prússia). Exilado na remota
          ilha de <strong>Santa Helena</strong> no Atlântico Sul, sob custódia
          britânica, morreu em 1821.
        </p>
      </section>

      {/* ── SEÇÃO 7 — SVG LINHA DO TEMPO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cronologia</span>
        <h2>7. Linha do Tempo da Era Napoleônica</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 300"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Linha do tempo da Era Napoleônica de 1799 a 1821"
          >
            <rect x="0" y="0" width="700" height="300" fill="#fafafa" rx="8" />
            <text x="350" y="24" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#333">Era Napoleônica (1799–1821)</text>

            {/* Linha */}
            <line x1="30" y1="150" x2="680" y2="150" stroke="#1565c0" strokeWidth="3" />
            <polygon points="680,144 695,150 680,156" fill="#1565c0" />

            {/* 1799 — 18 Brumário */}
            <line x1="60" y1="150" x2="60" y2="80" stroke="#555" strokeWidth="1.5" />
            <circle cx="60" cy="150" r="7" fill="#1565c0" />
            <rect x="15" y="55" width="90" height="28" fill="#e3f2fd" rx="3" stroke="#1565c0" strokeWidth="1" />
            <text x="60" y="69" textAnchor="middle" fontSize="9" fill="#1565c0" fontWeight="bold">1799</text>
            <text x="60" y="79" textAnchor="middle" fontSize="8" fill="#333">18 Brumário</text>

            {/* 1804 — Império */}
            <line x1="155" y1="150" x2="155" y2="220" stroke="#555" strokeWidth="1.5" />
            <circle cx="155" cy="150" r="7" fill="#c62828" />
            <rect x="110" y="220" width="90" height="28" fill="#ffebee" rx="3" stroke="#c62828" strokeWidth="1" />
            <text x="155" y="234" textAnchor="middle" fontSize="9" fill="#c62828" fontWeight="bold">1804</text>
            <text x="155" y="244" textAnchor="middle" fontSize="8" fill="#333">Código Civil+Coroação</text>

            {/* 1805 — Austerlitz */}
            <line x1="230" y1="150" x2="230" y2="80" stroke="#555" strokeWidth="1.5" />
            <circle cx="230" cy="150" r="6" fill="#388e3c" />
            <rect x="185" y="55" width="90" height="28" fill="#e8f5e9" rx="3" stroke="#388e3c" strokeWidth="1" />
            <text x="230" y="69" textAnchor="middle" fontSize="9" fill="#388e3c" fontWeight="bold">1805</text>
            <text x="230" y="79" textAnchor="middle" fontSize="8" fill="#333">Austerlitz</text>

            {/* 1806 — Bloqueio */}
            <line x1="300" y1="150" x2="300" y2="220" stroke="#555" strokeWidth="1.5" />
            <circle cx="300" cy="150" r="6" fill="#f57c00" />
            <rect x="255" y="220" width="90" height="28" fill="#fff3e0" rx="3" stroke="#f57c00" strokeWidth="1" />
            <text x="300" y="234" textAnchor="middle" fontSize="9" fill="#f57c00" fontWeight="bold">1806</text>
            <text x="300" y="244" textAnchor="middle" fontSize="8" fill="#333">Bloqueio Continental</text>

            {/* 1808 — Abertura portos */}
            <line x1="375" y1="150" x2="375" y2="80" stroke="#555" strokeWidth="1.5" />
            <circle cx="375" cy="150" r="6" fill="#7b1fa2" />
            <rect x="330" y="55" width="90" height="28" fill="#f3e5f5" rx="3" stroke="#7b1fa2" strokeWidth="1" />
            <text x="375" y="69" textAnchor="middle" fontSize="9" fill="#7b1fa2" fontWeight="bold">1808</text>
            <text x="375" y="79" textAnchor="middle" fontSize="8" fill="#333">Abertura dos Portos</text>

            {/* 1812 — Rússia */}
            <line x1="460" y1="150" x2="460" y2="220" stroke="#555" strokeWidth="1.5" />
            <circle cx="460" cy="150" r="8" fill="#c62828" />
            <rect x="415" y="220" width="90" height="28" fill="#ffebee" rx="3" stroke="#c62828" strokeWidth="1" />
            <text x="460" y="234" textAnchor="middle" fontSize="9" fill="#c62828" fontWeight="bold">1812</text>
            <text x="460" y="244" textAnchor="middle" fontSize="8" fill="#333">Campanha da Rússia</text>

            {/* 1815 — Waterloo */}
            <line x1="545" y1="150" x2="545" y2="80" stroke="#555" strokeWidth="1.5" />
            <circle cx="545" cy="150" r="7" fill="#c62828" />
            <rect x="500" y="55" width="90" height="28" fill="#ffebee" rx="3" stroke="#c62828" strokeWidth="1" />
            <text x="545" y="69" textAnchor="middle" fontSize="9" fill="#c62828" fontWeight="bold">1815</text>
            <text x="545" y="79" textAnchor="middle" fontSize="8" fill="#333">Waterloo / Viena</text>

            {/* 1821 — Morte */}
            <line x1="635" y1="150" x2="635" y2="220" stroke="#555" strokeWidth="1.5" />
            <circle cx="635" cy="150" r="6" fill="#555" />
            <rect x="590" y="220" width="90" height="28" fill="#f5f5f5" rx="3" stroke="#555" strokeWidth="1" />
            <text x="635" y="234" textAnchor="middle" fontSize="9" fill="#555" fontWeight="bold">1821</text>
            <text x="635" y="244" textAnchor="middle" fontSize="8" fill="#333">Morte em Sta. Helena</text>

            {/* Fases */}
            <rect x="30" y="260" width="100" height="15" fill="#e3f2fd" rx="2" />
            <text x="80" y="272" textAnchor="middle" fontSize="8" fill="#1565c0">Consulado</text>
            <rect x="140" y="260" width="130" height="15" fill="#ffebee" rx="2" />
            <text x="205" y="272" textAnchor="middle" fontSize="8" fill="#c62828">Primeiro Império</text>
            <rect x="530" y="260" width="100" height="15" fill="#f5f5f5" rx="2" />
            <text x="580" y="272" textAnchor="middle" fontSize="8" fill="#555">Exílio final</text>
          </svg>
          <figcaption>Linha do tempo da Era Napoleônica (1799–1821): do golpe do 18 Brumário à morte em Santa Helena</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Reorganização Europeia</span>
        <h2>8. O Congresso de Viena (1814–1815)</h2>
        <p>
          Com Napoleão derrotado, as potências vencedoras se reuniram em{" "}
          <strong>Viena</strong> (setembro 1814 – junho 1815) para redesenhar
          o mapa da Europa e restabelecer a ordem. Foi o maior encontro
          diplomático da história até aquele momento — dezenas de Estados
          europeus enviaram representantes.
        </p>
        <h3>Os líderes e os princípios</h3>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>O Congresso de Viena — Principais Participantes e Princípios</caption>
            <thead>
              <tr>
                <th>Representante</th>
                <th>País</th>
                <th>Papel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Príncipe Metternich</td>
                <td>Áustria</td>
                <td>Anfitrião e articulador principal; conservador; restaurador da ordem monárquica</td>
              </tr>
              <tr>
                <td>Talleyrand</td>
                <td>França</td>
                <td>Ex-ministro de Napoleão; negociou para a França derrotada um papel de igualdade</td>
              </tr>
              <tr>
                <td>Lord Castlereagh</td>
                <td>Grã-Bretanha</td>
                <td>Defensor do equilíbrio europeu; prevenção de hegemonia de qualquer potência</td>
              </tr>
              <tr>
                <td>Czar Alexandre I</td>
                <td>Rússia</td>
                <td>Propôs a Santa Aliança; intervencionista nas revoluções liberais</td>
              </tr>
              <tr>
                <td>Rei Frederico Guilherme III</td>
                <td>Prússia</td>
                <td>Defensor da restauração monárquica; territórios ampliados</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Os três princípios do Congresso</h3>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👑</span>
            <h3>Legitimidade</h3>
            <p>
              Restauração das monarquias tradicionais depostas por Napoleão.
              Os Bourbon voltam ao trono da França (Luís XVIII) e da Espanha.
              O "direito divino" dos reis é reafirmado.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Equilíbrio</h3>
            <p>
              Nenhuma potência deveria dominar a Europa. O mapa foi redesenhado
              para que França, Áustria, Prússia, Rússia e Grã-Bretanha
              se equilibrassem mutuamente.
            </p>
          </div>
          <div className="lesson-card">
            <span>🗺️</span>
            <h3>Compensações</h3>
            <p>
              As potências vencedoras receberam territórios como recompensa:
              a Prússia ganhou a Renânia e parte da Saxônia; a Rússia ficou
              com a Polônia; a Grã-Bretanha ganhou colônias ultramarinas.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">A Santa Aliança</span>
        <h2>9. A Santa Aliança e as Revoluções de 1820</h2>
        <p>
          Em setembro de 1815, o czar Alexandre I propôs a{" "}
          <strong>Santa Aliança</strong>, assinada por Rússia, Áustria e Prússia
          — um compromisso de governar seus países com base nos princípios
          cristãos e de defender mutuamente a ordem monárquica contra qualquer
          movimento liberal ou revolucionário.
        </p>
        <p>
          Na prática, a Santa Aliança funcionou como uma força de intervenção
          contrarrevolucionária. Quando revoluções liberais e constitucionalistas
          eclodiram em 1820 (em Nápoles, no Piemonte e na Espanha), a Santa
          Aliança autorizou intervenções militares para restaurar os monarcas
          absolutos. A Áustria interveio na Itália; a França (paradoxalmente,
          de volta à liderança europeia) interveio na Espanha.
        </p>
        <div className="lesson-highlight">
          <strong>Para o ENEM — Doutrina Monroe:</strong> Os EUA, preocupados
          com a possibilidade de a Santa Aliança intervir nas independências
          latino-americanas (México 1821, Brasil 1822, etc.), emitiram a{" "}
          <strong>Doutrina Monroe (1823)</strong>: "a América para os
          americanos" — qualquer intervenção europeia nas Américas seria vista
          como ato hostil. Foi o complemento americano ao sistema de Viena.
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>10. O Legado Napoleônico</h2>
        <p>
          O paradoxo de Napoleão é que, ao tentar conquistar a Europa pela força,
          ele acabou disseminando as ideias da Revolução Francesa por todo o
          continente:
        </p>
        <ul>
          <li>
            <strong>O Código Civil</strong> foi adotado em toda a Europa
            conquista, espalhando os princípios de igualdade jurídica,
            propriedade privada e laicismo que perduram até hoje.
          </li>
          <li>
            <strong>O Nacionalismo</strong> surgiu como reação às conquistas
            napoleônicas: alemães, italianos e espanhóis — humilhados pelas
            tropas francesas — desenvolveram uma consciência nacional coletiva
            que alimentou os movimentos de unificação do século XIX.
          </li>
          <li>
            <strong>A Lenda Napoleônica</strong>: no exílio em Santa Helena,
            Napoleão ditou suas memórias, construindo a imagem do estadista
            iluminista, filho da Revolução, defensor da igualdade — que
            influenciou gerações de romantistas (incluindo Stendhal e Beethoven,
            que rasgou a dedicatória da 3ª Sinfonia quando Napoleão se coroou
            imperador).
          </li>
        </ul>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Legado Napoleônico por Área</caption>
            <thead>
              <tr>
                <th>Área</th>
                <th>Herança</th>
                <th>Alcance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Direito</td>
                <td>Código Civil (1804)</td>
                <td>Mais de 40 países, inclusive o Brasil</td>
              </tr>
              <tr>
                <td>Administração</td>
                <td>Sistema de prefeituras e ministérios centralizados</td>
                <td>Modelo adotado em toda a Europa continental</td>
              </tr>
              <tr>
                <td>Educação</td>
                <td>Lycées (ensino secundário público laico)</td>
                <td>Base do sistema educacional francês até hoje</td>
              </tr>
              <tr>
                <td>Política</td>
                <td>Despertar do Nacionalismo europeu</td>
                <td>Unificações da Alemanha e Itália no século XIX</td>
              </tr>
              <tr>
                <td>Brasil</td>
                <td>Bloqueio Continental → fuga real → Abertura dos Portos</td>
                <td>Transformação do Brasil de colônia a sede do Império</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>11. Exercícios</h2>

        <Exercise
          level="Básico"
          title="O Código Civil Napoleônico"
          statement={
            <p>
              O Código Civil Napoleônico (1804) é considerado uma das mais
              importantes heranças jurídicas do Ocidente. Entre seus princípios
              fundamentais, NÃO se inclui:
            </p>
          }
          options={[
            { letter: "A", text: "Igualdade de todos os cidadãos perante a lei." },
            { letter: "B", text: "Garantia da propriedade privada como direito inviolável." },
            { letter: "C", text: "Laicismo: separação entre Estado e Igreja nos atos civis." },
            { letter: "D", text: "Manutenção dos privilégios hereditários da nobreza europeia.", correct: true },
            { letter: "E", text: "Contratos civis baseados no consentimento livre das partes." },
          ]}
          resolution={
            <p>
              O Código Civil Napoleônico aboliu os privilégios hereditários da
              nobreza, estabelecendo que todos os cidadãos são iguais perante a
              lei, independentemente do nascimento. Essa era, justamente, uma das
              grandes conquistas revolucionárias que Napoleão codificou. As demais
              alternativas (igualdade jurídica, propriedade privada, laicismo e
              contratos livres) estão corretas como princípios do Código Civil
              de 1804.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="O Bloqueio Continental e o Brasil"
          statement={
            <p>
              O Bloqueio Continental decretado por Napoleão em 1806 teve
              consequências diretas para o Brasil. Qual a sequência correta de
              causa e efeito?
            </p>
          }
          options={[
            { letter: "A", text: "Bloqueio Continental → Brasil declara independência → Portugal perde colônia." },
            { letter: "B", text: "Bloqueio Continental → Portugal adere ao bloqueio → perda do comércio com a Grã-Bretanha." },
            { letter: "C", text: "Bloqueio Continental → Portugal recusa aderir → Napoleão invade → família real foge para o Brasil → Abertura dos Portos (1808).", correct: true },
            { letter: "D", text: "Bloqueio Continental → Grã-Bretanha invade o Brasil → D. João negocia a abertura dos portos." },
            { letter: "E", text: "Bloqueio Continental → Espanha e Portugal firmam aliança → família real permanece em Lisboa." },
          ]}
          resolution={
            <p>
              A cadeia de causas é: Napoleão decreta o Bloqueio Continental (1806)
              → Portugal se nega a aderir (depende do comércio britânico) →
              Napoleão invade Portugal com o general Junot (novembro de 1807) →
              Família real foge para o Brasil com escolta britânica (novembro–
              dezembro de 1807) → D. João chega a Salvador e assina a Abertura
              dos Portos (28/01/1808) → fim do exclusivo comercial português
              sobre o Brasil.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="O Congresso de Viena e o Liberalismo"
          statement={
            <p>
              O Congresso de Viena (1814–1815) é frequentemente descrito pelos
              historiadores como uma tentativa de "voltar o relógio" da história.
              Qual afirmação MELHOR explica por que esse projeto fracassou ao
              longo do século XIX?
            </p>
          }
          options={[
            { letter: "A", text: "Os monarcas restaurados em Viena eram ineficientes administrativamente e foram derrubados por golpes militares." },
            { letter: "B", text: "As ideias liberais e o nacionalismo disseminados pelas guerras napoleônicas não podiam ser contidos pela força, gerando revoluções em 1830, 1848 e movimentos de unificação.", correct: true },
            { letter: "C", text: "A Grã-Bretanha, potência hegemônica, abandonou os acordos de Viena e apoiou as revoluções liberais por interesse econômico." },
            { letter: "D", text: "A Santa Aliança foi dissolvida pela pressão dos EUA, que ameaçaram intervir militarmente na Europa." },
            { letter: "E", text: "O Congresso de Viena foi bem-sucedido em suprimir todas as revoluções europeias até 1870." },
          ]}
          resolution={
            <p>
              O paradoxo do Congresso de Viena é que, ao restaurar os reis e
              suprimir as constituições, ele ignorou as forças históricas que
              Napoleão havia liberado: o liberalismo (direitos civis, constituições,
              igualdade perante a lei) e o nacionalismo (alemães, italianos e
              poloneses querendo seus próprios Estados). Essas forças explodiram
              nas Revoluções de 1830 (França, Bélgica), nas Revoluções de 1848
              ("Primavera dos Povos") e nas Guerras de Unificação da Itália
              (1859–70) e da Alemanha (1866–71).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Napoleão e o Nacionalismo Europeu"
          statement={
            <p>
              (ENEM adaptado) Ironia da história: ao conquistar militarmente boa
              parte da Europa, Napoleão gerou o efeito oposto ao pretendido.
              Os povos conquistados — alemães, italianos, espanhóis — passaram a
              se identificar coletivamente como nações distintas. Esse fenômeno é
              conhecido como:
            </p>
          }
          options={[
            { letter: "A", text: "Liberalismo econômico, gerado pela abertura dos mercados europeus ao comércio francês." },
            { letter: "B", text: "Imperialismo cultural, decorrente da imposição do Código Civil napoleônico em toda a Europa." },
            { letter: "C", text: "Nacionalismo reativo, surgido como resposta à dominação estrangeira e à humilhação das conquistas napoleônicas.", correct: true },
            { letter: "D", text: "Republicanismo, pois os povos conquistados adotaram o modelo de governo republicano da França revolucionária." },
            { letter: "E", text: "Socialismo utópico, gerado pela insatisfação das classes trabalhadoras com a exploração napoleônica." },
          ]}
          resolution={
            <p>
              O Nacionalismo europeu do século XIX tem raízes paradoxais nas
              conquistas napoleônicas: ao dominar militarmente os povos da Europa,
              Napoleão despertou neles uma consciência nacional coletiva. Os
              alemães, antes divididos em dezenas de principados, começaram a se
              ver como um único povo alemão. Os italianos, igualmente fragmentados,
              desenvolveram a consciência do Risorgimento. A humilhação da
              dominação estrangeira foi o catalisador do sentimento nacional.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="A Campanha da Rússia — Estratégia e Clima"
          statement={
            <p>
              A Campanha da Rússia de 1812 é considerada o ponto de virada da
              era napoleônica. Napoleão entrou na Rússia com 600.000 homens e
              voltou com menos de 100.000. A principal causa desse desastre foi:
            </p>
          }
          options={[
            { letter: "A", text: "A superioridade tecnológica do exército russo, que utilizava armas de fogo mais modernas." },
            { letter: "B", text: "A deserção em massa dos soldados franceses, que se recusaram a lutar em território estrangeiro." },
            { letter: "C", text: "A tática russa de terra arrasada combinada com o inverno russo, que privou o exército francês de suprimentos e diezmou os soldados no frio extremo.", correct: true },
            { letter: "D", text: "A aliança secreta entre a Rússia e a Grã-Bretanha, que forneceu tropas britânicas para defender Moscou." },
            { letter: "E", text: "A epidemia de cólera que se espalhou pelo exército francês antes mesmo de cruzar a fronteira russa." },
          ]}
          resolution={
            <p>
              O czar Alexandre I recusou o combate decisivo e adotou a estratégia
              da "terra arrasada": recuar para o interior, destruindo colheitas,
              celeiros e cidades — incluindo Moscou, incendiada pelos próprios
              russos. Napoleão chegou a Moscou vazia e sem suprimentos. Sem nada
              para saquear e com o inverno se aproximando, foi forçado a recuar
              em outubro. O inverno russo com temperaturas de -30°C a -40°C,
              combinado com a ausência de suprimentos, dizimou a Grande Armée.
            </p>
          }
        />
      </section>
    </article>
  );
}
