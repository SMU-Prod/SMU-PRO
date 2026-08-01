"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap37Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 37</span>
          <h1>Hidrocarbonetos e Nomenclatura IUPAC</h1>
          <p>
            Conheça os hidrocarbonetos — alcanos, alcenos, alcinos e aromáticos — e domine as regras de
            nomenclatura IUPAC, incluindo a numeração da cadeia principal e a indicação de ramificações.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>1. O que são Hidrocarbonetos?</h2>
        <p>
          São compostos formados <strong>apenas por carbono e hidrogênio</strong> (<M>{"\\text{C}_x\\text{H}_y"}</M>).
          São a base da química orgânica e a principal fonte de energia (petróleo, gás natural).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Classificação</span>
        <h2>2. Classificação dos Hidrocarbonetos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Ligações</th><th>Fórmula geral</th><th>Sufixo</th></tr>
            </thead>
            <tbody>
              <tr><td>Alcano</td><td>Só simples</td><td><M>{"\\text{C}_n\\text{H}_{2n+2}"}</M></td><td>‑ano</td></tr>
              <tr><td>Alceno</td><td>1 dupla</td><td><M>{"\\text{C}_n\\text{H}_{2n}"}</M></td><td>‑eno</td></tr>
              <tr><td>Alcino</td><td>1 tripla</td><td><M>{"\\text{C}_n\\text{H}_{2n-2}"}</M></td><td>‑ino</td></tr>
              <tr><td>Aromático</td><td>Anel benzênico</td><td>—</td><td>—</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Saturados</span>
        <h2>3. Alcanos (Parafinas)</h2>
        <p>
          Só têm ligações simples. São pouco reativos. Exemplos: metano (<M>{"\\text{CH}_4"}</M>), etano
          (<M>{"\\text{C}_2\\text{H}_6"}</M>), propano (<M>{"\\text{C}_3\\text{H}_8"}</M>), butano
          (<M>{"\\text{C}_4\\text{H}_{10}"}</M>). Compõem o gás de cozinha (GLP) e a gasolina.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Insaturados</span>
        <h2>4. Alcenos (Olefinas)</h2>
        <p>
          Possuem uma <strong>ligação dupla</strong>. Mais reativos (sofrem adição). O mais importante é o{" "}
          <strong>eteno</strong> (<M>{"\\text{C}_2\\text{H}_4"}</M>), matéria-prima do polietileno e
          hormônio de amadurecimento de frutas.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Insaturados</span>
        <h2>5. Alcinos</h2>
        <p>
          Possuem uma <strong>ligação tripla</strong>. O principal é o <strong>etino (acetileno)</strong>{" "}
          (<M>{"\\text{C}_2\\text{H}_2"}</M>), usado em maçaricos de solda (chama muito quente).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aromáticos</span>
        <h2>6. Hidrocarbonetos Aromáticos</h2>
        <p>
          Contêm o <strong>anel benzênico</strong> (<M>{"\\text{C}_6\\text{H}_6"}</M>), com ligações
          deslocalizadas (ressonância) que conferem estabilidade especial. Exemplos: benzeno, tolueno,
          naftaleno. São usados como solventes e matérias-primas industriais.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Nomenclatura</span>
        <h2>7. Regras de Nomenclatura IUPAC</h2>
        <p>O nome é formado por três partes: <strong>prefixo + ligação + sufixo</strong>.</p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Nº de C</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr>
            </thead>
            <tbody>
              <tr><td>Prefixo</td><td>met</td><td>et</td><td>prop</td><td>but</td><td>pent</td><td>hex</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            Ligação: <strong>an</strong> (só simples), <strong>en</strong> (dupla), <strong>in</strong>{" "}
            (tripla). Sufixo de hidrocarboneto: <strong>‑o</strong>. Ex.: prop + en + o = <strong>propeno</strong>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ramificações</span>
        <h2>8. Regras para Cadeias Ramificadas</h2>
        <div className="lesson-highlight">
          <ol>
            <li>Escolha a <strong>cadeia principal</strong> (a mais longa, que contenha as insaturações).</li>
            <li>Numere a cadeia pela ponta que dê os <strong>menores números</strong> às ramificações/insaturações.</li>
            <li>Nomeie os <strong>radicais</strong> (metil, etil…) com seus localizadores, em ordem alfabética.</li>
          </ol>
          <p>Ex.: <strong>2-metilbutano</strong> — um grupo metil no carbono 2 de uma cadeia de 4 carbonos.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>9. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>⛽</span>
            <h3>Hidrocarbonetos</h3>
            <p>Só C e H. Base dos combustíveis.</p>
          </div>
          <div className="math-card">
            <span>🟦</span>
            <h3>Alcano</h3>
            <p><M>{"\\text{C}_n\\text{H}_{2n+2}"}</M>; sufixo ‑ano.</p>
          </div>
          <div className="math-card">
            <span>🟩</span>
            <h3>Alceno</h3>
            <p><M>{"\\text{C}_n\\text{H}_{2n}"}</M>; uma dupla; ‑eno.</p>
          </div>
          <div className="math-card">
            <span>🟨</span>
            <h3>Alcino</h3>
            <p><M>{"\\text{C}_n\\text{H}_{2n-2}"}</M>; uma tripla; ‑ino.</p>
          </div>
          <div className="math-card">
            <span>⬡</span>
            <h3>Aromático</h3>
            <p>Anel benzênico (<M>{"\\text{C}_6\\text{H}_6"}</M>).</p>
          </div>
          <div className="math-card">
            <span>🔤</span>
            <h3>Nome</h3>
            <p>Prefixo (C) + ligação + sufixo (‑o). Numerar pelos menores localizadores.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estruturas Visuais</span>
        <h2>Representação dos Hidrocarbonetos</h2>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Cadeia carbônica: aberta ramificada e fechada aromática">
          <text x="170" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1d4ed8">Cadeia Aberta (alifática)</text>
          <text x="530" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#15803d">Cadeia Fechada (cíclica/aromática)</text>
          {/* Alcano: CH3-CH2-CH2-CH3 (butano) */}
          {[0,1,2,3].map(i => (
            <circle key={i} cx={60+i*70} cy="80" r="18" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          ))}
          {[0,1,2,3].map(i => (
            <text key={i} x={60+i*70} y="85" textAnchor="middle" fontSize="12" fill="#1d4ed8">{i===0||i===3?"CH₃":"CH₂"}</text>
          ))}
          {[0,1,2].map(i => (
            <line key={i} x1={78+i*70} y1="80" x2={42+(i+1)*70} y2="80" stroke="#2563eb" strokeWidth="2" />
          ))}
          <text x="170" y="115" textAnchor="middle" fontSize="12" fill="#1d4ed8">butano (C₄H₁₀) — alcano</text>
          {/* Ramificação: 2-metilpropano */}
          <text x="170" y="140" textAnchor="middle" fontSize="12" fill="#2563eb">C—C—C com CH₃ no C2</text>
          <text x="170" y="158" textAnchor="middle" fontSize="11" fill="#64748b">isopropilada = ramificação</text>

          {/* Benzeno */}
          {[0,1,2,3,4,5].map(i => {
            const a = (i*60-90)*Math.PI/180;
            const cx = 530+45*Math.cos(a), cy = 90+45*Math.sin(a);
            const nx = 530+45*Math.cos(((i+1)*60-90)*Math.PI/180);
            const ny = 90+45*Math.sin(((i+1)*60-90)*Math.PI/180);
            return <line key={i} x1={cx} y1={cy} x2={nx} y2={ny} stroke="#15803d" strokeWidth={i%2===0?3:1.5} />;
          })}
          <circle cx="530" cy="90" r="22" fill="none" stroke="#15803d" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="530" y="94" textAnchor="middle" fontSize="12" fill="#15803d">C₆H₆</text>
          <text x="530" y="152" textAnchor="middle" fontSize="12" fill="#15803d">benzeno — aromático</text>
          <text x="530" y="170" textAnchor="middle" fontSize="11" fill="#64748b">3 duplas alternadas</text>
        </svg>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Nomenclatura IUPAC: prefixo número carbonos + infixo ligação + sufixo ano/eno/ino">
          <rect x="30" y="15" width="640" height="60" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
          <text x="350" y="38" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#166534">REGRA IUPAC: prefixo + infixo + sufixo</text>
          <text x="350" y="60" textAnchor="middle" fontSize="12" fill="#166534">met·et·prop·but·pent·hex… + (a) + no/eno/ino/dieno</text>

          {[
            ["but", "an", "o", "Butano", "C₄H₁₀", "4C, só simples", 100, "#dbeafe","#1d4ed8"],
            ["pent", "en", "o", "Penteno", "C₅H₁₀", "5C, 1 dupla", 280, "#fef9c3","#854d0e"],
            ["prop", "in", "o", "Propino", "C₃H₄", "3C, 1 tripla", 460, "#fce7f3","#9d174d"],
            ["hex", "adi", "eno", "Hexadieno","C₆H₁₀","6C, 2 duplas", 610, "#f0fdf4","#166534"]
          ].map(([pre,inf,suf,name,mol,desc,x,fill,stroke]) => (
            <g key={x as number}>
              <rect x={(x as number)-75} y="95" width="148" height="100" rx="6" fill={fill as string} stroke={stroke as string} strokeWidth="1.5" />
              <text x={x as number} y="116" textAnchor="middle" fontSize="13" fontWeight="bold" fill={stroke as string}>{name as string}</text>
              <text x={x as number} y="136" textAnchor="middle" fontSize="12" fill={stroke as string}>{mol as string}</text>
              <text x={(x as number)-60} y="158" fontSize="11" fill={stroke as string}><tspan fontWeight="bold">{pre as string}</tspan><tspan>+{inf as string}+{suf as string}</tspan></text>
              <text x={x as number} y="182" textAnchor="middle" fontSize="11" fill={stroke as string}>{desc as string}</text>
            </g>
          ))}
        </svg>

      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Fórmula geral dos alcanos"
          statement={<p>A fórmula geral dos alcanos é:</p>}
          options={[
            { letter: "a", text: "CₙH₂ₙ₊₂", correct: true },
            { letter: "b", text: "CₙH₂ₙ" },
            { letter: "c", text: "CₙH₂ₙ₋₂" },
            { letter: "d", text: "CₙHₙ" },
          ]}
          resolution={<p>Alcanos (só ligações simples) seguem <M>{"\\text{C}_n\\text{H}_{2n+2}"}</M>. Ex.: <M>{"\\text{C}_3\\text{H}_8"}</M> (propano).</p>}
        />

        <Exercise
          level="Básico"
          title="2. Nome de hidrocarboneto"
          statement={<p>O hidrocarboneto de 3 carbonos com uma ligação dupla chama-se:</p>}
          options={[
            { letter: "a", text: "Propeno", correct: true },
            { letter: "b", text: "Propano" },
            { letter: "c", text: "Propino" },
            { letter: "d", text: "Eteno" },
          ]}
          resolution={<p>prop (3 C) + en (dupla) + o = propeno (<M>{"\\text{C}_3\\text{H}_6"}</M>).</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Identificando a função"
          statement={<p>O acetileno (<M>{"\\text{C}_2\\text{H}_2"}</M>), usado em maçaricos, é um:</p>}
          options={[
            { letter: "a", text: "Alcino (possui ligação tripla)", correct: true },
            { letter: "b", text: "Alcano" },
            { letter: "c", text: "Alceno" },
            { letter: "d", text: "Aromático" },
          ]}
          resolution={<p>O etino/acetileno tem uma ligação tripla entre os carbonos (<M>{"\\text{C}_n\\text{H}_{2n-2}"}</M>) → é um alcino.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Fórmula a partir do nome"
          statement={<p>Qual a fórmula molecular do buteno (4 carbonos, alceno)?</p>}
          options={[
            { letter: "a", text: "C₄H₈", correct: true },
            { letter: "b", text: "C₄H₁₀" },
            { letter: "c", text: "C₄H₆" },
            { letter: "d", text: "C₄H₄" },
          ]}
          resolution={<p>Alceno: <M>{"\\text{C}_n\\text{H}_{2n}"}</M>. Para n = 4: <M>{"\\text{C}_4\\text{H}_8"}</M>.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Nomenclatura de ramificado"
          statement={<p>Uma cadeia principal de 4 carbonos (butano) com um grupo metil no carbono 2 chama-se:</p>}
          options={[
            { letter: "a", text: "2-metilbutano", correct: true },
            { letter: "b", text: "3-metilbutano" },
            { letter: "c", text: "2-metilpropano" },
            { letter: "d", text: "metilbutano" },
          ]}
          resolution={<p>Numerando pela ponta que dá o menor localizador, o metil fica no C2. Nome: 2-metilbutano. (Numerar pelo outro lado daria 3-metil, que é maior — por isso incorreto.)</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Amadurecimento de frutas"
          statement={<p>O gás eteno (<M>{"\\text{C}_2\\text{H}_4"}</M>) é liberado por frutas e acelera o amadurecimento — por isso frutas maduras "amadurecem" as próximas. Quanto à sua classificação, o eteno é um:</p>}
          options={[
            { letter: "a", text: "Alceno, hidrocarboneto com uma ligação dupla.", correct: true },
            { letter: "b", text: "Alcano saturado." },
            { letter: "c", text: "Álcool." },
            { letter: "d", text: "Composto aromático." },
          ]}
          resolution={<p>O eteno tem uma ligação dupla entre os carbonos (<M>{"\\text{C}_2\\text{H}_4"}</M>), sendo um alceno. Além de ser matéria-prima do polietileno, atua como hormônio vegetal de amadurecimento.</p>}
        />
      </section>
    </article>
  );
}
