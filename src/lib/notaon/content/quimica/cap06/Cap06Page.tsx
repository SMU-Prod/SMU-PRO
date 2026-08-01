"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap06Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 6</span>
          <h1>Distribuição Eletrônica e Números Quânticos</h1>
          <p>
            Aprenda a distribuir os elétrons usando o diagrama de Linus Pauling, identifique a camada de
            valência e o subnível mais energético, faça a distribuição em íons e descreva qualquer elétron
            pelos seus quatro números quânticos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Camadas e subníveis</span>
        <h2>1. Camadas, Subníveis e Capacidades</h2>
        <p>
          A eletrosfera divide-se em <strong>camadas</strong> (níveis de energia, <M>{"n = 1\\text{ a }7"}</M>,
          letras K–Q) e cada camada em <strong>subníveis</strong> (s, p, d, f), cada um com uma capacidade
          máxima de elétrons:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Subnível</th><th>s</th><th>p</th><th>d</th><th>f</th></tr>
            </thead>
            <tbody>
              <tr><td>Nº de orbitais</td><td>1</td><td>3</td><td>5</td><td>7</td></tr>
              <tr><td>Máx. de elétrons</td><td>2</td><td>6</td><td>10</td><td>14</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            Cada orbital comporta no máximo <strong>2 elétrons</strong> (Princípio da Exclusão de Pauli),
            com spins opostos. Logo: s = 2, p = 6, d = 10, f = 14.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama de Pauling</span>
        <h2>2. Distribuição Eletrônica</h2>
        <p>
          Os elétrons preenchem os subníveis em <strong>ordem crescente de energia</strong>, dada pelo
          diagrama de Linus Pauling (seguindo as diagonais):
        </p>
        <div className="math-block">
          <h3>Ordem energética</h3>
          <p>
            <M>{"1s\\ 2s\\ 2p\\ 3s\\ 3p\\ 4s\\ 3d\\ 4p\\ 5s\\ 4d\\ 5p\\ 6s\\ 4f\\ 5d\\ 6p\\ 7s\\ 5f\\ 6d\\ 7p"}</M>
          </p>
        </div>
        <p>
          Exemplo — o <strong>ferro</strong> (<M>{"\\text{Fe},\\ Z = 26"}</M>) tem 26 elétrons:
        </p>
        <div className="lesson-highlight">
          <p><M>{"1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^6\\ 4s^2\\ 3d^6"}</M></p>
          <p>Somando os expoentes: <M>{"2+2+6+2+6+2+6 = 26"}</M> ✓</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceitos-chave</span>
        <h2>3. Camada de Valência × Subnível mais Energético</h2>
        <p>
          Dois conceitos diferentes que costumam confundir:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🪐</span>
            <h3>Camada de valência</h3>
            <p>É a camada de <strong>maior n</strong> (a mais externa). No Fe é a 4ª camada (<M>{"4s^2"}</M>).</p>
          </div>
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Subnível mais energético</h3>
            <p>É o <strong>último preenchido</strong> pelo diagrama. No Fe é o <M>{"3d^6"}</M>.</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <p>
            A camada de valência determina as ligações químicas; o subnível mais energético é usado para
            localizar o elemento na tabela periódica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Íons</span>
        <h2>4. Distribuição Eletrônica em Íons</h2>
        <div className="lesson-highlight">
          <h3>Regra crucial</h3>
          <p>
            Ao formar um <strong>cátion</strong>, removemos elétrons da <strong>camada mais externa</strong>{" "}
            (maior <M>{"n"}</M>) — <em>não</em> do subnível mais energético. Esse é o erro mais comum dos alunos.
          </p>
        </div>
        <p>
          <strong>Fe (Z = 26):</strong> <M>{"1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^6\\ 4s^2\\ 3d^6"}</M>.
          Para formar <M>{"\\text{Fe}^{2+}"}</M>, retiramos os 2 elétrons do <M>{"4s"}</M> (maior n):
        </p>
        <p><M>{"\\text{Fe}^{2+}:\\ 1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^6\\ 3d^6"}</M></p>
        <p>
          Já para um <strong>ânion</strong> como <M>{"\\text{O}^{2-}"}</M> (O tem Z = 8), adicionamos 2
          elétrons normalmente pelo diagrama: <M>{"1s^2\\ 2s^2\\ 2p^6"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Números quânticos</span>
        <h2>5. Os 4 Números Quânticos</h2>
        <p>
          Cada elétron é descrito por um "endereço" único de quatro números quânticos:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Número quântico</th><th>Símbolo</th><th>Informa</th><th>Valores</th></tr>
            </thead>
            <tbody>
              <tr><td>Principal</td><td><M>{"n"}</M></td><td>Camada / energia</td><td>1, 2, 3, …</td></tr>
              <tr><td>Secundário (azimutal)</td><td><M>{"\\ell"}</M></td><td>Subnível / forma</td><td>s=0, p=1, d=2, f=3</td></tr>
              <tr><td>Magnético</td><td><M>{"m_\\ell"}</M></td><td>Orbital</td><td><M>{"-\\ell \\ldots 0 \\ldots +\\ell"}</M></td></tr>
              <tr><td>Spin</td><td><M>{"m_s"}</M></td><td>Rotação do elétron</td><td><M>{"+\\tfrac{1}{2}\\text{ ou }-\\tfrac{1}{2}"}</M></td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Regra de Hund (máxima multiplicidade)</h3>
          <p>
            Ao preencher um subnível, primeiro coloca-se <strong>um elétron em cada orbital</strong> (todos
            com o mesmo spin) e só depois inicia-se o emparelhamento. Por convenção, o primeiro elétron de
            cada orbital recebe spin <M>{"-\\tfrac{1}{2}"}</M> (representado por ↑).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicação</span>
        <h2>6. Identificando o Último Elétron</h2>
        <p>
          <strong>Cloro</strong> (<M>{"\\text{Cl},\\ Z = 17"}</M>):{" "}
          <M>{"1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^5"}</M>. O último elétron está no subnível <M>{"3p"}</M>:
        </p>
        <div className="lesson-highlight">
          <ul>
            <li><M>{"n = 3"}</M> (terceira camada);</li>
            <li><M>{"\\ell = 1"}</M> (subnível p);</li>
            <li>O <M>{"3p^5"}</M> distribui ↑↓ ↑↓ ↑ → o 5º elétron está sozinho no terceiro orbital, com <M>{"m_\\ell = +1"}</M> e <M>{"m_s = -\\tfrac{1}{2}"}</M>.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estados de energia</span>
        <h2>7. Estado Fundamental × Estado Excitado</h2>
        <p>
          No <strong>estado fundamental</strong> os elétrons ocupam os subníveis de menor energia possível
          (seguindo o diagrama). No <strong>estado excitado</strong>, um elétron absorveu energia e "saltou"
          para um nível mais alto, deixando a configuração fora da ordem normal.
        </p>
        <div className="lesson-highlight">
          <p>
            Carbono (Z = 6) fundamental: <M>{"1s^2\\ 2s^2\\ 2p^2"}</M>. Excitado:{" "}
            <M>{"1s^2\\ 2s^1\\ 2p^3"}</M> — um elétron do 2s passou ao 2p (isso explica as 4 ligações do
            carbono na química orgânica).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📦</span>
            <h3>Capacidades</h3>
            <p>s = 2, p = 6, d = 10, f = 14 elétrons.</p>
          </div>
          <div className="math-card">
            <span>🪜</span>
            <h3>Pauling</h3>
            <p>Preenche por energia crescente, seguindo as diagonais.</p>
          </div>
          <div className="math-card">
            <span>🪐</span>
            <h3>Valência</h3>
            <p>Camada de maior n. Define ligações químicas.</p>
          </div>
          <div className="math-card">
            <span>➕</span>
            <h3>Cátions</h3>
            <p>Removem elétrons da camada mais externa (maior n) primeiro.</p>
          </div>
          <div className="math-card">
            <span>🏠</span>
            <h3>Nº quânticos</h3>
            <p><M>{"n,\\ \\ell,\\ m_\\ell,\\ m_s"}</M> — endereço único de cada elétron.</p>
          </div>
          <div className="math-card">
            <span>👆</span>
            <h3>Hund</h3>
            <p>Um elétron por orbital antes de emparelhar.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama de Distribuição</span>
        <h2>Síntese Visual: Subníveis e Diagrama de Linus Pauling</h2>

        <svg viewBox="0 0 700 220" className="lesson-svg" aria-label="Diagrama de Linus Pauling: ordem de preenchimento dos subníveis">
          {/* subníveis em cascata */}
          {[["1s",350,30],["2s",280,65],["2p",420,65],["3s",210,100],["3p",350,100],["4s",140,135],["3d",280,135],["4p",420,135],["5s",70,170],["4d",210,170],["5p",350,170],["6s",140,205],["4f",280,205]].map(([label,x,y]) => (
            <g key={label as string}>
              <ellipse cx={x as number} cy={y as number} rx="38" ry="16" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
              <text x={x as number} y={(y as number)+5} textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">{label as string}</text>
            </g>
          ))}
          {/* seta indicando ordem */}
          <text x="590" y="50" textAnchor="start" fontSize="13" fill="#dc2626">Ordem de</text>
          <text x="590" y="70" textAnchor="start" fontSize="13" fill="#dc2626">preenchimento</text>
          <text x="590" y="88" textAnchor="start" fontSize="13" fill="#dc2626">↓</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Regras de distribuição: Aufbau, Hund e Pauli">
          <rect x="40" y="20" width="185" height="140" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="132" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">Aufbau</text>
          <text x="132" y="68" textAnchor="middle" fontSize="12" fill="#1d4ed8">Preenchimento</text>
          <text x="132" y="86" textAnchor="middle" fontSize="12" fill="#1d4ed8">do menor para</text>
          <text x="132" y="104" textAnchor="middle" fontSize="12" fill="#1d4ed8">maior energia</text>
          <text x="132" y="130" textAnchor="middle" fontSize="11" fill="#1e40af">1s→2s→2p→3s…</text>
          <text x="132" y="148" textAnchor="middle" fontSize="11" fill="#1e40af">diagrama de Pauling</text>

          <rect x="257" y="20" width="185" height="140" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
          <text x="349" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">Hund</text>
          <text x="349" y="68" textAnchor="middle" fontSize="12" fill="#166534">Máxima</text>
          <text x="349" y="86" textAnchor="middle" fontSize="12" fill="#166534">multiplicidade:</text>
          <text x="349" y="104" textAnchor="middle" fontSize="12" fill="#166534">1 e⁻ em cada</text>
          <text x="349" y="122" textAnchor="middle" fontSize="12" fill="#166534">orbital antes</text>
          <text x="349" y="140" textAnchor="middle" fontSize="12" fill="#166534">de emparelhar</text>

          <rect x="474" y="20" width="185" height="140" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="566" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#9d174d">Pauli</text>
          <text x="566" y="68" textAnchor="middle" fontSize="12" fill="#9d174d">Max 2 e⁻</text>
          <text x="566" y="86" textAnchor="middle" fontSize="12" fill="#9d174d">por orbital</text>
          <text x="566" y="104" textAnchor="middle" fontSize="12" fill="#9d174d">com spins</text>
          <text x="566" y="122" textAnchor="middle" fontSize="12" fill="#9d174d">opostos (↑↓)</text>
          <text x="566" y="148" textAnchor="middle" fontSize="11" fill="#be185d">spin ½ e −½</text>

          <text x="350" y="180" textAnchor="middle" fontSize="13" fill="#0f172a">Capacidade: s=2, p=6, d=10, f=14 elétrons</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Capacidade dos subníveis"
          statement={<p>O número máximo de elétrons que o subnível d comporta é:</p>}
          options={[
            { letter: "a", text: "2" },
            { letter: "b", text: "6" },
            { letter: "c", text: "10", correct: true },
            { letter: "d", text: "14" },
          ]}
          resolution={<p>O subnível d possui 5 orbitais e cada orbital comporta 2 elétrons: <M>{"5 \\times 2 = 10"}</M>. Ordem geral: s = 2, p = 6, d = 10, f = 14.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Distribuição do enxofre"
          statement={<p>A distribuição eletrônica do enxofre (Z = 16) no estado fundamental termina em:</p>}
          options={[
            { letter: "a", text: "3p⁴", correct: true },
            { letter: "b", text: "3p⁶" },
            { letter: "c", text: "4s²" },
            { letter: "d", text: "3d⁴" },
          ]}
          resolution={<p><M>{"1s^2\\ 2s^2\\ 2p^6\\ 3s^2\\ 3p^4"}</M>. Somando: <M>{"2+2+6+2+4 = 16"}</M>. Termina em <M>{"3p^4"}</M>.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Camada de valência"
          statement={<p>Para o ferro (Z = 26), cuja distribuição é <M>{"1s^2\\,2s^2\\,2p^6\\,3s^2\\,3p^6\\,4s^2\\,3d^6"}</M>, a camada de valência contém quantos elétrons?</p>}
          options={[
            { letter: "a", text: "2 elétrons (no 4s)", correct: true },
            { letter: "b", text: "6 elétrons (no 3d)" },
            { letter: "c", text: "8 elétrons (4s + 3d)" },
            { letter: "d", text: "26 elétrons" },
          ]}
          resolution={<p>A camada de valência é a de maior número quântico principal, ou seja, <M>{"n = 4"}</M>, que contém apenas o <M>{"4s^2"}</M> → 2 elétrons. O <M>{"3d^6"}</M> é o subnível mais energético, mas pertence à 3ª camada.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Distribuição de um cátion"
          statement={<p>A distribuição eletrônica correta do íon <M>{"\\text{Fe}^{3+}"}</M> (Fe tem Z = 26) é:</p>}
          options={[
            { letter: "a", text: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵", correct: true },
            { letter: "b", text: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d³" },
            { letter: "c", text: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹" },
            { letter: "d", text: "1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶" },
          ]}
          resolution={<p>Partindo do Fe neutro (…<M>{"4s^2\\,3d^6"}</M>), removemos 3 elétrons sempre da camada mais externa: primeiro os 2 do <M>{"4s"}</M>, depois 1 do <M>{"3d"}</M>. Resultado: …<M>{"3p^6\\,3d^5"}</M>.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Conjunto de números quânticos"
          statement={<p>Considere o elétron de maior energia do átomo de fósforo (Z = 15), cuja distribuição termina em <M>{"3p^3"}</M>. Pela regra de Hund e a convenção usual (↑ = <M>{"-\\tfrac{1}{2}"}</M>), os números quânticos desse elétron são:</p>}
          options={[
            { letter: "a", text: "n = 3, ℓ = 1, mₗ = +1, mₛ = −½", correct: true },
            { letter: "b", text: "n = 3, ℓ = 0, mₗ = 0, mₛ = +½" },
            { letter: "c", text: "n = 3, ℓ = 1, mₗ = −1, mₛ = +½" },
            { letter: "d", text: "n = 2, ℓ = 1, mₗ = +1, mₛ = −½" },
          ]}
          resolution={<p>O <M>{"3p^3"}</M> tem três elétrons, um em cada orbital (Hund), todos com spin <M>{"-\\tfrac{1}{2}"}</M>. Os orbitais p têm <M>{"m_\\ell = -1, 0, +1"}</M>. O último (3º) ocupa <M>{"m_\\ell = +1"}</M>. Logo: <M>{"n=3,\\ \\ell=1,\\ m_\\ell=+1,\\ m_s=-\\tfrac{1}{2}"}</M>.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Cor e elétrons de transição"
          statement={<p>Muitos compostos de metais de transição, como os de ferro e cobre, são coloridos. Isso está relacionado a transições eletrônicas em orbitais parcialmente preenchidos. No ferro, o subnível responsável por esse comportamento, por estar incompleto, é:</p>}
          options={[
            { letter: "a", text: "O 3d, que no Fe possui 6 elétrons e não está completo (cabem 10).", correct: true },
            { letter: "b", text: "O 4s, que está sempre vazio nos metais." },
            { letter: "c", text: "O 1s, por ser o mais interno." },
            { letter: "d", text: "O 2p, por ser o de maior energia." },
          ]}
          resolution={<p>Os metais de transição têm o subnível d incompleto. No Fe, o <M>{"3d^6"}</M> tem 6 dos 10 elétrons possíveis. Transições de elétrons entre orbitais d (cujas energias se desdobram na presença de ligantes) absorvem luz visível, originando as cores características desses compostos.</p>}
        />
      </section>
    </article>
  );
}
