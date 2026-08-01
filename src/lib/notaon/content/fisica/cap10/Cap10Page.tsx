"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap10Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 10</span>
          <h1>Forças Especiais: Peso, Normal, Tração e Força Elástica</h1>
          <p>
            Além da 2ª Lei de Newton, resolver problemas de dinâmica exige identificar e calcular cada força que age sobre o corpo.
            Neste capítulo estudamos as forças mais comuns: peso, normal, tração em fios e a força elástica das molas (Lei de Hooke), essenciais para qualquer problema de ENEM e vestibular.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Peso</span>
        <h2>1. Força Peso: P = mg</h2>
        <p>
          O <strong>peso</strong> é a força gravitacional que a Terra exerce sobre um corpo. É sempre vertical, apontando para baixo (em direção ao centro da Terra). Não deve ser confundido com massa:
        </p>
        <M block={true}>{"P = m \\cdot g"}</M>
        <p>
          onde <M>{"m"}</M> é a massa em kg e <M>{"g"}</M> é a aceleração da gravidade local (≈ 9,8 m/s² na superfície terrestre; nos problemas usa-se geralmente 10 m/s²). O peso varia com a posição: na Lua, onde g ≈ 1,6 m/s², um astronauta de 70 kg pesaria apenas 112 N (em vez de 700 N na Terra), mas sua massa permanece 70 kg.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Grandeza</th><th>Definição</th><th>Unidade</th><th>Varia com local?</th></tr>
            </thead>
            <tbody>
              <tr><td>Massa (m)</td><td>Quantidade de matéria</td><td>kg</td><td>Não</td></tr>
              <tr><td>Peso (P)</td><td>Força gravitacional = mg</td><td>Newton (N)</td><td>Sim (depende de g)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Normal</span>
        <h2>2. Força Normal: Perpendicular à Superfície de Contato</h2>
        <p>
          A <strong>força normal</strong> (N) é a força de contato que uma superfície exerce sobre o corpo, sempre <em>perpendicular</em> à superfície de contato e apontando para fora dela. É uma reação de compressão — surge sempre que há contato entre sólidos.
        </p>
        <p>
          Em superfície horizontal sem aceleração vertical, pela 2ª Lei (eixo y): <M>{"N - P = 0 \\Rightarrow N = mg"}</M>.
        </p>
        <p>
          Em elevador com aceleração: <M>{"N - mg = ma \\Rightarrow N = m(g + a)"}</M> se o elevador acelera para cima (N maior que o peso), ou <M>{"N = m(g - a)"}</M> se acelera para baixo (N menor). Em queda livre, N = 0 — sensação de imponderabilidade.
        </p>
        <div className="lesson-highlight">
          <h3>A Normal NÃO é sempre igual ao Peso</h3>
          <p>
            N = mg apenas em superfícies horizontais sem aceleração vertical. Em planos inclinados, em elevadores, ou com forças oblíquas aplicadas ao corpo, N pode ser maior ou menor que mg.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Normal no Plano Inclinado</span>
        <h2>3. Normal em Superfície Inclinada: N = mg·cosθ</h2>
        <p>
          Em um plano inclinado de ângulo <M>{"\\theta"}</M> em relação à horizontal, o peso é decomposto em duas componentes:
        </p>
        <M block={true}>{"P_{\\parallel} = mg \\cdot \\text{sen}\\,\\theta \\quad (\\text{paralela ao plano, causa deslizamento})"}</M>
        <M block={true}>{"P_{\\perp} = mg \\cdot \\cos\\theta \\quad (\\text{perpendicular ao plano, equilibrada pela normal})"}</M>
        <p>
          Portanto, a força normal em um plano inclinado é:
        </p>
        <M block={true}>{"N = mg \\cdot \\cos\\theta"}</M>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 230" width="400" height="230" aria-label="Plano inclinado com bloco e decomposição do peso">
            {/* Inclined plane */}
            <polygon points="30,200 370,200 370,80" fill="#e5e7eb" stroke="#374151" strokeWidth="2" />
            {/* Block on plane */}
            <g transform="rotate(-17, 280, 155)">
              <rect x="255" y="130" width="50" height="40" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" rx="3" />
              <text x="266" y="154" fontSize="12" fill="#1e40af" fontWeight="bold">m</text>
            </g>
            {/* Weight arrow vertical down */}
            <line x1="280" y1="170" x2="280" y2="215" stroke="#dc2626" strokeWidth="2.5" />
            <polygon points="280,220 275,207 285,207" fill="#dc2626" />
            <text x="285" y="215" fontSize="12" fill="#dc2626" fontWeight="bold">mg</text>
            {/* Normal arrow perpendicular to plane */}
            <line x1="280" y1="150" x2="242" y2="102" stroke="#16a34a" strokeWidth="2.5" />
            <polygon points="239,98 248,110 234,112" fill="#16a34a" />
            <text x="218" y="97" fontSize="12" fill="#16a34a" fontWeight="bold">N</text>
            {/* Parallel component along plane */}
            <line x1="280" y1="170" x2="330" y2="183" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5 3" />
            <polygon points="335,184 321,181 324,171" fill="#7c3aed" />
            <text x="332" y="195" fontSize="11" fill="#7c3aed">mg·senθ</text>
            {/* Perpendicular component */}
            <line x1="280" y1="170" x2="250" y2="205" stroke="#d97706" strokeWidth="2" strokeDasharray="5 3" />
            <text x="225" y="215" fontSize="11" fill="#d97706">mg·cosθ</text>
            {/* Angle label */}
            <path d="M 355,200 A 20,20 0 0,0 352,175" fill="none" stroke="#374151" strokeWidth="1.5" />
            <text x="352" y="195" fontSize="12" fill="#374151" fontWeight="bold">θ</text>
            <text x="30" y="220" fontSize="11" fill="#374151">N = mg·cosθ   |   Resultante paralela = mg·senθ</text>
          </svg>
          <figcaption>Plano inclinado: o peso mg é decomposto em componente paralela ao plano (mg·senθ, que causa o deslizamento) e componente perpendicular (mg·cosθ, equilibrada pela normal N).</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tração</span>
        <h2>4. Força de Tração: Fios e Cordas Ideais</h2>
        <p>
          A <strong>força de tração</strong> (T) é a força que um fio, corda ou cabo exerce sobre um corpo. Para um <strong>fio ideal</strong> (inextensível e sem massa):
        </p>
        <p><strong>1.</strong> A tensão é a mesma em todos os pontos do fio (não varia ao longo do comprimento).</p>
        <p><strong>2.</strong> O fio transmite a força sem acumular energia ou deformar-se.</p>
        <p><strong>3.</strong> A força é sempre ao longo do fio (tração pura, sem componente transversal).</p>
        <p>
          Em um fio real com massa <M>{"m_f"}</M>, a tensão varia ao longo do comprimento: na extremidade onde se aplica a força, a tensão é maior, pois precisa também acelerar a massa do fio abaixo daquele ponto.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Plano Inclinado</span>
        <h2>5. Equações do Plano Inclinado (Sem Atrito)</h2>
        <p>
          Para um bloco de massa <M>{"m"}</M> em plano inclinado de ângulo <M>{"\\theta"}</M>, sem atrito:
        </p>
        <M block={true}>{"\\text{Eixo paralelo ao plano: } mg\\,\\text{sen}\\,\\theta = ma \\Rightarrow a = g\\,\\text{sen}\\,\\theta"}</M>
        <M block={true}>{"\\text{Eixo perpendicular ao plano: } N = mg\\cos\\theta"}</M>
        <p>
          Com atrito cinético <M>{"\\mu_d"}</M>, a aceleração é reduzida:
        </p>
        <M block={true}>{"a = g(\\text{sen}\\,\\theta - \\mu_d \\cos\\theta)"}</M>
        <p>
          O bloco não desliza se a componente paralela do peso for menor ou igual à força máxima de atrito estático: <M>{"mg\\,\\text{sen}\\,\\theta \\leq \\mu_e \\cdot mg\\cos\\theta \\Rightarrow \\tan\\theta \\leq \\mu_e"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Lei de Hooke</span>
        <h2>6. Força Elástica (Mola): Lei de Hooke F = k·x</h2>
        <p>
          A <strong>Lei de Hooke</strong> (Robert Hooke, 1678) descreve o comportamento elástico de molas e materiais deformáveis dentro do regime elástico:
        </p>
        <M block={true}>{"F_{\\text{elástica}} = k \\cdot x"}</M>
        <p>
          onde <M>{"k"}</M> é a <strong>constante elástica</strong> da mola (em N/m) e <M>{"x"}</M> é a deformação (extensão ou compressão, em metros). A força elástica é sempre restauradora — se a mola é esticada, a força puxa de volta; se comprimida, a força empurra para fora.
        </p>
        <div className="lesson-highlight">
          <h3>Sinal da Força Elástica</h3>
          <p>
            A força que a mola exerce sobre o corpo é oposta à deformação: <M>{"\\vec{F} = -k\\vec{x}"}</M>. Se a mola está esticada para a direita (+x), a força é para a esquerda (−). Esse é o princípio do movimento harmônico simples.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Constante Elástica</span>
        <h2>7. Constante Elástica k: Rigidez da Mola</h2>
        <p>
          A constante elástica <M>{"k"}</M> mede a rigidez da mola: quanto maior o <M>{"k"}</M>, mais força é necessária para deformá-la. A unidade no SI é N/m (Newton por metro). Exemplos típicos:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Objeto</th><th>k típico (N/m)</th></tr>
            </thead>
            <tbody>
              <tr><td>Mola de caneta esferográfica</td><td>5 – 20</td></tr>
              <tr><td>Mola de balança de banheiro</td><td>500 – 2000</td></tr>
              <tr><td>Suspensão de automóvel</td><td>10.000 – 50.000</td></tr>
              <tr><td>Mola de válvula de motor</td><td>50.000 – 200.000</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          O <strong>dinamômetro</strong> é um instrumento que usa a Lei de Hooke para medir forças: a mola interna se deforma proporcionalmente à força aplicada, e uma escala calibrada indica o valor.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Regime Elástico</span>
        <h2>8. Região Elástica vs Plástica: Gráfico F × x</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 230" width="400" height="230" aria-label="Gráfico força versus deformação mostrando regime elástico e plástico">
            {/* Axes */}
            <line x1="50" y1="20" x2="50" y2="195" stroke="#374151" strokeWidth="2" />
            <line x1="50" y1="195" x2="370" y2="195" stroke="#374151" strokeWidth="2" />
            <polygon points="50,15 45,28 55,28" fill="#374151" />
            <polygon points="375,195 362,190 362,200" fill="#374151" />
            <text x="25" y="15" fontSize="12" fill="#374151">F</text>
            <text x="372" y="200" fontSize="12" fill="#374151">x</text>
            {/* Linear elastic region */}
            <line x1="50" y1="195" x2="210" y2="75" stroke="#2563eb" strokeWidth="3" />
            {/* Limit of proportionality marker */}
            <circle cx="210" cy="75" r="5" fill="#dc2626" />
            <text x="215" y="70" fontSize="11" fill="#dc2626">Limite elástico</text>
            {/* Plastic region curve */}
            <path d="M 210,75 Q 270,50 320,90 Q 350,110 360,140" fill="none" stroke="#d97706" strokeWidth="3" />
            {/* Rupture point */}
            <circle cx="360" cy="140" r="5" fill="#7c3aed" />
            <text x="330" y="160" fontSize="11" fill="#7c3aed">Ruptura</text>
            {/* Slope annotation */}
            <text x="90" y="150" fontSize="13" fill="#2563eb" fontWeight="bold">Região Elástica</text>
            <text x="90" y="165" fontSize="11" fill="#2563eb">F = k·x (Lei de Hooke)</text>
            <text x="90" y="178" fontSize="11" fill="#2563eb">inclinação = k</text>
            <text x="240" y="45" fontSize="12" fill="#d97706" fontWeight="bold">Região Plástica</text>
            <text x="240" y="58" fontSize="11" fill="#d97706">(deformação permanente)</text>
            {/* k label on slope */}
            <text x="130" y="125" fontSize="13" fill="#1e40af" fontWeight="bold">k</text>
            <line x1="155" y1="135" x2="175" y2="110" stroke="#1e40af" strokeWidth="1.5" strokeDasharray="4 2" />
          </svg>
          <figcaption>Gráfico F × x: na região elástica (azul), F = k·x — comportamento linear. Além do limite elástico, o material entra na região plástica (laranja) com deformação permanente, até a ruptura (roxo).</figcaption>
        </figure>
        <p>
          Na <strong>região elástica</strong>, o material retorna à forma original ao se remover a força. Na <strong>região plástica</strong>, a deformação é permanente. A <strong>ruptura</strong> ocorre quando a tensão ultrapassa a resistência máxima do material.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Associação de Molas</span>
        <h2>9. Associação de Molas: Série e Paralelo</h2>
        <p>
          Duas ou mais molas podem ser associadas de duas formas, com resultados opostos:
        </p>
        <p>
          <strong>Molas em série</strong> (uma após a outra): a deformação total é a soma das deformações individuais, e a constante equivalente é menor:
        </p>
        <M block={true}>{"\\frac{1}{k_{\\text{eq}}} = \\frac{1}{k_1} + \\frac{1}{k_2} \\quad (\\text{série: mais fácil de deformar})"}</M>
        <p>
          <strong>Molas em paralelo</strong> (lado a lado, mesma deformação): a força se distribui entre elas, e a constante equivalente é maior:
        </p>
        <M block={true}>{"k_{\\text{eq}} = k_1 + k_2 \\quad (\\text{paralelo: mais difícil de deformar})"}</M>
        <div className="lesson-highlight">
          <h3>Analogia com Resistores</h3>
          <p>
            Molas em série se comportam como resistores em paralelo (maior resistência/menor k). Molas em paralelo se comportam como resistores em série (menor resistência/maior k). A analogia é inversa!
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dinamômetro</span>
        <h2>10. Dinamômetro: Instrumento Baseado na Lei de Hooke</h2>
        <p>
          O <strong>dinamômetro</strong> é o instrumento padrão para medir forças. Internamente possui uma mola de constante elástica <M>{"k"}</M> conhecida e calibrada. Quando uma força é aplicada, a mola se deforma por <M>{"x = F/k"}</M> e um ponteiro indica o valor na escala graduada em Newton.
        </p>
        <p>
          A escala de um dinamômetro tem fundo de escala (valor máximo) — forças acima desse valor causam deformação permanente e inutilizam o instrumento. A balança de banheiro é um dinamômetro: mede o peso e divide por g para mostrar a massa em kg.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Origem das Forças</span>
        <h2>11. Tabela: Forças e Suas Origens Microscópicas</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Força</th><th>Direção</th><th>Origem microscópica</th><th>Fórmula</th></tr>
            </thead>
            <tbody>
              <tr><td>Peso (P)</td><td>Vertical ↓</td><td>Gravitação entre Terra e corpo</td><td>P = mg</td></tr>
              <tr><td>Normal (N)</td><td>⊥ à superfície (para fora)</td><td>Repulsão eletromagnética entre átomos</td><td>N = mg·cosθ (plano incl.)</td></tr>
              <tr><td>Tração (T)</td><td>Ao longo do fio</td><td>Ligações químicas entre átomos do fio</td><td>T = F (fio ideal)</td></tr>
              <tr><td>Elástica (F_e)</td><td>Oposta à deformação</td><td>Ligações entre átomos do material</td><td>F_e = k·x</td></tr>
              <tr><td>Atrito (f)</td><td>Oposta ao movimento</td><td>Ligações e asperezas superficiais</td><td>f = μ·N</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo das Forças Especiais</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Peso</span>
            <h3>Força Gravitacional</h3>
            <M block={true}>{"P = m \\cdot g"}</M>
          </div>
          <div className="math-card">
            <span>Normal</span>
            <h3>Plano Inclinado</h3>
            <M block={true}>{"N = mg\\cos\\theta"}</M>
          </div>
          <div className="math-card">
            <span>Hooke</span>
            <h3>Força Elástica</h3>
            <M block={true}>{"F_e = k \\cdot x"}</M>
          </div>
          <div className="math-card">
            <span>Molas</span>
            <h3>Associação em Série</h3>
            <M block={true}>{"\\frac{1}{k_{eq}} = \\frac{1}{k_1} + \\frac{1}{k_2}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Peso e Normal em Superfície Horizontal"
          statement={<p>Um bloco de 5 kg repousa sobre uma mesa horizontal. Usando g = 10 m/s², calcule o peso do bloco e a força normal que a mesa exerce sobre ele.</p>}
          options={[
            { letter: "a", text: "P = 5 N e N = 5 N" },
            { letter: "b", text: "P = 50 N e N = 5 N" },
            { letter: "c", text: "P = 50 N e N = 50 N", correct: true },
            { letter: "d", text: "P = 5 N e N = 50 N" },
          ]}
          resolution={
            <>
              <M block={true}>{"P = mg = 5 \\times 10 = 50 \\text{ N (para baixo)}"}</M>
              <p>Em equilíbrio vertical, N = P = 50 N (para cima). Alternativa c.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Bloco em Plano Inclinado 37° sem Atrito"
          statement={<p>Um bloco de 10 kg é colocado em um plano inclinado de 37° sem atrito. Calcule sua aceleração. Use g = 10 m/s² e sen37° = 0,6.</p>}
          options={[
            { letter: "a", text: "4 m/s²" },
            { letter: "b", text: "6 m/s²", correct: true },
            { letter: "c", text: "8 m/s²" },
            { letter: "d", text: "10 m/s²" },
          ]}
          resolution={
            <>
              <M block={true}>{"a = g \\cdot \\text{sen}\\,37° = 10 \\times 0{,}6 = 6 \\text{ m/s}^2"}</M>
              <p>A componente do peso paralela ao plano é F = mg·sen37° = 60 N. Aplicando F = ma: a = 60/10 = 6 m/s². Alternativa b.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Mola e Associação em Série"
          statement={<p>Uma mola de k = 500 N/m é comprimida 8 cm. Depois, duas molas de k₁ = 200 N/m e k₂ = 300 N/m são associadas em série. Calcule: (a) a força elástica da mola comprimida; (b) a constante equivalente das molas em série.</p>}
          options={[
            { letter: "a", text: "F = 40 N e k_eq = 500 N/m" },
            { letter: "b", text: "F = 40 N e k_eq = 120 N/m", correct: true },
            { letter: "c", text: "F = 4 N e k_eq = 120 N/m" },
            { letter: "d", text: "F = 40 N e k_eq = 250 N/m" },
          ]}
          resolution={
            <>
              <p><strong>(a) Força elástica:</strong></p>
              <M block={true}>{"F = k \\cdot x = 500 \\times 0{,}08 = 40 \\text{ N}"}</M>
              <p><strong>(b) Molas em série:</strong></p>
              <M block={true}>{"\\frac{1}{k_{eq}} = \\frac{1}{200} + \\frac{1}{300} = \\frac{3 + 2}{600} = \\frac{5}{600} \\Rightarrow k_{eq} = \\frac{600}{5} = 120 \\text{ N/m}"}</M>
              <p>Alternativa b.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Balança em Elevador em Aceleração"
          statement={<p>Uma pessoa de 70 kg está em um elevador que acelera para cima a 2 m/s². Usando g = 10 m/s², a balança de banheiro (dinamômetro) mostrará um valor maior ou menor que o peso real? Qual o valor lido?</p>}
          options={[
            { letter: "a", text: "Menor; 56 kg" },
            { letter: "b", text: "Maior; 84 kg", correct: true },
            { letter: "c", text: "Igual; 70 kg" },
            { letter: "d", text: "Maior; 77 kg" },
          ]}
          resolution={
            <>
              <p>A balança mede a força normal N. No elevador acelerando para cima, pela 2ª Lei (eixo vertical):</p>
              <M block={true}>{"N - mg = ma \\Rightarrow N = m(g + a) = 70 \\times (10 + 2) = 70 \\times 12 = 840 \\text{ N}"}</M>
              <p>A balança mostra N/g = 840/10 = 84 kg — maior que a massa real de 70 kg. Alternativa b. A sensação de "estar mais pesado" em elevadores que sobem acelerados é justamente esse aumento da normal.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Corda de Bungee como Mola (Lei de Hooke)"
          statement={<p>Uma corda de bungee funciona como mola com k = 150 N/m. Uma pessoa de 60 kg salta e fica em equilíbrio. Usando g = 10 m/s², qual é o alongamento da corda no equilíbrio?</p>}
          options={[
            { letter: "a", text: "0,4 m" },
            { letter: "b", text: "4 m", correct: true },
            { letter: "c", text: "40 m" },
            { letter: "d", text: "9 m" },
          ]}
          resolution={
            <>
              <p>No equilíbrio, a força elástica da corda iguala o peso da pessoa:</p>
              <M block={true}>{"F_e = P \\Rightarrow k \\cdot x = mg"}</M>
              <M block={true}>{"x = \\frac{mg}{k} = \\frac{60 \\times 10}{150} = \\frac{600}{150} = 4 \\text{ m}"}</M>
              <p>A corda se alonga 4 m além de seu comprimento natural. Alternativa b.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
