"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap17Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 17</span>
          <h1>Comparativos, superlativos e expressões de intensidade</h1>
          <p>
            Comparar e graduar qualidades são operações linguísticas fundamentais em qualquer idioma. Em espanhol,
            os comparativos e superlativos seguem padrões bastante regulares, mas apresentam formas irregulares
            importantes que frequentemente aparecem em textos do ENEM. Além das formas básicas, o espanhol usa
            uma rica gama de expressões de intensidade que permitem graduar adjetivos, advérbios e substantivos
            com grande precisão. Textos argumentativos, jornalísticos e literários em espanhol são repletos
            dessas estruturas, e saber interpretá-las é decisivo para gabaritar a prova de língua estrangeira.
          </p>
        </div>
      </section>

      {/* ── Seção 1: Comparativo de superioridade ── */}
      <section className="lesson-section">
        <span className="section-kicker">Comparativos</span>
        <h2>Comparativos: superioridade, inferioridade e igualdade</h2>
        <p>
          Os comparativos em espanhol são formados de maneira muito regular. A estrutura básica usa
          <em> más... que</em> (mais... do que), <em>menos... que</em> (menos... do que) e
          <em> tan... como / tanto... como</em> (tão... quanto / tanto... quanto).
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Estrutura</th>
                <th>Exemplo</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Superioridade</td>
                <td><em>más + adj/adv + que</em></td>
                <td><em>Madrid es más grande que Toledo.</em></td>
                <td>Madrid é maior que Toledo.</td>
              </tr>
              <tr>
                <td>Inferioridade</td>
                <td><em>menos + adj/adv + que</em></td>
                <td><em>Este libro es menos interesante que aquel.</em></td>
                <td>Este livro é menos interessante que aquele.</td>
              </tr>
              <tr>
                <td>Igualdade (adj/adv)</td>
                <td><em>tan + adj/adv + como</em></td>
                <td><em>Ella es tan inteligente como su hermano.</em></td>
                <td>Ela é tão inteligente quanto seu irmão.</td>
              </tr>
              <tr>
                <td>Igualdade (sust./verbo)</td>
                <td><em>tanto/a/os/as + sust + como</em></td>
                <td><em>Tiene tantos libros como yo.</em></td>
                <td>Tem tantos livros quanto eu.</td>
              </tr>
              <tr>
                <td>Igualdade (verbo)</td>
                <td><em>verbo + tanto como</em></td>
                <td><em>Estudia tanto como su compañero.</em></td>
                <td>Estuda tanto quanto seu colega.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção a TAN vs. TANTO:</strong> <em>Tan</em> precede adjetivos e advérbios (<em>tan
          rápido, tan bien</em>). <em>Tanto</em> precede substantivos (com concordância: tanto, tanta, tantos,
          tantas) e segue verbos (<em>trabaja tanto</em>). Este é um dos erros mais comuns de brasileiros.
        </div>
      </section>

      {/* ── Seção 2: Superlativos ── */}
      <section className="lesson-section">
        <span className="section-kicker">Superlativos</span>
        <h2>Superlativo relativo e superlativo absoluto</h2>
        <p>
          O superlativo relativo compara um elemento com um grupo: usa <em>el/la/los/las + más/menos + adjetivo
          + de</em>. O superlativo absoluto expressa intensidade máxima sem comparação: usa o sufixo
          <em> -ísimo/-ísima</em> ou <em>muy + adjetivo</em>.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🥇</span>
            <h3>Superlativo relativo</h3>
            <p><em>Es la película más emocionante del año.</em> = É o filme mais emocionante do ano. Estrutura: el/la + más/menos + adj + de.</p>
          </div>
          <div className="lesson-card">
            <span>💯</span>
            <h3>Superlativo absoluto (-ísimo)</h3>
            <p><em>Este plato está riquísimo.</em> = Este prato está riquíssimo. Sufixo -ísimo/-ísima sem comparação com grupo.</p>
          </div>
          <div className="lesson-card">
            <span>🔝</span>
            <h3>Muy + adjetivo</h3>
            <p><em>La conferencia fue muy interesante.</em> = A conferência foi muito interessante. Equivalente mais suave ao -ísimo.</p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Adjetivo</th>
                <th>Superlativo -ísimo</th>
                <th>Observação ortográfica</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><em>rico</em></td><td><em>riquísimo</em></td><td>c → qu antes de -ísimo</td></tr>
              <tr><td><em>largo</em></td><td><em>larguísimo</em></td><td>g → gu antes de -ísimo</td></tr>
              <tr><td><em>feliz</em></td><td><em>felicísimo</em></td><td>z → c antes de -ísimo</td></tr>
              <tr><td><em>fácil</em></td><td><em>facilísimo</em></td><td>Remove o acento tônico original</td></tr>
              <tr><td><em>amable</em></td><td><em>amabilísimo</em></td><td>-ble → -bilísimo</td></tr>
              <tr><td><em>antiguo</em></td><td><em>antiquísimo</em></td><td>gu → qu antes de -ísimo</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 3: SVG — comparativos irregulares ── */}
      <section className="lesson-section">
        <span className="section-kicker">Formas Irregulares</span>
        <h2>Comparativos e superlativos irregulares</h2>
        <p>
          Alguns adjetivos têm formas comparativas e superlativas irregulares em espanhol. Esses adjetivos
          não usam <em>más/menos</em> para formar o comparativo — têm formas próprias que devem ser
          memorizadas. São os mais cobrados no ENEM.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 230" width="700" height="230" aria-label="Comparativos irregulares em espanhol">
            <rect x="0" y="0" width="700" height="230" rx="14" fill="#f8fafc" />
            <rect x="10" y="10" width="160" height="34" rx="6" fill="#dbeafe" />
            <text x="90" y="32" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1e40af">Adjetivo</text>
            <rect x="180" y="10" width="160" height="34" rx="6" fill="#d1fae5" />
            <text x="260" y="32" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#065f46">Comparativo</text>
            <rect x="350" y="10" width="160" height="34" rx="6" fill="#fef3c7" />
            <text x="430" y="32" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#92400e">Superlativo rel.</text>
            <rect x="520" y="10" width="170" height="34" rx="6" fill="#fce7f3" />
            <text x="605" y="32" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#9d174d">Superlativo abs.</text>
            {[
              ["bueno/a", "mejor", "el/la mejor", "óptimo / buenísimo"],
              ["malo/a", "peor", "el/la peor", "pésimo / malísimo"],
              ["grande", "mayor", "el/la mayor", "máximo / grandísimo"],
              ["pequeño/a", "menor", "el/la menor", "mínimo / pequeñísimo"],
              ["mucho/a", "más", "el más", "—"],
              ["poco/a", "menos", "el menos", "—"],
            ].map(([adj, comp, superR, superA], i) => (
              <g key={i}>
                <text x="20" y={64 + i * 28} fontSize="12" fill="#1e40af" fontStyle="italic">{adj}</text>
                <text x="190" y={64 + i * 28} fontSize="12" fill="#065f46" fontStyle="italic">{comp}</text>
                <text x="360" y={64 + i * 28} fontSize="12" fill="#92400e" fontStyle="italic">{superR}</text>
                <text x="530" y={64 + i * 28} fontSize="12" fill="#9d174d" fontStyle="italic">{superA}</text>
              </g>
            ))}
          </svg>
          <figcaption>Formas irregulares dos comparativos e superlativos — obrigatoriamente memorizadas para o ENEM.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <strong>Cuidado com MAYOR e MENOR:</strong> Quando usados com pessoas, <em>mayor</em> e <em>menor</em>
          referem-se à idade (mais velho, mais novo): <em>"Mi hermana mayor tiene 25 años."</em> Com coisas,
          referem-se ao tamanho/importância: <em>"El mayor problema es la desigualdad."</em>
        </div>
      </section>

      {/* ── Seção 4: TAN/TANTO em detalhe ── */}
      <section className="lesson-section">
        <span className="section-kicker">TAN / TANTO</span>
        <h2>TAN e TANTO: usos detalhados</h2>
        <p>
          A distinção entre <em>tan</em> e <em>tanto</em> é fundamental. <em>Tan</em> é invariável e antecede
          adjetivos e advérbios. <em>Tanto</em> varia em gênero e número quando acompanha substantivos, e é
          invariável quando segue um verbo.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma</th>
                <th>Uso</th>
                <th>Exemplo</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><em>tan</em></td>
                <td>Antes de adjetivo</td>
                <td><em>Es tan simpática como su madre.</em></td>
                <td>É tão simpática quanto sua mãe.</td>
              </tr>
              <tr>
                <td><em>tan</em></td>
                <td>Antes de advérbio</td>
                <td><em>Habla tan rápido que no entiendo.</em></td>
                <td>Fala tão rápido que não entendo.</td>
              </tr>
              <tr>
                <td><em>tanto</em> (m. sing.)</td>
                <td>Antes de sust. masc. sing.</td>
                <td><em>No tengo tanto dinero como tú.</em></td>
                <td>Não tenho tanto dinheiro quanto você.</td>
              </tr>
              <tr>
                <td><em>tanta</em> (f. sing.)</td>
                <td>Antes de sust. fem. sing.</td>
                <td><em>Hay tanta gente aquí.</em></td>
                <td>Há tanta gente aqui.</td>
              </tr>
              <tr>
                <td><em>tantos</em> (m. plur.)</td>
                <td>Antes de sust. masc. plur.</td>
                <td><em>Tiene tantos amigos como yo.</em></td>
                <td>Tem tantos amigos quanto eu.</td>
              </tr>
              <tr>
                <td><em>tantas</em> (f. plur.)</td>
                <td>Antes de sust. fem. plur.</td>
                <td><em>No había tantas opciones antes.</em></td>
                <td>Não havia tantas opções antes.</td>
              </tr>
              <tr>
                <td><em>tanto</em> (invariável)</td>
                <td>Após verbo</td>
                <td><em>Trabaja tanto como su jefe.</em></td>
                <td>Trabalha tanto quanto seu chefe.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 5: Expressões de intensidade ── */}
      <section className="lesson-section">
        <span className="section-kicker">Intensidade</span>
        <h2>Expressões de intensidade</h2>
        <p>
          O espanhol possui uma rica variedade de expressões para graduar a intensidade de qualidades e
          quantidades. Estas expressões aparecem com frequência em textos argumentativos e jornalísticos do ENEM.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔥</span>
            <h3>Máxima intensidade</h3>
            <p><em>totalmente, completamente, absolutamente, enormemente</em>. Ex.: <em>"Estoy totalmente de acuerdo."</em></p>
          </div>
          <div className="lesson-card">
            <span>💪</span>
            <h3>Alta intensidade</h3>
            <p><em>muy, mucho, demasiado, bastante</em>. Ex.: <em>"Es muy importante / Llueve demasiado."</em></p>
          </div>
          <div className="lesson-card">
            <span>➕</span>
            <h3>Intensidade moderada</h3>
            <p><em>bastante, algo, un poco, relativamente</em>. Ex.: <em>"Es bastante difícil / Está algo cansado."</em></p>
          </div>
          <div className="lesson-card">
            <span>⬇️</span>
            <h3>Baixa intensidade</h3>
            <p><em>poco, apenas, casi nada, ligeramente</em>. Ex.: <em>"Habla poco español / Apenas se nota."</em></p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>DEMASIADO — atenção:</strong> Em espanhol, <em>demasiado</em> sempre tem sentido negativo
          (em excesso, mais do que o necessário). Ao contrário do português "demais" que às vezes tem valor
          positivo coloquial, em espanhol <em>demasiado bueno</em> = "bom demais" (tem algo de negativo).
          Em textos, esse matiz é importante para a interpretação.
        </div>
      </section>

      {/* ── Seção 6: Comparações idiomáticas ── */}
      <section className="lesson-section">
        <span className="section-kicker">Expressões Idiomáticas</span>
        <h2>Comparações idiomáticas frequentes</h2>
        <p>
          O espanhol usa muitas comparações fixas e expressões idiomáticas que aparecem em textos literários
          e coloquiais do ENEM. Reconhecê-las facilita a compreensão mesmo sem conhecer o vocabulário exato.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Expressão idiomática</th><th>Tradução</th><th>Uso típico</th></tr>
            </thead>
            <tbody>
              <tr><td><em>más blanco que la nieve</em></td><td>mais branco que a neve</td><td>Pureza / inocência</td></tr>
              <tr><td><em>más rápido que el viento</em></td><td>mais rápido que o vento</td><td>Velocidade extrema</td></tr>
              <tr><td><em>como pez en el agua</em></td><td>como peixe na água</td><td>Sentir-se à vontade</td></tr>
              <tr><td><em>tanto monta, monta tanto</em></td><td>tanto faz</td><td>Indiferença, equivalência</td></tr>
              <tr><td><em>lo mejor de lo mejor</em></td><td>o melhor do melhor</td><td>Superlativo enfático</td></tr>
              <tr><td><em>cada vez más</em></td><td>cada vez mais</td><td>Progressão crescente</td></tr>
              <tr><td><em>cada vez menos</em></td><td>cada vez menos</td><td>Progressão decrescente</td></tr>
              <tr><td><em>cuanto más... más</em></td><td>quanto mais... mais</td><td>Proporcionalidade direta</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 7: Em textos argumentativos ── */}
      <section className="lesson-section">
        <span className="section-kicker">Textos Argumentativos</span>
        <h2>Comparativos e intensidade em textos do ENEM</h2>
        <p>
          Os textos argumentativos em espanhol presentes no ENEM frequentemente usam comparativos e
          superlativos para defender uma tese ou contrastar posições. Identificar essas estruturas ajuda a
          compreender a lógica argumentativa do texto.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 200" width="700" height="200" aria-label="Comparativos em textos argumentativos ENEM">
            <rect x="0" y="0" width="700" height="200" rx="14" fill="#f8fafc" />
            <rect x="20" y="15" width="320" height="170" rx="10" fill="#dbeafe" />
            <text x="180" y="38" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1e40af">Comparação para argumentar</text>
            <text x="30" y="62" fontSize="11" fill="#1e40af" fontStyle="italic">"El desempleo es mayor que</text>
            <text x="30" y="76" fontSize="11" fill="#1e40af" fontStyle="italic"> hace una década."</text>
            <text x="30" y="96" fontSize="11" fill="#1e40af" fontStyle="italic">"Los jóvenes leen cada vez menos."</text>
            <text x="30" y="116" fontSize="11" fill="#1e40af" fontStyle="italic">"Cuanto más tecnología, más</text>
            <text x="30" y="130" fontSize="11" fill="#1e40af" fontStyle="italic"> aislados estamos."</text>
            <text x="30" y="150" fontSize="11" fill="#1e40af" fontStyle="italic">"Es la peor crisis de los últimos años."</text>
            <text x="30" y="170" fontSize="11" fill="#1e40af" fontStyle="italic">"Es tan grave como en 2008."</text>
            <rect x="360" y="15" width="325" height="170" rx="10" fill="#d1fae5" />
            <text x="522" y="38" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#065f46">Intensidade para avaliar</text>
            <text x="370" y="62" fontSize="11" fill="#065f46" fontStyle="italic">"El problema es enormemente</text>
            <text x="370" y="76" fontSize="11" fill="#065f46" fontStyle="italic"> complejo."</text>
            <text x="370" y="96" fontSize="11" fill="#065f46" fontStyle="italic">"Es absolutamente necesario actuar."</text>
            <text x="370" y="116" fontSize="11" fill="#065f46" fontStyle="italic">"La situación es demasiado grave</text>
            <text x="370" y="130" fontSize="11" fill="#065f46" fontStyle="italic"> para ignorar."</text>
            <text x="370" y="150" fontSize="11" fill="#065f46" fontStyle="italic">"Hay bastante preocupación social."</text>
            <text x="370" y="170" fontSize="11" fill="#065f46" fontStyle="italic">"El avance es relativamente lento."</text>
          </svg>
          <figcaption>Comparativos e expressões de intensidade são ferramentas argumentativas centrais em textos jornalísticos hispânicos.</figcaption>
        </figure>
      </section>

      {/* ── Seção 8: Dica ENEM ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia ENEM</span>
        <h2>Como resolver questões sobre comparativos</h2>
        <div className="math-block">
          <strong>Checklist para questões de comparativo/superlativo:</strong>
          <br />
          1. Identifique se é comparação (dois elementos) ou superlativo (dentro de um grupo).
          <br />
          2. Verifique se o adjetivo tem forma irregular: bueno→mejor, malo→peor, grande→mayor, pequeño→menor.
          <br />
          3. Diferencie: <em>tan</em> + adjetivo/advérbio vs. <em>tanto/a/os/as</em> + substantivo.
          <br />
          4. Lembre: <em>más bueno</em> = mais bondoso (caráter); <em>mejor</em> = melhor (qualidade).
          <br />
          5. Superlativos com "-ísimo" têm alterações ortográficas: rico→riquísimo, largo→larguísimo.
        </div>
        <div className="lesson-highlight">
          <strong>Falso amigo:</strong> <em>mayor</em> não significa apenas "maior". Quando usado com pessoas,
          significa <strong>mais velho</strong>: <em>"mi hermano mayor"</em> = meu irmão mais velho. E
          <em> menor</em> com pessoas significa <strong>mais novo</strong>: <em>"soy el menor"</em> = sou o
          caçula. Somente com coisas impessoais é "maior/menor" em tamanho ou importância.
        </div>
      </section>

      {/* ── Seção 9: Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Comparativo de igualdade — tan vs. tanto"
          statement={
            <p>
              Escolha a alternativa correta:{" "}
              <em>"Ella habla inglés _____ bien _____ su profesora, y tiene _____ conocimientos _____ ella."</em>
            </p>
          }
          options={[
            { letter: "a", text: "tan / como / tantos / como", correct: true },
            { letter: "b", text: "tanto / como / tanto / como" },
            { letter: "c", text: "tan / que / tanto / que" },
            { letter: "d", text: "más / como / tantos / como" },
          ]}
          resolution={
            <p>
              "Habla inglés bem" usa advérbio → <em>tan bien como</em>. "Conocimientos" é substantivo masculino
              plural → <em>tantos conocimientos como</em>. Regra: <em>tan</em> precede adjetivos e advérbios;
              <em> tanto/a/os/as</em> precede substantivos. Resposta: <strong>a</strong>.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Comparativo irregular"
          statement={
            <p>
              Leia: <em>"La contaminación en las grandes ciudades es _____ que en las zonas rurales, y la
              calidad del aire es _____."</em> Escolha os superlativos/comparativos corretos para as lacunas.
            </p>
          }
          options={[
            { letter: "a", text: "más mala / más pequeña" },
            { letter: "b", text: "peor / menor", correct: true },
            { letter: "c", text: "más peor / más menor" },
            { letter: "d", text: "más mala / menor" },
          ]}
          resolution={
            <p>
              Os adjetivos <em>malo</em> e <em>pequeño</em> têm formas irregulares de comparativo. O comparativo
              de <em>malo</em> é <em>peor</em> (nunca <em>más malo</em> quando se refere a qualidade). O
              comparativo de <em>pequeño</em> no sentido de menor quantidade/grau é <em>menor</em>. Formas como
              <em> más peor</em> ou <em>más menor</em> são erros graves. Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Superlativo absoluto com alteração ortográfica"
          statement={
            <p>
              Qual é a forma correta do superlativo absoluto de <em>feliz</em> e de <em>largo</em>?
            </p>
          }
          options={[
            { letter: "a", text: "felizísimo / largoísimo" },
            { letter: "b", text: "felicísimo / larguísimo", correct: true },
            { letter: "c", text: "felicísimo / largísimo" },
            { letter: "d", text: "felizísimo / larguísimo" },
          ]}
          resolution={
            <p>
              A formação do superlativo com <em>-ísimo</em> exige alterações ortográficas: (1) <em>feliz</em>:
              o <em>z</em> muda para <em>c</em> antes de vogal → <em>felic-ísimo</em>. (2) <em>largo</em>: o
              <em> g</em> muda para <em>gu</em> para manter o som /g/ → <em>largU-ísimo</em>. Sem essas
              alterações, a pronúncia seria incorreta em espanhol. Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Texto jornalístico — comparativos argumentativos"
          statement={
            <p>
              Leia: <em>"La brecha educativa entre los países desarrollados y los países en vías de desarrollo
              es cada vez mayor. Los estudiantes de las naciones más ricas tienen acceso a tecnología
              cuantitativamente superior y cualitativamente mejor que sus pares de economías emergentes.
              La diferencia es tan preocupante que organismos internacionales la consideran el mayor obstáculo
              para el desarrollo global."</em>{" "}
              O texto usa comparativos para:
            </p>
          }
          options={[
            { letter: "a", text: "Descrever neutralmente uma situação sem tomar posição." },
            { letter: "b", text: "Argumentar que a brecha educativa é um problema sério e crescente, usando comparativos para dar força à tese.", correct: true },
            { letter: "c", text: "Comparar dois países específicos sem generalizar." },
            { letter: "d", text: "Demonstrar que os países em desenvolvimento estão progredindo." },
          ]}
          resolution={
            <p>
              O texto usa <em>cada vez mayor</em> (crescimento progressivo), <em>cuantitativamente superior</em>
              e <em>cualitativamente mejor</em> (superioridade dupla), <em>tan preocupante</em> (intensidade
              alarmante) e <em>el mayor obstáculo</em> (superlativo relativo — ênfase máxima) para construir
              um argumento de que a brecha é um problema grave e urgente. Os comparativos têm função
              argumentativa clara. Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. MAYOR com pessoas vs. coisas"
          statement={
            <p>
              Leia: <em>"El mayor de mis hijos tiene 30 años. Él es el mayor experto en energías renovables
              de su empresa y considera que el mayor desafío es la inversión inicial."</em>{" "}
              Os três usos de <em>mayor</em> nesse trecho significam, respectivamente:
            </p>
          }
          options={[
            { letter: "a", text: "mais velho / mais importante / mais grande" },
            { letter: "b", text: "mais velho / mais destacado especialista / mais importante desafio", correct: true },
            { letter: "c", text: "maior / melhor / mais difícil" },
            { letter: "d", text: "adulto / famoso / único" },
          ]}
          resolution={
            <p>
              (1) <em>"El mayor de mis hijos"</em> → com pessoas: <strong>mais velho</strong> (o filho mais
              velho). (2) <em>"el mayor experto"</em> → superlativo com pessoa: <strong>o maior especialista</strong>
              (em prestígio/destaque). (3) <em>"el mayor desafío"</em> → com coisa abstrata: <strong>o maior
              desafio</strong> (em magnitude/importância). Note que <em>mayor</em> pode significar "mais velho"
              (pessoas), "maior em importância/tamanho" (coisas) ou "principal". O contexto determina o sentido.
              Resposta: <strong>b</strong>.
            </p>
          }
        />
      </section>

    </article>
  );
}
