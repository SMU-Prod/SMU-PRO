"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap37Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 37</span>
          <h1>Aspectos físicos do Brasil: relevo, clima, vegetação e hidrografia</h1>
          <p>
            O Brasil possui uma das maiores diversidades físicas do planeta, resultado de sua vasta
            extensão territorial e posição geográfica predominantemente tropical. O relevo é composto
            por planaltos e planícies de origem antiga; os climas variam do equatorial úmido ao
            semiárido e ao subtropical; as vegetações englobam desde a floresta Amazônica até o pampa
            gaúcho; e a hidrografia é formada por algumas das maiores bacias fluviais do mundo.
            Compreender esses aspectos físicos é essencial para entender a diversidade ambiental e
            os impactos das atividades humanas no território brasileiro.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Relevo brasileiro</span>
        <h2>1. Estrutura geológica e formas de relevo</h2>
        <p>
          O relevo brasileiro é relativamente antigo e estável, dominado por <strong>planaltos</strong>{" "}
          e <strong>planícies</strong>, sem grandes cadeias de montanhas jovens como as dos Andes.
          A estrutura geológica é composta por três grandes unidades: os <strong>escudos
          cristalinos</strong> (rochas antigas, pré-cambrianas, como o Escudo Brasileiro e o Escudo
          das Guianas), as <strong>bacias sedimentares</strong> (como a Bacia do Paraná e a Bacia
          Amazônica) e as <strong>faixas de dobramentos</strong> (como a Serra do Mar e a Serra Geral,
          mais jovens).
        </p>
        <p>
          Segundo a classificação de Jurandyr Ross (adotada pelo IBGE), o relevo brasileiro divide-se
          em planaltos (áreas com predominância de erosão) e planícies (áreas de sedimentação recente).
          Os pontos mais elevados do Brasil estão na Serra do Imeri (AM) e no Pico da Neblina, com
          2.994 m de altitude — o ponto culminante do país.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais unidades do relevo brasileiro</caption>
            <thead>
              <tr>
                <th>Unidade</th>
                <th>Tipo</th>
                <th>Exemplos</th>
                <th>Região</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Planalto Atlântico</td>
                <td>Planalto</td>
                <td>Serra da Mantiqueira, Serra do Mar</td>
                <td>Sudeste</td>
              </tr>
              <tr>
                <td>Planalto Central</td>
                <td>Planalto</td>
                <td>Chapada dos Veadeiros, Serra da Canastra</td>
                <td>Centro-Oeste</td>
              </tr>
              <tr>
                <td>Planalto Meridional</td>
                <td>Planalto</td>
                <td>Planalto Basáltico, Serra Geral</td>
                <td>Sul</td>
              </tr>
              <tr>
                <td>Planície Amazônica</td>
                <td>Planície</td>
                <td>Várzeas e igapós do Amazonas</td>
                <td>Norte</td>
              </tr>
              <tr>
                <td>Planície do Pantanal</td>
                <td>Planície</td>
                <td>Pantanal Mato-Grossense</td>
                <td>Centro-Oeste</td>
              </tr>
              <tr>
                <td>Planalto da Borborema</td>
                <td>Planalto</td>
                <td>Maciço da Borborema</td>
                <td>Nordeste</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SVG figura 1 — perfil esquemático do relevo */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
          <rect width="640" height="260" fill="#f0f9ff" rx="12" />
          <text x="320" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1e293b">
            Perfil Esquemático do Relevo Brasileiro (Leste → Oeste)
          </text>
          {/* Polígono de perfil */}
          <polygon
            points="30,200 100,170 160,120 220,110 280,145 340,160 400,130 460,150 530,180 610,190"
            fill="#a3e635" opacity="0.5"
            stroke="#65a30d" strokeWidth="2"
          />
          {/* Sombra de montanha — Serra do Mar */}
          <polygon points="140,120 160,80 180,120" fill="#84cc16" opacity="0.8" />
          <text x="160" y="70" textAnchor="middle" fontSize="10" fill="#365314">Serra do Mar</text>
          {/* Planalto Central */}
          <rect x="270" y="130" width="100" height="30" fill="#fbbf24" opacity="0.6" rx="4" />
          <text x="320" y="122" textAnchor="middle" fontSize="10" fill="#78350f">Planalto Central</text>
          {/* Planície Amazônica */}
          <rect x="490" y="165" width="110" height="25" fill="#6ee7b7" opacity="0.7" rx="4" />
          <text x="545" y="158" textAnchor="middle" fontSize="10" fill="#065f46">Plan. Amazônica</text>
          {/* Pantanal */}
          <rect x="380" y="140" width="70" height="20" fill="#38bdf8" opacity="0.7" rx="4" />
          <text x="415" y="132" textAnchor="middle" fontSize="10" fill="#0c4a6e">Pantanal</text>
          {/* Eixo */}
          <line x1="30" y1="210" x2="610" y2="210" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="30" y="230" fontSize="10" fill="#475569">Leste</text>
          <text x="570" y="230" fontSize="10" fill="#475569">Oeste</text>
          <text x="320" y="250" textAnchor="middle" fontSize="9" fill="#64748b">
            Representação esquemática — sem escala de altitude precisa
          </text>
        </svg>
        <figcaption>Perfil esquemático do relevo brasileiro, mostrando a predominância de planaltos e planícies.</figcaption>
      </figure>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tipos climáticos</span>
        <h2>2. Climas do Brasil</h2>
        <p>
          O Brasil possui uma grande diversidade climática em função de sua extensão latitudinal
          (de 5°N a 33°S), relevo variado, proximidade com oceanos e correntes marítimas. Os
          principais tipos climáticos são:
        </p>
        <ul>
          <li>
            <strong>Equatorial:</strong> chuvas abundantes o ano todo, temperaturas elevadas. Domina
            a Amazônia. Precipitação média superior a 2.000 mm/ano.
          </li>
          <li>
            <strong>Tropical:</strong> duas estações definidas (chuvosa no verão, seca no inverno).
            Predomina no Cerrado, Nordeste úmido e parte do Sudeste.
          </li>
          <li>
            <strong>Semiárido:</strong> seco, irregular e com chuvas abaixo de 800 mm/ano. Característico
            do interior do Nordeste. Irregularidade hídrica é a principal dificuldade.
          </li>
          <li>
            <strong>Tropical de altitude:</strong> temperaturas mais amenas por causa do relevo.
            Serra da Mantiqueira, planaltos do Sudeste.
          </li>
          <li>
            <strong>Subtropical:</strong> quatro estações definidas, geadas no inverno. Predomina
            no Sul do Brasil, especialmente no RS e no planalto catarinense.
          </li>
          <li>
            <strong>Litorâneo:</strong> alta umidade o ano todo, influenciado pela maritimidade e
            pela Serra do Mar.
          </li>
        </ul>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais tipos climáticos e sua distribuição no Brasil</caption>
            <thead>
              <tr>
                <th>Tipo climático</th>
                <th>Precipitação média</th>
                <th>Temperatura</th>
                <th>Região dominante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Equatorial</td>
                <td>&gt; 2.000 mm/ano</td>
                <td>26–28°C (média)</td>
                <td>Amazônia</td>
              </tr>
              <tr>
                <td>Tropical</td>
                <td>1.000–1.500 mm/ano</td>
                <td>20–28°C</td>
                <td>Planalto Central, Nordeste úmido</td>
              </tr>
              <tr>
                <td>Semiárido</td>
                <td>&lt; 800 mm/ano</td>
                <td>26–28°C</td>
                <td>Interior do Nordeste</td>
              </tr>
              <tr>
                <td>Subtropical</td>
                <td>1.200–2.000 mm/ano</td>
                <td>15–22°C</td>
                <td>Sul do Brasil</td>
              </tr>
              <tr>
                <td>Tropical de altitude</td>
                <td>1.200–1.800 mm/ano</td>
                <td>18–22°C</td>
                <td>Serra da Mantiqueira, planaltos SE</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Massas de ar</span>
        <h2>3. Massas de ar que atuam no Brasil</h2>
        <p>
          O clima do Brasil é fortemente influenciado pela atuação de diferentes massas de ar, que
          determinam as chuvas, as secas e as variações de temperatura ao longo do ano:
        </p>
        <ul>
          <li>
            <strong>Massa Equatorial Continental (mEc):</strong> quente e úmida, originada na
            Amazônia. Responsável pelas chuvas de verão no Centro-Oeste e Sudeste.
          </li>
          <li>
            <strong>Massa Equatorial Atlântica (mEa):</strong> quente e úmida, do Atlântico Norte.
            Determina as chuvas no litoral norte e nordestino.
          </li>
          <li>
            <strong>Massa Tropical Atlântica (mTa):</strong> quente e úmida do Atlântico Sul. Causa
            chuvas no litoral do Sudeste e Nordeste.
          </li>
          <li>
            <strong>Massa Tropical Continental (mTc):</strong> quente e seca, originada no Chaco
            (Paraguai/Argentina). Atuação no Sudeste e Centro-Oeste, gerando calor seco.
          </li>
          <li>
            <strong>Massa Polar Atlântica (mPa):</strong> fria e úmida, originada no Atlântico
            Sul. Responsável pelas frentes frias no Sul e Sudeste, com geadas no inverno.
          </li>
        </ul>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Biomas e vegetação</span>
        <h2>4. Vegetação natural do Brasil</h2>
        <p>
          O Brasil abriga seis biomas terrestres oficialmente reconhecidos pelo IBGE e pelo
          Ministério do Meio Ambiente: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa e Pantanal.
          Cada bioma possui características de flora, fauna, solo e clima específicas.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Biomas brasileiros: área, vegetação predominante e localização</caption>
            <thead>
              <tr>
                <th>Bioma</th>
                <th>Área original (km²)</th>
                <th>% do território</th>
                <th>Região</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amazônia</td>
                <td>4.196.943</td>
                <td>~49%</td>
                <td>Norte e parte do CO/Nordeste</td>
              </tr>
              <tr>
                <td>Cerrado</td>
                <td>2.036.448</td>
                <td>~24%</td>
                <td>Centro-Oeste, parte SE/NE</td>
              </tr>
              <tr>
                <td>Caatinga</td>
                <td>844.453</td>
                <td>~10%</td>
                <td>Nordeste (semiárido)</td>
              </tr>
              <tr>
                <td>Mata Atlântica</td>
                <td>1.110.182</td>
                <td>~13%</td>
                <td>Costa leste, Sul e SE</td>
              </tr>
              <tr>
                <td>Pampa</td>
                <td>176.496</td>
                <td>~2%</td>
                <td>Sul (Rio Grande do Sul)</td>
              </tr>
              <tr>
                <td>Pantanal</td>
                <td>150.355</td>
                <td>~2%</td>
                <td>Centro-Oeste (MT e MS)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A <strong>Amazônia</strong> é a maior floresta tropical do mundo, com extraordinária
          biodiversidade e papel fundamental na regulação do clima global. O <strong>Cerrado</strong>
          é o segundo maior bioma e o mais ameaçado, funcionando como "berço das águas" por abrigar
          as nascentes das principais bacias hidrográficas. A <strong>Caatinga</strong> é o único
          bioma exclusivamente brasileiro e é adaptada à seca. A <strong>Mata Atlântica</strong>
          é um dos biomas mais ameaçados do planeta, restando menos de 12% de sua cobertura original.
        </p>
      </section>

      {/* SVG figura 2 — diagrama dos biomas */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 620 310" xmlns="http://www.w3.org/2000/svg">
          <rect width="620" height="310" fill="#f8fafc" rx="12" />
          <text x="310" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1e293b">
            Biomas Brasileiros — Área Proporcional (esquemático)
          </text>
          {/* Amazônia — maior */}
          <rect x="20" y="50" width="250" height="180" rx="8" fill="#16a34a" opacity="0.85" />
          <text x="145" y="130" textAnchor="middle" fontSize="17" fontWeight="bold" fill="white">AMAZÔNIA</text>
          <text x="145" y="152" textAnchor="middle" fontSize="13" fill="#dcfce7">~49% do Brasil</text>
          <text x="145" y="170" textAnchor="middle" fontSize="11" fill="#dcfce7">Floresta tropical úmida</text>
          {/* Cerrado */}
          <rect x="285" y="50" width="150" height="120" rx="8" fill="#a3e635" opacity="0.85" />
          <text x="360" y="103" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#365314">CERRADO</text>
          <text x="360" y="120" textAnchor="middle" fontSize="11" fill="#365314">~24% do Brasil</text>
          {/* Mata Atlântica */}
          <rect x="450" y="50" width="145" height="80" rx="8" fill="#22c55e" opacity="0.75" />
          <text x="522" y="83" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">MATA ATLÂNTICA</text>
          <text x="522" y="100" textAnchor="middle" fontSize="10" fill="white">~13%</text>
          {/* Caatinga */}
          <rect x="285" y="185" width="150" height="60" rx="8" fill="#fbbf24" opacity="0.85" />
          <text x="360" y="210" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#78350f">CAATINGA</text>
          <text x="360" y="228" textAnchor="middle" fontSize="10" fill="#78350f">~10%</text>
          {/* Pampa */}
          <rect x="450" y="145" width="70" height="50" rx="8" fill="#84cc16" opacity="0.8" />
          <text x="485" y="168" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1a2e05">PAMPA</text>
          <text x="485" y="183" textAnchor="middle" fontSize="10" fill="#1a2e05">~2%</text>
          {/* Pantanal */}
          <rect x="530" y="145" width="65" height="50" rx="8" fill="#38bdf8" opacity="0.8" />
          <text x="562" y="168" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0c4a6e">PANTANAL</text>
          <text x="562" y="183" textAnchor="middle" fontSize="10" fill="#0c4a6e">~2%</text>
          <text x="310" y="295" textAnchor="middle" fontSize="9" fill="#64748b">
            Representação proporcional aproximada. Fonte: IBGE / MMA.
          </text>
        </svg>
        <figcaption>Diagrama esquemático da proporção dos biomas brasileiros em relação ao território nacional.</figcaption>
      </figure>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Rede hidrográfica</span>
        <h2>5. Hidrografia brasileira: bacias e rios</h2>
        <p>
          O Brasil possui uma das maiores redes hidrográficas do mundo, com rios de grande volume
          d'água e extensão. O território é dividido em oito bacias hidrográficas principais,
          conforme a classificação da Agência Nacional de Águas (ANA):
        </p>
        <ul>
          <li>
            <strong>Bacia Amazônica:</strong> a maior bacia hidrográfica do mundo (7,05 milhões de km²,
            sendo 3,9 mi no Brasil). O rio Amazonas tem a maior descarga de água do planeta.
          </li>
          <li>
            <strong>Bacia do Tocantins-Araguaia:</strong> importante para geração de energia elétrica
            (Usina de Tucuruí).
          </li>
          <li>
            <strong>Bacia do São Francisco:</strong> o "rio da integração nacional", fundamental para
            o abastecimento do Nordeste. Nasce em MG e deságua no Atlântico entre AL e SE.
          </li>
          <li>
            <strong>Bacia do Paraná:</strong> a mais utilizada para geração de energia no Brasil,
            com Itaipu (PR) e outras hidrelétricas.
          </li>
          <li>
            <strong>Bacia do Paraguai:</strong> abrange o Pantanal e tem função ecológica essencial.
          </li>
        </ul>
      </section>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Recursos hídricos</span>
        <h2>6. Potencial hidroelétrico e uso dos rios</h2>
        <p>
          O Brasil possui um dos maiores potenciais hidroelétricos do mundo, estimado em cerca de
          260 GW. Aproximadamente 60–65% da energia elétrica gerada no Brasil vem de usinas
          hidrelétricas, tornando a matriz energética brasileira uma das mais renováveis do mundo.
        </p>
        <p>
          No entanto, o uso intenso dos rios para geração de energia gera impactos ambientais
          significativos: inundação de áreas, destruição de ecossistemas fluviais, deslocamento de
          comunidades indígenas e ribeirinhas e alteração do regime de cheias e vazantes. As
          polêmicas em torno de usinas como Belo Monte (Xingu, PA) exemplificam esses conflitos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Maiores usinas hidrelétricas do Brasil</caption>
            <thead>
              <tr>
                <th>Usina</th>
                <th>Rio</th>
                <th>Estado</th>
                <th>Potência instalada (GW)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Itaipu</td>
                <td>Paraná</td>
                <td>PR (binacional)</td>
                <td>14,0</td>
              </tr>
              <tr>
                <td>Belo Monte</td>
                <td>Xingu</td>
                <td>PA</td>
                <td>11,2</td>
              </tr>
              <tr>
                <td>Tucuruí</td>
                <td>Tocantins</td>
                <td>PA</td>
                <td>8,4</td>
              </tr>
              <tr>
                <td>Jirau</td>
                <td>Madeira</td>
                <td>RO</td>
                <td>3,75</td>
              </tr>
              <tr>
                <td>Santo Antônio</td>
                <td>Madeira</td>
                <td>RO</td>
                <td>3,57</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Riscos naturais</span>
        <h2>7. Fenômenos naturais e riscos climáticos no Brasil</h2>
        <p>
          Apesar de estar afastado do "Cinturão de Fogo" do Pacífico, o Brasil não é imune a
          desastres naturais. Os principais riscos incluem:
        </p>
        <ul>
          <li>
            <strong>Secas e estiagens:</strong> especialmente no Nordeste semiárido e, mais
            recentemente, no Sudeste (como a crise hídrica de 2014–2015 em São Paulo).
          </li>
          <li>
            <strong>Inundações e enchentes:</strong> comuns nas áreas urbanizadas do Sul e Sudeste,
            agravadas pela impermeabilização do solo e ocupação irregular de várzeas.
          </li>
          <li>
            <strong>Deslizamentos:</strong> ocorrem em encostas serranas, como as da Serra do Mar
            (PR, SP, RJ) durante chuvas intensas de verão.
          </li>
          <li>
            <strong>El Niño e La Niña:</strong> fenômenos climáticos no Pacífico que afetam as
            chuvas no Brasil — El Niño causa seca no Norte/Nordeste e chuvas no Sul; La Niña
            tem efeito oposto.
          </li>
        </ul>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Solos brasileiros</span>
        <h2>8. Tipos de solo e aptidão agrícola</h2>
        <p>
          A diversidade de solos no Brasil é grande e está relacionada ao clima, ao relevo e à
          rocha matriz. Os principais tipos de solos são:
        </p>
        <ul>
          <li>
            <strong>Latossolos:</strong> os mais comuns no Brasil (cerca de 40% do território).
            São profundos, bem drenados e de baixa fertilidade natural, mas respondem bem à
            correção com calcário e fertilizantes. Predominam no Cerrado.
          </li>
          <li>
            <strong>Argissolos:</strong> comuns nas encostas e nas regiões tropicais, com alta
            suscetibilidade à erosão.
          </li>
          <li>
            <strong>Neossolos:</strong> solos pouco desenvolvidos, comuns na Caatinga e em
            superfícies jovens ou muito erodidas.
          </li>
          <li>
            <strong>Terra roxa (Nitossolo):</strong> formada sobre basalto, altamente fértil.
            Ocorre no Sul do Brasil e parte do Oeste do Paraná; foi fundamental para a
            cafeicultura.
          </li>
        </ul>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Integração dos aspectos físicos</span>
        <h2>9. Relações entre relevo, clima, vegetação e hidrografia</h2>
        <p>
          Os aspectos físicos do Brasil não existem de forma isolada — eles se inter-relacionam
          de maneira complexa. O relevo influencia o clima (serras barlavento recebem mais chuva),
          o clima determina o tipo de vegetação (floresta, savana, caatinga), a vegetação protege
          os solos e regula o regime hídrico, e os rios refletem o balanço entre precipitação e
          evapotranspiração de cada região.
        </p>
        <p>
          Exemplo claro: na Amazônia, o clima equatorial sustenta a floresta densa, que por sua
          vez gera chuvas via evapotranspiração (os chamados "rios voadores"), que alimentam rios
          caudalosos, que mantêm o equilíbrio hídrico de toda a América do Sul. O desmatamento
          rompe esse ciclo, levando a maior variação climática e menor disponibilidade hídrica.
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
              O clima semiárido, predominante no interior do Nordeste brasileiro, caracteriza-se
              principalmente por:
            </p>
          }
          options={[
            { letter: "a", text: "Chuvas abundantes e regulares ao longo do ano, com temperaturas amenas." },
            { letter: "b", text: "Precipitações inferiores a 800 mm/ano, irregulares, e altas temperaturas.", correct: true },
            { letter: "c", text: "Inverno rigoroso com geadas frequentes e verão chuvoso." },
            { letter: "d", text: "Alta umidade o ano todo, com vegetação de floresta densa." },
            { letter: "e", text: "Chuvas bem distribuídas e temperaturas médias entre 15 e 20°C." },
          ]}
          resolution={
            <p>
              O clima semiárido do Nordeste brasileiro tem como características marcantes a baixa
              precipitação (menos de 800 mm/ano), a irregularidade das chuvas e as altas temperaturas
              (em torno de 26–28°C). Essas condições deram origem à Caatinga, bioma adaptado à seca,
              exclusivo do Brasil. A resposta correta é a letra B.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              O rio Amazonas é o maior do mundo em volume de água. A bacia hidrográfica do Amazonas
              está relacionada, sobretudo, ao bioma:
            </p>
          }
          options={[
            { letter: "a", text: "Cerrado, pois a maior parte da bacia está sobre o Planalto Central." },
            { letter: "b", text: "Caatinga, pois a bacia tem precipitação irregular e baixa." },
            { letter: "c", text: "Mata Atlântica, pois a bacia banha o litoral do Nordeste." },
            { letter: "d", text: "Amazônia, pois a floresta tropical equatorial é o bioma dominante nessa bacia.", correct: true },
            { letter: "e", text: "Pampa, pois os campos sulinos drenam para o rio Amazonas." },
          ]}
          resolution={
            <p>
              A Bacia Amazônica é dominada pelo bioma Amazônia — a maior floresta tropical do mundo.
              O clima equatorial que caracteriza essa região (chuvas superiores a 2.000 mm/ano e altas
              temperaturas) sustenta a floresta densa, que por sua vez alimenta os rios da bacia por
              meio de evapotranspiração. A resposta correta é a letra D.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              (ENEM adaptado) A usina de Itaipu, no rio Paraná, é um símbolo do potencial
              hidroelétrico brasileiro. Sobre a Bacia do Paraná e o uso da água para geração de
              energia no Brasil, analise as afirmativas:<br />
              I. A Bacia do Paraná é a mais utilizada para geração de energia elétrica no Brasil.<br />
              II. O Brasil depende principalmente de energia termelétrica, pois tem poucos rios caudalosos.<br />
              III. Usinas hidrelétricas podem causar impactos como inundação de áreas e deslocamento de populações.<br />
              Está(ão) correta(s):
            </p>
          }
          options={[
            { letter: "a", text: "Apenas I." },
            { letter: "b", text: "Apenas II." },
            { letter: "c", text: "I e III.", correct: true },
            { letter: "d", text: "II e III." },
            { letter: "e", text: "I, II e III." },
          ]}
          resolution={
            <p>
              A afirmativa I é correta: a Bacia do Paraná concentra a maior quantidade de usinas
              hidrelétricas do Brasil, incluindo Itaipu. A afirmativa II é falsa: o Brasil possui
              uma matriz energética predominantemente hidrelétrica (60–65%), graças aos numerosos
              rios caudalosos. A afirmativa III é correta: hidrelétricas causam inundação de áreas,
              destruição de ecossistemas e deslocamento de comunidades. A resposta correta é a
              letra C (I e III).
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              Os "rios voadores" são um fenômeno característico da Amazônia e têm grande importância
              para o clima do Brasil. Sobre esse fenômeno, é correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "São rios que mudam de curso durante as cheias, criando novos leitos por toda a Amazônia." },
            { letter: "b", text: "São correntes de ar úmido geradas pela evapotranspiração da floresta amazônica, que transportam vapor d'água para outras regiões do Brasil.", correct: true },
            { letter: "c", text: "São rios subterrâneos que alimentam os aquíferos do Nordeste semiárido." },
            { letter: "d", text: "São ventos secos que levam calor do Cerrado para o litoral do Nordeste." },
            { letter: "e", text: "São canais artificiais construídos para transportar água para o semiárido." },
          ]}
          resolution={
            <p>
              Os "rios voadores" são correntes de ar carregadas de vapor d'água produzido pela
              evapotranspiração da floresta amazônica. Eles se deslocam em direção ao Sul e Sudeste
              do Brasil (bloqueados pela Cordilheira dos Andes), levando umidade que se transforma
              em chuvas no Centro-Sul do país. O desmatamento da Amazônia ameaça esse mecanismo,
              podendo reduzir as chuvas nessas regiões. A resposta correta é a letra B.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              (ENEM adaptado) O Cerrado é considerado o "berço das águas" do Brasil. Analisando os
              aspectos físicos desse bioma, assinale a alternativa que melhor explica essa denominação
              e suas implicações para a crise hídrica que o país pode enfrentar.
            </p>
          }
          options={[
            { letter: "a", text: "O Cerrado tem os solos mais úmidos do Brasil, armazenando grandes volumes de água superficial que abastecem reservatórios." },
            { letter: "b", text: "O Cerrado é o bioma onde nasce a maioria dos grandes rios brasileiros, alimentando as principais bacias hidrográficas do país, e seu desmatamento ameaça o abastecimento de água.", correct: true },
            { letter: "c", text: "O Cerrado é o bioma com maior precipitação do Brasil, recebendo mais chuvas que a Amazônia." },
            { letter: "d", text: "O Cerrado possui aquíferos superficiais que abastecem exclusivamente o Centro-Oeste, sem relação com outras regiões." },
            { letter: "e", text: "O Cerrado é chamado de berço das águas apenas por razões culturais, pois seus rios são todos intermitentes e não contribuem para bacias maiores." },
          ]}
          resolution={
            <p>
              O Cerrado é o segundo maior bioma do Brasil e abriga as nascentes das principais bacias
              hidrográficas do país: São Francisco, Tocantins, Araguaia, Paranaíba (formadora do Paraná),
              entre outras. Por isso é chamado de "berço das águas". O desmatamento acelerado do Cerrado
              (restam menos de 50% de sua vegetação original) ameaça a recarga dos aquíferos e a
              manutenção das nascentes, impactando o abastecimento de água em todo o Brasil. A resposta
              correta é a letra B.
            </p>
          }
        />
      </section>
    </article>
  );
}
