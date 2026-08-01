"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap10Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 10</span>
          <h1>Ligação Covalente: Lewis, Estruturais e Moleculares</h1>
          <p>
            Aprenda como não-metais compartilham pares de elétrons para formar moléculas estáveis.
            Domine as estruturas de Lewis, as ligações simples, duplas e triplas, a ligação dativa
            e a polaridade das ligações — temas recorrentes no ENEM e vestibulares.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito Fundamental</span>
        <h2>1. O Que É a Ligação Covalente</h2>
        <p>
          A ligação covalente ocorre entre átomos de <strong>não-metais</strong> (ou entre não-metal e hidrogênio)
          que <em>compartilham pares de elétrons</em> para atingir a configuração eletrônica do gás nobre mais próximo
          (regra do octeto — ou dueto para o H e He).
        </p>
        <p>
          Cada átomo contribui com um elétron para o par compartilhado (ligação normal) ou um único átomo
          fornece os dois elétrons (ligação dativa). O resultado é uma molécula elétrica e quimicamente neutra,
          estabilizada pela atração entre os núcleos e a nuvem eletrônica compartilhada.
        </p>
        <div className="lesson-highlight">
          <h3>Regra do Octeto</h3>
          <p>
            Átomos tendem a compartilhar, ganhar ou perder elétrons até possuir <strong>8 elétrons</strong> na
            camada de valência (2 para H, Li e Be). Exceções notáveis: BF₃ (6 elétrons no B),
            PCl₅ e SF₆ (expansão do octeto).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Representação</span>
        <h2>2. Estrutura de Lewis (Fórmula Eletrônica)</h2>
        <p>
          Na estrutura de Lewis, os elétrons de valência são representados como <strong>pontos</strong> ao redor
          do símbolo do elemento. Pares ligantes (entre átomos) formam a ligação; pares não-ligantes
          (pares livres) ficam sobre o átomo que os possui.
        </p>
        <p>
          Passos para desenhar a estrutura de Lewis: (1) some todos os elétrons de valência; (2) coloque o átomo
          central; (3) forme ligações simples com os átomos periféricos; (4) complete o octeto dos átomos
          periféricos; (5) se sobrar elétrons no central, coloque como pares livres; (6) se o central não tiver
          octeto, converta pares livres periféricos em ligações duplas ou triplas.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 260" width="480" height="260" aria-label="Estruturas de Lewis de H2, Cl2, H2O, NH3 e CH4">
            {/* H2 */}
            <text x="30" y="20" fontSize="12" fill="#555" fontWeight="bold">H₂</text>
            <circle cx="60" cy="50" r="14" fill="#fff" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="60" y="55" textAnchor="middle" fontSize="13" fill="#1565C0">H</text>
            <circle cx="100" cy="50" r="14" fill="#fff" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="100" y="55" textAnchor="middle" fontSize="13" fill="#1565C0">H</text>
            <text x="80" y="54" textAnchor="middle" fontSize="11" fill="#333">••</text>

            {/* Cl2 */}
            <text x="160" y="20" fontSize="12" fill="#555" fontWeight="bold">Cl₂</text>
            <circle cx="190" cy="50" r="16" fill="#fff" stroke="#2E7D32" strokeWidth="1.5"/>
            <text x="190" y="55" textAnchor="middle" fontSize="12" fill="#2E7D32">Cl</text>
            <circle cx="230" cy="50" r="16" fill="#fff" stroke="#2E7D32" strokeWidth="1.5"/>
            <text x="230" y="55" textAnchor="middle" fontSize="12" fill="#2E7D32">Cl</text>
            <text x="210" y="54" textAnchor="middle" fontSize="11" fill="#333">••</text>
            <text x="175" y="48" textAnchor="middle" fontSize="10" fill="#999">••</text>
            <text x="175" y="62" textAnchor="middle" fontSize="10" fill="#999">••</text>
            <text x="245" y="48" textAnchor="middle" fontSize="10" fill="#999">••</text>
            <text x="245" y="62" textAnchor="middle" fontSize="10" fill="#999">••</text>

            {/* H2O */}
            <text x="300" y="20" fontSize="12" fill="#555" fontWeight="bold">H₂O</text>
            <circle cx="360" cy="55" r="14" fill="#fff" stroke="#C62828" strokeWidth="1.5"/>
            <text x="360" y="60" textAnchor="middle" fontSize="12" fill="#C62828">O</text>
            <circle cx="330" cy="75" r="12" fill="#fff" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="330" y="79" textAnchor="middle" fontSize="12" fill="#1565C0">H</text>
            <circle cx="390" cy="75" r="12" fill="#fff" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="390" y="79" textAnchor="middle" fontSize="12" fill="#1565C0">H</text>
            <line x1="347" y1="63" x2="337" y2="69" stroke="#333" strokeWidth="1.5"/>
            <line x1="373" y1="63" x2="383" y2="69" stroke="#333" strokeWidth="1.5"/>
            <text x="360" y="42" textAnchor="middle" fontSize="10" fill="#999">•• ••</text>

            {/* NH3 */}
            <text x="30" y="120" fontSize="12" fill="#555" fontWeight="bold">NH₃</text>
            <circle cx="80" cy="160" r="14" fill="#fff" stroke="#6A1B9A" strokeWidth="1.5"/>
            <text x="80" y="165" textAnchor="middle" fontSize="12" fill="#6A1B9A">N</text>
            <circle cx="50" cy="185" r="12" fill="#fff" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="50" y="189" textAnchor="middle" fontSize="12" fill="#1565C0">H</text>
            <circle cx="80" cy="195" r="12" fill="#fff" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="80" y="199" textAnchor="middle" fontSize="12" fill="#1565C0">H</text>
            <circle cx="110" cy="185" r="12" fill="#fff" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="110" y="189" textAnchor="middle" fontSize="12" fill="#1565C0">H</text>
            <line x1="68" y1="168" x2="57" y2="178" stroke="#333" strokeWidth="1.5"/>
            <line x1="80" y1="174" x2="80" y2="183" stroke="#333" strokeWidth="1.5"/>
            <line x1="92" y1="168" x2="103" y2="178" stroke="#333" strokeWidth="1.5"/>
            <text x="80" y="150" textAnchor="middle" fontSize="10" fill="#999">••</text>

            {/* CH4 */}
            <text x="200" y="120" fontSize="12" fill="#555" fontWeight="bold">CH₄</text>
            <circle cx="270" cy="165" r="14" fill="#fff" stroke="#BF360C" strokeWidth="1.5"/>
            <text x="270" y="170" textAnchor="middle" fontSize="12" fill="#BF360C">C</text>
            <circle cx="240" cy="150" r="12" fill="#fff" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="240" y="154" textAnchor="middle" fontSize="12" fill="#1565C0">H</text>
            <circle cx="300" cy="150" r="12" fill="#fff" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="300" y="154" textAnchor="middle" fontSize="12" fill="#1565C0">H</text>
            <circle cx="250" cy="185" r="12" fill="#fff" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="250" y="189" textAnchor="middle" fontSize="12" fill="#1565C0">H</text>
            <circle cx="290" cy="185" r="12" fill="#fff" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="290" y="189" textAnchor="middle" fontSize="12" fill="#1565C0">H</text>
            <line x1="257" y1="159" x2="248" y2="155" stroke="#333" strokeWidth="1.5"/>
            <line x1="283" y1="159" x2="292" y2="155" stroke="#333" strokeWidth="1.5"/>
            <line x1="260" y1="172" x2="253" y2="180" stroke="#333" strokeWidth="1.5"/>
            <line x1="280" y1="172" x2="287" y2="180" stroke="#333" strokeWidth="1.5"/>
          </svg>
          <figcaption>Estruturas de Lewis de H₂, Cl₂, H₂O, NH₃ e CH₄ com pares ligantes e não-ligantes.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos de Ligação</span>
        <h2>3. Ligação Simples, Dupla e Tripla</h2>
        <p>
          A quantidade de pares de elétrons compartilhados entre dois átomos determina o tipo de ligação:
        </p>
        <ul>
          <li><strong>Ligação simples (sigma σ):</strong> 1 par compartilhado — H–H, C–C, N–H</li>
          <li><strong>Ligação dupla (σ + π):</strong> 2 pares compartilhados — O=O, C=O, C=C</li>
          <li><strong>Ligação tripla (σ + 2π):</strong> 3 pares compartilhados — N≡N, C≡C, C≡N</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Energia e Comprimento de Ligação</h3>
          <p>
            À medida que aumenta o número de pares compartilhados: a <strong>energia de ligação aumenta</strong>
            (ligação mais forte) e o <strong>comprimento de ligação diminui</strong> (átomos mais próximos).
            Exemplo: N–N (163 kJ/mol, 145 pm), N=N (418 kJ/mol, 120 pm), N≡N (945 kJ/mol, 110 pm).
          </p>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Pares</th><th>Energia (kJ/mol)</th><th>Comprimento (pm)</th><th>Exemplos</th></tr>
            </thead>
            <tbody>
              <tr><td>Simples</td><td>1</td><td>~350 (C–C)</td><td>~154</td><td>H₂, Cl₂, CH₄</td></tr>
              <tr><td>Dupla</td><td>2</td><td>~614 (C=C)</td><td>~134</td><td>O₂, CO₂, C₂H₄</td></tr>
              <tr><td>Tripla</td><td>3</td><td>~839 (C≡C)</td><td>~120</td><td>N₂, CO, C₂H₂</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Molécula Angular</span>
        <h2>4. Molécula de H₂O: Ligações e Pares Livres</h2>
        <p>
          O oxigênio tem 6 elétrons de valência. Na molécula <M>{"H_2O"}</M>, forma <strong>2 ligações simples</strong>
          com os hidrogênios e mantém <strong>2 pares livres</strong> (não-ligantes). A geometria resultante é
          <strong>angular</strong>, com ângulo H–O–H de <strong>104,5°</strong> (menor que 109,5° do tetraedro
          perfeito por causa da maior repulsão dos pares livres).
        </p>
        <div className="lesson-highlight">
          <h3>Estrutura Eletrônica da Água</h3>
          <p>
            Elétrons de valência do O: 6. Usados em ligações: 2 (um por ligação O–H). Pares livres: 2.
            Total: <M>{"2 + 2 \\times 2 = 6"}</M> ✓ — octeto completo no O, dueto em cada H.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ligação Dupla</span>
        <h2>5. Molécula de CO₂: Duas Ligações Duplas</h2>
        <p>
          No dióxido de carbono <M>{"CO_2"}</M>, o carbono central forma <strong>duas ligações duplas</strong> com os
          átomos de oxigênio: <M>{"O{=}C{=}O"}</M>. Cada ligação dupla consiste em um par sigma (σ) e um par pi (π).
          A geometria é <strong>linear</strong>, com ângulo O–C–O de <strong>180°</strong>.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 400 120" width="400" height="120" aria-label="Estrutura de Lewis do CO2">
            {/* O esquerdo */}
            <circle cx="80" cy="60" r="20" fill="#FFEBEE" stroke="#C62828" strokeWidth="2"/>
            <text x="80" y="65" textAnchor="middle" fontSize="16" fill="#C62828" fontWeight="bold">O</text>
            <text x="60" y="50" textAnchor="middle" fontSize="11" fill="#999">••</text>
            <text x="60" y="72" textAnchor="middle" fontSize="11" fill="#999">••</text>

            {/* Ligação dupla esq */}
            <line x1="100" y1="54" x2="155" y2="54" stroke="#333" strokeWidth="2"/>
            <line x1="100" y1="66" x2="155" y2="66" stroke="#333" strokeWidth="2"/>

            {/* C central */}
            <circle cx="180" cy="60" r="20" fill="#FFF8E1" stroke="#BF360C" strokeWidth="2"/>
            <text x="180" y="65" textAnchor="middle" fontSize="16" fill="#BF360C" fontWeight="bold">C</text>

            {/* Ligação dupla dir */}
            <line x1="205" y1="54" x2="260" y2="54" stroke="#333" strokeWidth="2"/>
            <line x1="205" y1="66" x2="260" y2="66" stroke="#333" strokeWidth="2"/>

            {/* O direito */}
            <circle cx="280" cy="60" r="20" fill="#FFEBEE" stroke="#C62828" strokeWidth="2"/>
            <text x="280" y="65" textAnchor="middle" fontSize="16" fill="#C62828" fontWeight="bold">O</text>
            <text x="300" y="50" textAnchor="middle" fontSize="11" fill="#999">••</text>
            <text x="300" y="72" textAnchor="middle" fontSize="11" fill="#999">••</text>

            <text x="200" y="105" textAnchor="middle" fontSize="12" fill="#555">Geometria: Linear — ângulo 180°</text>
          </svg>
          <figcaption>Estrutura de Lewis do CO₂ com duas ligações duplas e pares livres nos oxigênios.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ligação Tripla</span>
        <h2>6. Molécula de N₂: Ligação Tripla</h2>
        <p>
          O nitrogênio tem 5 elétrons de valência. Em <M>{"N_2"}</M>, cada átomo contribui com 3 elétrons para
          a ligação, formando uma <strong>ligação tripla</strong> <M>{"N{\equiv}N"}</M> e deixando 1 par livre
          em cada N. A ligação tripla N≡N é extremamente forte (945 kJ/mol), o que torna o N₂ atmosférico
          muito inerte — por isso é usado como gás de proteção na indústria.
        </p>
        <div className="lesson-highlight">
          <h3>Comparação N–N, N=N, N≡N</h3>
          <p>
            <M>{"E_{N-N} = 163"}</M> kJ/mol {`>`} <M>{"E_{N=N} = 418"}</M> kJ/mol {`>`} <M>{"E_{N{\equiv}N} = 945"}</M> kJ/mol.
            A ligação tripla é quase 6 vezes mais forte que a simples, explicando a estabilidade do N₂.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ligação Dativa</span>
        <h2>7. Ligação Covalente Dativa (Coordenada)</h2>
        <p>
          Na ligação dativa, <strong>um único átomo fornece os dois elétrons</strong> do par compartilhado.
          O átomo doador (base de Lewis) é rico em elétrons; o receptor (ácido de Lewis) tem orbital vazio.
          A ligação formada é idêntica a uma ligação covalente normal — a diferença é apenas a origem dos elétrons.
        </p>
        <ul>
          <li>
            <strong>Íon hidrônio H₃O⁺:</strong> o O da água doa um par livre para o H⁺ (próton sem elétron).
          </li>
          <li>
            <strong>Complexo BF₃·NH₃:</strong> o N do NH₃ doa par livre para o B deficiente em elétrons do BF₃.
          </li>
          <li>
            <strong>Íon amônio NH₄⁺:</strong> o N do NH₃ doa par livre para H⁺.
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Representação da Dativa</h3>
          <p>
            A ligação dativa é às vezes indicada por uma seta: <strong>N → B</strong>, mostrando que o N é
            o doador do par eletrônico. Após formada, ela é indistinguível das outras ligações covalentes.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Polaridade</span>
        <h2>8. Ligação Polar vs Apolar</h2>
        <p>
          A polaridade de uma ligação depende da <strong>diferença de eletronegatividade (ΔEN)</strong> entre os
          átomos ligados. Quanto maior ΔEN, mais o par de elétrons é atraído para o átomo mais eletronegativo,
          criando um dipolo elétrico com carga parcial negativa (<M>{"\\delta^-"}</M>) e positiva (<M>{"\\delta^+"}</M>).
        </p>
        <div className="lesson-highlight">
          <h3>Critério de Classificação</h3>
          <p>
            <M>{"\\Delta EN < 0{,}4"}</M>: ligação <strong>apolar</strong> (H–H, C–H, N–N)<br/>
            <M>{"0{,}4 \\leq \\Delta EN \\leq 1{,}7"}</M>: ligação <strong>polar</strong> (H–Cl, O–H, N–H)<br/>
            <M>{"\\Delta EN > 1{,}7"}</M>: ligação <strong>iônica</strong> (Na–Cl, K–F)
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Eletronegatividade</span>
        <h2>9. Polaridade e Escala de Eletronegatividade</h2>
        <p>
          A eletronegatividade (escala de Pauling) aumenta da esquerda para a direita no período e de baixo para cima
          no grupo da Tabela Periódica. Os elementos mais eletronegativos são F (4,0), O (3,5), N (3,0), Cl (3,2).
        </p>
        <p>
          Exemplo: ligação O–H → ΔEN = 3,5 – 2,1 = 1,4 → polar. Ligação H–H → ΔEN = 0 → apolar.
          Ligação Na–Cl → ΔEN = 3,2 – 0,9 = 2,3 → iônica.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Ligação</th><th>EN₁</th><th>EN₂</th><th>ΔEN</th><th>Tipo</th></tr>
            </thead>
            <tbody>
              <tr><td>H–H</td><td>2,1</td><td>2,1</td><td>0,0</td><td>Apolar</td></tr>
              <tr><td>C–H</td><td>2,5</td><td>2,1</td><td>0,4</td><td>Apolar/levemente polar</td></tr>
              <tr><td>O–H</td><td>3,5</td><td>2,1</td><td>1,4</td><td>Polar</td></tr>
              <tr><td>H–Cl</td><td>3,2</td><td>2,1</td><td>1,1</td><td>Polar</td></tr>
              <tr><td>H–F</td><td>4,0</td><td>2,1</td><td>1,9</td><td>Iônica (limite)</td></tr>
              <tr><td>Na–Cl</td><td>0,9</td><td>3,2</td><td>2,3</td><td>Iônica</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ressonância</span>
        <h2>10. Estruturas de Ressonância</h2>
        <p>
          Algumas moléculas não podem ser representadas por uma única estrutura de Lewis satisfatória. Nesses casos,
          desenhamos várias estruturas (chamadas <strong>estruturas de ressonância</strong> ou canônicas) e a
          molécula real é o <strong>híbrido de ressonância</strong> — uma média ponderada de todas as estruturas.
        </p>
        <ul>
          <li>
            <strong>Ozônio O₃:</strong> pode ter a dupla no O–O da esquerda ou da direita. Na realidade,
            ambas as ligações O–O têm comprimento intermediário (~128 pm, entre simples 148 pm e dupla 121 pm).
          </li>
          <li>
            <strong>Benzeno C₆H₆:</strong> 6 estruturas de ressonância (3 com duplas alternadas).
            As ligações C–C são todas equivalentes (~140 pm).
          </li>
        </ul>
        <div className="lesson-highlight">
          <h3>Energia de Ressonância</h3>
          <p>
            O híbrido de ressonância é <strong>mais estável</strong> que qualquer uma das estruturas
            canônicas isoladas. Essa estabilização extra é a <em>energia de ressonância</em>
            (para o benzeno: ~150 kJ/mol).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo das Ligações Covalentes</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔗</span>
            <h3>Ligação Simples</h3>
            <p>1 par σ — <M>{"H_2, Cl_2, CH_4"}</M></p>
          </div>
          <div className="math-card">
            <span>⚛️</span>
            <h3>Ligação Dupla</h3>
            <p>σ + π — <M>{"O_2, CO_2, C_2H_4"}</M></p>
          </div>
          <div className="math-card">
            <span>💪</span>
            <h3>Ligação Tripla</h3>
            <p>σ + 2π — <M>{"N_2, C_2H_2"}</M></p>
          </div>
          <div className="math-card">
            <span>➡️</span>
            <h3>Ligação Dativa</h3>
            <p>Par doado por 1 átomo — <M>{"H_3O^+, NH_4^+"}</M></p>
          </div>
          <div className="math-card">
            <span>⚡</span>
            <h3>Polar vs Apolar</h3>
            <p><M>{"\\Delta EN > 0{,}4"}</M> → polar</p>
          </div>
          <div className="math-card">
            <span>🔄</span>
            <h3>Ressonância</h3>
            <p>Híbrido de estruturas — <M>{"O_3, C_6H_6"}</M></p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Tipo de Ligação"
          statement={<p>A molécula de N₂ possui quantos pares de elétrons compartilhados entre os átomos de nitrogênio?</p>}
          options={[
            { letter: "a", text: "1 par (ligação simples)" },
            { letter: "b", text: "2 pares (ligação dupla)" },
            { letter: "c", text: "3 pares (ligação tripla)", correct: true },
            { letter: "d", text: "4 pares (ligação quádrupla)" },
          ]}
          resolution={<p>O N tem 5 elétrons de valência. Cada N usa 3 para formar a ligação tripla N≡N e mantém 1 par livre. Três pares compartilhados = ligação tripla.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Polaridade de Ligação"
          statement={<p>Considerando as eletronegatividades H = 2,1; O = 3,5; N = 3,0; C = 2,5, qual das seguintes ligações é a mais polar?</p>}
          options={[
            { letter: "a", text: "C–H (ΔEN = 0,4)" },
            { letter: "b", text: "N–H (ΔEN = 0,9)" },
            { letter: "c", text: "O–H (ΔEN = 1,4)", correct: true },
            { letter: "d", text: "C–N (ΔEN = 0,5)" },
          ]}
          resolution={<p>A polaridade aumenta com ΔEN. O–H tem ΔEN = 3,5 – 2,1 = 1,4, o maior dentre as opções, portanto é a mais polar.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Estrutura de Lewis e Regra do Octeto"
          statement={<p>O CO₂ possui duas ligações duplas entre o carbono central e os oxigênios. Quantos elétrons ao todo estão na camada de valência de toda a molécula e quantos são pares livres?</p>}
          options={[
            { letter: "a", text: "12 elétrons de valência; 2 pares livres" },
            { letter: "b", text: "16 elétrons de valência; 4 pares livres", correct: true },
            { letter: "c", text: "14 elétrons de valência; 3 pares livres" },
            { letter: "d", text: "18 elétrons de valência; 5 pares livres" },
          ]}
          resolution={<p>C contribui 4 e-; cada O contribui 6 e- → total = 4 + 6 + 6 = 16 e-. Dos 16: 8 formam as 2 ligações duplas (4 pares ligantes) e 8 ficam como pares livres nos O (4 pares). Resposta: 16 e-; 4 pares livres.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. Ligação Dativa no Cotidiano"
          statement={<p>(ENEM adapt.) O íon hidrônio H₃O⁺ é formado quando um próton H⁺ é captado pela molécula de água. Esse tipo de ligação formada é chamada de:</p>}
          options={[
            { letter: "a", text: "Ligação iônica, pois há transferência de elétrons" },
            { letter: "b", text: "Ligação covalente dativa, pois o O doa o par de elétrons ao H⁺", correct: true },
            { letter: "c", text: "Ligação de hidrogênio, pois envolve o átomo de H" },
            { letter: "d", text: "Ligação metálica, pois envolve compartilhamento de elétrons livres" },
          ]}
          resolution={<p>O oxigênio da água tem pares livres e doa um deles ao próton H⁺ (que não tem elétrons). Como apenas um átomo fornece os dois elétrons da ligação, trata-se de ligação covalente dativa (coordenada).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. Ressonância e Estabilidade"
          statement={<p>O ozônio (O₃) apresenta estruturas de ressonância. Uma consequência disso é que as duas ligações O–O da molécula real:</p>}
          options={[
            { letter: "a", text: "São diferentes: uma simples (148 pm) e outra dupla (121 pm)" },
            { letter: "b", text: "São iguais e têm comprimento intermediário entre a simples e a dupla", correct: true },
            { letter: "c", text: "São ambas triplas, pois a ressonância aumenta a ordem de ligação" },
            { letter: "d", text: "Não existem, pois o O₃ é iônico" },
          ]}
          resolution={<p>O híbrido de ressonância do O₃ tem as duas ligações O–O equivalentes, com comprimento ~128 pm — entre a ligação simples (148 pm) e a dupla (121 pm). As estruturas canônicas isoladas não representam a realidade; a molécula real é a média delas.</p>}
        />
      </section>
    </article>
  );
}
