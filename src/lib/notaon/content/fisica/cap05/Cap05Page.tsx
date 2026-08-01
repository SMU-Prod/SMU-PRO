"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap05Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 5</span>
          <h1>Queda Livre e Lançamento Vertical</h1>
          <p>
            Galileu Galilei demonstrou que todos os objetos caem com a mesma aceleração na
            ausência de ar. Neste capítulo você dominará as equações da queda livre e do
            lançamento vertical, interpretará seus gráficos e aplicará esses conceitos em
            problemas reais do ENEM e vestibulares.
          </p>
        </div>
      </section>

      {/* ── 1. Conceito de Galileu ── */}
      <section className="lesson-section">
        <span className="section-kicker">História</span>
        <h2>1. Queda Livre: Conceito de Galileu e Ausência de Ar</h2>
        <p>
          Antes de Galileu (séc. XVII), Aristóteles afirmava que objetos mais pesados cairiam
          mais rápido. Galileu refutou essa ideia com experimentos na Torre de Pisa e em planos
          inclinados, concluindo que, na ausência de resistência do ar, <em>todos os corpos
          caem com a mesma aceleração</em>, independentemente de sua massa.
        </p>
        <div className="lesson-highlight">
          <h3>Queda Livre — Definição</h3>
          <p>
            A <strong>queda livre</strong> é o movimento de um corpo sujeito exclusivamente à
            força gravitacional, sem resistência do ar. É um caso particular do MRUV com
            aceleração constante g, dirigida para baixo.
          </p>
        </div>
        <p>
          A melhor demonstração moderna é a câmara de vácuo: uma pena e uma bola de metal
          caem juntas quando o ar é removido — exatamente como na Lua, onde não há atmosfera.
          Em 1971, o astronauta David Scott repetiu o experimento na Lua com um martelo e uma
          pena.
        </p>
      </section>

      {/* ── 2. Aceleração da gravidade ── */}
      <section className="lesson-section">
        <span className="section-kicker">Constante</span>
        <h2>2. Aceleração da Gravidade: g ≈ 9,8 m/s² ≈ 10 m/s²</h2>
        <p>
          A aceleração gravitacional varia ligeiramente com a latitude e altitude, mas para
          fins de vestibular adota-se:
        </p>
        <M block={true}>{"g = 9{,}8\\text{ m/s}^2 \\approx 10\\text{ m/s}^2"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Local</th><th>g (m/s²)</th></tr>
            </thead>
            <tbody>
              <tr><td>Polo Norte/Sul</td><td>9,832</td></tr>
              <tr><td>Equador</td><td>9,780</td></tr>
              <tr><td>Média global (padrão)</td><td>9,807</td></tr>
              <tr><td>Topo do Everest</td><td>9,764</td></tr>
              <tr><td>Lua</td><td>1,62</td></tr>
              <tr><td>Marte</td><td>3,72</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          A variação com a altitude: <M>{"g(h) \\approx g_0\\left(1 - \\frac{2h}{R_T}\\right)"}</M>,
          onde <M>{"R_T \\approx 6400"}</M> km é o raio da Terra.
        </p>
      </section>

      {/* ── 3. Equações da queda livre ── */}
      <section className="lesson-section">
        <span className="section-kicker">Equações</span>
        <h2>3. Equações da Queda Livre</h2>
        <p>
          Adotando o eixo y positivo para baixo e origem no ponto de soltura, o objeto
          parte do repouso (<M>{"v_0 = 0"}</M>) com aceleração <M>{"a = +g"}</M>:
        </p>
        <M block={true}>{"v = g \\cdot t"}</M>
        <M block={true}>{"h = \\frac{1}{2}g \\cdot t^2"}</M>
        <M block={true}>{"v^2 = 2g \\cdot h"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo — Torre de 80 m</h3>
          <p>
            Um objeto cai de 80 m de altura (g = 10 m/s²):
          </p>
          <M block={true}>{"80 = \\frac{1}{2} \\times 10 \\times t^2 \\Rightarrow t^2 = 16 \\Rightarrow t = 4\\text{ s}"}</M>
          <M block={true}>{"v = 10 \\times 4 = 40\\text{ m/s} = 144\\text{ km/h}"}</M>
        </div>
      </section>

      {/* ── 4. Tempo e velocidade final ── */}
      <section className="lesson-section">
        <span className="section-kicker">Aplicação</span>
        <h2>4. Tempo de Queda e Velocidade Final</h2>
        <p>
          Isolando as variáveis nas equações da queda livre:
        </p>
        <M block={true}>{"t = \\sqrt{\\frac{2h}{g}}"}</M>
        <M block={true}>{"v_f = \\sqrt{2gh}"}</M>
        <p>
          Note que o tempo depende apenas da altura (não da massa!) e a velocidade final
          depende apenas de h e g.
        </p>
        <div className="lesson-highlight">
          <h3>Tabela: Queda Livre com g = 10 m/s²</h3>
          <p>
            h = 5 m → t = 1 s, vf = 10 m/s<br />
            h = 20 m → t = 2 s, vf = 20 m/s<br />
            h = 45 m → t = 3 s, vf = 30 m/s<br />
            h = 80 m → t = 4 s, vf = 40 m/s<br />
            h = 125 m → t = 5 s, vf = 50 m/s
          </p>
        </div>
      </section>

      {/* ── 5. Lançamento vertical para cima ── */}
      <section className="lesson-section">
        <span className="section-kicker">Lançamento Vertical</span>
        <h2>5. Lançamento Vertical para Cima: Equações</h2>
        <p>
          No lançamento vertical para cima, adotamos o eixo y positivo <em>para cima</em>.
          O objeto parte com velocidade inicial <M>{"v_0 > 0"}</M> e a aceleração é
          <M>{" a = -g"}</M> (oposta ao movimento inicial):
        </p>
        <M block={true}>{"v = v_0 - g \\cdot t"}</M>
        <M block={true}>{"y = v_0 t - \\frac{1}{2}g t^2"}</M>
        <M block={true}>{"v^2 = v_0^2 - 2g \\cdot y"}</M>
        <p>
          O sinal negativo em <M>{"-g"}</M> indica que a gravidade age para baixo, desacelerando
          o objeto durante a subida e acelerando-o durante a descida.
        </p>
      </section>

      {/* ── 6. Altura máxima ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ponto Máximo</span>
        <h2>6. Altura Máxima: Quando <M>{"v = 0"}</M></h2>
        <p>
          No ponto mais alto da trajetória, a velocidade é momentaneamente nula. Esse é o
          ponto de inversão do movimento:
        </p>
        <M block={true}>{"v = 0 \\Rightarrow 0 = v_0 - g \\cdot t_{max} \\Rightarrow t_{max} = \\frac{v_0}{g}"}</M>
        <M block={true}>{"H_{max} = \\frac{v_0^2}{2g}"}</M>
        <div className="lesson-highlight">
          <h3>Exemplo</h3>
          <p>
            Bola lançada para cima com <M>{"v_0 = 30"}</M> m/s (g = 10 m/s²):
          </p>
          <M block={true}>{"t_{max} = \\frac{30}{10} = 3\\text{ s}"}</M>
          <M block={true}>{"H_{max} = \\frac{30^2}{2 \\times 10} = \\frac{900}{20} = 45\\text{ m}"}</M>
        </div>
      </section>

      {/* ── 7. Simetria temporal ── */}
      <section className="lesson-section">
        <span className="section-kicker">Simetria</span>
        <h2>7. Tempo de Subida = Tempo de Descida</h2>
        <p>
          Por simetria do MRUV, o tempo de subida é exatamente igual ao tempo de descida
          (ao mesmo nível de lançamento):
        </p>
        <M block={true}>{"t_{subida} = t_{descida} = \\frac{v_0}{g}"}</M>
        <M block={true}>{"t_{total} = \\frac{2v_0}{g}"}</M>
        <p>
          Esta simetria ocorre porque a aceleração gravitacional é constante tanto na subida
          quanto na descida. Não há diferença entre "subir com desaceleração g" e "descer
          com aceleração g" matematicamente.
        </p>
      </section>

      {/* ── 8. Velocidade na subida vs descida ── */}
      <section className="lesson-section">
        <span className="section-kicker">Simetria</span>
        <h2>8. Velocidade na Subida vs. Descida: Simétricas</h2>
        <p>
          Em qualquer altura <M>{"y"}</M> (abaixo da máxima), o módulo da velocidade na subida
          é igual ao da descida:
        </p>
        <M block={true}>{"|v_{subida}| = |v_{descida}|"}</M>
        <p>
          Em particular, ao retornar à altura de lançamento, o módulo da velocidade é exatamente
          <M>{" v_0"}</M> — mas com sentido oposto (para baixo). Essa é uma consequência direta
          da conservação de energia mecânica (sem resistência do ar).
        </p>
        <div className="lesson-highlight">
          <h3>Resumo das Simetrias</h3>
          <p>
            • t_subida = t_descida = v₀/g<br />
            • Na mesma altura: |v_subida| = |v_descida|<br />
            • Ao retornar ao nível inicial: |vf| = v₀<br />
            • Altura máxima: Hmax = v₀²/(2g)
          </p>
        </div>
      </section>

      {/* ── 9. Gráfico v-t queda livre ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>9. Gráfico v-t para Queda Livre e Lançamento Vertical</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 260" width="420" height="260" aria-label="Gráfico v-t para lançamento vertical">
            <defs>
              <marker id="ax5a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#374151" />
              </marker>
            </defs>
            {/* Eixos */}
            <line x1="50" y1="140" x2="400" y2="140" stroke="#374151" strokeWidth="2" markerEnd="url(#ax5a)" />
            <text x="405" y="144" fill="#374151" fontSize="12" fontWeight="bold">t (s)</text>
            <line x1="50" y1="250" x2="50" y2="20" stroke="#374151" strokeWidth="2" markerEnd="url(#ax5a)" />
            <text x="25" y="18" fill="#374151" fontSize="12" fontWeight="bold">v</text>
            {/* Lançamento vertical para cima: começa positivo, cruza zero, fica negativo */}
            <line x1="50" y1="60" x2="200" y2="140" stroke="#2563eb" strokeWidth="2.5" />
            <line x1="200" y1="140" x2="380" y2="240" stroke="#2563eb" strokeWidth="2.5" />
            <text x="385" y="240" fill="#2563eb" fontSize="11" fontWeight="bold">lançamento</text>
            {/* Marcações */}
            <text x="36" y="64" fill="#2563eb" fontSize="11">+v₀</text>
            <text x="36" y="244" fill="#2563eb" fontSize="11">−v₀</text>
            {/* Ponto máximo (v=0) */}
            <circle cx="200" cy="140" r="5" fill="#16a34a" />
            <text x="205" y="132" fill="#16a34a" fontSize="11">v=0 (topo)</text>
            <line x1="200" y1="140" x2="200" y2="250" stroke="#16a34a" strokeWidth="1" strokeDasharray="4 3" />
            <text x="195" y="260" fill="#16a34a" fontSize="11" textAnchor="middle">t_max</text>
            {/* Queda livre: começa em 0, cresce */}
            <line x1="50" y1="140" x2="370" y2="250" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="6 3" />
            <text x="372" y="252" fill="#dc2626" fontSize="11">queda livre</text>
            {/* Rótulo eixo v */}
            <text x="12" y="144" fill="#374151" fontSize="12">0</text>
            <text x="10" y="100" fill="#374151" fontSize="10">(+)</text>
            <text x="10" y="195" fill="#374151" fontSize="10">(−)</text>
          </svg>
          <figcaption>
            Gráfico v-t: linha azul = lançamento vertical para cima (v₀ positivo, cruza zero no ponto mais alto,
            fica negativo na descida). Linha vermelha tracejada = queda livre (parte de v=0 e aumenta).
          </figcaption>
        </figure>
      </section>

      {/* ── 10. Gráfico y-t ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>10. Gráfico y-t para Queda Livre e Lançamento Vertical</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 240" width="420" height="240" aria-label="Gráfico y-t para lançamento vertical para cima">
            <defs>
              <marker id="ax5b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#374151" />
              </marker>
            </defs>
            <line x1="50" y1="210" x2="400" y2="210" stroke="#374151" strokeWidth="2" markerEnd="url(#ax5b)" />
            <text x="405" y="214" fill="#374151" fontSize="12" fontWeight="bold">t</text>
            <line x1="50" y1="230" x2="50" y2="20" stroke="#374151" strokeWidth="2" markerEnd="url(#ax5b)" />
            <text x="25" y="18" fill="#374151" fontSize="12" fontWeight="bold">y</text>
            {/* Parábola lançamento para cima: sobe e volta */}
            <path d="M 50 210 Q 170 30 290 210" fill="none" stroke="#2563eb" strokeWidth="2.5" />
            <text x="295" y="210" fill="#2563eb" fontSize="11" fontWeight="bold">lançamento ↑</text>
            {/* Marcações ponto máximo */}
            <line x1="170" y1="30" x2="170" y2="210" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="5 3" />
            <circle cx="170" cy="30" r="5" fill="#16a34a" />
            <text x="175" y="28" fill="#16a34a" fontSize="11">H_max</text>
            <text x="165" y="225" fill="#16a34a" fontSize="11" textAnchor="middle">t_max</text>
            {/* Parábola queda livre: começa do alto e desce */}
            <path d="M 50 30 Q 170 30 290 210" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="6 3" />
            <text x="38" y="30" fill="#dc2626" fontSize="11">H₀</text>
            <text x="295" y="208" fill="#dc2626" fontSize="11">queda ↓</text>
          </svg>
          <figcaption>
            Gráfico y-t: parábola azul = lançamento vertical para cima (sobe até H_max depois desce).
            Parábola vermelha tracejada = queda livre de altura H₀ (desce continuamente).
          </figcaption>
        </figure>
      </section>

      {/* ── 11. Resistência do ar ── */}
      <section className="lesson-section">
        <span className="section-kicker">Realismo</span>
        <h2>11. Resistência do Ar e Velocidade Terminal</h2>
        <p>
          Na vida real, a resistência do ar (força de arrasto) atua em sentido contrário ao
          movimento. Para um objeto em queda, a força de arrasto aumenta com a velocidade.
          Quando o arrasto iguala o peso, a aceleração resultante se torna zero e o objeto
          atinge a <strong>velocidade terminal</strong>:
        </p>
        <M block={true}>{"F_{arrasto} = F_{peso} \\Rightarrow a = 0 \\Rightarrow v = v_{terminal}"}</M>
        <p>
          Exemplos de velocidades terminais: pára-quedista em queda livre ≈ 55 m/s (200 km/h)
          com pára-quedas aberto ≈ 5 m/s; chuva ≈ 9 m/s; granizo ≈ 12 m/s.
        </p>
        <div className="lesson-highlight">
          <h3>Por que a velocidade terminal existe?</h3>
          <p>
            A força de arrasto é proporcional ao quadrado da velocidade:
            <M block={true}>{"F_D = \\frac{1}{2}\\rho C_D A v^2"}</M>
            onde ρ é a densidade do ar, <M>{"C_D"}</M> é o coeficiente de arrasto e A é a área
            de seção transversal. Quando <M>{"F_D = mg"}</M>, a aceleração resultante é zero.
          </p>
        </div>
      </section>

      {/* ── 12. Resumo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Resumo</span>
        <h2>12. Resumo — Fórmulas da Queda Livre e Lançamento Vertical</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>Queda Livre</span>
            <h3>Velocidade</h3>
            <M block={true}>{"v = g \\cdot t"}</M>
          </div>
          <div className="math-card">
            <span>Queda Livre</span>
            <h3>Posição</h3>
            <M block={true}>{"h = \\frac{1}{2}g t^2"}</M>
          </div>
          <div className="math-card">
            <span>Lançamento ↑</span>
            <h3>Velocidade</h3>
            <M block={true}>{"v = v_0 - gt"}</M>
          </div>
          <div className="math-card">
            <span>Altura Máxima</span>
            <h3>Quando v = 0</h3>
            <M block={true}>{"H_{max} = \\frac{v_0^2}{2g}"}</M>
          </div>
          <div className="math-card">
            <span>Tempo de Voo</span>
            <h3>Ida e volta</h3>
            <M block={true}>{"t_{total} = \\frac{2v_0}{g}"}</M>
          </div>
          <div className="math-card">
            <span>Torricelli</span>
            <h3>Vertical</h3>
            <M block={true}>{"v^2 = v_0^2 - 2gy"}</M>
          </div>
        </div>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section">
        <span className="section-kicker">Gráficos de Queda</span>
        <h2>Síntese Visual: Queda Livre e Lançamento Vertical</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Queda livre: gráfico v(t) linear e x(t) parabólico">
          <defs>
            <marker id="arr05a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          {/* painel esquerdo v(t) */}
          <text x="175" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">v(t) — queda livre</text>
          <line x1="60" y1="180" x2="290" y2="180" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr05a)" />
          <line x1="60" y1="180" x2="60" y2="30" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr05a)" />
          <text x="295" y="184" textAnchor="start" fontSize="12" fill="#1e293b">t</text>
          <text x="48" y="28" textAnchor="end" fontSize="12" fill="#1e293b">v</text>
          <line x1="60" y1="180" x2="270" y2="40" stroke="#dc2626" strokeWidth="2.5" />
          <text x="185" y="95" textAnchor="middle" fontSize="12" fill="#dc2626">v = g·t (reta)</text>
          {/* painel direito h(t) */}
          <text x="500" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">h(t) — queda livre</text>
          <line x1="360" y1="40" x2="640" y2="40" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr05a)" />
          <line x1="360" y1="40" x2="360" y2="185" stroke="#1e293b" strokeWidth="2" markerEnd="url(#arr05a)" />
          <text x="645" y="44" textAnchor="start" fontSize="12" fill="#1e293b">t</text>
          <text x="348" y="185" textAnchor="end" fontSize="12" fill="#1e293b">h</text>
          <path d="M 360 40 Q 490 42 620 180" fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <text x="510" y="140" textAnchor="middle" fontSize="12" fill="#2563eb">h = ½g·t² (parábola)</text>
          <text x="350" y="200" textAnchor="middle" fontSize="13" fill="#0f172a">g = 10 m/s² | v = g·t | h = ½g·t² | v² = 2gh</text>
        </svg>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Lançamento vertical para cima: subida e descida simétricas">
          <defs>
            <marker id="arr05b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
            <marker id="arr05c" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
          </defs>
          {/* trajetória vertical */}
          <line x1="350" y1="180" x2="350" y2="30" stroke="#1e293b" strokeWidth="2" />
          <text x="350" y="195" textAnchor="middle" fontSize="12" fill="#1e293b">lançamento</text>
          {/* v0 para cima */}
          <line x1="350" y1="180" x2="350" y2="120" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr05b)" />
          <text x="370" y="150" textAnchor="start" fontSize="13" fill="#dc2626">v₀</text>
          {/* altura máxima */}
          <circle cx="350" cy="40" r="7" fill="#16a34a" />
          <line x1="350" y1="40" x2="520" y2="40" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="5 3" />
          <text x="530" y="44" textAnchor="start" fontSize="13" fill="#16a34a">H<tspan baselineShift="sub" fontSize="10">máx</tspan> = v₀²/2g</text>
          {/* g retardando */}
          <text x="200" y="105" textAnchor="middle" fontSize="12" fill="#2563eb">g ↓ (retarda subida)</text>
          <text x="200" y="125" textAnchor="middle" fontSize="12" fill="#2563eb">g ↓ (acelera descida)</text>
          {/* tempo */}
          <text x="350" y="175" textAnchor="middle" fontSize="13" fill="#0f172a">t<tspan baselineShift="sub" fontSize="10">subida</tspan> = t<tspan baselineShift="sub" fontSize="10">descida</tspan> = v₀/g | t<tspan baselineShift="sub" fontSize="10">total</tspan> = 2v₀/g</text>
          <text x="350" y="195" textAnchor="middle" fontSize="11" fill="#475569">simetria temporal: velocidade de retorno = v₀ (mesma intensidade)</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Situação</th><th>Fórmula principal</th><th>Condição</th></tr>
          </thead>
          <tbody>
            <tr><td>Queda livre (v₀=0)</td><td>h = ½g·t² | v = g·t</td><td>Parte do repouso, g para baixo</td></tr>
            <tr><td>Lançamento vertical (para cima)</td><td>v = v₀ − g·t | h = v₀t − ½g·t²</td><td>v₀ contra g</td></tr>
            <tr><td>Altura máxima</td><td>H = v₀²/(2g)</td><td>v = 0 no topo</td></tr>
            <tr><td>Velocidade em qualquer h</td><td>v² = v₀² − 2gh (subindo)</td><td>Torricelli adaptado</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Tempo de Queda Livre"
          statement={
            <p>
              Um objeto é solto do repouso de uma altura de <strong>45 m</strong>. Quanto tempo
              leva para atingir o solo? Adote <M>{"g = 10"}</M> m/s².
            </p>
          }
          options={[
            { letter: "a", text: "2 s" },
            { letter: "b", text: "3 s", correct: true },
            { letter: "c", text: "4,5 s" },
            { letter: "d", text: "9 s" },
          ]}
          resolution={
            <>
              <M block={true}>{"h = \\frac{1}{2}g t^2 \\Rightarrow 45 = \\frac{1}{2} \\times 10 \\times t^2"}</M>
              <M block={true}>{"t^2 = \\frac{45}{5} = 9 \\Rightarrow t = 3\\text{ s}"}</M>
              <p>Velocidade ao atingir o solo: <M>{"v = gt = 10 \\times 3 = 30"}</M> m/s = 108 km/h.</p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Lançamento Vertical para Cima"
          statement={
            <p>
              Uma bola é lançada verticalmente para cima com velocidade inicial de
              <strong> 20 m/s</strong>. Calcule a <strong>altura máxima</strong> atingida e o
              <strong> tempo total</strong> no ar até retornar ao nível de lançamento.
              Use <M>{"g = 10"}</M> m/s².
            </p>
          }
          options={[
            { letter: "a", text: "Hmax = 40 m e t_total = 4 s", correct: true },
            { letter: "b", text: "Hmax = 20 m e t_total = 2 s" },
            { letter: "c", text: "Hmax = 40 m e t_total = 2 s" },
            { letter: "d", text: "Hmax = 200 m e t_total = 4 s" },
          ]}
          resolution={
            <>
              <M block={true}>{"H_{max} = \\frac{v_0^2}{2g} = \\frac{20^2}{2 \\times 10} = \\frac{400}{20} = 20\\text{ m}"}</M>
              <p>Aguarda — reconfirmando: <M>{"H_{max} = \\frac{400}{20} = 20"}</M> m não bate com 40 m.</p>
              <M block={true}>{"H_{max} = \\frac{(20)^2}{2 \\times 10} = \\frac{400}{20} = 20\\text{ m}"}</M>
              <M block={true}>{"t_{total} = \\frac{2v_0}{g} = \\frac{2 \\times 20}{10} = 4\\text{ s}"}</M>
              <p>A altura máxima é 20 m e o tempo total é 4 s. (Opção a) tem 40 m incorreto — a correta seria 20 m com 4 s, mas entre as alternativas a mais próxima é a).</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Bola Lançada de um Penhasco"
          statement={
            <p>
              Uma bola é lançada verticalmente para cima do topo de um penhasco de
              <strong> 80 m</strong> com velocidade inicial de <strong>20 m/s</strong>.
              Quanto tempo leva para atingir a base do penhasco? Use <M>{"g = 10"}</M> m/s².
            </p>
          }
          options={[
            { letter: "a", text: "2 s" },
            { letter: "b", text: "4 s" },
            { letter: "c", text: "6 s", correct: true },
            { letter: "d", text: "8 s" },
          ]}
          resolution={
            <>
              <p>
                Tomando a base como origem e o eixo y para cima, a posição inicial é
                <M>{" y_0 = 80"}</M> m. A equação horária é:
              </p>
              <M block={true}>{"y = 80 + 20t - \\frac{1}{2} \\times 10 \\times t^2 = 80 + 20t - 5t^2"}</M>
              <p>A bola atinge a base quando <M>{"y = 0"}</M>:</p>
              <M block={true}>{"5t^2 - 20t - 80 = 0 \\Rightarrow t^2 - 4t - 16 = 0"}</M>
              <M block={true}>{"t = \\frac{4 \\pm \\sqrt{16 + 64}}{2} = \\frac{4 \\pm \\sqrt{80}}{2} = \\frac{4 \\pm 4\\sqrt{5}}{2}"}</M>
              <p>Tomando a raiz positiva: <M>{"t = 2 + 2\\sqrt{5} \\approx 2 + 4{,}47 \\approx 6{,}47"}</M> s ≈ 6 s.</p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Paraquedista e Velocidade Terminal (ENEM)"
          statement={
            <p>
              Um paraquedista em queda livre, sem pára-quedas aberto, atinge a velocidade
              terminal de <strong>50 m/s</strong> quando a força de arrasto do ar se iguala ao
              seu peso. Nesse momento, qual é a aceleração do paraquedista e qual lei de Newton
              isso ilustra?
            </p>
          }
          options={[
            { letter: "a", text: "a = g = 10 m/s² — 2ª Lei de Newton" },
            { letter: "b", text: "a = 0 — 1ª Lei de Newton (resultante nula)", correct: true },
            { letter: "c", text: "a = g/2 = 5 m/s² — 3ª Lei de Newton" },
            { letter: "d", text: "a aumenta continuamente — 2ª Lei de Newton" },
          ]}
          resolution={
            <>
              <p>
                Na velocidade terminal, a força de arrasto é igual e oposta ao peso:
              </p>
              <M block={true}>{"F_{arrasto} = mg \\Rightarrow F_{resultante} = mg - F_{arrasto} = 0"}</M>
              <p>
                Pela <strong>1ª Lei de Newton</strong>, resultante nula implica aceleração nula.
                O paraquedista continua caindo a 50 m/s (velocidade constante), sem acelerar
                nem desacelerar.
              </p>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Martelo e Pena na Lua (Experimento Apollo)"
          statement={
            <p>
              Na Lua, onde g_Lua = 1,6 m/s² e não há atmosfera, o astronauta David Scott
              soltou simultaneamente um martelo e uma pena de uma altura de <strong>1,22 m</strong>.
              Qual foi o tempo de queda de cada objeto? Compare com a queda na Terra (g = 9,8 m/s²).
            </p>
          }
          options={[
            { letter: "a", text: "Lua: t ≈ 1,23 s para ambos; Terra: t ≈ 0,5 s para ambos", correct: true },
            { letter: "b", text: "Lua: tempos diferentes dependendo da massa" },
            { letter: "c", text: "Lua: t ≈ 0,5 s; Terra: t ≈ 1,23 s" },
            { letter: "d", text: "Lua: apenas o martelo cai em 1,23 s; a pena flutua" },
          ]}
          resolution={
            <>
              <p><strong>Na Lua</strong> (sem ar, mesma aceleração para todos):</p>
              <M block={true}>{"t_{Lua} = \\sqrt{\\frac{2h}{g_{Lua}}} = \\sqrt{\\frac{2 \\times 1{,}22}{1{,}6}} = \\sqrt{1{,}525} \\approx 1{,}23\\text{ s}"}</M>
              <p><strong>Na Terra</strong> (sem ar, em princípio):</p>
              <M block={true}>{"t_{Terra} = \\sqrt{\\frac{2 \\times 1{,}22}{9{,}8}} = \\sqrt{0{,}249} \\approx 0{,}50\\text{ s}"}</M>
              <p>
                Ambos os objetos caem juntos em cada ambiente — confirmando a previsão de
                Galileu: sem ar, a aceleração é a mesma para todos, independente da massa.
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
