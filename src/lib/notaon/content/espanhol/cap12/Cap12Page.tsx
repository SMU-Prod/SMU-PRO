"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap12Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 12</span>
          <h1>Pretérito Perfeito, Imperfeito e Indefinido</h1>
          <p>
            Os três tempos do passado em espanhol representam um dos temas
            mais cobrados e mais desafiadores para brasileiros no ENEM. Ao
            contrário do português, o espanhol diferencia com rigor o
            Pretérito Perfecto Compuesto (ação recente com relevância no
            presente), o Pretérito Imperfecto (ações habituais no passado,
            descrições de contexto, estados) e o Pretérito Indefinido
            (ações únicas, pontuais e concluídas no passado). Além disso,
            há uma diferença importante entre o uso dessas formas na Espanha
            e na América Latina. Este capítulo cobre tudo que você precisa
            para interpretar e distinguir esses tempos verbais em qualquer
            texto do ENEM.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visão geral</span>
        <h2>1. Os três tempos do passado: visão geral</h2>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 210" width="700" height="210" aria-label="Linha do tempo mostrando os três pretéritos do espanhol">
            <rect x="0" y="0" width="700" height="210" rx="14" fill="#f8fafc" />
            <defs>
              <marker id="cap12arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#374151" />
              </marker>
            </defs>
            {/* Timeline */}
            <line x1="50" y1="105" x2="650" y2="105" stroke="#374151" strokeWidth="2.5" markerEnd="url(#cap12arr1)" />
            <text x="660" y="109" fontSize="12" fill="#374151">hoje</text>
            {/* Passado distante - Indefinido */}
            <rect x="60" y="60" width="170" height="36" rx="8" fill="#fce7f3" />
            <text x="145" y="82" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#9d174d">INDEFINIDO</text>
            <line x1="145" y1="96" x2="145" y2="105" stroke="#9d174d" strokeWidth="2" />
            <circle cx="145" cy="105" r="5" fill="#9d174d" />
            <text x="145" y="125" textAnchor="middle" fontSize="10" fill="#9d174d">ação pontual concluída</text>
            <text x="145" y="140" textAnchor="middle" fontSize="10" fill="#9d174d" fontStyle="italic">Viajé a México.</text>
            {/* Passado habitual/descritivo - Imperfecto */}
            <rect x="240" y="30" width="200" height="36" rx="8" fill="#dbeafe" />
            <text x="340" y="52" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">IMPERFECTO</text>
            <line x1="270" y1="66" x2="270" y2="105" stroke="#1e40af" strokeWidth="1.5" strokeDasharray="4" />
            <line x1="400" y1="66" x2="400" y2="105" stroke="#1e40af" strokeWidth="1.5" strokeDasharray="4" />
            <text x="340" y="125" textAnchor="middle" fontSize="10" fill="#1e40af">hábito/estado/contexto</text>
            <text x="340" y="140" textAnchor="middle" fontSize="10" fill="#1e40af" fontStyle="italic">Viajaba cada verano.</text>
            {/* Passado recente - Perfecto */}
            <rect x="460" y="60" width="175" height="36" rx="8" fill="#d1fae5" />
            <text x="547" y="82" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">PERFECTO</text>
            <line x1="547" y1="96" x2="547" y2="105" stroke="#065f46" strokeWidth="2" />
            <circle cx="547" cy="105" r="5" fill="#065f46" />
            <line x1="547" y1="105" x2="610" y2="105" stroke="#065f46" strokeWidth="2.5" />
            <text x="547" y="125" textAnchor="middle" fontSize="10" fill="#065f46">passado recente / relevante</text>
            <text x="547" y="140" textAnchor="middle" fontSize="10" fill="#065f46" fontStyle="italic">He viajado este mes.</text>
            <text x="350" y="175" textAnchor="middle" fontSize="11" fill="#6b7280">← PASSADO DISTANTE ————————————————— PASSADO RECENTE →</text>
          </svg>
          <figcaption>Os três pretéritos do espanhol no eixo temporal: indefinido (ação pontual passada), imperfecto (contexto/hábito) e perfecto compuesto (passado recente com conexão ao presente).</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tempo verbal</th>
                <th>Nome em espanhol</th>
                <th>Uso principal</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pretérito Perfeito Composto</td>
                <td>Pretérito Perfecto Compuesto</td>
                <td>Ação recente com relevância no presente</td>
                <td><em>He comido ya.</em></td>
              </tr>
              <tr>
                <td>Pretérito Imperfeito</td>
                <td>Pretérito Imperfecto</td>
                <td>Hábito/estado/contexto no passado</td>
                <td><em>Comía mucho de niño.</em></td>
              </tr>
              <tr>
                <td>Pretérito Perfeito Simples</td>
                <td>Pretérito Indefinido</td>
                <td>Ação pontual concluída no passado</td>
                <td><em>Comí una paella ayer.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pretérito Perfecto</span>
        <h2>2. Pretérito Perfecto Compuesto — formação e usos</h2>
        <p>
          O Pretérito Perfecto Compuesto é formado com o auxiliar <em>haber</em>
          no presente + participio passado do verbo principal. Os participios
          regulares se formam com <em>-ado</em> (verbos -AR) e <em>-ido</em>
          (verbos -ER/-IR). Os participios irregulares mais comuns são:
          <em> hecho</em> (hacer), <em>dicho</em> (decir), <em>visto</em> (ver),
          <em> escrito</em> (escribir), <em>puesto</em> (poner), <em>vuelto</em>
          (volver), <em>muerto</em> (morir), <em>abierto</em> (abrir),
          <em> roto</em> (romper).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Haber (presente)</th>
                <th>hablar (-AR)</th>
                <th>comer (-ER)</th>
                <th>vivir (-IR)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>yo he</td><td>he hablado</td><td>he comido</td><td>he vivido</td></tr>
              <tr><td>tú has</td><td>has hablado</td><td>has comido</td><td>has vivido</td></tr>
              <tr><td>él/ella ha</td><td>ha hablado</td><td>ha comido</td><td>ha vivido</td></tr>
              <tr><td>nosotros hemos</td><td>hemos hablado</td><td>hemos comido</td><td>hemos vivido</td></tr>
              <tr><td>vosotros habéis</td><td>habéis hablado</td><td>habéis comido</td><td>habéis vivido</td></tr>
              <tr><td>ellos/Uds. han</td><td>han hablado</td><td>han comido</td><td>han vivido</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Usos:</strong> (1) ação concluída recentemente com resultado
          no presente: <em>He perdido las llaves</em> (perdi as chaves — e ainda
          não as tenho); (2) experiências de vida sem indicação de quando:
          <em> He estado en Buenos Aires</em>; (3) ações em período ainda não
          concluído: <em>Hoy he comido bien; Este año ha sido difícil</em>.
        </p>
        <div className="lesson-highlight">
          <strong>Marcadores temporais do Pretérito Perfecto:</strong> <em>hoy, esta semana,
          este mes, este año, ya, todavía no, alguna vez, nunca, recientemente, hace
          poco</em>. Se o texto usa esses marcadores, o verbo tende a aparecer no
          Perfecto Compuesto (pelo menos na variante peninsular).
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pretérito Imperfecto</span>
        <h2>3. Pretérito Imperfecto — formação e usos</h2>
        <p>
          O Pretérito Imperfecto é o tempo de contexto e de hábitos no passado.
          Tem uma característica importante: é quase totalmente regular, com
          apenas três verbos irregulares em toda a língua espanhola.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>hablar (-AR) → -aba</th>
                <th>comer (-ER) → -ía</th>
                <th>vivir (-IR) → -ía</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>yo</td><td>hablaba</td><td>comía</td><td>vivía</td></tr>
              <tr><td>tú</td><td>hablabas</td><td>comías</td><td>vivías</td></tr>
              <tr><td>él/ella</td><td>hablaba</td><td>comía</td><td>vivía</td></tr>
              <tr><td>nosotros</td><td>hablábamos</td><td>comíamos</td><td>vivíamos</td></tr>
              <tr><td>vosotros</td><td>hablabais</td><td>comíais</td><td>vivíais</td></tr>
              <tr><td>ellos/Uds.</td><td>hablaban</td><td>comían</td><td>vivían</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Apenas 3 irregulares no Imperfecto:</strong>
          <em> ser → era, eras, era, éramos, erais, eran</em> /
          <em> ir → iba, ibas, iba, íbamos, ibais, iban</em> /
          <em> ver → veía, veías, veía, veíamos, veíais, veían</em>.
          Todos os outros verbos — inclusive os mais irregulares do presente —
          são regulares no Imperfecto.
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Hábito passado</h3>
            <p><em>De niño, jugaba al fútbol todos los días.</em><br />(= Quando criança, jogava futebol todos os dias.)</p>
          </div>
          <div className="lesson-card">
            <span>🖼️</span>
            <h3>Descrição / contexto</h3>
            <p><em>Era un día frío y llovía sin parar.</em><br />(= Era um dia frio e chovia sem parar.)</p>
          </div>
          <div className="lesson-card">
            <span>⏳</span>
            <h3>Ação em curso</h3>
            <p><em>Cuando llegó, yo dormía.</em><br />(= Quando chegou, eu dormia.)</p>
          </div>
          <div className="lesson-card">
            <span>💭</span>
            <h3>Estado mental/físico</h3>
            <p><em>Estaba cansado y no quería salir.</em><br />(= Estava cansado e não queria sair.)</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Pretérito Indefinido</span>
        <h2>4. Pretérito Indefinido — formação e irregulares</h2>
        <p>
          O Pretérito Indefinido (chamado também de Pretérito Simple ou
          Pretérito Perfecto Simple) é o tempo das ações <strong>pontuais e
          concluídas</strong> no passado. É o mais usado em narrativas literárias
          e histórias em espanhol de toda a América Latina.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>hablar (-AR)</th>
                <th>comer (-ER)</th>
                <th>vivir (-IR)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>yo</td><td>hablé</td><td>comí</td><td>viví</td></tr>
              <tr><td>tú</td><td>hablaste</td><td>comiste</td><td>viviste</td></tr>
              <tr><td>él/ella</td><td>habló</td><td>comió</td><td>vivió</td></tr>
              <tr><td>nosotros</td><td>hablamos</td><td>comimos</td><td>vivimos</td></tr>
              <tr><td>vosotros</td><td>hablasteis</td><td>comisteis</td><td>vivisteis</td></tr>
              <tr><td>ellos/Uds.</td><td>hablaron</td><td>comieron</td><td>vivieron</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Irregulares mais cobrados no Indefinido:</strong> Os verbos
          totalmente irregulares têm um conjunto de terminações especiais
          (-e, -iste, -o, -imos, -isteis, -ieron/-eron) que se aplicam a
          todo o grupo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>yo</th>
                <th>tú</th>
                <th>él</th>
                <th>nosotros</th>
                <th>ellos</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ser / ir</td><td>fui</td><td>fuiste</td><td>fue</td><td>fuimos</td><td>fueron</td></tr>
              <tr><td>hacer</td><td>hice</td><td>hiciste</td><td>hizo</td><td>hicimos</td><td>hicieron</td></tr>
              <tr><td>tener</td><td>tuve</td><td>tuviste</td><td>tuvo</td><td>tuvimos</td><td>tuvieron</td></tr>
              <tr><td>estar</td><td>estuve</td><td>estuviste</td><td>estuvo</td><td>estuvimos</td><td>estuvieron</td></tr>
              <tr><td>venir</td><td>vine</td><td>viniste</td><td>vino</td><td>vinimos</td><td>vinieron</td></tr>
              <tr><td>decir</td><td>dije</td><td>dijiste</td><td>dijo</td><td>dijimos</td><td>dijeron</td></tr>
              <tr><td>poner</td><td>puse</td><td>pusiste</td><td>puso</td><td>pusimos</td><td>pusieron</td></tr>
              <tr><td>traer</td><td>traje</td><td>trajiste</td><td>trajo</td><td>trajimos</td><td>trajeron</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção — ser e ir:</strong> Os verbos <em>ser</em> e <em>ir</em>
          têm formas idênticas no Pretérito Indefinido: <em>fui, fuiste, fue, fuimos,
          fuisteis, fueron</em>. O contexto determina qual verbo está sendo usado:
          <em> Ayer fui al cine</em> (ir → fui ao cinema) vs.
          <em> Simón Bolívar fue un gran líder</em> (ser → foi um grande líder).
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação dos três tempos</span>
        <h2>5. Contrastando os três pretéritos com exemplos</h2>
        <p>
          A melhor forma de fixar a diferença entre os três pretéritos é
          observá-los em contexto e identificar os marcadores temporais e
          o tipo de ação descrita.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sentença</th>
                <th>Tempo verbal</th>
                <th>Por quê?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>Este año he aprendido mucho.</em></td>
                <td>Perfecto Compuesto</td>
                <td>Período ainda em curso (este año = este ano)</td>
              </tr>
              <tr>
                <td><em>El año pasado aprendí mucho.</em></td>
                <td>Indefinido</td>
                <td>Período concluído (el año pasado = ano passado)</td>
              </tr>
              <tr>
                <td><em>De niño, aprendía rápido.</em></td>
                <td>Imperfecto</td>
                <td>Característica habitual no passado</td>
              </tr>
              <tr>
                <td><em>Cuando llegué, ella ya dormía.</em></td>
                <td>Indef. + Imperfecto</td>
                <td>Ação pontual (llegué) no contexto de ação em curso (dormía)</td>
              </tr>
              <tr>
                <td><em>Ayer vi una película que era muy triste.</em></td>
                <td>Indef. + Imperfecto</td>
                <td>Evento (vi) + descrição da película (era)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Espanha vs. América Latina</span>
        <h2>6. Diferença de uso entre Espanha e América Latina</h2>
        <p>
          Uma das diferenças mais relevantes para o ENEM é o uso distinto
          do Perfecto Compuesto e do Indefinido entre a Espanha e a América
          Latina. Na Espanha, o Perfecto Compuesto é obrigatório para ações
          recentes ou com conexão ao presente. Na América Latina, o Indefinido
          tende a substituir o Perfecto em muitos contextos, mesmo para ações
          recentes.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Situação</th>
                <th>Espanha</th>
                <th>América Latina</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ação recente hoje</td>
                <td><em>Hoy he desayunado tarde.</em></td>
                <td><em>Hoy desayuné tarde.</em></td>
              </tr>
              <tr>
                <td>Experiência de vida</td>
                <td><em>He viajado a Europa.</em></td>
                <td><em>Viajé a Europa.</em> (mais comum)</td>
              </tr>
              <tr>
                <td>Ação passada concluída</td>
                <td><em>Esta mañana fui al médico.</em></td>
                <td><em>Esta mañana fui al médico.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          💡 <strong>Dica ENEM:</strong> O ENEM respeita ambas as variantes. Ao encontrar
          um texto que usa o Indefinido onde você esperaria o Perfecto, considere que
          pode ser de origem latino-americana — e vice-versa. O importante é
          compreender o sentido do texto, não julgá-lo pela variante. Ambas as formas
          expressam o passado; a diferença é de nuance temporal e estilo regional.
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Marcadores temporais</span>
        <h2>7. Marcadores temporais e o tempo verbal correspondente</h2>
        <p>
          Os marcadores temporais são pistas preciosas para identificar o
          tempo verbal em um texto. Aprenda a associar cada marcador ao
          pretérito mais provável.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🟢</span>
            <h3>Perfecto Compuesto</h3>
            <p>hoy, esta semana, este mes, este año, ya, todavía no, alguna vez, nunca, recientemente, hace poco</p>
          </div>
          <div className="lesson-card">
            <span>🔵</span>
            <h3>Imperfecto</h3>
            <p>siempre, nunca (hábito), todos los días, de niño, antes, en aquella época, cuando era joven, a menudo</p>
          </div>
          <div className="lesson-card">
            <span>🔴</span>
            <h3>Indefinido</h3>
            <p>ayer, anteayer, el año pasado, el lunes, en 2010, hace dos años, aquel día, de repente, entonces</p>
          </div>
          <div className="lesson-card">
            <span>🟡</span>
            <h3>Indef. + Imperf.</h3>
            <p>cuando llegué…, estaba...; mientras dormía..., sonó...; de pronto, la vi...</p>
          </div>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificação do Pretérito Imperfecto"
          statement={
            <p>
              Qual das frases abaixo usa o Pretérito Imperfecto corretamente?
            </p>
          }
          options={[
            { letter: "a", text: "Ayer comí en un restaurante muy caro." },
            { letter: "b", text: "Cuando era pequeño, vivía en el campo.", correct: true },
            { letter: "c", text: "Este mes he trabajado mucho." },
            { letter: "d", text: "El año pasado fui a Argentina." },
          ]}
          resolution={
            <p>
              Resposta: <strong>b)</strong>. <em>Vivía</em> é a 1ª pessoa do
              singular do Pretérito Imperfecto de <em>vivir</em>. A frase
              descreve uma situação habitual na infância ("quando era pequeno,
              morava no campo") — uso clássico do Imperfecto. As outras opções
              usam Indefinido (<em>comí, fui</em>) e Perfecto Compuesto
              (<em>he trabajado</em>).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Ser vs. Ir no Pretérito Indefinido"
          statement={
            <p>
              Leia as frases e identifique o verbo correto:<br />
              <em>"Gabriel García Márquez ___ un escritor colombiano que
              ___ a Europa várias veces."</em>
            </p>
          }
          options={[
            { letter: "a", text: "fue / fue", correct: true },
            { letter: "b", text: "era / fue" },
            { letter: "c", text: "fue / era" },
            { letter: "d", text: "era / era" },
          ]}
          resolution={
            <p>
              Resposta: <strong>a) fue / fue</strong>. A frase faz duas
              afirmações pontuais sobre García Márquez: ele foi (ser) um
              escritor colombiano — fato estabelecido, conclusão sobre sua
              identidade; e ele foi (ir) a Europa várias vezes — ação
              ocorrida. As formas de <em>ser</em> e <em>ir</em> no Indefinido
              são idênticas (<em>fue</em>); o contexto determina qual verbo
              é. Usar <em>era</em> (Imperfecto) seria possível para a primeira
              parte, mas <em>fue</em> também é correto ao fazer uma afirmação
              objetiva sobre o passado concluído.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Contraste Imperfecto e Indefinido em narrativa"
          statement={
            <p>
              Leia o trecho literário: <em>"La mujer caminaba por el mercado
              cuando de repente vio a su antiguo profesor. Él tenía el cabello
              blanco y llevaba un traje gris. La saludó con una sonrisa
              cansada."</em><br />
              Qual é a função do Imperfecto neste trecho?
            </p>
          }
          options={[
            { letter: "a", text: "Indicar ações concluídas no passado." },
            { letter: "b", text: "Criar o pano de fundo e descrever o contexto da cena.", correct: true },
            { letter: "c", text: "Expressar ações habituais que ocorriam frequentemente." },
            { letter: "d", text: "Indicar uma ação futura em relação ao passado." },
          ]}
          resolution={
            <p>
              Resposta: <strong>b)</strong>. No trecho, os verbos no Imperfecto
              (<em>caminaba, tenía, llevaba</em>) criam o cenário e descrevem
              o estado/contexto — o que estava acontecendo e como as pessoas
              eram. Os verbos no Indefinido (<em>vio, saludó</em>) avançam a
              narrativa com eventos pontuais que interrompem ou ocorrem nesse
              contexto. Esta é a clássica estrutura narrativa do espanhol:
              Imperfecto para pano de fundo, Indefinido para ações principais.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Perfecto Compuesto em texto informativo"
          statement={
            <p>
              Leia o trecho: <em>"Según los datos publicados hoy, la temperatura
              global ha aumentado 1,5 grados en los últimos cien años.
              Los científicos han advertido que este incremento puede tener
              consecuencias irreversibles."</em><br />
              Por que o Pretérito Perfecto Compuesto é usado neste trecho?
            </p>
          }
          options={[
            { letter: "a", text: "Porque os eventos ocorreram há muito tempo no passado." },
            { letter: "b", text: "Porque os eventos têm relevância e conexão com o presente, sendo publicados hoje.", correct: true },
            { letter: "c", text: "Porque o texto é de origem latino-americana." },
            { letter: "d", text: "Porque os verbos indicam ações habituais no passado." },
          ]}
          resolution={
            <p>
              Resposta: <strong>b)</strong>. O marcador <em>hoy</em> (hoje)
              e o contexto de dados científicos publicados no presente
              justificam o uso do Perfecto Compuesto. As ações
              (<em>ha aumentado, han advertido</em>) têm relevância direta
              para o presente — é exatamente o uso canônico deste tempo verbal
              na variante peninsular e em textos formais/científicos.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Distinção temporal em texto narrativo"
          statement={
            <p>
              Leia o trecho: <em>"Cuando tenía quince años, mi familia se mudó
              a la ciudad. En aquella época, yo estudiaba en una escuela rural
              y no conocía a nadie en el barrio nuevo. El primer día de clases
              fue difícil, pero hice amigos rápidamente."</em><br />
              Quantos tempos do passado diferentes são usados neste trecho?
            </p>
          }
          options={[
            { letter: "a", text: "Um: apenas o Pretérito Imperfecto." },
            { letter: "b", text: "Dois: Imperfecto e Indefinido.", correct: true },
            { letter: "c", text: "Três: Imperfecto, Indefinido e Perfecto Compuesto." },
            { letter: "d", text: "Dois: Imperfecto e Perfecto Compuesto." },
          ]}
          resolution={
            <p>
              Resposta: <strong>b)</strong>. O trecho usa dois pretéritos:
              o <strong>Imperfecto</strong> (<em>tenía, estudiaba, conocía</em>)
              para estados e contextos passados — a idade do narrador, onde
              estudava, o que sentia; e o <strong>Indefinido</strong>
              (<em>se mudó, fue, hice</em>) para eventos pontuais que
              avançam a narrativa — a mudança, o primeiro dia, a amizade.
              O Perfecto Compuesto não aparece no trecho.
            </p>
          }
        />
      </section>

    </article>
  );
}
