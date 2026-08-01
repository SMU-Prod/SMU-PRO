"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap14Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 14</span>
          <h1>Hidrografia mundial e brasileira</h1>
          <p>
            A água doce é um dos recursos naturais mais valiosos do planeta, fundamental para a
            sobrevivência humana, para a produção de alimentos e para o funcionamento dos
            ecossistemas. Apesar de cobrir cerca de 71% da superfície terrestre, apenas 2,5% da
            água existente no planeta é doce, e a maior parte está congelada nas calotas polares e
            geleiras. Neste capítulo, estudaremos os principais sistemas hidrográficos mundiais e
            brasileiros, compreendendo sua dinâmica, importância e os desafios relacionados à sua
            gestão.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceitos fundamentais</span>
        <h2>1. O ciclo hidrológico</h2>
        <p>
          O ciclo hidrológico (ou ciclo da água) é o processo contínuo de circulação da água entre
          a atmosfera, a superfície terrestre e o subsolo. Esse ciclo é impulsionado pela energia
          solar e pela gravidade, e compreende as seguintes etapas principais: evaporação,
          transpiração (das plantas), condensação, precipitação, escoamento superficial e
          infiltração.
        </p>
        <p>
          A <strong>evapotranspiração</strong> é a combinação da evaporação da água do solo e da
          transpiração das plantas. Nas florestas tropicais densas, como a Amazônia, esse processo
          é intenso e contribui para a formação de rios voadores — correntes aéreas carregadas de
          umidade que transportam vapor d'água por milhares de quilômetros.
        </p>
        <p>
          A <strong>infiltração</strong> é a absorção da água pelo solo, sendo fundamental para o
          abastecimento dos aquíferos (reservatórios subterrâneos de água). A urbanização e o
          desmatamento reduzem a infiltração, aumentando o escoamento superficial e o risco de
          enchentes.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Etapas do ciclo hidrológico e suas características</caption>
            <thead>
              <tr>
                <th>Etapa</th>
                <th>Descrição</th>
                <th>Fatores que influenciam</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Evaporação</td>
                <td>Passagem da água do estado líquido para o gasoso</td>
                <td>Temperatura, umidade do ar, vento</td>
              </tr>
              <tr>
                <td>Condensação</td>
                <td>Formação de nuvens a partir do vapor d'água resfriado</td>
                <td>Altitude, temperatura, núcleos de condensação</td>
              </tr>
              <tr>
                <td>Precipitação</td>
                <td>Queda de água na forma de chuva, neve ou granizo</td>
                <td>Relevo, massas de ar, latitude</td>
              </tr>
              <tr>
                <td>Infiltração</td>
                <td>Absorção da água pelo solo</td>
                <td>Tipo de solo, cobertura vegetal, declividade</td>
              </tr>
              <tr>
                <td>Escoamento</td>
                <td>Fluxo da água sobre a superfície em direção aos rios</td>
                <td>Declividade, impermeabilização, precipitação</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG do ciclo hidrológico */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
          {/* Céu e nuvem */}
          <rect width="700" height="320" fill="#e8f4f8" rx="8" />
          {/* Sol */}
          <circle cx="80" cy="60" r="35" fill="#FDB813" opacity="0.9" />
          <line x1="80" y1="15" x2="80" y2="5" stroke="#FDB813" strokeWidth="3" />
          <line x1="80" y1="105" x2="80" y2="115" stroke="#FDB813" strokeWidth="3" />
          <line x1="35" y1="60" x2="25" y2="60" stroke="#FDB813" strokeWidth="3" />
          <line x1="125" y1="60" x2="135" y2="60" stroke="#FDB813" strokeWidth="3" />
          <line x1="50" y1="30" x2="43" y2="23" stroke="#FDB813" strokeWidth="3" />
          <line x1="110" y1="90" x2="117" y2="97" stroke="#FDB813" strokeWidth="3" />
          <line x1="50" y1="90" x2="43" y2="97" stroke="#FDB813" strokeWidth="3" />
          <line x1="110" y1="30" x2="117" y2="23" stroke="#FDB813" strokeWidth="3" />
          {/* Nuvem */}
          <ellipse cx="370" cy="70" rx="90" ry="40" fill="#c8dff0" />
          <ellipse cx="320" cy="85" rx="55" ry="30" fill="#c8dff0" />
          <ellipse cx="420" cy="85" rx="55" ry="30" fill="#c8dff0" />
          <text x="345" y="78" fontSize="13" fontWeight="bold" fill="#2563eb" textAnchor="middle">Condensação</text>
          {/* Setas de evaporação */}
          <path d="M 160 230 Q 200 120 330 90" stroke="#3b82f6" strokeWidth="2.5" fill="none" strokeDasharray="6,3" markerEnd="url(#arrow)" />
          <text x="195" y="155" fontSize="11" fill="#2563eb" fontWeight="bold">Evaporação</text>
          {/* Chuva */}
          <line x1="340" y1="115" x2="325" y2="145" stroke="#2563eb" strokeWidth="2" />
          <line x1="360" y1="115" x2="345" y2="148" stroke="#2563eb" strokeWidth="2" />
          <line x1="380" y1="115" x2="365" y2="148" stroke="#2563eb" strokeWidth="2" />
          <line x1="400" y1="115" x2="385" y2="148" stroke="#2563eb" strokeWidth="2" />
          <text x="390" y="135" fontSize="11" fill="#2563eb" fontWeight="bold">Precipitação</text>
          {/* Montanha */}
          <polygon points="500,250 580,120 660,250" fill="#8B7355" />
          <polygon points="540,250 600,160 660,250" fill="#A0896B" />
          {/* Neve no topo */}
          <polygon points="580,120 560,160 600,160" fill="white" />
          {/* Rio/lago */}
          <ellipse cx="200" cy="245" rx="80" ry="22" fill="#60a5fa" opacity="0.8" />
          <text x="200" y="250" fontSize="12" fill="#1e3a5f" fontWeight="bold" textAnchor="middle">Rio / Lago</text>
          {/* Solo */}
          <rect x="0" y="260" width="700" height="60" fill="#8B6914" opacity="0.7" />
          {/* Aquífero */}
          <rect x="50" y="275" width="200" height="25" fill="#93c5fd" rx="5" opacity="0.8" />
          <text x="150" y="292" fontSize="11" fill="#1e3a5f" fontWeight="bold" textAnchor="middle">Aquífero</text>
          {/* Escoamento */}
          <path d="M 550 200 Q 500 240 350 248" stroke="#2563eb" strokeWidth="2.5" fill="none" markerEnd="url(#arrow2)" />
          <text x="470" y="218" fontSize="11" fill="#2563eb" fontWeight="bold">Escoamento</text>
          {/* Infiltração */}
          <path d="M 250 260 L 250 278" stroke="#7c3aed" strokeWidth="2.5" markerEnd="url(#arrow3)" />
          <text x="255" y="272" fontSize="10" fill="#7c3aed" fontWeight="bold">Infiltração</text>
          {/* Seta markers */}
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6" />
            </marker>
            <marker id="arrow2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#2563eb" />
            </marker>
            <marker id="arrow3" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="#7c3aed" />
            </marker>
          </defs>
          {/* Legenda */}
          <text x="350" y="310" fontSize="12" fill="#374151" textAnchor="middle">Ciclo Hidrológico — principais etapas</text>
        </svg>
        <figcaption>Representação esquemática do ciclo hidrológico, mostrando as principais etapas de circulação da água na natureza.</figcaption>
      </figure>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Bacias e vertentes</span>
        <h2>2. Bacias hidrográficas e vertentes oceânicas</h2>
        <p>
          Uma <strong>bacia hidrográfica</strong> é a área de captação de água de uma determinada
          região, drenada por um rio principal e seus afluentes. O limite entre duas bacias é
          chamado de <strong>divisor de águas</strong> (geralmente coincide com relevos elevados
          como serras e planaltos). As bacias são fundamentais para o planejamento de recursos
          hídricos, geração de energia elétrica e irrigação.
        </p>
        <p>
          As vertentes oceânicas são as grandes regiões do planeta cujos rios deságuam em
          determinados oceanos. No mundo, destacam-se a <strong>vertente do Atlântico</strong> e a{" "}
          <strong>vertente do Pacífico</strong>. No Brasil, todos os rios drenam para o Oceano
          Atlântico.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Maiores bacias hidrográficas do mundo</caption>
            <thead>
              <tr>
                <th>Bacia</th>
                <th>Área (km²)</th>
                <th>Continente</th>
                <th>Rio principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bacia Amazônica</td>
                <td>7.000.000</td>
                <td>América do Sul</td>
                <td>Amazonas</td>
              </tr>
              <tr>
                <td>Bacia do Congo</td>
                <td>3.700.000</td>
                <td>África</td>
                <td>Congo</td>
              </tr>
              <tr>
                <td>Bacia do Mississippi-Missouri</td>
                <td>3.250.000</td>
                <td>América do Norte</td>
                <td>Mississippi</td>
              </tr>
              <tr>
                <td>Bacia do Rio da Prata</td>
                <td>3.100.000</td>
                <td>América do Sul</td>
                <td>Paraná</td>
              </tr>
              <tr>
                <td>Bacia do Ob</td>
                <td>2.990.000</td>
                <td>Ásia (Sibéria)</td>
                <td>Ob</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Rios do mundo</span>
        <h2>3. Principais rios do mundo</h2>
        <p>
          Os rios do mundo diferem em extensão, volume d'água (vazão) e importância. O{" "}
          <strong>Rio Nilo</strong>, na África, é historicamente considerado o mais longo do mundo
          (cerca de 6.650 km), mas estudos recentes apontam o <strong>Amazonas</strong> como
          possivelmente mais longo (cerca de 6.992 km), além de ser o maior em volume de água —
          responsável por aproximadamente 20% de toda a água doce que chega aos oceanos.
        </p>
        <p>
          O <strong>Rio Yangtze</strong> (China) é o mais longo da Ásia e abriga a maior usina
          hidrelétrica do mundo: a <strong>Usina de Três Gargantas</strong>. O{" "}
          <strong>Rio Mississipi-Missouri</strong> forma o maior sistema fluvial da América do
          Norte, sendo fundamental para a navegação e a agricultura norte-americana.
        </p>
        <p>
          Na Europa, o <strong>Reno</strong> e o <strong>Danúbio</strong> são os rios mais
          importantes economicamente. O Danúbio atravessa 10 países, sendo o rio que passa por
          mais países do mundo.
        </p>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Hidrografia brasileira</span>
        <h2>4. Bacias hidrográficas brasileiras</h2>
        <p>
          O Brasil possui uma das maiores redes hidrográficas do mundo, com rios de grande porte,
          extensão e volume d'água. A resolução do CNRH (Conselho Nacional de Recursos Hídricos)
          divide o território em 12 regiões hidrográficas. As principais bacias são:
        </p>
        <ul>
          <li>
            <strong>Bacia Amazônica:</strong> A maior do mundo em área de drenagem (cerca de 7
            milhões de km² no total, dos quais ~4 milhões no Brasil). O Rio Amazonas tem a maior
            vazão do mundo (cerca de 200.000 m³/s na foz).
          </li>
          <li>
            <strong>Bacia do Rio da Prata (Paraná-Paraguai):</strong> Inclui os rios Paraná,
            Paraguai e Uruguai. Abriga Itaipu, a segunda maior hidrelétrica do mundo. Fundamental
            para a navegação interior (Hidrovia Paraná-Paraguai).
          </li>
          <li>
            <strong>Bacia do São Francisco:</strong> Conhecido como "Rio da Integração Nacional",
            o São Francisco nasce em Minas Gerais e deságua no Atlântico entre Alagoas e Sergipe.
            É o único grande rio inteiramente brasileiro que corre de sul para norte.
          </li>
          <li>
            <strong>Bacia do Tocantins-Araguaia:</strong> O Rio Tocantins é o maior rio que nasce
            e deságua inteiramente no Brasil (se considerarmos que o Amazonas tem nascente no
            Peru). Abriga a Usina Hidrelétrica de Tucuruí.
          </li>
        </ul>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais bacias hidrográficas brasileiras</caption>
            <thead>
              <tr>
                <th>Bacia</th>
                <th>Área no Brasil (km²)</th>
                <th>Rio principal</th>
                <th>Principal uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amazônica</td>
                <td>~3.900.000</td>
                <td>Amazonas</td>
                <td>Navegação, biodiversidade</td>
              </tr>
              <tr>
                <td>Paraná-Paraguai</td>
                <td>~900.000</td>
                <td>Paraná</td>
                <td>Energia elétrica, navegação</td>
              </tr>
              <tr>
                <td>São Francisco</td>
                <td>~640.000</td>
                <td>São Francisco</td>
                <td>Irrigação, abastecimento</td>
              </tr>
              <tr>
                <td>Tocantins-Araguaia</td>
                <td>~757.000</td>
                <td>Tocantins</td>
                <td>Energia elétrica, pesca</td>
              </tr>
              <tr>
                <td>Atlântico NE Ocidental</td>
                <td>~274.000</td>
                <td>Mearim, Pindaré</td>
                <td>Abastecimento</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Rio Amazonas</span>
        <h2>5. O Rio Amazonas e a Bacia Amazônica</h2>
        <p>
          O Amazonas é um dos maiores rios do mundo em extensão e o maior em volume d'água. Nasce
          nos Andes peruanos (como Rio Ucayali-Apurímac) e percorre cerca de 6.992 km até desaguar
          no Oceano Atlântico, no estado do Pará. Sua bacia de drenagem ultrapassa 7 milhões de
          km², abrangendo partes do Brasil, Peru, Colômbia, Venezuela, Equador, Bolívia, Guiana,
          Suriname e Guiana Francesa.
        </p>
        <p>
          Os principais afluentes do Amazonas são classificados conforme a coloração de suas
          águas:
        </p>
        <ul>
          <li>
            <strong>Rios de águas brancas (barrentas):</strong> Carregam grande quantidade de
            sedimentos. Exemplos: Solimões, Juruá, Purus.
          </li>
          <li>
            <strong>Rios de águas pretas:</strong> Ricas em ácidos húmicos (matéria orgânica
            decomposta), de cor escura. Exemplo: Rio Negro.
          </li>
          <li>
            <strong>Rios de águas claras:</strong> Poucos sedimentos e baixa acidez. Exemplo:
            Tapajós, Xingu.
          </li>
        </ul>
        <p>
          O encontro das águas do Rio Negro (preto) com o Rio Solimões (barrento) próximo a
          Manaus forma um dos fenômenos naturais mais famosos do Brasil: as águas correm lado a
          lado por cerca de 6 km sem se misturar, devido às diferenças de temperatura, velocidade
          e densidade.
        </p>
      </section>

      {/* SVG Bacia Amazônica simplificada */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="350" fill="#f0fdf4" rx="8" />
          <text x="350" y="30" fontSize="15" fontWeight="bold" fill="#15803d" textAnchor="middle">Principais Bacias Hidrográficas do Brasil</text>
          {/* Fundo simplificado do Brasil */}
          <path d="M 200 50 L 480 50 L 530 100 L 600 150 L 580 250 L 520 310 L 400 330 L 280 320 L 200 280 L 150 200 L 160 130 Z" fill="#d1fae5" stroke="#6ee7b7" strokeWidth="2" />
          {/* Bacia Amazônica */}
          <path d="M 165 80 L 480 60 L 520 120 L 480 150 L 350 160 L 200 155 L 165 120 Z" fill="#93c5fd" opacity="0.5" />
          <text x="310" y="120" fontSize="12" fontWeight="bold" fill="#1e40af" textAnchor="middle">Bacia Amazônica</text>
          {/* Rio Amazonas */}
          <path d="M 165 110 Q 350 130 530 115" stroke="#2563eb" strokeWidth="3" fill="none" />
          <text x="345" y="108" fontSize="10" fill="#1e3a8a" textAnchor="middle">Rio Amazonas</text>
          {/* Rio Negro */}
          <path d="M 260 65 Q 265 90 275 110" stroke="#1e293b" strokeWidth="2" fill="none" />
          <text x="235" y="82" fontSize="9" fill="#1e293b">Rio Negro</text>
          {/* Bacia Paraná */}
          <path d="M 310 200 L 500 195 L 530 270 L 450 315 L 350 320 L 290 290 Z" fill="#fde68a" opacity="0.6" />
          <text x="400" y="265" fontSize="11" fontWeight="bold" fill="#92400e" textAnchor="middle">Bacia do Paraná</text>
          {/* Rio Paraná */}
          <path d="M 420 200 Q 450 250 480 310" stroke="#d97706" strokeWidth="2.5" fill="none" />
          <text x="465" y="238" fontSize="9" fill="#92400e">Rio Paraná</text>
          {/* Bacia São Francisco */}
          <path d="M 380 165 L 500 165 L 540 200 L 510 250 L 440 250 L 400 230 Z" fill="#fca5a5" opacity="0.5" />
          <text x="465" y="210" fontSize="10" fontWeight="bold" fill="#991b1b" textAnchor="middle">B. S. Francisco</text>
          {/* Rio São Francisco */}
          <path d="M 430 170 Q 510 200 530 250" stroke="#dc2626" strokeWidth="2.5" fill="none" />
          {/* Bacia Tocantins */}
          <path d="M 350 160 L 450 160 L 470 195 L 430 200 L 370 195 Z" fill="#c4b5fd" opacity="0.5" />
          <text x="415" y="183" fontSize="9" fontWeight="bold" fill="#5b21b6" textAnchor="middle">Tocantins</text>
          {/* Legenda */}
          <rect x="20" y="290" width="15" height="12" fill="#93c5fd" opacity="0.7" />
          <text x="40" y="301" fontSize="10" fill="#374151">Amazônica</text>
          <rect x="20" y="308" width="15" height="12" fill="#fde68a" opacity="0.7" />
          <text x="40" y="319" fontSize="10" fill="#374151">Paraná</text>
          <rect x="110" y="290" width="15" height="12" fill="#fca5a5" opacity="0.7" />
          <text x="130" y="301" fontSize="10" fill="#374151">S. Francisco</text>
          <rect x="110" y="308" width="15" height="12" fill="#c4b5fd" opacity="0.7" />
          <text x="130" y="319" fontSize="10" fill="#374151">Tocantins</text>
        </svg>
        <figcaption>Representação esquemática das principais bacias hidrográficas do Brasil, mostrando suas localizações aproximadas.</figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Rio São Francisco</span>
        <h2>6. O Rio São Francisco e sua importância</h2>
        <p>
          O Rio São Francisco, popularmente chamado de "Velho Chico", nasce na Serra da Canastra
          (Minas Gerais) e percorre cerca de 2.700 km até desaguar no Atlântico, na divisa entre
          Alagoas e Sergipe. Atravessa os estados de Minas Gerais, Bahia, Pernambuco, Alagoas e
          Sergipe, sendo fundamental para o semiárido nordestino.
        </p>
        <p>
          A <strong>Transposição do Rio São Francisco</strong>, obra iniciada na década de 2000 e
          concluída em etapas, consiste na construção de canais que levam água do São Francisco
          para os estados do Ceará, Rio Grande do Norte, Paraíba e Pernambuco (semiárido). O
          projeto é estratégico para o abastecimento humano e a irrigação em uma das regiões mais
          sujeitas a secas do Brasil.
        </p>
        <p>
          O rio também abriga usinas hidrelétricas importantes, como <strong>Sobradinho</strong>{" "}
          (BA), que formou um dos maiores lagos artificiais do mundo, e{" "}
          <strong>Paulo Afonso</strong> (BA/AL).
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tipos de rios</span>
        <h2>7. Classificação dos rios brasileiros</h2>
        <p>
          Os rios brasileiros podem ser classificados de diferentes formas, conforme o regime
          hidrológico, a origem da água ou a direção do escoamento em relação ao planalto:
        </p>
        <ul>
          <li>
            <strong>Rios perenes:</strong> Têm água o ano todo. Exemplos: Amazonas, Paraná.
          </li>
          <li>
            <strong>Rios temporários (intermitentes):</strong> Secam em determinados períodos do
            ano, comuns no semiárido nordestino.
          </li>
          <li>
            <strong>Rios pluviais:</strong> Abastecidos principalmente pelas chuvas. A maioria dos
            rios brasileiros.
          </li>
          <li>
            <strong>Rios de planalto:</strong> Correm em terrenos acidentados, com quedas d'água e
            corredeiras. Grande potencial hidrelétrico. Exemplos: Paraná, Grande, Paranaíba.
          </li>
          <li>
            <strong>Rios de planície:</strong> Correm em terrenos planos, com pouca velocidade e
            grande capacidade de navegação. Exemplos: Amazonas, Paraguai, Solimões.
          </li>
        </ul>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparação entre rios de planalto e rios de planície</caption>
            <thead>
              <tr>
                <th>Característica</th>
                <th>Rios de Planalto</th>
                <th>Rios de Planície</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Relevo</td>
                <td>Acidentado, com desníveis</td>
                <td>Plano, baixas altitudes</td>
              </tr>
              <tr>
                <td>Velocidade</td>
                <td>Alta, com corredeiras</td>
                <td>Baixa, meandrante</td>
              </tr>
              <tr>
                <td>Potencial</td>
                <td>Hidrelétrico (quedas)</td>
                <td>Navegação interior</td>
              </tr>
              <tr>
                <td>Sedimentação</td>
                <td>Erosão do leito</td>
                <td>Deposição de sedimentos</td>
              </tr>
              <tr>
                <td>Exemplos (Brasil)</td>
                <td>Paraná, Iguaçu, Grande</td>
                <td>Amazonas, Paraguai</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Aquíferos</span>
        <h2>8. Aquíferos: reservatórios subterrâneos</h2>
        <p>
          Aquíferos são formações geológicas porosas ou fraturadas capazes de armazenar e
          transmitir água subterrânea. São reservatórios naturais de extrema importância para o
          abastecimento humano, especialmente em regiões com baixa disponibilidade de água
          superficial.
        </p>
        <p>
          O <strong>Aquífero Guarani</strong> é um dos maiores do mundo, localizado sob o território
          de Brasil, Argentina, Uruguai e Paraguai. Com área de 1,2 milhão de km², ele armazena
          cerca de 37.000 km³ de água e abastece milhões de pessoas, especialmente no sul e
          centro-oeste do Brasil. É um recurso estratégico, mas vulnerável à contaminação por
          agrotóxicos e exploração excessiva.
        </p>
        <p>
          O <strong>Aquífero Alter do Chão</strong> (Amazônia) é apontado por alguns estudos como
          ainda maior que o Guarani, mas é menos estudado e explorado.
        </p>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Energia hidrelétrica</span>
        <h2>9. Rios e geração de energia elétrica no Brasil</h2>
        <p>
          O Brasil possui uma das maiores capacidades instaladas de geração hidrelétrica do mundo.
          A abundância de rios com grande desnível (rios de planalto) e alto volume d'água
          favoreceu o desenvolvimento dessa fonte energética. As hidrelétricas respondem por cerca
          de 60% da energia elétrica gerada no país.
        </p>
        <p>
          As principais usinas hidrelétricas brasileiras são:
        </p>
        <ul>
          <li>
            <strong>Itaipu</strong> (rio Paraná, PR/MS): Compartilhada com o Paraguai, foi durante
            anos a maior do mundo e ainda é uma das maiores em geração de energia.
          </li>
          <li>
            <strong>Belo Monte</strong> (rio Xingu, PA): A maior usina inteiramente brasileira,
            inaugurada em 2016, mas alvo de críticas por impactos socioambientais.
          </li>
          <li>
            <strong>Tucuruí</strong> (rio Tocantins, PA): Uma das maiores do mundo, inaugurada em
            1984. Formou o maior lago artificial da época.
          </li>
        </ul>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Impactos e conservação</span>
        <h2>10. Impactos humanos nos recursos hídricos</h2>
        <p>
          A ação humana afeta profundamente os sistemas hídricos. Os principais impactos incluem:
        </p>
        <ul>
          <li>
            <strong>Poluição:</strong> Lançamento de esgotos domésticos, efluentes industriais e
            agrotóxicos nos rios comprometem a qualidade da água e a biodiversidade aquática.
          </li>
          <li>
            <strong>Desmatamento:</strong> A remoção da vegetação ciliar (mata às margens dos rios)
            aumenta a erosão, o assoreamento e reduz a recarga de aquíferos.
          </li>
          <li>
            <strong>Construção de represas:</strong> Embora gerem energia limpa, alteram o regime
            hidrológico, bloqueiam a migração de peixes e inundam áreas habitadas.
          </li>
          <li>
            <strong>Captação excessiva:</strong> A retirada de água para irrigação e abastecimento
            pode reduzir drasticamente o volume dos rios.
          </li>
          <li>
            <strong>Urbanização:</strong> A impermeabilização do solo em cidades aumenta o
            escoamento superficial, causando enchentes e reduzindo a recarga de aquíferos.
          </li>
        </ul>
        <p>
          A legislação brasileira protege os recursos hídricos por meio da{" "}
          <strong>Lei das Águas (Lei 9.433/1997)</strong>, que institui a Política Nacional de
          Recursos Hídricos, prevendo o gerenciamento por bacias hidrográficas, a cobrança pelo
          uso da água e a participação social nos comitês de bacia.
        </p>
      </section>

      {/* ── Exercícios ── */}
      <section className="lesson-section" id="exercicios">
        <h2>Exercícios</h2>

        <Exercise
          level="Básico"
          title="Exercício 1"
          statement={
            <p>
              O Rio Amazonas é considerado o maior do mundo em volume d'água. Qual das afirmativas
              abaixo explica corretamente esse fato?
            </p>
          }
          options={[
            { letter: "a", text: "O Amazonas nasce nos Andes e percorre terrenos de planalto, o que aumenta sua velocidade e, consequentemente, seu volume." },
            { letter: "b", text: "A bacia hidrográfica amazônica é a maior do mundo em área de drenagem, recebe chuvas abundantes e drena uma região de floresta tropical, o que garante altos índices de precipitação e escoamento.", correct: true },
            { letter: "c", text: "O Amazonas é o mais longo do mundo, o que explica diretamente seu maior volume de água em comparação com outros rios." },
            { letter: "d", text: "O aquífero Guarani, localizado sob a bacia amazônica, alimenta continuamente o Rio Amazonas com água subterrânea." },
            { letter: "e", text: "O Rio Amazonas recebe pouca contribuição de afluentes, mas compensa pela extensão de seu curso, acumulando água ao longo do percurso." },
          ]}
          resolution={
            <p>
              A alternativa B é correta. O Rio Amazonas drena a maior bacia hidrográfica do mundo
              (~7 milhões de km²), em uma região de floresta tropical com altíssimos índices de
              precipitação (mais de 2.000 mm/ano em grande parte da bacia). Esses fatores combinados
              resultam em um volume de descarga de cerca de 200.000 m³/s na foz, responsável por ~20%
              de toda a água doce que chega aos oceanos. A extensão do rio, por si só, não determina
              o volume — o Nilo é mais longo, mas tem vazão muito menor.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              O "encontro das águas" próximo a Manaus (AM), onde o Rio Negro e o Rio Solimões correm
              lado a lado sem se misturar por cerca de 6 km, é explicado principalmente por:
            </p>
          }
          options={[
            { letter: "a", text: "Diferença de salinidade entre os dois rios, pois o Rio Negro contém sal em sua composição." },
            { letter: "b", text: "Diferenças de temperatura, velocidade e densidade entre as águas dos dois rios.", correct: true },
            { letter: "c", text: "Presença de uma barreira geológica submersa que impede a mistura das águas." },
            { letter: "d", text: "O fato de o Rio Negro ser um rio de planície e o Solimões ser um rio de planalto, o que gera turbulência na junção." },
            { letter: "e", text: "A diferença de direção dos ventos sobre cada rio, que mantém as massas de água separadas." },
          ]}
          resolution={
            <p>
              A alternativa B é a correta. As águas do Rio Negro são escuras, ácidas, quentes (~29°C)
              e mais lentas. Já o Solimões tem águas barrentas (ricas em sedimentos), mais frias
              (~22°C) e mais velozes. Essas diferenças de temperatura, velocidade e densidade impedem
              a mistura imediata das duas massas d'água, criando o espetacular fenômeno visual do
              "encontro das águas". Após cerca de 6 km, as águas finalmente se misturam, formando o
              Rio Amazonas.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              A Transposição do Rio São Francisco é uma obra de infraestrutura hídrica que gera
              debate entre especialistas e comunidades. Sobre esse projeto, analise as afirmativas:
              <br /><br />
              I. A obra tem como objetivo principal abastecer populações do semiárido nordestino nos
              estados de Ceará, Rio Grande do Norte, Paraíba e Pernambuco.
              <br />
              II. A transposição consiste na construção de canais que desviam água do baixo curso do
              Rio São Francisco para o semiárido.
              <br />
              III. Uma das críticas ao projeto é que a retirada de água pode prejudicar ainda mais
              a vazão do rio, já comprometida por desmatamento e assoreamento.
              <br /><br />
              Está correto o que se afirma em:
            </p>
          }
          options={[
            { letter: "a", text: "Apenas I." },
            { letter: "b", text: "Apenas I e II." },
            { letter: "c", text: "Apenas I e III.", correct: true },
            { letter: "d", text: "Apenas II e III." },
            { letter: "e", text: "I, II e III." },
          ]}
          resolution={
            <p>
              A alternativa C é a correta. A afirmativa I é verdadeira: o objetivo central da
              transposição é levar água do São Francisco para o semiárido nordestino, beneficiando
              os quatro estados citados. A afirmativa II é falsa: a captação ocorre no médio curso
              do rio (em Cabrobó, PE), não no baixo curso, pois o baixo São Francisco já está
              bastante comprometido antes de chegar ao oceano. A afirmativa III é verdadeira: uma
              das maiores críticas ambientais ao projeto é que o São Francisco já sofre redução de
              vazão devido ao desmatamento da Mata Ciliar e ao assoreamento de seu leito, e desviar
              água pode agravar essa situação.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              A Lei das Águas (Lei Federal 9.433/1997) institui a Política Nacional de Recursos
              Hídricos no Brasil. Um dos princípios fundamentais dessa lei é que a bacia hidrográfica
              é a unidade territorial para implementação da política. Qual é a principal vantagem
              de usar a bacia hidrográfica como unidade de gestão em vez de divisões político-
              administrativas (estados e municípios)?
            </p>
          }
          options={[
            { letter: "a", text: "A bacia hidrográfica coincide sempre com os limites estaduais, facilitando a gestão por cada governo." },
            { letter: "b", text: "A gestão por bacia permite tratar a água como um sistema integrado, considerando todos os usuários e impactos desde a nascente até a foz, independentemente dos limites políticos.", correct: true },
            { letter: "c", text: "A adoção da bacia como unidade de gestão elimina a necessidade de comitês de bacia, simplificando a administração." },
            { letter: "d", text: "Rios que atravessam vários estados ficam sob controle exclusivo do governo federal, eliminando conflitos entre estados." },
            { letter: "e", text: "A gestão por bacia facilita a privatização dos recursos hídricos, tornando o sistema mais eficiente economicamente." },
          ]}
          resolution={
            <p>
              A alternativa B é a correta. O principal avanço da Lei das Águas foi reconhecer que
              um rio não respeita fronteiras políticas. Ao usar a bacia hidrográfica como unidade
              de gestão, todas as decisões — sobre captação, poluição, uso do solo, construção de
              barragens — são tomadas considerando o sistema como um todo. Um estado que polui a
              nascente afeta todos os outros estados que dependem do mesmo rio. Os comitês de bacia,
              com participação do poder público, usuários e sociedade civil, são o instrumento central
              dessa gestão participativa e integrada.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              (ENEM adaptado) O Brasil detém cerca de 12% da água doce superficial do planeta, mas
              enfrenta sérios problemas de acesso à água em diversas regiões. Considerando os fatores
              que explicam essa aparente contradição, assinale a alternativa correta:
            </p>
          }
          options={[
            { letter: "a", text: "A contradição não existe, pois a abundância de água no Brasil garante acesso universal em todo o território nacional." },
            { letter: "b", text: "O problema é exclusivamente de gestão, pois toda a água doce brasileira está concentrada no semiárido nordestino." },
            { letter: "c", text: "A distribuição irregular da água no território, aliada a desigualdades socioeconômicas, ao desmatamento, à poluição e à falta de infraestrutura, explica por que regiões com pouca água convivem com escassez enquanto outras desperdiçam o recurso.", correct: true },
            { letter: "d", text: "A solução para o problema hídrico brasileiro passa exclusivamente pela construção de mais usinas hidrelétricas, que regulam o fluxo dos rios." },
            { letter: "e", text: "O Brasil perde grande parte de sua água doce para os países vizinhos por meio de tratados internacionais, o que explica a escassez em certas regiões." },
          ]}
          resolution={
            <p>
              A alternativa C é a correta. A aparente contradição entre abundância hídrica nacional e
              escassez regional tem múltiplas causas. Primeiro, a distribuição espacial é altamente
              desigual: ~80% da água doce brasileira está na região amazônica, onde vive menos de 5%
              da população. O semiárido nordestino, com ~27 milhões de habitantes, recebe chuvas
              irregulares e concentradas em poucos meses. Além disso, desmatamento reduz a
              recarga de aquíferos e aumenta evapotranspiração; poluição inutiliza corpos d'água;
              desigualdade socioeconômica priva populações vulneráveis de acesso a sistemas de
              abastecimento; e a falta de infraestrutura impede o aproveitamento eficiente dos
              recursos disponíveis.
            </p>
          }
        />
      </section>
    </article>
  );
}
