"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap45Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 45</span>

          <h1>Introdução à Física Moderna: Relatividade, Efeito Fotoelétrico e Dualidade Onda-Partícula</h1>

          <p>
            Conheça as ideias revolucionárias do século XX: a teoria da
            relatividade restrita de Einstein, o efeito fotoelétrico e a
            dualidade onda-partícula que mudaram nossa visão sobre a natureza.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Crise da Física Clássica</span>

        <h2>1. Por Que a Física Moderna?</h2>

        <p>
          No fim do século XIX, a mecânica de Newton e o eletromagnetismo de
          Maxwell pareciam explicar tudo. Mas alguns fenômenos resistiam:
          a radiação do corpo negro, o efeito fotoelétrico e o resultado nulo
          do experimento de Michelson-Morley.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌡️</span>
            <h3>Corpo negro</h3>
            <p>Planck (1900): energia é quantizada.</p>
          </div>

          <div className="lesson-card">
            <span>💡</span>
            <h3>Fotoelétrico</h3>
            <p>Einstein (1905): luz é feita de fótons.</p>
          </div>

          <div className="lesson-card">
            <span>🚀</span>
            <h3>Relatividade</h3>
            <p>Einstein (1905): tempo e espaço relativos.</p>
          </div>

          <div className="lesson-card">
            <span>🌊</span>
            <h3>Dualidade</h3>
            <p>De Broglie (1924): matéria também é onda.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Postulados de Einstein</span>

        <h2>2. Postulados da Relatividade Restrita</h2>

        <p>
          Em 1905, Einstein publicou a Teoria da Relatividade Restrita,
          baseada em dois postulados surpreendentemente simples.
        </p>

        <div className="lesson-highlight">
          <h3>Os dois postulados</h3>
          <ul>
            <li>
              <strong>1) Princípio da relatividade:</strong> as leis da Física
              são as mesmas em todos os referenciais inerciais (que se movem
              com velocidade constante uns em relação aos outros).
            </li>
            <li>
              <strong>2) Constância de c:</strong> a velocidade da luz no
              vácuo é a mesma (c ≈ 3 · 10⁸ m/s) para todos os observadores,
              independentemente do movimento da fonte ou do receptor.
            </li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Consequências</span>

        <h2>3. Dilatação do Tempo e Contração do Espaço</h2>

        <p>
          As consequências dos postulados são extraordinárias e fogem da
          intuição cotidiana — mas já foram confirmadas experimentalmente.
        </p>

        <div className="math-block">
          <h3>Fator de Lorentz</h3>
          <div className="math-formula">γ = 1 / √(1 − v²/c²)</div>
        </div>

        <div className="math-block">
          <h3>Dilatação do tempo</h3>
          <div className="math-formula">Δt = γ · Δt₀</div>
          <p>Δt₀: intervalo de tempo próprio (medido em repouso).</p>
        </div>

        <div className="math-block">
          <h3>Contração do comprimento</h3>
          <div className="math-formula">L = L₀ / γ</div>
          <p>L₀: comprimento próprio (medido em repouso).</p>
        </div>

        <div className="lesson-highlight">
          <p>
            Para v &lt;&lt; c, γ ≈ 1 e os efeitos relativísticos são
            imperceptíveis — por isso a mecânica de Newton funciona no
            cotidiano. Para v próximo a c, γ cresce muito (γ → ∞ se v → c).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Equivalência Massa-Energia</span>

        <h2>4. E = m · c²</h2>

        <p>
          A famosa equação de Einstein mostra que massa e energia são
          formas equivalentes: massa pode se converter em energia e vice-versa.
        </p>

        <div className="math-block">
          <h3>Energia de repouso</h3>
          <div className="math-formula">E₀ = m · c²</div>
        </div>

        <div className="math-block">
          <h3>Energia total relativística</h3>
          <div className="math-formula">E = γ · m · c²</div>
        </div>

        <div className="lesson-highlight">
          <h3>Aplicações</h3>
          <ul>
            <li>Fissão nuclear (usinas e bombas atômicas).</li>
            <li>Fusão nuclear (Sol e estrelas).</li>
            <li>Aniquilação matéria-antimatéria.</li>
            <li>Reatores PET na medicina nuclear.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Quantização</span>

        <h2>5. Hipótese de Planck e o Fóton</h2>

        <p>
          Planck propôs que a energia trocada entre matéria e radiação não
          é contínua, mas formada por "pacotes" discretos, chamados quanta.
          Einstein deu o passo seguinte: a luz é composta por partículas
          de energia, os fótons.
        </p>

        <div className="math-block">
          <h3>Energia do fóton</h3>
          <div className="math-formula">E = h · f</div>
          <p>h = 6,63 · 10⁻³⁴ J·s (constante de Planck). f: frequência (Hz).</p>
        </div>

        <div className="math-block">
          <h3>Em termos de comprimento de onda</h3>
          <div className="math-formula">E = h · c / λ</div>
        </div>

        <div className="lesson-highlight">
          <p>
            Fótons não têm massa, mas carregam energia e momento. Cada
            "cor" da luz corresponde a fótons com energia diferente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Efeito Fotoelétrico</span>

        <h2>6. Efeito Fotoelétrico</h2>

        <p>
          Quando luz incide sobre uma superfície metálica, elétrons podem
          ser ejetados. O fenômeno tem características que a Física Clássica
          não conseguia explicar.
        </p>

        <div className="lesson-highlight">
          <h3>Fatos observados</h3>
          <ul>
            <li>Existe uma frequência mínima (f₀, "de corte"). Abaixo dela, nenhum elétron sai, por mais intensa que seja a luz.</li>
            <li>A energia cinética máxima dos elétrons depende da frequência, não da intensidade.</li>
            <li>O número de elétrons ejetados aumenta com a intensidade da luz (acima de f₀).</li>
            <li>A emissão é praticamente instantânea.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Equação de Einstein (1905)</h3>
          <div className="math-formula">h·f = W + Ec_máx</div>
          <p>
            W: função trabalho do metal (energia para arrancar o elétron).
            Ec_máx: energia cinética máxima do elétron ejetado.
          </p>
        </div>

        <div className="math-block">
          <h3>Frequência de corte</h3>
          <div className="math-formula">f₀ = W / h</div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Dualidade</span>

        <h2>7. Dualidade Onda-Partícula</h2>

        <p>
          A luz se comporta às vezes como onda (interferência, difração) e
          às vezes como partícula (fóton no efeito fotoelétrico). Em 1924,
          Louis de Broglie propôs que essa dualidade vale também para a
          matéria.
        </p>

        <div className="math-block">
          <h3>Comprimento de onda de De Broglie</h3>
          <div className="math-formula">λ = h / (m · v)</div>
          <p>Toda partícula com massa m e velocidade v tem uma "onda de matéria".</p>
        </div>

        <div className="math-block">
          <h3>Momento e comprimento de onda</h3>
          <div className="math-formula">p = m · v ⇒ λ = h / p</div>
        </div>

        <div className="lesson-highlight">
          <h3>Confirmações</h3>
          <ul>
            <li>Davisson e Germer (1927): elétrons difratados por cristal (mesmo padrão dos raios X).</li>
            <li>Microscópio eletrônico: usa o pequeno λ dos elétrons para imagens de alta resolução.</li>
            <li>Em escala humana, λ é desprezível (~10⁻³⁵ m), por isso não vemos efeitos ondulatórios.</li>
          </ul>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Microscópio eletrônico</h3>
            <p>Resolução muito maior que o óptico.</p>
          </div>

          <div className="lesson-card">
            <span>📷</span>
            <h3>Câmeras digitais</h3>
            <p>Sensores baseados no efeito fotoelétrico.</p>
          </div>

          <div className="lesson-card">
            <span>☀️</span>
            <h3>Painéis solares</h3>
            <p>Fótons → elétrons → corrente elétrica.</p>
          </div>

          <div className="lesson-card">
            <span>🛰️</span>
            <h3>GPS</h3>
            <p>Correções relativísticas essenciais.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese Visual</span>
        <h2>8. Mapa Conceitual da Física Moderna</h2>
        <p>
          A Física Moderna rompe com o determinismo clássico: relatividade,
          quantização e dualidade onda-partícula formam um triângulo conceitual
          indissociável.
        </p>

        <svg viewBox="0 0 700 240" className="lesson-svg" aria-label="Mapa conceitual da Física Moderna — três pilares">
          <defs>
            <marker id="arr45a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#475569" />
            </marker>
          </defs>
          {/* nó central */}
          <ellipse cx="350" cy="115" rx="75" ry="34" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
          <text x="350" y="112" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">Física</text>
          <text x="350" y="128" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">Moderna</text>
          {/* nó Relatividade */}
          <ellipse cx="130" cy="55" rx="90" ry="30" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="130" y="50" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e3a8a">Relatividade</text>
          <text x="130" y="66" textAnchor="middle" fontSize="11" fill="#1e3a8a">E=mc², dilatação do tempo</text>
          {/* nó Quantização */}
          <ellipse cx="570" cy="55" rx="100" ry="30" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="570" y="50" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#14532d">Quantização</text>
          <text x="570" y="66" textAnchor="middle" fontSize="11" fill="#14532d">E=hf, Planck, fóton</text>
          {/* nó Dualidade */}
          <ellipse cx="350" cy="200" rx="105" ry="30" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="350" y="195" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#713f12">Dualidade onda-partícula</text>
          <text x="350" y="211" textAnchor="middle" fontSize="11" fill="#713f12">λ=h/p, de Broglie</text>
          {/* conexões */}
          <line x1="215" y1="72" x2="280" y2="100" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr45a)" />
          <line x1="475" y1="72" x2="420" y2="100" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr45a)" />
          <line x1="350" y1="149" x2="350" y2="170" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr45a)" />
          <line x1="220" y1="65" x2="472" y2="65" stroke="#475569" strokeWidth="1" strokeDasharray="6 3" />
          <text x="350" y="60" textAnchor="middle" fontSize="11" fill="#475569">fóton: relativista e quântico</text>
        </svg>

        <svg viewBox="0 0 700 230" className="lesson-svg" aria-label="Efeito fotoelétrico — diagrama de energia">
          <defs>
            <marker id="arr45b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
          </defs>
          {/* placa metálica */}
          <rect x="50" y="80" width="200" height="120" rx="4" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
          <text x="150" y="148" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">Metal</text>
          <text x="150" y="166" textAnchor="middle" fontSize="12" fill="#475569">Função trabalho W₀</text>
          {/* fótons incidentes */}
          <line x1="350" y1="100" x2="258" y2="120" stroke="#ca8a04" strokeWidth="2" markerEnd="url(#arr45b)" />
          <line x1="350" y1="130" x2="258" y2="140" stroke="#ca8a04" strokeWidth="2" markerEnd="url(#arr45b)" />
          <line x1="350" y1="160" x2="258" y2="155" stroke="#ca8a04" strokeWidth="2" markerEnd="url(#arr45b)" />
          <text x="410" y="100" textAnchor="middle" fontSize="13" fill="#92400e">Fóton</text>
          <text x="410" y="115" textAnchor="middle" fontSize="13" fill="#92400e">E = hf</text>
          {/* elétron ejetado */}
          <circle cx="80" cy="70" r="10" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
          <line x1="80" y1="60" x2="80" y2="20" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr45b)" />
          <text x="100" y="35" textAnchor="start" fontSize="13" fill="#dc2626">e⁻ Ec = hf − W₀</text>
          {/* condição */}
          <text x="350" y="200" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">hf ≥ W₀ → elétron é ejetado</text>
          <text x="350" y="220" textAnchor="middle" fontSize="13" fill="#475569">Frequência de corte: f₀ = W₀/h</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Teoria / Fenômeno</th>
              <th>Expressão principal</th>
              <th>Variáveis</th>
              <th>Significado</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Dilatação do tempo (Einstein)</td><td>Δt = Δt₀/√(1−v²/c²)</td><td>v = vel. relativa, c = vel. da luz</td><td>Relógio em movimento passa mais devagar</td></tr>
            <tr><td>Equivalência massa-energia</td><td>E = m·c²</td><td>m = massa de repouso, c = 3×10⁸ m/s</td><td>Massa e energia são intercambiáveis</td></tr>
            <tr><td>Hipótese de Planck (quantum)</td><td>E = n·h·f</td><td>h = 6,63×10⁻³⁴ J·s, f = frequência</td><td>Energia emitida em pacotes discretos</td></tr>
            <tr><td>Energia do fóton (Einstein)</td><td>E = h·f</td><td>h = constante de Planck</td><td>Fóton é o quantum de luz</td></tr>
            <tr><td>Efeito fotoelétrico</td><td>Ec = hf − W₀</td><td>W₀ = função trabalho do metal</td><td>Elétron ejetado se hf ≥ W₀</td></tr>
            <tr><td>Comprimento de de Broglie</td><td>λ = h/p = h/(m·v)</td><td>p = momento linear</td><td>Toda partícula tem natureza ondulatória</td></tr>
          </tbody>
        </table>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Evento histórico</th>
              <th>Ano</th>
              <th>Contribuição</th>
              <th>Ruptura com a Física Clássica</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Planck — radiação do corpo negro</td><td>1900</td><td>Quantização da energia E=nhf</td><td>Energia não é contínua</td></tr>
            <tr><td>Einstein — efeito fotoelétrico</td><td>1905</td><td>Fóton: partícula de luz</td><td>Luz tem natureza corpuscular</td></tr>
            <tr><td>Einstein — Relatividade Restrita</td><td>1905</td><td>E=mc², dilatação do tempo</td><td>Espaço e tempo são relativos</td></tr>
            <tr><td>de Broglie — dualidade</td><td>1924</td><td>λ=h/p para partículas</td><td>Matéria tem natureza ondulatória</td></tr>
            <tr><td>Heisenberg — incerteza</td><td>1927</td><td>Δx·Δp ≥ h/(4π)</td><td>Determinismo clássico é impossível</td></tr>
          </tbody>
        </table>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Aplicação moderna</th>
              <th>Princípio quântico ou relativístico</th>
              <th>Impacto social</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>GPS</td><td>Correção relativística de tempo (satélites viajam a ~14.000 km/h)</td><td>Navegação precisa mundial</td></tr>
            <tr><td>Lasers</td><td>Emissão estimulada de fótons (quantum)</td><td>Medicina, telecomunicações, indústria</td></tr>
            <tr><td>Energia nuclear</td><td>E=mc²: massa convertida em energia</td><td>Usinas nucleares, armas</td></tr>
            <tr><td>Tomografia PET</td><td>Aniquilação pósitron-elétron → 2 fótons</td><td>Diagnóstico de câncer</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios Resolvidos</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Postulados da relatividade"
          statement={
            <p>
              Segundo a Teoria da Relatividade Restrita de Einstein, a
              velocidade da luz no vácuo:
            </p>
          }
          options={[
            { letter: "a", text: "Depende da velocidade da fonte que a emite." },
            { letter: "b", text: "Depende do referencial do observador." },
            { letter: "c", text: "É a mesma para todos os observadores inerciais.", correct: true },
            { letter: "d", text: "Pode ser ultrapassada por objetos com massa." },
          ]}
          resolution={
            <p>
              Segundo o segundo postulado, c é constante e igual a
              aproximadamente 3 · 10⁸ m/s para qualquer referencial inercial.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="2. Energia do fóton"
          statement={
            <p>
              Qual a energia de um fóton de frequência 5 · 10¹⁴ Hz?
              (h = 6,63 · 10⁻³⁴ J·s)
            </p>
          }
          options={[
            { letter: "a", text: "1,33 · 10⁻²⁰ J" },
            { letter: "b", text: "3,32 · 10⁻¹⁹ J", correct: true },
            { letter: "c", text: "6,63 · 10⁻¹⁹ J" },
            { letter: "d", text: "5,00 · 10¹⁴ J" },
          ]}
          resolution={
            <>
              <div className="math-formula">E = h · f</div>
              <div className="math-formula">E = 6,63·10⁻³⁴ · 5·10¹⁴</div>
              <div className="math-formula">E ≈ 3,32 · 10⁻¹⁹ J</div>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="3. Efeito fotoelétrico"
          statement={
            <p>
              No efeito fotoelétrico, qual grandeza da luz incidente
              determina a energia cinética máxima dos elétrons ejetados?
            </p>
          }
          options={[
            { letter: "a", text: "Intensidade." },
            { letter: "b", text: "Frequência.", correct: true },
            { letter: "c", text: "Velocidade." },
            { letter: "d", text: "Polarização." },
          ]}
          resolution={
            <>
              <p>
                Pela equação de Einstein h·f = W + Ec_máx, a Ec_máx depende
                de f. A intensidade só afeta o número de elétrons emitidos.
              </p>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="4. Equivalência massa-energia"
          statement={
            <p>
              Quanta energia equivale a uma massa de 1 g, segundo E = m·c²?
              (c = 3 · 10⁸ m/s)
            </p>
          }
          options={[
            { letter: "a", text: "9 · 10⁷ J" },
            { letter: "b", text: "9 · 10¹⁰ J" },
            { letter: "c", text: "9 · 10¹³ J", correct: true },
            { letter: "d", text: "3 · 10⁸ J" },
          ]}
          resolution={
            <>
              <div className="math-formula">m = 1 g = 10⁻³ kg</div>
              <div className="math-formula">E = m · c² = 10⁻³ · (3·10⁸)²</div>
              <div className="math-formula">E = 10⁻³ · 9·10¹⁶ = 9 · 10¹³ J</div>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="5. Comprimento de onda de De Broglie"
          statement={
            <p>
              Calcule o comprimento de onda associado a um elétron
              (m = 9 · 10⁻³¹ kg) com velocidade 10⁶ m/s.
              (h = 6,63 · 10⁻³⁴ J·s)
            </p>
          }
          options={[
            { letter: "a", text: "≈ 7,4 · 10⁻¹⁰ m", correct: true },
            { letter: "b", text: "≈ 7,4 · 10⁻⁷ m" },
            { letter: "c", text: "≈ 1,5 · 10⁻⁹ m" },
            { letter: "d", text: "≈ 9,0 · 10⁻⁶ m" },
          ]}
          resolution={
            <>
              <div className="math-formula">λ = h / (m·v)</div>
              <div className="math-formula">λ = 6,63·10⁻³⁴ / (9·10⁻³¹ · 10⁶)</div>
              <div className="math-formula">λ = 6,63·10⁻³⁴ / 9·10⁻²⁵</div>
              <div className="math-formula">λ ≈ 7,4 · 10⁻¹⁰ m</div>
            </>
          }
        />
      </section>
    </article>
  );
}
