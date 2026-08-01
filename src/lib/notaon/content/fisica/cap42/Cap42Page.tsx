"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap42Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 42</span>

          <h1>Eletrodinâmica III: Geradores, Receptores, Medidores Elétricos e Leis de Kirchhoff</h1>

          <p>
            Estude geradores (que produzem energia elétrica), receptores
            (que a consomem), o uso correto de amperímetros e voltímetros e
            como aplicar as Leis de Kirchhoff para resolver circuitos complexos.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fonte de Energia</span>

        <h2>1. Gerador Elétrico</h2>

        <p>
          Gerador é um dispositivo que transforma outra forma de energia
          (química, mecânica, luminosa) em energia elétrica. Toda pilha,
          bateria ou dínamo é um gerador.
        </p>

        <div className="math-block">
          <h3>Equação do gerador real</h3>
          <div className="math-formula">U = ε − r · i</div>
          <p>
            ε: força eletromotriz (fem) em volts. r: resistência interna (Ω).
            i: corrente fornecida. U: ddp nos terminais externos.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Casos especiais</h3>
          <ul>
            <li>i = 0 (circuito aberto): U = ε (mede a fem com voltímetro ideal).</li>
            <li>U = 0 (curto-circuito): i_máx = ε / r.</li>
            <li>Gerador ideal: r = 0, então U = ε sempre.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Receptor</span>

        <h2>2. Receptor Elétrico</h2>

        <p>
          Receptor é o dispositivo que recebe energia elétrica e a converte
          em outra forma útil que não seja apenas calor (motores, eletrólise,
          carregadores de bateria).
        </p>

        <div className="math-block">
          <h3>Equação do receptor</h3>
          <div className="math-formula">U = ε' + r' · i</div>
          <p>
            ε': força contra-eletromotriz (fcem). r': resistência interna do
            receptor. A energia que sobra (ε' · i) vai para o trabalho útil.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚙️</span>
            <h3>Motor</h3>
            <p>Converte eletricidade em movimento.</p>
          </div>

          <div className="lesson-card">
            <span>🔋</span>
            <h3>Carregador</h3>
            <p>Devolve carga a uma bateria.</p>
          </div>

          <div className="lesson-card">
            <span>🧪</span>
            <h3>Eletrólise</h3>
            <p>Decomposição química por corrente.</p>
          </div>

          <div className="lesson-card">
            <span>🔥</span>
            <h3>Resistor puro</h3>
            <p>Não é receptor: só dissipa calor.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Rendimento</span>

        <h2>3. Potências e Rendimento</h2>

        <div className="math-block">
          <h3>Potência total do gerador</h3>
          <div className="math-formula">P_total = ε · i</div>
        </div>

        <div className="math-block">
          <h3>Potência útil (fornecida ao circuito)</h3>
          <div className="math-formula">P_útil = U · i</div>
        </div>

        <div className="math-block">
          <h3>Potência dissipada internamente</h3>
          <div className="math-formula">P_d = r · i²</div>
        </div>

        <div className="math-block">
          <h3>Rendimento do gerador</h3>
          <div className="math-formula">η = P_útil / P_total = U / ε</div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Circuito Completo</span>

        <h2>4. Gerador Ligado a um Resistor Externo</h2>

        <p>
          Quando um gerador real (ε, r) alimenta uma resistência externa R,
          a corrente do circuito é dada por:
        </p>

        <div className="math-block">
          <h3>Lei de Pouillet</h3>
          <div className="math-formula">i = ε / (R + r)</div>
        </div>

        <div className="math-block">
          <h3>Com gerador + receptor</h3>
          <div className="math-formula">i = (ε − ε') / (R + r + r')</div>
        </div>

        <div className="lesson-highlight">
          <p>
            Se houver vários geradores em série de mesma polaridade, soma-se
            as fems e as resistências internas. Em paralelo (iguais), a fem
            permanece e a resistência interna divide.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Medidores</span>

        <h2>5. Amperímetro e Voltímetro</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>A</span>
            <h3>Amperímetro</h3>
            <p>Mede corrente. Ligado em SÉRIE. Ideal: R = 0.</p>
          </div>

          <div className="lesson-card">
            <span>V</span>
            <h3>Voltímetro</h3>
            <p>Mede ddp. Ligado em PARALELO. Ideal: R = ∞.</p>
          </div>

          <div className="lesson-card">
            <span>Ω</span>
            <h3>Ohmímetro</h3>
            <p>Mede resistência (componente desligado).</p>
          </div>

          <div className="lesson-card">
            <span>📊</span>
            <h3>Multímetro</h3>
            <p>Combina A, V e Ω em um só aparelho.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Atenção</h3>
          <ul>
            <li>Amperímetro em paralelo: pode queimar (curto-circuito).</li>
            <li>Voltímetro em série: lê quase zero (resistência muito alta).</li>
            <li>Aparelhos reais têm pequena influência no circuito.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">1ª Lei de Kirchhoff</span>

        <h2>6. Lei dos Nós (Conservação da Carga)</h2>

        <p>
          Em um nó (ponto onde se encontram três ou mais fios), a soma das
          correntes que entram é igual à soma das correntes que saem.
        </p>

        <div className="math-block">
          <h3>Lei dos nós</h3>
          <div className="math-formula">Σ i_entram = Σ i_saem</div>
        </div>

        <div className="lesson-highlight">
          <p>
            Exemplo: se entram 5 A e 3 A num nó, e saem duas correntes i₁ e
            i₂, então i₁ + i₂ = 8 A.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">2ª Lei de Kirchhoff</span>

        <h2>7. Lei das Malhas (Conservação da Energia)</h2>

        <p>
          Percorrendo uma malha fechada (laço do circuito) em um único
          sentido, a soma algébrica das ddps é zero.
        </p>

        <div className="math-block">
          <h3>Lei das malhas</h3>
          <div className="math-formula">Σ ε − Σ R · i = 0</div>
        </div>

        <div className="lesson-highlight">
          <h3>Convenções de sinais</h3>
          <ul>
            <li>Atravessar gerador do − para o +: soma +ε; do + para o −: soma −ε.</li>
            <li>Atravessar resistor no sentido da corrente: −R·i. Contra a corrente: +R·i.</li>
            <li>Receptor (fcem) tem sinal oposto ao do gerador.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Estratégia para resolver circuitos</h3>
          <p>1. Adote sentidos arbitrários para as correntes.</p>
          <p>2. Aplique a 1ª lei nos nós.</p>
          <p>3. Aplique a 2ª lei nas malhas independentes.</p>
          <p>4. Resolva o sistema. Sinal negativo: sentido oposto ao adotado.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Circuito</span>
        <h2>8. Representação Visual: Gerador, Receptor e Kirchhoff</h2>
        <p>
          Entender como os elementos se posicionam no circuito facilita a
          aplicação correta das leis de Kirchhoff.
        </p>

        <svg viewBox="0 0 700 220" className="lesson-svg" aria-label="Circuito com gerador, receptor e resistor — lei das malhas">
          <defs>
            <marker id="arr42a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
          </defs>
          {/* fio principal */}
          <line x1="40" y1="110" x2="40" y2="40" stroke="#1e293b" strokeWidth="2" />
          <line x1="40" y1="40" x2="660" y2="40" stroke="#1e293b" strokeWidth="2" />
          <line x1="660" y1="40" x2="660" y2="110" stroke="#1e293b" strokeWidth="2" />
          <line x1="660" y1="110" x2="530" y2="110" stroke="#1e293b" strokeWidth="2" />
          <line x1="350" y1="110" x2="230" y2="110" stroke="#1e293b" strokeWidth="2" />
          <line x1="160" y1="110" x2="40" y2="110" stroke="#1e293b" strokeWidth="2" />
          {/* gerador */}
          <ellipse cx="100" cy="110" rx="40" ry="30" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="100" y="107" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">ε, r</text>
          <text x="100" y="121" textAnchor="middle" fontSize="11" fill="#92400e">Gerador</text>
          {/* receptor */}
          <rect x="230" y="88" width="120" height="44" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="290" y="107" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9d174d">ε', r'</text>
          <text x="290" y="121" textAnchor="middle" fontSize="11" fill="#9d174d">Receptor</text>
          {/* resistor */}
          <rect x="420" y="88" width="110" height="44" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="475" y="107" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1d4ed8">R</text>
          <text x="475" y="121" textAnchor="middle" fontSize="11" fill="#1d4ed8">Resistor</text>
          {/* seta corrente */}
          <line x1="310" y1="50" x2="390" y2="50" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr42a)" />
          <text x="350" y="38" textAnchor="middle" fontSize="13" fill="#dc2626">I</text>
          {/* fórmulas */}
          <text x="350" y="175" textAnchor="middle" fontSize="13" fill="#0f172a">Kirchhoff malhas: ε − I·r − ε' − I·r' − I·R = 0</text>
          <text x="350" y="195" textAnchor="middle" fontSize="13" fill="#0f172a">I = (ε − ε') / (r + r' + R)</text>
        </svg>

        <svg viewBox="0 0 700 230" className="lesson-svg" aria-label="Nó de corrente — 1ª Lei de Kirchhoff">
          <defs>
            <marker id="arr42b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
            <marker id="arr42c" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#16a34a" />
            </marker>
          </defs>
          {/* nó central */}
          <circle cx="350" cy="115" r="12" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
          <text x="350" y="119" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">N</text>
          {/* correntes entrando */}
          <line x1="140" y1="70" x2="340" y2="112" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arr42b)" />
          <text x="220" y="70" textAnchor="middle" fontSize="13" fill="#2563eb">I₁ (entra)</text>
          <line x1="140" y1="160" x2="340" y2="118" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arr42b)" />
          <text x="220" y="175" textAnchor="middle" fontSize="13" fill="#2563eb">I₂ (entra)</text>
          {/* correntes saindo */}
          <line x1="362" y1="110" x2="560" y2="75" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arr42c)" />
          <text x="480" y="70" textAnchor="middle" fontSize="13" fill="#16a34a">I₃ (sai)</text>
          <line x1="362" y1="120" x2="560" y2="155" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arr42c)" />
          <text x="480" y="170" textAnchor="middle" fontSize="13" fill="#16a34a">I₄ (sai)</text>
          <text x="350" y="205" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">I₁ + I₂ = I₃ + I₄</text>
          <text x="350" y="225" textAnchor="middle" fontSize="13" fill="#475569">Σ I<tspan baselineShift="sub" fontSize="10">entram</tspan> = Σ I<tspan baselineShift="sub" fontSize="10">saem</tspan> (conservação da carga)</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Elemento</th>
              <th>Símbolo</th>
              <th>Equação característica</th>
              <th>Papel no circuito</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Gerador</td><td>ε, r</td><td>U = ε − I·r</td><td>Fornece energia elétrica; tensão terminal &lt; f.e.m.</td></tr>
            <tr><td>Receptor</td><td>ε', r'</td><td>U = ε' + I·r'</td><td>Converte elétrica em outra forma; motor elétrico</td></tr>
            <tr><td>Resistor</td><td>R</td><td>U = R·I</td><td>Dissipa energia como calor (efeito Joule)</td></tr>
            <tr><td>Amperímetro</td><td>A</td><td>R ≈ 0 Ω (série)</td><td>Mede corrente sem afetar o circuito</td></tr>
            <tr><td>Voltímetro</td><td>V</td><td>R → ∞ (paralelo)</td><td>Mede ddp sem desviar corrente</td></tr>
          </tbody>
        </table>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Lei de Kirchhoff</th>
              <th>Enunciado</th>
              <th>Expressão</th>
              <th>Fundamento</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1ª Lei (Nós)</td><td>Soma das correntes num nó = zero</td><td>ΣI = 0</td><td>Conservação da carga elétrica</td></tr>
            <tr><td>2ª Lei (Malhas)</td><td>Soma das ddp ao longo de uma malha = zero</td><td>ΣΔV = 0</td><td>Conservação da energia (potencial)</td></tr>
          </tbody>
        </table>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Grandeza</th>
              <th>Gerador</th>
              <th>Receptor</th>
              <th>Resistor puro</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Potência total</td><td>P = ε·I</td><td>P = U·I</td><td>P = R·I²</td></tr>
            <tr><td>Potência interna</td><td>P<sub>int</sub> = r·I²</td><td>P<sub>int</sub> = r'·I²</td><td>P<sub>int</sub> = R·I²</td></tr>
            <tr><td>Potência útil</td><td>P<sub>útil</sub> = U·I</td><td>P<sub>útil</sub> = ε'·I</td><td>—</td></tr>
            <tr><td>Rendimento η</td><td>η = U/ε</td><td>η = ε'/U</td><td>—</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios Resolvidos</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Equação do gerador"
          statement={
            <p>
              Um gerador tem fem ε = 12 V e resistência interna r = 1 Ω. Ele
              fornece corrente de 2 A ao circuito. Qual a ddp em seus terminais?
            </p>
          }
          options={[
            { letter: "a", text: "8 V" },
            { letter: "b", text: "10 V", correct: true },
            { letter: "c", text: "12 V" },
            { letter: "d", text: "14 V" },
          ]}
          resolution={
            <>
              <div className="math-formula">U = ε − r·i</div>
              <div className="math-formula">U = 12 − 1·2 = 10 V</div>
            </>
          }
        />

        <Exercise
          level="Básico"
          title="2. Lei de Pouillet"
          statement={
            <p>
              Um gerador de fem 18 V e r = 2 Ω alimenta um resistor de R = 7 Ω.
              Qual a corrente do circuito?
            </p>
          }
          options={[
            { letter: "a", text: "1 A" },
            { letter: "b", text: "2 A", correct: true },
            { letter: "c", text: "3 A" },
            { letter: "d", text: "6 A" },
          ]}
          resolution={
            <>
              <div className="math-formula">i = ε / (R + r)</div>
              <div className="math-formula">i = 18 / (7 + 2) = 18/9 = 2 A</div>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="3. Rendimento do gerador"
          statement={
            <p>
              Um gerador de fem 24 V apresenta ddp de 20 V em seus terminais
              quando alimenta um circuito. Qual seu rendimento?
            </p>
          }
          options={[
            { letter: "a", text: "20%" },
            { letter: "b", text: "60%" },
            { letter: "c", text: "80%" },
            { letter: "d", text: "83%", correct: true },
          ]}
          resolution={
            <>
              <div className="math-formula">η = U / ε = 20 / 24</div>
              <div className="math-formula">η ≈ 0,833 = 83,3%</div>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="4. Lei dos nós"
          statement={
            <p>
              Em um nó, entram correntes de 6 A e 4 A. Saem duas correntes:
              i₁ = 3 A e i₂. Qual o valor de i₂?
            </p>
          }
          options={[
            { letter: "a", text: "1 A" },
            { letter: "b", text: "7 A", correct: true },
            { letter: "c", text: "10 A" },
            { letter: "d", text: "13 A" },
          ]}
          resolution={
            <>
              <div className="math-formula">Σ entram = Σ saem</div>
              <div className="math-formula">6 + 4 = 3 + i₂</div>
              <div className="math-formula">i₂ = 7 A</div>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="5. Gerador, receptor e resistor"
          statement={
            <p>
              Em um circuito há um gerador (ε = 20 V, r = 1 Ω), um receptor
              (ε' = 8 V, r' = 1 Ω) e um resistor R = 2 Ω, todos em série.
              Qual a corrente do circuito?
            </p>
          }
          options={[
            { letter: "a", text: "1 A" },
            { letter: "b", text: "2 A" },
            { letter: "c", text: "3 A", correct: true },
            { letter: "d", text: "4 A" },
          ]}
          resolution={
            <>
              <div className="math-formula">i = (ε − ε') / (R + r + r')</div>
              <div className="math-formula">i = (20 − 8) / (2 + 1 + 1)</div>
              <div className="math-formula">i = 12 / 4 = 3 A</div>
            </>
          }
        />
      </section>
    </article>
  );
}
