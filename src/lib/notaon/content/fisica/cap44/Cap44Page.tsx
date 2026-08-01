"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap44Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 44</span>

          <h1>Força Magnética e Indução Eletromagnética</h1>

          <p>
            Estude a força magnética sobre cargas em movimento e fios
            condutores; conheça o fluxo magnético e descubra como uma
            variação de campo magnético gera corrente induzida (Faraday e Lenz).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Força Magnética em Cargas</span>

        <h2>1. Força sobre uma Carga em Movimento</h2>

        <p>
          Uma carga elétrica q que se move com velocidade v dentro de um
          campo magnético B fica sujeita a uma força magnética, desde que v
          não seja paralela a B.
        </p>

        <div className="math-block">
          <h3>Módulo da força</h3>
          <div className="math-formula">F = |q| · v · B · sen(θ)</div>
          <p>θ é o ângulo entre v⃗ e B⃗. Unidade: newton (N).</p>
        </div>

        <div className="lesson-highlight">
          <h3>Casos importantes</h3>
          <ul>
            <li>v⃗ paralela a B⃗ (θ = 0° ou 180°): F = 0.</li>
            <li>v⃗ perpendicular a B⃗ (θ = 90°): F = |q|·v·B (máxima).</li>
            <li>Carga em repouso (v = 0): F = 0.</li>
            <li>A força é sempre perpendicular a v⃗ e a B⃗.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Regra da mão direita</h3>
          <p>
            Para carga positiva: polegar = v⃗, dedos = B⃗, palma empurra no
            sentido de F⃗. Para carga negativa, inverta o sentido.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Movimento Circular</span>

        <h2>2. Movimento de uma Carga em Campo Uniforme</h2>

        <p>
          Quando v⃗ é perpendicular a B⃗ (uniforme), a força magnética age
          como força centrípeta, produzindo movimento circular uniforme.
        </p>

        <div className="math-block">
          <h3>Raio da trajetória</h3>
          <div className="math-formula">R = (m · v) / (|q| · B)</div>
        </div>

        <div className="math-block">
          <h3>Período do movimento</h3>
          <div className="math-formula">T = (2π · m) / (|q| · B)</div>
        </div>

        <div className="lesson-highlight">
          <p>
            Se a velocidade tem componentes paralela e perpendicular a B, a
            trajetória é uma hélice (espiral).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Força em Fios</span>

        <h2>3. Força Magnética em um Fio com Corrente</h2>

        <p>
          Como corrente é movimento de cargas, um fio percorrido por corrente
          imerso em campo magnético sofre força magnética.
        </p>

        <div className="math-block">
          <h3>Módulo da força</h3>
          <div className="math-formula">F = B · i · L · sen(θ)</div>
          <p>L: comprimento do fio dentro do campo. θ: ângulo entre i e B⃗.</p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚙️</span>
            <h3>Motores</h3>
            <p>Força magnética gira espira → rotor.</p>
          </div>

          <div className="lesson-card">
            <span>🎙️</span>
            <h3>Alto-falantes</h3>
            <p>Corrente na bobina vibra com B fixo.</p>
          </div>

          <div className="lesson-card">
            <span>🚆</span>
            <h3>Trens Maglev</h3>
            <p>Propulsão por força magnética.</p>
          </div>

          <div className="lesson-card">
            <span>📺</span>
            <h3>Tubos antigos</h3>
            <p>Deflexão de feixes de elétrons.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fluxo Magnético</span>

        <h2>4. Fluxo Magnético (Φ)</h2>

        <p>
          O fluxo magnético mede a "quantidade" de linhas de campo magnético
          que atravessam uma superfície.
        </p>

        <div className="math-block">
          <h3>Definição</h3>
          <div className="math-formula">Φ = B · A · cos(θ)</div>
          <p>
            B: módulo do campo. A: área da superfície. θ: ângulo entre B⃗ e
            a normal à superfície.
          </p>
        </div>

        <div className="math-block">
          <h3>Unidade</h3>
          <div className="math-formula">[Φ] = Wb (weber) = T·m²</div>
        </div>

        <div className="lesson-highlight">
          <p>
            Φ é máximo quando B⃗ é perpendicular à superfície (θ = 0°) e
            zero quando é paralelo (θ = 90°).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Faraday</span>

        <h2>5. Lei de Faraday da Indução</h2>

        <p>
          Sempre que o fluxo magnético através de uma espira varia no tempo,
          surge nessa espira uma força eletromotriz induzida (fem).
        </p>

        <div className="math-block">
          <h3>fem média induzida</h3>
          <div className="math-formula">ε = −ΔΦ / Δt</div>
        </div>

        <div className="math-block">
          <h3>Para N espiras (bobina)</h3>
          <div className="math-formula">ε = −N · ΔΦ / Δt</div>
        </div>

        <div className="lesson-highlight">
          <h3>Como variar o fluxo</h3>
          <ul>
            <li>Variando B (aproximando/afastando ímã).</li>
            <li>Variando A (deformando a espira).</li>
            <li>Variando θ (girando a espira no campo).</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Lenz</span>

        <h2>6. Lei de Lenz</h2>

        <p>
          A corrente induzida tem sentido tal que o campo magnético por ela
          gerado se opõe à variação de fluxo que a causou (princípio da
          conservação da energia).
        </p>

        <div className="lesson-highlight">
          <h3>Aplicação prática</h3>
          <ul>
            <li>Imã se aproximando (Φ aumenta) → corrente induzida cria campo oposto (repele o ímã).</li>
            <li>Imã se afastando (Φ diminui) → corrente induzida cria campo a favor (atrai o ímã).</li>
            <li>O sinal "−" na lei de Faraday traduz matematicamente a lei de Lenz.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>

        <h2>7. Geradores, Transformadores e Indução</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Geradores CA</h3>
            <p>Espira gira em B → fem alternada (usinas).</p>
          </div>

          <div className="lesson-card">
            <span>🔁</span>
            <h3>Transformadores</h3>
            <p>Variação de Φ no primário induz tensão no secundário.</p>
          </div>

          <div className="lesson-card">
            <span>🍳</span>
            <h3>Cooktops por indução</h3>
            <p>Bobina induz correntes no fundo da panela (efeito Joule).</p>
          </div>

          <div className="lesson-card">
            <span>💳</span>
            <h3>Cartões/RFID</h3>
            <p>Antena induz corrente no chip.</p>
          </div>
        </div>

        <div className="math-block">
          <h3>Relação no transformador ideal</h3>
          <div className="math-formula">U₁ / U₂ = N₁ / N₂</div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Força</span>
        <h2>8. Representação Visual: Força Magnética e Indução</h2>
        <p>
          A regra da mão esquerda (força) e a lei de Faraday-Lenz determinam
          direção e sentido em cada situação — visualizá-los evita erros de sinal.
        </p>

        <svg viewBox="0 0 700 230" className="lesson-svg" aria-label="Força magnética sobre carga em movimento em campo B">
          <defs>
            <marker id="arr44a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
            <marker id="arr44b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
            <marker id="arr44c" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#16a34a" />
            </marker>
          </defs>
          {/* carga */}
          <circle cx="350" cy="115" r="14" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="350" y="120" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400e">q</text>
          {/* vetor v (horizontal direita) */}
          <line x1="364" y1="115" x2="490" y2="115" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr44a)" />
          <text x="430" y="105" textAnchor="middle" fontSize="14" fill="#dc2626">v →</text>
          {/* vetor B (para dentro × pontos) */}
          <text x="200" y="80" textAnchor="middle" fontSize="22" fill="#2563eb">× × × × ×</text>
          <text x="200" y="115" textAnchor="middle" fontSize="22" fill="#2563eb">× × × × ×</text>
          <text x="200" y="150" textAnchor="middle" fontSize="22" fill="#2563eb">× × × × ×</text>
          <text x="175" y="60" textAnchor="middle" fontSize="13" fill="#2563eb">B (entrando)</text>
          {/* vetor F (para cima) */}
          <line x1="350" y1="101" x2="350" y2="20" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arr44c)" />
          <text x="365" y="55" textAnchor="start" fontSize="14" fill="#16a34a">F →</text>
          {/* fórmula */}
          <text x="550" y="100" textAnchor="middle" fontSize="13" fill="#0f172a">F = |q|·v·B·sen θ</text>
          <text x="550" y="120" textAnchor="middle" fontSize="13" fill="#0f172a">F ⊥ v e ⊥ B</text>
          <text x="350" y="210" textAnchor="middle" fontSize="13" fill="#475569">Regra da mão esquerda: polegar=v, indicador=B, médio=F (carga +)</text>
        </svg>

        <svg viewBox="0 0 700 230" className="lesson-svg" aria-label="Indução eletromagnética — variação de fluxo gera f.e.m.">
          <defs>
            <marker id="arr44d" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#7c3aed" />
            </marker>
          </defs>
          {/* espira retangular */}
          <rect x="200" y="70" width="300" height="100" rx="4" fill="none" stroke="#475569" strokeWidth="2" />
          {/* ímã se aproximando */}
          <rect x="560" y="90" width="90" height="60" rx="6" fill="#e0e7ff" stroke="#4338ca" strokeWidth="2" />
          <text x="582" y="125" textAnchor="start" fontSize="18" fontWeight="bold" fill="#dc2626">S</text>
          <text x="615" y="125" textAnchor="start" fontSize="18" fontWeight="bold" fill="#1d4ed8">N</text>
          {/* seta movimento ímã */}
          <line x1="555" y1="120" x2="510" y2="120" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#arr44d)" />
          <text x="530" y="112" textAnchor="middle" fontSize="12" fill="#7c3aed">move</text>
          {/* símbolo fluxo crescente */}
          <text x="350" y="108" textAnchor="middle" fontSize="20" fill="#2563eb">• • •</text>
          <text x="350" y="135" textAnchor="middle" fontSize="20" fill="#2563eb">• • •</text>
          <text x="350" y="162" textAnchor="middle" fontSize="20" fill="#2563eb">• • •</text>
          {/* corrente induzida (Lenz) */}
          <text x="350" y="55" textAnchor="middle" fontSize="13" fill="#dc2626">Corrente induzida: sentido de Lenz (opõe-se ao aumento de Φ)</text>
          <text x="350" y="200" textAnchor="middle" fontSize="13" fill="#0f172a">Faraday: ε = −ΔΦ/Δt | Lenz: I induzida cria B oposto</text>
          <text x="350" y="218" textAnchor="middle" fontSize="13" fill="#0f172a">Φ = B·A·cos θ</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Situação</th>
              <th>Fórmula</th>
              <th>Condição θ=90°</th>
              <th>Unidade</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Força sobre carga q</td><td>F = q·v·B·sen θ</td><td>F = q·v·B (máximo)</td><td>Newton (N)</td></tr>
            <tr><td>Força sobre fio de comprimento L</td><td>F = B·I·L·sen θ</td><td>F = B·I·L (máximo)</td><td>Newton (N)</td></tr>
            <tr><td>Fluxo magnético</td><td>Φ = B·A·cos θ</td><td>Φ = B·A (B⊥ plano)</td><td>Weber (Wb)</td></tr>
            <tr><td>F.e.m. de Faraday</td><td>ε = −ΔΦ/Δt</td><td>Quanto maior |ΔΦ/Δt|, maior ε</td><td>Volt (V)</td></tr>
          </tbody>
        </table>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Lei</th>
              <th>Enunciado simplificado</th>
              <th>Consequência prática</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Faraday</td><td>Variação de fluxo induz f.e.m.</td><td>Quanto mais rápida a variação, maior a tensão induzida</td></tr>
            <tr><td>Lenz</td><td>A corrente induzida se opõe à causa que a gerou</td><td>Freio eletromagnético; conservação de energia</td></tr>
            <tr><td>Força de Lorentz</td><td>F = q(v×B): perpendicular a v e a B</td><td>Carga descreve trajetória circular em B uniforme</td></tr>
          </tbody>
        </table>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Aplicação</th>
              <th>Princípio usado</th>
              <th>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Gerador elétrico (alternador)</td><td>Faraday: bobina girando em campo</td><td>Usinas hidrelétricas, termelétricas</td></tr>
            <tr><td>Transformador</td><td>Indução mútua entre bobinas</td><td>Redução de tensão de 13,8 kV para 127/220 V</td></tr>
            <tr><td>Freio magnético</td><td>Lenz: correntes de Foucault</td><td>Trens de alta velocidade, montanhas-russas</td></tr>
            <tr><td>Acelerador de partículas</td><td>Força de Lorentz em trajetória circular</td><td>Cíclotron, LHC (CERN)</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios Resolvidos</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Força magnética sobre carga"
          statement={
            <p>
              Uma carga q = 2 · 10⁻⁶ C move-se com v = 500 m/s perpendicular
              a um campo B = 0,4 T. Qual o módulo da força magnética?
            </p>
          }
          options={[
            { letter: "a", text: "2 · 10⁻⁴ N" },
            { letter: "b", text: "4 · 10⁻⁴ N", correct: true },
            { letter: "c", text: "4 · 10⁻³ N" },
            { letter: "d", text: "2 · 10⁻³ N" },
          ]}
          resolution={
            <>
              <div className="math-formula">F = |q|·v·B·sen(90°)</div>
              <div className="math-formula">F = 2·10⁻⁶ · 500 · 0,4 · 1</div>
              <div className="math-formula">F = 4 · 10⁻⁴ N</div>
            </>
          }
        />

        <Exercise
          level="Básico"
          title="2. Direção da força"
          statement={
            <p>
              Quando uma carga elétrica se move paralelamente às linhas do
              campo magnético, a força magnética sobre ela é:
            </p>
          }
          options={[
            { letter: "a", text: "Máxima." },
            { letter: "b", text: "Nula.", correct: true },
            { letter: "c", text: "Igual ao peso." },
            { letter: "d", text: "Perpendicular ao campo." },
          ]}
          resolution={
            <p>
              F = |q|·v·B·sen(θ). Se θ = 0° ou 180°, sen(θ) = 0 e portanto
              F = 0.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="3. Fio em campo magnético"
          statement={
            <p>
              Um fio de 0,5 m percorrido por i = 6 A é colocado perpendicular
              a um campo magnético B = 0,2 T. Qual o módulo da força?
            </p>
          }
          options={[
            { letter: "a", text: "0,3 N" },
            { letter: "b", text: "0,6 N", correct: true },
            { letter: "c", text: "1,2 N" },
            { letter: "d", text: "6,0 N" },
          ]}
          resolution={
            <>
              <div className="math-formula">F = B·i·L·sen(90°)</div>
              <div className="math-formula">F = 0,2 · 6 · 0,5 · 1 = 0,6 N</div>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="4. Fluxo magnético"
          statement={
            <p>
              Uma espira de área 0,02 m² está imersa em um campo magnético
              uniforme de B = 0,5 T, formando 60° com a normal. Qual o fluxo?
            </p>
          }
          options={[
            { letter: "a", text: "0,005 Wb", correct: true },
            { letter: "b", text: "0,01 Wb" },
            { letter: "c", text: "0,02 Wb" },
            { letter: "d", text: "0,5 Wb" },
          ]}
          resolution={
            <>
              <div className="math-formula">Φ = B·A·cos(θ)</div>
              <div className="math-formula">Φ = 0,5 · 0,02 · cos(60°)</div>
              <div className="math-formula">Φ = 0,5 · 0,02 · 0,5 = 0,005 Wb</div>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="5. Lei de Faraday"
          statement={
            <p>
              Em uma bobina de 200 espiras, o fluxo magnético varia de 0,01 Wb
              para 0,05 Wb em 0,02 s. Qual o módulo da fem induzida média?
            </p>
          }
          options={[
            { letter: "a", text: "40 V" },
            { letter: "b", text: "100 V" },
            { letter: "c", text: "200 V" },
            { letter: "d", text: "400 V", correct: true },
          ]}
          resolution={
            <>
              <div className="math-formula">ΔΦ = 0,05 − 0,01 = 0,04 Wb</div>
              <div className="math-formula">|ε| = N·ΔΦ/Δt</div>
              <div className="math-formula">|ε| = 200 · 0,04 / 0,02 = 400 V</div>
            </>
          }
        />
      </section>
    </article>
  );
}
