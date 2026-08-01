"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap36Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 36</span>

          <h1>
            Lentes Esféricas Delgadas, Instrumentos Ópticos e Instrumentos de
            Visão
          </h1>

          <p>
            Estude a classificação das lentes esféricas delgadas, as
            convenções de sinal, a Equação de Gauss para lentes, a vergência
            (dioptria), e o funcionamento dos principais instrumentos ópticos
            (lupa, microscópio, luneta, telescópio, câmera).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Introdução</span>

        <h2>1. Definição de Lente Delgada</h2>

        <p>
          Lente esférica delgada é um meio transparente limitado por duas
          superfícies, das quais pelo menos uma é esférica. A espessura é
          considerada desprezível em comparação aos raios de curvatura.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔍</span>
            <h3>Convergente</h3>
            <p>Concentra raios paralelos em um foco real.</p>
          </div>

          <div className="lesson-card">
            <span>🔭</span>
            <h3>Divergente</h3>
            <p>Espalha raios paralelos; foco virtual.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Classificação</span>

        <h2>2. Tipos de Lentes</h2>

        <div className="lesson-highlight">
          <h3>Bordas finas (geralmente convergentes em meio menos refringente)</h3>
          <ul>
            <li>Biconvexa</li>
            <li>Plano-convexa</li>
            <li>Côncavo-convexa (menisco convergente)</li>
          </ul>
        </div>

        <div className="lesson-highlight">
          <h3>Bordas grossas (geralmente divergentes em meio menos refringente)</h3>
          <ul>
            <li>Bicôncava</li>
            <li>Plano-côncava</li>
            <li>Convexo-côncava (menisco divergente)</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Comportamento depende dos meios</h3>
          <p>Se a lente está em meio MAIS refringente que ela, o comportamento se inverte.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Imagens</span>

        <h2>3. Formação de Imagens em Lentes</h2>

        <div className="math-block">
          <h3>Lente Convergente</h3>
          <p>A natureza da imagem depende da posição do objeto em relação aos focos:</p>
          <ul>
            <li>Antes do anti-principal objeto (2F): imagem real, invertida, menor.</li>
            <li>Em 2F: imagem real, invertida, mesmo tamanho.</li>
            <li>Entre 2F e F: imagem real, invertida, maior.</li>
            <li>No foco F: imagem no infinito.</li>
            <li>Entre F e a lente: imagem virtual, direita, maior (lupa).</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Lente Divergente</h3>
          <p>Em qualquer posição do objeto real, a imagem é virtual, direita e menor.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equações</span>

        <h2>4. Equação de Gauss e Aumento Linear</h2>

        <div className="math-block">
          <h3>Equação de conjugação</h3>
          <div className="math-formula">1/f = 1/p + 1/p'</div>
        </div>

        <div className="math-block">
          <h3>Aumento linear transversal</h3>
          <div className="math-formula">A = i / o = − p' / p</div>
        </div>

        <div className="lesson-highlight">
          <h3>Convenção (referencial de Gauss para lentes)</h3>
          <ul>
            <li>Objeto real: p &gt; 0.</li>
            <li>Imagem real (do lado oposto): p' &gt; 0; virtual (do mesmo lado): p' &lt; 0.</li>
            <li>Lente convergente: f &gt; 0; divergente: f &lt; 0.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vergência</span>

        <h2>5. Vergência (Dioptria)</h2>

        <p>
          A vergência (ou convergência) de uma lente é o inverso da distância
          focal medida em metros. A unidade é a dioptria (di ou m⁻¹).
        </p>

        <div className="math-block">
          <h3>Definição</h3>
          <div className="math-formula">V = 1 / f   (com f em metros)</div>
        </div>

        <div className="math-block">
          <h3>Equação dos fabricantes (Halley)</h3>
          <div className="math-formula">V = (n_lente / n_meio − 1) · (1/R₁ + 1/R₂)</div>
        </div>

        <div className="lesson-highlight">
          <h3>Sinal da vergência</h3>
          <ul>
            <li>V &gt; 0 → lente convergente.</li>
            <li>V &lt; 0 → lente divergente.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Associação</span>

        <h2>6. Associação de Lentes Justapostas</h2>

        <p>
          Quando duas lentes delgadas são justapostas (encostadas), a
          vergência total é a soma algébrica das vergências.
        </p>

        <div className="math-block">
          <h3>Equação de Halley generalizada</h3>
          <div className="math-formula">V_total = V₁ + V₂ + ... + Vₙ</div>
        </div>

        <div className="math-block">
          <h3>Em termos de distância focal</h3>
          <div className="math-formula">1/f_total = 1/f₁ + 1/f₂</div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Instrumentos Ópticos</span>

        <h2>7. Principais Instrumentos Ópticos</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔎</span>
            <h3>Lupa</h3>
            <p>Lente convergente; objeto entre F e a lente; imagem virtual, direita, maior.</p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Microscópio</h3>
            <p>Duas lentes convergentes (objetiva + ocular).</p>
          </div>

          <div className="lesson-card">
            <span>🔭</span>
            <h3>Luneta</h3>
            <p>Para observar objetos distantes na Terra.</p>
          </div>

          <div className="lesson-card">
            <span>🌌</span>
            <h3>Telescópio</h3>
            <p>Astronômico — refrator (lentes) ou refletor (espelhos).</p>
          </div>

          <div className="lesson-card">
            <span>📷</span>
            <h3>Câmera</h3>
            <p>Objetiva forma imagem real, invertida e menor no sensor.</p>
          </div>

          <div className="lesson-card">
            <span>🎞️</span>
            <h3>Projetor</h3>
            <p>Imagem real, invertida e maior (objeto entre F e 2F).</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Olho Humano</span>

        <h2>8. O Olho Humano</h2>

        <p>
          O olho humano funciona como uma máquina fotográfica: o cristalino é
          uma lente biconvexa convergente que projeta imagens reais,
          invertidas e menores na retina.
        </p>

        <div className="lesson-highlight">
          <h3>Acomodação visual</h3>
          <ul>
            <li>Ponto remoto (PR): mais distante visto sem esforço (∞ no olho normal).</li>
            <li>Ponto próximo (PP): mais próximo visto com nitidez (~25 cm em adultos).</li>
            <li>O cristalino ajusta sua curvatura para focalizar — fenômeno chamado acomodação.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama de Lentes</span>

        <h2>9. Diagramas de Raios Luminosos</h2>

        <svg
          viewBox="0 0 700 200"
          className="lesson-svg"
          aria-label="Lente convergente — formação de imagem"
        >
          <defs>
            <marker id="arrlc" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1" />
            </marker>
          </defs>
          {/* Eixo óptico */}
          <line x1="20" y1="100" x2="680" y2="100" stroke="#94a3b8" strokeWidth="1" />
          {/* Lente convergente */}
          <ellipse cx="350" cy="100" rx="8" ry="70" fill="none" stroke="#6366f1" strokeWidth="2.5" />
          <text x="350" y="185" textAnchor="middle" fill="#3730a3" fontSize="10">Lente convergente</text>
          {/* Objeto */}
          <line x1="120" y1="100" x2="120" y2="50" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrlc)" />
          <text x="120" y="170" textAnchor="middle" fill="#92400e" fontSize="10">Objeto (p)</text>
          {/* Foco F */}
          <circle cx="230" cy="100" r="4" fill="#6366f1" />
          <text x="230" y="118" textAnchor="middle" fill="#3730a3" fontSize="10">F</text>
          {/* Foco F' */}
          <circle cx="470" cy="100" r="4" fill="#6366f1" />
          <text x="470" y="118" textAnchor="middle" fill="#3730a3" fontSize="10">F'</text>
          {/* Raio 1: paralelo ao eixo → passa por F' */}
          <line x1="120" y1="50" x2="350" y2="50" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrlc)" />
          <line x1="350" y1="50" x2="600" y2="160" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,2" markerEnd="url(#arrlc)" />
          {/* Raio 2: pelo centro → passa sem desvio */}
          <line x1="120" y1="50" x2="600" y2="128" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrlc)" />
          {/* Imagem */}
          <line x1="600" y1="100" x2="600" y2="155" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrlc)" />
          <text x="600" y="170" textAnchor="middle" fill="#92400e" fontSize="10">Imagem (p')</text>
          <text x="350" y="18" textAnchor="middle" fill="#3730a3" fontSize="11" fontWeight="bold">Lente Convergente — Formação de Imagem Real</text>
        </svg>

        <svg
          viewBox="0 0 700 200"
          className="lesson-svg"
          aria-label="Lente divergente — imagem virtual"
        >
          <defs>
            <marker id="arrld" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#dc2626" />
            </marker>
          </defs>
          {/* Eixo óptico */}
          <line x1="20" y1="100" x2="680" y2="100" stroke="#94a3b8" strokeWidth="1" />
          {/* Lente divergente */}
          <path d="M 340 30 Q 350 100 340 170" fill="none" stroke="#dc2626" strokeWidth="2.5" />
          <path d="M 360 30 Q 350 100 360 170" fill="none" stroke="#dc2626" strokeWidth="2.5" />
          <text x="350" y="190" textAnchor="middle" fill="#991b1b" fontSize="10">Lente divergente</text>
          {/* Objeto */}
          <line x1="120" y1="100" x2="120" y2="55" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrld)" />
          <text x="120" y="20" textAnchor="middle" fill="#92400e" fontSize="10">Objeto (p)</text>
          {/* Foco virtual F' */}
          <circle cx="210" cy="100" r="4" fill="#dc2626" />
          <text x="210" y="118" textAnchor="middle" fill="#991b1b" fontSize="10">F' (virtual)</text>
          {/* Raios divergentes */}
          <line x1="120" y1="55" x2="350" y2="55" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrld)" />
          <line x1="350" y1="55" x2="580" y2="82" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrld)" />
          {/* Imagem virtual */}
          <line x1="240" y1="100" x2="240" y2="74" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arrld)" />
          <text x="240" y="68" textAnchor="middle" fill="#92400e" fontSize="9">Img virtual</text>
          <text x="350" y="18" textAnchor="middle" fill="#991b1b" fontSize="11" fontWeight="bold">Lente Divergente — Imagem Virtual, Direita e Menor</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Tipo de Lente</th>
              <th>Vergência (C)</th>
              <th>Imagem de objeto real</th>
              <th>Uso prático</th>
              <th>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Convergente</td>
              <td>C {`>`} 0 (positiva)</td>
              <td>Pode ser real, invertida ou virtual (depende da posição)</td>
              <td>Óculos de hipermetropia, lupa, projetor</td>
              <td>Lente biconvexa com f = 20 cm → C = +5 di</td>
            </tr>
            <tr>
              <td>Divergente</td>
              <td>C {"<"} 0 (negativa)</td>
              <td>Sempre virtual, direita e menor (objeto real)</td>
              <td>Óculos de miopia, olho de peixe</td>
              <td>Lente bicôncava com f = −25 cm → C = −4 di</td>
            </tr>
          </tbody>
        </table>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Equação</th>
              <th>Fórmula</th>
              <th>Variáveis</th>
              <th>Unidade SI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Equação de Gauss (lentes)</td>
              <td>1/f = 1/p + 1/p'</td>
              <td>f = distância focal; p = objeto; p' = imagem</td>
              <td>Metros (m)</td>
            </tr>
            <tr>
              <td>Ampliação linear</td>
              <td>A = −p'/p = i/o</td>
              <td>i = tamanho da imagem; o = tamanho do objeto</td>
              <td>Adimensional</td>
            </tr>
            <tr>
              <td>Vergência (dioptria)</td>
              <td>C = 1/f (f em metros)</td>
              <td>C em dioptrias (di); f em metros</td>
              <td>Dioptria (di) = m⁻¹</td>
            </tr>
            <tr>
              <td>Associação de lentes justapostas</td>
              <td>C_eq = C₁ + C₂ + ... + Cₙ</td>
              <td>Cada Cᵢ em dioptrias</td>
              <td>Dioptria (di)</td>
            </tr>
          </tbody>
        </table>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Instrumento óptico</th>
              <th>Princípio</th>
              <th>Tipo de lente principal</th>
              <th>Aplicação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lupa</td>
              <td>Objeto entre F e a lente; imagem virtual ampliada</td>
              <td>Convergente (única)</td>
              <td>Ampliar detalhes pequenos</td>
            </tr>
            <tr>
              <td>Microscópio</td>
              <td>Duas lentes convergentes; ampliação em dois estágios</td>
              <td>Objetiva + ocular (ambas convergentes)</td>
              <td>Observar objetos microscópicos</td>
            </tr>
            <tr>
              <td>Telescópio / Luneta</td>
              <td>Objetiva capta luz distante; ocular amplia</td>
              <td>Objetiva convergente + ocular convergente</td>
              <td>Observação astronômica e terrestre</td>
            </tr>
            <tr>
              <td>Câmera fotográfica</td>
              <td>Objetiva forma imagem real, invertida e menor no sensor</td>
              <td>Sistema de lentes convergentes</td>
              <td>Captura de imagens</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios Resolvidos</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Vergência da lente"
          statement={<p>Uma lente convergente tem distância focal f = 0,5 m. Sua vergência vale:</p>}
          options={[
            { letter: "a", text: "0,5 di" },
            { letter: "b", text: "1 di" },
            { letter: "c", text: "2 di", correct: true },
            { letter: "d", text: "5 di" },
          ]}
          resolution={
            <>
              <div className="math-formula">V = 1 / f = 1 / 0,5 = 2 di</div>
            </>
          }
        />

        <Exercise
          level="Básico"
          title="2. Lente divergente"
          statement={<p>A imagem formada por uma lente divergente de um objeto real é sempre:</p>}
          options={[
            { letter: "a", text: "Real, invertida e maior" },
            { letter: "b", text: "Virtual, direita e menor", correct: true },
            { letter: "c", text: "Real, direita e do mesmo tamanho" },
            { letter: "d", text: "Virtual, invertida e maior" },
          ]}
          resolution={<p>Toda lente divergente forma imagem virtual, direita e menor quando o objeto é real.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Equação de Gauss"
          statement={
            <p>
              Um objeto está a 30 cm de uma lente convergente de f = 20 cm. A
              posição da imagem é:
            </p>
          }
          options={[
            { letter: "a", text: "+30 cm" },
            { letter: "b", text: "+60 cm", correct: true },
            { letter: "c", text: "−60 cm" },
            { letter: "d", text: "+12 cm" },
          ]}
          resolution={
            <>
              <div className="math-formula">1/20 = 1/30 + 1/p'</div>
              <div className="math-formula">1/p' = 3/60 − 2/60 = 1/60</div>
              <div className="math-formula">p' = +60 cm  (imagem real)</div>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="4. Associação de lentes"
          statement={
            <p>
              Duas lentes justapostas têm vergências +4 di e −1 di. A
              vergência do sistema é:
            </p>
          }
          options={[
            { letter: "a", text: "+5 di" },
            { letter: "b", text: "+3 di", correct: true },
            { letter: "c", text: "−3 di" },
            { letter: "d", text: "+0,5 di" },
          ]}
          resolution={
            <>
              <div className="math-formula">V_total = V₁ + V₂ = +4 + (−1) = +3 di</div>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="5. Lupa"
          statement={
            <p>
              Um objeto é colocado a 5 cm de uma lupa de distância focal 10
              cm. Qual o aumento linear?
            </p>
          }
          options={[
            { letter: "a", text: "+2", correct: true },
            { letter: "b", text: "−2" },
            { letter: "c", text: "+0,5" },
            { letter: "d", text: "−0,5" },
          ]}
          resolution={
            <>
              <div className="math-formula">1/10 = 1/5 + 1/p'</div>
              <div className="math-formula">1/p' = 1/10 − 2/10 = −1/10  →  p' = −10 cm</div>
              <div className="math-formula">A = − p'/p = − (−10)/5 = +2</div>
              <p>Sinal positivo → imagem direita; módulo 2 → ampliada 2×.</p>
            </>
          }
        />
      </section>
    </article>
  );
}
