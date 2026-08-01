"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap28Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 28</span>
          <h1>Freud e a Psicanálise: O Inconsciente e a Condição Humana</h1>
          <p>
            Sigmund Freud revolucionou a compreensão do ser humano ao descobrir o inconsciente e
            demonstrar que a racionalidade consciente não governa plenamente nossas vidas. Suas
            ideias impactaram não só a psicologia, mas a filosofia, a literatura, a arte e as
            ciências humanas do século XX.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vida e Contexto</span>
        <h2>1. Freud: Da Neurologia à Psicanálise</h2>
        <p>
          Sigmund Freud (1856–1939) nasceu em Freiberg (atual República Tcheca), em família judaica,
          e se formou em Medicina em Viena, onde passou a maior parte da vida. Começou como
          neurologista, estudando histeria com Jean-Martin Charcot em Paris. A experiência com
          pacientes histéricos — cujos sintomas físicos não tinham causa orgânica — o levou a
          investigar a mente de outra forma.
        </p>
        <p>
          Em colaboração com Josef Breuer, desenvolveu o <strong>método catártico</strong> (trazer
          à consciência memórias traumáticas reprimidas). Depois criou a <strong>psicanálise</strong>:
          um método de investigação da vida mental inconsciente por meio da <em>livre associação</em>,
          da análise dos <em>sonhos</em> e dos <em>atos falhos</em>. Fugiu do nazismo em 1938,
          emigrando para Londres, onde morreu no ano seguinte.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Inconsciente</span>
        <h2>2. O Inconsciente: O Iceberg da Mente</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 300" width="400" height="300" aria-label="Iceberg do inconsciente de Freud">
            {/* Água */}
            <rect x="0" y="140" width="400" height="160" fill="#bfdbfe" opacity="0.5"/>
            <text x="200" y="165" textAnchor="middle" fontSize="11" fill="#1e40af">nível da água</text>

            {/* Ponta do iceberg (consciente) */}
            <polygon points="200,20 140,140 260,140" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2"/>
            <text x="200" y="95" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0369a1">CONSCIENTE</text>
            <text x="200" y="113" textAnchor="middle" fontSize="10" fill="#0369a1">~10% da mente</text>
            <text x="200" y="129" textAnchor="middle" fontSize="9" fill="#0369a1">percepção, razão</text>

            {/* Pré-consciente */}
            <polygon points="140,140 100,200 300,200 260,140" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5"/>
            <text x="200" y="172" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#075985">PRÉ-CONSCIENTE</text>
            <text x="200" y="188" textAnchor="middle" fontSize="9" fill="#075985">memórias acessíveis</text>

            {/* Inconsciente */}
            <polygon points="100,200 50,290 350,290 300,200" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2"/>
            <text x="200" y="238" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e3a8a">INCONSCIENTE</text>
            <text x="200" y="255" textAnchor="middle" fontSize="10" fill="#1e3a8a">~90% — desejos reprimidos</text>
            <text x="200" y="272" textAnchor="middle" fontSize="10" fill="#1e3a8a">traumas, instintos, pulsões</text>
          </svg>
          <figcaption>O iceberg freudiano: apenas a ponta é consciente; a maior parte da mente opera no inconsciente.</figcaption>
        </figure>
        <p>
          A grande descoberta de Freud foi o <strong>inconsciente</strong>: uma região da mente que
          abriga desejos, impulsos e memórias reprimidos, inacessíveis diretamente à consciência.
          O inconsciente não é passivo — influencia ativamente o comportamento, os sonhos, os atos
          falhos e os sintomas neuróticos.
        </p>
        <div className="lesson-highlight">
          <h3>Os atos falhos (Freudian slips)</h3>
          <p>
            Os <strong>atos falhos</strong> (<em>Fehlleistungen</em>) — lapsos de linguagem,
            esquecimentos, erros — não são acidentes: revelam desejos ou pensamentos inconscientes.
            Dizer o nome errado de alguém, esquecer um compromisso desagradável ou perder um objeto
            que simboliza algo insuportável são formas do inconsciente se manifestar. Para Freud,
            não existem acidentes — tudo tem uma causa psíquica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estrutura da Psique</span>
        <h2>3. Id, Ego e Superego</h2>
        <p>
          Na segunda tópica freudiana (a partir de 1923), Freud propõe três instâncias da psique:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Instância</th>
                <th>Princípio</th>
                <th>Função</th>
                <th>Localização</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Id</strong></td>
                <td>Prazer (imediato)</td>
                <td>Sede dos instintos, desejos e pulsões primárias. Completamente inconsciente.</td>
                <td>Inconsciente</td>
              </tr>
              <tr>
                <td><strong>Ego</strong></td>
                <td>Realidade</td>
                <td>Medeia entre id, superego e o mundo externo. Busca satisfazer o id de forma socialmente aceitável.</td>
                <td>Consciente + pré-consciente</td>
              </tr>
              <tr>
                <td><strong>Superego</strong></td>
                <td>Moralidade</td>
                <td>Internalização das normas sociais e morais (pai, sociedade). Censura e culpa.</td>
                <td>Parcialmente inconsciente</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          O conflito entre as três instâncias gera a <strong>neurose</strong>: o ego não consegue
          conciliar as demandas pulsionais do id com as proibições do superego, gerando ansiedade
          e sintomas. Os <strong>mecanismos de defesa</strong> do ego protegem-no dessa ansiedade:
          repressão (expulsar do consciente), sublimação (redirecionar a pulsão para atividades
          socialmente valorizadas como arte e ciência), projeção (atribuir ao outro o que é de si),
          racionalização (justificar racionalmente um ato motivado por razões inconscientes).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pulsões</span>
        <h2>4. Eros e Tânatos: Pulsões de Vida e de Morte</h2>
        <p>
          A partir de <em>Além do Princípio do Prazer</em> (1920), Freud propõe uma divisão
          fundamental das pulsões humanas:
        </p>
        <ul>
          <li>
            <strong>Eros (pulsão de vida):</strong> engloba a libido (energia sexual) e as pulsões
            de autopreservação. Impulso para criar vínculos, unir, amar, construir civilização.
          </li>
          <li>
            <strong>Tânatos (pulsão de morte):</strong> impulso em direção à dissolução, ao repouso,
            à destruição. Pode se voltar para dentro (autopunição, masoquismo) ou para fora (agressão,
            sadismo, guerra).
          </li>
        </ul>
        <p>
          A civilização, para Freud, é o campo de batalha entre Eros e Tânatos. O progresso cultural
          exige a repressão das pulsões agressivas e sexuais — mas essa repressão gera o mal-estar.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Civilização</span>
        <h2>5. O Mal-Estar na Civilização</h2>
        <p>
          Em <em>O Mal-Estar na Civilização</em> (1930), Freud analisa o preço que o ser humano
          paga por viver em sociedade: a civilização exige a <strong>renúncia pulsional</strong> —
          a repressão dos instintos sexuais e agressivos. Sem isso, a convivência seria impossível.
          Mas essa repressão gera sofrimento, neuroses e agressividade acumulada.
        </p>
        <div className="lesson-highlight">
          <h3>Três fontes do sofrimento humano</h3>
          <p>
            Freud identifica três fontes inevitáveis do sofrimento humano: (1) o nosso próprio
            corpo, sujeito a doenças e morte; (2) o mundo externo, com suas catástrofes e
            imprevisibilidades; (3) as relações com os outros seres humanos — talvez a mais
            dolorosa de todas. A civilização tenta controlar as duas primeiras; a terceira é o
            campo por excelência da psicanálise.
          </p>
        </div>
        <p>
          Freud era pessimista sobre a natureza humana: não acreditava em progresso moral linear.
          A agressividade humana (Tânatos) é uma realidade permanente, e a questão é como a
          civilização pode canalizá-la sem sufocar o indivíduo. Essa análise antecipou a barbárie
          do nazismo e do stalinismo.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>6. Psicanálise e Filosofia: Impacto nas Ciências Humanas</h2>
        <p>
          A psicanálise freudiana impactou profundamente diversas áreas:
        </p>
        <ul>
          <li><strong>Filosofia:</strong> questionou o cogito cartesiano ("penso, logo existo") — se há um inconsciente que governa parte de nossas ações, somos menos "senhores em nossa própria casa" do que Descartes supunha.</li>
          <li><strong>Sociologia e Ciências Sociais:</strong> a ideia de repressão social e de mecanismos de defesa foi incorporada por pensadores como Herbert Marcuse e Theodor Adorno.</li>
          <li><strong>Literatura e Arte:</strong> o surrealismo explorou o inconsciente como fonte criativa.</li>
          <li><strong>Feminismo:</strong> pensadoras como Simone de Beauvoir e Julia Kristeva dialogaram criticamente com Freud.</li>
          <li><strong>Jacques Lacan:</strong> releu Freud à luz da linguística de Saussure — "o inconsciente é estruturado como uma linguagem".</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Édipo e Sujeito</span>
        <h2>7. O Complexo de Édipo e a Constituição do Sujeito</h2>
        <p>
          Um dos conceitos centrais — e mais controversos — da psicanálise freudiana é o
          <strong> complexo de Édipo</strong>. Para Freud, entre os três e cinco anos, a criança
          desenvolve um desejo erótico pelo progenitor do sexo oposto e um sentimento de rivalidade
          com o progenitor do mesmo sexo — situação análoga ao mito de Édipo Rei, de Sófocles, em
          que o herói mata o pai e se casa com a mãe sem saber.
        </p>
        <p>
          A resolução do complexo de Édipo é, para Freud, o ponto decisivo na constituição do
          sujeito: ao renunciar ao desejo incestuoso (por medo da castração, no menino; por
          inveja do pênis, na menina — conceito muito criticado pelo feminismo), a criança
          internaliza a lei paterna como <strong>superego</strong> e começa a se identificar
          com o progenitor do mesmo sexo. A socialização e a moral têm aqui sua origem psíquica.
        </p>
        <div className="lesson-highlight">
          <h3>Críticas ao Édipo freudiano</h3>
          <p>
            O complexo de Édipo foi amplamente criticado: pelo feminismo (Simone de Beauvoir,
            Juliet Mitchell), que questiona a centralidade do falo e o androcentrismo da teoria;
            pela antropologia (Malinowski), que mostrou culturas sem a estrutura familiar nuclear
            pressuposta por Freud; e por Deleuze e Guattari (<em>O Anti-Édipo</em>, 1972), que o
            interpretam como uma estrutura de normatização e controle social. Mesmo assim, o Édipo
            permanece um dos conceitos mais discutidos na filosofia do sujeito.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Freud no ENEM</span>
        <h2>8. Freud no ENEM: Como os Conceitos Psicanalíticos Aparecem nas Questões</h2>
        <p>
          Freud aparece com frequência no ENEM, principalmente em questões de Ciências Humanas que
          abordam a condição humana, a relação entre indivíduo e sociedade, e a crítica ao
          racionalismo. Os padrões mais recorrentes são:
        </p>
        <ul>
          <li>
            <strong>Questões sobre o inconsciente:</strong> o ENEM geralmente apresenta um trecho
            de Freud ou uma situação (ato falho, sonho, sintoma neurótico) e pede que o estudante
            identifique o papel do inconsciente no comportamento humano.
          </li>
          <li>
            <strong>Questões sobre mecanismos de defesa:</strong> a sublimação (energia pulsional
            redirecionada para a arte/ciência) é a mais cobrada, seguida da repressão e da projeção.
          </li>
          <li>
            <strong>Questões sobre Freud e a civilização:</strong> o ENEM frequentemente pergunta
            sobre a tensão entre as pulsões individuais e as exigências civilizatórias — o núcleo
            de <em>O Mal-Estar na Civilização</em>.
          </li>
          <li>
            <strong>Freud e a ruptura com Descartes:</strong> questões que exploram a crítica
            freudiana à soberania da razão consciente — "o ego não é senhor em sua própria casa".
          </li>
        </ul>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conceito</th>
                <th>Frase-chave</th>
                <th>Aplicação típica no ENEM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Inconsciente</td>
                <td>"O ego não é senhor em sua própria casa"</td>
                <td>Crítica ao racionalismo cartesiano; atos falhos</td>
              </tr>
              <tr>
                <td>Sublimação</td>
                <td>Arte e ciência como redirecionamento das pulsões</td>
                <td>Relação entre criatividade e repressão pulsional</td>
              </tr>
              <tr>
                <td>Mal-estar</td>
                <td>Civilização exige renúncia pulsional</td>
                <td>Tensão entre liberdade individual e normas sociais</td>
              </tr>
              <tr>
                <td>Eros e Tânatos</td>
                <td>Pulsões de vida e morte na história</td>
                <td>Guerras, violência coletiva, civilização</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🧊</span>
            <h3>Inconsciente</h3>
            <p>A maior parte da mente opera fora da consciência. Manifesta-se em sonhos, atos falhos e sintomas.</p>
          </div>
          <div className="math-card">
            <span>🧠</span>
            <h3>Id, Ego, Superego</h3>
            <p>Id (prazer) × Ego (realidade) × Superego (moral). O conflito entre eles gera neurose.</p>
          </div>
          <div className="math-card">
            <span>🛡️</span>
            <h3>Mecanismos de Defesa</h3>
            <p>Repressão, sublimação, projeção — o Ego se defende da ansiedade gerada pelo conflito psíquico.</p>
          </div>
          <div className="math-card">
            <span>❤️</span>
            <h3>Eros e Tânatos</h3>
            <p>Pulsão de vida (criação, amor) versus pulsão de morte (destruição, agressão).</p>
          </div>
          <div className="math-card">
            <span>😣</span>
            <h3>Mal-Estar na Civilização</h3>
            <p>Civilização exige renúncia pulsional; isso gera sofrimento. Freud era pessimista sobre o progresso.</p>
          </div>
          <div className="math-card">
            <span>🎭</span>
            <h3>Legado</h3>
            <p>Impacto na filosofia, arte, feminismo, sociologia. O sujeito não é senhor de si mesmo.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. As Instâncias da Psique"
          statement={<p>O conceito freudiano de <strong>superego</strong> corresponde a:</p>}
          options={[
            { letter: "a", text: "A sede dos instintos e das pulsões primárias, operando pelo princípio do prazer." },
            { letter: "b", text: "A instância que medeia entre os impulsos do id e as exigências do mundo externo." },
            { letter: "c", text: "A internalização das normas, valores e proibições morais transmitidas pela sociedade.", correct: true },
            { letter: "d", text: "A capacidade de percepção consciente da realidade e de raciocínio lógico." },
          ]}
          resolution={<p>O <strong>superego</strong> é a instância que resulta da internalização das normas e valores sociais, sobretudo os transmitidos pelas figuras parentais. É a "voz da consciência moral", que censura os impulsos do id e impõe padrões de conduta. Quando o superego é muito rígido, pode gerar culpa excessiva e neurose. O id opera pelo princípio do prazer; o ego pelo princípio da realidade.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Mecanismos de Defesa"
          statement={<p>Um artista que canaliza impulsos agressivos e sexuais para a criação de obras de arte exemplifica qual mecanismo de defesa freudiano?</p>}
          options={[
            { letter: "a", text: "Repressão — expulsão do conteúdo perturbador para o inconsciente." },
            { letter: "b", text: "Projeção — atribuição ao outro de sentimentos próprios inaceitáveis." },
            { letter: "c", text: "Sublimação — redirecionamento de pulsões para atividades socialmente valorizadas.", correct: true },
            { letter: "d", text: "Racionalização — justificativa racional de comportamentos motivados pelo inconsciente." },
          ]}
          resolution={<p>A <strong>sublimação</strong> é o mecanismo de defesa mais "nobre" para Freud: a energia pulsional (sexual ou agressiva) é redirecionada para atividades culturalmente valorizadas — arte, ciência, filosofia, religião. Freud considerava a sublimação a base da civilização: sem ela, toda a energia seria gasta na satisfação direta dos instintos, inviabilizando a vida cultural.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. O Mal-Estar na Civilização"
          statement={<p>Em 'O Mal-Estar na Civilização', Freud argumenta que a civilização produz sofrimento porque:</p>}
          options={[
            { letter: "a", text: "A tecnologia alienou os seres humanos de sua natureza, tornando o trabalho desumanizante." },
            { letter: "b", text: "A vida em sociedade exige a renúncia a pulsões instintivas, gerando repressão e descontentamento.", correct: true },
            { letter: "c", text: "O capitalismo distribui desigualmente os bens produzidos pelo trabalho coletivo." },
            { letter: "d", text: "A religião criou sentimentos de culpa desnecessários que bloqueiam o desenvolvimento humano." },
          ]}
          resolution={<p>Para Freud, a <strong>civilização</strong> é construída sobre a <strong>renúncia pulsional</strong>: para viver em sociedade, o ser humano deve reprimir seus impulsos sexuais e agressivos. Essa repressão é necessária, mas dolorosa — gera neuroses, insatisfação crônica e agressividade acumulada. Daí o "mal-estar": a civilização é simultaneamente nossa maior conquista e nossa maior fonte de sofrimento. Freud era cético sobre qualquer utopia de felicidade plena.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Freud e o Inconsciente"
          statement={
            <p>
              "O ego não é senhor em sua própria casa." (Sigmund Freud)<br/><br/>
              Essa afirmação de Freud representa uma ruptura com a tradição filosófica racionalista inaugurada por Descartes. Essa ruptura consiste em:
            </p>
          }
          options={[
            { letter: "a", text: "Negar a existência da consciência e afirmar que toda experiência humana é inconsciente." },
            { letter: "b", text: "Demonstrar que o ser humano não possui livre-arbítrio em nenhuma de suas decisões." },
            { letter: "c", text: "Questionar a soberania da razão consciente ao revelar que o inconsciente governa parte significativa da vida psíquica.", correct: true },
            { letter: "d", text: "Substituir a filosofia pela psicologia como único método válido de conhecimento do ser humano." },
          ]}
          resolution={<p>Descartes afirmava que o "eu" (res cogitans) é transparente a si mesmo — "penso, logo existo". A psicanálise de Freud abala essa certeza: há uma dimensão da mente (o inconsciente) que escapa à consciência e ao controle racional, mas determina desejos, comportamentos e sintomas. O sujeito não se conhece plenamente — há algo nele que age sem seu conhecimento. Isso representa a "terceira ferida narcísica" que Freud identificou na história humana (após Copérnico e Darwin).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Eros, Tânatos e Civilização"
          statement={
            <p>
              Freud identificou duas pulsões fundamentais na psique humana: Eros (pulsão de vida) e Tânatos (pulsão de morte). O desenvolvimento das guerras mundiais no século XX foi interpretado por ele como evidência do poder destrutivo de Tânatos.<br/><br/>
              A partir dessa perspectiva freudiana, a guerra pode ser compreendida como:
            </p>
          }
          options={[
            { letter: "a", text: "Um fenômeno exclusivamente econômico, resultado da competição capitalista por mercados e recursos." },
            { letter: "b", text: "Uma manifestação da pulsão de morte coletiva, quando a agressividade reprimida extravasou os limites da civilização.", correct: true },
            { letter: "c", text: "Uma forma de sublimação coletiva, em que a agressividade é redirecionada para fins construtivos." },
            { letter: "d", text: "Uma consequência da fraqueza das instituições políticas democráticas em face de líderes autoritários." },
          ]}
          resolution={<p>Para Freud, a pulsão de morte (Tânatos) é uma força psíquica real que se manifesta como agressividade, autodestruição e impulso para o retorno ao estado inorgânico. A guerra é, nessa visão, a irrupção coletiva de Tânatos: a agressividade reprimida pelo processo civilizatório encontra uma saída "legitimada" pelo Estado nacional. Em 1932, Einstein perguntou a Freud por carta se havia algo que pudesse deter a guerra — Freud respondeu pessimistamente, mas indicou Eros (amor, identificação entre os povos) como a única força capaz de contrabalancear Tânatos.</p>}
        />
      </section>
    </article>
  );
}
