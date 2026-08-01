"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap04Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 4</span>
          <h1>Lógica, argumentação e construção do pensamento crítico</h1>
          <p>
            A lógica é a espinha dorsal da Filosofia — ela estabelece as regras que tornam o
            pensamento válido e os argumentos corretos. Neste capítulo, você aprenderá a
            identificar premissas e conclusões, reconhecer falácias comuns e desenvolver
            o pensamento crítico exigido pelo ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O que é Lógica</span>
        <h2>1. Lógica: a arte de pensar corretamente</h2>
        <p>
          A <strong>lógica</strong> é o ramo da filosofia que estuda as regras do pensamento
          válido e da argumentação correta. Seu objetivo não é dizer o que é verdadeiro sobre
          o mundo, mas garantir que o <em>processo de raciocínio</em> seja coerente e consistente.
        </p>
        <p>
          Aristóteles (séc. IV a.C.) foi o primeiro a sistematizar a lógica como disciplina
          autônoma. Seu trabalho, reunido no <em>Organon</em>, estabeleceu as bases da
          lógica formal ocidental que dominou por mais de dois mil anos.
        </p>
        <div className="lesson-highlight">
          <h3>Validade vs. Verdade</h3>
          <p>
            Um argumento pode ser <strong>válido</strong> (estrutura correta) sem ser <strong>verdadeiro</strong>
            (premissas corretas). Ex.: "Todos os gatos são azuis. Meu animal é um gato. Logo, meu animal é azul."
            — argumento válido, premissa falsa. A lógica avalia a forma, não o conteúdo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Silogismo</span>
        <h2>2. O silogismo aristotélico</h2>
        <p>
          O <strong>silogismo</strong> é a forma clássica de argumento dedutivo criada por Aristóteles.
          Compõe-se de três partes:
        </p>
        <ul>
          <li><strong>Premissa maior:</strong> afirmação universal ("Todo X é Y").</li>
          <li><strong>Premissa menor:</strong> afirmação particular ("Z é X").</li>
          <li><strong>Conclusão:</strong> decorrência necessária ("Logo, Z é Y").</li>
        </ul>
        <figure className="lesson-figure">
          <svg viewBox="0 0 460 220" width="460" height="220" aria-label="Estrutura do silogismo aristotélico">
            {/* Caixa Premissa Maior */}
            <rect x="30" y="30" width="180" height="50" rx="8" fill="#1d4ed8"/>
            <text x="120" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">Premissa Maior</text>
            <text x="120" y="68" textAnchor="middle" fontSize="11" fill="#bfdbfe">"Todo ser humano é mortal"</text>

            {/* Caixa Premissa Menor */}
            <rect x="250" y="30" width="180" height="50" rx="8" fill="#7c3aed"/>
            <text x="340" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">Premissa Menor</text>
            <text x="340" y="68" textAnchor="middle" fontSize="11" fill="#ddd6fe">"Sócrates é ser humano"</text>

            {/* Setas */}
            <line x1="120" y1="80" x2="200" y2="150" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrS)"/>
            <line x1="340" y1="80" x2="260" y2="150" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrS)"/>

            {/* Caixa Conclusão */}
            <rect x="150" y="150" width="160" height="50" rx="8" fill="#059669"/>
            <text x="230" y="172" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff">Conclusão</text>
            <text x="230" y="188" textAnchor="middle" fontSize="11" fill="#a7f3d0">"Sócrates é mortal"</text>

            <defs>
              <marker id="arrS" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6b7280"/>
              </marker>
            </defs>

            <text x="230" y="215" textAnchor="middle" fontSize="10" fill="#9ca3af">Dedução: conclusão necessária das premissas</text>
          </svg>
          <figcaption>Estrutura do silogismo clássico de Aristóteles: o exemplo mais famoso da história da lógica.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos de Raciocínio</span>
        <h2>3. Dedução, indução e abdução</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Direção</th>
                <th>Características</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Dedução</strong></td>
                <td>Geral → Particular</td>
                <td>Conclusão necessária; se premissas são verdadeiras, conclusão é verdadeira</td>
                <td>Todos os metais conduzem eletricidade. Ferro é metal. Logo, ferro conduz eletricidade.</td>
              </tr>
              <tr>
                <td><strong>Indução</strong></td>
                <td>Particular → Geral</td>
                <td>Conclusão provável; generaliza a partir de casos observados; pode ser falsa</td>
                <td>Vi 100 cisnes brancos. Logo, todos os cisnes são brancos. (Falso! Existem cisnes negros.)</td>
              </tr>
              <tr>
                <td><strong>Abdução</strong></td>
                <td>Efeito → Causa</td>
                <td>Inferência para a melhor explicação; hipótese mais plausível</td>
                <td>O chão está molhado. A melhor explicação é que choveu. (Pode ter sido outra coisa.)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>O problema da indução (Hume)</h3>
          <p>
            David Hume mostrou que nenhum número de casos observados pode garantir logicamente
            uma lei universal. O famoso "problema do cisne negro" ilustra isso: por mais cisnes
            brancos que observemos, nunca podemos ter certeza absoluta de que todos os cisnes são
            brancos. A indução gera probabilidade, não certeza lógica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Falácias</span>
        <h2>4. Falácias: erros no argumento</h2>
        <p>
          Uma <strong>falácia</strong> é um argumento que parece válido mas contém um erro lógico.
          Reconhecer falácias é uma das habilidades mais valorizadas pelo ENEM. As principais são:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Falácia</th>
                <th>Descrição</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ad Hominem</strong></td>
                <td>Ataca a pessoa, não o argumento</td>
                <td>"Você não pode falar de ecologia, pois usa carro."</td>
              </tr>
              <tr>
                <td><strong>Espantalho</strong></td>
                <td>Distorce o argumento adversário para atacá-lo mais facilmente</td>
                <td>"Ele quer mais impostos, ou seja, quer roubar os trabalhadores."</td>
              </tr>
              <tr>
                <td><strong>Apelo à autoridade</strong></td>
                <td>Usa opinião de especialista como prova definitiva</td>
                <td>"Médicos famosos recomendam, logo funciona."</td>
              </tr>
              <tr>
                <td><strong>Apelo à maioria</strong></td>
                <td>Argumento baseado no que a maioria acredita</td>
                <td>"Todo mundo acha que é errado, então deve ser."</td>
              </tr>
              <tr>
                <td><strong>Falsa dicotomia</strong></td>
                <td>Apresenta apenas duas opções quando há mais</td>
                <td>"Ou você está comigo, ou está contra mim."</td>
              </tr>
              <tr>
                <td><strong>Slippery slope</strong></td>
                <td>Afirma que A levará inevitavelmente a Z sem justificativa</td>
                <td>"Se permitirmos isso, logo viraremos uma ditadura."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Pensamento Crítico</span>
        <h2>5. O que é pensamento crítico?</h2>
        <p>
          O <strong>pensamento crítico</strong> é a capacidade de analisar, avaliar e sintetizar
          informações de forma racional, com abertura para rever conclusões à luz de novas evidências.
          Não se confunde com "criticar tudo" — é pensar <em>com rigor e responsabilidade intelectual</em>.
        </p>
        <p>
          Habilidades do pensamento crítico:
        </p>
        <ul>
          <li><strong>Análise:</strong> decompor um problema em suas partes constituintes.</li>
          <li><strong>Avaliação:</strong> julgar a credibilidade de fontes e a validade de argumentos.</li>
          <li><strong>Inferência:</strong> tirar conclusões razoáveis a partir das evidências disponíveis.</li>
          <li><strong>Explicação:</strong> articular razões claras para as próprias conclusões.</li>
          <li><strong>Metacognição:</strong> refletir sobre o próprio processo de pensamento.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Proposições</span>
        <h2>6. Proposições e termos lógicos</h2>
        <p>
          Uma <strong>proposição</strong> é uma afirmação que pode ser verdadeira ou falsa.
          Perguntas, ordens e exclamações não são proposições lógicas. As proposições se combinam
          por <strong>conectivos lógicos</strong>:
        </p>
        <ul>
          <li><strong>E (conjunção):</strong> ambas as proposições devem ser verdadeiras.</li>
          <li><strong>OU (disjunção):</strong> pelo menos uma deve ser verdadeira.</li>
          <li><strong>NÃO (negação):</strong> inverte o valor de verdade.</li>
          <li><strong>SE...ENTÃO (condicional):</strong> se a premissa for verdadeira, a conclusão também deve ser.</li>
          <li><strong>SE E SOMENTE SE (bicondicional):</strong> ambas são verdadeiras ou ambas são falsas.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Lógica e democracia</h3>
          <p>
            A Filosofia grega associou a lógica à democracia: o argumento racional substituiu
            a autoridade e a força como modo de convencer. Na ágora ateniense, vencia quem
            argumentava melhor — não quem gritava mais alto ou tinha mais poder.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Argumentação no ENEM</span>
        <h2>7. A argumentação filosófica nas redações e questões do ENEM</h2>
        <p>
          Na <strong>redação do ENEM</strong>, o candidato deve apresentar uma tese, argumentá-la
          com base em repertório filosófico, sociológico e histórico, e propor uma intervenção.
          A estrutura argumentativa é central.
        </p>
        <p>
          Nas <strong>questões de múltipla escolha</strong>, a lógica ajuda a:
        </p>
        <ul>
          <li>Identificar o argumento central do texto filosófico apresentado.</li>
          <li>Reconhecer quando uma alternativa distorce o argumento (falácia do espantalho).</li>
          <li>Descartar alternativas que contradizem a tese do autor.</li>
          <li>Identificar qual alternativa melhor representa a consequência lógica do texto.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Lógica Moderna</span>
        <h2>8. Lógica formal moderna e linguagem simbólica</h2>
        <p>
          No século XIX, a lógica sofreu uma revolução comparável à que a geometria viveu com
          Euclides. <strong>Gottlob Frege</strong> (1848–1925) criou a lógica de predicados —
          a primeira lógica capaz de expressar enunciados com quantificadores ("todo", "existe")
          e relações, superando as limitações do silogismo aristotélico.
        </p>
        <p>
          <strong>Bertrand Russell</strong> e <strong>Alfred North Whitehead</strong>, nos
          <em> Principia Mathematica</em> (1910–1913), tentaram reduzir toda a matemática à
          lógica — o projeto chamado <em>logicismo</em>. Embora o objetivo final tenha sido
          refutado por Gödel (1931), o projeto criou a base da matemática e da computação modernas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Símbolo</th>
                <th>Nome</th>
                <th>Significado</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>¬</strong></td>
                <td>Negação</td>
                <td>NÃO p</td>
                <td>¬(chove) = não chove</td>
              </tr>
              <tr>
                <td><strong>∧</strong></td>
                <td>Conjunção</td>
                <td>p E q</td>
                <td>chove ∧ faz frio</td>
              </tr>
              <tr>
                <td><strong>∨</strong></td>
                <td>Disjunção</td>
                <td>p OU q</td>
                <td>estudo ∨ durmo</td>
              </tr>
              <tr>
                <td><strong>→</strong></td>
                <td>Condicional</td>
                <td>SE p ENTÃO q</td>
                <td>p → q (se estuda então passa)</td>
              </tr>
              <tr>
                <td><strong>↔</strong></td>
                <td>Bicondicional</td>
                <td>p SE E SOMENTE SE q</td>
                <td>p ↔ q (equivalência)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Os Teoremas de Incompletude de Gödel</h3>
          <p>
            Em 1931, Kurt Gödel demonstrou que <em>qualquer sistema formal suficientemente
            poderoso conterá afirmações verdadeiras que não podem ser provadas dentro do
            sistema</em>. Isso mostrou que a lógica tem limites intrínsecos — há verdades
            matemáticas que escapam à demonstração formal. É um dos resultados mais profundos
            e perturbadores da história do pensamento humano.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Lógica Digital</span>
        <h2>9. Falácias nas Redes Sociais e a Lógica no Cotidiano</h2>
        <p>
          A lógica filosófica não é apenas exercício abstrato — ela é a ferramenta mais prática
          para navegar num ambiente informacional saturado de falácias, manipulações e
          desinformação. No mundo das redes sociais, as falácias se multiplicam porque alcançam
          milhões de pessoas antes que possam ser refutadas.
        </p>
        <p>
          As falácias mais comuns nas redes sociais:
        </p>
        <ul>
          <li>
            <strong>Apelo à emoção:</strong> conteúdos que provocam medo, raiva ou indignação
            antes de apresentar argumentos. As fake news quase sempre usam essa estratégia.
          </li>
          <li>
            <strong>Câmaras de eco:</strong> algoritmos que mostram apenas conteúdo com que já
            concordamos, produzindo a ilusão de que "todo mundo pensa assim" (apelo à maioria).
          </li>
          <li>
            <strong>Cherry-picking:</strong> selecionar apenas os dados que confirmam uma
            posição, ignorando os que a contradizem — violação da exigência lógica de
            considerar todas as evidências relevantes.
          </li>
          <li>
            <strong>Falsa equivalência:</strong> tratar posições radicalmente assimétricas como
            "dois lados igualmente válidos" — ex.: tratar consenso científico e negacionismo
            como opiniões equivalentes.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Pensamento crítico como vacina</h3>
          <p>
            O <strong>inoculação do pensamento crítico</strong> (prebunking) é mais eficaz
            do que o fact-checking depois do fato. Aprender a identificar falácias antes de
            encontrá-las — exatamente o que a lógica filosófica oferece — reduz a suscetibilidade
            à desinformação. A filosofia, nesse sentido, é cidadania digital.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔢</span>
            <h3>Lógica</h3>
            <p>Estudo das regras do pensamento válido. Criada por Aristóteles no Organon.</p>
          </div>
          <div className="math-card">
            <span>📐</span>
            <h3>Silogismo</h3>
            <p>Premissa maior + premissa menor = conclusão necessária. Base da dedução.</p>
          </div>
          <div className="math-card">
            <span>↗️</span>
            <h3>Indução</h3>
            <p>Do particular ao geral. Probabilística, não garante certeza absoluta (Hume).</p>
          </div>
          <div className="math-card">
            <span>❌</span>
            <h3>Falácias</h3>
            <p>Erros lógicos: ad hominem, espantalho, apelo à autoridade, falsa dicotomia.</p>
          </div>
          <div className="math-card">
            <span>🧠</span>
            <h3>Pensamento Crítico</h3>
            <p>Analisar, avaliar, inferir e explicar com rigor — sem aceitar dogmas acriticamente.</p>
          </div>
          <div className="math-card">
            <span>🗳️</span>
            <h3>Lógica e Democracia</h3>
            <p>Argumento racional como base do debate democrático — herança da ágora ateniense.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Identificação de Silogismo"
          statement={<p>Complete o silogismo: "Todo mamífero respira ar. A baleia é um mamífero. Portanto, ___."</p>}
          options={[
            { letter: "a", text: "A baleia vive no mar." },
            { letter: "b", text: "A baleia é um peixe." },
            { letter: "c", text: "A baleia respira ar.", correct: true },
            { letter: "d", text: "Todo animal que respira ar vive no mar." },
          ]}
          resolution={<p>O silogismo tem uma estrutura dedutiva necessária: Premissa maior: "Todo mamífero respira ar." Premissa menor: "A baleia é um mamífero." Conclusão necessária: "A baleia respira ar." Note que a conclusão segue <em>necessariamente</em> das premissas — não é possível que as premissas sejam verdadeiras e a conclusão falsa. Isso é o que torna o argumento <strong>válido</strong>.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Tipos de Raciocínio"
          statement={<p>Um cientista observou que 500 amostras de determinado composto reagiram da mesma maneira ao ser aquecidas, e concluiu que todos os compostos desse tipo reagem assim. Esse tipo de raciocínio é chamado de:</p>}
          options={[
            { letter: "a", text: "Dedução, pois parte de uma lei universal para casos particulares." },
            { letter: "b", text: "Abdução, pois busca a melhor explicação para os fenômenos observados." },
            { letter: "c", text: "Indução, pois generaliza a partir de casos particulares observados.", correct: true },
            { letter: "d", text: "Silogismo, pois utiliza premissa maior e premissa menor para chegar à conclusão." },
          ]}
          resolution={<p>A <strong>indução</strong> vai do particular (500 amostras observadas) ao geral (conclusão sobre "todos os compostos desse tipo"). Diferentemente da dedução, a conclusão indutiva não é logicamente necessária — pode ser refutada por um único caso contrário. David Hume chamou isso de "problema da indução": nunca podemos ter certeza absoluta de uma lei geral baseada em casos observados.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Falácias Lógicas"
          statement={<p>Em um debate político, um candidato diz: "Meu oponente quer reduzir o orçamento da defesa. Claramente, ele quer deixar o país indefeso diante dos inimigos." Que tipo de falácia está sendo cometida?</p>}
          options={[
            { letter: "a", text: "Ad hominem, pois ataca o caráter do oponente." },
            { letter: "b", text: "Falácia do espantalho, pois distorce a posição do oponente para facilitar o ataque.", correct: true },
            { letter: "c", text: "Apelo à autoridade, pois invoca especialistas militares sem nomeá-los." },
            { letter: "d", text: "Slippery slope, pois assume que uma consequência inevitável seguirá a ação." },
          ]}
          resolution={<p>A <strong>falácia do espantalho</strong> (straw man) consiste em deformar a posição do adversário — criar um "espantalho" mais fácil de atacar do que a posição real. "Reduzir o orçamento da defesa" não é o mesmo que "deixar o país indefeso" — mas o candidato apresenta essa distorção como se fosse a posição real do oponente. Isso é uma manobra retórica desonesta que o pensamento crítico deve identificar e recusar.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Falácias nas Redes Sociais"
          statement={<p>Em uma discussão nas redes sociais sobre vacinação, um usuário escreve: "Você não pode me dizer que devo me vacinar. Você nem é médico!" A partir da perspectiva da lógica filosófica, esse argumento é uma falácia porque:</p>}
          options={[
            { letter: "a", text: "A vacinação é um tema exclusivamente técnico que só médicos podem debater." },
            { letter: "b", text: "Ataca a credencial da pessoa em vez de refutar as evidências científicas apresentadas.", correct: true },
            { letter: "c", text: "O argumento é válido, pois apenas especialistas têm autoridade para debater saúde." },
            { letter: "d", text: "É uma falácia do espantalho, pois distorce a posição científica sobre vacinas." },
          ]}
          resolution={<p>Este é um exemplo clássico de <strong>ad hominem</strong> (ataque à pessoa): ao invés de refutar os argumentos e evidências sobre a vacinação, o usuário ataca a credencial do interlocutor. Do ponto de vista lógico, o que importa é a validade do argumento, não quem o apresenta. As evidências científicas sobre vacinas não se tornam falsas porque quem as cita não é médico. O pensamento crítico exige responder aos <em>argumentos</em>, não às <em>pessoas</em>.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Argumento e Contexto Social"
          statement={<p>"Ou você aceita as condições de trabalho oferecidas, ou você está desempregado." Um trabalhador identificou nessa fala do empregador um argumento logicamente problemático. Que falácia está sendo utilizada?</p>}
          options={[
            { letter: "a", text: "Ad hominem, pois o empregador ataca o caráter do trabalhador." },
            { letter: "b", text: "Slippery slope, pois assume que aceitar uma condição levará a consequências piores." },
            { letter: "c", text: "Falsa dicotomia, pois apresenta apenas duas opções quando existem outras possibilidades.", correct: true },
            { letter: "d", text: "Apelo à tradição, pois justifica as condições com base em práticas históricas." },
          ]}
          resolution={<p>A <strong>falsa dicotomia</strong> (ou falso dilema) apresenta apenas duas opções como se fossem as únicas existentes, quando na realidade há mais alternativas. No caso, existem outras possibilidades além de "aceitar ou ser demitido": negociar, organizar coletivamente com outros trabalhadores, buscar alternativas legais (Ministério do Trabalho, sindicato), procurar outro emprego, etc. A falácia da falsa dicotomia é frequentemente usada em relações de poder para suprimir alternativas reais e forçar uma escolha desfavorável.</p>}
        />
      </section>
    </article>
  );
}
