"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap35Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 35</span>
          <h1>Pré-Modernismo</h1>
          <p>
            Entre o fim do século XIX e o início do XX, enquanto o Parnasianismo reinava nos salões literários,
            um grupo de escritores inconformados voltou os olhos para o Brasil real: o sertão esquecido,
            as cidades excludentes, o camponês doente e abandonado. Euclides da Cunha, Lima Barreto,
            Monteiro Lobato e Augusto dos Anjos não formaram uma escola organizada nem assinaram manifestos
            coletivos — mas todos romperam com o academicismo e apontaram para as contradições profundas
            de uma República que mal havia nascido. Compreender o Pré-Modernismo é compreender o Brasil
            que o ENEM ainda cobra.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. O Brasil da República Velha e a Crise do Academicismo</h2>

        <p>
          O Pré-Modernismo se desenvolve entre aproximadamente <strong>1902</strong> (publicação de
          <em> Os Sertões</em>) e <strong>1922</strong> (Semana de Arte Moderna), período que coincide
          com a chamada <strong>República Velha</strong> (1889–1930). É uma época de profundas contradições:
          o Brasil exportava café e borracha para as potências industrializadas, mas a esmagadora maioria
          da população vivia na pobreza extrema, sem acesso à saúde, educação ou direitos básicos.
        </p>
        <p>
          No plano cultural, dominavam o <strong>Parnasianismo</strong> — poesia de perfeição formal,
          temas greco-romanos e total distância da realidade nacional — e o <strong>Simbolismo</strong>,
          voltado para o misticismo e a musicalidade. Enquanto Olavo Bilac polía seus sonetos sobre
          o mármore e o ouro, Canudos era destruída (1897), o coronelismo sufocava o Nordeste e
          Lima Barreto escrevia sobre a pobreza carioca sendo ignorado pelos intelectuais da capital.
        </p>

        <div className="lesson-highlight">
          <h3>O que é o Pré-Modernismo?</h3>
          <p>
            Não se trata de uma escola literária com programa definido, mas de um <strong>período de
            transição</strong> em que vários autores, independentemente uns dos outros, rompem com a
            estética dominante e voltam o olhar para a realidade social brasileira. O denominador
            comum é a <strong>denúncia</strong>: do abandono das populações sertanejas, do preconceito
            racial, do atraso rural, da hipocrisia das elites. O Pré-Modernismo prepara o terreno
            para a revolução modernista de 1922.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>República Velha</h3>
            <p>Governo das oligarquias cafeeiras, política do café-com-leite, coronelismo e exclusão das massas populares do processo político.</p>
          </div>
          <div className="lesson-card">
            <span>📜</span>
            <h3>Parnasianismo dominante</h3>
            <p>Arte voltada à perfeição formal e ao distanciamento da realidade; os pré-modernistas reagem contra essa "arte pela arte" sem compromisso social.</p>
          </div>
          <div className="lesson-card">
            <span>⚔️</span>
            <h3>Canudos (1897)</h3>
            <p>Conflito entre sertanejos liderados por Antônio Conselheiro e o exército republicano; símbolo do abismo entre o Brasil oficial e o Brasil real.</p>
          </div>
          <div className="lesson-card">
            <span>🌾</span>
            <h3>Questão agrária</h3>
            <p>Latifúndio concentrador, coronelismo e miséria rural geram êxodo e conflitos; Lobato e Euclides expõem esse quadro com documentos e ficção.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Características Gerais</span>
        <h2>2. O que Define o Pré-Modernismo: Ruptura com o Academicismo</h2>

        <p>
          Os pré-modernistas compartilham algumas tendências que os distinguem do Parnasianismo e
          antecipam o Modernismo. A primeira e mais importante é a <strong>ruptura com o academicismo</strong>:
          esses autores rejeitam a linguagem empolada, a obsessão pela perfeição formal e os temas
          importados da Antiguidade. Em vez de heróis gregos, escrevem sobre sertanejos; em vez de
          sonetos impecáveis, recorrem ao ensaio, ao romance social e à crônica.
        </p>
        <p>
          A segunda tendência é o <strong>regionalismo crítico</strong>: a literatura deixa de idealizar
          o interior (como fazia o Romantismo com Alencar) e passa a denunciar sua realidade. O sertão
          nordestino de Euclides não é o sertão idílico de Iracema — é um espaço de miséria, abandono
          e resistência. A terceira tendência é a <strong>crítica social urbana</strong>, especialmente
          em Lima Barreto: a cidade não é o progresso prometido, mas um espaço de exclusão racial e
          de classe.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Parnasianismo</th>
                <th>Pré-Modernismo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Temas</td>
                <td>Greco-romanos, mitológicos, formais</td>
                <td>Brasil real, sertão, pobreza, exclusão social</td>
              </tr>
              <tr>
                <td>Linguagem</td>
                <td>Culta, rebuscada, vocabulário raro</td>
                <td>Mais direta, jornalística, científica, coloquial</td>
              </tr>
              <tr>
                <td>Forma</td>
                <td>Soneto perfeito, métrica rígida</td>
                <td>Romance, ensaio, crônica, verso livre (Augusto)</td>
              </tr>
              <tr>
                <td>Postura</td>
                <td>Arte pela arte, distanciamento social</td>
                <td>Comprometimento com a realidade nacional</td>
              </tr>
              <tr>
                <td>Visão do Brasil</td>
                <td>Ignorado ou idealizado</td>
                <td>Denunciado e analisado criticamente</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 200"
            width="700"
            height="200"
            aria-label="Linha do tempo do Pré-Modernismo brasileiro entre 1902 e 1922"
          >
            <defs>
              <marker id="arrowPM" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1" />
              </marker>
            </defs>
            <rect x="0" y="0" width="700" height="200" rx="12" fill="#f8fafc" />
            <line x1="40" y1="100" x2="660" y2="100" stroke="#6366f1" strokeWidth="3" markerEnd="url(#arrowPM)" />

            <circle cx="80" cy="100" r="9" fill="#6366f1" />
            <text x="80" y="82" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">1897</text>
            <text x="80" y="120" textAnchor="middle" fontSize="10" fill="#475569">Guerra</text>
            <text x="80" y="133" textAnchor="middle" fontSize="10" fill="#475569">de Canudos</text>

            <circle cx="200" cy="100" r="9" fill="#7c3aed" />
            <text x="200" y="82" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">1902</text>
            <text x="200" y="120" textAnchor="middle" fontSize="10" fill="#475569">Os Sertões</text>
            <text x="200" y="133" textAnchor="middle" fontSize="10" fill="#475569">(Euclides)</text>

            <circle cx="340" cy="100" r="9" fill="#7c3aed" />
            <text x="340" y="82" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">1911</text>
            <text x="340" y="120" textAnchor="middle" fontSize="10" fill="#475569">Urupês</text>
            <text x="340" y="133" textAnchor="middle" fontSize="10" fill="#475569">(Lobato)</text>

            <circle cx="470" cy="100" r="9" fill="#7c3aed" />
            <text x="470" y="82" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">1915</text>
            <text x="470" y="120" textAnchor="middle" fontSize="10" fill="#475569">Policarpo</text>
            <text x="470" y="133" textAnchor="middle" fontSize="10" fill="#475569">Quaresma (Lima)</text>

            <circle cx="610" cy="100" r="9" fill="#ec4899" />
            <text x="610" y="82" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">1922</text>
            <text x="610" y="120" textAnchor="middle" fontSize="10" fill="#475569">Semana de</text>
            <text x="610" y="133" textAnchor="middle" fontSize="10" fill="#475569">Arte Moderna</text>

            <text x="350" y="175" textAnchor="middle" fontSize="12" fill="#6366f1" fontWeight="bold">Pré-Modernismo (1902–1922)</text>
          </svg>
          <figcaption>Linha do tempo dos principais marcos do Pré-Modernismo brasileiro.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Euclides da Cunha</span>
        <h2>3. Euclides da Cunha e <em>Os Sertões</em> (1902)</h2>

        <p>
          <strong>Euclides da Cunha</strong> (1866–1909) foi engenheiro militar, jornalista e escritor.
          Em 1897, foi enviado pelo jornal <em>O Estado de S. Paulo</em> para cobrir a campanha militar
          contra Canudos, comunidade liderada por Antônio Conselheiro no sertão baiano. O que ele viu
          transformou-o profundamente: não eram "fanáticos" a serem exterminados, mas seres humanos
          resistindo ao abandono histórico do Estado brasileiro. O resultado dessa experiência foi
          <strong> Os Sertões</strong> (1902), considerado um dos maiores livros da literatura
          brasileira.
        </p>
        <p>
          A obra está dividida em três partes: <strong>A Terra</strong> (análise geológica e geográfica
          do sertão), <strong>O Homem</strong> (estudo etnográfico e social do sertanejo) e
          <strong> A Luta</strong> (narrativa das quatro campanhas militares contra Canudos). A linguagem
          é densa, científica e literária ao mesmo tempo — Euclides mistura o positivismo cientificista
          do século XIX com um lirismo trágico que eleva o sertanejo à condição de herói.
        </p>

        <div className="math-block">
          <strong>Frase célebre de Os Sertões:</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "O sertanejo é, antes de tudo, um forte."
          </p>
          <p>
            Essa frase abre a seção <em>O Homem</em> e sintetiza a visão de Euclides: apesar de todas
            as adversidades, o sertanejo possui uma resistência física e moral extraordinária — o que
            torna sua destruição em Canudos ainda mais trágica e condenável.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Por que Os Sertões é pré-modernista?</h3>
          <ul>
            <li><strong>Ruptura:</strong> abandona os temas e a linguagem do Parnasianismo dominante.</li>
            <li><strong>Denúncia social:</strong> expõe o abandono e o extermínio das populações pobres do interior.</li>
            <li><strong>Regionalismo crítico:</strong> o sertão não é idealizadoé documentado e analisado.</li>
            <li><strong>Gênero híbrido:</strong> o livro mistura jornalismo, ensaio científico e literatura — antecipando o hibridismo modernista.</li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Lima Barreto</span>
        <h2>4. Lima Barreto e a Crítica Social Urbana</h2>

        <p>
          <strong>Afonso Henriques de Lima Barreto</strong> (1881–1922) viveu na pele a exclusão que
          descreveu na ficção. Filho de pai negro e mãe falecida quando ele tinha sete anos, cresceu
          num Rio de Janeiro que se pretendia moderno e cosmopolita mas mantinha o racismo estrutural
          como realidade cotidiana. Jornalista e funcionário público, Lima Barreto bebia, vivia na
          miséria e morreu aos 41 anos, nunca reconhecido em vida pela Academia Brasileira de Letras
          que tanto desprezou.
        </p>
        <p>
          Sua obra mais importante, <strong>Triste Fim de Policarpo Quaresma</strong> (1915), narra
          a trajetória de um burocrata idealista que acredita profundamente no Brasil — aprende tupi,
          propõe reformas agrícolas, tenta recuperar a cultura nacional — e é sistematicamente
          destruído pelas instituições que amava. A ironia de Lima Barreto é devastadora: Policarpo
          é fuzilado pela mesma República que jurava defender. O livro é uma crítica feroz ao
          nacionalismo superficial, ao militarismo e à incapacidade do Estado brasileiro de cuidar
          de seus cidadãos mais honestos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📚</span>
            <h3>Triste Fim de Policarpo Quaresma (1915)</h3>
            <p>Romance sobre o fracasso do idealismo patriótico num Brasil corrupto e burocrático; crítica ao militarismo e à República.</p>
          </div>
          <div className="lesson-card">
            <span>🏙️</span>
            <h3>Recordações do Escrivão Isaías Caminha (1909)</h3>
            <p>Romance autobiográfico que denuncia o racismo na imprensa carioca; o protagonista é um jovem negro que tenta ingressar no mundo jornalístico.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Clara dos Anjos (1923)</h3>
            <p>Publicado postumamente; narra o drama de uma jovem negra da subúrbio carioca vítima de sedução e abandono, denunciando racismo e classe social.</p>
          </div>
          <div className="lesson-card">
            <span>✍️</span>
            <h3>Linguagem direta</h3>
            <p>Lima Barreto recusava o estilo empolado dos parnasianos; escrevia com clareza jornalística, ironia fina e profunda humanidade pelos marginalizados.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Dica ENEM — Lima Barreto:</strong>
          <p>
            Quando o ENEM apresentar textos de Lima Barreto, busque sempre a <em>ironia social</em>:
            ele raramente ataca diretamente — prefere deixar que os próprios personagens e situações
            exponham a hipocrisia das instituições. A linguagem é simples, mas o conteúdo é denso.
            Atenção à voz narrativa que frequentemente é a do excluído olhando de dentro para as
            estruturas de poder.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Monteiro Lobato</span>
        <h2>5. Monteiro Lobato e o Jeca Tatu</h2>

        <p>
          <strong>José Bento Monteiro Lobato</strong> (1882–1948) é mais conhecido pelo grande público
          pela literatura infantil do Sítio do Picapau Amarelo, mas sua contribuição ao Pré-Modernismo
          vem de um texto polêmico e fundamental: o conto <strong>Velha Praga</strong> (1914), seguido
          pelo ensaio <strong>Urupês</strong> (1914), nos quais criou o personagem <strong>Jeca Tatu</strong>.
        </p>
        <p>
          Inicialmente, Lobato apresentou Jeca como símbolo do atraso brasileiro: um caboclo preguiçoso,
          doente, inerte, que deixava queimadas destruírem as fazendas e não tinha iniciativa. A crítica
          foi dura — alguns acusaram Lobato de preconceito de classe. Mas o autor revisou sua interpretação:
          em <strong>Jeca Tatu — A Ressurreição</strong> (1924), reescreveu a história mostrando que a
          inércia de Jeca era causada por doenças parasitárias (ancilostomíase, malária) resultantes
          do abandono estatal. O Jeca não era preguiçoso por natureza — era doente por falta de saúde
          pública. Essa revisão é um dos momentos mais importantes da crítica social pré-modernista.
        </p>

        <div className="lesson-highlight">
          <h3>A evolução do Jeca Tatu</h3>
          <ul>
            <li><strong>1914 — Urupês:</strong> Jeca como símbolo do atraso, descrito com olhar crítico e até depreciativo.</li>
            <li><strong>1924 — Jeca Tatu: A Ressurreição:</strong> releitura — a causa da inércia é a doença e o abandono, não a natureza do caboclo.</li>
            <li><strong>Legado:</strong> a revisão de Lobato antecipa a consciência sanitária e social que o Modernismo e os movimentos progressistas dos anos 1930 aprofundariam.</li>
          </ul>
        </div>

        <p>
          Além da questão do Jeca Tatu, Lobato foi pioneiro no mercado editorial brasileiro, fundando
          editoras e lutando pela industrialização do petróleo no Brasil nas décadas seguintes. Sua atuação
          pré-modernista, porém, está centrada no debate sobre quem é o povo brasileiro e o que o Estado
          lhe deve — questão central em toda a literatura do período.
        </p>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Augusto dos Anjos</span>
        <h2>6. Augusto dos Anjos e a Poesia do Pessimismo Científico</h2>

        <p>
          <strong>Augusto dos Anjos</strong> (1884–1914) é o poeta mais singular e perturbador do
          período. Paraibano, viveu em pobreza e morreu cedo, mas deixou uma obra que não se enquadra
          em nenhuma escola: é ao mesmo tempo simbolista (pela musicalidade, pela morte como tema),
          parnasiana (pela métrica rigorosa, pelo soneto) e pré-modernista (pelo pessimismo radical,
          pelo vocabulário científico).
        </p>
        <p>
          Sua única obra em vida, <strong>Eu</strong> (1912), é um mergulho no horror da morte, da
          decomposição e do niilismo. Augusto dos Anjos usava palavras do vocabulário científico —
          <em>micróbio</em>, <em>protoplasma</em>, <em>clorofila</em>, <em>verminose</em> — dentro
          de sonetos rigorosos, criando um efeito de estranhamento profundo. A poesia de Augusto é
          a negação do belo parnasiano: em vez do mármore e da rosa, a podridão e o verme.
        </p>

        <div className="math-block">
          <strong>Trecho emblemático de Augusto dos Anjos:</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Quando a Infelicidade me visita,<br/>
            Mandando-me a Lembrança e o Esquecimento,<br/>
            Sinto que sou apenas um instrumento<br/>
            Da Causa Incógnita que nos agita."
          </p>
          <p>
            A filosofia pessimista (influência de Schopenhauer), o vocabulário científico e a forma
            rigorosa do soneto convivem numa síntese explosiva que o torna único na literatura brasileira.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativo de Autores</span>
        <h2>7. Os Quatro Pré-Modernistas: Quadro Comparativo</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>Datas</th>
                <th>Obras principais</th>
                <th>Tema central</th>
                <th>Estilo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Euclides da Cunha</strong></td>
                <td>1866–1909</td>
                <td><em>Os Sertões</em> (1902)</td>
                <td>Sertão, Canudos, exclusão geográfica</td>
                <td>Híbrido: ensaio científico + literatura</td>
              </tr>
              <tr>
                <td><strong>Lima Barreto</strong></td>
                <td>1881–1922</td>
                <td><em>Policarpo Quaresma</em> (1915); <em>Isaías Caminha</em> (1909)</td>
                <td>Racismo, exclusão urbana, hipocrisia republicana</td>
                <td>Romance realista, irônico, jornalístico</td>
              </tr>
              <tr>
                <td><strong>Monteiro Lobato</strong></td>
                <td>1882–1948</td>
                <td><em>Urupês</em> (1918); <em>Jeca Tatu</em></td>
                <td>Atraso rural, abandono sanitário, caboclo</td>
                <td>Conto, ensaio, crítica cultural</td>
              </tr>
              <tr>
                <td><strong>Augusto dos Anjos</strong></td>
                <td>1884–1914</td>
                <td><em>Eu</em> (1912)</td>
                <td>Morte, decomposição, pessimismo científico</td>
                <td>Poesia: soneto + vocabulário científico</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 240"
            width="700"
            height="240"
            aria-label="Mapa conceitual dos quatro principais autores do Pré-Modernismo brasileiro"
          >
            <rect x="0" y="0" width="700" height="240" rx="12" fill="#fdf4ff" />
            <rect x="270" y="15" width="160" height="45" rx="8" fill="#6366f1" />
            <text x="350" y="36" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">PRÉ-MODERNISMO</text>
            <text x="350" y="52" textAnchor="middle" fontSize="11" fill="#e0e7ff">1902 – 1922</text>

            <line x1="350" y1="60" x2="120" y2="105" stroke="#6366f1" strokeWidth="2" />
            <line x1="350" y1="60" x2="280" y2="105" stroke="#6366f1" strokeWidth="2" />
            <line x1="350" y1="60" x2="420" y2="105" stroke="#6366f1" strokeWidth="2" />
            <line x1="350" y1="60" x2="575" y2="105" stroke="#6366f1" strokeWidth="2" />

            <rect x="30" y="105" width="175" height="65" rx="8" fill="#dbeafe" />
            <text x="117" y="125" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="bold">Euclides da Cunha</text>
            <text x="117" y="142" textAnchor="middle" fontSize="10" fill="#1e40af">Os Sertões (1902)</text>
            <text x="117" y="157" textAnchor="middle" fontSize="10" fill="#1e40af">Sertão / Canudos</text>

            <rect x="215" y="105" width="155" height="65" rx="8" fill="#d1fae5" />
            <text x="292" y="125" textAnchor="middle" fontSize="12" fill="#065f46" fontWeight="bold">Lima Barreto</text>
            <text x="292" y="142" textAnchor="middle" fontSize="10" fill="#065f46">Policarpo Quaresma</text>
            <text x="292" y="157" textAnchor="middle" fontSize="10" fill="#065f46">Crítica urbana / racismo</text>

            <rect x="380" y="105" width="155" height="65" rx="8" fill="#fef3c7" />
            <text x="457" y="125" textAnchor="middle" fontSize="12" fill="#92400e" fontWeight="bold">Monteiro Lobato</text>
            <text x="457" y="142" textAnchor="middle" fontSize="10" fill="#92400e">Urupês / Jeca Tatu</text>
            <text x="457" y="157" textAnchor="middle" fontSize="10" fill="#92400e">Atraso rural / saúde</text>

            <rect x="545" y="105" width="145" height="65" rx="8" fill="#fce7f3" />
            <text x="617" y="125" textAnchor="middle" fontSize="12" fill="#9d174d" fontWeight="bold">Augusto dos Anjos</text>
            <text x="617" y="142" textAnchor="middle" fontSize="10" fill="#9d174d">Eu (1912)</text>
            <text x="617" y="157" textAnchor="middle" fontSize="10" fill="#9d174d">Morte / pessimismo</text>

            <text x="350" y="215" textAnchor="middle" fontSize="11" fill="#6366f1" fontWeight="bold">Ruptura com academicismo — Denúncia social — Regionalismo crítico</text>
          </svg>
          <figcaption>Os quatro grandes nomes do Pré-Modernismo e seus temas centrais.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legado e Transição</span>
        <h2>8. Do Pré-Modernismo ao Modernismo: O que foi Herdado?</h2>

        <p>
          O Pré-Modernismo não criou um programa artístico que o Modernismo simplesmente adotou — a
          relação é mais complexa. Os modernistas de 1922 tinham muitas divergências entre si sobre como
          fazer a arte nova; mas todos reconheciam a importância do que Euclides, Lima e Lobato haviam
          feito: <strong>apontar para o Brasil real</strong> como objeto legítimo da literatura.
        </p>
        <p>
          O Modernismo aprofundaria a ruptura com o academicismo (levando-a até o humor e o escândalo
          da Semana de Arte Moderna), incorporaria o verso livre que os parnasianos repudiavam,
          e continuaria o debate sobre a identidade nacional — mas agora com o instrumental vanguardista
          europeu (Futurismo, Dadaísmo, Surrealismo) digerido e transformado em produto brasileiro.
          O pré-modernista que talvez mais influenciou diretamente o Modernismo foi Monteiro Lobato,
          cuja visão crítica do caboclo e da cultura nacional ressoa diretamente em Mário de Andrade e
          Oswald de Andrade.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento</th>
                <th>No Pré-Modernismo</th>
                <th>No Modernismo (1922+)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brasil real como tema</td>
                <td>Presente (sertão, pobreza, racismo)</td>
                <td>Aprofundado (Macunaíma, Vidas Secas)</td>
              </tr>
              <tr>
                <td>Linguagem coloquial</td>
                <td>Iniciante (Lima Barreto)</td>
                <td>Programa explícito (Andrades, Bandeira)</td>
              </tr>
              <tr>
                <td>Ruptura formal</td>
                <td>Parcial (híbrido, ensaístico)</td>
                <td>Radical (verso livre, prosa poética)</td>
              </tr>
              <tr>
                <td>Crítica ao academicismo</td>
                <td>Implícita, pela prática</td>
                <td>Declarada em manifestos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 8b ── */}
      <section className="lesson-section">
        <span className="section-kicker">Augusto dos Anjos — Aprofundamento</span>
        <h2>8b. Augusto dos Anjos — Obras, Influências e Significado</h2>

        <p>
          A unicidade de Augusto dos Anjos merece aprofundamento. Sua formação intelectual mistura
          três grandes correntes do pensamento do final do século XIX: o <strong>Positivismo</strong>
          de Auguste Comte (crença na ciência como guia da razão), o <strong>Evolucionismo</strong>
          de Darwin e Spencer (a vida como luta e transformação) e o <strong>pessimismo
          schopenhauriano</strong> (a existência como sofrimento, a vontade como ilusão). O
          resultado é uma visão de mundo em que a ciência não traz esperança — ao contrário,
          confirma o horror: somos matéria orgânica que se decompõe, combinações químicas
          efêmeras num universo indiferente.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Influência</th>
                <th>Conceito central</th>
                <th>Como aparece na poesia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Positivismo (Comte)</td>
                <td>A ciência como único conhecimento válido</td>
                <td>Vocabulário científico nos poemas</td>
              </tr>
              <tr>
                <td>Evolucionismo (Darwin/Spencer)</td>
                <td>Luta pela existência, seleção natural</td>
                <td>Imagens de parasitas, vermes, decomposição</td>
              </tr>
              <tr>
                <td>Pessimismo (Schopenhauer)</td>
                <td>A existência é sofrimento sem sentido</td>
                <td>Niilismo, morte como libertação, horror da vida</td>
              </tr>
              <tr>
                <td>Parnasianismo (forma)</td>
                <td>Soneto perfeito, métrica rigorosa</td>
                <td>Conteúdo horrível em forma impecável — o choque</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📚</span>
            <h3>Eu (1912)</h3>
            <p>Única obra publicada em vida; 58 poemas que incluem os mais conhecidos: <em>Psicologia de um Vencido</em>, <em>Monólogo de uma Sombra</em>, <em>Versos Íntimos</em>.</p>
          </div>
          <div className="lesson-card">
            <span>💀</span>
            <h3>Versos Íntimos</h3>
            <p>Poema em que o eu lírico pede ao amigo que chore sozinho — nem os mortos merecem compaixão, num universo de total indiferença existencial.</p>
          </div>
          <div className="lesson-card">
            <span>🦠</span>
            <h3>Vocabulário científico</h3>
            <p>Protoplasma, amoníaco, verminose, epigênese — o vocabulário da biologia e da química inserido no soneto como recurso de estranhamento radical.</p>
          </div>
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Pré-Modernismo pela ruptura</h3>
            <p>Augusto rompe com o Parnasianismo por dentro: mantém a forma mas destrói o conteúdo belo — é a antíntese da "arte pela arte" que se fingiu ser formal.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Por que estudar Augusto dos Anjos para o ENEM?</strong>
          <p>
            O ENEM pode apresentar poemas de Augusto dos Anjos e pedir que o candidato identifique
            o <em>efeito de estranhamento</em> produzido pelo choque entre a forma clássica (soneto)
            e o conteúdo perturbador (morte, decomposição, horror). O ponto-chave é sempre o
            paradoxo: a perfeição formal serve para conter — e assim intensificar — o conteúdo
            sombrio. Quanto mais preciso o soneto, mais perturbador o horror que ele encerra.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia ENEM</span>
        <h2>9. Como o ENEM Cobra o Pré-Modernismo</h2>

        <p>
          O ENEM raramente pede que o candidato defina o Pré-Modernismo abstratamente. O que o exame
          faz é apresentar <strong>fragmentos de texto</strong> (de Euclides da Cunha, Lima Barreto,
          Lobato ou Augusto dos Anjos) e perguntar sobre:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Crítica social</h3>
            <p>Identificar de que forma o texto denuncia exclusão, pobreza, racismo ou abandono do Estado. Quem é afetado? Qual a atitude do narrador?</p>
          </div>
          <div className="lesson-card">
            <span>🌍</span>
            <h3>Regionalismo</h3>
            <p>Reconhecer a visão não idealizada do interior brasileiro e do sertão como espaço de sofrimento e resistência — diferente do Romantismo.</p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Posição do narrador</h3>
            <p>Em Lima Barreto e Euclides, o narrador toma partido dos excluídos. Identificar esse posicionamento é chave para responder questões de ponto de vista.</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Transição histórica</h3>
            <p>Questões que pedem para o candidato situar o texto entre o Parnasianismo/Simbolismo e o Modernismo, identificando o que já rompeu e o que ainda não rompeu.</p>
          </div>
        </div>

        <div className="math-block">
          <strong>Armadilha frequente no ENEM:</strong>
          <p>
            Confundir o Realismo-Naturalismo do século XIX (Machado de Assis, Aluísio Azevedo) com
            o Pré-Modernismo. A diferença: o Realismo-Naturalismo ainda opera dentro do academicismo
            europeu; o Pré-Modernismo já volta o olhar especificamente para o <em>Brasil real</em> com
            urgência documental e denúncia social.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 10 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificação do Pré-Modernismo"
          statement={
            <p>
              O Pré-Modernismo brasileiro é definido como um período de transição entre o final do
              século XIX e o início do XX. Qual das alternativas melhor descreve sua principal
              característica?
            </p>
          }
          options={[
            { letter: "a", text: "Defesa da perfeição formal e dos temas greco-romanos, em continuidade com o Parnasianismo." },
            { letter: "b", text: "Ruptura com o academicismo dominante e comprometimento com a denúncia da realidade social brasileira.", correct: true },
            { letter: "c", text: "Valorização do misticismo, do simbolismo e da música como formas de expressão privilegiadas." },
            { letter: "d", text: "Adoção das vanguardas europeias como Dadaísmo e Surrealismo para renovar a arte nacional." },
          ]}
          resolution={
            <p>
              O Pré-Modernismo não é uma escola organizada com programa definido, mas um período de
              transição em que vários autores rompem com o academicismo parnasiano (que dominava a
              cena literária) e voltam o olhar para o Brasil real: sertão, pobreza, exclusão racial,
              abandono rural. A alternativa B captura exatamente esse duplo movimento — ruptura +
              compromisso social. As demais descrevem o Parnasianismo (A), o Simbolismo (C) ou o
              Modernismo de 1922 (D).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Os Sertões e a Denúncia Social"
          statement={
            <p>
              Leia o fragmento de <em>Os Sertões</em> (1902), de Euclides da Cunha:
              <br /><br />
              <em>"Aquela campanha lembra um refluxo para o passado. E foi, no íntimo, uma guerra
              de religião. A República não devia repisar os erros da monarquia..."</em>
              <br /><br />
              Com base nesse fragmento e no contexto da obra, qual é a posição crítica de Euclides
              da Cunha em relação à campanha de Canudos?
            </p>
          }
          options={[
            { letter: "a", text: "Elogio ao governo republicano por ter modernizado o Brasil ao eliminar o movimento fanático de Canudos." },
            { letter: "b", text: "Defesa da neutralidade jornalística; Euclides apenas narra os fatos sem emitir julgamento." },
            { letter: "c", text: "Denúncia de que a guerra contra Canudos foi um erro histórico e uma violência do Estado contra uma população pobre e abandonada.", correct: true },
            { letter: "d", text: "Apoio ao movimento de Antônio Conselheiro como alternativa política legítima à República corrupta." },
          ]}
          resolution={
            <p>
              O fragmento revela que Euclides da Cunha enxerga a campanha de Canudos como um retrocesso
              civilizacional — "um refluxo para o passado" — e critica a República por repetir os erros
              autoritários da Monarquia. Ao longo de <em>Os Sertões</em>, Euclides denuncia que os
              sertanejos não eram fanáticos perigosos, mas uma população pobre, abandonada e que lutava
              por sua sobrevivência. A obra é, portanto, um libelo contra o extermínio cometido pelo
              Estado brasileiro — posição explicitamente crítica ao poder, como indica a alternativa C.
              Euclides não é neutro (B), não elogia o governo (A) e tampouco defende o movimento de
              Conselheiro como alternativa política (D).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Jeca Tatu e a Revisão de Lobato"
          statement={
            <p>
              Em 1914, Monteiro Lobato criou o personagem Jeca Tatu como símbolo do atraso do
              caboclo brasileiro. Em 1924, reescreveu a história, mostrando que a inércia de Jeca
              era causada por doenças parasitárias decorrentes do abandono do Estado. Essa revisão
              representa, do ponto de vista da crítica literária e social:
            </p>
          }
          options={[
            { letter: "a", text: "Uma contradição no pensamento de Lobato, que simplesmente mudou de opinião por pressão da opinião pública, sem consistência intelectual." },
            { letter: "b", text: "A substituição de uma visão biologicista e preconceituosa (o atraso como traço do caráter nacional) por uma análise social e sanitária (o atraso como consequência do abandono estatal).", correct: true },
            { letter: "c", text: "Uma mudança irrelevante, pois a visão de Lobato sobre o caboclo permanece essencialmente a mesma nas duas versões." },
            { letter: "d", text: "O reconhecimento de que a solução para o atraso brasileiro era a educação religiosa e não a saúde pública." },
          ]}
          resolution={
            <p>
              A revisão do Jeca Tatu é um dos momentos mais intelectualmente importantes do Pré-Modernismo.
              Em 1914, Lobato interpretou a inércia do caboclo como traço de caráter — visão que, embora
              crítica ao atraso, carregava um certo biologicismo e preconceito de classe. Em 1924, ao
              mostrar que Jeca era doente de ancilostomíase por falta de saúde pública, Lobato desloca
              a causa do individual para o estrutural: não é culpa do caboclo, é culpa do Estado que o
              abandona. Essa mudança representa uma sofisticação da crítica social — da culpabilização
              da vítima para a denúncia da estrutura. A alternativa B captura essa transição com precisão.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Lima Barreto e o Racismo Estrutural"
          statement={
            <p>
              Leia o fragmento de <em>Recordações do Escrivão Isaías Caminha</em> (1909), de Lima Barreto:
              <br /><br />
              <em>"Tinha chegado a hora de me mostrar tal qual era. Não era eu um negro qualquer,
              ignorante e bêbado: era um homem de letras, com aspirações legítimas... E no entanto,
              os olhos que me olhavam pareciam dizer: 'Mas quem é você para pretender tanto?'"</em>
              <br /><br />
              O conflito vivido pelo protagonista nesse trecho revela principalmente:
            </p>
          }
          options={[
            { letter: "a", text: "O orgulho excessivo de Isaías Caminha, que superestimava suas próprias capacidades intelectuais." },
            { letter: "b", text: "A incompatibilidade entre a educação formal e o sucesso profissional no Brasil do início do século XX." },
            { letter: "c", text: "O racismo estrutural que impede que um homem negro seja reconhecido por seu mérito intelectual, sendo reduzido a estereótipos independentemente de sua formação.", correct: true },
            { letter: "d", text: "A crítica de Lima Barreto à própria elite intelectual negra, que ele considerava arrogante e distanciada do povo." },
          ]}
          resolution={
            <p>
              O fragmento é um exemplo cristalino do que Lima Barreto denunciava ao longo de toda sua
              obra: o racismo estrutural que opera independentemente do mérito individual. Isaías é
              letrado, tem aspirações legítimas, mas os "olhos que o olhavam" — representação do olhar
              social da época — o reduzem imediatamente a um estereótipo racial negativo ("negro
              ignorante e bêbado"). A tensão entre o que Isaías é (homem de letras) e o que a sociedade
              o permite ser (invisível ou estereotipado) é o núcleo da crítica social de Lima Barreto,
              que antecipa debates contemporâneos sobre representatividade e racismo estrutural.
              A alternativa C capta esse mecanismo com precisão.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Augusto dos Anjos — Estilo e Ruptura"
          statement={
            <p>
              Leia o início do poema <em>Psicologia de um Vencido</em>, de Augusto dos Anjos:
              <br /><br />
              <em>"Eu, filho do carbono e do amoníaco,<br/>
              Monstro de escuridão e rutilância,<br/>
              Sofro, desde a epigênese da infância,<br/>
              A influência má dos signos do zodíaco."</em>
              <br /><br />
              O uso de palavras do vocabulário científico (carbono, amoníaco, epigênese) dentro de
              um soneto de temática existencial produz o seguinte efeito:
            </p>
          }
          options={[
            { letter: "a", text: "Demonstra a adesão de Augusto dos Anjos ao Parnasianismo, que valorizava o vocabulário técnico como marca de erudição." },
            { letter: "b", text: "Cria um efeito de estranhamento e ironia existencial: o eu lírico se descreve como um ser biológico e cósmico ao mesmo tempo, negando qualquer idealização romântica de si mesmo.", correct: true },
            { letter: "c", text: "Aproxima a poesia do discurso científico positivista, tornando o poema um texto informativo sobre a composição química dos seres vivos." },
            { letter: "d", text: "Representa a influência do Naturalismo literário, que buscava aplicar as ciências ao estudo das personagens." },
          ]}
          resolution={
            <p>
              O choque entre vocabulário científico e forma poética clássica (soneto com métrica rigorosa)
              é a marca mais característica de Augusto dos Anjos. Ao descrever-se como "filho do carbono
              e do amoníaco", o eu lírico recusa qualquer idealização — não é um ser divino nem romântico,
              mas uma combinação de elementos químicos e influências cósmicas. Esse estranhamento é
              deliberado: a ciência, em vez de exaltar o ser humano, aqui o rebaixa, revelando o
              pessimismo radical de Augusto. Não é Parnasianismo (A) nem texto informativo (C) nem
              Naturalismo literário (D): é poesia existencial que usa a ciência para negar a dignidade
              tradicional do sujeito poético — um gesto profundamente pré-modernista de ruptura.
            </p>
          }
        />
      </section>
    </article>
  );
}
