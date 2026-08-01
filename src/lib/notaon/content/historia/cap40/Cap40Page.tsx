"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap40Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 40</span>
          <h1>Ditadura Militar (1964–1985)</h1>
          <p>
            Por 21 anos, o Brasil foi governado por uma ditadura militar que
            suspendeu direitos, torturou opositores e, ao mesmo tempo, promoveu
            um acelerado crescimento econômico. Compreender esse período — seus
            mecanismos de controle, as formas de resistência e o processo de
            abertura — é fundamental para entender a democracia brasileira atual
            e os debates sobre memória, verdade e justiça transicional.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">O Golpe</span>
        <h2>1. O Golpe de 1º de Abril de 1964</h2>
        <p>
          Na madrugada de 1º de abril de 1964, o general Olímpio Mourão Filho
          movimentou tropas em Minas Gerais em direção ao Rio de Janeiro. O
          presidente João Goulart, sem apoio militar suficiente para resistir,
          partiu para o Rio Grande do Sul e depois para o exílio no Uruguai.
          Em 11 de abril, o Congresso — com muitos membros cassados e sob
          pressão — elegeu indiretamente o general <strong>Humberto Castello
          Branco</strong> como presidente.
        </p>
        <p>
          Os militares chamaram o evento de <strong>"Revolução de 1964"</strong>,
          apresentando-a como necessária para salvar a democracia do comunismo.
          O embaixador americano Lincoln Gordon reconheceu o novo governo em
          poucas horas — os EUA haviam sido informados antecipadamente e tinham
          uma força naval de apoio pronta (Operação Brother Sam), mas ela não
          precisou ser acionada.
        </p>
        <div className="lesson-highlight">
          <strong>Golpe ou Revolução?</strong> Os militares e seus apoiadores
          chamaram o evento de "Revolução". A historiografia contemporânea
          o classifica como golpe de Estado, pois derrubou um governo
          constitucional e instaurou um regime que suprimiu direitos
          fundamentais por duas décadas.
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Instrumentos de Exceção</span>
        <h2>2. Os Atos Institucionais (AI)</h2>
        <p>
          Os Atos Institucionais foram os instrumentos jurídicos do regime:
          decretos que, ao invés de cumprir a Constituição, a suspendiam em
          pontos específicos. Ao todo foram 17 AIs, mas os mais importantes
          são:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Ato</th>
                <th>Data</th>
                <th>Principais Medidas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>AI-1</strong></td>
                <td>09/04/1964</td>
                <td>
                  Cassação de mandatos e direitos políticos por 10 anos;
                  habeas corpus suspenso para crimes políticos; 41 deputados
                  federais cassados nos primeiros 3 meses
                </td>
              </tr>
              <tr>
                <td><strong>AI-2</strong></td>
                <td>27/10/1965</td>
                <td>
                  Extinção de todos os partidos políticos; implantação do
                  bipartidarismo: ARENA (governo) e MDB (oposição
                  permitida); eleições indiretas para presidente e governadores
                </td>
              </tr>
              <tr>
                <td><strong>AI-3</strong></td>
                <td>05/02/1966</td>
                <td>
                  Eleições indiretas para governadores (eleitos pelas
                  Assembleias Legislativas)
                </td>
              </tr>
              <tr>
                <td><strong>AI-5</strong></td>
                <td>13/12/1968</td>
                <td>
                  O mais duro: fecha o Congresso Nacional; suspende habeas
                  corpus; institui censura prévia; cassações em massa;
                  poderes ditatoriais ilimitados ao presidente — início
                  dos "anos de chumbo"
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          O AI-5 foi promulgado após o discurso do deputado Márcio Moreira
          Alves no Congresso (setembro de 1968) convocando a população a
          boicotar os desfiles militares. O Congresso recusou-se a cassar seu
          mandato. A resposta da ditadura foi fechar o Congresso e decretar
          o AI-5.
        </p>
      </section>

      {/* ── SVG 1: Linha do Tempo da Ditadura ── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>3. Linha do Tempo — Os Cinco Presidentes Militares</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 860 340"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", maxWidth: 860, height: "auto" }}
            aria-label="Linha do tempo da ditadura militar com os 5 presidentes"
          >
            <rect width="860" height="340" fill="#0f172a" rx="12" />

            {/* Título */}
            <text x="430" y="28" textAnchor="middle" fill="#e2e8f0" fontSize="13" fontWeight="bold">
              Ditadura Militar Brasileira — Presidentes e Eventos (1964–1985)
            </text>

            {/* Linha central */}
            <line x1="30" y1="160" x2="830" y2="160" stroke="#334155" strokeWidth="3" />

            {/* Castello Branco 1964-1967 */}
            <rect x="30" y="125" width="130" height="70" rx="6" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="95" y="147" textAnchor="middle" fill="#93c5fd" fontSize="10" fontWeight="bold">Castello Branco</text>
            <text x="95" y="161" textAnchor="middle" fill="#94a3b8" fontSize="9">1964–1967</text>
            <text x="95" y="174" textAnchor="middle" fill="#64748b" fontSize="8">PAEG • BNH • FGTS</text>
            <circle cx="95" cy="160" r="4" fill="#3b82f6" />

            {/* Costa e Silva 1967-1969 */}
            <rect x="170" y="125" width="130" height="70" rx="6" fill="#3b1f1f" stroke="#ef4444" strokeWidth="1.5" />
            <text x="235" y="147" textAnchor="middle" fill="#fca5a5" fontSize="10" fontWeight="bold">Costa e Silva</text>
            <text x="235" y="161" textAnchor="middle" fill="#94a3b8" fontSize="9">1967–1969</text>
            <text x="235" y="174" textAnchor="middle" fill="#64748b" fontSize="8">AI-5 • Linha Dura</text>
            <circle cx="235" cy="160" r="4" fill="#ef4444" />

            {/* Médici 1969-1974 */}
            <rect x="310" y="110" width="150" height="100" rx="6" fill="#1a0a0a" stroke="#dc2626" strokeWidth="2" />
            <text x="385" y="133" textAnchor="middle" fill="#fca5a5" fontSize="11" fontWeight="bold">Médici</text>
            <text x="385" y="150" textAnchor="middle" fill="#fca5a5" fontSize="9">1969–1974</text>
            <text x="385" y="165" textAnchor="middle" fill="#94a3b8" fontSize="8">Anos de Chumbo</text>
            <text x="385" y="178" textAnchor="middle" fill="#94a3b8" fontSize="8">Milagre Econômico</text>
            <text x="385" y="191" textAnchor="middle" fill="#64748b" fontSize="7">DOI-CODI • Transamazônica</text>
            <circle cx="385" cy="160" r="5" fill="#dc2626" />

            {/* Geisel 1974-1979 */}
            <rect x="470" y="125" width="140" height="70" rx="6" fill="#1c2a1c" stroke="#22c55e" strokeWidth="1.5" />
            <text x="540" y="147" textAnchor="middle" fill="#86efac" fontSize="10" fontWeight="bold">Geisel</text>
            <text x="540" y="161" textAnchor="middle" fill="#94a3b8" fontSize="9">1974–1979</text>
            <text x="540" y="174" textAnchor="middle" fill="#64748b" fontSize="8">Abertura "lenta e gradual"</text>
            <circle cx="540" cy="160" r="4" fill="#22c55e" />

            {/* Figueiredo 1979-1985 */}
            <rect x="620" y="125" width="190" height="70" rx="6" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="715" y="147" textAnchor="middle" fill="#fcd34d" fontSize="10" fontWeight="bold">Figueiredo</text>
            <text x="715" y="161" textAnchor="middle" fill="#94a3b8" fontSize="9">1979–1985</text>
            <text x="715" y="174" textAnchor="middle" fill="#64748b" fontSize="8">Diretas Já • Tancredo</text>
            <circle cx="715" cy="160" r="4" fill="#f59e0b" />

            {/* Eventos abaixo da linha */}
            <text x="95" y="215" textAnchor="middle" fill="#64748b" fontSize="8">AI-1 (1964)</text>
            <line x1="95" y1="197" x2="95" y2="207" stroke="#64748b" strokeWidth="1" />

            <text x="235" y="215" textAnchor="middle" fill="#64748b" fontSize="8">AI-5 (1968)</text>
            <line x1="235" y1="197" x2="235" y2="207" stroke="#64748b" strokeWidth="1" />

            <text x="385" y="225" textAnchor="middle" fill="#64748b" fontSize="8">Guerrilha Araguaia</text>
            <text x="385" y="237" textAnchor="middle" fill="#64748b" fontSize="8">(1972–74)</text>
            <line x1="385" y1="212" x2="385" y2="222" stroke="#64748b" strokeWidth="1" />

            <text x="540" y="215" textAnchor="middle" fill="#64748b" fontSize="8">Lei da Anistia (1979)</text>
            <line x1="540" y1="197" x2="540" y2="207" stroke="#64748b" strokeWidth="1" />

            <text x="715" y="215" textAnchor="middle" fill="#64748b" fontSize="8">Diretas Já (1983–84)</text>
            <line x1="715" y1="197" x2="715" y2="207" stroke="#64748b" strokeWidth="1" />

            {/* Anos de referência */}
            <text x="30" y="285" textAnchor="middle" fill="#475569" fontSize="10">1964</text>
            <text x="310" y="285" textAnchor="middle" fill="#475569" fontSize="10">1969</text>
            <text x="470" y="285" textAnchor="middle" fill="#475569" fontSize="10">1974</text>
            <text x="620" y="285" textAnchor="middle" fill="#475569" fontSize="10">1979</text>
            <text x="810" y="285" textAnchor="middle" fill="#475569" fontSize="10">1985</text>

            {/* Linha do tempo base */}
            <line x1="30" y1="280" x2="830" y2="280" stroke="#1e293b" strokeWidth="1" />

            {/* Nota */}
            <text x="430" y="315" textAnchor="middle" fill="#475569" fontSize="9">
              † Costa e Silva sofreu AVC em 1969; junta militar governou brevemente antes de Médici
            </text>
          </svg>
          <figcaption>
            Os cinco presidentes militares, seus períodos e os principais marcos institucionais da ditadura.
          </figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Repressão e Economia</span>
        <h2>4. Os Governos Militares: Perfis e Contradições</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Castello Branco (1964–67)</h3>
            <p>
              "Moderado" da chamada <em>Escola Superior de Guerra</em>. Criou o
              BNH (habitação), o FGTS e o PAEG (combate à inflação). Pretendia
              uma ditadura temporária, mas foi além.
            </p>
          </div>
          <div className="lesson-card">
            <span>🔴</span>
            <h3>Costa e Silva (1967–69)</h3>
            <p>
              "Linha dura". Promulgou o AI-5 em dezembro de 1968.
              Governou até ter um AVC em agosto de 1969; uma junta
              militar assumiu até a eleição de Médici.
            </p>
          </div>
          <div className="lesson-card">
            <span>⚫</span>
            <h3>Médici (1969–74)</h3>
            <p>
              O período mais repressivo: DOI-CODI, tortura sistematizada,
              centenas de mortos. Ao mesmo tempo, "milagre econômico"
              (10% de crescimento ao ano), Transamazônica, Ponte Rio-Niterói.
            </p>
          </div>
          <div className="lesson-card">
            <span>🌱</span>
            <h3>Geisel (1974–79)</h3>
            <p>
              Iniciou a abertura "lenta, gradual e segura". Revogou o
              AI-5 em 1978. Paradoxalmente, autorizou a morte do jornalista
              Vladimir Herzog (1975) e do operário Manuel Fiel Filho (1976).
            </p>
          </div>
          <div className="lesson-card">
            <span>🗳️</span>
            <h3>Figueiredo (1979–85)</h3>
            <p>
              Lei da Anistia (1979), volta do multipartidarismo, eleições
              diretas para governadores (1982). Viveu o movimento "Diretas Já"
              e entregou o poder ao civil José Sarney em 1985.
            </p>
          </div>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Governo</th>
                <th>Repressão</th>
                <th>Economia</th>
                <th>Política</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Castello Branco</td>
                <td>Cassações, AI-1 e AI-2</td>
                <td>Contenção da inflação (PAEG)</td>
                <td>Institucionalização do regime; bipartidarismo</td>
              </tr>
              <tr>
                <td>Costa e Silva</td>
                <td>AI-5; início da tortura sistemática</td>
                <td>Aceleração do crescimento</td>
                <td>Fechamento do Congresso</td>
              </tr>
              <tr>
                <td>Médici</td>
                <td>DOI-CODI; guerrilha esmagada; 434 mortos/desap.</td>
                <td>"Milagre" 10% aa; obras faraônicas</td>
                <td>Propaganda ufanista; Copa 1970</td>
              </tr>
              <tr>
                <td>Geisel</td>
                <td>Herzog e Fiel Filho mortos; revogação do AI-5 (1978)</td>
                <td>Crise do petróleo; 2º PND</td>
                <td>Abertura gradual; Lei Falcão</td>
              </tr>
              <tr>
                <td>Figueiredo</td>
                <td>Atentado no Riocentro (1981)</td>
                <td>Crise da dívida; inflação volta</td>
                <td>Diretas Já; eleição de Tancredo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Repressão</span>
        <h2>5. Tortura, Mortes e a Doutrina de Segurança Nacional</h2>
        <p>
          A ditadura brasileira desenvolveu um sofisticado aparato repressivo
          baseado na <strong>Doutrina de Segurança Nacional</strong> — um
          conjunto de teorias produzidas pela Escola Superior de Guerra (ESG) e
          pela <em>School of the Americas</em> nos EUA. O "inimigo interno"
          substituiu o inimigo externo: qualquer cidadão suspeito de simpatias
          comunistas ou de oposição ao regime podia ser detido, torturado e
          desaparecido.
        </p>
        <p>
          Os principais centros de tortura foram o{" "}
          <strong>DOI-CODI</strong> (Destacamento de Operações de Informações —
          Centro de Operações de Defesa Interna) e o{" "}
          <strong>DEOPS</strong> (Departamento Estadual de Ordem Política e
          Social). Técnicas utilizadas: pau-de-arara, choque elétrico,
          afogamento, privação de sono e violência sexual.
        </p>
        <div className="lesson-highlight">
          <strong>Comissão Nacional da Verdade (2012–2014):</strong> criada
          durante o governo Dilma Rousseff, investigou os crimes do Estado
          entre 1946 e 1988. Documentou <strong>434 mortos e
          desaparecidos</strong>, identificou responsáveis pelo nome, mas
          não promoveu punições — a Lei da Anistia de 1979 permanece
          controversa por ter incluído os agentes do Estado.
        </div>
        <p>
          Casos emblemáticos: o jornalista <strong>Vladimir Herzog</strong>
          (outubro de 1975), morto no DOI-CODI paulista e apresentado como
          suicídio; o estudante <strong>Alexandre Vannucchi Leme</strong>
          (1973); o ex-presidente da UNE <strong>Honestino Guimarães</strong>;
          e os 70 guerrilheiros do Araguaia, cujos corpos nunca foram entregues
          às famílias.
        </p>
      </section>

      {/* ── SVG 2: Atos Institucionais ── */}
      <section className="lesson-section">
        <span className="section-kicker">Infográfico</span>
        <h2>6. Os Atos Institucionais — Diagrama de Efeitos</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 760 380"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", maxWidth: 760, height: "auto" }}
            aria-label="Diagrama dos Atos Institucionais e seus efeitos"
          >
            <rect width="760" height="380" fill="#0f172a" rx="12" />

            {/* Título */}
            <text x="380" y="28" textAnchor="middle" fill="#e2e8f0" fontSize="13" fontWeight="bold">
              Atos Institucionais — Principais Medidas
            </text>

            {/* AI-1 */}
            <rect x="20" y="50" width="160" height="130" rx="8" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="100" y="73" textAnchor="middle" fill="#93c5fd" fontSize="12" fontWeight="bold">AI-1</text>
            <text x="100" y="88" textAnchor="middle" fill="#64748b" fontSize="9">09/04/1964</text>
            <text x="100" y="108" textAnchor="middle" fill="#94a3b8" fontSize="9">• Cassações de mandatos</text>
            <text x="100" y="121" textAnchor="middle" fill="#94a3b8" fontSize="9">• Suspensão habeas corpus</text>
            <text x="100" y="134" textAnchor="middle" fill="#94a3b8" fontSize="9">• Direitos políticos</text>
            <text x="100" y="147" textAnchor="middle" fill="#94a3b8" fontSize="9">  suspensos por 10 anos</text>
            <text x="100" y="163" textAnchor="middle" fill="#64748b" fontSize="8">41 deputados cassados</text>

            {/* AI-2 */}
            <rect x="200" y="50" width="160" height="130" rx="8" fill="#1c2a1c" stroke="#22c55e" strokeWidth="1.5" />
            <text x="280" y="73" textAnchor="middle" fill="#86efac" fontSize="12" fontWeight="bold">AI-2</text>
            <text x="280" y="88" textAnchor="middle" fill="#64748b" fontSize="9">27/10/1965</text>
            <text x="280" y="108" textAnchor="middle" fill="#94a3b8" fontSize="9">• Extinção dos partidos</text>
            <text x="280" y="121" textAnchor="middle" fill="#94a3b8" fontSize="9">• Bipartidarismo forçado</text>
            <text x="280" y="134" textAnchor="middle" fill="#94a3b8" fontSize="9">• ARENA vs MDB</text>
            <text x="280" y="147" textAnchor="middle" fill="#94a3b8" fontSize="9">• Eleições indiretas</text>
            <text x="280" y="163" textAnchor="middle" fill="#64748b" fontSize="8">para presidente</text>

            {/* AI-5 */}
            <rect x="380" y="40" width="180" height="150" rx="8" fill="#1a0a0a" stroke="#ef4444" strokeWidth="2.5" />
            <text x="470" y="65" textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="bold">AI-5</text>
            <text x="470" y="82" textAnchor="middle" fill="#dc2626" fontSize="9">13/12/1968 — O MAIS DURO</text>
            <text x="470" y="102" textAnchor="middle" fill="#fca5a5" fontSize="9">• Fecha o Congresso</text>
            <text x="470" y="115" textAnchor="middle" fill="#fca5a5" fontSize="9">• Suspende habeas corpus</text>
            <text x="470" y="128" textAnchor="middle" fill="#fca5a5" fontSize="9">• Censura prévia</text>
            <text x="470" y="141" textAnchor="middle" fill="#fca5a5" fontSize="9">• Cassações em massa</text>
            <text x="470" y="154" textAnchor="middle" fill="#fca5a5" fontSize="9">• Poderes ditatoriais</text>
            <text x="470" y="170" textAnchor="middle" fill="#64748b" fontSize="8">Início dos "anos de chumbo"</text>

            {/* Lei da Anistia (abertura) */}
            <rect x="580" y="50" width="160" height="130" rx="8" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="660" y="73" textAnchor="middle" fill="#fcd34d" fontSize="11" fontWeight="bold">Abertura</text>
            <text x="660" y="88" textAnchor="middle" fill="#64748b" fontSize="9">1974–1985</text>
            <text x="660" y="108" textAnchor="middle" fill="#94a3b8" fontSize="9">• Revogação AI-5 (1978)</text>
            <text x="660" y="121" textAnchor="middle" fill="#94a3b8" fontSize="9">• Lei da Anistia (1979)</text>
            <text x="660" y="134" textAnchor="middle" fill="#94a3b8" fontSize="9">• Multipartidarismo (1980)</text>
            <text x="660" y="147" textAnchor="middle" fill="#94a3b8" fontSize="9">• Dir. diretas govs. (1982)</text>
            <text x="660" y="163" textAnchor="middle" fill="#64748b" fontSize="8">Processo "lento e gradual"</text>

            {/* Setas */}
            <line x1="180" y1="115" x2="197" y2="115" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arr)" />
            <line x1="360" y1="115" x2="377" y2="115" stroke="#475569" strokeWidth="1.5" />
            <line x1="560" y1="115" x2="577" y2="115" stroke="#475569" strokeWidth="1.5" />

            {/* Setinha manual */}
            <polygon points="197,110 197,120 207,115" fill="#475569" />
            <polygon points="377,110 377,120 387,115" fill="#ef4444" />
            <polygon points="577,110 577,120 587,115" fill="#475569" />

            {/* Seção inferior */}
            <rect x="20" y="215" width="720" height="140" rx="8" fill="#0f1929" stroke="#334155" strokeWidth="1" />
            <text x="380" y="240" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="bold">
              Resistência à Ditadura
            </text>

            {/* Coluna 1 */}
            <text x="90" y="265" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Guerrilha Armada</text>
            <text x="90" y="280" textAnchor="middle" fill="#94a3b8" fontSize="9">ALN (Marighella)</text>
            <text x="90" y="293" textAnchor="middle" fill="#94a3b8" fontSize="9">MR-8, VPR</text>
            <text x="90" y="306" textAnchor="middle" fill="#94a3b8" fontSize="9">Araguaia (PCdoB)</text>
            <text x="90" y="319" textAnchor="middle" fill="#64748b" fontSize="8">Derrotada até 1974</text>

            {/* Coluna 2 */}
            <text x="250" y="265" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">Resistência Cultural</text>
            <text x="250" y="280" textAnchor="middle" fill="#94a3b8" fontSize="9">Chico Buarque</text>
            <text x="250" y="293" textAnchor="middle" fill="#94a3b8" fontSize="9">Caetano, Gil (Tropicália)</text>
            <text x="250" y="306" textAnchor="middle" fill="#94a3b8" fontSize="9">Cinema Novo (Glauber)</text>
            <text x="250" y="319" textAnchor="middle" fill="#94a3b8" fontSize="9">Teatro (Boal)</text>

            {/* Coluna 3 */}
            <text x="430" y="265" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">Sociedade Civil</text>
            <text x="430" y="280" textAnchor="middle" fill="#94a3b8" fontSize="9">OAB, CNBB, ABI</text>
            <text x="430" y="293" textAnchor="middle" fill="#94a3b8" fontSize="9">Movimento Estudantil</text>
            <text x="430" y="306" textAnchor="middle" fill="#94a3b8" fontSize="9">Greves do ABC (1978–79)</text>
            <text x="430" y="319" textAnchor="middle" fill="#94a3b8" fontSize="9">Lula / PT (fundado 1980)</text>

            {/* Coluna 4 */}
            <text x="620" y="265" textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="bold">Diretas Já</text>
            <text x="620" y="280" textAnchor="middle" fill="#94a3b8" fontSize="9">1983–1984</text>
            <text x="620" y="293" textAnchor="middle" fill="#94a3b8" fontSize="9">1,5 mi em São Paulo</text>
            <text x="620" y="306" textAnchor="middle" fill="#94a3b8" fontSize="9">PEC Dante de Oliveira</text>
            <text x="620" y="319" textAnchor="middle" fill="#64748b" fontSize="8">Derrota no Congresso</text>
          </svg>
          <figcaption>
            Os principais Atos Institucionais da ditadura militar e as formas de resistência da sociedade brasileira.
          </figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Resistência</span>
        <h2>7. A Guerrilha e a Resistência Cultural</h2>
        <p>
          Diante do fechamento dos canais políticos legais, parte da esquerda
          optou pela luta armada. As principais organizações foram:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <span>✊</span>
            <h3>ALN — Ação Libertadora Nacional</h3>
            <p>
              Liderada por Carlos Marighella (autor do <em>Minimanual do
              Guerrilheiro Urbano</em>), realizou assaltos a bancos e o sequestro
              do embaixador americano Burke Elbrick (1969). Marighella foi morto
              em emboscada em São Paulo (1969).
            </p>
          </div>
          <div className="lesson-card">
            <span>🌳</span>
            <h3>Guerrilha do Araguaia</h3>
            <p>
              O PCdoB enviou cerca de 70 militantes para o sul do Pará
              (1972), preparando uma guerrilha rural. Entre 1972 e 1974, o
              Exército destruiu o movimento. Os corpos nunca foram entregues
              às famílias.
            </p>
          </div>
          <div className="lesson-card">
            <span>🎵</span>
            <h3>Resistência Cultural</h3>
            <p>
              Chico Buarque, Caetano Veloso, Gilberto Gil e Geraldo Vandré
              ("Pra não dizer que não falei das flores") usaram a metáfora e
              a ironia para driblar a censura. Cinema Novo (Glauber Rocha) e
              teatro (Augusto Boal) também resistiram.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Abertura</span>
        <h2>8. O Fim da Ditadura: Diretas Já e a Transição</h2>
        <p>
          A abertura política foi um processo controlado pelos próprios militares:
          "lenta, gradual e segura", nas palavras do presidente Geisel. A Lei da
          Anistia de 1979 permitiu o retorno dos exilados, mas anistiou também
          os agentes da repressão — uma das maiores controvérsias do período.
        </p>
        <p>
          Em 1983–1984, o movimento <strong>Diretas Já</strong> mobilizou a
          maior concentração de pessoas da história do Brasil até então: 1,5
          milhão em São Paulo e quase 1 milhão no Rio de Janeiro. A{" "}
          <strong>PEC Dante de Oliveira</strong>, que propunha eleições diretas
          para presidente, foi derrotada no Congresso em abril de 1984 por falta
          de quórum.
        </p>
        <p>
          A saída foi pelo Colégio Eleitoral: em 15 de janeiro de 1985,{" "}
          <strong>Tancredo Neves</strong> foi eleito o primeiro presidente civil
          em 21 anos — com votos de parte da ARENA (hoje PDS). Tancredo adoeceu
          antes de tomar posse e morreu em 21 de abril de 1985. Seu vice,{" "}
          <strong>José Sarney</strong>, assumiu a presidência, encerrando
          formalmente a ditadura militar.
        </p>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>9. Memória, Verdade e Justiça</h2>
        <p>
          A <strong>Comissão Nacional da Verdade (CNV)</strong>, criada em 2012
          e que entregou seu relatório final em dezembro de 2014, documentou
          434 casos de mortos e desaparecidos políticos. O relatório identificou
          377 agentes do Estado responsáveis — incluindo militares e policiais
          ainda vivos à época. Nenhum foi processado criminalmente, pois a Lei
          da Anistia de 1979 permanece em vigor.
        </p>
        <p>
          O debate sobre a ditadura permanece vivo na política brasileira: a
          discussão sobre o caráter do regime (golpe vs. revolução), a
          legitimidade da Anistia, os direitos das famílias de mortos e
          desaparecidos, e a memória dos "anos de chumbo" continuam presentes
          nas eleições e na cultura brasileira.
        </p>
      </section>

      {/* ── EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Fixação</span>
        <h2>Exercícios</h2>

                <Exercise
          level="Básico"
          title="Exercício 1"
          statement={<p>O AI-5, decretado em 13 de dezembro de 1968, é considerado o ato mais duro da ditadura militar brasileira. Qual das alternativas abaixo apresenta corretamente suas principais medidas?</p>}
          options={[
            { letter: "a", text: "Criou o bipartidarismo forçado, dividindo o cenário político entre ARENA e MDB." },
            { letter: "b", text: "Fechou o Congresso Nacional, suspendeu o habeas corpus, instituiu censura prévia e conferiu poderes ditatoriais ao presidente, inaugurando os 'anos de chumbo'.", correct: true },
            { letter: "c", text: "Determinou a realização de eleições indiretas para governadores estaduais." },
            { letter: "d", text: "Anistiou presos políticos e abriu caminho para a abertura democrática." },
          ]}
          resolution={<p>O AI-5 foi decretado após o Congresso se recusar a cassar o mandato do deputado Márcio Moreira Alves. Em resposta, o governo militar fechou o Congresso, suspendeu o habeas corpus (permitindo prisão sem prazo), instituiu censura prévia à imprensa e ao rádio/TV, e deu ao presidente poderes praticamente ilimitados para cassar mandatos, decretar intervenções e governar por decreto. É o marco que inaugurou o período mais repressivo da ditadura (governo Médici, 1969–1974).</p>}
        />

                <Exercise
          level="Intermediário"
          title="Exercício 2"
          statement={<p>O 'milagre econômico' do governo Médici (1969–1974) foi caracterizado por altas taxas de crescimento do PIB. Qual afirmativa apresenta corretamente as CONTRADIÇÕES desse período?</p>}
          options={[
            { letter: "a", text: "O crescimento foi acompanhado de distribuição equitativa de renda, reduzindo desigualdades históricas." },
            { letter: "b", text: "O crescimento foi sustentado por petróleo barato, investimento estrangeiro e obras públicas, mas veio acompanhado de concentração de renda, repressão política intensa e endividamento externo crescente.", correct: true },
            { letter: "c", text: "O crescimento gerou independência tecnológica, pois o regime investiu maciçamente em pesquisa científica nacional." },
            { letter: "d", text: "O 'milagre' beneficiou igualmente campo e cidade, reduzindo as migrações para os centros urbanos." },
          ]}
          resolution={<p>O 'milagre econômico' é um conceito ambíguo: entre 1969 e 1973, o Brasil cresceu em média 10% ao ano, impulsionado por petróleo barato (pré-crise de 1973), crédito externo abundante e obras faraônicas (Transamazônica, Ponte Rio-Niterói, Itaipu). Mas esse crescimento foi acompanhado da pior fase da repressão (DOI-CODI, tortura), concentração de renda (o 'bolo' crescia, mas não era 'dividido'), e endividamento externo que se revelaria crítico nos anos 1980. A frase 'Brasil: ame-o ou deixe-o' sintetiza o ufanismo oficial desse período.</p>}
        />

                <Exercise
          level="Avançado"
          title="Exercício 3"
          statement={<p>A Lei da Anistia de 1979 é frequentemente debatida como lei de 'reconciliação nacional'. Analise criticamente: qual foi o impacto dessa lei para a justiça de transição no Brasil?</p>}
          options={[
            { letter: "a", text: "A lei foi um instrumento de justiça plenamente eficaz, pois processou e condenou os agentes da repressão." },
            { letter: "b", text: "A lei beneficiou apenas os presos políticos de esquerda, não alcançando os agentes do Estado." },
            { letter: "c", text: "A lei foi uma anistia 'recíproca' que permitiu o retorno dos exilados políticos, mas também protegeu os agentes da repressão de qualquer punição criminal, comprometendo a responsabilização por crimes contra a humanidade.", correct: true },
            { letter: "d", text: "A lei foi considerada inconstitucional pelo Supremo Tribunal Federal e nunca entrou em vigor." },
          ]}
          resolution={<p>A Lei da Anistia de 1979 foi negociada politicamente como parte da transição controlada: anistiou os exilados políticos (permitindo o retorno de figuras como Leonel Brizola, Miguel Arraes e outros), mas também incluiu na anistia os agentes do Estado responsáveis por torturas, desaparecimentos e execuções. Essa interpretação foi confirmada pelo STF em 2010 (ADPF 153), que manteve a lei válida — diferentemente de países como Argentina e Chile, que processaram seus torturadores. A Comissão Nacional da Verdade documentou os crimes, mas sem punição criminal, criando um modelo incompleto de justiça transicional.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 4"
          statement={<p>(ENEM adaptado) 'Não é possível dizer que não falei das flores / Das gerações que fizeram sua parte / Haverá sempre quem / Não pode ir até o fim' (Geraldo Vandré, 1968). A música de protesto durante a ditadura militar representava:</p>}
          options={[
            { letter: "a", text: "Uma forma de oposição política disfarçada em linguagem artística, usando metáforas para burlar a censura e comunicar resistência ao regime.", correct: true },
            { letter: "b", text: "Um apoio velado ao regime militar, pois os artistas recebiam financiamento estatal para suas produções." },
            { letter: "c", text: "Uma expressão puramente estética, sem conteúdo político, já que a censura impedia qualquer crítica direta." },
            { letter: "d", text: "Uma estratégia dos partidos de oposição para mobilizar eleitores, usando músicas como propaganda política oficial." },
          ]}
          resolution={<p>A música de protesto — especialmente de artistas como Geraldo Vandré, Chico Buarque, Caetano Veloso e Gilberto Gil — foi uma das formas mais importantes de resistência cultural durante a ditadura. Usando metáforas, alegorias e duplos sentidos, os artistas conseguiam transmitir mensagens críticas ao regime enquanto tentavam driblar a censura prévia. 'Pra não dizer que não falei das flores' (popularmente conhecida como 'Caminhando') de Vandré foi proibida após o AI-5 e se tornou um hino da resistência. A censura era real: muitas músicas foram proibidas, letras reescritas e artistas exilados.</p>}
        />

                <Exercise
          level="Contextualizado"
          title="Exercício 5"
          statement={<p>(Vestibular USP adaptado) O movimento 'Diretas Já' (1983–1984) representou a maior mobilização popular da história brasileira até aquele momento, reunindo milhões de pessoas nas ruas. Apesar disso, a Emenda Dante de Oliveira foi derrotada. Como se pode explicar essa aparente contradição entre mobilização popular e derrota parlamentar?</p>}
          options={[
            { letter: "a", text: "A derrota revelou que o movimento não tinha apoio real da população, e as manifestações foram exageradas pela imprensa." },
            { letter: "b", text: "A mobilização popular não se traduziu em votos parlamentares suficientes porque parte do PDS (partido governista) não compareceu à votação, somada à estrutura do Colégio Eleitoral que garantia maioria à ARENA/PDS, mostrando os limites da pressão de rua sobre um Congresso eleito sob regras da ditadura.", correct: true },
            { letter: "c", text: "A derrota ocorreu porque a oposição não tinha um candidato alternativo e não soube articular uma saída política." },
            { letter: "d", text: "A emenda foi derrubada pelo veto presidencial de Figueiredo, que tinha poderes para rejeitar emendas constitucionais." },
          ]}
          resolution={<p>A PEC Dante de Oliveira, votada em 25 de abril de 1984, precisava de 2/3 do Congresso para ser aprovada. Parte do PDS boicotou a sessão — havia integrantes que queriam se dissociar do governo, mas sem votar a favor das diretas. O resultado foi: 298 votos favoráveis, 65 contrários e 113 ausentes — faltaram 22 votos para aprovação. A derrota revelou os limites estruturais da transição: o Congresso havia sido eleito sob regras do regime, e a mobilização popular (legítima e massiva) não podia substituir os votos parlamentares necessários. A saída foi o Colégio Eleitoral, onde Tancredo Neves (com apoio de dissidentes do PDS) venceu o candidato governista Paulo Maluf.</p>}
        />
      </section>
    </article>
  );
}
