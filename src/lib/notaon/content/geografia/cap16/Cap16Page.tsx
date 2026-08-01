"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap16Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 16</span>
          <h1>Vegetação e domínios morfoclimáticos</h1>
          <p>
            A vegetação é o elemento mais visível e dinâmico da paisagem terrestre, refletindo a
            interação entre clima, relevo, solo e ação humana ao longo do tempo. No Brasil, a
            grande diversidade climática e geológica deu origem a um mosaico extraordinário de
            formações vegetais, organizadas em torno de grandes domínios morfoclimáticos —
            conceito desenvolvido pelo geógrafo Aziz Ab'Sáber para explicar a integração entre
            relevo, clima, vegetação, solo e hidrografia em grandes unidades da paisagem
            brasileira. Neste capítulo, estudaremos esses domínios e suas características
            fundamentais.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceitos fundamentais</span>
        <h2>1. O que são domínios morfoclimáticos?</h2>
        <p>
          O conceito de <strong>domínios morfoclimáticos</strong> foi proposto pelo geógrafo
          brasileiro Aziz Ab'Sáber na década de 1970. Segundo esse conceito, o território
          brasileiro pode ser dividido em grandes unidades paisagísticas (domínios) onde há
          uma integração entre os componentes naturais:
        </p>
        <ul>
          <li>
            <strong>Clima</strong> — temperatura, precipitação, sazonalidade
          </li>
          <li>
            <strong>Relevo</strong> — formas, altitudes, modelado
          </li>
          <li>
            <strong>Vegetação</strong> — fitofisionomias dominantes
          </li>
          <li>
            <strong>Solos</strong> — tipos e características pedológicas
          </li>
          <li>
            <strong>Hidrografia</strong> — padrão dos rios e drenagem
          </li>
        </ul>
        <p>
          Ab'Sáber identificou <strong>seis grandes domínios morfoclimáticos</strong> no Brasil,
          além das chamadas <strong>faixas de transição</strong> (ou "orlas") entre eles, onde
          as características se mesclam. Os domínios são: Amazônico, Cerrado, Caatinga, Mares de
          Morros (Mata Atlântica), Araucárias e Pradarias (Pampas).
        </p>
        <p>
          É importante distinguir o conceito de <strong>domínio morfoclimático</strong> do de{" "}
          <strong>bioma</strong>: o domínio é um conceito geomorfológico e climático integrado,
          enquanto bioma é um conceito ecológico baseado principalmente na vegetação e na fauna.
          Na prática, eles se sobrepõem em grande parte, mas não são idênticos.
        </p>
      </section>

      {/* SVG Mapa dos domínios */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="380" fill="#f8fafc" rx="8" />
          <text x="350" y="28" fontSize="15" fontWeight="bold" fill="#1e293b" textAnchor="middle">Domínios Morfoclimáticos do Brasil (Ab'Sáber)</text>
          {/* Contorno simplificado do Brasil */}
          <path d="M 200 55 L 490 55 L 540 100 L 610 160 L 590 270 L 520 330 L 400 350 L 280 340 L 195 295 L 155 210 L 165 130 Z"
            fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
          {/* Domínio Amazônico */}
          <path d="M 170 70 L 490 60 L 530 105 L 490 155 L 360 170 L 210 165 L 170 125 Z"
            fill="#16a34a" opacity="0.65" />
          <text x="320" y="120" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">Amazônico</text>
          {/* Domínio Cerrado */}
          <path d="M 310 170 L 490 158 L 540 200 L 510 265 L 400 275 L 300 265 L 280 220 Z"
            fill="#84cc16" opacity="0.65" />
          <text x="400" y="225" fontSize="11" fontWeight="bold" fill="#365314" textAnchor="middle">Cerrado</text>
          {/* Domínio Caatinga */}
          <path d="M 480 90 L 610 155 L 595 240 L 520 260 L 500 205 L 490 155 Z"
            fill="#f59e0b" opacity="0.65" />
          <text x="553" y="180" fontSize="10" fontWeight="bold" fill="#451a03" textAnchor="middle">Caatinga</text>
          {/* Domínio Mata Atlântica / Mares de Morros */}
          <path d="M 510 250 L 595 245 L 590 275 L 525 330 L 470 330 L 450 295 L 470 265 Z"
            fill="#22c55e" opacity="0.65" />
          <text x="530" y="295" fontSize="9" fontWeight="bold" fill="#14532d" textAnchor="middle">Mata Atlântica</text>
          {/* Domínio Araucárias */}
          <path d="M 390 300 L 470 295 L 470 335 L 415 350 L 375 345 L 365 320 Z"
            fill="#0891b2" opacity="0.65" />
          <text x="420" y="328" fontSize="9" fontWeight="bold" fill="white" textAnchor="middle">Araucárias</text>
          {/* Domínio Pampas */}
          <path d="M 285 340 L 375 345 L 365 360 L 310 368 L 270 360 Z"
            fill="#a78bfa" opacity="0.65" />
          <text x="320" y="358" fontSize="9" fontWeight="bold" fill="white" textAnchor="middle">Pampas</text>
          {/* Legenda */}
          <rect x="20" y="280" width="130" height="90" fill="white" stroke="#e2e8f0" strokeWidth="1" rx="4" />
          <text x="85" y="297" fontSize="10" fontWeight="bold" fill="#1e293b" textAnchor="middle">Legenda</text>
          <rect x="28" y="305" width="12" height="10" fill="#16a34a" opacity="0.7" />
          <text x="46" y="314" fontSize="9" fill="#374151">Amazônico</text>
          <rect x="28" y="320" width="12" height="10" fill="#84cc16" opacity="0.7" />
          <text x="46" y="329" fontSize="9" fill="#374151">Cerrado</text>
          <rect x="28" y="335" width="12" height="10" fill="#f59e0b" opacity="0.7" />
          <text x="46" y="344" fontSize="9" fill="#374151">Caatinga</text>
          <rect x="80" y="305" width="12" height="10" fill="#22c55e" opacity="0.7" />
          <text x="98" y="314" fontSize="9" fill="#374151">M. Atlântica</text>
          <rect x="80" y="320" width="12" height="10" fill="#0891b2" opacity="0.7" />
          <text x="98" y="329" fontSize="9" fill="#374151">Araucárias</text>
          <rect x="80" y="335" width="12" height="10" fill="#a78bfa" opacity="0.7" />
          <text x="98" y="344" fontSize="9" fill="#374151">Pampas</text>
          <text x="350" y="372" fontSize="11" fill="#6b7280" textAnchor="middle">Distribuição espacial aproximada dos 6 domínios morfoclimáticos (Ab'Sáber)</text>
        </svg>
        <figcaption>Localização aproximada dos seis domínios morfoclimáticos do Brasil, segundo a classificação de Aziz Ab'Sáber.</figcaption>
      </figure>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Amazônia</span>
        <h2>2. Domínio Amazônico</h2>
        <p>
          O domínio amazônico é o maior do Brasil em extensão, cobrindo cerca de 45% do território
          nacional. Abrange principalmente os estados do Amazonas, Pará, Amapá, Roraima, Rondônia,
          Acre, além de partes do Mato Grosso, Tocantins e Maranhão. Suas características são:
        </p>
        <ul>
          <li>
            <strong>Clima:</strong> Equatorial úmido, com temperaturas elevadas durante o ano
            todo (médias acima de 25°C) e precipitações abundantes (2.000 a 3.000 mm/ano),
            distribuídas ao longo de quase todos os meses.
          </li>
          <li>
            <strong>Vegetação:</strong> Floresta Amazônica (Floresta Latifoliada Tropical), a
            maior floresta tropical do mundo. Caracterizada por grande biodiversidade, dossel
            fechado e múltiplos estratos de vegetação.
          </li>
          <li>
            <strong>Relevo:</strong> Predomínio de terras baixas (Planície Amazônica), com
            depressões e pequenas colinas. No escudo guianense e no maciço das Guianas, há
            formações serranas (como o Pico da Neblina, o ponto mais alto do Brasil — 2.994 m).
          </li>
          <li>
            <strong>Solos:</strong> Em sua maioria, solos lateríticos (latossolos), muito
            antigos, lixiviados e com baixa fertilidade natural. A riqueza do ecossistema está
            na ciclagem de nutrientes pela biomassa vegetal, não no solo.
          </li>
          <li>
            <strong>Hidrografia:</strong> Domínio da Bacia Amazônica, com rios de planície, grande
            volume d'água e regime regular.
          </li>
        </ul>
        <p>
          A Amazônia abriga cerca de 10% de todas as espécies de animais e plantas do planeta e
          desempenha papel crucial na regulação do clima global, no ciclo do carbono e na produção
          de chuvas na América do Sul (através dos chamados "rios voadores").
        </p>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cerrado</span>
        <h2>3. Domínio do Cerrado</h2>
        <p>
          O Cerrado é o segundo maior domínio do Brasil em extensão e a maior savana tropical da
          América do Sul. Ocupa o Planalto Central brasileiro, cobrindo estados como Goiás, Mato
          Grosso, Mato Grosso do Sul, Tocantins, Minas Gerais, e partes de outros estados.
        </p>
        <p>
          A vegetação do Cerrado é diversificada, com fitofisionomias que variam de campos limpos
          (sem árvores) a cerradões (florestas densas), passando por campos sujos, campo cerrado
          e cerrado típico (savana arborizada). As plantas têm adaptações marcantes à seca
          sazonal: raízes profundas (que alcançam o lençol freático), cascas espessas e folhas
          coriáceas.
        </p>
        <ul>
          <li>
            <strong>Clima:</strong> Tropical sazonal, com estação chuvosa (outubro a abril) e
            estação seca definida (maio a setembro). Precipitação entre 1.200 e 1.800 mm/ano.
          </li>
          <li>
            <strong>Relevo:</strong> Chapadões e planaltos aplainados (como a Chapada dos
            Veadeiros e a Chapada Diamantina), com altitudes entre 600 e 1.200 m.
          </li>
          <li>
            <strong>Solos:</strong> Latossolos profundos, bem drenados, mas com baixa fertilidade
            natural e alta concentração de alumínio (acidez). A correção com calcário e
            adubação pesada tornou o Cerrado a principal fronteira agrícola do Brasil
            (Agronegócio — "soja do Cerrado").
          </li>
        </ul>
        <p>
          O Cerrado é considerado um <strong>hotspot</strong> de biodiversidade — uma das regiões
          mais ricas em espécies endêmicas do mundo e, ao mesmo tempo, uma das mais ameaçadas.
          Estima-se que mais de 50% do Cerrado original já foi desmatado ou degradado.
        </p>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Caatinga</span>
        <h2>4. Domínio da Caatinga</h2>
        <p>
          A Caatinga é o único domínio morfoclimático exclusivamente brasileiro — não ocorre em
          nenhum outro país do mundo. Ocupa a maior parte do semiárido nordestino, abrangendo
          estados como Ceará, Piauí, Rio Grande do Norte, Paraíba, Pernambuco, Alagoas, Sergipe,
          Bahia e norte de Minas Gerais. Sua área original era de cerca de 844.000 km².
        </p>
        <ul>
          <li>
            <strong>Clima:</strong> Semiárido, com precipitações irregulares (300 a 800 mm/ano),
            concentradas em poucos meses. Temperaturas elevadas (médias de 26 a 28°C) e alta
            taxa de evapotranspiração.
          </li>
          <li>
            <strong>Vegetação:</strong> Vegetação xerófita (adaptada à seca), com plantas caducifólias
            (perdem as folhas na seca), cactáceas (mandacaru, xique-xique, palma), plantas com
            espinhos, bromélias e árvores de pequeno porte com raízes profundas. O nome "Caatinga"
            vem do tupi e significa "mata branca" — referência à paisagem esbranquiçada durante
            a seca, quando as plantas perdem as folhas.
          </li>
          <li>
            <strong>Solos:</strong> Rasos, rochosos, com afloramentos cristalinos. Boa fertilidade
            potencial, mas limitada pela escassez de água.
          </li>
          <li>
            <strong>Relevo:</strong> Depressão Sertaneja (superfície pediplanada), pontuada por
            inselbergues (serras e maciços isolados).
          </li>
        </ul>
        <p>
          A Caatinga abriga mais de 1.900 espécies de plantas, 178 de répteis e dezenas de espécies
          de mamíferos. É um dos ecossistemas mais ameaçados do Brasil, com mais de 45% de sua
          área já degradada pela caça, desmatamento e desertificação.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Mares de Morros</span>
        <h2>5. Domínio dos Mares de Morros (Mata Atlântica)</h2>
        <p>
          O domínio dos Mares de Morros, também chamado de domínio da Mata Atlântica, estende-se
          ao longo da costa leste do Brasil, do Rio Grande do Norte ao Rio Grande do Sul, com maior
          expressão no sudeste. O nome "Mares de Morros" refere-se ao relevo característico: um
          conjunto de colinas, morros e montanhas com formas arredondadas, resultado do intenso
          intemperismo químico sob clima quente e úmido.
        </p>
        <ul>
          <li>
            <strong>Clima:</strong> Tropical úmido a subtropical úmido, com precipitações
            abundantes (1.500 a 4.000 mm/ano) e temperatura moderada a elevada.
          </li>
          <li>
            <strong>Vegetação original:</strong> Mata Atlântica — floresta tropical densa e rica
            em biodiversidade, comparável à Amazônia em número de espécies por área. Inclui
            formações como Floresta Ombrófila Densa (mata de encosta), Floresta Estacional
            Semidecidual e Floresta Ombrófila Mista (com araucárias no sul).
          </li>
          <li>
            <strong>Relevo:</strong> Serra do Mar, Serra da Mantiqueira, Planalto Atlântico —
            relevos cristalinos, escarpados, com vales encaixados.
          </li>
          <li>
            <strong>Solos:</strong> Latossolos e argissolos vermelhos e amarelos, com alta
            erodibilidade nas encostas desmatadas.
          </li>
        </ul>
        <p>
          A Mata Atlântica é o bioma mais devastado do Brasil: restam menos de 12% de sua
          cobertura original, fragmentada em pequenas manchas. É considerada um dos cinco maiores
          hotspots de biodiversidade do mundo, com altíssimas taxas de endemismo — espécies que
          existem apenas nesse bioma.
        </p>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Araucárias e Pampas</span>
        <h2>6. Domínios das Araucárias e das Pradarias (Pampas)</h2>
        <p>
          <strong>Domínio das Araucárias</strong>
        </p>
        <p>
          Localizado principalmente no Planalto Meridional brasileiro, nos estados do Paraná, Santa
          Catarina e Rio Grande do Sul. A vegetação característica é a <strong>Floresta Ombrófila
          Mista</strong>, dominada pelo <em>Pinheiro-do-Paraná</em> (Araucaria angustifolia).
        </p>
        <ul>
          <li>
            <strong>Clima:</strong> Subtropical úmido (Cfa e Cfb na classificação de Köppen),
            com invernos frios e geadas frequentes.
          </li>
          <li>
            <strong>Vegetação:</strong> A araucária é uma conífera (gimnosperma) de até 50 m de
            altura, com copa característica em forma de guarda-chuva. Produz o pinhão, alimento
            importante para a fauna e para as populações locais.
          </li>
          <li>
            <strong>Situação:</strong> Cerca de 97% das araucárias originais foram destruídas pela
            exploração madeireira e pela expansão agrícola no século XX.
          </li>
        </ul>
        <p>
          <strong>Domínio das Pradarias (Pampas)</strong>
        </p>
        <p>
          Localizado no extremo sul do Brasil, principalmente no Rio Grande do Sul, estendendo-se
          para Argentina e Uruguai. O Pampa brasileiro tem cerca de 176.000 km².
        </p>
        <ul>
          <li>
            <strong>Clima:</strong> Subtropical, com chuvas bem distribuídas, invernos frios e
            verões quentes.
          </li>
          <li>
            <strong>Vegetação:</strong> Campo aberto, com predomínio de gramíneas (capins nativos),
            pequenos arbustos e matas ciliares nos rios. A vegetação rasante reflete a ação dos
            ventos, do pastoreio histórico e do solo raso.
          </li>
          <li>
            <strong>Uso:</strong> Historicamente associado à pecuária extensiva. Hoje enfrenta
            ameaças pela silvicultura (plantio de eucalipto e pinus) e pelo avanço da soja.
          </li>
        </ul>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparação entre os seis domínios morfoclimáticos do Brasil</caption>
            <thead>
              <tr>
                <th>Domínio</th>
                <th>Clima predominante</th>
                <th>Vegetação típica</th>
                <th>Situação de conservação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amazônico</td>
                <td>Equatorial úmido</td>
                <td>Floresta Amazônica</td>
                <td>~80% preservada (2024)</td>
              </tr>
              <tr>
                <td>Cerrado</td>
                <td>Tropical sazonal</td>
                <td>Savana tropical</td>
                <td>~50% destruída</td>
              </tr>
              <tr>
                <td>Caatinga</td>
                <td>Semiárido</td>
                <td>Vegetação xerófita</td>
                <td>~45% degradada</td>
              </tr>
              <tr>
                <td>Mares de Morros</td>
                <td>Tropical/subtropical úmido</td>
                <td>Mata Atlântica</td>
                <td>Menos de 12% restante</td>
              </tr>
              <tr>
                <td>Araucárias</td>
                <td>Subtropical úmido</td>
                <td>Floresta com pinheiro</td>
                <td>Menos de 3% original</td>
              </tr>
              <tr>
                <td>Pradarias (Pampa)</td>
                <td>Subtropical</td>
                <td>Campo (gramíneas)</td>
                <td>~50% com uso pecuário/agrícola</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG Perfil de vegetação por domínio */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="280" fill="#f1f5f9" rx="8" />
          <text x="350" y="24" fontSize="14" fontWeight="bold" fill="#1e293b" textAnchor="middle">Perfil esquemático das fitofisionomias dos domínios brasileiros</text>
          {/* Floresta Amazônica */}
          <rect x="20" y="220" width="90" height="10" fill="#15803d" />
          {[30, 45, 55, 70, 80, 95].map((x, i) => (
            <ellipse key={i} cx={x} cy={180 - i * 5} rx={14 - i} ry={22 - i * 3} fill="#16a34a" opacity={0.8 - i * 0.1} />
          ))}
          <rect x="50" y="200" width="6" height="20" fill="#92400e" />
          <rect x="70" y="205" width="5" height="15" fill="#92400e" />
          <text x="65" y="245" fontSize="10" fill="#1e293b" textAnchor="middle">Amazônica</text>
          <text x="65" y="258" fontSize="9" fill="#64748b" textAnchor="middle">Densa, alta</text>
          {/* Cerrado */}
          <rect x="130" y="220" width="90" height="10" fill="#a16207" />
          {[145, 165, 185].map((x, i) => (
            <ellipse key={i} cx={x} cy={200} rx={10} ry={14} fill="#84cc16" opacity={0.85} />
          ))}
          {[145, 165, 185].map((x, i) => (
            <rect key={i} x={x - 3} y={200} width={6} height={20} fill="#78350f" />
          ))}
          <path d="M 140 215 Q 175 210 210 215" fill="#86efac" stroke="#4ade80" strokeWidth="1" />
          <text x="175" y="245" fontSize="10" fill="#1e293b" textAnchor="middle">Cerrado</text>
          <text x="175" y="258" fontSize="9" fill="#64748b" textAnchor="middle">Savana, mista</text>
          {/* Caatinga */}
          <rect x="240" y="220" width="90" height="10" fill="#b45309" />
          {/* Cacto */}
          <rect x="268" y="185" width="8" height="35" fill="#65a30d" />
          <rect x="262" y="198" width="8" height="4" fill="#65a30d" />
          <rect x="276" y="194" width="8" height="4" fill="#65a30d" />
          {/* Arbusto pequeno */}
          <ellipse cx="300" cy="215" rx="12" ry="8" fill="#a3e635" opacity="0.7" />
          <rect x="298" y="215" width="4" height="5" fill="#78350f" />
          <text x="285" y="245" fontSize="10" fill="#1e293b" textAnchor="middle">Caatinga</text>
          <text x="285" y="258" fontSize="9" fill="#64748b" textAnchor="middle">Xerófita, espinhos</text>
          {/* Mata Atlântica */}
          <rect x="350" y="220" width="90" height="10" fill="#15803d" />
          {[360, 375, 390, 405, 420].map((x, i) => (
            <ellipse key={i} cx={x} cy={190 - i * 3} rx={12} ry={20 - i * 2} fill="#22c55e" opacity={0.85} />
          ))}
          {[370, 390, 410].map((x, i) => (
            <rect key={i} x={x - 3} y={205} width={5} height={15} fill="#92400e" />
          ))}
          <text x="395" y="245" fontSize="10" fill="#1e293b" textAnchor="middle">Mata Atlântica</text>
          <text x="395" y="258" fontSize="9" fill="#64748b" textAnchor="middle">Densa, escarpas</text>
          {/* Araucária */}
          <rect x="460" y="220" width="90" height="10" fill="#6b7280" />
          <polygon points="505,150 490,195 520,195" fill="#166534" />
          <polygon points="505,165 486,205 524,205" fill="#16a34a" />
          <rect x="502" y="205" width="6" height="15" fill="#78350f" />
          <text x="505" y="245" fontSize="10" fill="#1e293b" textAnchor="middle">Araucária</text>
          <text x="505" y="258" fontSize="9" fill="#64748b" textAnchor="middle">Copa em guarda-chuva</text>
          {/* Pampa */}
          <rect x="580" y="220" width="90" height="10" fill="#a16207" />
          <path d="M 580 218 Q 600 205 615 215 Q 630 205 645 218 Q 660 207 670 218" fill="none" stroke="#84cc16" strokeWidth="2" />
          <path d="M 582 218 Q 592 210 600 217 Q 610 210 620 217" fill="none" stroke="#65a30d" strokeWidth="1.5" />
          <text x="625" y="245" fontSize="10" fill="#1e293b" textAnchor="middle">Pampa</text>
          <text x="625" y="258" fontSize="9" fill="#64748b" textAnchor="middle">Campo raso</text>
          <text x="350" y="275" fontSize="10" fill="#6b7280" textAnchor="middle">Perfil esquemático — não em escala real</text>
        </svg>
        <figcaption>Representação esquemática das fitofisionomias típicas de cada domínio morfoclimático brasileiro.</figcaption>
      </figure>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Faixas de transição</span>
        <h2>7. Áreas de transição entre os domínios</h2>
        <p>
          Ab'Sáber reconheceu que entre os grandes domínios morfoclimáticos existem áreas de
          transição (também chamadas de "orlas" ou "faixas de transição") onde as características
          de dois ou mais domínios se mesclam. As principais são:
        </p>
        <ul>
          <li>
            <strong>Meio Norte (Cocais):</strong> Transição entre Amazônia e Caatinga, no Maranhão
            e Piauí. Dominada por palmeiras como o babaçu e a carnaúba. Clima subúmido com seca
            moderada.
          </li>
          <li>
            <strong>Pantanal:</strong> Transição entre Cerrado, Amazônia e Chaco (Argentina/Bolívia),
            no Mato Grosso e Mato Grosso do Sul. É a maior planície alagável do mundo (~150.000
            km²), com biodiversidade extraordinária e dinâmica sazonal de cheia e seca.
          </li>
          <li>
            <strong>Agreste:</strong> Zona de transição entre a Mata Atlântica (zona da mata) e a
            Caatinga (sertão), no Nordeste. Temperatura mais amena, relevo serrano, chuvas
            moderadas.
          </li>
        </ul>
        <p>
          O <strong>Pantanal</strong> merece destaque especial: apesar de ser classificado como
          área de transição, foi elevado à condição de bioma pelo IBGE. Sua dinâmica de inundações
          sazonais cria habitats únicos para uma fauna diversíssima, incluindo a maior população
          silvestre de onças-pintadas do mundo. É Patrimônio Natural da Humanidade pela UNESCO.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Adaptações vegetais</span>
        <h2>8. Adaptações das plantas aos diferentes domínios</h2>
        <p>
          Cada domínio impõe desafios ambientais distintos, e as plantas desenvolveram
          adaptações específicas ao longo de milhões de anos de evolução:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Adaptações vegetais nos domínios morfoclimáticos brasileiros</caption>
            <thead>
              <tr>
                <th>Domínio</th>
                <th>Principal desafio</th>
                <th>Adaptação típica</th>
                <th>Exemplo de espécie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amazônico</td>
                <td>Competição por luz, solos pobres</td>
                <td>Estatura elevada, raízes grapa (sapopemas)</td>
                <td>Sumaúma (Ceiba pentandra)</td>
              </tr>
              <tr>
                <td>Cerrado</td>
                <td>Seca sazonal, incêndios, solo ácido</td>
                <td>Raízes profundas, casca grossa, rebrotamento pós-fogo</td>
                <td>Pequizeiro (Caryocar brasiliense)</td>
              </tr>
              <tr>
                <td>Caatinga</td>
                <td>Seca prolongada, calor</td>
                <td>Caducifolia, espinhos, caules suculentos, raízes laterais extensas</td>
                <td>Mandacaru (Cereus jamacaru)</td>
              </tr>
              <tr>
                <td>Mata Atlântica</td>
                <td>Encostas íngremes, luminosidade variada</td>
                <td>Epifitismo, lianas, múltiplos estratos</td>
                <td>Bromélias, orquídeas</td>
              </tr>
              <tr>
                <td>Araucárias</td>
                <td>Geadas, inverno rigoroso</td>
                <td>Folhas em agulha (redução da perda d'água), resistência ao frio</td>
                <td>Pinheiro-do-Paraná (Araucaria angustifolia)</td>
              </tr>
              <tr>
                <td>Pampa</td>
                <td>Vento, pastoreio, geadas</td>
                <td>Gramíneas baixas, rizomas resistentes ao pisoteio</td>
                <td>Capim-caninha, grama-forquilha</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Desmatamento e ameaças</span>
        <h2>9. Ameaças aos domínios morfoclimáticos</h2>
        <p>
          Todos os domínios morfoclimáticos brasileiros sofrem pressões humanas intensas,
          especialmente o desmatamento, a conversão de áreas naturais para agropecuária e a
          expansão urbana. Os principais agentes de desmatamento diferem por domínio:
        </p>
        <ul>
          <li>
            <strong>Amazônia:</strong> Pecuária (gado bovino), soja, extração ilegal de madeira,
            garimpo e construção de rodovias.
          </li>
          <li>
            <strong>Cerrado:</strong> Expansão da soja e do algodão no MATOPIBA (Maranhão, Tocantins,
            Piauí, Bahia). O Cerrado é hoje o "celeiro do agronegócio" brasileiro.
          </li>
          <li>
            <strong>Caatinga:</strong> Desmatamento para lenha e carvão vegetal, sobrepastoreio,
            desertificação.
          </li>
          <li>
            <strong>Mata Atlântica:</strong> Urbanização e industrialização histórica da costa
            leste brasileira. Fragmentação em pequenas ilhas de vegetação.
          </li>
          <li>
            <strong>Pampa:</strong> Monocultura de soja e silvicultura (eucalipto), que substituem
            os campos nativos.
          </li>
        </ul>
        <p>
          O desmatamento reduz a biodiversidade, favorece processos erosivos, diminui a regulação
          do ciclo da água (assoreamento de rios) e contribui para as emissões de gases de efeito
          estufa — o Brasil é um dos maiores emissores mundiais de CO₂ por desmatamento.
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
              O geógrafo Aziz Ab'Sáber propôs o conceito de domínios morfoclimáticos para
              interpretar a paisagem brasileira. Qual das alternativas melhor define esse conceito?
            </p>
          }
          options={[
            { letter: "a", text: "Domínios morfoclimáticos são regiões delimitadas exclusivamente pelo tipo de vegetação, sem relação com o clima ou o relevo." },
            { letter: "b", text: "Domínios morfoclimáticos são unidades administrativas do território brasileiro, equivalentes às macrorregiões do IBGE." },
            { letter: "c", text: "Domínios morfoclimáticos são grandes unidades paisagísticas que integram de forma interdependente o clima, o relevo, os solos, a vegetação e a hidrografia de uma região.", correct: true },
            { letter: "d", text: "Domínios morfoclimáticos correspondem às bacias hidrográficas brasileiras, utilizando os rios como principal critério de classificação." },
            { letter: "e", text: "Domínios morfoclimáticos são áreas de transição entre biomas, onde nenhum elemento da paisagem predomina claramente." },
          ]}
          resolution={
            <p>
              A alternativa C é a correta. Ab'Sáber desenvolveu o conceito de domínios
              morfoclimáticos justamente para superar abordagens reducionistas que classificavam
              o território por apenas um elemento (somente o clima, ou somente a vegetação). O
              ponto central do conceito é a integração: relevo, clima, vegetação, solos e
              hidrografia formam um sistema coerente dentro de cada domínio. Alterações em um
              componente afetam os outros — por isso desmatamento (retirada da vegetação) impacta
              o regime hídrico, a erosão dos solos e até o microclima.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              A Caatinga é o único domínio morfoclimático exclusivamente brasileiro. Qual
              característica climática principal explica as adaptações da vegetação xerófita
              típica desse domínio?
            </p>
          }
          options={[
            { letter: "a", text: "As temperaturas extremamente baixas no inverno, que causam geadas frequentes no sertão nordestino." },
            { letter: "b", text: "A abundância de chuvas ao longo de todo o ano, que torna o solo constantemente encharcado." },
            { letter: "c", text: "A irregularidade e escassez de chuvas, com longos períodos de seca e alta evapotranspiração, exigindo que as plantas minimizem a perda de água.", correct: true },
            { letter: "d", text: "A altitude elevada do sertão nordestino, que provoca temperaturas baixas e ventos fortes." },
            { letter: "e", text: "A ausência de luminosidade solar no semiárido, que limita a fotossíntese das plantas." },
          ]}
          resolution={
            <p>
              A alternativa C é a correta. O clima semiárido da Caatinga combina precipitações
              baixas e irregulares (300 a 800 mm/ano) com temperaturas elevadas (26-28°C em média)
              e alta taxa de evapotranspiração. Isso cria um ambiente de déficit hídrico
              prolongado. As plantas xerófitas responderam a esse desafio com adaptações como:
              perda das folhas na seca (caducifolia), para reduzir a evapotranspiração; caules
              suculentos armazenam água (cactáceas); espinhos protegem dos herbívoros; raízes
              superficiais extensas captam a chuva rapidamente; e raízes profundas buscam o
              lençol freático.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              O Cerrado é classificado como <em>hotspot</em> de biodiversidade e ao mesmo tempo
              como a fronteira agrícola mais dinâmica do Brasil. Sobre essa tensão entre
              conservação e produção, assinale a alternativa correta:
            </p>
          }
          options={[
            { letter: "a", text: "A expansão da soja no Cerrado não representa ameaça à biodiversidade, pois a vegetação do cerrado é pouco significativa do ponto de vista ecológico." },
            { letter: "b", text: "O Cerrado tem pouca biodiversidade e seu desmatamento não impacta espécies endêmicas, pois a maioria das espécies ocorre também na Amazônia." },
            { letter: "c", text: "O Cerrado abriga milhares de espécies endêmicas e é berço das principais bacias hidrográficas do Brasil, de modo que seu desmatamento ameaça tanto a biodiversidade quanto a disponibilidade hídrica de grande parte do país.", correct: true },
            { letter: "d", text: "O Cerrado é protegido integralmente pela legislação ambiental brasileira, o que impede qualquer desmatamento para fins agrícolas." },
            { letter: "e", text: "A conversão do Cerrado em lavoura de soja não afeta o ciclo hidrológico, pois a soja também é uma planta que realiza evapotranspiração." },
          ]}
          resolution={
            <p>
              A alternativa C é a correta. O Cerrado é o "berço das águas" do Brasil: é lá que
              nascem as principais bacias hidrográficas (São Francisco, Araguaia-Tocantins, parte
              do Paraná e do Paraguai). Suas veredas (linhas de vegetação arbustiva ao longo de
              cursos d'água) são fundamentais para a recarga dos aquíferos. Ao mesmo tempo, o
              Cerrado tem altíssima biodiversidade: abriga mais de 11.000 espécies de plantas,
              das quais ~44% são endêmicas. Mais de 50% do Cerrado já foi destruído,
              principalmente pelo avanço da soja e do algodão. O Código Florestal exige reserva
              legal de 35% nas propriedades do Cerrado (contra 80% na Amazônia), deixando-o
              mais vulnerável.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              A Mata Atlântica é o bioma brasileiro mais devastado, com menos de 12% de sua
              cobertura original preservada. Que fator histórico explica principalmente essa
              situação?
            </p>
          }
          options={[
            { letter: "a", text: "A Mata Atlântica foi destruída principalmente pela exploração de petróleo e gás natural ao longo do litoral." },
            { letter: "b", text: "A colonização portuguesa concentrou-se na faixa costeira — justamente onde se localiza a Mata Atlântica — seguida de séculos de expansão agrícola (cana, café, pecuária), industrialização e urbanização intensa, que devastaram progressivamente o bioma.", correct: true },
            { letter: "c", text: "O clima tropical úmido da Mata Atlântica impediu historicamente o desenvolvimento de qualquer forma de agricultura, levando ao abandono e degradação espontânea." },
            { letter: "d", text: "A Mata Atlântica foi destruída principalmente por incêndios naturais causados por raios durante os invernos secos." },
            { letter: "e", text: "A construção de hidrelétricas nos rios da Serra do Mar foi o principal fator de devastação da Mata Atlântica." },
          ]}
          resolution={
            <p>
              A alternativa B é a correta. A destruição da Mata Atlântica tem causas históricas
              claras: o Brasil foi colonizado pela costa, e os primeiros ciclos econômicos
              (pau-brasil, cana-de-açúcar) já devastaram grandes áreas costeiras. O café, no
              século XIX, avançou pelo interior de São Paulo, Minas Gerais e Paraná — todos dentro
              do domínio da Mata Atlântica. A industrialização e a urbanização do século XX
              concentraram-se no Sudeste, criando megacidades como São Paulo e Rio de Janeiro
              sobre o bioma. Hoje, os fragmentos remanescentes (cerca de 12%) são vitais para
              a biodiversidade e para o abastecimento hídrico das cidades mais populosas do país.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              (ENEM adaptado) Analise o mapa mental abaixo e responda:
              <br /><br />
              Um pesquisador descreve uma região com as seguintes características: clima equatorial
              úmido, precipitação acima de 2.000 mm/ano bem distribuídos, floresta densa com
              múltiplos estratos, solos latossólicos de baixa fertilidade natural, rios de planície
              com grande volume e densa rede de afluentes, e altitude entre 0 e 300 m. Essa
              descrição corresponde ao seguinte domínio morfoclimático:
            </p>
          }
          options={[
            { letter: "a", text: "Domínio da Caatinga, caracterizado por vegetação xerófita e clima semiárido." },
            { letter: "b", text: "Domínio dos Mares de Morros (Mata Atlântica), com relevo escarpado e vegetação densa nas encostas." },
            { letter: "c", text: "Domínio Amazônico, com floresta tropical densa, clima equatorial úmido, solos latossólicos e rios de planície com alto volume.", correct: true },
            { letter: "d", text: "Domínio do Cerrado, com savana tropical, estação seca definida e solos ácidos no Planalto Central." },
            { letter: "e", text: "Domínio das Araucárias, com floresta subtropical e predomínio de pinheiros no Planalto Meridional." },
          ]}
          resolution={
            <p>
              A alternativa C é a correta. Cada elemento descrito aponta para o domínio amazônico:
              clima equatorial úmido (temperaturas altas o ano todo, sem estação seca definida);
              precipitação acima de 2.000 mm/ano (característica do equatorial); floresta densa
              com múltiplos estratos (dossel, subdossel, sub-bosque, epífitas); solos latossólicos
              de baixa fertilidade (a riqueza da Amazônia está na biomassa, não no solo);
              rios de planície com grande volume (bacia amazônica — planícies aluviais); altitude
              baixa (Planície Amazônica entre 0-300m). O conjunto de elementos só pode corresponder
              ao Domínio Amazônico — cada outro domínio contradiz pelo menos um dos elementos
              descritos.
            </p>
          }
        />
      </section>
    </article>
  );
}
