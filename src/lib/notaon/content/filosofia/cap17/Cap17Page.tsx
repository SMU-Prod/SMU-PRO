"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap17Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 17</span>
          <h1>Racionalismo: René Descartes e o Método Científico</h1>
          <p>
            René Descartes é considerado o "pai da filosofia moderna". Sua dúvida metódica, o cogito
            ("Penso, logo existo") e o dualismo mente-corpo revolucionaram a filosofia e lançaram as
            bases do racionalismo — a corrente que afirma ser a razão, e não os sentidos, a fonte
            primária do conhecimento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto</span>
        <h2>1. Contexto: A Crise do Conhecimento no Século XVII</h2>
        <p>
          O século XVII foi marcado por profundas crises: a Guerra dos Trinta Anos (1618–1648) devastou
          a Europa em nome da religião; a Revolução Científica de Copérnico, Galileu e Kepler destruíra
          a cosmologia medieval; as guerras religiosas entre católicos e protestantes mostravam que não
          havia consenso sobre verdades fundamentais.
        </p>
        <p>
          Nesse contexto, Descartes se fez a pergunta: <em>existe algum conhecimento absolutamente
          certo, indúbitável, sobre o qual possamos construir todo o edifício do saber?</em> Sua resposta
          — a dúvida metódica e o cogito — fundou a filosofia moderna.
        </p>
        <div className="lesson-highlight">
          <h3>O problema do ceticismo</h3>
          <p>
            Os céticos antigos (Pirro, Sexto Empírico) afirmavam que nada pode ser conhecido com certeza.
            Descartes usou o ceticismo como método — duvidar de tudo — não para concluir que nada é
            cognoscível, mas para encontrar o que <em>não pode</em> ser duvidado. Esse é o sentido da
            "dúvida metódica".
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A Dúvida Metódica</span>
        <h2>2. A Dúvida Metódica: Ceticismo como Ferramenta</h2>
        <p>
          No <em>Discurso do Método</em> (1637) e nas <em>Meditações Metafísicas</em> (1641), Descartes
          propôs duvidar de tudo o que pudesse ser duvidado:
        </p>
        <ul>
          <li>
            <strong>1ª onda de dúvida — os sentidos enganam:</strong> já vimos ilusões ópticas,
            miragens, sonhos. Os sentidos não são confiáveis.
          </li>
          <li>
            <strong>2ª onda — o sonho:</strong> quando estou sonhando, creio estar acordado. Como
            tenho certeza de que agora não estou sonhando?
          </li>
          <li>
            <strong>3ª onda — o Gênio Maligno (Deus enganador):</strong> hipótese extrema: e se
            houvesse um ser onipotente e malicioso que me fizesse errar até nas verdades matemáticas
            mais simples? (<em>2+2=4</em> — poderia ser uma ilusão?)
          </li>
        </ul>
        <p>
          Com essas três ondas, Descartes chegou ao ponto em que parecia impossível ter certeza de
          qualquer coisa — até que encontrou algo irresistível.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 220" width="500" height="220" aria-label="Diagrama da dúvida metódica cartesiana">
            <rect x="10" y="10" width="480" height="200" rx="10" fill="#f8fafc" stroke="#4f46e5" strokeWidth="1.5"/>
            <text x="250" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#312e81">A Dúvida Metódica de Descartes</text>
            {/* Etapas */}
            <rect x="30" y="50" width="130" height="50" rx="8" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="1.5"/>
            <text x="95" y="71" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#312e81">1ª Onda</text>
            <text x="95" y="85" textAnchor="middle" fontSize="9" fill="#3730a3">Sentidos enganam</text>
            <text x="95" y="97" textAnchor="middle" fontSize="9" fill="#3730a3">(ilusões, erros)</text>

            <text x="183" y="78" textAnchor="middle" fontSize="18" fill="#4f46e5">→</text>

            <rect x="195" y="50" width="130" height="50" rx="8" fill="#c7d2fe" stroke="#4f46e5" strokeWidth="1.5"/>
            <text x="260" y="71" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#312e81">2ª Onda</text>
            <text x="260" y="85" textAnchor="middle" fontSize="9" fill="#3730a3">O sonho: não sei</text>
            <text x="260" y="97" textAnchor="middle" fontSize="9" fill="#3730a3">se estou acordado</text>

            <text x="348" y="78" textAnchor="middle" fontSize="18" fill="#4f46e5">→</text>

            <rect x="360" y="50" width="110" height="50" rx="8" fill="#a5b4fc" stroke="#4f46e5" strokeWidth="1.5"/>
            <text x="415" y="71" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#312e81">3ª Onda</text>
            <text x="415" y="85" textAnchor="middle" fontSize="9" fill="#3730a3">Gênio Maligno:</text>
            <text x="415" y="97" textAnchor="middle" fontSize="9" fill="#3730a3">tudo pode ser falso</text>

            {/* Resultado */}
            <text x="250" y="138" textAnchor="middle" fontSize="18" fill="#4f46e5">↓</text>
            <rect x="130" y="150" width="240" height="48" rx="8" fill="#4f46e5"/>
            <text x="250" y="170" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">COGITO ERGO SUM</text>
            <text x="250" y="187" textAnchor="middle" fontSize="10" fill="#c7d2fe">"Penso, logo existo" — certeza indubitável</text>
          </svg>
          <figcaption>A dúvida metódica progride em três ondas e encontra no cogito a certeza irresistível.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Cogito</span>
        <h2>3. O Cogito: "Penso, Logo Existo"</h2>
        <p>
          Ao tentar duvidar de tudo, Descartes descobriu que há algo que não pode ser duvidado: o
          próprio ato de duvidar. Para duvidar, preciso pensar. E para pensar, preciso existir. Mesmo
          que o Gênio Maligno me engane em tudo, ele não pode me enganar sobre o fato de que <em>estou
          sendo enganado</em> — e para ser enganado, preciso existir.
        </p>
        <p>
          Daí o famoso <em>cogito ergo sum</em> — "Penso, logo existo". Essa é a primeira certeza
          absoluta, o <strong>ponto de Arquimedes</strong> de Descartes: a existência do sujeito pensante
          é indubitável enquanto ele pensa.
        </p>
        <div className="lesson-highlight">
          <h3>O Cogito no ENEM</h3>
          <p>
            O ENEM frequentemente apresenta o cogito cartesiano em questões que pedem para identificar
            a tese central de Descartes, para distingui-lo do empirismo (que parte dos sentidos) e para
            relacioná-lo ao papel da razão como fundamento do conhecimento.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Dualismo</span>
        <h2>4. O Dualismo Cartesiano: Mente × Corpo</h2>
        <p>
          A partir do cogito, Descartes sabia que existia como <strong>coisa pensante</strong>
          (<em>res cogitans</em>). Mas e o corpo? O corpo é uma <strong>coisa extensa</strong>
          (<em>res extensa</em>), que ocupa espaço e está sujeita às leis mecânicas da física.
        </p>
        <p>
          O <strong>dualismo cartesiano</strong> afirma que mente e corpo são duas substâncias
          radicalmente distintas:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Substância</th><th>Definição</th><th>Propriedade</th><th>Exemplos</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><em>Res cogitans</em> (coisa pensante)</td>
                <td>A mente, o espírito, a alma</td>
                <td>Pensa; não ocupa espaço; indivisível</td>
                <td>Pensamentos, emoções, vontade, ideias</td>
              </tr>
              <tr>
                <td><em>Res extensa</em> (coisa extensa)</td>
                <td>A matéria, o corpo</td>
                <td>Ocupa espaço; divisível; mecânica</td>
                <td>Corpo humano, animais, objetos físicos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          O dualismo criou um problema famoso — o <strong>problema mente-corpo</strong>: se mente e
          corpo são substâncias radicalmente diferentes, como elas se comunicam? Descartes respondeu
          (insatisfatoriamente) que a glândula pineal no cérebro seria o ponto de interação. Esse
          problema continua aberto na filosofia da mente contemporânea.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ideias Inatas</span>
        <h2>5. As Ideias Inatas e a Existência de Deus</h2>
        <p>
          Para Descartes, a mente não é uma <em>tábula rasa</em> (contra Locke): existem
          <strong> ideias inatas</strong> — ideias que a mente possui independentemente da experiência.
          As mais importantes são: a ideia de <em>Deus</em>, a ideia de <em>eu mesmo</em> (sujeito
          pensante) e as verdades matemáticas.
        </p>
        <p>
          Com a ideia de Deus (como ser infinito e perfeitíssimo), Descartes prova a existência de
          Deus: nenhuma mente finita poderia criar, por si mesma, a ideia de infinitude. Portanto,
          a ideia de Deus deve ter sido posta em nós pelo próprio Deus. E Deus, sendo perfeito, não
          pode ser enganador — o que garante que o mundo material existe e que nossas faculdades
          cognitivas, quando usadas corretamente, nos levam à verdade.
        </p>
        <div className="lesson-highlight">
          <h3>O círculo cartesiano</h3>
          <p>
            Críticos acusaram Descartes de um círculo vicioso: ele usa a razão para provar Deus e Deus
            para garantir a razão. Esse "círculo cartesiano" é um dos problemas clássicos estudados na
            filosofia moderna e pode aparecer no ENEM como ponto de análise crítica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O Método</span>
        <h2>6. As Quatro Regras do Método Cartesiano</h2>
        <p>
          No <em>Discurso do Método</em>, Descartes propôs quatro regras para chegar à verdade:
        </p>
        <ul>
          <li>
            <strong>1ª regra (Evidência):</strong> aceitar apenas o que a razão reconhece como claro e
            distinto — não precipitar julgamentos nem aceitar preconceitos.
          </li>
          <li>
            <strong>2ª regra (Análise):</strong> dividir os problemas em partes menores e mais simples.
          </li>
          <li>
            <strong>3ª regra (Síntese):</strong> reconstruir o conhecimento do simples ao complexo,
            seguindo ordem lógica.
          </li>
          <li>
            <strong>4ª regra (Enumeração):</strong> fazer revisões completas para não omitir nada.
          </li>
        </ul>
        <p>
          Esse método inspirou o <strong>pensamento científico moderno</strong>: analisar, decompor,
          ordenar e verificar são procedimentos que ainda guiam a ciência.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Spinoza e Leibniz</span>
        <h2>7. Os Continuadores do Racionalismo: Spinoza e Leibniz</h2>
        <ul>
          <li>
            <strong>Baruch Spinoza (1632–1677):</strong> rejeitou o dualismo cartesiano. Para Spinoza,
            existe uma única substância (<em>monismo</em>): Deus ou Natureza (<em>Deus sive Natura</em>).
            Mente e corpo são dois atributos da mesma substância única. Sua <em>Ética</em> foi escrita
            no estilo geométrico (axiomas, proposições, demonstrações).
          </li>
          <li>
            <strong>Gottfried Leibniz (1646–1716):</strong> propôs que a realidade é composta de
            <em> mônadas</em> — unidades simples, imateriais e indivisíveis. O universo é o melhor
            dos mundos possíveis, criado por Deus com harmonia preestabelecida. Criou o cálculo
            diferencial e integral simultaneamente a Newton.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>8. O Legado de Descartes: Dualismo Mente-Corpo e Seus Desdobramentos</h2>
        <p>
          O dualismo cartesiano inaugurou séculos de debate filosófico e científico sobre a natureza
          da mente. Seus desdobramentos modernos dividem-se em três grandes tradições:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Posição</th><th>Defesa</th><th>Principais autores</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Dualismo de substância</strong></td>
                <td>Mente e corpo são entidades ontologicamente distintas</td>
                <td>Descartes, ocasionalistas (Malebranche)</td>
              </tr>
              <tr>
                <td><strong>Monismo materialista</strong></td>
                <td>Tudo é matéria; estados mentais são processos cerebrais</td>
                <td>Hobbes, La Mettrie, neurociências contemporâneas</td>
              </tr>
              <tr>
                <td><strong>Dualismo de propriedades</strong></td>
                <td>Uma substância (cérebro), mas duas categorias de propriedades: físicas e mentais</td>
                <td>Chalmers, Nagel ("como é ser um morcego?")</td>
              </tr>
              <tr>
                <td><strong>Funcionalismo</strong></td>
                <td>O mental é definido por função (papel causal), não por substância</td>
                <td>Putnam, filosofia da mente, IA</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          No campo científico, o legado de Descartes é ambivalente: a visão mecanicista do corpo
          impulsionou a medicina moderna; o dualismo, porém, criou dificuldades para entender como
          experiências subjetivas (a dor, o vermelho que eu vejo) emergem de processos físicos —
          o chamado <strong>problema difícil da consciência</strong> (David Chalmers, 1995).
        </p>
        <div className="lesson-highlight">
          <h3>Descartes e a Inteligência Artificial</h3>
          <p>
            O debate cartesiano reemergiu com a IA: máquinas que processam informação "pensam"?
            Alan Turing propôs o "teste de Turing" como critério comportamental. John Searle, com
            o argumento do "quarto chinês", respondeu que processamento simbólico não é compreensão
            genuína — retomando a divisão cartesiana entre computação mecânica e entendimento mental.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Descartes no ENEM</span>
        <h2>9. Descartes no ENEM: Método, Cogito e Questões Típicas</h2>
        <p>
          René Descartes é um dos filósofos mais cobrados no ENEM, especialmente nas questões
          sobre epistemologia, método científico e a relação entre mente e corpo. Conheça os
          padrões de questão:
        </p>
        <ul>
          <li>
            <strong>Dúvida metódica como ferramenta, não como crença:</strong> o ENEM frequentemente
            apresenta questões que pedem a distinção entre o ceticismo pirroniano (a dúvida como
            posição definitiva) e a dúvida cartesiana (ferramenta provisional para encontrar
            certeza). Descartes usa a dúvida para superá-la.
          </li>
          <li>
            <strong>O cogito como fundamento:</strong> "Penso, logo existo" não é uma dedução
            lógica silogística — é uma intuição imediata da existência como condição necessária
            do pensar. O distrator clássico é apresentá-lo como silogismo.
          </li>
          <li>
            <strong>Mente-corpo:</strong> o dualismo cartesiano tem implicações para a medicina
            (tratar corpo sem considerar mente), para a ética (o ser humano como ser pensante,
            não apenas corporal) e para a inteligência artificial (máquinas podem "pensar"?).
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Descartes e a ciência moderna</h3>
          <p>
            O método cartesiano (análise, síntese, enumeração, revisão) influenciou profundamente
            o desenvolvimento da ciência moderna. Ao separar a investigação científica da
            autoridade religiosa e filosófica tradicional, Descartes abre espaço para a física
            mecanicista de Newton, a química de Lavoisier e a biologia de Darwin — o mundo
            como máquina a ser analisada matematicamente, não como organismo animado por
            forças espirituais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🤔</span>
            <h3>Dúvida Metódica</h3>
            <p>Ferramenta para encontrar certezas: duvidar de sentidos, sonho e Gênio Maligno.</p>
          </div>
          <div className="math-card">
            <span>💭</span>
            <h3>Cogito Ergo Sum</h3>
            <p>"Penso, logo existo": primeira certeza indubitável. Fundamento do edifício do saber.</p>
          </div>
          <div className="math-card">
            <span>🧠</span>
            <h3>Dualismo Cartesiano</h3>
            <p>Res cogitans (mente) × res extensa (corpo): duas substâncias radicalmente distintas.</p>
          </div>
          <div className="math-card">
            <span>💡</span>
            <h3>Ideias Inatas</h3>
            <p>A mente possui ideias independentes da experiência: Deus, o eu, verdades matemáticas.</p>
          </div>
          <div className="math-card">
            <span>📐</span>
            <h3>O Método</h3>
            <p>Evidência, análise, síntese, enumeração: as quatro regras do método cartesiano.</p>
          </div>
          <div className="math-card">
            <span>🔢</span>
            <h3>Racionalismo</h3>
            <p>Razão como fonte do conhecimento. Continuado por Spinoza (monismo) e Leibniz (mônadas).</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. O Cogito Cartesiano"
          statement={<p>A frase "Penso, logo existo" (cogito ergo sum) de Descartes expressa que:</p>}
          options={[
            { letter: "a", text: "O ato de pensar é a prova indubitável de que o sujeito pensante existe, mesmo diante da dúvida mais radical.", correct: true },
            { letter: "b", text: "Somente quem pensa muito merece existir, enquanto os que não pensam são menos importantes." },
            { letter: "c", text: "A existência do mundo externo se prova pelo pensamento, sem necessidade de experiência sensorial." },
            { letter: "d", text: "O pensamento é uma ilusão criada pelo Gênio Maligno, logo a existência também é ilusória." },
          ]}
          resolution={<p>O cogito de Descartes afirma que, mesmo duvidando de tudo, não posso duvidar de que estou duvidando — e duvidar é uma forma de pensar. Para pensar, preciso existir. Portanto, "Penso, logo existo" é a primeira certeza indubitável: o sujeito pensante existe enquanto pensa. Isso funda o <strong>sujeito moderno</strong> como ponto de partida do conhecimento.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Racionalismo vs. Empirismo"
          statement={<p>O racionalismo de Descartes se opõe ao empirismo de Locke principalmente no que diz respeito à origem do conhecimento. Qual é a diferença fundamental?</p>}
          options={[
            { letter: "a", text: "Para Descartes, o conhecimento genuíno deriva da razão e das ideias inatas; para Locke, todo conhecimento vem da experiência sensorial.", correct: true },
            { letter: "b", text: "Para Descartes, os sentidos são a única fonte confiável; para Locke, a razão pura independe dos sentidos." },
            { letter: "c", text: "Ambos concordam que os sentidos são a base do conhecimento, divergindo apenas no método de verificação." },
            { letter: "d", text: "Descartes aceita a tábula rasa e Locke defende as ideias inatas — uma inversão das posições reais." },
          ]}
          resolution={<p>O racionalismo cartesiano afirma que o conhecimento certo e necessário deriva da <strong>razão</strong> e das <strong>ideias inatas</strong> (a priori) — não da experiência sensorial, que é enganosa. O empirismo de Locke afirma que a mente nasce como <em>tábula rasa</em> e todo conhecimento vem da <strong>experiência</strong> (a posteriori). Esse é o grande debate epistemológico da filosofia moderna, "resolvido" por Kant na síntese crítica.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. O Dualismo e o Problema Mente-Corpo"
          statement={<p>O dualismo cartesiano — que separa radicalmente mente (res cogitans) e corpo (res extensa) — gerou um problema filosófico clássico. Qual é esse problema?</p>}
          options={[
            { letter: "a", text: "Se mente e corpo são substâncias radicalmente diferentes, como elas interagem? Como um pensamento pode mover um braço?", correct: true },
            { letter: "b", text: "O problema é que a mente pode existir sem o corpo, o que implica que morrer não é realmente morrer." },
            { letter: "c", text: "O problema é que o corpo pode pensar sem a mente, tornando desnecessária a alma." },
            { letter: "d", text: "O problema é que a distinção mente/corpo é impossível de se perceber na experiência cotidiana." },
          ]}
          resolution={<p>O <strong>problema mente-corpo</strong> é: se mente e corpo são substâncias completamente distintas (uma não-espacial, outra espacial), como uma pode influenciar a outra? Quando decido levantar o braço, como meu pensamento causa um movimento físico? Descartes sugeriu a glândula pineal como ponto de contato, mas isso foi considerado insatisfatório. Esse problema continua relevante na filosofia da mente, neurociências e IA.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Descartes e a Ciência Moderna"
          statement={<p>René Descartes propôs que o corpo humano e os animais são máquinas complexas, sujeitas às mesmas leis mecânicas que governam os demais corpos físicos. Apenas o ser humano possui uma mente (res cogitans) que lhe confere razão e livre-arbítrio. Essa concepção:</p>}
          options={[
            { letter: "a", text: "Abriu caminho para a medicina científica e a biologia mecanicista, tratando o corpo como objeto de estudo submetido a leis naturais.", correct: true },
            { letter: "b", text: "Impediu o desenvolvimento da medicina, pois negar a alma dos animais tornava impossível estudar a anatomia." },
            { letter: "c", text: "Representou um retorno ao pensamento medieval, que via o corpo como mero invólucro da alma." },
            { letter: "d", text: "Foi aceita pela Igreja Católica como compatível com a doutrina cristã da ressurreição do corpo." },
          ]}
          resolution={<p>A concepção cartesiana do corpo como máquina (<em>res extensa</em>, submetida a leis mecânicas) foi revolucionária para a ciência: liberou a medicina e a biologia para estudar o corpo humano e animal como sistemas físico-químicos, sem recorrer a forças vitais ou almas. Harvey descobrira a circulação sanguínea (1628) com esse espírito. A biomedicina moderna ainda trabalha com esse paradigma.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) As Quatro Regras do Método"
          statement={<p>Descartes propôs quatro regras para chegar à verdade: evidência (aceitar apenas o claro e distinto), análise (dividir em partes), síntese (reconstruir do simples ao complexo) e enumeração (revisar completamente). Em qual atividade intelectual contemporânea esse método é mais claramente aplicado?</p>}
          options={[
            { letter: "a", text: "Na resolução de problemas matemáticos e científicos: dividir o problema, resolver etapas simples, reconstruir a solução e verificar.", correct: true },
            { letter: "b", text: "Na meditação religiosa, que segue a mesma sequência de Descartes para chegar à experiência divina." },
            { letter: "c", text: "Na criação artística, que naturalmente segue as quatro regras ao compor obras de arte." },
            { letter: "d", text: "Na política democrática, em que as quatro regras orientam o debate parlamentar." },
          ]}
          resolution={<p>O método cartesiano é o ancestral direto do <strong>método científico</strong> e da <strong>resolução sistemática de problemas</strong>: identificar claramente o problema (evidência), decompô-lo em sub-problemas mais simples (análise), resolver cada parte e reconstruir (síntese), verificar o resultado (enumeração). Engenharia, matemática, programação e pesquisa científica aplicam essa lógica cotidianamente.</p>}
        />
      </section>
    </article>
  );
}
