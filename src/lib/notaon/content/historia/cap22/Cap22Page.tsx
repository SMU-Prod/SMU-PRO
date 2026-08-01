"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap22Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 22</span>
          <h1>Colonização Espanhola</h1>
          <p>
            Entre 1519 e 1535, um punhado de aventureiros espanhóis derrubou
            dois dos maiores impérios das Américas. A conquista foi possível
            pela combinação devastadora de tecnologia militar, doenças
            epidêmicas, alianças com povos subjugados e divisões internas dos
            impérios — e teve como consequência o maior genocídio da história
            humana.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 1: A CONQUISTA DOS ASTECAS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Conquista</span>
        <h2>A queda de Tenochtitlán (1519–1521)</h2>
        <p>
          Hernán Cortés desembarcou na costa do México em 1519 com cerca de 500
          soldados, 16 cavalos e alguns canhões. O que parecia uma expedição
          suicida tornou-se a conquista mais dramática da história.
        </p>
        <p>
          A chave foi a aliança com os <strong>Tlaxcaltecas</strong>: povo
          inimigo dos Astecas que nunca havia sido subjugado pela Tríplice
          Aliança. Ao ver os espanhóis como libertadores potenciais, forneceram
          dezenas de milhares de guerreiros. Sem esse apoio, a conquista seria
          impossível.
        </p>
        <p>
          Moctezuma II recebeu Cortés em Tenochtitlán, foi capturado como
          refém e morreu em circunstâncias obscuras (provavelmente assassinado
          pelos próprios espanhóis). Na <strong>Noite Triste</strong> (30 de
          junho de 1520), os astecas expulsaram os espanhóis da cidade,
          matando centenas deles e obrigando Cortés a fugir. Mas um ano depois,
          na <strong>Batalha de Otumba</strong>, os espanhóis e seus aliados
          tlaxcaltecas reagruparam e retomaram o avanço. Em agosto de 1521,
          Tenochtitlán foi conquistada e destruída. Sobre suas ruínas,
          construíram a <strong>Cidade do México</strong>.
        </p>
      </section>

      {/* ─── SEÇÃO 2: POR QUE OS EUROPEUS VENCERAM ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Análise</span>
        <h2>Por que os europeus venceram?</h2>
        <p>
          A resposta está longe de ser simples. Quatro fatores se combinaram:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <h4>Tecnologia militar</h4>
            <p>
              Armas de fogo (arcabuzes, canhões), armaduras de aço, bestas e,
              sobretudo, <strong>cavalos</strong> — animais nunca vistos nas
              Américas, que causaram terror pânico nas primeiras batalhas.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Doenças</h4>
            <p>
              A varíola chegou antes dos exércitos. Antes de Cortés retomar o
              ataque, uma epidemia matou cerca de <strong>50% da
              população asteca</strong>, incluindo o sucessor de Moctezuma.
              Populações sem imunidade prévia foram devastadas.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Alianças políticas</h4>
            <p>
              Os Tlaxcaltecas e outros povos oprimidos viram nos espanhóis uma
              chance de derrubar a dominação asteca. Dezenas de milhares de
              guerreiros indígenas lutaram do lado de Cortés.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Divisão interna</h4>
            <p>
              Os impérios asteca e inca passavam por guerras civis e crises
              de sucessão no exato momento da chegada europeia — enfraquecendo
              a capacidade de resposta coordenada.
            </p>
          </div>
        </div>
        <div className="lesson-highlight">
          <strong>Atenção:</strong> O ENEM frequentemente questiona explicações
          monocausais. A conquista não foi apenas "superioridade europeia":
          foi a confluência de doenças (o fator mais letal), tecnologia,
          alianças indígenas e divisão interna dos impérios.
        </div>
      </section>

      {/* ─── SEÇÃO 3: CONQUISTA DOS INCAS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Conquista</span>
        <h2>A queda do Tawantinsuyu (1532–1533)</h2>
        <p>
          Francisco Pizarro chegou ao Peru em 1532 com apenas 168 soldados.
          Em <strong>Cajamarca</strong>, encontrou o Sapa Inca{" "}
          <strong>Atahualpa</strong> com seu exército de 80.000 guerreiros.
        </p>
        <p>
          O que ocorreu a seguir é um dos episódios mais chocantes da história:
          usando cavalos, armas de fogo, tumulto e o elemento surpresa, os
          espanhóis capturaram Atahualpa sem sofrer uma única baixa. O Inca
          propôs um resgate extraordinário: encher um aposento de 5×6 metros
          com ouro até a altura de seus braços levantados, e duas vezes mais
          em prata. O resgate foi pago — mas Pizarro executou Atahualpa mesmo
          assim, em 1533.
        </p>
        <p>
          A captura do Sapa Inca (filho do Sol) paralisou politicamente o
          império. A guerra civil entre Atahualpa e seu irmão Huáscar (que
          precedeu a chegada de Pizarro) havia enfraquecido a resistência. Em
          1533, Cuzco caiu.
        </p>
      </section>

      {/* ─── SEÇÃO 4: O GENOCÍDIO INDÍGENA ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Consequências</span>
        <h2>O colapso demográfico</h2>
        <p>
          O impacto das epidemias é difícil de dimensionar pela mente humana.
          Estimativas indicam que a população das Américas caiu de 50–100
          milhões (1492) para 5–10 milhões (1600) — uma redução de{" "}
          <strong>80–90% em um século</strong>. Esse colapso demográfico é
          considerado o maior da história humana.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Doença</th>
                <th>Origem</th>
                <th>Impacto nas Américas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Varíola</td>
                <td>Europa / África</td>
                <td>Principal matadora; chegou antes dos exércitos</td>
              </tr>
              <tr>
                <td>Sarampo</td>
                <td>Europa</td>
                <td>Mortalidade altíssima em populações virgens</td>
              </tr>
              <tr>
                <td>Tifo</td>
                <td>Europa / Ásia</td>
                <td>Epidemias no México (1545, 1576) mataram milhões</td>
              </tr>
              <tr>
                <td>Influenza</td>
                <td>Europa / Ásia</td>
                <td>Devastou ilhas caribenhas rapidamente</td>
              </tr>
              <tr>
                <td>Malária / febre amarela</td>
                <td>África (via tráfico)</td>
                <td>Chegou com os escravizados africanos</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Além das doenças, houve violência direta: massacres, escravidão
          e trabalho forçado. A estrutura colonial destruiu sistemas alimentares
          e redes de sobrevivência construídos ao longo de milênios.
        </p>
      </section>

      {/* ─── SEÇÃO 5: SISTEMAS DE EXPLORAÇÃO DE MÃO DE OBRA ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Exploração colonial</span>
        <h2>Sistemas de trabalho na colônia espanhola</h2>
        <p>
          A colonização espanhola criou sistemas formais de exploração da
          mão de obra indígena:
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Sistema</th>
                <th>Definição formal</th>
                <th>Realidade na prática</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Encomienda</td>
                <td>
                  Concessão de indígenas a um colonizador para trabalho e
                  catequese
                </td>
                <td>Escravidão disfarçada; sem salário, sem liberdade</td>
              </tr>
              <tr>
                <td>Mita colonial</td>
                <td>
                  Trabalho rotativo obrigatório nas minas (sistema adaptado dos
                  Incas)
                </td>
                <td>
                  Potosí: 13.000 mitayos/ano; mortalidade de 30–50%
                </td>
              </tr>
              <tr>
                <td>Yanaconas</td>
                <td>Servos permanentes sem vínculo comunitário</td>
                <td>
                  Separados das comunidades, dependentes total do senhor
                </td>
              </tr>
              <tr>
                <td>Repartimiento</td>
                <td>Distribuição temporária de trabalhadores indígenas</td>
                <td>
                  Usado para obras públicas, mineração e agricultura
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SEÇÃO 6: SVG VICEREINADOS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Administração colonial</span>
        <h2>Os Vice-Reinados espanhóis</h2>
        <p>
          Para administrar seu vasto império colonial, a Espanha criou uma
          estrutura hierárquica com sede em Madrid (Consejo de Indias) e
          Sevilla (Casa de Contratación, responsável pelo monopólio comercial).
        </p>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 560 380"
            width="560"
            height="380"
            aria-label="Mapa esquemático dos Vice-Reinados espanhóis nas Américas"
          >
            <rect width="560" height="380" fill="#eef4f8" rx="8" />
            {/* América do Norte */}
            <path
              d="M60,20 L200,20 L240,70 L260,50 L310,60 L300,120 L230,130 L210,180 L180,190 L160,210 L120,200 L90,230 L60,190 L45,130 Z"
              fill="#c8d8c8"
              stroke="#7aaa7a"
              strokeWidth="1"
            />
            {/* Vice-Reino da Nova Espanha */}
            <path
              d="M150,120 L230,110 L260,140 L250,190 L210,200 L175,185 L155,160 Z"
              fill="#e8a060"
              stroke="#a05010"
              strokeWidth="1.5"
            />
            <text x="205" y="158" fontSize="8" fontWeight="bold" fill="#5a2000" textAnchor="middle">NOVA ESPANHA</text>
            <text x="205" y="169" fontSize="7" fill="#5a2000" textAnchor="middle">(1535)</text>

            {/* América Central */}
            <path
              d="M210,200 L250,193 L260,215 L235,235 L205,225 Z"
              fill="#d0e8d0"
              stroke="#7aaa7a"
              strokeWidth="1"
            />
            {/* América do Sul */}
            <path
              d="M200,250 L290,228 L330,255 L350,330 L330,375 L270,385 L210,370 L180,330 L170,280 Z"
              fill="#c8d8c8"
              stroke="#7aaa7a"
              strokeWidth="1.5"
            />
            {/* Vice-Reino do Peru */}
            <path
              d="M185,270 L240,255 L265,285 L255,345 L225,360 L195,340 L178,305 Z"
              fill="#6ab0e0"
              stroke="#2060a0"
              strokeWidth="1.5"
            />
            <text x="225" y="307" fontSize="8" fontWeight="bold" fill="#103060" textAnchor="middle">PERU</text>
            <text x="225" y="317" fontSize="7" fill="#103060" textAnchor="middle">(1542)</text>

            {/* Vice-Reino Nova Granada (tardio) */}
            <path
              d="M215,230 L265,222 L285,250 L265,278 L230,268 Z"
              fill="#a0d0a0"
              stroke="#306030"
              strokeWidth="1.5"
            />
            <text x="250" y="252" fontSize="7" fontWeight="bold" fill="#204020" textAnchor="middle">NOVA GRANADA</text>
            <text x="250" y="261" fontSize="6.5" fill="#204020" textAnchor="middle">(1717)</text>

            {/* Rio da Prata */}
            <path
              d="M225,340 L270,330 L295,350 L290,380 L250,390 L215,375 Z"
              fill="#d0a0d0"
              stroke="#703080"
              strokeWidth="1.5"
            />
            <text x="258" y="362" fontSize="7" fontWeight="bold" fill="#401050" textAnchor="middle">RIO DA PRATA</text>
            <text x="258" y="371" fontSize="6.5" fill="#401050" textAnchor="middle">(1776)</text>

            {/* Legenda */}
            <rect x="360" y="20" width="14" height="10" fill="#e8a060" />
            <text x="378" y="30" fontSize="9" fill="#333">Nova Espanha (México)</text>
            <rect x="360" y="38" width="14" height="10" fill="#6ab0e0" />
            <text x="378" y="48" fontSize="9" fill="#333">Peru (Lima)</text>
            <rect x="360" y="56" width="14" height="10" fill="#a0d0a0" />
            <text x="378" y="66" fontSize="9" fill="#333">Nova Granada (Bogotá)</text>
            <rect x="360" y="74" width="14" height="10" fill="#d0a0d0" />
            <text x="378" y="84" fontSize="9" fill="#333">Rio da Prata (Buenos Aires)</text>

            {/* Título */}
            <text x="450" y="115" fontSize="10" fontWeight="bold" fill="#333" textAnchor="middle">Vice-Reinados</text>
            <text x="450" y="128" fontSize="9" fill="#555" textAnchor="middle">Espanhóis</text>

            {/* Norte */}
            <text x="510" y="22" fontSize="11" fontWeight="bold" fill="#555">N</text>
            <line x1="515" y1="24" x2="515" y2="40" stroke="#555" strokeWidth="1.5" />
            <polygon points="515,20 512,28 518,28" fill="#555" />
          </svg>
          <figcaption>
            Os quatro Vice-Reinados espanhóis nas Américas. A Nova Espanha
            (1535) e o Peru (1542) foram os primeiros; Nova Granada (1717) e
            Rio da Prata (1776) foram criados depois.
          </figcaption>
        </figure>

        <p>
          A hierarquia administrativa incluía: <strong>Rei de Espanha</strong>{" "}
          → <strong>Consejo de Indias</strong> (Madrid) → Vice-Rei → Audiências
          (tribunais) → Governadores e Corregidores → Cabildo (câmara
          municipal). A Casa de Contratación em Sevilha controlava todo o
          comércio colonial.
        </p>
      </section>

      {/* ─── SEÇÃO 7: POTOSÍ E A MITA ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Mineração</span>
        <h2>Potosí: "a montanha que devora homens"</h2>
        <p>
          Descoberta em 1545 na atual Bolívia, a mina de prata do Cerro Rico
          de <strong>Potosí</strong> tornou-se a maior fonte de riqueza do
          mundo moderno e a tragédia humana mais intensa do Ocidente colonial.
        </p>
        <p>
          A expressão "vale mais que Potosí" entrou para a língua castelhana
          como sinônimo de riqueza incalculável. Mas o preço humano era
          correspondente: a <strong>mita de Potosí</strong> obrigava cada
          comunidade indígena andina a enviar um sétimo de seus homens adultos
          para trabalhar na mina por um ano. Cerca de <strong>13.000 mitayos
          por ano</strong>, trabalhando sem luz natural, respirando vapores de
          mercúrio (usado para separar a prata) e carregando minério nos
          ombros por túneis de centenas de metros de profundidade.
        </p>
        <p>
          Estima-se que entre 8 e 9 milhões de indígenas morreram nas minas
          de Potosí ao longo de dois séculos. A prata extraída fluía para a
          Espanha e, via o <strong>Galeão de Manila</strong>, para a China —
          estabelecendo o primeiro circuito comercial verdadeiramente global.
          O excesso de prata na Europa causou a <strong>Revolução dos
          Preços</strong>: inflação generalizada no século XVI.
        </p>
      </section>

      {/* ─── SEÇÃO 8: BARTOLOMÉ DE LAS CASAS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Debate e resistência</span>
        <h2>A defesa dos índios: Las Casas e Valladolid</h2>
        <p>
          Nem todos os espanhóis aceitaram passivamente o genocídio. O bispo
          dominicano <strong>Bartolomé de Las Casas</strong> foi a voz mais
          poderosa em defesa dos indígenas. Em sua{" "}
          <em>Brevíssima Relação da Destruição das Índias</em> (1542),
          descreveu com detalhes chocantes os massacres, a escravidão e o
          trabalho forçado — e apresentou o texto ao Rei Carlos I (Carlos V do
          Sacro Império).
        </p>
        <p>
          O resultado foi um debate histórico: o{" "}
          <strong>Debate de Valladolid</strong> (1550–1551), o primeiro debate
          oficial sobre os direitos humanos na história moderna. De um lado,
          Las Casas; do outro, Juan Ginés de <strong>Sepúlveda</strong>, que
          defendia que os índios eram "escravos por natureza" (usando Aristóteles)
          e que a guerra de conquista era justa. As <strong>Leis Novas</strong>{" "}
          (1542) proibiram formalmente a encomienda — mas nunca foram
          cumpridas nas colônias.
        </p>
        <div className="lesson-highlight">
          <strong>Para o ENEM:</strong> Bartolomé de Las Casas é frequentemente
          apresentado em textos de análise histórica. Lembre-se: ele defendeu
          os índios, mas inicialmente sugeriu usar africanos escravizados como
          alternativa — posição que depois abandonou e da qual se arrependeu.
          Esse paradoxo é historicamente significativo.
        </div>
      </section>

      {/* ─── SEÇÃO 9: A IGREJA CATÓLICA ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Religião e cultura</span>
        <h2>A Igreja Católica na colonização espanhola</h2>
        <p>
          A conversão religiosa foi parte essencial da justificativa da
          conquista. As ordens missionárias (dominicanos, franciscanos,
          jesuítas, agostinhos) chegaram junto com os conquistadores.
        </p>
        <p>
          A catequese foi frequentemente forçada: templos foram destruídos e
          substituídos por igrejas. O Bispo Diego de Landa queimou dezenas de
          manuscritos maias em 1562 — um dos maiores atos de destruição cultural
          da história. Apenas quatro códices maias sobreviveram.
        </p>
        <p>
          O resultado, porém, não foi a eliminação das religiões indígenas: foi
          o <strong>sincretismo</strong>. Os indígenas reinterpretaram os santos
          católicos através de suas próprias divindades. A{" "}
          <strong>Virgem de Guadalupe</strong> (aparição de 1531) foi
          identificada com Tonantzin, deusa azteca da terra — e tornou-se o
          símbolo mais poderoso do México até hoje.
        </p>
        <p>
          Exceção notável foram as <strong>Reduções Jesuíticas do
          Paraguai</strong> (séculos XVII–XVIII): comunidades organizadas pelos
          jesuítas junto aos Guaranis, com autonomia relativa, proteção contra
          a escravidão e preservação parcial da cultura. Foram destruídas em
          1767, quando a Companhia de Jesus foi expulsa das colônias
          ibéricas.
        </p>
      </section>

      {/* ─── SEÇÃO 10: SVG FLUXO COLONIAL ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>O fluxo do trabalho e da riqueza colonial</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 560 260"
            width="560"
            height="260"
            aria-label="Diagrama do fluxo da mita e da riqueza colonial espanhola"
          >
            <rect width="560" height="260" fill="#f5f0e8" rx="8" />

            {/* Título */}
            <text x="280" y="22" fontSize="11" fontWeight="bold" fill="#333" textAnchor="middle">
              Fluxo do trabalho colonial espanhol (séc. XVI–XVII)
            </text>

            {/* Bloco: Comunidades Indígenas */}
            <rect x="20" y="50" width="120" height="60" rx="6" fill="#c8dfc8" stroke="#5a8a5a" strokeWidth="1.5" />
            <text x="80" y="75" fontSize="9" fontWeight="bold" fill="#2a5a2a" textAnchor="middle">Comunidades</text>
            <text x="80" y="87" fontSize="9" fill="#2a5a2a" textAnchor="middle">Indígenas</text>
            <text x="80" y="100" fontSize="8" fill="#2a5a2a" textAnchor="middle">(mitayos / yanaconas)</text>

            {/* Seta → Mina */}
            <line x1="140" y1="80" x2="190" y2="80" stroke="#888" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="165" y="73" fontSize="7.5" fill="#666" textAnchor="middle">trabalho forçado</text>
            <text x="165" y="82" fontSize="7.5" fill="#666" textAnchor="middle">(mita)</text>

            {/* Bloco: Mina de Potosí */}
            <rect x="190" y="50" width="120" height="60" rx="6" fill="#c8b878" stroke="#a08030" strokeWidth="1.5" />
            <text x="250" y="75" fontSize="9" fontWeight="bold" fill="#5a3000" textAnchor="middle">Mina de Potosí</text>
            <text x="250" y="87" fontSize="9" fill="#5a3000" textAnchor="middle">(prata)</text>
            <text x="250" y="100" fontSize="8" fill="#5a3000" textAnchor="middle">8-9 mi mortos</text>

            {/* Seta → Espanha */}
            <line x1="310" y1="65" x2="360" y2="55" stroke="#888" strokeWidth="2" />
            <polygon points="360,55 352,51 354,59" fill="#888" />
            <text x="335" y="52" fontSize="7.5" fill="#666" textAnchor="middle">prata</text>

            {/* Bloco: Espanha */}
            <rect x="360" y="30" width="100" height="50" rx="6" fill="#e8a060" stroke="#a05010" strokeWidth="1.5" />
            <text x="410" y="52" fontSize="9" fontWeight="bold" fill="#5a2000" textAnchor="middle">Espanha</text>
            <text x="410" y="64" fontSize="8" fill="#5a2000" textAnchor="middle">(Sevilla)</text>
            <text x="410" y="75" fontSize="8" fill="#5a2000" textAnchor="middle">tesouraria real</text>

            {/* Seta → China via Manila */}
            <line x1="310" y1="90" x2="360" y2="115" stroke="#888" strokeWidth="2" />
            <polygon points="360,115 352,109 358,116" fill="#888" />
            <text x="335" y="108" fontSize="7.5" fill="#666" textAnchor="middle">prata</text>

            {/* Bloco: China (via Manila) */}
            <rect x="360" y="110" width="100" height="50" rx="6" fill="#d0a0d0" stroke="#803080" strokeWidth="1.5" />
            <text x="410" y="132" fontSize="9" fontWeight="bold" fill="#401050" textAnchor="middle">China</text>
            <text x="410" y="144" fontSize="8" fill="#401050" textAnchor="middle">(via Galeão</text>
            <text x="410" y="155" fontSize="8" fill="#401050" textAnchor="middle">de Manila)</text>

            {/* Seta bidirecional Espanha-Europa */}
            <line x1="460" y1="55" x2="510" y2="55" stroke="#888" strokeWidth="2" />
            <polygon points="510,55 502,51 502,59" fill="#888" />
            <text x="485" y="48" fontSize="7.5" fill="#666" textAnchor="middle">prata → inflação</text>
            <text x="485" y="57" fontSize="7.5" fill="#555" textAnchor="middle">Revolução dos Preços</text>

            {/* Seta encomienda */}
            <line x1="80" y1="110" x2="80" y2="160" stroke="#c05050" strokeWidth="1.5" strokeDasharray="4,3" />
            <polygon points="80,165 76,157 84,157" fill="#c05050" />
            <rect x="20" y="165" width="130" height="50" rx="6" fill="#f0c0c0" stroke="#c05050" strokeWidth="1.5" />
            <text x="85" y="184" fontSize="8.5" fontWeight="bold" fill="#7a0000" textAnchor="middle">Encomienda</text>
            <text x="85" y="196" fontSize="8" fill="#7a0000" textAnchor="middle">índios distribuídos</text>
            <text x="85" y="207" fontSize="8" fill="#7a0000" textAnchor="middle">a colonizadores</text>

            {/* Seta encomienda → Espanha */}
            <line x1="150" y1="190" x2="360" y2="45" stroke="#c05050" strokeWidth="1" strokeDasharray="4,3" />

            {/* Legenda */}
            <line x1="20" y1="240" x2="50" y2="240" stroke="#888" strokeWidth="2" />
            <text x="55" y="244" fontSize="8" fill="#555">Fluxo de riqueza</text>
            <line x1="160" y1="240" x2="190" y2="240" stroke="#c05050" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="195" y="244" fontSize="8" fill="#555">Exploração de trabalho</text>

            {/* Seta marker */}
            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <polygon points="0,0 6,3 0,6" fill="#888" />
              </marker>
            </defs>
          </svg>
          <figcaption>
            Fluxo simplificado do sistema colonial espanhol: trabalho indígena
            forçado gerava prata que alimentava as economias da Espanha e da
            China.
          </figcaption>
        </figure>
      </section>

      {/* ─── EXERCÍCIOS ─── */}
      <Exercise
        level="Básico"
        title="A Noite Triste"
        statement={
          <p>
            Durante a conquista do México, houve um episódio em que os Astecas
            expulsaram temporariamente as forças de Hernán Cortés de
            Tenochtitlán, com grandes baixas espanholas. Esse episódio ficou
            conhecido como:
          </p>
        }
        options={[
          { letter: "A", text: "Batalha de Otumba" },
          { letter: "B", text: "Noite Triste", correct: true },
          { letter: "C", text: "Queda de Cuzco" },
          { letter: "D", text: "Massacre de Cajamarca" },
          { letter: "E", text: "Debate de Valladolid" },
        ]}
        resolution={
          <p>
            A <strong>Noite Triste</strong> ocorreu em 30 de junho de 1520,
            quando os Astecas expulsaram Cortés de Tenochtitlán com pesadas
            baixas espanholas. A Batalha de Otumba foi a revanche de Cortés.
            Cajamarca foi o episódio da conquista dos Incas por Pizarro.
          </p>
        }
      />

      <Exercise
        level="Intermediário"
        title="A mita de Potosí"
        statement={
          <p>
            A mita colonial aplicada nas minas de Potosí (atual Bolívia) era
            um sistema de:
          </p>
        }
        options={[
          {
            letter: "A",
            text: "Escravidão africana importada diretamente para as minas",
          },
          {
            letter: "B",
            text: "Trabalho voluntário remunerado em prata oferecido a trabalhadores livres",
          },
          {
            letter: "C",
            text: "Trabalho obrigatório e rotativo imposto às comunidades indígenas andinas, que enviavam uma fração de seus homens à mina",
            correct: true,
          },
          {
            letter: "D",
            text: "Sistema de encomienda aplicado ao trabalho agrícola nas haciendas",
          },
          {
            letter: "E",
            text: "Distribuição de terras aos colonizadores em troca de exploração mineira",
          },
        ]}
        resolution={
          <p>
            A <strong>mita colonial</strong> era uma adaptação do sistema inca:
            cada comunidade indígena andina enviava um sétimo de seus homens
            adultos para trabalhar nas minas por períodos rotativos. Não era
            remunerado de forma justa, e a mortalidade era altíssima (vapores
            de mercúrio, colapso de túneis, exaustão). A escravidão africana
            era predominante no Brasil, não nas minas andinas.
          </p>
        }
      />

      <Exercise
        level="Avançado"
        title="O Debate de Valladolid"
        statement={
          <p>
            O Debate de Valladolid (1550–1551) opôs Bartolomé de Las Casas a
            Juan Ginés de Sepúlveda. O ponto central do debate era:
          </p>
        }
        options={[
          {
            letter: "A",
            text: "A distribuição dos lucros da mineração entre a Coroa e os colonizadores",
          },
          {
            letter: "B",
            text: "A legitimidade da guerra de conquista e da escravidão dos indígenas — se estes eram 'escravos por natureza' (Sepúlveda) ou seres dotados de razão e dignidade (Las Casas)",
            correct: true,
          },
          {
            letter: "C",
            text: "A administração dos vice-reinados e o poder dos governadores locais",
          },
          {
            letter: "D",
            text: "O monopólio comercial da Casa de Contratación em Sevilha",
          },
          {
            letter: "E",
            text: "A conversão religiosa dos índios e a competência entre dominicanos e franciscanos",
          },
        ]}
        resolution={
          <p>
            Sepúlveda usou Aristóteles para argumentar que alguns seres
            humanos são "escravos por natureza" — e que os índios se
            enquadravam nessa categoria, legitimando a guerra e a servidão.
            Las Casas replicou com testemunho direto e argumentos teológicos:
            todos os humanos têm alma racional e não podem ser escravizados.
            O debate é considerado o primeiro debate formal sobre direitos
            humanos universais na história moderna.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="(ENEM-estilo) Doenças e conquista"
        statement={
          <>
            <p>
              "Antes de Cortés retornar a Tenochtitlán para o ataque final em
              1521, a varíola já havia varrido metade da população da cidade.
              O próprio sucessor de Moctezuma, Cuitláhuac, morreu da doença.
              Os espanhóis combateram inimigos que mal conseguiam ficar de pé."
              (Adaptado de Alfred Crosby, <em>The Columbian Exchange</em>,
              1972.)
            </p>
          </>
        }
        options={[
          {
            letter: "A",
            text: "O texto sugere que a conquista espanhola foi determinada exclusivamente pela superioridade tecnológica europeia",
          },
          {
            letter: "B",
            text: "Segundo o texto, as epidemias foram um fator decisivo na conquista, enfraquecendo militarmente os impérios indígenas antes mesmo das batalhas decisivas",
            correct: true,
          },
          {
            letter: "C",
            text: "A passagem indica que os indígenas eram biologicamente inferiores aos europeus",
          },
          {
            letter: "D",
            text: "O texto afirma que Cortés utilizou a varíola deliberadamente como arma biológica",
          },
          {
            letter: "E",
            text: "Segundo Crosby, as doenças não influenciaram o resultado militar da conquista",
          },
        ]}
        resolution={
          <p>
            A tese de Alfred Crosby sobre o "Columbian Exchange" destaca que
            as <strong>epidemias</strong> foram tão ou mais decisivas que as
            armas de fogo. Populações sem imunidade prévia à varíola, sarampo
            e outras doenças europeias foram devastadas — algumas comunidades
            perderam 50–90% de sua população. O texto não sugere inferioridade
            biológica (falta de imunidade é histórica, não racial) nem uso
            deliberado de armas biológicas.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="A Revolução dos Preços"
        statement={
          <p>
            A extração massiva de prata em Potosí e a sua circulação pela
            Europa no século XVI causaram um fenômeno econômico conhecido como
            "Revolução dos Preços". Esse fenômeno correspondia a:
          </p>
        }
        options={[
          {
            letter: "A",
            text: "Deflação: a abundância de prata reduziu os preços de bens na Europa",
          },
          {
            letter: "B",
            text: "Inflação generalizada: o excesso de prata em circulação na Europa desvalorizou a moeda e elevou os preços dos bens de consumo",
            correct: true,
          },
          {
            letter: "C",
            text: "Crise cambial: a prata colonial desvalorizou o ouro africano nos mercados europeus",
          },
          {
            letter: "D",
            text: "Estagnação: o monopólio espanhol impediu que a prata circulasse fora da Península Ibérica",
          },
          {
            letter: "E",
            text: "Prosperidade: a prata de Potosí financiou a industrialização europeia no século XVI",
          },
        ]}
        resolution={
          <p>
            A <strong>Revolução dos Preços</strong> foi o processo inflacionário
            causado pelo afluxo massivo de metais preciosos coloniais à Europa.
            Pela teoria quantitativa da moeda: mais dinheiro em circulação sem
            aumento proporcional de bens = queda do poder de compra da moeda
            = aumento dos preços. A inflação favoreceu comerciantes e
            prejudicou assalariados e nobres com rendas fixas — acelerando
            transformações sociais na Europa moderna.
          </p>
        }
      />
    </article>
  );
}
