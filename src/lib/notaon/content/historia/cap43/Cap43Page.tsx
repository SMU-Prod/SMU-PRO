"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap43Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 43</span>
          <h1>Crise de 1929, Fascismo e Nazismo</h1>
          <p>
            O entreguerras (1919–1939) foi um período de fraturas profundas na
            ordem liberal-capitalista: a Grande Depressão de 1929 desorganizou
            economias inteiras, e sobre os escombros da prosperidade ilusória
            dos "loucos anos 20" ergueram-se os regimes totalitários — o
            fascismo italiano de Mussolini e o nazismo alemão de Hitler. Esses
            movimentos combinaram nacionalismo exacerbado, culto ao líder,
            violência política sistemática e pseudociências raciais, produzindo
            as condições para o maior conflito da história humana. Compreender
            suas origens, estruturas e diferenças é tarefa central do ENEM.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto econômico</span>
        <h2>1. A Crise de 1929 e a Grande Depressão</h2>
        <p>
          Durante a década de 1920, a economia norte-americana experimentou um
          crescimento acelerado baseado no consumo de massa (automóveis,
          eletrodomésticos), no crédito fácil e na especulação financeira. A
          Bolsa de Valores de Nova York (Wall Street) inflou uma bolha especulativa
          gigantesca: ações eram compradas a prazo e revendidas com lucros
          imediatos, sem lastro produtivo. Em 24 de outubro de 1929 — a "Quinta-feira
          Negra" — iniciou-se o crash: 13 milhões de ações foram vendidas em
          pânico em um único dia. Na "Terça-feira Negra" (29/10), outros 16
          milhões de títulos foram lançados ao mercado sem compradores. O
          colapso foi total.
        </p>
        <p>
          As consequências se espalharam em cadeia: bancos faliram, empresas
          fecharam, o desemprego nos EUA atingiu 25% da população ativa até
          1933, e a contração do crédito americano derrubou economias ao redor
          do mundo. A <strong>Grande Depressão</strong> revelou as contradições
          do capitalismo liberal laissez-faire e inaugurou uma era de
          intervencionismo estatal.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Impactos da Crise de 1929 nos principais países</caption>
            <thead>
              <tr>
                <th>País</th>
                <th>Desemprego no pico</th>
                <th>Queda do PIB</th>
                <th>Resposta política</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Estados Unidos</td>
                <td>~25% (1933)</td>
                <td>-30%</td>
                <td>New Deal (Roosevelt)</td>
              </tr>
              <tr>
                <td>Alemanha</td>
                <td>~30% (1932)</td>
                <td>-16%</td>
                <td>Nazismo (Hitler)</td>
              </tr>
              <tr>
                <td>Reino Unido</td>
                <td>~22% (1932)</td>
                <td>-5%</td>
                <td>Protecionismo (Império)</td>
              </tr>
              <tr>
                <td>Brasil</td>
                <td>Êxodo rural intenso</td>
                <td>Queda do café 70%</td>
                <td>Revolução de 1930 (Vargas)</td>
              </tr>
              <tr>
                <td>França</td>
                <td>~15% (1935)</td>
                <td>-11%</td>
                <td>Frente Popular (esquerda)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Impacto no Brasil:</strong> O Brasil era altamente dependente
          das exportações de café. Com a crise, o preço internacional do café
          despencou, levando o governo a comprar e queimar estoques para
          sustentar artificialmente o preço. A crise cafeeira enfraqueceu a
          oligarquia paulista e abriu espaço para a Revolução de 1930 e a
          ascensão de Getúlio Vargas — demonstrando como choques externos
          redefinem políticas internas.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Resposta americana</span>
        <h2>2. O New Deal de Roosevelt</h2>
        <p>
          Franklin D. Roosevelt assumiu a presidência dos EUA em 1933 com o
          compromisso de um "novo acordo" (<em>New Deal</em>) para a nação. Sua
          estratégia rompeu com o dogma liberal do não-intervencionismo e se
          baseou nas ideias do economista britânico John Maynard Keynes, que
          defendia o gasto público como motor da demanda agregada em períodos
          de recessão. O Estado passou a ser agente ativo da economia.
        </p>
        <p>
          As principais medidas incluíram: criação da Securities and Exchange
          Commission (SEC) para regular o mercado de capitais; o Banking Act
          (1933), que separou bancos comerciais e de investimento; programas de
          obras públicas como a Tennessee Valley Authority (TVA), que gerou
          empregos e levou energia elétrica ao interior; o Social Security Act
          (1935), que criou o seguro-desemprego e a previdência social; e
          regulamentações trabalhistas que garantiram o direito de sindicalização.
          O New Deal não eliminou o desemprego — isso só ocorreria com a 2ª
          Guerra — mas estabilizou o sistema financeiro e restaurou a confiança
          pública na democracia capitalista.
        </p>
      </section>

      {/* ── SEÇÃO 3 — SVG Linha do Tempo ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cronologia visual</span>
        <h2>3. Linha do Tempo: 1929–1939</h2>
        <p>
          O período entre a Grande Depressão e o início da Segunda Guerra foi
          marcado pela ascensão dos totalitarismos e pelo colapso da ordem
          liberal estabelecida no pós-Primeira Guerra.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 800 220" width="100%" aria-label="Linha do tempo 1929 a 1939">
            {/* linha central */}
            <line x1="40" y1="110" x2="760" y2="110" stroke="#334155" strokeWidth="3" />
            {/* seta */}
            <polygon points="760,104 775,110 760,116" fill="#334155" />

            {/* marcos — topo */}
            {/* 1929 */}
            <line x1="80" y1="110" x2="80" y2="60" stroke="#ef4444" strokeWidth="2" />
            <circle cx="80" cy="110" r="6" fill="#ef4444" />
            <rect x="20" y="30" width="120" height="30" rx="4" fill="#fef2f2" stroke="#ef4444" />
            <text x="80" y="48" textAnchor="middle" fontSize="11" fill="#991b1b" fontWeight="bold">1929</text>
            <text x="80" y="60" textAnchor="middle" fontSize="10" fill="#7f1d1d">Crash de Wall St.</text>

            {/* 1931 */}
            <line x1="180" y1="110" x2="180" y2="160" stroke="#f97316" strokeWidth="2" />
            <circle cx="180" cy="110" r="6" fill="#f97316" />
            <rect x="120" y="162" width="120" height="30" rx="4" fill="#fff7ed" stroke="#f97316" />
            <text x="180" y="178" textAnchor="middle" fontSize="11" fill="#c2410c" fontWeight="bold">1931</text>
            <text x="180" y="190" textAnchor="middle" fontSize="10" fill="#9a3412">Crise bancária EU</text>

            {/* 1933 */}
            <line x1="290" y1="110" x2="290" y2="60" stroke="#8b5cf6" strokeWidth="2" />
            <circle cx="290" cy="110" r="6" fill="#8b5cf6" />
            <rect x="230" y="30" width="120" height="30" rx="4" fill="#f5f3ff" stroke="#8b5cf6" />
            <text x="290" y="48" textAnchor="middle" fontSize="11" fill="#5b21b6" fontWeight="bold">1933</text>
            <text x="290" y="60" textAnchor="middle" fontSize="10" fill="#4c1d95">Hitler chanceler</text>

            {/* 1935 */}
            <line x1="400" y1="110" x2="400" y2="160" stroke="#dc2626" strokeWidth="2" />
            <circle cx="400" cy="110" r="6" fill="#dc2626" />
            <rect x="340" y="162" width="120" height="30" rx="4" fill="#fef2f2" stroke="#dc2626" />
            <text x="400" y="178" textAnchor="middle" fontSize="11" fill="#991b1b" fontWeight="bold">1935</text>
            <text x="400" y="190" textAnchor="middle" fontSize="10" fill="#7f1d1d">Leis de Nuremberg</text>

            {/* 1936 */}
            <line x1="480" y1="110" x2="480" y2="60" stroke="#0891b2" strokeWidth="2" />
            <circle cx="480" cy="110" r="6" fill="#0891b2" />
            <rect x="420" y="30" width="120" height="30" rx="4" fill="#ecfeff" stroke="#0891b2" />
            <text x="480" y="48" textAnchor="middle" fontSize="11" fill="#155e75" fontWeight="bold">1936</text>
            <text x="480" y="60" textAnchor="middle" fontSize="10" fill="#164e63">Guerra Civil Esp.</text>

            {/* 1938 */}
            <line x1="600" y1="110" x2="600" y2="160" stroke="#7c3aed" strokeWidth="2" />
            <circle cx="600" cy="110" r="6" fill="#7c3aed" />
            <rect x="540" y="162" width="120" height="30" rx="4" fill="#f5f3ff" stroke="#7c3aed" />
            <text x="600" y="178" textAnchor="middle" fontSize="11" fill="#5b21b6" fontWeight="bold">1938</text>
            <text x="600" y="190" textAnchor="middle" fontSize="10" fill="#4c1d95">Noite dos Cristais</text>

            {/* 1939 */}
            <line x1="720" y1="110" x2="720" y2="60" stroke="#b91c1c" strokeWidth="2" />
            <circle cx="720" cy="110" r="6" fill="#b91c1c" />
            <rect x="660" y="30" width="100" height="30" rx="4" fill="#fef2f2" stroke="#b91c1c" />
            <text x="710" y="48" textAnchor="middle" fontSize="11" fill="#991b1b" fontWeight="bold">1939</text>
            <text x="710" y="60" textAnchor="middle" fontSize="10" fill="#7f1d1d">Início 2ª Guerra</text>
          </svg>
          <figcaption>Principais eventos do período entreguerras (1929–1939)</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Totalitarismo europeu</span>
        <h2>4. O Fascismo Italiano: Mussolini e o Estado Total</h2>
        <p>
          A Itália saiu da Primeira Guerra insatisfeita: apesar de estar entre
          os vencedores, não recebeu as compensações territoriais prometidas no
          Tratado de Londres (1915). Essa "vitória mutilada" (<em>vittoria
          mutilata</em>) alimentou um ressentimento nacionalista que Benito
          Mussolini soube capitalizar. Ex-socialista e veterano de guerra,
          Mussolini fundou em 1919 os <em>Fasci di Combattimento</em> — grupos
          paramilitares que exibiam o fascio, símbolo romano de força pela
          união. O <strong>squadrismo</strong> — milícias de camisas-pretas —
          atacava sindicatos, sedes de partidos de esquerda e greves operárias,
          com a cumplicidade do Estado e dos grandes proprietários rurais que
          temiam a revolução.
        </p>
        <p>
          Em outubro de 1922, Mussolini organizou a <strong>Marcha sobre Roma</strong>:
          cerca de 30.000 camisas-pretas convergiram à capital, e o rei Vítor
          Emanuel III, recusando decretar estado de sítio, nomeou Mussolini
          primeiro-ministro. Uma vez no poder, o Duce desmantelou a democracia:
          suprimiu partidos de oposição, criou a OVRA (polícia secreta),
          estabeleceu o partido único (PNF) e proclamou-se chefe absoluto do
          governo. O <strong>corporativismo</strong> fascista organizou a
          economia em corporações patronais e trabalhistas controladas pelo
          Estado, eliminando greves e lock-outs — uma terceira via entre
          capitalismo e socialismo, segundo a propaganda do regime.
        </p>
        <p>
          Na política externa, o fascismo revelou seu caráter imperialista e
          racista: em 1935, Mussolini invadiu a Etiópia, utilizando armas
          químicas (gás mostarda) contra populações civis desarmadas. A
          conquista da Etiópia evidenciou o <strong>racismo colonial</strong>
          europeu — a Liga das Nações aplicou sanções simbólicas e rapidamente
          as levantou, demonstrando a fragilidade do sistema de segurança
          coletiva do entreguerras.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Características do fascismo italiano</caption>
            <thead>
              <tr>
                <th>Dimensão</th>
                <th>Características</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Política</td>
                <td>Partido único (PNF), supressão das oposições, culto ao Duce</td>
              </tr>
              <tr>
                <td>Econômica</td>
                <td>Corporativismo, intervenção estatal, obras públicas</td>
              </tr>
              <tr>
                <td>Social</td>
                <td>Subordinação da mulher ao lar, militarização da juventude</td>
              </tr>
              <tr>
                <td>Repressão</td>
                <td>OVRA (polícia secreta), confinamento de opositores</td>
              </tr>
              <tr>
                <td>Ideologia</td>
                <td>Nacionalismo extremo, anticomunismo, culto à violência</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Ideologia racial</span>
        <h2>5. O Nazismo: Teoria Racial, Propaganda e Perseguição</h2>
        <p>
          A Alemanha derrotada na Primeira Guerra viveu o trauma do Tratado de
          Versalhes (1919): perdeu territórios (Alsácia-Lorena, o corredor
          polonês), suas colônias, o exército foi reduzido a 100.000 homens e
          foram impostas reparações de guerra gigantescas. A República de Weimar
          (1919–1933) nunca se consolidou: hiperinflação de 1923, golpe
          frustrado de Hitler (Putsch de Munique), e a Grande Depressão de 1929
          devastaram a confiança nas instituições democráticas.
        </p>
        <p>
          Adolf Hitler escreveu <em>Mein Kampf</em> ("Minha Luta") enquanto
          preso após o fracasso do putsch. O livro expunha sua visão de mundo:
          a história é uma luta permanente entre raças; os arianos (alemães)
          seriam a raça superior (<em>Herrenrasse</em>); os judeus seriam uma
          "raça inferior" conspirando para dominar o mundo; a Alemanha precisava
          de <em>Lebensraum</em> (espaço vital) a leste, colonizando os povos
          eslavos considerados "subumanos" (<em>Untermenschen</em>). Essa
          pseudociência racial tinha raízes no darwinismo social e no
          antissemitismo europeu secular, mas Hitler a radicalizou a extremos
          genocidas.
        </p>
        <p>
          A <strong>propaganda</strong> nazista foi sistematizada por Joseph
          Goebbels, ministro da Propaganda do Reich. O cinema (Leni Riefenstahl),
          o rádio, os cartazes, os desfiles e os rituais de massa transformaram
          o nazismo numa religião política. Os comícios de Nuremberg reuniam
          centenas de milhares de pessoas em espetáculos de luz e poder
          cuidadosamente encenados. A propaganda desumanizava judeus, ciganos,
          comunistas e dissidentes, preparando psicologicamente a população para
          a perseguição sistemática.
        </p>
        <p>
          As <strong>Leis de Nuremberg</strong> (1935) retiraram a cidadania
          alemã dos judeus, proibiram casamentos e relações sexuais entre judeus
          e alemães, e inauguraram a discriminação legal. A{" "}
          <strong>Noite dos Cristais</strong> (9–10 de novembro de 1938) foi um
          pogrom orquestrado pelo Estado: sinagogas foram incendiadas, lojas
          judaicas destruídas, cerca de 30.000 judeus deportados para campos de
          concentração. O nome vem dos cacos de vidro das vitrines quebradas.
          Esse evento marcou a escalada do terror estatal e antecipou o
          Holocausto.
        </p>
      </section>

      {/* ── SEÇÃO 6 — SVG Diagrama Totalitarismos ── */}
      <section className="lesson-section">
        <span className="section-kicker">Análise comparada</span>
        <h2>6. Comparando os Totalitarismos: Fascismo, Nazismo e Stalinismo</h2>
        <p>
          O conceito de <strong>totalitarismo</strong> foi desenvolvido pela
          filósofa Hannah Arendt em "As Origens do Totalitarismo" (1951). Para
          Arendt, nazismo e stalinismo eram fenômenos qualitativamente novos —
          não apenas ditaduras, mas regimes que buscavam transformar
          radicalmente a natureza humana e controlar todas as esferas da vida
          social por meio do terror, da propaganda e de uma ideologia
          totalizante.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 800 320" width="100%" aria-label="Diagrama comparativo dos totalitarismos">
            {/* Título */}
            <text x="400" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">
              Comparação: Fascismo · Nazismo · Stalinismo
            </text>

            {/* Colunas */}
            {/* Fascismo */}
            <rect x="30" y="40" width="220" height="260" rx="8" fill="#fff7ed" stroke="#f97316" strokeWidth="2" />
            <rect x="30" y="40" width="220" height="36" rx="8" fill="#f97316" />
            <text x="140" y="63" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">FASCISMO (Itália)</text>
            <text x="50" y="100" fontSize="11" fill="#431407">• Partido único (PNF)</text>
            <text x="50" y="118" fontSize="11" fill="#431407">• Corporativismo econômico</text>
            <text x="50" y="136" fontSize="11" fill="#431407">• Culto ao Duce</text>
            <text x="50" y="154" fontSize="11" fill="#431407">• Antissemitismo tardio (1938)</text>
            <text x="50" y="172" fontSize="11" fill="#431407">• Imperialismo colonial</text>
            <text x="50" y="190" fontSize="11" fill="#431407">• Aliança com a Igreja</text>
            <text x="50" y="208" fontSize="11" fill="#431407">• Menos racionalizado</text>
            <text x="50" y="226" fontSize="11" fill="#431407">• Sem extermínio sistemático</text>
            <text x="50" y="244" fontSize="11" fill="#431407">• Militarismo, expansionismo</text>
            <text x="50" y="262" fontSize="11" fill="#431407">• Origem: 1922</text>
            <text x="50" y="280" fontSize="11" fill="#431407">• Fim: 1945 (derrota)</text>

            {/* Nazismo */}
            <rect x="290" y="40" width="220" height="260" rx="8" fill="#fef2f2" stroke="#dc2626" strokeWidth="2" />
            <rect x="290" y="40" width="220" height="36" rx="8" fill="#dc2626" />
            <text x="400" y="63" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">NAZISMO (Alemanha)</text>
            <text x="310" y="100" fontSize="11" fill="#450a0a">• Partido único (NSDAP)</text>
            <text x="310" y="118" fontSize="11" fill="#450a0a">• Economia de guerra</text>
            <text x="310" y="136" fontSize="11" fill="#450a0a">• Culto ao Führer</text>
            <text x="310" y="154" fontSize="11" fill="#450a0a">• Racismo como base ideológica</text>
            <text x="310" y="172" fontSize="11" fill="#450a0a">• Lebensraum (espaço vital)</text>
            <text x="310" y="190" fontSize="11" fill="#450a0a">• Ateísmo estatal / neopagão</text>
            <text x="310" y="208" fontSize="11" fill="#450a0a">• Terror altamente burocrático</text>
            <text x="310" y="226" fontSize="11" fill="#450a0a">• Holocausto: extermínio em massa</text>
            <text x="310" y="244" fontSize="11" fill="#450a0a">• SS, Gestapo, campos nazistas</text>
            <text x="310" y="262" fontSize="11" fill="#450a0a">• Origem: 1933</text>
            <text x="310" y="280" fontSize="11" fill="#450a0a">• Fim: 1945 (derrota)</text>

            {/* Stalinismo */}
            <rect x="550" y="40" width="220" height="260" rx="8" fill="#f0f9ff" stroke="#0369a1" strokeWidth="2" />
            <rect x="550" y="40" width="220" height="36" rx="8" fill="#0369a1" />
            <text x="660" y="63" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">STALINISMO (URSS)</text>
            <text x="570" y="100" fontSize="11" fill="#0c4a6e">• Partido único (PCUS)</text>
            <text x="570" y="118" fontSize="11" fill="#0c4a6e">• Economia planificada (5 anos)</text>
            <text x="570" y="136" fontSize="11" fill="#0c4a6e">• Culto à personalidade</text>
            <text x="570" y="154" fontSize="11" fill="#0c4a6e">• Internacionalismo proletário</text>
            <text x="570" y="172" fontSize="11" fill="#0c4a6e">• Expansão por satélites</text>
            <text x="570" y="190" fontSize="11" fill="#0c4a6e">• Ateísmo de Estado</text>
            <text x="570" y="208" fontSize="11" fill="#0c4a6e">• Gulags (campos de trabalho)</text>
            <text x="570" y="226" fontSize="11" fill="#0c4a6e">• Purgas políticas (1936–38)</text>
            <text x="570" y="244" fontSize="11" fill="#0c4a6e">• NKVD (polícia secreta)</text>
            <text x="570" y="262" fontSize="11" fill="#0c4a6e">• Origem: 1924 (Stalin)</text>
            <text x="570" y="280" fontSize="11" fill="#0c4a6e">• Fim: 1953 (morte de Stalin)</text>
          </svg>
          <figcaption>Diagrama comparativo dos três principais regimes totalitários do século XX</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Semelhanças entre os totalitarismos</caption>
            <thead>
              <tr>
                <th>Elemento</th>
                <th>Fascismo</th>
                <th>Nazismo</th>
                <th>Stalinismo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Partido único</td>
                <td>PNF</td>
                <td>NSDAP</td>
                <td>PCUS</td>
              </tr>
              <tr>
                <td>Polícia secreta</td>
                <td>OVRA</td>
                <td>Gestapo / SS</td>
                <td>NKVD / KGB</td>
              </tr>
              <tr>
                <td>Culto ao líder</td>
                <td>Duce (Mussolini)</td>
                <td>Führer (Hitler)</td>
                <td>Vozd (Stalin)</td>
              </tr>
              <tr>
                <td>Censura / propaganda</td>
                <td>Sim</td>
                <td>Goebbels / Riefenstahl</td>
                <td>Agitprop / TASS</td>
              </tr>
              <tr>
                <td>Terror de Estado</td>
                <td>Sim</td>
                <td>Sim (Holocausto)</td>
                <td>Sim (Gulags, purgas)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Direitos humanos</span>
        <h2>7. Antissemitismo e Perseguição às Minorias</h2>
        <p>
          O antissemitismo europeu tem raízes medievais, mas o nazismo o
          transformou em política de Estado radicalmente nova. Os judeus foram
          progressivamente despojados de direitos (1933–1938), forçados ao
          exílio ou ao confinamento em guetos, e finalmente destinados ao
          extermínio em massa na chamada <strong>"Solução Final"</strong>{" "}
          (<em>Endlösung</em>), decidida na Conferência de Wannsee (janeiro de
          1942). Os campos de extermínio — Auschwitz-Birkenau, Treblinka,
          Sobibor, Belzec — funcionavam como fábricas da morte, com câmaras de
          gás industriais. Ao final da guerra, cerca de 6 milhões de judeus
          haviam sido assassinados — dois terços dos judeus europeus.
        </p>
        <p>
          Mas o genocídio nazista não se limitou aos judeus: aproximadamente
          220.000 ciganos (Roma e Sinti) foram mortos no Porajmos (genocídio
          cigano); cerca de 270.000 pessoas com deficiências foram exterminadas
          no Programa T4 de "eutanásia"; homossexuais, prisioneiros políticos,
          Testemunhas de Jeová e eslavos (poloneses, russos) também foram
          perseguidos e assassinados. A lógica racial nazista produziu uma
          hierarquia de vítimas baseada em critérios pseudocientíficos de
          "pureza racial".
        </p>
        <p>
          Para o ENEM, é fundamental compreender o Holocausto não como anomalia
          ou acidente histórico, mas como resultado de processos históricos
          identificáveis: o antissemitismo secular, o racismo científico do
          século XIX, a crise econômica, a propaganda sistemática e a cumplicidade
          ou omissão de governos e populações. Essa análise estrutural é a base
          dos direitos humanos contemporâneos — a Declaração Universal de 1948
          foi, em grande medida, uma resposta direta aos crimes nazistas.
        </p>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto brasileiro</span>
        <h2>8. O Integralismo Brasileiro e a Influência do Fascismo</h2>
        <p>
          O fascismo europeu teve sua expressão brasileira na Ação Integralista
          Brasileira (AIB), fundada em 1932 por Plínio Salgado. Os integralistas
          (camisas-verdes) adotavam o sigma (Σ) como símbolo, pregavam um
          Estado corporativista, combatiam o comunismo e o liberalismo, e tinham
          nuances de antissemitismo. A AIB chegou a ter entre 200.000 e 400.000
          membros — o maior movimento de massas da direita na América Latina até
          então. Entretanto, quando tentaram dar um golpe em 1938 (o "Putsch
          Integralista"), Vargas os reprimiu: o Estado Novo não estava disposto
          a dividir o poder com nenhum movimento autônomo, mesmo de direita.
        </p>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Análise ENEM</span>
        <h2>9. O Racismo Colonial e o Tema Transversal da Democracia</h2>
        <p>
          Uma das perspectivas mais importantes para o ENEM é perceber que o
          racismo não foi uma invenção nazista: ele foi, durante séculos, a
          justificativa ideológica do colonialismo europeu. A ocupação da Etiópia
          por Mussolini em 1935, o uso de gás mostarda contra populações africanas,
          a indiferença das potências coloniais diante desse crime — tudo isso
          revela a continuidade entre o racismo colonial e o racismo nazista.
          Frantz Fanon, Aimé Césaire e Hannah Arendt apontaram essa conexão:
          o totalitarismo europeu aplicou à Europa os métodos que a Europa havia
          aplicado na África e na Ásia por séculos.
        </p>
        <p>
          Para a democracia, o nazismo representa o perigo maior: um regime que
          chegou ao poder usando instrumentos democráticos (eleições, parlamento)
          antes de destruir a própria democracia. Hitler foi nomeado chanceler
          por meios legais em 1933 e, em poucos meses, transformou a Alemanha
          em uma ditadura totalitária. Esse processo — hoje chamado de
          "erosão democrática" — é estudado pela ciência política contemporânea
          como alerta para democracias atuais.
        </p>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>10. Síntese: Causas Estruturais do Totalitarismo</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Causas estruturais do totalitarismo nos anos 1920–1930</caption>
            <thead>
              <tr>
                <th>Fator</th>
                <th>Como contribuiu para o totalitarismo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Trauma da 1ª Guerra</td>
                <td>Ressentimento nacional (Alemanha e Itália), instabilidade política</td>
              </tr>
              <tr>
                <td>Crise de 1929</td>
                <td>Desemprego em massa, desconfiança no liberalismo econômico</td>
              </tr>
              <tr>
                <td>Medo do comunismo</td>
                <td>Burgue​sia e latifundiários apoiaram movimentos fascistas</td>
              </tr>
              <tr>
                <td>Fragilidade democrática</td>
                <td>Instituições jovens sem tradição liberal consolidada</td>
              </tr>
              <tr>
                <td>Racismo científico séc. XIX</td>
                <td>Legitimação "científica" das hierarquias raciais</td>
              </tr>
              <tr>
                <td>Propaganda e mídia de massa</td>
                <td>Rádio e cinema amplificaram mensagens totalitárias</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Ponto-chave ENEM:</strong> O fascismo e o nazismo não foram
          fenômenos irracionais ou inexplicáveis — tiveram causas históricas,
          econômicas, sociais e culturais identificáveis. O exame cobra a
          capacidade de relacionar esses fatores e de identificar suas
          consequências nos direitos humanos. O Holocausto é o resultado mais
          radical da combinação entre racismo, crise econômica, totalitarismo e
          omissão internacional.
        </div>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Exercícios</h2>

                <Exercise
          level="Básico"
          title="Exercício 1"
          statement={<p>A Grande Depressão de 1929 teve início com o colapso da Bolsa de Valores de Nova York. Quais foram as principais causas estruturais desse colapso?</p>}
          options={[
            { letter: "a", text: "Excesso de regulamentação bancária e queda nas exportações agrícolas." },
            { letter: "b", text: "Superprodução industrial, especulação financeira com crédito fácil e fragilidade do sistema bancário.", correct: true },
            { letter: "c", text: "Aumento excessivo dos impostos sobre importações e falência do sistema de saúde." },
            { letter: "d", text: "Conflitos políticos entre Democratas e Republicanos e retirada dos EUA da Liga das Nações." },
            { letter: "e", text: "Queda nas reservas de ouro e intervenção excessiva do Estado na economia." },
          ]}
          resolution={<p>A Crise de 1929 resultou da combinação de superprodução industrial (os mercados estavam saturados), especulação financeira exacerbada (ações compradas com crédito sem lastro produtivo) e fragilidade do sistema bancário (bancos expostos às perdas da bolsa). A regulamentação era mínima — o laissez-faire dominava. As demais alternativas apresentam causas secundárias ou incorretas.</p>}
        />

                <Exercise
          level="Intermediário"
          title="Exercício 2"
          statement={<p>O New Deal de Franklin Roosevelt representou uma ruptura com qual paradigma econômico e por quê foi considerado uma resposta inovadora à Grande Depressão?</p>}
          options={[
            { letter: "a", text: "Rompeu com o keynesianismo ao defender o livre mercado como único motor do crescimento." },
            { letter: "b", text: "Rompeu com o socialismo ao privatizar empresas públicas e reduzir impostos sobre grandes fortunas." },
            { letter: "c", text: "Rompeu com o laissez-faire liberal ao expandir o papel do Estado na economia, gerando empregos e regulando mercados.", correct: true },
            { letter: "d", text: "Rompeu com o protecionismo ao abrir os mercados americanos ao comércio internacional." },
            { letter: "e", text: "Rompeu com o federalismo ao centralizar todo poder econômico no governo federal sem consultar os estados." },
          ]}
          resolution={<p>O New Deal representou a ruptura com o dogma do laissez-faire (não-intervenção estatal) dominante no liberalismo clássico. Inspirado nas ideias de Keynes, Roosevelt expandiu massivamente o papel do Estado: obras públicas geraram empregos, a SEC regulou o mercado financeiro, o Social Security Act criou proteção social. Essa intervenção estatal salvou o capitalismo de sua própria crise — não aboliu a propriedade privada, mas reformou profundamente o sistema.</p>}
        />

                <Exercise
          level="Avançado"
          title="Exercício 3"
          statement={<p>Hannah Arendt, em 'As Origens do Totalitarismo' (1951), argumentou que nazismo e stalinismo representavam fenômenos qualitativamente novos na história política. Qual é o principal argumento que distingue o totalitarismo das ditaduras tradicionais?</p>}
          options={[
            { letter: "a", text: "O totalitarismo é mais violento porque utiliza armas modernas, enquanto as ditaduras tradicionais usam apenas prisões." },
            { letter: "b", text: "O totalitarismo busca transformar radicalmente a natureza humana e controlar todas as esferas da vida pelo terror e pela ideologia totalizante, não apenas manter o poder político.", correct: true },
            { letter: "c", text: "O totalitarismo é um regime de esquerda, enquanto as ditaduras tradicionais são de direita, sendo essa a diferença fundamental." },
            { letter: "d", text: "O totalitarismo depende de apoio externo de outros países, enquanto as ditaduras são fenômenos puramente internos." },
            { letter: "e", text: "O totalitarismo é caracterizado apenas pelo uso de propaganda, enquanto as ditaduras tradicionais utilizam apenas a repressão física." },
          ]}
          resolution={<p>Para Arendt, ditaduras tradicionais buscam apenas manter o poder e a obediência — permitem certa esfera privada desde que os cidadãos não desafiem o regime. O totalitarismo é qualitativamente diferente: busca transformar a consciência humana, eliminar toda espontaneidade e vida privada, mobilizar as massas por meio de ideologia totalizante e terror permanente. O partido único penetra em todas as instituições, inclusive família e amizades. O Gulag e os campos de concentração nazistas não eram apenas punição — eram instrumentos de destruição da personalidade humana.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 4"
          statement={<p>(ENEM adaptado) 'Não pedimos nada ao Estado que não sejamos capazes de dar ao Estado.' Esta frase sintetiza a lógica do corporativismo fascista, que subordinava os interesses individuais e de classe ao interesse nacional. Nessa perspectiva, qual era a função das corporações fascistas?</p>}
          options={[
            { letter: "a", text: "Garantir a autonomia dos sindicatos operários para negociar com os patrões sem interferência estatal." },
            { letter: "b", text: "Promover a concorrência entre empresas privadas para aumentar a eficiência produtiva." },
            { letter: "c", text: "Subordinar tanto trabalhadores quanto empresários a organismos controlados pelo Estado, eliminando conflitos de classe em nome da nação.", correct: true },
            { letter: "d", text: "Distribuir lucros empresariais igualmente entre trabalhadores e proprietários sob supervisão da Igreja Católica." },
            { letter: "e", text: "Transferir a gestão das empresas privadas para o controle direto do partido fascista." },
          ]}
          resolution={<p>O corporativismo fascista criou organismos (corporações) que reuniam representantes de empregadores e empregados sob controle estatal, com a finalidade de eliminar a luta de classes e subordinar ambos ao interesse nacional — definido pelo regime. Greves e lockouts eram proibidos. Isso atendia tanto à burguesia (que temia o comunismo) quanto criava uma aparência de 'harmonia social'. Na prática, era uma forma de controle estatal da economia sem abolir a propriedade privada.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 5"
          statement={<p>(Tema: racismo e direitos humanos) A invasão italiana da Etiópia em 1935, com uso de gás mostarda contra civis, e o extermínio nazista de judeus e outros grupos revelam uma continuidade histórica apontada por intelectuais como Aimé Césaire e Hannah Arendt. Qual é essa continuidade?</p>}
          options={[
            { letter: "a", text: "Ambos os regimes eram financiados pelos mesmos banqueiros internacionais, revelando a continuidade do capitalismo financeiro." },
            { letter: "b", text: "O racismo totalitário europeu aplicou à Europa métodos que o colonialismo europeu havia praticado durante séculos contra povos africanos e asiáticos.", correct: true },
            { letter: "c", text: "Tanto o fascismo quanto o nazismo foram influenciados diretamente pelas teorias econômicas de John Maynard Keynes." },
            { letter: "d", text: "A violência colonial europeia foi uma resposta defensiva às agressões dos impérios africano e asiático." },
            { letter: "e", text: "A continuidade está no uso da tecnologia industrial para a guerra, aspecto presente tanto na colonização quanto nos regimes totalitários." },
          ]}
          resolution={<p>Aimé Césaire ('Discurso sobre o Colonialismo', 1950) e Hannah Arendt ('As Origens do Totalitarismo', 1951) argumentaram que o totalitarismo europeu não surgiu do nada: ele aplicou à própria Europa os métodos que o colonialismo havia testado e legitimado na África, Ásia e Américas durante séculos — trabalho forçado, desumanização racial, extermínio. O que chocou os europeus no nazismo foi ver na Europa o que europeus faziam no resto do mundo há séculos. Esse argumento é central nos estudos pós-coloniais e nos debates sobre racismo estrutural.</p>}
        />
      </section>
    </article>
  );
}
