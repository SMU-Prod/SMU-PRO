"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap33Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 33</span>
          <h1>Eletroquímica I: NOX e Reações de Oxirredução</h1>
          <p>
            Aprenda a calcular o número de oxidação (NOX), a identificar oxidação e redução, agente oxidante
            e redutor, e a reconhecer reações redox — a base das pilhas, da eletrólise e da corrosão.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que é Eletroquímica?</h2>
        <p>
          Eletroquímica estuda as relações entre <strong>reações químicas e eletricidade</strong>: como
          reações geram corrente (pilhas) e como a corrente provoca reações (eletrólise). Tudo se baseia na{" "}
          <strong>transferência de elétrons</strong> (oxirredução).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A grandeza</span>
        <h2>2. Número de Oxidação (NOX)</h2>
        <p>
          O NOX indica a carga real (em íons) ou aparente (em moléculas) de um átomo, supondo que os elétrons
          das ligações pertençam ao mais eletronegativo. Acompanhar a variação do NOX revela quem ganhou e
          quem perdeu elétrons.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Regras</span>
        <h2>3. NOX Fixos e Regras</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Espécie</th><th>NOX</th></tr>
            </thead>
            <tbody>
              <tr><td>Substância simples (O₂, Fe, H₂)</td><td>0</td></tr>
              <tr><td>Metais alcalinos (1A), Ag</td><td>+1</td></tr>
              <tr><td>Metais alcalino-terrosos (2A), Zn</td><td>+2</td></tr>
              <tr><td>Hidrogênio (em geral)</td><td>+1 (−1 em hidretos metálicos)</td></tr>
              <tr><td>Oxigênio (em geral)</td><td>−2 (−1 em peróxidos)</td></tr>
              <tr><td>Íon monoatômico</td><td>= sua carga</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            A soma dos NOX em uma molécula neutra é <strong>zero</strong>; em um íon, é igual à <strong>carga</strong> do íon.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicando</span>
        <h2>4. Como Calcular o NOX</h2>
        <div className="lesson-highlight">
          <p>
            Ex.: enxofre no <M>{"\\text{H}_2\\text{SO}_4"}</M>. H = +1 (×2 = +2), O = −2 (×4 = −8). Para a soma
            ser 0: <M>{"2 + x + (-8) = 0 \\Rightarrow x = +6"}</M>. Logo, o NOX do S é +6.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Definições</span>
        <h2>5. Conceitos de Redox</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⬆️</span>
            <h3>Oxidação</h3>
            <p>NOX <strong>aumenta</strong> (perde elétrons).</p>
          </div>
          <div className="lesson-card">
            <span>⬇️</span>
            <h3>Redução</h3>
            <p>NOX <strong>diminui</strong> (ganha elétrons).</p>
          </div>
          <div className="lesson-card">
            <span>🔥</span>
            <h3>Agente oxidante</h3>
            <p>Sofre redução (faz o outro oxidar).</p>
          </div>
          <div className="lesson-card">
            <span>🧪</span>
            <h3>Agente redutor</h3>
            <p>Sofre oxidação (faz o outro reduzir).</p>
          </div>
        </div>
        <div className="lesson-highlight">
          <p>Macete: <strong>"PERDE OXIDA"</strong> — quem Perde Elétrons sofre oxidação (NOX sobe).</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Reconhecendo</span>
        <h2>6. Identificando uma Reação Redox</h2>
        <p>
          Uma reação é de oxirredução se <strong>houver variação de NOX</strong> de pelo menos um elemento.
          Ex.: <M>{"\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}"}</M> — o Zn passa de
          0 a +2 (oxida) e o Cu de +2 a 0 (reduz).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cotidiano</span>
        <h2>7. Redox no Cotidiano</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔋</span>
            <h3>Pilhas e baterias</h3>
            <p>Redox espontânea gera corrente elétrica.</p>
          </div>
          <div className="lesson-card">
            <span>🦠</span>
            <h3>Respiração</h3>
            <p>Oxidação da glicose libera energia para as células.</p>
          </div>
          <div className="lesson-card">
            <span>🛑</span>
            <h3>Ferrugem</h3>
            <p>Oxidação do ferro pelo O₂ e umidade.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>8. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔢</span>
            <h3>NOX</h3>
            <p>Carga real/aparente. Soma = 0 (molécula) ou carga (íon).</p>
          </div>
          <div className="math-card">
            <span>📏</span>
            <h3>Fixos</h3>
            <p>1A = +1; 2A = +2; O = −2; H = +1.</p>
          </div>
          <div className="math-card">
            <span>⬆️</span>
            <h3>Oxidação</h3>
            <p>NOX sobe; perde elétrons.</p>
          </div>
          <div className="math-card">
            <span>⬇️</span>
            <h3>Redução</h3>
            <p>NOX desce; ganha elétrons.</p>
          </div>
          <div className="math-card">
            <span>🔥</span>
            <h3>Agentes</h3>
            <p>Oxidante reduz-se; redutor oxida-se.</p>
          </div>
          <div className="math-card">
            <span>✅</span>
            <h3>Redox</h3>
            <p>Há variação de NOX em algum elemento.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama de Oxirredução</span>
        <h2>Síntese Visual: NOX e Pilha Eletroquímica</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Pilha de Daniell: eletrodos de Zn e Cu, fluxo de elétrons">
          <defs>
            <marker id="arr33a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
            <marker id="arr33b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
          </defs>
          {/* ânodo (Zn) */}
          <rect x="60" y="80" width="180" height="100" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="150" y="115" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#713f12">Zn (ânodo)</text>
          <text x="150" y="133" textAnchor="middle" fontSize="12" fill="#713f12">Zn → Zn²⁺ + 2e⁻</text>
          <text x="150" y="150" textAnchor="middle" fontSize="12" fill="#713f12">oxidação (-)</text>
          <text x="150" y="70" textAnchor="middle" fontSize="12" fill="#713f12">ZnSO₄(aq)</text>
          {/* cátodo (Cu) */}
          <rect x="460" y="80" width="180" height="100" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="550" y="115" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">Cu (cátodo)</text>
          <text x="550" y="133" textAnchor="middle" fontSize="12" fill="#1d4ed8">Cu²⁺ + 2e⁻ → Cu</text>
          <text x="550" y="150" textAnchor="middle" fontSize="12" fill="#1d4ed8">redução (+)</text>
          <text x="550" y="70" textAnchor="middle" fontSize="12" fill="#1d4ed8">CuSO₄(aq)</text>
          {/* fio externo — fluxo de e⁻ */}
          <line x1="150" y1="80" x2="150" y2="40" stroke="#2563eb" strokeWidth="2" />
          <line x1="150" y1="40" x2="550" y2="40" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arr33a)" />
          <line x1="550" y1="40" x2="550" y2="80" stroke="#2563eb" strokeWidth="2" />
          <text x="350" y="30" textAnchor="middle" fontSize="13" fill="#2563eb">e⁻ (do Zn para Cu pelo fio externo)</text>
          {/* ponte salina */}
          <rect x="290" y="115" width="120" height="30" rx="4" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
          <text x="350" y="135" textAnchor="middle" fontSize="12" fill="#475569">ponte salina</text>
          <text x="350" y="190" textAnchor="middle" fontSize="13" fill="#0f172a">Reação global: Zn + Cu²⁺ → Zn²⁺ + Cu | ΔE°= E°cátodo − E°ânodo</text>
          <text x="350" y="208" textAnchor="middle" fontSize="13" fill="#475569">ΔE° {">"} 0: reação espontânea | ΔE° {"<"} 0: eletrólise necessária</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Regras de NOX com exemplos">
          <rect x="40" y="20" width="620" height="150" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          <text x="350" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">Regras Principais de NOX</text>
          <text x="200" y="72" textAnchor="middle" fontSize="13" fill="#2563eb">Elemento simples: NOX = 0</text>
          <text x="200" y="90" textAnchor="middle" fontSize="13" fill="#2563eb">ex: Fe⁰, O₂⁰, H₂⁰</text>
          <text x="520" y="72" textAnchor="middle" fontSize="13" fill="#dc2626">íon monoatômico: NOX = carga</text>
          <text x="520" y="90" textAnchor="middle" fontSize="13" fill="#dc2626">ex: Na⁺¹, Cl⁻¹, Ca²⁺²</text>
          <text x="200" y="118" textAnchor="middle" fontSize="13" fill="#16a34a">H: +1 (exceto hidretos = −1)</text>
          <text x="200" y="136" textAnchor="middle" fontSize="13" fill="#16a34a">O: −2 (exceto H₂O₂ = −1, OF₂ = +2)</text>
          <text x="520" y="118" textAnchor="middle" fontSize="13" fill="#7c3aed">Soma dos NOX = carga total</text>
          <text x="520" y="136" textAnchor="middle" fontSize="13" fill="#7c3aed">SO₄²⁻: S + 4(−2) = −2 → S = +6</text>
          <text x="350" y="162" textAnchor="middle" fontSize="13" fill="#0f172a">Oxidação = perde e⁻ → NOX ↑ | Redução = ganha e⁻ → NOX ↓</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Espécie</th><th>NOX do elemento destacado</th><th>Raciocínio</th></tr>
          </thead>
          <tbody>
            <tr><td>H₂SO₄ (S)</td><td>+6</td><td>H=+1(×2), O=−2(×4): 2+S−8=0 → S=+6</td></tr>
            <tr><td>KMnO₄ (Mn)</td><td>+7</td><td>K=+1, O=−2(×4): 1+Mn−8=0 → Mn=+7</td></tr>
            <tr><td>Na₂Cr₂O₇ (Cr)</td><td>+6</td><td>2(+1)+2Cr+7(−2)=0 → Cr=+6</td></tr>
            <tr><td>Fe₃O₄ (Fe)</td><td>+8/3 ≈ +2,67</td><td>Contém Fe²⁺ e Fe³⁺ (mistura)</td></tr>
            <tr><td>N₂H₄ (N)</td><td>−2</td><td>H=+1(×4): 2N+4=0 → N=−2</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. NOX de substância simples"
          statement={<p>O número de oxidação do oxigênio na molécula de O₂ é:</p>}
          options={[
            { letter: "a", text: "0", correct: true },
            { letter: "b", text: "−2" },
            { letter: "c", text: "+2" },
            { letter: "d", text: "−1" },
          ]}
          resolution={<p>Em substâncias simples, o NOX é sempre zero. O O₂ é uma substância simples → NOX = 0. (O valor −2 é o NOX típico do O em compostos.)</p>}
        />

        <Exercise
          level="Básico"
          title="2. Oxidação x redução"
          statement={<p>Quando um átomo perde elétrons, ele sofre:</p>}
          options={[
            { letter: "a", text: "Oxidação (NOX aumenta)", correct: true },
            { letter: "b", text: "Redução (NOX diminui)" },
            { letter: "c", text: "Hidrólise" },
            { letter: "d", text: "Ionização nuclear" },
          ]}
          resolution={<p>Perder elétrons = oxidação, com aumento do NOX ("PERDE OXIDA"). Ganhar elétrons = redução.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Calculando NOX"
          statement={<p>Qual o NOX do nitrogênio no ácido nítrico (<M>{"\\text{HNO}_3"}</M>)?</p>}
          options={[
            { letter: "a", text: "+5", correct: true },
            { letter: "b", text: "+3" },
            { letter: "c", text: "−3" },
            { letter: "d", text: "+1" },
          ]}
          resolution={<p>H = +1, O = −2 (×3 = −6). Soma zero: <M>{"1 + x - 6 = 0 \\Rightarrow x = +5"}</M>.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Identificando agentes"
          statement={<p>Na reação <M>{"\\text{Zn} + \\text{Cu}^{2+} \\rightarrow \\text{Zn}^{2+} + \\text{Cu}"}</M>, o agente redutor é:</p>}
          options={[
            { letter: "a", text: "Zn (que se oxida)", correct: true },
            { letter: "b", text: "Cu²⁺ (que se oxida)" },
            { letter: "c", text: "Cu (que se reduz)" },
            { letter: "d", text: "Zn²⁺ (que se reduz)" },
          ]}
          resolution={<p>O Zn passa de 0 a +2 (oxida-se) — portanto é o agente redutor (provoca a redução do Cu²⁺). O Cu²⁺ é o agente oxidante.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. NOX em íon poliatômico"
          statement={<p>Qual o NOX do manganês no íon permanganato (<M>{"\\text{MnO}_4^{-}"}</M>)?</p>}
          options={[
            { letter: "a", text: "+7", correct: true },
            { letter: "b", text: "+4" },
            { letter: "c", text: "+2" },
            { letter: "d", text: "−1" },
          ]}
          resolution={<p>O = −2 (×4 = −8). A soma dos NOX deve ser igual à carga do íon (−1): <M>{"x - 8 = -1 \\Rightarrow x = +7"}</M>.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Ferrugem como oxirredução"
          statement={<p>A formação de ferrugem (<M>{"4\\,\\text{Fe} + 3\\,\\text{O}_2 \\rightarrow 2\\,\\text{Fe}_2\\text{O}_3"}</M>) deteriora estruturas metálicas. Sob o ponto de vista da eletroquímica, nesse processo o ferro:</p>}
          options={[
            { letter: "a", text: "Sofre oxidação, passando de NOX 0 para +3, perdendo elétrons para o oxigênio.", correct: true },
            { letter: "b", text: "Sofre redução, ganhando elétrons." },
            { letter: "c", text: "Não muda de NOX." },
            { letter: "d", text: "Atua como agente oxidante." },
          ]}
          resolution={<p>O ferro metálico (NOX 0) passa a <M>{"\\text{Fe}^{3+}"}</M> (NOX +3) no óxido, perdendo elétrons → oxidação. O O₂ (0 → −2) é o agente oxidante. A ferrugem é, portanto, uma reação de oxirredução.</p>}
        />
      </section>
    </article>
  );
}
