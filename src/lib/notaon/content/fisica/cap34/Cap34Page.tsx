"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap34Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 34</span>
          <h1>Espelhos Esféricos: Côncavos e Convexos</h1>
          <p>
            Domine a geometria dos espelhos esféricos — centro de curvatura, vértice, foco e raio —,
            construa imagens com os três raios notáveis, aplique a Equação de Gauss (1/f = 1/p + 1/p')
            e a ampliação transversal, e entenda quando a imagem é real ou virtual, direta ou invertida.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Elementos Geométricos</span>
        <h2>1. Elementos do Espelho Esférico</h2>
        <p>
          Um espelho esférico é uma calota de esfera com superfície interna (côncavo) ou externa (convexo)
          refletora e polida. Os elementos fundamentais são:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead><tr><th>Símbolo</th><th>Nome</th><th>Definição</th></tr></thead>
            <tbody>
              <tr><td>C</td><td>Centro de curvatura</td><td>Centro da esfera da qual o espelho é calota</td></tr>
              <tr><td>V</td><td>Vértice</td><td>Ponto central geométrico do espelho (intercepta o eixo principal)</td></tr>
              <tr><td>F</td><td>Foco principal</td><td>Ponto onde convergem (ou de onde parecem divergir) raios paralelos ao eixo</td></tr>
              <tr><td>R</td><td>Raio de curvatura</td><td>Distância C → V (= 2f)</td></tr>
              <tr><td>f</td><td>Distância focal</td><td>Distância F → V (= R/2)</td></tr>
            </tbody>
          </table>
        </div>
        <M block={true}>{"f = \\frac{R}{2} \\quad \\text{ou} \\quad R = 2f"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos</span>
        <h2>2. Espelho Côncavo: Foco Real — Converge</h2>
        <p>
          No espelho <strong>côncavo</strong> (face interna refletora), raios paralelos ao eixo principal
          convergem para o foco F após a reflexão. O foco é <em>real</em> (f &gt; 0 na convenção de Gauss).
          Objetos além de F formam imagens reais; objetos entre F e V formam imagens virtuais ampliadas.
        </p>
        <div className="lesson-highlight">
          <h3>Aplicações do espelho côncavo</h3>
          <p>Espelho de dentista (imagem virtual ampliada), refletor de farol de automóvel (lâmpada no foco
          → feixe paralelo), telescópio refletor (espelho primário côncavo), espelhos de maquiagem.</p>
        </div>

        <h2>3. Espelho Convexo: Foco Virtual — Diverge</h2>
        <p>
          No espelho <strong>convexo</strong> (face externa refletora), raios paralelos ao eixo principal
          divergem após a reflexão, parecendo provir de um foco F localizado <em>atrás</em> do espelho.
          O foco é <em>virtual</em> (f &lt; 0 na convenção de Gauss). A imagem é <strong>sempre virtual,
          direita e menor</strong> que o objeto.
        </p>
        <div className="lesson-highlight">
          <h3>Aplicações do espelho convexo</h3>
          <p>Retrovisor externo de automóveis (campo visual amplo), espelhos de segurança em lojas e em
          esquinas de corredor de supermercado.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equação de Gauss</span>
        <h2>4. Equação de Gauss (Conjugada): 1/f = 1/p + 1/p'</h2>
        <p>
          A equação de Gauss relaciona as distâncias do objeto (p) e da imagem (p') ao vértice do espelho
          com a distância focal (f):
        </p>
        <M block={true}>{"\\frac{1}{f} = \\frac{1}{p} + \\frac{1}{p'}"}</M>
        <div className="lesson-highlight">
          <h3>Convenção de sinais de Gauss</h3>
          <p>
            <strong>p &gt; 0:</strong> objeto real (à frente do espelho).<br/>
            <strong>p' &gt; 0:</strong> imagem real (à frente do espelho, mesmo lado do objeto).<br/>
            <strong>p' &lt; 0:</strong> imagem virtual (atrás do espelho).<br/>
            <strong>f &gt; 0:</strong> espelho côncavo (foco real).<br/>
            <strong>f &lt; 0:</strong> espelho convexo (foco virtual).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ampliação</span>
        <h2>5. Ampliação Transversal: A = i/o = −p'/p</h2>
        <p>
          A ampliação linear transversal A compara a altura da imagem i com a altura do objeto o:
        </p>
        <M block={true}>{"A = \\frac{i}{o} = -\\frac{p'}{p}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead><tr><th>Valor de A</th><th>Significado</th></tr></thead>
            <tbody>
              <tr><td>A &gt; 0</td><td>Imagem direita (virtual)</td></tr>
              <tr><td>A &lt; 0</td><td>Imagem invertida (real)</td></tr>
              <tr><td>|A| &gt; 1</td><td>Imagem maior que o objeto</td></tr>
              <tr><td>|A| = 1</td><td>Imagem do mesmo tamanho</td></tr>
              <tr><td>|A| &lt; 1</td><td>Imagem menor que o objeto</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama Côncavo</span>
        <h2>6. Diagrama: Espelho Côncavo com Imagem Real Invertida</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 460 240" width="460" height="240" aria-label="Espelho côncavo formando imagem real invertida com dois raios notáveis">
            {/* Principal axis */}
            <line x1="10" y1="120" x2="450" y2="120" stroke="#94a3b8" strokeWidth="1.5"/>
            {/* Mirror (concave arc) */}
            <path d="M390,40 Q440,120 390,200" fill="none" stroke="#6366f1" strokeWidth="3"/>
            {/* C, F, V markers */}
            <circle cx="300" cy="120" r="4" fill="#475569"/>
            <text x="296" y="138" fill="#475569" fontSize="12">C</text>
            <circle cx="345" cy="120" r="4" fill="#ef4444"/>
            <text x="341" y="138" fill="#ef4444" fontSize="12">F</text>
            <circle cx="390" cy="120" r="4" fill="#475569"/>
            <text x="386" y="138" fill="#475569" fontSize="12">V</text>
            {/* Object arrow */}
            <line x1="130" y1="120" x2="130" y2="60" stroke="#10b981" strokeWidth="2.5"/>
            <polygon points="127,60 133,60 130,52" fill="#10b981"/>
            <text x="110" y="50" fill="#10b981" fontSize="12">Objeto</text>
            <text x="112" y="63" fill="#10b981" fontSize="11">p = 3f</text>
            {/* Ray 1: parallel to axis → through F */}
            <line x1="130" y1="60" x2="390" y2="60" stroke="#f59e0b" strokeWidth="1.8"/>
            <line x1="390" y1="60" x2="345" y2="120" stroke="#f59e0b" strokeWidth="1.8"/>
            <line x1="345" y1="120" x2="220" y2="170" stroke="#f59e0b" strokeWidth="1.8"/>
            {/* Ray 2: through C → reflects back */}
            <line x1="130" y1="60" x2="300" y2="120" stroke="#6366f1" strokeWidth="1.8" strokeDasharray="6,3"/>
            <line x1="300" y1="120" x2="220" y2="165" stroke="#6366f1" strokeWidth="1.8"/>
            {/* Image arrow (inverted) */}
            <line x1="220" y1="120" x2="220" y2="168" stroke="#ef4444" strokeWidth="2.5"/>
            <polygon points="217,168 223,168 220,176" fill="#ef4444"/>
            <text x="225" y="185" fill="#ef4444" fontSize="12">Imagem</text>
            <text x="225" y="198" fill="#ef4444" fontSize="10">real, inv.</text>
            {/* p and p' labels */}
            <line x1="130" y1="210" x2="390" y2="210" stroke="#475569" strokeWidth="1"/>
            <text x="240" y="225" fill="#475569" fontSize="11">p</text>
            <line x1="220" y1="215" x2="390" y2="215" stroke="#475569" strokeWidth="1"/>
            <text x="295" y="230" fill="#475569" fontSize="11">p'</text>
          </svg>
          <figcaption>Espelho côncavo: objeto além de C (p = 3f). Raio 1 (amarelo): paralelo ao eixo → reflete passando por F. Raio 2 (azul): passa por C → reflete sobre si mesmo. Imagem real, invertida e menor, formada entre F e C.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Raios Notáveis</span>
        <h2>7. Os Três Raios Notáveis para Construção Geométrica</h2>
        <div className="lesson-highlight">
          <h3>Raio 1 — Paralelo ao eixo principal</h3>
          <p>Incide paralelo ao eixo → reflete passando pelo foco F (côncavo) ou parecendo vir de F (convexo).</p>
        </div>
        <div className="lesson-highlight">
          <h3>Raio 2 — Passa pelo foco F</h3>
          <p>Incide passando por F → reflete paralelo ao eixo principal.</p>
        </div>
        <div className="lesson-highlight">
          <h3>Raio 3 — Passa pelo centro de curvatura C</h3>
          <p>Incide passando por C → reflete sobre si mesmo (incide perpendicularmente ao espelho).</p>
        </div>
        <p>
          Para o espelho convexo, os raios 1 e 2 são prolongados para trás (linhas tracejadas) para
          encontrar o foco virtual. A interseção dos raios refletidos (ou de seus prolongamentos) determina
          a posição da imagem.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Natureza da Imagem</span>
        <h2>8. Tabela: Natureza da Imagem no Espelho Côncavo</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Posição do objeto</th><th>Posição da imagem</th><th>Natureza</th><th>Tamanho</th></tr>
            </thead>
            <tbody>
              <tr><td>p &gt; 2f (além de C)</td><td>f &lt; p' &lt; 2f (entre F e C)</td><td>Real, invertida</td><td>Menor</td></tr>
              <tr><td>p = 2f (em C)</td><td>p' = 2f (em C)</td><td>Real, invertida</td><td>Igual</td></tr>
              <tr><td>f &lt; p &lt; 2f (entre C e F)</td><td>p' &gt; 2f (além de C)</td><td>Real, invertida</td><td>Maior</td></tr>
              <tr><td>p = f (em F)</td><td>p' → ∞</td><td>Imprópria (no ∞)</td><td>—</td></tr>
              <tr><td>p &lt; f (entre F e V)</td><td>p' &lt; 0 (atrás do espelho)</td><td>Virtual, direta</td><td>Maior</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <h3>Espelho Convexo — Sempre Virtual, Direta e Menor</h3>
          <p>Para qualquer posição do objeto real à frente do espelho convexo, a imagem é sempre virtual
          (p' &lt; 0), direta (A &gt; 0) e menor (|A| &lt; 1). Isso é matematicamente garantido pela equação
          de Gauss com f negativo.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>
        <h2>9. Aplicações Tecnológicas dos Espelhos Esféricos</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead><tr><th>Aplicação</th><th>Tipo</th><th>Princípio</th></tr></thead>
            <tbody>
              <tr><td>Farol de automóvel</td><td>Côncavo</td><td>Lâmpada no foco → feixe refletido paralelo</td></tr>
              <tr><td>Espelho de dentista</td><td>Côncavo</td><td>Dente entre F e V → imagem virtual ampliada</td></tr>
              <tr><td>Retrovisor externo</td><td>Convexo</td><td>Campo visual amplo; imagem sempre visível</td></tr>
              <tr><td>Telescópio refletor (Herschel)</td><td>Côncavo (parabólico)</td><td>Concentra luz de estrelas no foco</td></tr>
              <tr><td>Espelho solar parabólico</td><td>Côncavo (parabólico)</td><td>Concentra radiação solar em um ponto para aquecer</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo das Fórmulas</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>f</span>
            <h3>Foco e Raio</h3>
            <M block={true}>{"f = R/2"}</M>
          </div>
          <div className="math-card">
            <span>G</span>
            <h3>Equação de Gauss</h3>
            <M block={true}>{"\\frac{1}{f} = \\frac{1}{p} + \\frac{1}{p'}"}</M>
          </div>
          <div className="math-card">
            <span>A</span>
            <h3>Ampliação</h3>
            <M block={true}>{"A = \\frac{i}{o} = -\\frac{p'}{p}"}</M>
          </div>
          <div className="math-card">
            <span>+</span>
            <h3>Côncavo</h3>
            <M block={true}>{"f > 0 \\text{ (foco real)}"}</M>
          </div>
          <div className="math-card">
            <span>−</span>
            <h3>Convexo</h3>
            <M block={true}>{"f < 0 \\text{ (foco virtual)}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Formação de Imagens</span>
        <h2>Síntese Visual: Espelhos Côncavo e Convexo</h2>
        <p>
          Traçar dois raios notáveis é suficiente para determinar imagem — posição,
          tamanho e natureza (real/virtual, direita/invertida).
        </p>

        <svg viewBox="0 0 700 230" className="lesson-svg" aria-label="Espelho côncavo — formação de imagem real e invertida">
          <defs>
            <marker id="arr34a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
          </defs>
          {/* espelho côncavo (arco) */}
          <path d="M 580 40 Q 640 115 580 190" fill="none" stroke="#1e293b" strokeWidth="3" />
          <text x="660" y="118" textAnchor="start" fontSize="12" fill="#1e293b">espelho côncavo</text>
          {/* eixo principal */}
          <line x1="40" y1="115" x2="660" y2="115" stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 3" />
          {/* centro C e foco F */}
          <circle cx="420" cy="115" r="5" fill="#dc2626" />
          <text x="420" y="132" textAnchor="middle" fontSize="12" fill="#dc2626">C</text>
          <circle cx="510" cy="115" r="5" fill="#16a34a" />
          <text x="510" y="132" textAnchor="middle" fontSize="12" fill="#16a34a">F</text>
          {/* objeto */}
          <line x1="130" y1="115" x2="130" y2="60" stroke="#7c3aed" strokeWidth="2" />
          <polygon points="130,60 122,75 138,75" fill="#7c3aed" />
          <text x="130" y="145" textAnchor="middle" fontSize="12" fill="#7c3aed">Obj</text>
          {/* raio 1: paralelo ao eixo → reflete pelo foco */}
          <line x1="130" y1="60" x2="580" y2="60" stroke="#2563eb" strokeWidth="1.5" markerEnd="url(#arr34a)" />
          <line x1="580" y1="60" x2="510" y2="115" stroke="#2563eb" strokeWidth="1.5" markerEnd="url(#arr34a)" />
          {/* raio 2: pelo foco → reflete paralelo */}
          <line x1="130" y1="60" x2="510" y2="115" stroke="#dc2626" strokeWidth="1.5" />
          <line x1="510" y1="115" x2="580" y2="115" stroke="#dc2626" strokeWidth="1.5" markerEnd="url(#arr34a)" />
          {/* imagem */}
          <line x1="510" y1="115" x2="510" y2="165" stroke="#16a34a" strokeWidth="2" strokeDasharray="5 3" />
          <text x="510" y="185" textAnchor="middle" fontSize="12" fill="#16a34a">Img (real, invertida)</text>
          <text x="350" y="215" textAnchor="middle" fontSize="13" fill="#0f172a">1/f = 1/p + 1/q | f = R/2 | M = −q/p</text>
        </svg>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Espelho convexo — imagem virtual, direita e menor">
          <defs>
            <marker id="arr34b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
          </defs>
          {/* espelho convexo (arco invertido) */}
          <path d="M 540 30 Q 480 100 540 170" fill="none" stroke="#1e293b" strokeWidth="3" />
          <text x="555" y="105" textAnchor="start" fontSize="12" fill="#1e293b">convexo</text>
          {/* eixo */}
          <line x1="40" y1="100" x2="650" y2="100" stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 3" />
          {/* foco virtual atrás do espelho */}
          <circle cx="590" cy="100" r="5" fill="#16a34a" />
          <text x="590" y="118" textAnchor="middle" fontSize="12" fill="#16a34a">F' (virtual)</text>
          {/* objeto */}
          <line x1="120" y1="100" x2="120" y2="50" stroke="#7c3aed" strokeWidth="2" />
          <polygon points="120,50 112,65 128,65" fill="#7c3aed" />
          <text x="120" y="130" textAnchor="middle" fontSize="12" fill="#7c3aed">Obj</text>
          {/* imagem virtual (menor, direita) */}
          <line x1="560" y1="100" x2="560" y2="78" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5 3" />
          <text x="560" y="68" textAnchor="middle" fontSize="11" fill="#dc2626">Img virtual, direita, menor</text>
          {/* rótulo geral */}
          <text x="350" y="185" textAnchor="middle" fontSize="13" fill="#0f172a">Espelho convexo: sempre imagem virtual, direita e menor — retrovisores</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Espelho Côncavo: Imagem Real"
          statement={<p>Um espelho côncavo tem distância focal f = 20 cm. Um objeto é colocado a p = 60 cm do vértice. Determine p' e a natureza da imagem.</p>}
          options={[
            {letter:"a", text:"p' = 30 cm — imagem real, invertida, menor"},
            {letter:"b", text:"p' = 30 cm — imagem virtual, direta, menor"},
            {letter:"c", text:"p' = 60 cm — imagem real, invertida, igual", correct:true},
            {letter:"d", text:"p' = 20 cm — imagem real, invertida, menor"},
          ]}
          resolution={<><M block={true}>{"\\frac{1}{f} = \\frac{1}{p} + \\frac{1}{p'} \\quad \\Rightarrow \\quad \\frac{1}{20} = \\frac{1}{60} + \\frac{1}{p'}"}</M><M block={true}>{"\\frac{1}{p'} = \\frac{1}{20} - \\frac{1}{60} = \\frac{3-1}{60} = \\frac{2}{60} \\quad \\Rightarrow \\quad p' = 30 \\text{ cm}"}</M><p>p' = 30 cm (positivo → real). A = −p'/p = −30/60 = −1/2: imagem real, invertida, menor (metade do tamanho). A alternativa (a) está correta.</p></>}
        />

        <Exercise
          level="Intermediário"
          title="2. Espelho Côncavo: Objeto Entre F e V"
          statement={<p>Espelho côncavo f = 15 cm. Objeto a p = 10 cm (entre F e V). Calcule p' e a ampliação A. A imagem é real ou virtual?</p>}
          options={[
            {letter:"a", text:"p' = −30 cm; A = +3 — virtual, direta, 3× maior", correct:true},
            {letter:"b", text:"p' = +30 cm; A = −3 — real, invertida, 3× maior"},
            {letter:"c", text:"p' = −10 cm; A = +1 — virtual, direta, igual"},
            {letter:"d", text:"p' = +6 cm; A = −0,6 — real, invertida, menor"},
          ]}
          resolution={<><M block={true}>{"\\frac{1}{15} = \\frac{1}{10} + \\frac{1}{p'} \\quad \\Rightarrow \\quad \\frac{1}{p'} = \\frac{1}{15} - \\frac{1}{10} = \\frac{2-3}{30} = -\\frac{1}{30}"}</M><M block={true}>{"p' = -30 \\text{ cm} \\quad (\\text{negativo} \\to \\text{imagem virtual, atrás do espelho})"}</M><M block={true}>{"A = -\\frac{p'}{p} = -\\frac{-30}{10} = +3 \\quad (\\text{direta, 3× ampliada})"}</M></>}
        />

        <Exercise
          level="Avançado"
          title="3. Espelho Convexo"
          statement={<p>Um espelho convexo tem raio de curvatura R = 40 cm. Um objeto está a p = 30 cm do vértice. Calcule p' e a ampliação A.</p>}
          options={[
            {letter:"a", text:"p' = +60 cm; A = −2"},
            {letter:"b", text:"p' = −12 cm; A = +0,4", correct:true},
            {letter:"c", text:"p' = −30 cm; A = +1"},
            {letter:"d", text:"p' = +12 cm; A = −0,4"},
          ]}
          resolution={<><p>Espelho convexo: f = −R/2 = −20 cm.</p><M block={true}>{"\\frac{1}{-20} = \\frac{1}{30} + \\frac{1}{p'} \\quad \\Rightarrow \\quad \\frac{1}{p'} = -\\frac{1}{20} - \\frac{1}{30} = \\frac{-3-2}{60} = -\\frac{5}{60}"}</M><M block={true}>{"p' = -12 \\text{ cm} \\quad (\\text{virtual, atrás do espelho})"}</M><M block={true}>{"A = -\\frac{-12}{30} = +0{,}4 \\quad (\\text{direta, menor})"}</M></>}
        />

        <Exercise
          level="Contextualizado"
          title="4. Farol de Automóvel: Lâmpada no Foco"
          statement={<p>O refletor parabólico de um farol de carro usa um espelho côncavo (aproximadamente parabólico). A lâmpada halógena é posicionada exatamente no foco do espelho. Qual é a característica do feixe de luz refletido e por que isso é importante para a segurança no trânsito?</p>}
          options={[
            {letter:"a", text:"O feixe é divergente — ilumina área ampla à frente do veículo"},
            {letter:"b", text:"O feixe é paralelo (colimado) — ilumina longas distâncias com eficiência", correct:true},
            {letter:"c", text:"O feixe é convergente — foca em um ponto à frente do carro"},
            {letter:"d", text:"O feixe é aleatório — depende do ângulo de acendimento da lâmpada"},
          ]}
          resolution={<><p>Quando o objeto (lâmpada) está exatamente no foco F do espelho côncavo, aplica-se a equação de Gauss:</p><M block={true}>{"\\frac{1}{f} = \\frac{1}{f} + \\frac{1}{p'} \\quad \\Rightarrow \\quad \\frac{1}{p'} = 0 \\quad \\Rightarrow \\quad p' \\to \\infty"}</M><p>A imagem se forma no infinito — os raios refletidos emergem paralelos entre si (feixe colimado). Isso permite iluminar estradas a grandes distâncias sem dispersão significativa, aumentando o alcance do farol. O mesmo princípio é usado em holofotes e telescópios de rádio.</p></>}
        />

        <Exercise
          level="Contextualizado"
          title="5. Retrovisor Convexo: Por Que é Preferido?"
          statement={<p>Um retrovisor convexo tem distância focal f = −0,50 m (50 cm). Um veículo atrás está a p = 10 m. Calcule p' e A, e explique por que retrovisores externos usam espelhos convexos em vez de planos.</p>}
          options={[
            {letter:"a", text:"p' ≈ −0,48 m; A ≈ 0,048 — convexo dá campo visual amplo com imagem sempre visível", correct:true},
            {letter:"b", text:"p' ≈ +0,48 m; A ≈ −0,048 — convexo forma imagem real menor"},
            {letter:"c", text:"p' ≈ −10 m; A ≈ 1 — convexo igual ao plano"},
            {letter:"d", text:"p' ≈ +10 m; A ≈ −1 — convexo inverte a imagem"},
          ]}
          resolution={<><M block={true}>{"\\frac{1}{-0{,}50} = \\frac{1}{10} + \\frac{1}{p'} \\quad \\Rightarrow \\quad \\frac{1}{p'} = -2 - 0{,}1 = -2{,}1"}</M><M block={true}>{"p' \\approx -0{,}476 \\text{ m} \\approx -0{,}48 \\text{ m} \\quad (\\text{virtual, atrás})"}</M><M block={true}>{"A = -\\frac{-0{,}48}{10} \\approx +0{,}048 \\quad (\\text{imagem muito menor, direta})"}</M><p>Apesar da imagem muito reduzida, o espelho convexo tem campo visual muito maior que o plano, permitindo ao motorista ver veículos nos ângulos laterais que um espelho plano não cobriria. A imagem sempre aparece — nunca "desaparece" como ocorreria com um espelho plano se o objeto estivesse fora do ângulo de visão. Por isso o aviso nos retrovisores: "objects in mirror are closer than they appear".</p></>}
        />
      </section>
    </article>
  );
}
