"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap20Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 20</span>

          <h1>Evidências da Evolução e Especiação</h1>

          <p>
            A teoria evolutiva é o eixo unificador de toda a Biologia moderna.
            Fósseis, anatomia comparada, embriologia, bioquímica molecular e
            biogeografia convergem para a mesma conclusão: todas as formas de
            vida compartilham um ancestral comum e se transformam ao longo do
            tempo. Neste capítulo você vai dominar as evidências que sustentam
            a evolução, compreender o conceito biológico de espécie, os
            mecanismos de isolamento reprodutivo e os diferentes modos de
            especiação — conteúdo amplamente cobrado no ENEM e nos vestibulares.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 1 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Fósseis</span>

        <h2>1. Paleontologia e o Registro Fóssil</h2>

        <p>
          <strong>Fósseis</strong> são restos ou vestígios de organismos que
          viveram em épocas passadas, preservados em rochas sedimentares, gelo,
          âmbar, turfa ou outros meios. A <strong>Paleontologia</strong> estuda
          esse registro e é a fonte de evidência evolutiva mais direta que
          temos: ela mostra que as formas de vida mudaram ao longo do tempo
          geológico e que muitas espécies hoje extintas foram ancestrais das
          atuais.
        </p>

        <p>
          A <strong>datação radiométrica</strong> permite estimar a idade dos
          fósseis com precisão. O método do <strong>carbono-14</strong> é útil
          para materiais com até ~50 000 anos, enquanto o par{" "}
          <strong>potássio-40/argônio-40</strong> alcança bilhões de anos —
          essencial para fósseis do Pré-Cambriano. A partir da posição
          estratigráfica (lei da superposição: camadas mais profundas são mais
          antigas) e da datação isotópica, os paleontólogos constroem uma
          cronologia robusta da vida.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🦴</span>
            <h3>Restos mineralizados</h3>
            <p>Ossos, dentes, conchas e troncos substituídos por minerais ao longo de milênios.</p>
          </div>

          <div className="lesson-card">
            <span>👣</span>
            <h3>Vestígios de atividade</h3>
            <p>Pegadas, tocas, ovos, coprólitos (fezes fossilizadas) e marcas de predação.</p>
          </div>

          <div className="lesson-card">
            <span>🧊</span>
            <h3>Conservação excepcional</h3>
            <p>Gelo, âmbar e turfa preservam tecidos moles, pelos e DNA antigo.</p>
          </div>

          <div className="lesson-card">
            <span>⚗️</span>
            <h3>Datação radiométrica</h3>
            <p>Carbono-14 (≤ 50 mil anos); Potássio-Argônio e Urânio-Chumbo (milhões a bilhões).</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Fósseis de transição — elos perdidos encontrados</h3>
          <p>
            Os <strong>fósseis de transição</strong> mostram características
            intermediárias entre dois grupos distintos, confirmando a
            continuidade evolutiva. Os exemplos mais citados nas provas são:{" "}
            <strong>
              <em>Archaeopteryx lithographica</em>
            </strong>{" "}
            (Jurássico, ~150 Ma) — combina penas e asas de ave com dentes,
            garras e cauda longa de réptil;{" "}
            <strong>
              <em>Tiktaalik roseae</em>
            </strong>{" "}
            (~375 Ma) — peixe com nadadeiras de estrutura óssea semelhante a
            membros, precursor dos tetrápodes; e os hominídeos como{" "}
            <strong>
              <em>Australopithecus afarensis</em>
            </strong>{" "}
            ("Lucy", ~3,2 Ma) — bipedismo com crânio ainda primitivo. A lacuna
            do registro fóssil não invalida a teoria; ao contrário, cada novo
            achado preenche previsões feitas antes da descoberta.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 2 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Anatomia Comparada</span>

        <h2>2. Homologia, Analogia e Estruturas Vestigiais</h2>

        <p>
          A comparação da anatomia de diferentes espécies fornece evidências
          poderosas de parentesco ou de pressões seletivas semelhantes. Três
          conceitos são centrais: <strong>homologia</strong>,{" "}
          <strong>analogia</strong> e <strong>estruturas vestigiais</strong>.
        </p>

        <p>
          <strong>Estruturas homólogas</strong> têm a{" "}
          <strong>mesma origem embrionária</strong> (mesmo plano estrutural
          herdado de um ancestral comum), mas podem apresentar funções muito
          distintas em função de adaptações a diferentes ambientes — processo
          chamado de <strong>divergência adaptativa</strong>. O membro anterior
          dos vertebrados tetrapodes é o exemplo clássico: mesma composição
          óssea (úmero, rádio, ulna, carpos, metacarpos, falanges), porém
          modificada para nadar, voar, correr ou manipular objetos.
        </p>

        <p>
          <strong>Estruturas análogas</strong>, ao contrário, têm{" "}
          <strong>origens embrionárias diferentes</strong>, mas exercem{" "}
          <strong>funções equivalentes</strong> porque as espécies enfrentaram
          pressões seletivas parecidas em ambientes independentes —{" "}
          <strong>convergência adaptativa</strong>. A asa de um inseto e a asa
          de um morcego são análogas: o inseto não é parente próximo do
          morcego, mas ambos precisaram de um plano de voo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Homologia</th>
                <th>Analogia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Origem embrionária</td>
                <td>Mesma (ancestral comum)</td>
                <td>Diferente</td>
              </tr>
              <tr>
                <td>Função</td>
                <td>Pode ser diferente</td>
                <td>Semelhante (mesmo nicho)</td>
              </tr>
              <tr>
                <td>Processo evolutivo</td>
                <td>Divergência adaptativa</td>
                <td>Convergência adaptativa</td>
              </tr>
              <tr>
                <td>Exemplo clássico</td>
                <td>Braço humano × asa de morcego × nadadeira de baleia</td>
                <td>Asa de inseto × asa de morcego</td>
              </tr>
              <tr>
                <td>Inferência</td>
                <td>Parentesco (ancestralidade comum)</td>
                <td>Pressão seletiva similar, sem parentesco próximo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 200" width="720" height="200" aria-label="Membros anteriores de vertebrados — estruturas homólogas">
            {/* Legenda geral */}
            <text x={360} y={18} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">
              Membros anteriores de vertebrados — mesma origem, funções diferentes (homologia)
            </text>
            {/* --- HUMANO --- */}
            <g>
              <text x={80} y={42} textAnchor="middle" fontSize={12} fontWeight={700} fill="#0f4c81">Humano</text>
              {/* úmero */}
              <rect x={65} y={50} width={30} height={52} rx={6} fill="#3b82f6" opacity={0.7} />
              <text x={80} y={78} textAnchor="middle" fontSize={9} fill="#fff">úmero</text>
              {/* rádio+ulna */}
              <rect x={55} y={108} width={13} height={40} rx={4} fill="#60a5fa" opacity={0.8} />
              <rect x={72} y={108} width={13} height={40} rx={4} fill="#60a5fa" opacity={0.8} />
              <text x={80} y={125} textAnchor="middle" fontSize={8} fill="#1e40af">r / u</text>
              {/* carpos/falanges */}
              <rect x={55} y={152} width={50} height={22} rx={4} fill="#93c5fd" opacity={0.9} />
              <text x={80} y={167} textAnchor="middle" fontSize={8} fill="#1e3a8a">falanges</text>
              <text x={80} y={192} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#4b5563">braço / mão</text>
            </g>
            {/* --- MORCEGO --- */}
            <g>
              <text x={230} y={42} textAnchor="middle" fontSize={12} fontWeight={700} fill="#7c3aed">Morcego</text>
              {/* úmero */}
              <rect x={215} y={50} width={30} height={35} rx={6} fill="#8b5cf6" opacity={0.7} />
              <text x={230} y={73} textAnchor="middle" fontSize={9} fill="#fff">úmero</text>
              {/* rádio+ulna muito alongados */}
              <rect x={218} y={90} width={10} height={60} rx={4} fill="#a78bfa" opacity={0.8} />
              <rect x={232} y={90} width={10} height={60} rx={4} fill="#a78bfa" opacity={0.8} />
              {/* falanges longas = asas */}
              <line x1={215} y1={152} x2={195} y2={185} stroke="#7c3aed" strokeWidth={3} />
              <line x1={222} y1={152} x2={215} y2={188} stroke="#7c3aed" strokeWidth={3} />
              <line x1={232} y1={152} x2={240} y2={188} stroke="#7c3aed" strokeWidth={3} />
              <line x1={242} y1={152} x2={255} y2={185} stroke="#7c3aed" strokeWidth={3} />
              <text x={230} y={192} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#4b5563">asa</text>
            </g>
            {/* --- BALEIA --- */}
            <g>
              <text x={400} y={42} textAnchor="middle" fontSize={12} fontWeight={700} fill="#0e7490">Baleia</text>
              {/* úmero curto */}
              <rect x={385} y={50} width={30} height={25} rx={6} fill="#0ea5e9" opacity={0.7} />
              <text x={400} y={68} textAnchor="middle" fontSize={9} fill="#fff">úmero</text>
              {/* rádio/ulna achatados */}
              <rect x={378} y={80} width={44} height={20} rx={5} fill="#38bdf8" opacity={0.8} />
              {/* nadadeira larga */}
              <ellipse cx={400} cy={130} rx={38} ry={52} fill="#7dd3fc" opacity={0.7} />
              <text x={400} y={132} textAnchor="middle" fontSize={9} fill="#0c4a6e">falanges</text>
              <text x={400} y={144} textAnchor="middle" fontSize={9} fill="#0c4a6e">fusionadas</text>
              <text x={400} y={192} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#4b5563">nadadeira</text>
            </g>
            {/* --- CAVALO --- */}
            <g>
              <text x={570} y={42} textAnchor="middle" fontSize={12} fontWeight={700} fill="#b45309">Cavalo</text>
              {/* úmero */}
              <rect x={555} y={50} width={30} height={45} rx={6} fill="#d97706" opacity={0.7} />
              <text x={570} y={78} textAnchor="middle" fontSize={9} fill="#fff">úmero</text>
              {/* rádio/ulna */}
              <rect x={560} y={100} width={20} height={45} rx={4} fill="#fbbf24" opacity={0.8} />
              {/* metacarpo único longo */}
              <rect x={563} y={150} width={14} height={30} rx={3} fill="#fde68a" opacity={0.9} />
              {/* falange única = casco */}
              <ellipse cx={570} cy={188} rx={12} ry={8} fill="#92400e" opacity={0.8} />
              <text x={570} y={192} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#4b5563">casco</text>
            </g>
          </svg>
          <figcaption>
            Estruturas homólogas: humano, morcego, baleia e cavalo compartilham
            o mesmo plano ósseo do membro anterior herdado de um ancestral
            tetrapode comum, adaptado para funções distintas.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Estruturas vestigiais — herança sem função atual</h3>
          <p>
            <strong>Estruturas vestigiais</strong> são órgãos ou partes
            reduzidos, sem função evidente no organismo atual, mas homólogos a
            estruturas funcionais em outros grupos. Sua existência só faz
            sentido à luz da evolução: são resquícios de estruturas que foram
            úteis em ancestrais. Exemplos em humanos: <strong>cóccix</strong>{" "}
            (vértebras caudais fundidas — resto da cauda); <strong>apêndice
            cecal</strong> (câmara de fermentação de herbívoros); <strong>
            músculos auriculares</strong> (para mover orelhas em outros
            mamíferos); <strong>terceiros molares</strong> (sisos); <strong>
            membrana nictitante</strong> (terceira pálpebra rudimentar);{" "}
            <strong>lanugo</strong> fetal (pelos de cobertura). Nas baleias, há
            ossos de cintura pélvica internos, resquício de pernas de
            ancestrais terrestres.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 3 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Embriologia Comparada</span>

        <h2>3. Evidências Embrionárias</h2>

        <p>
          Os embriões de vertebrados muito diferentes — peixes, anfíbios,
          répteis, aves e mamíferos — são <strong>surpreendentemente
          semelhantes</strong> nas fases iniciais do desenvolvimento. Todos
          apresentam <strong>fendas branquiais</strong>, <strong>notocorda</strong>{" "}
          e uma <strong>cauda</strong> proeminente. À medida que o
          desenvolvimento avança, as diferenças vão emergindo — mas a fase
          inicial compartilhada é um testemunho direto da ancestralidade comum.
        </p>

        <p>
          Ernst Haeckel propôs a famosa <strong>lei biogenética</strong>
          ("a ontogenia recapitula a filogenia"), uma formulação hoje
          considerada exagerada, mas cujo núcleo permanece válido: os estágios
          embrionários mais primitivos são os mais conservados
          evolutivamente. Os <strong>genes Hox</strong>, que controlam a
          organização do eixo corporal, são praticamente idênticos em toda
          a linha dos animais (de moscas a humanos) — uma evidência molecular da
          herança embrionária comum.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🐠</span>
            <h3>Fendas branquiais</h3>
            <p>Aparecem em todos os embriões de vertebrados; em mamíferos, dão origem a estruturas do pescoço, não a brânquias.</p>
          </div>

          <div className="lesson-card">
            <span>🦎</span>
            <h3>Cauda embrionária</h3>
            <p>Embriões humanos possuem cauda visível até a 4ª semana de gestação, reabsorvida posteriormente.</p>
          </div>

          <div className="lesson-card">
            <span>🧬</span>
            <h3>Genes Hox</h3>
            <p>Genes reguladores do plano corporal conservados há mais de 500 milhões de anos em todos os animais.</p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Notocorda</h3>
            <p>Estrutura de suporte embrionária presente em todos os cordados; em vertebrados, é substituída pela coluna vertebral.</p>
          </div>
        </div>
      </section>

      {/* ===================== SEÇÃO 4 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Biologia Molecular</span>

        <h2>4. Evidências Bioquímicas e Moleculares</h2>

        <p>
          O DNA, o RNA mensageiro, o código genético, o ATP, os ribossomos e
          as enzimas metabólicas são <strong>universais</strong> em todos os
          seres vivos — do mais simples procarioto à célula humana. Essa
          universalidade é a evidência mais contundente de que toda a vida
          descende de um <strong>ancestral universal comum</strong> (LUCA —
          Last Universal Common Ancestor).
        </p>

        <p>
          A <strong>distância molecular</strong> entre espécies é obtida
          comparando sequências de DNA ou de aminoácidos em proteínas
          conservadas. Quanto mais diferente a sequência, mais tempo de
          separação evolutiva. A proteína <strong>citocromo c</strong>
          (presente em quase todos os eucariotos) varia pouco entre humanos e
          chimpanzés, moderadamente entre humanos e cavalos, e muito entre
          humanos e leveduras — correspondendo exatamente ao grau de parentesco
          esperado pelo registro fóssil.
        </p>

        <div className="lesson-highlight">
          <h3>Relógio molecular e filogenômica</h3>
          <p>
            Mutações neutras acumulam-se a taxas relativamente constantes nas
            regiões não codificantes do DNA. Isso permite calcular o tempo
            de divergência entre linhagens — o chamado <strong>relógio
            molecular</strong>. O sequenciamento de genomas inteiros
            (<strong>filogenômica</strong>) refinou drasticamente as árvores
            filogenéticas, confirmando e corrigindo classificações baseadas
            apenas em morfologia. Exemplo: humanos e chimpanzés compartilham
            ~98,8% do DNA; humanos e gorilas, ~98,3% — confirmando uma
            divergência humano-chimpanzé há ~6-7 Ma.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Código genético universal</h3>
            <p>Os 64 códons codificam os mesmos aminoácidos em bactérias, plantas e humanos — mesma linguagem molecular.</p>
          </div>

          <div className="lesson-card">
            <span>⚗️</span>
            <h3>Citocromo c</h3>
            <p>Proteína mitocondrial usada como relógio molecular; menos mutações = mais parentesco.</p>
          </div>

          <div className="lesson-card">
            <span>📊</span>
            <h3>DNA mitocondrial</h3>
            <p>Herdado pela linha materna; usado para rastrear migrações humanas e divergência de linhagens animais.</p>
          </div>

          <div className="lesson-card">
            <span>🌳</span>
            <h3>Árvore filogenética</h3>
            <p>Construída por máxima parcimônia ou máxima verossimilhança a partir de matrizes de distâncias moleculares.</p>
          </div>
        </div>
      </section>

      {/* ===================== SEÇÃO 5 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Biogeografia</span>

        <h2>5. Distribuição Geográfica dos Seres Vivos</h2>

        <p>
          A <strong>biogeografia</strong> estuda como os seres vivos se
          distribuem pelo planeta e por que determinados grupos ocorrem em
          determinadas regiões. Os padrões observados só se explicam pela
          combinação de <strong>deriva continental</strong> (que separou ou
          uniu terras), <strong>dispersão</strong> (colonização de novas áreas)
          e <strong>evolução local</strong> em isolamento.
        </p>

        <p>
          A Austrália, isolada há ~50 Ma, possui uma fauna de mamíferos
          dominada por <strong>marsupiais</strong> que convergiu para os
          mesmos nichos ecológicos que os placentários ocupam em outros
          continentes (lobo-da-tasmânia ≈ lobo; coalas ≈ ursos; tilacínio ≈
          tigre). As <strong>ilhas oceânicas</strong> (que nunca estiveram
          ligadas a continentes) mostram alto endemismo e ausência de grandes
          predadores terrestres — as espécies que chegaram por dispersão
          radiam adaptação rapidamente nos nichos vazios.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🦘</span>
            <h3>Austrália — marsupiais</h3>
            <p>Isolamento continental levou a uma fauna singular de mamíferos marsupiais com morfologias convergentes aos placentários.</p>
          </div>

          <div className="lesson-card">
            <span>🦎</span>
            <h3>Galápagos — tentilhões</h3>
            <p>14 espécies de tentilhões com bicos adaptados a diferentes fontes de alimento em cada ilha do arquipélago.</p>
          </div>

          <div className="lesson-card">
            <span>🦥</span>
            <h3>América do Sul — fauna única</h3>
            <p>Preguiças, tatus, anteaters e capivaras — resultados do isolamento do bloco gondwânico durante 30–40 Ma.</p>
          </div>

          <div className="lesson-card">
            <span>🌋</span>
            <h3>Ilhas oceânicas</h3>
            <p>Endemismo elevado; ausência de mamíferos terrestres nativos; colonização por pássaros, répteis e invertebrados.</p>
          </div>
        </div>
      </section>

      {/* ===================== SEÇÃO 6 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Conceito de Espécie</span>

        <h2>6. O Que é uma Espécie e o Isolamento Reprodutivo</h2>

        <p>
          O <strong>conceito biológico de espécie</strong> proposto por Ernst
          Mayr (1942) define espécie como "um grupo de populações naturais
          real ou potencialmente intercruzantes, reprodutivamente isoladas de
          outros grupos semelhantes". Em linguagem direta: membros da mesma
          espécie se cruzam e geram <strong>descendentes férteis</strong>;
          membros de espécies diferentes não conseguem, ou geram híbridos
          estéreis.
        </p>

        <p>
          Os mecanismos que impedem o fluxo gênico entre populações são
          classificados em <strong>pré-zigóticos</strong> (a fecundação não
          ocorre) e <strong>pós-zigóticos</strong> (a fecundação ocorre, mas
          a descendência não é viável ou fértil).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de isolamento</th>
                <th>Subtipo</th>
                <th>Mecanismo</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={5}><strong>Pré-zigótico</strong> (antes da fecundação)</td>
                <td>Geográfico / ecológico</td>
                <td>Populações ocupam habitats ou microhabitats diferentes</td>
                <td>Salamandras de riacho × salamandras de terra firme</td>
              </tr>
              <tr>
                <td>Temporal / sazonal</td>
                <td>Reprodução em épocas diferentes do ano</td>
                <td>Pinus radiata × P. muricata (floração diferente)</td>
              </tr>
              <tr>
                <td>Comportamental / sexual</td>
                <td>Rituais de corte ou sinais diferentes não reconhecidos</td>
                <td>Espécies irmãs de vaga-lumes com padrões de flash distintos</td>
              </tr>
              <tr>
                <td>Mecânico</td>
                <td>Incompatibilidade morfológica dos aparelhos reprodutores</td>
                <td>Flores com morfologia específica para certo polinizador</td>
              </tr>
              <tr>
                <td>Gamético</td>
                <td>Gametas não se reconhecem quimicamente</td>
                <td>Proteínas de superfície do óvulo rejeitem espermatozóides heteroespecíficos</td>
              </tr>
              <tr>
                <td rowSpan={3}><strong>Pós-zigótico</strong> (após a fecundação)</td>
                <td>Inviabilidade do híbrido</td>
                <td>Embrião híbrido não se desenvolve ou morre jovem</td>
                <td>Cruzamentos entre espécies de Drosophila</td>
              </tr>
              <tr>
                <td>Esterilidade do híbrido</td>
                <td>Híbrido adulto, mas estéril</td>
                <td>Mula (cavalo × jumento) — estéril</td>
              </tr>
              <tr>
                <td>Colapso do híbrido</td>
                <td>F₁ fértil, mas F₂ com baixíssima viabilidade</td>
                <td>Algumas espécies de algodão (Gossypium)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>O caso da mula — exemplo clássico de pós-zigótico</h3>
          <p>
            O cruzamento de <strong>égua</strong> (<em>Equus caballus</em>, 2n
            = 64) com <strong>jumento</strong> (<em>Equus asinus</em>, 2n =
            62) produz a <strong>mula</strong> (2n = 63 cromossomos). A mula é
            robusta, resistente e usada como animal de trabalho, mas é
            praticamente <strong>estéril</strong> porque seus cromossomos não
            emparelham corretamente durante a meiose. Esse é o exemplo mais
            cobrado de isolamento pós-zigótico nas provas brasileiras.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 7 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Especiação</span>

        <h2>7. Modos de Especiação</h2>

        <p>
          <strong>Especiação</strong> é o processo pelo qual uma população se
          divide em dois ou mais grupos que, com o tempo, perdem a capacidade
          de se cruzar entre si, tornando-se espécies distintas. O fator
          central é o <strong>isolamento reprodutivo</strong>, que interrompe
          o fluxo gênico e permite que cada grupo acumule mutações e responda
          à seleção natural de forma independente.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏔️</span>
            <h3>Alopátrica</h3>
            <p>Uma barreira geográfica (rio, montanha, geleira, nível do mar) divide fisicamente a população. É o modo mais comum.</p>
          </div>

          <div className="lesson-card">
            <span>🌳</span>
            <h3>Simpátrica</h3>
            <p>Sem separação geográfica. Ocorre por poliploidia (plantas), ou por preferência por hospedeiro/habitat diferente.</p>
          </div>

          <div className="lesson-card">
            <span>🐠</span>
            <h3>Peripátrica</h3>
            <p>Pequena população na margem da área de distribuição é isolada; efeito fundador acelera a divergência.</p>
          </div>

          <div className="lesson-card">
            <span>🌐</span>
            <h3>Parapátrica</h3>
            <p>Populações vizinhas com contato parcial ao longo de uma zona de transição; seleção divergente supera o fluxo gênico residual.</p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 230" width="720" height="230" aria-label="Esquema de especiação alopátrica">
            <text x={360} y={18} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">
              Especiação alopátrica — etapas
            </text>

            {/* ETAPA 1 — população única */}
            <rect x={10} y={30} width={155} height={185} rx={10} fill="#f0fdf4" stroke="#86efac" strokeWidth={1.5} />
            <text x={87} y={48} textAnchor="middle" fontSize={11} fontWeight={700} fill="#166534">1. Pop. ancestral</text>
            <ellipse cx={87} cy={125} rx={55} ry={62} fill="#4ade80" opacity={0.35} stroke="#16a34a" strokeWidth={1.5} />
            {/* pontos = indivíduos */}
            {[
              [72,100],[87,90],[102,100],[68,120],[87,115],[106,120],
              [75,140],[87,135],[100,140],[82,158],[95,158]
            ].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r={4} fill="#15803d" opacity={0.75} />
            ))}
            <text x={87} y={205} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#166534">livre cruzamento</text>

            {/* seta 1→2 */}
            <polygon points="172,122 188,116 188,128" fill="#6b7280" />
            <line x1={165} y1={122} x2={188} y2={122} stroke="#6b7280" strokeWidth={1.5} />

            {/* ETAPA 2 — barreira */}
            <rect x={192} y={30} width={175} height={185} rx={10} fill="#fff7ed" stroke="#fdba74" strokeWidth={1.5} />
            <text x={279} y={48} textAnchor="middle" fontSize={11} fontWeight={700} fill="#9a3412">2. Barreira geográfica</text>
            {/* pop esq */}
            <ellipse cx={234} cy={125} rx={35} ry={55} fill="#4ade80" opacity={0.3} stroke="#16a34a" strokeWidth={1.2} />
            {[
              [225,100],[235,92],[244,100],[228,118],[238,114],[245,122],
              [230,138],[240,134],[232,152]
            ].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r={3.5} fill="#15803d" opacity={0.7} />
            ))}
            {/* BARREIRA — montanha estilizada */}
            <polygon points="279,185 265,110 279,85 293,110" fill="#d1d5db" stroke="#9ca3af" strokeWidth={1.5} />
            <polygon points="279,185 270,125 279,100 288,125" fill="#e5e7eb" stroke="#9ca3af" strokeWidth={1} />
            <text x={279} y={200} textAnchor="middle" fontSize={9} fill="#6b7280">montanha</text>
            {/* pop dir */}
            <ellipse cx={326} cy={125} rx={35} ry={55} fill="#4ade80" opacity={0.3} stroke="#16a34a" strokeWidth={1.2} />
            {[
              [316,100],[327,92],[337,100],[320,118],[330,114],[338,122],
              [322,138],[332,134],[324,152]
            ].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r={3.5} fill="#15803d" opacity={0.7} />
            ))}

            {/* seta 2→3 */}
            <polygon points="374,122 390,116 390,128" fill="#6b7280" />
            <line x1={367} y1={122} x2={390} y2={122} stroke="#6b7280" strokeWidth={1.5} />
            <text x={380} y={112} textAnchor="middle" fontSize={9} fill="#6b7280">tempo</text>

            {/* ETAPA 3 — divergência */}
            <rect x={394} y={30} width={175} height={185} rx={10} fill="#faf5ff" stroke="#c4b5fd" strokeWidth={1.5} />
            <text x={481} y={48} textAnchor="middle" fontSize={11} fontWeight={700} fill="#6b21a8">3. Divergência genética</text>
            {/* pop esq divergiu — azul */}
            <ellipse cx={436} cy={125} rx={35} ry={55} fill="#3b82f6" opacity={0.25} stroke="#2563eb" strokeWidth={1.2} />
            {[
              [426,100],[437,92],[447,100],[429,118],[439,114],[447,122],
              [431,138],[441,134],[433,152]
            ].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r={3.5} fill="#1d4ed8" opacity={0.75} />
            ))}
            {/* barreira */}
            <polygon points="481,185 467,110 481,85 495,110" fill="#d1d5db" stroke="#9ca3af" strokeWidth={1.5} />
            <polygon points="481,185 472,125 481,100 490,125" fill="#e5e7eb" stroke="#9ca3af" strokeWidth={1} />
            {/* pop dir divergiu — laranja */}
            <ellipse cx={528} cy={125} rx={35} ry={55} fill="#f97316" opacity={0.22} stroke="#ea580c" strokeWidth={1.2} />
            {[
              [518,100],[528,92],[538,100],[521,118],[531,114],[539,122],
              [523,138],[533,134],[525,152]
            ].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r={3.5} fill="#c2410c" opacity={0.75} />
            ))}

            {/* seta 3→4 */}
            <polygon points="576,122 592,116 592,128" fill="#6b7280" />
            <line x1={569} y1={122} x2={592} y2={122} stroke="#6b7280" strokeWidth={1.5} />

            {/* ETAPA 4 — 2 espécies */}
            <rect x={596} y={30} width={116} height={185} rx={10} fill="#fff1f2" stroke="#fda4af" strokeWidth={1.5} />
            <text x={654} y={48} textAnchor="middle" fontSize={11} fontWeight={700} fill="#9f1239">4. Duas espécies</text>
            <ellipse cx={636} cy={100} rx={28} ry={36} fill="#3b82f6" opacity={0.28} stroke="#2563eb" strokeWidth={1.2} />
            <text x={636} y={103} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1d4ed8">Sp. A</text>
            <ellipse cx={672} cy={158} rx={28} ry={36} fill="#f97316" opacity={0.25} stroke="#ea580c" strokeWidth={1.2} />
            <text x={672} y={161} textAnchor="middle" fontSize={9} fontWeight={700} fill="#c2410c">Sp. B</text>
            <line x1={636} y1={136} x2={672} y2={122} stroke="#9f1239" strokeWidth={1.5} strokeDasharray="5 4" />
            <text x={654} y={112} textAnchor="middle" fontSize={8} fill="#9f1239">sem</text>
            <text x={654} y={121} textAnchor="middle" fontSize={8} fill="#9f1239">cruzamento</text>
            <text x={654} y={205} textAnchor="middle" fontSize={10} fontStyle="italic" fill="#9f1239">reprodut. isoladas</text>
          </svg>
          <figcaption>
            Especiação alopátrica: uma população ancestral é dividida por uma
            barreira geográfica; cada subpopulação acumula mutações distintas
            sob pressões seletivas diferentes; ao se reencontrarem, não se
            cruzam mais — são espécies distintas.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Radiação adaptativa — quando uma vira muitas</h3>
          <p>
            <strong>Radiação adaptativa</strong> ocorre quando uma única
            linhagem ancestral diversifica-se rapidamente em múltiplas espécies
            que ocupam nichos ecológicos diferentes. O fenômeno é favorecido
            por ambientes com muitos nichos disponíveis ou após uma extinção
            em massa. O exemplo mais famoso são os{" "}
            <strong>tentilhões de Darwin</strong> nas Galápagos: a partir de
            um ancestral da América do Sul, radiaram em ~14 espécies com bicos
            adaptados a sementes duras, insetos, néctar e até sangue. Outros
            exemplos: ciclídeos do Lago Vitória ({">"} 500 espécies em ~15 000
            anos) e marsupiais australianos.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 8 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Convergência × Divergência</span>

        <h2>8. Evolução Convergente e Divergente</h2>

        <p>
          A <strong>evolução divergente</strong> parte de um ancestral comum e
          produz formas distintas adaptadas a diferentes ambientes —
          resultando em estruturas homólogas com funções diferentes.{" "}
          A <strong>evolução convergente</strong> ocorre em linhagens sem
          parentesco próximo que, expostas a pressões seletivas semelhantes,
          desenvolvem independentemente estruturas análogas com funções iguais.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Evolução Divergente</th>
                <th>Evolução Convergente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ponto de partida</td>
                <td>Ancestral comum único</td>
                <td>Linhagens independentes</td>
              </tr>
              <tr>
                <td>Resultado nas estruturas</td>
                <td>Homólogas (mesma origem, funções distintas)</td>
                <td>Análogas (origens distintas, mesma função)</td>
              </tr>
              <tr>
                <td>Padrão filogenético</td>
                <td>Ramificação (cladogênese)</td>
                <td>Paralelismo ou convergência de ramos distantes</td>
              </tr>
              <tr>
                <td>Exemplo</td>
                <td>Membro anterior de tetrapodes</td>
                <td>Forma hidrodinâmica de golfinhos, tubarões e ictiosauros</td>
              </tr>
              <tr>
                <td>Importância para o ENEM</td>
                <td>Evidência de parentesco; base de cladística</td>
                <td>Explica semelhanças enganosas entre grupos não aparentados</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            <strong>Dica de prova:</strong> a questão pode apresentar animais
            com formas parecidas e perguntar se são aparentados. Lembre-se:
            golfinhos (mamíferos), tubarões (peixes condríctios) e ictiosauros
            (répteis extintos) têm corpo fusiforme porque todos vivem em água —
            convergência adaptativa, <em>não</em> homologia.
          </p>
        </div>
      </section>

      {/* ===================== EXERCÍCIOS ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — Evidências da Evolução e Especiação</h2>

        <Exercise
          level="Básico"
          title="1. Estruturas homólogas vs. análogas"
          statement={
            <p>
              A asa de um morcego e a asa de uma borboleta são exemplos de
              estruturas análogas. Já o braço humano e a nadadeira de uma
              baleia são estruturas homólogas. A diferença fundamental entre
              esses dois tipos de estrutura está:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Na função exercida — estruturas análogas têm a mesma função; homólogas, funções diferentes",
            },
            {
              letter: "b",
              text: "Na origem embrionária — homólogas derivam do mesmo tecido ancestral; análogas, de origens distintas",
              correct: true,
            },
            {
              letter: "c",
              text: "No tamanho — estruturas maiores são sempre homólogas",
            },
            {
              letter: "d",
              text: "No material genético — espécies com DNA semelhante têm estruturas análogas",
            },
          ]}
          resolution={
            <p>
              O critério que define homologia é a <strong>mesma origem
              embrionária</strong> (mesmo plano herdado do ancestral comum),
              independentemente da função atual. Estruturas análogas têm funções
              semelhantes, mas origens embrionárias distintas — resultado de
              convergência adaptativa.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Isolamento reprodutivo pré e pós-zigótico"
          statement={
            <p>
              Assinale a alternativa que associa corretamente o mecanismo de
              isolamento reprodutivo ao seu tipo.
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Duas populações de sapos que se reproduzem em meses diferentes do ano — pós-zigótico sazonal",
            },
            {
              letter: "b",
              text: "Mula gerada do cruzamento de cavalo com jumento, mas estéril — pós-zigótico por esterilidade do híbrido",
              correct: true,
            },
            {
              letter: "c",
              text: "Cruzamento entre insetos de espécies diferentes que produz larvas viáveis e férteis — pré-zigótico gamético",
            },
            {
              letter: "d",
              text: "Espécies de pássaros com cantos diferentes que se cruzam livremente — sem isolamento reprodutivo",
            },
          ]}
          resolution={
            <p>
              A mula é gerada (fecundação ocorre — pós-zigótico), mas é
              estéril porque os 63 cromossomos não emparelham na meiose.
              Isso classifica o caso como <strong>isolamento pós-zigótico
              por esterilidade do híbrido</strong>. A alternativa A descreve
              isolamento pré-zigótico temporal/sazonal, não pós-zigótico.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Especiação alopátrica e radiação adaptativa"
          statement={
            <p>
              Os ciclídeos do Lago Vitória (África) diversificaram-se em mais
              de 500 espécies em aproximadamente 15 000 anos a partir de um
              ancestral único. Com base nos conceitos de especiação e evolução,
              avalie as afirmativas a seguir:
              I — O processo observado é um exemplo de radiação adaptativa após
              especiação alopátrica dentro do lago.
              II — O isolamento por microhabitat e a seleção sexual por
              coloração podem gerar especiação mesmo sem barreira geográfica
              completa.
              III — A rápida diversificação contradiz a teoria da evolução, pois
              esta prevê apenas mudanças muito lentas.
              Está correto apenas:
            </p>
          }
          options={[
            { letter: "a", text: "I apenas" },
            { letter: "b", text: "II apenas" },
            { letter: "c", text: "I e III" },
            {
              letter: "d",
              text: "I e II",
              correct: true,
            },
          ]}
          resolution={
            <p>
              I é verdadeira: o isolamento por microhabitat dentro do lago
              (especiação simpátrica/parapátrica) e a subsequente diversificação
              ecológica caracterizam radiação adaptativa. II é verdadeira:
              seleção sexual por coloração é um mecanismo de isolamento
              comportamental pré-zigótico. III é falsa: a teoria evolutiva
              não prevê velocidade uniforme — o ritmo pode variar muito,
              como demonstra o modelo do equilíbrio pontuado (Gould e Eldredge).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Evidências na prática — ENEM 2019 adaptada"
          statement={
            <p>
              Um pesquisador comparou a sequência de aminoácidos da proteína
              citocromo c em quatro espécies: humano, chimpanzé, cavalo e
              levedura. Os resultados mostraram que humano e chimpanzé diferem
              em apenas 0 aminoácidos; humano e cavalo diferem em 12; humano e
              levedura diferem em 44. Com base nesses dados, a conclusão mais
              adequada é:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Humano e levedura são mais aparentados, pois possuem maior número de diferenças que servem de variação adaptativa",
            },
            {
              letter: "b",
              text: "A comparação de proteínas não é uma evidência válida para a evolução, pois proteínas mudam aleatoriamente",
            },
            {
              letter: "c",
              text: "Humano e chimpanzé são os mais próximos evolutivamente, seguidos pelo cavalo; a levedura é a mais distante — consistente com a filogenia baseada em fósseis",
              correct: true,
            },
            {
              letter: "d",
              text: "O cavalo é mais próximo do humano do que o chimpanzé, pois compartilha mais habitat com o humano",
            },
          ]}
          resolution={
            <p>
              Quanto mais diferenças nas sequências de aminoácidos, maior o
              tempo de divergência evolutiva. Humano e chimpanzé divergiram
              há ~6–7 Ma (0 diferenças no citocromo c); humano e cavalo, há
              ~80 Ma (12 diferenças); humano e levedura, há mais de 1 bilhão
              de anos (44 diferenças). Os dados moleculares confirmam
              exatamente o parentesco esperado pelo registro fóssil —
              validando a evidência bioquímica como ferramenta filogenética.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Biogeografia e evolução convergente — vestibular FUVEST adaptada"
          statement={
            <p>
              A Austrália possui marsupiais que ocupam nichos ecológicos
              semelhantes aos de mamíferos placentários em outros continentes:
              o tilacínio lembrava um lobo; o coala lembra um urso; o
              wombat lembra uma marmota. Esses paralelos evidenciam que:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Marsupiais e placentários são evolutivamente idênticos, pois descendem do mesmo ancestral imediato",
            },
            {
              letter: "b",
              text: "O isolamento geográfico da Austrália levou à evolução convergente, em que pressões seletivas similares moldaram formas parecidas em linhagens distintas",
              correct: true,
            },
            {
              letter: "c",
              text: "A presença de formas parecidas prova que a deriva continental não ocorreu, pois as espécies migraram entre os continentes",
            },
            {
              letter: "d",
              text: "Toda semelhança morfológica indica homologia e parentesco próximo",
            },
          ]}
          resolution={
            <p>
              Marsupiais australianos e placentários de outros continentes são
              grupos distintos que divergiram há ~180 Ma. A semelhança
              morfológica é resultado de <strong>evolução convergente</strong>:
              pressões seletivas parecidas (caça, pastejo, escavação) moldaram
              independentemente formas corporais semelhantes. As estruturas são
              <strong>análogas</strong>, não homólogas. O isolamento continental
              desde a separação da Gondwana impediu o fluxo gênico e permitiu
              que a fauna australiana divergisse completamente.
            </p>
          }
        />
      </section>
    </article>
  );
}
