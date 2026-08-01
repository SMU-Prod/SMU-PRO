"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap03Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 3</span>

          <h1>Bioquímica Celular II: Lipídios, Aminoácidos e Proteínas (Estrutura e Enzimas)</h1>

          <p>
            Dois grupos de biomoléculas dominam a bioquímica celular avançada: os{" "}
            <strong>lipídios</strong> — moléculas apolares que armazenam energia,
            constroem membranas e servem de hormônios — e as{" "}
            <strong>proteínas</strong>, polímeros de aminoácidos que executam
            virtualmente todas as funções celulares, da contração muscular à catálise
            enzimática. Compreender a estrutura, as propriedades e as funções dessas
            moléculas é indispensável para o ENEM e os principais vestibulares,
            especialmente a bioquímica das enzimas e os mecanismos que regulam sua
            atividade.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ─────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Lipídios</span>

        <h2>1. O Que São Lipídios</h2>

        <p>
          <strong>Lipídios</strong> (do grego <em>lipos</em> = gordura) são
          biomoléculas predominantemente apolares, caracterizadas por serem
          <strong> insolúveis em água</strong> e solúveis em solventes orgânicos
          como éter, clorofórmio e acetona. Essa propriedade surge da cadeia de
          hidrocarbonetos que predomina em sua estrutura — grupos <strong>—CH₂—</strong>{" "}
          e <strong>—CH₃</strong> não estabelecem pontes de hidrogênio com moléculas
          de água.
        </p>

        <p>
          Diferentemente dos carboidratos, os lipídios <em>não são polímeros</em>: não
          possuem uma unidade-monomérica universal. São um grupo heterogêneo definido
          pela solubilidade, e não pela estrutura química. As principais classes são:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧈</span>
            <h3>Glicerídeos</h3>
            <p>Gorduras e óleos — principal reserva energética animal e vegetal.</p>
          </div>

          <div className="lesson-card">
            <span>💠</span>
            <h3>Fosfolipídios</h3>
            <p>Componentes essenciais de todas as membranas biológicas.</p>
          </div>

          <div className="lesson-card">
            <span>🔬</span>
            <h3>Esteroides</h3>
            <p>Quatro anéis de carbono; incluem colesterol e hormônios sexuais.</p>
          </div>

          <div className="lesson-card">
            <span>🐝</span>
            <h3>Cerídeos (ceras)</h3>
            <p>Impermeabilizantes em cutículas de plantas, penas e pele.</p>
          </div>

          <div className="lesson-card">
            <span>🥕</span>
            <h3>Carotenoides</h3>
            <p>Pigmentos lipossolúveis; precursores da vitamina A.</p>
          </div>

          <div className="lesson-card">
            <span>💊</span>
            <h3>Vitaminas A, D, E, K</h3>
            <p>Lipossolúveis — absorvidas junto com gorduras na dieta.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 ─────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Glicerídeos</span>

        <h2>2. Triglicerídeos e Ácidos Graxos</h2>

        <p>
          Os <strong>triglicerídeos</strong> (triacilgliceróis) são formados por uma
          molécula de <strong>glicerol</strong> (álcool de três carbonos) unida a três{" "}
          <strong>ácidos graxos</strong> por <strong>ligações éster</strong> — reação
          de síntese com perda de três moléculas de água (esterificação). Em animais,
          são depositados no <strong>tecido adiposo</strong>; em plantas e sementes,
          surgem como óleos vegetais.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 580 230" width="580" height="230" aria-label="Estrutura de um triglicerídeo">
            {/* Glicerol backbone */}
            <rect x={20} y={60} width={100} height={110} rx={10} fill="#0ea5e9" fillOpacity={0.12} stroke="#0ea5e9" strokeWidth={1.5} />
            <text x={70} y={92} textAnchor="middle" fontSize={13} fontWeight={700} fill="#0369a1">Glicerol</text>
            <text x={70} y={110} textAnchor="middle" fontSize={11} fill="#0369a1">C₁—OH</text>
            <text x={70} y={126} textAnchor="middle" fontSize={11} fill="#0369a1">C₂—OH</text>
            <text x={70} y={142} textAnchor="middle" fontSize={11} fill="#0369a1">C₃—OH</text>
            {/* Arrows */}
            <line x1={120} y1={110} x2={160} y2={110} stroke="#6b7280" strokeWidth={1.5} />
            <line x1={120} y1={126} x2={160} y2={126} stroke="#6b7280" strokeWidth={1.5} />
            <line x1={120} y1={142} x2={160} y2={142} stroke="#6b7280" strokeWidth={1.5} />
            {/* Acid graxo 1 */}
            <rect x={160} y={90} width={160} height={28} rx={8} fill="#16a34a" fillOpacity={0.12} stroke="#16a34a" strokeWidth={1.4} />
            <text x={240} y={109} textAnchor="middle" fontSize={12} fontWeight={600} fill="#166534">Ácido graxo 1 — R₁COOH</text>
            {/* Acid graxo 2 */}
            <rect x={160} y={112} width={160} height={28} rx={8} fill="#16a34a" fillOpacity={0.12} stroke="#16a34a" strokeWidth={1.4} />
            <text x={240} y={131} textAnchor="middle" fontSize={12} fontWeight={600} fill="#166534">Ácido graxo 2 — R₂COOH</text>
            {/* Acid graxo 3 */}
            <rect x={160} y={134} width={160} height={28} rx={8} fill="#16a34a" fillOpacity={0.12} stroke="#16a34a" strokeWidth={1.4} />
            <text x={240} y={153} textAnchor="middle" fontSize={12} fontWeight={600} fill="#166534">Ácido graxo 3 — R₃COOH</text>
            {/* Seta reação */}
            <text x={345} y={124} textAnchor="middle" fontSize={20} fill="#9ca3af">→</text>
            {/* Triglicerídeo */}
            <rect x={365} y={80} width={110} height={70} rx={10} fill="#f59e0b" fillOpacity={0.15} stroke="#f59e0b" strokeWidth={1.5} />
            <text x={420} y={108} textAnchor="middle" fontSize={13} fontWeight={700} fill="#92400e">Triglicerídeo</text>
            <text x={420} y={126} textAnchor="middle" fontSize={11} fill="#92400e">(ligação éster)</text>
            {/* Água */}
            <text x={490} y={100} textAnchor="middle" fontSize={13} fill="#6b7280">+</text>
            <rect x={500} y={85} width={68} height={38} rx={8} fill="#e0f2fe" stroke="#7dd3fc" strokeWidth={1.2} />
            <text x={534} y={109} textAnchor="middle" fontSize={12} fontWeight={600} fill="#0369a1">3 H₂O</text>
            {/* Label */}
            <text x={290} y={210} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">Esterificação: 3 ligações éster formadas, 3 H₂O liberadas</text>
          </svg>
          <figcaption>Formação de um triglicerídeo por reação de esterificação (síntese por desidratação).</figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Saturadas × Insaturadas × Trans</h3>
          <p>
            A diferença fundamental entre gorduras está nas ligações carbono-carbono
            das cadeias dos ácidos graxos:{" "}
            <strong>saturadas</strong> não possuem duplas ligações (C—C), são sólidas
            à temperatura ambiente (manteiga, banha, gordura de coco) e predominam em
            gorduras animais. <strong>Insaturadas</strong> possuem uma ou mais duplas
            ligações (C=C) e são líquidas (óleos vegetais, peixes). As{" "}
            <strong>gorduras trans</strong> são insaturadas artificialmente
            modificadas por hidrogenação industrial, que criam uma conformação
            espacial prejudicial, elevando o LDL ("colesterol ruim") e reduzindo o
            HDL — fator de risco cardiovascular.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Ligações C–C</th>
                <th>Estado físico</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Saturada</td>
                <td>Apenas simples</td>
                <td>Sólida (temp. amb.)</td>
                <td>Manteiga, banha, coco</td>
              </tr>
              <tr>
                <td>Monoinsaturada</td>
                <td>Uma dupla ligação</td>
                <td>Líquida</td>
                <td>Azeite de oliva (ômega-9)</td>
              </tr>
              <tr>
                <td>Poli-insaturada</td>
                <td>Múltiplas duplas</td>
                <td>Líquida</td>
                <td>Óleo de soja, ômega-3 (peixes)</td>
              </tr>
              <tr>
                <td>Trans</td>
                <td>Dupla (config. trans)</td>
                <td>Pastosa/sólida</td>
                <td>Margarina dura, gordura vegetal hidrogenada</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <h3>Funções dos glicerídeos</h3>
          <p>
            <strong>Reserva energética</strong>: 1 g de gordura libera aproximadamente{" "}
            <strong>9 kcal</strong>, mais que o dobro dos carboidratos (~4 kcal/g),
            tornando-os a forma mais eficiente de armazenar energia. Além disso
            atuam como <strong>isolante térmico</strong> (hipoderme de mamíferos
            aquáticos), <strong>proteção mecânica</strong> de órgãos (rim envolto
            em gordura), e em espécies de desertos (camelo) como{" "}
            <strong>reserva hídrica</strong>, pois a oxidação de 100 g de gordura
            produz ~107 mL de água metabólica.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 3 ─────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Membranas</span>

        <h2>3. Fosfolipídios e a Bicamada Lipídica</h2>

        <p>
          Um <strong>fosfolipídio</strong> é formado por glicerol + dois ácidos graxos
          + um grupamento <strong>fosfato</strong> ligado a um álcool polar
          (colina, serina, etanolamina, etc.). Isso confere à molécula uma natureza{" "}
          <strong>anfipática</strong>: a "cabeça" polar (hidrofílica) interage com a
          água, enquanto as duas "caudas" apolares (hidrofóbicas) a evitam.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 560 200" width="560" height="200" aria-label="Bicamada lipídica com fosfolipídios">
            {/* camada externa — cabeças */}
            {[40, 110, 180, 250, 320, 390, 460].map((x) => (
              <g key={"top-" + x}>
                <circle cx={x + 15} cy={38} r={15} fill="#0ea5e9" opacity={0.85} />
                <text x={x + 15} y={43} textAnchor="middle" fontSize={9} fontWeight={700} fill="white">P</text>
                <line x1={x + 9} y1={52} x2={x + 5} y2={80} stroke="#374151" strokeWidth={2} />
                <line x1={x + 21} y1={52} x2={x + 25} y2={80} stroke="#374151" strokeWidth={2} />
              </g>
            ))}
            {/* zona hidrofóbica */}
            <rect x={20} y={80} width={520} height={40} rx={4} fill="#fef9c3" opacity={0.6} />
            <text x={280} y={105} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#92400e">interior hidrofóbico</text>
            {/* camada interna — caudas apontando para dentro */}
            {[40, 110, 180, 250, 320, 390, 460].map((x) => (
              <g key={"bot-" + x}>
                <line x1={x + 9} y1={120} x2={x + 5} y2={148} stroke="#374151" strokeWidth={2} />
                <line x1={x + 21} y1={120} x2={x + 25} y2={148} stroke="#374151" strokeWidth={2} />
                <circle cx={x + 15} cy={162} r={15} fill="#0ea5e9" opacity={0.85} />
                <text x={x + 15} y={167} textAnchor="middle" fontSize={9} fontWeight={700} fill="white">P</text>
              </g>
            ))}
            {/* Labels água */}
            <text x={280} y={18} textAnchor="middle" fontSize={12} fill="#0369a1">↕ meio extracelular (aquoso)</text>
            <text x={280} y={196} textAnchor="middle" fontSize={12} fill="#0369a1">↕ citoplasma (aquoso)</text>
          </svg>
          <figcaption>
            Bicamada lipídica: cabeças hidrofílicas (azul) voltadas para os meios aquosos;
            caudas hidrofóbicas (interior amarelado) se ocultam da água.
          </figcaption>
        </figure>

        <p>
          Essa organização espontânea (mínimo de energia livre) é a base estrutural de
          todas as membranas celulares. No modelo do <strong>mosaico fluido</strong>{" "}
          (Singer &amp; Nicolson, 1972), proteínas estão inseridas ou associadas à
          bicamada — integrais (atravessam) ou periféricas (aderidas à superfície).
          O <strong>colesterol</strong>, intercalado entre os fosfolipídios, regula a
          fluidez da membrana: em temperaturas baixas mantém-a fluida; em altas,
          evita que se desintegre.
        </p>

        <div className="lesson-highlight">
          <h3>Permeabilidade seletiva</h3>
          <p>
            A bicamada lipídica permite a passagem livre de moléculas{" "}
            <strong>apolares e pequenas</strong> (O₂, CO₂, lipídios) e impede a
            entrada de moléculas polares e íons, que precisam de proteínas
            transportadoras (canais, bombas, proteínas carreadoras). Essa
            seletividade é fundamental para a homeostase celular.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 4 ─────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Esteroides e Colesterol</span>

        <h2>4. Esteroides: Estrutura Tetracíclica</h2>

        <p>
          Os <strong>esteroides</strong> possuem um esqueleto carbônico rígido de{" "}
          <strong>quatro anéis fundidos</strong> (ciclopentanoperidrofenantreno). O
          precursor de todos os esteroides animais é o <strong>colesterol</strong>,
          sintetizado no fígado a partir do acetil-CoA. O colesterol é componente
          estrutural essencial da membrana plasmática de células animais e precursor
          dos demais esteroides.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>♂️</span>
            <h3>Testosterona</h3>
            <p>Hormônio sexual masculino; caracteres sexuais secundários e espermatogênese.</p>
          </div>

          <div className="lesson-card">
            <span>♀️</span>
            <h3>Estrógeno / Progesterona</h3>
            <p>Ciclo menstrual, gestação, caracteres femininos.</p>
          </div>

          <div className="lesson-card">
            <span>🧠</span>
            <h3>Cortisol</h3>
            <p>Glicocorticoide adrenal; resposta ao estresse, anti-inflamatório.</p>
          </div>

          <div className="lesson-card">
            <span>🌞</span>
            <h3>Vitamina D</h3>
            <p>Síntese na pele por UV; absorção intestinal de cálcio e fósforo.</p>
          </div>

          <div className="lesson-card">
            <span>🧂</span>
            <h3>Aldosterona</h3>
            <p>Mineralocorticoide; regula Na⁺/K⁺ nos rins.</p>
          </div>

          <div className="lesson-card">
            <span>🩺</span>
            <h3>Colesterol</h3>
            <p>Componente de membranas animais e precursor de todos os esteroides.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>LDL × HDL:</strong> o colesterol circula no sangue associado
            a lipoproteínas. O <strong>LDL</strong> ("colesterol ruim") transporta
            colesterol para os tecidos — em excesso deposita-se nas paredes arteriais
            (aterosclerose). O <strong>HDL</strong> ("colesterol bom") retira colesterol
            dos tecidos e o devolve ao fígado. Dieta rica em gordura saturada e trans
            eleva o LDL; exercício físico e gorduras insaturadas elevam o HDL.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 5 ─────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Aminoácidos</span>

        <h2>5. Aminoácidos: Monômeros das Proteínas</h2>

        <p>
          Existem <strong>20 aminoácidos</strong> usados na síntese de proteínas nos
          seres vivos (aminoácidos proteogênicos). Todos compartilham a mesma
          estrutura central: um carbono-<em>alfa</em> (C<sub>α</sub>) ligado a um{" "}
          <strong>grupo amino</strong> (—NH₂), um <strong>grupo carboxila</strong>{" "}
          (—COOH), um <strong>hidrogênio</strong> e um <strong>radical R</strong>{" "}
          variável — é exatamente esse radical que diferencia cada aminoácido e
          determina as propriedades da proteína resultante.
        </p>

        <div className="math-block">
          <h3>Fórmula geral de um aminoácido</h3>
          <p>
            <M>{"\\text{H}_2\\text{N} - \\underset{\\displaystyle|}{\\overset{\\displaystyle R}{\\text{C}_{\\alpha}}} (\\text{H}) - \\text{COOH}"}</M>
          </p>
          <p>
            Em solução aquosa neutra, o grupo —NH₂ capta um próton e o —COOH
            doa um próton, formando um <strong>zwitterion</strong> (íon dipolar):
            — ³NH⁺ e —COO⁻ na mesma molécula. Por isso os aminoácidos atuam como
            tampões (anfóteros) de pH.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Classificação</th>
                <th>Quantidade</th>
                <th>Origem</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Essenciais</td>
                <td>9</td>
                <td>Devem vir da dieta</td>
                <td>Valina, leucina, isoleucina, treonina, metionina, fenilalanina, triptofano, histidina, lisina</td>
              </tr>
              <tr>
                <td>Não essenciais</td>
                <td>11</td>
                <td>Sintetizados pelo organismo</td>
                <td>Glicina, alanina, serina, aspartato, glutamato, cisteína, tirosina, etc.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Por que a dieta proteica importa?</h3>
          <p>
            Uma dieta que não fornece todos os 9 aminoácidos essenciais é
            considerada <strong>proteicamente incompleta</strong>. Proteínas de
            origem animal (ovos, carne, leite) são <em>completas</em> — contêm todos
            os essenciais. A combinação de proteínas vegetais (arroz + feijão) pode
            suprir todos os essenciais de forma complementar, o que torna essa
            combinação extremamente eficiente nutricionalmente.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 6 ─────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Proteínas</span>

        <h2>6. Dos Aminoácidos às Proteínas — Ligação Peptídica e Níveis Estruturais</h2>

        <p>
          A união de dois aminoácidos ocorre pela <strong>ligação peptídica</strong>:
          o grupo <strong>—COOH</strong> de um aminoácido se condensa com o grupo{" "}
          <strong>—NH₂</strong> do seguinte, liberando uma molécula de H₂O (reação
          de desidratação). O conjunto resultante é chamado de <strong>peptídeo</strong>{" "}
          e a cadeia possui extremidade N-terminal (—NH₂ livre) e C-terminal (—COOH
          livre). Com mais de ~50 aminoácidos, chama-se <strong>polipeptídeo</strong>{" "}
          ou <strong>proteína</strong>.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 210" width="700" height="210" aria-label="Quatro níveis de estrutura proteica">
            {/* Primária */}
            <rect x={10} y={30} width={140} height={140} rx={12} fill="#0ea5e9" fillOpacity={0.1} stroke="#0ea5e9" strokeWidth={1.5} />
            <text x={80} y={55} textAnchor="middle" fontSize={13} fontWeight={700} fill="#0369a1">1ª Primária</text>
            {[0,1,2,3,4].map((i) => (
              <g key={"aa-" + i}>
                <circle cx={30 + i * 24} cy={100} r={10} fill="#0ea5e9" opacity={0.7} />
                <text x={30 + i * 24} y={105} textAnchor="middle" fontSize={9} fontWeight={700} fill="white">AA</text>
                {i < 4 && <line x1={40 + i * 24} y1={100} x2={44 + i * 24} y2={100} stroke="#374151" strokeWidth={2} />}
              </g>
            ))}
            <text x={80} y={148} textAnchor="middle" fontSize={10} fill="#374151">sequência linear</text>
            <text x={80} y={162} textAnchor="middle" fontSize={10} fill="#374151">de aminoácidos</text>

            {/* Secundária */}
            <rect x={170} y={30} width={140} height={140} rx={12} fill="#16a34a" fillOpacity={0.1} stroke="#16a34a" strokeWidth={1.5} />
            <text x={240} y={55} textAnchor="middle" fontSize={13} fontWeight={700} fill="#166534">2ª Secundária</text>
            {/* Hélice aproximada */}
            <path d="M 190 70 Q 220 80 210 100 Q 200 120 230 130 Q 260 140 250 155" fill="none" stroke="#16a34a" strokeWidth={3} strokeLinecap="round" />
            <text x={240} y={148} textAnchor="middle" fontSize={10} fill="#374151">α-hélice ou</text>
            <text x={240} y={162} textAnchor="middle" fontSize={10} fill="#374151">folha β (pontes H)</text>

            {/* Terciária */}
            <rect x={330} y={30} width={140} height={140} rx={12} fill="#f59e0b" fillOpacity={0.1} stroke="#f59e0b" strokeWidth={1.5} />
            <text x={400} y={55} textAnchor="middle" fontSize={13} fontWeight={700} fill="#92400e">3ª Terciária</text>
            <ellipse cx={400} cy={105} rx={40} ry={30} fill="none" stroke="#f59e0b" strokeWidth={2} strokeDasharray="4 3" />
            <path d="M 370 90 Q 390 75 410 95 Q 430 115 405 128 Q 385 140 370 120 Z" fill="#f59e0b" fillOpacity={0.25} />
            <text x={400} y={148} textAnchor="middle" fontSize={10} fill="#374151">dobramento 3D</text>
            <text x={400} y={162} textAnchor="middle" fontSize={10} fill="#374151">global da cadeia</text>

            {/* Quaternária */}
            <rect x={490} y={30} width={200} height={140} rx={12} fill="#a855f7" fillOpacity={0.1} stroke="#a855f7" strokeWidth={1.5} />
            <text x={590} y={55} textAnchor="middle" fontSize={13} fontWeight={700} fill="#6d28d9">4ª Quaternária</text>
            <ellipse cx={555} cy={105} rx={28} ry={22} fill="#a855f7" fillOpacity={0.2} stroke="#a855f7" strokeWidth={1.5} />
            <ellipse cx={625} cy={105} rx={28} ry={22} fill="#6366f1" fillOpacity={0.2} stroke="#6366f1" strokeWidth={1.5} />
            <text x={590} y={148} textAnchor="middle" fontSize={10} fill="#374151">associação de</text>
            <text x={590} y={162} textAnchor="middle" fontSize={10} fill="#374151">múltiplas cadeias</text>

            {/* Setas entre níveis */}
            {[155, 315, 475].map((x) => (
              <polygon key={x} points={`${x},100 ${x + 12},94 ${x + 12},106`} fill="#9ca3af" />
            ))}
          </svg>
          <figcaption>
            Quatro níveis de estrutura proteica: a função depende da forma tridimensional
            correta.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Nível</th>
                <th>Descrição</th>
                <th>Interações envolvidas</th>
                <th>Exemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Primária</td>
                <td>Sequência de aminoácidos na cadeia</td>
                <td>Ligações peptídicas (covalentes)</td>
                <td>Qualquer proteína</td>
              </tr>
              <tr>
                <td>Secundária</td>
                <td>Padrões locais de dobramento (α-hélice, folha-β)</td>
                <td>Pontes de hidrogênio entre C=O e N—H da cadeia principal</td>
                <td>Queratina do cabelo (α-hélice)</td>
              </tr>
              <tr>
                <td>Terciária</td>
                <td>Conformação 3D global de uma cadeia</td>
                <td>Pontes S—S, interações hidrofóbicas, pontes H, iônicas</td>
                <td>Mioglobina, lisozima</td>
              </tr>
              <tr>
                <td>Quaternária</td>
                <td>Associação de duas ou mais cadeias</td>
                <td>As mesmas da terciária entre cadeias</td>
                <td>Hemoglobina (4 cadeias), colágeno (3 cadeias)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Desnaturação proteica</h3>
          <p>
            A <strong>desnaturação</strong> ocorre quando a proteína perde sua
            estrutura tridimensional funcional por exposição a{" "}
            <strong>calor excessivo</strong>, <strong>pH extremo</strong>,{" "}
            <strong>solventes orgânicos</strong> ou <strong>detergentes</strong>. As
            ligações peptídicas (estrutura primária) permanecem intactas; são as
            interações fracas que mantêm as estruturas secundária e terciária que se
            rompem. A proteína desnaturada perde a atividade biológica. Exemplos
            cotidianos: clara de ovo cozida (albumina) e leite talhado
            (caseína desnaturada pelo ácido). Em algumas condições, a desnaturação
            é <strong>reversível</strong> (renaturação), mas geralmente é irreversível
            in vivo com calor intenso.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 7 ─────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Funções Proteicas</span>

        <h2>7. Funções das Proteínas</h2>

        <p>
          As proteínas são as moléculas mais versáteis da célula. A diversidade de
          funções emerge diretamente da diversidade de formas — cada proteína adota
          uma conformação única determinada pela sequência de aminoácidos codificada
          no DNA.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏗️</span>
            <h3>Estrutural</h3>
            <p>Colágeno (tendões, pele), queratina (cabelo, unhas), elastina (pulmão).</p>
          </div>

          <div className="lesson-card">
            <span>🩸</span>
            <h3>Transporte</h3>
            <p>Hemoglobina (O₂), albumina (ácidos graxos), transferrina (Fe²⁺).</p>
          </div>

          <div className="lesson-card">
            <span>🛡️</span>
            <h3>Defesa</h3>
            <p>Anticorpos (imunoglobulinas) reconhecem antígenos estranhos.</p>
          </div>

          <div className="lesson-card">
            <span>📡</span>
            <h3>Regulação hormonal</h3>
            <p>Insulina, glucagon, GH, prolactina — comunicação intercelular.</p>
          </div>

          <div className="lesson-card">
            <span>💪</span>
            <h3>Contrátil / motora</h3>
            <p>Actina e miosina (músculo esquelético), tubulina (cílios e flagelos).</p>
          </div>

          <div className="lesson-card">
            <span>⚡</span>
            <h3>Enzimática</h3>
            <p>Catalisam todas as reações metabólicas com altíssima especificidade.</p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 8 ─────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Enzimas</span>

        <h2>8. Enzimas: Catalisadores Biológicos</h2>

        <p>
          <strong>Enzimas</strong> são, na grande maioria, proteínas globulares que
          atuam como <strong>catalisadores biológicos</strong>: aceleram reações
          químicas ao <strong>diminuir a energia de ativação</strong> necessária para
          que a reação ocorra, sem serem consumidas no processo. Algumas moléculas
          de RNA também possuem atividade catalítica — chamadas{" "}
          <strong>ribozimas</strong> (ex.: RNA ribossomal catalisa a formação de
          ligações peptídicas). A eficiência enzimática é extraordinária: uma
          molécula de catalase decompõe até <strong>40 milhões de moléculas de
          H₂O₂</strong> por segundo.
        </p>

        <div className="math-block">
          <h3>Equação geral da catálise enzimática</h3>
          <p>
            <M>{"E + S \\rightleftharpoons ES \\rightarrow E + P"}</M>
          </p>
          <p>
            A enzima (E) se liga ao substrato (S) no <strong>sítio ativo</strong>,
            formando o complexo enzima-substrato (ES). Ocorre a reação e o produto
            (P) é liberado. A enzima retorna ao estado original e pode catalisar
            novos ciclos.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔑</span>
            <h3>Modelo chave-fechadura</h3>
            <p>Fischer (1894): sítio ativo tem forma rígida e complementar ao substrato.</p>
          </div>

          <div className="lesson-card">
            <span>🤲</span>
            <h3>Encaixe induzido</h3>
            <p>Koshland (1958): o sítio ativo se molda ao substrato ao interagir com ele.</p>
          </div>

          <div className="lesson-card">
            <span>🧩</span>
            <h3>Especificidade</h3>
            <p>Cada enzima reconhece apenas um ou poucos substratos específicos.</p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 640 220" width="640" height="220" aria-label="Atividade enzimática em função de temperatura e pH">
            {/* Gráfico temperatura */}
            <text x={150} y={18} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">Atividade × Temperatura</text>
            <line x1={30} y1={30} x2={30} y2={185} stroke="#374151" strokeWidth={1.5} />
            <line x1={30} y1={185} x2={275} y2={185} stroke="#374151" strokeWidth={1.5} />
            <text x={22} y={34} textAnchor="end" fontSize={10} fill="#6b7280">↑ ativ.</text>
            <text x={275} y={200} textAnchor="end" fontSize={10} fill="#6b7280">temp. →</text>
            {/* Curva sino temperatura */}
            <path d="M 30 180 C 60 175, 80 120, 130 60 C 160 25, 185 25, 200 55 C 215 85, 240 175, 275 180"
              fill="#0ea5e9" fillOpacity={0.15} stroke="#0ea5e9" strokeWidth={3} />
            <line x1={130} y1={185} x2={130} y2={60} stroke="#ef4444" strokeWidth={1.2} strokeDasharray="4 3" />
            <text x={130} y={202} textAnchor="middle" fontSize={10} fill="#ef4444">T ótima ~37 °C</text>

            {/* Gráfico pH */}
            <text x={490} y={18} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">Atividade × pH</text>
            <line x1={365} y1={30} x2={365} y2={185} stroke="#374151" strokeWidth={1.5} />
            <line x1={365} y1={185} x2={610} y2={185} stroke="#374151" strokeWidth={1.5} />
            <text x={357} y={34} textAnchor="end" fontSize={10} fill="#6b7280">↑ ativ.</text>
            <text x={610} y={200} textAnchor="end" fontSize={10} fill="#6b7280">pH →</text>
            {/* Curva pepsina (pH 2) */}
            <path d="M 365 180 C 375 178, 385 80, 400 55 C 415 35, 430 55, 445 150 C 455 178, 470 180, 610 182"
              fill="none" stroke="#ef4444" strokeWidth={2.5} />
            <text x={405} y={48} textAnchor="middle" fontSize={9} fill="#ef4444">pepsina</text>
            <text x={405} y={58} textAnchor="middle" fontSize={9} fill="#ef4444">(pH ≈ 2)</text>
            {/* Curva tripsina (pH 8) */}
            <path d="M 365 182 C 430 180, 460 170, 510 55 C 530 30, 555 30, 570 55 C 590 100, 605 180, 610 182"
              fill="none" stroke="#16a34a" strokeWidth={2.5} />
            <text x={540} y={48} textAnchor="middle" fontSize={9} fill="#16a34a">tripsina</text>
            <text x={540} y={58} textAnchor="middle" fontSize={9} fill="#16a34a">(pH ≈ 8)</text>
            {/* pH marcas */}
            {[1,3,5,7,9,11].map((ph, i) => (
              <text key={ph} x={375 + i * 39} y={200} textAnchor="middle" fontSize={9} fill="#6b7280">{ph}</text>
            ))}
          </svg>
          <figcaption>
            Curvas em sino de atividade enzimática: cada enzima tem temperatura e pH
            ótimos. Acima da temperatura ótima, a desnaturação reduz abruptamente a
            atividade.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fator</th>
                <th>Efeito no aumento</th>
                <th>Efeito em excesso / extremo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Temperatura</td>
                <td>Aumenta colisões — atividade cresce</td>
                <td>Acima do ótimo: desnaturação e perda de atividade</td>
              </tr>
              <tr>
                <td>pH</td>
                <td>pH ótimo favorece conformação do sítio ativo</td>
                <td>pH muito ácido ou básico: desnaturação</td>
              </tr>
              <tr>
                <td>Concentração de substrato</td>
                <td>Aumenta velocidade até saturar todos os sítios ativos</td>
                <td>Saturação: velocidade máxima (V<sub>max</sub>)</td>
              </tr>
              <tr>
                <td>Inibidor competitivo</td>
                <td>—</td>
                <td>Ocupa o sítio ativo; efeito revertido com excesso de substrato</td>
              </tr>
              <tr>
                <td>Inibidor não-competitivo</td>
                <td>—</td>
                <td>Liga-se fora do sítio ativo (sítio alostérico); altera conformação</td>
              </tr>
              <tr>
                <td>Cofatores / coenzimas</td>
                <td>Ativam apoproteínas (enzimas incompletas)</td>
                <td>Ausência bloqueia a atividade (ex.: deficiência de vitaminas)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Nomenclatura e classes enzimáticas</h3>
          <p>
            Enzimas são nomeadas adicionando o sufixo <strong>-ase</strong> ao
            substrato ou tipo de reação. Exemplos: <em>lipase</em> (quebra lipídios),{" "}
            <em>protease</em> (quebra proteínas), <em>amilase</em> (quebra amido),{" "}
            <em>lactase</em> (quebra lactose — a deficiência causa intolerância),{" "}
            <em>DNA polimerase</em> (sintetiza DNA). A intolerância à lactose é um
            exemplo clássico para o ENEM: a ausência da lactase intestinal impede a
            digestão da lactose, que é fermentada por bactérias causando gases e
            diarreia.
          </p>
        </div>
      </section>

      {/* ── EXERCÍCIOS ────────────────────────────────────── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — Lipídios, Proteínas e Enzimas</h2>

        <Exercise
          level="Básico"
          title="1. Função energética dos lipídios"
          statement={
            <p>
              Comparados aos carboidratos, os triglicerídeos fornecem aproximadamente
              o dobro de energia por grama (~9 kcal/g × ~4 kcal/g). Essa alta
              densidade energética os torna especialmente adequados para:
            </p>
          }
          options={[
            { letter: "a", text: "Transporte de gases no sangue" },
            { letter: "b", text: "Armazenamento de energia a longo prazo no tecido adiposo", correct: true },
            { letter: "c", text: "Formação de ácidos nucleicos" },
            { letter: "d", text: "Catálise de reações metabólicas" },
          ]}
          resolution={
            <p>
              Pela alta densidade energética e pelo fato de serem hidrofóbicos
              (armazenados sem água associada), os triglicerídeos são a principal
              forma de reserva energética de longo prazo em animais, depositados no
              tecido adiposo. Carboidratos são reserva de curto prazo (glicogênio).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Estrutura dos fosfolipídios e membranas"
          statement={
            <p>
              A bicamada lipídica das membranas celulares se organiza
              espontaneamente em meio aquoso por conta da natureza anfipática dos
              fosfolipídios. Nessa organização, as caudas dos fosfolipídios ficam
              voltadas para:
            </p>
          }
          options={[
            { letter: "a", text: "O exterior aquoso de ambos os lados da membrana" },
            {
              letter: "b",
              text: "O interior da bicamada, afastadas da água",
              correct: true,
            },
            { letter: "c", text: "O citoplasma, enquanto as cabeças ficam no interior" },
            { letter: "d", text: "A mesma direção das cabeças, formando monocamada" },
          ]}
          resolution={
            <p>
              As "caudas" apolares (ácidos graxos) são hidrofóbicas e minimizam o
              contato com a água ao se voltarem para o interior da bicamada. As
              "cabeças" polares (com fosfato) são hidrofílicas e ficam em contato
              com os meios aquosos intra e extracelular — princípio fundamental do
              modelo do mosaico fluido.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Desnaturação e estrutura proteica"
          statement={
            <p>
              Ao cozinhar um ovo, a clara torna-se opaca e sólida. Esse processo
              representa uma desnaturação proteica irreversível. Assinale a
              alternativa que descreve corretamente o que acontece em nível
              molecular nesse processo:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "As ligações peptídicas (estrutura primária) são hidrolisadas, liberando aminoácidos livres",
            },
            {
              letter: "b",
              text: "As estruturas secundária, terciária e quaternária são desfeitas pelo calor, mas a sequência de aminoácidos é preservada",
              correct: true,
            },
            {
              letter: "c",
              text: "Os aminoácidos sofrem mutação e formam novas sequências",
            },
            {
              letter: "d",
              text: "A estrutura primária se desfaz primeiro, depois a secundária",
            },
          ]}
          resolution={
            <p>
              O calor rompe as interações fracas (pontes de hidrogênio, interações
              hidrofóbicas, pontes dissulfeto) que mantêm as estruturas secundária,
              terciária e quaternária. A estrutura primária — a sequência de
              aminoácidos mantida por ligações peptídicas covalentes — não é
              afetada. A proteína desnaturada perde a função, pois a função depende
              da forma 3D.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Intolerância à lactose"
          statement={
            <p>
              A intolerância à lactose afeta cerca de 70% da população adulta
              mundial. A condição resulta da deficiência da enzima{" "}
              <strong>lactase</strong>, produzida pelas células do intestino
              delgado. Com base no mecanismo de ação enzimática, é CORRETO afirmar
              que, na ausência da lactase:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A lactose é diretamente absorvida pelo intestino intacta, sem consequências",
            },
            {
              letter: "b",
              text: "A lactose não é hidrolisada em glicose e galactose, permanece no intestino e é fermentada por bactérias, causando gases e diarreia",
              correct: true,
            },
            {
              letter: "c",
              text: "Outra enzima assume o papel da lactase por indução metabólica",
            },
            {
              letter: "d",
              text: "A lactose sofre desnaturação no estômago e é absorvida no cólon",
            },
          ]}
          resolution={
            <p>
              A lactase é a enzima específica para quebrar a lactose (dissacarídeo)
              em glicose + galactose (monossacarídeos absorvíveis). Sem a lactase, a
              lactose não digerida chega ao cólon, onde bactérias a fermentam
              produzindo CO₂, H₂ e ácidos, causando distensão, flatulência e
              diarreia. É um exemplo clássico de especificidade enzimática aplicada
              à saúde humana.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Colesterol, LDL e aterosclerose"
          statement={
            <p>
              Um exame de sangue revela que um paciente tem altos níveis de
              LDL-colesterol e baixos níveis de HDL-colesterol. O médico explica
              que essa combinação é um fator de risco para aterosclerose. Com base
              na bioquímica dos lipídios, a aterosclerose se desenvolve porque:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O LDL transporta colesterol para os tecidos e, em excesso, deposita-o nas paredes das artérias, formando placas que reduzem o fluxo sanguíneo",
              correct: true,
            },
            {
              letter: "b",
              text: "O LDL retira colesterol das artérias e o deposita no fígado, causando obstrução hepática",
            },
            {
              letter: "c",
              text: "O HDL alto é o principal responsável pela formação de placas arteriais",
            },
            {
              letter: "d",
              text: "O colesterol não tem relação com as doenças cardiovasculares; o risco vem apenas das proteínas plasmáticas",
            },
          ]}
          resolution={
            <p>
              O LDL ("colesterol ruim") transporta colesterol do fígado para os
              tecidos periféricos. Em excesso, deposita-se nas paredes das artérias
              formando as placas ateromatosas (aterosclerose), que podem obstruir o
              vaso e causar infarto ou AVC. O HDL ("colesterol bom") faz o caminho
              inverso — coleta colesterol dos tecidos e o devolve ao fígado para
              eliminação — exercendo efeito protetor.
            </p>
          }
        />
      </section>
    </article>
  );
}
