"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap03Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 3</span>
          <h1>Razão, Proporção e Regra de Três</h1>
          <p>
            Domine os conceitos de razão e proporção, as propriedades
            fundamentais das proporções e a aplicação da regra de três
            simples e composta em situações do cotidiano e do ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Razão</span>
        <h2>1. Razão — Comparação entre Grandezas</h2>
        <p>
          A <strong>razão</strong> entre dois números a e b (<M>{"b \\neq 0"}</M>)
          é o quociente <M>{"\\dfrac{a}{b}"}</M>, lido "a está para b".
          Indica quantas vezes a contém b (ou a fração de a em relação a b).
        </p>
        <M block={true}>{"r = \\frac{a}{b}, \\quad b \\neq 0"}</M>

        <div className="lesson-highlight">
          <h3>Exemplos do cotidiano</h3>
          <ul>
            <li>
              Escala: um mapa na escala 1:100.000 tem razão <M>{"\\dfrac{1}{100.000}"}</M>
              — 1 cm no mapa representa 100.000 cm = 1 km real.
            </li>
            <li>
              Velocidade média: percorrer 240 km em 3 h → razão <M>{"\\dfrac{240}{3} = 80 \\text{ km/h}"}</M>.
            </li>
            <li>
              Porcentagem: 30% = razão <M>{"\\dfrac{30}{100} = 0{,}3"}</M>.
            </li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Proporção</span>
        <h2>2. Proporção — Igualdade de Razões</h2>
        <p>
          Uma <strong>proporção</strong> é a igualdade entre duas razões:
        </p>
        <M block={true}>{"\\frac{a}{b} = \\frac{c}{d} \\quad \\text{ou} \\quad a : b = c : d"}</M>
        <p>
          Os termos <em>a</em> e <em>d</em> são os <strong>extremos</strong>;
          <em>b</em> e <em>c</em> são os <strong>meios</strong>.
        </p>

        <div className="math-block">
          <h3>Propriedade fundamental — produto dos meios e extremos</h3>
          <M block={true}>{"\\frac{a}{b} = \\frac{c}{d} \\iff a \\cdot d = b \\cdot c"}</M>
          <p>O produto dos extremos é igual ao produto dos meios.</p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 380 120" width="380" height="120" aria-label="Propriedade fundamental da proporção">
            <rect x="10" y="15" width="360" height="90" rx="12" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="1"/>
            {/* Fração esquerda */}
            <text x="80" y="55" textAnchor="middle" fontSize="26" fontWeight="700" fill="#1e40af">a</text>
            <line x1="55" y1="65" x2="105" y2="65" stroke="#1e40af" strokeWidth="2"/>
            <text x="80" y="85" textAnchor="middle" fontSize="26" fontWeight="700" fill="#1e40af">b</text>
            {/* = */}
            <text x="190" y="73" textAnchor="middle" fontSize="24" fill="#374151">=</text>
            {/* Fração direita */}
            <text x="295" y="55" textAnchor="middle" fontSize="26" fontWeight="700" fill="#1e40af">c</text>
            <line x1="270" y1="65" x2="320" y2="65" stroke="#1e40af" strokeWidth="2"/>
            <text x="295" y="85" textAnchor="middle" fontSize="26" fontWeight="700" fill="#1e40af">d</text>
            {/* Setas dos extremos */}
            <path d="M 80 90 Q 190 110 295 90" stroke="#dc2626" strokeWidth="1.5" fill="none" strokeDasharray="4,3"/>
            <text x="190" y="108" textAnchor="middle" fontSize="10" fill="#dc2626">extremos: a × d</text>
            {/* Setas dos meios */}
            <path d="M 80 35 Q 190 18 295 35" stroke="#16a34a" strokeWidth="1.5" fill="none" strokeDasharray="4,3"/>
            <text x="190" y="14" textAnchor="middle" fontSize="10" fill="#16a34a">meios: b × c</text>
          </svg>
          <figcaption>Produto dos extremos (a×d) = Produto dos meios (b×c)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Propriedades</span>
        <h2>3. Propriedades das Proporções</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Propriedade</th><th>Formulação</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Permutação dos meios</td>
                <td><M>{"\\frac{a}{b} = \\frac{c}{d} \\Rightarrow \\frac{a}{c} = \\frac{b}{d}"}</M></td>
              </tr>
              <tr>
                <td>Permutação dos extremos</td>
                <td><M>{"\\frac{a}{b} = \\frac{c}{d} \\Rightarrow \\frac{d}{b} = \\frac{c}{a}"}</M></td>
              </tr>
              <tr>
                <td>Inversão</td>
                <td><M>{"\\frac{a}{b} = \\frac{c}{d} \\Rightarrow \\frac{b}{a} = \\frac{d}{c}"}</M></td>
              </tr>
              <tr>
                <td>Adição dos termos</td>
                <td><M>{"\\frac{a}{b} = \\frac{c}{d} \\Rightarrow \\frac{a+b}{b} = \\frac{c+d}{d}"}</M></td>
              </tr>
              <tr>
                <td>Soma de razões iguais</td>
                <td><M>{"\\frac{a}{b} = \\frac{c}{d} = \\frac{a+c}{b+d}"}</M></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Grandezas</span>
        <h2>4. Grandezas Diretamente e Inversamente Proporcionais</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>Direta</span>
            <h3>Diretamente Proporcional</h3>
            <p>Quando uma grandeza aumenta, a outra também aumenta na mesma razão.</p>
            <M block={true}>{"\\frac{y_1}{y_2} = \\frac{x_1}{x_2} \\iff y = kx"}</M>
            <p>Exemplos: distância × tempo (velocidade fixa), preço × quantidade.</p>
          </div>
          <div className="lesson-card">
            <span>Inversa</span>
            <h3>Inversamente Proporcional</h3>
            <p>Quando uma grandeza aumenta, a outra diminui na mesma razão.</p>
            <M block={true}>{"y_1 \\cdot x_1 = y_2 \\cdot x_2 \\iff y = \\frac{k}{x}"}</M>
            <p>Exemplos: velocidade × tempo (distância fixa), número de operários × dias.</p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 380 180" width="380" height="180" aria-label="Direta vs inversa">
            {/* Eixos esquerda */}
            <line x1="30" y1="20" x2="30" y2="160" stroke="#374151" strokeWidth="1.5"/>
            <line x1="30" y1="160" x2="175" y2="160" stroke="#374151" strokeWidth="1.5"/>
            <text x="100" y="14" textAnchor="middle" fontSize="12" fill="#16a34a" fontWeight="700">Direta (y = kx)</text>
            <line x1="30" y1="160" x2="175" y2="30" stroke="#16a34a" strokeWidth="2.5"/>
            <text x="30" y="170" textAnchor="middle" fontSize="10" fill="#6b7280">x</text>
            <text x="175" y="170" textAnchor="middle" fontSize="10" fill="#6b7280">→</text>
            <text x="18" y="20" fontSize="10" fill="#6b7280">y↑</text>
            {/* Eixos direita */}
            <line x1="210" y1="20" x2="210" y2="160" stroke="#374151" strokeWidth="1.5"/>
            <line x1="210" y1="160" x2="360" y2="160" stroke="#374151" strokeWidth="1.5"/>
            <text x="285" y="14" textAnchor="middle" fontSize="12" fill="#dc2626" fontWeight="700">Inversa (y = k/x)</text>
            <path d="M 215 30 Q 240 60 270 100 Q 295 130 355 150" stroke="#dc2626" strokeWidth="2.5" fill="none"/>
            <text x="210" y="170" textAnchor="middle" fontSize="10" fill="#6b7280">x</text>
            <text x="360" y="170" textAnchor="middle" fontSize="10" fill="#6b7280">→</text>
            <text x="198" y="20" fontSize="10" fill="#6b7280">y↑</text>
          </svg>
          <figcaption>Gráfico da proporcionalidade direta (reta) vs. inversa (hipérbole)</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Regra de Três</span>
        <h2>5. Regra de Três Simples</h2>
        <p>
          Usada quando há duas grandezas relacionadas. Monta-se uma tabela,
          identifica-se o tipo (direta ou inversa) e resolve-se com proporção.
        </p>
        <div className="math-block">
          <h3>Passo a passo</h3>
          <ol>
            <li>Montar a tabela com os dados conhecidos e a incógnita x.</li>
            <li>Verificar se as grandezas são direta ou inversamente proporcionais.</li>
            <li>
              <strong>Direta:</strong> <M>{"\\dfrac{a}{b} = \\dfrac{c}{x}"}</M>
              → <M>{"x = \\dfrac{b \\cdot c}{a}"}</M>
            </li>
            <li>
              <strong>Inversa:</strong> <M>{"a \\cdot b = c \\cdot x"}</M>
              → <M>{"x = \\dfrac{a \\cdot b}{c}"}</M>
            </li>
          </ol>
        </div>

        <div className="lesson-highlight">
          <h3>Exemplo — direta</h3>
          <p>Se 5 kg de arroz custam R$25, quanto custam 8 kg?</p>
          <M block={true}>{"\\frac{5}{25} = \\frac{8}{x} \\Rightarrow x = \\frac{25 \\cdot 8}{5} = 40"}</M>
          <p>8 kg custam R$40.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Regra de Três Composta</span>
        <h2>6. Regra de Três Composta</h2>
        <p>
          Quando há <em>três ou mais</em> grandezas relacionadas. Cada grandeza
          é analisada individualmente (direta ou inversa) em relação à grandeza procurada.
        </p>
        <div className="math-block">
          <h3>Procedimento</h3>
          <ol>
            <li>Fixe a grandeza procurada (x) e analise cada outra em relação a ela.</li>
            <li>Se direta, escreva a razão na mesma ordem. Se inversa, inverta a razão.</li>
            <li>Multiplique todas as razões:</li>
          </ol>
          <M block={true}>{"x = a \\cdot \\frac{b_1}{b_2} \\cdot \\frac{c_1}{c_2} \\cdot \\ldots"}</M>
        </div>

        <div className="lesson-highlight">
          <h3>Exemplo — composta</h3>
          <p>
            8 operários constroem um muro em 6 dias trabalhando 9h/dia.
            Quantos dias levarão 12 operários trabalhando 6h/dia?
          </p>
          <div className="lesson-table-wrap">
            <table className="lesson-table">
              <thead>
                <tr><th>Grandeza</th><th>Antes</th><th>Depois</th><th>Tipo c/ dias</th></tr>
              </thead>
              <tbody>
                <tr><td>Operários</td><td>8</td><td>12</td><td>Inversa (mais op. → menos dias)</td></tr>
                <tr><td>Horas/dia</td><td>9</td><td>6</td><td>Inversa (menos h → mais dias)</td></tr>
                <tr><td>Dias</td><td>6</td><td>x</td><td>—</td></tr>
              </tbody>
            </table>
          </div>
          <M block={true}>{"x = 6 \\cdot \\frac{8}{12} \\cdot \\frac{9}{6} = 6 \\cdot \\frac{2}{3} \\cdot \\frac{3}{2} = 6 \\text{ dias}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Porcentagem</span>
        <h2>7. Porcentagem como Razão</h2>
        <p>
          Porcentagem é uma razão com denominador 100:
        </p>
        <M block={true}>{"p\\% = \\frac{p}{100}"}</M>

        <div className="math-block">
          <h3>Cálculo de porcentagem de um valor</h3>
          <M block={true}>{"\\text{Parte} = \\frac{p}{100} \\times \\text{Total}"}</M>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Porcentagem</th><th>Fração</th><th>Decimal</th></tr>
            </thead>
            <tbody>
              <tr><td>10%</td><td><M>{"\\frac{1}{10}"}</M></td><td>0,1</td></tr>
              <tr><td>25%</td><td><M>{"\\frac{1}{4}"}</M></td><td>0,25</td></tr>
              <tr><td>33,3%</td><td><M>{"\\frac{1}{3}"}</M></td><td>0,333…</td></tr>
              <tr><td>50%</td><td><M>{"\\frac{1}{2}"}</M></td><td>0,5</td></tr>
              <tr><td>75%</td><td><M>{"\\frac{3}{4}"}</M></td><td>0,75</td></tr>
              <tr><td>100%</td><td><M>{"\\frac{1}{1}"}</M></td><td>1</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Escala</span>
        <h2>8. Escala em Mapas e Plantas</h2>
        <p>
          Escala é a razão entre a medida no desenho e a medida real:
        </p>
        <M block={true}>{"\\text{Escala} = \\frac{\\text{medida no mapa}}{\\text{medida real}}"}</M>

        <div className="math-block">
          <h3>Exemplo</h3>
          <p>Escala 1 : 50.000 → 1 cm no mapa = 50.000 cm = 500 m = 0,5 km real.</p>
          <M block={true}>{"\\text{Distância real} = \\text{medida no mapa} \\times \\text{denominador da escala}"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Média Proporcional</span>
        <h2>9. Média Proporcional (Geométrica)</h2>
        <p>
          A média geométrica (proporcional) entre a e b é o valor m tal que
          <M>{" \\dfrac{a}{m} = \\dfrac{m}{b}"}</M>:
        </p>
        <M block={true}>{"m^2 = a \\cdot b \\Rightarrow m = \\sqrt{a \\cdot b}"}</M>
        <p>Muito usada em relações métricas do triângulo retângulo e em finanças (retorno médio).</p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Resumo Estratégico</h2>
        <div className="lesson-highlight">
          <h3>Identifique o tipo de proporção</h3>
          <ul>
            <li><strong>Direta:</strong> as grandezas crescem ou decrescem juntas → razões iguais.</li>
            <li><strong>Inversa:</strong> uma cresce enquanto a outra decresce → produtos iguais.</li>
            <li><strong>Composta:</strong> múltiplas grandezas → analise cada uma em relação a x.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Propriedade fundamental"
          statement={
            <p>
              Determine x na proporção: <M>{"\\dfrac{4}{6} = \\dfrac{x}{15}"}</M>
            </p>
          }
          options={[
            { letter: "a", text: "8" },
            { letter: "b", text: "10", correct: true },
            { letter: "c", text: "12" },
            { letter: "d", text: "6" },
          ]}
          resolution={
            <>
              <M block={true}>{"4 \\cdot 15 = 6 \\cdot x \\Rightarrow x = \\frac{60}{6} = 10"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Regra de três composta"
          statement={
            <p>
              4 máquinas produzem 120 peças em 6 horas. Quantas peças produzirão
              6 máquinas em 9 horas?
            </p>
          }
          options={[
            { letter: "a", text: "180" },
            { letter: "b", text: "270", correct: true },
            { letter: "c", text: "240" },
            { letter: "d", text: "360" },
          ]}
          resolution={
            <>
              <p>Máquinas: direta; horas: direta (em relação a peças).</p>
              <M block={true}>{"x = 120 \\times \\frac{6}{4} \\times \\frac{9}{6} = 120 \\times \\frac{3}{2} \\times \\frac{3}{2} = 120 \\times \\frac{9}{4} = 270"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Divisão proporcional"
          statement={
            <p>
              Divida R$ 360 entre três pessoas A, B e C proporcionalmente a 2, 3 e 4.
              Qual é a parte de B?
            </p>
          }
          options={[
            { letter: "a", text: "R$ 80" },
            { letter: "b", text: "R$ 120", correct: true },
            { letter: "c", text: "R$ 160" },
            { letter: "d", text: "R$ 100" },
          ]}
          resolution={
            <>
              <p>Soma das partes: <M>{"2+3+4=9"}</M>.</p>
              <M block={true}>{"B = \\frac{3}{9} \\times 360 = \\frac{1}{3} \\times 360 = 120"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Escala de planta arquitetônica"
          statement={
            <p>
              A planta de uma casa foi desenhada na escala 1 : 75. Uma parede mede
              4,5 cm na planta. Qual é o comprimento real da parede?
            </p>
          }
          options={[
            { letter: "a", text: "3,0 m" },
            { letter: "b", text: "3,375 m", correct: true },
            { letter: "c", text: "33,75 m" },
            { letter: "d", text: "16,67 m" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\text{Real} = 4{,}5 \\text{ cm} \\times 75 = 337{,}5 \\text{ cm} = 3{,}375 \\text{ m}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Desconto comercial"
          statement={
            <p>
              Uma loja oferece 15% de desconto em uma TV de R$2.800. Qual é o preço
              final após o desconto?
            </p>
          }
          options={[
            { letter: "a", text: "R$ 2.380", correct: true },
            { letter: "b", text: "R$ 2.420" },
            { letter: "c", text: "R$ 420" },
            { letter: "d", text: "R$ 2.660" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\text{Desconto} = \\frac{15}{100} \\times 2800 = 420"}</M>
              <M block={true}>{"\\text{Preço final} = 2800 - 420 = 2380"}</M>
            </>
          }
        />
      </section>
    </article>
  );
}
