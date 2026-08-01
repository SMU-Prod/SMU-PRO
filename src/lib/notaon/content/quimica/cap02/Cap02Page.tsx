"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap02Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 2</span>
          <h1>Sistemas e Misturas: Classificação, Eutética e Azeotrópica</h1>
          <p>
            Aprenda a distinguir substâncias puras de misturas, compreenda as misturas homogêneas e
            heterogêneas, o coloide, as misturas especiais eutética e azeotrópica, e interprete
            curvas de solubilidade — temas frequentes no ENEM.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Sistema Químico: Definição, Fases e Componentes</h2>
        <p>
          Um <strong>sistema químico</strong> é toda porção de matéria que escolhemos estudar, delimitada
          do restante do universo. Um sistema pode ser formado por uma única substância (pura) ou por
          várias (mistura). Para analisar um sistema, identificamos:
        </p>
        <ul>
          <li><strong>Componentes:</strong> substâncias presentes no sistema (NaCl, H₂O, etc.).</li>
          <li><strong>Fases:</strong> regiões do sistema com propriedades físicas uniformes — separadas por superfícies de separação visíveis. Ex.: água + óleo = 2 fases; solução de sal = 1 fase.</li>
        </ul>
        <p>
          A <strong>fase</strong> é o conceito central para classificar misturas: misturas com uma única
          fase são homogêneas; com duas ou mais fases, são heterogêneas.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Identificação</span>
        <h2>2. Substância Pura × Mistura</h2>
        <p>
          Uma <strong>substância pura</strong> possui composição química definida e constante.
          Sua principal característica analítica é ter <strong>ponto de fusão e ebulição fixos</strong>{" "}
          a pressão constante — a temperatura não varia durante a mudança de estado.
        </p>
        <p>
          Uma <strong>mistura</strong> contém dois ou mais componentes. Suas características:
        </p>
        <ul>
          <li>Composição variável (pode ter mais ou menos soluto).</li>
          <li>Ponto de fusão e ebulição <strong>não fixos</strong> — variam com a concentração (exceto misturas eutéticas e azeotrópicas).</li>
          <li>Curva de aquecimento com inclinação na região de mudança de estado (ao contrário do platô da substância pura).</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Teste prático de identificação</h3>
          <p>
            Aquecemos a amostra e medimos a temperatura durante a mudança de estado. Substância pura:
            temperatura constante (platô). Mistura: temperatura varia continuamente durante a fusão.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Classificação</span>
        <h2>3. Misturas Homogêneas (Soluções): Uma Só Fase</h2>
        <p>
          Misturas <strong>homogêneas</strong> possuem uma única fase — não se distinguem regiões
          diferentes a olho nu nem ao microscópio óptico. São também chamadas de <strong>soluções</strong>.
        </p>
        <ul>
          <li>Sal dissolvido em água: <M>{"NaCl(aq)"}</M>.</li>
          <li>Álcool etílico em água (bebidas).</li>
          <li>Liga de ouro e prata (ouro branco).</li>
          <li>Ar (mistura de N₂, O₂, Ar, CO₂ e outros gases).</li>
          <li>Vinagre (ácido acético em água).</li>
        </ul>
        <p>
          Em soluções, o componente em maior quantidade é o <strong>solvente</strong> e o de menor
          quantidade é o <strong>soluto</strong>. Quando ambos estão em proporções semelhantes,
          o solvente é o de maior poder de dissolução (geralmente a água).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Classificação</span>
        <h2>4. Misturas Heterogêneas: Duas ou Mais Fases</h2>
        <p>
          Misturas <strong>heterogêneas</strong> apresentam duas ou mais fases visivelmente distintas.
          As fases podem ser separadas por métodos físicos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Exemplo</th><th>Fases</th><th>Tipo</th></tr>
            </thead>
            <tbody>
              <tr><td>Água + óleo</td><td>2 fases líquidas imiscíveis</td><td>Heterogênea</td></tr>
              <tr><td>Areia + água</td><td>Sólido + líquido</td><td>Heterogênea (suspensão)</td></tr>
              <tr><td>Granito</td><td>Quartzo + feldspato + mica</td><td>Heterogênea sólida</td></tr>
              <tr><td>Sangue não centrifugado</td><td>Plasma + células</td><td>Heterogênea</td></tr>
              <tr><td>Fumaça</td><td>Partículas sólidas + gás</td><td>Heterogênea</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Coloide</span>
        <h2>5. Coloide: Sistema Intermediário e Efeito Tyndall</h2>
        <p>
          Os <strong>coloides</strong> (ou sistemas coloidais) apresentam características intermediárias
          entre soluções e misturas heterogêneas. As partículas dispersas têm tamanho entre 1 nm e
          1000 nm — menores que as de uma suspensão, mas maiores que as de uma solução.
        </p>
        <p>
          Aparentemente homogêneos (não se separam por repouso e não filtram em papel), os coloides
          são identificados pelo <strong>Efeito Tyndall</strong>: ao passar um feixe de luz por um
          coloide, o trajeto do feixe fica visível (espalhamento da luz pelas partículas coloidais).
          Em soluções verdadeiras, o feixe não é visível.
        </p>
        <ul>
          <li>Leite (gotículas de gordura em água).</li>
          <li>Maionese (emulsão óleo/água).</li>
          <li>Gelatina, espuma de sabão, névoa, fumaça.</li>
          <li>Sangue (plasma + proteínas).</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mistura Especial</span>
        <h2>6. Mistura Eutética: Ponto de Fusão Mínimo Definido</h2>
        <p>
          Uma <strong>mistura eutética</strong> é uma mistura de composição específica que possui
          um ponto de fusão <em>fixo e mínimo</em> — comporta-se como substância pura na fusão, mas
          é uma mistura. Isso ocorre porque na proporção eutética os dois componentes solidificam
          simultaneamente.
        </p>
        <p>
          <strong>Exemplos importantes:</strong>
        </p>
        <ul>
          <li><strong>Solda (estanho/chumbo):</strong> proporção eutética ~63% Sn / 37% Pb, fusão a 183 °C.</li>
          <li><strong>Liga de mercúrio-tálio:</strong> ponto de fusão −60 °C, usada em termômetros de baixa temperatura.</li>
          <li><strong>Amálgama dental</strong> (mercúrio + outros metais): solidifica com dureza adequada.</li>
          <li>O <strong>sal de cozinha jogado no gelo</strong> forma uma mistura que funde abaixo de 0 °C — por isso o sal derrete o gelo.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Característica-chave</h3>
          <p>
            Na composição eutética: ponto de fusão FIXO (como substância pura). Em qualquer
            outra proporção: faixa de fusão (como mistura comum).
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Mistura Especial</span>
        <h2>7. Mistura Azeotrópica: Destilação sem Separação</h2>
        <p>
          Uma <strong>mistura azeotrópica</strong> é uma mistura de líquidos miscíveis que, em certa
          composição, ferve a temperatura constante e o vapor produzido tem a <em>mesma composição</em>{" "}
          do líquido. Por isso, a destilação fracionada <strong>não</strong> consegue separar os
          componentes além do ponto azeotrópico.
        </p>
        <p>
          O exemplo mais famoso é o sistema <strong>etanol/água</strong>: ao destilar uma solução
          aquosa de etanol, é possível chegar a ~95,6% de etanol (ponto azeotrópico a 78,15 °C).
          Para obter etanol anidro (100%), precisa-se de outro método (peneiras moleculares ou
          destilação azeotrópica com benzeno).
        </p>
        <ul>
          <li>Água + ácido clorídrico: ponto azeotrópico a 20,2% HCl, 108,6 °C.</li>
          <li>Água + ácido nítrico: 68% HNO₃, 120,5 °C.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Soluções</span>
        <h2>8. Soluções: Concentração Qualitativa</h2>
        <p>
          A quantidade de soluto dissolvida no solvente define o estado da solução:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Estado</th><th>Definição</th><th>Observação</th></tr>
            </thead>
            <tbody>
              <tr><td>Diluída</td><td>Pouco soluto em relação ao solvente</td><td>Longe da saturação</td></tr>
              <tr><td>Concentrada</td><td>Muito soluto — próxima da saturação</td><td>Subjetivo</td></tr>
              <tr><td>Saturada</td><td>Dissolveu o máximo possível a certa temperatura</td><td>Em equilíbrio com corpo de fundo</td></tr>
              <tr><td>Supersaturada</td><td>Mais soluto que o máximo — estado instável</td><td>Qualquer perturbação cristaliza</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          A quantidade máxima de soluto dissolvida em 100 g de solvente a temperatura definida é a
          <strong> solubilidade</strong> da substância.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Gráfico</span>
        <h2>9. Curva de Solubilidade: Interpretação</h2>
        <p>
          O gráfico de solubilidade relaciona a quantidade máxima de soluto (g por 100 g de H₂O)
          em função da temperatura. A maioria dos sólidos aumenta a solubilidade com o aumento da
          temperatura (curva crescente), mas há exceções.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 280" width="480" height="280" aria-label="Curvas de solubilidade">
            {/* Eixos */}
            <line x1="55" y1="240" x2="450" y2="240" stroke="#374151" strokeWidth="2"/>
            <line x1="55" y1="20" x2="55" y2="240" stroke="#374151" strokeWidth="2"/>
            <text x="253" y="268" textAnchor="middle" fontSize="12" fill="#374151">Temperatura (°C)</text>
            <text x="18" y="140" textAnchor="middle" fontSize="12" fill="#374151" transform="rotate(-90,18,140)">Solubilidade (g/100g H₂O)</text>

            {/* Marcas eixo X: 0, 20, 40, 60, 80, 100 */}
            {[0,20,40,60,80,100].map((v,i) => (
              <g key={v}>
                <text x={55 + i*79} y={255} textAnchor="middle" fontSize="10" fill="#374151">{v}</text>
                <line x1={55 + i*79} y1={238} x2={55 + i*79} y2={242} stroke="#374151" strokeWidth="1"/>
              </g>
            ))}
            {/* Marcas eixo Y: 0, 50, 100, 150 */}
            {[0,50,100,150].map((v,i) => (
              <g key={v}>
                <text x={50} y={240 - i*43} textAnchor="end" fontSize="10" fill="#374151">{v}</text>
                <line x1={53} y1={240 - i*43} x2={57} y2={240 - i*43} stroke="#374151" strokeWidth="1"/>
              </g>
            ))}

            {/* KNO3: muito crescente — de 13 a 246 g */}
            <polyline
              points="55,234 134,214 213,185 292,147 371,98 450,20"
              fill="none" stroke="#dc2626" strokeWidth="2.5"/>
            <text x="395" y="35" fontSize="11" fill="#dc2626" fontWeight="bold">KNO₃</text>

            {/* NaCl: quase plano — de 35,7 a 39,2 g */}
            <polyline
              points="55,178 134,175 213,172 292,169 371,166 450,163"
              fill="none" stroke="#2563eb" strokeWidth="2.5"/>
            <text x="395" y="158" fontSize="11" fill="#2563eb" fontWeight="bold">NaCl</text>

            {/* Ce2(SO4)3: decrescente — de 21 a 8 g */}
            <polyline
              points="55,149 134,160 213,175 292,190 371,205 450,216"
              fill="none" stroke="#059669" strokeWidth="2.5"/>
            <text x="395" y="212" fontSize="11" fill="#059669" fontWeight="bold">Ce₂(SO₄)₃</text>
          </svg>
          <figcaption>Curvas de solubilidade: KNO₃ (crescente acentuada), NaCl (quase constante) e Ce₂(SO₄)₃ (decrescente — anomalia).</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Aplicação</span>
        <h2>10. Análise de Curvas: Cristalização por Resfriamento</h2>
        <p>
          Quando uma solução saturada a alta temperatura é <strong>resfriada</strong>, o excesso de
          soluto que não cabe na nova solubilidade precipita na forma de cristais — processo chamado
          de <strong>cristalização fracionada</strong>.
        </p>
        <p>
          <strong>Exemplo:</strong> A 80 °C, a solubilidade do KNO₃ é de 170 g/100 g H₂O. Se
          resfiarmos até 20 °C (solubilidade = 32 g/100 g H₂O), a massa de cristais que precipita
          por 100 g de H₂O é:
        </p>
        <div className="lesson-highlight">
          <h3>Cálculo de cristais precipitados</h3>
          <p>
            <M>{"m_{\\text{cristais}} = 170 - 32 = 138 \\text{ g de KNO}_3 \\text{ por 100 g de água}"}</M>
          </p>
        </div>
        <p>
          Esse processo é amplamente usado na indústria química para <strong>purificar</strong> sais
          (recristalização) — o sal impuro dissolve a quente e resfria, os cristais puros precipitam
          e as impurezas permanecem em solução.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Classificação Completa</span>
        <h2>11. Tabela: Classificação das Misturas</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Tipo</th><th>Fases</th><th>Tamanho da partícula</th><th>Exemplos</th><th>Identificação</th></tr>
            </thead>
            <tbody>
              <tr><td>Solução verdadeira</td><td>1</td><td>&lt; 1 nm</td><td>NaCl(aq), ar</td><td>Transparente, não separa</td></tr>
              <tr><td>Coloide</td><td>aparente: 1</td><td>1–1000 nm</td><td>Leite, gelatina, névoa</td><td>Efeito Tyndall</td></tr>
              <tr><td>Suspensão (heterogênea)</td><td>2+</td><td>&gt; 1000 nm</td><td>Areia+água, sangue</td><td>Decanta ou filtra</td></tr>
              <tr><td>Eutética</td><td>1 (na fusão)</td><td>—</td><td>Solda estanho/chumbo</td><td>Ponto de fusão fixo</td></tr>
              <tr><td>Azeotrópica</td><td>1 (líq.)</td><td>—</td><td>Etanol 95,6%/água</td><td>Não separa por destilação</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>12. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🔬</span>
            <h3>Substância Pura</h3>
            <p>Composição fixa. Ponto de fusão/ebulição constante. Platô na curva de aquecimento.</p>
          </div>
          <div className="math-card">
            <span>🧪</span>
            <h3>Solução (Homogênea)</h3>
            <p>Uma fase. Partículas menores que 1 nm. Não há efeito Tyndall. Ex.: NaCl(aq).</p>
          </div>
          <div className="math-card">
            <span>💡</span>
            <h3>Coloide</h3>
            <p>Efeito Tyndall. Partículas de 1–1000 nm. Ex.: leite, névoa, maionese.</p>
          </div>
          <div className="math-card">
            <span>🧊</span>
            <h3>Mistura Eutética</h3>
            <p>Fusão em temperatura única e mínima. Se comporta como substância pura na fusão.</p>
          </div>
          <div className="math-card">
            <span>⚗️</span>
            <h3>Mistura Azeotrópica</h3>
            <p>Não separa por destilação simples. Etanol/água: máximo 95,6% v/v de álcool.</p>
          </div>
          <div className="math-card">
            <span>📈</span>
            <h3>Curva de Solubilidade</h3>
            <p>Resfriamento de solução saturada: <M>{"m_{\\text{cristais}} = S_{T1} - S_{T2}"}</M></p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Diagrama de Misturas</span>
        <h2>Síntese Visual: Classificação e Separação de Misturas</h2>

        <svg viewBox="0 0 700 220" className="lesson-svg" aria-label="Mapa conceitual de classificação de misturas">
          {/* Matéria */}
          <ellipse cx="350" cy="30" rx="80" ry="22" fill="#f1f5f9" stroke="#475569" strokeWidth="2" />
          <text x="350" y="35" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#0f172a">Matéria</text>
          {/* linhas */}
          <line x1="270" y1="30" x2="180" y2="70" stroke="#475569" strokeWidth="1.5" />
          <line x1="430" y1="30" x2="520" y2="70" stroke="#475569" strokeWidth="1.5" />
          {/* Substância pura */}
          <ellipse cx="175" cy="88" rx="90" ry="22" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="175" y="93" textAnchor="middle" fontSize="13" fill="#1d4ed8">Substância Pura</text>
          {/* Mistura */}
          <ellipse cx="525" cy="88" rx="90" ry="22" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="525" y="93" textAnchor="middle" fontSize="13" fill="#166534">Mistura</text>
          {/* subtipos substância */}
          <line x1="130" y1="110" x2="100" y2="145" stroke="#2563eb" strokeWidth="1.5" />
          <line x1="220" y1="110" x2="250" y2="145" stroke="#2563eb" strokeWidth="1.5" />
          <ellipse cx="95" cy="162" rx="80" ry="20" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="95" y="167" textAnchor="middle" fontSize="12" fill="#1d4ed8">Simples (1 elem.)</text>
          <ellipse cx="255" cy="162" rx="80" ry="20" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="255" y="167" textAnchor="middle" fontSize="12" fill="#1d4ed8">Composta (2+ elem.)</text>
          {/* subtipos mistura */}
          <line x1="480" y1="110" x2="450" y2="145" stroke="#16a34a" strokeWidth="1.5" />
          <line x1="570" y1="110" x2="600" y2="145" stroke="#16a34a" strokeWidth="1.5" />
          <ellipse cx="445" cy="162" rx="85" ry="20" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
          <text x="445" y="167" textAnchor="middle" fontSize="12" fill="#166534">Homogênea (1 fase)</text>
          <ellipse cx="605" cy="162" rx="85" ry="20" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
          <text x="605" y="167" textAnchor="middle" fontSize="12" fill="#166534">Heterogênea (2+ fases)</text>
          {/* exemplos */}
          <text x="95" y="195" textAnchor="middle" fontSize="11" fill="#475569">O₂, Fe, Au</text>
          <text x="255" y="195" textAnchor="middle" fontSize="11" fill="#475569">H₂O, NaCl</text>
          <text x="445" y="195" textAnchor="middle" fontSize="11" fill="#475569">água salgada, ar</text>
          <text x="605" y="195" textAnchor="middle" fontSize="11" fill="#475569">areia+água, leite</text>
        </svg>

        <svg viewBox="0 0 700 200" className="lesson-svg" aria-label="Métodos de separação de misturas">
          <rect x="40" y="20" width="180" height="150" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
          <text x="130" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1d4ed8">Filtração</text>
          <text x="130" y="65" textAnchor="middle" fontSize="12" fill="#1d4ed8">Separa sólido</text>
          <text x="130" y="83" textAnchor="middle" fontSize="12" fill="#1d4ed8">de líquido</text>
          <text x="130" y="103" textAnchor="middle" fontSize="11" fill="#1d4ed8">ex: café no coador</text>
          <text x="130" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1d4ed8">Decantação</text>
          <text x="130" y="163" textAnchor="middle" fontSize="11" fill="#1d4ed8">sólido+líquido por gravidade</text>

          <rect x="260" y="20" width="180" height="150" rx="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
          <text x="350" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">Destilação</text>
          <text x="350" y="65" textAnchor="middle" fontSize="12" fill="#166534">Separa líquidos</text>
          <text x="350" y="83" textAnchor="middle" fontSize="12" fill="#166534">por ponto de</text>
          <text x="350" y="101" textAnchor="middle" fontSize="12" fill="#166534">ebulição diferente</text>
          <text x="350" y="121" textAnchor="middle" fontSize="11" fill="#166534">simples vs fracionada</text>
          <text x="350" y="145" textAnchor="middle" fontSize="11" fill="#166534">ex: separar álcool</text>
          <text x="350" y="163" textAnchor="middle" fontSize="11" fill="#166534">da água (Peb diferentes)</text>

          <rect x="480" y="20" width="180" height="150" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="570" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#713f12">Cromatografia</text>
          <text x="570" y="65" textAnchor="middle" fontSize="12" fill="#713f12">Separa substâncias</text>
          <text x="570" y="83" textAnchor="middle" fontSize="12" fill="#713f12">por afinidade com</text>
          <text x="570" y="101" textAnchor="middle" fontSize="12" fill="#713f12">fase estacionária</text>
          <text x="570" y="121" textAnchor="middle" fontSize="11" fill="#713f12">ex: separar pigmentos</text>
          <text x="570" y="145" textAnchor="middle" fontSize="11" fill="#713f12">de caneta em papel</text>
          <text x="570" y="163" textAnchor="middle" fontSize="11" fill="#713f12">cromatografia em papel</text>
          <text x="350" y="192" textAnchor="middle" fontSize="13" fill="#0f172a">Escolha do método: depende das propriedades físicas diferentes dos componentes</text>
        </svg>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Classificação de Misturas"
          statement={<p>Classifique cada sistema: I. Água + sal (dissolvido). II. Água + areia. III. Leite. IV. Ar. A alternativa que os classifica corretamente é:</p>}
          options={[
            { letter: "a", text: "Homogênea, Heterogênea, Coloide, Homogênea", correct: true },
            { letter: "b", text: "Heterogênea, Homogênea, Homogênea, Coloide" },
            { letter: "c", text: "Coloide, Heterogênea, Homogênea, Heterogênea" },
            { letter: "d", text: "Homogênea, Coloide, Heterogênea, Homogênea" },
          ]}
          resolution={<p>I: NaCl em água = solução (homogênea). II: areia + água = suspensão (heterogênea). III: leite = coloide (gotículas de gordura entre 1-1000 nm, apresenta efeito Tyndall). IV: ar = mistura de gases = solução gasosa (homogênea).</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Cálculo com Curva de Solubilidade"
          statement={<p>A solubilidade do KNO₃ é 32 g/100 g H₂O a 20 °C e 110 g/100 g H₂O a 60 °C. Uma solução saturada é preparada com 110 g de KNO₃ em 100 g de água a 60 °C e depois resfriada até 20 °C. Quantos gramas de KNO₃ cristalizam?</p>}
          options={[
            { letter: "a", text: "78 g", correct: true },
            { letter: "b", text: "32 g" },
            { letter: "c", text: "110 g" },
            { letter: "d", text: "142 g" },
          ]}
          resolution={<p>A solubilidade cai de 110 para 32 g/100 g H₂O. Massa que cristaliza = 110 − 32 = <strong>78 g</strong> de KNO₃. Os 32 g restantes permanecem dissolvidos na solução saturada a 20 °C.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Efeito Tyndall e Identificação"
          statement={<p>Três sistemas líquidos aparentemente transparentes e incolores são submetidos a um feixe de laser: Sistema A — o feixe atravessa sem ser visível. Sistema B — o trajeto do feixe fica iluminado. Sistema C — o sistema turva após repouso e deposita partículas no fundo. Com base nessas observações, A, B e C são, respectivamente:</p>}
          options={[
            { letter: "a", text: "Solução verdadeira, Coloide, Suspensão", correct: true },
            { letter: "b", text: "Coloide, Solução, Suspensão" },
            { letter: "c", text: "Suspensão, Solução, Coloide" },
            { letter: "d", text: "Solução, Suspensão, Coloide" },
          ]}
          resolution={<p>A: feixe invisível = solução verdadeira (partículas menores que 1 nm não dispersam luz). B: feixe visível = efeito Tyndall = coloide (partículas 1-1000 nm dispersam luz). C: turva e deposita = suspensão heterogênea (partículas maiores que 1000 nm sedimentam por gravidade).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Etanol Combustível"
          statement={<p>O etanol usado como combustível no Brasil é produzido pela fermentação da cana-de-açúcar e destilação posterior. Contudo, a destilação fracionada do sistema etanol/água não consegue produzir álcool com teor superior a 95,6% em volume, pois nessa composição a mistura se comporta como substância pura durante a ebulição. Esse fenômeno é chamado de:</p>}
          options={[
            { letter: "a", text: "Ponto azeotrópico, pois o vapor gerado tem a mesma composição do líquido, impedindo a separação por destilação.", correct: true },
            { letter: "b", text: "Ponto eutético, pois a mistura funde a temperatura mínima e constante." },
            { letter: "c", text: "Saturação, pois o etanol não consegue dissolver mais água acima de 95,6%." },
            { letter: "d", text: "Cristalização fracionada, pois o etanol precipita ao atingir 95,6% de concentração." },
          ]}
          resolution={<p>O sistema etanol/água forma uma mistura azeotrópica a 95,6% v/v de etanol. No ponto azeotrópico, o líquido e o vapor têm a mesma composição — a destilação não altera a proporção, impossibilitando maior purificação. Para obter etanol anidro (100%), usa-se desidratação por peneiras moleculares ou adição de terceiro componente (benzeno ou ciclohexano).</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Solda e Mistura Eutética"
          statement={<p>Na indústria eletrônica, a solda convencional é composta por uma liga de estanho (63%) e chumbo (37%), conhecida como solda eutética. Durante o processo de soldagem, um técnico percebe que essa liga funde precisamente a 183 °C, sem intervalo de temperatura, ao contrário de outras ligas Sn/Pb com proporções diferentes. Essa característica é vantajosa porque:</p>}
          options={[
            { letter: "a", text: "Permite um ponto de solidificação preciso e rápido, evitando juntas frias e defeitos na solda.", correct: true },
            { letter: "b", text: "Aumenta a resistência mecânica da solda por ter maior concentração de estanho." },
            { letter: "c", text: "O ponto de ebulição do eutético é maior que o das ligas não eutéticas." },
            { letter: "d", text: "A mistura eutética é uma substância pura com fórmula Sn₂Pb definida." },
          ]}
          resolution={<p>A mistura eutética Sn/Pb (63/37) possui ponto de fusão único e definido (183 °C). Isso significa que ao resfriar, ela solidifica instantaneamente em toda a massa — eliminando a zona pastosa que ocorre em ligas não eutéticas. Essa solidificação precisa evita os defeitos de "junta fria" na eletrônica. A mistura eutética não é uma substância pura — é uma mistura com comportamento térmico especial.</p>}
        />
      </section>
    </article>
  );
}
