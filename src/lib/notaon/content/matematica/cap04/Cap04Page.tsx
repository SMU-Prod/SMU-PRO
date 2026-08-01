"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap04Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 4</span>
          <h1>Juros Simples e Compostos</h1>
          <p>
            Entenda como o dinheiro cresce ao longo do tempo com juros simples
            (crescimento linear) e juros compostos (crescimento exponencial).
            Domine as fórmulas e saiba identificar cada regime em situações reais.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceitos Base</span>
        <h2>1. Vocabulário Financeiro Essencial</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Termo</th><th>Símbolo</th><th>Definição</th></tr>
            </thead>
            <tbody>
              <tr><td>Capital</td><td>C</td><td>Valor inicial investido ou emprestado (principal)</td></tr>
              <tr><td>Taxa de juros</td><td>i</td><td>Razão do rendimento por período (ex.: 2% ao mês → i = 0,02)</td></tr>
              <tr><td>Tempo</td><td>t (ou n)</td><td>Número de períodos (meses, anos…)</td></tr>
              <tr><td>Juros</td><td>J</td><td>Remuneração gerada pelo capital</td></tr>
              <tr><td>Montante</td><td>M</td><td>Capital + Juros = valor final</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight warning">
          <h3>Atenção às unidades de tempo e taxa</h3>
          <p>
            A taxa e o tempo devem estar sempre na <strong>mesma unidade</strong>.
            Taxa mensal com tempo em anos → converta!
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Juros Simples</span>
        <h2>2. Regime de Juros Simples</h2>
        <p>
          No regime de juros simples, os juros são calculados sempre sobre
          o <strong>capital inicial</strong> — o montante cresce linearmente com o tempo.
        </p>
        <div className="math-block">
          <h3>Fórmulas fundamentais</h3>
          <M block={true}>{"J = C \\cdot i \\cdot t"}</M>
          <M block={true}>{"M = C + J = C \\cdot (1 + i \\cdot t)"}</M>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 380 180" width="380" height="180" aria-label="Crescimento linear — juros simples">
            <line x1="40" y1="20" x2="40" y2="155" stroke="#374151" strokeWidth="1.5"/>
            <line x1="40" y1="155" x2="360" y2="155" stroke="#374151" strokeWidth="1.5"/>
            <polygon points="360,155 350,150 350,160" fill="#374151"/>
            <polygon points="40,20 35,30 45,30" fill="#374151"/>
            <text x="365" y="158" fontSize="12" fill="#374151">t</text>
            <text x="30" y="17" fontSize="12" fill="#374151">M</text>
            {/* Reta JS */}
            <line x1="40" y1="140" x2="340" y2="40" stroke="#16a34a" strokeWidth="2.5"/>
            {/* Pontos */}
            <circle cx="40" cy="140" r="4" fill="#16a34a"/>
            <circle cx="140" cy="107" r="4" fill="#16a34a"/>
            <circle cx="240" cy="73" r="4" fill="#16a34a"/>
            <circle cx="340" cy="40" r="4" fill="#16a34a"/>
            {/* Labels */}
            <text x="40" y="153" textAnchor="middle" fontSize="10" fill="#6b7280">0</text>
            <text x="140" y="168" textAnchor="middle" fontSize="10" fill="#6b7280">1</text>
            <text x="240" y="168" textAnchor="middle" fontSize="10" fill="#6b7280">2</text>
            <text x="340" y="168" textAnchor="middle" fontSize="10" fill="#6b7280">3</text>
            <text x="32" y="143" textAnchor="end" fontSize="10" fill="#16a34a">C</text>
            <text x="200" y="30" textAnchor="middle" fontSize="12" fill="#16a34a" fontWeight="700">M = C(1+it)</text>
          </svg>
          <figcaption>Juros simples: montante cresce linearmente (linha reta)</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Exemplo resolvido</h3>
          <p>Capital de R$2.000 aplicado a 3% a.m. por 5 meses:</p>
          <M block={true}>{"J = 2000 \\times 0{,}03 \\times 5 = 300"}</M>
          <M block={true}>{"M = 2000 + 300 = 2300 \\text{ ou } M = 2000 \\times (1 + 0{,}03 \\times 5) = 2300"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Juros Compostos</span>
        <h2>3. Regime de Juros Compostos</h2>
        <p>
          Nos juros compostos, os juros de cada período são incorporados ao capital
          e passam a gerar novos juros — o famoso <strong>"juros sobre juros"</strong>.
          O montante cresce de forma exponencial.
        </p>
        <div className="math-block">
          <h3>Fórmula do montante</h3>
          <M block={true}>{"M = C \\cdot (1 + i)^{t}"}</M>
          <p>Onde <M>{"(1+i)"}</M> é o <strong>fator de multiplicação</strong> por período.</p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 380 180" width="380" height="180" aria-label="Crescimento exponencial — juros compostos">
            <line x1="40" y1="20" x2="40" y2="155" stroke="#374151" strokeWidth="1.5"/>
            <line x1="40" y1="155" x2="360" y2="155" stroke="#374151" strokeWidth="1.5"/>
            <polygon points="360,155 350,150 350,160" fill="#374151"/>
            <polygon points="40,20 35,30 45,30" fill="#374151"/>
            <text x="365" y="158" fontSize="12" fill="#374151">t</text>
            <text x="30" y="17" fontSize="12" fill="#374151">M</text>
            {/* Curva exponencial (JS) */}
            <path d="M 40 140 Q 120 130 180 110 Q 250 85 340 30" stroke="#dc2626" strokeWidth="2.5" fill="none"/>
            {/* Reta simples de referência */}
            <line x1="40" y1="140" x2="340" y2="68" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="5,4"/>
            {/* Pontos curva */}
            <circle cx="40" cy="140" r="4" fill="#dc2626"/>
            <circle cx="140" cy="118" r="4" fill="#dc2626"/>
            <circle cx="240" cy="82" r="4" fill="#dc2626"/>
            <circle cx="340" cy="30" r="4" fill="#dc2626"/>
            <text x="32" y="143" textAnchor="end" fontSize="10" fill="#dc2626">C</text>
            <text x="230" y="22" textAnchor="middle" fontSize="11" fill="#dc2626" fontWeight="700">M = C(1+i)ᵗ</text>
            <text x="220" y="72" textAnchor="middle" fontSize="10" fill="#16a34a">JS (referência)</text>
          </svg>
          <figcaption>Juros compostos (curva vermelha) vs. simples (reta tracejada verde)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparação</span>
        <h2>4. Comparação entre os Dois Regimes</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Juros Simples</th>
                <th>Juros Compostos</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Base de cálculo</td><td>Capital inicial (fixo)</td><td>Montante do período anterior</td></tr>
              <tr><td>Crescimento</td><td>Linear</td><td>Exponencial</td></tr>
              <tr><td>Fórmula de M</td><td><M>{"C(1+it)"}</M></td><td><M>{"C(1+i)^t"}</M></td></tr>
              <tr><td>Para t=1</td><td>Igual ao composto</td><td>Igual ao simples</td></tr>
              <tr><td>Para t&gt;1</td><td>Menor montante</td><td>Maior montante</td></tr>
              <tr><td>Aplicação típica</td><td>Curto prazo, títulos</td><td>Longo prazo, financiamentos</td></tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Simulação numérica — R$ 1.000 a 10% a.a.</h3>
          <div className="lesson-table-wrap">
            <table className="lesson-table">
              <thead>
                <tr><th>Período (anos)</th><th>Juros Simples (M)</th><th>Juros Compostos (M)</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>R$ 1.100,00</td><td>R$ 1.100,00</td></tr>
                <tr><td>2</td><td>R$ 1.200,00</td><td>R$ 1.210,00</td></tr>
                <tr><td>5</td><td>R$ 1.500,00</td><td>R$ 1.610,51</td></tr>
                <tr><td>10</td><td>R$ 2.000,00</td><td>R$ 2.593,74</td></tr>
                <tr><td>20</td><td>R$ 3.000,00</td><td>R$ 6.727,50</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Taxa Equivalente</span>
        <h2>5. Taxa Equivalente e Conversão de Taxas</h2>
        <p>
          Duas taxas são equivalentes quando, aplicadas ao mesmo capital
          pelo mesmo período total, produzem o mesmo montante.
        </p>
        <div className="math-block">
          <h3>Juros simples — taxas proporcionais</h3>
          <M block={true}>{"i_{\\text{anual}} = 12 \\times i_{\\text{mensal}}"}</M>
        </div>
        <div className="math-block">
          <h3>Juros compostos — taxas equivalentes</h3>
          <M block={true}>{"(1 + i_a)^1 = (1 + i_m)^{12}"}</M>
          <M block={true}>{"i_m = \\sqrt[12]{1 + i_a} - 1"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Desconto</span>
        <h2>6. Desconto Simples e Comercial</h2>
        <p>
          Desconto é a diferença entre o valor futuro (nominal) e o valor presente
          (atual) de um título.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>Racional</span>
            <h3>Desconto Racional (por dentro)</h3>
            <M block={true}>{"d_r = \\frac{N \\cdot i \\cdot t}{1 + i \\cdot t}"}</M>
          </div>
          <div className="lesson-card">
            <span>Comercial</span>
            <h3>Desconto Comercial (por fora)</h3>
            <M block={true}>{"d_c = N \\cdot i \\cdot t"}</M>
            <p>N = valor nominal, i = taxa, t = tempo.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>7. Aplicações Práticas — Financiamentos</h2>
        <p>
          Em financiamentos (crédito, imóveis, veículos), o regime é quase sempre
          de juros compostos. A parcela fixa mensal é calculada pela fórmula da
          prestação constante (Tabela Price):
        </p>
        <M block={true}>{"P = C \\cdot \\frac{i(1+i)^n}{(1+i)^n - 1}"}</M>
        <p>Onde P é a prestação, C o capital, i a taxa mensal e n o número de parcelas.</p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">ENEM</span>
        <h2>8. Como o ENEM Aborda Juros</h2>
        <div className="lesson-highlight">
          <h3>Padrões frequentes</h3>
          <ul>
            <li>Calcular montante com JC usando <M>{"(1+i)^t"}</M> e potências dadas.</li>
            <li>Comparar investimentos de JC e JS para o mesmo capital.</li>
            <li>Problemas de parcelamento e financiamento (taxa efetiva).</li>
            <li>Reajuste de salário ou preço ao longo de vários anos (JC encadeado).</li>
          </ul>
        </div>
        <div className="lesson-highlight warning">
          <h3>Dica de prova</h3>
          <p>
            Quando o ENEM fala em "rendimento mensal de X% sobre o saldo", é
            <strong> juros compostos</strong>. Quando fala em "rendimento fixo de X%
            do valor inicial", é <strong>juros simples</strong>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fator de Acumulação</span>
        <h2>9. Tabela de Fatores de Acumulação</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Taxa (i)</th><th>t=1</th><th>t=2</th><th>t=3</th><th>t=5</th><th>t=10</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1% a.m.</td>
                <td><M>{"1{,}0100"}</M></td>
                <td><M>{"1{,}0201"}</M></td>
                <td><M>{"1{,}0303"}</M></td>
                <td><M>{"1{,}0510"}</M></td>
                <td><M>{"1{,}1046"}</M></td>
              </tr>
              <tr>
                <td>2% a.m.</td>
                <td><M>{"1{,}0200"}</M></td>
                <td><M>{"1{,}0404"}</M></td>
                <td><M>{"1{,}0612"}</M></td>
                <td><M>{"1{,}1041"}</M></td>
                <td><M>{"1{,}2190"}</M></td>
              </tr>
              <tr>
                <td>10% a.a.</td>
                <td><M>{"1{,}1000"}</M></td>
                <td><M>{"1{,}2100"}</M></td>
                <td><M>{"1{,}3310"}</M></td>
                <td><M>{"1{,}6105"}</M></td>
                <td><M>{"2{,}5937"}</M></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Mapa Mental — Juros Simples vs. Compostos</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>JS</span>
            <h3>Juros Simples</h3>
            <p><M>{"J = Cit"}</M></p>
            <p><M>{"M = C(1+it)"}</M></p>
            <p>Crescimento linear</p>
          </div>
          <div className="math-card">
            <span>JC</span>
            <h3>Juros Compostos</h3>
            <p><M>{"M = C(1+i)^t"}</M></p>
            <p>Crescimento exponencial</p>
          </div>
          <div className="math-card">
            <span>Eq.</span>
            <h3>Taxas Equiv. (JC)</h3>
            <p><M>{"(1+i_m)^{12} = 1+i_a"}</M></p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Montante com juros simples"
          statement={
            <p>
              Um capital de R$5.000 é aplicado a 4% ao mês por 8 meses em juros simples.
              Qual é o montante?
            </p>
          }
          options={[
            { letter: "a", text: "R$ 5.160" },
            { letter: "b", text: "R$ 6.600", correct: true },
            { letter: "c", text: "R$ 6.800" },
            { letter: "d", text: "R$ 7.000" },
          ]}
          resolution={
            <>
              <M block={true}>{"J = 5000 \\times 0{,}04 \\times 8 = 1600"}</M>
              <M block={true}>{"M = 5000 + 1600 = 6600"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Comparação entre regimes"
          statement={
            <p>
              R$10.000 aplicados a 5% a.a. por 3 anos. Qual regime gera mais juros?
              Calcule a diferença. (Use <M>{"1{,}05^3 = 1{,}1576"}</M>.)
            </p>
          }
          options={[
            { letter: "a", text: "JS: R$1.500 | JC: R$1.576 | Diferença: R$76", correct: true },
            { letter: "b", text: "JS: R$1.500 | JC: R$1.500 | Diferença: R$0" },
            { letter: "c", text: "JS: R$1.576 | JC: R$1.500 | Diferença: R$76" },
            { letter: "d", text: "JS: R$1.650 | JC: R$1.576 | Diferença: R$74" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\text{JS: } J = 10000 \\times 0{,}05 \\times 3 = 1500"}</M>
              <M block={true}>{"\\text{JC: } M = 10000 \\times 1{,}1576 \\Rightarrow J = 1576"}</M>
              <p>Diferença: <M>{"1576 - 1500 = 76"}</M>. JC gera R$76 a mais.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Taxa mensal equivalente"
          statement={
            <p>
              Uma taxa anual de 21% em juros compostos equivale a qual taxa mensal?
              (Use <M>{"\\sqrt[12]{1{,}21} \\approx 1{,}016"}</M>.)
            </p>
          }
          options={[
            { letter: "a", text: "1,0% a.m." },
            { letter: "b", text: "1,6% a.m.", correct: true },
            { letter: "c", text: "1,75% a.m." },
            { letter: "d", text: "2,1% a.m." },
          ]}
          resolution={
            <>
              <M block={true}>{"(1+i_m)^{12} = 1{,}21 \\Rightarrow 1+i_m = \\sqrt[12]{1{,}21} \\approx 1{,}016"}</M>
              <M block={true}>{"i_m \\approx 1{,}6\\% \\text{ a.m.}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Financiamento de celular"
          statement={
            <p>
              Um celular de R$3.000 é parcelado em 12 vezes sem entrada.
              A loja cobra 3% a.m. em juros compostos. Qual é o montante total?
              (Use <M>{"1{,}03^{12} \\approx 1{,}4258"}</M>.)
            </p>
          }
          options={[
            { letter: "a", text: "R$ 4.080" },
            { letter: "b", text: "R$ 4.277,40", correct: true },
            { letter: "c", text: "R$ 3.900" },
            { letter: "d", text: "R$ 4.500" },
          ]}
          resolution={
            <>
              <M block={true}>{"M = 3000 \\times 1{,}4258 = 4277{,}40"}</M>
              <p>O cliente pagará R$4.277,40 no total, R$1.277,40 em juros.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Poupança e inflação"
          statement={
            <p>
              Uma família investe R$1.000 na poupança que rende 0,5% a.m. (JC).
              Após 12 meses, o montante é <M>{"1000 \\times 1{,}0617 = 1.061{,}70"}</M>.
              Se a inflação no período foi de 4,5%, qual foi o ganho real?
            </p>
          }
          options={[
            { letter: "a", text: "6,17% — acima da inflação" },
            { letter: "b", text: "1,61% — acima da inflação", correct: true },
            { letter: "c", text: "−4,5% — abaixo da inflação" },
            { letter: "d", text: "0% — empatou com a inflação" },
          ]}
          resolution={
            <>
              <p>Rentabilidade nominal: <M>{"6{,}17\\%"}</M>. Inflação: <M>{"4{,}5\\%"}</M>.</p>
              <M block={true}>{"\\text{Taxa real} = \\frac{1{,}0617}{1{,}045} - 1 \\approx 0{,}0161 = 1{,}61\\%"}</M>
              <p>Há ganho real positivo, mas pequeno.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
