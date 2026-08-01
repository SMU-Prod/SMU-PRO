"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap14Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 14</span>
          <h1>Estrutura e Formação das Palavras</h1>
          <p>
            Domine a morfologia do português: entenda como as palavras se
            constroem a partir de morfemas, como novos vocábulos nascem por
            derivação e composição, e reconheça empréstimos, neologismos e
            arcaísmos — competências cobradas sistematicamente no ENEM.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SEÇÃO 1 — MORFEMAS: UNIDADES MÍNIMAS
      ───────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Morfologia</span>
        <h2>1. Morfemas: as Unidades Mínimas de Significado</h2>
        <p>
          <strong>Morfema</strong> é a menor unidade linguística dotada de
          significado. Toda palavra é formada por um ou mais morfemas, e
          identificá-los é o primeiro passo para entender como o português
          constrói seu vocabulário. Por exemplo, em <em>cantávamos</em>{" "}
          identificamos: <em>cant-</em> (radical), <em>-a-</em> (vogal
          temática), <em>-va-</em> (desinência de modo-tempo: pretérito
          imperfeito do indicativo) e <em>-mos</em> (desinência de
          número-pessoa: 1ª pessoa do plural).
        </p>
        <div className="lesson-highlight">
          <strong>Regra prática ENEM:</strong> questões sobre morfemas pedem que
          você segmente a palavra e identifique a função de cada parte. Treine
          sempre com verbos no pretérito e com substantivos derivados.
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SEÇÃO 2 — RADICAL E AFIXOS
      ───────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Morfemas Lexicais</span>
        <h2>2. Radical, Prefixo e Sufixo</h2>
        <p>
          O <strong>radical</strong> é o núcleo semântico da palavra: carrega o
          significado central e se mantém (às vezes com pequenas alterações
          fonéticas) em todas as palavras da mesma família. Em{" "}
          <em>livro, livraria, livreiro, livrete</em>, o radical é{" "}
          <em>livr-</em>. Os <strong>afixos</strong> são morfemas que se agregam
          ao radical para modificar ou especializar o significado.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📌</span>
            <h3>Prefixo</h3>
            <p>
              Antecede o radical. Geralmente modifica o significado sem mudar a
              classe gramatical. Ex: <em>des-fazer</em>, <em>in-feliz</em>,{" "}
              <em>re-fazer</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔖</span>
            <h3>Sufixo</h3>
            <p>
              Sucede o radical. Pode mudar significado e classe gramatical. Ex:{" "}
              <em>feliz → felicidade</em> (sufixo <em>-dade</em>);{" "}
              <em>cantar → cantador</em> (sufixo <em>-dor</em>).
            </p>
          </div>
          <div className="lesson-card">
            <span>🧩</span>
            <h3>Circunfixo (parassíntese)</h3>
            <p>
              Prefixo e sufixo adicionados simultaneamente. Ex:{" "}
              <em>en-trist-ecer</em>: sem <em>en-</em> ou sem <em>-ecer</em>{" "}
              isoladamente, a palavra não existe.
            </p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Afixo</th>
                <th>Posição</th>
                <th>Exemplos</th>
                <th>Efeito semântico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>des-</em></td>
                <td>Prefixo</td>
                <td>desmontar, deslealdade</td>
                <td>negação, reversão</td>
              </tr>
              <tr>
                <td><em>in- / im-</em></td>
                <td>Prefixo</td>
                <td>infeliz, impossível</td>
                <td>negação</td>
              </tr>
              <tr>
                <td><em>re-</em></td>
                <td>Prefixo</td>
                <td>reler, reconstruir</td>
                <td>repetição</td>
              </tr>
              <tr>
                <td><em>-dade</em></td>
                <td>Sufixo</td>
                <td>lealdade, liberdade</td>
                <td>substantivo abstrato</td>
              </tr>
              <tr>
                <td><em>-ção</em></td>
                <td>Sufixo</td>
                <td>construção, leitura</td>
                <td>ação ou resultado</td>
              </tr>
              <tr>
                <td><em>-eiro/-eira</em></td>
                <td>Sufixo</td>
                <td>livreiro, padeiro</td>
                <td>agente/profissão</td>
              </tr>
              <tr>
                <td><em>-mente</em></td>
                <td>Sufixo</td>
                <td>rapidamente, claramente</td>
                <td>advérbio de modo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SEÇÃO 3 — VOGAL TEMÁTICA, TEMA E DESINÊNCIAS
      ───────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Morfemas Gramaticais</span>
        <h2>3. Vogal Temática, Tema e Desinências</h2>
        <p>
          A <strong>vogal temática (VT)</strong> é o morfema que se une ao
          radical para preparar a palavra para receber as desinências. Nos
          substantivos e adjetivos, a VT indica o gênero padrão:{" "}
          <em>-o</em> (masculino) e <em>-a</em> (feminino). Nos verbos, a VT
          indica a conjugação: <em>-a-</em> (1ª conjugação: amar), <em>-e-</em>{" "}
          (2ª: vender) e <em>-i-</em> (3ª: partir). O <strong>tema</strong> é o
          conjunto radical + VT: <em>am-a-</em>, <em>vend-e-</em>.
        </p>
        <p>
          As <strong>desinências nominais</strong> indicam{" "}
          <em>gênero</em> (masculino / feminino) e <em>número</em> (singular /
          plural). As <strong>desinências verbais</strong> se dividem em:{" "}
          <em>desinências de modo-tempo (DMT)</em>, que indicam o tempo e o
          modo verbal (ex: <em>-va-</em> no pretérito imperfeito do indicativo),
          e <em>desinências de número-pessoa (DNP)</em>, que indicam a pessoa
          gramatical (ex: <em>-mos</em> = 1ª pessoa do plural).
        </p>
        <div className="math-block">
          <strong>Segmentação completa de "cantávamos":</strong>
          <br />
          cant- (radical) + -a- (VT 1ª conjugação) + -va- (DMT: pretérito
          imperfeito do indicativo) + -mos (DNP: 1ª pessoa do plural)
          <br />
          <br />
          <strong>Segmentação completa de "meninas":</strong>
          <br />
          menin- (radical) + -a (VT/desinência de gênero feminino) + -s
          (desinência de número plural)
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SEÇÃO 4 — VOGAL/CONSOANTE DE LIGAÇÃO
      ───────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Morfemas Eufônicos</span>
        <h2>4. Vogal e Consoante de Ligação</h2>
        <p>
          <strong>Vogais e consoantes de ligação</strong> (também chamadas de{" "}
          <em>morfemas eufônicos</em>) são inseridas entre outros morfemas para
          facilitar a pronúncia, evitando encontros consonantais ou vocálicos
          difíceis. Elas{" "}
          <strong>não carregam significado próprio</strong> — existem apenas por
          razões fonéticas.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔊</span>
            <h3>Vogal de Ligação</h3>
            <p>
              Inserida entre dois morfemas para evitar choque de consoantes. Ex:{" "}
              <em>gas-ô-metro</em> (o <em>ô</em> liga <em>gas</em> a{" "}
              <em>metro</em>); <em>cafe-i-cultura</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎶</span>
            <h3>Consoante de Ligação</h3>
            <p>
              Inserida para evitar hiato ou facilitar a pronúncia. Ex:{" "}
              <em>café-z-inho</em> (o <em>z</em> impede o encontro vocálico);{" "}
              <em>pau-l-ada</em>.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção ENEM:</strong> não confunda vogal temática com vogal
          de ligação. A VT faz parte do sistema flexional; a vogal de ligação é
          um recurso fonético sem função gramatical.
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SEÇÃO 5 — PALAVRAS PRIMITIVAS E DERIVADAS
          + SVG DIAGRAMA
      ───────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Origem das Palavras</span>
        <h2>5. Palavras Primitivas e Derivadas</h2>
        <p>
          Uma <strong>palavra primitiva</strong> não se origina de outra
          palavra da língua portuguesa (pode ter origem no latim, grego etc.,
          mas dentro do português não deriva de nada). Ex: <em>pedra, flor,
          livro, mar</em>. Uma <strong>palavra derivada</strong> origina-se de
          uma primitiva (ou de outra derivada) por meio de algum processo de
          formação. Ex: <em>pedreiro, florista, livraria, marinheiro</em>.
        </p>
        <p>
          A distinção importa porque define o ponto de partida de cada{" "}
          <em>família de palavras</em>: conjunto de vocábulos que compartilham
          o mesmo radical. Reconhecer a família facilita a compreensão de
          vocabulário desconhecido e é habilidade exigida na Prova de Redação do
          ENEM ao avaliar a diversidade lexical.
        </p>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 560 200"
            width="560"
            height="200"
            aria-label="Diagrama de família de palavras a partir do radical 'pedra'"
          >
            {/* Nó central */}
            <ellipse cx="280" cy="100" rx="60" ry="30" fill="#4f46e5" />
            <text x="280" y="106" textAnchor="middle" fill="white" fontSize="15" fontWeight="bold">pedra</text>
            <text x="280" y="145" textAnchor="middle" fill="#4f46e5" fontSize="11">(primitiva)</text>

            {/* Ramos */}
            <line x1="220" y1="90" x2="100" y2="50" stroke="#4f46e5" strokeWidth="2"/>
            <line x1="220" y1="110" x2="100" y2="150" stroke="#4f46e5" strokeWidth="2"/>
            <line x1="340" y1="90" x2="460" y2="50" stroke="#4f46e5" strokeWidth="2"/>
            <line x1="340" y1="110" x2="460" y2="150" stroke="#4f46e5" strokeWidth="2"/>
            <line x1="280" y1="70" x2="280" y2="20" stroke="#4f46e5" strokeWidth="2"/>

            {/* Nós derivados */}
            <rect x="30" y="30" width="90" height="34" rx="8" fill="#e0e7ff"/>
            <text x="75" y="52" textAnchor="middle" fill="#3730a3" fontSize="13">pedreiro</text>

            <rect x="30" y="130" width="90" height="34" rx="8" fill="#e0e7ff"/>
            <text x="75" y="152" textAnchor="middle" fill="#3730a3" fontSize="13">pedreira</text>

            <rect x="430" y="30" width="100" height="34" rx="8" fill="#e0e7ff"/>
            <text x="480" y="52" textAnchor="middle" fill="#3730a3" fontSize="13">empedrar</text>

            <rect x="430" y="130" width="100" height="34" rx="8" fill="#e0e7ff"/>
            <text x="480" y="152" textAnchor="middle" fill="#3730a3" fontSize="13">pedregoso</text>

            <rect x="225" y="0" width="110" height="30" rx="8" fill="#e0e7ff"/>
            <text x="280" y="20" textAnchor="middle" fill="#3730a3" fontSize="13">pedrinha</text>
          </svg>
          <figcaption>Família de palavras do radical <em>pedr-</em> (primitiva: <em>pedra</em>).</figcaption>
        </figure>
      </section>

      {/* ─────────────────────────────────────────────
          SEÇÃO 6 — DERIVAÇÃO
      ───────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Processos de Formação</span>
        <h2>6. Derivação: Prefixal, Sufixal e Parassintética</h2>
        <p>
          <strong>Derivação</strong> é o processo pelo qual uma nova palavra é
          formada a partir de outra (primitiva ou derivada), geralmente com o
          acréscimo de afixos. É o processo mais produtivo do português e o mais
          cobrado em questões de morfologia no ENEM.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⬅️</span>
            <h3>Derivação Prefixal</h3>
            <p>
              Acrescenta-se apenas um <strong>prefixo</strong> ao radical. A
              classe gramatical geralmente se mantém. Ex: <em>fazer →
              desfazer</em>; <em>feliz → infeliz</em>; <em>ler → reler</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>➡️</span>
            <h3>Derivação Sufixal</h3>
            <p>
              Acrescenta-se apenas um <strong>sufixo</strong>. Pode alterar a
              classe gramatical. Ex: <em>alegre → alegria</em> (adj → subst);{" "}
              <em>cantar → cantora</em>; <em>feliz → felizmente</em> (adj →
              adv).
            </p>
          </div>
          <div className="lesson-card">
            <span>↔️</span>
            <h3>Derivação Parassintética</h3>
            <p>
              Prefixo <strong>e</strong> sufixo são adicionados{" "}
              <strong>simultaneamente</strong>. Remover qualquer um destrói a
              palavra. Ex: <em>en-trist-ecer</em>, <em>a-noite-cer</em>,{" "}
              <em>em-pobr-ecer</em>.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Como identificar parassíntese:</strong> tente remover só o
          prefixo ou só o sufixo. Se a palavra resultante não existir no
          português, é parassíntese. <em>*tristecer</em> e <em>*entriste</em>{" "}
          não existem → <em>entristecer</em> é parassintética.
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SEÇÃO 7 — DERIVAÇÃO REGRESSIVA E IMPRÓPRIA
      ───────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Processos de Formação</span>
        <h2>7. Derivação Regressiva e Derivação Imprópria</h2>
        <p>
          Além dos processos com afixos, existem dois tipos de derivação que
          dispensam acréscimo de morfemas e, por isso, são frequentemente
          confundidos ou ignorados pelos candidatos.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⏪</span>
            <h3>Derivação Regressiva</h3>
            <p>
              Um <strong>verbo gera um substantivo</strong> pela simples
              retirada de sua terminação verbal e adição de uma vogal temática
              nominal. Ex: <em>debater → o debate</em>; <em>atacar → o ataque</em>;{" "}
              <em>chorar → o choro</em>; <em>cantar → o canto</em>. O
              substantivo derivado costuma expressar a ação ou o resultado dela.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>Derivação Imprópria</h3>
            <p>
              Uma palavra muda de <strong>classe gramatical sem nenhuma
              alteração formal</strong>. Ex: <em>o jantar</em> (verbo usado
              como substantivo); <em>Os bons serão recompensados</em>{" "}
              (adjetivo como substantivo); <em>um não</em> (advérbio como
              substantivo).
            </p>
          </div>
        </div>
        <div className="math-block">
          <strong>Exemplos de derivação regressiva no ENEM:</strong>
          <br />• debater → <em>o debate</em> (não: <em>o debatamento</em>)
          <br />• pesquisar → <em>a pesquisa</em>
          <br />• cortar → <em>o corte</em>
          <br />• ajudar → <em>a ajuda</em>
          <br />
          <br />
          <strong>Exemplos de derivação imprópria:</strong>
          <br />• "O <em>sim</em> dela me alegrou." (advérbio → substantivo)
          <br />• "Os <em>pobres</em> têm voz." (adjetivo → substantivo)
          <br />• "Um <em>não</em> corajoso." (advérbio → adjetivo)
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SEÇÃO 8 — COMPOSIÇÃO
          + SVG FLUXO
      ───────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Processos de Formação</span>
        <h2>8. Composição: Justaposição e Aglutinação</h2>
        <p>
          A <strong>composição</strong> é o processo pelo qual duas ou mais
          palavras (ou radicais) se unem para formar um novo vocábulo com
          significado próprio. O significado do composto geralmente não pode ser
          deduzido pela simples soma dos significados das partes.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Justaposição</h3>
            <p>
              Os elementos se unem <strong>sem alteração fonética</strong>,
              mantendo seus sons originais. Geralmente usa hífen (ou espaço).
              Ex: <em>guarda-chuva</em>, <em>passa-tempo</em>,{" "}
              <em>couve-flor</em>, <em>beija-flor</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔀</span>
            <h3>Aglutinação</h3>
            <p>
              Os elementos se unem com <strong>fusão fonética</strong>: um ou
              mais sons são perdidos ou modificados. Ex:{" "}
              <em>fidalgo</em> (filho + de + algo), <em>planalto</em> (plano +
              alto), <em>vinagre</em> (vinho + acre), <em>embora</em> (em +
              boa + hora).
            </p>
          </div>
        </div>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 560 160"
            width="560"
            height="160"
            aria-label="Diagrama comparando justaposição e aglutinação"
          >
            {/* Título justaposição */}
            <text x="140" y="20" textAnchor="middle" fill="#4f46e5" fontSize="13" fontWeight="bold">JUSTAPOSIÇÃO</text>
            {/* Caixas justaposição */}
            <rect x="40" y="30" width="80" height="34" rx="8" fill="#dbeafe"/>
            <text x="80" y="52" textAnchor="middle" fill="#1e40af" fontSize="13">guarda</text>
            <text x="128" y="52" textAnchor="middle" fill="#6b7280" fontSize="18">+</text>
            <rect x="150" y="30" width="80" height="34" rx="8" fill="#dbeafe"/>
            <text x="190" y="52" textAnchor="middle" fill="#1e40af" fontSize="13">chuva</text>
            <text x="240" y="52" textAnchor="middle" fill="#6b7280" fontSize="18">=</text>
            <rect x="60" y="90" width="160" height="34" rx="8" fill="#4f46e5"/>
            <text x="140" y="112" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">guarda-chuva</text>
            <line x1="140" y1="64" x2="140" y2="90" stroke="#4f46e5" strokeWidth="2"/>

            {/* Divisor */}
            <line x1="280" y1="10" x2="280" y2="150" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="6,3"/>

            {/* Título aglutinação */}
            <text x="420" y="20" textAnchor="middle" fill="#7c3aed" fontSize="13" fontWeight="bold">AGLUTINAÇÃO</text>
            {/* Caixas aglutinação */}
            <rect x="295" y="30" width="60" height="34" rx="8" fill="#ede9fe"/>
            <text x="325" y="52" textAnchor="middle" fill="#5b21b6" fontSize="13">plano</text>
            <text x="363" y="52" textAnchor="middle" fill="#6b7280" fontSize="18">+</text>
            <rect x="375" y="30" width="60" height="34" rx="8" fill="#ede9fe"/>
            <text x="405" y="52" textAnchor="middle" fill="#5b21b6" fontSize="13">alto</text>
            <text x="445" y="52" textAnchor="middle" fill="#6b7280" fontSize="18">=</text>
            <rect x="460" y="30" width="80" height="34" rx="8" fill="#ede9fe"/>
            <text x="500" y="52" textAnchor="middle" fill="#5b21b6" fontSize="12">(plan+alto)</text>
            <rect x="330" y="90" width="150" height="34" rx="8" fill="#7c3aed"/>
            <text x="405" y="112" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">planalto</text>
            <text x="405" y="135" textAnchor="middle" fill="#7c3aed" fontSize="11">(fusão: "o" de "plano" cai)</text>
            <line x1="405" y1="64" x2="405" y2="90" stroke="#7c3aed" strokeWidth="2"/>
          </svg>
          <figcaption>Diferença entre justaposição (elementos preservados) e aglutinação (fusão com perda fonética).</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Processo</th>
                <th>Exemplo</th>
                <th>Elementos originais</th>
                <th>Fusão fonética?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Justaposição</td>
                <td><em>beija-flor</em></td>
                <td>beija + flor</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>Justaposição</td>
                <td><em>couve-flor</em></td>
                <td>couve + flor</td>
                <td>Não</td>
              </tr>
              <tr>
                <td>Aglutinação</td>
                <td><em>fidalgo</em></td>
                <td>filho + de + algo</td>
                <td>Sim (filho→fid, de→d)</td>
              </tr>
              <tr>
                <td>Aglutinação</td>
                <td><em>vinagre</em></td>
                <td>vinho + acre</td>
                <td>Sim (vinho→vin)</td>
              </tr>
              <tr>
                <td>Aglutinação</td>
                <td><em>embora</em></td>
                <td>em + boa + hora</td>
                <td>Sim</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SEÇÃO 9 — OUTROS PROCESSOS: ONOMATOPEIA,
          ABREVIAÇÃO E HIBRIDISMO
      ───────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Outros Processos</span>
        <h2>9. Onomatopeia, Abreviação e Hibridismo</h2>
        <p>
          Além da derivação e da composição, o português conta com outros
          processos de enriquecimento lexical, menos produtivos, mas cobrados
          em contextos específicos no ENEM.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔉</span>
            <h3>Onomatopeia</h3>
            <p>
              Palavra criada para imitar um som natural ou produzido por algum
              ser ou objeto. Ex: <em>zum-zum, tinir, miar, coaxar,
              ronronar</em>. Muito usada em textos literários e em histórias
              em quadrinhos.
            </p>
          </div>
          <div className="lesson-card">
            <span>✂️</span>
            <h3>Abreviação / Redução</h3>
            <p>
              Redução de uma palavra mais longa. Ex: <em>foto</em>{" "}
              (fotografia), <em>moto</em> (motocicleta), <em>auto</em>{" "}
              (automóvel), <em>pneu</em> (pneumático). Diferente de sigla.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Hibridismo</h3>
            <p>
              Palavra composta por elementos de línguas diferentes. Ex:{" "}
              <em>automóvel</em> (grego <em>auto</em> + latim{" "}
              <em>mobilis</em>); <em>televisão</em> (grego <em>tele</em> +
              latim <em>visio</em>).
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SEÇÃO 10 — EMPRÉSTIMOS LINGUÍSTICOS,
          NEOLOGISMOS E ARCAÍSMOS
      ───────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Variação e Mudança Lexical</span>
        <h2>10. Estrangeirismos, Neologismos e Arcaísmos</h2>
        <p>
          O léxico de uma língua nunca é estático: palavras entram, saem e se
          transformam ao longo do tempo. Compreender esses fenômenos é
          fundamental para interpretar textos de diferentes épocas e para
          avaliar a adequação do vocabulário em produções escritas.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🇬🇧</span>
            <h3>Anglicismo</h3>
            <p>
              Empréstimo da língua inglesa, muito frequente no léxico da
              tecnologia e do cotidiano contemporâneo. Ex: <em>software,
              download, selfie, smartphone, bacon, show</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🇫🇷</span>
            <h3>Galicismo</h3>
            <p>
              Empréstimo do francês, especialmente na área da moda, culinária e
              cultura. Ex: <em>buffet, ballet, chique, abajur, gourmet,
              garçom</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>🇪🇸</span>
            <h3>Hispanismo</h3>
            <p>
              Empréstimo do espanhol, mais frequente nas regiões de fronteira.
              Ex: <em>abacaxi</em> (via tupi-espanhol), <em>guerrilha,
              rodeio, afã</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>✨</span>
            <h3>Neologismo</h3>
            <p>
              Palavra nova criada para nomear conceitos, objetos ou práticas
              recentes. Pode surgir por derivação, composição ou empréstimo.
              Ex: <em>deletar, internetar, tuitar, selfie</em>.
            </p>
          </div>
          <div className="lesson-card">
            <span>📜</span>
            <h3>Arcaísmo</h3>
            <p>
              Palavra que caiu em desuso na língua padrão contemporânea. Aparece
              em textos históricos, literários ou religiosos. Ex:{" "}
              <em>outrossim</em> (além disso), <em>asinha</em> (depressa),{" "}
              <em>sanhudo</em> (irritado).
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>No ENEM, os estrangeirismos</strong> aparecem em textos de
          publicidade, jornalismo e cotidiano. A questão costuma perguntar sobre
          a adequação do uso, o efeito de sentido ou a possibilidade de
          substituição por equivalente português. Já os arcaísmos aparecem em
          questões de interpretação de texto literário, exigindo compreensão
          contextual.
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SEÇÃO 11 — FAMÍLIAS DE PALAVRAS E REVISÃO
      ───────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Famílias de Palavras e Revisão dos Processos</h2>
        <p>
          Uma <strong>família de palavras</strong> é o conjunto de todos os
          vocábulos que compartilham o mesmo radical. Reconhecer famílias
          amplia o vocabulário e facilita a compreensão de palavras
          desconhecidas. No ENEM, a riqueza lexical da redação é avaliada na
          Competência 1 (domínio da norma culta) e na Competência 3 (seleção
          de informações e repertório).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Processo</th>
                <th>Mecanismo</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Derivação prefixal</td>
                <td>Acréscimo de prefixo</td>
                <td><em>fazer → desfazer</em></td>
              </tr>
              <tr>
                <td>Derivação sufixal</td>
                <td>Acréscimo de sufixo</td>
                <td><em>alegre → alegria</em></td>
              </tr>
              <tr>
                <td>Derivação parassintética</td>
                <td>Prefixo + sufixo simultâneos</td>
                <td><em>entristecer</em></td>
              </tr>
              <tr>
                <td>Derivação regressiva</td>
                <td>Verbo → substantivo (truncamento)</td>
                <td><em>debater → debate</em></td>
              </tr>
              <tr>
                <td>Derivação imprópria</td>
                <td>Mudança de classe sem afixo</td>
                <td><em>o jantar (verbo → subst.)</em></td>
              </tr>
              <tr>
                <td>Composição por justaposição</td>
                <td>União sem fusão fonética</td>
                <td><em>guarda-chuva</em></td>
              </tr>
              <tr>
                <td>Composição por aglutinação</td>
                <td>União com fusão fonética</td>
                <td><em>fidalgo, planalto</em></td>
              </tr>
              <tr>
                <td>Onomatopeia</td>
                <td>Imitação sonora</td>
                <td><em>zum-zum, tinir</em></td>
              </tr>
              <tr>
                <td>Empréstimo linguístico</td>
                <td>Incorporação de outra língua</td>
                <td><em>software, buffet</em></td>
              </tr>
              <tr>
                <td>Neologismo</td>
                <td>Criação de nova palavra</td>
                <td><em>deletar, tuitar</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          SEÇÃO 12 — EXERCÍCIOS
      ───────────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>12. Exercícios</h2>

        <Exercise
          title="Exercício 1 — Morfemas"
          level="Básico"
          statement={
            <p>
              Na palavra <strong>cantávamos</strong>, qual morfema indica que a
              ação ocorreu na 1ª pessoa do plural?
            </p>
          }
          options={[
            { letter: "a", text: "cant- (radical)" },
            { letter: "b", text: "-a- (vogal temática)" },
            { letter: "c", text: "-va- (desinência de modo-tempo)" },
            { letter: "d", text: "-mos (desinência de número-pessoa)", correct: true },
          ]}
          resolution={
            <p>
              A palavra <em>cantávamos</em> é segmentada assim:{" "}
              <em>cant-</em> (radical) + <em>-a-</em> (VT, 1ª conjugação) +{" "}
              <em>-va-</em> (DMT: pretérito imperfeito do indicativo) +{" "}
              <em>-mos</em> (DNP: 1ª pessoa do plural). Portanto, a
              desinência de número-pessoa é <strong>-mos</strong>, que indica
              quem pratica a ação e em que número. Gabarito: d.
            </p>
          }
        />

        <Exercise
          title="Exercício 2 — Processos de Derivação"
          level="Intermediário"
          statement={
            <p>
              Assinale a alternativa em que a palavra destacada foi formada por{" "}
              <strong>derivação parassintética</strong>.
            </p>
          }
          options={[
            { letter: "a", text: "O professor releu o texto." },
            { letter: "b", text: "A felicidade é contagiante." },
            { letter: "c", text: "O ator entristecer o público.", correct: true },
            { letter: "d", text: "O debate foi acalorado." },
          ]}
          resolution={
            <p>
              <em>Entristecer</em> = <em>en-</em> (prefixo) + <em>trist-</em>{" "}
              (radical) + <em>-ecer</em> (sufixo). Removendo apenas o prefixo,
              obteríamos <em>*tristecer</em> (inexistente); removendo apenas o
              sufixo, <em>*entriste</em> (inexistente). Logo, prefixo e sufixo
              foram adicionados <strong>simultaneamente</strong> — definição
              exata de parassíntese. Em (a), <em>releu</em>: apenas prefixo; em
              (b), <em>felicidade</em>: apenas sufixo; em (d), <em>debate</em>:
              derivação regressiva de <em>debater</em>. Gabarito: c.
            </p>
          }
        />

        <Exercise
          title="Exercício 3 — Composição"
          level="Avançado"
          statement={
            <p>
              Analise os vocábulos: <em>fidalgo, guarda-chuva, planalto,
              beija-flor</em>. Identifique corretamente os pares formados por{" "}
              <strong>aglutinação</strong> e por <strong>justaposição</strong>.
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Aglutinação: fidalgo e planalto; Justaposição: guarda-chuva e beija-flor",
              correct: true,
            },
            {
              letter: "b",
              text: "Aglutinação: guarda-chuva e beija-flor; Justaposição: fidalgo e planalto",
            },
            {
              letter: "c",
              text: "Aglutinação: fidalgo e guarda-chuva; Justaposição: planalto e beija-flor",
            },
            {
              letter: "d",
              text: "Aglutinação: beija-flor e planalto; Justaposição: fidalgo e guarda-chuva",
            },
          ]}
          resolution={
            <p>
              <em>Fidalgo</em> = <em>filho + de + algo</em> — houve fusão
              fonética intensa (<em>filho</em> reduziu-se a <em>fid-</em>,{" "}
              <em>de</em> a <em>-d-</em> e <em>algo</em> manteve-se). Logo,
              aglutinação. <em>Planalto</em> = <em>plano + alto</em> — o{" "}
              <em>o</em> final de <em>plano</em> foi suprimido. Logo,
              aglutinação. Já <em>guarda-chuva</em> e <em>beija-flor</em>{" "}
              preservam integralmente os elementos originais (apenas o hífen os
              une), caracterizando justaposição. Gabarito: a.
            </p>
          }
        />

        <Exercise
          title="Exercício 4 — Contexto Real"
          level="Contextualizado"
          statement={
            <p>
              Em um anúncio publicitário, lê-se: <em>"Baixe o app, curta o
              show e poste sua selfie!"</em> As palavras em itálico são
              exemplos de qual fenômeno linguístico?
            </p>
          }
          options={[
            { letter: "a", text: "Arcaísmos — palavras que caíram em desuso" },
            { letter: "b", text: "Neologismos por derivação parassintética" },
            {
              letter: "c",
              text: "Estrangeirismos — empréstimos do inglês (anglicismos)",
              correct: true,
            },
            { letter: "d", text: "Onomatopeias — imitação de sons" },
          ]}
          resolution={
            <p>
              <em>App, show</em> e <em>selfie</em> são palavras originárias do
              inglês (<em>application, show, selfie</em>) incorporadas ao
              português sem tradução. Esse fenômeno denomina-se{" "}
              <strong>estrangeirismo</strong> e, sendo palavras inglesas
              especificamente, recebe o nome de <strong>anglicismo</strong>.
              Note que <em>baixe</em> e <em>poste</em> (usados no sentido de
              "publicar") são neologismos por derivação (verbalização de
              termos da internet), mas as palavras em itálico são
              empréstimos diretos. Gabarito: c.
            </p>
          }
        />

        <Exercise
          title="Exercício 5 — Derivação Regressiva e Imprópria"
          level="Contextualizado"
          statement={
            <p>
              Leia o trecho: <em>"O choro do bebê ecoou pela madrugada."</em>{" "}
              A palavra <strong>choro</strong> foi formada a partir de{" "}
              <em>chorar</em>. Que processo de formação está presente e por quê?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Derivação sufixal, porque acrescentou-se o sufixo -o ao verbo.",
            },
            {
              letter: "b",
              text: "Derivação regressiva, porque um verbo deu origem a um substantivo por truncamento da terminação verbal.",
              correct: true,
            },
            {
              letter: "c",
              text: "Derivação imprópria, porque não houve acréscimo de morfemas.",
            },
            {
              letter: "d",
              text: "Composição por justaposição, porque dois radicais se uniram sem fusão.",
            },
          ]}
          resolution={
            <p>
              Na <strong>derivação regressiva</strong>, um{" "}
              <strong>verbo</strong> origina um <strong>substantivo</strong>{" "}
              pela retirada da terminação verbal (<em>-ar</em>) e acréscimo de
              uma vogal temática nominal. Assim: <em>chora-r → o chor-o</em>.
              Não confunda com derivação imprópria, que ocorre quando uma
              palavra muda de classe sem nenhuma alteração formal (sem
              acréscimo nem retirada de morfemas). Aqui houve alteração na forma
              da palavra. Gabarito: b.
            </p>
          }
        />
      </section>
    </article>
  );
}
