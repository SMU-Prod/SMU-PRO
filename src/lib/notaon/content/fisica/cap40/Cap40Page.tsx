"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap40Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 40</span>

          <h1>Eletrodinâmica I: Corrente Elétrica, Resistores, Primeira e Segunda Leis de Ohm</h1>

          <p>
            Entenda o que é corrente elétrica, como resistores controlam o
            fluxo de carga e como aplicar as leis de Ohm para relacionar
            tensão, corrente e resistência.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Movimento de Cargas</span>

        <h2>1. Corrente Elétrica (i)</h2>

        <p>
          Corrente elétrica é o movimento ordenado de portadores de carga
          (em geral elétrons livres) num condutor, provocado por uma diferença
          de potencial aplicada aos seus extremos.
        </p>

        <div className="math-block">
          <h3>Intensidade de corrente</h3>
          <div className="math-formula">i = ΔQ / Δt</div>
          <p>Unidade no SI: ampère (A) = C/s (coulomb por segundo).</p>
        </div>

        <div className="math-block">
          <h3>Carga em função do número de elétrons</h3>
          <div className="math-formula">ΔQ = n · e</div>
          <p>e = 1,6 · 10⁻¹⁹ C (carga elementar do elétron).</p>
        </div>

        <div className="lesson-highlight">
          <h3>Sentidos da corrente</h3>
          <ul>
            <li><strong>Real:</strong> sentido real do movimento dos elétrons (do − para o +).</li>
            <li><strong>Convencional:</strong> sentido oposto ao dos elétrons (do + para o −). É o usado em circuitos.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tipos de Corrente</span>

        <h2>2. Corrente Contínua e Corrente Alternada</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔋</span>
            <h3>Contínua (CC)</h3>
            <p>Sentido constante. Pilhas e baterias.</p>
          </div>

          <div className="lesson-card">
            <span>⚡</span>
            <h3>Alternada (CA)</h3>
            <p>Inverte o sentido periodicamente. Rede elétrica.</p>
          </div>

          <div className="lesson-card">
            <span>📊</span>
            <h3>Frequência</h3>
            <p>No Brasil: 60 Hz.</p>
          </div>

          <div className="lesson-card">
            <span>🏠</span>
            <h3>Tensão usual</h3>
            <p>110 V ou 220 V (rede residencial).</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Resistores</span>

        <h2>3. O Que é um Resistor</h2>

        <p>
          Resistor é um componente que dissipa energia elétrica, transformando-a
          em calor pelo efeito Joule. Sua principal função é limitar a corrente
          elétrica no circuito.
        </p>

        <div className="lesson-highlight">
          <h3>Função no circuito</h3>
          <ul>
            <li>Reduzir a corrente que chega a outros componentes.</li>
            <li>Gerar calor (chuveiros, ferros, lâmpadas incandescentes).</li>
            <li>Estabelecer diferenças de potencial em pontos do circuito.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Símbolo</h3>
          <p>Representado por um retângulo ou linha em "zigue-zague" no esquema do circuito.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">1ª Lei de Ohm</span>

        <h2>4. Primeira Lei de Ohm</h2>

        <p>
          Para os condutores ôhmicos, a uma temperatura constante, a corrente
          que percorre o resistor é diretamente proporcional à ddp aplicada
          aos seus terminais.
        </p>

        <div className="math-block">
          <h3>Equação fundamental</h3>
          <div className="math-formula">U = R · i</div>
          <p>U: ddp em volts (V). R: resistência em ohms (Ω). i: corrente em ampères (A).</p>
        </div>

        <div className="math-block">
          <h3>Resistência elétrica</h3>
          <div className="math-formula">R = U / i</div>
          <p>1 Ω = 1 V/A.</p>
        </div>

        <div className="lesson-highlight">
          <p>
            Condutores ôhmicos têm gráfico U × i em linha reta passando pela
            origem. Condutores não-ôhmicos têm gráfico curvo (exemplo:
            lâmpadas incandescentes, semicondutores).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">2ª Lei de Ohm</span>

        <h2>5. Segunda Lei de Ohm</h2>

        <p>
          A resistência elétrica de um fio condutor depende de sua geometria
          (comprimento e área) e do material (resistividade).
        </p>

        <div className="math-block">
          <h3>Fórmula</h3>
          <div className="math-formula">R = ρ · L / A</div>
          <p>
            ρ: resistividade do material (Ω·m). L: comprimento do fio (m).
            A: área da seção transversal (m²).
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>📏</span>
            <h3>Comprimento ↑</h3>
            <p>R aumenta (proporcional).</p>
          </div>

          <div className="lesson-card">
            <span>🔵</span>
            <h3>Área ↑</h3>
            <p>R diminui (inversamente proporcional).</p>
          </div>

          <div className="lesson-card">
            <span>⚙️</span>
            <h3>Material</h3>
            <p>Cobre, alumínio têm ρ baixo (bons condutores).</p>
          </div>

          <div className="lesson-card">
            <span>🌡️</span>
            <h3>Temperatura</h3>
            <p>Em metais, R aumenta com T.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Potência Elétrica</span>

        <h2>6. Potência Dissipada</h2>

        <p>
          A potência elétrica indica a taxa com que a energia elétrica é
          convertida (em calor, luz, movimento etc.).
        </p>

        <div className="math-block">
          <h3>Potência geral</h3>
          <div className="math-formula">P = U · i</div>
          <p>Unidade: watt (W) = V·A.</p>
        </div>

        <div className="math-block">
          <h3>Combinando com a 1ª Lei de Ohm</h3>
          <div className="math-formula">P = R · i²</div>
          <div className="math-formula">P = U² / R</div>
        </div>

        <div className="math-block">
          <h3>Energia consumida</h3>
          <div className="math-formula">E = P · Δt</div>
          <p>Unidade prática: kWh (quilowatt-hora). 1 kWh = 3,6 · 10⁶ J.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Efeito Joule</span>

        <h2>7. Efeito Joule</h2>

        <p>
          Quando uma corrente atravessa um resistor, a energia elétrica é
          dissipada na forma de calor. Esse fenômeno é o efeito Joule.
        </p>

        <div className="math-block">
          <h3>Quantidade de calor</h3>
          <div className="math-formula">Q = R · i² · Δt</div>
        </div>

        <div className="lesson-highlight">
          <h3>Aplicações</h3>
          <ul>
            <li>Chuveiros, ferros de passar, fornos elétricos.</li>
            <li>Filamentos de lâmpadas incandescentes.</li>
            <li>Fusíveis (proteção contra sobrecarga).</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas e Tabelas</span>

        <h2>8. Diagramas e Resumo das Leis de Ohm</h2>

        <svg
          viewBox="0 0 700 200"
          className="lesson-svg"
          aria-label="Circuito simples com resistor e fonte"
        >
          <defs>
            <marker id="arrcir" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#6366f1" />
            </marker>
          </defs>
          {/* Fios do circuito */}
          <rect x="150" y="60" width="400" height="120" fill="none" stroke="#6366f1" strokeWidth="2" rx="10" />
          {/* Bateria (lado esquerdo) */}
          <line x1="150" y1="80" x2="150" y2="120" stroke="#6366f1" strokeWidth="4" />
          <line x1="165" y1="90" x2="165" y2="110" stroke="#6366f1" strokeWidth="2" />
          <text x="130" y="98" textAnchor="middle" fill="#6366f1" fontSize="11" fontWeight="bold">+</text>
          <text x="130" y="118" textAnchor="middle" fill="#6366f1" fontSize="11" fontWeight="bold">−</text>
          <text x="115" y="108" textAnchor="middle" fill="#3730a3" fontSize="10">U (V)</text>
          {/* Resistor (lado direito) */}
          <rect x="490" y="90" width="60" height="40" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="4" />
          <text x="520" y="113" textAnchor="middle" fill="#92400e" fontSize="12" fontWeight="bold">R</text>
          {/* Setas de corrente I */}
          <text x="350" y="55" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">i →</text>
          <text x="350" y="198" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">← i</text>
          {/* Labels */}
          <text x="350" y="28" textAnchor="middle" fill="#3730a3" fontSize="12" fontWeight="bold">Circuito Elétrico Simples: U = R · i</text>
          <text x="350" y="145" textAnchor="middle" fill="#6366f1" fontSize="10">corrente convencional: + → −</text>
        </svg>

        <svg
          viewBox="0 0 700 200"
          className="lesson-svg"
          aria-label="Gráfico U×i — material ôhmico e não-ôhmico"
        >
          {/* Eixos */}
          <line x1="80" y1="170" x2="650" y2="170" stroke="#374151" strokeWidth="2" />
          <line x1="80" y1="170" x2="80" y2="20" stroke="#374151" strokeWidth="2" />
          {/* Labels eixos */}
          <text x="660" y="174" fill="#374151" fontSize="12" fontWeight="bold">i (A)</text>
          <text x="60" y="16" fill="#374151" fontSize="12" fontWeight="bold">U (V)</text>
          {/* Reta material ôhmico (slope R) */}
          <line x1="80" y1="170" x2="580" y2="30" stroke="#6366f1" strokeWidth="2.5" />
          <text x="590" y="35" fill="#6366f1" fontSize="11" fontWeight="bold">Ôhmico</text>
          <text x="590" y="48" fill="#6366f1" fontSize="10">(reta por O)</text>
          <text x="320" y="110" fill="#3730a3" fontSize="11" fontStyle="italic">inclinação = R</text>
          {/* Curva não-ôhmico */}
          <path d="M 80 170 Q 200 160 350 100 T 580 30" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="6,3" />
          <text x="590" y="68" fill="#dc2626" fontSize="11" fontWeight="bold">Não-ôhmico</text>
          <text x="590" y="81" fill="#dc2626" fontSize="10">(curva)</text>
          {/* Título */}
          <text x="350" y="195" textAnchor="middle" fill="#374151" fontSize="11" fontWeight="bold">Gráfico U × i — 1ª Lei de Ohm</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Lei de Ohm</th>
              <th>Fórmula</th>
              <th>Grandezas</th>
              <th>Unidade SI</th>
              <th>Interpretação física</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1ª Lei de Ohm</td>
              <td>U = R · i</td>
              <td>U = tensão (ddp); R = resistência; i = corrente</td>
              <td>Volt (V); Ohm (Ω); Ampère (A)</td>
              <td>A tensão é proporcional à corrente para material ôhmico</td>
            </tr>
            <tr>
              <td>2ª Lei de Ohm</td>
              <td>R = ρ · L / A</td>
              <td>ρ = resistividade; L = comprimento; A = seção transversal</td>
              <td>Ω (R); Ω·m (ρ); m (L); m² (A)</td>
              <td>A resistência depende do material, comprimento e área do condutor</td>
            </tr>
          </tbody>
        </table>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Fator</th>
              <th>Efeito sobre a resistência</th>
              <th>Relação</th>
              <th>Exemplo prático</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Comprimento (L) ↑</td>
              <td>R aumenta</td>
              <td>R ∝ L</td>
              <td>Fio longo tem mais resistência que fio curto do mesmo material</td>
            </tr>
            <tr>
              <td>Área (A) ↑</td>
              <td>R diminui</td>
              <td>R ∝ 1/A</td>
              <td>Cabo grosso (bitola maior) tem menos resistência</td>
            </tr>
            <tr>
              <td>Resistividade (ρ) ↑</td>
              <td>R aumenta</td>
              <td>R ∝ ρ</td>
              <td>Nicromo (ρ alto) é usado em resistências de chuveiro</td>
            </tr>
            <tr>
              <td>Temperatura ↑</td>
              <td>R aumenta (para metais)</td>
              <td>R = R₀(1 + αΔT)</td>
              <td>Termistores NTC têm resistência que cai com temperatura</td>
            </tr>
          </tbody>
        </table>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Material</th>
              <th>Resistividade ρ (Ω·m)</th>
              <th>Classificação</th>
              <th>Aplicação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Prata (Ag)</td>
              <td>1,6 × 10⁻⁸</td>
              <td>Condutor</td>
              <td>Contatos elétricos de alta precisão</td>
            </tr>
            <tr>
              <td>Cobre (Cu)</td>
              <td>1,7 × 10⁻⁸</td>
              <td>Condutor</td>
              <td>Fios elétricos residenciais e industriais</td>
            </tr>
            <tr>
              <td>Nicromo (liga Ni-Cr)</td>
              <td>1,1 × 10⁻⁶</td>
              <td>Condutor (alta resistividade)</td>
              <td>Resistências de chuveiros e fornos</td>
            </tr>
            <tr>
              <td>Silício (Si)</td>
              <td>~10³</td>
              <td>Semicondutor</td>
              <td>Transistores e chips eletrônicos</td>
            </tr>
            <tr>
              <td>Borracha</td>
              <td>~10¹³</td>
              <td>Isolante</td>
              <td>Revestimento de fios e cabos elétricos</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios Resolvidos</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Definição de corrente"
          statement={
            <p>
              Pelo filamento de uma lâmpada passa uma carga de 30 C em 10 s.
              Qual a intensidade da corrente elétrica?
            </p>
          }
          options={[
            { letter: "a", text: "0,3 A" },
            { letter: "b", text: "3,0 A", correct: true },
            { letter: "c", text: "30 A" },
            { letter: "d", text: "300 A" },
          ]}
          resolution={
            <>
              <div className="math-formula">i = ΔQ / Δt</div>
              <div className="math-formula">i = 30 / 10 = 3,0 A</div>
            </>
          }
        />

        <Exercise
          level="Básico"
          title="2. Primeira Lei de Ohm"
          statement={
            <p>
              Um resistor de 20 Ω é submetido a uma ddp de 100 V. Qual a
              corrente que o atravessa?
            </p>
          }
          options={[
            { letter: "a", text: "2 A" },
            { letter: "b", text: "5 A", correct: true },
            { letter: "c", text: "10 A" },
            { letter: "d", text: "20 A" },
          ]}
          resolution={
            <>
              <div className="math-formula">U = R · i</div>
              <div className="math-formula">i = U / R = 100 / 20 = 5 A</div>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="3. Segunda Lei de Ohm"
          statement={
            <p>
              Um fio de 2 m de comprimento e área 0,5 mm² tem resistividade
              ρ = 1,5 · 10⁻⁸ Ω·m. Qual sua resistência?
            </p>
          }
          options={[
            { letter: "a", text: "0,03 Ω" },
            { letter: "b", text: "0,06 Ω", correct: true },
            { letter: "c", text: "0,15 Ω" },
            { letter: "d", text: "0,30 Ω" },
          ]}
          resolution={
            <>
              <div className="math-formula">A = 0,5 mm² = 0,5 · 10⁻⁶ m²</div>
              <div className="math-formula">R = ρ · L / A</div>
              <div className="math-formula">R = 1,5·10⁻⁸ · 2 / (0,5·10⁻⁶)</div>
              <div className="math-formula">R = 3·10⁻⁸ / 5·10⁻⁷ = 0,06 Ω</div>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="4. Potência dissipada"
          statement={
            <p>
              Um chuveiro elétrico de 4.400 W é ligado em uma rede de 220 V.
              Qual a corrente que o atravessa?
            </p>
          }
          options={[
            { letter: "a", text: "10 A" },
            { letter: "b", text: "20 A", correct: true },
            { letter: "c", text: "30 A" },
            { letter: "d", text: "40 A" },
          ]}
          resolution={
            <>
              <div className="math-formula">P = U · i</div>
              <div className="math-formula">i = P / U = 4400 / 220 = 20 A</div>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="5. Consumo de energia (kWh)"
          statement={
            <p>
              Uma lâmpada de 100 W permanece ligada 5 h por dia, durante 30
              dias. Qual o consumo mensal em kWh?
            </p>
          }
          options={[
            { letter: "a", text: "5 kWh" },
            { letter: "b", text: "10 kWh" },
            { letter: "c", text: "15 kWh", correct: true },
            { letter: "d", text: "30 kWh" },
          ]}
          resolution={
            <>
              <div className="math-formula">E = P · Δt</div>
              <div className="math-formula">E = 0,1 kW · 5 h · 30 = 15 kWh</div>
            </>
          }
        />
      </section>
    </article>
  );
}
