"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap05Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 5</span>
          <h1>Estrutura Atômica Moderna e Semelhanças Atômicas</h1>
          <p>
            Domine os números <M>{"Z"}</M> e <M>{"A"}</M>, o cálculo de elétrons em íons e as quatro
            semelhanças atômicas — isótopos, isóbaros, isótonos e espécies isoeletrônicas. Entenda também
            por que a massa atômica de um elemento quase nunca é um número inteiro.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Identidade do átomo</span>
        <h2>1. Número Atômico (Z) e Número de Massa (A)</h2>
        <p>
          O <strong>número atômico</strong> (<M>{"Z"}</M>) é a quantidade de prótons no núcleo. Ele é a
          "impressão digital" do elemento: mudar <M>{"Z"}</M> significa mudar de elemento. O{" "}
          <strong>número de massa</strong> (<M>{"A"}</M>) soma prótons e nêutrons, pois praticamente toda
          a massa do átomo está no núcleo.
        </p>
        <div className="math-block">
          <h3>Relações fundamentais</h3>
          <p><M>{"A = Z + N \\quad\\Rightarrow\\quad N = A - Z"}</M></p>
          <p>
            Notação geral: <M>{"{}^{A}_{Z}\\text{X}"}</M>. Exemplo: o sódio é{" "}
            <M>{"{}^{23}_{11}\\text{Na}"}</M> — tem 11 prótons, 11 elétrons (átomo neutro) e{" "}
            <M>{"23 - 11 = 12"}</M> nêutrons.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Íons</span>
        <h2>2. Cátions, Ânions e Contagem de Elétrons</h2>
        <p>
          Um átomo neutro tem nº de elétrons igual a <M>{"Z"}</M>. Ao ganhar ou perder elétrons, forma um{" "}
          <strong>íon</strong> — mas <em>Z nunca muda</em>, pois o núcleo permanece intacto.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>➕</span>
            <h3>Cátion</h3>
            <p><strong>Perde</strong> elétrons → carga positiva. Ex.: <M>{"\\text{Na}^{+}"}</M> tem 11 p e 10 e⁻.</p>
          </div>
          <div className="lesson-card">
            <span>➖</span>
            <h3>Ânion</h3>
            <p><strong>Ganha</strong> elétrons → carga negativa. Ex.: <M>{"\\text{Cl}^{-}"}</M> tem 17 p e 18 e⁻.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <h3>Regra de ouro</h3>
          <p>
            Nº de elétrons <M>{"= Z - \\text{carga}"}</M>. Para <M>{"\\text{Al}^{3+}"}</M> (Z = 13):{" "}
            <M>{"13 - (+3) = 10"}</M> elétrons. Para <M>{"\\text{O}^{2-}"}</M> (Z = 8):{" "}
            <M>{"8 - (-2) = 10"}</M> elétrons.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Semelhanças atômicas</span>
        <h2>3. Isótopos, Isóbaros e Isótonos</h2>
        <p>
          São relações de semelhança entre átomos com base em <M>{"Z"}</M>, <M>{"A"}</M> e <M>{"N"}</M>.
          A tabela resume tudo:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Semelhança</th><th>O que é igual</th><th>O que difere</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr><td>Isótopos</td><td>Z (mesmo elemento)</td><td>A e N</td><td><M>{"{}^{12}_{6}\\text{C}"}</M> e <M>{"{}^{14}_{6}\\text{C}"}</M></td></tr>
              <tr><td>Isóbaros</td><td>A</td><td>Z e N</td><td><M>{"{}^{40}_{19}\\text{K}"}</M> e <M>{"{}^{40}_{20}\\text{Ca}"}</M></td></tr>
              <tr><td>Isótonos</td><td>N</td><td>Z e A</td><td><M>{"{}^{37}_{17}\\text{Cl}"}</M> e <M>{"{}^{40}_{20}\\text{Ca}"}</M></td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Memorização</h3>
          <p>
            <strong>Isóto<u>P</u>os</strong> → mesmo nº de <u>p</u>rótons (Z). <strong>Isóbar<u>A</u>s</strong> →
            mesmo <u>A</u> (número de massa). <strong>Isóto<u>N</u>os</strong> → mesmo nº de <u>n</u>êutrons (N).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mesma eletrosfera</span>
        <h2>4. Espécies Isoeletrônicas</h2>
        <p>
          São átomos e/ou íons que possuem o <strong>mesmo número de elétrons</strong> (e, portanto, a mesma
          configuração eletrônica). São muito cobrados em vestibulares.
        </p>
        <div className="lesson-highlight">
          <h3>Série isoeletrônica do neônio (10 elétrons)</h3>
          <p>
            <M>{"\\text{N}^{3-},\\ \\text{O}^{2-},\\ \\text{F}^{-},\\ \\text{Ne},\\ \\text{Na}^{+},\\ \\text{Mg}^{2+},\\ \\text{Al}^{3+}"}</M>
          </p>
          <p>
            Todas têm 10 elétrons, mas <em>cargas nucleares diferentes</em> — o que faz seus raios variarem
            (assunto do próximo capítulo).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Massa atômica</span>
        <h2>5. Massa Atômica: Média Ponderada dos Isótopos</h2>
        <p>
          A massa atômica de um elemento na tabela periódica é a <strong>média ponderada</strong> das massas
          de seus isótopos naturais, considerando a abundância de cada um. Por isso quase nunca é um inteiro.
        </p>
        <div className="math-block">
          <h3>Fórmula da média ponderada</h3>
          <p><M>{"MA = \\dfrac{(m_1 \\cdot \\%_1) + (m_2 \\cdot \\%_2) + \\cdots}{100}"}</M></p>
          <p>
            Exemplo — o cloro tem dois isótopos: <M>{"{}^{35}\\text{Cl}"}</M> (75%) e{" "}
            <M>{"{}^{37}\\text{Cl}"}</M> (25%):
          </p>
          <p><M>{"MA = \\dfrac{(35 \\times 75) + (37 \\times 25)}{100} = \\dfrac{2625 + 925}{100} = 35{,}5\\ \\text{u}"}</M></p>
        </div>
        <div className="lesson-highlight">
          <p>
            A unidade de massa atômica (<strong>u</strong>) é definida como <M>{"1/12"}</M> da massa do
            isótopo <M>{"{}^{12}\\text{C}"}</M>. A <strong>massa molecular</strong> é a soma das massas
            atômicas dos átomos da fórmula — ex.: <M>{"\\text{H}_2\\text{O} = 2(1) + 16 = 18\\ \\text{u}"}</M>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>6. Isótopos na Prática</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💧</span>
            <h3>Hidrogênio</h3>
            <p>Prótio (¹H), Deutério (²H) e Trítio (³H). Água pesada usa deutério.</p>
          </div>
          <div className="lesson-card">
            <span>🦴</span>
            <h3>Carbono-14</h3>
            <p>Radioativo — usado na datação de fósseis e materiais arqueológicos.</p>
          </div>
          <div className="lesson-card">
            <span>☢️</span>
            <h3>Urânio</h3>
            <p><M>{"{}^{235}\\text{U}"}</M> é físsil — combustível nuclear e bombas.</p>
          </div>
          <div className="lesson-card">
            <span>🏥</span>
            <h3>Medicina</h3>
            <p>Iodo-131 (tireoide) e Tecnécio-99m (cintilografia) em diagnósticos.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>7. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔢</span>
            <h3>Z e A</h3>
            <p><M>{"A = Z + N"}</M>. Z define o elemento; A é prótons + nêutrons.</p>
          </div>
          <div className="math-card">
            <span>⚡</span>
            <h3>Íons</h3>
            <p>e⁻ <M>{"= Z - \\text{carga}"}</M>. Cátion perde, ânion ganha elétrons.</p>
          </div>
          <div className="math-card">
            <span>👯</span>
            <h3>IsótoPos</h3>
            <p>Mesmo Z (prótons), A e N diferentes.</p>
          </div>
          <div className="math-card">
            <span>⚖️</span>
            <h3>IsóbArAs</h3>
            <p>Mesmo A (massa), Z e N diferentes.</p>
          </div>
          <div className="math-card">
            <span>🧲</span>
            <h3>IsótoNos</h3>
            <p>Mesmo N (nêutrons), Z e A diferentes.</p>
          </div>
          <div className="math-card">
            <span>📊</span>
            <h3>Massa atômica</h3>
            <p>Média ponderada dos isótopos pela abundância.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama Atômico</span>
        <h2>Síntese Visual: Partículas Subatômicas e Número de Massa</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Partículas subatômicas: próton, nêutron e elétron">
          {/* tabela visual de partículas */}
          <rect x="40" y="30" width="185" height="150" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="132" y="55" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#92400e">Próton</text>
          <text x="132" y="78" textAnchor="middle" fontSize="13" fill="#92400e">carga: +1</text>
          <text x="132" y="100" textAnchor="middle" fontSize="13" fill="#92400e">massa: 1 u</text>
          <text x="132" y="122" textAnchor="middle" fontSize="13" fill="#92400e">no núcleo</text>
          <text x="132" y="155" textAnchor="middle" fontSize="12" fill="#92400e">Z = n° de prótons</text>
          <text x="132" y="170" textAnchor="middle" fontSize="12" fill="#92400e">= n° atômico</text>

          <rect x="257" y="30" width="185" height="150" rx="6" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
          <text x="349" y="55" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">Nêutron</text>
          <text x="349" y="78" textAnchor="middle" fontSize="13" fill="#1e293b">carga: 0</text>
          <text x="349" y="100" textAnchor="middle" fontSize="13" fill="#1e293b">massa: 1 u</text>
          <text x="349" y="122" textAnchor="middle" fontSize="13" fill="#1e293b">no núcleo</text>
          <text x="349" y="155" textAnchor="middle" fontSize="12" fill="#1e293b">N = A − Z</text>
          <text x="349" y="170" textAnchor="middle" fontSize="12" fill="#1e293b">N = n° de nêutrons</text>

          <rect x="474" y="30" width="185" height="150" rx="6" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
          <text x="566" y="55" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1d4ed8">Elétron</text>
          <text x="566" y="78" textAnchor="middle" fontSize="13" fill="#1d4ed8">carga: −1</text>
          <text x="566" y="100" textAnchor="middle" fontSize="13" fill="#1d4ed8">massa: ~0 u</text>
          <text x="566" y="122" textAnchor="middle" fontSize="13" fill="#1d4ed8">eletrosfera</text>
          <text x="566" y="155" textAnchor="middle" fontSize="12" fill="#1d4ed8">e⁻ = Z (átomo neutro)</text>
          <text x="566" y="170" textAnchor="middle" fontSize="12" fill="#1d4ed8">define propriedades</text>

          <text x="350" y="198" textAnchor="middle" fontSize="13" fill="#0f172a">A = Z + N | A = número de massa | Z = número atômico</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Isótopos, isótonos e isóbaros">
          <rect x="40" y="20" width="185" height="140" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="132" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">Isótopos</text>
          <text x="132" y="68" textAnchor="middle" fontSize="12" fill="#1d4ed8">Mesmo Z</text>
          <text x="132" y="88" textAnchor="middle" fontSize="12" fill="#1d4ed8">A diferentes</text>
          <text x="132" y="110" textAnchor="middle" fontSize="13" fill="#1d4ed8">¹H, ²H, ³H</text>
          <text x="132" y="135" textAnchor="middle" fontSize="11" fill="#1d4ed8">Mesma identidade química</text>
          <text x="132" y="150" textAnchor="middle" fontSize="11" fill="#1d4ed8">(mesmo n° e⁻)</text>

          <rect x="257" y="20" width="185" height="140" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="349" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">Isótonos</text>
          <text x="349" y="68" textAnchor="middle" fontSize="12" fill="#166534">Mesmo N</text>
          <text x="349" y="88" textAnchor="middle" fontSize="12" fill="#166534">Z e A diferentes</text>
          <text x="349" y="110" textAnchor="middle" fontSize="13" fill="#166534">¹⁴C₆ e ¹⁵N₇</text>
          <text x="349" y="135" textAnchor="middle" fontSize="11" fill="#166534">N = 8 em ambos</text>
          <text x="349" y="150" textAnchor="middle" fontSize="11" fill="#166534">Z e A distintos</text>

          <rect x="474" y="20" width="185" height="140" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="566" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#713f12">Isóbaros</text>
          <text x="566" y="68" textAnchor="middle" fontSize="12" fill="#713f12">Mesmo A</text>
          <text x="566" y="88" textAnchor="middle" fontSize="12" fill="#713f12">Z e N diferentes</text>
          <text x="566" y="110" textAnchor="middle" fontSize="13" fill="#713f12">⁴⁰Ar₁₈ e ⁴⁰Ca₂₀</text>
          <text x="566" y="135" textAnchor="middle" fontSize="11" fill="#713f12">A = 40 em ambos</text>
          <text x="566" y="150" textAnchor="middle" fontSize="11" fill="#713f12">Z distintos</text>

          <text x="350" y="182" textAnchor="middle" fontSize="13" fill="#0f172a">Mnemônico: isóTOPOS = mesmo Z (mesma posição na tabela)</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Espécie</th><th>A (massa)</th><th>Z (prótons)</th><th>N (nêutrons)</th><th>e⁻ (elétrons)</th></tr>
          </thead>
          <tbody>
            <tr><td>¹H (prótico)</td><td>1</td><td>1</td><td>0</td><td>1 (neutro)</td></tr>
            <tr><td>²H (deutério)</td><td>2</td><td>1</td><td>1</td><td>1 (neutro)</td></tr>
            <tr><td>¹²C</td><td>12</td><td>6</td><td>6</td><td>6 (neutro)</td></tr>
            <tr><td>²³Na⁺</td><td>23</td><td>11</td><td>12</td><td>10 (íon)</td></tr>
            <tr><td>³⁵Cl⁻</td><td>35</td><td>17</td><td>18</td><td>18 (íon)</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Composição de um átomo"
          statement={<p>O átomo <M>{"{}^{40}_{20}\\text{Ca}"}</M>, no estado neutro, possui quantos prótons, nêutrons e elétrons, respectivamente?</p>}
          options={[
            { letter: "a", text: "20, 20, 20", correct: true },
            { letter: "b", text: "20, 40, 20" },
            { letter: "c", text: "40, 20, 40" },
            { letter: "d", text: "20, 20, 40" },
          ]}
          resolution={<p>Z = 20 → 20 prótons. Átomo neutro → 20 elétrons. <M>{"N = A - Z = 40 - 20 = 20"}</M> nêutrons. Logo: 20, 20, 20.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Elétrons em um íon"
          statement={<p>Quantos elétrons possui o íon <M>{"\\text{S}^{2-}"}</M>, sabendo que o enxofre tem Z = 16?</p>}
          options={[
            { letter: "a", text: "14" },
            { letter: "b", text: "16" },
            { letter: "c", text: "18", correct: true },
            { letter: "d", text: "32" },
          ]}
          resolution={<p>Como é um ânion (ganhou 2 elétrons): nº de e⁻ <M>{"= Z - \\text{carga} = 16 - (-2) = 18"}</M>. O <M>{"\\text{S}^{2-}"}</M> é isoeletrônico do argônio.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Identificando a semelhança"
          statement={<p>Considere os átomos <M>{"{}^{24}_{12}\\text{Mg}"}</M> e <M>{"{}^{23}_{11}\\text{Na}"}</M>. Eles apresentam:</p>}
          options={[
            { letter: "a", text: "Mesmo número de nêutrons (isótonos)", correct: true },
            { letter: "b", text: "Mesmo número de prótons (isótopos)" },
            { letter: "c", text: "Mesmo número de massa (isóbaros)" },
            { letter: "d", text: "Mesmo número de elétrons" },
          ]}
          resolution={<p>Mg: <M>{"N = 24 - 12 = 12"}</M>. Na: <M>{"N = 23 - 11 = 12"}</M>. Mesmo N e Z/A diferentes → são isótonos.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Série isoeletrônica"
          statement={<p>Dentre as espécies a seguir, qual é isoeletrônica do <M>{"\\text{Ne}"}</M> (Z = 10)?</p>}
          options={[
            { letter: "a", text: "Cl⁻ (Z = 17)" },
            { letter: "b", text: "Mg²⁺ (Z = 12)", correct: true },
            { letter: "c", text: "K⁺ (Z = 19)" },
            { letter: "d", text: "S²⁻ (Z = 16)" },
          ]}
          resolution={<p><M>{"\\text{Mg}^{2+}"}</M>: <M>{"12 - 2 = 10"}</M> elétrons, igual ao Ne. As demais possuem 18 elétrons (isoeletrônicas do argônio).</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Cálculo de massa atômica"
          statement={<p>O elemento boro possui dois isótopos: <M>{"{}^{10}\\text{B}"}</M> (20%) e <M>{"{}^{11}\\text{B}"}</M> (80%). Sua massa atômica média é:</p>}
          options={[
            { letter: "a", text: "10,8 u", correct: true },
            { letter: "b", text: "10,2 u" },
            { letter: "c", text: "10,5 u" },
            { letter: "d", text: "11,0 u" },
          ]}
          resolution={<p><M>{"MA = \\dfrac{(10 \\times 20) + (11 \\times 80)}{100} = \\dfrac{200 + 880}{100} = \\dfrac{1080}{100} = 10{,}8\\ \\text{u}"}</M>. Como o isótopo mais pesado é o mais abundante, a média se aproxima de 11.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Datação por carbono-14"
          statement={<p>O carbono-14 (<M>{"{}^{14}_{6}\\text{C}"}</M>) é um isótopo radioativo usado para datar fósseis. Ele difere do carbono-12 (<M>{"{}^{12}_{6}\\text{C}"}</M>), o isótopo mais comum, por possuir:</p>}
          options={[
            { letter: "a", text: "Dois nêutrons a mais, mantendo o mesmo número de prótons e o mesmo comportamento químico.", correct: true },
            { letter: "b", text: "Dois prótons a mais, tornando-se outro elemento." },
            { letter: "c", text: "Dois elétrons a mais, formando um ânion." },
            { letter: "d", text: "Dois prótons a menos, tornando-se nitrogênio." },
          ]}
          resolution={<p>Ambos têm Z = 6 (são isótopos do carbono, mesmo comportamento químico). O <M>{"{}^{14}\\text{C}"}</M> tem <M>{"14 - 6 = 8"}</M> nêutrons, contra 6 do <M>{"{}^{12}\\text{C}"}</M> — dois nêutrons a mais. Esse excesso o torna instável (radioativo), permitindo a datação.</p>}
        />
      </section>
    </article>
  );
}
