"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap40Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 40</span>

          <h1>
            Sistemas de Integração e Transporte: Sistema Cardiovascular e Sistema Excretor
          </h1>

          <p>
            O organismo humano é uma máquina de alta precisão que depende de dois
            grandes sistemas para manter a vida celular: o{" "}
            <strong>sistema cardiovascular</strong>, responsável pelo transporte de
            gases, nutrientes e hormônios a cada canto do corpo, e o{" "}
            <strong>sistema excretor</strong>, que filtra o sangue, elimina resíduos
            metabólicos e regula com fineza o volume e a composição dos líquidos
            corporais. Dominar esses sistemas é essencial para o ENEM e os
            principais vestibulares do país.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Sangue</span>

        <h2>1. Sangue: Composição e Funções</h2>

        <p>
          O <strong>sangue</strong> é um tecido conjuntivo líquido composto por uma
          parte líquida — o <strong>plasma</strong> — e por elementos celulares
          suspensos nele. O volume médio em um adulto é de 4 a 6 litros, e sua
          composição complexa permite que ele exerça funções de transporte,
          defesa, regulação térmica e coagulação ao mesmo tempo.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🩸</span>
            <h3>Hemácias (eritrócitos)</h3>
            <p>
              Células anucleadas ricas em <strong>hemoglobina</strong>; transportam
              O₂ dos pulmões aos tecidos e CO₂ dos tecidos aos pulmões. Vivem
              cerca de 120 dias.
            </p>
          </div>

          <div className="lesson-card">
            <span>🛡️</span>
            <h3>Leucócitos</h3>
            <p>
              Células nucleadas da defesa imune. Incluem neutrófilos (fagocitose),
              linfócitos (produção de anticorpos) e monócitos (fagocitose e
              apresentação de antígenos).
            </p>
          </div>

          <div className="lesson-card">
            <span>🧩</span>
            <h3>Plaquetas (trombócitos)</h3>
            <p>
              Fragmentos citoplasmáticos sem núcleo, essenciais para a{" "}
              <strong>coagulação sanguínea</strong>. Ao detectar lesão vascular,
              agregam-se e desencadeiam a cascata de coagulação.
            </p>
          </div>

          <div className="lesson-card">
            <span>💧</span>
            <h3>Plasma</h3>
            <p>
              Solução aquosa (~90% de água) que contém proteínas (albumina,
              fibrinogênio, globulinas), nutrientes, hormônios, gases dissolvidos
              e eletrólitos.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Hematócrito e hemoglobina</h3>
          <p>
            O <strong>hematócrito</strong> é a porcentagem do volume sanguíneo
            ocupada pelas hemácias (valores normais: 38–52%). A hemoglobina é uma
            proteína com quatro subunidades, cada uma carregando um grupo{" "}
            <strong>heme</strong> com ferro (Fe²⁺) que se liga reversivelmente ao
            O₂. Em locais de baixa pressão parcial de O₂ (tecidos), a hemoglobina
            libera o gás para as células.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Coração</span>

        <h2>2. Anatomia e Fisiologia do Coração</h2>

        <p>
          O <strong>coração</strong> humano é um órgão muscular oco localizado no
          mediastino, ligeiramente deslocado para a esquerda. Seu músculo —{" "}
          <strong>miocárdio</strong> — é único: contrai ritmicamente de forma
          involuntária graças ao sistema de condução elétrica intrínseco. O
          coração possui <strong>quatro câmaras</strong> separadas por septos,
          garantindo que o sangue venoso (pobre em O₂) nunca se misture ao
          sangue arterial (rico em O₂).
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 320" width="680" height="320" aria-label="Diagrama esquemático do coração com quatro câmaras">
            {/* corpo do coração */}
            <ellipse cx={340} cy={170} rx={180} ry={130} fill="#fef2f2" stroke="#991b1b" strokeWidth={2} />
            {/* septo vertical */}
            <line x1={340} y1={55} x2={340} y2={285} stroke="#991b1b" strokeWidth={2} strokeDasharray="5 3" />
            {/* septo horizontal */}
            <line x1={170} y1={170} x2={510} y2={170} stroke="#991b1b" strokeWidth={2} strokeDasharray="5 3" />

            {/* átrio direito */}
            <text x={230} y={125} textAnchor="middle" fontSize={13} fontWeight={700} fill="#7f1d1d">Átrio</text>
            <text x={230} y={142} textAnchor="middle" fontSize={13} fontWeight={700} fill="#7f1d1d">Direito (AD)</text>
            <text x={230} y={158} textAnchor="middle" fontSize={10} fill="#991b1b">recebe sangue venoso</text>
            <text x={230} y={171} textAnchor="middle" fontSize={10} fill="#991b1b">da veia cava</text>

            {/* átrio esquerdo */}
            <text x={455} y={125} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a5f">Átrio</text>
            <text x={455} y={142} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a5f">Esquerdo (AE)</text>
            <text x={455} y={158} textAnchor="middle" fontSize={10} fill="#1d4ed8">recebe sangue arterial</text>
            <text x={455} y={171} textAnchor="middle" fontSize={10} fill="#1d4ed8">das veias pulmonares</text>

            {/* ventrículo direito */}
            <text x={230} y={218} textAnchor="middle" fontSize={13} fontWeight={700} fill="#7f1d1d">Ventrículo</text>
            <text x={230} y={235} textAnchor="middle" fontSize={13} fontWeight={700} fill="#7f1d1d">Direito (VD)</text>
            <text x={230} y={252} textAnchor="middle" fontSize={10} fill="#991b1b">envia sangue aos</text>
            <text x={230} y={265} textAnchor="middle" fontSize={10} fill="#991b1b">pulmões (a. pulmonar)</text>

            {/* ventrículo esquerdo */}
            <text x={455} y={218} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a5f">Ventrículo</text>
            <text x={455} y={235} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a5f">Esquerdo (VE)</text>
            <text x={455} y={252} textAnchor="middle" fontSize={10} fill="#1d4ed8">envia sangue ao corpo</text>
            <text x={455} y={265} textAnchor="middle" fontSize={10} fill="#1d4ed8">(artéria aorta)</text>

            {/* válvulas labels */}
            <text x={340} y={175} textAnchor="middle" fontSize={9} fill="#374151">válvulas AV</text>

            {/* setas de entrada/saída */}
            {/* veia cava -> AD */}
            <path d="M120 125 L175 125" stroke="#dc2626" strokeWidth={2.5} fill="none" markerEnd="url(#ar)" />
            <text x={80} y={120} fontSize={10} fill="#dc2626">veia cava</text>

            {/* VD -> artéria pulmonar */}
            <path d="M175 248 L115 248" stroke="#dc2626" strokeWidth={2.5} fill="none" markerEnd="url(#ar)" />
            <text x={30} y={244} fontSize={10} fill="#dc2626">a. pulmonar</text>

            {/* veias pulmonares -> AE */}
            <path d="M560 125 L510 125" stroke="#2563eb" strokeWidth={2.5} fill="none" markerEnd="url(#ab)" />
            <text x={563} y={120} fontSize={10} fill="#2563eb">v. pulmonares</text>

            {/* VE -> aorta */}
            <path d="M510 248 L565 248" stroke="#2563eb" strokeWidth={2.5} fill="none" markerEnd="url(#ab)" />
            <text x={568} y={244} fontSize={10} fill="#2563eb">aorta</text>

            <defs>
              <marker id="ar" markerWidth={8} markerHeight={8} refX={4} refY={4} orient="auto">
                <polygon points="0,0 8,4 0,8" fill="#dc2626" />
              </marker>
              <marker id="ab" markerWidth={8} markerHeight={8} refX={4} refY={4} orient="auto">
                <polygon points="0,0 8,4 0,8" fill="#2563eb" />
              </marker>
            </defs>

            {/* legenda */}
            <rect x={170} y={295} width={14} height={10} fill="#dc2626" opacity={0.7} />
            <text x={188} y={304} fontSize={10} fill="#374151">sangue venoso (pobre em O₂)</text>
            <rect x={370} y={295} width={14} height={10} fill="#2563eb" opacity={0.7} />
            <text x={388} y={304} fontSize={10} fill="#374151">sangue arterial (rico em O₂)</text>
          </svg>
          <figcaption>
            As quatro câmaras do coração humano e o trajeto do sangue. As câmaras
            direitas conduzem sangue venoso; as esquerdas, sangue arterial.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Válvulas cardíacas — guardiãs do fluxo unidirecional</h3>
          <p>
            Quatro válvulas impedem o refluxo sanguíneo. As{" "}
            <strong>válvulas atrioventriculares</strong> (mitral, entre AE e VE;
            tricúspide, entre AD e VD) abrem durante a diástole e fecham na
            sístole ventricular. As <strong>válvulas semilunares</strong> (aórtica
            e pulmonar) abrem durante a sístole e fecham na diástole, evitando
            que o sangue reflua para os ventrículos.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Ciclo cardíaco: sístole e diástole</h3>
          <p>
            A <strong>sístole</strong> é a fase de contração do miocárdio:
            primeiro os átrios se contraem (sístole atrial), empurrando sangue
            para os ventrículos; depois os ventrículos se contraem (sístole
            ventricular), ejetando o sangue para as artérias. A{" "}
            <strong>diástole</strong> é o relaxamento: o coração se enche de
            sangue. Em repouso, o ciclo completo dura cerca de 0,8 segundo (75
            batimentos por minuto).
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Vasos Sanguíneos</span>

        <h2>3. Artérias, Veias e Capilares</h2>

        <p>
          Os <strong>vasos sanguíneos</strong> formam uma rede de mais de
          100 000 km no corpo humano. Cada tipo tem estrutura adaptada à sua
          função específica: as artérias suportam alta pressão, as veias
          garantem o retorno do sangue contra a gravidade e os capilares
          permitem trocas entre sangue e células.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Artérias</th>
                <th>Veias</th>
                <th>Capilares</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Direção do fluxo</td>
                <td>Do coração para os tecidos</td>
                <td>Dos tecidos para o coração</td>
                <td>Entre artérias e veias</td>
              </tr>
              <tr>
                <td>Parede</td>
                <td>Espessa, muscular e elástica</td>
                <td>Fina, com válvulas venosas</td>
                <td>Endotélio simples (1 camada)</td>
              </tr>
              <tr>
                <td>Pressão interna</td>
                <td>Alta (pulsátil)</td>
                <td>Baixa</td>
                <td>Muito baixa</td>
              </tr>
              <tr>
                <td>Função principal</td>
                <td>Distribuir sangue sob pressão</td>
                <td>Retornar sangue ao coração</td>
                <td>Trocas gasosas e de nutrientes</td>
              </tr>
              <tr>
                <td>Lúmen</td>
                <td>Estreito em relação à parede</td>
                <td>Amplo em relação à parede</td>
                <td>Capilar (passagem de hemácias)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <p>
            <strong>Atenção ao conceito de "arterial" vs. "venoso":</strong> a
            artéria pulmonar conduz sangue <em>venoso</em> (pobre em O₂) e as
            veias pulmonares conduzem sangue <em>arterial</em> (rico em O₂). O
            que define "arterial" ou "venoso" é a composição do sangue, não o
            tipo de vaso.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Circulação Dupla</span>

        <h2>4. Circulação Dupla e Completa — Pequena e Grande Circulação</h2>

        <p>
          A circulação humana é classificada como <strong>dupla</strong>{" "}
          (o sangue passa duas vezes pelo coração a cada volta completa) e{" "}
          <strong>completa</strong> (sangue venoso e arterial nunca se misturam,
          pois o septo interventricular é total). Essa combinação garante maior
          eficiência metabólica, fundamental para animais endotérmicos de alto
          gasto energético.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 300" width="720" height="300" aria-label="Diagrama da circulação pulmonar e sistêmica">
            {/* coração centro */}
            <ellipse cx={360} cy={150} rx={60} ry={50} fill="#fef2f2" stroke="#991b1b" strokeWidth={2} />
            <text x={360} y={145} textAnchor="middle" fontSize={12} fontWeight={700} fill="#7f1d1d">Coração</text>
            <text x={360} y={162} textAnchor="middle" fontSize={10} fill="#991b1b">D | E</text>

            {/* pulmões */}
            <ellipse cx={180} cy={80} rx={65} ry={35} fill="#dbeafe" stroke="#3b82f6" strokeWidth={2} />
            <text x={180} y={76} textAnchor="middle" fontSize={12} fontWeight={700} fill="#1e3a5f">Pulmões</text>
            <text x={180} y={91} textAnchor="middle" fontSize={10} fill="#1d4ed8">hematose</text>

            {/* corpo */}
            <ellipse cx={540} cy={150} rx={65} ry={35} fill="#f0fdf4" stroke="#16a34a" strokeWidth={2} />
            <text x={540} y={146} textAnchor="middle" fontSize={12} fontWeight={700} fill="#14532d">Tecidos</text>
            <text x={540} y={161} textAnchor="middle" fontSize={10} fill="#16a34a">trocas gasosas</text>

            {/* PEQUENA CIRCULAÇÃO: coração -> pulmões (venoso, vermelho escuro) */}
            <path d="M330 120 C 280 60, 240 55, 245 80" stroke="#991b1b" strokeWidth={2.5} fill="none" markerEnd="url(#arV)" />
            <text x={264} y={60} fontSize={9} fill="#991b1b">a. pulmonar</text>
            <text x={256} y={71} fontSize={9} fill="#991b1b">(sangue venoso)</text>

            {/* pulmões -> coração esquerdo (arterial, azul) */}
            <path d="M245 108 C 260 140, 300 145, 305 145" stroke="#2563eb" strokeWidth={2.5} fill="none" markerEnd="url(#arA)" />
            <text x={240} y={130} fontSize={9} fill="#2563eb">v. pulmonares</text>
            <text x={240} y={141} fontSize={9} fill="#2563eb">(sangue arterial)</text>

            {/* GRANDE CIRCULAÇÃO: coração -> tecidos (arterial, azul) */}
            <path d="M418 135 C 460 110, 490 125, 480 148" stroke="#2563eb" strokeWidth={2.5} fill="none" markerEnd="url(#arA)" />
            <text x={435} y={110} fontSize={9} fill="#2563eb">aorta</text>
            <text x={430} y={121} fontSize={9} fill="#2563eb">(arterial)</text>

            {/* tecidos -> coração direito (venoso) */}
            <path d="M476 163 C 470 195, 420 185, 410 170" stroke="#991b1b" strokeWidth={2.5} fill="none" markerEnd="url(#arV)" />
            <text x={430} y={205} fontSize={9} fill="#991b1b">veia cava</text>
            <text x={426} y={216} fontSize={9} fill="#991b1b">(venoso)</text>

            {/* labels circulações */}
            <text x={220} y={200} fontSize={11} fontWeight={700} fill="#0369a1">Pequena circulação</text>
            <text x={215} y={213} fontSize={10} fill="#0369a1">(pulmonar)</text>
            <text x={480} y={260} fontSize={11} fontWeight={700} fill="#15803d">Grande circulação</text>
            <text x={487} y={273} fontSize={10} fill="#15803d">(sistêmica)</text>

            <defs>
              <marker id="arV" markerWidth={8} markerHeight={8} refX={4} refY={4} orient="auto">
                <polygon points="0,0 8,4 0,8" fill="#991b1b" />
              </marker>
              <marker id="arA" markerWidth={8} markerHeight={8} refX={4} refY={4} orient="auto">
                <polygon points="0,0 8,4 0,8" fill="#2563eb" />
              </marker>
            </defs>

            {/* legenda */}
            <line x1={50} y1={265} x2={90} y2={265} stroke="#991b1b" strokeWidth={2.5} />
            <text x={95} y={269} fontSize={10} fill="#374151">sangue venoso (pobre em O₂/CO₂ elevado)</text>
            <line x1={50} y1={282} x2={90} y2={282} stroke="#2563eb" strokeWidth={2.5} />
            <text x={95} y={286} fontSize={10} fill="#374151">sangue arterial (rico em O₂)</text>
          </svg>
          <figcaption>
            Circulação dupla e completa: a <strong>pequena circulação</strong> (ou
            pulmonar) oxigena o sangue nos pulmões; a{" "}
            <strong>grande circulação</strong> (ou sistêmica) distribui O₂ para
            todos os tecidos.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Por que a circulação completa é vantajosa?</h3>
          <p>
            Em anfíbios, a circulação é <strong>incompleta</strong> (coração com
            3 câmaras e mistura de sangues), o que limita a eficiência do
            transporte de O₂. Em mamíferos e aves, o septo interventricular total
            mantém as duas correntes separadas, permitindo que o sangue chegue aos
            tecidos com a <strong>máxima concentração de O₂</strong> possível —
            essencial para sustentar o metabolismo acelerado dos endotérmicos.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Pressão arterial e o ciclo cardíaco</h3>
          <p>
            A <strong>pressão arterial</strong> (PA) é a força que o sangue exerce
            contra as paredes das artérias. É expressa em mmHg como PA
            sistólica/diastólica. Valores normais em adultos:{" "}
            <strong>120/80 mmHg</strong>. A pressão é maior durante a sístole
            ventricular e cai durante a diástole. A <strong>hipertensão
            arterial</strong> (PA {">"} 140/90 mmHg) sobrecarrega o coração e os
            vasos, aumentando o risco de infarto, AVC e insuficiência renal.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Sistema Excretor</span>

        <h2>5. Sistema Excretor e Urinário: Visão Geral</h2>

        <p>
          O <strong>sistema excretor</strong> remove do organismo os produtos
          finais do metabolismo celular que seriam tóxicos se acumulados. O
          sistema urinário — seu principal componente — é formado por dois{" "}
          <strong>rins</strong>, dois ureteres, a <strong>bexiga urinária</strong>{" "}
          e a <strong>uretra</strong>. Os rins recebem cerca de 20–25% do débito
          cardíaco total, filtrando aproximadamente 180 litros de plasma por dia,
          dos quais mais de 99% são reabsorvidos, resultando em apenas 1–2 litros
          de urina final.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🫘</span>
            <h3>Rins</h3>
            <p>
              Órgãos em forma de feijão, localizados retroperitonealmente. Cada
              rim contém cerca de 1 milhão de néfrons, sua unidade funcional.
              Filtram o sangue e produzem urina.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔗</span>
            <h3>Ureteres</h3>
            <p>
              Tubos musculares que conduzem a urina formada nos rins até a bexiga
              por contrações peristálticas.
            </p>
          </div>

          <div className="lesson-card">
            <span>💧</span>
            <h3>Bexiga urinária</h3>
            <p>
              Reservatório musculoso que armazena a urina até a micção. Capacidade
              média de 300–500 mL.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔽</span>
            <h3>Uretra</h3>
            <p>
              Canal que conduz a urina da bexiga para o exterior. Diferente em
              comprimento e função entre homens e mulheres.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Néfron</span>

        <h2>6. Néfron: Estrutura e as Três Etapas de Formação da Urina</h2>

        <p>
          O <strong>néfron</strong> é a unidade estrutural e funcional do rim.
          Cada néfron é composto pelo <strong>corpúsculo renal</strong> (glomérulo
          + cápsula de Bowman) e pelo <strong>sistema de túbulos</strong> (túbulo
          proximal, alça de Henle, túbulo distal e ducto coletor). A urina é
          formada em três etapas sequenciais:
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 280" width="720" height="280" aria-label="Estrutura do néfron e etapas de formação da urina">
            {/* capilares glomerulares */}
            <circle cx={130} cy={90} r={40} fill="#fef3c7" stroke="#d97706" strokeWidth={2} />
            <text x={130} y={85} textAnchor="middle" fontSize={11} fontWeight={700} fill="#92400e">Glomérulo</text>
            <text x={130} y={100} textAnchor="middle" fontSize={10} fill="#92400e">(capilares)</text>

            {/* cápsula de Bowman */}
            <circle cx={130} cy={90} r={58} fill="none" stroke="#f59e0b" strokeWidth={2} strokeDasharray="6 3" />
            <text x={130} y={30} textAnchor="middle" fontSize={10} fill="#b45309">Cápsula de Bowman</text>

            {/* etapa 1: filtração */}
            <rect x={20} y={140} width={220} height={38} rx={10} fill="#fef9c3" stroke="#eab308" strokeWidth={1.5} />
            <text x={130} y={158} textAnchor="middle" fontSize={11} fontWeight={700} fill="#713f12">1. Filtração Glomerular</text>
            <text x={130} y={172} textAnchor="middle" fontSize={9} fill="#78350f">pressão força plasma ao espaço de Bowman</text>

            {/* túbulo proximal */}
            <path d="M188 90 C 260 80, 300 60, 350 90" stroke="#6366f1" strokeWidth={3} fill="none" />
            <text x={285} y={65} textAnchor="middle" fontSize={10} fill="#4338ca">túbulo proximal</text>

            {/* alça de Henle */}
            <path d="M350 90 L400 90 L400 200 L450 200 L450 90 L500 90" stroke="#8b5cf6" strokeWidth={3} fill="none" />
            <text x={425} y={240} textAnchor="middle" fontSize={10} fill="#6d28d9">alça de Henle</text>

            {/* túbulo distal */}
            <path d="M500 90 C 540 70, 580 80, 610 90" stroke="#0ea5e9" strokeWidth={3} fill="none" />
            <text x={557} y={65} textAnchor="middle" fontSize={10} fill="#0369a1">túbulo distal</text>

            {/* ducto coletor */}
            <rect x={600} y={90} width={28} height={120} rx={6} fill="#dbeafe" stroke="#3b82f6" strokeWidth={2} />
            <text x={614} y={235} textAnchor="middle" fontSize={10} fill="#1d4ed8">Ducto</text>
            <text x={614} y={247} textAnchor="middle" fontSize={10} fill="#1d4ed8">Coletor</text>

            {/* etapa 2: reabsorção */}
            <rect x={290} y={230} width={200} height={38} rx={10} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.5} />
            <text x={390} y={248} textAnchor="middle" fontSize={11} fontWeight={700} fill="#14532d">2. Reabsorção Tubular</text>
            <text x={390} y={262} textAnchor="middle" fontSize={9} fill="#166534">glicose, água, sais voltam ao sangue</text>

            {/* etapa 3: secreção */}
            <rect x={500} y={140} width={190} height={38} rx={10} fill="#fae8ff" stroke="#a21caf" strokeWidth={1.5} />
            <text x={595} y={158} textAnchor="middle" fontSize={11} fontWeight={700} fill="#701a75">3. Secreção Tubular</text>
            <text x={595} y={172} textAnchor="middle" fontSize={9} fill="#86198f">resíduos migram do sangue ao túbulo</text>

            {/* urina final */}
            <text x={614} y={225} textAnchor="middle" fontSize={9} fontWeight={700} fill="#1e40af">urina</text>
          </svg>
          <figcaption>
            Esquema simplificado do néfron. As três etapas — filtração
            glomerular, reabsorção e secreção tubular — formam a urina
            definitiva no ducto coletor.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Etapa</th>
                <th>Local</th>
                <th>Mecanismo</th>
                <th>O que passa / retorna</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Filtração glomerular</strong></td>
                <td>Glomérulo → cápsula de Bowman</td>
                <td>Pressão hidrostática do sangue</td>
                <td>Água, íons, glicose, ureia, aminoácidos (exceto proteínas e células)</td>
              </tr>
              <tr>
                <td><strong>Reabsorção tubular</strong></td>
                <td>Túbulo proximal, alça de Henle e túbulo distal</td>
                <td>Transporte ativo e passivo (osmose)</td>
                <td>Glicose (100%), água (~99%), Na⁺, aminoácidos, HCO₃⁻</td>
              </tr>
              <tr>
                <td><strong>Secreção tubular</strong></td>
                <td>Túbulo distal e ducto coletor</td>
                <td>Transporte ativo dos capilares para o lúmen</td>
                <td>H⁺, K⁺, NH₄⁺, creatinina, fármacos, toxinas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Glicosúria — um sinal clínico importante</h3>
          <p>
            Em condições normais, <strong>toda a glicose filtrada é
            reabsorvida</strong> no túbulo proximal. Na <strong>diabetes mellitus
            tipo 1 e tipo 2</strong>, a hiperglicemia pode superar a capacidade
            máxima de reabsorção tubular (~180 mg/dL), e a glicose aparece na
            urina (glicosúria). Isso acarreta diurese osmótica — mais água é
            arrastada para a urina — explicando a poliúria característica da
            doença.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Osmorregulação</span>

        <h2>7. Equilíbrio Hidrossalino e Osmorregulação</h2>

        <p>
          A <strong>osmorregulação</strong> é o controle da osmolaridade dos
          líquidos corporais, mantendo o equilíbrio entre entrada e saída de água
          e solutos. O rim é o órgão central, regulado por hormônios que modulam a
          permeabilidade dos túbulos à água.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🧠</span>
            <h3>ADH (Vasopressina)</h3>
            <p>
              Produzido no hipotálamo e liberado pela hipófise posterior. Aumenta
              a permeabilidade do ducto coletor à água, promovendo sua
              reabsorção. Resultado: urina concentrada e menor volume urinário.
              Liberado quando a osmolaridade plasmática aumenta ou o volume
              sanguíneo cai.
            </p>
          </div>

          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Aldosterona</h3>
            <p>
              Hormônio esteroide produzido pelo córtex adrenal. Estimula a
              reabsorção de Na⁺ no túbulo distal e a excreção de K⁺. Com mais
              Na⁺ retido, a água o segue por osmose — aumentando a pressão
              arterial e o volume sanguíneo.
            </p>
          </div>

          <div className="lesson-card">
            <span>🩺</span>
            <h3>Sistema Renina-Angiotensina</h3>
            <p>
              Quando a pressão cai, os rins liberam <strong>renina</strong>, que
              converte angiotensinogênio em angiotensina I, convertida em
              angiotensina II. Esta vasoconstricta artérias e estimula a secreção
              de aldosterona, restaurando a pressão sanguínea.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Diabetes insipidus — quando falta ADH</h3>
          <p>
            Na <strong>diabetes insipidus</strong>, a produção ou ação do ADH é
            deficiente. O ducto coletor perde a permeabilidade à água, que é
            excretada em grandes volumes (poliúria de até 20 L/dia) de urina
            muito diluída. Não confundir com diabetes mellitus, que envolve
            insulina e metabolismo de glicose.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Excretas Nitrogenadas</span>

        <h2>8. Excretas Nitrogenadas por Grupo Animal</h2>

        <p>
          O catabolismo de aminoácidos produz nitrogênio na forma de compostos
          que precisam ser eliminados. O tipo de excreta nitrogenada reflete uma
          adaptação ao ambiente de vida do animal, especialmente à disponibilidade
          de água.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Excreta</th>
                <th>Toxicidade</th>
                <th>Água necessária</th>
                <th>Grupos animais</th>
                <th>Onde é excretada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Amônia (NH₃)</strong></td>
                <td>Muito alta</td>
                <td>Grande volume</td>
                <td>Peixes ósseos, crustáceos, larvas de anfíbios</td>
                <td>Diretamente pelas brânquias ou pele</td>
              </tr>
              <tr>
                <td><strong>Ureia (CO(NH₂)₂)</strong></td>
                <td>Baixa</td>
                <td>Volume moderado</td>
                <td>Mamíferos, adultos de anfíbios, tubarões</td>
                <td>Rim (urina)</td>
              </tr>
              <tr>
                <td><strong>Ácido úrico (C₅H₄N₄O₃)</strong></td>
                <td>Muito baixa</td>
                <td>Mínimo</td>
                <td>Répteis, aves, insetos</td>
                <td>Pasta sólida/semissólida (cloaca)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Ureia — síntese no fígado</h3>
          <p>
            A ureia é produzida no <strong>fígado</strong> pelo{" "}
            <strong>ciclo da ureia</strong> (ciclo de Krebs-Henseleit), que
            combina CO₂ e NH₃ em uma molécula menos tóxica. A ureia é
            transportada pelo sangue até os rins, onde é filtrada e
            parcialmente reabsorvida, sendo excretada na urina. Valores normais de
            ureia sérica: 10–45 mg/dL. Elevação (uremia) indica comprometimento
            renal.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Ácido úrico e gota</h3>
          <p>
            Em humanos, o ácido úrico é subproduto do metabolismo das bases
            púricas (adenina e guanina). Sua acumulação no sangue{" "}
            (hiperuricemia) pode causar <strong>gota</strong> — depósito de
            cristais de urato nas articulações — e cálculos renais. Aves e
            répteis excretam ácido úrico como principal excreta nitrogenada,
            poupando água no ovo (adaptação ao ambiente terrestre).
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Câmaras do coração e circulação dupla"
          statement={
            <p>
              Sobre o coração humano e a circulação sanguínea, assinale a
              alternativa correta.
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O ventrículo direito envia sangue rico em O₂ para o corpo pela artéria aorta.",
            },
            {
              letter: "b",
              text: "O átrio esquerdo recebe sangue venoso das veias cavas superior e inferior.",
            },
            {
              letter: "c",
              text: "A circulação humana é dupla e completa: o sangue venoso e o arterial não se misturam.",
              correct: true,
            },
            {
              letter: "d",
              text: "As artérias pulmonares conduzem sangue arterial dos pulmões ao coração esquerdo.",
            },
          ]}
          resolution={
            <p>
              A circulação humana é <strong>dupla</strong> (o sangue passa duas
              vezes pelo coração por ciclo) e <strong>completa</strong> (o septo
              interventricular total impede a mistura de sangues). O ventrículo
              direito envia sangue <em>venoso</em> aos pulmões pela artéria
              pulmonar; a aorta parte do ventrículo <em>esquerdo</em>; as veias
              pulmonares trazem sangue arterial ao átrio esquerdo.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Etapas de formação da urina"
          statement={
            <p>
              As três etapas de formação da urina no néfron são, respectivamente,
              em ordem correta de ocorrência:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Reabsorção → Secreção → Filtração",
            },
            {
              letter: "b",
              text: "Filtração glomerular → Reabsorção tubular → Secreção tubular",
              correct: true,
            },
            {
              letter: "c",
              text: "Secreção → Filtração → Reabsorção",
            },
            {
              letter: "d",
              text: "Filtração → Secreção → Reabsorção",
            },
          ]}
          resolution={
            <p>
              A sequência correta é: (1) <strong>filtração glomerular</strong> —
              plasma passa do glomérulo para a cápsula de Bowman; (2){" "}
              <strong>reabsorção tubular</strong> — substâncias úteis retornam ao
              sangue; (3) <strong>secreção tubular</strong> — resíduos e toxinas
              são lançados do sangue para o lúmen tubular. A urina definitiva
              chega ao ducto coletor.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Excretas nitrogenadas e adaptação ao ambiente"
          statement={
            <p>
              Aves e répteis excretam ácido úrico como principal produto
              nitrogenado, enquanto mamíferos excretam ureia. Qual vantagem
              adaptativa o ácido úrico confere a esses animais?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O ácido úrico é mais solúvel em água, facilitando a excreção.",
            },
            {
              letter: "b",
              text: "O ácido úrico é mais tóxico, eliminando parasitas intestinais.",
            },
            {
              letter: "c",
              text: "O ácido úrico requer muito menos água para ser excretado, o que representa economia hídrica crucial para animais terrestres e para o desenvolvimento embrionário no ovo.",
              correct: true,
            },
            {
              letter: "d",
              text: "O ácido úrico fornece energia adicional durante voos de longa distância.",
            },
          ]}
          resolution={
            <p>
              O ácido úrico é praticamente insolúvel e pode ser excretado como
              pasta sólida (cloaca), exigindo mínima quantidade de água. Isso é
              especialmente vantajoso em embriões dentro de ovos amnióticos — onde
              não há como descartar ureia solúvel — e em ambientes áridos. A
              amônia (muito solúvel e tóxica) só funciona em animais aquáticos
              que podem diluí-la continuamente.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Insuficiência renal e diálise (ENEM)"
          statement={
            <p>
              Um paciente com insuficiência renal crônica necessita de
              hemodiálise. Nesse procedimento, o sangue do paciente circula por
              uma membrana semipermeável que remove substâncias como ureia,
              creatinina e excesso de K⁺, enquanto glicose e proteínas
              permanecem no sangue. Qual processo do néfron a hemodiálise
              substitui funcionalmente de forma mais direta?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Reabsorção tubular, pois recoloca nutrientes no sangue.",
            },
            {
              letter: "b",
              text: "Secreção tubular, pois transporta toxinas do sangue para o exterior.",
            },
            {
              letter: "c",
              text: "Filtração glomerular, pois separa pequenas moléculas do sangue por gradiente de pressão através de membrana semipermeável.",
              correct: true,
            },
            {
              letter: "d",
              text: "Síntese de ureia, pois produz o composto nitrogenado excretado.",
            },
          ]}
          resolution={
            <p>
              A hemodiálise mimetiza a <strong>filtração glomerular</strong>:
              sangue pressurizado passa por uma membrana semipermeável que retém
              células e proteínas grandes, mas permite a passagem de água, ureia,
              creatinina e eletrólitos para o dialisato — exatamente o que o
              glomérulo faz ao filtrar o plasma para a cápsula de Bowman. As
              etapas de reabsorção e secreção são complementares e parcialmente
              mimetizadas pelo líquido de diálise, mas o princípio central é a
              filtração por membrana.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. ADH, desidratação e concentração de urina"
          statement={
            <p>
              Após uma maratona sob calor intenso, um atleta perde grande volume
              de suor e apresenta aumento da osmolaridade plasmática. Com base na
              fisiologia renal, qual resposta hormonal e renal ocorrerá para
              compensar essa situação?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Diminuição do ADH → ducto coletor menos permeável à água → urina diluída em grande volume.",
            },
            {
              letter: "b",
              text: "Aumento do ADH → maior permeabilidade do ducto coletor à água → maior reabsorção de água → urina concentrada em pequeno volume.",
              correct: true,
            },
            {
              letter: "c",
              text: "Aumento de aldosterona → maior excreção de Na⁺ → maior perda hídrica.",
            },
            {
              letter: "d",
              text: "Diminuição da filtração glomerular → ausência de urina por 24 horas.",
            },
          ]}
          resolution={
            <p>
              O aumento da osmolaridade plasmática é detectado por osmorreceptores
              hipotalâmicos, que estimulam a liberação de{" "}
              <strong>ADH (vasopressina)</strong> pela hipófise posterior. O ADH
              insere aquaporinas (canais de água) na membrana do ducto coletor,
              aumentando a reabsorção de água. O resultado é{" "}
              <strong>urina mais concentrada e em menor volume</strong> —
              conservando água para restaurar a osmolaridade plasmática normal.
            </p>
          }
        />
      </section>
    </article>
  );
}
