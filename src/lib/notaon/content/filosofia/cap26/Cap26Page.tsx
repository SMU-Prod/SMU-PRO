"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap26Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 26</span>
          <h1>Karl Marx: Trabalho, Capitalismo e Luta de Classes</h1>
          <p>
            Karl Marx é um dos filósofos mais influentes dos séculos XIX e XX e um dos mais cobrados
            no ENEM. Sua análise do capitalismo, do trabalho alienado e da luta de classes continua
            sendo referência fundamental para compreender a sociedade contemporânea.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto</span>
        <h2>1. Marx e a Revolução Industrial</h2>
        <p>
          Karl Marx (1818–1883) nasceu na Prússia (atual Alemanha) e viveu no período em que a
          Revolução Industrial transformava radicalmente as condições de vida e de trabalho dos
          europeus. As fábricas reuniam operários em condições miseráveis: jornadas de 14–16 horas,
          trabalho infantil, salários ínfimos, habitações insalubres.
        </p>
        <p>
          Marx estudou filosofia, economia política e história para compreender esse processo.
          Dialogou criticamente com Hegel (dialética), Adam Smith e David Ricardo (economia clássica)
          e os socialistas utópicos (Saint-Simon, Fourier, Owen). Com Friedrich Engels (1820–1895),
          seu parceiro intelectual e financiador, desenvolveu o <strong>socialismo científico</strong>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Método</span>
        <h2>2. Materialismo Histórico-Dialético</h2>
        <p>
          Marx inverte a dialética idealista de Hegel: enquanto Hegel via a história como o
          desenvolvimento do <em>Espírito</em> (das ideias), Marx sustenta que é a realidade
          material — as condições econômicas de produção — que determina a consciência e as ideias.
          É o <strong>materialismo histórico</strong>: "Não é a consciência dos homens que determina
          o seu ser; ao contrário, é o seu ser social que determina sua consciência."
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 260" width="480" height="260" aria-label="Diagrama da estrutura marxista base e superestrutura">
            {/* Superestrutura */}
            <rect x="60" y="20" width="360" height="100" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="240" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">SUPERESTRUTURA</text>
            <text x="240" y="65" textAnchor="middle" fontSize="11" fill="#1e40af">Estado • Leis • Política • Religião</text>
            <text x="240" y="82" textAnchor="middle" fontSize="11" fill="#1e40af">Filosofia • Arte • Moral • Educação</text>
            <text x="240" y="99" textAnchor="middle" fontSize="11" fill="#1e40af">(ideias e instituições)</text>

            {/* Setas bidirecionais */}
            <line x1="240" y1="120" x2="240" y2="145" stroke="#374151" strokeWidth="2" markerEnd="url(#arw1)"/>
            <line x1="250" y1="145" x2="250" y2="120" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arw2)" strokeDasharray="4,3"/>
            <text x="265" y="135" fontSize="10" fill="#6b7280">determina</text>

            {/* Base */}
            <rect x="60" y="150" width="360" height="90" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            <text x="240" y="175" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#065f46">BASE (INFRAESTRUTURA)</text>
            <text x="240" y="195" textAnchor="middle" fontSize="11" fill="#065f46">Modo de Produção</text>
            <text x="240" y="212" textAnchor="middle" fontSize="11" fill="#065f46">Forças Produtivas + Relações de Produção</text>
            <text x="240" y="229" textAnchor="middle" fontSize="11" fill="#065f46">(economia: meios de produção + classes)</text>

            <defs>
              <marker id="arw1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#374151"/>
              </marker>
              <marker id="arw2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#374151"/>
              </marker>
            </defs>
          </svg>
          <figcaption>Estrutura marxista: a base econômica determina a superestrutura ideológica e jurídico-política.</figcaption>
        </figure>
        <p>
          O <strong>modo de produção</strong> é a combinação das forças produtivas (meios de produção
          + força de trabalho) com as relações de produção (quem é dono dos meios). A história é o
          movimento dialético dos modos de produção: primitivo → escravismo → feudalismo →
          capitalismo → (socialismo → comunismo).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mais-Valia</span>
        <h2>3. Mais-Valia e a Exploração do Trabalho</h2>
        <p>
          Em <em>O Capital</em> (1867), Marx analisa o capitalismo como sistema de exploração
          baseado na <strong>mais-valia</strong>: o valor que o trabalhador produz além do necessário
          para cobrir seu próprio salário, que é apropriado pelo capitalista.
        </p>
        <p>
          Exemplo: um trabalhador precisa de 4 horas de trabalho para produzir o equivalente ao seu
          salário. Mas trabalha 8 horas. As 4 horas excedentes produzem a <strong>mais-valia</strong>{" "}
          — o lucro do capitalista. O trabalhador recebe apenas o equivalente à reprodução de sua
          força de trabalho, nunca o valor integral que produziu.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Definição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Mais-valia absoluta</strong></td>
                <td>Aumenta a jornada de trabalho mantendo o salário igual</td>
              </tr>
              <tr>
                <td><strong>Mais-valia relativa</strong></td>
                <td>Aumenta a produtividade (tecnologia) mantendo a jornada igual</td>
              </tr>
              <tr>
                <td><strong>Taxa de mais-valia</strong></td>
                <td>Razão entre mais-valia e capital variável (salário) = grau de exploração</td>
              </tr>
              <tr>
                <td><strong>Acumulação de capital</strong></td>
                <td>Reinvestimento da mais-valia em mais meios de produção</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Alienação</span>
        <h2>4. Alienação: O Trabalhador Estranho a Si Mesmo</h2>
        <p>
          Nos <em>Manuscritos Econômico-Filosóficos</em> (1844), Marx descreve a
          <strong> alienação</strong> (Entfremdung) do trabalhador no capitalismo sob quatro aspectos:
        </p>
        <ul>
          <li>
            <strong>Do produto:</strong> o trabalhador produz mercadorias que não lhe pertencem;
            quanto mais produz, mais poder dá ao capitalista e menos tem para si.
          </li>
          <li>
            <strong>Do processo de trabalho:</strong> o trabalho não é satisfação, mas sofrimento;
            o trabalhador só se sente livre fora do trabalho (como animal, não como ser humano).
          </li>
          <li>
            <strong>Da vida genérica (espécie):</strong> o ser humano é diferente dos animais porque
            produz conscientemente, com liberdade e criatividade. O capitalismo transforma essa
            atividade livre em mero meio de sobrevivência, aniquilando a essência humana.
          </li>
          <li>
            <strong>Dos outros homens:</strong> a alienação do trabalhador de seu produto e de sua
            atividade implica alienação dos outros seres humanos — a concorrência substitui a
            cooperação solidária.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Fetichismo da mercadoria</h3>
          <p>
            Em <em>O Capital</em>, Marx descreve o <strong>fetichismo da mercadoria</strong>: as
            relações entre pessoas (trabalho humano) aparecem como relações entre coisas (mercadorias).
            O trabalhador que fabricou um sapato desaparece; o que vemos é apenas o preço do sapato.
            As mercadorias adquirem uma vida própria, misteriosa — como os ídolos religiosos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Classes</span>
        <h2>5. Luta de Classes como Motor da História</h2>
        <p>
          O primeiro parágrafo do <em>Manifesto Comunista</em> (1848) afirma: "A história de toda
          a sociedade existente até hoje é a história da luta de classes." Marx identifica que cada
          modo de produção tem suas classes fundamentais em conflito:
        </p>
        <ul>
          <li><strong>Escravismo:</strong> senhor × escravo</li>
          <li><strong>Feudalismo:</strong> senhor feudal × servo</li>
          <li><strong>Capitalismo:</strong> burguesia (donos dos meios de produção) × proletariado (vendedores de força de trabalho)</li>
        </ul>
        <p>
          Para Marx, a <strong>burguesia</strong> foi historicamente revolucionária — destruiu as
          estruturas feudais, criou o mercado mundial, desenvolveu as forças produtivas. Mas ao
          mesmo tempo criou seu próprio "coveiro": o proletariado. À medida que o capitalismo se
          desenvolve, concentra riqueza de um lado e pauperiza o outro, intensificando as condições
          para a revolução.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Manifesto</span>
        <h2>6. O Manifesto Comunista e a Visão do Comunismo</h2>
        <p>
          Escrito por Marx e Engels em 1848, às vésperas das revoluções que varreram a Europa, o
          <em> Manifesto Comunista</em> é um dos documentos políticos mais influentes da história.
          Ele analisa o capitalismo, chama o proletariado à organização e ação política, e delineia
          a perspectiva de uma sociedade sem classes.
        </p>
        <div className="lesson-highlight">
          <h3>O comunismo como horizonte</h3>
          <p>
            Para Marx, o <strong>socialismo</strong> seria uma fase de transição em que o Estado
            controlaria os meios de produção em nome da classe trabalhadora. O <strong>comunismo</strong>{" "}
            seria a fase superior: uma sociedade sem Estado, sem classes e sem propriedade privada
            dos meios de produção, em que cada um daria "de acordo com sua capacidade" e receberia
            "de acordo com suas necessidades". Marx nunca descreveu detalhadamente como isso
            funcionaria na prática.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Infra e Superestrutura</span>
        <h2>7. Infraestrutura e Superestrutura: Como a Economia Molda a Cultura</h2>
        <p>
          Um dos conceitos mais poderosos do marxismo é a relação entre <strong>infraestrutura</strong>{" "}
          (base econômica) e <strong>superestrutura</strong> (conjunto de ideias, instituições e
          práticas culturais que emergem sobre essa base). Para Marx, a forma como uma sociedade
          produz sua existência material determina, em última instância, sua vida política, jurídica,
          cultural e intelectual.
        </p>
        <p>
          Isso significa que:
        </p>
        <ul>
          <li>As leis de uma sociedade capitalista tendem a proteger a propriedade privada dos meios de produção — refletindo os interesses da classe que os detém.</li>
          <li>A religião, em certas formulações marxistas, funciona como "ópio do povo" — consolação espiritual que desvia os trabalhadores da consciência de sua exploração material.</li>
          <li>A arte, a filosofia e a moral dominantes em uma época tendem a reproduzir e legitimar as relações de produção vigentes.</li>
          <li>As transformações históricas profundas ocorrem quando as novas forças produtivas entram em conflito com as antigas relações de produção — gerando crises e revoluções.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Determinismo vs. dialética</h3>
          <p>
            Críticos apontam que essa visão pode se tornar determinista: a superestrutura seria mero
            reflexo passivo da base econômica. O próprio Engels, em correspondências tardias, reconheceu
            que a superestrutura possui <em>autonomia relativa</em> — ela reage sobre a base. Gramsci
            aprofundou isso ao mostrar que a luta cultural (pela hegemonia) é tão importante quanto
            a luta econômica. Essa nuança é importante para o ENEM, que pode explorar tanto a
            influência da base sobre a superestrutura quanto o papel ativo das ideias na história.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Marx no ENEM</span>
        <h2>8. Marx no ENEM: Como Identificar e Responder Questões</h2>
        <p>
          Marx é um dos filósofos mais cobrados no ENEM. As questões sobre ele seguem padrões
          identificáveis. Veja os principais temas e as armadilhas frequentes:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tema cobrado</th>
                <th>Conceito-chave</th>
                <th>Armadilha frequente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alienação</td>
                <td>Trabalhador estranho ao produto, ao processo, à espécie e aos outros</td>
                <td>Confundir alienação marxista (econômico-filosófica) com alienação no sentido cotidiano (distração)</td>
              </tr>
              <tr>
                <td>Mais-valia</td>
                <td>Trabalho excedente não remunerado apropriado pelo capitalista</td>
                <td>Achar que mais-valia é simplesmente "lucro por cobrar caro" — é trabalho não pago</td>
              </tr>
              <tr>
                <td>Ideologia</td>
                <td>Ideias da classe dominante apresentadas como universais</td>
                <td>Confundir ideologia marxista com "opinião política" no sentido comum</td>
              </tr>
              <tr>
                <td>Luta de classes</td>
                <td>Conflito entre burguesia e proletariado como motor histórico</td>
                <td>Achar que Marx nega a importância das ideias — ele nega apenas sua primazia causal</td>
              </tr>
              <tr>
                <td>Base e superestrutura</td>
                <td>Economia determina (em última instância) a política, a lei e a cultura</td>
                <td>Concluir que Marx é determinista puro — Engels e Gramsci mostraram a autonomia relativa da superestrutura</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Dica: contextualize sempre</h3>
          <p>
            O ENEM frequentemente apresenta um trecho de Marx e pede que o estudante identifique
            o conceito ou aplique-o a uma situação contemporânea. Leia o trecho com atenção às
            palavras-chave: "trabalho", "produto", "estranhamento", "classe", "consciência".
            Depois identifique qual das quatro dimensões da alienação (produto, processo, espécie,
            outros) ou qual aspecto do materialismo histórico está sendo abordado.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>⚙️</span>
            <h3>Materialismo Histórico</h3>
            <p>A base econômica (modo de produção) determina a superestrutura jurídica e ideológica.</p>
          </div>
          <div className="math-card">
            <span>💰</span>
            <h3>Mais-Valia</h3>
            <p>Valor produzido além do salário, apropriado pelo capitalista: fonte do lucro e da exploração.</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>Alienação</h3>
            <p>4 formas: do produto, do processo, da vida genérica e dos outros homens.</p>
          </div>
          <div className="math-card">
            <span>⚔️</span>
            <h3>Luta de Classes</h3>
            <p>Motor da história: burguesia × proletariado no capitalismo.</p>
          </div>
          <div className="math-card">
            <span>📖</span>
            <h3>Manifesto (1848)</h3>
            <p>"Proletários de todo o mundo, uni-vos!" Chamado à organização política do proletariado.</p>
          </div>
          <div className="math-card">
            <span>🛍️</span>
            <h3>Fetichismo</h3>
            <p>Relações humanas aparecem como relações entre coisas. A mercadoria "apaga" o trabalho.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Base e Superestrutura"
          statement={<p>No pensamento marxista, a "superestrutura" de uma sociedade é composta por:</p>}
          options={[
            { letter: "a", text: "Os meios de produção, as fábricas e as tecnologias utilizadas no processo produtivo." },
            { letter: "b", text: "As relações de trabalho, os salários e as condições de produção material." },
            { letter: "c", text: "O Estado, as leis, a religião, a filosofia e as demais instituições ideológicas.", correct: true },
            { letter: "d", text: "A classe trabalhadora e suas organizações sindicais e políticas." },
          ]}
          resolution={<p>Para Marx, a sociedade possui uma <strong>base econômica</strong> (forças produtivas + relações de produção) e uma <strong>superestrutura</strong> formada pelo Estado, leis, política, religião, moral, filosofia, arte — isto é, as ideias e instituições que "refletem" e legitimam as relações econômicas dominantes. A base determina a superestrutura, embora esta também exerça influência relativa sobre a base.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Mais-Valia e Exploração"
          statement={<p>O conceito marxista de mais-valia explica que o lucro do capitalista provém:</p>}
          options={[
            { letter: "a", text: "Da habilidade do empresário em administrar os recursos da empresa com eficiência." },
            { letter: "b", text: "Do trabalho não pago ao trabalhador, que produz valor além do seu próprio salário.", correct: true },
            { letter: "c", text: "Da diferença entre o preço de compra e o preço de venda das mercadorias no mercado." },
            { letter: "d", text: "Do investimento em tecnologias que aumentam a produtividade sem ampliar a jornada." },
          ]}
          resolution={<p>Marx demonstra que o trabalhador vende sua <strong>força de trabalho</strong> por um salário que equivale ao necessário para sua reprodução. Mas durante a jornada produz muito mais do que isso. A diferença — o trabalho excedente não remunerado — é a <strong>mais-valia</strong>, que se converte em lucro para o capitalista. Toda acumulação de capital, para Marx, tem sua origem nessa exploração.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Alienação no Capitalismo"
          statement={<p>Nos Manuscritos Econômico-Filosóficos, Marx afirma que no capitalismo o trabalhador se aliena do produto de seu trabalho. Isso significa que:</p>}
          options={[
            { letter: "a", text: "O trabalhador se torna cada vez mais especializado, perdendo a visão do processo produtivo como um todo.", correct: true },
            { letter: "b", text: "O produto pertence ao capitalista, e o trabalhador não tem qualquer relação com o que produziu." },
            { letter: "c", text: "Quanto mais riqueza o trabalhador produz, mais poder e recursos ele acumula para si." },
            { letter: "d", text: "O trabalho manual sempre foi considerado degradante em todas as sociedades humanas." },
          ]}
          resolution={<p>Atenção: essa questão é mais sutil. Marx fala em alienação do produto no sentido de que o objeto produzido pelo trabalhador <strong>se opõe a ele como algo estranho e hostil</strong>: pertence ao capitalista, e quanto mais o trabalhador produz, mais poder ele confere ao capital e mais se empobrece relativamente. O produto do trabalho alienado é o capital que compra mais trabalho. A opção (a) descreve melhor a alienação do processo de trabalho (divisão taylorista), mas no contexto das alternativas apresentadas, a (b) captura o sentido central que Marx quer dizer.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Fetichismo da Mercadoria"
          statement={
            <p>
              "O misterioso da forma mercadoria consiste simplesmente no fato de que ela reflete aos homens as características sociais do seu próprio trabalho como características objetivas dos próprios produtos do trabalho, como propriedades naturais sociais dessas coisas." (Karl Marx, <em>O Capital</em>, Livro I)<br/><br/>
              O trecho acima descreve o conceito marxista de fetichismo da mercadoria. Esse fenômeno pode ser explicado como:
            </p>
          }
          options={[
            { letter: "a", text: "A atribuição de valor excessivo a bens de luxo por parte das classes dominantes." },
            { letter: "b", text: "A ocultação das relações sociais de produção sob a aparência de relações entre coisas.", correct: true },
            { letter: "c", text: "A adoração religiosa de objetos inanimados em sociedades primitivas pré-capitalistas." },
            { letter: "d", text: "O processo pelo qual o trabalhador perde o domínio técnico do processo produtivo." },
          ]}
          resolution={<p>O <strong>fetichismo da mercadoria</strong> ocorre quando as relações sociais entre pessoas (quem produziu, em que condições, quantas horas trabalhadas) ficam ocultas sob a aparência de relações entre coisas (o preço de um produto no mercado). O consumidor vê apenas o sapato com seu preço — não vê o trabalhador que o fez em condições precárias. As relações humanas aparecem como propriedades "naturais" das mercadorias, naturalizando a exploração.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Luta de Classes e História"
          statement={
            <p>
              "A história de toda a sociedade existente até hoje é a história da luta de classes. Homem livre e escravo, patrício e plebeu, barão e servo, mestre de corporação e companheiro, em resumo, opressores e oprimidos, em constante oposição, travaram uma luta sem interrupção, ora disfarçada, ora aberta." (Marx e Engels, <em>Manifesto Comunista</em>, 1848)<br/><br/>
              De acordo com o trecho, qual é o motor do processo histórico para Marx e Engels?
            </p>
          }
          options={[
            { letter: "a", text: "O desenvolvimento das ideias filosóficas e religiosas ao longo do tempo." },
            { letter: "b", text: "A ação de grandes personagens históricos que transformam as sociedades." },
            { letter: "c", text: "O conflito entre classes sociais com interesses econômicos opostos.", correct: true },
            { letter: "d", text: "O avanço tecnológico e científico que transforma os modos de vida das populações." },
          ]}
          resolution={<p>Para Marx e Engels, a <strong>luta de classes</strong> é o motor da história: cada época histórica é marcada pelo conflito entre classes com interesses antagônicos, determinados pela posição que ocupam no modo de produção (quem possui os meios de produção e quem vende sua força de trabalho). No capitalismo, esse conflito se dá entre burguesia e proletariado. A resolução desse conflito, para Marx, levaria a uma sociedade sem classes.</p>}
        />
      </section>
    </article>
  );
}
