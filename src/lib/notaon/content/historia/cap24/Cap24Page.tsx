"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap24Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 24</span>
          <h1>Escravidão indígena e africana no Brasil</h1>
          <p>
            O Brasil foi o maior importador de africanos escravizados da
            história: cerca de 4,9 milhões de pessoas atravessaram o Atlântico
            sob condições desumanas para trabalhar em engenhos, minas e
            domicílios. Compreender esse processo — e as formas de resistência
            que gerou — é essencial para entender o Brasil de hoje.
          </p>
        </div>
      </section>

      {/* ─── SEÇÃO 1: ESCRAVIDÃO INDÍGENA ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Primeiro ciclo</span>
        <h2>A escravidão indígena</h2>
        <p>
          Antes dos africanos, foram os indígenas que sustentaram o trabalho
          compulsório na colônia. Os colonizadores usavam dois mecanismos
          legais para justificar o cativeiro:
        </p>
        <ul>
          <li>
            <strong>Guerra justa</strong>: qualquer índio capturado em guerra
            "declarada" pelos colonizadores poderia ser legalmente escravizado.
            As guerras eram frequentemente provocadas pelos próprios
            portugueses para obter cativos.
          </li>
          <li>
            <strong>Resgate</strong>: índios presos por tribos inimigas que
            seriam ritualisticamente mortos e comidos podiam ser "resgatados"
            pelos portugueses — e escravizados como forma de pagamento.
          </li>
        </ul>
        <p>
          Os <strong>descimentos</strong> eram expedições ao sertão para
          aprisionar aldeias inteiras. Entre 1540 e 1650, estima-se que 2 a 4
          milhões de indígenas foram escravizados no Brasil. A resistência era
          brutal: fugas para o interior, guerrilha, alianças com franceses
          (especialmente no Maranhão e Rio de Janeiro).
        </p>
        <p>
          O papel dos <strong>jesuítas</strong> é ambíguo: defenderam os índios
          do trabalho escravo secular e criaram barreiras legais para esse
          cativeiro. Mas os aldeamentos jesuíticos — onde índios eram
          "reunidos" para catequese e proteção — também destruíam as culturas
          indígenas, separavam famílias e mantinham os índios sob controle
          compulsório, facilitando sua exploração como trabalho semi-escravo
          para a Companhia de Jesus.
        </p>
      </section>

      {/* ─── SEÇÃO 2: POR QUE AFRICANOS SUBSTITUÍRAM INDÍGENAS ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Transição</span>
        <h2>Por que a escravidão africana substituiu a indígena?</h2>
        <p>
          A substituição não foi imediata nem total — índios e africanos
          trabalharam lado a lado por muito tempo. Mas a tendência foi clara:
          a partir de meados do século XVI, os africanos tornaram-se a
          principal mão de obra escravizada do Brasil. As razões foram
          múltiplas e se reforçavam mutuamente:
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <h4>1. Resistência indígena</h4>
            <p>
              Os índios conheciam o território, fugiam com mais facilidade e
              mobilizavam redes de parentesco para resistir. A guerrilha
              indígena era altamente eficaz nas matas.
            </p>
          </div>
          <div className="lesson-card">
            <h4>2. Epidemias</h4>
            <p>
              As doenças dizimavam os índios muito mais rápido que os
              africanos — que tinham alguma imunidade a doenças europeias
              por convivência histórica. A mão de obra indígena se tornava
              "insustentável" demograficamente.
            </p>
          </div>
          <div className="lesson-card">
            <h4>3. Barreiras legais jesuíticas</h4>
            <p>
              Os jesuítas criaram obstáculos legais à escravidão indígena
              (que foram reafirmados por várias leis reais). A escravidão
              africana não enfrentava as mesmas restrições — a Igreja a
              legitimava.
            </p>
          </div>
          <div className="lesson-card">
            <h4>4. Lucratividade do tráfico</h4>
            <p>
              Portugal cobrava impostos alfandegários sobre cada africano
              embarcado — o tráfico era um negócio extremamente lucrativo
              para a Coroa e para os negreiros.
            </p>
          </div>
          <div className="lesson-card">
            <h4>5. Experiência agrícola</h4>
            <p>
              Muitos africanos já conheciam agricultura tropical, trabalho em
              metais e técnicas de construção — habilidades valiosas nos
              engenhos e nas minas.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SEÇÃO 3: O TRÁFICO ATLÂNTICO ─── */}
      <section className="lesson-section">
        <span className="section-kicker">O tráfico negreiro</span>
        <h2>O tráfico atlântico de escravizados</h2>
        <p>
          O Brasil recebeu cerca de <strong>4,9 milhões de africanos
          escravizados</strong> entre 1550 e 1850 — mais da metade de todos
          os africanos enviados para as Américas. É o maior destino do tráfico
          atlântico da história.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Região de origem</th>
                <th>Etnias principais</th>
                <th>Destino predominante no Brasil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Angola / Congo (África Central)</td>
                <td>Bantu: Ambundos, Bakongos, Ovimbundos</td>
                <td>Rio de Janeiro, Minas Gerais (maioria)</td>
              </tr>
              <tr>
                <td>Costa do Ouro / Mina (golfo do Benim)</td>
                <td>Iorubás (Nagôs), Jejes (Fon/Ewe), Haussás</td>
                <td>Bahia (especialmente Salvador)</td>
              </tr>
              <tr>
                <td>Costa da Mina (Daomé)</td>
                <td>Daomeanos, Minas</td>
                <td>Bahia, Maranhão</td>
              </tr>
              <tr>
                <td>Moçambique (África Oriental)</td>
                <td>Makua, Yao</td>
                <td>Rio de Janeiro (século XIX)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A viagem no <strong>navio negreiro</strong> (tumbeiro) durava de 30
          a 60 dias. Os africanos eram acorrentados no porão, em espaços de
          menos de 50 cm de altura, sem acesso a luz ou ar adequado. A
          mortalidade na travessia (<em>Middle Passage</em>) variava entre
          10% e 40% — dependendo do período, da rota e das condições do
          navio.
        </p>
      </section>

      {/* ─── SEÇÃO 4: MAPA SVG DAS ROTAS DO TRÁFICO ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Visualização</span>
        <h2>As rotas do tráfico negreiro</h2>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 580 360"
            width="580"
            height="360"
            aria-label="Mapa das rotas do tráfico negreiro entre África e Brasil"
          >
            <rect width="580" height="360" fill="#d6eaf8" rx="8" />
            <text x="290" y="22" fontSize="12" fontWeight="bold" fill="#1a3a5c" textAnchor="middle">
              Rotas do Tráfico Negreiro (séc. XVI–XIX)
            </text>

            {/* Oceano Atlântico — fundo */}
            <rect x="0" y="30" width="580" height="330" fill="#a8d4f0" rx="0" opacity="0.3" />

            {/* África — contorno simplificado */}
            <path
              d="M360,35 L430,35 L470,80 L490,140 L480,200 L450,250 L400,290 L360,300 L330,270 L320,220 L330,160 L320,110 L340,60 Z"
              fill="#e8d5a0"
              stroke="#a08040"
              strokeWidth="1.5"
            />
            <text x="405" y="170" fontSize="10" fontWeight="bold" fill="#5a3a00" textAnchor="middle">ÁFRICA</text>

            {/* Pontos de embarque na África */}
            <circle cx="375" cy="175" r="6" fill="#c0392b" />
            <text x="315" y="170" fontSize="8" fill="#7a0000" textAnchor="middle">Angola /</text>
            <text x="315" y="180" fontSize="8" fill="#7a0000" textAnchor="middle">Congo</text>
            <line x1="322" y1="175" x2="369" y2="175" stroke="#c0392b" strokeWidth="1" strokeDasharray="3,2" />

            <circle cx="395" cy="130" r="6" fill="#e67e22" />
            <text x="465" y="125" fontSize="8" fill="#7a3000" textAnchor="middle">Costa do</text>
            <text x="465" y="135" fontSize="8" fill="#7a3000" textAnchor="middle">Ouro / Mina</text>
            <line x1="401" y1="130" x2="450" y2="130" stroke="#e67e22" strokeWidth="1" strokeDasharray="3,2" />

            <circle cx="380" cy="100" r="5" fill="#8e44ad" />
            <text x="455" y="95" fontSize="8" fill="#4a0070" textAnchor="middle">Daomé / Benim</text>
            <line x1="385" y1="100" x2="442" y2="95" stroke="#8e44ad" strokeWidth="1" strokeDasharray="3,2" />

            <circle cx="400" cy="250" r="5" fill="#16a085" />
            <text x="460" y="248" fontSize="8" fill="#006050" textAnchor="middle">Moçambique</text>
            <line x1="405" y1="250" x2="445" y2="250" stroke="#16a085" strokeWidth="1" strokeDasharray="3,2" />

            {/* Brasil — contorno simplificado */}
            <path
              d="M60,90 L130,70 L165,100 L180,160 L190,230 L175,295 L140,320 L90,310 L55,260 L40,180 L45,120 Z"
              fill="#a8d5a0"
              stroke="#3a7a3a"
              strokeWidth="1.5"
            />
            <text x="115" y="200" fontSize="10" fontWeight="bold" fill="#1a5a1a" textAnchor="middle">BRASIL</text>

            {/* Pontos de chegada no Brasil */}
            <circle cx="155" cy="145" r="6" fill="#c0392b" />
            <text x="40" y="138" fontSize="8" fill="#7a0000">Pernambuco</text>
            <text x="40" y="148" fontSize="8" fill="#7a0000">/ Bahia</text>
            <line x1="80" y1="143" x2="149" y2="143" stroke="#c0392b" strokeWidth="1" strokeDasharray="3,2" />

            <circle cx="145" cy="220" r="6" fill="#2980b9" />
            <text x="30" y="215" fontSize="8" fill="#003a70">Rio de Janeiro</text>
            <text x="30" y="225" fontSize="8" fill="#003a70">/ Minas</text>
            <line x1="75" y1="220" x2="139" y2="220" stroke="#2980b9" strokeWidth="1" strokeDasharray="3,2" />

            {/* ROTAS PRINCIPAIS — arcos no oceano */}
            {/* Rota Angola → Rio */}
            <path
              d="M375,175 Q260,250 145,220"
              fill="none"
              stroke="#c0392b"
              strokeWidth="2.5"
              strokeDasharray="none"
            />
            <polygon points="145,220 153,214 153,226" fill="#c0392b" />
            <text x="260" y="248" fontSize="9" fontWeight="bold" fill="#7a0000" textAnchor="middle">rota principal</text>
            <text x="260" y="259" fontSize="8" fill="#7a0000" textAnchor="middle">(Angola → Rio / MG)</text>

            {/* Rota Costa da Mina → Bahia */}
            <path
              d="M395,130 Q280,155 155,145"
              fill="none"
              stroke="#e67e22"
              strokeWidth="2"
              strokeDasharray="6,3"
            />
            <polygon points="155,145 163,139 163,151" fill="#e67e22" />
            <text x="280" y="128" fontSize="8.5" fill="#7a3000" textAnchor="middle">Costa da Mina → Bahia</text>

            {/* Rota Moçambique → Rio (século XIX) */}
            <path
              d="M400,250 Q300,295 145,240"
              fill="none"
              stroke="#16a085"
              strokeWidth="1.5"
              strokeDasharray="5,4"
            />
            <polygon points="145,240 153,234 153,246" fill="#16a085" />
            <text x="280" y="300" fontSize="8" fill="#006050" textAnchor="middle">Moçambique → Rio (séc. XIX)</text>

            {/* Legenda */}
            <rect x="490" y="30" width="85" height="120" rx="4" fill="white" opacity="0.85" />
            <text x="532" y="46" fontSize="8.5" fontWeight="bold" fill="#333" textAnchor="middle">Rotas</text>
            <line x1="495" y1="56" x2="520" y2="56" stroke="#c0392b" strokeWidth="2.5" />
            <text x="525" y="59" fontSize="7.5" fill="#333">Principal</text>
            <line x1="495" y1="70" x2="520" y2="70" stroke="#e67e22" strokeWidth="2" strokeDasharray="6,3" />
            <text x="525" y="73" fontSize="7.5" fill="#333">Golfo Benim</text>
            <line x1="495" y1="84" x2="520" y2="84" stroke="#16a085" strokeWidth="1.5" strokeDasharray="5,4" />
            <text x="525" y="87" fontSize="7.5" fill="#333">Moçambique</text>
            <text x="532" y="108" fontSize="7.5" fill="#555" textAnchor="middle">4,9 milhões</text>
            <text x="532" y="119" fontSize="7.5" fill="#555" textAnchor="middle">de africanos</text>
            <text x="532" y="130" fontSize="7.5" fill="#555" textAnchor="middle">→ Brasil</text>

            {/* Norte */}
            <text x="540" y="168" fontSize="11" fontWeight="bold" fill="#333">N</text>
            <line x1="545" y1="170" x2="545" y2="185" stroke="#333" strokeWidth="1.5" />
            <polygon points="545,166 542,174 548,174" fill="#333" />
          </svg>
          <figcaption>
            Principais rotas do tráfico negreiro entre a África e o Brasil
            (séculos XVI–XIX). O Brasil foi o maior destino do tráfico
            atlântico: cerca de 4,9 milhões de pessoas.
          </figcaption>
        </figure>
      </section>

      {/* ─── SEÇÃO 5: VIDA NA ESCRAVIDÃO ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Condição escrava</span>
        <h2>Vida escravizada no Brasil colonial</h2>
        <p>
          A escravidão brasileira foi um sistema de violência sistemática e
          institucionalizada. Os escravizados não eram tratados como pessoas,
          mas como propriedade — listados em inventários ao lado de animais e
          utensílios domésticos.
        </p>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Condição nos engenhos</th>
                <th>Condição nas minas (séc. XVIII)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jornada de trabalho</td>
                <td>14–16 horas/dia no corte e moagem</td>
                <td>10–14 horas em rios e galerias</td>
              </tr>
              <tr>
                <td>Alimentação</td>
                <td>Farinha de mandioca, feijão, eventualmente peixe seco</td>
                <td>Similar; carne seca rara</td>
              </tr>
              <tr>
                <td>Mortalidade</td>
                <td>50% nos primeiros 10 anos de trabalho</td>
                <td>Alta por acidentes e doenças pulmonares</td>
              </tr>
              <tr>
                <td>Punições</td>
                <td>Açoitamento, tronco, vira-mundo, mutilação (orelha, pé)</td>
                <td>Similares + trabalho em grilhões</td>
              </tr>
              <tr>
                <td>Habitação</td>
                <td>Senzala coletiva (dormitório comum)</td>
                <td>Barracões de mineração</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          A mortalidade era tão alta que o sistema era de{" "}
          <strong>reposição permanente</strong>: os senhores calculavam que
          era mais barato comprar novos africanos do que manter os existentes
          com condições mínimas de vida. Essa lógica macabra era defendida
          explicitamente em manuais coloniais de administração de engenhos.
        </p>
        <div className="lesson-highlight">
          <strong>Senzala como espaço de cultura:</strong> Apesar das condições
          brutais, a senzala foi também o espaço de recriação das culturas
          africanas: línguas, religiões, músicas, culinária e laços de
          solidariedade foram mantidos e transformados ali.
        </div>
      </section>

      {/* ─── SEÇÃO 6: A ÁFRICA E O TRÁFICO ─── */}
      <section className="lesson-section">
        <span className="section-kicker">O lado africano</span>
        <h2>A África e o tráfico: reinos, guerras e desestruturação</h2>
        <p>
          O tráfico não foi feito contra a África passiva — envolveu a
          participação ativa de reinos africanos que vendiam prisioneiros de
          guerra. O <strong>Daomé</strong> (atual Benim) foi o caso mais
          explícito: seu Estado se sustentava financeiramente pelo tráfico,
          realizando guerras de captura para abastecer os portos europeus.
        </p>
        <p>
          Outros reinos — como o <strong>Kongo</strong>, que inicialmente
          resistiu ao tráfico e escreveu cartas ao Papa pedindo sua
          interrupção — foram gradualmente corrompidos ou forçados a
          participar pelo poderio bélico e econômico europeu.
        </p>
        <p>
          O debate historiográfico é importante: a participação africana no
          tráfico é real, mas não equivale a responsabilidade igual. Os
          europeus criaram o mercado, forneceram as armas que financiavam as
          guerras de captura e controlavam o sistema no seu conjunto. A
          escala, a brutalidade e a duração do tráfico atlântico são produtos
          do colonialismo europeu.
        </p>
        <p>
          O impacto na África foi devastador: estimativas indicam que 12–15
          milhões de africanos foram retirados do continente pelo tráfico
          atlântico (além de outros milhões pelo tráfico árabe-saariano).
          As guerras de captura despovoaram regiões, destruíram economias e
          criaram instabilidade política que durou séculos.
        </p>
      </section>

      {/* ─── SEÇÃO 7: RESISTÊNCIA ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Resistência</span>
        <h2>Formas de resistência escrava</h2>
        <p>
          Os escravizados nunca aceitaram passivamente sua condição. A
          resistência assumia formas variadas, num espectro que ia do cotidiano
          à insurreição aberta.
        </p>
        <figure className="lesson-figure">
          <svg
            viewBox="0 0 580 200"
            width="580"
            height="200"
            aria-label="Espectro das formas de resistência escrava no Brasil colonial"
          >
            <rect width="580" height="200" fill="#fdf6ec" rx="8" />
            <text x="290" y="22" fontSize="11" fontWeight="bold" fill="#333" textAnchor="middle">
              Espectro da Resistência Escrava
            </text>

            {/* Barra de espectro */}
            <defs>
              <linearGradient id="specGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#fff9c4" />
                <stop offset="50%" stopColor="#ffb74d" />
                <stop offset="100%" stopColor="#c62828" />
              </linearGradient>
            </defs>
            <rect x="20" y="38" width="540" height="28" rx="5" fill="url(#specGradient)" />
            <text x="20" y="82" fontSize="8" fill="#555">Cotidiano</text>
            <text x="270" y="82" fontSize="8" fill="#555" textAnchor="middle">↑ intensidade da resistência ↑</text>
            <text x="545" y="82" fontSize="8" fill="#a00000" textAnchor="end">Insurreição</text>

            {/* Marcadores */}
            {[
              { x: 60, label: "Resistência\ncotidiana", desc: "trabalho lento, quebra de ferramentas, fingir doença" },
              { x: 165, label: "Sabotagem", desc: "destruição de colheitas, envenenamento de animais, incêndios" },
              { x: 285, label: "Fuga\nindividual", desc: "calhambolas; vida nos matos como homem livre" },
              { x: 400, label: "Quilombos", desc: "comunidades coletivas de fugidos; Palmares (1600–1694)" },
              { x: 510, label: "Insurreições", desc: "Revolta dos Malês (1835); Revolta de Carrancas (1833)" },
            ].map(({ x, label, desc }) => (
              <g key={label}>
                <line x1={x} y1="60" x2={x} y2="98" stroke="#555" strokeWidth="1.2" />
                <circle cx={x} cy="52" r="5" fill="#555" />
                <text x={x} y="110" fontSize="8" fontWeight="bold" fill="#333" textAnchor="middle">
                  {label.split("\n").map((l, i) => (
                    <tspan key={i} x={x} dy={i === 0 ? 0 : 11}>{l}</tspan>
                  ))}
                </text>
                <text x={x} y="140" fontSize="7" fill="#666" textAnchor="middle" width="90">
                  {desc.split(";").map((d, i) => (
                    <tspan key={i} x={x} dy={i === 0 ? 0 : 10}>{d.trim()}</tspan>
                  ))}
                </text>
              </g>
            ))}
          </svg>
          <figcaption>
            Espectro das formas de resistência escrava, do cotidiano
            (resistência silenciosa e contínua) à insurreição aberta.
          </figcaption>
        </figure>

        <h3>Quilombo dos Palmares</h3>
        <p>
          O maior e mais duradouro quilombo da história do Brasil (e das
          Américas) existiu na Serra da Barriga, no atual Alagoas, entre cerca
          de 1600 e 1694. Em seu auge, abrigava entre 20.000 e 30.000 pessoas —
          fugitivos, índios, brancos pobres e uma organização política própria.
        </p>
        <p>
          Seu líder mais famoso foi <strong>Zumbi dos Palmares</strong>
          (sobrinho de Ganga Zumba, que havia negociado um acordo de paz com
          os portugueses). Zumbi recusou a rendição e continuou a luta até ser
          capturado e executado em <strong>20 de novembro de 1695</strong> —
          data que, desde 1971, é comemorada como <strong>Dia da
          Consciência Negra</strong> (feriado nacional a partir de 2023).
        </p>
        <p>
          Palmares foi destruído em 1694 pelo bandeirante Domingos Jorge Velho,
          contratado pelo governo colonial de Pernambuco.
        </p>
      </section>

      {/* ─── SEÇÃO 8: INSURREIÇÕES ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Insurreições</span>
        <h2>As revoltas escravas mais importantes</h2>
        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Revolta</th>
                <th>Local / Data</th>
                <th>Característica</th>
                <th>Resultado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Revolta dos Malês</td>
                <td>Salvador, BA — janeiro de 1835</td>
                <td>
                  Organizada por escravizados e libertos islâmicos (muçulmanos)
                  letrados em árabe; planejamento sofisticado; bilhetes em árabe
                  circularam pela cidade
                </td>
                <td>
                  Reprimida em poucas horas; dezenas de mortos;
                  deportação dos líderes; endurecimento das leis sobre
                  libertos
                </td>
              </tr>
              <tr>
                <td>Revolta de Carrancas</td>
                <td>Minas Gerais — 1833</td>
                <td>
                  Escravizados de fazendas da região do Rio Grande mataram o
                  senhor e familiares; tentativa de alastrar a revolta pela
                  região
                </td>
                <td>
                  Reprimida; líderes executados; medo generalizado das
                  "raças perigosas" nas classes dominantes
                </td>
              </tr>
              <tr>
                <td>Balaiada</td>
                <td>Maranhão — 1838–1841</td>
                <td>
                  Envolveu índios, escravizados fugidos e pobres livres;
                  quilombo de Cosme Bento com 3.000 escravizados fugidos
                </td>
                <td>
                  Reprimida pelo Barão de Caxias; Cosme Bento executado
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lesson-highlight">
          <strong>Revolta dos Malês no ENEM:</strong> É a mais cobrada porque
          demonstra o alto nível de organização e cultura dos escravizados —
          contrariando o discurso colonial que os tratava como "sem
          civilização". Os Malês eram africanos ocidentais muçulmanos, muitos
          letrados em árabe, com redes de solidariedade religiosa e capacidade
          de planejamento coletivo.
        </div>
      </section>

      {/* ─── SEÇÃO 9: RESISTÊNCIA CULTURAL ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Cultura e identidade</span>
        <h2>A resistência cultural africana</h2>
        <p>
          A maior vitória da resistência africana não foi militar: foi cultural.
          Os africanos e seus descendentes preservaram e transformaram suas
          culturas nas condições mais adversas, e essas culturas moldaram o
          Brasil profundamente.
        </p>
        <div className="lesson-grid">
          <div className="lesson-card">
            <h4>Capoeira</h4>
            <p>
              Luta disfarçada de dança, desenvolvida pelos escravizados para
              treinar técnicas de combate sem despertar a desconfiança dos
              senhores. Hoje é Patrimônio Cultural Imaterial da UNESCO.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Candomblé</h4>
            <p>
              Religião de matriz africana (iorubá/nagô, jeje, angola) que
              preservou panteões, rituais e línguas litúrgicas africanas.
              Salvador tem os principais terreiros históricos do Brasil.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Culinária</h4>
            <p>
              Vatapá, acarajé, moqueca, dendê, feijão preto — pratos de origem
              africana que se tornaram pilares da culinária brasileira.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Língua</h4>
            <p>
              Centenas de palavras africanas no português brasileiro: samba,
              quilombo, batuque, caçula, quiabo, moqueca, fubá, cachimbo,
              bangue, jiló, angu, dendê, caxumba.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Irmandades religiosas</h4>
            <p>
              Confrarias como Nossa Senhora do Rosário dos Pretos arrecadavam
              fundos para comprar cartas de alforria de seus membros —
              forma coletiva e organizada de buscar a liberdade.
            </p>
          </div>
          <div className="lesson-card">
            <h4>Sincretismo</h4>
            <p>
              Orixás africanos identificados com santos católicos (Oxalá /
              Jesus, Iemanjá / Nossa Senhora) — estratégia de preservação
              cultural sob aparência de conversão.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SEÇÃO 10: ALFORRIAS E O LEGADO DA ESCRAVIDÃO ─── */}
      <section className="lesson-section">
        <span className="section-kicker">Liberdade e legado</span>
        <h2>Alforrias, libertos e o legado estrutural</h2>
        <p>
          A alforria era a concessão de liberdade ao escravizado. No Brasil,
          havia três modalidades:
        </p>
        <ul>
          <li>
            <strong>Alforria gratuita</strong>: concedida pelo senhor por
            laço afetivo, recompensa ou interesse (escravizados idosos e
            doentes eram "alforriados" para que o senhor não tivesse que
            sustentá-los)
          </li>
          <li>
            <strong>Alforria onerosa</strong>: comprada pelo próprio
            escravizado com seu <em>pecúlio</em> (pequena poupança acumulada
            em trabalho extra), frequentemente após décadas de esforço
          </li>
          <li>
            <strong>Alforria condicional</strong>: concedida com condições
            (servir ao senhor até sua morte, pagar prestações futuras)
          </li>
        </ul>
        <p>
          Os libertos (homens e mulheres forros) ocupavam posição ambígua na
          sociedade colonial: eram juridicamente livres, mas sem cidadania
          plena, sem acesso a cargos públicos, sujeitos a discriminação racial
          permanente e, frequentemente, re-escravizados ilegalmente.
        </p>
        <p>
          O Brasil foi o último país das Américas a abolir a escravidão: em{" "}
          <strong>13 de maio de 1888</strong>, com a Lei Áurea, assinada pela
          Princesa Isabel. A abolição veio sem qualquer política de integração,
          terras, educação ou reparação — deixando os ex-escravizados e seus
          descendentes em condições de extrema vulnerabilidade.
        </p>
        <div className="lesson-highlight">
          <strong>O legado estrutural:</strong> O IBGE (2022) aponta que
          negros e pardos representam <strong>56% da população
          brasileira</strong>, mas apenas 17% dos mais ricos e 75% dos mais
          pobres. A desigualdade racial brasileira não é acidental — é herança
          direta de trezentos anos de escravidão e de uma abolição sem
          reparação.
        </div>
      </section>

      {/* ─── EXERCÍCIOS ─── */}
      <Exercise
        level="Básico"
        title="Quilombo dos Palmares"
        statement={
          <p>
            O Quilombo dos Palmares, maior quilombo da história do Brasil,
            localizado na Serra da Barriga (atual Alagoas), foi destruído em
            1694. Seu líder mais famoso, executado em 20 de novembro de 1695
            — data do Dia da Consciência Negra —, chamava-se:
          </p>
        }
        options={[
          { letter: "A", text: "Ganga Zumba" },
          { letter: "B", text: "Zumbi dos Palmares", correct: true },
          { letter: "C", text: "Domingos Jorge Velho" },
          { letter: "D", text: "Cosme Bento das Chagas" },
          { letter: "E", text: "Henrique Dias" },
        ]}
        resolution={
          <p>
            <strong>Zumbi dos Palmares</strong> foi o último líder militar do
            Quilombo dos Palmares, executado em 20 de novembro de 1695 —
            data que, desde 1971, é o Dia da Consciência Negra (feriado
            nacional a partir de 2023). Ganga Zumba foi seu tio e predecessor,
            que negociou (sem sucesso) um acordo de paz. Domingos Jorge Velho
            foi o bandeirante que destruiu Palmares.
          </p>
        }
      />

      <Exercise
        level="Intermediário"
        title="Por que africanos substituíram indígenas"
        statement={
          <p>
            Ao longo do século XVI, a mão de obra africana escravizada foi
            gradualmente substituindo a mão de obra indígena nos engenhos
            coloniais. Entre os fatores que explicam essa substituição, NÃO se
            inclui:
          </p>
        }
        options={[
          {
            letter: "A",
            text: "A maior capacidade de resistência e fuga dos indígenas, que conheciam o território",
          },
          {
            letter: "B",
            text: "A lucratividade do tráfico atlântico para a Coroa portuguesa, que cobrava impostos sobre cada africano embarcado",
          },
          {
            letter: "C",
            text: "O fato de que os africanos eram biologicamente mais resistentes ao trabalho pesado e ao sol tropical",
            correct: true,
          },
          {
            letter: "D",
            text: "As epidemias que dizimavam os indígenas mais rapidamente, pois tinham menor resistência imunológica a doenças europeias",
          },
          {
            letter: "E",
            text: "As restrições legais criadas pelos jesuítas à escravidão indígena, sem equivalente para os africanos",
          },
        ]}
        resolution={
          <p>
            A alternativa C apresenta um argumento racista e historicamente
            falso: a substituição não ocorreu por razões biológicas, mas por
            razões <strong>políticas, econômicas e demográficas</strong>. Os
            africanos não eram "mais resistentes" por natureza — eram
            escravizados em maior número porque o tráfico era lucrativo, os
            indígenas resistiam melhor (conheciam o território e tinham
            apoio jesuítico parcial) e as epidemias dizimavam os índios mais
            rapidamente.
          </p>
        }
      />

      <Exercise
        level="Avançado"
        title="A Revolta dos Malês"
        statement={
          <p>
            A Revolta dos Malês (Salvador, 1835) é considerada a mais
            sofisticada insurreição escrava do Brasil. Que características
            tornaram esse movimento historicamente singular?
          </p>
        }
        options={[
          {
            letter: "A",
            text: "Foi a única revolta escrava que obteve sucesso e resultou em liberdade permanente para os participantes",
          },
          {
            letter: "B",
            text: "Foi liderada por escravizados e libertos muçulmanos letrados em árabe, com organização baseada em redes religiosas e planejamento que incluía comunicação escrita em árabe",
            correct: true,
          },
          {
            letter: "C",
            text: "Contou com apoio de proprietários de engenho que defendiam a abolição da escravidão",
          },
          {
            letter: "D",
            text: "Foi organizada exclusivamente por africanos bantu vindos de Angola e Congo",
          },
          {
            letter: "E",
            text: "Resultou na criação da primeira lei brasileira proibindo o tráfico de escravizados",
          },
        ]}
        resolution={
          <p>
            Os <strong>Malês</strong> eram africanos ocidentais muçulmanos
            (principalmente haussás e nagôs/iorubás islâmicos) letrados em
            árabe. Sua rede religiosa (as mesquitas clandestinas de Salvador)
            serviu de base organizatória. Bilhetes em árabe circulavam entre
            os conspiradores — o que dificultou a repressão e evidenciou alto
            nível de organização. A revolta foi reprimida em poucas horas, mas
            seu planejamento impressionou até os contemporâneos.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="(ENEM-estilo) Resistência cultural africana"
        statement={
          <>
            <p>
              "Os negros, obrigados a se converter ao catolicismo, encontraram
              no sincretismo uma forma de preservar suas crenças: os orixás
              africanos foram identificados com santos da Igreja Católica.
              Oxalá virou Jesus Cristo; Iemanjá, Nossa Senhora dos Navegantes;
              Ogum, São Jorge. Por fora, parecia conversão. Por dentro,
              era resistência." (Adaptado de historiografia afro-brasileira.)
            </p>
          </>
        }
        options={[
          {
            letter: "A",
            text: "O texto afirma que os africanos abandonaram completamente suas religiões ao se converter ao catolicismo",
          },
          {
            letter: "B",
            text: "O sincretismo descrito no texto foi uma estratégia de preservação cultural, permitindo que os africanos mantivessem suas crenças sob aparência de conformidade com a religião dos colonizadores",
            correct: true,
          },
          {
            letter: "C",
            text: "A passagem sugere que o catolicismo e as religiões africanas eram essencialmente a mesma religião",
          },
          {
            letter: "D",
            text: "O texto indica que a Igreja Católica incentivava ativamente o sincretismo como forma de aproximação cultural",
          },
          {
            letter: "E",
            text: "Segundo o texto, os orixás africanos foram completamente substituídos pelos santos católicos após a conversão",
          },
        ]}
        resolution={
          <p>
            O <strong>sincretismo religioso</strong> afro-brasileiro foi uma
            forma de <em>resistência cultural</em>: ao identificar orixás com
            santos católicos, os africanos e seus descendentes podiam praticar
            suas religiões tradicionais sob a cobertura do catolicismo
            (obrigatório), preservando liturgias, idiomas rituais e vínculos
            comunitários. Essa estratégia não era ingenuidade — era
            sofisticação. O candomblé sobreviveu à escravidão e à perseguição
            colonial precisamente por isso.
          </p>
        }
      />

      <Exercise
        level="Contextualizado"
        title="O legado estrutural da escravidão"
        statement={
          <p>
            Dados do IBGE (2022) mostram que negros e pardos representam 56%
            da população brasileira, mas apenas 17% dos 10% mais ricos e 75%
            dos 10% mais pobres. Com base nesses dados e no conhecimento
            histórico sobre a escravidão no Brasil, qual afirmação é mais
            adequada para explicar essa desigualdade?
          </p>
        }
        options={[
          {
            letter: "A",
            text: "A desigualdade racial reflete diferenças culturais naturais entre grupos étnicos",
          },
          {
            letter: "B",
            text: "A desigualdade é resultado de escolhas individuais e não tem relação com a história colonial",
          },
          {
            letter: "C",
            text: "A desigualdade racial brasileira é herança estrutural de trezentos anos de escravidão combinados com uma abolição (1888) sem políticas de reparação, integração ou redistribuição de terras",
            correct: true,
          },
          {
            letter: "D",
            text: "A desigualdade foi criada pela industrialização do século XX, que favoreceu imigrantes europeus em detrimento de descendentes de africanos",
          },
          {
            letter: "E",
            text: "A desigualdade racial foi eliminada com a Constituição de 1988, que garantiu igualdade formal a todos os cidadãos",
          },
        ]}
        resolution={
          <p>
            A <strong>desigualdade racial estrutural</strong> brasileira tem
            raízes históricas diretas: três séculos de trabalho não remunerado
            impediram a acumulação de riqueza pelas populações africanas e seus
            descendentes. A abolição de 1888 (Lei Áurea) não veio acompanhada
            de reforma agrária, acesso à educação nem indenização — largando
            os ex-escravizados sem recursos. Políticas de imigração europeia
            (1888–1930) direcionaram oportunidades para brancos. O resultado é
            a desigualdade racial persistente que os dados do IBGE revelam.
          </p>
        }
      />
    </article>
  );
}
