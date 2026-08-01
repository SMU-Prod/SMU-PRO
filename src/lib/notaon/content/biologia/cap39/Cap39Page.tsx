"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap39Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 39</span>

          <h1>Sistemas de Nutrição: Sistema Digestório e Sistema Respiratório Humano</h1>

          <p>
            A sobrevivência de cada célula do corpo humano depende de dois grandes
            processos integrados: a <strong>obtenção de nutrientes</strong>, realizada
            pelo sistema digestório, e a <strong>obtenção de oxigênio</strong>, garantida
            pelo sistema respiratório. Juntos, esses sistemas fornecem à respiração
            celular os insumos necessários para a produção de ATP — a "moeda
            energética" do organismo. Este capítulo detalha a anatomia funcional,
            a fisiologia enzimática e as trocas gasosas cobradas com alta frequência
            no ENEM e nos vestibulares.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Visão Geral</span>

        <h2>1. Integração entre Nutrição e Respiração</h2>

        <p>
          O conceito de <strong>nutrição</strong> no contexto fisiológico abrange
          todos os processos que fornecem matéria e energia às células. O sistema
          digestório desmonta os alimentos em moléculas pequenas (glicose,
          aminoácidos, ácidos graxos), que chegam ao sangue e são distribuídas
          pelo sistema circulatório. Paralelamente, o sistema respiratório capta
          O₂ do ambiente e elimina CO₂ produzido pelo metabolismo celular. A
          equação resumida da respiração aeróbica ilustra essa dependência:
        </p>

        <div className="lesson-highlight">
          <h3>Respiração celular aeróbica (resumo)</h3>
          <p>
            <strong>Glicose + 6 O₂ → 6 CO₂ + 6 H₂O + ATP</strong>
          </p>
          <p>
            Sem glicose (vinda do sistema digestório) ou sem O₂ (vindo do sistema
            respiratório), a produção de ATP cai drasticamente e as células entram
            em colapso. Daí a importância fisiológica da integração entre esses dois
            sistemas.
          </p>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🍽️</span>
            <h3>Sistema Digestório</h3>
            <p>Transforma alimentos complexos em nutrientes absorvíveis: glicose, aminoácidos e ácidos graxos.</p>
          </div>

          <div className="lesson-card">
            <span>🫁</span>
            <h3>Sistema Respiratório</h3>
            <p>Capta O₂ do ar e elimina CO₂, realizando hematose nos alvéolos pulmonares.</p>
          </div>

          <div className="lesson-card">
            <span>🩸</span>
            <h3>Sistema Circulatório</h3>
            <p>Distribui nutrientes e gases por todo o corpo, conectando os outros dois sistemas.</p>
          </div>

          <div className="lesson-card">
            <span>⚡</span>
            <h3>Metabolismo Celular</h3>
            <p>Usa glicose + O₂ para gerar ATP, liberando CO₂ e H₂O como subprodutos.</p>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Sistema Digestório</span>

        <h2>2. Anatomia do Tubo Digestório e Glândulas Anexas</h2>

        <p>
          O sistema digestório humano é formado por um <strong>tubo contínuo</strong> —
          o tubo digestório — com cerca de 8 a 9 metros de comprimento, e por
          glândulas que lançam suas secreções no interior desse tubo. A progressão
          do alimento ocorre em sentido único, da boca ao ânus, graças a ondas
          musculares involuntárias chamadas <strong>peristaltismo</strong>.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 680 340" width="680" height="340" aria-label="Esquema do trato digestório humano com órgãos rotulados">
            {/* corpo esquemático */}
            <rect x={0} y={0} width={680} height={340} fill="#f8fafc" rx={14} />
            {/* esôfago */}
            <rect x={310} y={30} width={28} height={70} rx={8} fill="#a5f3fc" stroke="#0891b2" strokeWidth={1.5} />
            <text x={260} y={50} textAnchor="end" fontSize={12} fontWeight={700} fill="#0e7490">Esôfago</text>
            <line x1={262} y1={50} x2={310} y2={58} stroke="#0891b2" strokeWidth={1} strokeDasharray="3 2" />
            {/* estômago */}
            <ellipse cx={290} cy={140} rx={52} ry={42} fill="#fef08a" stroke="#ca8a04" strokeWidth={1.8} />
            <text x={220} y={138} textAnchor="end" fontSize={12} fontWeight={700} fill="#92400e">Estômago</text>
            <line x1={222} y1={138} x2={240} y2={140} stroke="#ca8a04" strokeWidth={1} strokeDasharray="3 2" />
            {/* intestino delgado — serpentina */}
            <path d="M 305 175 C 350 190, 370 220, 320 235 C 270 250, 250 280, 310 290 C 360 300, 390 275, 370 255" fill="none" stroke="#86efac" strokeWidth={12} strokeLinecap="round" strokeLinejoin="round" />
            <text x={420} y={260} textAnchor="start" fontSize={12} fontWeight={700} fill="#166534">Int. Delgado</text>
            <line x1={418} y1={258} x2={380} y2={260} stroke="#16a34a" strokeWidth={1} strokeDasharray="3 2" />
            {/* intestino grosso — moldura */}
            <path d="M 370 255 C 410 240, 430 200, 410 160 C 390 120, 360 110, 330 115 C 300 120, 280 130, 283 145" fill="none" stroke="#c4b5fd" strokeWidth={14} strokeLinecap="round" />
            <text x={440} y={160} textAnchor="start" fontSize={12} fontWeight={700} fill="#6d28d9">Int. Grosso</text>
            <line x1={438} y1={158} x2={415} y2={165} stroke="#7c3aed" strokeWidth={1} strokeDasharray="3 2" />
            {/* fígado */}
            <ellipse cx={390} cy={120} rx={38} ry={28} fill="#fca5a5" stroke="#dc2626" strokeWidth={1.5} />
            <text x={440} y={120} textAnchor="start" fontSize={12} fontWeight={700} fill="#991b1b">Fígado</text>
            <line x1={438} y1={120} x2={428} y2={120} stroke="#dc2626" strokeWidth={1} strokeDasharray="3 2" />
            {/* pâncreas */}
            <rect x={345} y={168} width={65} height={18} rx={8} fill="#fdba74" stroke="#ea580c" strokeWidth={1.5} />
            <text x={440} y={180} textAnchor="start" fontSize={12} fontWeight={700} fill="#c2410c">Pâncreas</text>
            <line x1={438} y1={180} x2={410} y2={178} stroke="#ea580c" strokeWidth={1} strokeDasharray="3 2" />
            {/* boca */}
            <rect x={295} y={10} width={48} height={18} rx={6} fill="#e2e8f0" stroke="#475569" strokeWidth={1.5} />
            <text x={324} y={23} textAnchor="middle" fontSize={11} fontWeight={700} fill="#1e293b">Boca</text>
            {/* ânus / reto */}
            <rect x={305} y={305} width={28} height={18} rx={6} fill="#e2e8f0" stroke="#475569" strokeWidth={1.5} />
            <text x={319} y={317} textAnchor="middle" fontSize={10} fontWeight={600} fill="#1e293b">Reto/Ânus</text>
            {/* seta geral */}
            <text x={148} y={180} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">Tubo digestório</text>
            <text x={148} y={195} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#6b7280">(boca → ânus)</text>
          </svg>
          <figcaption>
            Esquema simplificado do trato digestório humano. O fígado e o pâncreas são
            glândulas anexas que lançam secreções no duodeno.
          </figcaption>
        </figure>

        <p>
          As <strong>glândulas salivares</strong> (parótidas, submandibulares e
          sublinguais) produzem em torno de 1 a 1,5 litro de saliva por dia. O{" "}
          <strong>fígado</strong> produz a bile (armazenada na vesícula biliar) e
          o <strong>pâncreas exócrino</strong> fabrica suco pancreático rico em
          enzimas. Ambas as secreções desembocam no duodeno — primeira porção do
          intestino delgado —, onde ocorre a maior parte da digestão química.
        </p>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Digestão Mecânica e Química</span>

        <h2>3. Digestão Mecânica × Química e as Enzimas Digestivas</h2>

        <p>
          A <strong>digestão mecânica</strong> fragmenta fisicamente o alimento
          sem alterar sua composição química: mastigação (dentes e língua),
          deglutição e peristaltismo. Já a <strong>digestão química</strong>{" "}
          usa enzimas para quebrar ligações covalentes das macromoléculas,
          transformando-as em monômeros absorvíveis.
        </p>

        <div className="lesson-highlight">
          <h3>Conceito-chave: enzimas digestivas são hidrolases</h3>
          <p>
            Todas as enzimas digestivas são <strong>hidrolases</strong> —
            catalisam reações de <strong>hidrólise</strong>, que inserem uma
            molécula de H₂O para romper a ligação entre os monômeros.
            Cada enzima tem especificidade de substrato e de pH ótimo,
            o que explica por que atuam em diferentes segmentos do tubo.
          </p>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Enzima / Secreção</th>
                <th>Local de Produção</th>
                <th>Local de Ação</th>
                <th>Substrato</th>
                <th>Produto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Amilase salivar</strong> (ptialina)</td>
                <td>Glândulas salivares</td>
                <td>Boca (início no esôfago)</td>
                <td>Amido</td>
                <td>Maltose + dextrinas</td>
              </tr>
              <tr>
                <td><strong>Pepsina</strong></td>
                <td>Estômago (pepsinogênio ativado por HCl)</td>
                <td>Estômago</td>
                <td>Proteínas</td>
                <td>Polipeptídeos</td>
              </tr>
              <tr>
                <td><strong>Lipase gástrica</strong></td>
                <td>Estômago</td>
                <td>Estômago</td>
                <td>Gorduras emulsionadas</td>
                <td>Ácidos graxos + glicerol</td>
              </tr>
              <tr>
                <td><strong>Amilase pancreática</strong></td>
                <td>Pâncreas</td>
                <td>Duodeno / Jejuno</td>
                <td>Amido restante</td>
                <td>Maltose</td>
              </tr>
              <tr>
                <td><strong>Lipase pancreática</strong></td>
                <td>Pâncreas</td>
                <td>Duodeno / Jejuno</td>
                <td>Triglicerídeos emulsionados</td>
                <td>Ácidos graxos + monoglicerídeos</td>
              </tr>
              <tr>
                <td><strong>Tripsina / Quimotripsina</strong></td>
                <td>Pâncreas</td>
                <td>Duodeno / Jejuno</td>
                <td>Polipeptídeos</td>
                <td>Peptídeos menores</td>
              </tr>
              <tr>
                <td><strong>Maltase / Sacarase / Lactase</strong></td>
                <td>Intestino delgado</td>
                <td>Intestino delgado</td>
                <td>Dissacarídeos</td>
                <td>Monossacarídeos (glicose, frutose, galactose)</td>
              </tr>
              <tr>
                <td><strong>Peptidases intestinais</strong></td>
                <td>Intestino delgado</td>
                <td>Intestino delgado</td>
                <td>Dipeptídeos / tripeptídeos</td>
                <td>Aminoácidos</td>
              </tr>
              <tr>
                <td><strong>Sais biliares</strong> (não são enzimas)</td>
                <td>Fígado / Vesícula biliar</td>
                <td>Duodeno</td>
                <td>Gorduras (emulsificação)</td>
                <td>Gotículas menores (facilitam lipase)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Por que o suco gástrico não digere a parede do estômago?</h3>
          <p>
            O estômago produz <strong>muco</strong> (camada protetora), e a pepsina
            é secretada de forma inativa como <strong>pepsinogênio</strong>. Somente
            ao contato com o HCl luminal — longe das células produtoras — o
            pepsinogênio é convertido em pepsina ativa. Quando esse equilíbrio é
            rompido (ex.: infecção por <em>Helicobacter pylori</em> ou uso crônico
            de anti-inflamatórios), surge a <strong>úlcera péptica</strong>.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Absorção de Nutrientes</span>

        <h2>4. Absorção no Intestino Delgado: Vilosidades e Microvilosidades</h2>

        <p>
          O intestino delgado é o principal sítio de absorção de nutrientes. Para
          maximizar a área de contato com o quimo (massa pastosa proveniente do
          estômago), sua parede possui <strong>três níveis de dobramento</strong>:
          as <strong>pregas circulares</strong> (macroscópicas), as{" "}
          <strong>vilosidades</strong> (projeções microscópicas ricas em vasos
          sanguíneos e linfáticos) e as <strong>microvilosidades</strong> (bordas
          em escova da superfície apical dos enterócitos). O resultado é uma área
          de absorção de aproximadamente <strong>200 m²</strong> — equivalente a
          um campo de futebol.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🩸</span>
            <h3>Nutrientes via sangue</h3>
            <p>
              Glicose, aminoácidos, minerais e vitaminas hidrossolúveis são absorvidos
              pelos capilares sanguíneos das vilosidades e seguem pela veia porta
              até o fígado.
            </p>
          </div>

          <div className="lesson-card">
            <span>🟡</span>
            <h3>Gorduras via linfa</h3>
            <p>
              Ácidos graxos e glicerol reconstituem triglicerídeos dentro do enterócito,
              formam quilomícrons e são absorvidos pelos vasos linfáticos (quilíferos).
            </p>
          </div>

          <div className="lesson-card">
            <span>💧</span>
            <h3>Intestino grosso</h3>
            <p>
              Não há digestão enzimática relevante. A principal função é absorver
              água e eletrólitos, compactando as fezes antes da eliminação.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Intolerância à lactose: uma aplicação direta</h3>
          <p>
            Pessoas que produzem pouca ou nenhuma <strong>lactase</strong> não
            conseguem digerir a lactose (dissacarídeo do leite) no intestino
            delgado. A lactose não absorvida chega ao intestino grosso, onde bactérias
            a fermentam, produzindo gases (CO₂, H₂, CH₄) e ácidos orgânicos,
            causando dor, distensão e diarreia. É um tema recorrente em contextos
            do ENEM.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Sistema Respiratório</span>

        <h2>5. Anatomia das Vias Respiratórias</h2>

        <p>
          O sistema respiratório humano é dividido em <strong>vias aéreas
          superiores</strong> (fossas nasais, faringe, laringe) e{" "}
          <strong>vias aéreas inferiores</strong> (traqueia, brônquios, bronquíolos
          e alvéolos). Cada segmento tem função específica que vai além de simples
          condução do ar.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Estrutura</th>
                <th>Características</th>
                <th>Função Principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fossas nasais</strong></td>
                <td>Revestidas por mucosa ciliada e vascularizada; pelos (vibrissas)</td>
                <td>Filtrar partículas, aquecer e umidificar o ar</td>
              </tr>
              <tr>
                <td><strong>Faringe</strong></td>
                <td>Passagem comum ao ar e alimento; região da amígdala</td>
                <td>Condução do ar e dos alimentos; imunidade local</td>
              </tr>
              <tr>
                <td><strong>Laringe</strong></td>
                <td>Contém as cordas vocais e a epiglote</td>
                <td>Fonação e impedimento de entrada de alimento (epiglote)</td>
              </tr>
              <tr>
                <td><strong>Traqueia</strong></td>
                <td>Tubos com anéis cartilaginosos em "C"; mucosa ciliada</td>
                <td>Conduzir ar; cílios transportam muco + partículas para cima</td>
              </tr>
              <tr>
                <td><strong>Brônquios</strong></td>
                <td>Dois ramos principais (direito e esquerdo); cartilagem</td>
                <td>Distribuir ar para cada pulmão</td>
              </tr>
              <tr>
                <td><strong>Bronquíolos</strong></td>
                <td>Sem cartilagem; parede muscular lisa</td>
                <td>Distribuição fina do ar; regulação do fluxo (broncoconstrição/dilatação)</td>
              </tr>
              <tr>
                <td><strong>Alvéolos</strong></td>
                <td>Sacos microscópicos; parede unicelular; rodeados de capilares</td>
                <td>Hematose: trocas gasosas O₂ / CO₂</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A <strong>epiglote</strong> é uma estrutura lamelar de cartilagem que se
          dobra sobre a abertura da laringe no momento da deglutição, impedindo que
          alimentos ou líquidos entrem nas vias respiratórias. Quando esse reflexo
          falha (p. ex., engasgo), partículas atingem a traqueia e podem causar
          asfixia ou pneumonia aspirativa.
        </p>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Mecânica Ventilatória</span>

        <h2>6. Inspiração, Expiração e o Papel do Diafragma</h2>

        <p>
          A ventilação pulmonar é um processo <strong>ativo na inspiração</strong> e
          predominantemente <strong>passivo na expiração</strong> normal. O pulmão
          não possui musculatura própria — depende dos movimentos da caixa torácica
          e do diafragma para variar seu volume.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 640 260" width="640" height="260" aria-label="Mecânica ventilatória: inspiração e expiração com diafragma">
            <rect x={0} y={0} width={640} height={260} fill="#f0fdf4" rx={14} />

            {/* --- INSPIRAÇÃO (esquerda) --- */}
            <text x={155} y={22} textAnchor="middle" fontSize={14} fontWeight={800} fill="#166534">INSPIRAÇÃO</text>

            {/* caixa torácica */}
            <path d="M 80 40 Q 80 150 155 170 Q 230 150 230 40 Z" fill="#bbf7d0" stroke="#16a34a" strokeWidth={2} />
            {/* pulmões */}
            <ellipse cx={135} cy={95} rx={28} ry={48} fill="#86efac" stroke="#15803d" strokeWidth={1.5} />
            <ellipse cx={175} cy={95} rx={28} ry={48} fill="#86efac" stroke="#15803d" strokeWidth={1.5} />
            {/* diafragma arqueado para baixo */}
            <path d="M 85 155 Q 155 195 225 155" fill="none" stroke="#15803d" strokeWidth={3} />
            <text x={155} y={210} textAnchor="middle" fontSize={11} fill="#166534">diafragma contrai → desce</text>
            <text x={155} y={227} textAnchor="middle" fontSize={11} fill="#166534">volume ↑ → pressão ↓ → ar entra</text>
            {/* setas ar entrando */}
            <polygon points="155,32 148,48 162,48" fill="#16a34a" />
            <text x={155} y={30} textAnchor="middle" fontSize={10} fill="#15803d">ar entra ↓</text>

            {/* separador */}
            <line x1={320} y1={20} x2={320} y2={240} stroke="#d1d5db" strokeWidth={1.5} strokeDasharray="6 4" />

            {/* --- EXPIRAÇÃO (direita) --- */}
            <text x={485} y={22} textAnchor="middle" fontSize={14} fontWeight={800} fill="#9a3412">EXPIRAÇÃO</text>

            {/* caixa torácica menor */}
            <path d="M 410 50 Q 415 150 485 165 Q 555 150 560 50 Z" fill="#fed7aa" stroke="#ea580c" strokeWidth={2} />
            {/* pulmões menores */}
            <ellipse cx={465} cy={100} rx={23} ry={40} fill="#fdba74" stroke="#c2410c" strokeWidth={1.5} />
            <ellipse cx={505} cy={100} rx={23} ry={40} fill="#fdba74" stroke="#c2410c" strokeWidth={1.5} />
            {/* diafragma arqueado para cima */}
            <path d="M 415 148 Q 485 118 555 148" fill="none" stroke="#c2410c" strokeWidth={3} />
            <text x={485} y={210} textAnchor="middle" fontSize={11} fill="#9a3412">diafragma relaxa → sobe</text>
            <text x={485} y={227} textAnchor="middle" fontSize={11} fill="#9a3412">volume ↓ → pressão ↑ → ar sai</text>
            {/* seta ar saindo */}
            <polygon points="485,38 478,22 492,22" fill="#ea580c" />
            <text x={485} y={19} textAnchor="middle" fontSize={10} fill="#c2410c">ar sai ↑</text>
          </svg>
          <figcaption>
            Mecânica ventilatória: à esquerda, inspiração (diafragma desce, volume
            aumenta, pressão cai, ar entra); à direita, expiração (diafragma sobe,
            volume diminui, pressão sobe, ar sai).
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Lei de Boyle aplicada à ventilação</h3>
          <p>
            A relação pressão × volume (P × V = constante, a temperatura constante)
            explica a mecânica respiratória: quando o diafragma e os músculos
            intercostais <strong>aumentam o volume torácico</strong>, a pressão
            intrapulmonar cai abaixo da pressão atmosférica e o ar flui para dentro
            (inspiração). Na expiração, o processo se inverte: a musculatura relaxa,
            o volume diminui, a pressão sobe e o ar é expelido.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Hematose</span>

        <h2>7. Trocas Gasosas nos Alvéolos e Transporte de Gases</h2>

        <p>
          A <strong>hematose</strong> é o processo de renovação dos gases do
          sangue que ocorre nos alvéolos pulmonares. Os alvéolos possuem parede
          formada por uma única camada de células (pneumócitos tipo I) muito
          delgada, em íntimo contato com capilares igualmente finos —
          o que minimiza a distância de difusão e maximiza a eficiência das trocas.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 580 270" width="580" height="270" aria-label="Alvéolo e capilar: hematose com O2 e CO2">
            <rect x={0} y={0} width={580} height={270} fill="#eff6ff" rx={14} />

            {/* alvéolo */}
            <ellipse cx={200} cy={130} rx={110} ry={100} fill="#dbeafe" stroke="#3b82f6" strokeWidth={2.5} />
            <text x={200} y={50} textAnchor="middle" fontSize={13} fontWeight={800} fill="#1d4ed8">ALVÉOLO</text>
            <text x={200} y={68} textAnchor="middle" fontSize={11} fill="#1e40af">(ar rico em O₂)</text>

            {/* capilar */}
            <rect x={340} y={55} width={170} height={150} rx={20} fill="#fee2e2" stroke="#ef4444" strokeWidth={2} />
            <text x={425} y={82} textAnchor="middle" fontSize={13} fontWeight={800} fill="#991b1b">CAPILAR</text>
            <text x={425} y={100} textAnchor="middle" fontSize={11} fill="#b91c1c">SANGUÍNEO</text>

            {/* parede alvéolo-capilar */}
            <rect x={308} y={55} width={36} height={150} rx={4} fill="#e0f2fe" stroke="#7dd3fc" strokeWidth={1.5} />
            <text x={326} y={125} textAnchor="middle" fontSize={9} fill="#0369a1" transform="rotate(-90,326,130)">parede fina</text>

            {/* seta O2 entrando no capilar */}
            <line x1={280} y1={118} x2={340} y2={118} stroke="#2563eb" strokeWidth={2.5} markerEnd="url(#arrowBlue)" />
            <text x={310} y={110} textAnchor="middle" fontSize={13} fontWeight={800} fill="#2563eb">O₂</text>
            <defs>
              <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 Z" fill="#2563eb" />
              </marker>
              <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto">
                <path d="M8,0 L8,6 L0,3 Z" fill="#dc2626" />
              </marker>
            </defs>
            {/* seta CO2 saindo do capilar */}
            <line x1={340} y1={145} x2={280} y2={145} stroke="#dc2626" strokeWidth={2.5} markerEnd="url(#arrowRed)" />
            <text x={310} y={165} textAnchor="middle" fontSize={13} fontWeight={800} fill="#dc2626">CO₂</text>

            {/* sangue venoso → arterial */}
            <text x={425} y={135} textAnchor="middle" fontSize={11} fill="#7f1d1d">sangue venoso</text>
            <text x={425} y={152} textAnchor="middle" fontSize={11} fill="#7f1d1d">(rico em CO₂)</text>
            <polygon points="425,175 410,200 440,200" fill="#ef4444" />
            <text x={425} y={220} textAnchor="middle" fontSize={11} fill="#166534">sangue arterial</text>
            <text x={425} y={236} textAnchor="middle" fontSize={11} fill="#166534">(rico em O₂)</text>

            <text x={130} y={248} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#4b5563">O₂ difunde: alvéolo → sangue | CO₂ difunde: sangue → alvéolo</text>
          </svg>
          <figcaption>
            Hematose pulmonar: O₂ passa dos alvéolos (alta [O₂]) para o capilar
            (baixa [O₂]) e CO₂ faz o caminho inverso — ambos por difusão simples
            a favor do gradiente de concentração.
          </figcaption>
        </figure>

        <p>
          O transporte de gases no sangue ocorre de formas distintas para cada gás:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔴</span>
            <h3>Transporte de O₂</h3>
            <p>
              Cerca de <strong>97%</strong> do O₂ é carregado ligado à
              <strong> hemoglobina</strong> (formando oxiemoglobina — HbO₂).
              Apenas ~3% dissolve-se no plasma. A hemoglobina tem 4 sítios de
              ligação para O₂; o pH ácido e o CO₂ elevado reduzem sua afinidade
              (efeito Bohr), liberando O₂ nos tecidos metabolicamente ativos.
            </p>
          </div>

          <div className="lesson-card">
            <span>💨</span>
            <h3>Transporte de CO₂</h3>
            <p>
              O CO₂ é transportado de três formas: ~70% como <strong>bicarbonato</strong>{" "}
              (HCO₃⁻) no plasma, ~23% ligado à hemoglobina (carbamino-hemoglobina) e
              ~7% dissolvido no plasma. A reação CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻
              é catalisada pela anidrase carbônica nas hemácias.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Controle da respiração: quem manda é o CO₂</h3>
          <p>
            O centro respiratório no <strong>bulbo</strong> regula automaticamente
            a frequência e profundidade da respiração. O principal estímulo é o
            aumento da <strong>concentração de CO₂</strong> (e consequente queda
            do pH sanguíneo): quimiorreceptores detectam essa alteração e
            sinalizam ao bulbo para aumentar a ventilação. Por isso, apneia
            voluntária é limitada — o acúmulo de CO₂ torna-se insuportável antes
            que o O₂ caia a níveis perigosos.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 8 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Saúde e Doenças</span>

        <h2>8. Doenças Relacionadas aos Sistemas Digestório e Respiratório</h2>

        <p>
          O ENEM frequentemente contextualiza os sistemas fisiológicos em problemas
          de saúde pública. Conhecer o mecanismo dessas doenças permite resolver
          questões que relacionam anatomia, fisiologia e contexto social.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🔥</span>
            <h3>Gastrite e Úlcera Péptica</h3>
            <p>
              Inflamação / erosão da mucosa gástrica. Causas: infecção por{" "}
              <em>H. pylori</em>, estresse, AINEs. Sem muco protetor, o HCl ataca
              a parede do estômago.
            </p>
          </div>

          <div className="lesson-card">
            <span>🍺</span>
            <h3>Cirrose Hepática</h3>
            <p>
              Substituição do tecido hepático por fibrose, comprometendo produção
              de bile, proteínas plasmáticas e detoxificação. Causas: alcoolismo,
              hepatites virais.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦠</span>
            <h3>Pneumonia</h3>
            <p>
              Infecção bacteriana, viral ou fúngica que preenche os alvéolos com
              exsudato, prejudicando a hematose e a oxigenação do sangue.
            </p>
          </div>

          <div className="lesson-card">
            <span>🚬</span>
            <h3>Enfisema Pulmonar</h3>
            <p>
              Destruição das paredes alveolares (fumo principal causa), reduzindo
              a área de hematose. Resulta em dispneia progressiva e irreversível.
            </p>
          </div>

          <div className="lesson-card">
            <span>😮‍💨</span>
            <h3>Asma</h3>
            <p>
              Inflamação crônica das vias aéreas com broncoconstrição reversível
              e hipersecreção de muco, dificultando a passagem do ar (sibilância,
              dispneia, tosse).
            </p>
          </div>

          <div className="lesson-card">
            <span>🌊</span>
            <h3>Intoxicação por CO</h3>
            <p>
              O monóxido de carbono tem afinidade ~240× maior que o O₂ pela
              hemoglobina, formando carboxi-hemoglobina e impedindo o transporte
              de O₂ — hipóxia grave sem cianose evidente.
            </p>
          </div>
        </div>
      </section>

      {/* ===== EXERCÍCIOS ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Enzima digestiva e local de ação"
          statement={
            <p>
              A amilase salivar (ptialina) inicia a digestão do amido ainda na
              boca. No entanto, sua ação logo cessa. Qual fator impede que ela
              continue atuando no estômago?
            </p>
          }
          options={[
            { letter: "a", text: "A ausência de água no estômago desnatura a enzima" },
            {
              letter: "b",
              text: "O pH ácido do suco gástrico inativa a amilase salivar, que tem pH ótimo neutro/alcalino",
              correct: true,
            },
            { letter: "c", text: "A pepsina destrói o amido antes que a amilase possa agir" },
            { letter: "d", text: "O estômago não contém substrato para a amilase" },
          ]}
          resolution={
            <p>
              A amilase salivar atua em pH próximo de 7 (neutro). O estômago possui
              pH entre 1,5 e 2,5 (muito ácido), o que desnatura e inativa a enzima.
              A digestão do amido só é retomada no duodeno, pela amilase pancreática,
              num ambiente alcalinizado pelo bicarbonato pancreático.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Papel dos sais biliares na digestão de gorduras"
          statement={
            <p>
              Pacientes com obstrução do ducto biliar não conseguem lançar bile no
              duodeno. Qual consequência direta essa condição provoca na digestão?
            </p>
          }
          options={[
            { letter: "a", text: "Impossibilidade de digerir proteínas, pois a bile ativa as proteases" },
            {
              letter: "b",
              text: "Deficiência na digestão de gorduras, pois sem sais biliares as gorduras não são emulsificadas e a lipase pancreática perde eficiência",
              correct: true,
            },
            { letter: "c", text: "Ausência de digestão de amido no duodeno" },
            { letter: "d", text: "Impossibilidade de absorção de aminoácidos pelas vilosidades" },
          ]}
          resolution={
            <p>
              Os sais biliares são emulsificantes: reduzem a tensão superficial das
              gotículas de gordura, criando gotas menores (maior área de contato).
              Isso potencializa a ação da <strong>lipase pancreática</strong>. Sem
              bile, gorduras chegam ao intestino grosso não digeridas, causando
              esteatorreia (fezes gordurosas) e deficiência de vitaminas
              lipossolúveis (A, D, E, K).
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Efeito Bohr e entrega de O₂ aos tecidos"
          statement={
            <p>
              Durante exercício intenso, músculos produzem muito CO₂ e ácido
              lático, reduzindo o pH local. Como isso afeta a hemoglobina e qual
              é o benefício fisiológico desse efeito?
            </p>
          }
          options={[
            { letter: "a", text: "O pH baixo aumenta a afinidade da hemoglobina pelo O₂, retendo-o nos pulmões" },
            {
              letter: "b",
              text: "O pH baixo e o CO₂ elevado reduzem a afinidade da hemoglobina pelo O₂ (efeito Bohr), facilitando a liberação de O₂ justamente onde a demanda é maior",
              correct: true,
            },
            { letter: "c", text: "O CO₂ desloca o O₂ da hemoglobina apenas nos pulmões, não nos tecidos" },
            { letter: "d", text: "O pH baixo destrói a hemoglobina, interrompendo o transporte de O₂" },
          ]}
          resolution={
            <p>
              O <strong>efeito Bohr</strong> é um mecanismo adaptativo: em tecidos
              ativos, onde CO₂ e H⁺ são abundantes (pH mais baixo), a hemoglobina
              perde afinidade pelo O₂ e o libera. Nos alvéolos pulmonares, o CO₂ é
              eliminado e o pH sobe — a hemoglobina recupera alta afinidade e capta
              O₂ eficientemente. É uma resposta fisiológica precisa à demanda
              metabólica local.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Enfisema pulmonar e tabagismo (ENEM)"
          statement={
            <p>
              Um paciente tabagista de longa data apresenta progressiva dificuldade
              para respirar. Exames de imagem mostram aumento do volume residual
              pulmonar e destruição de septos alveolares. Com base nesses dados,
              qual mecanismo explica a deficiência respiratória do paciente?
            </p>
          }
          options={[
            { letter: "a", text: "Excesso de muco obstrui os brônquios, impedindo a passagem do ar" },
            { letter: "b", text: "Broncoconstrição reversível reduz temporariamente a ventilação" },
            {
              letter: "c",
              text: "A destruição dos septos alveolares diminui drasticamente a área de hematose, comprometendo a oxigenação do sangue mesmo em repouso",
              correct: true,
            },
            { letter: "d", text: "A laringe inflama, dificultando a entrada de ar nas vias superiores" },
          ]}
          resolution={
            <p>
              No <strong>enfisema pulmonar</strong>, as substâncias tóxicas do
              tabaco ativam proteases nos alvéolos que destroem as paredes
              (septos) entre eles. Alvéolos menores fundem-se em bolsas maiores,
              reduzindo enormemente a área de contato ar-sangue. Menos hematose
              significa menos O₂ no sangue, obrigando o paciente a aumentar a
              frequência respiratória para compensar — mas com pouco sucesso,
              pois a lesão é irreversível.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Intolerância à lactose e flora intestinal"
          statement={
            <p>
              Uma adolescente percebe que, após consumir leite, apresenta dor
              abdominal, distensão e diarreia. Exame confirmou deficiência de
              lactase intestinal. Qual encadeamento de eventos explica os sintomas?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A lactose não digerida eleva o pH do intestino delgado, precipitando proteínas",
            },
            {
              letter: "b",
              text: "A lactose não absorvida chega ao intestino grosso, onde bactérias a fermentam, produzindo gases e ácidos que atraem água para o lúmen, causando distensão e diarreia osmótica",
              correct: true,
            },
            { letter: "c", text: "A falta de lactase impede a absorção de glicose no estômago" },
            { letter: "d", text: "A lactase é necessária para produzir bile, e sem ela as gorduras causam diarreia" },
          ]}
          resolution={
            <p>
              Sem <strong>lactase</strong> suficiente, a lactose (glicose + galactose)
              não é hidrolisada no intestino delgado. Ao chegar ao intestino grosso,
              bactérias da microbiota a fermentam, produzindo CO₂, H₂, CH₄ e ácidos
              orgânicos (distensão e dor). Esses solutos osmoticamente ativos retêm
              água no lúmen intestinal, resultando em <strong>diarreia osmótica</strong>.
              O tratamento inclui evitar lactose ou usar suplemento de lactase.
            </p>
          }
        />
      </section>
    </article>
  );
}
