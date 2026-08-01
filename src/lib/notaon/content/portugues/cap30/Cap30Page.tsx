"use client";
import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";
export default function Cap30Page() {
  return (
    <article className="lesson-landing">
      <section className="lesson-hero">
        <div>
          <span className="lesson-badge">Português • Capítulo 30</span>
          <h1>Arcadismo</h1>
          <p>
            Em meados do século XVIII, enquanto as minas de Minas Gerais jorrava ouro e diamantes, um grupo de poetas formados em Coimbra e Montpellier decidiu que era hora de abandonar o excesso barroco e voltar à simplicidade — à pureza da vida campestre, ao equilíbrio da razão, à serenidade do bucolismo clássico. Cláudio Manuel da Costa adotou o pseudônimo pastoril de Glauceste Satúrnio; Tomás Antônio Gonzaga cantou para Marília os prazeres do campo e do amor simples; Basílio da Gama escreveu um épico sem deuses greco-romanos, com heróis indígenas. Sob a sombra das arcadas renascentistas que deram nome ao movimento, esses poetas mineiros também conspiravam: a Inconfidência Mineira de 1789 teve na poesia árcade seu canto e seu epitáfio.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 1 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Contexto Histórico</span>
        <h2>1. O Século XVIII: Iluminismo, Razão e Reformas</h2>

        <p>
          O Arcadismo (ou Neoclassicismo ou Setecentismo) é o movimento literário do século XVIII, diretamente vinculado ao <strong>Iluminismo</strong> — a grande corrente filosófica europeia que colocou a <strong>razão</strong> como instrumento supremo de compreensão do mundo e de reforma da sociedade. Locke, Voltaire, Rousseau, Montesquieu e Diderot questionavam a autoridade absoluta dos reis e da Igreja; propunham contratos sociais, separação de poderes e tolerância religiosa. A arte arcadiana é a expressão estética dessa mentalidade: clara, racional, equilibrada — o oposto do excesso e da angústia barroca.
        </p>
        <p>
          Em Portugal, o Iluminismo chegou com força durante o reinado de D. José I (1750–1777) e o governo do Marquês de Pombal, que reformou a universidade de Coimbra, expulsou os jesuítas do reino e modernizou a administração colonial. No Brasil, o principal cenário foi Minas Gerais: o ciclo do ouro e dos diamantes havia gerado uma elite colonial culta e ilustrada — filhos de famílias ricas que estudavam em Coimbra e voltavam imbuídos dos ideais iluministas. Essa elite formou as <strong>Academias</strong> literárias e políticas que foram o berço do Arcadismo brasileiro.
        </p>

        <div className="lesson-highlight">
          <h3>O que é o Arcadismo?</h3>
          <p>
            Arcadismo (também chamado Neoclassicismo ou Setecentismo) é o movimento literário do século XVIII que reage aos excessos barrocos por meio da valorização da <strong>razão, simplicidade, clareza e equilíbrio</strong>. Inspira-se nos poetas pastorais greco-romanos (Virgílio nas <em>Bucólicas</em>, Horácio nas <em>Odes</em>) e adota como ideal a vida simples e harmoniosa no campo — o <em>bucolismo</em>. O nome vem de Arcádia, região grega mitológica associada à vida pastoral idílica, e da <em>Accademia degli Arcadi</em>, fundada em Roma em 1690.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 2 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Características</span>
        <h2>2. Os Pilares Estéticos do Arcadismo</h2>

        <p>
          O Arcadismo tem um conjunto de características facilmente identificáveis que o distinguem tanto do Barroco (que ele rejeita) quanto do Romantismo (que virá depois). O ENEM frequentemente apresenta textos árcades e pede que o candidato identifique essas características — especialmente os lemas latinos e o bucolismo.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Explicação</th>
                <th>Lema / Expressão-chave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bucolismo / Pastoralismo</td>
                <td>Idealização da vida simples no campo; pastores fictícios; natureza harmoniosa</td>
                <td><em>Locus amoenus</em> (lugar agradável)</td>
              </tr>
              <tr>
                <td>Fugir da cidade</td>
                <td>A cidade é vista como lugar de corrupção, vícios e artificialidade</td>
                <td><em>Fugere urbem</em> (fugir da cidade)</td>
              </tr>
              <tr>
                <td>Aproveitar o momento</td>
                <td>A vida é breve; deve-se aproveitar os prazeres simples do presente</td>
                <td><em>Carpe diem</em> (aproveite o dia)</td>
              </tr>
              <tr>
                <td>Equilíbrio e mediocridade</td>
                <td>Rejeição dos excessos; valorização da vida modesta e equilibrada</td>
                <td><em>Aurea mediocritas</em> (mediania dourada)</td>
              </tr>
              <tr>
                <td>Razão sobre emoção</td>
                <td>Controle racional das emoções; equilíbrio classicista</td>
                <td><em>Inutilia truncat</em> (cortar o inútil)</td>
              </tr>
              <tr>
                <td>Pseudônimos pastorais</td>
                <td>Os poetas adotam nomes de pastores greco-latinos; recusam o Eu real</td>
                <td>Glauceste Satúrnio, Dirceu, Critilo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🌿</span>
            <h3>Bucolismo</h3>
            <p>O campo é o espaço da virtude, da paz e da felicidade. Pastores (pseudônimos dos poetas reais) vivem em harmonia com a natureza, amam com pureza, cantam com serenidade.</p>
          </div>
          <div className="lesson-card">
            <span>☀️</span>
            <h3>Carpe Diem</h3>
            <p>Aproveite o momento presente — a vida é breve, a juventude passa, os prazeres são simples e devem ser saboreados agora. Herança de Horácio (<em>Odes</em>, I, XI).</p>
          </div>
          <div className="lesson-card">
            <span>🏛️</span>
            <h3>Imitação dos Clássicos</h3>
            <p>Virgílio, Horácio, Ovídio, Teócrito: os modelos greco-latinos são estudados, imitados e adaptados. O Arcadismo é um neoclassicismo — um retorno ao ideal clássico.</p>
          </div>
          <div className="lesson-card">
            <span>🧠</span>
            <h3>Razão Iluminista</h3>
            <p>A razão controla as paixões; a linguagem deve ser clara, direta, sem os rebuscamentos e paradoxos do Barroco. A poesia árcade é transparente como um espelho.</p>
          </div>
        </div>

        <p>
          O <strong>pastoralismo</strong> é o aspecto mais visível do Arcadismo e o mais cobrado pelo ENEM. Os poetas árcades adotam pseudônimos pastorais tirados da tradição greco-latina — Cláudio Manuel da Costa assina como <em>Glauceste Satúrnio</em>, Tomás Antônio Gonzaga como <em>Dirceu</em>, Alvarenga Peixoto como <em>Alcindo Palmireno</em> — e constroem em seus poemas um universo bucólico fictício onde pastores cantam, amam e filosofam num cenário de natureza idealizada. Esse mundo pastoral não é realista: é uma convenção literária herdada dos gregos (Teócrito), dos latinos (Virgílio) e dos italianos (Sannazaro). No Brasil, os poetas árcades aplicam esse cenário a paisagens mineiras reais — mas transformadas pelo filtro idealizador da tradição greco-latina.
        </p>
        <p>
          O <strong>fingimento</strong> é central no Arcadismo: o poeta "finge" ser pastor, a amada "finge" ser pastora, o cenário "finge" ser a Arcádia grega. Fernando Pessoa, séculos depois, tornaria famoso o verso <em>"O poeta é um fingidor"</em> — mas o conceito já estava implícito no bucolismo árcade. Essa convenção de fingimento tem um efeito interessante: ao tornar explícita a artificialidade da representação, o Arcadismo estabelece uma distância crítica entre o sujeito real e o eu lírico pastoral. O leitor sabe que Gonzaga não é realmente um pastor — e Gonzaga sabe que o leitor sabe. Esse jogo de máscaras é sofisticado e típico de uma cultura literária madura.
        </p>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Arcadismo em Portugal</span>
        <h2>3. O Arcadismo em Portugal: Nova Arcádia e a Reforma Pombalina</h2>

        <p>
          Para compreender a especificidade do Arcadismo é necessário entender o que os poetas do século XVIII queriam dizer com "natureza". No contexto árcade, "natureza" não significa a natureza real, observada empiricamente — a natureza das florestas brasileiras, das montanhas mineiras, das cascatas e das onças. Significa a natureza <strong>idealizada</strong> da tradição pastoral greco-latina: um jardim cuidado, com fontes murmurantes, relva suave, flores sempre em flor, brisas amenas. Um espaço de perfeição artificial que serve de cenário para as declarações de amor e as reflexões filosóficas dos pastores fictícios. Quando Gonzaga escreve sobre flores e prados, ele não está descrevendo Minas Gerais: está evocando a Arcádia de Teócrito e de Virgílio. Essa distinção é crucial para entender por que o Arcadismo não é uma literatura de observação da realidade brasileira — e por que o Romantismo, que virá depois, precisará fazer exatamente o oposto: olhar para a realidade local com olhos brasileiros.
        </p>

        <p>
          Em Portugal, o Arcadismo se manifestou principalmente através das academias literárias, especialmente a <strong>Nova Arcádia</strong> (fundada em Lisboa em 1790). Os poetas lusitanos adotaram os mesmos ideais de clareza e bucolismo, mas num contexto marcado pelas reformas do Marquês de Pombal — que modernizou o ensino superior e cortou a influência jesuítica na cultura portuguesa.
        </p>
        <p>
          O principal representante do Arcadismo em Portugal é <strong>Bocage</strong> (Manuel Maria Barbosa du Bocage, 1765–1805), que misturava o bucolismo árcade com uma veia satírica e erótica que o distinguia dos seus contemporâneos mais contidos. Bocage é uma figura de transição: seus textos têm o equilíbrio formal do Arcadismo, mas o temperamento apaixonado e a vida tumultuada que anunciam o Romantismo.
        </p>

        <div className="lesson-highlight">
          <h3>O Marquês de Pombal e a Reforma Cultural</h3>
          <p>
            Sebastião José de Carvalho e Melo, o Marquês de Pombal, governa Portugal entre 1750 e 1777. Expulsa os jesuítas (1759), reforma a Universidade de Coimbra (1772), introduz o ensino de ciências naturais e filosofia iluminista — e forma, assim, a geração de poetas brasileiros que estudaram em Coimbra com o espírito do Iluminismo. Cláudio Manuel da Costa, Tomás Antônio Gonzaga e Alvarenga Peixoto são produtos diretos dessa reforma universitária.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Arcadismo no Brasil</span>
        <h2>4. O Arcadismo Brasileiro: Minas Gerais, Ouro e Inconfidência</h2>

        <p>
          O Arcadismo brasileiro tem um cenário e um clima únicos: desenvolveu-se principalmente em <strong>Vila Rica</strong> (atual Ouro Preto, MG) e em outras cidades do ciclo do ouro ao longo da segunda metade do século XVIII. Minas Gerais era, nesse período, a região mais rica e culta do Brasil colonial — e também a mais oprimida pelo fisco português, que cobrava o <em>quinto</em> (20% de toda a produção aurífera) e ameaçava com a <em>derrama</em> (cobrança forçada de impostos atrasados).
        </p>
        <p>
          Os poetas árcades brasileiros foram intelectuais, advogados, médicos e juízes que circulavam nas academias literárias e nos círculos políticos. Muitos deles estavam envolvidos, direta ou indiretamente, com a <strong>Inconfidência Mineira</strong> (1789) — o movimento que planejava a independência de Minas Gerais e que foi delatado antes de eclodir. Vários árcades foram presos, exilados ou executados: Cláudio Manuel da Costa morreu misteriosamente na prisão em 1789; Tomás Antônio Gonzaga foi exilado em Moçambique; Alvarenga Peixoto foi degredado para a África.
        </p>
        <p>
          Há uma tensão constitutiva no Arcadismo brasileiro que não existe nos equivalentes europeus: os poetas mineiros cantavam a vida simples e bucólica usando pseudônimos de pastores greco-latinos — mas viviam numa sociedade escravocrata, num contexto de exploração colonial intensa, às margens de uma conspiração política que poderia lhes custar a vida. Essa distância entre o <em>locus amoenus</em> que cantavam e o mundo violento em que viviam não era ingenuidade: era ao mesmo tempo evasão estética e estratégia de sobrevivência. A poesia pastoral era um espaço de liberdade imaginária numa sociedade em que a liberdade real era extremamente restrita. O próprio Gonzaga, ao escrever <em>Marília de Dirceu</em>, criava um mundo alternativo de paz e amor simples que contrastava radicalmente com o caos político em que estava envolvido.
        </p>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 200"
            width="700"
            height="200"
            aria-label="Linha do tempo do Arcadismo brasileiro com seus principais marcos"
          >
            <defs>
              <marker id="arrowA" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#065f46" />
              </marker>
            </defs>
            <rect x="0" y="0" width="700" height="200" rx="12" fill="#f0fdf4" />
            <line x1="40" y1="100" x2="660" y2="100" stroke="#065f46" strokeWidth="3" markerEnd="url(#arrowA)" />

            <circle cx="85" cy="100" r="9" fill="#065f46" />
            <text x="85" y="82" textAnchor="middle" fontSize="11" fill="#14532d" fontWeight="bold">1768</text>
            <text x="85" y="120" textAnchor="middle" fontSize="10" fill="#166534">Obras Poéticas</text>
            <text x="85" y="133" textAnchor="middle" fontSize="10" fill="#166534">Cláudio Manuel</text>

            <circle cx="220" cy="100" r="9" fill="#065f46" />
            <text x="220" y="82" textAnchor="middle" fontSize="11" fill="#14532d" fontWeight="bold">1769</text>
            <text x="220" y="120" textAnchor="middle" fontSize="10" fill="#166534">O Uraguai</text>
            <text x="220" y="133" textAnchor="middle" fontSize="10" fill="#166534">Basílio da Gama</text>

            <circle cx="360" cy="100" r="9" fill="#0891b2" />
            <text x="360" y="82" textAnchor="middle" fontSize="11" fill="#0c4a6e" fontWeight="bold">1781</text>
            <text x="360" y="120" textAnchor="middle" fontSize="10" fill="#0c4a6e">Marília de Dirceu</text>
            <text x="360" y="133" textAnchor="middle" fontSize="10" fill="#0c4a6e">parte I (Gonzaga)</text>

            <circle cx="500" cy="100" r="9" fill="#dc2626" />
            <text x="500" y="82" textAnchor="middle" fontSize="11" fill="#7f1d1d" fontWeight="bold">1789</text>
            <text x="500" y="120" textAnchor="middle" fontSize="10" fill="#7f1d1d">Inconfidência</text>
            <text x="500" y="133" textAnchor="middle" fontSize="10" fill="#7f1d1d">Mineira (delação)</text>

            <circle cx="615" cy="100" r="9" fill="#7c3aed" />
            <text x="615" y="82" textAnchor="middle" fontSize="11" fill="#3b0764" fontWeight="bold">1792</text>
            <text x="615" y="120" textAnchor="middle" fontSize="10" fill="#3b0764">Tiradentes</text>
            <text x="615" y="133" textAnchor="middle" fontSize="10" fill="#3b0764">enforcado</text>

            <text x="350" y="175" textAnchor="middle" fontSize="12" fill="#065f46" fontWeight="bold">Arcadismo Brasileiro — Segunda metade do século XVIII</text>
          </svg>
          <figcaption>Linha do tempo dos marcos do Arcadismo brasileiro e da Inconfidência Mineira.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Cláudio Manuel da Costa</span>
        <h2>5. Cláudio Manuel da Costa: O Precursor do Arcadismo Brasileiro</h2>

        <p>
          A questão do <strong>espaço geográfico</strong> é um aspecto interessante do Arcadismo brasileiro. Os poetas árcades europeus cantavam uma Arcádia imaginária — um lugar que nunca existiu, herdado da mitologia grega. Os brasileiros tinham um problema diferente: eles viviam num país de natureza exuberante e selvagem que era o oposto da natureza domesticada e harmoniosa da pastoral clássica. Como conciliar as onças, as florestas densas e os rios caudalosos do Brasil com os prados suaves, as fontezinhas e os rebanhos de ovelhas da Arcádia greco-latina? A solução dos poetas brasileiros foi, em geral, <strong>ignorar o Brasil real</strong> e importar o cenário europeu — ou, quando muito, substituir a paisagem européia pela paisagem mineira de forma discreta e contida (como faz Cláudio Manuel da Costa com os "montes" e "outeiros"). Apenas com o Romantismo o Brasil real — com suas matas, rios, indígenas e natureza tropical — entrará de fato na literatura brasileira.
        </p>

        <p>
          <strong>Cláudio Manuel da Costa</strong> (1729–1789) é considerado o <strong>introdutor do Arcadismo no Brasil</strong>. Advogado e poeta nascido em Mariana (MG), estudou em Coimbra e voltou ao Brasil impregnado dos ideais neoclássicos. Seu pseudônimo árcade era Glauceste Satúrnio. Publicou as <em>Obras Poéticas</em> em 1768 — o <strong>marco inicial do Arcadismo brasileiro</strong> — e também escreveu o poema épico <em>Vila Rica</em> (publicado postumamente), exaltando a fundação da capital de Minas Gerais.
        </p>
        <p>
          A poesia de Cláudio tem uma tensão interessante: embora siga o bucolismo árcade com paisagens campestres e linguagem clara, há nela uma melancolia específica — o poeta canta a natureza de Minas Gerais, suas montanhas e pedreiras, com um amor que o Arcadismo europeu não conhecia. A paisagem real de Minas começa a penetrar na poesia árcade, que era essencialmente uma paisagem imaginária europeia.
        </p>

        <div className="lesson-highlight">
          <strong>Soneto de Cláudio Manuel da Costa:</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Torno a ver-vos, ó montes; o destino<br/>
            Aqui me torna a pôr nestes outeiros,<br/>
            Onde um tempo os gabões grosseiros<br/>
            Troquei pelas pompas do ladino."
          </p>
          <p>
            O poeta volta às montanhas (montes, outeiros — paisagem real de Minas) após um tempo na cidade. O conflito entre a vida simples do campo e as "pompas" da cidade é o tema árcade por excelência — mas aqui a paisagem tem uma concretude geográfica que não é meramente pastoril: são os montes de Minas Gerais.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Tomás Antônio Gonzaga</span>
        <h2>6. Tomás Antônio Gonzaga e Marília de Dirceu</h2>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 200"
            width="700"
            height="200"
            aria-label="Esquema dos principais lemas árcades e sua relação com a poesia de Gonzaga"
          >
            <rect x="0" y="0" width="700" height="200" rx="12" fill="#f0fdf4" />
            <text x="350" y="28" textAnchor="middle" fontSize="14" fill="#065f46" fontWeight="bold">Os Lemas Árcades em Marília de Dirceu (Gonzaga)</text>

            <rect x="30" y="45" width="148" height="70" rx="8" fill="#059669" />
            <text x="104" y="68" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Carpe diem</text>
            <text x="104" y="85" textAnchor="middle" fontSize="10" fill="#d1fae5">Aproveite o momento</text>
            <text x="104" y="100" textAnchor="middle" fontSize="9" fill="#a7f3d0" fontStyle="italic">Juventude que passa</text>

            <rect x="192" y="45" width="148" height="70" rx="8" fill="#0891b2" />
            <text x="266" y="68" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Fugere urbem</text>
            <text x="266" y="85" textAnchor="middle" fontSize="10" fill="#cffafe">Fugir da cidade</text>
            <text x="266" y="100" textAnchor="middle" fontSize="9" fill="#a5f3fc" fontStyle="italic">Campo × corte corrupta</text>

            <rect x="354" y="45" width="148" height="70" rx="8" fill="#7c3aed" />
            <text x="428" y="60" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Aurea</text>
            <text x="428" y="75" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">mediocritas</text>
            <text x="428" y="92" textAnchor="middle" fontSize="10" fill="#ede9fe">Vida suficiente</text>
            <text x="428" y="107" textAnchor="middle" fontSize="9" fill="#ddd6fe" fontStyle="italic">Sem excessos nem miséria</text>

            <rect x="516" y="45" width="148" height="70" rx="8" fill="#b45309" />
            <text x="590" y="60" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Locus</text>
            <text x="590" y="75" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">amoenus</text>
            <text x="590" y="92" textAnchor="middle" fontSize="10" fill="#fef3c7">Lugar agradável</text>
            <text x="590" y="107" textAnchor="middle" fontSize="9" fill="#fde68a" fontStyle="italic">Natureza idílica</text>

            <line x1="104" y1="115" x2="350" y2="155" stroke="#059669" strokeWidth="1.5" />
            <line x1="266" y1="115" x2="350" y2="155" stroke="#0891b2" strokeWidth="1.5" />
            <line x1="428" y1="115" x2="350" y2="155" stroke="#7c3aed" strokeWidth="1.5" />
            <line x1="590" y1="115" x2="350" y2="155" stroke="#b45309" strokeWidth="1.5" />

            <rect x="235" y="155" width="230" height="35" rx="8" fill="#065f46" />
            <text x="350" y="173" textAnchor="middle" fontSize="12" fill="#fff" fontWeight="bold">Marília de Dirceu</text>
            <text x="350" y="188" textAnchor="middle" fontSize="10" fill="#d1fae5">Síntese de todos os ideais árcades</text>
          </svg>
          <figcaption>Os quatro lemas árcades centrais e sua síntese na obra Marília de Dirceu.</figcaption>
        </figure>

        <p>
          A figura de Cláudio Manuel da Costa ocupa um lugar especialmente trágico na história da literatura brasileira. Ele foi um poeta que viveu a contradição máxima: celebrou nos seus sonetos a vida simples e tranquila, os montes de Minas e o amor pastoril — mas morreu numa cela da Inquisição em 1789, preso por sua participação na Inconfidência Mineira. As circunstâncias de sua morte nunca foram totalmente esclarecidas: o relatório oficial falou em suicídio (enforcou-se com a própria roupa), mas muitos historiadores suspeitam de assassinato. Seja como for, a morte de Cláudio — que aderira à conspiração motivado em parte pelos mesmos ideais iluministas que alimentavam sua poesia — é o símbolo mais dramático da impossibilidade de separar arte e política no Arcadismo brasileiro.
        </p>

        <p>
          <strong>Tomás Antônio Gonzaga</strong> (1744–1810) é o poeta mais famoso do Arcadismo brasileiro e autor de <em>Marília de Dirceu</em> — considerada a obra mais importante da poesia lírica colonial brasileira. Nascido no Porto (Portugal), Gonzaga veio para o Brasil onde se tornou ouvidor (magistrado) em Vila Rica. Seu pseudônimo árcade era <strong>Dirceu</strong> e sua amada — Maria Doroteia Joaquina de Seixas — tornou-se imortal como <strong>Marília</strong>.
        </p>
        <p>
          <em>Marília de Dirceu</em> é dividida em três partes: as <strong>Liras I</strong> (1781–1788), escritas no Brasil antes da prisão, são bucólicas, amorosas e serenas — cantam a felicidade antecipada do casamento e a vida simples no campo; as <strong>Liras II</strong> (escritas na prisão e no exílio) são elegíacas, marcadas pela dor da separação e pela esperança frustrada; as <strong>Cartas Chilenas</strong> (descobertas mais tarde) são um texto satírico em verso, criticando ferozes e com ironia o governador de Minas — Luís da Cunha Meneses, apelidado de Fanfarrão Minésio.
        </p>

        <div className="math-block">
          <strong>Lira mais conhecida de Marília de Dirceu:</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Eu, Marília, não sou algum vaqueiro,<br/>
            Que viva de guardar alheio gado;<br/>
            De tosco trato, de expressões grosseiro,<br/>
            Dos frios gelos e dos sóis queimado.<br/>
            Tenho próprio casal e nele assisto;<br/>
            Dá-me vinho, legumes, fruta, azeite;<br/>
            Das minhas laranjeiras, ao que vejo,<br/>
            Ainda na aguardente me parece."
          </p>
          <p>
            O eu lírico apresenta a si mesmo não como um pobre vaqueiro rústico, mas como um homem de posses modestas e confortáveis — <em>aurea mediocritas</em>. A enumeração dos produtos do campo (vinho, legumes, fruta, azeite) é a materialização poética do ideal árcade: a vida suficiente e feliz na simplicidade rural.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>As Cartas Chilenas</h3>
          <p>
            Atribuídas a Gonzaga (há alguma controvérsia sobre a autoria), as <em>Cartas Chilenas</em> são um texto satírico em verso que critica o governador de Minas Gerais. O pseudônimo do governador — <strong>Fanfarrão Minésio</strong> — e a ficção de que as cartas viriam do Chile (para disfarçar a identidade dos autores) são recursos de proteção típicos da sátira política. O texto é cobrado no ENEM para discutir as relações entre literatura e poder colonial.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Basílio da Gama</span>
        <h2>7. Basílio da Gama e O Uraguai: Épica sem Deuses</h2>

        <p>
          <strong>José Basílio da Gama</strong> (1741–1795) é o autor de <em>O Uraguai</em> (1769) — a epopeia mais importante do Arcadismo brasileiro e uma das obras mais originais da literatura colonial. O poema narra a Guerra Guaranítica (1756): o conflito em que as tropas portuguesas e espanholas destruíram as missões jesuíticas do Rio Grande do Sul, expulsando os guaranis que ali viviam.
        </p>
        <p>
          <em>O Uraguai</em> é inovador em dois aspectos fundamentais. Primeiro: <strong>não usa a máquina mitológica greco-romana</strong>, que era obrigatória nas epopeias desde Homero e Virgílio — em vez de deuses do Olimpo, os protagonistas são os próprios indígenas guaranis. Segundo: o herói indígena <strong>Cacambo</strong> e sua amada <strong>Lindoia</strong> são retratados com dignidade, beleza e humanidade — uma visão que contrasta com o etnocentrismo dominante do período colonial.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Epopeias clássicas (Camões, Homero)</th>
                <th>O Uraguai (Basílio da Gama)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Máquina mitológica</td>
                <td>Deuses greco-romanos intervêm no enredo</td>
                <td>Ausente — sem deuses do Olimpo</td>
              </tr>
              <tr>
                <td>Herói</td>
                <td>Guerreiro europeu ou semidivino</td>
                <td>Indígena guarani (Cacambo, Sepé Tiaraju)</td>
              </tr>
              <tr>
                <td>Visão dos indígenas</td>
                <td>Selvagens a ser conquistados/catequizados</td>
                <td>Heróis dignos que defendem sua terra</td>
              </tr>
              <tr>
                <td>Forma métrica</td>
                <td>Oitava rima, decassílabo</td>
                <td>Verso livre (sem rima fixa) — inovação</td>
              </tr>
              <tr>
                <td>Tema</td>
                <td>Glória nacional, expansão, conquista</td>
                <td>Destruição das missões; tragédia colonial</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <strong>Trecho de O Uraguai — morte de Lindoia:</strong>
          <p style={{fontStyle: "italic", margin: "0.5rem 0"}}>
            "Estava bela na madrugada a morte<br/>
            Formosa e pálida nos seus braços frios<br/>
            Uma cascavel enrolada ao pescoço."
          </p>
          <p>
            A cena da morte de Lindoia — envenenada por uma serpente ao invés de se render ao inimigo — é das mais belas e trágicas do Arcadismo brasileiro. A antítese "bela na morte", "formosa e pálida" tem reminiscências barrocas, mas o contexto é árcade: é a natureza selvagem e bela do Brasil que acompanha a heroína até o fim.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 8 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Santa Rita Durão</span>
        <h2>8. Santa Rita Durão e Caramuru: A Épica Jesuítica Tardia</h2>

        <p>
          <strong>Frei José de Santa Rita Durão</strong> (1722–1784) é o autor de <em>Caramuru</em> (1781), a segunda grande epopeia do Arcadismo brasileiro. O poema narra a história de Diogo Álvares Correia — marinheiro português que naufragou na Bahia em 1509 e viveu entre os tupinambás, sendo chamado por eles de <em>Caramuru</em> (filho do trovão, devido ao uso de espingarda). Diogo casa-se com a tupinambá Paraguaçu e os dois viajam para a França, onde ela é batizada como Catarina.
        </p>
        <p>
          <em>Caramuru</em> é mais conservador que <em>O Uraguai</em>: usa a oitava rima, mantém a estrutura épica clássica e tem uma visão mais ambígua dos indígenas — há admiração pela natureza brasileira e pelos costumes nativos, mas também a perspectiva catequética do autor, que era frade agostiniano. O poema é interessante para o ENEM como contraponto a <em>O Uraguai</em>: como dois autores da mesma época e movimento tratam diferentemente o mesmo tema (indígenas e colonização).
        </p>
      </section>

      {/* ── SEÇÃO 9 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Inconfidência Mineira</span>
        <h2>9. Inconfidência Mineira e o Arcadismo: Arte e Revolução</h2>

        <p>
          A <strong>Inconfidência Mineira</strong> (1789) é o episódio histórico que mais dramaticamente une o Arcadismo à política. O movimento conspiratório que planejava a independência de Minas Gerais tinha, entre seus principais membros, vários dos maiores poetas árcades: Cláudio Manuel da Costa, Tomás Antônio Gonzaga, Alvarenga Peixoto e Inácio José de Alvarenga Peixoto. A poesia árcade e a conspiração política brotavam do mesmo solo intelectual: o Iluminismo, a leitura de Voltaire e Rousseau, a ideia de que o povo tem direitos e que os governantes podem ser questionados.
        </p>
        <p>
          O movimento foi delatado antes de eclodir e seus líderes foram presos em 1789. <strong>Tiradentes</strong> (Joaquim José da Silva Xavier) — que não era poeta mas era o principal articulador popular do movimento — foi o único a ser enforcado (1792), numa execução que visava exemplarizar. Os demais foram exilados. Cláudio Manuel da Costa morreu nas prisões em circunstâncias nunca totalmente esclarecidas — provavelmente suicídio, possivelmente assassinato.
        </p>

        <div className="lesson-highlight">
          <h3>Os poetas inconfidentes</h3>
          <ul>
            <li><strong>Cláudio Manuel da Costa:</strong> morreu na prisão em 1789; autor das <em>Obras Poéticas</em> e de <em>Vila Rica</em>.</li>
            <li><strong>Tomás Antônio Gonzaga:</strong> exilado em Moçambique; escreveu a parte II de <em>Marília de Dirceu</em> no exílio.</li>
            <li><strong>Alvarenga Peixoto:</strong> exilado na África; escreveu odes patrióticas que o ENEM às vezes apresenta.</li>
            <li><strong>Silva Alvarenga:</strong> preso mas solto; seguiu escrevendo em estilo árcade até o início do século XIX.</li>
          </ul>
        </div>

        <figure className="lesson-figure">
          <svg
            viewBox="0 0 700 250"
            width="700"
            height="250"
            aria-label="Mapa conceitual do Arcadismo brasileiro com autores e obras principais"
          >
            <rect x="0" y="0" width="700" height="250" rx="12" fill="#f0fdf4" />
            <rect x="255" y="10" width="190" height="50" rx="9" fill="#065f46" />
            <text x="350" y="32" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">ARCADISMO BRASILEIRO</text>
            <text x="350" y="48" textAnchor="middle" fontSize="11" fill="#d1fae5">Minas Gerais — Séc. XVIII</text>

            <line x1="130" y1="60" x2="350" y2="60" stroke="#065f46" strokeWidth="1.5" />
            <line x1="570" y1="60" x2="350" y2="60" stroke="#065f46" strokeWidth="1.5" />
            <line x1="130" y1="60" x2="130" y2="100" stroke="#065f46" strokeWidth="1.5" />
            <line x1="350" y1="60" x2="350" y2="100" stroke="#065f46" strokeWidth="1.5" />
            <line x1="570" y1="60" x2="570" y2="100" stroke="#065f46" strokeWidth="1.5" />

            <rect x="20" y="100" width="220" height="55" rx="8" fill="#0891b2" />
            <text x="130" y="122" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Cláudio Manuel da Costa</text>
            <text x="130" y="140" textAnchor="middle" fontSize="10" fill="#cffafe">Obras Poéticas (1768)</text>
            <text x="130" y="154" textAnchor="middle" fontSize="10" fill="#cffafe">Introdutor; paisagem mineira</text>

            <rect x="240" y="100" width="220" height="55" rx="8" fill="#065f46" />
            <text x="350" y="122" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Tomás Antônio Gonzaga</text>
            <text x="350" y="140" textAnchor="middle" fontSize="10" fill="#d1fae5">Marília de Dirceu (1781–1788)</text>
            <text x="350" y="154" textAnchor="middle" fontSize="10" fill="#d1fae5">Cartas Chilenas (sátira)</text>

            <rect x="460" y="100" width="220" height="55" rx="8" fill="#7c3aed" />
            <text x="570" y="122" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Basílio da Gama</text>
            <text x="570" y="140" textAnchor="middle" fontSize="10" fill="#ede9fe">O Uraguai (1769)</text>
            <text x="570" y="154" textAnchor="middle" fontSize="10" fill="#ede9fe">Épica sem mitologia greco-romana</text>

            <line x1="350" y1="155" x2="350" y2="185" stroke="#065f46" strokeWidth="2" />

            <rect x="165" y="185" width="370" height="45" rx="8" fill="#166534" />
            <text x="350" y="203" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="bold">Inconfidência Mineira (1789)</text>
            <text x="350" y="220" textAnchor="middle" fontSize="10" fill="#d1fae5">Arte + Política · Iluminismo · Independência frustrada</text>
          </svg>
          <figcaption>Mapa conceitual dos principais autores e obras do Arcadismo brasileiro.</figcaption>
        </figure>
      </section>

      {/* ── SEÇÃO 10 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Arcadismo × Barroco × Romantismo</span>
        <h2>10. Arcadismo no ENEM: Comparações e Análise</h2>

        <p>
          O ENEM frequentemente coloca o Arcadismo em perspectiva comparativa — ou em relação ao Barroco que o antecede, ou em relação ao Romantismo que virá depois. Saber essas distinções é fundamental para não confundir movimentos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Barroco (séc. XVII)</th>
                <th>Arcadismo (séc. XVIII)</th>
                <th>Romantismo (séc. XIX)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Relação razão/emoção</td>
                <td>Conflito angustiado</td>
                <td>Razão domina a emoção</td>
                <td>Emoção domina tudo</td>
              </tr>
              <tr>
                <td>Linguagem</td>
                <td>Rebuscada, paradoxal</td>
                <td>Clara, simples, equilibrada</td>
                <td>Sentimental, apaixonada</td>
              </tr>
              <tr>
                <td>Visão da natureza</td>
                <td>Sombria, mortal, efêmera</td>
                <td>Idílica, bucólica, harmoniosa</td>
                <td>Espelho da alma; tempestuosa</td>
              </tr>
              <tr>
                <td>Tema central</td>
                <td>Morte, pecado, efemeridade</td>
                <td>Vida simples, amor sereno, campo</td>
                <td>Amor apaixonado, pátria, liberdade</td>
              </tr>
              <tr>
                <td>Sujeito lírico</td>
                <td>Angustiado, dividido</td>
                <td>Equilibrado, pastoral</td>
                <td>Apaixonado, individualista</td>
              </tr>
              <tr>
                <td>Principais autores (BR)</td>
                <td>Gregório de Matos, Pe. Vieira</td>
                <td>Gonzaga, Cláudio, Basílio da Gama</td>
                <td>Gonçalves Dias, José de Alencar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="lesson-highlight">
          <h3>Síntese para o ENEM</h3>
          <ul>
            <li><strong>Arcadismo = século XVIII + Iluminismo + reação ao Barroco</strong>.</li>
            <li><strong>Bucolismo:</strong> pastores fictícios, natureza idílica, vida simples — <em>locus amoenus</em>.</li>
            <li><strong>Lemas:</strong> <em>carpe diem</em>, <em>fugere urbem</em>, <em>aurea mediocritas</em>.</li>
            <li><strong>Cláudio Manuel da Costa:</strong> introdutor (1768); paisagem de Minas na poesia árcade.</li>
            <li><strong>Gonzaga:</strong> <em>Marília de Dirceu</em> — lirismo amoroso árcade; <em>Cartas Chilenas</em> — sátira política.</li>
            <li><strong>Basílio da Gama:</strong> <em>O Uraguai</em> — épica sem deuses greco-romanos; herói indígena; verso livre.</li>
            <li><strong>Santa Rita Durão:</strong> <em>Caramuru</em> — épica colonial mais conservadora.</li>
            <li><strong>Inconfidência Mineira (1789):</strong> poetas árcades envolvidos; derrota política que encerrou o ciclo.</li>
          </ul>
        </div>

        <div className="math-block">
          <strong>Armadilha do ENEM:</strong> Não confunda <em>carpe diem</em> árcade com o <em>carpe diem</em> barroco. No Barroco, o <em>carpe diem</em> tem um fundo angustiado — aproveite agora porque a morte virá logo. No Arcadismo, o tom é sereno: aproveite os prazeres simples da vida porque eles são suficientes e agradáveis. A diferença é o <em>clima emocional</em>: angústia no Barroco, serenidade no Arcadismo.
        </div>
      </section>

      {/* ── SEÇÃO 11 ── */}
      <section className="lesson-section">
        <span className="section-kicker">Anacreôntica e Épica</span>
        <h2>11. Formas Literárias do Arcadismo: Liras, Odes, Éclogas e Epopeias</h2>

        <p>
          O Arcadismo cultivou um conjunto específico de formas poéticas herdadas da tradição greco-latina, cada uma com suas características e propósitos. Conhecer essas formas é fundamental para responder questões do ENEM que pedem identificação do gênero literário ou da tradição a que um fragmento pertence.
        </p>

        <div className="lesson-grid">
          <div className="lesson-card">
            <span>🎶</span>
            <h3>Lira</h3>
            <p>Poema lírico de estrofes mistas (versos de diferentes metros combinados). Gonzaga usa a lira em <em>Marília de Dirceu</em>: geralmente estrofes de 5 versos com esquema métrico misto (decassílabos e hexassílabos). Nome evoca a lira grega — o instrumento de Apolo.</p>
          </div>
          <div className="lesson-card">
            <span>🌾</span>
            <h3>Écloga</h3>
            <p>Poema dramático ou narrativo de tema pastoril, com pastores que cantam e dialogam. Herança direta das <em>Bucólicas</em> de Virgílio. Cláudio Manuel da Costa escreveu éclogas que transpõem o cenário europeu para Minas Gerais.</p>
          </div>
          <div className="lesson-card">
            <span>⚔️</span>
            <h3>Epopeia</h3>
            <p>O Arcadismo produziu duas grandes epopeias brasileiras: <em>O Uraguai</em> (Basílio da Gama) e <em>Caramuru</em> (Santa Rita Durão). Ambas têm herói histórico, ação épica e cenário colonial brasileiro — mas diferem no uso (ou não) da máquina mitológica.</p>
          </div>
          <div className="lesson-card">
            <span>📜</span>
            <h3>Ode e Anacreôntica</h3>
            <p>A ode é um poema lírico de celebração, herança de Píndaro e Horácio. A <em>anacreôntica</em> (de Anacreonte) é uma ode breve de tema amoroso ou báquico (ao vinho). Os poetas árcades usavam essas formas para cantar o amor simples e os prazeres moderados.</p>
          </div>
        </div>

        <p>
          Além das formas poéticas, o Arcadismo produziu textos em prosa: as <em>Cartas Chilenas</em> (atribuídas a Gonzaga) são escritas em verso, mas têm o caráter satírico epistolar próximo da prosa; e os textos críticos das academias (como a <strong>Academia Brasílica dos Esquecidos</strong>, 1724, e a <strong>Academia dos Renascidos</strong>, 1759) eram ensaios e discursos de defesa dos valores neoclássicos.
        </p>

        <div className="lesson-table-wrap">
          <table className="lesson-table">
            <thead>
              <tr>
                <th>Forma</th>
                <th>Características</th>
                <th>Exemplo no Arcadismo Brasileiro</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lira</td>
                <td>Estrofes mistas; lírica amorosa e pastoral</td>
                <td><em>Marília de Dirceu</em> — Tomás Antônio Gonzaga</td>
              </tr>
              <tr>
                <td>Soneto</td>
                <td>14 versos decassílabos; 2 quartetos + 2 tercetos</td>
                <td><em>Obras Poéticas</em> — Cláudio Manuel da Costa</td>
              </tr>
              <tr>
                <td>Écloga</td>
                <td>Diálogo pastoril; pastores cantam no campo</td>
                <td>Éclogas de Cláudio Manuel da Costa</td>
              </tr>
              <tr>
                <td>Epopeia</td>
                <td>Longa narrativa heroica em verso; ação histórica</td>
                <td><em>O Uraguai</em> (Basílio) · <em>Caramuru</em> (Durão)</td>
              </tr>
              <tr>
                <td>Sátira em verso</td>
                <td>Crítica social e política em forma epistolar</td>
                <td><em>Cartas Chilenas</em> (atrib. Gonzaga)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="math-block">
          <strong>Silva Alvarenga e o Arcadismo tardio:</strong>
          <p>
            <strong>Manuel Inácio da Silva Alvarenga</strong> (1749–1814) é outro poeta árcade brasileiro que o ENEM às vezes menciona. Autor de <em>O Desertor</em> (poema didático sobre a botânica) e de <em>Glaura</em> (coletânea de anacreônticas), Silva Alvarenga representa a fase tardia do Arcadismo, quando o movimento começa a incorporar elementos mais sentimentais que antecedem o Romantismo. Foi preso pela Inconfidência por associação com os conspiradores, mas solto por falta de provas mais concretas.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>Cartas Chilenas: sátira árcade e crítica do poder colonial</h3>
          <p>
            As <em>Cartas Chilenas</em> (c. 1787–1789), atribuídas principalmente a Gonzaga, são 13 cartas em verso heroico (decassílabos brancos, sem rima) que denunciam os abusos do governador de Minas Gerais, Luís da Cunha Meneses, sob o pseudônimo de Fanfarrão Minésio. O remetente fictício é <em>Critilo</em> (provavelmente o próprio Gonzaga) e o destinatário é <em>Doroteu</em>. A ficção de que as cartas viriam do Chile é uma proteção retórica típica da sátira política: ao situar os eventos num país imaginário, o autor cria distância segura entre a crítica e seu alvo real. O recurso é semelhante à estratégia de Vieira ao pregar <em>para os peixes</em> — a ficção protetora da linguagem política.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 12 — A HERANÇA DO ARCADISMO ── */}
      <section className="lesson-section">
        <span className="section-kicker">Legado</span>
        <h2>A Herança do Arcadismo</h2>
        <p>
          O Arcadismo prepara o terreno para o Romantismo que o sucede no Brasil (a partir de 1836). Os poetas árcades já incorporavam certos elementos pré-românticos: a <strong>subjetividade lírica</strong> de Gonzaga em <em>Marília de Dirceu</em>, com sua individualização do eu poético e sua carga emocional pessoal, antecipa a lírica confessional romântica. O interesse pela natureza brasileira como tema — ainda que filtrado pelo bucolismo convencional da pastoral europeia — cria as condições para a exaltação romântica da natureza nativa em Gonçalves Dias e José de Alencar. A preocupação com a identidade nacional, visível na escolha de temas históricos e indígenas por Basílio da Gama e Santa Rita Durão, prefigura o Indianismo romântico.
        </p>
        <p>
          O lirismo político das <em>Cartas Chilenas</em> e a conexão entre poetas e a causa da Inconfidência Mineira estabelecem uma tradição de <strong>literatura engajada</strong> que reaparece no Romantismo abolicionista de Castro Alves e no Modernismo socialmente comprometido de Graciliano Ramos. A lira, a écloga e o soneto do período árcade sobrevivem como formas de prestígio na poesia brasileira até os primeiros parnasianos. E os <em>lemas árcades</em> — <em>carpe diem</em>, <em>aurea mediocritas</em>, <em>fugere urbem</em> — atravessam séculos e reaparecem em contextos modernos sempre que um texto convoca a simplicidade, o retiro e a satisfação com o essencial como antídoto ao excesso e à vaidade do mundo urbano.
        </p>
        <p>
          A figura de <strong>Tiradentes</strong> (Joaquim José da Silva Xavier, 1746–1792), inconfidente que não era poeta mas era o símbolo popular da Inconfidência, une literatura e história de forma indissolúvel. Seu martírio — foi o único enforcado e esquartejado; os demais conspiradodes foram degredados —transformou-o no primeiro mártir da independência brasileira. Os poetas inconfidentes que sobreviveram (Cláudio Manuel da Costa morreu na prisão em circunstâncias suspeitas) deixaram sua obra como documento de um Brasil que já sonhava com a soberania. O Arcadismo é, portanto, o período em que a literatura brasileira deixa de ser apenas colonial para começar a ser, ainda que timidamente, <em>nacional</em>.
        </p>

        <div className="math-block">
          <strong>Cláudio Manuel da Costa e a morte na prisão:</strong>
          <p>
            <strong>Cláudio Manuel da Costa</strong> (1729–1789) foi o mais velho dos poetas inconfidentes e o mais classicizante deles — seus sonetos bebem diretamente de Camões e de Petrarca. Preso em 1789, foi encontrado morto em sua cela em julho daquele ano. A versão oficial foi suicídio, mas muitos historiadores suspeitam que foi assassinado para não entregar outros conspiradores sob tortura. Sua obra poética — os sonetos de temática filosófica e bucólica, ainda fortemente marcados pela medida velha do mundo ibérico — é considerada a transição entre o final do Barroco e o Arcadismo pleno. O ENEM pode apresentar seus sonetos para que o candidato identifique o movimento literário e as características de estilo.
          </p>
        </div>

        <div className="lesson-highlight">
          <h3>O que cai no ENEM sobre o Arcadismo</h3>
          <p>
            As questões do ENEM sobre Arcadismo costumam focar em: (1) identificação de características árcades em fragmentos poéticos (bucolismo, lemas latinos, pseudônimos, mito do pastor); (2) comparação entre o Arcadismo e o Barroco que o antecede ou o Romantismo que o sucede; (3) leitura crítica dos épicos arcádicos (<em>O Uraguai</em>, <em>Caramuru</em>) em relação à questão indígena; (4) contextualização da Inconfidência Mineira e seu impacto na literatura. Para resolução, lembre-se: Arcadismo = século XVIII + razão + campo + simplicidade + lemas latinos. Se o texto tem esses elementos, é Arcadismo. Se tem angústia existencial e antíteses — é Barroco. Se tem sentimentalismo exacerbado e natureza como espelho da alma — é Romantismo.
          </p>
        </div>

        <div className="math-block">
          <strong>O Arcadismo em Portugal — Bocage e a geração seguinte:</strong>
          <p>
            Em Portugal, o Arcadismo teve como maior expoente tardio <strong>Bocage</strong> (Manuel Maria Barbosa du Bocage, 1765–1805), fundador da Nova Arcádia (1790) e autor de sonetos que já apontam para o Romantismo. Sua obra é marcada pela tensão entre a disciplina formal árcade e a sensibilidade individual pré-romântica. Bocage é raro no ENEM, mas pode aparecer em questões comparativas entre o Arcadismo português e o brasileiro, ou em questões que pedem ao candidato que identifique características de transição entre movimentos literários. No Brasil, o Arcadismo encerrou-se simbolicamente com a Inconfidência Mineira (1789) e com o exílio ou morte de seus principais poetas — abrindo espaço para o Romantismo que chegaria três décadas depois com a geração de Gonçalves de Magalhães. A chegada da família real portuguesa ao Brasil em 1808 e a subsequente abertura dos portos acelerou esse processo: o Brasil passou de colônia fechada a sede do Império, e a literatura, que havia sobrevivido na clandestinidade da Inconfidência, começava a ser possível abertamente — com novos temas, novas formas e novas liberdades.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 13 — EXERCÍCIOS ── */}
      <section className="lesson-section">
        <span className="section-kicker">Prática</span>
        <h2>Questões Comentadas</h2>

        <Exercise
          level="Básico"
          title="1. Características Árcades"
          statement={
            <p>
              O Arcadismo é o movimento literário do século XVIII que reage aos excessos do Barroco. Assinale a alternativa que apresenta corretamente um conjunto de características do Arcadismo:
            </p>
          }
          options={[
            { letter: "a", text: "Angústia existencial, paradoxos teológicos, linguagem rebuscada e uso de antíteses entre vida e morte." },
            { letter: "b", text: "Bucolismo, simplicidade de linguagem, valorização da razão, idealização da vida campestre e uso de lemas latinos como carpe diem e fugere urbem.", correct: true },
            { letter: "c", text: "Individualismo exacerbado, sentimentalismo, uso da natureza como espelho da alma e valorização da pátria." },
            { letter: "d", text: "Ruptura com todas as tradições anteriores, verso livre, linguagem cotidiana e crítica à industrialização." },
          ]}
          resolution={
            <p>
              A alternativa B apresenta corretamente as características do Arcadismo: bucolismo (idealização da vida campestre com pastores fictícios), simplicidade de linguagem (reação ao Barroco rebuscado), valorização da razão (influência iluminista) e os lemas latinos característicos (<em>carpe diem</em> = aproveite o momento; <em>fugere urbem</em> = fugir da cidade). A alternativa A descreve o Barroco. A alternativa C descreve o Romantismo. A alternativa D descreve o Modernismo.
            </p>
          }
        />

        <Exercise
          level="Intermediário"
          title="2. Os Lemas Árcades"
          statement={
            <p>
              Nas liras de <em>Marília de Dirceu</em>, Tomás Antônio Gonzaga escreve:<br /><br />
              <em>"Não quero desse sábio que desprezas<br />
              a distinção que as almas diferença;<br />
              contentam-me as amigas e riquezas<br />
              que nunca vão além da suficiência."</em><br /><br />
              O ideal expresso nesses versos corresponde ao lema árcade:
            </p>
          }
          options={[
            { letter: "a", text: "Carpe diem — aproveitar intensamente o momento presente, sem preocupações com o futuro." },
            { letter: "b", text: "Fugere urbem — a necessidade de fugir da cidade corrompida para a pureza do campo." },
            { letter: "c", text: "Aurea mediocritas — o ideal da mediania dourada, da vida suficiente e equilibrada, sem excessos nem miséria.", correct: true },
            { letter: "d", text: "Locus amoenus — a descrição do lugar agradável e bucólico como cenário ideal para a vida." },
          ]}
          resolution={
            <p>
              O verso chave é <em>"contentam-me as riquezas que nunca vão além da suficiência"</em>: o eu lírico recusa o excesso e se satisfaz com o que é suficiente. Isso é a <strong><em>aurea mediocritas</em></strong> (mediania dourada) horaciana — o ideal de uma vida equilibrada, nem rica nem pobre, sem ambições excessivas. <em>Carpe diem</em> (A) seria aproveitar o momento, não rejeitar a riqueza. <em>Fugere urbem</em> (B) seria a fuga da cidade. <em>Locus amoenus</em> (D) seria a descrição de um espaço bucólico ideal.
            </p>
          }
        />

        <Exercise
          level="Avançado"
          title="3. O Uraguai e a Inovação Épica"
          statement={
            <p>
              Em comparação com as epopeias clássicas (<em>Os Lusíadas</em>, <em>Eneida</em>, <em>Ilíada</em>), o poema <em>O Uraguai</em> de Basílio da Gama representa uma inovação significativa. Identifique a alternativa que melhor descreve essa inovação:
            </p>
          }
          options={[
            { letter: "a", text: "Mantém todos os elementos épicos clássicos (máquina mitológica, herói semidivino, oitava rima), mas adapta-os ao contexto colonial brasileiro." },
            { letter: "b", text: "Abandona a máquina mitológica greco-romana e coloca os indígenas guaranis como protagonistas dignos, usando ainda verso livre em vez da oitava rima tradicional.", correct: true },
            { letter: "c", text: "É o primeiro poema em língua portuguesa a não usar versos, sendo redigido inteiramente em prosa poética." },
            { letter: "d", text: "Basílio da Gama inova ao utilizar pela primeira vez o soneto como forma de epopeia, unindo lírica e épica." },
          ]}
          resolution={
            <p>
              <em>O Uraguai</em> inova em dois aspectos essenciais: (1) <strong>ausência da máquina mitológica</strong> — em vez dos deuses do Olimpo, são os próprios protagonistas humanos (guaranis e portugueses) que conduzem a ação; e (2) <strong>protagonismo dos indígenas</strong> — Cacambo, Lindoia e Sepé Tiaraju são heróis com dignidade e humanidade, não selvagens a ser domados. Além disso, o poema usa verso sem rima fixa, o que era inovador para uma épica. A alternativa A nega a inovação. A alternativa C é factualmente incorreta (é em verso). A alternativa D é incorreta (não usa o soneto).
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="4. Marília de Dirceu e o Arcadismo"
          statement={
            <p>
              Leia o trecho de <em>Marília de Dirceu</em>:<br /><br />
              <em>"Irás a colher flores mil,<br />
              Que cultivei para ti, ó Marília,<br />
              Ao lado de um riacho gentil<br />
              Que mora no fim desta campina.<br /><br />
              E nós ali, sentados na relva,<br />
              Sem cuidado, sem pena, sem dor,<br />
              Ou dentro da secreta floresta<br />
              Contaremos histórias de amor."</em><br /><br />
              O fragmento materializa características centrais do Arcadismo. Identifique-as:
            </p>
          }
          options={[
            { letter: "a", text: "A angústia existencial barroca: a menção à dor (v. 7) revela que o eu lírico sofre intensamente e não consegue superar o pessimismo." },
            { letter: "b", text: "O bucolismo árcade: a natureza (flores, riacho, relva, floresta) é espaço de harmonia e felicidade; o amor é sereno, sem o sofrimento barroco; a vida no campo é o ideal.", correct: true },
            { letter: "c", text: "O indianismo romântico: a floresta e a natureza exuberante do trecho revelam o olhar de admiração pelo indígena típico do Romantismo." },
            { letter: "d", text: "O naturalismo realista: a descrição detalhada da campina, do riacho e da floresta revela um interesse científico e objetivo pela natureza brasileira." },
          ]}
          resolution={
            <p>
              O fragmento é um exemplo perfeito do <strong>bucolismo árcade</strong>: a natureza — flores, riacho, relva, floresta — é um espaço de harmonia e paz, não de perigo ou angústia. O casal está ali "sem cuidado, sem pena, sem dor" — a tríade negativa aponta justamente para a ausência do sofrimento barroco. O amor é sereno e simples; a vida no campo é o lugar ideal. O <em>locus amoenus</em> (lugar agradável) está materializado em cada detalhe. A alternativa A erra ao invocar a angústia barroca — o "sem dor" é a negação dessa angústia. As alternativas C e D confundem o Arcadismo com outros movimentos posteriores.
            </p>
          }
        />

        <Exercise
          level="Contextualizado"
          title="5. Arcadismo, Iluminismo e Inconfidência Mineira"
          statement={
            <p>
              Um historiador da literatura afirma: <em>"A Inconfidência Mineira não foi uma coincidência histórica: ela emerge do mesmo solo intelectual que produziu o Arcadismo brasileiro — o Iluminismo, com suas ideias de direitos naturais, contrato social e questionamento da autoridade absoluta."</em><br /><br />
              Avalie essa afirmação e assinale a alternativa que melhor a discute:
            </p>
          }
          options={[
            { letter: "a", text: "A afirmação é incorreta: os poetas árcades eram exclusivamente preocupados com beleza formal e bucolismo, sem qualquer envolvimento com questões políticas." },
            { letter: "b", text: "A afirmação é correta: o Iluminismo — que alimentava tanto a estética árcade (razão, equilíbrio, clareza) quanto a política revolucionária (direitos naturais, soberania popular) — era o substrato intelectual comum a poetas e conspiradores em Minas Gerais do século XVIII.", correct: true },
            { letter: "c", text: "A afirmação é parcialmente correta: o Iluminismo influenciou o Arcadismo, mas a Inconfidência foi movida apenas por interesses econômicos, sem base filosófica." },
            { letter: "d", text: "A afirmação é incorreta porque o Arcadismo brasileiro precedeu o Iluminismo: os poetas mineiros influenciaram os filósofos europeus, não o contrário." },
          ]}
          resolution={
            <p>
              A afirmação do historiador é pertinente e fundamentada. O Iluminismo era um movimento intelectual de largo espectro: na literatura, produzia a estética da razão, clareza e equilíbrio do Arcadismo; na política, produzia as ideias de Rousseau sobre o contrato social, de Locke sobre os direitos naturais e de Montesquieu sobre a separação dos poderes. Os poetas inconfidentes — Cláudio Manuel da Costa, Gonzaga, Alvarenga Peixoto — eram literatos e homens públicos formados na Coimbra reformada por Pombal, onde liam os iluministas. Era inevitável que a mesma mentalidade que produzia seus sonetos bucólicos os levasse a questionar a legitimidade do domínio colonial português. A alternativa A nega a dimensão política dos árcades (incorreta: muitos eram inconfidentes). A alternativa C diminui arbitrariamente a base filosófica da Inconfidência. A alternativa D inverte historicamente a relação.
            </p>
          }
        />
      </section>

      {/* ── NOTA FINAL ── */}
      <section className="lesson-section">
        <span className="section-kicker">Síntese</span>
        <h2>Síntese do Arcadismo</h2>
        <p>
          O Arcadismo é o movimento da razão serena e do campo idealizado — mas, no Brasil, é também o movimento dos poetas inconfidentes, da consciência nacional nascente e da primeira crise política aberta com a metrópole portuguesa. Seus principais nomes — Cláudio Manuel da Costa, Tomás Antônio Gonzaga, Basílio da Gama, Santa Rita Durão — são simultaneamente poetas convencionais (na forma) e personagens históricos decisivos (na vida). O Arcadismo brasileiro não pode ser lido apenas como imitação do modelo europeu: é uma adaptação criativa que começa a dar ao Brasil uma voz literária própria.
        </p>
        <p>
          Para o ENEM, os pontos essenciais são: características gerais do Arcadismo (bucolismo, razão, lemas latinos, pseudônimos, reação ao Barroco); os principais autores e obras (<em>Marília de Dirceu</em>, <em>O Uraguai</em>, <em>Caramuru</em>, <em>Cartas Chilenas</em>); e a relação do movimento com o Iluminismo e a Inconfidência Mineira. Com essas bases, qualquer questão sobre o período pode ser respondida com confiança — seja identificando o movimento por um fragmento poético, seja analisando criticamente o ponto de vista dos épicos arcádicos sobre os povos indígenas.
        </p>
      </section>
    </article>
  );
}
