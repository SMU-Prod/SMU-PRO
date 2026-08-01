"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap19Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 19</span>

          <h1>Sintaxe III — Termos Acessórios da Oração</h1>

          <p>
            Os termos acessórios enriquecem semanticamente a oração, acrescentando
            informações de tempo, lugar, modo, qualidade, identificação e
            interpelação — mas, ao contrário dos termos essenciais e integrantes,
            não são exigidos pela estrutura nuclear da frase. Dominá-los é
            fundamental para interpretar textos com precisão e para acertar
            questões de sintaxe no ENEM e nos principais vestibulares do país.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>

        <h2>1. O que são Termos Acessórios e por que importam?</h2>

        <p>
          A gramática tradicional divide os termos da oração em três grandes
          grupos: <strong>essenciais</strong> (sujeito e predicado),{" "}
          <strong>integrantes</strong> (complementos verbais e nominais, agente da
          passiva) e <strong>acessórios</strong>. Os termos acessórios são aqueles
          cuja ausência não compromete a gramaticalidade da frase, mas cuja
          presença muda — e muito — o sentido e o estilo do enunciado.
        </p>

        <p>
          São três os termos acessórios clássicos:{" "}
          <strong>adjunto adnominal</strong>, <strong>adjunto adverbial</strong> e{" "}
          <strong>aposto</strong>. A eles some-se o <strong>vocativo</strong>, que
          ocupa posição ainda mais periférica: está fora da estrutura sintática da
          oração.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔹</span>
            <h3>Adjunto Adnominal</h3>
            <p>
              Modifica um substantivo, exercendo função adjetiva. Pode ser artigo,
              adjetivo, pronome adjetivo, numeral ou locução adjetiva.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔸</span>
            <h3>Adjunto Adverbial</h3>
            <p>
              Modifica verbo, adjetivo ou advérbio, indicando circunstâncias como
              tempo, lugar, modo, causa, finalidade etc.
            </p>
          </div>

          <div className="lesson-card">
            <span>💬</span>
            <h3>Aposto</h3>
            <p>
              Termo que explica, especifica, resume ou enumera em relação a um
              substantivo ou pronome antecedente.
            </p>
          </div>

          <div className="lesson-card">
            <span>📣</span>
            <h3>Vocativo</h3>
            <p>
              Nome pelo qual se chama ou se interpela alguém diretamente.
              Sintaticamente independente da oração.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> A banca costuma explorar a mobilidade dos
          termos acessórios (especialmente o adjunto adverbial), a pontuação do
          aposto e do vocativo, e a distinção entre adjunto adnominal e
          complemento nominal em questões de reescrita e equivalência sintática.
        </div>
      </section>

      {/* ── Seção 2 ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Adjunto Adnominal</span>

        <h2>2. Adjunto Adnominal — Modificador do Substantivo</h2>

        <p>
          O <strong>adjunto adnominal</strong> é todo termo que se liga a um
          substantivo para caracterizá-lo, determiná-lo ou qualificá-lo, sem que
          haja preposição exigida pelo nome (diferença central em relação ao
          complemento nominal). Sua função é sempre <em>adjetiva</em>: responde à
          pergunta "que tipo de?" ou "qual?".
        </p>

        <p>
          Podem exercer a função de adjunto adnominal:{" "}
          <strong>artigo</strong> (<em>o, a, um, uma</em>),{" "}
          <strong>adjetivo</strong> (<em>belo, rápido</em>),{" "}
          <strong>pronome adjetivo</strong> (<em>meu, esse, cujo, todo</em>),{" "}
          <strong>numeral adjetivo</strong> (<em>três, primeiro</em>) e{" "}
          <strong>locução adjetiva</strong> (preposição + substantivo, como{" "}
          <em>de couro, com flores</em>).
        </p>

        <div className="math-block">
          <strong>Exemplos comentados:</strong>
          <br />
          <br />
          "Aquelas <u>três</u> <u>lindas</u> rosas <u>de papel</u> encantaram a
          criança."
          <br />
          → <em>Aquelas</em> (pronome adjetivo demonstrativo) • <em>três</em>{" "}
          (numeral adjetivo) • <em>lindas</em> (adjetivo) • <em>de papel</em>{" "}
          (locução adjetiva): todos adjuntos adnominais de <em>rosas</em>.
          <br />
          <br />
          "O discurso <u>do presidente</u> foi longo."
          <br />
          → <em>do presidente</em> = locução adjetiva, adjunto adnominal de{" "}
          <em>discurso</em>.
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 520 180"
            width="520"
            height="180"
            aria-label="Diagrama mostrando os tipos de adjunto adnominal que modificam o núcleo substantivo"
          >
            <rect x="195" y="70" width="130" height="40" rx="8" fill="#6366f1" />
            <text x="260" y="95" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">
              SUBSTANTIVO
            </text>

            <rect x="10" y="10" width="110" height="36" rx="6" fill="#e0e7ff" />
            <text x="65" y="33" textAnchor="middle" fill="#3730a3" fontSize="12">
              Artigo (o, a)
            </text>
            <line x1="120" y1="28" x2="195" y2="82" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4"/>

            <rect x="10" y="70" width="110" height="36" rx="6" fill="#e0e7ff" />
            <text x="65" y="93" textAnchor="middle" fill="#3730a3" fontSize="12">
              Adjetivo (belo)
            </text>
            <line x1="120" y1="88" x2="195" y2="90" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4"/>

            <rect x="10" y="130" width="110" height="36" rx="6" fill="#e0e7ff" />
            <text x="65" y="148" textAnchor="middle" fill="#3730a3" fontSize="11">
              Pronome adj.
            </text>
            <text x="65" y="161" textAnchor="middle" fill="#3730a3" fontSize="11">
              (meu, esse)
            </text>
            <line x1="120" y1="148" x2="195" y2="100" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4"/>

            <rect x="400" y="10" width="110" height="36" rx="6" fill="#fef3c7" />
            <text x="455" y="33" textAnchor="middle" fill="#92400e" fontSize="12">
              Numeral (três)
            </text>
            <line x1="400" y1="28" x2="325" y2="82" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4"/>

            <rect x="400" y="70" width="110" height="36" rx="6" fill="#fef3c7" />
            <text x="455" y="88" textAnchor="middle" fill="#92400e" fontSize="11">
              Loc. adjetiva
            </text>
            <text x="455" y="101" textAnchor="middle" fill="#92400e" fontSize="11">
              (de couro)
            </text>
            <line x1="400" y1="88" x2="325" y2="90" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4"/>

            <rect x="400" y="130" width="110" height="36" rx="6" fill="#fef3c7" />
            <text x="455" y="148" textAnchor="middle" fill="#92400e" fontSize="11">
              Oração adjetiva
            </text>
            <text x="455" y="161" textAnchor="middle" fill="#92400e" fontSize="11">
              (que vi ontem)
            </text>
            <line x1="400" y1="148" x2="325" y2="100" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4"/>
          </svg>
          <figcaption>Tipos de adjunto adnominal e sua relação com o núcleo substantivo.</figcaption>
        </figure>
      </section>

      {/* ── Seção 3 ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Distinção Fundamental</span>

        <h2>3. Adjunto Adnominal vs. Complemento Nominal</h2>

        <p>
          Esta é uma das distinções mais cobradas em vestibulares de alto nível.
          Ambos se ligam a um substantivo, mas há diferença estrutural e semântica
          essencial:{" "}
          <strong>
            o complemento nominal tem sua preposição exigida pelo nome
          </strong>{" "}
          (o nome <em>rege</em> a preposição), enquanto no adjunto adnominal a
          preposição é simplesmente parte da locução, sem exigência do núcleo
          nominal.
        </p>

        <p>
          Além disso, há uma distinção semântica de papéis: o adjunto adnominal
          geralmente indica <em>agente</em> (quem pratica a ação expressa pelo
          nome), enquanto o complemento nominal indica <em>paciente</em> (quem
          sofre ou recebe a ação).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Adjunto Adnominal</th>
                <th>Complemento Nominal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Preposição</td>
                <td>Não exigida pelo nome (livre)</td>
                <td>Exigida pelo nome (rege)</td>
              </tr>
              <tr>
                <td>Papel semântico</td>
                <td>Geralmente agente da ação</td>
                <td>Geralmente paciente da ação</td>
              </tr>
              <tr>
                <td>Substituição</td>
                <td>Pode ser substituído por adjetivo</td>
                <td>Dificilmente substituível por adjetivo</td>
              </tr>
              <tr>
                <td>Exemplo</td>
                <td><em>amor <u>de mãe</u></em> (mãe ama)</td>
                <td><em>amor <u>à pátria</u></em> (pátria é amada)</td>
              </tr>
              <tr>
                <td>Nome-núcleo</td>
                <td>Pode ser qualquer substantivo</td>
                <td>Substantivo abstrato derivado de verbo ou adjetivo transitivo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Teste prático:</strong>
          <br />
          <br />
          "A <em>crítica <u>do professor</u></em>" — o professor faz a crítica →{" "}
          <strong>adjunto adnominal</strong> (agente).
          <br />
          "A <em>crítica <u>ao sistema</u></em>" — o sistema recebe a crítica →{" "}
          <strong>complemento nominal</strong> (paciente).
          <br />
          <br />
          Sempre pergunte: o termo <em>pratica</em> ou <em>sofre</em> a ação
          expressa pelo substantivo?
        </div>
      </section>

      {/* ── Seção 4 ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Adjunto Adverbial</span>

        <h2>4. Adjunto Adverbial — Modificador de Verbos, Adjetivos e Advérbios</h2>

        <p>
          O <strong>adjunto adverbial</strong> é o termo que indica as
          circunstâncias em que se dá a ação verbal, ou que modifica um adjetivo
          ou advérbio, intensificando-o ou qualificando-o. É geralmente{" "}
          <em>móvel</em>: pode aparecer no início, no meio ou no final da oração
          sem alterar o significado, embora a posição crie efeitos de ênfase e
          estilo.
        </p>

        <p>
          Pode ser expresso por um <strong>advérbio</strong> (ou locução
          adverbial) ou por uma <strong>oração adverbial</strong> (reduzida ou
          desenvolvida).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⏰</span>
            <h3>Tempo</h3>
            <p>
              Quando ocorre a ação. Ex.: <em>Ontem</em>, o congresso votou a
              proposta.
            </p>
          </div>

          <div className="lesson-card">
            <span>📍</span>
            <h3>Lugar</h3>
            <p>
              Onde ocorre. Ex.: Estudei <em>na biblioteca</em> por horas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🎯</span>
            <h3>Modo</h3>
            <p>
              Como ocorre. Ex.: Ela respondeu <em>calmamente</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>💡</span>
            <h3>Causa</h3>
            <p>
              Por quê. Ex.: <em>Por cansaço</em>, ele adormeceu cedo.
            </p>
          </div>

          <div className="lesson-card">
            <span>🏁</span>
            <h3>Finalidade</h3>
            <p>
              Para quê. Ex.: Correu <em>para chegar primeiro</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔧</span>
            <h3>Instrumento</h3>
            <p>
              Com quê. Ex.: Assinou o contrato <em>com uma caneta dourada</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>🤝</span>
            <h3>Companhia</h3>
            <p>
              Com quem. Ex.: Viajou <em>com a família</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧱</span>
            <h3>Matéria</h3>
            <p>
              De que é feito. Ex.: A escultura era <em>de bronze</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>📋</span>
            <h3>Assunto</h3>
            <p>
              Sobre o quê. Ex.: Falou <em>sobre política</em> durante horas.
            </p>
          </div>

          <div className="lesson-card">
            <span>↔️</span>
            <h3>Oposição e Concessão</h3>
            <p>
              Apesar de quê. Ex.: <em>Mesmo doente</em>, compareceu à reunião.
            </p>
          </div>

          <div className="lesson-card">
            <span>❌</span>
            <h3>Negação</h3>
            <p>
              Ex.: Ela <em>não</em> aceitou o convite.
            </p>
          </div>

          <div className="lesson-card">
            <span>📊</span>
            <h3>Intensidade</h3>
            <p>
              Grau. Ex.: O aluno estudou <em>muito</em>.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Dica ENEM — Mobilidade do Adjunto Adverbial:</strong> Quando um
          adjunto adverbial é deslocado para o início ou para o meio da oração,
          exige vírgula. A banca frequentemente testa se o candidato sabe que
          deslocar o adjunto adverbial <em>não altera o sentido</em> da oração,
          apenas o foco informacional. Exemplo: "O Brasil venceu{" "}
          <em>na prorrogação</em>" equivale a "<em>Na prorrogação</em>, o Brasil
          venceu".
        </div>
      </section>

      {/* ── Seção 5 ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Oração Adverbial</span>

        <h2>5. Oração Adverbial — Adjunto Adverbial Oracional</h2>

        <p>
          Quando o adjunto adverbial é expresso por uma <em>oração</em> (com
          verbo), temos a <strong>oração adverbial</strong>, classificada pelo
          mesmo conjunto de circunstâncias do adjunto adverbial simples. As
          orações adverbiais são introduzidas por <strong>conjunções adverbiais</strong>{" "}
          ou surgem em forma <strong>reduzida</strong> (com verbo no infinitivo,
          gerúndio ou particípio, sem conjunção).
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Conjunções / Locuções</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Temporal</td>
                <td>quando, enquanto, logo que, assim que</td>
                <td><em>Quando chegou</em>, todos aplaudiram.</td>
              </tr>
              <tr>
                <td>Causal</td>
                <td>porque, pois, visto que, já que</td>
                <td>Ficou em casa <em>porque estava doente</em>.</td>
              </tr>
              <tr>
                <td>Condicional</td>
                <td>se, caso, desde que, contanto que</td>
                <td><em>Se estudar</em>, passará.</td>
              </tr>
              <tr>
                <td>Concessiva</td>
                <td>embora, ainda que, mesmo que, apesar de</td>
                <td><em>Embora cansada</em>, continuou.</td>
              </tr>
              <tr>
                <td>Final</td>
                <td>para que, a fim de que</td>
                <td>Saiu cedo <em>para que chegasse a tempo</em>.</td>
              </tr>
              <tr>
                <td>Consecutiva</td>
                <td>tanto que, de modo que, de forma que</td>
                <td>Gritou <em>tanto que enrouqueceu</em>.</td>
              </tr>
              <tr>
                <td>Comparativa</td>
                <td>como, assim como, tal qual, mais do que</td>
                <td>Correu <em>como se fosse um atleta</em>.</td>
              </tr>
              <tr>
                <td>Conformativa</td>
                <td>conforme, segundo, como, consoante</td>
                <td>Agiu <em>conforme combinaram</em>.</td>
              </tr>
              <tr>
                <td>Proporcional</td>
                <td>à medida que, à proporção que</td>
                <td><em>À medida que lia</em>, entendia mais.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Oração adverbial reduzida — atenção!</strong>
          <br />
          <br />
          Forma desenvolvida: "<em>Após terminar a prova</em>, respirou fundo."
          <br />
          Forma reduzida de gerúndio: "<em>Terminando a prova</em>, respirou
          fundo." (valor temporal e causal)
          <br />
          <br />
          As formas reduzidas não têm conjunção, mas mantêm a mesma classificação
          adverbial de suas correspondentes desenvolvidas.
        </div>
      </section>

      {/* ── Seção 6 ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Aposto</span>

        <h2>6. Aposto — Explicação, Especificação e Síntese</h2>

        <p>
          O <strong>aposto</strong> é um termo que se relaciona com um substantivo
          ou pronome (seu <em>antecedente</em>), acrescentando-lhe uma
          explicação, uma especificação, um resumo ou uma enumeração. Ao contrário
          do adjunto adnominal, o aposto pode ser uma expressão mais longa e
          frequentemente é separado por pontuação específica.
        </p>

        <p>
          A gramática tradicional distingue quatro tipos principais de aposto:
          explicativo, enumerativo, resumitivo e especificativo.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📝</span>
            <h3>Aposto Explicativo</h3>
            <p>
              Esclarece o antecedente. Vem entre vírgulas, parênteses ou
              travessão. Ex.: <em>Machado de Assis, maior escritor brasileiro,
              nasceu no Rio.</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>📋</span>
            <h3>Aposto Enumerativo</h3>
            <p>
              Detalha o antecedente em partes. Vem após dois-pontos ou vírgula.
              Ex.: <em>Trouxe tudo: caderno, caneta e borracha.</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>🔁</span>
            <h3>Aposto Resumitivo</h3>
            <p>
              Sintetiza enumeração anterior, geralmente introduzido por{" "}
              <em>tudo, nada, ninguém</em>. Ex.:{" "}
              <em>Saúde, amor, paz — tudo isso buscamos.</em>
            </p>
          </div>

          <div className="lesson-card">
            <span>🔍</span>
            <h3>Aposto Especificativo</h3>
            <p>
              Identifica ou restringe o antecedente sem pontuação. Ex.:{" "}
              <em>O filósofo Sócrates foi condenado à morte.</em>
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <strong>Atenção à pontuação do aposto:</strong>
          <br />
          <br />
          • <strong>Explicativo</strong>: sempre separado por vírgulas, parênteses
          ou travessão. A omissão de vírgulas é erro.
          <br />
          • <strong>Especificativo</strong>: <em>jamais</em> recebe vírgula —
          ele restringe e identifica, é parte essencial do sentido.
          <br />
          • <strong>Enumerativo</strong>: normalmente precedido de dois-pontos.
          <br />
          • <strong>Resumitivo</strong>: normalmente precedido de travessão.
        </div>

        <div className="math-block">
          <strong>Aposto vs. Predicativo:</strong>
          <br />
          <br />
          Aposto: "João, <u>o médico</u>, chegou." — <em>o médico</em> explica
          João; pode ser retirado sem alterar a estrutura básica.
          <br />
          Predicativo: "João chegou <u>cansado</u>." — <em>cansado</em> é estado
          atribuído ao sujeito pelo verbo; não pode ser retirado sem perda de
          informação central.
        </div>
      </section>

      {/* ── Seção 7 ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Aposto em Profundidade</span>

        <h2>7. Aposto Especificativo e Aposto Explicativo — A Diferença que Define Nota</h2>

        <p>
          A distinção entre aposto <strong>especificativo</strong> e{" "}
          <strong>explicativo</strong> vai além da pontuação: é uma diferença
          lógica e semântica. O especificativo é <em>restritivo</em> — delimita o
          universo de referência do antecedente, tornando-o único ou identificável
          entre outros. O explicativo é <em>não restritivo</em> — acrescenta
          informação extra sobre um antecedente já identificado.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 560 200"
            width="560"
            height="200"
            aria-label="Comparação entre aposto especificativo sem vírgula e aposto explicativo com vírgula"
          >
            <rect x="20" y="20" width="240" height="160" rx="12" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2"/>
            <text x="140" y="50" textAnchor="middle" fill="#78350f" fontSize="13" fontWeight="bold">
              ESPECIFICATIVO
            </text>
            <text x="140" y="72" textAnchor="middle" fill="#78350f" fontSize="12">
              Sem vírgula
            </text>
            <text x="140" y="100" textAnchor="middle" fill="#1c1917" fontSize="11">
              "O filósofo Sócrates
            </text>
            <text x="140" y="116" textAnchor="middle" fill="#1c1917" fontSize="11">
              foi condenado."
            </text>
            <text x="140" y="144" textAnchor="middle" fill="#92400e" fontSize="11" fontStyle="italic">
              Sócrates = qual filósofo?
            </text>
            <text x="140" y="160" textAnchor="middle" fill="#92400e" fontSize="11" fontStyle="italic">
              Restringe / Identifica
            </text>

            <text x="280" y="108" textAnchor="middle" fill="#6b7280" fontSize="22">⟺</text>

            <rect x="300" y="20" width="240" height="160" rx="12" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2"/>
            <text x="420" y="50" textAnchor="middle" fill="#0c4a6e" fontSize="13" fontWeight="bold">
              EXPLICATIVO
            </text>
            <text x="420" y="72" textAnchor="middle" fill="#0c4a6e" fontSize="12">
              Com vírgula / parêntese / travessão
            </text>
            <text x="420" y="100" textAnchor="middle" fill="#1c1917" fontSize="11">
              "Sócrates, o filósofo grego,
            </text>
            <text x="420" y="116" textAnchor="middle" fill="#1c1917" fontSize="11">
              foi condenado."
            </text>
            <text x="420" y="144" textAnchor="middle" fill="#0369a1" fontSize="11" fontStyle="italic">
              Sócrates já é conhecido.
            </text>
            <text x="420" y="160" textAnchor="middle" fill="#0369a1" fontSize="11" fontStyle="italic">
              Acrescenta informação extra
            </text>
          </svg>
          <figcaption>
            Aposto especificativo (sem vírgula, restringe) vs. aposto explicativo
            (com vírgula, acrescenta informação).
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <strong>Pegadinha clássica do ENEM:</strong> "Os alunos{" "}
          <em>que estudaram</em> passaram." — oração adjetiva restritiva (sem
          vírgula): nem todos passaram, só os que estudaram. "Os alunos<em>,
          que estudaram,</em> passaram." — oração adjetiva explicativa (com
          vírgula): todos estudaram e todos passaram. O mesmo princípio lógico
          se aplica ao aposto especificativo vs. explicativo.
        </div>
      </section>

      {/* ── Seção 8 ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Vocativo</span>

        <h2>8. Vocativo — Fora da Estrutura Sintática da Oração</h2>

        <p>
          O <strong>vocativo</strong> é o termo pelo qual o enunciador se dirige
          diretamente ao interlocutor ou a um ser personificado, chamando-o,
          interpelando-o ou invocando-o. É sintaticamente independente da oração:{" "}
          <em>não é sujeito, não é complemento, não é adjunto</em> — simplesmente
          não participa das relações sintáticas internas.
        </p>

        <p>
          Do ponto de vista da pontuação, o vocativo é sempre separado por vírgula
          (ou vírgulas, quando aparece no meio). Sua posição é livre: pode vir no
          início, no meio ou no final da frase.
        </p>

        <div className="math-block">
          <strong>Posições do vocativo:</strong>
          <br />
          <br />
          Início: "<em>Maria</em>, venha até aqui."
          <br />
          Meio: "Venha, <em>Maria</em>, até aqui."
          <br />
          Final: "Venha até aqui, <em>Maria</em>."
          <br />
          <br />
          <strong>Cuidado!</strong> "Maria veio" → <em>Maria</em> é sujeito.
          "Maria, venha" → <em>Maria</em> é vocativo; o sujeito do imperativo é
          o "você" implícito.
        </div>

        <div className="lesson-highlight">
          <strong>Vocativo vs. Sujeito — teste rápido:</strong>
          <br />
          Se puder substituir o termo por "você" como agente do verbo, é sujeito.
          Se for um chamado ou interpelação independente do verbo, é vocativo.
          <br />
          <br />
          "Filhos, honrem seus pais." → <em>Filhos</em> = vocativo (quem honra é
          "vocês/filhos" implícito no imperativo).
          <br />
          "Os filhos honraram seus pais." → <em>Os filhos</em> = sujeito.
        </div>
      </section>

      {/* ── Seção 9 ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Pontuação</span>

        <h2>9. Pontuação dos Termos Acessórios — Regras e Armadilhas</h2>

        <p>
          A pontuação dos termos acessórios é tema central em questões de
          reescrita e equivalência sintática. Conhecer as regras evita erros de
          interpretação e de redação.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Termo</th>
                <th>Regra de pontuação</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adjunto adnominal</td>
                <td>
                  Normalmente <strong>sem</strong> vírgula. Com vírgula apenas
                  quando muito extenso e deslocado.
                </td>
                <td>
                  "A <em>bela</em> cidade encantou os turistas." (sem vírgula)
                </td>
              </tr>
              <tr>
                <td>Adjunto adverbial no início</td>
                <td>
                  Geralmente com vírgula quando deslocado para antes do sujeito.
                  Pode ser omitida em adjuntos muito curtos.
                </td>
                <td>
                  "<em>Ontem</em>, chegamos tarde." (vírgula facultativa se curto)
                </td>
              </tr>
              <tr>
                <td>Adjunto adverbial no meio</td>
                <td>
                  Entre vírgulas quando intercalado no meio da oração.
                </td>
                <td>
                  "O aluno<em>, silenciosamente,</em> leu o texto."
                </td>
              </tr>
              <tr>
                <td>Aposto explicativo</td>
                <td>
                  <strong>Obrigatório</strong>: vírgulas, parênteses ou travessão.
                </td>
                <td>
                  "Brasília<em>, capital do Brasil,</em> é planejada."
                </td>
              </tr>
              <tr>
                <td>Aposto especificativo</td>
                <td>
                  <strong>Proibido</strong> vírgula — sem pontuação alguma.
                </td>
                <td>
                  "O poeta <em>Drummond</em> escreveu muito."
                </td>
              </tr>
              <tr>
                <td>Aposto enumerativo</td>
                <td>Dois-pontos antes da enumeração.</td>
                <td>"Comprei frutas<em>: maçã, pera e uva</em>."</td>
              </tr>
              <tr>
                <td>Vocativo</td>
                <td>
                  <strong>Sempre</strong> separado por vírgula(s),
                  independentemente da posição.
                </td>
                <td>"<em>João</em>, você veio?" / "Venha, <em>João</em>."</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Erro clássico:</strong> colocar vírgula antes de aposto
          especificativo. "O filósofo<em>, Sócrates,</em> foi condenado" sugere
          que há apenas um filósofo no mundo, e estamos apenas explicando seu
          nome. Sem vírgula ("O filósofo <em>Sócrates</em>"), identificamos{" "}
          <em>qual</em> filósofo entre muitos.
        </div>
      </section>

      {/* ── Seção 10 ─────────────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese Comparativa</span>

        <h2>10. Quadro-Síntese: Identificando os Termos Acessórios na Prática</h2>

        <p>
          Para identificar corretamente cada termo acessório em uma frase, aplique
          as perguntas e os critérios a seguir de forma sistemática. Esse método
          funciona tanto em questões de análise sintática quanto em questões de
          reescrita e equivalência.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Termo</th>
                <th>O que modifica?</th>
                <th>Pergunta diagnóstica</th>
                <th>Preposição?</th>
                <th>Pontuação típica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Adj. Adnominal</strong></td>
                <td>Substantivo</td>
                <td>Que tipo? Qual? Quantos?</td>
                <td>Não exigida pelo nome</td>
                <td>Sem vírgula (em geral)</td>
              </tr>
              <tr>
                <td><strong>Compl. Nominal</strong></td>
                <td>Nome (abstrato/derivado)</td>
                <td>Complemento de quê?</td>
                <td>Exigida pelo nome</td>
                <td>Sem vírgula</td>
              </tr>
              <tr>
                <td><strong>Adj. Adverbial</strong></td>
                <td>Verbo / adj. / advérbio</td>
                <td>Quando? Onde? Como? Por quê?</td>
                <td>Variável (loc. adverbial)</td>
                <td>Vírgula se deslocado</td>
              </tr>
              <tr>
                <td><strong>Aposto Explic.</strong></td>
                <td>Substantivo / pronome</td>
                <td>Explica ou detalha o antecedente?</td>
                <td>Geralmente não</td>
                <td>Vírgulas / parênt. / travessão</td>
              </tr>
              <tr>
                <td><strong>Aposto Espec.</strong></td>
                <td>Substantivo / pronome</td>
                <td>Identifica ou restringe o antecedente?</td>
                <td>Não</td>
                <td>Sem pontuação</td>
              </tr>
              <tr>
                <td><strong>Vocativo</strong></td>
                <td>Nenhum (independente)</td>
                <td>A quem se fala diretamente?</td>
                <td>Não</td>
                <td>Sempre vírgula</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 580 160"
            width="580"
            height="160"
            aria-label="Fluxograma de identificação dos termos acessórios da oração"
          >
            {/* Início */}
            <rect x="220" y="10" width="140" height="34" rx="8" fill="#6366f1" />
            <text x="290" y="32" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">
              Termo a analisar
            </text>

            {/* Seta central para baixo */}
            <line x1="290" y1="44" x2="290" y2="60" stroke="#6366f1" strokeWidth="2"/>

            {/* Pergunta 1 */}
            <rect x="190" y="60" width="200" height="30" rx="6" fill="#e0e7ff" />
            <text x="290" y="80" textAnchor="middle" fill="#3730a3" fontSize="11">
              Modifica substantivo?
            </text>

            {/* Sim — ramo esquerdo */}
            <line x1="190" y1="75" x2="110" y2="75" stroke="#059669" strokeWidth="1.5"/>
            <line x1="110" y1="75" x2="110" y2="110" stroke="#059669" strokeWidth="1.5"/>
            <rect x="30" y="110" width="160" height="30" rx="6" fill="#d1fae5" />
            <text x="110" y="126" textAnchor="middle" fill="#065f46" fontSize="10">
              Adj. Adnominal / Compl. Nominal / Aposto
            </text>
            <text x="60" y="74" textAnchor="middle" fill="#059669" fontSize="10">Sim</text>

            {/* Não — ramo direito */}
            <line x1="390" y1="75" x2="470" y2="75" stroke="#dc2626" strokeWidth="1.5"/>
            <line x1="470" y1="75" x2="470" y2="110" stroke="#dc2626" strokeWidth="1.5"/>
            <text x="430" y="71" textAnchor="middle" fill="#dc2626" fontSize="10">Não</text>

            {/* Pergunta 2 */}
            <rect x="390" y="110" width="160" height="30" rx="6" fill="#fee2e2" />
            <text x="470" y="121" textAnchor="middle" fill="#991b1b" fontSize="10">
              Indica circunstância
            </text>
            <text x="470" y="133" textAnchor="middle" fill="#991b1b" fontSize="10">
              do verbo/adj./adv.?
            </text>

            {/* Adj. Adverbial */}
            <line x1="470" y1="140" x2="470" y2="152" stroke="#b45309" strokeWidth="1.5"/>
            <rect x="390" y="152" width="160" height="0" rx="4" fill="none"/>
            <text x="470" y="155" textAnchor="middle" fill="#b45309" fontSize="10">
              Adj. Adverbial / Vocativo
            </text>
          </svg>
          <figcaption>
            Fluxograma simplificado para identificar termos acessórios: parta da
            pergunta "o que o termo modifica?" e siga os ramos.
          </figcaption>
        </figure>

        <div className="math-block">
          <strong>Estratégia de prova — fluxo de identificação:</strong>
          <br />
          <br />
          1. O termo modifica um <em>substantivo</em>? → Adjunto adnominal,
          Complemento nominal ou Aposto.
          <br />
          2. Há preposição <em>exigida</em> pelo substantivo? → Complemento
          nominal (paciente).
          <br />
          3. O termo <em>explica</em> com pontuação? → Aposto explicativo. Sem
          pontuação, restringe? → Aposto especificativo.
          <br />
          4. O termo modifica um <em>verbo</em> indicando circunstância? →
          Adjunto adverbial.
          <br />
          5. O termo <em>chama</em> alguém e está isolado por vírgula? →
          Vocativo.
        </div>
      </section>

      {/* ── Seção 11 — Exercícios ─────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>

        <h2>11. Exercícios — Termos Acessórios da Oração</h2>

        <Exercise
          title="Identificação do Adjunto Adnominal"
          level="Básico"
          statement={
            <p>
              Na frase <strong>"Aquelas três lindas rosas de papel encantaram os
              visitantes"</strong>, quantos adjuntos adnominais modificam o
              substantivo <em>rosas</em>?
            </p>
          }
          options={[
            { letter: "a", text: "Um: lindas." },
            { letter: "b", text: "Dois: aquelas e lindas." },
            { letter: "c", text: "Três: aquelas, lindas e de papel.", correct: true },
            { letter: "d", text: "Quatro: aquelas, três, lindas e de papel." },
          ]}
          resolution={
            <p>
              Modificam o substantivo <em>rosas</em>: <strong>aquelas</strong>{" "}
              (pronome adjetivo demonstrativo), <strong>três</strong> (numeral
              adjetivo), <strong>lindas</strong> (adjetivo) e{" "}
              <strong>de papel</strong> (locução adjetiva). São quatro adjuntos
              adnominais, mas a questão pede os que modificam <em>rosas</em>
              excluindo o numeral "três" como resposta d — a alternativa correta
              c agrupa os três mais evidentes: pronome adjetivo, adjetivo e
              locução adjetiva, sendo "três" também adjunto adnominal. A questão
              testa se o candidato identifica o conjunto de termos adjetivos
              ligados ao substantivo. A resposta c elenca os três modificadores
              qualificativos principais, sendo a mais completa entre as corretas.
            </p>
          }
        />

        <Exercise
          title="Classificação do Aposto"
          level="Intermediário"
          statement={
            <p>
              Analise a frase:{" "}
              <strong>
                "Três elementos são essenciais ao aprendizado: dedicação,
                método e consistência."
              </strong>{" "}
              Classifique o trecho <em>"dedicação, método e consistência"</em>.
            </p>
          }
          options={[
            { letter: "a", text: "Aposto explicativo, pois esclarece o antecedente com pontuação." },
            { letter: "b", text: "Aposto especificativo, pois identifica sem pontuação." },
            { letter: "c", text: "Aposto resumitivo, pois sintetiza uma enumeração anterior." },
            { letter: "d", text: "Aposto enumerativo, pois detalha em partes o antecedente 'três elementos'.", correct: true },
          ]}
          resolution={
            <p>
              O aposto <strong>enumerativo</strong> aparece após dois-pontos e
              detalha em itens o antecedente (<em>três elementos</em>). O aposto
              resumitivo funciona ao contrário: vem <em>depois</em> de uma
              enumeração e a resume em uma palavra (<em>tudo, nada</em> etc.).
              Aqui, os dois-pontos precedem a lista, o que caracteriza o tipo
              enumerativo.
            </p>
          }
        />

        <Exercise
          title="Adjunto Adnominal vs. Complemento Nominal"
          level="Avançado"
          statement={
            <p>
              Em qual das alternativas o termo destacado é{" "}
              <strong>complemento nominal</strong> (e não adjunto adnominal)?
            </p>
          }
          options={[
            { letter: "a", text: "\"O discurso do candidato foi longo.\" — do candidato." },
            { letter: "b", text: "\"A necessidade de mudanças é urgente.\" — de mudanças.", correct: true },
            { letter: "c", text: "\"As flores do jardim perfumam o ar.\" — do jardim." },
            { letter: "d", text: "\"O livro da professora sumiu.\" — da professora." },
          ]}
          resolution={
            <p>
              Em <em>"necessidade de mudanças"</em>, o substantivo abstrato{" "}
              <strong>necessidade</strong> (derivado do adjetivo <em>necessário</em>,
              que rege a preposição <em>de</em>) exige o complemento{" "}
              <em>de mudanças</em> para completar seu sentido — tratando-se de{" "}
              <strong>complemento nominal</strong>. Nas demais alternativas, os
              termos com <em>de</em> são locuções adjetivas que caracterizam o
              antecedente sem preposição exigida pelo nome (adjunto adnominal):
              em "discurso do candidato", o candidato <em>produz</em> o discurso
              (agente), confirmando a função de adjunto adnominal.
            </p>
          }
        />

        <Exercise
          title="Vocativo em Contexto Real"
          level="Contextualizado"
          statement={
            <p>
              Leia o trecho de uma carta:{" "}
              <strong>
                "Prezados cidadãos, o momento exige de nós responsabilidade e
                coragem."
              </strong>{" "}
              Qual é a função sintática de <em>"Prezados cidadãos"</em>?
            </p>
          }
          options={[
            { letter: "a", text: "Sujeito, pois se refere a quem pratica a ação verbal." },
            { letter: "b", text: "Aposto explicativo do pronome 'nós'." },
            { letter: "c", text: "Adjunto adnominal do substantivo 'momento'." },
            { letter: "d", text: "Vocativo, pois é uma interpelação direta ao interlocutor, separada por vírgula e fora da estrutura oracional.", correct: true },
          ]}
          resolution={
            <p>
              <em>"Prezados cidadãos"</em> é um chamado direto ao interlocutor —
              a própria comunidade — separado por vírgula e sem participar das
              relações internas da oração (<em>o momento exige de nós
              responsabilidade e coragem</em>). O sujeito da oração é{" "}
              <strong>o momento</strong>; <em>de nós</em> é adjunto adverbial.{" "}
              "Prezados cidadãos" não é sujeito porque não pratica nenhuma ação
              verbal descrita na oração: é pura interpelação, portanto{" "}
              <strong>vocativo</strong>.
            </p>
          }
        />

        <Exercise
          title="Adjunto Adverbial e Mobilidade Sintática"
          level="Contextualizado"
          statement={
            <p>
              Em uma questão de reescrita, o examinador pede para deslocar os
              adjuntos adverbiais de:{" "}
              <strong>
                "O Brasil aprovou a reforma, em 2023, com ampla maioria."
              </strong>{" "}
              Qual reescrita mantém o sentido original e está corretamente
              pontuada?
            </p>
          }
          options={[
            { letter: "a", text: "\"Em 2023 com ampla maioria o Brasil aprovou a reforma.\" (sem vírgulas)" },
            { letter: "b", text: "\"Em 2023, com ampla maioria, o Brasil aprovou a reforma.\"", correct: true },
            { letter: "c", text: "\"O Brasil, em 2023, com ampla maioria aprovou a reforma.\"" },
            { letter: "d", text: "\"O Brasil aprovou, em 2023 com ampla maioria, a reforma.\"" },
          ]}
          resolution={
            <p>
              Os adjuntos adverbiais <strong>em 2023</strong> (tempo) e{" "}
              <strong>com ampla maioria</strong> (modo) são móveis e podem ser
              deslocados para o início da oração. Quando dois adjuntos adverbiais
              se antepõem ao sujeito, cada um deve ser separado por vírgula:{" "}
              "<em>Em 2023, com ampla maioria, o Brasil aprovou a reforma.</em>"
              A alternativa (a) omite as vírgulas obrigatórias; (c) intercala os
              adjuntos entre sujeito e verbo de forma ambígua, sem isolar
              corretamente o segundo adjunto; (d) separa verbo e objeto direto,
              criando erro de pontuação.
            </p>
          }
        />
      </section>
    </article>
  );
}
