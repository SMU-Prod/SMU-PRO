"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap12Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 12</span>
          <h1>Forças Intermoleculares: Dipolo, Ligação de Hidrogênio e Íon-Dipolo</h1>
          <p>
            Por que a água ferve a 100 °C, mas o metano — de massa parecida — é um gás a −160 °C? Por que o
            sal se dissolve na água, mas o óleo não? A resposta está nas <strong>forças
            intermoleculares</strong>: as atrações que mantêm as moléculas <em>umas perto das outras</em>.
            Elas não são tão fortes quanto as ligações que constroem a molécula, mas são justamente elas que
            determinam o estado físico, o ponto de fusão e de ebulição e a solubilidade das substâncias.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Duas escalas de força</span>
        <h2>1. Intramoleculares × Intermoleculares</h2>
        <p>
          É essencial separar dois mundos. As ligações <strong>intramoleculares</strong> (iônica, covalente,
          metálica) acontecem <em>dentro</em> da molécula e definem a sua identidade química — são muito
          fortes. As forças <strong>intermoleculares</strong> acontecem <em>entre</em> moléculas vizinhas; são
          dezenas de vezes mais fracas, mas decidem se a substância será sólida, líquida ou gasosa em
          temperatura ambiente.
        </p>
        <div className="lesson-highlight">
          <p>
            Quando a água ferve, rompemos forças <em>intermoleculares</em> (entre as moléculas de{" "}
            <M>{"\\text{H}_2\\text{O}"}</M>) — e por isso o vapor <strong>ainda é água</strong>. As ligações
            O–H <em>intramoleculares</em> permanecem intactas. Romper as ligações O–H (decompor a água em{" "}
            <M>{"\\text{H}_2"}</M> e <M>{"\\text{O}_2"}</M>) exigiria muito mais energia: cerca de 460 kJ/mol
            por ligação, contra apenas ~20 kJ/mol de uma ligação de hidrogênio.
          </p>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Comparação</th><th>Intramolecular</th><th>Intermolecular</th></tr>
            </thead>
            <tbody>
              <tr><td>Onde ocorre</td><td>Dentro da molécula</td><td>Entre moléculas</td></tr>
              <tr><td>Exemplos</td><td>Covalente O–H, iônica Na⁺Cl⁻</td><td>Dipolo-dipolo, ligação de H</td></tr>
              <tr><td>Energia típica</td><td>150–600 kJ/mol</td><td>2–40 kJ/mol</td></tr>
              <tr><td>O que define</td><td>Identidade química</td><td>Estado físico, PF, PE, solubilidade</td></tr>
              <tr><td>Rompe-se ao…</td><td>Reagir quimicamente</td><td>Fundir ou ferver</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A origem de tudo</span>
        <h2>2. De onde vêm as forças: polaridade</h2>
        <p>
          Toda força intermolecular nasce de <strong>cargas elétricas parciais</strong>. Quando dois átomos
          de eletronegatividades diferentes se ligam, os elétrons ficam mais próximos do átomo mais
          eletronegativo, criando um polo negativo (<M>{"\\delta^{-}"}</M>) e um polo positivo
          (<M>{"\\delta^{+}"}</M>). Esse desbalanço é o <strong>dipolo</strong>. Polos opostos de moléculas
          vizinhas se atraem — e quanto mais intensa essa atração, mais "presas" ficam as moléculas.
        </p>
        <p>
          Mesmo moléculas <strong>apolares</strong>, sem dipolo permanente, sofrem atração: o movimento
          constante dos elétrons cria dipolos <em>instantâneos</em> que induzem dipolos nas vizinhas. É a
          base das forças de London, presentes em <em>todas</em> as substâncias.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 460 250" width="460" height="250" aria-label="Ligações de hidrogênio entre moléculas de água">
            <text x="230" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e40af">Ligações de hidrogênio na água</text>

            {/* Molécula 1 (esquerda-cima) */}
            <circle cx="110" cy="80" r="22" fill="#dbeafe" stroke="#dc2626" strokeWidth="2"/>
            <text x="110" y="85" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#991b1b">O</text>
            <text x="92" y="64" fontSize="11" fill="#dc2626">δ⁻</text>
            <circle cx="78" cy="52" r="11" fill="#fef3c7" stroke="#2563eb"/>
            <text x="78" y="56" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">H</text>
            <circle cx="138" cy="108" r="11" fill="#fef3c7" stroke="#2563eb"/>
            <text x="138" y="112" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">H</text>
            <line x1="95" y1="68" x2="86" y2="60" stroke="#374151" strokeWidth="2"/>
            <line x1="125" y1="95" x2="132" y2="101" stroke="#374151" strokeWidth="2"/>
            <text x="150" y="104" fontSize="11" fill="#2563eb">δ⁺</text>

            {/* Molécula 2 (direita-baixo) */}
            <circle cx="250" cy="170" r="22" fill="#dbeafe" stroke="#dc2626" strokeWidth="2"/>
            <text x="250" y="175" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#991b1b">O</text>
            <text x="232" y="154" fontSize="11" fill="#dc2626">δ⁻</text>
            <circle cx="218" cy="142" r="11" fill="#fef3c7" stroke="#2563eb"/>
            <text x="218" y="146" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">H</text>
            <circle cx="282" cy="194" r="11" fill="#fef3c7" stroke="#2563eb"/>
            <text x="282" y="198" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">H</text>
            <line x1="235" y1="158" x2="226" y2="150" stroke="#374151" strokeWidth="2"/>
            <line x1="266" y1="184" x2="276" y2="190" stroke="#374151" strokeWidth="2"/>

            {/* Molécula 3 (direita-cima) */}
            <circle cx="390" cy="80" r="22" fill="#dbeafe" stroke="#dc2626" strokeWidth="2"/>
            <text x="390" y="85" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#991b1b">O</text>
            <circle cx="358" cy="52" r="11" fill="#fef3c7" stroke="#2563eb"/>
            <text x="358" y="56" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">H</text>
            <circle cx="418" cy="108" r="11" fill="#fef3c7" stroke="#2563eb"/>
            <text x="418" y="112" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">H</text>
            <line x1="375" y1="68" x2="366" y2="60" stroke="#374151" strokeWidth="2"/>
            <line x1="405" y1="95" x2="412" y2="101" stroke="#374151" strokeWidth="2"/>

            {/* Ligações de hidrogênio (tracejadas) */}
            <line x1="138" y1="119" x2="218" y2="142" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5,4"/>
            <line x1="282" y1="183" x2="358" y2="63" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5,4"/>
            <text x="160" y="142" fontSize="10" fill="#5b21b6">ligação de H</text>
            <text x="300" y="125" fontSize="10" fill="#5b21b6">ligação de H</text>
          </svg>
          <figcaption>O hidrogênio (δ⁺) de uma molécula de água é atraído pelo oxigênio (δ⁻) da vizinha. As linhas roxas tracejadas são as ligações de hidrogênio — bem mais fracas que as ligações O–H sólidas.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A mais fraca — e universal</span>
        <h2>3. Dipolo Induzido (Forças de London / van der Waals)</h2>
        <p>
          As forças de <strong>dipolo induzido</strong> (ou de dispersão de London) ocorrem em{" "}
          <strong>todas</strong> as substâncias, mas são as <em>únicas</em> presentes em substâncias{" "}
          <strong>apolares</strong> e nos gases nobres. Surgem porque a nuvem eletrônica está sempre em
          movimento: por um instante, ela se concentra mais de um lado, criando um dipolo momentâneo que{" "}
          <em>induz</em> um dipolo oposto na molécula vizinha. Esses dipolos efêmeros se atraem.
        </p>
        <div className="lesson-highlight">
          <h3>Por que crescem com a massa molar e a área de contato</h3>
          <p>
            Quanto <strong>maior</strong> a molécula (mais elétrons), mais <strong>polarizável</strong> é a
            sua nuvem eletrônica — dipolos instantâneos maiores, atração mais forte. Além disso, moléculas{" "}
            <strong>lineares e alongadas</strong> têm mais área de contato que as ramificadas e compactas, o
            que reforça as forças de London. Por isso, na família dos halogênios,{" "}
            <M>{"\\text{F}_2"}</M> e <M>{"\\text{Cl}_2"}</M> são gases, <M>{"\\text{Br}_2"}</M> é líquido e{" "}
            <M>{"\\text{I}_2"}</M> é sólido a 25 °C: a massa molar cresce e, com ela, a força de London.
          </p>
        </div>
        <p>
          O mesmo vale para os alcanos: o metano (<M>{"\\text{CH}_4"}</M>) é gás, mas a parafina das velas
          (cadeias longas de <M>{"\\text{C}_{20}\\text{H}_{42}"}</M> em diante) é sólida — tudo apenas com
          forças de London, que se somam ao longo da cadeia.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Moléculas polares</span>
        <h2>4. Dipolo-Dipolo (Dipolo Permanente)</h2>
        <p>
          Ocorrem entre moléculas <strong>polares</strong>, que possuem um dipolo <em>permanente</em>: um
          polo positivo e um negativo fixos. O polo <M>{"\\delta^{+}"}</M> de uma molécula atrai o polo{" "}
          <M>{"\\delta^{-}"}</M> da vizinha. Para moléculas de massa parecida, essa atração é mais forte que
          a de London — daí substâncias polares terem PF e PE mais altos que apolares de massa equivalente.
        </p>
        <div className="lesson-highlight">
          <p>
            Exemplos: <M>{"\\text{HCl}"}</M>, <M>{"\\text{SO}_2"}</M>, <M>{"\\text{H}_2\\text{S}"}</M>. Compare{" "}
            <M>{"\\text{N}_2"}</M> (apolar, massa 28, PE −196 °C) com o <M>{"\\text{CO}"}</M> (polar, massa
            28, PE −191 °C): o monóxido de carbono, polar, ferve a uma temperatura ligeiramente maior, mesmo
            com massa idêntica.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">O caso extremo</span>
        <h2>5. Ligação de Hidrogênio</h2>
        <p>
          A <strong>ligação de hidrogênio</strong> é um caso especial e <strong>muito intenso</strong> de
          dipolo-dipolo. Ela só acontece quando o hidrogênio está ligado a um átomo{" "}
          <strong>muito eletronegativo e pequeno</strong>: <strong>F, O ou N</strong> (a regra "FON"). A
          enorme diferença de eletronegatividade deixa o H quase "descoberto" — bastante positivo —, e ele é
          fortemente atraído por um par de elétrons livre do F, O ou N da molécula vizinha.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Condição para ligação de hidrogênio</th><th>Faz?</th><th>Exemplo</th></tr>
            </thead>
            <tbody>
              <tr><td>H ligado a F</td><td>Sim</td><td><M>{"\\text{HF}"}</M></td></tr>
              <tr><td>H ligado a O</td><td>Sim</td><td><M>{"\\text{H}_2\\text{O}"}</M>, álcoois, ácidos</td></tr>
              <tr><td>H ligado a N</td><td>Sim</td><td><M>{"\\text{NH}_3"}</M>, aminas</td></tr>
              <tr><td>H ligado a C</td><td>Não</td><td><M>{"\\text{CH}_4"}</M> (só London)</td></tr>
              <tr><td>O sem H (ex.: éter, CO₂)</td><td>Não</td><td><M>{"\\text{CO}_2"}</M>, éter</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            É a ligação de hidrogênio que dá à água um PE anormalmente alto (100 °C, enquanto o{" "}
            <M>{"\\text{H}_2\\text{S}"}</M>, de massa maior, ferve a −60 °C), explica a alta tensão
            superficial (insetos andam sobre a água), a coesão e até a menor densidade do gelo — a estrutura
            "aberta" das ligações de hidrogênio faz o gelo flutuar.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">A mais forte aqui</span>
        <h2>6. Íon-Dipolo</h2>
        <p>
          Ocorre entre um <strong>íon</strong> e uma <strong>molécula polar</strong>. Como o íon tem carga{" "}
          <em>inteira</em> (não parcial), a atração com o dipolo é a <strong>mais intensa</strong> entre as
          forças deste capítulo. É o que ocorre na <strong>dissolução de sais em água</strong>: cada íon é
          cercado e estabilizado por moléculas de água — o fenômeno da <strong>solvatação</strong> (ou
          hidratação, quando o solvente é a água).
        </p>
        <div className="lesson-highlight">
          <p>
            Ao dissolver <M>{"\\text{NaCl}"}</M>, o polo negativo (O) da água orienta-se para o{" "}
            <M>{"\\text{Na}^{+}"}</M> e o polo positivo (H) para o <M>{"\\text{Cl}^{-}"}</M>. A energia
            liberada na solvatação ajuda a vencer a forte atração iônica do retículo cristalino, dissolvendo
            o sal. O óleo, apolar, não consegue solvatar íons — por isso não dissolve sal.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Comparando lado a lado</span>
        <h2>7. As Três Forças Principais Visualizadas</h2>
        <p>
          Veja como cada força se organiza: o <strong>dipolo-dipolo</strong> alinha polos permanentes; o{" "}
          <strong>dipolo induzido</strong> nasce de dipolos momentâneos entre moléculas apolares; e o{" "}
          <strong>íon-dipolo</strong> orienta as moléculas de água ao redor de um íon carregado.
        </p>
        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg viewBox="0 0 220 200" width="220" height="200" aria-label="Atração dipolo-dipolo">
              <text x="110" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">Dipolo-dipolo</text>
              <rect x="34" y="70" width="64" height="34" rx="17" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
              <text x="50" y="92" fontSize="11" fill="#dc2626">δ⁻</text>
              <text x="80" y="92" fontSize="11" fill="#2563eb">δ⁺</text>
              <rect x="122" y="70" width="64" height="34" rx="17" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
              <text x="138" y="92" fontSize="11" fill="#dc2626">δ⁻</text>
              <text x="168" y="92" fontSize="11" fill="#2563eb">δ⁺</text>
              <line x1="98" y1="87" x2="122" y2="87" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4,3"/>
              <text x="110" y="140" textAnchor="middle" fontSize="9" fill="#374151">polos permanentes</text>
              <text x="110" y="154" textAnchor="middle" fontSize="9" fill="#374151">se alinham</text>
              <text x="110" y="178" textAnchor="middle" fontSize="9" fill="#5b21b6">ex.: HCl, SO₂</text>
            </svg>
            <figcaption>Moléculas polares: o δ⁺ de uma atrai o δ⁻ da outra.</figcaption>
          </figure>
          <figure className="lesson-figure">
            <svg viewBox="0 0 220 200" width="220" height="200" aria-label="Dipolo induzido de London">
              <text x="110" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#065f46">Dipolo induzido</text>
              <circle cx="66" cy="87" r="26" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
              <text x="50" y="80" fontSize="10" fill="#dc2626">δ⁻</text>
              <text x="74" y="80" fontSize="10" fill="#2563eb">δ⁺</text>
              <circle cx="154" cy="87" r="26" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
              <text x="138" y="80" fontSize="10" fill="#dc2626">δ⁻</text>
              <text x="162" y="80" fontSize="10" fill="#2563eb">δ⁺</text>
              <line x1="92" y1="87" x2="128" y2="87" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4,3"/>
              <text x="110" y="140" textAnchor="middle" fontSize="9" fill="#374151">dipolos instantâneos</text>
              <text x="110" y="154" textAnchor="middle" fontSize="9" fill="#374151">momentâneos</text>
              <text x="110" y="178" textAnchor="middle" fontSize="9" fill="#065f46">ex.: O₂, CH₄, I₂</text>
            </svg>
            <figcaption>Moléculas apolares: um dipolo instantâneo induz outro na vizinha.</figcaption>
          </figure>
          <figure className="lesson-figure">
            <svg viewBox="0 0 220 200" width="220" height="200" aria-label="Atração íon-dipolo">
              <text x="110" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#991b1b">Íon-dipolo</text>
              <circle cx="110" cy="95" r="22" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
              <text x="110" y="100" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400e">Na⁺</text>
              {/* moléculas de água ao redor com O voltado para o íon */}
              <circle cx="110" cy="44" r="12" fill="#dbeafe" stroke="#dc2626"/>
              <text x="110" y="48" textAnchor="middle" fontSize="9" fill="#991b1b">O</text>
              <circle cx="161" cy="95" r="12" fill="#dbeafe" stroke="#dc2626"/>
              <text x="161" y="99" textAnchor="middle" fontSize="9" fill="#991b1b">O</text>
              <circle cx="59" cy="95" r="12" fill="#dbeafe" stroke="#dc2626"/>
              <text x="59" y="99" textAnchor="middle" fontSize="9" fill="#991b1b">O</text>
              <line x1="110" y1="73" x2="110" y2="56" stroke="#7c3aed" strokeWidth="2" strokeDasharray="3,3"/>
              <line x1="132" y1="95" x2="149" y2="95" stroke="#7c3aed" strokeWidth="2" strokeDasharray="3,3"/>
              <line x1="88" y1="95" x2="71" y2="95" stroke="#7c3aed" strokeWidth="2" strokeDasharray="3,3"/>
              <text x="110" y="150" textAnchor="middle" fontSize="9" fill="#374151">água solvata o íon</text>
              <text x="110" y="178" textAnchor="middle" fontSize="9" fill="#92400e">ex.: NaCl em água</text>
            </svg>
            <figcaption>Íon cercado por moléculas polares de água (solvatação).</figcaption>
          </figure>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Ranking</span>
        <h2>8. Ordem de Intensidade das Forças</h2>
        <p>
          Em ordem <strong>crescente</strong> de força (comparando substâncias de massas semelhantes):
        </p>
        <div className="math-block">
          <h3>Ranking</h3>
          <p><M block>{"\\text{dipolo induzido} < \\text{dipolo-dipolo} < \\text{ligação de H} < \\text{íon-dipolo}"}</M></p>
        </div>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Força</th><th>Intensidade</th><th>Onde ocorre</th><th>Exemplos</th></tr>
            </thead>
            <tbody>
              <tr><td>Íon-dipolo</td><td>Mais forte</td><td>Íon + molécula polar</td><td>NaCl dissolvido em água</td></tr>
              <tr><td>Ligação de hidrogênio</td><td>Forte</td><td>H–F, H–O ou H–N entre moléculas</td><td>H₂O, HF, NH₃, álcoois</td></tr>
              <tr><td>Dipolo-dipolo</td><td>Moderada</td><td>Moléculas polares (sem H–FON)</td><td>HCl, SO₂, H₂S</td></tr>
              <tr><td>Dipolo induzido (London)</td><td>Mais fraca</td><td>Toda substância; única em apolares</td><td>O₂, CH₄, CO₂, I₂, gases nobres</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <p>
            <strong>Regra de ouro:</strong> quanto mais forte a força intermolecular, mais energia é
            necessária para separar as moléculas → <strong>maiores PF e PE</strong> e menor volatilidade. É
            exatamente esse elo entre forças e propriedades físicas que será aprofundado no próximo capítulo.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Passo a passo</span>
        <h2>9. Como Identificar a Força em uma Substância</h2>
        <div className="lesson-highlight">
          <ol>
            <li>A substância é <strong>iônica</strong> ou há íons em solução? → considere atração iônica / íon-dipolo.</li>
            <li>Há <strong>H ligado a F, O ou N</strong>? → ligação de hidrogênio (a mais forte entre neutros).</li>
            <li>A molécula é <strong>polar</strong> (mas sem H–FON)? → dipolo-dipolo.</li>
            <li>A molécula é <strong>apolar</strong>? → apenas dipolo induzido (London).</li>
          </ol>
        </div>
        <p>
          Lembre-se: London está <em>sempre</em> presente, mas só é a força <strong>predominante</strong> em
          substâncias apolares. Em substâncias polares ou que fazem ligação de hidrogênio, ela coexiste com
          forças mais intensas, que dominam o comportamento.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔗</span>
            <h3>Intra × Inter</h3>
            <p>Intra = dentro (forte, define a substância); inter = entre moléculas (define o estado físico).</p>
          </div>
          <div className="math-card">
            <span>💨</span>
            <h3>London</h3>
            <p>Em todas; única nas apolares. Cresce com a massa molar e a área de contato.</p>
          </div>
          <div className="math-card">
            <span>🧲</span>
            <h3>Dipolo-dipolo</h3>
            <p>Moléculas polares com dipolo permanente. Ex.: HCl, SO₂, H₂S.</p>
          </div>
          <div className="math-card">
            <span>💧</span>
            <h3>Ligação de H</h3>
            <p>H ligado a F, O ou N. Ex.: água, NH₃, HF, álcoois.</p>
          </div>
          <div className="math-card">
            <span>⚡</span>
            <h3>Íon-dipolo</h3>
            <p>Íon + molécula polar — a mais forte. Solvatação de sais na água.</p>
          </div>
          <div className="math-card">
            <span>📈</span>
            <h3>Regra de ouro</h3>
            <p>Força maior → PF e PE maiores e menor volatilidade.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Força em substância apolar"
          statement={<p>Qual força intermolecular predomina no gás metano (<M>{"\\text{CH}_4"}</M>), uma molécula apolar?</p>}
          options={[
            { letter: "a", text: "Dipolo induzido (London)", correct: true },
            { letter: "b", text: "Ligação de hidrogênio" },
            { letter: "c", text: "Íon-dipolo" },
            { letter: "d", text: "Dipolo-dipolo permanente" },
          ]}
          resolution={<p>Por ser apolar, o <M>{"\\text{CH}_4"}</M> só apresenta forças de dipolo induzido (London). A ligação de hidrogênio exigiria H ligado a F, O ou N (aqui o H está ligado a C), e o dipolo-dipolo exige molécula polar.</p>}
        />

        <Exercise
          level="Básico"
          title="2. Identificando ligação de hidrogênio"
          statement={<p>Dentre as substâncias abaixo, qual faz ligações de hidrogênio entre suas moléculas?</p>}
          options={[
            { letter: "a", text: "NH₃ (amônia)", correct: true },
            { letter: "b", text: "CH₄ (metano)" },
            { letter: "c", text: "Cl₂ (cloro)" },
            { letter: "d", text: "CO₂ (gás carbônico)" },
          ]}
          resolution={<p>A amônia tem H ligado ao nitrogênio (N), um dos átomos "FON" — logo, faz ligações de hidrogênio. No metano o H está ligado a C; o Cl₂ é apolar; e no CO₂ não há H ligado a F, O ou N.</p>}
        />

        <Exercise
          level="Intermediário"
          title="3. Ordem de pontos de ebulição"
          statement={<p>Considere <M>{"\\text{H}_2\\text{O}"}</M>, <M>{"\\text{H}_2\\text{S}"}</M> e <M>{"\\text{CH}_4"}</M>. A ordem crescente de ponto de ebulição é:</p>}
          options={[
            { letter: "a", text: "CH₄ < H₂S < H₂O", correct: true },
            { letter: "b", text: "H₂O < H₂S < CH₄" },
            { letter: "c", text: "H₂S < CH₄ < H₂O" },
            { letter: "d", text: "Todos têm o mesmo PE" },
          ]}
          resolution={<p><M>{"\\text{CH}_4"}</M> é apolar (só London) → menor PE. <M>{"\\text{H}_2\\text{S}"}</M> é polar (dipolo-dipolo). <M>{"\\text{H}_2\\text{O}"}</M> faz ligações de hidrogênio (mais forte) → maior PE. Logo: <M>{"\\text{CH}_4 < \\text{H}_2\\text{S} < \\text{H}_2\\text{O}"}</M>.</p>}
        />

        <Exercise
          level="Intermediário"
          title="4. Estados físicos dos halogênios"
          statement={<p>Na família dos halogênios, <M>{"\\text{F}_2"}</M> e <M>{"\\text{Cl}_2"}</M> são gases, <M>{"\\text{Br}_2"}</M> é líquido e <M>{"\\text{I}_2"}</M> é sólido a 25 °C. Essa tendência se explica porque, ao descer na família:</p>}
          options={[
            { letter: "a", text: "Aumenta a massa molar e, com ela, as forças de London", correct: true },
            { letter: "b", text: "Surgem ligações de hidrogênio" },
            { letter: "c", text: "As moléculas se tornam polares" },
            { letter: "d", text: "Diminuem as forças intermoleculares" },
          ]}
          resolution={<p>Todas as moléculas de halogênio são apolares (só London). Ao descer na família, aumenta o número de elétrons e a massa molar; a nuvem eletrônica fica mais polarizável e as forças de London mais intensas, elevando PF/PE — daí a mudança de gás para líquido e sólido.</p>}
        />

        <Exercise
          level="Avançado"
          title="5. Comparando isômeros"
          statement={<p>O etanol (<M>{"\\text{C}_2\\text{H}_6\\text{O}"}</M>, com grupo –OH) ferve a 78 °C, enquanto o éter dimetílico (mesma fórmula molecular, sem –OH) ferve a −24 °C. A grande diferença ocorre porque:</p>}
          options={[
            { letter: "a", text: "O etanol faz ligações de hidrogênio (O–H), o éter não", correct: true },
            { letter: "b", text: "O éter é iônico" },
            { letter: "c", text: "O etanol é apolar" },
            { letter: "d", text: "Eles têm massas molares muito diferentes" },
          ]}
          resolution={<p>Apesar da mesma fórmula molecular (mesma massa molar), o etanol possui o grupo –OH, capaz de fazer ligações de hidrogênio entre suas moléculas. No éter, o oxigênio não está ligado a H, então predomina o dipolo-dipolo (mais fraco) → PE muito menor.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="6. (ENEM-estilo) Por que o sal se dissolve em água?"
          statement={<p>Ao adicionar sal de cozinha (<M>{"\\text{NaCl}"}</M>) à água, ele se dissolve rapidamente, enquanto no óleo permanece intacto. A interação responsável por separar e estabilizar os íons em solução aquosa é:</p>}
          options={[
            { letter: "a", text: "Íon-dipolo, entre os íons e as moléculas polares de água.", correct: true },
            { letter: "b", text: "Dipolo induzido, pois a água é apolar." },
            { letter: "c", text: "Ligação metálica entre os íons." },
            { letter: "d", text: "Ligação covalente entre Na e Cl em solução." },
          ]}
          resolution={<p>A água é polar; seus polos orientam-se para os íons (O, δ⁻, para o <M>{"\\text{Na}^{+}"}</M>; H, δ⁺, para o <M>{"\\text{Cl}^{-}"}</M>), formando interações íon-dipolo que solvatam e estabilizam os íons, dissolvendo o sal. O óleo, apolar, não solvata íons — por isso o sal não se dissolve nele.</p>}
        />
      </section>
    </article>
  );
}
