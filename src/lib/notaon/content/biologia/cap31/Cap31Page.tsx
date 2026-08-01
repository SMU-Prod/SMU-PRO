"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap31Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 31</span>

          <h1>Introdução à Botânica: Evolução Vegetal, Algas Ancestrais, Briófitas e Pteridófitas</h1>

          <p>
            Há cerca de <strong>470 milhões de anos</strong>, os ancestrais das plantas
            modernas deixaram o ambiente aquático e colonizaram a terra firme, dando início
            a uma das transições evolutivas mais importantes da história da vida. Neste
            capítulo você vai compreender a origem das plantas a partir de algas verdes
            ancestrais, as principais adaptações que tornaram possível a conquista do
            ambiente terrestre e as características que distinguem os dois primeiros grandes
            grupos vegetais — <strong>briófitas</strong> e <strong>pteridófitas</strong> —,
            além do conceito de alternância de gerações, tema recorrente no ENEM e nos
            principais vestibulares do país.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Botânica</span>

        <h2>1. O que é Botânica e Por que Ela Importa</h2>

        <p>
          A <strong>Botânica</strong> é o ramo da Biologia dedicado ao estudo das plantas
          (Reino Plantae): sua estrutura, fisiologia, reprodução, classificação, distribuição
          geográfica e evolução. Longe de ser uma área secundária, a Botânica é central para
          a compreensão da vida na Terra — afinal, toda cadeia alimentar terrestre começa em
          um produtor fotossintetizante.
        </p>

        <p>
          As plantas são responsáveis pela maior parte da <strong>produção primária</strong>{" "}
          dos ecossistemas terrestres: capturam energia solar e convertem CO₂ e H₂O em
          matéria orgânica e O₂. Sem elas, não haveria oxigênio suficiente na atmosfera nem
          alimento para os heterótrofos. Além disso, as plantas regulam o clima, o ciclo
          hidrológico e a fertilidade dos solos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>☀️</span>
            <h3>Fotossíntese</h3>
            <p>Base de quase toda cadeia alimentar terrestre; liberam O₂ e fixam carbono.</p>
          </div>

          <div className="lesson-card">
            <span>💧</span>
            <h3>Ciclo da Água</h3>
            <p>Transpiração das florestas alimenta chuvas e regula temperatura local.</p>
          </div>

          <div className="lesson-card">
            <span>🌱</span>
            <h3>Solo Fértil</h3>
            <p>Raízes evitam erosão; matéria orgânica vegetal enriquece o solo.</p>
          </div>

          <div className="lesson-card">
            <span>🏥</span>
            <h3>Medicina e Alimentação</h3>
            <p>Mais de 25% dos medicamentos têm origem vegetal; cereais alimentam bilhões.</p>
          </div>

          <div className="lesson-card">
            <span>🌍</span>
            <h3>Clima Global</h3>
            <p>Florestas sequestram CO₂ e amenizam o aquecimento global.</p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Pesquisa Evolutiva</h3>
            <p>Registro fóssil vegetal documenta a conquista do ambiente terrestre.</p>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Origem Evolutiva</span>

        <h2>2. Das Algas às Plantas Terrestres — a Grande Transição</h2>

        <p>
          As plantas terrestres descendem de <strong>algas verdes ancestrais</strong> do
          grupo das <strong>clorofíceas</strong> (Chlorophyta), especialmente de um
          subgrupo denominado <strong>carófitas</strong>. Essa hipótese é sustentada por
          evidências moleculares, bioquímicas e morfológicas robustas.
        </p>

        <div className="lesson-highlight">
          <h3>Evidências da origem a partir das algas verdes</h3>
          <p>
            A seguir estão as principais semelhanças entre as clorofíceas e as plantas
            que sustentam essa relação evolutiva:
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Clorofíceas (algas verdes)</th>
                <th>Plantas terrestres</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pigmentos fotossintéticos</td>
                <td>Clorofila <em>a</em> e <em>b</em></td>
                <td>Clorofila <em>a</em> e <em>b</em></td>
              </tr>
              <tr>
                <td>Reserva de energia</td>
                <td>Amido</td>
                <td>Amido</td>
              </tr>
              <tr>
                <td>Parede celular</td>
                <td>Celulose</td>
                <td>Celulose</td>
              </tr>
              <tr>
                <td>Divisão celular</td>
                <td>Fragmoplasto + placa celular</td>
                <td>Fragmoplasto + placa celular</td>
              </tr>
              <tr>
                <td>Sequências de DNA</td>
                <td>Alta similaridade genética</td>
                <td>Alta similaridade genética</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A colonização da terra exigiu o desenvolvimento de soluções para problemas que
          simplesmente não existiam no ambiente aquático: ressecamento, gravitação sem
          suporte da água, fertilização sem meio líquido e exposição intensa à radiação UV.
          Cada grupo de plantas que surgiu ao longo da evolução representa um passo nessa
          trajetória de conquista.
        </p>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Adaptações Terrestres</span>

        <h2>3. Adaptações à Vida em Terra — o Corpo Vegetal sob Seleção Natural</h2>

        <p>
          A transição do aquático para o terrestre impôs desafios severos aos organismos
          fotossintetizantes. A seleção natural favoreceu linhagens que desenvolveram
          estruturas capazes de preservar a água, conduzir substâncias, sustentar o corpo
          e proteger os gametas e embriões. Veja as principais conquistas evolutivas:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧴</span>
            <h3>Cutícula</h3>
            <p>
              Camada cerosa impermeável que recobre a epiderme das folhas e caules,
              reduzindo drasticamente a perda de água por evaporação. Ausente nas briófitas
              ou muito rudimentar; bem desenvolvida em pteridófitas e demais grupos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌬️</span>
            <h3>Estômatos</h3>
            <p>
              Poros microscópicos controlados por células-guarda que regulam as trocas
              gasosas (entrada de CO₂, saída de O₂ e vapor d'água). Permitem fotossíntese
              sem perda excessiva de água.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Tecidos de Sustentação</h3>
            <p>
              Colênquima e esclerênquima (pteridófitas em diante) dão rigidez ao corpo
              vegetal sem o suporte do meio aquático. Permitem que as plantas cresçam
              eretas em direção à luz.
            </p>
          </div>

          <div className="lesson-card">
            <span>🚿</span>
            <h3>Vasos Condutores</h3>
            <p>
              Xilema (seiva bruta: água + sais minerais) e floema (seiva elaborada:
              açúcares). Surgem nas pteridófitas e revolucionam o transporte interno,
              permitindo plantas de grande porte.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌰</span>
            <h3>Sementes</h3>
            <p>
              Estrutura que protege o embrião e carrega reservas nutritivas. Surgem
              nas gimnospermas e eliminam a dependência de água para a fecundação.
              Ausentes em briófitas e pteridófitas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🍎</span>
            <h3>Frutos</h3>
            <p>
              Estrutura derivada do ovário que envolve e protege as sementes,
              facilitando sua dispersão. Exclusivo das angiospermas — o grupo mais
              avançado evolutivamente.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Tendência evolutiva geral</h3>
          <p>
            Ao longo da evolução vegetal observa-se uma tendência clara:{" "}
            <strong>maior independência da água</strong> (necessária para a fecundação),{" "}
            <strong>proteção crescente do embrião</strong> e{" "}
            <strong>maior eficiência no transporte interno</strong>. Cada grupo surgiu com
            soluções mais sofisticadas para os desafios do ambiente terrestre.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Classificação Vegetal</span>

        <h2>4. Classificação dos Grupos Vegetais — Panorama Geral</h2>

        <p>
          Os vegetais podem ser classificados segundo <strong>dois critérios principais</strong>:
          a presença ou ausência de vasos condutores, e a presença ou ausência de sementes.
          Essa combinação define os quatro grandes grupos do Reino Plantae.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Vasos (xilema/floema)</th>
                <th>Sementes</th>
                <th>Frutos</th>
                <th>Flores</th>
                <th>Fecundação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Briófitas</strong></td>
                <td>Não (avasculares)</td>
                <td>Não</td>
                <td>Não</td>
                <td>Não</td>
                <td>Depende de água</td>
              </tr>
              <tr>
                <td><strong>Pteridófitas</strong></td>
                <td>Sim (vasculares)</td>
                <td>Não</td>
                <td>Não</td>
                <td>Não</td>
                <td>Depende de água</td>
              </tr>
              <tr>
                <td><strong>Gimnospermas</strong></td>
                <td>Sim</td>
                <td>Sim (nua)</td>
                <td>Não</td>
                <td>Não</td>
                <td>Independente de água</td>
              </tr>
              <tr>
                <td><strong>Angiospermas</strong></td>
                <td>Sim</td>
                <td>Sim (dentro do fruto)</td>
                <td>Sim</td>
                <td>Sim</td>
                <td>Independente de água</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Outra nomenclatura clássica usada em vestibulares divide as plantas em{" "}
          <strong>criptógamas</strong> (reprodução oculta, sem sementes: briófitas +
          pteridófitas) e <strong>fanerógamas</strong> (reprodução visível, com sementes:
          gimnospermas + angiospermas). Dentro das fanerógamas, diferencia-se entre{" "}
          <strong>gimnospermas</strong> (sementes nuas, sem fruto) e{" "}
          <strong>angiospermas</strong> (sementes envoltas em fruto).
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 780 270" width="780" height="270" aria-label="Escada evolutiva dos grupos vegetais">
            {/* Fundo gradiente de faixas */}
            <rect x={0} y={0} width={780} height={270} rx={16} fill="#f0fdf4" />

            {/* Linha evolutiva base */}
            <line x1={40} y1={230} x2={740} y2={230} stroke="#86efac" strokeWidth={3} strokeLinecap="round" />
            <polygon points="740,224 756,230 740,236" fill="#16a34a" />
            <text x={762} y={234} fontSize={11} fill="#15803d" fontWeight={700}>evolução</text>

            {/* Algas verdes */}
            <rect x={30} y={155} width={110} height={64} rx={12} fill="#bbf7d0" stroke="#16a34a" strokeWidth={2} />
            <text x={85} y={181} textAnchor="middle" fontSize={13} fontWeight={700} fill="#14532d">Algas Verdes</text>
            <text x={85} y={197} textAnchor="middle" fontSize={10} fill="#166534">(Clorofíceas)</text>
            <text x={85} y={211} textAnchor="middle" fontSize={9} fill="#166534">Ancestral</text>
            <line x1={85} y1={155} x2={85} y2={230} stroke="#16a34a" strokeWidth={2} />

            {/* Briófitas */}
            <rect x={175} y={120} width={110} height={64} rx={12} fill="#bfdbfe" stroke="#2563eb" strokeWidth={2} />
            <text x={230} y={146} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a8a">Briófitas</text>
            <text x={230} y={162} textAnchor="middle" fontSize={10} fill="#1d4ed8">Avasculares</text>
            <text x={230} y={176} textAnchor="middle" fontSize={9} fill="#1d4ed8">sem semente</text>
            <line x1={230} y1={184} x2={230} y2={230} stroke="#2563eb" strokeWidth={2} />
            {/* aquisição */}
            <rect x={160} y={94} width={140} height={20} rx={6} fill="#dbeafe" />
            <text x={230} y={108} textAnchor="middle" fontSize={9} fill="#1e40af">+ cutícula, estômatos, embriófito</text>

            {/* Pteridófitas */}
            <rect x={320} y={82} width={120} height={64} rx={12} fill="#fde68a" stroke="#d97706" strokeWidth={2} />
            <text x={380} y={108} textAnchor="middle" fontSize={13} fontWeight={700} fill="#78350f">Pteridófitas</text>
            <text x={380} y={124} textAnchor="middle" fontSize={10} fill="#92400e">Vasculares</text>
            <text x={380} y={138} textAnchor="middle" fontSize={9} fill="#92400e">sem semente</text>
            <line x1={380} y1={146} x2={380} y2={230} stroke="#d97706" strokeWidth={2} />
            <rect x={305} y={56} width={150} height={20} rx={6} fill="#fef3c7" />
            <text x={380} y={70} textAnchor="middle" fontSize={9} fill="#92400e">+ xilema, floema, raiz/caule/folha reais</text>

            {/* Gimnospermas */}
            <rect x={475} y={46} width={120} height={64} rx={12} fill="#f5d0fe" stroke="#9333ea" strokeWidth={2} />
            <text x={535} y={72} textAnchor="middle" fontSize={13} fontWeight={700} fill="#581c87">Gimnospermas</text>
            <text x={535} y={88} textAnchor="middle" fontSize={10} fill="#7e22ce">Vasculares</text>
            <text x={535} y={102} textAnchor="middle" fontSize={9} fill="#7e22ce">+ semente nua</text>
            <line x1={535} y1={110} x2={535} y2={230} stroke="#9333ea" strokeWidth={2} />
            <rect x={460} y={20} width={150} height={20} rx={6} fill="#fae8ff" />
            <text x={535} y={34} textAnchor="middle" fontSize={9} fill="#7e22ce">+ semente, pólen, independência da água</text>

            {/* Angiospermas */}
            <rect x={630} y={10} width={120} height={72} rx={12} fill="#fecaca" stroke="#dc2626" strokeWidth={2} />
            <text x={690} y={36} textAnchor="middle" fontSize={13} fontWeight={700} fill="#7f1d1d">Angiospermas</text>
            <text x={690} y={52} textAnchor="middle" fontSize={10} fill="#991b1b">Vasculares</text>
            <text x={690} y={66} textAnchor="middle" fontSize={9} fill="#991b1b">+ flores e frutos</text>
            <line x1={690} y1={82} x2={690} y2={230} stroke="#dc2626" strokeWidth={2} />
          </svg>
          <figcaption>
            Escada evolutiva dos grupos vegetais: cada grupo acumulou novas adaptações em
            relação ao anterior. Os dois grupos estudados neste capítulo são briófitas e pteridófitas.
          </figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Briófitas</span>

        <h2>5. Briófitas — as Pioneiras da Terra Firme</h2>

        <p>
          As <strong>briófitas</strong> (musgos, hepáticas e antóceros) foram os primeiros
          vegetais a colonizar o ambiente terrestre, surgindo há cerca de 470 milhões de
          anos. São plantas <strong>avasculares</strong> — não possuem xilema nem floema —
          e por isso ficam restritas a ambientes úmidos e sombreados, onde a água pode
          percolar diretamente de célula em célula.
        </p>

        <p>
          Por não possuírem tecidos condutores eficientes nem tecidos de sustentação bem
          desenvolvidos, as briófitas são <strong>pequenas</strong>: a maioria tem poucos
          centímetros de altura. Em vez de raiz, caule e folha verdadeiros, apresentam
          estruturas homólogas denominadas <strong>rizoide</strong> (fixação),{" "}
          <strong>cauloide</strong> (eixo central) e <strong>filoide</strong> (expansão
          fotossintetizante), que cumprem funções semelhantes mas não possuem a mesma
          origem evolutiva que os órgãos das plantas vasculares.
        </p>

        <div className="lesson-highlight">
          <h3>Resumo das características das briófitas</h3>
          <p>
            São plantas <strong>avasculares</strong> (sem xilema/floema),{" "}
            <strong>sem raiz/caule/folha verdadeiros</strong>, sem sementes, sem flores e
            sem frutos. Vivem em ambientes úmidos e dependem de água para a fecundação,
            pois os anterozoides (gametas masculinos flagelados) precisam nadar até a
            oosfera (gameta feminino). O <strong>gametófito haploide (n)</strong> é a
            fase verde, fotossintetizante, duradoura e dominante; o esporófito depende
            do gametófito para sobreviver.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Musgos (Bryophyta s.s.)</h3>
            <p>
              Grupo mais diverso das briófitas. Folíolos espiralados ao redor de um
              eixo central. Comuns em pedras úmidas, troncos e solos de florestas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🍃</span>
            <h3>Hepáticas (Marchantiophyta)</h3>
            <p>
              Corpo achatado em forma de lóbulo, lembrando um fígado (daí o nome).
              Encontradas em margens de rios e paredes úmidas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌱</span>
            <h3>Antóceros (Anthocerotophyta)</h3>
            <p>
              Gametófito achatado com esporófito cilíndrico e alongado. Presença de
              pirenoides nos cloroplastos, semelhante às algas — evidência evolutiva.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Pteridófitas</span>

        <h2>6. Pteridófitas — as Primeiras Plantas Vasculares</h2>

        <p>
          As <strong>pteridófitas</strong> (samambaias, avencas, xaxins, cavalinhas e
          licopódios) representam um salto evolutivo fundamental: foram as primeiras plantas
          a desenvolver <strong>tecidos vasculares</strong> — xilema e floema —, o que lhes
          permitiu crescer muito mais do que as briófitas e colonizar habitats mais variados.
          Surgiram há cerca de 420 milhões de anos e chegaram a dominar as florestas
          carboníferas do Paleozoico, quando algumas atingiam dezenas de metros de altura.
        </p>

        <p>
          Apesar do grande avanço representado pelos vasos condutores, as pteridófitas
          ainda mantêm uma <strong>limitação evolutiva</strong> herdada das briófitas: a
          fecundação depende de água. Isso porque os anterozoides flagelados precisam nadar
          até o arquegônio para fertilizar a oosfera. Assim, embora mais independentes do
          que os musgos, as pteridófitas continuam restritas a ambientes com umidade
          disponível.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🚿</span>
            <h3>Xilema</h3>
            <p>
              Transporta a <strong>seiva bruta</strong> (água + sais minerais) da raiz para
              toda a planta. Composto por traqueídes e, em plantas mais evoluídas, por
              elementos de vasos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🍯</span>
            <h3>Floema</h3>
            <p>
              Transporta a <strong>seiva elaborada</strong> (açúcares e aminoácidos
              produzidos na fotossíntese) para todas as partes da planta, permitindo
              crescimento e armazenamento de reservas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Soros</h3>
            <p>
              Agrupamentos de <strong>esporângios</strong> localizados na face abaxial
              (inferior) das frondes (folhas) das samambaias. Produzem esporos haploides
              por meiose.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Prótalo</h3>
            <p>
              O <strong>gametófito</strong> das pteridófitas: uma estrutura pequena,
              achatada, verde e independente. Produz anterídios (gametas masculinos) e
              arquegônios (gametas femininos).
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Diferença fundamental entre briófitas e pteridófitas</h3>
          <p>
            Nas briófitas, o <strong>gametófito</strong> é a fase dominante e o esporófito
            depende dele. Nas pteridófitas, o <strong>esporófito</strong> se torna a fase
            dominante — a samambaia que vemos é o esporófito diploide — enquanto o
            gametófito (prótalo) é pequeno e temporário. Essa inversão de dominância é uma
            tendência que se acentua ainda mais em gimnospermas e angiospermas, onde o
            gametófito é microscópico e completamente dependente do esporófito.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Briófitas (musgos)</th>
                <th>Pteridófitas (samambaias)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vasos condutores</td>
                <td>Ausentes (avasculares)</td>
                <td>Presentes (xilema e floema)</td>
              </tr>
              <tr>
                <td>Raiz / Caule / Folha verdadeiros</td>
                <td>Não (rizoide, cauloide, filoide)</td>
                <td>Sim</td>
              </tr>
              <tr>
                <td>Sementes</td>
                <td>Não</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>Flores e frutos</td>
                <td>Não</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>Fase dominante</td>
                <td>Gametófito (haploide n)</td>
                <td>Esporófito (diploide 2n)</td>
              </tr>
              <tr>
                <td>Fecundação</td>
                <td>Depende de água</td>
                <td>Depende de água</td>
              </tr>
              <tr>
                <td>Porte</td>
                <td>Pequeno (poucos cm)</td>
                <td>Variável (cm a muitos metros)</td>
              </tr>
              <tr>
                <td>Exemplos</td>
                <td>Musgos, hepáticas, antóceros</td>
                <td>Samambaias, avencas, cavalinhas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Alternância de Gerações</span>

        <h2>7. Ciclo de Vida Haplodiplobionte — Alternância de Gerações</h2>

        <p>
          Um dos conceitos mais cobrados em provas sobre botânica é o de{" "}
          <strong>alternância de gerações</strong> (ciclo haplodiplobionte): o ciclo de
          vida das plantas inclui duas fases multicelulares distintas — a fase{" "}
          <strong>haploide (n)</strong>, representada pelo <strong>gametófito</strong>, e
          a fase <strong>diploide (2n)</strong>, representada pelo{" "}
          <strong>esporófito</strong>.
        </p>

        <p>
          O <strong>gametófito</strong> produz gametas por mitose (lembrando que já é
          haploide). A fusão dos gametas origina o <strong>zigoto diploide (2n)</strong>,
          que se desenvolve no esporófito. O esporófito produz <strong>esporos</strong>{" "}
          haploides por <strong>meiose</strong>. Os esporos germinam e originam novos
          gametófitos, fechando o ciclo.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 320" width="720" height="320" aria-label="Ciclo de alternância de gerações em briófitas e pteridófitas">
            <rect x={0} y={0} width={720} height={320} rx={16} fill="#f8fafc" />

            {/* Título das fases */}
            <text x={180} y={28} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e40af">FASE HAPLOIDE (n)</text>
            <text x={540} y={28} textAnchor="middle" fontSize={13} fontWeight={700} fill="#166534">FASE DIPLOIDE (2n)</text>
            <line x1={360} y1={10} x2={360} y2={310} stroke="#cbd5e1" strokeWidth={1.5} strokeDasharray="6 4" />

            {/* Gametófito */}
            <rect x={60} y={50} width={240} height={70} rx={14} fill="#dbeafe" stroke="#2563eb" strokeWidth={2} />
            <text x={180} y={82} textAnchor="middle" fontSize={15} fontWeight={700} fill="#1e3a8a">GAMETÓFITO</text>
            <text x={180} y={100} textAnchor="middle" fontSize={11} fill="#1d4ed8">haploide (n) — fase dominante nas briófitas</text>
            <text x={180} y={114} textAnchor="middle" fontSize={11} fill="#3b82f6">pequeno (prótalo) nas pteridófitas</text>

            {/* Gametas */}
            <rect x={60} y={160} width={110} height={52} rx={10} fill="#ede9fe" stroke="#7c3aed" strokeWidth={1.5} />
            <text x={115} y={183} textAnchor="middle" fontSize={12} fontWeight={600} fill="#4c1d95">Anterozoide ♂</text>
            <text x={115} y={200} textAnchor="middle" fontSize={10} fill="#6d28d9">(n) — flagelado</text>

            <rect x={190} y={160} width={110} height={52} rx={10} fill="#ede9fe" stroke="#7c3aed" strokeWidth={1.5} />
            <text x={245} y={183} textAnchor="middle" fontSize={12} fontWeight={600} fill="#4c1d95">Oosfera ♀</text>
            <text x={245} y={200} textAnchor="middle" fontSize={10} fill="#6d28d9">(n) — imóvel</text>

            {/* Seta gametófito → gametas */}
            <line x1={180} y1={120} x2={115} y2={160} stroke="#7c3aed" strokeWidth={1.5} />
            <line x1={180} y1={120} x2={245} y2={160} stroke="#7c3aed" strokeWidth={1.5} />
            <text x={90} y={148} fontSize={10} fill="#6d28d9" textAnchor="middle">mitose</text>

            {/* Seta fecundação */}
            <line x1={302} y1={186} x2={416} y2={186} stroke="#dc2626" strokeWidth={2} />
            <polygon points="410,180 426,186 410,192" fill="#dc2626" />
            <text x={360} y={178} textAnchor="middle" fontSize={10} fontWeight={700} fill="#dc2626">FECUNDAÇÃO</text>
            <text x={360} y={202} textAnchor="middle" fontSize={9} fill="#dc2626">(requer H₂O)</text>

            {/* Zigoto */}
            <rect x={420} y={160} width={120} height={52} rx={10} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.5} />
            <text x={480} y={183} textAnchor="middle" fontSize={12} fontWeight={600} fill="#14532d">Zigoto (2n)</text>
            <text x={480} y={200} textAnchor="middle" fontSize={10} fill="#166534">diploide</text>

            {/* Esporófito */}
            <rect x={420} y={50} width={240} height={70} rx={14} fill="#bbf7d0" stroke="#16a34a" strokeWidth={2} />
            <text x={540} y={82} textAnchor="middle" fontSize={15} fontWeight={700} fill="#14532d">ESPORÓFITO</text>
            <text x={540} y={100} textAnchor="middle" fontSize={11} fill="#166534">diploide (2n) — fase dominante nas pteridófitas</text>
            <text x={540} y={114} textAnchor="middle" fontSize={11} fill="#16a34a">dependente do gametófito nas briófitas</text>

            {/* Seta zigoto → esporófito */}
            <line x1={480} y1={160} x2={540} y2={120} stroke="#16a34a" strokeWidth={1.5} />
            <polygon points="536,128 542,116 548,128" fill="#16a34a" />
            <text x={516} y={152} fontSize={10} fill="#15803d">mitose</text>

            {/* Esporos */}
            <rect x={440} y={255} width={200} height={46} rx={10} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1.5} />
            <text x={540} y={276} textAnchor="middle" fontSize={12} fontWeight={600} fill="#78350f">Esporos (n)</text>
            <text x={540} y={292} textAnchor="middle" fontSize={10} fill="#92400e">haploides — por meiose</text>

            {/* Seta esporófito → esporos */}
            <line x1={540} y1={120} x2={540} y2={255} stroke="#ca8a04" strokeWidth={1.5} />
            <polygon points="534,249 540,263 546,249" fill="#ca8a04" />
            <text x={562} y={200} fontSize={10} fill="#ca8a04">meiose</text>

            {/* Seta esporos → gametófito */}
            <line x1={440} y1={278} x2={200} y2={120} stroke="#2563eb" strokeWidth={1.5} strokeDasharray="5 3" />
            <polygon points="206,126 196,116 208,112" fill="#2563eb" />
            <text x={300} y={260} fontSize={10} fill="#1d4ed8" textAnchor="middle">germinação</text>
          </svg>
          <figcaption>
            Ciclo haplodiplobionte (alternância de gerações): o gametófito haploide (n) produz
            gametas por mitose; a fecundação gera o zigoto diploide (2n), que origina o esporófito;
            este produz esporos haploides por meiose, que germinam em novos gametófitos.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>A grande tendência evolutiva: redução do gametófito</h3>
          <p>
            Ao longo da evolução vegetal, observa-se uma tendência progressiva de{" "}
            <strong>redução do gametófito</strong> e{" "}
            <strong>dominância crescente do esporófito</strong>. Nas briófitas, o
            gametófito domina; nas pteridófitas, o esporófito já domina; nas gimnospermas
            e angiospermas, o gametófito é microscópico e completamente dependente do
            esporófito. Essa tendência está diretamente ligada à conquista da independência
            da água para a reprodução.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 8 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese e Vestibular</span>

        <h2>8. Síntese Comparativa e Dicas para o ENEM</h2>

        <p>
          A tabela abaixo resume os pontos mais cobrados em provas de vestibular e no ENEM
          sobre briófitas e pteridófitas. Dominar esses contrastes é essencial para
          resolver questões de múltipla escolha e discursivas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Ponto comparativo</th>
                <th>Briófitas</th>
                <th>Pteridófitas</th>
                <th>Por que importa no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vasos condutores</td>
                <td>Ausentes</td>
                <td>Presentes</td>
                <td>Pergunta direta recorrente</td>
              </tr>
              <tr>
                <td>Fase dominante</td>
                <td>Gametófito (n)</td>
                <td>Esporófito (2n)</td>
                <td>Confundido com frequência</td>
              </tr>
              <tr>
                <td>Precisa de água para fecundação</td>
                <td>Sim</td>
                <td>Sim</td>
                <td>Distingue ambos das espermatófitas</td>
              </tr>
              <tr>
                <td>Semente</td>
                <td>Não</td>
                <td>Não</td>
                <td>Separa criptógamas das fanerógamas</td>
              </tr>
              <tr>
                <td>Estrutura de fixação</td>
                <td>Rizoide</td>
                <td>Raiz verdadeira</td>
                <td>Conceito de órgão verdadeiro</td>
              </tr>
              <tr>
                <td>Gametófito das pteridófitas</td>
                <td>—</td>
                <td>Prótalo (pequeno, independente)</td>
                <td>Questão de nomenclatura comum</td>
              </tr>
              <tr>
                <td>Estrutura de dispersão</td>
                <td>Esporos</td>
                <td>Esporos (em soros)</td>
                <td>Diferencia de sementes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Pegadinhas clássicas de prova</h3>
          <p>
            (1) Dizer que musgos "não fazem fotossíntese" — <strong>ERRADO</strong>, o gametófito
            é verde e fotossintetizante. (2) Afirmar que pteridófitas não dependem de água —{" "}
            <strong>ERRADO</strong>, a fecundação ainda requer água. (3) Confundir "esporófito
            dominante" com "ausência de gametófito" — o gametófito das pteridófitas (prótalo)
            existe, é apenas muito menor. (4) Dizer que briófitas têm raiz — <strong>ERRADO</strong>,
            possuem rizoides, que são estruturas de fixação sem tecido vascular.
          </p>
        </div>
      </section>

      {/* ===== EXERCÍCIOS ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Características das briófitas"
          statement={
            <p>
              As briófitas são consideradas plantas avasculares. Isso significa que elas:
            </p>
          }
          options={[
            { letter: "a", text: "Não realizam fotossíntese" },
            { letter: "b", text: "Não possuem tecidos condutores de seiva (xilema e floema)", correct: true },
            { letter: "c", text: "Produzem sementes nuas, sem fruto" },
            { letter: "d", text: "Possuem flores, mas não produzem frutos" },
          ]}
          resolution={
            <p>
              Avasculares significa "sem vasos condutores". As briófitas não possuem xilema
              nem floema, o que as impede de crescer muito e as restringe a ambientes úmidos.
              Elas realizam fotossíntese normalmente no gametófito verde e não produzem
              sementes, flores nem frutos.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Fase dominante no ciclo de vida"
          statement={
            <p>
              Ao observar um musgo crescendo sobre uma pedra úmida e uma samambaia no sub-bosque
              de uma floresta, um estudante afirma que, em ambos os casos, está vendo "o
              gametófito dominante". Essa afirmação está:
            </p>
          }
          options={[
            { letter: "a", text: "Correta para ambos os grupos" },
            {
              letter: "b",
              text: "Correta para o musgo, mas incorreta para a samambaia, que é o esporófito dominante",
              correct: true,
            },
            { letter: "c", text: "Incorreta para ambos; em nenhum dos grupos há gametófito visível" },
            { letter: "d", text: "Correta para a samambaia, mas incorreta para o musgo" },
          ]}
          resolution={
            <p>
              Nos musgos (briófitas), a planta visível e duradoura é o{" "}
              <strong>gametófito haploide (n)</strong>, que é a fase dominante. Nas
              samambaias (pteridófitas), a planta visível é o{" "}
              <strong>esporófito diploide (2n)</strong>, que passou a ser a fase dominante.
              O gametófito das samambaias (prótalo) é pequeno e temporário.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Tendência evolutiva — redução do gametófito"
          statement={
            <p>
              A tendência evolutiva observada na sucessão briófitas → pteridófitas →
              gimnospermas → angiospermas revela uma progressiva:
            </p>
          }
          options={[
            { letter: "a", text: "Ampliação do gametófito e redução do esporófito" },
            { letter: "b", text: "Eliminação completa do esporófito em angiospermas" },
            {
              letter: "c",
              text: "Redução do gametófito e dominância crescente do esporófito, com independência progressiva da água na reprodução",
              correct: true,
            },
            { letter: "d", text: "Aumento da dependência de água para a fecundação" },
          ]}
          resolution={
            <p>
              A grande tendência evolutiva nas plantas é a <strong>redução do gametófito</strong>
              e a <strong>dominância crescente do esporófito</strong>. Em briófitas, o gametófito
              domina; em pteridófitas, o esporófito já domina; em gimnospermas e angiospermas,
              o gametófito é microscópico. Paralelamente, gimnospermas e angiospermas eliminam
              a necessidade de água para a fecundação, usando o pólen — uma das adaptações mais
              importantes para a conquista do ambiente terrestre seco.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Samambaias em jardins — ENEM"
          statement={
            <p>
              Em um jardim sombreado, um paisagista planta samambaias e observa que, em
              alguns meses, surgem manchas marrom-avermelhadas na face inferior das folhas.
              Preocupado, ele consulta um biólogo, que esclarece que essas manchas são
              completamente naturais. Com base em seus conhecimentos sobre pteridófitas,
              essas manchas representam:
            </p>
          }
          options={[
            { letter: "a", text: "Sintoma de doença fúngica que ataca a superfície foliar" },
            {
              letter: "b",
              text: "Soros: agrupamentos de esporângios que produzem esporos para reprodução",
              correct: true,
            },
            { letter: "c", text: "Frutos imaturos que amadurecerão e liberarão sementes" },
            { letter: "d", text: "Rizoides aéreos que auxiliam na absorção de água" },
          ]}
          resolution={
            <p>
              As manchas descritas são <strong>soros</strong>, estruturas agrupadas na face
              abaxial (inferior) das frondes das samambaias. Cada soro contém vários{" "}
              <strong>esporângios</strong>, que produzem <strong>esporos haploides (n)</strong>{" "}
              por meiose. Os esporos são dispersos pelo vento e, em condições úmidas,
              germinam para originar o gametófito (prótalo). As pteridófitas não produzem
              frutos nem sementes — esses são exclusivos das espermatófitas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Restauração de mata ciliar e dependência de água"
          statement={
            <p>
              Durante um projeto de restauração de mata ciliar em uma região semiárida,
              uma equipe de ecólogos propõe usar espécies de briófitas e pteridófitas nativas
              para cobrir o solo próximo ao leito de um rio. Um dos pesquisadores argumenta
              que essas plantas nunca colonizarão áreas afastadas da margem do rio, mesmo
              que o solo seja fértil e haja luz solar adequada. A razão biológica mais
              precisa para essa limitação é:
            </p>
          }
          options={[
            { letter: "a", text: "Briófitas e pteridófitas não realizam fotossíntese eficientemente em solos secos" },
            {
              letter: "b",
              text: "Os anterozoides flagelados de briófitas e pteridófitas precisam de uma película de água para nadar até o gameta feminino durante a fecundação",
              correct: true,
            },
            { letter: "c", text: "Ambos os grupos dependem de insetos polinizadores que só habitam margens de rios" },
            { letter: "d", text: "Esporos de briófitas e pteridófitas só germinam em solo saturado de água" },
          ]}
          resolution={
            <p>
              A limitação fundamental de briófitas e pteridófitas em ambientes secos é a
              dependência de <strong>água líquida para a fecundação</strong>. Os{" "}
              <strong>anterozoides flagelados</strong> (gametas masculinos) precisam nadar
              em uma película de água até o arquegônio, onde está a oosfera (gameta feminino).
              Sem essa água, a fecundação não ocorre e o ciclo reprodutivo é interrompido.
              Essa limitação só foi superada nas gimnospermas e angiospermas com a evolução
              do grão de pólen, que leva o gameta masculino até o feminino sem necessidade
              de água.
            </p>
          }
        />
      </section>
    </article>
  );
}
