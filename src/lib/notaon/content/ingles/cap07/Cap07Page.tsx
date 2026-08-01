"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap07Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Inglês • Capítulo 07</span>
          <h1>Artigos, substantivos, adjetivos e advérbios</h1>
          <p>
            As classes de palavras fundamentais do inglês — artigos, substantivos,
            adjetivos e advérbios — organizam a estrutura da frase e carregam as
            informações centrais de qualquer texto. Reconhecê-las permite localizar
            o tema, o agente, as qualidades e os modos de ação descritos, acelerando
            a interpretação mesmo sem entender cada palavra individualmente.
          </p>
          <p>
            Neste capítulo você vai dominar o uso de artigos definidos e indefinidos,
            entender as diferenças entre substantivos contáveis e incontáveis,
            aprender a posição e a comparação de adjetivos, e distinguir advérbios
            de frequência e modo — tudo com foco direto nas questões do ENEM.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Artigos</span>
        <h2>1. Artigos Definidos e Indefinidos</h2>
        <p>
          O inglês tem apenas três artigos: <em>a</em>, <em>an</em> e <em>the</em>.
          Mas a escolha entre eles é significativa: indica se o referente é conhecido
          ou novo no texto, específico ou genérico.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Artigo</th>
                <th>Tipo</th>
                <th>Quando usar</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>a</strong></td>
                <td>Indefinido</td>
                <td>Antes de substantivo com som de consoante; primeira menção; qualquer um do grupo</td>
                <td>a university, a scientist, a book</td>
              </tr>
              <tr>
                <td><strong>an</strong></td>
                <td>Indefinido</td>
                <td>Antes de substantivo com som de vogal; mesmos usos de "a"</td>
                <td>an idea, an hour, an elephant</td>
              </tr>
              <tr>
                <td><strong>the</strong></td>
                <td>Definido</td>
                <td>Referente específico já mencionado; único em seu contexto; superlativos</td>
                <td>the Amazon, the best solution, the study mentioned</td>
              </tr>
              <tr>
                <td><strong>zero (∅)</strong></td>
                <td>Ausência</td>
                <td>Substantivos incontáveis em geral; nomes próprios; conceitos abstratos em geral</td>
                <td>Water is essential. ∅ Scientists study ∅ climate.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Pista de leitura:</strong> Quando um texto apresenta <em>a/an</em>
          e depois usa <em>the</em> com o mesmo substantivo, o autor está retomando
          algo já introduzido. Isso ajuda a rastrear o fio narrativo do texto.
          Ex: "Scientists found <em>a</em> new virus. <em>The</em> virus spreads
          through air." (o vírus = o mesmo da frase anterior)
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Substantivos</span>
        <h2>2. Substantivos Contáveis e Incontáveis</h2>
        <p>
          A distinção entre substantivos <strong>contáveis</strong> (countable) e
          <strong> incontáveis</strong> (uncountable) afeta o uso de artigos,
          quantificadores e verbos — e aparece em questões de interpretação quando
          a quantidade ou a especificidade do referente é relevante.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔢</span>
            <h3>Contáveis</h3>
            <p>Têm singular e plural. Aceitam "a/an" e numerais. Ex: a book / two books, a study / three studies.</p>
          </div>
          <div className="lesson-card">
            <span>💧</span>
            <h3>Incontáveis</h3>
            <p>Não têm plural regular. Não aceitam "a/an". Ex: water, information, research, advice, knowledge.</p>
          </div>
          <div className="lesson-card">
            <span>📦</span>
            <h3>Quantificadores</h3>
            <p>Much/little para incontáveis; many/few para contáveis. Some/any funcionam com ambos.</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Cuidado</h3>
            <p>"Information" e "research" são incontáveis em inglês (≠ "informações" no plural em português).</p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Plural irregular</th>
                <th>Singular</th>
                <th>Plural</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Mudança vocálica</td><td>man, woman, foot, tooth</td><td>men, women, feet, teeth</td></tr>
              <tr><td>Terminação -f/-fe → -ves</td><td>leaf, life, knife</td><td>leaves, lives, knives</td></tr>
              <tr><td>Invariável</td><td>sheep, fish, species</td><td>sheep, fish, species</td></tr>
              <tr><td>Origem latina/grega</td><td>criterion, phenomenon, datum</td><td>criteria, phenomena, data</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Adjetivos</span>
        <h2>3. Adjetivos: Posição e Função</h2>
        <p>
          Em inglês, os adjetivos vêm <strong>antes do substantivo</strong> que
          qualificam — ao contrário do português, que geralmente os pospõe.
          Reconhecer a posição ajuda a identificar que palavra está sendo
          qualificada, especialmente em frases longas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Posição</th>
                <th>Estrutura</th>
                <th>Exemplo</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Atributiva (antes do subst.)</td>
                <td>adj + noun</td>
                <td>a significant discovery</td>
                <td>uma descoberta significativa</td>
              </tr>
              <tr>
                <td>Predicativa (depois do verbo)</td>
                <td>noun + verb + adj</td>
                <td>The discovery was significant.</td>
                <td>A descoberta foi significativa.</td>
              </tr>
              <tr>
                <td>Vários adjetivos</td>
                <td>ordem: opinião→tamanho→cor→origem</td>
                <td>a small, red, Brazilian flower</td>
                <td>uma pequena flor vermelha brasileira</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Adjetivos comuns em textos do ENEM: <em>significant, crucial, diverse,
          sustainable, controversial, effective, widespread, unprecedented, alarming,
          innovative</em>. Muitos são cognatos do português — reconhecê-los acelera
          a leitura.
        </p>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>4. Comparativos e Superlativos</h2>
        <p>
          Estruturas comparativas e superlativas aparecem em textos argumentativos,
          jornalísticos e científicos do ENEM — especialmente quando o autor
          compara dados, alternativas ou soluções.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Formação</th>
                <th>Exemplo</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Comparativo de superioridade</td>
                <td>adj + -er + than / more + adj + than</td>
                <td>cheaper than / more efficient than</td>
                <td>mais barato do que / mais eficiente do que</td>
              </tr>
              <tr>
                <td>Comparativo de igualdade</td>
                <td>as + adj + as</td>
                <td>as important as</td>
                <td>tão importante quanto</td>
              </tr>
              <tr>
                <td>Comparativo de inferioridade</td>
                <td>less + adj + than</td>
                <td>less effective than</td>
                <td>menos eficaz do que</td>
              </tr>
              <tr>
                <td>Superlativo</td>
                <td>the + adj + -est / the most + adj</td>
                <td>the fastest / the most sustainable</td>
                <td>o mais rápido / o mais sustentável</td>
              </tr>
              <tr>
                <td>Irregulares</td>
                <td>—</td>
                <td>good → better → the best / bad → worse → the worst</td>
                <td>bom → melhor → o melhor</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>No ENEM:</strong> Questões que pedem "o que o texto afirma sobre
          X em relação a Y" frequentemente testam se você identificou corretamente
          uma estrutura comparativa. Confundir comparativo com superlativo ou
          inverter a direção da comparação é um erro comum.
        </div>
      </section>

      {/* ── SEÇÃO 5 (SVG) ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>5. Mapa: Classes de Palavras e Função na Frase</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 240"
            aria-label="Mapa mostrando as classes de palavras e suas funções na estrutura da frase em inglês"
            role="img"
          >
            {/* Frase exemplo */}
            <rect x="20" y="10" width="660" height="40" rx="8" fill="#1e1b4b" />
            <text x="350" y="35" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">
              "The  significant  discovery  quickly  changed  our  understanding."
            </text>

            {/* Setas para baixo */}
            <line x1="80"  y1="50" x2="80"  y2="85" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,2" />
            <line x1="188" y1="50" x2="188" y2="85" stroke="#059669" strokeWidth="1.5" strokeDasharray="4,2" />
            <line x1="305" y1="50" x2="305" y2="85" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4,2" />
            <line x1="420" y1="50" x2="420" y2="85" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4,2" />
            <line x1="520" y1="50" x2="520" y2="85" stroke="#374151" strokeWidth="1.5" strokeDasharray="4,2" />

            {/* Rótulos */}
            <rect x="30"  y="85" width="100" height="44" rx="6" fill="#4f46e5" />
            <text x="80"  y="104" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">The</text>
            <text x="80"  y="120" textAnchor="middle" fill="#c7d2fe" fontSize="10">artigo definido</text>

            <rect x="138" y="85" width="100" height="44" rx="6" fill="#059669" />
            <text x="188" y="104" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">significant</text>
            <text x="188" y="120" textAnchor="middle" fill="#d1fae5" fontSize="10">adjetivo</text>

            <rect x="255" y="85" width="100" height="44" rx="6" fill="#dc2626" />
            <text x="305" y="104" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">discovery</text>
            <text x="305" y="120" textAnchor="middle" fill="#fecaca" fontSize="10">substantivo</text>

            <rect x="370" y="85" width="100" height="44" rx="6" fill="#d97706" />
            <text x="420" y="104" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">quickly</text>
            <text x="420" y="120" textAnchor="middle" fill="#fef3c7" fontSize="10">advérbio de modo</text>

            <rect x="470" y="85" width="100" height="44" rx="6" fill="#374151" />
            <text x="520" y="104" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">changed</text>
            <text x="520" y="120" textAnchor="middle" fill="#d1d5db" fontSize="10">verbo (passado)</text>

            {/* Tradução */}
            <rect x="20" y="155" width="660" height="36" rx="8" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="1" />
            <text x="350" y="178" textAnchor="middle" fill="#374151" fontSize="12">
              Tradução: "A descoberta significativa mudou rapidamente nossa compreensão."
            </text>

            {/* Nota */}
            <rect x="20" y="200" width="660" height="30" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1" />
            <text x="350" y="220" textAnchor="middle" fill="#713f12" fontSize="11">
              Note: adjetivo ANTES do substantivo (significant discovery) — oposto ao português (descoberta significativa)
            </text>
          </svg>
          <figcaption>Análise estrutural de uma frase típica de texto jornalístico em inglês. Identificar as classes de palavras revela o núcleo informacional da frase.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Advérbios de frequência</span>
        <h2>6. Advérbios de Frequência</h2>
        <p>
          Advérbios de frequência indicam com que regularidade algo acontece.
          Em textos descritivos e argumentativos do ENEM, eles qualificam
          afirmações e influenciam diretamente o sentido das alternativas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Advérbio</th>
                <th>Frequência</th>
                <th>Posição na frase</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>always</strong></td><td>100%</td><td>Antes do verbo principal</td><td>Scientists always verify their data.</td></tr>
              <tr><td><strong>usually / generally</strong></td><td>~80%</td><td>Antes do verbo principal</td><td>The results usually confirm the hypothesis.</td></tr>
              <tr><td><strong>often / frequently</strong></td><td>~60%</td><td>Antes do verbo principal</td><td>This problem often occurs in cities.</td></tr>
              <tr><td><strong>sometimes / occasionally</strong></td><td>~40%</td><td>Início ou antes do verbo</td><td>Sometimes, policies fail to address the root cause.</td></tr>
              <tr><td><strong>rarely / seldom</strong></td><td>~15%</td><td>Antes do verbo principal</td><td>These events rarely happen twice.</td></tr>
              <tr><td><strong>never</strong></td><td>0%</td><td>Antes do verbo principal</td><td>The government never acknowledged the problem.</td></tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <strong>Dica ENEM:</strong> Alternativas que generalizam com "always" ou
          "never" costumam ser incorretas no ENEM — o texto geralmente apresenta
          situações mais nuançadas. Fique atento a advérbios que transformam
          afirmações parciais em absolutas.
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Advérbios de modo</span>
        <h2>7. Advérbios de Modo: Sufixo -ly</h2>
        <p>
          A maioria dos advérbios de modo em inglês é formada pelo sufixo{" "}
          <em>-ly</em> adicionado ao adjetivo. Eles qualificam a ação do verbo
          e são muito comuns em textos argumentativos do ENEM para indicar como
          algo acontece ou quão intensamente.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Intensidade</h3>
            <p>significantly, dramatically, rapidly, drastically — indicam mudança intensa</p>
          </div>
          <div className="lesson-card">
            <span>🎯</span>
            <h3>Precisão</h3>
            <p>specifically, particularly, especially, precisely — indicam foco ou especificidade</p>
          </div>
          <div className="lesson-card">
            <span>📊</span>
            <h3>Avaliação</h3>
            <p>surprisingly, alarmingly, unfortunately, importantly — indicam julgamento do autor</p>
          </div>
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Conexão lógica</h3>
            <p>consequently, therefore, however, additionally — conectores disfarçados de advérbio</p>
          </div>
        </div>
        <p>
          Advérbios avaliativos como <em>alarmingly</em> ou <em>unfortunately</em>
          revelam o <strong>posicionamento do autor</strong> — uma das habilidades
          mais cobradas no ENEM (H30: reconhecer posicionamentos e argumentos).
        </p>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia</span>
        <h2>8. Adjetivo vs. Advérbio: Como Distinguir na Leitura</h2>
        <p>
          Confundir adjetivo e advérbio pode mudar completamente o sentido de
          uma frase. A distinção é simples: adjetivos qualificam substantivos;
          advérbios qualificam verbos, adjetivos ou outros advérbios.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Frase</th>
                <th>Palavra-chave</th>
                <th>Classe</th>
                <th>Qualifica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The <em>rapid</em> growth surprised experts.</td>
                <td>rapid</td>
                <td>Adjetivo</td>
                <td>Substantivo "growth"</td>
              </tr>
              <tr>
                <td>The economy grew <em>rapidly</em>.</td>
                <td>rapidly</td>
                <td>Advérbio</td>
                <td>Verbo "grew"</td>
              </tr>
              <tr>
                <td>The study is <em>significant</em>.</td>
                <td>significant</td>
                <td>Adjetivo predicativo</td>
                <td>Substantivo "study" (via verbo de ligação)</td>
              </tr>
              <tr>
                <td>The data changed <em>significantly</em>.</td>
                <td>significantly</td>
                <td>Advérbio</td>
                <td>Verbo "changed"</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Resumo prático:</strong> Se a palavra termina em <em>-ly</em> e
          está próxima de um verbo, é quase certamente um advérbio. Se não termina
          em <em>-ly</em> e está imediatamente antes de um substantivo, é
          provavelmente um adjetivo. Essas duas regras rápidas resolvem a maioria
          dos casos no ENEM.
        </div>
      </section>

      {/* ── SEÇÃO EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="Artigo definido vs. indefinido"
          statement={
            <div>
              <p>Leia o trecho:</p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Researchers discovered <strong>a</strong> new treatment for
                diabetes last year. <strong>The</strong> treatment uses a
                combination of proteins found in tropical plants."
              </p>
              <p>
                A mudança do artigo <em>a</em> para <em>the</em> ao longo do
                texto indica que:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "O segundo tratamento é diferente do primeiro mencionado." },
            { letter: "B", text: "O tratamento com 'the' é mais importante do que o com 'a'." },
            { letter: "C", text: "Na primeira menção, o tratamento é novo para o leitor; na segunda, já é conhecido pelo contexto e identificado como o mesmo.", correct: true },
            { letter: "D", text: "O artigo 'the' indica que o tratamento é único no mundo." },
            { letter: "E", text: "O artigo 'a' indica que há vários tratamentos; 'the' indica que só há um." },
          ]}
          resolution={
            <p>
              O uso de <em>a</em> na primeira menção indica que o referente é novo
              na conversa — o leitor ainda não sabe de qual tratamento se trata. Na
              segunda frase, <em>the</em> retoma o mesmo tratamento, agora já
              identificado pelo contexto. Esse é o padrão de introdução e retomada
              de referentes — uma das funções mais importantes dos artigos em inglês
              e uma pista de coesão textual frequente no ENEM.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Adjetivo e posição na frase"
          statement={
            <p>
              Em qual das alternativas o adjetivo está sendo usado de forma
              <strong> atributiva</strong> (antes do substantivo que qualifica)?
            </p>
          }
          options={[
            { letter: "A", text: "The results were alarming." },
            { letter: "B", text: "The situation became critical." },
            { letter: "C", text: "An alarming increase in temperatures was recorded.", correct: true },
            { letter: "D", text: "Scientists consider the findings controversial." },
            { letter: "E", text: "The water supply remains insufficient." },
          ]}
          resolution={
            <p>
              Na alternativa C, <em>alarming</em> vem imediatamente antes do
              substantivo <em>increase</em>, qualificando-o diretamente — isso é
              uso atributivo. Nas demais, os adjetivos estão na posição predicativa
              (depois de verbos de ligação como <em>were, became, remains</em>) ou
              são complemento de verbos como <em>consider</em>. A distinção entre
              posição atributiva e predicativa é relevante para interpretar o papel
              do adjetivo na frase.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Comparativo e sentido"
          statement={
            <div>
              <p>Leia o trecho:</p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Renewable energy sources are becoming <strong>increasingly more
                affordable</strong> than fossil fuels, making the transition to
                clean energy <strong>more feasible than ever</strong>."
              </p>
              <p>
                Com base nas estruturas comparativas, o que o texto afirma?
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "A energia renovável já é mais barata do que os combustíveis fósseis desde sempre." },
            { letter: "B", text: "Os combustíveis fósseis são mais acessíveis do que as fontes renováveis." },
            { letter: "C", text: "A transição para energia limpa está se tornando progressivamente mais viável à medida que a energia renovável fica mais acessível.", correct: true },
            { letter: "D", text: "A energia renovável é tão acessível quanto os combustíveis fósseis atualmente." },
            { letter: "E", text: "A transição para energia limpa já foi concluída com sucesso." },
          ]}
          resolution={
            <p>
              <em>Increasingly more affordable</em> indica um processo gradual e
              crescente (não um estado fixo — elimina A). <em>More affordable than
              fossil fuels</em> compara renováveis com fósseis no sentido de que
              renováveis estão ficando mais baratas (elimina B e D). <em>More
              feasible than ever</em> indica o grau máximo atingido até agora,
              mas não que já foi concluída (elimina E). A alternativa C captura o
              sentido de processo em andamento e progressivo.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Advérbio avaliativo e posicionamento do autor"
          statement={
            <div>
              <p>
                <em>(Baseado em situação típica do ENEM)</em>
              </p>
              <p style={{ fontStyle: "italic", background: "#f3f4f6", padding: "12px", borderRadius: "6px" }}>
                "Deforestation rates in the Amazon have risen <strong>alarmingly</strong>{" "}
                in the past decade. <strong>Unfortunately</strong>, current policies
                have proven insufficient to reverse this trend."
              </p>
              <p>
                O uso dos advérbios em destaque revela que o autor do texto:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Apresenta os dados de forma neutra, sem emitir julgamento sobre a situação." },
            { letter: "B", text: "Defende que as políticas atuais são suficientes para combater o desmatamento." },
            { letter: "C", text: "Demonstra preocupação e avalia negativamente tanto o aumento do desmatamento quanto a ineficácia das políticas.", correct: true },
            { letter: "D", text: "Acredita que a situação melhorará naturalmente com o tempo." },
            { letter: "E", text: "Critica especificamente o governo brasileiro, culpando-o pelo desmatamento." },
          ]}
          resolution={
            <p>
              <em>Alarmingly</em> expressa que o aumento é preocupante — não é um
              advérbio neutro, mas avaliativo. <em>Unfortunately</em> reforça o
              lamento do autor pela insuficiência das políticas. Juntos, esses
              advérbios revelam o <strong>posicionamento do autor</strong>: ele
              está preocupado e avalia negativamente a situação. Identificar esse
              tipo de marca linguística do posicionamento é a habilidade H30 da
              matriz de referência do ENEM.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="Substantivo incontável em texto"
          statement={
            <div>
              <p>
                Um estudante lê: <em>"The government released new <strong>information</strong>{" "}
                about the policy, but activists say the <strong>data</strong> is
                incomplete."</em>
              </p>
              <p>
                Sobre as palavras <em>information</em> e <em>data</em> nesse contexto:
              </p>
            </div>
          }
          options={[
            { letter: "A", text: "Ambas são substantivos contáveis no plural, equivalentes a 'informações' e 'dados' em português." },
            { letter: "B", text: "Information é contável (pode-se dizer 'an information'); data é incontável." },
            { letter: "C", text: "Ambas são substantivos incontáveis em inglês — não se diz 'an information' nem 'a data', e o verbo concorda no singular.", correct: true },
            { letter: "D", text: "Information é incontável, mas data é sempre plural e exige verbo no plural ('data are')." },
            { letter: "E", text: "As duas palavras são contáveis, mas perdem o plural nesse contexto por razões estilísticas." },
          ]}
          resolution={
            <p>
              <em>Information</em> é classicamente incontável em inglês — nunca
              se usa <em>an information</em> ou <em>informations</em>. <em>Data</em>
              tem uso em transição: no inglês formal científico, <em>data</em> é
              plural de <em>datum</em> ("data are"); no inglês cotidiano e jornalístico
              moderno, já é tratado como incontável singular ("data is"). A frase do
              texto usa "data is", padrão jornalístico atual. A alternativa C é a
              mais precisa para o contexto do ENEM, que reflete o inglês de uso real.
            </p>
          }
        />
      </section>
    </article>
  );
}
