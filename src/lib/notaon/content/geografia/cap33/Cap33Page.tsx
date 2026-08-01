"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap33Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Geografia • Capítulo 33</span>
          <h1>Geopolítica contemporânea e conflitos internacionais</h1>
          <p>
            A geopolítica contemporânea é marcada pela transição de uma ordem bipolar (Guerra Fria) para um
            mundo multipolar, onde múltiplos atores disputam influência regional e global. Conflitos armados,
            disputas territoriais, terrorismo internacional e guerras por recursos naturais redesenham
            fronteiras e alianças em ritmo acelerado. Compreender esses processos é essencial para entender
            a lógica das relações internacionais e os impactos humanitários e econômicos dos conflitos no
            século XXI.
          </p>
        </div>
      </section>

      {/* ── Seção 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ordem mundial</span>
        <h2>1. Da bipolaridade à multipolaridade</h2>
        <p>
          Durante a Guerra Fria (1947–1991), o mundo esteve dividido em dois blocos antagônicos: o capitalista,
          liderado pelos Estados Unidos, e o socialista, liderado pela União Soviética. Essa bipolaridade
          organizou as relações internacionais por quase meio século, com conflitos armados em regiões
          periféricas (guerras "proxy") e a corrida nuclear como pano de fundo.
        </p>
        <p>
          Com a dissolução da URSS em 1991, os EUA emergiram como única superpotência global — configurando
          um breve período de unipolaridade. No entanto, a ascensão da China como potência econômica e
          militar, o ressurgimento da Rússia como ator assertivo, a consolidação de potências regionais como
          Índia, Brasil, Turquia e Irã, e a proliferação de atores não-estatais (grupos terroristas,
          corporações multinacionais, ONGs) apontam para uma ordem multipolar em construção.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Comparação entre os modelos de ordem mundial</caption>
            <thead>
              <tr>
                <th>Ordem</th>
                <th>Período</th>
                <th>Características</th>
                <th>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bipolar</td>
                <td>1947–1991</td>
                <td>Dois blocos ideológicos antagônicos; corrida nuclear; guerras proxy</td>
                <td>Guerra da Coreia, Guerra do Vietnã, Crise dos Mísseis</td>
              </tr>
              <tr>
                <td>Unipolar</td>
                <td>1991–2000s</td>
                <td>Hegemonia americana; ONU fortalecida; "fim da história"</td>
                <td>Guerra do Golfo (1991), Expansão da OTAN</td>
              </tr>
              <tr>
                <td>Multipolar</td>
                <td>2000s–atual</td>
                <td>Múltiplos centros de poder; fragmentação; incerteza</td>
                <td>Ascensão da China, guerra na Ucrânia, BRICS+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Oriente Médio</span>
        <h2>2. Conflitos no Oriente Médio</h2>
        <p>
          O Oriente Médio concentra alguns dos conflitos mais duradouros e complexos da história contemporânea.
          A questão palestina — decorrente da criação do Estado de Israel em 1948 e da subsequente ocupação
          dos territórios palestinos — permanece irresoluta e é fonte de tensões permanentes. A Guerra dos Seis
          Dias (1967), os Acordos de Oslo (1993) e as múltiplas guerras em Gaza (2008, 2012, 2014, 2021 e
          2023-2024) marcam um conflito que envolve questões territoriais, religiosas, identitárias e
          geopolíticas profundas.
        </p>
        <p>
          A Primavera Árabe (2010–2012) desestabilizou regimes autoritários em vários países, levando à guerra
          civil na Síria, que se tornou um dos piores desastres humanitários do século XXI, com mais de 500 mil
          mortos e milhões de refugiados. O conflito sírio envolveu múltiplos atores: governo Assad, grupos
          rebeldes, ISIS (Estado Islâmico), Turquia, Rússia, EUA e Irã.
        </p>
        <p>
          A rivalidade entre Arábia Saudita (sunita) e Irã (xiita) estrutura grande parte dos conflitos
          regionais, incluindo a guerra no Iêmen, onde a coalizão liderada pelos sauditas enfrenta os rebeldes
          Houthi apoiados pelo Irã — mais um caso de guerra proxy na região.
        </p>
      </section>

      {/* ── SVG Figure 1 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="300" fill="#f1f5f9" rx="12" />
          <text x="300" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1e293b">
            Principais Focos de Conflito no Mundo Contemporâneo
          </text>

          {/* América */}
          <ellipse cx="120" cy="160" rx="80" ry="50" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="2" />
          <text x="120" y="150" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">AMÉRICAS</text>
          <text x="120" y="168" textAnchor="middle" fontSize="10" fill="#1e40af">Narcotráfico</text>
          <text x="120" y="183" textAnchor="middle" fontSize="10" fill="#1e40af">Venezuela</text>

          {/* Europa/Ucrânia */}
          <ellipse cx="280" cy="120" rx="75" ry="45" fill="#ef4444" opacity="0.15" stroke="#ef4444" strokeWidth="2" />
          <text x="280" y="110" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#991b1b">EUROPA</text>
          <text x="280" y="128" textAnchor="middle" fontSize="10" fill="#991b1b">Guerra</text>
          <text x="280" y="143" textAnchor="middle" fontSize="10" fill="#991b1b">Ucrânia</text>

          {/* Oriente Médio */}
          <ellipse cx="390" cy="160" rx="85" ry="55" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" strokeWidth="2" />
          <text x="390" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">OR. MÉDIO</text>
          <text x="390" y="163" textAnchor="middle" fontSize="10" fill="#92400e">Israel-Palestina</text>
          <text x="390" y="178" textAnchor="middle" fontSize="10" fill="#92400e">Síria • Iêmen</text>
          <text x="390" y="193" textAnchor="middle" fontSize="10" fill="#92400e">Irã × Saudita</text>

          {/* África */}
          <ellipse cx="290" cy="230" rx="70" ry="40" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" strokeWidth="2" />
          <text x="290" y="223" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#4c1d95">ÁFRICA</text>
          <text x="290" y="241" textAnchor="middle" fontSize="10" fill="#4c1d95">Sahel • Etiópia</text>
          <text x="290" y="256" textAnchor="middle" fontSize="10" fill="#4c1d95">Congo</text>

          {/* Ásia */}
          <ellipse cx="500" cy="130" rx="80" ry="45" fill="#10b981" opacity="0.15" stroke="#10b981" strokeWidth="2" />
          <text x="500" y="118" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#064e3b">ÁSIA</text>
          <text x="500" y="136" textAnchor="middle" fontSize="10" fill="#064e3b">Mar do Sul da China</text>
          <text x="500" y="151" textAnchor="middle" fontSize="10" fill="#064e3b">Índia-Paquistão</text>
          <text x="500" y="166" textAnchor="middle" fontSize="10" fill="#064e3b">Myanmar</text>
        </svg>
        <figcaption>Principais focos de conflito e tensão geopolítica no mundo contemporâneo</figcaption>
      </figure>

      {/* ── Seção 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Europa em guerra</span>
        <h2>3. A guerra na Ucrânia e suas implicações globais</h2>
        <p>
          Em fevereiro de 2022, a Rússia lançou uma invasão em larga escala à Ucrânia, o maior conflito
          armado na Europa desde a Segunda Guerra Mundial. As raízes do conflito remontam à dissolução da
          URSS em 1991, à Revolução da Maidan de 2014, à anexação da Crimeia pela Rússia e à guerra no
          Donbass (2014–2022). Para Moscou, a expansão da OTAN em direção às suas fronteiras representava
          uma ameaça existencial; para Kiev e o Ocidente, tratava-se de uma agressão imperialista que violava
          o direito internacional.
        </p>
        <p>
          A guerra teve impactos econômicos globais profundos: disparada nos preços de trigo, milho e energia
          (a Ucrânia e a Rússia são grandes exportadores de cereais e combustíveis fósseis), crise energética
          na Europa, aceleração da corrida armamentista e reconfiguração das alianças. O conflito também
          evidenciou a divisão entre o "Ocidente coletivo" (UE, EUA, OTAN) e um bloco de países que se
          recusaram a condenar a Rússia (China, Índia, parte da África e América Latina).
        </p>
      </section>

      {/* ── Seção 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ásia e Indo-Pacífico</span>
        <h2>4. Tensões no Indo-Pacífico</h2>
        <p>
          A ascensão da China como potência global gerou tensões em várias frentes na Ásia. No Mar do Sul
          da China, Pequim reivindica soberania sobre praticamente toda a área, em disputa com Filipinas,
          Vietnã, Malásia, Brunei e Taiwan. A China construiu ilhas artificiais e instalou bases militares
          na região, através das quais passam trilhões de dólares em comércio anual.
        </p>
        <p>
          A questão de Taiwan é a mais sensível: Pequim considera a ilha uma província rebelde que deve
          ser reunificada — pela força se necessário. Os EUA mantêm ambiguidade estratégica sobre defesa
          de Taiwan, fornecendo armas sem reconhecimento formal de sua independência. A competição
          sino-americana no Indo-Pacífico levou à formação do QUAD (EUA, Japão, Índia e Austrália) e do
          AUKUS (EUA, Reino Unido e Austrália), alianças voltadas para conter a influência chinesa.
        </p>
        <p>
          Na fronteira entre Índia e China, disputas territoriais no Himalaia (especialmente em Ladakh)
          resultaram em choques em 2020. A rivalidade entre Índia e Paquistão — ambos com armas nucleares —
          permanece latente na questão da Caxemira, uma das disputas territoriais mais antigas do mundo.
        </p>
      </section>

      {/* ── Seção 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">África em conflito</span>
        <h2>5. Conflitos na África: Sahel e além</h2>
        <p>
          A África subsaariana concentra muitos dos conflitos mais violentos do mundo contemporâneo. No Sahel
          (faixa semiárida ao sul do Saara), países como Mali, Burkina Faso, Níger e Chade enfrentam a
          expansão de grupos jihadistas ligados à Al-Qaeda e ao ISIS, além de conflitos étnicos entre povos
          agricultores e pastores, agravados pelas mudanças climáticas que pressionam os recursos hídricos e
          de pastagem.
        </p>
        <p>
          A região viveu uma onda de golpes militares entre 2020 e 2023, com militares assumindo o poder em
          Mali, Burkina Faso, Níger e Gabão — frequentemente com discurso antifrancês e aproximação com a
          Rússia (via grupo Wagner). Essa reconfiguração geopolítica representa um desafio à influência
          tradicional da França na África Ocidental.
        </p>
        <p>
          No Leste Africano, o conflito na Etiópia (região de Tigré, 2020-2022) resultou em centenas de
          milhares de mortos e uma das piores crises humanitárias do continente. A República Democrática do
          Congo permanece palco de disputas por minerais estratégicos (coltã, cobalto), com dezenas de grupos
          armados ativos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Conflitos contemporâneos: causas e impactos</caption>
            <thead>
              <tr>
                <th>Conflito</th>
                <th>Região</th>
                <th>Causas principais</th>
                <th>Impacto humanitário</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Guerra na Ucrânia</td>
                <td>Europa Oriental</td>
                <td>Expansão da OTAN; identidade nacional; recursos energéticos</td>
                <td>Milhões de refugiados; crise alimentar global</td>
              </tr>
              <tr>
                <td>Gaza (Israel-Hamas)</td>
                <td>Oriente Médio</td>
                <td>Questão palestina; disputa territorial e religiosa</td>
                <td>Crise humanitária; destruição de infraestrutura</td>
              </tr>
              <tr>
                <td>Guerra no Iêmen</td>
                <td>Península Arábica</td>
                <td>Rivalidade Arábia Saudita-Irã; colapso estatal</td>
                <td>Maior crise humanitária do mundo (2018-2022)</td>
              </tr>
              <tr>
                <td>Conflito no Sahel</td>
                <td>África Ocidental</td>
                <td>Jihadismo; pobreza; mudanças climáticas; crise de governança</td>
                <td>Golpes militares; deslocamento em massa</td>
              </tr>
              <tr>
                <td>Mar do Sul da China</td>
                <td>Sudeste Asiático</td>
                <td>Disputa territorial; hegemonia regional; recursos marinhos</td>
                <td>Tensão militar; risco de escalada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SVG Figure 2 ── */}
      <figure className="lesson-figure">
        <svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg">
          <rect width="600" height="260" fill="#f8fafc" rx="12" />
          <text x="300" y="28" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1e293b">
            Causas dos Conflitos Contemporâneos
          </text>

          {/* Centro */}
          <circle cx="300" cy="140" r="45" fill="#1e293b" />
          <text x="300" y="135" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">CONFLITOS</text>
          <text x="300" y="151" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">GLOBAIS</text>

          {/* Recursos */}
          <circle cx="130" cy="90" r="38" fill="#3b82f6" opacity="0.85" />
          <text x="130" y="85" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">RECURSOS</text>
          <text x="130" y="100" textAnchor="middle" fontSize="10" fill="white">Petróleo, água,</text>
          <text x="130" y="113" textAnchor="middle" fontSize="10" fill="white">minerais</text>
          <line x1="168" y1="108" x2="258" y2="130" stroke="#3b82f6" strokeWidth="2" />

          {/* Território */}
          <circle cx="470" cy="90" r="38" fill="#ef4444" opacity="0.85" />
          <text x="470" y="85" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">TERRITÓRIO</text>
          <text x="470" y="100" textAnchor="middle" fontSize="10" fill="white">Fronteiras;</text>
          <text x="470" y="113" textAnchor="middle" fontSize="10" fill="white">soberania</text>
          <line x1="432" y1="108" x2="342" y2="130" stroke="#ef4444" strokeWidth="2" />

          {/* Identidade */}
          <circle cx="130" cy="200" r="38" fill="#10b981" opacity="0.85" />
          <text x="130" y="195" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">IDENTIDADE</text>
          <text x="130" y="210" textAnchor="middle" fontSize="10" fill="white">Etnia, religião,</text>
          <text x="130" y="223" textAnchor="middle" fontSize="10" fill="white">nação</text>
          <line x1="168" y1="186" x2="258" y2="155" stroke="#10b981" strokeWidth="2" />

          {/* Poder */}
          <circle cx="470" cy="200" r="38" fill="#f59e0b" opacity="0.85" />
          <text x="470" y="195" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">PODER</text>
          <text x="470" y="210" textAnchor="middle" fontSize="10" fill="white">Hegemonia;</text>
          <text x="470" y="223" textAnchor="middle" fontSize="10" fill="white">alianças</text>
          <line x1="432" y1="186" x2="342" y2="155" stroke="#f59e0b" strokeWidth="2" />
        </svg>
        <figcaption>Principais causas estruturais dos conflitos geopolíticos contemporâneos</figcaption>
      </figure>

      {/* ── Seção 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Terror e violência</span>
        <h2>6. Terrorismo internacional</h2>
        <p>
          O terrorismo tornou-se uma das principais ameaças à segurança global após os atentados de 11 de
          setembro de 2001 nos EUA, que mataram cerca de 3.000 pessoas e desencadearam a "Guerra ao Terror"
          americana. As invasões do Afeganistão (2001) e do Iraque (2003) pelos EUA e aliados redefiniram
          o Oriente Médio, com consequências que incluíram o surgimento do Estado Islâmico (ISIS/Daesh) em
          2013-2014.
        </p>
        <p>
          O ISIS chegou a controlar territórios equivalentes ao tamanho da Itália na Síria e no Iraque em
          2014-2015, proclamando um "califado" e atraindo combatentes de dezenas de países. A coalizão
          liderada pelos EUA e forças locais (especialmente curdas) derrotaram militarmente o califado em
          2019, mas o grupo permanece ativo em células dispersas pela África, Ásia e Oriente Médio.
        </p>
        <p>
          A Al-Qaeda, responsável pelos atentados de 11 de setembro, permanece ativa especialmente no Sahel
          africano e na Ásia Central. Grupos como o Boko Haram (Nigéria), Al-Shabaab (Somália) e grupos
          afiliados ao ISIS na África mantêm conflitos de alta intensidade em suas regiões.
        </p>
      </section>

      {/* ── Seção 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Novos conflitos</span>
        <h2>7. Guerra híbrida e ciberguerra</h2>
        <p>
          O século XXI trouxe novas formas de conflito que transcendem a guerra convencional. A guerra híbrida
          combina operações militares convencionais com desinformação, guerra cibernética, sabotagem econômica,
          apoio a grupos irregulares e pressão política. A Rússia é frequentemente citada como pioneira nessa
          abordagem, usando-a na Ucrânia desde 2014 e em diversas campanhas de interferência eleitoral no
          Ocidente.
        </p>
        <p>
          A ciberguerra representa uma nova fronteira de conflito: ataques a infraestruturas críticas (redes
          elétricas, sistemas financeiros, hospitais), espionagem digital e sabotagem industrial (como o vírus
          Stuxnet, usado pelos EUA e Israel contra centrífugas nucleares iranianas). Estados, grupos
          criminosos e atores não-estatais competem nesse espaço com regras ainda pouco definidas pelo
          direito internacional.
        </p>
      </section>

      {/* ── Seção 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Crises humanitárias</span>
        <h2>8. Refugiados e crises humanitárias</h2>
        <p>
          Os conflitos contemporâneos geraram a maior crise de refugiados desde a Segunda Guerra Mundial.
          Segundo o ACNUR (Alto Comissariado das Nações Unidas para Refugiados), o número de pessoas
          deslocadas à força ultrapassou 100 milhões em 2022, incluindo refugiados, solicitantes de asilo
          e deslocados internos.
        </p>
        <p>
          As principais origens são Síria, Afeganistão, Venezuela, Myanmar, Ucrânia (após 2022), Sudão do
          Sul e República Democrática do Congo. Os refugiados sirios (cerca de 6 milhões) fugiram
          principalmente para Turquia, Líbano e Jordânia, além de países europeus — gerando a chamada
          "crise dos refugiados" na Europa em 2015-2016, que alimentou movimentos de extrema-direita e
          tensionou a coesão da União Europeia.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Maiores crises de refugiados no mundo contemporâneo</caption>
            <thead>
              <tr>
                <th>País de origem</th>
                <th>Principal causa</th>
                <th>Destinos principais</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Síria</td>
                <td>Guerra civil (desde 2011)</td>
                <td>Turquia, Líbano, Jordânia, Europa</td>
              </tr>
              <tr>
                <td>Afeganistão</td>
                <td>Taliban, instabilidade crônica</td>
                <td>Paquistão, Irã, Europa</td>
              </tr>
              <tr>
                <td>Venezuela</td>
                <td>Crise econômica e política</td>
                <td>Colômbia, Peru, Brasil, Chile</td>
              </tr>
              <tr>
                <td>Ucrânia</td>
                <td>Invasão russa (2022)</td>
                <td>Polônia, Alemanha, outros países europeus</td>
              </tr>
              <tr>
                <td>Sudão do Sul</td>
                <td>Guerra civil étnica</td>
                <td>Uganda, Etiópia, Quênia</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Seção 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">América Latina</span>
        <h2>9. Conflitos e instabilidade na América Latina</h2>
        <p>
          A América Latina não vive guerras interestatais desde o século XIX, mas enfrenta formas severas de
          violência: narcotráfico, crime organizado, guerrilhas e instabilidade política. O México é o
          exemplo mais dramático: com mais de 30.000 homicídios por ano, os cartéis de drogas — como o
          Cartel de Sinaloa e o Jalisco Nueva Generación — controlam territórios e ameaçam a soberania
          estatal em diversas regiões.
        </p>
        <p>
          A Venezuela vive uma das maiores crises políticas e econômicas do continente. Sob Nicolás Maduro,
          o país sofreu colapso econômico, êxodo de mais de 7 milhões de pessoas (a maior crise migratória
          da história da América Latina), ruptura democrática e confronto com países vizinhos e com os EUA.
          O Haiti enfrenta colapso estatal total, com gangues controlando a capital Porto Príncipe e impedindo
          o funcionamento do governo.
        </p>
        <p>
          A Colômbia, após o acordo de paz de 2016 com as FARC, enfrenta a reativação de dissidentes,
          a expansão do ELN (Exército de Libertação Nacional) e o avanço do narcotráfico. A questão da
          droga conecta os conflitos da América Latina ao consumo nos EUA e Europa, tornando-a uma questão
          geopolítica global.
        </p>
      </section>

      {/* ── Seção 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Perspectiva ENEM</span>
        <h2>10. Geopolítica no ENEM</h2>
        <p>
          O ENEM frequentemente aborda a geopolítica contemporânea por meio de textos jornalísticos, mapas,
          charges e documentos históricos. As principais abordagens incluem: a análise crítica dos conflitos
          e seus impactos humanitários; a relação entre recursos naturais e conflitos; o papel das
          organizações internacionais na resolução de conflitos; e a conexão entre a geopolítica e questões
          sociais como migração, racismo e pobreza.
        </p>
        <p>
          É importante evitar interpretações maniqueístas (um lado totalmente certo, outro totalmente errado)
          e buscar compreender as múltiplas causas e consequências dos conflitos. A perspectiva dos direitos
          humanos e do direito internacional humanitário é frequentemente mobilizada nas questões do ENEM.
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
              Após o fim da Guerra Fria em 1991, o mundo passou por transformações profundas na ordem
              geopolítica. Qual conceito melhor descreve a configuração de poder no sistema internacional
              após a dissolução da URSS e ao longo dos anos 1990?
            </p>
          }
          options={[
            { letter: "a", text: "Bipolaridade, pois os EUA e a China assumiram os papéis antes ocupados pelos EUA e URSS." },
            { letter: "b", text: "Multipolaridade, com vários centros de poder equilibrados desde 1991." },
            { letter: "c", text: "Unipolaridade, com a hegemonia dos EUA como única superpotência global.", correct: true },
            { letter: "d", text: "Anarquia global, sem qualquer centro de poder dominante." },
            { letter: "e", text: "Bipolaridade renovada, com a OTAN e o BRICS disputando a hegemonia mundial." },
          ]}
          resolution={
            <p>
              Com a dissolução da URSS em 1991, os EUA emergiram como a única superpotência global — militar,
              econômica e culturalmente. Esse período (décadas de 1990 e início dos anos 2000) é caracterizado
              pela unipolaridade americana. Apenas nos anos 2000-2010 é que a China começa a desafiar essa
              hegemonia, e o conceito de multipolaridade ganha força. A China como potência competidora dos
              EUA é fenômeno mais recente, não imediato ao fim da Guerra Fria.
            </p>
          }
        />

        <Exercise
          level="Básico"
          title="Exercício 2"
          statement={
            <p>
              A "Primavera Árabe" foi um conjunto de movimentos populares que, entre 2010 e 2012, sacudiu
              o mundo árabe. Qual foi o principal desdobramento da Primavera Árabe na Síria?
            </p>
          }
          options={[
            { letter: "a", text: "Transição pacífica para a democracia, com eleições livres em 2012." },
            { letter: "b", text: "Queda do regime de Assad e instalação de um governo democrático apoiado pela ONU." },
            { letter: "c", text: "Eclosão de uma guerra civil devastadora, com envolvimento de múltiplas potências externas e surgimento do Estado Islâmico.", correct: true },
            { letter: "d", text: "Criação de um estado binacional reunindo sírios e turcos sob mediação da União Europeia." },
            { letter: "e", text: "Invasão americana similar ao Iraque, com objetivo de depor Assad e instalar a democracia." },
          ]}
          resolution={
            <p>
              Na Síria, as manifestações da Primavera Árabe contra o regime de Bashar al-Assad transformaram-se
              em uma guerra civil brutal. O conflito atraiu múltiplos atores externos: Rússia e Irã apoiaram
              Assad; EUA, Turquia e países do Golfo apoiaram diferentes facções rebeldes. O vácuo de poder
              permitiu o surgimento do Estado Islâmico (ISIS), que chegou a controlar vastos territórios.
              O resultado foi um desastre humanitário com mais de 500 mil mortos e milhões de refugiados.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 3"
          statement={
            <p>
              (ENEM adaptado) A guerra na Ucrânia, iniciada em fevereiro de 2022 com a invasão russa em
              larga escala, teve impactos que transcenderam o campo militar. Identifique a alternativa que
              melhor descreve um dos principais impactos econômicos globais desse conflito.
            </p>
          }
          options={[
            { letter: "a", text: "Colapso do comércio entre China e EUA, devido às sanções impostas à Rússia." },
            { letter: "b", text: "Crise energética e alimentar global, dada a importância de Rússia e Ucrânia como exportadores de energia e grãos.", correct: true },
            { letter: "c", text: "Fortalecimento do rublo russo, que se tornou a moeda de reserva da Europa Oriental." },
            { letter: "d", text: "Dissolução da OTAN, incapaz de responder militarmente à agressão russa." },
            { letter: "e", text: "Integração da Ucrânia imediata à União Europeia como resposta à invasão russa." },
          ]}
          resolution={
            <p>
              Rússia e Ucrânia são grandes exportadores mundiais de trigo, milho, girassol e fertilizantes.
              A Rússia também é fornecedora crucial de gás natural e petróleo para a Europa. Com a guerra e
              as sanções ao Kremlin, houve disparada nos preços de alimentos e energia globalmente — gerando
              inflação em países importadores, especialmente nos mais pobres. A OTAN se fortaleceu (com a
              adesão de Finlândia e Suécia), não se dissolveu. A Ucrânia recebeu status de candidata à UE,
              não adesão imediata.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="Exercício 4"
          statement={
            <p>
              O terrorismo internacional passou por transformações significativas ao longo do século XXI.
              Sobre o Estado Islâmico (ISIS/Daesh), é correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "Foi criado pelos EUA como instrumento para desestabilizar a Síria durante a guerra civil." },
            { letter: "b", text: "Surgiu no contexto da instabilidade gerada pelas guerras no Iraque e na Síria, chegando a proclamar um califado e controlar extensos territórios.", correct: true },
            { letter: "c", text: "Possui vínculos diretos com o governo iraniano, que financia suas operações no Oriente Médio." },
            { letter: "d", text: "Foi completamente eliminado em 2019 e não representa mais qualquer ameaça à segurança global." },
            { letter: "e", text: "Limitou suas ações ao território iraquiano, sem expansão para outros países." },
          ]}
          resolution={
            <p>
              O ISIS surgiu do caos gerado pela invasão americana ao Iraque (2003) e pela guerra civil na
              Síria (2011). Em 2013-2014, declarou um califado e chegou a controlar territórios do tamanho
              da Itália, com capital em Raqqa (Síria). Em 2019, a coalizão liderada pelos EUA e as Forças
              Democráticas Sírias (curdas) derrotaram o califado territorial, mas o grupo permanece ativo
              em células dispersas pela África (Sahel, Moçambique) e Ásia. O Irã é adversário do ISIS —
              ambos se combatem.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="Exercício 5"
          statement={
            <p>
              A crise dos refugiados provocada pelos conflitos contemporâneos levanta questões sobre direito
              internacional, soberania e responsabilidade humanitária. Analise a situação dos refugiados
              venezuelanos na América do Sul e selecione a alternativa que melhor interpreta esse fenômeno
              sob a perspectiva geopolítica.
            </p>
          }
          options={[
            { letter: "a", text: "A crise venezuelana é exclusivamente econômica e não tem relação com questões políticas ou geopolíticas mais amplas." },
            { letter: "b", text: "O êxodo venezuelano reflete as consequências de uma crise político-econômica interna que se tornou um problema geopolítico regional, testando a capacidade de acolhimento de países vizinhos e gerando tensões diplomáticas.", correct: true },
            { letter: "c", text: "Os refugiados venezuelanos são principalmente recebidos por países europeus, que possuem acordos bilaterais com a Venezuela para esse fim." },
            { letter: "d", text: "A crise venezuelana é resultado direto de sanções impostas pelo Mercosul, que bloqueou o acesso do país ao comércio regional." },
            { letter: "e", text: "O fluxo migratório venezuelano é irrelevante para a geopolítica sul-americana, afetando apenas o mercado de trabalho local dos países receptores." },
          ]}
          resolution={
            <p>
              O êxodo venezuelano — com mais de 7 milhões de pessoas tendo deixado o país até 2023 — é a
              maior crise migratória da história da América Latina. Suas causas combinam colapso econômico
              (hiperinflação, desabastecimento), autoritarismo político e ruptura institucional. O impacto
              é regional: Colômbia, Peru, Brasil, Chile e Ecuador receberam a maioria dos migrantes, gerando
              pressões sobre serviços públicos, xenofobia e tensões diplomáticas. A geopolítica está presente
              na divisão entre países que reconhecem o regime Maduro e os que apoiam a oposição, refletindo
              as disputas ideológicas no continente.
            </p>
          }
        />
      </section>
    </article>
  );
}
