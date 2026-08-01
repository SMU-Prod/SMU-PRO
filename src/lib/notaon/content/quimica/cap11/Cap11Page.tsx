"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap11Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 11</span>
          <h1>Geometria Molecular (RPECV) e Polaridade</h1>
          <p>
            Descubra o formato tridimensional das moléculas usando a Teoria da Repulsão dos Pares
            Eletrônicos da Camada de Valência (RPECV / VSEPR) e aprenda a prever se uma molécula
            é polar ou apolar com base em sua geometria e nas ligações que a compõem.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamento</span>
        <h2>1. Teoria RPECV (VSEPR)</h2>
        <p>
          A Teoria da Repulsão dos Pares Eletrônicos da Camada de Valência (RPECV, do inglês VSEPR —
          Valence Shell Electron Pair Repulsion) afirma que os pares de elétrons ao redor do átomo central
          se repelem e se posicionam <strong>o mais afastados possível</strong> uns dos outros, determinando
          a geometria tridimensional da molécula.
        </p>
        <p>
          Pares livres (não-ligantes) repelem <em>mais</em> do que pares ligantes, pois ocupam um volume
          angular maior. Isso comprime os ângulos de ligação quando há pares livres no átomo central.
        </p>
        <div className="lesson-highlight">
          <h3>Como Aplicar a RPECV</h3>
          <p>
            1. Determine o número de pares ligantes (PL) e pares livres (PLiv) no átomo central.<br/>
            2. Some PL + PLiv para obter a geometria eletrônica.<br/>
            3. A geometria <em>molecular</em> considera apenas os átomos (ignora os pares livres).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">2 Ligações, 0 Pares Livres</span>
        <h2>2. Geometria Linear</h2>
        <p>
          Quando o átomo central tem <strong>2 domínios eletrônicos e 0 pares livres</strong>, os átomos
          se alinham em linha reta, formando um ângulo de <strong>180°</strong>. Exemplos: BeCl₂, CO₂, HCN, CS₂.
        </p>
        <p>
          O CO₂ é linear porque o C central tem 2 ligações duplas e nenhum par livre: O=C=O com ângulo 180°.
          Apesar das ligações C=O serem polares, os vetores de dipolo se cancelam — molécula <strong>apolar</strong>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">3 Ligações, 0 Pares Livres</span>
        <h2>3. Geometria Trigonal Plana</h2>
        <p>
          Com <strong>3 domínios e 0 pares livres</strong>, os átomos ligados se posicionam nos vértices de
          um triângulo equilátero com o átomo central no meio — ângulos de <strong>120°</strong>.
          Exemplos: BF₃, SO₃, AlCl₃, NO₃⁻, CO₃²⁻.
        </p>
        <div className="lesson-highlight">
          <h3>Polaridade do BF₃</h3>
          <p>
            Embora as ligações B–F sejam polares (F muito eletronegativo), a geometria trigonal plana
            simétrica faz os dipolos se cancelarem — BF₃ é <strong>apolar</strong>.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">4 Ligações, 0 Pares Livres</span>
        <h2>4. Geometria Tetraédrica</h2>
        <p>
          Com <strong>4 domínios e 0 pares livres</strong>, a geometria é tetraédrica com ângulo de
          <strong>109,5°</strong>. Exemplos: CH₄, CCl₄, NH₄⁺, SiH₄, SO₄²⁻.
        </p>
        <p>
          O CH₄ tem os 4 hidrogênios nos vértices de um tetraedro regular. Como é simétrico e as ligações
          C–H têm baixa polaridade (ΔEN = 0,4), o CH₄ é <strong>apolar</strong>.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">3 Ligações, 1 Par Livre</span>
        <h2>5. Geometria Piramidal (Pirâmide Trigonal)</h2>
        <p>
          Com <strong>4 domínios, 3 ligantes e 1 par livre</strong>, a geometria molecular é piramidal
          — o par livre "empurra" os ligantes para baixo, reduzindo o ângulo para ~<strong>107°</strong>.
          Exemplos: NH₃, PCl₃, SO₃²⁻, H₃O⁺.
        </p>
        <div className="lesson-highlight">
          <h3>Por Que 107° e Não 109,5°?</h3>
          <p>
            O par livre ocupa mais espaço angular que um par ligante, comprimindo os ângulos H–N–H de
            109,5° (tetraédrico ideal) para 107°. Efeito: par livre {`>`} par ligante na repulsão.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">2 Ligações, 2 Pares Livres</span>
        <h2>6. Geometria Angular</h2>
        <p>
          Com <strong>4 domínios, 2 ligantes e 2 pares livres</strong>, a geometria é angular com ângulo
          de ~<strong>104,5°</strong>. A repulsão de 2 pares livres comprime ainda mais o ângulo.
          Exemplos: H₂O, H₂S, SO₂, O₃.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 220" width="480" height="220" aria-label="Diagrama das 5 geometrias moleculares principais">
            {/* Linear */}
            <text x="40" y="18" fontSize="11" fill="#1565C0" fontWeight="bold">Linear (180°)</text>
            <circle cx="20" cy="50" r="10" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="20" y="54" textAnchor="middle" fontSize="9" fill="#1565C0">A</text>
            <line x1="30" y1="50" x2="60" y2="50" stroke="#333" strokeWidth="2"/>
            <circle cx="70" cy="50" r="10" fill="#FFF8E1" stroke="#BF360C" strokeWidth="1.5"/>
            <text x="70" y="54" textAnchor="middle" fontSize="9" fill="#BF360C">B</text>
            <line x1="80" y1="50" x2="110" y2="50" stroke="#333" strokeWidth="2"/>
            <circle cx="120" cy="50" r="10" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="120" y="54" textAnchor="middle" fontSize="9" fill="#1565C0">A</text>
            <text x="70" y="80" textAnchor="middle" fontSize="10" fill="#555">CO₂, BeCl₂</text>

            {/* Trigonal plana */}
            <text x="160" y="18" fontSize="11" fill="#2E7D32" fontWeight="bold">Trig. Plana (120°)</text>
            <circle cx="250" cy="55" r="10" fill="#FFF8E1" stroke="#BF360C" strokeWidth="1.5"/>
            <text x="250" y="59" textAnchor="middle" fontSize="9" fill="#BF360C">B</text>
            <circle cx="220" cy="75" r="10" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="220" y="79" textAnchor="middle" fontSize="9" fill="#1565C0">A</text>
            <circle cx="280" cy="75" r="10" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="280" y="79" textAnchor="middle" fontSize="9" fill="#1565C0">A</text>
            <circle cx="250" cy="95" r="10" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="250" y="99" textAnchor="middle" fontSize="9" fill="#1565C0">A</text>
            <line x1="250" y1="65" x2="229" y2="72" stroke="#333" strokeWidth="1.5"/>
            <line x1="250" y1="65" x2="271" y2="72" stroke="#333" strokeWidth="1.5"/>
            <line x1="250" y1="65" x2="250" y2="85" stroke="#333" strokeWidth="1.5"/>
            <text x="250" y="118" textAnchor="middle" fontSize="10" fill="#555">BF₃, SO₃</text>

            {/* Tetraédrica */}
            <text x="340" y="18" fontSize="11" fill="#6A1B9A" fontWeight="bold">Tetraédrica (109,5°)</text>
            <circle cx="420" cy="60" r="10" fill="#FFF8E1" stroke="#BF360C" strokeWidth="1.5"/>
            <text x="420" y="64" textAnchor="middle" fontSize="9" fill="#BF360C">C</text>
            <circle cx="395" cy="48" r="9" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="395" y="52" textAnchor="middle" fontSize="9" fill="#1565C0">H</text>
            <circle cx="445" cy="48" r="9" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="445" y="52" textAnchor="middle" fontSize="9" fill="#1565C0">H</text>
            <circle cx="408" cy="78" r="9" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="408" y="82" textAnchor="middle" fontSize="9" fill="#1565C0">H</text>
            <circle cx="432" cy="78" r="9" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="432" y="82" textAnchor="middle" fontSize="9" fill="#1565C0">H</text>
            <line x1="413" y1="55" x2="400" y2="52" stroke="#333" strokeWidth="1.5"/>
            <line x1="427" y1="55" x2="440" y2="52" stroke="#333" strokeWidth="1.5"/>
            <line x1="416" y1="68" x2="412" y2="74" stroke="#333" strokeWidth="1.5"/>
            <line x1="424" y1="68" x2="428" y2="74" stroke="#333" strokeWidth="1.5"/>
            <text x="420" y="103" textAnchor="middle" fontSize="10" fill="#555">CH₄, NH₄⁺</text>

            {/* Piramidal */}
            <text x="30" y="135" fontSize="11" fill="#E65100" fontWeight="bold">Piramidal (107°)</text>
            <circle cx="80" cy="170" r="10" fill="#FFF8E1" stroke="#6A1B9A" strokeWidth="1.5"/>
            <text x="80" y="174" textAnchor="middle" fontSize="9" fill="#6A1B9A">N</text>
            <circle cx="55" cy="192" r="9" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="55" y="196" textAnchor="middle" fontSize="9" fill="#1565C0">H</text>
            <circle cx="80" cy="200" r="9" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="80" y="204" textAnchor="middle" fontSize="9" fill="#1565C0">H</text>
            <circle cx="105" cy="192" r="9" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="105" y="196" textAnchor="middle" fontSize="9" fill="#1565C0">H</text>
            <line x1="72" y1="178" x2="61" y2="187" stroke="#333" strokeWidth="1.5"/>
            <line x1="80" y1="180" x2="80" y2="191" stroke="#333" strokeWidth="1.5"/>
            <line x1="88" y1="178" x2="99" y2="187" stroke="#333" strokeWidth="1.5"/>
            <text x="80" y="218" textAnchor="middle" fontSize="10" fill="#555">NH₃, PCl₃</text>

            {/* Angular */}
            <text x="200" y="135" fontSize="11" fill="#C62828" fontWeight="bold">Angular (104,5°)</text>
            <circle cx="280" cy="168" r="10" fill="#FFEBEE" stroke="#C62828" strokeWidth="1.5"/>
            <text x="280" y="172" textAnchor="middle" fontSize="9" fill="#C62828">O</text>
            <circle cx="255" cy="192" r="9" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="255" y="196" textAnchor="middle" fontSize="9" fill="#1565C0">H</text>
            <circle cx="305" cy="192" r="9" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
            <text x="305" y="196" textAnchor="middle" fontSize="9" fill="#1565C0">H</text>
            <line x1="271" y1="176" x2="261" y2="187" stroke="#333" strokeWidth="1.5"/>
            <line x1="289" y1="176" x2="299" y2="187" stroke="#333" strokeWidth="1.5"/>
            <text x="280" y="218" textAnchor="middle" fontSize="10" fill="#555">H₂O, SO₂</text>
          </svg>
          <figcaption>As 5 principais geometrias moleculares: linear, trigonal plana, tetraédrica, piramidal e angular.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">5 e 6 Ligações</span>
        <h2>7. Trigonal Bipiramidal e Octaédrica</h2>
        <p>
          Para átomos com 5 domínios eletrônicos: <strong>trigonal bipiramidal</strong> — ângulos 120° (equatorial)
          e 90° (axial-equatorial). Exemplo: PCl₅, PF₅.
        </p>
        <p>
          Para 6 domínios: <strong>octaédrica</strong> — todos os ângulos de 90°. Exemplo: SF₆, [Fe(CN)₆]³⁻.
          Essas geometrias envolvem <em>expansão do octeto</em> (uso de orbitais d) — só ocorrem em elementos
          do 3º período em diante.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Geometria</th><th>PL</th><th>PLiv</th><th>Ângulo</th><th>Exemplo</th><th>Polar?</th></tr>
            </thead>
            <tbody>
              <tr><td>Linear</td><td>2</td><td>0</td><td>180°</td><td>CO₂, BeCl₂</td><td>Apolar</td></tr>
              <tr><td>Trigonal plana</td><td>3</td><td>0</td><td>120°</td><td>BF₃, SO₃</td><td>Apolar</td></tr>
              <tr><td>Tetraédrica</td><td>4</td><td>0</td><td>109,5°</td><td>CH₄, CCl₄</td><td>Apolar</td></tr>
              <tr><td>Piramidal</td><td>3</td><td>1</td><td>~107°</td><td>NH₃, PCl₃</td><td>Polar</td></tr>
              <tr><td>Angular</td><td>2</td><td>2</td><td>~104,5°</td><td>H₂O, SO₂</td><td>Polar</td></tr>
              <tr><td>Trig. bipiramidal</td><td>5</td><td>0</td><td>120°/90°</td><td>PCl₅, PF₅</td><td>Apolar</td></tr>
              <tr><td>Octaédrica</td><td>6</td><td>0</td><td>90°</td><td>SF₆</td><td>Apolar</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Polaridade Molecular</span>
        <h2>8. Molécula Polar vs Apolar</h2>
        <p>
          A polaridade <em>molecular</em> depende de dois fatores: (1) presença de ligações polares e
          (2) geometria da molécula. Se os vetores de dipolo das ligações se <strong>cancelam</strong>
          (soma vetorial = 0), a molécula é <strong>apolar</strong>. Se não se cancelam, é <strong>polar</strong>.
        </p>
        <div className="lesson-highlight">
          <h3>Vetor Momento de Dipolo</h3>
          <p>
            O momento de dipolo <M>{"\\vec{\\mu}"}</M> aponta do polo positivo (<M>{"\\delta^+"}</M>) para o negativo
            (<M>{"\\delta^-"}</M>). Se <M>{"\\vec{\\mu}_{resultante} \\neq 0"}</M>, a molécula é polar.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Casos Especiais</span>
        <h2>9. Moléculas com Ligações Polares mas Apolares</h2>
        <p>
          Exemplos importantes de moléculas com ligações polares que resultam em molécula apolar por simetria:
        </p>
        <ul>
          <li><strong>CO₂:</strong> 2 ligações C=O polares, geometria linear → vetores opostos se cancelam → apolar.</li>
          <li><strong>CCl₄:</strong> 4 ligações C–Cl polares, geometria tetraédrica simétrica → vetores se cancelam → apolar.</li>
          <li><strong>BF₃:</strong> 3 ligações B–F polares, trigonal plana simétrica → apolar.</li>
          <li><strong>SF₆:</strong> 6 ligações S–F polares, octaédrica simétrica → apolar.</li>
        </ul>
        <p>
          Contraste: <strong>H₂O</strong> — 2 ligações O–H polares, geometria angular → vetores NÃO se cancelam → polar.
          <strong>NH₃</strong> — 3 ligações N–H, geometria piramidal → polar.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Resumo RPECV e Polaridade</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>📐</span>
            <h3>Linear</h3>
            <p>2 PL, 0 PLiv — 180° — CO₂</p>
          </div>
          <div className="math-card">
            <span>🔺</span>
            <h3>Trigonal Plana</h3>
            <p>3 PL, 0 PLiv — 120° — BF₃</p>
          </div>
          <div className="math-card">
            <span>💎</span>
            <h3>Tetraédrica</h3>
            <p>4 PL, 0 PLiv — 109,5° — CH₄</p>
          </div>
          <div className="math-card">
            <span>⛰️</span>
            <h3>Piramidal</h3>
            <p>3 PL, 1 PLiv — ~107° — NH₃</p>
          </div>
          <div className="math-card">
            <span>∠</span>
            <h3>Angular</h3>
            <p>2 PL, 2 PLiv — 104,5° — H₂O</p>
          </div>
          <div className="math-card">
            <span>⚡</span>
            <h3>Polar se…</h3>
            <p><M>{"\\vec{\\mu}_{res} \\neq 0"}</M> — assimetria</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagramas de Geometria</span>
        <h2>Síntese Visual: Geometrias Moleculares e Polaridade</h2>

        <svg viewBox="0 0 700 210" className="lesson-svg" aria-label="Geometrias moleculares: linear, angular, trigonal e tetraédrica">
          {/* Linear */}
          <text x="90" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1d4ed8">Linear (180°)</text>
          <circle cx="40" cy="70" r="18" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="40" y="75" textAnchor="middle" fontSize="11" fill="#1d4ed8">Cl</text>
          <line x1="58" y1="70" x2="112" y2="70" stroke="#475569" strokeWidth="2" />
          <circle cx="130" cy="70" r="18" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="130" y="75" textAnchor="middle" fontSize="11" fill="#92400e">C</text>
          <line x1="148" y1="70" x2="172" y2="70" stroke="#475569" strokeWidth="2" />
          <circle cx="190" cy="70" r="18" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="190" y="75" textAnchor="middle" fontSize="11" fill="#1d4ed8">Cl</text>
          <text x="115" y="105" textAnchor="middle" fontSize="11" fill="#475569">ex: CO₂, HCl</text>

          {/* Angular */}
          <text x="340" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#16a34a">Angular (~104,5°)</text>
          <circle cx="340" cy="55" r="18" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="340" y="60" textAnchor="middle" fontSize="11" fill="#166534">O</text>
          <line x1="325" y1="68" x2="290" y2="88" stroke="#475569" strokeWidth="2" />
          <circle cx="272" cy="98" r="18" fill="#e0e7ff" stroke="#4338ca" strokeWidth="2" />
          <text x="272" y="103" textAnchor="middle" fontSize="11" fill="#3730a3">H</text>
          <line x1="355" y1="68" x2="390" y2="88" stroke="#475569" strokeWidth="2" />
          <circle cx="408" cy="98" r="18" fill="#e0e7ff" stroke="#4338ca" strokeWidth="2" />
          <text x="408" y="103" textAnchor="middle" fontSize="11" fill="#3730a3">H</text>
          <text x="340" y="130" textAnchor="middle" fontSize="11" fill="#475569">ex: H₂O, SO₂</text>

          {/* Trigonal planar */}
          <text x="570" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">Trigonal (120°)</text>
          <circle cx="570" cy="55" r="18" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <text x="570" y="60" textAnchor="middle" fontSize="11" fill="#92400e">B</text>
          <line x1="552" y1="68" x2="517" y2="95" stroke="#475569" strokeWidth="2" />
          <circle cx="499" cy="105" r="18" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="499" y="110" textAnchor="middle" fontSize="11" fill="#1d4ed8">F</text>
          <line x1="570" y1="73" x2="570" y2="103" stroke="#475569" strokeWidth="2" />
          <circle cx="570" cy="121" r="18" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="570" y="126" textAnchor="middle" fontSize="11" fill="#1d4ed8">F</text>
          <line x1="588" y1="68" x2="623" y2="95" stroke="#475569" strokeWidth="2" />
          <circle cx="641" cy="105" r="18" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="641" y="110" textAnchor="middle" fontSize="11" fill="#1d4ed8">F</text>
          <text x="570" y="152" textAnchor="middle" fontSize="11" fill="#475569">ex: BF₃, SO₃</text>

          <text x="350" y="195" textAnchor="middle" fontSize="13" fill="#0f172a">Pares de e⁻ não ligantes deformam ângulos (RPECV) e determinam geometria e polaridade</text>
        </svg>

        <svg viewBox="0 0 700 190" className="lesson-svg" aria-label="Polaridade molecular: momento dipolar resultante">
          {/* polar */}
          <rect x="40" y="20" width="270" height="140" rx="6" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="175" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#9d174d">Molécula Polar</text>
          <text x="175" y="68" textAnchor="middle" fontSize="13" fill="#9d174d">Momento dipolar resultante ≠ 0</text>
          <text x="175" y="90" textAnchor="middle" fontSize="13" fill="#9d174d">Geometria assimétrica OU</text>
          <text x="175" y="110" textAnchor="middle" fontSize="13" fill="#9d174d">átomos diferentes</text>
          <text x="175" y="130" textAnchor="middle" fontSize="13" fill="#9d174d">ex: H₂O, HCl, NH₃</text>
          <text x="175" y="148" textAnchor="middle" fontSize="12" fill="#be185d">Solúvel em solventes polares</text>

          {/* apolar */}
          <rect x="390" y="20" width="270" height="140" rx="6" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
          <text x="525" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1d4ed8">Molécula Apolar</text>
          <text x="525" y="68" textAnchor="middle" fontSize="13" fill="#1d4ed8">Momento dipolar resultante = 0</text>
          <text x="525" y="90" textAnchor="middle" fontSize="13" fill="#1d4ed8">Geometria simétrica E</text>
          <text x="525" y="110" textAnchor="middle" fontSize="13" fill="#1d4ed8">mesmos átomos</text>
          <text x="525" y="130" textAnchor="middle" fontSize="13" fill="#1d4ed8">ex: CO₂, CH₄, N₂</text>
          <text x="525" y="148" textAnchor="middle" fontSize="12" fill="#1e40af">Solúvel em solventes apolares</text>

          <text x="350" y="178" textAnchor="middle" fontSize="13" fill="#0f172a">Regra geral: semelhante dissolve semelhante — polar dissolve polar</text>
        </svg>

        <table className="lesson-table">
          <thead>
            <tr><th>Geometria</th><th>n° de ligações</th><th>n° par. livre</th><th>Ângulo</th><th>Exemplo</th><th>Polar?</th></tr>
          </thead>
          <tbody>
            <tr><td>Linear</td><td>2</td><td>0</td><td>180°</td><td>CO₂, HCl</td><td>CO₂ não; HCl sim</td></tr>
            <tr><td>Angular</td><td>2</td><td>1–2</td><td>~120° ou ~104,5°</td><td>SO₂, H₂O</td><td>Sim</td></tr>
            <tr><td>Trigonal planar</td><td>3</td><td>0</td><td>120°</td><td>BF₃, SO₃</td><td>BF₃ não (sim. + iguais)</td></tr>
            <tr><td>Piramidal</td><td>3</td><td>1</td><td>~107°</td><td>NH₃, PCl₃</td><td>Sim</td></tr>
            <tr><td>Tetraédrica</td><td>4</td><td>0</td><td>109,5°</td><td>CH₄, CCl₄</td><td>CH₄ não; CHCl₃ sim</td></tr>
          </tbody>
        </table>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Geometria do CH₄"
          statement={<p>O metano (CH₄) tem 4 ligações C–H e nenhum par livre no carbono. Qual é sua geometria molecular e seu ângulo de ligação?</p>}
          options={[
            { letter: "a", text: "Linear, 180°" },
            { letter: "b", text: "Trigonal plana, 120°" },
            { letter: "c", text: "Tetraédrica, 109,5°", correct: true },
            { letter: "d", text: "Angular, 104,5°" },
          ]}
          resolution={<p>Com 4 pares ligantes e 0 pares livres no C, a geometria é tetraédrica com ângulo de 109,5°. Os 4 H estão nos vértices de um tetraedro regular.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Geometria da Água"
          statement={<p>A molécula de H₂O tem 2 ligações O–H e 2 pares livres no oxigênio. Qual geometria e ângulo resultam?</p>}
          options={[
            { letter: "a", text: "Tetraédrica, 109,5° — os pares livres não afetam a geometria" },
            { letter: "b", text: "Angular, 104,5° — os 2 pares livres comprimem o ângulo", correct: true },
            { letter: "c", text: "Linear, 180° — os pares livres se opõem e se cancelam" },
            { letter: "d", text: "Piramidal, 107° — apenas 1 par livre afeta o ângulo" },
          ]}
          resolution={<p>Com 2 PL e 2 PLiv, a geometria eletrônica é tetraédrica, mas a molecular (baseada nos átomos) é angular. Os 2 pares livres repelem mais que os ligantes, comprimindo o ângulo H–O–H de 109,5° para 104,5°.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Polaridade do CCl₄"
          statement={<p>O CCl₄ possui 4 ligações C–Cl polares (Cl mais eletronegativo que C). Por que a molécula é apolar?</p>}
          options={[
            { letter: "a", text: "Porque as ligações C–Cl são fracas e não geram dipolo" },
            { letter: "b", text: "Porque a geometria tetraédrica simétrica cancela todos os vetores de dipolo", correct: true },
            { letter: "c", text: "Porque o C e o Cl têm a mesma eletronegatividade" },
            { letter: "d", text: "Porque o CCl₄ possui pares livres que compensam os dipolos" },
          ]}
          resolution={<p>O CCl₄ tem geometria tetraédrica simétrica com 4 ligações C–Cl polares de igual intensidade. Os 4 vetores de dipolo apontam para os Cl nos 4 vértices do tetraedro e sua soma vetorial é zero — molécula apolar.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. VSEPR no ENEM"
          statement={<p>(ENEM adapt.) O gás sulfídrico H₂S, responsável pelo odor de ovo podre, tem geometria semelhante à da água. Isso ocorre porque o S, assim como o O:</p>}
          options={[
            { letter: "a", text: "Tem 3 pares ligantes e 1 par livre, gerando geometria piramidal" },
            { letter: "b", text: "Tem 2 pares ligantes e 2 pares livres, gerando geometria angular", correct: true },
            { letter: "c", text: "Tem 4 pares ligantes e 0 pares livres, gerando geometria tetraédrica" },
            { letter: "d", text: "Tem 2 pares ligantes e 0 pares livres, gerando geometria linear" },
          ]}
          resolution={<p>O S, assim como o O, tem 6 elétrons de valência. Em H₂S, forma 2 ligações S–H e mantém 2 pares livres → geometria angular, igual à da água. Por isso H₂S é polar.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. Momento de Dipolo"
          statement={<p>Considere as moléculas CO₂ (linear) e SO₂ (angular). Qual delas é polar e por quê?</p>}
          options={[
            { letter: "a", text: "CO₂, porque possui ligações duplas C=O mais polares que as de SO₂" },
            { letter: "b", text: "Ambas, pois as ligações C=O e S=O são polares" },
            { letter: "c", text: "SO₂, porque a geometria angular não cancela os vetores de dipolo", correct: true },
            { letter: "d", text: "Nenhuma, pois ambas possuem ligações duplas simétricas" },
          ]}
          resolution={<p>CO₂ é linear → vetores de dipolo opostos se cancelam → apolar. SO₂ é angular (tem 1 par livre no S) → os vetores de dipolo das ligações S=O não se cancelam → SO₂ é polar. A geometria é determinante para a polaridade molecular.</p>}
        />
      </section>
    </article>
  );
}
