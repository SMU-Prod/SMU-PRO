"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap23Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Sociologia • Capítulo 23</span>
          <h1>Revolução Industrial, Fordismo, Taylorismo e Toyotismo</h1>
          <p>
            Da máquina a vapor ao robô colaborativo, o modo como o trabalho é organizado
            transforma profundamente a sociedade. Entender taylorismo, fordismo e toyotismo
            é compreender como o capitalismo industrializou corpos, tempos e mentes — e
            como essa lógica ainda molda o trabalho contemporâneo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Origem</span>
        <h2>1. Revolução Industrial: contexto e impactos sociais</h2>
        <p>
          A <strong>Revolução Industrial</strong> iniciou-se na Inglaterra por volta de 1760,
          impulsionada pela invenção da máquina a vapor (James Watt, 1769), pelo desenvolvimento
          das indústrias têxtil e siderúrgica e pela disponibilidade de carvão e ferro. Gerou
          uma ruptura sem precedentes nas relações de trabalho:
        </p>
        <ul>
          <li>Deslocamento de artesãos independentes para assalariados de fábricas</li>
          <li>Jornadas de 14 a 16 horas, trabalho infantil generalizado</li>
          <li>Crescimento acelerado de cidades industriais (Manchester, Birmingham)</li>
          <li>Formação do <strong>proletariado</strong> como classe social</li>
        </ul>
        <p>
          Friedrich Engels documentou as condições de vida da classe operária inglesa em{" "}
          <em>A Situação da Classe Trabalhadora na Inglaterra</em> (1845): habitações insalubres,
          alimentação precária, mortalidade infantil elevada e ausência de qualquer proteção social.
        </p>

        <div className="lesson-highlight">
          <h3>Luddismo: resistência à mecanização</h3>
          <p>
            O <strong>movimento ludita</strong> (1811–1816) foi uma forma de resistência de
            artesãos ingleses que destruíam máquinas por verem nelas a ameaça aos seus empregos.
            O termo "ludismo" hoje designa qualquer oposição ao progresso tecnológico, mas seu
            significado original era uma luta por condições dignas de trabalho.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Taylorismo</span>
        <h2>2. Taylorismo: a Administração Científica do Trabalho</h2>
        <p>
          Frederick Winslow Taylor (1856–1915) desenvolveu a chamada <strong>administração
          científica</strong>, descrita em <em>Princípios da Administração Científica</em> (1911).
          Seu objetivo era maximizar a eficiência produtiva eliminando os "movimentos
          desnecessários" do trabalhador.
        </p>
        <p>Princípios centrais do taylorismo:</p>
        <ul>
          <li>
            <strong>Estudo de tempos e movimentos:</strong> cada tarefa foi cronometrada
            e decomposta nos menores gestos possíveis.
          </li>
          <li>
            <strong>Separação entre concepção e execução:</strong> engenheiros pensam,
            operários executam — o trabalhador não precisa entender o processo, apenas
            cumprir sua tarefa fragmentada.
          </li>
          <li>
            <strong>Seleção científica do trabalhador:</strong> cada pessoa deve ser
            colocada na tarefa para a qual tem aptidão e treinada especificamente para ela.
          </li>
          <li>
            <strong>Incentivos salariais:</strong> pagamento por produção (piecework)
            para estimular ritmo acelerado.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Crítica sociológica ao taylorismo</h3>
          <p>
            O taylorismo promoveu a <strong>alienação</strong> do trabalhador ao máximo:
            o operário perde o controle sobre o processo de trabalho, torna-se apêndice da
            máquina e não reconhece seu produto como obra sua — exatamente o que Marx
            descreveu como estranhamento. Harry Braverman (<em>Trabalho e Capital Monopolista</em>,
            1974) demonstrou como o taylorismo degradou sistematicamente as qualificações
            dos trabalhadores.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fordismo</span>
        <h2>3. Fordismo: Produção em Massa e Consumo em Massa</h2>
        <p>
          Henry Ford aplicou os princípios tayloristas e acrescentou a inovação central da
          <strong> linha de montagem móvel</strong> (1913, fábrica de Highland Park, Detroit).
          O Modelo T, que levava 12 horas para ser montado artesanalmente, passou a ser
          produzido em 93 minutos.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 120" width="700" height="120" aria-label="Linha de montagem fordista">
            <rect x={0} y={55} width={700} height={18} fill="#e5e7eb" rx={4} />
            <text x={350} y={67} textAnchor="middle" fontSize={11} fill="#6b7280">esteira transportadora</text>
            {[
              { x: 60, icon: "🔩", label: "Chassis" },
              { x: 190, icon: "⚙️", label: "Motor" },
              { x: 320, icon: "🚗", label: "Carroceria" },
              { x: 450, icon: "🪟", label: "Acabamento" },
              { x: 580, icon: "✅", label: "Pronto" },
            ].map((s) => (
              <g key={s.label}>
                <rect x={s.x - 45} y={10} width={90} height={38} rx={8} fill="#0f4c81" opacity={0.12} stroke="#0f4c81" strokeWidth={1.2} />
                <text x={s.x} y={28} textAnchor="middle" fontSize={18}>{s.icon}</text>
                <text x={s.x} y={44} textAnchor="middle" fontSize={11} fontWeight={600} fill="#1f2937">{s.label}</text>
                <line x1={s.x} y1={48} x2={s.x} y2={55} stroke="#0f4c81" strokeWidth={1} />
              </g>
            ))}
            <polygon points="680,64 700,55 700,73" fill="#0f4c81" />
            <text x={350} y={108} textAnchor="middle" fontSize={12} fill="#4b5563" fontStyle="italic">trabalhadores fixos; produto se move até eles</text>
          </svg>
          <figcaption>Na linha de montagem fordista, o produto se move e cada operário repete uma única operação.</figcaption>
        </figure>

        <p>
          O <strong>"fordismo social"</strong> vai além da fábrica: Ford pagou US$ 5 por dia
          (o dobro da média) para que seus trabalhadores pudessem <em>comprar</em> os carros
          que fabricavam. Isso criou um modelo virtuoso de produção em massa + consumo em
          massa que sustentou o crescimento econômico ocidental do pós-guerra (os "Trinta
          Gloriosos", 1945–1975).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Toyotismo</span>
        <h2>4. Toyotismo: Produção Enxuta e Acumulação Flexível</h2>
        <p>
          O <strong>toyotismo</strong> (ou <em>lean production</em>) foi desenvolvido pela
          Toyota no Japão pós-guerra (Taiichi Ohno, anos 1950–1970) como resposta à escassez
          de recursos e ao mercado japonês fragmentado. Seus princípios são o oposto do fordismo:
        </p>
        <ul>
          <li>
            <strong>Just-in-time:</strong> produzir apenas o necessário, quando necessário,
            eliminando estoques. A produção é puxada pela demanda, não empurrada pela oferta.
          </li>
          <li>
            <strong>Kanban:</strong> sistema de cartões visuais para controlar o fluxo de
            produção e evitar excessos.
          </li>
          <li>
            <strong>Polivalência:</strong> o trabalhador opera várias máquinas e realiza
            diversas tarefas — o oposto da especialização taylorista.
          </li>
          <li>
            <strong>Qualidade total (TQC):</strong> responsabilidade pela qualidade
            distribuída entre todos os trabalhadores, não apenas inspetores.
          </li>
          <li>
            <strong>Terceirização:</strong> Toyota terceiriza etapas para fornecedores,
            transferindo risco e reduzindo custos fixos.
          </li>
        </ul>

        <div className="lesson-highlight">
          <h3>Toyotismo e precarização</h3>
          <p>
            A aparente autonomia do trabalhador toyotista esconde formas sofisticadas de
            controle: metas de equipe, pressão por qualidade e a lógica do "envolvimento"
            (o trabalhador deve "vestir a camisa"). Além disso, a terceirização transfere
            os riscos da produção para trabalhadores em condições mais precárias.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparativo</span>
        <h2>5. Tabela Comparativa: Taylorismo × Fordismo × Toyotismo</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Taylorismo</th>
                <th>Fordismo</th>
                <th>Toyotismo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Período</strong></td>
                <td>Final séc. XIX – início XX</td>
                <td>1913 – anos 1970</td>
                <td>Anos 1950 – presente</td>
              </tr>
              <tr>
                <td><strong>Lógica de produção</strong></td>
                <td>Eficiência por cronometria e fragmentação</td>
                <td>Produção em massa, padronização</td>
                <td>Produção enxuta, sob demanda</td>
              </tr>
              <tr>
                <td><strong>Trabalhador</strong></td>
                <td>Especializado em uma única tarefa</td>
                <td>Especializado e fixo na linha</td>
                <td>Polivalente, em equipes</td>
              </tr>
              <tr>
                <td><strong>Estoque</strong></td>
                <td>Elevado (produção empurrada)</td>
                <td>Elevado (produção em massa)</td>
                <td>Mínimo (just-in-time)</td>
              </tr>
              <tr>
                <td><strong>Produto</strong></td>
                <td>Variado (aplicado ao estudo do trabalho)</td>
                <td>Padronizado (Modelo T em uma cor)</td>
                <td>Diversificado e personalizável</td>
              </tr>
              <tr>
                <td><strong>Qualidade</strong></td>
                <td>Responsabilidade do inspetor</td>
                <td>Responsabilidade do inspetor</td>
                <td>Responsabilidade de todos (TQC)</td>
              </tr>
              <tr>
                <td><strong>Terceirização</strong></td>
                <td>Baixa</td>
                <td>Baixa (integração vertical)</td>
                <td>Alta (redes de fornecedores)</td>
              </tr>
              <tr>
                <td><strong>Referência</strong></td>
                <td>F. W. Taylor</td>
                <td>Henry Ford</td>
                <td>Taiichi Ohno / Toyota</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Movimento Operário</span>
        <h2>6. A Classe Operária e o Surgimento do Movimento Sindical</h2>
        <p>
          A Revolução Industrial não apenas transformou a produção — ela criou uma nova classe
          social: o <strong>proletariado</strong>. Friedrich Engels, em <em>A Situação da Classe
          Trabalhadora na Inglaterra</em> (1845), documentou as condições de vida dos operários
          de Manchester: jornadas de 14 a 16 horas, crianças de 5 anos trabalhando em minas,
          habitações sem saneamento e mortalidade infantil elevadíssima. Essas condições
          desumanas geraram resistência organizada.
        </p>
        <p>
          O <strong>movimento sindical</strong> surgiu como resposta coletiva à exploração
          industrial. Os primeiros sindicatos (trade unions) foram ilegais na Inglaterra
          até 1824; após sua legalização, cresceram rapidamente. A <strong>Primeira
          Internacional</strong> (Associação Internacional dos Trabalhadores, 1864), fundada
          com participação ativa de Marx, articulou movimentos operários de diferentes países
          na luta por direitos e pela transformação do capitalismo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Ano</th>
                <th>Evento</th>
                <th>Impacto para os trabalhadores</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1811–1816</td>
                <td>Movimento Ludita (Inglaterra)</td>
                <td>Destruição de máquinas como protesto contra a mecanização e perda de empregos</td>
              </tr>
              <tr>
                <td>1824</td>
                <td>Legalização dos sindicatos na Inglaterra</td>
                <td>Trabalhadores podem se organizar coletivamente e negociar salários</td>
              </tr>
              <tr>
                <td>1833</td>
                <td>Factory Act (Carta do Trabalho, Inglaterra)</td>
                <td>Proibição do trabalho de crianças abaixo de 9 anos; jornada máxima de 8h para menores</td>
              </tr>
              <tr>
                <td>1848</td>
                <td>Publicação do Manifesto Comunista (Marx e Engels)</td>
                <td>"Proletários de todos os países, uni-vos!" — base teórica para a organização operária internacional</td>
              </tr>
              <tr>
                <td>1864</td>
                <td>Primeira Internacional (AIT), Londres</td>
                <td>Primeira organização supranacional de trabalhadores; articulação de sindicatos europeus</td>
              </tr>
              <tr>
                <td>1886</td>
                <td>Haymarket (Chicago, EUA) — greve pelo dia de 8 horas</td>
                <td>Repressão violenta; mártires do movimento operário; origem do 1º de Maio como Dia do Trabalho</td>
              </tr>
              <tr>
                <td>1919</td>
                <td>Criação da OIT (Organização Internacional do Trabalho)</td>
                <td>Primeiro organismo internacional para regular o trabalho; jornada de 8h reconhecida globalmente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Welfare State</span>
        <h2>7. O Estado de Bem-Estar Social e o Fordismo Social</h2>
        <p>
          O <strong>Estado de Bem-Estar Social</strong> (Welfare State) foi o grande
          compromisso político do pós-guerra (1945–1975): o capital aceitou pagar salários
          mais altos e custear direitos sociais (saúde, educação, previdência) em troca de
          paz social e consumo de massa. Esse pacto, chamado de <strong>fordismo social</strong>,
          sustentou décadas de crescimento econômico nos países capitalistas avançados —
          o período ficou conhecido como os <strong>"Trinta Gloriosos"</strong> (Les Trente
          Glorieuses, expressão do economista Jean Fourastié).
        </p>
        <p>
          A ruptura veio em <strong>1973</strong>, com o choque do petróleo: o aumento
          abrupto dos preços do petróleo pela OPEP elevou os custos de produção industrial,
          comprimiu os lucros das empresas e desencadeou recessão e inflação simultâneas
          (estagflação). O fordismo rígido não conseguia responder às novas condições;
          abriu-se espaço para o toyotismo flexível e, politicamente, para o
          <strong> neoliberalismo</strong> de Thatcher e Reagan nos anos 1980.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 680 130" width="680" height="130" aria-label="Linha do tempo do Welfare State e crise do fordismo">
            <line x1={40} y1={65} x2={640} y2={65} stroke="#9ca3af" strokeWidth={2} />
            {[
              { x: 80, year: "1945", label: "Fim da 2ª Guerra", color: "#0ea5e9" },
              { x: 210, year: "1948", label: "Welfare State pleno\n(Reino Unido)", color: "#16a34a" },
              { x: 350, year: "1960s", label: "Auge fordista\n(pleno emprego)", color: "#16a34a" },
              { x: 490, year: "1973", label: "Choque do petróleo\n(crise fordista)", color: "#ef4444" },
              { x: 610, year: "1979–81", label: "Thatcher/Reagan\n(neoliberalismo)", color: "#f59e0b" },
            ].map((p) => (
              <g key={p.year}>
                <circle cx={p.x} cy={65} r={7} fill={p.color} />
                <line x1={p.x} y1={58} x2={p.x} y2={20} stroke={p.color} strokeWidth={1} strokeDasharray="3 2" />
                <text x={p.x} y={15} textAnchor="middle" fontSize={10} fontWeight={700} fill={p.color}>{p.year}</text>
                {p.label.split("\n").map((line, i) => (
                  <text key={i} x={p.x} y={88 + i * 14} textAnchor="middle" fontSize={9} fill="#374151">{line}</text>
                ))}
              </g>
            ))}
            <text x={340} y={125} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">Do pacto fordista ao neoliberalismo: 1945–1981</text>
          </svg>
          <figcaption>A era de ouro do capitalismo foi sustentada pelo fordismo social; a crise de 1973 encerrou esse ciclo.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <h3>O que é o Welfare State?</h3>
          <p>
            O Welfare State é um modelo em que o Estado assume a responsabilidade por garantir
            padrões mínimos de bem-estar aos cidadãos: saúde universal (NHS britânico, SUS
            brasileiro), educação pública gratuita, previdência social, seguro-desemprego e
            habitação social. Não é socialismo — a propriedade privada e o mercado continuam —
            mas representa um limite ao laissez-faire e uma forma de redistribuição parcial
            da riqueza produzida pelo capitalismo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Brasil Pós-1990</span>
        <h2>8. Reestruturação Produtiva no Brasil</h2>
        <p>
          O Brasil chegou ao fordismo tardiamente — as grandes montadoras instalaram-se no
          ABC paulista nos anos 1950 (Volkswagen, Ford, GM), consolidando um fordismo periférico
          com direitos trabalhistas mais frágeis do que os do mundo desenvolvido. Nos
          <strong> anos 1990</strong>, o processo de abertura econômica do governo Collor
          (1990–1992) e o Plano Real (1994) expuseram a indústria nacional à concorrência
          internacional, forçando uma reestruturação acelerada.
        </p>
        <p>
          As montadoras adotaram métodos toyotistas: equipes polivalentes, redução de estoques,
          terceirização em larga escala e tecnologia de automação. O resultado foi uma redução
          drástica do emprego industrial formal, especialmente no setor metalúrgico do ABC. O
          desemprego estrutural explodiu — a taxa de desemprego aberto no Brasil chegou a
          <strong> 20%</strong> em algumas regiões metropolitanas no final dos anos 1990,
          enquanto o trabalho informal crescia.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Indicador</th>
                <th>1990</th>
                <th>1995</th>
                <th>2000</th>
                <th>Tendência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Emprego industrial (milhões de postos formais)</td>
                <td>~7,5 mi</td>
                <td>~6,2 mi</td>
                <td>~5,8 mi</td>
                <td>↓ Queda acentuada</td>
              </tr>
              <tr>
                <td>Participação da indústria no PIB</td>
                <td>~32%</td>
                <td>~28%</td>
                <td>~27%</td>
                <td>↓ Desindustrialização</td>
              </tr>
              <tr>
                <td>Informalidade do trabalho</td>
                <td>~38%</td>
                <td>~43%</td>
                <td>~50%</td>
                <td>↑ Crescimento da informalidade</td>
              </tr>
              <tr>
                <td>Terceirização nas grandes empresas</td>
                <td>Baixa</td>
                <td>Crescente</td>
                <td>Alta</td>
                <td>↑ Expansão acelerada</td>
              </tr>
              <tr>
                <td>Importação de bens manufaturados</td>
                <td>Restrita (tarifas altas)</td>
                <td>Liberalizada</td>
                <td>Alta</td>
                <td>↑ Concorrência importada</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>O ABC paulista e o "novo sindicalismo"</h3>
          <p>
            O <strong>novo sindicalismo</strong>, que emergiu nas greves do ABC em 1978–1980
            e gerou o PT e a CUT (Central Única dos Trabalhadores), era o símbolo do
            operariado fordista brasileiro. Com a reestruturação dos anos 1990, as bases
            industriais desse sindicalismo se enfraqueceram. O movimento operário precisou
            se adaptar — mas a fragmentação do trabalho tornava cada vez mais difícil
            a organização coletiva clássica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Futuro do Trabalho</span>
        <h2>9. Automação, Robótica e Trabalho no Século XXI</h2>
        <p>
          A <strong>4ª Revolução Industrial</strong> (Klaus Schwab, Fórum Econômico Mundial)
          é caracterizada pela convergência de tecnologias digitais, físicas e biológicas:
          inteligência artificial, robótica avançada, internet das coisas (IoT), impressão 3D
          e biotecnologia. Diferentemente das revoluções anteriores, a automação da 4ª RI
          ameaça não apenas empregos manuais repetitivos, mas também funções cognitivas e
          de serviços — antes consideradas "seguras".
        </p>
        <p>
          O relatório <em>The Future of Jobs</em> (Fórum Econômico Mundial, 2020) estimou
          que a automação pode deslocar <strong>85 milhões de postos</strong> de trabalho
          até 2025, mas criar <strong>97 milhões de novos</strong> — com perfil diferente,
          exigindo mais habilidades digitais, analíticas e interpessoais. No Brasil, o IBGE
          estimou que cerca de <strong>24,5% dos trabalhadores</strong> ocupam funções com
          alto risco de automação (2020).
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🤖</span>
            <h3>Setores mais vulneráveis à automação</h3>
            <p>Telemarketing, caixa de supermercado, operadores de linha de produção, contadores de tarefas rotineiras, motoristas (com a chegada dos veículos autônomos).</p>
          </div>
          <div className="lesson-card">
            <span>🔒</span>
            <h3>Setores mais resistentes</h3>
            <p>Cuidado de pessoas (enfermagem, educação infantil), trabalho artístico e criativo, gestão de pessoas, funções que exigem empatia, julgamento ético e criatividade.</p>
          </div>
          <div className="lesson-card">
            <span>📈</span>
            <h3>Oportunidades geradas</h3>
            <p>Programação e desenvolvimento de IA, análise de dados, manutenção de sistemas automatizados, design de experiência do usuário (UX), profissões de cuidado e saúde.</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Desafios sociais</h3>
            <p>Aumento da desigualdade se os ganhos da automação forem concentrados, necessidade de requalificação (reskilling) de milhões de trabalhadores, ampliação do debate sobre renda básica universal.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Debate sociológico: desemprego tecnológico ou transformação do trabalho?</h3>
          <p>
            Há dois campos: os <strong>otimistas</strong> (como os economistas clássicos e
            o FEM) argumentam que toda revolução tecnológica cria mais empregos do que destrói
            — houve mais motoristas de ônibus do que cocheiros. Os <strong>pessimistas</strong>
            (Ricardo Antunes, Nick Srnicek) argumentam que a velocidade e o escopo desta
            revolução são sem precedentes, e que os novos empregos criados exigem qualificações
            que os desempregados de hoje não possuem — gerando desemprego estrutural permanente
            para parcelas significativas da população.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Para o ENEM</span>
        <h2>10. Taylorismo, Fordismo e Toyotismo no ENEM</h2>
        <p>
          O ENEM cobra frequentemente a distinção entre os três modelos de organização do
          trabalho, especialmente por meio de textos que descrevem situações de trabalho e
          pedem identificação do modelo correspondente. O erro mais comum é confundir
          toyotismo com fordismo ao ler a palavra "produção eficiente" — o toyotismo é
          enxuto e flexível; o fordismo é rígido e em massa.
        </p>
        <p>
          Outro ponto frequente é a crítica marxista à alienação promovida pelo
          taylorismo/fordismo: o texto apresenta um trabalhador que "não sabe o que produz"
          ou "não reconhece seu trabalho no produto", e a alternativa correta identifica
          isso como alienação (Marx). Questões sobre o toyotismo frequentemente envolvem
          precarização, terceirização e o conceito de "desfiliação" (Castel).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Taylorismo</th>
                <th>Fordismo</th>
                <th>Toyotismo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Criador</strong></td>
                <td>Frederick W. Taylor (EUA)</td>
                <td>Henry Ford (EUA)</td>
                <td>Taiichi Ohno / Toyota (Japão)</td>
              </tr>
              <tr>
                <td><strong>Período</strong></td>
                <td>Final séc. XIX – início XX</td>
                <td>1913 – anos 1970</td>
                <td>Anos 1950 – presente</td>
              </tr>
              <tr>
                <td><strong>Lógica central</strong></td>
                <td>Eficiência por cronometria e fragmentação de tarefas</td>
                <td>Produção em massa + consumo em massa</td>
                <td>Produção enxuta, flexível, sob demanda</td>
              </tr>
              <tr>
                <td><strong>Trabalhador</strong></td>
                <td>Especializado em micro-tarefa única, cronometrado</td>
                <td>Especializado, fixo na linha de montagem</td>
                <td>Polivalente, em equipes, multifuncional</td>
              </tr>
              <tr>
                <td><strong>Estoque</strong></td>
                <td>Elevado (produção empurrada)</td>
                <td>Elevado (produção em massa)</td>
                <td>Mínimo — just-in-time (puxado pela demanda)</td>
              </tr>
              <tr>
                <td><strong>Produto</strong></td>
                <td>Aplicado ao estudo dos movimentos</td>
                <td>Padronizado (ex.: Modelo T em preto)</td>
                <td>Diversificado e personalizável</td>
              </tr>
              <tr>
                <td><strong>Crítica sociológica central</strong></td>
                <td>Alienação máxima (Marx): separação de concepção e execução</td>
                <td>Alienação + consumismo como controle social</td>
                <td>Precarização velada: autonomia ilusória + terceirização</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>O que o ENEM mais cobra sobre este tema</h3>
          <p>
            1. <strong>Identificação do modelo</strong> a partir de texto descritivo (leia as
            palavras-chave: "linha de montagem" = fordismo; "just-in-time/polivalência" =
            toyotismo; "cronometragem/separação concepção-execução" = taylorismo).<br />
            2. <strong>Alienação marxista</strong> aplicada ao taylorismo/fordismo.<br />
            3. <strong>Toyotismo e precarização</strong>: a aparente autonomia do trabalhador
            toyotista como forma mais sutil de controle.<br />
            4. <strong>Fordismo social</strong>: articulação entre produção em massa e
            consumo de massa no pós-guerra.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Taylorismo — conceito central"
          statement={
            <p>
              Frederick Taylor, ao desenvolver a "administração científica", propôs como
              princípio central:
            </p>
          }
          options={[
            { letter: "A", text: <>A produção puxada pela demanda e eliminação de estoques</> },
            { letter: "B", text: <>A polivalência dos trabalhadores e o trabalho em equipe</> },
            { letter: "C", text: <>A separação entre concepção e execução, com cronometragem de tarefas</>, correct: true },
            { letter: "D", text: <>A linha de montagem móvel e o salário acima da média</> },
            { letter: "E", text: <>A gestão participativa e a qualidade total</> },
          ]}
          resolution={
            <p>
              O taylorismo baseia-se na <strong>separação entre quem pensa (engenheiros) e
              quem executa (operários)</strong>, com cronometragem rigorosa para eliminar
              movimentos ineficientes. As opções A e B descrevem o toyotismo; D o fordismo;
              E a gestão japonesa participativa.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Fordismo social"
          statement={
            <p>
              O conceito de "fordismo social" vai além da linha de montagem e se refere à
              articulação entre produção em massa e:
            </p>
          }
          options={[
            { letter: "A", text: <>A terceirização de etapas produtivas para reduzir custos</> },
            { letter: "B", text: <>A polivalência do trabalhador e a qualidade total</> },
            { letter: "C", text: <>O consumo em massa, sustentado por salários que permitiam aos trabalhadores comprar o que produziam</>, correct: true },
            { letter: "D", text: <>A eliminação de estoques pelo sistema just-in-time</> },
            { letter: "E", text: <>A automação industrial que substituiu trabalhadores por robôs</> },
          ]}
          resolution={
            <p>
              Ford pagou salários elevados (US$ 5/dia) para que seus operários pudessem
              consumir os produtos que fabricavam. O <strong>fordismo social</strong> descreve
              esse circuito virtuoso (produção em massa + consumo em massa) que sustentou o
              crescimento econômico ocidental do pós-guerra.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Just-in-time e toyotismo"
          statement={
            <p>
              O sistema just-in-time, característico do toyotismo, representa uma mudança
              em relação ao fordismo porque:
            </p>
          }
          options={[
            { letter: "A", text: <>Mantém grandes estoques para garantir o ritmo de produção contínua</> },
            { letter: "B", text: <>Especializa ao máximo cada trabalhador em uma única operação</> },
            { letter: "C", text: <>Produz sob demanda, eliminando estoques e aumentando a flexibilidade</>, correct: true },
            { letter: "D", text: <>Utiliza cronometragem científica para eliminar movimentos ineficientes</> },
            { letter: "E", text: <>Concentra toda a cadeia produtiva em uma única fábrica integrada verticalmente</> },
          ]}
          resolution={
            <p>
              O just-in-time inverte a lógica fordista: em vez de produzir em massa e
              estocar, <strong>produz apenas o que foi demandado, quando necessário</strong>.
              Isso reduz custos com estoque mas transfere o risco de variação da demanda
              para os trabalhadores e fornecedores.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Alienação e organização do trabalho"
          statement={
            <p>
              Marx descreveu a alienação como o estranhamento do trabalhador em relação
              ao produto de seu trabalho, ao processo produtivo e a outros seres humanos.
              Qual modelo de organização do trabalho aprofunda mais radicalmente essa
              alienação e por quê?
            </p>
          }
          options={[
            { letter: "A", text: <>O toyotismo, porque exige polivalência e autonomia do trabalhador</> },
            { letter: "B", text: <>O taylorismo/fordismo, porque fragmenta tarefas ao mínimo e separa concepção de execução</>, correct: true },
            { letter: "C", text: <>O artesanato medieval, porque o trabalhador não escolhia sua profissão</> },
            { letter: "D", text: <>A economia solidária, porque elimina a propriedade privada dos meios de produção</> },
            { letter: "E", text: <>O teletrabalho, porque isola o trabalhador fisicamente</> },
          ]}
          resolution={
            <p>
              O taylorismo/fordismo radicaliza a alienação marxista: o operário realiza
              apenas um gesto repetitivo, não compreende o processo total, não tem controle
              sobre o ritmo e não reconhece o produto como criação sua. O toyotismo cria
              formas mais sutis de controle, mas a polivalência e o envolvimento
              emocional mascaram a alienação ao invés de eliminá-la.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Reestruturação produtiva no Brasil"
          statement={
            <p>
              <em>"Nos anos 1990, as montadoras instaladas no Brasil adotaram novos métodos
              de gestão: equipes polivalentes, controle de qualidade descentralizado, redução
              de estoques e ampla rede de fornecedores terceirizados. Simultaneamente, houve
              redução do número de trabalhadores diretos e aumento da subcontratação."</em>
              <br /><br />
              O processo descrito corresponde à adoção do modelo de organização do trabalho
              conhecido como:
            </p>
          }
          options={[
            { letter: "A", text: <>Taylorismo, com especialização extrema e cronometragem de tarefas</> },
            { letter: "B", text: <>Fordismo, com linha de montagem padronizada e integração vertical</> },
            { letter: "C", text: <>Toyotismo, com produção enxuta, polivalência e terceirização</>, correct: true },
            { letter: "D", text: <>Luddismo, com resistência à mecanização e defesa do artesanato</> },
            { letter: "E", text: <>Keynesianismo, com intervenção estatal para sustentar a demanda</> },
          ]}
          resolution={
            <p>
              O texto descreve exatamente os pilares do <strong>toyotismo</strong>:
              polivalência, qualidade total descentralizada, just-in-time (redução de
              estoques) e terceirização. No Brasil, esse processo ocorreu principalmente
              nos anos 1990 e gerou redução de postos de trabalho direto nas montadoras,
              com crescimento das terceirizadas em condições piores.
            </p>
          }
        />
      </section>
    </article>
  );
}
