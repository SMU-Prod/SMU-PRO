"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap14Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">História • Capítulo 14</span>
          <h1>Feudalismo</h1>
          <p>
            O feudalismo foi o sistema que organizou a vida política, econômica e social da Europa
            Ocidental entre os séculos IX e XIII, embora seus elementos constitutivos tenham surgido
            ainda no Baixo Império Romano e persistido, em formas modificadas, até o século XV em
            algumas regiões. Fundado sobre relações pessoais de dependência — entre suseranos e
            vassalos, entre senhores e servos da gleba —, o feudalismo substituiu o Estado
            centralizado romano por uma rede descentralizada de poderes locais articulados por
            contratos de fidelidade, concessões de terras e obrigações militares. Compreender o
            feudalismo é essencial para o ENEM não apenas como conteúdo histórico, mas como modelo
            de análise de relações de poder, trabalho e propriedade que ecoam em debates contemporâneos.
          </p>
        </div>
      </section>

      {/* SEÇÃO 1 */}
      <section className="lesson-section">
        <span className="section-kicker">Origens</span>
        <h2>1. Antecedentes Romanos e Germânicos do Feudalismo</h2>
        <p>
          O feudalismo não emergiu do nada: foi a síntese de duas tradições pré-existentes. Da
          herança romana, o elemento mais importante é o colonato: no Baixo Império (séculos III–V),
          a crise econômica e a escassez de mão de obra escrava levaram grandes proprietários
          (<em>latifundiários</em>) a ceder parcelas de terra a trabalhadores livres empobrecidos
          (<em>colonos</em>) em troca de parte da produção e de serviços pessoais. Com o tempo, os
          colonos foram legalmente vinculados à terra — não eram escravos, pois tinham família e
          direito à vida, mas não podiam deixar o latifúndio sem permissão do proprietário,
          antecipando a condição servil medieval.
        </p>
        <p>
          Da herança germânica, o elemento central é o <em>comitatus</em> descrito pelo historiador
          romano Tácito no século I d.C.: o grupo de guerreiros que se organizava em torno de um
          chefe (dux ou rex), jurando-lhe fidelidade pessoal em troca de proteção, armas, festas e
          participação no butim de guerra. Essa relação de fidelidade pessoal e reciprocidade entre
          chefe e guerreiros forma o núcleo das relações vassálicas medievais. Quando os reinos
          germânicos se instalaram sobre o território romano e precisaram organizar a defesa de
          vastas extensões de terra sem recursos monetários, combinaram o colonato romano (terra em
          troca de trabalho/serviço) com o comitatus germânico (fidelidade em troca de proteção),
          gerando o sistema feudal.
        </p>

        <div className="lesson-highlight">
          <h3>Definição de Feudalismo</h3>
          <p>
            O historiador Marc Bloch, em <em>A Sociedade Feudal</em> (1939), definiu o feudalismo
            por cinco características: (1) fragmentação do poder político; (2) economia agrária de
            subsistência; (3) relações pessoais de dependência substituindo o direito público;
            (4) classe guerreira especializada como grupo dominante; e (5) persistência da comunidade
            familiar como unidade básica. Essa definição permanece referência nos estudos medievais.
          </p>
        </div>
      </section>

      {/* SEÇÃO 2 */}
      <section className="lesson-section">
        <span className="section-kicker">Hierarquia</span>
        <h2>2. A Pirâmide Feudal: Estrutura Social e Política</h2>
        <p>
          A organização feudal é frequentemente representada como uma pirâmide hierárquica, mas é
          importante ressaltar que essa estrutura era muito menos rígida e ordenada do que o modelo
          sugere. Na prática, um mesmo nobre podia ser vassalo de vários suseranos simultaneamente
          (homenagem ligia), as obrigações se sobrepunham e conflitavam, e o rei muitas vezes tinha
          menos poder efetivo que seus grandes suseranos. Ainda assim, o modelo piramidal é útil
          para compreender a lógica das relações feudais.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 260" width="720" height="260" aria-label="Pirâmide feudal mostrando rei, alta nobreza, baixa nobreza, clero e servos">
            <rect x="0" y="0" width="720" height="260" fill="#faf8f0" />

            {/* Pirâmide */}
            {/* Nível 1 - Rei (topo) */}
            <polygon points="360,20 460,80 260,80" fill="#f4c84a" stroke="#8a6a00" strokeWidth="1.5" />
            <text x="360" y="58" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#3a2800">REI</text>

            {/* Nível 2 - Alta Nobreza */}
            <polygon points="260,80 460,80 520,140 200,140" fill="#f4a84a" stroke="#8a4a00" strokeWidth="1.5" />
            <text x="360" y="116" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#3a1000">ALTA NOBREZA</text>
            <text x="360" y="132" textAnchor="middle" fontSize="10" fill="#3a1000">(Duques, Condes, Marqueses)</text>

            {/* Nível 3 - Baixa Nobreza / Cavaleiros */}
            <polygon points="200,140 520,140 570,200 150,200" fill="#f4d89a" stroke="#8a6a00" strokeWidth="1.5" />
            <text x="360" y="168" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#3a2000">BAIXA NOBREZA / CAVALEIROS</text>
            <text x="360" y="184" textAnchor="middle" fontSize="10" fill="#3a2000">(Barões, Cavaleiros, Viscondes)</text>

            {/* Nível 4 - Servos/Vilões */}
            <polygon points="150,200 570,200 620,250 100,250" fill="#d4b880" stroke="#6a4a00" strokeWidth="1.5" />
            <text x="360" y="230" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2a1000">SERVOS DA GLEBA / VILÕES</text>

            {/* Clero (lateral) */}
            <rect x="600" y="60" width="110" height="160" fill="#a8c8f8" rx="8" stroke="#2060a0" strokeWidth="1.5" />
            <text x="655" y="110" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#001a5a">CLERO</text>
            <text x="655" y="128" textAnchor="middle" fontSize="9" fill="#001a5a">Alta Igreja:</text>
            <text x="655" y="142" textAnchor="middle" fontSize="9" fill="#001a5a">Bispos, Abades</text>
            <text x="655" y="162" textAnchor="middle" fontSize="9" fill="#001a5a">Baixo Clero:</text>
            <text x="655" y="176" textAnchor="middle" fontSize="9" fill="#001a5a">Padres, Monges</text>
            <line x1="600" y1="140" x2="570" y2="140" stroke="#2060a0" strokeWidth="1.5" strokeDasharray="4,3" />

            <text x="360" y="12" textAnchor="middle" fontSize="11" fill="#555" fontStyle="italic">Hierarquia Feudal — modelo esquemático</text>
          </svg>
          <figcaption>Pirâmide feudal esquemática. O clero ocupava posição transversal, com membros em todos os níveis sociais. Na prática, as relações eram mais complexas e sobrepostas do que o modelo sugere.</figcaption>
        </figure>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Estrato Social</th>
                <th>Composição</th>
                <th>Função / Papel</th>
                <th>Relação com a Terra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rei</td>
                <td>Monarca</td>
                <td>Autoridade simbólica máxima; guerras e paz</td>
                <td>Dominium eminens sobre todo o território</td>
              </tr>
              <tr>
                <td>Alta Nobreza</td>
                <td>Duques, Condes, Marqueses</td>
                <td>Administração militar e judicial de grandes feudos</td>
                <td>Detentores de feudos concedidos pelo rei</td>
              </tr>
              <tr>
                <td>Baixa Nobreza</td>
                <td>Barões, Cavaleiros, Viscondes</td>
                <td>Serviço militar; administração local</td>
                <td>Sub-feudos concedidos pela alta nobreza</td>
              </tr>
              <tr>
                <td>Clero</td>
                <td>Papa, Bispos, Abades, Padres, Monges</td>
                <td>Funções espirituais; preservação cultural; administração</td>
                <td>Vasta propriedade territorial (até 1/3 da Europa)</td>
              </tr>
              <tr>
                <td>Servos da Gleba</td>
                <td>Servos, Vilões, Colonos</td>
                <td>Trabalho agrícola; produção de excedente</td>
                <td>Nenhuma propriedade; trabalham a terra do senhor</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEÇÃO 3 */}
      <section className="lesson-section">
        <span className="section-kicker">Contratos Feudais</span>
        <h2>3. Suserania e Vassalagem: os Contratos Feudais</h2>
        <p>
          A espinha dorsal do feudalismo era o contrato vassálico, estabelecido por duas cerimônias
          solenes. A <em>homenagem</em> consistia no vassalo ajoelhar-se diante do suserano, colocar
          suas mãos entre as do senhor e declarar verbalmente sua fidelidade (<em>foi</em>). A
          <em>investidura</em> era o ato pelo qual o suserano entregava ao vassalo um símbolo
          tangível do feudo concedido — geralmente um torrão de terra, um ramo ou uma bandeira —,
          materializando a concessão territorial. Juntas, essas cerimônias criavam um vínculo
          bilateral de obrigações.
        </p>
        <p>
          O vassalo era obrigado a prestar auxílio militar (<em>auxilium</em>) — servir pessoalmente
          em campanha por certo número de dias ao ano —, conselho (<em>consilium</em>) — participar
          das assembleias do senhor —, e certas contribuições financeiras especiais
          (<em>aides</em>): ao armar o filho cavaleiro, ao casar a filha, ao resgatar o suserano
          capturado. O suserano, por sua vez, devia proteção, justiça e a manutenção da concessão
          territorial. A quebra das obrigações por qualquer das partes dissolvia o contrato — mas
          na prática os litígios eram frequentes e complexos.
        </p>

        <figure className="lesson-figure">
          <svg viewBox="0 0 720 170" width="720" height="170" aria-label="Diagrama das relações de suserania e vassalagem no feudalismo">
            <rect x="0" y="0" width="720" height="170" fill="#f0f4f8" />

            {/* Suserano */}
            <rect x="60" y="50" width="160" height="70" rx="10" fill="#f4c84a" stroke="#8a6a00" strokeWidth="2" />
            <text x="140" y="82" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#3a2800">SUSERANO</text>
            <text x="140" y="100" textAnchor="middle" fontSize="10" fill="#3a2800">(Senhor Feudal)</text>

            {/* Vassalo */}
            <rect x="500" y="50" width="160" height="70" rx="10" fill="#a8d8a8" stroke="#1a4a1a" strokeWidth="2" />
            <text x="580" y="82" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a3a1a">VASSALO</text>
            <text x="580" y="100" textAnchor="middle" fontSize="10" fill="#1a3a1a">(Nobre subordinado)</text>

            {/* Seta suserano → vassalo: dá feudo + proteção */}
            <line x1="220" y1="75" x2="500" y2="75" stroke="#c0392b" strokeWidth="2" />
            <polygon points="500,70 515,75 500,80" fill="#c0392b" />
            <text x="360" y="68" textAnchor="middle" fontSize="10" fill="#c0392b" fontWeight="bold">Concede feudo + proteção + justiça</text>

            {/* Seta vassalo → suserano: dá auxilium + consilium */}
            <line x1="500" y1="100" x2="220" y2="100" stroke="#2980b9" strokeWidth="2" />
            <polygon points="220,95 205,100 220,105" fill="#2980b9" />
            <text x="360" y="118" textAnchor="middle" fontSize="10" fill="#2980b9" fontWeight="bold">Presta auxilium (militar) + consilium (conselho) + aides</text>

            {/* Cerimônias */}
            <rect x="240" y="130" width="240" height="30" rx="6" fill="#e8e8f8" stroke="#6060a0" strokeWidth="1" />
            <text x="360" y="149" textAnchor="middle" fontSize="10" fill="#2a2a6a">Cerimônias: Homenagem + Investidura</text>

            <text x="360" y="20" textAnchor="middle" fontSize="11" fill="#555" fontStyle="italic">Relações Feudais de Suserania e Vassalagem</text>
          </svg>
          <figcaption>Diagrama das obrigações recíprocas entre suserano e vassalo no sistema feudal. O contrato era bilateral: a quebra das obrigações por qualquer parte dissolvia o vínculo.</figcaption>
        </figure>
      </section>

      {/* SEÇÃO 4 */}
      <section className="lesson-section">
        <span className="section-kicker">Os Servos</span>
        <h2>4. Os Servos da Gleba: Trabalho, Obrigações e Diferença em Relação à Escravidão</h2>
        <p>
          A base da pirâmide feudal era formada pelos servos da gleba — a esmagadora maioria da
          população medieval europeia. É fundamental distinguir a servidão da escravidão: o escravo
          é propriedade de seu dono, sem personalidade jurídica própria, podendo ser vendido,
          comprado ou morto; o servo da gleba é juridicamente livre, tem direito à família, ao
          batismo, a certos costumes tradicionais protegidos e não pode ser morto pelo senhor. No
          entanto, o servo está preso à terra: não pode deixar o feudo sem autorização do senhor,
          deve pagar tributos em trabalho, em espécie e às vezes em dinheiro, e está sujeito à
          jurisdição senhorial.
        </p>
        <p>
          As obrigações dos servos eram pesadas: a <em>talha</em> (parte da produção entregue ao
          senhor), a <em>corveia</em> (dias de trabalho obrigatório nas terras do senhor), a
          <em>banalidade</em> (pagamento pelo uso do moinho, do forno e do lagar do senhor), o
          <em>morgadio</em> (impostos sobre herança) e a <em>capitação</em> (imposto por pessoa).
          Em troca, o servo recebia proteção militar, acesso à terra cultivável, à Igreja e à
          comunidade da aldeia. Essa relação era desigual, mas possuía uma lógica de reciprocidade
          que a distingue da escravidão pura.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Escravo (Antiguidade)</th>
                <th>Servo da Gleba (Medieval)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Status jurídico</td>
                <td>Coisa (res), propriedade do dono</td>
                <td>Pessoa livre, porém vinculada à terra</td>
              </tr>
              <tr>
                <td>Mobilidade</td>
                <td>Nenhuma (vendido como mercadoria)</td>
                <td>Preso ao feudo; pode se mover com autorização</td>
              </tr>
              <tr>
                <td>Família</td>
                <td>Sem direito à família reconhecida</td>
                <td>Tem família; casamento reconhecido pela Igreja</td>
              </tr>
              <tr>
                <td>Integridade física</td>
                <td>Senhor pode matar sem punição</td>
                <td>Proteção relativa; senhor não pode matar</td>
              </tr>
              <tr>
                <td>Obrigações</td>
                <td>Trabalho total sem compensação</td>
                <td>Talha, corveia, banalidade em troca de acesso à terra</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEÇÃO 5 */}
      <section className="lesson-section">
        <span className="section-kicker">Economia</span>
        <h2>5. A Economia Feudal: Vila Autossuficiente, Feiras e Proto-Capitalismo</h2>
        <p>
          A economia feudal era essencialmente agrária e de subsistência. A unidade produtiva
          fundamental era a <em>villa</em> ou manor (feudo agrícola), uma aldeia com sua área
          cultivável dividida em três campos rotativos (sistema de rotação trienal introduzido nos
          séculos VIII–IX), pasto comunal, bosques para lenha e caça, moinho, forno e Igreja. O
          objetivo principal era produzir o suficiente para o consumo local, pagar os tributos ao
          senhor e à Igreja (dízimo), e acumular uma pequena reserva para sobreviver ao inverno ou
          a uma colheita ruim.
        </p>
        <p>
          As trocas eram predominantemente em espécie (em produtos, não em moeda), pois o uso do
          dinheiro havia encolhido drasticamente com o colapso do comércio romano. No entanto, mesmo
          na Alta Idade Média, não houve ruptura total com o comércio: feiras regionais e rotas de
          comércio de longa distância (especialmente em sal, peles e certos têxteis) persistiram.
          A partir do século XI, o crescimento demográfico, a abertura de novas terras (arroteamento)
          e a segurança relativa gerada pelo feudalismo permitiram um excedente crescente que
          alimentou a reativação do comércio e o surgimento das cidades medievais (<em>burgos</em>).
        </p>

        <div className="lesson-highlight">
          <h3>O Sistema de Rotação Trienal</h3>
          <p>
            A introdução do arado pesado de ferro e do sistema de três campos (trienal) na Alta Idade
            Média foi uma das grandes revoluções agrícolas medievais: um campo com cereais de inverno
            (trigo, centeio), um com cereais de primavera (aveia, cevada, leguminosas) e um em pousio
            (descanso). Isso aumentou a produtividade em cerca de 30% em relação ao sistema bienal
            romano, sustentando o crescimento demográfico do século XI.
          </p>
        </div>
      </section>

      {/* SEÇÃO 6 */}
      <section className="lesson-section">
        <span className="section-kicker">O Feudo</span>
        <h2>6. Organização do Feudo: Espaço, Produção e Poder</h2>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Espaço do Feudo</th>
                <th>Função</th>
                <th>Quem Controla</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Castelo / Mansão senhorial</td>
                <td>Residência do senhor; defesa militar; sede do poder</td>
                <td>Senhor feudal</td>
              </tr>
              <tr>
                <td>Igreja paroquial</td>
                <td>Funções religiosas; registro de nascimentos e óbitos; educação básica</td>
                <td>Pároco (clero)</td>
              </tr>
              <tr>
                <td>Terras do senhor (domínio)</td>
                <td>Cultivadas em corveia pelos servos; produção do senhor</td>
                <td>Senhor feudal</td>
              </tr>
              <tr>
                <td>Terras dos servos (manso servil)</td>
                <td>Cultivadas pelo servo para sustento familiar e pagamento da talha</td>
                <td>Servo (uso, não propriedade)</td>
              </tr>
              <tr>
                <td>Campos comunais (bosques, pastos)</td>
                <td>Uso coletivo para pastagem, lenha, caça menor</td>
                <td>Comunidade aldeã (uso comunal)</td>
              </tr>
              <tr>
                <td>Moinho, forno, lagar</td>
                <td>Processamento de grãos, pão e vinho</td>
                <td>Senhor (cobrança de banalidade)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEÇÃO 7 */}
      <section className="lesson-section">
        <span className="section-kicker">Crise</span>
        <h2>7. A Crise do Feudalismo: Causas e Consequências</h2>
        <p>
          A partir do século XII, e de forma acelerada nos séculos XIV e XV, o feudalismo entrou em
          crise por múltiplas razões interligadas. O crescimento demográfico e o excedente agrícola
          alimentaram o renascimento urbano e comercial: cidades como Florença, Veneza, Bruges e
          Paris cresceram rapidamente, atraindo populações rurais. Os burgos — cidades mercantis —
          eram frequentemente espaços de maior liberdade: o adágio medieval "o ar da cidade liberta"
          (<em>Stadtluft macht frei</em>) referia-se ao costume de que um servo que vivesse em
          cidade por um ano e um dia tornava-se livre.
        </p>
        <p>
          A Peste Negra (1347–1353) matou entre 1/3 e 1/2 da população europeia, criando escassez
          de mão de obra que fortaleceu a posição de barganha dos camponeses sobreviventes — que
          passaram a exigir salários e melhores condições. As revoltas camponesas multiplicaram-se
          (Jacquerie na França, 1358; revolta de Wat Tyler na Inglaterra, 1381). A Guerra dos Cem
          Anos (1337–1453) entre França e Inglaterra arruinou a nobreza feudal e fortaleceu as
          monarquias centralizadas. O crescimento do comércio tornou as economias de subsistência
          anacrônicas. Em suma, o feudalismo não "caiu" de uma vez — transformou-se gradualmente no
          capitalismo mercantil e nas monarquias absolutas dos séculos XVI e XVII.
        </p>
      </section>

      {/* SEÇÃO 8 */}
      <section className="lesson-section">
        <span className="section-kicker">Igreja no Feudalismo</span>
        <h2>8. O Clero na Estrutura Feudal</h2>
        <p>
          A Igreja Católica não estava à margem do feudalismo — estava profundamente integrada a ele.
          Bispos e abades possuíam vastos feudos e eram suseranos de cavaleiros e senhores menores;
          participavam de guerras e de assembleias nobiliárquicas. O dízimo (10% da produção agrícola)
          era obrigação religiosa e econômica universal. Ao mesmo tempo, os mosteiros eram centros
          de cultura, agricultura experimental, enfermagem e acolhimento de peregrinos — funções
          sociais que o poder laico não desempenhava.
        </p>
        <p>
          A <em>Querela das Investiduras</em> (1076–1122) foi o principal conflito entre o papado e o
          poder laico no período feudal: tratava de quem tinha o direito de nomear bispos e abades
          — o papa ou os reis. A solução foi a Concordata de Worms (1122), que distinguiu investidura
          espiritual (anel e cajado, pelo papa) de investidura temporal (cetro, pelo rei), mas a
          tensão persistiu.
        </p>
      </section>

      {/* SEÇÃO 9 */}
      <section className="lesson-section">
        <span className="section-kicker">Perspectivas</span>
        <h2>9. Feudalismo e Direitos Humanos: Uma Perspectiva Crítica</h2>
        <p>
          Sob a perspectiva dos direitos humanos, o feudalismo representa um sistema profundamente
          desigual: os servos não tinham liberdade de movimento, não escolhiam seus senhores, não
          podiam escapar do trabalho compulsório sem punição e viviam sob uma justiça senhorial
          arbitrária. As mulheres nobres, embora gozassem de certos privilégios de classe, eram
          objetos de alianças matrimoniais políticas; as camponesas acumulavam trabalho doméstico e
          agrícola com condições ainda mais precárias.
        </p>
        <p>
          O ENEM frequentemente apresenta documentos medievais (cartas de manumissão, foros
          municipais, registros de corveia) pedindo ao estudante que analise criticamente as relações
          de poder implícitas. É importante reconhecer tanto a lógica interna do sistema — que
          oferecia uma forma de segurança em um ambiente de alta insegurança — quanto suas assimetrias
          estruturais de poder, trabalho e liberdade.
        </p>
      </section>

      {/* SEÇÃO 10 */}
      <section className="lesson-section">
        <span className="section-kicker">Revisão</span>
        <h2>10. Síntese: Feudalismo em Conceitos</h2>

        <div className="lesson-grid">
          <div className="lesson-card">
            <h3>Comitatus germânico</h3>
            <p>Grupo de guerreiros ligados a um chefe por fidelidade pessoal — raiz das relações vassálicas medievais.</p>
          </div>
          <div className="lesson-card">
            <h3>Colonato romano</h3>
            <p>Camponeses livres presos à terra no Baixo Império — antecedente direto da servidão medieval.</p>
          </div>
          <div className="lesson-card">
            <h3>Feudo (beneficium)</h3>
            <p>Terra concedida pelo suserano ao vassalo em troca de serviços militares e fidelidade pessoal.</p>
          </div>
          <div className="lesson-card">
            <h3>Corveia</h3>
            <p>Trabalho obrigatório gratuito que o servo prestava nas terras do senhor, geralmente 2 a 3 dias por semana.</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 11 — Exercícios */}
      <section className="lesson-section">
        <span className="section-kicker">Exercícios Comentados</span>
        <h2>Questões — 3 Técnicas e 2 Contextualizadas</h2>

        <Exercise
          level="Básico"
          title="1. Origens do feudalismo"
          statement={
            <p>
              O feudalismo medieval foi resultado da combinação de dois elementos históricos
              anteriores. Identifique corretamente esses dois antecedentes:
            </p>
          }
          options={[
            { letter: "a", text: "O escravismo grego e o imperialismo persa." },
            { letter: "b", text: "O colonato romano (camponeses presos à terra) e o comitatus germânico (fidelidade pessoal ao chefe guerreiro).", correct: true },
            { letter: "c", text: "O monacato cristão e a cultura islâmica do século VII." },
            { letter: "d", text: "O comércio fenício e as legiões romanas." },
            { letter: "e", text: "O urbanismo romano e as migrações celtas." },
          ]}
          resolution={
            <p>
              O feudalismo surgiu da síntese entre o colonato romano (base econômica: terra em troca
              de trabalho/serviço, gerando o servo da gleba) e o comitatus germânico (base política:
              fidelidade pessoal entre guerreiros e chefe, gerando a relação suserano-vassalo). Essa
              combinação foi facilitada pelo contexto das invasões e da fragmentação política após a
              queda de Roma. A alternativa correta é B.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Servo da gleba versus escravo"
          statement={
            <p>
              Uma questão frequente no ENEM é a distinção entre servidão medieval e escravidão
              antiga. Assinale a afirmação CORRETA sobre essa distinção:
            </p>
          }
          options={[
            { letter: "a", text: "Servo e escravo são sinônimos; ambos eram propriedades de seus senhores sem qualquer direito." },
            { letter: "b", text: "O escravo tinha direito à família e à terra, ao contrário do servo que não possuía nada." },
            {
              letter: "c",
              text: "O servo da gleba tinha reconhecimento jurídico como pessoa, direito à família e relativa proteção à vida, diferentemente do escravo, que era juridicamente uma coisa (res) propriedade do dono.",
              correct: true,
            },
            { letter: "d", text: "O servo medieval tinha liberdade de movimento irrestrita, podendo deixar o feudo quando desejasse." },
            { letter: "e", text: "A servidão medieval foi abolida pelo papa Gregório I ainda no século VI." },
          ]}
          resolution={
            <p>
              A distinção entre servidão e escravidão é fundamental: o escravo antigo era juridicamente
              uma coisa (res), sem personalidade legal, família reconhecida ou proteção à vida. O servo
              medieval, embora preso à terra e sujeito a pesadas obrigações (corveia, talha, banalidade),
              era juridicamente uma pessoa, tinha família reconhecida pela Igreja e não podia ser morto
              pelo senhor. Essa distinção é central para a análise das relações de trabalho compulsório
              na história. Alternativa C.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. A crise do feudalismo — causas múltiplas"
          statement={
            <p>
              A crise do sistema feudal (séculos XIV–XV) foi resultado de causas interligadas. Analise
              as afirmações abaixo e identifique a que MELHOR sintetiza o processo:
            </p>
          }
          options={[
            { letter: "a", text: "A crise do feudalismo foi causada exclusivamente pela Peste Negra, que eliminou a mão de obra servil." },
            { letter: "b", text: "O feudalismo entrou em crise apenas por razões militares, com a substituição da cavalaria feudal pela infantaria mercenária." },
            {
              letter: "c",
              text: "A crise do feudalismo resultou da convergência de fatores: a Peste Negra (escassez de mão de obra e revoltas camponesas), o renascimento comercial e urbano (surgimento da burguesia), e a centralização monárquica (enfraquecimento da nobreza feudal).",
              correct: true,
            },
            { letter: "d", text: "O feudalismo entrou em crise com a conversão da Europa ao Islamismo nos séculos XIII–XIV." },
            { letter: "e", text: "A crise do feudalismo foi resultado direto da Reforma Protestante do século XVI." },
          ]}
          resolution={
            <p>
              A crise do feudalismo foi multicausal: a Peste Negra (1347–1353) matou 1/3 a 1/2 da
              população, forçando senhores a pagar salários a trabalhadores escassos e gerando
              revoltas camponesas; o renascimento comercial e urbano criou uma burguesia cujo poder
              econômico dependia do mercado, não da terra; as monarquias centralizadas utilizaram
              esse capital mercantil para pagar exércitos profissionais, dispensando a cavalaria
              feudal. Nenhum fator isolado explica a crise — é sua interação que gera a transição
              para a Modernidade. Alternativa C.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Documento histórico: carta de manumissão"
          statement={
            <div>
              <p>
                <em>
                  "Eu, Guilherme, senhor de Montfort, liberto meu servo João, filho de Pedro, nascido
                  em minha terra, de todos os vínculos de servidão, para que possa ir e vir livremente,
                  contrair matrimônio fora de minha terra e dispor de seus bens como lhe aprouver,
                  desde que pague anualmente a quantia de dois soldos em ouro."
                </em>
              </p>
              <p><em>(Carta de manumissão fictícia, baseada em modelos documentais do século XII)</em></p>
              <p>Com base no documento, analise o que revela sobre a condição servil medieval:</p>
            </div>
          }
          options={[
            { letter: "a", text: "O documento prova que os servos medievais eram livres e não necessitavam de autorização para se mover." },
            {
              letter: "b",
              text: "A carta de manumissão revela que a liberdade do servo dependia da vontade do senhor e podia ser concedida mediante pagamento, indicando que a servidão era uma condição juridicamente construída e passível de negociação, não um estado natural.",
              correct: true,
            },
            { letter: "c", text: "O documento demonstra que a Igreja aboliu a servidão no século XII por meio de cartas papais." },
            { letter: "d", text: "A manumissão era proibida pela lei feudal, sendo este documento uma falsificação histórica." },
            { letter: "e", text: "O texto prova que todos os servos medievais se tornaram livres após pagar dois soldos de ouro ao senhor." },
          ]}
          resolution={
            <p>
              Documentos de manumissão (libertação de servos) são fontes primárias medievais
              frequentemente utilizadas no ENEM. Eles revelam que a servidão era uma condição
              juridicamente construída — o servo não era livre por definição, mas podia negociar
              sua liberdade, comprá-la ou tê-la concedida pelo senhor. Isso mostra a complexidade
              das relações feudais: não eram pura coerção, mas uma rede de obrigações e negociações
              dentro de um quadro profundamente desigual. A alternativa B é a mais precisa.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Feudalismo e direitos humanos contemporâneos"
          statement={
            <p>
              Organizações de direitos humanos documentam formas contemporâneas de trabalho análogo
              à escravidão em que trabalhadores são presos a terras ou dívidas sem liberdade de
              movimento. Comparando com a servidão medieval, é correto afirmar que:
            </p>
          }
          options={[
            { letter: "a", text: "A servidão medieval e o trabalho análogo à escravidão contemporâneo são fenômenos idênticos, sem nenhuma distinção." },
            {
              letter: "b",
              text: "Ambas as situações envolvem restrição da liberdade de movimento e trabalho compulsório, mas se diferenciam no contexto histórico, nas justificativas ideológicas (religião versus lucro) e no status jurídico — enquanto a servidão medieval era legalmente reconhecida, o trabalho forçado contemporâneo é proibido pelo direito internacional.",
              correct: true,
            },
            { letter: "c", text: "O trabalho análogo à escravidão contemporâneo é menos grave que a servidão medieval, pois os trabalhadores recebem alguma remuneração." },
            { letter: "d", text: "A servidão medieval foi uma forma de proteção social que não tem paralelos negativos no mundo contemporâneo." },
            { letter: "e", text: "Os direitos humanos não se aplicam à análise de sistemas históricos como o feudalismo." },
          ]}
          resolution={
            <p>
              Esta questão articula história medieval com direitos humanos contemporâneos, conexão
              frequente no ENEM. Ambos os fenômenos restringem a liberdade e impõem trabalho
              compulsório, mas diferem em contexto (economia agrária de subsistência versus
              capitalismo global), justificativa (ordem divina e proteção mútua versus lucro
              ilegal) e status jurídico (a servidão era legalmente regulada no medievo; o trabalho
              forçado é proibido pela Convenção 29 da OIT e pela legislação brasileira — art. 149
              do Código Penal). A alternativa B equilibra a comparação com as distinções necessárias.
            </p>
          }
        />
      </section>
    </article>
  );
}
