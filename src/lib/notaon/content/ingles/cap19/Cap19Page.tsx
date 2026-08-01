"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap19Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 19</span>
          <h1>Conditional Sentences: Zero, First, Second e Third</h1>
          <p>
            As <strong>sentenças condicionais</strong> (conditional sentences) expressam uma
            relação de causa e consequência, possibilidade ou hipótese. Elas aparecem
            constantemente em textos científicos, argumentativos, jornalísticos e publicitários
            — exatamente os gêneros que o ENEM privilegia. Dominar as quatro estruturas
            condicionais é essencial para interpretar corretamente o grau de certeza ou
            hipoteticidade que o autor quer transmitir.
          </p>
          <p>
            Neste capítulo você vai aprender a identificar, construir e interpretar o
            Zero, o First, o Second e o Third Conditional, além do Mixed Conditional,
            das alternativas ao <em>if</em> e das formas invertidas formais que surgem
            em textos mais elaborados.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Introdução</span>
        <h2>1. O que é uma sentença condicional?</h2>
        <p>
          Uma sentença condicional é formada por duas partes: a <strong>cláusula
          condicional</strong> (<em>if-clause</em> ou subordinada), que estabelece
          a condição, e a <strong>cláusula principal</strong> (<em>main clause</em>
          ou result clause), que apresenta o resultado. A ordem das duas cláusulas
          pode ser invertida sem mudar o sentido — quando a <em>if-clause</em> vem
          primeiro, usa-se vírgula para separar as partes.
        </p>
        <div className="lesson-highlight">
          <strong>Estrutura básica:</strong>
          <br />
          <em>If [condição], [resultado].</em> — vírgula quando a <em>if-clause</em> vem primeiro.
          <br />
          <em>[Resultado] if [condição].</em> — sem vírgula quando o resultado vem primeiro.
          <br /><br />
          Exemplo: <strong>"If you heat ice, it melts."</strong> / <strong>"Ice melts if you heat it."</strong>
          <br />
          (Se você aquece o gelo, ele derrete. / O gelo derrete se você aquecê-lo.)
        </div>
        <p>
          O segredo para identificar qual tipo de condicional está sendo usado está
          nos <strong>tempos verbais</strong> de cada cláusula. Cada combinação
          de tempos sinaliza um grau diferente de realidade ou hipoteticidade.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Zero Conditional</h3>
            <p>Fatos universais e verdades científicas. Presente + Presente.</p>
          </div>
          <div className="lesson-card">
            <span>🔮</span>
            <h3>First Conditional</h3>
            <p>Situações reais e possíveis no futuro. Presente + will.</p>
          </div>
          <div className="lesson-card">
            <span>💭</span>
            <h3>Second Conditional</h3>
            <p>Hipóteses no presente/futuro, improváveis ou imaginárias. Past + would.</p>
          </div>
          <div className="lesson-card">
            <span>⏳</span>
            <h3>Third Conditional</h3>
            <p>Hipóteses sobre o passado, arrependimento, impossíveis. Past Perfect + would have.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 — SVG TIMELINE ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visão geral</span>
        <h2>2. Os quatro condicionais: eixo real × hipotético</h2>
        <p>
          Uma forma poderosa de memorizar os quatro condicionais é posicioná-los
          em dois eixos: <strong>tempo</strong> (presente/futuro × passado) e
          <strong> grau de realidade</strong> (real/possível × hipotético/impossível).
          O diagrama abaixo ilustra essa distribuição:
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 720 340"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", maxWidth: 720, display: "block", margin: "0 auto" }}
            aria-label="Diagrama de eixos mostrando os quatro condicionais"
          >
            {/* Background */}
            <rect width="720" height="340" rx="12" fill="#f8fafc" />

            {/* Quadrant backgrounds */}
            <rect x="60" y="40" width="290" height="130" rx="8" fill="#dcfce7" opacity="0.7" />
            <rect x="370" y="40" width="290" height="130" rx="8" fill="#dbeafe" opacity="0.7" />
            <rect x="60" y="190" width="290" height="120" rx="8" fill="#fef9c3" opacity="0.7" />
            <rect x="370" y="190" width="290" height="120" rx="8" fill="#fce7f3" opacity="0.7" />

            {/* Axes */}
            <line x1="360" y1="30" x2="360" y2="320" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6,4" />
            <line x1="50" y1="175" x2="670" y2="175" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6,4" />

            {/* Axis labels */}
            <text x="360" y="22" textAnchor="middle" fontSize="12" fill="#64748b" fontWeight="bold">TEMPO</text>
            <text x="195" y="332" textAnchor="middle" fontSize="12" fill="#64748b" fontWeight="bold">PRESENTE / FUTURO</text>
            <text x="515" y="332" textAnchor="middle" fontSize="12" fill="#64748b" fontWeight="bold">PASSADO</text>
            <text x="18" y="178" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold" transform="rotate(-90,18,178)">REAL</text>
            <text x="700" y="178" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold" transform="rotate(90,700,178)">HIPOTÉTICO</text>

            {/* Zero Conditional box */}
            <rect x="80" y="58" width="250" height="96" rx="8" fill="#16a34a" opacity="0.15" />
            <text x="205" y="82" textAnchor="middle" fontSize="14" fill="#15803d" fontWeight="bold">ZERO CONDITIONAL</text>
            <text x="205" y="102" textAnchor="middle" fontSize="11" fill="#166534">If + present, present</text>
            <text x="205" y="120" textAnchor="middle" fontSize="11" fill="#166534" fontStyle="italic">"If water boils, it evaporates."</text>
            <text x="205" y="140" textAnchor="middle" fontSize="10" fill="#166534">(Se a água ferve, ela evapora.)</text>

            {/* First Conditional box */}
            <rect x="390" y="58" width="250" height="96" rx="8" fill="#2563eb" opacity="0.15" />
            <text x="515" y="82" textAnchor="middle" fontSize="14" fill="#1d4ed8" fontWeight="bold">FIRST CONDITIONAL</text>
            <text x="515" y="102" textAnchor="middle" fontSize="11" fill="#1e40af">If + present, will + base verb</text>
            <text x="515" y="120" textAnchor="middle" fontSize="11" fill="#1e40af" fontStyle="italic">"If it rains, we will stay."</text>
            <text x="515" y="140" textAnchor="middle" fontSize="10" fill="#1e40af">(Se chover, ficaremos em casa.)</text>

            {/* Second Conditional box */}
            <rect x="80" y="198" width="250" height="96" rx="8" fill="#ca8a04" opacity="0.15" />
            <text x="205" y="222" textAnchor="middle" fontSize="14" fill="#92400e" fontWeight="bold">SECOND CONDITIONAL</text>
            <text x="205" y="242" textAnchor="middle" fontSize="11" fill="#78350f">If + past simple, would + base</text>
            <text x="205" y="260" textAnchor="middle" fontSize="11" fill="#78350f" fontStyle="italic">"If I had time, I would travel."</text>
            <text x="205" y="278" textAnchor="middle" fontSize="10" fill="#78350f">(Se eu tivesse tempo, viajaria.)</text>

            {/* Third Conditional box */}
            <rect x="390" y="198" width="250" height="96" rx="8" fill="#be185d" opacity="0.15" />
            <text x="515" y="222" textAnchor="middle" fontSize="14" fill="#9d174d" fontWeight="bold">THIRD CONDITIONAL</text>
            <text x="515" y="242" textAnchor="middle" fontSize="11" fill="#831843">If + past perfect, would have</text>
            <text x="515" y="260" textAnchor="middle" fontSize="11" fill="#831843" fontStyle="italic">"If she had tried, she'd have won."</text>
            <text x="515" y="278" textAnchor="middle" fontSize="10" fill="#831843">(Se ela tivesse tentado, teria ganho.)</text>

            {/* Reality axis arrow labels */}
            <text x="28" y="100" textAnchor="middle" fontSize="10" fill="#16a34a" transform="rotate(-90,28,100)">↑ REAL</text>
            <text x="28" y="260" textAnchor="middle" fontSize="10" fill="#9d174d" transform="rotate(-90,28,260)">↓ HIPOTÉTICO</text>
          </svg>
          <figcaption>
            Diagrama: os quatro condicionais distribuídos pelos eixos tempo (presente-futuro vs. passado)
            e grau de realidade (real/possível vs. hipotético/impossível).
          </figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tipo 0</span>
        <h2>3. Zero Conditional: Verdades Universais</h2>
        <p>
          O <strong>Zero Conditional</strong> é usado para expressar fatos sempre
          verdadeiros: leis científicas, verdades universais, regras gerais e hábitos
          repetíveis. Tanto a <em>if-clause</em> quanto a <em>main clause</em> ficam
          no <strong>presente simples</strong>. A palavra <em>when</em> pode substituir
          <em> if</em> sem mudar o sentido — o que reforça a ideia de que a condição
          é sempre verdadeira, não apenas hipotética.
        </p>

        <div className="lesson-highlight">
          <strong>Fórmula:</strong> If / When + sujeito + verbo (presente simples), sujeito + verbo (presente simples).
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>If-clause (condição)</th>
                <th>Main clause (resultado)</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>If water reaches 100°C,</em></td>
                <td><em>it boils.</em></td>
                <td>Se a água chega a 100 °C, ela ferve.</td>
              </tr>
              <tr>
                <td><em>If you mix red and blue,</em></td>
                <td><em>you get purple.</em></td>
                <td>Se você mistura vermelho e azul, obtém roxo.</td>
              </tr>
              <tr>
                <td><em>If plants don't get sunlight,</em></td>
                <td><em>they die.</em></td>
                <td>Se as plantas não recebem luz solar, elas morrem.</td>
              </tr>
              <tr>
                <td><em>When the economy grows,</em></td>
                <td><em>unemployment falls.</em></td>
                <td>Quando a economia cresce, o desemprego cai.</td>
              </tr>
              <tr>
                <td><em>If you heat metal,</em></td>
                <td><em>it expands.</em></td>
                <td>Se você aquece metal, ele se expande.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          No ENEM, o Zero Conditional aparece com frequência em textos de
          <strong> divulgação científica</strong>, onde o autor descreve fenômenos
          naturais, reações químicas ou regras econômicas como verdades absolutas.
          Reconhecer essa estrutura ajuda a identificar o tom <strong>assertivo
          e impessoal</strong> desses textos.
        </p>
        <div className="lesson-highlight">
          <strong>Dica de leitura:</strong> Se a <em>if-clause</em> está no presente
          simples <em>e</em> a <em>main clause</em> também está no presente simples,
          o autor está afirmando uma verdade geral — não uma possibilidade futura.
          Isso é essencial para responder questões sobre a <strong>intenção
          comunicativa</strong> do texto.
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tipo 1</span>
        <h2>4. First Conditional: O Futuro Possível</h2>
        <p>
          O <strong>First Conditional</strong> expressa situações <strong>reais e
          possíveis</strong> no futuro. O falante acredita genuinamente que a
          condição pode se concretizar. A <em>if-clause</em> usa o
          <strong> presente simples</strong> (nunca <em>will</em>!) e a
          <em> main clause</em> usa <strong>will + verbo base</strong>.
        </p>
        <div className="lesson-highlight">
          <strong>Fórmula:</strong> If + sujeito + verbo (presente simples), sujeito + will + verbo base.
          <br /><br />
          <strong>Atenção:</strong> Em inglês, nunca se usa <em>will</em> diretamente
          após <em>if</em> em condicionais. Dizer <em>"If it will rain..."</em> é
          erro gramatical. O correto é <em>"If it rains..."</em>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>If-clause (presente simples)</th>
                <th>Main clause (will + base)</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>If it rains tomorrow,</em></td>
                <td><em>we will stay home.</em></td>
                <td>Se chover amanhã, ficaremos em casa.</td>
              </tr>
              <tr>
                <td><em>If she studies hard,</em></td>
                <td><em>she will pass the exam.</em></td>
                <td>Se ela estudar muito, passará no exame.</td>
              </tr>
              <tr>
                <td><em>If the government invests in education,</em></td>
                <td><em>inequality will decrease.</em></td>
                <td>Se o governo investir em educação, a desigualdade diminuirá.</td>
              </tr>
              <tr>
                <td><em>If you don't hurry,</em></td>
                <td><em>you will miss the bus.</em></td>
                <td>Se você não se apressar, perderá o ônibus.</td>
              </tr>
              <tr>
                <td><em>If we don't act now,</em></td>
                <td><em>climate change will worsen.</em></td>
                <td>Se não agirmos agora, a mudança climática piorará.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Variações possíveis na <em>main clause</em> do First Conditional incluem
          <em> can</em>, <em>may</em>, <em>might</em> e <em>should</em> em lugar
          de <em>will</em>, dependendo do grau de certeza do falante:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✅</span>
            <h3>will</h3>
            <p>Certeza alta: <em>"If you call, she will answer."</em> (Se você ligar, ela atenderá.)</p>
          </div>
          <div className="lesson-card">
            <span>🎲</span>
            <h3>may / might</h3>
            <p>Possibilidade: <em>"If it rains, we might cancel."</em> (Se chover, talvez cancelemos.)</p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>can</h3>
            <p>Capacidade/permissão: <em>"If you finish, you can leave."</em> (Se terminar, pode ir.)</p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>should</h3>
            <p>Recomendação: <em>"If you feel sick, you should rest."</em> (Se se sentir mal, deve descansar.)</p>
          </div>
        </div>

        <p>
          Em textos argumentativos do ENEM, o First Conditional é muito usado para
          apresentar <strong>propostas e soluções</strong>. O autor estabelece uma
          condição (<em>if the policy changes</em>) e projeta uma consequência
          provável (<em>the situation will improve</em>), construindo um argumento
          de causa e efeito.
        </p>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tipo 2</span>
        <h2>5. Second Conditional: O Hipotético</h2>
        <p>
          O <strong>Second Conditional</strong> é usado para situações
          <strong> hipotéticas</strong> no presente ou futuro — situações que o
          falante considera improváveis, irreais ou imaginárias. A
          <em> if-clause</em> usa o <strong>passado simples</strong> e a
          <em> main clause</em> usa <strong>would + verbo base</strong>.
        </p>
        <div className="lesson-highlight">
          <strong>Fórmula:</strong> If + sujeito + verbo (passado simples), sujeito + would + verbo base.
          <br /><br />
          <strong>Detalhe formal:</strong> Com o verbo <em>to be</em>, o inglês
          formal usa <strong><em>were</em></strong> para todos os sujeitos —
          inclusive <em>I, he, she, it</em>. Exemplo: <em>"If I were you, I would
          apologize."</em> (Se eu fosse você, me desculparia.) Em linguagem
          informal, <em>was</em> é aceito com <em>I / he / she / it</em>, mas o
          ENEM privilegia o padrão formal.
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>If-clause (passado simples)</th>
                <th>Main clause (would + base)</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>If I had more time,</em></td>
                <td><em>I would study abroad.</em></td>
                <td>Se eu tivesse mais tempo, estudaria no exterior.</td>
              </tr>
              <tr>
                <td><em>If she were the president,</em></td>
                <td><em>she would reform education.</em></td>
                <td>Se ela fosse presidente, reformaria a educação.</td>
              </tr>
              <tr>
                <td><em>If we lived closer to the ocean,</em></td>
                <td><em>we would go surfing every day.</em></td>
                <td>Se morássemos mais perto do oceano, surfaríamos todo dia.</td>
              </tr>
              <tr>
                <td><em>If I were you,</em></td>
                <td><em>I would not accept that offer.</em></td>
                <td>Se eu fosse você, não aceitaria essa oferta.</td>
              </tr>
              <tr>
                <td><em>If the company invested in clean energy,</em></td>
                <td><em>it would reduce its carbon footprint.</em></td>
                <td>Se a empresa investisse em energia limpa, reduziria sua pegada de carbono.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          É importante não confundir o <strong>passado simples</strong> do Second
          Conditional com o passado narrativo comum. A chave está na presença de
          <em> would</em> na <em>main clause</em>: se há <em>would</em>, a sentença
          é condicional hipotética, não um relato do passado.
        </p>
        <div className="lesson-highlight">
          <strong>Contraste First × Second:</strong>
          <br />
          <em>"If it rains tomorrow, we will cancel the event."</em> → First: chuva é possível.
          <br />
          <em>"If it rained tomorrow, we would cancel the event."</em> → Second: chuva é improvável ou imaginária.
          <br /><br />
          (A diferença está no grau de certeza do falante — não no tempo em si.)
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tipo 3</span>
        <h2>6. Third Conditional: O Passado que Não Voltou</h2>
        <p>
          O <strong>Third Conditional</strong> fala de situações
          <strong> impossíveis de mudar</strong> — hipóteses sobre o passado que
          não aconteceram. É o condicional do arrependimento, da reflexão e da
          análise histórica. A <em>if-clause</em> usa o
          <strong> past perfect</strong> (<em>had</em> + particípio passado) e a
          <em> main clause</em> usa <strong>would have</strong> + particípio passado.
        </p>
        <div className="lesson-highlight">
          <strong>Fórmula:</strong> If + sujeito + had + particípio passado, sujeito + would have + particípio passado.
          <br /><br />
          Formas contraídas comuns: <em>I'd have, she'd have, they'd have</em>.
          Fique atento: <em>"she'd"</em> pode ser <em>"she had"</em> (past perfect)
          ou <em>"she would"</em> — o contexto decide.
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>If-clause (past perfect)</th>
                <th>Main clause (would have + pp)</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>If she had studied harder,</em></td>
                <td><em>she would have passed the exam.</em></td>
                <td>Se ela tivesse estudado mais, teria passado no exame.</td>
              </tr>
              <tr>
                <td><em>If they had invested earlier,</em></td>
                <td><em>the company would have survived.</em></td>
                <td>Se tivessem investido antes, a empresa teria sobrevivido.</td>
              </tr>
              <tr>
                <td><em>If I had known about the event,</em></td>
                <td><em>I would have attended.</em></td>
                <td>Se eu soubesse sobre o evento, teria comparecido.</td>
              </tr>
              <tr>
                <td><em>If the government had acted sooner,</em></td>
                <td><em>thousands of lives would have been saved.</em></td>
                <td>Se o governo tivesse agido mais cedo, milhares de vidas teriam sido salvas.</td>
              </tr>
              <tr>
                <td><em>If he hadn't dropped out of school,</em></td>
                <td><em>he would have become an engineer.</em></td>
                <td>Se ele não tivesse abandonado a escola, teria se tornado engenheiro.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          O Third Conditional é frequente em textos do ENEM que analisam
          <strong> contextos históricos</strong>, discutem <strong>erros de política
          pública</strong> ou refletem sobre decisões individuais e coletivas que
          poderiam ter tido desfechos diferentes.
        </p>
        <div className="lesson-highlight">
          <strong>Forma passiva no Third Conditional:</strong> <em>would have been</em> + particípio.
          <br />
          Exemplo: <em>"If the vaccine had been developed earlier, the epidemic would have been contained."</em>
          <br />
          (Se a vacina tivesse sido desenvolvida antes, a epidemia teria sido contida.)
        </div>
      </section>

      {/* ── SEÇÃO 7 — MIXED + SVG FLOWCHART ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tipo misto</span>
        <h2>7. Mixed Conditional: Combinando Tempos</h2>
        <p>
          O <strong>Mixed Conditional</strong> combina elementos do Second e do
          Third Conditional para expressar situações onde a condição e o resultado
          pertencem a <strong>tempos diferentes</strong>. O padrão mais comum:
          <em> if-clause</em> no <strong>past perfect</strong> (passado hipotético)
          + <em>main clause</em> com <strong>would + base</strong> (consequência no
          presente).
        </p>
        <div className="lesson-highlight">
          <strong>Fórmula do Mixed mais comum:</strong>
          <br />
          If + sujeito + <em>had</em> + particípio passado (passado), sujeito + <em>would</em> + verbo base (presente).
          <br /><br />
          Exemplo: <em>"If I had studied medicine, I would be a doctor now."</em>
          <br />
          (Se eu tivesse estudado medicina [no passado], eu seria médico agora [no presente].)
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⬅️</span>
            <h3>Condição no passado</h3>
            <p><em>If she had moved to Brazil in 2010,</em> — algo que não aconteceu no passado.</p>
          </div>
          <div className="lesson-card">
            <span>➡️</span>
            <h3>Resultado no presente</h3>
            <p><em>she would speak Portuguese fluently now.</em> — consequência atual de algo passado.</p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Outro padrão</h3>
            <p><em>"If I weren't so tired"</em> (2nd, presente) <em>"I would have gone to the party"</em> (3rd, passado).</p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>No ENEM</h3>
            <p>O Mixed aparece em análises que relacionam uma decisão passada a consequências presentes ou futuras.</p>
          </div>
        </div>

        <p>
          O fluxograma abaixo ajuda a escolher o condicional correto de acordo com
          a referência temporal e o grau de realidade da situação:
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 480"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", maxWidth: 700, display: "block", margin: "0 auto" }}
            aria-label="Fluxograma para escolha do tipo de condicional"
          >
            <rect width="700" height="480" rx="12" fill="#f8fafc" />

            {/* Start node */}
            <ellipse cx="350" cy="36" rx="100" ry="24" fill="#1e40af" />
            <text x="350" y="41" textAnchor="middle" fontSize="13" fill="white" fontWeight="bold">Qual situação?</text>

            {/* Arrow down */}
            <line x1="350" y1="60" x2="350" y2="88" stroke="#64748b" strokeWidth="2" markerEnd="url(#arr)" />

            {/* Diamond: is it a fact / always true? */}
            <polygon points="350,90 450,128 350,166 250,128" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
            <text x="350" y="123" textAnchor="middle" fontSize="11" fill="#78350f">É sempre</text>
            <text x="350" y="138" textAnchor="middle" fontSize="11" fill="#78350f">verdadeiro?</text>

            {/* Yes → Zero */}
            <line x1="450" y1="128" x2="580" y2="128" stroke="#64748b" strokeWidth="2" markerEnd="url(#arr)" />
            <text x="518" y="122" fontSize="11" fill="#16a34a" fontWeight="bold">SIM</text>
            <rect x="580" y="108" width="108" height="40" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <text x="634" y="133" textAnchor="middle" fontSize="12" fill="#15803d" fontWeight="bold">ZERO</text>

            {/* No → next diamond */}
            <line x1="350" y1="166" x2="350" y2="196" stroke="#64748b" strokeWidth="2" markerEnd="url(#arr)" />
            <text x="358" y="185" fontSize="11" fill="#dc2626" fontWeight="bold">NÃO</text>

            {/* Diamond: real / possible? */}
            <polygon points="350,198 450,236 350,274 250,236" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
            <text x="350" y="231" textAnchor="middle" fontSize="11" fill="#1e40af">É real /</text>
            <text x="350" y="246" textAnchor="middle" fontSize="11" fill="#1e40af">possível no futuro?</text>

            {/* Yes → First */}
            <line x1="450" y1="236" x2="580" y2="236" stroke="#64748b" strokeWidth="2" markerEnd="url(#arr)" />
            <text x="518" y="230" fontSize="11" fill="#16a34a" fontWeight="bold">SIM</text>
            <rect x="580" y="216" width="108" height="40" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
            <text x="634" y="241" textAnchor="middle" fontSize="12" fill="#1d4ed8" fontWeight="bold">FIRST</text>

            {/* No → next diamond */}
            <line x1="350" y1="274" x2="350" y2="304" stroke="#64748b" strokeWidth="2" markerEnd="url(#arr)" />
            <text x="358" y="293" fontSize="11" fill="#dc2626" fontWeight="bold">NÃO</text>

            {/* Diamond: about the present/future? */}
            <polygon points="350,306 450,344 350,382 250,344" fill="#fce7f3" stroke="#be185d" strokeWidth="2" />
            <text x="350" y="339" textAnchor="middle" fontSize="11" fill="#9d174d">É hipótese do</text>
            <text x="350" y="354" textAnchor="middle" fontSize="11" fill="#9d174d">presente/futuro?</text>

            {/* Yes → Second */}
            <line x1="450" y1="344" x2="580" y2="344" stroke="#64748b" strokeWidth="2" markerEnd="url(#arr)" />
            <text x="518" y="338" fontSize="11" fill="#16a34a" fontWeight="bold">SIM</text>
            <rect x="580" y="324" width="108" height="40" rx="8" fill="#fce7f3" stroke="#be185d" strokeWidth="2" />
            <text x="634" y="349" textAnchor="middle" fontSize="12" fill="#9d174d" fontWeight="bold">SECOND</text>

            {/* No → Third */}
            <line x1="350" y1="382" x2="350" y2="420" stroke="#64748b" strokeWidth="2" markerEnd="url(#arr)" />
            <text x="358" y="405" fontSize="11" fill="#dc2626" fontWeight="bold">NÃO (passado)</text>
            <rect x="248" y="422" width="204" height="40" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
            <text x="350" y="447" textAnchor="middle" fontSize="12" fill="#92400e" fontWeight="bold">THIRD CONDITIONAL</text>

            {/* Arrow marker */}
            <defs>
              <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#64748b" />
              </marker>
            </defs>
          </svg>
          <figcaption>
            Fluxograma: como escolher o tipo de condicional com base na referência temporal
            e no grau de realidade da situação.
          </figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário</span>
        <h2>8. Alternativas ao "if"</h2>
        <p>
          O inglês oferece diversas conjunções e expressões que funcionam de modo
          semelhante ao <em>if</em>, mas com matizes diferentes de sentido. O ENEM
          pode apresentar textos que usam essas alternativas, e reconhecê-las é
          fundamental para uma interpretação precisa.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Expressão</th>
                <th>Significado</th>
                <th>Exemplo</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>unless</strong></td>
                <td>se não / a menos que</td>
                <td><em>"Unless you study, you will fail."</em></td>
                <td>A menos que você estude, você vai reprovar.</td>
              </tr>
              <tr>
                <td><strong>provided (that)</strong></td>
                <td>desde que / contanto que</td>
                <td><em>"You can go out, provided that you finish your homework."</em></td>
                <td>Você pode sair, desde que termine a lição.</td>
              </tr>
              <tr>
                <td><strong>as long as</strong></td>
                <td>enquanto / desde que</td>
                <td><em>"As long as there is demand, prices will rise."</em></td>
                <td>Enquanto houver demanda, os preços subirão.</td>
              </tr>
              <tr>
                <td><strong>in case</strong></td>
                <td>caso / por precaução</td>
                <td><em>"Take an umbrella in case it rains."</em></td>
                <td>Leve um guarda-chuva caso chova.</td>
              </tr>
              <tr>
                <td><strong>even if</strong></td>
                <td>mesmo que / mesmo se</td>
                <td><em>"Even if she apologizes, I won't forgive her."</em></td>
                <td>Mesmo que ela se desculpe, não a perdoarei.</td>
              </tr>
              <tr>
                <td><strong>only if</strong></td>
                <td>somente se</td>
                <td><em>"I will help you only if you ask politely."</em></td>
                <td>Vou te ajudar somente se você pedir educadamente.</td>
              </tr>
              <tr>
                <td><strong>supposing (that)</strong></td>
                <td>supondo que</td>
                <td><em>"Supposing that the plan fails, what then?"</em></td>
                <td>Supondo que o plano falhe, o que faremos?</td>
              </tr>
              <tr>
                <td><strong>on condition that</strong></td>
                <td>com a condição de que</td>
                <td><em>"He agreed on condition that he received a bonus."</em></td>
                <td>Ele concordou com a condição de receber um bônus.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Unless = if... not:</strong> Cuidado ao substituir uma pela outra.
          <em>"Unless you hurry"</em> = <em>"If you don't hurry"</em>. Porém,
          <em> unless</em> não é simplesmente a negação de <em>if</em> — ele
          carrega o sentido de que a consequência só muda se a exceção ocorrer.
          Em questões de interpretação, identifique se o autor está estabelecendo
          uma exceção ou uma condição positiva.
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Registro formal</span>
        <h2>9. Condicionais Invertidas (Formal)</h2>
        <p>
          Em textos formais, literários e jornalísticos de prestígio, é possível
          omitir o <em>if</em> e inverter a ordem do sujeito e do auxiliar —
          criando as chamadas <strong>condicionais invertidas</strong> (inverted
          conditionals). Esse recurso é mais comum em inglês escrito formal e
          pode aparecer em textos de alta complexidade no ENEM.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Com "if" (padrão)</th>
                <th>Invertida (formal)</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>If you should need help...</em></td>
                <td><em>Should you need help...</em></td>
                <td>First Conditional</td>
              </tr>
              <tr>
                <td><em>If she were to resign...</em></td>
                <td><em>Were she to resign...</em></td>
                <td>Second Conditional</td>
              </tr>
              <tr>
                <td><em>If I were you...</em></td>
                <td><em>Were I you...</em></td>
                <td>Second Conditional</td>
              </tr>
              <tr>
                <td><em>If they had known...</em></td>
                <td><em>Had they known...</em></td>
                <td>Third Conditional</td>
              </tr>
              <tr>
                <td><em>If the data had been analyzed...</em></td>
                <td><em>Had the data been analyzed...</em></td>
                <td>Third Conditional (passivo)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Como identificar uma invertida:</strong> procure o auxiliar
          (<em>should, were, had</em>) imediatamente antes do sujeito, sem o
          <em> if</em>. Exemplo de texto jornalístico:
          <br /><br />
          <em>"Had the authorities responded swiftly, the damage would have been minimal."</em>
          <br />
          (Se as autoridades tivessem respondido rapidamente, o dano teria sido mínimo.)
          <br /><br />
          Nesse contexto, a inversão confere um tom mais solene e objetivo ao texto,
          muito apreciado em editoriais e artigos de opinião.
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📰</span>
            <h3>Should + sujeito</h3>
            <p>Usada para dar conselho ou indicar possibilidade formal: <em>"Should the need arise..."</em> (Caso surja a necessidade...)</p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Were + sujeito</h3>
            <p>Hipótese formal no presente: <em>"Were the policy to change..."</em> (Caso a política mudasse...)</p>
          </div>
          <div className="lesson-card">
            <span>📚</span>
            <h3>Had + sujeito</h3>
            <p>Hipótese sobre o passado: <em>"Had the research been published earlier..."</em> (Se a pesquisa tivesse sido publicada antes...)</p>
          </div>
          <div className="lesson-card">
            <span>🎓</span>
            <h3>No ENEM</h3>
            <p>Aparecem em textos acadêmicos, discursos políticos e editoriais de jornais internacionais de prestígio.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Aplicação</span>
        <h2>10. Condicionais em Textos do ENEM</h2>
        <p>
          O ENEM raramente testa condicionais de forma isolada. Eles aparecem
          integrados a textos autênticos, e a questão exige que você identifique
          o <strong>sentido que o condicional confere ao argumento</strong> do autor.
          Veja os contextos mais frequentes:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Textos científicos</h3>
            <p>Zero Conditional para leis e processos: <em>"If deforestation continues at this rate, biodiversity will collapse."</em> (First — projeção real.)</p>
          </div>
          <div className="lesson-card">
            <span>📢</span>
            <h3>Textos argumentativos</h3>
            <p>First e Second Condicionais em propostas e críticas: <em>"If we invested in public transport, traffic would decrease."</em></p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Editoriais e op-ed</h3>
            <p>Third Conditional para criticar decisões passadas: <em>"Had the government acted sooner, thousands would have survived."</em></p>
          </div>
          <div className="lesson-card">
            <span>📣</span>
            <h3>Propagandas e campanhas</h3>
            <p>First Conditional com apelo emocional: <em>"If you donate today, you will save a child's life."</em></p>
          </div>
        </div>

        <p>
          Ao interpretar uma questão do ENEM sobre condicionais, faça as seguintes
          perguntas mentalmente: <strong>(1)</strong> qual é o tempo verbal da
          <em> if-clause</em>? <strong>(2)</strong> qual é o auxiliar da
          <em> main clause</em>? <strong>(3)</strong> o autor está descrevendo
          algo certo, possível, improvável ou impossível? Essas três perguntas
          já permitem classificar o condicional e, portanto, interpretar corretamente
          o grau de comprometimento do autor com a afirmação.
        </p>

        <div className="math-block">
          <strong>Dica ENEM — Grau de certeza:</strong>
          <br /><br />
          Zero Conditional → certeza absoluta (lei, fato)
          <br />
          First Conditional → alta probabilidade (o falante acredita que pode ocorrer)
          <br />
          Second Conditional → baixa probabilidade / hipótese imaginária
          <br />
          Third Conditional → impossível (passado que não pode ser alterado)
          <br /><br />
          Uma questão pode pedir: "O que o autor sugere com a frase 'If the policy
          had been implemented earlier, millions would have benefited'?" — a resposta
          envolve reconhecer que é um Third Conditional, ou seja, o autor lamenta
          uma oportunidade perdida no passado.
        </div>
      </section>

      {/* ── SEÇÃO 11 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estudo dirigido</span>
        <h2>11. Dicas ENEM e Armadilhas Comuns</h2>
        <p>
          Conheça os erros mais frequentes que levam estudantes a marcar a
          alternativa errada nas questões de condicionais:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Will após if</h3>
            <p>
              <strong>Errado:</strong> <em>"If it will rain..."</em><br />
              <strong>Correto:</strong> <em>"If it rains..."</em><br />
              Nunca use <em>will</em> diretamente após <em>if</em> em condicionais.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Was vs. Were</h3>
            <p>
              <strong>Informal:</strong> <em>"If I was you..."</em><br />
              <strong>Formal/ENEM:</strong> <em>"If I were you..."</em><br />
              O ENEM usa o padrão formal com <em>were</em> para todos os sujeitos.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Would na if-clause</h3>
            <p>
              <strong>Errado:</strong> <em>"If I would have known..."</em><br />
              <strong>Correto:</strong> <em>"If I had known..."</em><br />
              <em>Would</em> nunca vai na <em>if-clause</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Unless + negação</h3>
            <p>
              <strong>Errado:</strong> <em>"Unless you don't study, you'll fail."</em><br />
              <strong>Correto:</strong> <em>"Unless you study, you'll fail."</em><br />
              <em>Unless</em> já tem sentido negativo — não dobre a negação.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Confundir 2nd e 3rd</h3>
            <p>
              <em>Past simple</em> → hipótese presente (2nd).
              <em> Past perfect</em> → hipótese passada (3rd).
              <em>"had studied"</em> ≠ <em>"studied"</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>💡</span>
            <h3>Contrações</h3>
            <p>
              <em>"She'd"</em> pode ser <em>she had</em> (3rd Cond.) ou <em>she would</em>.
              Verifique o verbo seguinte: <em>"she'd have gone"</em> → <em>she would have gone</em>.
            </p>
          </div>
        </div>

        <div className="math-block">
          <strong>Resumo das fórmulas — cola rápida:</strong>
          <br /><br />
          <strong>Zero:</strong> If + presente simples → presente simples
          <br />
          <strong>First:</strong> If + presente simples → will + base verb
          <br />
          <strong>Second:</strong> If + passado simples → would + base verb
          <br />
          <strong>Third:</strong> If + past perfect → would have + past participle
          <br />
          <strong>Mixed:</strong> If + past perfect → would + base verb (condição passada, resultado presente)
        </div>
      </section>

      {/* ── SEÇÃO 12 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios comentados</span>
        <h2>12. Exercícios Comentados</h2>
        <p>
          Coloque em prática o que você aprendeu. Leia cada enunciado com atenção,
          identifique o tipo de condicional e o grau de realidade antes de marcar
          sua resposta.
        </p>

        <Exercise
          level="Básico"
          title="Identificação do tipo de condicional"
          statement={
            <div>
              <p>
                Analise as frases abaixo e identifique qual delas é um exemplo
                correto de <strong>First Conditional</strong>:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "If water reaches 100°C, it boils." },
            { letter: "B", text: "If she studied more, she would pass.", },
            { letter: "C", text: "If it rains tomorrow, we will cancel the picnic.", correct: true },
            { letter: "D", text: "If he had arrived earlier, he would have seen her." },
            { letter: "E", text: "If I were a bird, I would fly around the world." },
          ]}
          resolution={
            <p>
              A alternativa C apresenta a estrutura clássica do <strong>First
              Conditional</strong>: <em>if + presente simples</em> (<em>rains</em>)
              na <em>if-clause</em> e <em>will + verbo base</em> (<em>will cancel</em>)
              na <em>main clause</em>. A situação (chuva amanhã) é real e possível.
              A alternativa A é Zero Conditional (verdade universal). B e E são
              Second Conditional (hipóteses presentes). D é Third Conditional
              (hipótese sobre o passado).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Grau de certeza e intenção do autor"
          statement={
            <div>
              <p>
                Leia o trecho abaixo, retirado de um artigo de opinião em inglês:
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "If governments around the world invested seriously in renewable
                energy, carbon emissions would drop significantly within a decade.
                The technology exists; what is lacking is political will."
              </p>
              <p>
                Com base na estrutura condicional usada, qual é a posição do autor
                em relação à possibilidade de os governos investirem em energia
                renovável?
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "O autor acredita que o investimento em energia renovável já está acontecendo de forma satisfatória." },
            { letter: "B", text: "O autor considera que o investimento em energia renovável é certo e inevitável no futuro próximo." },
            { letter: "C", text: "O autor apresenta o investimento em energia renovável como uma hipótese improvável ou ainda não concretizada, criticando a falta de vontade política.", correct: true },
            { letter: "D", text: "O autor afirma uma lei científica: sempre que governos investem em energia renovável, as emissões caem." },
            { letter: "E", text: "O autor lamenta uma oportunidade perdida no passado, quando os governos poderiam ter investido mas não investiram." },
          ]}
          resolution={
            <p>
              A estrutura <em>"If governments invested... emissions would drop"</em>
              é um <strong>Second Conditional</strong>: <em>if</em> + passado simples
              (<em>invested</em>) + <em>would</em> + base (<em>drop</em>). Isso
              indica que o autor trata o investimento como <strong>hipotético e
              improvável</strong> no momento — algo que deveria acontecer, mas não
              acontece. A frase seguinte (<em>"what is lacking is political will"</em>)
              confirma a crítica: a tecnologia existe, falta vontade política. A
              alternativa E estaria correta para um Third Conditional (hipótese
              sobre o passado), mas o texto usa passado simples na <em>if-clause</em>,
              não past perfect.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Condicional invertida em texto formal"
          statement={
            <div>
              <p>
                Leia o seguinte trecho de um editorial jornalístico:
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Had the international community intervened earlier in the conflict,
                countless civilian lives would have been spared. The failure to act
                swiftly remains a stain on global diplomacy."
              </p>
              <p>
                A expressão "Had the international community intervened earlier"
                é equivalente a qual das alternativas abaixo?
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "If the international community intervenes earlier" },
            { letter: "B", text: "If the international community will intervene earlier" },
            { letter: "C", text: "If the international community had intervened earlier", correct: true },
            { letter: "D", text: "If the international community intervened earlier" },
            { letter: "E", text: "If the international community would have intervened earlier" },
          ]}
          resolution={
            <p>
              A estrutura <em>"Had + sujeito + particípio"</em> é uma
              <strong> condicional invertida formal</strong> equivalente ao Third
              Conditional com <em>if</em>. Portanto, <em>"Had the international
              community intervened"</em> = <em>"If the international community
              had intervened"</em> — alternativa C. A inversão é obtida ao omitir
              o <em>if</em> e mover o auxiliar <em>had</em> para antes do sujeito.
              O resultado (<em>"lives would have been spared"</em>) confirma ser
              um Third Conditional: hipótese impossível sobre o passado, indicando
              arrependimento e crítica à inação da comunidade internacional.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Condicional em texto de divulgação científica"
          statement={
            <div>
              <p>
                <em>(Questão baseada em texto de divulgação científica, estilo ENEM)</em>
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Coral reefs are among the most biodiverse ecosystems on the planet.
                Scientists warn that if ocean temperatures rise by just 2°C above
                pre-industrial levels, coral bleaching events will become annual
                occurrences, destroying the reefs entirely within decades.
                However, if global emissions were reduced drastically today, coral
                ecosystems would have a chance to recover."
              </p>
              <p>
                O texto utiliza dois tipos diferentes de condicional. Qual alternativa
                descreve corretamente os dois condicionais e seus significados
                no contexto do texto?
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Ambos são First Conditional, indicando que tanto o aumento de temperatura quanto a redução de emissões são igualmente prováveis." },
            { letter: "B", text: "O primeiro é Third Conditional (hipótese sobre o passado) e o segundo é Zero Conditional (verdade universal)." },
            { letter: "C", text: "O primeiro é First Conditional (projeção real sobre o futuro) e o segundo é Second Conditional (hipótese improvável no presente), indicando que o aquecimento é uma ameaça concreta enquanto a redução drástica de emissões é tratada como improvável.", correct: true },
            { letter: "D", text: "O primeiro é Zero Conditional (lei científica) e o segundo é First Conditional (possibilidade futura)." },
            { letter: "E", text: "Ambos são Second Conditional, indicando que os cientistas consideram ambos os cenários igualmente improváveis." },
          ]}
          resolution={
            <p>
              O primeiro condicional — <em>"if ocean temperatures rise... bleaching
              events will become"</em> — usa <em>presente simples + will</em>:
              é um <strong>First Conditional</strong>, indicando que o aquecimento
              é uma ameaça real e concreta segundo os cientistas. O segundo —
              <em>"if global emissions were reduced... ecosystems would have a
              chance"</em> — usa <em>passado simples + would</em>: é um
              <strong>Second Conditional</strong>, indicando que a redução drástica
              de emissões é tratada como improvável ou hipotética. Esse contraste
              é deliberado: o texto reforça a urgência da ameaça (First) e, ao
              mesmo tempo, sinaliza ceticismo em relação à ação política necessária
              (Second). A leitura desse contraste é exatamente o tipo de habilidade
              de inferência avaliada pelo ENEM.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Alternativas ao if em texto argumentativo"
          statement={
            <div>
              <p>
                <em>(Questão baseada em texto argumentativo, estilo ENEM)</em>
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Access to quality education should be guaranteed to every citizen,
                regardless of social background. Unless governments prioritize
                investment in public schools, the cycle of poverty will remain
                unbroken. Provided that teachers are adequately trained and
                compensated, educational outcomes will improve across all income
                levels. Even if wealthier families opt for private institutions,
                the quality of public education directly impacts social mobility
                for the majority."
              </p>
              <p>
                Com base nas expressões condicionais usadas no texto, qual
                alternativa resume corretamente a argumentação do autor?
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "O autor acredita que a melhoria educacional já está ocorrendo e usa condicionais para celebrar os avanços recentes." },
            { letter: "B", text: "O autor usa condicionais para descrever leis científicas imutáveis sobre a relação entre educação e pobreza." },
            { letter: "C", text: "O autor estabelece condições necessárias para quebrar o ciclo da pobreza — investimento público e valorização docente — e reconhece que a qualidade da educação pública afeta toda a sociedade, independentemente das escolhas das famílias mais ricas.", correct: true },
            { letter: "D", text: "O autor argumenta que apenas famílias ricas se beneficiam de boas políticas educacionais, pois escolhem escolas privadas." },
            { letter: "E", text: "O autor considera que a melhoria educacional é impossível e usa o Third Conditional para expressar arrependimento pelas oportunidades perdidas." },
          ]}
          resolution={
            <p>
              O texto emprega três expressões condicionais com sentidos distintos:
              <strong> unless</strong> (<em>"Unless governments prioritize..."</em>)
              indica que o investimento público é condição necessária para quebrar
              o ciclo da pobreza — caso contrário, o ciclo permanece.
              <strong> Provided that</strong> (<em>"Provided that teachers are
              trained..."</em>) estabelece a condição para melhoria dos resultados
              educacionais. <strong>Even if</strong> (<em>"Even if wealthier
              families..."</em>) concede que mesmo famílias ricas optando pelo
              setor privado, a qualidade pública ainda impacta a mobilidade social
              geral. O autor não celebra conquistas (A), não descreve leis
              científicas (B), não culpa as famílias ricas (D) nem usa Third
              Conditional (E). A alternativa C captura corretamente a lógica
              argumentativa: condições necessárias para mudança social + impacto
              universal da educação pública.
            </p>
          }
        />
      </section>
    </article>
  );
}
