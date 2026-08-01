"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap14Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 14</span>
          <h1>Imperativo, Subjuntivo e Usos no ENEM</h1>
          <p>
            O Imperativo e o Subjuntivo são dois dos modos verbais mais
            complexos do espanhol e também entre os mais presentes nos textos
            do ENEM — especialmente em textos de publicidade, instruções,
            receitas, campanhas sociais, textos literários e argumentativos.
            O Imperativo expressa ordens, pedidos, conselhos e instruções.
            O Subjuntivo, por sua vez, aparece após verbos de desejo, emoção,
            dúvida e opinião negativa, e em estruturas fixas que são facilmente
            reconhecíveis mesmo sem dominar toda a sua conjugação. Neste
            capítulo você aprenderá a reconhecer e interpretar ambos os modos
            com foco total nas estratégias que funcionam no ENEM.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Imperativo afirmativo</span>
        <h2>1. Imperativo afirmativo — formação regular</h2>
        <p>
          O Imperativo afirmativo em espanhol tem formas distintas para cada
          pessoa. A mais cobrada no ENEM é a forma de <em>tú</em> (informal
          singular) e <em>usted/ustedes</em> (formal). Para a maioria dos
          verbos regulares, a forma de <em>tú</em> no imperativo afirmativo
          é idêntica à 3ª pessoa do singular do Presente do Indicativo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>hablar (-AR)</th>
                <th>comer (-ER)</th>
                <th>vivir (-IR)</th>
                <th>Observação</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>tú</strong></td><td>habla</td><td>come</td><td>vive</td><td>= 3ª p. sing. Presente Ind.</td></tr>
              <tr><td><strong>usted</strong></td><td>hable</td><td>coma</td><td>viva</td><td>= 3ª p. sing. Presente Subj.</td></tr>
              <tr><td><strong>vosotros</strong></td><td>hablad</td><td>comed</td><td>vivid</td><td>inf. + -d (só Espanha)</td></tr>
              <tr><td><strong>ustedes</strong></td><td>hablen</td><td>coman</td><td>vivan</td><td>= 3ª p. pl. Presente Subj.</td></tr>
              <tr><td><strong>nosotros</strong></td><td>hablemos</td><td>comamos</td><td>vivamos</td><td>= 1ª p. pl. Presente Subj.</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Chave prática:</strong> As formas de <em>usted, ustedes</em> e
          <em> nosotros</em> no Imperativo afirmativo são idênticas às do
          Presente do Subjuntivo. Saber isso reduz o que você precisa memorizar
          à metade. A forma de <em>tú</em> é a única que difere (= 3ª pessoa
          singular do Presente do Indicativo).
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Irregulares no imperativo</span>
        <h2>2. Imperativo afirmativo — verbos irregulares em tú</h2>
        <p>
          Oito verbos têm formas irregulares para a 2ª pessoa do singular
          (<em>tú</em>) no imperativo afirmativo. Estes são os mais cobrados
          no ENEM porque aparecem com frequência em textos de instruções,
          publicidade e diálogos literários.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🗣️</span>
            <h3>di (decir)</h3>
            <p><em>Di la verdad.</em><br />= Diz a verdade.</p>
          </div>
          <div className="lesson-card">
            <span>✅</span>
            <h3>haz (hacer)</h3>
            <p><em>Haz tu trabajo.</em><br />= Faz o teu trabalho.</p>
          </div>
          <div className="lesson-card">
            <span>🚶</span>
            <h3>ve (ir/ver)</h3>
            <p><em>Ve al mercado.</em><br />= Vai ao mercado.</p>
          </div>
          <div className="lesson-card">
            <span>📦</span>
            <h3>pon / sal / ten / ven / sé</h3>
            <p>poner/salir/tener/venir/ser:<br /><em>Pon la mesa. Sal ahora.</em></p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Verbo</th>
                <th>Imperativo tú (aff.)</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>decir</td><td><strong>di</strong></td><td><em>Di lo que piensas.</em></td></tr>
              <tr><td>hacer</td><td><strong>haz</strong></td><td><em>Haz ejercicio todos los días.</em></td></tr>
              <tr><td>ir</td><td><strong>ve</strong></td><td><em>Ve a la tienda.</em></td></tr>
              <tr><td>poner</td><td><strong>pon</strong></td><td><em>Pon la mesa.</em></td></tr>
              <tr><td>salir</td><td><strong>sal</strong></td><td><em>Sal de aquí.</em></td></tr>
              <tr><td>ser</td><td><strong>sé</strong></td><td><em>Sé honesto.</em></td></tr>
              <tr><td>tener</td><td><strong>ten</strong></td><td><em>Ten cuidado.</em></td></tr>
              <tr><td>venir</td><td><strong>ven</strong></td><td><em>Ven aquí.</em></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Imperativo negativo</span>
        <h2>3. Imperativo negativo — sempre com o Subjuntivo</h2>
        <p>
          Uma regra fundamental do espanhol: o <strong>imperativo negativo</strong>
          usa as formas do Presente do Subjuntivo para todas as pessoas, precedidas
          por <em>no</em>. Não existe forma própria para o imperativo negativo.
          Isso significa que quem sabe o Subjuntivo sabe automaticamente o
          imperativo negativo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>Imperativo afirmativo</th>
                <th>Imperativo negativo</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>tú</td><td><em>habla / come / vive</em></td><td><em>no hables / no comas / no vivas</em></td></tr>
              <tr><td>usted</td><td><em>hable / coma / viva</em></td><td><em>no hable / no coma / no viva</em></td></tr>
              <tr><td>vosotros</td><td><em>hablad / comed / vivid</em></td><td><em>no habléis / no comáis / no viváis</em></td></tr>
              <tr><td>ustedes</td><td><em>hablen / coman / vivan</em></td><td><em>no hablen / no coman / no vivan</em></td></tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Diagrama do imperativo afirmativo versus negativo em espanhol">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <rect x="20" y="20" width="300" height="160" rx="10" fill="#d1fae5" stroke="#065f46" strokeWidth="2" />
            <text x="170" y="50" textAnchor="middle" fontWeight="bold" fontSize="15" fill="#065f46">AFIRMATIVO</text>
            <text x="170" y="78" textAnchor="middle" fontSize="13" fontStyle="italic" fill="#1f2937">Habla más despacio.</text>
            <text x="170" y="100" textAnchor="middle" fontSize="13" fontStyle="italic" fill="#1f2937">Come las verduras.</text>
            <text x="170" y="122" textAnchor="middle" fontSize="13" fontStyle="italic" fill="#1f2937">Haz los deberes.</text>
            <text x="170" y="150" textAnchor="middle" fontSize="11" fill="#065f46">= 3ª p. sing. Presente Ind.</text>
            <text x="170" y="168" textAnchor="middle" fontSize="11" fill="#065f46">(exceto irregulares)</text>
            <rect x="380" y="20" width="300" height="160" rx="10" fill="#fce7f3" stroke="#9d174d" strokeWidth="2" />
            <text x="530" y="50" textAnchor="middle" fontWeight="bold" fontSize="15" fill="#9d174d">NEGATIVO</text>
            <text x="530" y="78" textAnchor="middle" fontSize="13" fontStyle="italic" fill="#1f2937">No hables tan rápido.</text>
            <text x="530" y="100" textAnchor="middle" fontSize="13" fontStyle="italic" fill="#1f2937">No comas tanta grasa.</text>
            <text x="530" y="122" textAnchor="middle" fontSize="13" fontStyle="italic" fill="#1f2937">No hagas eso.</text>
            <text x="530" y="150" textAnchor="middle" fontSize="11" fill="#9d174d">= no + Presente do Subjuntivo</text>
            <text x="530" y="168" textAnchor="middle" fontSize="11" fill="#9d174d">(sempre, sem exceção)</text>
          </svg>
          <figcaption>Imperativo afirmativo vs. negativo em espanhol: o negativo sempre usa o Presente do Subjuntivo.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Presente do Subjuntivo</span>
        <h2>4. Presente do Subjuntivo — formação</h2>
        <p>
          O Presente do Subjuntivo é formado a partir da 1ª pessoa do singular
          do Presente do Indicativo (o <em>yo</em>), removendo o <em>-o</em>
          final e adicionando as terminações "trocadas": os verbos -AR recebem
          as terminações de -ER, e os verbos -ER/-IR recebem as terminações
          de -AR. Por isso, verbos irregulares na 1ª pessoa do Indicativo
          levam a irregularidade para todo o Subjuntivo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>hablar (Ind.: hablo)</th>
                <th>comer (Ind.: como)</th>
                <th>vivir (Ind.: vivo)</th>
                <th>hacer (Ind.: hago)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>yo</td><td>hable</td><td>coma</td><td>viva</td><td>haga</td></tr>
              <tr><td>tú</td><td>hables</td><td>comas</td><td>vivas</td><td>hagas</td></tr>
              <tr><td>él/ella</td><td>hable</td><td>coma</td><td>viva</td><td>haga</td></tr>
              <tr><td>nosotros</td><td>hablemos</td><td>comamos</td><td>vivamos</td><td>hagamos</td></tr>
              <tr><td>vosotros</td><td>habléis</td><td>comáis</td><td>viváis</td><td>hagáis</td></tr>
              <tr><td>ellos/Uds.</td><td>hablen</td><td>coman</td><td>vivan</td><td>hagan</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Regra mnemônica "WEIRDO":</strong> Em inglês, o Subjuntivo é
          frequentemente lembrado pelo acrônimo WEIRDO — em espanhol funciona
          da mesma forma. Subjuntivo aparece após expressões de: <em>Wish</em>
          (desejo: <em>quiero que</em>), <em>Emotion</em> (emoção: <em>me alegro
          de que</em>), <em>Impersonal expressions</em> (es necesario que),
          <em>Recommendations</em> (recomiendo que), <em>Doubt/Denial</em>
          (duda/negación: <em>no creo que</em>), <em>Ojalá</em> (tomara que).
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Usos do Subjuntivo</span>
        <h2>5. Usos principais do Presente do Subjuntivo</h2>
        <p>
          O Subjuntivo nunca aparece sozinho — sempre vem em orações subordinadas,
          introduzidas por expressões específicas. Reconhecer essas expressões
          é o caminho mais eficiente para interpretar o Subjuntivo em textos
          do ENEM sem precisar dominar toda a sua gramática.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de expressão</th>
                <th>Gatilhos do Subjuntivo</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Desejo</td>
                <td>querer que, desear que, esperar que, ojalá</td>
                <td><em>Quiero que vengas.</em></td>
              </tr>
              <tr>
                <td>Emoção</td>
                <td>me alegra que, me sorprende que, lamento que, es una pena que</td>
                <td><em>Me alegra que estés aquí.</em></td>
              </tr>
              <tr>
                <td>Dúvida / Negação</td>
                <td>no creo que, dudo que, es posible que, puede que</td>
                <td><em>No creo que tenga razón.</em></td>
              </tr>
              <tr>
                <td>Expressões impessoais</td>
                <td>es importante que, es necesario que, es mejor que, conviene que</td>
                <td><em>Es necesario que estudien.</em></td>
              </tr>
              <tr>
                <td>Final (propósito)</td>
                <td>para que, a fin de que</td>
                <td><em>Lo digo para que lo sepas.</em></td>
              </tr>
              <tr>
                <td>Concessão (com incerteza)</td>
                <td>aunque + subjuntivo (= mesmo que / ainda que)</td>
                <td><em>Aunque llueva, saldré.</em></td>
              </tr>
              <tr>
                <td>Temporal (com futuro)</td>
                <td>cuando + subjuntivo (= quando [no futuro])</td>
                <td><em>Cuando llegues, llámame.</em></td>
              </tr>
              <tr>
                <td>Condicional negativa</td>
                <td>a menos que, a no ser que</td>
                <td><em>Iré a menos que llueva.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Indicativo vs. Subjuntivo</span>
        <h2>6. Indicativo vs. Subjuntivo — a distinção essencial</h2>
        <p>
          A distinção entre Indicativo e Subjuntivo é um dos pontos mais
          cobrados no ENEM. Simplificando: o Indicativo apresenta fatos,
          certezas e realidades; o Subjuntivo apresenta subjetividade, dúvida,
          desejo, emoção e hipótese. Algumas conjunções determinam o modo pelo
          contexto.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Expressão</th>
                <th>+ Indicativo</th>
                <th>+ Subjuntivo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>aunque</em></td>
                <td>Fato real: <em>Aunque llueve, salgo.</em> (Embora esteja chovendo [e está], saio.)</td>
                <td>Hipótese: <em>Aunque llueva, saldré.</em> (Mesmo que chova [não sei se vai], sairei.)</td>
              </tr>
              <tr>
                <td><em>cuando</em></td>
                <td>Passado/hábito: <em>Cuando llego, como.</em> (Quando chego, como.)</td>
                <td>Futuro: <em>Cuando llegues, come.</em> (Quando chegar, come.)</td>
              </tr>
              <tr>
                <td><em>creer que</em></td>
                <td>Afirmativo: <em>Creo que tiene razón.</em> (Acho que tem razão.)</td>
                <td>Negativo: <em>No creo que tenga razón.</em> (Não acho que tenha razão.)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Diagrama comparativo entre indicativo e subjuntivo">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <defs>
              <marker id="cap14arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#374151" />
              </marker>
            </defs>
            <rect x="20" y="25" width="305" height="150" rx="10" fill="#dbeafe" />
            <text x="172" y="55" textAnchor="middle" fontWeight="bold" fontSize="15" fill="#1e40af">INDICATIVO</text>
            <text x="172" y="80" textAnchor="middle" fontSize="12" fill="#374151">fato, certeza, realidade</text>
            <text x="172" y="105" textAnchor="middle" fontSize="12" fontStyle="italic" fill="#1f2937">Sé que viene. (Sei que vem.)</text>
            <text x="172" y="128" textAnchor="middle" fontSize="12" fontStyle="italic" fill="#1f2937">Creo que tiene razón.</text>
            <text x="172" y="155" textAnchor="middle" fontSize="12" fontStyle="italic" fill="#1f2937">Aunque llueve, salgo.</text>
            <rect x="375" y="25" width="305" height="150" rx="10" fill="#fef3c7" />
            <text x="527" y="55" textAnchor="middle" fontWeight="bold" fontSize="15" fill="#92400e">SUBJUNTIVO</text>
            <text x="527" y="80" textAnchor="middle" fontSize="12" fill="#374151">desejo, dúvida, emoção, hipótese</text>
            <text x="527" y="105" textAnchor="middle" fontSize="12" fontStyle="italic" fill="#1f2937">Espero que venga. (Espero que venha.)</text>
            <text x="527" y="128" textAnchor="middle" fontSize="12" fontStyle="italic" fill="#1f2937">No creo que tenga razón.</text>
            <text x="527" y="155" textAnchor="middle" fontSize="12" fontStyle="italic" fill="#1f2937">Aunque llueva, saldré.</text>
          </svg>
          <figcaption>Indicativo para fatos e certezas; Subjuntivo para desejo, dúvida e hipótese. A mesma conjunção pode determinar modos diferentes.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Imperfeito do Subjuntivo</span>
        <h2>7. Imperfeito do Subjuntivo — usos de cortesia e hipótese</h2>
        <p>
          O Imperfeito do Subjuntivo (<em>Pretérito Imperfecto de Subjuntivo</em>)
          é formado a partir da 3ª pessoa do plural do Pretérito Indefinido,
          removendo <em>-ron</em> e adicionando as terminações:
          <em> -ra, -ras, -ra, -ramos, -rais, -ran</em> (forma mais comum)
          ou <em>-se, -ses, -se, -semos, -seis, -sen</em> (forma alternativa).
          Alguns usos do Imperfeito do Subjuntivo aparecem regularmente no ENEM.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🙏</span>
            <h3>Cortesia</h3>
            <p><em>Quisiera un café, por favor.</em><br />= Queria um café, por favor. (<em>querer</em> no imp. subj. = forma mais delicada)</p>
          </div>
          <div className="lesson-card">
            <span>💭</span>
            <h3>Hipótese (Si + imp. subj.)</h3>
            <p><em>Si pudiera, viajaría por el mundo.</em><br />= Se pudesse, viajaria pelo mundo.</p>
          </div>
          <div className="lesson-card">
            <span>🌟</span>
            <h3>Ojalá (desejo difícil)</h3>
            <p><em>Ojalá tuviéramos más tiempo.</em><br />= Tomara que tivéssemos mais tempo.</p>
          </div>
          <div className="lesson-card">
            <span>📚</span>
            <h3>Como si (como se)</h3>
            <p><em>Habla como si lo supiera todo.</em><br />= Fala como se soubesse tudo.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Quisiera e pudiera:</strong> As formas <em>quisiera</em>
          (de <em>querer</em>) e <em>pudiera</em> (de <em>poder</em>) no
          Imperfeito do Subjuntivo são especialmente comuns em textos formais
          e literários como forma de cortesia ou hipótese. <em>Quisiera pedirle
          un favor</em> é mais delicado que <em>quiero pedirle</em>.
          Reconhecer essas formas evita confundi-las com o Futuro ou o Condicional.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fórmulas fixas</span>
        <h2>8. Fórmulas fixas com Subjuntivo no ENEM</h2>
        <p>
          Uma das estratégias mais eficientes para reconhecer o Subjuntivo no
          ENEM é memorizar as expressões e conjunções que <strong>sempre</strong>
          exigem Subjuntivo. Com isso, você não precisa analisar a conjugação
          em detalhe — basta identificar a expressão gatilho.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fórmula / Expressão</th>
                <th>Tradução</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><em>ojalá (que)</em></td><td>tomara que / oxalá</td><td><em>Ojalá que llueva café.</em></td></tr>
              <tr><td><em>para que</em></td><td>para que (finalidade)</td><td><em>Te lo digo para que lo sepas.</em></td></tr>
              <tr><td><em>a menos que</em></td><td>a menos que</td><td><em>Iré a menos que llueva.</em></td></tr>
              <tr><td><em>sin que</em></td><td>sem que</td><td><em>Salió sin que lo vieran.</em></td></tr>
              <tr><td><em>aunque</em> + fut.</td><td>mesmo que / ainda que</td><td><em>Aunque sea difícil, lo intentaré.</em></td></tr>
              <tr><td><em>cuando</em> + fut.</td><td>quando (futuro)</td><td><em>Cuando llegues, avísame.</em></td></tr>
              <tr><td><em>quiero que</em></td><td>quero que</td><td><em>Quiero que seas feliz.</em></td></tr>
              <tr><td><em>es importante que</em></td><td>é importante que</td><td><em>Es importante que estudien.</em></td></tr>
              <tr><td><em>no creo que</em></td><td>não creio que</td><td><em>No creo que venga hoy.</em></td></tr>
              <tr><td><em>antes de que</em></td><td>antes que</td><td><em>Llámame antes de que salgas.</em></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia ENEM</span>
        <h2>9. Estratégia completa para questões de Imperativo e Subjuntivo</h2>
        <p>
          No ENEM, as questões sobre Imperativo e Subjuntivo raramente pedem
          que você conjugue verbos — elas pedem que você interprete o sentido
          de uma construção em contexto. A estratégia a seguir cobre a grande
          maioria dos casos.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>1️⃣</span>
            <h3>Identifique o modo</h3>
            <p>Imperativo (ordem/pedido), Indicativo (fato) ou Subjuntivo (desejo/dúvida/hipótese)?</p>
          </div>
          <div className="lesson-card">
            <span>2️⃣</span>
            <h3>Procure o gatilho</h3>
            <p>Qual expressão introduz a oração? <em>quiero que, para que, cuando, aunque</em>... O gatilho revela o modo.</p>
          </div>
          <div className="lesson-card">
            <span>3️⃣</span>
            <h3>Determine a intenção</h3>
            <p>O autor ordena, deseja, duvida, recomenda ou hipotisa? A intenção comunicativa resolve a questão.</p>
          </div>
          <div className="lesson-card">
            <span>4️⃣</span>
            <h3>Use o contexto</h3>
            <p>O contexto do texto (tipo de gênero, tema, relação entre personagens) sempre confirma a interpretação correta.</p>
          </div>
        </div>
        <div className="math-block">
          💡 <strong>Dica ENEM:</strong> Quando você vê <em>cuando</em> + verbo com
          terminação <em>-e(s)</em> em vez de <em>-a(s)</em> (como seria no indicativo),
          é Subjuntivo: <em>cuando llegues</em> (≠ <em>cuando llegas</em>). Esse
          "cruzamento" de terminações é uma pista visual rápida: -AR com terminação de
          -ER (-e, -es, -en) e -ER/-IR com terminação de -AR (-a, -as, -an) =
          Subjuntivo!
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Imperativo afirmativo regular"
          statement={
            <p>
              Qual é a forma correta do imperativo afirmativo para <em>tú</em>
              do verbo <em>escuchar</em>?
            </p>
          }
          options={[
            { letter: "a", text: "escucha", correct: true },
            { letter: "b", text: "escuches" },
            { letter: "c", text: "escuchad" },
            { letter: "d", text: "escuche" },
          ]}
          resolution={
            <p>
              Resposta: <strong>a) escucha</strong>. O imperativo afirmativo
              para <em>tú</em> de verbos regulares em -AR é idêntico à 3ª
              pessoa do singular do Presente do Indicativo: <em>él escucha →
              tú escucha</em>. A opção b (<em>escuches</em>) é o Presente do
              Subjuntivo; a opção c (<em>escuchad</em>) é o imperativo para
              <em>vosotros</em>; a opção d (<em>escuche</em>) é o imperativo
              para <em>usted</em>.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Imperativo negativo"
          statement={
            <p>
              Transforme em imperativo negativo para <em>tú</em>:<br />
              <em>"Habla tan rápido."</em> → <em>"No ___ tan rápido."</em>
            </p>
          }
          options={[
            { letter: "a", text: "No habla tan rápido." },
            { letter: "b", text: "No hablas tan rápido." },
            { letter: "c", text: "No hables tan rápido.", correct: true },
            { letter: "d", text: "No hablad tan rápido." },
          ]}
          resolution={
            <p>
              Resposta: <strong>c) No hables tan rápido.</strong> O imperativo
              negativo para <em>tú</em> usa o Presente do Subjuntivo:
              <em> no + hables</em> (subjuntivo de <em>hablar</em> para
              <em> tú</em>). Note a terminação <em>-es</em>, típica do
              Subjuntivo para verbos -AR, diferente do indicativo (<em>hablas</em>)
              e do imperativo afirmativo (<em>habla</em>).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Subjuntivo em texto publicitário"
          statement={
            <p>
              Leia o slogan de uma campanha de saúde pública:<br />
              <em>"Quiere que tu ciudad sea más limpia. Recicla. No tires
              basura en la calle para que todos puedan disfrutar del espacio
              público."</em><br />
              Qual das afirmativas está correta sobre o uso do Subjuntivo?
            </p>
          }
          options={[
            { letter: "a", text: "sea e puedan estão no Indicativo porque descrevem fatos reais." },
            { letter: "b", text: "sea está no Subjuntivo após quiere que (desejo); puedan está no Subjuntivo após para que (finalidade).", correct: true },
            { letter: "c", text: "sea é Imperativo; puedan é Futuro." },
            { letter: "d", text: "Ambos os verbos estão no Imperativo porque o texto dá ordens." },
          ]}
          resolution={
            <p>
              Resposta: <strong>b)</strong>. O texto usa duas estruturas
              clássicas que exigem Subjuntivo: (1) <em>quiere que + sea</em> —
              após verbo de desejo (<em>querer que</em>), usa-se o Subjuntivo;
              <em>sea</em> é a 3ª pessoa do singular do Presente do Subjuntivo
              de <em>ser</em>. (2) <em>para que + puedan</em> — a conjunção
              de finalidade <em>para que</em> sempre pede Subjuntivo;
              <em>puedan</em> é a 3ª pessoa do plural do Subjuntivo de
              <em>poder</em>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Aunque com Indicativo vs. Subjuntivo"
          statement={
            <p>
              Leia as duas frases e analise:<br />
              I. <em>Aunque está lloviendo, los niños juegan en el parque.</em><br />
              II. <em>Aunque llueva mañana, los niños jugarán en el parque.</em><br />
              Qual é a diferença de significado?
            </p>
          }
          options={[
            { letter: "a", text: "A frase I está incorreta; aunque sempre exige Subjuntivo." },
            { letter: "b", text: "Ambas as frases são incorretas em espanhol." },
            { letter: "c", text: "Na frase I, a chuva é um fato real (indicativo); na frase II, a chuva é hipotética (subjuntivo).", correct: true },
            { letter: "d", text: "A frase I refere-se ao futuro; a frase II ao passado." },
          ]}
          resolution={
            <p>
              Resposta: <strong>c)</strong>. Esta é a distinção clássica do
              <em>aunque</em> em espanhol: com Indicativo (<em>está lloviendo</em>),
              a oração concessiva apresenta um fato real — está de fato chovendo
              agora, e mesmo assim as crianças brincam. Com Subjuntivo
              (<em>llueva</em>), apresenta uma hipótese — talvez chova amanhã,
              mas mesmo que isso aconteça, as crianças brincarão. Esta distinção
              de modo verbal altera completamente o grau de certeza expresso.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Identificação de Subjuntivo em texto literário"
          statement={
            <p>
              Leia o trecho: <em>"El anciano le dijo a su nieto: 'Cuando seas
              grande, espero que recuerdes que lo más importante no es tener
              mucho, sino saber querer lo que tienes.'"</em><br />
              Quais verbos estão no Subjuntivo e por quê?
            </p>
          }
          options={[
            { letter: "a", text: "seas e recuerdes — seas pelo gatilho cuando + futuro; recuerdes pelo gatilho espero que.", correct: true },
            { letter: "b", text: "seas e tienes — porque ambos seguem conectores de dúvida." },
            { letter: "c", text: "dijo e espero — porque são verbos de comunicação." },
            { letter: "d", text: "saber e querer — porque são verbos no infinitivo dentro do Subjuntivo." },
          ]}
          resolution={
            <p>
              Resposta: <strong>a)</strong>. Dois Subjuntivos no trecho:
              (1) <em>cuando seas grande</em> — a conjunção <em>cuando</em>
              com referência ao futuro exige Subjuntivo: <em>seas</em> é o
              Presente do Subjuntivo de <em>ser</em> para <em>tú</em>;
              (2) <em>espero que recuerdes</em> — após verbo de desejo/expectativa
              (<em>esperar que</em>), usa-se Subjuntivo: <em>recuerdes</em>
              é o Presente do Subjuntivo de <em>recordar</em> para <em>tú</em>.
              Os demais verbos (<em>tienes</em>) estão no Indicativo porque
              não seguem gatilhos de Subjuntivo.
            </p>
          }
        />
      </section>

    </article>
  );
}
