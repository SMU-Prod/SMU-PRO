"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap17Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 17</span>
          <h1>Conservação do Momento e Colisões Mecânicas</h1>
          <p>
            Colisões são eventos rápidos e violentos — mas a física os governa com precisão. Aprenda a
            classificar colisões, calcular velocidades finais e entender por que algumas conservam energia
            cinética enquanto outras não.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Princípio</span>
        <h2>1. Conservação do Momento Linear em Colisões</h2>
        <p>
          Durante uma colisão, as forças internas (de interação entre os corpos) são muito maiores que as
          forças externas (como o peso). Por isso, podemos tratar o sistema como <strong>isolado</strong>
          durante o impacto, e o momento linear total se conserva:
        </p>
        <M block={true}>{"\\sum\\vec{p}_{antes} = \\sum\\vec{p}_{depois}"}</M>
        <M block={true}>{"m_1\\vec{v}_{1i} + m_2\\vec{v}_{2i} = m_1\\vec{v}_{1f} + m_2\\vec{v}_{2f}"}</M>
        <div className="lesson-highlight">
          <h3>Atenção ao caráter vetorial</h3>
          <p>
            O momento é vetorial. Em problemas 1D, defina um sentido positivo e use sinais. Em problemas
            2D, aplique a conservação separadamente para x e y.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos de Colisão</span>
        <h2>2. Colisão Perfeitamente Inelástica</h2>
        <p>
          Na <strong>colisão perfeitamente inelástica</strong>, os corpos se unem após o impacto e passam
          a se mover com a mesma velocidade. É o caso de máxima perda de energia cinética compatível com
          a conservação do momento:
        </p>
        <M block={true}>{"m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2)v_f"}</M>
        <M block={true}>{"v_f = \\frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}"}</M>
        <p>
          A variação de energia cinética é:
        </p>
        <M block={true}>{"\\Delta E_c = \\frac{1}{2}(m_1+m_2)v_f^2 - \\left(\\frac{1}{2}m_1v_{1i}^2 + \\frac{1}{2}m_2v_{2i}^2\\right) < 0"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos de Colisão</span>
        <h2>3. Colisão Perfeitamente Elástica</h2>
        <p>
          Na <strong>colisão perfeitamente elástica</strong>, tanto o momento linear quanto a energia
          cinética se conservam. Isso nos fornece um sistema de duas equações:
        </p>
        <M block={true}>{"m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f} \\quad \\text{(conservação de } p\\text{)}"}</M>
        <M block={true}>{"\\frac{1}{2}m_1 v_{1i}^2 + \\frac{1}{2}m_2 v_{2i}^2 = \\frac{1}{2}m_1 v_{1f}^2 + \\frac{1}{2}m_2 v_{2f}^2 \\quad \\text{(conservação de }E_c\\text{)}"}</M>
        <p>Resolvendo o sistema, obtemos as velocidades finais:</p>
        <M block={true}>{"v_{1f} = \\frac{m_1 - m_2}{m_1 + m_2}v_{1i} + \\frac{2m_2}{m_1 + m_2}v_{2i}"}</M>
        <M block={true}>{"v_{2f} = \\frac{2m_1}{m_1 + m_2}v_{1i} + \\frac{m_2 - m_1}{m_1 + m_2}v_{2i}"}</M>
        <div className="lesson-highlight">
          <h3>Caso especial: massas iguais</h3>
          <p>
            Se <M>{"m_1 = m_2"}</M>: <M>{"v_{1f} = v_{2i}"}</M> e <M>{"v_{2f} = v_{1i}"}</M>.
            As velocidades são trocadas! Este é o fenômeno das bolinhas de Newton.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Caso Geral</span>
        <h2>4. Colisão Parcialmente Inelástica</h2>
        <p>
          Na realidade, a maioria das colisões é <strong>parcialmente inelástica</strong>: o momento se
          conserva, mas parte da energia cinética é convertida em calor, som e deformação permanente. Os
          corpos não se unem, mas tampouco conservam toda a energia cinética.
        </p>
        <p>
          Este é o caso geral, situado entre os dois extremos:
        </p>
        <M block={true}>{"\\Delta E_c|_{\\text{perfeitamente inelástica}} \\leq |\\Delta E_c|_{\\text{parcialmente inelástica}} \\leq 0"}</M>
        <p>
          (nenhuma variação em colisões elásticas).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Parâmetro</span>
        <h2>5. Coeficiente de Restituição</h2>
        <p>
          O <strong>coeficiente de restituição</strong> <M>{"e"}</M> quantifica a elasticidade de uma
          colisão. Ele é definido como a razão entre a velocidade relativa de separação e a velocidade
          relativa de aproximação:
        </p>
        <M block={true}>{"e = \\frac{|v_{2f} - v_{1f}|}{|v_{1i} - v_{2i}|} = \\frac{\\text{velocidade relativa de separação}}{\\text{velocidade relativa de aproximação}}"}</M>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo de colisão</th><th>Coeficiente e</th><th>Energia cinética</th></tr>
            </thead>
            <tbody>
              <tr><td>Perfeitamente elástica</td><td>e = 1</td><td>Conservada</td></tr>
              <tr><td>Parcialmente inelástica</td><td>0 &lt; e &lt; 1</td><td>Parcialmente perdida</td></tr>
              <tr><td>Perfeitamente inelástica</td><td>e = 0</td><td>Máxima perda (corpos unidos)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>6. Diagramas de Colisão — Antes e Depois</h2>
        <figure className="lesson-figure">
          <svg viewBox="0 0 420 240" width="420" height="240" aria-label="Diagramas de colisão elástica e inelástica">
            {/* Título col. elástica */}
            <text x="80" y="18" fontSize="11" fill="#3b82f6" fontWeight="bold" textAnchor="middle">Colisão Elástica</text>
            {/* Antes */}
            <text x="10" y="50" fontSize="10" fill="#555">ANTES</text>
            <circle cx="50" cy="70" r="18" fill="#3b82f6" opacity="0.8"/>
            <text x="50" y="74" fontSize="10" fill="white" textAnchor="middle">m₁</text>
            <line x1="68" y1="70" x2="90" y2="70" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="79" y="63" fontSize="9" fill="#3b82f6">v₁ᵢ</text>
            <circle cx="130" cy="70" r="18" fill="#e07b39" opacity="0.8"/>
            <text x="130" y="74" fontSize="10" fill="white" textAnchor="middle">m₂</text>
            <text x="148" y="74" fontSize="9" fill="#555">em repouso</text>
            {/* Depois elástica */}
            <text x="10" y="115" fontSize="10" fill="#555">DEPOIS</text>
            <circle cx="50" cy="135" r="18" fill="#3b82f6" opacity="0.5"/>
            <text x="50" y="139" fontSize="10" fill="#333" textAnchor="middle">m₁</text>
            <line x1="30" y1="135" x2="8" y2="135" stroke="#3b82f6" strokeWidth="2"/>
            <text x="18" y="128" fontSize="9" fill="#3b82f6">v₁f</text>
            <circle cx="130" cy="135" r="18" fill="#e07b39" opacity="0.8"/>
            <text x="130" y="139" fontSize="10" fill="white" textAnchor="middle">m₂</text>
            <line x1="148" y1="135" x2="170" y2="135" stroke="#e07b39" strokeWidth="2"/>
            <text x="152" y="128" fontSize="9" fill="#e07b39">v₂f</text>

            {/* Separador */}
            <line x1="215" y1="20" x2="215" y2="220" stroke="#ddd" strokeWidth="1.5"/>

            {/* Título col. inelástica */}
            <text x="330" y="18" fontSize="11" fill="#e07b39" fontWeight="bold" textAnchor="middle">Colisão Inelástica</text>
            {/* Antes */}
            <text x="225" y="50" fontSize="10" fill="#555">ANTES</text>
            <circle cx="265" cy="70" r="18" fill="#3b82f6" opacity="0.8"/>
            <text x="265" y="74" fontSize="10" fill="white" textAnchor="middle">m₁</text>
            <line x1="283" y1="70" x2="305" y2="70" stroke="#3b82f6" strokeWidth="2"/>
            <text x="292" y="63" fontSize="9" fill="#3b82f6">v₁ᵢ</text>
            <circle cx="345" cy="70" r="18" fill="#e07b39" opacity="0.8"/>
            <text x="345" y="74" fontSize="10" fill="white" textAnchor="middle">m₂</text>
            {/* Depois inelástica: corpos unidos */}
            <text x="225" y="115" fontSize="10" fill="#555">DEPOIS</text>
            <ellipse cx="305" cy="135" rx="38" ry="20" fill="#666" opacity="0.7"/>
            <text x="295" y="140" fontSize="10" fill="white" textAnchor="middle">m₁+m₂</text>
            <line x1="343" y1="135" x2="370" y2="135" stroke="#666" strokeWidth="2"/>
            <text x="348" y="128" fontSize="9" fill="#555">vf</text>

            {/* Legenda energia */}
            <rect x="30" y="185" width="10" height="10" fill="#3b82f6" opacity="0.7"/>
            <text x="44" y="194" fontSize="9" fill="#555">Ec conservada</text>
            <rect x="235" y="185" width="10" height="10" fill="#e07b39" opacity="0.7"/>
            <text x="249" y="194" fontSize="9" fill="#555">Ec parcialmente perdida</text>

            {/* Seta */}
            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#3b82f6"/>
              </marker>
            </defs>
          </svg>
          <figcaption>Colisão elástica: corpos ricocheteiam conservando energia cinética. Colisão inelástica: corpos se unem, energia cinética é parcialmente perdida.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Bidimensional</span>
        <h2>7. Colisão em Duas Dimensões</h2>
        <p>
          Em colisões 2D, a conservação do momento aplica-se vetorialmente. Decompondo em componentes:
        </p>
        <M block={true}>{"\\text{Eixo x: } m_1v_{1ix} + m_2v_{2ix} = m_1v_{1fx} + m_2v_{2fx}"}</M>
        <M block={true}>{"\\text{Eixo y: } m_1v_{1iy} + m_2v_{2iy} = m_1v_{1fy} + m_2v_{2fy}"}</M>
        <p>
          Em colisões elásticas 2D, acrescenta-se a conservação de energia cinética como terceira equação.
          Problemas típicos envolvem bolas de bilhar e partículas subatômicas.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fenômeno</span>
        <h2>8. Explosão — Fragmentação</h2>
        <p>
          Uma <strong>explosão</strong> pode ser vista como uma colisão inversa: um sistema inicialmente
          em repouso se fragmenta em partes que se movem em direções opostas. O momento total inicial é zero,
          portanto após a explosão:
        </p>
        <M block={true}>{"\\vec{p}_{total} = 0 \\Rightarrow m_1\\vec{v}_1 + m_2\\vec{v}_2 = 0 \\Rightarrow m_1\\vec{v}_1 = -m_2\\vec{v}_2"}</M>
        <p>
          Os momentos dos fragmentos são iguais em módulo e opostos em direção. Exemplos: explosão de
          bomba, disparo de arma de fogo, separação de estágios de foguete.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicação</span>
        <h2>9. Recuo de Arma</h2>
        <p>
          Quando um projétil é disparado, a força dos gases atua em ambas as direções (3ª lei de Newton).
          Pelo princípio da conservação do momento (sistema inicialmente em repouso):
        </p>
        <M block={true}>{"0 = m_{proj}\\,v_{proj} + m_{arma}\\,v_{arma} \\Rightarrow v_{arma} = -\\frac{m_{proj}\\,v_{proj}}{m_{arma}}"}</M>
        <p>
          O sinal negativo indica que a arma recua (move-se em sentido oposto ao projétil). Como
          <M>{"m_{arma} \\gg m_{proj}"}</M>, temos <M>{"v_{arma} \\ll v_{proj}"}</M>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Instrumento</span>
        <h2>10. Pêndulo Balístico</h2>
        <p>
          O <strong>pêndulo balístico</strong> é um dispositivo clássico para medir a velocidade de
          projéteis. Um projétil de massa <M>{"m"}</M> e velocidade <M>{"v_0"}</M> é disparado contra um
          bloco de massa <M>{"M"}</M> suspenso por um fio. O projétil se encrava no bloco (colisão
          perfeitamente inelástica) e o conjunto sobe até uma altura <M>{"h"}</M>:
        </p>
        <M block={true}>{"mv_0 = (m+M)v_1 \\quad \\text{(conservação de }p\\text{)}"}</M>
        <M block={true}>{"\\frac{1}{2}(m+M)v_1^2 = (m+M)gh \\quad \\text{(conservação de }E_m\\text{)}"}</M>
        <M block={true}>{"v_0 = \\frac{m+M}{m}\\sqrt{2gh}"}</M>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparativo</span>
        <h2>11. Tabela: Tipos de Colisão</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Momento (p)</th>
                <th>Energia cinética (Ec)</th>
                <th>Coef. e</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Perfeitamente elástica</td>
                <td>Conservado</td>
                <td>Conservada</td>
                <td>e = 1</td>
                <td>Bolas de bilhar (ideal), partículas atômicas</td>
              </tr>
              <tr>
                <td>Parcialmente inelástica</td>
                <td>Conservado</td>
                <td>Parcialmente perdida</td>
                <td>0 &lt; e &lt; 1</td>
                <td>Bola de tênis × quadra</td>
              </tr>
              <tr>
                <td>Perfeitamente inelástica</td>
                <td>Conservado</td>
                <td>Máxima perda</td>
                <td>e = 0</td>
                <td>Argila, carros em colisão</td>
              </tr>
              <tr>
                <td>Explosão</td>
                <td>Conservado (=0)</td>
                <td>Aumenta (origem química)</td>
                <td>—</td>
                <td>Fogos de artifício, foguetes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>p</span>
            <h3>Conservação</h3>
            <M block={true}>{"\\Sigma p_{antes} = \\Sigma p_{depois}"}</M>
          </div>
          <div className="math-card">
            <span>vf</span>
            <h3>Inelástica total</h3>
            <M block={true}>{"v_f = \\frac{m_1v_1 + m_2v_2}{m_1+m_2}"}</M>
          </div>
          <div className="math-card">
            <span>e</span>
            <h3>Coef. restituição</h3>
            <M block={true}>{"e = \\frac{|v_{2f}-v_{1f}|}{|v_{1i}-v_{2i}|}"}</M>
          </div>
          <div className="math-card">
            <span>v₀</span>
            <h3>Pêndulo balístico</h3>
            <M block={true}>{"v_0 = \\frac{m+M}{m}\\sqrt{2gh}"}</M>
          </div>
          <div className="math-card">
            <span>Exp.</span>
            <h3>Explosão (repouso)</h3>
            <M block={true}>{"m_1 v_1 = -m_2 v_2"}</M>
          </div>
          <div className="math-card">
            <span>El.</span>
            <h3>Elástica (m₁=m₂)</h3>
            <M block={true}>{"v_{1f} = v_{2i},\\; v_{2f} = v_{1i}"}</M>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Colisão</span>
        <h2>Síntese Visual: Tipos de Colisão</h2>
        <p>
          Conservação do momento linear vale em todas as colisões; a energia
          cinética só se conserva na colisão perfeitamente elástica.
        </p>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Colisão elástica: dois blocos, antes e depois">
          <defs>
            <marker id="arr17a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
            <marker id="arr17b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
          </defs>
          {/* antes */}
          <text x="175" y="22" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">Antes</text>
          <rect x="60" y="35" width="90" height="55" rx="5" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="105" y="67" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1d4ed8">m₁</text>
          <line x1="150" y1="62" x2="215" y2="62" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arr17a)" />
          <text x="183" y="53" textAnchor="middle" fontSize="12" fill="#2563eb">v₁</text>
          <rect x="230" y="35" width="90" height="55" rx="5" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="275" y="67" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#9d174d">m₂</text>
          <text x="275" y="110" textAnchor="middle" fontSize="12" fill="#9d174d">v₂ = 0</text>

          {/* depois (elástica — m₁=m₂: bloco para, outro sai) */}
          <text x="525" y="22" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">Depois (elástica m₁=m₂)</text>
          <rect x="380" y="35" width="90" height="55" rx="5" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="425" y="67" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1d4ed8">m₁</text>
          <text x="425" y="110" textAnchor="middle" fontSize="12" fill="#2563eb">V₁ = 0</text>
          <rect x="530" y="35" width="90" height="55" rx="5" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="575" y="67" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#9d174d">m₂</text>
          <line x1="620" y1="62" x2="670" y2="62" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr17b)" />
          <text x="645" y="53" textAnchor="middle" fontSize="12" fill="#dc2626">V₂=v₁</text>

          <text x="350" y="150" textAnchor="middle" fontSize="13" fill="#0f172a">p conservado: m₁v₁ + m₂v₂ = m₁V₁ + m₂V₂</text>
          <text x="350" y="170" textAnchor="middle" fontSize="13" fill="#0f172a">Ec conservada (elástica): ½m₁v₁² + ½m₂v₂² = ½m₁V₁² + ½m₂V₂²</text>
        </svg>

        <svg viewBox="0 0 700 180" className="lesson-svg" aria-label="Coeficiente de restituição e tipos de colisão">
          <rect x="60" y="30" width="180" height="110" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="150" y="57" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e3a8a">Elástica (e=1)</text>
          <text x="150" y="77" textAnchor="middle" fontSize="12" fill="#1e3a8a">p e Ec conservados</text>
          <text x="150" y="95" textAnchor="middle" fontSize="12" fill="#1e3a8a">ex: bola de bilhar</text>
          <text x="150" y="113" textAnchor="middle" fontSize="12" fill="#1e3a8a">(idealização)</text>

          <rect x="260" y="30" width="180" height="110" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="350" y="57" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#713f12">Parcial (0{"<"}e{"<"}1)</text>
          <text x="350" y="77" textAnchor="middle" fontSize="12" fill="#713f12">p conservado</text>
          <text x="350" y="95" textAnchor="middle" fontSize="12" fill="#713f12">Ec parcialmente perdida</text>
          <text x="350" y="113" textAnchor="middle" fontSize="12" fill="#713f12">ex: colisão de carros</text>

          <rect x="460" y="30" width="180" height="110" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="550" y="57" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#9d174d">Inelástica (e=0)</text>
          <text x="550" y="77" textAnchor="middle" fontSize="12" fill="#9d174d">p conservado</text>
          <text x="550" y="95" textAnchor="middle" fontSize="12" fill="#9d174d">máx perda de Ec</text>
          <text x="550" y="113" textAnchor="middle" fontSize="12" fill="#9d174d">ficam juntos</text>

          <text x="350" y="160" textAnchor="middle" fontSize="13" fill="#0f172a">e = (V₂−V₁)/(v₁−v₂) | e = 1 elástica; e = 0 perfeitamente inelástica</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Colisão Perfeitamente Inelástica"
          statement={
            <p>
              Uma bola de <M>{"m_1 = 2\\,\\text{kg}"}</M> com velocidade <M>{"v_1 = 6\\,\\text{m/s}"}</M>
              colide com uma bola estacionária de <M>{"m_2 = 4\\,\\text{kg}"}</M>. As duas se unem após
              o impacto. Qual é a velocidade final do conjunto?
            </p>
          }
          options={[
            { letter: "a", text: "3 m/s" },
            { letter: "b", text: "2 m/s", correct: true },
            { letter: "c", text: "4 m/s" },
            { letter: "d", text: "1 m/s" },
          ]}
          resolution={
            <>
              <M block={true}>{"m_1 v_1 = (m_1+m_2)v_f"}</M>
              <M block={true}>{"v_f = \\frac{2 \\times 6}{2+4} = \\frac{12}{6} = 2\\,\\text{m/s}"}</M>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Colisão Elástica com Massas Iguais"
          statement={
            <p>
              Uma bola de <M>{"m = 1\\,\\text{kg}"}</M> com velocidade <M>{"v = 10\\,\\text{m/s}"}</M>
              colide elasticamente com outra bola de <M>{"m = 1\\,\\text{kg}"}</M> em repouso. Quais são
              as velocidades finais?
            </p>
          }
          options={[
            { letter: "a", text: "v₁f = 5 m/s; v₂f = 5 m/s" },
            { letter: "b", text: "v₁f = 0 m/s; v₂f = 10 m/s", correct: true },
            { letter: "c", text: "v₁f = 10 m/s; v₂f = 0 m/s" },
            { letter: "d", text: "v₁f = 7 m/s; v₂f = 3 m/s" },
          ]}
          resolution={
            <>
              <p>Com massas iguais em colisão elástica, as velocidades se trocam:</p>
              <M block={true}>{"v_{1f} = v_{2i} = 0\\,\\text{m/s} \\qquad v_{2f} = v_{1i} = 10\\,\\text{m/s}"}</M>
              <p>Verifique: <M>{"p_{antes} = 1 \\times 10 = 10\\,\\text{kg·m/s}"}</M>, <M>{"p_{depois} = 0 + 10 = 10\\,\\text{kg·m/s}"}</M>. ✓</p>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Pêndulo Balístico"
          statement={
            <p>
              Um projétil de <M>{"m = 10\\,\\text{g} = 0{,}01\\,\\text{kg}"}</M> e velocidade
              <M>{"v_0 = 400\\,\\text{m/s}"}</M> se encrava em um bloco de <M>{"M = 2\\,\\text{kg}"}</M>
              em repouso suspenso por um fio. Adote <M>{"g = 10\\,\\text{m/s}^2"}</M>. Qual a altura máxima
              atingida pelo conjunto?
            </p>
          }
          options={[
            { letter: "a", text: "0,10 m" },
            { letter: "b", text: "0,20 m", correct: true },
            { letter: "c", text: "0,40 m" },
            { letter: "d", text: "0,80 m" },
          ]}
          resolution={
            <>
              <p>1ª etapa: colisão inelástica (conservação de p):</p>
              <M block={true}>{"mv_0 = (m+M)v_1 \\Rightarrow v_1 = \\frac{0{,}01 \\times 400}{2{,}01} \\approx \\frac{4}{2{,}01} \\approx 1{,}99\\,\\text{m/s}"}</M>
              <p>2ª etapa: subida (conservação de Em):</p>
              <M block={true}>{"h = \\frac{v_1^2}{2g} \\approx \\frac{(1{,}99)^2}{20} \\approx \\frac{3{,}96}{20} \\approx 0{,}20\\,\\text{m}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Carrinhos de Choque"
          statement={
            <p>
              Um carro de diversão com uma pessoa (total <M>{"180\\,\\text{kg}"}</M>) se move a
              <M>{"5\\,\\text{m/s}"}</M> e colide com um carro parado (total <M>{"160\\,\\text{kg}"}</M>).
              Após a colisão perfeitamente inelástica, qual é a velocidade do conjunto?
            </p>
          }
          options={[
            { letter: "a", text: "2,65 m/s", correct: true },
            { letter: "b", text: "3,12 m/s" },
            { letter: "c", text: "4,50 m/s" },
            { letter: "d", text: "1,80 m/s" },
          ]}
          resolution={
            <>
              <M block={true}>{"v_f = \\frac{m_1 v_1}{m_1 + m_2} = \\frac{180 \\times 5}{180 + 160} = \\frac{900}{340} \\approx 2{,}65\\,\\text{m/s}"}</M>
            </>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Recuo de Rifle"
          statement={
            <p>
              Um rifle de <M>{"M = 4\\,\\text{kg}"}</M> dispara um projétil de <M>{"m = 20\\,\\text{g} = 0{,}02\\,\\text{kg}"}</M>
              com velocidade <M>{"v_{proj} = 900\\,\\text{m/s}"}</M>. Qual é a velocidade de recuo do rifle?
              Compare os impulsos no projétil e no atirador.
            </p>
          }
          options={[
            { letter: "a", text: "4,5 m/s" },
            { letter: "b", text: "9,0 m/s" },
            { letter: "c", text: "0,45 m/s" },
            { letter: "d", text: "4,5 m/s; impulsos iguais em módulo", correct: true },
          ]}
          resolution={
            <>
              <M block={true}>{"0 = m v_{proj} + M v_{rifle} \\Rightarrow v_{rifle} = -\\frac{mv_{proj}}{M} = -\\frac{0{,}02 \\times 900}{4} = -4{,}5\\,\\text{m/s}"}</M>
              <p>
                Impulso no projétil: <M>{"J = 0{,}02 \\times 900 = 18\\,\\text{N·s}"}</M>.
                Impulso no rifle: <M>{"J = 4 \\times 4{,}5 = 18\\,\\text{N·s}"}</M> (3ª lei de Newton — iguais em módulo).
              </p>
            </>
          }
        />
      </section>
    </article>
  );
}
