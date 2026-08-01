"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap05Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 5</span>

          <h1>Introdução à Citologia: Teoria Celular, Procariontes × Eucariontes e Vírus</h1>

          <p>
            A célula é a unidade fundamental da vida — tudo o que somos é construído e
            regulado por elas. Neste capítulo você vai dominar a história do descobrimento
            da célula, os postulados da teoria celular, as diferenças essenciais entre
            células procariontes e eucariontes, a comparação entre células animais e vegetais,
            a teoria endossimbiótica, os três domínios da vida e o intrigante status
            biológico dos vírus. Esses temas somam dezenas de questões no ENEM e nos
            principais vestibulares brasileiros.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">História da Citologia</span>

        <h2>1. O Descobrimento da Célula</h2>

        <p>
          A citologia (do grego <em>kytos</em> = cavidade, <em>logos</em> = estudo) só se
          tornou possível com o desenvolvimento do <strong>microscópio óptico</strong> no século
          XVII. Antes disso, os seres vivos eram estudados apenas externamente, e ninguém
          imaginava que toda a vida se reduzia a compartimentos microscópicos. Os marcos
          históricos que levaram à teoria celular se estenderam por quase duzentos anos:
        </p>

        <div className="lesson-highlight">
          <h3>Linha do tempo da citologia</h3>
          <ol>
            <li>
              <strong>Robert Hooke (1665):</strong> ao observar cortes finos de cortiça
              com seu microscópio artesanal, descreveu pequenos compartimentos vazios e os
              chamou de <em>cellulae</em> (do latim, "pequenos quartos"). Na cortiça, as
              células estavam mortas; Hooke enxergou apenas as paredes celulares.
            </li>
            <li>
              <strong>Anton van Leeuwenhoek (1674):</strong> aprimorou as lentes e
              descreveu os primeiros <em>microrganismos vivos</em> — protozoários e
              bactérias — a que chamou de "animálculos". Abriu a porta para a
              microbiologia.
            </li>
            <li>
              <strong>Matthias Schleiden (1838):</strong> botânico alemão, concluiu que
              todos os <em>vegetais</em> são formados por células.
            </li>
            <li>
              <strong>Theodor Schwann (1839):</strong> zoólogo, estendeu a conclusão para
              os <em>animais</em>, unificando plantas e animais sob a mesma teoria.
            </li>
            <li>
              <strong>Rudolf Virchow (1855):</strong> acrescentou o terceiro postulado —
              <em> Omnis cellula ex cellula</em> ("toda célula provém de outra célula
              preexistente") —, sepultando definitivamente a ideia de geração espontânea
              no nível celular.
            </li>
          </ol>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 780 100" width="780" height="100" aria-label="Linha do tempo da teoria celular">
            <line x1={40} y1={50} x2={740} y2={50} stroke="#6366f1" strokeWidth={2} />
            {[
              { x: 80,  year: "1665", name: "Hooke",      c: "#6366f1" },
              { x: 220, year: "1674", name: "Leeuwenhoek", c: "#0ea5e9" },
              { x: 380, year: "1838", name: "Schleiden",   c: "#16a34a" },
              { x: 520, year: "1839", name: "Schwann",     c: "#f59e0b" },
              { x: 660, year: "1855", name: "Virchow",     c: "#ef4444" },
            ].map((s) => (
              <g key={s.name}>
                <circle cx={s.x} cy={50} r={10} fill={s.c} opacity={0.85} />
                <text x={s.x} y={30} textAnchor="middle" fontSize={11} fontWeight={700} fill={s.c}>{s.year}</text>
                <text x={s.x} y={80} textAnchor="middle" fontSize={11} fill="#374151">{s.name}</text>
              </g>
            ))}
          </svg>
          <figcaption>Principais personagens que construíram a teoria celular entre 1665 e 1855.</figcaption>
        </figure>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Teoria Celular</span>

        <h2>2. Os Três Postulados da Teoria Celular</h2>

        <p>
          A <strong>teoria celular</strong> é um dos pilares da Biologia moderna.
          Ela organiza toda a compreensão sobre a estrutura dos seres vivos em três
          enunciados fundamentais, que se complementam e ainda guiam pesquisas atuais:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧱</span>
            <h3>1º Postulado</h3>
            <p>
              Todos os seres vivos são compostos por <strong>uma ou mais
              células</strong>. Desde uma bactéria unicelular até uma baleiaazul
              com trilhões de células — a célula é o denominador comum.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚙️</span>
            <h3>2º Postulado</h3>
            <p>
              A célula é a <strong>unidade morfológica e funcional</strong> dos
              seres vivos: é a menor estrutura capaz de realizar todas as funções
              essenciais da vida de forma autônoma.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔁</span>
            <h3>3º Postulado (Virchow)</h3>
            <p>
              Toda célula origina-se de outra célula preexistente (<em>Omnis
              cellula ex cellula</em>). Não há geração espontânea de células;
              toda divisão parte de uma célula-mãe.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Exceção notável — os vírus</h3>
          <p>
            Os <strong>vírus</strong> não obedecem ao 1º postulado: são
            <strong> acelulares</strong> (não possuem estrutura celular). Por essa
            razão, muitos biólogos os colocam em uma categoria à parte — nem
            verdadeiros seres vivos, nem matéria inerte. Esse debate é clássico
            em questões de ENEM e vestibulares.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Microscopia e Escalas</span>

        <h2>3. Ferramentas da Citologia: Microscópios e Unidades</h2>

        <p>
          A citologia avançou em paralelo com a tecnologia dos microscópios. O
          <strong> microscópio óptico</strong> usa luz visível e permite ampliar
          objetos até cerca de <strong>1 500×</strong>, sendo suficiente para
          visualizar células e tecidos. O <strong>microscópio eletrônico</strong>
          usa feixes de elétrons e alcança amplificações de até{" "}
          <strong>1 000 000×</strong>, revelando organelas e vírus em detalhes
          nanométricos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Óptico (MO)</h3>
            <p>Luz visível. Até ~1 500×. Visualiza células vivas, tecidos e microrganismos grandes (bactérias, protozoários).</p>
          </div>
          <div className="lesson-card">
            <span>📡</span>
            <h3>Eletrônico de transmissão (MET)</h3>
            <p>Elétrons atravessam a amostra. Até 1 000 000×. Detalha organelas internas e vírus.</p>
          </div>
          <div className="lesson-card">
            <span>🌐</span>
            <h3>Eletrônico de varredura (MEV)</h3>
            <p>Elétrons varrem a superfície. Gera imagens 3D da topografia da célula ou do vírus.</p>
          </div>
        </div>

        <div className="math-block">
          <h3>Escala de tamanhos — referências essenciais</h3>
          <ul>
            <li>1 milímetro (mm) = 10⁻³ m — visível a olho nu</li>
            <li>1 micrômetro (μm) = 10⁻⁶ m — requer microscópio óptico</li>
            <li>1 nanômetro (nm) = 10⁻⁹ m — requer microscópio eletrônico</li>
          </ul>
          <p>
            <strong>Referências práticas:</strong> bactéria típica ≈ 1–5 μm; célula animal
            ≈ 10–30 μm; célula vegetal ≈ 10–100 μm; vírus ≈ 20–300 nm.
          </p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 120" width="700" height="120" aria-label="Comparação de tamanhos entre vírus, bactéria e célula eucarionte">
            {/* Régua */}
            <line x1={40} y1={90} x2={660} y2={90} stroke="#9ca3af" strokeWidth={1.5} />
            {/* Vírus — 20 nm = largura 12 */}
            <rect x={60} y={60} width={12} height={28} rx={4} fill="#ef4444" opacity={0.8} />
            <text x={66} y={50} textAnchor="middle" fontSize={10} fill="#ef4444" fontWeight={700}>vírus</text>
            <text x={66} y={110} textAnchor="middle" fontSize={9} fill="#6b7280">~20–300 nm</text>
            {/* Bactéria — 1-5 µm = largura 60 */}
            <rect x={140} y={40} width={60} height={48} rx={6} fill="#f59e0b" opacity={0.8} />
            <text x={170} y={32} textAnchor="middle" fontSize={10} fill="#b45309" fontWeight={700}>bactéria</text>
            <text x={170} y={110} textAnchor="middle" fontSize={9} fill="#6b7280">~1–5 μm</text>
            {/* Célula animal — 20 µm = largura 200 */}
            <ellipse cx={430} cy={64} rx={160} ry={28} fill="#6366f1" opacity={0.18} stroke="#6366f1" strokeWidth={1.5} />
            <text x={430} y={57} textAnchor="middle" fontSize={11} fontWeight={700} fill="#4338ca">célula eucarionte</text>
            <text x={430} y={110} textAnchor="middle" fontSize={9} fill="#6b7280">~10–100 μm</text>
          </svg>
          <figcaption>Comparação esquemática (não proporcional) do tamanho de vírus, bactéria e célula eucarionte.</figcaption>
        </figure>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Procariontes</span>

        <h2>4. Células Procariontes — Estrutura e Características</h2>

        <p>
          O termo <strong>procarionte</strong> vem do grego <em>pro</em> = antes e{" "}
          <em>karyon</em> = núcleo: são organismos que <em>não possuem núcleo
          organizado</em>. O material genético — uma molécula de DNA circular — fica
          disperso no citoplasma em uma região chamada <strong>nucleoide</strong>,
          sem membrana separando-o do restante da célula. Apesar de sua simplicidade
          estrutural, os procariontes são os organismos mais numerosos e
          metabolicamente diversificados do planeta.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 480 220" width="480" height="220" aria-label="Esquema de célula procarionte">
            {/* Corpo da célula */}
            <ellipse cx={240} cy={110} rx={195} ry={80} fill="#fef9c3" stroke="#ca8a04" strokeWidth={2.5} />
            {/* Parede celular */}
            <ellipse cx={240} cy={110} rx={205} ry={90} fill="none" stroke="#92400e" strokeWidth={4} strokeDasharray="6 3" />
            {/* Nucleoide */}
            <ellipse cx={200} cy={105} rx={55} ry={38} fill="#fde68a" stroke="#b45309" strokeWidth={1.8} />
            <text x={200} y={108} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">nucleoide</text>
            <text x={200} y={122} textAnchor="middle" fontSize={10} fill="#92400e">(DNA circular)</text>
            {/* Ribossomos */}
            {[300, 330, 360, 310, 345, 280, 320, 350].map((cx, i) => (
              <circle key={i} cx={cx} cy={90 + (i % 3) * 18} r={5} fill="#16a34a" opacity={0.7} />
            ))}
            <text x={360} y={78} fontSize={10} fill="#15803d" fontWeight={700}>ribossomos 70S</text>
            {/* Flagelo */}
            <path d="M 435 70 Q 470 40 480 10" fill="none" stroke="#6b7280" strokeWidth={2.5} strokeLinecap="round" />
            <text x={460} y={8} fontSize={10} fill="#4b5563" fontWeight={600}>flagelo</text>
            {/* Fímbrias */}
            {[0, 1, 2, 3].map((i) => (
              <line key={i} x1={80 + i * 30} y1={28} x2={80 + i * 30} y2={8} stroke="#0ea5e9" strokeWidth={1.8} />
            ))}
            <text x={95} y={6} textAnchor="middle" fontSize={10} fill="#0369a1" fontWeight={600}>fímbrias</text>
            {/* Plasmídeo */}
            <ellipse cx={310} cy={140} rx={18} ry={10} fill="none" stroke="#a855f7" strokeWidth={2} />
            <text x={338} y={144} fontSize={10} fill="#7e22ce" fontWeight={600}>plasmídeo</text>
            {/* Membrana */}
            <text x={100} y={195} fontSize={10} fill="#92400e">parede celular (peptidoglicano)</text>
          </svg>
          <figcaption>Esquema simplificado de célula procarionte: sem núcleo organizado, DNA circular no nucleoide, ribossomos 70S, plasmídeos, flagelo e fímbrias.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Estruturas exclusivas ou típicas dos procariontes</h3>
          <ul>
            <li><strong>Nucleoide:</strong> região do citoplasma onde o DNA circular fica condensado, sem membrana nuclear;</li>
            <li><strong>Ribossomos 70S:</strong> menores que os eucarióticos (80S) — alvo de antibióticos específicos;</li>
            <li><strong>Parede celular de peptidoglicano</strong> (nas bactérias); as arqueias têm paredes diferentes (pseudomureína ou S-layer);</li>
            <li><strong>Plasmídeos:</strong> pequenas moléculas de DNA circular extracromossômico; veiculam genes de resistência a antibióticos;</li>
            <li><strong>Flagelo bacteriano:</strong> diferente do flagelo eucarionte (não tem estrutura 9+2), movido por gradiente de prótons;</li>
            <li><strong>Fímbrias e pili:</strong> filamentos de adesão à superfícies e outras células (inclusive transferência de DNA no conjugação).</li>
          </ul>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🦠</span>
            <h3>Bacteria</h3>
            <p>Parede de peptidoglicano; diversidade metabólica enorme; muitas espécies patogênicas (E. coli, Mycobacterium).</p>
          </div>
          <div className="lesson-card">
            <span>♨️</span>
            <h3>Archaea</h3>
            <p>Sem peptidoglicano; vivem em ambientes extremos (vulcões, salinas, ambientes anaeróbios). Não causam doenças humanas.</p>
          </div>
          <div className="lesson-card">
            <span>☀️</span>
            <h3>Cianobactérias</h3>
            <p>Procariontes fotossintéticos — responsáveis pelo Grande Evento de Oxigenação (~2,4 bilhões de anos atrás).</p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Eucariontes</span>

        <h2>5. Células Eucariontes — Núcleo e Organelas</h2>

        <p>
          As células <strong>eucariontes</strong> (<em>eu</em> = verdadeiro,{" "}
          <em>karyon</em> = núcleo) se distinguem por possuírem um <strong>núcleo
          delimitado por dupla membrana</strong> (carioteca), onde o DNA linear é
          organizado em cromossomos associados a proteínas histonas. Além do núcleo,
          o citoplasma eucarionte é repleto de <strong>organelas membranosas</strong>
          com funções altamente especializadas, o que permite uma divisão do trabalho
          bioquímico muito mais elaborada do que nos procariontes.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 280" width="720" height="280" aria-label="Comparação célula animal e célula vegetal">
            {/* ===== CÉLULA ANIMAL ===== */}
            <ellipse cx={175} cy={140} rx={155} ry={120} fill="#eff6ff" stroke="#3b82f6" strokeWidth={2} />
            {/* Núcleo */}
            <ellipse cx={165} cy={130} rx={48} ry={38} fill="#dbeafe" stroke="#2563eb" strokeWidth={2} />
            <ellipse cx={165} cy={130} rx={18} ry={14} fill="#93c5fd" />
            <text x={165} y={133} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1e40af">núcleo</text>
            {/* Mitocôndria */}
            <ellipse cx={90} cy={100} rx={22} ry={11} fill="#fef3c7" stroke="#d97706" strokeWidth={1.5} />
            <text x={90} y={90} textAnchor="middle" fontSize={8} fill="#92400e">mitocôndria</text>
            {/* RE rugoso */}
            <path d="M 215 100 Q 240 110 215 125 Q 240 135 215 150" fill="none" stroke="#7c3aed" strokeWidth={2} />
            <text x={248} y={128} fontSize={8} fill="#5b21b6">RE rugoso</text>
            {/* Golgi */}
            <path d="M 100 170 Q 130 162 130 175 Q 130 188 100 180" fill="none" stroke="#059669" strokeWidth={2} />
            <text x={80} y={196} fontSize={8} fill="#065f46">Golgi</text>
            {/* Centríolo */}
            <rect x={225} y={180} width={16} height={8} rx={2} fill="#f87171" />
            <text x={233} y={200} textAnchor="middle" fontSize={8} fill="#b91c1c">centríolo</text>
            {/* Lisossomo */}
            <circle cx={140} cy={200} r={10} fill="#fca5a5" stroke="#dc2626" strokeWidth={1} />
            <text x={140} y={222} textAnchor="middle" fontSize={8} fill="#7f1d1d">lisossomo</text>
            {/* Título */}
            <text x={175} y={18} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e40af">Célula Animal</text>

            {/* Separador */}
            <line x1={360} y1={10} x2={360} y2={270} stroke="#e5e7eb" strokeWidth={1.5} strokeDasharray="6 4" />

            {/* ===== CÉLULA VEGETAL ===== */}
            <rect x={385} y={25} width={310} height={230} rx={18} fill="#f0fdf4" stroke="#16a34a" strokeWidth={2.5} />
            {/* Parede celular */}
            <rect x={378} y={18} width={324} height={244} rx={22} fill="none" stroke="#4d7c0f" strokeWidth={4} strokeDasharray="8 3" />
            <text x={540} y={272} textAnchor="middle" fontSize={8} fill="#3f6212">parede celular (celulose)</text>
            {/* Núcleo */}
            <ellipse cx={510} cy={120} rx={44} ry={36} fill="#dcfce7" stroke="#15803d" strokeWidth={2} />
            <ellipse cx={510} cy={120} rx={16} ry={12} fill="#86efac" />
            <text x={510} y={123} textAnchor="middle" fontSize={9} fontWeight={700} fill="#166534">núcleo</text>
            {/* Cloroplastos */}
            <ellipse cx={440} cy={80} rx={22} ry={12} fill="#bbf7d0" stroke="#16a34a" strokeWidth={1.5} />
            <ellipse cx={640} cy={160} rx={22} ry={12} fill="#bbf7d0" stroke="#16a34a" strokeWidth={1.5} />
            <text x={440} y={67} textAnchor="middle" fontSize={8} fill="#166534">cloroplasto</text>
            {/* Vacúolo central */}
            <ellipse cx={570} cy={170} rx={70} ry={55} fill="#e0f2fe" stroke="#0369a1" strokeWidth={1.5} />
            <text x={570} y={172} textAnchor="middle" fontSize={9} fontWeight={700} fill="#0c4a6e">vacúolo</text>
            <text x={570} y={185} textAnchor="middle" fontSize={8} fill="#075985">central</text>
            {/* Mitocôndria */}
            <ellipse cx={450} cy={185} rx={18} ry={9} fill="#fef3c7" stroke="#d97706" strokeWidth={1.5} />
            <text x={450} y={174} textAnchor="middle" fontSize={8} fill="#92400e">mitocôndria</text>
            {/* Título */}
            <text x={540} y={14} textAnchor="middle" fontSize={13} fontWeight={700} fill="#166534">Célula Vegetal</text>
          </svg>
          <figcaption>Comparação esquemática entre célula animal (esquerda) e célula vegetal (direita), destacando estruturas exclusivas de cada tipo.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Estrutura / Característica</th>
                <th>Célula Animal</th>
                <th>Célula Vegetal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Parede celular</td>
                <td>Ausente</td>
                <td>Presente (celulose)</td>
              </tr>
              <tr>
                <td>Cloroplastos</td>
                <td>Ausente</td>
                <td>Presente</td>
              </tr>
              <tr>
                <td>Vacúolo central</td>
                <td>Vacúolos pequenos e transitórios</td>
                <td>Grande vacúolo central (turgor)</td>
              </tr>
              <tr>
                <td>Centríolos</td>
                <td>Presente (divisão celular)</td>
                <td>Ausente (na maioria)</td>
              </tr>
              <tr>
                <td>Lisossomos</td>
                <td>Abundantes</td>
                <td>Raros (vacúolo faz papel semelhante)</td>
              </tr>
              <tr>
                <td>Mitocôndrias</td>
                <td>Presente</td>
                <td>Presente</td>
              </tr>
              <tr>
                <td>Núcleo com carioteca</td>
                <td>Presente</td>
                <td>Presente</td>
              </tr>
              <tr>
                <td>Ribossomos 80S</td>
                <td>Presente</td>
                <td>Presente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Comparação Geral</span>

        <h2>6. Procariontes × Eucariontes — Tabela Completa</h2>

        <p>
          Este é o comparativo mais cobrado em provas. Domine cada linha desta
          tabela — diferenças como o tamanho dos ribossomos (70S vs. 80S) e a
          presença ou ausência de núcleo organizado são recorrentes em questões
          de múltipla escolha e dissertativas.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Procarionte</th>
                <th>Eucarionte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Núcleo organizado (carioteca)</td>
                <td>Não — DNA no nucleoide</td>
                <td>Sim — delimitado por dupla membrana</td>
              </tr>
              <tr>
                <td>Organelas membranosas</td>
                <td>Ausentes</td>
                <td>Presentes (mitocôndria, RE, Golgi…)</td>
              </tr>
              <tr>
                <td>Tamanho típico</td>
                <td>1–5 μm</td>
                <td>10–100 μm</td>
              </tr>
              <tr>
                <td>DNA</td>
                <td>Circular, sem histonas (maioria)</td>
                <td>Linear, associado a histonas (cromossomos)</td>
              </tr>
              <tr>
                <td>Ribossomos</td>
                <td>70S (50S + 30S)</td>
                <td>80S (60S + 40S) — mitocôndria tem 70S</td>
              </tr>
              <tr>
                <td>Parede celular</td>
                <td>Peptidoglicano (bacteria) / pseudomureína (archaea)</td>
                <td>Celulose (plantas), quitina (fungos), ausente (animais)</td>
              </tr>
              <tr>
                <td>Divisão celular</td>
                <td>Divisão binária (fissão)</td>
                <td>Mitose e meiose</td>
              </tr>
              <tr>
                <td>Plasmídeos</td>
                <td>Comuns</td>
                <td>Raros</td>
              </tr>
              <tr>
                <td>Exemplos</td>
                <td>Bactérias e arqueias</td>
                <td>Protistas, fungos, plantas, animais</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Dica de prova — ribossomos e antibióticos</h3>
          <p>
            A diferença entre os ribossomos 70S (procariontes) e 80S (eucariontes)
            é a base de ação de antibióticos como <strong>estreptomicina</strong>,
            <strong> tetraciclina</strong> e <strong>eritromicina</strong>: eles
            bloqueiam os ribossomos 70S das bactérias sem afetar (em tese) os
            ribossomos 80S das nossas células. Por isso, antibióticos{" "}
            <strong>não agem contra vírus</strong> — vírus não têm ribossomos.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Teoria Endossimbiótica</span>

        <h2>7. A Origem das Organelas — Teoria Endossimbiótica</h2>

        <p>
          Uma das hipóteses mais elegantes da Biologia, proposta e defendida por{" "}
          <strong>Lynn Margulis</strong> na década de 1960, explica como as organelas
          mais complexas surgiram: ancestrais de bactérias aeróbicas foram
          <strong> englobadas</strong> (endocitadas) por células anaeróbias maiores e, ao
          invés de serem digeridas, estabeleceram uma relação simbiótica que gerou as
          <strong> mitocôndrias</strong>. Em um segundo evento semelhante, cianobactérias
          englobadas deram origem aos <strong>cloroplastos</strong>.
        </p>

        <div className="lesson-highlight">
          <h3>Evidências que sustentam a teoria endossimbiótica</h3>
          <ul>
            <li>Mitocôndrias e cloroplastos têm <strong>DNA circular próprio</strong>, como bactérias;</li>
            <li>Possuem <strong>ribossomos 70S</strong> (iguais aos bacterianos, não 80S);</li>
            <li>São delimitados por <strong>dupla membrana</strong> — a interna corresponde à membrana original da bactéria endossimbionte;</li>
            <li>Se reproduzem por um processo semelhante à <strong>divisão binária</strong>, independente da divisão do núcleo;</li>
            <li>A membrana interna da mitocôndria lembra a membrana de bactérias aeróbias (rica em cardiolipina).</li>
          </ul>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔋</span>
            <h3>Mitocôndria</h3>
            <p>
              Originada de uma <strong>alfa-proteobactéria</strong> aeróbia. Realiza
              a respiração celular aeróbica, produzindo ATP.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Cloroplasto</h3>
            <p>
              Originado de uma <strong>cianobactéria</strong>. Realiza a
              fotossíntese nas células vegetais e de algas.
            </p>
          </div>
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Consequência evolutiva</h3>
            <p>
              A endossimbiose permitiu o surgimento de células eucariontes
              complexas — base de todos os organismos multicelulares modernos.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Os Três Domínios</span>

        <h2>8. Classificação: Os Três Domínios da Vida</h2>

        <p>
          Com base em análises comparativas de sequências de RNA ribossômico 16S/18S,
          <strong> Carl Woese</strong> e George Fox propuseram em 1977 (revisado em
          1990) que toda a vida celular se divide em <strong>três domínios</strong>:
          Bacteria, Archaea e Eukarya. Os dois primeiros são procariontes; apenas o
          terceiro inclui eucariontes.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Domínio</th>
                <th>Tipo celular</th>
                <th>Exemplos</th>
                <th>Parede celular</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Bacteria</strong></td>
                <td>Procarionte</td>
                <td>E. coli, Streptococcus, cianobactérias</td>
                <td>Peptidoglicano</td>
              </tr>
              <tr>
                <td><strong>Archaea</strong></td>
                <td>Procarionte</td>
                <td>Methanobacterium, Halobacterium</td>
                <td>Pseudomureína / S-layer (sem peptidoglicano)</td>
              </tr>
              <tr>
                <td><strong>Eukarya</strong></td>
                <td>Eucarionte</td>
                <td>Protistas, fungos, plantas, animais</td>
                <td>Variável (celulose, quitina, ausente)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            Filogeneticamente, as <strong>Archaea são mais próximas dos Eukarya</strong>
            do que das Bacteria — compartilham enzimas de replicação e transcrição mais
            semelhantes. Porém, morfologicamente, Archaea e Bacteria se parecem muito
            (ambas são procariontes). Essa distinção é cobrada em questões de
            classificação biológica.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Vírus</span>

        <h2>9. Os Vírus — Estrutura, Ciclos e Status Biológico</h2>

        <p>
          Os vírus são entidades <strong>acelulares</strong>: não possuem células,
          não realizam metabolismo próprio e só se "comportam" como seres vivos dentro
          de uma célula hospedeira. São os menores agentes infecciosos conhecidos
          (20–300 nm), visíveis apenas ao microscópio eletrônico. Cada partícula viral
          — o <strong>vírion</strong> — é composta por:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Ácido nucleico</h3>
            <p>DNA ou RNA (nunca os dois), podendo ser fita simples ou dupla, linear ou circular.</p>
          </div>
          <div className="lesson-card">
            <span>🛡️</span>
            <h3>Capsídeo</h3>
            <p>Cápsula proteica formada por unidades chamadas capsômeros; protege o ácido nucleico e determina a forma do vírus (icosaédrica, helicoidal, complexa).</p>
          </div>
          <div className="lesson-card">
            <span>🫧</span>
            <h3>Envelope (alguns)</h3>
            <p>Camada lipoproteica derivada da membrana da célula hospedeira; presente em HIV, influenza, SARS-CoV-2. Ausente em poliovírus, adenovírus.</p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 520 200" width="520" height="200" aria-label="Estrutura de um vírus com envelope (tipo coronavírus)">
            {/* Envelope */}
            <circle cx={200} cy={100} r={80} fill="#fef9c3" stroke="#d97706" strokeWidth={2.5} />
            {/* Espículas */}
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const x1 = 200 + 80 * Math.cos(rad);
              const y1 = 100 + 80 * Math.sin(rad);
              const x2 = 200 + 100 * Math.cos(rad);
              const y2 = 100 + 100 * Math.sin(rad);
              return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#b45309" strokeWidth={3} strokeLinecap="round" />;
            })}
            {/* Capsídeo */}
            <circle cx={200} cy={100} r={55} fill="#fee2e2" stroke="#ef4444" strokeWidth={2} />
            {/* RNA */}
            <path d="M 165 85 Q 185 105 175 125 Q 195 145 215 125 Q 225 105 210 85" fill="none" stroke="#7c3aed" strokeWidth={2.5} strokeLinecap="round" />
            <text x={200} y={103} textAnchor="middle" fontSize={10} fontWeight={700} fill="#5b21b6">RNA</text>
            {/* Legendas */}
            <text x={320} y={55} fontSize={11} fontWeight={700} fill="#b45309">espículas (proteínas)</text>
            <line x1={300} y1={52} x2={270} y2={42} stroke="#b45309" strokeWidth={1} />
            <text x={330} y={90} fontSize={11} fontWeight={700} fill="#d97706">envelope lipoproteico</text>
            <line x1={318} y1={88} x2={280} y2={82} stroke="#d97706" strokeWidth={1} />
            <text x={330} y={120} fontSize={11} fontWeight={700} fill="#dc2626">capsídeo</text>
            <line x1={320} y1={118} x2={255} y2={110} stroke="#dc2626" strokeWidth={1} />
            <text x={330} y={148} fontSize={11} fontWeight={700} fill="#7c3aed">ácido nucleico</text>
            <line x1={318} y1={146} x2={220} y2={130} stroke="#7c3aed" strokeWidth={1} />
          </svg>
          <figcaption>Estrutura esquemática de um vírus envelopado (modelo coronavírus): espículas de glicoproteínas, envelope lipoproteico, capsídeo proteico e RNA.</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Ciclos de replicação viral</h3>
          <p>
            Os vírus seguem dois ciclos principais ao infectar uma célula hospedeira:
          </p>
          <ul>
            <li>
              <strong>Ciclo lítico:</strong> o vírus injeta seu material genético, usa a
              maquinaria da célula para produzir novos vírions, e a célula é
              <strong> lisada</strong> (destruída) na liberação das novas partículas.
              Exemplo: bacteriófagos T4, influenza em células epiteliais.
            </li>
            <li>
              <strong>Ciclo lisogênico:</strong> o DNA viral se integra ao cromossomo da
              célula hospedeira (como um <strong>pró-fago</strong> ou <strong>pró-vírus</strong>)
              e é replicado junto com o genoma do hospedeiro por várias gerações, sem
              destruí-la imediatamente. Pode ser reativado posteriormente. Exemplo: HIV
              (como pró-vírus), herpes simples, bacteriófago lambda.
            </li>
          </ul>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🤧</span>
            <h3>Gripe / COVID-19</h3>
            <p>Influenza e SARS-CoV-2 — vírus de RNA fita simples com envelope. Mutação rápida dificulta vacinação duradoura.</p>
          </div>
          <div className="lesson-card">
            <span>🩺</span>
            <h3>AIDS</h3>
            <p>HIV — retrovírus (RNA). Usa enzima transcriptase reversa para converter RNA em DNA e se integrar ao genoma do hospedeiro.</p>
          </div>
          <div className="lesson-card">
            <span>🦟</span>
            <h3>Dengue / Zika</h3>
            <p>Flavivírus de RNA; transmitidos pelo Aedes aegypti. Zika associada a microcefalia neonatal.</p>
          </div>
          <div className="lesson-card">
            <span>💉</span>
            <h3>Sarampo / Caxumba</h3>
            <p>Prevenção pela vacina tríplice viral (MMR). Erradicação do sarampo depende de cobertura vacinal ≥ 95%.</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Vírus × Antibióticos</h3>
            <p>Antibióticos NÃO agem contra vírus. Antivirais (ex.: oseltamivir, remdesivir) inibem enzimas virais específicas.</p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Retrovírus</h3>
            <p>Transcriptase reversa converte RNA → DNA. Base da tecnologia de vetores retrovirais usados em terapia gênica.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Os vírus são seres vivos?</h3>
          <p>
            O debate sobre o status biológico dos vírus é clássico em vestibulares.
            A favor de os considerarmos vivos: possuem <strong>material genético</strong>,
            sofrem <strong>mutação</strong> e evoluem por seleção natural. Contra: são
            acelulares, sem metabolismo próprio, e fora de um hospedeiro se comportam
            como moléculas inertes. O consenso atual é tratá-los como{" "}
            <strong>parasitas intracelulares obrigatórios</strong>, numa categoria
            limítrofe entre o vivo e o não vivo.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — Teoria Celular, Procariontes, Eucariontes e Vírus</h2>

        <Exercise
          level="Básico"
          title="1. Postulado de Virchow"
          statement={
            <p>
              "Toda célula provém de outra célula preexistente" é o enunciado do
              terceiro postulado da teoria celular. Esse postulado foi formulado por:
            </p>
          }
          options={[
            { letter: "a", text: "Robert Hooke, ao observar células mortas na cortiça em 1665" },
            { letter: "b", text: "Schleiden e Schwann, ao generalizar a teoria para plantas e animais" },
            { letter: "c", text: "Rudolf Virchow, com a frase Omnis cellula ex cellula, em 1855", correct: true },
            { letter: "d", text: "Anton van Leeuwenhoek, ao descrever os primeiros microrganismos vivos" },
          ]}
          resolution={
            <p>
              Rudolf Virchow completou a teoria celular em 1855 com o terceiro
              postulado: <em>Omnis cellula ex cellula</em> ("toda célula vem de outra
              célula"). Hooke cunhou o termo "célula", Schleiden e Schwann unificaram
              plantas e animais, e Leeuwenhoek descreveu microrganismos vivos — cada
              um com seu papel histórico distinto.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Procariontes × Eucariontes"
          statement={
            <p>
              Analise as afirmações sobre diferenças entre células procariontes e
              eucariontes e indique a alternativa <strong>incorreta</strong>:
            </p>
          }
          options={[
            { letter: "a", text: "Células procariontes não possuem membrana nuclear; o DNA fica no nucleoide" },
            { letter: "b", text: "Eucariontes possuem ribossomos 80S no citoplasma, enquanto procariontes têm ribossomos 70S" },
            { letter: "c", text: "Mitocôndrias de células eucariontes também possuem ribossomos 70S, evidenciando origem endossimbiótica" },
            { letter: "d", text: "Bactérias possuem organelas membranosas como o complexo de Golgi, diferenciando-as das arqueias", correct: true },
          ]}
          resolution={
            <p>
              A afirmação incorreta é a letra D: bactérias (e procariontes em geral)
              <strong> não possuem organelas membranosas</strong> como o complexo de
              Golgi, o retículo endoplasmático ou lisossomos — essas são
              características exclusivas dos eucariontes. As demais afirmações são
              corretas: nucleoide sem carioteca (A), diferença no tamanho dos
              ribossomos (B) e ribossomos 70S nas mitocôndrias (C, evidência da
              teoria endossimbiótica).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Teoria endossimbiótica"
          statement={
            <p>
              A teoria endossimbiótica, proposta por Lynn Margulis, explica a origem
              de certas organelas eucariontes. Quais características de mitocôndrias
              e cloroplastos <strong>sustentam</strong> essa teoria?
            </p>
          }
          options={[
            { letter: "a", text: "Possuem DNA linear associado a histonas, semelhante ao núcleo eucarionte" },
            { letter: "b", text: "São delimitados por membrana simples, como as demais organelas do sistema de endomembranas" },
            {
              letter: "c",
              text: "Têm DNA circular próprio, ribossomos 70S e se reproduzem de forma semi-autônoma por divisão binária",
              correct: true,
            },
            { letter: "d", text: "Não produzem suas próprias proteínas, dependendo inteiramente dos ribossomos citosólicos 80S" },
          ]}
          resolution={
            <p>
              As três principais evidências que sustentam a teoria endossimbiótica são:
              (1) DNA <strong>circular</strong> próprio — como em bactérias, não linear
              como o DNA nuclear; (2) ribossomos <strong>70S</strong>, idênticos aos
              bacterianos, não 80S como os citosólicos eucariontes; (3) dupla membrana,
              sendo a interna derivada da membrana original da bactéria endossimbionte;
              e (4) reprodução por processo semelhante à divisão binária, independente
              da mitose nuclear.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Resistência a antibióticos (contexto atual)"
          statement={
            <p>
              Uma pesquisadora estuda cepas de <em>Staphylococcus aureus</em>
              resistentes à meticilina (MRSA). Ela observa que essas bactérias
              carregam um gene de resistência localizado em um plasmídeo, que pode
              ser transferido para outras bactérias por conjugação. Com base nisso,
              é correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "O gene de resistência está armazenado em organelas membranosas da bactéria, como mitocôndrias" },
            {
              letter: "b",
              text: "O plasmídeo é uma molécula de DNA circular extracromossômico, típica de procariontes, que pode ser transferida horizontalmente entre células",
              correct: true,
            },
            { letter: "c", text: "A resistência só poderia ser transmitida verticalmente, de célula-mãe para células-filhas, por mitose" },
            { letter: "d", text: "Por ser um procarionte, o S. aureus não pode realizar trocas de material genético com outras bactérias" },
          ]}
          resolution={
            <p>
              Plasmídeos são <strong>moléculas de DNA circular extracromossômicas</strong>,
              características de procariontes (embora raros em eucariontes), que
              conferem características como resistência a antibióticos. A
              <strong> transferência horizontal de genes</strong> via conjugação
              (passagem de plasmídeos entre bactérias por contato direto) é um
              mecanismo fundamental na disseminação de resistência a antibióticos em
              populações bacterianas — independente de reprodução vertical. As demais
              alternativas são incorretas: bactérias não têm organelas membranosas nem
              realizam mitose.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Tratamento viral e antibióticos"
          statement={
            <p>
              Durante uma consulta médica, um paciente com diagnóstico de gripe (influenza)
              solicita receita de antibiótico, argumentando que usou no ano anterior e
              melhorou da "gripe" rapidamente. O médico recusa a prescrição. A justificativa
              cientificamente correta para essa recusa é que:
            </p>
          }
          options={[
            { letter: "a", text: "Antibióticos são caros e o sistema público de saúde restringe seu uso a doenças graves" },
            { letter: "b", text: "A gripe é causada por um fungo, e antibióticos só combatem bactérias" },
            {
              letter: "c",
              text: "A gripe é causada pelo vírus influenza, que não possui ribossomos nem parede celular bacteriana — alvos dos antibióticos — e por isso esses fármacos são ineficazes",
              correct: true,
            },
            { letter: "d", text: "O vírus influenza possui DNA dupla-fita e os antibióticos só agem em vírus de RNA simples" },
          ]}
          resolution={
            <p>
              Antibióticos atuam em alvos exclusivos das bactérias: ribossomos
              <strong> 70S</strong> (como estreptomicina e tetraciclina), parede
              celular de peptidoglicano (como penicilina) ou topoisomerases
              bacterianas (como ciprofloxacino). O vírus influenza é{" "}
              <strong>acelular</strong>, não tem ribossomos nem parede celular
              bacteriana — portanto, antibióticos não produzem nenhum efeito sobre
              ele. O uso indevido de antibióticos, como no caso descrito, é uma das
              principais causas de <strong>resistência bacteriana</strong>, um
              problema grave de saúde pública. Antivirais específicos (ex.:
              oseltamivir/Tamiflu) inibem a neuraminidase do vírus influenza, sendo
              o tratamento correto.
            </p>
          }
        />
      </section>
    </article>
  );
}
