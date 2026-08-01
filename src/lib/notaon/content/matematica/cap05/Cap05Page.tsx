"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap05Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Matemática • Capítulo 5</span>
          <h1>Expressões Numéricas e Divisibilidade</h1>
          <p>
            Domine a ordem das operações, as propriedades dos números inteiros
            e os critérios de divisibilidade — base fundamental para cálculo
            mental, fatoração e resolução de problemas do ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ordem das Operações</span>
        <h2>1. Hierarquia das Operações Aritméticas</h2>
        <p>
          Para calcular expressões corretamente, existe uma ordem de precedência
          universalmente acordada:
        </p>
        <div className="math-block">
          <h3>Prioridade (de maior para menor)</h3>
          <ol>
            <li><strong>Parênteses</strong> ( ) → depois colchetes [ ] → depois chaves &#123; &#125;</li>
            <li><strong>Potenciação e radiciação</strong></li>
            <li><strong>Multiplicação e divisão</strong> (da esquerda para a direita)</li>
            <li><strong>Adição e subtração</strong> (da esquerda para a direita)</li>
          </ol>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 220" width="100%" aria-label="Hierarquia das operações aritméticas em blocos aninhados">
            {/* Fundo geral */}
            <rect x="10" y="10" width="680" height="200" rx="12" fill="#f0f4ff" stroke="#93c5fd" strokeWidth="2"/>
            {/* Nível 1 — Chaves */}
            <rect x="25" y="22" width="650" height="176" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
            <text x="340" y="185" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="700">&#123; &#125; Chaves — 3º a resolver</text>
            {/* Nível 2 — Colchetes */}
            <rect x="45" y="34" width="610" height="138" rx="8" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2"/>
            <text x="340" y="160" textAnchor="middle" fontSize="12" fill="#1e3a8a" fontWeight="700">[ ] Colchetes — 2º a resolver</text>
            {/* Nível 3 — Parênteses */}
            <rect x="65" y="46" width="570" height="100" rx="6" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="2"/>
            <text x="340" y="135" textAnchor="middle" fontSize="12" fill="#1e3a8a" fontWeight="700">( ) Parênteses — 1º a resolver</text>
            {/* Caixas internas de operações */}
            <rect x="85" y="58" width="120" height="60" rx="5" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="145" y="82" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e3a8a">xⁿ  √</text>
            <text x="145" y="100" textAnchor="middle" fontSize="11" fill="#1e3a8a">Potências e raízes</text>
            <line x1="205" y1="88" x2="235" y2="88" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arr)"/>
            <rect x="235" y="58" width="120" height="60" rx="5" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="295" y="82" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e3a8a">× ÷</text>
            <text x="295" y="100" textAnchor="middle" fontSize="11" fill="#1e3a8a">Mult. e divisão</text>
            <line x1="355" y1="88" x2="385" y2="88" stroke="#3b82f6" strokeWidth="2"/>
            <polygon points="383,84 391,88 383,92" fill="#3b82f6"/>
            <rect x="385" y="58" width="120" height="60" rx="5" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5"/>
            <text x="445" y="82" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e3a8a">+ −</text>
            <text x="445" y="100" textAnchor="middle" fontSize="11" fill="#1e3a8a">Adição e subtração</text>
            <line x1="205" y1="88" x2="235" y2="88" stroke="#3b82f6" strokeWidth="2"/>
            <polygon points="233,84 241,88 233,92" fill="#3b82f6"/>
          </svg>
          <figcaption>Hierarquia das operações: as chaves englobam colchetes que englobam parênteses; dentro deles, resolve-se na ordem potências → × ÷ → + −</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Exemplo resolvido passo a passo</h3>
          <M block={true}>{"2 + 3 \\times (4 - 1)^2 \\div 3"}</M>
          <M block={true}>{"= 2 + 3 \\times 3^2 \\div 3"}</M>
          <M block={true}>{"= 2 + 3 \\times 9 \\div 3"}</M>
          <M block={true}>{"= 2 + 27 \\div 3"}</M>
          <M block={true}>{"= 2 + 9 = 11"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Divisibilidade</span>
        <h2>2. Conceito de Divisibilidade</h2>
        <p>
          Dizemos que <M>{"a"}</M> é divisível por <M>{"b"}</M> (escrevemos <M>{"b \\mid a"}</M>)
          quando a divisão <M>{"\\dfrac{a}{b}"}</M> tem resto zero, ou seja, existe
          um inteiro <M>{"q"}</M> tal que <M>{"a = b \\cdot q"}</M>.
        </p>
        <M block={true}>{"b \\mid a \\iff \\exists\\, q \\in \\mathbb{Z} : a = b \\cdot q"}</M>

        <div className="lesson-highlight">
          <h3>Algoritmo da divisão</h3>
          <M block={true}>{"a = b \\cdot q + r, \\quad 0 \\leq r < b"}</M>
          <p>a = dividendo, b = divisor, q = quociente, r = resto.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Critérios</span>
        <h2>3. Critérios de Divisibilidade</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Divisor</th><th>Critério</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>2</strong></td>
                <td>Último dígito é par (0,2,4,6,8)</td>
                <td>348 ÷ 2 ✓ (8 é par)</td>
              </tr>
              <tr>
                <td><strong>3</strong></td>
                <td>Soma dos dígitos é divisível por 3</td>
                <td>378: 3+7+8=18, 18÷3=6 ✓</td>
              </tr>
              <tr>
                <td><strong>4</strong></td>
                <td>Dois últimos dígitos divisíveis por 4</td>
                <td>1524: 24÷4=6 ✓</td>
              </tr>
              <tr>
                <td><strong>5</strong></td>
                <td>Último dígito é 0 ou 5</td>
                <td>345 ✓, 280 ✓</td>
              </tr>
              <tr>
                <td><strong>6</strong></td>
                <td>Divisível por 2 E por 3</td>
                <td>132: par ✓, 1+3+2=6 ✓</td>
              </tr>
              <tr>
                <td><strong>8</strong></td>
                <td>Três últimos dígitos divisíveis por 8</td>
                <td>5.128: 128÷8=16 ✓</td>
              </tr>
              <tr>
                <td><strong>9</strong></td>
                <td>Soma dos dígitos é divisível por 9</td>
                <td>729: 7+2+9=18 ✓</td>
              </tr>
              <tr>
                <td><strong>10</strong></td>
                <td>Último dígito é 0</td>
                <td>4.500 ✓</td>
              </tr>
              <tr>
                <td><strong>11</strong></td>
                <td>Diferença alternada de dígitos divisível por 11</td>
                <td>1.331: 1−3+3−1=0 ✓</td>
              </tr>
              <tr>
                <td><strong>25</strong></td>
                <td>Dois últimos dígitos divisíveis por 25</td>
                <td>4.575: 75÷25=3 ✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">MDC e MMC</span>
        <h2>4. MDC — Máximo Divisor Comum</h2>
        <p>
          O <strong>MDC</strong> de dois ou mais números é o maior número que
          divide todos eles simultaneamente.
        </p>
        <div className="math-block">
          <h3>Algoritmo de Euclides</h3>
          <M block={true}>{"\\text{mdc}(a,b) = \\text{mdc}(b, a \\bmod b) \\quad \\text{até } b = 0"}</M>
          <p>Exemplo: mdc(48, 18):</p>
          <M block={true}>{"48 = 18 \\times 2 + 12 \\Rightarrow \\text{mdc}(48,18) = \\text{mdc}(18,12)"}</M>
          <M block={true}>{"18 = 12 \\times 1 + 6 \\Rightarrow \\text{mdc}(18,12) = \\text{mdc}(12,6)"}</M>
          <M block={true}>{"12 = 6 \\times 2 + 0 \\Rightarrow \\text{mdc}(12,6) = 6"}</M>
        </div>
        <div className="math-block">
          <h3>Pelo método da fatoração</h3>
          <p>Fatore ambos em primos e multiplique os fatores comuns com o menor expoente.</p>
          <M block={true}>{"48 = 2^4 \\cdot 3 \\quad 18 = 2 \\cdot 3^2"}</M>
          <M block={true}>{"\\text{mdc}(48,18) = 2^1 \\cdot 3^1 = 6"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">MMC</span>
        <h2>5. MMC — Mínimo Múltiplo Comum</h2>
        <p>
          O <strong>MMC</strong> de dois ou mais números é o menor número positivo
          que é múltiplo de todos eles.
        </p>
        <div className="math-block">
          <h3>Fórmula usando MDC</h3>
          <M block={true}>{"\\text{mmc}(a,b) = \\frac{a \\cdot b}{\\text{mdc}(a,b)}"}</M>
        </div>
        <div className="math-block">
          <h3>Pelo método da fatoração</h3>
          <p>Multiplique os fatores primos com o <strong>maior</strong> expoente.</p>
          <M block={true}>{"48 = 2^4 \\cdot 3 \\quad 18 = 2 \\cdot 3^2"}</M>
          <M block={true}>{"\\text{mmc}(48,18) = 2^4 \\cdot 3^2 = 144"}</M>
        </div>

        <div className="lesson-highlight">
          <h3>Relação entre mdc e mmc</h3>
          <M block={true}>{"\\text{mdc}(a,b) \\times \\text{mmc}(a,b) = a \\times b"}</M>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Números Primos</span>
        <h2>6. Números Primos e Crivo de Eratóstenes</h2>
        <p>
          Um número primo é divisível apenas por 1 e por ele mesmo.
          O único par primo é 2.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th colSpan={10}>Primos menores que 100 (Crivo de Eratóstenes)</th></tr>
            </thead>
            <tbody>
              <tr>
                {[2,3,5,7,11,13,17,19,23,29].map(n => <td key={n} style={{background:'#dbeafe',color:'#1e40af',fontWeight:700}}>{n}</td>)}
              </tr>
              <tr>
                {[31,37,41,43,47,53,59,61,67,71].map(n => <td key={n} style={{background:'#dbeafe',color:'#1e40af',fontWeight:700}}>{n}</td>)}
              </tr>
              <tr>
                {[73,79,83,89,97].map(n => <td key={n} style={{background:'#dbeafe',color:'#1e40af',fontWeight:700}}>{n}</td>)}
                {[...Array(5)].map((_,i) => <td key={i}></td>)}
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Para verificar se n é primo, basta testar divisores até <M>{"\\sqrt{n}"}</M>.
          Se nenhum divide n, ele é primo.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fatoração</span>
        <h2>7. Decomposição em Fatores Primos</h2>
        <p>
          Todo número natural maior que 1 pode ser escrito de forma única como
          produto de fatores primos (Teorema Fundamental da Aritmética):
        </p>
        <M block={true}>{"360 = 2^3 \\times 3^2 \\times 5"}</M>

        <figure className="lesson-figure">
          <svg viewBox="0 0 300 200" width="300" height="200" aria-label="Fatoração de 360">
            <text x="150" y="20" textAnchor="middle" fontSize="15" fontWeight="700" fill="#1e40af">Fatoração de 360</text>
            <text x="60" y="50" textAnchor="end" fontSize="14" fill="#374151">360</text>
            <line x1="65" y1="50" x2="120" y2="50" stroke="#374151" strokeWidth="1"/>
            <text x="130" y="50" textAnchor="start" fontSize="14" fill="#dc2626" fontWeight="700">2</text>
            <text x="60" y="75" textAnchor="end" fontSize="14" fill="#374151">180</text>
            <line x1="65" y1="75" x2="120" y2="75" stroke="#374151" strokeWidth="1"/>
            <text x="130" y="75" textAnchor="start" fontSize="14" fill="#dc2626" fontWeight="700">2</text>
            <text x="60" y="100" textAnchor="end" fontSize="14" fill="#374151">90</text>
            <line x1="65" y1="100" x2="120" y2="100" stroke="#374151" strokeWidth="1"/>
            <text x="130" y="100" textAnchor="start" fontSize="14" fill="#dc2626" fontWeight="700">2</text>
            <text x="60" y="125" textAnchor="end" fontSize="14" fill="#374151">45</text>
            <line x1="65" y1="125" x2="120" y2="125" stroke="#374151" strokeWidth="1"/>
            <text x="130" y="125" textAnchor="start" fontSize="14" fill="#dc2626" fontWeight="700">3</text>
            <text x="60" y="150" textAnchor="end" fontSize="14" fill="#374151">15</text>
            <line x1="65" y1="150" x2="120" y2="150" stroke="#374151" strokeWidth="1"/>
            <text x="130" y="150" textAnchor="start" fontSize="14" fill="#dc2626" fontWeight="700">3</text>
            <text x="60" y="175" textAnchor="end" fontSize="14" fill="#374151">5</text>
            <line x1="65" y1="175" x2="120" y2="175" stroke="#374151" strokeWidth="1"/>
            <text x="130" y="175" textAnchor="start" fontSize="14" fill="#dc2626" fontWeight="700">5</text>
            <text x="60" y="198" textAnchor="end" fontSize="14" fill="#374151">1</text>
            <text x="200" y="120" textAnchor="middle" fontSize="13" fill="#16a34a" fontWeight="700">360 = 2³×3²×5</text>
          </svg>
          <figcaption>Decomposição de 360 em fatores primos pelo método da chave</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Divisores</span>
        <h2>8. Número de Divisores de um Inteiro</h2>
        <p>
          Se <M>{"n = p_1^{a_1} \\cdot p_2^{a_2} \\cdots p_k^{a_k}"}</M>, o número
          de divisores positivos de n é:
        </p>
        <M block={true}>{"d(n) = (a_1 + 1)(a_2 + 1) \\cdots (a_k + 1)"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <M block={true}>{"360 = 2^3 \\times 3^2 \\times 5^1 \\Rightarrow d(360) = (3+1)(2+1)(1+1) = 4 \\times 3 \\times 2 = 24"}</M>
          <p>360 tem 24 divisores positivos.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>9. Aplicações do MDC e MMC</h2>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>MDC</span>
            <h3>Situações de MDC</h3>
            <ul>
              <li>Dividir em partes iguais o maior número possível</li>
              <li>Cortar em pedaços maiores sem sobras</li>
              <li>Simplificar frações</li>
            </ul>
          </div>
          <div className="lesson-card">
            <span>MMC</span>
            <h3>Situações de MMC</h3>
            <ul>
              <li>Sincronização de eventos periódicos</li>
              <li>Somar frações com denominadores diferentes</li>
              <li>Quando "estarão juntos novamente"</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>10. Síntese — Divisibilidade e Fatoração</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Conceito</th><th>Definição</th><th>Fórmula/Método</th></tr>
            </thead>
            <tbody>
              <tr><td>Divisibilidade</td><td>b ∣ a se r = 0</td><td><M>{"a = bq + r"}</M></td></tr>
              <tr><td>Fatoração</td><td>n como produto de primos</td><td>Chave de fatoração</td></tr>
              <tr><td>MDC</td><td>Maior divisor comum</td><td>Fatores comuns, menor exp.</td></tr>
              <tr><td>MMC</td><td>Menor múltiplo comum</td><td>Todos os fatores, maior exp.</td></tr>
              <tr><td>Relação</td><td>mdc × mmc = a × b</td><td>Válida para dois números</td></tr>
              <tr><td>Nº de divisores</td><td>Produto dos (exp.+1)</td><td><M>{"d(n) = \\prod(a_i+1)"}</M></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Critérios de divisibilidade"
          statement={
            <p>
              O número 4.572 é divisível por quais dos seguintes números: 2, 3, 4, 5, 9?
            </p>
          }
          options={[
            { letter: "a", text: "2, 3 e 4 apenas" },
            { letter: "b", text: "2, 3, 4 e 9", correct: true },
            { letter: "c", text: "2, 3 e 5" },
            { letter: "d", text: "2, 4 e 5" },
          ]}
          resolution={
            <>
              <p><M>{"4572"}</M>: par → div. por 2. Soma: <M>{"4+5+7+2=18"}</M> → div. por 3 e por 9.</p>
              <p>Últimos 2 dígitos: <M>{"72 = 4 \\times 18"}</M> → div. por 4. Não termina em 0 ou 5 → não div. por 5.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. MDC e MMC por fatoração"
          statement={
            <p>
              Calcule <M>{"\\text{mdc}(180, 252)"}</M> e <M>{"\\text{mmc}(180, 252)"}</M>.
            </p>
          }
          options={[
            { letter: "a", text: "mdc = 36, mmc = 1.260", correct: true },
            { letter: "b", text: "mdc = 18, mmc = 2.520" },
            { letter: "c", text: "mdc = 36, mmc = 2.520" },
            { letter: "d", text: "mdc = 12, mmc = 1.260" },
          ]}
          resolution={
            <>
              <M block={true}>{"180 = 2^2 \\cdot 3^2 \\cdot 5 \\quad 252 = 2^2 \\cdot 3^2 \\cdot 7"}</M>
              <M block={true}>{"\\text{mdc} = 2^2 \\cdot 3^2 = 36"}</M>
              <M block={true}>{"\\text{mmc} = 2^2 \\cdot 3^2 \\cdot 5 \\cdot 7 = 1260"}</M>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Número de divisores"
          statement={
            <p>
              Quantos divisores positivos tem o número <M>{"N = 2^4 \\cdot 3 \\cdot 5^2"}</M>?
            </p>
          }
          options={[
            { letter: "a", text: "20" },
            { letter: "b", text: "30", correct: true },
            { letter: "c", text: "24" },
            { letter: "d", text: "40" },
          ]}
          resolution={
            <>
              <M block={true}>{"d(N) = (4+1)(1+1)(2+1) = 5 \\times 2 \\times 3 = 30"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Semáforos sincronizados"
          statement={
            <p>
              Três semáforos numa rua mudam de verde simultaneamente.
              Depois, um muda a cada 40 s, outro a cada 60 s e o terceiro a cada 90 s.
              Após quantos segundos os três voltarão a mudar ao mesmo tempo?
            </p>
          }
          options={[
            { letter: "a", text: "90 s" },
            { letter: "b", text: "180 s" },
            { letter: "c", text: "360 s", correct: true },
            { letter: "d", text: "720 s" },
          ]}
          resolution={
            <>
              <M block={true}>{"40 = 2^3 \\cdot 5 \\quad 60 = 2^2 \\cdot 3 \\cdot 5 \\quad 90 = 2 \\cdot 3^2 \\cdot 5"}</M>
              <M block={true}>{"\\text{mmc}(40,60,90) = 2^3 \\cdot 3^2 \\cdot 5 = 360 \\text{ s}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Distribuição de materiais"
          statement={
            <p>
              Uma escola recebeu 120 lápis e 180 borrachas para distribuir em kits iguais,
              sem sobras, com o máximo possível de kits. Quantos kits serão formados
              e quantos itens terá cada kit?
            </p>
          }
          options={[
            { letter: "a", text: "30 kits com 4 lápis e 6 borrachas" },
            { letter: "b", text: "60 kits com 2 lápis e 3 borrachas", correct: true },
            { letter: "c", text: "20 kits com 6 lápis e 9 borrachas" },
            { letter: "d", text: "12 kits com 10 lápis e 15 borrachas" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\text{mdc}(120,180) = 60 \\text{ kits}"}</M>
              <p>Cada kit: <M>{"120 \\div 60 = 2"}</M> lápis e <M>{"180 \\div 60 = 3"}</M> borrachas.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
