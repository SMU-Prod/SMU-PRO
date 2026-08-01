"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap04Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 4</span>
          <h1>Evolução dos Modelos Atômicos: de Dalton a Bohr</h1>
          <p>
            Acompanhe a construção histórica do conceito de átomo — dos filósofos gregos à mecânica
            quântica. Entenda os experimentos que derrubaram cada modelo, as partículas subatômicas e
            como Bohr explicou os espectros atômicos com a quantização de energia.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Origem do conceito</span>
        <h2>1. Do Filosófico ao Científico</h2>
        <p>
          A palavra <strong>átomo</strong> vem do grego <em>a-tomos</em>, que significa "indivisível".
          Os filósofos Leucipo e Demócrito (≈ 450 a.C.) propuseram que toda a matéria seria formada por
          partículas minúsculas e indivisíveis. Por séculos essa ideia foi apenas filosófica — só no
          início do século XIX, com Dalton, a teoria atômica ganhou base experimental.
        </p>
        <div className="lesson-highlight">
          <p>
            A evolução dos modelos atômicos é um exemplo clássico do <strong>método científico</strong>:
            cada novo experimento revelou uma limitação do modelo anterior, exigindo um aprimoramento.
            Nenhum modelo está "errado" — cada um foi o melhor possível com os dados de sua época.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dalton (1808)</span>
        <h2>2. Modelo de Dalton — "Bola de Bilhar"</h2>
        <p>
          John Dalton, apoiado nas leis ponderais (Lavoisier e Proust), propôs o primeiro modelo atômico
          científico. Para ele, o átomo era uma esfera <strong>maciça, indivisível e indestrutível</strong>.
        </p>
        <div className="math-block">
          <h3>Postulados de Dalton</h3>
          <ul>
            <li>Toda matéria é composta por átomos;</li>
            <li>Átomos de um mesmo elemento são idênticos (mesma massa e propriedades);</li>
            <li>Átomos de elementos diferentes têm massas e propriedades diferentes;</li>
            <li>Átomos se combinam em proporções fixas de números inteiros, formando compostos;</li>
            <li>Em uma reação química os átomos apenas se rearranjam — não se criam nem se destroem.</li>
          </ul>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Apelido:</strong> modelo da "bola de bilhar". <strong>Limitação:</strong> foi superado
            quando se descobriu que o átomo é divisível (possui elétrons).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Thomson (1897)</span>
        <h2>3. Modelo de Thomson — "Pudim de Passas"</h2>
        <p>
          J. J. Thomson, estudando <strong>raios catódicos</strong> em ampolas de gás rarefeito, descobriu o{" "}
          <strong>elétron</strong> — partícula de carga negativa. Concluiu que o átomo era divisível e
          propôs o modelo do "pudim de passas": uma esfera de carga positiva com elétrons incrustados,
          garantindo a neutralidade elétrica.
        </p>
        <div className="lesson-highlight">
          <h3>Contribuições de Thomson</h3>
          <ul>
            <li>Primeira evidência de que o átomo é <strong>divisível</strong>;</li>
            <li>
              Determinou a relação carga/massa do elétron:{" "}
              <M>{"\\dfrac{e}{m} \\approx 1{,}76 \\times 10^{11} \\text{ C/kg}"}</M>;
            </li>
            <li>Explicou a condução de eletricidade nos gases.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Rutherford (1911)</span>
        <h2>4. Modelo de Rutherford — "Sistema Planetário"</h2>
        <p>
          Ernest Rutherford, com Geiger e Marsden, bombardeou uma finíssima lâmina de ouro com partículas{" "}
          <M>{"\\alpha"}</M> (núcleos de hélio, <M>{"{}^{4}_{2}\\text{He}^{2+}"}</M>). A maioria atravessava
          em linha reta, mas algumas desviavam e pouquíssimas voltavam.
        </p>
        <div className="math-block">
          <h3>Interpretação do experimento da lâmina de ouro</h3>
          <ul>
            <li>A maioria passa reto → o átomo é, em grande parte, <strong>espaço vazio</strong>;</li>
            <li>Algumas desviam → existe um <strong>núcleo positivo</strong> que as repele;</li>
            <li>Pouquíssimas voltam → o núcleo é <strong>pequeno, denso e concentrado</strong>.</li>
          </ul>
        </div>
        <div className="lesson-highlight">
          <h3>Proporções do átomo</h3>
          <p>
            Núcleo: <M>{"\\approx 10^{-15} \\text{ m}"}</M> · Átomo (eletrosfera):{" "}
            <M>{"\\approx 10^{-10} \\text{ m}"}</M>. A eletrosfera é cerca de{" "}
            <M>{"10^{4}\\text{ a }10^{5}"}</M> vezes maior que o núcleo, embora quase toda a massa esteja nele.
          </p>
        </div>
        <p>
          <strong>Falha:</strong> pelo eletromagnetismo clássico, um elétron acelerado em órbita emitiria
          radiação continuamente, perderia energia e colapsaria no núcleo. Como isso não ocorre, faltava algo.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Bohr (1913)</span>
        <h2>5. Modelo de Bohr — Camadas Quantizadas</h2>
        <p>
          Niels Bohr, aluno de Rutherford, corrigiu a falha anterior usando a teoria dos quanta de Planck.
          Postulou que os elétrons giram em <strong>órbitas circulares estáveis</strong> (níveis de energia)
          sem emitir radiação, e só trocam energia ao "saltar" entre níveis.
        </p>
        <div className="math-block">
          <h3>Energia do fóton (Planck) e saltos quânticos</h3>
          <p><M>{"E = h \\cdot f = \\dfrac{h \\cdot c}{\\lambda}"}</M></p>
          <p>
            Onde <M>{"h = 6{,}63 \\times 10^{-34} \\text{ J·s}"}</M> (constante de Planck),{" "}
            <M>{"f"}</M> a frequência e <M>{"\\lambda"}</M> o comprimento de onda. Ao receber energia o
            elétron salta para um nível mais externo (<strong>estado excitado</strong>); ao retornar,
            emite a diferença como um fóton de luz:
          </p>
          <p><M>{"\\Delta E = E_{\\text{final}} - E_{\\text{inicial}} = h \\cdot f"}</M></p>
        </div>
        <div className="lesson-highlight">
          <p>
            A emissão de luz por átomos excitados explica os <strong>espectros atômicos descontínuos</strong>,
            os fogos de artifício (cores de cada metal), o teste de chama, as lâmpadas de neon e a fluorescência.
          </p>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Camada</th><th>K</th><th>L</th><th>M</th><th>N</th><th>O</th><th>P</th><th>Q</th></tr>
            </thead>
            <tbody>
              <tr><td>Nível (n)</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr>
              <tr><td>Máx. de elétrons</td><td>2</td><td>8</td><td>18</td><td>32</td><td>32</td><td>18</td><td>8</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Partículas e identificação</span>
        <h2>6. Partículas Subatômicas e Número Atômico</h2>
        <p>
          Com Rutherford e, depois, Chadwick (que descobriu o <strong>nêutron</strong> em 1932), o átomo
          passou a ser descrito por três partículas fundamentais:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Partícula</th><th>Carga relativa</th><th>Massa relativa</th><th>Local</th></tr>
            </thead>
            <tbody>
              <tr><td>Próton (p)</td><td>+1</td><td>1</td><td>Núcleo</td></tr>
              <tr><td>Nêutron (n)</td><td>0</td><td>1</td><td>Núcleo</td></tr>
              <tr><td>Elétron (e⁻)</td><td>−1</td><td>1/1836</td><td>Eletrosfera</td></tr>
            </tbody>
          </table>
        </div>
        <div className="math-block">
          <h3>Número atômico e número de massa</h3>
          <p>
            O <strong>número atômico</strong> (<M>{"Z"}</M>) é o número de prótons e identifica o elemento.
            O <strong>número de massa</strong> (<M>{"A"}</M>) é a soma de prótons e nêutrons:
          </p>
          <p><M>{"A = Z + N"}</M></p>
          <p>
            Notação geral do átomo: <M>{"{}^{A}_{Z}\\text{X}"}</M>. Num átomo neutro, o número de elétrons
            é igual a <M>{"Z"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Modelos modernos</span>
        <h2>7. Sommerfeld e a Mecânica Quântica</h2>
        <p>
          Sommerfeld (1916) propôs órbitas <strong>elípticas</strong> dentro de cada camada — surgem os{" "}
          <strong>subníveis</strong> (s, p, d, f). Em seguida, de Broglie, Heisenberg e Schrödinger
          fundaram a Mecânica Quântica, base do modelo atual.
        </p>
        <div className="math-block">
          <h3>Dualidade onda-partícula (de Broglie)</h3>
          <p><M>{"\\lambda = \\dfrac{h}{m \\cdot v}"}</M></p>
          <p>Toda partícula em movimento tem comportamento também ondulatório.</p>
        </div>
        <div className="math-block">
          <h3>Princípio da Incerteza (Heisenberg)</h3>
          <p><M>{"\\Delta x \\cdot \\Delta p \\geq \\dfrac{h}{4\\pi}"}</M></p>
          <p>
            É impossível determinar simultaneamente, com precisão, a posição e a quantidade de movimento de
            um elétron. Por isso falamos em <strong>orbital</strong> — região de máxima probabilidade de se
            encontrar o elétron, e não mais em órbita definida.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🎱</span>
            <h3>Dalton (1808)</h3>
            <p>Esfera maciça e indivisível. "Bola de bilhar".</p>
          </div>
          <div className="math-card">
            <span>🍮</span>
            <h3>Thomson (1897)</h3>
            <p>Descobre o elétron. Pudim de passas — átomo divisível e neutro.</p>
          </div>
          <div className="math-card">
            <span>🪐</span>
            <h3>Rutherford (1911)</h3>
            <p>Núcleo denso + eletrosfera vazia. Modelo planetário.</p>
          </div>
          <div className="math-card">
            <span>🌈</span>
            <h3>Bohr (1913)</h3>
            <p>Camadas quantizadas. <M>{"\\Delta E = h f"}</M> explica os espectros.</p>
          </div>
          <div className="math-card">
            <span>🔢</span>
            <h3>Identificação</h3>
            <p><M>{"A = Z + N"}</M>. <M>{"Z"}</M> (prótons) define o elemento.</p>
          </div>
          <div className="math-card">
            <span>☁️</span>
            <h3>Mecânica Quântica</h3>
            <p>Orbitais e incerteza. <M>{"\\lambda = h/mv"}</M>.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Linha do Tempo Atômica</span>
        <h2>Síntese Visual: Evolução dos Modelos Atômicos</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Linha do tempo dos modelos atômicos">
          <defs>
            <marker id="arr04a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          {/* linha do tempo */}
          <line x1="40" y1="110" x2="660" y2="110" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr04a)" />
          {/* Dalton */}
          <circle cx="110" cy="110" r="8" fill="#2563eb" />
          <rect x="65" y="40" width="90" height="55" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
          <text x="110" y="60" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1d4ed8">Dalton</text>
          <text x="110" y="75" textAnchor="middle" fontSize="10" fill="#1d4ed8">1808</text>
          <text x="110" y="89" textAnchor="middle" fontSize="10" fill="#1d4ed8">bola maciça</text>
          {/* Thomson */}
          <circle cx="250" cy="110" r="8" fill="#dc2626" />
          <rect x="200" y="130" width="100" height="55" rx="4" fill="#fce7f3" stroke="#db2777" strokeWidth="1.5" />
          <text x="250" y="148" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#9d174d">Thomson</text>
          <text x="250" y="163" textAnchor="middle" fontSize="10" fill="#9d174d">1897</text>
          <text x="250" y="177" textAnchor="middle" fontSize="10" fill="#9d174d">pudim de passas</text>
          {/* Rutherford */}
          <circle cx="400" cy="110" r="8" fill="#16a34a" />
          <rect x="348" y="40" width="104" height="55" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1.5" />
          <text x="400" y="60" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#166534">Rutherford</text>
          <text x="400" y="75" textAnchor="middle" fontSize="10" fill="#166534">1911</text>
          <text x="400" y="89" textAnchor="middle" fontSize="10" fill="#166534">núcleo + eletrosfera</text>
          {/* Bohr */}
          <circle cx="570" cy="110" r="8" fill="#7c3aed" />
          <rect x="510" y="130" width="120" height="55" rx="4" fill="#f3e8ff" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="570" y="148" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#6b21a8">Bohr</text>
          <text x="570" y="163" textAnchor="middle" fontSize="10" fill="#6b21a8">1913</text>
          <text x="570" y="177" textAnchor="middle" fontSize="10" fill="#6b21a8">órbitas quantizadas</text>
          <text x="350" y="202" textAnchor="middle" fontSize="12" fill="#475569">cada modelo superou limitações do anterior — Bohr explica espectro do hidrogênio</text>
        </svg>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Modelo de Bohr: órbitas K, L, M com níveis de energia">
          <defs>
            <marker id="arr04b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
          </defs>
          {/* núcleo */}
          <circle cx="350" cy="100" r="20" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="350" y="105" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">núcleo</text>
          {/* órbitas K, L, M */}
          <circle cx="350" cy="100" r="50" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="6 3" />
          <text x="310" y="53" textAnchor="middle" fontSize="12" fill="#2563eb">K (n=1)</text>
          <circle cx="350" cy="100" r="80" fill="none" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="6 3" />
          <text x="280" y="23" textAnchor="middle" fontSize="12" fill="#16a34a">L (n=2)</text>
          <circle cx="350" cy="100" r="110" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="6 3" />
          <text x="250" y="−3" textAnchor="middle" fontSize="12" fill="#7c3aed">M (n=3)</text>
          {/* elétrons nas órbitas */}
          <circle cx="350" cy="50" r="6" fill="#2563eb" />
          <circle cx="400" cy="100" r="6" fill="#16a34a" />
          <circle cx="350" cy="190" r="6" fill="#7c3aed" />
          {/* seta de emissão */}
          <line x1="410" y1="60" x2="440" y2="30" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr04b)" />
          <text x="470" y="25" textAnchor="start" fontSize="12" fill="#dc2626">fóton emitido</text>
          <text x="470" y="40" textAnchor="start" fontSize="12" fill="#dc2626">ΔE = h·f</text>
          <text x="350" y="195" textAnchor="middle" fontSize="12" fill="#0f172a">Transição de nível → absorção ou emissão de fóton com energia exata</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Apelido dos modelos"
          statement={<p>O modelo atômico de Dalton é frequentemente comparado a uma:</p>}
          options={[
            { letter: "a", text: "Bola de bilhar — esfera maciça e indivisível", correct: true },
            { letter: "b", text: "Pudim de passas" },
            { letter: "c", text: "Sistema planetário" },
            { letter: "d", text: "Nuvem de probabilidade" },
          ]}
          resolution={<p>Dalton imaginou o átomo como uma esfera maciça, homogênea e indivisível — daí a analogia com a bola de bilhar. O "pudim de passas" é de Thomson e o "sistema planetário" é de Rutherford.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Descoberta do elétron"
          statement={<p>O cientista que descobriu o elétron, ao estudar raios catódicos, e propôs um átomo divisível foi:</p>}
          options={[
            { letter: "a", text: "Dalton" },
            { letter: "b", text: "Thomson", correct: true },
            { letter: "c", text: "Rutherford" },
            { letter: "d", text: "Chadwick" },
          ]}
          resolution={<p>Thomson (1897) identificou o elétron nos raios catódicos, provando que o átomo é divisível. Chadwick descobriu o nêutron (1932); Rutherford, o núcleo (e prótons).</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Experimento da lâmina de ouro"
          statement={<p>No experimento de Rutherford, a maior parte das partículas <M>{"\\alpha"}</M> atravessou a folha de ouro sem desvio, enquanto pouquíssimas voltaram. Esses resultados indicam, respectivamente, que o átomo possui:</p>}
          options={[
            { letter: "a", text: "Grandes espaços vazios e um núcleo pequeno e denso", correct: true },
            { letter: "b", text: "Massa uniformemente distribuída e carga negativa central" },
            { letter: "c", text: "Elétrons de grande massa e núcleo negativo" },
            { letter: "d", text: "Estrutura maciça e indivisível" },
          ]}
          resolution={<p>A passagem livre da maioria mostra que o átomo é majoritariamente vazio (eletrosfera). As poucas que voltaram colidiram/foram repelidas por um núcleo pequeno, denso e positivo. Isso derrubou o modelo de Thomson.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Saltos quânticos de Bohr"
          statement={<p>Segundo o modelo de Bohr, quando um elétron retorna de uma camada mais externa para uma mais interna, ele:</p>}
          options={[
            { letter: "a", text: "Absorve energia e fica excitado" },
            { letter: "b", text: "Emite energia na forma de um fóton de luz", correct: true },
            { letter: "c", text: "Transforma-se em próton" },
            { letter: "d", text: "Perde massa de repouso" },
          ]}
          resolution={<p>Ao "cair" para um nível de menor energia, o elétron libera o excesso como um fóton, com <M>{"\\Delta E = h f"}</M>. Esse processo gera as raias dos espectros de emissão. Para subir de nível, ele precisaria absorver energia.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Energia de um fóton emitido"
          statement={<p>Um átomo emite luz cuja radiação tem frequência <M>{"f = 5{,}0 \\times 10^{14} \\text{ Hz}"}</M>. Usando <M>{"h = 6{,}63 \\times 10^{-34} \\text{ J·s}"}</M>, a energia do fóton emitido é aproximadamente:</p>}
          options={[
            { letter: "a", text: "3,3 × 10⁻¹⁹ J", correct: true },
            { letter: "b", text: "1,3 × 10⁻¹⁹ J" },
            { letter: "c", text: "3,3 × 10⁻⁴⁸ J" },
            { letter: "d", text: "6,6 × 10⁻³⁴ J" },
          ]}
          resolution={<p><M>{"E = h f = (6{,}63 \\times 10^{-34})(5{,}0 \\times 10^{14}) = 3{,}3 \\times 10^{-19} \\text{ J}"}</M>. Multiplica-se as mantissas (6,63 × 5,0 ≈ 33) e somam-se os expoentes (−34 + 14 = −20), resultando em 33 × 10⁻²⁰ = 3,3 × 10⁻¹⁹ J.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Teste de chama e fogos de artifício"
          statement={<p>As cores vivas dos fogos de artifício são produzidas adicionando-se sais de diferentes metais à pólvora: o estrôncio dá vermelho, o sódio dá amarelo e o cobre dá azul-esverdeado. Com base no modelo atômico de Bohr, a emissão de luz colorida ocorre porque:</p>}
          options={[
            { letter: "a", text: "Elétrons excitados pelo calor retornam a níveis internos, emitindo fótons com energia (cor) característica de cada elemento.", correct: true },
            { letter: "b", text: "Os prótons do núcleo são arrancados e liberam luz colorida." },
            { letter: "c", text: "As cores resultam da combustão da pólvora, sem relação com os metais." },
            { letter: "d", text: "Os nêutrons absorvem calor e mudam de cor conforme o metal." },
          ]}
          resolution={<p>O calor excita os elétrons dos metais a níveis mais externos; ao retornarem, emitem fótons com <M>{"\\Delta E = h f"}</M>. Como cada elemento tem níveis de energia próprios, a frequência (e portanto a cor) emitida é característica — é o princípio do teste de chama.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="7. (ENEM-estilo) Evolução do conhecimento científico"
          statement={<p>Avalie as afirmações sobre a evolução dos modelos atômicos: I. Dalton considerava o átomo divisível. II. Thomson propôs um átomo neutro com elétrons distribuídos numa esfera positiva. III. Rutherford concluiu que o átomo possui núcleo denso e eletrosfera vazia. IV. Bohr quantizou os níveis de energia da eletrosfera. Estão corretas apenas:</p>}
          options={[
            { letter: "a", text: "II, III e IV", correct: true },
            { letter: "b", text: "I, II e III" },
            { letter: "c", text: "I e IV" },
            { letter: "d", text: "Todas as afirmações" },
          ]}
          resolution={<p>I está errada: Dalton via o átomo como indivisível. II, III e IV estão corretas. Esse encadeamento ilustra a natureza autocorretiva da ciência: cada modelo incorporou novas evidências experimentais.</p>}
        />
      </section>
    </article>
  );
}
