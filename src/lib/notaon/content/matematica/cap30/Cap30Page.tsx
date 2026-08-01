"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap30Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 30</span>
          <h1>Estatística: Medidas de Dispersão e Gráficos</h1>
          <p>
            Calcule variância, desvio padrão, amplitude e coeficiente de variação.
            Interprete histogramas, boxplots e gráficos de frequência. Compreenda
            o que a dispersão revela sobre a homogeneidade dos dados.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Por que medir dispersão?</span>
        <h2>1. A Importância das Medidas de Dispersão</h2>
        <p>
          Dois conjuntos podem ter a mesma média e ainda serem muito diferentes.
          As medidas de dispersão quantificam o quanto os dados se afastam do centro.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo ilustrativo</h3>
          <p>Turma A: 7, 7, 7, 7, 7 (média 7, desvio 0)</p>
          <p>Turma B: 1, 5, 7, 9, 13 (média 7, desvio alto)</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Amplitude</span>
        <h2>2. Amplitude Total</h2>
        <M block={true}>{"\\text{AT} = x_{\\text{max}} - x_{\\text{min}}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Dados: 3, 7, 12, 5, 9 → AT = 12 − 3 = 9</p>
          <p>Vantagem: simples. Desvantagem: sensível a outliers.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Variância e Desvio Padrão</span>
        <h2>3. Variância e Desvio Padrão</h2>
        <M block={true}>{"\\sigma^2 = \\frac{\\sum_{i=1}^n (x_i - \\bar{x})^2}{n} \\qquad \\sigma = \\sqrt{\\sigma^2}"}</M>

        <div className="lesson-highlight">
          <h3>Para amostras (não população)</h3>
          <M block={true}>{"s^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n-1} \\qquad s = \\sqrt{s^2}"}</M>
        </div>

        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Dados: 2, 4, 4, 4, 5, 5, 7, 9 (n=8; <M>{"\\bar{x} = 5"}</M>)</p>
          <M block={true}>{"\\sigma^2 = \\frac{(2-5)^2+(4-5)^2\\times3+(5-5)^2\\times2+(7-5)^2+(9-5)^2}{8} = \\frac{9+3+0+4+16}{8} = 4"}</M>
          <M block={true}>{"\\sigma = 2"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desvio Médio</span>
        <h2>4. Desvio Médio Absoluto</h2>
        <M block={true}>{"\\text{DM} = \\frac{\\sum_{i=1}^n |x_i - \\bar{x}|}{n}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>Dados: 4, 6, 8, 10, 12 (<M>{"\\bar{x} = 8"}</M>)</p>
          <M block={true}>{"\\text{DM} = \\frac{4+2+0+2+4}{5} = \\frac{12}{5} = 2{,}4"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Coeficiente de Variação</span>
        <h2>5. Coeficiente de Variação (CV)</h2>
        <M block={true}>{"CV = \\frac{\\sigma}{\\bar{x}} \\times 100\\%"}</M>
        <p>
          O CV é adimensional e permite comparar a dispersão relativa de conjuntos
          com unidades ou magnitudes diferentes.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>CV</th><th>Interpretação</th></tr>
            </thead>
            <tbody>
              <tr><td>CV ≤ 15%</td><td>Baixa dispersão (homogêneo)</td></tr>
              <tr><td>15% &lt; CV ≤ 30%</td><td>Dispersão moderada</td></tr>
              <tr><td>CV &gt; 30%</td><td>Alta dispersão (heterogêneo)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Quartis</span>
        <h2>6. Quartis e Percentis</h2>
        <M block={true}>{"Q_1 = 25^\\circ \\text{ percentil} \\qquad Q_2 = \\text{Mediana} \\qquad Q_3 = 75^\\circ \\text{ percentil}"}</M>
        <M block={true}>{"\\text{IQR} = Q_3 - Q_1 \\quad (\\text{intervalo interquartílico})"}</M>
        <div className="lesson-highlight">
          <h3>Identificação de outliers</h3>
          <M block={true}>{"\\text{Outlier} < Q_1 - 1{,}5 \\times \\text{IQR} \\quad \\text{ou} \\quad > Q_3 + 1{,}5 \\times \\text{IQR}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Boxplot</span>
        <h2>7. Boxplot (Diagrama de Caixa)</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 360 120" width="360" height="120" aria-label="Boxplot">
            {/* Eixo */}
            <line x1="30" y1="90" x2="330" y2="90" stroke="#374151" strokeWidth="1.5"/>
            {/* Bigodes */}
            <line x1="60" y1="60" x2="60" y2="90" stroke="#374151" strokeWidth="1.5"/>
            <line x1="60" y1="75" x2="130" y2="75" stroke="#374151" strokeWidth="2"/>
            <line x1="280" y1="60" x2="280" y2="90" stroke="#374151" strokeWidth="1.5"/>
            <line x1="220" y1="75" x2="280" y2="75" stroke="#374151" strokeWidth="2"/>
            {/* Caixa */}
            <rect x="130" y="55" width="90" height="40" fill="#93c5fd" stroke="#2563eb" strokeWidth="2"/>
            {/* Mediana */}
            <line x1="185" y1="55" x2="185" y2="95" stroke="#dc2626" strokeWidth="2.5"/>
            {/* Rótulos */}
            <text x="60" y="105" textAnchor="middle" fontSize="10" fill="#374151">Mín</text>
            <text x="130" y="105" textAnchor="middle" fontSize="10" fill="#374151">Q₁</text>
            <text x="185" y="105" textAnchor="middle" fontSize="10" fill="#dc2626">Q₂</text>
            <text x="220" y="105" textAnchor="middle" fontSize="10" fill="#374151">Q₃</text>
            <text x="280" y="105" textAnchor="middle" fontSize="10" fill="#374151">Máx</text>
            <text x="185" y="20" textAnchor="middle" fontSize="11" fill="#374151">Boxplot — estrutura</text>
          </svg>
          <figcaption>Boxplot: mínimo, Q1, mediana, Q3 e máximo — identifica simetria e outliers</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráficos Estatísticos</span>
        <h2>8. Tipos de Gráficos Estatísticos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Gráfico</th><th>Uso</th></tr>
            </thead>
            <tbody>
              <tr><td>Barras</td><td>Comparar categorias</td></tr>
              <tr><td>Setores (pizza)</td><td>Proporções do todo</td></tr>
              <tr><td>Histograma</td><td>Distribuição de frequências</td></tr>
              <tr><td>Polígono de frequência</td><td>Tendência / curva de frequência</td></tr>
              <tr><td>Boxplot</td><td>Dispersão e outliers</td></tr>
              <tr><td>Ogiva</td><td>Frequências acumuladas</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Distribuição Normal</span>
        <h2>9. A Distribuição Normal e a Regra 68-95-99,7</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 360 150" width="360" height="150" aria-label="Curva normal">
            {/* Curva gaussiana */}
            <path d="M 20 130 Q 50 130 80 120 Q 100 110 120 90 Q 140 60 160 30 Q 180 10 200 30 Q 220 60 240 90 Q 260 110 280 120 Q 310 130 340 130" stroke="#2563eb" strokeWidth="2.5" fill="none"/>
            <path d="M 20 130 Q 50 130 80 120 Q 100 110 120 90 Q 140 60 160 30 Q 180 10 200 30 Q 220 60 240 90 Q 260 110 280 120 Q 310 130 340 130 L 340 140 L 20 140 Z" fill="#bfdbfe" fillOpacity="0.4"/>
            {/* Linhas sigma */}
            <line x1="180" y1="10" x2="180" y2="140" stroke="#374151" strokeWidth="1.5" strokeDasharray="4,3"/>
            <line x1="130" y1="75" x2="130" y2="140" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4,3"/>
            <line x1="230" y1="75" x2="230" y2="140" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4,3"/>
            <line x1="80" y1="118" x2="80" y2="140" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4,3"/>
            <line x1="280" y1="118" x2="280" y2="140" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4,3"/>
            {/* Rótulos */}
            <text x="180" y="148" textAnchor="middle" fontSize="10" fill="#374151">μ</text>
            <text x="130" y="148" textAnchor="middle" fontSize="10" fill="#16a34a">μ−σ</text>
            <text x="230" y="148" textAnchor="middle" fontSize="10" fill="#16a34a">μ+σ</text>
            <text x="80" y="148" textAnchor="middle" fontSize="10" fill="#dc2626">μ−2σ</text>
            <text x="280" y="148" textAnchor="middle" fontSize="10" fill="#dc2626">μ+2σ</text>
            <text x="180" y="58" textAnchor="middle" fontSize="10" fill="#1e40af">68%</text>
            <text x="180" y="30" textAnchor="middle" fontSize="10" fill="#15803d">95%</text>
          </svg>
          <figcaption>Regra empírica: 68% dos dados em μ±σ; 95% em μ±2σ; 99,7% em μ±3σ</figcaption>
        </figure>
        <M block={true}>{"P(\\mu-\\sigma \\leq X \\leq \\mu+\\sigma) \\approx 68\\% \\quad P(\\mu-2\\sigma \\leq X \\leq \\mu+2\\sigma) \\approx 95\\%"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo — Medidas de Dispersão</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Medida</th><th>Fórmula</th><th>Vantagem</th></tr>
            </thead>
            <tbody>
              <tr><td>Amplitude</td><td><M>{"x_{\\max}-x_{\\min}"}</M></td><td>Simples, imediata</td></tr>
              <tr><td>Desvio médio</td><td><M>{"\\sum|x_i-\\bar x|/n"}</M></td><td>Intuitivo</td></tr>
              <tr><td>Variância σ²</td><td><M>{"\\sum(x_i-\\bar x)^2/n"}</M></td><td>Base para desvio padrão</td></tr>
              <tr><td>Desvio padrão σ</td><td><M>{"\\sqrt{\\sigma^2}"}</M></td><td>Mesma unidade dos dados</td></tr>
              <tr><td>CV</td><td><M>{"(\\sigma/\\bar x)\\times100\\%"}</M></td><td>Comparação entre grupos</td></tr>
              <tr><td>IQR</td><td><M>{"Q_3-Q_1"}</M></td><td>Robusto a outliers</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Amplitude"
          statement={<p>Os dados {"{4, 7, 2, 9, 5, 11, 3}"} têm amplitude igual a:</p>}
          options={[
            { letter: "a", text: "7" },
            { letter: "b", text: "9", correct: true },
            { letter: "c", text: "11" },
            { letter: "d", text: "5" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\text{AT} = 11 - 2 = 9"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Variância e desvio padrão"
          statement={
            <p>Calcule o desvio padrão do conjunto {"{2, 4, 4, 4, 5, 5, 7, 9}"} (média = 5).</p>
          }
          options={[
            { letter: "a", text: "2", correct: true },
            { letter: "b", text: "4" },
            { letter: "c", text: "3" },
            { letter: "d", text: "1,5" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\sigma^2 = \\frac{9+1+1+1+0+0+4+16}{8} = \\frac{32}{8} = 4"}</M>
              <M block={true}>{"\\sigma = 2"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Coeficiente de variação"
          statement={
            <p>
              Turma A: média 70, σ = 5. Turma B: média 50, σ = 8.
              Qual turma é mais homogênea (menor CV)?
            </p>
          }
          options={[
            { letter: "a", text: "Turma A (CV ≈ 7,1%)", correct: true },
            { letter: "b", text: "Turma B (CV = 16%)" },
            { letter: "c", text: "São iguais" },
            { letter: "d", text: "Turma B" },
          ]}
          resolution={
            <>
              <M block={true}>{"CV_A = \\frac{5}{70}\\times100 \\approx 7{,}1\\% \\qquad CV_B = \\frac{8}{50}\\times100 = 16\\%"}</M>
              <p>Turma A é mais homogênea.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Controle de qualidade"
          statement={
            <p>
              Uma máquina deve produzir peças de 50 mm. As medições de 6 peças
              foram: 48, 50, 51, 49, 52, 50 mm. Calcule o desvio padrão.
              (<M>{"\\bar{x} = 50"}</M>)
            </p>
          }
          options={[
            { letter: "a", text: "≈ 1,29 mm", correct: true },
            { letter: "b", text: "≈ 2,00 mm" },
            { letter: "c", text: "≈ 0,50 mm" },
            { letter: "d", text: "≈ 1,83 mm" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\sigma^2 = \\frac{4+0+1+1+4+0}{6} = \\frac{10}{6} \\approx 1{,}67 \\Rightarrow \\sigma \\approx 1{,}29 \\text{ mm}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Comparação de rendimentos"
          statement={
            <p>
              Duas aplicações financeiras têm resultados mensais (em %):
              A: 1,0; 1,2; 0,8; 1,1; 0,9 e B: 0,5; 2,0; 0,3; 1,8; 1,4.
              Ambas têm média igual. Qual é menos arriscada?
            </p>
          }
          options={[
            { letter: "a", text: "Aplicação A (menor desvio padrão)", correct: true },
            { letter: "b", text: "Aplicação B (maior retorno máximo)" },
            { letter: "c", text: "São equivalentes em risco" },
            { letter: "d", text: "Aplicação B (menor moda)" },
          ]}
          resolution={
            <>
              <p>Média de A e B = 1,0%. Variância A ≈ 0,024; Variância B ≈ 0,434.</p>
              <p>Aplicação A tem desvio padrão muito menor → menor risco (volatilidade).</p>
            </>
          }
        />
      </section>
    </article>
  );
}
