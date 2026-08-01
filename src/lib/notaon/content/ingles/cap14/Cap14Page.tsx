"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap14Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 14</span>
          <h1>Voz Ativa e Voz Passiva</h1>
          <p>
            A voz passiva é onipresente em textos científicos, jornalísticos e
            institucionais — exatamente os gêneros mais cobrados no ENEM. Saber
            <strong> identificá-la</strong> e entender o que ela comunica
            (especialmente quando o agente é omitido) é decisivo para interpretar
            corretamente textos em inglês.
          </p>
          <p>
            Neste capítulo você vai aprender a estrutura da voz passiva nos
            principais tempos verbais, a diferença de ênfase em relação à voz
            ativa, quando o agente é omitido e por quê, e como o ENEM usa a
            passiva para testar interpretação crítica.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fundamento</span>
        <h2>1. Voz Ativa vs. Voz Passiva — A Diferença de Ênfase</h2>
        <p>
          A escolha entre voz ativa e passiva não é aleatória — ela muda o
          <strong> foco</strong> da frase. Entender essa diferença é a base
          para interpretar o propósito comunicativo de um texto.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Voz</th>
                <th>Estrutura básica</th>
                <th>Foco</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ativa</strong></td>
                <td>Sujeito + verbo + objeto</td>
                <td>Quem pratica a ação (agente)</td>
                <td>"Scientists <em>discovered</em> a new species."</td>
              </tr>
              <tr>
                <td><strong>Passiva</strong></td>
                <td>Sujeito + to be + past participle</td>
                <td>O que sofreu a ação (paciente)</td>
                <td>"A new species <em>was discovered</em>."</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Princípio-chave:</strong> Na voz passiva, o objeto da voz ativa
          passa a ser o sujeito. O agente (quem fez a ação) pode ser mencionado
          com "by" ou simplesmente omitido quando é irrelevante, óbvio ou
          desconhecido.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Formação</span>
        <h2>2. Estrutura da Voz Passiva nos Principais Tempos</h2>
        <p>
          A voz passiva é sempre formada por uma forma do verbo <strong>to be</strong>
          (conjugado no tempo correspondente) + o <strong>past participle</strong>
          do verbo principal.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tempo verbal</th>
                <th>Estrutura</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Simple Present</td>
                <td>is/are + pp</td>
                <td>"The data <em>is collected</em> daily."</td>
              </tr>
              <tr>
                <td>Simple Past</td>
                <td>was/were + pp</td>
                <td>"The report <em>was published</em> last year."</td>
              </tr>
              <tr>
                <td>Present Continuous</td>
                <td>is/are being + pp</td>
                <td>"The bridge <em>is being built</em> right now."</td>
              </tr>
              <tr>
                <td>Past Continuous</td>
                <td>was/were being + pp</td>
                <td>"The patients <em>were being monitored</em> closely."</td>
              </tr>
              <tr>
                <td>Present Perfect</td>
                <td>has/have been + pp</td>
                <td>"The law <em>has been changed</em> twice."</td>
              </tr>
              <tr>
                <td>Past Perfect</td>
                <td>had been + pp</td>
                <td>"The samples <em>had been stored</em> incorrectly."</td>
              </tr>
              <tr>
                <td>Simple Future</td>
                <td>will be + pp</td>
                <td>"The results <em>will be announced</em> on Friday."</td>
              </tr>
              <tr>
                <td>Com modal</td>
                <td>modal + be + pp</td>
                <td>"All submissions <em>must be reviewed</em> by experts."</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Para identificar a passiva rapidamente, procure
          "to be + palavra terminada em -ed ou forma irregular". Se encontrar isso,
          é voz passiva. Não precisa nomear o tempo — só entender que a ação recai
          sobre o sujeito, não é praticada por ele.
        </div>
      </section>

      {/* ── SEÇÃO 3 — SVG ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>3. A Transformação Ativa → Passiva</h2>
        <p>
          O diagrama abaixo mostra como os elementos da frase se reorganizam
          ao passar da voz ativa para a passiva:
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 230" aria-label="Diagrama de transformação de voz ativa para passiva" role="img">
            {/* VOZ ATIVA */}
            <text x="350" y="22" textAnchor="middle" fill="#1f2937" fontSize="13" fontWeight="bold">VOZ ATIVA</text>
            <rect x="60" y="35" width="150" height="40" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="135" y="60" textAnchor="middle" fill="#1e40af" fontSize="12" fontWeight="bold">Scientists</text>
            <text x="135" y="73" textAnchor="middle" fill="#1e40af" fontSize="10">(sujeito/agente)</text>

            <rect x="240" y="35" width="130" height="40" rx="8" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
            <text x="305" y="55" textAnchor="middle" fill="#9d174d" fontSize="12" fontWeight="bold">discovered</text>
            <text x="305" y="70" textAnchor="middle" fill="#9d174d" fontSize="10">(verbo ativo)</text>

            <rect x="400" y="35" width="240" height="40" rx="8" fill="#d1fae5" stroke="#22c55e" strokeWidth="2" />
            <text x="520" y="55" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">a new species</text>
            <text x="520" y="70" textAnchor="middle" fill="#166534" fontSize="10">(objeto/paciente)</text>

            {/* Seta de transformação */}
            <line x1="350" y1="100" x2="350" y2="130" stroke="#374151" strokeWidth="2" />
            <polygon points="344,130 356,130 350,145" fill="#374151" />
            <text x="430" y="122" fill="#6b7280" fontSize="11" fontStyle="italic">vira sujeito da passiva</text>

            {/* VOZ PASSIVA */}
            <text x="350" y="165" textAnchor="middle" fill="#1f2937" fontSize="13" fontWeight="bold">VOZ PASSIVA</text>
            <rect x="60" y="178" width="240" height="40" rx="8" fill="#d1fae5" stroke="#22c55e" strokeWidth="2" />
            <text x="180" y="198" textAnchor="middle" fill="#166534" fontSize="12" fontWeight="bold">A new species</text>
            <text x="180" y="213" textAnchor="middle" fill="#166534" fontSize="10">(novo sujeito/paciente)</text>

            <rect x="320" y="178" width="180" height="40" rx="8" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
            <text x="410" y="198" textAnchor="middle" fill="#9d174d" fontSize="12" fontWeight="bold">was discovered</text>
            <text x="410" y="213" textAnchor="middle" fill="#9d174d" fontSize="10">(to be + pp)</text>

            <rect x="520" y="178" width="150" height="40" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
            <text x="595" y="198" textAnchor="middle" fill="#4c1d95" fontSize="12" fontWeight="bold">by scientists</text>
            <text x="595" y="213" textAnchor="middle" fill="#4c1d95" fontSize="10">(agente — opcional)</text>
          </svg>
          <figcaption>
            Na transformação ativa → passiva, o objeto vira sujeito, o verbo ganha
            "to be + pp", e o agente original pode aparecer como "by + agente" ou
            ser omitido.
          </figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Omissão do agente</span>
        <h2>4. Quando e Por Que o Agente É Omitido</h2>
        <p>
          Na maioria dos casos de voz passiva, o agente (by + quem fez) é
          <strong> omitido</strong>. Entender por quê é essencial para interpretar
          a intenção comunicativa do texto.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Agente desconhecido</h3>
            <p>"The ancient temple <em>was built</em> over 3,000 years ago." (quem construiu é desconhecido)</p>
          </div>
          <div className="lesson-card">
            <span>📋</span>
            <h3>Agente óbvio</h3>
            <p>"The suspect <em>was arrested</em> yesterday." (subentende-se: pela polícia)</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Ênfase no resultado</h3>
            <p>"The vaccine <em>was approved</em> for public use." (o que importa é a aprovação, não quem aprovou)</p>
          </div>
          <div className="lesson-card">
            <span>🛡️</span>
            <h3>Evitar responsabilidade</h3>
            <p>"Mistakes <em>were made</em>." (quem errou não é dito — estratégia discursiva intencional)</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Estratégia de leitura:</strong> Quando o agente é omitido e
          você percebe que sua identidade seria relevante, isso pode ser uma
          escolha discursiva intencional do autor. O ENEM cobra essa percepção
          em questões sobre intenção comunicativa.
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Textos científicos</span>
        <h2>5. Por Que Textos Científicos e Jornalísticos Usam Tanto a Passiva</h2>
        <p>
          A voz passiva domina esses gêneros por razões específicas que você deve
          reconhecer na leitura:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Razão</th>
                <th>Exemplo</th>
                <th>Efeito comunicativo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Objetividade científica</td>
                <td>"The samples <em>were analyzed</em> using mass spectrometry."</td>
                <td>Remove o pesquisador do foco; enfatiza o método.</td>
              </tr>
              <tr>
                <td>Impessoalidade institucional</td>
                <td>"New regulations <em>will be implemented</em> in January."</td>
                <td>Evita identificar quem decide; torna o texto mais formal.</td>
              </tr>
              <tr>
                <td>Foco na novidade</td>
                <td>"A breakthrough drug <em>has been developed</em>."</td>
                <td>A descoberta é o ponto central, não quem a fez.</td>
              </tr>
              <tr>
                <td>Evasão de responsabilidade</td>
                <td>"The data <em>was misinterpreted</em>."</td>
                <td>Omitir o agente evita culpar diretamente alguém.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Em textos de divulgação científica, a passiva
          aparece com altíssima frequência. Treinar a leitura desses textos acelera
          o reconhecimento automático da estrutura passiva — o que economiza
          tempo e reduz erros de interpretação na prova.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Verbos com dois objetos</span>
        <h2>6. Passiva com Verbos de Dois Objetos</h2>
        <p>
          Verbos como <em>give</em>, <em>show</em>, <em>tell</em>, <em>award</em>
          e <em>offer</em> têm dois objetos: direto e indireto. Na passiva, qualquer
          um dos dois pode virar sujeito:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Voz ativa</th>
                <th>Passiva (obj. indireto como sujeito)</th>
                <th>Passiva (obj. direto como sujeito)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"They gave the students a prize."</td>
                <td>"The students <em>were given</em> a prize."</td>
                <td>"A prize <em>was given</em> to the students."</td>
              </tr>
              <tr>
                <td>"The teacher showed them the results."</td>
                <td>"They <em>were shown</em> the results."</td>
                <td>"The results <em>were shown</em> to them."</td>
              </tr>
              <tr>
                <td>"The company offered her a promotion."</td>
                <td>"She <em>was offered</em> a promotion."</td>
                <td>"A promotion <em>was offered</em> to her."</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Get-passive</span>
        <h2>7. Get-Passive — Uma Variação Importante</h2>
        <p>
          Em inglês informal, a passiva pode ser formada com <strong>get</strong>
          em vez de <em>to be</em>. O get-passive aparece em textos jornalísticos,
          posts em redes sociais e diálogos — gêneros que o ENEM também explora.
        </p>
        <ul>
          <li>"The website <strong>got hacked</strong> last night." (= was hacked)</li>
          <li>"She <strong>got promoted</strong> after the project." (= was promoted)</li>
          <li>"Several workers <strong>got injured</strong> during the accident." (= were injured)</li>
        </ul>
        <p>
          O get-passive adiciona frequentemente uma nuance de resultado inesperado
          ou imprevisto — algo que simplesmente "aconteceu" ao sujeito. Em textos
          formais, o <em>be-passive</em> é sempre preferido.
        </p>
        <div className="lesson-highlight">
          <strong>Para o ENEM:</strong> A probabilidade de get-passive é maior
          em textos informais (blogs, redes sociais, letras de música). Não se
          confunda — o sentido é de passiva mesmo que o verbo auxiliar seja
          <em> get</em> em vez de <em>be</em>.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">ENEM na prática</span>
        <h2>8. Como o ENEM Testa a Voz Passiva</h2>
        <p>
          O ENEM não pede que você transforme frases de ativa para passiva. O que
          ele cobra é a <strong>interpretação de textos que usam a passiva</strong>,
          incluindo:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧩</span>
            <h3>Quem fez o quê?</h3>
            <p>Questões pedindo a identificação do agente de uma ação — especialmente quando ele é omitido.</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Foco do texto</h3>
            <p>Perguntas sobre o que o texto enfatiza — e por que o autor escolheu ocultar o agente.</p>
          </div>
          <div className="lesson-card">
            <span>📝</span>
            <h3>Intenção comunicativa</h3>
            <p>O uso estratégico da passiva (para evitar responsabilidade ou focar no resultado) pode ser o tema central de uma questão.</p>
          </div>
          <div className="lesson-card">
            <span>🔎</span>
            <h3>Sentido de expressões</h3>
            <p>H27 — inferir o sentido de uma expressão na passiva pelo contexto.</p>
          </div>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Identificação da voz passiva"
          statement={
            <p>
              Qual das alternativas abaixo contém uma frase na <strong>voz passiva</strong>?
            </p>
          }
          options={[
            { letter: "A", text: "The government announced new economic policies." },
            { letter: "B", text: "Researchers have been studying the effects of the drug for three years." },
            { letter: "C", text: "New economic policies were announced by the government.", correct: true },
            { letter: "D", text: "Scientists discovered a new species in the Amazon." },
            { letter: "E", text: "The company will launch its new product next month." },
          ]}
          resolution={
            <p>
              A alternativa C apresenta a estrutura característica da voz passiva:
              <em> were announced</em> = to be (were) + past participle (announced).
              O objeto da frase ativa ("new economic policies") tornou-se o sujeito,
              e o agente original ("the government") aparece introduzido por "by".
              As demais alternativas usam verbos ativos ou tempos contínuos que
              não constituem passiva.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Efeito da omissão do agente"
          statement={
            <div>
              <p><em>(Trecho adaptado de comunicado institucional)</em></p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "During the investigation, several documents <strong>were destroyed</strong>,
                key evidence <strong>was mishandled</strong>, and the original
                report <strong>was never published</strong>."
              </p>
              <p>
                O uso sistemático da voz passiva sem indicação do agente nesse
                trecho tem como principal efeito comunicativo:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Tornar o texto mais objetivo e científico, focando nos resultados da investigação." },
            { letter: "B", text: "Indicar que os responsáveis pelas ações são desconhecidos e não podem ser identificados." },
            { letter: "C", text: "Evitar a identificação de responsáveis pelos atos descritos, diluindo a responsabilidade.", correct: true },
            { letter: "D", text: "Demonstrar que todas as ações foram realizadas pela mesma pessoa." },
            { letter: "E", text: "Indicar que os eventos ocorreram simultaneamente." },
          ]}
          resolution={
            <p>
              A repetição de passivas sem agente ("were destroyed", "was mishandled",
              "was never published") em um contexto de irregularidades é uma
              estratégia discursiva clássica de <strong>evasão de responsabilidade</strong>.
              Omitir "by someone" impede que o leitor identifique quem destruiu,
              quem mal manuseou, quem bloqueou. Esse uso intencional da passiva
              é exatamente o tipo de análise crítica que o ENEM cobra.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Passiva em texto científico"
          statement={
            <div>
              <p><em>(Trecho adaptado de artigo científico)</em></p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "In this study, 500 participants <strong>were recruited</strong> from
                urban and rural areas. Blood samples <strong>were collected</strong>
                at three different time points and <strong>were analyzed</strong>
                using high-performance liquid chromatography. All procedures
                <strong>were approved</strong> by the institutional ethics committee."
              </p>
              <p>
                O uso predominante da voz passiva neste excerto científico tem
                como principal função:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Esconder que os pesquisadores cometeram erros metodológicos graves." },
            { letter: "B", text: "Tornar o texto informal e acessível ao público leigo." },
            { letter: "C", text: "Conferir objetividade e impessoalidade ao método, deslocando o foco do pesquisador para os procedimentos.", correct: true },
            { letter: "D", text: "Indicar que os participantes realizaram todos os procedimentos descritos." },
            { letter: "E", text: "Demonstrar incerteza sobre os resultados do estudo." },
          ]}
          resolution={
            <p>
              Em textos científicos, a voz passiva é a norma estilística para
              descrever metodologia. O foco recai sobre <strong>o que foi feito</strong>
              (recrutamento, coleta, análise, aprovação) — não sobre quem fez.
              Isso comunica objetividade e reprodutibilidade: outro pesquisador
              poderia repetir os mesmos procedimentos. A alternativa C captura
              essa função convencional da passiva em textos acadêmicos.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Get-passive em texto informal"
          statement={
            <div>
              <p><em>(Post em rede social — contexto jornalístico)</em></p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Breaking: the company's database <strong>got hacked</strong>
                overnight. Over 2 million users' personal data may have been
                exposed. Customers are advised not to use their accounts until
                the issue <strong>gets resolved</strong>."
              </p>
              <p>
                As expressões <strong>got hacked</strong> e <strong>gets resolved</strong>
                nesse contexto indicam, respectivamente:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Ação ativa da empresa e ação ativa dos clientes." },
            { letter: "B", text: "Ação futura e ação passada no texto." },
            { letter: "C", text: "Que o banco de dados sofreu uma invasão e que o problema será solucionado — ambos na voz passiva com get.", correct: true },
            { letter: "D", text: "Que a empresa hackeou seus próprios dados e depois os corrigiu." },
            { letter: "E", text: "O verbo get, neste contexto, não indica passiva, mas sim ação ativa." },
          ]}
          resolution={
            <p>
              <em>Got hacked</em> = was hacked (o banco de dados sofreu a ação
              de invasores). <em>Gets resolved</em> = is resolved/will be resolved
              (o problema receberá solução de alguém). Ambas são <strong>get-passives</strong>,
              típicas de linguagem informal e textos digitais — gêneros que o ENEM
              inclui progressivamente nas últimas edições. A alternativa C é a única
              que identifica corretamente as duas construções como passivas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Passiva e intenção do autor"
          statement={
            <div>
              <p><em>(Trecho adaptado de reportagem investigativa)</em></p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Thousands of residents <strong>were displaced</strong> from
                their homes last year following the construction of a new highway.
                Communities <strong>were given</strong> only two weeks' notice,
                and no adequate compensation <strong>was offered</strong>. The
                project <strong>had been approved</strong> without proper public
                consultation."
              </p>
              <p>
                Com base no uso da voz passiva e no conteúdo do trecho, a intenção
                do autor é:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Elogiar a eficiência do governo na construção da rodovia." },
            { letter: "B", text: "Descrever objetivamente as etapas de um projeto de infraestrutura." },
            { letter: "C", text: "Denunciar o tratamento inadequado das comunidades afetadas, sem nomear responsáveis diretamente.", correct: true },
            { letter: "D", text: "Defender que os moradores deveriam ter aceitado a compensação oferecida." },
            { letter: "E", text: "Mostrar que o projeto foi aprovado de forma democrática e transparente." },
          ]}
          resolution={
            <p>
              O vocabulário ("displaced", "only two weeks", "no adequate compensation",
              "without proper consultation") é claramente crítico. O uso da voz
              passiva sem agentes nomeados — "were displaced" (por quem?), "was
              offered" (por quem?) — permite que o autor denuncie os fatos sem
              fazer acusações nominais diretas, uma estratégia jornalística comum.
              A alternativa C é a que melhor captura tanto o tom crítico quanto
              a estratégia retórica da passiva sem agente.
            </p>
          }
        />
      </section>
    </article>
  );
}
