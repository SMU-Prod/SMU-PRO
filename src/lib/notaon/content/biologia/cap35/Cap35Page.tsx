"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap35Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 35</span>

          <h1>Fisiologia Vegetal I: Absorção de Água, Xilema, Floema e Transpiração Estomática</h1>

          <p>
            Compreender como uma planta move dezenas de litros de água por dia
            — da ponta das raízes até os ápices das folhas — é um dos tópicos
            mais cobrados no ENEM e nos vestibulares. Neste capítulo você vai
            dominar a absorção de H₂O e sais pelas raízes, a ascensão da seiva
            bruta pelo xilema segundo a teoria da coesão-tensão-adesão de Dixon,
            o papel central da transpiração estomática como motor desse fluxo,
            o controle refinado dos estômatos pelas células-guarda (K⁺ e ABA),
            e a condução bidirecional de açúcares pelo floema segundo o modelo
            fonte→dreno de Münch — tudo conectado e explicado em profundidade.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 1 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Absorção Radicular</span>

        <h2>1. Absorção de Água e Sais Minerais pelas Raízes</h2>

        <p>
          O solo é a principal fonte de H₂O e minerais para as plantas
          terrestres. A absorção se concentra na <strong>zona pilífera</strong>
          {" "}da raiz, onde os <strong>pelos absorventes</strong> — extensões
          unicelulares da epiderme radicular — multiplicam a superfície de
          contato em até 10 vezes, colocando a membrana plasmática em íntimo
          contato com a solução do solo.
        </p>

        <p>
          A entrada de <strong>H₂O</strong> ocorre exclusivamente por{" "}
          <strong>osmose</strong> (transporte passivo): a concentração de solutos
          no citoplasma dos pelos absorventes é maior do que na solução do solo
          em condições normais, de modo que o potencial hídrico intracelular é{" "}
          <em>menor</em> (mais negativo) e a água flui para dentro.{" "}
          <strong>Sais minerais</strong> (K⁺, NO₃⁻, H₂PO₄⁻, Ca²⁺, Mg²⁺, entre
          outros) são absorvidos principalmente por <strong>transporte
          ativo</strong>, com consumo de ATP e atuação de proteínas carreadoras
          específicas na membrana, o que permite às plantas acumular íons em
          concentrações muito superiores às do solo.
        </p>

        <div className="lesson-highlight">
          <h3>Dois caminhos até o xilema</h3>
          <p>
            Depois de entrar na epiderme, a água percorre duas rotas paralelas
            pelo córtex radicular até alcançar o xilema:
          </p>
          <ul>
            <li>
              <strong>Via apoplástica:</strong> fluxo livre pelas paredes
              celulares e espaços intercelulares, sem atravessar membranas —
              rota rápida, mas interrompida pelas <strong>estrias de Caspary</strong>
              {" "}na endoderme;
            </li>
            <li>
              <strong>Via simplástica:</strong> passagem pelo citoplasma e pelos{" "}
              <strong>plasmodesmos</strong>, de célula em célula — mais lenta,
              mas seletiva.
            </li>
          </ul>
        </div>

        <div className="lesson-highlight">
          <h3>Estrias de Caspary — o "controle alfandegário" da raiz</h3>
          <p>
            As células da <strong>endoderme</strong> (camada mais interna do
            córtex) possuem uma faixa impregnada de <strong>suberina</strong>{" "}
            em suas paredes laterais e radiais — as estrias de Caspary. Essa
            barreira hidrofóbica bloqueia a via apoplástica e obriga toda a água
            e todos os íons a cruzar a membrana plasmática das células
            endodérmicas antes de entrar no <strong>periciclo</strong> e,
            finalmente, no xilema. Assim, a planta filtra o que entra,
            excluindo toxinas e patógenos e regulando a composição da seiva bruta.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💧</span>
            <h3>Osmose</h3>
            <p>H₂O entra passivamente pelo gradiente de potencial hídrico do solo para a raiz.</p>
          </div>

          <div className="lesson-card">
            <span>⚡</span>
            <h3>Transporte Ativo</h3>
            <p>Sais (K⁺, NO₃⁻, Ca²⁺) entram contra o gradiente com gasto de ATP.</p>
          </div>

          <div className="lesson-card">
            <span>🛡️</span>
            <h3>Estrias de Caspary</h3>
            <p>Cinturão de suberina na endoderme bloqueia via apoplástica e filtra solutos.</p>
          </div>

          <div className="lesson-card">
            <span>🌱</span>
            <h3>Pelos Absorventes</h3>
            <p>Extensões unicelulares que ampliam a superfície de contato com o solo.</p>
          </div>
        </div>
      </section>

      {/* ===================== SEÇÃO 2 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Xilema e Seiva Bruta</span>

        <h2>2. Condução da Seiva Bruta pelo Xilema</h2>

        <p>
          O <strong>xilema</strong> (do grego <em>xylon</em> = madeira) é o
          tecido vascular responsável pela condução da <strong>seiva bruta</strong>
          {" "}— solução aquosa contendo água e sais minerais — no sentido
          ascendente, da raiz para os caules, folhas, flores e frutos. Suas
          células condutoras são <strong>traqueídes</strong> (fusiformes, com
          pontoações) e <strong>elementos de vaso</strong> (mais curtos e com
          placas de perfuração que as conectam em tubos contínuos). Ambos os
          tipos são <strong>células mortas na maturidade</strong>, pois perderam
          o conteúdo celular e mantêm apenas a parede lignificada, que confere
          resistência mecânica ao mesmo tempo que forma um tubo de baixa
          resistência ao fluxo.
        </p>

        <div className="lesson-highlight">
          <h3>Teoria da Coesão-Tensão-Adesão (Dixon, 1914)</h3>
          <p>
            Henry Dixon e John Joly propuseram que a ascensão da seiva bruta em
            árvores que ultrapassam 100 m de altura é impulsionada por uma
            <strong> tensão negativa (sucção)</strong> gerada pela transpiração
            nas folhas e sustentada pelas forças intermoleculares da água. Os
            três pilares são:
          </p>
          <ul>
            <li>
              <strong>Tensão (transpiração):</strong> a evaporação de H₂O pelos
              estômatos reduz o potencial hídrico nas células do mesófilo foliar
              → as moléculas de água no xilema da folha são "puxadas" para cima
              → cria-se uma pressão negativa (tensão) que se propaga por toda a
              coluna de água até a raiz;
            </li>
            <li>
              <strong>Coesão entre moléculas de H₂O:</strong> pontes de
              hidrogênio tornam as moléculas de água altamente coesas, formando
              uma coluna líquida contínua que transmite a tensão do topo à base
              sem se romper em condições normais;
            </li>
            <li>
              <strong>Adesão às paredes do xilema:</strong> a água também adere
              às paredes celulósicas e lignificadas, impedindo que a coluna se
              contraia lateralmente e mantendo o fluxo contínuo.
            </li>
          </ul>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 340" width="720" height="340" aria-label="Caminho da água da raiz à folha com coesão-tensão">
            {/* Fundo */}
            <rect x={0} y={0} width={720} height={340} rx={16} fill="#f0f9ff" />

            {/* Solo */}
            <rect x={0} y={270} width={720} height={70} fill="#d4c5a0" rx={0} />
            <text x={360} y={310} textAnchor="middle" fontSize={13} fill="#5a4a28" fontWeight={700}>Solo</text>

            {/* Raiz */}
            <rect x={320} y={220} width={80} height={80} rx={8} fill="#a3e635" opacity={0.6} stroke="#65a30d" strokeWidth={2} />
            <text x={360} y={262} textAnchor="middle" fontSize={12} fontWeight={700} fill="#365314">Raiz</text>
            <text x={360} y={278} textAnchor="middle" fontSize={10} fill="#365314">pressão radicular</text>

            {/* Caule / tubo do xilema */}
            <rect x={348} y={110} width={24} height={115} fill="#bfdbfe" stroke="#3b82f6" strokeWidth={2} />
            <text x={384} y={172} fontSize={11} fill="#1d4ed8" fontWeight={700}>Xilema</text>
            <text x={384} y={186} fontSize={10} fill="#1e40af">(seiva bruta)</text>

            {/* Setas de fluxo no xilema */}
            {[120, 145, 170, 195, 210].map((y) => (
              <polygon key={y} points={`${360},${y - 8} ${354},${y + 4} ${366},${y + 4}`} fill="#2563eb" opacity={0.7} />
            ))}

            {/* Folha */}
            <ellipse cx={360} cy={80} rx={60} ry={35} fill="#86efac" stroke="#16a34a" strokeWidth={2} />
            <text x={360} y={77} textAnchor="middle" fontSize={12} fontWeight={700} fill="#14532d">Folha</text>
            <text x={360} y={93} textAnchor="middle" fontSize={10} fill="#166534">mesófilo foliar</text>

            {/* Setas de transpiração */}
            <line x1={360} y1={44} x2={360} y2={18} stroke="#7dd3fc" strokeWidth={2} strokeDasharray="4 3" />
            <polygon points="360,10 354,22 366,22" fill="#7dd3fc" />
            <text x={386} y={32} fontSize={11} fill="#0369a1" fontStyle="italic">H₂O evaporada</text>
            <text x={386} y={45} fontSize={10} fill="#0369a1">(transpiração)</text>

            {/* Pelos absorventes */}
            {[-20, -10, 0, 10, 20].map((dx) => (
              <line key={dx} x1={310 + dx} y1={280} x2={290 + dx} y2={300} stroke="#65a30d" strokeWidth={1.5} />
            ))}
            {[-20, -10, 0, 10, 20].map((dx) => (
              <line key={`r${dx}`} x1={410 + dx} y1={280} x2={430 + dx} y2={300} stroke="#65a30d" strokeWidth={1.5} />
            ))}

            {/* Coesão label */}
            <rect x={30} y={130} width={140} height={56} rx={10} fill="#dbeafe" stroke="#93c5fd" strokeWidth={1.5} />
            <text x={100} y={152} textAnchor="middle" fontSize={12} fontWeight={700} fill="#1e3a8a">Coesão</text>
            <text x={100} y={168} textAnchor="middle" fontSize={10} fill="#1e40af">pontes H entre</text>
            <text x={100} y={181} textAnchor="middle" fontSize={10} fill="#1e40af">moléculas de H₂O</text>
            <line x1={170} y1={158} x2={348} y2={168} stroke="#93c5fd" strokeWidth={1.5} strokeDasharray="5 3" />

            {/* Adesão label */}
            <rect x={545} y={130} width={150} height={56} rx={10} fill="#fce7f3" stroke="#f9a8d4" strokeWidth={1.5} />
            <text x={620} y={152} textAnchor="middle" fontSize={12} fontWeight={700} fill="#831843">Adesão</text>
            <text x={620} y={168} textAnchor="middle" fontSize={10} fill="#9d174d">H₂O x parede</text>
            <text x={620} y={181} textAnchor="middle" fontSize={10} fill="#9d174d">do xilema</text>
            <line x1={545} y1={158} x2={372} y2={168} stroke="#f9a8d4" strokeWidth={1.5} strokeDasharray="5 3" />

            {/* Tensão label */}
            <rect x={30} y={50} width={140} height={50} rx={10} fill="#fef9c3" stroke="#fde047" strokeWidth={1.5} />
            <text x={100} y={70} textAnchor="middle" fontSize={12} fontWeight={700} fill="#713f12">Tensão</text>
            <text x={100} y={86} textAnchor="middle" fontSize={10} fill="#78350f">sucção gerada pela</text>
            <text x={100} y={99} textAnchor="middle" fontSize={10} fill="#78350f">transpiração foliar</text>
            <line x1={170} y1={75} x2={300} y2={75} stroke="#fde047" strokeWidth={1.5} strokeDasharray="5 3" />
          </svg>
          <figcaption>
            Ascensão da seiva bruta pelo xilema: a tensão gerada pela
            transpiração foliar puxa uma coluna de H₂O mantida coesa por pontes
            de hidrogênio e aderida às paredes do xilema — teoria de Dixon.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Pressão Radicular e Gutação</h3>
          <p>
            Além da tensão gerada pela transpiração, as raízes exercem uma{" "}
            <strong>pressão positiva</strong> sobre a seiva: o acúmulo de sais
            no xilema radicular (por transporte ativo) diminui o potencial
            hídrico local, atraindo H₂O por osmose e criando uma pressão
            hidrostática que empurra a seiva para cima. Essa{" "}
            <strong>pressão radicular</strong> é responsável pela{" "}
            <strong>gutação</strong> — saída de gotas de água líquida pelas
            margens e pontas das folhas, através de estruturas chamadas{" "}
            <strong>hidatódios</strong>, observada tipicamente em manhãs frias e
            úmidas, quando a transpiração está reduzida mas a raiz continua
            absorvendo ativamente.
          </p>
        </div>
      </section>

      {/* ===================== SEÇÃO 3 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Transpiração Estomática</span>

        <h2>3. Transpiração Estomática e Controle pelos Estômatos</h2>

        <p>
          A <strong>transpiração</strong> é a perda de água na forma de vapor
          pela superfície das plantas. Embora pareça um "desperdício", ela é
          o principal <em>motor</em> do transporte de seiva bruta (teoria de
          Dixon) e também resfria as folhas por evaporação — função análoga à
          sudorese nos animais. Cerca de <strong>90% da transpiração</strong>{" "}
          ocorre pelos <strong>estômatos</strong> (transpiração estomática); os
          outros 10% se distribuem entre a cutícula (transpiração cuticular) e
          as lenticelas do caule (transpiração lenticelar).
        </p>

        <p>
          Os <strong>estômatos</strong> são estruturas da epiderme foliar —
          especialmente abundantes na face abaxial (inferior) das folhas
          dicotiledôneas — formados por dois tipos celulares: as{" "}
          <strong>células-guarda</strong> (ou células estomáticas), em forma
          de rim em dicotiledôneas ou de haltere em monocotiledôneas, e as{" "}
          <strong>células subsidiárias</strong> ao redor delas. Entre as
          células-guarda fica o <strong>ostíolo</strong>, poro que se abre ou
          fecha de acordo com o estado de turgescência das células-guarda.
        </p>

        <div className="lesson-highlight">
          <h3>Mecanismo de abertura: o papel do K⁺</h3>
          <p>
            A abertura estomática é um fenômeno ativo que demanda energia (ATP
            via fotofosforilação):
          </p>
          <ol>
            <li>
              Na presença de luz, as células-guarda ativam bombas de H⁺
              (H⁺-ATPases) na membrana plasmática, expulsando prótons para o
              apoplasto;
            </li>
            <li>
              O potencial elétrico negativo gerado nas células-guarda abre
              canais de K⁺, permitindo influxo maciço de <strong>K⁺</strong>{" "}
              (e também de Cl⁻ e síntese de malato²⁻ como ânions compensatórios);
            </li>
            <li>
              O acúmulo de solutos reduz o potencial hídrico das células-guarda
              → entrada de H₂O por osmose → células ficam <strong>túrgidas</strong>
              {" "}→ como a parede interna (voltada para o ostíolo) é mais
              espessa e inextensível que a parede externa, o inchaço provoca uma
              curvatura que <strong>abre o ostíolo</strong>;
            </li>
            <li>
              Para o fechamento: saída de K⁺ → saída de H₂O por osmose →
              células <strong>murcham</strong> → ostíolo fecha.
            </li>
          </ol>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 260" width="680" height="260" aria-label="Estômato aberto e fechado com turgor das células-guarda">
            <rect x={0} y={0} width={680} height={260} rx={14} fill="#f8fafc" />

            {/* --- ESTÔMATO ABERTO --- */}
            <text x={170} y={28} textAnchor="middle" fontSize={14} fontWeight={800} fill="#15803d">Estômato ABERTO</text>

            {/* Células-guarda túrgidas — abertas */}
            <ellipse cx={130} cy={130} rx={55} ry={22} fill="#86efac" stroke="#15803d" strokeWidth={2.5} transform="rotate(30 130 130)" />
            <ellipse cx={210} cy={130} rx={55} ry={22} fill="#86efac" stroke="#15803d" strokeWidth={2.5} transform="rotate(-30 210 130)" />
            {/* Ostíolo visível */}
            <ellipse cx={170} cy={130} rx={10} ry={20} fill="#f0fdf4" stroke="#15803d" strokeWidth={1.5} />
            <text x={170} y={133} textAnchor="middle" fontSize={9} fill="#166534">ostíolo</text>

            {/* K⁺ entrando */}
            <text x={60} y={95} fontSize={11} fill="#1d4ed8" fontWeight={700}>K⁺ →</text>
            <text x={255} y={95} fontSize={11} fill="#1d4ed8" fontWeight={700}>← K⁺</text>
            <text x={170} y={188} textAnchor="middle" fontSize={10} fill="#15803d">túrgidas → abertura</text>
            <text x={170} y={202} textAnchor="middle" fontSize={10} fill="#15803d">H₂O entra por osmose</text>

            {/* Células subsidiárias */}
            <ellipse cx={74} cy={130} rx={32} ry={30} fill="#d1fae5" stroke="#6ee7b7" strokeWidth={1} opacity={0.7} />
            <ellipse cx={266} cy={130} rx={32} ry={30} fill="#d1fae5" stroke="#6ee7b7" strokeWidth={1} opacity={0.7} />
            <text x={74} y={133} textAnchor="middle" fontSize={8} fill="#065f46">cel.\nsubsid.</text>
            <text x={266} y={133} textAnchor="middle" fontSize={8} fill="#065f46">cel.\nsubsid.</text>

            {/* Divisor */}
            <line x1={340} y1={20} x2={340} y2={240} stroke="#e2e8f0" strokeWidth={2} strokeDasharray="6 4" />

            {/* --- ESTÔMATO FECHADO --- */}
            <text x={510} y={28} textAnchor="middle" fontSize={14} fontWeight={800} fill="#b91c1c">Estômato FECHADO</text>

            {/* Células-guarda murchas — fechadas */}
            <ellipse cx={470} cy={130} rx={40} ry={18} fill="#fca5a5" stroke="#b91c1c" strokeWidth={2.5} />
            <ellipse cx={550} cy={130} rx={40} ry={18} fill="#fca5a5" stroke="#b91c1c" strokeWidth={2.5} />
            {/* Sem ostíolo */}
            <ellipse cx={510} cy={130} rx={5} ry={4} fill="#fee2e2" stroke="#b91c1c" strokeWidth={1} />

            {/* K⁺ saindo */}
            <text x={400} y={95} fontSize={11} fill="#b91c1c" fontWeight={700}>← K⁺</text>
            <text x={590} y={95} fontSize={11} fill="#b91c1c" fontWeight={700}>K⁺ →</text>
            <text x={510} y={188} textAnchor="middle" fontSize={10} fill="#b91c1c">murchas → fechamento</text>
            <text x={510} y={202} textAnchor="middle" fontSize={10} fill="#b91c1c">H₂O sai por osmose</text>

            {/* ABA label */}
            <rect x={440} y={218} width={140} height={30} rx={8} fill="#fef3c7" stroke="#f59e0b" strokeWidth={1.5} />
            <text x={510} y={238} textAnchor="middle" fontSize={11} fontWeight={700} fill="#92400e">ABA induz fechamento</text>
          </svg>
          <figcaption>
            Esquerda: estômato aberto — células-guarda túrgidas por influxo de K⁺
            e H₂O. Direita: estômato fechado — células-guarda murchas após saída
            de K⁺ e H₂O. O ácido abscísico (ABA) acelera o fechamento em estresse
            hídrico.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Ácido Abscísico (ABA) — o hormônio do estresse hídrico</h3>
          <p>
            Quando as células do mesófilo detectam déficit de água (potencial
            hídrico muito negativo), sintetizam e liberam <strong>ácido
            abscísico (ABA)</strong>. Esse hormônio se liga a receptores nas
            células-guarda, ativa canais de saída de K⁺ e inibe os canais de
            entrada de K⁺, resultando em rápido fechamento dos estômatos para
            conter a perda de H₂O. O ABA também inibe a síntese de clorofila e
            favorece a abscisão foliar em condições de seca severa.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fator</th>
                <th>Efeito sobre os estômatos</th>
                <th>Mecanismo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Luz (azul)</td>
                <td>Abertura</td>
                <td>Ativa H⁺-ATPases → influxo de K⁺ → turgor</td>
              </tr>
              <tr>
                <td>Baixo CO₂ interno</td>
                <td>Abertura</td>
                <td>Sinal que estimula fixação de C; abre para capturar CO₂</td>
              </tr>
              <tr>
                <td>Déficit hídrico / ABA</td>
                <td>Fechamento</td>
                <td>ABA ativa efluxo de K⁺ e Ca²⁺ intracelular → murcha</td>
              </tr>
              <tr>
                <td>Alta temperatura</td>
                <td>Fechamento (proteção)</td>
                <td>Reduz perda de H₂O; ABA sinalizado pelo calor</td>
              </tr>
              <tr>
                <td>Alto CO₂ interno</td>
                <td>Fechamento</td>
                <td>Indica fotossíntese saturada; fecha para economizar H₂O</td>
              </tr>
              <tr>
                <td>Baixa umidade / vento</td>
                <td>Fechamento (parcial)</td>
                <td>Acelera transpiração; sinal hídrico → ABA</td>
              </tr>
              <tr>
                <td>Escuridão</td>
                <td>Fechamento</td>
                <td>Bombas H⁺ inativas; K⁺ sai das células-guarda</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===================== SEÇÃO 4 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Floema e Seiva Elaborada</span>

        <h2>4. Condução da Seiva Elaborada pelo Floema</h2>

        <p>
          Enquanto o xilema conduz de baixo para cima, o <strong>floema</strong>
          {" "}conduz a <strong>seiva elaborada</strong> — solução rica em
          sacarose (açúcar produzido pela fotossíntese), aminoácidos, hormônios
          e outros compostos orgânicos — de forma <strong>bidirecional</strong>,
          sempre no sentido <em>fonte → dreno</em>. As células condutoras do
          floema são os <strong>elementos crivados</strong> (placas crivadas com
          poros) e as <strong>células companheiras</strong> (de paredes finas,
          nucleadas, que fornecem energia e proteínas aos elementos crivados
          anucleados).
        </p>

        <div className="lesson-highlight">
          <h3>Modelo de Fluxo de Massa de Münch (pressão osmótica)</h3>
          <p>
            Ernst Münch propôs, em 1930, o modelo mais aceito para explicar o
            transporte no floema:
          </p>
          <ol>
            <li>
              Na <strong>fonte</strong> (folha fotossintetizante): sacarose é
              carregada ativamente para os elementos crivados → queda do
              potencial hídrico → entrada de H₂O por osmose → aumento da
              pressão hidrostática local;
            </li>
            <li>
              No <strong>dreno</strong> (raiz, fruto, gema, semente em
              crescimento): sacarose é descarregada para células adjacentes →
              potencial hídrico sobe nos elementos crivados → H₂O sai por
              osmose → pressão hidrostática cai;
            </li>
            <li>
              O <strong>gradiente de pressão</strong> entre fonte (alta pressão)
              e dreno (baixa pressão) gera um <strong>fluxo de massa</strong>
              que arrasta a sacarose e demais solutos dissolvidos ao longo do
              floema — sem gasto direto de ATP no transporte em massa, embora o
              carregamento e descarregamento exijam energia.
            </li>
          </ol>
        </div>

        <div className="lesson-highlight">
          <h3>Experiência do Anelamento de Malpighi</h3>
          <p>
            Marcello Malpighi (séc. XVII) removeu um anel completo da casca de
            uma árvore (incluindo o floema, mas poupando o xilema, mais
            profundo). Observou que a região imediatamente <em>acima</em> do
            anel inchou progressivamente, acumulando sacarose, enquanto as
            raízes abaixo do anel morreram por inanição. Isso demonstrou que o
            floema conduz açúcares das folhas para baixo (e para qualquer
            dreno), enquanto o xilema continua funcionando para as partes aéreas.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🍃</span>
            <h3>Fonte</h3>
            <p>Folhas (e outros órgãos fotossintetizantes): carregam sacarose no floema, aumentando a pressão.</p>
          </div>

          <div className="lesson-card">
            <span>🌰</span>
            <h3>Dreno</h3>
            <p>Raízes, frutos, sementes, gemas: descarregam sacarose do floema, reduzindo a pressão.</p>
          </div>

          <div className="lesson-card">
            <span>↕️</span>
            <h3>Bidirecional</h3>
            <p>Fluxo sempre de fonte→dreno, mas pode ocorrer para cima ou para baixo, dependendo de qual órgão é o dreno.</p>
          </div>

          <div className="lesson-card">
            <span>🔋</span>
            <h3>Carregamento Ativo</h3>
            <p>A entrada de sacarose nos elementos crivados exige transportadores e gasto de ATP pelas células companheiras.</p>
          </div>
        </div>
      </section>

      {/* ===================== SEÇÃO 5 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Xilema × Floema</span>

        <h2>5. Comparação entre Xilema e Floema</h2>

        <p>
          Xilema e floema são os dois tecidos vasculares das plantas, presentes
          juntos nos <strong>feixes vasculares</strong>. Embora trabalhem em
          conjunto para sustentar o metabolismo da planta, diferem radicalmente
          em composição, direção e mecanismo de transporte:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Xilema</th>
                <th>Floema</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Conteúdo transportado</td>
                <td>Seiva bruta (H₂O + sais minerais)</td>
                <td>Seiva elaborada (sacarose, aminoácidos, hormônios)</td>
              </tr>
              <tr>
                <td>Direção do fluxo</td>
                <td>Sempre ascendente (raiz → folha)</td>
                <td>Bidirecional (fonte → dreno)</td>
              </tr>
              <tr>
                <td>Células condutoras</td>
                <td>Traqueídes e elementos de vaso (mortas)</td>
                <td>Elementos crivados (vivos, anucleados)</td>
              </tr>
              <tr>
                <td>Células associadas</td>
                <td>Fibras e parênquima xilemático</td>
                <td>Células companheiras (nucleadas, ativas)</td>
              </tr>
              <tr>
                <td>Motor do transporte</td>
                <td>Tensão (transpiração) + coesão + adesão</td>
                <td>Gradiente de pressão osmótica (fonte → dreno)</td>
              </tr>
              <tr>
                <td>Paredes celulares</td>
                <td>Espessas, lignificadas</td>
                <td>Finas, celulósicas</td>
              </tr>
              <tr>
                <td>Localização nos feixes</td>
                <td>Porção interna (adaxial)</td>
                <td>Porção externa (abaxial)</td>
              </tr>
              <tr>
                <td>Experimento diagnóstico</td>
                <td>Corte do caule: planta perde rigidez, murcha</td>
                <td>Anelamento de Malpighi: inchaço acima do anel</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 640 200" width="640" height="200" aria-label="Diagrama de fluxo fonte-dreno no floema e xilema">
            <rect x={0} y={0} width={640} height={200} rx={14} fill="#fafafa" />

            {/* Folha (fonte) */}
            <ellipse cx={100} cy={100} rx={70} ry={40} fill="#bbf7d0" stroke="#16a34a" strokeWidth={2} />
            <text x={100} y={97} textAnchor="middle" fontSize={13} fontWeight={800} fill="#14532d">Folha</text>
            <text x={100} y={113} textAnchor="middle" fontSize={11} fill="#15803d">(fonte)</text>

            {/* Raiz (dreno) */}
            <ellipse cx={540} cy={100} rx={70} ry={40} fill="#fef9c3" stroke="#ca8a04" strokeWidth={2} />
            <text x={540} y={97} textAnchor="middle" fontSize={13} fontWeight={800} fill="#713f12">Raiz</text>
            <text x={540} y={113} textAnchor="middle" fontSize={11} fill="#854d0e">(dreno)</text>

            {/* Seta floema — de cima */}
            <path d="M 170 82 Q 355 50 470 82" fill="none" stroke="#f59e0b" strokeWidth={3} />
            <polygon points="470,82 455,74 460,88" fill="#f59e0b" />
            <text x={320} y={50} textAnchor="middle" fontSize={12} fontWeight={700} fill="#92400e">Floema (sacarose)</text>
            <text x={320} y={64} textAnchor="middle" fontSize={10} fill="#a16207">pressão alta → pressão baixa</text>

            {/* Seta xilema — de baixo */}
            <path d="M 470 118 Q 355 150 170 118" fill="none" stroke="#3b82f6" strokeWidth={3} />
            <polygon points="170,118 185,110 181,124" fill="#3b82f6" />
            <text x={320} y={158} textAnchor="middle" fontSize={12} fontWeight={700} fill="#1e40af">Xilema (H₂O + sais)</text>
            <text x={320} y={172} textAnchor="middle" fontSize={10} fill="#1d4ed8">tensão-coesão-adesão → ascendente</text>
          </svg>
          <figcaption>
            Fluxo bidirecional no floema (amarelo, fonte→dreno) e fluxo
            ascendente no xilema (azul, raiz→folha).
          </figcaption>
        </figure>
      </section>

      {/* ===================== SEÇÃO 6 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Fatores e Adaptações</span>

        <h2>6. Fatores que Afetam a Transpiração e Adaptações Xerofíticas</h2>

        <p>
          A taxa de transpiração determina diretamente a velocidade do fluxo de
          seiva bruta e, portanto, a absorção de sais e o resfriamento foliar.
          Vários fatores ambientais e anatômicos modulam essa taxa:
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Fator</th>
                <th>Efeito na transpiração</th>
                <th>Justificativa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Temperatura elevada</td>
                <td>Aumenta</td>
                <td>Maior energia cinética das moléculas → evaporação mais rápida</td>
              </tr>
              <tr>
                <td>Luminosidade</td>
                <td>Aumenta (indiretamente)</td>
                <td>Luz abre estômatos → mais poros abertos → mais perda de H₂O</td>
              </tr>
              <tr>
                <td>Vento forte</td>
                <td>Aumenta</td>
                <td>Remove o ar úmido próximo à folha, aumentando o gradiente de vapor</td>
              </tr>
              <tr>
                <td>Baixa umidade relativa</td>
                <td>Aumenta</td>
                <td>Grande diferença de concentração de vapor (folha × ar)</td>
              </tr>
              <tr>
                <td>Alta umidade relativa</td>
                <td>Diminui</td>
                <td>Gradiente de vapor reduzido</td>
              </tr>
              <tr>
                <td>Déficit hídrico no solo</td>
                <td>Diminui (estômatos fecham)</td>
                <td>ABA sinaliza fechamento estomático para conservar H₂O</td>
              </tr>
              <tr>
                <td>Cutícula espessa</td>
                <td>Diminui transpiração cuticular</td>
                <td>Barreira de cera impede difusão de vapor pela superfície</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Plantas de ambientes áridos (<strong>xerófitas</strong>) desenvolveram
          diversas adaptações para minimizar a perda de H₂O: cutícula muito
          espessa e cerosa; folhas reduzidas a espinhos (cactáceas) ou
          cilíndricas; estômatos em criptas (recesses protegidos do vento);
          presença de parênquima aquífero para armazenar H₂O; e o{" "}
          <strong>metabolismo CAM</strong> — as plantas CAM (como cactos,
          abacaxi, agave) abrem os estômatos <em>exclusivamente à noite</em>{" "}
          para capturar CO₂, que é fixado como ácido málico nas vacúolos. De
          dia, com estômatos fechados, o ácido málico é descarboxilado,
          liberando CO₂ para a fase luminosa da fotossíntese. Isso permite
          realizar fotossíntese sem perder H₂O durante o calor diurno.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌵</span>
            <h3>Metabolismo CAM</h3>
            <p>Estômatos abrem à noite; CO₂ fixado como malato e usado de dia na fotossíntese. Máxima economia de H₂O.</p>
          </div>

          <div className="lesson-card">
            <span>🌾</span>
            <h3>Plantas C₄</h3>
            <p>Células da bainha do feixe concentram CO₂ antes da Calvin, reduzindo a fotorrespiração em climas quentes.</p>
          </div>

          <div className="lesson-card">
            <span>🌲</span>
            <h3>Plantas C₃</h3>
            <p>Fixação direta via RuBisCO no mesófilo; típicas de climas temperados e úmidos. Maior transpiração relativa.</p>
          </div>
        </div>
      </section>

      {/* ===================== SEÇÃO 7 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Integração dos Sistemas</span>

        <h2>7. Integração: do Solo à Folha, da Folha ao Fruto</h2>

        <p>
          O transporte hídrico e de fotoassimilados forma um sistema integrado
          e autorregulado. A tabela abaixo sintetiza o caminho completo da
          H₂O desde o solo até ser liberada como vapor ou incorporada em
          biomoléculas:
        </p>

        <div className="lesson-highlight">
          <h3>Rota da água (do solo à atmosfera)</h3>
          <ol>
            <li>
              Solo → pelos absorventes da raiz: <strong>osmose</strong>;
            </li>
            <li>
              Pelo córtex radicular (apoplasto + simplasto) até a endoderme:
              filtração pelas <strong>estrias de Caspary</strong>;
            </li>
            <li>
              Endoderme → periciclo → xilema radicular: passagem obrigatória
              pela membrana;
            </li>
            <li>
              Xilema radicular → xilema caulinar → xilema foliar: condução
              ascendente por <strong>tensão-coesão-adesão</strong>;
            </li>
            <li>
              Xilema foliar → parênquima do mesófilo: osmose e difusão pelas
              paredes;
            </li>
            <li>
              Mesófilo → câmara subestomática → atmosfera: evaporação e
              difusão do vapor de H₂O pelo ostíolo aberto.
            </li>
          </ol>
        </div>

        <div className="lesson-highlight">
          <h3>Rota da sacarose (da folha ao fruto)</h3>
          <ol>
            <li>
              Cloroplastos do mesófilo: fotossíntese produz trioses-fosfato;
            </li>
            <li>
              Citoplasma/cloroplasto: síntese de <strong>sacarose</strong>;
            </li>
            <li>
              Carregamento ativo da sacarose no floema (elementos crivados) via
              células companheiras;
            </li>
            <li>
              Gradiente de pressão direciona o fluxo de massa <strong>folha
              (fonte) → fruto ou raiz (dreno)</strong>;
            </li>
            <li>
              Descarregamento da sacarose no dreno: utilizada para respiração
              ou convertida em amido, proteínas e lipídios de reserva.
            </li>
          </ol>
        </div>

        <p>
          Percebe-se que <strong>xilema e floema são interdependentes</strong>:
          a água que chega pelo xilema às folhas alimenta a fotossíntese e a
          turgescência das células-guarda; a fotossíntese produz sacarose
          transportada pelo floema; os açúcares que chegam às raízes pelo
          floema fornecem energia para o transporte ativo de sais, que por sua
          vez diminui o potencial hídrico da raiz e aumenta a absorção de H₂O
          pelo xilema — um ciclo virtuoso que mantém a planta funcionando.
        </p>
      </section>

      {/* ===================== SEÇÃO 8 ===================== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Função dos pelos absorventes e osmose"
          statement={
            <p>
              A absorção de água pelas raízes das plantas ocorre principalmente
              pelos pelos absorventes por meio de osmose. A condição necessária
              para que a água entre passivamente na raiz a partir do solo é:
            </p>
          }
          options={[
            { letter: "a", text: "O potencial hídrico do solo ser maior que o da raiz, com mais solutos no solo" },
            {
              letter: "b",
              text: "O potencial hídrico da raiz ser menor (mais negativo) do que o do solo, devido à maior concentração de solutos na raiz",
              correct: true,
            },
            { letter: "c", text: "A raiz gastar ATP para bombear H₂O pelo gradiente de concentração" },
            { letter: "d", text: "As estrias de Caspary bombearem H₂O ativamente para o xilema" },
          ]}
          resolution={
            <p>
              A osmose é um transporte passivo: a H₂O flui do local de maior
              potencial hídrico (solo, com menos solutos) para o de menor
              potencial hídrico (raiz, com mais solutos acumulados por transporte
              ativo). As estrias de Caspary controlam a via apoplástica, mas não
              bombeiam H₂O — ela segue o gradiente osmótico.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Teoria de Dixon — coesão-tensão-adesão"
          statement={
            <p>
              Uma árvore de 80 m de altura eleva seiva bruta do solo até o topo
              das folhas. Segundo a teoria de Dixon, qual é o principal motor
              desse processo e por que a coluna de água não se rompe?
            </p>
          }
          options={[
            { letter: "a", text: "A pressão radicular positiva empurra a água para cima; a lignina veda o xilema impedindo o colapso" },
            { letter: "b", text: "O bombeamento ativo de H⁺ pelas células do xilema gera fluxo; a capilaridade evita o rompimento" },
            {
              letter: "c",
              text: "A tensão (sucção) gerada pela transpiração foliar puxa a coluna; coesão (pontes de H) e adesão às paredes impedem o rompimento",
              correct: true,
            },
            { letter: "d", text: "O floema doa pressão ao xilema por osmose; a celulose das paredes mantém a coesão" },
          ]}
          resolution={
            <p>
              Segundo Dixon, a transpiração cria tensão negativa no topo do
              xilema foliar. As pontes de hidrogênio entre moléculas de H₂O
              (coesão) transmitem essa tensão por toda a coluna, e a adesão da
              H₂O às paredes celulósicas/lignificadas do xilema evita o colapso
              lateral. A pressão radicular é um fator auxiliar menor, insuficiente
              para elevar a seiva a 80 m sozinha.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. ABA e fechamento estomático em seca"
          statement={
            <p>
              Em período de seca intensa, as células do mesófilo de uma planta
              C₃ sintetizam ácido abscísico (ABA). Analise as afirmações abaixo
              e assinale a correta:
            </p>
          }
          options={[
            { letter: "a", text: "O ABA abre os estômatos para aumentar a captura de CO₂ e compensar a queda de fotossíntese" },
            {
              letter: "b",
              text: "O ABA promove influxo de K⁺ nas células-guarda, tornando-as túrgidas e abrindo o ostíolo",
            },
            {
              letter: "c",
              text: "O ABA induz efluxo de K⁺ das células-guarda, causando saída de H₂O por osmose e fechamento do ostíolo para reduzir a perda de H₂O",
              correct: true,
            },
            { letter: "d", text: "O ABA atua no floema, aumentando o transporte de sacarose para as raízes durante a seca" },
          ]}
          resolution={
            <p>
              O ABA é o hormônio do estresse hídrico. Ele se liga a receptores
              das células-guarda e ativa canais de efluxo de K⁺ (e de Cl⁻) e
              eleva o Ca²⁺ citoplasmático, que inibe os canais de entrada de K⁺.
              A perda de solutos reduz o potencial hídrico externo às
              células-guarda, que perdem H₂O por osmose, murcham e fecham o
              ostíolo — minimizando a transpiração e a perda de H₂O em
              condições de seca.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Anelamento de árvores frutíferas (ENEM)"
          statement={
            <p>
              Produtores rurais utilizam o anelamento — remoção de um anel da
              casca do tronco (retirando o floema mas preservando o xilema) —
              logo abaixo de um ramo frutífero para aumentar o tamanho dos
              frutos. Com base na fisiologia vegetal, a justificativa correta
              para esse efeito é:
            </p>
          }
          options={[
            { letter: "a", text: "O anelamento impede a subida da seiva bruta pelo xilema, acumulando H₂O no ramo e nos frutos" },
            { letter: "b", text: "O anelamento bloqueia a perda de H₂O pelos estômatos do ramo anelado, aumentando a turgescência dos frutos" },
            {
              letter: "c",
              text: "O anelamento interrompe o floema abaixo do ramo, impedindo que a sacarose produzida nas folhas do ramo desça para outras partes; ela fica retida e é utilizada no crescimento dos frutos",
              correct: true,
            },
            { letter: "d", text: "O anelamento elimina células xilemáticas envelhecidas, renovando o tecido e aumentando a absorção mineral do ramo" },
          ]}
          resolution={
            <p>
              A sacarose produzida nas folhas pelo ramo anelado é transportada
              pelo floema. Ao anular o floema abaixo do ramo, o produtor cria
              uma "armadilha" para os fotoassimilados: eles ficam disponíveis
              para os frutos daquele ramo (o dreno mais próximo), que recebem
              mais açúcar e crescem mais. O xilema, mais interno, continua
              fornecendo H₂O e sais para as folhas do ramo.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Gutação versus transpiração"
          statement={
            <p>
              Ao amanhecer, um agricultor observa gotículas de água líquida nas
              margens das folhas de suas plantas de morango, apesar de o tempo
              estar úmido e frio. No mesmo dia, ao meio-dia com sol forte e
              vento, as folhas estão secas. Que fenômenos explicam,
              respectivamente, as gotículas da manhã e a secura ao meio-dia?
            </p>
          }
          options={[
            { letter: "a", text: "Transpiração cuticular pela manhã; transpiração estomática ao meio-dia" },
            { letter: "b", text: "Condensação do orvalho nas margens; evaporação do orvalho pelo sol" },
            {
              letter: "c",
              text: "Gutação (pressão radicular empurra H₂O líquida pelos hidatódios com estômatos fechados) pela manhã; transpiração estomática intensa (calor + vento + luz = estômatos abertos e alta taxa de evaporação) ao meio-dia",
              correct: true,
            },
            { letter: "d", text: "Pressão radicular positiva pela manhã; sucção floemática ao meio-dia" },
          ]}
          resolution={
            <p>
              Pela manhã fria e úmida, a transpiração é mínima (estômatos
              tendem a estar fechados no início do dia e a umidade alta reduz o
              gradiente de vapor). A pressão radicular, porém, continua
              empurrando H₂O para cima; sem transpiração para dissipar essa
              pressão, a H₂O sai líquida pelos <strong>hidatódios</strong> das
              margens foliares — fenômeno chamado <strong>gutação</strong>. Ao
              meio-dia, a luz abre amplamente os estômatos, o calor e o vento
              aceleram a evaporação, e a transpiração estomática é intensa —
              removendo toda a água visível da superfície foliar.
            </p>
          }
        />
      </section>
    </article>
  );
}
