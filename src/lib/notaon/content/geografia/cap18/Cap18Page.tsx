"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap18Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 18</span>
          <h1>Biomas Mundiais</h1>
          <p>
            Os biomas mundiais são grandes unidades ecológicas que agrupam ecossistemas
            com clima, vegetação e fauna semelhantes. Distribuídos por todos os continentes,
            eles determinam as condições de vida de bilhões de pessoas e regulam os ciclos
            biogeoquímicos do planeta. O ENEM cobra a localização, as características climáticas,
            a biodiversidade e os impactos humanos sobre cada bioma — sempre articulando
            escala global com questões locais. Neste capítulo você dominará os principais
            biomas terrestres e costeiros do planeta, suas inter-relações e as ameaças que enfrentam.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Conceitos Fundamentais</span>
        <h2>1. O que são Biomas Mundiais?</h2>
        <p>
          Um <strong>bioma</strong> é uma grande unidade biogeográfica caracterizada por um
          clima dominante, uma fisionomia vegetal típica e uma fauna adaptada a essas condições.
          Os biomas não têm fronteiras rígidas — entre eles existem zonas de transição chamadas
          <strong> ecótonos</strong> (ou "zonas de tensão ecológica"), onde espécies de dois
          biomas adjacentes coexistem.
        </p>
        <p>
          A distribuição dos biomas segue principalmente dois fatores abióticos:
        </p>
        <ul>
          <li>
            <strong>Temperatura:</strong> diminui do Equador para os polos, determinando os
            grandes cinturões climáticos (tropical, subtropical, temperado, subártico, ártico).
          </li>
          <li>
            <strong>Precipitação:</strong> controla a fisionomia da vegetação — de florestas
            densas (alta precipitação) a desertos (precipitação quase nula).
          </li>
        </ul>
        <p>
          Ao combinar temperatura e precipitação, obtém-se o <strong>bioclima</strong> de cada
          região. As classificações mais usadas são as de Whittaker (diagrama temperatura ×
          precipitação) e de Köppen (letras: A = tropical, B = árido, C = temperado, D =
          continental, E = polar).
        </p>

        <div className="lesson-highlight">
          <h3>Biomas vs. Ecossistemas vs. Domínios Morfoclimáticos</h3>
          <p>
            <strong>Bioma:</strong> conceito global, baseado em vegetação e clima. <strong>Ecossistema:</strong> unidade
            funcional com seres vivos + fatores abióticos em interação (pode estar dentro de um bioma).
            <strong> Domínio morfoclimático:</strong> conceito brasileiro (Ab'Saber), articula relevo +
            clima + vegetação + solo + hidrografia em unidades regionais do Brasil — não se confunde
            com bioma, embora haja correspondência parcial.
          </p>
        </div>

        {/* SVG: Diagrama simplificado de distribuição de biomas por latitude */}
        <div className="lesson-svg-wrap" style={{ overflowX: "auto" }}>
          <svg viewBox="0 0 700 260" width="100%" style={{ maxWidth: 700, display: "block", margin: "0 auto" }}>
            <rect width="700" height="260" fill="#f8fafc" rx="12" />
            <text x="350" y="22" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1e293b">
              Distribuição dos Biomas por Latitude (esquemático)
            </text>
            {/* Faixas de latitude */}
            <rect x="40" y="35" width="620" height="32" fill="#2d6a4f" rx="4" />
            <text x="350" y="56" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Floresta Tropical Úmida (0° – 10°)</text>

            <rect x="40" y="72" width="620" height="28" fill="#b5e48c" rx="4" />
            <text x="350" y="91" textAnchor="middle" fontSize="11" fill="#1a3c1a" fontWeight="bold">Savanas e Cerrados (10° – 20°)</text>

            <rect x="40" y="105" width="620" height="28" fill="#e9c46a" rx="4" />
            <text x="350" y="124" textAnchor="middle" fontSize="11" fill="#6b4c11" fontWeight="bold">Desertos e Semiárido (20° – 30°)</text>

            <rect x="40" y="138" width="620" height="28" fill="#90c8ac" rx="4" />
            <text x="350" y="157" textAnchor="middle" fontSize="11" fill="#1a3c1a" fontWeight="bold">Florestas Mediterrâneas / Temperadas (30° – 50°)</text>

            <rect x="40" y="171" width="620" height="28" fill="#74b3ce" rx="4" />
            <text x="350" y="190" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Taiga (Floresta Boreal) (50° – 65°)</text>

            <rect x="40" y="204" width="620" height="28" fill="#caf0f8" rx="4" />
            <text x="350" y="223" textAnchor="middle" fontSize="11" fill="#023e8a" fontWeight="bold">Tundra (65° – 75°)</text>

            <rect x="40" y="237" width="620" height="15" fill="#90e0ef" rx="4" />
            <text x="350" y="249" textAnchor="middle" fontSize="10" fill="#023e8a" fontWeight="bold">Calotas Polares (&gt;75°)</text>
          </svg>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Biomas Florestais</span>
        <h2>2. Florestas Tropicais Úmidas</h2>
        <p>
          As <strong>florestas tropicais úmidas</strong> (ou florestas equatoriais) ocorrem entre os
          trópicos de Câncer e Capricórnio, principalmente na Bacia Amazônica (América do Sul), na
          Bacia do Congo (África Central) e no Sudeste Asiático (Indonésia, Malásia, Papua-Nova Guiné).
          São os biomas mais biodiversos do planeta — com mais de 50% de todas as espécies conhecidas,
          ocupando apenas ~7% da superfície terrestre.
        </p>
        <p>
          Características principais:
        </p>
        <ul>
          <li>
            <strong>Clima:</strong> quente e úmido o ano todo, sem estação seca definida. Temperatura
            média entre 25°C e 28°C; precipitação superior a 2.000 mm/ano.
          </li>
          <li>
            <strong>Vegetação:</strong> estratificada em vários andares (dossel, sub-bosque, estrato
            herbáceo, plantas epífitas). Alta densidade e diversidade de espécies vegetais.
          </li>
          <li>
            <strong>Solo:</strong> paradoxalmente pobre em nutrientes — o ciclo de nutrientes
            é rápido e ocorre principalmente na serapilheira (camada orgânica superficial), não
            no solo mineral profundo. Por isso, ao desmatar, o solo se esgota rapidamente.
          </li>
          <li>
            <strong>Ameaças:</strong> desmatamento (pecuária, soja, palma de óleo), extração
            madeireira, mineração e mudanças climáticas.
          </li>
        </ul>

        <Exercise
          level="Básico"
          title="1. Floresta tropical e biodiversidade"
          statement={
            <p>
              As florestas tropicais úmidas concentram a maior biodiversidade do planeta, apesar de
              ocuparem pequena fração da superfície terrestre. Uma das razões para tamanha riqueza
              de espécies está relacionada às características do solo dessas florestas. Sobre esse
              paradoxo, assinale a alternativa CORRETA:
            </p>
          }
          options={[
            { letter: "a", text: "O solo das florestas tropicais é extremamente fértil, acumulando grandes quantidades de nutrientes ao longo de milênios, o que explica a alta biodiversidade." },
            { letter: "b", text: "A fertilidade das florestas tropicais está na serapilheira: o ciclo de nutrientes é rápido e superficial, tornando o solo mineral profundo relativamente pobre.", correct: true },
            { letter: "c", text: "As florestas tropicais têm alta biodiversidade porque o solo profundo é rico em minerais pesados que alimentam diretamente as raízes das árvores." },
            { letter: "d", text: "A alta biodiversidade das florestas tropicais se deve à baixa precipitação, que concentra os nutrientes na camada superficial do solo." },
            { letter: "e", text: "O solo das florestas tropicais é idêntico ao de savanas e cerrados, não havendo diferença em termos de fertilidade." },
          ]}
          resolution={
            <p>
              O chamado "paradoxo da floresta tropical" é clássico no ENEM: apesar da exuberância
              da vegetação, o solo mineral é pobre. Os nutrientes circulam rapidamente na serapilheira
              — folhas caem, decompõem-se e são reabsorvidas pelas raízes rasas em ciclo acelerado.
              Ao desmatar e expor o solo ao sol e à chuva, os nutrientes são lixiviados e a terra
              se torna improdutiva em poucos anos, explicando o modelo itinerante de agricultura
              na Amazônia e em outras florestas tropicais.
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Florestas Temperadas e Taiga</span>
        <h2>3. Florestas Temperadas e Taiga (Floresta Boreal)</h2>
        <p>
          As <strong>florestas temperadas</strong> ocorrem nas regiões de clima temperado oceânico e
          continental, entre 30° e 50° de latitude (leste da América do Norte, Europa Ocidental, leste
          da Ásia, sul do Chile e Argentina). Apresentam estações bem definidas e espécies
          caducifólias (que perdem as folhas no outono/inverno) como o carvalho, o bordo e a faia.
          A biodiversidade é menor que nas florestas tropicais, mas o solo é mais fértil.
        </p>
        <p>
          A <strong>taiga</strong> (ou floresta boreal) é o bioma florestal mais extenso do mundo,
          formando uma faixa contínua pelo Canadá, Rússia, Noruega, Finlândia e Sibéria, entre 50°
          e 65° de latitude norte. Dominada por coníferas (pinheiros, abetos, larício), a taiga tem
          inverno extremo (–40°C em partes da Sibéria), solo com permafrost (solo permanentemente
          congelado) e biodiversidade limitada. Contudo, armazena enormes quantidades de carbono no
          solo orgânico e na biomassa.
        </p>
        <p>
          O <strong>permafrost</strong> da Sibéria e do Ártico representa uma bomba climática em
          potencial: o aquecimento global provoca seu degelo, liberando metano (CH₄) — gás de efeito
          estufa com potencial de aquecimento ~25 vezes maior que o CO₂ — e podendo criar um ciclo
          de retroalimentação positiva (feedback) que acelera ainda mais o aquecimento.
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Bioma</th>
              <th>Latitude típica</th>
              <th>Vegetação dominante</th>
              <th>Temperatura média</th>
              <th>Precipitação média</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Floresta Tropical</td>
              <td>0° – 10°</td>
              <td>Latifoliadas perenes, multi-estratificada</td>
              <td>25–28°C</td>
              <td>&gt;2.000 mm/ano</td>
            </tr>
            <tr>
              <td>Floresta Temperada</td>
              <td>30° – 50°</td>
              <td>Caducifólias (carvalho, bordo, faia)</td>
              <td>5–20°C</td>
              <td>750–1.500 mm/ano</td>
            </tr>
            <tr>
              <td>Taiga</td>
              <td>50° – 65°</td>
              <td>Coníferas (pinheiro, abeto, larício)</td>
              <td>–5 a 10°C</td>
              <td>300–900 mm/ano</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Savanas e Campos</span>
        <h2>4. Savanas, Pradarias e Campos</h2>
        <p>
          As <strong>savanas</strong> ocorrem nos trópicos entre as florestas equatoriais e os
          desertos, caracterizadas por um mosaico de gramíneas e árvores esparsas. As principais
          savanas do mundo são:
        </p>
        <ul>
          <li>
            <strong>Savana africana</strong> (Africa Subsaariana): cobre cerca de 40% do continente
            africano. Rica em megafauna (elefante, leão, girafa, zebra, gnu, hipopótamo).
            O Serengeti (Tanzânia/Quênia) é o ecossistema mais famoso.
          </li>
          <li>
            <strong>Cerrado brasileiro:</strong> maior savana da América do Sul (já estudado no cap17).
          </li>
          <li>
            <strong>Llanos</strong> (Venezuela e Colômbia) e <strong>Gran Chaco</strong> (Argentina,
            Paraguai, Bolívia): savanas sul-americanas de menor extensão.
          </li>
        </ul>
        <p>
          As <strong>pradarias</strong> (campos temperados) ocorrem em regiões de clima temperado
          continental com precipitação moderada insuficiente para sustentar florestas:
        </p>
        <ul>
          <li>
            <strong>Pradarias norte-americanas</strong> (<em>Great Plains</em>): de Manitoba (Canadá)
            ao Texas (EUA). Hoje, grande parte convertida em lavouras de trigo, milho e soja.
          </li>
          <li>
            <strong>Estepes eurasiana:</strong> faixa que vai da Ucrânia ao Cazaquistão, coração
            da "cintura do trigo" da Rússia.
          </li>
          <li>
            <strong>Pampas</strong> (Argentina, Uruguai, sul do Brasil): campos temperados do Cone
            Sul, importante área agrícola e pecuária.
          </li>
        </ul>

        <Exercise
          level="Intermediário"
          title="2. Savana africana e megafauna"
          statement={
            <p>
              A savana africana é o bioma com a maior diversidade de megafauna terrestre do planeta.
              Essa característica tem relação direta com as condições climáticas e ecológicas do bioma.
              Assinale a alternativa que MELHOR explica a abundância de megafauna na savana africana:
            </p>
          }
          options={[
            { letter: "a", text: "A ausência de precipitação na savana africana concentra os animais em poucas fontes de água, aumentando a diversidade aparente observada pelos pesquisadores." },
            { letter: "b", text: "A alternância entre estação seca e chuvosa cria pulsos de produtividade vegetal que sustentam grandes rebanhos migrantes e, consequentemente, predadores de grande porte.", correct: true },
            { letter: "c", text: "A savana africana tem alta megafauna porque é o único bioma do mundo onde a caça predatória nunca aconteceu, preservando populações intactas desde a pré-história." },
            { letter: "d", text: "A alta megafauna da savana africana se deve ao solo extremamente fértil, que produz gramíneas de alto valor nutricional durante todo o ano, sem interrupção sazonal." },
            { letter: "e", text: "A megafauna africana sobreviveu porque a savana é um bioma de alta precipitação, garantindo vegetação abundante ao longo de todos os meses do ano." },
          ]}
          resolution={
            <p>
              A savana africana tem clima tropical com duas estações bem definidas: uma seca e outra
              chuvosa. Na estação das chuvas, as gramíneas crescem vigorosamente e sustentam grandes
              herbívoros migrantes (gnus, zebras, gazelas). Esses herbívoros, por sua vez, sustentam
              predadores de grande porte (leões, leopardos, guepardos, hienas). A sazonalidade cria um
              sistema de pulsos energéticos que permite essa diversidade única. A savana africana é
              também relevante porque os hominídeos evoluíram nesse ambiente, o que pode explicar
              parcialmente a ausência de extinções massivas de megafauna africana no Pleistoceno (ao
              contrário de outros continentes, onde chegada humana coincidiu com extinções).
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Desertos e Regiões Áridas</span>
        <h2>5. Desertos e Regiões Semiáridas</h2>
        <p>
          Os <strong>desertos</strong> cobrem cerca de 33% da superfície terrestre e são definidos por
          precipitação inferior a 250 mm/ano (alguns têm menos de 10 mm). Contrariamente à imagem
          popular, nem todos são quentes: existem desertos frios (como o Gobi, na Mongólia/China, e
          o Atacama, no Chile/Peru) e desertos polares (Antártida e Ártico).
        </p>
        <p>
          Os desertos quentes se formam principalmente:
        </p>
        <ul>
          <li>
            <strong>Nas latitudes subtropicais (20°–30°):</strong> onde as células de Hadley
            provocam subsidência do ar (descida de massas de ar seco e quente), inibindo a formação
            de nuvens e chuvas. É a causa dos grandes desertos do mundo: Saara, Arábico, Australiano,
            Kalahari, Sonora.
          </li>
          <li>
            <strong>No interior dos continentes (longe dos oceanos):</strong> o ar que chega perdeu
            toda a umidade nas cadeias montanhosas costeiras — efeito de sombra orográfica.
          </li>
          <li>
            <strong>Em costas com correntes oceânicas frias:</strong> ar resfriado sobre o oceano não
            sobe para formar nuvens. Exemplo: deserto do Atacama (corrente de Humboldt) e deserto da
            Namíbia (corrente de Benguela).
          </li>
        </ul>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Deserto</th>
              <th>Continente</th>
              <th>Área (km²)</th>
              <th>Causa principal</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Saara</td><td>África</td><td>~9.200.000</td><td>Subsidência subtropical</td></tr>
            <tr><td>Ártico</td><td>Ártico (polar)</td><td>~13.900.000</td><td>Polar (frio)</td></tr>
            <tr><td>Antártico</td><td>Antártida (polar)</td><td>~14.200.000</td><td>Polar (frio)</td></tr>
            <tr><td>Arábico</td><td>Ásia</td><td>~2.330.000</td><td>Subsidência subtropical</td></tr>
            <tr><td>Gobi</td><td>Ásia</td><td>~1.300.000</td><td>Interior continental</td></tr>
            <tr><td>Atacama</td><td>América do Sul</td><td>~140.000</td><td>Corrente fria + orografia</td></tr>
          </tbody>
        </table>

        <div className="lesson-highlight">
          <h3>Desertificação ≠ Deserto Natural</h3>
          <p>
            <strong>Desertificação</strong> é a degradação de terras em regiões áridas, semiáridas e
            sub-úmidas secas causada pela ação humana (desmatamento, sobrepastoreio, irrigação
            inadequada) e/ou pela variabilidade climática. Não significa a expansão de desertos naturais,
            mas a criação de novas áreas com características de deserto em regiões que antes tinham
            vegetação. No Brasil, o semiárido nordestino concentra focos de desertificação, especialmente
            no Seridó (RN/PB) e no Irauçuba (CE).
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tundra e Biomas Polares</span>
        <h2>6. Tundra, Calotas Polares e Permafrost</h2>
        <p>
          A <strong>tundra</strong> é o bioma das regiões subpolares (65°–75° de latitude), com
          invernos rigorosos e longas noites polares. A vegetação é rasa e rasteira — líquens,
          musgos, gramíneas e arbustos anões — pois o permafrost impede o crescimento de raízes
          profundas. No verão ártico, o sol da meia-noite possibilita um breve surto de vida: aves
          migratórias, caribus, renas e insetos exploram os recursos sazonais.
        </p>
        <p>
          As <strong>calotas polares</strong> (Ártico e Antártida) são biomas extremos, mas de
          enorme importância climática: refletem radiação solar (albedo), regulam a temperatura
          global e contêm volumes imensas de água doce congelada. O degelo acelerado, causado pelo
          aquecimento global, eleva o nível dos mares e altera correntes oceânicas como o AMOC
          (Circulação de Revolvimento do Atlântico Meridional), que regula o clima europeu.
        </p>

        <Exercise
          level="Intermediário"
          title="3. Tundra e mudanças climáticas"
          statement={
            <><p>
              A tundra ártica tem sido considerada um dos ambientes mais vulneráveis às mudanças
              climáticas globais. O aquecimento do Ártico ocorre a uma taxa duas a quatro vezes
              maior que a média global — fenômeno conhecido como "amplificação ártica".
            </p>
            <p>
              Assinale a alternativa que MELHOR descreve as consequências desse aquecimento acelerado
              para o bioma da tundra e para o clima global:
            </p></>
          }
          options={[
            { letter: "a", text: "O aquecimento da tundra aumenta o albedo da região, pois o degelo expõe solos mais claros que refletem mais radiação solar, reduzindo o aquecimento global." },
            { letter: "b", text: "O degelo do permafrost libera metano e CO₂ armazenados por milênios, criando um feedback positivo que acelera ainda mais o aquecimento global.", correct: true },
            { letter: "c", text: "O aquecimento da tundra beneficia o bioma, pois permite o crescimento de florestas temperadas, aumentando a absorção de carbono e compensando as emissões globais." },
            { letter: "d", text: "O derretimento das calotas polares eleva o nível do mar, mas não afeta correntes oceânicas como o AMOC, pois estas dependem apenas da temperatura do ar, não da salinidade." },
            { letter: "e", text: "A amplificação ártica é um fenômeno local, sem consequências para o clima de outras regiões do planeta, pois as massas de ar polares são isoladas pelas correntes de jato." },
          ]}
          resolution={
            <p>
              O degelo do permafrost é uma das maiores preocupações climáticas dos cientistas. Solos
              congelados há milhares de anos armazenam carbono orgânico (matéria orgânica que não
              se decompôs devido ao frio). Com o degelo, bactérias começam a decompor esse material,
              liberando CO₂ e CH₄ (metano). O metano tem potencial de aquecimento ~25 vezes maior
              que o CO₂ em 100 anos. Isso cria um feedback positivo: mais aquecimento → mais degelo →
              mais emissão de GEE → mais aquecimento. Adicionalmente, o degelo reduz o albedo
              (superfícies escuras de oceano absorvem mais calor que o gelo branco), ampliando o
              aquecimento. O impacto no AMOC também é real: a entrada de água doce (menos densa e
              salgada) pode desacelerar a circulação termohalina europeia.
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Biomas Aquáticos</span>
        <h2>7. Biomas Aquáticos: Oceanos, Recifes e Zonas Úmidas</h2>
        <p>
          Os biomas aquáticos cobrem ~71% da superfície do planeta. São divididos em:
        </p>
        <ul>
          <li>
            <strong>Oceanos e mares:</strong> bioma mais extenso. A produtividade concentra-se
            nas zonas fótica (onde a luz penetra, até ~200 m) e nas áreas de ressurgência
            (upwelling) — onde correntes frias sobem do fundo trazendo nutrientes, como a
            corrente de Humboldt no Pacífico Sul, sustentando grande pesca.
          </li>
          <li>
            <strong>Recifes de coral:</strong> apesar de ocuparem menos de 1% do fundo oceânico,
            abrigam ~25% de todas as espécies marinhas. São formados por pólipos de coral que
            secretam carbonato de cálcio. Extremamente sensíveis à temperatura: o aumento de 1–2°C
            causa o <em>branqueamento</em> (expulsão das algas simbióticas zooxantelas). Os recifes
            enfrentam ameaças triplas: aquecimento, acidificação (dissolução do CO₂ na água do mar
            reduz o pH e dificulta a formação de carbonato de cálcio) e poluição.
          </li>
          <li>
            <strong>Manguezais:</strong> ecossistemas costeiros tropicais de alta produtividade.
            Servem como berçário para espécies marinhas, filtram poluentes e protegem a costa de
            erosão e tsunamis. O Brasil tem a maior extensão de manguezais do mundo (~1,4 milhão
            de hectares).
          </li>
          <li>
            <strong>Lagos, rios e áreas úmidas:</strong> representam apenas ~3% da água doce
            superficial, mas são críticos para biodiversidade e abastecimento humano. A Convenção
            de Ramsar (1971) protege as áreas úmidas de importância internacional.
          </li>
        </ul>

        <Exercise
          level="Avançado"
          title="4. Recifes de coral e acidificação"
          statement={
            <><p>
              Os recifes de coral são frequentemente chamados de "florestas tropicais do mar" por
              sua biodiversidade. Ao mesmo tempo, estão entre os ecossistemas mais ameaçados pelo
              aquecimento global.
            </p>
            <p>
              Considerando as ameaças aos recifes de coral, assinale a alternativa CORRETA sobre
              o processo de acidificação oceânica:
            </p></>
          }
          options={[
            { letter: "a", text: "A acidificação oceânica é causada pelo lançamento direto de ácidos industriais no mar, sem relação com as emissões de CO₂ da atmosfera." },
            { letter: "b", text: "A acidificação oceânica resulta da absorção de CO₂ atmosférico pelos oceanos, formando ácido carbônico que reduz o pH e dificulta a formação de carbonato de cálcio pelos corais.", correct: true },
            { letter: "c", text: "A acidificação oceânica aumenta a concentração de carbonato de cálcio na água, beneficiando os corais e acelerando o crescimento dos recifes em regiões tropicais." },
            { letter: "d", text: "A acidificação oceânica afeta apenas os polos, pois o CO₂ se dissolve melhor em águas frias, não representando ameaça aos recifes tropicais de coral." },
            { letter: "e", text: "O branqueamento dos corais é causado exclusivamente pela acidificação oceânica, não tendo relação com o aumento da temperatura da água do mar." },
          ]}
          resolution={
            <p>
              Os oceanos absorvem cerca de 25–30% do CO₂ emitido pela humanidade. Quando o CO₂
              dissolve-se na água, forma ácido carbônico (H₂CO₃), que se dissocia em íons bicarbonato
              e prótons H⁺, reduzindo o pH oceânico. Desde a Revolução Industrial, o pH médio dos
              oceanos caiu de ~8,2 para ~8,1 — uma queda de 0,1 unidade que representa um aumento
              de ~26% na concentração de H⁺ (escala logarítmica). O problema para os corais: eles
              precisam de íons carbonato (CO₃²⁻) para construir seus esqueletos de aragonita
              (CaCO₃). A acidificação reduz a disponibilidade de CO₃²⁻, tornando mais difícil e
              energeticamente custosa a calcificação. O branqueamento, por sua vez, é causado
              principalmente pelo aumento de temperatura (acima de 1°C da média máxima local por
              mais de 4 semanas).
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Biodiversidade Global</span>
        <h2>8. Biodiversidade, Hotspots e Extinção</h2>
        <p>
          A <strong>biodiversidade</strong> pode ser medida em três níveis: diversidade genética
          (variabilidade dentro de uma espécie), diversidade de espécies (número e abundância de
          espécies) e diversidade de ecossistemas (variedade de habitats). A Terra abriga
          estimativas de 8–10 milhões de espécies, das quais apenas ~1,5 milhão foram formalmente
          descritas pela ciência.
        </p>
        <p>
          Os <strong>hotspots de biodiversidade</strong> (Conservation International) são as 36
          regiões do planeta que concentram alto endemismo de plantas vasculares (&gt;1.500 espécies
          endêmicas) e já perderam &gt;70% da cobertura vegetal original. Juntos, ocupam apenas ~2,4%
          da superfície terrestre, mas abrigam &gt;50% de todas as espécies de plantas e &gt;42% de
          vertebrados terrestres endêmicos. No Brasil: Cerrado e Mata Atlântica.
        </p>
        <p>
          A taxa atual de extinção de espécies é estimada em 1.000 a 10.000 vezes a taxa natural de
          "extinção de fundo". Esse fenômeno é chamado de <strong>Sexta Extinção em Massa</strong>
          (ou Extinção do Antropoceno), atribuída às atividades humanas: destruição de habitats,
          superexploração, invasão de espécies exóticas, poluição e mudanças climáticas.
        </p>

        <Exercise
          level="Avançado"
          title="5. Hotspots e extinção em massa"
          statement={
            <><p>
              A perda de biodiversidade global é considerada uma das maiores crises ambientais do
              século XXI. Conceitos como "hotspots de biodiversidade" e "sexta extinção em massa"
              são frequentes no ENEM.
            </p>
            <p>
              Assinale a alternativa CORRETA sobre biodiversidade e extinção de espécies:
            </p></>
          }
          options={[
            { letter: "a", text: "Os hotspots de biodiversidade são áreas com alta diversidade de espécies e baixo grau de ameaça, onde a vegetação nativa está bem preservada (acima de 50% da cobertura original)." },
            { letter: "b", text: "A sexta extinção em massa é um evento geológico natural, semelhante às cinco anteriores, causado por impactos de asteroides e não pelas atividades humanas." },
            { letter: "c", text: "A diversidade de espécies é a única dimensão da biodiversidade considerada relevante para a conservação, sendo a diversidade genética e de ecossistemas irrelevantes para as políticas ambientais." },
            { letter: "d", text: "Os hotspots de biodiversidade combinam alto endemismo de plantas vasculares com alto grau de ameaça (mais de 70% da vegetação original já destruída), concentrando prioridades de conservação em áreas reduzidas.", correct: true },
            { letter: "e", text: "A taxa atual de extinção de espécies é equivalente à taxa natural de extinção de fundo, não configurando uma crise de biodiversidade significativamente diferente dos períodos anteriores à ação humana." },
          ]}
          resolution={
            <p>
              Os hotspots de biodiversidade são definidos por dois critérios simultâneos: (1) possuir
              ao menos 1.500 espécies de plantas vasculares endêmicas; e (2) ter perdido ao menos
              70% da cobertura vegetal original. Portanto, são áreas ricas E ameaçadas — não áreas
              bem preservadas. A sexta extinção em massa é atribuída às atividades humanas (destruição
              de habitats, poluição, superexploração, mudanças climáticas, espécies invasoras) e
              diferencia-se das cinco extinções anteriores por não ter causa geológica ou cósmica.
              A biodiversidade tem três dimensões igualmente importantes para conservação: genética
              (garante adaptabilidade), de espécies (estrutura as cadeias alimentares) e de
              ecossistemas (garante serviços ecossistêmicos).
            </p>
          }
        />
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese e ENEM</span>
        <h2>9. Comparativo Global dos Biomas e Estratégias de Prova</h2>
        <p>
          O ENEM cobra os biomas mundiais principalmente em questões de Ciências Humanas (Geografia)
          e Ciências da Natureza (Biologia/Ecologia). As abordagens mais frequentes são:
        </p>
        <ul>
          <li>Identificar um bioma a partir de texto motivador descrevendo clima ou fauna.</li>
          <li>Relacionar desmatamento, aquecimento global e perda de biodiversidade.</li>
          <li>Comparar biomas quanto à produtividade primária, solo ou estratégia de conservação.</li>
          <li>Interpretar mapas de distribuição de biomas ou gráficos de precipitação/temperatura.</li>
          <li>Analisar impactos humanos (desertificação, branqueamento de corais, degelo).</li>
        </ul>

        <div className="lesson-highlight">
          <h3>Mnemônico: ordem de produtividade primária bruta</h3>
          <p>
            Da maior para a menor: <strong>Floresta tropical &gt; Floresta temperada &gt; Savana &gt;
            Taiga &gt; Pradaria &gt; Deserto &gt; Tundra</strong>. Os oceanos abertos têm produtividade
            relativamente baixa (desertos azuis), mas os recifes e as zonas de ressurgência são
            excepcionalmente produtivos.
          </p>
        </div>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Bioma</th>
              <th>Região típica</th>
              <th>Biodiversidade</th>
              <th>Principal ameaça</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Floresta tropical</td><td>Amazônia, Congo, Sudeste Asiático</td><td>Máxima</td><td>Desmatamento</td></tr>
            <tr><td>Savana africana</td><td>África Subsaariana</td><td>Alta (megafauna)</td><td>Caça, conversão agrícola</td></tr>
            <tr><td>Taiga</td><td>Canadá, Rússia</td><td>Baixa</td><td>Exploração madeireira, degelo</td></tr>
            <tr><td>Tundra</td><td>Ártico</td><td>Baixa</td><td>Aquecimento global</td></tr>
            <tr><td>Desertos quentes</td><td>Saara, Arábico</td><td>Muito baixa</td><td>Desertificação</td></tr>
            <tr><td>Recifes de coral</td><td>Indo-Pacífico, Caribe</td><td>Altíssima</td><td>Branqueamento, acidificação</td></tr>
            <tr><td>Manguezais</td><td>Costas tropicais</td><td>Alta</td><td>Urbanização, aquicultura</td></tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
