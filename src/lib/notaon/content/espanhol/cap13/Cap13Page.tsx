"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap13Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 13</span>
          <h1>Futuro, Condicional e Perífrases Verbais</h1>
          <p>
            O Futuro Simple e o Condicional Simple são tempos verbais que
            aparecem com frequência em textos argumentativos, editoriais,
            ensaios científicos e literários cobrados no ENEM — especialmente
            quando o autor especula sobre o futuro, expressa hipóteses ou
            formula conjecturas sobre o presente e o passado. Além das formas
            sintéticas (um único vocábulo), o espanhol dispõe de um rico
            repertório de <em>perífrases verbais</em> — construções com
            auxiliar + infinitivo ou gerúndio — que expressam nuances de
            obrigação, intenção, início, continuidade e término de ações.
            Reconhecer essas estruturas é essencial para a interpretação
            precisa de qualquer texto.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Futuro Simple</span>
        <h2>1. Futuro Simple — formação regular</h2>
        <p>
          O Futuro Simple em espanhol é formado de maneira única: basta
          adicionar as terminações diretamente ao <strong>infinitivo inteiro</strong>
          (sem remover nada), diferente de outros tempos. Isso vale para as
          três conjugações. As terminações são iguais para todos os verbos
          regulares: <em>-é, -ás, -á, -emos, -éis, -án</em>.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>hablar</th>
                <th>comer</th>
                <th>vivir</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>yo</td><td>hablaré</td><td>comeré</td><td>viviré</td></tr>
              <tr><td>tú</td><td>hablarás</td><td>comerás</td><td>vivirás</td></tr>
              <tr><td>él/ella</td><td>hablará</td><td>comerá</td><td>vivirá</td></tr>
              <tr><td>nosotros</td><td>hablaremos</td><td>comeremos</td><td>viviremos</td></tr>
              <tr><td>vosotros</td><td>hablaréis</td><td>comeréis</td><td>viviréis</td></tr>
              <tr><td>ellos/Uds.</td><td>hablarán</td><td>comerán</td><td>vivirán</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Usos do Futuro Simple:</strong> (1) ações futuras:
          <em> Mañana hablaré con el director</em>; (2) promessas:
          <em> Te llamaré esta noche</em>; (3) probabilidade no presente
          (suposição): <em>¿Dónde estará Juan?</em> (= Onde será que está
          João?); (4) ordens formais: <em>No fumarás en este edificio</em>.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Irregulares no Futuro</span>
        <h2>2. Verbos irregulares no Futuro Simple</h2>
        <p>
          Os irregulares no Futuro Simple modificam apenas o <strong>radical</strong>
          (não as terminações, que permanecem iguais: -é, -ás, -á, -emos, -éis, -án).
          Os radicais irregulares formam grupos previsíveis: contração, queda de vogal
          e substituição por <em>-dr-</em>.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Grupos de irregulares no Futuro Simple do espanhol">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <rect x="15" y="15" width="200" height="165" rx="10" fill="#fce7f3" />
            <text x="115" y="42" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#9d174d">Contração (-e/-ec)</text>
            <text x="115" y="65" textAnchor="middle" fontSize="12" fill="#1f2937">poder → podr-é</text>
            <text x="115" y="85" textAnchor="middle" fontSize="12" fill="#1f2937">querer → querr-é</text>
            <text x="115" y="105" textAnchor="middle" fontSize="12" fill="#1f2937">saber → sabr-é</text>
            <text x="115" y="125" textAnchor="middle" fontSize="12" fill="#1f2937">haber → habr-é</text>
            <text x="115" y="145" textAnchor="middle" fontSize="12" fill="#1f2937">caber → cabr-é</text>
            <rect x="250" y="15" width="200" height="165" rx="10" fill="#dbeafe" />
            <text x="350" y="42" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1e40af">Queda de vogal</text>
            <text x="350" y="65" textAnchor="middle" fontSize="12" fill="#1f2937">hacer → har-é</text>
            <text x="350" y="85" textAnchor="middle" fontSize="12" fill="#1f2937">decir → dir-é</text>
            <rect x="485" y="15" width="200" height="165" rx="10" fill="#d1fae5" />
            <text x="585" y="42" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#065f46">Substituição -dr-</text>
            <text x="585" y="65" textAnchor="middle" fontSize="12" fill="#1f2937">tener → tendr-é</text>
            <text x="585" y="85" textAnchor="middle" fontSize="12" fill="#1f2937">venir → vendr-é</text>
            <text x="585" y="105" textAnchor="middle" fontSize="12" fill="#1f2937">poner → pondr-é</text>
            <text x="585" y="125" textAnchor="middle" fontSize="12" fill="#1f2937">salir → saldr-é</text>
            <text x="585" y="145" textAnchor="middle" fontSize="12" fill="#1f2937">valer → valdr-é</text>
          </svg>
          <figcaption>Os três grupos de radicais irregulares no Futuro Simple. As terminações (-é, -ás, -á, etc.) são sempre regulares.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>Radical irregular</th>
                <th>yo</th>
                <th>él/ella</th>
                <th>ellos</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>poder</td><td>podr-</td><td>podré</td><td>podrá</td><td>podrán</td></tr>
              <tr><td>querer</td><td>querr-</td><td>querré</td><td>querrá</td><td>querrán</td></tr>
              <tr><td>saber</td><td>sabr-</td><td>sabré</td><td>sabrá</td><td>sabrán</td></tr>
              <tr><td>hacer</td><td>har-</td><td>haré</td><td>hará</td><td>harán</td></tr>
              <tr><td>decir</td><td>dir-</td><td>diré</td><td>dirá</td><td>dirán</td></tr>
              <tr><td>tener</td><td>tendr-</td><td>tendré</td><td>tendrá</td><td>tendrán</td></tr>
              <tr><td>venir</td><td>vendr-</td><td>vendré</td><td>vendrá</td><td>vendrán</td></tr>
              <tr><td>poner</td><td>pondr-</td><td>pondré</td><td>pondrá</td><td>pondrán</td></tr>
              <tr><td>salir</td><td>saldr-</td><td>saldré</td><td>saldrá</td><td>saldrán</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Condicional Simple</span>
        <h2>3. Condicional Simple — formação e usos</h2>
        <p>
          O Condicional Simple é formado exatamente como o Futuro Simple — sobre
          o infinitivo inteiro — mas com as terminações do Imperfecto dos verbos
          -ER/-IR: <em>-ía, -ías, -ía, -íamos, -íais, -ían</em>. Os mesmos
          verbos que são irregulares no Futuro são irregulares no Condicional,
          e com os mesmos radicais modificados.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>hablar</th>
                <th>poder</th>
                <th>tener</th>
                <th>hacer</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>yo</td><td>hablaría</td><td>podría</td><td>tendría</td><td>haría</td></tr>
              <tr><td>tú</td><td>hablarías</td><td>podrías</td><td>tendrías</td><td>harías</td></tr>
              <tr><td>él/ella</td><td>hablaría</td><td>podría</td><td>tendría</td><td>haría</td></tr>
              <tr><td>nosotros</td><td>hablaríamos</td><td>podríamos</td><td>tendríamos</td><td>haríamos</td></tr>
              <tr><td>vosotros</td><td>hablaríais</td><td>podríais</td><td>tendríais</td><td>haríais</td></tr>
              <tr><td>ellos/Uds.</td><td>hablarían</td><td>podrían</td><td>tendrían</td><td>harían</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Usos do Condicional Simple:</strong> (1) hipótese/condição:
          <em> Si tuviera dinero, viajaría por el mundo</em>; (2) cortesia para
          pedidos: <em>¿Podría ayudarme?</em>; (3) probabilidade no passado
          (conjectura): <em>Serían las tres cuando llegó</em> (= Deviam ser
          três horas quando chegou); (4) futuro em relação a um passado:
          <em> Dijo que vendría</em> (= Disse que viria).
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Perífrases de obrigação</span>
        <h2>4. Perífrases verbais de obrigação</h2>
        <p>
          As perífrases verbais são construções compostas por um verbo auxiliar
          conjugado + infinitivo (ou gerúndio), que expressam aspectos
          semânticos como obrigação, necessidade, intenção, início, repetição
          e fase da ação. São extraordinariamente comuns em textos de qualquer
          gênero e seu reconhecimento é fundamental para a interpretação correta.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📌</span>
            <h3>tener que + inf.</h3>
            <p>obrigação pessoal<br /><em>Tengo que estudiar.</em><br />(= Tenho que estudar.)</p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>hay que + inf.</h3>
            <p>obrigação impessoal<br /><em>Hay que respetar las normas.</em><br />(= É preciso respeitar.)</p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>deber + inf.</h3>
            <p>obrigação moral / dever<br /><em>Debes llegar a tiempo.</em><br />(= Você deve chegar a tempo.)</p>
          </div>
          <div className="lesson-card">
            <span>📌</span>
            <h3>deber de + inf.</h3>
            <p>suposição / probabilidade<br /><em>Debe de ser tarde.</em><br />(= Deve ser tarde.)</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção à distinção:</strong> <em>deber + infinitivo</em> = obrigação moral
          (<em>Debes comer</em> = Você deve comer). <em>Deber de + infinitivo</em> =
          suposição (<em>Debe de ser las diez</em> = Devem ser dez horas). Na prática,
          a preposição <em>de</em> marca a diferença entre obrigação e suposição,
          embora no uso coloquial essa distinção esteja se perdendo.
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Perífrases de fase</span>
        <h2>5. Perífrases verbais de intenção, início, continuidade e término</h2>
        <p>
          Além das perífrases de obrigação, o espanhol usa uma série de
          construções para expressar a <em>fase</em> em que uma ação se encontra
          (antes de iniciar, no início, em andamento, com repetição, ou após
          término). Reconhecer essas perífrases permite compreender a dinâmica
          temporal das ações em qualquer texto.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Perífrase</th>
                <th>Sentido</th>
                <th>Exemplo</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>ir a + inf.</em></td>
                <td>futuro próximo / intenção</td>
                <td><em>Voy a salir ahora.</em></td>
                <td>Vou sair agora.</td>
              </tr>
              <tr>
                <td><em>empezar a + inf.</em></td>
                <td>início de ação</td>
                <td><em>Empezó a llover.</em></td>
                <td>Começou a chover.</td>
              </tr>
              <tr>
                <td><em>volver a + inf.</em></td>
                <td>repetição</td>
                <td><em>Volvió a llamar.</em></td>
                <td>Voltou a ligar / ligou de novo.</td>
              </tr>
              <tr>
                <td><em>acabar de + inf.</em></td>
                <td>ação imediatamente concluída</td>
                <td><em>Acabo de llegar.</em></td>
                <td>Acabei de chegar.</td>
              </tr>
              <tr>
                <td><em>dejar de + inf.</em></td>
                <td>interrupção / cessação</td>
                <td><em>Dejó de fumar.</em></td>
                <td>Parou de fumar.</td>
              </tr>
              <tr>
                <td><em>seguir + ger.</em></td>
                <td>continuidade</td>
                <td><em>Sigue trabajando.</em></td>
                <td>Continua trabalhando.</td>
              </tr>
              <tr>
                <td><em>estar + ger.</em></td>
                <td>ação em progresso (aspecto contínuo)</td>
                <td><em>Está comiendo.</em></td>
                <td>Está comendo.</td>
              </tr>
              <tr>
                <td><em>ponerse a + inf.</em></td>
                <td>início abrupto de ação</td>
                <td><em>Se puso a gritar.</em></td>
                <td>Começou a gritar (subitamente).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Futuro de probabilidade</span>
        <h2>6. Futuro e Condicional de probabilidade</h2>
        <p>
          Um uso especialmente cobrado no ENEM é o <strong>futuro de probabilidade</strong>
          e o <strong>condicional de probabilidade</strong>, que expressam suposição ou
          conjectura sobre o presente e o passado, respectivamente. Este uso
          é especialmente comum em textos literários, jornalísticos e argumentativos.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Diagrama comparativo do futuro e condicional de probabilidade">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <rect x="20" y="20" width="310" height="160" rx="10" fill="#fef3c7" />
            <text x="175" y="50" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#92400e">FUTURO de probabilidade</text>
            <text x="175" y="75" textAnchor="middle" fontSize="12" fill="#374151">Suposição sobre o PRESENTE</text>
            <text x="175" y="100" textAnchor="middle" fontSize="13" fontStyle="italic" fill="#1f2937">¿Dónde estará Juan?</text>
            <text x="175" y="122" textAnchor="middle" fontSize="12" fill="#374151">= Onde será que está João?</text>
            <text x="175" y="148" textAnchor="middle" fontSize="12" fontStyle="italic" fill="#1f2937">Tendrá unos cuarenta años.</text>
            <text x="175" y="168" textAnchor="middle" fontSize="12" fill="#374151">= Deve ter uns quarenta anos.</text>
            <rect x="370" y="20" width="310" height="160" rx="10" fill="#e0e7ff" />
            <text x="525" y="50" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#1e40af">CONDICIONAL de probabilidade</text>
            <text x="525" y="75" textAnchor="middle" fontSize="12" fill="#374151">Suposição sobre o PASSADO</text>
            <text x="525" y="100" textAnchor="middle" fontSize="13" fontStyle="italic" fill="#1f2937">¿Dónde estaría Juan ayer?</text>
            <text x="525" y="122" textAnchor="middle" fontSize="12" fill="#374151">= Onde estaria João ontem?</text>
            <text x="525" y="148" textAnchor="middle" fontSize="13" fontStyle="italic" fill="#1f2937">Serían las tres.</text>
            <text x="525" y="168" textAnchor="middle" fontSize="12" fill="#374151">= Deviam ser três horas.</text>
          </svg>
          <figcaption>Futuro para suposição sobre o presente; Condicional para suposição sobre o passado.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Perífrases no ENEM</span>
        <h2>7. Como identificar perífrases verbais em textos do ENEM</h2>
        <p>
          As perífrases verbais aparecem em textos de todos os gêneros e
          sua correta interpretação evita erros de compreensão. O ENEM
          costuma testar se o candidato sabe distinguir o valor semântico
          de uma perífrase de um simples verbo principal conjugado.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Identifique o auxiliar</h3>
            <p>O auxiliar (ir, tener, deber, acabar...) carrega o valor semântico adicional — obrigação, início, repetição, etc.</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Veja o nexo</h3>
            <p><em>a + inf.</em>, <em>de + inf.</em>, <em>que + inf.</em> ou <em>+ gerúndio</em> — o tipo de nexo indica a categoria da perífrase.</p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Interprete o contexto</h3>
            <p>"Acabo de llegar" — o "acabar" não é o verbo principal; a ação principal é "chegar", e o significado é que ocorreu imediatamente antes.</p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Diferencie do verbo pleno</h3>
            <p>"Voy al mercado" (ir pleno = ir ao mercado) ≠ "Voy a comprar" (perífrase = vou comprar). O contexto e o infinitivo seguinte definem.</p>
          </div>
        </div>
        <div className="math-block">
          💡 <strong>Dica ENEM:</strong> A perífrase <em>acabar de + infinitivo</em> é
          frequentemente cobrada porque parece indicar conclusão de algo, mas na
          verdade significa que a ação acabou de acontecer (aconteceu há pouco):
          <em> Acabo de leer el libro</em> = Acabei de ler o livro (lí agora pouco).
          Não confunda com <em>terminar de</em>, que significa "terminar de fazer algo".
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Formação do Futuro Simple"
          statement={
            <p>
              Qual é a forma correta do verbo <em>hablar</em> no Futuro Simple
              para a 3ª pessoa do plural?
            </p>
          }
          options={[
            { letter: "a", text: "hablarán", correct: true },
            { letter: "b", text: "hablarón" },
            { letter: "c", text: "hablarían" },
            { letter: "d", text: "hablen" },
          ]}
          resolution={
            <p>
              Resposta: <strong>a) hablarán</strong>. O Futuro Simple é formado
              com o infinitivo inteiro + a terminação da pessoa: <em>hablar</em>
              + <em>-án</em> (3ª pessoa plural) = <em>hablarán</em>. A opção b
              tem acento incorreto (o futuro não usa -ón). A opção c é o
              Condicional. A opção d é o Presente do Subjuntivo.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Irregular no Futuro — grupo -dr-"
          statement={
            <p>
              Escolha a forma correta do verbo <em>tener</em> no Futuro Simple:<br />
              <em>"El año que viene, ___ más tiempo libre."</em>
            </p>
          }
          options={[
            { letter: "a", text: "teneré" },
            { letter: "b", text: "tendré", correct: true },
            { letter: "c", text: "tenería" },
            { letter: "d", text: "tenerá" },
          ]}
          resolution={
            <p>
              Resposta: <strong>b) tendré</strong>. O verbo <em>tener</em> é
              irregular no Futuro: seu radical muda para <em>tendr-</em>.
              A 1ª pessoa do singular é <em>tendré</em>. As opções a e d
              usam o infinitivo completo como radical — erro típico de quem
              não memorizou as irregularidades. A opção c é o Condicional
              (terminação -ía).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Condicional de probabilidade"
          statement={
            <p>
              Leia o trecho literário: <em>"Cuando encontró el antiguo diario,
              calculó que su abuela tendría unos veinte años cuando lo escribió."</em><br />
              O verbo <em>tendría</em> neste contexto indica:
            </p>
          }
          options={[
            { letter: "a", text: "Uma condição hipotética do presente." },
            { letter: "b", text: "Uma obrigação da avó no passado." },
            { letter: "c", text: "Uma suposição sobre a idade da avó no passado.", correct: true },
            { letter: "d", text: "Um futuro em relação ao momento da narrativa." },
          ]}
          resolution={
            <p>
              Resposta: <strong>c)</strong>. O verbo <em>tendría</em> é o
              Condicional Simple de <em>tener</em>, usado aqui com valor de
              probabilidade no passado: o narrador calcula / supõe que a avó
              "devia ter" uns vinte anos quando escreveu o diário. Este é o
              uso do Condicional de probabilidade — equivalente ao "deve ter"
              ou "devia ter" do português para indicar conjectura sobre uma
              situação passada.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Perífrases verbais em texto"
          statement={
            <p>
              Leia o trecho: <em>"El gobierno acaba de anunciar que va a
              invertir millones en educación. Sin embargo, los críticos dicen
              que hay que esperar para ver si va a cumplir la promesa."</em><br />
              Quantas perífrases verbais aparecem neste trecho?
            </p>
          }
          options={[
            { letter: "a", text: "Duas: acaba de anunciar e va a invertir." },
            { letter: "b", text: "Três: acaba de anunciar, va a invertir e hay que esperar.", correct: true },
            { letter: "c", text: "Quatro: acaba de anunciar, va a invertir, hay que esperar e va a cumplir." },
            { letter: "d", text: "Uma: acaba de anunciar." },
          ]}
          resolution={
            <p>
              Resposta: <strong>c) quatro</strong> — relendo com atenção:
              <em> acaba de anunciar</em> (acabar de + inf. = ação imediata),
              <em> va a invertir</em> (ir a + inf. = futuro próximo),
              <em> hay que esperar</em> (hay que + inf. = obrigação impessoal)
              e <em> va a cumplir</em> (ir a + inf. = futuro próximo / intenção).
              Todas são estruturas perifrásticas com auxiliar + nexo + infinitivo.
              A opção mais correta tecnicamente é a <strong>c)</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Futuro vs. ir a + infinitivo"
          statement={
            <p>
              Leia as duas frases:<br />
              I. <em>Mañana estudiaré toda la tarde.</em><br />
              II. <em>Mañana voy a estudiar toda la tarde.</em><br />
              Qual é a diferença entre as duas construções?
            </p>
          }
          options={[
            { letter: "a", text: "A frase I indica o presente e a frase II o futuro." },
            { letter: "b", text: "A frase I é uma promessa formal; a frase II indica obrigação." },
            { letter: "c", text: "Ambas expressam futuro com nuance diferente: a frase I usa o Futuro Simple (mais formal ou distante); a frase II usa ir a + inf. (mais imediato e coloquial).", correct: true },
            { letter: "d", text: "A frase I é gramaticalmente incorreta em espanhol." },
          ]}
          resolution={
            <p>
              Resposta: <strong>c)</strong>. As duas construções expressam
              futuro. O <strong>Futuro Simple</strong> (<em>estudiaré</em>) tem
              matiz um pouco mais formal e pode indicar distância ou comprometimento
              com o futuro. A perífrase <strong>ir a + infinitivo</strong>
              (<em>voy a estudiar</em>) é mais coloquial e indica uma intenção
              concreta ou um futuro imediato. Na prática cotidiana do espanhol
              moderno, a perífrase é mais usada para o futuro próximo; o Futuro
              Simple aparece mais em textos formais, literários e para expressar
              probabilidade ou ordens.
            </p>
          }
        />
      </section>

    </article>
  );
}
