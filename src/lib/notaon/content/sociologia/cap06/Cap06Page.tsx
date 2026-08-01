"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap06Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 6</span>
          <h1>Auguste Comte e o Positivismo</h1>
          <p>
            "Ordem e Progresso" — as palavras na bandeira brasileira não estão lá por acaso.
            Elas traduzem a filosofia de Auguste Comte, o pai do Positivismo. Entender seu pensamento
            é entender a fundação da Sociologia como ciência e a influência que essa corrente exerceu
            sobre o Brasil republicano.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto e vida</span>
        <h2>1. Auguste Comte: vida e contexto histórico</h2>
        <p>
          <strong>Isidore Auguste Marie François Xavier Comte</strong> nasceu em Montpellier, França,
          em 1798, e morreu em Paris em 1857. Viveu num período de intensas transformações: o
          pós-Revolução Francesa, as guerras napoleônicas e os primeiros avanços da
          Revolução Industrial criaram uma Europa socialmente fragmentada, sem a estabilidade que
          a religião e a monarquia antes forneciam.
        </p>
        <p>
          Filho de família monarquista e católica, Comte rompeu com essas tradições e tornou-se
          secretário do socialista utópico <strong>Saint-Simon</strong>, de quem absorveu a ideia
          de que a ciência poderia reorganizar a sociedade. Após a ruptura com Saint-Simon,
          desenvolveu sua própria filosofia: o <strong>Positivismo</strong>.
        </p>
        <div className="lesson-highlight">
          <h3>Positivismo: a ciência como nova religião</h3>
          <p>
            Para Comte, o Positivismo não era apenas um método científico — era quase uma nova
            religião. Ele chegou a criar a <strong>"Religião da Humanidade"</strong>, com ritos,
            santos (grandes pensadores da história) e até um calendário positivista. Essa dimensão
            quase mística do positivismo é frequentemente ignorada, mas foi fundamental para
            sua influência no Brasil.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Lei dos Três Estados</span>
        <h2>2. A Lei dos Três Estados</h2>
        <p>
          O principal conceito de Comte é a <strong>Lei dos Três Estados</strong>: toda sociedade
          (e toda mente humana) passa obrigatoriamente por três estágios evolutivos, em sequência:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Estado</th>
                <th>Período histórico</th>
                <th>Explicação dos fenômenos</th>
                <th>Forma de governo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Teológico</strong></td>
                <td>Antiguidade e Idade Média</td>
                <td>Por agentes sobrenaturais (deuses, espíritos, Deus)</td>
                <td>Teocracia e monarquia absoluta</td>
              </tr>
              <tr>
                <td><strong>Metafísico</strong></td>
                <td>Renascimento ao Iluminismo (séc. XIV–XVIII)</td>
                <td>Por forças abstratas e princípios filosóficos (natureza, razão)</td>
                <td>Crítica e transição; liberalismo, contratualismo</td>
              </tr>
              <tr>
                <td><strong>Positivo</strong></td>
                <td>Séc. XIX em diante</td>
                <td>Por leis científicas observáveis, mensuráveis e verificáveis</td>
                <td>Tecnocracia; governo de cientistas e industriais</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Para Comte, o estado <strong>positivo</strong> era o ápice do desenvolvimento humano:
          apenas a ciência fornecia explicações verdadeiras e duradouras, capazes de reorganizar
          a sociedade de forma estável e racional. A Sociologia seria a ciência que completaria
          essa obra ao estudar as leis da vida social.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Hierarquia das ciências</span>
        <h2>3. A pirâmide das ciências e a Sociologia no topo</h2>
        <p>
          Comte organizou as ciências em uma <strong>hierarquia</strong>, do mais simples e geral
          para o mais complexo e específico. Cada ciência dependia das anteriores como fundamento:
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 400 280" width="400" height="280" aria-label="Pirâmide das ciências de Comte">
            {[
              { y: 10, w: 340, label: "Sociologia", desc: "Física Social — mais complexa", cor: "#7c3aed" },
              { y: 58, w: 280, label: "Biologia", desc: "Vida e organismos", cor: "#16a34a" },
              { y: 106, w: 220, label: "Química", desc: "Composição da matéria", cor: "#f59e0b" },
              { y: 154, w: 160, label: "Física", desc: "Leis do movimento", cor: "#0ea5e9" },
              { y: 202, w: 100, label: "Astronomia", desc: "Corpos celestes", cor: "#f97316" },
              { y: 250, w: 40, label: "Matemática", desc: "Base de todas", cor: "#dc2626" },
            ].map((row) => (
              <g key={row.label}>
                <rect x={(400 - row.w) / 2} y={row.y} width={row.w} height={42} rx={4} fill={row.cor} opacity={0.18} stroke={row.cor} strokeWidth={1.5} />
                <text x={200} y={row.y + 16} textAnchor="middle" fontSize={13} fontWeight={700} fill={row.cor}>{row.label}</text>
                <text x={200} y={row.y + 33} textAnchor="middle" fontSize={10} fill="#4b5563">{row.desc}</text>
              </g>
            ))}
            <text x={200} y={275} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">base ↑ complexidade crescente</text>
          </svg>
          <figcaption>Hierarquia das ciências segundo Comte: da Matemática (mais simples) à Sociologia (mais complexa e última a se consolidar).</figcaption>
        </figure>

        <p>
          Ao colocar a <strong>Sociologia no topo</strong> da hierarquia, Comte afirmava que ela
          era a mais importante das ciências, pois estudava o fenômeno mais complexo de todos:
          a sociedade humana. Ele inicialmente chamou a disciplina de <strong>"Física Social"</strong>
          antes de adotar o neologismo "Sociologia" (combinando o latim <em>socius</em> e o
          grego <em>logos</em>).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Legado no Brasil</span>
        <h2>4. O Positivismo no Brasil: "Ordem e Progresso"</h2>
        <p>
          O Positivismo exerceu uma influência enorme no Brasil, especialmente sobre os militares
          e a intelectualidade republicana do final do século XIX. Os positivistas brasileiros,
          liderados por <strong>Benjamin Constant</strong> e o <strong>Apostolado Positivista</strong>
          (com Teixeira Mendes e Miguel Lemos), defendiam:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🇧🇷</span>
            <h3>"Ordem e Progresso"</h3>
            <p>As palavras na bandeira são um resumo da filosofia de Comte: "O amor por princípio, a ordem por base, o progresso por fim." A bandeira republicana de 1889 incorporou o lema positivista.</p>
          </div>
          <div className="lesson-card">
            <span>⚔️</span>
            <h3>Militares positivistas</h3>
            <p>Muitos oficiais que proclamaram a República (1889) eram positivistas. Viam os militares como os "guardiões da ordem" — uma tecnocracia armada capaz de conduzir o progresso.</p>
          </div>
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Abolicionismo e indigenismo</h3>
            <p>O Apostolado Positivista foi contrário à escravidão e apoiou a criação do SPI (Serviço de Proteção ao Índio), embora com uma visão paternalista e evolucionista dos povos indígenas.</p>
          </div>
          <div className="lesson-card">
            <span>📚</span>
            <h3>Educação laica e técnica</h3>
            <p>Os positivistas defendiam uma educação pública, laica e voltada para as ciências — em oposição ao ensino religioso dominante. Influenciaram reformas educacionais da Primeira República.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Crítica ao Positivismo</h3>
          <p>
            O Positivismo foi criticado por seu <strong>evolucionismo social</strong> — a ideia de
            que todas as sociedades seguiriam o mesmo caminho linear —, por seu conservadorismo
            político (ordem antes de tudo) e por excluir o conflito e a contradição da análise social.
            Marx, especificamente, criticou o positivismo por ocultar as relações de poder e
            naturalizá-las como "leis científicas".
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Física Social</span>
        <h2>5. Estática e Dinâmica Social: a Física Social de Comte</h2>
        <p>
          Comte dividiu sua "Física Social" — nome original da Sociologia — em dois ramos
          complementares. A <strong>Sociologia Estática</strong> estuda a ordem social: as
          condições de coexistência e harmonia das partes da sociedade (família, linguagem,
          religião, propriedade, divisão do trabalho). Já a <strong>Sociologia Dinâmica</strong>
          estuda o progresso: a sequência das transformações sociais ao longo do tempo,
          que Comte identifica com a marcha dos três estados.
        </p>
        <p>
          A metáfora com a Física não era acidental: assim como a Física distingue estática
          (forças em equilíbrio) e dinâmica (forças em movimento), Comte queria dar à
          Sociologia o mesmo rigor científico. Para ele, a Estática respondia à pergunta
          "como a sociedade se mantém coesa?" e a Dinâmica, "como ela evolui?". As duas
          dimensões são inseparáveis: sem ordem, não há progresso; sem progresso, a ordem
          se torna estagnação.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>Foco</th>
                <th>Objeto de estudo</th>
                <th>Pergunta central</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Estática Social</strong></td>
                <td>Ordem e coesão</td>
                <td>Família, linguagem, religião, propriedade, divisão do trabalho</td>
                <td>Como a sociedade se mantém coesa e integrada?</td>
              </tr>
              <tr>
                <td><strong>Dinâmica Social</strong></td>
                <td>Progresso e mudança</td>
                <td>Evolução histórica das civilizações; transição entre os três estados</td>
                <td>Como a sociedade avança e se transforma ao longo do tempo?</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>A família como célula social</h3>
          <p>
            Para Comte, a família era a unidade fundamental da Estática Social — a "escola
            moral" onde o indivíduo aprende a subordinar seus interesses aos do grupo. Isso
            o levou a posições conservadoras: opôs-se ao divórcio e às mudanças no papel
            das mulheres, vendo na família tradicional o fundamento da ordem social.
            Essa tensão entre rigor científico e conservadorismo moral é uma das principais
            críticas ao legado de Comte.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Método Científico</span>
        <h2>6. O Método Positivo: Observação, Experimentação, Comparação e História</h2>
        <p>
          Comte defendia que a Sociologia deveria usar os mesmos métodos das ciências naturais,
          adaptados à complexidade do objeto social. Em <em>Curso de Filosofia Positiva</em>
          (1830–1842), identificou quatro métodos fundamentais que a Física Social deveria
          empregar. Cada um tem alcance e limitações específicas na investigação da vida social.
        </p>
        <p>
          A ênfase na pluralidade metodológica era uma resposta ao desafio do objeto sociológico:
          a sociedade não pode ser colocada num tubo de ensaio. Por isso, a experimentação
          direta tem papel limitado; a comparação entre sociedades e a análise histórica
          ganham centralidade. Esse pluralismo metodológico influenciou diretamente Durkheim,
          que sistematizaria os métodos sociológicos em <em>As Regras do Método Sociológico</em> (1895).
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👁️</span>
            <h3>Observação</h3>
            <p>
              Coleta direta de dados sobre fenômenos sociais. Deve ser guiada por uma teoria
              prévia — "sem teoria, os fatos são mudos". É o método mais básico, mas exige
              que o observador neutralize seus preconceitos culturais.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Experimentação</h3>
            <p>
              Difícil de aplicar diretamente à sociedade (não se experimenta com povos).
              Comte propôs a análise de "experimentos naturais": crises sociais, guerras e
              revoluções que perturbam a ordem e revelam mecanismos causais ocultos.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Comparação</h3>
            <p>
              Comparar sociedades contemporâneas em diferentes estágios de desenvolvimento.
              Permite identificar leis gerais da evolução social, controlando variáveis ao
              examinar grupos humanos com contextos distintos.
            </p>
          </div>
          <div className="lesson-card">
            <span>📜</span>
            <h3>Método Histórico</h3>
            <p>
              O mais importante para Comte: analisar a sucessão das fases históricas da
              humanidade. A história revela a lei do progresso; comparar épocas permite
              identificar a direção necessária da evolução social.
            </p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Confronto Teórico</span>
        <h2>7. Sociologia Positivista vs. Sociologia Crítica</h2>
        <p>
          O positivismo de Comte e o materialismo histórico de Marx representam duas visões
          radicalmente opostas sobre a sociedade, seu funcionamento e possibilidade de
          transformação. Essa oposição está na raiz de todos os debates teóricos da
          Sociologia moderna. Compreendê-la é essencial para responder às questões do
          ENEM que pedem distinção entre as correntes.
        </p>
        <p>
          A diferença mais profunda não é apenas metodológica, mas política: Comte queria
          <em> reorganizar</em> a sociedade de forma ordenada e gradual, sob liderança científica.
          Marx queria <em>transformá-la radicalmente</em>, por meio da luta de classes e da
          superação do capitalismo. Para um, a ordem é a precondição do progresso; para o
          outro, a ordem existente é o obstáculo ao verdadeiro progresso humano.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>Comte (Positivismo)</th>
                <th>Marx (Materialismo Histórico)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Visão da sociedade</strong></td>
                <td>Organismo em equilíbrio que tende ao progresso gradual</td>
                <td>Arena de conflito entre classes com interesses opostos</td>
              </tr>
              <tr>
                <td><strong>Motor da história</strong></td>
                <td>Evolução do conhecimento (estados teológico → positivo)</td>
                <td>Luta de classes e contradições do modo de produção</td>
              </tr>
              <tr>
                <td><strong>Conflito social</strong></td>
                <td>Patológico, resultado de transição entre estados; deve ser eliminado</td>
                <td>Normal e necessário; é o motor da mudança histórica</td>
              </tr>
              <tr>
                <td><strong>Papel do Estado</strong></td>
                <td>Garantir ordem; tecnocracia científica administra o progresso</td>
                <td>Instrumento de dominação da classe burguesa; deve ser superado</td>
              </tr>
              <tr>
                <td><strong>Solução para desigualdade</strong></td>
                <td>Reorganização racional da sociedade por cientistas e industriais</td>
                <td>Revolução e abolição da propriedade privada dos meios de produção</td>
              </tr>
              <tr>
                <td><strong>Visão do capitalismo</strong></td>
                <td>Sistema racional a ser aperfeiçoado, não substituído</td>
                <td>Sistema de exploração a ser superado historicamente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Educação</span>
        <h2>8. O Positivismo e a Educação Brasileira</h2>
        <p>
          A influência do positivismo na educação brasileira foi profunda e duradoura.
          <strong> Benjamin Constant</strong>, ministro da Instrução Pública na República
          recém-proclamada, conduziu a <strong>Reforma Benjamim Constant de 1890</strong>,
          que reorganizou o sistema de ensino nacional com base nos princípios positivistas:
          ensino laico, enciclopédico e centrado nas ciências naturais e matemáticas.
          A reforma introduziu obrigatoriamente no currículo disciplinas como Astronomia,
          Física, Química e Biologia — a hierarquia das ciências de Comte transposta para
          a sala de aula.
        </p>
        <p>
          O legado positivista na educação teve dois lados. Positivo: laicização do ensino
          público (antes dominado pela Igreja), valorização das ciências naturais, criação
          de escolas técnicas e politécnicas. Negativo: o modelo enciclopédico fragmentado
          em disciplinas isoladas (herança da hierarquia comtiana) sobreviveu como traço
          estrutural do currículo brasileiro até hoje, dificultando a interdisciplinaridade
          que o próprio ENEM busca superar.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 680 100" width="680" height="100" aria-label="Linha do tempo do positivismo na educação brasileira">
            <line x1={40} y1={50} x2={640} y2={50} stroke="#6b7280" strokeWidth={2} />
            <polygon points="640,44 655,50 640,56" fill="#6b7280" />
            {[
              { x: 80, year: "1889", label: "República" },
              { x: 200, year: "1890", label: "Reforma B.Constant" },
              { x: 330, year: "1901", label: "Código Epitácio" },
              { x: 460, year: "1911", label: "Reforma Rivadávia" },
              { x: 590, year: "1930", label: "Revolução / MEC" },
            ].map((p) => (
              <g key={p.year}>
                <circle cx={p.x} cy={50} r={6} fill="#7c3aed" />
                <text x={p.x} y={32} textAnchor="middle" fontSize={11} fontWeight={700} fill="#4c1d95">{p.year}</text>
                <text x={p.x} y={76} textAnchor="middle" fontSize={10} fill="#374151">{p.label}</text>
              </g>
            ))}
          </svg>
          <figcaption>Marcos do positivismo na educação brasileira entre a Proclamação da República e a Era Vargas.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <h3>Escola Politécnica e ensino técnico</h3>
          <p>
            A ênfase positivista nas ciências aplicadas impulsionou a criação de escolas
            politécnicas e institutos técnicos no período republicano. A Escola Politécnica
            do Rio de Janeiro (1874, ampliada na República) e a Escola de Minas de Ouro
            Preto (1876) são exemplos de como o positivismo moldou a formação de engenheiros
            e técnicos que deveriam liderar o "progresso" do país — o papel de tecnocracia
            científica que Comte reservava à elite intelectual.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Herança</span>
        <h2>9. Neopositivismo e Positivismo Lógico: o Círculo de Viena</h2>
        <p>
          O Positivismo de Comte inspirou, no século XX, uma versão mais rigorosa chamada
          <strong> Positivismo Lógico</strong> (ou Neopositivismo), desenvolvida pelo
          <strong> Círculo de Viena</strong> — grupo de filósofos e cientistas austríacos
          reunidos em torno de Moritz Schlick (1920s–1930s). Figuras centrais incluem
          <strong> Rudolf Carnap</strong>, <strong>Otto Neurath</strong> e o influente
          <strong> Ludwig Wittgenstein</strong> (cujo <em>Tractatus Logico-Philosophicus</em>,
          1921, serviu de inspiração inicial).
        </p>
        <p>
          O princípio fundamental do neopositivismo é o <strong>verificacionismo</strong>:
          uma proposição só tem significado científico se puder ser verificada empiricamente
          (por observação ou experiência). Proposições metafísicas ("Deus existe", "a alma
          é imortal") e éticas ("a tortura é errada") não são falsas — são simplesmente
          sem sentido científico, pois não podem ser verificadas. Isso separou radicalmente
          ciência de filosofia, ética e religião.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Positivismo (Comte)</th>
                <th>Positivismo Lógico (Círculo de Viena)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Critério de cientificidade</strong></td>
                <td>Observação dos fenômenos e identificação de leis</td>
                <td>Verificabilidade empírica das proposições (verificacionismo)</td>
              </tr>
              <tr>
                <td><strong>Papel da lógica</strong></td>
                <td>Secundário — foco na observação social</td>
                <td>Central — lógica formal como instrumento de análise</td>
              </tr>
              <tr>
                <td><strong>Metafísica</strong></td>
                <td>Superada pelo estado positivo; improdutiva</td>
                <td>Sem sentido — proposições metafísicas são cognitivamente vazias</td>
              </tr>
              <tr>
                <td><strong>Ética e valores</strong></td>
                <td>Podem ser estudados positivamente (Religião da Humanidade)</td>
                <td>Fora da ciência — enunciados éticos são expressões emocionais, não fatos</td>
              </tr>
              <tr>
                <td><strong>Influência posterior</strong></td>
                <td>Durkheim, Spencer, sociologia americana funcionalista</td>
                <td>Filosofia analítica, Karl Popper (falsificacionismo como crítica)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Para o ENEM</span>
        <h2>10. Comte no ENEM: Palavras-chave, Armadilhas e Estratégia</h2>
        <p>
          O positivismo de Comte aparece no ENEM principalmente em questões sobre a origem
          da Sociologia, a influência do pensamento científico na política brasileira e
          a oposição entre visões conservadoras e críticas da sociedade. As questões
          raramente pedem memorização de datas; quase sempre exigem a aplicação de
          conceitos a situações concretas.
        </p>
        <p>
          A chave para acertar questões sobre Comte é dominar a <strong>Lei dos Três Estados</strong>
          e o <strong>lema "Ordem e Progresso"</strong>, sabendo conectá-los à história
          do Brasil republicano. Além disso, é fundamental não confundir Comte com Durkheim
          (que sistematizou a Sociologia) nem com Spencer (que aplicou o evolucionismo
          darwiniano à sociedade — o "darwinismo social").
        </p>
        <div className="lesson-highlight">
          <h3>Palavras-chave que identificam Comte numa questão</h3>
          <p>
            "Lei dos Três Estados" • "Positivismo" • "Ordem e Progresso" • "Física Social"
            • "Religião da Humanidade" • "Estado Positivo" • "Hierarquia das ciências"
            • "Estática e Dinâmica Social" • "Apostolado Positivista" • "Benjamin Constant"
            • "Tecnocracia" • "Ciência como guia da política"
          </p>
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Comte ≠ Durkheim</h3>
            <p>Comte fundou o Positivismo e criou o nome "Sociologia". Durkheim foi quem a consolidou como ciência autônoma com método próprio (fato social). São autores distintos com projetos diferentes.</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Positivismo ≠ progressismo</h3>
            <p>Apesar da palavra "progresso", o positivismo comtiano é conservador: quer mudança gradual e ordenada, sem conflitos ou revoluções. "Ordem" vem antes de "Progresso" — literalmente na bandeira.</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Comte ≠ Spencer</h3>
            <p>Herbert Spencer aplicou o darwinismo à sociedade ("sobrevivência do mais apto"). Comte nunca usou Darwin. Não confundir positivismo comtiano com darwinismo social spenceriano.</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>"Religião da Humanidade"</h3>
            <p>Muitos alunos acham que o positivismo é necessariamente anti-religioso. Comte criou uma "Religião da Humanidade" com santos, calendário e rituais — o positivismo tinha um lado quase místico.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="A Lei dos Três Estados"
          statement={
            <p>
              Segundo a Lei dos Três Estados de Auguste Comte, toda sociedade percorre três estágios
              evolutivos. Qual é a ordem correta desses estágios?
            </p>
          }
          options={[
            { letter: "A", text: "Positivo → Metafísico → Teológico." },
            { letter: "B", text: "Metafísico → Teológico → Positivo." },
            { letter: "C", text: "Teológico → Metafísico → Positivo.", correct: true },
            { letter: "D", text: "Positivo → Teológico → Metafísico." },
            { letter: "E", text: "Teológico → Positivo → Metafísico." },
          ]}
          resolution={
            <p>
              Para Comte, a humanidade parte do <strong>teológico</strong> (explicações sobrenaturais),
              avança para o <strong>metafísico</strong> (explicações filosóficas abstratas) e culmina
              no <strong>positivo</strong> (explicações científicas verificáveis). Essa sequência
              é a "Lei dos Três Estados".
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Positivismo na bandeira brasileira"
          statement={
            <p>
              As palavras "Ordem e Progresso" na bandeira do Brasil têm origem direta no pensamento
              de Auguste Comte. Qual frase do próprio Comte inspirou o lema?
            </p>
          }
          options={[
            { letter: "A", text: "\"A ciência serve ao Estado, e o Estado serve à ciência.\"" },
            { letter: "B", text: "\"O amor por princípio, a ordem por base, o progresso por fim.\"", correct: true },
            { letter: "C", text: "\"A liberdade, a igualdade e a fraternidade são os fundamentos do progresso social.\"" },
            { letter: "D", text: "\"Toda a realidade pode ser reduzida a leis matemáticas verificáveis.\"" },
            { letter: "E", text: "\"O progresso exige a superação da ordem estabelecida por meio da revolução.\"" },
          ]}
          resolution={
            <p>
              A frase completa de Comte é: <em>"O amor por princípio, a ordem por base, o
              progresso por fim."</em> Os positivistas brasileiros que proclamaram a República
              em 1889 sintetizaram essa ideia em "Ordem e Progresso", inscrito na bandeira
              nacional criada naquele mesmo ano.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Sociologia no topo da hierarquia"
          statement={
            <p>
              Para Comte, qual era o motivo de a Sociologia ocupar o topo de sua hierarquia das ciências?
            </p>
          }
          options={[
            { letter: "A", text: "Porque a Sociologia é a mais antiga das ciências, tendo surgido na Grécia Antiga." },
            { letter: "B", text: "Porque a Sociologia estuda os fenômenos mais simples e fáceis de mensurar." },
            { letter: "C", text: "Porque a Sociologia depende e sintetiza todas as outras ciências para estudar o fenômeno mais complexo: a sociedade.", correct: true },
            { letter: "D", text: "Porque a Sociologia é a mais exata das ciências, usando apenas métodos matemáticos." },
            { letter: "E", text: "Porque a Sociologia foi a primeira a aplicar o método positivo de investigação." },
          ]}
          resolution={
            <p>
              Comte organizou as ciências pela complexidade crescente do objeto: a Matemática
              estuda o mais simples (quantidade), enquanto a Sociologia estuda o mais complexo
              (a vida social humana). Por isso ela vem ao topo: depende de todas as outras e
              representa o ponto culminante do conhecimento científico.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Crítica marxista ao Positivismo"
          statement={
            <p>
              Karl Marx criticou o Positivismo de Comte por tratar as relações sociais como "leis
              naturais" imutáveis, semelhantes às leis da física. Essa crítica aponta para qual
              limitação fundamental do positivismo?
            </p>
          }
          options={[
            { letter: "A", text: "O Positivismo ignorava a importância da religião na coesão social." },
            { letter: "B", text: "O Positivismo defendia a revolução social como caminho para o progresso." },
            { letter: "C", text: "O Positivismo naturalizava e legitimava as desigualdades sociais ao tratá-las como inevitáveis, ocultando as relações de poder e exploração.", correct: true },
            { letter: "D", text: "O Positivismo era excessivamente abstrato e metafísico, ignorando os dados empíricos." },
            { letter: "E", text: "O Positivismo privilegiava a análise das ações individuais em detrimento das estruturas sociais." },
          ]}
          resolution={
            <p>
              Para Marx, o Positivismo era uma <strong>ideologia conservadora</strong>: ao tratar as
              relações sociais como leis científicas naturais, legitimava a exploração capitalista
              como se fosse algo inevitável, tal como a gravidade. A crítica de Marx era que a
              Sociologia deveria revelar as contradições e os conflitos de classe que o Positivismo
              preferia ignorar em nome da "ordem".
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Positivismo militar e República brasileira"
          statement={
            <p>
              <em>"O Apostolado Positivista do Brasil, liderado por Teixeira Mendes e Miguel Lemos,
              influenciou diretamente os militares que proclamaram a República em 1889, defendendo
              a separação entre Igreja e Estado, a educação laica e a ideia de que os militares
              seriam os guardiões da ordem e do progresso nacional."</em> Com base nesse trecho,
              é correto afirmar que:
            </p>
          }
          options={[
            { letter: "A", text: "O Positivismo no Brasil foi essencialmente uma corrente revolucionária que defendia a luta de classes." },
            { letter: "B", text: "Os positivistas brasileiros rejeitavam qualquer forma de governo autoritário ou tecnocrático." },
            { letter: "C", text: "O Positivismo influenciou a República brasileira com a defesa de uma ordem científica e laica, mas com viés elitista e tecnocrático.", correct: true },
            { letter: "D", text: "A influência positivista no Brasil se limitou ao campo da educação, sem impacto político." },
            { letter: "E", text: "Os militares positivistas defendiam a plena democracia popular como forma de atingir o progresso." },
          ]}
          resolution={
            <p>
              O Positivismo brasileiro tinha duas faces: progressista (laicidade, educação, abolição)
              e conservadora (a ordem como precondição do progresso, o papel tutelar dos militares).
              Essa tensão explica como o positivismo foi invocado tanto por reformistas quanto por
              golpistas ao longo da história brasileira — uma herança intelectual ambígua.
            </p>
          }
        />
      </section>
    </article>
  );
}
