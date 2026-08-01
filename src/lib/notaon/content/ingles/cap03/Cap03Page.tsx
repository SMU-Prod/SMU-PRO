"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap03Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 03</span>
          <h1>Palavras cognatas, falsos cognatos e estratégias de vocabulário</h1>
          <p>
            O português e o inglês compartilham milhares de palavras com origem
            comum — os <strong>cognatos</strong> — que funcionam como um atalho
            poderoso de vocabulário. Mas existem as temidas "armadilhas":
            palavras que parecem iguais, mas têm significados completamente
            diferentes, os <strong>falsos cognatos</strong> (também chamados de{" "}
            <em>false friends</em>).
          </p>
          <p>
            Neste capítulo você vai aprender a usar os cognatos como aliados,
            evitar os erros clássicos dos falsos cognatos e descobrir estratégias
            eficientes para ampliar seu vocabulário em inglês de forma inteligente
            e direcionada ao ENEM.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Aliados do vocabulário</span>
        <h2>1. O que são Cognatos?</h2>
        <p>
          <strong>Cognatos</strong> (do latim <em>cognatus</em> = aparentado)
          são palavras de idiomas diferentes que têm a mesma origem etimológica
          e apresentam forma e sentido semelhantes. Entre português e inglês,
          há milhares de cognatos, especialmente em áreas como ciência, medicina,
          tecnologia, política e arte.
        </p>
        <p>
          Isso ocorre porque ambas as línguas herdaram muito vocabulário do
          latim, grego e francês normando. Na prática, isso significa que um
          falante de português já conhece indiretamente uma quantidade
          enorme de palavras em inglês.
        </p>
        <div className="lesson-highlight">
          <strong>Potencial enorme:</strong> Estima-se que entre 30% e 40% das
          palavras mais comuns em textos acadêmicos e jornalísticos em inglês
          são cognatos do português. Isso representa uma vantagem enorme para
          o estudante brasileiro — especialmente nos textos do ENEM.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tipos de cognatos</span>
        <h2>2. Cognatos Perfeitos e Cognatos Parciais</h2>
        <p>
          Nem todos os cognatos são idênticos. Existem dois tipos principais:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Definição</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cognatos perfeitos</strong></td>
                <td>Graficamente idênticos ou quase idênticos, mesmo significado</td>
                <td>
                  <em>animal</em> = animal; <em>capital</em> = capital;{" "}
                  <em>natural</em> = natural; <em>hospital</em> = hospital;{" "}
                  <em>idea</em> = ideia
                </td>
              </tr>
              <tr>
                <td><strong>Cognatos parciais</strong></td>
                <td>Graficamente similares (pequenas diferenças), mesmo significado</td>
                <td>
                  <em>technology</em> = tecnologia; <em>economy</em> = economia;{" "}
                  <em>democracy</em> = democracia; <em>philosophy</em> = filosofia;{" "}
                  <em>geography</em> = geografia
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Área científica</h3>
            <p><em>biology, chemistry, physics, astronomy, medicine, vaccine, virus, bacteria, gene, cell</em></p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Área política/social</h3>
            <p><em>democracy, constitution, revolution, president, congress, election, corruption, justice</em></p>
          </div>
          <div className="lesson-card">
            <span>💻</span>
            <h3>Tecnologia</h3>
            <p><em>internet, digital, artificial, algorithm, interface, innovation, smartphone, platform</em></p>
          </div>
          <div className="lesson-card">
            <span>🎨</span>
            <h3>Arte e cultura</h3>
            <p><em>music, art, theater, literature, culture, festival, museum, poetry, cinema</em></p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 3 (SVG 1) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Padrões de transformação</span>
        <h2>3. Padrões de Transformação: como reconhecer cognatos parciais</h2>
        <p>
          Os cognatos parciais seguem padrões previsíveis de transformação
          entre português e inglês. Conhecer esses padrões permite "adivinhar"
          palavras em inglês partindo do português:
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 270"
            aria-label="Tabela visual com padrões de transformação entre português e inglês para cognatos parciais"
            role="img"
          >
            {/* Cabeçalho */}
            <rect x="10" y="10" width="680" height="36" rx="6" fill="#4f46e5" />
            <text x="180" y="33" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Padrão Português</text>
            <text x="420" y="33" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Padrão Inglês</text>
            <text x="610" y="33" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Exemplo</text>
            <line x1="340" y1="10" x2="340" y2="270" stroke="#e0e7ff" strokeWidth="1" />
            <line x1="520" y1="10" x2="520" y2="270" stroke="#e0e7ff" strokeWidth="1" />

            {/* Linhas de dados */}
            {[
              ["-ção", "-tion", "nação → nation"],
              ["-dade", "-ty", "liberdade → liberty"],
              ["-ismo", "-ism", "jornalismo → journalism"],
              ["-ista", "-ist", "artista → artist"],
              ["-ia", "-y", "democracia → democracy"],
              ["-ência", "-ence", "violência → violence"],
              ["-oso", "-ous", "famoso → famous"],
            ].map(([pt, en, ex], i) => (
              <g key={i}>
                <rect x="10" y={46 + i * 32} width="680" height="32" fill={i % 2 === 0 ? "#f0f4ff" : "#ffffff"} />
                <text x="180" y={67 + i * 32} textAnchor="middle" fill="#1e1b4b" fontSize="13" fontWeight="bold">{pt}</text>
                <text x="420" y={67 + i * 32} textAnchor="middle" fill="#065f46" fontSize="13" fontWeight="bold">{en}</text>
                <text x="610" y={67 + i * 32} textAnchor="middle" fill="#374151" fontSize="12" fontStyle="italic">{ex}</text>
              </g>
            ))}
            <rect x="10" y="10" width="680" height="260" rx="6" fill="none" stroke="#c7d2fe" strokeWidth="1.5" />
          </svg>
          <figcaption>Padrões de transformação mais comuns entre o português e o inglês. Dominar esses padrões permite reconhecer centenas de palavras sem memorizá-las individualmente.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sufixo em português</th>
                <th>Sufixo em inglês</th>
                <th>Mais exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-ção</td>
                <td>-tion / -sion</td>
                <td>educação/education, situação/situation, decisão/decision</td>
              </tr>
              <tr>
                <td>-dade / -tade</td>
                <td>-ty</td>
                <td>cidade/city, identidade/identity, atividade/activity</td>
              </tr>
              <tr>
                <td>-mente</td>
                <td>-ly</td>
                <td>rapidamente/rapidly, claramente/clearly, finalmente/finally</td>
              </tr>
              <tr>
                <td>-ismo</td>
                <td>-ism</td>
                <td>capitalismo/capitalism, racismo/racism, feminismo/feminism</td>
              </tr>
              <tr>
                <td>-oso/-osa</td>
                <td>-ous</td>
                <td>perigoso/dangerous, nervoso/nervous, famoso/famous</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Armadilhas</span>
        <h2>4. Falsos Cognatos: os "false friends"</h2>
        <p>
          <strong>Falsos cognatos</strong> (ou <em>false friends</em>) são palavras
          que se parecem com palavras do português, mas têm significado
          completamente diferente. São verdadeiras armadilhas que podem levar o
          estudante a marcar a alternativa errada com total convicção.
        </p>
        <p>
          A regra de ouro para evitar falsos cognatos é: <strong>sempre confirme
          o sentido pelo contexto</strong>. Se a tradução "óbvia" não fizer sentido
          na frase, desconfie — pode ser um false friend.
        </p>
        <div className="lesson-highlight">
          <strong>Exemplo clássico:</strong> Imagine a frase{" "}
          <em>"I am very <strong>sensible</strong>."</em> Quem traduz
          "sensible" como "sensível" (emotional) estaria errado. Em inglês,
          <em> sensible</em> significa <strong>sensato, razoável</strong>.
          "Sensível" em inglês é <em>sensitive</em>.
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Lista completa</span>
        <h2>5. Os 30 Principais Falsos Cognatos do ENEM</h2>
        <p>
          Memorize esta lista — ela cobre os falsos cognatos que mais aparecem
          em textos de nível ENEM:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Palavra em inglês</th>
                <th>Significado ERRADO (armadilha)</th>
                <th>Significado CORRETO</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "actually", "atualmente", "na verdade, de fato"],
                ["2", "library", "livraria", "biblioteca"],
                ["3", "embarrassed", "embaraçado (situação física)", "com vergonha, envergonhado"],
                ["4", "sensible", "sensível (emotivo)", "sensato, razoável"],
                ["5", "sensitive", "sensato", "sensível, emotivo"],
                ["6", "fabric", "fábrica", "tecido, malha"],
                ["7", "push", "puxar", "empurrar"],
                ["8", "pull", "empurrar", "puxar"],
                ["9", "pretend", "pretender", "fingir, simular"],
                ["10", "college", "colégio (ensino médio)", "faculdade, universidade"],
                ["11", "novel", "novela (TV)", "romance literário"],
                ["12", "journal", "jornal (diário)", "periódico, revista acadêmica"],
                ["13", "parents", "parentes", "pais (pai e mãe)"],
                ["14", "relatives", "relativos", "parentes, familiares"],
                ["15", "exquisite", "esquisito", "requintado, primoroso"],
                ["16", "eventually", "eventualmente (às vezes)", "no final, por fim, afinal"],
                ["17", "comprehensive", "compreensivo (tolerante)", "abrangente, completo"],
                ["18", "prejudice", "prejuízo (financeiro)", "preconceito"],
                ["19", "assist", "asistir (TV)", "ajudar, auxiliar"],
                ["20", "lecture", "leitura", "aula, palestra, conferência"],
                ["21", "polite", "político", "educado, cortês"],
                ["22", "stranger", "estranho (adjective)", "desconhecido, estrangeiro"],
                ["23", "record", "recorde (esportivo só)", "registro, gravação, recorde"],
                ["24", "realize", "realizar (evento)", "perceber, dar-se conta"],
                ["25", "argument", "argumentos (positive)", "discussão, briga, argumento"],
                ["26", "commodity", "comodidade", "mercadoria, produto básico"],
                ["27", "hazard", "azar", "perigo, risco"],
                ["28", "mayor", "maior", "prefeito"],
                ["29", "intoxicated", "intoxicado (veneno)", "embriagado, bêbado"],
                ["30", "graduate", "graduado (formado apenas)", "pós-graduando / se formar"],
              ].map(([n, en, wrong, right]) => (
                <tr key={n}>
                  <td>{n}</td>
                  <td><strong>{en}</strong></td>
                  <td style={{ color: "#dc2626" }}>✗ {wrong}</td>
                  <td style={{ color: "#059669" }}>✓ {right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 (SVG 2) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>6. Os Falsos Cognatos Mais Perigosos em Contexto</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 250"
            aria-label="Diagrama comparando os falsos cognatos mais comuns com seu significado correto e incorreto"
            role="img"
          >
            {/* Título */}
            <rect x="200" y="10" width="300" height="30" rx="6" fill="#dc2626" />
            <text x="350" y="30" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">⚠ FALSE FRIENDS PERIGOSOS</text>

            {/* actually */}
            <rect x="20" y="55" width="200" height="80" rx="8" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
            <text x="120" y="75" textAnchor="middle" fill="#dc2626" fontSize="14" fontWeight="bold">actually</text>
            <text x="120" y="95" textAnchor="middle" fill="#991b1b" fontSize="11">✗ "atualmente"</text>
            <text x="120" y="115" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">✓ "na verdade"</text>
            <text x="120" y="132" textAnchor="middle" fill="#374151" fontSize="10" fontStyle="italic">in fact / de fato</text>

            {/* library */}
            <rect x="250" y="55" width="200" height="80" rx="8" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
            <text x="350" y="75" textAnchor="middle" fill="#dc2626" fontSize="14" fontWeight="bold">library</text>
            <text x="350" y="95" textAnchor="middle" fill="#991b1b" fontSize="11">✗ "livraria"</text>
            <text x="350" y="115" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">✓ "biblioteca"</text>
            <text x="350" y="132" textAnchor="middle" fill="#374151" fontSize="10" fontStyle="italic">bookstore = livraria</text>

            {/* pretend */}
            <rect x="480" y="55" width="200" height="80" rx="8" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
            <text x="580" y="75" textAnchor="middle" fill="#dc2626" fontSize="14" fontWeight="bold">pretend</text>
            <text x="580" y="95" textAnchor="middle" fill="#991b1b" fontSize="11">✗ "pretender"</text>
            <text x="580" y="115" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">✓ "fingir"</text>
            <text x="580" y="132" textAnchor="middle" fill="#374151" fontSize="10" fontStyle="italic">intend = pretender</text>

            {/* parents */}
            <rect x="20" y="155" width="200" height="80" rx="8" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
            <text x="120" y="175" textAnchor="middle" fill="#dc2626" fontSize="14" fontWeight="bold">parents</text>
            <text x="120" y="195" textAnchor="middle" fill="#991b1b" fontSize="11">✗ "parentes"</text>
            <text x="120" y="215" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">✓ "pais (pai e mãe)"</text>
            <text x="120" y="232" textAnchor="middle" fill="#374151" fontSize="10" fontStyle="italic">relatives = parentes</text>

            {/* eventually */}
            <rect x="250" y="155" width="200" height="80" rx="8" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
            <text x="350" y="175" textAnchor="middle" fill="#dc2626" fontSize="14" fontWeight="bold">eventually</text>
            <text x="350" y="195" textAnchor="middle" fill="#991b1b" fontSize="11">✗ "eventualmente"</text>
            <text x="350" y="215" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">✓ "no final / afinal"</text>
            <text x="350" y="232" textAnchor="middle" fill="#374151" fontSize="10" fontStyle="italic">occasionally = eventualmente</text>

            {/* college */}
            <rect x="480" y="155" width="200" height="80" rx="8" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
            <text x="580" y="175" textAnchor="middle" fill="#dc2626" fontSize="14" fontWeight="bold">college</text>
            <text x="580" y="195" textAnchor="middle" fill="#991b1b" fontSize="11">✗ "colégio"</text>
            <text x="580" y="215" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">✓ "faculdade"</text>
            <text x="580" y="232" textAnchor="middle" fill="#374151" fontSize="10" fontStyle="italic">high school = colégio</text>
          </svg>
          <figcaption>Os seis falsos cognatos mais perigosos para estudantes brasileiros. Cada um tem o erro comum (em vermelho) e o significado correto (em verde).</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégias de vocabulário</span>
        <h2>7. Como Construir Vocabulário de Forma Inteligente</h2>
        <p>
          Memorizar listas enormes de palavras é ineficiente. Existem estratégias
          muito mais eficazes para ampliar o vocabulário em inglês focado no ENEM:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Vocabulário em contexto</h3>
            <p>Sempre aprenda palavras em frases, nunca isoladas. O contexto fixa o significado e evita confusão.</p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Cognatos primeiro</h3>
            <p>Comece por cognatos. Eles ampliam seu vocabulário passivo imediatamente sem esforço extra.</p>
          </div>
          <div className="lesson-card">
            <span>🧩</span>
            <h3>Prefixos e sufixos</h3>
            <p>Uma vez que você conhece um sufixo, pode reconhecer dezenas de palavras novas. (Ver Cap05)</p>
          </div>
          <div className="lesson-card">
            <span>📰</span>
            <h3>Leitura extensiva</h3>
            <p>Ler textos reais em inglês (notícias, propagandas) expostos aos temas do ENEM é o método mais eficiente.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocabulário essencial</span>
        <h2>8. Palavras de Alta Frequência no ENEM de Inglês</h2>
        <p>
          Certas palavras aparecem em praticamente todas as edições do ENEM de
          inglês, seja no enunciado, nos textos ou nas alternativas. Dominá-las
          é prioritário:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Palavras</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Enunciado das questões</td>
                <td><em>according to, based on, suggests, implies, refers to</em></td>
                <td>de acordo com, baseado em, sugere, implica, refere-se a</td>
              </tr>
              <tr>
                <td>Conectores textuais</td>
                <td><em>however, therefore, although, despite, furthermore</em></td>
                <td>porém, portanto, embora, apesar de, além disso</td>
              </tr>
              <tr>
                <td>Verbos de comunicação</td>
                <td><em>argue, claim, state, suggest, warn, highlight</em></td>
                <td>argumentar, afirmar, declarar, sugerir, alertar, destacar</td>
              </tr>
              <tr>
                <td>Temas recorrentes</td>
                <td><em>environment, technology, inequality, rights, culture</em></td>
                <td>meio ambiente, tecnologia, desigualdade, direitos, cultura</td>
              </tr>
              <tr>
                <td>Avaliação e opinião</td>
                <td><em>crucial, significant, alarming, effective, controversial</em></td>
                <td>crucial, significativo, alarmante, eficaz, controverso</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> As palavras do enunciado das questões
          (<em>according to, suggests, refers to</em>) são as mais importantes
          de todas. Se você entender o que a questão está pedindo, metade do
          trabalho já está feito.
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Técnica de memorização</span>
        <h2>9. A Técnica do Exemplo Pessoal</h2>
        <p>
          A melhor forma de fixar vocabulário é criando{" "}
          <strong>frases com contexto pessoal</strong>. Quando você cria uma frase
          usando a palavra em um contexto da sua vida, o cérebro cria conexões
          mais fortes e duradouras do que simplesmente ler uma lista.
        </p>
        <p>Exemplo de aplicação para os falsos cognatos:</p>
        <ul>
          <li>
            <em>Actually</em> — Em vez de "atualmente", pense: "Actually, I'm
            not sure about that" = "Na verdade, não tenho certeza sobre isso."
            Use em conversas (mesmo mentais) para fixar.
          </li>
          <li>
            <em>Library</em> — Crie uma frase: "I go to the <em>library</em> to
            borrow books, not the <em>bookstore</em>." (Vou à biblioteca pegar
            livros emprestados, não à livraria.)
          </li>
          <li>
            <em>Eventually</em> — "She worked hard, and <em>eventually</em>{" "}
            got the job." (Ela trabalhou duro, e no final conseguiu o emprego.)
          </li>
        </ul>
      </section>

      {/* ── SEÇÃO EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Identificação de cognatos"
          statement={
            <p>
              Leia a frase: <em>"The <strong>democratic</strong> system requires
              participation, <strong>transparency</strong> and respect for
              individual <strong>liberty</strong>."</em> Identifique quais palavras
              em destaque são cognatos do português:
            </p>
          }
          options={[
            { letter: "A", text: "Nenhuma delas, pois são palavras exclusivas do inglês." },
            { letter: "B", text: "Apenas 'democratic'." },
            { letter: "C", text: "Apenas 'transparency' e 'liberty'." },
            { letter: "D", text: "Todas as três palavras em destaque são cognatos do português.", correct: true },
            { letter: "E", text: "Apenas 'democratic' e 'transparency'." },
          ]}
          resolution={
            <p>
              As três palavras são cognatos: <em>democratic</em> = democrático;{" "}
              <em>transparency</em> = transparência (padrão -ncia → -ncy);{" "}
              <em>liberty</em> = liberdade (padrão -dade → -ty). Mesmo sem
              conhecer essas palavras, o estudante pode identificá-las como
              cognatos pela semelhança com o português, confirmando o sentido
              da frase sobre sistema democrático.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Falso cognato em contexto"
          statement={
            <div>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "The young actress was extremely <strong>embarrassed</strong> when
                she forgot her lines during the live performance."
              </p>
              <p>
                Na frase acima, a palavra <strong>embarrassed</strong> significa:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Embaraçada fisicamente, presa em algo." },
            { letter: "B", text: "Envergonhada, constrangida.", correct: true },
            { letter: "C", text: "Empolgada com a performance ao vivo." },
            { letter: "D", text: "Cansada após horas de ensaio." },
            { letter: "E", text: "Preparada para o próximo ato da peça." },
          ]}
          resolution={
            <p>
              <em>Embarrassed</em> é um falso cognato clássico: parece "embaraçado"
              (no sentido físico de preso), mas significa <strong>envergonhado,
              constrangido</strong>. O contexto confirma: a atriz esqueceu suas
              falas durante uma apresentação ao vivo — situação que naturalmente
              gera vergonha/constrangimento. Em inglês, "embaraçado fisicamente"
              seria <em>tangled</em> ou <em>stuck</em>.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Falso cognato + inferência"
          statement={
            <div>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "The documentary <strong>actually</strong> challenges many
                assumptions we have about modern education. What seems obvious
                at first glance turns out to be surprisingly complex."
              </p>
              <p>
                A palavra <strong>actually</strong>, neste contexto, equivale a:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Atualmente — referindo-se ao tempo presente, ao período contemporâneo." },
            { letter: "B", text: "Frequentemente — indicando que isso acontece muitas vezes." },
            { letter: "C", text: "Na verdade / de fato — introduzindo uma informação que surpreende ou contraria expectativas.", correct: true },
            { letter: "D", text: "Raramente — indicando que o documentário é incomum." },
            { letter: "E", text: "Finalmente — indicando conclusão de um argumento longo." },
          ]}
          resolution={
            <p>
              <em>Actually</em> é o falso cognato mais cobrado em provas
              brasileiras. Seu significado correto é <strong>"na verdade, de
              fato"</strong> — não "atualmente". O contexto reforça: o
              documentário confronta suposições (algo inesperado), e a frase
              seguinte ("o que parece óbvio acaba sendo complexo") indica
              surpresa/revelação, reforçando "na verdade". "Atualmente" em inglês
              é <em>currently</em> ou <em>nowadays</em>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Cognatos parciais — padrão -ção/-tion"
          statement={
            <div>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "The <strong>organization</strong> announced a new <strong>regulation</strong>{" "}
                aimed at increasing <strong>participation</strong> and <strong>collaboration</strong>{" "}
                in environmental <strong>preservation</strong> programs."
              </p>
              <p>
                Com base no padrão de cognatos parciais entre português e inglês,
                pode-se afirmar que as palavras destacadas correspondem,
                respectivamente, a:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "organização, regulação, participação, colaboração, preservação.", correct: true },
            { letter: "B", text: "organismo, regulador, participante, colaborador, preservativo." },
            { letter: "C", text: "órgão, regra, parte, colega, preservar." },
            { letter: "D", text: "organizar, regular, participar, colaborar, preservar." },
            { letter: "E", text: "organizado, regulamentado, participado, colaborado, preservado." },
          ]}
          resolution={
            <p>
              Todas as palavras seguem o padrão <strong>-tion → -ção</strong>:
              organization = organização; regulation = regulação; participation =
              participação; collaboration = colaboração; preservation = preservação.
              Este é um dos padrões de cognato parcial mais produtivos da língua
              inglesa. As alternativas B, C, D e E mudam a classe gramatical
              (substantivo → adjetivo, verbo ou outro substantivo), o que não
              corresponde ao padrão apresentado.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Múltiplos falsos cognatos em texto"
          statement={
            <div>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "My <strong>parents</strong> went to the <strong>library</strong>{" "}
                to attend a <strong>lecture</strong> about environmental hazards.
                <strong>Eventually</strong>, they decided to join the local
                environmental group."
              </p>
              <p>
                A tradução correta da frase acima é:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Meus parentes foram à livraria assistir a uma leitura sobre perigos ambientais. Eventualmente, decidiram entrar no grupo ambiental local." },
            { letter: "B", text: "Meus pais foram à biblioteca assistir a uma palestra sobre perigos ambientais. No final, decidiram entrar no grupo ambiental local.", correct: true },
            { letter: "C", text: "Meus parentes foram à livraria assistir a uma palestra sobre perigos ambientais. No final, decidiram entrar no grupo ambiental local." },
            { letter: "D", text: "Meus pais foram à biblioteca assistir a uma leitura sobre perigos ambientais. Eventualmente, decidiram entrar no grupo ambiental local." },
            { letter: "E", text: "Meus parentes foram à biblioteca assistir a uma palestra sobre perigos ambientais. Eventualmente, decidiram entrar no grupo ambiental local." },
          ]}
          resolution={
            <p>
              A frase contém <strong>quatro falsos cognatos</strong>:{" "}
              <em>parents</em> = pais (não parentes);{" "}
              <em>library</em> = biblioteca (não livraria);{" "}
              <em>lecture</em> = palestra/aula (não leitura);{" "}
              <em>eventually</em> = no final/por fim (não eventualmente).
              Somente a alternativa B traduz corretamente todos os quatro.
              Esta questão demonstra como um único parágrafo pode conter
              múltiplas armadilhas de falsos cognatos — atenção redobrada é
              necessária.
            </p>
          }
        />
      </section>
    </article>
  );
}
