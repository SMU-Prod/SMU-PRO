"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap01Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 1</span>
          <h1>Matéria e Energia: Propriedades, Estados e Fenômenos</h1>
          <p>
            Entenda os conceitos fundamentais da Química: o que é matéria, energia, corpo e objeto.
            Explore propriedades gerais e específicas, os três estados físicos, as mudanças de estado
            e a diferença essencial entre fenômenos físicos e químicos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Definições: Matéria, Corpo, Objeto e Energia</h2>
        <p>
          <strong>Matéria</strong> é tudo que tem massa e ocupa lugar no espaço (tem volume). A
          cadeira, o ar, a água, o ferro — tudo isso é matéria. Já a luz e o calor <em>não</em> são
          matéria, pois não possuem massa de repouso nem volume definido.
        </p>
        <p>
          <strong>Corpo</strong> é uma porção limitada de matéria. Ex.: uma pedra, um copo de água.
          <strong> Objeto</strong> é um corpo com utilidade definida pelo ser humano. Ex.: o copo
          (objeto) é feito de vidro (corpo/matéria).
        </p>
        <p>
          <strong>Energia</strong> é a capacidade de realizar trabalho ou produzir transformações. A
          Química estuda principalmente a energia que acompanha as transformações da matéria — energia
          química, térmica e luminosa.
        </p>
        <div className="lesson-highlight">
          <h3>Relação fundamental</h3>
          <p>
            Einstein mostrou que matéria e energia são intercambiáveis pela equação{" "}
            <M>{"E = mc^2"}</M>, onde <M>{"m"}</M> é a massa e <M>{"c = 3{,}0 \\times 10^8 \\text{ m/s}"}</M> é
            a velocidade da luz no vácuo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades Gerais</span>
        <h2>2. Propriedades Gerais da Matéria</h2>
        <p>
          As <strong>propriedades gerais</strong> são comuns a toda matéria, independentemente do
          tipo de substância:
        </p>
        <ul>
          <li><strong>Massa:</strong> quantidade de matéria — medida em kg ou g.</li>
          <li><strong>Volume:</strong> espaço ocupado — medida em m³, L ou mL.</li>
          <li><strong>Impenetrabilidade:</strong> dois corpos não podem ocupar o mesmo lugar ao mesmo tempo.</li>
          <li><strong>Compressibilidade:</strong> capacidade de reduzir volume sob pressão — maior nos gases.</li>
          <li><strong>Elasticidade:</strong> retorno à forma original após deformação.</li>
          <li><strong>Divisibilidade:</strong> a matéria pode ser dividida em partes cada vez menores.</li>
          <li><strong>Indestrutibilidade:</strong> a matéria não pode ser criada nem destruída (Lei de Lavoisier).</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Lei de Lavoisier</h3>
          <p>
            "Na natureza, nada se cria, nada se perde, tudo se transforma." Matematicamente:{" "}
            <M>{"m_{\\text{reagentes}} = m_{\\text{produtos}}"}</M>
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades Específicas</span>
        <h2>3. Propriedades Específicas da Matéria</h2>
        <p>
          As <strong>propriedades específicas</strong> variam conforme a substância e servem para
          identificá-la. As principais são:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>Definição</th><th>Fórmula / Unidade</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr><td>Densidade</td><td>Massa por unidade de volume</td><td><M>{"d = m/V"}</M> (g/cm³)</td><td>Ouro: 19,3 g/cm³</td></tr>
              <tr><td>Temperatura de fusão</td><td>T em que sólido vira líquido</td><td>°C ou K</td><td>Gelo: 0 °C</td></tr>
              <tr><td>Temperatura de ebulição</td><td>T em que líquido vira vapor</td><td>°C ou K</td><td>Água: 100 °C (1 atm)</td></tr>
              <tr><td>Solubilidade</td><td>Máximo que dissolve em 100 g de solvente</td><td>g/100 g H₂O</td><td>NaCl: 36 g a 20 °C</td></tr>
              <tr><td>Dureza</td><td>Resistência a ser riscada</td><td>Escala Mohs (1-10)</td><td>Diamante: 10</td></tr>
              <tr><td>Ductilidade</td><td>Capacidade de virar fio</td><td>—</td><td>Cobre, ouro</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estados Físicos</span>
        <h2>4. Estados Físicos da Matéria: Sólido, Líquido e Gasoso</h2>
        <p>
          A matéria pode se apresentar em três estados físicos principais, dependendo das condições de
          temperatura e pressão. As diferenças entre eles estão na organização das partículas e nas
          forças de interação:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>Sólido</th><th>Líquido</th><th>Gasoso</th></tr>
            </thead>
            <tbody>
              <tr><td>Forma</td><td>Definida e rígida</td><td>Assume forma do recipiente</td><td>Assume forma do recipiente</td></tr>
              <tr><td>Volume</td><td>Definido</td><td>Definido</td><td>Indefinido (expande)</td></tr>
              <tr><td>Compressibilidade</td><td>Praticamente nula</td><td>Muito pequena</td><td>Alta</td></tr>
              <tr><td>Organização das partículas</td><td>Ordenada, empacotada</td><td>Desordenada, próxima</td><td>Muito separadas, aleatória</td></tr>
              <tr><td>Forças intermoleculares</td><td>Muito fortes</td><td>Moderadas</td><td>Muito fracas</td></tr>
              <tr><td>Exemplos</td><td>Ferro, gelo, sal</td><td>Água, álcool, mercúrio</td><td>Vapor d'água, O₂, CO₂</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mudanças de Estado</span>
        <h2>5. Mudanças de Estado: Diagrama Circular</h2>
        <p>
          As mudanças de estado ocorrem quando se fornece ou retira energia (calor) do sistema.
          Os seis processos são: fusão, solidificação, vaporização (evaporação/ebulição), condensação,
          sublimação e deposição (sublimação inversa).
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 280" width="480" height="280" aria-label="Diagrama circular de mudanças de estado">
            {/* Círculos dos estados */}
            <circle cx="240" cy="60" r="48" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="240" y="55" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e40af">GASOSO</text>
            <text x="240" y="73" textAnchor="middle" fontSize="11" fill="#1e40af">vapor, gás</text>

            <circle cx="90" cy="220" r="48" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            <text x="90" y="215" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#065f46">SÓLIDO</text>
            <text x="90" y="233" textAnchor="middle" fontSize="11" fill="#065f46">gelo, ferro</text>

            <circle cx="390" cy="220" r="48" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
            <text x="390" y="215" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#92400e">LÍQUIDO</text>
            <text x="390" y="233" textAnchor="middle" fontSize="11" fill="#92400e">água, álcool</text>

            {/* Setas: Sólido → Líquido (fusão) */}
            <line x1="138" y1="208" x2="342" y2="208" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arr)"/>
            <text x="240" y="200" textAnchor="middle" fontSize="11" fill="#b45309">Fusão ↑ calor</text>
            {/* Sólido ← Líquido (solidificação) */}
            <line x1="342" y1="228" x2="138" y2="228" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arr2)"/>
            <text x="240" y="244" textAnchor="middle" fontSize="11" fill="#1d4ed8">Solidificação ↓ calor</text>

            {/* Líquido → Gasoso (vaporização) */}
            <line x1="365" y1="174" x2="278" y2="100" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arr)"/>
            <text x="345" y="140" textAnchor="middle" fontSize="10" fill="#b45309">Vaporização</text>
            {/* Gasoso → Líquido (condensação) */}
            <line x1="260" y1="100" x2="350" y2="178" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arr2)"/>
            <text x="290" y="150" textAnchor="middle" fontSize="10" fill="#1d4ed8">Condensação</text>

            {/* Sólido → Gasoso (sublimação) */}
            <line x1="115" y1="174" x2="202" y2="100" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arr3)"/>
            <text x="140" y="130" textAnchor="middle" fontSize="10" fill="#5b21b6">Sublimação</text>
            {/* Gasoso → Sólido (deposição) */}
            <line x1="198" y1="105" x2="118" y2="178" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr4)"/>
            <text x="170" y="155" textAnchor="middle" fontSize="10" fill="#991b1b">Deposição</text>

            <defs>
              <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#f59e0b"/>
              </marker>
              <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#3b82f6"/>
              </marker>
              <marker id="arr3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/>
              </marker>
              <marker id="arr4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/>
              </marker>
            </defs>
          </svg>
          <figcaption>Diagrama das seis mudanças de estado físico da matéria.</figcaption>
        </figure>
        <p>
          <strong>Fusão:</strong> sólido → líquido (absorve calor). Ex.: gelo a 0 °C.{" "}
          <strong>Solidificação:</strong> líquido → sólido (libera calor). Ex.: água congelando.{" "}
          <strong>Vaporização:</strong> líquido → gasoso (absorve calor) — pode ocorrer por evaporação
          (lenta, superficial) ou ebulição (rápida, em todo o líquido, a temperatura definida).{" "}
          <strong>Condensação:</strong> gasoso → líquido (libera calor). Ex.: vapor d'água virando orvalho.{" "}
          <strong>Sublimação:</strong> sólido → gasoso diretamente. Ex.: naftalina, gelo seco.{" "}
          <strong>Deposição:</strong> gasoso → sólido. Ex.: geada.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráfico de Aquecimento</span>
        <h2>6. Curva de Aquecimento da Água</h2>
        <p>
          O gráfico de Temperatura × Tempo durante o aquecimento de uma substância pura apresenta
          <strong> platôs</strong> (trechos horizontais) nas mudanças de estado. Nesses trechos, o
          calor fornecido é usado para mudar o estado e não para aumentar a temperatura.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 260" width="480" height="260" aria-label="Curva de aquecimento da água">
            {/* Eixos */}
            <line x1="50" y1="220" x2="450" y2="220" stroke="#374151" strokeWidth="2"/>
            <line x1="50" y1="20" x2="50" y2="220" stroke="#374151" strokeWidth="2"/>
            <text x="240" y="250" textAnchor="middle" fontSize="13" fill="#374151">Tempo (min)</text>
            <text x="18" y="130" textAnchor="middle" fontSize="13" fill="#374151" transform="rotate(-90,18,130)">Temperatura (°C)</text>

            {/* Marcas eixo Y */}
            <text x="44" y="190" textAnchor="end" fontSize="11" fill="#374151">−10</text>
            <text x="44" y="155" textAnchor="end" fontSize="11" fill="#374151">0</text>
            <text x="44" y="80" textAnchor="end" fontSize="11" fill="#374151">100</text>
            <text x="44" y="35" textAnchor="end" fontSize="11" fill="#374151">120</text>
            <line x1="48" y1="155" x2="52" y2="155" stroke="#374151" strokeWidth="1"/>
            <line x1="48" y1="80" x2="52" y2="80" stroke="#374151" strokeWidth="1"/>

            {/* Curva: aquecimento gelo, platô fusão, aquecimento água, platô ebulição, aquecimento vapor */}
            <polyline
              points="60,190 110,155 180,155 240,80 310,80 400,30"
              fill="none" stroke="#2563eb" strokeWidth="3"/>

            {/* Setas de fase */}
            <text x="85" y="180" textAnchor="middle" fontSize="10" fill="#065f46">Gelo</text>
            <text x="145" y="148" textAnchor="middle" fontSize="10" fill="#059669">Fusão</text>
            <text x="212" y="105" textAnchor="middle" fontSize="10" fill="#0369a1">Água liq.</text>
            <text x="275" y="73" textAnchor="middle" fontSize="10" fill="#b45309">Ebulição</text>
            <text x="358" y="50" textAnchor="middle" fontSize="10" fill="#7c3aed">Vapor</text>

            {/* Linhas de referência pontilhadas */}
            <line x1="50" y1="155" x2="450" y2="155" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4,4"/>
            <line x1="50" y1="80" x2="450" y2="80" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4,4"/>
          </svg>
          <figcaption>Curva de aquecimento da água (1 atm). Os platôs a 0 °C e 100 °C correspondem à fusão e à ebulição.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <h3>Calor latente e calor sensível</h3>
          <p>
            Fora dos platôs, o calor aumenta a temperatura (<strong>calor sensível</strong>):{" "}
            <M>{"Q = m \\cdot c \\cdot \\Delta T"}</M>. Nos platôs, o calor muda o estado (<strong>calor
            latente</strong>): <M>{"Q = m \\cdot L"}</M>, onde <M>{"L"}</M> é o calor latente específico (J/g).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Transformações</span>
        <h2>7. Fenômenos Físicos: Características e Exemplos</h2>
        <p>
          Um <strong>fenômeno físico</strong> é uma transformação que <em>não</em> altera a composição
          química da matéria — a substância permanece a mesma ao final do processo.
        </p>
        <ul>
          <li>Fusão do gelo: <M>{"H_2O(s) \\rightarrow H_2O(l)"}</M> — mesma substância.</li>
          <li>Dissolução do sal: NaCl se dispersa na água, mas continua sendo NaCl.</li>
          <li>Amassamento do alumínio: muda a forma, não a composição.</li>
          <li>Ebulição da água: <M>{"H_2O(l) \\rightarrow H_2O(g)"}</M>.</li>
          <li>Limar ferro, cortar papel, magnetização.</li>
        </ul>
        <p>
          As características dos fenômenos físicos: <strong>reversibilidade geral</strong> (é possível
          retornar ao estado original), <strong>ausência de nova substância</strong>, e as propriedades
          específicas permanecem as mesmas.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Transformações</span>
        <h2>8. Fenômenos Químicos: Características e Identificação</h2>
        <p>
          Um <strong>fenômeno químico</strong> (reação química) é uma transformação que altera a
          composição química — novas substâncias são formadas com propriedades diferentes das originais.
        </p>
        <ul>
          <li>Combustão do papel: papel + O₂ → CO₂ + H₂O + cinza.</li>
          <li>Fermentação: glicose → etanol + CO₂.</li>
          <li>Apodrecimento de frutas.</li>
          <li>Corrosão do ferro: <M>{"4Fe + 3O_2 \\rightarrow 2Fe_2O_3"}</M>.</li>
          <li>Eletrólise da água: <M>{"2H_2O \\rightarrow 2H_2 + O_2"}</M>.</li>
        </ul>
        <p>
          <strong>Indícios</strong> de reação química: formação de gás (efervescência), precipitado
          (sólido em solução), mudança de cor, emissão de luz, variação brusca de temperatura,
          formação de odor.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>9. Fenômeno Físico × Fenômeno Químico</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Critério</th><th>Fenômeno Físico</th><th>Fenômeno Químico</th></tr>
            </thead>
            <tbody>
              <tr><td>Nova substância?</td><td>Não</td><td>Sim</td></tr>
              <tr><td>Composição química</td><td>Inalterada</td><td>Alterada</td></tr>
              <tr><td>Reversibilidade</td><td>Geralmente reversível</td><td>Geralmente irreversível</td></tr>
              <tr><td>Fusão do gelo</td><td>✓</td><td>—</td></tr>
              <tr><td>Queima da vela</td><td>—</td><td>✓</td></tr>
              <tr><td>Dissolução do sal</td><td>✓</td><td>—</td></tr>
              <tr><td>Cozimento do ovo</td><td>—</td><td>✓</td></tr>
              <tr><td>Ebulição da água</td><td>✓</td><td>—</td></tr>
              <tr><td>Enferrujamento do ferro</td><td>—</td><td>✓</td></tr>
              <tr><td>Rasgamento do papel</td><td>✓</td><td>—</td></tr>
              <tr><td>Queima do papel</td><td>—</td><td>✓</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Energia</span>
        <h2>10. Tipos de Energia e Transformações da Matéria</h2>
        <p>
          A energia se apresenta em diferentes formas, todas inter-relacionadas com as transformações
          da matéria:
        </p>
        <ul>
          <li><strong>Energia cinética:</strong> energia do movimento — <M>{"E_k = \\frac{1}{2}mv^2"}</M>. Relacionada à temperatura (velocidade das partículas).</li>
          <li><strong>Energia potencial:</strong> energia armazenada — gravitacional, elástica, química.</li>
          <li><strong>Energia térmica:</strong> energia cinética média das partículas — transferida como calor de regiões quentes para frias.</li>
          <li><strong>Energia química:</strong> armazenada nas ligações químicas — liberada ou absorvida em reações.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Reações exotérmicas e endotérmicas</h3>
          <p>
            Reações que <strong>liberam</strong> energia: exotérmicas (<M>{"\\Delta H < 0"}</M>).
            Reações que <strong>absorvem</strong> energia: endotérmicas (<M>{"\\Delta H > 0"}</M>).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Temperatura e Calor</span>
        <h2>11. Temperatura e Calor: Escalas Termométricas</h2>
        <p>
          <strong>Temperatura</strong> mede a agitação média das partículas (propriedade intensiva).{" "}
          <strong>Calor</strong> é a energia em trânsito devido à diferença de temperatura (propriedade
          extensiva). As três principais escalas termométricas são:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Ponto</th><th>Celsius (°C)</th><th>Kelvin (K)</th><th>Fahrenheit (°F)</th></tr>
            </thead>
            <tbody>
              <tr><td>Fusão da água</td><td>0</td><td>273</td><td>32</td></tr>
              <tr><td>Ebulição da água</td><td>100</td><td>373</td><td>212</td></tr>
              <tr><td>Zero absoluto</td><td>−273</td><td>0</td><td>−459</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Conversões entre escalas</h3>
          <p>
            Celsius ↔ Kelvin: <M>{"T(K) = t(°C) + 273"}</M>
          </p>
          <p>
            Celsius ↔ Fahrenheit: <M>{"\\frac{t_C}{5} = \\frac{t_F - 32}{9}"}</M>
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>⚗️</span>
            <h3>Matéria</h3>
            <p>Tem massa e volume. Corpo = porção de matéria. Objeto = corpo com utilidade.</p>
          </div>
          <div className="math-card">
            <span>🌡️</span>
            <h3>Estados Físicos</h3>
            <p>Sólido (forma fixa), Líquido (volume fixo), Gasoso (expansível). Separados por mudanças de estado.</p>
          </div>
          <div className="math-card">
            <span>📐</span>
            <h3>Densidade</h3>
            <p><M>{"d = m/V"}</M> — propriedade específica usada para identificar substâncias.</p>
          </div>
          <div className="math-card">
            <span>🔥</span>
            <h3>Calor latente</h3>
            <p><M>{"Q = m \\cdot L"}</M> — calor que muda o estado sem variar temperatura.</p>
          </div>
          <div className="math-card">
            <span>⚡</span>
            <h3>Fenômeno Físico</h3>
            <p>Não forma nova substância. Geralmente reversível. Ex.: fusão, dissolução.</p>
          </div>
          <div className="math-card">
            <span>🧪</span>
            <h3>Fenômeno Químico</h3>
            <p>Forma nova substância. Geralmente irreversível. Ex.: combustão, ferrugem.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Identificando Fenômenos"
          statement={<p>Classifique como fenômeno físico (F) ou químico (Q): I. Derretimento do gelo. II. Queima do papel. III. Dissolução do açúcar na água. IV. Enferrujamento do ferro. A sequência correta é:</p>}
          options={[
            { letter: "a", text: "F, Q, F, Q", correct: true },
            { letter: "b", text: "Q, F, Q, F" },
            { letter: "c", text: "F, F, Q, Q" },
            { letter: "d", text: "Q, Q, F, F" },
          ]}
          resolution={<p>Derretimento do gelo: mudança de estado (F). Queima: nova substância (Q). Dissolução do açúcar: mesmo composto disperso (F). Enferrujamento: formação de Fe₂O₃, nova substância (Q). Resposta: F, Q, F, Q.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Curva de Aquecimento"
          statement={<p>Durante o aquecimento de uma amostra de água pura a 1 atm, observa-se um platô a 100 °C. Esse platô indica que, nesse instante: a energia fornecida é usada para romper as forças intermoleculares, sem alterar a temperatura. Calcule o calor necessário para vaporizar 50 g de água sabendo que <M>{"L_{vap} = 2{,}26 \\text{ kJ/g}"}</M>.</p>}
          options={[
            { letter: "a", text: "113 kJ", correct: true },
            { letter: "b", text: "56,5 kJ" },
            { letter: "c", text: "226 kJ" },
            { letter: "d", text: "22,6 kJ" },
          ]}
          resolution={<p><M>{"Q = m \\cdot L = 50 \\text{ g} \\times 2{,}26 \\text{ kJ/g} = 113 \\text{ kJ}"}</M>. O platô ocorre porque toda a energia fornecida é usada para vencer as forças de coesão (calor latente), mantendo a temperatura constante em 100 °C.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Conversão de Escalas e Cálculo de Calor"
          statement={<p>Uma substância pura possui ponto de fusão de 327 °C. Qual é esse valor em Kelvin? Além disso, qual o calor necessário para elevar a temperatura de 200 g dessa substância de 27 °C até 327 °C, dado que o calor específico é <M>{"c = 0{,}128 \\text{ J/(g·°C)}"}</M>?</p>}
          options={[
            { letter: "a", text: "600 K e 7 680 J", correct: true },
            { letter: "b", text: "600 K e 3 840 J" },
            { letter: "c", text: "327 K e 7 680 J" },
            { letter: "d", text: "654 K e 7 680 J" },
          ]}
          resolution={<p>T(K) = 327 + 273 = 600 K. <M>{"Q = m \\cdot c \\cdot \\Delta T = 200 \\times 0{,}128 \\times (327 - 27) = 200 \\times 0{,}128 \\times 300 = 7\\,680 \\text{ J}"}</M>. (Nota: a substância com fusão a 327 °C é o chumbo.)</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Gelo Seco na Indústria Alimentícia"
          statement={<p>O gelo seco é o dióxido de carbono sólido (<M>{"CO_2"}</M>) mantido a temperaturas muito baixas. Ao ser retirado do recipiente frigorífico, o gelo seco se transforma diretamente em gás sem passar pelo estado líquido. Esse processo é utilizado na conservação de alimentos perecíveis, pois resfria sem deixar resíduo líquido. Com base nesse contexto, o fenômeno descrito é chamado de:</p>}
          options={[
            { letter: "a", text: "Sublimação, fenômeno físico em que o sólido passa diretamente ao estado gasoso.", correct: true },
            { letter: "b", text: "Vaporização, fenômeno físico em que o líquido passa ao estado gasoso." },
            { letter: "c", text: "Condensação, fenômeno físico em que o gás passa ao estado líquido." },
            { letter: "d", text: "Decomposição, fenômeno químico em que o CO₂ se decompõe." },
          ]}
          resolution={<p>O gelo seco (<M>{"CO_2"}</M> sólido) passa diretamente ao estado gasoso sem liquefazer — isso é sublimação, um fenômeno físico (a composição química do CO₂ não muda). A vantagem industrial é exatamente a ausência de resíduo líquido e o intenso poder refrigerante.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Propriedades e Identificação de Substâncias"
          statement={<p>Um técnico de laboratório recebeu três líquidos incolores sem identificação. Para distingui-los, ele mediu o ponto de ebulição de cada um a 1 atm: substância A = 78 °C, substância B = 100 °C, substância C = 56 °C. Baseando-se no fato de que ponto de ebulição é uma propriedade específica da matéria, o técnico concluiu que a substância B é provavelmente:</p>}
          options={[
            { letter: "a", text: "Água, pois seu ponto de ebulição a 1 atm é 100 °C.", correct: true },
            { letter: "b", text: "Etanol, pois substâncias orgânicas sempre fervem a 100 °C." },
            { letter: "c", text: "Acetona, pois é o líquido mais volátil do grupo." },
            { letter: "d", text: "Não é possível identificar substâncias pelo ponto de ebulição." },
          ]}
          resolution={<p>O ponto de ebulição é uma propriedade específica — cada substância pura tem seu próprio valor (em condições fixas de pressão). Água: 100 °C; Etanol: ~78 °C; Acetona: ~56 °C. Portanto, A = etanol, B = água, C = acetona. A identificação por propriedades específicas é um procedimento fundamental em análise química.</p>}
        />
      </section>
    </article>
  );
}
