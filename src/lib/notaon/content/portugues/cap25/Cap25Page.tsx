"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap25Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 25</span>
          <h1>Trovadorismo</h1>
          <p>
            O Trovadorismo é o período inaugural da literatura em língua
            portuguesa, florescendo entre os séculos XII e XIV na Península
            Ibérica. Nascido sob o signo do feudalismo, da cavalaria e do poder
            da Igreja Católica, esse movimento legou-nos um rico acervo de
            cantigas que revelam a alma medieval: o amor idealizado, a sátira
            mordaz e a voz feminina da terra. Conhecer o Trovadorismo é
            compreender as raízes mais profundas da língua e da literatura que
            nos formaram.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 1 — Contexto Histórico */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">01 — Contexto Histórico</span>
        <h2>Plena Idade Média: feudalismo, Igreja e cavalaria</h2>
        <p>
          O Trovadorismo surge no coração da <strong>Plena Idade Média</strong>{" "}
          (séculos XII a XIV), período marcado por três pilares que determinaram
          toda a produção cultural da época: o sistema feudal, a hegemonia da
          Igreja Católica e o código da cavalaria. Compreender essas estruturas
          é essencial para interpretar os temas, o vocabulário e a mentalidade
          presentes nas cantigas medievais.
        </p>
        <p>
          O <strong>feudalismo</strong> organizava a sociedade em relações de
          vassalagem: o servo devia lealdade, obediência e serviços ao seu
          senhor em troca de proteção e terra. Essa estrutura transpôs-se
          diretamente para a poesia amorosa — o trovador assume a posição de
          vassalo diante da dama, que ocupa o lugar do senhor feudal. A relação
          de amor é, assim, uma metáfora política e social da época.
        </p>
        <p>
          A <strong>Igreja Católica</strong> detinha não apenas o poder
          espiritual, mas também o intelectual e o econômico. O latim era a
          língua culta dos eclesiásticos, enquanto as línguas vernáculas
          emergiam como instrumento de expressão popular. As cantigas medievais
          são, nesse sentido, um ato de afirmação das línguas locais frente ao
          domínio do latim clerical.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚔️</span>
            <h3>Cavalaria</h3>
            <p>
              O código cavalheiresco impunha ao guerreiro cristão virtudes como
              coragem, lealdade, honra e devoção à dama. Essas virtudes
              migram para a poesia na figura do trovador-cavaleiro que serve
              sua amada com devoção incondicional.
            </p>
          </div>
          <div className="lesson-card">
            <span>🏰</span>
            <h3>Feudalismo</h3>
            <p>
              As relações de vassalagem — proteção em troca de serviço e
              lealdade — são espelhadas na poesia amorosa. O trovador se
              declara vassalo da dama, usando termos como "minha senhora"
              (senhor), reconhecendo a superioridade dela.
            </p>
          </div>
          <div className="lesson-card">
            <span>✝️</span>
            <h3>Igreja e Moralidade</h3>
            <p>
              A moral cristã permeia as cantigas: o amor deve ser puro e
              idealizado. A mulher é colocada em um pedestal quase sagrado,
              fora do alcance carnal, o que explica a "coita de amor" — o
              sofrimento do amador não correspondido.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌹</span>
            <h3>Amor Cortês</h3>
            <p>
              Conceito central do Trovadorismo: o amor como serviço nobilitante.
              Amar a dama perfeita torna o cavaleiro mais virtuoso. O amor
              não correspondido é aceito e até celebrado como prova de
              nobreza de caráter.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 2 — Origem e Expansão */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">02 — Origem e Expansão</span>
        <h2>Da Provença à Península Ibérica: a língua galego-portuguesa</h2>
        <p>
          O movimento trovadoresco nasceu na <strong>Provença</strong>, região
          do sul da França, no final do século XI. Os trovadores provençais —
          chamados <em>troubadours</em> — criaram um refinado sistema poético
          em língua occitana (ou língua d'oc) que celebrava o{" "}
          <em>fin'amor</em>, o amor refinado e cortês. Esse modelo cultural
          espalhou-se pela Europa feudal com velocidade notável, chegando à
          Península Ibérica pelas rotas de peregrinação (especialmente o
          Caminho de Santiago) e pelos contactos entre nobrezas.
        </p>
        <p>
          Na Península Ibérica, o movimento adaptou-se ao contexto local e
          encontrou sua língua de expressão: o <strong>galego-português</strong>,
          idioma falado nos reinos de Galiza e Portugal durante a Idade Média.
          Essa língua foi o veículo literário por excelência do século XII ao
          XIV, sendo usada inclusive por trovadores castelhanos que preferiam
          o galego-português para a poesia lírica — tamanho era o prestígio
          dessa tradição.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 220"
            width="700"
            height="220"
            aria-label="Mapa da rota do Trovadorismo da Provença à Península Ibérica"
          >
            <rect width="700" height="220" fill="#fdf8f0" rx="12" />
            {/* Provença */}
            <ellipse cx="440" cy="80" rx="70" ry="35" fill="#c8a96e" opacity="0.8" />
            <text x="440" y="75" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#5a3a00">Provença</text>
            <text x="440" y="92" textAnchor="middle" fontSize="11" fill="#5a3a00">(sul da França)</text>
            {/* Seta */}
            <path d="M375,95 Q320,120 260,120" stroke="#8b5e2a" strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#8b5e2a" />
              </marker>
            </defs>
            {/* Galiza/Portugal */}
            <ellipse cx="180" cy="120" rx="75" ry="35" fill="#7ab87a" opacity="0.8" />
            <text x="180" y="115" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a4a1a">Galiza-Portugal</text>
            <text x="180" y="132" textAnchor="middle" fontSize="11" fill="#1a4a1a">séc. XII–XIV</text>
            {/* Caminho de Santiago */}
            <text x="310" y="108" textAnchor="middle" fontSize="10" fill="#7a5200" fontStyle="italic">Caminho de Santiago</text>
            {/* Língua galego-portuguesa */}
            <rect x="80" y="170" width="180" height="34" rx="8" fill="#d4edda" stroke="#7ab87a" strokeWidth="1.5" />
            <text x="170" y="183" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1a4a1a">Língua Galego-Portuguesa</text>
            <text x="170" y="197" textAnchor="middle" fontSize="10" fill="#1a4a1a">veículo literário nobre</text>
            {/* Datas */}
            <text x="440" y="145" textAnchor="middle" fontSize="10" fill="#7a5200">séc. XI — origem</text>
            <text x="560" y="80" textAnchor="start" fontSize="10" fill="#5a3a00">troubadours</text>
            <text x="560" y="93" textAnchor="start" fontSize="10" fill="#5a3a00">fin'amor</text>
          </svg>
          <figcaption>Expansão do Trovadorismo da Provença para a Península Ibérica via Caminho de Santiago.</figcaption>
        </figure>

        <p>
          O primeiro documento literário em língua portuguesa é a{" "}
          <strong>Cantiga da Ribeirinha</strong> (c. 1189–1198), de{" "}
          <em>Paio Soares de Taveirós</em>, dedicada a Maria Paes Ribeira,
          amante do rei D. Sancho I. Esse texto marca o início oficial da
          literatura portuguesa, embora alguns estudiosos apontem a{" "}
          <em>Cantiga de Guarvaia</em> como candidata alternativa. A
          periodização convencionada fixa o Trovadorismo entre{" "}
          <strong>1189 e 1418</strong> (data da chegada de Fernão Lopes à
          chancelaria régia, marco da prosa historiográfica).
        </p>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 3 — Cantigas de Amor */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">03 — Lírica Amorosa I</span>
        <h2>Cantigas de Amor: vassalagem, coita e o eu lírico masculino</h2>
        <p>
          As <strong>Cantigas de Amor</strong> constituem o tipo mais
          diretamente influenciado pela poesia provençal. Nelas, o{" "}
          <strong>eu lírico é masculino</strong> — o trovador — e se dirige a
          uma dama (<em>senhor</em>) que ocupa posição de superioridade
          absoluta. A relação amorosa reproduz a estrutura do feudalismo: o
          trovador é o vassalo fiel, e a dama é a senhora a quem ele deve
          lealdade, serviço e devoção incondicional.
        </p>
        <p>
          O vocabulário das Cantigas de Amor é <strong>nobre e elevado</strong>,
          com termos do universo feudal adaptados ao amor: "servir", "merecer",
          "senhor", "mercê" (graça/favor), "coita" (sofrimento amoroso). A
          dama é perfeita, inatingível e — frequentemente — não corresponde ao
          amor do trovador. Esse não-correspondimento não é lamentado como
          tragédia, mas aceito e até glorificado: sofrer por uma dama nobre é
          prova de que o trovador é ele próprio um ser nobre.
        </p>
        <div className="lesson-highlight">
          <strong>Conceito-chave: Coita de Amor.</strong> A{" "}
          <em>coita</em> é o sofrimento amoroso típico das Cantigas de Amor.
          O trovador padece de saudade, de desejo não correspondido, de
          distância da amada — e esse sofrimento é valorizado como experiência
          nobilitante. A "culpa" pelo sofrimento recai sobre a dama, que não
          cede ao amor do trovador.
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Elemento</th>
                <th>Cantiga de Amor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Eu lírico</td>
                <td>Masculino (trovador/cavaleiro)</td>
              </tr>
              <tr>
                <td>Destinatária</td>
                <td><em>Senhor</em> — dama nobre e idealizada</td>
              </tr>
              <tr>
                <td>Tema central</td>
                <td>Amor não correspondido / coita de amor</td>
              </tr>
              <tr>
                <td>Tom</td>
                <td>Solene, elevado, melancólico</td>
              </tr>
              <tr>
                <td>Influência</td>
                <td>Poesia provençal (<em>fin'amor</em>)</td>
              </tr>
              <tr>
                <td>Vocabulário</td>
                <td>Nobre, feudal: mercê, servir, senhor, coita</td>
              </tr>
              <tr>
                <td>Relação trovador/dama</td>
                <td>Vassalo / Suserana (metáfora feudal)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Exemplo de Cantiga de Amor — Dom Dinis:</strong>
          <br />
          <em>
            "Quer'eu em maneira de proençal / fazer agora um cantar d'amor, /
            e querrei muit'i loar mia senhor / a que prez nem fremosura non fal."
          </em>
          <br />
          <br />
          Neste excerto, Dom Dinis declara abertamente que escreve "à maneira
          provençal" e louva sua <em>senhor</em> (dama), cujo valor e
          formosura são inigualáveis — elementos típicos das Cantigas de Amor.
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 4 — Cantigas de Amigo */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">04 — Lírica Amorosa II</span>
        <h2>Cantigas de Amigo: voz feminina, natureza e tradição popular</h2>
        <p>
          As <strong>Cantigas de Amigo</strong> são consideradas a expressão
          mais original e genuína do Trovadorismo ibérico, pois não derivam
          diretamente do modelo provençal — têm raízes na tradição popular
          peninsular. Nelas, o <strong>eu lírico é feminino</strong>: uma jovem
          que fala sobre seu <em>amigo</em> (namorado, amante), expressando
          saudade, ciúme, alegria ou lamento pela ausência dele.
        </p>
        <p>
          O termo "amigo" nas cantigas não significa "amizade platônica", mas
          o rapaz que a jovem ama — o parceiro amoroso. A linguagem é{" "}
          <strong>simples, direta e emotiva</strong>, muito diferente do tom
          solene das Cantigas de Amor. A natureza — o mar, o rio, os pinheiros,
          as fontes — é personificada como confidente da jovem, que lhe revela
          seu amor, sua saudade ou sua alegria.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Barcarola</h3>
            <p>
              Cantiga de Amigo ambientada à beira-mar. A jovem dialoga com
              as ondas do mar, que funcionam como mensageiras ou confidentas.
              Martim Codax é o maior representante: "Ondas do mar de Vigo /
              se vistes meu amigo?"
            </p>
          </div>
          <div className="lesson-card">
            <span>⛪</span>
            <h3>Cantiga de Romaria</h3>
            <p>
              A jovem vai em peregrinação a um santuário religioso esperando
              encontrar o amado. A romaria é pretexto para o encontro
              amoroso, misturando devoção religiosa e sentimento amoroso.
            </p>
          </div>
          <div className="lesson-card">
            <span>💃</span>
            <h3>Bailada</h3>
            <p>
              Cantiga de Amigo ligada à dança — a jovem dança e canta sua
              alegria ou saudade. Tem caráter festivo e popular, associada
              às celebrações comunitárias medievais.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌲</span>
            <h3>Natureza confidente</h3>
            <p>
              Rios, mares, pinheiros, fontes são interpelados pela jovem como
              se fossem seres capazes de ouvir e guardar seus segredos
              amorosos — recurso lírico chamado de "invocação à natureza".
            </p>
          </div>
        </div>
        <div className="math-block">
          <strong>Exemplo — Martim Codax (Cantiga de Amigo / Barcarola):</strong>
          <br />
          <em>
            "Ondas do mar de Vigo, / se vistes meu amigo? / E, ai Deus!, se
            verrá cedo? // Ondas do mar levado, / se vistes meu amado? / E, ai
            Deus!, se verrá cedo?"
          </em>
          <br />
          <br />
          Observe: o eu lírico é <strong>feminino</strong>; a natureza (ondas
          do mar) é interpelada como confidente; há{" "}
          <strong>paralelismo perfeito</strong> entre as duas estrofes (apenas
          "amigo"/"amado" e "Vigo"/"levado" variam); o refrão "E, ai Deus!, se
          verrá cedo?" expressa a saudade e a espera.
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 5 — Recursos Formais das Cantigas de Amigo */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">05 — Técnica Poética I</span>
        <h2>Paralelismo perfeito, leixa-pren e refrão</h2>
        <p>
          As Cantigas de Amigo possuem recursos formais próprios que as
          distinguem das demais cantigas medievais. O mais importante desses
          recursos é o <strong>paralelismo perfeito</strong>, que confere
          musicalidade, ritmo hipnótico e força emotiva ao poema.
        </p>
        <p>
          No <strong>paralelismo perfeito</strong>, o poema se organiza em
          pares de estrofes quase idênticas, onde uma palavra ou expressão
          varia de uma estrofe para outra (sinônimos ou palavras semanticamente
          próximas), enquanto todo o restante se mantém. Esse esquema cria um
          efeito de eco ou ondulação, como se a dor amorosa se repetisse e
          aprofundasse a cada verso.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Recurso Formal</th>
                <th>Definição</th>
                <th>Efeito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Paralelismo perfeito</strong></td>
                <td>Pares de estrofes quase idênticas com apenas uma palavra variando</td>
                <td>Musicalidade, intensificação emocional, ritmo de ondas</td>
              </tr>
              <tr>
                <td><strong>Refrão</strong></td>
                <td>Verso(s) repetido(s) ao final de cada estrofe</td>
                <td>Fixação do tema central, musicalidade, memória oral</td>
              </tr>
              <tr>
                <td><strong>Leixa-pren</strong></td>
                <td>O último verso de uma estrofe torna-se o primeiro da estrofe seguinte</td>
                <td>Fluxo contínuo, encadeamento narrativo, progressão dramática</td>
              </tr>
              <tr>
                <td><strong>Dobre</strong></td>
                <td>Repetição da mesma palavra em posições simétricas dentro da cobra</td>
                <td>Ênfase, concentração sonora, destaque semântico</td>
              </tr>
              <tr>
                <td><strong>Mordobre</strong></td>
                <td>Repetição de palavra com variação morfológica (flexão)</td>
                <td>Variação com coesão, jogo sonoro refinado</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 680 260"
            width="680"
            height="260"
            aria-label="Diagrama do paralelismo perfeito e leixa-pren nas Cantigas de Amigo"
          >
            <rect width="680" height="260" fill="#f0f7f0" rx="12" />
            <text x="340" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a4a1a">Paralelismo Perfeito + Leixa-Pren</text>

            {/* Estrofe A */}
            <rect x="30" y="45" width="290" height="90" rx="8" fill="#c8e6c9" stroke="#7ab87a" strokeWidth="1.5" />
            <text x="175" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a4a1a">Estrofe 1 (cobra A)</text>
            <text x="175" y="83" textAnchor="middle" fontSize="11" fill="#2d6a2d">Ondas do mar de <tspan fontWeight="bold">Vigo</tspan>,</text>
            <text x="175" y="99" textAnchor="middle" fontSize="11" fill="#2d6a2d">se vistes meu <tspan fontWeight="bold">amigo</tspan>?</text>
            <text x="175" y="115" textAnchor="middle" fontSize="11" fill="#555">↳ refrão: "E, ai Deus!, se verrá cedo?"</text>

            {/* Estrofe B */}
            <rect x="360" y="45" width="290" height="90" rx="8" fill="#dcedc8" stroke="#aed581" strokeWidth="1.5" />
            <text x="505" y="65" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a4a1a">Estrofe 2 (cobra B)</text>
            <text x="505" y="83" textAnchor="middle" fontSize="11" fill="#2d6a2d">Ondas do mar <tspan fontWeight="bold">levado</tspan>,</text>
            <text x="505" y="99" textAnchor="middle" fontSize="11" fill="#2d6a2d">se vistes meu <tspan fontWeight="bold">amado</tspan>?</text>
            <text x="505" y="115" textAnchor="middle" fontSize="11" fill="#555">↳ refrão: "E, ai Deus!, se verrá cedo?"</text>

            {/* Seta paralela */}
            <path d="M325,90 L355,90" stroke="#7ab87a" strokeWidth="2" markerEnd="url(#arrow2)" />
            <defs>
              <marker id="arrow2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#7ab87a" />
              </marker>
            </defs>
            <text x="340" y="86" textAnchor="middle" fontSize="10" fill="#7ab87a">≈</text>

            {/* Leixa-pren */}
            <rect x="30" y="160" width="620" height="80" rx="8" fill="#fff9c4" stroke="#f9a825" strokeWidth="1.5" />
            <text x="340" y="180" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#7a5200">Leixa-Pren</text>
            <text x="340" y="198" textAnchor="middle" fontSize="11" fill="#5a3a00">Último verso da estrofe 1 → torna-se o 1º verso da estrofe 3</text>
            <text x="340" y="216" textAnchor="middle" fontSize="11" fill="#5a3a00">Último verso da estrofe 2 → torna-se o 1º verso da estrofe 4</text>
            <text x="340" y="234" textAnchor="middle" fontSize="10" fill="#7a5200" fontStyle="italic">Cria encadeamento progressivo entre as cobras</text>
          </svg>
          <figcaption>Esquema do paralelismo perfeito entre cobras e o encadeamento do leixa-pren nas Cantigas de Amigo.</figcaption>
        </figure>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 6 — Cantigas de Escárnio e Maldizer */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">06 — Sátira Medieval</span>
        <h2>Cantigas de Escárnio e Maldizer: ironia e crítica direta</h2>
        <p>
          O Trovadorismo não se limitou ao amor idealizado. As{" "}
          <strong>Cantigas de Escárnio e Maldizer</strong> constituem o polo
          satírico do período, revelando uma face irreverente, crítica e por
          vezes escandalosa da produção medieval. Ambas têm função satírica —
          ridicularizar, criticar ou atacar pessoas, comportamentos ou
          situações —, mas se distinguem pela forma como essa crítica é
          exercida.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>😏</span>
            <h3>Cantiga de Escárnio</h3>
            <p>
              A crítica é feita de forma <strong>velada e indireta</strong>,
              através de ironia, duplo sentido (palavra equívoca) e alusões
              cifradas. O alvo não é nomeado explicitamente — o leitor deve
              decodificar quem está sendo satirizado. Exige mais sofisticação
              do público.
            </p>
          </div>
          <div className="lesson-card">
            <span>😡</span>
            <h3>Cantiga de Maldizer</h3>
            <p>
              A crítica é <strong>direta, explícita e muitas vezes
              grosseira</strong>. Os nomes são ditos claramente, os defeitos
              são enumerados sem disfarce, e a linguagem pode ser chula e
              ofensiva. Têm caráter mais popular e menos refinado.
            </p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Escárnio</th>
                <th>Maldizer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Forma da crítica</td>
                <td>Velada, irônica, por equívoco</td>
                <td>Direta, explícita, sem disfarce</td>
              </tr>
              <tr>
                <td>Nome do alvo</td>
                <td>Geralmente omitido ou disfarçado</td>
                <td>Geralmente explícito</td>
              </tr>
              <tr>
                <td>Linguagem</td>
                <td>Mais cuidada, com jogo de palavras</td>
                <td>Pode ser chula, grosseira</td>
              </tr>
              <tr>
                <td>Público</td>
                <td>Mais letrado, que decodifica as alusões</td>
                <td>Mais amplo, compreensão imediata</td>
              </tr>
              <tr>
                <td>Alvos comuns</td>
                <td>Cavaleiros covardes, trovadores incompetentes, nobres hipócritas</td>
                <td>Comportamentos imorais, vícios, covardia</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> Em questões sobre Cantigas de Escárnio e
          Maldizer, atente-se para o tipo de ironia utilizada. No Escárnio,
          o texto parece elogiar, mas na verdade critica — é necessário
          identificar o duplo sentido. No Maldizer, a linguagem agressiva e
          direta é a chave de identificação. O ENEM costuma apresentar
          fragmentos e pedir a identificação do tipo de cantiga e do recurso
          satírico empregado.
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 7 — Estrutura Formal das Cantigas */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">07 — Técnica Poética II</span>
        <h2>Estrutura formal: cobras, refrão, fiinda e o dobre/mordobre</h2>
        <p>
          As cantigas medievais possuem uma estrutura técnica codificada e
          aprendida pelos trovadores em manuais poéticos chamados{" "}
          <em>artes de trovar</em>. Conhecer essa estrutura é fundamental para
          analisar os poemas com precisão.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📜</span>
            <h3>Cobra</h3>
            <p>
              Nome dado a cada estrofe da cantiga. As cantigas se organizam
              em cobras, que podem ser "singulars" (cada cobra com esquema
              rimático diferente) ou "doblas" (cobras em pares com o mesmo
              esquema). O número de cobras varia de poema a poema.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔁</span>
            <h3>Refrão</h3>
            <p>
              Verso ou grupo de versos repetidos ao final de cada cobra.
              Presente sobretudo nas Cantigas de Amigo, o refrão funciona
              como ancoragem temática e garantia da musicalidade — as
              cantigas eram cantadas, e o refrão facilitava a participação
              do público.
            </p>
          </div>
          <div className="lesson-card">
            <span>✂️</span>
            <h3>Fiinda</h3>
            <p>
              Estrofe final menor (dois ou três versos) que serve de
              conclusão ou coda ao poema. É opcional e aparece com mais
              frequência nas Cantigas de Amor de influência provençal,
              funcionando como fecho moralizante ou síntese.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔤</span>
            <h3>Dobre e Mordobre</h3>
            <p>
              Recursos de repetição de palavras dentro ou entre cobras.
              O <em>dobre</em> repete a mesma palavra na mesma forma;
              o <em>mordobre</em> repete a palavra com variação de forma
              gramatical (flexão, derivação). Ambos criam efeito de ênfase
              e coesão sonora.
            </p>
          </div>
        </div>
        <div className="math-block">
          <strong>Esquema-padrão de uma Cantiga de Amigo com refrão:</strong>
          <br />
          <br />
          <strong>Cobra 1:</strong> verso 1 / verso 2 / verso 3 / verso 4 + <em>refrão</em>
          <br />
          <strong>Cobra 2:</strong> verso 1' / verso 2' / verso 3' / verso 4' + <em>refrão</em>
          <br />
          <strong>Cobra 3:</strong> verso 1'' / verso 2'' / verso 3'' / verso 4'' + <em>refrão</em>
          <br />
          <br />
          O apóstrofo (') indica a variação da palavra no paralelismo perfeito.
          O refrão permanece idêntico em todas as cobras.
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 8 — Os Cancioneiros */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">08 — Fontes e Acervo</span>
        <h2>Os Cancioneiros: os manuscritos que preservaram a poesia medieval</h2>
        <p>
          As cantigas medievais chegaram até nós graças a três grandes
          manuscritos iluminados — os <strong>Cancioneiros</strong> — que foram
          copiados e organizados, em sua maioria, na Itália durante o século
          XIV, por encomenda de nobres portugueses e italianos. Sem esses
          manuscritos, toda a produção trovadoresca teria se perdido.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Cancioneiro</th>
                <th>Localização atual</th>
                <th>Conteúdo</th>
                <th>Observações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cancioneiro da Ajuda</strong></td>
                <td>Palácio da Ajuda, Lisboa</td>
                <td>~310 cantigas, principalmente de Amor</td>
                <td>O mais antigo; escrito em Portugal no séc. XIII; único original em pergaminho iluminado</td>
              </tr>
              <tr>
                <td><strong>Cancioneiro da Biblioteca Nacional</strong> (Colocci-Brancuti)</td>
                <td>Biblioteca Nacional, Lisboa</td>
                <td>~1.647 cantigas de todos os tipos</td>
                <td>Maior acervo; cópia italiana do séc. XIV; inclui escárnio e maldizer</td>
              </tr>
              <tr>
                <td><strong>Cancioneiro da Vaticana</strong></td>
                <td>Biblioteca Apostólica Vaticana, Roma</td>
                <td>~1.205 cantigas</td>
                <td>Cópia italiana do séc. XIV; organizado por tipo de cantiga</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Por que os Cancioneiros estão na Itália?</strong> Durante o
          século XIV, o humanista italiano <em>Angelo Colocci</em> adquiriu
          e estudou manuscritos galego-portugueses, contribuindo para sua
          preservação. A corte portuguesa mantinha relações com a Itália, e
          esses documentos foram copiados por escribas italianos. O retorno
          dos manuscritos a Portugal foi um longo processo diplomático e
          cultural que se estendeu até o século XIX.
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 9 — Os Trovadores */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">09 — Os Grandes Nomes</span>
        <h2>Trovadores: Paio Soares, Dom Dinis, Martim Codax e João Garcia</h2>
        <p>
          O Trovadorismo galego-português contou com mais de 150 trovadores
          identificados, provenientes de diferentes camadas sociais — nobres,
          cavaleiros, clérigos e jograis. Entre eles, destacam-se quatro
          nomes fundamentais que o ENEM costuma mencionar.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👑</span>
            <h3>Paio Soares de Taveirós</h3>
            <p>
              Trovador nobre português, autor da <em>Cantiga da Ribeirinha</em>
              (c. 1189–1198), considerada o primeiro texto literário em língua
              portuguesa. É uma Cantiga de Amor dedicada a Maria Paes Ribeira,
              amante de D. Sancho I.
            </p>
          </div>
          <div className="lesson-card">
            <span>🤴</span>
            <h3>Dom Dinis (1261–1325)</h3>
            <p>
              Rei de Portugal e o mais prolífico trovador medieval ibérico:
              compôs cerca de 137 cantigas (Amor, Amigo e Escárnio). Fundou
              a primeira universidade portuguesa (1290) e elevou o galego-
              português a língua oficial do reino. É o símbolo máximo do
              rei-trovador.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Martim Codax</h3>
            <p>
              Jogral galego, provavelmente de Vigo, responsável por sete
              das mais belas Cantigas de Amigo — todas barcarolas. Suas
              cantigas são notáveis pelo paralelismo perfeito e pela
              musicalidade evocativa do mar. É o único trovador medieval
              cujas músicas sobreviveram.
            </p>
          </div>
          <div className="lesson-card">
            <span>🖋️</span>
            <h3>João Garcia de Guilhade</h3>
            <p>
              Trovador galego-português de grande talento satírico. É
              especialmente conhecido por suas Cantigas de Escárnio e
              Maldizer, nas quais critica trovadores medíocres, cavaleiros
              covardes e comportamentos cortesãos hipócritas com ironia
              refinada.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Dom Dinis: o rei-trovador.</strong> Dom Dinis é figura central
          do Trovadorismo não apenas pela quantidade de composições, mas pela
          qualidade e diversidade. Sua cantiga "Quer'eu em maneira de
          proençal" é uma declaração de programa poético: o rei assume
          conscientemente o modelo provençal e o adapta ao galego-português.
          Além disso, sua Cantiga de Amigo "Ai flores, ai flores do verde pino"
          é exemplar do paralelismo perfeito e da voz feminina saudosa.
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 10 — Amor Cortês e Vassalagem Amorosa */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">10 — Ideologia do Amor</span>
        <h2>Amor cortês e vassalagem amorosa: a filosofia do sentimento medieval</h2>
        <p>
          O <strong>amor cortês</strong> (<em>fin'amor</em> em provençal) é
          muito mais do que um tema poético — é uma filosofia de vida, um
          código de conduta que permeia toda a cultura medieval nobre. Para
          entendê-lo, é preciso abandonar as concepções modernas de amor
          e mergulhar na mentalidade feudal e cristã do período.
        </p>
        <p>
          No amor cortês, a dama amada é apresentada como um ser
          essencialmente <strong>inatingível e superior</strong>. Ela é descrita
          com atributos que a aproximam da perfeição divina: beleza incomparável,
          virtude inabalável, graça celestial. Amá-la é, portanto, uma
          experiência que eleva espiritualmente o amador — não importa se o
          amor é correspondido ou não.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito Feudal</th>
                <th>Equivalente Amoroso Cortês</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Senhor feudal</td>
                <td>A dama amada (<em>senhor</em>)</td>
              </tr>
              <tr>
                <td>Vassalo</td>
                <td>O trovador/amante</td>
              </tr>
              <tr>
                <td>Lealdade e obediência</td>
                <td>Fidelidade amorosa incondicional</td>
              </tr>
              <tr>
                <td>Serviço militar</td>
                <td>Serviço amoroso (cantar, louvar, servir)</td>
              </tr>
              <tr>
                <td>Proteção em troca de serviço</td>
                <td>Mercê (graça/favor amoroso) em troca de devoção</td>
              </tr>
              <tr>
                <td>Juramento de fidelidade</td>
                <td>Declaração de amor eterno</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A <strong>coita de amor</strong> — o sofrimento do amante não
          correspondido — é, nesse sistema, uma prova de nobreza de alma.
          O trovador que sofre por sua dama demonstra que é capaz de amar
          de forma pura, desinteressada e elevada. A ausência de
          correspondência não é falha da dama, mas teste para o amante.
          A "culpa" é, paradoxalmente, atribuída à própria dama pela sua
          recusa — mas essa recusa é aceita como parte do código.
        </p>
        <div className="lesson-highlight">
          <strong>Distinção importante:</strong> Nas Cantigas de Amor, a dama
          é <em>senhor</em> — palavra masculina usada para reforçar a
          superioridade hierárquica da mulher amada (ela está acima do
          trovador como um senhor está acima do vassalo). Essa escolha lexical
          não é gramatical, mas ideológica: afirma a posição de poder da dama
          na relação amorosa cortês.
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 11 — Pastorelas e Outras Formas */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">11 — Outras Formas Líricas</span>
        <h2>Pastorelas e cantigas de caracterização social</h2>
        <p>
          Além dos três tipos principais, o Trovadorismo ibérico também cultivou
          outras formas líricas, das quais se destaca a <strong>pastorela</strong>.
          Nesse gênero, um cavaleiro encontra uma pastora (moça do campo) e
          tenta cortejá-la. A pastora pode aceitar, recusar ou fugir — e nessa
          dinâmica se revelam tensões sociais entre a nobreza e o povo.
        </p>
        <p>
          As pastorelas têm estrutura dialogada (o cavaleiro e a pastora
          conversam) e misturam o universo cortês com o mundo rural, criando
          um contraste entre a sofisticação nobre e a simplicidade camponesa.
          São menos numerosas no repertório galego-português do que em outras
          tradições europeias, mas exemplificam a diversidade do movimento.
        </p>
        <div className="lesson-highlight">
          <strong>Resumo comparativo dos tipos de cantiga:</strong>
          <br />
          <br />
          <strong>Amor:</strong> eu lírico masculino, dama inacessível, coita, tom elevado, influência provençal.
          <br />
          <strong>Amigo:</strong> eu lírico feminino, natureza confidente, saudade do amado, paralelismo, tom popular.
          <br />
          <strong>Escárnio:</strong> sátira velada, ironia, equívoco, alvo não identificado explicitamente.
          <br />
          <strong>Maldizer:</strong> sátira direta, linguagem às vezes grosseira, alvo nomeado.
          <br />
          <strong>Pastorela:</strong> diálogo cavaleiro/pastora, contraste social, ambientação rural.
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 12 — Trovadorismo no ENEM */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">12 — Estratégia para o ENEM</span>
        <h2>Como o Trovadorismo cai no ENEM: identificação e análise</h2>
        <p>
          O ENEM aborda o Trovadorismo com regularidade, sempre a partir de
          fragmentos de cantigas autênticas. As questões geralmente pedem:{" "}
          <strong>identificação do tipo de cantiga</strong> (Amor, Amigo ou
          Escárnio/Maldizer), <strong>análise dos recursos formais</strong>{" "}
          (paralelismo, refrão, leixa-pren) e <strong>interpretação do tema</strong>{" "}
          (amor cortês, coita, sátira social). Nunca é pedida memorização pura —
          sempre análise textual.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Identifique o eu lírico</h3>
            <p>
              Masculino = provável Cantiga de Amor ou Escárnio.
              Feminino = provável Cantiga de Amigo. O gênero gramatical dos
              pronomes e adjetivos é a chave — leia com atenção o português
              arcaico.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Procure a natureza</h3>
            <p>
              Mar, rio, pinheiros, flores sendo interpelados = Cantiga de
              Amigo com certeza. A natureza como confidente é marca
              exclusiva desse tipo. Verifique também se há paralelismo
              entre estrofes.
            </p>
          </div>
          <div className="lesson-card">
            <span>😉</span>
            <h3>Detecte a ironia</h3>
            <p>
              Elogio que parece exagerado ou contraditório = Escárnio.
              Crítica direta com nomes ou defeitos explicitados = Maldizer.
              Sempre pergunte: o que o texto parece dizer vs. o que realmente
              quer comunicar?
            </p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Analise a estrutura</h3>
            <p>
              Estrofes em pares com uma palavra variando = paralelismo
              perfeito (Amigo). Versos repetidos ao fim de cada estrofe =
              refrão. Último verso de uma estrofe = primeiro da seguinte =
              leixa-pren.
            </p>
          </div>
        </div>
        <div className="math-block">
          <strong>Vocabulário medieval essencial para o ENEM:</strong>
          <br />
          <br />
          <strong>Senhor</strong> — a dama amada (forma masculina usada para indicar superioridade).
          <br />
          <strong>Amigo</strong> — o namorado/amante na perspectiva feminina.
          <br />
          <strong>Coita</strong> — sofrimento amoroso.
          <br />
          <strong>Mercê</strong> — graça, favor, correspondência amorosa esperada.
          <br />
          <strong>Mester</strong> — ofício/arte (mester de jogral, mester de clerecía).
          <br />
          <strong>Jogral</strong> — artista popular que cantava as composições dos trovadores.
          <br />
          <strong>Segrel</strong> — trovador profissional de origem nobre que cantava suas próprias composições.
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SEÇÃO 13 — Exercícios */}
      {/* ─────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">13 — Exercícios</span>
        <h2>Pratique: Trovadorismo do básico ao ENEM</h2>

        <Exercise
          title="O tipo de cantiga medieval"
          level="Básico"
          statement={
            <p>
              Nas cantigas medievais galego-portuguesas, qual das seguintes
              características é <strong>exclusiva</strong> das Cantigas de
              Amigo, diferenciando-as das demais produções trovadorescas?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O eu lírico masculino que serve a uma dama idealizada.",
            },
            {
              letter: "b",
              text: "A influência direta da poesia provençal e do fin'amor.",
            },
            {
              letter: "c",
              text: "O eu lírico feminino que interpela a natureza como confidente.",
              correct: true,
            },
            {
              letter: "d",
              text: "A crítica velada a pessoas públicas por meio de ironia e equívoco.",
            },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>C</strong>. Nas Cantigas de Amigo,
              o eu lírico é <em>feminino</em> — uma jovem que fala sobre seu
              amado —, e um de seus recursos mais característicos é a
              interpelação da natureza (mar, rio, pinheiros) como confidente
              dos sentimentos amorosos. A opção A descreve a Cantiga de Amor;
              a B é característica geral das Cantigas de Amor (influência
              provençal); a D descreve a Cantiga de Escárnio.
            </p>
          }
        />

        <Exercise
          title="Paralelismo perfeito e leixa-pren"
          level="Intermediário"
          statement={
            <p>
              Leia o fragmento de Martim Codax: <em>"Ondas do mar de Vigo, /
              se vistes meu amigo? / Ondas do mar levado, / se vistes meu
              amado?"</em> O recurso formal que consiste na repetição quase
              idêntica de estrofes, variando apenas uma palavra entre elas
              (como "amigo"/"amado" e "Vigo"/"levado"), denomina-se:
            </p>
          }
          options={[
            { letter: "a", text: "Refrão." },
            { letter: "b", text: "Fiinda." },
            { letter: "c", text: "Leixa-pren." },
            {
              letter: "d",
              text: "Paralelismo perfeito.",
              correct: true,
            },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>D</strong>. O{" "}
              <em>paralelismo perfeito</em> é o recurso formal das Cantigas de
              Amigo em que estrofes são quase idênticas, variando apenas uma
              palavra (geralmente sinônimos ou pares semânticos). No exemplo,
              "amigo"/"amado" e "Vigo"/"levado" são as variações. O refrão é
              a repetição de versos iguais ao fim de cada estrofe; a fiinda é
              a estrofe de encerramento menor; o leixa-pren é o recurso pelo
              qual o último verso de uma estrofe se torna o primeiro da
              seguinte.
            </p>
          }
        />

        <Exercise
          title="Escárnio versus Maldizer"
          level="Avançado"
          statement={
            <p>
              Um trovador medieval compôs uma cantiga em que elogiava
              exageradamente a "bravura" de um cavaleiro que, na verdade,
              havia fugido de uma batalha — sem jamais nomeá-lo. Esse
              texto usa a aparência de louvor para, na realidade, ridicularizar
              o comportamento. Assinale a alternativa que identifica
              corretamente o tipo de cantiga e justifica a classificação:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Cantiga de Maldizer, pois a crítica ao cavaleiro é evidente e direta ao longo do texto.",
            },
            {
              letter: "b",
              text: "Cantiga de Amor, pois o cavaleiro é tratado com deferência e o tom é elevado.",
            },
            {
              letter: "c",
              text: "Cantiga de Escárnio, pois a crítica é velada e exercida por meio de ironia e duplo sentido, sem nomear o alvo explicitamente.",
              correct: true,
            },
            {
              letter: "d",
              text: "Pastorela, pois envolve um cavaleiro e retrata uma situação narrativa dialogada.",
            },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>C</strong>. A{" "}
              <em>Cantiga de Escárnio</em> é aquela em que a sátira é
              exercida de forma <em>velada</em>, através de ironia, duplo
              sentido (palavra equívoca) e sem nomear o alvo explicitamente.
              No exemplo, o uso do elogio aparente para ridicularizar é
              exatamente o mecanismo do escárnio. A Cantiga de Maldizer (A)
              seria a escolha se a crítica fosse direta e o nome do
              cavaleiro fosse mencionado. As alternativas B e D não se
              aplicam ao contexto satirizante descrito.
            </p>
          }
        />

        <Exercise
          title="Dom Dinis e o rei-trovador"
          level="Contextualizado"
          statement={
            <p>
              Dom Dinis (1261–1325), rei de Portugal, é considerado o maior
              trovador medieval ibérico. Em uma de suas cantigas, ele escreve:{" "}
              <em>"Quer'eu em maneira de proençal / fazer agora um cantar
              d'amor."</em> Considerando o contexto histórico-cultural do
              Trovadorismo, qual é a principal implicação dessa declaração
              inicial do poema?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Dom Dinis afirma que vai traduzir literalmente uma cantiga provençal já existente.",
            },
            {
              letter: "b",
              text: "O rei declara conscientemente sua filiação ao modelo poético provençal, adaptando-o ao galego-português, o que evidencia a influência cultural da Provença sobre o Trovadorismo ibérico.",
              correct: true,
            },
            {
              letter: "c",
              text: "A cantiga é uma crítica disfarçada à influência provençal, que Dom Dinis pretendia eliminar da literatura portuguesa.",
            },
            {
              letter: "d",
              text: "Dom Dinis anuncia que está criando um novo gênero poético sem precedentes na tradição medieval ibérica.",
            },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>B</strong>. Ao declarar que quer
              fazer um cantar <em>"em maneira de proençal"</em>, Dom Dinis
              assume explicitamente sua filiação ao modelo dos{" "}
              <em>troubadours</em> provençais — artistas do sul da França que
              criaram o sistema poético do amor cortês (<em>fin'amor</em>).
              Isso evidencia como o Trovadorismo ibérico foi profundamente
              influenciado pela tradição provençal, que chegou à Península
              Ibérica pelas rotas de peregrinação e contatos entre nobrezas.
              Dom Dinis não traduz, não critica e não inventa — ele
              conscientemente adapta uma tradição estrangeira ao contexto
              galego-português.
            </p>
          }
        />

        <Exercise
          title="Amor cortês e vassalagem amorosa no ENEM"
          level="Contextualizado"
          statement={
            <p>
              Em uma Cantiga de Amor medieval, o trovador se dirige à sua
              amada como "senhor" (forma masculina) e declara: <em>"Nunca
              pude eu, senhor, viver sem vós / e, se vos eu perder, morrerei
              logo."</em> A escolha da forma masculina "senhor" para designar
              a dama amada reflete qual aspecto da ideologia medieval
              subjacente às Cantigas de Amor?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Um erro gramatical típico do galego-português arcaico, sem significado ideológico.",
            },
            {
              letter: "b",
              text: "A ideia de que as mulheres eram vistas como homens na sociedade medieval.",
            },
            {
              letter: "c",
              text: "A estrutura da vassalagem feudal transposta para o amor: a dama ocupa a posição de senhoria (superioridade hierárquica) diante do trovador-vassalo, que lhe deve obediência e serviço amoroso incondicional.",
              correct: true,
            },
            {
              letter: "d",
              text: "A influência da Igreja Católica, que exigia que a dama fosse tratada como figura de autoridade religiosa.",
            },
          ]}
          resolution={
            <p>
              A resposta correta é <strong>C</strong>. O uso de "senhor"
              (forma masculina) para designar a dama amada é uma escolha
              ideológica deliberada, não um erro gramatical. Ela reflete a
              transposição da estrutura do <em>feudalismo</em> para a esfera
              amorosa: o trovador assume o papel de <em>vassalo</em> e a dama
              ocupa o lugar do <em>senhor feudal</em>, com autoridade
              hierárquica superior. O amor cortês é, portanto, uma metáfora
              política — amar a dama é servir o senhor —, e a forma
              "senhor" reforça essa posição de poder da mulher amada dentro
              do código cavalheiresco medieval.
            </p>
          }
        />
      </section>
    </article>
  );
}
