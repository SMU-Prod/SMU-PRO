"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap08Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 8</span>

          <h1>Ambiguidade e Polissemia</h1>

          <p>
            As palavras raramente têm um único sentido fixo: elas acumulam
            história, se multiplicam em contextos distintos e, às vezes,
            tornam uma frase inteira escorregadia. Entender polissemia,
            homonímia, ambiguidade e as relações semânticas entre palavras é
            fundamental para ler textos com precisão — e para o ENEM, que
            explora esses fenômenos em publicidade, charges, poesia e
            questões de interpretação.
          </p>
        </div>
      </section>

      {/* ───────────────────────────── 1. Polissemia ───────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Semântica Lexical</span>

        <h2>1. Polissemia — Uma Palavra, Muitos Sentidos</h2>

        <p>
          <strong>Polissemia</strong> (do grego <em>polys</em> = muitos +{" "}
          <em>sema</em> = sinal) é o fenômeno pelo qual uma única palavra
          adquire, ao longo do tempo, múltiplos sentidos relacionados entre
          si por extensão metafórica, metonímica ou por uso recorrente em
          contextos diferentes.
        </p>

        <p>
          O ponto central é que os vários sentidos de uma palavra polissêmica
          compartilham uma <strong>origem comum</strong> — eles se ramificaram
          a partir de um núcleo semântico original. Isso diferencia a
          polissemia da homonímia, conforme veremos adiante.
        </p>

        <div className="math-block">
          <h3>Exemplo clássico: "banco"</h3>
          <p>
            A palavra <strong>banco</strong> é o exemplo mais citado em
            vestibulares. Seus sentidos principais:
          </p>
          <ul>
            <li>
              <strong>Banco</strong> (assento): "Sentei no banco da praça."
            </li>
            <li>
              <strong>Banco</strong> (instituição financeira): "Fui ao banco
              sacar dinheiro."
            </li>
            <li>
              <strong>Banco</strong> (reservatório de dados): "banco de dados",
              "banco de sangue".
            </li>
            <li>
              <strong>Banco</strong> (cardume denso de peixes): "O pescador
              encontrou um banco de sardinhas."
            </li>
          </ul>
          <p>
            Todos esses sentidos partem de uma ideia primitiva de "suporte" ou
            "base". A instituição financeira, por exemplo, ganhou esse nome
            porque os cambistas medievais realizavam negócios sentados em
            bancos de madeira.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌊</span>
            <h3>Extensão metafórica</h3>
            <p>
              O sentido se amplia por semelhança: "pé" da mesa vem do "pé"
              humano, por analogia de forma e função de suporte.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔄</span>
            <h3>Extensão metonímica</h3>
            <p>
              O sentido se amplia por contiguidade: "cabeça" pode significar
              a pessoa inteira ("cabeça de gado") ou inteligência ("use a
              cabeça").
            </p>
          </div>

          <div className="lesson-card">
            <span>📖</span>
            <h3>Especialização</h3>
            <p>
              Um sentido geral se restringe a um campo: "operação" migrou da
              linguagem comum para a medicina e a matemática.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌐</span>
            <h3>Generalização</h3>
            <p>
              Um sentido específico se amplia: "caneta" era apenas o tubo de
              pena; hoje engloba qualquer instrumento de escrita.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Dica ENEM</h3>
          <p>
            O ENEM frequentemente apresenta textos nos quais uma palavra
            polissêmica é usada em sentido não convencional. A questão pede
            o efeito de sentido produzido. Identifique o contexto para
            determinar qual dos sentidos da palavra está ativo.
          </p>
        </div>
      </section>

      {/* ───────────────────────── 2. Homonímia ───────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Semântica Lexical</span>

        <h2>2. Homonímia — Mesma Forma, Origens Diferentes</h2>

        <p>
          <strong>Homônimos</strong> são palavras que coincidem na forma
          (escrita, pronúncia ou ambas) mas têm <strong>origens etimológicas
          distintas</strong> e sentidos sem relação entre si. Ao contrário da
          polissemia, não há parentesco semântico: a coincidência é apenas
          fonética ou gráfica, resultado do acaso histórico.
        </p>

        <p>
          A homonímia se divide em três subtipos, cada um com implicações
          diferentes para a leitura e para as questões de vestibular:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Subtipo</th>
                <th>Definição</th>
                <th>Exemplo</th>
                <th>Mesma escrita?</th>
                <th>Mesma pronúncia?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Homófonas</strong>
                </td>
                <td>Mesma pronúncia, escrita diferente</td>
                <td>
                  <em>acender</em> (ligar) / <em>ascender</em> (subir)
                </td>
                <td>Não</td>
                <td>Sim</td>
              </tr>
              <tr>
                <td>
                  <strong>Homógrafas</strong>
                </td>
                <td>Mesma escrita, pronúncia diferente</td>
                <td>
                  <em>colher</em> (utensílio — ê) / <em>colher</em> (verbo —
                  é)
                </td>
                <td>Sim</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>
                  <strong>Perfeitas (homônimas)</strong>
                </td>
                <td>Mesma escrita e mesma pronúncia</td>
                <td>
                  <em>manga</em> (fruta) / <em>manga</em> (parte da roupa)
                </td>
                <td>Sim</td>
                <td>Sim</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <h3>Outros exemplos clássicos</h3>
          <ul>
            <li>
              <strong>Homófonas:</strong> <em>conserto</em> (reparo) /{" "}
              <em>concerto</em> (musical); <em>cessão</em> / <em>sessão</em> /{" "}
              <em>seção</em>; <em>mau</em> / <em>mal</em>.
            </li>
            <li>
              <strong>Homógrafas:</strong> <em>gosto</em> (eu gosto — verbo) /{" "}
              <em>gosto</em> (sabor — substantivo); <em>molho</em> (molho de
              chaves) / <em>molho</em> (de tomate).
            </li>
            <li>
              <strong>Perfeitas:</strong> <em>são</em> (verbo ser) /{" "}
              <em>são</em> (saudável); <em>canto</em> (de cantar) /{" "}
              <em>canto</em> (esquina).
            </li>
          </ul>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 600 220"
            width="600"
            height="220"
            aria-label="Diagrama de Venn mostrando a relação entre homófonas, homógrafas e homônimas perfeitas"
          >
            <rect width="600" height="220" fill="#f8fafc" rx="12" />
            {/* Homófonas */}
            <ellipse cx="180" cy="110" rx="150" ry="80" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="180" y="75" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">Homófonas</text>
            <text x="180" y="95" textAnchor="middle" fontSize="11" fill="#1e40af">Mesma pronúncia</text>
            <text x="130" y="130" textAnchor="middle" fontSize="10" fill="#1e40af">acender/</text>
            <text x="130" y="145" textAnchor="middle" fontSize="10" fill="#1e40af">ascender</text>
            {/* Homógrafas */}
            <ellipse cx="420" cy="110" rx="150" ry="80" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <text x="420" y="75" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#14532d">Homógrafas</text>
            <text x="420" y="95" textAnchor="middle" fontSize="11" fill="#14532d">Mesma escrita</text>
            <text x="470" y="130" textAnchor="middle" fontSize="10" fill="#14532d">colher</text>
            <text x="470" y="145" textAnchor="middle" fontSize="10" fill="#14532d">(verbo/subst.)</text>
            {/* Interseção = Perfeitas */}
            <text x="300" y="100" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c3aed">Perfeitas</text>
            <text x="300" y="118" textAnchor="middle" fontSize="10" fill="#7c3aed">manga, são,</text>
            <text x="300" y="133" textAnchor="middle" fontSize="10" fill="#7c3aed">canto, gosto</text>
          </svg>
          <figcaption>Relação entre os subtipos de homonímia</figcaption>
        </figure>
      </section>

      {/* ─────────────────── 3. Ambiguidade Sintática ─────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Ambiguidade</span>

        <h2>3. Ambiguidade Sintática — Estrutura Gramatical Escorregadia</h2>

        <p>
          A <strong>ambiguidade sintática</strong> ocorre quando a estrutura
          gramatical da frase — a forma como os termos se encadeiam — permite
          mais de uma leitura. Não é a palavra em si que tem duplo sentido,
          mas a <em>relação entre as palavras</em>.
        </p>

        <div className="math-block">
          <h3>Exemplos de ambiguidade sintática</h3>
          <ul>
            <li>
              <strong>"Vi o homem com o binóculo."</strong>
              <br />
              Leitura 1: Eu estava com o binóculo e vi o homem.
              <br />
              Leitura 2: Vi o homem que estava com o binóculo.
              <br />
              <em>O adjunto adverbial/adnominal "com o binóculo" pode se
              ligar a "vi" ou a "o homem".</em>
            </li>
            <li>
              <strong>"O professor disse que o aluno mentiu ontem."</strong>
              <br />
              Leitura 1: Ontem o professor disse isso.
              <br />
              Leitura 2: O professor disse que o aluno mentiu no dia
              anterior.
              <br />
              <em>O advérbio "ontem" pode modificar o verbo principal ou o
              verbo da oração subordinada.</em>
            </li>
            <li>
              <strong>"Quero uma blusa de algodão azul."</strong>
              <br />
              Leitura 1: A blusa é de algodão e é azul.
              <br />
              Leitura 2: O algodão é azul (blusa pode ser de outra cor).
              <br />
              <em>O adjetivo "azul" pode se referir a "blusa" ou a
              "algodão".</em>
            </li>
          </ul>
        </div>

        <div className="lesson-highlight">
          <h3>Por que isso acontece?</h3>
          <p>
            A ambiguidade sintática surge quando um modificador (adjunto,
            adjetivo, advérbio) pode se encaixar em mais de um núcleo. Em
            língua escrita, a pontuação e a ordem das palavras são os
            principais recursos para eliminá-la. Em língua oral, a
            entonação e as pausas cumprem esse papel.
          </p>
        </div>
      </section>

      {/* ─────────────────── 4. Ambiguidade Lexical ───────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Ambiguidade</span>

        <h2>4. Ambiguidade Lexical — A Palavra que Bifurca o Sentido</h2>

        <p>
          A <strong>ambiguidade lexical</strong> nasce da polissemia ou da
          homonímia: uma palavra com múltiplos sentidos é usada num contexto
          em que mais de uma interpretação permanece plausível. O problema
          não está na estrutura sintática, mas no <em>item vocabular</em>.
        </p>

        <div className="math-block">
          <h3>Exemplos</h3>
          <ul>
            <li>
              <strong>"Ela foi ao banco."</strong>
              <br />
              Banco (assento) ou banco (instituição financeira)? O contexto
              insuficiente deixa as duas leituras abertas.
            </li>
            <li>
              <strong>"O time perdeu sua cabeça."</strong>
              <br />
              Perdeu o líder/capitão, ou perdeu o autocontrole (ficou
              desorientado)?
            </li>
            <li>
              <strong>"O jogo estava quente."</strong>
              <br />
              Disputado, emocionante — ou literalmente com alta temperatura?
              O contexto normalmente resolve, mas sem ele a ambiguidade
              persiste.
            </li>
          </ul>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔑</span>
            <h3>Papel do contexto</h3>
            <p>
              O contexto discursivo geralmente desfaz a ambiguidade lexical,
              ao sinalizar qual sentido é ativado. Quando o contexto é
              ambíguo, o efeito pode ser intencional.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚡</span>
            <h3>Ambiguidade vs. vagueza</h3>
            <p>
              Ambiguidade: há dois sentidos bem definidos em conflito.
              Vagueza: o sentido existe, mas seus limites são imprecisos
              ("um homem alto" — quão alto?).
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────── 5. Ambiguidade Proposital ───────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Efeito de Sentido</span>

        <h2>5. Ambiguidade Proposital — Duplo Sentido como Recurso</h2>

        <p>
          Nem toda ambiguidade é um defeito. Em publicidade, humor, poesia e
          jogos de linguagem, a ambiguidade é <strong>deliberada</strong>:
          o produtor do texto explora dois sentidos simultaneamente para
          criar graça, ironia, crítica ou impacto emocional.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📢</span>
            <h3>Publicidade</h3>
            <p>
              Slogans exploram o duplo sentido para fixar a marca e seduzir
              o consumidor. Ex.: "Nosso produto levanta qualquer um." (produto
              energético — "levantar" = animar/erguer fisicamente).
            </p>
          </div>

          <div className="lesson-card">
            <span>😄</span>
            <h3>Humor e piadas</h3>
            <p>
              A piada funciona pela expectativa de um sentido e a revelação
              surpreendente de outro. O gatilho cômico é quase sempre a
              exploração de um homônimo ou de um sentido conotativo.
            </p>
          </div>

          <div className="lesson-card">
            <span>🎭</span>
            <h3>Ironia e sátira</h3>
            <p>
              A ambiguidade permite ao autor dizer uma coisa e significar
              outra. O leitor precisa acionar um segundo plano de leitura
              para captar o sentido real da crítica.
            </p>
          </div>

          <div className="lesson-card">
            <span>✍️</span>
            <h3>Poesia</h3>
            <p>
              A poesia explora a multiplicidade semântica: uma palavra é
              escolhida exatamente por carregar camadas de significado que
              enriquecem a leitura.
            </p>
          </div>
        </div>

        <div className="math-block">
          <h3>Exemplo de slogan com duplo sentido</h3>
          <p>
            <strong>"Nós fazemos você voar."</strong> (companhia aérea)
          </p>
          <p>
            Sentido literal: transporte aéreo, o avião leva o passageiro.
          </p>
          <p>
            Sentido conotativo: a empresa proporciona uma experiência
            extraordinária, uma sensação de leveza, liberdade e prazer.
          </p>
          <p>
            O slogan funciona porque os dois sentidos são ativados ao mesmo
            tempo, amplificando o impacto persuasivo.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>No ENEM</h3>
          <p>
            Questões de publicidade e charge quase sempre pedem que o
            candidato identifique o efeito produzido pelo duplo sentido.
            Pergunte-se: <em>quais são os dois sentidos possíveis? Como um
            deles ressignifica o outro e produz humor, crítica ou
            persuasão?</em>
          </p>
        </div>
      </section>

      {/* ──────────── 6. Estratégias para Desfazer Ambiguidade ───────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Precisão Linguística</span>

        <h2>6. Como Desfazer a Ambiguidade — Ordem, Pontuação e Contexto</h2>

        <p>
          Quando a ambiguidade é indesejada — como num texto técnico, num
          contrato ou numa redação — existem estratégias linguísticas
          precisas para eliminá-la. Conhecê-las é essencial tanto para
          escrever com clareza quanto para identificar como um texto foi
          reescrito para ganhar ou perder ambiguidade.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Estratégia</th>
                <th>Como funciona</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Reordenação sintática</strong>
                </td>
                <td>Muda a posição do modificador para deixar claro a qual núcleo ele se refere</td>
                <td>
                  Ambíguo: "Encontrei o amigo do professor bêbado."
                  <br />
                  Claro: "Bêbado, encontrei o amigo do professor." ou "Encontrei o amigo bêbado do professor."
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Pontuação</strong>
                </td>
                <td>Vírgulas, parênteses e travessões delimitam grupos sintáticos e eliminam dúvidas</td>
                <td>
                  Ambíguo: "O gerente avisou o assistente que chegou tarde."
                  <br />
                  Claro: "O gerente, que chegou tarde, avisou o assistente."
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Substituição lexical</strong>
                </td>
                <td>Trocar a palavra polissêmica por um sinônimo mais específico</td>
                <td>
                  "Ela foi ao banco" → "Ela foi à agência bancária."
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Expansão contextual</strong>
                </td>
                <td>Adicionar informações ao redor que tornam apenas um sentido possível</td>
                <td>
                  "Ela foi ao banco sentar e descansar." (contexto resolve)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Pronome relativo explícito</strong>
                </td>
                <td>Usar "o qual / a qual" em vez de "que" para indicar com clareza o antecedente</td>
                <td>
                  Ambíguo: "O relatório do diretor que aprovou..." → "O relatório do diretor, o qual foi aprovado..."
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 620 180"
            width="620"
            height="180"
            aria-label="Fluxograma mostrando as etapas para desfazer ambiguidade num texto"
          >
            <rect width="620" height="180" fill="#f8fafc" rx="12" />
            {/* Passo 1 */}
            <rect x="20" y="60" width="110" height="60" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="75" y="86" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">Identificar</text>
            <text x="75" y="101" textAnchor="middle" fontSize="10" fill="#1e40af">a ambiguidade</text>
            {/* Seta */}
            <line x1="130" y1="90" x2="155" y2="90" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <polygon points="155,86 163,90 155,94" fill="#64748b" />
            {/* Passo 2 */}
            <rect x="165" y="60" width="115" height="60" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
            <text x="222" y="86" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#14532d">Localizar</text>
            <text x="222" y="101" textAnchor="middle" fontSize="10" fill="#14532d">o ponto ambíguo</text>
            {/* Seta */}
            <polygon points="282,86 290,90 282,94" fill="#64748b" />
            <line x1="280" y1="90" x2="305" y2="90" stroke="#64748b" strokeWidth="1.5" />
            {/* Passo 3 */}
            <rect x="308" y="60" width="115" height="60" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
            <text x="365" y="86" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#78350f">Escolher</text>
            <text x="365" y="101" textAnchor="middle" fontSize="10" fill="#78350f">estratégia de ajuste</text>
            {/* Seta */}
            <polygon points="425,86 433,90 425,94" fill="#64748b" />
            <line x1="423" y1="90" x2="448" y2="90" stroke="#64748b" strokeWidth="1.5" />
            {/* Passo 4 */}
            <rect x="450" y="60" width="115" height="60" rx="8" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5" />
            <text x="507" y="86" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#831843">Reescrever</text>
            <text x="507" y="101" textAnchor="middle" fontSize="10" fill="#831843">o trecho com clareza</text>
          </svg>
          <figcaption>Fluxo de eliminação de ambiguidade em textos técnicos</figcaption>
        </figure>
      </section>

      {/* ──────────────────────────── 7. Sinonímia ───────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Relações Semânticas</span>

        <h2>7. Sinonímia — A Ilusão dos Sinônimos Perfeitos</h2>

        <p>
          <strong>Sinônimos</strong> são palavras de sentido semelhante. A
          sinonímia <strong>perfeita</strong> — dois termos absolutamente
          intercambiáveis em qualquer contexto sem qualquer alteração de
          sentido — é extremamente rara na língua natural. Na prática,
          sinônimos são <em>parciais</em>: compartilham o núcleo semântico,
          mas divergem em connotação, registro, frequência de uso e
          combinatória.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>😀</span>
            <h3>alegre / contente / feliz</h3>
            <p>
              Todas indicam estado positivo, mas "alegre" é mais dinâmico,
              "contente" é mais moderado e "feliz" pode indicar plenitude
              maior. Não são intercambiáveis em todos os contextos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🏠</span>
            <h3>casa / lar / moradia / habitação</h3>
            <p>
              "Casa" é neutro; "lar" tem carga afetiva; "moradia" é técnico;
              "habitação" é formal/jurídico. Cada um cabe melhor em um
              registro específico.
            </p>
          </div>

          <div className="lesson-card">
            <span>👁️</span>
            <h3>ver / olhar / observar / enxergar</h3>
            <p>
              "Ver" é passivo; "olhar" é intencional; "observar" implica
              atenção prolongada; "enxergar" pode ser físico ou metafórico
              (compreender).
            </p>
          </div>

          <div className="lesson-card">
            <span>📝</span>
            <h3>No ENEM</h3>
            <p>
              Questões pedem por que o autor escolheu determinada palavra em
              vez de seu "sinônimo". A resposta está nas diferenças de
              connotação, intensidade ou registro.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Sinonímia e coesão textual</h3>
          <p>
            A sinonímia é um recurso de coesão: em vez de repetir o mesmo
            termo, o autor usa sinônimos para retomar um referente sem
            monotonia. Isso é chamado de <strong>substituição lexical</strong>.
            Ex.: "O presidente discursou. O chefe do Executivo defendeu as
            reformas." ("O chefe do Executivo" retoma "o presidente" por
            sinonímia contextual).
          </p>
        </div>
      </section>

      {/* ──────────────────────────── 8. Antonímia ───────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Relações Semânticas</span>

        <h2>8. Antonímia — Os Três Tipos de Oposição</h2>

        <p>
          <strong>Antônimos</strong> são palavras que se opõem em sentido.
          Mas a oposição pode ocorrer de formas diferentes, e reconhecer
          cada tipo importa para a interpretação precisa de textos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Característica</th>
                <th>Exemplos</th>
                <th>O que implica?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Complementar</strong>
                </td>
                <td>Os termos se excluem mutuamente; não há meio-termo</td>
                <td>vivo / morto; grávida / não-grávida; verdadeiro / falso</td>
                <td>
                  Negar um implica afirmar o outro. "Não está vivo" = "está
                  morto".
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Graduável (Contrária)</strong>
                </td>
                <td>Há gradação entre os extremos; um meio-termo existe</td>
                <td>quente / frio; alto / baixo; rico / pobre; jovem / velho</td>
                <td>
                  Negar um não implica o outro. "Não é alto" não significa
                  "é baixo" — pode ser mediano.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Inversa (Relacional)</strong>
                </td>
                <td>Os termos pressupõem um ao outro; são faces de uma relação</td>
                <td>comprar / vender; professor / aluno; dar / receber; pai / filho</td>
                <td>
                  Um não existe sem o outro: não há comprador sem vendedor.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <h3>Por que isso importa na leitura?</h3>
          <p>
            A distinção entre antonímia complementar e graduável é
            essencial para avaliar argumentos. Dizer "você não está
            errado" não significa "você está certo" (antonímia graduável —
            pode estar num ponto intermediário). Já "ele não está vivo"
            equivale a "ele está morto" (antonímia complementar).
          </p>
        </div>
      </section>

      {/* ──────────────── 9. Hiponímia e Hiperonímia ──────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Relações Semânticas</span>

        <h2>9. Hiponímia e Hiperonímia — A Hierarquia dos Conceitos</h2>

        <p>
          As palavras se organizam em redes de inclusão semântica. Um{" "}
          <strong>hiperônimo</strong> é o termo mais geral que engloba outros
          mais específicos. Os termos específicos incluídos são chamados{" "}
          <strong>hipônimos</strong> — co-hipônimos entre si quando estão no
          mesmo nível hierárquico.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 560 250"
            width="560"
            height="250"
            aria-label="Árvore hierárquica de hiponímia: planta engloba árvore e flor; flor engloba rosa, margarida e orquídea"
          >
            <rect width="560" height="250" fill="#f8fafc" rx="12" />
            {/* Topo: Planta (hiperônimo máximo) */}
            <rect x="210" y="15" width="140" height="40" rx="8" fill="#7c3aed" />
            <text x="280" y="40" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">🌿 planta</text>
            {/* Linhas de planta para árvore e flor */}
            <line x1="280" y1="55" x2="140" y2="100" stroke="#7c3aed" strokeWidth="2" />
            <line x1="280" y1="55" x2="420" y2="100" stroke="#7c3aed" strokeWidth="2" />
            {/* Nível 2: árvore e flor */}
            <rect x="65" y="100" width="140" height="40" rx="8" fill="#2563eb" />
            <text x="135" y="125" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">🌳 árvore</text>
            <rect x="350" y="100" width="130" height="40" rx="8" fill="#16a34a" />
            <text x="415" y="125" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">🌸 flor</text>
            {/* Linhas de flor para rosa, margarida, orquídea */}
            <line x1="415" y1="140" x2="310" y2="185" stroke="#16a34a" strokeWidth="1.5" />
            <line x1="415" y1="140" x2="415" y2="185" stroke="#16a34a" strokeWidth="1.5" />
            <line x1="415" y1="140" x2="520" y2="185" stroke="#16a34a" strokeWidth="1.5" />
            {/* Nível 3: rosa, margarida, orquídea */}
            <rect x="255" y="185" width="110" height="35" rx="7" fill="#bbf7d0" stroke="#16a34a" />
            <text x="310" y="207" textAnchor="middle" fontSize="11" fill="#14532d">🌹 rosa</text>
            <rect x="370" y="185" width="110" height="35" rx="7" fill="#bbf7d0" stroke="#16a34a" />
            <text x="425" y="207" textAnchor="middle" fontSize="11" fill="#14532d">🌼 margarida</text>
            <rect x="465" y="185" width="80" height="35" rx="7" fill="#bbf7d0" stroke="#16a34a" />
            <text x="505" y="207" textAnchor="middle" fontSize="11" fill="#14532d">🌺 orquídea</text>
            {/* Legenda */}
            <text x="30" y="240" fontSize="10" fill="#64748b">Hiperônimo ↑ | Hipônimo ↓ | Co-hipônimos = mesmo nível</text>
          </svg>
          <figcaption>Hierarquia semântica: hiponímia e hiperonímia em ação</figcaption>
        </figure>

        <p>
          Na hierarquia acima: <em>planta</em> é hiperônimo de{" "}
          <em>flor</em> e <em>árvore</em>; <em>flor</em> é hiperônimo de
          <em> rosa</em>, <em>margarida</em> e <em>orquídea</em>; estas
          três são co-hipônimas. Note que <em>flor</em> é simultaneamente
          hipônimo de <em>planta</em> e hiperônimo de <em>rosa</em> — a
          relação é sempre <strong>relativa ao nível</strong> comparado.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Coesão por hiperonímia</h3>
            <p>
              Para não repetir "rosa", o autor pode escrever "a flor" ou "a
              planta". Essa substituição por um hiperônimo é recurso de
              coesão lexical.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧩</span>
            <h3>Categorização</h3>
            <p>
              A hiperonímia organiza nosso conhecimento de mundo em
              categorias. Ela explica por que "cachorro" é mais fácil de
              entender do que "canídeo doméstico".
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Outros exemplos</h3>
          <p>
            <strong>veículo</strong> → carro, moto, ônibus, bicicleta (co-hipônimos)
            <br />
            <strong>sentimento</strong> → amor, ódio, alegria, tristeza, medo
            <br />
            <strong>instrumento musical</strong> → violão, flauta, piano, tambor
          </p>
        </div>
      </section>

      {/* ──────────── 10. Paronímia — seção/sessão/cessão ────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Paronímia e Homofonia</span>

        <h2>10. Paronímia e Homofonia — As Armadilhas Ortográficas</h2>

        <p>
          <strong>Parônimos</strong> são palavras de grafia e/ou pronúncia
          semelhantes, mas sentidos diferentes. A confusão entre parônimos
          é uma das fontes mais frequentes de erros ortográficos e
          conceituais. O ENEM cobra o uso preciso desses termos, sobretudo
          em questões de reescrita e identificação de erros.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Par / Trio</th>
                <th>Significados</th>
                <th>Dica de memorização</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>seção / sessão / cessão</strong>
                </td>
                <td>
                  <em>seção</em>: divisão, departamento (seção de esportes);{" "}
                  <em>sessão</em>: período de tempo, reunião (sessão de cinema);{" "}
                  <em>cessão</em>: ato de ceder algo
                </td>
                <td>
                  Sessão tem dois "s" como dois lados de uma reunião; cessão
                  é "ceder" com substantivação.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>iminente / eminente</strong>
                </td>
                <td>
                  <em>iminente</em>: que está prestes a acontecer (perigo
                  iminente);{" "}
                  <em>eminente</em>: ilustre, de destaque (médico eminente)
                </td>
                <td>
                  "Iminente" vem de "im-miner" = ameaçar; "eminente" vem de
                  "e-minere" = sobressair.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>comprimento / cumprimento</strong>
                </td>
                <td>
                  <em>comprimento</em>: extensão, dimensão (o comprimento da
                  sala);{" "}
                  <em>cumprimento</em>: saudação ou ato de cumprir
                </td>
                <td>
                  "Comprimento" tem "compri" de "comprido" (longo);
                  "cumprimento" tem "cumpri" de "cumprir".
                </td>
              </tr>
              <tr>
                <td>
                  <strong>descriminar / discriminar</strong>
                </td>
                <td>
                  <em>descriminar</em>: inocentar, tirar de condição
                  criminosa;{" "}
                  <em>discriminar</em>: diferenciar ou tratar com
                  preconceito
                </td>
                <td>
                  "Dis-criminar" = separar por categoria; "des-criminar" =
                  remover o crime.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>flagrante / fragrante</strong>
                </td>
                <td>
                  <em>flagrante</em>: surpreendido no ato (preso em
                  flagrante);{" "}
                  <em>fragrante</em>: que exala perfume agradável
                </td>
                <td>
                  "Fragrante" tem "fragr" de fragrância.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>tráfego / tráfico</strong>
                </td>
                <td>
                  <em>tráfego</em>: circulação de veículos;{" "}
                  <em>tráfico</em>: comércio ilegal
                </td>
                <td>
                  "Tráfego" é neutro (engarrafamento); "tráfico" tem conotação
                  criminosa.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Homofonia e ortografia</h3>
          <p>
            Pares homófonos são especialmente perigosos: como soam igual, a
            distinção só existe na escrita. Exemplos cobrados no ENEM:
          </p>
          <ul>
            <li>
              <strong>mal / mau</strong> — "mal" é advérbio (contrário de
              "bem") ou substantivo; "mau" é adjetivo (contrário de "bom").
            </li>
            <li>
              <strong>há / a</strong> — "há" indica existência ou tempo
              passado (há dois anos); "a" é preposição (daqui a dois anos).
            </li>
            <li>
              <strong>onde / aonde</strong> — "onde" é para lugar em que
              se está; "aonde" é para lugar a que se vai (com verbos de
              movimento).
            </li>
          </ul>
        </div>
      </section>

      {/* ──────────────────── 11. Síntese e ENEM ─────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>

        <h2>11. Mapa Mental — Todos os Conceitos Integrados</h2>

        <p>
          Os fenômenos semânticos estudados neste capítulo interagem
          constantemente. Uma mesma questão de ENEM pode exigir que você
          reconheça a polissemia de uma palavra, perceba que ela cria uma
          ambiguidade lexical intencional num slogan publicitário e, ao
          mesmo tempo, identifique os hipônimos usados como estratégia de
          coesão. Veja o panorama integrado:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fenômeno</th>
                <th>Definição-chave</th>
                <th>O que o ENEM pede</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Polissemia</strong>
                </td>
                <td>Uma palavra, vários sentidos com origem comum</td>
                <td>Efeito de sentido de uma palavra em contexto</td>
              </tr>
              <tr>
                <td>
                  <strong>Homonímia</strong>
                </td>
                <td>Palavras com forma igual, origens distintas</td>
                <td>Distinguir o sentido correto; identificar o tipo</td>
              </tr>
              <tr>
                <td>
                  <strong>Ambiguidade sintática</strong>
                </td>
                <td>Estrutura gramatical admite duas leituras</td>
                <td>Reescrita para eliminar ambiguidade</td>
              </tr>
              <tr>
                <td>
                  <strong>Ambiguidade lexical</strong>
                </td>
                <td>Palavra polissêmica sem contexto suficiente</td>
                <td>Identificar os dois sentidos em conflito</td>
              </tr>
              <tr>
                <td>
                  <strong>Ambiguidade proposital</strong>
                </td>
                <td>Duplo sentido intencional (humor, publicidade)</td>
                <td>Analisar o efeito persuasivo ou humorístico</td>
              </tr>
              <tr>
                <td>
                  <strong>Sinonímia</strong>
                </td>
                <td>Palavras de sentido similar (parcial)</td>
                <td>Justificar escolha lexical; coesão por substituição</td>
              </tr>
              <tr>
                <td>
                  <strong>Antonímia</strong>
                </td>
                <td>Oposição semântica (complementar, graduável, inversa)</td>
                <td>Analisar argumentos; entender negações</td>
              </tr>
              <tr>
                <td>
                  <strong>Hiponímia / Hiperonímia</strong>
                </td>
                <td>Hierarquia de inclusão semântica</td>
                <td>Coesão lexical; organização categorial</td>
              </tr>
              <tr>
                <td>
                  <strong>Paronímia</strong>
                </td>
                <td>Palavras semelhantes na forma, diferentes no sentido</td>
                <td>Uso correto; evitar confusão ortográfica/semântica</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Estratégia para questões do ENEM</h3>
          <p>
            1. Leia o texto inteiro antes de olhar as alternativas.
            <br />
            2. Identifique palavras com carga semântica relevante (sublinhadas
            pelo enunciado ou em destaque tipográfico).
            <br />
            3. Pergunte: esse efeito vem da estrutura (sintático) ou do
            vocabulário (lexical)?
            <br />
            4. Em textos publicitários e charges, sempre busque o segundo
            plano de leitura — o duplo sentido é o ponto da questão.
            <br />
            5. Em questões de reescrita, verifique se a alternativa correta
            mantém o sentido original E elimina a ambiguidade.
          </p>
        </div>
      </section>

      {/* ───────────────────────── Exercícios ────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Polissemia vs. Homonímia"
          statement={
            <p>
              Sobre a palavra <strong>"banco"</strong> nas frases "Sentei no
              banco da praça" e "Fui ao banco depositar dinheiro",
              pode-se afirmar que se trata de:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "homonímia perfeita, pois as palavras têm origens etimológicas completamente diferentes e sem relação.",
            },
            {
              letter: "b",
              text: "polissemia, pois os dois sentidos derivam de um mesmo núcleo semântico original que se ramificou historicamente.",
              correct: true,
            },
            {
              letter: "c",
              text: "antonímia graduável, pois banco-assento e banco-financeiro se opõem em uma escala de sentidos.",
            },
            {
              letter: "d",
              text: "paronímia, pois as duas palavras têm pronúncia semelhante mas grafias diferentes.",
            },
          ]}
          resolution={
            <p>
              A palavra "banco" é um caso clássico de <strong>polissemia</strong>:
              todos os seus sentidos (assento, instituição financeira, banco de
              dados, cardume) derivam de uma raiz semântica comum ligada à
              ideia de "base" ou "suporte". Na homonímia, as palavras têm
              origens etimológicas distintas e sentidos sem qualquer parentesco
              — o que não ocorre aqui.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Ambiguidade Sintática"
          statement={
            <p>
              A frase <strong>"A diretora comunicou à professora que
              faltou que seria advertida"</strong> é ambígua porque:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "o verbo \"faltou\" é polissêmico e pode significar tanto ausência quanto erro moral.",
            },
            {
              letter: "b",
              text: "o pronome relativo \"que\" pode se referir à diretora ou à professora, gerando dois sujeitos possíveis para \"faltou\".",
              correct: true,
            },
            {
              letter: "c",
              text: "\"faltou\" e \"seria advertida\" são parônimos que se confundem na leitura oral.",
            },
            {
              letter: "d",
              text: "há homonímia entre \"comunicou\" e \"anunciou\", tornando o sentido da frase impreciso.",
            },
          ]}
          resolution={
            <p>
              A ambiguidade é <strong>sintática</strong>: o pronome relativo
              "que" pode remeter a "diretora" (a diretora que faltou) ou a
              "professora" (a professora que faltou), gerando duas leituras
              estruturalmente válidas. Para eliminar a ambiguidade, seria
              necessário reescrever o trecho ou usar o pronome relativo "a
              qual" com antecedente explícito.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Paronímia em Contexto"
          statement={
            <p>
              Assinale a alternativa em que o emprego dos parônimos está
              correto em ambas as frases:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "\"O perigo é iminente.\" / \"O cientista eminente publicou novos estudos.\"",
              correct: true,
            },
            {
              letter: "b",
              text: "\"O perigo é eminente.\" / \"O cientista iminente publicou novos estudos.\"",
            },
            {
              letter: "c",
              text: "\"O comprimento foi efusivo.\" / \"Qual é o cumprimento da sala?\"",
            },
            {
              letter: "d",
              text: "\"Houve cessão de trânsito.\" / \"A seção do acordo foi firmada ontem.\"",
            },
          ]}
          resolution={
            <p>
              A alternativa A está correta: <strong>iminente</strong> = que
              está prestes a acontecer, ameaçador (o perigo está prestes a
              ocorrer); <strong>eminente</strong> = ilustre, de prestígio (o
              cientista de destaque). As demais alternativas invertem os
              parônimos ou os empregam em contextos inadequados: na C,
              "comprimento" (extensão física) e "cumprimento" (saudação) estão
              trocados; na D, "cessão" (ato de ceder) não cabe em "cessão de
              trânsito" — o correto seria "fluxo" — e "seção" (divisão) não
              se aplica a acordo.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Duplo Sentido em Publicidade"
          statement={
            <p>
              Um fabricante de colchões veicula o seguinte slogan:{" "}
              <strong>"Nós sabemos como te colocar no chão."</strong> O
              efeito de sentido desse enunciado publicitário é produzido
              principalmente por:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "antonímia graduável entre \"colocar\" e \"tirar\", que cria uma oposição irônica ao produto.",
            },
            {
              letter: "b",
              text: "paronímia entre \"chão\" e \"cão\", explorando a semelhança fonética para criar humor.",
            },
            {
              letter: "c",
              text: "polissemia intencional da expressão \"colocar no chão\": humilhar alguém versus deitar na cama (que fica ao nível do chão), explorando os dois sentidos simultaneamente.",
              correct: true,
            },
            {
              letter: "d",
              text: "homonímia entre \"chão\" (piso) e \"chão\" (cansado), que são palavras de origens distintas usadas em contextos diferentes.",
            },
          ]}
          resolution={
            <p>
              O slogan explora a <strong>ambiguidade proposital</strong>
              fundada em polissemia: "colocar no chão" pode significar
              humilhar, derrubar — sentido negativo — ou simplesmente fazer
              a pessoa deitar na cama que está no nível do chão — sentido
              positivo e ligado ao produto. A publicidade ativa os dois
              sentidos ao mesmo tempo, criando impacto e memorabilidade.
              Esse é o mecanismo central do humor e da persuasão em
              linguagem publicitária.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Sinonímia e Efeito Estilístico"
          statement={
            <p>
              Leia o trecho: <em>"A criança olhou para o firmamento. Os
              astros brilhavam. As estrelas formavam desenhos. As luzes
              celestes a hipnotizavam."</em> As expressões "firmamento",
              "astros", "estrelas" e "luzes celestes" são usadas no texto
              para:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "criar antonímia entre termos científicos e populares, opondo linguagem formal e informal.",
            },
            {
              letter: "b",
              text: "produzir coesão textual por substituição lexical, usando hiperonímia, sinonímia e expressão equivalente para retomar o referente sem repetição.",
              correct: true,
            },
            {
              letter: "c",
              text: "demonstrar homonímia perfeita, pois todas as palavras têm a mesma pronúncia e a mesma grafia.",
            },
            {
              letter: "d",
              text: "criar ambiguidade sintática, pois cada termo pode se referir a planetas ou estrelas com igual probabilidade.",
            },
          ]}
          resolution={
            <p>
              O texto emprega <strong>coesão lexical por substituição</strong>:
              "firmamento" (o céu noturno — hiperônimo), "astros" (corpos
              celestes — hiperônimo mais amplo), "estrelas" (hipônimo
              específico, retomando o referente de modo mais direto) e "luzes
              celestes" (expressão descritiva equivalente). Essa cadeia
              referencial evita a repetição e mantém a progressão textual —
              mecanismo que o ENEM cobra sob o nome de coesão referencial
              lexical.
            </p>
          }
        />
      </section>
    </article>
  );
}
