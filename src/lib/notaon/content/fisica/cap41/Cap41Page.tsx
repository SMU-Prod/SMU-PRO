"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap41Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 41</span>

          <h1>Eletrodinâmica II: Associação de Resistores (Série, Paralelo e Mista) e Circuitos Elétricos</h1>

          <p>
            Aprenda a combinar resistores em série, paralelo e formas mistas;
            calcule a resistência equivalente e resolva circuitos com
            corrente e ddp em cada componente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Conceito</span>

        <h2>1. Por Que Associar Resistores?</h2>

        <p>
          Em um circuito real, raramente usamos um único resistor. A
          associação permite obter resistências de valores específicos,
          dividir tensões ou correntes, ou aumentar a capacidade de dissipação.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Série</h3>
            <p>Resistores um após o outro, mesma corrente.</p>
          </div>

          <div className="lesson-card">
            <span>⫴</span>
            <h3>Paralelo</h3>
            <p>Lado a lado, mesma ddp.</p>
          </div>

          <div className="lesson-card">
            <span>🧩</span>
            <h3>Mista</h3>
            <p>Combinação de série e paralelo.</p>
          </div>

          <div className="lesson-card">
            <span>🎯</span>
            <h3>Equivalente</h3>
            <p>R_eq: resistor único que substitui o conjunto.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Associação em Série</span>

        <h2>2. Resistores em Série</h2>

        <p>
          Na associação em série, os resistores são ligados um após o outro,
          formando um único caminho para a corrente.
        </p>

        <div className="lesson-highlight">
          <h3>Características</h3>
          <ul>
            <li>A corrente é a mesma em todos os resistores.</li>
            <li>A ddp total é a soma das ddps de cada resistor.</li>
            <li>A resistência equivalente é a soma das resistências.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Resistência equivalente</h3>
          <div className="math-formula">R_eq = R₁ + R₂ + R₃ + ...</div>
        </div>

        <div className="math-block">
          <h3>Tensão total</h3>
          <div className="math-formula">U = U₁ + U₂ + U₃ + ...</div>
          <div className="math-formula">i = i₁ = i₂ = i₃</div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Associação em Paralelo</span>

        <h2>3. Resistores em Paralelo</h2>

        <p>
          Em paralelo, os resistores compartilham os mesmos dois nós (pontos
          do circuito). A corrente se divide entre eles.
        </p>

        <div className="lesson-highlight">
          <h3>Características</h3>
          <ul>
            <li>A ddp é a mesma em todos os resistores.</li>
            <li>A corrente total é a soma das correntes em cada resistor.</li>
            <li>R_eq é sempre menor que o menor dos resistores.</li>
          </ul>
        </div>

        <div className="math-block">
          <h3>Resistência equivalente (geral)</h3>
          <div className="math-formula">1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ...</div>
        </div>

        <div className="math-block">
          <h3>Apenas dois resistores</h3>
          <div className="math-formula">R_eq = (R₁ · R₂) / (R₁ + R₂)</div>
        </div>

        <div className="math-block">
          <h3>n resistores iguais</h3>
          <div className="math-formula">R_eq = R / n</div>
        </div>

        <div className="math-block">
          <h3>Tensão e corrente</h3>
          <div className="math-formula">U = U₁ = U₂ = U₃</div>
          <div className="math-formula">i = i₁ + i₂ + i₃</div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mista</span>

        <h2>4. Associação Mista</h2>

        <p>
          Combina trechos em série e em paralelo. Para resolver, simplifique
          aos poucos: identifique blocos em paralelo, calcule seu equivalente
          e depois some em série os blocos resultantes.
        </p>

        <div className="lesson-highlight">
          <h3>Estratégia passo a passo</h3>
          <ul>
            <li>1. Marque os nós do circuito (junções de 3+ fios).</li>
            <li>2. Identifique blocos em paralelo (mesmos nós).</li>
            <li>3. Calcule a R_eq de cada bloco em paralelo.</li>
            <li>4. Some em série os blocos restantes.</li>
            <li>5. Aplique U = R_eq · i para achar a corrente total.</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Curto-circuito e Aberto</span>

        <h2>5. Casos Especiais</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Curto-circuito</h3>
            <p>Fio de R ≈ 0 ligando dois pontos. Toda a corrente passa por ele.</p>
          </div>

          <div className="lesson-card">
            <span>✂️</span>
            <h3>Circuito aberto</h3>
            <p>Interrupção: i = 0 nesse trecho.</p>
          </div>

          <div className="lesson-card">
            <span>🔌</span>
            <h3>Chave aberta</h3>
            <p>Equivale a circuito aberto.</p>
          </div>

          <div className="lesson-card">
            <span>🔘</span>
            <h3>Chave fechada</h3>
            <p>Equivale a fio ideal (R = 0).</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <p>
            Em paralelo, se um resistor é curto-circuitado, todos os outros
            do mesmo bloco ficam com U = 0 e não conduzem corrente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Circuito Simples</span>

        <h2>6. Resolução de Circuitos</h2>

        <p>
          Em circuitos com fonte ideal (gerador sem resistência interna), a
          ddp total fornecida é igual à fem (ε).
        </p>

        <div className="math-block">
          <h3>Corrente total</h3>
          <div className="math-formula">i = ε / R_eq</div>
        </div>

        <div className="math-block">
          <h3>ddp em cada resistor</h3>
          <div className="math-formula">U_i = R_i · i_i</div>
        </div>

        <div className="math-block">
          <h3>Potência em cada resistor</h3>
          <div className="math-formula">P_i = R_i · i_i² = U_i² / R_i</div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicações</span>

        <h2>7. Onde Encontramos Essas Associações</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏠</span>
            <h3>Tomadas residenciais</h3>
            <p>Em paralelo: cada uma recebe 127 V (ou 220 V).</p>
          </div>

          <div className="lesson-card">
            <span>🎄</span>
            <h3>Pisca-pisca antigo</h3>
            <p>Em série: se uma queima, todas apagam.</p>
          </div>

          <div className="lesson-card">
            <span>📱</span>
            <h3>Eletrônicos</h3>
            <p>Mistas: divisores de tensão, filtros.</p>
          </div>

          <div className="lesson-card">
            <span>🚗</span>
            <h3>Automóvel</h3>
            <p>Lâmpadas em paralelo na bateria 12 V.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Circuito</span>
        <h2>8. Representação Visual das Associações</h2>
        <p>
          Visualizar o circuito antes de calcular é fundamental para não errar o
          sentido da corrente e a queda de tensão em cada elemento.
        </p>

        <svg viewBox="0 0 700 220" className="lesson-svg" aria-label="Circuito em série: R1, R2, R3">
          <defs>
            <marker id="arr41a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
            </marker>
          </defs>
          {/* fios horizontais */}
          <line x1="50" y1="110" x2="130" y2="110" stroke="#1e293b" strokeWidth="2" />
          <line x1="230" y1="110" x2="310" y2="110" stroke="#1e293b" strokeWidth="2" />
          <line x1="410" y1="110" x2="490" y2="110" stroke="#1e293b" strokeWidth="2" />
          <line x1="590" y1="110" x2="650" y2="110" stroke="#1e293b" strokeWidth="2" />
          {/* retornos superior e inferior */}
          <line x1="50" y1="110" x2="50" y2="40" stroke="#1e293b" strokeWidth="2" />
          <line x1="50" y1="40" x2="650" y2="40" stroke="#1e293b" strokeWidth="2" />
          <line x1="650" y1="40" x2="650" y2="110" stroke="#1e293b" strokeWidth="2" />
          {/* R1 */}
          <rect x="130" y="88" width="100" height="44" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="180" y="115" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1d4ed8">R₁</text>
          {/* R2 */}
          <rect x="310" y="88" width="100" height="44" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="360" y="115" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1d4ed8">R₂</text>
          {/* R3 */}
          <rect x="490" y="88" width="100" height="44" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="540" y="115" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1d4ed8">R₃</text>
          {/* seta de corrente */}
          <line x1="310" y1="50" x2="390" y2="50" stroke="#2563eb" strokeWidth="2" markerEnd="url(#arr41a)" />
          <text x="350" y="38" textAnchor="middle" fontSize="13" fill="#2563eb">I</text>
          {/* rótulos de tensão */}
          <text x="180" y="148" textAnchor="middle" fontSize="12" fill="#64748b">V₁</text>
          <text x="360" y="148" textAnchor="middle" fontSize="12" fill="#64748b">V₂</text>
          <text x="540" y="148" textAnchor="middle" fontSize="12" fill="#64748b">V₃</text>
          <text x="350" y="190" textAnchor="middle" fontSize="13" fill="#0f172a">V₁ + V₂ + V₃ = V<tspan baselineShift="sub" fontSize="10">total</tspan> | mesma corrente I</text>
          <text x="350" y="210" textAnchor="middle" fontSize="13" fill="#0f172a">R<tspan baselineShift="sub" fontSize="10">eq</tspan> = R₁ + R₂ + R₃</text>
        </svg>

        <svg viewBox="0 0 700 260" className="lesson-svg" aria-label="Circuito em paralelo: R1, R2, R3">
          <defs>
            <marker id="arr41b" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#16a34a" />
            </marker>
          </defs>
          {/* barramento esquerdo e direito */}
          <line x1="120" y1="30" x2="120" y2="230" stroke="#1e293b" strokeWidth="3" />
          <line x1="580" y1="30" x2="580" y2="230" stroke="#1e293b" strokeWidth="3" />
          {/* fios horizontais de cada ramo */}
          <line x1="120" y1="70" x2="250" y2="70" stroke="#1e293b" strokeWidth="2" />
          <line x1="450" y1="70" x2="580" y2="70" stroke="#1e293b" strokeWidth="2" />
          <line x1="120" y1="130" x2="250" y2="130" stroke="#1e293b" strokeWidth="2" />
          <line x1="450" y1="130" x2="580" y2="130" stroke="#1e293b" strokeWidth="2" />
          <line x1="120" y1="190" x2="250" y2="190" stroke="#1e293b" strokeWidth="2" />
          <line x1="450" y1="190" x2="580" y2="190" stroke="#1e293b" strokeWidth="2" />
          {/* resistores */}
          <rect x="250" y="50" width="200" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="350" y="76" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#166534">R₁</text>
          <rect x="250" y="110" width="200" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="350" y="136" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#166534">R₂</text>
          <rect x="250" y="170" width="200" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="350" y="196" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#166534">R₃</text>
          {/* rótulos de corrente */}
          <line x1="155" y1="60" x2="215" y2="60" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arr41b)" />
          <text x="185" y="52" textAnchor="middle" fontSize="12" fill="#16a34a">I₁</text>
          <line x1="155" y1="120" x2="215" y2="120" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arr41b)" />
          <text x="185" y="112" textAnchor="middle" fontSize="12" fill="#16a34a">I₂</text>
          <line x1="155" y1="180" x2="215" y2="180" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arr41b)" />
          <text x="185" y="172" textAnchor="middle" fontSize="12" fill="#16a34a">I₃</text>
          <text x="350" y="245" textAnchor="middle" fontSize="13" fill="#0f172a">mesma tensão V | I₁+I₂+I₃ = I<tspan baselineShift="sub" fontSize="10">total</tspan></text>
          <text x="350" y="262" textAnchor="middle" fontSize="13" fill="#0f172a">1/R<tspan baselineShift="sub" fontSize="10">eq</tspan> = 1/R₁ + 1/R₂ + 1/R₃</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Grandeza</th>
              <th>Série</th>
              <th>Paralelo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Corrente</td><td>Mesma em todos (I₁=I₂=I₃=I)</td><td>Divide-se (I=I₁+I₂+I₃)</td></tr>
            <tr><td>Tensão</td><td>Divide-se (V=V₁+V₂+V₃)</td><td>Mesma em todos (V₁=V₂=V₃=V)</td></tr>
            <tr><td>R equivalente</td><td>Req = R₁+R₂+R₃ (maior que qualquer R)</td><td>1/Req = 1/R₁+1/R₂+1/R₃ (menor que o menor R)</td></tr>
            <tr><td>Quando um queima</td><td>Todo o circuito apaga</td><td>Apenas aquele ramo interrompe</td></tr>
          </tbody>
        </table>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Caso</th>
              <th>Fórmula</th>
              <th>Exemplo numérico</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Série</td><td>Req = ΣRi</td><td>R₁=4Ω, R₂=6Ω</td><td>Req = 10 Ω</td></tr>
            <tr><td>Paralelo (2 resistores)</td><td>Req = R₁·R₂ / (R₁+R₂)</td><td>R₁=4Ω, R₂=4Ω</td><td>Req = 2 Ω</td></tr>
            <tr><td>N resistores iguais ‖</td><td>Req = R/N</td><td>4×6Ω em paralelo</td><td>Req = 1,5 Ω</td></tr>
            <tr><td>Mista</td><td>Reduzir etapa por etapa</td><td>R₁=4Ω em série com (R₂=6‖R₃=3)</td><td>Req = 6 Ω</td></tr>
          </tbody>
        </table>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Aplicação prática</th>
              <th>Associação usada</th>
              <th>Por quê</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Lâmpadas de decoração (pisca-pisca antigo)</td><td>Série</td><td>Uma lâmpada queimada apaga todas; tensão menor em cada</td></tr>
            <tr><td>Tomadas de uma residência</td><td>Paralelo</td><td>Cada aparelho recebe 127 V/220 V completos</td></tr>
            <tr><td>Circuito interno de TV</td><td>Mista</td><td>Diferentes componentes precisam de tensões e correntes diferentes</td></tr>
            <tr><td>Bateria de carro + resistores</td><td>Mista</td><td>Combina proteção (série) com distribuição de potência (paralelo)</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios Resolvidos</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Associação em série"
          statement={
            <p>
              Três resistores de 10 Ω, 20 Ω e 30 Ω estão associados em série.
              Qual a resistência equivalente?
            </p>
          }
          options={[
            { letter: "a", text: "5,45 Ω" },
            { letter: "b", text: "10 Ω" },
            { letter: "c", text: "30 Ω" },
            { letter: "d", text: "60 Ω", correct: true },
          ]}
          resolution={
            <>
              <div className="math-formula">R_eq = 10 + 20 + 30 = 60 Ω</div>
            </>
          }
        />

        <Exercise
          level="Básico"
          title="2. Dois resistores em paralelo"
          statement={
            <p>
              Dois resistores de 6 Ω e 3 Ω estão associados em paralelo.
              Qual a resistência equivalente?
            </p>
          }
          options={[
            { letter: "a", text: "2 Ω", correct: true },
            { letter: "b", text: "3 Ω" },
            { letter: "c", text: "4,5 Ω" },
            { letter: "d", text: "9 Ω" },
          ]}
          resolution={
            <>
              <div className="math-formula">R_eq = (R₁·R₂)/(R₁+R₂)</div>
              <div className="math-formula">R_eq = (6·3)/(6+3) = 18/9 = 2 Ω</div>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="3. Resistores iguais em paralelo"
          statement={
            <p>
              Quatro resistores iguais de 12 Ω cada são ligados em paralelo.
              Qual a resistência equivalente?
            </p>
          }
          options={[
            { letter: "a", text: "3 Ω", correct: true },
            { letter: "b", text: "4 Ω" },
            { letter: "c", text: "12 Ω" },
            { letter: "d", text: "48 Ω" },
          ]}
          resolution={
            <>
              <div className="math-formula">R_eq = R / n = 12 / 4 = 3 Ω</div>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="4. Corrente total no circuito"
          statement={
            <p>
              Uma fonte ideal de 60 V alimenta dois resistores em série, de
              4 Ω e 8 Ω. Qual a corrente que circula?
            </p>
          }
          options={[
            { letter: "a", text: "2 A" },
            { letter: "b", text: "5 A", correct: true },
            { letter: "c", text: "7,5 A" },
            { letter: "d", text: "12 A" },
          ]}
          resolution={
            <>
              <div className="math-formula">R_eq = 4 + 8 = 12 Ω</div>
              <div className="math-formula">i = U / R_eq = 60 / 12 = 5 A</div>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="5. Associação mista"
          statement={
            <p>
              Em um circuito, R₁ = 4 Ω está em série com a associação em
              paralelo de R₂ = 6 Ω e R₃ = 3 Ω. Qual a resistência equivalente?
            </p>
          }
          options={[
            { letter: "a", text: "2 Ω" },
            { letter: "b", text: "4 Ω" },
            { letter: "c", text: "6 Ω", correct: true },
            { letter: "d", text: "13 Ω" },
          ]}
          resolution={
            <>
              <div className="math-formula">R_paralelo = (6·3)/(6+3) = 2 Ω</div>
              <div className="math-formula">R_eq = R₁ + R_paralelo = 4 + 2 = 6 Ω</div>
            </>
          }
        />
      </section>
    </article>
  );
}
