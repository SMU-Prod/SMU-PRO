"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap43Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Física • Capítulo 43</span>

          <h1>Magnetismo: Ímãs, Campo Magnético Terrestre e Campo Magnético Gerado por Correntes</h1>

          <p>
            Compreenda as propriedades dos ímãs, o campo magnético da Terra
            e como correntes elétricas em fios, espiras e solenóides geram
            campos magnéticos — base do eletromagnetismo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ímãs</span>

        <h2>1. Propriedades dos Ímãs</h2>

        <p>
          Ímãs são corpos capazes de atrair certos materiais (ferro, níquel,
          cobalto). Todo ímã possui dois polos: norte (N) e sul (S).
        </p>

        <div className="lesson-highlight">
          <h3>Princípios fundamentais</h3>
          <ul>
            <li>Polos de mesmo nome se repelem; polos diferentes se atraem.</li>
            <li>Inseparabilidade: ao partir um ímã, cada pedaço se torna um novo ímã com dois polos.</li>
            <li>Linhas de campo saem do N e entram no S (no exterior).</li>
            <li>No interior do ímã, as linhas vão do S para o N.</li>
            <li>As linhas de campo são fechadas (não há monopolo magnético).</li>
          </ul>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧲</span>
            <h3>Ferromagnéticos</h3>
            <p>Fe, Ni, Co — fortemente atraídos.</p>
          </div>

          <div className="lesson-card">
            <span>🪨</span>
            <h3>Paramagnéticos</h3>
            <p>Al, Mn — fracamente atraídos.</p>
          </div>

          <div className="lesson-card">
            <span>🥄</span>
            <h3>Diamagnéticos</h3>
            <p>Cu, Au, água — fracamente repelidos.</p>
          </div>

          <div className="lesson-card">
            <span>♾️</span>
            <h3>Permanentes</h3>
            <p>Mantêm o magnetismo por longo tempo.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Vetor Campo</span>

        <h2>2. Vetor Indução Magnética (B⃗)</h2>

        <p>
          O campo magnético é representado pelo vetor B⃗ (indução magnética).
          Em cada ponto, ele é tangente à linha de campo, com sentido N → S
          (no exterior do ímã).
        </p>

        <div className="math-block">
          <h3>Unidade</h3>
          <div className="math-formula">[B] = T (tesla)</div>
          <p>1 T = 1 N/(A·m). Outra unidade comum: 1 gauss = 10⁻⁴ T.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Campo da Terra</span>

        <h2>3. Campo Magnético Terrestre</h2>

        <p>
          A Terra se comporta como um gigantesco ímã. O polo Sul magnético
          fica próximo ao polo Norte geográfico (por isso a agulha da
          bússola — cujo norte aponta para o N geográfico — é atraída).
        </p>

        <div className="lesson-highlight">
          <h3>Características</h3>
          <ul>
            <li>Polo norte magnético ≈ polo Sul geográfico.</li>
            <li>Polo sul magnético ≈ polo Norte geográfico.</li>
            <li>Intensidade aproximada na superfície: ~5 · 10⁻⁵ T.</li>
            <li>Desviado por minerais e correntes elétricas locais.</li>
            <li>Protege a Terra das partículas do vento solar (magnetosfera).</li>
          </ul>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Oersted</span>

        <h2>4. Experiência de Oersted</h2>

        <p>
          Em 1820, Hans Oersted observou que uma agulha magnética colocada
          próxima a um fio percorrido por corrente sofria desvio. Concluiu-se:
          toda corrente elétrica gera um campo magnético ao seu redor.
        </p>

        <div className="lesson-highlight">
          <p>
            Essa descoberta unificou eletricidade e magnetismo, dando início
            ao eletromagnetismo clássico.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fio Retilíneo</span>

        <h2>5. Campo de um Fio Reto e Longo</h2>

        <p>
          As linhas de campo magnético geradas por um fio retilíneo e longo
          percorrido por corrente são circunferências concêntricas ao fio,
          em planos perpendiculares a ele.
        </p>

        <div className="math-block">
          <h3>Módulo do campo</h3>
          <div className="math-formula">B = (μ₀ · i) / (2π · d)</div>
          <p>
            μ₀ = 4π · 10⁻⁷ T·m/A (permeabilidade do vácuo). i: corrente em A.
            d: distância do ponto ao fio (m).
          </p>
        </div>

        <div className="math-block">
          <h3>Regra da mão direita (fio)</h3>
          <p>
            Polegar no sentido da corrente; os dedos curvados indicam o
            sentido das linhas de B⃗ ao redor do fio.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Espira Circular</span>

        <h2>6. Campo no Centro de uma Espira</h2>

        <p>
          Espira é um fio dobrado em forma de circunferência. No seu centro,
          o campo magnético é perpendicular ao plano da espira.
        </p>

        <div className="math-block">
          <h3>Módulo no centro</h3>
          <div className="math-formula">B = (μ₀ · i) / (2R)</div>
          <p>R: raio da espira.</p>
        </div>

        <div className="math-block">
          <h3>Para N espiras (bobina chata)</h3>
          <div className="math-formula">B = (N · μ₀ · i) / (2R)</div>
        </div>

        <div className="lesson-highlight">
          <p>
            Use a regra da mão direita: dedos no sentido da corrente, polegar
            indica o lado norte da espira (sentido de B⃗).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Solenóide</span>

        <h2>7. Campo no Interior de um Solenóide</h2>

        <p>
          Solenóide é um fio enrolado em forma de hélice, com N espiras
          próximas umas das outras. No interior (longe das extremidades), o
          campo é praticamente uniforme.
        </p>

        <div className="math-block">
          <h3>Módulo no interior</h3>
          <div className="math-formula">B = μ₀ · n · i</div>
          <p>n = N / L (espiras por unidade de comprimento).</p>
        </div>

        <div className="math-block">
          <h3>Equivalência</h3>
          <div className="math-formula">B = μ₀ · (N/L) · i</div>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔔</span>
            <h3>Campainha</h3>
            <p>Solenóide aciona martelete.</p>
          </div>

          <div className="lesson-card">
            <span>🚪</span>
            <h3>Fechadura elétrica</h3>
            <p>Trinco puxado por solenóide.</p>
          </div>

          <div className="lesson-card">
            <span>🧲</span>
            <h3>Eletroímã</h3>
            <p>Solenóide com núcleo de ferro doce.</p>
          </div>

          <div className="lesson-card">
            <span>🚗</span>
            <h3>Motor de partida</h3>
            <p>Solenóide aciona engrenagem.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Visualização do Campo</span>
        <h2>8. Linhas de Campo e Regra da Mão Direita</h2>
        <p>
          Visualizar as linhas de campo magnético é essencial para determinar a
          direção e o sentido de B em cada configuração de corrente.
        </p>

        <svg viewBox="0 0 700 220" className="lesson-svg" aria-label="Linhas de campo magnético de um ímã de barra">
          {/* ímã de barra */}
          <rect x="260" y="80" width="180" height="60" rx="6" fill="#e0e7ff" stroke="#4338ca" strokeWidth="2" />
          <rect x="260" y="80" width="90" height="60" fill="#dbeafe" stroke="#4338ca" strokeWidth="1" />
          <text x="305" y="117" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1d4ed8">N</text>
          <text x="395" y="117" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#dc2626">S</text>
          {/* linhas de campo externas (arcos superiores) */}
          <path d="M 305 80 Q 350 20 395 80" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="0" />
          <path d="M 280 80 Q 350 0 420 80" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M 260 100 Q 200 60 260 120" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M 440 100 Q 500 60 440 120" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          {/* linhas de campo externas (arcos inferiores) */}
          <path d="M 305 140 Q 350 200 395 140" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M 280 140 Q 350 210 420 140" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          {/* setas indicando sentido N→S externo */}
          <polygon points="335,34 345,24 355,34" fill="#2563eb" />
          <text x="350" y="195" textAnchor="middle" fontSize="13" fill="#0f172a">Fora do ímã: linhas saem do N e entram no S</text>
          <text x="350" y="213" textAnchor="middle" fontSize="13" fill="#0f172a">Dentro do ímã: linhas vão de S para N (campo contínuo, fechado)</text>
        </svg>

        <svg viewBox="0 0 700 230" className="lesson-svg" aria-label="Campo magnético de um fio retilíneo — regra da mão direita">
          <defs>
            <marker id="arr43a" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
            </marker>
          </defs>
          {/* fio vertical */}
          <line x1="350" y1="20" x2="350" y2="210" stroke="#1e293b" strokeWidth="4" />
          <text x="350" y="15" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#dc2626">I ↑</text>
          {/* círculos de campo (anti-horário quando corrente sobe) */}
          <circle cx="350" cy="115" r="60" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="6 3" />
          <circle cx="350" cy="115" r="100" fill="none" stroke="#2563eb" strokeWidth="1" strokeDasharray="6 3" />
          <circle cx="350" cy="115" r="140" fill="none" stroke="#2563eb" strokeWidth="0.8" strokeDasharray="6 3" />
          {/* seta no círculo interno */}
          <polygon points="350,55 360,65 340,65" fill="#2563eb" />
          {/* rótulos */}
          <text x="420" y="62" textAnchor="start" fontSize="13" fill="#2563eb">B circunda o fio</text>
          <text x="420" y="80" textAnchor="start" fontSize="13" fill="#2563eb">B = μ₀·I / (2π·d)</text>
          <text x="350" y="220" textAnchor="middle" fontSize="13" fill="#0f172a">Polegar = sentido de I → dedos curvados = sentido de B</text>
          {/* distâncias */}
          <line x1="350" y1="115" x2="410" y2="115" stroke="#64748b" strokeWidth="1" strokeDasharray="4 2" />
          <text x="382" y="110" textAnchor="middle" fontSize="11" fill="#64748b">d</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Configuração</th>
              <th>Fórmula de B</th>
              <th>Variáveis</th>
              <th>Observação</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Fio reto longo</td><td>B = μ₀·I / (2π·d)</td><td>d = distância ao fio</td><td>Linhas circulares ao redor do fio</td></tr>
            <tr><td>Centro de espira circular</td><td>B = μ₀·I / (2R)</td><td>R = raio da espira</td><td>B perpendicular ao plano da espira</td></tr>
            <tr><td>Interior de solenóide</td><td>B = μ₀·n·I</td><td>n = N/L (espiras por metro)</td><td>Campo uniforme e paralelo ao eixo</td></tr>
          </tbody>
        </table>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Grandeza</th>
              <th>Símbolo</th>
              <th>Unidade SI</th>
              <th>Ordem de grandeza típica</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Indução magnética</td><td>B</td><td>Tesla (T)</td><td>Terra ≈ 50 μT; RM clínica ≈ 1,5 T</td></tr>
            <tr><td>Permeabilidade do vácuo</td><td>μ₀</td><td>T·m/A</td><td>4π×10⁻⁷ ≈ 1,26×10⁻⁶ T·m/A</td></tr>
            <tr><td>Corrente elétrica</td><td>I</td><td>Ampère (A)</td><td>Fio doméstico ≈ 1–20 A</td></tr>
            <tr><td>Número de espiras por metro</td><td>n</td><td>m⁻¹</td><td>Solenóide lab ≈ 500–2000 m⁻¹</td></tr>
          </tbody>
        </table>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Aplicação tecnológica</th>
              <th>Princípio magnético</th>
              <th>Configuração</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Alto-falante</td><td>Força sobre bobina em campo permanente</td><td>Solenóide + ímã permanente</td></tr>
            <tr><td>Ressonância Magnética (RM)</td><td>Campo intenso e uniforme</td><td>Solenóide supercondutор</td></tr>
            <tr><td>Bússola</td><td>Alinhamento com campo terrestre (B ≈ 50 μT)</td><td>Ímã de barra livre</td></tr>
            <tr><td>Motor elétrico</td><td>Força sobre condutor em campo</td><td>Espira giratória em campo de ímã</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios Resolvidos</span>

        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Polos magnéticos"
          statement={
            <p>
              Sobre os polos de um ímã, é correto afirmar:
            </p>
          }
          options={[
            { letter: "a", text: "Podem ser separados quebrando-se o ímã." },
            { letter: "b", text: "Polos iguais se atraem." },
            { letter: "c", text: "Polos opostos se atraem e iguais se repelem.", correct: true },
            { letter: "d", text: "Polo norte é monopolo isolado." },
          ]}
          resolution={
            <p>
              Pela regra fundamental do magnetismo, polos de mesmo nome se
              repelem e polos diferentes se atraem. Não existe monopolo
              magnético isolado.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="2. Campo magnético da Terra"
          statement={
            <p>
              A agulha de uma bússola aponta para o norte geográfico porque:
            </p>
          }
          options={[
            { letter: "a", text: "O polo norte geográfico é um polo norte magnético." },
            { letter: "b", text: "Próximo ao norte geográfico está um polo sul magnético da Terra.", correct: true },
            { letter: "c", text: "A Terra não tem magnetismo." },
            { letter: "d", text: "A gravidade alinha a agulha." },
          ]}
          resolution={
            <p>
              Como polos opostos se atraem, o norte da bússola é atraído pelo
              polo sul magnético da Terra, que fica próximo ao norte geográfico.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="3. Campo de um fio retilíneo"
          statement={
            <p>
              Um fio retilíneo longo é percorrido por uma corrente de 4 A.
              Calcule o módulo do campo magnético a 0,2 m do fio.
              Use μ₀ = 4π · 10⁻⁷ T·m/A.
            </p>
          }
          options={[
            { letter: "a", text: "2 · 10⁻⁶ T" },
            { letter: "b", text: "4 · 10⁻⁶ T", correct: true },
            { letter: "c", text: "8 · 10⁻⁶ T" },
            { letter: "d", text: "1 · 10⁻⁵ T" },
          ]}
          resolution={
            <>
              <div className="math-formula">B = (μ₀·i) / (2π·d)</div>
              <div className="math-formula">B = (4π·10⁻⁷ · 4) / (2π · 0,2)</div>
              <div className="math-formula">B = (16π·10⁻⁷) / (0,4π)</div>
              <div className="math-formula">B = 40 · 10⁻⁷ = 4 · 10⁻⁶ T</div>
            </>
          }
        />

        <Exercise
          level="Intermediário"
          title="4. Campo no centro de uma espira"
          statement={
            <p>
              Uma espira circular de raio 0,1 m é percorrida por uma corrente
              de 5 A. Calcule o campo no seu centro. Use μ₀ = 4π · 10⁻⁷ T·m/A.
            </p>
          }
          options={[
            { letter: "a", text: "π · 10⁻⁵ T", correct: true },
            { letter: "b", text: "2π · 10⁻⁵ T" },
            { letter: "c", text: "π · 10⁻⁶ T" },
            { letter: "d", text: "5π · 10⁻⁶ T" },
          ]}
          resolution={
            <>
              <div className="math-formula">B = (μ₀·i) / (2R)</div>
              <div className="math-formula">B = (4π·10⁻⁷ · 5) / (2 · 0,1)</div>
              <div className="math-formula">B = (20π·10⁻⁷) / 0,2 = π · 10⁻⁵ T</div>
            </>
          }
        />

        <Exercise
          level="Avançado"
          title="5. Solenóide"
          statement={
            <p>
              Um solenóide tem 500 espiras distribuídas em 25 cm e é
              percorrido por uma corrente de 2 A. Qual o campo magnético
              no seu interior? Use μ₀ = 4π · 10⁻⁷ T·m/A.
            </p>
          }
          options={[
            { letter: "a", text: "2π · 10⁻³ T" },
            { letter: "b", text: "1,6π · 10⁻³ T", correct: true },
            { letter: "c", text: "4π · 10⁻³ T" },
            { letter: "d", text: "8π · 10⁻³ T" },
          ]}
          resolution={
            <>
              <div className="math-formula">n = 500 / 0,25 = 2.000 esp/m</div>
              <div className="math-formula">B = μ₀ · n · i</div>
              <div className="math-formula">B = 4π·10⁻⁷ · 2.000 · 2</div>
              <div className="math-formula">B = 1,6π · 10⁻³ T</div>
            </>
          }
        />
      </section>
    </article>
  );
}
