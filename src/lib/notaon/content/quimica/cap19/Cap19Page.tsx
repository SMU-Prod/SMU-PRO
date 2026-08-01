"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap19Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 19</span>
          <h1>Leis Ponderais e Estequiometria Simples</h1>
          <p>
            Domine as leis fundamentais que governam as reações químicas e aprenda
            a realizar cálculos estequiométricos relacionando mols, massas, volumes
            e número de partículas a partir de uma equação balanceada.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Lei de Lavoisier — Conservação da Massa</h2>
        <p>
          Antoine Lavoisier (1774) estabeleceu que, em um sistema fechado, a massa
          total dos reagentes é sempre igual à massa total dos produtos. Essa lei é
          resumida na famosa frase: <em>"Na natureza nada se cria, nada se perde,
          tudo se transforma."</em>
        </p>
        <div className="lesson-highlight">
          <h3>Lei de Lavoisier</h3>
          <p>
            <M>{"m_{\\text{reagentes}} = m_{\\text{produtos}}"}</M>
          </p>
          <p>
            Exemplo: <M>{"2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}"}</M>.
            Se pesarmos 4 g de <M>{"\\text{H}_2"}</M> e 32 g de <M>{"\\text{O}_2"}</M>,
            obteremos 36 g de <M>{"\\text{H}_2\\text{O}"}</M>.
          </p>
        </div>
        <p>
          A lei explica por que balanceamos equações: os átomos não são criados nem
          destruídos, apenas reorganizados. Em experimentos laboratoriais, qualquer
          variação de massa aparente se deve a gases que escapam ou entram no
          sistema.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>2. Lei de Proust — Proporções Definidas</h2>
        <p>
          Joseph Proust (1799) demonstrou que um composto químico puro sempre
          contém seus elementos em proporções de massa fixas e definidas,
          independentemente da origem ou do método de preparação. A água, por
          exemplo, é sempre formada por hidrogênio e oxigênio na proporção em
          massa de 1:8.
        </p>
        <div className="lesson-highlight">
          <h3>Lei de Proust</h3>
          <p>
            Em <M>{"\\text{H}_2\\text{O}"}</M>: proporção <M>{"\\text{H}:\\text{O} = 2:16 = 1:8"}</M>
          </p>
          <p>
            Em <M>{"\\text{CO}_2"}</M>: proporção <M>{"\\text{C}:\\text{O} = 12:32 = 3:8"}</M>
          </p>
        </div>
        <p>
          Essa lei é a base do cálculo estequiométrico por massa: se sabemos a
          proporção definida, podemos calcular quantidades de reagentes ou produtos
          usando regra de três simples.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equações</span>
        <h2>3. Balanceamento de Equações Químicas</h2>
        <p>
          Balancear uma equação significa ajustar os coeficientes estequiométricos
          para que o número de átomos de cada elemento seja igual nos dois lados.
          Nunca altere os índices das fórmulas dos compostos — isso mudaria a
          substância.
        </p>
        <p>
          <strong>Método do acerto de coeficientes:</strong> comece pelos elementos
          que aparecem em apenas um composto de cada lado. Hidrogênio e oxigênio
          geralmente ficam por último.
        </p>
        <div className="lesson-highlight">
          <h3>Exemplo de balanceamento</h3>
          <p>
            Não balanceada: <M>{"\\text{Fe} + \\text{O}_2 \\rightarrow \\text{Fe}_2\\text{O}_3"}</M>
          </p>
          <p>
            Balanceada: <M>{"4\\,\\text{Fe} + 3\\,\\text{O}_2 \\rightarrow 2\\,\\text{Fe}_2\\text{O}_3"}</M>
          </p>
          <p>Verificação: Fe: 4=4 ✓ | O: 6=6 ✓</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equações</span>
        <h2>4. Leitura da Equação Química</h2>
        <p>
          Uma equação química representa uma reação de forma simbólica. Os
          reagentes ficam à esquerda, os produtos à direita, separados por uma seta.
          As condições de reação (temperatura, catalisador, luz) são indicadas sobre
          ou sob a seta.
        </p>
        <p>
          Os estados físicos são indicados pelos símbolos <strong>(s)</strong> sólido,
          <strong>(l)</strong> líquido, <strong>(g)</strong> gasoso e
          <strong>(aq)</strong> em solução aquosa.
        </p>
        <div className="lesson-highlight">
          <h3>Componentes de uma equação</h3>
          <p>
            <M>{"a\\,A_{(s)} + b\\,B_{(g)} \\xrightarrow{\\text{condição}} c\\,C_{(l)} + d\\,D_{(g)}"}</M>
          </p>
          <p>
            <em>a, b, c, d</em> = coeficientes estequiométricos (número de mols de cada espécie)
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Estequiometria</span>
        <h2>5. Relação Estequiométrica em Mols</h2>
        <p>
          Os coeficientes de uma equação balanceada indicam a proporção em mols
          entre todas as espécies envolvidas. Essa é a informação central do cálculo
          estequiométrico.
        </p>
        <div className="lesson-highlight">
          <h3>Relação de mols na síntese da água</h3>
          <p>
            <M>{"2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}"}</M>
          </p>
          <p>
            2 mol de <M>{"\\text{H}_2"}</M> reagem com 1 mol de <M>{"\\text{O}_2"}</M>
            para formar 2 mol de <M>{"\\text{H}_2\\text{O}"}</M>.
          </p>
          <p>Proporção: <M>{"n(\\text{H}_2) : n(\\text{O}_2) : n(\\text{H}_2\\text{O}) = 2:1:2"}</M></p>
        </div>
        <p>
          Se quero saber quantos mols de O₂ reagem com 6 mol de H₂: pela proporção
          2:1, serão 3 mol de O₂. A proporcionalidade direta é sempre válida.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cálculo</span>
        <h2>6. Cálculo Estequiométrico por Mol</h2>
        <p>
          O caminho mais direto do cálculo estequiométrico é trabalhar em mols:
          converta a massa do dado em mols, aplique a proporção dos coeficientes e,
          se necessário, converta o resultado de mols para gramas.
        </p>
        <p>
          <strong>Fórmula geral:</strong> <M>{"n = \\dfrac{m}{M}"}</M>, onde <em>m</em>
          é a massa em gramas e <em>M</em> é a massa molar em g/mol.
        </p>
        <div className="lesson-highlight">
          <h3>Roteiro de cálculo</h3>
          <p>1. Escreva e balance a equação.</p>
          <p>2. Identifique as espécies envolvidas e seus coeficientes.</p>
          <p>3. Calcule os mols da espécie conhecida: <M>{"n = m/M"}</M>.</p>
          <p>4. Use a proporção dos coeficientes para obter os mols da espécie desejada.</p>
          <p>5. Converta mols em massa, volume ou partículas conforme necessário.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cálculo</span>
        <h2>7. Cálculo Estequiométrico por Massa</h2>
        <p>
          Quando os dados são fornecidos em gramas, podemos montar uma regra de três
          diretamente com as massas molares dos compostos, multiplicadas pelos
          coeficientes. Isso equivale a trabalhar em mols de forma compacta.
        </p>
        <div className="lesson-highlight">
          <h3>Regra de três com massas</h3>
          <p>
            Para <M>{"a\\,A + b\\,B \\rightarrow c\\,C"}</M>:
          </p>
          <p>
            <M>{"\\frac{a \\times M_A}{m_A(\\text{dado})} = \\frac{c \\times M_C}{m_C(\\text{calc})}"}</M>
          </p>
          <p>
            As massas molares <M>{"M_A"}</M> e <M>{"M_C"}</M> são multiplicadas pelos
            respectivos coeficientes estequiométricos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exemplo Resolvido</span>
        <h2>8. Exemplo Completo: Quantos Gramas de H₂O são Produzidos com 4 g de H₂?</h2>
        <p>
          <strong>Equação:</strong> <M>{"2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}"}</M>
        </p>
        <p>
          <strong>Massas molares:</strong> H₂ = 2 g/mol; H₂O = 18 g/mol.
        </p>
        <p>
          <strong>Passo 1:</strong> mols de H₂ = <M>{"\\dfrac{4\\,\\text{g}}{2\\,\\text{g/mol}} = 2\\,\\text{mol}"}</M>
        </p>
        <p>
          <strong>Passo 2:</strong> pela proporção 2:2, 2 mol de H₂ produzem 2 mol de H₂O.
        </p>
        <p>
          <strong>Passo 3:</strong> massa de H₂O = <M>{"2\\,\\text{mol} \\times 18\\,\\text{g/mol} = 36\\,\\text{g}"}</M>
        </p>
        <div className="lesson-highlight">
          <h3>Resposta</h3>
          <p>4 g de <M>{"\\text{H}_2"}</M> produzem <strong>36 g</strong> de <M>{"\\text{H}_2\\text{O}"}</M>.</p>
          <p>Verificação pela Lei de Lavoisier: 4 g H₂ + 32 g O₂ = 36 g H₂O ✓</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gases</span>
        <h2>9. Cálculo com Volumes de Gases</h2>
        <p>
          Nas CNTP (0 °C e 1 atm), 1 mol de qualquer gás ocupa 22,4 L (volume molar).
          Nas condições normais usadas no ENEM (25 °C e 1 atm), adota-se 25 L/mol.
          A proporção entre volumes de gases é diretamente igual à proporção dos
          coeficientes estequiométricos (mesma T e P).
        </p>
        <div className="lesson-highlight">
          <h3>Volume molar e proporção de gases</h3>
          <p>
            <M>{"V = n \\times 22{,}4\\,\\text{L/mol (CNTP)}"}</M>
          </p>
          <p>
            Para gases: <M>{"\\dfrac{V_A}{a} = \\dfrac{V_B}{b}"}</M> (mesma T e P)
          </p>
          <p>
            Exemplo: Na síntese da amônia <M>{"\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3"}</M>,
            1 L de N₂ reage com 3 L de H₂ e produz 2 L de NH₃.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama</span>
        <h2>10. Mapa Estequiométrico</h2>
        <p>
          O diagrama abaixo sintetiza as quatro grandezas interconvertíveis na
          estequiometria e como transitar entre elas usando a equação balanceada
          como ponto central.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 280" width="480" height="280" aria-label="Mapa estequiométrico mostrando conversões entre mol, massa, volume e partículas">
            {/* Centro: Equação balanceada */}
            <rect x="160" y="110" width="160" height="60" fill="#1565C0" rx="8"/>
            <text x="240" y="135" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">EQUAÇÃO</text>
            <text x="240" y="152" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">BALANCEADA</text>
            {/* Mols - topo */}
            <rect x="170" y="20" width="140" height="50" fill="#e3f2fd" stroke="#1565C0" rx="6"/>
            <text x="240" y="40" textAnchor="middle" fontSize="12" fill="#1565C0" fontWeight="bold">Mols (n)</text>
            <text x="240" y="58" textAnchor="middle" fontSize="11" fill="#1565C0">proporção dos coeficientes</text>
            {/* Massa - esquerda */}
            <rect x="10" y="115" width="130" height="50" fill="#e8f5e9" stroke="#388E3C" rx="6"/>
            <text x="75" y="135" textAnchor="middle" fontSize="12" fill="#388E3C" fontWeight="bold">Massa (m)</text>
            <text x="75" y="153" textAnchor="middle" fontSize="11" fill="#388E3C">m = n × M</text>
            {/* Volume - direita */}
            <rect x="340" y="115" width="130" height="50" fill="#fff3e0" stroke="#E65100" rx="6"/>
            <text x="405" y="135" textAnchor="middle" fontSize="12" fill="#E65100" fontWeight="bold">Volume (V)</text>
            <text x="405" y="153" textAnchor="middle" fontSize="11" fill="#E65100">V = n × 22,4</text>
            {/* Partículas - baixo */}
            <rect x="155" y="210" width="170" height="50" fill="#f3e5f5" stroke="#7B1FA2" rx="6"/>
            <text x="240" y="230" textAnchor="middle" fontSize="12" fill="#7B1FA2" fontWeight="bold">Partículas (N)</text>
            <text x="240" y="248" textAnchor="middle" fontSize="11" fill="#7B1FA2">N = n × Nₐ</text>
            {/* Setas */}
            <line x1="240" y1="70" x2="240" y2="110" stroke="#555" strokeWidth="2" markerEnd="url(#arr)"/>
            <line x1="240" y1="110" x2="240" y2="70" stroke="#555" strokeWidth="1" strokeDasharray="4,3"/>
            <line x1="160" y1="140" x2="140" y2="140" stroke="#555" strokeWidth="2"/>
            <line x1="320" y1="140" x2="340" y2="140" stroke="#555" strokeWidth="2"/>
            <line x1="240" y1="170" x2="240" y2="210" stroke="#555" strokeWidth="2"/>
            <defs>
              <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#555"/>
              </marker>
            </defs>
          </svg>
          <figcaption>Mapa estequiométrico: a equação balanceada conecta mols, massa, volume de gás e número de partículas.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Referência</span>
        <h2>11. Balanceamento de Reações Comuns</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Reação</th>
                <th>Equação Balanceada</th>
                <th>Verificação de Átomos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Síntese da água</td>
                <td><M>{"2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}"}</M></td>
                <td>H: 4=4 | O: 2=2</td>
              </tr>
              <tr>
                <td>Combustão do metano</td>
                <td><M>{"\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}"}</M></td>
                <td>C: 1=1 | H: 4=4 | O: 4=4</td>
              </tr>
              <tr>
                <td>Síntese da amônia</td>
                <td><M>{"\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3"}</M></td>
                <td>N: 2=2 | H: 6=6</td>
              </tr>
              <tr>
                <td>Decomposição do água oxigenada</td>
                <td><M>{"2\\text{H}_2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O} + \\text{O}_2"}</M></td>
                <td>H: 4=4 | O: 4=4</td>
              </tr>
              <tr>
                <td>Oxidação do ferro</td>
                <td><M>{"4\\text{Fe} + 3\\text{O}_2 \\rightarrow 2\\text{Fe}_2\\text{O}_3"}</M></td>
                <td>Fe: 4=4 | O: 6=6</td>
              </tr>
              <tr>
                <td>Combustão do etanol</td>
                <td><M>{"\\text{C}_2\\text{H}_5\\text{OH} + 3\\text{O}_2 \\rightarrow 2\\text{CO}_2 + 3\\text{H}_2\\text{O}"}</M></td>
                <td>C: 2=2 | H: 6=6 | O: 6=6</td>
              </tr>
              <tr>
                <td>Neutralização</td>
                <td><M>{"\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}"}</M></td>
                <td>H: 2=2 | Cl: 1=1 | Na: 1=1 | O: 1=1</td>
              </tr>
              <tr>
                <td>Decomposição do CaCO₃</td>
                <td><M>{"\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2"}</M></td>
                <td>Ca: 1=1 | C: 1=1 | O: 3=3</td>
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
            <span>⚖️</span>
            <h3>Lei de Lavoisier</h3>
            <p><M>{"m_{\\text{reag}} = m_{\\text{prod}}"}</M></p>
          </div>
          <div className="math-card">
            <span>📐</span>
            <h3>Lei de Proust</h3>
            <p>Proporções em massa fixas e definidas em qualquer composto puro</p>
          </div>
          <div className="math-card">
            <span>🔢</span>
            <h3>Mols</h3>
            <p><M>{"n = \\dfrac{m}{M}"}</M></p>
          </div>
          <div className="math-card">
            <span>📦</span>
            <h3>Volume de Gás (CNTP)</h3>
            <p><M>{"V = n \\times 22{,}4\\,\\text{L}"}</M></p>
          </div>
          <div className="math-card">
            <span>🔬</span>
            <h3>Número de Partículas</h3>
            <p><M>{"N = n \\times N_A"}</M></p>
          </div>
          <div className="math-card">
            <span>⚗️</span>
            <h3>Proporção Estequiométrica</h3>
            <p>Coeficientes = proporção em mol entre reagentes e produtos</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mapa Estequiométrico</span>
        <h2>Síntese Visual: Leis Ponderais e Cálculo Estequiométrico</h2>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Balança de Lavoisier: massa dos reagentes = massa dos produtos">
          <defs>
            <marker id="arr19q" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          {/* balança */}
          <line x1="350" y1="50" x2="350" y2="100" stroke="#64748b" strokeWidth="3" />
          <line x1="150" y1="100" x2="550" y2="100" stroke="#64748b" strokeWidth="3" />
          <circle cx="350" cy="50" r="8" fill="#475569" />
          {/* prato esquerdo — reagentes */}
          <line x1="200" y1="100" x2="200" y2="140" stroke="#64748b" strokeWidth="2" />
          <line x1="160" y1="140" x2="240" y2="140" stroke="#64748b" strokeWidth="3" />
          <rect x="155" y="145" width="90" height="40" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="200" y="168" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1d4ed8">Reagentes</text>
          {/* prato direito — produtos */}
          <line x1="500" y1="100" x2="500" y2="140" stroke="#64748b" strokeWidth="2" />
          <line x1="460" y1="140" x2="540" y2="140" stroke="#64748b" strokeWidth="3" />
          <rect x="455" y="145" width="90" height="40" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="500" y="168" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">Produtos</text>
          {/* Lavoisier */}
          <text x="350" y="185" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">m(reagentes) = m(produtos)</text>
          <text x="350" y="200" textAnchor="middle" fontSize="13" fill="#475569">Lei de Lavoisier — conservação da massa</text>
        </svg>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Fluxo do cálculo estequiométrico">
          <defs>
            <marker id="arr19r" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
          </defs>
          {/* etapas */}
          {[["Balancear\na equação",100],["Converter dado\nem mol",260],["Regra de 3\npor coeficientes",420],["Converter mol\nem resposta",580]].map(([label,cx],i) => (
            <g key={cx as string}>
              <rect x={(cx as number)-80} y="60" width="140" height="70" rx="6" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
              <text x={cx as number} y="88" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1d4ed8">{(label as string).split("\n")[0]}</text>
              <text x={cx as number} y="106" textAnchor="middle" fontSize="12" fill="#1d4ed8">{(label as string).split("\n")[1]}</text>
              <text x={(cx as number)-80} y="145" textAnchor="middle" fontSize="12" fill="#64748b">{["1°","2°","3°","4°"][i]}</text>
              {i < 3 && <line x1={(cx as number)+60} y1="95" x2={(cx as number)+80} y2="95" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr19r)" />}
            </g>
          ))}
          <text x="350" y="180" textAnchor="middle" fontSize="13" fill="#0f172a">Unidade de comparação: mol | coeficientes = proporção molar entre substâncias</text>
          <text x="350" y="198" textAnchor="middle" fontSize="13" fill="#475569">ex: N₂ + 3H₂ → 2NH₃ | 1 mol N₂ : 3 mol H₂ : 2 mol NH₃</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Lei</th><th>Enunciado</th><th>Fórmula/Aplicação</th><th>Exemplo</th></tr>
          </thead>
          <tbody>
            <tr><td>Lavoisier (Conservação da Massa)</td><td>m reagentes = m produtos</td><td>Σmreag = Σmprod</td><td>H₂ + ½O₂ → H₂O: 2+16 = 18 g</td></tr>
            <tr><td>Proust (Proporções Definidas)</td><td>Compostos têm proporção em massa fixa</td><td>m₁/m₂ = constante</td><td>H₂O: sempre 1g H : 8g O</td></tr>
            <tr><td>Dalton (Proporções Múltiplas)</td><td>Elementos combinam em razões simples</td><td>m₁/m₂ = n inteiro</td><td>CO (1:1) vs CO₂ (1:2)</td></tr>
            <tr><td>Estequiometria geral</td><td>Coeficientes = proporção molar</td><td>regra de 3 com mol</td><td>2H₂ + O₂: 2 mol H₂ para 1 mol O₂</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Lei de Lavoisier"
          statement={<p>Em um recipiente fechado, 10 g de magnésio reagem completamente com 13,3 g de oxigênio. Qual é a massa de óxido de magnésio (MgO) formado?</p>}
          options={[
            {letter:"a", text:"10,0 g"},
            {letter:"b", text:"13,3 g"},
            {letter:"c", text:"23,3 g", correct:true},
            {letter:"d", text:"26,6 g"},
          ]}
          resolution={<p>Pela Lei de Lavoisier, a massa total dos produtos é igual à soma das massas dos reagentes: 10 g + 13,3 g = 23,3 g de MgO.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Balanceamento e Cálculo em Mols"
          statement={<p>Na reação <M>{"\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3"}</M>, quantos mols de amônia são produzidos ao reagir 6 mol de H₂ com excesso de N₂?</p>}
          options={[
            {letter:"a", text:"2 mol"},
            {letter:"b", text:"3 mol"},
            {letter:"c", text:"4 mol", correct:true},
            {letter:"d", text:"6 mol"},
          ]}
          resolution={<p>Pela proporção 3 mol H₂ → 2 mol NH₃, temos: 6 mol H₂ → x. Por regra de três: x = (6 × 2)/3 = 4 mol de NH₃.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Cálculo de Massa com Estequiometria"
          statement={<p>Quantos gramas de CO₂ são produzidos na combustão completa de 96 g de metano (CH₄)? Dados: M(C)=12, M(H)=1, M(O)=16.</p>}
          options={[
            {letter:"a", text:"88 g"},
            {letter:"b", text:"176 g"},
            {letter:"c", text:"264 g", correct:true},
            {letter:"d", text:"352 g"},
          ]}
          resolution={<p>Equação: CH₄ + 2O₂ → CO₂ + 2H₂O. M(CH₄)=16 g/mol; M(CO₂)=44 g/mol. n(CH₄) = 96/16 = 6 mol. Pela proporção 1:1, n(CO₂) = 6 mol. Massa de CO₂ = 6 × 44 = 264 g.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. Volume de Gás em Reação Industrial"
          statement={<p>No processo Haber-Bosch, <M>{"\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3"}</M>. Que volume de NH₃ (CNTP) é produzido a partir de 44,8 L de N₂ nas mesmas condições?</p>}
          options={[
            {letter:"a", text:"22,4 L"},
            {letter:"b", text:"44,8 L"},
            {letter:"c", text:"89,6 L", correct:true},
            {letter:"d", text:"134,4 L"},
          ]}
          resolution={<p>Em gases à mesma T e P, a proporção de volumes = proporção de coeficientes. 1 L de N₂ produz 2 L de NH₃. Logo 44,8 L de N₂ produz 44,8 × 2 = 89,6 L de NH₃.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. ENEM-Estilo — Cálculo de Partículas"
          statement={<p>Um medicamento efervescente contém 1,0 g de ácido acetilsalicílico (M=180 g/mol). Quantas moléculas dessa substância há em cada comprimido? Dados: <M>{"N_A = 6{,}02 \\times 10^{23}"}</M>.</p>}
          options={[
            {letter:"a", text:<span>3,34 × 10<sup>21</sup></span>, correct:true},
            {letter:"b", text:<span>6,02 × 10<sup>23</sup></span>},
            {letter:"c", text:<span>1,80 × 10<sup>24</sup></span>},
            {letter:"d", text:<span>1,00 × 10<sup>23</sup></span>},
          ]}
          resolution={<p>n = m/M = 1,0/180 ≈ 5,56 × 10⁻³ mol. N = n × Nₐ = 5,56 × 10⁻³ × 6,02 × 10²³ ≈ 3,34 × 10²¹ moléculas.</p>}
        />
      </section>
    </article>
  );
}
