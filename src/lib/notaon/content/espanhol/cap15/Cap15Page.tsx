"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap15Page() {
  return (
    <article className="lesson-landing">

      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Espanhol • Capítulo 15</span>
          <h1>Ser, Estar e Haber: diferenças e aplicações</h1>
          <p>
            Nenhum aspecto do espanhol gera mais confusão para falantes de português do que a distinção entre
            <strong> ser</strong>, <strong>estar</strong> e <strong>haber</strong>. Enquanto o português usa
            "ser" e "estar" de forma relativamente semelhante ao espanhol, os limites são muito mais rígidos
            no idioma hispânico, e errar pode mudar completamente o significado de uma frase. O verbo
            <em> haber</em>, por sua vez, cumpre funções que em português cabem tanto a "haver" quanto a
            "ter" como auxiliar. No ENEM, questões sobre esses três verbos aparecem diretamente em exercícios
            gramaticais e indiretamente na compreensão de textos autênticos. Dominar suas regras é condição
            essencial para gabaritar a prova de língua espanhola.
          </p>
        </div>
      </section>

      {/* ── Seção 1: SER ── */}
      <section className="lesson-section">
        <span className="section-kicker">Verbo SER</span>
        <h2>SER: identidade, essência e permanência</h2>
        <p>
          O verbo <strong>ser</strong> em espanhol é reservado para tudo aquilo que define a identidade do
          sujeito ou que é considerado permanente (ou muito estável) dentro de determinado contexto. Use
          <em> ser</em> para expressar origem, nacionalidade, profissão, material, características intrínsecas
          e para situar eventos no tempo ou no espaço.
        </p>
        <div className="lesson-highlight">
          <strong>Regra mestre:</strong> Se a qualidade ou situação define <em>quem</em> o sujeito é
          (identidade, essência, origem, natureza), use <strong>ser</strong>.
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Uso</th>
                <th>Exemplo em espanhol</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Origem / Nacionalidade</td>
                <td><em>Ella es de Argentina. Él es mexicano.</em></td>
                <td>Ela é da Argentina. Ele é mexicano.</td>
              </tr>
              <tr>
                <td>Profissão / Ocupação</td>
                <td><em>Mi madre es médica. Soy estudiante.</em></td>
                <td>Minha mãe é médica. Sou estudante.</td>
              </tr>
              <tr>
                <td>Material / Composição</td>
                <td><em>La mesa es de madera. El anillo es de oro.</em></td>
                <td>A mesa é de madeira. O anel é de ouro.</td>
              </tr>
              <tr>
                <td>Características essenciais</td>
                <td><em>El cielo es azul. María es inteligente.</em></td>
                <td>O céu é azul. Maria é inteligente.</td>
              </tr>
              <tr>
                <td>Tempo / Hora / Data</td>
                <td><em>Son las tres. Hoy es lunes. Es verano.</em></td>
                <td>São três horas. Hoje é segunda. É verão.</td>
              </tr>
              <tr>
                <td>Eventos (lugar e hora)</td>
                <td><em>La reunión es en Madrid. La boda es a las 6.</em></td>
                <td>A reunião é em Madrid. O casamento é às 6.</td>
              </tr>
              <tr>
                <td>Relações pessoais</td>
                <td><em>Marcos es mi primo. Somos amigos.</em></td>
                <td>Marcos é meu primo. Somos amigos.</td>
              </tr>
              <tr>
                <td>Posse</td>
                <td><em>Este libro es de Lucía.</em></td>
                <td>Este livro é de Lúcia.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2: ESTAR ── */}
      <section className="lesson-section">
        <span className="section-kicker">Verbo ESTAR</span>
        <h2>ESTAR: estados, localização e resultados</h2>
        <p>
          O verbo <strong>estar</strong> é usado para estados que podem mudar: localização de pessoas e objetos,
          condições de saúde, estados de ânimo, e o resultado de uma ação. A localização de pessoas e objetos
          sempre usa <em>estar</em>; a de eventos usa <em>ser</em> — esse é um dos erros mais frequentes de
          brasileiros.
        </p>
        <div className="lesson-highlight">
          <strong>Dica ENEM:</strong> Localização de <em>pessoa/objeto</em> → <strong>estar</strong>.
          Localização de <em>evento</em> → <strong>ser</strong>. <em>"El concierto es en el teatro"</em> (evento)
          vs. <em>"El teatro está en el centro"</em> (lugar físico).
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Uso</th>
                <th>Exemplo</th>
                <th>Tradução</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Localização (pessoas/objetos)</td>
                <td><em>Estamos en casa. El libro está en la mesa.</em></td>
                <td>Estamos em casa. O livro está na mesa.</td>
              </tr>
              <tr>
                <td>Estado de saúde</td>
                <td><em>Estoy enfermo. Ella está bien.</em></td>
                <td>Estou doente. Ela está bem.</td>
              </tr>
              <tr>
                <td>Estado de ânimo</td>
                <td><em>Estamos contentos. Él está triste.</em></td>
                <td>Estamos contentes. Ele está triste.</td>
              </tr>
              <tr>
                <td>Resultado de ação</td>
                <td><em>La puerta está abierta. Está muerto.</em></td>
                <td>A porta está aberta. Está morto.</td>
              </tr>
              <tr>
                <td>Estado civil (resultado)</td>
                <td><em>Está casado desde 2010.</em></td>
                <td>Está casado desde 2010.</td>
              </tr>
              <tr>
                <td>Ação em curso (gerúndio)</td>
                <td><em>Estoy comiendo. Están trabajando.</em></td>
                <td>Estou comendo. Estão trabalhando.</td>
              </tr>
              <tr>
                <td>Particípio como estado</td>
                <td><em>El trabajo está terminado.</em></td>
                <td>O trabalho está terminado.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 3: Diagrama SVG ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mapa Visual</span>
        <h2>Diagrama: SER × ESTAR × HABER</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 260" width="700" height="260" aria-label="Diagrama comparativo ser estar haber">
            <rect x="0" y="0" width="700" height="260" rx="14" fill="#f8fafc" />
            <rect x="20" y="30" width="200" height="210" rx="12" fill="#dbeafe" />
            <text x="120" y="58" textAnchor="middle" fontWeight="bold" fontSize="20" fill="#1e40af">SER</text>
            <text x="120" y="80" textAnchor="middle" fontSize="12" fill="#1e40af">Identidade</text>
            <text x="120" y="97" textAnchor="middle" fontSize="12" fill="#1e40af">Origem</text>
            <text x="120" y="114" textAnchor="middle" fontSize="12" fill="#1e40af">Profissão</text>
            <text x="120" y="131" textAnchor="middle" fontSize="12" fill="#1e40af">Material</text>
            <text x="120" y="148" textAnchor="middle" fontSize="12" fill="#1e40af">Hora / Data</text>
            <text x="120" y="165" textAnchor="middle" fontSize="12" fill="#1e40af">Localização de eventos</text>
            <text x="120" y="182" textAnchor="middle" fontSize="12" fill="#1e40af">Relações pessoais</text>
            <text x="120" y="199" textAnchor="middle" fontSize="11" fill="#1e40af" fontStyle="italic">Es médico</text>
            <text x="120" y="214" textAnchor="middle" fontSize="11" fill="#1e40af" fontStyle="italic">La boda es en Madrid</text>
            <rect x="250" y="30" width="200" height="210" rx="12" fill="#d1fae5" />
            <text x="350" y="58" textAnchor="middle" fontWeight="bold" fontSize="20" fill="#065f46">ESTAR</text>
            <text x="350" y="80" textAnchor="middle" fontSize="12" fill="#065f46">Estado temporário</text>
            <text x="350" y="97" textAnchor="middle" fontSize="12" fill="#065f46">Localização de pessoas</text>
            <text x="350" y="114" textAnchor="middle" fontSize="12" fill="#065f46">Saúde / Ânimo</text>
            <text x="350" y="131" textAnchor="middle" fontSize="12" fill="#065f46">Resultado de ação</text>
            <text x="350" y="148" textAnchor="middle" fontSize="12" fill="#065f46">Gerúndio</text>
            <text x="350" y="165" textAnchor="middle" fontSize="12" fill="#065f46">Particípio (estado)</text>
            <text x="350" y="182" textAnchor="middle" fontSize="12" fill="#065f46">Estado civil</text>
            <text x="350" y="199" textAnchor="middle" fontSize="11" fill="#065f46" fontStyle="italic">Está enfermo</text>
            <text x="350" y="214" textAnchor="middle" fontSize="11" fill="#065f46" fontStyle="italic">El teatro está en el centro</text>
            <rect x="480" y="30" width="200" height="210" rx="12" fill="#fef3c7" />
            <text x="580" y="58" textAnchor="middle" fontWeight="bold" fontSize="20" fill="#92400e">HABER</text>
            <text x="580" y="80" textAnchor="middle" fontSize="12" fill="#92400e">Existência impessoal</text>
            <text x="580" y="97" textAnchor="middle" fontSize="12" fill="#92400e">hay / había / habrá</text>
            <text x="580" y="114" textAnchor="middle" fontSize="12" fill="#92400e">Auxiliar (Pret. Perf.)</text>
            <text x="580" y="131" textAnchor="middle" fontSize="12" fill="#92400e">he / has / ha</text>
            <text x="580" y="148" textAnchor="middle" fontSize="12" fill="#92400e">hemos / habéis / han</text>
            <text x="580" y="165" textAnchor="middle" fontSize="12" fill="#92400e">+ participio</text>
            <text x="580" y="182" textAnchor="middle" fontSize="12" fill="#92400e">Nunca concorda em nº</text>
            <text x="580" y="199" textAnchor="middle" fontSize="11" fill="#92400e" fontStyle="italic">Hay un libro</text>
            <text x="580" y="214" textAnchor="middle" fontSize="11" fill="#92400e" fontStyle="italic">He comido / Han llegado</text>
          </svg>
          <figcaption>Mapa comparativo: ser (identidade/essência), estar (estados/localização de pessoas) e haber (existência/auxiliar).</figcaption>
        </figure>
      </section>

      {/* ── Seção 4: HABER ── */}
      <section className="lesson-section">
        <span className="section-kicker">Verbo HABER</span>
        <h2>HABER: existência impessoal e auxiliar do Pretérito Perfecto</h2>
        <p>
          O verbo <strong>haber</strong> tem dois usos principais. Como verbo existencial impessoal
          (<em>hay, había, habrá</em>), nunca concorda em número: "hay un libro", "hay libros" — ambos com
          <em> hay</em>. Como auxiliar do Pretérito Perfecto Compuesto, conjuga-se normalmente seguido do
          particípio passado invariável: <em>He comido / Han llegado.</em>
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📍</span>
            <h3>HAY (impessoal)</h3>
            <p>Indica existência no presente. "Hay mucha gente en la plaza." Nunca varia em número: <em>hay un libro / hay libros</em>.</p>
          </div>
          <div className="lesson-card">
            <span>⏮️</span>
            <h3>HE / HAS / HA + participio</h3>
            <p>Forma o Pretérito Perfecto: "He comido", "Ella ha viajado". O particípio é sempre invariável.</p>
          </div>
          <div className="lesson-card">
            <span>⏳</span>
            <h3>HABÍA / HABRÁ</h3>
            <p>Impessoal no passado e futuro: "Había mucho ruido", "Mañana habrá una fiesta". Nunca <em>*habían personas</em>.</p>
          </div>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tempo verbal</th>
                <th>Forma impessoal (existência)</th>
                <th>Auxiliar (Pret. Compuesto)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Presente</td><td><em>hay</em></td><td><em>he / has / ha / hemos / habéis / han</em></td></tr>
              <tr><td>Pretérito imperfecto</td><td><em>había</em></td><td><em>había + participio</em> (Pluscuamperfecto)</td></tr>
              <tr><td>Pretérito indefinido</td><td><em>hubo</em></td><td><em>hube / hubiste / hubo...</em></td></tr>
              <tr><td>Futuro</td><td><em>habrá</em></td><td><em>habré / habrás / habrá...</em></td></tr>
              <tr><td>Condicional</td><td><em>habría</em></td><td><em>habría + participio</em></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 5: Adjetivos que mudam de sentido ── */}
      <section className="lesson-section">
        <span className="section-kicker">Armadilhas</span>
        <h2>Quando SER e ESTAR mudam completamente o significado</h2>
        <p>
          Alguns adjetivos têm significados completamente diferentes dependendo de serem usados com <em>ser</em> ou
          <em> estar</em>. Esse fenômeno é um dos favoritos do ENEM para testar a compreensão de textos.
          Memorize os pares mais cobrados:
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 210" width="700" height="210" aria-label="Pares de adjetivos ser estar">
            <rect x="0" y="0" width="700" height="210" rx="14" fill="#f8fafc" />
            <rect x="10" y="8" width="340" height="32" rx="8" fill="#dbeafe" />
            <text x="180" y="29" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#1e40af">SER + adjetivo → característica</text>
            <rect x="360" y="8" width="330" height="32" rx="8" fill="#d1fae5" />
            <text x="525" y="29" textAnchor="middle" fontWeight="bold" fontSize="13" fill="#065f46">ESTAR + adjetivo → estado</text>
            {[
              ["ser aburrido", "ser chato / entediante", "estar aburrido", "estar entediado"],
              ["ser listo", "ser esperto / inteligente", "estar listo", "estar pronto / preparado"],
              ["ser malo", "ser mau / malvado", "estar malo", "estar doente"],
              ["ser bueno", "ser bom (de caráter)", "estar bueno", "estar saboroso / bem"],
              ["ser vivo", "ser astuto / esperto", "estar vivo", "estar vivo (não morto)"],
            ].map(([s1, s2, e1, e2], i) => (
              <g key={i}>
                <text x="20" y={62 + i * 28} fontSize="12" fill="#1e40af" fontStyle="italic">{s1}</text>
                <text x="130" y={62 + i * 28} fontSize="12" fill="#1e40af">→ {s2}</text>
                <text x="370" y={62 + i * 28} fontSize="12" fill="#065f46" fontStyle="italic">{e1}</text>
                <text x="480" y={62 + i * 28} fontSize="12" fill="#065f46">→ {e2}</text>
              </g>
            ))}
          </svg>
          <figcaption>Adjetivos que mudam de sentido com ser vs. estar — os mais cobrados no ENEM.</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Adjetivo</th><th>SER + adjetivo</th><th>ESTAR + adjetivo</th></tr>
            </thead>
            <tbody>
              <tr><td><em>aburrido</em></td><td>ser chato, entediante</td><td>estar entediado, com tédio</td></tr>
              <tr><td><em>listo</em></td><td>ser esperto, inteligente</td><td>estar pronto, preparado</td></tr>
              <tr><td><em>malo</em></td><td>ser mau, malvado</td><td>estar doente, mal de saúde</td></tr>
              <tr><td><em>bueno</em></td><td>ser bom (de caráter)</td><td>estar saboroso / estar bem</td></tr>
              <tr><td><em>vivo</em></td><td>ser astuto, esperto</td><td>estar vivo (não ter morrido)</td></tr>
              <tr><td><em>seguro</em></td><td>ser seguro (o lugar é seguro)</td><td>estar seguro (sentir-se certo/convicto)</td></tr>
              <tr><td><em>rico</em></td><td>ser rico (ter dinheiro)</td><td>estar rico (estar delicioso)</td></tr>
              <tr><td><em>muerto</em></td><td>—</td><td>estar muerto (resultado do ato de morrer)</td></tr>
              <tr><td><em>casado</em></td><td>—</td><td>estar casado (estado civil resultante)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 6: Conjugação no Presente ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conjugação</span>
        <h2>Conjugação no Presente do Indicativo</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Pronome</th>
                <th>SER</th>
                <th>ESTAR</th>
                <th>HABER (auxiliar)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>yo</td><td><em>soy</em></td><td><em>estoy</em></td><td><em>he</em></td></tr>
              <tr><td>tú</td><td><em>eres</em></td><td><em>estás</em></td><td><em>has</em></td></tr>
              <tr><td>él / ella / usted</td><td><em>es</em></td><td><em>está</em></td><td><em>ha</em></td></tr>
              <tr><td>nosotros/as</td><td><em>somos</em></td><td><em>estamos</em></td><td><em>hemos</em></td></tr>
              <tr><td>vosotros/as</td><td><em>sois</em></td><td><em>estáis</em></td><td><em>habéis</em></td></tr>
              <tr><td>ellos / ustedes</td><td><em>son</em></td><td><em>están</em></td><td><em>han</em></td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção:</strong> <em>Haber</em> como verbo existencial usa somente a 3ª pessoa do singular
          em todos os tempos: <em>hay, había, hubo, habrá, habría, haya</em>. Dizer{" "}
          <em>*habían muchas personas</em> é um erro muito comum no espanhol coloquial, mas inaceitável na
          escrita formal e no ENEM.
        </div>
      </section>

      {/* ── Seção 7: Usos especiais ── */}
      <section className="lesson-section">
        <span className="section-kicker">Casos Especiais</span>
        <h2>Expressões fixas e casos especiais</h2>
        <p>
          Algumas expressões têm um verbo fixado por convenção, independente da lógica geral. Conhecê-las é
          fundamental para não ser surpreendido no ENEM.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Expressão</th><th>Verbo</th><th>Observação</th></tr>
            </thead>
            <tbody>
              <tr><td><em>estar de vacaciones</em></td><td>ESTAR</td><td>Estado temporário</td></tr>
              <tr><td><em>ser de moda</em></td><td>SER</td><td>Característica geral / identidade</td></tr>
              <tr><td><em>estar de acuerdo</em></td><td>ESTAR</td><td>Estado de concordância</td></tr>
              <tr><td><em>Son las tantas</em></td><td>SER</td><td>Hora (sempre ser)</td></tr>
              <tr><td><em>estar en juego</em></td><td>ESTAR</td><td>Localização metafórica</td></tr>
              <tr><td><em>hay que + infinitivo</em></td><td>HABER</td><td>Obrigação impessoal: "hay que estudiar"</td></tr>
              <tr><td><em>había una vez</em></td><td>HABER</td><td>Fórmula de conto: "era uma vez"</td></tr>
              <tr><td><em>¿Cuánto es?</em></td><td>SER</td><td>Preço (sempre ser)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 8: Erros de brasileiros ── */}
      <section className="lesson-section">
        <span className="section-kicker">Erros Frequentes</span>
        <h2>Principais erros de falantes de português</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>❌</span>
            <h3>Localização de evento com ESTAR</h3>
            <p><em>*La fiesta está en mi casa.</em> → Correto: <em>La fiesta es en mi casa.</em> Eventos usam SER.</p>
          </div>
          <div className="lesson-card">
            <span>❌</span>
            <h3>HAY concordando em plural</h3>
            <p><em>*Habían muchos estudiantes.</em> → Correto: <em>Había muchos estudiantes.</em> Haber impessoal não varia.</p>
          </div>
          <div className="lesson-card">
            <span>❌</span>
            <h3>Estado de saúde com SER</h3>
            <p><em>*Soy enfermo.</em> → Correto: <em>Estoy enfermo.</em> Saúde é estado temporário → ESTAR.</p>
          </div>
          <div className="lesson-card">
            <span>❌</span>
            <h3>Resultado de ação com SER</h3>
            <p><em>*La puerta es abierta</em> (como estado) → Correto: <em>La puerta está abierta.</em> Estado resultante → ESTAR.</p>
          </div>
        </div>
      </section>

      {/* ── Seção 9: Fluxo de decisão ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estratégia ENEM</span>
        <h2>Fluxo de decisão para a prova</h2>
        <div className="math-block">
          <strong>Como escolher o verbo certo — passo a passo:</strong>
          <br /><br />
          1. A frase fala de <em>existência</em> (há algo/alguém no lugar)? → <strong>HABER</strong> (hay / había / habrá...)
          <br />
          2. É uma característica de <em>identidade</em> (origem, profissão, material, hora, evento)? → <strong>SER</strong>
          <br />
          3. É um <em>estado mutável</em> (saúde, ânimo, localização de pessoa/objeto, resultado de ação)? → <strong>ESTAR</strong>
          <br />
          4. O adjetivo muda de sentido (listo / malo / aburrido...)? → Leia o contexto cuidadosamente.
        </div>
        <div className="lesson-highlight">
          <strong>Truque para eventos vs. objetos:</strong> Substitua mentalmente o sujeito por "João" (pessoa)
          ou "bolo" (objeto). Se faz sentido → ESTAR. Se é um evento (reunião, casamento, festa) → SER.
          <em> "La conferencia es en Bogotá"</em> (evento → ser); <em>"El conferencista está en Bogotá"</em>
          (pessoa → estar).
        </div>
      </section>

      {/* ── Seção 10: Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. SER ou ESTAR com profissão e férias"
          statement={
            <p>
              Escolha a alternativa que completa corretamente a frase:{" "}
              <em>"Mi hermana _____ profesora de biología y ahora _____ de vacaciones en Costa Rica."</em>
            </p>
          }
          options={[
            { letter: "a", text: "está / es" },
            { letter: "b", text: "es / está", correct: true },
            { letter: "c", text: "hay / está" },
            { letter: "d", text: "es / es" },
          ]}
          resolution={
            <p>
              Profissão é uma característica de identidade → <strong>ser</strong> (es profesora). "Estar de
              vacaciones" é uma expressão fixa que indica estado temporário → <strong>estar</strong> (está de
              vacaciones). Portanto: <em>"Mi hermana es profesora de biología y ahora está de vacaciones."</em>
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. HABER impessoal — concordância"
          statement={
            <p>
              Leia: <em>"En el siglo XIX, _____ muchas personas que no sabían leer ni escribir."</em> Qual
              forma do verbo HABER preenche corretamente a lacuna?
            </p>
          }
          options={[
            { letter: "a", text: "habían" },
            { letter: "b", text: "eran" },
            { letter: "c", text: "había", correct: true },
            { letter: "d", text: "estaban" },
          ]}
          resolution={
            <p>
              O verbo <em>haber</em> no sentido existencial impessoal nunca concorda em número com o
              substantivo que o segue. No pretérito imperfecto, a forma impessoal é sempre{" "}
              <strong>había</strong>, mesmo quando o sujeito nocional está no plural.{" "}
              <em>*Habían personas</em> é erro grave. Resposta: <strong>c) había</strong>.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Adjetivo com SER × ESTAR — mudança de sentido"
          statement={
            <p>
              Leia: <em>"El director es muy listo: siempre encuentra una solución. Pero hoy no está listo
              para la reunión porque olvidó los documentos."</em> O autor usou <em>es listo</em> e{" "}
              <em>está listo</em>. Qual a diferença de significado?
            </p>
          }
          options={[
            { letter: "a", text: "Ambas as formas significam 'está pronto'; a primeira é mais formal." },
            { letter: "b", text: "A primeira indica inteligência (característica permanente); a segunda indica estar preparado (estado temporário).", correct: true },
            { letter: "c", text: "A primeira indica localização; a segunda indica profissão." },
            { letter: "d", text: "Não há diferença: são formas intercambiáveis no espanhol moderno." },
          ]}
          resolution={
            <p>
              "Ser listo" significa <strong>ser inteligente/esperto</strong> — característica da personalidade,
              portanto usa-se <em>ser</em>. "Estar listo" significa <strong>estar preparado/pronto</strong> —
              estado temporário antes de um evento, portanto usa-se <em>estar</em>. Esse par é um dos mais
              testados pelo ENEM. Resposta: <strong>b</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Texto jornalístico — três verbos em contexto"
          statement={
            <p>
              Leia o trecho:{" "}
              <em>
                "La cumbre climática es en Montevideo este noviembre. Habrá representantes de más de 80 países.
                Según los organizadores, la ciudad está preparada para recibir a los delegados, aunque hay
                preocupaciones sobre la seguridad."
              </em>{" "}
              Sobre o uso dos verbos destacados, é correto afirmar:
            </p>
          }
          options={[
            { letter: "a", text: "Usa-se 'es en Montevideo' porque a cúpula tem localização permanente." },
            { letter: "b", text: "'Habrá representantes' poderia ser substituído por 'estarán representantes' sem mudar o sentido." },
            { letter: "c", text: "'Es en Montevideo' localiza o evento; 'está preparada' indica estado atual da cidade; 'hay preocupaciones' indica existência.", correct: true },
            { letter: "d", text: "'Está preparada' é erro — deveria ser 'es preparada' como característica da cidade." },
          ]}
          resolution={
            <p>
              O trecho demonstra os três verbos em uso autêntico: <em>es en Montevideo</em> → localização de
              evento (ser); <em>está preparada</em> → estado temporário/atual da cidade (estar);{" "}
              <em>hay preocupaciones</em> → existência impessoal (haber). Resposta: <strong>c</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Voz passiva com SER vs. estado com ESTAR"
          statement={
            <p>
              Compare:{" "}
              <em>(I) "La novela fue escrita por García Márquez."</em>{" "}
              <em>(II) "La novela está escrita en un español muy poético."</em>{" "}
              Qual alternativa descreve corretamente a diferença?
            </p>
          }
          options={[
            { letter: "a", text: "Ambas são voz passiva; a diferença é apenas estilística." },
            { letter: "b", text: "A frase I é passiva perifrástica (ação passada); a frase II descreve um estado resultante.", correct: true },
            { letter: "c", text: "A frase I usa ESTAR como auxiliar; a frase II usa SER de forma adjetival." },
            { letter: "d", text: "Somente a frase II está correta; a frase I deveria usar HABER." },
          ]}
          resolution={
            <p>
              Na frase I, <em>fue escrita</em> é a voz passiva perifrástica: <strong>ser + particípio</strong>{" "}
              descreve a ação (quem escreveu: García Márquez). Na frase II, <em>está escrita</em> descreve o{" "}
              <strong>estado resultante</strong> — como a novela se encontra atualmente (em espanhol poético).
              Usar <em>ser</em> na frase II criaria uma voz passiva de ação sem sentido sem agente.
              Resposta: <strong>b</strong>.
            </p>
          }
        />
      </section>

    </article>
  );
}
