"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap44Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 44</span>
          <h1>Segunda Guerra Mundial e Guerra Fria</h1>
          <p>
            A Segunda Guerra Mundial (1939–1945) foi o conflito mais destrutivo
            da história humana: mais de 70 milhões de mortos, cidades reduzidas
            a escombros, o Holocausto e as bombas atômicas sobre Hiroshima e
            Nagasaki. Do cenário de destruição nasceu uma nova ordem bipolar —
            a Guerra Fria (1947–1991) — na qual EUA e URSS disputaram a
            hegemonia global sem confronto militar direto, mas por meio de
            guerras por procuração, corrida armamentista e disputa ideológica.
            Compreender esses dois fenômenos é essencial para entender o mundo
            contemporâneo e os temas cobrados pelo ENEM.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Causas da guerra</span>
        <h2>1. As Causas da Segunda Guerra Mundial</h2>
        <p>
          A Segunda Guerra não foi um evento súbito: foi o resultado da
          acumulação de tensões ao longo dos anos 1930. As causas principais
          são: (1) a ascensão do nazismo na Alemanha e seu programa de expansão
          territorial baseado na teoria do <em>Lebensraum</em>; (2) o
          expansionismo do Japão Imperial na Ásia (invasão da Manchúria em 1931,
          da China em 1937); (3) o expansionismo fascista na Europa (invasão da
          Etiópia por Mussolini, apoio ao franquismo na Guerra Civil Espanhola);
          (4) a política de <strong>appeasement</strong> (apaziguamento) das
          potências democráticas ocidentais — especialmente Reino Unido e França
          — que acreditavam poder satisfazer Hitler com concessões para evitar
          uma nova guerra. O ponto alto do appeasement foi o{" "}
          <strong>Acordo de Munique</strong> (setembro de 1938), em que Chamberlain
          e Daladier entregaram a região dos Sudetos (parte da Tchecoslováquia)
          a Hitler em troca de uma promessa de paz. Hitler não honrou o acordo.
        </p>
        <p>
          Em 23 de agosto de 1939, o Pacto Molotov-Ribbentrop chocou o mundo:
          nazi-Alemanha e União Soviética assinaram um tratado de não-agressão
          com cláusula secreta dividindo a Europa Oriental entre si. Com o flanco
          leste assegurado, Hitler invadiu a Polônia em 1° de setembro de 1939.
          Dois dias depois, Reino Unido e França declararam guerra à Alemanha —
          a Segunda Guerra havia começado.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Cronologia da Segunda Guerra Mundial: fases principais</caption>
            <thead>
              <tr>
                <th>Período</th>
                <th>Evento</th>
                <th>Impacto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Set. 1939</td>
                <td>Invasão da Polônia (Blitzkrieg)</td>
                <td>Início oficial da guerra; Polônia partilhada</td>
              </tr>
              <tr>
                <td>Jun. 1940</td>
                <td>Queda da França</td>
                <td>França ocupada; governo Vichy colaboracionista</td>
              </tr>
              <tr>
                <td>Jul.–Out. 1940</td>
                <td>Batalha da Grã-Bretanha</td>
                <td>RAF resistiu à Luftwaffe; Hitler recuou a invasão</td>
              </tr>
              <tr>
                <td>Jun. 1941</td>
                <td>Operação Barbarossa</td>
                <td>Invasão da URSS; maior operação militar da história</td>
              </tr>
              <tr>
                <td>Dez. 1941</td>
                <td>Pearl Harbor</td>
                <td>EUA entram na guerra; Japão avança no Pacífico</td>
              </tr>
              <tr>
                <td>1942–1943</td>
                <td>Batalha de Stalingrado</td>
                <td>Virada decisiva: derrota alemã no front leste</td>
              </tr>
              <tr>
                <td>Jun. 1944</td>
                <td>Dia D — Normandia</td>
                <td>Abertura da segunda frente; libertação da França</td>
              </tr>
              <tr>
                <td>Ago. 1945</td>
                <td>Hiroshima e Nagasaki</td>
                <td>Bombas atômicas; capitulação do Japão (2/9/1945)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Teatro europeu</span>
        <h2>2. A Guerra na Europa: Blitzkrieg, Barbarossa e o Dia D</h2>
        <p>
          A estratégia alemã da <strong>Blitzkrieg</strong> ("guerra-relâmpago")
          combinava tanques, aviação de bombardeio e infantaria motorizada em
          ataques rápidos e coordenados que desorganizavam as defesas inimigas
          antes que pudessem se reorganizar. Em seis semanas (maio-junho de 1940),
          a Alemanha derrotou França, Países Baixos e Bélgica — potências que
          juntas deveriam ter resistido facilmente. A <strong>Batalha de Dunquerque</strong>
          (maio-junho 1940) permitiu a evacuação milagrosa de 338.000 soldados
          aliados pelo Canal da Mancha, preservando o núcleo do Exército
          Britânico.
        </p>
        <p>
          Em 22 de junho de 1941, Hitler lançou a <strong>Operação Barbarossa</strong>:
          a maior operação militar da história, com 3 milhões de soldados alemães
          e 3.000 tanques avançando em três frentes simultâneas. Inicialmente os
          avanços foram estonteantes, mas a resistência soviética — apoiada pelo
          inverno rigoroso, pelo <em>raskputitsa</em> (lama do degelo) e pela
          política de "terra arrasada" — esgotou a Wehrmacht. A{" "}
          <strong>Batalha de Stalingrado</strong> (agosto 1942 – fevereiro 1943)
          foi o ponto de virada: o general Zhukov encerrou 300.000 soldados
          alemães em uma bolsa e forçou a rendição do Marechal Paulus — a maior
          derrota alemã da guerra.
        </p>
        <p>
          O <strong>Dia D</strong> (6 de junho de 1944) foi a maior operação
          anfíbia da história: 156.000 soldados aliados desembarcaram nas praias
          da Normandia sob fogo intenso. A libertação da França abriu a segunda
          frente que Hitler tanto temia. Em maio de 1945, com o Exército
          Vermelho em Berlim, Hitler se suicidou no bunker da Chancelaria e a
          Alemanha capitulou incondicionalmente.
        </p>
      </section>

      {/* ── SEÇÃO 3 — SVG Mapa Europa ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>3. A Europa em 1942: Auge do Eixo</h2>
        <p>
          Em 1942, a Alemanha nazista e seus aliados controlavam a maior parte
          da Europa continental. O diagrama abaixo ilustra as principais alianças
          e frentes de guerra no ponto de máxima expansão do Eixo.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 800 400" width="100%" aria-label="Mapa esquemático da Europa na 2ª Guerra em 1942">
            {/* Fundo */}
            <rect x="0" y="0" width="800" height="400" fill="#e0f2fe" rx="8" />

            {/* Legenda */}
            <rect x="600" y="20" width="180" height="160" rx="6" fill="white" stroke="#94a3b8" />
            <text x="690" y="40" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e293b">Legenda</text>
            <rect x="615" y="52" width="18" height="12" fill="#ef4444" />
            <text x="640" y="63" fontSize="11" fill="#1e293b">Eixo e ocupados</text>
            <rect x="615" y="72" width="18" height="12" fill="#3b82f6" />
            <text x="640" y="83" fontSize="11" fill="#1e293b">Aliados</text>
            <rect x="615" y="92" width="18" height="12" fill="#22c55e" />
            <text x="640" y="103" fontSize="11" fill="#1e293b">URSS (aliada 1941)</text>
            <rect x="615" y="112" width="18" height="12" fill="#a3a3a3" />
            <text x="640" y="123" fontSize="11" fill="#1e293b">Neutros</text>
            <rect x="615" y="132" width="18" height="12" fill="#f59e0b" />
            <text x="640" y="143" fontSize="11" fill="#1e293b">África do Norte</text>
            <line x1="615" y1="158" x2="775" y2="158" stroke="#dc2626" strokeWidth="2" strokeDasharray="6,3" />
            <text x="640" y="170" fontSize="11" fill="#1e293b">Frente Oriental</text>

            {/* Europa simplificada */}
            {/* Alemanha e territórios ocupados */}
            <polygon points="310,80 380,60 450,90 470,150 430,200 380,220 320,200 280,160 290,110" fill="#ef4444" opacity="0.8" />
            <text x="375" y="145" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Alemanha + Ocupados</text>

            {/* Itália */}
            <polygon points="350,220 380,215 390,260 370,300 345,290 340,260" fill="#ef4444" opacity="0.7" />
            <text x="365" y="258" textAnchor="middle" fontSize="10" fill="white">Itália</text>

            {/* França de Vichy */}
            <polygon points="270,180 310,170 320,200 300,240 250,250 230,220 240,185" fill="#f97316" opacity="0.7" />
            <text x="275" y="218" textAnchor="middle" fontSize="10" fill="white">França Vichy</text>

            {/* Reino Unido */}
            <polygon points="160,80 200,70 210,120 190,150 160,140 145,110" fill="#3b82f6" opacity="0.8" />
            <text x="178" y="112" textAnchor="middle" fontSize="10" fill="white">Reino Unido</text>

            {/* URSS */}
            <polygon points="470,60 580,40 590,180 560,220 500,230 460,200 450,140 470,90" fill="#22c55e" opacity="0.7" />
            <text x="530" y="140" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#14532d">URSS</text>

            {/* Frente Oriental (linha tracejada) */}
            <line x1="470" y1="90" x2="500" y2="230" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="8,4" />
            <text x="495" y="160" fontSize="9" fill="#dc2626" transform="rotate(-80,495,160)">Frente Leste</text>

            {/* Países Escandinavos */}
            <polygon points="310,20 370,10 380,60 310,80 290,50" fill="#ef4444" opacity="0.6" />
            <text x="335" y="45" textAnchor="middle" fontSize="9" fill="white">Escand.</text>

            {/* Espanha (neutra) */}
            <polygon points="190,220 250,215 250,250 210,270 175,250 170,225" fill="#a3a3a3" opacity="0.7" />
            <text x="212" y="248" textAnchor="middle" fontSize="10" fill="#374151">Espanha</text>

            {/* Norte da África */}
            <rect x="180" y="330" width="300" height="50" rx="6" fill="#f59e0b" opacity="0.7" />
            <text x="330" y="362" textAnchor="middle" fontSize="11" fill="#78350f">Norte da África (teatro de guerra 1942–43)</text>

            {/* Pacífico - canto */}
            <rect x="620" y="250" width="140" height="80" rx="6" fill="#e0e7ff" stroke="#6366f1" />
            <text x="690" y="272" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#4338ca">Teatro do</text>
            <text x="690" y="288" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#4338ca">Pacífico</text>
            <text x="690" y="306" textAnchor="middle" fontSize="10" fill="#4338ca">Japão vs. EUA</text>
            <text x="690" y="321" textAnchor="middle" fontSize="10" fill="#4338ca">Pearl Harbor 1941</text>

            {/* Título */}
            <text x="400" y="390" textAnchor="middle" fontSize="11" fill="#475569">Esquema simplificado — Europa em 1942 (auge do controle do Eixo)</text>
          </svg>
          <figcaption>Diagrama esquemático das alianças e frentes de guerra na Europa em 1942</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Direitos humanos</span>
        <h2>4. O Holocausto: A "Solução Final" e seus Números</h2>
        <p>
          O Holocausto (<em>Shoah</em> em hebraico) foi o genocídio de seis
          milhões de judeus europeus perpetrado sistematicamente pelo regime
          nazista entre 1941 e 1945. Mas o terror nazista foi mais amplo: cerca
          de 5 milhões de outras vítimas foram assassinadas — ciganos, pessoas
          com deficiência, homossexuais, prisioneiros políticos, Testemunhas de
          Jeová, eslavos. O total de vítimas deliberadamente assassinadas pelo
          nazismo ultrapassa 11 milhões de pessoas.
        </p>
        <p>
          A <strong>"Solução Final da Questão Judaica"</strong> foi decidida na
          Conferência de Wannsee (20 de janeiro de 1942), reunião burocrática de
          15 altos funcionários nazistas que sistematizaram o extermínio em
          escala industrial. Os campos de extermínio — distintos dos campos de
          concentração — foram construídos especificamente para matar: Auschwitz-
          Birkenau (1,1 milhão de mortos), Treblinka (700–900 mil), Sobibor
          (170–250 mil), Belzec (430–500 mil), Chelmno (150–340 mil) e Majdanek.
          As vítimas chegavam de trem, eram selecionadas na plataforma e a maioria
          era imediatamente enviada às câmaras de gás.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Vítimas do Holocausto e do terror nazista</caption>
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Estimativa de mortes</th>
                <th>Porcentagem do grupo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Judeus europeus</td>
                <td>~6.000.000</td>
                <td>~67% dos judeus europeus</td>
              </tr>
              <tr>
                <td>Ciganos (Roma e Sinti)</td>
                <td>~220.000–500.000</td>
                <td>25–50% da população</td>
              </tr>
              <tr>
                <td>Pessoas com deficiência (T4)</td>
                <td>~200.000–270.000</td>
                <td>Programa de "eutanásia"</td>
              </tr>
              <tr>
                <td>Poloneses não-judeus</td>
                <td>~1.800.000–2.700.000</td>
                <td>Ocupação brutal</td>
              </tr>
              <tr>
                <td>Prisioneiros soviéticos</td>
                <td>~2.000.000–3.300.000</td>
                <td>Fome e execuções</td>
              </tr>
              <tr>
                <td>Homossexuais</td>
                <td>~5.000–15.000</td>
                <td>Triângulo rosa</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Para o ENEM:</strong> O Holocausto é frequentemente abordado
          em conexão com os direitos humanos e a Declaração Universal de 1948.
          O julgamento dos criminosos nazistas em Nuremberg (1945–1946) criou
          o conceito de "crimes contra a humanidade" — responsabilidade
          individual perante o direito internacional — base do direito
          internacional penal contemporâneo.
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fim da guerra</span>
        <h2>5. A Bomba Atômica e o Fim da Guerra</h2>
        <p>
          O Projeto Manhattan, iniciado em 1942 sob a direção do físico J. Robert
          Oppenheimer, reuniu os maiores cientistas do mundo — muitos deles
          refugiados do nazismo — para desenvolver a primeira arma nuclear. Em
          6 de agosto de 1945, o bombardeiro <em>Enola Gay</em> lançou "Little Boy"
          sobre Hiroshima: entre 70.000 e 80.000 pessoas morreram imediatamente,
          e dezenas de milhares sucumbiriam nos meses seguintes por queimaduras e
          radiação. Em 9 de agosto, "Fat Man" explodiu sobre Nagasaki, matando
          outras 40.000 pessoas de imediato.
        </p>
        <p>
          O debate histórico sobre as bombas persiste: o governo Truman as
          justificou como necessárias para evitar a invasão do Japão — que
          custaria, segundo estimativas militares, entre 250.000 e 1 milhão de
          vidas aliadas. Críticos argumentam que o Japão já estava à beira da
          derrota, que as bombas foram usadas para intimidar a URSS na iminente
          Guerra Fria e que o bombardeio deliberado de civis constituía crime de
          guerra. O Japão capitulou em 15 de agosto de 1945; a cerimônia formal
          ocorreu em 2 de setembro a bordo do USS Missouri — encerrando a mais
          letal guerra da história.
        </p>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Nova ordem</span>
        <h2>6. A ONU e a Nova Ordem do Pós-Guerra</h2>
        <p>
          Da destruição da guerra nasceram novas instituições internacionais.
          A <strong>ONU</strong> (Organização das Nações Unidas) foi fundada em
          26 de junho de 1945, com 51 países signatários, substituindo a falida
          Liga das Nações. Seu objetivo central era manter a paz e a segurança
          internacionais. A estrutura da ONU refletia a nova correlação de forças:
          o <strong>Conselho de Segurança</strong> tem cinco membros permanentes
          com poder de veto — EUA, URSS (hoje Rússia), Reino Unido, França e
          China — que são exatamente as cinco potências vencedoras da guerra.
        </p>
        <p>
          Em 1948, a ONU aprovou a <strong>Declaração Universal dos Direitos
          Humanos</strong>, redigida sob a presidência de Eleanor Roosevelt —
          resposta direta aos horrores do nazismo. O julgamento de Nuremberg
          (1945–1946) criou precedentes cruciais: líderes nazistas foram
          condenados por crimes de guerra e crimes contra a humanidade, afirmando
          que indivíduos — e não apenas Estados — podem ser responsabilizados pelo
          direito internacional.
        </p>
      </section>

      {/* ── SEÇÃO 7 — SVG Bipolaridade ── */}
      <section className="lesson-section">
        <span className="section-kicker">Guerra Fria</span>
        <h2>7. A Guerra Fria: Bipolaridade e Tensão Global</h2>
        <p>
          Com o fim da Segunda Guerra, EUA e URSS — aliados contra o nazismo —
          tornaram-se rivais. A <strong>Guerra Fria</strong> (1947–1991) foi a
          disputa pelo controle do mundo entre dois sistemas incompatíveis:
          o capitalismo liberal liderado pelos EUA e o socialismo soviético.
          "Fria" porque as duas superpotências nunca se enfrentaram diretamente
          — ambas possuíam arsenais nucleares capazes de destruir o planeta.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 800 300" width="100%" aria-label="Diagrama da bipolaridade da Guerra Fria">
            {/* EUA */}
            <rect x="20" y="40" width="340" height="220" rx="10" fill="#dbeafe" stroke="#1d4ed8" strokeWidth="2" />
            <rect x="20" y="40" width="340" height="40" rx="10" fill="#1d4ed8" />
            <text x="190" y="67" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">BLOCO CAPITALISTA (EUA)</text>
            <text x="50" y="105" fontSize="11" fill="#1e3a8a">• Doutrina Truman (1947)</text>
            <text x="50" y="122" fontSize="11" fill="#1e3a8a">• Plano Marshall (reconstrução Europa)</text>
            <text x="50" y="139" fontSize="11" fill="#1e3a8a">• OTAN (1949)</text>
            <text x="50" y="156" fontSize="11" fill="#1e3a8a">• Capitalismo liberal e democracia</text>
            <text x="50" y="173" fontSize="11" fill="#1e3a8a">• Guerra da Coreia (1950–53)</text>
            <text x="50" y="190" fontSize="11" fill="#1e3a8a">• Guerra do Vietnã (1964–75)</text>
            <text x="50" y="207" fontSize="11" fill="#1e3a8a">• CIA: interferência em govs. amigos</text>
            <text x="50" y="224" fontSize="11" fill="#1e3a8a">• Corrida espacial: NASA / Apolo 11</text>
            <text x="50" y="241" fontSize="11" fill="#1e3a8a">• Deterrência nuclear: bomba H</text>

            {/* vs */}
            <text x="400" y="165" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#dc2626">VS</text>

            {/* URSS */}
            <rect x="440" y="40" width="340" height="220" rx="10" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
            <rect x="440" y="40" width="340" height="40" rx="10" fill="#dc2626" />
            <text x="610" y="67" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">BLOCO SOCIALISTA (URSS)</text>
            <text x="460" y="105" fontSize="11" fill="#7f1d1d">• Zdanovismo (resp. à Doutrina Truman)</text>
            <text x="460" y="122" fontSize="11" fill="#7f1d1d">• COMECON (cooperação econômica)</text>
            <text x="460" y="139" fontSize="11" fill="#7f1d1d">• Pacto de Varsóvia (1955)</text>
            <text x="460" y="156" fontSize="11" fill="#7f1d1d">• Socialismo e partido único</text>
            <text x="460" y="173" fontSize="11" fill="#7f1d1d">• Apoio à China, Coreia, Cuba</text>
            <text x="460" y="190" fontSize="11" fill="#7f1d1d">• Intervenção na Hungria e Tchec.</text>
            <text x="460" y="207" fontSize="11" fill="#7f1d1d">• KGB: espionagem e contraintelig.</text>
            <text x="460" y="224" fontSize="11" fill="#7f1d1d">• Sputnik (1957); Gagárin (1961)</text>
            <text x="460" y="241" fontSize="11" fill="#7f1d1d">• Deterrência nuclear: bomba H</text>

            {/* Linha divisória central */}
            <line x1="390" y1="40" x2="410" y2="260" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,3" />

            {/* Título */}
            <text x="400" y="290" textAnchor="middle" fontSize="11" fill="#475569">A bipolaridade da Guerra Fria (1947–1991): dois blocos, duas ideologias, uma ameaça nuclear mútua</text>
          </svg>
          <figcaption>Diagrama da bipolaridade da Guerra Fria</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Momentos críticos</span>
        <h2>8. Os Principais Episódios da Guerra Fria</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Principais eventos da Guerra Fria (1947–1991)</caption>
            <thead>
              <tr>
                <th>Ano</th>
                <th>Evento</th>
                <th>Significado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1947</td>
                <td>Doutrina Truman / Plano Marshall</td>
                <td>EUA assumem liderança do bloco capitalista; reconstrução europeia</td>
              </tr>
              <tr>
                <td>1948–49</td>
                <td>Bloqueio de Berlim</td>
                <td>URSS bloqueia Berlim Ocidental; ponte aérea aliada responde</td>
              </tr>
              <tr>
                <td>1949</td>
                <td>OTAN / Bomba soviética</td>
                <td>Aliança militar ocidental; URSS conquista arsenal nuclear</td>
              </tr>
              <tr>
                <td>1950–53</td>
                <td>Guerra da Coreia</td>
                <td>Primeiro conflito por procuração; divisão ainda vigente</td>
              </tr>
              <tr>
                <td>1957</td>
                <td>Sputnik</td>
                <td>URSS lança primeiro satélite artificial; corrida espacial inicia</td>
              </tr>
              <tr>
                <td>1961</td>
                <td>Muro de Berlim</td>
                <td>Símbolo máximo da divisão do mundo; construído pela RDA</td>
              </tr>
              <tr>
                <td>1962</td>
                <td>Crise dos Mísseis de Cuba</td>
                <td>Momento mais próximo de guerra nuclear; negociação Kennedy-Krushev</td>
              </tr>
              <tr>
                <td>1964–75</td>
                <td>Guerra do Vietnã</td>
                <td>Derrota norte-americana; limite do poder militar convencional</td>
              </tr>
              <tr>
                <td>1979–89</td>
                <td>Guerra do Afeganistão</td>
                <td>"Vietnã soviético"; desgaste que acelerou o fim da URSS</td>
              </tr>
              <tr>
                <td>1989</td>
                <td>Queda do Muro de Berlim</td>
                <td>Símbolo do fim da Guerra Fria; reunificação alemã em 1990</td>
              </tr>
              <tr>
                <td>1991</td>
                <td>Dissolução da URSS</td>
                <td>Fim oficial da Guerra Fria; 15 repúblicas independentes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A <strong>Crise dos Mísseis de Cuba</strong> (outubro de 1962) foi o
          episódio mais perigoso da Guerra Fria. A CIA descobriu que a URSS estava
          instalando mísseis nucleares em Cuba, a 145 km da Flórida. Kennedy impôs
          um bloqueio naval e exigiu a retirada dos mísseis. Por treze dias, o
          mundo esteve à beira da guerra nuclear. A resolução negociada —
          Krushev retira os mísseis cubanos em troca de EUA retirarem mísseis da
          Turquia e prometerem não invadir Cuba — demonstrou que a diplomacia
          ainda funcionava mesmo sob extrema pressão. O episódio levou à criação
          do <em>hotline</em> direto entre Moscou e Washington.
        </p>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Brasil e a Guerra Fria</span>
        <h2>9. O Brasil e a Guerra Fria: Ditadura Militar e Dependência</h2>
        <p>
          A Guerra Fria chegou ao Brasil de forma direta: o golpe militar de 1964
          que depôs João Goulart contou com apoio e incentivo dos EUA, que temiam
          que o Brasil "virasse comunista" — especialmente após a Revolução Cubana
          de 1959. A Operação Brother Sam previu apoio naval norte-americano ao
          golpe, caso necessário. Os militares brasileiros adotaram a{" "}
          <strong>Doutrina de Segurança Nacional</strong>, importada da Escola das
          Américas, que via qualquer oposição de esquerda como "subversão comunista"
          a ser reprimida. Nesse contexto, a Guerra Fria moldou 21 anos de ditadura
          militar no Brasil (1964–1985), com consequências para a democracia
          e os direitos humanos que ainda reverberam hoje.
        </p>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fim da bipolaridade</span>
        <h2>10. O Fim da Guerra Fria e a Nova Ordem Mundial</h2>
        <p>
          A dissolução da URSS em dezembro de 1991 encerrou a bipolaridade da
          Guerra Fria. Mikhail Gorbachev, com suas políticas de <em>glasnost</em>
          (transparência) e <em>perestroika</em> (reestruturação), tentou reformar
          o socialismo soviético sem derrubá-lo — mas desencadeou forças centrífugas
          que não conseguiu controlar. As repúblicas soviéticas declararam
          independência uma a uma, e em 25 de dezembro de 1991, Gorbachev
          renunciou à presidência de uma URSS que já havia deixado de existir.
          A queda do Muro de Berlim em 1989 — evento espontâneo que os próprios
          líderes comunistas alemães não previram — foi o símbolo mais poderoso
          do fim de uma era.
        </p>
        <p>
          O politólogo Francis Fukuyama proclamou o "Fim da História": a democracia
          liberal e o capitalismo teriam vencido definitivamente. O historiador
          Samuel Huntington respondeu com o "Choque de Civilizações": os conflitos
          futuros seriam culturais e religiosos, não ideológicos. Nenhuma das
          teses se mostrou completamente satisfatória: o século XXI trouxe novos
          desafios — terrorismo, multipolaridade, autoritarismos ressurgentes —
          que desmentem qualquer visão triunfalista do pós-Guerra Fria.
        </p>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Exercícios</h2>

                <Exercise
          level="Básico"
          title="Exercício 1"
          statement={<p>Qual evento marcou a entrada dos Estados Unidos na Segunda Guerra Mundial e quando ocorreu?</p>}
          options={[
            { letter: "a", text: "O bloqueio naval britânico de 1939, que ameaçou os interesses comerciais americanos." },
            { letter: "b", text: "A invasão alemã da França em 1940, que demonstrou a vulnerabilidade das democracias europeias." },
            { letter: "c", text: "O ataque japonês à base naval de Pearl Harbor, no Havaí, em 7 de dezembro de 1941.", correct: true },
            { letter: "d", text: "A assinatura do Pacto Molotov-Ribbentrop em 1939, que revelou a aliança entre nazistas e soviéticos." },
            { letter: "e", text: "A Batalha de Stalingrado em 1942, quando ficou claro que a Alemanha poderia ser derrotada." },
          ]}
          resolution={<p>O ataque surpresa da Frota Aérea Imperial Japonesa à base naval de Pearl Harbor, no Havaí, em 7 de dezembro de 1941, matou 2.403 americanos e destruiu ou danificou 19 navios de guerra e 328 aviões. No dia seguinte, o presidente Roosevelt discursou ao Congresso chamando 7 de dezembro de 'uma data que viverá na infâmia', e os EUA declararam guerra ao Japão. A Alemanha e a Itália, como aliadas do Japão no Eixo, declararam guerra aos EUA dias depois, completando a entrada americana no conflito.</p>}
        />

                <Exercise
          level="Intermediário"
          title="Exercício 2"
          statement={<p>A Doutrina Truman (1947) e o Plano Marshall são considerados os marcos inaugurais da Guerra Fria. Por que esses dois documentos representaram uma mudança estratégica fundamental na política externa americana?</p>}
          options={[
            { letter: "a", text: "Porque propunham a criação de um exército unificado ocidental para invadir a União Soviética." },
            { letter: "b", text: "Porque estabeleceram que os EUA apoiariam militarmente e economicamente países ameaçados pelo comunismo, abandonando o isolacionismo tradicional.", correct: true },
            { letter: "c", text: "Porque criaram as bases para a criação da ONU como fórum de resolução de conflitos internacionais." },
            { letter: "d", text: "Porque determinaram a divisão permanente da Alemanha em quatro zonas de ocupação com caráter definitivo." },
            { letter: "e", text: "Porque propunham a criação de um bloco econômico americano como alternativa ao COMECON soviético." },
          ]}
          resolution={<p>A Doutrina Truman (março de 1947) declarou que os EUA apoiariam 'povos livres que resistem à subjugação por minorias armadas ou pressões externas' — na prática, um cheque em branco para intervir em qualquer país ameaçado pelo comunismo. O Plano Marshall (junho de 1947) destinou US$ 13 bilhões para reconstruir a Europa Ocidental — além do aspecto humanitário, visava criar economias estáveis e prósperas que resistissem ao apelo do comunismo. Ambos representaram o fim do isolacionismo americano e o início do comprometimento global com a contenção do comunismo soviético.</p>}
        />

                <Exercise
          level="Avançado"
          title="Exercício 3"
          statement={<p>A Crise dos Mísseis de Cuba (1962) é considerada o momento mais perigoso da Guerra Fria. Qual aspecto dessa crise melhor ilustra a lógica da 'deterrência nuclear mútua' (MAD — Mutually Assured Destruction)?</p>}
          options={[
            { letter: "a", text: "O bloqueio naval americano foi eficaz porque a Marinha dos EUA era claramente superior à soviética." },
            { letter: "b", text: "A resolução negociada demonstrou que, quando ambas as partes possuem capacidade de destruição mútua, o conflito direto é irracional e a diplomacia é forçada.", correct: true },
            { letter: "c", text: "Kennedy e Krushev concordaram em criar a ONU como árbitro de futuros conflitos entre as superpotências." },
            { letter: "d", text: "Os soviéticos recuaram porque reconheceram que seus mísseis em Cuba violavam o direito internacional." },
            { letter: "e", text: "A intervenção da ONU por meio do Conselho de Segurança foi decisiva para resolver a crise pacificamente." },
          ]}
          resolution={<p>A Crise dos Mísseis de Cuba exemplifica perfeitamente a lógica do MAD: tanto os EUA quanto a URSS sabiam que um ataque nuclear desencadearia uma retaliação igualmente devastadora — resultando na destruição mútua garantida. Portanto, apesar da enorme pressão militar e política, ambos os lados foram forçados a negociar. Kennedy não bombardeou os silos, Krushev não insistiu em manter os mísseis. A solução negociada — retirada dos mísseis soviéticos de Cuba em troca de garantias americanas — demonstra que a posse de armas nucleares por ambos os lados cria paradoxalmente uma estabilidade pelo terror.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 4"
          statement={<p>(ENEM adaptado) 'Hoje, homens livres em todo lugar, onde quer que vivam, são cidadãos de Berlim. Por isso, como homem livre, tenho orgulho em dizer: Ich bin ein Berliner!' — John F. Kennedy, discurso em Berlim, 1963. O Muro de Berlim (1961–1989) foi o símbolo mais poderoso da Guerra Fria. Em que contexto ele foi construído e o que sua queda em 1989 simbolizou?</p>}
          options={[
            { letter: "a", text: "Foi construído pelos Aliados ocidentais para proteger Berlim Ocidental de invasões soviéticas; sua queda simbolizou a vitória militar da OTAN." },
            { letter: "b", text: "Foi construído pela Alemanha Oriental (RDA) para impedir a emigração em massa para o Ocidente; sua queda simbolizou o colapso do bloco socialista e o fim da Guerra Fria.", correct: true },
            { letter: "c", text: "Foi construído como acordo entre EUA e URSS para dividir definitivamente a Alemanha em dois países permanentes." },
            { letter: "d", text: "Foi construído pela URSS como resposta ao Plano Marshall, para isolar economicamente a Europa Oriental." },
            { letter: "e", text: "Foi construído pelos nazistas para separar as partes alemã e soviética de Berlim durante a Segunda Guerra." },
          ]}
          resolution={<p>O Muro foi construído pela RDA (Alemanha Oriental socialista) durante a noite de 12 para 13 de agosto de 1961, para deter o fluxo de emigração para Berlim Ocidental: entre 1949 e 1961, mais de 2,5 milhões de alemães orientais — especialmente profissionais qualificados — haviam fugido para o Ocidente, esvaziando o país. O Muro matou mais de 140 pessoas que tentaram cruzá-lo. Sua queda na noite de 9 de novembro de 1989 — evento espontâneo que o próprio governo da RDA não havia planejado — simbolizou o colapso do socialismo real na Europa Oriental e o fim da Guerra Fria, abrindo caminho para a reunificação alemã em 1990.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 5"
          statement={<p>(Tema: democracia e direitos humanos) Os julgamentos de Nuremberg (1945–1946) estabeleceram um princípio revolucionário no direito internacional. Qual foi esse princípio e por que ele é relevante para os direitos humanos contemporâneos?</p>}
          options={[
            { letter: "a", text: "Estabeleceram que apenas chefes de Estado podem ser julgados por crimes de guerra, não soldados ou burocratas." },
            { letter: "b", text: "Criaram a Corte Internacional de Justiça como tribunal permanente para julgamento de todos os crimes internacionais." },
            { letter: "c", text: "Afirmaram que indivíduos podem ser responsabilizados pelo direito internacional por crimes de guerra e crimes contra a humanidade, independentemente de ordens superiores.", correct: true },
            { letter: "d", text: "Determinaram que a Alemanha deveria pagar reparações de guerra a todos os países aliados, criando precedente para indenizações por violações de direitos." },
            { letter: "e", text: "Estabeleceram que crimes cometidos em tempo de guerra não podem ser julgados por tribunais de países vencedores." },
          ]}
          resolution={<p>O principal legado jurídico de Nuremberg foi o princípio de que indivíduos — não apenas Estados — têm responsabilidade pelo direito internacional, e que 'seguir ordens superiores' não é defesa suficiente para crimes de guerra e crimes contra a humanidade. Isso criou a base para o Tribunal Penal Internacional (TPI), criado em 1998, e para todos os tribunais internacionais subsequentes (ex-Iugoslávia, Ruanda). A categoria 'crimes contra a humanidade' — criada em Nuremberg — é hoje o fundamento jurídico da proteção internacional dos direitos humanos. Os princípios de Nuremberg foram incorporados à Convenção sobre Genocídio (1948) e à Declaração Universal dos Direitos Humanos (1948).</p>}
        />
      </section>
    </article>
  );
}
