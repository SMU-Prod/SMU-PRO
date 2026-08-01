"use client";
import { MathFormula as M } from "@/lib/notaon/components/MathFormula";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap03Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Química • Capítulo 3</span>
          <h1>Métodos de Separação de Misturas</h1>
          <p>
            Conheça os principais métodos físicos para separar misturas: catação, peneiração,
            decantação, filtração, destilação, cristalização e cromatografia. Cada método explora
            uma propriedade diferente dos componentes — essencial para o ENEM e para a indústria.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Fundamentos</span>
        <h2>1. Por que Separar Misturas?</h2>
        <p>
          Na natureza e na indústria, quase tudo que encontramos são misturas. Para obter substâncias
          puras ou componentes específicos com maior utilidade, precisamos separar essas misturas usando
          métodos físicos (que exploram diferenças de propriedades físicas). Nenhum método destrói ou
          cria substâncias — apenas as separa.
        </p>
        <ul>
          <li><strong>Indústria do petróleo:</strong> destilação fracionada para obter gasolina, diesel, querosene.</li>
          <li><strong>Tratamento de água:</strong> sedimentação, filtração, cloração.</li>
          <li><strong>Indústria alimentícia:</strong> filtração do suco, peneiração da farinha.</li>
          <li><strong>Medicina:</strong> centrifugação do sangue para separar plasma de células.</li>
        </ul>
        <div className="lesson-highlight">
          <h3>Princípio geral</h3>
          <p>
            Cada método de separação explora uma diferença de propriedade física entre os componentes:
            tamanho de partícula, densidade, ponto de ebulição, solubilidade, afinidade por fases.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Métodos Simples</span>
        <h2>2. Catação e Levigação</h2>
        <p>
          <strong>Catação</strong> é a separação manual de sólidos de tamanho diferente ou aspecto
          diferente de uma mistura sólido-sólido. Ex.: separar pedras de feijão, selecionar pedras
          preciosas do cascalho de garimpo.
        </p>
        <p>
          <strong>Levigação</strong> usa a diferença de densidade: a mistura sólida é tratada com
          água corrente — as partículas mais leves (menor densidade) são arrastadas pela corrente,
          enquanto as mais densas ficam no fundo. Muito utilizada no garimpo de ouro (densidade
          do ouro: 19,3 g/cm³ vs areia: ~2,6 g/cm³).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Métodos Simples</span>
        <h2>3. Peneiração (Tamisação)</h2>
        <p>
          A <strong>peneiração</strong> (ou tamisação) separa sólidos de tamanho de partícula
          diferente usando uma peneira com malha de tamanho definido. As partículas menores que a malha
          passam (tamisado) e as maiores ficam retidas (retido).
        </p>
        <ul>
          <li>Separar areia fina de cascalho.</li>
          <li>Peneirar farinha de trigo para remover grumos.</li>
          <li>Classificação de minérios por granulometria.</li>
          <li>Peneiração do solo para retirar pedras.</li>
        </ul>
        <p>
          Diferente da filtração, a peneiração trabalha com misturas <strong>sólido + sólido</strong>
          (sem líquido). A eficiência depende do tamanho da malha e do tamanho das partículas.
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Métodos por Densidade</span>
        <h2>4. Sedimentação e Decantação</h2>
        <p>
          <strong>Sedimentação</strong> é o processo pelo qual partículas mais densas que o líquido
          se depositam no fundo por ação da gravidade (ou em centrífuga). Após a sedimentação,
          realiza-se a <strong>decantação</strong>: inclinação cuidadosa do recipiente para transferir
          o líquido sobrenadante, deixando o sólido no fundo.
        </p>
        <p>
          Para misturas de <strong>dois líquidos imiscíveis</strong> (ex.: água e óleo), usa-se o
          <strong> funil de separação</strong> (funil de bromo): as duas fases se separam por
          densidade, e a fase inferior é drenada pelo registro do funil.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 220" width="480" height="220" aria-label="Funil de separação">
            {/* Funil */}
            <polygon points="160,30 320,30 270,130 210,130" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            {/* Fase superior (óleo - amarelo) */}
            <rect x="162" y="32" width="155" height="40" fill="#fef9c3" opacity="0.8"/>
            <text x="240" y="56" textAnchor="middle" fontSize="12" fill="#92400e">Fase superior (óleo)</text>
            {/* Fase inferior (água - azul) */}
            <rect x="165" y="72" width="150" height="55" fill="#bfdbfe" opacity="0.9"/>
            <text x="240" y="103" textAnchor="middle" fontSize="12" fill="#1e40af">Fase inferior (água)</text>
            {/* Linha de separação */}
            <line x1="165" y1="72" x2="315" y2="72" stroke="#374151" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="340" y="75" fontSize="11" fill="#374151">Interface</text>
            {/* Tubo inferior */}
            <rect x="225" y="130" width="30" height="50" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            {/* Registro */}
            <rect x="218" y="155" width="44" height="16" fill="#6b7280" rx="3"/>
            <text x="282" y="165" fontSize="11" fill="#6b7280">registro</text>
            {/* Seta de escoamento */}
            <line x1="240" y1="180" x2="240" y2="210" stroke="#1d4ed8" strokeWidth="2" markerEnd="url(#arrD)"/>
            <text x="250" y="207" fontSize="11" fill="#1d4ed8">água</text>
            <defs>
              <marker id="arrD" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#1d4ed8"/>
              </marker>
            </defs>
            {/* Suporte */}
            <rect x="145" y="25" width="15" height="130" fill="#9ca3af" rx="2"/>
            <rect x="100" y="150" width="60" height="8" fill="#6b7280" rx="2"/>
          </svg>
          <figcaption>Funil de separação: separa líquidos imiscíveis de densidades diferentes.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Filtração</span>
        <h2>5. Filtração Simples e Filtração a Vácuo</h2>
        <p>
          A <strong>filtração</strong> separa sólidos insolúveis de líquidos usando um material poroso
          (papel de filtro, membrana). O sólido fica retido no filtro e o líquido (filtrado) passa.
        </p>
        <p>
          Na <strong>filtração simples</strong>, usa-se gravidade — funil de vidro com papel de filtro
          dobrado em cone. É lenta, adequada para volumes pequenos.
        </p>
        <p>
          Na <strong>filtração a vácuo (Büchner)</strong>, conecta-se um funil de Büchner com placa
          porosa a um kitasato, ligado a uma bomba de vácuo. A diferença de pressão acelera muito a
          filtração — usada em laboratório para grandes volumes.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 200" width="480" height="200" aria-label="Filtração simples">
            {/* Funil de filtração */}
            <polygon points="140,20 280,20 230,100 190,100" fill="#f9fafb" stroke="#374151" strokeWidth="2"/>
            {/* Papel de filtro */}
            <polygon points="143,22 277,22 227,98 193,98" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5"/>
            <text x="210" y="60" textAnchor="middle" fontSize="11" fill="#92400e">Papel filtro</text>
            {/* Mistura sendo despejada */}
            <text x="210" y="38" textAnchor="middle" fontSize="11" fill="#374151">mistura</text>
            {/* Tubo do funil */}
            <rect x="200" y="100" width="20" height="40" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            {/* Béquer receptor */}
            <rect x="165" y="142" width="90" height="55" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" rx="3"/>
            <text x="210" y="172" textAnchor="middle" fontSize="11" fill="#1d4ed8">filtrado</text>
            {/* Suporte */}
            <rect x="120" y="15" width="12" height="135" fill="#9ca3af" rx="2"/>
            <rect x="85" y="145" width="50" height="8" fill="#6b7280" rx="2"/>
            {/* Sólido no filtro */}
            <ellipse cx="210" cy="95" rx="18" ry="5" fill="#d1d5db"/>
            <text x="300" y="95" fontSize="11" fill="#374151">← sólido retido</text>
          </svg>
          <figcaption>Filtração simples com funil de vidro e papel de filtro.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Centrifugação</span>
        <h2>6. Centrifugação: Aceleração da Sedimentação</h2>
        <p>
          A <strong>centrifugação</strong> aplica força centrífuga (aceleração muito maior que a
          gravitacional) para acelerar a sedimentação de partículas. É usada quando as partículas são
          tão pequenas que levariam horas (ou dias) para decantar por gravidade.
        </p>
        <ul>
          <li><strong>Separação do sangue:</strong> centrifugação separa plasma (sobrenadante), leucócitos e eritrócitos em camadas.</li>
          <li><strong>Centrifugação do leite:</strong> separa creme de leite (nata) da parte aquosa.</li>
          <li><strong>Indústria farmacêutica:</strong> separação de células e proteínas.</li>
          <li><strong>Centrífuga de urânio (ultracentrífuga):</strong> separa isótopos U-235 e U-238 para enriquecimento de urânio.</li>
        </ul>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Evaporação</span>
        <h2>7. Evaporação e Evaporação Fracionada</h2>
        <p>
          A <strong>evaporação</strong> remove o solvente líquido de uma solução pelo aquecimento,
          deixando o soluto sólido. Usada para recuperar sais e minerais dissolvidos em água.
          Ex.: salinas — a água do mar evapora ao sol e o sal NaCl fica depositado.
        </p>
        <p>
          A <strong>evaporação fracionada</strong> é usada quando a mistura contém vários sólidos
          com solubilidades diferentes: ao evaporar lentamente, o menos solúvel cristaliza primeiro,
          permitindo sua separação antes dos demais.
        </p>
        <div className="lesson-highlight">
          <h3>Diferença: evaporação × destilação</h3>
          <p>
            Na evaporação, o solvente é liberado para o ambiente (não é coletado). Na destilação,
            o vapor do solvente é condensado e coletado — recuperando tanto o soluto quanto o solvente.
          </p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Destilação</span>
        <h2>8. Destilação Simples: Separar Líquido de Solução</h2>
        <p>
          A <strong>destilação simples</strong> separa um líquido volátil de um soluto não volátil
          (ou de outro líquido com ponto de ebulição muito diferente). O líquido evapora, o vapor
          percorre o condensador (resfriado por água), condensa e é coletado no erlenmeyer receptor.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 200" width="480" height="200" aria-label="Aparelho de destilação simples">
            {/* Balão de destilação */}
            <circle cx="100" cy="130" r="50" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
            <text x="100" y="133" textAnchor="middle" fontSize="11" fill="#1e40af">solução</text>
            {/* Pescoço do balão */}
            <rect x="120" y="80" width="20" height="50" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" transform="rotate(-30,130,105)"/>
            {/* Termômetro */}
            <line x1="155" y1="45" x2="155" y2="90" stroke="#ef4444" strokeWidth="2"/>
            <circle cx="155" cy="45" r="6" fill="#ef4444"/>
            <text x="165" y="48" fontSize="10" fill="#ef4444">T°</text>
            {/* Condensador */}
            <rect x="180" y="60" width="160" height="30" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" rx="5" transform="rotate(-15,260,75)"/>
            <text x="265" y="68" textAnchor="middle" fontSize="10" fill="#1d4ed8" transform="rotate(-15,265,68)">condensador</text>
            {/* Setas de vapor e líquido */}
            <line x1="148" y1="82" x2="185" y2="65" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="160" y="78" fontSize="9" fill="#b45309">vapor</text>
            {/* Erlenmeyer receptor */}
            <polygon points="360,120 420,120 415,170 365,170" fill="#d1fae5" stroke="#059669" strokeWidth="2"/>
            <text x="390" y="150" textAnchor="middle" fontSize="10" fill="#065f46">destilado</text>
            {/* Chama */}
            <ellipse cx="100" cy="185" rx="20" ry="8" fill="#fde68a"/>
            <text x="100" y="188" textAnchor="middle" fontSize="9" fill="#92400e">calor</text>
            {/* Seta condensado */}
            <line x1="340" y1="115" x2="362" y2="122" stroke="#059669" strokeWidth="1.5" markerEnd="url(#arrG)"/>
            <defs>
              <marker id="arrG" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#059669"/>
              </marker>
            </defs>
          </svg>
          <figcaption>Aparelho de destilação simples: balão + condensador + recipiente coletor.</figcaption>
        </figure>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Destilação Avançada</span>
        <h2>9. Destilação Fracionada: Separar Líquidos Miscíveis</h2>
        <p>
          A <strong>destilação fracionada</strong> separa líquidos miscíveis com pontos de ebulição
          próximos, usando uma <strong>coluna de fracionamento</strong> (coluna de Vigreux ou com
          anéis de vidro). Na coluna, o vapor resfria parcialmente, o componente de maior ponto de
          ebulição condensa e retorna ao balão; o de menor ponto de ebulição segue para o condensador.
        </p>
        <p>
          <strong>Destilação do petróleo (refinaria):</strong> o petróleo bruto é aquecido a ~400 °C.
          Os componentes sobem pela torre de fracionamento e condensam em diferentes alturas:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Fração</th><th>Faixa de ebulição</th><th>Uso</th></tr>
            </thead>
            <tbody>
              <tr><td>Gás de petróleo (GLP)</td><td>Abaixo de 40 °C</td><td>Gás de cozinha</td></tr>
              <tr><td>Nafta / Gasolina</td><td>40–200 °C</td><td>Combustível automotivo, petroquímica</td></tr>
              <tr><td>Querosene</td><td>200–300 °C</td><td>Aviação, iluminação</td></tr>
              <tr><td>Diesel</td><td>250–350 °C</td><td>Motores a diesel</td></tr>
              <tr><td>Óleo lubrificante</td><td>350–500 °C</td><td>Lubrificação de motores</td></tr>
              <tr><td>Asfalto</td><td>Acima de 500 °C</td><td>Pavimentação</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Purificação</span>
        <h2>10. Cristalização e Recristalização</h2>
        <p>
          A <strong>cristalização</strong> consiste em dissolver o sólido impuro em água quente (solução
          saturada a alta temperatura), filtrar as impurezas insolúveis, e depois resfriar lentamente —
          o sólido puro cristaliza e as impurezas solúveis ficam na solução-mãe. É o método padrão
          de purificação de sais inorgânicos.
        </p>
        <p>
          A <strong>recristalização</strong> repete o processo de cristalização quantas vezes forem
          necessárias para atingir a pureza desejada. Usada em síntese de fármacos e na indústria
          de açúcar (cristalização da sacarose a partir do caldo de cana).
        </p>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Cromatografia</span>
        <h2>11. Cromatografia: Separação por Afinidade</h2>
        <p>
          A <strong>cromatografia</strong> separa misturas com base na diferença de afinidade dos
          componentes pelas fases estacionária e móvel. É usada para separar pigmentos, aminoácidos,
          fármacos e compostos orgânicos complexos.
        </p>
        <figure className="lesson-figure">
          <svg viewBox="0 0 480 220" width="480" height="220" aria-label="Cromatografia em papel">
            {/* Papel */}
            <rect x="180" y="20" width="120" height="180" fill="#fffbeb" stroke="#d97706" strokeWidth="2" rx="3"/>
            {/* Linha de aplicação */}
            <line x1="180" y1="175" x2="300" y2="175" stroke="#374151" strokeWidth="1" strokeDasharray="4,3"/>
            <text x="310" y="178" fontSize="10" fill="#374151">amostra</text>
            {/* Frente do solvente */}
            <line x1="180" y1="35" x2="300" y2="35" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="305" y="38" fontSize="10" fill="#3b82f6">frente</text>
            {/* Manchas dos componentes */}
            <ellipse cx="240" cy="90" rx="18" ry="10" fill="#86efac" opacity="0.9"/>
            <text x="240" y="93" textAnchor="middle" fontSize="9" fill="#166534">C</text>
            <ellipse cx="240" cy="125" rx="18" ry="10" fill="#fca5a5" opacity="0.9"/>
            <text x="240" y="128" textAnchor="middle" fontSize="9" fill="#991b1b">B</text>
            <ellipse cx="240" cy="155" rx="18" ry="10" fill="#93c5fd" opacity="0.9"/>
            <text x="240" y="158" textAnchor="middle" fontSize="9" fill="#1e40af">A</text>

            {/* Solvente no fundo */}
            <rect x="180" y="188" width="120" height="12" fill="#bfdbfe" opacity="0.7"/>
            <text x="240" y="198" textAnchor="middle" fontSize="9" fill="#1e40af">solvente</text>

            {/* Seta subida */}
            <line x1="155" y1="180" x2="155" y2="40" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrC)"/>
            <text x="120" y="115" fontSize="10" fill="#374151">solvente</text>
            <text x="120" y="128" fontSize="10" fill="#374151">sobe</text>
            <defs>
              <marker id="arrC" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#374151"/>
              </marker>
            </defs>

            {/* Rf */}
            <text x="350" y="90" fontSize="10" fill="#166534">Rf(C) = alto</text>
            <text x="350" y="125" fontSize="10" fill="#991b1b">Rf(B) = médio</text>
            <text x="350" y="155" fontSize="10" fill="#1e40af">Rf(A) = baixo</text>
          </svg>
          <figcaption>Cromatografia em papel: três componentes A, B, C separam-se pela diferença no fator de retenção (Rf). O componente C tem maior afinidade pela fase móvel e migra mais.</figcaption>
        </figure>
        <div className="lesson-highlight">
          <h3>Fator de retenção (Rf)</h3>
          <p>
            <M>{"R_f = \\frac{\\text{distância percorrida pelo componente}}{\\text{distância percorrida pelo solvente}}"}</M>
          </p>
          <p>O Rf é característico de cada substância num dado sistema solvente/suporte. Rf varia de 0 a 1.</p>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Tabela Geral</span>
        <h2>12. Tabela: Métodos × Tipo de Mistura × Princípio × Aplicação</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr><th>Método</th><th>Tipo de Mistura</th><th>Princípio</th><th>Aplicação Industrial</th></tr>
            </thead>
            <tbody>
              <tr><td>Catação</td><td>Sólido + sólido</td><td>Tamanho/aparência</td><td>Garimpo, seleção de grãos</td></tr>
              <tr><td>Levigação</td><td>Sólido + sólido</td><td>Diferença de densidade</td><td>Garimpo de ouro</td></tr>
              <tr><td>Peneiração</td><td>Sólido + sólido</td><td>Tamanho de partícula</td><td>Farinha, mineração</td></tr>
              <tr><td>Decantação</td><td>Sól.+liq. / Liq.+liq.</td><td>Diferença de densidade</td><td>Tratamento de água, petróleo</td></tr>
              <tr><td>Filtração</td><td>Sólido + líquido</td><td>Tamanho de partícula</td><td>ETA, indústria farmacêutica</td></tr>
              <tr><td>Centrifugação</td><td>Sólido + líquido</td><td>Densidade (força G)</td><td>Hemograma, usinas de açúcar</td></tr>
              <tr><td>Evaporação</td><td>Sólido dissolvido</td><td>Volatilidade do solvente</td><td>Salinas, produção de sal</td></tr>
              <tr><td>Destilação simples</td><td>Sólido + líquido</td><td>Ponto de ebulição</td><td>Purificação de água</td></tr>
              <tr><td>Destilação fracionada</td><td>Líquidos miscíveis</td><td>Pontos de ebulição diferentes</td><td>Refinaria de petróleo, etanol</td></tr>
              <tr><td>Cristalização</td><td>Sólidos em solução</td><td>Diferença de solubilidade</td><td>Açúcar, sal, fármacos</td></tr>
              <tr><td>Cromatografia</td><td>Mistura complexa</td><td>Afinidade pelas fases</td><td>Análise forense, farmácia, alimentos</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>13. Resumo do Capítulo</h2>
        <div className="math-grid">
          <div className="math-card">
            <span>🪨</span>
            <h3>Peneiração</h3>
            <p>Sólido + sólido. Explorada diferença de tamanho. Farinha, minério, cascalho.</p>
          </div>
          <div className="math-card">
            <span>🫙</span>
            <h3>Decantação</h3>
            <p>Diferença de densidade. Funil de separação para líquidos imiscíveis.</p>
          </div>
          <div className="math-card">
            <span>🔬</span>
            <h3>Filtração</h3>
            <p>Sólido insolúvel em líquido. Papel filtro ou Büchner a vácuo.</p>
          </div>
          <div className="math-card">
            <span>🌡️</span>
            <h3>Destilação Fracionada</h3>
            <p>Líquidos miscíveis com pontos de ebulição diferentes. Base da refinaria do petróleo.</p>
          </div>
          <div className="math-card">
            <span>💎</span>
            <h3>Cristalização</h3>
            <p>Purificação: dissolve a quente, filtra, resfria. Cristais puros precipitam.</p>
          </div>
          <div className="math-card">
            <span>🎨</span>
            <h3>Cromatografia</h3>
            <p>Separa por afinidade. <M>{"R_f = d_{\\text{comp}}/d_{\\text{solv}}"}</M>. Análise forense e farmacêutica.</p>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>Questões para Praticar</h2>

        <Exercise
          level="Básico"
          title="1. Método de Separação Adequado"
          statement={<p>Para separar uma mistura de areia e sal dissolvido em água, qual a sequência correta de métodos?</p>}
          options={[
            { letter: "a", text: "Filtração (retém areia) → evaporação (obtém sal)", correct: true },
            { letter: "b", text: "Decantação → destilação simples" },
            { letter: "c", text: "Peneiração → centrifugação" },
            { letter: "d", text: "Cristalização → filtração" },
          ]}
          resolution={<p>A areia é insolúvel — retida pelo papel de filtro na filtração. O filtrado (solução de NaCl) é então aquecido: a água evapora e o sal cristaliza. Sequência correta: <strong>filtração → evaporação</strong>.</p>}
        />

        <Exercise
          level="Intermediário"
          title="2. Cromatografia e Fator Rf"
          statement={<p>Em uma cromatografia em papel, o solvente percorreu 12 cm. Um pigmento percorreu 9 cm e outro percorreu 4 cm. Calcule o Rf de cada pigmento e indique qual tem maior afinidade pela fase móvel (solvente).</p>}
          options={[
            { letter: "a", text: "Rf₁ = 0,75 e Rf₂ = 0,33; o pigmento 1 tem maior afinidade pela fase móvel.", correct: true },
            { letter: "b", text: "Rf₁ = 0,33 e Rf₂ = 0,75; o pigmento 2 tem maior afinidade pela fase móvel." },
            { letter: "c", text: "Rf₁ = 9 e Rf₂ = 4; não é possível comparar." },
            { letter: "d", text: "Rf₁ = 0,75 e Rf₂ = 0,33; o pigmento 2 tem maior afinidade." },
          ]}
          resolution={<p><M>{"R_{f1} = 9/12 = 0{,}75"}</M>; <M>{"R_{f2} = 4/12 = 0{,}33"}</M>. Maior Rf significa maior afinidade pela fase móvel (solvente) e menor pela fase estacionária (papel). O pigmento 1 (Rf = 0,75) migra mais — maior afinidade pelo solvente.</p>}
        />

        <Exercise
          level="Avançado"
          title="3. Destilação Fracionada do Petróleo"
          statement={<p>Em uma refinaria, o petróleo bruto é submetido à destilação fracionada em torre. Quatro frações A, B, C, D condensam em alturas crescentes da torre (A no fundo, D no topo). Sobre essas frações, é CORRETO afirmar:</p>}
          options={[
            { letter: "a", text: "A (fundo) tem maior ponto de ebulição; D (topo) tem menor ponto de ebulição.", correct: true },
            { letter: "b", text: "A tem menor ponto de ebulição porque o fundo é mais quente." },
            { letter: "c", text: "D tem maior densidade e maior ponto de ebulição." },
            { letter: "d", text: "Todas as frações têm o mesmo ponto de ebulição, diferindo apenas na densidade." },
          ]}
          resolution={<p>Na torre de fracionamento, a temperatura diminui da base para o topo. As frações mais pesadas (maior ponto de ebulição e maior densidade) condensam próximas ao fundo — asfalto e óleos pesados. As mais leves (menor ponto de ebulição, menor densidade) sobem mais e condensam no topo — GLP e nafta. Portanto, A tem maior ponto de ebulição e D, menor.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="4. (ENEM-estilo) Tratamento de Água"
          statement={<p>A Estação de Tratamento de Água (ETA) utiliza várias etapas para transformar água bruta em água potável. As principais etapas, em ordem, são: (1) coagulação — adição de sulfato de alumínio para aglomerar partículas; (2) floculação — agitação lenta para formar flocos; (3) decantação — flocos sedimentam; (4) filtração — remoção de partículas finas por leito de areia e brita; (5) cloração e fluoretação. Com base nesse processo, a etapa que separa sólidos em suspensão pela diferença de densidade é:</p>}
          options={[
            { letter: "a", text: "Decantação (etapa 3), em que os flocos de maior densidade sedimentam por ação da gravidade.", correct: true },
            { letter: "b", text: "Filtração (etapa 4), pois o leito filtrante atua pela diferença de densidade." },
            { letter: "c", text: "Coagulação (etapa 1), pois o Al₂(SO₄)₃ aumenta a densidade da água." },
            { letter: "d", text: "Cloração (etapa 5), pois o cloro precipita as partículas em suspensão." },
          ]}
          resolution={<p>A decantação (etapa 3) separa os flocos (sólidos de densidade maior que a água) por ação da gravidade — eles sedimentam no fundo do decantador. A filtração retira partículas menores por tamanho (não por densidade). A coagulação/floculação prepara as partículas para decantação, mas não as separa ainda.</p>}
        />

        <Exercise
          level="Contextualizado"
          title="5. (ENEM-estilo) Centrifugação no Hemograma"
          statement={<p>O hemograma é um exame de sangue que quantifica os componentes celulares. Para realizá-lo, uma amostra de sangue com anticoagulante é colocada em centrífuga a alta rotação. Após a centrifugação, observam-se três camadas: camada inferior densa e vermelha, fina camada intermediária esbranquiçada e camada superior amarelada. As camadas inferior, intermediária e superior correspondem, respectivamente, a:</p>}
          options={[
            { letter: "a", text: "Eritrócitos (hemácias), leucócitos e plaquetas, plasma sanguíneo.", correct: true },
            { letter: "b", text: "Plasma, leucócitos, eritrócitos." },
            { letter: "c", text: "Leucócitos, plasma, eritrócitos." },
            { letter: "d", text: "Plasma, eritrócitos, leucócitos." },
          ]}
          resolution={<p>A centrifugação separa por densidade. Eritrócitos (hemácias): mais densos (~1,10 g/mL), ficam no fundo (camada vermelha). Leucócitos e plaquetas: densidade intermediária (~1,06 g/mL), camada branca (buffy coat). Plasma: menos denso (~1,03 g/mL), fica no topo (camada amarelada). Esse princípio é o mesmo da decantação, acelerada por força centrífuga de até 3000×g.</p>}
        />
      </section>
    </article>
  );
}
