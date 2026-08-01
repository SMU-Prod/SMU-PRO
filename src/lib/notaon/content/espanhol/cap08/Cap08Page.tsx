"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap08Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 8</span>
          <h1>Adjetivos, Advérbios e Numerais</h1>
          <p>
            Os adjetivos, advérbios e numerais são elementos fundamentais para
            a compreensão de textos em espanhol, especialmente nos gêneros
            jornalísticos, literários e argumentativos que o ENEM privilegia.
            Dominar a concordância do adjetivo, reconhecer como sua posição
            altera o significado e identificar os advérbios modificadores são
            habilidades que garantem pontos valiosos na prova. Neste capítulo
            você aprenderá as regras essenciais com foco total nas cobranças
            reais do exame, incluindo uso de numerais em estatísticas, datas e
            medidas — recurso frequente em textos informativos e científicos.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Adjetivos</span>
        <h2>1. Adjetivos qualificativos e concordância</h2>
        <p>
          Em espanhol, o adjetivo concorda em gênero (masculino/feminino) e
          número (singular/plural) com o substantivo a que se refere. Esta é
          a regra mais básica e, ao mesmo tempo, uma das mais cobradas. A
          posição padrão do adjetivo é <strong>pós-nominal</strong> (após o
          substantivo), ao contrário do português, em que os adjetivos
          avaliativos muitas vezes precedem o nome.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Substantivo</th>
                <th>Adjetivo (masc. sing.)</th>
                <th>Forma feminina</th>
                <th>Plural masc.</th>
                <th>Plural fem.</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>chico</td><td>alto</td><td>alta</td><td>altos</td><td>altas</td></tr>
              <tr><td>libro</td><td>rojo</td><td>roja</td><td>rojos</td><td>rojas</td></tr>
              <tr><td>ciudad</td><td>grande</td><td>grande</td><td>grandes</td><td>grandes</td></tr>
              <tr><td>problema</td><td>grave</td><td>grave</td><td>graves</td><td>graves</td></tr>
              <tr><td>examen</td><td>difícil</td><td>difícil</td><td>difíciles</td><td>difíciles</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Adjetivos terminados em <em>-o</em> têm quatro formas (alto/alta/altos/altas).
          Adjetivos terminados em <em>-e</em> ou em consoante costumam ter apenas
          duas formas (singular/plural), sem distinção de gênero: <em>grande/grandes</em>,
          <em>difícil/difíciles</em>. Atenção: adjetivos de nacionalidade terminados em
          consoante acrescentam <em>-a</em> no feminino — <em>español/española</em>,
          <em>inglés/inglesa</em>.
        </p>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Posição do adjetivo</span>
        <h2>2. Posição pré-nominal vs. pós-nominal — mudança de sentido</h2>
        <p>
          Em espanhol, alguns adjetivos <strong>mudam de significado</strong>
          dependendo de sua posição em relação ao substantivo. Isso é um ponto
          de diferenciação clássico no ENEM, que apresenta textos literários
          onde o autor explora esses deslocamentos semanticamente.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Adjetivo</th>
                <th>Pós-nominal (sentido literal/objetivo)</th>
                <th>Pré-nominal (sentido subjetivo/figurado)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>grande</strong></td>
                <td><em>un hombre grande</em> = homem de grande estatura</td>
                <td><em>un gran hombre</em> = homem de grande caráter</td>
              </tr>
              <tr>
                <td><strong>pobre</strong></td>
                <td><em>un hombre pobre</em> = homem sem dinheiro</td>
                <td><em>un pobre hombre</em> = coitado, digno de pena</td>
              </tr>
              <tr>
                <td><strong>mismo</strong></td>
                <td><em>el director mismo</em> = o próprio diretor</td>
                <td><em>el mismo director</em> = o mesmo diretor</td>
              </tr>
              <tr>
                <td><strong>viejo</strong></td>
                <td><em>un amigo viejo</em> = amigo de idade avançada</td>
                <td><em>un viejo amigo</em> = amigo de longa data</td>
              </tr>
              <tr>
                <td><strong>nuevo</strong></td>
                <td><em>un coche nuevo</em> = carro recém-fabricado</td>
                <td><em>un nuevo coche</em> = mais um carro / outro carro</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Diagrama mostrando mudança de sentido do adjetivo pela posição">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <rect x="30" y="40" width="280" height="120" rx="10" fill="#dbeafe" />
            <text x="170" y="68" textAnchor="middle" fontWeight="bold" fontSize="15" fill="#1e40af">PÓS-NOMINAL</text>
            <text x="170" y="95" textAnchor="middle" fontSize="14" fill="#1f2937">un hombre grande</text>
            <text x="170" y="117" textAnchor="middle" fontSize="12" fill="#1e40af">→ estatura física</text>
            <text x="170" y="142" textAnchor="middle" fontSize="11" fill="#374151">(sentido literal, objetivo)</text>
            <rect x="390" y="40" width="280" height="120" rx="10" fill="#d1fae5" />
            <text x="530" y="68" textAnchor="middle" fontWeight="bold" fontSize="15" fill="#065f46">PRÉ-NOMINAL</text>
            <text x="530" y="95" textAnchor="middle" fontSize="14" fill="#1f2937">un gran hombre</text>
            <text x="530" y="117" textAnchor="middle" fontSize="12" fill="#065f46">→ grandeza moral</text>
            <text x="530" y="142" textAnchor="middle" fontSize="11" fill="#374151">(sentido subjetivo, figurado)</text>
            <defs>
              <marker id="cap08arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6b7280" />
              </marker>
            </defs>
            <line x1="315" y1="100" x2="385" y2="100" stroke="#6b7280" strokeWidth="2" markerEnd="url(#cap08arr1)" />
            <text x="350" y="90" textAnchor="middle" fontSize="11" fill="#6b7280">posição</text>
          </svg>
          <figcaption>A posição pré ou pós-nominal pode alterar completamente o significado do adjetivo em espanhol.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Apócope</span>
        <h2>3. Apócope dos adjetivos</h2>
        <p>
          Alguns adjetivos perdem a vogal ou sílaba final quando colocados
          imediatamente antes de um substantivo masculino singular. Este fenômeno
          chama-se <strong>apócope</strong> e é frequentemente cobrado no ENEM
          em textos que empregam expressões fixas como títulos, nomes de eventos
          ou referências a edições de algo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma completa</th>
                <th>Forma apocopada</th>
                <th>Contexto de uso</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>bueno</td><td><strong>buen</strong></td><td>antes de sust. masc. sing.</td><td><em>un buen libro</em></td></tr>
              <tr><td>malo</td><td><strong>mal</strong></td><td>antes de sust. masc. sing.</td><td><em>un mal momento</em></td></tr>
              <tr><td>grande</td><td><strong>gran</strong></td><td>antes de qualquer sust. sing.</td><td><em>una gran idea / un gran plan</em></td></tr>
              <tr><td>primero</td><td><strong>primer</strong></td><td>antes de sust. masc. sing.</td><td><em>el primer día</em></td></tr>
              <tr><td>tercero</td><td><strong>tercer</strong></td><td>antes de sust. masc. sing.</td><td><em>el tercer piso</em></td></tr>
              <tr><td>santo</td><td><strong>san</strong></td><td>antes de nome masculino</td><td><em>San Pablo, San Martín</em></td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção:</strong> <em>gran</em> apocopa tanto antes de masculino quanto de
          feminino singular: <em>un gran libro</em> / <em>una gran mujer</em>. Mas
          <em>buen</em> e <em>mal</em> só apocopam antes de masculino. Antes de feminino
          mantém-se a forma completa: <em>una buena idea</em>, <em>una mala noticia</em>.
          Após o substantivo, sempre a forma completa: <em>el libro es bueno</em>.
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Graus do adjetivo</span>
        <h2>4. Graus do adjetivo: comparativo e superlativo</h2>
        <p>
          O espanhol forma os graus do adjetivo de modo muito semelhante ao
          português, mas com particularidades que merecem atenção. O
          <strong>comparativo</strong> pode ser de superioridade, igualdade ou
          inferioridade. O <strong>superlativo</strong> pode ser relativo
          (el más…) ou absoluto (-ísimo ou <em>muy</em> + adjetivo).
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📈</span>
            <h3>Superioridade</h3>
            <p><em>más + adj. + que</em><br />Ana es más alta que Luis.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Igualdade</h3>
            <p><em>tan + adj. + como</em><br />Es tan inteligente como su hermana.</p>
          </div>
          <div className="lesson-card">
            <span>📉</span>
            <h3>Inferioridade</h3>
            <p><em>menos + adj. + que</em><br />Este libro es menos interesante.</p>
          </div>
          <div className="lesson-card">
            <span>🏆</span>
            <h3>Superlativo absoluto</h3>
            <p><em>adj. + -ísimo/a</em><br />La comida estaba riquísima.</p>
          </div>
        </div>
        <p>
          Existem formas irregulares consagradas pelo uso: <em>bueno → mejor</em>,
          <em>malo → peor</em>, <em>grande → mayor</em>, <em>pequeño → menor</em>.
          Essas formas irregulares substituem as formas regulares no comparativo:
          <em>Esta película es mejor que la otra</em> (e não <em>*más buena que</em>).
          No superlativo relativo: <em>el mejor alumno de la clase</em>.
        </p>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Advérbios</span>
        <h2>5. Advérbios de modo, tempo, lugar e quantidade</h2>
        <p>
          Os advérbios modificam verbos, adjetivos ou outros advérbios,
          acrescentando circunstâncias de modo, tempo, lugar, quantidade,
          afirmação ou negação. No ENEM, reconhecer um advérbio e seu papel
          textual é fundamental para interpretar corretamente afirmações,
          negações e gradações de sentido em textos jornalísticos e literários.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Exemplos principais</th>
                <th>Uso em contexto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Modo</strong></td>
                <td>bien, mal, así, despacio, rápidamente</td>
                <td><em>Habla muy bien el español.</em></td>
              </tr>
              <tr>
                <td><strong>Tempo</strong></td>
                <td>hoy, ayer, mañana, siempre, nunca, ya, todavía, aún, antes, después</td>
                <td><em>Ya no vivo aquí.</em></td>
              </tr>
              <tr>
                <td><strong>Lugar</strong></td>
                <td>aquí, allí, allá, ahí, arriba, abajo, cerca, lejos, dentro, fuera</td>
                <td><em>El libro está arriba.</em></td>
              </tr>
              <tr>
                <td><strong>Quantidade</strong></td>
                <td>muy, mucho, poco, bastante, demasiado, casi, apenas, nada</td>
                <td><em>Hay demasiado ruido aquí.</em></td>
              </tr>
              <tr>
                <td><strong>Afirmação</strong></td>
                <td>sí, también, claro, efectivamente, ciertamente</td>
                <td><em>Sí, tienes razón.</em></td>
              </tr>
              <tr>
                <td><strong>Negação</strong></td>
                <td>no, nunca, jamás, tampoco, nada, nadie</td>
                <td><em>Nunca he estado en México.</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Advérbios em -mente:</strong> Para formar advérbios de modo a partir de
          adjetivos, adiciona-se <em>-mente</em> à forma feminina do adjetivo:
          <em>rápido → rápida → rápidamente</em>; <em>fácil → fácilmente</em>
          (adjetivos de uma forma recebem <em>-mente</em> direto). Quando dois advérbios
          em -mente aparecem juntos, apenas o último mantém o sufixo:
          <em>habló clara y pausadamente</em>.
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Locuciones adverbiales</span>
        <h2>6. Locuções adverbiais frequentes no ENEM</h2>
        <p>
          As <em>locuciones adverbiales</em> são expressões fixas de dois ou
          mais vocábulos que funcionam como advérbio. São muito comuns em textos
          jornalísticos e literários cobrados no ENEM. Conhecê-las evita
          interpretações equivocadas e permite compreender melhor a coesão textual.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⏱️</span>
            <h3>A veces</h3>
            <p>= às vezes<br /><em>A veces llueve en verano.</em></p>
          </div>
          <div className="lesson-card">
            <span>🔄</span>
            <h3>De vez en cuando</h3>
            <p>= de vez em quando<br /><em>Lo veo de vez en cuando.</em></p>
          </div>
          <div className="lesson-card">
            <span>📍</span>
            <h3>En seguida</h3>
            <p>= imediatamente<br /><em>Vengo en seguida.</em></p>
          </div>
          <div className="lesson-card">
            <span>🌟</span>
            <h3>Por fin</h3>
            <p>= finalmente / por fim<br /><em>Por fin llegó la carta.</em></p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Locução adverbial</th><th>Tradução</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr><td><em>de repente</em></td><td>de repente / subitamente</td><td><em>De repente escuchamos un ruido.</em></td></tr>
              <tr><td><em>a menudo</em></td><td>frequentemente</td><td><em>A menudo viajo al interior.</em></td></tr>
              <tr><td><em>sin embargo</em></td><td>no entanto / porém</td><td><em>Estudió mucho; sin embargo, no aprobó.</em></td></tr>
              <tr><td><em>a propósito</em></td><td>propositalmente</td><td><em>Lo hizo a propósito.</em></td></tr>
              <tr><td><em>por supuesto</em></td><td>claro / com certeza</td><td><em>Por supuesto que te ayudo.</em></td></tr>
              <tr><td><em>en absoluto</em></td><td>de jeito nenhum (negação enfática)</td><td><em>¿Te molesta? En absoluto.</em></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Numerais cardinais</span>
        <h2>7. Numerais cardinais e seu uso no ENEM</h2>
        <p>
          Os numerais cardinais são usados para contar e medir. No ENEM, eles
          aparecem em textos informativos com estatísticas, porcentagens, dados
          científicos e medidas. É importante conhecer as formas escritas para
          interpretá-los corretamente, especialmente quando o numeral aparece por
          extenso no texto em espanhol.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Numeral</th><th>Espanhol</th><th>Numeral</th><th>Espanhol</th></tr>
            </thead>
            <tbody>
              <tr><td>0</td><td>cero</td><td>11</td><td>once</td></tr>
              <tr><td>1</td><td>uno / un / una</td><td>12</td><td>doce</td></tr>
              <tr><td>2</td><td>dos</td><td>15</td><td>quince</td></tr>
              <tr><td>3</td><td>tres</td><td>16</td><td>dieciséis</td></tr>
              <tr><td>5</td><td>cinco</td><td>20</td><td>veinte</td></tr>
              <tr><td>7</td><td>siete</td><td>21</td><td>veintiuno</td></tr>
              <tr><td>8</td><td>ocho</td><td>30</td><td>treinta</td></tr>
              <tr><td>9</td><td>nueve</td><td>100</td><td>cien / ciento</td></tr>
              <tr><td>10</td><td>diez</td><td>1.000</td><td>mil</td></tr>
              <tr><td>4</td><td>cuatro</td><td>1.000.000</td><td>un millón</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Atenção ao "uno":</strong> <em>uno</em> apocopa para <em>un</em> antes de
          substantivo masculino (<em>un libro</em>) e usa <em>una</em> antes de feminino
          (<em>una casa</em>). A partir de 31, as dezenas se conectam com <em>y</em>:
          <em>treinta y uno</em>, <em>cuarenta y cinco</em>. De 16 a 29 as formas são
          soldadas: <em>dieciséis, veintidós, veintitrés</em>.
        </p>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Numerais ordinais</span>
        <h2>8. Numerais ordinais e apócope</h2>
        <p>
          Os ordinais em espanhol concordam em gênero e número com o substantivo.
          Os mais cobrados no ENEM são os primeiros dez, especialmente em
          expressões como <em>el primer lugar</em>, <em>la tercera edición</em>,
          <em>el segundo capítulo</em>. Lembre-se de que <em>primero</em> e
          <em>tercero</em> apocopam antes de masculino singular.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>1️⃣</span>
            <h3>1º / 1ª</h3>
            <p>primero/a<br /><em>primer</em> (apócope masc. sing.)<br /><em>el primer premio</em></p>
          </div>
          <div className="lesson-card">
            <span>2️⃣</span>
            <h3>2º / 2ª</h3>
            <p>segundo/a<br />sem apócope<br /><em>el segundo lugar</em></p>
          </div>
          <div className="lesson-card">
            <span>3️⃣</span>
            <h3>3º / 3ª</h3>
            <p>tercero/a<br /><em>tercer</em> (apócope masc. sing.)<br /><em>el tercer piso</em></p>
          </div>
          <div className="lesson-card">
            <span>🔢</span>
            <h3>4º a 10º</h3>
            <p>cuarto, quinto, sexto, séptimo, octavo, noveno, décimo — sem apócope</p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 180" width="700" height="180" aria-label="Linha com os ordinais do 1 ao 9 em espanhol">
            <rect x="0" y="0" width="700" height="180" rx="14" fill="#f8fafc" />
            <defs>
              <marker id="cap08arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#2563eb" />
              </marker>
            </defs>
            <line x1="40" y1="90" x2="660" y2="90" stroke="#2563eb" strokeWidth="2" markerEnd="url(#cap08arr2)" />
            {[
              { x: 80, label: "1º", name: "primero" },
              { x: 150, label: "2º", name: "segundo" },
              { x: 220, label: "3º", name: "tercero" },
              { x: 290, label: "4º", name: "cuarto" },
              { x: 360, label: "5º", name: "quinto" },
              { x: 430, label: "6º", name: "sexto" },
              { x: 500, label: "7º", name: "séptimo" },
              { x: 570, label: "8º", name: "octavo" },
              { x: 640, label: "9º", name: "noveno" },
            ].map((item) => (
              <g key={item.x}>
                <circle cx={item.x} cy="90" r="9" fill="#2563eb" />
                <text x={item.x} y="73" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">{item.label}</text>
                <text x={item.x} y="116" textAnchor="middle" fontSize="9" fill="#374151">{item.name}</text>
              </g>
            ))}
          </svg>
          <figcaption>Numerais ordinais do 1º ao 9º em espanhol — os mais cobrados no ENEM.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Numerais no ENEM</span>
        <h2>9. Numerais em contextos reais: estatísticas, datas e medidas</h2>
        <p>
          O ENEM traz textos com dados estatísticos em espanhol, especialmente
          em fontes latino-americanas e espanholas sobre temas como desigualdade,
          meio ambiente e economia. Saber ler esses dados é essencial para a
          correta interpretação do texto.
        </p>
        <div className="lesson-highlight">
          <strong>Leitura de porcentagens:</strong> Em espanhol, o símbolo % lê-se
          <em> por ciento</em>. Exemplo: <em>El 43% de los jóvenes no tiene empleo fijo</em>
          = "43 por ciento de los jóvenes…". A vírgula decimal em espanhol é escrita com
          vírgula na Espanha (<em>3,5 millones</em>) e com ponto na América Latina
          (<em>3.5 millones</em>).
        </div>
        <div className="lesson-highlight">
          <strong>Leitura de datas:</strong> Em espanhol, as datas seguem o formato
          dia/mês/ano: <em>el 5 de mayo de 2024</em>. O artigo <em>el</em> antecede
          o numeral do dia. Não se usa ordinal para datas exceto para o primeiro:
          <em>el primero de enero</em> (ou simplesmente <em>el uno de enero</em>
          na América Latina).
        </div>
        <div className="math-block">
          💡 <strong>Dica ENEM:</strong> Textos com estatísticas em espanhol frequentemente
          usam as expressões <em>uno de cada cuatro</em> (um em cada quatro = 25%),
          <em>la mitad de</em> (a metade de = 50%), <em>el doble de</em> (o dobro de)
          e <em>más de la mitad</em> (mais da metade). Identifique essas expressões
          para compreender proporções sem precisar calcular.
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Concordância do adjetivo"
          statement={
            <p>
              Escolha a opção que completa corretamente a frase:<br />
              <em>"Las estudiantes son muy ___."</em>
            </p>
          }
          options={[
            { letter: "a", text: "inteligentes", correct: true },
            { letter: "b", text: "inteligente" },
            { letter: "c", text: "inteligento" },
            { letter: "d", text: "inteligenta" },
          ]}
          resolution={
            <p>
              Resposta: <strong>a) inteligentes</strong>. O substantivo
              <em> las estudiantes</em> é feminino plural. O adjetivo
              <em> inteligente</em> termina em -e, portanto não muda de forma
              para o feminino, mas varia em número. Para o plural acrescenta-se -s:
              <em> inteligentes</em>. As opções c e d são formas inexistentes
              em espanhol.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Apócope do adjetivo"
          statement={
            <p>
              Assinale a alternativa gramaticalmente correta em espanhol:
            </p>
          }
          options={[
            { letter: "a", text: "Es un bueno estudiante." },
            { letter: "b", text: "Es un buen estudiante.", correct: true },
            { letter: "c", text: "Es un buena estudiante." },
            { letter: "d", text: "Es una buen estudiante." },
          ]}
          resolution={
            <p>
              Resposta: <strong>b) Es un buen estudiante.</strong>
              O adjetivo <em>bueno</em> apocopa para <em>buen</em> quando
              aparece imediatamente antes de um substantivo masculino singular.
              A opção a mantém a forma completa, incorreta nessa posição;
              a opção c mistura artigo masculino com adjetivo feminino;
              a opção d usa artigo feminino com um substantivo masculino.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Mudança de sentido pela posição do adjetivo"
          statement={
            <p>
              Leia as duas frases e analise seus significados:<br />
              I. <em>Conocí a un hombre pobre en el mercado.</em><br />
              II. <em>Conocí a un pobre hombre en el mercado.</em><br />
              Qual das afirmações abaixo está correta?
            </p>
          }
          options={[
            { letter: "a", text: "As duas frases têm exatamente o mesmo significado." },
            { letter: "b", text: "A frase I indica que o homem não tem dinheiro; a frase II expressa compaixão.", correct: true },
            { letter: "c", text: "A frase I expressa compaixão; a frase II indica falta de dinheiro." },
            { letter: "d", text: "A diferença de posição é apenas estilística, sem mudança semântica." },
          ]}
          resolution={
            <p>
              Resposta: <strong>b)</strong>. Em espanhol, <em>pobre</em> em
              posição pós-nominal (após o substantivo) indica ausência de
              recursos financeiros. Em posição pré-nominal (antes do
              substantivo), adquire sentido afetivo, expressando pena ou
              compaixão pelo sujeito. Este é um exemplo clássico de como a
              posição do adjetivo altera o sentido — fenômeno explorado pelo
              ENEM em textos literários.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Interpretação de dado estatístico em espanhol"
          statement={
            <p>
              Leia o trecho: <em>"Según el informe, el 72% de los habitantes
              de la ciudad no tiene acceso a agua potable, lo que representa
              casi tres de cada cuatro personas."</em><br />
              O que a expressão <em>casi tres de cada cuatro personas</em>
              indica no contexto?
            </p>
          }
          options={[
            { letter: "a", text: "Que menos da metade da população não tem acesso à água potável." },
            { letter: "b", text: "Que a maioria absoluta da população tem acesso à água potável." },
            { letter: "c", text: "Que aproximadamente 75% da população não tem acesso à água potável.", correct: true },
            { letter: "d", text: "Que exatamente três pessoas em cada grupo de quatro não têm água." },
          ]}
          resolution={
            <p>
              Resposta: <strong>c)</strong>. O advérbio <em>casi</em> (quase)
              indica aproximação. A expressão <em>tres de cada cuatro</em>
              equivale à proporção 3/4 = 75%. Como o texto indica 72% e usa
              <em> casi</em> (quase), a interpretação correta é "aproximadamente
              75%". A opção d é incorreta porque <em>casi</em> indica aproximação,
              não exatidão.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Advérbio e sentido textual"
          statement={
            <p>
              Leia o fragmento: <em>"El proyecto era bueno; sin embargo, tardó
              demasiado en implementarse y, para entonces, ya era innecesario."</em><br />
              O advérbio <em>ya</em> nesse contexto indica:
            </p>
          }
          options={[
            { letter: "a", text: "Uma ação que ocorrerá no futuro próximo." },
            { letter: "b", text: "Uma ação habitual no presente." },
            { letter: "c", text: "Uma ação que ainda não aconteceu." },
            { letter: "d", text: "Uma mudança de estado em relação ao momento de referência.", correct: true },
          ]}
          resolution={
            <p>
              Resposta: <strong>d)</strong>. O advérbio <em>ya</em> em espanhol
              tem múltiplos usos. Neste contexto, expressa uma mudança de situação
              em relação a um momento anterior: quando o projeto foi finalmente
              implementado, a situação havia mudado e ele já não era mais
              necessário. A locução <em>sin embargo</em> (porém) e o advérbio
              <em> demasiado</em> (demais) reforçam a estrutura argumentativa
              do texto.
            </p>
          }
        />
      </section>

    </article>
  );
}
