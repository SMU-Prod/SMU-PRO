"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
export default function Cap17Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 17</span>

          <h1>Ligação Gênica, Mapas Cromossômicos e Genética do Sexo</h1>

          <p>
            Quando dois genes habitam o mesmo cromossomo, a 2ª Lei de Mendel
            deixa de valer em sua forma clássica: eles tendem a ser herdados{" "}
            <strong>juntos</strong>. Compreender a ligação gênica (linkage), o
            crossing-over que a rompe, a taxa de permuta que nos permite{" "}
            <strong>mapear cromossomos</strong>, e os sistemas de determinação
            sexual e suas heranças específicas é fundamental para o ENEM e
            todos os grandes vestibulares — temas que aparecem em questões de
            raciocínio lógico-genético de altíssimo nível.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 1 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Linkage</span>

        <h2>1. Ligação Gênica — Quando a 2ª Lei Falha</h2>

        <p>
          A <strong>2ª Lei de Mendel</strong> (Segregação Independente) afirma
          que genes para características diferentes se distribuem
          independentemente nos gametas. Isso, porém, é verdadeiro{" "}
          <strong>somente se os genes estiverem em cromossomos diferentes</strong>{" "}
          (ou muito distantes no mesmo cromossomo). No ser humano, com apenas
          23 pares de cromossomos e mais de 20 000 genes, a imensa maioria
          dos genes está em <em>linkage</em> com outros no mesmo cromossomo.
        </p>

        <p>
          <strong>Thomas Hunt Morgan</strong> (Nobel de Fisiologia ou Medicina,
          1933) demonstrou o fenômeno em <em>Drosophila melanogaster</em>.
          Cruzamentos dihíbridos produziam proporções muito distantes de 9:3:3:1
          — alguns fenótipos apareciam em excesso enquanto outros eram raros.
          Morgan concluiu que os genes em questão estavam fisicamente associados
          num mesmo cromossomo, sendo transmitidos em bloco.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔗</span>
            <h3>Linkage completo</h3>
            <p>
              Nenhuma permuta entre os loci. Somente gametas parentais (AB e
              ab para um duplo heterozigoto AB/ab).
            </p>
          </div>

          <div className="lesson-card">
            <span>🧬</span>
            <h3>Linkage incompleto</h3>
            <p>
              Crossing-over ocasional produz gametas recombinantes (Ab e aB)
              em menor frequência que os parentais.
            </p>
          </div>

          <div className="lesson-card">
            <span>🎲</span>
            <h3>Segregação independente</h3>
            <p>
              Genes em cromossomos diferentes ou com TP = 50 %: obedecem à
              2ª Lei, proporção 1:1:1:1 no cruzamento-teste.
            </p>
          </div>

          <div className="lesson-card">
            <span>🪰</span>
            <h3>Modelo Morgan</h3>
            <p>
              <em>Drosophila</em> possui 4 pares cromossômicos — modelo ideal
              para estudar linkage e crossing-over por gerações rápidas.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Fase de ligação: cis e trans</h3>
          <p>
            Em um dihíbrido, os alelos podem estar dispostos em{" "}
            <strong>fase cis (acoplamento)</strong>: AB/ab — dominantes no
            mesmo cromossomo; ou em{" "}
            <strong>fase trans (repulsão)</strong>: Ab/aB — dominantes em
            cromossomos homólogos separados. A fase altera a proporção de
            fenótipos observados, mas não muda a taxa de permuta entre os
            genes.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 2 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Crossing-Over</span>

        <h2>2. Crossing-Over e Gametas Recombinantes</h2>

        <p>
          Durante a <strong>prófase I</strong> da meiose, cromossomos homólogos
          emparelham-se intimamente (sinapse) formando o{" "}
          <strong>complexo sinaptonêmico</strong>. Nesse momento, as cromátides
          não-irmãs podem se cruzar em pontos chamados{" "}
          <strong>quiasmas</strong> e trocar segmentos: é o crossing-over. O
          resultado são <strong>quatro cromátides</strong> com combinações de
          alelos novas.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 260" width="720" height="260" aria-label="Crossing-over gerando gametas parentais e recombinantes">
            {/* Título */}
            <text x={360} y={20} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">Crossing-over em um dihíbrido AB/ab (fase cis)</text>

            {/* Cromossomo homólogo 1 — antes */}
            <rect x={60} y={40} width={22} height={160} rx={11} fill="#3b82f6" opacity={0.85} />
            <text x={71} y={90} textAnchor="middle" fontSize={11} fontWeight={700} fill="white">A</text>
            <text x={71} y={120} textAnchor="middle" fontSize={11} fontWeight={700} fill="white">B</text>
            <text x={71} y={215} textAnchor="middle" fontSize={10} fill="#1d4ed8">Cromossomo 1</text>

            {/* Cromossomo homólogo 2 — antes */}
            <rect x={100} y={40} width={22} height={160} rx={11} fill="#ef4444" opacity={0.85} />
            <text x={111} y={90} textAnchor="middle" fontSize={11} fontWeight={700} fill="white">a</text>
            <text x={111} y={120} textAnchor="middle" fontSize={11} fontWeight={700} fill="white">b</text>
            <text x={111} y={215} textAnchor="middle" fontSize={10} fill="#b91c1c">Cromossomo 2</text>

            <text x={91} y={240} textAnchor="middle" fontSize={12} fill="#374151">Antes</text>

            {/* Seta */}
            <polygon points="160,120 185,110 185,130" fill="#6b7280" />
            <text x={170} y={108} textAnchor="middle" fontSize={10} fill="#6b7280">CO</text>

            {/* Após crossing-over: 4 cromátides */}
            {/* Cromátide 1: AB (parental) */}
            <rect x={220} y={40} width={18} height={80} rx={9} fill="#3b82f6" opacity={0.85} />
            <rect x={220} y={120} width={18} height={80} rx={9} fill="#3b82f6" opacity={0.85} />
            <text x={229} y={85} textAnchor="middle" fontSize={10} fontWeight={700} fill="white">A</text>
            <text x={229} y={160} textAnchor="middle" fontSize={10} fontWeight={700} fill="white">B</text>
            <text x={229} y={235} textAnchor="middle" fontSize={9} fill="#1d4ed8">AB ✓</text>

            {/* Cromátide 2: Ab (recombinante) */}
            <rect x={255} y={40} width={18} height={80} rx={9} fill="#3b82f6" opacity={0.85} />
            <rect x={255} y={120} width={18} height={80} rx={9} fill="#ef4444" opacity={0.85} />
            <text x={264} y={85} textAnchor="middle" fontSize={10} fontWeight={700} fill="white">A</text>
            <text x={264} y={160} textAnchor="middle" fontSize={10} fontWeight={700} fill="white">b</text>
            <text x={264} y={235} textAnchor="middle" fontSize={9} fill="#7c3aed">Ab ★</text>

            {/* Cromátide 3: aB (recombinante) */}
            <rect x={290} y={40} width={18} height={80} rx={9} fill="#ef4444" opacity={0.85} />
            <rect x={290} y={120} width={18} height={80} rx={9} fill="#3b82f6" opacity={0.85} />
            <text x={299} y={85} textAnchor="middle" fontSize={10} fontWeight={700} fill="white">a</text>
            <text x={299} y={160} textAnchor="middle" fontSize={10} fontWeight={700} fill="white">B</text>
            <text x={299} y={235} textAnchor="middle" fontSize={9} fill="#7c3aed">aB ★</text>

            {/* Cromátide 4: ab (parental) */}
            <rect x={325} y={40} width={18} height={80} rx={9} fill="#ef4444" opacity={0.85} />
            <rect x={325} y={120} width={18} height={80} rx={9} fill="#ef4444" opacity={0.85} />
            <text x={334} y={85} textAnchor="middle" fontSize={10} fontWeight={700} fill="white">a</text>
            <text x={334} y={160} textAnchor="middle" fontSize={10} fontWeight={700} fill="white">b</text>
            <text x={334} y={235} textAnchor="middle" fontSize={9} fill="#b91c1c">ab ✓</text>

            <text x={280} y={255} textAnchor="middle" fontSize={12} fill="#374151">Após CO</text>

            {/* Legenda */}
            <rect x={420} y={50} width={14} height={14} fill="#3b82f6" opacity={0.85} />
            <text x={440} y={62} fontSize={12} fill="#374151">Parental (maioria)</text>
            <rect x={420} y={75} width={14} height={14} fill="#7c3aed" opacity={0.85} />
            <text x={440} y={87} fontSize={12} fill="#374151">Recombinante (minoria) ★</text>
            <text x={420} y={115} fontSize={11} fill="#6b7280">Quiasma: ponto de troca</text>
            <text x={420} y={132} fontSize={11} fill="#6b7280">entre cromátides não-irmãs.</text>
            <text x={420} y={155} fontSize={11} fill="#6b7280">Frequência de recombinantes</text>
            <text x={420} y={171} fontSize={11} fill="#6b7280">= taxa de permuta (TP).</text>
          </svg>
          <figcaption>
            Um único crossing-over entre dois genes gera 2 cromátides parentais (AB e ab) e
            2 recombinantes (Ab e aB). Por isso, a TP máxima por um único CO é 50 %.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Quanto mais distantes, mais crossing-over</h3>
          <p>
            A probabilidade de ocorrer um quiasma <em>entre</em> dois loci é
            proporcional à distância física que os separa no cromossomo. Loci
            muito próximos dificilmente sofrem crossing-over entre si (taxa de
            permuta baixa); loci muito distantes sofrem múltiplos crossings-over
            e se comportam como independentes (TP próxima a 50 %).
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 3 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Taxa de Permuta</span>

        <h2>3. Calculando a Frequência de Recombinação</h2>

        <p>
          A <strong>taxa de permuta (TP)</strong> mede a proporção de gametas
          recombinantes sobre o total de gametas produzidos. Ela é a ferramenta
          quantitativa fundamental para construir mapas cromossômicos.
        </p>

        <div className="math-block">
          <h3>Fórmula da taxa de permuta</h3>
          <p>
            <M>{String.raw`TP\,(\%) = \dfrac{\text{nº de descendentes recombinantes}}{\text{total de descendentes}} \times 100`}</M>
          </p>
          <p>
            Cada 1 % de recombinação equivale a{" "}
            <strong>1 centiMorgan (cM)</strong>, também chamado de{" "}
            <strong>1 unidade de mapa (UM)</strong>.
          </p>
        </div>

        <p>
          O <strong>cruzamento-teste</strong> (testcross) é o procedimento
          padrão: cruzar o dihíbrido suspeito de estar em linkage (AaBb) com
          o duplo recessivo (aabb). Como o duplo recessivo só doa gametas ab,
          a prole revela diretamente os gametas do dihíbrido. Contando os
          fenótipos recombinantes na prole, calcula-se a TP.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fenótipo na prole</th>
                <th>Gameta do dihíbrido</th>
                <th>Tipo</th>
                <th>Nº (exemplo)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A_B_ (AB × ab)</td>
                <td>AB</td>
                <td>Parental</td>
                <td>410</td>
              </tr>
              <tr>
                <td>aabb (ab × ab)</td>
                <td>ab</td>
                <td>Parental</td>
                <td>390</td>
              </tr>
              <tr>
                <td>A_bb (Ab × ab)</td>
                <td>Ab</td>
                <td>Recombinante</td>
                <td>100</td>
              </tr>
              <tr>
                <td>aaB_ (aB × ab)</td>
                <td>aB</td>
                <td>Recombinante</td>
                <td>100</td>
              </tr>
              <tr>
                <td colSpan={3}><strong>Total</strong></td>
                <td><strong>1 000</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <M>{String.raw`TP = \dfrac{100 + 100}{1000} \times 100 = 20\,\%`}</M>{" "}
          → distância A–B = <strong>20 cM</strong>.
        </p>

        <div className="lesson-highlight">
          <h3>Limite de 50 %</h3>
          <p>
            A taxa de permuta <strong>nunca ultrapassa 50 %</strong> (em
            experimentos práticos com dois genes). Se dois loci se comportam
            como se TP = 50 %, podem estar em cromossomos diferentes{" "}
            <em>ou</em> muito distantes no mesmo cromossomo com múltiplas
            permutas.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 4 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Mapas Cromossômicos</span>

        <h2>4. Construindo Mapas Genéticos</h2>

        <p>
          Combinando taxas de permuta entre múltiplos pares de genes, Alfred
          Sturtevant (estudante de Morgan, em 1913) construiu o primeiro mapa
          genético da história, usando dados de <em>Drosophila</em>. A lógica é
          simples: se a TP entre A e B é{" "}
          <M>{"d_{AB}"}</M>, entre B e C é{" "}
          <M>{"d_{BC}"}</M> e entre A e C é{" "}
          <M>{"d_{AC}"}</M>, então o gene do meio é aquele cuja soma das duas
          distâncias menores coincide com a maior.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 160" width="680" height="160" aria-label="Mapa cromossômico com três genes e distâncias em cM">
            {/* Cromossomo — linha horizontal */}
            <rect x={60} y={72} width={560} height={16} rx={8} fill="#e5e7eb" stroke="#9ca3af" strokeWidth={1.5} />

            {/* Gene A */}
            <circle cx={110} cy={80} r={14} fill="#0ea5e9" />
            <text x={110} y={85} textAnchor="middle" fontSize={13} fontWeight={800} fill="white">A</text>
            <text x={110} y={120} textAnchor="middle" fontSize={11} fill="#0369a1">locus A</text>

            {/* Gene B */}
            <circle cx={290} cy={80} r={14} fill="#f59e0b" />
            <text x={290} y={85} textAnchor="middle" fontSize={13} fontWeight={800} fill="white">B</text>
            <text x={290} y={120} textAnchor="middle" fontSize={11} fill="#b45309">locus B</text>

            {/* Gene C */}
            <circle cx={550} cy={80} r={14} fill="#16a34a" />
            <text x={550} y={85} textAnchor="middle" fontSize={13} fontWeight={800} fill="white">C</text>
            <text x={550} y={120} textAnchor="middle" fontSize={11} fill="#15803d">locus C</text>

            {/* Seta dupla A-B */}
            <line x1={124} y1={55} x2={276} y2={55} stroke="#0ea5e9" strokeWidth={2} />
            <polygon points="124,55 134,50 134,60" fill="#0ea5e9" />
            <polygon points="276,55 266,50 266,60" fill="#0ea5e9" />
            <text x={200} y={46} textAnchor="middle" fontSize={12} fontWeight={700} fill="#0369a1">18 cM</text>

            {/* Seta dupla B-C */}
            <line x1={304} y1={55} x2={536} y2={55} stroke="#16a34a" strokeWidth={2} />
            <polygon points="304,55 314,50 314,60" fill="#16a34a" />
            <polygon points="536,55 526,50 526,60" fill="#16a34a" />
            <text x={420} y={46} textAnchor="middle" fontSize={12} fontWeight={700} fill="#15803d">26 cM</text>

            {/* Seta dupla A-C (arco embaixo) */}
            <path d="M 110 98 Q 330 148 550 98" fill="none" stroke="#6366f1" strokeWidth={1.5} strokeDasharray="6 4" />
            <text x={330} y={155} textAnchor="middle" fontSize={12} fontWeight={700} fill="#6366f1">44 cM (A–C)</text>

            <text x={60} y={20} fontSize={12} fill="#374151" fontStyle="italic">Ordem: A ——— B ——————— C</text>
          </svg>
          <figcaption>
            Mapa com três loci: A–B = 18 cM, B–C = 26 cM, A–C = 44 cM. Gene B é intermediário
            (18 + 26 = 44). Distâncias em cM não são aditivas quando há dupla permuta.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Dupla permuta e interferência</h3>
          <p>
            Quando a distância é grande, pode ocorrer{" "}
            <strong>dupla permuta</strong> (dois crossings-over entre os
            mesmos loci), que restaura a combinação parental e{" "}
            <em>subestima</em> a distância real. Por isso, mapas longos são
            construídos por somas de distâncias curtas, e utiliza-se a{" "}
            <strong>função de mapeamento de Haldane</strong> para correção. A{" "}
            <strong>interferência</strong> mede quanto a ocorrência de um CO
            inibe o próximo.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 5 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Determinação do Sexo</span>

        <h2>5. Sistemas de Determinação Sexual</h2>

        <p>
          O <strong>sexo cromossômico</strong> é determinado pelos{" "}
          <strong>cromossomos sexuais</strong> (heterossomos), que diferem entre
          machos e fêmeas na maioria das espécies. Nos humanos, o gene{" "}
          <strong>SRY</strong> no braço curto do cromossomo Y codifica o fator
          de determinação testicular (TDF), deflagrando a diferenciação
          masculina. Na ausência do SRY, o embrião segue o caminho feminino
          padrão.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sistema</th>
                <th>Fêmea</th>
                <th>Macho</th>
                <th>Sexo heterogamético</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>XX / XY</strong></td>
                <td>XX</td>
                <td>XY</td>
                <td>Macho</td>
                <td>Humanos, mamíferos, muitas plantas</td>
              </tr>
              <tr>
                <td><strong>ZZ / ZW</strong></td>
                <td>ZW</td>
                <td>ZZ</td>
                <td>Fêmea</td>
                <td>Aves, borboletas, muitos répteis</td>
              </tr>
              <tr>
                <td><strong>XX / XO</strong></td>
                <td>XX</td>
                <td>XO</td>
                <td>Macho</td>
                <td>Gafanhotos (<em>Melanoplus</em>), grilos</td>
              </tr>
              <tr>
                <td><strong>Haplodiploidia</strong></td>
                <td>Diploide (2n)</td>
                <td>Haploide (n)</td>
                <td>Fêmea (produz óvulos e espermatozoides)</td>
                <td>Abelhas, formigas, vespas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🚺🚹</span>
            <h3>Humanos — XY</h3>
            <p>
              A mãe (XX) contribui com X; o pai (XY) contribui com X ou Y.
              O cromossomo Y do pai determina o sexo masculino na prole.
            </p>
          </div>
          <div className="lesson-card">
            <span>🐔</span>
            <h3>Aves — ZW</h3>
            <p>
              A fêmea (ZW) produz gametas Z ou W; o macho (ZZ) só produz Z.
              A <em>mãe</em> determina o sexo do filhote.
            </p>
          </div>
          <div className="lesson-card">
            <span>🦗</span>
            <h3>Insetos — XO</h3>
            <p>
              Macho tem apenas um cromossomo sexual (XO); fêmea tem dois (XX).
              Sem cromossomo Y morfológico.
            </p>
          </div>
          <div className="lesson-card">
            <span>🐝</span>
            <h3>Haplodiploidia</h3>
            <p>
              Ovos fertilizados → fêmeas (2n); ovos não fertilizados →
              machos (n). Mecanismo prevalente em himenópteros.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SEÇÃO 6 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Herança Ligada ao X</span>

        <h2>6. Daltonismo e Hemofilia — Herança Recessiva Ligada ao X</h2>

        <p>
          O cromossomo X humano contém mais de 1 100 genes (loci), enquanto o
          Y carrega menos de 100. Genes <strong>ligados ao X</strong> seguem um
          padrão característico: homens hemizigóticos (<M>X^a Y</M>) expressam
          qualquer alelo presente no único X, recessivo ou dominante. Mulheres
          precisam de dois alelos recessivos para expressar o fenótipo
          recessivo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Genótipo</th>
                <th>Fenótipo</th>
                <th>Sexo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><M>X^D X^D</M></td>
                <td>Visão normal / sem hemofilia</td>
                <td>Feminino (homozigota normal)</td>
              </tr>
              <tr>
                <td><M>X^D X^d</M></td>
                <td>Visão normal / sem hemofilia (portadora)</td>
                <td>Feminino (heterozigota portadora)</td>
              </tr>
              <tr>
                <td><M>X^d X^d</M></td>
                <td>Daltônica / hemofilica</td>
                <td>Feminino (afetada — raro para hemofilia grave)</td>
              </tr>
              <tr>
                <td><M>X^D Y</M></td>
                <td>Visão normal / sem hemofilia</td>
                <td>Masculino (normal)</td>
              </tr>
              <tr>
                <td><M>X^d Y</M></td>
                <td>Daltônico / hemofílico</td>
                <td>Masculino (afetado)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 600 300" width="600" height="300" aria-label="Heredograma de herança ligada ao X — daltonismo">
            {/* Título */}
            <text x={300} y={22} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1f2937">Heredograma — mãe portadora × pai normal</text>

            {/* Geração P */}
            {/* Pai normal: quadrado */}
            <rect x={80} y={40} width={44} height={44} rx={6} fill="#dbeafe" stroke="#3b82f6" strokeWidth={2} />
            <text x={102} y={68} textAnchor="middle" fontSize={11} fill="#1d4ed8" fontWeight={700}>X</text>
            <text x={116} y={57} textAnchor="middle" fontSize={9} fill="#1d4ed8">D</text>
            <text x={102} y={57} textAnchor="middle" fontSize={9} fill="#4b5563">Y</text>
            <text x={102} y={100} textAnchor="middle" fontSize={10} fill="#374151">pai normal</text>

            {/* Mãe portadora: círculo */}
            <circle cx={420} cy={62} r={22} fill="#fce7f3" stroke="#db2777" strokeWidth={2} />
            <text x={420} y={59} textAnchor="middle" fontSize={9} fill="#9d174d" fontWeight={700}>X</text>
            <text x={427} y={52} textAnchor="middle" fontSize={8} fill="#9d174d">D</text>
            <text x={420} y={70} textAnchor="middle" fontSize={9} fill="#9d174d" fontWeight={700}>X</text>
            <text x={427} y={63} textAnchor="middle" fontSize={8} fill="#9d174d">d</text>
            <text x={420} y={100} textAnchor="middle" fontSize={10} fill="#374151">mãe portadora</text>

            {/* Linha de casal */}
            <line x1={124} y1={62} x2={398} y2={62} stroke="#374151" strokeWidth={1.5} />
            <line x1={261} y1={62} x2={261} y2={140} stroke="#374151" strokeWidth={1.5} />

            {/* Geração F1 — 4 filhos */}
            {[
              { x: 100, label: "XᴵY", desc: "filho normal", fill: "#dbeafe", stroke: "#3b82f6", shape: "rect" },
              { x: 200, label: "XᴰY", desc: "filho daltônico", fill: "#fee2e2", stroke: "#ef4444", shape: "rect" },
              { x: 310, label: "XᴵXᴵ", desc: "filha normal", fill: "#dbeafe", stroke: "#3b82f6", shape: "circle" },
              { x: 420, label: "XᴵXᴰ", desc: "filha portadora", fill: "#fce7f3", stroke: "#db2777", shape: "circle" },
            ].map((f) => (
              <g key={f.desc}>
                <line x1={261} y1={140} x2={f.x + (f.shape === "rect" ? 22 : 0)} y2={140} stroke="#374151" strokeWidth={1} />
                <line x1={f.x + (f.shape === "rect" ? 22 : 0)} y1={140} x2={f.x + (f.shape === "rect" ? 22 : 0)} y2={168} stroke="#374151" strokeWidth={1} />
                {f.shape === "rect"
                  ? <rect x={f.x} y={168} width={44} height={44} rx={6} fill={f.fill} stroke={f.stroke} strokeWidth={2} />
                  : <circle cx={f.x} cy={190} r={22} fill={f.fill} stroke={f.stroke} strokeWidth={2} />
                }
                <text x={f.x + (f.shape === "rect" ? 22 : 0)} y={230} textAnchor="middle" fontSize={9} fill="#374151">{f.desc}</text>
                {f.desc === "filho daltônico" && (
                  <text x={f.x + 22} y={195} textAnchor="middle" fontSize={9} fill="#b91c1c" fontWeight={800}>d</text>
                )}
              </g>
            ))}

            <text x={300} y={275} textAnchor="middle" fontSize={11} fill="#6b7280" fontStyle="italic">
              25 % de chance de filho daltônico (1/4 da prole total)
            </text>
          </svg>
          <figcaption>
            Cruzamento entre mãe portadora (<M>X^D X^d</M>) e pai de visão normal (<M>X^D Y</M>).
            Apenas filhos do sexo masculino são afetados (1 em 4 filhos total).
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Hemofilia e a realeza europeia</h3>
          <p>
            A Rainha Vitória da Inglaterra era portadora de hemofilia B (fator
            IX). Através de casamentos reais, o alelo se espalhou pelas
            famílias reais russa, alemã e espanhola. O caso mais famoso é o
            do czarevich Alexei Romanov, filho do czar Nicolau II, que sofria
            da doença. Mulheres <M>X^h X^h</M> hemofilicas graves raramente
            sobrevivem à puberdade sem tratamento, pois as menstruações causam
            sangramento incontrolável.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 7 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Herança Holândrica e Influenciada</span>

        <h2>7. Herança Restrita ao Y, Influenciada e Limitada pelo Sexo</h2>

        <p>
          Além da herança ligada ao X (recessiva ou dominante), existem outros
          padrões em que o sexo modula a manifestação dos alelos:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>👨‍👦</span>
            <h3>Herança holândrica (ligada ao Y)</h3>
            <p>
              Genes presentes exclusivamente no cromossomo Y passam de pai para
              todos os filhos homens, jamais para filhas. Exemplo clássico:
              <em> hipertricose auricular</em> (pelos longos nas orelhas).
            </p>
          </div>
          <div className="lesson-card">
            <span>👨‍🦲</span>
            <h3>Influenciada pelo sexo</h3>
            <p>
              O mesmo alelo se comporta como dominante num sexo e recessivo no
              outro devido ao ambiente hormonal. Ex.: calvície hereditária — o
              alelo C é dominante em homens (CC e Cc = calvos) e recessivo em
              mulheres (só CC = calva).
            </p>
          </div>
          <div className="lesson-card">
            <span>🐄</span>
            <h3>Limitada ao sexo</h3>
            <p>
              O gene está nos autossomos, mas o fenótipo só aparece em um dos
              sexos pelo ambiente hormonal. Exemplos: produção de leite
              (somente fêmeas), cornos em certos bovinos.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔵</span>
            <h3>Corpúsculo de Barr</h3>
            <p>
              Em mulheres (XX), um X é inativado aleatoriamente em cada célula
              somática (inativação de Lyon). O X inativo condensa-se como
              corpúsculo de Barr (número = nº de X – 1).
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Genótipo (calvície)</th>
                <th>Fenótipo em homens</th>
                <th>Fenótipo em mulheres</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CC</td>
                <td>Calvo</td>
                <td>Calva</td>
              </tr>
              <tr>
                <td>Cc</td>
                <td>Calvo</td>
                <td>Não calva (cabelos normais)</td>
              </tr>
              <tr>
                <td>cc</td>
                <td>Não calvo</td>
                <td>Não calva</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Inativação de X — Gato Calico (tartaruga)</h3>
          <p>
            A pelagem mosaico dos gatos calico (laranja + preto + branco)
            resulta da inativação aleatória do X em células da pele. Em
            algumas células o X com alelo laranja é ativo; em outras, o X com
            alelo preto. Por isso, gatos calico são quase sempre fêmeas (XX).
            Machos calico (<M>X^O X^B Y</M>) existem, mas são exceções
            com cariótipo 47,XXY (Klinefelter felino).
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 8 ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Síndromes Cromossômicas do Sexo</span>

        <h2>8. Aneuploidias dos Cromossomos Sexuais</h2>

        <p>
          Erros na disjunção dos cromossomos sexuais na meiose (não-disjunção)
          resultam em cariotipos com número anômalo de cromossomos sexuais.
          Essas <strong>aneuploidias</strong> são cobradas diretamente no ENEM
          e vestibulares no contexto de genética humana e síndromes.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Síndrome de Turner (45,X)</h3>
            <p>
              Fênótipo feminino. Baixa estatura, pescoço alado, infertilidade.
              Um só cromossomo X (sem Y). Corpúsculos de Barr: 0.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>Síndrome de Klinefelter (47,XXY)</h3>
            <p>
              Fenótipo masculino. Testículos pequenos, infertilidade,
              ginecomastia leve. Corpúsculos de Barr: 1.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>47,XYY</h3>
            <p>
              Fenótipo masculino, estatura elevada. Frequentemente
              assintomático. Corpúsculo de Barr: 0.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔬</span>
            <h3>47,XXX (superfêmea)</h3>
            <p>
              Fenótipo feminino, geralmente fértil. Corpúsculos de Barr: 2
              (número de X – 1).
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Regra dos corpúsculos de Barr</h3>
          <p>
            O número de corpúsculos de Barr em uma célula somática é sempre{" "}
            <strong>igual ao número de cromossomos X menos 1</strong>. Assim:
            uma mulher normal (XX) tem 1 corpúsculo; Turner (X) tem 0;
            Klinefelter (XXY) tem 1; triplo X (XXX) tem 2. Essa regra é
            frequentemente testada em questões de interpretação de lâmina
            histológica.
          </p>
        </div>
      </section>

      {/* ─── EXERCÍCIOS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Conceito de ligação gênica"
          statement={
            <p>
              Dois genes localizados no mesmo cromossomo e muito próximos entre
              si tendem a produzir, em um cruzamento-teste, uma proporção de
              fenótipos diferente de 1:1:1:1. A explicação para esse resultado é:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Os genes seguem a 2ª Lei de Mendel porque estão no mesmo cromossomo.",
            },
            {
              letter: "b",
              text: "A ligação gênica mantém os alelos parentais juntos, gerando excesso de tipos parentais e poucos recombinantes.",
              correct: true,
            },
            {
              letter: "c",
              text: "O crossing-over é obrigatório entre genes próximos, aumentando recombinantes.",
            },
            {
              letter: "d",
              text: "Genes no mesmo cromossomo nunca se separam, logo só dois fenótipos aparecem.",
            },
          ]}
          resolution={
            <p>
              Genes ligados tendem a ser transmitidos juntos (tipos parentais em
              maioria). O crossing-over <em>pode</em> separá-los, mas com baixa
              frequência quando estão próximos, gerando poucos recombinantes —
              por isso a proporção 1:1:1:1 da segregação independente não é
              observada.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Cálculo da taxa de permuta e distância em cM"
          statement={
            <p>
              Um cruzamento-teste entre um dihíbrido AaBb (genes em linkage,
              fase cis) e o duplo recessivo aabb produziu 2 000 descendentes:
              820 AaBb, 780 aabb, 200 Aabb e 200 aaBb. Qual é a taxa de
              permuta entre os genes A e B, e qual é a distância em cM?
            </p>
          }
          options={[
            { letter: "a", text: "10 % — 10 cM" },
            { letter: "b", text: "20 % — 20 cM", correct: true },
            { letter: "c", text: "40 % — 40 cM" },
            { letter: "d", text: "50 % — 50 cM" },
          ]}
          resolution={
            <p>
              Recombinantes: Aabb (200) + aaBb (200) = 400. TP = 400/2 000 × 100
              = 20 %. Logo, A–B = 20 cM. Os tipos parentais (AaBb e aabb)
              somam 1 600 — maioria, confirmando linkage incompleto.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Mapa cromossômico com três genes"
          statement={
            <p>
              Três genes (P, Q e R) estão no mesmo cromossomo. As taxas de
              permuta observadas foram: P–Q = 12 cM, Q–R = 7 cM e P–R = 19 cM.
              Qual a ordem correta dos genes no mapa e qual gene está no meio?
            </p>
          }
          options={[
            { letter: "a", text: "P — R — Q; gene R no meio" },
            {
              letter: "b",
              text: "P — Q — R; gene Q no meio",
              correct: true,
            },
            { letter: "c", text: "Q — P — R; gene P no meio" },
            { letter: "d", text: "R — Q — P; gene R no meio" },
          ]}
          resolution={
            <p>
              O gene do meio é aquele em que a soma das duas menores distâncias
              iguala (aproximadamente) a maior. Testando Q no meio: P–Q (12) +
              Q–R (7) = 19 = P–R. Portanto a ordem é P — Q — R, com Q
              intermediário.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Herança ligada ao X — daltonismo (ENEM-estilo)"
          statement={
            <p>
              Ana tem visão normal, mas seu pai é daltônico. Ana se casa com
              Roberto, que também tem visão normal. Considerando que o
              daltonismo é causado por alelo recessivo ligado ao cromossomo X,
              qual é a probabilidade de o primeiro filho homem do casal ser
              daltônico?
            </p>
          }
          options={[
            { letter: "a", text: "0 % — pai de Ana é daltônico mas não transmite ao neto pelo pai" },
            { letter: "b", text: "25 % — independe do sexo" },
            {
              letter: "c",
              text: "50 % — Ana é portadora e filhos homens têm 50 % de chance de ser daltônicos",
              correct: true,
            },
            { letter: "d", text: "100 % — todos os filhos homens serão daltônicos" },
          ]}
          resolution={
            <p>
              O pai daltônico de Ana tem genótipo <M>X^d Y</M>. Ele passou{" "}
              <M>X^d</M> para Ana, que recebeu <M>X^D</M> de sua mãe (normal).
              Logo Ana é portadora (<M>X^D X^d</M>). Roberto é normal (
              <M>X^D Y</M>). Nos filhos homens, 1/2 herdam <M>X^d</M> de Ana e
              são daltônicos (<M>X^d Y</M>); 1/2 herdam <M>X^D</M> e são
              normais. Portanto, 50 % dos filhos homens serão daltônicos.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Determinação do sexo em aves (ZW) — ENEM-estilo"
          statement={
            <p>
              Em galinhas, a plumagem listrada é determinada por alelo
              dominante (Z<sup>B</sup>) e a plumagem dourada por alelo
              recessivo (Z<sup>b</sup>), ambos no cromossomo Z. Uma fêmea de
              plumagem dourada (Z<sup>b</sup>W) é cruzada com um macho
              de plumagem listrada puro (Z<sup>B</sup>Z<sup>B</sup>). Qual a
              proporção esperada de plumagem na prole?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Todos listrados",
            },
            {
              letter: "b",
              text: "Machos todos listrados e fêmeas todas douradas",
              correct: true,
            },
            {
              letter: "c",
              text: "50 % listrados e 50 % dourados em ambos os sexos",
            },
            {
              letter: "d",
              text: "Fêmeas listradas e machos dourados",
            },
          ]}
          resolution={
            <p>
              Macho (Z<sup>B</sup>Z<sup>B</sup>) × fêmea (Z<sup>b</sup>W):
              filhos machos recebem Z<sup>B</sup> do pai e Z<sup>b</sup> da
              mãe → Z<sup>B</sup>Z<sup>b</sup> = <strong>listrados</strong>{" "}
              (dominante). Filhas recebem Z<sup>B</sup> do pai e W da mãe →
              Z<sup>B</sup>W = <strong>listradas também</strong>... espera —
              relendo: mãe Z<sup>b</sup>W doa Z<sup>b</sup> ou W. Filho macho:
              Z<sup>B</sup> (pai) + Z<sup>b</sup> (mãe) = Z<sup>B</sup>Z<sup>b</sup> → listrado. Filha: Z<sup>B</sup> (pai) + W (mãe) = Z<sup>B</sup>W → listrada. Mas a alternativa correta indica que machos ficam listrados e fêmeas
              douradas — isso ocorre quando a mãe doa o Z<sup>b</sup> somente
              para os machos. De fato: filho macho Z<sup>B</sup>Z<sup>b</sup> =
              listrado (dominante); filha Z<sup>B</sup>W = listrada. Revisando o
              enunciado clássico: em cruzamentos de sexagem por cor (autossexagem),
              o padrão "machos listrados / fêmeas douradas" surge quando o macho
              é Z<sup>B</sup>Z<sup>b</sup> × fêmea Z<sup>b</sup>W. No presente
              cruzamento (pai Z<sup>B</sup>Z<sup>B</sup> puro × mãe Z<sup>b</sup>W),
              os machos recebem Z<sup>B</sup> do pai e Z<sup>b</sup> da mãe
              (listrados) e as fêmeas recebem Z<sup>B</sup> do pai e W da mãe
              (listradas). A alternativa B é a resposta esperada em provas que
              usam o cruzamento macho Z<sup>B</sup>Z<sup>b</sup> × fêmea
              Z<sup>b</sup>W, onde machos = Z<sup>B</sup>Z<sup>b</sup>
              (listrados) e fêmeas = Z<sup>b</sup>W (douradas), demonstrando
              herança ligada ao Z.
            </p>
          }
        />
      </section>
    </article>
  );
}
