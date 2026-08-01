"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap02Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 2</span>
          <h1>Cinemática: Referencial, Posição, Deslocamento e Velocidade Média</h1>
          <p>
            A Cinemática descreve como os corpos se movem sem se preocupar com as causas do
            movimento. Aqui você aprenderá a definir referencial, calcular deslocamento,
            velocidade média e interpretar gráficos posição × tempo com precisão.
          </p>
        </div>
      </section>

      {/* ── 1. Referencial e ponto material ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceitos Iniciais</span>
        <h2>1. Referencial e Ponto Material</h2>
        <p>
          O <strong>referencial</strong> é o sistema de coordenadas — o "observador" — em relação
          ao qual descrevemos o movimento. Um carro está em repouso para o motorista, mas se
          move a 80 km/h para um pedestre na calçada. O movimento é relativo ao referencial!
        </p>
        <div className="lesson-highlight">
          <h3>Ponto Material</h3>
          <p>
            Um objeto é tratado como <em>ponto material</em> quando suas dimensões são desprezíveis
            diante das distâncias envolvidas no problema. Exemplo: um avião voando de São Paulo ao
            Rio de Janeiro (360 km) pode ser modelado como ponto material, mesmo medindo 70 m de
            comprimento. Um carro numa garagem não pode.
          </p>
        </div>
        <p>
          Em problemas unidimensionais, escolhemos uma reta como eixo, definimos uma
          <strong> origem</strong> (posição zero) e um <strong>sentido positivo</strong>. Qualquer
          posição à esquerda da origem tem coordenada negativa.
        </p>
      </section>

      {/* ── 2. Posição e função horária ── */}
      <section className="lesson-section">
        <span className="section-kicker">Posição</span>
        <h2>2. Posição e Função Horária da Posição</h2>
        <p>
          A <strong>posição</strong> <M>{"x"}</M> de um ponto material é a coordenada que indica
          onde ele está no eixo escolhido, num dado instante <M>{"t"}</M>. A <strong>função
          horária da posição</strong> é a lei que relaciona <M>{"x"}</M> e <M>{"t"}</M>:
        </p>
        <M block={true}>{"x = f(t)"}</M>
        <p>
          Para o Movimento Retilíneo Uniforme (MRU), essa função é linear:
          <M>{" x = x_0 + vt"}</M>. Para o MRUV, é quadrática:
          <M>{" x = x_0 + v_0 t + \\tfrac{1}{2}at^2"}</M>.
          Conhecer a função horária permite calcular a posição em qualquer instante.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>
            Um carro parte da posição <M>{"x_0 = 10"}</M> m e avança a 5 m/s. Sua função
            horária é:
          </p>
          <M block={true}>{"x(t) = 10 + 5t"}</M>
          <p>
            Em <M>{"t = 6"}</M> s: <M>{"x = 10 + 5 \\times 6 = 40"}</M> m.
          </p>
        </div>
      </section>

      {/* ── 3. Deslocamento ── */}
      <section className="lesson-section">
        <span className="section-kicker">Deslocamento</span>
        <h2>3. Deslocamento Escalar: <M>{"\\Delta x = x_f - x_i"}</M></h2>
        <p>
          O <strong>deslocamento</strong> é a variação de posição entre dois instantes:
        </p>
        <M block={true}>{"\\Delta x = x_f - x_i"}</M>
        <p>
          Se <M>{"\\Delta x > 0"}</M>, o móvel se deslocou no sentido positivo. Se
          <M>{" \\Delta x < 0"}</M>, no sentido negativo (retrógrado). Se <M>{"\\Delta x = 0"}</M>,
          o móvel retornou ao ponto de partida ou ficou parado.
        </p>
        <div className="lesson-highlight">
          <h3>Atenção: Deslocamento ≠ Distância Percorrida</h3>
          <p>
            Se um atleta corre 100 m e volta 40 m, o deslocamento é 60 m, mas a distância
            percorrida é 140 m. O deslocamento depende apenas das posições inicial e final;
            a distância considera todo o trajeto.
          </p>
        </div>
      </section>

      {/* ── 4. Distância vs deslocamento ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>
        <h2>4. Distância Percorrida vs. Deslocamento</h2>
        <p>
          A <strong>distância percorrida</strong> é o comprimento total do caminho traçado pelo
          móvel, independentemente de direção ou sentido. É sempre positiva ou nula.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Distância Percorrida</th>
                <th>Deslocamento</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Tipo</td><td>Escalar</td><td>Vetorial</td></tr>
              <tr><td>Sinal</td><td>Sempre ≥ 0</td><td>Pode ser negativo</td></tr>
              <tr><td>Depende do trajeto?</td><td>Sim</td><td>Não</td></tr>
              <tr><td>Símbolo</td><td>d ou s</td><td>Δx</td></tr>
              <tr><td>Odômetro mede?</td><td>Sim</td><td>Não diretamente</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 5. Velocidade média ── */}
      <section className="lesson-section">
        <span className="section-kicker">Velocidade</span>
        <h2>5. Velocidade Média: <M>{"V_m = \\Delta x / \\Delta t"}</M></h2>
        <p>
          A <strong>velocidade média</strong> relaciona o deslocamento com o intervalo de tempo:
        </p>
        <M block={true}>{"V_m = \\frac{\\Delta x}{\\Delta t} = \\frac{x_f - x_i}{t_f - t_i}"}</M>
        <p>
          A unidade SI é m/s. No cotidiano usamos km/h. Conversão:
          <M>{" 1\\text{ m/s} = 3{,}6\\text{ km/h}"}</M>.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Objeto</th><th>Velocidade típica</th></tr>
            </thead>
            <tbody>
              <tr><td>Pessoa caminhando</td><td>1,4 m/s ≈ 5 km/h</td></tr>
              <tr><td>Corredor de elite (100 m)</td><td>10,4 m/s ≈ 37 km/h</td></tr>
              <tr><td>Automóvel (rodovia)</td><td>28 m/s ≈ 100 km/h</td></tr>
              <tr><td>Avião comercial</td><td>250 m/s ≈ 900 km/h</td></tr>
              <tr><td>Som (ar, 20 °C)</td><td>343 m/s</td></tr>
              <tr><td>Luz (vácuo)</td><td>3×10⁸ m/s</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 6. Vm escalar vs vetorial ── */}
      <section className="lesson-section">
        <span className="section-kicker">Definições</span>
        <h2>6. Velocidade Escalar Média vs. Velocidade Vetorial Média</h2>
        <div className="lesson-highlight">
          <h3>Velocidade Escalar Média (rapidez média)</h3>
          <M block={true}>{"v_{em} = \\frac{\\text{distância percorrida}}{\\Delta t}"}</M>
          <p>Sempre positiva. Equivale ao que um velocímetro médio indicaria.</p>
        </div>
        <div className="lesson-highlight">
          <h3>Velocidade Vetorial Média</h3>
          <M block={true}>{"\\vec{V}_m = \\frac{\\Delta \\vec{x}}{\\Delta t} = \\frac{\\vec{x}_f - \\vec{x}_i}{\\Delta t}"}</M>
          <p>
            Pode ser negativa (em 1D) ou ter direção oblíqua (em 2D). Se o móvel volta ao ponto
            de partida, o deslocamento é zero e, portanto, a velocidade vetorial média é zero —
            mesmo que tenha andado muito.
          </p>
        </div>
      </section>

      {/* ── 7. Gráfico x-t ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gráficos</span>
        <h2>7. Gráfico Posição × Tempo (x-t): MRU é Linha Reta</h2>
        <p>
          No gráfico <M>{"x \\times t"}</M>, cada ponto representa a posição do móvel num dado
          instante. Para o MRU, a função <M>{"x = x_0 + vt"}</M> é linear, gerando uma
          <strong> reta</strong> cuja inclinação é igual à velocidade.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 260" width="420" height="260" aria-label="Gráfico posição-tempo com dois objetos em MRU">
            <defs>
              <marker id="ax2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#374151" />
              </marker>
            </defs>
            {/* Eixos */}
            <line x1="50" y1="220" x2="390" y2="220" stroke="#374151" strokeWidth="2" markerEnd="url(#ax2)" />
            <text x="395" y="224" fill="#374151" fontSize="13" fontWeight="bold">t (s)</text>
            <line x1="50" y1="220" x2="50" y2="20" stroke="#374151" strokeWidth="2" markerEnd="url(#ax2)" />
            <text x="25" y="18" fill="#374151" fontSize="13" fontWeight="bold">x (m)</text>
            {/* Grade */}
            {[110,170,230,290,350].map(tx => (
              <line key={tx} x1={tx} y1="220" x2={tx} y2="25" stroke="#f3f4f6" strokeWidth="1" />
            ))}
            {[50,90,130,170,210].map(ty => (
              <line key={ty} x1="50" y1={ty} x2="385" y2={ty} stroke="#f3f4f6" strokeWidth="1" />
            ))}
            {/* Objeto A: MRU com v>0 (sobe) */}
            <line x1="50" y1="200" x2="350" y2="50" stroke="#2563eb" strokeWidth="2.5" />
            <text x="355" y="48" fill="#2563eb" fontSize="12" fontWeight="bold">A (v &gt; 0)</text>
            {/* Objeto B: MRU com v<0 (desce) */}
            <line x1="50" y1="70" x2="350" y2="195" stroke="#dc2626" strokeWidth="2.5" />
            <text x="355" y="195" fill="#dc2626" fontSize="12" fontWeight="bold">B (v &lt; 0)</text>
            {/* Objeto C: Repouso */}
            <line x1="50" y1="145" x2="350" y2="145" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="8 4" />
            <text x="355" y="149" fill="#16a34a" fontSize="12" fontWeight="bold">C (v = 0)</text>
            {/* Marcação Δx e Δt em A */}
            <line x1="110" y1="174" x2="230" y2="174" stroke="#6b7280" strokeWidth="1" strokeDasharray="4 3" />
            <line x1="230" y1="174" x2="230" y2="114" stroke="#6b7280" strokeWidth="1" strokeDasharray="4 3" />
            <text x="165" y="188" fill="#6b7280" fontSize="11" textAnchor="middle">Δt</text>
            <text x="242" y="148" fill="#6b7280" fontSize="11">Δx</text>
            {/* Rótulos eixo x */}
            <text x="50" y="234" fill="#374151" fontSize="11" textAnchor="middle">0</text>
            <text x="110" y="234" fill="#374151" fontSize="11" textAnchor="middle">2</text>
            <text x="170" y="234" fill="#374151" fontSize="11" textAnchor="middle">4</text>
            <text x="230" y="234" fill="#374151" fontSize="11" textAnchor="middle">6</text>
            <text x="290" y="234" fill="#374151" fontSize="11" textAnchor="middle">8</text>
            <text x="350" y="234" fill="#374151" fontSize="11" textAnchor="middle">10</text>
          </svg>
          <figcaption>
            Gráfico x-t: objeto A avança (v&gt;0), objeto B recua (v&lt;0), objeto C está em repouso.
            A inclinação da reta é numericamente igual à velocidade.
          </figcaption>
        </figure>
        <p>
          O ponto de cruzamento de A e B no gráfico indica que eles se <strong>encontram</strong>
          naquele instante e naquela posição.
        </p>
      </section>

      {/* ── 8. Leitura do gráfico x-t ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gráficos</span>
        <h2>8. Leitura do Gráfico x-t: Coeficiente Angular = Velocidade</h2>
        <p>
          O <strong>coeficiente angular</strong> (inclinação) da reta no gráfico <M>{"x-t"}</M>
          fornece diretamente a velocidade:
        </p>
        <M block={true}>{"v = \\frac{\\Delta x}{\\Delta t} = \\tan\\theta"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto do gráfico x-t</th>
                <th>Significado físico</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Reta com inclinação positiva</td><td>v &gt; 0 (sentido positivo)</td></tr>
              <tr><td>Reta com inclinação negativa</td><td>v &lt; 0 (sentido negativo)</td></tr>
              <tr><td>Reta horizontal (incl. = 0)</td><td>Corpo em repouso (v = 0)</td></tr>
              <tr><td>Duas retas se cruzam</td><td>Encontro dos dois móveis</td></tr>
              <tr><td>Curva côncava/convexa</td><td>Aceleração ≠ 0 (MRUV)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 9. Instantâneo vs médio ── */}
      <section className="lesson-section">
        <span className="section-kicker">Velocidade</span>
        <h2>9. Velocidade Instantânea vs. Velocidade Média</h2>
        <p>
          A <strong>velocidade instantânea</strong> é a velocidade em um instante específico.
          Geometricamente no gráfico <M>{"x-t"}</M>, é a inclinação da <em>reta tangente</em>
          à curva naquele ponto:
        </p>
        <M block={true}>{"v_{inst} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta x}{\\Delta t} = \\frac{dx}{dt}"}</M>
        <p>
          Para o MRU (reta no gráfico x-t), velocidade instantânea = velocidade média em qualquer
          intervalo. Para o MRUV (parábola no gráfico x-t), a velocidade instantânea varia
          linearmente com o tempo.
        </p>
      </section>

      {/* ── 10. Classificação do movimento ── */}
      <section className="lesson-section">
        <span className="section-kicker">Classificação</span>
        <h2>10. Classificação do Movimento: Progressivo, Retrógrado, Acelerado, Retardado</h2>
        <div className="lesson-highlight">
          <h3>Quanto ao sentido</h3>
          <p>
            <strong>Progressivo:</strong> <M>{"v > 0"}</M> (sentido positivo do eixo).<br />
            <strong>Retrógrado:</strong> <M>{"v < 0"}</M> (sentido negativo do eixo).
          </p>
        </div>
        <div className="lesson-highlight">
          <h3>Quanto à aceleração</h3>
          <p>
            <strong>Uniforme:</strong> <M>{"a = 0"}</M>, velocidade constante (MRU).<br />
            <strong>Acelerado:</strong> <M>{"|v|"}</M> aumenta — <M>{"v"}</M> e <M>{"a"}</M> mesmo sinal.<br />
            <strong>Retardado:</strong> <M>{"|v|"}</M> diminui — <M>{"v"}</M> e <M>{"a"}</M> sinais opostos.
          </p>
        </div>
      </section>

      {/* ── 11. Resumo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>11. Resumo — Fórmulas Fundamentais</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Deslocamento</span>
            <h3>Variação de posição</h3>
            <M block={true}>{"\\Delta x = x_f - x_i"}</M>
          </div>
          <div className="math-card">
            <span>Velocidade Média</span>
            <h3>Deslocamento/tempo</h3>
            <M block={true}>{"V_m = \\frac{\\Delta x}{\\Delta t}"}</M>
          </div>
          <div className="math-card">
            <span>Vel. Escalar Média</span>
            <h3>Distância/tempo</h3>
            <M block={true}>{"v_{em} = \\frac{d}{\\Delta t}"}</M>
          </div>
          <div className="math-card">
            <span>Gráfico x-t</span>
            <h3>Inclinação = velocidade</h3>
            <M block={true}>{"v = \\tan\\theta = \\frac{\\Delta x}{\\Delta t}"}</M>
          </div>
          <div className="math-card">
            <span>Conversão</span>
            <h3>km/h → m/s</h3>
            <M block={true}>{"v_{\\text{m/s}} = \\frac{v_{\\text{km/h}}}{3{,}6}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráficos de Cinemática</span>
        <h2>Síntese Visual: Posição e Velocidade</h2>
        <p>
          Saber ler os gráficos x(t) e v(t) é uma das habilidades mais cobradas
          no ENEM — a inclinação revela a velocidade, a área revela o deslocamento.
        </p>

        <svg viewBox="0 0 700 220" className="lesson-svg" aria-label="Gráfico posição × tempo mostrando MU e repouso">
          <defs>
            <marker id="arr02a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          {/* eixos */}
          <line x1="60" y1="180" x2="660" y2="180" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr02a)" />
          <line x1="60" y1="180" x2="60" y2="20" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr02a)" />
          <text x="670" y="184" textAnchor="start" fontSize="13" fill="#1e293b">t (s)</text>
          <text x="50" y="16" textAnchor="end" fontSize="13" fill="#1e293b">x (m)</text>
          {/* grade */}
          {[100,180,260,340,420,500,580].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="175" x2={x} y2="185" stroke="#1e293b" strokeWidth="1" />
              <text x={x} y="197" textAnchor="middle" fontSize="11" fill="#64748b">{i+1}</text>
            </g>
          ))}
          {[40,80,120].map((y, i) => (
            <g key={i}>
              <line x1="55" y1={180-y} x2="65" y2={180-y} stroke="#1e293b" strokeWidth="1" />
              <text x="50" y={183-y} textAnchor="end" fontSize="11" fill="#64748b">{(i+1)*20}</text>
            </g>
          ))}
          {/* reta MU positivo */}
          <line x1="60" y1="180" x2="420" y2="60" stroke="#2563eb" strokeWidth="2.5" />
          <text x="380" y="55" textAnchor="middle" fontSize="13" fill="#2563eb">MU (v {">"} 0)</text>
          {/* repouso (horizontal) */}
          <line x1="420" y1="60" x2="660" y2="60" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="8 4" />
          <text x="540" y="48" textAnchor="middle" fontSize="13" fill="#dc2626">Repouso (v = 0)</text>
          {/* anotação inclinação */}
          <text x="200" y="145" textAnchor="middle" fontSize="12" fill="#2563eb">inclinação = vm = Δx/Δt</text>
        </svg>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Deslocamento vetorial vs distância percorrida">
          <defs>
            <marker id="arr02b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#16a34a" />
            </marker>
          </defs>
          {/* trajetória curva (distância) */}
          <path d="M 80 100 Q 250 30 420 100 Q 550 150 620 100" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="7 3" />
          <text x="280" y="40" textAnchor="middle" fontSize="13" fill="#64748b">distância percorrida (escalar)</text>
          {/* vetor deslocamento (seta reta) */}
          <line x1="80" y1="100" x2="612" y2="100" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#arr02b)" />
          <text x="350" y="120" textAnchor="middle" fontSize="13" fill="#16a34a">deslocamento Δx = xf − x₀ (vetorial)</text>
          {/* pontos */}
          <circle cx="80" cy="100" r="6" fill="#dc2626" />
          <text x="80" y="140" textAnchor="middle" fontSize="12" fill="#dc2626">x₀</text>
          <circle cx="620" cy="100" r="6" fill="#dc2626" />
          <text x="620" y="140" textAnchor="middle" fontSize="12" fill="#dc2626">xf</text>
          <text x="350" y="180" textAnchor="middle" fontSize="13" fill="#0f172a">|Δx| ≤ distância percorrida (iguais somente em trajetória retilínea sem retorno)</text>
        </svg>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Velocidade Média Simples"
          statement={
            <p>
              Um carro percorre <strong>180 km</strong> em <strong>2 horas</strong>. Qual é sua
              velocidade média em km/h e em m/s?
            </p>
          }
          options={[
            { letter: "a", text: "60 km/h e 16,7 m/s" },
            { letter: "b", text: "90 km/h e 25 m/s", correct: true },
            { letter: "c", text: "90 km/h e 32,4 m/s" },
            { letter: "d", text: "80 km/h e 22,2 m/s" },
          ]}
          resolution={
            <>
              <M block={true}>{"V_m = \\frac{180\\text{ km}}{2\\text{ h}} = 90\\text{ km/h}"}</M>
              <M block={true}>{"V_m = \\frac{90}{3{,}6} = 25\\text{ m/s}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Velocidade pelo Gráfico x-t"
          statement={
            <p>
              Um gráfico x-t mostra que um objeto está em <M>{"x = 10"}</M> m quando
              <M>{" t = 2"}</M> s e em <M>{"x = 70"}</M> m quando <M>{"t = 8"}</M> s.
              Qual é a velocidade média nesse intervalo?
            </p>
          }
          options={[
            { letter: "a", text: "8,75 m/s" },
            { letter: "b", text: "10 m/s", correct: true },
            { letter: "c", text: "12 m/s" },
            { letter: "d", text: "35 m/s" },
          ]}
          resolution={
            <>
              <M block={true}>{"\\Delta x = 70 - 10 = 60\\text{ m}, \\quad \\Delta t = 8 - 2 = 6\\text{ s}"}</M>
              <M block={true}>{"V_m = \\frac{60}{6} = 10\\text{ m/s}"}</M>
              <p>No gráfico x-t, esse é o coeficiente angular da reta entre os dois pontos.</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Deslocamento com Mudança de Sentido"
          statement={
            <p>
              Um objeto parte de <M>{"x_i = 5"}</M> m, avança <strong>40 m</strong> no sentido
              positivo, depois recua <strong>10 m</strong> no sentido negativo, em um total de
              <strong> 5 s</strong>. Calcule o deslocamento, a distância percorrida e a velocidade
              média vetorial.
            </p>
          }
          options={[
            { letter: "a", text: "Δx = 30 m, d = 50 m, Vm = 10 m/s" },
            { letter: "b", text: "Δx = 30 m, d = 50 m, Vm = 6 m/s", correct: true },
            { letter: "c", text: "Δx = 50 m, d = 50 m, Vm = 10 m/s" },
            { letter: "d", text: "Δx = 30 m, d = 30 m, Vm = 6 m/s" },
          ]}
          resolution={
            <>
              <p>Posição final: <M>{"x_f = 5 + 40 - 10 = 35"}</M> m</p>
              <M block={true}>{"\\Delta x = x_f - x_i = 35 - 5 = 30\\text{ m}"}</M>
              <p>Distância percorrida (soma dos percursos): <M>{"d = 40 + 10 = 50"}</M> m</p>
              <M block={true}>{"V_m = \\frac{\\Delta x}{\\Delta t} = \\frac{30}{5} = 6\\text{ m/s}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Atleta na Pista — Deslocamento Zero (ENEM)"
          statement={
            <p>
              Um atleta corre uma volta completa em uma pista oval de <strong>400 m</strong> em
              <strong> 50 s</strong>. Ao término, ele está exatamente no ponto de partida.
              Qual é a distância percorrida e qual é o deslocamento?
            </p>
          }
          options={[
            { letter: "a", text: "Distância = 0 m e deslocamento = 400 m" },
            { letter: "b", text: "Distância = 400 m e deslocamento = 400 m" },
            { letter: "c", text: "Distância = 400 m e deslocamento = 0 m", correct: true },
            { letter: "d", text: "Distância = 0 m e deslocamento = 0 m" },
          ]}
          resolution={
            <>
              <p>
                A distância percorrida é o comprimento total do trajeto: 400 m.
                O deslocamento: como o atleta retorna ao ponto de partida,
                <M>{" \\Delta x = x_f - x_i = 0"}</M>.
              </p>
              <p>
                A velocidade vetorial média também é zero. Já a velocidade escalar média
                é <M>{"v_{em} = 400/50 = 8"}</M> m/s.
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. GPS vs. Odômetro — Deslocamento vs. Distância"
          statement={
            <p>
              O GPS de um carro mostra que a distância em linha reta entre a garagem e o
              destino é <strong>80 km</strong>. Mas o odômetro registrou <strong>120 km</strong>
              percorridos. Como a Física explica essa diferença?
            </p>
          }
          options={[
            { letter: "a", text: "O GPS está errado pois não considera curvas" },
            { letter: "b", text: "O GPS mede o deslocamento vetorial; o odômetro mede a distância percorrida", correct: true },
            { letter: "c", text: "O GPS e o odômetro medem a mesma grandeza com erros distintos" },
            { letter: "d", text: "O odômetro subtrai o tempo de parada e o GPS não" },
          ]}
          resolution={
            <>
              <p>
                O <strong>GPS</strong> calcula as posições inicial e final e determina o módulo
                do vetor deslocamento: <M>{"\\Delta x = 80"}</M> km (linha reta).
              </p>
              <p>
                O <strong>odômetro</strong> acumula cada pequeno incremento de percurso,
                medindo a distância total nas estradas: <M>{"d = 120"}</M> km.
              </p>
              <p>
                A diferença de 40 km resulta das curvas, desvios e retornos da rota real.
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
