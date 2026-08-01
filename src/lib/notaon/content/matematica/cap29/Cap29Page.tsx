"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap29Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 29</span>
          <h1>Estatística: Medidas de Tendência Central</h1>
          <p>
            Calcule média, mediana e moda para dados simples e agrupados.
            Entenda quando cada medida é mais adequada e como interpretar
            gráficos estatísticos básicos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Introdução</span>
        <h2>1. Conceitos Básicos de Estatística</h2>
        <p>
          A <strong>estatística descritiva</strong> resume e descreve um conjunto de dados.
          As <strong>medidas de tendência central</strong> indicam o "centro" ou
          valor "típico" dos dados.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Medida</th><th>Definição</th><th>Sensível a outliers?</th></tr>
            </thead>
            <tbody>
              <tr><td>Média</td><td>Soma / quantidade</td><td>Sim</td></tr>
              <tr><td>Mediana</td><td>Valor central ordenado</td><td>Não</td></tr>
              <tr><td>Moda</td><td>Valor mais frequente</td><td>Não</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Média Aritmética</span>
        <h2>2. Média Aritmética Simples e Ponderada</h2>
        <M block={true}>{"\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n} = \\frac{1}{n}\\sum_{i=1}^n x_i"}</M>
        <M block={true}>{"\\bar{x}_P = \\frac{x_1 w_1 + x_2 w_2 + \\cdots + x_n w_n}{w_1 + w_2 + \\cdots + w_n} = \\frac{\\sum x_i w_i}{\\sum w_i}"}</M>

        <div className="lesson-highlight">
          <h3>Exemplo — média simples</h3>
          <p>Notas: 6, 8, 7, 9, 5 → <M>{"\\bar{x} = \\frac{35}{5} = 7"}</M></p>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo — média ponderada</h3>
          <p>Prova 1 (peso 3): nota 7; Prova 2 (peso 5): nota 9; Trabalho (peso 2): nota 6.</p>
          <M block={true}>{"\\bar{x}_P = \\frac{7\\times3 + 9\\times5 + 6\\times2}{3+5+2} = \\frac{21+45+12}{10} = \\frac{78}{10} = 7{,}8"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mediana</span>
        <h2>3. Mediana</h2>
        <p>
          A <strong>mediana</strong> é o valor central quando os dados estão ordenados.
        </p>
        <M block={true}>{"\\text{Md} = \\begin{cases} x_{(n+1)/2} & \\text{se n ímpar} \\\\ \\dfrac{x_{n/2} + x_{n/2+1}}{2} & \\text{se n par} \\end{cases}"}</M>

        <div className="lesson-highlight">
          <h3>Exemplo — n ímpar</h3>
          <p>Dados: 3, 5, 7, 9, 11 → Md = 7 (3º valor)</p>
        </div>
        <div className="lesson-highlight">
          <h3>Exemplo — n par</h3>
          <p>Dados: 2, 4, 6, 8 → <M>{"\\text{Md} = \\frac{4+6}{2} = 5"}</M></p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Moda</span>
        <h2>4. Moda</h2>
        <p>
          A <strong>moda</strong> é o valor que ocorre com maior frequência.
          Uma série pode ser amodal, unimodal, bimodal ou multimodal.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Dados</th><th>Moda</th><th>Tipo</th></tr>
            </thead>
            <tbody>
              <tr><td>1, 2, 3, 4, 5</td><td>Nenhuma</td><td>Amodal</td></tr>
              <tr><td>1, 2, 2, 3, 4</td><td>2</td><td>Unimodal</td></tr>
              <tr><td>1, 2, 2, 3, 3, 4</td><td>2 e 3</td><td>Bimodal</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dados Agrupados</span>
        <h2>5. Média para Dados Agrupados em Tabela</h2>
        <M block={true}>{"\\bar{x} = \\frac{\\sum f_i \\cdot x_i}{\\sum f_i}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Nota (xᵢ)</th><th>Frequência (fᵢ)</th><th>fᵢ · xᵢ</th></tr>
            </thead>
            <tbody>
              <tr><td>5</td><td>3</td><td>15</td></tr>
              <tr><td>6</td><td>5</td><td>30</td></tr>
              <tr><td>7</td><td>8</td><td>56</td></tr>
              <tr><td>8</td><td>6</td><td>48</td></tr>
              <tr><td>9</td><td>3</td><td>27</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>25</strong></td><td><strong>176</strong></td></tr>
            </tbody>
          </table>
        </div>
        <M block={true}>{"\\bar{x} = \\frac{176}{25} = 7{,}04"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dados por Intervalo</span>
        <h2>6. Média para Classes (Dados Contínuos)</h2>
        <p>
          Usa-se o <strong>ponto médio</strong> de cada classe como representante:
        </p>
        <M block={true}>{"\\bar{x} = \\frac{\\sum f_i \\cdot m_i}{\\sum f_i} \\quad (m_i = \\text{ponto médio da classe})"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráficos</span>
        <h2>7. Representação Gráfica dos Dados</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 360 160" width="360" height="160" aria-label="Histograma de dados">
            <line x1="40" y1="20" x2="40" y2="130" stroke="#374151" strokeWidth="1.5"/>
            <line x1="30" y1="120" x2="340" y2="120" stroke="#374151" strokeWidth="1.5"/>
            {[{ h: 30, x: 60, lbl: "5" }, { h: 50, x: 110, lbl: "6" }, { h: 80, x: 160, lbl: "7" }, { h: 60, x: 210, lbl: "8" }, { h: 30, x: 260, lbl: "9" }].map(({ h, x, lbl }) => (
              <g key={lbl}>
                <rect x={x - 20} y={120 - h} width="40" height={h} fill="#3b82f6" opacity="0.8" rx="2"/>
                <text x={x} y={133} textAnchor="middle" fontSize="11" fill="#374151">{lbl}</text>
                <text x={x} y={120 - h - 4} textAnchor="middle" fontSize="10" fill="#374151">{Math.round(h * 0.25 * 2)}</text>
              </g>
            ))}
            <text x="190" y="150" textAnchor="middle" fontSize="11" fill="#374151">Histograma de frequência</text>
          </svg>
          <figcaption>Histograma: barras representam frequências de cada valor ou classe</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráfico de Barras e Média</span>
        <h2>8. Média Visualizada em Gráfico de Barras</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Gráfico de barras com linha da média">
            <rect x="10" y="10" width="680" height="200" rx="10" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1.5"/>
            {/* Eixos */}
            <line x1="70" y1="170" x2="650" y2="170" stroke="#1e3a8a" strokeWidth="2"/>
            <line x1="70" y1="30" x2="70" y2="170" stroke="#1e3a8a" strokeWidth="2"/>
            {/* Barras: alturas em px para valores 4, 7, 5, 9, 5 (média = 6) */}
            {[
              { label: "Jan", value: 4, h: 56 },
              { label: "Fev", value: 7, h: 98 },
              { label: "Mar", value: 5, h: 70 },
              { label: "Abr", value: 9, h: 126 },
              { label: "Mai", value: 5, h: 70 },
            ].map(({ label, value, h }, i) => {
              const x = 130 + i * 108;
              return (
                <g key={label}>
                  <rect x={x - 35} y={170 - h} width="70" height={h} rx="4" fill="#3b82f6" fillOpacity="0.85"/>
                  <text x={x} y={170 - h - 6} textAnchor="middle" fontSize="13" fill="#1e40af" fontWeight="700">{value}</text>
                  <text x={x} y="187" textAnchor="middle" fontSize="12" fill="#1e3a8a">{label}</text>
                </g>
              );
            })}
            {/* Linha da média (6) → h=84 */}
            <line x1="75" y1="86" x2="645" y2="86" stroke="#facc15" strokeWidth="2.5" strokeDasharray="10,5"/>
            <text x="655" y="90" fontSize="12" fill="#92400e" fontWeight="700">x̄=6</text>
            {/* Rótulo eixo Y */}
            <text x="60" y="170" textAnchor="end" fontSize="11" fill="#374151">0</text>
            <text x="60" y="86" textAnchor="end" fontSize="11" fill="#374151">6</text>
            <text x="350" y="210" textAnchor="middle" fontSize="12" fill="#1e40af">Linha tracejada amarela = média aritmética (x̄ = 6)</text>
          </svg>
          <figcaption>Gráfico de barras: a linha tracejada indica a média; barras acima e abaixo se equilibram</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Quando Usar Cada Medida</span>
        <h2>9. Critérios de Escolha da Medida</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Situação</th><th>Medida recomendada</th></tr>
            </thead>
            <tbody>
              <tr><td>Distribuição simétrica</td><td>Média (eficiente e intuitiva)</td></tr>
              <tr><td>Dados com outliers (ex: salários)</td><td>Mediana</td></tr>
              <tr><td>Dados qualitativos ou categóricos</td><td>Moda</td></tr>
              <tr><td>Dados bimodais</td><td>Moda (ou moda + outro)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Relações</span>
        <h2>10. Relação entre Média, Mediana e Moda</h2>
        <div className="lesson-highlight">
          <h3>Distribuição simétrica</h3>
          <M block={true}>{"\\text{Média} = \\text{Mediana} = \\text{Moda}"}</M>
        </div>
        <div className="lesson-highlight">
          <h3>Fórmula de Pearson (aproximada)</h3>
          <M block={true}>{"\\text{Moda} \\approx 3 \\times \\text{Mediana} - 2 \\times \\text{Média}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>11. Resumo — Medidas de Tendência Central</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>x̄</span>
            <h3>Média</h3>
            <M block={true}>{"\\bar{x} = \\frac{\\sum x_i}{n}"}</M>
          </div>
          <div className="math-card">
            <span>Md</span>
            <h3>Mediana</h3>
            <M>{"\\text{valor central}"}</M>
          </div>
          <div className="math-card">
            <span>Mo</span>
            <h3>Moda</h3>
            <M>{"\\text{mais frequente}"}</M>
          </div>
          <div className="math-card">
            <span>x̄ₚ</span>
            <h3>Média ponderada</h3>
            <M block={true}>{"\\frac{\\sum x_i w_i}{\\sum w_i}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Média simples"
          statement={
            <p>
              As notas de um aluno foram: 7, 8, 6, 9, 5. Qual é a média?
            </p>
          }
          options={[
            { letter: "a", text: "6,5" },
            { letter: "b", text: "7", correct: true },
            { letter: "c", text: "7,5" },
            { letter: "d", text: "8" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\bar{x} = \\frac{7+8+6+9+5}{5} = \\frac{35}{5} = 7"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Mediana"
          statement={
            <p>Encontre a mediana do conjunto: 12, 3, 8, 5, 15, 7, 10.</p>
          }
          options={[
            { letter: "a", text: "7" },
            { letter: "b", text: "8", correct: true },
            { letter: "c", text: "10" },
            { letter: "d", text: "9" },
          ]}
          resolution={
            <>
              <p>Ordenados: 3, 5, 7, <strong>8</strong>, 10, 12, 15 → Mediana = 8 (4º elemento de 7)</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Média ponderada"
          statement={
            <p>
              Um aluno teve: P1 = 6 (peso 2), P2 = 8 (peso 3), P3 = 7 (peso 1)
              e trabalho = 9 (peso 4). Qual é sua média ponderada final?
            </p>
          }
          options={[
            { letter: "a", text: "7,4" },
            { letter: "b", text: "7,8", correct: true },
            { letter: "c", text: "8,0" },
            { letter: "d", text: "7,5" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\bar{x}_P = \\frac{6\\times2 + 8\\times3 + 7\\times1 + 9\\times4}{2+3+1+4} = \\frac{12+24+7+36}{10} = \\frac{79}{10} = 7{,}9"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Salário mediano"
          statement={
            <p>
              Os salários mensais de 7 funcionários de uma empresa são (em mil R$):
              3, 3, 4, 4, 4, 6, 30. Qual medida melhor representa o salário "típico"?
            </p>
          }
          options={[
            { letter: "a", text: "Média = R$ 7.714 (atípica por conta do R$ 30.000)" },
            { letter: "b", text: "Mediana = R$ 4.000 (mais representativa)", correct: true },
            { letter: "c", text: "Moda = R$ 4.000" },
            { letter: "d", text: "Média e mediana são iguais" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\text{Média} = \\frac{3+3+4+4+4+6+30}{7} \\approx 7{,}71 \\text{ mil}"}</M>
              <p>Mediana (4º valor) = 4 mil. A mediana ignora o outlier de 30 mil.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Temperatura média"
          statement={
            <p>
              As temperaturas diárias de uma semana foram: 18, 22, 25, 20, 23, 21, 19°C.
              Qual é a temperatura média e mediana?
            </p>
          }
          options={[
            { letter: "a", text: "Média = 21,1°C; Mediana = 21°C", correct: true },
            { letter: "b", text: "Média = 22°C; Mediana = 22°C" },
            { letter: "c", text: "Média = 21°C; Mediana = 23°C" },
            { letter: "d", text: "Média = 20°C; Mediana = 20°C" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\bar{x} = \\frac{18+22+25+20+23+21+19}{7} = \\frac{148}{7} \\approx 21{,}1°C"}</M>
              <p>Ordenados: 18, 19, 20, <strong>21</strong>, 22, 23, 25 → Mediana = 21°C</p>
            </>
          }
        />
      </section>
    </article>
  );
}
