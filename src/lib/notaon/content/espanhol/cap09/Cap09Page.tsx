"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap09Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 9</span>
          <h1>Preposições, Conjunções e Conectores Textuais</h1>
          <p>
            Preposições, conjunções e conectores textuais são os elementos que
            cosem as ideias dentro de um texto. Para o ENEM, compreender o papel
            de cada um desses conectivos é crucial para interpretar textos
            argumentativos, jornalísticos e literários em espanhol. A confusão
            entre <em>por</em> e <em>para</em>, ou entre <em>pero</em> e
            <em> sino</em>, é responsável por erros clássicos na prova. Neste
            capítulo você dominará as preposições mais usadas, as conjunções
            coordenativas e subordinativas e os conectores textuais que organizam
            a argumentação nos textos hispânicos de maior circulação no exame.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Preposições</span>
        <h2>1. Preposições mais usadas no espanhol</h2>
        <p>
          As preposições ligam palavras e expressões, indicando relações de
          tempo, lugar, causa, finalidade, instrumento, companhia, entre outras.
          Em espanhol, as preposições mais frequentes e cobradas no ENEM são:
          <em> a, con, de, en, entre, hacia, hasta, para, por, sin, sobre</em>.
          Cada uma tem usos específicos que se diferem do português — especialmente
          <em> a/para</em> (direção) e <em>por/para</em> (causa vs. finalidade).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Preposição</th>
                <th>Usos principais</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>a</strong></td>
                <td>direção, complemento indireto, hora, distância</td>
                <td><em>Voy a Madrid. Le doy el libro a ella. Son las dos.</em></td>
              </tr>
              <tr>
                <td><strong>con</strong></td>
                <td>companhia, instrumento, modo</td>
                <td><em>Salgo con mis amigos. Escribe con lápiz.</em></td>
              </tr>
              <tr>
                <td><strong>de</strong></td>
                <td>posse, origem, matéria, causa, partitivo</td>
                <td><em>El coche de Juan. Soy de Brasil. Mesa de madera.</em></td>
              </tr>
              <tr>
                <td><strong>en</strong></td>
                <td>lugar estático, tempo (mês/ano/estação), meio</td>
                <td><em>Vivo en Buenos Aires. En julio hace calor. En tren.</em></td>
              </tr>
              <tr>
                <td><strong>hacia</strong></td>
                <td>direção aproximada, atitude em relação a</td>
                <td><em>Camina hacia el norte. Su actitud hacia el trabajo.</em></td>
              </tr>
              <tr>
                <td><strong>hasta</strong></td>
                <td>limite temporal ou espacial</td>
                <td><em>Trabajé hasta las diez. Fui hasta la playa.</em></td>
              </tr>
              <tr>
                <td><strong>sin</strong></td>
                <td>ausência, privação</td>
                <td><em>Salió sin paraguas. Un café sin azúcar.</em></td>
              </tr>
              <tr>
                <td><strong>sobre</strong></td>
                <td>tema, posição superior, aproximação</td>
                <td><em>Un libro sobre historia. El cuadro está sobre la mesa.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Por vs. Para</span>
        <h2>2. Por vs. Para: a distinção mais cobrada no ENEM</h2>
        <p>
          A confusão entre <em>por</em> e <em>para</em> é um dos maiores
          desafios para brasileiros que estudam espanhol. Ambas podem ser
          traduzidas como "por", "para" ou "pelo/pela" em português, mas
          têm usos completamente distintos. Dominar essa distinção é
          fundamental para questões de interpretação e gramática no ENEM.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="700" height="220" aria-label="Diagrama comparativo dos usos de por e para">
            <rect x="0" y="0" width="700" height="220" rx="14" fill="#f8fafc" />
            <rect x="20" y="20" width="320" height="180" rx="10" fill="#fef3c7" />
            <text x="180" y="48" textAnchor="middle" fontWeight="bold" fontSize="18" fill="#92400e">POR</text>
            <text x="180" y="72" textAnchor="middle" fontSize="12" fill="#1f2937">• causa/motivo: <tspan fontStyle="italic">Lo hizo por amor.</tspan></text>
            <text x="180" y="92" textAnchor="middle" fontSize="12" fill="#1f2937">• duração: <tspan fontStyle="italic">Estudié por dos horas.</tspan></text>
            <text x="180" y="112" textAnchor="middle" fontSize="12" fill="#1f2937">• troca: <tspan fontStyle="italic">Lo cambié por otro.</tspan></text>
            <text x="180" y="132" textAnchor="middle" fontSize="12" fill="#1f2937">• meio: <tspan fontStyle="italic">Hablar por teléfono.</tspan></text>
            <text x="180" y="152" textAnchor="middle" fontSize="12" fill="#1f2937">• agente (passiva): <tspan fontStyle="italic">Escrito por García.</tspan></text>
            <text x="180" y="172" textAnchor="middle" fontSize="12" fill="#1f2937">• lugar de passagem: <tspan fontStyle="italic">Pasé por Madrid.</tspan></text>
            <rect x="360" y="20" width="320" height="180" rx="10" fill="#e0e7ff" />
            <text x="520" y="48" textAnchor="middle" fontWeight="bold" fontSize="18" fill="#1e40af">PARA</text>
            <text x="520" y="72" textAnchor="middle" fontSize="12" fill="#1f2937">• finalidade: <tspan fontStyle="italic">Estudio para aprender.</tspan></text>
            <text x="520" y="92" textAnchor="middle" fontSize="12" fill="#1f2937">• destino: <tspan fontStyle="italic">Salgo para México.</tspan></text>
            <text x="520" y="112" textAnchor="middle" fontSize="12" fill="#1f2937">• prazo: <tspan fontStyle="italic">Lo necesito para el lunes.</tspan></text>
            <text x="520" y="132" textAnchor="middle" fontSize="12" fill="#1f2937">• destinatário: <tspan fontStyle="italic">Este regalo es para ti.</tspan></text>
            <text x="520" y="152" textAnchor="middle" fontSize="12" fill="#1f2937">• opinião: <tspan fontStyle="italic">Para mí, es difícil.</tspan></text>
            <text x="520" y="172" textAnchor="middle" fontSize="12" fill="#1f2937">• comparação incomum: <tspan fontStyle="italic">Para niño, habla bien.</tspan></text>
          </svg>
          <figcaption>Comparativo visual dos usos de <em>por</em> e <em>para</em> em espanhol — distinção essencial para o ENEM.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <strong>Regra de ouro:</strong> Use <em>por</em> para expressar a
          <strong>causa</strong> (o motivo pelo qual algo acontece) e <em>para</em>
          para expressar a <strong>finalidade</strong> (o objetivo, a meta). Compare:
          <em> Estudia por obligación</em> (estuda por obrigação — causa) vs.
          <em> Estudia para aprender</em> (estuda para aprender — finalidade).
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Preposições de tempo e lugar</span>
        <h2>3. Preposições de tempo e lugar</h2>
        <p>
          As preposições de tempo e lugar formam um subsistema importante e
          muito cobrado. Algumas diferenças em relação ao português são armadilhas
          frequentes: em espanhol se diz <em>en casa</em> (em casa) sem artigo,
          e <em>en el trabajo</em> (no trabalho) com artigo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Contexto</th>
                <th>Preposição</th>
                <th>Exemplo</th>
                <th>Equivalente em PT</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Lugar estático</td><td><em>en</em></td><td><em>Estoy en casa.</em></td><td>Estou em casa.</td></tr>
              <tr><td>Movimento para</td><td><em>a</em></td><td><em>Voy a la tienda.</em></td><td>Vou à loja.</td></tr>
              <tr><td>Movimento desde</td><td><em>de / desde</em></td><td><em>Vengo de México.</em></td><td>Venho do México.</td></tr>
              <tr><td>Movimento por dentro</td><td><em>por</em></td><td><em>Paseo por el parque.</em></td><td>Passeio pelo parque.</td></tr>
              <tr><td>Hora</td><td><em>a las</em></td><td><em>La reunión es a las tres.</em></td><td>A reunião é às três.</td></tr>
              <tr><td>Mês / ano / estação</td><td><em>en</em></td><td><em>Nació en mayo / en 2001.</em></td><td>Nasceu em maio.</td></tr>
              <tr><td>Dia da semana</td><td><em>el / los</em></td><td><em>Trabajo el lunes.</em></td><td>Trabalho na segunda.</td></tr>
              <tr><td>Limite de tempo</td><td><em>hasta / desde</em></td><td><em>Desde las 8 hasta las 5.</em></td><td>Das 8 às 5.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conjunções coordenativas</span>
        <h2>4. Conjunções coordenativas</h2>
        <p>
          As conjunções coordenativas ligam orações ou termos de mesma função
          sintática. Em espanhol, há variações fonéticas importantes que o
          ENEM costuma cobrar: <em>y</em> torna-se <em>e</em> antes de palavras
          que começam com <em>i-</em> ou <em>hi-</em>; <em>o</em> torna-se
          <em> u</em> antes de palavras que começam com <em>o-</em> ou <em>ho-</em>.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>➕</span>
            <h3>y / e (e)</h3>
            <p>adição: <em>María y Juan / padres e hijos</em><br />(e→ antes de i/hi)</p>
          </div>
          <div className="lesson-card">
            <span>↔️</span>
            <h3>o / u (ou)</h3>
            <p>alternância: <em>café o té / siete u ocho</em><br />(u→ antes de o/ho)</p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>pero (mas)</h3>
            <p>contraste simples: <em>Quiero ir, pero no puedo.</em></p>
          </div>
          <div className="lesson-card">
            <span>🚫</span>
            <h3>sino (mas sim)</h3>
            <p>substituição após negação: <em>No es blanco, sino negro.</em></p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Pero vs. Sino:</strong> Esta é uma das distinções mais cobradas no ENEM.
          Use <em>pero</em> para qualquer contraste. Use <em>sino</em> apenas quando há uma
          negação na oração anterior e o segundo elemento <strong>substitui</strong>
          o primeiro: <em>No quiero agua, sino jugo.</em> (Não quero água, mas sim suco.)
          Se as orações têm sujeito verbal, usa-se <em>sino que</em>:
          <em> No lo hizo él, sino que lo hizo ella.</em>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conjunções subordinativas</span>
        <h2>5. Conjunções subordinativas principais</h2>
        <p>
          As conjunções subordinativas introduzem orações que dependem de uma
          oração principal. São essenciais para textos argumentativos e narrativos.
          O ENEM frequentemente pede ao candidato que identifique o tipo de
          relação lógica estabelecida entre duas orações.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Conjunção</th>
                <th>Tipo</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><em>que</em></td><td>completiva (substantiva)</td><td><em>Creo que tienes razón.</em></td></tr>
              <tr><td><em>porque</em></td><td>causal</td><td><em>No fui porque estaba enfermo.</em></td></tr>
              <tr><td><em>aunque</em></td><td>concessiva</td><td><em>Salí aunque llovía.</em></td></tr>
              <tr><td><em>si</em></td><td>condicional</td><td><em>Si estudias, aprobarás.</em></td></tr>
              <tr><td><em>cuando</em></td><td>temporal</td><td><em>Te llamo cuando llegue.</em></td></tr>
              <tr><td><em>mientras</em></td><td>temporal / concessivo</td><td><em>Escucho música mientras trabajo.</em></td></tr>
              <tr><td><em>para que</em></td><td>final (+ subjuntivo)</td><td><em>Te lo digo para que lo sepas.</em></td></tr>
              <tr><td><em>a menos que</em></td><td>condicional negativa (+ subj.)</td><td><em>Iré, a menos que llueva.</em></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conectores textuais</span>
        <h2>6. Conectores textuais: função e uso em textos argumentativos</h2>
        <p>
          Os conectores textuais organizam a argumentação, indicando adição,
          contraste, causa, consequência, exemplificação ou conclusão.
          São os elementos que dão coesão ao texto e são frequentemente
          objeto de questões ENEM que pedem ao candidato para identificar
          a relação lógica entre partes do texto.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 230" width="700" height="230" aria-label="Mapa visual dos tipos de conectores textuais em espanhol">
            <rect x="0" y="0" width="700" height="230" rx="14" fill="#f8fafc" />
            <rect x="270" y="85" width="160" height="50" rx="8" fill="#1e40af" />
            <text x="350" y="115" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">CONECTORES</text>
            <defs>
              <marker id="cap09arr1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#6b7280" />
              </marker>
            </defs>
            {/* Causa */}
            <rect x="20" y="20" width="130" height="50" rx="8" fill="#fce7f3" />
            <text x="85" y="43" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#9d174d">CAUSA</text>
            <text x="85" y="60" textAnchor="middle" fontSize="10" fill="#374151">porque, ya que, puesto que</text>
            <line x1="150" y1="45" x2="268" y2="100" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#cap09arr1)" />
            {/* Consequência */}
            <rect x="555" y="20" width="130" height="50" rx="8" fill="#d1fae5" />
            <text x="620" y="43" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">CONSEQUÊNCIA</text>
            <text x="620" y="60" textAnchor="middle" fontSize="10" fill="#374151">por lo tanto, así que</text>
            <line x1="555" y1="45" x2="432" y2="100" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#cap09arr1)" />
            {/* Contraste */}
            <rect x="20" y="160" width="130" height="50" rx="8" fill="#fef3c7" />
            <text x="85" y="183" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">CONTRASTE</text>
            <text x="85" y="200" textAnchor="middle" fontSize="10" fill="#374151">sin embargo, no obstante</text>
            <line x1="150" y1="185" x2="268" y2="130" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#cap09arr1)" />
            {/* Adição */}
            <rect x="555" y="160" width="130" height="50" rx="8" fill="#e0e7ff" />
            <text x="620" y="183" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">ADIÇÃO</text>
            <text x="620" y="200" textAnchor="middle" fontSize="10" fill="#374151">además, también, incluso</text>
            <line x1="555" y1="185" x2="432" y2="130" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#cap09arr1)" />
            {/* Conclusão */}
            <rect x="270" y="170" width="160" height="50" rx="8" fill="#dbeafe" />
            <text x="350" y="193" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">CONCLUSÃO</text>
            <text x="350" y="210" textAnchor="middle" fontSize="10" fill="#374151">en conclusión, en resumen</text>
          </svg>
          <figcaption>Mapa visual dos tipos de conectores textuais em espanhol e suas funções argumentativas.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Função</th>
                <th>Conectores</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Adição</strong></td>
                <td>además, también, incluso, asimismo, igualmente</td>
                <td><em>Además, el problema afecta a todos.</em></td>
              </tr>
              <tr>
                <td><strong>Contraste</strong></td>
                <td>sin embargo, no obstante, a pesar de, aunque, pero, mientras que</td>
                <td><em>Sin embargo, los datos muestran lo contrario.</em></td>
              </tr>
              <tr>
                <td><strong>Causa</strong></td>
                <td>porque, ya que, puesto que, dado que, debido a</td>
                <td><em>Ya que no hay agua, el proyecto fracasó.</em></td>
              </tr>
              <tr>
                <td><strong>Consequência</strong></td>
                <td>por lo tanto, así que, de ahí que, por eso, en consecuencia</td>
                <td><em>Por lo tanto, se necesita una solución urgente.</em></td>
              </tr>
              <tr>
                <td><strong>Exemplificação</strong></td>
                <td>por ejemplo, es decir, es más, como, tal como</td>
                <td><em>Por ejemplo, en Chile el índice subió un 5%.</em></td>
              </tr>
              <tr>
                <td><strong>Conclusão</strong></td>
                <td>en conclusión, en resumen, en definitiva, finalmente</td>
                <td><em>En conclusión, el modelo no es sostenible.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conectores de concessão</span>
        <h2>7. Conectores de concessão e contraste: nuances importantes</h2>
        <p>
          Os conectores de concessão introduzem um obstáculo que não impede
          a realização do que é dito na oração principal. São muito frequentes
          em textos argumentativos e de opinião — justamente os mais cobrados
          no ENEM para a disciplina de espanhol.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔄</span>
            <h3>aunque</h3>
            <p>= embora, apesar de, mesmo que<br /><em>Aunque llueva, salgo.</em></p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>a pesar de (que)</h3>
            <p>= apesar de (que)<br /><em>A pesar de todo, siguió adelante.</em></p>
          </div>
          <div className="lesson-card">
            <span>↩️</span>
            <h3>sin embargo</h3>
            <p>= no entanto, porém<br /><em>Sin embargo, hay excepciones.</em></p>
          </div>
          <div className="lesson-card">
            <span>🛑</span>
            <h3>no obstante</h3>
            <p>= não obstante, contudo<br /><em>No obstante, el proyecto continúa.</em></p>
          </div>
        </div>
        <div className="math-block">
          💡 <strong>Dica ENEM:</strong> Ao identificar um conector textual numa questão,
          pergunte-se: ele está adicionando (<em>además</em>), contrastando
          (<em>sin embargo</em>), explicando a causa (<em>porque</em>), mostrando
          a consequência (<em>por lo tanto</em>) ou exemplificando (<em>por ejemplo</em>)?
          A função do conector revela a relação lógica entre os argumentos do texto
          e é a chave para responder corretamente às questões de interpretação.
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Resumo visual</span>
        <h2>8. Resumo: as preposições e conectores mais cobrados</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Palavra</th>
                <th>Classe</th>
                <th>Tradução principal</th>
                <th>Armadilha frequente</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><em>sino</em></td><td>conj. adversativa</td><td>mas sim</td><td>confundir com <em>pero</em></td></tr>
              <tr><td><em>para</em></td><td>preposição</td><td>para (finalidade/destino)</td><td>confundir com <em>por</em></td></tr>
              <tr><td><em>por</em></td><td>preposição</td><td>por (causa/troca/agente)</td><td>confundir com <em>para</em></td></tr>
              <tr><td><em>aunque</em></td><td>conj. concessiva</td><td>embora / mesmo que</td><td>confundir com <em>porque</em></td></tr>
              <tr><td><em>sin embargo</em></td><td>conector adversativo</td><td>no entanto / porém</td><td>traduzir como "sem embargo"</td></tr>
              <tr><td><em>además</em></td><td>conector aditivo</td><td>além disso</td><td>confundir com <em>también</em></td></tr>
              <tr><td><em>por lo tanto</em></td><td>conector conclusivo</td><td>portanto</td><td>confundir com causa</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Por vs. Para"
          statement={
            <p>
              Escolha a preposição correta para completar a frase:<br />
              <em>"Este regalo es ___ ti."</em>
            </p>
          }
          options={[
            { letter: "a", text: "por" },
            { letter: "b", text: "para", correct: true },
            { letter: "c", text: "con" },
            { letter: "d", text: "de" },
          ]}
          resolution={
            <p>
              Resposta: <strong>b) para</strong>. Quando expressamos
              o destinatário de algo (para quem algo é), usamos a preposição
              <em> para</em>: <em>Este regalo es para ti</em> = "Este presente
              é para você". A preposição <em>por</em> expressaria causa ou
              troca, não destinatário.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Pero vs. Sino"
          statement={
            <p>
              Escolha a conjunção correta:<br />
              <em>"No quiero café, ___ té."</em>
            </p>
          }
          options={[
            { letter: "a", text: "pero" },
            { letter: "b", text: "aunque" },
            { letter: "c", text: "sino", correct: true },
            { letter: "d", text: "porque" },
          ]}
          resolution={
            <p>
              Resposta: <strong>c) sino</strong>. A conjunção <em>sino</em>
              é usada após uma negação quando o segundo elemento <strong>substitui</strong>
              o primeiro: "Não quero café, mas sim chá." <em>Pero</em> também
              expressa contraste, mas não indica substituição após negação;
              seria usado como "Não quero café, mas vou tomar um."
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Identificação de conectores textuais"
          statement={
            <p>
              Leia o trecho: <em>"La contaminación del aire ha aumentado
              considerablemente; sin embargo, las autoridades no han tomado
              medidas efectivas. Además, los datos más recientes señalan que
              la situación empeoró en los últimos dos años."</em><br />
              Qual é a relação lógica estabelecida por <em>sin embargo</em>
              neste contexto?
            </p>
          }
          options={[
            { letter: "a", text: "Indica a causa do aumento da contaminação." },
            { letter: "b", text: "Estabelece contraste entre o aumento da contaminação e a inação das autoridades.", correct: true },
            { letter: "c", text: "Indica a consequência do problema ambiental." },
            { letter: "d", text: "Acrescenta uma informação adicional ao argumento anterior." },
          ]}
          resolution={
            <p>
              Resposta: <strong>b)</strong>. O conector <em>sin embargo</em>
              (no entanto / porém) é adversativo: indica contraste ou oposição
              entre duas ideias. Aqui, contrasta o fato de que a contaminação
              aumentou (esperança de ação) com a inação das autoridades.
              O conector <em>además</em> (além disso), logo após, exerce função
              aditiva, acrescentando mais informação ao argumento.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Preposições em texto jornalístico"
          statement={
            <p>
              Leia o trecho: <em>"El gobierno aprobó la ley por unanimidad
              para proteger el medioambiente. Sin embargo, los grupos
              industriales argumentan que la medida fue tomada sin consulta
              previa a los sectores afectados."</em><br />
              Neste fragmento, qual é a função da preposição <em>para</em>?
            </p>
          }
          options={[
            { letter: "a", text: "Indicar a causa pela qual a lei foi aprovada." },
            { letter: "b", text: "Indicar o agente da ação governamental." },
            { letter: "c", text: "Indicar a finalidade da aprovação da lei.", correct: true },
            { letter: "d", text: "Indicar a duração do processo legislativo." },
          ]}
          resolution={
            <p>
              Resposta: <strong>c)</strong>. A preposição <em>para</em>
              introduz uma oração infinitiva de finalidade:
              <em> para proteger el medioambiente</em> = "para proteger o meio
              ambiente" (objetivo/meta da lei). Note que a preposição <em>por</em>
              em <em>por unanimidad</em> indica modo, e a preposição <em>sin</em>
              em <em>sin consulta</em> indica ausência.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Função do conector em texto argumentativo"
          statement={
            <p>
              Leia: <em>"La tecnología ha mejorado la calidad de vida en
              muchos aspectos. Por ejemplo, la medicina avanzó gracias a los
              equipos digitales. Por lo tanto, invertir en innovación tecnológica
              debería ser prioridad de los gobiernos."</em><br />
              Qual é a estrutura argumentativa do texto?
            </p>
          }
          options={[
            { letter: "a", text: "Problema → causa → solução." },
            { letter: "b", text: "Tese → exemplificação → conclusão.", correct: true },
            { letter: "c", text: "Hipótese → refutação → síntese." },
            { letter: "d", text: "Descrição → contraste → consequência." },
          ]}
          resolution={
            <p>
              Resposta: <strong>b)</strong>. O texto apresenta uma
              <strong>tese</strong> (a tecnologia melhorou a qualidade de vida),
              seguida de <strong>exemplificação</strong> introduzida por
              <em> por ejemplo</em> (o caso da medicina), e encerra com uma
              <strong>conclusão</strong> introduzida por <em>por lo tanto</em>
              (portanto, investir em tecnologia deve ser prioridade). Os
              conectores textuais estruturam e revelam o raciocínio do autor.
            </p>
          }
        />
      </section>

    </article>
  );
}
