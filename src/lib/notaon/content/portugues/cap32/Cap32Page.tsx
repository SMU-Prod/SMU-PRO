"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap32Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 32</span>
          <h1>Realismo e Naturalismo</h1>
          <p>
            Na segunda metade do século XIX, a literatura brasileira virou a câmera para a vida como ela é:
            a burguesia hipócrita, os cortiços insalubres, os instintos animais que a civilização tenta esconder.
            Machado de Assis — com sua ironia cirúrgica e seu narrador infame — e Aluísio Azevedo —
            com seu determinismo implacável — protagonizaram a ruptura mais radical da nossa história literária.
            De um lado, Machado disseça a alma da burguesia carioca com bisturi de ironia;
            do outro, Aluísio mergulha nos cortiços infectos com o olhar frio do cientista.
            Conhecer esses dois mestres é dominar um dos temas mais recorrentes do ENEM
            e compreender o momento em que a literatura brasileira alcançou sua maturidade definitiva.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. O Fim do Romantismo e o Contexto do Realismo</h2>

        <p>
          O <strong>Realismo</strong> surgiu na Europa — especialmente na França, com Gustave Flaubert (<em>Madame Bovary</em>, 1857) e Honoré de Balzac (<em>A Comédia Humana</em>) — como reação ao subjetivismo exagerado, à idealização e ao escapismo do Romantismo. A segunda metade do século XIX foi marcada por transformações intelectuais profundas que tornaram o idealismo romântico insustentável: o <strong>positivismo</strong> de Auguste Comte afirmou que só o conhecimento científico e empírico é válido; o <strong>evolucionismo</strong> de Charles Darwin (<em>A Origem das Espécies</em>, 1859) revelou que o ser humano é parte da natureza animal; o <strong>marxismo</strong> e a sociologia nascente mostraram que as estruturas sociais moldam o indivíduo muito mais do que ele imagina.
        </p>
        <p>
          No Brasil, o Realismo chegou com algum atraso, mas chegou com força. O marco simbólico é a publicação de <em>Memórias Póstumas de Brás Cubas</em> de Machado de Assis, em 1881, primeiro em folhetim no <em>Revista Brasileira</em> e depois em volume. A obra não apenas inaugura o Realismo brasileiro — ela o leva imediatamente a um nível de sofisticação que poucos escritores de qualquer época alcançaram. No mesmo ano, Aluísio Azevedo publica <em>O Mulato</em>, iniciando a vertente naturalista.
        </p>

        <div className="lesson-highlight">
          <h3>Contexto histórico brasileiro</h3>
          <p>
            O Brasil da segunda metade do século XIX vivia transformações decisivas: o fim da escravidão se aproximava (Abolição em 1888), a monarquia agonizava (República em 1889), a imigração europeia transformava as cidades, e a urbanização e a industrialização incipiente criavam novas tensões sociais. A literatura realista-naturalista foi espelho e crítica desse Brasil em transição — especialmente da burguesia que enriquecia mas mantinha hipocrisias morais herdadas do patriarcalismo colonial.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Ano</th>
                <th>Evento histórico</th>
                <th>Reflexo na literatura realista-naturalista</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1859</td>
                <td>Darwin publica <em>A Origem das Espécies</em></td>
                <td>Fundamento filosófico do Naturalismo: o humano como animal determinado pela natureza</td>
              </tr>
              <tr>
                <td>1857</td>
                <td>Flaubert publica <em>Madame Bovary</em> na França</td>
                <td>Modelo do romance realista: objetividade, crítica ao romantismo, análise psicológica</td>
              </tr>
              <tr>
                <td>1880</td>
                <td>Zola publica <em>O Romance Experimental</em></td>
                <td>Manifesto do Naturalismo; influencia diretamente Aluísio Azevedo</td>
              </tr>
              <tr>
                <td>1881</td>
                <td>Machado publica <em>Memórias Póstumas</em>; Aluísio publica <em>O Mulato</em></td>
                <td>Duplo marco inicial do Realismo e do Naturalismo brasileiros no mesmo ano</td>
              </tr>
              <tr>
                <td>1888</td>
                <td>Abolição da Escravidão (Lei Áurea)</td>
                <td>O Naturalismo aborda cortiços habitados por ex-escravos; Aluísio trata racismo em <em>O Mulato</em></td>
              </tr>
              <tr>
                <td>1889</td>
                <td>Proclamação da República</td>
                <td>Novo regime político; mas Machado questiona se a mudança é real ou apenas de fachada</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          É importante compreender que o Realismo brasileiro não é uma cópia do europeu: ele tem especificidades resultantes das condições históricas do país. A escravidão — que durou até 1888, muitos anos depois de o Realismo europeu já estar consolidado — criou uma sociedade com dinâmicas de classe, raça e poder completamente distintas das europeias. Machado de Assis, ele próprio descendente de escravos, nunca abordou a escravidão de forma direta em seus romances — mas a ela se refere constantemente de forma oblíqua, através das relações de dependência e servilismo que estruturam a sociedade que descreve. Essa escolha — não falar diretamente, mas mostrar o sistema escravista em seu funcionamento cotidiano — é em si mesma um gesto político e literário de grande sofisticação.
        </p>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Características</span>
        <h2>2. Características do Realismo — O Olhar Crítico sobre a Sociedade</h2>

        <p>
          O Realismo literário não significa simplesmente "descrever a realidade": todo texto literário é uma construção. O Realismo se define por um conjunto de escolhas estéticas e ideológicas que buscam representar a realidade <em>social</em> com objetividade, distanciamento crítico e aprofundamento psicológico. O escritor realista comporta-se como um <strong>observador científico</strong>: registra comportamentos, analisa motivações, expõe contradições, sem a idealização que o romântico aplicava a tudo.
        </p>
        <p>
          O Realismo rejeita explicitamente os três grandes pilares do Romantismo: o <strong>subjetivismo exacerbado</strong> (sentimentos individuais como centro do mundo), o <strong>idealismo</strong> (a realidade como deveria ser, não como é) e o <strong>escapismo</strong> (a fuga para o passado histórico ou para a natureza selvagem). Em seu lugar, o Realismo propõe o <strong>objetivismo relativo</strong> (a tentativa de ver o mundo sem ilusões), o <strong>verossimilhança</strong> (personagens e situações críveis) e o <strong>presentismo</strong> (o escritor analisa a sociedade contemporânea, não o passado medieval ou a natureza intocada). Essa inversão é total — e explica por que o Realismo representou uma revolução estética, não apenas um refinamento do Romantismo anterior.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Análise Psicológica</h3>
            <p>Os personagens têm motivações complexas, contraditórias e muitas vezes escusas. O Realismo desvenda o que está por trás das aparências sociais — vaidade, egoísmo, ambição disfarçada de virtude.</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Crítica Social</h3>
            <p>A burguesia e suas hipocrisias são o alvo principal. Casamento, dinheiro, política e religião são instituições submetidas a um olhar desencantado e crítico.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Objetividade e Impessoalidade</h3>
            <p>Em oposição ao subjetivismo romântico, o narrador realista tende à distância crítica. Machado, porém, subverte isso: seu narrador é explicitamente parcial e irônico.</p>
          </div>
          <div className="lesson-card">
            <span>📖</span>
            <h3>Verossimilhança</h3>
            <p>Os eventos e personagens devem ser críveis, reconhecíveis na experiência cotidiana. Nada de coincidências miraculosas ou heróis sem falhas como no Romantismo.</p>
          </div>
        </div>

        <p>
          A <strong>ironia</strong> é o recurso retórico central do Realismo — especialmente em Machado de Assis. Ao dizer o contrário do que se pensa, ao mostrar o abismo entre o que os personagens dizem que são e o que realmente são, o escritor realista expõe a falsidade dos valores burgueses sem precisar pregá-la diretamente. O leitor é chamado a perceber sozinho a contradição.
        </p>
        <p>
          A <strong>representação do casamento</strong> é um dos temas centrais do Realismo brasileiro. No Romantismo, o casamento é o desfecho feliz — a conclusão lógica do amor idealizado. No Realismo, o casamento é uma instituição social regulada por interesses materiais, prestígio e conveniência, dentro da qual amor, ciúme, traição e hipocrisia convivem. Em Machado de Assis, praticamente todos os casamentos são problemáticos: o de Brás Cubas e Virgília (um caso extraconjugal transformado em pilares do texto), o de Bentinho e Capitu (cujo fracasso é o tema central de Dom Casmurro), o de Rubião e Sofia em <em>Quincas Borba</em> (uma sedução não consumada que destrói o protagonista). A instituição do casamento no século XIX brasileiro era também uma questão econômica — as mulheres dependiam economicamente dos maridos —, e Machado explora essa dependência com precisão.
        </p>
        <p>
          O Realismo europeu que mais influenciou Machado de Assis não foi o naturalismo de Zola, mas o realismo psicológico de autores como <strong>Stendhal</strong> (<em>O Vermelho e o Negro</em>, 1830), <strong>Gustave Flaubert</strong> (<em>Madame Bovary</em>, 1857) e, especialmente, os escritores ingleses e russos que Machado lia com atenção: <strong>Lawrence Sterne</strong> (cujo romance <em>Tristram Shandy</em>, de 1759, influenciou diretamente a estrutura fragmentária e metaliterária das Memórias Póstumas), <strong>Charles Dickens</strong> e <strong>Fiódor Dostoiévski</strong>. A visão cosmopolita de Machado — um brasileiro que conhecia a literatura europeia mais profundamente do que muitos europeus — foi central para a criação de sua prosa única e inimitável.
        </p>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Machado de Assis</span>
        <h2>3. Machado de Assis — O Maior Escritor Brasileiro</h2>

        <p>
          <strong>Joaquim Maria Machado de Assis</strong> (1839–1908) é unanimemente reconhecido como o maior escritor da literatura brasileira e um dos maiores da língua portuguesa. Sua vida foi tão improvável quanto sua genialidade: filho de um pintor de paredes mulato e de uma lavadeira açoriana, cresceu no Morro do Livramento no Rio de Janeiro sem educação formal sistemática. Autodidata, epiléptico, com estrabismo e gagueira, chegou a ser o primeiro presidente da Academia Brasileira de Letras (1897) e um dos mais respeitados intelectuais do Segundo Reinado.
        </p>
        <p>
          A obra de Machado se divide em duas fases. A <strong>primeira fase</strong> (até 1880) é marcada por um Romantismo convencional — romances como <em>Ressurreição</em> (1872) e <em>A Mão e a Luva</em> (1874). A <strong>segunda fase</strong> (a partir de 1881) é a que importa para o ENEM: com <em>Memórias Póstumas de Brás Cubas</em> (1881), Machado rompe com o Romantismo e inaugura uma prosa realista de profundidade e sofisticação únicas. Seguem-se <em>Quincas Borba</em> (1891), <em>Dom Casmurro</em> (1899), <em>Esaú e Jacó</em> (1904) e <em>Memorial de Aires</em> (1908), além dos contos — mais de 200, nos quais se destacam <em>O Alienista</em>, <em>A Cartomante</em>, <em>Missa do Galo</em> e <em>O Espelho</em>.
        </p>

        <div className="math-block">
          <strong>Memórias Póstumas de Brás Cubas (1881) — a obra que mudou tudo:</strong>
          <p>
            O narrador, Brás Cubas, está morto quando escreve. Apresenta-se como <em>"um defunto autor"</em> e avisa que escreve com <em>"a pena da galhofa e a tinta da melancolia"</em>. Essa posição — narrar de além-túmulo — libera Machado de qualquer constrangimento moral: Brás pode confessar sua vaidade, egoísmo e mediocridade sem pudor, porque já não tem nada a perder. A obra é fragmentária, metaliterária e demolidora: destrói a idealização romântica do amor, da morte, da heroicidade e do progresso. O capítulo mais famoso é <em>"O Delírio"</em>, em que Brás encontra Pandora (a Natureza) — alegoria do absurdo da existência humana.
          </p>
        </div>

        <p>
          <strong>Dom Casmurro</strong> (1899) é o romance mais discutido da literatura brasileira. O narrador Bentinho, mais velho, que se autointitula Dom Casmurro, narra sua vida e a suposta traição de Capitu — a <em>Capitu dos olhos de ressaca</em>. A grande questão que divide críticos há mais de um século: Capitu traiu ou não traiu Bentinho com seu amigo Escobar? A genialidade de Machado está em deixar a pergunta em aberto — porque o narrador é suspeito, ciumento, e pode estar mentindo. O ENEM frequentemente explora exatamente esse <strong>narrador não confiável</strong>.
        </p>
        <p>
          <strong>Quincas Borba</strong> (1891) é outro romance fundamental da segunda fase machadiana. O título é também o nome de um filósofo louco que cria a doutrina do <em>Humanitismo</em> — uma paródia satírica do positivismo, do utilitarismo e de toda filosofia que justifica o sofrimento dos fracos pelo "bem" da humanidade. A frase central do Humanitismo é: <em>"Ao vencedor as batatas"</em> — dita quando dois cães brigam pela comida e o mais forte vence. Machado usa essa paródia filosófica para denunciar como a burguesia do século XIX usava ideologias "científicas" para justificar a exploração social. Rubião, o personagem principal que herda a fortuna de Quincas Borba, é um homem de boa índole destruído pela ganância e pela manipulação dos que o rodeiam — uma fábula sobre a ingenuidade perante o oportunismo.
        </p>
        <p>
          Além dos romances, Machado produziu uma obra vastíssima de crítica literária e crônicas jornalísticas. A série <em>A Semana</em>, publicada na <em>Gazeta de Notícias</em> entre 1892 e 1897, reúne mais de 300 crônicas em que Machado comenta, com a mesma ironia de seus romances, os acontecimentos da vida carioca — política, moda, costumes, morte, fofoca mundana. Essas crônicas mostram que Machado não era apenas um romancista: era um observador implacável do cotidiano, e seu bisturi crítico funcionava igualmente bem no espaço curto da crônica e no longo espaço do romance.
        </p>
        <p>
          Os <strong>contos</strong> de Machado de Assis são menos estudados do que seus romances, mas igualmente magistrais. <em>O Alienista</em> (1882) narra a história do médico Simão Bacamarte, que constrói uma casa de orates (hospício) em Itaguaí e vai internando progressivamente toda a cidade — até internar a si mesmo. A sátira ao cientificismo positivista e ao poder médico é devastadora. <em>A Cartomante</em> explora a superstição e o adultério. <em>Missa do Galo</em> narra uma noite ambígua entre o jovem narrador e a dona da casa — e a ambiguidade não se resolve. <em>O Espelho</em> filosofa sobre a identidade e a dependência do olhar do outro para nos sentirmos "reais". Cada conto é uma miniatura perfeita da técnica machadiana.
        </p>
      </section>

      {/* ── SEÇÃO 3B ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contos de Machado</span>
        <h2>3b. Os Contos — A Miniatura Perfeita da Técnica Machadiana</h2>

        <p>
          Os contos de Machado de Assis merecem atenção especial porque são frequentemente a porta de entrada para sua obra nas provas do ENEM. Textos curtos e mais fáceis de citar, os contos machadianos concentram em poucas páginas toda a ironia, a análise psicológica e a crítica social de seus romances. Machado publicou mais de duzentos contos ao longo da vida, reunidos em coletâneas como <em>Papéis Avulsos</em> (1882), <em>Histórias sem Data</em> (1884) e <em>Várias Histórias</em> (1896).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏥</span>
            <h3>O Alienista (1882)</h3>
            <p>O Dr. Simão Bacamarte constrói um hospício e interna progressivamente toda a cidade de Itaguaí — até internar-se a si mesmo. Sátira ao cientificismo positivista e ao poder médico como forma de controle social.</p>
          </div>
          <div className="lesson-card">
            <span>🃏</span>
            <h3>A Cartomante (1884)</h3>
            <p>Camilo consulta uma cartomante para saber se sua amante o trai — e é assassinado pelo marido traído ao sair da consulta. Ironia: a cartomante diz que tudo vai bem. A superstição e o adultério se entrelaçam.</p>
          </div>
          <div className="lesson-card">
            <span>🌙</span>
            <h3>Missa do Galo (1893)</h3>
            <p>O jovem narrador passa a noite de Natal conversando com Conceição, a dona da casa, enquanto o marido dorme. A narrativa é ambígua: houve ou não houve uma tentativa de sedução? O leitor nunca sabe.</p>
          </div>
          <div className="lesson-card">
            <span>🪞</span>
            <h3>O Espelho (1882)</h3>
            <p>Jacobina perde o senso de identidade quando fica sozinho numa fazenda, sem ninguém para reconhecê-lo como alferes. Reflexão filosófica sobre a identidade como construção social — dependemos do olhar do outro para existir.</p>
          </div>
        </div>

        <p>
          A estrutura dos contos machadianos segue uma lógica precisa: uma situação aparentemente simples ou anedótica que, ao ser examinada, revela uma profundidade filosófica e social inesperada. Machado raramente moraliza diretamente — ele apresenta a situação e deixa o leitor tirar suas próprias conclusões. Isso exige do leitor uma postura ativa e crítica, o que explica por que o ENEM aprecia tanto seus textos: eles exigem exatamente a leitura crítica e interpretativa que a prova busca avaliar. O candidato que sabe ler um conto machadiano — percebendo a ironia, questionando o narrador, identificando a crítica social implícita — está treinado para enfrentar praticamente qualquer texto de prosa do século XIX e XX com segurança.
        </p>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Técnicas Machadianas</span>
        <h2>4. Os Recursos Literários de Machado de Assis</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Recurso</th>
                <th>Definição</th>
                <th>Exemplo em Machado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ironia</td>
                <td>Dizer o contrário do que se pensa para revelar contradições</td>
                <td>Brás Cubas elogia a si mesmo enquanto confessa defeitos graves</td>
              </tr>
              <tr>
                <td>Narrador não confiável</td>
                <td>Narrador em primeira pessoa cujo relato é parcial, distorcido ou mentiroso</td>
                <td>Dom Casmurro — Bentinho pode estar inventando ou distorcendo a traição</td>
              </tr>
              <tr>
                <td>Metaliteratura</td>
                <td>O texto fala de si mesmo, comenta sua própria construção</td>
                <td>Brás Cubas dirige-se diretamente ao leitor e discute o estilo do livro</td>
              </tr>
              <tr>
                <td>Fragmentação</td>
                <td>Capítulos curtos, saltos temporais, estrutura não linear</td>
                <td>Memórias Póstumas tem capítulos de uma linha ao lado de capítulos longos</td>
              </tr>
              <tr>
                <td>Análise psicológica</td>
                <td>Dissecção das motivações reais dos personagens por trás das aparências</td>
                <td>Cotrim em Memórias Póstumas: filantropo público, monstro privado</td>
              </tr>
              <tr>
                <td>Crítica à burguesia</td>
                <td>Exposição da hipocrisia das classes dominantes</td>
                <td>Em Quincas Borba, Rubião perde a fortuna por ingenuidade numa sociedade de aproveitadores</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 220"
            width="700"
            height="220"
            aria-label="Diagrama do narrador não confiável de Machado de Assis em Dom Casmurro"
          >
            <rect x="0" y="0" width="700" height="220" rx="14" fill="#f8fafc" />
            <text x="350" y="28" textAnchor="middle" fontSize="14" fill="#6366f1" fontWeight="bold">Dom Casmurro — O Problema do Narrador</text>

            {/* caixa narrador */}
            <rect x="40" y="50" width="180" height="100" rx="10" fill="#dbeafe" />
            <text x="130" y="78" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="bold">BENTINHO</text>
            <text x="130" y="96" textAnchor="middle" fontSize="10" fill="#1e40af">(Dom Casmurro)</text>
            <text x="130" y="114" textAnchor="middle" fontSize="10" fill="#1e40af">Narrador em 1ª pessoa</text>
            <text x="130" y="130" textAnchor="middle" fontSize="10" fill="#1e40af">Ciumento · Idoso · Parcial</text>

            {/* caixa relato */}
            <rect x="260" y="50" width="180" height="100" rx="10" fill="#fce7f3" />
            <text x="350" y="78" textAnchor="middle" fontSize="12" fill="#9d174d" fontWeight="bold">O RELATO</text>
            <text x="350" y="96" textAnchor="middle" fontSize="10" fill="#9d174d">Capitu traiu com Escobar?</text>
            <text x="350" y="114" textAnchor="middle" fontSize="10" fill="#9d174d">Bentinho acusa — mas é</text>
            <text x="350" y="130" textAnchor="middle" fontSize="10" fill="#9d174d">testemunha única e suspeita</text>

            {/* caixa leitor */}
            <rect x="480" y="50" width="180" height="100" rx="10" fill="#d1fae5" />
            <text x="570" y="78" textAnchor="middle" fontSize="12" fill="#065f46" fontWeight="bold">O LEITOR</text>
            <text x="570" y="96" textAnchor="middle" fontSize="10" fill="#065f46">Deve questionar o relato</text>
            <text x="570" y="114" textAnchor="middle" fontSize="10" fill="#065f46">A ambiguidade é intencional</text>
            <text x="570" y="130" textAnchor="middle" fontSize="10" fill="#065f46">Não há resposta definitiva</text>

            {/* setas */}
            <defs>
              <marker id="arrowReal" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1" />
              </marker>
            </defs>
            <line x1="220" y1="100" x2="258" y2="100" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowReal)" />
            <line x1="440" y1="100" x2="478" y2="100" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowReal)" />

            <text x="350" y="180" textAnchor="middle" fontSize="11" fill="#64748b">A genialidade de Machado: o leitor nunca sabe a verdade — e isso é o ponto</text>
            <text x="350" y="198" textAnchor="middle" fontSize="10" fill="#64748b">ENEM explora exatamente essa ambiguidade do narrador não confiável</text>
          </svg>
          <figcaption>Esquema do problema central de Dom Casmurro: o narrador não confiável como recurso literário central de Machado de Assis.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Naturalismo</span>
        <h2>5. O Naturalismo — Determinismo, Instinto e Zoomorfização</h2>

        <p>
          O <strong>Naturalismo</strong> é uma corrente literária que se desenvolveu a partir do Realismo, mas levou suas premissas científicas ao extremo. Se o Realismo observa criticamente a sociedade, o Naturalismo a examina como um laboratório: os personagens são estudados como objetos de ciência, determinados por forças que estão além de sua vontade — a <strong>hereditariedade</strong> (características herdadas geneticamente) e o <strong>meio</strong> (ambiente físico e social). Essa visão, influenciada pelo darwinismo e pelo positivismo, é chamada de <strong>determinismo</strong>.
        </p>
        <p>
          O teórico e modelo literário do Naturalismo foi o francês <strong>Émile Zola</strong>, que desenvolveu a ideia do "romance experimental": assim como o cientista conduz experimentos controlados, o escritor naturalista "experimenta" seus personagens em ambientes extremos para observar como respondem. Zola escreveu séries de romances sobre famílias inteiras, rastreando como vícios e doenças se transmitem por gerações — o ciclo <em>Les Rougon-Macquart</em> (1871–1893) é seu monumento principal. O romance <em>Germinal</em> (1885), sobre mineiros em greve, e <em>Nana</em> (1880), sobre uma cortesã que destrói os homens que a cercam, são os mais conhecidos do ciclo. No ensaio <em>O Romance Experimental</em> (1880), Zola explicitou sua teoria: o romance é um laboratório científico em que o autor testa hipóteses sobre o comportamento humano.
        </p>

        <div className="lesson-highlight">
          <h3>Características específicas do Naturalismo</h3>
          <ul>
            <li><strong>Determinismo:</strong> o homem é produto do meio e da hereditariedade; não tem livre-arbítrio real.</li>
            <li><strong>Zoomorfização:</strong> os personagens são comparados a animais ou descritos com instintos animais — a humanidade é reduzida à sua dimensão biológica.</li>
            <li><strong>Fisiologismo:</strong> ênfase nos processos corporais, na sexualidade, nas doenças e nos impulsos biológicos.</li>
            <li><strong>Ambientes degradados:</strong> cortiços, prostíbulos, prisões, fábricas — o escritor naturalista vai para onde a "boa sociedade" não quer olhar.</li>
            <li><strong>Personagem coletiva:</strong> grupos sociais funcionam como um único organismo; o meio molda todos que nele vivem.</li>
          </ul>
        </div>

        <p>
          A <strong>hereditariedade</strong> é um pilar central do Naturalismo que merece atenção especial. Influenciado pela genética incipiente de seu tempo (ainda anterior à redescoberta das leis de Mendel), o Naturalismo acreditava que vícios, doenças e degenerações morais eram transmitidos biologicamente de pais para filhos. Em Zola, famílias inteiras são estudadas ao longo de gerações para mostrar como o alcoolismo, a loucura e o crime se perpetuam. No Brasil, Aluísio usa essa lógica para mostrar como o ambiente do cortiço reproduz a miséria e a degradação: os filhos dos moradores já nascem condenados ao mesmo ciclo de pobreza e violência dos pais. Essa visão é, do ponto de vista científico atual, equivocada — mas foi a ciência do século XIX, e o Naturalismo a adotou com entusiasmo.
        </p>

        <p>
          O Naturalismo brasileiro encontrou resistência dos críticos conservadores da época, que o acusavam de imoralidade por retratar cenas de sexualidade, violência e degradação explícitas. A resposta dos autores naturalistas era sempre a mesma: estamos fazendo ciência, não pornografia; estamos revelando a realidade que os hipócritas preferem não ver. Essa tensão entre a pretensão científica do Naturalismo e sua recepção como literatura "escandalosa" é ela própria um dado histórico importante — e revela muito sobre os valores conservadores da elite do século XIX que se sentia desconfortável diante do espelho que Aluísio lhe estendia.
        </p>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Aluísio Azevedo</span>
        <h2>6. Aluísio Azevedo e <em>O Cortiço</em> — O Naturalismo Brasileiro</h2>

        <p>
          <strong>Aluísio Tancredo Gonçalves de Azevedo</strong> (1857–1913), nascido no Maranhão, é o principal representante do Naturalismo brasileiro. Jornalista, caricaturista e romancista, Aluísio escreveu seus mais importantes romances antes de abandonar a literatura pela carreira diplomática. Sua obra naturalista inclui <em>O Mulato</em> (1881) — que aborda o racismo no Maranhão — e <em>O Cortiço</em> (1890), sua obra-prima.
        </p>
        <p>
          A trajetória de Aluísio Azevedo é marcada por uma tensão entre a vocação literária e a necessidade econômica. Vindo de família humilde do Maranhão, Aluísio foi para o Rio de Janeiro tentar a vida como artista e jornalista. Seus romances naturalistas — especialmente <em>O Cortiço</em> e <em>O Mulato</em> — lhe deram reconhecimento literário, mas não dinheiro suficiente. Em 1895, ele entrou para a carreira consular, servindo no Japão, Argentina, Espanha e outros países. Após isso, nunca mais publicou ficção séria. Esse abandono é uma perda incalculável para a literatura brasileira — e uma demonstração cruel das dificuldades materiais que artistas enfrentavam no Brasil do século XIX. Ironicamente, enquanto Machado de Assis construiu carreira sólida como funcionário público e pôde escrever sem pressa, Aluísio precisou escolher entre a arte e o sustento.
        </p>
        <p>
          <em>O Cortiço</em> (1890) narra a história de um cortiço no Rio de Janeiro — um conjunto de habitações precárias onde vivem dezenas de famílias de trabalhadores pobres, imigrantes e marginalizados. O cortiço não é apenas o cenário da narrativa: ele é quase uma personagem, um organismo vivo que degrada, aprisiona e transforma todos que nele habitam. A <strong>zoomorfização</strong> é a técnica mais marcante: os personagens são sistematicamente comparados a animais. A célebre cena de abertura descreve o despertar do cortiço como o de um ser vivo:
        </p>

        <div className="math-block">
          <strong>Fragmento de <em>O Cortiço</em> (Aluísio Azevedo):</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "E naquela umidade quente e lodosa, começou a minhocar uma vida: — acordavam as bestas dos moradores do cortiço, surgindo de todos os cantos... começavam a se mover, como vermes sob a pedra que os cobria... a animalada toda acordada, mal humorada... espreguiçando os braços, coçando a cabeça peluda..."
          </p>
          <p>
            O vocabulário é deliberadamente zoomórfico: "bestas", "vermes", "animalada". Os moradores não acordam — eles emergem como animais. Esse é o determinismo naturalista em ação: o meio degradado transforma o ser humano.
          </p>
        </div>

        <p>
          Os dois protagonistas humanos de <em>O Cortiço</em> illustram o determinismo: <strong>João Romão</strong>, o proprietário ambicioso que acumula riqueza explorando a miséria alheia, e que tenta se "civilizar" para subir socialmente; e <strong>Jerônimo</strong>, o trabalhador português virtuoso que, ao entrar em contato com a sensualidade de Rita Baiana e com o calor tropical do cortiço, "se abrasileira" — e degenera moralmente. O meio vence o indivíduo em ambos os casos.
        </p>
        <p>
          <em>O Mulato</em> (1881) é o primeiro romance naturalista de Aluísio Azevedo e o primeiro romance brasileiro a abordar o racismo de forma tão direta. Raimundo, filho de um homem branco com uma escrava, volta ao Maranhão depois de estudar em Lisboa e não consegue se casar com a prima Ana Rosa porque a família dela não aceita sua origem mestiça. A obra usa o determinismo naturalista para mostrar que o racismo é uma força social que determina o destino do indivíduo tão inexoravelmente quanto o meio físico. É ao mesmo tempo uma denúncia do racismo e uma exploração do determinismo — marcas inequívocas do Naturalismo.
        </p>
        <p>
          O Naturalismo brasileiro tem uma especificidade importante em relação ao europeu: no Brasil, o meio degradado que determina os personagens é também um meio <strong>racialmente marcado</strong>. Os cortiços descritos por Aluísio eram habitados principalmente por negros, mestiços e imigrantes pobres — os excluídos da promessa de modernização que a República recém-proclamada (1889) prometia. A zoomorfização naturalista, portanto, não é politicamente neutra: ao descrever esses personagens como animais, Aluísio pode ser lido tanto como crítico da desumanização causada pela pobreza quanto como participante de um discurso que desumanizava negros e pobres. Essa tensão é um dos aspectos mais debatidos da crítica contemporânea sobre o Naturalismo brasileiro.
        </p>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Realismo vs. Naturalismo</span>
        <h2>7. Realismo e Naturalismo — Semelhanças, Diferenças e Relação</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Realismo</th>
                <th>Naturalismo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Relação entre si</td>
                <td>Movimento mais amplo, surgiu antes</td>
                <td>Vertente radical do Realismo, influência de Zola</td>
              </tr>
              <tr>
                <td>Foco temático</td>
                <td>Burguesia, relações sociais, psicologia</td>
                <td>Classes baixas, cortiços, instintos, marginalidade</td>
              </tr>
              <tr>
                <td>Visão do ser humano</td>
                <td>Ser social e psicológico complexo</td>
                <td>Ser biológico determinado por hereditariedade e meio</td>
              </tr>
              <tr>
                <td>Personagens</td>
                <td>Psicologicamente complexos, individualidades</td>
                <td>Frequentemente coletivos; zoomorfizados</td>
              </tr>
              <tr>
                <td>Influências filosóficas</td>
                <td>Positivismo, crítica social</td>
                <td>Darwinismo, determinismo, positivismo radical</td>
              </tr>
              <tr>
                <td>Representante brasileiro</td>
                <td>Machado de Assis</td>
                <td>Aluísio Azevedo</td>
              </tr>
              <tr>
                <td>Obras-chave</td>
                <td><em>Dom Casmurro</em>, <em>Memórias Póstumas</em></td>
                <td><em>O Cortiço</em>, <em>O Mulato</em></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Embora Machado de Assis e Aluísio Azevedo sejam contemporâneos (ambas as obras mais importantes publicadas na mesma época), suas literaturas são radicalmente diferentes em método, tema e estilo. Machado analisa a burguesia com ironia refinada e sofisticação psicológica; Aluísio mergulha nas classes baixas com vocabulário crú, determinismo biológico e cenas de violência e sexualidade explícitas. O ENEM frequentemente apresenta fragmentos e pede ao candidato que identifique a qual corrente — Realismo machadiano ou Naturalismo — pertence.
        </p>

        <div className="lesson-highlight">
          <h3>Como o Naturalismo vai além do Realismo</h3>
          <ul>
            <li>O Realismo questiona a sociedade; o Naturalismo a disecciona como laboratório científico.</li>
            <li>O Realismo analisa a psicologia individual; o Naturalismo estuda o comportamento de grupos determinados pelo ambiente.</li>
            <li>O Realismo usa ironia para criticar; o Naturalismo usa descrições brutais para chocar e denunciar.</li>
            <li>O Realismo tem personagens com algum grau de agência moral; o Naturalismo tende a ver os personagens como vítimas sem saída do determinismo.</li>
            <li>O Naturalismo frequentemente aborda temas que o Realismo evitava: sexualidade explícita, doenças, vícios, pobreza extrema.</li>
          </ul>
        </div>

        <p>
          Apesar de suas diferenças, Realismo e Naturalismo compartilham a <strong>recusa ao idealismo romântico</strong> e a <strong>adesão ao cientificismo da segunda metade do século XIX</strong>. Ambos acreditam que a literatura deve observar e representar a realidade social — e ambos colocam a burguesia e suas hipocrisias sob o microscópio, embora de ângulos diferentes: Machado de dentro, com discrição e ironia; Aluísio de fora, com brutalidade e determinismo. Essa complementaridade faz do período 1881–1908 o mais rico e sofisticado da prosa brasileira antes do Modernismo.
        </p>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia ENEM</span>
        <h2>8. Como o ENEM Cobra Realismo e Naturalismo</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 200"
            width="700"
            height="200"
            aria-label="Linha do tempo do Realismo e Naturalismo brasileiro com obras e autores"
          >
            <defs>
              <marker id="arrowRN" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1" />
              </marker>
            </defs>
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <line x1="40" y1="90" x2="660" y2="90" stroke="#6366f1" strokeWidth="3" markerEnd="url(#arrowRN)" />

            <circle cx="100" cy="90" r="9" fill="#6366f1" />
            <text x="100" y="74" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1881</text>
            <text x="100" y="110" textAnchor="middle" fontSize="10" fill="#4b5563">Memórias Póstumas</text>
            <text x="100" y="123" textAnchor="middle" fontSize="9" fill="#4b5563">(Machado)</text>

            <circle cx="240" cy="90" r="9" fill="#6366f1" />
            <text x="240" y="74" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1881</text>
            <text x="240" y="110" textAnchor="middle" fontSize="10" fill="#4b5563">O Mulato</text>
            <text x="240" y="123" textAnchor="middle" fontSize="9" fill="#4b5563">(Aluísio Azevedo)</text>

            <circle cx="380" cy="90" r="9" fill="#8b5cf6" />
            <text x="380" y="74" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1890</text>
            <text x="380" y="110" textAnchor="middle" fontSize="10" fill="#4b5563">O Cortiço</text>
            <text x="380" y="123" textAnchor="middle" fontSize="9" fill="#4b5563">(Aluísio Azevedo)</text>

            <circle cx="520" cy="90" r="9" fill="#8b5cf6" />
            <text x="520" y="74" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1899</text>
            <text x="520" y="110" textAnchor="middle" fontSize="10" fill="#4b5563">Dom Casmurro</text>
            <text x="520" y="123" textAnchor="middle" fontSize="9" fill="#4b5563">(Machado)</text>

            <circle cx="640" cy="90" r="9" fill="#ec4899" />
            <text x="640" y="74" textAnchor="middle" fontSize="11" fill="#1e1b4b" fontWeight="bold">1908</text>
            <text x="640" y="110" textAnchor="middle" fontSize="10" fill="#4b5563">Memorial de Aires</text>
            <text x="640" y="123" textAnchor="middle" fontSize="9" fill="#4b5563">(Machado)</text>

            <text x="350" y="165" textAnchor="middle" fontSize="12" fill="#6366f1" fontWeight="bold">Realismo e Naturalismo Brasileiros (1881–1908)</text>
          </svg>
          <figcaption>Linha do tempo das principais obras do Realismo e do Naturalismo brasileiro.</figcaption>
        </figure>

        <p>
          O ENEM frequentemente apresenta fragmentos literários do período e pede que o candidato identifique características, autores ou movimentos. As questões mais comuns envolvem:
        </p>
        <p>
          Vale destacar que o ENEM raramente testa o conhecimento enciclopédico isolado — não basta saber que Machado escreveu <em>Dom Casmurro</em>. A prova apresenta um fragmento e pede que o candidato identifique o efeito de sentido de um recurso específico, ou compare dois fragmentos de estilos diferentes, ou relacione o texto ao seu contexto histórico. Por isso, a melhor preparação é a leitura atenta de fragmentos das principais obras, com foco em identificar os recursos literários em ação: onde está a ironia, como funciona a zoomorfização, o que o narrador revela ou esconde. O treinamento com questões comentadas — como as que seguem neste capítulo — é indispensável.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎭</span>
            <h3>Ironia Machadiana</h3>
            <p>Questões pedem que o candidato identifique o efeito irônico de uma passagem de Machado — quando o narrador diz o contrário do que pensa, ou quando elogia algo para criticá-lo.</p>
          </div>
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Narrador Não Confiável</h3>
            <p>Dom Casmurro é o exemplo clássico: o leitor é chamado a perceber que o narrador pode estar mentindo ou distorcendo fatos por ciúmes e ressentimento.</p>
          </div>
          <div className="lesson-card">
            <span>🐾</span>
            <h3>Zoomorfização</h3>
            <p>Em textos naturalistas de Aluísio Azevedo, o candidato precisa identificar como as comparações com animais revelam a visão determinista do autor sobre os personagens.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Crítica à Burguesia</h3>
            <p>Machado expõe a hipocrisia da elite brasileira. O candidato deve identificar como a linguagem, a narrativa e os eventos constroem essa crítica implícita.</p>
          </div>
        </div>

        <p>
          Uma estratégia eficiente para questões de vestibular sobre esse período é observar o <strong>vocabulário e o foco narrativo</strong>. Textos machadianos tendem a ter vocabulário elegante e abstrato, reflexões filosóficas, ironia sutil e personagens da classe média ou alta. Textos naturalistas de Aluísio tendem a ter vocabulário cru e concreto, cenas físicas e sensoriais intensas, coletividade e personagens pobres. Reconhecer essa diferença de registro é o primeiro passo para responder corretamente. Outro ponto: o narrador machadiano é frequentemente <strong>diegético</strong> (participa da história) e assume postura irônica e confessional; o narrador naturalista é frequentemente <strong>extradiegético</strong> (fora da história), observando como um cientista que registra fatos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de questão ENEM</th>
                <th>O que avaliam</th>
                <th>Como responder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identificação de escola literária</td>
                <td>Reconhecer se fragmento é Realismo ou Naturalismo</td>
                <td>Observe: ironia+psicologia = Machado/Realismo; zoomorfização+determinismo = Aluísio/Naturalismo</td>
              </tr>
              <tr>
                <td>Análise de narrador</td>
                <td>Compreender a posição e confiabilidade do narrador</td>
                <td>Em Dom Casmurro: narrador 1ª pessoa, ciumento, parcial — logo, não confiável</td>
              </tr>
              <tr>
                <td>Efeito de sentido</td>
                <td>Compreender o efeito da ironia, da zoomorfização ou de outro recurso</td>
                <td>Identifique o recurso e sua função crítica no contexto social da obra</td>
              </tr>
              <tr>
                <td>Relação texto-contexto</td>
                <td>Ligar a obra a seu contexto histórico (abolição, república, urbanização)</td>
                <td>Realismo/Naturalismo = segunda metade do séc. XIX; abolição 1888; república 1889</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Síntese e Pontos Fundamentais para o ENEM</h2>

        <div className="lesson-highlight">
          <h3>O que você precisa saber com segurança</h3>
          <ul>
            <li>Realismo surge em 1881 com <em>Memórias Póstumas de Brás Cubas</em> de Machado de Assis.</li>
            <li>Machado = ironia, narrador não confiável, análise psicológica, crítica à burguesia.</li>
            <li>Dom Casmurro = narrador suspeito; Capitu pode ser inocente — ambiguidade intencional.</li>
            <li>Naturalismo = determinismo + zoomorfização + ambientes degradados.</li>
            <li>Aluísio Azevedo = <em>O Cortiço</em> (1890) — cortiço como organismo vivo e personagem coletiva.</li>
            <li>Realismo ≠ Naturalismo: Machado analisa a burguesia com psicologia; Aluísio expõe as classes baixas com determinismo biológico.</li>
            <li>Influências filosóficas: positivismo, darwinismo, cientificismo do século XIX.</li>
            <li>Marco final: Machado morre em 1908; Modernismo começa em 1922 — o período dura cerca de 40 anos.</li>
            <li>Contos essenciais de Machado: <em>O Alienista</em>, <em>A Cartomante</em>, <em>Missa do Galo</em>, <em>O Espelho</em>.</li>
            <li>Outros romances de Aluísio: <em>O Mulato</em> (1881) — racismo no Maranhão; <em>Casa de Pensão</em> (1884).</li>
          </ul>
        </div>

        <div className="math-block">
          <strong>Dica para identificar o movimento em fragmentos desconhecidos:</strong>
          <p>Se o texto apresenta ironia refinada, narrador em primeira pessoa, análise de motivações internas e crítica à hipocrisia burguesa → provável Realismo machadiano. Se apresenta comparações com animais, determinismo explícito (o meio degrada), ambientes de pobreza e instintos sexuais ou violentos → provável Naturalismo de Aluísio Azevedo.</p>
        </div>

        <p>
          Outra dica valiosa: observe o <strong>espaço narrativo</strong>. O Realismo machadiano se passa frequentemente em salões, casas de classe média, teatro, passeios em bonde — o Rio de Janeiro burguês e suas sociabilidades. O Naturalismo se passa nos cortiços, nas tavernas, nos becos, nas habitações coletivas miseráveis — o Rio de Janeiro proletário e excluído. Esses espaços não são apenas cenário: eles carregam a visão de mundo de cada corrente. Para o Realismo, o espaço reflete a posição social e os valores morais dos personagens. Para o Naturalismo, o espaço é uma força ativa que determina e destrói quem nele habita.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Autor</th>
                <th>Obra principal</th>
                <th>Característica central</th>
                <th>Tema do ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Machado de Assis</td>
                <td><em>Memórias Póstumas de Brás Cubas</em></td>
                <td>Narrador defunto, metaliteratura, fragmentação</td>
                <td>Ironia, identidade, crítica social</td>
              </tr>
              <tr>
                <td>Machado de Assis</td>
                <td><em>Dom Casmurro</em></td>
                <td>Narrador não confiável, ambiguidade, ciúme</td>
                <td>Narrador subjetivo, traição, memória</td>
              </tr>
              <tr>
                <td>Machado de Assis</td>
                <td><em>Quincas Borba</em></td>
                <td>Paródia filosófica (Humanitismo), oportunismo</td>
                <td>Filosofia positivista, crítica ideológica</td>
              </tr>
              <tr>
                <td>Aluísio Azevedo</td>
                <td><em>O Cortiço</em></td>
                <td>Zoomorfização, determinismo do meio</td>
                <td>Naturalismo, urbanização, classe social</td>
              </tr>
              <tr>
                <td>Aluísio Azevedo</td>
                <td><em>O Mulato</em></td>
                <td>Determinismo, racismo, preconceito social</td>
                <td>Racismo, identidade, sociedade oitocentista</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Um aspecto frequentemente negligenciado nos estudos do período é a importância da <strong>imprensa</strong> para a difusão do Realismo e do Naturalismo. Grande parte das obras do período foi publicada primeiro em jornais e revistas, em formato de folhetim. Os leitores acompanhavam capítulos semanais e debatiam as obras — exatamente como hoje se debate séries de televisão. Machado de Assis foi jornalista e crítico literário ao longo de toda a carreira; Aluísio Azevedo publicou caricaturas e artigos antes de se dedicar ao romance. A imprensa foi o espaço em que os escritores forjaram sua linguagem, testaram suas ideias e alcançaram o público — e as polêmicas geradas pela publicação do <em>O Cortiço</em> e das <em>Memórias Póstumas</em> foram, em si mesmas, eventos culturais importantes do Brasil oitocentista.
        </p>

        <p>
          A <strong>herança do Realismo e Naturalismo</strong> na literatura brasileira posterior é enorme. Escritores como Lima Barreto (cujo <em>Triste Fim de Policarpo Quaresma</em> carrega muito do olhar machadiano sobre a patologia do idealismo), Graciliano Ramos (que leva o naturalismo do ambiente físico determinante ao extremo em <em>Vidas Secas</em>) e João Antônio (com os marginais dos centros urbanos) são herdeiros diretos das técnicas e preocupações abertas por Machado e Aluísio. O ENEM não cobra apenas as obras do período — cobra também a capacidade de identificar essas influências em textos posteriores.
        </p>

        <p>
          O período realista-naturalista encerra com o fim do século XIX e as primeiras décadas do XX — gradualmente substituído pelo Pré-Modernismo de Lima Barreto e Euclides da Cunha (que incorpora elementos de ambas as tradições) e depois pelo Modernismo de 1922. Mas a grande prosa brasileira do século XX — Guimarães Rosa, Clarice Lispector, Graciliano Ramos — seria impensável sem a revolução que Machado de Assis inaugurou em 1881: a descoberta de que o romance pode ser ao mesmo tempo crítica social, análise psicológica, experimento filosófico e obra de arte. Essa herança permanece viva.
        </p>
      </section>

      {/* ── SEÇÃO 10 — CONTEXTO CRÍTICO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Crítica Literária</span>
        <h2>10. A Recepção Crítica e o Legado do Período</h2>

        <p>
          A recepção de Machado de Assis pela crítica literária passou por fases muito distintas. Em vida, Machado foi muito respeitado, mas sua originalidade radical — especialmente das <em>Memórias Póstumas</em> em diante — foi frequentemente incompreendida ou subestimada. Muitos críticos do século XIX o viam como excessivamente sutil, cerebral demais, distante da realidade brasileira. Somente no século XX, especialmente após a publicação de <em>O Otelo Brasileiro de Machado de Assis</em> (1960) da americana Helen Caldwell — que revelou para o público anglófono a sofisticação do romance machadiano — é que Machado começou a ser reconhecido internacionalmente como um dos grandes escritores da literatura ocidental.
        </p>

        <p>
          <strong>John Gledson</strong>, crítico britânico, traduziu e estudou Machado extensamente, argumentando que seus romances são muito mais politicamente comprometidos do que parecem — que a ironia machadiana é também uma crítica ao escravismo e ao liberalismo de fachada do Segundo Reinado. <strong>Roberto Schwarz</strong>, crítico marxista brasileiro, em <em>Ao Vencedor as Batatas</em> (1977) e <em>Um Mestre na Periferia do Capitalismo</em> (1990), mostrou que a estrutura dos romances de Machado — o favor, a dependência, o capricho do mais forte sobre o mais fraco — reproduz e critica as relações sociais do Brasil escravista. Para Schwarz, Machado não é um escapista que foge da realidade brasileira: ele é seu analista mais preciso.
        </p>

        <div className="lesson-highlight">
          <h3>Legado para a literatura brasileira</h3>
          <ul>
            <li>Machado fundou a Academia Brasileira de Letras (1897) e foi seu primeiro presidente — institucionalizando a literatura no Brasil.</li>
            <li>O narrador não confiável machadiano influencia escritores do século XX como Guimarães Rosa e Clarice Lispector.</li>
            <li>O Naturalismo de Aluísio prepara o terreno para o Regionalismo dos anos 1930 (Graciliano Ramos, José Lins do Rego).</li>
            <li>A ironia machadiana torna-se modelo para escritores como Lima Barreto, Drummond e Rubem Braga.</li>
            <li>O interesse pelo cortiço e pelos excluídos urbanos continua em João Antônio, Carolina Maria de Jesus e outros.</li>
          </ul>
        </div>

        <p>
          O período realista-naturalista brasileiro (1881–c.1910) é único na história da literatura ocidental por uma razão: em lugar nenhum do mundo dois escritores tão diferentes quanto Machado de Assis e Aluísio Azevedo coexistiram no mesmo momento literário, com obras tão opostas em método e estilo, e ambas de altíssima qualidade. Enquanto o mundo europeu conhecia um Naturalismo relativamente homogêneo (todos seguindo Zola de perto), o Brasil produziu ao mesmo tempo o Naturalismo tropical de Aluísio e o Realismo psicológico sem par de Machado. Essa riqueza é um patrimônio cultural de primeira grandeza — e a razão pela qual o ENEM retorna a esse período ano após ano.
        </p>

        <p>
          Lembre-se também que o período deu origem à <strong>Academia Brasileira de Letras</strong>, fundada em 1897 por iniciativa de Machado de Assis — que convidou pessoalmente os fundadores. A criação da ABL foi um ato civilizatório: a afirmação de que o Brasil tinha uma literatura própria, digna de ser celebrada e preservada. Machado foi seu presidente até a morte, em 1908. O fato de que o maior escritor brasileiro — filho de ex-escravos, autodidata, epiléptico, gago — tornou-se o presidente desta instituição é em si mesmo um dado literário: prova que a literatura é um dos poucos espaços em que a mobilidade social é possível pelo mérito puro da criação artística.
        </p>
      </section>

      {/* ── SEÇÃO 11 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Realismo vs. Romantismo — Distinção Básica"
          statement={
            <p>
              O Realismo literário do século XIX distingue-se do Romantismo principalmente porque:
            </p>
          }
          options={[
            { letter: "a", text: "valoriza a emoção, a subjetividade e a idealização das personagens e situações." },
            { letter: "b", text: "apresenta uma visão crítica e objetiva da realidade social, analisando personagens com profundidade psicológica e sem idealização.", correct: true },
            { letter: "c", text: "rejeita completamente o romance como gênero literário, voltando-se exclusivamente para a poesia." },
            { letter: "d", text: "concentra-se na exaltação do passado medieval europeu como modelo de civilização." },
          ]}
          resolution={
            <p>
              O Realismo é uma reação direta ao Romantismo: onde o Romantismo idealizava (personagens perfeitos, amores absolutos, natureza espelhando sentimentos), o Realismo observa criticamente (personagens contraditórios, motivações egoístas, sociedade hipócrita). A objetividade e a análise psicológica substituem o sentimentalismo. As demais alternativas descrevem incorretamente o período: o Realismo não rejeita o romance (C) — pelo contrário, o romance é seu gênero central; e não há exaltação do medievalismo (D), que é traço do Romantismo, não do Realismo.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. A Ironia de Machado de Assis"
          statement={
            <p>
              No início das <em>Memórias Póstumas de Brás Cubas</em>, o narrador afirma: <em>"Ao verme que primeiro roeu as frias carnes do meu cadáver dedico como saudosa lembrança estas Memórias Póstumas."</em><br /><br />
              O efeito da ironia nesse fragmento consiste em:
            </p>
          }
          options={[
            { letter: "a", text: "mostrar a piedade do narrador com os animais da natureza, revelando seu caráter humanitário." },
            { letter: "b", text: "denunciar as condições precárias dos cemitérios brasileiros no século XIX, crítica social direta." },
            { letter: "c", text: "parodiar as dedicatórias convencionais dos livros românticos, substituindo a homenagem a pessoas ilustres por uma homenagem ao verme decompositor, esvaziando cinicamente o gesto de grandiosidade literária.", correct: true },
            { letter: "d", text: "demonstrar a crença de Machado de Assis no determinismo naturalista, segundo o qual o homem é apenas matéria biológica." },
          ]}
          resolution={
            <p>
              A dedicatória ao verme é um dos golpes irônicos mais celebrados da literatura brasileira. A dedicatória convencional de um livro romântico seria a algum mecenas, à pátria, à amada ou a figuras nobres. Ao substituir tudo isso pelo verme que come seu cadáver, Brás Cubas (e Machado) parodia a solenidade literária e afirma que, do ponto de vista de um defunto, todas as grandezas humanas são igualmente ridículas. É ironia pela inversão do gesto esperado — não humanitarismo (A), não crítica social direta sobre cemitérios (B), e não determinismo naturalista (D), que é o oposto da postura machadiana.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Determinismo e Zoomorfização em O Cortiço"
          statement={
            <p>
              Na cena de abertura de <em>O Cortiço</em>, Aluísio Azevedo descreve o despertar dos moradores usando termos como "bestas", "vermes" e "animalada". Que visão de mundo essa escolha lexical revela?
            </p>
          }
          options={[
            { letter: "a", text: "Uma visão cristã que condena moralmente os moradores do cortiço por seus pecados e falta de educação religiosa." },
            { letter: "b", text: "Uma visão determinista e naturalista: o meio degradado transforma os seres humanos em criaturas governadas por instintos, retirando-lhes a dignidade de sujeitos racionais e morais.", correct: true },
            { letter: "c", text: "Uma crítica romântica ao progresso industrial, que desumanizaria os trabalhadores ao tratá-los como máquinas de produção." },
            { letter: "d", text: "Uma exaltação poética da natureza, usada metaforicamente para mostrar a vitalidade do povo brasileiro nas favelas do século XIX." },
          ]}
          resolution={
            <p>
              A zoomorfização em Aluísio Azevedo não é um julgamento moral (A) nem uma metáfora poética (D): é uma consequência direta do determinismo naturalista. Se o ser humano é produto do meio e da hereditariedade, então um meio degradado como o cortiço necessariamente produz seres degradados — que se comportam como animais porque suas condições de vida os reduziram a essa dimensão. A comparação com animais é intencional e sistemática: serve para mostrar que a pobreza não é resultado de preguiça ou vício individual, mas do meio que prende as pessoas em um ciclo de degradação. Não há romantismo anticapitalista (C) nem moralismo religioso (A) na visão naturalista de Aluísio.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Dom Casmurro e o Narrador Não Confiável"
          statement={
            <p>
              Em <em>Dom Casmurro</em> (1899), Machado de Assis constrói um narrador que acusa sua esposa Capitu de traição, mas cujas evidências são circunstanciais e cujo relato é marcado por ciúme e ressentimento. Um crítico literário afirmou: <em>"Bentinho não narra a história de Capitu — narra a história de seu próprio ciúme."</em><br /><br />
              Essa afirmação aponta para qual recurso narrativo central da obra?
            </p>
          }
          options={[
            { letter: "a", text: "O narrador onisciente neutro, que observa os fatos de fora e os relata com objetividade científica." },
            { letter: "b", text: "O narrador em primeira pessoa não confiável, cuja subjetividade, parcialidade e possíveis distorções comprometem a veracidade do relato e tornam a culpa de Capitu permanentemente ambígua.", correct: true },
            { letter: "c", text: "O narrador naturalista, que determina biologicamente o comportamento de Capitu como consequência do meio social degradado em que cresceu." },
            { letter: "d", text: "O narrador romântico idealizado, que exalta Capitu como a mulher perfeita e defende sua inocência com ardor sentimental." },
          ]}
          resolution={
            <p>
              O narrador não confiável é a chave de <em>Dom Casmurro</em>. Bentinho narra em primeira pessoa, de idade avançada, com rancor e ciúme acumulados. Ele apresenta evidências da traição de Capitu — mas todas são ambíguas e filtradas por sua perspectiva: os "olhos de ressaca" de Capitu mirando o caixão de Escobar, o filho Ezequiel que parece se parecer com Escobar. Nenhuma prova é objetiva. A crítica literária do século XX — especialmente Helen Caldwell em <em>O Otelo Brasileiro de Machado de Assis</em> (1960) — argumentou que Bentinho pode ser um ciumento que inventou ou distorceu a traição. Machado nunca resolve a ambiguidade: é a genialidade da obra. Não há narrador onisciente (A), naturalismo (C) nem idealização romântica (D).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Comparação Realismo × Naturalismo em Fragmentos"
          statement={
            <p>
              Leia os dois fragmentos:<br /><br />
              <strong>Texto I:</strong> <em>"Naquela umidade quente e lodosa, começou a minhocar uma vida: acordavam as bestas dos moradores do cortiço, surgindo de todos os cantos, esticando os braços, coçando a cabeça peluda."</em> (Aluísio Azevedo)<br /><br />
              <strong>Texto II:</strong> <em>"Cotrim tinha um caráter difícil. Não lhe acho outra explicação para certos actos seus, se não é que o homem mais probo pode ter instantes de pirataria."</em> (Machado de Assis)<br /><br />
              Sobre os dois textos, assinale a afirmativa correta:
            </p>
          }
          options={[
            { letter: "a", text: "Ambos pertencem ao Naturalismo: os dois usam vocabulário científico e determinista para analisar o comportamento humano." },
            { letter: "b", text: "O Texto I pertence ao Realismo machadiano (análise psicológica de um personagem específico) e o Texto II pertence ao Naturalismo (zoomorfização)." },
            { letter: "c", text: "O Texto I exemplifica o Naturalismo (zoomorfização e determinismo do meio sobre os personagens coletivos) e o Texto II exemplifica o Realismo machadiano (análise psicológica irônica de um personagem individual).", correct: true },
            { letter: "d", text: "Ambos pertencem ao Romantismo tardio: a idealização da natureza e o sentimentalismo são traços comuns dos dois fragmentos." },
          ]}
          resolution={
            <p>
              O Texto I de Aluísio Azevedo é Naturalismo clássico: a <strong>zoomorfização</strong> ("bestas", "minhocar", "cabeça peluda") e o foco nos moradores como massa coletiva são marcas inconfundíveis do determinismo naturalista — o meio cortiço reduz os humanos a animais. O Texto II de Machado é Realismo: a <strong>análise psicológica</strong> individualizada de Cotrim, com o narrador questionando ironicamente o caráter do personagem ("mais probo" que tem "instantes de pirataria"), é o procedimento machadiano por excelência — dissecção das contradições morais do indivíduo burguês. A ambiguidade do Texto II (Cotrim é honesto ou desonesto?) é típica da ironia machadiana, não da visão determinista naturalista.
            </p>
          }
        />
      </section>
    </article>
  );
}
