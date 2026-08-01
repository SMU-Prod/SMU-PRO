"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap18Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 18</span>
          <h1>Voz ativa, voz passiva e discurso indireto</h1>
          <p>
            A voz passiva e o discurso indireto são estruturas gramaticais sofisticadas que aparecem com
            frequência em textos jornalísticos, literários e acadêmicos presentes no ENEM. Em espanhol, a
            voz passiva pode ser construída com <em>ser + particípio</em> (passiva perifrástica) ou com
            <em> se + verbo</em> (passiva reflexiva), e cada construção transmite nuances diferentes. O
            discurso indireto, por sua vez, exige transformações sistemáticas de tempos verbais, pronomes
            e advérbios de tempo e lugar — e compreender essas transformações é essencial para interpretar
            citações e relatos em textos hispanófonos. Dominar ambas as estruturas amplia significativamente
            a capacidade de leitura crítica de textos autênticos.
          </p>
        </div>
      </section>

      {/* ── Seção 1: Voz passiva perifrástica ── */}
      <section className="lesson-section">
        <span className="section-kicker">Voz Passiva</span>
        <h2>Voz passiva perifrástica: SER + particípio</h2>
        <p>
          Na voz passiva perifrástica, o objeto da voz ativa torna-se o sujeito da voz passiva. O verbo
          <em> ser</em> é conjugado no tempo apropriado e seguido do particípio passado, que concorda em
          gênero e número com o novo sujeito. O agente (quem praticou a ação) aparece introduzido por <em>por</em>.
        </p>
        <div className="lesson-highlight">
          <strong>Estrutura:</strong> <em>Sujeito + ser (tempo) + particípio (concordado) + por + agente</em>
          <br />
          <em>Voz ativa:</em> "García Márquez escribió la novela." → <em>Voz passiva:</em> "La novela fue
          escrita por García Márquez."
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tempo</th>
                <th>Voz ativa</th>
                <th>Voz passiva</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Presente</td>
                <td><em>El gobierno firma el acuerdo.</em></td>
                <td><em>El acuerdo es firmado por el gobierno.</em></td>
              </tr>
              <tr>
                <td>Pretérito indefinido</td>
                <td><em>Los científicos descubrieron el virus.</em></td>
                <td><em>El virus fue descubierto por los científicos.</em></td>
              </tr>
              <tr>
                <td>Pretérito imperfecto</td>
                <td><em>El maestro explicaba la lección.</em></td>
                <td><em>La lección era explicada por el maestro.</em></td>
              </tr>
              <tr>
                <td>Futuro</td>
                <td><em>El jurado anunciará los resultados.</em></td>
                <td><em>Los resultados serán anunciados por el jurado.</em></td>
              </tr>
              <tr>
                <td>Condicional</td>
                <td><em>El comité aprobaría la ley.</em></td>
                <td><em>La ley sería aprobada por el comité.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2: Particípios irregulares ── */}
      <section className="lesson-section">
        <span className="section-kicker">Particípios</span>
        <h2>Particípios irregulares frequentes</h2>
        <p>
          Na voz passiva, o particípio concorda em gênero e número com o sujeito. Os verbos irregulares mais
          frequentes em textos do ENEM precisam ser memorizados, pois aparecem constantemente em textos
          jornalísticos e literários em espanhol.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📖</span>
            <h3>abrir → abierto</h3>
            <p><em>La tienda fue abierta ayer.</em> A loja foi aberta ontem. Não confundir com *abrido.</p>
          </div>
          <div className="lesson-card">
            <span>✍️</span>
            <h3>escribir → escrito</h3>
            <p><em>El contrato fue escrito por abogados.</em> O contrato foi escrito por advogados.</p>
          </div>
          <div className="lesson-card">
            <span>💬</span>
            <h3>decir → dicho</h3>
            <p><em>Todo fue dicho en la reunión.</em> Tudo foi dito na reunião. Muito frequente em discurso indireto.</p>
          </div>
          <div className="lesson-card">
            <span>🔨</span>
            <h3>hacer → hecho</h3>
            <p><em>El trabajo fue hecho a tiempo.</em> O trabalho foi feito a tempo. Base da expressão "dicho y hecho".</p>
          </div>
          <div className="lesson-card">
            <span>🧩</span>
            <h3>poner → puesto</h3>
            <p><em>Las reglas fueron puestas en práctica.</em> As regras foram postas em prática.</p>
          </div>
          <div className="lesson-card">
            <span>🔙</span>
            <h3>volver → vuelto</h3>
            <p><em>El libro ha sido vuelto a publicar.</em> O livro foi reeditado. Também: ver→visto, romper→roto, morir→muerto.</p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Infinitivo</th><th>Particípio</th><th>Exemplo passivo feminino</th></tr>
            </thead>
            <tbody>
              <tr><td><em>abrir</em></td><td><em>abierto/a</em></td><td><em>La puerta fue abierta.</em></td></tr>
              <tr><td><em>escribir</em></td><td><em>escrito/a</em></td><td><em>La carta fue escrita.</em></td></tr>
              <tr><td><em>decir</em></td><td><em>dicho/a</em></td><td><em>La verdad fue dicha.</em></td></tr>
              <tr><td><em>hacer</em></td><td><em>hecho/a</em></td><td><em>La tarea fue hecha.</em></td></tr>
              <tr><td><em>poner</em></td><td><em>puesto/a</em></td><td><em>La mesa fue puesta.</em></td></tr>
              <tr><td><em>volver</em></td><td><em>vuelto/a</em></td><td><em>La pelota fue vuelta al juego.</em></td></tr>
              <tr><td><em>ver</em></td><td><em>visto/a</em></td><td><em>La película fue vista por millones.</em></td></tr>
              <tr><td><em>romper</em></td><td><em>roto/a</em></td><td><em>La ventana fue rota.</em></td></tr>
              <tr><td><em>morir</em></td><td><em>muerto/a</em></td><td><em>La víctima fue encontrada muerta.</em></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 3: SVG — ativa vs. passiva ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura Visual</span>
        <h2>Diagrama: voz ativa × voz passiva</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 210" width="700" height="210" aria-label="Diagrama transformação ativa para passiva">
            <rect x="0" y="0" width="700" height="210" rx="14" fill="#f8fafc" />
            {/* Voz ativa */}
            <rect x="20" y="20" width="300" height="80" rx="10" fill="#dbeafe" />
            <text x="170" y="44" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1e40af">VOZ ATIVA</text>
            <text x="170" y="65" textAnchor="middle" fontSize="12" fill="#1e40af" fontStyle="italic">El presidente firmó la ley.</text>
            <rect x="30" y="74" width="75" height="20" rx="4" fill="#93c5fd" />
            <text x="67" y="88" textAnchor="middle" fontSize="10" fill="#1e40af">sujeito</text>
            <rect x="115" y="74" width="50" height="20" rx="4" fill="#bfdbfe" />
            <text x="140" y="88" textAnchor="middle" fontSize="10" fill="#1e40af">verbo</text>
            <rect x="175" y="74" width="60" height="20" rx="4" fill="#93c5fd" />
            <text x="205" y="88" textAnchor="middle" fontSize="10" fill="#1e40af">objeto</text>
            {/* Seta */}
            <defs>
              <marker id="cap18arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
              </marker>
            </defs>
            <line x1="330" y1="60" x2="365" y2="60" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#cap18arr1)" />
            <text x="348" y="52" textAnchor="middle" fontSize="10" fill="#2563eb">transforma</text>
            {/* Voz passiva */}
            <rect x="375" y="20" width="305" height="80" rx="10" fill="#d1fae5" />
            <text x="527" y="44" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#065f46">VOZ PASSIVA</text>
            <text x="527" y="65" textAnchor="middle" fontSize="12" fill="#065f46" fontStyle="italic">La ley fue firmada por el presidente.</text>
            <rect x="383" y="74" width="45" height="20" rx="4" fill="#6ee7b7" />
            <text x="405" y="88" textAnchor="middle" fontSize="10" fill="#065f46">sujeito</text>
            <rect x="435" y="74" width="85" height="20" rx="4" fill="#a7f3d0" />
            <text x="477" y="88" textAnchor="middle" fontSize="10" fill="#065f46">ser+participio</text>
            <rect x="528" y="74" width="90" height="20" rx="4" fill="#6ee7b7" />
            <text x="573" y="88" textAnchor="middle" fontSize="10" fill="#065f46">por+agente</text>
            {/* Explicação */}
            <rect x="20" y="120" width="660" height="75" rx="10" fill="#fef3c7" />
            <text x="350" y="142" textAnchor="middle" fontWeight="bold" fontSize="12" fill="#92400e">Regras de transformação:</text>
            <text x="350" y="160" textAnchor="middle" fontSize="11" fill="#92400e">1. Objeto da ativa → Sujeito da passiva   2. Verbo ativo → ser (mesmo tempo) + particípio concordado</text>
            <text x="350" y="178" textAnchor="middle" fontSize="11" fill="#92400e">3. Sujeito da ativa → por + agente (opcional)   4. Particípio concorda com o novo sujeito</text>
          </svg>
          <figcaption>Transformação da voz ativa para a voz passiva perifrástica — o objeto vira sujeito e o particípio concorda com ele.</figcaption>
        </figure>
      </section>

      {/* ── Seção 4: Passiva reflexiva vs. perifrástica ── */}
      <section className="lesson-section">
        <span className="section-kicker">Passiva Reflexiva</span>
        <h2>Passiva reflexiva (SE passivo) × passiva perifrástica</h2>
        <p>
          Em espanhol, a passiva reflexiva com <em>se</em> é muito mais frequente que a passiva perifrástica,
          especialmente na linguagem escrita contemporânea. A diferença prática é que a passiva reflexiva
          nunca especifica o agente, enquanto a perifrástica pode (com <em>por</em>).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Estrutura</th><th>Exemplo</th><th>Observação</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Passiva perifrástica</td>
                <td><em>ser + participio (+ por + agente)</em></td>
                <td><em>La ley fue aprobada por el Congreso.</em></td>
                <td>Mais formal; pode mencionar o agente</td>
              </tr>
              <tr>
                <td>Passiva reflexiva (SE)</td>
                <td><em>se + verbo (concorda com sujeito)</em></td>
                <td><em>Se aprobó la ley. / Se aprobaron las leyes.</em></td>
                <td>Mais frequente; sem agente explícito</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Como diferenciar SE passivo de SE impessoal:</strong> No SE passivo, o verbo concorda com
          um sujeito identificável (<em>se aprobaron las leyes</em> — sujeito: "las leyes"). No SE impessoal,
          o verbo fica sempre no singular e o sujeito é genérico/indeterminado (<em>se trabaja mucho aquí</em>).
        </div>
      </section>

      {/* ── Seção 5: Discurso indireto ── */}
      <section className="lesson-section">
        <span className="section-kicker">Discurso Indireto</span>
        <h2>Discurso direto × discurso indireto</h2>
        <p>
          O discurso indireto relata o que alguém disse sem usar suas palavras exatas. Além de mudar os pronomes,
          o espanhol exige transformações nos tempos verbais quando o verbo de comunicação está no passado.
          Textos jornalísticos do ENEM usam frequentemente o discurso indireto para relatar declarações.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Discurso direto</th>
                <th>Discurso indireto</th>
                <th>Transformação verbal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>"Estoy cansado."</em></td>
                <td><em>Dijo que estaba cansado.</em></td>
                <td>Presente → Pretérito imperfecto</td>
              </tr>
              <tr>
                <td><em>"Fui al médico."</em></td>
                <td><em>Explicó que había ido al médico.</em></td>
                <td>Pretérito indef. → Pluscuamperfecto</td>
              </tr>
              <tr>
                <td><em>"Vendré mañana."</em></td>
                <td><em>Prometió que vendría al día siguiente.</em></td>
                <td>Futuro → Condicional</td>
              </tr>
              <tr>
                <td><em>"He terminado el proyecto."</em></td>
                <td><em>Afirmó que había terminado el proyecto.</em></td>
                <td>Pret. perfecto → Pluscuamperfecto</td>
              </tr>
              <tr>
                <td><em>"Hace frío aquí."</em></td>
                <td><em>Dijo que hacía frío allí.</em></td>
                <td>Presente → Imperfecto; aquí → allí</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 6: SVG discurso indireto ── */}
      <section className="lesson-section">
        <span className="section-kicker">Transformações</span>
        <h2>Mapa de transformações no discurso indireto</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="700" height="220" aria-label="Transformações discurso direto indireto">
            <rect x="0" y="0" width="700" height="220" rx="14" fill="#f8fafc" />
            <rect x="10" y="10" width="320" height="200" rx="10" fill="#dbeafe" />
            <text x="170" y="35" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1e40af">Discurso Direto</text>
            {[
              ["Pronomes: yo, tú, aquí, ahora"],
              ["Presente → mantém"],
              ["Futuro → mantém"],
              ["Imperativo → mantém"],
              ["Pret. perfecto → mantém"],
              ["hoy, mañana, ayer"],
            ].map(([t], i) => (
              <text key={i} x="20" y={58 + i * 26} fontSize="11" fill="#1e40af">{t}</text>
            ))}
            <defs>
              <marker id="cap18arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#7c3aed" />
              </marker>
            </defs>
            <text x="340" y="95" textAnchor="middle" fontSize="12" fill="#7c3aed" fontWeight="bold">verb. passado</text>
            <text x="340" y="112" textAnchor="middle" fontSize="11" fill="#7c3aed">dijo / explicó</text>
            <text x="340" y="129" textAnchor="middle" fontSize="11" fill="#7c3aed">afirmó / señaló</text>
            <line x1="335" y1="140" x2="365" y2="140" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#cap18arr2)" />
            <rect x="370" y="10" width="320" height="200" rx="10" fill="#fce7f3" />
            <text x="530" y="35" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#9d174d">Discurso Indireto</text>
            {[
              ["Pronomes: él, usted, allí, entonces"],
              ["Presente → Imperfecto"],
              ["Futuro → Condicional"],
              ["Imperativo → que + subjuntivo"],
              ["Pret. perfecto → Pluscuamperfecto"],
              ["ese día, al día sig., el día anterior"],
            ].map(([t], i) => (
              <text key={i} x="380" y={58 + i * 26} fontSize="11" fill="#9d174d">{t}</text>
            ))}
          </svg>
          <figcaption>Transformações sistemáticas ao converter discurso direto em indireto quando o verbo de comunicação está no passado.</figcaption>
        </figure>
      </section>

      {/* ── Seção 7: Verbos de comunicação ── */}
      <section className="lesson-section">
        <span className="section-kicker">Verbos de Comunicação</span>
        <h2>Verbos que introduzem o discurso indireto</h2>
        <p>
          Em textos jornalísticos do ENEM, o discurso indireto é introduzido por verbos de comunicação que
          carregam significados matizados. Identificá-los ajuda a compreender não apenas o que foi dito, mas
          como o autor/jornalista interpreta a declaração.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Verbo</th><th>Tradução/Nuance</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr><td><em>decir</em></td><td>dizer (neutro)</td><td><em>El ministro dijo que el plan era viable.</em></td></tr>
              <tr><td><em>afirmar</em></td><td>afirmar (com convicção)</td><td><em>El científico afirmó que los datos eran correctos.</em></td></tr>
              <tr><td><em>señalar</em></td><td>apontar, indicar</td><td><em>El informe señalaba que la situación empeoraba.</em></td></tr>
              <tr><td><em>explicar</em></td><td>explicar (detalhar)</td><td><em>La directora explicó que los cambios eran necesarios.</em></td></tr>
              <tr><td><em>añadir</em></td><td>acrescentar</td><td><em>Añadió que la empresa crecería un 15%.</em></td></tr>
              <tr><td><em>reconocer</em></td><td>reconhecer, admitir</td><td><em>El político reconoció que había cometido errores.</em></td></tr>
              <tr><td><em>advertir</em></td><td>advertir, avisar</td><td><em>El médico advirtió que el tabaco era peligroso.</em></td></tr>
              <tr><td><em>asegurar</em></td><td>assegurar, garantir</td><td><em>La empresa aseguró que no habría despidos.</em></td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Dica de leitura:</strong> O verbo de comunicação escolhido pelo jornalista revela a
          interpretação. <em>Reconoció</em> (admitiu) implica que a informação era algo que o sujeito preferia
          não revelar. <em>Afirmó</em> implica convicção. <em>Señaló</em> é mais neutro. Perceber esses
          matizes é crucial para questões de intenção comunicativa no ENEM.
        </div>
      </section>

      {/* ── Seção 8: Estratégia ENEM ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia ENEM</span>
        <h2>Como identificar e interpretar passiva e discurso indireto</h2>
        <div className="math-block">
          <strong>Para a voz passiva:</strong>
          <br />
          1. Passiva perifrástica: procure <em>ser</em> (conjugado) + particípio. O sujeito sofre a ação.
          <br />
          2. Passiva reflexiva: procure <em>se</em> + verbo concordando com sujeito-coisa.
          <br />
          3. Verifique se o particípio concorda em gênero e número com o sujeito.
          <br /><br />
          <strong>Para o discurso indireto:</strong>
          <br />
          1. Procure verbos de comunicação no passado + <em>que</em>.
          <br />
          2. Verifique as transformações: presente→imperfecto, futuro→condicional.
          <br />
          3. Observe as mudanças de pronome (yo→él) e advérbio (aquí→allí, hoy→ese día).
        </div>
      </section>

      {/* ── Seção 9: Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Identificar voz passiva e agente"
          statement={
            <p>
              Identifique a alternativa em que a frase está na voz passiva perifrástica e o agente está
              corretamente introduzido:
            </p>
          }
          options={[
            { letter: "a", text: "Se vendieron muchas entradas para el concierto." },
            { letter: "b", text: "La novela fue escrita por Gabriel García Márquez.", correct: true },
            { letter: "c", text: "El director hizo la película en tres meses." },
            { letter: "d", text: "Está escrito el nombre en la puerta." },
          ]}
          resolution={
            <p>
              A passiva perifrástica usa <em>ser + particípio + por + agente</em>. A opção b tem todos os
              elementos: <em>fue escrita</em> (ser no pretérito indefinido + particípio concordado com "la novela",
              feminino singular) <em>por Gabriel García Márquez</em> (agente). A opção a é passiva reflexiva
              (SE passivo). A opção c é voz ativa. A opção d usa <em>estar</em>, não <em>ser</em>.
              Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Particípio irregular na voz passiva"
          statement={
            <p>
              Qual alternativa usa corretamente o particípio irregular do verbo em negrito?{" "}
              <em>"Los documentos fueron _____ (escribir) por los abogados y _____ (poner) en el archivo."</em>
            </p>
          }
          options={[
            { letter: "a", text: "escritos / puestos", correct: true },
            { letter: "b", text: "escritos / ponidos" },
            { letter: "c", text: "escrebidos / puestos" },
            { letter: "d", text: "escritas / puestos" },
          ]}
          resolution={
            <p>
              <em>Escribir</em> → particípio irregular <em>escrito/a/os/as</em>. Como o sujeito é "los documentos"
              (masculino plural) → <em>escritos</em>. <em>Poner</em> → particípio irregular <em>puesto/a/os/as</em>.
              Com "los documentos" (masculino plural) → <em>puestos</em>. *Ponidos e *escrebidos não existem em
              espanhol. <em>Escritas</em> seria para sujeito feminino plural. Resposta: <strong>a</strong>.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Discurso indireto — transformação temporal"
          statement={
            <p>
              O jornalista relatou: <em>"El portavoz dijo que el acuerdo estaría listo para el día siguiente y
              que todos los delegados habían firmado."</em> Qual era o discurso direto original?
            </p>
          }
          options={[
            { letter: "a", text: "«El acuerdo estará listo para mañana y todos los delegados han firmado.»", correct: true },
            { letter: "b", text: "«El acuerdo estaba listo para mañana y todos los delegados firmaron.»" },
            { letter: "c", text: "«El acuerdo habría estado listo y todos los delegados firmarían.»" },
            { letter: "d", text: "«El acuerdo estaría listo y todos los delegados habrían firmado.»" },
          ]}
          resolution={
            <p>
              Ao retransformar discurso indireto (passado) em direto: <em>estaría</em> (condicional) → <em>estará</em>
              (futuro); <em>el día siguiente</em> → <em>mañana</em>; <em>habían firmado</em> (pluscuamperfecto)
              → <em>han firmado</em> (pretérito perfecto). Portanto o discurso direto original era:
              "El acuerdo estará listo para mañana y todos los delegados han firmado."
              Resposta: <strong>a</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Texto jornalístico — passiva e verbo de comunicação"
          statement={
            <p>
              Leia: <em>"La nueva ley de educación fue aprobada ayer por el Parlamento. El ministro afirmó
              que los cambios beneficiarían a millones de estudiantes, aunque los sindicatos advirtieron
              que la reforma necesitaba más debate."</em>{" "}
              Sobre os verbos de comunicação <em>afirmó</em> e <em>advirtieron</em>, é correto dizer:
            </p>
          }
          options={[
            { letter: "a", text: "Ambos expressam a mesma posição: concordância com a lei." },
            { letter: "b", text: "'Afirmó' indica convicção do ministro; 'advirtieron' indica um aviso/alerta dos sindicatos contra a reforma.", correct: true },
            { letter: "c", text: "'Advirtieron' indica que os sindicatos aprovaram a reforma com ressalvas." },
            { letter: "d", text: "Os dois verbos são neutros e não revelam a posição dos falantes." },
          ]}
          resolution={
            <p>
              <em>Afirmar</em> = declarar com convicção (o ministro acredita nos benefícios). <em>Advertir</em> =
              avisar, alertar sobre um perigo ou problema — os sindicatos estão sinalizando um risco, não
              apoiando a reforma. O uso desses verbos de comunicação pelo jornalista revela as posições
              opostas dos atores: ministério (a favor) vs. sindicatos (críticos). Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Passiva perifrástica vs. estado com ESTAR"
          statement={
            <p>
              Leia: <em>(I) "La ciudad fue destruida por el terremoto en 1985."</em>{" "}
              <em>(II) "La ciudad está destruida después de décadas de abandono."</em>{" "}
              Qual a diferença de significado entre as duas frases?
            </p>
          }
          options={[
            { letter: "a", text: "Ambas descrevem o mesmo fato histórico com tempos verbais diferentes." },
            { letter: "b", text: "A frase I descreve uma ação passada (o terremoto destruiu); a frase II descreve o estado atual resultante (a cidade está destruída).", correct: true },
            { letter: "c", text: "A frase I usa voz passiva incorretamente; a frase II é a forma correta." },
            { letter: "d", text: "A frase I é mais formal e a frase II é coloquial, mas o sentido é idêntico." },
          ]}
          resolution={
            <p>
              Frase I: <em>fue destruida</em> → passiva perifrástica com <em>ser</em> = ação passada com
              agente ("el terremoto"). Descreve o evento histórico. Frase II: <em>está destruida</em> → estado
              resultante com <em>estar</em> = como a cidade se encontra agora, resultado de um processo. Não
              há agente específico. A diferença ser/estar na passiva é central para a interpretação de textos
              em espanhol. Resposta: <strong>b</strong>.
            </p>
          }
        />
      </section>

    </article>
  );
}
