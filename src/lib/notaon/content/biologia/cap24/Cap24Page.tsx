"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap24Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 24</span>

          <h1>Reino Monera: Bactérias, Arqueas e Bacterioses</h1>

          <p>
            Os procariontes são os seres vivos mais antigos da Terra —
            surgidos há cerca de <strong>3,8 bilhões de anos</strong> —, e
            ainda hoje dominam todos os ambientes do planeta, do fundo dos
            oceanos ao intestino humano. Neste capítulo você vai dominar a
            estrutura da célula bacteriana, a classificação Gram+/Gram−, as
            formas e arranjos, a nutrição, a reprodução e a recombinação
            genética, as arqueas extremófilas, a importância ecológica e
            econômica das bactérias e, por fim, as principais bacterioses
            cobradas no ENEM.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 1 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Definição e Classificação</span>

        <h2>1. O Domínio Bacteria e o Antigo Reino Monera</h2>

        <p>
          Durante décadas, todos os organismos sem núcleo verdadeiro
          (procariontes) foram agrupados no <strong>Reino Monera</strong>. Com
          o avanço da biologia molecular — especialmente a análise de RNA
          ribossômico por Carl Woese — ficou evidente que existem{" "}
          <strong>dois grandes grupos procariontes evolutivamente distintos</strong>:
          o domínio <strong>Bacteria</strong> e o domínio{" "}
          <strong>Archaea</strong>. Hoje a classificação em três domínios
          (Bacteria, Archaea e Eukarya) é a mais aceita pela ciência, mas o
          conceito de Reino Monera ainda aparece nas provas do ENEM e dos
          vestibulares como sinônimo de procariontes em geral.
        </p>

        <p>
          Apesar das diferenças moleculares entre bactérias e arqueas, ambos
          os grupos compartilham características gerais que os separam
          radicalmente dos eucariontes:
        </p>

        <div className="lesson-highlight">
          <h3>Características dos procariontes</h3>
          <ul>
            <li>
              <strong>Unicelulares</strong> — cada indivíduo é formado por uma
              única célula;
            </li>
            <li>
              <strong>Ausência de núcleo delimitado por membrana</strong> — o
              DNA fica disperso na região do nucleoide;
            </li>
            <li>
              <strong>Ausência de organelas membranosas</strong> (mitocôndrias,
              cloroplastos, retículo endoplasmático etc.);
            </li>
            <li>
              <strong>Ribossomos 70S</strong> — menores do que os 80S
              eucarióticos (alvo seletivo de antibióticos);
            </li>
            <li>
              Diâmetro médio de <strong>0,5 a 5 µm</strong>, muito menor que o
              das células eucarióticas;
            </li>
            <li>
              Parede celular presente na maioria (composição varia entre
              bactérias e arqueas).
            </li>
          </ul>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🦠</span>
            <h3>Bacteria</h3>
            <p>
              Parede com peptideoglicano; mais estudadas; incluem patógenos
              humanos e bactérias benéficas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌋</span>
            <h3>Archaea</h3>
            <p>
              Sem peptideoglicano; evolutivamente próximas dos eucariontes;
              muitas extremófilas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌍</span>
            <h3>Distribuição</h3>
            <p>
              Onipresentes — solo, água, ar, intestino, fontes hidrotermais,
              geleiras e lagos hipersalinos.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== SEÇÃO 2 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Morfologia Celular</span>

        <h2>2. Estrutura da Célula Bacteriana</h2>

        <p>
          A célula bacteriana é desprovida de compartimentos membranosos, mas
          apresenta uma organização interna e externa altamente funcional. Cada
          componente tem papel preciso na sobrevivência, patogenicidade e
          resistência da bactéria.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 320" width="680" height="320" aria-label="Estrutura esquemática de uma célula bacteriana com rótulos">
            {/* Cápsula */}
            <ellipse cx={340} cy={160} rx={280} ry={135} fill="none" stroke="#d97706" strokeWidth={10} strokeDasharray="12 6" opacity={0.55} />
            <text x={96} y={36} fontSize={12} fill="#d97706" fontWeight={700}>Cápsula</text>
            <line x1={130} y1={42} x2={155} y2={72} stroke="#d97706" strokeWidth={1.2} />

            {/* Parede celular */}
            <ellipse cx={340} cy={160} rx={260} ry={118} fill="#fef3c7" stroke="#f59e0b" strokeWidth={6} />

            {/* Membrana plasmática */}
            <ellipse cx={340} cy={160} rx={244} ry={103} fill="#e0f2fe" stroke="#0ea5e9" strokeWidth={4} />

            {/* Citoplasma */}
            <ellipse cx={340} cy={160} rx={244} ry={103} fill="#f0f9ff" opacity={0.6} />

            {/* Nucleoide */}
            <ellipse cx={300} cy={165} rx={68} ry={48} fill="#c7d2fe" stroke="#6366f1" strokeWidth={2.5} />
            <text x={300} y={168} textAnchor="middle" fontSize={12} fontWeight={700} fill="#3730a3">Nucleoide</text>
            <text x={300} y={182} textAnchor="middle" fontSize={10} fill="#4338ca">(DNA circular)</text>

            {/* Plasmídeo */}
            <ellipse cx={385} cy={148} rx={18} ry={12} fill="none" stroke="#a21caf" strokeWidth={2} />
            <text x={420} y={135} fontSize={11} fill="#a21caf" fontWeight={600}>Plasmídeo</text>
            <line x1={403} y1={143} x2={418} y2={137} stroke="#a21caf" strokeWidth={1} />

            {/* Ribossomos */}
            {[
              [220, 140], [240, 175], [260, 130], [370, 200], [410, 175], [430, 140], [380, 120],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={6} fill="#16a34a" opacity={0.7} />
            ))}
            <text x={205} y={230} fontSize={11} fill="#15803d" fontWeight={600}>Ribossomos 70S</text>

            {/* Flagelo */}
            <path d="M 600 150 C 630 140, 650 120, 660 95 C 670 70, 655 50, 645 40" fill="none" stroke="#dc2626" strokeWidth={3} />
            <text x={618} y={175} fontSize={11} fill="#dc2626" fontWeight={600}>Flagelo</text>

            {/* Fímbrias */}
            {[0, 1, 2, 3].map((i) => (
              <line key={i} x1={340 + i * 20 - 30} y1={263} x2={340 + i * 20 - 25} y2={295} stroke="#0891b2" strokeWidth={2} />
            ))}
            <text x={318} y={310} fontSize={11} fill="#0891b2" fontWeight={600}>Fímbrias / Pili</text>

            {/* Parede - rótulo */}
            <text x={560} y={90} fontSize={11} fill="#b45309" fontWeight={600}>Parede celular</text>
            <text x={560} y={103} fontSize={10} fill="#b45309">(peptideoglicano)</text>
            <line x1={557} y1={95} x2={510} y2={78} stroke="#b45309" strokeWidth={1} />

            {/* Membrana - rótulo */}
            <text x={30} y={270} fontSize={11} fill="#0369a1" fontWeight={600}>Membrana</text>
            <text x={30} y={283} fontSize={11} fill="#0369a1" fontWeight={600}>plasmática</text>
            <line x1={82} y1={267} x2={105} y2={247} stroke="#0369a1" strokeWidth={1} />
          </svg>
          <figcaption>
            Estrutura esquemática de uma bactéria típica — os componentes podem
            variar entre espécies (por exemplo, nem todas possuem flagelo ou
            cápsula).
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Componente</th>
                <th>Composição / Características</th>
                <th>Função Principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Parede celular</td>
                <td>Peptideoglicano (bactérias); ausente em arqueas</td>
                <td>Proteção osmótica e manutenção da forma</td>
              </tr>
              <tr>
                <td>Cápsula</td>
                <td>Polissacarídeos ou proteínas; presente em algumas espécies</td>
                <td>Proteção extra, fuga da fagocitose</td>
              </tr>
              <tr>
                <td>Membrana plasmática</td>
                <td>Bicamada lipídica; sem colesterol</td>
                <td>Barreira seletiva; respiração bacteriana</td>
              </tr>
              <tr>
                <td>Nucleoide</td>
                <td>DNA circular dupla-fita; sem histonas típicas</td>
                <td>Material genético principal</td>
              </tr>
              <tr>
                <td>Plasmídeo</td>
                <td>DNA circular extracromossômico menor</td>
                <td>Genes de resistência, virulência; base da engenharia genética</td>
              </tr>
              <tr>
                <td>Ribossomo 70S</td>
                <td>Subunidades 30S + 50S</td>
                <td>Síntese proteica; alvo de antibióticos (tetraciclina, eritromicina)</td>
              </tr>
              <tr>
                <td>Flagelo</td>
                <td>Proteína flagelina; rotação por motor molecular</td>
                <td>Locomoção (quimiotaxia)</td>
              </tr>
              <tr>
                <td>Fímbrias / Pili</td>
                <td>Apêndices proteicos filamentosos</td>
                <td>Adesão às células hospedeiras; conjugação (pili sexual)</td>
              </tr>
              <tr>
                <td>Mesossomo</td>
                <td>Invaginações da membrana</td>
                <td>Respiração e divisão celular</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Por que os ribossomos 70S importam para o ENEM?</h3>
          <p>
            A diferença de tamanho entre os ribossomos procariontes (70S) e
            eucariontes (80S) é a base da <strong>seletividade dos
            antibióticos</strong>: drogas como tetraciclina, cloranfenicol e
            aminoglicosídeos inibem o 70S bacteriano sem afetar — em doses
            terapêuticas — as células do paciente.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 3 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Formas e Arranjos</span>

        <h2>3. Morfologia Bacteriana: Formas e Arranjos</h2>

        <p>
          A forma das bactérias é determinada geneticamente e é um dos
          critérios clássicos de identificação. Já os{" "}
          <strong>arranjos</strong> dependem do plano de divisão e da
          tendência de as células-filhas ficarem unidas após a bipartição.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 210" width="700" height="210" aria-label="Formas e arranjos das bactérias">
            {/* Cocos individuais */}
            <circle cx={55} cy={80} r={22} fill="#6366f1" opacity={0.8} />
            <text x={55} y={120} textAnchor="middle" fontSize={12} fontWeight={700} fill="#3730a3">Coco</text>

            {/* Diplococo */}
            <circle cx={120} cy={80} r={18} fill="#6366f1" opacity={0.6} />
            <circle cx={155} cy={80} r={18} fill="#6366f1" opacity={0.6} />
            <text x={137} y={120} textAnchor="middle" fontSize={12} fontWeight={700} fill="#3730a3">Diplococo</text>

            {/* Estreptococo */}
            {[210, 238, 266, 294].map((cx, i) => (
              <circle key={i} cx={cx} cy={80} r={14} fill="#6366f1" opacity={0.55} />
            ))}
            <text x={252} y={120} textAnchor="middle" fontSize={12} fontWeight={700} fill="#3730a3">Estreptococo</text>

            {/* Estafilococo */}
            {[[355,68],[373,62],[391,68],[346,82],[364,88],[382,82],[373,98]].map(([cx,cy],i)=>(
              <circle key={i} cx={cx} cy={cy} r={12} fill="#6366f1" opacity={0.5} />
            ))}
            <text x={365} y={125} textAnchor="middle" fontSize={12} fontWeight={700} fill="#3730a3">Estafilococo</text>

            {/* Bacilo */}
            <rect x={430} y={60} width={52} height={24} rx={12} fill="#16a34a" opacity={0.75} />
            <text x={456} y={106} textAnchor="middle" fontSize={12} fontWeight={700} fill="#14532d">Bacilo</text>

            {/* Espiroqueta */}
            <path d="M 520 80 C 530 64, 545 96, 555 80 C 565 64, 580 96, 590 80 C 600 64, 615 96, 625 80" fill="none" stroke="#f59e0b" strokeWidth={4} strokeLinecap="round" />
            <text x={573} y={120} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">Espiroqueta</text>

            {/* Vibrião */}
            <path d="M 645 70 C 655 60, 680 70, 690 85" fill="none" stroke="#dc2626" strokeWidth={5} strokeLinecap="round" />
            <text x={667} y={120} textAnchor="middle" fontSize={12} fontWeight={700} fill="#7f1d1d">Vibrião</text>

            {/* Legenda inferior */}
            <text x={350} y={165} textAnchor="middle" fontSize={11} fill="#6b7280">
              Cocos: arranjos em pares (diplococos), cadeias (estreptococos) ou cachos (estafilococos)
            </text>
            <text x={350} y={183} textAnchor="middle" fontSize={11} fill="#6b7280">
              Bacilos: dispostos em estreptobacilos (cadeias) | Espirilos: curtos = vibriões; longos = espiroquetas
            </text>
          </svg>
          <figcaption>
            Principais formas bacterianas e arranjos — o agrupamento depende
            do plano de divisão e da adesão das células após a bipartição.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma</th>
                <th>Nome</th>
                <th>Exemplos de patógenos</th>
                <th>Arranjos típicos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Esférica</td>
                <td>Coco</td>
                <td>
                  <em>Staphylococcus aureus</em>, <em>Streptococcus pneumoniae</em>,{" "}
                  <em>Neisseria gonorrhoeae</em>
                </td>
                <td>Diplococo, estreptococo, estafilococo, tétrade, sarcina</td>
              </tr>
              <tr>
                <td>Alongada / cilíndrica</td>
                <td>Bacilo</td>
                <td>
                  <em>Bacillus anthracis</em>, <em>Mycobacterium tuberculosis</em>,{" "}
                  <em>Clostridium tetani</em>
                </td>
                <td>Diplobacilo, estreptobacilo</td>
              </tr>
              <tr>
                <td>Helicoidal rígida</td>
                <td>Espirílo</td>
                <td>
                  <em>Spirillum</em> spp.
                </td>
                <td>Geralmente isolados</td>
              </tr>
              <tr>
                <td>Curvada (vírgula)</td>
                <td>Vibrião</td>
                <td>
                  <em>Vibrio cholerae</em>
                </td>
                <td>Geralmente isolados</td>
              </tr>
              <tr>
                <td>Helicoidal flexível</td>
                <td>Espiroqueta</td>
                <td>
                  <em>Treponema pallidum</em> (sífilis),{" "}
                  <em>Leptospira interrogans</em>
                </td>
                <td>Isoladas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===================== SEÇÃO 4 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Classificação</span>

        <h2>4. Coloração de Gram: Gram+ e Gram−</h2>

        <p>
          Desenvolvida por Hans Christian Gram em 1884, a{" "}
          <strong>coloração de Gram</strong> é o método diagnóstico mais usado
          em microbiologia clínica. Ela divide as bactérias em dois grupos com
          base na espessura e composição da parede celular, o que tem
          implicações diretas na patogenicidade e na resposta a antibióticos.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🟣</span>
            <h3>Gram-positivas (Gram+)</h3>
            <p>
              Parede espessa de <strong>peptideoglicano</strong> (20–80 nm);
              retêm o cristal violeta → coram de <strong>roxo</strong>.
              Exemplos: <em>Staphylococcus</em>, <em>Streptococcus</em>,{" "}
              <em>Clostridium</em>, <em>Bacillus</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔴</span>
            <h3>Gram-negativas (Gram−)</h3>
            <p>
              Parede fina de peptideoglicano + <strong>membrana externa</strong>{" "}
              com LPS (lipopolissacarídeo); perdem o violeta → coram de{" "}
              <strong>rosa/vermelho</strong> com safranina. Exemplos:{" "}
              <em>Escherichia coli</em>, <em>Salmonella</em>,{" "}
              <em>Vibrio cholerae</em>, <em>Neisseria</em>.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Importância Clínica</h3>
            <p>
              Gram− têm LPS (endotoxina) — causa choque séptico. São mais
              resistentes a antibióticos por causa da membrana externa. Gram+
              são alvo da penicilina (inibe síntese de peptideoglicano).
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Bactérias que não coram pelo Gram</h3>
          <p>
            <em>Mycobacterium tuberculosis</em> e outras micobactérias possuem
            parede com <strong>ácido micólico</strong> e são{" "}
            <strong>álcool-ácido resistentes</strong> — identificadas pela
            coloração de Ziehl-Neelsen, não pelo Gram. Treponemas são finas
            demais e requerem microscopia de campo escuro.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 5 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Nutrição e Metabolismo</span>

        <h2>5. Nutrição Bacteriana e Cianobactérias</h2>

        <p>
          As bactérias exibem <strong>enorme versatilidade metabólica</strong>,
          sendo encontradas em quase qualquer condição ambiental. Podem ser
          classificadas quanto à fonte de energia e de carbono:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>☀️</span>
            <h3>Fotoautotróficas</h3>
            <p>
              Usam luz como energia e CO₂ como fonte de carbono. Ex.:
              cianobactérias (fotossíntese oxigênica).
            </p>
          </div>

          <div className="lesson-card">
            <span>⚗️</span>
            <h3>Quimioautotróficas</h3>
            <p>
              Obtêm energia oxidando compostos inorgânicos (NH₃, H₂S, Fe²⁺).
              Ex.: bactérias nitrificantes, sulfurosas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🍄</span>
            <h3>Quimioheterotróficas</h3>
            <p>
              Maioria — usam compostos orgânicos como fonte de energia e
              carbono (decompositoras, patógenas).
            </p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Fotoherotróficas</h3>
            <p>
              Usam luz como energia, mas compostos orgânicos como fonte de
              carbono. Ex.: bactérias púrpuras não-sulfurosas.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Cianobactérias e fixação de N₂</h3>
          <p>
            As <strong>cianobactérias</strong> (antigamente chamadas
            algas azul-esverdeadas) são bactérias gram-negativas que realizam
            fotossíntese oxigênica — produziram o oxigênio que transformou a
            atmosfera primitiva. Algumas, como <em>Anabaena</em>, possuem
            células especializadas chamadas <strong>heterócitos</strong>, onde
            ocorre a <strong>fixação biológica de N₂</strong>: a enzima{" "}
            <strong>nitrogenase</strong> converte N₂ atmosférico em NH₃,
            incorporado a compostos orgânicos. Isso é essencial para a
            fertilidade dos solos alagados (cultivo de arroz). Outro exemplo
            clássico de fixação de N₂ é a bactéria{" "}
            <em>Rhizobium leguminosarum</em>, que vive em nódulos nas raízes
            de leguminosas (<em>Fabaceae</em>) em simbiose mutualística.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 6 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Reprodução e Recombinação</span>

        <h2>6. Reprodução Bacteriana e Recombinação Genética</h2>

        <p>
          A principal forma de reprodução das bactérias é{" "}
          <strong>assexuada</strong>, por <strong>divisão binária</strong>{" "}
          (bipartição). Em condições ideais, uma bactéria pode se dividir a
          cada 20 minutos — gerando populações de milhões de células em
          poucas horas. Apesar de não haver reprodução sexual, as bactérias
          possuem três mecanismos de <strong>recombinação genética</strong>{" "}
          que aumentam a variabilidade e têm enorme importância evolutiva e
          clínica:
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 230" width="720" height="230" aria-label="Mecanismos de recombinação genética bacteriana">

            {/* --- TRANSFORMAÇÃO --- */}
            <rect x={10} y={20} width={200} height={190} rx={14} fill="#eff6ff" stroke="#3b82f6" strokeWidth={1.5} />
            <text x={110} y={44} textAnchor="middle" fontSize={13} fontWeight={800} fill="#1d4ed8">Transformação</text>
            {/* Bactéria morta liberando DNA */}
            <circle cx={60} cy={100} r={22} fill="#bfdbfe" stroke="#60a5fa" strokeWidth={1.5} />
            <text x={60} y={103} textAnchor="middle" fontSize={9} fill="#1e40af">morta</text>
            {/* Fragmentos */}
            {[[100,88],[112,102],[100,116]].map(([x,y],i)=>(
              <line key={i} x1={x} y1={y} x2={x+18} y2={y} stroke="#93c5fd" strokeWidth={2.5} strokeLinecap="round" />
            ))}
            {/* Bactéria receptora */}
            <ellipse cx={165} cy={103} rx={28} ry={18} fill="#dbeafe" stroke="#2563eb" strokeWidth={1.5} />
            <text x={165} y={106} textAnchor="middle" fontSize={9} fill="#1e40af">receptora</text>
            <text x={110} y={150} textAnchor="middle" fontSize={10} fill="#374151">Bactéria capta fragmentos</text>
            <text x={110} y={163} textAnchor="middle" fontSize={10} fill="#374151">de DNA do ambiente</text>
            <text x={110} y={190} textAnchor="middle" fontSize={9} fontStyle="italic" fill="#6b7280">Ex.: pneumococo (Griffith)</text>

            {/* --- CONJUGAÇÃO --- */}
            <rect x={258} y={20} width={200} height={190} rx={14} fill="#f0fdf4" stroke="#22c55e" strokeWidth={1.5} />
            <text x={358} y={44} textAnchor="middle" fontSize={13} fontWeight={800} fill="#15803d">Conjugação</text>
            <ellipse cx={308} cy={110} rx={30} ry={20} fill="#bbf7d0" stroke="#16a34a" strokeWidth={1.5} />
            <text x={308} y={113} textAnchor="middle" fontSize={9} fill="#14532d">doadora</text>
            <ellipse cx={408} cy={110} rx={30} ry={20} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.5} />
            <text x={408} y={113} textAnchor="middle" fontSize={9} fill="#14532d">receptora</text>
            {/* Pili sexual */}
            <line x1={338} y1={110} x2={378} y2={110} stroke="#16a34a" strokeWidth={3} />
            <text x={358} y={104} textAnchor="middle" fontSize={9} fill="#14532d">pili</text>
            {/* Plasmídeo transferido */}
            <ellipse cx={330} cy={95} rx={10} ry={7} fill="none" stroke="#a21caf" strokeWidth={1.8} />
            <text x={358} y={150} textAnchor="middle" fontSize={10} fill="#374151">Transferência direta</text>
            <text x={358} y={163} textAnchor="middle" fontSize={10} fill="#374151">de plasmídeo via pili</text>
            <text x={358} y={190} textAnchor="middle" fontSize={9} fontStyle="italic" fill="#6b7280">Spread da resistência</text>

            {/* --- TRANSDUÇÃO --- */}
            <rect x={506} y={20} width={200} height={190} rx={14} fill="#fef9ee" stroke="#f59e0b" strokeWidth={1.5} />
            <text x={606} y={44} textAnchor="middle" fontSize={13} fontWeight={800} fill="#92400e">Transdução</text>
            {/* Bacteriófago */}
            <polygon points="606,58 618,78 594,78" fill="#fde68a" stroke="#f59e0b" strokeWidth={1.5} />
            <line x1={606} y1={78} x2={606} y2={95} stroke="#f59e0b" strokeWidth={2} />
            {[[-10,0],[-6,8],[6,8],[10,0]].map(([dx,dy],i)=>(
              <line key={i} x1={606} y1={95} x2={606+dx} y2={95+dy} stroke="#f59e0b" strokeWidth={1.5} />
            ))}
            {/* Bactéria doadora */}
            <ellipse cx={556} cy={145} rx={28} ry={18} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.5} />
            <text x={556} y={148} textAnchor="middle" fontSize={9} fill="#78350f">doadora</text>
            {/* Bactéria receptora */}
            <ellipse cx={655} cy={145} rx={28} ry={18} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.5} />
            <text x={655} y={148} textAnchor="middle" fontSize={9} fill="#78350f">receptora</text>
            <text x={606} y={178} textAnchor="middle" fontSize={10} fill="#374151">Vírus carrega DNA</text>
            <text x={606} y={191} textAnchor="middle" fontSize={10} fill="#374151">entre bactérias</text>
            <text x={606} y={205} textAnchor="middle" fontSize={9} fontStyle="italic" fill="#6b7280">bacteriófago</text>
          </svg>
          <figcaption>
            Três mecanismos de recombinação genética em bactérias: transformação
            (DNA livre), conjugação (contato direto por pili) e transdução
            (veiculada por bacteriófago).
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Endósporos — sobrevivência extrema</h3>
          <p>
            Em condições adversas (escassez de nutrientes, calor, dessecação),
            certas bactérias gram-positivas — como <em>Bacillus</em> e{" "}
            <em>Clostridium</em> — formam <strong>endósporos</strong>:
            estruturas de dormência com espessa capa protetora de ácido
            dipicolínico e peptideoglicano. Os endósporos resistem a
            temperaturas de ebulição, UV e muitos desinfetantes.{" "}
            <strong>A autoclave</strong> (121 °C por 15–20 min sob pressão) é
            o único método seguro de destruí-los. Quando as condições melhoram,
            o endósporo germina e origina uma nova bactéria vegetativa.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 7 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Archaea</span>

        <h2>7. Arqueas: Os Procariontes Extremófilos</h2>

        <p>
          Embora visualmente semelhantes às bactérias, as{" "}
          <strong>arqueas</strong> diferem profundamente em bioquímica
          molecular. A análise do RNA ribossômico 16S revelou que são o grupo
          procarionte <strong>mais próximo dos eucariontes</strong> em termos
          evolutivos, o que levou à proposição do domínio Archaea por Woese e
          Fox (1977).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌋</span>
            <h3>Termófilas / Hipertermófilas</h3>
            <p>
              Vivem em vulcões submarinos e fontes hidrotermais a temperaturas
              acima de 80 °C. Ex.: <em>Thermus aquaticus</em> — fonte da
              enzima <strong>Taq polimerase</strong> usada na PCR.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧂</span>
            <h3>Halófilas Extremas</h3>
            <p>
              Vivem no Mar Morto e salinas com salinidade 10× maior que o mar.
              Ex.: <em>Halobacterium salinarum</em> — produz
              bacteriorodopsina, pigmento fotossintético sem clorofila.
            </p>
          </div>

          <div className="lesson-card">
            <span>⛽</span>
            <h3>Metanogênicas</h3>
            <p>
              Anaeróbias estritas que produzem CH₄ a partir de CO₂ + H₂.
              Habitam pântanos, rúmen de bovinos e intestino humano. Envolvidas
              no efeito estufa e em biorreatores de biogás.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧪</span>
            <h3>Acidófilas</h3>
            <p>
              Vivem em pH extremamente baixo (pH 0–3). Ex.:{" "}
              <em>Picrophilus torridus</em> — pH ótimo de crescimento próximo
              a zero.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Diferenças moleculares entre Bacteria e Archaea</h3>
          <p>
            Arqueas têm lipídios de membrana com <strong>ligações éter</strong>{" "}
            (bactérias têm ligações éster), parede celular sem
            peptideoglicano (possuem pseudopeptideoglicano ou proteínas S-layer),
            histonas semelhantes às eucarióticas e RNA polimerase com estrutura
            complexa — mais parecida com a dos eucariontes.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 8 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Ecologia e Economia</span>

        <h2>8. Importância Ecológica e Econômica das Bactérias</h2>

        <p>
          As bactérias são <strong>essenciais para o funcionamento da
          biosfera</strong>. Sem elas, os ciclos biogeoquímicos parariam, a
          matéria orgânica não seria reciclada e muitos ecossistemas colapsariam.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>♻️</span>
            <h3>Decomposição</h3>
            <p>
              Bactérias decompositoras (saprófitas) mineralizam a matéria
              orgânica morta, devolvendo nutrientes — C, N, P, S — ao ambiente.
              Fundamentais no ciclo do carbono.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌱</span>
            <h3>Ciclo do Nitrogênio</h3>
            <p>
              Fixadoras (N₂ → NH₃): <em>Rhizobium</em>, cianobactérias.
              Nitrificantes (NH₃ → NO₃⁻): <em>Nitrosomonas</em>,{" "}
              <em>Nitrobacter</em>. Desnitrificantes (NO₃⁻ → N₂):{" "}
              <em>Pseudomonas</em>. Papel indispensável na fertilidade dos solos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🧀</span>
            <h3>Indústria Alimentícia</h3>
            <p>
              Iogurte e coalhada (<em>Lactobacillus</em>, fermentação
              láctica), queijos, vinagre (<em>Acetobacter</em>), chucrute,
              kefir.
            </p>
          </div>

          <div className="lesson-card">
            <span>💊</span>
            <h3>Biotecnologia</h3>
            <p>
              <em>E. coli</em> modificada produz insulina humana, hormônio de
              crescimento, interferon e vacinas recombinantes. Base da
              engenharia genética (uso de plasmídeos como vetores).
            </p>
          </div>

          <div className="lesson-card">
            <span>🧼</span>
            <h3>Biorremediação</h3>
            <p>
              Bactérias degradam hidrocarbonetos de petróleo, pesticidas e
              metais pesados em solos e águas contaminadas.
            </p>
          </div>

          <div className="lesson-card">
            <span>🫀</span>
            <h3>Microbiota Humana</h3>
            <p>
              O intestino humano abriga &gt; 10¹³ bactérias (microbioma
              intestinal), essenciais para digestão, imunidade e proteção
              contra patógenos.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== SEÇÃO 9 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Doenças Bacterianas</span>

        <h2>9. Principais Bacterioses Humanas</h2>

        <p>
          As <strong>bacterioses</strong> são doenças causadas por bactérias
          patogênicas. O ENEM costuma cobrar agente etiológico, mecanismo de
          transmissão e medidas de prevenção. A tabela abaixo reúne as
          bacterioses mais frequentes em vestibulares:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Doença</th>
                <th>Agente Etiológico</th>
                <th>Transmissão</th>
                <th>Prevenção / Tratamento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tuberculose</td>
                <td>
                  <em>Mycobacterium tuberculosis</em> (bacilo de Koch)
                </td>
                <td>Aerossóis (tosse, espirro)</td>
                <td>Vacina BCG; antibióticos (rifampicina + isoniazida)</td>
              </tr>
              <tr>
                <td>Hanseníase (lepra)</td>
                <td>
                  <em>Mycobacterium leprae</em>
                </td>
                <td>Contato prolongado com secreções de doente não tratado</td>
                <td>Poliquimioterapia (rifampicina + dapsona + clofazimina)</td>
              </tr>
              <tr>
                <td>Tétano</td>
                <td>
                  <em>Clostridium tetani</em> (toxina tetanospasmina)
                </td>
                <td>Ferimentos contaminados com solo/fezes (endósporos)</td>
                <td>Vacina DTP/dT; soro antitetânico</td>
              </tr>
              <tr>
                <td>Cólera</td>
                <td>
                  <em>Vibrio cholerae</em>
                </td>
                <td>Água e alimentos contaminados com fezes</td>
                <td>Saneamento básico; reidratação oral; antibióticos</td>
              </tr>
              <tr>
                <td>Sífilis</td>
                <td>
                  <em>Treponema pallidum</em>
                </td>
                <td>Contato sexual; vertical (mãe-feto)</td>
                <td>Uso de preservativo; penicilina</td>
              </tr>
              <tr>
                <td>Gonorreia</td>
                <td>
                  <em>Neisseria gonorrhoeae</em>
                </td>
                <td>Contato sexual</td>
                <td>Preservativo; cefalosporinas</td>
              </tr>
              <tr>
                <td>Leptospirose</td>
                <td>
                  <em>Leptospira interrogans</em>
                </td>
                <td>Contato com água/solo contaminados com urina de ratos</td>
                <td>Saneamento; botas; doxiciclina</td>
              </tr>
              <tr>
                <td>Coqueluche</td>
                <td>
                  <em>Bordetella pertussis</em>
                </td>
                <td>Aerossóis</td>
                <td>Vacina DTP; azitromicina</td>
              </tr>
              <tr>
                <td>Meningite bacteriana</td>
                <td>
                  <em>Neisseria meningitidis</em>, <em>S. pneumoniae</em>
                </td>
                <td>Aerossóis; contato com secreções</td>
                <td>Vacinas meningocócica e pneumocócica; penicilina/ceftriaxona</td>
              </tr>
              <tr>
                <td>Febre tifoide</td>
                <td>
                  <em>Salmonella typhi</em>
                </td>
                <td>Água e alimentos contaminados</td>
                <td>Saneamento; vacinação; cloranfenicol/ciprofloxacino</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Resistência a Antibióticos — Crise Global</h3>
          <p>
            Antibióticos são substâncias que inibem o crescimento (bacteriostáticos)
            ou matam bactérias (bactericidas), mas são <strong>ineficazes contra
            vírus</strong>. O uso indiscriminado e a automedicação selecionam,
            por <strong>seleção natural darwiniana</strong>, linhagens com genes
            de resistência — frequentemente carregados em <strong>plasmídeos</strong>{" "}
            e disseminados por <strong>conjugação</strong> (resistência horizontal).
            As "superbactérias" — como <em>Staphylococcus aureus</em> resistente à
            meticilina (<strong>MRSA</strong>) e enterobactérias produtoras de
            carbapenemase (<strong>KPC</strong>) — representam uma emergência de
            saúde pública global reconhecida pela OMS.
          </p>
          <p>
            <strong>Estratégias de controle:</strong> uso racional de antibióticos
            somente com prescrição médica; completar o ciclo do tratamento; investir
            em novos fármacos; higiene hospitalar rigorosa; vigilância epidemiológica.
          </p>
        </div>
      </section>

      {/* ===================== EXERCÍCIOS ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — Básico, Intermediário, Avançado e Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Organização celular dos procariontes"
          statement={
            <p>
              Bactérias e arqueas são classificadas como procariontes. Qual das
              afirmativas descreve corretamente uma característica desse tipo de
              organização celular?
            </p>
          }
          options={[
            { letter: "a", text: "Possuem núcleo verdadeiro delimitado por membrana nuclear." },
            {
              letter: "b",
              text: "Carecem de núcleo definido por membrana e de organelas membranosas, tendo o DNA disperso no citoplasma.",
              correct: true,
            },
            { letter: "c", text: "Apresentam mitocôndrias funcionais para a respiração aeróbica." },
            { letter: "d", text: "São sempre multicelulares e formam tecidos especializados." },
          ]}
          resolution={
            <p>
              A principal característica procarionte é a <strong>ausência de
              núcleo delimitado por membrana</strong> (carioteca) e de organelas
              membranosas (mitocôndrias, retículo etc.). O DNA fica na região do
              nucleoide, no citoplasma. Os ribossomos existem, mas são do tipo
              70S, não separados por membrana.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Coloração de Gram e mecanismo de ação de antibióticos"
          statement={
            <p>
              A penicilina inibe a síntese de peptideoglicano, componente da
              parede celular bacteriana. Considerando a estrutura das bactérias
              gram-positivas e gram-negativas, qual conclusão é mais adequada
              sobre a ação desse antibiótico?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A penicilina age melhor em bactérias gram-negativas porque estas possuem parede mais espessa de peptideoglicano.",
            },
            {
              letter: "b",
              text: "A penicilina age preferencialmente em bactérias gram-positivas, pois nestas o peptideoglicano é mais exposto e espesso.",
              correct: true,
            },
            { letter: "c", text: "Ambos os grupos são igualmente afetados, pois o peptideoglicano é idêntico nos dois." },
            { letter: "d", text: "Bactérias gram-negativas são mais sensíveis porque não possuem membrana externa." },
          ]}
          resolution={
            <p>
              Bactérias <strong>gram-positivas</strong> têm parede espessa de
              peptideoglicano diretamente exposta ao meio extracelular, tornando-as
              mais suscetíveis à penicilina. Bactérias <strong>gram-negativas</strong>{" "}
              possuem uma <strong>membrana externa</strong> de lipopolissacarídeo
              (LPS) que dificulta a entrada da penicilina e protege a fina camada
              de peptideoglicano interna.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Recombinação genética e resistência bacteriana"
          statement={
            <p>
              Em um hospital, detectou-se que bactérias de espécies diferentes
              passaram a apresentar resistência ao mesmo antibiótico em curto
              intervalo de tempo. O mecanismo mais provável de disseminação dessa
              resistência é:
            </p>
          }
          options={[
            { letter: "a", text: "Transformação — captação de DNA livre secretado por bactérias resistentes do ambiente hospitalar." },
            {
              letter: "b",
              text: "Conjugação — transferência de plasmídeos carregando genes de resistência entre bactérias por contato direto via pili sexual.",
              correct: true,
            },
            { letter: "c", text: "Mutação espontânea simultânea em todas as bactérias presentes no ambiente." },
            { letter: "d", text: "Transdução — vírus transferindo genes de resistência, mas apenas entre bactérias da mesma espécie." },
          ]}
          resolution={
            <p>
              A <strong>conjugação</strong> é o mecanismo mais eficiente de
              disseminação horizontal de resistência: plasmídeos R (de
              resistência) podem ser transferidos entre bactérias de diferentes
              espécies por contato direto via pili. A transdução é limitada por
              especificidade do fago. Mutações simultâneas são improváveis. A
              transformação requer que o DNA esteja acessível no ambiente,
              sendo menos frequente em contexto hospitalar entre espécies
              distintas.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Leptospirose em enchentes (ENEM)"
          statement={
            <p>
              Após fortes chuvas e inundações em área urbana com saneamento
              precário, observou-se um surto de leptospirose. A doença é causada
              pela bactéria <em>Leptospira interrogans</em>, cuja principal fonte
              de contaminação são ratos infectados. Com base nessas informações,
              identifique a alternativa que descreve corretamente a forma de
              transmissão e a medida preventiva mais eficaz:
            </p>
          }
          options={[
            { letter: "a", text: "Transmissão por aerossóis; prevenção com máscara N95." },
            {
              letter: "b",
              text: "Contato de pele (especialmente com ferimentos) ou mucosas com água ou solo contaminados com urina de ratos; prevenção com saneamento básico, evitar contato com água de enchente e uso de EPIs.",
              correct: true,
            },
            { letter: "c", text: "Transmissão sexual; prevenção com uso de preservativo." },
            { letter: "d", text: "Ingestão de alimentos sólidos contaminados; prevenção com vacinação em massa da população." },
          ]}
          resolution={
            <p>
              A <em>Leptospira</em> penetra no organismo por <strong>pele
              lesionada ou mucosas</strong> em contato com água/solo contaminados
              com urina de ratos infectados — especialmente durante enchentes.
              As medidas preventivas incluem saneamento básico (esgoto e coleta
              de lixo), controle de roedores, uso de botas e luvas em áreas
              alagadas e antibioticoprofilaxia (doxiciclina) em exposição de
              alto risco.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Fixação biológica de N₂ e agricultura sustentável"
          statement={
            <p>
              Produtores de soja têm adotado a inoculação de sementes com a
              bactéria <em>Bradyrhizobium japonicum</em> em substituição parcial
              à adubação nitrogenada sintética. Esse processo é biologicamente
              possível porque:
            </p>
          }
          options={[
            { letter: "a", text: "A bactéria realiza fotossíntese oxigênica e fornece glicose às raízes da soja." },
            { letter: "b", text: "A bactéria decompõe matéria orgânica do solo, liberando nitrato para as plantas." },
            {
              letter: "c",
              text: "A bactéria vive em simbiose mutualística nos nódulos das raízes, onde a enzima nitrogenase converte N₂ atmosférico em amônio (NH₄⁺) assimilável pela planta.",
              correct: true,
            },
            { letter: "d", text: "A bactéria é um patógeno que estimula a produção de fertilizantes naturais pela própria planta." },
          ]}
          resolution={
            <p>
              <em>Bradyrhizobium</em> (e <em>Rhizobium</em>) estabelecem
              simbiose mutualística com leguminosas: a planta fornece
              carboidratos à bactéria e esta, abrigada nos nódulos radiculares,
              usa a enzima <strong>nitrogenase</strong> para reduzir N₂
              atmosférico a <strong>NH₄⁺</strong>, disponibilizando nitrogênio
              prontamente assimilável pela planta. Isso reduz a necessidade de
              fertilizantes nitrogenados sintéticos — de produção energética
              intensiva — representando ganho econômico e ambiental.
            </p>
          }
        />
      </section>
    </article>
  );
}
