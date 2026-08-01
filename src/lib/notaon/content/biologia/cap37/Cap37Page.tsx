"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap37Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 37</span>

          <h1>Histologia Animal: Tecido Epitelial e Tecidos Conjuntivos</h1>

          <p>
            A histologia é o ramo da Biologia que estuda os <strong>tecidos</strong> —
            conjuntos de células morfologicamente semelhantes e funcionalmente
            integradas. No corpo humano, toda a diversidade estrutural deriva de apenas
            quatro tecidos básicos: epitelial, conjuntivo, muscular e nervoso. Neste
            capítulo, você vai dominar as características, a classificação e as funções
            do <strong>tecido epitelial</strong> e de todos os <strong>tecidos
            conjuntivos</strong> (incluindo os especiais: adiposo, cartilaginoso,
            ósseo e sanguíneo) — temas recorrentes e de alto peso no ENEM e nos
            principais vestibulares brasileiros.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>

        <h2>1. Os Quatro Tecidos Animais Básicos</h2>

        <p>
          A histologia animal clássica reconhece <strong>quatro grandes grupos
          teciduais</strong>, cada um com origem embriológica, composição celular
          e função próprias. Todos derivam das três camadas germinativas do embrião —
          ectoderme, mesoderme e endoderme — e atuam de forma coordenada para manter
          a homeostase do organismo.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧱</span>
            <h3>Tecido Epitelial</h3>
            <p>
              Reveste superfícies, forma glândulas. Origem: ectoderme, mesoderme
              e endoderme conforme a localização.
            </p>
          </div>

          <div className="lesson-card">
            <span>🕸️</span>
            <h3>Tecido Conjuntivo</h3>
            <p>
              Preenche, sustenta, defende e nutre. Rica matriz extracelular.
              Origem predominantemente mesodérmica.
            </p>
          </div>

          <div className="lesson-card">
            <span>💪</span>
            <h3>Tecido Muscular</h3>
            <p>
              Responsável pela contração e movimento. Tipos: esquelético, liso
              e cardíaco. Origem mesodérmica.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚡</span>
            <h3>Tecido Nervoso</h3>
            <p>
              Integra estímulos e coordena respostas via impulsos elétricos.
              Neurônios e células gliais. Origem ectodérmica.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Foco do capítulo:</strong> os tecidos epitelial e conjuntivo
            são os mais cobrados em questões de histologia no ENEM. Dominar seus
            critérios de classificação e suas células características é essencial.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Tecido Epitelial — Características</span>

        <h2>2. Características Gerais do Tecido Epitelial</h2>

        <p>
          O tecido epitelial (ou epitélio) é definido por um conjunto de propriedades
          estruturais que o distinguem de todos os demais tecidos. As células
          epiteliais são <strong>justapostas</strong> — ou seja, ficam muito próximas
          umas das outras, unidas por especializações de membrana chamadas{" "}
          <strong>junções celulares</strong> (desmossomos, zônulas de adesão,
          junções tight). Essa disposição compacta forma uma barreira quase
          impermeável que protege o organismo e controla a passagem de substâncias.
        </p>

        <p>
          Entre as células há <strong>pouca ou nenhuma matriz extracelular</strong>,
          o que distingue o epitélio do conjuntivo (rico em matriz). O epitélio é
          sempre <strong>avascular</strong>: não possui vasos sanguíneos próprios
          e obtém nutrientes e oxigênio por difusão a partir do tecido conjuntivo
          subjacente, que o sustenta por meio de uma estrutura especializada chamada{" "}
          <strong>membrana basal</strong> — lâmina de glicoproteínas secretada
          pelos próprios epitéliócitos. Por ser exposto a desgastes mecânicos,
          tóxicos e microbianos, o epitélio possui <strong>alta capacidade de
          regeneração</strong>, com células-tronco basais que repõem continuamente
          as células superficiais perdidas.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 200" width="720" height="200" aria-label="Diagrama esquemático do tecido epitelial sobre membrana basal">
            {/* membrana basal */}
            <rect x={40} y={150} width={640} height={18} rx={4} fill="#fde68a" stroke="#d97706" strokeWidth={1.5} />
            <text x={360} y={163} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">Membrana Basal</text>
            {/* conjuntivo abaixo */}
            <rect x={40} y={168} width={640} height={22} rx={0} fill="#dcfce7" stroke="#16a34a" strokeWidth={1} />
            <text x={360} y={183} textAnchor="middle" fontSize={11} fill="#15803d">Tecido Conjuntivo (vascularizado — nutre o epitélio por difusão)</text>
            {/* células epiteliais — fileira única (simples) */}
            {[0,1,2,3,4,5,6,7,8,9].map((i) => (
              <g key={i}>
                <rect x={43 + i * 63} y={95} width={58} height={55} rx={6}
                  fill="#dbeafe" stroke="#2563eb" strokeWidth={1.5} />
                <ellipse cx={72 + i * 63} cy={123} rx={16} ry={10} fill="#3b82f6" opacity={0.55} />
              </g>
            ))}
            {/* junções */}
            {[0,1,2,3,4,5,6,7,8].map((i) => (
              <line key={i} x1={101 + i * 63} y1={97} x2={101 + i * 63} y2={148}
                stroke="#1d4ed8" strokeWidth={2} strokeDasharray="3 2" />
            ))}
            <text x={360} y={83} textAnchor="middle" fontSize={12} fontStyle="italic" fill="#1e40af">células justapostas — epitélio simples prismático</text>
            <text x={360} y={66} textAnchor="middle" fontSize={11} fill="#6b7280">(sem vasos entre as células — nutrição por difusão ↓)</text>
            {/* setas difusão */}
            <line x1={360} y1={150} x2={360} y2={120} stroke="#f59e0b" strokeWidth={2} markerEnd="url(#arr)" />
            <defs>
              <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b" />
              </marker>
            </defs>
          </svg>
          <figcaption>
            Epitélio simples prismático assentado sobre membrana basal. A nutrição
            ocorre por difusão a partir do conjuntivo subjacente — o epitélio é sempre
            avascular.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Resumo das características do epitélio</h3>
          <p>
            <strong>Células justapostas</strong> unidas por junções; <strong>pouca
            matriz extracelular</strong>; sempre <strong>avascular</strong> (nutrição
            por difusão); apoiado sobre <strong>membrana basal</strong>; <strong>alta
            capacidade regenerativa</strong>; funções: revestimento, absorção, secreção
            e sensoriamento.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Classificação dos Epitélios</span>

        <h2>3. Classificação do Epitélio de Revestimento</h2>

        <p>
          Os epitélios de revestimento são classificados por <strong>dois critérios
          combinados</strong>: (1) o número de camadas celulares e (2) a forma das
          células da camada mais superficial. Essa combinação gera uma nomenclatura
          binomial precisa, como "epitélio simples cúbico" ou "epitélio estratificado
          pavimentoso queratinizado".
        </p>

        {/* Figura SVG — grade de tipos de epitélio */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 700 310" width="700" height="310" aria-label="Grade dos tipos de epitélio por camadas e forma celular">
            {/* Cabeçalhos colunas */}
            <text x={200} y={22} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a8a">Pavimentoso (achatado)</text>
            <text x={420} y={22} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a8a">Cúbico</text>
            <text x={600} y={22} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a8a">Prismático (colunar)</text>

            {/* Cabeçalhos linhas */}
            <text x={60} y={95} textAnchor="middle" fontSize={12} fontWeight={700} fill="#7c3aed">Simples</text>
            <text x={60} y={200} textAnchor="middle" fontSize={12} fontWeight={700} fill="#7c3aed">Estratif.</text>
            <text x={60} y={270} textAnchor="middle" fontSize={12} fontWeight={700} fill="#7c3aed">Pseudo-estrat.</text>

            {/* Linha divisória */}
            <line x1={100} y1={30} x2={100} y2={305} stroke="#d1d5db" strokeWidth={1} />
            <line x1={20} y1={118} x2={690} y2={118} stroke="#d1d5db" strokeWidth={1} />
            <line x1={20} y1={220} x2={690} y2={220} stroke="#d1d5db" strokeWidth={1} />

            {/* SIMPLES PAVIMENTOSO */}
            <rect x={112} y={50} width={170} height={40} rx={4} fill="#bfdbfe" stroke="#3b82f6" strokeWidth={1.2} />
            {[0,1,2,3,4,5].map((i) => (
              <rect key={i} x={114 + i*28} y={52} width={26} height={16} rx={1}
                fill="#93c5fd" stroke="#2563eb" strokeWidth={0.8} />
            ))}
            <text x={197} y={100} textAnchor="middle" fontSize={10} fill="#1e40af">endotélio, alvéolos</text>

            {/* SIMPLES CÚBICO */}
            <rect x={330} y={50} width={170} height={40} rx={4} fill="#d1fae5" stroke="#10b981" strokeWidth={1.2} />
            {[0,1,2,3,4].map((i) => (
              <rect key={i} x={333 + i*33} y={52} width={31} height={31} rx={2}
                fill="#6ee7b7" stroke="#059669" strokeWidth={0.8} />
            ))}
            <text x={415} y={100} textAnchor="middle" fontSize={10} fill="#065f46">túbulos renais, tireoide</text>

            {/* SIMPLES PRISMÁTICO */}
            <rect x={514} y={40} width={170} height={60} rx={4} fill="#fef3c7" stroke="#d97706" strokeWidth={1.2} />
            {[0,1,2,3,4].map((i) => (
              <rect key={i} x={517 + i*33} y={42} width={27} height={52} rx={2}
                fill="#fde68a" stroke="#b45309" strokeWidth={0.8} />
            ))}
            <text x={599} y={110} textAnchor="middle" fontSize={10} fill="#92400e">intestino, estômago</text>

            {/* ESTRATIFICADO PAVIMENTOSO */}
            <g>
              {[0,1,2].map((layer) => (
                [0,1,2,3,4,5].map((i) => (
                  <rect key={`${layer}-${i}`}
                    x={114 + i * 28} y={130 + layer * 18} width={26} height={16} rx={1}
                    fill={layer === 0 ? "#93c5fd" : layer === 1 ? "#bfdbfe" : "#e0f2fe"}
                    stroke="#3b82f6" strokeWidth={0.7} />
                ))
              ))}
              <text x={197} y={210} textAnchor="middle" fontSize={10} fill="#1e40af">pele, esôfago, vagina</text>
            </g>

            {/* ESTRATIFICADO CÚBICO */}
            <g>
              {[0,1].map((layer) => (
                [0,1,2,3,4].map((i) => (
                  <rect key={`${layer}-${i}`}
                    x={333 + i * 33} y={130 + layer * 34} width={31} height={31} rx={2}
                    fill={layer === 0 ? "#6ee7b7" : "#a7f3d0"}
                    stroke="#059669" strokeWidth={0.8} />
                ))
              ))}
              <text x={415} y={210} textAnchor="middle" fontSize={10} fill="#065f46">glândulas sudoríparas</text>
            </g>

            {/* PSEUDOESTRATIFICADO */}
            <g>
              {[0,1,2,3,4,5].map((i) => {
                const h = 38 + (i % 3) * 12;
                return (
                  <rect key={i} x={114 + i * 28} y={230} width={26} height={h} rx={2}
                    fill="#c7d2fe" stroke="#6366f1" strokeWidth={0.9} />
                );
              })}
              <text x={197} y={300} textAnchor="middle" fontSize={10} fill="#4338ca">traqueia (cílios)</text>
            </g>

            {/* Legenda pseudoestrat col3 (apenas indicação) */}
            <text x={415} y={265} textAnchor="middle" fontSize={10} fill="#6b7280">—</text>
            <text x={599} y={265} textAnchor="middle" fontSize={10} fill="#6b7280">—</text>
          </svg>
          <figcaption>
            Grade de classificação dos epitélios de revestimento por número de camadas
            (linhas) e forma das células superficiais (colunas). O pseudoestratificado
            parece ter várias camadas, mas todos os núcleos tocam a membrana basal.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de Epitélio</th>
                <th>Forma das células</th>
                <th>Camadas</th>
                <th>Localização / Função</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Simples pavimentoso</td>
                <td>Achatadas</td>
                <td>1</td>
                <td>Endotélio vascular, mesotélio, alvéolos pulmonares — troca de gases e filtração</td>
              </tr>
              <tr>
                <td>Simples cúbico</td>
                <td>Cúbicas</td>
                <td>1</td>
                <td>Túbulos renais, folículos tireoidianos — secreção e absorção</td>
              </tr>
              <tr>
                <td>Simples prismático</td>
                <td>Alongadas (colunares)</td>
                <td>1</td>
                <td>Intestino delgado (com microvilosidades), estômago — absorção máxima</td>
              </tr>
              <tr>
                <td>Estratificado pavimentoso</td>
                <td>Superficiais achatadas</td>
                <td>Várias</td>
                <td>Pele (queratinizado), esôfago, vagina — proteção mecânica</td>
              </tr>
              <tr>
                <td>Estratificado cúbico</td>
                <td>Cúbicas nas camadas</td>
                <td>Várias</td>
                <td>Ductos de glândulas sudoríparas</td>
              </tr>
              <tr>
                <td>Pseudoestratificado ciliado</td>
                <td>Alturas variadas, 1 camada real</td>
                <td>1 (aparência múltipla)</td>
                <td>Traqueia e brônquios — movimento mucociliar</td>
              </tr>
              <tr>
                <td>Urotélio (transicional)</td>
                <td>Muda conforme distensão</td>
                <td>Variável</td>
                <td>Bexiga urinária — suporta variações de volume</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Epitélio Glandular</span>

        <h2>4. Epitélio Glandular: Glândulas Exócrinas e Endócrinas</h2>

        <p>
          Além do revestimento, o epitélio forma as <strong>glândulas</strong>. As
          células glandulares se especializam na síntese e liberação de produtos de
          secreção. As glândulas são classificadas principalmente quanto ao{" "}
          <strong>destino da secreção</strong>:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧪</span>
            <h3>Glândulas Exócrinas</h3>
            <p>
              Liberam a secreção por <strong>ductos</strong> para a superfície
              do corpo ou cavidades internas. Ex.: glândulas salivares (saliva),
              sudoríparas (suor), sebáceas (sebo), pâncreas exócrino
              (suco pancreático), glândulas lacrimais.
            </p>
          </div>

          <div className="lesson-card">
            <span>🩸</span>
            <h3>Glândulas Endócrinas</h3>
            <p>
              Liberam <strong>hormônios diretamente na corrente sanguínea</strong>
              (sem ducto). Ex.: hipófise, tireoide, suprarrenais, gônadas, ilhotas
              de Langerhans do pâncreas (insulina/glucagon).
            </p>
          </div>

          <div className="lesson-card">
            <span>🔁</span>
            <h3>Glândulas Mistas (anfícrinas)</h3>
            <p>
              Possuem <strong>porção exócrina e endócrina</strong> no mesmo órgão.
              Exemplo clássico: o <strong>pâncreas</strong> (ácinos —
              exócrino; ilhotas de Langerhans — endócrino).
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Glândula Exócrina</th>
                <th>Glândula Endócrina</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ducto de excreção</td>
                <td>Presente</td>
                <td>Ausente</td>
              </tr>
              <tr>
                <td>Destino da secreção</td>
                <td>Superfície / cavidade</td>
                <td>Sangue / linfa</td>
              </tr>
              <tr>
                <td>Tipo de produto</td>
                <td>Enzimas, muco, suor, sebo, leite</td>
                <td>Hormônios</td>
              </tr>
              <tr>
                <td>Exemplos</td>
                <td>Salivares, sebáceas, sudoríparas, lacrimais, pâncreas exócrino</td>
                <td>Hipófise, tireoide, suprarrenais, ovários, testículos</td>
              </tr>
              <tr>
                <td>Vascularização</td>
                <td>Menor</td>
                <td>Muito vascularizadas (difusão para o sangue)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            ⚠️ <strong>Pegadinha frequente no ENEM:</strong> o pâncreas é o
            principal exemplo de glândula <em>mista</em>. A porção endócrina
            (ilhotas de Langerhans) representa apenas cerca de 1-2% do volume total
            do órgão; o restante é exócrino e produz enzimas digestivas.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Tecido Conjuntivo — Visão Geral</span>

        <h2>5. Tecido Conjuntivo: Origem, Componentes e Funções</h2>

        <p>
          O tecido conjuntivo é o mais abundante e versátil do organismo. Deriva
          principalmente da <strong>mesoderme</strong> embrionária (exceto o tecido
          conjuntivo da face, originário da crista neural — ectoderme).
          Sua característica fundamental é a presença de <strong>grande quantidade de
          matriz extracelular</strong> entre as células, o que o distingue
          imediatamente do epitélio.
        </p>

        <p>
          A <strong>matriz extracelular</strong> é formada por dois componentes:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧶</span>
            <h3>Fibras</h3>
            <p>
              <strong>Colágenas</strong> — resistência à tração; principal proteína
              do corpo humano. <strong>Elásticas</strong> — elastina; permitem
              extensão e retração (pele, artérias). <strong>Reticulares</strong> —
              colágeno tipo III; formam tramas finas de suporte (linfonodos, fígado).
            </p>
          </div>

          <div className="lesson-card">
            <span>💧</span>
            <h3>Substância Fundamental Amorfa</h3>
            <p>
              Gel viscoso de proteoglicanos e glicoproteínas adesivas (fibronectina,
              laminina). Preenche espaços, hidrata tecidos e facilita difusão de
              nutrientes.
            </p>
          </div>
        </div>

        <p>
          As <strong>células do tecido conjuntivo</strong> são variadas e exercem
          papéis distintos:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Célula</th>
                <th>Origem</th>
                <th>Função Principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fibroblasto</strong></td>
                <td>Mesoderme</td>
                <td>Síntese de fibras colágenas, elásticas e substância fundamental — principal célula do conjuntivo</td>
              </tr>
              <tr>
                <td><strong>Macrófago</strong></td>
                <td>Monócito (sangue)</td>
                <td>Fagocitose de detritos, bactérias e células velhas; apresentação de antígenos</td>
              </tr>
              <tr>
                <td><strong>Mastócito</strong></td>
                <td>Precursor da medula óssea</td>
                <td>Libera histamina e heparina; participa de reações inflamatórias e alérgicas</td>
              </tr>
              <tr>
                <td><strong>Plasmócito</strong></td>
                <td>Linfócito B ativado</td>
                <td>Produção de anticorpos (imunoglobulinas) — defesa imunológica humoral</td>
              </tr>
              <tr>
                <td><strong>Adipócito</strong></td>
                <td>Mesoderme</td>
                <td>Armazenamento de lipídios; isolamento térmico; secreção de leptina</td>
              </tr>
              <tr>
                <td><strong>Célula reticular</strong></td>
                <td>Mesoderme</td>
                <td>Produz fibras reticulares em órgãos linfoides (baço, linfonodos)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Figura SVG — componentes do tecido conjuntivo */}
        <figure className="lesson-figure">
          <svg viewBox="0 0 680 240" width="680" height="240" aria-label="Representação esquemática dos componentes do tecido conjuntivo">
            {/* fundo */}
            <rect x={20} y={20} width={640} height={200} rx={14} fill="#f0fdf4" stroke="#86efac" strokeWidth={1.5} />

            {/* fibras colágenas */}
            {[0,1,2,3,4].map((i) => (
              <line key={`col-${i}`} x1={40 + i * 30} y1={30} x2={40 + i * 30 + 60} y2={210}
                stroke="#a16207" strokeWidth={3} strokeLinecap="round" opacity={0.7} />
            ))}
            <text x={100} y={225} textAnchor="middle" fontSize={11} fill="#a16207">fibras colágenas</text>

            {/* fibras elásticas */}
            {[0,1,2].map((i) => (
              <path key={`el-${i}`}
                d={`M${230 + i*60},${50 + i*40} Q${250 + i*60},${70 + i*40} ${260 + i*60},${60 + i*40} Q${270 + i*60},${50 + i*40} ${290 + i*60},${70 + i*40}`}
                fill="none" stroke="#7c3aed" strokeWidth={2} />
            ))}
            <text x={290} y={190} textAnchor="middle" fontSize={11} fill="#7c3aed">fibras elásticas</text>

            {/* Fibroblasto */}
            <ellipse cx={420} cy={90} rx={42} ry={24} fill="#bfdbfe" stroke="#2563eb" strokeWidth={1.5} />
            <ellipse cx={420} cy={90} rx={14} ry={10} fill="#3b82f6" opacity={0.7} />
            <text x={420} y={125} textAnchor="middle" fontSize={10} fill="#1e40af">Fibroblasto</text>

            {/* Macrófago */}
            <circle cx={530} cy={140} r={30} fill="#fecaca" stroke="#dc2626" strokeWidth={1.5} />
            <circle cx={530} cy={140} r={12} fill="#ef4444" opacity={0.65} />
            {[0,45,90,135,180,225,270,315].map((angle) => {
              const rad = angle * Math.PI / 180;
              return (
                <line key={angle}
                  x1={530 + 30 * Math.cos(rad)} y1={140 + 30 * Math.sin(rad)}
                  x2={530 + 42 * Math.cos(rad)} y2={140 + 42 * Math.sin(rad)}
                  stroke="#dc2626" strokeWidth={2} />
              );
            })}
            <text x={530} y={185} textAnchor="middle" fontSize={10} fill="#991b1b">Macrófago</text>

            {/* Mastócito */}
            <ellipse cx={360} cy={170} rx={28} ry={20} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1.5} />
            {[0,1,2,3,4,5].map((i) => (
              <circle key={i} cx={348 + i * 6} cy={172} r={3} fill="#eab308" />
            ))}
            <text x={360} y={200} textAnchor="middle" fontSize={10} fill="#a16207">Mastócito</text>

            {/* substância fundamental */}
            <text x={180} y={50} fontSize={11} fontStyle="italic" fill="#15803d">substância fundamental amorfa</text>
            {[0,1,2,3,4,5,6,7].map((i) => (
              <circle key={i} cx={160 + i*18} cy={65} r={3} fill="#86efac" opacity={0.8} />
            ))}
          </svg>
          <figcaption>
            Esquema dos principais componentes do tecido conjuntivo: fibras colágenas
            (linhas escuras), fibras elásticas (onduladas roxas), substância fundamental
            amorfa (pontos verdes) e células típicas (fibroblasto, macrófago, mastócito).
          </figcaption>
        </figure>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Conjuntivo Propriamente Dito</span>

        <h2>6. Tecido Conjuntivo Propriamente Dito: Frouxo e Denso</h2>

        <p>
          O <strong>tecido conjuntivo propriamente dito</strong> é o mais
          difundido do organismo. Pode ser classificado em dois subtipos
          conforme a proporção entre células, fibras e substância fundamental:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧵</span>
            <h3>Conjuntivo Frouxo</h3>
            <p>
              Fibras pouco densas e irregulares; <strong>muitas células</strong>
              (fibroblastos, macrófagos, mastócitos) e substância fundamental
              abundante. Preenche espaços entre órgãos, nutre epitélios e
              representa a "embalagem" dos tecidos. Muito presente em dermis,
              mucosas e ao redor de vasos.
            </p>
          </div>

          <div className="lesson-card">
            <span>💪</span>
            <h3>Conjuntivo Denso</h3>
            <p>
              Predominância de <strong>fibras colágenas compactadas</strong>;
              poucas células. Oferece grande resistência mecânica. Subdivide-se
              em <em>modelado</em> (fibras paralelas — tendões e ligamentos) e{" "}
              <em>não modelado</em> (fibras irregulares — derme profunda, cápsulas
              de órgãos).
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Importância clínica: reparação tecidual</h3>
          <p>
            Após uma lesão, os <strong>fibroblastos</strong> do conjuntivo frouxo
            proliferam e depositam colágeno, formando o tecido cicatricial.
            Uma cicatriz exuberante, com excesso de colágeno, é chamada de{" "}
            <strong>queloide</strong> — tópico cobrado em questões
            contextualizadas do ENEM.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Tecidos Conjuntivos Especiais</span>

        <h2>7. Tecidos Conjuntivos Especiais: Adiposo, Cartilaginoso e Ósseo</h2>

        <p>
          Além do conjuntivo propriamente dito, há tecidos conjuntivos
          <strong> especializados</strong> que apresentam características
          marcantes de matriz e/ou células:
        </p>

        <div className="lesson-highlight">
          <h3>Tecido Adiposo</h3>
          <p>
            Formado predominantemente por <strong>adipócitos</strong>, células
            repletas de lipídios. O tipo <strong>branco</strong> (unilocular)
            armazena energia, isola termicamente e protege mecanicamente órgãos.
            O tipo <strong>marrom</strong> (multilocular) gera calor pela
            termogênese sem tremor — abundante em recém-nascidos e hibernantes.
            Além de reserva energética, o tecido adiposo é um <strong>órgão
            endócrino</strong>: produz leptina (saciedade) e adiponectina
            (sensibilidade à insulina).
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Tecido Cartilaginoso</h3>
          <p>
            Constituído por <strong>condrócitos</strong> alojados em lacunas dentro
            de uma matriz rica em colágeno e proteoglicanos (condroitina sulfato),
            que lhe confere consistência firme, porém flexível. É{" "}
            <strong>avascular e não possui fibras nervosas</strong> — por isso
            regenera-se lentamente. Três variedades:
          </p>
          <ul>
            <li>
              <strong>Hialina</strong> — mais abundante; translúcida; reveste
              superfícies articulares e compõe traqueia, brônquios e cartilagens
              costais;
            </li>
            <li>
              <strong>Elástica</strong> — rica em fibras elásticas; flexível;
              presente na orelha externa (pavilhão auricular) e epiglote;
            </li>
            <li>
              <strong>Fibrocartilagem (fibrosa)</strong> — rica em fibras colágenas
              grossas; altamente resistente à compressão; presente nos discos
              intervertebrais e na sínfise púbica.
            </li>
          </ul>
        </div>

        <div className="lesson-highlight">
          <h3>Tecido Ósseo</h3>
          <p>
            Tecido conjuntivo com matriz <strong>mineralizada</strong> — impregnada
            de cristais de hidroxiapatita (fosfato de cálcio), o que lhe confere
            dureza e rigidez. Três células ósseas principais:
          </p>
          <ul>
            <li>
              <strong>Osteoblastos</strong> — sintetizam e secretam colágeno e
              proteínas da matriz; promovem a mineralização;
            </li>
            <li>
              <strong>Osteócitos</strong> — osteoblastos que ficaram aprisionados
              na matriz; mantêm o tecido ósseo maduro;
            </li>
            <li>
              <strong>Osteoclastos</strong> — células gigantes multinucleadas
              derivadas de monócitos; reabsorvem matriz óssea (remodelação óssea
              contínua, regulada por PTH e calcitonina).
            </li>
          </ul>
          <p>
            O osso é <strong>vascularizado e inervado</strong> (diferentemente da
            cartilagem) e serve como <strong>reservatório de cálcio e fósforo</strong>.
            A <strong>medula óssea vermelha</strong> presente nos ossos chatos
            (esterno, crânio, ilíaco) é o principal sítio de{" "}
            <strong>hematopoiese</strong> (formação de células sanguíneas).
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tecido</th>
                <th>Célula principal</th>
                <th>Característica da matriz</th>
                <th>Vascularizado?</th>
                <th>Localização típica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Conj. frouxo</td>
                <td>Fibroblasto</td>
                <td>Fibras lassas, muita SFA</td>
                <td>Sim</td>
                <td>Derme superficial, mucosas</td>
              </tr>
              <tr>
                <td>Conj. denso modelado</td>
                <td>Fibroblasto</td>
                <td>Fibras colágenas paralelas</td>
                <td>Pouco</td>
                <td>Tendões, ligamentos</td>
              </tr>
              <tr>
                <td>Conj. denso não modelado</td>
                <td>Fibroblasto</td>
                <td>Fibras colágenas irregulares</td>
                <td>Sim</td>
                <td>Derme profunda, cápsulas</td>
              </tr>
              <tr>
                <td>Adiposo</td>
                <td>Adipócito</td>
                <td>Mínima, lipídios intracel.</td>
                <td>Sim</td>
                <td>Hipoderme, mesentério</td>
              </tr>
              <tr>
                <td>Cartilaginoso hialino</td>
                <td>Condrócito</td>
                <td>Condroitina sulfato</td>
                <td>Não</td>
                <td>Articulações, traqueia</td>
              </tr>
              <tr>
                <td>Ósseo</td>
                <td>Osteócito</td>
                <td>Mineralizada (hidroxiapatita)</td>
                <td>Sim</td>
                <td>Esqueleto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 8 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Tecido Sanguíneo</span>

        <h2>8. Sangue: Tecido Conjuntivo Líquido</h2>

        <p>
          O <strong>sangue</strong> é classificado como um tecido conjuntivo
          especializado — sua <strong>matriz extracelular é líquida</strong>,
          o <strong>plasma</strong>. É composto por aproximadamente 55% de plasma
          e 45% de elementos figurados (células e fragmentos celulares). Todos
          os elementos figurados são produzidos na medula óssea vermelha por um
          processo denominado <strong>hematopoiese</strong>, a partir de uma
          célula-tronco multipotente (hemocitoblasto).
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔴</span>
            <h3>Hemácias (Eritrócitos)</h3>
            <p>
              Células anucleadas em mamíferos adultos, ricas em{" "}
              <strong>hemoglobina</strong> (proteína de transporte de O₂ e CO₂).
              Vida média de 120 dias; destruídas no baço. São o elemento
              figurado mais abundante (~5 milhões/mm³).
            </p>
          </div>

          <div className="lesson-card">
            <span>⚪</span>
            <h3>Leucócitos (Glóbulos Brancos)</h3>
            <p>
              Células nucleadas da <strong>defesa imunológica</strong>. Granulócitos
              (neutrófilos, eosinófilos, basófilos) e agranulócitos (linfócitos,
              monócitos). Capazes de sair dos vasos por diapedese.
            </p>
          </div>

          <div className="lesson-card">
            <span>🟡</span>
            <h3>Plaquetas (Trombócitos)</h3>
            <p>
              <strong>Fragmentos citoplasmáticos</strong> de megacariócitos. Sem
              núcleo. Essenciais para a <strong>hemostasia</strong> (coagulação):
              formam tampão plaquetário e ativam a cascata de coagulação.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Componente</th>
                <th>Constituição / Função</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Plasma (55%)</td>
                <td>Água (~91%), proteínas (albumina, fibrinogênio, globulinas), íons, hormônios, nutrientes, CO₂ dissolvido</td>
              </tr>
              <tr>
                <td>Hemácias (~44%)</td>
                <td>Transporte de O₂ (hemoglobina) e CO₂; pH sanguíneo (tampão bicarbonato)</td>
              </tr>
              <tr>
                <td>Leucócitos (~0,7%)</td>
                <td>Defesa imune inata (neutrófilos, macrófagos) e adaptativa (linfócitos B e T)</td>
              </tr>
              <tr>
                <td>Plaquetas (~0,3%)</td>
                <td>Coagulação, reparo vascular, liberação de fatores de crescimento</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Por que o sangue é um tecido conjuntivo?</h3>
          <p>
            Assim como os demais tecidos conjuntivos, o sangue tem{" "}
            <strong>origem mesodérmica</strong>, possui células esparsas em uma
            <strong> matriz extracelular abundante</strong> (o plasma) e tem
            funções de <strong>transporte, defesa e homeostase</strong>. A
            diferença é que sua matriz é fluida, permitindo a circulação por
            todo o organismo.
          </p>
        </div>
      </section>

      {/* ===== EXERCÍCIOS ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Características do tecido epitelial"
          statement={
            <p>
              Assinale a alternativa que apresenta corretamente as características
              fundamentais do tecido epitelial.
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Células afastadas, rica matriz extracelular e ampla vascularização.",
            },
            {
              letter: "b",
              text: "Células justapostas, pouca matriz extracelular, avascular e apoiado sobre membrana basal.",
              correct: true,
            },
            {
              letter: "c",
              text: "Células afastadas, matriz mineralizada e alta regeneração.",
            },
            {
              letter: "d",
              text: "Células justapostas, muita matriz extracelular e ausência de membrana basal.",
            },
          ]}
          resolution={
            <p>
              O tecido epitelial é caracterizado por células <strong>justapostas</strong>{" "}
              (unidas por junções), <strong>pouca ou nenhuma matriz extracelular</strong>,
              ausência de vasos sanguíneos (<strong>avascular</strong>) e apoio
              sobre membrana basal. A nutrição ocorre por difusão a partir do
              conjuntivo subjacente.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Classificação do epitélio da traqueia"
          statement={
            <p>
              O epitélio que reveste internamente a traqueia é do tipo
              pseudoestratificado ciliado. Qual das seguintes afirmativas sobre
              esse epitélio está CORRETA?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "É formado por várias camadas celulares reais, todas em contato com a membrana basal.",
            },
            {
              letter: "b",
              text: "As células têm alturas diferentes e nem todas atingem a superfície luminal, mas todos os núcleos tocam a membrana basal.",
              correct: true,
            },
            {
              letter: "c",
              text: "É avascularizado por apresentar múltiplas camadas que impedem o fluxo de nutrientes.",
            },
            {
              letter: "d",
              text: "Os cílios têm função absortiva, aumentando a área de contato com o ar.",
            },
          ]}
          resolution={
            <p>
              O epitélio <strong>pseudoestratificado</strong> tem{" "}
              <em>apenas uma camada real</em> de células, porém com alturas variadas,
              dando aparência de múltiplas camadas. Todos os núcleos tocam a membrana
              basal. Os cílios têm função de movimentar o muco com partículas e
              microrganismos para fora das vias aéreas (transporte mucociliar).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Células do tecido conjuntivo e imunidade"
          statement={
            <p>
              Em uma reação alérgica, a liberação de histamina provoca
              vasodilatação e aumento da permeabilidade capilar. Qual tipo
              celular do tecido conjuntivo é o principal responsável pela
              liberação de histamina nesse processo?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Fibroblastos, pois sintetizam a maior parte das proteínas da matriz.",
            },
            {
              letter: "b",
              text: "Plasmócitos, pois produzem anticorpos IgE que estimulam a reação.",
            },
            {
              letter: "c",
              text: "Mastócitos, pois contêm grânulos ricos em histamina e heparina liberados na desgranulação.",
              correct: true,
            },
            {
              letter: "d",
              text: "Macrófagos, pois fagocitam o antígeno e liberam histamina como sinal de alarme.",
            },
          ]}
          resolution={
            <p>
              Os <strong>mastócitos</strong> são células do tecido conjuntivo que
              armazenam histamina e heparina em grânulos citoplasmáticos. Quando
              anticorpos IgE ligados à sua membrana se ligam ao antígeno, ocorre
              a <strong>desgranulação</strong>: liberação de histamina que causa
              vasodilatação, aumento da permeabilidade vascular e recrutamento de
              outras células inflamatórias — base celular das alergias.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Pâncreas — glândula mista (ENEM)"
          statement={
            <p>
              Uma estudante de medicina observou, no microscópio, lâminas do
              pâncreas e identificou dois tipos de estruturas: ácinos (grupos
              de células com grânulos de secreção que se dirigem a ductos) e
              ilhotas de Langerhans (aglomerados celulares sem ducto, altamente
              vascularizados). A partir dessa observação, é correto afirmar que
              o pâncreas:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "É exclusivamente uma glândula endócrina, pois produz insulina e glucagon lançados no sangue.",
            },
            {
              letter: "b",
              text: "É uma glândula mista: a porção acinar é exócrina (enzimas digestivas por ductos) e as ilhotas são endócrinas (hormônios para o sangue).",
              correct: true,
            },
            {
              letter: "c",
              text: "É exclusivamente uma glândula exócrina, pois seus produtos atingem o duodeno por ductos.",
            },
            {
              letter: "d",
              text: "As ilhotas de Langerhans são glândulas exócrinas porque liberam insulina em resposta à glicose.",
            },
          ]}
          resolution={
            <p>
              O pâncreas é o exemplo clássico de <strong>glândula anfícrina (mista)</strong>.
              Os <strong>ácinos pancreáticos</strong> produzem enzimas digestivas
              (amilase, lipase, tripsina) que chegam ao duodeno pelo ducto pancreático
              — função <strong>exócrina</strong>. As <strong>ilhotas de Langerhans</strong>
              produzem insulina (células beta) e glucagon (células alfa), liberados
              diretamente na corrente sanguínea — função <strong>endócrina</strong>.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Remodelação óssea e osteoporose"
          statement={
            <p>
              A osteoporose é uma doença caracterizada pela redução da densidade
              óssea, tornando os ossos frágeis e suscetíveis a fraturas. Sabe-se
              que resulta de um desequilíbrio entre a atividade de dois tipos
              celulares do tecido ósseo. Com base no conhecimento de histologia,
              qual desequilíbrio celular melhor explica a osteoporose?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Aumento da atividade dos osteoblastos em relação aos osteoclastos, gerando excesso de matriz óssea.",
            },
            {
              letter: "b",
              text: "Aumento da atividade dos osteoclastos em relação aos osteoblastos, levando à reabsorção óssea excessiva.",
              correct: true,
            },
            {
              letter: "c",
              text: "Proliferação excessiva dos condrócitos, substituindo o tecido ósseo por cartilagem.",
            },
            {
              letter: "d",
              text: "Redução dos fibroblastos, impedindo a síntese de colágeno necessário para a flexibilidade óssea.",
            },
          ]}
          resolution={
            <p>
              A remodelação óssea é um processo contínuo de equilíbrio entre{" "}
              <strong>osteoblastos</strong> (formação da matriz) e{" "}
              <strong>osteoclastos</strong> (reabsorção da matriz). Na
              osteoporose, os osteoclastos tornam-se relativamente mais ativos
              — favorecidos pela queda do estrogênio na menopausa ou por
              deficiência de cálcio e vitamina D —, reabsorvendo mais matriz
              do que é reposta, reduzindo a densidade mineral óssea e
              aumentando o risco de fraturas.
            </p>
          }
        />
      </section>
    </article>
  );
}
