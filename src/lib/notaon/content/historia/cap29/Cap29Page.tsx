"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap29Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 29</span>
          <h1>Revolução Francesa</h1>
          <p>
            "Liberdade, Igualdade, Fraternidade" — o lema da Revolução Francesa
            ecoou pelo mundo inteiro e ainda ressoa no século XXI. Entre 1789 e
            1799, a França passou por uma transformação radical: de monarquia
            absoluta a república, do absolutismo ao Terror e ao Diretório. A
            Revolução criou conceitos que moldaram a política moderna — cidadania,
            soberania popular, direitos humanos — e inspirou movimentos de
            libertação em todo o mundo, incluindo o Haiti. O ENEM cobra com
            frequência as causas, fases, personagens e o legado global da
            Revolução Francesa.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto</span>
        <h2>1. A França às Vésperas da Revolução</h2>
        <p>
          A França de 1789 era uma monarquia absoluta governada por{" "}
          <strong>Luís XVI</strong> — monarca indeciso, sem autoridade política
          efetiva. O país enfrentava uma crise simultânea em várias frentes:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💸</span>
            <h3>Crise Financeira</h3>
            <p>
              Dívidas acumuladas com a <strong>Guerra dos Sete Anos</strong>{" "}
              (1756–63) e com o apoio à Independência dos EUA (1778–83)
              levaram a França à beira da falência. O Estado não conseguia
              pagar seus funcionários nem honrar os juros da dívida.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌾</span>
            <h3>Crise Agrícola</h3>
            <p>
              A <strong>má colheita de 1788</strong> causou escassez de grãos e
              disparou o preço do pão — o alimento básico das classes populares.
              Em algumas cidades, o pão chegou a consumir 90% do salário de um
              trabalhador.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚖️</span>
            <h3>Desigualdade Fiscal</h3>
            <p>
              O <strong>Clero</strong> e a <strong>Nobreza</strong> — juntos,
              menos de 3% da população — eram isentos de impostos. O peso
              tributário todo caía sobre o <strong>Terceiro Estado</strong>:
              97% dos franceses.
            </p>
          </div>
          <div className="lesson-card">
            <span>📚</span>
            <h3>Influência Iluminista</h3>
            <p>
              As ideias de <strong>Voltaire</strong>, <strong>Rousseau</strong>{" "}
              e <strong>Montesquieu</strong> circulavam amplamente entre a
              burguesia francesa e criavam um vocabulário crítico para questionar
              o absolutismo e a desigualdade.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 — SVG TRÊS ESTADOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura Social</span>
        <h2>2. Os Três Estados da Sociedade Francesa</h2>
        <p>
          A sociedade francesa do <em>Antigo Regime</em> era organizada em três
          ordens ou "estados". Essa divisão determinava quem pagava impostos,
          quem tinha privilégios e quem tinha direitos políticos — ou nenhum deles.
        </p>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 560 320"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Diagrama dos três estados franceses mostrando proporção de população e impostos"
          >
            <rect x="0" y="0" width="560" height="320" fill="#fafafa" rx="8" />
            <text x="280" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">Os Três Estados — Antigo Regime Francês</text>

            {/* Primeiro Estado — Clero */}
            <rect x="30" y="50" width="140" height="200" fill="#7b1fa2" rx="6" />
            <text x="100" y="80" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">1º Estado</text>
            <text x="100" y="96" textAnchor="middle" fontSize="11" fill="#ce93d8">Clero</text>
            <text x="100" y="120" textAnchor="middle" fontSize="10" fill="white">0,5% da</text>
            <text x="100" y="134" textAnchor="middle" fontSize="10" fill="white">população</text>
            <text x="100" y="160" textAnchor="middle" fontSize="10" fill="#f8bbd9">Isento de impostos</text>
            <text x="100" y="176" textAnchor="middle" fontSize="10" fill="#f8bbd9">10% das terras</text>
            <text x="100" y="192" textAnchor="middle" fontSize="10" fill="#f8bbd9">Cobra o dízimo</text>
            <text x="100" y="225" textAnchor="middle" fontSize="22" fill="white">⛪</text>

            {/* Segundo Estado — Nobreza */}
            <rect x="210" y="50" width="140" height="200" fill="#1565c0" rx="6" />
            <text x="280" y="80" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">2º Estado</text>
            <text x="280" y="96" textAnchor="middle" fontSize="11" fill="#90caf9">Nobreza</text>
            <text x="280" y="120" textAnchor="middle" fontSize="10" fill="white">1,5% da</text>
            <text x="280" y="134" textAnchor="middle" fontSize="10" fill="white">população</text>
            <text x="280" y="160" textAnchor="middle" fontSize="10" fill="#bbdefb">Isenta de impostos</text>
            <text x="280" y="176" textAnchor="middle" fontSize="10" fill="#bbdefb">Privilégios feudais</text>
            <text x="280" y="192" textAnchor="middle" fontSize="10" fill="#bbdefb">Cargos militares</text>
            <text x="280" y="225" textAnchor="middle" fontSize="22" fill="white">👑</text>

            {/* Terceiro Estado */}
            <rect x="390" y="50" width="140" height="200" fill="#c62828" rx="6" />
            <text x="460" y="80" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">3º Estado</text>
            <text x="460" y="96" textAnchor="middle" fontSize="11" fill="#ef9a9a">Povo</text>
            <text x="460" y="120" textAnchor="middle" fontSize="10" fill="white">98% da</text>
            <text x="460" y="134" textAnchor="middle" fontSize="10" fill="white">população</text>
            <text x="460" y="160" textAnchor="middle" fontSize="10" fill="#ffcdd2">PAGA TODOS</text>
            <text x="460" y="174" textAnchor="middle" fontSize="10" fill="#ffcdd2">OS IMPOSTOS</text>
            <text x="460" y="190" textAnchor="middle" fontSize="10" fill="#ffcdd2">Sem direitos políticos</text>
            <text x="460" y="225" textAnchor="middle" fontSize="22" fill="white">🌾</text>

            {/* Legenda */}
            <text x="30" y="280" fontSize="10" fill="#7b1fa2" fontWeight="bold">Clero:</text>
            <text x="72" y="280" fontSize="10" fill="#555">dízimo + terras + sem impostos</text>
            <text x="30" y="296" fontSize="10" fill="#1565c0" fontWeight="bold">Nobreza:</text>
            <text x="82" y="296" fontSize="10" fill="#555">privilégios feudais + sem impostos</text>
            <text x="280" y="280" fontSize="10" fill="#c62828" fontWeight="bold">3º Estado:</text>
            <text x="338" y="280" fontSize="10" fill="#555">burguesia + camponeses + artesãos</text>
            <text x="280" y="296" fontSize="10" fill="#555">= 97–98% da pop., todos os impostos, zero privilégios</text>
          </svg>
          <figcaption>Os três estados da sociedade francesa no Antigo Regime: distribuição de população, privilégios e carga tributária</figcaption>
        </figure>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Os Três Estados da França — Antigo Regime</caption>
            <thead>
              <tr>
                <th>Estado</th>
                <th>Composição</th>
                <th>% da população</th>
                <th>Impostos</th>
                <th>Privilégios</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1º Estado (Clero)</td>
                <td>Bispos, padres, abades, freiras</td>
                <td>~0,5%</td>
                <td>Isento; cobra o dízimo</td>
                <td>10% das terras; tribunais próprios</td>
              </tr>
              <tr>
                <td>2º Estado (Nobreza)</td>
                <td>Duques, condes, marqueses, barões</td>
                <td>~1,5%</td>
                <td>Isento; alguns direitos feudais</td>
                <td>Cargos militares e civis reservados; isenção fiscal</td>
              </tr>
              <tr>
                <td>3º Estado (Povo)</td>
                <td>Burguesia, camponeses, artesãos, proletariado</td>
                <td>~98%</td>
                <td>Pagam TODOS os impostos</td>
                <td>Nenhum; sem representação política efetiva</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Estopim</span>
        <h2>3. Os Estados Gerais e a Assembleia Nacional (1789)</h2>
        <p>
          Com a crise financeira incontrolável, Luís XVI convocou os{" "}
          <strong>Estados Gerais</strong> em maio de 1789 — a primeira reunião
          desde 1614. O objetivo era obter aprovação para novos impostos. O
          impasse foi imediato: os dois primeiros estados queriam votar{" "}
          <strong>por ordem</strong> (cada estado tem um voto — nobreza e clero
          sempre venceriam 2 a 1). O Terceiro Estado exigiu o voto{" "}
          <strong>por cabeça</strong> (cada representante um voto — teriam
          maioria, pois representavam o dobro dos outros dois estados somados).
        </p>
        <p>
          Em junho de 1789, os representantes do Terceiro Estado — liderados
          pelo abade <strong>Sieyès</strong> (autor do panfleto "O Que é o
          Terceiro Estado?") — se declararam{" "}
          <strong>Assembleia Nacional</strong>, representando a nação francesa.
          Quando Luís XVI fechou a sala de reuniões, os deputados se reuniram
          numa quadra de tênis coberta e fizeram o celebrado{" "}
          <strong>Juramento do Jogo da Péla</strong>: não se dispersariam sem
          dar uma Constituição à França.
        </p>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">14 de Julho</span>
        <h2>4. A Queda da Bastilha (14/07/1789)</h2>
        <p>
          Com rumores de que Luís XVI concentrava tropas em Paris para dissolver
          a Assembleia, o povo parisiense se mobilizou. Em 14 de julho de 1789,
          uma multidão tomou a <strong>Bastilha</strong> — fortaleza medieval no
          centro de Paris que funcionava como prisão e depósito de armas, símbolo
          do poder absolutista.
        </p>
        <p>
          A ironia é que havia apenas <strong>7 presos</strong> na Bastilha
          naquele dia. Mas o valor simbólico era imenso: o povo havia derrubado
          o símbolo do absolutismo. O governador da Bastilha, De Launay, foi
          decapitado; sua cabeça foi exibida em um pique pelas ruas. O{" "}
          <strong>14 de julho</strong> tornou-se o feriado nacional da França —
          o "Dia da Bastilha" — celebrado até hoje.
        </p>
        <div className="lesson-highlight">
          <strong>Atenção ENEM:</strong> A Bastilha não foi tomada por ter muitos
          presos — era um símbolo. O que importa é o significado político: o povo
          armado desafiando e derrubando o poder absoluto do rei.
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Documentos Fundamentais</span>
        <h2>5. As Grandes Reformas de 1789 e a Declaração dos Direitos</h2>
        <p>
          Na noite de <strong>4 de agosto de 1789</strong>, numa sessão histórica,
          os nobres e clérigos da Assembleia Nacional renunciaram voluntariamente
          a seus privilégios feudais — abolição dos direitos senhoriais, do dízimo,
          das justiças senhoriais. Foi o fim do Antigo Regime em uma noite.
        </p>
        <p>
          Em <strong>26 de agosto de 1789</strong>, a Assembleia aprovou a{" "}
          <strong>Declaração dos Direitos do Homem e do Cidadão</strong> — um
          dos documentos mais importantes da história política ocidental.
          Inspirada em Locke e Rousseau, ela proclamava: liberdade, igualdade,
          propriedade, segurança e resistência à opressão como direitos naturais
          e imprescritíveis. A soberania residia na nação.
        </p>
        <p>
          No entanto, a Declaração excluía as mulheres. Em resposta, a escritora
          e filósofa <strong>Olympe de Gouges</strong> publicou em 1791 a{" "}
          <em>Declaração dos Direitos da Mulher e da Cidadã</em> — um dos
          primeiros textos feministas da história. Ela foi guilhotinada em 1793,
          durante o Terror.
        </p>
      </section>

      {/* ── SEÇÃO 6 — SVG LINHA DO TEMPO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fases</span>
        <h2>6. As Fases da Revolução (1789–1799)</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 680 260"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Linha do tempo das fases da Revolução Francesa de 1789 a 1799"
          >
            <rect x="0" y="0" width="680" height="260" fill="#fafafa" rx="8" />
            <text x="340" y="24" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#333">Fases da Revolução Francesa (1789–1799)</text>

            {/* Linha */}
            <line x1="30" y1="120" x2="660" y2="120" stroke="#555" strokeWidth="2.5" />
            <polygon points="660,114 675,120 660,126" fill="#555" />

            {/* Fase 1 — Assembleia Constituinte */}
            <rect x="30" y="80" width="130" height="40" fill="#1565c0" rx="4" />
            <text x="95" y="96" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Assembleia</text>
            <text x="95" y="110" textAnchor="middle" fontSize="9" fill="#bbdefb">Constituinte 1789–91</text>
            <text x="95" y="140" textAnchor="middle" fontSize="8" fill="#555">Burguesia moderada</text>
            <text x="95" y="152" textAnchor="middle" fontSize="8" fill="#555">Monarquia constitucional</text>

            {/* Fase 2 — Assembleia Legislativa */}
            <rect x="175" y="80" width="130" height="40" fill="#388e3c" rx="4" />
            <text x="240" y="96" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Assembleia</text>
            <text x="240" y="110" textAnchor="middle" fontSize="9" fill="#c8e6c9">Legislativa 1791–92</text>
            <text x="240" y="140" textAnchor="middle" fontSize="8" fill="#555">Guerra com Áustria</text>
            <text x="240" y="152" textAnchor="middle" fontSize="8" fill="#555">Luís XVI suspeito</text>

            {/* Fase 3 — Convenção */}
            <rect x="320" y="55" width="130" height="65" fill="#c62828" rx="4" />
            <text x="385" y="75" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Convenção</text>
            <text x="385" y="89" textAnchor="middle" fontSize="9" fill="#ffcdd2">Nacional 1792–95</text>
            <text x="385" y="103" textAnchor="middle" fontSize="8" fill="white">República proclamada</text>
            <text x="385" y="115" textAnchor="middle" fontSize="8" fill="white">Guilhotina de Luís XVI</text>
            <text x="385" y="127" textAnchor="middle" fontSize="8" fill="white">Terror Jacobino</text>
            <text x="385" y="145" textAnchor="middle" fontSize="8" fill="#555">40.000 executados</text>
            <text x="385" y="157" textAnchor="middle" fontSize="8" fill="#555">Termidor (07/1794)</text>

            {/* Fase 4 — Diretório */}
            <rect x="465" y="80" width="130" height="40" fill="#f57c00" rx="4" />
            <text x="530" y="96" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Diretório</text>
            <text x="530" y="110" textAnchor="middle" fontSize="9" fill="#ffe0b2">1795–1799</text>
            <text x="530" y="140" textAnchor="middle" fontSize="8" fill="#555">Reação conservadora</text>
            <text x="530" y="152" textAnchor="middle" fontSize="8" fill="#555">Corrupção, instabilidade</text>

            {/* Setas para Napoleão */}
            <line x1="595" y1="120" x2="645" y2="120" stroke="#555" strokeWidth="1.5" />
            <text x="648" y="116" fontSize="8" fill="#555">→ Napoleão</text>
            <text x="648" y="128" fontSize="8" fill="#555">(1799)</text>
          </svg>
          <figcaption>Linha do tempo das fases da Revolução Francesa (1789–1799)</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Terror</span>
        <h2>7. O Terror Jacobino e o Termidor (1793–1794)</h2>
        <p>
          A Convenção Nacional (1792–95) foi dominada pelos{" "}
          <strong>jacobinos</strong> — facção radical de Robespierre — que
          representavam a pequena burguesia e as camadas populares. Em 1793, com
          a França cercada por guerras externas (Áustria, Prússia, Grã-Bretanha,
          Espanha) e por guerras internas (Revolta da Vendeia), o{" "}
          <strong>Comitê de Salvação Pública</strong> assumiu poderes ditatoriais.
        </p>
        <p>
          O período conhecido como <strong>"Terror"</strong> (setembro 1793 –
          julho 1794) foi marcado pela guilhotinação em massa de suspeitos:
          aristocratas, padres refratários, girondinos moderados, mas também
          jacobinos rivais (como Danton). Estima-se que{" "}
          <strong>40.000 pessoas foram guilhotinadas</strong> em 10 meses.
          A Rainha Maria Antonieta foi executada em outubro de 1793.
        </p>
        <p>
          Em <strong>27 de julho de 1794 (9 Termidor do ano II)</strong>,{" "}
          membros da própria Convenção se voltaram contra Robespierre, que foi
          preso e guilhotinado no dia seguinte. A frase que resume o período é
          atribuída ao próprio movimento:{" "}
          <em>"a revolução devora seus filhos"</em> — Robespierre aplicou a
          guilhotina até que ela o atingiu.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <caption>Personagens do Terror Jacobino</caption>
            <thead>
              <tr>
                <th>Personagem</th>
                <th>Papel</th>
                <th>Destino</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maximilien Robespierre</td>
                <td>Líder do Comitê de Salvação Pública; "o Incorruptível"</td>
                <td>Guilhotinado em 28/07/1794 (Termidor)</td>
              </tr>
              <tr>
                <td>Georges Danton</td>
                <td>Orador popular; moderado jacobino que pediu fim do Terror</td>
                <td>Guilhotinado em abril de 1794 por Robespierre</td>
              </tr>
              <tr>
                <td>Jean-Paul Marat</td>
                <td>Jornalista radical, "Amigo do Povo"; voz das massas</td>
                <td>Assassinado na banheira por Charlotte Corday (1793)</td>
              </tr>
              <tr>
                <td>Olympe de Gouges</td>
                <td>Escritora; autora da Declaração dos Direitos da Mulher</td>
                <td>Guilhotinada em novembro de 1793</td>
              </tr>
              <tr>
                <td>Luís XVI</td>
                <td>Rei da França; deposto com a república</td>
                <td>Guilhotinado em 21/01/1793</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Revolução Haitiana</span>
        <h2>8. A Revolução Haitiana (1791–1804): A Revolução dos Esquecidos</h2>
        <p>
          <strong>Saint-Domingue</strong> (atual Haiti) era a colônia mais rica
          da França — chamada de "pérola das Antilhas". Em 1789, havia
          aproximadamente <strong>500.000 pessoas escravizadas</strong>{" "}
          trabalhando nas plantações de açúcar e café que abasteciam a Europa.
          Quando a Revolução Francesa proclamou que "todos os homens são criados
          iguais", os escravizados de Saint-Domingue foram ouvir a mensagem —
          e tomá-la a sério.
        </p>
        <p>
          Em <strong>agosto de 1791</strong>, uma insurreição generalizada
          explodiu, liderada por <strong>Toussaint Louverture</strong> —
          ex-escravizado, militar estrategicamente brilhante, apelidado de
          "Napoleão Negro". A rebelião foi brutal de ambos os lados. Os
          franceses enviaram expedição para reconquistar a colônia (1801–02),
          mas o exército de Napoleão foi dizimado pela{" "}
          <strong>febre amarela</strong> — a doença matou mais do que as
          batalhas. Toussaint foi capturado por traição e morreu preso na
          França em 1803.
        </p>
        <p>
          Seu sucessor, <strong>Jean-Jacques Dessalines</strong>, completou a
          luta. Em <strong>1º de janeiro de 1804</strong>, o Haiti proclamou
          sua independência — tornando-se:
        </p>
        <ul>
          <li>O <strong>primeiro Estado independente da América Latina</strong></li>
          <li>A <strong>primeira república negra do mundo</strong></li>
          <li>O <strong>único caso de independência por revolução escrava bem-sucedida</strong> na história</li>
        </ul>
        <p>
          Em 1825, a França reconheceu a independência haitiana em troca de uma
          indenização de <strong>150 milhões de francos</strong> — que o Haiti
          pagou até a década de 1950, e cujo endividamento consequente contribui
          para a pobreza do país até hoje. Estudos de 2022 calcularam que a
          dívida com juros chegou a mais de 115 bilhões de dólares em valores
          atuais.
        </p>
        <div className="lesson-highlight">
          <strong>Para o ENEM:</strong> A Revolução Haitiana é o exemplo
          histórico que mais desafia o universalismo proclamado pela Revolução
          Francesa: quando os negros de Saint-Domingue aplicaram os princípios
          da Declaração dos Direitos do Homem a si próprios, a França enviou um
          exército para destruir a revolta. O Haiti pagou caro por ter levado a
          liberdade a sério.
        </div>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>9. O Legado da Revolução Francesa</h2>
        <p>
          A Revolução Francesa criou conceitos que fundamentam a política
          democrática contemporânea:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🗳️</span>
            <h3>Soberania Popular</h3>
            <p>O poder emana do povo, não de Deus ou do rei. Os governantes são responsáveis perante os governados.</p>
          </div>
          <div className="lesson-card">
            <span>👤</span>
            <h3>Cidadania</h3>
            <p>O conceito moderno de cidadania — com direitos e deveres civis e políticos — nasce com a Revolução.</p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Estado Laico</h3>
            <p>A separação entre Estado e Igreja — o laicismo — é uma conquista direta da Revolução Francesa.</p>
          </div>
          <div className="lesson-card">
            <span>↕️</span>
            <h3>Esquerda e Direita</h3>
            <p>Os termos "esquerda" e "direita" políticas nascem na Convenção Nacional: os jacobinos sentavam à esquerda, os girondinos à direita.</p>
          </div>
        </div>
        <p>
          A Revolução também introduziu o conceito de <strong>nação</strong> como
          comunidade política de cidadãos iguais — em contraste com o súdito do
          rei. E criou o exército nacional baseado no serviço militar obrigatório:
          não mais mercenários, mas cidadãos defendendo sua nação.
        </p>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios</span>
        <h2>10. Exercícios</h2>

        <Exercise
          level="Básico"
          title="Os Três Estados"
          statement={
            <p>
              Na França do Antigo Regime, qual dos três estados suportava o maior
              peso tributário, mesmo sendo o que possuía menos privilégios?
            </p>
          }
          options={[
            { letter: "A", text: "O Primeiro Estado (Clero), que pagava o dízimo e sustentava a Igreja." },
            { letter: "B", text: "O Segundo Estado (Nobreza), que financiava os exércitos reais." },
            { letter: "C", text: "O Terceiro Estado (Povo), composto por burgueses, camponeses e artesãos.", correct: true },
            { letter: "D", text: "A realeza, que sustentava os gastos da corte com seu próprio patrimônio." },
            { letter: "E", text: "Todos os estados pagavam impostos em proporção igual à sua riqueza." },
          ]}
          resolution={
            <p>
              O Terceiro Estado representava cerca de 97-98% da população francesa
              e era o único que pagava impostos ao Estado. O Clero (1º Estado) era
              isento de impostos e ainda cobrava o dízimo da população. A Nobreza
              (2º Estado) também era isenta. Essa injustiça fiscal era uma das
              principais causas da Revolução Francesa.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="A Queda da Bastilha"
          statement={
            <p>
              A tomada da Bastilha, em 14 de julho de 1789, é considerada o marco
              simbólico do início da Revolução Francesa. Qual foi o principal
              significado histórico desse evento?
            </p>
          }
          options={[
            { letter: "A", text: "A libertação de centenas de presos políticos que estavam confinados na fortaleza." },
            { letter: "B", text: "A derrubada simbólica do absolutismo, pois a Bastilha representava o poder arbitrário do rei.", correct: true },
            { letter: "C", text: "A execução do rei Luís XVI e da rainha Maria Antonieta pelas massas populares." },
            { letter: "D", text: "A proclamação da república francesa e a abolição da monarquia." },
            { letter: "E", text: "A assinatura da Declaração dos Direitos do Homem e do Cidadão pelos deputados." },
          ]}
          resolution={
            <p>
              Na data da tomada, havia apenas 7 presos na Bastilha — não centenas
              de presos políticos. O significado era fundamentalmente simbólico:
              a fortaleza representava o poder absoluto e arbitrário do rei, que
              podia prender qualquer pessoa sem julgamento (lettre de cachet). Ao
              tomar a Bastilha, o povo de Paris afirmou sua soberania sobre o
              poder real. Luís XVI foi guilhotinado apenas em 21 de janeiro de
              1793; a república só foi proclamada em setembro de 1792.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="O Terror e seus Limites"
          statement={
            <p>
              O período do Terror (1793–1794), sob Robespierre, resultou em cerca
              de 40.000 execuções, incluindo figuras como Danton e Olympe de
              Gouges. A expressão "a revolução devora seus filhos" reflete:
            </p>
          }
          options={[
            { letter: "A", text: "O fracasso total dos ideais iluministas, que se mostraram incompatíveis com a realidade política." },
            { letter: "B", text: "A dinâmica radicalização dos processos revolucionários, em que a lógica do Terror acaba atingindo seus próprios promotores.", correct: true },
            { letter: "C", text: "A conspiração da nobreza europeia para destruir os líderes da Revolução de dentro." },
            { letter: "D", text: "A incapacidade do povo francês de manter um regime democrático estável." },
            { letter: "E", text: "A inevitabilidade da ditadura como etapa final de toda revolução burguesa." },
          ]}
          resolution={
            <p>
              A expressão reflete a lógica interna dos processos revolucionários
              radicais: para se manter no poder e eliminar inimigos reais ou
              imaginários, Robespierre foi ampliando cada vez mais o círculo de
              suspeitos — até que seus próprios aliados (Danton, Saint-Just) foram
              guilhotinados. No final, os membros da Convenção — temendo ser os
              próximos — uniram-se para derrubá-lo no 9 Termidor (julho 1794).
              Robespierre foi guilhotinado no dia seguinte. A revolução consumiu
              seus próprios líderes.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="A Revolução Haitiana e o Universalismo"
          statement={
            <p>
              (ENEM adaptado) Em 1791, os escravizados de Saint-Domingue
              (atual Haiti) se insurgiram contra seus senhores. Inspirados pela
              Declaração dos Direitos do Homem (1789), que proclamava a igualdade
              universal, os rebeldes aplicaram esses princípios a si mesmos. A
              reação da França revolucionária — que enviou tropas para suprimir a
              revolta — revela:
            </p>
          }
          options={[
            { letter: "A", text: "Que a Revolução Francesa era anticolonialista desde o início, mas não tinha recursos militares para manter o Haiti." },
            { letter: "B", text: "Que os ideais de liberdade e igualdade da Revolução Francesa tinham limites raciais e econômicos claros, não se aplicando às colônias escravas.", correct: true },
            { letter: "C", text: "Que Napoleão era o único responsável pela política colonial da França, enquanto os republicanos eram abolicionistas." },
            { letter: "D", text: "Que a Declaração dos Direitos do Homem foi um documento aplicado universalmente desde sua aprovação em 1789." },
            { letter: "E", text: "Que a França tinha obrigação de manter a ordem colonial para pagar suas dívidas de guerra." },
          ]}
          resolution={
            <p>
              A Revolução Haitiana expõe a contradição central da Revolução
              Francesa: os direitos proclamados como "universais" não eram
              aplicados às pessoas negras nas colônias. Quando os escravizados
              de Saint-Domingue levaram os princípios de 1789 a sério, a França
              enviou tropas para destruir a revolução — porque os interesses
              econômicos coloniais eram mais importantes que os princípios
              universalistas. Napoleão inclusive reintroduziu a escravidão nas
              colônias em 1802.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="A Declaração dos Direitos do Homem"
          statement={
            <p>
              A Declaração dos Direitos do Homem e do Cidadão (26/08/1789)
              afirmava que "o princípio de toda soberania reside essencialmente
              na Nação". Olympe de Gouges respondeu com a Declaração dos Direitos
              da Mulher (1791). A resposta de Olympe de Gouges demonstra que:
            </p>
          }
          options={[
            { letter: "A", text: "As mulheres eram completamente indiferentes às conquistas revolucionárias." },
            { letter: "B", text: "A Revolução Francesa promoveu igualdade plena entre homens e mulheres desde o início." },
            { letter: "C", text: "A Declaração de 1789, apesar de proclamar direitos universais, excluía as mulheres, revelando os limites de gênero do universalismo iluminista.", correct: true },
            { letter: "D", text: "Olympe de Gouges era contrária à Revolução Francesa e defendia o retorno da monarquia." },
            { letter: "E", text: "A soberania popular proclamada em 1789 era restrita aos proprietários rurais masculinos do Terceiro Estado." },
          ]}
          resolution={
            <p>
              A Declaração de 1789 usava o termo "homem" em seu sentido restrito —
              masculino. As mulheres não tinham direito ao voto, não podiam ocupar
              cargos públicos e eram legalmente subordinadas aos maridos. Olympe
              de Gouges, ao publicar a Declaração dos Direitos da Mulher em 1791,
              expôs essa contradição e exigiu a extensão dos direitos também às
              mulheres. Como punição por seu ativismo, foi guilhotinada em
              novembro de 1793, durante o Terror — um exemplo cruel da contradição
              entre os ideais revolucionários e sua aplicação.
            </p>
          }
        />
      </section>
    </article>
  );
}
