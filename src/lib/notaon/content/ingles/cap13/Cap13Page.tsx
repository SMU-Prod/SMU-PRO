"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap13Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 13</span>
          <h1>Modal Verbs: Can, Could, May, Might, Must, Should, Would</h1>
          <p>
            Os verbos modais são ferramentas de <strong>nuance</strong>: expressam
            graus de certeza, possibilidade, obrigação, permissão e conselho.
            No ENEM, aparecem especialmente em textos jornalísticos, científicos
            e argumentativos, onde o autor usa modais para marcar seu
            posicionamento e o grau de certeza das afirmações.
          </p>
          <p>
            Neste capítulo você vai aprender a estrutura invariável dos modais,
            os significados de cada um em diferentes contextos, como distingui-los
            ao ler um texto e como o ENEM usa essa distinção para testar
            interpretação crítica.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura</span>
        <h2>1. Como os Verbos Modais Funcionam</h2>
        <p>
          Diferentemente dos verbos comuns, os modais seguem regras fixas que
          tornam sua identificação no texto muito simples:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🚫</span>
            <h3>Sem -s na 3ª pessoa</h3>
            <p>"She <strong>can</strong> help" (nunca "she cans"). Os modais não flexionam.</p>
          </div>
          <div className="lesson-card">
            <span>➕</span>
            <h3>Modal + base verb</h3>
            <p>Sempre seguidos pelo infinitivo sem "to": "you <strong>must go</strong>" (nunca "must to go").</p>
          </div>
          <div className="lesson-card">
            <span>❌</span>
            <h3>Negativa direta</h3>
            <p>Acrescenta-se "not" após o modal: can<strong>not</strong>, should<strong>n't</strong>.</p>
          </div>
          <div className="lesson-card">
            <span>❓</span>
            <h3>Pergunta por inversão</h3>
            <p>O modal vai para antes do sujeito: "<strong>Can</strong> she drive?" — sem auxiliar.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Regra de ouro:</strong> Se você vê "modal + verbo no infinitivo"
          (sem -s, sem to, sem -ing, sem -ed), está diante de um modal verb.
          Identifique qual é para entender o grau de certeza ou obrigação
          expresso pelo autor.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">CAN e COULD</span>
        <h2>2. Can e Could — Capacidade, Permissão e Possibilidade</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Modal</th>
                <th>Significado</th>
                <th>Exemplo em texto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>can</em></td>
                <td>Capacidade presente</td>
                <td>"The software <em>can</em> process 10,000 requests per second."</td>
              </tr>
              <tr>
                <td><em>can</em></td>
                <td>Permissão informal</td>
                <td>"Students <em>can</em> access the library until 10 p.m."</td>
              </tr>
              <tr>
                <td><em>cannot / can't</em></td>
                <td>Impossibilidade / proibição</td>
                <td>"This theory <em>cannot</em> be proven with current data."</td>
              </tr>
              <tr>
                <td><em>could</em></td>
                <td>Capacidade no passado</td>
                <td>"In the 1990s, few people <em>could</em> afford a smartphone."</td>
              </tr>
              <tr>
                <td><em>could</em></td>
                <td>Possibilidade presente (incerta)</td>
                <td>"The new vaccine <em>could</em> save millions of lives."</td>
              </tr>
              <tr>
                <td><em>could</em></td>
                <td>Pedido formal/educado</td>
                <td>"<em>Could</em> you elaborate on that point?"</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Em textos científicos, <em>could</em> expressa
          possibilidade com grau de incerteza. Quando o autor diz "this method
          <em> could</em> reduce costs", ele não afirma que vai reduzir — apenas
          que é uma possibilidade. Questões de posicionamento do autor exploram
          exatamente esse grau de certeza.
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">MAY e MIGHT</span>
        <h2>3. May e Might — Possibilidade e Permissão Formal</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Modal</th>
                <th>Significado</th>
                <th>Nível de certeza</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>may</em></td>
                <td>Possibilidade presente/futura</td>
                <td>~50%</td>
                <td>"Temperatures <em>may</em> reach 45°C this summer."</td>
              </tr>
              <tr>
                <td><em>may</em></td>
                <td>Permissão formal</td>
                <td>—</td>
                <td>"Participants <em>may</em> submit their work by Friday."</td>
              </tr>
              <tr>
                <td><em>might</em></td>
                <td>Possibilidade mais remota</td>
                <td>~30%</td>
                <td>"The project <em>might</em> be delayed due to funding issues."</td>
              </tr>
              <tr>
                <td><em>may not</em></td>
                <td>Pode não / talvez não</td>
                <td>~50%</td>
                <td>"The results <em>may not</em> be conclusive."</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Em textos de divulgação científica e jornalísticos, <em>may</em> e
          <em> might</em> são usados como <strong>hedges</strong> (marcadores de
          cautela): o autor evita afirmações absolutas quando os dados não são
          definitivos. O ENEM cobra a percepção dessa cautela.
        </p>
      </section>

      {/* ── SEÇÃO 4 — SVG ── */}
      <section className="lesson-section">
        <span className="section-kicker">Escala de certeza</span>
        <h2>4. O Termômetro de Certeza dos Modais</h2>
        <p>
          Os modais podem ser organizados em uma escala de certeza/obrigação.
          Visualizar essa escala é fundamental para interpretar o tom de um texto:
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" aria-label="Escala de certeza dos verbos modais" role="img">
            {/* Barra de certeza */}
            <defs>
              <linearGradient id="certezaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fee2e2" />
                <stop offset="50%" stopColor="#fef9c3" />
                <stop offset="100%" stopColor="#d1fae5" />
              </linearGradient>
            </defs>
            <rect x="40" y="80" width="620" height="40" rx="20" fill="url(#certezaGrad)" stroke="#d1d5db" strokeWidth="1" />
            <text x="40" y="145" fill="#dc2626" fontSize="11" fontWeight="bold">Incerto</text>
            <text x="590" y="145" fill="#059669" fontSize="11" fontWeight="bold">Certo/Forte</text>

            {/* Modais na escala */}
            <line x1="100" y1="78" x2="100" y2="60" stroke="#6b7280" strokeWidth="1.5" />
            <text x="100" y="55" textAnchor="middle" fill="#374151" fontSize="11" fontWeight="bold">might</text>
            <text x="100" y="167" textAnchor="middle" fill="#6b7280" fontSize="10">~30%</text>

            <line x1="210" y1="78" x2="210" y2="60" stroke="#6b7280" strokeWidth="1.5" />
            <text x="210" y="55" textAnchor="middle" fill="#374151" fontSize="11" fontWeight="bold">may / could</text>
            <text x="210" y="167" textAnchor="middle" fill="#6b7280" fontSize="10">~50%</text>

            <line x1="350" y1="78" x2="350" y2="60" stroke="#6b7280" strokeWidth="1.5" />
            <text x="350" y="55" textAnchor="middle" fill="#374151" fontSize="11" fontWeight="bold">should</text>
            <text x="350" y="167" textAnchor="middle" fill="#6b7280" fontSize="10">~70%</text>

            <line x1="480" y1="78" x2="480" y2="60" stroke="#6b7280" strokeWidth="1.5" />
            <text x="480" y="55" textAnchor="middle" fill="#374151" fontSize="11" fontWeight="bold">will</text>
            <text x="480" y="167" textAnchor="middle" fill="#6b7280" fontSize="10">~90%</text>

            <line x1="590" y1="78" x2="590" y2="60" stroke="#6b7280" strokeWidth="1.5" />
            <text x="590" y="55" textAnchor="middle" fill="#374151" fontSize="11" fontWeight="bold">must</text>
            <text x="590" y="167" textAnchor="middle" fill="#6b7280" fontSize="10">~99%</text>

            <text x="350" y="20" textAnchor="middle" fill="#111827" fontSize="13" fontWeight="bold">Escala de Certeza / Força dos Modais</text>
          </svg>
          <figcaption>
            Quanto mais à direita na escala, maior o grau de certeza ou obrigação
            expresso pelo modal. O ENEM cobra a distinção entre modais de baixa
            certeza (might, may) e alta certeza (must, will).
          </figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">MUST e HAVE TO</span>
        <h2>5. Must e Have to — Obrigação e Dedução</h2>
        <p>
          <em>Must</em> tem dois usos distintos que mudam completamente o sentido:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Uso</th>
                <th>Estrutura</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Obrigação (imposta pelo falante)</td>
                <td>must + base verb</td>
                <td>"You <em>must</em> wear a seatbelt." (regra, imposição)</td>
              </tr>
              <tr>
                <td>Dedução / certeza lógica</td>
                <td>must + base verb</td>
                <td>"She passed every test — she <em>must</em> be brilliant." (conclusão)</td>
              </tr>
              <tr>
                <td>Negativa de obrigação</td>
                <td>mustn't + base verb</td>
                <td>"You <em>mustn't</em> smoke here." (proibição)</td>
              </tr>
              <tr>
                <td>Ausência de obrigação</td>
                <td>don't have to + base verb</td>
                <td>"You <em>don't have to</em> come." (livre escolha, não é proibição!)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção crítica:</strong> <em>mustn't</em> (proibido) ≠
          <em> don't have to</em> (não é obrigatório). Essa distinção é
          frequentemente cobrada indiretamente no ENEM ao perguntar sobre
          regras ou normas descritas em textos.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">SHOULD e WOULD</span>
        <h2>6. Should e Would — Conselho e Condicional</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Modal</th>
                <th>Uso principal</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>should</em></td>
                <td>Conselho / recomendação</td>
                <td>"Governments <em>should</em> invest more in renewable energy."</td>
              </tr>
              <tr>
                <td><em>should</em></td>
                <td>Expectativa / probabilidade</td>
                <td>"The package <em>should</em> arrive by Monday."</td>
              </tr>
              <tr>
                <td><em>shouldn't</em></td>
                <td>Conselho negativo</td>
                <td>"Companies <em>shouldn't</em> ignore environmental regulations."</td>
              </tr>
              <tr>
                <td><em>would</em></td>
                <td>Condicional (com if)</td>
                <td>"If we acted now, we <em>would</em> reduce the damage significantly."</td>
              </tr>
              <tr>
                <td><em>would</em></td>
                <td>Pedido formal / educado</td>
                <td>"<em>Would</em> you mind sharing the data?"</td>
              </tr>
              <tr>
                <td><em>would</em></td>
                <td>Hábito no passado</td>
                <td>"As a child, she <em>would</em> spend hours reading."</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Em textos de opinião e editoriais, <em>should</em>
          marca claramente a posição do autor — uma recomendação ou crítica. Quando
          o ENEM pergunta "qual é a posição do autor?", busque o <em>should</em>
          para encontrar a resposta.
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Negativas</span>
        <h2>7. As Negativas dos Modais — Sentidos que Mudam Tudo</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Negativa</th>
                <th>Sentido</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>can't / cannot</em></td>
                <td>Impossibilidade ou certeza negativa</td>
                <td>"That <em>can't</em> be right — the numbers don't add up."</td>
              </tr>
              <tr>
                <td><em>couldn't</em></td>
                <td>Incapacidade no passado / impossibilidade</td>
                <td>"Scientists <em>couldn't</em> explain the phenomenon at the time."</td>
              </tr>
              <tr>
                <td><em>may not</em></td>
                <td>Possibilidade negativa (talvez não)</td>
                <td>"The treatment <em>may not</em> work for all patients."</td>
              </tr>
              <tr>
                <td><em>might not</em></td>
                <td>Possibilidade remota negativa</td>
                <td>"The policy <em>might not</em> have the desired effect."</td>
              </tr>
              <tr>
                <td><em>mustn't</em></td>
                <td>Proibição forte</td>
                <td>"Users <em>mustn't</em> share their passwords."</td>
              </tr>
              <tr>
                <td><em>don't/doesn't have to</em></td>
                <td>Sem obrigação (não é proibido)</td>
                <td>"You <em>don't have to</em> register to read the article."</td>
              </tr>
              <tr>
                <td><em>shouldn't</em></td>
                <td>Conselho negativo / expectativa frustrada</td>
                <td>"This <em>shouldn't</em> take more than two hours."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Hedging científico</span>
        <h2>8. Modais em Textos Científicos e Jornalísticos</h2>
        <p>
          Em ciência, afirmações absolutas são raras. Autores usam modais
          para <strong>graduar sua certeza</strong> — técnica chamada de
          <em> hedging</em>. Reconhecer o hedging é fundamental para entender
          o que o autor realmente afirma.
        </p>
        <ul>
          <li>
            <strong>"The drug <em>may</em> reduce inflammation"</strong> → Possibilidade,
            não certeza. A pesquisa ainda não provou.
          </li>
          <li>
            <strong>"The drug <em>will</em> reduce inflammation"</strong> → Afirmação
            forte, quase certeza. Evidências sólidas.
          </li>
          <li>
            <strong>"The drug <em>must</em> be tested further"</strong> → Obrigação
            ou dedução — mais testes são necessários antes de qualquer conclusão.
          </li>
          <li>
            <strong>"The drug <em>could</em> have side effects"</strong> → Possibilidade
            mais remota, pedindo cautela ao leitor.
          </li>
        </ul>
        <div className="lesson-highlight">
          <strong>Estratégia de leitura:</strong> Sempre que o ENEM perguntar sobre
          a posição do autor, grau de certeza de uma afirmação ou tom do texto,
          identifique quais modais são usados e em que posição da escala de
          certeza eles se encontram.
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Identificação de modal"
          statement={
            <p>
              Na frase: <em>"Students <strong>must</strong> submit their assignments
              by the deadline, or they <strong>won't</strong> be considered for
              evaluation."</em> — o modal <strong>must</strong> expressa:
            </p>
          }
          options={[
            { letter: "A", text: "Uma possibilidade remota para os estudantes." },
            { letter: "B", text: "Um conselho que os estudantes podem ou não seguir." },
            { letter: "C", text: "Uma obrigação imposta por quem emitiu a instrução.", correct: true },
            { letter: "D", text: "Uma certeza lógica baseada em evidências." },
            { letter: "E", text: "Uma permissão formal concedida aos estudantes." },
          ]}
          resolution={
            <p>
              Neste contexto, <em>must submit</em> é uma <strong>obrigação</strong>
              imposta por uma regra externa (o prazo, a instituição). A consequência
              descrita ("won't be considered") confirma que é uma exigência, não
              uma sugestão. A alternativa C é a correta. A alternativa D seria
              o uso de <em>must</em> como dedução lógica ("she must be tired"),
              não o caso aqui.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Grau de certeza"
          statement={
            <div>
              <p>Leia os dois excertos de textos científicos:</p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                I — "The new compound <strong>will</strong> eliminate the bacteria in
                less than 24 hours, according to laboratory results."
                <br /><br />
                II — "The new compound <strong>might</strong> be effective against
                the bacteria, but further clinical trials are needed."
              </p>
              <p>A diferença de tom entre os dois textos é:</p>
            </div>
          }
          options={[
            { letter: "A", text: "Ambos expressam certeza absoluta sobre o composto." },
            { letter: "B", text: "O texto I expressa certeza baseada em resultados; o texto II expressa possibilidade condicionada a mais pesquisas.", correct: true },
            { letter: "C", text: "O texto I é mais cauteloso; o texto II é mais assertivo." },
            { letter: "D", text: "Não há diferença de sentido entre will e might nesse contexto." },
            { letter: "E", text: "O texto II afirma que o composto não é eficaz." },
          ]}
          resolution={
            <p>
              <em>Will</em> indica alta certeza — baseada em resultados de laboratório,
              o autor afirma com confiança. <em>Might</em> indica baixa certeza
              (~30%) e é reforçado por "further trials are needed", confirmando
              que é hipótese, não conclusão. Essa distinção — <em>will</em> vs.
              <em> might</em> — é exatamente o que o ENEM cobra em questões sobre
              o posicionamento e tom do autor.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Mustn't vs. Don't have to"
          statement={
            <div>
              <p><em>(Trecho de regulamento)</em></p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Visitors <strong>must not</strong> take photographs inside the
                gallery. However, you <strong>don't have to</strong> leave your
                phone at the entrance — just keep it in your pocket while inside."
              </p>
              <p>Com base no regulamento, é correto afirmar que:</p>
            </div>
          }
          options={[
            { letter: "A", text: "Fotografar e usar o celular são igualmente proibidos na galeria." },
            { letter: "B", text: "Visitantes são obrigados a deixar o celular na entrada." },
            { letter: "C", text: "Fotografar é proibido, mas guardar o celular no bolso é permitido e não obrigatório.", correct: true },
            { letter: "D", text: "Não há restrições ao uso de celulares na galeria." },
            { letter: "E", text: "Visitantes não podem entrar com celulares nem com câmeras." },
          ]}
          resolution={
            <p>
              <em>Must not</em> = proibição (<strong>fotografar é proibido</strong>).
              <em>Don't have to</em> = ausência de obrigação (<strong>deixar o celular
              na entrada não é exigido</strong> — mas também não é proibido tê-lo,
              desde que no bolso). A alternativa C distingue corretamente os dois
              modais. Esta é uma das confusões mais cobradas em questões de inglês
              do ENEM.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Should em texto de opinião"
          statement={
            <div>
              <p><em>(Trecho adaptado de editorial jornalístico)</em></p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Technology companies <strong>should</strong> be held accountable
                for the content spread on their platforms. Governments <strong>must</strong>
                enact clear regulations, and users <strong>should</strong> critically
                evaluate the information they consume."
              </p>
              <p>O uso repetido de <strong>should</strong> no texto indica que o autor:</p>
            </div>
          }
          options={[
            { letter: "A", text: "Descreve fatos já estabelecidos sobre a responsabilidade das empresas." },
            { letter: "B", text: "Expressa dúvida sobre se regulações são necessárias." },
            { letter: "C", text: "Faz recomendações e defende posições sobre como diferentes atores devem agir.", correct: true },
            { letter: "D", text: "Relata uma situação hipotética usando o condicional." },
            { letter: "E", text: "Descreve obrigações legais já vigentes." },
          ]}
          resolution={
            <p>
              <em>Should</em> é o modal de conselho e recomendação. Usado
              repetidamente, sinaliza que o texto é <strong>argumentativo/opinativo</strong>
              — o autor defende o que cada grupo <em>deveria</em> fazer.
              <em>Must</em>, intercalado, reforça a urgência de uma das medidas.
              Questões sobre a intenção do autor em textos editoriais frequentemente
              exploram exatamente esse padrão de uso do <em>should</em>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Hedging científico com may/might"
          statement={
            <div>
              <p><em>(Trecho adaptado de artigo de divulgação científica)</em></p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "A recent study suggests that regular consumption of certain
                plant-based proteins <strong>may</strong> reduce the risk of
                cardiovascular disease. Researchers caution, however, that the
                results <strong>might not</strong> apply to all age groups, and
                that further large-scale studies are still needed."
              </p>
              <p>O emprego de <strong>may</strong> e <strong>might not</strong> nesse texto científico indica:</p>
            </div>
          }
          options={[
            { letter: "A", text: "Os pesquisadores estão seguros de que a proteína vegetal elimina doenças cardiovasculares." },
            { letter: "B", text: "O estudo foi refutado por outros pesquisadores." },
            { letter: "C", text: "Os resultados apresentam possibilidades, mas não são conclusivos e podem ter limitações de aplicação.", correct: true },
            { letter: "D", text: "Nenhuma pesquisa foi realizada; o texto é especulação pura." },
            { letter: "E", text: "O uso de proteínas vegetais é definitivamente prejudicial a alguns grupos." },
          ]}
          resolution={
            <p>
              <em>May reduce</em> expressa possibilidade (~50%) — não certeza.
              <em>Might not apply</em> adiciona uma limitação ainda mais cautelosa.
              Juntos, os dois modais criam o <strong>hedging científico</strong>
              típico: o estudo encontrou indícios, mas os pesquisadores evitam
              afirmações absolutas porque as evidências ainda são preliminares.
              A alternativa C captura exatamente essa postura de cautela científica.
            </p>
          }
        />
      </section>
    </article>
  );
}
