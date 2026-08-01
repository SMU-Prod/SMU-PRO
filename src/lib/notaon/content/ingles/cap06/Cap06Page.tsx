"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap06Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 06</span>
          <h1>Pronomes pessoais, possessivos, demonstrativos e interrogativos</h1>
          <p>
            Pronomes são as palavras mais frequentes de qualquer texto em inglês —
            e também as que mais causam confusão na interpretação. Saber a quem ou
            ao quê um pronome se refere (<strong>referência anafórica</strong>) é
            uma habilidade diretamente cobrada no ENEM e determinante para a
            compreensão correta de trechos complexos.
          </p>
          <p>
            Neste capítulo você vai dominar os tipos de pronome, seus usos e a
            estratégia de rastreamento de referentes — a técnica que impede que
            você troque o sentido de um pronome e erre uma questão por um detalhe
            aparentemente pequeno.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Sujeito</span>
        <h2>1. Pronomes Pessoais do Caso Reto (Subject Pronouns)</h2>
        <p>
          Os pronomes de sujeito substituem o nome de quem pratica a ação. Em
          inglês, eles são <strong>obrigatórios</strong> — ao contrário do
          português, o sujeito nunca pode ser omitido.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pronome</th>
                <th>Pessoa</th>
                <th>Exemplo</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>I</strong></td><td>1ª singular</td><td>I study every day.</td><td>Eu estudo todos os dias.</td></tr>
              <tr><td><strong>you</strong></td><td>2ª singular/plural</td><td>You are right.</td><td>Você está certo.</td></tr>
              <tr><td><strong>he</strong></td><td>3ª singular masc.</td><td>He wrote the report.</td><td>Ele escreveu o relatório.</td></tr>
              <tr><td><strong>she</strong></td><td>3ª singular fem.</td><td>She leads the team.</td><td>Ela lidera a equipe.</td></tr>
              <tr><td><strong>it</strong></td><td>3ª singular neutro</td><td>It is important.</td><td>É importante. / Isso é importante.</td></tr>
              <tr><td><strong>we</strong></td><td>1ª plural</td><td>We need change.</td><td>Nós precisamos de mudança.</td></tr>
              <tr><td><strong>they</strong></td><td>3ª plural</td><td>They discovered a solution.</td><td>Eles descobriram uma solução.</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção ao <em>it</em>:</strong> Em inglês, objetos, animais,
          países e ideias abstratas usam <em>it</em> (não <em>he</em> ou <em>she</em>).
          No ENEM, questões de referência anafórica frequentemente testam se você
          identifica que <em>it</em> se refere a um conceito ou objeto — não a uma
          pessoa.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Objeto</span>
        <h2>2. Pronomes Pessoais do Caso Oblíquo (Object Pronouns)</h2>
        <p>
          Os pronomes de objeto substituem o nome de quem recebe a ação. São
          usados depois de verbos e preposições.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sujeito</th>
                <th>Objeto</th>
                <th>Exemplo</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>I</td><td><strong>me</strong></td><td>She called me.</td><td>Ela me ligou.</td></tr>
              <tr><td>you</td><td><strong>you</strong></td><td>I need you.</td><td>Eu preciso de você.</td></tr>
              <tr><td>he</td><td><strong>him</strong></td><td>We saw him.</td><td>Nós o vimos.</td></tr>
              <tr><td>she</td><td><strong>her</strong></td><td>They invited her.</td><td>Eles a convidaram.</td></tr>
              <tr><td>it</td><td><strong>it</strong></td><td>I read it.</td><td>Eu li isso.</td></tr>
              <tr><td>we</td><td><strong>us</strong></td><td>Help us.</td><td>Nos ajude.</td></tr>
              <tr><td>they</td><td><strong>them</strong></td><td>She trusts them.</td><td>Ela confia neles.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Posse</span>
        <h2>3. Adjetivos Possessivos e Pronomes Possessivos</h2>
        <p>
          Em inglês há uma distinção importante entre o <strong>adjetivo
          possessivo</strong> (que acompanha um substantivo) e o <strong>pronome
          possessivo</strong> (que substitui o substantivo). Confundi-los pode
          gerar erros de interpretação.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pessoa</th>
                <th>Adjetivo possessivo</th>
                <th>Pronome possessivo</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>I</td><td><strong>my</strong></td><td><strong>mine</strong></td><td>My book / The book is mine.</td></tr>
              <tr><td>you</td><td><strong>your</strong></td><td><strong>yours</strong></td><td>Your idea / The idea is yours.</td></tr>
              <tr><td>he</td><td><strong>his</strong></td><td><strong>his</strong></td><td>His car / The car is his.</td></tr>
              <tr><td>she</td><td><strong>her</strong></td><td><strong>hers</strong></td><td>Her report / The report is hers.</td></tr>
              <tr><td>it</td><td><strong>its</strong></td><td>—</td><td>Its color is blue.</td></tr>
              <tr><td>we</td><td><strong>our</strong></td><td><strong>ours</strong></td><td>Our project / It is ours.</td></tr>
              <tr><td>they</td><td><strong>their</strong></td><td><strong>theirs</strong></td><td>Their results / The results are theirs.</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Cuidado: <em>its</em> vs <em>it's</em></strong> — <em>its</em>
          (sem apóstrofo) é adjetivo possessivo ("seu/sua", referindo-se a coisa).{" "}
          <em>It's</em> (com apóstrofo) é contração de <em>it is</em> ("é"). Essa
          distinção aparece em questões de interpretação do ENEM.
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Demonstrativos</span>
        <h2>4. Pronomes Demonstrativos</h2>
        <p>
          Os demonstrativos indicam distância — física ou temporal — entre o falante
          e o referente. No texto escrito, também indicam se algo foi mencionado
          antes (referência anafórica) ou será mencionado depois (referência
          catafórica).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pronome</th>
                <th>Singular/Plural</th>
                <th>Distância</th>
                <th>Uso em texto</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>this</strong></td><td>Singular</td><td>Próximo</td><td>This study shows… (este estudo — mencionado agora)</td></tr>
              <tr><td><strong>these</strong></td><td>Plural</td><td>Próximo</td><td>These results indicate… (estes resultados)</td></tr>
              <tr><td><strong>that</strong></td><td>Singular</td><td>Distante</td><td>That policy failed… (aquela política — mencionada antes)</td></tr>
              <tr><td><strong>those</strong></td><td>Plural</td><td>Distante</td><td>Those findings were… (aquelas descobertas)</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Nos textos do ENEM, <em>this</em> e <em>these</em> frequentemente retomam
          uma ideia apresentada no parágrafo anterior. <em>That</em> e <em>those</em>
          costumam criar distanciamento crítico — o autor menciona algo com
          que discorda ou que já passou.
        </p>
      </section>

      {/* ── SEÇÃO 5 (SVG) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Referência anafórica</span>
        <h2>5. Rastreamento de Referentes: a Habilidade mais Cobrada</h2>
        <p>
          <strong>Referência anafórica</strong> é quando um pronome retoma algo
          já mencionado no texto. O ENEM testa diretamente essa habilidade com
          questões do tipo: "No texto, o pronome <em>it</em> (linha 3) se refere a:".
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 220"
            aria-label="Diagrama de referência anafórica mostrando como pronomes retomam referentes anteriores no texto"
            role="img"
          >
            {/* Texto exemplo */}
            <rect x="20" y="20" width="660" height="60" rx="8" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
            <text x="350" y="44" textAnchor="middle" fill="#374151" fontSize="12">
              "The Amazon rainforest stores billions of tons of carbon.
            </text>
            <text x="350" y="64" textAnchor="middle" fill="#374151" fontSize="12">
              <tspan fill="#dc2626" fontWeight="bold">It</tspan> is crucial for regulating the global climate."
            </text>

            {/* Seta de referência */}
            <path d="M 258 64 Q 180 100 180 130" stroke="#dc2626" strokeWidth="2" fill="none" markerEnd="url(#arrow-ref)" />
            <defs>
              <marker id="arrow-ref" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#dc2626" />
              </marker>
            </defs>

            {/* Referente */}
            <rect x="20" y="130" width="320" height="50" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5" />
            <text x="180" y="151" textAnchor="middle" fill="#991b1b" fontSize="13" fontWeight="bold">Referente: "The Amazon rainforest"</text>
            <text x="180" y="170" textAnchor="middle" fill="#991b1b" fontSize="11">It = A floresta amazônica (neutro em inglês)</text>

            {/* Explicação */}
            <rect x="370" y="130" width="310" height="70" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="525" y="152" textAnchor="middle" fill="#713f12" fontSize="11" fontWeight="bold">Como rastrear o referente:</text>
            <text x="525" y="170" textAnchor="middle" fill="#713f12" fontSize="11">1. Identifique o pronome</text>
            <text x="525" y="186" textAnchor="middle" fill="#713f12" fontSize="11">2. Volte no texto até encontrar o substantivo</text>
            <text x="525" y="202" textAnchor="middle" fill="#713f12" fontSize="11">que o pronome substitui</text>
          </svg>
          <figcaption>Rastreamento anafórico: o pronome "it" retoma "The Amazon rainforest". Essa é a habilidade central nas questões de pronomes do ENEM.</figcaption>
        </figure>

        <div className="math-block">
          <strong>Dica ENEM:</strong> Quando a questão pergunta "a que se refere o
          pronome X", volte ao texto e substitua o pronome pelo candidato a
          referente. Se a frase fizer sentido lógico e gramatical, você encontrou
          o referente correto.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Interrogativos</span>
        <h2>6. Pronomes Interrogativos</h2>
        <p>
          Os pronomes interrogativos formam perguntas e, nos textos do ENEM,
          aparecem com frequência em títulos de artigos, perguntas retóricas e
          enunciados de questão.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pronome</th>
                <th>Uso</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>who</strong></td><td>Pessoa (sujeito)</td><td>Who discovered penicillin?</td></tr>
              <tr><td><strong>whom</strong></td><td>Pessoa (objeto)</td><td>Whom did you contact?</td></tr>
              <tr><td><strong>whose</strong></td><td>Posse</td><td>Whose research was published?</td></tr>
              <tr><td><strong>which</strong></td><td>Escolha entre opções</td><td>Which policy is more effective?</td></tr>
              <tr><td><strong>what</strong></td><td>Coisa / informação</td><td>What caused the crisis?</td></tr>
              <tr><td><strong>when</strong></td><td>Tempo</td><td>When did the event occur?</td></tr>
              <tr><td><strong>where</strong></td><td>Lugar</td><td>Where was the study conducted?</td></tr>
              <tr><td><strong>why</strong></td><td>Causa / motivo</td><td>Why did the population decline?</td></tr>
              <tr><td><strong>how</strong></td><td>Modo</td><td>How does the process work?</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Reflexivos</span>
        <h2>7. Pronomes Reflexivos</h2>
        <p>
          Os pronomes reflexivos indicam que o sujeito e o objeto da ação são a
          mesma entidade. Em textos literários e de opinião — comuns no ENEM —
          eles também aparecem com sentido enfático.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👤</span>
            <h3>Singular</h3>
            <p>myself, yourself, himself, herself, itself</p>
          </div>
          <div className="lesson-card">
            <span>👥</span>
            <h3>Plural</h3>
            <p>ourselves, yourselves, themselves</p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Uso reflexivo</h3>
            <p>"She taught herself to code." = Ela se ensinou a programar.</p>
          </div>
          <div className="lesson-card">
            <span>💬</span>
            <h3>Uso enfático</h3>
            <p>"The president himself attended." = O próprio presidente compareceu.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia</span>
        <h2>8. Pronomes e Coesão Textual: Visão Integrada</h2>
        <p>
          Pronomes são instrumentos de <strong>coesão textual</strong> — eles criam
          a cadeia de referências que torna um texto coerente. No ENEM, entender
          essa cadeia é fundamental para questões que testam a compreensão global
          do texto, não apenas partes isoladas.
        </p>
        <div className="lesson-highlight">
          <strong>Tipos de referência em textos do ENEM:</strong>
          <ul>
            <li><strong>Anáfora:</strong> o pronome retoma algo já dito. "Scientists found a new species. <em>It</em> lives in deep water." (<em>it</em> = a espécie)</li>
            <li><strong>Catáfora:</strong> o pronome antecipa algo que será dito. "Here is <em>what</em> matters: education." (<em>what</em> = educação)</li>
            <li><strong>Referência situacional:</strong> o pronome aponta para algo no contexto imediato, como uma imagem ou gráfico junto ao texto.</li>
          </ul>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Ao ler um texto longo, sublinhe mentalmente
          os pronomes e seus referentes conforme lê. Isso cria um mapa de referências
          que torna a resolução das questões muito mais rápida.
        </div>
      </section>

      {/* ── SEÇÃO EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Pronomes de sujeito e objeto"
          statement={
            <p>
              Em inglês, qual pronome substituiria corretamente o trecho{" "}
              <em>"the government"</em> na frase: "The government announced{" "}
              <em>the government's</em> new environmental plan."?
            </p>
          }
          options={[
            { letter: "A", text: "he" },
            { letter: "B", text: "she" },
            { letter: "C", text: "it", correct: true },
            { letter: "D", text: "they" },
            { letter: "E", text: "we" },
          ]}
          resolution={
            <p>
              Instituições, organizações e entidades coletivas (como "government",
              "company", "country") usam o pronome neutro <em>it</em> em inglês —
              ao contrário do português, que usa "ele" (gênero masculino). A frase
              correta seria: "It announced its new environmental plan." A alternativa
              D (<em>they</em>) é usada para se referir a grupos de pessoas, não a
              uma entidade singular.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Referência anafórica"
          statement={
            <div>
              <p>Leia o trecho:</p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Researchers at the University of São Paulo have been studying
                the behavior of a recently discovered bee species. <strong>They</strong>{" "}
                believe <strong>it</strong> plays a crucial role in pollinating
                native plants."
              </p>
              <p>No texto, os pronomes <strong>they</strong> e <strong>it</strong> se referem, respectivamente, a:</p>
            </div>
          }
          options={[
            { letter: "A", text: "they = a espécie de abelha; it = a Universidade de São Paulo" },
            { letter: "B", text: "they = os pesquisadores; it = a Universidade de São Paulo" },
            { letter: "C", text: "they = os pesquisadores; it = a espécie de abelha descoberta", correct: true },
            { letter: "D", text: "they = as plantas nativas; it = a espécie de abelha" },
            { letter: "E", text: "they = as abelhas; it = o comportamento das abelhas" },
          ]}
          resolution={
            <p>
              Rastreando os referentes: <em>they</em> precisa ser humano e plural,
              pois pratica a ação de "acreditar" (<em>believe</em>) — logo, refere-se
              a "Researchers". <em>It</em> é singular e neutro, e o contexto
              (polinização de plantas nativas) aponta para "a espécie de abelha"
              (<em>a recently discovered bee species</em>). A alternativa C é a
              única que combina ambos corretamente.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Possessivo: its vs their"
          statement={
            <div>
              <p>Leia o trecho:</p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "The committee released <strong>its</strong> final report last
                Friday. The members defended <strong>their</strong> conclusions
                in a press conference."
              </p>
              <p>
                A diferença entre <em>its</em> e <em>their</em> no trecho indica que:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "its e their referem-se ambos ao comitê, sendo formas intercambiáveis." },
            { letter: "B", text: "its refere-se ao relatório; their refere-se aos membros do comitê." },
            { letter: "C", text: "its refere-se ao comitê como entidade única; their refere-se aos membros individualmente.", correct: true },
            { letter: "D", text: "its refere-se aos membros; their refere-se ao comitê como entidade." },
            { letter: "E", text: "its e their são ambos pronomes de objeto nesse contexto." },
          ]}
          resolution={
            <p>
              <em>Its</em> é o adjetivo possessivo de <em>it</em>, usado para
              entidades singulares e não-pessoas — aqui, "the committee" como
              instituição. <em>Their</em> é o adjetivo possessivo de <em>they</em>,
              usado para grupos de pessoas — aqui, "the members" como indivíduos.
              O texto distingue a visão coletiva da instituição (<em>its report</em>)
              da ação dos membros como pessoas (<em>their conclusions</em>).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Pronome demonstrativo e coesão"
          statement={
            <div>
              <p>
                <em>(Baseado em situação típica do ENEM)</em>
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "In the 1970s, governments around the world believed that economic
                growth would solve social inequality. <strong>This</strong> assumption,
                however, proved to be overly optimistic."
              </p>
              <p>
                O pronome demonstrativo <strong>This</strong> retoma:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Os governos de todo o mundo." },
            { letter: "B", text: "Os anos 1970." },
            { letter: "C", text: "A crença de que o crescimento econômico resolveria a desigualdade social.", correct: true },
            { letter: "D", text: "O otimismo excessivo dos líderes políticos." },
            { letter: "E", text: "A desigualdade social em si." },
          ]}
          resolution={
            <p>
              <em>This</em> é um pronome demonstrativo que, ao iniciar um novo
              segmento, retoma toda a ideia expressa anteriormente — não apenas
              uma palavra, mas um conceito inteiro. Aqui, <em>this assumption</em>
              resume a crença descrita na frase anterior: "que o crescimento econômico
              resolveria a desigualdade social". Esse uso de <em>this</em> +
              substantivo resumidor (<em>assumption</em>) é um padrão muito comum
              em textos argumentativos do ENEM.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Pronome interrogativo em título"
          statement={
            <div>
              <p>
                Um artigo jornalístico traz o seguinte título:{" "}
                <em>"<strong>Whose</strong> responsibility is climate change?"</em>
              </p>
              <p>O uso do pronome <strong>whose</strong> indica que o artigo abordará:</p>
            </div>
          }
          options={[
            { letter: "A", text: "Como as mudanças climáticas ocorrem do ponto de vista científico." },
            { letter: "B", text: "Quando as mudanças climáticas começaram a ser estudadas." },
            { letter: "C", text: "A quem pertence ou cabe a responsabilidade pelas mudanças climáticas.", correct: true },
            { letter: "D", text: "Onde as mudanças climáticas têm maior impacto no planeta." },
            { letter: "E", text: "Por que as mudanças climáticas são difíceis de combater." },
          ]}
          resolution={
            <p>
              <em>Whose</em> é o pronome interrogativo de posse — pergunta "de
              quem". O título questiona a quem pertence a responsabilidade pelas
              mudanças climáticas: governos, empresas, cidadãos, países
              desenvolvidos? A alternativa C é a única que captura esse sentido.
              Perceba: <em>how</em> responderia a A, <em>when</em> a B, <em>where</em>
              a D e <em>why</em> a E.
            </p>
          }
        />
      </section>
    </article>
  );
}
