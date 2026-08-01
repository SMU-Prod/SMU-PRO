"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap33Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Filosofia • Capítulo 33</span>
          <h1>Ciência, Tecnologia e Produção do Conhecimento</h1>
          <p>
            O que é ciência? Como ela avança? O conhecimento científico é definitivo ou provisório?
            Este capítulo explora a filosofia da ciência — Popper, Kuhn, Feyerabend — e os desafios
            contemporâneos da relação entre ciência, tecnologia e sociedade.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. O que é Ciência?</h2>
        <p>
          A <strong>ciência</strong> é uma forma sistemática de produzir conhecimento sobre a
          realidade, baseada em método rigoroso, revisão por pares e autocorreção. Diferencia-se
          de outras formas de conhecimento (senso comum, religião, arte, filosofia) por sua
          exigência de evidências empíricas e pela possibilidade de refutação.
        </p>
        <p>
          O <strong>método científico</strong> clássico (hipotético-dedutivo) envolve:
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 460 220" width="460" height="220" aria-label="Ciclo do método científico">
            {/* Círculo de setas */}
            <circle cx="230" cy="110" r="90" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="6,4"/>

            {/* Etapas */}
            <rect x="175" y="12" width="110" height="38" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="230" y="33" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">Observação</text>
            <text x="230" y="44" textAnchor="middle" fontSize="9" fill="#1e40af">problema / fenômeno</text>

            <rect x="348" y="75" width="110" height="38" rx="8" fill="#d1fae5" stroke="#059669" strokeWidth="1.5"/>
            <text x="403" y="96" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">Hipótese</text>
            <text x="403" y="107" textAnchor="middle" fontSize="9" fill="#065f46">explicação provisória</text>

            <rect x="320" y="165" width="120" height="38" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
            <text x="380" y="186" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">Experimento</text>
            <text x="380" y="197" textAnchor="middle" fontSize="9" fill="#92400e">teste controlado</text>

            <rect x="30" y="165" width="120" height="38" rx="8" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5"/>
            <text x="90" y="186" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#5b21b6">Análise</text>
            <text x="90" y="197" textAnchor="middle" fontSize="9" fill="#5b21b6">dados e resultados</text>

            <rect x="2" y="75" width="110" height="38" rx="8" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5"/>
            <text x="57" y="96" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#9d174d">Teoria</text>
            <text x="57" y="107" textAnchor="middle" fontSize="9" fill="#9d174d">ou refutação</text>

            {/* Setas */}
            <path d="M285 28 Q340 40 370 80" stroke="#374151" strokeWidth="1.5" fill="none" markerEnd="url(#arw-sci)"/>
            <path d="M408 113 Q408 148 390 163" stroke="#374151" strokeWidth="1.5" fill="none" markerEnd="url(#arw-sci)"/>
            <path d="M320 185 Q210 195 152 195" stroke="#374151" strokeWidth="1.5" fill="none" markerEnd="url(#arw-sci)"/>
            <path d="M70 163 Q55 140 58 115" stroke="#374151" strokeWidth="1.5" fill="none" markerEnd="url(#arw-sci)"/>
            <path d="M112 83 Q160 48 178 38" stroke="#374151" strokeWidth="1.5" fill="none" markerEnd="url(#arw-sci)"/>

            <defs>
              <marker id="arw-sci" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#374151"/>
              </marker>
            </defs>
          </svg>
          <figcaption>O ciclo do método científico hipotético-dedutivo: observação → hipótese → experimento → análise → teoria ou refutação.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Popper</span>
        <h2>2. Karl Popper: Falsificabilidade e Demarcação Científica</h2>
        <p>
          Karl Popper (1902–1994) propôs o <strong>critério de falsificabilidade</strong> como o
          que distingue a ciência da pseudociência. Uma teoria é científica se, e somente se, é
          possível conceber um experimento ou observação que poderia refutá-la.
        </p>
        <p>
          Exemplos: "Todos os corvos são negros" é falsificável — basta encontrar um corvo não-negro.
          "Tudo acontece por vontade divina" não é falsificável — qualquer acontecimento pode ser
          interpretado como vontade divina. Portanto, a segunda não é científica (embora possa ser
          verdadeira ou importante em outros sentidos).
        </p>
        <div className="lesson-highlight">
          <h3>Popper e a Psicanálise / Marxismo</h3>
          <p>
            Popper usou psicanálise e marxismo como exemplos de teorias não-falsificáveis. Ambas
            parecem explicar tudo: qualquer comportamento pode ser interpretado como expressão do
            inconsciente; qualquer evento histórico pode ser lido como expressão da luta de classes.
            Exatamente por explicar tudo, não arriscam nada — e por isso não são científicas no
            sentido popperiano. (Popper reconhecia que podem ter valor filosófico ou literário.)
          </p>
        </div>
        <p>
          Para Popper, a ciência avança por <strong>tentativa e erro</strong>: propõe hipóteses
          ousadas e as submete a testes rigorosos. As hipóteses que sobrevivem aos testes são
          corroboradas (mas jamais definitivamente provadas). A ciência é sempre provisória —
          qualquer teoria pode ser derrubada por novas evidências.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Kuhn</span>
        <h2>3. Thomas Kuhn: Paradigmas e Revoluções Científicas</h2>
        <p>
          Thomas Kuhn (1922–1996), em <em>A Estrutura das Revoluções Científicas</em> (1962),
          revolucionou a filosofia da ciência ao mostrar que a ciência não avança de forma linear
          e cumulativa — ela passa por <strong>rupturas radicais</strong> chamadas de
          <strong> revoluções científicas</strong>.
        </p>
        <p>
          O conceito central é o de <strong>paradigma</strong>: um conjunto de teorias, métodos,
          exemplos e pressupostos compartilhados por uma comunidade científica em determinado período.
          O paradigma define o que é um problema legítimo, quais métodos são aceitos e o que conta
          como solução. A ciência "normal" trabalha dentro do paradigma — resolvendo quebra-cabeças
          sem questioná-lo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fase</th>
                <th>Características</th>
                <th>Exemplo histórico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ciência normal</strong></td>
                <td>Trabalho dentro do paradigma estabelecido; acumulação incremental</td>
                <td>Astronomia ptolomaica (geocentrismo)</td>
              </tr>
              <tr>
                <td><strong>Anomalias</strong></td>
                <td>Resultados que não se encaixam no paradigma; ignoradas ou minimizadas</td>
                <td>Órbitas planetárias que não encaixam no sistema ptolomaico</td>
              </tr>
              <tr>
                <td><strong>Crise</strong></td>
                <td>Acúmulo de anomalias; debate sobre o paradigma; alternativas surgem</td>
                <td>Debate sobre o geocentrismo no século XVI</td>
              </tr>
              <tr>
                <td><strong>Revolução</strong></td>
                <td>Novo paradigma substitui o anterior; nova visão de mundo</td>
                <td>Revolução Copernicana (heliocentrismo)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Feyerabend</span>
        <h2>4. Paul Feyerabend: "Tudo Vale" e a Crítica ao Método</h2>
        <p>
          Paul Feyerabend (1924–1994), em <em>Contra o Método</em> (1975), argumenta que a ciência
          não segue — e não deve seguir — um método único e fixo. Ao analisar episódios históricos
          de avanço científico (como Galileu), mostra que os cientistas frequentemente violaram as
          regras metodológicas estabelecidas para fazer suas descobertas.
        </p>
        <p>
          Sua posição é o <strong>anarquismo epistemológico</strong>: o único princípio que não
          inibe o progresso científico é "tudo vale" (<em>anything goes</em>). Feyerabend defende
          também o direito das tradições não-científicas (medicina alternativa, tradições indígenas)
          a existir e ser respeitadas — critica o imperialismo epistemológico da ciência ocidental.
        </p>
        <div className="lesson-highlight">
          <h3>O caso Galileu</h3>
          <p>
            Feyerabend mostra que Galileu, ao defender o heliocentrismo, usou retórica, apelos
            à autoridade e recursos não-metodológicos — não apenas a "razão pura". A beleza
            matemática do sistema copernicano o convenceu antes das evidências observacionais
            serem decisivas. A ciência não é tão "racional" quanto sua imagem pública sugere.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Contemporaneidade</span>
        <h2>5. Ciência na Contemporaneidade: Desafios e Ameaças</h2>
        <p>
          A ciência contemporânea enfrenta desafios sérios:
        </p>
        <ul>
          <li>
            <strong>Negacionismo científico:</strong> rejeição de consensos científicos por motivos
            políticos, religiosos ou ideológicos. Negacionismo climático, antivacina, terraplanismo,
            criacionismo — todos ignoram evidências sistemáticas.
          </li>
          <li>
            <strong>Pseudociência:</strong> apresenta-se como ciência mas não satisfaz os critérios
            de falsificabilidade e revisão por pares — homeopatia, astrologia, grafologia.
          </li>
          <li>
            <strong>Pós-verdade:</strong> contexto em que fatos objetivos têm menos influência na
            formação da opinião pública do que apelos emocionais e crenças pré-formadas.
          </li>
          <li>
            <strong>Big data e IA:</strong> novas formas de produzir conhecimento, com desafios
            de transparência, interpretabilidade e viés.
          </li>
          <li>
            <strong>Crise de replicabilidade:</strong> muitos estudos científicos não se replicam
            quando repetidos, sugerindo problemas sistêmicos de metodologia e publicação.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tecnologia</span>
        <h2>6. Tecnologia como Questão Filosófica</h2>
        <p>
          A tecnologia não é apenas um conjunto de ferramentas neutras — ela transforma o mundo
          e os seres humanos. Dois pensadores fundamentais:
        </p>
        <ul>
          <li>
            <strong>Jacques Ellul</strong> (1912–1994): a <em>técnica</em> (a eficiência como valor
            supremo) tornou-se autônoma e domina todas as esferas da vida humana — política,
            educação, arte. O ser humano não mais controla a tecnologia; ela controla o ser humano.
          </li>
          <li>
            <strong>Martin Heidegger</strong>: a tecnologia moderna não é apenas um meio, mas uma
            forma de <em>revelar</em> o mundo — como "fundo de reserva" a ser explorado. A
            "essência da tecnologia" é o <em>Gestell</em> (armação): a tendência a tratar tudo
            (incluindo seres humanos) como recurso a ser calculado e otimizado.
          </li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Bachelard</span>
        <h2>7. Gaston Bachelard: Obstáculos Epistemológicos e a Ruptura Científica</h2>
        <p>
          Gaston Bachelard (1884–1962), filósofo francês, contribuiu com o conceito de
          <strong> obstáculo epistemológico</strong>: as resistências internas ao pensamento
          científico — não externas (como a falta de equipamentos) — que dificultam a produção
          de conhecimento genuíno. O maior inimigo do conhecimento científico não é a ignorância,
          mas o <em>conhecimento anterior mal feito</em>.
        </p>
        <p>
          Para Bachelard, o conhecimento científico avança por <strong>rupturas</strong> com o
          senso comum e com as imagens pré-científicas. A água não "quer" subir para o alto; os
          astros não têm "influência" sobre o caráter humano; o fogo não é um "elemento" primitivo.
          O pensamento científico exige aprender a pensar contra si mesmo — destruir as intuições
          imediatas e reconfortantes.
        </p>
        <ul>
          <li><strong>Obstáculo da experiência primeira:</strong> achar que a observação imediata é suficiente para produzir ciência. O que vemos "a olho nu" é frequentemente enganoso.</li>
          <li><strong>Obstáculo substancialista:</strong> atribuir a fenômenos complexos uma substância simples como causa ("flogisto", "éter").</li>
          <li><strong>Obstáculo animista:</strong> explicar fenômenos naturais por analogia com a vida e a psicologia humana.</li>
          <li><strong>Obstáculo verbal:</strong> confundir a palavra (o nome do fenômeno) com sua explicação real.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Bachelard e Kuhn</h3>
          <p>
            A noção de "ruptura epistemológica" de Bachelard influenciou Louis Althusser (que a
            aplicou ao marxismo como ciência) e antecipou parcialmente a ideia de "revolução
            científica" de Kuhn. Ambos enfatizam que o progresso científico não é gradual e
            contínuo, mas envolve descontinuidades radicais que mudam a maneira de ver o problema.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Epistemologias</span>
        <h2>8. Ciência, Democracia e Diversidade Epistêmica</h2>
        <p>
          Uma questão filosófica contemporânea fundamental é a relação entre o conhecimento
          científico e outros saberes: tradições indígenas, conhecimentos populares, medicina
          tradicional. O debate opõe duas posições:
        </p>
        <ul>
          <li>
            <strong>Cientificismo:</strong> apenas o método científico ocidental moderno produz
            conhecimento válido. Outros saberes são superstição, tradição ou opinião — sem valor
            epistêmico autônomo.
          </li>
          <li>
            <strong>Epistemologias do Sul (Boaventura de Sousa Santos):</strong> o colonialismo
            epistemológico destruiu saberes não-ocidentais ("epistemicídio"). É preciso
            reconhecer a diversidade epistêmica — diferentes modos de conhecer o mundo — sem
            cair em relativismo absoluto. A "ecologia dos saberes" propõe um diálogo entre
            ciência e outros conhecimentos.
          </li>
        </ul>
        <p>
          No contexto do ENEM, essa tensão aparece em questões sobre: conhecimentos indígenas e
          biodiversidade; medicina tradicional vs. medicina científica; direitos intelectuais de
          comunidades sobre seus saberes; decolonialidade do conhecimento.
        </p>
        <div className="lesson-highlight">
          <h3>Democracia epistêmica</h3>
          <p>
            Philip Kitcher, em <em>Science in a Democratic Society</em> (2011), argumenta que em
            uma democracia, as decisões sobre o que pesquisar e como usar o conhecimento científico
            não devem ser exclusivas dos especialistas — mas devem incorporar os valores e
            prioridades de todos os cidadãos. Ciência democrática não é ciência "por votação",
            mas ciência cujos problemas e aplicações são democraticamente deliberados.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔬</span>
            <h3>Método Científico</h3>
            <p>Observação → hipótese → experimento → análise → teoria. Sempre provisório e autocorretivo.</p>
          </div>
          <div className="math-card">
            <span>❌</span>
            <h3>Popper: Falsificabilidade</h3>
            <p>Critério de demarcação: teoria científica deve ser refutável em princípio. Ciência avança por tentativa e erro.</p>
          </div>
          <div className="math-card">
            <span>🔄</span>
            <h3>Kuhn: Paradigmas</h3>
            <p>Ciência normal → anomalias → crise → revolução → novo paradigma. Não é acumulação linear.</p>
          </div>
          <div className="math-card">
            <span>🌀</span>
            <h3>Feyerabend</h3>
            <p>"Anything goes": não há método único. Anarquismo epistemológico. Respeito a saberes alternativos.</p>
          </div>
          <div className="math-card">
            <span>⚠️</span>
            <h3>Negacionismo</h3>
            <p>Rejeição de consensos científicos por motivos não-científicos. Pós-verdade e pseudociência.</p>
          </div>
          <div className="math-card">
            <span>⚙️</span>
            <h3>Filosofia da Técnica</h3>
            <p>Ellul: técnica autônoma domina o humano. Heidegger: tecnologia como modo de revelar o mundo como recurso.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Falsificabilidade de Popper"
          statement={<p>Segundo Karl Popper, uma teoria é científica se:</p>}
          options={[
            { letter: "a", text: "For provada verdadeira por um número suficiente de experimentos e observações." },
            { letter: "b", text: "For aceita pelo consenso da maioria dos cientistas em determinada época." },
            { letter: "c", text: "For possível conceber uma observação ou experimento que, em princípio, poderia refutá-la.", correct: true },
            { letter: "d", text: "For capaz de explicar todos os fenômenos relacionados ao seu objeto de estudo." },
          ]}
          resolution={<p>Popper propõe a <strong>falsificabilidade</strong> como critério de demarcação entre ciência e não-ciência: uma teoria é científica se existe a possibilidade lógica de ser refutada. "Todos os corvos são negros" é falsificável; "tudo é vontade divina" não é. Importante: falsificável não significa falsa — significa que pode ser testada e potencialmente derrubada. Uma teoria que sobrevive a muitos testes rigorosos é bem corroborada, mas nunca definitivamente provada.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Paradigmas de Thomas Kuhn"
          statement={<p>No modelo de Kuhn, uma "revolução científica" ocorre quando:</p>}
          options={[
            { letter: "a", text: "Um cientista genial descobre uma verdade que resolve todos os problemas da área." },
            { letter: "b", text: "O acúmulo de anomalias leva ao abandono do paradigma vigente e à adoção de um novo.", correct: true },
            { letter: "c", text: "Novas tecnologias permitem realizar experimentos impossíveis no período anterior." },
            { letter: "d", text: "O método científico é aperfeiçoado para eliminar todos os erros do processo anterior." },
          ]}
          resolution={<p>Para Kuhn, as <strong>revoluções científicas</strong> ocorrem quando o paradigma dominante acumula tantas anomalias que não consegue mais resolvê-las adequadamente. Isso gera uma crise, durante a qual alternativas surgem e competem. A revolução é a substituição do paradigma antigo por um novo — como o heliocentrismo substituiu o geocentrismo, ou a relatividade e a mecânica quântica substituíram a física newtoniana em seus domínios. Os paradigmas são "incomensuráveis" — não é fácil comparar porque adotam visões de mundo diferentes.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Kuhn vs. Popper"
          statement={<p>Uma diferença fundamental entre Popper e Kuhn na filosofia da ciência é que:</p>}
          options={[
            { letter: "a", text: "Popper acredita que a ciência progride gradualmente, enquanto Kuhn defende rupturas revolucionárias.", correct: true },
            { letter: "b", text: "Popper rejeita o método científico, enquanto Kuhn o defende como critério de demarcação." },
            { letter: "c", text: "Kuhn acredita que a verdade científica é absoluta, enquanto Popper a vê como provisória." },
            { letter: "d", text: "Popper analisa a história real da ciência, enquanto Kuhn formula critérios lógicos abstratos." },
          ]}
          resolution={<p>Para <strong>Popper</strong>, a ciência avança de forma linear por tentativa e erro: hipóteses são propostas, testadas e refutadas, e o conhecimento cresce cumulativamente. Para <strong>Kuhn</strong>, a ciência avança por rupturas não-lineares: longos períodos de "ciência normal" são interrompidos por revoluções que mudam completamente o enquadramento conceitual. Kuhn também deu muito mais importância à dimensão social e histórica da ciência (a comunidade científica como grupo sociológico).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Negacionismo Científico"
          statement={
            <p>
              Apesar do consenso científico estabelecido pelo IPCC (Painel Intergovernamental sobre Mudanças Climáticas) — baseado em mais de 14.000 estudos — de que as mudanças climáticas são causadas pela ação humana, grupos organizados financiados por setores da indústria de combustíveis fósseis promoveram dúvidas sobre esse consenso, utilizando mídias sociais e porta-vozes sem qualificação científica.<br/><br/>
              Do ponto de vista da filosofia da ciência, esse fenômeno ilustra:
            </p>
          }
          options={[
            { letter: "a", text: "Uma revolução científica no sentido de Kuhn, em que um novo paradigma compete com o estabelecido." },
            { letter: "b", text: "A aplicação legítima do critério de falsificabilidade de Popper ao consenso científico sobre o clima." },
            { letter: "c", text: "O negacionismo científico: rejeição de consensos baseados em evidências por razões não-científicas (interesses econômicos e políticos).", correct: true },
            { letter: "d", text: "O anarquismo epistemológico de Feyerabend: todas as formas de conhecimento têm igual validade." },
          ]}
          resolution={<p>O <strong>negacionismo científico</strong> difere do ceticismo científico legítimo: este questiona dentro das normas da ciência (propõe hipóteses alternativas falsificáveis, publica em periódicos revisados por pares); aquele rejeita consensos científicos por razões ideológicas, políticas ou econômicas, usando estratégias de desinformação. O caso das mudanças climáticas é o exemplo mais documentado: a indústria de combustíveis fósseis financiou sistematicamente a criação de "dúvida" sobre consenso científico robusto — estratégia similar à usada pela indústria do tabaco nos anos 1950-70.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Tecnologia e Sociedade"
          statement={
            <p>
              "A técnica é um fenômeno totalmente autônomo que se desenvolve por suas próprias leis [...] O ser humano deixou de ser o mestre da técnica para tornar-se seu servo mais inconsciente." (Jacques Ellul, <em>A Técnica ou o Desafio do Século</em>)<br/><br/>
              A crítica de Ellul à tecnologia moderna fundamenta-se na ideia de que:
            </p>
          }
          options={[
            { letter: "a", text: "A tecnologia é intrinsecamente maléfica e deve ser rejeitada em favor de modos de vida tradicionais." },
            { letter: "b", text: "A eficiência técnica tornou-se um valor autônomo que escapa ao controle humano e coloniza todas as esferas da vida.", correct: true },
            { letter: "c", text: "O desenvolvimento tecnológico deve ser acelerado para liberar os seres humanos do trabalho manual." },
            { letter: "d", text: "Somente os países desenvolvidos têm capacidade de controlar adequadamente o avanço tecnológico." },
          ]}
          resolution={<p>Ellul não condena a tecnologia em si, mas analisa como a <strong>lógica da técnica</strong> — a busca incessante pela eficiência e pelo melhor meio para qualquer fim — tornou-se autônoma e invadiu todas as esferas da vida humana: política, educação, arte, religião, medicina. Os seres humanos, em vez de controlarem a técnica, passam a ser controlados por ela — adaptando-se às suas exigências. É uma forma de dominação nova, diferente das formas políticas clássicas, mas talvez mais profunda porque é aceita como "natural" e "inevitável".</p>}
        />
      </section>
    </article>
  );
}
