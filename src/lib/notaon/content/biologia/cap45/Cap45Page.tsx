"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap45Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Biologia • Capítulo 45</span>

          <h1>Fluxo de Energia, Sucessão Ecológica e Ciclos Biogeoquímicos</h1>

          <p>
            Compreenda como a energia percorre os ecossistemas de forma
            unidirecional, por que a matéria pode ser reciclada mas a energia
            não, como as comunidades se renovam ao longo do tempo e de que
            maneira os elementos essenciais à vida — carbono, nitrogênio,
            fósforo — circulam entre os seres vivos e o ambiente físico. Este
            conjunto de conceitos é um dos mais cobrados no ENEM e nos
            principais vestibulares do país.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 1 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Fluxo de Energia</span>

        <h2>1. Energia nos Ecossistemas — Cadeia e Teia Alimentar</h2>

        <p>
          A <strong>energia solar</strong> é a fonte primária de quase todos os
          ecossistemas da Terra. Os organismos <strong>autotróficos</strong>{" "}
          (plantas, algas, cianobactérias) capturam essa energia via{" "}
          <strong>fotossíntese</strong>, convertendo CO₂ e H₂O em glicose e
          biomassa. A partir daí, a energia flui ao longo dos{" "}
          <strong>níveis tróficos</strong> por meio das relações de predação e
          consumo, formando as <strong>cadeias alimentares</strong>.
        </p>

        <p>
          Uma <strong>cadeia alimentar</strong> representa uma sequência linear
          de quem come quem: por exemplo,{" "}
          <em>capim → gafanhoto → sapo → cobra → gavião-real</em>. Na prática,
          cada espécie participa de múltiplas cadeias ao mesmo tempo, formando
          uma <strong>teia alimentar</strong> — uma rede complexa de interações
          que torna o ecossistema mais resistente à extinção de uma única
          espécie.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Produtores (1° nível)</h3>
            <p>
              Organismos autotróficos. Realizam fotossíntese ou quimiossíntese.
              Base energética de toda cadeia.
            </p>
          </div>

          <div className="lesson-card">
            <span>🐇</span>
            <h3>Consumidores Primários (2° nível)</h3>
            <p>
              Herbívoros que se alimentam diretamente dos produtores. Ex.:
              gafanhotos, bois, coelhos.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦊</span>
            <h3>Consumidores Secundários (3° nível)</h3>
            <p>
              Carnívoros que predam os herbívoros. Ex.: sapos, raposas,
              serpentes.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦅</span>
            <h3>Consumidores Terciários e além</h3>
            <p>
              Predadores de topo que predam os consumidores secundários. Ex.:
              gavião, tubarão, leão.
            </p>
          </div>

          <div className="lesson-card">
            <span>🍄</span>
            <h3>Decompositores</h3>
            <p>
              Fungos e bactérias que decompõem matéria orgânica morta,
              reciclando nutrientes minerais para o solo.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔄</span>
            <h3>Detritívoros</h3>
            <p>
              Animais que fragmentam a matéria morta (minhocas, besouros
              rola-bosta), facilitando a decomposição.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Fluxo de energia é UNIDIRECIONAL</h3>
          <p>
            Ao contrário da matéria, que pode ser reciclada indefinidamente, a{" "}
            <strong>energia flui em sentido único</strong>: entra como luz solar,
            é fixada pelos produtores, passa pelos consumidores e é
            progressivamente dissipada como <strong>calor</strong> a cada
            transferência metabólica. Nunca retorna à forma de luz utilizável.
            Isso explica por que os ecossistemas precisam de aporte contínuo de
            energia solar.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 2 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Regra dos 10%</span>

        <h2>2. Transferência de Energia e a Regra dos 10%</h2>

        <p>
          A cada passagem de um nível trófico ao seguinte, em média apenas{" "}
          <strong>10% da energia disponível</strong> é incorporada à biomassa do
          consumidor. Os outros 90% são perdidos principalmente como{" "}
          <strong>calor</strong> gerado na respiração celular, movimentação,
          manutenção da temperatura corporal e excreção. Esse valor de ~10% é
          chamado de <strong>eficiência ecológica</strong> ou{" "}
          <em>regra de Lindeman</em>.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 560 320" width="560" height="320" aria-label="Pirâmide de energia com regra dos 10%">
            {/* Nível 1 — Produtores */}
            <rect x={80} y={240} width={400} height={52} rx={6} fill="#16a34a" opacity={0.85} />
            <text x={280} y={261} textAnchor="middle" fontSize={14} fontWeight={700} fill="#fff">Produtores</text>
            <text x={280} y={281} textAnchor="middle" fontSize={13} fill="#d1fae5">10 000 kcal · ha⁻¹ · ano⁻¹</text>
            {/* Nível 2 — Cons. Primários */}
            <rect x={140} y={178} width={280} height={52} rx={6} fill="#0ea5e9" opacity={0.85} />
            <text x={280} y={199} textAnchor="middle" fontSize={14} fontWeight={700} fill="#fff">Consumidores Primários</text>
            <text x={280} y={219} textAnchor="middle" fontSize={13} fill="#e0f2fe">1 000 kcal</text>
            {/* Nível 3 — Cons. Secundários */}
            <rect x={195} y={116} width={170} height={52} rx={6} fill="#f59e0b" opacity={0.9} />
            <text x={280} y={137} textAnchor="middle" fontSize={13} fontWeight={700} fill="#fff">Cons. Secundários</text>
            <text x={280} y={157} textAnchor="middle" fontSize={13} fill="#fef9c3">100 kcal</text>
            {/* Nível 4 — Cons. Terciários */}
            <rect x={220} y={54} width={120} height={52} rx={6} fill="#ef4444" opacity={0.85} />
            <text x={280} y={75} textAnchor="middle" fontSize={13} fontWeight={700} fill="#fff">Cons. Terciários</text>
            <text x={280} y={95} textAnchor="middle" fontSize={13} fill="#fee2e2">10 kcal</text>
            {/* Setas de perda */}
            <text x={498} y={271} fontSize={12} fill="#6b7280" textAnchor="start">90% perdido</text>
            <text x={436} y={209} fontSize={12} fill="#6b7280" textAnchor="start">como calor</text>
            <text x={378} y={147} fontSize={12} fill="#6b7280" textAnchor="start">a cada nível</text>
            {/* Legenda */}
            <text x={280} y={308} textAnchor="middle" fontSize={11} fontStyle="italic" fill="#4b5563">A pirâmide de energia é SEMPRE ereta — nunca invertida.</text>
          </svg>
          <figcaption>
            Pirâmide de energia: a cada nível trófico, ~90% da energia é
            perdida como calor, e apenas ~10% é transferida ao nível seguinte
            (Regra de Lindeman). Valores ilustrativos em kcal · ha⁻¹ · ano⁻¹.
          </figcaption>
        </figure>

        <p>
          A consequência prática da regra dos 10% é que{" "}
          <strong>quanto mais curta a cadeia alimentar, maior a eficiência</strong>{" "}
          no uso dos recursos. Uma população humana que se alimenta de vegetais
          sustenta muito mais indivíduos do que a mesma área produzindo carne
          bovina — fato com implicações diretas na segurança alimentar mundial.
        </p>

        <div className="lesson-highlight">
          <h3>Produtividade Primária Bruta (PPB) e Líquida (PPL)</h3>
          <p>
            A <strong>produtividade primária bruta (PPB)</strong> é toda a
            energia fixada pelos produtores via fotossíntese. A{" "}
            <strong>produtividade primária líquida (PPL)</strong> é a energia
            que sobra após descontar o gasto da própria respiração do produtor:
            PPL = PPB − Respiração. É a PPL que fica disponível para os
            consumidores. Florestas tropicais têm PPL entre as mais altas do
            planeta (~2 000 g de matéria seca · m⁻² · ano⁻¹).
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 3 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Pirâmides Ecológicas</span>

        <h2>3. Pirâmides Ecológicas — Números, Biomassa e Energia</h2>

        <p>
          As <strong>pirâmides ecológicas</strong> são representações gráficas
          que comparam quantitativamente os níveis tróficos de um ecossistema.
          Existem três tipos, e cada um revela aspectos diferentes da estrutura
          da comunidade.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Tipo de Pirâmide</th>
                <th>O que mede</th>
                <th>Pode ser invertida?</th>
                <th>Exemplo de inversão</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>De Números</strong></td>
                <td>Quantidade de indivíduos em cada nível</td>
                <td>Sim</td>
                <td>Uma árvore sustenta milhares de insetos parasitas</td>
              </tr>
              <tr>
                <td><strong>De Biomassa</strong></td>
                <td>Massa seca de matéria orgânica por nível</td>
                <td>Sim</td>
                <td>Oceano: fitoplâncton (baixa biomassa) sustenta zooplâncton mais abundante</td>
              </tr>
              <tr>
                <td><strong>De Energia</strong></td>
                <td>Energia total fixada ou transferida (kcal · m⁻² · tempo⁻¹)</td>
                <td>Jamais</td>
                <td>— (sempre decresce por lei termodinâmica)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          A <strong>pirâmide de energia nunca é invertida</strong> porque a
          segunda lei da termodinâmica é inviolável: em toda transferência de
          energia ocorre aumento de entropia e dissipação de calor. Portanto, o
          nível superior sempre tem menos energia do que o nível que o sustenta.
          Já as pirâmides de números e biomassa podem ser invertidas quando a
          biomassa ou o número de indivíduos do produtor é menor do que o dos
          consumidores — situação comum no plâncton marinho.
        </p>
      </section>

      {/* ===== SEÇÃO 4 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Sucessão Ecológica</span>

        <h2>4. Sucessão Ecológica — Primária e Secundária</h2>

        <p>
          <strong>Sucessão ecológica</strong> é o processo gradual e direcional
          pelo qual as comunidades biológicas de uma área se modificam ao longo
          do tempo, substituindo-se umas às outras até atingir um estado de
          relativa estabilidade denominado{" "}
          <strong>comunidade clímax</strong>. Cada etapa da sucessão é chamada
          de <strong>sere</strong> ou <strong>estágio seral</strong>.
        </p>

        <div className="lesson-figure-row">
          <figure className="lesson-figure">
            <svg viewBox="0 0 340 200" width="340" height="200" aria-label="Gráfico de sucessão ecológica: biomassa e diversidade ao longo do tempo">
              {/* Eixos */}
              <line x1={45} y1={15} x2={45} y2={168} stroke="#374151" strokeWidth={1.5} />
              <line x1={45} y1={168} x2={325} y2={168} stroke="#374151" strokeWidth={1.5} />
              <text x={22} y={20} fontSize={10} fill="#374151">↑</text>
              <text x={4} y={100} fontSize={9} fill="#374151" transform="rotate(-90,12,100)">valor</text>
              <text x={320} y={182} fontSize={9} fill="#374151">tempo →</text>
              {/* Curva de biomassa (verde) */}
              <path d="M 45 160 C 90 150, 130 120, 180 70 C 220 35, 270 25, 325 22" fill="none" stroke="#16a34a" strokeWidth={2.5} />
              {/* Curva de diversidade (azul) */}
              <path d="M 45 162 C 80 140, 120 100, 170 72 C 210 50, 260 45, 325 43" fill="none" stroke="#3b82f6" strokeWidth={2.5} strokeDasharray="7 4" />
              {/* Legenda */}
              <rect x={55} y={18} width={14} height={4} fill="#16a34a" />
              <text x={74} y={24} fontSize={10} fill="#16a34a">Biomassa</text>
              <rect x={55} y={30} width={14} height={4} fill="#3b82f6" />
              <text x={74} y={36} fontSize={10} fill="#3b82f6">Diversidade</text>
              {/* Fases */}
              <text x={65} y={155} fontSize={9} fill="#6b7280">Pioneiros</text>
              <text x={155} y={90} fontSize={9} fill="#6b7280">Intermediário</text>
              <text x={265} y={38} fontSize={9} fill="#6b7280">Clímax</text>
              <line x1={148} y1={168} x2={148} y2={100} stroke="#d1d5db" strokeWidth={1} strokeDasharray="4 3" />
              <line x1={245} y1={168} x2={245} y2={35} stroke="#d1d5db" strokeWidth={1} strokeDasharray="4 3" />
            </svg>
            <figcaption>
              Biomassa e diversidade crescem ao longo da sucessão, atingindo
              valores máximos na comunidade clímax.
            </figcaption>
          </figure>
        </div>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Sucessão Primária</th>
                <th>Sucessão Secundária</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ponto de partida</strong></td>
                <td>Substrato sem vida nem solo (rocha nua, lava solidificada, dunas)</td>
                <td>Ambiente previamente habitado, com solo e banco de sementes</td>
              </tr>
              <tr>
                <td><strong>Velocidade</strong></td>
                <td>Muito lenta (séculos a milênios)</td>
                <td>Mais rápida (décadas)</td>
              </tr>
              <tr>
                <td><strong>Espécie pioneira típica</strong></td>
                <td>Líquens (simbiose alga + fungo), musgos</td>
                <td>Gramíneas, arbustos invasores, samambaias</td>
              </tr>
              <tr>
                <td><strong>Causas comuns</strong></td>
                <td>Vulcanismo, recuo de geleiras, formação de ilhas</td>
                <td>Incêndios, desmatamento, abandono de lavouras</td>
              </tr>
              <tr>
                <td><strong>Clímax</strong></td>
                <td>Floresta ou outra formação estável para o clima local</td>
                <td>Idem — mas atingido em menor tempo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Espécies pioneiras: os engenheiros do ecossistema</h3>
          <p>
            Os <strong>líquens</strong> são considerados os maiores exemplos de
            espécies pioneiras na sucessão primária. Por serem associações
            simbióticas entre fungos e algas (ou cianobactérias), suportam
            condições extremas de seca, calor e ausência de solo. Secretam ácidos
            que desgastam a rocha, e ao morrerem depositam matéria orgânica que
            gradualmente forma um proto-solo. Isso permite a colonização pelos{" "}
            <strong>musgos</strong>, que retêm mais água e aumentam a camada de
            húmus, até que plantas vasculares possam se estabelecer.
          </p>
          <p>
            À medida que a sucessão avança, a <strong>diversidade de
            espécies</strong>, a <strong>biomassa total</strong>, a complexidade
            das teias alimentares e os <strong>ciclos de nutrientes</strong>{" "}
            internos ao ecossistema aumentam. A comunidade clímax apresenta alto
            grau de homeostase ecológica.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 5 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Ciclos Biogeoquímicos</span>

        <h2>5. Ciclos da Água e do Carbono</h2>

        <p>
          Os <strong>ciclos biogeoquímicos</strong> descrevem o caminho que os
          elementos químicos percorrem entre os compartimentos bióticos (seres
          vivos) e abióticos (atmosfera, hidrosfera, litosfera). Ao contrário da
          energia, a <strong>matéria é reciclada</strong> e pode circular pelos
          mesmos átomos inúmeras vezes.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>💧</span>
            <h3>Ciclo da Água (Hidrológico)</h3>
            <p>
              Evaporação (oceanos, lagos) → condensação (nuvens) → precipitação
              (chuva, neve) → escoamento superficial + infiltração → absorção
              pelas plantas → transpiração (evapotranspiração). Vegetação é
              essencial: desmatamento reduz a chuva regional.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌫️</span>
            <h3>Ciclo do Carbono</h3>
            <p>
              CO₂ atmosférico fixado pela fotossíntese → incorporado na biomassa
              → devolvido por respiração, decomposição e combustão. Combustíveis
              fósseis liberam carbono "preso" há milhões de anos, intensificando
              o efeito estufa.
            </p>
          </div>
        </div>

        <figure className="lesson-figure">
          <svg viewBox="0 0 620 260" width="620" height="260" aria-label="Ciclo do carbono simplificado">
            {/* Atmosfera */}
            <rect x={200} y={10} width={220} height={44} rx={10} fill="#bfdbfe" stroke="#3b82f6" strokeWidth={1.5} />
            <text x={310} y={30} textAnchor="middle" fontSize={13} fontWeight={700} fill="#1e3a8a">Atmosfera (CO₂)</text>
            <text x={310} y={47} textAnchor="middle" fontSize={11} fill="#1e3a8a">~420 ppm hoje</text>
            {/* Plantas */}
            <rect x={30} y={130} width={150} height={44} rx={10} fill="#bbf7d0" stroke="#16a34a" strokeWidth={1.5} />
            <text x={105} y={157} textAnchor="middle" fontSize={13} fontWeight={700} fill="#14532d">Plantas / Algas</text>
            {/* Animais */}
            <rect x={440} y={130} width={150} height={44} rx={10} fill="#fde68a" stroke="#d97706" strokeWidth={1.5} />
            <text x={515} y={157} textAnchor="middle" fontSize={13} fontWeight={700} fill="#92400e">Animais</text>
            {/* Solo / Decompositores */}
            <rect x={220} y={200} width={180} height={44} rx={10} fill="#d6d3d1" stroke="#78716c" strokeWidth={1.5} />
            <text x={310} y={218} textAnchor="middle" fontSize={12} fontWeight={700} fill="#292524">Solo / Decompositores</text>
            <text x={310} y={234} textAnchor="middle" fontSize={11} fill="#57534e">+ combustíveis fósseis</text>
            {/* Setas fotossíntese: Atmosfera → Plantas */}
            <path d="M 220 54 L 130 130" fill="none" stroke="#16a34a" strokeWidth={2} markerEnd="url(#arr)" />
            <text x={148} y={98} fontSize={10} fill="#16a34a" textAnchor="middle">fotossíntese</text>
            {/* Seta respiração: Plantas → Atmosfera */}
            <path d="M 145 130 L 225 54" fill="none" stroke="#6b7280" strokeWidth={1.5} strokeDasharray="6 3" markerEnd="url(#arr2)" />
            <text x={207} y={88} fontSize={10} fill="#6b7280" textAnchor="middle">respiração</text>
            {/* Seta consumo: Plantas → Animais */}
            <path d="M 180 152 L 440 152" fill="none" stroke="#d97706" strokeWidth={2} markerEnd="url(#arr3)" />
            <text x={310} y={147} fontSize={10} fill="#d97706" textAnchor="middle">consumo</text>
            {/* Seta resp. animais: Animais → Atmosfera */}
            <path d="M 480 130 L 390 54" fill="none" stroke="#6b7280" strokeWidth={1.5} strokeDasharray="6 3" markerEnd="url(#arr2)" />
            <text x={450} y={88} fontSize={10} fill="#6b7280" textAnchor="middle">respiração</text>
            {/* Seta decomposição: Animais → Solo */}
            <path d="M 490 174 L 395 200" fill="none" stroke="#78716c" strokeWidth={1.5} markerEnd="url(#arr)" />
            <text x={460} y={196} fontSize={10} fill="#78716c">decomp.</text>
            {/* Seta decomp plantas → solo */}
            <path d="M 120 174 L 225 200" fill="none" stroke="#78716c" strokeWidth={1.5} markerEnd="url(#arr)" />
            <text x={148} y={198} fontSize={10} fill="#78716c">decomp.</text>
            {/* Seta solo → atmosfera (combustão / decomp) */}
            <path d="M 310 200 L 310 54" fill="none" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 4" markerEnd="url(#arr4)" />
            <text x={328} y={132} fontSize={10} fill="#ef4444">combustão</text>
            <text x={328} y={145} fontSize={10} fill="#ef4444">+ decomp.</text>
            {/* Definição de setas */}
            <defs>
              <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#78716c" />
              </marker>
              <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6b7280" />
              </marker>
              <marker id="arr3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#d97706" />
              </marker>
              <marker id="arr4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#ef4444" />
              </marker>
            </defs>
          </svg>
          <figcaption>
            Ciclo do carbono simplificado: a fotossíntese retira CO₂ da
            atmosfera; respiração, decomposição e combustão o devolvem. A queima
            de combustíveis fósseis acelera o processo, elevando o CO₂ atmosférico.
          </figcaption>
        </figure>

        <div className="lesson-highlight">
          <h3>Efeito estufa e aquecimento global</h3>
          <p>
            O CO₂, o metano (CH₄) e o óxido nitroso (N₂O) são os principais{" "}
            <strong>gases de efeito estufa</strong>. O efeito estufa é natural e
            fundamental para a vida (sem ele, a Terra teria -18 °C em média),
            mas a emissão excessiva por atividades humanas vem intensificando o
            aquecimento global — com consequências como a elevação do nível do
            mar, eventos climáticos extremos e perda de biodiversidade.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 6 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Ciclo do Nitrogênio</span>

        <h2>6. Ciclo do Nitrogênio — Etapas e Microrganismos</h2>

        <p>
          O nitrogênio (N₂) compõe <strong>78% da atmosfera</strong>, mas a
          maioria dos seres vivos não consegue utilizá-lo na forma gasosa. Ele
          precisa ser "<strong>fixado</strong>" — convertido em formas
          assimiláveis como amônia (NH₃) ou nitrato (NO₃⁻). Esse ciclo envolve
          quatro etapas principais, mediadas por bactérias especializadas.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 640 280" width="640" height="280" aria-label="Ciclo do nitrogênio com setas e etapas">
            {/* Atmosfera N2 */}
            <rect x={230} y={10} width={180} height={40} rx={10} fill="#e0e7ff" stroke="#6366f1" strokeWidth={1.5} />
            <text x={320} y={35} textAnchor="middle" fontSize={13} fontWeight={700} fill="#312e81">N₂ atmosférico (78%)</text>
            {/* Fixação — bactérias fixadoras */}
            <rect x={20} y={100} width={170} height={50} rx={10} fill="#fef9c3" stroke="#ca8a04" strokeWidth={1.5} />
            <text x={105} y={122} textAnchor="middle" fontSize={12} fontWeight={700} fill="#713f12">Fixação</text>
            <text x={105} y={138} textAnchor="middle" fontSize={10} fill="#713f12">N₂ → NH₃ / NH₄⁺</text>
            <text x={105} y={152} textAnchor="middle" fontSize={9} fill="#713f12">(Rhizobium, Azotobacter)</text>
            {/* Nitrificação */}
            <rect x={230} y={130} width={180} height={60} rx={10} fill="#dcfce7" stroke="#16a34a" strokeWidth={1.5} />
            <text x={320} y={152} textAnchor="middle" fontSize={12} fontWeight={700} fill="#14532d">Nitrificação</text>
            <text x={320} y={167} textAnchor="middle" fontSize={10} fill="#14532d">NH₄⁺ → NO₂⁻ → NO₃⁻</text>
            <text x={320} y={181} textAnchor="middle" fontSize={9} fill="#14532d">(Nitrosomonas, Nitrobacter)</text>
            {/* Assimilação pelas plantas */}
            <rect x={450} y={100} width={170} height={50} rx={10} fill="#bbf7d0" stroke="#15803d" strokeWidth={1.5} />
            <text x={535} y={122} textAnchor="middle" fontSize={12} fontWeight={700} fill="#14532d">Assimilação</text>
            <text x={535} y={138} textAnchor="middle" fontSize={10} fill="#14532d">NO₃⁻ → proteínas, DNA</text>
            <text x={535} y={152} textAnchor="middle" fontSize={9} fill="#14532d">(raízes das plantas)</text>
            {/* Amonificação */}
            <rect x={230} y={220} width={180} height={50} rx={10} fill="#fde68a" stroke="#d97706" strokeWidth={1.5} />
            <text x={320} y={242} textAnchor="middle" fontSize={12} fontWeight={700} fill="#78350f">Amonificação</text>
            <text x={320} y={257} textAnchor="middle" fontSize={10} fill="#78350f">matéria orgânica → NH₄⁺</text>
            <text x={320} y={269} textAnchor="middle" fontSize={9} fill="#78350f">(bactérias / fungos decompositores)</text>
            {/* Desnitrificação */}
            <rect x={450} y={210} width={160} height={50} rx={10} fill="#fecdd3" stroke="#dc2626" strokeWidth={1.5} />
            <text x={530} y={232} textAnchor="middle" fontSize={12} fontWeight={700} fill="#7f1d1d">Desnitrificação</text>
            <text x={530} y={248} textAnchor="middle" fontSize={10} fill="#7f1d1d">NO₃⁻ → N₂</text>
            <text x={530} y={262} textAnchor="middle" fontSize={9} fill="#7f1d1d">(Pseudomonas, Thiobacillus)</text>
            {/* Setas */}
            {/* N2 atm → Fixação */}
            <path d="M 230 30 L 105 100" fill="none" stroke="#6366f1" strokeWidth={1.8} markerEnd="url(#arrN1)" />
            {/* Fixação → Nitrificação */}
            <path d="M 190 125 L 230 155" fill="none" stroke="#ca8a04" strokeWidth={1.8} markerEnd="url(#arrN2)" />
            {/* Nitrificação → Assimilação */}
            <path d="M 410 155 L 450 130" fill="none" stroke="#16a34a" strokeWidth={1.8} markerEnd="url(#arrN3)" />
            {/* Assimilação → Amonificação (via morte) */}
            <path d="M 535 150 L 400 230" fill="none" stroke="#15803d" strokeWidth={1.5} strokeDasharray="5 3" markerEnd="url(#arrN3)" />
            {/* Amonificação → Nitrificação */}
            <path d="M 320 220 L 320 190" fill="none" stroke="#d97706" strokeWidth={1.8} markerEnd="url(#arrN2)" />
            {/* Nitrificação → Desnitrificação */}
            <path d="M 410 175 L 450 230" fill="none" stroke="#ef4444" strokeWidth={1.8} markerEnd="url(#arrN4)" />
            {/* Desnitrificação → N2 */}
            <path d="M 530 210 L 400 50" fill="none" stroke="#dc2626" strokeWidth={1.8} markerEnd="url(#arrN1)" />
            <defs>
              <marker id="arrN1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#6366f1" />
              </marker>
              <marker id="arrN2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#ca8a04" />
              </marker>
              <marker id="arrN3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#16a34a" />
              </marker>
              <marker id="arrN4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#ef4444" />
              </marker>
            </defs>
          </svg>
          <figcaption>
            Ciclo do nitrogênio: fixação (N₂ → NH₄⁺), nitrificação (NH₄⁺ →
            NO₂⁻ → NO₃⁻), assimilação pelas plantas, amonificação pelos
            decompositores e desnitrificação (NO₃⁻ → N₂), que devolve o gás à
            atmosfera.
          </figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Etapa</th>
                <th>Transformação química</th>
                <th>Organismos envolvidos</th>
                <th>Importância</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fixação</strong></td>
                <td>N₂ → NH₃ / NH₄⁺</td>
                <td>
                  <em>Rhizobium</em> (simbionte em leguminosas),{" "}
                  <em>Azotobacter</em>, <em>Nostoc</em>; raios (fixação abiótica)
                </td>
                <td>Torna o N₂ gasoso utilizável pelos seres vivos</td>
              </tr>
              <tr>
                <td><strong>Nitrificação</strong></td>
                <td>NH₄⁺ → NO₂⁻ → NO₃⁻</td>
                <td>
                  <em>Nitrosomonas</em> (NH₄⁺ → NO₂⁻) e{" "}
                  <em>Nitrobacter</em> (NO₂⁻ → NO₃⁻)
                </td>
                <td>Produz nitrato, principal forma assimilada pelas plantas</td>
              </tr>
              <tr>
                <td><strong>Assimilação</strong></td>
                <td>NO₃⁻ / NH₄⁺ → proteínas, ácidos nucleicos</td>
                <td>Plantas e outros produtores</td>
                <td>Incorpora o nitrogênio na cadeia trófica</td>
              </tr>
              <tr>
                <td><strong>Amonificação</strong></td>
                <td>Proteínas / ureia → NH₄⁺</td>
                <td>Bactérias e fungos decompositores</td>
                <td>Devolve o nitrogênio orgânico morto ao solo como amônia</td>
              </tr>
              <tr>
                <td><strong>Desnitrificação</strong></td>
                <td>NO₃⁻ → N₂ (gás)</td>
                <td>
                  <em>Pseudomonas denitrificans</em>,{" "}
                  <em>Thiobacillus denitrificans</em>
                </td>
                <td>Restitui N₂ à atmosfera; impede acúmulo excessivo de nitrato</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== SEÇÃO 7 ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Ciclo do Fósforo e do Oxigênio</span>

        <h2>7. Ciclos do Fósforo e do Oxigênio</h2>

        <p>
          O <strong>ciclo do fósforo</strong> difere dos demais por não ter fase
          gasosa significativa — o fósforo circula essencialmente entre a{" "}
          <strong>litosfera</strong> (rochas fosfáticas), o{" "}
          <strong>solo/água</strong> e os <strong>seres vivos</strong>. As rochas
          são intemperizadas, liberando íons fosfato (PO₄³⁻) que são absorvidos
          pelas raízes das plantas e, ao longo da cadeia trófica, incorporados
          no DNA, RNA, ATP e fosfolipídios das membranas.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🪨</span>
            <h3>Intemperismo das rochas</h3>
            <p>
              Chuva e microorganismos dissolvem rochas fosfáticas, liberando PO₄³⁻
              no solo e rios.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Absorção pelas plantas</h3>
            <p>
              Raízes absorvem fosfato dissolvido. O fósforo é fundamental para
              ATP, DNA, RNA e fosfolipídios.
            </p>
          </div>

          <div className="lesson-card">
            <span>🦴</span>
            <h3>Cadeia trófica</h3>
            <p>
              Animais obtêm fósforo ao comer plantas ou outros animais. Concentra-se
              em ossos e dentes.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌊</span>
            <h3>Sedimentação e eutrofização</h3>
            <p>
              Excesso de fosfato em rios causa <strong>eutrofização</strong>:
              proliferação de algas, consumo do O₂ e morte de peixes.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Ciclo do Oxigênio — intimamente ligado ao carbono</h3>
          <p>
            O O₂ atmosférico provém principalmente da{" "}
            <strong>fotossíntese oxigênica</strong> (reação de Hill, em que a
            água é oxidada). A concentração atual de ~21% de O₂ na atmosfera é
            resultado de bilhões de anos de atividade fotossintética. A
            respiração aeróbica, a combustão e a oxidação de minerais consomem
            O₂ e liberam CO₂, fechando o ciclo. Oceanos e florestas tropicais
            são os maiores produtores de O₂ do planeta.
          </p>
        </div>
      </section>

      {/* ===== SEÇÃO 8 — SÍNTESE ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese e ENEM</span>

        <h2>8. Conexões, Aplicações e Dicas para o ENEM</h2>

        <p>
          As questões do ENEM sobre este tema costumam articular múltiplos
          conceitos em um único enunciado. Os pontos mais recorrentes são:
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>⚡</span>
            <h3>Regra dos 10% aplicada</h3>
            <p>
              "Uma área produz X kcal de produtores. Quantos kg de predadores
              de topo pode sustentar?" — calcule dividindo por 10 a cada nível.
            </p>
          </div>

          <div className="lesson-card">
            <span>🔺</span>
            <h3>Pirâmide invertida</h3>
            <p>
              A banca mostra uma pirâmide de biomassa invertida e pergunta se é
              possível — sim (plâncton marinho), mas nunca para energia.
            </p>
          </div>

          <div className="lesson-card">
            <span>🌿</span>
            <h3>Liquens como pioneiros</h3>
            <p>
              Muito cobrado: "qual organismo inicia a sucessão primária?"
              Resposta: líquens (associação fungo + alga ou cianobactéria).
            </p>
          </div>

          <div className="lesson-card">
            <span>🌾</span>
            <h3>Rhizobium e fixação</h3>
            <p>
              A simbiose entre <em>Rhizobium</em> e raízes de leguminosas
              (soja, feijão) é o principal mecanismo biológico de fixação do
              N₂ em ecossistemas agrícolas.
            </p>
          </div>

          <div className="lesson-card">
            <span>♻️</span>
            <h3>Energia x Matéria</h3>
            <p>
              Pegadinha clássica: "qual se recicla, energia ou matéria?"
              Matéria se recicla; energia flui em sentido único e é dissipada.
            </p>
          </div>

          <div className="lesson-card">
            <span>🏭</span>
            <h3>Carbono e clima</h3>
            <p>
              Queima de combustíveis fósseis → CO₂ → efeito estufa → mudanças
              climáticas. Desmatamento também libera carbono estocado na madeira.
            </p>
          </div>
        </div>

        <div className="lesson-highlight">
          <h3>Resumo-relâmpago para revisar antes da prova</h3>
          <p>
            <strong>Fluxo de energia:</strong> unidirecional, ~10% por nível,
            nunca reciclada. <strong>Pirâmide de energia:</strong> jamais
            invertida. <strong>Pirâmides de número e biomassa:</strong> podem
            ser invertidas. <strong>PPL</strong> = energia disponível para
            consumidores. <strong>Sucessão primária:</strong> rocha nua →
            líquens → musgos → plantas vasculares → clímax.{" "}
            <strong>Sucessão secundária:</strong> mais rápida, parte de solo
            existente. <strong>Ciclo do C:</strong> fotossíntese fixa CO₂;
            respiração/combustão/decomposição liberam. <strong>Ciclo do N:</strong>{" "}
            fixação → nitrificação → assimilação → amonificação →
            desnitrificação. <strong>Ciclo do P:</strong> sem fase gasosa;
            excesso causa eutrofização. <strong>Ciclo do O₂:</strong> gerado
            pela fotossíntese, consumido na respiração.
          </p>
        </div>
      </section>

      {/* ===== EXERCÍCIOS ===== */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>

        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Fluxo de energia nos ecossistemas"
          statement={
            <p>
              Sobre o fluxo de energia nos ecossistemas, assinale a alternativa
              correta:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "A energia pode ser reciclada pelos decompositores e retornar aos produtores.",
            },
            {
              letter: "b",
              text: "A energia flui de forma unidirecional, sendo dissipada como calor a cada nível trófico, e não pode ser reciclada.",
              correct: true,
            },
            {
              letter: "c",
              text: "Os produtores recebem energia dos consumidores primários.",
            },
            {
              letter: "d",
              text: "Toda a energia fixada pelos produtores é transferida integralmente ao nível seguinte.",
            },
          ]}
          resolution={
            <p>
              A energia flui em sentido único: entra no ecossistema como luz
              solar, é fixada pelos produtores e progressivamente dissipada
              como calor em cada transferência metabólica. Diferentemente da
              matéria, a energia não pode ser reciclada — é uma consequência
              direta da Segunda Lei da Termodinâmica.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Pirâmides ecológicas e inversão"
          statement={
            <p>
              Em um ecossistema marinho, observa-se que a biomassa do
              fitoplâncton (produtores) é menor do que a biomassa total do
              zooplâncton (consumidores primários) em determinado momento. Qual
              das afirmações abaixo explica e contextualiza corretamente essa
              situação?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "Tal situação viola a Segunda Lei da Termodinâmica e, portanto, é impossível.",
            },
            {
              letter: "b",
              text: "Isso indica que a pirâmide de energia também está invertida nesse ecossistema.",
            },
            {
              letter: "c",
              text: "A pirâmide de biomassa pode ser invertida porque o fitoplâncton tem alta taxa de renovação (turnover), produzindo mais energia do que sua biomassa instantânea sugere.",
              correct: true,
            },
            {
              letter: "d",
              text: "O zooplâncton realiza fotossíntese complementar, o que explica o excesso de biomassa.",
            },
          ]}
          resolution={
            <p>
              A pirâmide de biomassa pode ser invertida no oceano porque o
              fitoplâncton se reproduz muito rapidamente (alta taxa de
              turnover): mesmo com biomassa instantânea baixa, produz grande
              quantidade de energia ao longo do tempo. A pirâmide de energia,
              contudo, nunca é invertida — ela sempre reflete o fluxo
              decrescente de energia entre os níveis tróficos.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. Ciclo do nitrogênio e etapas bacterianas"
          statement={
            <p>
              Um agricultor percebe que o solo de sua lavoura está empobrecido
              em nitratos após longos períodos de inundação. Um microbiologista
              explica que bactérias anaeróbias facultativas, em condições de
              baixa oxigenação, convertem nitratos em gás nitrogênio. Esse
              processo é denominado:
            </p>
          }
          options={[
            { letter: "a", text: "Nitrificação" },
            { letter: "b", text: "Amonificação" },
            { letter: "c", text: "Fixação biológica do nitrogênio" },
            {
              letter: "d",
              text: "Desnitrificação",
              correct: true,
            },
          ]}
          resolution={
            <p>
              A <strong>desnitrificação</strong> é realizada por bactérias
              como <em>Pseudomonas denitrificans</em> e{" "}
              <em>Thiobacillus denitrificans</em> em condições anaeróbias (ex.:
              solos encharcados). Elas usam o nitrato (NO₃⁻) como receptor
              final de elétrons na respiração, produzindo N₂ gasoso. Isso
              empobrece o solo em nitrogênio disponível para as plantas,
              reduzindo a fertilidade.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Sucessão ecológica após incêndio (ENEM)"
          statement={
            <p>
              Após um grande incêndio destruir uma floresta, pesquisadores
              monitoraram a área durante 30 anos. Nas primeiras semanas,
              gramíneas e arbustos dominaram. Com o tempo, arbustos maiores
              substituíram as gramíneas, e décadas depois a floresta começou a
              se reconstituir. Com base nessas observações, assinale a
              alternativa correta:
            </p>
          }
          options={[
            {
              letter: "a",
              text: "O processo descrito é uma sucessão primária, pois o incêndio destruiu toda a vida.",
            },
            {
              letter: "b",
              text: "O processo descrito é uma sucessão secundária, pois o solo e o banco de sementes persistiram após o incêndio.",
              correct: true,
            },
            {
              letter: "c",
              text: "Os líquens foram os primeiros organismos a colonizar a área queimada, como em qualquer tipo de sucessão.",
            },
            {
              letter: "d",
              text: "A comunidade clímax é atingida imediatamente após o desaparecimento das espécies pioneiras.",
            },
          ]}
          resolution={
            <p>
              Como o incêndio não destruiu o solo nem o banco de sementes, o
              processo é uma <strong>sucessão secundária</strong> — mais rápida
              que a primária. As gramíneas e arbustos pioneiros dessa
              recuperação não são líquens (típicos de sucessão primária em
              rocha nua), mas espécies oportunistas que aproveitam o solo já
              existente. A comunidade clímax é atingida apenas após várias
              décadas de substituições graduais.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Regra dos 10% e segurança alimentar (ENEM)"
          statement={
            <p>
              Em uma região semiárida, a produção agrícola anual gera 500 000 kcal
              de energia vegetal disponível. Considerando a regra dos 10% de
              transferência de energia entre níveis tróficos, quantas quilocalorias
              estariam disponíveis para seres humanos que se alimentassem
              exclusivamente de carne bovina (consumidores secundários), em
              comparação com seres humanos que se alimentassem diretamente dos
              vegetais?
            </p>
          }
          options={[
            {
              letter: "a",
              text: "500 000 kcal para quem come vegetal; 50 000 kcal para quem come carne",
            },
            {
              letter: "b",
              text: "500 000 kcal para quem come vegetal; 5 000 kcal para quem come carne",
              correct: true,
            },
            {
              letter: "c",
              text: "50 000 kcal para quem come vegetal; 5 000 kcal para quem come carne",
            },
            {
              letter: "d",
              text: "500 000 kcal para ambos, pois os bois convertem toda a energia em carne",
            },
          ]}
          resolution={
            <p>
              Quem come diretamente os vegetais tem acesso a{" "}
              <strong>500 000 kcal</strong> (1° nível trófico). O boi é um
              consumidor primário (2° nível) e retém apenas ~10% da energia
              vegetal: 500 000 × 10% = <strong>50 000 kcal</strong>. Os seres
              humanos que comem o boi são consumidores secundários (3° nível) e
              retêm apenas 10% disso: 50 000 × 10% ={" "}
              <strong>5 000 kcal</strong>. Isso demonstra por que dietas
              vegetarianas são mais eficientes energeticamente e sustentáveis —
              100 vezes mais energia disponível do que na cadeia com boi.
            </p>
          }
        />
      </section>
    </article>
  );
}
