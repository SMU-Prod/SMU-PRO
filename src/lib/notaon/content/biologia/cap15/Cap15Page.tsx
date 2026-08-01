"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap15Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 15</span>

          <h1>Alelos Múltiplos: Sistema ABO, Rh, MN e Incompatibilidade Sanguínea</h1>

          <p>
            Compreender os sistemas sanguíneos humanos é essencial tanto para a
            genética do ENEM quanto para entender fenômenos clínicos reais.
            Neste capítulo você vai dominar o conceito de <strong>alelos múltiplos</strong>,
            desvendar a lógica dos sistemas <strong>ABO</strong>, <strong>Rh</strong> e{" "}
            <strong>MN</strong>, decifrar as tabelas de compatibilidade transfusional e
            entender passo a passo a <strong>eritroblastose fetal</strong> — um dos
            temas mais recorrentes e mais mal compreendidos em vestibulares de
            todo o Brasil.
          </p>
        </div>
      </section>

      {/* ======================== SEÇÃO 1 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Conceito Fundamental</span>

        <h2>1. O Que São Alelos Múltiplos?</h2>

        <p>
          Na genética mendeliana clássica, cada característica é controlada por um
          loco gênico com apenas <strong>dois alelos</strong> possíveis (dominante e
          recessivo). A realidade biológica, porém, é mais rica: em muitas espécies
          um mesmo loco pode apresentar <strong>três ou mais variantes alélicas</strong>{" "}
          na população — fenômeno chamado de <strong>alelos múltiplos</strong> (ou
          polialelia).
        </p>

        <p>
          O ponto central — e fonte frequente de confusão — é que a existência de
          múltiplos alelos na <em>população</em> não viola a regra individual: cada
          organismo diplóide ainda recebe apenas <strong>dois alelos</strong> para o
          loco (um de cada genitor). O que varia é o <em>cardápio</em> de alelos
          disponíveis para formar esses pares.
        </p>

        <div className="lesson-highlight">
          <h3>Exemplo clássico — pelagem em coelhos</h3>
          <p>
            A coloração do pelo do coelho é determinada por quatro alelos no mesmo
            loco, em ordem decrescente de dominância:{" "}
            <strong>C {">"} c<sup>ch</sup> {">"} c<sup>h</sup> {">"} c</strong>.
            O alelo <em>C</em> produz pelagem selvagem (aguti); <em>c<sup>ch</sup></em>{" "}
            chinchila; <em>c<sup>h</sup></em> himalaia (extremidades escuras); e{" "}
            <em>c</em> (recessivo) albino. Um cruzamento C × c<sup>ch</sup> produz
            fenótipo aguti, mas c<sup>h</sup> × c produz himalaia — a relação de
            dominância define o fenótipo do par específico, não do conjunto todo.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧬</span>
            <h3>Loco único</h3>
            <p>Todos os alelos múltiplos ocupam o mesmo loco no cromossomo — nunca dois ao mesmo tempo no mesmo indivíduo.</p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Relações variadas</h3>
            <p>Entre alelos múltiplos pode haver dominância, recessividade ou codominância, dependendo do par analisado.</p>
          </div>
          <div className="lesson-card">
            <span>🩸</span>
            <h3>Exemplo humano</h3>
            <p>O sistema ABO é o caso de alelos múltiplos mais cobrado no ENEM, com três alelos: I<sup>A</sup>, I<sup>B</sup> e i.</p>
          </div>
        </div>
      </section>

      {/* ======================== SEÇÃO 2 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Sistema ABO</span>

        <h2>2. Sistema ABO — Genótipos, Antígenos e Anticorpos</h2>

        <p>
          O sistema ABO é determinado por um único loco autossômico com{" "}
          <strong>três alelos</strong>: <M>{"I^A"}</M>, <M>{"I^B"}</M> e <M>{"i"}</M>.
          Os alelos <M>{"I^A"}</M> e <M>{"I^B"}</M> são codominantes entre si e ambos
          são dominantes sobre <M>{"i"}</M>. Eles codificam enzimas
          (glicosiltransferases) que adicionam açúcares específicos à superfície das
          hemácias, formando os <strong>aglutinogênios</strong> (antígenos A e B). O
          alelo <M>{"i"}</M> é hipomórfico e não produz aglutinogênio funcional.
        </p>

        <p>
          O plasma de cada indivíduo contém <strong>aglutininas</strong> (anticorpos)
          naturais contra os antígenos que ele <em>não</em> possui nas hemácias. Essa
          regra é fundamental para entender a compatibilidade transfusional: ao receber
          sangue com antígenos estranhos, as aglutininas do receptor reconhecem e
          atacam as hemácias do doador, desencadeando reação de <strong>hemaglutinação</strong>{" "}
          — evento potencialmente fatal.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo sanguíneo</th>
                <th>Genótipo(s)</th>
                <th>Aglutinogênio (hemácia)</th>
                <th>Aglutinina (plasma)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>A</strong></td>
                <td><M>{"I^A I^A"}</M> ou <M>{"I^A i"}</M></td>
                <td>Antígeno A</td>
                <td>Anti-B</td>
              </tr>
              <tr>
                <td><strong>B</strong></td>
                <td><M>{"I^B I^B"}</M> ou <M>{"I^B i"}</M></td>
                <td>Antígeno B</td>
                <td>Anti-A</td>
              </tr>
              <tr>
                <td><strong>AB</strong></td>
                <td><M>{"I^A I^B"}</M></td>
                <td>Antígenos A e B</td>
                <td>Nenhuma</td>
              </tr>
              <tr>
                <td><strong>O</strong></td>
                <td><M>{"ii"}</M></td>
                <td>Nenhum</td>
                <td>Anti-A e Anti-B</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Relações de dominância resumidas</h3>
          <p>
            <M>{"I^A"}</M> e <M>{"I^B"}</M> são <strong>codominantes</strong> — o
            genótipo <M>{"I^A I^B"}</M> expressa os dois antígenos simultaneamente,
            gerando o fenótipo AB. Ambos dominam <M>{"i"}</M> por dominância
            completa. Portanto <M>{"I^A > i"}</M> e <M>{"I^B > i"}</M>.
          </p>
        </div>
      </section>

      {/* ======================== SEÇÃO 3 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Transfusão Sanguínea</span>

        <h2>3. Compatibilidade Transfusional e Doador/Receptor Universal</h2>

        <p>
          A regra básica da transfusão é: as <strong>aglutininas do receptor</strong>{" "}
          não podem encontrar os <strong>aglutinogênios do doador</strong> correspondentes.
          O encontro provoca aglutinação (formação de coágulos) e hemólise (ruptura das
          hemácias), levando a insuficiência renal e morte. A tabela abaixo mostra quem
          pode receber de quem, considerando apenas o sistema ABO:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo do Receptor</th>
                <th>Pode receber de</th>
                <th>Pode doar para</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>A</strong></td>
                <td>A, O</td>
                <td>A, AB</td>
              </tr>
              <tr>
                <td><strong>B</strong></td>
                <td>B, O</td>
                <td>B, AB</td>
              </tr>
              <tr>
                <td><strong>AB</strong></td>
                <td>A, B, AB, O</td>
                <td>AB</td>
              </tr>
              <tr>
                <td><strong>O</strong></td>
                <td>O</td>
                <td>A, B, AB, O</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 300" width="680" height="300" aria-label="Diagrama de compatibilidade transfusional entre tipos ABO">
            {/* Nós dos tipos */}
            {[
              { cx: 100, cy: 80,  label: "O",  fill: "#fef9c3", stroke: "#ca8a04" },
              { cx: 340, cy: 80,  label: "A",  fill: "#fee2e2", stroke: "#dc2626" },
              { cx: 100, cy: 220, label: "B",  fill: "#dbeafe", stroke: "#2563eb" },
              { cx: 340, cy: 220, label: "AB", fill: "#d1fae5", stroke: "#16a34a" },
            ].map((n) => (
              <g key={n.label}>
                <circle cx={n.cx} cy={n.cy} r={44} fill={n.fill} stroke={n.stroke} strokeWidth={2.5} />
                <text x={n.cx} y={n.cy + 6} textAnchor="middle" fontSize={20} fontWeight={800} fill="#1f2937">{n.label}</text>
              </g>
            ))}
            {/* Setas: O doa para A, B, AB */}
            <defs>
              <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6b7280" />
              </marker>
            </defs>
            {/* O -> A */}
            <line x1={144} y1={70} x2={296} y2={70} stroke="#6b7280" strokeWidth={1.8} markerEnd="url(#arr)" />
            {/* O -> B */}
            <line x1={100} y1={124} x2={100} y2={176} stroke="#6b7280" strokeWidth={1.8} markerEnd="url(#arr)" />
            {/* O -> AB */}
            <line x1={140} y1={104} x2={298} y2={196} stroke="#6b7280" strokeWidth={1.8} markerEnd="url(#arr)" />
            {/* A -> AB */}
            <line x1={340} y1={124} x2={340} y2={176} stroke="#6b7280" strokeWidth={1.8} markerEnd="url(#arr)" />
            {/* B -> AB */}
            <line x1={144} y1={220} x2={296} y2={220} stroke="#6b7280" strokeWidth={1.8} markerEnd="url(#arr)" />
            {/* A -> A (loop) indicando auto-doação */}
            {/* Legenda */}
            <text x={480} y={100} fontSize={13} fontWeight={700} fill="#374151">Legenda:</text>
            <line x1={480} y1={120} x2={530} y2={120} stroke="#6b7280" strokeWidth={2} markerEnd="url(#arr)" />
            <text x={538} y={124} fontSize={12} fill="#374151">pode doar para</text>
            <rect x={480} y={148} width={44} height={44} rx={8} fill="#fef9c3" stroke="#ca8a04" strokeWidth={2} />
            <text x={502} y={176} textAnchor="middle" fontSize={15} fontWeight={800} fill="#1f2937">O</text>
            <text x={534} y={167} fontSize={12} fill="#374151">doador universal</text>
            <rect x={480} y={210} width={44} height={44} rx={8} fill="#d1fae5" stroke="#16a34a" strokeWidth={2} />
            <text x={502} y={238} textAnchor="middle" fontSize={15} fontWeight={800} fill="#1f2937">AB</text>
            <text x={534} y={229} fontSize={12} fill="#374151">receptor universal</text>
          </svg>
          <figcaption>
            Diagrama de compatibilidade ABO (sem considerar Rh). O tipo O doa para todos;
            o tipo AB recebe de todos.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Ressalva clínica importante</h3>
          <p>
            Os termos <strong>"doador universal"</strong> (O−) e{" "}
            <strong>"receptor universal"</strong> (AB+) são <em>simplificações
            didáticas</em>. Na prática, o sangue possui dezenas de outros sistemas
            antigênicos além do ABO e do Rh. Por isso, na medicina moderna, toda
            transfusão é precedida de provas de compatibilidade laboratorial entre o
            sangue específico do doador e do receptor.
          </p>
        </div>
      </section>

      {/* ======================== SEÇÃO 4 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Fator Rh</span>

        <h2>4. Sistema Rh — O Antígeno D e Suas Consequências</h2>

        <p>
          O sistema Rh (abreviação de <em>Rhesus</em>, do macaco em que foi
          descoberto em 1940 por Landsteiner e Wiener) é o segundo mais importante
          em transfusões. Envolve mais de 50 antígenos, mas o principal é o{" "}
          <strong>antígeno D</strong>. Quem possui o antígeno D nas hemácias é{" "}
          <strong>Rh positivo (Rh+)</strong>; quem não o possui é{" "}
          <strong>Rh negativo (Rh−)</strong>.
        </p>

        <p>
          Diferentemente do sistema ABO, pessoas Rh− <strong>não</strong> possuem
          anticorpos anti-Rh de forma natural. Esses anticorpos só são produzidos
          após <strong>sensibilização</strong> — ou seja, após o primeiro contato com
          sangue Rh+. Esse detalhe é central para entender a eritroblastose fetal.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔴</span>
            <h3>Rh positivo (Rh+)</h3>
            <p>Possui o antígeno D na superfície das hemácias. Genótipos: <M>{"Rh Rh"}</M> (homozigoto) ou <M>{"Rh rh"}</M> (heterozigoto).</p>
          </div>
          <div className="lesson-card">
            <span>⚪</span>
            <h3>Rh negativo (Rh−)</h3>
            <p>Não possui o antígeno D. Genótipo: <M>{"rh rh"}</M> (recessivo homozigoto). Mais raro — cerca de 15% da população.</p>
          </div>
          <div className="lesson-card">
            <span>⚠️</span>
            <h3>Sensibilização</h3>
            <p>Após receber sangue Rh+ ou numa gravidez com feto Rh+, o indivíduo Rh− produz anti-Rh. Nas exposições seguintes, a resposta imune é mais rápida e intensa.</p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Rh na transfusão</h3>
          <p>
            Um indivíduo Rh− que recebe sangue Rh+ pela <em>primeira vez</em> pode
            não apresentar reação imediata grave, pois ainda não tem anti-Rh. Contudo,
            será <strong>sensibilizado</strong> e, em uma segunda transfusão Rh+,
            apresentará hemólise severa. Por isso, a transfusão deve respeitar sempre
            a compatibilidade Rh.
          </p>
        </div>
      </section>

      {/* ======================== SEÇÃO 5 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Sistema MN</span>

        <h2>5. Sistema Sanguíneo MN — Codominância Pura</h2>

        <p>
          O sistema MN é um excelente exemplo didático de <strong>codominância</strong>.
          Determinado por dois alelos no loco <em>GYPA</em>, que codificam glicoforinas
          (proteínas de membrana da hemácia): o alelo <M>{"L^M"}</M> produz a glicoforina
          M (antígeno M) e o alelo <M>{"L^N"}</M> produz a glicoforina N (antígeno N).
          Não há dominância entre eles: cada alelo se exprime de forma independente.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Genótipo</th>
                <th>Fenótipo (tipo MN)</th>
                <th>Antígeno(s) nas hemácias</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><M>{"L^M L^M"}</M></td>
                <td><strong>M</strong></td>
                <td>Apenas M</td>
              </tr>
              <tr>
                <td><M>{"L^N L^N"}</M></td>
                <td><strong>N</strong></td>
                <td>Apenas N</td>
              </tr>
              <tr>
                <td><M>{"L^M L^N"}</M></td>
                <td><strong>MN</strong></td>
                <td>M e N simultaneamente</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          O sistema MN <strong>não tem relevância clínica</strong> para transfusões
          em humanos (anticorpos anti-M e anti-N raramente causam reações graves),
          mas é muito útil em <strong>testes de paternidade</strong> e em estudos de
          genética de populações por sua expressão direta do genótipo no fenótipo.
        </p>

        <div className="lesson-highlight">
          <h3>Exercício mental rápido</h3>
          <p>
            Um casal com fenótipos M e N — quais os fenótipos possíveis dos filhos?
            Genótipos dos pais: <M>{"L^M L^M"}</M> × <M>{"L^N L^N"}</M>.
            Todos os filhos serão <M>{"L^M L^N"}</M> → fenótipo <strong>MN</strong>.
            100% dos descendentes serão tipo MN.
          </p>
        </div>
      </section>

      {/* ======================== SEÇÃO 6 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Eritroblastose Fetal</span>

        <h2>6. Eritroblastose Fetal (DHRN) — Mecanismo Completo</h2>

        <p>
          A <strong>Doença Hemolítica do Recém-Nascido (DHRN)</strong>, popularmente
          chamada de eritroblastose fetal, é consequência de uma incompatibilidade
          imunológica entre mãe e feto envolvendo o fator Rh. Compreendê-la exige
          entender dois momentos: a <em>sensibilização materna</em> e o{" "}
          <em>ataque às hemácias fetais</em>.
        </p>

        <div className="lesson-highlight">
          <h3>Condição necessária</h3>
          <p>
            Para que ocorra DHRN clássica: <strong>mãe Rh−</strong> +{" "}
            <strong>feto Rh+</strong>. O pai deve ser Rh+ (podendo ser homozigoto
            Rh Rh ou heterozigoto Rh rh).
          </p>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 700 320" width="700" height="320" aria-label="Esquema da eritroblastose fetal em duas gestações">
            {/* === 1ª GESTAÇÃO === */}
            <rect x={10} y={10} width={320} height={290} rx={16} fill="#eff6ff" stroke="#93c5fd" strokeWidth={2} />
            <text x={170} y={36} textAnchor="middle" fontSize={14} fontWeight={800} fill="#1e3a8a">1ª Gestação</text>

            {/* Útero */}
            <ellipse cx={170} cy={170} rx={90} ry={100} fill="#fde8d8" stroke="#f97316" strokeWidth={2} />
            {/* Feto Rh+ */}
            <circle cx={170} cy={180} r={40} fill="#fca5a5" stroke="#dc2626" strokeWidth={2} />
            <text x={170} y={175} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7f1d1d">Feto</text>
            <text x={170} y={190} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7f1d1d">Rh+</text>

            {/* Seta parto */}
            <path d="M 170 270 L 170 295" stroke="#f97316" strokeWidth={2} markerEnd="url(#arr)" />
            <text x={200} y={285} fontSize={11} fill="#ea580c">parto →</text>
            <text x={20} y={250} fontSize={11} fill="#374151">Pequena mistura</text>
            <text x={20} y={264} fontSize={11} fill="#374151">de sangue no parto.</text>
            <text x={20} y={278} fontSize={11} fill="#374151">Mãe produz anti-Rh.</text>

            {/* Mãe Rh- label */}
            <text x={170} y={68} textAnchor="middle" fontSize={11} fill="#1e40af">Mãe Rh− (sem anti-Rh)</text>

            {/* === 2ª GESTAÇÃO === */}
            <rect x={360} y={10} width={320} height={290} rx={16} fill="#fff1f2" stroke="#fca5a5" strokeWidth={2} />
            <text x={520} y={36} textAnchor="middle" fontSize={14} fontWeight={800} fill="#991b1b">2ª Gestação</text>

            {/* Útero */}
            <ellipse cx={520} cy={170} rx={90} ry={100} fill="#fde8d8" stroke="#f97316" strokeWidth={2} />
            {/* Feto Rh+ afetado */}
            <circle cx={520} cy={180} r={40} fill="#fca5a5" stroke="#dc2626" strokeWidth={2} />
            <text x={520} y={175} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7f1d1d">Feto</text>
            <text x={520} y={190} textAnchor="middle" fontSize={11} fontWeight={700} fill="#7f1d1d">Rh+</text>

            {/* Anticorpos atravessando */}
            {[0, 1, 2, 3].map((i) => (
              <path key={i}
                d={`M ${480 + i * 10} 130 L ${500 + i * 6} 160`}
                stroke="#dc2626" strokeWidth={1.5} strokeDasharray="3 2"
                markerEnd="url(#arr)" />
            ))}
            <text x={370} y={90} fontSize={11} fill="#991b1b">Anti-Rh</text>
            <text x={370} y={104} fontSize={11} fill="#991b1b">atravessa placenta</text>

            <text x={370} y={248} fontSize={11} fill="#374151">Anti-Rh ataca</text>
            <text x={370} y={262} fontSize={11} fill="#374151">hemácias fetais.</text>
            <text x={370} y={276} fontSize={11} fill="#374151">Hemólise, anemia, icterícia.</text>
          </svg>
          <figcaption>
            Esquema da DHRN: na 1ª gestação ocorre a sensibilização materna; na 2ª
            gestação (ou em transfusão posterior), os anticorpos anti-Rh atacam as
            hemácias Rh+ do feto.
          </figcaption>
        </figure>

        <p>
          No momento do <strong>parto</strong> (ou de um aborto espontâneo/provocado),
          uma pequena quantidade de sangue fetal pode entrar na circulação materna.
          O sistema imune da mãe Rh− reconhece o antígeno D como estranho e produz
          anticorpos <strong>IgG anti-Rh</strong>. Na segunda gestação com feto Rh+,
          esses anticorpos IgG (que, diferentemente das IgM, conseguem atravessar a
          placenta) entram na circulação fetal e destroem as hemácias do bebê.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Consequência</th>
                <th>Mecanismo</th>
                <th>Manifestação clínica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anemia hemolítica</td>
                <td>Destruição das hemácias pelo anti-Rh</td>
                <td>Palidez, fraqueza, taquicardia fetal</td>
              </tr>
              <tr>
                <td>Eritroblastose</td>
                <td>Medula e fígado liberam eritroblastos imaturos</td>
                <td>Células vermelhas nucleadas no sangue</td>
              </tr>
              <tr>
                <td>Icterícia neonatal</td>
                <td>Excesso de bilirrubina da hemólise</td>
                <td>Pele e esclera amareladas (kernicterus grave)</td>
              </tr>
              <tr>
                <td>Hidropsia fetal</td>
                <td>Insuficiência cardíaca por anemia grave</td>
                <td>Edema generalizado, risco de morte</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Prevenção — Imunoglobulina Anti-Rh (RhoGAM)</h3>
          <p>
            A prevenção é feita com a administração de <strong>imunoglobulina anti-Rh
            (soro anti-Rh)</strong> à mãe Rh− até 72 horas após o parto, aborto ou
            qualquer procedimento que possa misturar sangue materno e fetal. Os
            anticorpos do soro destroem imediatamente as hemácias Rh+ fetais que
            entraram na circulação materna, <em>antes</em> que o sistema imune da mãe
            tenha tempo de montar uma resposta de memória. Assim, ela não se sensibiliza
            e a próxima gestação fica protegida.
          </p>
        </div>
      </section>

      {/* ======================== SEÇÃO 7 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Mapa Integrador</span>

        <h2>7. Comparativo dos Sistemas Sanguíneos</h2>

        <p>
          Para fixar as diferenças entre os três sistemas, observe a tabela
          comparativa a seguir. Ela consolida os pontos mais cobrados em provas:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>ABO</th>
                <th>Rh</th>
                <th>MN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>N.º de alelos</td>
                <td>3 (<M>{"I^A, I^B, i"}</M>)</td>
                <td>2 (Rh, rh)</td>
                <td>2 (<M>{"L^M, L^N"}</M>)</td>
              </tr>
              <tr>
                <td>Relação de dominância</td>
                <td><M>{"I^A"}</M> e <M>{"I^B"}</M> codominantes; ambos dominam <em>i</em></td>
                <td>Rh domina rh</td>
                <td>Codominância pura</td>
              </tr>
              <tr>
                <td>Anticorpos naturais</td>
                <td>Sim (anti-A e/ou anti-B)</td>
                <td>Não (surgem por sensibilização)</td>
                <td>Raramente relevantes</td>
              </tr>
              <tr>
                <td>Relevância transfusional</td>
                <td>Alta — fundamental</td>
                <td>Alta — fundamental</td>
                <td>Baixa</td>
              </tr>
              <tr>
                <td>Relevância gestacional</td>
                <td>Moderada (incompatibilidade ABO)</td>
                <td>Alta — DHRN clássica</td>
                <td>Nenhuma prática</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🩸</span>
            <h3>O− é doador universal</h3>
            <p>Sem antígenos A, B nem Rh — o sistema imune de qualquer receptor não produz reação contra essas hemácias.</p>
          </div>
          <div className="lesson-card">
            <span>🏥</span>
            <h3>AB+ é receptor universal</h3>
            <p>Possui os três antígenos e não produz anticorpos contra nenhum deles — aceita hemácias de qualquer tipo ABO/Rh.</p>
          </div>
          <div className="lesson-card">
            <span>🧪</span>
            <h3>Testes sempre!</h3>
            <p>Na prática clínica, provas cruzadas de compatibilidade são obrigatórias — "universal" é só um conceito didático.</p>
          </div>
        </div>
      </section>

      {/* ======================== SEÇÃO 8 ======================== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — Alelos Múltiplos e Sistemas Sanguíneos</h2>

        <Exercise
          level="Básico"
          title="1. Genótipos do sistema ABO"
          statement={
            <p>
              Uma mulher do tipo sanguíneo A (heterozigota) e um homem do tipo B
              (heterozigoto) esperam um filho. Quais tipos sanguíneos são possíveis
              nos descendentes?
            </p>
          }
          options={[
            { letter: "a", text: "Apenas A e B" },
            { letter: "b", text: "A, B, AB e O", correct: true },
            { letter: "c", text: "Apenas AB e O" },
            { letter: "d", text: "A, B e AB, nunca O" },
          ]}
          resolution={
            <p>
              A mãe é <M>{"I^A i"}</M> e o pai é <M>{"I^B i"}</M>. O cruzamento
              produz: <M>{"I^A I^B"}</M> (AB), <M>{"I^A i"}</M> (A), <M>{"I^B i"}</M>{" "}
              (B) e <M>{"ii"}</M> (O) — cada um com probabilidade 1/4. Portanto, todos
              os quatro tipos são possíveis.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Compatibilidade transfusional"
          statement={
            <p>
              Um paciente tipo B negativo (B−) precisa de transfusão de urgência e o
              banco de sangue dispõe apenas dos tipos: A+, AB+, O+ e O−. Qual é a
              única opção compatível sem risco de reação imediata grave?
            </p>
          }
          options={[
            { letter: "a", text: "A+" },
            { letter: "b", text: "AB+" },
            { letter: "c", text: "O+" },
            { letter: "d", text: "O−", correct: true },
          ]}
          resolution={
            <p>
              O paciente B− possui anticorpos anti-A e anti-Rh (se sensibilizado) ou
              pode se sensibilizar ao Rh+. O único sangue sem antígeno A nem antígeno Rh
              é o <strong>O−</strong>. O+ é incompatível pelo antígeno Rh; A+ e AB+ são
              incompatíveis pelo antígeno A e/ou Rh.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Investigação de paternidade com sistema MN"
          statement={
            <p>
              Uma criança apresenta fenótipo sanguíneo MN. A mãe é do tipo M e o
              suposto pai é do tipo N. A criança pode ser biologicamente filha desse
              homem? Justifique pela genética do sistema MN.
            </p>
          }
          options={[
            { letter: "a", text: "Não, pois dois pais diferentes não podem gerar filho MN" },
            {
              letter: "b",
              text: "Sim, pois a mãe M fornece L^M e o pai N fornece L^N, originando o heterozigoto L^M L^N (fenótipo MN)",
              correct: true,
            },
            { letter: "c", text: "Não, pois o alelo M é recessivo e se perderia" },
            { letter: "d", text: "Sim, mas apenas se a mãe for heterozigota MN" },
          ]}
          resolution={
            <p>
              A mãe tipo M tem genótipo <M>{"L^M L^M"}</M> e o pai tipo N tem genótipo{" "}
              <M>{"L^N L^N"}</M>. O cruzamento <M>{"L^M L^M"}</M> × <M>{"L^N L^N"}</M>{" "}
              produz <em>todos</em> os filhos com genótipo <M>{"L^M L^N"}</M>, ou seja,
              fenótipo MN. Portanto, a paternidade é <strong>compatível</strong> — o
              resultado é, inclusive, o esperado.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. ENEM — Eritroblastose fetal na prática"
          statement={
            <p>
              Uma gestante Rh− está no segundo mês da sua segunda gravidez. O exame
              de sangue revela altos títulos de anticorpos IgG anti-Rh no soro
              materno. O médico explica que o bebê, se for Rh+, corre risco de
              desenvolver DHRN grave. Qual das alternativas descreve CORRETAMENTE
              o mecanismo pelo qual o bebê pode ser afetado?
            </p>
          }
          options={[
            { letter: "a", text: "Os anticorpos maternos IgM atravessam a placenta e destroem as hemácias fetais" },
            {
              letter: "b",
              text: "Os anticorpos IgG anti-Rh, por serem pequenos, atravessam a placenta e se ligam às hemácias Rh+ do feto, ativando a hemólise",
              correct: true,
            },
            { letter: "c", text: "O feto produz anticorpos contra as hemácias da mãe, causando autoimunidade" },
            { letter: "d", text: "A incompatibilidade ABO entre mãe e feto é responsável pela hemólise" },
          ]}
          resolution={
            <p>
              Os anticorpos produzidos na memória imune da mãe são da classe{" "}
              <strong>IgG</strong>, que atravessa ativamente a barreira placentária (ao
              contrário das IgM, grandes demais para isso). Ao entrar na circulação
              fetal, a IgG anti-Rh se liga ao antígeno D das hemácias Rh+ do bebê,
              ativando o sistema complemento e macrófagos esplênicos que destroem as
              hemácias — gerando anemia hemolítica, eritroblastose e icterícia.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. ENEM — Banco de sangue e doação"
          statement={
            <p>
              Em uma campanha de doação de sangue, uma jovem descobre que seu tipo
              é AB+. O técnico de enfermagem explica: "Seu sangue é raro para doação,
              mas você é a receptora ideal!" A afirmação está correta porque o tipo
              AB+ possui:
            </p>
          }
          options={[
            { letter: "a", text: "Anticorpos anti-A, anti-B e anti-Rh, impedindo reações em qualquer receptor" },
            {
              letter: "b",
              text: "Os antígenos A, B e Rh nas hemácias e nenhum anticorpo contra esses antígenos no plasma, aceitando qualquer doação",
              correct: true,
            },
            { letter: "c", text: "Nenhum antígeno, sendo inerte para qualquer receptor" },
            { letter: "d", text: "Apenas anticorpos anti-Rh, limitando a compatibilidade" },
          ]}
          resolution={
            <p>
              O tipo AB+ possui os <strong>antígenos A, B e Rh</strong> nas hemácias —
              por isso não produz anticorpos contra eles (o organismo não ataca o que
              reconhece como próprio). Com o plasma livre de anti-A, anti-B e anti-Rh,
              o indivíduo AB+ aceita hemácias de qualquer tipo ABO/Rh sem reação —
              daí o título de "receptor universal". Para doação, porém, suas hemácias
              com múltiplos antígenos só são aceitas por outro AB+ sem risco.
            </p>
          }
        />
      </section>
    </article>
  );
}
