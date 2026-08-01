"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap10Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 10</span>
          <h1>Escolas helenísticas: Estoicismo, Epicurismo, Ceticismo e Cinismo</h1>
          <p>
            Com a morte de Alexandre, o Grande (323 a.C.) e a dissolução da polis grega como
            referência política, os filósofos voltaram-se para uma nova questão central: como
            viver bem num mundo incerto e em constante mudança? As quatro grandes escolas
            helenísticas propuseram respostas radicalmente diferentes para essa pergunta.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contexto Helenístico</span>
        <h2>1. O mundo helenístico: crise da polis e busca pela vida boa</h2>
        <p>
          O <strong>período helenístico</strong> (323–31 a.C.) começa com a morte de Alexandre
          e termina com a conquista romana do Egito. Nesse período, o mundo grego se expandiu
          enormemente — Egito, Pérsia, Síria, parte da Índia — criando um cosmopolitismo cultural
          sem precedentes.
        </p>
        <p>
          A <strong>polis</strong> grega clássica, comunidade política limitada e autogovernada,
          foi absorvida em impérios vastos. O cidadão deixou de ser o pilar do cosmos político.
          Surgiu uma nova pergunta: sem a polis, como o indivíduo pode encontrar sentido, virtude
          e paz?
        </p>
        <p>
          As escolas helenísticas deslocaram o foco filosófico da cosmologia e da política
          (os pré-socráticos, Platão, Aristóteles) para a <strong>ética individual</strong>:
          como o indivíduo pode alcançar a felicidade, a paz interior e a virtude num mundo
          que não controla?
        </p>
        <div className="lesson-highlight">
          <h3>A questão central do helenismo</h3>
          <p>
            "Como devo viver para ser feliz?" — essa pergunta, antes respondida em relação à
            polis e ao cosmos, passou a ser respondida em relação ao <em>indivíduo</em> e à sua
            alma. Essa mudança marca uma das maiores transições da história da filosofia.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mapa Helenístico</span>
        <h2>2. As quatro escolas em perspectiva</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 500 260" width="500" height="260" aria-label="Mapa das escolas helenísticas">
            {/* Quadrante */}
            <line x1="250" y1="20" x2="250" y2="240" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4,4"/>
            <line x1="20" y1="130" x2="480" y2="130" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4,4"/>

            {/* Estoicismo */}
            <rect x="30" y="30" width="195" height="90" rx="12" fill="#1d4ed8" opacity="0.85"/>
            <text x="127" y="58" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">ESTOICISMO</text>
            <text x="127" y="78" textAnchor="middle" fontSize="11" fill="#bfdbfe">Zenão de Cítio</text>
            <text x="127" y="96" textAnchor="middle" fontSize="10" fill="#93c5fd">Virtude = único bem</text>
            <text x="127" y="112" textAnchor="middle" fontSize="10" fill="#93c5fd">Apatheia — controle interno</text>

            {/* Epicurismo */}
            <rect x="275" y="30" width="195" height="90" rx="12" fill="#059669" opacity="0.85"/>
            <text x="372" y="58" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">EPICURISMO</text>
            <text x="372" y="78" textAnchor="middle" fontSize="11" fill="#a7f3d0">Epicuro de Samos</text>
            <text x="372" y="96" textAnchor="middle" fontSize="10" fill="#6ee7b7">Prazer = ausência de dor</text>
            <text x="372" y="112" textAnchor="middle" fontSize="10" fill="#6ee7b7">Ataraxia — tranquilidade</text>

            {/* Ceticismo */}
            <rect x="30" y="145" width="195" height="90" rx="12" fill="#d97706" opacity="0.85"/>
            <text x="127" y="173" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">CETICISMO</text>
            <text x="127" y="193" textAnchor="middle" fontSize="11" fill="#fef3c7">Pirro de Élis</text>
            <text x="127" y="211" textAnchor="middle" fontSize="10" fill="#fde68a">Epoché — suspensão do juízo</text>
            <text x="127" y="227" textAnchor="middle" fontSize="10" fill="#fde68a">Ataraxia pela não-crença</text>

            {/* Cinismo */}
            <rect x="275" y="145" width="195" height="90" rx="12" fill="#7c3aed" opacity="0.85"/>
            <text x="372" y="173" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff">CINISMO</text>
            <text x="372" y="193" textAnchor="middle" fontSize="11" fill="#ddd6fe">Diógenes de Sinope</text>
            <text x="372" y="211" textAnchor="middle" fontSize="10" fill="#c4b5fd">Rejeição das convenções</text>
            <text x="372" y="227" textAnchor="middle" fontSize="10" fill="#c4b5fd">Vida segundo a natureza</text>
          </svg>
          <figcaption>As quatro grandes escolas filosóficas do período helenístico e seus princípios fundamentais.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Epicurismo</span>
        <h2>3. Epicurismo: prazer, amizade e tranquilidade</h2>
        <p>
          <strong>Epicuro de Samos</strong> (341–270 a.C.) fundou sua escola no jardim de sua casa
          em Atenas — o Jardim. Nele ensinava a filosofia como medicina da alma.
        </p>
        <p>
          A filosofia epicurista busca a <strong>ataraxia</strong> (ἀταραξία) — tranquilidade da
          alma, ausência de turbulência — e a <strong>aponia</strong> — ausência de dor corporal.
          O prazer (<em>hedone</em>) é o bem supremo, mas Epicuro distinguia dois tipos:
        </p>
        <ul>
          <li><strong>Prazeres cinéticos:</strong> prazeres em movimento — comida, bebida, sexo. Produzem satisfação temporária mas também turbulência.</li>
          <li><strong>Prazeres catastemáticos:</strong> prazeres em repouso — saúde, amizade, tranquilidade, filosofia. São mais duradouros e estáveis.</li>
        </ul>
        <p>
          Os medos que destroem a paz interior, segundo Epicuro:
        </p>
        <ul>
          <li><strong>Medo dos deuses:</strong> eliminado pela física atomista — os deuses não se importam com os humanos.</li>
          <li><strong>Medo da morte:</strong> eliminado pelo argumento: "Quando a morte está presente, eu não estou; quando eu estou, a morte não está."</li>
          <li><strong>Medo da dor:</strong> eliminado pelo argumento de que dores intensas são breves e dores longas são suportáveis.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Epicuro e a amizade</h3>
          <p>
            Para Epicuro, a <strong>amizade</strong> (philia) é o maior bem externo. "De todos os
            bens que a sabedoria proporciona para a felicidade de toda a vida, o maior de todos é
            a aquisição da amizade." O Jardim era tanto uma escola filosófica quanto uma comunidade
            de amigos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estoicismo</span>
        <h2>4. Estoicismo: virtude, logos e a apatheia</h2>
        <p>
          <strong>Zenão de Cítio</strong> (c. 336–264 a.C.) fundou o Estoicismo em Atenas, ensinando
          na <em>Stoa Poikilé</em> (pórtico pintado) — daí o nome "estoicismo". Os grandes estoicos
          posteriores incluem Epicteto, Marco Aurélio e Sêneca.
        </p>
        <p>
          Princípios fundamentais do estoicismo:
        </p>
        <ul>
          <li>
            <strong>O logos universal:</strong> o cosmos é governado por uma razão universal (logos)
            que é divina, providencial e necessária. Tudo o que acontece acontece por necessidade racional.
          </li>
          <li>
            <strong>Virtude como único bem:</strong> apenas a virtude é um bem verdadeiro. Saúde,
            riqueza, fama são "coisas preferíveis" mas não bens em si mesmos — podem ser perdidos.
            A virtude não pode ser tirada de ninguém.
          </li>
          <li>
            <strong>Dicotomia do controle:</strong> existem coisas que dependem de nós (opiniões,
            desejos, valores) e coisas que não dependem (corpo, riqueza, opinião alheia).
            A sabedoria consiste em focar no que depende de nós.
          </li>
          <li>
            <strong>Apatheia:</strong> não é indiferença emocional, mas a eliminação das <em>paixões</em>
            (emoções irracionais baseadas em julgamentos falsos). O sábio estoico tem emoções racionais
            (alegria, precaução, vontade racional), não paixões (prazer, medo, apetite, angústia).
          </li>
          <li>
            <strong>Cosmopolitismo:</strong> todos os seres humanos participam do logos universal —
            todos são, portanto, "cidadãos do cosmos" (kosmopolites). Antecipa a ideia de direitos humanos universais.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ceticismo</span>
        <h2>5. Ceticismo pirrônico: suspensão do juízo</h2>
        <p>
          <strong>Pirro de Élis</strong> (c. 360–270 a.C.) fundou o ceticismo antigo — a escola
          que mais radicalmente questionou a possibilidade do conhecimento. Pirro teria acompanhado
          Alexandre até a Índia e se influenciado pelos gimnosofistas indianos.
        </p>
        <p>
          A posição pirrônica: para qualquer afirmação sobre a realidade, é possível apresentar
          argumentos igualmente fortes a favor e contra. Diante dessa equipolência
          (<em>isostheneia</em>), a única resposta racional é a <strong>epoché</strong>
          (ἐποχή) — suspensão do juízo, nem afirmar nem negar.
        </p>
        <p>
          Resultado da epoché: a <strong>ataraxia</strong> — tranquilidade da alma. Sem crenças
          firmes, não há angústia causada por crenças falsas. A paz interior vem da
          <em> ausência de comprometimento dogmático</em>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cinismo</span>
        <h2>6. Cinismo: Diógenes e a vida conforme a natureza</h2>
        <p>
          O <strong>Cinismo</strong> tem como fundador <strong>Antístenes</strong> (discípulo de
          Sócrates) e como figura mais famosa <strong>Diógenes de Sinope</strong> (c. 412–323 a.C.),
          que viveu em um tonel na praça pública de Atenas.
        </p>
        <p>
          Diógenes é célebre por seus gestos filosóficos provocativos:
        </p>
        <ul>
          <li>Viveu sem casa, família ou bens — apenas um manto, um cajado e uma tigela (que abandonou ao ver uma criança beber água com as mãos).</li>
          <li>Quando Alexandre, o Grande, perguntou o que queria, respondeu: "Que saias da frente do meu sol."</li>
          <li>Andava de dia com uma lanterna, dizendo procurar "um ser humano honesto".</li>
        </ul>
        <p>
          Princípios cínicos:
        </p>
        <ul>
          <li><strong>Autarquia</strong> (autossuficiência): independência de bens externos e convenções sociais.</li>
          <li><strong>Vida segundo a natureza:</strong> rejeição das convenções artificiais da sociedade (riqueza, fama, honra, família).</li>
          <li><strong>Virtude prática:</strong> não teórica, mas vivida corporalmente como demonstração pública.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela Comparativa</span>
        <h2>7. As quatro escolas: comparação sistemática</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Epicurismo</th>
                <th>Estoicismo</th>
                <th>Ceticismo</th>
                <th>Cinismo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fundador</strong></td>
                <td>Epicuro</td>
                <td>Zenão de Cítio</td>
                <td>Pirro de Élis</td>
                <td>Antístenes/Diógenes</td>
              </tr>
              <tr>
                <td><strong>Bem supremo</strong></td>
                <td>Ataraxia (prazer)</td>
                <td>Virtude</td>
                <td>Ataraxia (sem crença)</td>
                <td>Virtude prática</td>
              </tr>
              <tr>
                <td><strong>Método</strong></td>
                <td>Retirada do mundo, amizade</td>
                <td>Aceitação racional do destino</td>
                <td>Suspensão do juízo</td>
                <td>Rejeição das convenções</td>
              </tr>
              <tr>
                <td><strong>Legado</strong></td>
                <td>Utilitarismo, hedonismo ético</td>
                <td>Ética estoica cristã, neostoicismo</td>
                <td>Ceticismo científico moderno</td>
                <td>Ideias anarquistas, anticonsumismo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>8. Legado helenístico no pensamento moderno e contemporâneo</h2>
        <p>
          As escolas helenísticas não desapareceram com a antiguidade — elas ressurgiram com força
          na filosofia moderna e continuam vivas hoje. O <strong>neostoicismo</strong> do século XVI
          (Justo Lípsio) adaptou o estoicismo ao contexto cristão europeu. No século XX e XXI,
          o estoicismo voltou como filosofia de vida prática, influenciando a psicologia cognitiva
          (Albert Ellis, Aaron Beck) e movimentos de desenvolvimento pessoal.
        </p>
        <p>
          <strong>Marco Aurélio</strong> (121–180 d.C.), imperador romano e filósofo estoico,
          escreveu as <em>Meditações</em> — diário filosófico escrito para si mesmo durante campanhas
          militares. Obra que o ENEM pode cobrar como exemplo de estoicismo prático: governar um
          império enquanto pratica a dicotomia do controle e a aceitação do destino.
        </p>
        <ul>
          <li><strong>Estoicismo e terapia cognitivo-comportamental (TCC):</strong> a ideia central da TCC — "não são os eventos que nos perturbam, mas os julgamentos que fazemos sobre eles" — é a reformulação moderna da apatheia estoica.</li>
          <li><strong>Epicurismo e minimalismo:</strong> o movimento contemporâneo do minimalismo e do "slow living" retoma o ideal epicurista da simplicidade voluntária e da priorização de prazeres duradouros sobre bens materiais.</li>
          <li><strong>Cinismo e anticonsumismo:</strong> movimentos contemporâneos de crítica ao consumismo e à sociedade do espetáculo dialogam com a recusa cínica das convenções e da acumulação de bens.</li>
          <li><strong>Ceticismo e método científico:</strong> a atitude de suspender o juízo até ter evidências suficientes, de nunca afirmar além do que as provas permitem, é herdeira direta do ceticismo antigo.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>No ENEM</h3>
          <p>
            O ENEM cobra frequentemente o estoicismo em questões sobre autonomia, controle
            emocional e direitos humanos. O epicurismo aparece em questões sobre hedonismo
            e consumismo. Reconheça as palavras-chave: <em>apatheia, ataraxia, epoché,
            logos, virtude, prazer</em> — cada uma sinaliza a escola filosófica específica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estoicismo Hoje</span>
        <h2>9. O Estoicismo Contemporâneo e as Escolas Helenísticas no ENEM</h2>
        <p>
          O estoicismo experimenta um notável renascimento no século XXI. Livros como
          <em>Meditations</em> de Marco Aurélio, <em>A Guide to the Good Life</em> de William
          Irvine e o movimento "Modern Stoicism" levam a filosofia estoica à psicologia
          contemporânea, ao coaching e ao bem-estar pessoal.
        </p>
        <p>
          A conexão entre estoicismo antigo e psicologia moderna é real: a
          <strong>terapia cognitivo-comportamental</strong> (TCC) de Aaron Beck e Albert Ellis
          foi diretamente inspirada no estoicismo — especialmente na ideia de Epicteto de que
          "não são os fatos que perturbam os homens, mas a opinião que eles têm dos fatos."
          Distinguir o que está em nosso poder do que não está é o princípio central de ambos.
        </p>
        <p>
          No ENEM, as escolas helenísticas aparecem tipicamente em:
        </p>
        <ul>
          <li>Questões que pedem a distinção entre prazer epicurista (ataraxia, aponia) e virtude estoica (apatheia, eudaimonia)</li>
          <li>Textos que descrevem um modo de vida filosófico e pedem identificação da escola</li>
          <li>Questões sobre a relação entre filosofia e felicidade — cada escola tem uma resposta distinta</li>
          <li>Conexões com o estoicismo romano (Sêneca, Marco Aurélio) e sua relevância para a ética contemporânea</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Comparação rápida: os quatro caminhos para a "vida boa"</h3>
          <p>
            <strong>Epicurismo:</strong> prazer moderado (ataraxia), amizade, retirada da política.<br/>
            <strong>Estoicismo:</strong> virtude, aceitação do destino, ação no mundo (Marco Aurélio era imperador).<br/>
            <strong>Ceticismo:</strong> suspensão do juízo (epoché), ataraxia pela não-tomada-de-posição.<br/>
            <strong>Cinismo:</strong> virtude radical, pobreza voluntária, desafio às convenções sociais (Diógenes).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🌿</span>
            <h3>Epicurismo</h3>
            <p>Ataraxia via prazer moderado e amizade. Medo dos deuses e da morte eliminados pela razão.</p>
          </div>
          <div className="math-card">
            <span>🏛️</span>
            <h3>Estoicismo</h3>
            <p>Virtude como único bem. Apatheia. Dicotomia do controle. Cosmopolitismo universal.</p>
          </div>
          <div className="math-card">
            <span>🤷</span>
            <h3>Ceticismo</h3>
            <p>Epoché — suspensão do juízo. Ataraxia pela ausência de crenças dogmáticas.</p>
          </div>
          <div className="math-card">
            <span>🐕</span>
            <h3>Cinismo</h3>
            <p>Vida conforme a natureza. Rejeição radical das convenções. Autarquia e virtude prática.</p>
          </div>
          <div className="math-card">
            <span>🌍</span>
            <h3>Contexto</h3>
            <p>Crise da polis após Alexandre. Foco na ética individual para sobreviver num mundo imperial.</p>
          </div>
          <div className="math-card">
            <span>🔗</span>
            <h3>Legado</h3>
            <p>Estoicismo influencia o direito romano e o cristianismo; epicurismo, o utilitarismo moderno.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. A Ataraxia"
          statement={<p>O conceito de ataraxia é central tanto para o epicurismo quanto para o ceticismo. Esse conceito significa:</p>}
          options={[
            { letter: "a", text: "A prática de exercícios físicos para fortalecer o corpo e a mente." },
            { letter: "b", text: "A tranquilidade e a paz interior da alma, ausência de perturbação.", correct: true },
            { letter: "c", text: "A indiferença total aos outros seres humanos e ao mundo social." },
            { letter: "d", text: "A busca pelo prazer máximo, incluindo os prazeres corporais intensos." },
          ]}
          resolution={<p>A <strong>ataraxia</strong> (ἀταραξία) — literalmente "ausência de perturbação" — é o estado de tranquilidade e paz interior que ambas as escolas buscam, mas por caminhos diferentes: para <em>Epicuro</em>, alcançada pelo prazer moderado, amizade e eliminação dos medos irracionais; para <em>Pirro</em>, alcançada pela suspensão do juízo (epoché) — sem crenças firmes, não há angústia. Em ambos os casos, a ataraxia é o equivalente helenístico da eudaimonia aristotélica — o bem supremo ao qual a filosofia deve conduzir.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. A Dicotomia Estoica"
          statement={<p>O estoico Epicteto afirmou: "Algumas coisas dependem de nós, outras não." Com base no estoicismo, uma resposta corretamente estoica diante de uma doença incurável seria:</p>}
          options={[
            { letter: "a", text: "Desesperar-se e lamentar a injustiça do destino, pois a saúde é o bem mais importante." },
            { letter: "b", text: "Ignorar a doença completamente, pois os estoicos acreditavam que o corpo não existe." },
            { letter: "c", text: "Aceitar a doença como algo fora do controle e focar na qualidade das escolhas e valores que ainda dependem de si mesmo.", correct: true },
            { letter: "d", text: "Buscar prazer imediato enquanto possível, pois a ataraxia justifica qualquer meio de alívio." },
          ]}
          resolution={<p>A <strong>dicotomia do controle</strong> estoica — "algumas coisas dependem de nós, outras não" — é o fundamento da filosofia prática estoica. A doença incurável é algo fora do controle. Lamentá-la ou a ela resistir irracionalmente é desperdiçar a energia que podemos direcionar para o que <em>depende</em> de nós: como respondemos à doença, quais valores mantemos, como tratamos os outros, como usamos o tempo restante. Marco Aurélio, imperador romano e estoico, governou um império vasto enquanto enfrentava uma pandemia e perdas pessoais — usando exatamente essa distinção.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Estoicismo e Direitos Humanos"
          statement={<p>Os estoicos desenvolveram o conceito de cosmopolitismo — todos os seres humanos são "cidadãos do cosmos" (kosmopolites). Que relação existe entre esse conceito e a ideia moderna de direitos humanos universais?</p>}
          options={[
            { letter: "a", text: "Nenhuma — os estoicos limitavam seus princípios à aristocracia grega e romana." },
            { letter: "b", text: "O estoicismo antecipa a ideia de que todos os seres humanos compartilham uma natureza racional comum que fundamenta direitos iguais.", correct: true },
            { letter: "c", text: "O cosmopolitismo estoico é oposto à ideia de direitos humanos pois rejeita as instituições políticas." },
            { letter: "d", text: "Os estoicos defendiam o relativismo moral — cada cultura define seus próprios direitos." },
          ]}
          resolution={<p>O <strong>cosmopolitismo estoico</strong> tem uma conexão direta com os fundamentos filosóficos dos direitos humanos modernos. Para os estoicos, todos os seres humanos participam do <em>logos</em> universal — a razão divina que governa o cosmos. Isso significa que todo ser humano tem uma <em>dignidade intrínseca</em> baseada em sua natureza racional, independentemente de sua origem, classe ou nacionalidade. Essa ideia influenciou o direito romano (ius gentium — direito das gentes), o direito natural medieval (Tomás de Aquino), o iluminismo (Kant: dignidade como fim em si mesmo) e a Declaração Universal dos Direitos Humanos de 1948.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Epicurismo e Consumismo"
          statement={<p>Um filósofo epicurista contemporâneo analisaria a sociedade de consumo moderna afirmando que ela promove a felicidade através de:</p>}
          options={[
            { letter: "a", text: "A satisfação dos desejos naturais e necessários, que Epicuro considerava o caminho correto para a ataraxia." },
            { letter: "b", text: "Prazeres cinéticos e vãos que geram turbulência, ao invés da tranquilidade duradoura que Epicuro buscava.", correct: true },
            { letter: "c", text: "A amizade e a comunidade filosófica que Epicuro defendia como o maior bem humano." },
            { letter: "d", text: "A eliminação dos medos da morte e dos deuses, base da felicidade epicurista." },
          ]}
          resolution={<p>Epicuro classificava os desejos em: naturais e necessários (comida, abrigo), naturais e não-necessários (luxúria, gastronomia refinada) e vãos (fama, poder, riqueza excessiva). A sociedade de consumo moderna promove principalmente os <em>prazeres cinéticos</em> — em movimento, efêmeros, que sempre exigem mais para manter a satisfação. Para Epicuro, isso produz o oposto da ataraxia: <em>turbulência</em> constante, ansiedade e nunca-satisfação. O caminho epicurista seria a simplicidade voluntária, a amizade e o desenvolvimento intelectual — radicalmente contrário ao consumismo.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Diógenes e as Convenções Sociais"
          statement={<p>Diante de Alexandre, o Grande, que se ofereceu para dar-lhe qualquer coisa que desejasse, Diógenes respondeu: "Que saias da frente do meu sol." Essa atitude ilustra o princípio cínico de:</p>}
          options={[
            { letter: "a", text: "Arrogância aristocrática — Diógenes se considerava superior ao próprio rei macedônico." },
            { letter: "b", text: "Autarquia e rejeição das convenções de poder e riqueza — a liberdade interior vale mais que qualquer favor do poder.", correct: true },
            { letter: "c", text: "Ceticismo político — Diógenes não acreditava na existência real do poder de Alexandre." },
            { letter: "d", text: "Estoicismo prático — Diógenes aceitava o destino sem pedir nada que pudesse perturbar sua apatheia." },
          ]}
          resolution={<p>O gesto de Diógenes é um manifesto filosófico do Cinismo: a recusa radical a se impressionar com a riqueza, o poder e as honras que a sociedade valoriza. Ao pedir apenas que Alexandre saísse da frente do sol (o único bem que realmente queria no momento), Diógenes demonstra a <strong>autarquia</strong> cínica — completa independência dos bens e favores externos. Para o cínico, um filósofo que vivesse em um tonel era mais livre do que um rei cercado de obrigações, riquezas e medos. Essa subversão radical das hierarquias sociais foi inspiradora para movimentos anarquistas, minimalistas e críticos do consumismo moderno.</p>}
        />
      </section>
    </article>
  );
}
