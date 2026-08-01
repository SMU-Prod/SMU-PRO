"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap23Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 23</span>
          <h1>Brasil Colonial: economia açucareira</h1>
          <p>
            Por mais de um século, o Brasil foi a maior produtora de açúcar do
            mundo — e esse açúcar foi produzido em engenhos movidos por trabalho
            escravizado, estruturando uma sociedade profundamente desigual,
            patriarcal e exportadora que marcou o Brasil muito além do período
            colonial.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 1: FASE DO ESCAMBO ─── */}
      <section className="lesson-section">
        <span className="section-kicker">1500–1530</span>
        <h2>O Ciclo do Pau-Brasil</h2>
        <p>
          Nos primeiros trinta anos após a chegada de Cabral, Portugal não
          colonizou o Brasil de verdade: explorou. O principal produto era o{" "}
          <strong>pau-brasil</strong>, madeira de coloração avermelhada usada
          para tingir tecidos na Europa, que valia ouro nos mercados flamengos
          e italianos.
        </p>
        <p>
          A exploração se dava por <strong>escambo</strong>: os indígenas
          cortavam e carregavam a madeira até o litoral em troca de objetos
          europeus (facas, espelhos, machados). O sistema, chamado{" "}
          <strong>cunhadismo</strong>, baseava-se em relações pessoais de
          aliança — o português tomava uma mulher indígena como companheira e
          passava a integrar a rede de parentesco da aldeia. Os filhos desses
          relacionamentos, os <strong>mamelucos</strong>, tornaram-se
          intermediários essenciais.
        </p>
        <p>
          A Coroa portuguesa mantinha{" "}
          <strong>feitorias</strong> no litoral (como a de Cabo Frio) mas não
          investia em colonização sistemática. O interesse principal ainda era
          o lucrativo comércio com a Índia e o Oriente. O Brasil era,
          literalmente, uma reserva para o futuro.
        </p>
        <p>
          O que mudou esse quadro foi a <strong>ameaça francesa</strong>:
          corsários e mercadores franceses começaram a fazer o mesmo escambo
          com os índios, ignorando o Tratado de Tordesilhas. Se Portugal não
          ocupasse, perderia o território.
        </p>
      </section>

      {/* ─── SEÇÃO 2: CAPITANIAS HEREDITÁRIAS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">1532–1549</span>
        <h2>Capitanias hereditárias: a tentativa fracassada</h2>
        <p>
          Em 1532–1534, D. João III dividiu o Brasil em{" "}
          <strong>15 faixas</strong> que iam do litoral até a linha de
          Tordesilhas, entregues a <strong>12 donatários</strong> — nobres e
          funcionários da Coroa que deveriam colonizar à própria custa. A
          Coroa não pagava nada: os donatários tinham direitos de cobrar
          impostos, escravizar índios e fundar cidades, em troca de ocupar e
          defender o território.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Capitania</th>
                <th>Donatário</th>
                <th>Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pernambuco</td>
                <td>Duarte Coelho Pereira</td>
                <td>Sucesso — açúcar, engenhos, capital Olinda</td>
              </tr>
              <tr>
                <td>São Vicente</td>
                <td>Martim Afonso de Sousa</td>
                <td>Sucesso parcial — primeiro engenho do Brasil (1532)</td>
              </tr>
              <tr>
                <td>Maranhão</td>
                <td>Fernão Álvares de Andrade</td>
                <td>Fracasso — nunca foi ocupada efetivamente</td>
              </tr>
              <tr>
                <td>Rio de Janeiro</td>
                <td>Martim Afonso (parte)</td>
                <td>Fracasso inicial — dominada por franceses até 1565</td>
              </tr>
              <tr>
                <td>Bahia de Todos os Santos</td>
                <td>Francisco Pereira Coutinho</td>
                <td>Fracasso — donatário morto por índios</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          O balanço geral foi de fracasso. A maioria dos donatários não tinha
          recursos para colonizar; os conflitos com os indígenas eram
          constantes; e o Brasil ainda não tinha produto claramente lucrativo.
          Apenas Pernambuco e São Vicente prosperaram.
        </p>
      </section>

      {/* ─── SEÇÃO 3: GOVERNO-GERAL ─── */}
      <section className="lesson-section">
        <span className="section-kicker">1549</span>
        <h2>O Governo-Geral e a centralização</h2>
        <p>
          Diante do fracasso das capitanias, D. João III criou o{" "}
          <strong>Governo-Geral</strong> em 1549, enviando{" "}
          <strong>Tomé de Sousa</strong> como primeiro governador-geral com
          poderes militares, judiciais e administrativos sobre todo o Brasil.
        </p>
        <p>
          A capital foi estabelecida em <strong>Salvador, Bahia</strong> —
          escolhida por sua baía protegida e posição central no litoral. Junto
          com Tomé de Sousa chegou o padre jesuíta{" "}
          <strong>Manuel da Nóbrega</strong> com seis companheiros — início
          da presença jesuíta no Brasil, que duraria dois séculos.
        </p>
        <div className="lesson-highlight">
          <strong>Para o ENEM:</strong> A criação do Governo-Geral marca a
          passagem do modelo de concessão privada para o controle direto da
          Coroa. Não extinguiu as capitanias (que persistiram), mas criou uma
          autoridade central superior a elas.
        </div>
        <p>
          Os governadores-gerais seguintes (Duarte da Costa e Mem de Sá)
          consolidaram a colonização: Mem de Sá expulsou os franceses do Rio
          de Janeiro em 1560 (fundação da cidade em 1565 por seu sobrinho,
          Estácio de Sá) e combateu os índios Tupinambás aliados dos
          franceses.
        </p>
      </section>

      {/* ─── SEÇÃO 4: A OPÇÃO PELO AÇÚCAR ─── */}
      <section className="lesson-section">
        <span className="section-kicker">A grande escolha econômica</span>
        <h2>Por que o açúcar?</h2>
        <p>
          A escolha do açúcar como produto central da colonização foi uma
          decisão estratégica baseada em três fatores:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <h4>Condições naturais do Brasil</h4>
            <p>
              O Nordeste brasileiro tem clima tropical úmido, chuvas regulares
              e solos de massapê (argiloso, rico em nutrientes) — ideais para
              a cana-de-açúcar. Pernambuco e Bahia reuniam essas condições.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Experiência portuguesa</h4>
            <p>
              Portugal já cultivava cana e produzia açúcar nas ilhas atlânticas
              (Madeira desde 1452, Açores, São Tomé). Tinham a tecnologia,
              os capitais e as redes comerciais.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Mercado europeu</h4>
            <p>
              Até o século XVI, o açúcar era artigo de luxo na Europa —
              tão caro que era prescrito por médicos e guardado em cofres. A
              demanda era enorme e crescente.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Capital holandês</h4>
            <p>
              Comerciantes flamengos (dos Países Baixos, então sob domínio
              espanhol) financiaram engenhos e controlaram a distribuição do
              açúcar na Europa. Antuérpia era o principal porto de distribuição.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SEÇÃO 5: O ENGENHO E DIAGRAMA SVG ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Estrutura produtiva</span>
        <h2>O engenho açucareiro colonial</h2>
        <p>
          O engenho era uma unidade agroindustrial complexa que combinava
          agricultura e processamento em um único espaço. Havia três tipos:
          o <strong>engenho real</strong> (movido a água, maior e mais eficiente),
          o <strong>trapiche</strong> (movido por bois) e as{" "}
          <strong>engenhocas</strong> (menores, menos produtivas).
        </p>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 580 320"
            width="580"
            height="320"
            aria-label="Planta esquemática de um engenho açucareiro colonial"
          >
            <rect width="580" height="320" fill="#f5f0e0" rx="8" />
            <text x="290" y="20" fontSize="12" fontWeight="bold" fill="#333" textAnchor="middle">
              Planta Esquemática de um Engenho Colonial
            </text>

            {/* Canavial */}
            <rect x="10" y="35" width="130" height="80" rx="4" fill="#8bc34a" stroke="#558b2f" strokeWidth="1.5" />
            <text x="75" y="73" fontSize="9" fontWeight="bold" fill="#1b5e20" textAnchor="middle">CANAVIAL</text>
            <text x="75" y="86" fontSize="8" fill="#1b5e20" textAnchor="middle">Cana-de-açúcar</text>
            <text x="75" y="99" fontSize="7.5" fill="#1b5e20" textAnchor="middle">12-18 meses de ciclo</text>

            {/* Seta canavial → moenda */}
            <line x1="140" y1="75" x2="170" y2="75" stroke="#666" strokeWidth="1.5" />
            <polygon points="170,75 163,71 163,79" fill="#666" />

            {/* Moenda */}
            <rect x="170" y="40" width="100" height="70" rx="4" fill="#d4a856" stroke="#a07820" strokeWidth="1.5" />
            <text x="220" y="68" fontSize="9" fontWeight="bold" fill="#5a3500" textAnchor="middle">MOENDA</text>
            <text x="220" y="81" fontSize="8" fill="#5a3500" textAnchor="middle">(água / bois)</text>
            <text x="220" y="94" fontSize="7.5" fill="#5a3500" textAnchor="middle">extração do caldo</text>

            {/* Seta moenda → caldeira */}
            <line x1="270" y1="75" x2="300" y2="75" stroke="#666" strokeWidth="1.5" />
            <polygon points="300,75 293,71 293,79" fill="#666" />

            {/* Casa de caldeira */}
            <rect x="300" y="40" width="110" height="70" rx="4" fill="#ef9a9a" stroke="#c62828" strokeWidth="1.5" />
            <text x="355" y="65" fontSize="9" fontWeight="bold" fill="#7f0000" textAnchor="middle">CASA DE CALDEIRA</text>
            <text x="355" y="77" fontSize="8" fill="#7f0000" textAnchor="middle">cozimento do caldo</text>
            <text x="355" y="90" fontSize="7.5" fill="#7f0000" textAnchor="middle">(4 tachos de cobre)</text>

            {/* Seta caldeira → casa de purgar */}
            <line x1="410" y1="75" x2="440" y2="75" stroke="#666" strokeWidth="1.5" />
            <polygon points="440,75 433,71 433,79" fill="#666" />

            {/* Casa de purgar */}
            <rect x="440" y="40" width="120" height="70" rx="4" fill="#ce93d8" stroke="#6a1b9a" strokeWidth="1.5" />
            <text x="500" y="65" fontSize="9" fontWeight="bold" fill="#4a0072" textAnchor="middle">CASA DE PURGAR</text>
            <text x="500" y="77" fontSize="8" fill="#4a0072" textAnchor="middle">cristalização</text>
            <text x="500" y="90" fontSize="7.5" fill="#4a0072" textAnchor="middle">açúcar bruto / refinado</text>

            {/* Senzala */}
            <rect x="10" y="160" width="160" height="65" rx="4" fill="#9e9e9e" stroke="#424242" strokeWidth="1.5" />
            <text x="90" y="190" fontSize="9" fontWeight="bold" fill="#ffffff" textAnchor="middle">SENZALA</text>
            <text x="90" y="202" fontSize="8" fill="#e0e0e0" textAnchor="middle">habitação dos escravizados</text>
            <text x="90" y="214" fontSize="7.5" fill="#e0e0e0" textAnchor="middle">(dormitórios coletivos)</text>

            {/* Casa-Grande */}
            <rect x="200" y="160" width="160" height="65" rx="4" fill="#ffcc80" stroke="#e65100" strokeWidth="1.5" />
            <text x="280" y="190" fontSize="9" fontWeight="bold" fill="#bf360c" textAnchor="middle">CASA-GRANDE</text>
            <text x="280" y="202" fontSize="8" fill="#bf360c" textAnchor="middle">residência do senhor</text>
            <text x="280" y="214" fontSize="7.5" fill="#bf360c" textAnchor="middle">(poder, família, patriarca)</text>

            {/* Capela */}
            <rect x="390" y="160" width="100" height="65" rx="4" fill="#e3f2fd" stroke="#0d47a1" strokeWidth="1.5" />
            <text x="440" y="187" fontSize="9" fontWeight="bold" fill="#0d47a1" textAnchor="middle">CAPELA</text>
            <text x="440" y="199" fontSize="8" fill="#0d47a1" textAnchor="middle">controle religioso</text>
            <text x="440" y="211" fontSize="7.5" fill="#0d47a1" textAnchor="middle">padre + ritual</text>

            {/* Área de embarque */}
            <rect x="490" y="160" width="78" height="65" rx="4" fill="#b3e5fc" stroke="#01579b" strokeWidth="1.5" />
            <text x="529" y="187" fontSize="8" fontWeight="bold" fill="#01579b" textAnchor="middle">PORTO /</text>
            <text x="529" y="198" fontSize="8" fontWeight="bold" fill="#01579b" textAnchor="middle">EMBARQUE</text>
            <text x="529" y="211" fontSize="7.5" fill="#01579b" textAnchor="middle">→ Europa</text>

            {/* Legenda de etapas */}
            <text x="10" y="255" fontSize="10" fontWeight="bold" fill="#333">Etapas da produção:</text>
            <text x="10" y="270" fontSize="9" fill="#555">1. Corte da cana no canavial  →  2. Moagem (extração do caldo)  →  3. Cozimento nas caldeiras</text>
            <text x="10" y="285" fontSize="9" fill="#555">4. Purga e cristalização (açúcar bruto ou refinado)  →  5. Embarque para Portugal</text>

            {/* Linha conectora da produção */}
            <line x1="10" y1="115" x2="560" y2="115" stroke="#aaa" strokeWidth="0.8" strokeDasharray="4,3" />
            <text x="290" y="128" fontSize="8" fill="#888" textAnchor="middle">— — Fluxo da produção — —</text>

            {/* Linha separadora seções */}
            <line x1="10" y1="145" x2="570" y2="145" stroke="#ccc" strokeWidth="1" />
            <text x="290" y="158" fontSize="8" fill="#888" textAnchor="middle">Estrutura social e habitacional</text>
          </svg>
          <figcaption>
            Planta esquemática de um engenho açucareiro colonial brasileiro,
            mostrando os espaços de produção e habitação.
          </figcaption>
        </figure>
      </section>

      {/* ─── SEÇÃO 6: A PLANTATION COLONIAL ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Modelo econômico</span>
        <h2>A plantation: modelo exportador e escravista</h2>
        <p>
          O engenho açucareiro era uma <strong>plantation</strong> colonial —
          modelo de produção caracterizado por quatro elementos indissociáveis:
        </p>
        <ul>
          <li>
            <strong>Monocultura</strong>: plantação de um único produto (cana)
            em grande escala, tornando a economia vulnerável às oscilações do
            mercado externo
          </li>
          <li>
            <strong>Latifúndio</strong>: grandes extensões de terra nas mãos
            de poucos proprietários (senhores de engenho)
          </li>
          <li>
            <strong>Voltado para exportação</strong>: o açúcar era produzido
            para o mercado europeu, não para consumo interno
          </li>
          <li>
            <strong>Mão de obra escravizada</strong>: primeiro indígena, depois
            predominantemente africana
          </li>
        </ul>
        <p>
          Esse modelo criou uma sociedade extremamente desigual, onde a terra
          e a riqueza se concentravam nos senhores de engenho enquanto a
          imensa maioria da população vivia em condições de exploração brutal.
          Gilberto Freyre, em <em>Casa Grande e Senzala</em> (1933), descreveu
          essa sociedade com ênfase na miscigenação e no "paternalismo" —
          perspectiva hoje criticada por minimizar a violência da escravidão.
        </p>
      </section>

      {/* ─── SEÇÃO 7: PERNAMBUCO E BAHIA ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Centros açucareiros</span>
        <h2>Pernambuco e Bahia: o Nordeste açucareiro</h2>
        <p>
          No século XVII, o Brasil era o maior produtor de açúcar do mundo,
          e o Nordeste era a região mais rica e populosa do país. As capitais
          eram Olinda (Pernambuco) e Salvador (Bahia).
        </p>
        <p>
          Pernambuco dominava a produção: em 1630, tinha cerca de 150 engenhos
          ativos. Foi exatamente por isso que os holandeses a invadiram em
          1630 e a ocuparam até 1654 — queriam controlar diretamente a
          produção de açúcar, cuja distribuição já controlavam na Europa.
          Nesse período, Johan Maurits van Nassau governou Pernambuco
          (1637–1644) com política de tolerância religiosa e patronagem
          artística (os pintores Frans Post e Albert Eckhout registraram o
          Brasil nesse período).
        </p>
        <p>
          A expulsão dos holandeses (Insurreição Pernambucana, 1645–1654) foi
          um ponto de virada: os holandeses levaram o know-how açucareiro para
          as Antilhas (Suriname, Curaçao, Barbados), iniciando a concorrência
          que derrubaria os preços do açúcar brasileiro no final do século XVII.
        </p>
      </section>

      {/* ─── SEÇÃO 8: SOCIEDADE COLONIAL ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Hierarquia social</span>
        <h2>A sociedade do açúcar</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Grupo social</th>
                <th>Posição na hierarquia</th>
                <th>Função e condição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Senhor de engenho</td>
                <td>Topo da hierarquia colonial</td>
                <td>
                  Proprietário da terra, dos engenhos e dos escravizados;
                  autoridade patriarcal quase absoluta; pequena nobreza colonial
                </td>
              </tr>
              <tr>
                <td>Padre / clero</td>
                <td>Alta posição — controle ideológico</td>
                <td>
                  Legitimação religiosa do poder; catequese; educação da elite;
                  frequentemente aliado ao senhor de engenho
                </td>
              </tr>
              <tr>
                <td>Feitor / capitão-do-mato</td>
                <td>Classe intermediária</td>
                <td>
                  Encarregado da disciplina e vigilância dos escravizados;
                  instrumento da violência senhorial
                </td>
              </tr>
              <tr>
                <td>Homens livres pobres</td>
                <td>Base da pirâmide livre</td>
                <td>
                  Lavradores, artesãos, pequenos sitiantes; sem acesso à terra;
                  dependentes dos senhores para sobreviver
                </td>
              </tr>
              <tr>
                <td>Mestiços (mamelucos, mulatos)</td>
                <td>Posição intermediária e ambígua</td>
                <td>
                  Mobilidade social limitada; discriminação racial; alguns
                  alcançavam posições de feitor ou artesão
                </td>
              </tr>
              <tr>
                <td>Escravizados africanos</td>
                <td>Base da pirâmide — sem direitos</td>
                <td>
                  Trabalho compulsório nos engenhos; 14-16h/dia no corte e
                  processamento; mortalidade altíssima (50% na primeira década)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── SEÇÃO 9: O TRIÂNGULO ATLÂNTICO — SVG ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Comércio global</span>
        <h2>O triângulo comercial atlântico</h2>
        <p>
          A economia açucareira colonial não existia isolada: era parte de
          um sistema comercial atlântico que conectava três continentes.
        </p>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 520 340"
            width="520"
            height="340"
            aria-label="Diagrama do triângulo comercial atlântico do período colonial"
          >
            <rect width="520" height="340" fill="#eef5fb" rx="8" />
            <text x="260" y="22" fontSize="12" fontWeight="bold" fill="#333" textAnchor="middle">
              Triângulo Comercial Atlântico (séc. XVI–XVIII)
            </text>

            {/* Vértice 1: Europa (Portugal / topo esquerdo) */}
            <rect x="30" y="40" width="130" height="65" rx="6" fill="#f9a825" stroke="#f57f17" strokeWidth="2" />
            <text x="95" y="66" fontSize="10" fontWeight="bold" fill="#5a2a00" textAnchor="middle">EUROPA</text>
            <text x="95" y="80" fontSize="8.5" fill="#5a2a00" textAnchor="middle">Portugal / Lisboa</text>
            <text x="95" y="93" fontSize="8" fill="#5a2a00" textAnchor="middle">Antuérpia (distribuição)</text>

            {/* Vértice 2: Brasil (topo direito) */}
            <rect x="360" y="40" width="130" height="65" rx="6" fill="#4caf50" stroke="#2e7d32" strokeWidth="2" />
            <text x="425" y="66" fontSize="10" fontWeight="bold" fill="#f5f5f5" textAnchor="middle">BRASIL</text>
            <text x="425" y="80" fontSize="8.5" fill="#e8f5e9" textAnchor="middle">Pernambuco / Bahia</text>
            <text x="425" y="93" fontSize="8" fill="#e8f5e9" textAnchor="middle">engenhos açucareiros</text>

            {/* Vértice 3: África (fundo centro) */}
            <rect x="180" y="240" width="160" height="65" rx="6" fill="#795548" stroke="#4e342e" strokeWidth="2" />
            <text x="260" y="266" fontSize="10" fontWeight="bold" fill="#fff8e1" textAnchor="middle">ÁFRICA</text>
            <text x="260" y="280" fontSize="8.5" fill="#efebe9" textAnchor="middle">Angola, Costa do Ouro</text>
            <text x="260" y="293" fontSize="8" fill="#efebe9" textAnchor="middle">Costa da Mina (Daomé)</text>

            {/* Seta 1: Europa → Brasil (manufaturas, colonos) */}
            <line x1="160" y1="60" x2="358" y2="60" stroke="#f57f17" strokeWidth="2" />
            <polygon points="358,60 350,56 350,64" fill="#f57f17" />
            <text x="260" y="52" fontSize="8.5" fontWeight="bold" fill="#e65100" textAnchor="middle">mercadorias, colonos</text>

            {/* Seta 2: Brasil → Europa (açúcar, ouro, tabaco) */}
            <line x1="360" y1="75" x2="162" y2="75" stroke="#2e7d32" strokeWidth="2" />
            <polygon points="162,75 170,71 170,79" fill="#2e7d32" />
            <text x="260" y="88" fontSize="8.5" fontWeight="bold" fill="#1b5e20" textAnchor="middle">açúcar, pau-brasil, tabaco</text>

            {/* Seta 3: Europa → África (tecidos, armas, aguardente) */}
            <line x1="90" y1="105" x2="215" y2="238" stroke="#f57f17" strokeWidth="2" />
            <polygon points="215,238 211,228 220,231" fill="#f57f17" />
            <text x="128" y="185" fontSize="8.5" fill="#e65100" textAnchor="middle" transform="rotate(-50, 128, 185)">tecidos, armas, aguardente</text>

            {/* Seta 4: África → Brasil (escravizados) */}
            <line x1="335" y1="250" x2="430" y2="108" stroke="#b71c1c" strokeWidth="2.5" />
            <polygon points="430,108 422,113 427,104" fill="#b71c1c" />
            <text x="400" y="185" fontSize="9" fontWeight="bold" fill="#b71c1c" textAnchor="middle" transform="rotate(60, 400, 185)">escravizados africanos</text>

            {/* Legenda */}
            <text x="30" y="316" fontSize="9" fontWeight="bold" fill="#333">Legenda:</text>
            <line x1="90" y1="312" x2="120" y2="312" stroke="#f57f17" strokeWidth="2" />
            <text x="125" y="316" fontSize="8" fill="#555">Produtos europeus</text>
            <line x1="210" y1="312" x2="240" y2="312" stroke="#2e7d32" strokeWidth="2" />
            <text x="245" y="316" fontSize="8" fill="#555">Produtos coloniais</text>
            <line x1="330" y1="312" x2="360" y2="312" stroke="#b71c1c" strokeWidth="2.5" />
            <text x="365" y="316" fontSize="8" fill="#555">Tráfico de escravizados</text>
          </svg>
          <figcaption>
            O triângulo atlântico conectava Europa, África e Brasil em um
            sistema de trocas desigual que sustentou a economia colonial por
            três séculos.
          </figcaption>
        </figure>
      </section>

      {/* ─── SEÇÃO 10: O MERCADO EUROPEU ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Mercado e concorrência</span>
        <h2>O açúcar no mercado europeu e a crise do século XVII</h2>
        <p>
          Durante o século XVI, Portugal detinha o monopólio do açúcar
          colonial. O produto era vendido em Lisboa e redistribuído pelos
          mercadores flamengos de Antuérpia (que financiavam os engenhos e
          lucravam na intermediação). Os <strong>cristãos-novos</strong> —
          judeus convertidos ao catolicismo, muitos de origem portuguesa —
          desempenhavam papel crucial como intermediários financeiros e
          comerciais.
        </p>
        <p>
          A situação mudou radicalmente no século XVII. Quando os holandeses
          foram expulsos de Pernambuco (1654), levaram consigo o conhecimento
          técnico e estabeleceram a produção nas Antilhas (Barbados, Jamaica,
          São Domingos). O açúcar antilhano, produzido por escravizados
          africanos sob domínio inglês e francês, passou a concorrer
          diretamente com o açúcar brasileiro — a preços menores, por menor
          distância de transporte.
        </p>
        <p>
          O resultado foi uma crise profunda da economia açucareira nordestina
          no final do século XVII — que só seria compensada pela descoberta do
          ouro em Minas Gerais (1693–1695), deslocando o centro econômico da
          colônia para o sudeste.
        </p>
      </section>

      {/* ─── EXERCÍCIOS ─── */}
      <Exercise
        level="Básico"
        title="As capitanias hereditárias"
        statement={
          <p>
            O sistema de capitanias hereditárias, adotado por D. João III a
            partir de 1532, pode ser descrito como:
          </p>
        }
        options={[
          {
            letter: "A",
            text: "Divisão do Brasil em províncias administradas diretamente pela Coroa portuguesa",
          },
          {
            letter: "B",
            text: "Concessão de faixas de terra a donatários privados, que deveriam colonizá-las à própria custa em troca de direitos econômicos e judiciais",
            correct: true,
          },
          {
            letter: "C",
            text: "Sistema de escambo entre Portugal e os povos indígenas, mediado por feitorias",
          },
          {
            letter: "D",
            text: "Divisão militar do litoral brasileiro entre Portugal e Espanha",
          },
          {
            letter: "E",
            text: "Distribuição de terras aos jesuítas para fins de catequese e aldeamento",
          },
        ]}
        resolution={
          <p>
            As <strong>capitanias hereditárias</strong> eram faixas de terra
            concedidas a particulares (donatários) que recebiam poderes
            administrativos, judiciais e econômicos em troca de colonizar e
            defender o território sem custo para a Coroa. O sistema fracassou
            na maioria das capitanias — exceto Pernambuco e São Vicente.
          </p>
        }
      />

      <Exercise
        level="Intermediário"
        title="A plantation colonial"
        statement={
          <p>
            O modelo econômico da plantation, predominante no Brasil colonial
            açucareiro, caracterizava-se pela combinação de:
          </p>
        }
        options={[
          {
            letter: "A",
            text: "Policultura, minifúndio, consumo interno e trabalho assalariado",
          },
          {
            letter: "B",
            text: "Monocultura, latifúndio, produção voltada para exportação e mão de obra escravizada",
            correct: true,
          },
          {
            letter: "C",
            text: "Monocultura, minifúndio, mercado interno e trabalho servil",
          },
          {
            letter: "D",
            text: "Diversificação produtiva, cooperativismo e trabalho livre assalariado",
          },
          {
            letter: "E",
            text: "Latifúndio, subsistência e comércio regional entre as capitanias",
          },
        ]}
        resolution={
          <p>
            A <strong>plantation</strong> colonial brasileira combinava os
            quatro elementos clássicos: monocultura (cana), latifúndio
            (grandes propriedades), exportação (açúcar para a Europa) e
            trabalho escravizado (primeiro indígena, depois africano). Esse
            modelo criou uma estrutura econômica dependente do mercado externo
            e uma sociedade profundamente desigual.
          </p>
        }
      />

      <Exercise
        level="Avançado"
        title="A invasão holandesa e suas consequências"
        statement={
          <p>
            A ocupação holandesa de Pernambuco (1630–1654) teve consequências
            de longo prazo para a economia açucareira brasileira. Assinale a
            alternativa que melhor descreve essas consequências:
          </p>
        }
        options={[
          {
            letter: "A",
            text: "A expulsão dos holandeses fortaleceu o monopólio português sobre o açúcar colonial por mais um século",
          },
          {
            letter: "B",
            text: "Os holandeses, ao serem expulsos, levaram o conhecimento técnico e implantaram a produção açucareira nas Antilhas, criando concorrência que arruinou a economia nordestina no final do século XVII",
            correct: true,
          },
          {
            letter: "C",
            text: "A presença holandesa introduziu o trabalho livre assalariado nos engenhos pernambucanos",
          },
          {
            letter: "D",
            text: "Os holandeses substituíram a mão de obra africana por trabalhadores europeus contratados",
          },
          {
            letter: "E",
            text: "A ocupação holandesa provocou a transferência da capital do Brasil de Salvador para Olinda",
          },
        ]}
        resolution={
          <p>
            A <strong>expulsão dos holandeses (1654)</strong> foi uma vitória
            militar, mas uma derrota econômica: os holandeses levaram o
            conhecimento técnico e implantaram engenhos nas Antilhas
            (Barbados, Jamaica, São Domingos). O açúcar antilhano era mais
            barato por menor distância de transporte, derrubando os preços
            e prejudicando o Nordeste açucareiro. Só a descoberta do ouro
            mineiro (c. 1695) salvou a economia colonial brasileira.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="(ENEM-estilo) Senhor de engenho e patriarcalismo"
        statement={
          <>
            <p>
              "O senhor de engenho era ao mesmo tempo proprietário de terras e
              de escravos, chefe militar, juiz informal, padrinho, protetor
              e senhor absoluto de um território praticamente autossuficiente.
              Sua casa-grande era o centro de um universo social fechado."
              (Adaptado de Caio Prado Jr., <em>Formação do Brasil
              Contemporâneo</em>, 1942.)
            </p>
          </>
        }
        options={[
          {
            letter: "A",
            text: "O texto descreve a figura do feitor colonial, responsável pela disciplina dos escravizados",
          },
          {
            letter: "B",
            text: "A passagem caracteriza o poder do senhor de engenho como concentrado e multifuncional, reunindo autoridade econômica, política, judicial e social em uma única figura",
            correct: true,
          },
          {
            letter: "C",
            text: "Caio Prado Jr. defende que o senhor de engenho era um representante democrático da comunidade colonial",
          },
          {
            letter: "D",
            text: "O texto descreve o modelo de colonização jesuítica, baseado em reduções autossuficientes",
          },
          {
            letter: "E",
            text: "A passagem indica que a casa-grande era um espaço de integração igualitária entre diferentes classes sociais",
          },
        ]}
        resolution={
          <p>
            O trecho de Caio Prado Jr. descreve o <strong>poder
            patriarcal</strong> do senhor de engenho: ele concentrava em si
            autoridade econômica (propriedade), militar (defesa local),
            judicial (resolução de conflitos) e social (padrinhagem, proteção).
            Esse poder quase feudal explica a fraqueza do Estado colonial
            frente aos grandes proprietários e as raízes históricas do
            coronelismo no Brasil.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="O açúcar e o mercado mundial"
        statement={
          <p>
            No século XVI, o açúcar brasileiro ocupava posição central no
            comércio atlântico. Analise o papel desempenhado pelos comerciantes
            holandeses (flamengos) nesse sistema:
          </p>
        }
        options={[
          {
            letter: "A",
            text: "Os holandeses produziam o açúcar diretamente em suas colônias africanas e competiam com o Brasil desde o início",
          },
          {
            letter: "B",
            text: "Os holandeses financiavam a construção de engenhos no Brasil, controlavam a distribuição do açúcar na Europa (via Antuérpia) e lucravam como intermediários comerciais",
            correct: true,
          },
          {
            letter: "C",
            text: "Os holandeses forneciam mão de obra africana escravizada ao Brasil em troca de monopólio sobre a distribuição",
          },
          {
            letter: "D",
            text: "Portugal proibiu qualquer participação holandesa no comércio açucareiro sob pena de confisco",
          },
          {
            letter: "E",
            text: "Os holandeses controlavam a produção açucareira mas não a distribuição, que permanecia nas mãos dos cristãos-novos lusitanos",
          },
        ]}
        resolution={
          <p>
            Os <strong>holandeses (flamengos)</strong> eram parceiros
            indispensáveis do sistema açucareiro colonial: financiavam os
            engenhos (emprestando capital aos senhores), transportavam o açúcar
            e controlavam sua distribuição na Europa via Antuérpia. Quando
            foram expulsos de Pernambuco (1654), esse sistema entrou em crise
            — e eles levaram o know-how para as Antilhas.
          </p>
        }
      />
    </article>
  );
}
