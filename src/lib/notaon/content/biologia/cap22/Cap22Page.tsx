"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap22Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 22</span>

          <h1>Taxonomia e Sistemática Filogenética</h1>

          <p>
            Como a ciência organiza a imensa diversidade da vida — mais de{" "}
            <strong>8 milhões de espécies estimadas</strong> — em um sistema
            coerente de nomes, categorias e relações evolutivas? A Taxonomia e a
            Sistemática Filogenética respondem a essa pergunta e formam a espinha
            dorsal conceitual de toda a Biologia. Este capítulo apresenta as
            categorias taxonômicas, as regras da nomenclatura binomial de Lineu,
            o conceito de espécie, os três domínios da vida, a cladística e a
            interpretação de cladogramas — temas que aparecem diretamente no
            ENEM, na FUVEST, no ENADE e nos principais vestibulares brasileiros.
          </p>
        </div>
      </section>

      {/* ==================== SEÇÃO 1 ==================== */}
      <section className="lesson-section">
        <span className="section-kicker">Por que classificar?</span>

        <h2>1. Importância da Taxonomia</h2>

        <p>
          A <strong>Taxonomia</strong> (do grego <em>táxis</em> = ordenação +{" "}
          <em>nomos</em> = lei) é a disciplina científica que se ocupa de{" "}
          <strong>identificar, nomear e classificar</strong> os seres vivos. Sem
          um sistema padronizado, cada povo e cada pesquisador usaria um nome
          diferente para o mesmo organismo — o que tornaria impossível
          compartilhar conhecimento de forma universal. Um leão, por exemplo, é
          chamado de <em>lion</em> em inglês, <em>löwe</em> em alemão e{" "}
          <em>simba</em> em suaíli, mas o nome científico <em>Panthera leo</em>{" "}
          é compreendido por biólogos do mundo inteiro.
        </p>

        <p>
          Além da padronização, a classificação revela{" "}
          <strong>relações de parentesco evolutivo</strong>: organismos agrupados
          juntos compartilham um ancestral comum, o que permite inferir
          propriedades bioquímicas, comportamentais e fisiológicas ainda não
          estudadas em determinada espécie. A taxonomia tem, portanto, implicações
          práticas enormes na medicina, na ecologia, na biotecnologia e na
          conservação da biodiversidade.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Comunicação universal</h3>
            <p>
              Um único nome científico, válido em qualquer idioma, elimina
              ambiguidades entre pesquisadores do mundo inteiro.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔗</span>
            <h3>Parentesco evolutivo</h3>
            <p>
              Agrupar espécies por ancestralidade comum facilita prever
              características ainda não investigadas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Conservação</h3>
            <p>
              Saber quantas espécies existem e como se relacionam é
              imprescindível para políticas de preservação ambiental.
            </p>
          </div>

          <div className="lesson-card">
            <span>💊</span>
            <h3>Medicina e biotecnologia</h3>
            <p>
              Identificar corretamente patógenos e plantas medicinais depende
              de uma nomenclatura precisa e estável.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SEÇÃO 2 ==================== */}
      <section className="lesson-section">
        <span className="section-kicker">Carl von Linné</span>

        <h2>2. Nomenclatura Binomial de Lineu</h2>

        <p>
          O naturalista sueco <strong>Carl von Linné</strong> (1707–1778),
          latinizado como <em>Carolus Linnaeus</em> e conhecido em português como
          Lineu, publicou em 1758 a décima edição do <em>Systema Naturae</em>, obra
          que consolidou o sistema de nomenclatura binomial ainda usado hoje. Antes
          de Lineu, os nomes científicos eram frases descritivas longas em latim —
          às vezes com doze palavras — impossíveis de memorizar e citar de forma
          prática. A contribuição de Lineu foi sintetizar cada espécie em{" "}
          <strong>dois termos latinos</strong>: o gênero e o epíteto específico.
        </p>

        <div className="lesson-highlight">
          <h3>As cinco regras fundamentais da nomenclatura binomial</h3>
          <ol>
            <li>
              O nome é composto de <strong>dois termos</strong> (binomial): o{" "}
              <strong>gênero</strong> e o <strong>epíteto específico</strong>.
            </li>
            <li>
              O nome do <strong>gênero</strong> começa com{" "}
              <strong>letra maiúscula</strong>; o epíteto específico, com{" "}
              <strong>letra minúscula</strong>.
            </li>
            <li>
              O nome deve ser escrito em <strong>itálico</strong> (em textos
              impressos) ou <strong>sublinhado</strong> (em textos manuscritos).
            </li>
            <li>
              Os termos são de origem <strong>latina ou latinizada</strong>.
            </li>
            <li>
              O nome é seguido, na primeira citação, do nome do{" "}
              <strong>autor</strong> que descreveu a espécie e do ano; por
              exemplo: <em>Homo sapiens</em> Linnaeus, 1758.
            </li>
          </ol>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Nome popular</th>
                <th>Nome científico correto</th>
                <th>Gênero</th>
                <th>Epíteto específico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ser humano</td>
                <td><em>Homo sapiens</em></td>
                <td><em>Homo</em></td>
                <td><em>sapiens</em></td>
              </tr>
              <tr>
                <td>Leão</td>
                <td><em>Panthera leo</em></td>
                <td><em>Panthera</em></td>
                <td><em>leo</em></td>
              </tr>
              <tr>
                <td>Onça-pintada</td>
                <td><em>Panthera onca</em></td>
                <td><em>Panthera</em></td>
                <td><em>onca</em></td>
              </tr>
              <tr>
                <td>Cão doméstico</td>
                <td><em>Canis lupus familiaris</em></td>
                <td><em>Canis</em></td>
                <td><em>lupus familiaris</em></td>
              </tr>
              <tr>
                <td>Arroz</td>
                <td><em>Oryza sativa</em></td>
                <td><em>Oryza</em></td>
                <td><em>sativa</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Observe que leão e onça-pintada pertencem ao mesmo gênero{" "}
          <em>Panthera</em>, indicando parentesco evolutivo mais próximo entre
          si do que com outros felinos de gêneros distintos. Quando o gênero
          já foi citado no texto, pode-se abreviá-lo pela inicial seguida de
          ponto: <em>P. leo</em>.
        </p>
      </section>

      {/* ==================== SEÇÃO 3 ==================== */}
      <section className="lesson-section">
        <span className="section-kicker">Hierarquia taxonômica</span>

        <h2>3. Categorias Taxonômicas</h2>

        <p>
          A classificação de Lineu organizou os seres vivos em categorias
          hierárquicas aninhadas: cada nível engloba todos os grupos do nível
          inferior. Com o avanço da Biologia Evolutiva, a hierarquia foi
          ampliada — hoje, a ordem das categorias principais, do mais abrangente
          ao mais restrito, é a seguinte:
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 660 340" width="660" height="340" aria-label="Funil das categorias taxonômicas do ser humano">
            {[
              { y: 20,  w: 600, label: "Domínio — Eukarya",        color: "#1d4ed8", textColor: "#fff" },
              { y: 65,  w: 520, label: "Reino — Animalia",          color: "#2563eb", textColor: "#fff" },
              { y: 110, w: 440, label: "Filo — Chordata",           color: "#3b82f6", textColor: "#fff" },
              { y: 155, w: 360, label: "Classe — Mammalia",         color: "#60a5fa", textColor: "#1e3a8a" },
              { y: 200, w: 280, label: "Ordem — Primates",          color: "#93c5fd", textColor: "#1e3a8a" },
              { y: 245, w: 200, label: "Família — Hominidae",       color: "#bfdbfe", textColor: "#1e3a8a" },
              { y: 290, w: 120, label: "Gênero — Homo",             color: "#dbeafe", textColor: "#1e3a8a" },
            ].map((row) => (
              <g key={row.label}>
                <rect
                  x={(660 - row.w) / 2}
                  y={row.y}
                  width={row.w}
                  height={38}
                  rx={6}
                  fill={row.color}
                  stroke="#1e40af"
                  strokeWidth={1}
                />
                <text
                  x={330}
                  y={row.y + 24}
                  textAnchor="middle"
                  fontSize={13}
                  fontWeight={700}
                  fill={row.textColor}
                >
                  {row.label}
                </text>
              </g>
            ))}
            <rect x={270} y={335} width={120} height={0} rx={0} fill="none" />
            <text x={330} y={338} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">
              Espécie — Homo sapiens (nível mais específico)
            </text>
          </svg>
          <figcaption>
            Funil das categorias taxonômicas do ser humano: do mais abrangente
            (Domínio) ao mais específico (Espécie). Cada nível interno está
            contido no externo.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Macete para memorizar a ordem</h3>
          <p>
            <strong>D</strong>eus <strong>R</strong>ecebe <strong>F</strong>iel{" "}
            <strong>C</strong>ulto <strong>O</strong>u <strong>F</strong>az{" "}
            <strong>G</strong>rande <strong>E</strong>spetáculo
            {" "}→{" "}
            <strong>D</strong>omínio, <strong>R</strong>eino, <strong>F</strong>ilo,{" "}
            <strong>C</strong>lasse, <strong>O</strong>rdem, <strong>F</strong>amília,{" "}
            <strong>G</strong>ênero, <strong>E</strong>spécie.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Ser humano</th>
                <th>Leão</th>
                <th>Rosa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Domínio</strong></td>
                <td>Eukarya</td>
                <td>Eukarya</td>
                <td>Eukarya</td>
              </tr>
              <tr>
                <td><strong>Reino</strong></td>
                <td>Animalia</td>
                <td>Animalia</td>
                <td>Plantae</td>
              </tr>
              <tr>
                <td><strong>Filo</strong></td>
                <td>Chordata</td>
                <td>Chordata</td>
                <td>Magnoliophyta</td>
              </tr>
              <tr>
                <td><strong>Classe</strong></td>
                <td>Mammalia</td>
                <td>Mammalia</td>
                <td>Magnoliopsida</td>
              </tr>
              <tr>
                <td><strong>Ordem</strong></td>
                <td>Primates</td>
                <td>Carnivora</td>
                <td>Rosales</td>
              </tr>
              <tr>
                <td><strong>Família</strong></td>
                <td>Hominidae</td>
                <td>Felidae</td>
                <td>Rosaceae</td>
              </tr>
              <tr>
                <td><strong>Gênero</strong></td>
                <td><em>Homo</em></td>
                <td><em>Panthera</em></td>
                <td><em>Rosa</em></td>
              </tr>
              <tr>
                <td><strong>Espécie</strong></td>
                <td><em>H. sapiens</em></td>
                <td><em>P. leo</em></td>
                <td><em>R. gallica</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ==================== SEÇÃO 4 ==================== */}
      <section className="lesson-section">
        <span className="section-kicker">O que é uma espécie?</span>

        <h2>4. Conceito Biológico de Espécie</h2>

        <p>
          A <strong>espécie</strong> é a categoria taxonômica fundamental e, ao
          mesmo tempo, a mais difícil de definir. O conceito mais amplamente
          ensinado no Ensino Médio e cobrado no ENEM é o{" "}
          <strong>conceito biológico de espécie</strong>, proposto por Ernst Mayr
          em 1942:
        </p>

        <div className="lesson-highlight">
          <h3>Conceito biológico de espécie (Mayr)</h3>
          <p>
            Uma espécie é um grupo de populações que se cruzam naturalmente
            entre si, produzindo <strong>descendentes férteis</strong>, e que
            estão <strong>reprodutivamente isoladas</strong> de outros grupos.
          </p>
        </div>

        <p>
          O exemplo clássico: cavalos (<em>Equus caballus</em>) e jumentos (
          <em>Equus asinus</em>) se cruzam e geram mulas, mas as mulas são, em
          geral, <strong>estéreis</strong> (isolamento pós-zigótico). Logo, são
          espécies distintas — compartilham o mesmo gênero (<em>Equus</em>),
          mas têm epítetos específicos diferentes e constituem pools gênicos
          separados.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Limitações do conceito</h3>
            <p>
              Não se aplica a organismos de reprodução assexuada (bactérias,
              fungos assexuados), a fósseis nem a populações alopátricas que
              jamais se encontram.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Conceito filogenético de espécie</h3>
            <p>
              Define espécie como o menor grupo de organismos que compartilham
              um ancestral comum exclusivo e possuem pelo menos uma
              sinapomorfia (característica derivada exclusiva).
            </p>
          </div>

          <div className="lesson-card">
            <span>🧬</span>
            <h3>Conceito morfoespécie</h3>
            <p>
              Agrupa indivíduos com morfologia semelhante — histórico,
              mas ainda usado em paleontologia e em organismos muito
              difíceis de cruzar em laboratório.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SEÇÃO 5 ==================== */}
      <section className="lesson-section">
        <span className="section-kicker">Os grandes grupos da vida</span>

        <h2>5. Os Três Domínios e os Reinos</h2>

        <p>
          A partir dos anos 1990, análises de sequências de rRNA 16S e 18S
          revolucionaram a classificação dos seres vivos. Carl Woese propôs que
          toda a vida se divide em <strong>três domínios</strong>: Bacteria,
          Archaea e Eukarya. Essa proposta substituiu o sistema anterior de cinco
          reinos de Robert Whittaker, que agrupava procariontes todos em{" "}
          <em>Monera</em>.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Domínio</th>
                <th>Tipo celular</th>
                <th>Características-chave</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Bacteria</strong></td>
                <td>Procarionte</td>
                <td>Parede de peptidoglicano; membrana com ester-lipídeos</td>
                <td>
                  <em>Escherichia coli</em>, cianobactérias,{" "}
                  <em>Streptococcus</em>
                </td>
              </tr>
              <tr>
                <td><strong>Archaea</strong></td>
                <td>Procarionte</td>
                <td>
                  Sem peptidoglicano; éter-lipídeos; genes com íntrons; muitos
                  extremófilos
                </td>
                <td>
                  Metanogênicas (<em>Methanobacterium</em>), halófilas,
                  termófilas
                </td>
              </tr>
              <tr>
                <td><strong>Eukarya</strong></td>
                <td>Eucarionte</td>
                <td>
                  Núcleo delimitado por membrana; organelas membranosas;
                  DNA associado a histonas
                </td>
                <td>
                  Protistas, fungos, plantas, animais
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Dentro de Eukarya, a maioria dos currículos ainda usa os{" "}
          <strong>cinco reinos</strong> de Whittaker — Monera (hoje subdividido
          em Bacteria e Archaea, portanto obsoleto como reino único), Protista,
          Fungi, Plantae e Animalia — ou o sistema de{" "}
          <strong>seis reinos</strong>, que separa Eubacteria de Archaebacteria.
          No ENEM, predomina a abordagem dos <strong>cinco reinos</strong> para
          fins didáticos.
        </p>

        <div className="lesson-highlight">
          <h3>Por que Archaea são diferentes de Bacteria?</h3>
          <p>
            Embora ambos sejam procariontes (sem núcleo verdadeiro), Archaea
            compartilham com Eukarya vários mecanismos moleculares, como a
            transcrição com RNA-polimerase multisubunidade similar e a presença
            de íntrons. Essa descoberta revelou que <em>Eukarya</em> e{" "}
            <em>Archaea</em> são <strong>grupos irmãos</strong> — mais
            próximos entre si do que qualquer um deles é de Bacteria.
          </p>
        </div>
      </section>

      {/* ==================== SEÇÃO 6 ==================== */}
      <section className="lesson-section">
        <span className="section-kicker">Cladística</span>

        <h2>6. Sistemática Filogenética e Cladística</h2>

        <p>
          A <strong>Sistemática Filogenética</strong> (ou Cladística), proposta
          pelo entomólogo alemão Willi Hennig em 1950, revolucionou a forma de
          classificar os seres vivos: em vez de semelhança global (morfologia),
          o critério passa a ser exclusivamente a{" "}
          <strong>descendência com modificação</strong> — ou seja, a
          ancestralidade comum. O objetivo é criar grupos que reflitam a
          história evolutiva real.
        </p>

        <p>
          A cladística se baseia em dois tipos de caracteres:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔵</span>
            <h3>Caracteres plesiomórficos (ancestrais)</h3>
            <p>
              Características herdadas de um ancestral distante e compartilhadas
              por muitos grupos — não ajudam a definir parentescos próximos.
              Exemplo: presença de coluna vertebral em Vertebrata.
            </p>
          </div>

          <div className="lesson-card">
            <span>🟠</span>
            <h3>Sinapomorfias (caracteres derivados compartilhados)</h3>
            <p>
              Novidades evolutivas surgidas em um ancestral comum e herdadas por
              todos os seus descendentes — são os caracteres que definem
              clados. Exemplo: pelos e glândulas mamárias em Mammalia.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔺</span>
            <h3>Autapomorfias</h3>
            <p>
              Caracteres derivados exclusivos de uma única linhagem — não
              definem clados, mas espécies ou grupos terminais. Exemplo:
              linguagem articulada complexa em <em>Homo sapiens</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚡</span>
            <h3>Homoplasias</h3>
            <p>
              Semelhanças que <em>não</em> refletem ancestralidade comum:
              convergência (asa de morcego e asa de inseto) e reversão.
              Precisam ser distinguidas de sinapomorfias.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Princípio da parcimônia</h3>
          <p>
            Quando há dúvida entre dois cladogramas possíveis, a cladística
            prefere o que requer o{" "}
            <strong>menor número de mudanças evolutivas</strong> — o mais
            parcimonioso. Isso não quer dizer que a evolução seja sempre
            simples, mas é um critério metodológico lógico.
          </p>
        </div>
      </section>

      {/* ==================== SEÇÃO 7 ==================== */}
      <section className="lesson-section">
        <span className="section-kicker">Leitura de cladogramas</span>

        <h2>7. Cladogramas: Estrutura e Interpretação</h2>

        <p>
          Um <strong>cladograma</strong> é um diagrama ramificado que representa
          uma <em>hipótese</em> de parentesco evolutivo. Cada ponto de ramificação
          (nó) representa um <strong>ancestral comum hipotético</strong>, e cada
          ramo terminal representa uma linhagem viva ou extinta. O cladograma
          não indica, por si só, o tempo evolutivo nem o grau de diferença
          morfológica — apenas a sequência de ramificações.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 300" width="680" height="300" aria-label="Cladograma com cinco táxons e sinapomorfias marcadas">
            {/* Tronco */}
            <line x1={60} y1={260} x2={60} y2={60} stroke="#374151" strokeWidth={2.5} />
            {/* Ramo A — Peixes */}
            <line x1={60} y1={260} x2={130} y2={260} stroke="#374151" strokeWidth={2.5} />
            <line x1={130} y1={260} x2={130} y2={245} stroke="#374151" strokeWidth={2.5} />
            {/* Bifurcação 1 (nó 1): peixes × tetrápodos */}
            <line x1={60} y1={180} x2={160} y2={180} stroke="#374151" strokeWidth={2.5} />
            {/* Ramo anfíbios */}
            <line x1={160} y1={180} x2={160} y2={60} stroke="#374151" strokeWidth={2.5} />
            <line x1={160} y1={110} x2={250} y2={110} stroke="#374151" strokeWidth={2.5} />
            {/* Nó 2: répteis + mamíferos */}
            <line x1={250} y1={110} x2={250} y2={60} stroke="#374151" strokeWidth={2.5} />
            <line x1={250} y1={60} x2={400} y2={60} stroke="#374151" strokeWidth={2.5} />
            {/* Ramo répteis */}
            <line x1={400} y1={60} x2={400} y2={45} stroke="#374151" strokeWidth={2.5} />
            {/* Ramo mamíferos */}
            <line x1={400} y1={60} x2={530} y2={60} stroke="#374151" strokeWidth={2.5} />
            <line x1={530} y1={60} x2={530} y2={45} stroke="#374151" strokeWidth={2.5} />

            {/* Rótulos táxons */}
            <text x={130} y={238} textAnchor="middle" fontSize={12} fontWeight={700} fill="#1e3a8a">Peixes</text>
            <text x={160} y={103} textAnchor="middle" fontSize={12} fontWeight={700} fill="#166534">Anfíbios</text>
            <text x={400} y={38} textAnchor="middle" fontSize={12} fontWeight={700} fill="#7c3aed">Répteis</text>
            <text x={530} y={38} textAnchor="middle" fontSize={12} fontWeight={700} fill="#9d174d">Mamíferos</text>

            {/* Nós (ancestrais comuns) */}
            <circle cx={60} cy={180} r={7} fill="#f59e0b" stroke="#92400e" strokeWidth={1.5} />
            <text x={20} y={184} textAnchor="middle" fontSize={10} fill="#92400e">Nó 1</text>

            <circle cx={250} cy={110} r={7} fill="#f59e0b" stroke="#92400e" strokeWidth={1.5} />
            <text x={210} y={114} textAnchor="middle" fontSize={10} fill="#92400e">Nó 2</text>

            <circle cx={400} cy={60} r={7} fill="#f59e0b" stroke="#92400e" strokeWidth={1.5} />
            <text x={400} y={82} textAnchor="middle" fontSize={10} fill="#92400e">Nó 3</text>

            {/* Sinapomorfias */}
            <rect x={68} y={170} width={110} height={20} rx={4} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1} />
            <text x={123} y={183} textAnchor="middle" fontSize={10} fill="#92400e">coluna vertebral</text>

            <rect x={168} y={100} width={80} height={20} rx={4} fill="#d1fae5" stroke="#059669" strokeWidth={1} />
            <text x={208} y={113} textAnchor="middle" fontSize={10} fill="#065f46">4 membros</text>

            <rect x={408} y={50} width={114} height={20} rx={4} fill="#ede9fe" stroke="#7c3aed" strokeWidth={1} />
            <text x={465} y={63} textAnchor="middle" fontSize={10} fill="#4c1d95">pelos + glândulas mamárias</text>

            {/* Legenda */}
            <rect x={20} y={275} width={14} height={14} rx={2} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1} />
            <text x={40} y={286} fontSize={10} fill="#374151">sinapomorfia (caráter derivado compartilhado)</text>
            <circle cx={27} cy={296} r={5} fill="#f59e0b" stroke="#92400e" strokeWidth={1} />
            <text x={40} y={299} fontSize={10} fill="#374151">nó = ancestral comum hipotético</text>
          </svg>
          <figcaption>
            Cladograma simplificado de vertebrados. Cada nó representa um ancestral
            comum; as caixas coloridas indicam sinapomorfias (novidades evolutivas)
            que definem cada clado. Peixes é grupo-externo (outgroup).
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Como ler um cladograma (passo a passo)</h3>
          <ol>
            <li>
              Identifique os <strong>táxons terminais</strong> (pontas dos
              ramos) — os grupos comparados.
            </li>
            <li>
              Localize os <strong>nós</strong> — cada nó é um ancestral comum
              de todos os ramos acima dele.
            </li>
            <li>
              Grupos que se ramificam de um mesmo nó são{" "}
              <strong>grupos irmãos</strong> — os mais próximos filogeneticamente.
            </li>
            <li>
              As <strong>sinapomorfias</strong> marcadas nos ramos indicam que
              caráter define cada clado.
            </li>
            <li>
              A posição no cladograma <em>não</em> indica superioridade
              evolutiva — nenhum grupo é "mais evoluído" que outro.
            </li>
          </ol>
        </div>
      </section>

      {/* ==================== SEÇÃO 8 ==================== */}
      <section className="lesson-section">
        <span className="section-kicker">Tipos de grupos</span>

        <h2>8. Grupos Monofiléticos, Parafiléticos e Polifiléticos</h2>

        <p>
          A validade de um grupo taxonômico na cladística depende de como ele
          foi formado. Existem três tipos possíveis, com consequências muito
          diferentes para a classificação:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✅</span>
            <h3>Monofilético (clado)</h3>
            <p>
              Inclui um ancestral comum <strong>e todos</strong> os seus
              descendentes. É o único tipo aceito pela cladística moderna. Exemplo:
              Mammalia (inclui todos os mamíferos desde o primeiro ancestral com
              pelos e glândulas mamárias).
            </p>
          </div>

          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Parafilético</h3>
            <p>
              Inclui um ancestral comum mas <strong>exclui alguns</strong>{" "}
              descendentes. Exemplo clássico: "Répteis" no sentido tradicional
              excluía as aves — mas aves descendem de dinossauros (répteis). Logo,
              Reptilia clássico é parafilético.
            </p>
          </div>

          <div className="lesson-card">
            <span>❌</span>
            <h3>Polifilético</h3>
            <p>
              Reúne organismos de{" "}
              <strong>diferentes ancestrais</strong>, agrupados por convergência
              evolutiva. Exemplo: "animais de sangue quente" agrupa aves e
              mamíferos, que desenvolveram homeotermia independentemente.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Implicação prática: o fim de "Peixes" como grupo válido</h3>
          <p>
            Na classificação tradicional, "Peixes" agrupava todos os vertebrados
            aquáticos com brânquias. Mas como os tetrápodos (anfíbios, répteis,
            aves e mamíferos) descendem de peixes ósseos lóbados, o grupo "Peixes"
            seria <strong>parafilético</strong> — e, portanto, biologicamente
            inválido para a cladística. Na sistemática filogenética, os grandes
            grupos de peixes são reconhecidos como linhagens distintas dentro de
            Vertebrata.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de grupo</th>
                <th>Inclui ancestral?</th>
                <th>Inclui todos os descendentes?</th>
                <th>Válido na cladística?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Monofilético</strong></td>
                <td>Sim</td>
                <td>Sim</td>
                <td>Sim</td>
              </tr>
              <tr>
                <td><strong>Parafilético</strong></td>
                <td>Sim</td>
                <td>Não (algum descendente excluído)</td>
                <td>Não (na cladística estrita)</td>
              </tr>
              <tr>
                <td><strong>Polifilético</strong></td>
                <td>Não (ancestral não compartilhado)</td>
                <td>Não aplicável</td>
                <td>Não</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ==================== EXERCÍCIOS ==================== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Nomenclatura binomial"
          statement={
            <p>
              Ao escrever o nome científico de uma espécie, um estudante
              produziu: <em>homo Sapiens</em>. Quantos erros de regras da
              nomenclatura binomial estão presentes nessa escrita?
            </p>
          }
          options={[
            { letter: "a", text: "Nenhum erro — a escrita está correta." },
            {
              letter: "b",
              text: "Dois erros: o gênero deveria começar com maiúscula (Homo) e o epíteto específico com minúscula (sapiens).",
              correct: true,
            },
            {
              letter: "c",
              text: "Um erro apenas: o nome deveria ter três termos, não dois.",
            },
            {
              letter: "d",
              text: "Um erro apenas: o nome não deveria ser escrito em itálico.",
            },
          ]}
          resolution={
            <p>
              Na nomenclatura binomial, o <strong>gênero</strong> é escrito com
              inicial <strong>maiúscula</strong> (<em>Homo</em>) e o{" "}
              <strong>epíteto específico</strong> com inicial{" "}
              <strong>minúscula</strong> (<em>sapiens</em>). A escrita{" "}
              <em>homo Sapiens</em> inverte as duas regras — são dois erros.
              Além disso, o nome deve estar em itálico, o que não constitui erro
              nesse exemplo (já está em itálico na questão). O correto é:{" "}
              <em>Homo sapiens</em>.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Os três domínios da vida"
          statement={
            <p>
              Com base no sistema dos três domínios proposto por Carl Woese,
              assinale a alternativa correta sobre as Archaea:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "São eucariontes com núcleo bem definido e organelas membranosas.",
            },
            {
              letter: "b",
              text: "Possuem parede celular de peptidoglicano, assim como as bactérias.",
            },
            {
              letter: "c",
              text: "São procariontes que compartilham mecanismos moleculares com Eukarya, como RNA-polimerases complexas e éter-lipídeos de membrana.",
              correct: true,
            },
            {
              letter: "d",
              text: "Pertencem ao domínio Bacteria por serem procariontes sem núcleo.",
            },
          ]}
          resolution={
            <p>
              Archaea são <strong>procariontes</strong> (sem núcleo delimitado
              por membrana), portanto as alternativas "a" e "d" estão erradas.
              Diferentemente das Bacteria, as Archaea{" "}
              <strong>não possuem peptidoglicano</strong> na parede celular —
              eliminando a alternativa "b". A característica central das Archaea
              é possuir éter-lipídeos de membrana e maquinaria de transcrição
              similar à de Eukarya, tornando a alternativa "c" correta e
              justificando por que Archaea e Eukarya são grupos irmãos.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Sinapomorfias e grupos monofiléticos"
          statement={
            <p>
              Um pesquisador constrói um cladograma e identifica que o grupo
              chamado "Reptilia" inclui tartarugas, lagartos, cobras e crocodilos,
              mas exclui as aves. Do ponto de vista da sistemática filogenética,
              esse grupo é classificado como:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Monofilético, pois inclui um ancestral comum e todos os seus descendentes.",
            },
            {
              letter: "b",
              text: "Parafilético, pois inclui um ancestral comum, mas exclui alguns descendentes (as aves, que descendem de dinossauros répteis).",
              correct: true,
            },
            {
              letter: "c",
              text: "Polifilético, pois reúne organismos sem ancestral comum exclusivo.",
            },
            {
              letter: "d",
              text: "Monofilético, pois crocodilos e aves compartilham sinapomorfias exclusivas.",
            },
          ]}
          resolution={
            <p>
              Evidências filogenéticas mostram que as <strong>aves</strong>{" "}
              descendem de terópodos (dinossauros), que são répteis. Se "Reptilia"
              exclui as aves, o grupo tem um ancestral comum mas não inclui{" "}
              <em>todos</em> os descendentes — caracterizando um grupo{" "}
              <strong>parafilético</strong>. Note que a alternativa "d" contém
              um dado verdadeiro (crocodilos e aves compartilham sinapomorfias
              — são grupos irmãos dentro de Archosauria), mas isso reforça
              exatamente o problema: excluir aves de Reptilia torna o grupo
              parafilético, não monofilético.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Biodiversidade e nomenclatura (ENEM-estilo)"
          statement={
            <p>
              Em uma expedição científica à Mata Atlântica, pesquisadores
              descrevem um novo sapo e propõem chamá-lo de{" "}
              <em>Brachycephalus pitanga</em>. Um jornalista, ao redigir uma
              reportagem, escreveu o nome assim: <strong>brachycephalus
              Pitanga</strong>. Além disso, o jornalista afirmou que esse
              sapo, por ter nome próximo ao de <em>Brachycephalus ephippium</em>,
              deve ser a mesma espécie. Avalie as afirmações do jornalista:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A escrita do nome está correta, e sapos do mesmo gênero são sempre da mesma espécie.",
            },
            {
              letter: "b",
              text: "A escrita do nome está errada (gênero deve ter inicial maiúscula e epíteto minúscula), e sapos do mesmo gênero não são necessariamente da mesma espécie.",
              correct: true,
            },
            {
              letter: "c",
              text: "A escrita do nome está correta, mas sapos do mesmo gênero são espécies diferentes.",
            },
            {
              letter: "d",
              text: "A escrita do nome está errada somente porque o nome não foi escrito em latim.",
            },
          ]}
          resolution={
            <p>
              Dois erros do jornalista: (1) a escrita{" "}
              <strong>brachycephalus Pitanga</strong> viola as regras — o
              gênero deve ter inicial maiúscula (<em>Brachycephalus</em>) e o
              epíteto específico inicial minúscula (<em>pitanga</em>); (2) o
              fato de pertencer ao mesmo gênero indica parentesco evolutivo
              próximo, mas espécies distintas do mesmo gênero são organismos
              diferentes — <em>B. pitanga</em> e <em>B. ephippium</em> são
              espécies distintas, com epítetos específicos diferentes. O gênero
              compartilhado apenas mostra que compartilham um ancestral comum
              mais recente do que com sapos de outros gêneros.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Conceito biológico de espécie e conservação"
          statement={
            <p>
              O lobo-guará (<em>Chrysocyon brachyurus</em>) e o lobo-cinzento
              norte-americano (<em>Canis lupus</em>) pertencem a gêneros
              diferentes. Estudos genômicos confirmaram que eles não se cruzam
              naturalmente nem produzem descendentes viáveis em cativeiro. Com
              base no conceito biológico de espécie e nas categorias
              taxonômicas, é correto afirmar:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "São a mesma espécie, pois ambos são chamados de 'lobo' em seus nomes populares.",
            },
            {
              letter: "b",
              text: "Pertencem à mesma espécie porque são morfologicamente parecidos.",
            },
            {
              letter: "c",
              text: "São espécies distintas porque possuem gêneros diferentes e estão reprodutivamente isolados — o isolamento reprodutivo é o critério central do conceito biológico de espécie.",
              correct: true,
            },
            {
              letter: "d",
              text: "A diferença de gênero basta para classificá-los em domínios diferentes.",
            },
          ]}
          resolution={
            <p>
              O <strong>conceito biológico de espécie</strong> (Mayr) define
              espécies como grupos cujos membros se cruzam naturalmente e geram
              descendentes férteis, estando isolados reprodutivamente de outros
              grupos. Lobo-guará e lobo-cinzento não se cruzam — logo, são
              espécies distintas, como confirmam também seus nomes científicos
              com gêneros diferentes (<em>Chrysocyon</em> vs.{" "}
              <em>Canis</em>). A alternativa "d" é absurda: diferenças de gênero
              (categoria taxonômica) não implicam diferença de domínio — ambos
              pertencem ao domínio Eukarya, reino Animalia.
            </p>
          }
        />
      </section>
    </article>
  );
}
